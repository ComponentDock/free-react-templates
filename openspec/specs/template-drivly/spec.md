# Template: Drivly (Booking Forms / Car Reservation Form)

## Purpose

Drivly is a single-page car-booking form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V4" website template
(source: https://colorlib.com/wp/template/colorlib-booking-4/), built under a
DIFFERENT name (Drivly — "drive", as in driving a rental car, plus the
friendly "-ly" suffix, matching the Booking Forms family convention: Reservly,
Roomzy, Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly,
Skyly, Coastly, Bookly, Nestly; re-branded) per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-4/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-skyly / template-stayly / template-roostly / template-roomzy /
> template-reservly / template-ridely / template-triply / template-innly /
> template-lodgely / template-hostly / template-guestly / template-coastly /
> template-bookly / template-nestly preps — the
> `preview.colorlib.com/assets/js/products.js` product map only covers new
> Astro-era templates). The LIVE PREVIEW button on the ColorLib template page
> resolves to `https://colorlib.com/etc/bforms/<slug>/` for the whole family.
> **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-4/` (HTTP 200, ~7.8 KB
> HTML + `css/style.css` ~2.4 KB + `css/bootstrap.min.css`), the background
> photo (`img/background.jpg`, 1920×1080) was fetched, and the TEMPLATES.md
> screenshot (`colorlib-booking-4.jpg`, 1200×972, viewed in browser) matches
> the live render 1:1 (yellow "BOOK A CAR" header + dark form card over a
> yellow-cabs city-street photo).** NOTE: this is the DARK STACKED-CARD
> variant with a YELLOW accent — do NOT confuse it with Ridely (Booking 13,
> dark split-screen taxi card, `#ffc600`) or Coastly (Booking 2, dark
> horizontal slab, `#72b01d` lime). It is the car-booking sibling of Bookly
> (Booking 20, light stacked card, green) in structure — but DARK (`#101113`
> card) with gold-yellow `#ffc001` accents.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V4" — free CAR-booking /
  car-rental form widget template, Bootstrap-based (Booking Forms category,
  22 templates in the family). Internal demo doc title: "Booking Form HTML
  Template"; meta description "The best free car booking form template that
  uses Bootstrap Framework to guarantee great flexibility." The recreation
  brands itself **Drivly** but keeps the same section structure, field set
  and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-4/` (HTTP 200, ~7.8 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row > .booking-form`:
  - `#booking` — **full-bleed PHOTO page background**:
    `background-image: url('../img/background.jpg'); background-size: cover;
background-position: center;` (the photo is a **row of yellow New York
    taxis driving down a city street**, 1920×1080), with
    `font-family: 'Montserrat', sans-serif`, AND a **dark overlay scrim**
    `#booking::before { background: rgba(0, 0, 0, 0.6); top/left/right/bottom:
0 }` — unlike Nestly (no overlay) and Bookly (white wash).
  - `.booking-form` — the **DARK STACKED CARD**: `max-width: 642px; width:
100%; margin: auto;` (no box-shadow, no border — a flat dark slab).
  - `.form-header` — `text-align: center; margin-bottom: 25px;` holding
    **h1 "Book a car"** — `font-size: 58px; text-transform: uppercase;
font-weight: 700; color: #ffc001; margin: 0` (the gold-yellow brand color).
  - `form` — `background-color: #101113; padding: 30px 20px; border-radius:
3px;` (the near-black card body).
  - Field set (each `.form-group` — `position: relative; margin-bottom:
15px` — with a **STATIC label** `.form-label` and a Bootstrap
    `form-control`; NO Bootstrap dependency in the recreation):
    1. Row (`col-sm-6` + `col-sm-6`): **Name** (text input, placeholder
       "Enter your name") + **Email** (email input, placeholder "Enter your
       email").
    2. **Phone** (tel input, placeholder "Enter your phone number").
    3. **Pickup Location** (text input, placeholder "Enter ZIP/Location").
    4. **Destination** (text input, placeholder "Enter ZIP/Location").
    5. Row: `col-sm-5` **Pickup Date** (date input, `required`) + `col-sm-7`
       inner row of three selects: **Hour** (options 1–12, plus `.select-arrow`
       glyph), **Min** (options 05–55 step 5), **AM/PM** (options AM / PM),
       each `col-sm-4`.
  - `.form-btn` — `margin-top: 15px` (via the form-group spacing) holding
    **button.submit-btn "Book Now"** — `color: #101113; background-color:
#ffc001; font-weight: 700; height: 50px; border: none; width: 100%;
display: block; border-radius: 3px; text-transform: uppercase;` (full-width
    gold-yellow block button).
  - **STATIC labels (NOT floating — the defining difference vs Bookly and
    Ridely):** `.form-label` — `color: #fff; font-size: 12px; font-weight:
400; margin-bottom: 5px; display: block; text-transform: uppercase;`. No
    jQuery, no `.input-not-empty` mechanic, no floating on focus — labels
    sit fixed above each input.
  - Fields (`.form-control`): `background-color: #f5f5f5; border: none;
height: 45px; border-radius: 3px; box-shadow: none; font-weight: 400; color:
#101113;` — light-grey (off-white) solid fields with dark text and 3px
    radius. Placeholder: `rgba(16, 17, 19, 0.3)` (30% opacity dark).
    `input[type="date"].form-control:invalid { color: rgba(16,17,19,0.3) }`.
  - Selects: `select.form-control { -webkit-appearance: none; appearance:
none; }`. `.select-arrow` — `position: absolute; right: 0px; bottom: 6px;
width: 32px; height: 32px; line-height: 32px; text-align: center;
pointer-events: none; color: #101113; font-size: 14px;` with `::after`
    content `'\279C'` (➜ U+279C) `transform: rotate(90deg)`.
  - NO navbar, NO footer, NO other sections — a one-section form demo (page
    ends with only the gtag GA script). Responsive behavior comes entirely
    from Bootstrap's `col-sm-*` grid (fields stack below 576px; the
    date+time row wraps).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with a full-bleed
     cover/center PHOTO background (yellow taxis on a city street) under a
     `rgba(0,0,0,0.6)` overlay scrim; content vertically centered via
     `.section-center`.
  2. `.booking-form` — dark `#101113` stacked card (max-width 642px, radius
     3px): CENTERED gold-yellow h1 "Book a car" (58px, uppercase, 700,
     `#ffc001`) → form fields: Name + Email (side-by-side), Phone, Pickup
     Location, Destination, Pickup Date + Hour/Min/AM-PM selects →
     full-width gold-yellow "Book Now" button.
  3. No footer, no other content sections (single-section demo).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-4.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** a full-screen photograph of
  a row of yellow taxis driving down a city street, dimmed by a black
  overlay. Centered on top sits a DARK (near-black `#101113`) rectangular
  card with rounded (3px) corners containing a car-booking form. Above the
  form, the headline **"BOOK A CAR"** in large bold uppercase
  gold-yellow **`#ffc001`**. Inside the card, white/light-grey input fields
  with small uppercase white labels (NAME, EMAIL, PHONE, PICKUP LOCATION,
  DESTINATION, PICKUP DATE, HOUR, MIN, AM/PM) and light-grey placeholders;
  the date+time row uses native date input and three selects with a small
  arrow glyph. At the bottom, a wide gold-yellow **"BOOK NOW"** button with
  dark text. The ONLY accent color is gold-yellow `#ffc001`; everything else
  is the dark card, light fields, white labels and the taxi photo. Clean,
  high-contrast car rental booking widget.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **gold-yellow `#ffc001`** — used for the "Book a car" h1
    text AND the "Book Now" button background (with dark `#101113` button
    text). The ONLY accent color.
  - Card background: **`#101113`** (near-black charcoal) — the form card
    body; also the input text color.
  - Input background: **`#f5f5f5`** (light grey/off-white) — solid fields,
    no border, 45px tall, 3px radius. Placeholder `rgba(16,17,19,0.3)`.
  - Labels + arrows: **`#fff`** labels (12px uppercase, weight 400, 5px
    bottom margin); select arrows `#101113` 14px.
  - Overlay: **`rgba(0, 0, 0, 0.6)`** — `#booking::before` scrim over the
    photo.
  - Font: **"Montserrat"** (sans-serif) — 400 body/labels, 700 h1 + button.
    Google Fonts link in the demo head (via cf-fonts @font-face blocks).
  - Section: **100vh**, photo `cover`/`center`.
  - `.form-header h1`: `font-size: 58px; text-transform: uppercase;
font-weight: 700; color: #ffc001; margin: 0`.
  - `form`: `background-color: #101113; padding: 30px 20px; border-radius:
3px`.
  - `.form-control`: `background-color: #f5f5f5; border: none; height: 45px;
border-radius: 3px; box-shadow: none; font-weight: 400; color: #101113`.
  - `.submit-btn`: `color: #101113; background-color: #ffc001; font-weight:
700; height: 50px; border: none; width: 100%; display: block; border-radius:
3px; text-transform: uppercase`. (No hover rule in the source CSS.)
  - Selects: `appearance: none`. `.select-arrow` — absolute `right: 0;
bottom: 6px`, 32×32, `line-height: 32px`, `text-align: center`,
    `pointer-events: none`, **`#101113`, 14px**; `::after` content `'\279C'`
    (➜) rotated 90°.
  - Responsive: Bootstrap `col-sm-6/col-sm-5/col-sm-7/col-sm-4` grid. Below
    576px the Name/Email row and the date+time row stack; below 992px the
    card stays centered full-width. The dark card + gold accents persist at
    all sizes.
