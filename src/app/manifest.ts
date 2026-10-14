import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yuvraj Singh | Software Engineer & DevSecOps Specialist',
    short_name: 'Yuvraj Singh',
    description: 'Official portfolio of Yuvraj Singh — Software Engineer, DevSecOps specialist, and Computer Science undergraduate at SRM University AP.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0C0C0C',
    theme_color: '#0C0C0C',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
