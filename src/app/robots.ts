import type { MetadataRoute } from 'next';

// IMPORTANT: Replace with your actual deployed domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Add disallow rules if you have specific paths you don't want crawled
        // disallow: '/private/', 
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    // You can also specify a host if needed, though sitemap usually covers it
    // host: siteUrl, 
  };
}
