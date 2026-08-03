# Template: Autorepair (Bootstrap Template)

## Purpose

Autorepair is a single-page car repair service landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Autorepair" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Autorepair" — car repair services website template
  (source: https://colorlib.com/wp/template/autorepair/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autorepair/
  (HTTP 200, full rendered DOM + `css/style.css` (86KB) extracted; the
  preview portal serves this non-Astro template directly — NOT in
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`autorepair-free-template.jpg`) is the visual reference; the design below
  is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Top bar + header: "Autorepair." logo + nav (Home, About, Services,
     Project, Blog, Contact) + social icons.
  2. Hero (`wrap` image bg): kicker "We are best car repair services", h1
     "Make your car last longer", "Book an appointment" button.
  3. Intro strip: "It's time to come to repair your car" + "Book an
     Appointment".
  4. Services: "Our car services" — 6 cards (Oil change, Tire Change,
     Batteries, Engine Repair, Tow Truck, Car Maintenance) + "Read more".
  5. About: "We help more than 45 years serving customer car" — Our
     Mission / Our Vision / Our Value.
  6. Free consultation: "Free Consultation" appointment band (image bg).
  7. Testimonials: "Happy Clients & Feedbacks" — client quotes (Roger
     Scott).
  8. Blog: "Latest news from our blog" — 3 posts (Best wheel alignment &
     air conditioning).
  9. Pricing: "Pricing" — plans + "Get Started".
  10. Projects: "Done Projects" — project cards (Engine Testing Completed,
      Change Oil Completed, Engine Diagnostics, Tire Change).
  11. Footer: "Autorepair." + Services / Contact information (+2 392 3929
      210, info@yourdomain.com) / Business Hours (Opening Days, Vacations)
      - copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **orange** #f79f24 (primary accent) + **blue** #064acb
    (secondary) + dark #212529 headings; white/light (#f8f9fa) sections.
  - Font: **"Poppins"** (Poppins, Arial, sans-serif) via Google Fonts.
  - Shapes: flat icon cards, filled rounded buttons; image-backed
    hero/consultation sections (replaced with seeded picsum placeholders).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/autorepair-<n>/<w>/<h>`); icons → lucide-react
  (Droplet, CircleDot, BatteryCharging, Cog, Truck, Wrench, Phone, Mail,
  Clock, CalendarCheck, Star, ChevronRight, Quote, MapPin, Facebook,
  Twitter, Instagram); Poppins via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.

Autorepair lives in `apps/autorepair` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Autorepair", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Autorepair page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Autorepair" and links to
  Services and Blog
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and an appointment
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Make your car last longer"
- **AND** it SHALL show a "Book an appointment" button

### Requirement: Services section

The system SHALL render a services section with six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our car services"
- **AND** it SHALL show cards for Oil change, Tire Change, and Engine
  Repair

### Requirement: About section

The system SHALL render an experience section with mission cards.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading about 45 years of service
- **AND** it SHALL show Mission, Vision, and Value cards

### Requirement: Consultation section

The system SHALL render a free consultation band.

#### Scenario: Consultation content

- **GIVEN** the page is rendered
- **WHEN** the consultation section is displayed
- **THEN** it SHALL show a "Free Consultation" heading

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Happy Clients & Feedbacks"
- **AND** it SHALL show at least one testimonial quote

### Requirement: Blog section

The system SHALL render a latest news section with post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Latest news from our blog"
- **AND** it SHALL show at least three post cards

### Requirement: Pricing section

The system SHALL render a pricing section with plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Pricing"
- **AND** it SHALL show at least one plan with a "Get Started" button

### Requirement: Projects section

The system SHALL render a done projects section with project cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Done Projects"
- **AND** it SHALL show at least four project cards

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Services, Contact information,
  Business Hours) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Autorepair app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Autorepair — Car Repair Template"
