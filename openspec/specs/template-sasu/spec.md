# Template: Sasu (App Landing Page)

## Purpose

Sasu is a single-page app/digital-marketing landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sasu" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sasu" — app / digital marketing landing page
  (source: https://colorlib.com/wp/template/sasu/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sasu/
  (HTTP 200, full rendered DOM + `css/style.css` (151KB) extracted).
  The TEMPLATES.md screenshot (`sasu-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, feature, pricing, Blog, pages,
  Contact) → Hero ("Drive More Customers Through Digital" + Get Started /
  Sign up for free) → Feature tiles (A Volunteer x3) → Featured split
  ("featured" + 50k Total Volunteer, 100k Successed Mission + learn more) →
  Split ("Right people at the Right time." + get started / sing up free) →
  Who can use ("Who can use Sasu?") → Pricing → Reviews → Clients →
  Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0ab6ff`** (buttons, accents).
  - Light section backgrounds `#f9f9ff`, `#f0e9ff`.
  - Fonts: **"Poppins"** + **"Roboto"** (Google Fonts).
  - Blue buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sasu-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Sasu lives in `apps/sasu` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Sasu",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sasu page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Sasu" and links to Home, Features, Pricing, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and two
buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Drive More Customers Through Digital"
- **AND** it SHALL show "Get Started" and "Sign up for free" buttons

### Requirement: Featured split section

The system SHALL render a featured split section with a heading, a blurb,
two stats, and a "learn more" link.

#### Scenario: Featured content

- **GIVEN** the page is rendered
- **WHEN** the featured section is displayed
- **THEN** it SHALL show stats "50k Total Volunteer" and "100k Successed Mission"
- **AND** it SHALL show a "learn more" link

### Requirement: Split section

The system SHALL render a split section with the heading "Right people at
the Right time." and two buttons.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** the split section is displayed
- **THEN** it SHALL contain the heading "Right people at the Right time."
- **AND** it SHALL show "get started" and "sing up free" buttons

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and at least one
plan with a price and a purchase button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show at least one pricing plan with a price and a purchase button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sasu app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Sasu — App Landing Template"
