'use client';

import React from 'react';
import { PORTFOLIO_DATA, ExperienceItem } from '@/data/portfolioData';

interface SectionExperienceProps {
  experiences?: ExperienceItem[];
}

export default function SectionExperience({ experiences = PORTFOLIO_DATA.experiences }: SectionExperienceProps) {
  return (
    <div className="space-y-4">
      {experiences.map((item) => (
        <div
          key={item.id}
          className="border border-[var(--border)] bg-[var(--paper)] p-4 sm:p-5 rounded-[6px] hover:border-[var(--ink)]/40 transition-colors"
        >
          {/* Header Row: Role, Organization, Period, Badge */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-[var(--border)]">
            <div>
              <h3 className="font-sans text-base font-bold text-[var(--ink)]">
                {item.role}
              </h3>
              <div className="text-xs font-medium text-[var(--muted)] flex items-center gap-2 mt-0.5">
                <span>{item.organization}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1 sm:pt-0 shrink-0 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded-[3px] border border-[var(--border)] bg-[var(--paper)] text-[10px] text-[var(--muted)]">
                {item.category}
              </span>
              <span className="text-[var(--muted)]">
                {item.period}
              </span>
            </div>
          </div>

          {/* Bullets */}
          <ul className="pt-3 space-y-1.5 list-disc list-outside pl-4 font-sans text-xs sm:text-[13px] text-[var(--muted)] leading-relaxed">
            {item.bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="leading-relaxed">
                <span className="text-[var(--ink)]">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
