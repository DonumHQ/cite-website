'use client';

import { useEffect, useRef, useState } from 'react';

type Theme = 'system' | 'light' | 'dark' | 'contrast';
const themes: Theme[] = ['system', 'light', 'dark', 'contrast'];
const storageKey = 'cite-theme';

function readTheme(): Theme {
  try {
    const saved = localStorage.getItem(storageKey);
    return themes.includes(saved as Theme) ? saved as Theme : 'system';
  } catch {
    return 'system';
  }
}

function applyTheme(theme: Theme) {
  if (theme === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = theme;
}

function ThemeIcon({ theme }: { theme: Theme }) {
  const shared = { viewBox: '0 0 24 24', width: 19, height: 19, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const };
  if (theme === 'light') return <svg {...shared}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
  if (theme === 'dark') return <svg {...shared}><path d="M20.7 14.1A8.5 8.5 0 0 1 9.9 3.3 8.5 8.5 0 1 0 20.7 14.1Z" /></svg>;
  if (theme === 'contrast') return <svg {...shared}><circle cx="12" cy="12" r="8.25" /><path d="M12 3.75a8.25 8.25 0 0 1 0 16.5Z" fill="currentColor" stroke="none" /></svg>;
  return <svg {...shared}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>;
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('system');
  const [open, setOpen] = useState(false);
  const controlRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = readTheme();
    setTheme(saved);
    applyTheme(saved);
    function sync(event: StorageEvent) {
      if (event.key === storageKey || event.key === null) {
        const next = readTheme();
        setTheme(next);
        applyTheme(next);
      }
    }
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: MouseEvent) {
      if (!controlRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('mousedown', dismiss);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', dismiss);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  function changeTheme(value: Theme) {
    setTheme(value);
    setOpen(false);
    applyTheme(value);
    triggerRef.current?.focus();
    try {
      if (value === 'system') localStorage.removeItem(storageKey);
      else localStorage.setItem(storageKey, value);
    } catch {
      // The choice still applies for the current page when storage is unavailable.
    }
  }

  const labels: Record<Theme, string> = {
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    contrast: 'High contrast',
  };

  return (
    <div className="theme-control" ref={controlRef}>
      <button
        ref={triggerRef}
        className="theme-trigger"
        type="button"
        aria-label={`Appearance: ${labels[theme]}`}
        aria-expanded={open}
        aria-controls="theme-menu"
        onClick={() => setOpen(!open)}
        title="Change appearance"
      >
        <ThemeIcon theme={theme} />
      </button>
      {open && (
        <div className="theme-menu" id="theme-menu" role="group" aria-label="Appearance">
          {themes.map(option => (
            <button key={option} type="button" className="theme-option" aria-label={labels[option]} title={labels[option]} aria-pressed={theme === option} onClick={() => changeTheme(option)}>
              <ThemeIcon theme={option} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
