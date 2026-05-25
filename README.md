# Saurabh Kumar | Portfolio

Production-ready personal portfolio for a **Java Backend Developer**, built with React, Vite, Tailwind CSS v4, and Framer Motion.

## Features

- Dark glassmorphism UI with animated gradients & particles
- Resume-driven content (`src/data/portfolioData.js`)
- Sticky navbar with scroll spy & mobile menu
- Hero with typing effect & profile image
- Skills with animated tech badges and AWS service cards
- Experience vertical timeline
- Project cards with hover tilt & glow
- Contact form (mailto integration)
- Scroll-to-top, cursor glow, loading screen
- SEO meta tags via `react-helmet-async`
- Lazy-loaded sections for performance
- Deploy-ready for **Vercel** & **Netlify**

## Quick Start

### 1. Install dependencies

```bash
cd saurabh-portfolio
npm install
```

### 2. Add your assets

Copy your resume PDF and profile photo:

```powershell
.\scripts\setup-assets.ps1
```

Or manually:

- `public/resume.pdf`: copy from `d:\Personal\Saurabh_Kumar_Java_2.5YOE.pdf`
- `public/profile.png`: your headshot (the orange-background photo you provided)
- Project banners in `public/`: `WorkED.svg`, `zep360.svg`, `operations-hub.png`, `inn4smart.png` (then run `npm run banners:prepare` to build `inn4smart.svg`)

### 3. Update social links

Edit `src/data/portfolioData.js` and set your real **LinkedIn** and **GitHub** URLs.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### 5. Production build

```bash
npm run build
npm run preview
```

## Folder Structure

```
saurabh-portfolio/
├── public/                 # Static assets (resume, profile, favicon)
├── scripts/                # Asset copy helper
├── src/
│   ├── animations/         # Framer Motion variants
│   ├── components/
│   │   ├── effects/        # Particles, blobs, cursor, loader
│   │   ├── layout/         # Navbar, Footer, ScrollToTop
│   │   └── ui/             # Button, GlassCard, SectionHeading, etc.
│   ├── data/               # Resume content (single source of truth)
│   ├── hooks/              # useScrollSpy, useTypingEffect, useMediaQuery
│   ├── sections/           # Page sections (Hero, About, …)
│   ├── utils/              # scroll helpers, theme constants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind + global styles
├── index.html              # SEO meta & fonts
├── vite.config.js
├── vercel.json
└── netlify.toml
```

## Deployment

### Vercel

1. Push the repo to GitHub.
2. Import project on [vercel.com](https://vercel.com).
3. Framework preset: **Vite** (or leave auto-detect; `vercel.json` is included).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Node.js: **18.x or 20.x** (`.nvmrc` sets 20)

If the build fails, open the Vercel log and expand the `npm run build` step, then copy the red error lines. Common fix: redeploy after `npm run build` passes locally.

### Netlify

1. Connect repository on [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`

`netlify.toml` and `vercel.json` are included for SPA routing.

## Environment Variables

Optional: create `.env` for contact form services later:

```env
VITE_CONTACT_ENDPOINT=
```

The default contact form uses `mailto:` (no backend required).

## Customization

| What to change | File |
|----------------|------|
| Resume content | `src/data/portfolioData.js` |
| Colors / theme | `src/index.css` (`@theme`) |
| Animations | `src/animations/variants.js` |
| SEO title/description | `index.html` + `App.jsx` (Helmet) |

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS 3 + PostCSS
- Framer Motion 12
- React Icons
- React Helmet Async

---

Built for **Saurabh Kumar**, Java Backend Developer at Drabito Technologies.
