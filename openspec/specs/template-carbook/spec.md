# Template: Carbook (Bootstrap Template)

## Purpose

Carbook is a single-page car rental landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carbook" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Carbook" — car rental website template
  (source: https://colorlib.com/wp/template/carbook/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/carbook/ (HTTP
  200, full rendered DOM + `css/style.css` (268KB) extracted; the preview
  portal serves this non-Astro template directly — NOT in
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`carbook-free-template.jpg`) is the visual reference; the design below is
  reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Navbar (dark): "CarBook" logo + nav (Home, About, Services, Pricing,
     Cars, Blog, Contact).
  2. Hero (image bg): h1 "Fast & Easy Way To Rent A Car", "Easy steps for
     renting a car".
  3. Booking steps (bg-light): "Make your trip" — 4 steps (Better Way to
     Rent Your Perfect Cars, Choose Your Pickup Location, Select the Best
     Deal, Reserve Your Rental Car) + "Reserve Your Perfect Car".
  4. Featured vehicles: "Feeatured Vehicles" — car cards (Mercedes Grand
     Sedan $500/day) + "Book now" / "Details".
  5. About: "Welcome to Carbook" + "Search Vehicle".
  6. Services: "Our Latest Services" — 4 cards (Wedding Ceremony, City
     Transfer, Airport Transfer, Whole City Tour).
  7. Earn band (`ftco-intro`): "Do You Want To Earn With Us? So Don't Be
     Late." + "Become A Driver".
  8. Testimonials: "Happy Clients" — quotes (Roger Scott).
  9. Blog: "Recent Blog" — 3 posts (Why Lead Generation is Key for
     Business Growth) + "Read more".
  10. Footer (dark): "Carbook" + Information / Customer Support / "Have a
      Questions?" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **blue** #1089ff (primary) + **green** #01d28e (accent)
    - dark #212529 headings; white/light (#f8f9fa) sections.
  - Font: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed hero
    section (replaced with seeded picsum placeholders).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/carbook-<n>/<w>/<h>`); icons → lucide-react (Car,
  MapPin, BadgeDollarSign, CalendarCheck, KeyRound, Heart, Star, Phone,
  Mail, Clock, ChevronRight, Search, Quote, Gift, Plane, Building2, Map);
  Poppins via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.

Carbook lives in `apps/carbook` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "CarBook",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Carbook page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "CarBook" and links to
  Services and Cars
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Fast & Easy Way To Rent A
  Car"

### Requirement: Booking steps section

The system SHALL render a booking steps section with four steps.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the booking steps section is displayed
- **THEN** it SHALL show the steps Choose Your Pickup Location, Select the
  Best Deal, and Reserve Your Rental Car

### Requirement: Featured vehicles

The system SHALL render a featured vehicles section with car cards.

#### Scenario: Vehicles content

- **GIVEN** the page is rendered
- **WHEN** the vehicles section is displayed
- **THEN** it SHALL contain a heading "Feeatured Vehicles"
- **AND** it SHALL show at least one car card with a daily price and a
  "Book now" button

### Requirement: About section

The system SHALL render an about section with a search button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Welcome to Carbook"
- **AND** it SHALL show a "Search Vehicle" button

### Requirement: Services section

The system SHALL render a services section with four service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Latest Services"
- **AND** it SHALL show cards for Wedding Ceremony, City Transfer, and
  Airport Transfer

### Requirement: Driver CTA

The system SHALL render a driver recruitment band.

#### Scenario: Driver CTA content

- **GIVEN** the page is rendered
- **WHEN** the driver CTA is displayed
- **THEN** it SHALL show the earn-with-us headline
- **AND** it SHALL show a "Become A Driver" button

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Clients"
- **AND** it SHALL show at least one testimonial quote

### Requirement: Blog section

The system SHALL render a recent blog section with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent Blog"
- **AND** it SHALL show at least three post cards

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Information, Customer Support) and a
  copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Carbook app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "CarBook — Car Rental Template"
