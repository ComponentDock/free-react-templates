# Template: Apps (App Landing Page)

## Purpose

Apps is a single-page app landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Apps"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Apps" — app landing / software showcase site
  (source: https://colorlib.com/wp/template/apps/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/apps/
  (HTTP 200, full rendered DOM + `css/main.css` (37KB) extracted).
  The TEMPLATES.md screenshot (`apps-free-app-website-template.jpg`) is the
  visual reference; the design below is reconstructed from the DOM structure
  and CSS tokens.
- **Section order (1:1):** Navbar (Home, Service, feature, price, Faq,
  Pages, Generic, Elements) → Hero ("The Best App in the Universe" + blurb +
  Load More Item) → Categories ("Latest News from all categories" +
  Maintenance / Residental Service / Commercial Service) → About ("We
  Believe that Interior beautifies the Total Architecture" + see details) →
  Services ("Some Features that Made us Unique" + Expert Technicians /
  Professional Service / Great Support) → Video band ("Being unique is the
  preference" + play) → Features ("Some Features that Made us Unique") →
  Pricing ("Choose the Perfect Plan for you" + Standard £199 / Business
  £399 / Ultimate £499 + Purchase Plan) → FAQ + stats ("Frequently Asked
  Questions", 5962 Projects Completed, 2394 New Projects, 1439 Tickets
  Submitted, 933 Cup of Coffee, 3 Q&A) → CTA ("Download This App Today!" +
  App Store / Play Store) → Footer (Top Products, Newsletter, Instagram,
  copyright).
- **Design tokens extracted from `main.css`:**
  - Primary **cyan-blue `#42d1ff`** (buttons, accents) with supporting
    `#4cd3e3`, `#38a4ff`.
  - Light section backgrounds `#f9f9ff`, `#f1f1f1`; dark footer `#222222`;
    muted text `#777777`.
  - Font: **"Poppins"** (Google Fonts).
  - Buttons: `.primary-btn` — height 42px, 40px side padding,
    **border-radius 25px** (pill), white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/apps-<n>/<w>/<h>`); icons → lucide-react; the video
  band → styled play button (no actual video); FAQ → accessible disclosure
  accordion; no assets copied.

Apps lives in `apps/apps` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Apps",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Apps page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Apps" and links to Home, Service, Features, Pricing, and FAQ
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
- **THEN** it SHALL contain a level-1 heading "The Best App in the Universe"
- **AND** it SHALL show a supporting blurb and a "Load More Item" button

### Requirement: Categories section

The system SHALL render a categories section with a heading and three
category cards, each with an icon, a title, and a blurb.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL contain a heading "Latest News from all categories"
- **AND** it SHALL show cards titled "Maintenance", "Residental Service", and "Commercial Service"

### Requirement: About section

The system SHALL render an about section with the heading "We Believe that
Interior beautifies the Total Architecture", a blurb, and a details link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain the heading "We Believe that Interior beautifies the Total Architecture"
- **AND** it SHALL show a blurb and a "see details" link

### Requirement: Services section

The system SHALL render a services section with a heading and three service
tiles, each with an icon, a title, and a blurb.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Some Features that Made us Unique"
- **AND** it SHALL show tiles titled "Expert Technicians", "Professional Service", and "Great Support"

### Requirement: Video band

The system SHALL render a video band with a heading "Being unique is the
preference" and a play button.

#### Scenario: Video band content

- **GIVEN** the page is rendered
- **WHEN** the video band is displayed
- **THEN** it SHALL contain the heading "Being unique is the preference"
- **AND** it SHALL show a play button with an accessible label

### Requirement: Pricing section

The system SHALL render a pricing section with three plans, each with a
name, an audience line, a price, a feature list, and a purchase button.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose the Perfect Plan for you"
- **AND** it SHALL show plans "Standard" (£199), "Business" (£399), and "Ultimate" (£499), each with a feature list and a "Purchase Plan" button

### Requirement: FAQ and stats section

The system SHALL render a FAQ section with a heading, three questions, and a
stats row with four figures.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions" with at least three expandable questions
- **AND** it SHALL show stats for 5962 Projects Completed, 2394 New Projects, 1439 Tickets Submitted, and 933 Cups of Coffee

#### Scenario: FAQ toggle

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question
- **THEN** the answer SHALL expand and the question SHALL be marked expanded

### Requirement: Call-to-action band

The system SHALL render a download CTA with a heading, a blurb, and two
store buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Download This App Today!" and a blurb
- **AND** it SHALL show "App Store" and "Play Store" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form,
social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a "Top Products" link column and a newsletter form with a "Subscribe" button
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Apps app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Apps — App Landing Template"
