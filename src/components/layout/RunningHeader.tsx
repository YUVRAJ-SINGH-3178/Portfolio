'use client';

import React, { useEffect, useState } from 'react';

export default function RunningHeader() {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('ys_theme') as 'system' | 'light' | 'dark' | null;
    if (saved) {
      setTheme(saved);
      if (saved === 'system') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', saved);
      }
    }
  }, []);

  const toggleTheme = () => {
    let next: 'system' | 'light' | 'dark';
    if (theme === 'system') next = 'light';
    else if (theme === 'light') next = 'dark';
    else next = 'system';

    setTheme(next);
    localStorage.setItem('ys_theme', next);

    if (next === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', next);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--paper)]/90 backdrop-blur-md font-mono text-xs transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        {/* Left: Device code */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          <span className="font-bold tracking-tight text-[var(--ink)]">YS-3178</span>
          <span className="text-[var(--muted)] text-[11px] hidden sm:inline">
            // REV 2.0
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] text-[11px] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            aria-label={`Toggle theme. Current: ${theme}`}
          >
            <span className="text-[10px] uppercase font-semibold">
              {mounted ? theme : 'THEME'}
            </span>
          </button>

          <a
            href="/Yuvraj Singh_Resume.pdf"
            download="Yuvraj_Singh_Resume.pdf"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[var(--ink)] text-[var(--paper)] text-[11px] font-medium hover:bg-[var(--accent)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          >
            <span>Resume</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
