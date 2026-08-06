# Template: Synapse (SaaS Landing Page)

## Purpose

Synapse is a single-page SaaS landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Nexus"
website template design (see TEMPLATES.md), built under a **different name**
(Synapse) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Nexus" — SaaS software landing page
  (source: https://colorlib.com/wp/template/nexus/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/nexus/
  (HTTP 200, full rendered DOM + `css/style.css` (66KB) extracted).
  The TEMPLATES.md screenshot (`nexus-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the live DOM structure
  and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Pages, Pricing,
  Elements, Blog, Contact + "Free Trial" button) → Hero ("Mass People
  Oriented Software" + Get Started / Download) → How It Works ("How It work
  for you" + tiles: Easy to use, Unlimited Colors, Unique Features) → CTA
  split ("We've made a life that will change you" + "We are here to listen
  from you deliver exellence" + Get Started Now) → Screenshots ("Unique
  Screens that work perfectly") → CTA split (repeat) → Pricing ("Choose Your
  Price Plan" + Real Basic $39 / Real Standard $69 / Real Premium + Get
  Started) → Testimonials ("Feedback from Customers" + author "Mark Alviro
  Wiens") → CTA split (white variant) → Impress ("Got Impressed to our
  features?" + "Request Free Demo") → Footer.
- **Design tokens extracted from `css/style.css` (66KB):**
  - Primary **blue `#3bacf0`** with **cyan `#62ddff`** and deep blue
    `#4dabff`; yellow `#f8b600` accent.
  - Dark sections `#222222`; light `#f9f9ff`.
  - Fonts: **"Heebo"** + **"Roboto"** (Google Fonts).
  - Blue buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/synapse-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Synapse lives in `apps/synapse` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Synapse",
anchor links to the page's sections, a "Free Trial" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Synapse page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Synapse" and links to Home, About, Services, Pricing, and Contact
- **AND** the navbar SHALL show a "Free Trial" button and a dark-mode toggle button

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
- **THEN** it SHALL contain a level-1 heading "Mass People Oriented Software"
- **AND** it SHALL show "Get Started" and "Download" buttons

### Requirement: How-it-works section

The system SHALL render a how-it-works section with a heading and three
feature tiles.

#### Scenario: How-it-works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "How It work for you"
- **AND** it SHALL show tiles titled "Easy to use", "Unlimited Colors", and "Unique Features"

### Requirement: CTA splits

The system SHALL render at least two CTA splits with the heading "We've made
a life that will change you", a blurb, and a "Get Started Now" button.

#### Scenario: CTA split content

- **GIVEN** the page is rendered
- **WHEN** a CTA split is displayed
- **THEN** it SHALL contain the heading "We've made a life that will change you"
- **AND** it SHALL show a blurb and a "Get Started Now" button

### Requirement: Screenshots section

The system SHALL render a screenshots section with a heading and a row of
screenshot placeholder images.

#### Scenario: Screenshots content

- **GIVEN** the page is rendered
- **WHEN** the screenshots section is displayed
- **THEN** it SHALL contain a heading "Unique Screens that work perfectly"
- **AND** it SHALL show at least three screenshot placeholder images

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and at least three
plans, each with a monthly price and a "Get Started" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Price Plan"
- **AND** it SHALL show plans including "Real Basic" at "$39" and "Real Standard" at "$69"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least
one customer quote with an author name.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Feedback from Customers"
- **AND** it SHALL show a quote attributed to "Mark Alviro Wiens"

### Requirement: Impress section

The system SHALL render an impress section with a heading and a "Request Free
Demo" button.

#### Scenario: Impress content

- **GIVEN** the page is rendered
- **WHEN** the impress section is displayed
- **THEN** it SHALL contain a heading "Got Impressed to our features?"
- **AND** it SHALL show a "Request Free Demo" button

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

- **GIVEN** the Synapse app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Synapse — SaaS Landing Template"
