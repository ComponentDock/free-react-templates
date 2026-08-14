# Template: Rangefinder (Photography portfolio)

> **SUPERSEDED** — ColorLib "Photographer" shipped as **Photofolio** (PR #420,
> live at https://photofolio.free.componentdock.com). Do NOT implement this
> spec — delete on next cleanup.

## Purpose

Rangefinder is a single-page photography-portfolio template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Photographer" design (see TEMPLATES.md — Photographer category,
line 475; the `photographer` slug appears in FOUR `- [ ]` rows: lines 475,
1134, 1804 and 2462 — all four must be marked `[x]` on shipping), built under
a NEW name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a light, clean, minimalist one-pager: a transparent header
(logo + desktop nav with a Portfolio dropdown + hamburger/search controls), a
hero of **three horizontally auto-scrolling photo strips** (7 tiles each, 21
photos total) with a hover overlay ("Take a look at my Portfolio"), a vertical
white social rail pinned bottom-right of the hero, a two-column intro (biography
headline + copy on the left; three dark progress bars with percentage badges —
Nature 75 / Passion 100 / Portraits 90 — on the right), and a dark footer with
social icons + copyright. A fullscreen search modal (open via the header search
button) completes the page. The design is monochrome ink-on-white (no brand
accent color); photography carries all the color.

## Design reference (replication findings)

- **Original:** ColorLib "Photographer" —
  `https://colorlib.com/wp/template/photographer/` (Photographer category,
  TEMPLATES.md line 475). Duplicate rows: 1134, 1804, 2462.
- **Preview URL analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/photographer/` (HTTP 200, 20.1 KB HTML,
  `<title>Photographer | HTML Template</title>`).
- **Screenshot analyzed (browser-verified 2026-08-14):**
  `https://colorlib.com/wp/wp-content/uploads/sites/2/photographer-free-template.jpg`
  (1200×946) — light clean minimalist portfolio: white page, dark text, upper
  half dominated by a 3-row photo grid, vertical social icon rail on the right
  edge, two-column intro with dark progress bars ("Nature" 75%, "Passion"
  100%). Matches the live DOM 1:1.
- **Stylesheet analyzed:** `https://preview.colorlib.com/theme/photographer/css/style.css`
  (18.6 KB — the token source). Vendor sheets (bootstrap.min,
  font-awesome.min, owl.carousel.min, slicknav.min, magnific-popup) are NOT
  copied.
- **Font:** **"Poppins"** (weights 300–600 observed in the inline cf-fonts
  `@font-face` blocks) — recreate with a Google Fonts `<link>` in
  `index.html` (Poppins 300/400/500/600).
- **Structure (from the live DOM, in order):**
  1. `header.header-section` — `a.site-logo` (logo image; recreate as a text
     wordmark) + `div.header-controls` (hamburger `nav-switch-btn` + `search-btn`
     icon buttons) + `ul.main-menu`: **Home**, **About the Artist**,
     **Portfolio** (dropdown: Portfolio 1 / Portfolio 2 / Portfolio 3),
     **Blog**, **Elements**, **Contact**. Nav links: 13px, weight 600,
     uppercase, `#121212`, `margin-right 45px`. Dropdown: white bg, shadow
     `0 15px 50px 1px rgba(0,0,0,0.13)`, slide-down on hover.
  2. `div.hero-section` — **three** `div.hero-slider.owl-carousel` strips × 7
     `div.hero-item` photo tiles (21 total; `height: 278px`; images
     `img/portfolio/1.jpg`…`21.jpg`). Each tile wraps an `a.hero-link` overlay:
     bg `#060606`, `opacity 0 → 1` on hover, centered white `h2` **"Take a
     look at my Portfolio"** that slides up from `top: 50px`. The three
     carousels auto-scroll horizontally (owl autoplay). Pinned to the hero's
     bottom-right: `div.hero-social-links` — white vertical panel, width
     110px, `padding: 40px 0`, five stacked social links (pinterest,
     facebook, twitter, dribbble, behance), `#121212` icons, `padding: 16px 0`.
  3. `section.intro-section` (`padding: 120px 15px 90px`; `.intro-warp`
     max-width 1780px) — two columns:
     - Left (`col-xl-6`): `h2` **"My name is Sam. I'm a photographer"**
       (48px), lorem `p` (16px, `#7d7d7d`, line-height 1.8, margin-bottom
       45px), `a.sp-link` **"Take a look @my portfolio"** — 16px, weight 500,
       `#212121`, `border-bottom: 3px solid #212121`, `padding-right: 15px`.
     - Right (`col-xl-6`, `.skill-warp` with `padding-left: 83px;
padding-top: 80px`): three `.single-progress-item` (margin-bottom
       30px), each a 6px-tall bar (`.progress-bar-style`, fill `.bar-inner`
       bg `#212121`, width from `data-progress` = **75 / 100 / 90**) with a
       floating 54×40px black badge (white text, the percentage) at the
       fill's right end (`top: 22px` above the bar) + label `p` below
       (`padding-top: 28px`): **Nature**, **Passion**, **Portraits**.
  4. `footer.footer-section` — bg `#212121`, `padding: 19px 40px`; right:
     `.footer-social-links` (white icons, 17px, `margin-left: 40px`);
     left: `.copyright` (white, 11px, weight 500): "Copyright © {year} All
     rights reserved | This template is made with ♥ by Colorlib" → in the
     recreation the credit becomes Component Dock
     (`https://www.componentdock.com/`).
  5. `div.search-model` — fullscreen overlay; close `+` (`.search-close-switch`)
     - `form.search-model-form` > input placeholder **"Search here....."**.
