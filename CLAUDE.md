# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 static website for libre.net.pe (Interactive Systems), a Peruvian software development company. The site is built with TypeScript, React 19 RC, and Tailwind CSS, and is configured for static export deployment to GitHub Pages.

## Technology Stack

- **Framework**: Next.js 15.0.3 with App Router
- **React**: 19.0.0-rc (Release Candidate)
- **TypeScript**: Version 5
- **Styling**: Tailwind CSS 3.4.1
- **Fonts**: Geist Sans and Geist Mono (local fonts)
- **Deployment**: GitHub Pages (static export)

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production (outputs to ./out directory)
npm run build

# Start production server (requires build first)
npm start

# Run ESLint
npm run lint
```

## Project Structure

### App Router Pages
- `/` - Home page ([app/page.tsx](app/page.tsx))
- `/privacy` - Privacy policy page ([app/privacy/page.tsx](app/privacy/page.tsx))

### Key Configuration

**Static Export**: The project uses `output: "export"` in [next.config.ts](next.config.ts:4), which generates a static HTML/CSS/JS site in the `./out` directory. This means:
- No server-side rendering at runtime
- No API routes or dynamic server functions
- All pages are pre-rendered at build time
- Images must use `unoptimized` or be pre-optimized

**Language**: The site content is in Spanish, but the HTML lang attribute is set to "en" in [app/layout.tsx](app/layout.tsx:27) (should be "es").

### Global Metadata

Defined in [app/layout.tsx](app/layout.tsx:16-19):
- Title: "Desarrollo de software @libre.net.pe"
- Description: Business description mentioning CRM, SAP, ERP, and various management systems

### Components

- `Footer` ([components/layout/footer.tsx](components/layout/footer.tsx)) - Reusable footer with links to home, Agenda Mascota, and privacy policy

### Public Assets

Located in `public/`:
- SVG icons: window.svg, file.svg, globe.svg, icon_48.svg, next.svg, vercel.svg
- [robots.txt](public/robots.txt) - Allows all crawlers

## Deployment

Automatic deployment to GitHub Pages via GitHub Actions:
- Workflow file: [.github/workflows/nextjs.yml](.github/workflows/nextjs.yml)
- Triggers on pushes to `main` branch
- Builds with `next build` and deploys `./out` directory
- Uses Node.js 20

## Code Style

- Uses Geist font family variables (`--font-geist-sans`, `--font-geist-mono`)
- Tailwind utility classes for styling
- TypeScript strict mode enabled
- ESLint with Next.js config

## Important Notes

1. **Static Export Only**: This project cannot use Next.js features that require a server (API routes, ISR, SSR middleware, etc.)
2. **Image Optimization**: Next.js automatic image optimization is disabled for static export
3. **Spanish Content**: The website content is in Spanish, targeting Peruvian market
4. **External CTA**: Main call-to-action links to `https://leads.libre.net.pe/contact-us`
5. **No Tests**: No testing framework is currently configured
