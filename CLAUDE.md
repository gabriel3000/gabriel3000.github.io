# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro-based personal portfolio site hosted on GitHub Pages at www.gabrieljablanczy.com.

## Commands

```bash
npm install                 # Install dependencies
npm run dev                 # Local dev server with live reload
npm run build               # Build static site to dist/
npm run preview             # Preview production build locally
```

## Architecture

Pages are written as Astro components in `src/pages/`. Layouts live in `src/layouts/`. Blog posts use Astro content collections in `src/content/blog/`.

**Styling** follows a modular SCSS pattern:
- `src/styles/global.scss` — entry point that imports partials
- `src/styles/variables.scss` — design tokens; change here first when adjusting typography, colors, or spacing

**Images/SVGs** live in `assets/image/`. Inline animated SVGs are embedded directly in layout HTML rather than referenced as `<img>` tags.

**Deployment** is automated via `.github/workflows/astro.yml` — any push to `master` triggers a GitHub Actions build and deploy to GitHub Pages.

The site has no client-side JavaScript; all interactivity is CSS-driven.
