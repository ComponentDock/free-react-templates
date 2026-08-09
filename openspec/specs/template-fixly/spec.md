# Template: Fixly (Auto Repair Template)

## Purpose

Fixly is a single-page auto repair shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carepair" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. "Fixly" is the new name (the ColorLib source name
"Carepair" is never reused).

## Design reference (replication findings)

- **Original:** ColorLib "Carepair" — auto repair shop website template
  (source: https://colorlib.com/wp/template/carepair/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/carepair/ (HTTP
  200, full rendered DOM + `css/style.css` (84KB) extracted; the preview
  portal serves this non-Astro template directly — NOT in
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`carepair-free-template-1.jpg`) is the visual reference; the design below
  is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Top bar: hours (Monday - Friday 8:00AM-8:00PM), "Call Us: +2 392 3929
     210", Location; header: "Fixly Auto Repair Shop" + nav (Home, About,
     Services, Gallery, Blog, Contact) + "Make An Appointment".
  2. Hero (`slider-hero` image bg): h1 "Looking for the Right Vehicle
     Repair Service?" + "Make An Appointment" / "See Services"; secondary
     slide "Best Auto Repair Shop and Maintenance Services".
  3. Intro: "Contact Details" card (phone/location/hours) + "Make An
     Appointment" / "Maintenance Services" / "More Services".
  4. Why Choose Us: 4 cards (Expert Mechanics, Convenient Place, Modern
     Equipments, Fast Service Delivery).
  5. Appointment band (`ftco-intro-2 img`): "Schedule Your Appointment
     Today!" + "Make An Appointment".
  6. Services: "This is our some of the many auto repair services we
     offer" — 12 services (General Auto Repair & Maintenance, Brake Repair
     and Replacement, Air Conditioning A/C Repair, Tire Repair and
     Replacement, Fuel System Repair, Exhaust System Repair, Engine Cooling
     System Maintenance, Electrical Diagnostics, Oil Change, Tune Up, Wheel
     Alignment, Computer Diagnostic Testing).
  7. Steps (bg-light): "Get Car Repair In Easy Steps" — 3 steps (Get A
     Free Quote, Book Car Inspection, Get Your Car Fixed) + "Learn More" /
     "Book An Appointment".
  8. Stats (`ftco-section-counter img`): "Technical Statistics" — 4
     counters (20 Expert Mechanics, 3200, 98, 100).
  9. Mechanics: "Expert Mechanics" — team cards (Jason Smith, Jeffrey
     Rockenson).
  10. Testimonials: "Happy Customers" — quotes (Roger Scott).
  11. Blog: "Recent From Blog" — 3 posts (Tips on How to Maintain Your
      Brand New Car).
  12. Footer (image bg): "Fixly Auto Repair Shop" + Services list +
      Recent Posts + "Have a Questions?" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **red** #e02f33 (primary) + **navy blue** #1a508b
    (secondary) + dark #212529 headings; white/light sections.
  - Font: **"Roboto"** (Roboto, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed
    hero/appointment/stats/footer sections (replaced with seeded picsum
    placeholders).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/fixly-<n>/<w>/<h>`); icons → lucide-react
  (Wrench, MapPin, Clock, Phone, Mail, Cog, Car, Users, Zap, CalendarCheck,
  Star, ChevronRight, Quote, Droplet, Gauge, Thermometer, Cpu, Battery);
  Roboto via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome. Brand renamed "Carepair" → "Fixly" (new name rule).

Fixly lives in `apps/fixly` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Fixly",
anchor links to the page's sections, an appointment button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Fixly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Fixly" and links to
  Services and Blog
- **AND** the navbar SHALL show a "Make An Appointment" button and a
  dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and two buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Looking for the Right
  Vehicle Repair Service?"
- **AND** it SHALL show "Make An Appointment" and "See Services" buttons

### Requirement: Why choose us

The system SHALL render a why-choose-us section with four cards.

#### Scenario: Why us content

- **GIVEN** the page is rendered
- **WHEN** the why-choose-us section is displayed
- **THEN** it SHALL contain a heading "Why Choose Us?"
- **AND** it SHALL show cards for Expert Mechanics, Convenient Place, and
  Modern Equipments

### Requirement: Services section

The system SHALL render a services section with at least ten services.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show services including General Auto Repair, Brake
  Repair, and Oil Change

### Requirement: Steps section

The system SHALL render an easy-steps section with three steps.

#### Scenario: Steps content

- **GIVEN** the page is rendered
- **WHEN** the steps section is displayed
- **THEN** it SHALL contain a heading "Get Car Repair In Easy Steps"
- **AND** it SHALL show the steps Get A Free Quote, Book Car Inspection,
  and Get Your Car Fixed

### Requirement: Statistics section

The system SHALL render a technical statistics section with counters.

#### Scenario: Statistics content

- **GIVEN** the page is rendered
- **WHEN** the statistics section is displayed
- **THEN** it SHALL contain a heading "Technical Statistics"
- **AND** it SHALL show four counters

### Requirement: Mechanics section

The system SHALL render a mechanics section with team cards.

#### Scenario: Mechanics content

- **GIVEN** the page is rendered
- **WHEN** the mechanics section is displayed
- **THEN** it SHALL contain a heading "Expert Mechanics"
- **AND** it SHALL show at least two mechanic cards with names

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Customers"
- **AND** it SHALL show at least one testimonial quote

### Requirement: Blog section

The system SHALL render a recent blog section with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent From Blog"
- **AND** it SHALL show at least three post cards

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Services, Recent Posts) and a
  copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Fixly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Fixly — Auto Repair Template"
