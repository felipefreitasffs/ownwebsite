
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

// This array now only holds metadata not present in the markdown frontmatter
const articlesStaticData: ArticleStaticMetaData[] = [
  {
    slug: 'separando-deploy-release',
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'abstract concept',
    publishDate: '2023-11-15',
  },
  {
    slug: 'modernizando-monolitos',
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'architecture software',
    publishDate: '2024-01-20',
  },
  {
    slug: 'personal-trainer-ia',
    coverImage: 'https://placehold.co/800x400.png',
    coverImageHint: 'ai fitness',
    publishDate: '2024-07-25', // Updated publish date as per new content
  },
];

// Helper function to read and parse markdown file
async function parseMarkdownFile(slug: string): Promise<{ title: string; summary: string; content: string } | null> {
  const filePath = path.join(process.cwd(), 'src', 'articles', `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents); // data contains frontmatter
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
      return null; // Will be filtered out
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
      return null; // Will be filtered out
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content, ...metaFromMarkdown } = markdownData;
    return {
      ...staticData,
      ...metaFromMarkdown, // This includes title and summary from frontmatter
    };
  });

  const resolvedMetadata = (await Promise.all(allMetadataPromises)).filter(Boolean) as Omit<Article, 'content'>[];

  return resolvedMetadata.sort((a, b) => {
    return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
  });
}
