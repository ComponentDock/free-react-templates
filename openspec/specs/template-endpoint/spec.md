# Template: Endpoint (Astro Template)

## Purpose

Endpoint is a single-page API platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Apiforge" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Apiforge" — API platform template
  (source: https://colorlib.com/wp/template/apiforge/).
- **Preview URL analyzed:** https://apiforge-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/apiforge/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal). The
  TEMPLATES.md screenshot (`apiforge-template-1771944059634.jpg`) is the
  visual reference; the live DOM + Tailwind classes below are the design
  source of truth.
- **Section order (1:1, from the live demo DOM):**
  1. Header (`<header>` sticky, white/80 backdrop-blur, dark variant
     gray-950/80): logo wordmark, nav links Products / Pricing / About /
     Blog / Contact, "Get API Key" pill button, dark-mode toggle.
  2. Hero: eyebrow line "Trusted by 1M+ developers worldwide", serif-less
     bold H1 "Ship Better APIs Faster" (orange highlight word), blurb
     ("The complete API infrastructure platform…"), two CTAs — primary
     orange pill "Get Free API Key" + outline pill "View Documentation" —
     a stats row (1M+ Developers · 50B+ API Calls/mo · 99.999% Uptime ·
     200+ SDKs) on the left, and a dark terminal window on the right
     (macOS-style traffic-light dots; CLI walkthrough: `npm install -g
@apiforge/cli`, `apiforge init my-api`, `apiforge deploy --prod`,
     `curl https://api.example.com/v1/health` with green/blue syntax
     highlights).
  3. Stats band: repeated metrics as animated counters (1M+ Developers,
     50B+ API Calls/mo, 99.999% Uptime, 200+ SDKs) on a tinted band.
  4. Features (`#services`): eyebrow "Platform" + H2 "Everything You Need
     to Ship APIs"; 6 icon cards — API Gateway, Rate Limiting,
     Authentication, Analytics Dashboard, Webhook Management, SDK
     Generation (title + blurb each; rounded cards, gray-50/gray-900
     surfaces, orange icon chips).
  5. Testimonials (`#testimonials`): eyebrow "Testimonials" + H2 "Trusted
     by Engineering Teams" + intro line; carousel of developer quotes
     (e.g. Sarah Chen, CTO DataStream Inc.) with prev/next arrow controls.
  6. Contact (`#contact`, "Start Building Today"): left — contact form
     (Full Name, Email Address, Phone Number, Project Type select, Project
     Details textarea, "Send Message" orange submit); right — contact info
     cards (Phone, Email, Address, Office Hours) + Google Maps embed
     (recreated as a styled placeholder card, no third-party iframe).
  7. FAQ (`#faq`): eyebrow "FAQ" + H2 "Frequently Asked Questions" +
     accordion of 5 questions (get started in <5 min, gateway protocols
     REST/GraphQL/gRPC/WebSocket, pricing scales with API calls, OpenAPI
     import support, support tiers).
  8. CTA band: H2 "Ready to Ship Better APIs?" + "Join 1M+ developers
     building production-ready APIs with Endpoint" + buttons "Get Free API
     Key" / "Talk to Sales".
  9. Footer: brand blurb + contact line, three link columns (Products:
     API Gateway / Authentication / Analytics / Webhooks; Developers:
     Documentation / SDKs / API Reference / Changelog; Company: About /
     Blog / Careers / Contact), social icons (GitHub, X, LinkedIn),
     copyright bar with Privacy Policy / Terms of Service links.
- **Design tokens extracted from the demo CSS (`_astro/Base.*.css`):**
  - Primary brand **orange** (Tailwind orange scale): `#f97316`
    (orange-500) buttons/accents, `#ea580c` (orange-600) hover/primary
    deep, `#fb923c` (orange-400) highlights, `#c2410c` (orange-700)
    hover-dark, `#fed7aa`/`#ffedd5` (orange-200/100) tint chips.
  - Dark surfaces: `#030712` (gray-950) page dark bg, `#111827` (gray-900)
    cards, `#1f2937` (gray-800) borders/input, `#374151` (gray-700).
  - Light surfaces: `#f9fafb` (gray-50) alt section, `#f3f4f6` (gray-100),
    `#e5e7eb` (gray-200) hairlines.
  - Text: `#111827` (gray-900) headings, `#4b5563` (gray-600)/`#6b7280`
    (gray-500) body, `#9ca3af` (gray-400) muted; white on dark.
  - Font: **"Outfit"** (sans) for everything; mono stack for terminal
    code. Loaded via Google Fonts `<link>`.
  - Buttons: pill (rounded-full / `3.40282e38px`), primary solid orange
    with white text; secondary white/transparent with gray border.
  - Cards: `border-radius: var(--radius-lg)`/`xl` (0.5–0.75rem), 1px
    `#e5e7eb`/`#1f2937` borders.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/endpoint-<n>/<w>/<h>`, used sparingly — this design
  is mostly code/UI, not photos); icons → lucide-react (search, sun/moon,
  network, gauge, shield, bar-chart, webhook, code, phone, mail, map-pin,
  clock, chevron, arrow-left/right, github/twitter/linkedin brand icons as
  inline SVG — brand icons were removed from lucide-react); Outfit via
  Google Fonts `<link>`; orange scale in `@theme` so shared
  Button/ButtonLink `primary` variants resolve to the brand orange;
  terminal window recreated with `bg-gray-900` + traffic-light dots (no
  image copied); maps embed replaced by a styled placeholder card; demo
  copy paraphrased but same kinds; brand name "Apiforge" → "Endpoint",
  `@apiforge/cli` → `@endpoint/cli`. No asset/CSS/font-file copying.

Endpoint lives in `apps/endpoint` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Endpoint",
anchor links to the page's sections, a "Get API Key" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Endpoint page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Endpoint" and links to Products, Pricing, About, Blog, and Contact
- **AND** the navbar SHALL show a "Get API Key" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with an eyebrow line, a headline,
a blurb, two CTA buttons, a stats row, and a terminal window.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Ship Better APIs Faster"
- **AND** it SHALL show an eyebrow line, a blurb, a "Get Free API Key" CTA, and a "View Documentation" CTA
- **AND** it SHALL show the stats (1M+ Developers, 50B+ API Calls/mo, 99.999% Uptime, 200+ SDKs)
- **AND** it SHALL show a terminal window with CLI command lines

### Requirement: Stats band

The system SHALL render a stats band repeating the hero metrics.

#### Scenario: Stats band content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show four metrics (Developers, API Calls/mo, Uptime, SDKs) with their values

### Requirement: Features section

The system SHALL render a features section with a heading and six feature
cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Ship APIs"
- **AND** it SHALL show six feature cards with titles (API Gateway, Rate Limiting, Authentication, Analytics Dashboard, Webhook Management, SDK Generation) and blurbs

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and a
carousel of quotes with previous/next controls.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Engineering Teams"
- **AND** it SHALL show a testimonial quote with an author name and role

#### Scenario: Testimonial navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user activates the next or previous control
- **THEN** the carousel SHALL show the following or preceding testimonial

### Requirement: Contact section

The system SHALL render a contact section with a validated form and contact
info cards.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a form with Full Name, Email Address, Phone Number, Project Type, and Project Details fields and a "Send Message" button
- **AND** it SHALL show contact info cards (Phone, Email, Address, Office Hours)

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form with an invalid email
- **THEN** the form SHALL show a validation error and not submit
- **AND** when the user submits a valid form, a success message SHALL be shown

### Requirement: FAQ section

The system SHALL render an FAQ section with an accordion of questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least five accordion questions

#### Scenario: Accordion toggle

- **GIVEN** an FAQ item is displayed
- **WHEN** the user activates its toggle button
- **THEN** the answer SHALL expand/collapse accordingly

### Requirement: CTA band

The system SHALL render a call-to-action band with a heading and two
buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Ready to Ship Better APIs?"
- **AND** it SHALL show "Get Free API Key" and "Talk to Sales" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show three link columns (Products, Developers, Company) and a brand blurb
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Endpoint app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, stats band, features, testimonials, contact, FAQ, CTA band, and footer in order
- **AND** the document title SHALL be "Endpoint — Astro Template"

## Verification checklist

- [ ] `openspec/specs/template-endpoint/spec.md` present with the REAL section
      list (header → hero → stats band → features → testimonials → contact →
      FAQ → CTA → footer).
- [ ] Design tokens above (orange `#f97316`/`#ea580c`, dark `#030712`/
      `#111827`, Outfit font, pill buttons, rounded cards) captured in the
      spec.
- [ ] `docs/templates/endpoint/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh endpoint`,
      PR lists source (ColorLib Apiforge), preview URL, tokens, and what
      differs.
