'use client';

import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('ys_theme') as 'light' | 'dark' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = prefersDark ? 'dark' : 'light';
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('ys_theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="group relative flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--paper)]/85 backdrop-blur-md text-[var(--ink)] shadow-md hover:border-[var(--accent)] hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      >
        {/* Subtle dot-matrix indicator dot */}
        <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />

        {isDark ? (
          /* Sun Icon for switching to Light */
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="M4.93 4.93l1.41 1.41" />
            <path d="M17.66 17.66l1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="M6.34 17.66l-1.41 1.41" />
            <path d="M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          /* Moon Icon for switching to Dark */
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-[var(--ink)] group-hover:-rotate-12 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </div>
  );
}
