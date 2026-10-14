'use client';

import React from 'react';
import { ProjectSpec } from '@/data/portfolioData';

interface SectionProjectsProps {
  projects: ProjectSpec[];
}

export default function SectionProjects({ projects }: SectionProjectsProps) {
  return (
    <div className="space-y-4">
      {projects.map((proj) => (
        <div
          key={proj.id}
          className="group relative border border-[var(--border)] bg-[var(--paper)] p-4 sm:p-5 rounded-[6px] hover:border-[var(--ink)]/40 transition-colors"
          id={`project-${proj.id}`}
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-[var(--border)]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] text-[var(--accent)] uppercase font-semibold">
                  {proj.target}
                </span>
              </div>
              <h3 className="font-sans text-base sm:text-lg font-bold text-[var(--ink)]">
                {proj.name}
              </h3>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
              {proj.liveBadge && proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[var(--accent)] text-white text-[11px] font-mono font-medium hover:opacity-90 transition-opacity"
                  aria-label={`Open live marketplace for ${proj.name}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Marketplace</span>
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              )}

              {proj.codeUrl && (
                <a
                  href={proj.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] text-[11px] font-mono text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
                  aria-label={`View ${proj.name} repository on GitHub`}
                >
                  <span>GitHub</span>
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-[var(--muted)]" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Scope & Details */}
          <div className="py-3 font-sans text-xs sm:text-[13px] text-[var(--ink)] leading-relaxed">
            <ul className="space-y-1.5 list-disc list-outside pl-4 text-[var(--muted)]">
              {proj.scope.map((bullet, bIdx) => (
                <li key={bIdx} className="leading-relaxed">
                  <span className="text-[var(--ink)]">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer: Tech Stack Pills & Status */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[var(--border)] font-mono text-[11px]">
            <div className="flex flex-wrap gap-1.5">
              {proj.build.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-[3px] border border-[var(--border)] bg-[var(--paper)] text-[10px] text-[var(--muted)] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className="text-[10px] text-[var(--muted)]">
              Status: <span className="text-[var(--ink)] font-medium">{proj.status}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
