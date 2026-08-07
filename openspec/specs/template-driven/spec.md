# Template: Driven (App Landing Page)

## Purpose

Driven is a single-page app/digital-marketing landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sasu" website template design (see TEMPLATES.md), built
under a DIFFERENT name ("Driven") with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sasu" — app / digital marketing landing page
  (source: https://colorlib.com/wp/template/sasu/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sasu/
  (HTTP 200, full rendered DOM extracted) + `css/style.css` (151KB)
  extracted. The TEMPLATES.md screenshot (`sasu-free-template.jpg`) is the
  visual reference; the design below is reconstructed from the live DOM
  structure and CSS tokens.
- **Section order (1:1, from live DOM):**
  1. Navbar (`header.main_menu.home_menu`): logo "sasu" + Home, feature,
     pricing, Blog, pages, Contact links.
  2. Hero (`section.banner_part`): h1 "Drive More Customers Through Digital"
     - blurb + **Get Started / Sign up for free** + banner image (right).
  3. Feature tiles (`section.feature_part`): left — **A Volunteer** x3
     (icon + title + blurb); right — small "featured" heading + blurb +
     **50k Total Volunteer / 100k Successed Mission** stats + **learn
     more** link.
  4. About split (`section.about_us`): h2 "Right people at the Right time."
     - blurb + **get started / sing up free** + about image (right).
  5. Who can use (`section.use_sasu`): h2 "Who can use Sasu?" + blurb +
     **A Volunteer** x3 cards (icons).
  6. Right-time split (`section.about_us.right_time`): h2 "Easy to Use
     Mobile Application" + blurb + **get started / sing up free** + about
     image (left).
  7. Pricing (`section.pricing_part`): h2 "Simple Pricing" + blurb + three
     **business** plans ($50.00 / $60.00 / $80.00 per mo; 2GB Bandwidth,
     Two Account, 15GB Storage, Sale After Service, 3 Host Domain, 24/7
     Support) + **Choose Plane** buttons.
  8. CTA (`section.cta_part`): h2 "Very useful Friendly" + blurb + **Get
     Started / Sign up for free**.
  9. Footer (`footer.footer_part`): About Us blurb + social icons; Contact
     Info (Address / Phone / Email); Important Link (WHMCS-bridge, Search
     Domain, My Account, Shopping Cart, Our Shop); Newsletter (blurb +
     email input + submit button); copyright line.
- **Design tokens extracted from `style.css`:**
  - Primary **blue `#0ab6ff`** (accents, links, focus rings).
  - Button gradient `linear-gradient(to left, #00b4ff 0%, #57ddff 51%,
#00b4ff 100%)` (`.btn_1` solid blue gradient; `.btn_2` outline with
    gradient fill on hover).
  - Light section backgrounds `#f9f9ff` (feature), `#f0e9ff` (CTA);
    muted text `#999999`, `#7f7f7f`; dark ink `#1a1a1a`.
  - Fonts: **"Poppins"** (headings) + **"Roboto"** (body) via Google Fonts
    `<link>`.
- **Copy fixes (paraphrase allowed):** "100k Successed Mission" →
  "100k Successful Missions"; "Choose Plane" → "Choose Plan"; "sing up
  free" → "Sign Up Free"; "Very useful Friendly" → "Very Useful &
  Friendly"; "Bsngladesh" → "Bangladesh"; product name in copy ("Who can
  use Sasu?") → "Who can use Driven?".
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/driven-<n>/<w>/<h>`); icons → lucide-react (brand
  icons as inline SVG); forms prevent default (no backend); footer email →
  `info@driven.dev`; no assets copied.

Driven lives in `apps/driven` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Driven",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Driven page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Driven" and links to Home, Features, Pricing, and Contact
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

### Requirement: Feature tiles section

The system SHALL render a feature tiles section with three "A Volunteer"
tiles, a featured split with two stats, and a "Learn More" link.

#### Scenario: Feature tiles content

- **GIVEN** the page is rendered
- **WHEN** the feature tiles section is displayed
- **THEN** it SHALL show three "A Volunteer" tiles with titles and blurbs

#### Scenario: Featured split content

- **GIVEN** the page is rendered
- **WHEN** the featured split is displayed
- **THEN** it SHALL show the stats "50k Total Volunteers" and "100k Successful Missions"
- **AND** it SHALL show a "Learn More" link

### Requirement: About split section

The system SHALL render a split section with the heading "Right people at
the Right time." and two buttons.

#### Scenario: About split content

- **GIVEN** the page is rendered
- **WHEN** the about split is displayed
- **THEN** it SHALL contain the heading "Right people at the Right time."
- **AND** it SHALL show "Get Started" and "Sign Up Free" buttons

### Requirement: Who can use section

The system SHALL render a "Who can use Driven?" section with three cards.

#### Scenario: Who can use content

- **GIVEN** the page is rendered
- **WHEN** the who-can-use section is displayed
- **THEN** it SHALL contain the heading "Who can use Driven?"
- **AND** it SHALL show three cards with titles and blurbs

### Requirement: Mobile split section

The system SHALL render a split section with the heading "Easy to Use
Mobile Application" and two buttons.

#### Scenario: Mobile split content

- **GIVEN** the page is rendered
- **WHEN** the mobile split is displayed
- **THEN** it SHALL contain the heading "Easy to Use Mobile Application"
- **AND** it SHALL show "Get Started" and "Sign Up Free" buttons

### Requirement: Pricing section

The system SHALL render a pricing section with a heading, a blurb, and three
plans with prices and purchase buttons.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show three plans priced $50.00, $60.00, and $80.00 per month
- **AND** each plan SHALL list its features and show a "Choose Plan" button

### Requirement: CTA section

The system SHALL render a call-to-action section with a heading, a blurb,
and two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain the heading "Very Useful & Friendly"
- **AND** it SHALL show "Get Started" and "Sign up for free" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form,
social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show "About Us", "Contact Info", "Important Link", and "Newsletter" columns
- **AND** the newsletter form SHALL accept an email and submit without a backend
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Driven app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Driven — App Landing Template"
