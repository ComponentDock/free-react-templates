# Peewee — Implementation Notes

Source: ColorLib Kiddos · https://preview.colorlib.com/theme/kiddos/

## Section order (top to bottom)

1. Navbar — top bar (address/email/phone) + main nav (7 links) + brand logo
2. Hero Slider — full-width swiper, headline + CTA, background image
3. Services Row — 4 cards in a row, each with colored left accent
4. About — 2-column: image left, text right, heading + 2 paragraphs
5. What We Offer — 6-item grid, icon + title + description per card
6. Testimonials — teacher profiles in a carousel, 4 teachers
7. Counter/Stats — parallax bg + animated counters
8. Gallery — image grid with lightbox
9. CTA/Consult — parallax bg + class schedule info
10. Footer — dark bg, 3 columns, social icons, Component Dock link

## Design tokens to implement

- Primary: `#1eaaf1` (sky blue) — buttons, links, accents
- Secondary: `#fda638` (orange) — secondary buttons, highlights
- Tertiary: `#5d50c6` (purple) — service card accent
- Quarternary: `#8cc152` (green) — service card accent
- Dark: `#3c312e` (dark brown) — footer background
- Light: `#f8f9fa` — alternating section backgrounds
- Body: `#212529` — main text color
- Font: Work Sans (Google Fonts)
- Button radius: `0.375rem`

## Fidelity notes

- The original uses Bootstrap grid (col-md-3, col-md-5, col-md-7). Use Tailwind grid/flex.
- The hero uses Swiper.js for the carousel — consider a simpler CSS-only or lightweight carousel.
- The counter section uses animate On Scroll (AOS) — implement with Intersection Observer.
- Gallery uses GLightbox — consider a light React lightbox library.
- Parallax backgrounds on sections 7 and 9 — use `background-attachment: fixed` or CSS `background-position`.
- The services row uses colored left borders on each card — implement with Tailwind `border-l-4`.
- Teacher profiles are in a slider — use a simple carousel component.
