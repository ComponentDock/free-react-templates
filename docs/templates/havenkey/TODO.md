# Havenkey — Implementation TODO & Design Notes

## Source

- ColorLib slug: `oakberry`
- Preview: https://preview.colorlib.com/theme/oakberry/
- New name: `havenkey`
- Category: Bootstrap / Real Estate — Agency

## Implementation tasks

### Phase 1 — Scaffold

- [ ] Copy simplest existing app (e.g. `apps/dwell/`) → `apps/havenkey/`
- [ ] Rename package to `@free-react-templates/havenkey`
- [ ] Set `public/CNAME` → `havenkey.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Update `index.html` title to "Havenkey — Real Estate Agency"

### Phase 2 — Design tokens & layout

- [ ] Add Nunito Sans font link to `index.html`
- [ ] Define brand color `#5ea51d` in Tailwind `@theme` as primary
- [ ] Define dark footer bg `#081637` / `#030513` in Tailwind theme
- [ ] Set base font to Nunito Sans in Tailwind config

### Phase 3 — Components (section order = DOM order)

1. [ ] **TopInfoBar** — 3-column info strip (phone, location, social)
2. [ ] **Navbar** — sticky, brand + 6 links + green CTA button, hamburger on mobile
3. [ ] **HeroSlider** — 3 slides, background images, dark overlay, white text, green CTA
4. [ ] **PropertySearch** — pill tabs (Buy/Rent), 4 filter fields, Search button
5. [ ] **Categories** — 4 cards (Land, Residential, Commercial, Industrial)
6. [ ] **FeaturedProperties** — 4 property cards with image, title, price, agent
7. [ ] **VideoSection** — background image, dark overlay, play button
8. [ ] **AboutSection** — two-column (image left, text right), company description
9. [ ] **CtaStrip** — full-width image bg, "Find Best Place For Living", "Get in touch" button
10. [ ] **Testimonials** — client cards with avatar, name, quote
11. [ ] **AgentsSection** — 3 agent cards with photo, name, role, social icons
12. [ ] **RecentBlog** — 3 blog cards with image, date badge, title, excerpt
13. [ ] **GalleryStrip** — row of full-width photos, no text
14. [ ] **Footer** — dark bg, 4 columns, newsletter, copyright, componentdock.com link

### Phase 4 — Tests

- [ ] Write tests for each section component (100% coverage)
- [ ] Write test for responsive navbar toggle
- [ ] Write test for slider transitions
- [ ] Write test for search form tab switching

### Phase 5 — Verification

- [ ] Run `scripts/verify-app.sh havenkey`
- [ ] Visual check on phone viewport
- [ ] Confirm footer links to componentdock.com
- [ ] Confirm no ColorLib references in app code

## Design notes

### Color palette

- Primary brand: `#5ea51d` (green) — used on buttons, nav active state,
  price tags, accents
- Footer dark: `#081637` / `#030513` (very dark navy/black)
- Light bg sections: `#f3f5f1` or `#f8f9fa`
- Text: `#000000` (headings), `#6c757d` (body)
- White: `#ffffff` (cards, nav, forms)

### Typography

- Font: Nunito Sans (weights 200–700)
- Headings: bold Nunito Sans
- Body: regular Nunito Sans

### Key layout patterns

- Hero slider: full-viewport height, background-image cover, dark overlay
  via `rgba(0,0,0,.4)`, centered text column (col-md-10 col-xl-6)
- Search form: pill-shaped nav tabs, 5-column row of filter inputs
- Property cards: image top, info bottom with agent avatar inline
- Video section: background-image with play button centered
- About: two-column equal split (text + image)
- CTA strip: full-width image with overlay, centered text + button
- Gallery: flex row of equal-width images, no padding gaps
- Footer: 4-column grid, dark background, light text

### Fidelity notes

- The original uses Bootstrap 5 grid (container-xl, row, col-md-*). In React
  recreate with Tailwind equivalents (max-w-7xl, grid, responsive cols).
- Slider uses tiny-slider.js in original — in React use CSS-based slider or
  a React carousel library.
- Tabs in search form use Bootstrap pills — use state-controlled tabs.
- Images: use picsum.photos with deterministic seeds for placeholders.
- Icons: use lucide-react instead of Font Awesome / Ionicons.
