import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { site, siteUrl } from '@/src/lib/site';
import './globals.css';

const inter = localFont({
  src: [
    { path: './fonts/Inter-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Inter-SemiBold.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: 'en_US',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'CITE, an open source design system by Donum' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: '/brand/cite-icon.png', apple: '/brand/cite-icon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('cite-theme');if(['light','dark','contrast'].indexOf(t)!==-1)document.documentElement.dataset.theme=t}catch(e){}})()` }} />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
