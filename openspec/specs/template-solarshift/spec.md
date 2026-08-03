# Template: Solarshift (Astro Template)

## Purpose

Solarshift is a single-page solar energy company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Solarshift" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Solarshift" — solar energy / clean power company
  landing template (source: https://colorlib.com/wp/template/solarshift/).
- **Demo DOM analyzed:** https://solarshift-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.DGIjEtFT.css` (59KB) extracted;
  `https://preview.colorlib.com/theme/solarshift/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`solarshift-template.jpg`) is the visual reference; the design below is
  reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/80 blur): logo + links About, Products, Services,
     Residential Solar, Commercial Solar, Battery Storage, Pricing, Blog,
     Contact + "Get Free Quote" button; mobile nav.
  2. Hero (`bg-gradient-to-b from-primary-50 to-white`): h1 "Power Your
     Home With Clean Energy", blurb, buttons "Get Free Quote" + "Call
     (555) 763-2748", trust line "Join 10,000+ homeowners who switched to
     solar".
  3. Savings estimator: "Estimate Your Savings" + "Get Free Assessment"
     (interactive calculator).
  4. Solutions: "Complete Solar Solutions" — 6 cards (Residential Solar,
     Commercial Solar, Battery Storage, Solar Maintenance, Energy Audit,
     Roof Assessment).
  5. Equipment: "Premium Solar Equipment" — 3 brand cards (SunPower Maxeon
     6, LG NeON H+, Canadian Solar HiKu7).
  6. Impact band (`bg-primary-600`): "Our Environmental Impact" — green
     energy stats.
  7. Payment options: "Flexible Payment Options" — 3 cards (Cash Purchase,
     Solar Lease, Power Purchase Agreement) + "Learn More".
  8. Process: "How It Works" — 4 steps (Free Consultation, Design &
     Permits, Professional Installation, Activation & Monitoring).
  9. Testimonials: "What Our Customers Say" — customer quotes.
  10. CTA band (`bg-primary-600`): "Ready to Go Solar?" + "Get Free Quote"
      / "Call (555) 763-2748".
  11. FAQ: "Frequently Asked Questions" — 5 accordion items (cost,
      installation time, cloudy days, power outage, maintenance).
  12. Quote form: "Get Your Free Quote" — lead form + "Submit Request";
      contact info column (Office Hours).
  13. Footer (`bg-gray-900`): brand blurb + Solutions / Resources / Company
      columns + contact + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **green scale** — #16a34a (green-600 primary; darker
    #15803d, #166534; lighter #22c55e, #4ade80, #86efac, #bbf7d0, #dcfce7,
    #f0fdf4). Impact + CTA bands `bg-primary-600`; hero gradient
    from-primary-50 to white.
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827 (footer bg).
  - Font: **"Manrope"** (Manrope, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`; dark mode via dark:bg-gray-900 /
    dark:bg-primary-900.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/solarshift-<n>/<w>/<h>`); icons → lucide-react (Sun,
  Home, Building2, BatteryCharging, Wrench, Gauge, ClipboardCheck, Phone,
  Mail, Clock, Star, ChevronDown, Calculator, Zap, Leaf); Manrope via Google
  Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.

Solarshift lives in `apps/solarshift` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "SolarShift",
anchor links to the page's sections, a "Get Free Quote" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Solarshift page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "SolarShift" and links to
  Solutions and Pricing
- **AND** the navbar SHALL show a "Get Free Quote" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and two
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Power Your Home With Clean
  Energy"
- **AND** it SHALL show a "Get Free Quote" button and a "Call (555)
  763-2748" link

### Requirement: Savings estimator

The system SHALL render a savings estimator section with an assessment call
to action.

#### Scenario: Estimator content

- **GIVEN** the page is rendered
- **WHEN** the estimator section is displayed
- **THEN** it SHALL show "Estimate Your Savings"
- **AND** it SHALL show a "Get Free Assessment" button

### Requirement: Solutions section

The system SHALL render a solutions section with six service cards.

#### Scenario: Solutions content

- **GIVEN** the page is rendered
- **WHEN** the solutions section is displayed
- **THEN** it SHALL contain a heading "Complete Solar Solutions"
- **AND** it SHALL show cards for Residential Solar, Commercial Solar, and
  Battery Storage

### Requirement: Equipment section

The system SHALL render an equipment section with at least three brand
cards.

#### Scenario: Equipment content

- **GIVEN** the page is rendered
- **WHEN** the equipment section is displayed
- **THEN** it SHALL contain a heading "Premium Solar Equipment"
- **AND** it SHALL show cards for SunPower, LG, and Canadian Solar panels

### Requirement: Impact band

The system SHALL render an environmental impact band.

#### Scenario: Impact content

- **GIVEN** the page is rendered
- **WHEN** the impact band is displayed
- **THEN** it SHALL contain a heading "Our Environmental Impact"
- **AND** it SHALL show environmental impact statistics

### Requirement: Payment options

The system SHALL render a payment options section with three cards.

#### Scenario: Payment content

- **GIVEN** the page is rendered
- **WHEN** the payment section is displayed
- **THEN** it SHALL contain a heading "Flexible Payment Options"
- **AND** it SHALL show cards for Cash Purchase, Solar Lease, and Power
  Purchase Agreement

### Requirement: Process section

The system SHALL render a process section with four steps.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "How It Works"
- **AND** it SHALL show the steps Free Consultation, Design & Permits,
  Professional Installation, and Activation & Monitoring

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Customers Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a quote button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Go Solar?"
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

### Requirement: Quote form

The system SHALL render a quote request form with contact details.

#### Scenario: Form content

- **GIVEN** the page is rendered
- **WHEN** the quote form section is displayed
- **THEN** it SHALL contain a heading "Get Your Free Quote"
- **AND** it SHALL show a form with a "Submit Request" button

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Solutions, Resources, Company) and a
  copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Solarshift app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "SolarShift — Solar Energy Template"
