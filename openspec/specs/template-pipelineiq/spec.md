# Template: Pipelineiq (Astro Template)

## Purpose

Pipelineiq is a single-page sales-CRM landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pipelineiq" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Pipelineiq" — sales / CRM platform template
  (source: https://colorlib.com/wp/template/pipelineiq/).
- **Demo DOM analyzed:** https://pipelineiq-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/pipelineiq/` returns 404 — the
  preview portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`pipelineiq-template-1771943984801.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Features, Pricing, Integrations, About, Blog, Contact + "Start
     Free Trial" button.
  2. Hero: "Close More Deals with AI-Powered CRM" + "Start Free Trial" /
     "Book a Demo" buttons + app-window mock + stats (10K+ Teams Worldwide,
     50M+ Deals Tracked, 99.9% Uptime SLA, 4.9/5 User Rating).
  3. Features: "Everything You Need to Sell Smarter" — 6 cards (Pipeline
     Management, Contact Management, Email Automation, Sales Analytics,
     Team Collaboration, AI Lead Scoring).
  4. Testimonials: "Trusted by Sales Leaders" — quotes.
  5. Contact: "Talk to Our Sales Team" — Phone / Email / Address / Office
     Hours cards.
  6. FAQ: 6 questions (setup time, CRM import, integrations, data
     security, free trial, support).
  7. CTA: "Ready to Close More Deals?" — "Book a Demo" / "Start Trial"
     ("Join 10,000+ sales teams...").
  8. Footer: Product / Company / Support columns + contact details +
     copyright + cookie notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#2563eb** (blue-600; scale #3b82f6, #60a5fa) — primary
    CTAs, links, accents.
  - Neutrals: white / gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827) / black; dark hero/footer.
  - Fonts: **"Inter"** (300–800) via Google Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/pipelineiq-<n>/<w>/<h>`); icons → lucide-react;
  Inter via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.

Pipelineiq lives in `apps/pipelineiq` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Pipelineiq", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Pipelineiq page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Pipelineiq" and links to
  Features and Pricing
- **AND** the navbar SHALL show a "Start Free Trial" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, call-to-action
buttons, and platform stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Close More Deals with
  AI-Powered CRM"
- **AND** it SHALL show "Start Free Trial" and "Book a Demo" buttons and
  platform stats

### Requirement: Features section

The system SHALL render a features section with at least six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Sell Smarter"
- **AND** it SHALL show cards for Pipeline Management, Contact Management,
  and Email Automation

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Sales Leaders"
- **AND** it SHALL show at least one testimonial quote

### Requirement: Contact section

The system SHALL render a contact section with contact detail cards.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Talk to Our Sales Team"
- **AND** it SHALL show Phone and Email contact cards

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a demo button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Close More Deals?"
- **AND** it SHALL show a "Book a Demo" button

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

- **GIVEN** the Pipelineiq app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Pipelineiq — CRM Template"
