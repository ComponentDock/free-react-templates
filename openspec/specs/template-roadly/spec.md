# Template: Roadly (ColorLib Autoroad)

## Purpose

Roadly is a single-page car rental landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Autoroad"
website template design (https://colorlib.com/wp/template/autoroad/), built
under a NEW name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

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
  1. Navbar (dark): "Roadly" logo + nav (Home, About, Pricing, Our Car,
     Blog, Contact).
  2. Hero (image bg): h1 "Now It's easy for you rent a car", play button +
     "Easy steps for renting a car", booking card "Make your trip"
     (Pick-up/Drop-off location, dates, time) + "Search Vehicle".
  3. Search strip: "Choose A Perfect Car" + filters (Select Model, Select
     Brand, Year Model, Price Limit) + "Search".
  4. Services: "Our Services" — 4 cards (24/7 Car Support, Lots of
     location, Reservation, Rental Cars).
  5. Cars: "Choose Your Car" — 8 car cards (Mercedes Grand Sedan) with
     "$25 /Day" + "Book now" / "Details".
  6. How it works (image bg): "Work flow" — 4 steps (Pick Destination,
     Select Term, Choose A Car, Enjoy The Ride).
  7. Testimonials: "Testimonial" — "Happy Clients" (Roger Scott quotes).
  8. Search CTA: "About us" — "Choose A Perfect Car" + "Search Vehicle".
  9. Blog: "Recent Blog" — 3 posts (Why Lead Generation is Key for
     Business Growth).
  10. Footer (dark): "About Roadly" + Information / Customer Support /
      "Have a Questions?" columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange** #fc983c (primary) + **yellow** #f7b71d
    accents + dark #212529 headings; white sections.
  - Font: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed
    hero/how-it-works sections (replaced with seeded picsum placeholders).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/roadly-<n>/<w>/<h>`); icons → lucide-react
  (Headphones, MapPin, CalendarCheck, Car, Map, ClipboardList, KeyRound,
  Star, Phone, Mail, Play, Search, Quote, Fuel, Gauge); Poppins via Google
  Fonts; repo-standard Navbar (dark-mode toggle + mobile menu) + Footer
  chrome.

Roadly lives in `apps/roadly` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Roadly",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Roadly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Roadly" and links to
  Home, About, Pricing, Our Car, Blog and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user opens the mobile menu
- **THEN** a "Mobile menu" navigation SHALL appear with the section links
- **AND** it SHALL close when the user presses close or activates a link

### Requirement: Hero section

The system SHALL render a full-width image hero with a headline, a play
button, and a booking form.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Now It's easy for you rent a
  car" and a "Play intro video" button
- **AND** it SHALL show a "Make your trip" booking card with Pick-up
  location, Drop-off location, Pick-up date, Drop-off date and Pick-up time
  fields and a "Search Vehicle" button

#### Scenario: Booking form submit

- **GIVEN** the user filled the booking form
- **WHEN** the user presses "Search Vehicle"
- **THEN** the form SHALL submit without navigating away

### Requirement: Search strip

The system SHALL render a car filter strip with model, brand, year and
price dropdowns and a search button.

#### Scenario: Search strip content

- **GIVEN** the page is rendered
- **WHEN** the search strip is displayed
- **THEN** it SHALL contain a heading "Choose A Perfect Car" and selects for
  Select Model, Select Brand, Year Model and Price Limit
- **AND** it SHALL show a "Search" button with model and brand options

### Requirement: Services section

The system SHALL render a services section with four service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show cards for 24/7 Car Support, Lots of location,
  Reservation and Rental Cars

### Requirement: Cars section

The system SHALL render a car selection section with car cards.

#### Scenario: Cars content

- **GIVEN** the page is rendered
- **WHEN** the cars section is displayed
- **THEN** it SHALL contain a heading "Choose Your Car" and a "What we
  offer" kicker
- **AND** it SHALL show eight car cards, each with a "Mercedes Grand Sedan"
  heading, a "$25 /Day" price, and "Book now" / "Details" links

### Requirement: How it works section

The system SHALL render a how-it-works section with four steps.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a "Work flow" kicker and a heading "How it
  works"
- **AND** it SHALL show the steps Pick Destination, Select Term, Choose A
  Car and Enjoy The Ride

### Requirement: Testimonials section

The system SHALL render a testimonials section with quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a "Testimonial" kicker and a heading "Happy
  Clients"
- **AND** it SHALL show four "Roger Scott" quotes with distinct roles

### Requirement: Search CTA section

The system SHALL render an about/search CTA section.

#### Scenario: Search CTA content

- **GIVEN** the page is rendered
- **WHEN** the search CTA section is displayed
- **THEN** it SHALL contain an "About us" kicker and a heading "Choose A
  Perfect Car"
- **AND** it SHALL show a "Search Vehicle" button

### Requirement: Blog section

The system SHALL render a recent blog section with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a "Blog" kicker and a heading "Recent Blog"
- **AND** it SHALL show at least three post cards dated "July. 24, 2019"

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show "About Roadly" and link columns (Information,
  Customer Support, Have a Questions?) with contact details
- **AND** it SHALL show a copyright line crediting the ColorLib Autoroad
  recreation

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Roadly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Roadly — Car Rental Template"
