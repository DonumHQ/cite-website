import { SystemPreview } from '@/src/components/system-preview';
import { SiteHeader } from '@/src/components/site-header';
import { SiteFooter } from '@/src/components/site-footer';
import { site } from '@/src/lib/site';

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: site.name,
        url: `${site.url}/`,
        description: site.description,
        publisher: { '@type': 'Organization', name: 'Donum Platforms', url: 'https://donum.im' },
      }).replace(/</g, '\\u003c') }} />
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-frame">
        <SiteHeader />
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <div className="availability"><span /> COMING SOON</div>
              <h1 id="hero-title">A better way<br />to <em>build.</em></h1>
              <p>An open source design system.</p>
            </div>
            <SystemPreview />
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
