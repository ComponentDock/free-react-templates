# Template: Roostly (Booking Forms / Reservation Form)

## Purpose

Roostly is a single-page travel-reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V11" website template
(source: https://colorlib.com/wp/template/colorlib-booking-11/), built under a
DIFFERENT name (Roostly — "roost", a place to rest/stay, re-branded) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-11/` returns HTTP 404
> (curl AND browser both get "Not Found"), there is no
> `<slug>-colorlib.pages.dev` mirror for this classic template (the
> `preview.colorlib.com/assets/js/products.js` product map only covers new
> Astro-era templates), and the Wayback Machine has no archived snapshot of
> the preview (CDX query returned empty). The whole Booking Forms family's
> LIVE PREVIEW button on the ColorLib template page resolves to
> `https://colorlib.com/etc/bforms/<slug>/` (pattern confirmed in the
> template-roomzy prep via the archived template page
> `web.archive.org/web/20260419083833/https://colorlib.com/wp/template/colorlib-booking-10/`).
> **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-11/` (HTTP 200, ~4.0 KB
> HTML + `css/style.css`), and the TEMPLATES.md screenshot
> (`colorlib-booking-11.jpg`, 1200×972) was viewed in a browser — screenshot
> and live render match 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V11" — "A straightforward
  and quick-to-use free travel booking form template with date pickers and
  drop-downs for quick selection" (ColorLib meta description; page title
  "Colorlib Booking Form V11 - Free Travel Booking Template 2023"). Category
  in TEMPLATES.md: **Booking Forms (22)**. The recreation brands itself
  **Roostly** but keeps the same section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-11/` (HTTP 200, ~4.0 KB
  HTML). Single-section document: `#booking.section` (height 100vh,
  `background-image: url('../img/background.jpg')`, cover/center, Poppins)
  with a `::before` white wash overlay `rgba(255, 255, 255, 0.15)`;
  `.section-center` vertically centers the content (absolute top 50% +
  translateY(-50%)); the white `.booking-form` card (radius 2px) holds ONE
  form row:
  - **Destination** — text input, placeholder "Country, ZIP, city..."
    (col-md-3).
  - **Check In** (date input, `required`) | **Check out** (date input,
    `required`) | **Guests** (select: options 1/2/3, default 1, custom
    rotated `➜` arrow) — a nested row (col-md-5/5/2 inside col-md-6).
  - **"Check availability"** submit button (col-md-3, full width of its
    column).
  - Column groups are separated by thin vertical dividers (`.form-group::after`
    — `rgba(129, 131, 144, 0.15)`, 2px wide, 75px tall).
  - NO navbar, NO hero copy, NO footer, NO other sections — this is a
    one-section form demo. Page ends after the form (only a GA script).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-11.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** full-viewport hero
  photograph of the Golden Gate Bridge at twilight (deep purple/blue sky,
  warm-lit bridge cables reflecting on the water) with a soft white 15% wash.
  A white rectangular card is centered horizontally and vertically over the
  photo. Inside the card, one horizontal row of fields: Destination (text),
  Check In, Check out, Guests (showing "1" with a down arrow), then a
  hot-pink rectangular "Check availability" button (slightly rounded,
  ~2px). Field labels are small hot-pink text above each input; placeholders
  are grey. Clean, flat, Bootstrap-era design — no pills, no gradients on
  the card, subtle drop shadow only.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (height 100vh) hero: photo
     background + `rgba(255,255,255,0.15)` overlay; content vertically
     centered via `.section-center` (top 50% + translateY(-50%)).
  2. `.booking-form` (white, `border-radius: 2px`) containing the form:
     - **Destination** (text input, placeholder "Country, ZIP, city...").
     - **Check In** (date input, required) | **Check out** (date input,
       required) | **Guests** (select 1/2/3 + custom `➜` arrow, U+279C
       rotated 90°).
     - **Check availability** — full-width submit button.
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **hot pink `#ff0063`** — the ONLY brand color. Used for the
    field labels (`.form-label`) AND the submit button background
    (`.submit-btn`).
  - Font: **Poppins**, sans-serif (`#booking { font-family: 'Poppins',
sans-serif; }` — Google Fonts; source loads weight 400; recommend
    `family=Poppins:wght@400;500;600`).
  - Page/hero background: `background-image: url('../img/background.jpg')`,
    `background-size: cover`, `background-position: center`; overlay
    `#booking::before { background: rgba(255, 255, 255, 0.15); }` (a light
    WHITE wash — not a colored tint).
  - Form card: background `#fff`, `border-radius: 2px`; `.form-group` padding
    `25px`; vertical divider `.form-group::after` — `rgba(129, 131, 144,
0.15)`, `width: 2px`, `height: 75px`, `top: 25px`, `right: 0`.
  - Inputs (`.form-control`): background transparent, `border-radius: 0`,
    `border: none`, `height: 50px`, `font-size: 20px`, `color: #222`,
    weight 400, `padding: 0`, no box-shadow (focus included).
  - Placeholders: **`#818390`** (also applies to `input[type="date"]:invalid`
    — an empty date input renders grey until a value is picked).
  - Select: `appearance: none`; custom `.select-arrow` — absolute,
    `right: 0`, `bottom: 30px`, 32×32, color `#818390`, content `'\279C'`
    (➜) rotated 90°, `pointer-events: none`.
  - Labels (`.form-label`): `#ff0063`, `font-size: 14px`,
    `line-height/height: 25px`, weight 400, display block.
  - Button (`.submit-btn`): background `#ff0063`, `border: none`,
    `border-radius: 2px`, `width: 100%`, `height: 75px`, `font-size: 16px`,
    weight 400, color `#fff`, `text-transform: capitalize`, text
    **"Check availability"**.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); hero photo → seeded picsum placeholder
  (`picsum.photos/seed/roostly-1/1920/1080` — the source `background.jpg`
  must not be copied; pick a dusk/bridge-like landscape seed if possible);
  white wash via Tailwind `bg-white/15` overlay; date inputs are native
  `<input type="date">` styled with Tailwind (no datepicker dependency);
  select arrow = rotated `➜` glyph (U+279C) or lucide ChevronDown; Poppins
  via Google Fonts `<link>` in `index.html`; document title
  "Roostly — Travel Booking Template"; brand "Booking"/"Colorlib Booking" →
  "Roostly" everywhere. NO navbar/Footer chrome — this template is a bare
  single-section form page (repo-standard Navbar/Footer must NOT be added).
  The "Check availability" button validates the form and reveals a summary
  line (destination, dates, guests) — the original demo is static, so this
  minimal interactive behavior is a documented recreation choice, kept in a
  pure exported function for 100%-coverage tests.

