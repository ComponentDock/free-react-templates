# Template: Runway (Fashion Magazine / Blog Template)

## Purpose

Runway is a single-page fashion-magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Libro" website template design (see TEMPLATES.md, line 268),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Libro" — fashion/lifestyle magazine blog template
  (source: https://colorlib.com/wp/template/libro/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/libro/
  (HTTP 200, 23.4 KB rendered DOM, title "Libro - Free Bootstrap 4 Template
  by Colorlib"). Stylesheets: `css/style.css` (main, 58 KB) + Bootstrap 4,
  animate, AOS, owl.carousel, magnific-popup. Fonts: Google Fonts
  **Playfair Display** (headings, Georgia serif fallback) + **Work Sans**
  (body, Arial fallback) + Montserrat (Bootstrap default, unused).
- **Screenshot:** `libro-free-template.jpg` (1200×946, viewed in browser) —
  split-screen magazine layout: LEFT ~40% is a full-height fixed hero slider
  (photo of a woman in tinted sunglasses, "FASHION" bordered tag, big white
  serif headline "Popular Lifestyle with Fashion & Modeling", slider dots at
  the bottom); RIGHT ~60% is a 2-column blog grid of photo cards (image,
  uppercase date/author meta, serif title, gray excerpt), stark white
  background. Hamburger menu top-right of the hero panel. The demo brands
  itself "Libro"; recreation uses the NEW name **Runway**.
- **Visual design (from DOM + CSS tokens + screenshot):** elegant magazine
  aesthetic — white page, serif (Playfair Display) black headlines, thin
  light-gray (Work Sans 300) body copy, pink `#ee76ad` accents (logo icon,
  hover links, meta, active carousel/pagination) on a cyan→pink gradient
  full-screen overlay menu. Split layout: hero slider column is `position:
fixed` on desktop; blog content scrolls in the right column.

- **Structure (1:1, section order):**
  1. Header `.container-fluid` (top-left, over the hero image): navbar brand
     `.colorlib-logo` "Libro" (uppercase, letter-spacing 5px, white) + `.js-colorlib-nav-toggle` hamburger (two 2px white bars, 40×2px; turns black when active).
  2. Overlay menu `#colorlib-main-nav` (fixed, 50% width desktop / 100%
     mobile, `linear-gradient(45deg, #29bae4 0%, #ee76ad 100%)`): links Home,
     Fashion, Model, Travel, About us, Contact — white, 30px, weight 400,
     `padding: 5px 0`; right-aligned on desktop. Toggle button sits on its
     right edge (44×44, white bars).
  3. Split layout `.ftco-fixed.clearfix`:
     - Left `.image.js-fullheight.float-left` (50% width, `position: fixed`
       ≥992px): `.home-slider.owl-carousel.js-fullheight` — 2 slides
       `.slider-item.js-fullheight` (`min-height: 700px`, full-viewport
       background image `images/bg_1.jpg`, `images/bg_2.jpg`, optional
       `.overlay` `#ee76ad` at opacity 0): bottom-aligned
       `.slider-text` with `.cat` tag (uppercase 13px, letter-spacing 1px,
       1px white border, `padding: 4px`) + `h1` (40px, white, line-height
       1.2) + optional sub-paragraph (20px, `rgba(255,255,255,.8)`, weight
       300). Slides: "Fashion / Popular Lifestyle with Fashion & Modeling",
       "Model / Canadian Girl make your world go round". Carousel dots:
       10px circles `#999999`, active `#ee76ad`.
     - Right `.page-container.float-right` (50% width, `padding: 30px`):
       `.row` of two `.col-md-6` columns holding **8 blog entries**
       (`.blog-entry.ftco-animate`, 2 per row): `.blog-image` (block,
       `overflow: hidden`; img `transform: scale(1)` → `scale(1.1)` on hover,
       0.3s) + `.text.py-4` with `.meta` (two inline divs: date + author —
       12px uppercase, letter-spacing 2px, weight 400, links `#ee76ad`),
       `h3.heading` (28px, weight 400, link black → `#ee76ad` on hover), and
       excerpt `p` (body gray). Placeholder content repeated on all 8 cards:
       "July 29, 2018" / "Admin" / "Life looks happier" / "Far far away,
       behind the word mountains…".
  4. Pagination `.block-27` (end of the content column): circular 40×40px
     buttons, 1px `#ccc` border, `line-height: 40px`; `<`/`>` prev/next plus
     pages 1–5; active page `background: #ee76ad`, white text, transparent
     border.
  5. Footer (inside the overlay menu, bottom): `.copyright` line
     "Copyright © All rights reserved | This template is made with by
     Colorlib" (recreated with the Runway name, no Colorlib credit).

- **Design tokens extracted from `css/style.css`:**
  - Accent **pink `#ee76ad`** (logo icon, hover links, meta links, active
    carousel dot, active pagination, contact links).
  - Cyan `#29bae4` — second color of the overlay-menu gradient.
  - Overlay menu background: `linear-gradient(45deg, #29bae4 0%, #ee76ad
100%)` (45°).
  - Mint `#79efb4` — Bootstrap `--primary` override; default `a` link color.
  - Headings: **Playfair Display** (Georgia serif fallback), weight 300,
    `line-height: 1.5`, color `#000`.
  - Body: **Work Sans**, 18px, `line-height: 1.8`, weight 300, color
    `#737373`; page background `#fff`.
  - Logo: uppercase, `letter-spacing: 5px`, white; logo icon `#ee76ad`.
  - Slider `h1`: 40px white, `line-height: 1.2`, weight 400.
  - Meta labels: 12px uppercase, `letter-spacing: 2px`.
  - Slider dots: 10px circles, `#999999`, active `#ee76ad`.
  - Pagination: 40×40 circle, 1px `#ccc` border, active `#ee76ad` fill.
  - No filled CTA buttons on the home page (links only).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/runway-<n>/<w>/<h>`); icons → lucide-react
  (hamburger toggle; no icon font). Playfair Display + Work Sans via Google
  Fonts; no assets copied. The carousel can be implemented as a simple
  auto-advancing slider (or dots-only navigation) matching the two slides;
  the fixed left column behavior is `lg:sticky`/`lg:fixed` equivalent.

Runway lives in `apps/runway` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Runway",
a hamburger toggle, and a full-screen overlay menu.

#### Scenario: Navbar content

- **GIVEN** the Runway page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Runway" and a hamburger toggle button
- **AND** the toggle SHALL have an accessible name (aria-label)

#### Scenario: Overlay menu opens and closes

- **GIVEN** the page is rendered with the overlay menu closed
- **WHEN** the user presses the hamburger toggle
- **THEN** the overlay menu SHALL become visible
- **AND** the menu SHALL show links Home, Fashion, Model, Travel, About Us, and Contact
- **WHEN** the user presses the toggle again
- **THEN** the overlay menu SHALL close

### Requirement: Hero slider

The system SHALL render a full-height hero slider with at least two slides,
each with a category tag, a headline, and navigation dots.

#### Scenario: Hero slide content

- **GIVEN** the hero slider is displayed
- **WHEN** the page loads
- **THEN** the first slide SHALL show the "Fashion" tag and the headline "Popular Lifestyle with Fashion & Modeling"
- **AND** a second slide SHALL show the "Model" tag and the headline "Canadian Girl make your world go round"

#### Scenario: Slide navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates a dot or the slider auto-advances
- **THEN** the displayed headline and tag SHALL change to the next slide's content

### Requirement: Blog grid

The system SHALL render a two-column grid of blog entry cards, each with an
image, meta line (date + author), title, and excerpt.

#### Scenario: Blog entry content

- **GIVEN** the page is rendered
- **WHEN** the blog grid is displayed
- **THEN** it SHALL show at least six blog entry cards in a two-column grid
- **AND** each card SHALL contain an image, a date, an author name, a title, and an excerpt paragraph

#### Scenario: Card hover

- **GIVEN** a blog entry card is displayed
- **WHEN** the user hovers over the card image
- **THEN** the image SHALL scale up visually (hover transform)

### Requirement: Pagination

The system SHALL render a pagination control with page numbers and
previous/next controls.

#### Scenario: Pagination content

- **GIVEN** the page is rendered
- **WHEN** the blog grid is displayed
- **THEN** a pagination control SHALL show page numbers 1–5 with previous and next controls
- **AND** the current page SHALL be visually distinguished

### Requirement: Footer

The system SHALL render a footer with a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a copyright line for the Runway site

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Runway app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the hero slider and blog grid in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Runway — Fashion Magazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/runway`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/runway`)
- [ ] Section order matches the reference 1:1 (header → overlay menu → hero slider → blog grid → pagination → footer)
- [ ] Design tokens from the reference used in `@theme` (pink #ee76ad, cyan #29bae4, mint #79efb4, Playfair Display + Work Sans)
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react
- [ ] README Templates status + TEMPLATES.md line 268 marked `[x]` after merge
