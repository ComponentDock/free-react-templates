# Template: Cortex (Astro Template)

## Purpose

Cortex is a single-page AI agent platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Agentforge" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Agentforge" — AI agent platform template
  (source: https://colorlib.com/wp/template/agentforge/).
- **Demo DOM analyzed:** https://agentforge-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/agentforge/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal). The
  TEMPLATES.md screenshot (`agentforge-template-1771944000058.jpg`) shows a
  dark AI-platform landing with emerald accents; the section-by-section
  structure below is taken from the live DOM + bundled CSS.
- **Section order (1:1, from the DOM):**
  1. Navbar: logo + Platform, Pricing, Integrations, About, Blog, Contact,
     "Start Building" CTA.
  2. Hero: badge "Trusted by 10,000+ developers worldwide", H1 "Build
     Autonomous AI Agents", blurb, "Start Building Free" + "View
     Documentation" CTAs, stats row (100K+ Agents Deployed, 5B+ Tasks
     Completed, 200+ Integrations, 99.99% Uptime), Python code panel.
  3. Features: "Everything You Need to Build AI Agents" + six cards (Agent
     Builder, Workflow Orchestration, Knowledge Base, Multi-Agent Teams, API
     Gateway, Monitoring & Observability).
  4. Social proof: "Trusted by AI Teams Everywhere" + testimonial quotes.
  5. Contact: "Talk to Our Team" + form (Full Name, Email Address, Phone
     Number, Project Type, Project Details, Send Message) + Phone, Email,
     Address, Office Hours info cards.
  6. FAQ: "Frequently Asked Questions" + accordion of four Q&As.
  7. CTA: "Ready to Build Your First Agent?" + "Start Building Free" /
     "Read the Docs".
  8. Footer: Platform / Resources / Company link columns, copyright,
     social links.
- **Design tokens extracted from the DOM + CSS:**
  - Primary **emerald green `#059669`** (`--color-primary-600`; scale:
    `#34d399` 400 / `#10b981` 500 / `#059669` 600 / `#047857` 700) — solid
    buttons, links, highlights.
  - Dark surfaces `gray-950 #030712` / `gray-900 #111827` /
    `gray-800 #1f2937`; light surfaces `gray-50` / `gray-100`.
  - Body text `gray-400/500/600`, headings `gray-900`, white on dark.
  - Font: **"Manrope"** (Google Fonts, weights 300–800).
  - Buttons: `rounded-lg`, solid primary (`bg-primary-600 text-white`,
    hover `primary-700`); outline variant with `border border-gray-300`.
  - Cards: `rounded-2xl`, white with subtle border/shadow (dark: `gray-800`).
- **Recreation decisions:** code panel recreated as plain text (no asset
  copy); photos → seeded picsum placeholders
  (`picsum.photos/seed/cortex-<n>/<w>/<h>`); icons → lucide-react; Manrope
  via Google Fonts `<link>`; light-default + class-based dark mode matching
  the original's `dark:` classes.

Cortex lives in `apps/cortex` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Cortex",
anchor links to the page's sections, a "Start Building" call-to-action, and
a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Cortex page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Cortex" and links to Platform, Pricing, and Contact
- **AND** the navbar SHALL show a "Start Building" CTA link
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero with a trust badge, a level-1 headline, a
blurb, two CTA buttons, a statistics row, and a code panel.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Build Autonomous AI Agents"
- **AND** it SHALL show a badge, a blurb, and "Start Building Free" and "View Documentation" buttons
- **AND** it SHALL show statistics for agents deployed, tasks completed, integrations, and uptime
- **AND** it SHALL show a code panel with a Python agent example

### Requirement: Features section

The system SHALL render a features section with a heading and at least six
feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Build AI Agents"
- **AND** it SHALL show six feature cards titled Agent Builder, Workflow Orchestration, Knowledge Base, Multi-Agent Teams, API Gateway, and Monitoring &amp; Observability, each with a blurb

### Requirement: Social proof section

The system SHALL render a social-proof section with a heading and
testimonials.

#### Scenario: Social proof content

- **GIVEN** the page is rendered
- **WHEN** the social-proof section is displayed
- **THEN** it SHALL show a heading "Trusted by AI Teams Everywhere"
- **AND** it SHALL show at least two testimonial quotes with authors

### Requirement: Contact section

The system SHALL render a contact section with a heading, a validated form,
and contact information cards.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a heading "Talk to Our Team" and a form with Full Name, Email Address, Phone Number, Project Type, and Project Details fields and a Send Message submit button
- **AND** it SHALL show Phone, Email, Address, and Office Hours details

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form with an invalid email
- **THEN** an error message SHALL be shown and the message SHALL NOT be sent

#### Scenario: Successful submit

- **GIVEN** the contact form is displayed
- **WHEN** the user fills every field with valid values and submits
- **THEN** the form SHALL show a success confirmation

### Requirement: FAQ section

The system SHALL render an FAQ section with a heading and an accordion of
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show a heading "Frequently Asked Questions"
- **AND** it SHALL show at least four questions

#### Scenario: Expand and collapse

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question
- **THEN** the answer SHALL be revealed
- **AND** activating it again SHALL hide the answer

### Requirement: CTA band

The system SHALL render a closing CTA band with a heading and buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show a heading "Ready to Build Your First Agent?"
- **AND** it SHALL show "Start Building Free" and "Read the Docs" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Platform, Resources, and Company link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Cortex app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Cortex — AI Agent Platform Template"