Roostly lives in `apps/roostly` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Booking section

The system SHALL render a full-viewport booking section with a photographic
background, a translucent white overlay, and a vertically centered white form
card. The page SHALL NOT render any navbar, hero copy, or footer chrome
(single-section form demo).

#### Scenario: Full-viewport hero with centered form card

- **GIVEN** the Roostly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a photo background with a white-tinted
  overlay (`bg-white/15`) so the card stands out
- **AND** a white card (`border-radius: 2px`) SHALL be vertically and
  horizontally centered over the photo
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: Destination field

The system SHALL render a destination text input in the booking form.

#### Scenario: Destination input

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Destination" label SHALL be shown above a text input
- **AND** the input SHALL have the placeholder "Country, ZIP, city..."
- **AND** the input SHALL be required for submission

### Requirement: Check-in and check-out date pickers

The system SHALL render Check In / Check out date fields in the booking form.

#### Scenario: Date fields

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** two date inputs SHALL be present, labeled "Check In" and
  "Check out"
- **AND** both date inputs SHALL be required
- **AND** an empty date input SHALL display grey placeholder-like text until
  a value is picked

#### Scenario: Check-out after check-in

- **GIVEN** a check-in date has been selected
- **WHEN** the user picks a check-out date earlier than the check-in date
- **THEN** the form SHALL flag the check-out date as invalid
- **AND** submission SHALL be blocked until check-out is on or after
  check-in

### Requirement: Guests selector

The system SHALL render a Guests dropdown with 1–3 guests.

#### Scenario: Guests select

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Guests" label SHALL be shown above a select control
- **AND** the select SHALL offer options 1, 2, and 3 with 1 selected by
  default
- **AND** the select SHALL display a custom arrow (rotated `➜` glyph or
  ChevronDown) at its right edge

### Requirement: Check availability button

The system SHALL render a full-width "Check availability" submit button that
validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** the destination and both dates are filled in
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the destination,
  check-in and check-out dates, and guest count (e.g. "2 guests")
- **AND** the summary SHALL be shown in the hot-pink brand color or on a
  light pink background

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Check availability" without a destination or
  dates
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-roostly`
- [ ] `scripts/verify-app.sh roostly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport booking section → vertically centered
      white form card → fields in source order → Check availability button;
      NO navbar / NO footer (single-section demo)
- [ ] Brand color `#ff0063` in `@theme` and used via Tailwind classes
- [ ] Poppins via Google Fonts `<link>` in `index.html`
- [ ] Hero photo = seeded picsum (`roostly-1/1920/1080`) + `bg-white/15`
      overlay, `cover`/`center`
- [ ] White card `border-radius: 2px`; field groups padded 25px; thin
      2px vertical dividers (`rgba(129,131,144,0.15)`) between columns
- [ ] Inputs: transparent background, radius 0, no border, 50px tall, 20px
      `#222` text, no shadow on focus; placeholder `#818390`
- [ ] Date inputs native `<input type="date">`; required; empty state grey;
      check-out ≥ check-in validation
- [ ] Guests select 1/2/3 (default 1) with custom arrow (rotated `➜` or
      ChevronDown), `#818390`
- [ ] Labels 14px `#ff0063` above each input, associated via `htmlFor`/`id`
- [ ] "Check availability" button: full width, 75px tall, `#ff0063` bg,
      white 16px capitalize text; shows summary / validation messages
- [ ] Placeholder images via `picsum.photos/seed/roostly-<n>/<w>/<h>`,
      icons from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
