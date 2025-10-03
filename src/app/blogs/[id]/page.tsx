import { getPageBySlug, getPageContent } from '@/data-access/api/notion';
import { Post } from '@/libs/components/post';
import { notionClient } from '@/libs/notion/client';
import { estimateReadingTime } from '@/libs/utils/estimate-reading-time';
import { wrapServerApi } from '@/libs/utils/wrap-server-api';
import bookmarkPlugin from '@notion-render/bookmark-plugin';
// Notion
import { NotionRenderer } from '@notion-render/client';
import hljsPlugin from '@notion-render/hljs-plugin';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const paramsData = await params;
  const post = await wrapServerApi(() => getPageBySlug(paramsData.id));

  //Redirect to not found page!
  if (!post) notFound();

  const content = await wrapServerApi(() => getPageContent(post.id));

  if (!content) notFound();

  const notionRenderer = new NotionRenderer({
    client: notionClient
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));

  const html = await notionRenderer.render(...content);

  const readingTime = estimateReadingTime(html, 150, true);

  // return <div>{post?.title}</div>;
  return (
    <Post
      title={post.properties.Name.title[0]?.plain_text || 'Untitled'}
      bannerImage={post.properties.banner_image?.files[0]?.file?.url ?? ''}
      bannerImageWidth={800}
      bannerImageHeight={400}
      content={html}
      readingTime={readingTime.text}
    />
  );
}
