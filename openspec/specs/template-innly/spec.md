# Template: Innly (Booking Forms / Resort Reservation Form)

## Purpose

Innly is a single-page resort-reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V15" website template
(source: https://colorlib.com/wp/template/colorlib-booking-15/), built under a
DIFFERENT name (Innly — "inn", a small hotel/lodge, fitting the resort
reservation use case, plus the friendly "-ly" suffix, matching the Booking
Forms family convention: Reservly, Roomzy, Roostly, Stayly, Ridely, Triply;
re-branded) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-15/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-stayly / template-roostly / template-roomzy / template-reservly
> / template-ridely / template-triply preps — the
> `preview.colorlib.com/assets/js/products.js` product map only covers new
> Astro-era templates). The LIVE PREVIEW button on the ColorLib template page
> resolves to `https://colorlib.com/etc/bforms/<slug>/` for the whole family.
> **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-15/` (HTTP 200, ~7.4 KB
> HTML + `css/style.css` ~3.1 KB), and the TEMPLATES.md screenshot
> (`colorlib-booking-15.jpg`, 1200×972, viewed in browser) matches the live
> render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V15" — page title "Colorlib
  Booking Form V15 - Free Resort Reservation Template"; meta description "A
  free resort reservation form template with a Bootstrap structure and a
  responsive design that works for accommodation businesses." Category in
  TEMPLATES.md: **Booking Forms (22)**. Internal doc title: "Booking Form
  HTML Template". The recreation brands itself **Innly** but keeps the same
  section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-15/` (HTTP 200, ~7.4 KB
  HTML). Single-section document: `#booking.section` (height 100vh,
  font-family 'Josefin Sans') with `.section-center` (absolute, top 50%,
  translateY(-50%)) vertically centering a `.container > .row > .booking-form`
  card:
  - `#booking` — **`background-image: url('../img/background.jpg')`,
    background-size: cover, background-position: center** (the SECTION
    carries the photo, like Booking 14/Triply) plus `#booking::before` — an
    absolute full-bleed overlay **`background: rgba(0, 0, 0, 0.2)`** (a
    LIGHT 20% black scrim — the family's DARK V14 uses 0.7; do not copy
    Triply's heavy scrim).
  - `.booking-form` — **`background-color: #fff`** (WHITE card — the LIGHT
    counterpart of the family), `max-width: 768px`, `width: 100%`,
    `margin: auto`, **`padding: 30px`, `border-radius: 3px`**.
  - `.form-header` — `text-align: center`, `margin-bottom: 40px`; **h1
    "Make your reservation"** — `font-family: 'Cardo', serif`, `font-weight:
700`, `text-transform: capitalize`, `font-size: 38px`, `color: #0c0c09`.
  - Row 1 (Bootstrap `row` + `col-md-6` × 2, NO Bootstrap dependency in the
    recreation):
    - **Check In** (date input, `required`) — label above, `.form-label`.
    - `.in-out` — the **`&#8652;` (⇔, U+21D4 LEFT RIGHT DOUBLE ARROW)
      divider** between the two date columns: `position: absolute`,
      `font-size: 24px`, `color: #c99552`, `right: -15px`, `bottom: 25px`,
      width/height 30px, `line-height: 30px`, `z-index: 20`,
      `transform: translateY(-50%)`, classes `hidden-xs hidden-sm` (hidden
      on small screens → `hidden sm:block` in the recreation).
    - **Check out** (date input, `required`).
  - Row 2 (Bootstrap `col-md-3` × 4):
    - **No of rooms** (select, options 1/2/3) + custom `.select-arrow`
      (content `'\279C'` ➜ rotated 90°, `pointer-events: none`).
    - **Adults** (select, options 1/2/3) + `.select-arrow`.
    - **Children** (select, options 0/1/2) + `.select-arrow`.
    - `.form-btn` (`margin-top: 23px`) → `.submit-btn` full-width
      **"Check availability"** button.
  - NO navbar, NO hero copy, NO footer, NO other sections — a one-section
    form demo (page ends with only the GA script). No media queries in
    `style.css` (Bootstrap handles the column collapse on mobile).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-15.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** full-viewport
  photograph of a tropical luxury resort — a large turquoise swimming pool in
  the foreground, wooden deck with dark lounge chairs and umbrellas, palm
  trees and jagged karst limestone mountains under a bright blue sky —
  dimmed only slightly by the 20% black scrim. Dead center: a WHITE card
  (max-width 768px, radius 3px) with a centered serif headline "Make Your
  Reservation" (bold, near-black). Row 1: two date inputs (white bg, 1px
  light-grey `#e1e1e1` border) with the bronze ⇔ symbol between them. Row 2:
  three selects (grey `#e1e1e1` arrow tab at the right edge) and the
  full-width "Check availability" button in **solid bronze/tan `#c99552`
  with white text**. Light, airy, high-contrast resort aesthetic — the
  bright-white LIGHT counterpart to Triply (Booking 14)'s dark night-ride
  card.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (height 100vh) section with the
     tropical-resort photo background (`cover`/`center`) + `rgba(0,0,0,0.2)`
     scrim; content vertically centered via `.section-center`.
  2. `.booking-form` (white `#fff`, max-width 768px, padding 30px, radius
     3px, margin auto) — the entire card:
     - `.form-header` — centered **"Make your reservation"** h1 (Cardo 700,
       38px, `#0c0c09`).
     - Row 1: **Check In** (date, required) ⇔ **Check out** (date, required)
       — two columns with the bronze double-arrow divider between them
       (hidden on small screens).
     - Row 2: **No of rooms** (select 1/2/3) · **Adults** (select 1/2/3) ·
       **Children** (select 0/1/2) · **Check availability** (full-width
       solid-bronze submit, white text).
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand/accent color: **bronze/tan gold `#c99552`** — the SOLID
    submit-button background (white text), the focus border color, the
    static label color, the ⇔ divider color, and the select-arrow focus
    background. The only pop color; echoes the warm wood tones in the
    resort photo.
  - Card background: **white `#fff`**, **`border-radius: 3px`** (the whole
    design uses 3px radii — inputs, button, card; NOT the radius-0 of
    Triply).
  - Section background: photo `../img/background.jpg` `cover`/`center` +
    light scrim **`rgba(0, 0, 0, 0.2)`**.
  - Headline: **`#0c0c09`** (near-black), `font-family: 'Cardo', serif`,
    weight 700, 38px, capitalized.
  - Fonts: **'Josefin Sans', sans-serif** (body/labels/inputs/button —
    weights 400 + 700) + **'Cardo', serif** (headline, weight 700). Google
    Fonts link recommendation:
    `family=Cardo:wght@700&family=Josefin+Sans:wght@400;700`.
  - Labels (`.form-label`): `font-size: 14px`, `font-weight: 700`,
    `margin-bottom: 3px`, `display: inline-block`, **`color: #c99552`**,
    `text-transform: capitalize` — STATIC labels ABOVE the input (NOT the
    bottom-edge tab bars of Triply/Booking 14, NOT floating labels).
  - Inputs (`.form-control`): `background-color: #fff`, `height: 50px`,
    `padding: 0px 20px`, **`border: 1px solid #e1e1e1`**, `border-radius:
3px`, `box-shadow: none`, **`color: #6b6b6d`**, `font-size: 14px`;
    placeholder **`#e1e1e1`**; focus `border-color: #c99552`. Empty date
    inputs render grey (`color: #e1e1e1` via
    `input[type="date"].form-control:invalid`).
  - `.form-group`: `position: relative`, `margin-bottom: 30px`.
  - Select: `appearance: none`; custom `.select-arrow` — absolute,
    `right: 0`, `bottom: 0`, 24px wide, `height: 50px` (line-height 50px),
    `background: #e1e1e1`, color `rgba(107, 107, 109, 0.3)`,
    `border-radius: 0px 3px 3px 0px`, `pointer-events: none`,
    `transition: 0.2s all`; `::after` content `'\279C'` (➜) rotated 90°;
    **on focus: `background: #c99552`, `color: #fff`**.
  - `.in-out` (⇔ divider): `font-size: 24px`, `color: #c99552`, absolute
    `right: -15px`, `bottom: 25px`, 30×30, `translateY(-50%)`, `z-index:
20`; hidden below `sm` breakpoint.
  - Button (`.submit-btn`): **`color: #fff`, `background-color: #c99552`**,
    `font-weight: 700`, `height: 50px`, `border: none`, `display: block`,
    `font-size: 14px`, `width: 100%`, `text-transform: capitalize`,
    `border-radius: 3px` — text **"Check availability"**.
  - `.form-btn` wrapper: `margin-top: 23px`.
