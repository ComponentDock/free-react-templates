# Template: Bold (App Landing Page)

## Purpose

Bold is a single-page startup/marketing landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Bold" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Bold" — startup / software marketing landing page
  (source: https://colorlib.com/wp/template/bold/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/bold/
  (HTTP 200, full rendered DOM + `css/style.css` (27KB) extracted).
  The TEMPLATES.md screenshot (`bold-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Dropdown, Inner Page, Contact us,
  Free Templates) → Hero ("Another cool free template by the fine folks at
  colorlib" + blurb + CTA) → Achievements (0 M+ Members, 0 K+ Likes, 0 K+
  Share) → Brand trust ("Leading brands trust Bold for good" + 3 columns) →
  Feature rows (3 x "Far far away Behind the Word Mountains" + Learn more)
  → Testimonial ("Join over 1M+ people who enjoy using our app" + Kayla
  Bryant, Social Media Manager) → Form ("Fill out the form" + Company size
  1/2/3+) → Footer (About, Solutions, Why Bold, Resources, Company +
  Terms & Conditions, Privacy Policy).
- **Design tokens extracted from `style.css`:**
  - Primary **coral/orange `#ff926b`** (buttons, accents, highlights) with
    lighter `#ffa585`.
  - Light section backgrounds `#f8f9fa`, `#f9f9f9`; dark text `#000`.
  - Font: **"Raleway"** (Google Fonts).
  - Rounded buttons with coral background and white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/bold-<n>/<w>/<h>`); icons → lucide-react; form
  prevents default (no backend); no assets copied.

Bold lives in `apps/bold` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Bold",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Bold page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Bold" and links to Home, About, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Another cool free template by the fine folks at colorlib"
- **AND** it SHALL show a supporting blurb and a call-to-action button

### Requirement: Achievements section

The system SHALL render an achievements section with three metrics.

#### Scenario: Achievements content

- **GIVEN** the page is rendered
- **WHEN** the achievements section is displayed
- **THEN** it SHALL show metrics for Members, Likes, and Share

### Requirement: Brand trust section

The system SHALL render a brand trust section with a heading and three
columns.

#### Scenario: Brand trust content

- **GIVEN** the page is rendered
- **WHEN** the brand trust section is displayed
- **THEN** it SHALL contain a heading "Leading brands trust Bold for good"
- **AND** it SHALL show three columns each with a heading and a blurb

### Requirement: Feature rows

The system SHALL render three alternating feature rows, each with a heading,
a blurb, and a "Learn more" button.

#### Scenario: Feature row content

- **GIVEN** the page is rendered
- **WHEN** a feature row is displayed
- **THEN** it SHALL show a heading, a blurb, and a "Learn more" button

### Requirement: Testimonial section

The system SHALL render a testimonial section with a heading, a quote, and
a reviewer.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL contain a heading "Join over 1M+ people who enjoy using our app"
- **AND** it SHALL show a quote from "Kayla Bryant", Social Media Manager

### Requirement: Contact form

The system SHALL render a contact form with a heading, a company-size
selector, and a submit button.

#### Scenario: Form content

- **GIVEN** the page is rendered
- **WHEN** the contact form is displayed
- **THEN** it SHALL contain a heading "Fill out the form" and a company-size selector
- **AND** it SHALL show a submit button that does not navigate on submit

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns for about, solutions, and company
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Bold app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Bold — App Landing Template"
