# Tidecrest — Design Notes & Task Outline

Source: ColorLib Ocheandeview (https://preview.colorlib.com/theme/ocheandeview/)
Preview analyzed: 2026-08-24

## Section order (top-to-bottom)

1. Header/Navbar — transparent over hero
2. Hero — full-bleed bg + dark overlay + bouncing arrow + heading + subtitle
3. Booking Form — white card, 3 inputs + CTA
4. About / Video — 2-column text + video area with overlay
5. Carousel — pampering section with prev/next controls
6. Features Grid — 3 cards (restaurant, pool, party)
7. Testimonials — tabbed carousel with dot navigation
8. Gallery — 13 thumbnail images in flex-wrap grid
9. Footer — dark bg, logo, nav links, contact, social icons

## Design tokens (from preview CSS)

```
brand:      #85856D  (muted olive — buttons, scroll-top, accents)
accent:     #B8B8A0  (lighter olive — button primary bg, links, borders)
heading:    #3C3A34  (dark warm charcoal)
body-text:  #94817E  (muted brown/taupe)
section-bg: #FAFAF8  (off-white warm)
white:      #ffffff
dark:       #16161a
font-body:  Raleway, sans-serif
font-head:  Cormorant Garamond, serif
border-radius: 25px (inputs), 50px (CTA buttons)
```

## Fidelity notes

- The hero uses a real background image with a gradient overlay (dark to
  transparent from top to bottom). Use a picsum seed + CSS gradient overlay.
- The bouncing arrow is a small SVG icon that floats up and down. Implement
  with CSS keyframe `float-bob` animation.
- Booking form inputs are rounded (25px radius), light background, with
  nice-select styled dropdown for guests.
- The about/video section has a dark overlay on a background image (video
  placeholder area).
- The carousel is a slick-style carousel with custom prev/next buttons.
  Use a simple React carousel or owl-carousel equivalent.
- Feature cards have images on top and text below, in a 3-column grid.
  Each card has a heading in Cormorant Garamond and a description in Raleway.
- Testimonials use tabbed navigation (tablist + tabpanel pattern) with
  dot indicators.
- Gallery is a flex-wrap grid of 13 images (thumbnails linking outward).
- Footer has 3 columns: left = logo + paragraph, center = "The Hotel" links,
  right = phone + email + social icons. Component Dock link replaces
  Colorlib attribution.

## Component outline

```
src/
  App.tsx
  components/
    Header.tsx       — transparent navbar, hamburger, Book Now CTA
    Hero.tsx         — bg image, overlay, arrow, heading, subtitle
    BookingForm.tsx  — date inputs, guest select, Check Availability
    AboutSection.tsx — 2-col text + video area overlay
    Carousel.tsx     — pampering carousel with prev/next
    FeaturesGrid.tsx — 3 cards (restaurant, pool, party)
    Testimonials.tsx — tabbed testimonial carousel
    Gallery.tsx      — 13-image flex grid
    Footer.tsx       — dark footer with links, contact, social
  index.css          — Tailwind entry + @theme tokens
```

## Implementation notes

- Use `cn()` from `packages/ui` for all class composition.
- All images via `picsum.photos/seed/tidecrest-<n>/<w>/<h>` with stable seeds.
- Icons from `lucide-react` (arrow-down for bouncing arrow, chevron-left/right
  for carousel, social icons).
- Date inputs: use native `<input type="date">` or a lightweight date picker.
  Avoid heavy dependencies; a simple styled native input is sufficient.
- Guest dropdown: native `<select>` styled to match the olive color scheme.
- Carousel: implement with React state (currentIndex) + transition classes.
  No external carousel library needed for a simple prev/next pattern.
- Testimonials: implement with React state (activeTab) + conditional rendering
  of tabpanel content.
- Footer Component Dock link: `<a href="https://www.componentdock.com/">Component Dock</a>`