- **KEY DIFFERENCES vs Triply (Booking 14) — do NOT copy the Triply dark
  design:**
  - WHITE card (`#fff`) vs near-black `#1a1b1d`; radius 3px vs 0.
  - Light 20% scrim vs heavy 70%; light bright resort photo vs dark night
    street.
  - HAS a centered h1 header ("Make your reservation", Cardo serif) — V14
    has no header at all.
  - STATIC bronze labels above inputs vs hidden-until-filled bottom tab
    bars; 1px `#e1e1e1` input borders vs 2px `#4d4d4d`.
  - Bronze `#c99552` button with WHITE text vs yellow `#ffc600` with dark
    text.
  - Josefin Sans + Cardo vs Raleway.
  - Hotel field set (check in/out, rooms, adults, children) vs taxi field
    set (name, phone, pickup/destination, passengers, date, time).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; background photo → seeded
  picsum placeholder (`picsum.photos/seed/innly-10/1600/900`, verified
  2026-08-11: a wooden dock over calm water at sunset — resort-appropriate
  and harmonizing with the bronze brand; the source `background.jpg` must not
  be copied; the originally suggested `innly-1` seed resolved to an urban
  concrete-memorial photo and was swapped)
  as a full-bleed section background with an `rgba(0,0,0,0.2)` overlay
  (Tailwind `bg-black/20`); date inputs are native `<input type="date">`
  styled with Tailwind (no datepicker dependency); select arrows = rotated
  `➜` glyph (U+279C) or lucide ChevronDown inside a 24px grey tab at the
  right edge (bronze on focus); the ⇔ divider = the `⇔` glyph or lucide
  ArrowLeftRight, hidden below `sm`; Josefin Sans (400/700) + Cardo (700)
  via Google Fonts `<link>` in `index.html`; document title "Innly — Resort
  Reservation Form Template"; brand "Booking"/"Colorlib Booking" → "Innly"
  everywhere. The "Check availability" button validates the form (check-in
  and check-out dates required; check-out ≥ check-in; rooms/adults/children
  selected) and reveals a summary line (check-in → check-out, rooms, adults,
  children) — the original demo is static, so this minimal interactive
  behavior is a documented recreation choice, kept in a pure exported
  function for 100%-coverage tests. Labels are static, bronze, ABOVE the
  input — NOT bottom tab bars, NOT floating labels.

