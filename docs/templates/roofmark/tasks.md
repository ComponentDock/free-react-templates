# Roofmark — Design Notes & Implementation Outline

## Source
- ColorLib slug: `myhome`
- Preview: https://preview.colorlib.com/theme/myhome/
- Category: Real Estate

## Section order (top → bottom)

1. **Header** — Two rows:
   - Top bar (#55407d purple bg, 55px height): phone + address + email (left), social icons + Login/Register (right)
   - Main nav (white bg, 61px height, box-shadow): logo "my" + span "home" (green), nav links, "submit listing" button

2. **Hero Slider** — Full-width image carousel, 3 identical slides with:
   - Background image (cover, parallax-ready)
   - Address headline (h1, 48px Montserrat)
   - Price tag overlay (styled badge)
   - Right-arrow navigation

3. **Search Bar** — Overlapping bar on semi-transparent purple (#55407d at 67%):
   - "Find your home" title
   - 3 flex inputs: Property type, No rooms, Location
   - Green (#adc867) submit button, 247px wide, 51px tall

4. **Featured Properties** — White bg section:
   - Centered subtitle "the best deals" + heading "Featured Properties"
   - 3-column grid of listing cards
   - Each card: image container + overlay tags + price badge + location + icon stats (sq ft, beds, baths, garage)

5. **Hot Deal** — 2-column (eq-height row):
   - Left: large image with tag overlays
   - Right: price, title link, location, agent avatar + name, stat icons

6. **Testimonials** — 2-column (eq-height):
   - Left: image with dark overlay
   - Right: subtitle "the best deals" + heading "Clients testimonials" + quote carousel

7. **Footer** — Dark purple (#1e1332) bg, 4 columns:
   - Col 1: logo, about text, social icons, submit listing
   - Col 2: Information links
   - Col 3: Useful links
   - Col 4: Properties Types links + mini featured property card

8. **Footer Bar** — Copyright + footer nav

## Design tokens recap

| Token | Value |
|---|---|
| Font | Montserrat (300-900) |
| Brand green | #adc867 |
| Purple accent | #55407d |
| Dark bg | #1e1332 |
| Body text | #2b2e35 |
| Secondary text | #a2b0bf |
| Link underline | #ffa07f |
| Tag: rent | #ff006c |
| Button: no border-radius, sharp edges |

## Component outline

- `Navbar.tsx` — HeaderBar + HeaderContent (two-row header)
- `HeroSlider.tsx` — OwlCarousel-like carousel (use simple CSS transitions or a lightweight carousel)
- `SearchBar.tsx` — Form with 3 inputs + submit button
- `FeaturedProperties.tsx` — Section with 3 ListingCard components
- `ListingCard.tsx` — Image + tags + price + location + stats
- `HotDeal.tsx` — 2-column featured deal section
- `Testimonials.tsx` — 2-column with quote carousel
- `Footer.tsx` — 4-column footer + footer bar

## Fidelity notes

- The original uses Bootstrap 4 grid + custom CSS. We replace with Tailwind.
- The original uses OwlCarousel. For React, use CSS-only transitions or a minimal carousel state.
- Font Awesome icons → replace with Lucide React icons.
- Placeholder images via `https://picsum.photos/seed/roofmark-<n>/<w>/<h>`.
- The ColorLib "my" + span "home" logo pattern → render as JSX with span for green accent.
- Footer links to componentdock.com instead of Colorlib.
