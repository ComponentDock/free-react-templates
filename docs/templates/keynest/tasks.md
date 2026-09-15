# Keynest (ColorLib Youragent) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-keynest`. Recreation name: **Keynest** (NEW name —
> the ColorLib source keeps its name "Youragent").

## Source mapping

- **ColorLib item:** "Youragent" (TEMPLATES.md line 1242).
- **Source URL:** https://colorlib.com/wp/template/youragent/
- **Preview URL — REACHABLE (verified 2026-09-15):**
  `https://preview.colorlib.com/theme/youragent/` (HTTP 200, 22,730 bytes).
- **Preview CSS:** `css/style.css` (13,847 bytes) — Bootstrap 4 base +
  custom styles. Fonts: Mukta Mahee + Playfair Display (Google Fonts).
  Icons: Font Awesome 4, Ionicons → REPLACE with lucide-react.

## Reference research (done — do not redo)

### Screenshot (`youragent-free-template.jpg`, AVIF format)

Browsed via DOM/CSS analysis 2026-09-15 (screenshot is AVIF, vision tool
unavailable — analysis from live DOM + CSS). Expected visual:
- Dark transparent header over hero image
- Full-viewport hero with real estate imagery, large white serif heading
  "I'm Your Realtor, Get Your Key", white pill buttons
- Property listing cards with images, prices, addresses in a carousel
- Testimonial quotes carousel
- About section with agent photo and feature icons
- Blog grid on light background
- Dark (#1a1a1a) footer with newsletter signup

### Live DOM analysis

Sections identified from HTML parsing (in order):
1. `header.site-header` — transparent header with logo + nav
2. Contact sidebar (inside header/container) — address, phone, email, social
3. `section.site-hero.overlay` — full-viewport hero with overlay
4. `section.section.visit-section` — property listings carousel
5. `section.section` — testimonials carousel
6. `section.section` — about me + features (3-column icons)
7. `section.section.bg-light` — blog posts grid
8. `footer.section.footer-section.bg-primary` — dark footer with newsletter

### CSS token extraction

- Accent brand: `#007bff` (blue) — buttons, star ratings, links
- Footer bg: `#1a1a1a`, text: `rgba(255,255,255,0.7)`
- Body font: `"Mukta Mahee", arial, sans-serif`
- Heading font: `"Playfair+Display", times, serif`
- Hero heading: 80px bold white, line-height 1; 40px on mobile
- Buttons: `border-radius: 50px` (pill), 2px border, uppercase,
  letter-spacing 0.2em
- Hero overlay: `rgba(0,0,0,0.15)`
- Property card shadow: `0 2px 3px 0 rgba(0,0,0,0.2)`

## Implementation task outline

### Phase 1: Scaffold
- [ ] Copy simplest existing app to `apps/keynest`
- [ ] Rename package to `@free-react-templates/keynest`
- [ ] Update `public/CNAME` to `keynest.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Run `npm install` at repo root

### Phase 2: Design tokens
- [ ] Add `@theme` block: `--color-accent: #007bff`
- [ ] Add Google Fonts `<link>` for Mukta Mahee (400, 700) + Playfair Display (400, 700)
- [ ] Configure Tailwind font families

### Phase 3: Section components
- [ ] `Header.tsx` — transparent header, logo, nav links, hamburger toggle
- [ ] `ContactSidebar.tsx` — address, phone, email, social icons (desktop only)
- [ ] `Hero.tsx` — full-viewport bg, overlay, heading, pill buttons, scroll indicator
- [ ] `PropertyListings.tsx` — carousel of property cards (image, price, address)
- [ ] `Testimonials.tsx` — carousel of quotes with author names
- [ ] `AboutSection.tsx` — agent photo + bio, 3 feature icons (Clock, Star, Headphones from lucide)
- [ ] `BlogPosts.tsx` — 3 cards: image, date, title, excerpt
- [ ] `Footer.tsx` — dark bg, 4 columns, newsletter form, Component Dock link

### Phase 4: App composition
- [ ] `App.tsx` — compose all sections in order
- [ ] Responsive behavior: hamburger nav, stacked columns, sidebar hidden on mobile

### Phase 5: Tests + coverage
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Achieve 100% coverage
- [ ] Run `npm run verify:app keynest`

### Phase 6: Deploy
- [ ] Commit as `feat: add Keynest (ColorLib Youragent) template`
- [ ] Push to `feat/template-keynest` branch
- [ ] Open PR, merge immediately (squash)
- [ ] Verify Surge deploy at `keynest.free.componentdock.com`

## Fidelity notes

- **Contact sidebar**: The original has a left-aligned contact panel overlaid
  on the hero. Implement as a fixed sidebar on desktop, hidden on mobile
  (use a slide-out drawer or inline section instead).
- **Owl-carousel → simple carousel**: Replace jQuery owl-carousel with a
  simple React auto-advancing carousel (CSS transitions) for both properties
  and testimonials.
- **Property cards**: Each card shows a property image, price in bold, and
  address below. Use picsum images with real estate-themed seeds.
- **Icons**: Replace Font Awesome/Ionicons with lucide-react:
  - Deal On Time → `Clock`
  - Good Reviews → `Star`
  - 24/7 Support → `Headphones` or `Phone`
  - Social: `Twitter`, `Facebook`, `Instagram`
- **Pill buttons**: `border-radius: 50px`, uppercase, letter-spacing 0.2em,
  2px border. Hero buttons are white-bordered on dark bg.
- **Footer**: Dark `#1a1a1a` bg, 4 columns, newsletter form at bottom,
  copyright with Component Dock link (replace Colorlib attribution).
- **No ColorLib references**: All provenance only in spec and PR.
