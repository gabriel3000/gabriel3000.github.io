# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Jekyll-based personal portfolio site hosted on GitHub Pages at www.gabrieljablanczy.com.

## Commands

```bash
bundle install                  # Install Ruby gem dependencies
bundle exec jekyll serve        # Local dev server with live reload
bundle exec jekyll build        # Build static site to _site/
```

## Architecture

Pages are written in Markdown (`index.md`, `about.md`) with YAML frontmatter specifying layout and metadata. Jekyll processes these through layouts in `_layouts/` and outputs to `_site/`.

**Styling** follows a modular SCSS pattern:
- `assets/css/style.scss` — entry point that imports partials
- `_sass/_variables.scss` — CSS custom properties and theme values; change here first when adjusting design tokens
- `_sass/_components.scss` — reusable UI components
- `_sass/_home.scss` — homepage-specific styles

**Images/SVGs** live in `assets/image/`. Inline animated SVGs are embedded directly in layout HTML rather than referenced as `<img>` tags.

**Deployment** is automated via `.github/workflows/jekyll.yml` — any push to `master` triggers a GitHub Actions build and deploy to GitHub Pages.

The site has no JavaScript build step; all interactivity is CSS-driven.
