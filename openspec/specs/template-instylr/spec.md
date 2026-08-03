# Template: Instylr (Fashion App Landing)

## Purpose

Instylr is a single-page fashion template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Instylr"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a hot-pink fashion page: a header with logo + nav (Home,
the Brand, Portfolio, Shop, Blog, Contact), a hero ("Style is forever"), an
intro section with a fashion quote ("I firmly believe that with the right
footwear one can rule the world."), a portfolio grid with "See More" tiles,
a blog section ("Recent Posts": Paris Fashion Week, About Our Fashion App,
Simple Blog Post), and a footer with Useful Links / Contact columns.
Instylr recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Instylr" — free fashion website template
  (source: https://colorlib.com/wp/template/instylr/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/instylr/`
  (HTTP 200, 13.3KB) + stylesheet `css/style.css` (28.1KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`instylr-free-template.jpg`) confirms the visual design (dark navy + hot
  pink, fashion photos).
- **Section order (1:1):**
  1. Header (`header-section`): logo "InStyle" + nav (Home, the Brand,
     Portfolio, Shop, Blog, Contact).
  2. Hero (`hero-section`): "Style is forever" headline.
  3. Intro (`intro-section spad`): fashion quote ("I firmly believe that
     with the right footwear one can rule the world.").
  4. Portfolio (`portfolio-section`): grid of fashion tiles with "See
     More" links.
  5. Blog (`blog-section spad`): "Recent Posts" + post cards (Paris
     Fashion Week, About Our Fashion App, Simple Blog Post) + "Read More"
     buttons.
  6. Footer (`footer-section`): Useful Links / Contact columns.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff006c** (hot pink — accents, buttons, highlights) +
    dark navy **#081624** (backgrounds); light **#f8f9fb** sections.
  - Font: Helvetica Neue family (45 Light / 65 Medium / Bold) — recreated
    with a modern sans (e.g. "Poppins") via Google Fonts.
  - Buttons: `site-btn` filled (hot pink) + `sb-dark` variant.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum fashion photo +
  headline; intro quote; portfolio grid with seeded photo tiles + "See
  More"; blog cards with seeded photos + "Read More"; footer with link
  columns; all images picsum-seeded (`picsum.photos/seed/instylr-N/w/h`);
  Google Fonts via `<link>`.

Instylr lives in `apps/instylr` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Instylr", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Instylr page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Instylr" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a headline (e.g. "Style is forever")

### Requirement: Intro quote

The system SHALL render an intro section with a fashion quote.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show a quote (e.g. "I firmly believe that with the right footwear one can rule the world.")

### Requirement: Portfolio grid

The system SHALL render a portfolio section with at least six tiles.

#### Scenario: Portfolio tiles

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL render at least six photo tiles
- **AND** each tile SHALL show a "See More" link

### Requirement: Recent posts

The system SHALL render a "Recent Posts" section with at least three post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Posts"
- **AND** it SHALL render at least three post cards (Paris Fashion Week, About Our Fashion App, Simple Blog Post)

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Instylr"
- **AND** it SHALL show link columns (Useful Links, Contact)
