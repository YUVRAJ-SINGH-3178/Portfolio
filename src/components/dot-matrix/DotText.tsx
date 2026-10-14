'use client';

import React from 'react';
import { textToDotGrid } from './glyphGrid';

interface DotTextProps {
  text: string;
  className?: string;
  dotSize?: number;
  gap?: number;
  showUnlit?: boolean;
  accentColor?: boolean;
}

export default function DotText({
  text,
  className = '',
  dotSize = 2.2,
  gap = 1.8,
  showUnlit = true,
  accentColor = false
}: DotTextProps) {
  const grid = textToDotGrid(text.toUpperCase(), 1);
  const rows = 7;
  const cols = grid[0]?.length || 0;

  const step = dotSize + gap;
  const width = cols * step;
  const height = rows * step;

  return (
    <span className={`inline-flex items-center select-none align-middle ${className}`} title={text}>
      <span className="sr-only">{text}</span>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="block"
        aria-hidden="true"
      >
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const isLit = grid[r][c];
            if (!isLit && !showUnlit) return null;

            const cx = c * step + dotSize / 2;
            const cy = r * step + dotSize / 2;
            const radius = isLit ? dotSize / 2 : (dotSize * 0.75) / 2;

            return (
              <circle
                key={`${r}-${c}`}
                cx={cx}
                cy={cy}
                r={radius}
                fill={
                  isLit
                    ? accentColor
                      ? 'var(--accent)'
                      : 'var(--dot-on)'
                    : 'var(--dot-off)'
                }
                opacity={isLit ? 1 : 0.4}
              />
            );
          })
        )}
      </svg>
    </span>
  );
}
