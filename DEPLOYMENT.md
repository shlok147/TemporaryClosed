# GattuAI — Fallback Page Deployment Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run locally (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
temporary/
├── index.html                  # Entry HTML with SEO meta
├── package.json                # Dependencies
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
├── public/
│   └── favicon.svg             # GattuAI favicon
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # Root component (assembles layers)
│   ├── config.ts               # ⚡ BRAND CONFIG — Edit this first!
│   ├── index.css               # Global design system
│   ├── vite-env.d.ts           # Vite type reference
│   └── components/
│       ├── AuroraBackground.*  # Animated gradient blobs
│       ├── SpotlightCursor.*   # Cursor-following light
│       ├── TextReveal.*        # Staggered text entrance
│       ├── MagneticButton.*    # Cursor-following buttons
│       ├── StatusBadge.*       # Animated maintenance badge
│       ├── Header.*            # Brand header
│       ├── Hero.*              # Hero section
│       ├── ContactSection.*    # Contact links
│       └── Footer.*            # Footer
```

## Configuration

All brand-specific values are in **`src/config.ts`**. Edit this file before deploying:

| Field | What to change |
|-------|---------------|
| `brand.name` | Your brand name |
| `brand.domain` | Your domain (e.g., `gattuai.io`) |
| `hero.primaryCTA.href` | Email or link for main CTA |
| `hero.secondaryCTA` | Set to `null` to hide |
| `contact.email` | Your contact email |
| `contact.phone` | Your phone (or `null`) |
| `contact.socials` | Add your social media links |
| `seo.robots` | `"noindex, nofollow"` (recommended for temp) |

## Deploying

### Option A: Any Static Host (Your Server)

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Upload the `dist/` folder contents to your web server.
3. Configure your server to serve `index.html` for all routes.

### Option B: Vercel

```bash
npx -y vercel --prod
```

### Option C: Netlify

```bash
npx -y netlify deploy --prod --dir dist
```

### Option D: Cloudflare Pages

```bash
npx -y wrangler pages deploy dist --project-name gattuai-fallback
```

## Switching Between Main Site and Fallback

### If hosted on the same server:

1. **Activate fallback:** Point your web server document root to the fallback `dist/` folder.
2. **Restore main site:** Point the document root back to the main site's build output.

### If using DNS / reverse proxy:

1. Deploy the fallback site to a staging URL first (e.g., `fallback.gattuai.io`).
2. When maintenance is needed, update your DNS or reverse proxy to route `gattuai.io` traffic to the fallback site.
3. When done, revert the DNS/proxy to point back to the main site.

### If using Cloudflare / Vercel / Netlify:

1. Deploy both sites as separate projects.
2. Switch the primary domain's assignment between projects in the hosting dashboard.

> ⚠️ **Important:** Always test the fallback on a staging URL before switching production traffic. Do not modify DNS without understanding your TTL settings.

## Rollback

To restore the original GattuAI website:

1. Re-deploy the main site build to your server or hosting platform.
2. Revert any DNS or proxy changes.
3. The fallback site can stay deployed on a separate staging URL for future use.

## Design Decisions

- **No external animation libraries** — All visual effects (aurora, text reveal, magnetic buttons, spotlight) are implemented with CSS animations + minimal JS for cursor tracking.
- **CSS Modules** — Scoped styles prevent conflicts if you ever integrate this into a larger system.
- **Reduced motion** — All animations respect `prefers-reduced-motion`.
- **Noscript fallback** — Essential message is visible even without JavaScript.
- **Zero external APIs** — The page works entirely offline after loading fonts.
- **Configurable** — All brand details in one file (`config.ts`).
