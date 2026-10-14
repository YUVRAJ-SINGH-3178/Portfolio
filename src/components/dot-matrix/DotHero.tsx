'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { textToDotGrid } from './glyphGrid';

interface DotItem {
  col: number;
  row: number;
  x: number;
  y: number;
  isLit: boolean;
  energy: number; // 0 to 1 for hover illumination
}

export default function DotHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const dotsRef = useRef<DotItem[]>([]);
  const isVisibleRef = useRef<boolean>(true);
  const prefersReducedMotionRef = useRef<boolean>(false);
  const lastTimeRef = useRef<number>(0);
  const pointerPosRef = useRef<{ x: number; y: number } | null>(null);
  const [, setMounted] = useState(false);

  // Read CSS variables for theme colors
  const getThemeColors = useCallback(() => {
    if (typeof window === 'undefined') {
      return {
        paper: '#0C0C0C',
        ink: '#EDEDED',
        dotOff: '#232323',
        dotOn: '#EDEDED',
        accent: '#FF3B30',
      };
    }
    const style = getComputedStyle(document.documentElement);
    return {
      paper: style.getPropertyValue('--paper').trim() || '#0C0C0C',
      ink: style.getPropertyValue('--ink').trim() || '#EDEDED',
      dotOff: style.getPropertyValue('--dot-off').trim() || '#232323',
      dotOn: style.getPropertyValue('--dot-on').trim() || '#EDEDED',
      accent: style.getPropertyValue('--accent').trim() || '#FF3B30',
    };
  }, []);

  const buildDots = useCallback((width: number, height: number) => {
    const isMobile = width < 600;
    let gridCols = 0;
    let gridRows = 0;
    let gridData: boolean[][] = [];

    if (isMobile) {
      // Two-line layout for narrow mobile screens
      const line1 = textToDotGrid('YUVRAJ', 1);
      const line2 = textToDotGrid('SINGH', 1);
      const gapRows = 2;
      gridRows = 7 + gapRows + 7;
      gridCols = Math.max(line1[0].length, line2[0].length);

      gridData = Array.from({ length: gridRows }, () => Array(gridCols).fill(false));

      // Line 1 centered horizontally
      const offsetL1 = Math.floor((gridCols - line1[0].length) / 2);
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < line1[0].length; c++) {
          gridData[r][offsetL1 + c] = line1[r][c];
        }
      }

      // Line 2 centered horizontally
      const offsetL2 = Math.floor((gridCols - line2[0].length) / 2);
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < line2[0].length; c++) {
          gridData[7 + gapRows + r][offsetL2 + c] = line2[r][c];
        }
      }
    } else {
      // Single line "YUVRAJ SINGH" on desktop
      gridData = textToDotGrid('YUVRAJ SINGH', 1);
      gridRows = 7;
      gridCols = gridData[0].length;
    }

    // Determine dot pitch / spacing so text fits comfortably
    const minSidePadCols = isMobile ? 3 : 5;
    const minTopPadRows = isMobile ? 2 : 3;

    const maxSpacingW = (width - 16) / (gridCols + minSidePadCols * 2);
    const maxSpacingH = (height - 16) / (gridRows + minTopPadRows * 2);
    const spacing = Math.max(5, Math.min(maxSpacingW, maxSpacingH));

    // Fill the ENTIRE canvas surface with dots
    const totalCols = Math.max(gridCols + minSidePadCols * 2, Math.floor((width - 8) / spacing));
    const totalRows = Math.max(gridRows + minTopPadRows * 2, Math.floor((height - 8) / spacing));

    // Center the dot matrix field on the canvas
    const totalPixelW = (totalCols - 1) * spacing;
    const totalPixelH = (totalRows - 1) * spacing;
    const startX = (width - totalPixelW) / 2;
    const startY = (height - totalPixelH) / 2;

    // Center the lit characters within the full dot matrix
    const offsetCol = Math.floor((totalCols - gridCols) / 2);
    const offsetRow = Math.floor((totalRows - gridRows) / 2);

    const newDots: DotItem[] = [];

    for (let r = 0; r < totalRows; r++) {
      for (let c = 0; c < totalCols; c++) {
        const textR = r - offsetRow;
        const textC = c - offsetCol;
        const isLit =
          textR >= 0 && textR < gridRows && textC >= 0 && textC < gridCols
            ? gridData[textR][textC]
            : false;

        newDots.push({
          col: c,
          row: r,
          x: startX + c * spacing,
          y: startY + r * spacing,
          isLit,
          energy: 0,
        });
      }
    }

    dotsRef.current = newDots;
  }, []);

  const renderFrame = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const colors = getThemeColors();
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    const dt = lastTimeRef.current ? Math.min((time - lastTimeRef.current) / 1000, 0.1) : 0.016;
    lastTimeRef.current = time;

    ctx.clearRect(0, 0, width, height);

    const dots = dotsRef.current;
    const pointer = pointerPosRef.current;
    const decaySpeed = 2.4;
    const effectRadius = Math.max(44, (width / 50) * 3.8);

    // Compute base radius from dot spacing
    const spacing = dots.length > 1 ? Math.abs(dots[1].x - dots[0].x) || 10 : 10;
    const baseRadiusLit = Math.max(2.6, spacing * 0.28);
    const baseRadiusUnlit = Math.max(1.5, spacing * 0.16);

    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];

      // Update energy from pointer
      if (pointer && !prefersReducedMotionRef.current) {
        const dx = dot.x - pointer.x;
        const dy = dot.y - pointer.y;
        const distSq = dx * dx + dy * dy;
        const rSq = effectRadius * effectRadius;

        if (distSq < rSq) {
          const dist = Math.sqrt(distSq);
          const intensity = Math.pow(1 - dist / effectRadius, 1.4);
          dot.energy = Math.max(dot.energy, intensity);
        }
      }

      // Decay energy
      if (dot.energy > 0) {
        dot.energy = Math.max(0, dot.energy - dt * decaySpeed);
      }

      // Compute dot radius
      const r = (dot.isLit ? baseRadiusLit : baseRadiusUnlit) + dot.energy * 1.8;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2);

      if (dot.energy > 0.04) {
        // Pointer highlight in accent red
        ctx.fillStyle = colors.accent;
        ctx.globalAlpha = Math.min(1.0, 0.45 + dot.energy * 0.55);
        ctx.fill();
      } else if (dot.isLit) {
        // Lit dot
        ctx.fillStyle = colors.dotOn;
        ctx.globalAlpha = 1.0;
        ctx.fill();
      } else {
        // Unlit background grid dot covering entire canvas
        ctx.fillStyle = colors.dotOff;
        ctx.globalAlpha = 0.45;
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1.0;

    // Continue loop if visible and not reduced motion
    if (isVisibleRef.current && !prefersReducedMotionRef.current) {
      animFrameRef.current = requestAnimationFrame(renderFrame);
    }
  }, [getThemeColors]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const isMobile = width < 600;
    // Responsive aspect ratio ensuring full display fits and dots cover the box
    const height = isMobile ? Math.max(165, Math.floor(width * 0.44)) : Math.max(130, Math.floor(width * 0.19));

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    buildDots(width, height);
    renderFrame(performance.now());
  }, [buildDots, renderFrame]);

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (prefersReducedMotionRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    pointerPosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    if (!animFrameRef.current && isVisibleRef.current) {
      animFrameRef.current = requestAnimationFrame(renderFrame);
    }
  };

  const handlePointerLeave = () => {
    pointerPosRef.current = null;
  };

  useEffect(() => {
    setMounted(true);
    prefersReducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            lastTimeRef.current = performance.now();
            if (!prefersReducedMotionRef.current) {
              animFrameRef.current = requestAnimationFrame(renderFrame);
            }
          } else {
            if (animFrameRef.current) {
              cancelAnimationFrame(animFrameRef.current);
              animFrameRef.current = null;
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const themeObserver = new MutationObserver(() => {
      renderFrame(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    });

    return () => {
      resizeObserver.disconnect();
      observer.disconnect();
      themeObserver.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [resizeCanvas, renderFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-t-[8px] border-b border-[var(--border)] bg-[var(--paper)] select-none overflow-hidden"
      aria-label="Name display: YUVRAJ SINGH in dot-matrix layer"
    >
      <h1 className="sr-only">YUVRAJ SINGH</h1>

      <noscript>
        <div className="font-condensed text-3xl sm:text-5xl font-bold tracking-tight text-[var(--ink)] text-center py-4">
          YUVRAJ SINGH
        </div>
      </noscript>

      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="w-full block touch-none cursor-crosshair"
        style={{ imageRendering: 'pixelated' }}
        aria-hidden="true"
      />
    </div>
  );
}
