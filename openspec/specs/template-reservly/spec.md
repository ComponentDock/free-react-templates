# Template: Reservly (Booking Forms / Reservation Form)

## Purpose

Reservly is a single-page travel-reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V1" website template
(source: https://colorlib.com/wp/template/colorlib-booking-1/), built under a
DIFFERENT name (Reservly — a reservation, re-branded) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-1/` returns HTTP 404,
> there is no `<slug>-colorlib.pages.dev` mirror for this classic template
> (the `preview.colorlib.com/assets/js/products.js` product map only covers
> new Astro-era templates), and the Wayback Machine has no archived snapshot
> (CDX query returned empty). Per docs/replication.md the **screenshot is the
> sole reference** (`colorlib-booking-1.jpg`, HTTP 200, fetched and analyzed
> 2026-08-09) — the fallback path is documented here and in the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V1" — "the best free
  reservation form template based on Bootstrap Framework for travel
  destinations with date pickers for check-in/out" (ColorLib meta
  description). Category in TEMPLATES.md: **Booking Forms (22)**. The
  recreation brands itself **Reservly** but keeps the same section structure
  and copy kinds.
- **Screenshot analyzed** (1200×972, browser vision, 2026-08-09): a
  full-viewport hero. Background: high-resolution mountain-lake photograph
  (turquoise alpine lake, rocky peaks, pines, a rowboat) with a soft
  translucent blue wash overlay. Content split:
  - **Left — white floating card** (subtle drop shadow): the reservation
    form. Fields top-to-bottom: "Your Destination" text input (placeholder
    "Enter a destination or hotel name"); "Check in" / "Check out" date
    fields side-by-side; a row of three counter steppers — Rooms (1),
    Adults (1), Children (0) — each with minus/plus buttons; a wide,
    full-card-width rectangular blue button **"Check availability"**.
    Inputs sit on a light grey `#f4f4f4` background against the white card.
  - **Right — text block**: bold uppercase white headline
    **"MAKE YOUR RESERVATION"** + a short lorem-ipsum paragraph in lighter
    white sans-serif.
  - Form labels are small, uppercase, medium grey. Overall: clean Bootstrap 4
    era design, no rounded pills, rectangular controls.
- **Section order (1:1, from screenshot + known template structure):**
  1. Navbar (dark, logo wordmark + a few anchor links + phone — navbar is
     NOT visible in the 1200×972 screenshot; inferred from the classic
     ColorLib Booking template family; implementer: keep it minimal).
  2. Hero (full-viewport, photo background + blue overlay): left = booking
     form card, right = "Make Your Reservation" headline + blurb.
  3. Footer (minimal, dark): brand + copyright (inferred — not visible in
     screenshot; keep it to one line + links).
  - This is a one-page form-demo template: no extra content sections exist
    in the source beyond the hero form.
- **Design tokens extracted from the screenshot (Bootstrap-4-era
  conventions, verified 2026-08-09):**
  - Brand color: **Bootstrap primary blue `#007bff`** (Check availability
    button, active elements); hover `#0069d9`.
  - Neutrals: card white `#ffffff`; input backgrounds `#f4f4f4`; headline
    white on photo; body text `#212529` (Bootstrap body color); labels
    medium grey `#6c757d`; dark surfaces `#343a40` (navbar/footer, Bootstrap
    `bg-dark`).
  - Hero overlay: translucent blue wash over the photo
    (approx. `rgba(0, 80, 140, 0.35)` — implement as a Tailwind
    `bg-blue-900/40` or similar blue-tinted overlay).
  - Fonts: **Roboto** (weights 400/500/700) via Google Fonts — the
    Bootstrap-era default; Open Sans is the close alternative. Headline is
    bold uppercase, labels are small uppercase.
  - Shapes: **rectangular controls** — inputs and the button are
    sharp-cornered (Bootstrap 4 default ≈ 4px radius), NOT pills; button is
    full card width; inputs `border: none`-style light grey fill.
  - Section backgrounds: hero = full-bleed photo + blue overlay; card =
    white; navbar/footer = dark `#343a40`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/reservly-<n>/<w>/<h>`; hero = landscape,
  `reservly-1/1920/1080`); icons → lucide-react (MapPin, Calendar,
  CalendarDays, Users, Minus, Plus, Phone, Mail); Roboto via Google Fonts
  (`family=Roboto:wght@400;500;700`); repo-standard Navbar + Footer chrome;
  brand text "Booking"/"Colorlib Booking" → "Reservly" everywhere (logo,
  headline, copyright). Date pickers are native `<input type="date">` styled
  with Tailwind (no datepicker dependency). The "Check availability" button
  validates the form and reveals a summary line (destination, dates, guest
  counts) — the original demo is static, so this minimal interactive
  behavior is a documented recreation choice, kept in a pure exported
  function for 100%-coverage tests.

Reservly lives in `apps/reservly` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark top navigation bar with the site name
"Reservly", a small set of anchor links, and a phone link.

#### Scenario: Navbar content

- **GIVEN** the Reservly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Reservly"
- **AND** the navbar SHALL show anchor links (e.g. Home, About, Contact)
- **AND** the navbar SHALL show a phone number link

### Requirement: Hero section

The system SHALL render a full-viewport hero with a photographic background,
a translucent blue overlay, a booking form card on the left, and a headline +
blurb on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Make Your Reservation"
- **AND** it SHALL show a short descriptive paragraph next to the heading
- **AND** the hero SHALL use a photo background with a blue-tinted overlay
  so white text remains readable

#### Scenario: Form card

- **GIVEN** the hero is displayed
- **WHEN** the user looks at the left column
- **THEN** a white card SHALL be shown containing the reservation form
- **AND** the card SHALL float above the photo with a drop shadow

### Requirement: Destination field

The system SHALL render a destination text input in the reservation form.

#### Scenario: Destination input

- **GIVEN** the reservation form is displayed
- **WHEN** the form is rendered
- **THEN** a "Your Destination" input SHALL be present with the placeholder
  "Enter a destination or hotel name"
- **AND** the input SHALL be required for submission

### Requirement: Date pickers

The system SHALL render Check in / Check out date fields in the reservation
form.

#### Scenario: Check-in/check-out dates

- **GIVEN** the reservation form is displayed
- **WHEN** the form is rendered
- **THEN** two date inputs SHALL be present, labeled "Check in" and
  "Check out"
- **AND** the check-out date SHALL not be selectable before the check-in
  date (validation)

### Requirement: Guest counters

The system SHALL render Rooms, Adults, and Children counter steppers in the
reservation form.

#### Scenario: Stepper controls

- **GIVEN** the reservation form is displayed
- **WHEN** the form is rendered
- **THEN** three steppers SHALL be present: Rooms, Adults, and Children,
  each with a minus button, a value, and a plus button
- **AND** the initial values SHALL be Rooms 1, Adults 1, Children 0

#### Scenario: Stepper limits

- **GIVEN** a counter stepper is displayed
- **WHEN** the user presses the minus button at the minimum value
- **THEN** the value SHALL NOT go below the minimum (Rooms/Adults ≥ 1,
  Children ≥ 0)
- **AND** when the user presses plus, the value SHALL increment by one

### Requirement: Check availability button

The system SHALL render a full-width "Check availability" submit button that
validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** the destination, dates, and guest counts are filled in
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the destination, check-in
  and check-out dates, and guest counts (e.g. "2 adults, 1 child, 1 room")

#### Scenario: Submit with missing fields

- **GIVEN** the reservation form is displayed
- **WHEN** the user clicks "Check availability" without a destination or
  dates
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

### Requirement: Footer

The system SHALL render a minimal dark footer with the brand and copyright.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Reservly"
- **AND** it SHALL show a copyright line (e.g. "© 2026 Reservly")

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-reservly`
- [ ] `scripts/verify-app.sh reservly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: navbar → hero (form card + headline) → footer
- [ ] Brand color `#007bff` in `@theme` and used via Tailwind classes
- [ ] Roboto via Google Fonts `<link>` in `index.html`
- [ ] Rectangular (non-pill) inputs/buttons, light-grey `#f4f4f4` inputs,
      white card, dark navbar/footer `#343a40`
- [ ] Hero photo = seeded picsum (`reservly-1/1920/1080`) + blue overlay
- [ ] Date inputs are native `<input type="date">`; check-out ≥ check-in
      validation
- [ ] Steppers honor min bounds (Rooms/Adults ≥ 1, Children ≥ 0)
- [ ] "Check availability" shows summary / validation messages
- [ ] Placeholder images via `picsum.photos/seed/reservly-<n>/<w>/<h>`,
      icons from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
