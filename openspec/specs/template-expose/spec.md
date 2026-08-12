# Template: Expose (Photography Portfolio Template)

## Purpose

Expose is a single-page photographer-portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Shutter" design (see TEMPLATES.md — line 494; the same source is
DUPLICATED at lines 1806 and 2472 — ALL THREE rows must be marked `[x]` when
done), built under a NEW name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a dark, minimalist photography portfolio: a **fixed black
right sidebar** (250px, full height) holding the white uppercase "SHUTTER"
logo, a vertical uppercase nav (Home / Photos / Bio / Blog / Contact, Home
active), and faint white social icons at the bottom; beside it, a **masonry
photo grid** of 19 images (mixed `col-lg-3/4/6/8` spans) on a black
background, each card showing a centered "Photos Title Here" + "42 Photos"
overlay on hover (dark `rgba(0,0,0,0.6)` veil); and a centered copyright
row as the footer. The brand accent is **coral `#ef6c57`** (the active nav
link) on a **black `#000000`** background with white uppercase text, the
**Quicksand** font family, and a clean editorial photography aesthetic.
Expose recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Shutter" — `https://colorlib.com/wp/template/shutter/`
  (Photography Portfolio Template). TEMPLATES.md has **THREE copies** of this
  item (lines 494, 1806, 2472 — all `- [ ]`); mark ALL THREE `[x]` when done.
  None is shipped yet and no other spec targets this source (verified: no
  spec folder references `wp/template/shutter/`).
- **Preview URL:** `https://preview.colorlib.com/theme/shutter/` — **HTTP
  200** (15.3 KB), fully reachable; structure + tokens below are from this
  live DOM and its `css/style.css` (201 KB: customized bootstrap + custom
  rules). Font **Quicksand** (300/400/500/700) loaded via Google Fonts
  `<link>` in the head — recreate with a Google Fonts `<link>` in
  `index.html`. Screenshot used to confirm the visual design (see below).
- **Screenshot:** `shutter-free-template.jpg` (1200×946, verified via
  browser vision): split-screen dark layout — right ~25% black sidebar with
  white uppercase "SHUTTER" logo, rust-orange/coral nav links (HOME, PHOTOS,
  BIO, BLOG, CONTACT), faint white social icons near the bottom; left ~75%
  masonry photo grid on black: surfer on a turquoise wave, figure on a red
  rock arch, portrait of a smiling dark-haired woman, yellow-green moss
  texture, two women smiling, B&W close-up of a smiling mouth, blonde woman
  portrait, glass building corner, blue water/sky abstract, Brooklyn-bridge
  cityscape. Minimalist, professional, lets the photography dominate.
- **Section structure (from the live DOM, in order):**
  1. `header.header-bar` — **fixed right sidebar**: `float: right; width:
250px; height: 100vh; min-height: 400px; overflow: auto; background:
#000; padding: 30px; text-align: right; position: fixed; right: 0; top:
0` (mobile `≤767.98px`: width 100%, height 70px, relative, logo
     left + toggle right):
     - `div.site-logo` — `a` "Shutter" (recreate as "Expose"), 20px, `#fff`,
       uppercase, bold; `margin-bottom: 30px` (0 on mobile).
     - mobile-only toggle — `a.site-menu-toggle.js-menu-toggle.text-white`
       (icomoon `icon-menu`, `d-inline-block d-xl-none`).
     - `div.main-menu` — two `ul.js-clone-nav`:
       - nav list: **Home** (`.active`), **Photos**, **Bio**, **Blog**,
         **Contact** — `li` margin-bottom 5px, `a` display block, padding
         4px 0, `#fff`, uppercase, `.8rem`; `.active a` → `#ef6c57`.
       - `ul.social.js-clone-nav` — inline `li`, `a` padding 10px, icon-only
         spans: `icon-facebook`, `icon-twitter`, `icon-instagram`,
         `icon-500px`, `icon-flickr` (icomoon; recreation: lucide
         `facebook`/`twitter`/`instagram` + camera-ish icons for 500px/flickr,
         or drop the last two — see tasks).
  2. `main.main-content` — `float: left; width: calc(100% - 250px)` (mobile:
     100%):
     - `div.container-fluid.photos` (`padding: 0 15px`) > `div.row
align-items-stretch`: **19 photo cards**, each
       `div.col-6.col-md-6.col-lg-{3|4|6|8}` with `data-aos="fade-up"`
       (0/100/200ms delays) containing `a.d-block.photo-item`
       (`href="single.html"`): `<picture>` with webp source + `img.img-fluid`
       (`width: 100%; object-fit: cover; height: 320px; margin-bottom:
1.5rem` — 200px mobile) + nested `div.photo-text-more` (centered
       overlay: absolute, 50%/50%, translate(-50%,-50%), `margin-top: 30px`,
       opacity 0, hidden, `text-align: center`, z-index 3): `h3.heading`
       "Photos Title Here" (16px `#fff`, margin-bottom 0) + `span.meta`
       "42 Photos" (`#cccccc`, uppercase, 12px). **Hover:** `:after`
       overlay `rgba(0,0,0,0.6)` + text moves up (`margin-top: 0`) and
       fades in (`.3s all ease`).
     - Column span sequence (lg, 19 items): 8, 4, 3, 6, 3, 6, 6, 4, 4, 4, 3,
       6, 3, 8, 4, 6, 6, 4, 8. Images cycle `img_1.jpg`…`img_10.jpg`, then
       repeat `img_1`…`img_9` (see tasks for the picsum seed mapping).
  3. Footer (no `<footer>` element — a plain row inside `main`):
     `div.row.justify-content-center` > `div.col-md-12.text-center.py-5`:
     `p` "Copyright © <year> All rights reserved | This template is made
     with ❤ by Colorlib" → recreation credit line.
