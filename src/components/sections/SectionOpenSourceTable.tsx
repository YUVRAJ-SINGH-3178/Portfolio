'use client';

import React, { useState } from 'react';
import { PRItem } from '@/data/portfolioData';

interface SectionOpenSourceTableProps {
  prs: PRItem[];
}

export default function SectionOpenSourceTable({ prs }: SectionOpenSourceTableProps) {
  const [filter, setFilter] = useState<'ALL' | 'MERGED' | 'OPEN'>('ALL');

  const filtered = prs.filter((pr) => {
    if (filter === 'MERGED') return pr.merged;
    if (filter === 'OPEN') return pr.state === 'open';
    return true;
  });

  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? filtered : filtered.slice(0, 8);

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Controls & Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
        <span className="text-[11px] text-[var(--muted)]">
          {filtered.length} OF {prs.length} VERIFIED UPSTREAM PULL REQUESTS
        </span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setFilter('ALL')}
            className={`px-2.5 py-1 rounded-[4px] border text-[11px] transition-colors ${
              filter === 'ALL'
                ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] font-semibold'
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
            }`}
          >
            All ({prs.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('MERGED')}
            className={`px-2.5 py-1 rounded-[4px] border text-[11px] transition-colors ${
              filter === 'MERGED'
                ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] font-semibold'
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
            }`}
          >
            Merged ({prs.filter((p) => p.merged).length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('OPEN')}
            className={`px-2.5 py-1 rounded-[4px] border text-[11px] transition-colors ${
              filter === 'OPEN'
                ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] font-semibold'
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
            }`}
          >
            Open ({prs.filter((p) => p.state === 'open').length})
          </button>
        </div>
      </div>

      {/* Clean Table with no inner vertical scrollbar and hidden horizontal scrollbar */}
      <div className="overflow-x-auto no-scrollbar border border-[var(--border)] bg-[var(--paper)] rounded-[6px]">
        <table className="w-full text-left border-collapse font-mono text-xs">
          <thead className="bg-[var(--paper)] border-b border-[var(--border)]">
            <tr className="text-[10px] uppercase tracking-wider text-[var(--muted)]">
              <th className="py-2.5 px-3 sm:px-4 border-r border-[var(--border)] w-48">REPOSITORY</th>
              <th className="py-2.5 px-3 sm:px-4 border-r border-[var(--border)]">CHANGE / PR TITLE</th>
              <th className="py-2.5 px-3 border-r border-[var(--border)] w-24 text-center">STATUS</th>
              <th className="py-2.5 px-3 w-20 text-right">LINK</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {displayed.map((pr) => {
              const statusLabel = pr.merged ? 'MERGED' : pr.state === 'open' ? 'OPEN' : 'CLOSED';
              return (
                <tr key={`${pr.repo}-${pr.number}`} className="hover:bg-[var(--border)]/15 transition-colors">
                  <td className="py-2.5 px-3 sm:px-4 border-r border-[var(--border)] font-semibold text-[var(--ink)]">
                    <span className="block truncate max-w-[180px]" title={pr.repo}>
                      {pr.repo}
                    </span>
                    <span className="text-[10px] text-[var(--muted)] font-normal">
                      #{pr.number}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 sm:px-4 border-r border-[var(--border)] font-sans text-xs text-[var(--ink)] leading-snug">
                    <span className="line-clamp-2">{pr.title}</span>
                  </td>
                  <td className="py-2.5 px-3 border-r border-[var(--border)] text-center">
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded-[3px] text-[9px] font-mono font-bold tracking-wider border ${
                        pr.merged
                          ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]'
                          : pr.state === 'open'
                          ? 'border-[var(--accent)] text-[var(--accent)]'
                          : 'border-[var(--border)] text-[var(--muted)]'
                      }`}
                    >
                      {statusLabel}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-right">
                    <a
                      href={pr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[11px] font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:underline"
                      aria-label={`View PR #${pr.number} in ${pr.repo}`}
                    >
                      <span>View</span>
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Expand / Collapse toggle to prevent page clutter and eliminate inner vertical scrollbars */}
        {filtered.length > 8 && (
          <div className="p-2.5 border-t border-[var(--border)] text-center bg-[var(--paper)]">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] text-[11px] font-mono text-[var(--ink)] hover:border-[var(--ink)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            >
              <span>{showAll ? '▲ Show Fewer PRs' : `▼ View All ${filtered.length} Pull Requests`}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
