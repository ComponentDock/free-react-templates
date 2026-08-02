# Template: Launch (App Landing Page)

## Purpose

Launch is a single-page product landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Launch"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Launch" — product landing page template
  (source: https://colorlib.com/wp/template/launch/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/launch/
  (HTTP 200, full rendered DOM + `css/style.css` (253KB) extracted).
  The TEMPLATES.md screenshot (`launch-free-template.jpeg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Auth modal (Welcome Back / Sign in + Sign up with
  Google/GitHub/email) → Navbar (Launch, Home, Dropdown, Testimonials,
  Features, Pricing, About, Contact + Sign in / Register) → Hero ("Promote
  Your Products by Colorlib" + blurb + See Features) → Pricing ("Digital
  Services / Selling Digital Services") → Features → Testimonials → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#407BFF`** (buttons, accents).
  - Dark text `#212529`, muted `#6c757d`; white backgrounds.
  - Font: **"Nunito"** (Google Fonts).
  - Blue rounded buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/launch-<n>/<w>/<h>`); icons → lucide-react; auth
  forms prevent default (no backend); no assets copied.

Launch lives in `apps/launch` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Launch",
anchor links to the page's sections, a "Sign in" link, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Launch page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Launch" and links to Home, Features, Pricing, and Contact
- **AND** the navbar SHALL show a "Sign in" link and a dark-mode toggle button

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
- **THEN** it SHALL contain a level-1 heading "Promote Your Products by Colorlib"
- **AND** it SHALL show a supporting blurb and a "See Features" button

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and at least one
plan.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Selling Digital Services"
- **AND** it SHALL show at least one pricing plan with a price and a purchase button

### Requirement: Auth modal

The system SHALL render a sign-in/sign-up modal accessible from the navbar.

#### Scenario: Sign-in form

- **GIVEN** the page is rendered
- **WHEN** the user opens the sign-in modal
- **THEN** it SHALL show a "Sign in" form with email and password fields and a submit button that does not navigate

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

- **GIVEN** the Launch app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Launch — App Landing Template"