- **Behavior notes:** all 19 photo cards link to `single.html` (per-photo
  page in the original multi-page template) — the recreation is a single
  page, so cards may be non-navigating (anchor `#` / no-op click) or open
  nothing; the grid is static (no load-more / pagination). The mobile menu
  is a **white 300px slide-in panel from the right** (`site-mobile-menu`:
  `position: fixed; right: 0; z-index: 2000; height: 100vh; transform:
translateX(110%) → 0; box-shadow -10px 0 20px -10px rgba(0,0,0,0.1)`)
  with a close button in its header and the same nav links (top-level 20px
  `#212529`, active/hover `#ef6c57`) + social icons. The desktop sidebar is
  NOT a slide-in — it is always visible. Active nav item = Home. Social
  links point to `#` (no real profiles). There are **no buttons, no hero
  copy, no forms** on this page — it is purely nav + photo grid + credit
  line.

## Design tokens (extracted from `css/style.css`)

- Page + sidebar background: **#000000** (black; `body { background: #000 }`,
  `.header-bar { background: #000 }`).
- Brand accent: **#ef6c57** (coral/salmon; the only template-specific use on
  this page is `.header-bar ul li.active a` — the active nav link; also the
  hover/active color in the mobile slide-in menu).
- Text: logo + nav links **#ffffff** (uppercase); overlay heading `#fff`;
  overlay meta **#cccccc** (uppercase 12px); mobile-menu links `#212529`;
  body text "gray" (bootstrap gray, weight 400, line-height 1.7).
- Font: **"Quicksand", sans-serif** (Google Fonts, weights 300/400/500/700
  in the original head). Recreation: Google Fonts `<link>` in `index.html`.
- Header sidebar (`.header-bar`): fixed right, `width: 250px`, `height:
100vh`, `min-height: 400px`, `background: #000`, `padding: 30px`,
  `text-align: right`; mobile (`max-width: 767.98px`): `width: 100%`,
  `height: 70px !important`, `position: relative`, logo `margin-right: auto;
margin-bottom: 0`, nav hidden (`display: none`) in favor of the slide-in
  panel.
- Logo (`.header-bar .site-logo a`): 20px, `#fff`, uppercase, bold,
  `margin-bottom: 30px` (0 mobile).
- Nav (`.header-bar ul li a`): display block, `padding: 4px 0` (4px 10px
  mobile), `#fff`, uppercase, `.8rem`; `li` margin-bottom 5px; `.active a`
  `#ef6c57`. Social (`ul.social li`): inline, `a` padding 10px (last-child
  padding-right 0).
- Main content: `float: left; width: calc(100% - 250px)`; container
  `padding: 0 15px`; bootstrap row gutter 1.5rem; `align-items-stretch`.
- Photo card (`.photos .photo-item`): `position: relative`; `img` width
  100%, `object-fit: cover`, `height: 320px` (200px mobile), `margin-bottom:
1.5rem`; hover `:after` overlay `background: rgba(0,0,0,0.6)`, z-index 1,
  opacity/visibility transition `.3s all ease`; `.photo-text-more` absolute
  center (50%/50%, translate(-50%,-50%)), `margin-top: 30px` → 0 on hover,
  opacity 0 → 1, `text-align: center`, z-index 3; `.heading` 16px `#fff`;
  `.meta` `#cccccc` uppercase 12px.
- Mobile menu (`.site-mobile-menu`): white `#fff` panel, width 300px, fixed
  right, `height: 100vh`, `padding-top: 20px`, `transform: translateX(110%)`
  → `translateX(0)` when open, shadow `-10px 0 20px -10px rgba(0,0,0,0.1)`;
  header has logo + close (30px `span`); body scrolls, nav links 20px
  `#212529` (hover/active `#ef6c57`), social list at the bottom.