- **KEY DIFFERENCES vs Ridely (Booking 13) — the other dark taxi/car card,
  do NOT merge:** Ridely = `#1a1b1d` card, max-width 768px, NO radius, a
  SPLIT layout (image panel LEFT 310px + form RIGHT with `margin-left:
310px`), Raleway font, h2 "Book Your Taxi" white 42px weight-400,
  FLOATING labels that turn `#ffc600` on focus, fields Name/Phone/Pickup
  Location/Destination Location only, NO date/time row. Drivly = `#101113`
  card, max-width 642px, 3px radius, SINGLE centered card (NO split panel,
  no inner photo), Montserrat font, h1 "Book a car" gold `#ffc001` 58px
  weight-700, STATIC white 12px uppercase labels (never float), full field
  set (Name/Email/Phone/Pickup/Destination + Pickup Date/Hour/Min/AM-PM),
  full-width gold "Book Now" button. Different accent (`#ffc600` vs
  `#ffc001`), different fonts, different layout.
- **KEY DIFFERENCES vs Coastly (Booking 2) — the dark horizontal-bar
  variant, do NOT merge:** Coastly = solid `#1a1e24` dark charcoal HORIZONTAL
  slab, `#72b01d` lime accent, CTA RIGHT + form LEFT in one bar, static
  white `capitalize` labels, 100px sharp fields. Drivly = STACKED CARD
  (max-width 642px, centered), `#101113` + gold `#ffc001`, header ABOVE
  form, full-width button. Same dark treatment, completely different
  arrangement and palette.
