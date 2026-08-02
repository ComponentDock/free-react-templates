# Template: Favison (App Landing Page)

## Purpose

Favison is a single-page SaaS/business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Favison" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Favison" — SAAS / software landing page
  (source: https://colorlib.com/wp/template/favison/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/favison/
  (HTTP 200, full rendered DOM + `css/style.css` (75KB) extracted).
  The TEMPLATES.md screenshot (`favison-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, Features, Price, Pages, Blog,
  Contact + Sign Up) → Hero ("Build a better business & faster" + Begin
  Free Trial) → Services (Unique Design, Business Solution, Customer
  Support + Read More) → About ("Form Female From Cattle Evening." + Cloud
  Compatibility, On Time Delivery, Easy to Use, Mobile Application, Add New
  Project, Generating Leads) → Feature band ("Set dry signs spirit a kind
  First shall them.") → Pricing ("Our Pricing Plan" + Standard $25/month +
  Purchase) → Stats → Blog → Brands → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **pink/rose `#f84b67`** with **yellow `#f8b600`** accent.
  - Dark sections `#1d1d1d`, `#2a2a2a`; light `#f9f9ff`.
  - Font: **"Poppins"** (Google Fonts).
  - Rounded pink buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/favison-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Favison lives in `apps/favison` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Favison",
anchor links to the page's sections, a "Sign Up" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Favison page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Favison" and links to Home, Features, Pricing, and Contact
- **AND** the navbar SHALL show a "Sign Up" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"Begin Free Trial" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Build a better business & faster"
- **AND** it SHALL show a supporting blurb and a "Begin Free Trial" button

### Requirement: Services section

The system SHALL render a services section with three cards: "Unique
Design", "Business Solution", and "Customer Support", each with a blurb and
a "Read More" link.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show cards titled "Unique Design", "Business Solution", and "Customer Support" each with a "Read More" link

### Requirement: About/features section

The system SHALL render a features section with six tiles: "Cloud
Compatibility", "On Time Delivery", "Easy to Use", "Mobile Application",
"Add New Project", and "Generating Leads".

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show tiles titled "Cloud Compatibility", "On Time Delivery", "Easy to Use", "Mobile Application", "Add New Project", and "Generating Leads"

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and at least one
plan with a price and a purchase button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Our Pricing Plan"
- **AND** it SHALL show a "Standard" plan at $25/month with a feature list and a purchase button

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

- **GIVEN** the Favison app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Favison — App Landing Template"
