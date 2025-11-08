'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotation?: number;
  };
  to?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
    rotation?: number;
  };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useGSAP(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateText();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateText = () => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll('.split-item');
    
    gsap.fromTo(
      elements,
      from,
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: () => {
          if (onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        },
      }
    );
  };

  const splitText = () => {
    if (splitType === 'chars') {
      return text.split('').map((char, index) => (
        <span
          key={index}
          className="split-item inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    } else if (splitType === 'words') {
      return text.split(' ').map((word, index) => (
        <span key={index} className="split-item inline-block" style={{ marginRight: '0.25em' }}>
          {word}
        </span>
      ));
    } else {
      // lines
      return text.split('\n').map((line, index) => (
        <span key={index} className="split-item block">
          {line}
        </span>
      ));
    }
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ textAlign }}
    >
      {splitText()}
    </div>
  );
};

export default SplitText;
