# Template: Quill (Blog Template)

## Purpose

Quill is a single-page blog/magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Blogger" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Blogger" — blogging/magazine template
  (source: https://colorlib.com/wp/template/blogger/).
- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/blogger/
  (live preview DOM + `css/main.css` stylesheet fetched and parsed;
  TEMPLATES.md screenshot `blogger-free-blogging-website-template.jpg`
  used as visual cross-check).
- **Section order (1:1):** Navbar (Home, News, Travel, Fashion, Team, Pages
  dropdown) → Hero banner ("A Discount Toner Cartridge Is Better Than
  Ever." + Likes/Comments meta + author meta) → Category area ("Latest News
  from all categories", 3 cards + up/down carousel controls) → Travel area
  ("Hot topics from Travel Section", 2-col × 2-row media cards with date
  boxes) → Fashion area ("Fashion News This Week", 4-col card grid + Load
  More) → Team area ("About Blogger Team", carousel of team cards with
  hover overlay) → Footer (Top Products links + Newsletter + Instagram
  feed + social + copyright).
- **Design tokens extracted from `css/main.css` + preview DOM:**
  - Font: **"Poppins", sans-serif** (Google Fonts); body 300 weight, 14px,
    line-height 1.625em; headings 600 weight, `#222`.
  - Primary: **#69B4FD** (light blue: nav hover, selection, footer link
    hover, load-more border, team hover overlay base).
  - Brand gradient: **45deg `#62bdfc` → `#8490ff`** (primary buttons,
    hero overlay, footer social hover, gradient text on card-title hover).
  - Body text `#777` on `#fff`; headings `#222`.
  - Alt section backgrounds: `#f9f9ff` (travel, team sections).
  - Footer: background `#222222`, white text, social chips `#111111`.
  - Date chips: `#000` bg + white text (category/fashion cards); date
    boxes `#222` bg + white text (travel cards, big day number).
  - Buttons: `.primary-btn` = gradient pill (border-radius 25px, uppercase,
    font-weight 500, arrow icon that slides right on hover); `.load-more`
    = outline button (transparent, hover → 1px `#69B4FD` border + blue
    text).
  - Section gap: 120px vertical padding; centered section titles with
    subtitle paragraphs.
  - Navbar: white with soft shadow (`rgba(158,158,158,0.3)`), uppercase
    links (20px padding), blue hover, dropdown on "Pages".
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/quill-<n>/<w>/<h>`); icons → lucide-react; Poppins
  via Google Fonts `<link>`; brand colors + gradient in `@theme`; no
  assets copied.

Quill lives in `apps/quill` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Quill",
anchor links to the page's sections, a dropdown menu, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Quill page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Quill" and links Home,
  News, Travel, Fashion, Team, and Pages
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Pages dropdown

- **GIVEN** the navbar is rendered
- **WHEN** the user opens the Pages menu
- **THEN** the dropdown SHALL list Single, Category, Search, Archive,
  Generic, and Elements links

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero banner

The system SHALL render a full-screen hero banner with a background image,
a dark overlay, a headline, and a meta bar with likes/comments and author
information.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "A Discount Toner Cartridge
  Is Better Than Ever."
- **AND** it SHALL show the meta bar with likes, comments, the author name
  "Mark wiens", and a publication date

### Requirement: Category area

The system SHALL render a "Latest News from all categories" section with
three category cards, each with an image, a date chip, and a title, plus
carousel navigation controls.

#### Scenario: Category cards

- **GIVEN** the page is rendered
- **WHEN** the category section is displayed
- **THEN** it SHALL contain the heading "Latest News from all categories"
- **AND** it SHALL show three category cards with an image, a date chip
  (black background, white text), and a title

#### Scenario: Carousel controls

- **GIVEN** the category section is displayed
- **WHEN** the user activates the up/down controls
- **THEN** the visible category card SHALL change

### Requirement: Travel section

The system SHALL render a "Hot topics from Travel Section" area on a
`#f9f9ff` background with a two-column grid of media cards, each with a
date box, an image, a title, and post meta.

#### Scenario: Travel cards

- **GIVEN** the page is rendered
- **WHEN** the travel section is displayed
- **THEN** it SHALL contain the heading "Hot topics from Travel Section"
- **AND** it SHALL show at least four travel cards arranged in a two-column
  grid
- **AND** each card SHALL have a date box (dark background, day number and
  month), an image, a title, and post meta

### Requirement: Fashion section

The system SHALL render a "Fashion News This Week" section with a four-
column grid of fashion cards (image, date chip, title, meta) and a Load
More button.

#### Scenario: Fashion cards and load more

- **GIVEN** the page is rendered
- **WHEN** the fashion section is displayed
- **THEN** it SHALL contain the heading "Fashion News This Week"
- **AND** it SHALL show at least four fashion cards with image, date chip,
  title, and meta
- **AND** it SHALL show a "Load More" button

### Requirement: Team section

The system SHALL render an "About Blogger Team" section on a `#f9f9ff`
background with a blurb and a carousel of team cards whose images reveal
name and role on hover.

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain the heading "About Blogger Team" and a blurb
- **AND** it SHALL show at least two team cards with an image, name, and
  role
- **AND** hovering a team card SHALL reveal the member's name and role in
  an overlay

### Requirement: Footer

The system SHALL render a dark footer with a link column, a newsletter
signup form, an Instagram-style image grid, social links, and a copyright
line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Top Products" link column, a Newsletter form
  with a rounded input and a Subscribe button, and an image grid
- **AND** it SHALL show social links and a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the footer is displayed
- **WHEN** the user submits the newsletter form with a valid email
- **THEN** the form SHALL show a success message
- **AND** an invalid email SHALL show a per-field error

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Quill app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Quill — Blog Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-quill`
- [ ] 100% coverage (lines/functions/branches/statements) for `apps/quill`
- [ ] Per-app gate: `scripts/verify-app.sh quill` (typecheck + lint +
      coverage + build)
- [ ] Visual diff against `https://preview.colorlib.com/theme/blogger/`:
      section order, tokens (Poppins, #69B4FD, gradient, #f9f9ff, #222222
      footer), button shapes
- [ ] PR description includes: source template, preview URL, design
      tokens, what differs (name, seeded picsum images, lucide icons)
