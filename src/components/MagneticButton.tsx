import { useRef, useState, useCallback, type ReactNode } from 'react';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  className?: string;
  id?: string;
}

/**
 * Magnetic hover button — follows the cursor within its bounding box.
 * Inspired by React Bits MagnetButton.
 * Falls back to a normal button when reduced motion is preferred.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  id,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState('translate(0, 0)');

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setTransform(`translate(${x}px, ${y}px)`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform('translate(0, 0)');
  }, []);

  const variantClass = variant === 'primary' ? styles.primary : styles.ghost;

  const props = {
    ref: ref as React.RefObject<HTMLElement>,
    className: `${styles.button} ${variantClass} ${className}`,
    style: { transform },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    id,
  };

  if (href) {
    return (
      <a
        {...props}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      >
        <span className={styles.label}>{children}</span>
        <span className={styles.shine} aria-hidden="true" />
      </a>
    );
  }

  return (
    <button {...props} ref={ref as React.RefObject<HTMLButtonElement>} onClick={onClick}>
      <span className={styles.label}>{children}</span>
      <span className={styles.shine} aria-hidden="true" />
    </button>
  );
}
