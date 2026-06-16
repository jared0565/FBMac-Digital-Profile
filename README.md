# Ferdinand Macagba — Digital Portfolio

A modern, high-contrast, accessibility-minded portfolio built with **Next.js 16** and **Tailwind CSS v4**, deployed on **Cloudflare Pages**.

## Live Site

**https://fbmac-digital-profile.pages.dev**

## What's Inside

- **Hero** — Bold serif typography with animated background accents
- **About** — Operations-to-AI-development story with key stats (10+ years experience, 6 live projects, 10+ certifications)
- **What I Build** — SaaS & booking platforms, e-commerce / Shopify, and AI-enabled applications
- **Projects** — 6 live, shipped products in card format, each with a real product screenshot and a click-to-expand lightbox showing **desktop + mobile** views and a link to the live site
- **Process** — A 16-stage human-led, AI-assisted development process with two worked case studies
- **Responsible AI** — Input validation, human approval gates, output verification and least-privilege controls (informed by ISO 42001 AI-governance training)
- **Experience** — Timeline of customer-focused operations and remote e-commerce management
- **Education & Certifications** — BSc Engineering, applied generative-AI diplomas, Google Cloud, digital marketing
- **Skills** — Categorized technical and professional capabilities, including AI tooling (Claude, ChatGPT, GitHub Copilot)
- **Contact** — Direct links to email, phone, LinkedIn, and website

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router, Static Export) |
| Styling | Tailwind CSS v4 |
| Animation | CSS/Tailwind transitions + Framer Motion (nav menu) |
| Icons | Lucide React + inline SVG |
| Fonts | Inter (sans), Playfair Display (serif) via next/font |
| Imagery | Pre-optimized WebP product screenshots (lazy-loaded) |
| Hosting | Cloudflare Pages |
| CI/CD | GitHub Actions → Cloudflare Pages |

## Performance & Accessibility

- Static export for sub-second load times
- High-contrast palette and semantic HTML with a proper heading hierarchy
- Focus-visible states and a keyboard-accessible lightbox (Esc / backdrop to close, focus trap, scroll lock)
- Lazy-loaded WebP imagery with explicit dimensions to avoid layout shift
- Mobile-first responsive design

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static export to ./dist
```

## Deployment

Deployment is automated. Every push to `main` triggers a GitHub Actions
workflow (`.github/workflows/deploy.yml`) that builds the static export from
source and publishes it to Cloudflare Pages — so the deployed assets are always
a complete, fresh build. The workflow requires one repository secret,
`CLOUDFLARE_API_TOKEN` (a Cloudflare token with `Account · Cloudflare Pages ·
Edit`).

> `dist/` is generated, not committed — it is git-ignored and rebuilt in CI.

Manual deploy (fallback):

```bash
npm run build
npx wrangler pages deploy dist --project-name fbmac-digital-profile
```

---

© 2026 Ferdinand Macagba. All rights reserved.
