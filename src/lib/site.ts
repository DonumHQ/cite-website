/** Set this to the public production origin at build time. */
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = new URL(configuredUrl || 'https://www.citeui.com');

if (!['http:', 'https:'].includes(siteUrl.protocol) || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin, such as https://cite.example.com');
}

export const site = {
  name: 'CITE',
  title: 'CITE | Open Source Design System by Donum',
  description: 'CITE is an open source design system by Donum. A thoughtful foundation for building interfaces. Coming soon.',
  url: siteUrl.origin,
} as const;
