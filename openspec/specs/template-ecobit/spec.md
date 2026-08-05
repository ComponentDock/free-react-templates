# Template: Ecobit (App Landing Page)

## Purpose

Ecobit is a single-page app/business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ecobit" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ecobit" — app / networking landing page
  (source: https://colorlib.com/wp/template/ecobit/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ecobit/
  (HTTP 200 — full rendered DOM + `css/style.css` (161 KB) extracted;
  Bootstrap 4 + owl.carousel + slick + flaticon/themify icon fonts).
  The TEMPLATES.md screenshot (`ecobit-free-template.jpg`) matches this
  reconstruction.
- **Section order (1:1):**
  1. Navbar (`main_menu`): logo "ecobit" + Home, Features, Pricing, Blog,
     Pages, Elements, Contact + "Sing Up" button.
  2. Hero (`banner_part`): "Building Networks For People" + blurb + "try
     for free" button.
  3. Feature tiles (`use_sasu`): "Fully Secured", "Unique Design", "A
     Volunteer" (icon + title + blurb; original repeats lorem copy).
  4. Split (`about_us`): "Easy To Access Social Media" + blurb + "learn
     more" link.
  5. Split (`about_us right_time`): "With efficiency to unlock more
     opportunities" + blurb + "learn more" link.
  6. Pricing (`pricing_part`): "Simple Pricing" + "Standard $50.00 / mo"
     (2GB Bandwidth, Two Account, 15GB Storage, Sale After Service, 3 Host
     Domain, 24/7 Support) + "Business" plan + "Purchase Now" buttons.
  7. Reviews (`review_part`): quote carousel with attribution.
  8. Subscribe (`subscribe_part`): "Experience the most simple way to
     manage business" + free-trial blurb + email + subscribe button.
  9. Clients (`client_logo`): client logo strip.
  10. Footer (`footer_part`): About Us / Quick Links columns + social
      icons + copyright.
- **Design tokens extracted from `style.css` (fresh re-verification):**
  - Primary **orange `#ff4800`** (57 refs — buttons, accents, headings).
  - Light section backgrounds **`#f9f9ff`** and **`#f0e9ff`**; dark text
    **`#182028`**; muted body text **`#888888`** / **`#999999`**.
  - Secondary accents: cyan **`#4cd3e3`**, blue **`#38a4ff`**, purple
    **`#7c32ff`**, yellow **`#f4e700`**.
  - Fonts: **"Barlow Semi Condensed"** + **"Rajdhani"** (Google Fonts).
  - Orange buttons with white text, square-ish (small radius).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ecobit-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Ecobit lives in `apps/ecobit` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Ecobit",
anchor links to the page's sections, a "Sign up" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Ecobit page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Ecobit" and links to Home, Features, Pricing, and Contact
- **AND** the navbar SHALL show a "Sign up" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
"try for free" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Building Networks For People"
- **AND** it SHALL show a supporting blurb and a "try for free" button

### Requirement: Feature tiles

The system SHALL render three feature tiles: "Fully Secured", "Unique
Design", and "A Volunteer", each with an icon and a blurb.

#### Scenario: Feature tiles content

- **GIVEN** the page is rendered
- **WHEN** the feature tiles are displayed
- **THEN** it SHALL show tiles titled "Fully Secured", "Unique Design", and "A Volunteer"

### Requirement: Split sections

The system SHALL render two split sections with headings "Easy To Access
Social Media" and "With efficiency to unlock more opportunities", each with
a blurb and a "learn more" link.

#### Scenario: Split content

- **GIVEN** the page is rendered
- **WHEN** a split section is displayed
- **THEN** it SHALL contain one of the split headings
- **AND** it SHALL show a blurb and a "learn more" link

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and at least two
plans, each with a price and a purchase button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple Pricing"
- **AND** it SHALL show a "Standard" plan at $50.00/month and a "Business" plan, each with a feature list and a "Purchase Now" button

### Requirement: Reviews section

The system SHALL render a reviews carousel with quotes and navigation
controls.

#### Scenario: Reviews content

- **GIVEN** the page is rendered
- **WHEN** the reviews section is displayed
- **THEN** it SHALL show a quote with an attribution
- **AND** the visible quote SHALL change when the next arrow is pressed

### Requirement: Subscribe band

The system SHALL render a subscribe band with a heading, a blurb, an email
input, and a subscribe button.

#### Scenario: Subscribe content

- **GIVEN** the page is rendered
- **WHEN** the subscribe band is displayed
- **THEN** it SHALL contain the heading "Experience the most simple way to manage business"
- **AND** it SHALL show an email input and a subscribe button
- **AND** submitting the form SHALL NOT reload the page

### Requirement: Clients strip

The system SHALL render a strip of client logo tiles between the subscribe
band and the footer.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients strip is displayed
- **THEN** it SHALL show at least four client logo tiles

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

- **GIVEN** the Ecobit app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Ecobit — App Landing Template"
