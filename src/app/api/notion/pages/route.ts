import { getPages } from '@/data-access/api/notion';
import { APIErrorCode, ClientErrorCode, isNotionClientError } from '@notionhq/client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const pages = await getPages();
    return NextResponse.json(pages);
  } catch (error) {
    if (isNotionClientError(error)) {
      switch (error.code) {
        case ClientErrorCode.RequestTimeout: {
          return NextResponse.json({ error: 'Request timeout' }, { status: 500 });
        }
        case APIErrorCode.ObjectNotFound: {
          return NextResponse.json({ error: 'Database not found' }, { status: 404 });
        }
        case APIErrorCode.Unauthorized: {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        default: {
          return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 });
        }
      }
    } else {
      return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 });
    }
  }
}
