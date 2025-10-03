import envConfig from '@/config/env.config';
import { INotionPageResponse } from '@/data-access/models/notion-page';
import { notionClient } from '@/libs/notion/client';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const getPages = async () => {
  const response = await notionClient.dataSources.query({
    data_source_id: envConfig.NEXT_PUBLIC_NOTION_DATASOURCE_ID
  });
  return response;
};

export const getPageContent = async (pageId: string): Promise<BlockObjectResponse[]> => {
  return notionClient.blocks.children.list({ block_id: pageId }).then((res) => res.results as BlockObjectResponse[]);
};

export const getPageBySlug = async (id: string) => {
  return notionClient.pages.retrieve({ page_id: id }).then((res) => {
    return res as INotionPageResponse | undefined;
  });
};
