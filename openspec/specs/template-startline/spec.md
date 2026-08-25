# Template: Startline (Business SaaS Template)

## Purpose

Startline is a single-page business/SaaS landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Startright" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Startright" — business/SaaS startup template
  (source: https://colorlib.com/wp/template/startright/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/startright/
  (HTTP 200, full rendered DOM + `css/style.css` (62KB) extracted).
  The TEMPLATES.md screenshot (`startright-free-template.jpg`) confirms the
  visual design: a dark teal hero with golden-orange brand accents, a
  corporate business aesthetic.
- **Section order (1:1):** Navbar (logo "Startright." + Home, Solutions
  dropdown, Plans & Pricing, Why Us, Contact Us) → Hero ("A big business
  starts small" + "Get started" CTA + illustration) → Logo strip ("As seen
  on" + 5 press logos) → Split section (illustration left + "A better way to
  run your business" list right, dark teal background) → Productivity section
  ("Productive with Startright" + testimonial, light bg) → Stats counter
  ("Stats" — Reviews/Downloads/Employees, dark teal bg) → Features (6 cards:
  Easy to use, Fast and Secure, Robust and Intuitive × 2, light bg) → Footer
  (Help, About, Support columns + Subscribe form + copyright).
- **Design tokens extracted from `css/style.css`:**
  - **Primary brand color: `#f2ad5f`** (golden/warm orange) — used on
    `.btn-primary`, `.logo`, `.ul-check.primary li:before`, and
    `.secion-1 .img-wrap` background.
  - **Secondary/dark color: `#10495c`** (dark teal) — used on `.hero`
    background, `.bg-secondary`, `.secion-1:after`, `.btn-secondary`.
  - **Font family: `"Poppins", sans-serif`** (Google Fonts, weights 400 + 700).
  - **Button radius: `0.25rem`** (4px). Feature card border-radius: `4px`.
  - **Hero heading: `font-size: 60px; font-weight: 700; color: #fff`**.
  - **Section heading: `font-size: 40px; font-weight: 700`**.
  - **Feature cards:** `border: 2px solid rgba(0,0,0,0.05); border-radius: 4px`.
  - **Logo strip background: light (#f8f9fa).**
  - **Stats section background: `#10495c` (dark teal), white text.**
  - **Footer background: light, with subscribe form and link columns.**
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/startline-<n>/<w>/<h>`); icons → lucide-react;
  illustration placeholders; Poppins via Google Fonts `<link>`; forms prevent
  default (no backend); golden-orange primary (`#f2ad5f`) + dark teal
  secondary (`#10495c`) in `@theme`; repo-standard Navbar (dark-mode toggle)
  - Footer chrome with Component Dock link.

Startline lives in `apps/startline` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Startline.",
dropdown-capable nav links, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Startline page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Startline." and links to Home, Solutions, Plans & Pricing, Why Us, and Contact Us
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile hamburger menu

- **GIVEN** the page is rendered on a narrow viewport (≤991px)
- **WHEN** the navbar is displayed
- **THEN** a hamburger menu button SHALL be visible
- **AND** clicking it SHALL open a mobile navigation overlay

### Requirement: Hero section

The system SHALL render a full-width hero with a dark teal background, a
headline, a CTA button, and an illustration area.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the heading "A big business starts small"
- **AND** it SHALL show a "Get started" CTA button with the golden-orange brand color
- **AND** it SHALL show an illustration area

#### Scenario: Hero visual style

- **GIVEN** the hero section is displayed
- **WHEN** the user views the section
- **THEN** the background SHALL be dark teal (`#10495c`)
- **AND** the heading SHALL be white, bold, 60px font size (40px on mobile)
- **AND** the CTA button SHALL have a golden-orange (`#f2ad5f`) background

### Requirement: Logo strip ("As seen on")

The system SHALL render a logo strip section with an "As seen on" heading and
five placeholder logo images.

#### Scenario: Logo strip content

- **GIVEN** the page is rendered
- **WHEN** the logo strip is displayed
- **THEN** it SHALL show an "As seen on" heading
- **AND** it SHALL show five logo placeholder images in a centered row

#### Scenario: Logo strip layout

- **GIVEN** the logo strip is displayed
- **WHEN** the user views the section
- **THEN** the logos SHALL be arranged in a responsive horizontal row
- **AND** the section SHALL have a light background

### Requirement: Split section ("A better way to run your business")

The system SHALL render a split section with an illustration on the left and
a content area on the right with a heading, description, checklist, and CTA
button, over a dark teal background overlay.

#### Scenario: Split section content

- **GIVEN** the page is rendered
- **WHEN** the split section is displayed
- **THEN** it SHALL show the heading "A better way to run your business"
- **AND** it SHALL show a description paragraph
- **AND** it SHALL show a three-item checklist with golden-orange check marks
- **AND** it SHALL show a "Get started" CTA button

#### Scenario: Split section layout

- **GIVEN** the split section is displayed
- **WHEN** the user views the section
- **THEN** the left side SHALL show an illustration with a golden-orange background
- **AND** the right side SHALL have a dark teal (`#10495c`) background overlay
- **AND** all text on the dark background SHALL be white or light gray

### Requirement: Productivity section

The system SHALL render a productivity/testimonial section with a heading,
description paragraphs, and a horizontal testimonial block.

#### Scenario: Productivity content

- **GIVEN** the page is rendered
- **WHEN** the productivity section is displayed
- **THEN** it SHALL show the heading "Productive with Startline"
- **AND** it SHALL show description paragraphs
- **AND** it SHALL show a testimonial with an author name and company

#### Scenario: Productivity layout

- **GIVEN** the productivity section is displayed
- **WHEN** the user views the section
- **THEN** the layout SHALL be a two-column split: text/testimonial on left, illustration on right
- **AND** the section SHALL have a light gray background (`#f8f9fa`)
- **AND** the testimonial author avatar SHALL be a circular image

### Requirement: Stats counter

The system SHALL render a stats counter section with a dark teal background
showing three stat counters (Reviews, Downloads, Employees).

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats counter is displayed
- **THEN** it SHALL show the heading "Stats"
- **AND** it SHALL show three stat items: Reviews, Downloads, Employees
- **AND** each stat SHALL display a large number with a label below

#### Scenario: Stats visual style

- **GIVEN** the stats counter is displayed
- **WHEN** the user views the section
- **THEN** the background SHALL be dark teal (`#10495c`)
- **AND** all text SHALL be white
- **AND** the numbers SHALL be large (display-5 size)

### Requirement: Features grid

The system SHALL render a features grid section with a centered heading and
six feature cards in a 3-column layout.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Features"
- **AND** it SHALL show six feature cards, each with an icon, title, and description
- **AND** the card titles SHALL include: "Easy to use", "Fast and Secure", "Robust and Intuitive" (each appearing twice)

#### Scenario: Features layout

- **GIVEN** the features section is displayed
- **WHEN** the user views the section
- **THEN** the cards SHALL be arranged in a 3-column grid (2 rows of 3)
- **AND** each card SHALL have a subtle border and 4px border-radius
- **AND** the heading SHALL use the dark teal secondary color

### Requirement: Footer

The system SHALL render a footer with three link columns, a subscribe form,
and a copyright line with a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show three link columns: Help, About, and Support
- **AND** it SHALL show a Subscribe section with an email input and Subscribe button
- **AND** it SHALL show a copyright line

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user views the footer
- **THEN** it SHALL include a link to `https://www.componentdock.com/` (branded "Component Dock")
- **AND** the footer SHALL NOT reference ColorLib

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Startline app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Startline — Business SaaS Template"

## Verification checklist

- [ ] `npm run spec:validate`
- [ ] `bash scripts/verify-app.sh startline` (typecheck + lint + 100% coverage tests + build)
- [ ] Screenshot review: dark teal hero, golden-orange brand, Poppins font, 6-section structure
