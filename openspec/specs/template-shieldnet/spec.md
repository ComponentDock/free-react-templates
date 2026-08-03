# Template: Shieldnet (Astro Template)

## Purpose

Shieldnet is a single-page cybersecurity platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Shieldnet" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Shieldnet" — cybersecurity / threat protection
  platform landing template
  (source: https://colorlib.com/wp/template/shieldnet/).
- **Demo DOM analyzed:** https://shieldnet-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.D-cq-pmO.css` (68KB) extracted;
  `https://preview.colorlib.com/theme/shieldnet/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`shieldnet-template-1771944037639.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/80 blur): logo "ShieldNet" + links Solutions,
     Pricing, About, Blog, Contact + "Get Protected" button; mobile nav.
  2. Hero (`bg-gradient-to-b from-gray-50 via-primary-50/... to-white`):
     h1 "Stop Threats Before They Strike", blurb, buttons "Start Free
     Trial" + "Watch Demo".
  3. Defense grid: "Complete Cyber Defense" — 6 cards (Endpoint Detection
     & Response, Cloud Security, Identity Protection, Threat Intelligence,
     Vulnerability Management, Incident Response), each with a blurb.
  4. Social proof: "Trusted by Security Leaders" — 6 testimonial cards
     (Marcus Chen, Sarah Blackwell, James Okafor, Elena Petrova, David Kim,
     Rachel Torres).
  5. Contact: "Talk to a Security Expert" — lead form (Full Name, Email
     Address, Phone Number, Project Type select, Project Details) + "Send
     Message" button; contact info column (Phone, Email, Address, Office
     Hours).
  6. FAQ: "Frequently Asked Questions" — 5 accordion items (deployment
     speed, SIEM replacement, false positive rate, 24/7 MDR, zero-day
     protection).
  7. CTA (`bg-gradient-to-br from-primary-600 to-primary-...`): "Ready to
     Secure Your Organization?" + "Start Free Trial" / "Talk to Expert".
  8. Footer (`bg-gray-900`): brand blurb + Solutions / Resources / Company
     columns + phone/email + copyright + cookie banner (Accept All /
     Decline).
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **rose/red scale** — #e11d48 (rose-600 primary; darker
    #be123c, #9f1239; lighter #f43f5e, #fb7185, #fda4af, #fecdd3, #ffe4e6,
    #fff1f2). Hero gradient from gray-50 via primary-50 to white; CTA
    gradient from primary-600 to primary-800.
  - Neutrals: gray scale — #f9fafb (50), #f3f4f6 (100), #e5e7eb (200),
    #d1d5db (300), #9ca3af (400), #6b7280 (500), #4b5563 (600), #374151
    (700), #1f2937 (800), #111827 (900; footer bg), #030712.
  - Font: **"Inter"** (Inter, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`; dark mode via `dark:bg-gray-900` /
    `dark:bg-gray-950`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/shieldnet-<n>/<w>/<h>`); icons → lucide-react
  (ShieldCheck, Cloud, Fingerprint, Radar, Bug, Siren, Phone, Mail, MapPin,
  Clock, Star, ChevronDown, Send, PlayCircle); Inter via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.

Shieldnet lives in `apps/shieldnet` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "ShieldNet",
anchor links to the page's sections, a "Get Protected" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Shieldnet page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "ShieldNet" and links to
  Solutions and Contact
- **AND** the navbar SHALL show a "Get Protected" button and a dark-mode
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
- **THEN** it SHALL contain a level-1 heading "Stop Threats Before They
  Strike"
- **AND** it SHALL show a "Start Free Trial" button and a "Watch Demo"
  button

### Requirement: Defense section

The system SHALL render a cyber defense section with six capability cards.

#### Scenario: Defense content

- **GIVEN** the page is rendered
- **WHEN** the defense section is displayed
- **THEN** it SHALL contain a heading "Complete Cyber Defense"
- **AND** it SHALL show cards for Endpoint Detection & Response, Cloud
  Security, and Identity Protection

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Security Leaders"
- **AND** it SHALL show at least three testimonial quotes with author names

### Requirement: Contact section

The system SHALL render a contact section with a lead form and contact
details.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Talk to a Security Expert"
- **AND** it SHALL show a form with name, email, and message fields and a
  "Send Message" button

#### Scenario: Contact details

- **GIVEN** the contact section is displayed
- **WHEN** the user reviews the contact information
- **THEN** it SHALL show a phone number, an email address, and an office
  hours listing

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

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Secure Your Organization?"
- **AND** it SHALL show "Start Free Trial" and "Talk to Expert" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Solutions, Resources, Company) and a
  copyright line
- **AND** it SHALL show the phone number and email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Shieldnet app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "ShieldNet — Security Template"
