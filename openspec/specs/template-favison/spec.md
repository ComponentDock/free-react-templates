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
  (HTTP 200 — full rendered DOM + `css/style.css` (75 KB) extracted;
  Bootstrap 4 + themify icon fonts). The TEMPLATES.md screenshot
  (`favison-free-template.jpg`) matches this reconstruction.
- **Section order (1:1):**
  1. Navbar (`header_area`): logo "Favison SAAS" + Home, Features, Price,
     Pages, Blog, Contact + "Sign Up" button.
  2. Hero (`home_banner_area`): "Build a better business & faster" + blurb +
     "Begin Free Trial" button.
  3. Services (`service-area`): "Unique Design", "Business Solution",
     "Customer Support" (icon + blurb + "Read More" link).
  4. About (`about-area`): "Form Female From Cattle Evening." + blurb + six
     tiles: "Cloud Compatibility", "On Time Delivery", "Easy to Use",
     "Mobile Application", "Add New Project", "Generating Leads".
  5. Feature band (`feature-area bg_one`): dark band, right-aligned
     "Easy to Use Mobile Application" heading + two rows: "Add New
     Project", "Generating Leads".
  6. Pricing (`pricing_area`): "Our Pricing Plan" + "Standard $25 / month"
     (2GB Bandwidth, Two Account, 15GB Storage, Sale After Service, 3 Host
     Domain, 24/7 Support) + Business $35, Premium $45, Ultimate $55 +
     "Purchase Now" buttons.
  7. Stats split (`statics-area`): image + "Form Female From Cattle
     Evening." + blurb + three icon rows ("Set dry signs spirit a kind
     First shall them.", "He two face one moved dominion man you're
     likeness", "Sea forth fill have divide be dominion from life").
  8. Blog (`latest-blog-area`): "Read Our Latest News" + three post cards
     (category, date, title, comments count).
  9. Brands (`brands-area`): client logo strip.
  10. Footer (`footer-area`): About Us / Contact Info / Important Link /
      Newsletter columns + social icons + copyright.
- **Design tokens extracted from `style.css` (fresh re-verification):**
  - Primary **pink/rose `#f84b67`** (41 refs — buttons, accents,
    headings) with **yellow `#f8b600`** accent.
  - Dark sections **`#1d1d1d`** / **`#2a2a2a`**; light sections
    **`#f9f9ff`** / **`#f0e9ff`**; muted text **`#888888`** /
    **`#999999`**.
  - Secondary accents: cyan **`#4cd3e3`**, yellow **`#f4e700`**.
  - Font: **"Poppins"** (Google Fonts).
  - Rounded pink buttons with white text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/favison-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

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

### Requirement: Feature band

The system SHALL render a dark feature band with a heading, a blurb, and
two feature rows.

#### Scenario: Feature band content

- **GIVEN** the page is rendered
- **WHEN** the feature band is displayed
- **THEN** it SHALL contain a heading "Easy to Use Mobile Application"
- **AND** it SHALL show "Add New Project" and "Generating Leads" rows with blurbs

### Requirement: Stats split

The system SHALL render a stats split section with an image, a heading, a
blurb, and three icon rows.

#### Scenario: Stats split content

- **GIVEN** the page is rendered
- **WHEN** the stats split is displayed
- **THEN** it SHALL contain the heading "Form Female From Cattle Evening."
- **AND** it SHALL show three icon rows with labels

### Requirement: Blog section

The system SHALL render a blog section with a heading and at least three
post cards, each with a category, a date, and a title.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Read Our Latest News"
- **AND** it SHALL show at least three post cards with category, date, and title

### Requirement: Brands strip

The system SHALL render a strip of client logo tiles between the blog and
the footer.

#### Scenario: Brands content

- **GIVEN** the page is rendered
- **WHEN** the brands strip is displayed
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

- **GIVEN** the Favison app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Favison — App Landing Template"
- **AND** the page SHALL show the "Easy to Use Mobile Application" feature band and the "Read Our Latest News" blog heading
