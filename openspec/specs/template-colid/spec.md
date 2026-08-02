# Template: Colid (App Landing Page)

## Purpose

Colid is a single-page business/promotional landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colid" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Colid" — business promotion landing page
  (source: https://colorlib.com/wp/template/colid/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/colid/
  (HTTP 200, full rendered DOM + `style.css` (19KB) extracted).
  The TEMPLATES.md screenshot (`colid-free-app-landing-page-website-template.jpg`)
  is the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, Service, Features, Pricing, Team,
  FAQ, Blog, Contact) → Hero ("It's all about Promoting your Business" +
  Watch video) → Feature highlights (EASY TO USE / AWESOEM DESIGN / EASY TO
  CUSTOMAIZE) → Feature rows (Easy to build, Easy to use, Easy to customize,
  Awesome design + Read more) → Feature icons (Lorem ipsum x4) → Special
  features ("SPECIAL FEATURES" + Creative Design, Unlimited Features, Full
  Free Chat, Retina ready, High Resolution, Clean Codes) → Pricing
  ("Afortable Price" + Basic $20 / STABDARD $39 + Purchase) → Team → FAQ →
  Testimonials → Clients → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#138fc2`** with light sky `#75cbe7` and `#2f60c3`.
  - Light/gray section backgrounds; white cards.
  - Font: **"Poppins"** (Google Fonts) + themify icons.
  - Blue rounded buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/colid-<n>/<w>/<h>`); icons → lucide-react; no assets
  copied.

Colid lives in `apps/colid` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Colid",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Colid page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Colid" and links to Home, Service, Features, Pricing, and FAQ
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Watch
video" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "It's all about Promoting your Business"
- **AND** it SHALL show a "Watch video" button

### Requirement: Feature highlight tiles

The system SHALL render three highlight tiles: "Easy to use", "Awesome
design", and "Easy to customize".

#### Scenario: Highlights content

- **GIVEN** the page is rendered
- **WHEN** the highlights are displayed
- **THEN** it SHALL show tiles titled "Easy to use", "Awesome design", and "Easy to customize" each with a blurb

### Requirement: Feature rows

The system SHALL render four feature rows (Easy to build, Easy to use, Easy
to customize, Awesome design), each with a blurb and a "Read more" link.

#### Scenario: Feature rows content

- **GIVEN** the page is rendered
- **WHEN** the feature rows are displayed
- **THEN** it SHALL show at least four rows with headings and "Read more" links

### Requirement: Special features section

The system SHALL render a special features section with a heading and six
feature tiles.

#### Scenario: Special features content

- **GIVEN** the page is rendered
- **WHEN** the special features section is displayed
- **THEN** it SHALL contain a heading "Special Features"
- **AND** it SHALL show tiles titled "Creative Design", "Unlimited Features", "Full Free Chat", "Retina Ready", "High Resolution", and "Clean Codes"

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and at least two
plans, each with a price and a purchase button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Affordable Price"
- **AND** it SHALL show a "Basic" plan at $20/month and a "Standard" plan at $39/month, each with a "Purchase" button

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

- **GIVEN** the Colid app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Colid — App Landing Template"
