# Classily — Implementation Tasks

Source: ColorLib Classy Ads (https://colorlib.com/wp/template/classy-ads/)
Preview: https://preview.colorlib.com/theme/classy-ads/ (404 — screenshot used)
New name: classily

## Task list

### Setup

- [ ] Create `apps/classily/` (copy simplest existing app, rename package to `@free-react-templates/classily`)
- [ ] Add `public/CNAME` with `classily.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://classily.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()` pattern
- [ ] Run `npm install` at repo root to register workspace in lockfile

### Design tokens (src/index.css @theme)

- [ ] Brand color: `--color-brand: #00C9B7`
- [ ] Brand hover: `--color-brand-dark: #00A896`
- [ ] Text palette: `--color-text-dark: #26282b`, `--color-text-medium: #555555`, `--color-text-light: #999999`
- [ ] Page background: `--color-bg-page: #f5f5f5`
- [ ] Border: `--color-border: #dddddd`
- [ ] Font family: Roboto (body + headings) via Google Fonts `<link>`

### Components (src/components/)

- [ ] `Navbar.tsx` — white bg, split-color logo, 5 nav links, Log In/Register links, "Post an Ad" CTA button, sticky on scroll
- [ ] `Hero.tsx` — full-width background image (picsum.photos), centered headline + subtext, horizontal search bar (3 fields + button)
- [ ] `CategoryStats.tsx` — 6-column grid of category items: icon (lucide-react), name, count badge (pill with teal border)
- [ ] `FeaturedAds.tsx` — 4-column card grid: image, title, description/price, white cards on gray bg
- [ ] `Footer.tsx` — copyright line, nav links, Component Dock attribution
- [ ] `App.tsx` — compose all sections in order

### Testing (TDD)

- [ ] Write tests for each component before implementation
- [ ] Ensure 100% lines/functions/branches/statements coverage
- [ ] Verify with `npm run test:coverage` in workspace

### Verification

- [ ] `scripts/verify-app.sh classily` passes (typecheck + lint + knip + fallow + test + build)
- [ ] Visual fidelity check against screenshot
- [ ] No ColorLib references in app code

## Design notes — section-by-section fidelity

### Navbar

- White background (#ffffff), full-width
- Logo left: "CLASSY" in black + "ADS" in teal (render as split <span> with different colors)
- Center nav: Home, Ads, About, Blog, Contact
- Right: vertical separator, "Log In" / "Register" text links, teal "Post an Ad" button (8px radius)
- Sticky on scroll, no shrink animation needed

### Hero

- Full-width background image (use picsum.photos with seed for determinism)
- NO dark overlay — the original uses a desaturated/grayed photo
- Centered text: headline (bold, white) + subtext (light gray)
- Horizontal search bar below text:
  - 3 fields in a row: text input "What are you looking for?", text input "Location", select "All Categories"
  - All white bg, #ddd border, 8px radius, matching height
  - Teal "Search" button on the right end (same height)

### Category Stats

- White background section
- 6 items in a horizontal row (responsive: 3-col on tablet, 2-col on mobile)
- Each item: icon (teal #00C9B7, line style from lucide-react), category name (medium gray), count badge (small pill: light gray bg, teal #00C9B7 border, dark text)
- Categories to use: Real Estate, Jobs, Vehicles, Electronics, Furniture, Fashion (or appropriate lucide icons)

### Featured Ads

- Light gray (#f5f5f5) page background
- Section heading: "Featured Ads" (bold)
- 4-column grid of cards (responsive: 2-col tablet, 1-col mobile)
- Each card: white bg, no shadow, top image (picsum.photos), title, brief description or price
- Cards have no visible border — clean flat style

### Footer

- Simple footer with copyright text
- Nav links repeated
- Component Dock attribution: "More templates at Component Dock" linking https://www.componentdock.com/
- Background: white or light gray
