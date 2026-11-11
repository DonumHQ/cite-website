import Link from 'next/link';
import { CopyrightYear } from '@/src/components/copyright-year';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-meta">
        <div className="footer-copyright">© <CopyrightYear /> <a href="https://donum.im">Donum Platforms</a></div>
        <nav className="footer-links" aria-label="Legal">
          <a href="/LICENSE" download>MIT License <span aria-hidden="true">↗</span></a>
          <a href="/TRADEMARKS.txt">Brand notice <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
      <p>Donum and CITE names and brand assets are excluded from the MIT license.</p>
      <Link className="footer-wordmark" href="/" aria-label="CITE home">
        <img src="/brand/cite-logo.png" alt="" width="1427" height="276" />
      </Link>
    </footer>
  );
}
