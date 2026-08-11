# Template: Sundial (Photography Gallery Template)

## Purpose

Sundial is a single-page photography gallery template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sunzine" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sunzine" — photography gallery template
  (source: https://colorlib.com/wp/template/sunzine/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/sunzine/
  (HTTP 200, ~11.3 KB HTML fetched + `css/style.css` ~35.5 KB parsed).
- **Screenshot analyzed:** `sunzine-free-template.jpg` (TEMPLATES.md) —
  stark white minimal photography portfolio; bold uppercase black
  "SUNZINE" logo with a small camera icon; right-aligned nav (HOME,
  ABOUT, BLOG, CONTACT) with search + menu switch icons; centered
  uppercase hero headline; dense masonry gallery grid of photos in mixed
  aspect ratios (portrait/landscape/square); category filter bar with
  small green diamond markers; footer dark.
- **Section order (1:1):** Header (logo + nav + switches, sticky) →
  Hero (centered uppercase welcome headline) → Gallery (filter controls
  ALL / PHOTOGRAPHY / TRAVEL / NATURE / FASHION / LIFE STYLE + masonry
  photo grid with hover overlay captions) → Footer (dark, centered
  copyright + heart + social icons).
- **Design tokens extracted from the preview CSS:**
  - Brand accent: **#0ECE91** (mint/lime green) — nav link underline
    (6px bar, animated width 0→100%, `bottom: 8px`), active filter
    underline, footer link hover, breadcrumb span.
  - Ink: **#111111** — headings (h6 + `.hero h2` inherit), active nav
    link (`menu--active`), active filter label, header switch icons.
  - Muted greys: **#B7B7B7** — nav links, inactive filter labels,
    filter "•" separators, footer copyright text; **#707070** — body
    paragraph text.
  - Footer background: **#222222** (padding 25px 40px 15px); heart icon
    **#b91b1b** (red); social icons **#fff** 16px, `margin-left: 25px`.
  - Gallery hover overlay: **#000** fading in (`opacity 0 → 1`); caption
    span uppercase 14px Raleway white, caption h3 uppercase 24px white
    sliding up (`padding-top` transition, 0.3s).
  - Fonts: body **"Raleway", sans-serif** (16px, line-height 1.8, color
    #707070); headings/nav/logo **"Aldrich", sans-serif** (uppercase).
  - Hero: `padding: 80px 0`, centered uppercase h2, 30px, weight 400,
    line-height 1.6, color #111111.
  - Header: `padding: 28px 78px` (mobile 28px 15px), turns sticky white
    (`#ffffff`) on scroll; switch icons 18px #111111 `margin-left: 25px`.
  - Filter controls: uppercase 14px, inactive #B7B7B7, "•" separators
    (Aldrich), active #111111 + green underline bar (6px, `bottom: 4px`).
  - Gallery grid: `.grid__item` width 25% (4 columns), `padding: 0 5px`,
    floated masonry; varying `grid--N` size classes per item.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sundial-<n>/<w>/<h>`); icons → lucide-react
  (camera, search, menu, socials as inline SVG brands); Raleway + Aldrich
  via Google Fonts `<link>`; green accent in `@theme`; no assets copied.

Sundial lives in `apps/sundial` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sundial"
(with a camera icon), anchor links, and search/menu switch icons.

#### Scenario: Navbar content

- **GIVEN** the Sundial page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sundial" in bold uppercase
  Aldrich lettering with a small camera icon
- **AND** the navbar SHALL show links to Home, Albums, About, Blog, and
  Contact
- **AND** the navbar SHALL show a search icon and a menu switch icon on the
  right

#### Scenario: Active link styling

- **GIVEN** the navbar is rendered
- **WHEN** a nav link is the current section
- **THEN** the active link SHALL be colored #111111 with a green (#0ECE91)
  6px underline bar beneath it

#### Scenario: Sticky header

- **GIVEN** the page is scrolled
- **WHEN** the viewport passes the top of the page
- **THEN** the header SHALL become fixed with a white (#ffffff) background

### Requirement: Hero section

The system SHALL render a centered hero with an uppercase welcome headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a centered, uppercase, 30px headline welcoming the
  visitor to the Sundial photo gallery with creative & unique style
- **AND** the hero SHALL have ~80px vertical padding and a white background

### Requirement: Gallery filter controls

The system SHALL render a filter control bar above the gallery grid with
category buttons and a green underline on the active category.

#### Scenario: Filter bar content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** the filter bar SHALL show buttons: All, Photography, Travel,
  Nature, Fashion, and Life Style
- **AND** inactive labels SHALL be #B7B7B7 uppercase 14px, separated by
  "•" markers

#### Scenario: Filter activation

- **GIVEN** the filter bar is rendered
- **WHEN** the user activates a category filter
- **THEN** the active label SHALL turn #111111 with a green (#0ECE91)
  6px underline bar
- **AND** the gallery SHALL show only items of that category (All shows
  every item)

### Requirement: Masonry gallery grid

The system SHALL render a 4-column masonry photo grid where each item shows
a caption overlay (category + title) on hover.

#### Scenario: Gallery items

- **GIVEN** the page is rendered
- **WHEN** the gallery grid is displayed
- **THEN** it SHALL show at least twelve photo items in a masonry layout
- **AND** each item SHALL belong to one of the categories Photography,
  Travel, Nature, Fashion, or Life Style

#### Scenario: Hover overlay

- **GIVEN** a gallery item is displayed
- **WHEN** the user hovers over the item
- **THEN** a dark (#000) overlay SHALL fade in over the photo
- **AND** a caption SHALL appear showing an uppercase category line
  (e.g. "Photography / Flower") and an uppercase title (e.g. "Flower In
  Door") in white

### Requirement: Footer

The system SHALL render a dark footer with a centered copyright line, a
red heart icon, and social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a #222222 background
- **AND** it SHALL show a centered copyright line (e.g. "© 2026 Sundial.
  All rights reserved") in #B7B7B7 with a red (#b91b1b) heart icon
- **AND** it SHALL show social icons in white

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sundial app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sundial — Photography Gallery
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/sundial` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- sundial` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; brand tokens (#0ECE91, #111111, #222222, Raleway + Aldrich) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `sundial-<n>`, Google Fonts links, lucide/inline-SVG icons only)
