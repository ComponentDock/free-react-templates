# WodBox — Implementation Notes

Recreation of ColorLib "Crossfit" (https://colorlib.com/wp/template/crossfit/)
Preview: https://preview.colorlib.com/theme/crossfit/

## Design Notes

- **Aesthetic:** Bold, dark gym template. Black header/footer with orange accents.
  High contrast — dark sections alternate with white content areas.
- **Typography:** Single font family (Roboto) for everything. Heavy weight (700)
  for headings, regular (400) for body.
- **Color Palette:** Orange `#ff9908` primary, dark orange `#ff5408` accent,
  black `#1d1f2a` / `#0d0e15` dark backgrounds, green `#639906` logo accent.
- **Buttons:** Square (no border-radius), 188×63px, orange background,
  bottom-fill hover animation (dark orange slides up).
- **Layout:** Bootstrap 4 grid. Max 4 columns for features, 3 for pricing,
  2 for subscription, 3 for footer columns.

## Section Order (for App.tsx composition)

1. **Header** — fixed, black bg, orange bottom border, logo + nav + CTA
2. **HeroSlider** — full-width bg image, headline text, CTA, dot indicators
3. **Features** — 4-column icon boxes (medal, dumbbell, water, weightlifting)
4. **Subscription** — 2-col: text+checklist left, bg image right
5. **Portfolio** — image carousel with hover overlay
6. **Testimonials** — carousel with author photos + quotes
7. **Plans** — parallax bg with dark overlay, 3 pricing cards
8. **CtaBanner** — full-width orange, large text
9. **Footer** — dark bg, logo, social icons, 3 link columns, copyright

## Component Outline

| Component | Source Section | Notes |
|-----------|---------------|-------|
| Header | header | Fixed, shrinks on scroll. Logo + nav + search + CTA button |
| HeroSlider | home_slider | Carousel with 3 slides. Each has bg image + headline + button |
| Features | features | 4 icon boxes. Use lucide-react icons |
| Subscription | sub | 2-col split. Checklist with checkmark icons |
| Portfolio | portfolio | Image grid/carousel with hover overlay |
| Testimonials | testimonials | Carousel with circular author photos |
| Plans | plans | Parallax bg section, 3 cards. Center card dark |
| CtaBanner | cta | Full-width orange bar with large text |
| Footer | footer | Dark bg, logo, social, 3 link columns, copyright |

## Fidelity Notes

- The original uses OwlCarousel for all sliders → use a React carousel
  library or CSS-based implementation
- Parallax on the Plans section (dark bg image with overlay)
- The header height transitions from 124px to 90px on scroll
- Portfolio hover: 5px solid `#ff5408` border + dark overlay fades in
- Social icons in footer are circular (50% border-radius) with hover bg
- All CTA buttons use the `.button` class pattern (square, fixed size)
- Original uses Font Awesome 4 for social icons → use lucide-react

## Placeholder Images

- Hero bg: `https://picsum.photos/seed/wodbox-hero/1920/1080`
- Subscription bg: `https://picsum.photos/seed/wodbox-sub/800/600`
- Portfolio 1-4: `https://picsum.photos/seed/wodbox-port-<n>/400/300`
- Testimonial author: `https://picsum.photos/seed/wodbox-test/90/90`
- Plans bg: `https://picsum.photos/seed/wodbox-plans/1920/800`
