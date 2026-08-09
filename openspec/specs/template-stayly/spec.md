# Template: Stayly (Booking Forms / Reservation Form)

## Purpose

Stayly is a single-page travel-reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V12" website template
(source: https://colorlib.com/wp/template/colorlib-booking-12/), built under a
DIFFERENT name (Stayly — "stay", as in a hotel stay / place to stay, plus the
-friendly "-ly" suffix, re-branded) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-12/` returns HTTP 404
> (curl verified), there is no `<slug>-colorlib.pages.dev` mirror for this
> classic template (the `preview.colorlib.com/assets/js/products.js` product
> map only covers new Astro-era templates). The Booking Forms family's LIVE
> PREVIEW button on the ColorLib template page resolves to
> `https://colorlib.com/etc/bforms/<slug>/` (pattern confirmed in the
> template-roomzy / template-roostly preps). **The live demo was fetched and
> analyzed at `https://colorlib.com/etc/bforms/colorlib-booking-12/` (HTTP
> 200, ~5.4 KB HTML + `css/style.css` ~3.1 KB), and the TEMPLATES.md
> screenshot (`colorlib-booking-12.jpg`, 1200×972, viewed in browser)
> matches the live render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V12" — "A responsive free
  modern reservation form template with a split-screen design that offers
  you to spice things up with an image" (ColorLib meta description; page
  title "Booking Form HTML Template"; internal doc title "Booking Form
  HTML Template"). Category in TEMPLATES.md: **Booking Forms (22)**. The
  recreation brands itself **Stayly** but keeps the same section structure,
  field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-12/` (HTTP 200, ~5.4 KB
  HTML). Single-section document: `#booking.section` (height 100vh,
  `background-color: #f7f9fa`, font-family Cabin) with `.section-center`
  (absolute, top 50%, translateY(-50%)) vertically centering a
  `.container > .row > .booking-form` card:
  - `.booking-form` — `max-width: 642px`, `width: 100%`, `margin: auto`,
    white background, `box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.3)`.
  - `.booking-bg` — absolute left panel, `width: 250px`, `top/bottom: 0`,
    `background-image: url('../img/background.jpg')`, `background-size:
cover`, `background-position: center` (the split-screen image side).
  - `form` — `margin-left: 250px`, `padding: 30px`, `border: 1px solid
#f9fafc`, `border-left: 0`.
  - `.form-header` — `margin-bottom: 30px`; `<h2>Make your reservation</h2>`
    — `font-weight: 700`, `color: #122244`, `font-size: 35px`,
    `text-transform: capitalize`.
  - Field grid (Bootstrap row/col-md-6, NO Bootstrap dependency in the
    recreation):
    - Row 1: **Check In** (date input, `required`) | **Check Out** (date
      input, `required`).
    - Row 2: **Adults** (select: options 1/2/3, no default attr → first
      option 1) | **Children** (select: options 0/1/2, first option 0) —
      each with a custom `.select-arrow` span (content `'\279C'` ➜ rotated
      90°, `pointer-events: none`).
    - **Email** (email input, placeholder "Enter your email").
    - **Phone** (tel input, placeholder "Enter your phone number").
    - `.form-btn` (`margin-top: 10px`) → `.submit-btn` full-width
      **"Book Now"** button.
  - NO navbar, NO hero copy, NO footer, NO other sections — a one-section
    form demo (page ends with only a GA script). Mobile rule
    (max-width 480px): `.booking-bg` hidden, `form { margin-left: 0 }`.
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-12.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** light-gray page
  (`#f7f9fa`) with a single centered white card split in two: the left
  ~250px panel is a sunny resort photograph — bright blue sky, white wooden
  lounge chairs angled toward a swimming pool with bright blue water, palm
  trees and a beach umbrella (vacation theme) — and the right side is the
  white reservation form: dark-navy bold title "Make your reservation",
  four square light-gray inputs in a 2×2 grid (Check In / Check Out /
  Adults / Children), then full-width Email and Phone inputs, and a
  full-width medium-blue rectangular "Book Now" button with white text.
  Flat, clean, Bootstrap-era aesthetic — square corners (radius 0), subtle
  inset shadows on inputs, no pills, no gradients.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (height 100vh) light-gray section,
     Cabin font; content vertically centered via `.section-center`.
  2. `.booking-form` (white, max-width 642px, soft drop shadow) with the
     left image panel (`.booking-bg`, 250px) + right form:
     - Header "Make your reservation" (#122244, 35px, 700).
     - Check In (date, required) | Check Out (date, required).
     - Adults (select 1/2/3) | Children (select 0/1/2), custom arrows.
     - Email (placeholder "Enter your email").
     - Phone (placeholder "Enter your phone number").
     - **Book Now** (full-width blue submit).
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **blue `#6499ff`** — used ONLY for the submit button
    background (`.submit-btn`).
  - Heading color: **dark navy `#122244`** — also the input text color.
  - Font: **Cabin**, sans-serif (`#booking { font-family: 'Cabin',
sans-serif; }` — Google Fonts, weights 400 + 700; recommend
    `family=Cabin:wght@400;700`).
  - Page background: `#f7f9fa` (light gray) — also the input background.
  - Form card: background `#fff`, `max-width: 642px`, `margin: auto`,
    `box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.3)`; form inner border
    `1px solid #f9fafc` (left border removed).
  - Side image panel: 250px wide, `background-size: cover`,
    `background-position: center`; hidden below 480px.
  - Inputs (`.form-control`): `background-color: #f7f9fa`, `height: 40px`,
    `padding: 0 10px`, `border-radius: 0`, `border: 0`, `font-size: 16px`,
    `font-weight: 700`, `color: #122244`, inset shadow
    `0 1px 4px rgba(181, 193, 204, 0.3)` (same on focus — no focus ring
    change in source).
  - Placeholders: **`#dde3e8`** (also `input[type="date"]:invalid` color —
    an empty date input renders light grey until a value is picked).
  - Labels (`.form-label`): **`#b5c1cc`**, `font-size: 14px`, weight 700,
    `text-transform: uppercase`, `line-height/height: 24px`.
  - Select: `appearance: none`; custom `.select-arrow` — absolute,
    `right: 0`, `bottom: 4px`, 32×32, color `#dddee9`, content `'\279C'`
    (➜) rotated 90°, `font-size: 14px`, `pointer-events: none`.
  - Button (`.submit-btn`): `color: #fff`, `background-color: #6499ff`,
    `font-weight: 700`, `padding: 13px 35px`, `font-size: 16px`,
    `border: none`, `width: 100%` — text **"Book Now"**.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; side image → seeded picsum
  placeholder (`picsum.photos/seed/stayly-1/250/520` or a resort-like
  landscape seed; the source `background.jpg` must not be copied); date
  inputs are native `<input type="date">` styled with Tailwind (no
  datepicker dependency); select arrows = rotated `➜` glyph (U+279C) or
  lucide ChevronDown; Cabin via Google Fonts `<link>` in `index.html`;
  document title "Stayly — Booking Form Template"; brand
  "Booking"/"Colorlib Booking" → "Stayly" everywhere. The "Book Now" button
  validates the form (dates + email + phone required; check-out on/after
  check-in) and reveals a summary line (dates, adults/children, email) —
  the original demo is static, so this minimal interactive behavior is a
  documented recreation choice, kept in a pure exported function for
  100%-coverage tests.

Stayly lives in `apps/stayly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section

The system SHALL render a full-viewport (100vh) light-gray booking section
with a vertically centered white split-screen form card (image panel on the
left, form on the right). The page SHALL NOT render any navbar, hero copy,
or footer chrome (single-section form demo).

#### Scenario: Full-viewport section with centered split card

- **GIVEN** the Stayly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use the light-gray `#f7f9fa` background
- **AND** a white card (max-width 642px, soft drop shadow) SHALL be
  vertically and horizontally centered
- **AND** the card SHALL be split: a ~250px image panel on the left and the
  form on the right
- **AND** the page SHALL NOT contain a navigation bar or a footer

#### Scenario: Image panel hidden on small screens

- **GIVEN** the Stayly page is rendered
- **WHEN** the viewport is narrower than 480px
- **THEN** the left image panel SHALL be hidden
- **AND** the form SHALL expand to the full card width

### Requirement: Reservation form header

The system SHALL render the form header "Make your reservation" in the
dark-navy brand heading style.

#### Scenario: Header rendering

- **GIVEN** the booking card is displayed
- **WHEN** the form is rendered
- **THEN** an `h2` heading reading "Make your reservation" SHALL be shown
- **AND** the heading SHALL use the dark-navy `#122244` color at ~35px with
  weight 700

### Requirement: Check-in and check-out date fields

The system SHALL render Check In / Check Out date fields in the booking
form.

#### Scenario: Date fields

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** two date inputs SHALL be present side by side, labeled "Check
  In" and "Check Out"
- **AND** both date inputs SHALL be required
- **AND** an empty date input SHALL display light-grey placeholder-like text
  until a value is picked

#### Scenario: Check-out after check-in

- **GIVEN** a check-in date has been selected
- **WHEN** the user picks a check-out date earlier than the check-in date
- **THEN** the form SHALL flag the check-out date as invalid
- **AND** submission SHALL be blocked until check-out is on or after
  check-in

### Requirement: Adults and children selectors

The system SHALL render Adults and Children dropdowns with the source
option sets.

#### Scenario: Adults select

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** an "Adults" label SHALL be shown above a select control
- **AND** the select SHALL offer options 1, 2, and 3 with 1 selected by
  default
- **AND** the select SHALL display a custom arrow (rotated `➜` glyph or
  ChevronDown) at its right edge

#### Scenario: Children select

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Children" label SHALL be shown above a select control
- **AND** the select SHALL offer options 0, 1, and 2 with 0 selected by
  default
- **AND** the select SHALL display a custom arrow at its right edge

### Requirement: Email and phone fields

The system SHALL render full-width Email and Phone inputs in the booking
form.

#### Scenario: Email input

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** an "Email" label SHALL be shown above an email input
- **AND** the input SHALL have the placeholder "Enter your email"
- **AND** the input SHALL be required for submission and accept a valid
  email format

#### Scenario: Phone input

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Phone" label SHALL be shown above a tel input
- **AND** the input SHALL have the placeholder "Enter your phone number"
- **AND** the input SHALL be required for submission

### Requirement: Book Now button

The system SHALL render a full-width blue "Book Now" submit button that
validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** both dates, the email and the phone are filled in correctly
- **WHEN** the user clicks "Book Now"
- **THEN** the form SHALL show a summary line with the check-in/check-out
  dates, adult/child counts, and email (e.g. "2 adults · 1 child · 2026-08-10
  → 2026-08-14 · a@b.com")
- **AND** the summary SHALL be styled with the blue `#6499ff` brand color or
  on a light blue background

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Book Now" with missing dates, email, or phone
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-stayly`
- [ ] `scripts/verify-app.sh stayly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport light-gray section → vertically
      centered white split card (image panel left / form right) → fields in
      source order → Book Now button; NO navbar / NO footer (single-section
      demo)
- [ ] Brand color `#6499ff` (button) + heading/input text `#122244` in
      `@theme` and used via Tailwind classes
- [ ] Cabin (400/700) via Google Fonts `<link>` in `index.html`
- [ ] Side image = seeded picsum (`stayly-1/…`) in a ~250px left panel,
      `cover`/`center`, hidden below 480px (form full-width then)
- [ ] White card max-width 642px, shadow `0 5px 10px -5px rgba(0,0,0,0.3)`;
      form padding 30px, inner border `1px solid #f9fafc`
- [ ] Header "Make your reservation": `#122244`, ~35px, weight 700,
      capitalized
- [ ] Inputs: `#f7f9fa` background, height 40px, radius 0, no border,
      inset shadow `0 1px 4px rgba(181,193,204,0.3)`, 16px weight 700
      `#122244` text; placeholder `#dde3e8`
- [ ] Date inputs native `<input type="date">`; required; empty state grey;
      check-out ≥ check-in validation
- [ ] Adults select 1/2/3 (default 1), Children select 0/1/2 (default 0),
      custom arrow (rotated `➜` or ChevronDown) `#dddee9`
- [ ] Labels `#b5c1cc` 14px uppercase weight 700 above each input,
      associated via `htmlFor`/`id`
- [ ] "Book Now" button: full width, `#6499ff` bg, white weight-700 16px,
      padding 13px 35px, no radius; shows summary / validation messages
- [ ] Placeholder images via `picsum.photos/seed/stayly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
