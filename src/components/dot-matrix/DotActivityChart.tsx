'use client';

import React, { useState, useMemo } from 'react';
import contributionsData from '@/data/contributions.json';

interface DayData {
  date: string;
  level: number;
}

export default function DotActivityChart() {
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    level: number;
    col: number;
    row: number;
  } | null>(null);

  // Group into weeks (7 days per column, 52 weeks)
  const weeks = useMemo(() => {
    const data: DayData[] = (contributionsData as DayData[]) || [];
    const sliced = data.slice(-364);

    const cols: DayData[][] = [];
    for (let i = 0; i < sliced.length; i += 7) {
      cols.push(sliced.slice(i, i + 7));
    }
    return cols;
  }, []);

  return (
    <div className="w-full border border-[var(--border)] bg-[var(--paper)] p-4 sm:p-5 rounded-[6px]" id="activity-chart">
      {/* Title Block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-3 mb-4">
        <div>
          <h3 className="font-sans text-sm sm:text-base font-bold text-[var(--ink)]">
            GitHub Contributions
          </h3>
          <p className="font-sans text-xs text-[var(--muted)] mt-0.5">
            500+ commits and pull requests over the past 52 weeks
          </p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <a
            href="https://github.com/YUVRAJ-SINGH-3178"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] text-[11px] text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
          >
            <span>@YUVRAJ-SINGH-3178</span>
            <svg viewBox="0 0 24 24" className="w-3 h-3 text-[var(--muted)]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>

      {/* Chart Scroll Container */}
      <div className="relative overflow-x-auto no-scrollbar pb-2 pt-1">
        <div className="w-full min-w-[560px] flex flex-col gap-2">
          {/* Month labels */}
          <div className="flex text-[10px] font-mono text-[var(--muted)] justify-between px-1">
            <span>NOV</span>
            <span>DEC</span>
            <span>JAN</span>
            <span>FEB</span>
            <span>MAR</span>
            <span>APR</span>
            <span>MAY</span>
            <span>JUN</span>
            <span>JUL</span>
            <span>AUG</span>
            <span>SEP</span>
            <span>OCT</span>
          </div>

          {/* Dot Grid */}
          <div className="flex justify-between items-center gap-[2px] sm:gap-[3px]">
            {weeks.map((week, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-[2px] sm:gap-[3px]">
                {week.map((day, rowIdx) => {
                  const isHovered =
                    hoveredDay?.col === colIdx && hoveredDay?.row === rowIdx;

                  let fill = 'var(--dot-off)';
                  let opacity = 0.35;

                  if (day.level === 1) {
                    fill = 'var(--dot-on)';
                    opacity = 0.45;
                  } else if (day.level === 2) {
                    fill = 'var(--dot-on)';
                    opacity = 0.7;
                  } else if (day.level === 3) {
                    fill = 'var(--dot-on)';
                    opacity = 0.95;
                  } else if (day.level === 4) {
                    fill = 'var(--accent)';
                    opacity = 1.0;
                  }

                  if (isHovered) {
                    fill = 'var(--accent)';
                    opacity = 1.0;
                  }

                  return (
                    <button
                      key={day.date}
                      type="button"
                      onMouseEnter={() =>
                        setHoveredDay({
                          date: day.date,
                          level: day.level,
                          col: colIdx,
                          row: rowIdx,
                        })
                      }
                      onMouseLeave={() => setHoveredDay(null)}
                      onFocus={() =>
                        setHoveredDay({
                          date: day.date,
                          level: day.level,
                          col: colIdx,
                          row: rowIdx,
                        })
                      }
                      onBlur={() => setHoveredDay(null)}
                      className="w-2.5 h-2.5 rounded-full transition-transform focus:scale-125 focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                      style={{
                        backgroundColor: fill,
                        opacity,
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      }}
                      aria-label={`${day.date}: Level ${day.level} activity`}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          {/* Legend & Tooltip */}
          <div className="flex items-center justify-between pt-3 border-t border-[var(--border)] font-mono text-[10px] text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[var(--dot-off)] opacity-40 inline-block" />
                <span className="w-2 h-2 rounded-full bg-[var(--dot-on)] opacity-45 inline-block" />
                <span className="w-2 h-2 rounded-full bg-[var(--dot-on)] opacity-70 inline-block" />
                <span className="w-2 h-2 rounded-full bg-[var(--dot-on)] opacity-95 inline-block" />
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] inline-block" />
              </div>
              <span>More</span>
            </div>

            <div className="h-4">
              {hoveredDay ? (
                <span className="text-[var(--ink)] font-medium">
                  {hoveredDay.date} — Level {hoveredDay.level} activity
                </span>
              ) : (
                <span className="text-[var(--muted)]">Hover any dot to inspect</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
