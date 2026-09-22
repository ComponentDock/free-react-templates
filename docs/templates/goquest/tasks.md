# GoQuest — Implementation Notes

**Source**: ColorLib Gotrip (https://preview.colorlib.com/theme/gotrip/)
**New name**: goquest
**Category**: Travel / Tour Booking

## Tasks

### Phase 1: Scaffold
- [ ] Create `apps/goquest/` by copying a minimal existing app (e.g. apps/abjure)
- [ ] Rename package to `@free-react-templates/goquest`
- [ ] Set `public/CNAME` to `goquest.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Verify `grep -c "free-react-templates/goquest" package-lock.json` returns 1

### Phase 2: Theme Tokens
- [ ] Add Google Fonts link to `index.html`: Barlow Condensed, Roboto, Satisfy
- [ ] Configure `@theme` in `src/index.css`:
  - `--color-brand`: `#014b85`
  - `--color-accent-yellow`: `#fde02f`
  - `--color-accent-warm`: `#ffb400`
  - `--color-accent-red`: `#e6373d`
  - `--color-navy-dark`: `#0e1c35`
  - `--color-navy-heading`: `#0b1c39`
  - `--color-body`: `#506172`
  - `--color-nav-text`: `#264247`
  - `--color-card-border`: `#f0f1f2`
  - `--color-price`: `#4cafa4`
  - `--color-star`: `#ffa800`
  - `--color-footer-bg`: `#f8fafe`
  - `--color-footer-text`: `#ced9e1`
  - `--font-heading`: `"Barlow Condensed", sans-serif`
  - `--font-body`: `"Roboto", sans-serif`
  - `--font-display`: `"Satisfy", cursive`

### Phase 3: Components (section-by-section)
- [ ] **Navbar.tsx** — Top info bar (dark bg, email/phone/address, social icons) + sticky nav (logo + 6 links with dropdowns)
- [ ] **Hero.tsx** — Full-width background image, dark overlay, yellow script headline, search form (input + select + button)
- [ ] **Services.tsx** — 4-column grid of icon+text cards with light borders
- [ ] **FavouritePlaces.tsx** — Section title + 6 tour cards in 3-col grid (image, rating, name, price, duration, location)
- [ ] **VideoArea.tsx** — Parallax bg, centered yellow play button, text overlay
- [ ] **AboutCompany.tsx** — 2-col: image with "Since 1992" badge left, heading + checklist + outline button right
- [ ] **Testimonial.tsx** — Bg image, centered carousel with quote icon, text, founder avatar
- [ ] **BlogSection.tsx** — Section title + 2 blog cards with floating date badge
- [ ] **Footer.tsx** — Dark bg image, 4-col links, copyright, social icons. Link to https://www.componentdock.com/
- [ ] **App.tsx** — Compose all sections in order

### Phase 4: Tests
- [ ] Write tests for each component (TDD: red → green → refactor)
- [ ] Ensure 100% line/function/branch/statement coverage
- [ ] Run `npm run test:coverage` from goquest app

### Phase 5: Verification
- [ ] `npm run verify:app goquest` passes (typecheck + lint + knip + fallow + tests + build)
- [ ] Visual review against screenshot
- [ ] No ColorLib references in any app file
- [ ] Footer links to Component Dock

## Fidelity Notes

- Hero headline uses `Satisfy` script font at large size with yellow fill — this is distinctive
- The search form is a translucent white bar with rounded input fields and a yellow CTA button
- Tour cards have a rating badge (star + "8.0 Superb"), teal price text, and gray duration/location metadata
- The "Since 1992" badge on the about image is rotated 90° and positioned absolutely
- Video section is a simple parallax background with a square yellow play button (not circular)
- Footer has a background image (not solid color) with semi-transparent dark overlay
- Button hover animation: a red `::before` sweep effect from left (scaleX)
- Border-btn hover: dark fill sweep from bottom (scaleY)
