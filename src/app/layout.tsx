import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({
  src: [
    { path: './fonts/Inter-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Inter-SemiBold.ttf', weight: '600', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
});
export const metadata: Metadata = { title: 'CITE — A shared language for what comes next.', description: 'An open source design system by Donum. Thoughtful foundations for interfaces that feel considered. MIT licensed code. Donum and CITE brands reserved. Coming soon.', icons: { icon: '/brand/cite-icon.png', apple: '/brand/cite-icon.png' } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('cite-theme');if(['light','dark','contrast'].indexOf(t)!==-1)document.documentElement.dataset.theme=t}catch(e){}})()` }} /></head><body className={inter.variable}>{children}</body></html>; }
