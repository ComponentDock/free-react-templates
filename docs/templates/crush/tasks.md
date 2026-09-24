# Crush (ColorLib Smashed) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-crush`. Recreation name: **Crush** (NEW name —
> the ColorLib source keeps its name "Smashed").

## Source mapping

- **ColorLib item:** "Smashed" (TEMPLATES.md line 2215; section
  "## News & Magazines").
- **Source URL:** https://colorlib.com/wp/template/smashed/
- **Preview URL — REACHABLE (verified 2026-09-24 by direct fetch):**
  `https://preview.colorlib.com/theme/smashed/` (HTTP 200, 51KB HTML).
  `<title>Smashed Magazine</title>`.
- **Preview CSS:** `css/main.css` (55KB, 1400+ lines — all styles, Bootstrap
  grid + custom). Scripts: owl carousel, magnific-popup, nice-select, wow.js.
  Fonts: Open Sans (400, 600) + Roboto (400, 600) via Cloudflare CDN inline
  `@font-face` — **Google Fonts `<link>` for Open Sans 400,600 + Roboto 400,600**.
  Icon font: Linearicons (`css/linearicons.css`) + Font Awesome —
  **REPLACE with lucide-react**, do not ship icon fonts.

## Reference research (done — do not redo)

### Screenshot analysis

Browsed visually (colorlib-free-smashed.jpg). Dark magazine layout:
- Hero: full-width edge-to-edge, 3-col layout (left sidebar 3 stacked
  article cards with image overlays + center carousel + right sidebar with
  weather widget "United States 28°C" and "Recent Music Playlist")
- Navbar: red icon + "SMASHED" bold caps + "MAGAZINE" subtitle; horizontal
  white nav links; search icon
- Editors: 4-col grid of article cards on dark #2e2e2e background
- Content sections: varied grids (3-col, 4-col, 5-col) with image thumbs
- Footer: 3-col (logo+about | Quick Links | Most Viewed News)
- Copyright bar: text left, social icons right

### Live preview DOM structure

Section order from HTML:
1. `<section class="banner-area">` — full-width hero, container-fluid,
   3-col layout (col-lg-3 | col-lg-6 owl-carousel | col-lg-3)
2. `<nav id="nav-menu-container">` — logo (figure + h1 "SMASHED" + p "MAGAZINE")
   + ul.nav-menu (Home[active], Archive, Category, Pages[dropdown], Contact)
   + search icon
3. `<section class="editors-area">` — padding 40px, bg #2e2e2e,
   4-col grid (col-lg-3 × 4) of single-post cards
4. `<section class="int-news-area section-gap-top">` — section-title + 3-col grid
5. `<section class="tech-news-area section-gap-top-60">` — section-title + 4-col grid
6. `<section class="excl-vdo-area section-gap-top-60">` — section-title + 3-col grid
7. `<section class="popular-news-area">` — section-title + 5-col grid
8. `<footer class="footer-area section-gap-top">` — 3-col:
   (logo+about | Quick Links 2-col | Most Viewed News 2 items)
9. `<div class="copyright-text">` — copyright left, social icons right

### CSS tokens extracted

- Body: `background: #252525; color: #999999; font-family: "Open Sans"`
- Headings: `font-family: "Roboto"; color: #fff; font-weight: 600`
- Primary btn: `border: 2px solid #ff1857; background: transparent; color: #fff`
- Primary btn fill: `background: #ff1857; line-height: 46px; padding: 0 38px`
- Selection: `background-color: #ff1857; color: #fff`
- Editors area: `background: #2e2e2e; padding: 40px`
- Section gap: `padding: 100px 0`
- Section gap top: `padding-top: 100px`
- Section gap top 60: `padding-top: 60px`
- Category badges: 10 colors (#ff1857, #4cd3e3, #38a4ff, #f4e700, #f44a40,
  #6382e6, #a367e7, #73fbaf, #e66686, #f09359)
- Overlay: `position: absolute; left:0; right:0; top:0; bottom:0` (dark image overlay)
- Footer copyright: `border-top: 1px solid #252525; padding: 25px 0`

## Implementation tasks

### 1. Scaffold app (copy base app, rename)
- [ ] Copy simplest existing app to `apps/crush/`
- [ ] Rename package to `@free-react-templates/crush`
- [ ] Set `public/CNAME` to `crush.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://crush.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile

### 2. Index HTML + fonts
- [ ] Add Google Fonts `<link>` for Open Sans (400, 600) + Roboto (400, 600)
- [ ] Set page title to "Crush Magazine"

### 3. Theme tokens (index.css)
- [ ] Define Tailwind `@theme` block with brand colors:
  - `--color-brand: #ff1857`
  - `--color-body-bg: #252525`
  - `--color-editors-bg: #2e2e2e`
  - `--color-text-body: #999999`
  - Category badge colors as CSS custom properties
- [ ] Set body font to Open Sans, heading font to Roboto

### 4. Components (section by section)

#### 4a. Hero Banner
- [ ] Full-width edge-to-edge layout (no container padding)
- [ ] 3-column grid: left sidebar (3 stacked cards), center carousel, right sidebar
- [ ] Left sidebar: 3 article cards with image, dark overlay, category badge, date, comment count, title, excerpt
- [ ] Center carousel: featured article with image overlay, category badge, date, large title with line break, excerpt, "Read More" fill button, carousel arrow navigation
- [ ] Right sidebar: weather widget (location, date, temperature) + "Recent Music Playlist" (3 numbered items)

#### 4b. Navbar
- [ ] Logo section: icon + "CRUSH" bold caps + "MAGAZINE" subtitle
- [ ] Horizontal nav: Home, Archive, Category, Pages (dropdown), Contact
- [ ] Active state uses brand color
- [ ] Search icon on right

#### 4c. Editors Area
- [ ] Dark #2e2e2e background, 40px padding
- [ ] 4-column grid of article cards
- [ ] Each card: image, category badge, date, comment count, title, excerpt

#### 4d. International News
- [ ] Section title heading
- [ ] 3-column grid of news articles
- [ ] Each: image, category badge, date, title

#### 4e. Tech News
- [ ] Section title heading
- [ ] 4-column grid of news articles
- [ ] Each: image, category badge, date, title

#### 4f. Exclusive Video
- [ ] Section title heading
- [ ] 3-column grid of video articles
- [ ] Each: image, category badge, date, title

#### 4g. Popular News
- [ ] Section title heading
- [ ] 5-column grid of news articles
- [ ] Each: image, category badge, date, title

#### 4h. Footer
- [ ] 3-column layout: logo+about | Quick Links (2 sub-columns) | Most Viewed News (2 items)
- [ ] Copyright bar with text left, social icons right
- [ ] Footer links to https://www.componentdock.com/

### 5. Tests (TDD)
- [ ] Write tests for each component before implementation
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Use vitest + testing library, query by role/text

### 6. Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% coverage
- [ ] Build succeeds
- [ ] `scripts/verify-app.sh crush` passes

## Fidelity notes

- The original uses Bootstrap grid — replicate with Tailwind grid/flex utilities
- The owl-carousel in the hero center section can be replicated with a simple
  React state-based carousel (no library needed)
- Category badges use distinct colors per category — assign colors deterministically
- Image overlays use absolute positioning with dark gradient
- All section gaps match the original's spacing rhythm
- Replace Linearicons + Font Awesome with lucide-react icons
- Placeholder images: `https://picsum.photos/seed/crush-<n>/<w>/<h>`
