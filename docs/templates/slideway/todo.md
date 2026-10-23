# Slideway (Carousel 07 Recreation) — Implementation Plan & Design Notes
<!-- prep-status: shipped-as=merry -->
> **SHIPPED-UNDER** — the ColorLib `carousel-07` design this prep describes shipped
> as `apps/merry` (<https://merry.free.componentdock.com>).
> The unchecked items below are prep history, not outstanding work.

## Overview

- **Source**: ColorLib Carousel 07 (`https://colorlib.com/wp/template/carousel-07/`)
- **New App Name**: `slideway` (`apps/slideway`)
- **Package Name**: `@free-react-templates/slideway`
- **Surge Domain**: `slideway.free.componentdock.com`

## Section Order & Architecture

1. `Navbar.tsx` — Sticky navigation bar with brand logo, links, and action button.
2. `HeroCarousel.tsx` — Full-width interactive hero carousel with slide transitions, controls, and CTA.
3. `FeaturesGrid.tsx` — 3-column feature highlights grid with Lucide icons.
4. `ShowcaseSlider.tsx` — Interactive showcase cards carousel with prev/next navigation.
5. `StatsSection.tsx` — Key metrics counter banner.
6. `Testimonials.tsx` — Customer feedback carousel with avatar and quotes.
7. `CtaBanner.tsx` — Newsletter / engagement call to action.
8. `Footer.tsx` — Multi-column footer with required link to `https://www.componentdock.com/`.

## Design & Tokens

- Palette: Indigo/Cyan primary accents on slate backgrounds.
- Typography: Inter font via Google Fonts `<link>` in `index.html`.
- Icons: `lucide-react`.
- Placeholder images: `https://picsum.photos/seed/slideway-<n>/800/600`.

## Todo Checklist for Implementer

- [x] Scaffold `apps/slideway` using an existing template as base — superseded: shipped as `apps/merry`.
- [ ] Register workspace in root `package.json` and run `npm install`.
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Implement components matching the Gherkin specs.
- [ ] Write Vitest unit tests achieving 100% test coverage across lines, functions, branches, and statements.
- [ ] Verify build, lint, typecheck, and per-app gate.
