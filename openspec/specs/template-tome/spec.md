# Template: Tome (Blog Template)

## Purpose

Tome is a single-page fashion/lifestyle blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Libro" website template design
(source: https://colorlib.com/wp/template/libro/), built under a DIFFERENT
name (Tome — a book, matching the source's "libro" = book in Spanish/Italian)
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Libro" — editorial fashion/lifestyle blog template.
  TEMPLATES.md has ONE copy of this item (line 268, Blog category).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/libro/`
  (HTTP 200, 23.4 KB HTML; page title "Libro - Free Bootstrap 4 Template by
  Colorlib"). Master stylesheet `css/style.css` (~58 KB, fully extracted for
  tokens); libs: bootstrap, owl.carousel (hero slider), animate, aos,
  magnific-popup, ionicons/icomoon/flaticon icons. Cross-checked against the
  TEMPLATES.md screenshot (`libro-free-template.jpg`, 1200×946, viewed in
  browser) — all match. The demo brands itself "Libro"; the recreation uses
  the NEW name **Tome** (brand pink #ee76ad).
- **Visual design (from DOM + CSS tokens + screenshot):** minimalist
  editorial split-screen magazine layout. Left ~40–50% of the viewport is a
  FIXED full-height hero image carousel (2 slides: fashion model against
  bright yellow wall, etc.) with a dark overlay; the hero shows the small
  uppercase category tag ("FASHION", 1px white border) and a large white
  serif headline ("Popular Lifestyle with Fashion & Modeling") aligned to the
  bottom, plus carousel dots. Right ~50–60% is a WHITE scrolling content
  column ("page-container") with a 2-column grid of 8 blog entries — photo
  (zooms on hover), pink meta line (date + author, uppercase 12px), 28px
  Playfair heading (hover → pink), gray excerpt — followed by circular
  pagination (‹ 1 2 3 4 5 ›, active = pink circle). Header row sits on the
  white column: "LIBRO" logo (uppercase, letter-spaced, white over the photo
  area) + hamburger trigger that opens a full-height slide-out nav panel
  (width 50%, cyan→pink 45° gradient) with huge white links (30px, animated
  underline on hover) — Home, Fashion, Model, Travel, About us, Contact —
  and a copyright line at the bottom of the panel. Demo copy is placeholder
  lorem — paraphrase into fashion/lifestyle blog copy.
- **Section order (1:1, from live demo DOM):**
  1. Slide-out nav (`nav#colorlib-main-nav`, position absolute, full-height,
     width 50%, background: linear-gradient(45deg, #29bae4 0%, #ee76ad 100%),
     z-index 1002): close/hamburger toggle top, `ul` links (Home active,
     Fashion, Model, Travel, About us, Contact) — `a span` font-size 30px,
     white, animated `:before` white 3px underline (scaleX 0 → 1 on
     hover/active) — plus `.copyright` paragraph at the bottom ("Copyright ©
     All rights reserved | This template is made with ♥ by Colorlib").
  2. Header (`header`, inside `#colorlib-page`): `div.container-fluid` >
     `div.row` > `div.col-md-12` with `.colorlib-navbar-brand`
     `.colorlib-logo` "Libro" (font-size 20px, uppercase, white, letter-
     spacing 5px, font-weight 400) and the `.colorlib-nav-toggle` hamburger
     (`<i>` bars; `.active` state = X, bars #000).
  3. Hero split (`section.ftco-fixed.clearfix`):
     - Left: `div.image.js-fullheight.float-left` — `div.home-slider
owl-carousel.js-fullheight` with 2 `div.slider-item.js-fullheight`
       (background-image bg_1.jpg / bg_2.jpg + `div.overlay`): each slide's
       `.slider-text` (align-items-end) = `p.cat` `<span>` category tag
       (uppercase 13px, letter-spacing 1px, 1px solid #fff, padding 4px) +
       `h1.mb-3` headline (font-size 40px, white, Playfair, weight 400,
       line-height 1.2).
     - Right: `div.page-container.float-right` — `div.row` with two
       `div.col-md-6` columns of 4 `div.blog-entry.ftco-animate` each
       (8 total): `a.blog-image` > `img.img-fluid` (hover: image scale 1.1),
       then `div.text.py-4` = `div.meta` (two `div` — date link "July 29,
       2018", author link "Admin"; font-size 12px, uppercase, letter-spacing
       2px, color #ee76ad) + `h3.heading` (font-size 28px, Playfair, weight
       400, color #000, hover #ee76ad) + excerpt paragraph (gray #737373).
     - Below the grid: `div.row.mt-5` > `div.col.text-center` >
       `div.block-27` pagination `ul`: `‹`, 1 (active span), 2, 3, 4, 5, `›`
       — 40×40px circles, border 1px solid #ccc, border-radius 50%;
       active = background #ee76ad, white text, transparent border.
  4. Loader (`div#ftco-loader.show.fullscreen`, optional): circular SVG
     spinner, stroke #F96D00 on #eeeeee track.
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand color: **#ee76ad** (pink; links `a`, meta links, pagination active
    bg, blog heading hover). Supporting accents: **#29bae4** (cyan) — paired
    with pink in the slide-out nav gradient
    `linear-gradient(45deg, #29bae4 0%, #ee76ad 100%)`; **#F96D00** (orange,
    loader spinner); **#737373** (body/excerpt gray); **#000** (headings,
    active toggle bars); **#ccc** (pagination border); **#fff** (page bg,
    nav links, slider text). Bootstrap `--primary: #79efb4` (green — btn
    primary on inner pages only).
  - Fonts: **Work Sans** (body — `font-family: "Work Sans", Arial,
sans-serif`, weight 300, color #737373) + **Playfair Display** (headings
    — `font-family: "Playfair Display", Georgia, serif`, weight 300/400,
    color #000, line-height 1.5) via Google Fonts. Logo uses uppercase
    letter-spacing 5px sans (Work Sans).
  - Buttons: the index page has NO buttons; inner pages use Bootstrap
    `.btn-primary` (bg #79efb4 green, 4px radius). Index interactions are
    links only (pink).
  - Layout: split-screen — left column fixed full-height image carousel
    (~40–50% width), right column scrolls (`.page-container`); header row
    with logo + hamburger on top.
  - Nav: slide-out panel, width 50%, full-height, cyan→pink gradient, links
    30px white with animated white underline; copyright at panel bottom.
  - Blog entries: image zoom on hover (scale 1.1), meta 12px uppercase
    letter-spacing 2px pink, heading 28px Playfair black→pink hover, gray
    excerpt; 2-column grid.
  - Pagination: `.block-27` 40px circles, radius 50%, 1px #ccc border,
    active pink fill.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/tome-<n>/<w>/<h>`); icons → lucide-react (hamburger/
  close, heart for the copyright line); Work Sans + Playfair Display via
  Google Fonts `<link>`; hero carousel with no extra dependencies (simple
  prev/next + dots or autoplay); slide-out nav overlay with focus-visible +
  Escape-to-close + aria attributes per repo conventions; pagination is a
  static 5-page control (1 active).

Tome lives in `apps/tome` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Slide-out navigation panel

The system SHALL render a full-height slide-out navigation panel that opens
from the left with the site name, a link list, and a copyright line.

#### Scenario: Panel content

- **GIVEN** the Tome page is rendered
- **WHEN** the navigation panel is open
- **THEN** the panel SHALL show links Home, Fashion, Model, Travel,
  About us, and Contact in large white type
- **AND** the panel SHALL show a copyright line at the bottom

#### Scenario: Open and close the panel

- **GIVEN** the header is rendered
- **WHEN** the user presses the hamburger trigger
- **THEN** the slide-out panel SHALL appear
- **WHEN** the user presses the close control or the Escape key
- **THEN** the panel SHALL close

### Requirement: Header with logo and hamburger

The system SHALL render a header with the site name "Tome" in uppercase
letter-spaced type and a hamburger menu trigger.

#### Scenario: Header content

- **GIVEN** the Tome page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Tome" (uppercase, wide
  letter-spacing)
- **AND** the header SHALL show a hamburger trigger button (aria-label
  "Open menu")

### Requirement: Hero slider

The system SHALL render a full-height hero image carousel on the left half of
the viewport with a category tag and a headline per slide.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show a full-height background image with a dark overlay
- **AND** it SHALL show an uppercase category tag (e.g. "Fashion") with a
  thin white border
- **AND** it SHALL show a large white serif headline (e.g. "Popular
  Lifestyle with Fashion & Modeling")

#### Scenario: Slide navigation

- **GIVEN** the hero slider has multiple slides
- **WHEN** the user activates a slide indicator (dots) or waits for the
  interval
- **THEN** the visible slide SHALL change to the next one

### Requirement: Blog grid

The system SHALL render a two-column grid of blog entries to the right of the
hero, each with an image, a meta line, a heading, and an excerpt.

#### Scenario: Blog entry content

- **GIVEN** the page is rendered
- **WHEN** the blog grid is displayed
- **THEN** it SHALL show 8 blog entries in a two-column grid
- **AND** each entry SHALL show an image, a meta line (date and author,
  uppercase), a heading, and an excerpt paragraph

#### Scenario: Blog entry hover

- **GIVEN** a blog entry is displayed
- **WHEN** the user hovers over the entry image
- **THEN** the image SHALL zoom in
- **AND** the entry heading SHALL turn the brand pink

### Requirement: Pagination

The system SHALL render circular pagination controls below the blog grid with
the first page active.

#### Scenario: Pagination content

- **GIVEN** the page is rendered
- **WHEN** the blog grid is displayed
- **THEN** circular page controls SHALL appear (‹, 1, 2, 3, 4, 5, ›)
- **AND** page 1 SHALL be marked active with the pink fill

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Tome app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero slider, blog grid,
  pagination, and slide-out nav in the expected order
- **AND** the document title SHALL be "Tome — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh tome` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (slide-out nav, header, hero slider
      left + blog grid right, pagination)
- [ ] Design tokens in `@theme`: brand pink `#ee76ad`, cyan `#29bae4` (nav
      gradient #29bae4→#ee76ad), `#F96D00` loader, `#737373` body gray,
      `#000` headings, `#ccc` pagination border
- [ ] Fonts: Work Sans (body) + Playfair Display (headings) via Google Fonts
- [ ] Split layout: fixed full-height hero carousel left, white scrolling
      blog column right (2-col grid, 8 entries)
- [ ] Slide-out nav: 50% width, gradient bg, 30px white links with animated
      underline, copyright at bottom, Escape-to-close
- [ ] Blog entry: meta 12px uppercase letter-spacing 2px pink; heading 28px
      Playfair hover pink; image zoom on hover; pagination = 40px circles,
      active pink fill
- [ ] Hero carousel without extra dependencies (dots or autoplay)
- [ ] Placeholder images seeded (`picsum.photos/seed/tome-<n>/<w>/<h>`); no
      copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on line 268 + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
