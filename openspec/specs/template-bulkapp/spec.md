# Template: BulkApp (App Landing Page)

## Purpose

BulkApp is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "BulkApp"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "BulkApp" — app landing / software showcase site
  (source: https://colorlib.com/wp/template/bulkapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/bulkapp/
  (HTTP 200, full rendered DOM + `css/style.css` (71KB) extracted).
  The TEMPLATES.md screenshot (`bulkapp-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and CSS
  tokens.
- **Section order (1:1):** Navbar (Home, FEATURES, VIDEO, PRICING, SCREENS,
  Pages, Elements, Blog, Contact) → Hero ("The Best App in the Universe" +
  blurb + Explore Now) → Features ("Unique Features" + 4 tiles: Maintenance
  x4) → About splits (2 x "We Believe that Interior beautifies the Total
  Architecture" + See Details) → Pricing ("Pricing Table" + Standard £199 +
  Purchase Plan) → Screenshots ("Unique Screenshots") → Testimonials
  ("Testimonials" + Mark Alviro Wiens — CEO at Google) → Download CTA
  (download_app_area) → Latest news (latest_news_area) → Footer.
- **Design tokens extracted from `style.css`:**
  - Primary **purple gradient `#7249fb` → `#bc2bff`** (buttons, accents)
    with `#6247ea` supporting.
  - Light section backgrounds `#f9f9ff`; dark footer `#222222`.
  - Fonts: **"Open Sans"** + **"Roboto"** (Google Fonts).
  - Purple gradient buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/bulkapp-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

BulkApp lives in `apps/bulkapp` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "BulkApp",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the BulkApp page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "BulkApp" and links to Home, Features, Pricing, and Screens
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, a phone
mockup illustration, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "The Best App in the Universe"
- **AND** it SHALL show a supporting blurb and an "Explore Now" button

### Requirement: Features section

The system SHALL render a features section with a heading and four feature
tiles, each with an icon, a title, and a blurb.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Unique Features" and a blurb
- **AND** it SHALL show at least four tiles each with a title and a blurb

### Requirement: About sections

The system SHALL render two about sections sharing the heading "We Believe
that Interior beautifies the Total Architecture", each with a blurb and a
"See Details" link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** an about section is displayed
- **THEN** it SHALL contain the heading "We Believe that Interior beautifies the Total Architecture"
- **AND** it SHALL show a blurb and a "See Details" link

### Requirement: Pricing section

The system SHALL render a pricing section with a heading, a plan with a
name, an audience line, a price, a feature list, and a purchase button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Pricing Table"
- **AND** it SHALL show a "Standard" plan for "the individuals" at £199 with a feature list and a "Purchase Plan" button

### Requirement: Screenshots section

The system SHALL render a screenshots section with a heading and a row of
screenshot placeholder images.

#### Scenario: Screenshots content

- **GIVEN** the page is rendered
- **WHEN** the screenshots section is displayed
- **THEN** it SHALL contain a heading "Unique Screenshots"
- **AND** it SHALL show at least three screenshot placeholder images

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a quote, and
a reviewer.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Testimonials"
- **AND** it SHALL show a quote from "Mark Alviro Wiens", CEO at Google

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

- **GIVEN** the BulkApp app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "BulkApp — App Landing Template"
