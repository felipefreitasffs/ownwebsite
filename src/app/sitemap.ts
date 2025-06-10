import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles'; // Assuming this fetches all article slugs and potentially lastModified dates

// IMPORTANT: Replace with your actual deployed domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/artigos/${article.slug}`,
    lastModified: new Date(article.publishDate).toISOString(), // Or a dedicated lastModified field if you have one
    changeFrequency: 'monthly', // Or 'weekly' if you update articles frequently
    priority: 0.8, // Articles are important content
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(), // Or a static date if homepage rarely changes
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/experiencia`,
      lastModified: new Date().toISOString(), // Or a static date
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/artigos`,
      lastModified: new Date().toISOString(), // Update when new articles are published
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...articleEntries,
  ];
}
