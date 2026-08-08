# Template: Dealflow (CRM Template)

## Purpose

Dealflow is a single-page sales-CRM landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Pipelineiq" website template design
(source: https://colorlib.com/wp/template/pipelineiq/), built under a
DIFFERENT name (Dealflow — deals + pipeline flow) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-pipelineiq/` using the FORBIDDEN ColorLib source
> name; it was deleted and replaced by this fresh prep (new name Dealflow),
> matching the Logitrans→Freightly / Cloudnest→Stratos precedent. The stale
> prep's research was re-verified against the live demo and corrected
> (hero H1, stats, testimonial count, CTA copy).

## Design reference (replication findings)

- **Original:** ColorLib "Pipelineiq" — sales / CRM platform template
  (source: https://colorlib.com/wp/template/pipelineiq/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/pipelineiq/`
  returns 404; the ColorLib preview portal hosts the demo at
  `https://pipelineiq-colorlib.pages.dev/` (HTTP 200, ~70 KB HTML +
  `/_astro/Base.BWd83FKH.css` ~64 KB parsed for tokens — same
  `<slug>-colorlib.pages.dev` pattern as Freightly). The TEMPLATES.md
  screenshot (`pipelineiq-template-1771943984801.jpg`) is the visual
  reference: dark navy SaaS hero, glassmorphism dashboard mockup, blue
  (#2563eb) primary, Inter typography.
- **Section order (1:1, from live demo DOM):**
  1. Navbar: "PipelineIQ" logo, links Features, Pricing, Integrations,
     About, Blog, Contact + "Start Free Trial" pill CTA; mobile hamburger
     toggle; dark-mode toggle.
  2. Hero (dark gradient `from-gray-950 via-blue-950/30 to-gray-950`):
     badge "Trusted by 10,000+ sales teams worldwide", H1 "Close More
     Deals with AI-Powered CRM" ("AI-Powered CRM" in primary-blue
     highlight; screenshot variant reads "Smart Pipelines"), subtext, CTA
     buttons "Start Free Trial" / "Book a Demo", stats row (10K+ Teams
     Worldwide, 50M+ Deals Tracked, 99.9% Uptime SLA, 4.9/5 User Rating),
     dashboard mockup card (macOS window dots, "$2.4M +24% this month",
     "$890K", bar chart: New Leads / Qualified / Proposals / Closed Won,
     green "Live Demo" badge).
  3. Features: "Everything You Need to Sell Smarter" — 6 cards (Pipeline
     Management, Contact Management, Email Automation, Sales Analytics,
     Team Collaboration, AI Lead Scoring), each icon + title + blurb.
  4. Testimonials: "Trusted by Sales Leaders" — 6-quote carousel with
     prev/next round buttons (quotes from VP of Sales TechScale Inc.,
     Sales Director GrowthWave, Sales Manager DataBridge, + 3 more),
     names/roles visible.
  5. Contact: "Talk to Our Sales Team" — 4 cards (Phone (555) 234-5678,
     Email sales@pipelineiq.com, Address, Office Hours Mon–Fri 8:00 AM –
     6:00 PM PST) + "Ready to transform your sales process?" blurb.
  6. FAQ: "Frequently Asked Questions" — accordion (6 questions: setup
     time, CRM import, integrations, data security, free trial, support;
     "Can I import data from my existing CRM?", "Do you offer a free
     trial?", "What kind of support is available?" confirmed in DOM) +
     "Contact our support team" hint.
  7. CTA: "Ready to Close More Deals?" — "Join 10,000+ sales teams already
     using PipelineIQ..." + "Book a Demo" / "Start Trial" buttons
     (gradient `from-primary-600 to-primary-800` band).
  8. Footer (dark bg-gray-900): brand + blurb "Smart CRM that closes
     deals...", columns Product (Features, Pricing, Integrations, About,
     Blog) / Company (About, Careers, Blog, Press) / Support (Help Center,
     API Docs, Status, Contact), contact (phone, email), copyright +
     Privacy Policy / Terms of Service, cookie consent banner (Accept All
     / Decline), back-to-top round button.
- **Design tokens extracted from `Base.BWd83FKH.css` + DOM:**
  - Brand color: **#2563eb** (blue-600; scale #1d4ed8, #3b82f6, #60a5fa,
    #93c5fd) — primary CTAs, links, headline highlight, back-to-top.
  - Neutrals: #fff, #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827, #030712; dark hero/footer.
  - Fonts: **"Inter"** (300–800) via Google Fonts.
  - Shapes: rounded-lg buttons/inputs, rounded-xl cards, rounded-2xl
    dashboard card, rounded-full pill CTAs + carousel nav + back-to-top;
    CTA band `bg-gradient-to-br from-primary-600 to-primary-800`;
    hover:bg-primary-700; focus ring primary-500.
  - Section backgrounds: dark hero gradient, `bg-gray-50` feature/
    testimonial/contact bands with `border-y border-gray-200`, white FAQ
    band, dark footer; dark-mode classes throughout (`dark:bg-gray-950`).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/dealflow-<n>/<w>/<h>`); icons → lucide-react; Inter
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome; dashboard mockup built with divs + Tailwind (no chart library —
  bar chart = simple flex columns); cookie banner + back-to-top optional
  but present in reference; accordion FAQ via native `<details>` or state,
  no extra dependencies.

Dealflow lives in `apps/dealflow` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Dealflow",
anchor links to the page's sections, a "Start Free Trial" CTA, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Dealflow page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Dealflow" and links to
  Features, Pricing, Integrations, About, Blog, and Contact
- **AND** the navbar SHALL show a "Start Free Trial" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width dark hero with a trust badge, headline,
call-to-action buttons, a stats row, and a dashboard mockup.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a badge "Trusted by 10,000+ sales teams worldwide"
- **AND** it SHALL contain a level-1 heading "Close More Deals with AI-Powered CRM"
- **AND** it SHALL show "Start Free Trial" and "Book a Demo" buttons

#### Scenario: Hero stats

- **GIVEN** the hero is displayed
- **WHEN** the stats row renders
- **THEN** it SHALL show 10K+ Teams Worldwide, 50M+ Deals Tracked, 99.9%
  Uptime SLA, and 4.9/5 User Rating

#### Scenario: Dashboard mockup

- **GIVEN** the hero is displayed
- **WHEN** the dashboard mockup renders
- **THEN** it SHALL show a revenue figure ($2.4M), a green "Live Demo"
  badge, and chart bars

### Requirement: Features section

The system SHALL render a features section with six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Sell Smarter"
- **AND** it SHALL show cards for Pipeline Management, Contact Management,
  Email Automation, Sales Analytics, Team Collaboration, and AI Lead
  Scoring

### Requirement: Testimonials section

The system SHALL render a testimonials section with quotes in a carousel.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Sales Leaders"
- **AND** it SHALL show at least one testimonial quote with an attributed
  name and role

### Requirement: Contact section

The system SHALL render a contact section with four contact detail cards.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Talk to Our Sales Team"
- **AND** it SHALL show Phone, Email, Address, and Office Hours cards

### Requirement: FAQ section

The system SHALL render an FAQ section with an accordion of at least three
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons, including "Can I
  import data from my existing CRM?" and "Do you offer a free trial?"

#### Scenario: FAQ toggle

- **GIVEN** the FAQ section is displayed
- **WHEN** the user clicks a question
- **THEN** the answer SHALL expand or collapse

### Requirement: Call to action

The system SHALL render a closing CTA band with a headline and demo buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Close More Deals?"
- **AND** it SHALL show "Book a Demo" and "Start Trial" buttons

### Requirement: Footer

The system SHALL render a dark footer with brand blurb, link columns,
contact details, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Product, Company, and Support link columns and a
  copyright line
- **AND** it SHALL show a phone number and an email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Dealflow app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Dealflow — CRM Template"

## Verification checklist

- [ ] `npm run verify:app dealflow` passes: typecheck, lint, vitest with
      100% coverage (lines/functions/branches/statements), production build
- [ ] All requirements above covered by tests (Gherkin scenarios → vitest +
      Testing Library)
- [ ] Section order matches the reference 1:1 (Navbar → Hero → Features →
      Testimonials → Contact → FAQ → CTA → Footer)
- [ ] Design tokens in `@theme`: primary #2563eb scale, Inter font, pill
      buttons, dark hero gradient
- [ ] All images are seeded picsum placeholders (`dealflow-<n>`); no
      ColorLib assets copied
- [ ] Icons from lucide-react; shared components from packages/ui (Button,
      ButtonLink, Badge, Card, cn)
- [ ] README templates-status table updated after merge
      (`npm run readme:status`)
