# Template: Snaply (Bootstrap 5 / Photography Portfolio)

## Purpose

Snaply is a single-page photography-portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Photosen" website template (source:
https://colorlib.com/wp/template/photosen/), built under a DIFFERENT name
(Snaply — "snap" = take a photograph, a semantic echo of the source's
photography purpose without reusing its name; single lowercase word, no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-14) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-14): the live preview
> `https://preview.colorlib.com/theme/photosen/` is REACHABLE (curl
> verified, HTTP 200, ~9.4 KB HTML shell, page title "Photosen -
> Photography Portfolio") and was analyzed for this prep; `css/style.css`
> (~298 KB, Bootstrap 5 based) was fetched and token-extracted, and the
> computed styles were verified live in a browser (body font/bg, overlay
> heading, outline button, brand). The TEMPLATES.md screenshot
> (`photosen-free-template.jpg`, 1200×946, viewed in browser) matches the
> live DOM section-for-section (black page, white brand + nav, 3-column
> grayscale image grid, centered white overlay + ghost button on each
> card). Source card images are ~900×874 (near-square) WebP.

## Design reference (replication findings)

- **Original:** ColorLib "Photosen" — page title "Photosen - Photography
  Portfolio". TEMPLATES.md category: **Bootstrap 5 (89)**, first occurrence
  at line 618 (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP (see
  replication skill): the `photosen` slug ALSO appears at lines 2466
  (Photography 49) and 2544 (Portfolio 89) — all `- [ ]` rows of the SAME
  template; one prep + one implementation covers all three rows (mark all
  `[x]` with the same surge URL at bookkeeping). The recreation brands
  itself **Snaply** but keeps the same section structure, copy kinds and
  token palette.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/photosen/` (HTTP 200, ~9.4 KB HTML;
  `css/style.css` ~298 KB). Minimal black photography portfolio:
  1. `div.site-mobile-menu` — **off-canvas mobile menu** (width 300px,
     fixed right, `background: #fff`, `height: 100vh`, slides in from
     right `transform: translateX(110%)`, shadow `-10px 0 20px -10px
rgba(0,0,0,0.1)`, z-index 2000): header with close toggler
     (`span.icon-close2.js-menu-toggle`) + `div.site-mobile-menu-body`
     filled at runtime by JS cloning `ul.js-clone-nav`.
  2. `header.site-navbar.py-3` — **transparent top navbar** (no bg, z-index
     9, `margin-bottom: 0`): 3-col row `container-fluid > row
align-items-center`:
     - left `col-6 col-xl-2` — brand `h1.mb-0 > a.text-white.h2.mb-0`
       "Photosen" (white, 2rem);
     - center `col-10 col-md-8 d-none d-xl-block` — `nav.site-navigation`
       > `ul.site-menu.js-clone-nav.mx-auto.d-none.d-lg-block`: HOME
       > (`li.active`), GALLERY (`li.has-children` with `ul.dropdown`:
       > Nature, Portrait, People, Architecture, Animals, Sports, Travel +
       > nested Sub Menu > Menu One/Two/Three), SERVICES, ABOUT, CONTACT.
       > Link style: uppercase, `letter-spacing: 0.1em`, 12px, color
       > `rgba(255,255,255,0.5)`, padding 10px 10px; hover AND active
       > `#0d6efd` (Bootstrap primary blue);
     - right `col-6 col-xl-2 text-end` — 4 social icons (Facebook,
       Twitter, Instagram, YouTube via `icon-*` glyphs; white) on
       `d-none d-xl-inline-block` + hamburger
       `a.site-menu-toggle.js-menu-toggle` (`span.icon-menu.h3`) on
       `d-inline-block d-xl-none`.
  3. `div.container-fluid` (data-aos fade) — **gallery grid**:
     `div.row` of NINE `div.col-lg-4` cards (3 columns × 3 rows). Each
     card `div.image-wrap-2` (`display: block; overflow: hidden; position:
relative; margin-bottom: 30px`) contains:
     - `img.img-fluid` (source `images/img_1..7.webp`, ~900×874 square) —
       rendered GRAYSCALE by default (`-webkit-filter: grayscale(1)` /
       `filter: gray`);
     - `div.image-info` — absolutely centered overlay (`top: 50%; left:
50%; z-index: 2; transform: translate(-50%,-50%); text-align:
center`) with `h2.mb-3` white category title (computed 32px /
       2rem, weight 500) + `a.btn.btn-outline-white.py-2.px-4` "More
       Photos" (white 2px border, white text, uppercase, 11px,
       letter-spacing 0.1em, padding 8px 24px, radius 0px — SQUARE ghost
       button);
     - hover: `div.image-wrap-2:hover img` → `filter: none; grayscale(0);
scale(1.01)` (0.1s ease-in-out) and `div.image-wrap-2:hover:before`
       overlay `rgba(0,0,0,0.4)` (0.3s ease) over a default transparent
       `:before` (`rgba(0,0,0,0)`, z-index 1, full-bleed).
       Category titles in DOM order: **Nature, Portrait, People,
       Architecture, Animals, Sports, Travel, People, Architecture** (img_3
       and img_4 are intentionally reused for rows 2–3).
  4. `div.footer.py-4` — **footer**: `div.container-fluid.text-center` >
     `p` — `Copyright ©<year> All rights reserved | This template is made
with <i class="icon-heart-o"> by <a href="https://colorlib.com">`
     (replace Colorlib credit with the mandatory Component Dock footer
     link per monorepo policy).
