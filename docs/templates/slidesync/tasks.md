# Research & Task Outline: SlideSync (ColorLib carousel-12)

## Overview

- **New Name**: `slidesync`
- **ColorLib Source**: `carousel-12` (`https://colorlib.com/wp/template/carousel-12/`)
- **Preview URL**: `https://preview.colorlib.com/theme/carousel-12/`
- **Category**: Carousel / Testimonials Slider

## Section Structure & Fidelity Notes

1. **Navbar**: Fixed/sticky top navigation bar with brand logo (`SlideSync`), links (`Home`, `Features`, `Testimonials`, `Pricing`, `Contact`), and CTA button.
2. **Hero**: Centered or split hero layout with vibrant heading, subheading, and primary action buttons.
3. **Testimonial Carousel**: Multi-item or single-item card carousel featuring customer quotes, star ratings (5 stars), author avatars (picsum seeded), and arrow/dot controls.
4. **Features Grid**: Clean 3-column feature breakdown with Lucide icons.
5. **CTA Section**: Newsletter / Action sign-up block with coral accent background (`#ff5722`).
6. **Footer**: Multi-column footer with brand summary, quick links, social links, and mandatory Component Dock link (`https://www.componentdock.com/`).

## Implementation Tasks for Implementer

- [ ] Scaffold app `apps/slidesync` following workspace conventions.
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Add `public/CNAME` with `slidesync.free.componentdock.com`.
- [ ] Implement components (`Navbar`, `Hero`, `CarouselSection`, `FeaturesSection`, `CtaSection`, `Footer`).
- [ ] Write Vitest tests with 100% coverage matching Gherkin scenarios.
- [ ] Run verification gate (`scripts/verify-app.sh slidesync`).
