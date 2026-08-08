# Template: Forma (Astro Template)

## Purpose

Forma is a single-page design studio landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Atelier" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Atelier" — design studio template
  (source: https://colorlib.com/wp/template/atelier/).
- **Preview URL analyzed:** https://atelier-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/atelier/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal). The
  TEMPLATES.md screenshot (`atelier-template.jpg`) is the visual reference;
  the live DOM + Tailwind classes + `_astro/Base.*.css` are the design
  source of truth.
- **Section order (1:1, from the live demo DOM):**
  1. Header (`<header>` sticky, white/80 backdrop-blur, dark variant
     gray-950/80): logo wordmark, nav links About / Portfolio / Services /
     Pricing / Blog / Contact, "Book Consultation" pill button, dark-mode
     toggle.
  2. Hero: serif (Playfair Display) headline "Transforming Spaces Into
     Extraordinary Experiences" in white with a soft text-shadow on a dark
     photographic-style background, eyebrow line, blurb, primary + outline
     CTA buttons.
  3. Services (`#services`): eyebrow + H2 "Comprehensive Design Services";
     6 icon cards — Residential Design, Commercial Design, Hospitality
     Design, Color & Material Consulting, Space Planning, Renovation
     Management (title + blurb each; rounded cards, gold icon chips).
  4. Portfolio (`#portfolio`): H2 "Featured Projects"; gallery of 6
     projects — Coral Gables Residence, SoFi Office Complex, The Setai
     Penthouse, Mandarin Oriental Suite, Wynwood Gallery, Brickell Heights
     Loft (image + caption each).
  5. Process (`#process`): H2 "How We Work"; 4 numbered steps — Consult,
     Design, Refine, Execute.
  6. Testimonials (`#testimonials`): H2 "What Our Clients Say"; carousel
     of client quotes with prev/next arrow controls.
  7. Awards (`#awards`): H2 "Awards & Accolades"; 6 award items — Best
     Residential Design, Hospitality Design Award, Innovation in Commercial
     Design, Emerging Studio of the Year, Sustainable Design Leader,
     Top 50 Interior Designers.
  8. FAQ (`#faq`): H2 "Frequently Asked Questions"; accordion of 5+
     questions (consultation process, project timelines, budgets, design
     packages, remote collaboration).
  9. Contact (`#contact`, "Start Your Design Journey"): left — contact
     form (Full Name, Email Address, Phone Number, Project Type select,
     Project Details textarea, "Send Message" gold submit); right — contact
     info cards (Phone, Email, Studio, Studio Hours).
  10. CTA band: serif H2 "Ready to Transform Your Space?" + blurb + CTA
      buttons.
  11. Footer: brand blurb + contact line, link columns, social icons
      (GitHub, X, LinkedIn), copyright bar.
- **Design tokens extracted from the demo CSS (`_astro/Base.*.css`):**
  - Primary brand **gold/bronze** accent scale: `#8c6124` (deep bronze),
    `#a87a2a` (accent-600 buttons/hovers), `#c49536` (accent-500 primary),
    `#d4a854` (accent-400 highlights), plus `#b88a3e`-family tints for
    chips (accent-100/200/300 lighter golds).
  - Dark surfaces: `#030712`-family page dark bg (gray-950), `#111827`
    (gray-900) cards, `#1f2937` (gray-800) borders/inputs, `#374151`
    (gray-700).
  - Light surfaces: `#ffffff` hero-adjacent sections, `#f9fafb` (gray-50)
    alt sections, `#e5e7eb` (gray-200) hairlines, `#d1d5db` (gray-300).
  - Text: `#111827` (gray-900) headings, `#6b7280`/`#374151` body,
    `#6b7280` muted; white on dark.
  - Fonts: **"Playfair Display"** (serif) for display/headings, **"DM
    Sans"** for body — both via Google Fonts `<link>`.
  - Buttons: pill (rounded-full), solid gold primary with white text;
    secondary white/transparent with gray border.
  - Cards: rounded-xl/2xl (0.75–1rem), 1px `#e5e7eb`/`#1f2937` borders.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/forma-<n>/<w>/<h>` for the hero background and
  portfolio gallery); icons → lucide-react (ruler, sofa, building, palette,
  layout, hammer, compass, pen-tool, check, phone, mail, map-pin, clock,
  chevron, arrow-left/right; brand icons GitHub/X/LinkedIn as inline SVG —
  removed from lucide-react); fonts via Google Fonts `<link>`; gold scale
  in `@theme` so shared Button/ButtonLink `primary` variants resolve to the
  brand gold; dark-mode toggle on `<html>.dark`; hero background recreated
  as a dark gradient + seeded image (no asset copied); demo copy
  paraphrased but same kinds; brand name "Atelier" → "Forma". No
  asset/CSS/font-file copying.

Forma lives in `apps/forma` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Forma",
anchor links to the page's sections, a "Book Consultation" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Forma page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Forma" and links to About, Portfolio, Services, Pricing, Blog, and Contact
- **AND** the navbar SHALL show a "Book Consultation" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with an eyebrow, a serif
headline, a blurb, and two CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Transforming Spaces Into Extraordinary Experiences"
- **AND** it SHALL show an eyebrow line, a blurb, and primary and outline CTA buttons

### Requirement: Services section

The system SHALL render a services section with a heading and six service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Comprehensive Design Services"
- **AND** it SHALL show six service cards with titles (Residential Design, Commercial Design, Hospitality Design, Color & Material Consulting, Space Planning, Renovation Management) and blurbs

### Requirement: Portfolio section

The system SHALL render a portfolio section with a gallery of six projects.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL contain a heading "Featured Projects"
- **AND** it SHALL show six project captions (Coral Gables Residence, SoFi Office Complex, The Setai Penthouse, Mandarin Oriental Suite, Wynwood Gallery, Brickell Heights Loft)

### Requirement: Process section

The system SHALL render a process section with a heading and four steps.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "How We Work"
- **AND** it SHALL show four steps (Consult, Design, Refine, Execute)

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and a
carousel of client quotes with previous/next controls.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show a client quote with an author name and role

#### Scenario: Testimonial navigation

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user activates the next or previous control
- **THEN** the carousel SHALL show the following or preceding testimonial

### Requirement: Awards section

The system SHALL render an awards section with a heading and six award
items.

#### Scenario: Awards content

- **GIVEN** the page is rendered
- **WHEN** the awards section is displayed
- **THEN** it SHALL contain a heading "Awards & Accolades"
- **AND** it SHALL show six award items (Best Residential Design, Hospitality Design Award, Innovation in Commercial Design, Emerging Studio of the Year, Sustainable Design Leader, Top 50 Interior Designers)

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

### Requirement: Contact section

The system SHALL render a contact section with a validated form and contact
info cards.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a form with Full Name, Email Address, Phone Number, Project Type, and Project Details fields and a "Send Message" button
- **AND** it SHALL show contact info cards (Phone, Email, Studio, Studio Hours)

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form with an invalid email
- **THEN** the form SHALL show a validation error and not submit
- **AND** when the user submits a valid form, a success message SHALL be shown

### Requirement: CTA band

The system SHALL render a call-to-action band with a heading and two
buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Ready to Transform Your Space?"
- **AND** it SHALL show "Book a Consultation" and "View Portfolio" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a brand blurb
- **AND** it SHALL show social links (GitHub, X, LinkedIn) and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Forma app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, services, portfolio, process, testimonials, awards, FAQ, contact, CTA band, and footer in order
- **AND** the document title SHALL be "Forma — Astro Template"

## Verification checklist

- [ ] `openspec/specs/template-forma/spec.md` present with the REAL section
      list (header → hero → services → portfolio → process → testimonials →
      awards → FAQ → contact → CTA → footer).
- [ ] Design tokens above (gold `#c49536`/`#a87a2a`/`#d4a854`, dark
      `#030712`/`#111827`, Playfair Display + DM Sans fonts, pill buttons,
      rounded cards) captured in the spec.
- [ ] `docs/templates/forma/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh forma`,
      PR lists source (ColorLib Atelier), preview URL, tokens, and what
      differs.
