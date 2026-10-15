import config from '../config';
import styles from './Header.module.css';
import StatusBadge from './StatusBadge';

/**
 * Minimal header with GattuAI wordmark and status badge.
 * Uses glassmorphism backdrop consistent with the main site.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.brand} aria-label={`${config.brand.name} home`}>
          <svg
            className={styles.logo}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="8" fill="#0d0f1f" />
            <text
              x="50%"
              y="56%"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="Space Grotesk,system-ui,sans-serif"
              fontWeight="700"
              fontSize="18"
              fill="url(#logo-grad)"
            >
              G
            </text>
          </svg>
          <span className={styles.brandName}>{config.brand.name}</span>
        </a>

        <StatusBadge label={config.hero.statusLabel} />
      </div>
    </header>
  );
}
