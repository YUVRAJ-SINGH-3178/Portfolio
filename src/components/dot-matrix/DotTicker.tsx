'use client';

import React, { useEffect, useState } from 'react';

interface GitHubStats {
  repos: number;
  contributions: string;
  latestCommitDate: string;
  username: string;
  source: string;
}

export default function DotTicker() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [istTime, setIstTime] = useState<string>('');

  // Update IST time live every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setIstTime(`${istString} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch GitHub stats
  useEffect(() => {
    let isMounted = true;
    async function loadStats() {
      try {
        const res = await fetch('/api/github');
        if (res.ok) {
          const data = await res.json();
          if (isMounted) {
            setStats(data);
            setLoading(false);
          }
        } else {
          throw new Error('Fallback required');
        }
      } catch {
        if (isMounted) {
          setStats({
            repos: 30,
            contributions: '500+',
            latestCommitDate: '2026-10-13',
            username: 'YUVRAJ-SINGH-3178',
            source: 'cached_fallback'
          });
          setLoading(false);
        }
      }
    }

    loadStats();
    return () => {
      isMounted = false;
    };
  }, []);

  const latestCommit = stats?.latestCommitDate || '2026-10-13';
  const reposCount = stats?.repos || 30;
  const contribCount = stats?.contributions || '500+';

  return (
    <div
      className="w-full rounded-b-[8px] bg-[var(--paper)] py-2.5 px-3 sm:px-4 overflow-hidden font-mono text-xs select-none"
      aria-label="Real-time telemetry ticker"
    >
      <div className="sr-only">
        Latest commit: {latestCommit}, Repositories: {reposCount}, Contributions this year: {contribCount}, Local time: {istTime}.
      </div>

      <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-[11px]">
        {/* Metric Items */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1.5 text-[var(--muted)]">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] tracking-wider uppercase text-[var(--muted)] font-semibold">
              COMMIT:
            </span>
            <span className="font-semibold text-[var(--accent)] font-mono">
              {latestCommit}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] tracking-wider uppercase text-[var(--muted)] font-semibold">
              REPOS:
            </span>
            <span className="font-semibold text-[var(--ink)] font-mono">
              {reposCount}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] tracking-wider uppercase text-[var(--muted)] font-semibold">
              CONTRIBS:
            </span>
            <span className="font-semibold text-[var(--ink)] font-mono">
              {contribCount}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[10px] tracking-wider uppercase text-[var(--muted)] font-semibold">
              IST:
            </span>
            <span className="font-semibold text-[var(--ink)] font-mono">
              {istTime || '12:00:00 IST'}
            </span>
          </div>
        </div>

        {/* Live heartbeat indicator */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] font-semibold">
            {loading ? 'SYNCING' : 'LIVE'}
          </span>
        </div>
      </div>
    </div>
  );
}
