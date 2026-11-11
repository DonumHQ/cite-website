# CITE | Coming soon

A static Next.js App Router landing page for Donum’s open source design system.

## Develop

```sh
npm install
npm run dev
```

Visit http://localhost:3002. `npm run build` generates the deployable static `out/` directory. Serve it using any static host. No email collection, API routes, backend, cookies, analytics, or runtime environment variables.

## Structure

- `src/app`: page composition, metadata, self-hosted Inter fonts, and responsive styles.
- `src/components/system-preview.tsx`: interactive component preview.
- `src/components/theme-switcher.tsx`: system, light, dark, and high-contrast appearance control.
- `public/brand`: supplied CITE wordmark and navigation/favicon icon.
- `public/LICENSE`: downloadable MIT license.

Primary brand color: `#C41E3A`. Playground content is an illustrative design direction, not documentation of released CITE components.

Code: MIT © Donum. Donum and CITE names, trade names, logos, wordmarks, icons, and other brand assets are excluded from the MIT license. All rights in the brands are reserved by Donum. See [TRADEMARKS.md](TRADEMARKS.md).

Typography uses the Inter font, self-hosted with regular (400) and semibold (600) weights. Inter is licensed separately under the [SIL Open Font License 1.1](src/app/fonts/OFL.txt).

Appearance follows the system by default. A manually selected appearance is saved in browser local storage and can be reset by choosing System.

## Search and sharing

Set `NEXT_PUBLIC_SITE_URL` to the public production origin before building. The default is `https://citeui.com`, the canonical production domain. This value determines the canonical URL, Open Graph and X image URLs, sitemap, and robots sitemap reference. The social image at `public/og.png` uses the supplied CITE logo and Inter font.
