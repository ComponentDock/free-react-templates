# Lensvault — Design Notes & Tasks

## Source
- ColorLib slug: `shotgear`
- Preview: https://preview.colorlib.com/theme/shotgear/
- Original name: Shotgear Photography

## New Name
`lensvault` — evokes photography storage/archive, completely different from "shotgear"

## Design Tokens (from live CSS)

```
Brand orange:  #ff4800
Dark bg:       #182028 (navbar, buttons, sections)
Footer bg:     #1e2528
Body text:     #999999
Muted text:    #888888
Heading text:  #182028
White:         #fff
Alt section:   #fbf9ff
Border accent: #f0e9ff
Font heading:  Oswald, sans-serif
Font body:     Roboto, sans-serif
Button radius: 50px (pill)
Button bg:     #182028 default, #ff4800 hover
```

## Section Order (must match 1:1)

1. **Navbar** — Sticky, transparent bg, logo left, links right, cart icon
2. **Hero** — Full-width bg image, "Model Photography" subtitle, "Creative" headline, "view work" CTA
3. **About** — Centered, "About our studio" subtitle, large quote, "read more" btn
4. **Gallery** — "Check latest work", filterable masonry-style grid, hover overlays
5. **Services** — "What we offer", icon + title + desc cards
6. **Testimonials** — "Testimonials", carousel/slider, customer quote + name
7. **Pricing** — "Pricing plan", 3 tier cards, feature lists, CTA buttons
8. **Blog** — "Latest story", 3 post cards (image + title + date + excerpt)
9. **Footer** — Dark (#1e2528), 4 cols: services, contact, Instagram, newsletter

## Implementation Tasks

- [ ] Create `apps/lensvault/` (copy simplest existing app, rename package)
- [ ] Set up `vite.config.ts` with `injectUiSource()` helper
- [ ] Create `src/index.css` with Tailwind `@theme` tokens for brand orange + dark bg
- [ ] Create `src/components/Navbar.tsx` — sticky nav with links and cart icon
- [ ] Create `src/components/Hero.tsx` — bg image, centered text, CTA button
- [ ] Create `src/components/About.tsx` — centered quote section
- [ ] Create `src/components/Gallery.tsx` — masonry grid with hover overlay
- [ ] Create `src/components/Services.tsx` — service cards with icons
- [ ] Create `src/components/Testimonials.tsx` — carousel with dot navigation
- [ ] Create `src/components/Pricing.tsx` — 3-tier pricing cards
- [ ] Create `src/components/Blog.tsx` — 3 post cards
- [ ] Create `src/components/Footer.tsx` — 4-column dark footer
- [ ] Create `src/App.tsx` — compose all sections in order
- [ ] Add Google Fonts link (Oswald + Roboto) in `index.html`
- [ ] Write Vitest tests for each component (100% coverage)
- [ ] Run `npm run verify:app lensvault`
- [ ] Add `public/CNAME` with `lensvault.free.componentdock.com`

## Fidelity Notes

- Banner has a dark background image (`banner_bg.png`), text is centered and white
- About section is purely text — centered layout, no image
- Gallery uses a filterable masonry grid (filtr-container/filtr-item)
- Services section has icon + text cards in a grid
- Testimonials use a slider (owl.carousel or similar) with dots
- Pricing has 3 cards with similar prices ($50 each visible) and feature lists
- Blog has 3 cards in a row, each with image, category, title, date
- Footer is dark (#1e2528) with 4 columns
- All buttons are pill-shaped (border-radius: 50px)
- Primary brand color #ff4800 appears on hovers, links, and pricing accents
