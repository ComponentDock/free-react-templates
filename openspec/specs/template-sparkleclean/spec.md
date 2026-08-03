# Template: Sparkleclean (Astro Template)

## Purpose

Sparkleclean is a single-page cleaning services company landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sparkleclean" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Sparkleclean" — professional cleaning services
  landing template (source: https://colorlib.com/wp/template/sparkleclean/).
- **Demo DOM analyzed:** https://sparkleclean-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.qZrVslZM.css` (60KB) extracted;
  `https://preview.colorlib.com/theme/sparkleclean/` returns 404 — the
  preview portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`sparkleclean-template-...jpg`) is the visual reference; the design below
  is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/80 blur): logo + links About, Services, Pricing,
     Blog, Contact + "Get Free Quote" button; mobile nav.
  2. Hero (`bg-gradient-to-b from-primary-50 to-white`): h1 "Professional
     Cleaning, Guaranteed Spotless", blurb, buttons "Get Free Quote" +
     "Call (555) 867-5309".
  3. Instant quote widget: "Instant Quote" — frequency tabs (One-Time,
     Weekly, Bi-Weekly, Monthly) + "Book Now".
  4. Trust bar (`border-y`): 4 perks — Fully Insured, Background Checked,
     Eco-Friendly, Satisfaction Guaranteed.
  5. Services: "Cleaning Services for Every Need" — 6 cards (Regular
     Cleaning, Deep Cleaning, Move-In/Out Cleaning, Commercial Cleaning,
     Post-Construction, Green Cleaning).
  6. Pricing: "Choose Your Clean" — 4 packages (Basic Clean, Deep Clean,
     Move-In/Out, Commercial) with "Starting at" + "Get Quote".
  7. Gallery: "See the Difference" — before/after results.
  8. Testimonials: "What Our Clients Say" — client quotes.
  9. CTA (`bg-gradient-to-br from-primary-600 to-primary-800`): "Ready for
     a Spotless Space?" + "Get Free Quote" / "Call Now".
  10. FAQ: "Frequently Asked Questions" — 5 accordion items (cleaning
      duration, products, standard cleaning contents, insurance, reschedule).
  11. Contact: "Get in Touch" — "Request Cleaning" + contact cards (Visit
      Us, Call Us, Email Us, Office Hours).
  12. Footer (`bg-gray-900`): brand blurb + Services / Resources / Company
      columns + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **teal scale** — #0d9488 (teal-600 primary; darker
    #0f766e, #115e59; lighter #14b8a6, #2dd4bf, #5eead4, #99f6e4, #ccfbf1,
    #f0fdfa). Hero gradient from-primary-50 to white; CTA gradient
    from-primary-600 to-primary-800.
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827 (footer bg).
  - Font: **"Inter"** (Inter, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`; dark mode via dark:bg-gray-900 /
    dark:bg-gray-950.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/sparkleclean-<n>/<w>/<h>`); icons → lucide-react
  (Sparkles, ShieldCheck, UserCheck, Leaf, ThumbsUp, Home, Brush, Truck,
  Building2, Hammer, Sprout, Phone, Mail, MapPin, Clock, Star, ChevronDown,
  Calculator, CalendarCheck); Inter via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.

Sparkleclean lives in `apps/sparkleclean` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"SparkleClean", anchor links to the page's sections, a "Get Free Quote"
button, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Sparkleclean page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "SparkleClean" and links to
  Services and Pricing
- **AND** the navbar SHALL show a "Get Free Quote" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and two
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Professional Cleaning,
  Guaranteed Spotless"
- **AND** it SHALL show a "Get Free Quote" button and a "Call (555)
  867-5309" link

### Requirement: Instant quote widget

The system SHALL render an instant quote widget with frequency options and a
booking button.

#### Scenario: Quote widget content

- **GIVEN** the page is rendered
- **WHEN** the quote widget is displayed
- **THEN** it SHALL show "Instant Quote" and frequency options
- **AND** it SHALL show a "Book Now" button

### Requirement: Trust bar

The system SHALL render a trust bar with four perks.

#### Scenario: Perks content

- **GIVEN** the page is rendered
- **WHEN** the trust bar is displayed
- **THEN** it SHALL show Fully Insured, Background Checked, Eco-Friendly,
  and Satisfaction Guaranteed

### Requirement: Services section

The system SHALL render a services section with six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Cleaning Services for Every Need"
- **AND** it SHALL show cards for Regular Cleaning, Deep Cleaning, and
  Commercial Cleaning

### Requirement: Pricing section

The system SHALL render a pricing section with at least three packages.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Clean"
- **AND** it SHALL show packages for Basic Clean, Deep Clean, and
  Move-In/Out

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a quote button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready for a Spotless Space?"
- **AND** it SHALL show a "Get Free Quote" button

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least five question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Contact section

The system SHALL render a contact section with a request button and contact
details.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Get in Touch"
- **AND** it SHALL show a "Request Cleaning" button and contact cards with
  phone and email

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Services, Resources, Company) and a
  copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Sparkleclean app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "SparkleClean — Cleaning Services
  Template"
