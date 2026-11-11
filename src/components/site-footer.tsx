import { CopyrightYear } from '@/src/components/copyright-year';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><img src="/brand/cite-icon.png" alt="" width="23" height="17" /><span>© <CopyrightYear /> <a href="https://donum.im">Donum Platforms</a></span></div>
      <div className="footer-links"><a href="/LICENSE" download>MIT License <span>↗</span></a><a href="/TRADEMARKS.txt">Brand notice <span>↗</span></a></div>
      <p>Donum and CITE names and brand assets are excluded from the MIT license.</p>
    </footer>
  );
}
