# SilkHouse — Implementation Tasks & Design Notes

**Source:** ColorLib Shionhouse (https://colorlib.com/wp/template/shionhouse/)
**Preview:** https://preview.colorlib.com/theme/shionhouse/
**New name:** silkhouse

## Task Outline

### 1. Scaffold app
- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/silkhouse`
- [ ] Update `public/CNAME` → `silkhouse.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Run `npm install` at repo root for lockfile registration

### 2. Design tokens in index.css
- [ ] `@theme` block: brand `--color-brand: #9F78FF` (purple)
- [ ] Font: Cinzel (serif) for headings, Poppins for body
- [ ] Load Google Fonts in `index.html`

### 3. Section components (in order)
- [ ] `Navbar.tsx` — logo (Cinzel), nav links, social icons, search, cart badge
- [ ] `HeroSlider.tsx` — 3-slide carousel, bg images, overlay, animated headline, CTA, dots
- [ ] `Categories.tsx` — 4-column image grid with hover overlay
- [ ] `NewArrivals.tsx` — 8 product cards in 4-col grid (image, name, rating, price)
- [ ] `CollectionPromo.tsx` — promo section with bg image + text overlay
- [ ] `PopularProducts.tsx` — product cards with "Shop Now" buttons
- [ ] `Features.tsx` — 4 feature items (icon + title + description)
- [ ] `Footer.tsx` — dark navy bg, 4 columns, social links, copyright, Component Dock link

### 4. App.tsx composition
- [ ] Import all sections in order
- [ ] Ensure responsive layout

### 5. Tests (TDD)
- [ ] Write tests for each component
- [ ] 100% coverage on lines/functions/branches/statements
- [ ] Test slider auto-advance and dot navigation
- [ ] Test responsive grid layouts

### 6. Verification
- [ ] Run `scripts/verify-app.sh silkhouse`
- [ ] Visual check against ColorLib screenshot
- [ ] No ColorLib references in app code
- [ ] Component Dock link in footer
- [ ] Commit + push

## Design Notes

### Section Order (from live DOM + screenshot)
1. Navbar (white, sticky) — Cinzel logo, Poppins nav
2. Hero Slider (3 slides, full-width images, dark overlay, serif heading)
3. Categories (4 image cards in a row, hover overlays)
4. New Arrivals (product grid, 4 columns, ratings)
5. Collection Promo (bg image + text)
6. Popular Products (product cards + CTA buttons)
7. Features (4 items in row, icons + text)
8. Footer (dark navy #1D2547, 4 columns)

### Fidelity Notes
- Hero uses animated headline text ("FASHION CHANGING ALWAYS") — use CSS animation or framer-motion
- Purple brand color #9F78FF is used for: cart badge, "Shop Now" buttons, hover accents
- Square buttons (no border-radius) — "border-btn" style with purple border
- Categories are image-heavy with dark overlay on hover
- Footer background is dark navy (#1D2547), not pure black
- Product cards have star ratings (Font Awesome stars)
- Social icons: Twitter, Facebook, Pinterest (use lucide-react equivalents)
