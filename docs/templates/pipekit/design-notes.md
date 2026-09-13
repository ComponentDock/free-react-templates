# Pipekit — Design Notes & Task Outline

**Source:** ColorLib Pexman (`https://colorlib.com/wp/template/pexman/`)
**Preview:** `https://preview.colorlib.com/theme/pexman/`
**Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/pexman-colorlib-template.jpg`
**New name:** Pipekit

---

## Design Tokens Summary

- **Brand color:** #000000 (black) — used in navbar, slider overlays, counter section
- **Accent:** #d9bf77 (gold) — star ratings, subtle highlights
- **CTA button:** #007bff (Bootstrap blue), square corners (border-radius: 0), px-5 py-3
- **Font:** Montserrat (Google Fonts), used for headings and body
- **Body bg:** white (#ffffff)
- **Alt section bg:** #f7f7f7 (light gray) — blog section, counter bg
- **Counter overlay:** #1d2124 (dark charcoal)
- **Cards:** no rounded corners (border-radius: 0 or 2-5px max)
- **Overall aesthetic:** Dark + gold creative agency, sharp corners, full-bleed hero images with overlays

---

## Section Order (replication fidelity)

| # | Section | Key elements | Notes |
|---|---------|-------------|-------|
| 1 | Navbar | Dark bg, brand, 5 links, hamburger | Transparent on scroll |
| 2 | Hero Slider | Full-height, 3 slides, dark overlay, CTAs | OwlCarousel-style, dot nav |
| 3 | About | Split layout, heading, 2 paragraphs, CTA | Image left, text right (or reversed) |
| 4 | Counter | Dark overlay, 4 stat columns | Animated counters, K+ suffix |
| 5 | Services | White bg, 4 cards (Research/Design/Dev/Test) | Icon + heading + blurb per card |
| 6 | Portfolio | Filter tabs, 3-col grid, hover overlay | 5 categories, image bg cards |
| 7 | Testimonials | Star rating, text, client info | Carousel of 2+ testimonials |
| 8 | Blog | Light gray bg, 3 post cards | Image bg, date, title, excerpt |
| 9 | Footer | 3-col: brand+social, nav, contact | Component Dock link required |

---

## Task Outline

### Phase 1: Scaffold
- [ ] Create `apps/pipekit/` (copy from simplest existing app, e.g. `apps/abjure/`)
- [ ] Rename package to `@free-react-templates/pipekit`
- [ ] Create `public/CNAME` with `pipekit.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Register `injectUiSource()` in `vite.config.ts`
- [ ] Run `npm install` at root to register workspace in lockfile

### Phase 2: Components (TDD)
- [ ] `src/components/Navbar.tsx` — dark bg, brand, 5 links, hamburger toggle
- [ ] `src/components/HeroSlider.tsx` — full-height, 3 slides, dark overlay, auto-advance
- [ ] `src/components/About.tsx` — split layout, heading, paragraphs, CTA
- [ ] `src/components/CounterStats.tsx` — dark overlay, 4 animated stat columns
- [ ] `src/components/Services.tsx` — 4 service cards with icons
- [ ] `src/components/Portfolio.tsx` — filter tabs, 3-col grid, hover effects
- [ ] `src/components/Testimonials.tsx` — star rating, carousel, client info
- [ ] `src/components/Blog.tsx` — 3 post cards with image bg
- [ ] `src/components/Footer.tsx` — 3-col, brand, nav, contact, Component Dock link

### Phase 3: Integration
- [ ] `src/App.tsx` — compose all sections in order
- [ ] `src/index.css` — Tailwind entry + theme tokens (black, gold, Montserrat)
- [ ] `index.html` — Google Fonts link for Montserrat

### Phase 4: Tests
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Verify 100% coverage
- [ ] Run `scripts/verify-app.sh pipekit`

### Phase 5: Deploy
- [ ] Commit: `feat: Pipekit — creative agency landing template (ColorLib Pexman)`
- [ ] Push, open PR, merge
- [ ] Surge deploy to `pipekit.free.componentdock.com`

---

## Fidelity Notes

- **ColorLib Pexman** is a creative agency portfolio template
- Heavy use of full-bleed background images with dark overlays
- Square/sharp button corners (no border-radius) — distinctive design choice
- Gold accent (#d9bf77) used sparingly (star ratings, subtle highlights)
- Counter section uses dark charcoal (#1d2124) overlay
- Portfolio has category filter functionality (JS-based show/hide)
- Blog cards use background images with overlay text
- Footer has 3 columns with social icons, navigation, and contact info
- Overall feel: dark, professional, sharp, creative agency