- **Behavior notes:** the three hero strips are owl-carousel autoplay sliders
  (horizontal auto-scroll; pause on hover); tile hover fades in the dark
  overlay and slides the heading up. The Portfolio menu item opens a hover
  dropdown (3 links). The search button opens the fullscreen search modal
  (close via `+`). On mobile the menu collapses behind the hamburger
  (slicknav). Recreation: three CSS-keyframe auto-scrolling strips (pause on
  hover) with the same overlay interaction; hover dropdown; modal open/close
  via React state; hamburger-driven mobile menu.

## Design tokens (extracted from the live `css/style.css` + computed styles)

- Page: white background; `font-family: "Poppins", sans-serif`.
- Font: **"Poppins"** (300/400/500/600) via Google Fonts `<link>`.
- Ink / near-black: **#212121** — headings (`h1–h6` color, weight 500),
  `.sp-link` text + 3px bottom border, progress-bar fill + badge, footer
  background.
- Nav link color: **#121212** (uppercase, 13px, weight 600).
- Hero overlay: **#060606** (hover overlay over each photo tile).
- Body copy: **#7d7d7d** (16px, line-height 1.8).
- Secondary grays observed: **#323232** (hover states), **#bcbcbc** /
  **#b2b2b2** / **#999** / **#888888** (muted text), **#e8e8e8** (header
  bottom border `1px solid`), **#f3f3f3**.
- White: **#fff** — page background, submenu background, hero social rail
  background, footer text/icons.
- Typography scale: `h1` 70px, `h2` 36px (intro `h2` overridden to 48px),
  `h3` 30px, `p` 16px.
- Button shapes: **no rounded buttons anywhere** — sharp corners throughout.
  The primary CTA is a text link with a 3px bottom border (`.sp-link`).
  Header control buttons are borderless transparent icon buttons.
- Section rhythm: intro `padding: 120px 15px 90px`; skill column
  `padding-left: 83px; padding-top: 80px`; progress item gap 30px; label
  `padding-top: 28px`; footer `padding: 19px 40px`.
- Hero: tile height **278px**; overlay bg `#060606`; heading white, line-height
  1.5; social rail width 110px, `padding: 40px 0`, links `padding: 16px 0`.
- The `#f44336` / `#673ab7` colors in the stylesheet belong to the page
  PRELOADER spinner animation only — NOT brand colors; do not use them in the
  page design (a preloader is optional).

## Requirements

### Requirement: Header navigation

The system SHALL render the photographer's header: logo wordmark on the left,
desktop nav with six links (one with a hover dropdown), and hamburger + search
icon controls on the right.

#### Scenario: Desktop nav renders

- **GIVEN** the Rangefinder page is rendered at desktop width
- **WHEN** the header is displayed
- **THEN** the header SHALL show the site name "Rangefinder" on the left
- **AND** the nav SHALL list Home, About the Artist, Portfolio, Blog,
  Elements and Contact as uppercase 13px links in near-black `#121212`
- **AND** the Portfolio item SHALL open a white dropdown with three links
  (Portfolio 1, Portfolio 2, Portfolio 3) on hover

#### Scenario: Header controls

- **GIVEN** the header is displayed
- **WHEN** the user looks at the right side of the header
- **THEN** a hamburger (mobile menu) button and a search button SHALL render

