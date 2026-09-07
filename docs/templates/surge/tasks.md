# Surge — Implementation Tasks

Source: ColorLib "Atomic" (`wp/template/atomic/`)
Preview: `https://preview.colorlib.com/theme/atomic/`
New name: **Surge** (apps/surge, @free-react-templates/surge)

## Structure order (section-by-section)

1. Navbar
2. Hero (full-viewport bg + play button)
3. Features overlap card (3 columns)
4. Content section (2-col text + carousel)
5. Services grid (3x2 icons on light bg)
6. Portfolio thumbnails (2x2 asymmetric)
7. Counter stats (blue bg, 3 numbers)
8. Testimonials (carousel)
9. Footer (4-col + copyright)

## Task breakdown

### Phase 1: Scaffold

- [ ] Copy simplest existing app as template, rename package to `@free-react-templates/surge`
- [ ] Set `public/CNAME` to `surge.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://surge.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Add Work Sans font via Google Fonts link in `index.html`
- [ ] Set `--primary: #0389FF` in `index.css` @theme

### Phase 2: Components (TDD)

- [ ] `Navbar.tsx` — transparent desktop, blue mobile, hamburger toggle
- [ ] `Hero.tsx` — full-viewport bg image, play button circle, heading + CTA
- [ ] `FeaturesOverlap.tsx` — white card with shadow, 3 icon feature blocks
- [ ] `ContentSection.tsx` — heading, two-column text, image carousel
- [ ] `ServicesGrid.tsx` — 3x2 icon grid on light bg, CTA button
- [ ] `PortfolioThumbnails.tsx` — 2x2 asymmetric grid, hover reveal
- [ ] `CounterStats.tsx` — blue bg, 3 animated counters
- [ ] `Testimonials.tsx` — carousel with blockquotes
- [ ] `Footer.tsx` — 4-column layout, social links, Component Dock link
- [ ] `App.tsx` — compose all sections in order

### Phase 3: Fidelity checks

- [ ] Verify Work Sans font loads (300, 400, 700 weights)
- [ ] Verify primary color #0389FF on buttons, links, navbar
- [ ] Verify buttons: sharp corners (radius 0), uppercase, letter-spacing
- [ ] Verify overlap card: margin-top -13em, shadow, radius 7px
- [ ] Verify section padding 7em 0
- [ ] Verify portfolio hover: overlay darkens, text reveals
- [ ] Verify counter animation on scroll
- [ ] Verify responsive: mobile hamburger, stacked columns

### Phase 4: Verification

- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run typecheck` — no errors
- [ ] `npm run lint` — no errors
- [ ] `npm run build` — successful build
- [ ] Visual check: compare with preview screenshot

## Design notes

- **Font:** Work Sans (Google Fonts), weights 300/400/700
- **Primary:** #0389FF (bright blue)
- **Body text:** #999999 (light gray)
- **Headings:** #000 (black)
- **Buttons:** sharp corners (radius 0), uppercase, letter-spacing 0.1em
- **Section padding:** 7em 0
- **Overlap card:** white, border-radius 7px, shadow 0 10px 20px -8px rgba(0,0,0,0.2)
- **Icon color (features):** #d6dadd (very light gray)
- **Counter bg:** #0389FF (primary blue)
- **Footer headings:** #cccccc
- **Play button:** 80px circle, 2px border rgba(0,0,0,0.1), grows to 90px on hover
- **Thumbnail:** 500px height, bg-size cover, dark overlay 10% -> 50% on hover
