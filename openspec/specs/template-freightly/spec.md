# Template: Freightly (Logistics Template)

## Purpose

Freightly is a single-page logistics/shipping landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Logitrans" website template design
(source: https://colorlib.com/wp/template/logitrans/), built under a
DIFFERENT name (Freightly — freight + -ly) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-logitrans/` using the FORBIDDEN ColorLib source
> name; it was deleted and replaced by this fresh prep (new name Freightly),
> matching the Cloudnest→Stratos / Ironforge→Forgefit precedent.

## Design reference (replication findings)

- **Original:** ColorLib "Logitrans" — logistics / freight / shipping
  company website template (source: https://colorlib.com/wp/template/logitrans/).
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/logitrans/`) returns 404; the
  ColorLib preview portal hosts the demo at
  `https://logitrans-colorlib.pages.dev/` (HTTP 200, ~94 KB HTML +
  `/_astro/index@_@astro.CUkGMIAf.css` ~47.7 KB parsed for tokens). The
  TEMPLATES.md screenshot (`logitrans-template-1770211309698.jpg`) is the
  visual reference: dark blue logistics hero with a shipment-tracking
  widget, blue (#3b82f6) primary with amber (#f59e0b) accents.
- **Section order (1:1, from live demo DOM):**
  1. Navbar: "SwiftCargo" logo, links Services, Why Us, Calculator,
     Testimonials, Contact, phone (1-800-SWIFT-GO), "Get a Quote" button;
     sticky header that gains a white/95 blur + shadow when scrolled.
  2. Hero (dark blue gradient + faint grid pattern): H1 "Ship Anywhere,
     Anytime", subtext, "Explore Services" button, shipment-tracking
     widget ("Track Your Shipment" input + "Track Package" button, status
     "In Transit — Est. delivery: Tomorrow, 2:00 PM"), trust badges (Free
     tracking, Insured shipments, 24/7 support).
  3. Services: "Complete Logistics Solutions" — 6 cards: Air Freight,
     Ocean Freight, Ground Transport, Warehousing, Customs Brokerage,
     Express Delivery (icon + blurb + feature bullets + "Get Quote").
  4. Why Us: "Shipping Made Simple" — 4 cards: On-Time Delivery (98.5%),
     Global Network (150+ countries), Cargo Insurance, 24/7 Support, each
     with icon + blurb; stats row (Active Routes 2,847 / Deliveries Today
     3,247).
  5. Shipping Calculator: "Calculate Your Shipping Cost" — destination
     select + 4 shipping options (Economy 7–10 days, Standard 3–5 days
     "Most Popular", Express 1–2 days, Same Day) + "Calculate Shipping
     Cost" button + "Estimated Total" readout.
  6. Testimonials: "Trusted by Industry Leaders" — 3 quote cards (Michael
     Chen — VP of Operations, TechFlow Inc.; Sarah Martinez; David
     Okonkwo — CEO, AfriTrade Exports) + certifications row (ISO 9001
     Certified, IATA Member, C-TPAT, WCA Member).
  7. CTA: "Ready to Ship?" — "Get started with SwiftCargo" + bullets
     (Call 1-800-SWIFT-GO, Free tracking, No hidden fees, Cancel anytime).
  8. Contact: "Let's Discuss Your Shipping Needs" — 4 info cards (Phone,
     Email, Headquarters: 1250 Logistics Way, Suite 500, Chicago, IL
     60601, Business Hours: Monday–Friday) + "Send us a message" form with
     "Send Message" button.
  9. Footer: "SwiftCargo" brand + blurb + social icons, columns Services
     (Air Freight, Ocean Freight, Ground Transport, Warehousing, Customs
     Brokerage, Express Delivery) / Quick Links (Get a Quote, Track
     Shipment, Why Choose Us, Testimonials, Contact Us) / Contact (phone,
     email, address), copyright "© 2026 SwiftCargo. All rights reserved."
     - Privacy Policy + Terms of Service links.

- **Design tokens extracted from `index@_@astro.CUkGMIAf.css` + DOM:**
  - Brand color: **#3b82f6** (blue-500; scale #2563eb, #60a5fa, #93c5fd,
    #bfdbfe, #dbeafe, #eff6ff, #1e40af, #1e3a8a, #172554) — primary CTAs,
    links, accents, hero gradient.
  - Secondary accent: **#f59e0b** (amber-500; #fbbf24, #fde68a, #fffbeb,
    #b45309, #d97706, #92400e, #78350f) — badges, highlights, gradient
    text end.
  - Status green: **#00c758** (green-500) — "In Transit" status chip.
  - Neutrals: #f9fafb, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827, #030712, #fff; dark hero/footer
    (near-black blue).
  - Fonts: **"Inter"** (400–800) via Google Fonts.
  - Shapes: rounded-xl icon tiles + inputs, rounded-2xl cards, pill
    (rounded-full) buttons; gradient text (blue→amber) for headline
    emphasis; hover shadow-primary-500/10 + hover:border-primary-200 on
    cards; focus ring primary-500/20 on inputs.
  - Section backgrounds: dark hero with `from-primary-900/90
via-primary-950 to-gray-950` gradient + 64px grid pattern (white 3%
    lines); white/gray-50 light sections; dark footer. Scroll-triggered
    `fadeInUp` animation on `[data-animate]` elements.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/freightly-<n>/<w>/<h>`); icons → lucide-react; Inter
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome;
  scroll-reveal via IntersectionObserver, no extra dependencies.

Freightly lives in `apps/freightly` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Freightly",
anchor links to the page's sections, a phone number, a "Get a Quote" CTA,
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Freightly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Freightly" and links to
  Services, Why Us, Calculator, Testimonials, and Contact
- **AND** the navbar SHALL show a phone number, a "Get a Quote" button, and
  a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Sticky header style

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down the page
- **THEN** the header SHALL gain a translucent background with a shadow

### Requirement: Hero section

The system SHALL render a dark hero with a headline, a shipment tracking
widget, and trust badges.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Ship Anywhere, Anytime" and
  an "Explore Services" button
- **AND** it SHALL show a tracking widget with a "Track Package" button
- **AND** it SHALL show trust badges including Free tracking and 24/7
  support

### Requirement: Services section

The system SHALL render a services section with at least six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Complete Logistics Solutions"
- **AND** it SHALL show cards for Air Freight, Ocean Freight, Ground
  Transport, Warehousing, Customs Brokerage, and Express Delivery
- **AND** each card SHALL show a "Get Quote" link

### Requirement: Features section

The system SHALL render a "Why Us" section with at least four feature cards
and a stats row.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Shipping Made Simple"
- **AND** it SHALL show cards for On-Time Delivery, Global Network, Cargo
  Insurance, and 24/7 Support
- **AND** it SHALL show stats including Active Routes and Deliveries Today

### Requirement: Calculator section

The system SHALL render a shipping cost calculator with at least four
shipping options and a cost estimate.

#### Scenario: Calculator content

- **GIVEN** the page is rendered
- **WHEN** the calculator section is displayed
- **THEN** it SHALL contain a heading "Calculate Your Shipping Cost"
- **AND** it SHALL show shipping options including Economy, Standard (with
  a "Most Popular" hint), and Express
- **AND** it SHALL show a "Calculate Shipping Cost" button and an estimated
  total readout

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes
and a certifications row.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Industry Leaders"
- **AND** it SHALL show at least three testimonial quotes with names
- **AND** it SHALL show certifications including ISO 9001 Certified

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and benefit bullets.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Ship?"
- **AND** it SHALL show a phone number and benefit bullets including Free
  tracking and No hidden fees

### Requirement: Contact section

The system SHALL render a contact section with four info cards and a message
form.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Let's Discuss Your Shipping Needs"
- **AND** it SHALL show Phone, Email, Headquarters, and Business Hours cards
- **AND** it SHALL show a "Send us a message" form with a "Send Message"
  button

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns Services, Quick Links, and Contact
- **AND** it SHALL show a copyright line with Privacy Policy and Terms of
  Service links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Freightly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Freightly — Logistics Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh freightly` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero, services, features,
      calculator, testimonials, cta, contact, footer)
- [ ] Design tokens in `@theme`: brand blue `#3b82f6` (+ scale #2563eb,
      #93c5fd, #bfdbfe, #dbeafe, #eff6ff, #1e40af, #1e3a8a, #172554),
      amber `#f59e0b`, status green `#00c758`, gray neutrals
- [ ] Fonts: Inter (400–800) via Google Fonts
- [ ] Buttons: pill (rounded-full), blue primary with white text; icon tiles
      rounded-xl; cards rounded-2xl
- [ ] Hero dark with blue gradient + grid pattern; footer dark
- [ ] Sticky header scroll style; scroll-reveal fadeInUp animation without
      extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/freightly-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
