# Template: Helios (Solar Energy Company Template)

## Purpose

Helios is a single-page solar energy company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Solarshift" website template design
(source: https://colorlib.com/wp/template/solarshift/), built under a
DIFFERENT name (Helios — the Greek sun god) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-solarshift/` (plus `docs/templates/solarshift/`)
> using the FORBIDDEN ColorLib source name and containing no research or
> Gherkin requirements; both were deleted and replaced by this fresh prep
> (new name Helios), matching the Cloudnest→Stratos / Neuralflow→Sentient /
> Saasify→Zenith precedent.

## Design reference (replication findings)

- **Original:** ColorLib "Solarshift" — solar energy website template
  (category "Astro Website Templates"; "built with Astro and Tailwind
  CSS. Features a savings calculator, product showcases, ROI charts, and
  financing comparisons").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/solarshift/`) returns 404; the
  ColorLib preview portal hosts the demo at
  `https://solarshift-colorlib.pages.dev/` (HTTP 200, ~85 KB HTML +
  `/_astro/Base.DGIjEtFT.css` ~59 KB parsed for tokens). Same
  Cloudflare-Pages hosting pattern as Saasify→Zenith / Serenite→Sooth.
  The TEMPLATES.md screenshot (`solarshift-template.jpg`) shows the
  design visually (light, green-accented, flat minimal).
- **Section order (1:1, from live demo DOM):**
  1. Navbar: "SolarShift" logo (sun icon + wordmark), links About,
     Products, Services (dropdown: Residential Solar, Commercial Solar,
     Battery Storage), Pricing, Blog, Contact; "Get Free Quote" green CTA
     button; mobile hamburger menu.
  2. Hero (light, green-tinted gradient + floating blurred blobs): pill
     badge "Go Solar Today" (leaf icon), H1 "Power Your Home With Clean
     Energy" (accent word highlighted in brand green), subtext "Harness
     the power of the sun to reduce your energy bills and protect the
     environment...", buttons "Get Free Quote" (primary green) + phone
     link "Call (555) 123-4567", social proof "Join 10,000+ homeowners
     who switched to solar"; right column = **savings calculator card**
     ("Estimate Your Savings" / "See how much you could save with
     solar"): state dropdown, monthly-bill range slider ($50–$500, step
     10, default 150), 4 result boxes (Annual Savings, CO2 Offset,
     Payback Period, Total Cost), wide green "Get Free Assessment"
     button. (Screenshot variant of the hero shows micro-stats
     "25,000+ Team Jobs" / "8,500+ Solar Panels" — older copy; live demo
     is authoritative.)
  3. Stats bar (light gray bg): 4 centered stats — 10K+ Installations,
     $50M+ Saved for Customers, 98% Customer Satisfaction, 50 States
     Served.
  4. Services: badge "Services", H2 "Complete Solar Solutions" ("From
     initial consultation to ongoing maintenance...") — 6 cards (icon
     tile `h-12 w-12 rounded-xl bg-primary-100 text-primary-600` + title
     - blurb): Residential Solar, Commercial Solar, Battery Storage,
       Solar Maintenance, Energy Audit, Roof Assessment.
  5. Products: badge "Products", H2 "Premium Solar Equipment" — 3 cards
     (image aspect-[3/2] with shine overlay, title, blurb, 3 mini-spec
     cells): SunPower Maxeon 6, LG NeON H+, Canadian Solar HiKu7.
  6. Impact: badge "Impact", H2 "Our Environmental Impact" on a **primary
     green band** (bg-primary-600) — 4 white counters with icon tiles
     (Tons CO2 Offset, Trees Equivalent, kWh Generated, Homes Powered).
  7. Financing: badge "Financing", H2 "Flexible Payment Options" — 3
     pricing cards, each with corner badge (Best Value / Most Popular /
     Zero Risk), blurb, 4 checkmark bullets, "Learn More": Cash
     Purchase, Solar Lease, Power Purchase Agreement.
  8. Process: badge "Process", H2 "How It Works" — 4 steps with numbered
     green circles connected by a line: Free Consultation, Design &
     Permits, Professional Installation, Activation & Monitoring.
  9. Testimonials: badge "Testimonials", H2 "What Our Customers Say" —
     carousel of 6 quote cards (5 green stars + quote + name + role):
     Homeowner in Austin, Business Owner, Homeowner in Dallas, Homeowner
     in Houston, Homeowner in San Antonio, Homeowner in Austin; dot
     indicators + prev/next controls.
  10. CTA banner (primary green bg): H2 "Ready to Go Solar?" + subtext
      "Get a free, no-obligation quote..." + "Get Free Quote" (white
      button) + phone link.
  11. FAQ: badge "FAQ", H2 "Frequently Asked Questions" — 5 accordion
      items (How much does a solar system cost? / How long does
      installation take? / Will solar panels work on cloudy days? /
      What happens during a power outage? / Do solar panels require
      maintenance?).
  12. Quote form: badge "Contact", H2 "Get Your Free Quote" — form
      (Name, Email, Service select, Message) + "Submit Request" green
      button; right sidebar card with Office Hours / contact info.
  13. Footer (dark): brand + blurb + social icons, columns Solutions
      (Residential Solar, Commercial Solar, Battery Storage, EV
      Charging, Savings Calculator, Incentives & Rebates) / Resources
      (Blog, FAQ) / Company (About, Products, Pricing, Contact) /
      Contact Us (890 Solar Way, Austin, TX 78701 · (555) 763-2748 ·
      hello@solarshift.com), copyright "© 2026 SolarShift. All rights
      reserved." + Privacy Policy / Terms of Service.
  - Extras: cookie-consent bar (Decline / Accept All), scroll-reveal
    animations, dark-mode support (class-based `.dark` in the demo),
    mobile sticky bottom bar.
