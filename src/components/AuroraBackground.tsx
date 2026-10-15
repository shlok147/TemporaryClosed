import { useEffect, useRef } from 'react';
import styles from './AuroraBackground.module.css';

/**
 * Animated aurora gradient background.
 * Inspired by React Bits aurora/gradient effects.
 * Uses pure CSS animations for performance — no canvas or WebGL.
 * Gracefully degrades to a static gradient with prefers-reduced-motion.
 */
export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationId: number;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.02;
      currentY += (mouseY - currentY) * 0.02;
      el.style.setProperty('--mouse-x', `${currentX}`);
      el.style.setProperty('--mouse-y', `${currentY}`);
      animationId = requestAnimationFrame(animate);
    };

    // Check reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.aurora} aria-hidden="true">
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
      <div className={styles.grid} />
      <div className={styles.noise} />
    </div>
  );
}
