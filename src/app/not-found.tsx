import Link from 'next/link';
import { SiteHeader } from '@/src/components/site-header';
import { SiteFooter } from '@/src/components/site-footer';
import './not-found.css';

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-frame not-found-frame">
        <SiteHeader />
        <main id="main" className="not-found-main">
          <div className="not-found-grid" aria-hidden="true" />
          <div className="not-found-content">
            <div className="not-found-art" aria-hidden="true">
              <span>4</span>
              <span className="not-found-zero"><span className="not-found-cross not-found-cross-top">+</span><img src="/brand/cite-icon.png" alt="" width="68" height="49" /><span className="not-found-cross not-found-cross-bottom">+</span></span>
              <span>4</span>
            </div>
            <span className="not-found-kicker">PAGE NOT FOUND</span>
            <h1>Looks like this page<br /><em>is out of place.</em></h1>
            <p>Let’s get you back to building.</p>
            <Link className="not-found-home" href="/">Back to home <span aria-hidden="true">↗</span></Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
