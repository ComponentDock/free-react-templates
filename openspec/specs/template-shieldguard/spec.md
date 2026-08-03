# Template: Shieldguard (Astro Template)

## Purpose

Shieldguard is a single-page insurance company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Shieldguard" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Shieldguard" — insurance company landing template
  (source: https://colorlib.com/wp/template/shieldguard/).
- **Demo DOM analyzed:** https://shieldguard-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.BZ-9KC9t.css` (63KB) extracted;
  `https://preview.colorlib.com/theme/shieldguard/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`shieldguard-template-1771943902281.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/80 blur): logo "ShieldGuard Insurance" + links
     About, Coverage, Why Us, Process, Testimonials, Pricing, Blog, Services,
     Contact + "Get a Quote" button; mobile nav drawer.
  2. Hero (`bg-gradient-to-b from-primary-50 to-white`): h1 "Protection You
     Can Count On", blurb "Comprehensive insurance solutions that protect
     what matters most. Get covered with confidence.", buttons "Get Free
     Quote" + "Call (555) 567-8901".
  3. Stats band (`border-y bg-gray-50`): 4 animated counters — Claims Paid,
     Active Policies, Claims Approval, Years Trusted.
  4. Coverage: "Insurance for Every Need" — 6 cards (Auto Insurance, Home
     Insurance, Life Insurance, Health Insurance, Business Insurance,
     Umbrella Insurance), each with "Learn More".
  5. Why Us: "The Smart Choice for Coverage" — 4 cards (Save Up to 35%,
     Claims in 24 Hours, Personal Advisors, Digital First).
  6. Process: "Getting Covered is Easy" — 3 steps (Get a Quote, Choose Your
     Plan, You're Covered).
  7. Savings calculator: "See How Much You Could Save" — "Calculate Savings"
     reveals "Estimated Annual Savings / Up to $540/year" + disclaimer.
  8. Testimonials: "What Our Clients Say" — 6 quote cards (Jennifer
     Martinez, David Thompson, Patricia Chen, Tom & Lisa Park, Frank
     Morrison, Catherine Bell).
  9. FAQ: "Common Questions" — 6 accordion items (coverage, claims,
     bundling, cancellation, premiums, new drivers/homebuyers).
  10. CTA: "Request Your Free Quote" — "Request Free Quote" button.
  11. Footer (`bg-gray-900`): brand blurb + Coverage / Resources / Company /
      Contact Us columns, phone/email/office hours, "Licensed in All 50
      States", copyright, cookie banner (Accept All / Decline).
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **blue scale** — #2563eb (blue-600 primary; #1d4ed8,
    #1e40af, #1e3a8a darker; #3b82f6, #60a5fa, #93c5fd, #bfdbfe, #dbeafe,
    #eff6ff lighter). Hero gradient `from-primary-50 to-white`.
  - Neutrals: gray scale — #f9fafb (50), #f3f4f6 (100), #e5e7eb (200),
    #d1d5db (300), #9ca3af (400), #6b7280 (500), #4b5563 (600), #374151
    (700), #1f2937 (800), #111827 (900; footer bg).
  - Success green (savings/check accents): #16a34a, #22c55e, #4ade80,
    #15803d, #bbf7d0, #dcfce7, #f0fdf4.
  - Font: **"Manrope"** (Manrope, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`.
  - Dark mode: full `dark:` variants (dark:bg-gray-900, dark:border-gray-800).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/shieldguard-<n>/<w>/<h>`); icons → lucide-react
  (Shield, Car, Home, HeartPulse, Briefcase, Umbrella, Phone, Mail, Clock,
  Star, ChevronDown, Calculator, CheckCircle); Manrope via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.

Shieldguard lives in `apps/shieldguard` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"ShieldGuard", anchor links to the page's sections, a "Get a Quote" button,
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Shieldguard page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "ShieldGuard" and links to
  Coverage and Testimonials
- **AND** the navbar SHALL show a "Get a Quote" button and a dark-mode
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
- **THEN** it SHALL contain a level-1 heading "Protection You Can Count On"
- **AND** it SHALL show a "Get Free Quote" button and a "Call (555)
  567-8901" link

### Requirement: Stats band

The system SHALL render a stats band with four counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show the labels Claims Paid, Active Policies, Claims
  Approval, and Years Trusted

### Requirement: Coverage section

The system SHALL render a coverage section with six insurance cards.

#### Scenario: Coverage content

- **GIVEN** the page is rendered
- **WHEN** the coverage section is displayed
- **THEN** it SHALL contain a heading "Insurance for Every Need"
- **AND** it SHALL show cards for Auto, Home, Life, Health, Business, and
  Umbrella insurance

### Requirement: Why us section

The system SHALL render a why-us section with four value cards.

#### Scenario: Why us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL contain a heading "The Smart Choice for Coverage"
- **AND** it SHALL show cards for "Save Up to 35%", "Claims in 24 Hours",
  "Personal Advisors", and "Digital First"

### Requirement: Process section

The system SHALL render a process section with three steps.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "Getting Covered is Easy"
- **AND** it SHALL show the steps Get a Quote, Choose Your Plan, and
  You're Covered

### Requirement: Savings calculator

The system SHALL render a savings calculator that reveals an estimate when
activated.

#### Scenario: Calculator content

- **GIVEN** the page is rendered
- **WHEN** the calculator section is displayed
- **THEN** it SHALL contain a heading "See How Much You Could Save"
- **AND** it SHALL show a "Calculate Savings" button

#### Scenario: Calculate savings

- **GIVEN** the calculator is displayed
- **WHEN** the user presses "Calculate Savings"
- **THEN** the section SHALL reveal an estimated annual savings value

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least three testimonial quotes with author names

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Common Questions"
- **AND** it SHALL show at least six question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a quote button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Request Your Free Quote"
- **AND** it SHALL show a "Request Free Quote" button

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Coverage, Resources, Company) and a
  copyright line
- **AND** it SHALL show the phone number and email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Shieldguard app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "ShieldGuard — Insurance Template"
