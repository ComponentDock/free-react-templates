# Template: Autoroad (Bootstrap Template)

## Purpose

Autoroad is a single-page car rental landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Autoroad" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Autoroad" — car rental website template
  (source: https://colorlib.com/wp/template/autoroad/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autoroad/ (HTTP
  200, full rendered DOM + `css/style.css` (79KB) extracted; the preview
  portal serves this non-Astro template directly — NOT in
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`autoraod-free-template.jpg`) is the visual reference; the design below
  is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Navbar (dark): "Autoroad" logo + nav (Home, About, Pricing, Our Car,
     Blog, Contact).
  2. Hero (image bg): h1 "Now It's easy for you rent a car", "Easy steps
     for renting a car", "Make your trip" CTA.
  3. Services: "Our Services" — 4 cards (24/7 Car Support, Lots of
     location, Reservation, Rental Cars).
  4. Cars: "Choose Your Car" — car cards (Mercedes Grand Sedan) with
     price "From ... /Day" + "Book now" / "Details".
  5. How it works (image bg): 4 steps (Pick Destination, Select Term,
     Choose A Car, Enjoy The Ride).
  6. Testimonials: "Happy Clients" — quotes (Roger Scott).
  7. Search: "Choose A Perfect Car" + "Search Vehicle".
  8. Blog: "Recent Blog" — 3 posts (Why Lead Generation is Key for
     Business Growth).
  9. Footer (dark): "About Autoroad" + Information / Customer Support /
     "Have a Questions?" columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange** #fc983c (primary) + **yellow** #f7b71d
    accents + dark #212529 headings; white sections.
  - Font: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed
    hero/how-it-works sections (replaced with seeded picsum placeholders).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/autoroad-<n>/<w>/<h>`); icons → lucide-react
  (Headphones, MapPin, CalendarCheck, Car, Map, ClipboardList, KeyRound,
  Star, Phone, Mail, Clock, ChevronRight, Search, Quote, Fuel, Gauge);
  Poppins via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.

Autoroad lives in `apps/autoroad` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Autoroad",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Autoroad page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Autoroad" and links to
  Pricing and Our Car
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a CTA.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Now It's easy for you rent a
  car"
- **AND** it SHALL show a "Make your trip" call to action

### Requirement: Services section

The system SHALL render a services section with four service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show cards for 24/7 Car Support, Lots of location, and
  Reservation

### Requirement: Cars section

The system SHALL render a car selection section with car cards.

#### Scenario: Cars content

- **GIVEN** the page is rendered
- **WHEN** the cars section is displayed
- **THEN** it SHALL contain a heading "Choose Your Car"
- **AND** it SHALL show at least one car card with a daily price and a
  "Book now" button

### Requirement: How it works section

The system SHALL render a how-it-works section with four steps.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "How it works"
- **AND** it SHALL show the steps Pick Destination, Select Term, and Choose
  A Car

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Clients"
- **AND** it SHALL show at least one testimonial quote

### Requirement: Search section

The system SHALL render a car search section with a search button.

#### Scenario: Search content

- **GIVEN** the page is rendered
- **WHEN** the search section is displayed
- **THEN** it SHALL contain a heading "Choose A Perfect Car"
- **AND** it SHALL show a "Search Vehicle" button

### Requirement: Blog section

The system SHALL render a recent blog section with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent Blog"
- **AND** it SHALL show at least three post cards

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Information, Customer Support) and a
  copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Autoroad app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Autoroad — Car Rental Template"
