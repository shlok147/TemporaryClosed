import config from '../config';
import styles from './Footer.module.css';

/**
 * Minimal footer with brand, copyright, and closing line.
 * Year is dynamically generated.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.content}>
          <p className={styles.brand}>
            {config.brand.name}
            <span className={styles.dot}>·</span>
            <span className={styles.tagline}>{config.brand.tagline}</span>
          </p>

          <p className={styles.copyright}>
            © {year} {config.brand.name}. All rights reserved.
          </p>

          <p className={styles.closing}>
            We'll be back soon — better than ever.
          </p>
        </div>
      </div>
    </footer>
  );
}
