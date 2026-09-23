# Reimagine — Implementation Notes

Source: ColorLib "Dinomuz" (https://colorlib.com/wp/template/dinomuz/)
Preview: https://preview.colorlib.com/theme/dinomuz/
New name: reimagine
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (top to bottom)

1. Navbar — logo + 3 nav links (Home, Generic, Elements) + hamburger on mobile
2. Banner/Hero — gradient bg (#e66587→#f09458), 600px height, white text, CTA
3. Features — white bg, 3-column grid (icon circles + titles + descriptions)
4. Services — gradient bg, 8 cards in 4-col grid, hover overlays with CTAs
5. Amazing Works — portfolio carousel (owl carousel → use a React carousel)
6. Story — gradient bg, 2-col layout (25/75 split, title left, content right)
7. Newsletter — #f9f9ff bg, email input + gradient submit button
8. Footer Widgets — gradient bg, 3-col (Address, Email, Phone with icons)
9. Footer — logo, copyright, social icons (facebook/twitter/dribbble/behance)

## Design tokens (from live CSS)

- Brand pink: #e66686 / gradient start: #e66587
- Accent orange: #f09359 / gradient end: #f09458
- Gradient: linear-gradient(0deg, #e66587, #f09458) — used on banner,
  service-area, story-area, primary buttons
- Body font: Poppins (300/500/600), 14px, weight 300, #777777
- Headings: Poppins 500, #222222
- Light bg: #f9f9ff (subscription area)
- Button: no radius (default), gradient bg, white text, inline-flex

## Fidelity notes

- The original uses Bootstrap grid (col-lg-3, col-md-4, col-sm-6).
  Replace with Tailwind grid/flex.
- The original uses owl.carousel for the works section. Replace with a
  React carousel (embla, swiper, or a custom implementation).
- The original uses jQuery + magnific-popup for lightbox. Use a React
  lightbox or skip if not essential to the visual design.
- Service cards have image thumbnails from `img/s1.jpg`–`img/s8.jpg`.
  Use picsum.photos placeholders.
- The portfolio carousel items all use the same `img/w1.jpg` placeholder.
  Use varied picsum.photos seeds.
- The original uses Linearicons (`lnr-*`) and Font Awesome (`fa-*`).
  Replace ALL with lucide-react icons.
- Footer social icons: facebook → lucide Facebook, twitter → Twitter,
  dribbble → Dribbble, behance → (no lucide equivalent — use a generic
  external link icon or text).
- The "Re-imagining the way" tagline appears as a subtitle in multiple
  sections. Keep it for fidelity.

## Component outline

- `App.tsx` — compose all sections
- `components/Navbar.tsx` — responsive nav with hamburger
- `components/Hero.tsx` — gradient banner, heading, CTA
- `components/Features.tsx` — 3-column feature cards
- `components/Services.tsx` — 8-card grid with hover overlays
- `components/Portfolio.tsx` — carousel of work items
- `components/Story.tsx` — 2-col gradient section
- `components/Newsletter.tsx` — email subscription form
- `components/FooterWidgets.tsx` — 3-column contact info
- `components/Footer.tsx` — logo, copyright, social, Component Dock link

## Implementation tasks

- [ ] Copy a minimal existing app as scaffold (e.g. apps/abjure or similar)
- [ ] Rename package to @free-react-templates/reimagine
- [ ] Set up index.css with Tailwind @theme tokens (brand colors, gradient)
- [ ] Implement Navbar with responsive hamburger
- [ ] Implement Hero with gradient background
- [ ] Implement Features section (3-column)
- [ ] Implement Services section (8-card grid + hover)
- [ ] Implement Portfolio carousel
- [ ] Implement Story section (2-col gradient)
- [ ] Implement Newsletter form
- [ ] Implement Footer Widgets (3-column)
- [ ] Implement Footer with Component Dock link
- [ ] Write Vitest tests for each component (100% coverage)
- [ ] Run verify:app gate
- [ ] Commit and open PR
