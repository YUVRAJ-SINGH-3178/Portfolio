'use client';

import React from 'react';
import { SkillCategory } from '@/data/portfolioData';

interface SectionSkillsTableProps {
  skillCategories: SkillCategory[];
}

export default function SectionSkillsTable({ skillCategories }: SectionSkillsTableProps) {
  return (
    <div className="space-y-4">
      {skillCategories.map((cat) => (
        <div
          key={cat.category}
          className="border border-[var(--border)] bg-[var(--paper)] rounded-[6px] p-4 sm:p-5"
        >
          {/* Category Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-[var(--border)] mb-3">
            <h3 className="font-sans text-xs uppercase tracking-wider font-bold text-[var(--ink)]">
              {cat.category}
            </h3>
            <span className="font-mono text-[10px] text-[var(--muted)]">
              {cat.items.length} Technologies
            </span>
          </div>

          {/* Grid of Skills with Level and Evidence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between p-2.5 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] hover:border-[var(--ink)]/30 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-sans text-xs font-semibold text-[var(--ink)]">
                    {item.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded-[3px] border border-[var(--border)] bg-[var(--paper)] text-[var(--muted)] shrink-0">
                    {item.level}
                  </span>
                </div>
                <div className="font-sans text-[11px] text-[var(--muted)] mt-1 truncate" title={item.evidence}>
                  {item.evidence}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
