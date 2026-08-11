# Template: Darkroom (Photography Template)

## Purpose

Darkroom is a single-page photography portfolio/gallery landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sunzine" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sunzine" — photography/photo-gallery template
  (source: https://colorlib.com/wp/template/sunzine/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sunzine/
  (HTTP 200, ~11 KB HTML fetched; `css/style.css` ~35 KB parsed for tokens).
  Title tag: "SUNZINE | Photography HTML Template".
- **Screenshot analyzed:** `sunzine-free-template.jpg` (TEMPLATES.md) —
  clean minimalist photography portfolio: white page, sparse fixed header
  (camera-icon logo "SUNZINE" left; uppercase nav HOME/ABOUT/BLOG/CONTACT +
  search + hamburger icons right), centered uppercase black hero headline
  "HELLO! WELCOME TO SUNZINE PHOTO GALLERY WITH CREATIVE & UNIQUE STYLE",
  filter bar of uppercase categories (Photography, Travel, Nature, Fashion,
  Life Style) with a bright lime-green accent, then a masonry-style ~4-column
  grid of photo tiles (interiors, architecture, food, portraits, watches,
  dogs, cars). Palette is neutral white/black/grey with a single green accent;
  footer not visible in the screenshot.
- **Section order (1:1):** Header (fixed, white, shadow; logo + nav HOME,
  ALBUMS, ABOUT ▾ [Albums Details, Blog Details], BLOG, CONTACT + search &
  bars switches; offcanvas mobile menu) → Hero (centered uppercase h2 on
  white) → Gallery (`.filter-controls` category bar ALL/PHOTOGRAPHY/TRAVEL/
  NATURE/FASHION/LIFE STYLE + masonry grid of ~20 `.grid__item` photo tiles
  with hover caption overlay) → Footer (dark #222222: logo left, centered
  copyright, social icons right).
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#0ECE91** (lime green) — nav link underline bar,
    filter underline bar, link hovers, logo accents.
  - Ink: **#111111** — all headings, nav hover/active, switch icons.
  - Body/grays: **#B7B7B7** (nav links, filter text, footer text),
    #707070; footer bg **#222222**; heart icon **#b91b1b**.
  - Fonts: **"Raleway", sans-serif** (body) + **"Aldrich", sans-serif**
    (headings h2–h6, nav links, filter controls — techy condensed display
    face). Headings all **#111111**: h2 36px/1.4, h3 30px, h4 24px.
  - Header `.header`: fixed, `background: #fff`, shadow
    `0 10px 50px rgba(0,0,0,0.1)`; switches 18px #111111, margin-left 25px.
  - Nav links: 14px uppercase Aldrich, #B7B7B7, padding 5px 9px,
    margin-right 20px; `:after` 6px-high #0ECE91 bar bottom:8px,
    width 0 → 100% on hover/.menu--active; hover/active color #111111.
  - Hero `.hero`: padding 80px 0, white bg; h2 uppercase, weight 400,
    centered, line-height 1.6 (36px, 30px on ≤576px).
  - Filter `.filter-controls ul li`: inline-block, 14px Aldrich uppercase,
    #B7B7B7, margins 10px/15px; "•" bullet `:after` (right -19px, removed on
    last child); 6px-high #0ECE91 `:before` bar bottom:4px grows on
    hover/.active; hover/active color #111111; section padding-top 30px,
    margin-bottom 40px.
  - Gallery `.gallery__section`: padding 0 5px, overflow hidden. `.grid__item`
    float-left widths 19–28% (grid--1 28%, grid--2 19%, grid--3 27%,
    grid--4 26%, default 25%) with 5px gutters (10px effective), 100% on
    mobile. `.gallery_img`: display block, height 360px, margin-bottom 10px;
    hover `:after` overlay rgba(0,0,0,0.1) (0 → 0.1 opacity).
  - Caption `.gellery__text`: absolute, bottom 20px, padding 0 30px,
    z-index 3; span (category, uppercase small) + h3 (30px) hidden
    (bottom -offset/opacity 0) and slide up + fade in on hover with
    0.2s delay.
  - Footer `.footer__section`: bg **#222222**, padding 25px 40px 15px;
    copyright text 16px Raleway #B7B7B7 centered; links #fff, hover
    **#0ECE91**; heart icon #b91b1b; social icons row on the right.
  - No buttons/CTAs on the homepage (gallery-style), square corners
    everywhere (no radii).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/darkroom-<n>/<w>/<h>`); icons → lucide-react
  (search, menu, camera, facebook, twitter, instagram, heart); Raleway +
  Aldrich via Google Fonts `<link>`; lime-green accent in `@theme`;
  no assets copied.

Darkroom lives in `apps/darkroom` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the site name
"Darkroom", anchor links to the page's sections, an Albums/About dropdown,
and search + menu icon switches.

#### Scenario: Navbar content

- **GIVEN** the Darkroom page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Darkroom" with a camera icon on the left
- **AND** the navbar SHALL show uppercase links for Home, Albums, About, Blog, and Contact
- **AND** the navbar SHALL show a search icon and a menu icon on the right

#### Scenario: Navbar styling

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is hovered or is the active page
- **THEN** the link text SHALL turn ink (#111111) and a 6px-high lime-green
  (#0ECE91) underline bar SHALL grow beneath it

#### Scenario: About dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user opens the About dropdown
- **THEN** it SHALL show links to Albums Details and Blog Details

### Requirement: Hero section

The system SHALL render a centered hero headline on a white background below
the navbar.

#### Scenario: Hero headline

- **GIVEN** the Darkroom page is rendered
- **WHEN** the hero section is in view
- **THEN** the hero SHALL show the uppercase headline "Hello! Welcome to
  Darkroom photo gallery with creative & unique style" centered in Aldrich,
  ink (#111111), weight 400

### Requirement: Gallery section

The system SHALL render a filterable masonry-style photo gallery with a
category filter bar and hover caption overlays.

#### Scenario: Filter bar

- **GIVEN** the gallery section is rendered
- **WHEN** the page loads
- **THEN** the filter bar SHALL show uppercase categories: All, Photography,
  Travel, Nature, Fashion, and Life Style, separated by bullet dots

#### Scenario: Filter interaction

- **GIVEN** the filter bar is rendered
- **WHEN** the user clicks a category (e.g. Travel)
- **THEN** only gallery items tagged with that category SHALL remain visible
- **AND** the selected category SHALL be highlighted with a growing
  6px-high lime-green (#0ECE91) underline bar and ink text

#### Scenario: Gallery grid

- **GIVEN** the gallery section is rendered
- **WHEN** all items are shown
- **THEN** the gallery SHALL render a masonry-style grid of ~20 photo tiles
  with varied widths (19–28%) and square corners
- **AND** each tile SHALL show a photo with a caption overlay (uppercase
  category span + title h3) hidden by default

#### Scenario: Tile hover

- **GIVEN** a gallery tile is rendered
- **WHEN** the user hovers over it
- **THEN** a subtle dark overlay (rgba(0,0,0,0.1)) SHALL appear
- **AND** the caption SHALL slide up and fade in from the bottom of the tile

### Requirement: Footer

The system SHALL render a dark footer with the site logo, copyright text, and
social links.

#### Scenario: Footer content

- **GIVEN** the Darkroom page is rendered
- **WHEN** the footer is in view
- **THEN** the footer SHALL show the site logo on the left, centered
  copyright text ("All rights reserved | Made with ♥ by Colorlib" replaced
  by an original attribution line), and social icons (Facebook, Twitter,
  Instagram) on the right
- **AND** the footer background SHALL be #222222 with grey (#B7B7B7) text
- **AND** link hover SHALL turn lime-green (#0ECE91)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Darkroom app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Darkroom — Photography Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/darkroom` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- darkroom` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; brand tokens (#0ECE91, #111111, #222222, Raleway + Aldrich) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `darkroom-<n>`, Google Fonts links, lucide icons only)
