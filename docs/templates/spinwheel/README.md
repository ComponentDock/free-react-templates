# SpinWheel — Research & Tasks Outline

- **ColorLib Source:** Carousel V04 (`https://colorlib.com/wp/template/carousel-04/`)
- **Assigned Template Name:** `spinwheel` (`@free-react-templates/spinwheel`)
- **Preview URL:** `https://preview.colorlib.com/theme/carousel-04/` (404 on CDN; reconstructed from screenshot and carousel template patterns).

## Design & Structure

1. **Header / Navbar:** Sticky/fixed top header with brand logo, links, and action button.
2. **Hero Carousel:** Full-width container with multiple slides, prev/next buttons, and dot indicators.
3. **Featured Content / Testimonial Slider:** Card-based carousel with interactive arrows.
4. **Footer:** Clean footer with brand blurb, links, copyright, and mandatory Component Dock link (`https://www.componentdock.com/`).

## Implementation Checklist for Implementer Stream

- [ ] Create `apps/spinwheel` workspace using template skeleton.
- [ ] Implement `@theme` tokens in `src/index.css`.
- [ ] Build components (`Navbar.tsx`, `HeroCarousel.tsx`, `TestimonialCarousel.tsx`, `Footer.tsx`).
- [ ] Write Vitest tests with 100% coverage.
- [ ] Register workspace in root package.json / lockfile if needed.
- [ ] Verify per-app gate (`scripts/verify-app.sh spinwheel`).
