# Conclave — Implementation TODO & Design Notes

Source: ColorLib Umeet (https://preview.colorlib.com/theme/umeet/)

## Section order (fidelity reference)

1. Navbar
2. Hero Banner
3. Stats Bar
4. Features ("Why Join")
5. Speakers (carousel)
6. Schedule (tabs)
7. Gallery / Achievements
8. Pricing (3 tiers)
9. Sponsors
10. Blog (3 cards)
11. Footer (4-col)

## Design notes

- **Color palette:** Deep purple #3b1d82 primary, hot pink #ea0763 accent, lavender #f0e9ff alternating bg, navy #111429 footer.
- **Typography:** Oswald for headings (bold, uppercase feel), Roboto for body.
- **Hero:** Full-width background image with semi-transparent overlay, centered text, countdown + date + CTA. Use placeholder `picsum.photos` for bg.
- **Stats bar:** Light gray/lavender bg, 3-column flex with large number + label. Simple counter animation optional.
- **Features:** 3 equal-width cards, each with a circular icon bg, title, description. White section bg.
- **Speakers:** Dark background image section. Carousel of cards with photo, name, role. Use owl-carousel pattern but implement as React carousel.
- **Schedule:** Tab bar (Day 1 / Day 2). Each tab shows a timeline with speaker photo, talk title, time slot. Alternate left/right layout.
- **Gallery:** Background image section, grid of images with captions. Use `picsum.photos` for placeholders.
- **Pricing:** 3 cards (Normal / Advance / Ultimate). Feature checklist, price, CTA button. Center card slightly elevated.
- **Sponsors:** Background image section, centered logo grid.
- **Blog:** 3 preview cards (image top, title, excerpt, read-more link).
- **Footer:** Dark navy #111429. 4 columns: About text, Nav links, Newsletter form, InstaFeed (placeholder grid).
- **Footer MUST include Component Dock link** per conventions.

## Component breakdown (suggested)

```
src/
  App.tsx              — compose all sections
  components/
    Navbar.tsx         — sticky nav, hamburger on mobile
    HeroBanner.tsx     — bg image, countdown, date, CTA
    StatsBar.tsx       — 3 stat blocks
    Features.tsx       — 3 feature cards
    Speakers.tsx       — carousel of speaker cards
    Schedule.tsx       — tabbed schedule
    Gallery.tsx        — image grid
    Pricing.tsx        — 3 pricing cards
    Sponsors.tsx       — logo grid
    Blog.tsx           — 3 blog preview cards
    Footer.tsx         — 4-col footer + Component Dock link
  index.css            — Tailwind entry + @theme tokens
```

## Implementation order (suggested)

1. Scaffold app from simplest existing template (copy + rename package)
2. Set up theme tokens in index.css (#3b1d82, #ea0763, #f0e9ff, #111429)
3. Navbar (responsive hamburger)
4. HeroBanner (bg image, countdown, CTA)
5. StatsBar
6. Features
7. Speakers (carousel)
8. Schedule (tabs)
9. Gallery
10. Pricing
11. Sponsors
12. Blog
13. Footer
14. Tests (100% coverage)
15. Build + verify
