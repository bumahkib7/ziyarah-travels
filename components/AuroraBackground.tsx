'use client';

import React, { CSSProperties } from 'react';

interface AuroraBackgroundProps {
  colorStops?: [string, string, string];
  speed?: number;
  blend?: number;
  amplitude?: number;
  children?: React.ReactNode;
}

export default function AuroraBackground({
  colorStops = ['#8B5CF6', '#EC4899', '#3B82F6'],
  speed = 1.0,
  blend = 0.5,
  children,
}: AuroraBackgroundProps) {
  const animationDuration = `${30 / speed}s`;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Aurora gradient layers */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, ${colorStops[0]}${Math.floor(blend * 40).toString(16).padStart(2, '0')}, transparent),
            radial-gradient(ellipse 60% 50% at 120% 50%, ${colorStops[1]}${Math.floor(blend * 35).toString(16).padStart(2, '0')}, transparent),
            radial-gradient(ellipse 60% 50% at -20% 50%, ${colorStops[2]}${Math.floor(blend * 35).toString(16).padStart(2, '0')}, transparent),
            radial-gradient(ellipse 100% 70% at 70% 100%, ${colorStops[0]}${Math.floor(blend * 30).toString(16).padStart(2, '0')}, transparent),
            white
          `,
          animation: `aurora ${animationDuration} ease-in-out infinite`,
        } as CSSProperties}
      />

      {/* Second animated layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 80% at 0% 0%, ${colorStops[1]}${Math.floor(blend * 25).toString(16).padStart(2, '0')}, transparent),
            radial-gradient(ellipse 80% 80% at 100% 100%, ${colorStops[2]}${Math.floor(blend * 25).toString(16).padStart(2, '0')}, transparent)
          `,
          animation: `aurora-reverse ${animationDuration} ease-in-out infinite`,
        } as CSSProperties}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes aurora {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.9;
          }
        }

        @keyframes aurora-reverse {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(20px) scale(1.05);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
