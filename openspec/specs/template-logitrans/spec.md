# Template: Logitrans (Astro Template)

## Purpose

Logitrans is a single-page logistics/shipping landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Logitrans" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Logitrans" — logistics / freight / shipping
  company template (source: https://colorlib.com/wp/template/logitrans/).
- **Demo DOM analyzed:** https://logitrans-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/logitrans/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`logitrans-template-1770211309698.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Services, Why Us, Calculator, Testimonials, Contact + phone
     (1-800-SWIFT-GO) + "Get a Quote" button.
  2. Hero: "Ship Anywhere, Anytime" + "Explore Services" + shipment
     tracking widget ("Track Your Shipment" input + "Track Package" button,
     "In Transit — Est. delivery: Tomorrow, 2:00 PM") + trust badges (Free
     tracking, Insured shipments, 24/7 support).
  3. Services: "Complete Logistics Solutions" — 6 cards (Air Freight, Ocean
     Freight, Ground Transport, Warehousing, Customs Brokerage, Express
     Delivery) each with feature bullets + "Get Quote".
  4. Why Us: "Shipping Made Simple" — 4 cards (On-Time Delivery 98.5%,
     Global Network 150+ countries, Cargo Insurance, 24/7 Support) + stats
     (Active Routes, Deliveries Today).
  5. Shipping Calculator: "Calculate Your Shipping Cost" — destination
     select + 4 options (Economy 7–10 days, Standard 3–5 days "Most
     Popular", Express 1–2 days, Same Day) + "Calculate Shipping Cost" +
     "Estimated Total".
  6. Testimonials: "Trusted by Industry Leaders" — 3 quotes (TechFlow VP
     Operations, Global Retail Logistics Director, AfriTrade CEO) +
     certifications (ISO 9001, IATA Member, C-TPAT, WCA Member).
  7. CTA: "Ready to Ship?" — "Get started with SwiftCargo" (Call
     1-800-SWIFT-GO, free tracking, no hidden fees, cancel anytime).
  8. Contact: "Let's Discuss Your Shipping Needs" — Phone / Email /
     Headquarters / Business Hours cards + "Send us a message" form with
     "Send Message" button.
  9. Footer: Services / Quick Links / Contact columns + copyright + cookie
     notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#3b82f6** (blue-500; scale #2563eb, #93c5fd) — primary
    CTAs, links, accents.
  - Secondary accent: **#f59e0b** (amber-500) — highlights, badges.
  - Neutrals: white / gray (#d1d5db, #374151, #1f2937, #111827) / black;
    dark hero/footer.
  - Fonts: **"Inter"** (400–800) via Google Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/logitrans-<n>/<w>/<h>`); icons → lucide-react; Inter
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.

Logitrans lives in `apps/logitrans` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Logitrans", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Logitrans page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Logitrans" and links to
  Services and Calculator
- **AND** the navbar SHALL show a "Get a Quote" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a tracking
widget, and trust badges.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Ship Anywhere, Anytime"
- **AND** it SHALL show a tracking input with a "Track Package" button

### Requirement: Services section

The system SHALL render a services section with at least six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Complete Logistics Solutions"
- **AND** it SHALL show cards for Air Freight, Ocean Freight, Ground
  Transport, and Warehousing

### Requirement: Features section

The system SHALL render a "Why Us" section with at least four feature
cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Shipping Made Simple"
- **AND** it SHALL show cards for On-Time Delivery, Global Network, Cargo
  Insurance, and 24/7 Support

### Requirement: Calculator section

The system SHALL render a shipping cost calculator section with shipping
options.

#### Scenario: Calculator content

- **GIVEN** the page is rendered
- **WHEN** the calculator section is displayed
- **THEN** it SHALL contain a heading "Calculate Your Shipping Cost"
- **AND** it SHALL show shipping options including Economy, Standard, and
  Express

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Industry Leaders"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Contact section

The system SHALL render a contact section with contact cards and a message
form.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Let's Discuss Your Shipping Needs"
- **AND** it SHALL show a "Send us a message" form with a "Send Message"
  button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Logitrans app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Logitrans — Logistics Template"