- **CSS design tokens (extracted from `css/style.css` + computed live):**
  - page background: **`#000`** (black; final `body` override
    `background: #000`, `color: #777`, `font-weight: 300`, `line-height:
1.7`, `font-size: 1rem`);
  - body/paragraph color: **`#777`** (light gray on black);
  - brand + overlay headings + overlay buttons: **`#fff`**;
  - nav links: `rgba(255,255,255,0.5)`, hover/active **`#0d6efd`**
    (Bootstrap primary blue — the template's ONLY accent color);
  - fonts: `<head>` loads Google Fonts **Josefin Sans 400;700** +
    **Roboto Mono 400;700**, but `style.css` NEVER applies them — computed
    body/nav/heading font is the Bootstrap **system-ui stack**. Template
    intent (and the screenshot's serif-flavored brand) is Josefin Sans;
    recommendation: apply Josefin Sans to the brand + overlay headings
    (Google Fonts `<link>` in index.html) and keep body copy on the system
    stack, mirroring the rendered reference;
  - buttons `.btn-outline-white`: `border: 2px solid #fff`, white text,
    uppercase, 11px, `letter-spacing: 0.1em`, padding 8px 24px, **square
    (radius 0)**;
  - image hover: grayscale(1)→0 + scale(1.01); overlay
    transparent→`rgba(0,0,0,0.4)`;
  - mobile menu: white 300px right drawer, shadow
    `-10px 0 20px -10px rgba(0,0,0,0.1)`;
  - footer: py-4, centered, muted small text on black.
- **Visual design (screenshot `photosen-free-template.jpg` viewed in
  browser):** stark black page; white geometric "Photosen" brand top-left;
  small uppercase white nav links centered (HOME active in blue) + white
  social icons right; full-width 3-column grid of square GRAYSCALE photos
  with thin white gutters; each photo carries a centered white category
  label + small square ghost "MORE PHOTOS" button; footer line cut off in
  screenshot. Fully consistent with the live DOM (live nav shows SERVICES
  where the screenshot shows BLOG — follow the LIVE DOM).

## Requirements

### Requirement: Header navigation

The transparent navbar SHALL show the brand left, centered uppercase nav
links and social icons right on desktop, and SHALL collapse to a white
off-canvas drawer on mobile.

#### Scenario: Desktop navbar renders

- **GIVEN** the Snaply page is rendered on a desktop viewport
- **WHEN** the page is displayed
- **THEN** the header SHALL show the brand "Snaply" (white, 2rem) on the
  left
- **AND** the links HOME / GALLERY / SERVICES / ABOUT / CONTACT SHALL be
  centered (uppercase, 12px, letter-spacing 0.1em, color
  rgba(255,255,255,0.5))
- **AND** 4 social icons (Facebook, Twitter, Instagram, YouTube) SHALL
  render on the right

#### Scenario: Active link is highlighted

- **GIVEN** the current page is the home page
- **WHEN** the navbar is rendered
- **THEN** the HOME link SHALL render in the accent blue `#0d6efd`
- **AND** the other links SHALL stay `rgba(255,255,255,0.5)`
- **AND** hovering any link SHALL turn it `#0d6efd`

#### Scenario: Gallery dropdown

- **GIVEN** the GALLERY nav item is present
- **WHEN** it is hovered or activated
- **THEN** a dropdown SHALL reveal Nature, Portrait, People, Architecture,
  Animals, Sports, Travel
- **AND** a nested Sub Menu SHALL contain Menu One, Menu Two, Menu Three

#### Scenario: Mobile navigation

- **GIVEN** a mobile viewport
- **WHEN** the hamburger toggle is activated
- **THEN** a white off-canvas drawer SHALL slide in from the right (300px
  wide) containing the nav links and a close button
- **AND** activating the close button SHALL dismiss it

### Requirement: Gallery grid

The main content SHALL be a 3-column grid of nine square grayscale photo
cards, each with a centered white category title and a "More Photos"
ghost button.

#### Scenario: Nine category cards

- **GIVEN** the gallery section is rendered
- **WHEN** the page is displayed
- **THEN** nine cards SHALL render in DOM order with the titles Nature,
  Portrait, People, Architecture, Animals, Sports, Travel, People,
  Architecture
- **AND** each card SHALL include a "More Photos" button

#### Scenario: Cards are grayscale with hover reveal

- **GIVEN** a photo card at rest
- **WHEN** the card is hovered
- **THEN** the image SHALL switch from grayscale to full color and scale
  to 1.01
- **AND** a semi-transparent black overlay (`rgba(0,0,0,0.4)`) SHALL fade
  in behind the title and button

#### Scenario: Responsive columns

- **GIVEN** a desktop viewport
- **WHEN** the grid is displayed
- **THEN** the cards SHALL lay out in 3 columns
- **AND** on tablet the cards SHALL show 2 columns
- **AND** on mobile the cards SHALL show 1 column (Bootstrap `col-lg-4`
  behavior)

### Requirement: Footer

The footer SHALL be a centered single line on black with the copyright, a
heart icon and the mandatory Component Dock credit link.

#### Scenario: Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the page is displayed
- **THEN** the copyright line SHALL render with a heart icon and a link to
  `https://www.componentdock.com/`
- **AND** the link SHALL have `href` `https://www.componentdock.com/` (the
  ColorLib credit is replaced per monorepo policy)

### Requirement: Responsive layout

The page SHALL stay usable across viewports: the navbar SHALL collapse to
the drawer and the gallery grid SHALL reflow from 3 → 2 → 1 columns.

#### Scenario: Stacked layout

- **GIVEN** a mobile viewport
- **WHEN** the page is displayed
- **THEN** the gallery cards SHALL stack vertically in one column with
  `margin-bottom: 30px` spacing
- **AND** no horizontal scroll SHALL occur

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-snaply`
- [ ] `scripts/verify-app.sh snaply` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent navbar
      (SNAPLY brand white 2rem · HOME active blue / GALLERY dropdown /
      SERVICES / ABOUT / CONTACT uppercase 12px tracking · 4 white social
      icons + mobile hamburger) → gallery grid (9 square grayscale photo
      cards in 3 columns, centered white category title + square ghost
      "More Photos" button, hover → color + scale 1.01 + `rgba(0,0,0,0.4)`
      overlay) → footer (centered "Copyright ©<year> ... made with ♥ by
      Component Dock" link)
- [ ] Brand tokens in `@theme`: `#000` page background, `#777` body text,
      `#fff` brand/overlay text, `#0d6efd` accent (nav hover/active) — all
      via Tailwind classes
- [ ] Fonts: Josefin Sans (400,700) via Google Fonts `<link>` in
      `index.html` applied to the brand + overlay headings (template
      intent); body copy on the system-ui stack (matches the rendered
      reference — the template loads Josefin Sans but never wires it in
      its own CSS)
- [ ] Buttons: square (radius 0), `border-2 border-white text-white
    uppercase text-[11px] tracking-[0.1em] px-4 py-2`
- [ ] Images grayscale at rest (`grayscale` Tailwind filter or equivalent
      CSS), color + `scale-[1.01]` on hover with the `rgba(0,0,0,0.4)`
      overlay transition
- [ ] Placeholder images via `picsum.photos/seed/snaply-<n>/800/800`
      (near-square, matching source ~900×874), icons from lucide-react
      (plus inline SVG brand icons for socials — lucide dropped brand
      icons), no copied assets
- [ ] Brand renamed "Photosen"/"Colorlib" → "Snaply" everywhere; footer
      MUST link `https://www.componentdock.com/`; gallery card buttons
      dead-end without navigation (single-page recreation)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL THREE `- [ ]` rows
      (line 618 Bootstrap 5, line 2466 Photography, line 2544 Portfolio)
      `[x]` with the same surge URL + `npm run readme:status`
