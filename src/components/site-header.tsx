import Link from 'next/link';
import { ThemeSwitcher } from '@/src/components/theme-switcher';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="CITE home">
        <img src="/brand/cite-logo.png" alt="CITE" width="130" height="25" />
      </Link>
      <div className="header-right">
        <a className="donum-credit" href="https://donum.im" aria-label="Donum website">
          BY <span className="donum-wordmark">
            <img className="donum-light" src="/brand/donum-lockup-light.svg" alt="Donum" width="105" height="29" />
            <img className="donum-dark" src="/brand/donum-lockup-dark.svg" alt="Donum" width="105" height="29" />
          </span>
        </a>
        <span className="header-divider" />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