- **KEY DIFFERENCES vs Bookly (Booking 20) — the light stacked-card
  variant, do NOT copy:** Bookly = WHITE 642px stacked card, `#2b9328` green
  accent, Montserrat, CTA LEFT + form RIGHT (two-column), 55px underline
  fields with FLOATING labels that turn green on focus/fill, hotel field set
  (name/email/phone/rooms/guests/check-in/check-out), "Make your
  reservation" h1, "Book Now" button. Drivly = DARK `#101113` card, gold
  `#ffc001` accent, single centered column, STATIC white labels, car field
  set (name/email/phone/pickup/destination/pickup date/hour/min/am-pm),
  "Book a car" h1, full-width "Book Now" button. Same stacked-card family —
  palettes, label behavior, field sets and layout are all different.
- **KEY DIFFERENCES vs Nestly (Booking 3) — the light horizontal-bar
  variant, do NOT merge:** Nestly = WHITE horizontal bar over a full-sat
  beach photo (no overlay), taupe `#9a8067`, Alegreya + Source Sans Pro,
  static grey `#818390` labels, 28px borderless serif values. Drivly =
  DARK stacked card over a dimmed taxi photo (`rgba(0,0,0,0.6)` scrim),
  gold `#ffc001`, Montserrat, static WHITE uppercase 12px labels, 45px
  solid `#f5f5f5` fields. Both use static labels — but everything else
  differs.
