# SkyCrest — Design Notes & Task Outline

**Source**: ColorLib Bluesky (https://preview.colorlib.com/theme/bluesky/)
**New name**: skycrest
**Category**: Real Estate

---

## Section Order (from preview)

1. Header (fixed, blue, gradient border)
2. Hero Slider (full-width carousel)
3. Home Search (dropdown filters + CTA)
4. Recent Properties (carousel of cards)
5. Cities (8-card image grid)
6. Testimonials (3-column reviews)
7. Newsletter (parallax bg + email form)
8. Footer (4-column dark, nav bar)

---

## Structure Notes

### Header
- Fixed position, z-index high
- Background solid `#3f6fce`
- Bottom border: gradient `#487fee → #32fa95` via `border-image-slice`
- Logo left, nav center, phone right
- Hamburger icon on mobile, toggles full-screen overlay menu

### Hero Slider
- Full-viewport height, background images
- Each slide: subtitle (small caps), title (large), detail list (sqft, beds, baths with icons), price
- Owl Carousel-style prev/next (use a lightweight React carousel or embla)
- Dots or arrows for navigation

### Home Search
- Overlays bottom of hero or sits directly below
- 5 `<select>` dropdowns: rent, type, city, bedrooms, bathrooms
- Gradient button "search"
- Horizontal on desktop, stacks on mobile

### Recent Properties
- Section header: title + subtitle centered
- Carousel of property cards (3 visible on desktop)
- Each card: image with badge ("Featured"/"Offer"), location text, title link, price, icon row (sqft/beds/baths)
- "see more" pill button below

### Cities
- 8 cards in a 2×4 grid (desktop), 2-col on tablet, 1-col mobile
- Each: image with dark overlay, centered white text (city name + price)
- Hover reveals overlay more prominently

### Testimonials
- 3-column grid
- Each: title, paragraph, round author image, author name + role, 5-star rating (icons)

### Newsletter
- Full-width parallax background image
- Left side: title + subtitle; right side: email input + subscribe button
- Stacks vertically on mobile

### Footer
- Dark background
- 4 columns: logo + about text | latest property card 1 | latest property card 2 | latest property card 3
- Footer bar: copyright, nav links, phone number
- Must include Component Dock link

---

## Tasks

- [ ] Scaffold app from simplest existing template (copy structure)
- [ ] Set up index.css with Tailwind theme tokens (Montserrat, brand colors)
- [ ] Implement Header component (fixed, blue bg, gradient border, nav, phone, hamburger)
- [ ] Implement HeroSlider component (carousel, slides, detail pills, price)
- [ ] Implement SearchBar component (5 dropdowns, gradient button)
- [ ] Implement RecentProperties component (carousel cards, badges, icons, "see more")
- [ ] Implement Cities component (8-card grid, overlays)
- [ ] Implement Testimonials component (3-column, author, stars)
- [ ] Implement Newsletter component (parallax bg, email form)
- [ ] Implement Footer component (4-col, latest props, nav bar, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Add responsive styles (hamburger, stacked layouts)
- [ ] Write Vitest tests for each component (100% coverage)
- [ ] Verify: typecheck, lint, tests, build all pass
