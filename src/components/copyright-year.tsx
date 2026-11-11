'use client';

import { useEffect, useState } from 'react';

export function CopyrightYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function updateYear() {
      const now = new Date();
      setYear(now.getFullYear());
      const nextYear = new Date(now.getFullYear() + 1, 0, 1);
      timer = setTimeout(updateYear, Math.min(nextYear.getTime() - now.getTime(), 2_147_483_647));
    }

    updateYear();
    return () => clearTimeout(timer);
  }, []);

  return <span suppressHydrationWarning>{year}</span>;
}
