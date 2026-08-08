# Template: Verdict (Law Firm / Attorney Landing)

## Purpose

Verdict is a single-page law firm landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Legaledge 2"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source mapping: `apps/verdict` recreates
https://colorlib.com/wp/template/legaledge-2/ (ColorLib "Legaledge 2" — law
firm / attorneys website template).

## Design reference (replication findings)

- **Original:** ColorLib "Legaledge 2" — law firm / attorneys website
  template (source: https://colorlib.com/wp/template/legaledge-2/).
- **Preview URL:** https://preview.colorlib.com/theme/legaledge-2/ returns
  **404** (confirmed 2026-08-08). The preview portal loads this template from
  `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js` (verified: `legaledge-2` maps
  to `legaledge-colorlib.pages.dev/`). Live demo DOM analyzed:
  https://legaledge-colorlib.pages.dev/ (HTTP 200, ~64 KB, Astro build with
  Tailwind utility markup + compiled `/_astro/Base.C-O-Xrhm.css`). The
  TEMPLATES.md screenshot (`legaledge-template-1770211287987.jpg`,
  2400×1892) was reviewed via browser vision as the visual reference.
- **Section order (1:1, from the live demo DOM):**
  1. Top contact bar (dark strip): phone `(555) 234-5678`,
     `contact@morrisonlaw.com`, `Mon - Fri: 8:00 AM - 6:00 PM`.
  2. Navbar (white): firm name "Morrison & Associates" (shield logo), links
     Home, About, Practice Areas, Attorneys, Contact + gold "Free
     Consultation" button; mobile hamburger (`#mobile-menu-button` toggles
     `.hidden` on `#mobile-menu`).
  3. Hero (`bg-primary-900`, `min-h-screen`, `pt-32 lg:pt-40`): pill outline
     badge "Serving clients since 1985", H1 "Trusted Legal Excellence"
     ("Excellence" in gold italic serif), firm subtext, buttons "Schedule
     Consultation →" (solid gold) + "Our Practice Areas" (white outline),
     trust indicators (AV Rated shield, 24/7 Available clock), and a RIGHT
     SIDE "Free Case Evaluation" glassmorphism form card (Name, Email
     Address, Phone Number, Select Practice Area dropdown, brief description
     textarea, gold "Request Free Consultation" button, privacy disclaimer).
  4. Practice Areas (`id="services"`, `bg-gray-50`): eyebrow "What We Do" +
     heading "Practice Areas" + 6 cards — Corporate Law, Litigation, Real
     Estate, Family Law, Estate Planning, Criminal Defense — each with
     sub-service lines (e.g. Mergers & Acquisitions) + "Learn More".
  5. About / Legacy (`bg-white`): stat chip "1985 Year Founded" + eyebrow
     "About Our Firm" + heading "A Legacy of Legal Excellence" + 4 value
     cards — Proven Track Record, Client-Focused Approach, Industry
     Recognition, Transparent Communication — + stats row (Years of
     Excellence, Client Satisfaction, Expert Attorneys).
  6. Attorneys (`bg-gray-50`): eyebrow "Our Legal Team" + heading "Meet Our
     Attorneys" + 4 cards — James Morrison (Founding Partner), Sarah Chen
     (Managing Partner), Michael Thompson (Senior Partner), Elena Rodriguez
     (Partner).
  7. Testimonials (`bg-primary-900`): eyebrow "Client Testimonials" +
     heading "What Our Clients Say" + 4 quotes (Robert Williams — CEO,
     TechVenture Inc.; Jennifer Martinez — Owner, Martinez Properties; …) +
     same-section "Recognized By Leading Legal Publications" strip: Super
     Lawyers Top 100, Best Lawyers 2024, Martindale-Hubbell AV Preeminent.
  8. CTA (`bg-white`): "Ready to Discuss Your Legal Matter?" + "Schedule a
     free, confidential consultation…" + gold "Request Free Consultation"
     button + bullets (Free initial consultation · No obligation ·
     completely confidential · in-person or virtual).
  9. Footer: firm blurb + Practice Areas / Quick Links / Contact Us link
     columns + legal disclaimer + copyright "© 2026 Morrison & Associates".
- **Visual design (screenshot + DOM):** premium "trustworthy" law-firm
  aesthetic — deep navy surfaces (`#102a43`) with classic gold (`#c9a227`)
  accents; white split navbar over a dark navy hero with a glassmorphism
  lead-capture form; elegant Playfair Display serif headlines (gold italic
  accent word) over clean Inter body text; rounded-lg cards, pill buttons,
  generous whitespace on alternating white / gray-50 bands with navy
  testimonial + CTA bands.

### Design tokens (extracted from compiled stylesheet 2026-08-08)

- Brand navy: `#102a43` (bg-primary-900 — hero, testimonials, CTA bands),
  scale `#243b53` (primary-800), `#334e68`, darkest `#0a1929`.
- Brand gold: `#c9a227` (primary CTA / buttons), `#a78419`,
  `#8a6914` (gold text on light), `#facc15` (light gold).
