# Noah Foley — Portfolio

Personal developer portfolio built with React, Vite, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (build tool)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion 12** (animations)
- **Lucide React** (icons)

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production Build

```bash
npm run build
npm run preview   # preview the build locally
```

## Deployment to GitHub Pages

This site deploys to **https://noahfoe.github.io/** (user/org page).

### First-time setup

1. Make sure the repo is named `noahfoe.github.io` (for a user page at the root domain).
2. `vite.config.ts` already has `base: '/'` for this — no changes needed.
3. If you use a different repo name (project page), change `base` in `vite.config.ts` to `'/your-repo-name/'`.

### Deploy

```bash
npm run deploy
```

This runs `predeploy` (build) then `gh-pages -d dist`, which pushes the `dist/` folder to the `gh-pages` branch.

Make sure your GitHub repo has GitHub Pages enabled and pointed at the `gh-pages` branch.

## Adding Your Resume

Place your resume PDF at:

```
public/Noah_Foley_Resume.pdf
```

The "Download Resume" buttons throughout the site already link to `/Noah_Foley_Resume.pdf`.

## Updating Content

All portfolio content lives in one file:

```
src/data/portfolio.ts
```

Edit that file to update:
- Projects (titles, descriptions, URLs, tech tags)
- Skills groups
- Work experience timeline
- Education
- Personal info (email, social links, headline)

## Project Structure

```
src/
  components/
    Navbar.tsx       — sticky nav with active-section highlighting
    Hero.tsx         — animated hero with terminal card + stats
    About.tsx        — bio + highlight cards
    Projects.tsx     — project cards with live links
    Skills.tsx       — grouped skill badges
    Experience.tsx   — vertical timeline
    Education.tsx    — education card
    Contact.tsx      — contact cards + CTA
    Footer.tsx       — simple footer
    BrandIcons.tsx   — inline SVG brand icons (GitHub, LinkedIn)
  data/
    portfolio.ts     — all content data (edit this to update the site)
  App.tsx            — root layout, assembles all sections
  main.tsx           — React entry point
  index.css          — global styles + Tailwind import + CSS variables
```
