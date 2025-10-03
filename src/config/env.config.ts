import { z } from 'zod';

const configSchema = z.object({
  NEXT_PUBLIC_NOTION_DATABASE_ID: z.string(),
  NEXT_PUBLIC_NOTION_TOKEN: z.string(),
  NEXT_PUBLIC_URL: z.string(),
  NEXT_PUBLIC_NOTION_DATASOURCE_ID: z.string()
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
  NEXT_PUBLIC_NOTION_TOKEN: process.env.NEXT_PUBLIC_NOTION_TOKEN,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  NEXT_PUBLIC_NOTION_DATASOURCE_ID: process.env.NEXT_PUBLIC_NOTION_DATASOURCE_ID
});

if (!configProject.success) {
  // eslint-disable-next-line no-console
  console.error(configProject.error.issues);
  throw new Error('Các giá trị khai báo trong file .env không hợp lệ');
}

const envConfig = configProject.data;

export default envConfig;
