# Template: Gleam (Astro Template / Cleaning Services)

## Purpose

Gleam is a single-page professional cleaning services landing template in
the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Sparkleclean" website template design
(source: https://colorlib.com/wp/template/sparkleclean/), built under a
DIFFERENT name (Gleam — the shine left behind by a professional clean) per
the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): a stale prep existed at
> `openspec/specs/template-sparkleclean/` (plus `docs/templates/sparkleclean/`)
> using the FORBIDDEN ColorLib source name (folder == source slug); both
> were deleted and replaced by this fresh prep (new name Gleam), matching
> the Shieldguard→Coverly / Serenity→Hush / Solarshift→Helios /
> Solestyle→Treadly precedent. The stale prep's research was re-verified
> against the live demo (fresh DOM + CSS fetch) and is recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Sparkleclean" — professional cleaning services
  landing template (source: https://colorlib.com/wp/template/sparkleclean/,
  "Astro" category). The demo's internal brand is "SparkleClean Pro" — the
  recreation brands itself **Gleam** instead, but keeps the same section
  structure and copy kinds.
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/sparkleclean/`) returns 404; the
  ColorLib preview portal loads demos from `<slug>-colorlib.pages.dev`
  (confirmed via `preview.colorlib.com/assets/js/products.js`). Live demo
  fetched at `https://sparkleclean-colorlib.pages.dev/` (HTTP 200, ~91 KB
  HTML + `/_astro/Base.qZrVslZM.css` ~60 KB parsed for tokens). The
  TEMPLATES.md screenshot (`sparkleclean-template.jpg`, HTTP 200) matches
  the live demo: light theme, split hero with a teal "Instant Quote"
  calculator card, teal accents, trust icon row, big faint stat numbers.
