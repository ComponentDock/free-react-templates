# Gazemag — Implementation Tasks & Design Notes

Source: ColorLib "Megazine" — https://colorlib.com/wp/template/megazine/
Preview: https://preview.colorlib.com/theme/megazine/

## Task outline

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/abjure`)
- [ ] Rename package to `@free-react-templates/gazemag`
- [ ] Update `public/CNAME` → `gazemag.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Run `npm install` at repo root

### Phase 2: Components
- [ ] `Sidebar.tsx` — Fixed left sidebar with logo, nav menu, copyright, social icons
- [ ] `HeroSlider.tsx` — Full-width carousel with 3 slides, dark overlay, tag + headline + desc
- [ ] `BlogGrid.tsx` — Asymmetric article card grid (multiple row layouts)
- [ ] `ArticleCard.tsx` — Reusable card: bg image + overlay + tag + headline + desc
- [ ] `Pagination.tsx` — Numbered page links with prev/next arrows
- [ ] `App.tsx` — Compose: Sidebar + HeroSlider + BlogGrid + Pagination

### Phase 3: Styling
- [ ] Tailwind theme: brand color `#F75940`, font Montserrat, bg `#f0f0f0`
- [ ] Sidebar: fixed left, ~25% width, white bg, uppercase nav
- [ ] Hero: full-width, full-height slider with dark overlay
- [ ] Blog grid: asymmetric rows matching original column widths
- [ ] Cards: bg image, dark overlay, centered white text, hover effects
- [ ] Responsive: sidebar collapses to hamburger on mobile
- [ ] Placeholder images: `https://picsum.photos/seed/gazemag-<n>/<w>/<h>`

### Phase 4: Tests (TDD)
- [ ] Sidebar: renders logo, nav items, social icons, copyright
- [ ] HeroSlider: renders 3 slides, shows tag/headline/desc, dot navigation
- [ ] BlogGrid: renders correct card count, asymmetric layout
- [ ] ArticleCard: displays image, tag, headline, description
- [ ] Pagination: renders page numbers, prev/next, active state
- [ ] App: composes all sections correctly
- [ ] 100% coverage gate

### Phase 5: Verify & Ship
- [ ] `scripts/verify-app.sh gazemag` passes
- [ ] Commit: `feat: add Gazemag (ColorLib Megazine) template`
- [ ] Open PR → merge → deploy

## Design notes

### Section structure order
1. Sidebar (left fixed)
2. Hero Slider (full-width, right of sidebar)
3. Blog Grid (below hero, right of sidebar)
4. Pagination (below blog grid)
5. Sidebar footer (bottom of sidebar — copyright + social)

### Fidelity notes

**Sidebar:**
- Width: ~25% on desktop (fixed position)
- White background
- Logo: "MEGAZINE" → "Gazemag", uppercase, letter-spacing, Montserrat
- Nav: vertical list, uppercase, light gray (#b3b3b3), active = dark/bold
- Copyright: small text at bottom
- Social icons: Facebook, Twitter, Instagram, LinkedIn — coral red (#F75940)

**Hero Slider:**
- Full-width carousel, full viewport height
- 3 slides with different background images
- Dark semi-transparent overlay on each slide (rgba(0,0,0,0.5) approx)
- Content centered: category tag (uppercase, small) → headline (h1, large, white) → description (p, white, smaller)
- Dot pagination at bottom-right corner
- Auto-rotation with manual dot navigation

**Blog Grid:**
- Asymmetric masonry-like grid
- Row 1: col-6 (large featured) + col-6 split into [col-6 + col-6 top, col-12 bottom]
- Row 2: col-4 + col-4 + col-4 (3 equal columns)
- Row 3: col-5 + col-7 (asymmetric pair)
- Row 4: col-6 + col-6 (2 equal columns)
- Total: ~14 article cards across all rows
- Each card: background image with dark overlay, category tag, headline, short description
- All text centered and white on dark overlay

**Pagination:**
- Simple numbered links (1-4) with « prev and » next
- Current page highlighted (active class)
- First page: prev is disabled

**Typography & Colors:**
- Font: Montserrat (Google Fonts), weights 300/400/700
- Brand accent: #F75940 (coral red) — links, social icons, active states
- Body text: #333333 on light, #fff on dark overlays
- Background: #f0f0f0 (page), #fff (sidebar), #000 (hero/cards dark)
- Button/tag border-radius: 30px (pill shape)
