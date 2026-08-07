# Template: Showkit (App Landing Page)

## Purpose

Showkit is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "SuSan"
website template design (see TEMPLATES.md), built under a **different name**
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "SuSan" — app landing page template with demo
  showcase (source: https://colorlib.com/wp/template/susan/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/susan/
  (HTTP 200, full rendered DOM + `css/style.css` (6KB) extracted, live
  preview visually verified in-browser). The TEMPLATES.md screenshot
  (`susan-free-app-showcase-website-template.jpg`) confirms the design.
- **Section order (1:1):** Hero ("SuSan" headline + rotating tagline +
  blurb + View Demos / Buy buttons) → Home onepage Demos (2 cards:
  OnePage - 01, OnePage - 02) → Blog Page Demos (4 cards: Blog List - 01/02,
  Blog Details - 01/02) → Footer. The repo-standard Navbar (site name +
  dark-mode toggle) is added as shared chrome on top.
- **Design tokens extracted from `style.css` + visual check:**
  - Hero: full-width background image covered by a 150° gradient overlay
    **purple `#a640d0` → pink `#f8395d`** at ~70% opacity.
  - Accent **pink `#f8395d`** (button hover text, card caption hover bg).
  - White pill buttons: `#fff` bg, `#191919` text, `border-radius: 50px`,
    padding `15px 62px`, uppercase Montserrat 13px; hover text `#f8395d`.
  - Section headings: Open Sans 30px, uppercase, `#000`/`#191919`, centered.
  - Card captions: 15px `#4f4f4f`, centered; hover → `#f8395d` bg, white
    text, full card radius.
  - Light section `#f7f7f7`; footer `#161716` with centered copyright.
  - Fonts: **"Montserrat"** (body, buttons, hero h1) + **"Open Sans"**
    (subheadings, section titles) via Google Fonts `<link>`.
- **Recreation decisions:** demo mockup images → seeded picsum placeholders
  (`picsum.photos/seed/showkit-<n>/<w>/<h>`); icons → lucide-react; typed
  rotating tagline → simple static hero tagline (no typing library); no
  assets copied.

Showkit lives in `apps/showkit` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Showkit"
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Showkit page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Showkit"
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width gradient hero with a headline, a
tagline, a blurb, and two buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Showkit"
- **AND** it SHALL show the tagline "Showkit App Landing Page Template"
- **AND** it SHALL show the blurb "A Complete Landing Page and Multipurpose Package"
- **AND** it SHALL show "View Demos" and "Buy Showkit" buttons

### Requirement: Home onepage demos section

The system SHALL render a home onepage demo showcase with two demo cards.

#### Scenario: Home demo variants

- **GIVEN** the page is rendered
- **WHEN** the home demos section is displayed
- **THEN** it SHALL show a heading "Home onepage Demos"
- **AND** it SHALL list demo cards titled "OnePage - 01" and "OnePage - 02"

### Requirement: Blog page demos section

The system SHALL render a blog demo showcase with four demo cards.

#### Scenario: Blog demo variants

- **GIVEN** the page is rendered
- **WHEN** the blog demos section is displayed
- **THEN** it SHALL show a heading "Showkit Blog Page Demos"
- **AND** it SHALL list demo cards titled "Blog List - 01", "Blog List - 02",
  "Blog Details - 01", and "Blog Details - 02"

### Requirement: Footer

The system SHALL render a footer with a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Showkit app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Showkit — App Landing Template"