Innly lives in `apps/innly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport resort booking section

The system SHALL render a full-viewport (100vh) booking section with a
tropical-resort photograph background dimmed by a 20% black overlay,
vertically centering a white rounded form card. The page SHALL NOT render
any navbar, hero copy, or footer chrome (single-section form demo).

#### Scenario: Full-viewport section with photo background and light scrim

- **GIVEN** the Innly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed background photograph
  (seeded picsum tropical-resort image) with `cover`/`center` sizing
- **AND** the photograph SHALL be dimmed by an `rgba(0,0,0,0.2)` overlay
- **AND** a white card (`#fff`, max-width 768px, padding 30px,
  border-radius 3px) SHALL be vertically and horizontally centered
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: Form header

The system SHALL render a centered form header with the headline "Make your
reservation" in the serif display font above the form fields.

#### Scenario: Centered serif headline

- **GIVEN** the Innly page is rendered
- **WHEN** the form card is displayed
- **THEN** a centered `h1` reading "Make your reservation" SHALL appear at
  the top of the card
- **AND** the headline SHALL use the Cardo serif font, weight 700, size
  ~38px, in near-black `#0c0c09`
- **AND** the headline SHALL be followed by a 40px gap before the fields

### Requirement: Check-in and check-out date fields

The system SHALL render Check In and Check out date inputs side by side in
the booking form, with a bronze double-arrow divider between them that is
hidden on small screens.

#### Scenario: Date fields with divider

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Check In" date input and a "Check out" date input SHALL be
  present side by side
- **AND** both inputs SHALL be required
- **AND** a `⇔` divider in the bronze `#c99552` color SHALL be shown
  between the two fields on `sm` and larger screens
- **AND** the divider SHALL be hidden on small screens
- **AND** an empty date input SHALL display grey (`#e1e1e1`) placeholder-like
  text until a value is picked
