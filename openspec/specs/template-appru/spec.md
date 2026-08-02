# Template: Appru (App Landing Page)

## Purpose

Appru is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appru"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Appru" — app landing / mobile app marketing site
  (source: https://colorlib.com/wp/template/appru/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appru/
  (HTTP 200, full rendered DOM + `css/main.css` (68KB) extracted).
  The TEMPLATES.md screenshot (`appru-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):** Navbar (Home, About, Pricing, Pages, Elements,
  Blog, Contact) → Hero ("App That Suits You Better" + blurb + "Available on
  App Store" / "Available on Play Store" + phone mockup) → Stats band
  (100K+ Total Downloads, 10K+ Positive Reviews, 50K+ Daily Visitors, 0.02%
  Uninstallation Rate, 15K+ Pro User) → Features ("Unique Features" + 3
  tiles: Expert Technicians, Professional Service, Great Support) → About
  ("We Believe that Interior beautifies the Total Architecture" + Get
  Details) → About-video (same heading + video play button + store buttons)
  → Testimonials (Fanny Spencer quote carousel) → Screenshots ("Featured
  Screens") → Pricing ("Suitable Pricing Plans" + Standard £199 / Business
  £399 / Ultimate £499 + Purchase Plan) → Footer (Top Products, Quick Links,
  Resources columns + copyright).
- **Design tokens extracted from `main.css`:**
  - Primary **gradient `linear-gradient(0deg, #46dbf9 0%, #204be3 100%)`**
    (cyan → blue) — buttons, accents, stat numbers.
  - Cyan `#46dbf9`; deep blue `#204be3`; light section backgrounds
    `#f9f9ff`, `#fcfdff`, `#f8fcff`.
  - Dark footer `#04091e` / `#222222`; muted text `#777777`.
  - Fonts: **"Poppins"** (headings) + **"Roboto"** (body) — Google Fonts.
  - Buttons: `.primary-btn` — height 50px, 45px side padding,
    **border-radius 0** (square), gradient background, white uppercase text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/appru-<n>/<w>/<h>`); icons → lucide-react; the
  phone mockup → stylized div/illustration; store badges → styled buttons
  with lucide icons; no assets copied.

Appru lives in `apps/appru` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Appru",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Appru page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Appru" and links to Home, About, Pricing, Features, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, a phone
mockup illustration, and two store buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "App That Suits You Better"
- **AND** it SHALL show a supporting blurb and a phone mockup illustration
- **AND** it SHALL show "App Store" and "Play Store" buttons

### Requirement: Stats band

The system SHALL render a stats band with five key figures.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show the figures 100K+ Total Downloads, 10K+ Positive Reviews, 50K+ Daily Visitors, 0.02% Uninstallation Rate, and 15K+ Pro User

### Requirement: Features section

The system SHALL render a features section with a heading and three feature
tiles, each with an icon, a title, and a blurb.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Unique Features" and a blurb
- **AND** it SHALL show tiles titled "Expert Technicians", "Professional Service", and "Great Support"

### Requirement: About sections

The system SHALL render two about sections (text/image and image/text)
sharing the heading "We Believe that Interior beautifies the Total
Architecture", each with a blurb and a call to action.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** an about section is displayed
- **THEN** it SHALL contain the heading "We Believe that Interior beautifies the Total Architecture"
- **AND** it SHALL show a blurb and a "Get Details" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with a customer quote.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a quote and the reviewer name "Fanny Spencer"

### Requirement: Screenshots section

The system SHALL render a screenshots section with a heading and a row of
screenshot placeholder images.

#### Scenario: Screenshots content

- **GIVEN** the page is rendered
- **WHEN** the screenshots section is displayed
- **THEN** it SHALL contain a heading "Featured Screens"
- **AND** it SHALL show at least three screenshot placeholder images

### Requirement: Pricing section

The system SHALL render a pricing section with three plans, each with a name,
an audience line, a price, a feature list, and a purchase button.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Suitable Pricing Plans"
- **AND** it SHALL show plans "Standard" (£199), "Business" (£399), and "Ultimate" (£499), each with a feature list and a "Purchase Plan" button

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns "Top Products" and "Quick Links" with their links
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Appru app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Appru — App Landing Template"
