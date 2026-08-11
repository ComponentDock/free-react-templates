# Template: Lumina (Photography Template)

## Purpose

Lumina is a single-page photography portfolio/gallery landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sunzine" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sunzine" — photography/photo-gallery template
  (source: https://colorlib.com/wp/template/sunzine/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sunzine/
  (HTTP 200, ~11 KB HTML fetched + `css/style.css` ~35 KB parsed).
- **Screenshot analyzed:** `sunzine-free-template.jpg` (TEMPLATES.md) —
  clean minimalist photography portfolio: transparent header with bold
  uppercase "SUNZINE" logo (camera icon) left and uppercase nav right
  (HOME, ABOUT, BLOG, CONTACT) plus search + hamburger icons; hero is a
  centered uppercase headline on white ("HELLO! WELCOME TO SUNZINE PHOTO
  GALLERY / WITH CREATIVE & UNIQUE STYLE"); below it the category filter
  row (ALL, PHOTOGRAPHY, TRAVEL, NATURE, FASHION, LIFE STYLE, each with a
  small green dot); the body is a 4-column masonry-style photo grid with
  irregular item widths and mixed aspect ratios (interiors, portraits,
  food, pets, detail shots); footer dark with logo, copyright and social
  icons. Green (#0ECE91) accents on stark white; geometric sans type.
- **Section order (1:1, home page):** Preloader (spinner) → Header
  (transparent, padding 28px 78px: `.site-logo` image left;
  `.main__menu` uppercase links HOME `menu--active`, ALBUMS, ABOUT
  (dropdown: Albums Details, Blog Details), BLOG, CONTACT; `.header__switches`
  right: search icon + hamburger) → Hero (`.hero`, padding 80px 0, centered
  uppercase h2 "Hello! Welcome to SUNZINE photo gallery With Creative &
  Unique Style") → Gallery (`.gallery__section`, padding 0 5px:
  `.filter-controls` centered — ALL / PHOTOGRAPHY / TRAVEL / NATURE /
  FASHION / LIFE STYLE with bullet separators — then `.gallery__warp`
  mixitup grid of `.mix.grid__item` photo tiles) → Footer
  (`.footer__section`, bg **#222222**, padding 25px 40px 15px: footer logo
  left (col-lg-3), centered copyright line (col-lg-6), `.footer__social`
  right (col-lg-3): facebook/twitter/instagram icons).
- **Gallery grid anatomy:** `.grid__item` default 25% width, floated,
  padding 0 5px; per-item irregular widths: `grid--1` 28%, `grid--2` 19%,
  `grid--3` 27%, `grid--4` 26%, `grid--5` 22%, `grid--8` 21% (responsive:
  ~40–60% tablet, 100% mobile). Each tile: `.gallery_img` (height 360px,
  margin-bottom 10px, cover background image) with `.gellery__text`
  absolutely positioned bottom (padding 0 30px): `<span>` category line
  (e.g. "Photography / Flower") + `<h3>` title (e.g. "Flower In Door").
  Hover: black overlay fades to opacity 0.1 and text block slides up.
  Filter classes: `photo`, `travel`, `natural`, `fashion`, `lifestyle`.
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#0ECE91** (mint/teal green) — `.site-btn` background
    (white text), links, logo accent, filter dots (22 uses in CSS).
  - Headings/dark text: **#111111**; secondary text: **#707070**; muted
    (filter text): **#B7B7B7**; filter hover/active → **#111111**.
  - Backgrounds: page **#fff**; light grays **#F3F3F3** / **#EBEBEB**
    (secondary blocks); footer **#222222**.
  - Fonts: `@import` Google Fonts — **"Aldrich"** (headings, nav, filter
    controls, uppercase) + **"Raleway"** (body, 400/500). h2 36px/1.4,
    h3 30px; hero h2 uppercase, weight 400, line-height 1.6, centered
    (30px on ≤576px).
  - Buttons (`.site-btn`): font-size 14px, padding 16px 15px,
    min-width 180px, white text on #0ECE91.
  - Filter controls: uppercase, 14px, Aldrich, #B7B7B7; `:after` "•"
    bullet separators; hover/active #111111 with an underline
    (`.filter-controls li:before` grows to width 100%).
  - Gallery tile: height 360px, margin-bottom 10px; hover overlay
    rgba(0,0,0,.1); text block bottom, padding 0 30px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/lumina-<n>/<w>/<h>`); icons → lucide-react
  (camera for logo, search, menu, facebook/twitter/instagram inline SVG
  brand icons — lucide-react removed brand icons); Aldrich + Raleway via
  Google Fonts `<link>`; mint-green accent in `@theme`; no assets copied.
  The original is a multi-page site (index/albums/about/blog/contact/
  albums-details/blog-single); the recreation is single-page with anchor
  links (Home, Gallery, About, Blog, Contact) and an About dropdown.

Lumina lives in `apps/lumina` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with a logo, uppercase nav
links, and a search + menu icon switch, matching the Sunzine header.

#### Scenario: Navbar content

- **GIVEN** the Lumina page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Lumina" (uppercase, bold) with a camera icon at the left
- **AND** the navbar SHALL show uppercase links for Home, Gallery (or Albums), About, Blog, and Contact
- **AND** the navbar SHALL show a search icon and a menu (hamburger) icon on the right

#### Scenario: About dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user opens the About dropdown
- **THEN** it SHALL show sub-links (e.g. Albums Details, Blog Details)

#### Scenario: Active link styling

- **GIVEN** the navbar is rendered
- **WHEN** the page is at the top (Home section)
- **THEN** the Home link SHALL be marked as the active menu item

### Requirement: Hero heading

The system SHALL render a centered hero section with an uppercase headline.

#### Scenario: Hero content

- **GIVEN** the Lumina page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "Hello! Welcome to Lumina photo gallery With Creative & Unique Style" (uppercase, centered)
- **AND** the headline SHALL use the heading font (Aldrich) and stay centered on mobile

### Requirement: Gallery filter controls

The system SHALL render a centered filter control row with category buttons
that filter the gallery grid.

#### Scenario: Filter categories

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** the filter controls SHALL show ALL, PHOTOGRAPHY, TRAVEL, NATURE, FASHION, and LIFE STYLE (uppercase, muted gray with bullet separators)
- **AND** ALL SHALL be active by default

#### Scenario: Filtering the grid

- **GIVEN** the gallery grid contains photo tiles tagged with categories (photo, travel, natural, fashion, lifestyle)
- **WHEN** the user activates a category filter
- **THEN** only tiles of that category SHALL remain visible and the active filter SHALL be highlighted (dark text + underline)

### Requirement: Gallery grid

The system SHALL render a masonry-style photo grid of tiles with irregular
widths, each with a hover overlay and a caption.

#### Scenario: Grid tiles

- **GIVEN** the gallery grid is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a row-based collage of photo tiles with varying widths (e.g. 28%, 19%, 27%, 26%, 22%, 21%) summing to roughly 4 columns
- **AND** each tile SHALL contain a background photo, a category line (e.g. "Photography / Flower"), and a bold title (e.g. "Flower In Door")

#### Scenario: Tile hover

- **GIVEN** a gallery tile is rendered
- **WHEN** the user hovers over it
- **THEN** a dark overlay SHALL appear and the caption SHALL become fully visible

#### Scenario: Mobile layout

- **GIVEN** the gallery grid is rendered on a narrow viewport
- **WHEN** the page is displayed on a phone
- **THEN** every tile SHALL stack full-width

### Requirement: Footer

The system SHALL render a dark footer with a logo, a copyright line, and
social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site logo on the left, a centered copyright line ("All rights reserved | Made with ♥ by …"), and social icons (Facebook, Twitter, Instagram) on the right
- **AND** the footer background SHALL be dark (#222222)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lumina app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Lumina — Photography Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/lumina` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- lumina` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; brand tokens (#0ECE91, #111111, #222222 footer, Aldrich + Raleway, 360px tiles, irregular grid widths) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `lumina-<n>`, Google Fonts links, lucide/inline SVG icons only)