- **Family palette check (2026-08-09):** gold-yellow `#ffc001` is unique in
  the family so far — Ridely `#ffc600` (slightly different yellow, dark
  split card), Skyly `#4fa3e3`, Coastly `#72b01d`, Guestly `#ff9000`,
  Roostly `#ff0063`, Stayly `#6499ff`, Roomzy `#f14634`, Innly `#c99552`,
  Lodgely `#6c8f18`, Bookly `#2b9328`, Nestly `#9a8067`, Hostly `#856849`.
  Keep `#ffc001` exact so the two yellow variants (Drivly vs Ridely) stay
  distinguishable.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the page background uses a
  seeded picsum placeholder (`picsum.photos/seed/drivly-1/1920/1080`, a
  city-street/cars-appropriate seed; the source `background.jpg` must not be
  copied) with `cover`/`center` and the `rgba(0,0,0,0.6)` overlay scrim;
  date input is native `<input type="date">` styled with Tailwind (no
  datepicker dependency); Hour/Min/AM-PM are native `<select>`s with
  `appearance: none` + a rotated `➜` glyph (U+279C) or lucide ChevronDown
  (`#101113`, 14px, 32×32, at `right 0 bottom 6px`); labels are STATIC real
  `<label htmlFor>` elements (white, 12px, uppercase, above the field —
  they must NOT float, unlike Bookly/Ridely); body in Montserrat 400 +
  700 via Google Fonts `<link>` in `index.html`; document title "Drivly —
  Car Booking Template"; brand "Booking"/"Colorlib Booking" → "Drivly"
  everywhere. The "Book Now" button validates the form (name/email/phone/
  pickup/destination/pickup-date required; hour/min/am-pm defaulted) and
  reveals a summary line (pickup → destination, date + time) — the original
  demo is static, so this minimal interactive behavior is a documented
  recreation choice, kept in a pure exported function for 100%-coverage
  tests.

