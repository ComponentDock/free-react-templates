# Template: CarouselGlide (ColorLib Carousel 18) — Tasks & Design Notes

## Overview

- **Source Template:** ColorLib Carousel 18 (`https://colorlib.com/wp/template/carousel-18/`)
- **New App Name:** `carousel-glide`
- **Package Name:** `@free-react-templates/carousel-glide`
- **Domain:** `https://carousel-glide.free.componentdock.com`

## Design Notes & Fidelity Strategy

1. **Split-Screen Hero Carousel:** Replicate the signature ColorLib Carousel 18 split layout (image showcase on the left/top, interactive content/testimonial card on the right/bottom).
2. **Interactive Controls:** Implement state-driven slide switching with support for previous/next navigation buttons, thumbnail/dot indicators, and smooth transition animations.
3. **Features Section:** Clean 3-column feature grid highlighting key capabilities with Lucide icons and hover effects.
4. **Call to Action & Footer:** Engaging CTA banner followed by a professional footer with the mandatory Component Dock attribution link (`https://www.componentdock.com/`).

## Task Breakdown for Implementers

1. Create `apps/carousel-glide/` copying structure from the simplest existing app (`apps/carousel-vane/` or similar).
2. Set package name to `@free-react-templates/carousel-glide` and add workspace reference.
3. Configure `vite.config.ts` with `injectUiSource()`.
4. Create components: `Navbar.tsx`, `HeroCarousel.tsx`, `Features.tsx`, `CtaBanner.tsx`, `Footer.tsx`.
5. Write comprehensive Vitest test suite (`App.test.tsx`, etc.) achieving 100% coverage.
6. Verify with `scripts/verify-app.sh carousel-glide`.
