# Template: Deskly (Astro Template / Coworking Space)

## Purpose

Deskly is a single-page coworking space landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Workhub" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

> NAMING NOTE: the stale prep at `openspec/specs/template-workhub/` (plus
> `docs/templates/workhub/`) used the FORBIDDEN ColorLib source name and was
> DELETED — the source name must never be reused. **Deskly** is the new,
> original name (single lowercase word, no collision with `apps/` or other
> spec folders).

## Design reference (replication findings)

- **Original:** ColorLib "Workhub" — coworking space / shared office landing
  template (source: https://colorlib.com/wp/template/workhub/, "Astro"
  category). The demo's internal brand is "WorkHub" — the recreation brands
  itself **Deskly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://workhub-colorlib.pages.dev/` (HTTP 200, ~91 KB HTML +
  `/_astro/Base.DgxC-Pxf.css` ~62 KB parsed for tokens;
  `https://preview.colorlib.com/theme/workhub/` returns 404 — the preview
  portal loads Astro-category demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`, same pattern as
  Serenite→Sooth / Saasify→Zenith / Swiftmove→Haulio). The TEMPLATES.md
  screenshot (`workhub-template-1771943925457.jpg`, HTTP 200, viewed) matches
  the live demo: warm cream hero, amber accents, sage-green secondary button,
  stats row, coworking-interior photo.
- **Visual design (screenshot + live render):** modern, minimalist,
  professional; warm cream/off-white hero background (`#fdfbf7` feel via
  `from-primary-50 to-white` gradient), **amber/orange** brand accents
  (headline highlight, primary buttons, badge), muted sage-green secondary
  outline button, dark charcoal text; sticky navbar with centered links +
  "Book a Tour" CTA; hero stats row (500+ Members, 3 Locations, 95%
  Occupancy, 4.9 Google Rating) above a large interior photo; light
  alternating sections (gray-50/white), dark gray-900 footer.
- **Section order (1:1, verified from live DOM):**
  1. Sticky navbar (white/80 blur, border-b): "WorkHub" logo + links About,
     Spaces, Amenities, Community, Pricing, Partners, Blog, Spaces & Plans,
     Contact + "Book a Tour" button; mobile nav.
  2. Hero (`bg-gradient-to-b from-primary-50 to-white`): badge "Austin's
     Premier Coworking Space" (pill, star icon), h1 "Where Great Work
     Happens Together" (with "Happens Together" in amber), blurb "Premium
     coworking spaces designed for productivity, creativity, and
     community...", buttons "Book a Free Tour" (amber solid) + "View Plans"
     (green outline) + "Watch Demo" (play icon); stats row; large
     coworking-interior photo.
  3. Spaces: "Find Your Perfect Workspace" — 4 cards (Hot Desk, Dedicated
     Desk, Private Office, Meeting Rooms) + "Reserve" link each.
  4. Amenities: "Everything You Need" — 8 cards (High-Speed WiFi, Free
     Coffee & Snacks, 24/7 Access, Phone Booths, Event Space, Bike Storage,
     Showers, Printing).
  5. Community: "Join a Thriving Community" — Upcoming Events (Startup
     Pitch Night, Web Dev Meetup, Networking Lunch) + "RSVP".
  6. Pricing: "Flexible Plans for Every Team" — 3 plans (Hot Desk,
     Dedicated, Office) with monthly/annually billing + "Get started".
  7. Testimonials: "What Our Members Say" — member quotes.
  8. FAQ: "Frequently Asked Questions" — 5 accordion items (trial, meeting
     rooms, 24/7 access, mail, cancellation).
  9. CTA (`bg-gradient-to-br from-primary-600 to-primary-800`): "See It
     for Yourself" + "Schedule a Tour" / "Call Us".
  10. Footer (`bg-gray-900`): brand blurb + address/phone/email + Spaces /
      Company / Support columns + "Stay Updated" + copyright.
