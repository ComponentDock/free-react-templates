# Template: Ridely (Booking Forms / Taxi Reservation Form)

## Purpose

Ridely is a single-page taxi-booking form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V13" website template
(source: https://colorlib.com/wp/template/colorlib-booking-13/), built under a
DIFFERENT name (Ridely — "ride", as in a taxi ride, plus the friendly "-ly"
suffix, matching the Booking Forms family convention: Reservly, Roomzy,
Roostly, Stayly; re-branded) per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-13/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-stayly / template-roostly / template-roomzy / template-reservly
> preps — the `preview.colorlib.com/assets/js/products.js` product map only
> covers new Astro-era templates). The LIVE PREVIEW button on the ColorLib
> template page resolves to `https://colorlib.com/etc/bforms/<slug>/` for the
> whole family. **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-13/` (HTTP 200, ~6.8 KB
> HTML + `css/style.css` ~3.8 KB), and the TEMPLATES.md screenshot
> (`colorlib-booking-13.jpg`, 1200×972, viewed in browser) matches the live
> render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V13" — page title "Colorlib
  Booking Form V13 - Free Book A Taxi Template"; meta description "The best
  free book a taxi template with a dark design that uses Bootstrap Framework
  to guarantee great flexibility." Category in TEMPLATES.md:
  **Booking Forms (22)**. The recreation brands itself **Ridely** but keeps
  the same section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-13/` (HTTP 200, ~6.8 KB
  HTML). Single-section document: `#booking.section` (height 100vh,
  font-family Raleway; NO background color on the section — the page behind
  the card is white per the screenshot) with `.section-center` (absolute, top
  50%, translateY(-50%)) vertically centering a
  `.container > .row > .booking-form` card:
  - `.booking-form` — `max-width: 768px`, `width: 100%`, `margin: auto`,
    **background `#1a1b1d`** (near-black dark card; NO box-shadow).
  - `.booking-bg` — absolute left panel, `width: 310px`, `top/bottom: 0`,
    `background-image: url('../img/background.jpg')`, `background-size:
cover`, `background-position: center` (the split-screen image side).
  - `form` — `margin-left: 310px`, `padding: 30px`.
  - `.form-header` — `margin-bottom: 25px`; `<h2>Book Your Taxi</h2>` —
    `color: #fff`, `font-size: 42px`, `font-weight: 400`,
    `text-transform: uppercase`, `text-align: center`.
  - Fields (each `.form-group` — `position: relative`, `margin-bottom: 20px`
    — with a **floating label** `.form-label` and a Bootstrap
    `form-control`; NO Bootstrap dependency in the recreation):
    - **Name** (text input, placeholder "Enter your Name").
    - **Phone** (tel input, placeholder "Enter your Phone number").
    - **Pickup Location** (tel input, placeholder "Enter an origin
      location").
    - **Destination Location** (tel input, placeholder "Enter a destination
      location").
    - **Passenger Numbers** (select, `required`, first option hidden empty
      `label="&nbsp;" selected hidden`, then options 1/2/3) + custom
      `.select-arrow` span (content `'\279C'` ➜ rotated 90°,
      `pointer-events: none`).
    - Row (Bootstrap row/col-md-6): **Pickup Date** (date input, `required`)
      | **Pickup Time** (time input, `required`).
    - `.form-btn` (`margin-top: 25px`) → `.submit-btn` full-width
      **"Book Now"** button.
  - Floating-label JS: on input, the demo toggles `.input-not-empty` on the
    `.form-group`; labels are `opacity: 0` until focused or filled, then
    slide up (`top: 26px → 0`) in yellow. For select, date and time fields
    the label is ALWAYS visible (grey `rgba(255,255,255,0.3)`), turning
    yellow `#ffc600` on focus. Text inputs show their text only when focused
    or filled (`color: transparent` on empty unfocused inputs — the classic
    floating-label trick; the placeholder still shows).
  - NO navbar, NO hero copy, NO footer, NO other sections — a one-section
    form demo (page ends with only a GA script). Mobile rule
    (max-width 480px): `.booking-bg` hidden, `form { margin-left: 0 }`.
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-13.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** clean WHITE page
  with ONE centered near-black card (max-width 768px) split in two: the left
  ~310px panel is a dark aerial photograph of a city street at dusk — two
  yellow taxis driving on a multi-lane road, a large white arrow painted on
  the asphalt (night-driving theme) — and the right side is the dark
  charcoal form: large white uppercase "BOOK YOUR TAXI" heading, then
  underline-style input rows (thin grey `#cecccd` bottom border on
  transparent background), small grey floating labels that turn taxi-yellow
  `#ffc600` when focused/filled, and a full-width "Book Now" button with
  yellow text on dark background and a 2px yellow border. High-contrast
  "dark mode" form card against a light page; the yellow accent echoes the
  taxi yellow in the photograph. Flat, square (radius 0 everywhere), no
  gradients, no shadows.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (height 100vh) section on a white
     page, Raleway font; content vertically centered via `.section-center`.
  2. `.booking-form` (near-black `#1a1b1d`, max-width 768px) with the left
     image panel (`.booking-bg`, 310px) + right form:
     - Header "Book Your Taxi" (#fff, 42px, weight 400, uppercase, centered).
     - Name (text, placeholder "Enter your Name").
     - Phone (tel, placeholder "Enter your Phone number").
     - Pickup Location (tel, placeholder "Enter an origin location").
     - Destination Location (tel, placeholder "Enter a destination
       location").
     - Passenger Numbers (select 1/2/3, required, hidden empty option).
     - Pickup Date (date, required) | Pickup Time (time, required).
     - **Book Now** (full-width yellow-outlined submit).
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand/accent color: **yellow `#ffc600`** — floating labels on
    focus/fill, submit-button text + 2px border. The only pop color; echoes
    the taxi yellow in the side image.
  - Card/button background: **near-black `#1a1b1d`**.
  - Input text + heading: **`#fff`**.
  - Font: **Raleway**, sans-serif (`#booking { font-family: 'Raleway',
sans-serif; }` — Google Fonts, weights 400 + 700; recommend
    `family=Raleway:wght@400;700`).
  - Page background: white (the `.section`/`#booking` rules set no
    background; screenshot confirms white page).
  - Card: bg `#1a1b1d`, `max-width: 768px`, `margin: auto`, NO shadow.
  - Side image panel: 310px wide, `background-size: cover`,
    `background-position: center`; hidden below 480px.
  - Inputs (`.form-control`): `background-color: transparent`, `height:
65px`, `padding: 0`, `padding-top: 15px`, `border-radius: 0`, `border:
0`, `box-shadow: none`, `color: #fff`, `font-size: 16px`, `font-weight:
700`, `text-transform: capitalize`, **`border-bottom: 2px solid
#cecccd`**; `transition: 0.2s`.
  - Placeholders: **`rgba(255,255,255,0.3)`** (also empty date/time color
    via `input[type="date"]:invalid` / `:time`).
  - Floating-label trick: `.form-group:not(.input-not-empty)
.form-control:not(:focus)` → `color: transparent` (typed text invisible
    until focused or non-empty).
  - Labels (`.form-label`): **`#ffc600`**, 14px, weight 700,
    line-height/height 24px, absolute `left: 0`, `top: 26px` → `top: 0` on
    focus/fill, `opacity: 0` → 1, `text-transform: capitalize`,
    `pointer-events: none`, `transition: 0.2s all`. Date/time/select labels
    always visible in `rgba(255,255,255,0.3)`, yellow on focus.
  - Select: `appearance: none`; options `color: #1a1b1d`; custom
    `.select-arrow` — absolute, `right: 0`, `bottom: 4px`, 32×32, content
    `'\279C'` (➜) rotated 90°, `color: #cecccd`, `font-size: 14px`,
    `pointer-events: none`.
  - Button (`.submit-btn`): `color: #ffc600`, `background-color: #1a1b1d`,
    `font-weight: 700`, `height: 55px`, `padding: 10px 35px`, `font-size:
18px`, `border-radius: 0`, `width: 100%`,
    **`border: 2px solid #ffc600`** — text **"Book Now"**.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; side image → seeded picsum
  placeholder (`picsum.photos/seed/ridely-1/310/520` or a dark city-street
  seed; the source `background.jpg` must not be copied); date/time inputs
  are native `<input type="date">` / `<input type="time">` styled with
  Tailwind (no datepicker dependency); select arrows = rotated `➜` glyph
  (U+279C) or lucide ChevronDown; floating labels implemented with React
  state (focused + hasValue — the source uses a jQuery class toggle; keep
  the label behavior 1:1: hidden until focus/fill for text inputs, always
  visible grey for date/time/select, yellow on focus/fill); Raleway via
  Google Fonts `<link>` in `index.html`; document title "Ridely — Taxi
  Booking Form Template"; brand "Booking"/"Colorlib Booking" → "Ridely"
  everywhere. The "Book Now" button validates the form (name, phone, pickup
  and destination locations, passenger count, date and time all required;
  phone format) and reveals a summary line (name, phone, pickup →
  destination, passengers, date + time) — the original demo is static, so
  this minimal interactive behavior is a documented recreation choice, kept
  in a pure exported function for 100%-coverage tests.

Ridely lives in `apps/ridely` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport taxi booking section

The system SHALL render a full-viewport (100vh) booking section on a white
page with a vertically centered near-black split-screen form card (image
panel on the left, form on the right). The page SHALL NOT render any navbar,
hero copy, or footer chrome (single-section form demo).

#### Scenario: Full-viewport section with centered split card

- **GIVEN** the Ridely page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL sit on a white page background
- **AND** a near-black card (`#1a1b1d`, max-width 768px) SHALL be vertically
  and horizontally centered
- **AND** the card SHALL be split: a ~310px image panel on the left and the
  form on the right
- **AND** the page SHALL NOT contain a navigation bar or a footer

#### Scenario: Image panel hidden on small screens

- **GIVEN** the Ridely page is rendered
- **WHEN** the viewport is narrower than 480px
- **THEN** the left image panel SHALL be hidden
- **AND** the form SHALL expand to the full card width

### Requirement: Booking form header

The system SHALL render the form header "Book Your Taxi" in the white,
uppercase, centered brand heading style.

#### Scenario: Header rendering

- **GIVEN** the booking card is displayed
- **WHEN** the form is rendered
- **THEN** an `h2` heading reading "Book Your Taxi" SHALL be shown
- **AND** the heading SHALL be white at ~42px, weight 400, uppercase and
  centered

### Requirement: Floating labels

The system SHALL implement floating labels: a label above each field that is
hidden until the field is focused or filled, then shown in yellow `#ffc600`
and floated to the top. Date, time and select labels SHALL always be visible
(grey `rgba(255,255,255,0.3)`) and turn yellow on focus.

#### Scenario: Text field floating label

- **GIVEN** a text field (Name, Phone, Pickup Location, Destination
  Location) is displayed with its label
- **WHEN** the field is neither focused nor filled
- **THEN** the label SHALL be hidden (opacity 0)
- **AND** the field SHALL show its placeholder in
  `rgba(255,255,255,0.3)`
- **WHEN** the user focuses or types into the field
- **THEN** the label SHALL appear in yellow `#ffc600` above the field
- **AND** the typed text SHALL be visible in white

#### Scenario: Date, time and select labels always visible

- **GIVEN** the Passenger Numbers select, Pickup Date and Pickup Time fields
  are displayed
- **WHEN** the form is rendered
- **THEN** their labels SHALL be visible in grey `rgba(255,255,255,0.3)`
- **WHEN** such a field receives focus
- **THEN** its label SHALL turn yellow `#ffc600`

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
- **AND** all four fields SHALL use the underline style (transparent
  background, 2px `#cecccd` bottom border, radius 0)

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
- **THEN** a "Passenger Numbers" label SHALL be shown above a select control
- **AND** the select SHALL offer options 1, 2, and 3 with no value selected
  until the user picks one (hidden empty placeholder option, like the
  source)
- **AND** the select SHALL be required
- **AND** the select SHALL display a custom arrow (rotated `➜` glyph or
  ChevronDown) in `#cecccd` at its right edge

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
- **AND** the labels SHALL be visible grey and turn yellow on focus

### Requirement: Book Now button

The system SHALL render a full-width "Book Now" submit button (yellow
`#ffc600` text + 2px yellow border on `#1a1b1d`) that validates the form and
shows a summary.

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

- [ ] `npm run spec:validate` passes for `template-ridely`
- [ ] `scripts/verify-app.sh ridely` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section on white page → vertically
      centered near-black split card (image panel left 310px / form right)
      → fields in source order → Book Now button; NO navbar / NO footer
      (single-section demo)
- [ ] Brand color `#ffc600` (labels on focus/fill + button text/border) and
      card/button bg `#1a1b1d` in `@theme` and used via Tailwind classes
- [ ] Raleway (400/700) via Google Fonts `<link>` in `index.html`
- [ ] Side image = seeded picsum (`ridely-1/…`) in a ~310px left panel,
      `cover`/`center`, hidden below 480px (form full-width then)
- [ ] Card max-width 768px, bg `#1a1b1d`, no shadow; form padding 30px,
      margin-left 310px (0 below 480px)
- [ ] Header "Book Your Taxi": white, 42px, weight 400, uppercase, centered
- [ ] Inputs: transparent bg, height 65px, padding-top 15px, radius 0,
      border-bottom 2px solid `#cecccd`, 16px weight 700 white,
      capitalized; placeholder `rgba(255,255,255,0.3)`; typed text
      transparent until focused/filled
- [ ] Floating labels: `#ffc600`, 14px weight 700, hidden until
      focus/fill for text inputs; always-visible grey
      `rgba(255,255,255,0.3)` (yellow on focus) for date/time/select;
      associated via `htmlFor`/`id`
- [ ] Passenger select options 1/2/3 + hidden empty placeholder option,
      required, custom arrow (rotated `➜` or ChevronDown) `#cecccd`
- [ ] Pickup Date (date) + Pickup Time (time) side by side, required, grey
      empty state
- [ ] "Book Now" button: full width, `#1a1b1d` bg, `#ffc600` weight-700 18px
      text, 2px `#ffc600` border, height 55px, radius 0; shows summary /
      validation messages
- [ ] Placeholder images via `picsum.photos/seed/ridely-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