- **AND** focusing a date input SHALL turn its border bronze `#c99552`

#### Scenario: Check-out not before check-in

- **GIVEN** the user has picked a check-in date
- **WHEN** the user picks a check-out date earlier than the check-in date
- **THEN** the form SHALL flag the check-out field as invalid
- **AND** submission SHALL be blocked until check-out is on or after
  check-in

### Requirement: Rooms, Adults and Children selects

The system SHALL render three selects (No of rooms, Adults, Children) with
the source option sets and a custom grey arrow tab at the right edge of each
select that turns bronze on focus.

#### Scenario: Select field set

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "No of rooms" select SHALL offer options 1, 2 and 3
- **AND** an "Adults" select SHALL offer options 1, 2 and 3
- **AND** a "Children" select SHALL offer options 0, 1 and 2
- **AND** each select SHALL display a custom arrow (rotated `➜` glyph or
  ChevronDown) inside a 24px-wide grey `#e1e1e1` tab at its right edge,
  rounding to the input's 3px corner radius
- **AND** when a select receives focus, its arrow tab SHALL turn bronze
  `#c99552` with white glyph

### Requirement: Check availability button

The system SHALL render a full-width "Check availability" submit button
(solid bronze `#c99552` background with white text, radius 3px) that
validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** check-in and check-out dates are filled in (check-out ≥
  check-in) and rooms, adults and children are selected
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the reservation details
  (e.g. "Check-in 2026-08-10 → Check-out 2026-08-13 · 1 room · 2 adults ·
  0 children")
- **AND** the summary SHALL be styled with the bronze `#c99552` brand color
  or on a bronze-tinted background

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Check availability" with missing required fields
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

### Requirement: Static bronze labels

The system SHALL render each field with a static, capitalized label in the
bronze brand color ABOVE the input (matching the source — NOT floating
labels, NOT bottom-edge tab bars).

#### Scenario: Label placement and styling

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** every field (Check In, Check out, No of rooms, Adults, Children)
  SHALL have a label directly above its input
- **AND** each label SHALL be 14px, weight 700, capitalized, in bronze
  `#c99552`
- **AND** each label SHALL be associated with its control via
  `htmlFor`/`id` (accessible)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-innly`
- [ ] `scripts/verify-app.sh innly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with tropical-resort photo
      background + `rgba(0,0,0,0.2)` scrim → vertically centered white card
      (`#fff`, max-width 768px, padding 30px, radius 3px) → centered serif
      header "Make your reservation" → fields in source order → Check
      availability button; NO navbar, NO footer (single-section demo)
- [ ] Brand color `#c99552` (button background, label color, focus border,
      ⇔ divider, arrow-tab focus) in `@theme` and used via Tailwind classes
- [ ] Josefin Sans (400/700) + Cardo (700) via Google Fonts `<link>` in
      `index.html`
- [ ] Background = seeded picsum (`innly-10/…`) full-bleed with `bg-black/20`
      overlay, `cover`/`center`
- [ ] Card: max-width 768px, bg `#fff`, radius 3px, padding 30px, margin
      auto
- [ ] Header: h1 "Make your reservation", Cardo 700 38px `#0c0c09`,
      centered, 40px bottom margin
- [ ] Check In (date, required) + Check out (date, required) side by side;
      `⇔` divider in `#c99552` between them, `hidden` below `sm`
- [ ] Inputs: white bg, height 50px, padding 0 20px, radius 3px, 1px
      `#e1e1e1` border → `#c99552` on focus, 14px `#6b6b6d` text,
      `#e1e1e1` placeholder/grey empty-date state
- [ ] Selects: No of rooms (1/2/3), Adults (1/2/3), Children (0/1/2);
      `appearance: none`; 24px grey `#e1e1e1` arrow tab right edge (radius
      0 3px 3px 0), rotated `➜`/ChevronDown, → `#c99552` + white glyph on
      focus
- [ ] Labels: static, above input, 14px weight-700 capitalized `#c99552`,
      `htmlFor`/`id` associated
- [ ] "Check availability" button: full width, `#c99552` bg, white
      weight-700 14px text, height 50px, radius 3px, border none; validates
      (dates required, check-out ≥ check-in) and shows summary / validation
      messages
- [ ] Placeholder images via `picsum.photos/seed/innly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