- **Section order (1:1, from live demo DOM):**
  1. Navbar (sticky, white/95 blur, border-b): "SparkleClean Pro" logo
     (sparkle icon + wordmark), links About, Services, Pricing, Blog,
     Contact; "Get Free Quote" pill button; dark-mode toggle; mobile
     hamburger (`aria-expanded`).
  2. Hero (split, light): left — H1 "Professional Cleaning, Guaranteed
     Spotless", blurb ("Trusted by thousands of homeowners and businesses
     in Austin. Our insured, background-checked cleaning professionals use
     eco-friendly products..."), buttons "Get Free Quote" (primary teal
     pill) + "Call (555) 867-5309" (outlined with phone icon), trust stats
     row: 5000+ Homes Cleaned, 4.9★ Star Rating, 100% Satisfaction,
     200+ 5-Star Reviews. Right — "Instant Quote" calculator card:
     Property Type select (House / Apartment / Condo / Office), Home Size
     range slider (500–5000 sq ft, default 1500), Bedrooms stepper
     (default 3), Frequency toggle (One-Time / Weekly / Bi-Weekly /
     Monthly), "Estimated Price" display ($315 for the defaults), "Book
     Now" button.
  3. Trust row: 4 circular-icon items — Fully Insured ("Up to $2M
     liability coverage..."), Background Checked, Eco-Friendly
     (green-certified products), Satisfaction Guaranteed ("Not happy?
     We'll re-clean for free within 24 hours.").
  4. Stats band: animated counters — 0 Homes Cleaned, 0 Five-Star
     Reviews, 0 Years Experience, 0 Satisfaction Rate (big faint
     numbers, count-up on scroll into view).
  5. Services: heading "Cleaning Services for Every Need" + blurb +
     6 cards (icon + title + blurb): Regular Cleaning, Deep Cleaning,
     Move-In/Out Cleaning, Commercial Cleaning, Post-Construction, Green
     Cleaning.
  6. Pricing: heading "Choose Your Clean" + blurb "Transparent pricing
     with no hidden fees" + frequency toggle (One-Time / Weekly /
     Bi-Weekly / Monthly) + 4 package cards: Basic Clean $99 ("Essential
     cleaning for maintained homes": Dusting all surfaces, Vacuuming &
     mopping, Kitchen counters & sink, Bathroom sanitization, Trash
     removal; "Book Basic"), Deep Clean $199 ("Most Popular" badge,
     "Thorough top-to-bottom clean": Everything in Basic, Inside
     appliances, Baseboards & door frames, Window sills & blinds,
     Cabinet exteriors, Light fixtures; "Book Deep Clean"), Move-In/Out
     $299 ("Complete property preparation": Everything in Deep Clean,
     Inside cabinets & drawers, Oven & refrigerator deep clean, Closet
     cleaning, Garage sweep, Wall spot cleaning; "Book Move Clean"),
     Commercial ("Tailored to your business", "Custom" price: Custom
     cleaning schedule, Floor care & polishing, Restroom sanitization,
     Break room deep clean, Window washing, Dedicated account manager;
     "Get Quote").
  7. Before/After: heading "See the Difference" + blurb + 2 comparison
     cards with a draggable Before/After slider — Kitchen Deep Clean,
     Bathroom Restoration.
  8. Testimonials: heading "What Our Clients Say" + blurb + 5 quote
     cards (initials avatar, quote, name, role): Sarah Mitchell
     (Homeowner, 2 years), David Chen (Office Manager), Jessica Rodriguez
     (Apartment Renter), Amanda Foster (Busy Parent), + 5th
     (post-construction client).
  9. CTA band (teal/dark): "Ready for a Spotless Space?" + "Book your
     cleaning today and experience the SparkleClean difference.
     First-time customers get 20% off their initial cleaning." +
     buttons "Get Free Quote" + "Call Now".
  10. FAQ: heading "Frequently Asked Questions" + accordion (5 items):
      How long does a typical cleaning take?, What cleaning products do
      you use?, What is included in a standard cleaning?, Are your
      cleaners insured and bonded?, Can I reschedule or cancel a
      cleaning?
  11. Contact: heading "Get in Touch" — form (Full Name, Email Address,
      Phone Number, Service Needed select, Preferred Date, Message,
      "Request Cleaning" button) + info cards: Visit Us (456 Clean
      Street, Portland, OR 97201), Call Us (555) 867-5309, Email Us
      hello@sparkleclean.com, Office Hours (Mon–Fri 7:00 AM–7:00 PM,
      Sat 8:00 AM–5:00 PM, Sun 10:00 AM–4:00 PM) + "Interactive map
      coming soon" placeholder.
  12. Footer (dark gray-950): "SparkleClean Pro" brand + blurb
      ("Professional cleaning services for homes and offices. Insured,
      bonded, and eco-friendly.") + columns SERVICES (Regular Cleaning,
      Deep Cleaning, Move-In/Out, Commercial) / RESOURCES (Cleaning
      Checklist, Service Areas, Quote Calculator, FAQ) / COMPANY (About,
      Blog, Contact, Careers) / CONTACT US (address, phone, email);
      copyright "© 2026 SparkleClean Pro" + Privacy Policy, Terms of
      Service, Style Guide.
  - Extras: skip-to-content link, mobile hamburger menu
    (`aria-expanded`), dark-mode toggle (prevent-flash inline script),
    scroll-reveal animations (`data-animate`, 60 nodes), cookie consent
    banner (bottom slide-up dialog, "Decline" / "Accept All"),
    back-to-top floating button.
- **Design tokens extracted from `Base.qZrVslZM.css` + DOM (verified
  2026-08-09):**
  - Brand color: **teal scale** — primary 600 `#0d9488` (buttons, links),
    500 `#14b8a6`, 400 `#2dd4bf` (text on dark), 300 `#5eead4`,
    200 `#99f6e4`, 100 `#ccfbf1` (icon chips), 50 `#f0fdfa`; dark 700
    `#0f766e` (hover), 900 `#134e4a` (dark hero/CTA sections).
  - Neutrals: gray-950 `#030712` (footer), gray-900 `#111827` (dark
    text / sections), gray-800 `#1f2937`, gray-700 `#374151`,
    gray-500 `#6b7280` (muted text), gray-400 `#9ca3af`, gray-300
    `#d1d5db` (borders), gray-200 `#e5e7eb`, gray-100 `#f3f4f6`,
    gray-50 `#f9fafb` (light section alternates).
  - Fonts: **"Inter"** only (weights 300–800) via Google Fonts
    (`family=Inter:wght@300;400;500;600;700;800`).
  - Shapes: primary CTAs pill (`rounded-full`), cards
    `rounded-xl`/`rounded-2xl`, inputs `rounded-lg` with
    `border-gray-300` + teal focus ring (`focus:border-primary-500`,
    `focus:ring-primary-500`), section padding `py-16`/`py-20` rhythm.
  - Dark mode: class-based `.dark` on the document root (prevent-flash
    inline script in `<head>`), toggle in navbar, persisted to
    localStorage; light sections are gray-50/white, dark sections are
    gray-950 / teal-900.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/gleam-<n>/<w>/<h>`); icons → lucide-react
  (Sparkles, ShieldCheck, BadgeCheck, Leaf, Star, Phone, ChevronDown,
  MapPin, Clock, Mail, Menu, ArrowUp, Home, Building2, Sofa, Brush,
  Ruler, Recycle, Quote, Plus/Minus); Inter via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome; brand text
  renames "SparkleClean"/"SparkleClean Pro" → "Gleam" everywhere (logo,
  copy, copyright); quote-calculator and pricing frequency toggle keep
  the same behavior (price updates from inputs) with a simple
  documented formula.

Gleam lives in `apps/gleam` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Gleam", anchor/route links, a "Get Free Quote" CTA, a dark-mode toggle,
and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Gleam page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Gleam" and links to
  About, Services, Pricing, Blog, and Contact
- **AND** the navbar SHALL show a "Get Free Quote" button

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a narrow viewport
- **WHEN** the user presses the mobile menu button
- **THEN** the mobile navigation menu SHALL expand and the button SHALL
  reflect the expanded state via `aria-expanded`

### Requirement: Hero section

The system SHALL render a split hero with a headline, blurb, two CTAs,
a trust stats row, and an "Instant Quote" calculator card.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Professional Cleaning,
  Guaranteed Spotless"
- **AND** it SHALL show a short blurb about insured, background-checked,
  eco-friendly cleaning professionals
- **AND** it SHALL show buttons "Get Free Quote" and a call button with
  a phone number
- **AND** it SHALL show trust stats: "5000+ Homes Cleaned", a star
  rating, "100% Satisfaction", and a reviews count

### Requirement: Instant Quote calculator

The system SHALL render an interactive quote calculator that estimates a
price from property type, home size, bedrooms, and cleaning frequency.

#### Scenario: Calculator inputs

- **GIVEN** the Instant Quote card is displayed
- **WHEN** the page loads
- **THEN** it SHALL show a Property Type selector (House, Apartment,
  Condo, Office), a Home Size range slider, a Bedrooms stepper, and a
  Frequency toggle (One-Time, Weekly, Bi-Weekly, Monthly)
- **AND** it SHALL show an estimated price and a "Book Now" button

#### Scenario: Price updates

- **GIVEN** the Instant Quote card is displayed
- **WHEN** the user changes property type, size, bedrooms, or frequency
- **THEN** the estimated price SHALL update to reflect the new inputs

### Requirement: Trust row

The system SHALL render a four-item trust row with icon, title, and
blurb for each item.

#### Scenario: Trust items

- **GIVEN** the page is rendered
- **WHEN** the trust row is displayed
- **THEN** it SHALL show Fully Insured, Background Checked,
  Eco-Friendly, and Satisfaction Guaranteed
- **AND** each item SHALL show an icon, a title, and a short blurb

### Requirement: Stats band

The system SHALL render a stats band with four animated counters.

#### Scenario: Stats counters

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show counters for Homes Cleaned, Five-Star Reviews,
  Years Experience, and Satisfaction Rate
- **AND** the counters SHALL count up when scrolled into view

### Requirement: Services section

The system SHALL render a services grid with six service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the Services section is displayed
- **THEN** it SHALL contain a heading "Cleaning Services for Every
  Need"
- **AND** it SHALL show cards for Regular Cleaning, Deep Cleaning,
  Move-In/Out Cleaning, Commercial Cleaning, Post-Construction, and
  Green Cleaning
- **AND** each card SHALL show an icon, a title, and a short blurb

### Requirement: Pricing section

The system SHALL render a pricing section with a frequency toggle and
four package cards.

#### Scenario: Package cards

- **GIVEN** the page is rendered
- **WHEN** the Pricing section is displayed
- **THEN** it SHALL contain a heading "Choose Your Clean"
- **AND** it SHALL show cards for Basic Clean, Deep Clean, Move-In/Out,
  and Commercial
- **AND** each card SHALL show a name, a price, a feature list, and a
  booking button ("Book ..." or "Get Quote")
- **AND** the Deep Clean card SHALL carry a "Most Popular" badge

#### Scenario: Frequency toggle

- **GIVEN** the Pricing section is displayed
- **WHEN** the user selects a frequency (One-Time, Weekly, Bi-Weekly,
  Monthly)
- **THEN** the selected frequency SHALL be reflected in the toggle
  state

### Requirement: Before/After section

The system SHALL render a "See the Difference" section with at least two
Before/After comparison cards.

#### Scenario: Comparison cards

- **GIVEN** the page is rendered
- **WHEN** the See the Difference section is displayed
- **THEN** it SHALL contain a heading "See the Difference"
- **AND** it SHALL show comparison cards (e.g. Kitchen Deep Clean,
  Bathroom Restoration), each with Before and After labels

### Requirement: Testimonials section

The system SHALL render a testimonials section with quote cards.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least three quote cards, each with an
  avatar/initials, a quote, and a name + role

### Requirement: CTA band

The system SHALL render a CTA band promoting a first-time discount.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Ready for a Spotless Space?"
- **AND** it SHALL show a first-time discount offer (20% off the
  initial cleaning)
- **AND** it SHALL show "Get Free Quote" and "Call Now" buttons

### Requirement: FAQ section

The system SHALL render an FAQ accordion with at least four questions.

#### Scenario: FAQ accordion

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show questions about booking lead time, products,
  standard cleaning scope, insurance, and rescheduling
- **AND** pressing a question SHALL expand/collapse its answer

### Requirement: Contact section

The system SHALL render a contact section with a request form and
contact info cards.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Get in Touch"
- **AND** it SHALL show a form with Full Name, Email Address, Phone
  Number, Service Needed, Preferred Date, and Message fields
- **AND** it SHALL show a "Request Cleaning" submit button

#### Scenario: Contact info

- **GIVEN** the contact section is displayed
- **WHEN** the page loads
- **THEN** it SHALL show Visit Us, Call Us, Email Us, and Office Hours
  cards

### Requirement: Footer

The system SHALL render a dark footer with brand blurb, link columns,
contact info, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Gleam" brand and a blurb
- **AND** it SHALL show Services, Resources, Company, and Contact Us
  columns
- **AND** it SHALL show a copyright line with Privacy Policy and Terms
  of Service links

### Requirement: Page chrome and accessibility

The system SHALL render standard page chrome: document title, landmarks,
dark-mode toggle, cookie consent, and a back-to-top control.

#### Scenario: Document and landmarks

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** the Header SHALL be in the `banner` landmark, the main
  content in the `main` landmark, and the Footer in the `contentinfo`
  landmark
- **AND** the document title SHALL be "Gleam — Cleaning Services"

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root
  element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Cookie consent

- **GIVEN** the page is rendered
- **WHEN** the cookie consent banner is shown
- **THEN** it SHALL offer "Decline" and "Accept All" choices
- **AND** the banner SHALL disappear after a choice is made

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh gleam` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (navbar, hero + quote
      calculator, trust row, stats band, services, pricing, before/after,
      testimonials, CTA band, FAQ, contact, footer)
- [ ] Design tokens in `@theme`: brand teal `#0d9488` (+ scale #14b8a6,
      #2dd4bf, #5eead4, #99f6e4, #ccfbf1, #f0fdfa, #0f766e, #134e4a),
      gray neutrals incl. #030712, #111827, #1f2937, #d1d5db, #f9fafb
- [ ] Fonts: Inter (300–800) via Google Fonts
- [ ] Buttons: pill (rounded-full) primary teal with white text;
      outlined secondary; inputs rounded-lg with gray-300 border + teal
      focus ring; cards rounded-xl/2xl; section padding py-16/py-20
- [ ] Hero and CTA sections use teal-900 (#134e4a) dark treatment;
      footer on gray-950 (#030712); light sections alternate
      gray-50/white
- [ ] Quote calculator updates the estimated price from property type,
      size, bedrooms, and frequency inputs
- [ ] Pricing frequency toggle (One-Time/Weekly/Bi-Weekly/Monthly)
      reflects selection
- [ ] FAQ accordion expands/collapses answers
- [ ] Dark mode: class-based `.dark`, toggle in navbar, persisted to
      localStorage
- [ ] Interactive behaviors: mobile menu (aria-expanded), cookie
      consent (Decline/Accept All), back-to-top, animated stat
      counters — no extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/gleam-<n>/<w>/<h>`);
      no copied assets; brand renamed "SparkleClean" → "Gleam"
      everywhere
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
