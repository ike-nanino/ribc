

// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/transfer',
          '/dashboard',
          '/my-banks',
          '/transactions-history',
          '/*' // catch-all for subpages
        ],
      },
    ],
    sitemap: 'https:bsicanadabank.com/sitemap.xml',
  }
}