- **Design tokens extracted from `Base.DGIjEtFT.css` + DOM:**
  - Brand color: **green** — primary-500 #22c55e, primary-600 #16a34a
    (buttons, links, headline accent, badges), scale 50 #f0fdf4, 100
    #dcfce7, 200 #bbf7d0, 400 #4ade80, 700 #15803d (800 #166534, 900
    #14532d implied). Secondary **accent-500 #f59e0b** (amber — "Best
    Value" corner badges).
  - Neutrals: Tailwind gray scale — #f9fafb (gray-50 section bg),
    #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280, #4b5563, #374151,
    #1f2937, #111827 (headings/text).
  - Fonts: **"Manrope"** (300–800) via Google Fonts; system-ui
    sans-serif fallback.
  - Shapes: cards `rounded-2xl` (1rem, `p-6/p-8 shadow-sm`, hover
    `shadow-lg`); icon tiles `rounded-xl` (0.75rem) `h-12 w-12
bg-primary-100 text-primary-600`; badge pills `rounded-full`; step
    circles `rounded-full h-12 w-12 bg-primary-600 text-white`; form
    inputs `rounded-lg` with `border-gray-300`; impact section on solid
    `bg-primary-600` with `bg-white/10` icon tiles and white text.
  - Buttons: primary `bg-primary-600 text-white` (hover primary-700),
    rounded-lg/full, px-5/6 py-3; on green bands white buttons
    (`bg-white text-primary-600`); secondary = phone/text link.
  - Dark mode: class-based `.dark` on root — bg gray-900/950, cards
    gray-800, text gray-100/gray-400; toggle persisted to localStorage
    ("theme").
  - Section backgrounds: white, gray-50 (stats, products, financing,
    testimonials, process-light alternate), solid primary-600 (impact,
    CTA), dark gray-900 (footer).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/helios-<n>/<w>/<h>`); icons → lucide-react;
  fonts via Google Fonts; repo-standard Navbar (dark-mode toggle) +
  Footer chrome; calculator = a small client-side state hook (slider +
  dropdown + computed estimates), no backend.

Helios lives in `apps/helios` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Helios",
anchor links to the page's sections, a "Get Free Quote" CTA, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Helios page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Helios" and links to
  About, Products, Services, Pricing, Blog, and Contact
- **AND** the navbar SHALL show a "Get Free Quote" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a light hero with a badge, a headline, CTAs, a
social-proof line, and a savings calculator card.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a pill badge "Go Solar Today" and a level-1
  heading "Power Your Home With Clean Energy"
- **AND** it SHALL show buttons "Get Free Quote" and a phone link
- **AND** it SHALL show the line "Join 10,000+ homeowners who switched to
  solar"

#### Scenario: Savings calculator

- **GIVEN** the hero is displayed
- **WHEN** the user changes the monthly-bill slider or the state dropdown
- **THEN** the four estimate values (Annual Savings, CO2 Offset, Payback
  Period, Total Cost) SHALL update accordingly
- **AND** the card SHALL show a "Get Free Assessment" button

### Requirement: Stats bar

The system SHALL render a stats bar with four key metrics.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats bar is displayed
- **THEN** it SHALL show the metrics 10K+ Installations, $50M+ Saved for
  Customers, 98% Customer Satisfaction, and 50 States Served

### Requirement: Services section

The system SHALL render a services section with six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Complete Solar Solutions"
- **AND** it SHALL show cards for Residential Solar, Commercial Solar,
  Battery Storage, Solar Maintenance, Energy Audit, and Roof Assessment
- **AND** each card SHALL show an icon tile, a title, and a blurb

### Requirement: Products section

The system SHALL render a products section with three product cards.

#### Scenario: Products content

- **GIVEN** the page is rendered
- **WHEN** the products section is displayed
- **THEN** it SHALL contain a heading "Premium Solar Equipment"
- **AND** it SHALL show cards for SunPower Maxeon 6, LG NeON H+, and
  Canadian Solar HiKu7
- **AND** each card SHALL show an image, a title, a blurb, and three
  mini-spec cells

### Requirement: Impact section

The system SHALL render an impact section on a green band with four
animated counters.

#### Scenario: Impact content

- **GIVEN** the page is rendered
- **WHEN** the impact section is displayed
- **THEN** it SHALL contain a heading "Our Environmental Impact"
- **AND** it SHALL show counters for Tons CO2 Offset, Trees Equivalent,
  kWh Generated, and Homes Powered

### Requirement: Financing section

The system SHALL render a financing section with three pricing cards.

#### Scenario: Financing content

- **GIVEN** the page is rendered
- **WHEN** the financing section is displayed
- **THEN** it SHALL contain a heading "Flexible Payment Options"
- **AND** it SHALL show Cash Purchase (badge "Best Value"), Solar Lease
  (badge "Most Popular"), and Power Purchase Agreement (badge "Zero
  Risk") cards
- **AND** each card SHALL show a blurb, four feature bullets, and a
  "Learn More" link

### Requirement: Process section

The system SHALL render a four-step process section.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "How It Works"
- **AND** it SHALL show the steps Free Consultation, Design & Permits,
  Professional Installation, and Activation & Monitoring in order, each
  with a numbered circle and a description

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with at least three quote
cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Customers Say"
- **AND** it SHALL show at least three testimonials, each with a 5-star
  rating, a quote, a name, and a role

#### Scenario: Carousel navigation

- **GIVEN** the testimonials section is displayed
- **WHEN** the user presses the next/previous control or a dot indicator
- **THEN** the visible testimonial SHALL change accordingly

### Requirement: Call to action

The system SHALL render a closing CTA banner on a green band.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL contain a heading "Ready to Go Solar?"
- **AND** it SHALL show a "Get Free Quote" button and a phone link

### Requirement: FAQ section

The system SHALL render an FAQ section with at least four accordion items.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show accordion items for cost, installation time,
  cloudy-day performance, power outages, and maintenance

#### Scenario: Accordion behavior

- **GIVEN** the FAQ section is displayed
- **WHEN** the user presses an accordion header
- **THEN** the corresponding answer SHALL expand and the item SHALL be
  marked expanded

### Requirement: Quote form

The system SHALL render a contact form with name, email, service, and
message fields, plus a submit button.

#### Scenario: Form content

- **GIVEN** the page is rendered
- **WHEN** the quote form is displayed
- **THEN** it SHALL show labeled inputs for Name, Email, a Service select,
  and Message
- **AND** it SHALL show a "Submit Request" button

### Requirement: Footer

The system SHALL render a dark footer with link columns, contact info, and
a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns Solutions, Resources, Company, and
  Contact Us
- **AND** it SHALL show the address "890 Solar Way, Austin, TX 78701",
  a phone number, and an email address
- **AND** it SHALL show a copyright line with Privacy Policy and Terms of
  Service links

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Helios app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Helios — Solar Energy Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh helios` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero + calculator,
      stats, services, products, impact, financing, process,
      testimonials, cta, faq, quote form, footer)
- [ ] Design tokens in `@theme`: brand green #16a34a (scale #f0fdf4,
      #dcfce7, #bbf7d0, #4ade80, #22c55e, #16a34a, #15803d), accent amber
      #f59e0b, gray neutrals
- [ ] Font: Manrope (300–800) via Google Fonts
- [ ] Buttons: rounded, green primary with white text (white button on
      green bands); cards rounded-2xl; icon tiles rounded-xl with
      primary-100 bg; badge pills rounded-full; step circles
      rounded-full bg-primary-600
- [ ] Hero light with green-tinted gradient + blurred blobs; impact and
      CTA sections solid primary-600; footer dark (gray-900)
- [ ] Dark mode: class-based `.dark`, toggle in navbar, persisted to
      localStorage
- [ ] Interactive behaviors: savings calculator (slider + dropdown →
      estimates), FAQ accordion, testimonial carousel, mobile menu
      (aria-expanded), scroll-reveal — no extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/helios-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
