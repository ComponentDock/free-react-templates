# Template: Aperture (Photography Template)

## Purpose

Aperture is a single-page photography-gallery landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sunzine" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sunzine" — photography portfolio/gallery template
  (source: https://colorlib.com/wp/template/sunzine/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sunzine/
  (HTTP 200, ~11 KB HTML fetched + `css/style.css` ~35 KB parsed for
  tokens). The TEMPLATES.md screenshot
  (`sunzine-free-template.jpg`) was viewed in the browser as the visual
  reference.
- **Screenshot analyzed:** clean, minimalist, modern design on a stark
  white background that lets the photography dominate. Header: camera-icon
  logo + bold sans-serif "SUNZINE" top-left; uppercase text links
  (HOME, ABOUT, BLOG, CONTACT) top-right plus search (magnifying glass)
  and hamburger icons. Hero: centered bold uppercase headline "HELLO!
  WELCOME TO SUNZINE PHOTO GALLERY" with sub-line "WITH CREATIVE & UNIQUE
  STYLE"; below it a row of category filters (PHOTOGRAPHY, TRAVEL, NATURE,
  FASHION, LIFE STYLE) separated by vertical dots. Main content: a dense
  4-column masonry-style grid of high-quality photographs (architecture,
  abstract B&W, food, portraits, textures, fashion, travel). No visible
  CTA buttons — the gallery is the hero.