- Footer: plain centered text row (`text-center`, `py-5`), no columns, no
  links except the credit link.
- Section rhythm: photos grid `row` has `align-items-stretch`; cards stack
  with `margin-bottom: 1.5rem` on images (no extra section padding beyond
  the container's 15px).
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/expose-<n>/<w>/<h>` (deterministic per
  template; 19 cards → seeds expose-1..expose-19). **Picsum seeds are
  arbitrary — verify the seeds render photographic subjects (landscape,
  portrait, texture, architecture) before shipping and pin verified seeds
  (see `docs/templates/expose/tasks.md`).** Icons from `lucide-react`
  (menu, x, facebook, twitter, instagram; 500px/flickr → approximate with
  `camera`/`share-2` or omit); no ColorLib assets.

## Requirements

### Requirement: Right sidebar header

The system SHALL render the fixed black right sidebar with logo, nav and
social icons.

#### Scenario: Desktop sidebar renders

- **GIVEN** the Expose app is rendered at a desktop viewport
- **WHEN** the page is displayed
- **THEN** a fixed black `#000` sidebar SHALL render on the right side,
  250px wide and full viewport height, with the logo "Expose" in white
  uppercase bold 20px at the top
- **AND** the nav SHALL list Home, Photos, Bio, Blog and Contact as white
  uppercase `.8rem` links, with Home marked active in coral `#ef6c57`
- **AND** five social icons SHALL render at the bottom of the sidebar

### Requirement: Mobile header and slide-in menu

The system SHALL collapse the sidebar to a 70px top bar on mobile and open
the menu from a slide-in panel.

#### Scenario: Mobile menu opens

- **GIVEN** the Expose app is rendered at a mobile viewport
- **WHEN** the page is displayed
- **THEN** the header SHALL render as a full-width 70px black top bar with
  the logo on the left and a hamburger toggle on the right
- **AND** activating the toggle SHALL open a white 300px panel sliding in
  from the right with the same nav links and social icons
- **AND** the toggle SHALL expose `aria-expanded` and the menu SHALL be
  keyboard-operable (close via toggle / Escape)

### Requirement: Photo grid

The system SHALL render the masonry photo grid with hover overlays.

#### Scenario: Grid renders

- **GIVEN** the Expose app is rendered
- **WHEN** the photos section is displayed
- **THEN** 19 photo cards SHALL render in a masonry-style grid with mixed
  column spans (3, 4, 6 and 8 of 12 columns on desktop, half-width on
  mobile), each with a cover-cropped image (picsum seed expose-1..19)
- **AND** each card SHALL show a centered overlay with the heading "Photos
  Title Here" and the uppercase meta "42 Photos"

#### Scenario: Hover reveals overlay

- **GIVEN** a photo card is displayed
- **WHEN** the pointer hovers over the card
- **THEN** a `rgba(0,0,0,0.6)` veil SHALL fade in over the image
- **AND** the centered "Photos Title Here" / "42 Photos" overlay SHALL fade
  in and settle into place

### Requirement: Footer credit

The system SHALL render the centered copyright row.

#### Scenario: Footer renders

- **GIVEN** the Expose app is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** a centered copyright line SHALL render: "Copyright © <year> All
  rights reserved" with the recreation credit line

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Expose app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: sidebar header → photo grid →
  footer credit row
- **AND** the document title SHALL be "Expose — Photography Portfolio"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- expose` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: fixed black right sidebar (250px,
      logo / 5-link nav / social icons), masonry photo grid of 19 cards
      with the exact column-span sequence (8,4,3,6,3,6,6,4,4,4,3,6,3,8,4,6,
      6,4,8), centered hover overlays, plain centered footer credit (4
      sections in the order above).
- [ ] Design tokens applied: page + sidebar `#000`, accent `#ef6c57`
      (active nav link), white uppercase logo/nav text, Quicksand font
      (300/400/500/700), overlay meta `#cccccc` uppercase 12px, hover veil
      `rgba(0,0,0,0.6)`.
- [ ] Mobile: 70px top bar with logo + hamburger; white 300px right slide-in
      menu (same links + social), `aria-expanded` on the toggle,
      keyboard-operable (Escape closes).
- [ ] All 19 images are picsum-seeded placeholders (no ColorLib assets) and
      the seeds were verified to render photographic subjects; icons from
      lucide-react / inline SVG.
- [ ] PR description records source (ColorLib Shutter), preview URL
      (HTTP 200), tokens, and renames; TEMPLATES.md marks ALL THREE copies
      (lines 494, 1806, 2472) `[x]` when done.
