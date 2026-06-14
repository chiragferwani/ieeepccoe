import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: 'https://pccoesummerschool.vercel.app/sitemap.xml',
    host: 'https://pccoesummerschool.vercel.app',
  }
}
