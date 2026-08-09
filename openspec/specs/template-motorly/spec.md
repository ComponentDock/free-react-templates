# Template: Motorly (Auto Garage / Car Service Landing)

## Purpose

Motorly is a single-page auto garage / car service landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Automotive" website template design (see TEMPLATES.md), built
under a DIFFERENT name (Motorly — "motor", evoking the automotive/garage
theme, plus the friendly "-ly" suffix matching the naming family convention:
Deskly, Roamly, Vaultly, Nestly; re-branded) per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Automotive" — auto garage / car service website
  template (source: https://colorlib.com/wp/template/automotive/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/automotive/
  (HTTP 200, full rendered DOM + `css/style.css` (42.6KB) extracted
  2026-08-09; the preview portal serves this non-Astro template directly).
  The TEMPLATES.md screenshot (`automotive-free-template.jpg`) was also
  inspected visually: dark top bar, white nav, image hero with indigo CTA,
  icon-bubble service cards.
- **Section order (1:1):**
  1. Header: dark top bar (phone (+123) 4567-7890-123, hours
     "Mon-Sat: 10:00 - 16:00 / Sunday Close", "Find us on map" link) + white
     nav (logo + menu: Home, Services, Shop, Pages, About Us, Services
     Details, Shop Details, Blog Details, Contact, Blog) + search/cart/user
     icons.
  2. Hero (`hero set-bg`): "Welcome To Auto-Motive Garage" (60px white h2) +
     blurb + "Our Services" button.
  3. Services (`services spad`): "What We Do?" — 4 icon-bubble cards (Engine
     Overhaul, Power Steering, Oil change, Upgrades Car).
  4. Choose us (`chooseus`): "We Have 20 Years Of Experience In Auto Car" +
     blurb + "About Us" button + image (`chooseus-pic.jpg`).
  5. Products (`products spad`): "Our Products" — 4 product cards with
     images (High Flow Fuel, Revolution Wheels, Tone Interior Kit, Matte
     Gunmetal), price $800.00 + "+Add To Cart".
  6. Counter band (`counter set-bg`): "About Our Statistics" — 4 counters
     (560+ All Project, Project Completed, Customers Action, Awards Winner).
  7. Latest news (`latest spad`): "Latest News" — 3 post cards (Benjamin
     Franlin Method, By Brian Gardner on April 1, 2017) + "Continue Reading".
  8. Footer (`footer set-bg`): "Booking Repair" + Appointment form; "Contact
     Us Now!" 123-4567-7890; Location "Find us on map" + Contact Us; Quick
     Link / News / My Office columns + copyright.
- **Design tokens extracted from the DOM + CSS (`css/style.css`):**
  - Brand colors: **indigo #5F67FF** (primary, buttons/accents,
    border-color) + dark gray #353535/#323232 (headings) + #727171 body
    text; white sections, #f7f7f7 alt backgrounds; image-backed hero/counter/
    footer sections.
  - Font: **"Public Sans"** (Public Sans, sans-serif) via Google Fonts.
  - Shapes: `.site-btn` — white 15px bold text on #5F67FF, padding
    14px 30px 12px, border-radius 2px; centered `.section-title` (mb 45px);
    hero h2 60px white bold; flat cards with icon bubbles.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/motorly-<n>/<w>/<h>`); icons → lucide-react (Wrench,
  Settings, Droplet, Gauge, ShoppingCart, Phone, Mail, MapPin, Clock,
  CalendarCheck, ChevronRight, Newspaper, Car, Search, User); brand icons →
  inline SVG (BrandIcon); Public Sans via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.

Motorly lives in `apps/motorly` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Motorly",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Motorly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Motorly" and links to
  Services, Shop, About, News, and Contact
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
- **THEN** it SHALL contain a level-1 heading "Welcome To Motorly Garage"
- **AND** it SHALL show an "Our Services" button

### Requirement: Services section

The system SHALL render a services section with four service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Do?"
- **AND** it SHALL show cards for Engine Overhaul, Power Steering, Oil
  change, and Upgrades Car

### Requirement: Experience section

The system SHALL render an experience section with an about button and a
placeholder image.

#### Scenario: Experience content

- **GIVEN** the page is rendered
- **WHEN** the experience section is displayed
- **THEN** it SHALL contain a heading "We Have 20 Years Of Experience In
  Auto Car"
- **AND** it SHALL show an "About Us" button
- **AND** it SHALL show an image

### Requirement: Products section

The system SHALL render a products section with product cards.

#### Scenario: Products content

- **GIVEN** the page is rendered
- **WHEN** the products section is displayed
- **THEN** it SHALL contain a heading "Our Products"
- **AND** it SHALL show at least four product cards with a price and an
  "Add To Cart" button

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

- **GIVEN** the Motorly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Motorly — Garage Template"
