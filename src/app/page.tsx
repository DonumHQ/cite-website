import { SystemPreview } from '@/src/components/system-preview';
import { ThemeSwitcher } from '@/src/components/theme-switcher';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-frame">
        <header className="site-header">
          <a className="brand" href="#" aria-label="CITE home">
            <img src="/brand/cite-logo.png" alt="CITE" width="130" height="25" />
          </a>
          <div className="header-right">
            <span className="donum-credit">BY <span className="donum-wordmark"><img className="donum-light" src="/brand/donum-lockup-light.svg" alt="Donum" width="105" height="29" /><img className="donum-dark" src="/brand/donum-lockup-dark.svg" alt="Donum" width="105" height="29" /></span></span>
            <span className="header-divider" />
            <ThemeSwitcher />
          </div>
        </header>
        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-copy">
              <div className="availability"><span /> COMING SOON</div>
              <h1 id="hero-title">The details<br />make the <em>difference.</em></h1>
              <p>An open source design system.</p>
            </div>
            <SystemPreview />
          </section>
        </main>
        <footer className="site-footer">
          <div className="footer-brand"><img src="/brand/cite-icon.png" alt="" width="23" height="17" /><span>© {new Date().getFullYear()} Donum</span></div>
          <div className="footer-links"><a href="/LICENSE" download>MIT License <span>↗</span></a><a href="/TRADEMARKS.txt">Brand notice <span>↗</span></a></div>
          <p>Donum and CITE names and brand assets are excluded from the MIT license.</p>
        </footer>
      </div>
    </>
  );
}
