# Perusal — Implementation Notes

Recreation of ColorLib Browse (https://preview.colorlib.com/theme/browse/)

## Section order (top to bottom)

1. **Navbar** — Logo text + 5 nav links + hamburger (mobile)
2. **Hero** — Full-width bg image + dark overlay + typed headline + search bar (4 fields)
3. **Most Visited Places** — 3-col grid, 6 listing cards
4. **Popular Categories** — 6-col icon grid + "View All Categories" button
5. **Why Us** — 2-col: image left, accordion FAQ right (4 items)
6. **How It Works** — 3-col step cards (SVG illustrations)
7. **Satisfied Customers** — Testimonial carousel (bg-light)
8. **Tips & Articles** — 3-col blog cards
9. **CTA Banner** — Full-width teal bg, white text, Sign Up button
10. **Footer** — 4-col links + newsletter form + copyright

## Design token notes

- Primary: `#00918e` (teal) — use in `@theme` as `--color-primary`
- Font: Rubik (Google Fonts, weights 400 + 700)
- Pill buttons: `border-radius: 9999px` or `rounded-full`
- Hero overlay: semi-transparent black over background image
- Footer: black background (`#000`)
- CTA section: teal background, white text
- Testimonial section: `bg-gray-50` or equivalent light gray

## Fidelity notes

- Hero typed text effect: use `react-type-animation` or similar (cycles through "Attractions", "Events", "Hotels", "Restaurants")
- Search bar: white card with shadow, 4 inputs in a row (text, location with pin icon, category dropdown, teal Search button)
- Listing cards: square corners (no rounded), image fills top, content overlay at bottom with category badge + title + address
- Category grid: flaticon-style icons → use lucide-react equivalents
- Accordion FAQ: use `@headlessui/react` or native details/summary
- Testimonials: owl-carousel → use a React carousel (e.g. `embla-carousel-react`)
- SVG step illustrations: use placeholder SVGs or lucide-react icon compositions
- Footer: 4 link columns + newsletter email input + social icons (lucide-react)

## Component outline

```
apps/perusal/src/
  App.tsx              — Section composition
  components/
    Navbar.tsx         — Logo + nav links + mobile toggle
    Hero.tsx           — Background + typed headline + search bar
    SearchBar.tsx      — 4-field search form
    MostVisited.tsx    — 6 listing cards in grid
    ListingCard.tsx    — Single listing card
    PopularCategories.tsx — 6 category items in grid
    CategoryItem.tsx   — Single category item
    WhyUs.tsx          — Image + accordion FAQ
    HowItWorks.tsx     — 3 step cards
    Testimonials.tsx   — Carousel of testimonial cards
    BlogPosts.tsx      — 3 blog cards
    CtaBanner.tsx      — Full-width teal CTA
    Footer.tsx         — 4 columns + newsletter + copyright
  index.css            — Tailwind + @theme tokens
```