- **Section order (1:1):** Header (site-logo + main menu HOME / ALBUMS /
  ABOUT [dropdown: Albums Details, Blog Details] / BLOG / CONTACT +
  header switches: search + nav-switch hamburger) → Hero (centered h2
  "Hello! Welcome to SUNZINE photo gallery With Creative & Unique Style")
  → Gallery (`.filter-controls` bar: ALL • PHOTOGRAPHY • TRAVEL • NATURE •
  FASHION • LIFE STYLE → `.gallery__warp` masonry grid of 20 `.mix`
  tiles, each `a.gallery_img.set-bg` with hover overlay
  `.gellery__text` (span category + h3 title)) → Footer
  (`.footer__section` dark #222222: footer logo left, centered copyright
  "Copyright © <year> All rights reserved | This template is made with ♥
  by Colorlib", social icons right).
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Brand accent: **#0ECE91** (mint green) — active nav item underline
    bar (`.main__menu ul li>a:after` height 6px, z-index -1), nav hover
    underline, filter hover underline (`.filter-controls ul li:before`
    height 6px), footer copyright link hover, `.site-btn` background.
  - Headings/text: **#111111** — menu hover color, header switch icons,
    hero h2, sub-menu links, active filter hover.
  - Muted text: **#B7B7B7** — menu links, filter labels, footer copyright
    text; **#707070** secondary; **#EBEBEB/#F3F3F3** light surfaces.
  - Footer: background **#222222**; heart icon **#B91B1B**.
  - Fonts: **"Aldrich"** (display/menu/filters, uppercase) +
    **"Raleway"** (body, gallery captions) via Google Fonts
    (`@import url(...family=Aldrich&family=Raleway...)`). Body base:
    `font-family: "Raleway", sans-serif`, -webkit-font-smoothing.
  - Header: padding 28px 78px; `.header.sticky` → fixed, white bg,
    shadow `0 10px 50px rgba(0,0,0,0.1)`. Menu links 14px uppercase
    Aldrich, padding 5px 9px, margin-right 20px, hover color #111111 with
    6px green underline growing left→right (transition 0.3s). Dropdown
    `.sub__menu`: white, width 170px, shadow `0 9px 50px rgba(0,0,0,0.1)`,
    links 5px 15px #111111.
  - Header switches: `.header__switches a` 18px, color #111111,
    margin-left 25px (search icon + nav-switch hamburger for mobile).
  - Hero: padding 80px 0; `.hero h2` font-size 30px, weight 400,
    uppercase, centered, line-height 1.6 (col-lg-10 centered container).
  - Filter bar: `.filter-controls` text-align center, padding-top 30px,
    margin-bottom 40px; `ul li` inline-block, 14px uppercase Aldrich,
    color #B7B7B7, `•` separator via `:after` (right -19px, none on last
    child), hover #111111 + green underline.
  - Gallery: `.gallery__section` padding 0 5px, overflow hidden; tiles
    are `.mix` masonry items with `data-setbg` cover images; hover
    overlay `.gellery__text` absolute bottom 20px, padding 0 30px; span
    14px uppercase Raleway #fff (opacity 0 → 1, transition 0.3s ease
    0.2s, bottom 20px→0); h3 #fff uppercase (opacity 0 → 1, font-size
    24px on hover, transition 0.3s).
  - Footer: `.footer__section` padding 25px 40px 15px, text-align center,
    background #222222; copyright text Raleway 16px #B7B7B7, link #fff
    → #0ECE91 on hover, heart #B91B1B; social links white 16px,
    margin-left 25px.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/aperture-<n>/<w>/<h>`, 20 tiles); icons →
  lucide-react (Camera, Search, Menu, Facebook, Twitter, Instagram,
  Heart); fonts via Google Fonts `<link>` in `index.html` (Aldrich +
  Raleway); brand green #0ECE91 in `@theme`; masonry grid via CSS
  columns or a simple flex/grid layout; no assets copied. The ColorLib
  attribution line becomes the monorepo's standard placeholder footer
  copy (paraphrased, no external link requirement — keep the same _kind_
  of content).

Aperture lives in `apps/aperture` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Aperture", anchor links to the page's sections, a search icon, and a
mobile menu toggle.

#### Scenario: Navbar content

- **GIVEN** the Aperture page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Aperture"
- **AND** the navbar SHALL show links to Home, Albums, About, Blog, and Contact

#### Scenario: Search and menu icons

- **GIVEN** the page is rendered
- **WHEN** the header switches are displayed
- **THEN** the header SHALL show a search icon and a hamburger menu toggle
- **AND** the icons SHALL be keyboard-focusable with aria-labels

### Requirement: Hero section

The system SHALL render a full-width hero with the site's welcome
headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading with the text
  "Hello! Welcome to Aperture photo gallery With Creative & Unique Style"
- **AND** the headline SHALL be centered and uppercase

### Requirement: Gallery filter bar

The system SHALL render a category filter bar above the gallery with an
"All" option and five photography categories.

#### Scenario: Filter bar content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** the filter bar SHALL show the options All, Photography, Travel,
  Nature, Fashion, and Life Style

#### Scenario: Filtering the gallery

- **GIVEN** the gallery contains tiles from multiple categories
- **WHEN** the user activates a category filter
- **THEN** only tiles matching that category SHALL remain visible

### Requirement: Gallery grid

The system SHALL render a masonry-style gallery grid of at least twelve
photo tiles, each with an image and a hover-revealed caption.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show at least twelve photo tiles with placeholder images

#### Scenario: Hover caption

- **GIVEN** a gallery tile is displayed
- **WHEN** the user hovers over the tile
- **THEN** the tile SHALL reveal a caption with a category label and a title

### Requirement: Footer

The system SHALL render a dark footer with the site name, a copyright
line, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name, a copyright line, and social links
- **AND** the social links SHALL be keyboard-focusable with aria-labels

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Aperture app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Aperture — Photography Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-aperture`
- [ ] `scripts/verify-app.sh aperture` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Section order matches the reference 1:1: header → hero → filter
      bar → gallery grid → footer
- [ ] Brand green `#0ECE91` in `@theme`; fonts Aldrich + Raleway loaded
      via Google Fonts `<link>`
- [ ] Gallery tiles use `picsum.photos/seed/aperture-<n>/<w>/<h>`; no
      ColorLib assets copied
- [ ] PR description records: source template (Sunzine), preview URL,
      design tokens, and what differs (new name, placeholder images)
