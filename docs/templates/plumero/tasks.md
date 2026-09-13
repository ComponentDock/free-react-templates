# Plumero (ColorLib Pillow Mart) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-plumero`. Recreation name: **Plumero** (NEW name —
> the ColorLib source keeps its name "Pillow Mart").

## Source mapping

- **ColorLib item:** "Pillow Mart" (TEMPLATES.md line 1137).
- **Source URL:** https://colorlib.com/wp/template/pillow-mart/
- **Preview URL — REACHABLE (ThemeWagon mirror):**
  **https://themewagon.github.io/pillowmart/**
  The naive `https://preview.colorlib.com/theme/pillow-mart/` returns 404.
- **Preview CSS:** `css/style.css` (8,692 lines — full styling). Fonts:
  Rubik (primary) + Poppins (secondary) — load via Google Fonts `<link>`.
  Icons: Font Awesome + Flaticon + Themify — REPLACE with lucide-react.

## Reference research (done — do not redo)

### Live preview (fetched 2026-09-13 from ThemeWagon mirror)

HTML: 448 lines. Full Bootstrap 4 responsive template with jQuery plugins
(Owl Carousel for reviews, Magnific Popup, Slick, Nice Select, CounterUp).

**Section order (verified from live DOM):**
1. `header.main_menu.home_menu` — Navbar
2. `section.banner_part` — Hero banner (782px height, flex center)
3. `section.single_product_list` — 3 featured products (200px top padding)
4. `section.trending_items` — 6 product grid (bg #F4EDF2)
5. `section.client_review` — Review carousel (bg #B08EAD)
6. `section.feature_part` — 4 feature icons with text (section_padding)
7. `section.subscribe_part` — Newsletter form (bg #4B3049)
8. `footer.footer_part` — Footer inner + copyright bar

### Design tokens (from CSS)

- **Brand color:** `#B08EAD` (muted mauve/purple)
  - Buttons: `.btn_1` bg `#B08EAD`, `.btn_3` outline `#B08EAD`
  - Client review section background
  - Nav link hover, product title links
- **Dark purple:** `#4B3049`
  - Nav link color
  - Subscribe section background
  - Heading text color
- **Light purple bg:** `#F4EDF2`
  - Trending items section background
  - Copyright bar background
- **Fonts:** Rubik (primary body), Poppins (secondary headings)
- **Buttons:** 5px border-radius, `.btn_1` (filled primary), `.btn_3` (outline)
- **Section backgrounds:** White (hero, products, features), #F4EDF2 (trending),
  #B08EAD (reviews), #4B3049 (subscribe)

### Screenshot analysis (pillowmart-free-template.jpg, 1200×946)

Browsed visually: warm, inviting eCommerce layout. White background with
product imagery. Mauve/purple accent color on buttons and review section.
Clean product grid layout. The hero has a large pillow product image on
the right with text on the left. Professional but soft aesthetic suitable
for bedding/home store.

## Implementation tasks

### Phase 1: Scaffold
- [ ] Create `apps/plumero/` from a minimal existing app template
- [ ] Rename package to `@free-react-templates/plumero`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `plumero.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Run `npm install` at repo root for lockfile registration

### Phase 2: Design tokens
- [ ] Add Rubik + Poppins via Google Fonts `<link>` in `index.html`
- [ ] Define theme tokens in `src/index.css`:
  - `--brand: #B08EAD`
  - `--dark-purple: #4B3049`
  - `--light-purple: #F4EDF2`
- [ ] Set up Tailwind theme extensions for these colors

### Phase 3: Components (top-down)
- [ ] `Navbar.tsx` — Logo + 6 nav links + search + cart icons
- [ ] `Hero.tsx` — Full-width banner with heading, text, CTA, product image
- [ ] `FeaturedProducts.tsx` — 3 alternating product rows with image overlay
- [ ] `TrendingItems.tsx` — 3×2 product grid on light purple bg
- [ ] `ClientReviews.tsx` — Carousel with avatar, quote, name on mauve bg
- [ ] `Features.tsx` — Heading + 4 icon feature cards
- [ ] `Newsletter.tsx` — Email subscription on dark purple bg
- [ ] `Footer.tsx` — Logo + nav + social icons + copyright bar

### Phase 4: Composition & Polish
- [ ] `App.tsx` — Compose all sections in order
- [ ] Responsive: hamburger nav, stacked grids on mobile
- [ ] Replace Font Awesome/Flaticon icons with lucide-react
- [ ] Use picsum.photos placeholders with deterministic seeds
- [ ] Footer links to https://www.componentdock.com/
- [ ] Remove all ColorLib references from app code

### Phase 5: Tests
- [ ] TDD: write tests for each component before implementation
- [ ] Verify 100% coverage with `npm run test:coverage`
- [ ] Run `scripts/verify-app.sh plumero`

### Phase 6: Documentation & Deploy
- [ ] Update TEMPLATES.md status
- [ ] Commit as `feat: add Plumero (ColorLib Pillow Mart) template`
- [ ] Open PR, merge immediately
- [ ] Verify Surge deploy
