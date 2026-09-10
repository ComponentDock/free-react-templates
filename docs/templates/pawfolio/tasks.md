# Pawfolio — Prep Tasks & Design Notes

## Template info
- **Name:** Pawfolio
- **Source:** ColorLib "Breed2" (slug: breed2)
- **Source URL:** https://colorlib.com/wp/template/breed2/
- **Preview URL:** https://preview.colorlib.com/theme/breed2/ (fetched OK)
- **Category:** Creative Portfolio / Personal Branding
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Replication research notes

### Reference sources
- **Preview DOM:** Successfully fetched full HTML (24KB) from
  `https://preview.colorlib.com/theme/breed2/`. Complete section structure,
  content, and markup captured.
- **Preview CSS:** Successfully fetched `style.css` (34KB) from same origin.
  All design tokens extracted: colors, fonts, spacing, hover effects.
- **Screenshot:** Available in TEMPLATES.md. Visual matches HTML structure.

### Design tokens captured
- Font: Roboto (300, 400, 500, 700) — loaded via Google Fonts
- Primary: `#1345e6` (vibrant blue) — buttons, links, active states
- Accent: `#ed239f` (magenta/pink) — gradient endpoint, hover, underlines
- Gradient: `linear-gradient(90deg, #1345e6, #ed239f)` — CTA buttons, stats
- Dark: `#05364d` — headings, nav text
- Light purple: `#f0e9ff`, `#fbf9ff`, `#f8faff` — section/card backgrounds
- Footer: `#021017` (near-black)
- Purple hover: `#5f30ff` — service card hover
- Star gold: `#ffd804` — testimonial ratings
- Button radius: 5px
- Section padding: 140px 0 desktop, 80px 0 tablet

### Visual structure (from live HTML)
1. Navbar (transparent, fixed on scroll)
2. Hero (bg image + illustration + CTA + social icons)
3. Statistics (3 metrics, gradient text, overlapping hero)
4. About (2-column: illustration + text + CV button)
5. Services (3 cards with icon/title/description, hover-purple)
6. Testimonials (carousel with photos, quotes, star ratings)
7. Portfolio (filterable grid, 6 items, hover overlay)
8. Blog (3 cards with meta)
9. Brands (logo carousel)
10. Footer (dark, social icons, Component Dock link)

## Implementation tasks

### Phase 1: Setup
- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/pawfolio`
- [ ] Update `public/CNAME` to `pawfolio.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://pawfolio.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Theme tokens
- [ ] Add `@theme` block in `index.css`:
  - `--color-brand: #1345e6`
  - `--color-accent: #ed239f`
  - `--color-dark: #05364d`
  - `--color-light-purple: #f0e9ff`
  - `--color-card-bg: #f8faff`
  - `--color-footer: #021017`
  - Gradient utility for CTA buttons

### Phase 3: Components
- [ ] `Navbar.tsx` — Transparent header, logo, nav links with dropdowns,
       hamburger on mobile, fixed-on-scroll behavior
- [ ] `Hero.tsx` — Two-column: left text content + social icons + CTA,
       right illustration image
- [ ] `Statistics.tsx` — 3 stat items with gradient text numbers
- [ ] `About.tsx` — Two-column: illustration left, text + CV button right
- [ ] `Services.tsx` — 3 service cards (Web Dev, UX/UI, WP Dev) with
       hover-to-purple effect
- [ ] `Testimonials.tsx` — Carousel of testimonial items with star ratings
- [ ] `Portfolio.tsx` — Filter tabs + 6-item grid with hover overlay
- [ ] `Blog.tsx` — 3 blog cards with meta, title, excerpt
- [ ] `Brands.tsx` — Logo carousel (6 grayscale brand logos)
- [ ] `Footer.tsx` — Dark bg, logo, nav, social icons, copyright + Component Dock
- [ ] `App.tsx` — Compose all sections in order

### Phase 4: Styling
- [ ] Tailwind classes for all components
- [ ] Transparent navbar → fixed white on scroll (JS state)
- [ ] Gradient CTA buttons with hover background-position animation
- [ ] Service card hover: bg transition to purple
- [ ] Portfolio hover overlay with blue tint
- [ ] Testimonial carousel (could use a simple CSS/JS carousel or
       keep owl-carousel equivalent with pure React)
- [ ] Responsive breakpoints: hamburger nav, stacked columns at 991px/767px

### Phase 5: Tests
- [ ] Component tests for each section (Vitest + Testing Library)
- [ ] Verify 100% coverage
- [ ] Run `scripts/verify-app.sh pawfolio` to pass per-app gate

### Phase 5: Verification
- [ ] Visual match to preview (colors, layout, gradient, hover effects)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] Mobile responsive at 375px
- [ ] Build succeeds
- [ ] Deploy to surge: `pawfolio.free.componentdock.com`

## Fidelity notes
- The preview was successfully fetched — implementer has full HTML/CSS
  reference. The original uses owl-carousel for testimonials and brands;
  replace with a React carousel solution (e.g. pure CSS or lightweight lib).
- Hero uses an illustration image (not a photo). Use
  `picsum.photos/seed/pawfolio-hero/1920/1080` as placeholder for bg and
  `picsum.photos/seed/pawfolio-illustration/600/600` for the character.
- The statistics section overlaps the hero by -121px margin-top — recreate
  this with negative margin or relative positioning.
- Service cards have a hover-to-purple (`#5f30ff`) transition — key visual
  feature to preserve.
- Portfolio filter tabs are JS-driven (isotope-style) — implement with
  React state filtering.
- The gradient `linear-gradient(90deg, #1345e6, #ed239f)` is used for CTA
  buttons, statistics text, and social icon hovers — apply consistently.
