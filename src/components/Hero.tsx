import config from '../config';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';
import styles from './Hero.module.css';

/**
 * Hero section — the emotional center of the fallback page.
 * Bold typography, staggered text reveals, and prominent CTAs.
 */
export default function Hero() {
  const { hero } = config;

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        {/* Decorative orbital ring */}
        <div className={styles.orbitalRing} aria-hidden="true">
          <div className={styles.orbitalDot} />
        </div>

        <div className={styles.content}>
          {/* Headline — single semantic H1 */}
          <h1 className={styles.headline}>
            <TextReveal as="span" className={styles.headlineText} delay={400}>
              {hero.headline}
            </TextReveal>
            <TextReveal as="span" className={`${styles.headlineText} ${styles.headlineAccent}`} delay={650}>
              {hero.headlineAccent}
            </TextReveal>
          </h1>

          {/* Description */}
          <div className={styles.description}>
            <TextReveal as="p" delay={900}>
              {hero.description}
            </TextReveal>
          </div>

          {/* CTAs */}
          <div className={styles.actions}>
            <MagneticButton
              href={hero.primaryCTA.href}
              variant="primary"
              id="cta-primary"
            >
              <MailIcon />
              {hero.primaryCTA.text}
            </MagneticButton>

            {hero.secondaryCTA && (
              <MagneticButton
                href={hero.secondaryCTA.href}
                variant="ghost"
                id="cta-secondary"
              >
                {hero.secondaryCTA.text}
                <ArrowIcon />
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Subtle bottom gradient fade */}
        <div className={styles.fadeBottom} aria-hidden="true" />
      </div>
    </section>
  );
}

/* Inline SVG icons to avoid external deps */
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
