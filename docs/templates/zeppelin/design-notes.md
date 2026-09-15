# Zeppelin — Design Notes

Recreation of ColorLib Zeta (https://colorlib.com/wp/template/zeta/).
Preview: https://preview.colorlib.com/theme/zeta/

## Section structure (top → bottom)

1. **Header** — flex row, logo left, nav right, hamburger for mobile
2. **Hero Slider** — 3-slide carousel, full-width bg image + geometric shapes overlay, h1 + paragraph + CTA
3. **Social Sidebar** — fixed vertical icons on right (desktop only)
4. **Features** — 3-col grid, icon + heading + paragraph per card, white bg
5. **About** — parallax bg + shapes, 2-col: text/signature + progress bars
6. **Testimonials** — white bg, slider with avatar/name/quote
7. **Services** — parallax bg + shapes, 3×2 grid, "discover" CTA
8. **Clients** — white bg, intro text + logo carousel
9. **Contact** — parallax bg + shapes, title + text + "contact" CTA
10. **Footer** — dark bg (#111111), copyright + social icons

## Design fidelity notes

- Brand color is `#ff4200` (vivid red-orange). Use as primary in `@theme`.
- Buttons are rectangular (no border-radius), 66px tall, fixed width.
  Hover animation: white sweep left→right via pseudo-element.
- Section titles: uppercase, `letter-spacing: 0.2em`, weight 600,
  with a short colored line below (pseudo-element).
- Parallax sections (about, services, contact) use background images
  with geometric shape PNG overlays. Use CSS `background-attachment: fixed`
  or a React parallax library.
- Progress bars in About section: animated fill on scroll-into-view.
  Use `IntersectionObserver` + CSS transitions or framer-motion.
- Hero and testimonials use carousel. Use a lightweight carousel
  (e.g. embla-carousel-react or swiper) instead of OwlCarousel.
- Social sidebar: fixed position, vertical stack of icon buttons.
- Font: Montserrat (headings/nav/buttons) + Open Sans (body).
  Load via Google Fonts `<link>` in index.html.
- Responsive: hamburger menu on mobile (fullscreen overlay),
  single-column stacking for grids.

## Component outline

```
src/
  App.tsx            — compose all sections
  components/
    Header.tsx       — logo + nav + hamburger
    HeroSlider.tsx   — carousel with slides, dots, arrows
    SocialSidebar.tsx — fixed vertical social icons
    Features.tsx     — 3-col feature cards
    About.tsx        — parallax bg, text, progress bars
    Testimonials.tsx — slider with review cards
    Services.tsx     — 3×2 service grid on parallax bg
    Clients.tsx      — intro text + logo carousel
    Contact.tsx      — parallax bg, CTA
    Footer.tsx       — copyright + social + Component Dock
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template, rename package
- [ ] Set up index.css with Tailwind @theme tokens (brand #ff4200, fonts)
- [ ] Add Google Fonts link (Montserrat + Open Sans) to index.html
- [ ] Implement Header with nav and mobile hamburger menu
- [ ] Implement HeroSlider with 3 slides, numbered dots, arrow nav
- [ ] Implement SocialSidebar (fixed vertical, desktop only)
- [ ] Implement Features section (3-col grid)
- [ ] Implement About section with parallax bg + animated progress bars
- [ ] Implement Testimonials slider
- [ ] Implement Services section with parallax bg + 6-item grid
- [ ] Implement Clients section with logo carousel
- [ ] Implement Contact section with parallax bg + CTA
- [ ] Implement Footer with copyright, social, Component Dock link
- [ ] Write tests for all components (Vitest + RTL, 100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build
