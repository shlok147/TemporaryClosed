import styles from './StatusBadge.module.css';

interface StatusBadgeProps {
  label: string;
}

/**
 * Animated status badge with breathing pulse indicator.
 * Shows the current site status (e.g. "Under Maintenance").
 */
export default function StatusBadge({ label }: StatusBadgeProps) {
  return (
    <div className={styles.badge}>
      <span className={styles.dot} aria-hidden="true">
        <span className={styles.dotPing} />
        <span className={styles.dotCore} />
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
