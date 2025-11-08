'use client';

import React, { useEffect, useRef } from 'react';

interface AuroraBackgroundProps {
  colorStops?: [string, string, string];
  speed?: number;
  blend?: number;
  amplitude?: number;
  children?: React.ReactNode;
}

export default function AuroraBackground({
  colorStops = ['#A63A3A', '#D94A4A', '#8B2E2E'],
  speed = 1.0,
  blend = 0.5,
  amplitude = 1.0,
  children,
}: AuroraBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const drawAurora = () => {
      time += 0.001 * speed;

      // Clear canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create multiple aurora layers
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height
        );

        const offset = (i * Math.PI * 2) / 3;
        const opacity = blend * 0.15 * (1 + Math.sin(time + offset) * 0.5);

        gradient.addColorStop(0, `${colorStops[i]}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${colorStops[(i + 1) % 3]}${Math.floor(opacity * 0.8 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${colorStops[(i + 2) % 3]}${Math.floor(opacity * 0.6 * 255).toString(16).padStart(2, '0')}`);

        ctx.fillStyle = gradient;

        // Draw wavy shapes
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);

        for (let x = 0; x <= canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.005 + time + offset) * 100 * amplitude +
            Math.sin(x * 0.002 + time * 2 + offset) * 50 * amplitude;

          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawAurora);
    };

    drawAurora();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colorStops, speed, blend, amplitude]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
