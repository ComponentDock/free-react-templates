# Mentora — Implementation Tasks & Design Notes

Source: ColorLib Coach — https://colorlib.com/wp/template/coach/
Preview: https://preview.colorlib.com/theme/coach/
New name: Mentora

## Section-by-Section Structure

1. **Navbar** — Sticky top nav, brand left, links right (Home, About, Training, Testimonials, Gallery, Blog). Mobile hamburger with slide-down menu.
2. **Hero** — Full-width section, yellow (`#ffdd40`) background, "We are [typed-words]" heading, subtitle, "Contact us" CTA link. Use a small typed-text hook or CSS animation.
3. **Hero Carousel** — 3 hero images in an auto-rotating carousel (Embla or Swiper), overlapping hero with negative margin-top. Images from `picsum.photos/seed/mentora-<n>/1200x600`.
4. **About** — Two columns: left = heading + bio paragraphs + signature image; right = "Upcoming Speaking Gigs" list (4 items, event name + location/date). Below: 4-column team member grid (circular photo + name + blurb).
5. **Training** — Light gray (`bg-light`) background. Centered heading + description. Carousel of 3 training cards (image + title + text). Images from `picsum.photos/seed/mentora-t<n>/400x300`.
6. **Services** — White background. Centered heading + description. Carousel of 3+ service cards (lucide-react icon + title + text). Icons: `Award`, `Target`, `Handshake`, `TrendingUp`.
7. **Gallery** — Full-width fluid container. Centered heading + description. 12 images in responsive grid (4 cols xl, 2 cols sm). Lightbox on click. Images from `picsum.photos/seed/mentora-g<n>/300x300`.
8. **Testimonials** — White background. Centered heading "Happy Customers". Carousel of 2+ testimonial cards (blockquote + circular photo + name).
9. **Blog** — White background. Centered heading + description. 2-column grid of 3 blog entries (horizontal on desktop: image left + text right). Images from `picsum.photos/seed/mentora-b<n>/400x300`.
10. **Footer** — 3 columns: About Us (text), Quick Links (nav list), Follow Us (social icons + newsletter form). Copyright bar. Component Dock link.

## Design Token Notes

- Brand primary: `#037ef3` (blue) — buttons, links, icons
- Accent: `#ffdd40` (yellow) — hero background
- Button hover: `#000` (black)
- Body font: Open Sans (system stack fallback)
- Display font: Playfair Display (headings, hero)
- Section bg-default: white; alternate: `#f8f9fa`
- Button shape: Bootstrap default radius (`0.25rem`)
- Muted text: `#737373` to `#a8b1b8`

## Component Outline

```
src/
  App.tsx              — compose all sections
  components/
    Navbar.tsx         — sticky responsive nav
    Hero.tsx           — yellow hero with typed text
    HeroCarousel.tsx   — image carousel overlapping hero
    About.tsx          — founder info + team grid
    Training.tsx       — training cards carousel
    Services.tsx       — service cards carousel
    Gallery.tsx        — image grid + lightbox
    Testimonials.tsx   — quote cards carousel
    Blog.tsx           — blog entry cards
    Footer.tsx         — 3-column footer + newsletter
  index.css            — Tailwind entry + @theme tokens
  main.tsx             — entry point
```

## Implementation Order

1. Scaffold from simplest existing app, rename package
2. Navbar + Hero (with typed text)
3. HeroCarousel (overlapping layout)
4. About section (2-col + team grid)
5. Training section (carousel)
6. Services section (carousel + icons)
7. Gallery section (grid + lightbox)
8. Testimonials section (carousel)
9. Blog section (responsive cards)
10. Footer (3-col + newsletter)
11. Tests for all components (TDD)
12. Responsive QA pass
