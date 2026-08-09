# Template: Triply (Booking Forms / Dark Taxi Reservation Form)

## Purpose

Triply is a single-page taxi-booking form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V14" website template
(source: https://colorlib.com/wp/template/colorlib-booking-14/), built under a
DIFFERENT name (Triply — "trip", as in a taxi trip, plus the friendly "-ly"
suffix, matching the Booking Forms family convention: Reservly, Roomzy,
Roostly, Stayly, Ridely; re-branded) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-14/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-stayly / template-roostly / template-roomzy / template-reservly
> / template-ridely preps — the `preview.colorlib.com/assets/js/products.js`
> product map only covers new Astro-era templates). The LIVE PREVIEW button on
> the ColorLib template page resolves to `https://colorlib.com/etc/bforms/<slug>/`
> for the whole family. **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-14/` (HTTP 200, ~6.7 KB
> HTML + `css/style.css` ~3.5 KB), and the TEMPLATES.md screenshot
> (`colorlib-booking-14.jpg`, 1200×972, viewed in browser) matches the live
> render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V14" — page title "Colorlib
  Booking Form V14 - Free Dark Booking Form Template"; meta description "The
  best free dark booking form template with a responsive design for all the
  car rental and taxi businesses out there." Category in TEMPLATES.md:
  **Booking Forms (22)**. The recreation brands itself **Triply** but keeps
  the same section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-14/` (HTTP 200, ~6.7 KB
  HTML). Single-section document: `#booking.section` (height 100vh,
  font-family Raleway) with `.section-center` (absolute, top 50%,
  translateY(-50%)) vertically centering a `.container > .row > .booking-form`
  card:
  - `#booking` — **`background-image: url('../img/background.jpg')`,
    background-size: cover, background-position: center** (unlike
    Booking 13/Ridely, the SECTION carries the photo, not a left panel), plus
    `#booking::before` — an absolute full-bleed overlay `background:
rgba(0, 0, 0, 0.7)` (70% black scrim over the photo).
  - `.booking-form` — `max-width: 768px`, `width: 100%`, `margin: auto`,
    **`background: #1a1b1d`** (near-black solid card), **`padding: 30px`** —
    NO split-screen image panel (unlike Ridely), the card is the whole form.
  - `form` — no header element at all (unlike Ridely there is NO "Book Your
    Taxi" h2; the form starts directly with the Name field). Screenshot
    confirms: no heading above the first input.
  - Fields (each `.form-group` — `position: relative`, `margin-bottom: 20px`
    — with a **bottom tab label** `.form-label` and a Bootstrap
    `form-control`; NO Bootstrap dependency in the recreation):
    - **Name** (text input, placeholder "Enter your Name").
    - **Phone** (tel input, placeholder "Enter your Phone number").
    - **Pickup Location** (tel input, placeholder "Enter an origin
      location").
    - **Destination Location** (tel input, placeholder "Enter a destination
      location").
    - **Passenger Numbers** (select, `required`, first option
      `value="" selected hidden` reading **"Select Passenger Numbers"**,
      then options 1/2/3) + custom `.select-arrow` span (content `'\279C'` ➜
      rotated 90°, `pointer-events: none`).
    - Row (Bootstrap row/col-md-6): **Pickup Date** (date input, `required`)
      | **Pickup Time** (time input, `required`).
    - `.form-btn` (`margin-top: 10px`) → `.submit-btn` full-width
      **"Book Now"** button.
  - Tab-label behavior (jQuery `floatedLabel()` on `input`, toggling
    `.input-not-empty` on the `.form-group`): labels are `opacity: 0` until
    the field is filled, then slide in as a bar at the **bottom edge of the
    input** (`bottom: 0`), `background: #4d4d4d` → `#fff` with dark
    `#1a1b1d` text when filled. For select, date and time fields the label is
    ALWAYS visible (dark `#1a1b1d` text on the `#4d4d4d` bar, `opacity: 1`).
    When a field is filled: input `border-color` goes `#4d4d4d` → `#fff` and
    the label bar becomes white with dark text.
  - NO navbar, NO hero copy, NO footer, NO other sections — a one-section
    form demo (page ends with only the GA script). No media queries in
    `style.css` (the 768px card simply shrinks on mobile).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-14.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** full-viewport
  dark photograph of a city street at night, shot from a high angle — dark
  asphalt with white dashed lane markings and a double yellow center line,
  two yellow taxis (one prominent at the bottom center, one further back)
  — dimmed by a 70% black overlay. Dead center: a near-black solid card
  (max-width 768px) with NO heading — the form begins directly with the
  first input. Inputs are transparent with **2px grey `#4d4d4d` borders**
  (turning white when filled) and light-grey `rgba(255,255,255,0.3)`
  placeholders; each filled/date/time field shows a small **uppercase tab
  label bar at its bottom edge** (grey `#4d4d4d` bar with dark text, turning
  white with dark text when filled). The full-width **"Book Now" button is
  solid taxi-yellow `#ffc600` with dark `#1a1b1d` text** (INVERTED vs
  Ridely's dark button + yellow outline). Flat, square (radius 0
  everywhere), no gradients, no shadows. The yellow button + yellow taxi
  center-line echo each other. Dark "night ride" aesthetic throughout.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (height 100vh) section with the
     night-city photo background (`cover`/`center`) + `rgba(0,0,0,0.7)`
     scrim; content vertically centered via `.section-center`.
  2. `.booking-form` (near-black `#1a1b1d`, max-width 768px, padding 30px,
     margin auto) — the entire card:
     - NO header (form starts with Name).
     - Name (text, placeholder "Enter your Name").
     - Phone (tel, placeholder "Enter your Phone number").
     - Pickup Location (tel, placeholder "Enter an origin location").
     - Destination Location (tel, placeholder "Enter a destination
       location").
     - Passenger Numbers (select 1/2/3, required, hidden "Select Passenger
       Numbers" placeholder option).
     - Pickup Date (date, required) | Pickup Time (time, required).
     - **Book Now** (full-width solid-yellow submit, dark text).
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand/accent color: **yellow `#ffc600`** — the SOLID submit-button
    background (dark `#1a1b1d` text). The only pop color; echoes the taxi
    yellow in the background photo.
  - Card background: **near-black `#1a1b1d`**.
  - Section background: photo `../img/background.jpg` `cover`/`center` +
    full-bleed scrim **`rgba(0, 0, 0, 0.7)`** (`#booking::before`).
  - Input text + filled-input border: **`#fff`**.
  - Input border (empty): **2px solid `#4d4d4d`**; on `.input-not-empty`
    → `border-color: #fff` + `padding-bottom: 20px`.
  - Placeholders + select arrow (empty): **`rgba(255,255,255,0.3)`**;
    select arrow turns `#fff` when filled.
  - Tab labels (`.form-label`): `color: #000`, `font-weight: 700`,
    `text-transform: uppercase`, 14px, line-height/height 24px, absolute
    `left: 0`, `bottom: 0`, `opacity: 0` (hidden until filled), `display:
block`, `width: 100%`, **`background: #4d4d4d`**, `padding: 0 15px`,
    `pointer-events: none`, `transition: 0.2s all`. When filled
    (`.input-not-empty`): `opacity: 1`, `color: #1a1b1d`,
    **`background: #fff`** (white bar, dark text). Date/time/select labels
    always visible (`opacity: 1`, `color: #1a1b1d` on the grey bar).
  - Font: **Raleway**, sans-serif (`#booking { font-family: 'Raleway',
sans-serif; }` — Google Fonts, weights 400 + 700; recommend
    `family=Raleway:wght@400;700`).
  - Inputs (`.form-control`): `background-color: transparent`, `height:
65px`, `padding: 0 15px`, `border-radius: 0`, `color: #fff`,
    `font-size: 16px`, `font-weight: 700`, `box-shadow: none`,
    `transition: 0.2s`, **`border: 2px solid #4d4d4d`**. Date/time/select
    get `padding-bottom: 20px` (room for the label bar).
  - Select: `appearance: none`; options `color: #1a1b1d`; `:invalid`
    `color: rgba(255,255,255,0.3)`; custom `.select-arrow` — absolute,
    `right: 0`, `bottom: 26px`, 32×32, content `'\279C'` (➜) rotated 90°,
    14px, `pointer-events: none`.
  - Button (`.submit-btn`): **`color: #1a1b1d`, `background-color:
#ffc600`**, `font-weight: 700`, `height: 55px`, `font-size: 18px`,
    `border-radius: 0`, `width: 100%`, `border: none` — text **"Book Now"**.
  - `.form-btn` wrapper: `margin-top: 10px`.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; background photo → seeded
  picsum placeholder (`picsum.photos/seed/triply-1/1600/900` or a
  night-city/road seed; the source `background.jpg` must not be copied) as a
  full-bleed section background with an `rgba(0,0,0,0.7)` overlay (Tailwind
  `bg-black/70`); date/time inputs are native `<input type="date">` /
  `<input type="time">` styled with Tailwind (no datepicker dependency);
  select arrows = rotated `➜` glyph (U+279C) or lucide ChevronDown; tab
  labels implemented with React state (focused + hasValue — the source uses
  a jQuery class toggle; keep the behavior 1:1: hidden until filled for text
  inputs, always-visible for date/time/select, white bar + dark text when
  filled); Raleway via Google Fonts `<link>` in `index.html`; document
  title "Triply — Taxi Booking Form Template"; brand "Booking"/"Colorlib
  Booking" → "Triply" everywhere. The "Book Now" button validates the form
  (name, phone, pickup and destination locations, passenger count, date and
  time all required; phone format) and reveals a summary line (name, phone,
  pickup → destination, passengers, date + time) — the original demo is
  static, so this minimal interactive behavior is a documented recreation
  choice, kept in a pure exported function for 100%-coverage tests. NOTE:
  the input border is a full 2px box (grey → white on fill) — NOT the
  underline-only style of Ridely; the label bar sits at the BOTTOM EDGE of
  the input (not a floating label above it).

Triply lives in `apps/triply` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport dark booking section

The system SHALL render a full-viewport (100vh) booking section with a
night-city photograph background dimmed by a 70% black overlay, vertically
centering a near-black solid form card. The page SHALL NOT render any
navbar, hero copy, or footer chrome (single-section form demo).

#### Scenario: Full-viewport section with photo background and scrim

- **GIVEN** the Triply page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed background photograph
  (seeded picsum night-city/road image) with `cover`/`center` sizing
- **AND** the photograph SHALL be dimmed by an `rgba(0,0,0,0.7)` overlay
- **AND** a near-black card (`#1a1b1d`, max-width 768px, padding 30px)
  SHALL be vertically and horizontally centered
- **AND** the page SHALL NOT contain a navigation bar or a footer

#### Scenario: Solid card (no split panel)

- **GIVEN** the Triply page is rendered
- **WHEN** the form card is displayed
- **THEN** the card SHALL be a single solid `#1a1b1d` block with no image
  panel, no box-shadow and no border radius

### Requirement: No form heading

The system SHALL render the form WITHOUT any heading — the first element of
the form is the Name field (matching the source, which has no header).

#### Scenario: Form starts with the Name field

- **GIVEN** the booking card is displayed
- **WHEN** the form is rendered
- **THEN** no `h1`/`h2` heading SHALL appear above the fields
- **AND** the first visible control SHALL be the Name input

### Requirement: Tab labels

The system SHALL implement bottom-edge tab labels: a label bar that is
hidden until the field is filled for text inputs, and always visible for
date, time and select fields. Empty text-field labels SHALL be invisible;
when a field is filled the label SHALL appear as a bar at the bottom edge of
the input, dark text on a grey `#4d4d4d` bar that becomes a WHITE bar with
dark `#1a1b1d` text.

#### Scenario: Text field tab label hidden until filled

- **GIVEN** a text field (Name, Phone, Pickup Location, Destination
  Location) is displayed with its label
- **WHEN** the field is empty and not focused
- **THEN** the label bar SHALL be hidden (opacity 0)
- **AND** the field SHALL show its placeholder in
  `rgba(255,255,255,0.3)`
- **WHEN** the user types into the field
- **THEN** the label SHALL appear as a bar at the bottom edge of the input
- **AND** the filled label bar SHALL be white (`#fff`) with dark `#1a1b1d`
  uppercase 14px weight-700 text
- **AND** the input border SHALL turn white (`#fff`)

#### Scenario: Date, time and select labels always visible

- **GIVEN** the Passenger Numbers select, Pickup Date and Pickup Time fields
  are displayed
- **WHEN** the form is rendered
- **THEN** their label bars SHALL be visible (opacity 1) as grey `#4d4d4d`
  bars with dark `#1a1b1d` uppercase text
- **WHEN** such a field receives a value
- **THEN** its label bar SHALL turn white with dark text
- **AND** its border SHALL turn white

### Requirement: Name, phone and location fields

The system SHALL render the Name, Phone, Pickup Location and Destination
Location text inputs with the source placeholders, in source order.

#### Scenario: Field order and placeholders

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** the fields SHALL appear in this order: Name, Phone, Pickup
  Location, Destination Location
- **AND** Name SHALL have the placeholder "Enter your Name"
- **AND** Phone SHALL have the placeholder "Enter your Phone number"
- **AND** Pickup Location SHALL have the placeholder "Enter an origin
  location"
- **AND** Destination Location SHALL have the placeholder "Enter a
  destination location"
- **AND** all four fields SHALL use the boxed style (transparent
  background, 2px `#4d4d4d` border, radius 0)

#### Scenario: Fields required

- **GIVEN** the booking form is displayed
- **WHEN** the user submits without filling Name, Phone, Pickup Location or
  Destination Location
- **THEN** the form SHALL flag each empty field as invalid
- **AND** submission SHALL be blocked until all fields are filled (phone
  must match a phone format)

### Requirement: Passenger Numbers select

The system SHALL render a Passenger Numbers dropdown with the source option
set and a custom arrow.

#### Scenario: Passenger select

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Passenger Numbers" label bar SHALL be shown above a select
  control (always-visible grey bar)
- **AND** the select SHALL offer options 1, 2, and 3 with the hidden
  placeholder option reading "Select Passenger Numbers" until the user
  picks one
- **AND** the select SHALL be required
- **AND** the select SHALL display a custom arrow (rotated `➜` glyph or
  ChevronDown) in `rgba(255,255,255,0.3)` at its right edge, turning
  `#fff` when a value is selected

### Requirement: Pickup date and time fields

The system SHALL render Pickup Date and Pickup Time fields side by side in
the booking form.

#### Scenario: Date and time fields

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Pickup Date" date input and a "Pickup Time" time input SHALL
  be present side by side
- **AND** both inputs SHALL be required
- **AND** an empty date/time input SHALL display grey
  (`rgba(255,255,255,0.3)`) placeholder-like text until a value is picked
- **AND** the label bars SHALL be always visible (grey bar, dark text)

### Requirement: Book Now button

The system SHALL render a full-width "Book Now" submit button (solid yellow
`#ffc600` background with dark `#1a1b1d` text, radius 0) that validates the
form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** name, phone, pickup and destination locations, passenger count,
  pickup date and pickup time are all filled in correctly
- **WHEN** the user clicks "Book Now"
- **THEN** the form SHALL show a summary line with the passenger details
  (e.g. "1 passenger · 2026-08-10 09:30 · Origin → Destination · Name")
- **AND** the summary SHALL be styled with the yellow `#ffc600` brand color
  or on a yellow-tinted background

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Book Now" with missing required fields
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-triply`
- [ ] `scripts/verify-app.sh triply` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with night-city photo
      background + `rgba(0,0,0,0.7)` scrim → vertically centered solid
      near-black card (`#1a1b1d`, max-width 768px, padding 30px) → fields
      in source order → Book Now button; NO heading, NO navbar, NO footer
      (single-section demo)
- [ ] Brand color `#ffc600` (solid button background, dark text) and card
      bg `#1a1b1d` in `@theme` and used via Tailwind classes
- [ ] Raleway (400/700) via Google Fonts `<link>` in `index.html`
- [ ] Background = seeded picsum (`triply-1/…`) full-bleed with
      `bg-black/70` overlay, `cover`/`center`
- [ ] Card max-width 768px, bg `#1a1b1d`, no shadow, radius 0; form padding
      30px
- [ ] Inputs: transparent bg, height 65px, padding 0 15px, radius 0, 2px
      `#4d4d4d` border (→ `#fff` + padding-bottom 20px when filled), 16px
      weight 700 white; placeholder `rgba(255,255,255,0.3)`
- [ ] Tab labels: 14px weight-700 uppercase, absolute bottom edge of input,
      `#4d4d4d` bar with dark `#1a1b1d` text; hidden (opacity 0) until
      filled for text inputs; always visible for date/time/select; filled →
      white bar with dark text; associated via `htmlFor`/`id`
- [ ] Passenger select options 1/2/3 + hidden "Select Passenger Numbers"
      placeholder option, required, custom arrow (rotated `➜` or
      ChevronDown) `rgba(255,255,255,0.3)` → `#fff` when selected
- [ ] Pickup Date (date) + Pickup Time (time) side by side, required, grey
      empty state
- [ ] "Book Now" button: full width, `#ffc600` bg, `#1a1b1d` weight-700 18px
      text, height 55px, radius 0, border none; shows summary / validation
      messages
- [ ] Placeholder images via `picsum.photos/seed/triply-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
