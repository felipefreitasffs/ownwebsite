
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type ArticleStaticMetaData = {
  slug: string;
  coverImage: string;
  coverImageHint: string;
  publishDate: string; // YYYY-MM-DD
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  coverImageHint: string;
  publishDate: string;
};

const articlesStaticData: ArticleStaticMetaData[] = [
  {
    slug: 'separando-deploy-release',
    coverImage: '/images/deploy.jpeg',
    coverImageHint: 'abstract concept',
    publishDate: '2024-10-16',
  },
  {
    slug: 'modernizando-monolitos',
    coverImage: '/images/strangler.jpeg',
    coverImageHint: 'architecture software',
    publishDate: '2024-10-01',
  },
  {
    slug: 'personal-trainer-ia',
    coverImage: '/images/personalia.png',
    coverImageHint: 'ai fitness',
    publishDate: '2025-06-5',
  },
];

async function parseMarkdownFile(slug: string): Promise<{ title: string; summary: string; content: string } | null> {
  const filePath = path.join(process.cwd(), 'src', 'articles', `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);
    return {
      title: data.title || 'Untitled Article',
      summary: data.summary || '',
      content: content.trim(),
    };
  } catch (error) {
    console.error(`Error reading or parsing markdown file for slug ${slug}:`, error);
    return null;
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const staticData = articlesStaticData.find(article => article.slug === slug);
  if (!staticData) {
    return undefined;
  }

  const markdownData = await parseMarkdownFile(slug);
  if (!markdownData) {
    console.error(`Markdown content for slug ${slug} could not be loaded.`);
    return undefined;
  }

  return {
    ...staticData,
    title: markdownData.title,
    summary: markdownData.summary,
    content: markdownData.content,
  };
}

export async function getAllArticles(): Promise<Article[]> {
  const allArticlesPromises = articlesStaticData.map(async (staticData) => {
    const markdownData = await parseMarkdownFile(staticData.slug);
    if (!markdownData) {
      return null;
    }
    return {
      ...staticData,
      title: markdownData.title,
      summary: markdownData.summary,
      content: markdownData.content,
    };
  });

  const resolvedArticles = (await Promise.all(allArticlesPromises)).filter(Boolean) as Article[];

  return resolvedArticles.sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
}

export async function getArticlesMetadata(): Promise<Omit<Article, 'content'>[]> {
  const allMetadataPromises = articlesStaticData.map(async (staticData) => {
    const markdownData = await parseMarkdownFile(staticData.slug);
    if (!markdownData) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content, ...metaFromMarkdown } = markdownData;
    return {
      ...staticData,
      ...metaFromMarkdown,
    };
  });

  const resolvedMetadata = (await Promise.all(allMetadataPromises)).filter(Boolean) as Omit<Article, 'content'>[];

  return resolvedMetadata.sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
}
