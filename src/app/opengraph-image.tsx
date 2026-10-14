import { ImageResponse } from 'next/og';
import { textToDotGrid } from '@/components/dot-matrix/glyphGrid';

export const alt = 'Yuvraj Singh | Software Engineer & DevSecOps Specialist';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const grid = textToDotGrid('YUVRAJ SINGH', 1);
  const rows = 7;
  const cols = grid[0].length;
  const dotSize = 10;
  const gap = 5;
  const step = dotSize + gap;
  const totalW = cols * step;
  const totalH = rows * step;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0C0C0C',
          color: '#EDEDED',
          padding: '60px',
          fontFamily: 'monospace',
          border: '12px solid #232323',
        }}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #232323',
            paddingBottom: '20px',
            fontSize: '18px',
            color: '#8A8A85',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#FF3B30',
              }}
            />
            <span style={{ color: '#EDEDED', fontWeight: 'bold' }}>YUVRAJ SINGH</span>
            <span>•</span>
            <span>PORTFOLIO & ENGINEERING SYSTEMS</span>
          </div>
          <div>SRM UNIVERSITY AP</div>
        </div>

        {/* Center: Dot Matrix Name & Headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <svg
            width={totalW}
            height={totalH}
            viewBox={`0 0 ${totalW} ${totalH}`}
            style={{ display: 'block' }}
          >
            {Array.from({ length: rows }).map((_, r) =>
              Array.from({ length: cols }).map((_, c) => {
                const isLit = grid[r][c];
                const cx = c * step + dotSize / 2;
                const cy = r * step + dotSize / 2;
                return (
                  <circle
                    key={`${r}-${c}`}
                    cx={cx}
                    cy={cy}
                    r={isLit ? dotSize / 2 : (dotSize * 0.7) / 2}
                    fill={isLit ? '#EDEDED' : '#232323'}
                    opacity={isLit ? 1 : 0.4}
                  />
                );
              })
            )}
          </svg>

          <div
            style={{
              fontSize: '22px',
              color: '#8A8A85',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            SOFTWARE ENGINEER • DEVSECOPS & TELEMETRY SYSTEMS
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid #232323',
            paddingTop: '20px',
            fontSize: '16px',
            color: '#8A8A85',
          }}
        >
          <div>GITHUB: @YUVRAJ-SINGH-3178</div>
          <div>500+ CONTRIBUTIONS // ULPF • ETIO • ERRLY • POF</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