- **Design tokens extracted from the live CSS + DOM (verified 2026-08-09):**
  - Brand colors: **amber/orange scale** — #fffbeb (50), #fef3c7 (100),
    #fde68a (200), #fbbf24 (400), #f59e0b (500), **#d97706 (600 primary)**,
    #b45309 (700), #92400e (800). Hero gradient from-primary-50 to white;
    CTA gradient from-primary-600 to-primary-800.
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827 (footer bg).
  - Secondary accent: muted sage green/teal (View Plans outline button) —
    implement with a green-700 outline (e.g. #15803d) per the screenshot.
  - Font: **"Plus Jakarta Sans"** (`Plus Jakarta Sans, system-ui,
sans-serif`) via Google Fonts.
  - Shapes: rounded cards (`--radius-lg`, `--radius-2xl`, .75rem), pill
    buttons (rounded-full), badge pill; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`; dark mode via `.dark` on root with
    dark:bg-gray-900 / dark:bg-gray-950.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/deskly-<n>/<w>/<h>`); icons → lucide-react (Wifi,
  Coffee, Clock, Phone, CalendarDays, Bike, ShowerHead, Printer, Users,
  Zap, Star, ChevronDown, MapPin, Mail, Play, ArrowRight, PartyPopper);
  Plus Jakarta Sans via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome. Brand text renames "WorkHub"/"Workhub" →
  "Deskly" everywhere (logo wordmark, "Book a Free Tour", "Join a Thriving
  Community" stay same-kind copy, paraphrased where needed).

Deskly lives in `apps/deskly` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Deskly",
anchor links to the page's sections, a "Book a Tour" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Deskly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Deskly" and links to
  Spaces and Pricing
- **AND** the navbar SHALL show a "Book a Tour" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a badge, headline,
call-to-action buttons, a stats row, and an interior photo.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a badge reading "Austin's Premier Coworking
  Space" (paraphrased copy allowed)
- **AND** it SHALL contain a level-1 heading "Where Great Work Happens
  Together"
- **AND** it SHALL show "Book a Free Tour", "View Plans", and "Watch Demo"
  buttons
- **AND** it SHALL show a stats row with four statistics (members,
  locations, occupancy, rating)

### Requirement: Spaces section

The system SHALL render a spaces section with four workspace cards.

#### Scenario: Spaces content

- **GIVEN** the page is rendered
- **WHEN** the spaces section is displayed
- **THEN** it SHALL contain a heading "Find Your Perfect Workspace"
- **AND** it SHALL show cards for Hot Desk, Dedicated Desk, Private Office,
  and Meeting Rooms

### Requirement: Amenities section

The system SHALL render an amenities section with eight cards.

#### Scenario: Amenities content

- **GIVEN** the page is rendered
- **WHEN** the amenities section is displayed
- **THEN** it SHALL contain a heading "Everything You Need"
- **AND** it SHALL show High-Speed WiFi, Free Coffee & Snacks, 24/7 Access,
  and Phone Booths

### Requirement: Community section

The system SHALL render a community section with upcoming events.

#### Scenario: Community content

- **GIVEN** the page is rendered
- **WHEN** the community section is displayed
- **THEN** it SHALL contain a heading "Join a Thriving Community"
- **AND** it SHALL show at least three upcoming events

### Requirement: Pricing section

The system SHALL render a pricing section with three plans.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Flexible Plans for Every Team"
- **AND** it SHALL show plans for Hot Desk, Dedicated, and Office

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Members Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least five question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and tour buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "See It for Yourself"
- **AND** it SHALL show "Schedule a Tour" and "Call Us" buttons

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Spaces, Company, Support) and a
  copyright line
- **AND** it SHALL show the address, phone number, and email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Deskly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Deskly — Coworking Template"

## Verification checklist

- [ ] Section structure + order matches the source 1:1 (10 sections above)
- [ ] Brand amber scale in `@theme` (primary-600 #d97706), used via
      Tailwind classes; sage-green secondary outline button
- [ ] Plus Jakarta Sans loaded via Google Fonts `<link>` in index.html
- [ ] Pill buttons, rounded cards, alternating gray-50/white sections,
      dark gray-900 footer
- [ ] Dark-mode toggle persists (window.localStorage + Storage polyfill
      per repo pattern); dark sections gray-900/950
- [ ] No copied assets: picsum.photos/seed/deskly-<n> placeholders,
      lucide-react icons (verify brand icons NOT needed — socials via
      inline SVG per repo pattern)
- [ ] Brand renamed "WorkHub" → "Deskly" everywhere; document title
      "Deskly — Coworking Template"
- [ ] `scripts/verify-app.sh deskly` green: typecheck + lint + vitest
      100% coverage + build
- [ ] Uses packages/ui (Button, ButtonLink, Badge, Card, cn) — knip-safe
- [ ] Spec validated: `npm run spec:validate`
