import { useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './TextReveal.module.css';

interface TextRevealProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  delay?: number;
  className?: string;
  splitBy?: 'word' | 'character';
}

/**
 * Animated text entrance — splits text into words or characters
 * and staggers their reveal with a smooth upward fade.
 * Inspired by React Bits SplitText component.
 */
export default function TextReveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  splitBy = 'word',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const text = typeof children === 'string' ? children : '';

  if (!text) {
    return (
      <Tag
        ref={ref as React.Ref<any>}
        className={`${styles.wrapper} ${isVisible ? styles.visible : ''} ${className}`}
      >
        <span className={styles.piece} style={{ transitionDelay: `${delay}ms` }}>
          {children}
        </span>
      </Tag>
    );
  }

  const pieces = splitBy === 'character' ? text.split('') : text.split(' ');

  return (
    <Tag
      ref={ref as React.Ref<any>}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {pieces.map((piece, i) => (
        <span key={i} className={styles.pieceWrap}>
          <span
            className={styles.piece}
            style={{ transitionDelay: `${delay + i * 50}ms` }}
          >
            {piece}
            {splitBy === 'word' && i < pieces.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  );
}
