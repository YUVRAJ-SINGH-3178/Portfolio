import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'Bingbot',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Applebot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://yuvilee.xyz/sitemap.xml',
  };
}
