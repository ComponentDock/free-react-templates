# Melody (ColorLib Music) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-melody`. Recreation name: **Melody** (NEW name —
> the ColorLib source keeps its name "Music").

## Source mapping

- **ColorLib item:** "Music" (TEMPLATES.md line 1480; section "## Music (19)" at line 2261).
- **Source URL:** https://colorlib.com/wp/template/music/
- **Preview URL — REACHABLE (verified 2026-09-18):** `https://preview.colorlib.com/theme/music/`
  (HTTP 200, 24,529 bytes, full HTML page).
- **Preview CSS:** `styles/main_styles.css` (32,427 bytes, hand-written, NO Bootstrap JS —
  Bootstrap 4.1.2 CSS only + Font Awesome 4.7.0 + OwlCarousel 2.3.4 + jPlayer).
  Fonts: Google Fonts `Josefin Sans` (loaded via `<link>` in HTML).
- **Icons:** Font Awesome 4.7.0 (REPLACE with lucide-react, do not ship FA).

## Reference research (done — do not redo)

### Screenshot (AVIF, `music-free-fullscreen-musician-website-template.jpg`)

Could not be viewed locally (AVIF format not supported by vision tools).
Fallback: analyzed live preview DOM + CSS for all visual design details.

### Live preview DOM analysis (fetched 2026-09-18)

Full HTML structure extracted from `https://preview.colorlib.com/theme/music/`.
Section order confirmed: Header → Home (slider) → Song → Tours → App → Featured → News → Newsletter → Footer.

**Key structural observations:**
- Header: flex row, logo (5 vertical bars + "music" text) + nav + login/register
- Hero: owl-carousel with 3 slides, each has background-image, centered title,
  ticket search form (dropdown + input + button)
- Song: parallax background, audio player (jPlayer), progress bar, volume controls
- Tours: 2-column (list left, promo card right), 4 tour entries
- App: 2-column (image left, text right), App Store + Google Play buttons
- Featured: centered title, jPlayer playlist grid
- News: 3-column grid, alternating image top/bottom per card
- Newsletter: 2-column (text left, form right), email input + subscribe button
- Footer: background image, centered logo, social icons, copyright bar

### CSS token extraction (from `main_styles.css`)

All design tokens documented in `spec.md` above. Key findings:
- **Font:** `Josefin Sans` only (no fallback to other families in headings)
- **Primary brand:** `#2ac275` (green) — buttons, player bar, active states
- **Header gradient:** `linear-gradient(to right, #2457d7, #3b125d)` (blue→purple)
- **Button gradient:** `linear-gradient(to right, #2ac275, #cbdc0b, #2ac275)` (green→yellow→green)
- **Pill buttons:** `border-radius: 22px`
- **Cards:** `border-radius: 15px`
- **Social icons:** `border-radius: 50%` (circular)
- **Overlay:** `rgba(0,0,0,0.66)` on hero images

## Implementation tasks (outline for implementer)

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g., `apps/sonority`)
- [ ] Rename package to `@free-react-templates/melody`
- [ ] Update `public/CNAME` to `melody.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://melody.free.componentdock.com`
- [ ] Update `index.html` title to "Melody"
- [ ] Add Google Fonts link for Josefin Sans in `index.html`
- [ ] Set up Tailwind theme tokens in `index.css` (`@theme` block):
  - `--color-brand: #2ac275`
  - `--color-dark-purple: #3b125d`
  - `--color-deep-blue: #2457d7`
  - `--color-yellow: #eeff2d`
  - `--color-lime: #cbdc0b`
  - `--color-magenta: #e830fe`
  - `--color-coral: #ffa07f`
  - `--color-section-bg: #eef2f6`

### Phase 2: Section components (in page order)
- [ ] **Navbar.tsx** — header with logo (5 bars + text), nav links, login/register
- [ ] **HeroSlider.tsx** — fullscreen slider with background images, dark overlay,
  "your music." headline, ticket search form (event dropdown + tickets input + search button)
- [ ] **SongPlayer.tsx** — parallax section with audio player controls, album art,
  progress bar, artist name, volume controls (static mock player — no real audio needed)
- [ ] **TourDates.tsx** — two-column: tour date list (date/venue/location/button per row)
  + promotional "world tour" card with background image
- [ ] **AppDownload.tsx** — two-column: device image + "Get Your Music Right Now!"
  title, description, App Store + Google Play buttons
- [ ] **FeaturedAlbums.tsx** — centered section with album grid/cards
- [ ] **LatestNews.tsx** — 3-column card grid with alternating image positions,
  date/title/text per card
- [ ] **Newsletter.tsx** — two-column: "Subscribe & Follow" title + text + email form
- [ ] **Footer.tsx** — dark background, centered logo, social icon row, copyright bar
  with Component Dock link

### Phase 3: App composition
- [ ] **App.tsx** — compose all sections in order
- [ ] **main.tsx** — standard entry point

### Phase 4: Styling details
- [ ] Pill buttons with gradient: `rounded-full` + green gradient background
- [ ] Hero overlay: `bg-black/66` or equivalent
- [ ] Parallax effect on Song section (CSS `background-attachment: fixed` or library)
- [ ] Header scroll state: transparent → solid purple, green underline on active nav
- [ ] Responsive: hamburger menu on mobile, stacked columns

### Phase 5: Tests (TDD)
- [ ] Write tests for each component before implementation
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Run `npm run test:coverage` and verify

### Phase 6: Verification
- [ ] Run `scripts/verify-app.sh melody`
- [ ] Visual comparison with preview screenshot
- [ ] Commit as `feat: add melody template (ColorLib Music recreation)`
- [ ] Open PR, merge, deploy

## Design notes

### Section-by-section fidelity notes

1. **Header**: Must have the distinctive 5-bar logo graphic (vertical bars of
   different heights). Nav links are simple text. On scroll, header gets solid
   purple background and active link gets green underline.

2. **Hero Slider**: Full viewport height. Background images with dark overlay.
   Large centered "your music." with "music." in green. Ticket form has a
   custom dropdown (not native select) for Event + text input + button.
   Social sidebar is vertical with "follow" label.

3. **Song Player**: Parallax background (use `background-attachment: fixed`).
   Player is a horizontal layout with album art on right, controls on left.
   Mock the player (no real audio) but show all UI elements.

4. **Tour Dates**: List items are flex rows with info left, button right.
   Promotional card has its own background image with overlay.

5. **Featured Albums**: Simple centered grid of album cards/thumbnails.

6. **News**: 3 cards in a row. First and third have image on top, second has
   image on bottom (use `order` classes for the swap).

7. **Newsletter**: Green pill subscribe button with gradient.

8. **Footer**: Background image with overlay. Logo + social icons centered.
   Copyright bar at the very bottom.
