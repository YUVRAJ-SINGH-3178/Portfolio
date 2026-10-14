'use client';

import React, { useEffect, useState } from 'react';
import DotText from '../dot-matrix/DotText';

interface NavItem {
  id: string;
  num: string;
  title: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'sec-features', num: '01', title: 'FEATURES' },
  { id: 'sec-applications', num: '02', title: 'APPLICATIONS' },
  { id: 'sec-description', num: '03', title: 'DESCRIPTION' },
  { id: 'sec-pins', num: '04', title: 'PIN CONFIGURATION' },
  { id: 'sec-operating-conditions', num: '05', title: 'OPERATING CONDITIONS' },
  { id: 'sec-used-in', num: '06', title: 'USED IN (PROJECTS)' },
  { id: 'sec-activity', num: '07', title: 'ACTIVITY (TELEMETRY)' },
  { id: 'sec-open-source', num: '08', title: 'OPEN-SOURCE CONTRIBUTIONS' },
  { id: 'sec-skills', num: '09', title: 'SKILLS & AUDIT' },
  { id: 'sec-ordering', num: '10', title: 'ORDERING INFORMATION' },
  { id: 'sec-revisions', num: '11', title: 'REVISION HISTORY' },
];

export default function StickyNavRail() {
  const [activeId, setActiveId] = useState<string>('sec-features');

  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 64; // accounting for running header
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      className="hidden lg:block w-64 shrink-0 font-mono text-xs select-none sticky top-16 self-start max-h-[calc(100vh-5rem)] overflow-y-auto no-scrollbar border-r border-[var(--border)] pr-4 py-2"
      aria-label="Datasheet sections table of contents"
    >
      <div className="pb-3 mb-3 border-b border-[var(--border)] flex items-center justify-between">
        <span className="text-[10px] tracking-widest text-[var(--muted)] uppercase font-semibold">
          TABLE OF CONTENTS
        </span>
        <span className="text-[10px] text-[var(--muted)]">SEC 01–11</span>
      </div>

      <ul className="space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`group flex items-center justify-between py-1 px-2 border transition-colors ${
                  isActive
                    ? 'border-[var(--accent)] bg-[var(--paper)] text-[var(--ink)] font-semibold'
                    : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--border)]'
                }`}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  {/* DotText for section number */}
                  <DotText
                    text={item.num}
                    dotSize={1.4}
                    gap={0.9}
                    showUnlit={false}
                    accentColor={isActive}
                  />
                  <span className="truncate text-[11px] uppercase tracking-tight">
                    {item.title}
                  </span>
                </div>

                {/* Active red accent marker */}
                {isActive && (
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0"
                    aria-hidden="true"
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Package Specs Sidebar Footnote */}
      <div className="mt-6 pt-3 border-t border-[var(--border)] text-[10px] text-[var(--muted)] leading-relaxed">
        <div>DEVICE: YS-3178</div>
        <div>FOOTPRINT: DIP-8 LEAD</div>
        <div>CLASSIFICATION: UNRESTRICTED</div>
      </div>
    </nav>
  );
}