### Requirement: Hero photo strips

The system SHALL render a hero of three horizontally scrolling photo strips
(21 tiles total) with a hover overlay on every tile.

#### Scenario: Three strips of photo tiles

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** three horizontal photo strips SHALL render, each containing seven
  photo tiles (21 tiles total) at 278px height
- **AND** each tile SHALL be a link to the portfolio

#### Scenario: Hover overlay

- **GIVEN** a photo tile is displayed
- **WHEN** the user hovers over the tile
- **THEN** a dark `#060606` overlay SHALL fade in over the photo
- **AND** the white heading "Take a look at my Portfolio" SHALL slide up into
  view centered on the tile

#### Scenario: Auto-scrolling strips

- **GIVEN** the hero is displayed
- **WHEN** the page is idle
- **THEN** the three strips SHALL scroll horizontally (CSS marquee/keyframes;
  paused on hover)

#### Scenario: Hero social rail

- **GIVEN** the hero is displayed
- **WHEN** the hero section renders
- **THEN** a white vertical social panel SHALL be pinned to the hero's
  bottom-right corner
- **AND** it SHALL list five stacked social links (Pinterest, Facebook,
  Twitter, Dribbble, Behance) as inline SVG brand icons in `#121212`

### Requirement: Intro section

The system SHALL render the two-column intro: biography text + portfolio link
on the left, three labeled progress bars on the right.

#### Scenario: Biography column

- **GIVEN** the intro section is displayed
- **WHEN** the left column renders
- **THEN** it SHALL show the 48px heading "My name is Sam. I'm a photographer"
- **AND** a paragraph of body copy (16px, `#7d7d7d`, line-height 1.8)
- **AND** a portfolio link styled as text with a 3px bottom border reading
  "Take a look @my portfolio" (`#212121`)

#### Scenario: Progress bars

- **GIVEN** the intro section is displayed
- **WHEN** the right column renders
- **THEN** three progress items SHALL render labeled Nature, Passion and
  Portraits (label below the bar)
- **AND** each item SHALL show a 6px-tall bar with a `#212121` fill at its
  percentage width (75%, 100%, 90%)
- **AND** each item SHALL show a small black percentage badge (75, 100, 90)
  with white text floating above the fill's right end

### Requirement: Search modal

The system SHALL open a fullscreen search overlay from the header search
button, closable via a `+` button or Escape.

#### Scenario: Open and close search

- **GIVEN** the header search button is displayed
- **WHEN** the user activates it
- **THEN** a fullscreen overlay SHALL open containing a text input with
  placeholder "Search here....." and a `+` close control
- **WHEN** the user activates the `+` control (or presses Escape)
- **THEN** the overlay SHALL close

### Requirement: Footer

The system SHALL render the dark footer with social icons on the right and the
copyright/credit line on the left.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a dark `#212121` bar with the social icon links
  (white, right-aligned) on the right
- **AND** a white 11px copyright line on the left reading
  "Copyright © {currentYear} All rights reserved" with a
  "Made with ♥ by **Component Dock**" credit linking to
  `https://www.componentdock.com/`

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Rangefinder app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, the Hero,
  Intro and Search sections in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Rangefinder — Photography Portfolio"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- rangefinder` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: transparent header (logo + 6 nav links + Portfolio hover dropdown + hamburger/search), 3 auto-scrolling photo
      strips × 7 tiles (278px), hover overlay (`#060606` + white centered
      heading sliding up), white vertical social rail bottom-right of hero,
      two-column intro (48px heading + body + bordered portfolio link | 3
      progress bars with black % badges), dark footer.
- [ ] Design tokens applied: Poppins (300/400/500/600) via Google Fonts
      `<link>`, ink `#212121`, nav `#121212`, overlay `#060606`, body
      `#7d7d7d`, border `#e8e8e8`, sharp corners (no radii), 3px bordered
      text-link CTA, footer bg `#212121`.
- [ ] Behavior: strips auto-scroll and pause on hover; overlay slides heading
      up; Portfolio dropdown opens on hover; search modal opens/closes
      (`+` / Escape); mobile hamburger menu works.
- [ ] Progress bars honor their percentages (75/100/90) with matching badges.
- [ ] No ColorLib references in any app file; footer links
      `https://www.componentdock.com/`.
- [ ] TEMPLATES.md rows 475, 1134, 1804 and 2462 ("Photographer") all marked
      `[x]` with the surge URL after shipping.