Drivly lives in `apps/drivly` (package `@free-react-templates/drivly`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with photo background

The system SHALL render a full-viewport (100vh) booking section with a
full-bleed cover/center-positioned photograph as the page background,
dimmed by a dark overlay scrim, vertically centering a single dark booking
card. The page SHALL NOT render any navbar, hero chrome, or footer
(single-section form demo).

#### Scenario: Full-viewport section with photo background

- **GIVEN** the Drivly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed photograph
  (`picsum.photos/seed/drivly-1/1920/1080`) as its background,
  cover-positioned and centered
- **AND** the photo SHALL be dimmed by a `rgba(0, 0, 0, 0.6)` overlay scrim
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: Dark stacked booking card

The system SHALL render a dark (near-black) booking card of max-width 642px,
centered horizontally, with 3px corner radius and no shadow, containing a
gold-yellow header and the booking form.

#### Scenario: Card with header and form

- **GIVEN** the Drivly page is rendered
- **WHEN** the page loads
- **THEN** a dark card with background `#101113` SHALL be shown, centered,
  max-width 642px, full width, with 3px border radius
- **AND** the card SHALL contain the form header, the form fields, and the
  submit button
- **AND** the card SHALL have no box-shadow and no border

### Requirement: Book a car header

The system SHALL render a centered gold-yellow "Book a car" heading above
the form fields.

#### Scenario: Book a car heading

- **GIVEN** the dark booking card is displayed
- **WHEN** the page loads
- **THEN** a level-1 heading reading "Book a car" SHALL be shown, centered,
  above the form
- **AND** the heading SHALL be in the brand color gold-yellow `#ffc001`,
  58px, uppercase, weight 700

### Requirement: Car booking field set

The system SHALL render the booking form fields in source order: Name and
Email side-by-side, then Phone, Pickup Location, Destination, then Pickup
Date with Hour/Min/AM-PM selects, each with a STATIC white uppercase label.
Labels SHALL be real `<label>` elements and SHALL NOT float on focus or
value.

#### Scenario: Field set and order

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** the form SHALL show, in order: Name and Email (side by side on
  ≥576px), Phone, Pickup Location, Destination, Pickup Date, Hour, Min,
  AM/PM
- **AND** Name SHALL be a text input with placeholder "Enter your name"
- **AND** Email SHALL be an email input with placeholder "Enter your email"
- **AND** Phone SHALL be a tel input with placeholder "Enter your phone
  number"
- **AND** Pickup Location and Destination SHALL be text inputs with
  placeholder "Enter ZIP/Location"
- **AND** Pickup Date SHALL be a native date input marked required
- **AND** Hour SHALL be a select with options 1 through 12
- **AND** Min SHALL be a select with options 05 through 55 in steps of 5
- **AND** AM/PM SHALL be a select with options AM and PM

#### Scenario: Static labels

- **GIVEN** any field in the card is displayed
- **WHEN** the field is empty, focused, or has a value
- **THEN** its label SHALL remain fixed above the field, in white, 12px,
  uppercase, weight 400
- **AND** the label SHALL be a real `<label>` associated with the control
  via `htmlFor`/`id`
- **AND** the label SHALL NOT float, shrink, or change color on focus or
  when the field has a value

#### Scenario: Field styling

- **GIVEN** the dark booking card is displayed
- **WHEN** the fields are rendered
- **THEN** every field SHALL have a light grey `#f5f5f5` background, no
  border, 45px height, and 3px border radius
- **AND** every field SHALL show its value or placeholder in dark
  `#101113` at weight 400
- **AND** placeholders SHALL render at `rgba(16, 17, 19, 0.3)` opacity

### Requirement: Select arrow glyphs

The system SHALL render Hour, Min, and AM/PM as selects with native
appearance removed and a floating arrow glyph at the right edge.

#### Scenario: Selects with arrow

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** all three selects SHALL hide their native appearance
  (`appearance: none`)
- **AND** an arrow glyph (rotated `➜` U+279C or ChevronDown, `#101113`,
  14px, 32×32) SHALL float at the right edge (`right 0 bottom 6px`) of each
  select, without capturing pointer events

### Requirement: Book Now submit button

The system SHALL render a full-width "Book Now" button (gold-yellow
`#ffc001` background, dark `#101113` uppercase bold text, 50px tall, 3px
radius) that validates the form and shows a summary.

#### Scenario: Button styling

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** a button reading "Book Now" SHALL be shown at the bottom of the
  form, full width
- **AND** the button SHALL have a gold-yellow `#ffc001` background with
  dark `#101113` uppercase weight-700 text, 50px height, and 3px radius

#### Scenario: Submit with valid input

- **GIVEN** the user has filled name, email, phone, pickup location,
  destination, and pickup date
- **WHEN** the user clicks "Book Now"
- **THEN** the form SHALL show a summary line with the pickup location,
  destination, date and time (e.g. "Downtown → Airport · Aug 10, 2026 ·
  10:05 AM")
- **AND** the summary SHALL be styled with the gold-yellow `#ffc001` brand
  color or on a gold-tinted background

#### Scenario: Submit with missing required fields

- **GIVEN** the dark booking card is displayed
- **WHEN** the user clicks "Book Now" with any required field (name, email,
  phone, pickup location, destination, pickup date) empty
- **THEN** the form SHALL show validation messages for the invalid fields
- **AND** no summary SHALL be shown

### Requirement: Mobile stacking

The system SHALL collapse the side-by-side field rows to stacked fields on
small screens, matching the source's Bootstrap `col-sm-*` behavior.

#### Scenario: Stacked below 576px

- **GIVEN** the Drivly page is rendered on a viewport narrower than 576px
- **WHEN** the page is displayed
- **THEN** Name and Email SHALL stack vertically (source `col-sm-6`
  behavior)
- **AND** the Pickup Date / Hour / Min / AM-PM row SHALL wrap so every
  field takes full width (source `col-sm-5`/`col-sm-7`/`col-sm-4` behavior)
- **AND** the "Book Now" button SHALL remain full width

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-drivly`
- [ ] `scripts/verify-app.sh drivly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with full-bleed cover/center
      PHOTO page background (seeded picsum `drivly-1/1920/1080` + 60% dark
      overlay scrim) → vertically centered DARK `#101113` card (max-width
      642px, radius 3px) → centered gold-yellow "Book a car" h1 (58px
      uppercase 700 `#ffc001`) → form (Name+Email row, Phone, Pickup
      Location, Destination, Pickup Date + Hour/Min/AM-PM selects) →
      full-width gold-yellow "Book Now" button; NO navbar, NO footer
      (single-section demo)
- [ ] Brand color `#ffc001` (gold-yellow — "Book a car" header + "Book
      Now" button background) in `@theme` and used via Tailwind classes
- [ ] Card `#101113`; inputs `#f5f5f5` 45px 3px-radius borderless with dark
      `#101113` text; placeholders `rgba(16,17,19,0.3)`; labels `#fff`
      12px uppercase STATIC (never float)
- [ ] Montserrat 400 + 700 via Google Fonts `<link>` in `index.html`
- [ ] Page background = seeded picsum (`drivly-1/1920/1080`) cover/center
      full-bleed WITH `rgba(0,0,0,0.6)` overlay scrim (source
      `background.jpg` not copied)
- [ ] Selects: Hour 1–12, Min 05–55 (step 5), AM/PM AM|PM — `appearance:
    none` + arrow glyph (rotated `➜`/ChevronDown, `#101113`, 14px, 32×32)
      at `right 0 bottom 6px`
- [ ] "Book Now" button: solid `#ffc001` bg, dark `#101113` uppercase 700
      text, height 50px, full width, radius 3px; validates required fields
      and shows a summary line / validation messages
- [ ] Mobile (<576px): Name/Email stack; date+time row wraps full width;
      button stays full width
- [ ] Placeholder images via `picsum.photos/seed/drivly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
