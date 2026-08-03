# Template: Automotive (Bootstrap Template)

## Purpose

Automotive is a single-page auto garage / car service landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Automotive" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Automotive" — auto garage / car service website
  template (source: https://colorlib.com/wp/template/automotive/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/automotive/
  (HTTP 200, full rendered DOM + `css/style.css` (43KB) extracted; the
  preview portal serves this non-Astro template directly — it is NOT in
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`automotive-free-template.jpg`) is the visual reference; the design below
  is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Header: logo + nav (Home, Services, Shop, Pages, About Us, Services
     Details, Shop Details, Blog Details, Contact, Blog) + "Find us on
     map" link.
  2. Hero (`hero set-bg`): "Welcome To Auto-Motive Garage" + blurb +
     "Our Services" button.
  3. Services: "What We Do?" — 4 cards (Engine Overhaul, Power Steering,
     Oil change, Upgrades Car).
  4. Choose us: "We Have 20 Years Of Experience In Auto Car" + blurb +
     "About Us" button.
  5. Products: "Our Products" — 4 product cards (High Flow Fuel, Revolution
     Wheels, Tone Interior Kit, Matte Gunmetal) + "+Add To Cart".
  6. Counter band (`counter set-bg`): "About Our Statistics" — 4 counters
     (560 All Project, Project Completed, Customers Action, Awards Winner).
  7. Latest news: "Latest News" — 3 posts (Benjamin Franlin Method, By
     Brian Gardner) + "Continue Reading".
  8. Footer (`set-bg`): "Booking Repair" + Appointment form; "Contact Us
     Now!" 123-4567-7890; Location "Find us on map" + Contact Us;
     Quick Link / News / My Office columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **indigo** #5F67FF (primary, buttons/accents) + dark
    gray #353535/#323232 (headings) + #727171 body text; white sections.
  - Font: **"Public Sans"** (Public Sans, sans-serif) via Google Fonts.
  - Shapes: flat cards with icon bubbles, filled rounded buttons; hero and
    counter/footer sections use background images (replaced with seeded
    picsum placeholders).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/automotive-<n>/<w>/<h>`); icons → lucide-react
  (Wrench, Settings, Droplet, Gauge, Fuel, Cog, Gift, Star, Phone, Mail,
  MapPin, Clock, CalendarCheck, ShoppingCart, ChevronRight, Newspaper);
  Public Sans via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.

Automotive lives in `apps/automotive` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Auto-Motive", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Automotive page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Auto-Motive" and links to
  Services and Shop
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a services
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Welcome To Auto-Motive
  Garage"
- **AND** it SHALL show an "Our Services" button

### Requirement: Services section

The system SHALL render a services section with four service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Do?"
- **AND** it SHALL show cards for Engine Overhaul, Power Steering, and Oil
  change

### Requirement: Experience section

The system SHALL render an experience section with an about button.

#### Scenario: Experience content

- **GIVEN** the page is rendered
- **WHEN** the experience section is displayed
- **THEN** it SHALL contain a heading "We Have 20 Years Of Experience In
  Auto Car"
- **AND** it SHALL show an "About Us" button

### Requirement: Products section

The system SHALL render a products section with product cards.

#### Scenario: Products content

- **GIVEN** the page is rendered
- **WHEN** the products section is displayed
- **THEN** it SHALL contain a heading "Our Products"
- **AND** it SHALL show at least four product cards with an "Add To Cart"
  button

### Requirement: Statistics section

The system SHALL render a statistics section with four counters.

#### Scenario: Statistics content

- **GIVEN** the page is rendered
- **WHEN** the statistics section is displayed
- **THEN** it SHALL contain a heading "About Our Statistics"
- **AND** it SHALL show four counters such as "All Project" and "Awards
  Winner"

### Requirement: News section

The system SHALL render a latest news section with blog post cards.

#### Scenario: News content

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL contain a heading "Latest News"
- **AND** it SHALL show at least three post cards with a "Continue Reading"
  link

### Requirement: Appointment section

The system SHALL render an appointment booking section with a contact phone
number.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show a "Booking Repair" heading and an appointment form
- **AND** it SHALL show the contact number "123-4567-7890"

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Quick Link, News, My Office) and a
  copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Automotive app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Auto-Motive — Garage Template"
