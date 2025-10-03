import envConfig from '@/config/env.config';
import { Client, LogLevel } from '@notionhq/client';

export const notionClient = new Client({
  auth: envConfig.NEXT_PUBLIC_NOTION_TOKEN,
  logLevel: LogLevel.DEBUG
});
