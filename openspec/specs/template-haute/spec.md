# Template: Haute (Fashion App Landing)

## Purpose

Haute is a single-page fashion template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Instylr" design
(see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a hot-pink-accented fashion page: a dark charcoal header with
logo + nav (Home, the Brand, Portfolio, Shop, Blog, Contact), a full-screen
photo hero ("Style is forever" + outlined Read More), an intro split with a
fashion quote ("I firmly believe that with the right footwear one can rule
the world."), a portfolio grid of "See More" photo tiles, a "Recent Posts"
blog row (Paris Fashion Week, About Our Fashion App, Simple Blog Post), and a
white footer with About / Recent Posts / Useful Links / Contact columns.
Haute recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Instylr" — free fashion website template
  (source: https://colorlib.com/wp/template/instylr/). Recreated under the
  NEW name **Haute** (`apps/haute`, package `@free-react-templates/haute`).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/instylr/`
  (HTTP 200, 13.3KB) + stylesheet `css/style.css` (28.1KB) + TEMPLATES.md
  screenshot (`instylr-free-template.jpg`). The rendered DOM is the reference
  below.
- **Section order (1:1):**
  1. Header (`header-section`): dark navbar `#262626`, logo
     `In<span>Style</span>` (white 30px uppercase, pink span) + tagline
     "Fashion Forward" (9px, letter-spacing 0.29em, white 43%) + nav links
     (Home, the Brand, Portfolio, Shop, Blog, Contact — white uppercase,
     pink hover) + social icons right.
  2. Hero (`hero-section`): owl-carousel slider; every slide is a full-screen
     photo (974px tall) with h2 "Style is forever" and a `site-btn`
     (transparent, 3px white border, uppercase, min-width 186px, padding
     18px 40px) "Read More →" + dots + next/prev arrows.
  3. Intro (`intro-section spad`): split — image (col-lg-5) left, text
     (col-lg-7) right: pink uppercase label ("Aenean quis velit pulvinar,"),
     big quote h2, paragraph, `site-btn sb-dark` (3px black border, black
     text) "Read More →".
  4. Portfolio (`portfolio-section`): grid of `portfolio-item` links (image +
     hover: white 80% overlay + 15px black border + centered "See More" h4
     fading in).
  5. Blog (`blog-section spad`): "Recent Posts" + blog cards — photo
     (428px) with 77px white date badge (3px black border, "20 Jan"),
     overlapping white head block with pink uppercase tags ("Fashion, Event,
     Lifestyle"), navy title link (Paris Fashion Week / About Our Fashion
     App / Simple Blog Post, pink hover), excerpt.
  6. Footer (`footer-section`, white): About widget (logo + blurb + social
     icons pinterest/facebook/twitter/dribbble/behance), "Recent Posts"
     widget (3 items, pink dates "20 January 2019"), "Usefull Links" (6
     links), "Contact" (address/phone/mail) + copyright bar.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#ff006c** (hot pink — logo span, nav hover, tags, dates,
    social hovers, link hovers).
  - Header background: **#262626** (dark charcoal).
  - Headings/text: **#081624** (dark navy) on white sections; footer white.
  - Font: Helvetica Neue family (45 Light / 65 Medium / Bold) — recreated
    with a modern sans (Poppins + Roboto) via Google Fonts.
  - Buttons: `site-btn` outlined (3px solid border, transparent bg,
    uppercase, letter-spaced) — white border on hero, black border + black
    text (`sb-dark`) in the intro.
- **Recreation decisions:** repo-standard responsive Navbar (site name
  "Haute", full original nav links, social icons, mobile menu, dark-mode
  toggle) + Footer chrome; hero = seeded picsum fashion photo slider with
  dots + prev/next; intro split with quote; portfolio grid with seeded photo
  tiles + hover "See More"; blog cards with seeded photos + date badge +
  "Read More"; footer with link columns + social icons; all images
  picsum-seeded (`picsum.photos/seed/haute-N/w/h`); Google Fonts via
  `<link>`.

Haute lives in `apps/haute` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Haute", the
original nav links, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Haute page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Haute" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show the nav links "the Brand", "Portfolio", "Shop", "Blog" and "Contact"
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the mobile menu button
- **THEN** the nav links SHALL be reachable in the mobile menu
- **AND** pressing a menu link SHALL close the menu

### Requirement: Welcome hero

The system SHALL render a full-width photo hero section with a headline and a
"Read More" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "Style is forever"
- **AND** it SHALL show a "Read More" button

#### Scenario: Hero slider

- **GIVEN** the hero is rendered with multiple slides
- **WHEN** the user advances the slider
- **THEN** the visible slide SHALL change

### Requirement: Intro quote

The system SHALL render an intro section with a fashion quote.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show a quote (e.g. "I firmly believe that with the right footwear one can rule the world.")
- **AND** it SHALL show a "Read More" button

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
- **THEN** it SHALL show the site name "Haute"
- **AND** it SHALL show link columns (Useful Links, Contact)
