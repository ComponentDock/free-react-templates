# Template: Stratos (Cloud Platform Template)

## Purpose

Stratos is a single-page cloud platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cloudnest" website template design
(source: https://colorlib.com/wp/template/cloudnest/), built under a
DIFFERENT name (Stratos — clouds/stratosphere) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Cloudnest" — cloud platform / Astro template
  (source: https://colorlib.com/wp/template/cloudnest/).
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/cloudnest/`) returns 404; the
  ColorLib preview portal hosts the demo at `https://cloudnest-colorlib.pages.dev/`
  (HTTP 200, ~59 KB HTML + `/_astro/Base.*.css` ~65 KB parsed for tokens).
- **Screenshot analyzed:** `cloudnest-template-1771944017064.jpg` (2400×1892)
  viewed in the browser: modern dark-mode SaaS aesthetic — deep navy hero
  with electric indigo accents, white light sections below, terminal
  mockup, DM Sans typography.
- **Section order (1:1):**
  1. Navbar (`header.sticky`): CloudNest logo, links Products (`#services`),
     Pricing, About, Blog, Contact, dark-mode toggle, primary CTA
     "Get Started Free".
  2. Hero (`section.bg-gradient-to-br from-gray-950 via-primary-950 to-gray-950`):
     badge pill with pulsing dot "Trusted by 10,000+ developers worldwide",
     H1 "Deploy at the Speed of Light" (gradient text on "Speed of Light"),
     subtext, buttons "Start Deploying Free" (primary) + "View Documentation"
     (outline), left-column stats row (border-t white/10): 500K+ Deployments,
     40+ Global Regions, 99.99% Uptime SLA, <50ms Global Latency; right:
     terminal/CLI mockup (header dots + `$ cloudnest login` → `$ cloudnest
deploy` → "Deployment successful! URL: https://myapp.cloudnest.app").
  3. Stats band (`section.border-y bg-gray-50`): animated counters 500K+
     Deployments, 40+ Global Regions, 99.99% Uptime SLA, 10K+ Active Teams.
  4. Features (`section#services.bg-gray-50`): "Products" pill badge, H2
     "Everything You Need to Ship", subtext, 6 cards — App Hosting, Managed
     Databases, Edge Functions, Object Storage, Container Registry, Load
     Balancing (icon + title + blurb each).
  5. Testimonials (`section.bg-gray-50`): H2 "Loved by Developers", subtext,
     3 quote cards — Sarah Chen (CTO, DataStream), Marcus Rodriguez (Lead
     Engineer, Fintech Labs), Aisha Patel (VP Engineering, NovaTech).
  6. FAQ (`section.bg-white`): H2 "Frequently Asked Questions", subtext, 5
     accordion items (frameworks/languages, pricing, uptime guarantee,
     migration, security & compliance).
  7. CTA (`section.bg-gradient-to-br from-primary-600 to-primary-800`):
     H2 "Ready to Ship Faster?", subtext, buttons "Get Started Free" +
     "Talk to Sales".
  8. Footer (dark): blurb "Deploy anything, scale everything.", contact
     (phone, email, address), link columns Products / Developers / Company,
     copyright + Privacy Policy, Terms of Service, Style Guide.
- **Design tokens extracted from the demo stylesheet (oklch values → hex):**
  - Brand primary: indigo scale — `#6366f1` (primary-500), `#4f46e5`
    (primary-600), `#4338ca` (primary-700), `#818cf8` (primary-400),
    `#a5b4fc` (primary-300), `#c7d2fe` (primary-200), indigo-950 `#1e1b4b`
    for the hero gradient.
  - Accent: sky `#38bdf8` (used in the hero gradient text end stop).
  - Dark surfaces: `#030712` (gray-950), `#111827` (gray-900),
    `#1f2937` (gray-800); light surfaces: `#f9fafb` (gray-50),
    `#f3f4f6` (gray-100).
  - Text grays: `#6b7280` (gray-500), `#4b5563` (gray-600), `#374151`
    (gray-700), `#9ca3af` (gray-400), `#d1d5db` (gray-300).
  - Font: **"DM Sans"** (Google Fonts `<link>` in index.html).
  - Buttons: rounded-lg, primary solid indigo with white text; outline
    variant border-white/15 on dark hero; pill badges with
    border-primary-500/30 + bg-primary-500/10 + text-primary-300.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/stratos-<n>/<w>/<h>` for testimonial avatars and the
  terminal overlay — no assets copied); icons → lucide-react; brand icon
  (cloud logo) → inline SVG (lucide `Cloud`); DM Sans via Google Fonts;
  indigo palette in `@theme`. Paraphrased copy keeps the same content kinds.
- **What differs from the original:** name (Stratos vs Cloudnest), no
  count-up/typewriter/parallax JS animations (static values), placeholder
  avatars instead of stock photos, single-page anchors for Pricing/About/
  Blog/Contact links.

Stratos lives in `apps/stratos` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Stratos",
anchor links to the page's sections, a "Get Started Free" CTA, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Stratos page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Stratos" and links to Products, Pricing, About, Blog, and Contact
- **AND** the navbar SHALL show a "Get Started Free" CTA link
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width dark hero with a badge, a headline, a
blurb, two CTAs, a stats row, and a terminal mockup.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the badge "Trusted by 10,000+ developers worldwide"
- **AND** it SHALL contain a level-1 heading with the text "Deploy at the Speed of Light"
- **AND** it SHALL show a blurb and two CTA buttons ("Start Deploying Free", "View Documentation")

#### Scenario: Hero stats

- **GIVEN** the hero is displayed
- **WHEN** the stats row renders
- **THEN** it SHALL show 500K+ Deployments, 40+ Global Regions, 99.99% Uptime SLA, and <50ms Global Latency

#### Scenario: Terminal mockup

- **GIVEN** the hero is displayed
- **WHEN** the terminal panel renders
- **THEN** it SHALL show a "stratos login" command line and a "Deployment successful!" status line

### Requirement: Stats band

The system SHALL render a stats band with four headline statistics.

#### Scenario: Stats band content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show 500K+ Deployments, 40+ Global Regions, 99.99% Uptime SLA, and 10K+ Active Teams

### Requirement: Features section

The system SHALL render a features section with a heading and six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Ship"
- **AND** it SHALL show six feature cards titled App Hosting, Managed Databases, Edge Functions, Object Storage, Container Registry, and Load Balancing, each with a blurb

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and three quote cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Loved by Developers"
- **AND** it SHALL show three testimonials with author names (Sarah Chen, Marcus Rodriguez, Aisha Patel) and roles

### Requirement: FAQ section

The system SHALL render an FAQ section with an accordion of five questions.

#### Scenario: FAQ accordion

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show five questions including "What frameworks and languages does Stratos support?" and "How does pricing work?"
- **AND** pressing a question SHALL expand its answer and SHALL collapse a previously expanded answer

### Requirement: CTA section

The system SHALL render a gradient CTA section with a heading and two buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Ship Faster?"
- **AND** it SHALL show "Get Started Free" and "Talk to Sales" buttons

### Requirement: Footer

The system SHALL render a footer with a blurb, contact details, link
columns, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the blurb, contact details (phone, email, address), and link columns Products, Developers, and Company
- **AND** it SHALL show a copyright line and legal links (Privacy Policy, Terms of Service)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Stratos app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Stratos — Cloud Platform Template"
