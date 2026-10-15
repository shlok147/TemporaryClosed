/**
 * ═══════════════════════════════════════════════════════════════════
 * GattuAI — Fallback Page Configuration
 *
 * Centralized brand configuration. Update these values before
 * deploying to production. All placeholder values are marked
 * with "REPLACE:" comments.
 * ═══════════════════════════════════════════════════════════════════
 */

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    domain: string;
  };
  hero: {
    statusLabel: string;
    headline: string;
    headlineAccent: string;
    description: string;
    primaryCTA: { text: string; href: string };
    secondaryCTA: { text: string; href: string } | null;
  };
  contact: {
    email: string;
    phone: string | null;
    socials: { label: string; href: string; icon: string }[];
  };
  seo: {
    title: string;
    description: string;
    ogUrl: string;
    robots: string;        // "noindex, nofollow" for temp pages, "index, follow" if you want indexing
  };
  theme: {
    bg: string;
    surface: string;
    violet: string;
    violetLight: string;
    violetDark: string;
    cyan: string;
    textPrimary: string;
    textStrong: string;
    textMuted: string;
  };
}

const config: SiteConfig = {
  brand: {
    name: 'GattuAI',
    tagline: 'Intelligence, Elevated',
    domain: 'gattuai.io',                             // REPLACE: your actual domain
  },

  hero: {
    statusLabel: 'Under Maintenance',
    headline: 'Something Better Is',
    headlineAccent: 'On Its Way',
    description:
      "We're making a few improvements behind the scenes. GattuAI is evolving — smarter, faster, and more polished. We'll be back before you know it.",
    primaryCTA: {
      text: 'Get in Touch',
      href: 'mailto:contact@gattuai.io',               // REPLACE: your real email
    },
    secondaryCTA: {
      text: 'Visit Our Blog',
      href: 'https://gattuai.io/blog',                 // REPLACE: or set to null to hide
    },
  },

  contact: {
    email: 'contact@gattuai.io',                        // REPLACE: your real email
    phone: null,                                         // REPLACE: e.g. "+91 98765 43210"
    socials: [
      // REPLACE: Add your actual social links. Remove any you don't use.
      // { label: 'Twitter / X', href: 'https://x.com/gattuai', icon: 'twitter' },
      // { label: 'LinkedIn', href: 'https://linkedin.com/company/gattuai', icon: 'linkedin' },
      // { label: 'GitHub', href: 'https://github.com/gattuai', icon: 'github' },
    ],
  },

  seo: {
    title: 'GattuAI — We\'ll Be Right Back',
    description:
      'GattuAI is currently undergoing improvements. We\'re working behind the scenes to make your experience even better. Check back soon.',
    ogUrl: 'https://gattuai.io',                        // REPLACE: your actual URL
    robots: 'noindex, nofollow',                         // Change to "index, follow" if desired
  },

  theme: {
    bg: '#06070f',
    surface: '#0d0f1f',
    violet: '#7c3aed',
    violetLight: '#9f6ef5',
    violetDark: '#5b21b6',
    cyan: '#06b6d4',
    textPrimary: '#94a3b8',
    textStrong: '#f1f5f9',
    textMuted: '#64748b',
  },
};

export default config;