- Neutrals: white `#fff`, `#f0f4f8` (gray-50 section bands), `#d9e2ec`,
  `#bcccdc` (borders), black `#000`.
- Fonts: **"Playfair Display"** 400–700 (display/serif headings) +
  **"Inter"** 400–700 (body) via Google Fonts.
- Buttons: pill-shaped (rounded-full), solid gold primary with subtle
  shadow; white-outline secondary on dark surfaces.
- Cards/radii: `rounded-lg` (0.5rem) / `rounded-xl` (0.75rem) cards, rounded
  form container with semi-transparent (glassmorphism) background.
- Section backgrounds: white ↔ `bg-gray-50` alternation; dark navy
  `bg-primary-900` bands for hero, testimonials; footer dark.

## Requirements

### Requirement: Top contact bar

The system SHALL render a dark top strip above the navbar with firm contact
details.

#### Scenario: Top bar content

- **GIVEN** the Verdict page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show the phone number, email address, and
  business hours (Mon–Fri 8:00 AM – 6:00 PM)

### Requirement: Navigation bar

The system SHALL render a white navigation bar with the firm name, anchor
links to the page's sections, a "Free Consultation" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Verdict page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name and links to Practice Areas
  and Attorneys
- **AND** the navbar SHALL show a "Free Consultation" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width navy hero with a badge, a level-1
headline, two call-to-action buttons, trust indicators, and a case-evaluation
form.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a badge "Serving clients since 1985"
- **AND** it SHALL contain a level-1 heading "Trusted Legal Excellence"
- **AND** it SHALL show a "Schedule Consultation" button and an "Our Practice
  Areas" button

#### Scenario: Case evaluation form

- **GIVEN** the hero is displayed
- **WHEN** the user fills the case evaluation form
- **THEN** the form SHALL have fields for name, email address, phone number,
  a practice-area select, and a message
- **AND** it SHALL show a "Request Free Consultation" submit button
- **AND** the submit action SHALL block invalid input with per-field errors

### Requirement: Practice areas section

The system SHALL render a practice areas section with exactly six cards.

#### Scenario: Practice areas content

- **GIVEN** the page is rendered
- **WHEN** the practice areas section is displayed
- **THEN** it SHALL contain a heading "Practice Areas"
- **AND** it SHALL show cards for Corporate Law, Litigation, Real Estate,
  Family Law, Estate Planning, and Criminal Defense
- **AND** each card SHALL include a "Learn More" link

### Requirement: Legacy section

The system SHALL render a value-proposition section with four cards and a
stats row.

#### Scenario: Legacy content

- **GIVEN** the page is rendered
- **WHEN** the legacy section is displayed
- **THEN** it SHALL contain a heading "A Legacy of Legal Excellence"
- **AND** it SHALL show cards for Proven Track Record, Client-Focused
  Approach, Industry Recognition, and Transparent Communication
- **AND** it SHALL show a stats row (Years of Excellence, Client
  Satisfaction, Expert Attorneys)

### Requirement: Attorneys section

The system SHALL render an attorneys section with four attorney cards.

#### Scenario: Attorneys content

- **GIVEN** the page is rendered
- **WHEN** the attorneys section is displayed
- **THEN** it SHALL contain a heading "Meet Our Attorneys"
- **AND** it SHALL show cards for James Morrison (Founding Partner), Sarah
  Chen (Managing Partner), Michael Thompson (Senior Partner), and Elena
  Rodriguez (Partner)

### Requirement: Testimonials section

The system SHALL render a navy testimonials section with at least three
quotes and a recognition strip.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least three testimonial quotes with attributed
  authors
- **AND** it SHALL show a "Recognized By Leading Legal Publications" strip
  with Super Lawyers and Martindale-Hubbell mentions

### Requirement: Call to action

The system SHALL render a closing CTA with a headline, reassurance bullets,
and a consultation button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Discuss Your Legal Matter?"
- **AND** it SHALL show a "Request Free Consultation" button
- **AND** it SHALL list the free/no-obligation/confidential assurances

### Requirement: Footer

The system SHALL render a footer with link columns, a disclaimer, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Practice Areas, Quick Links, and Contact Us columns
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Verdict app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Verdict — Law Firm Template"

## Verification checklist

- [ ] `scripts/verify-app.sh verdict` green (typecheck + lint + 100% coverage
      tests + build)
- [ ] Section order matches the demo 1:1 (top bar → navbar → hero + form →
      practice areas → legacy → attorneys → testimonials + recognition → CTA
      → footer)
- [ ] Brand tokens in `@theme`: navy `#102a43` scale + gold `#c9a227` scale;
      Playfair Display + Inter linked in `index.html`
- [ ] Glassmorphism case-evaluation form with zod validation + per-field
      errors; submit blocked until valid
- [ ] Placeholders `picsum.photos/seed/verdict-<n>/<w>/<h>`; lucide-react
      icons (shield, clock, phone, mail, scale, gavel, etc.)
- [ ] Dark-mode toggle + `dark:` variants on gray bands per demo
- [ ] PR description states: source template Legaledge 2, preview URL +
      pages.dev fallback, design tokens, renames, placeholders
