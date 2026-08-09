# Template: Sleeply (Booking Forms / Hotel Reservation Form)

## Purpose

Sleeply is a single-page hotel reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V7" website template
(source: https://colorlib.com/wp/template/colorlib-booking-7/), built under a
DIFFERENT name (Sleeply — "sleep", a night's stay / repose, plus the friendly
"-ly" suffix, matching the Booking Forms family convention: Reservly, Coastly,
Roomzy, Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly,
Skyly, Bookly, Nestly, Drivly, Wingly, Restly; re-branded) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-7/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-skyly / template-stayly / template-roostly / template-roomzy /
> template-reservly / template-ridely / template-triply / template-innly /
> template-lodgely / template-hostly / template-guestly / template-coastly /
> template-bookly / template-nestly / template-drivly / template-wingly /
> template-restly preps — the `preview.colorlib.com/assets/js/products.js`
> product map only covers new Astro-era templates). The LIVE PREVIEW button
> on the ColorLib template page resolves to
> `https://colorlib.com/etc/bforms/<slug>/` for the whole family. **The live
> demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-7/` (HTTP 200, ~6.1 KB
> HTML + `css/style.css` ~2.4 KB + `css/bootstrap.min.css`), the background
> photo (`img/background.jpg`, 1920×1080, fetched) was viewed, and the
> TEMPLATES.md screenshot (`colorlib-booking-7.jpg`, 1200×972, viewed in
> browser) matches the live render 1:1.** NOTE: this is the WHITE-CARD
> variant with a NAVY-BLUE `#184c8f` accent, LIGHT-GRAY `#f2f1f1` fields,
> Montserrat typography and labels BELOW the fields (with a small
> field-gray connector triangle) — do NOT confuse it with Restly (Booking 6,
> the closest sibling: NO card, translucent-white fields directly on the
> photo, sharp 0-radius, copper-brown `#8c5d28`, Imprima + Cantata One,
> centered serif headline) or Coastly (Booking 2: dark `#1a1e24` fields +
> lime `#72b01d`, left CTA column "Book Now!") or Wingly (Booking 5: dark
> translucent `rgba(0,0,0,0.7)` card + red `#f23e3e`, PT Sans pills, flight
> field set). Sleeply is the solid-white-card sibling with a DAYTIME city
> skyline photo, navy labels + button, and NO headline.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V7" — free HOTEL /
  reservation (Destination, Guests, Children, Check In, Check out)
  booking-form widget template, Bootstrap-based (Booking Forms category, 22
  templates in the family). Internal demo doc title: "Booking Form HTML
  Template". The recreation brands itself **Sleeply** but keeps the same
  section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-7/` (HTTP 200, ~6.1 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row` containing `.booking-form` (the
  form card):
  - `#booking` — **full-bleed PHOTO page background**:
    `background-image: url('../img/background.jpg'); background-size: cover;
background-position: center;` (the photo is a **DAYTIME CITY SKYLINE** —
    NYC-style skyscrapers in beige/brown/grey tones under a bright blue sky
    with soft wispy clouds, fading to the horizon; 1920×1080), with
    `font-family: 'Montserrat', sans-serif; font-weight: 300`.
    **NO scrim** — the solid WHITE form card provides its own contrast.
  - `.booking-form` — **solid WHITE CARD**: `background: #fff; padding:
30px 15px 0px; border-radius: 4px; overflow: auto;`. `<form>` contents,
    in order (bare `col-md-*` divs are direct children of `<form>` — no
    explicit `.row` wrappers; Bootstrap floats wrap them at 12 columns):
    1. Row (`col-md-8` + `col-md-2` + `col-md-2`): **Destination** (text
       input, placeholder "Enter Address, zip, city or airport") ·
       **Guests** (select, options 1/2/3, `.select-arrow`) · **Children**
       (select, options 0/1/2, `.select-arrow`).
    2. Row (`col-md-4` + `col-md-4` + `col-md-4`): **Check In** (date input,
       `required`) · **Check out** (date input, `required`) · `.form-btn`
       holding **button.submit-btn "Check availability"**.
  - Each field is `.form-group` — `position: relative; margin-bottom: 30px`.
    Inside, in DOM order: the control (`input.form-control` /
    `select.form-control`) FIRST, then `<span class="form-label">` (the
    label) — so the label renders BELOW the field; selects also carry
    `<span class="select-arrow">`.
  - **NO headline** (unlike Booking 6/Restly — no `.booking-cta`, no h1 in
    the document), **NO navbar, NO footer, NO other content sections** — a
    one-section form demo (page ends with only the gtag GA script). **NO
    custom media query in the source CSS** — the ≤768px responsive behavior
    comes entirely from Bootstrap's `col-md-*` grid (the 8/2/2 and 4/4/4
    rows collapse to full-width stacked fields).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with a full-bleed
     cover/center PHOTO background (DAYTIME city skyline — blue sky, wispy
     clouds, beige/grey skyscrapers); content vertically centered via
     `.section-center`.
  2. `.booking-form` — solid WHITE card (radius 4px, padding 30px 15px 0):
     Destination (8/12) + Guests (2/12) + Children (2/12) in row 1; Check
     In (4/12) + Check out (4/12) + "Check availability" button (4/12) in
     row 2.
  3. No footer, no headline, no other content sections (single-section
     demo).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-7.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** clean hotel-booking widget
  over a daytime metropolis photograph (bright blue sky with wispy clouds,
  dense beige/grey skyline fading into the horizon). Centered: a large solid
  WHITE card with slightly rounded corners holding a tight two-row grid of
  LIGHT-GRAY fields (each ~65px tall, rounded 4px, no borders): a wide
  Destination field with the small placeholder "Enter Address, zip, city or
  airport", a Guests select showing "1" and a Children select showing "0"
  (each with a subtle right-edge arrow), then Check In and Check out date
  fields and, on the right of that row, a tall solid NAVY-BLUE
  **"CHECK AVAILABILITY"** button with white uppercase text (the button is
  TALLER than the fields — 90px vs 65px). Small NAVY-BLUE uppercase labels
  (Destination, Guests, Children, Check In, Check out) sit BELOW each field,
  each with a tiny field-gray connector triangle pointing down at the label.
  The ONLY brand accent is navy-blue `#184c8f` (labels + button); fields are
  solid light-gray `#f2f1f1` with near-black `#090a0b` text. Clean,
  business-like hotel widget. (Pixel-verified: label-zone colors are
  `#f2f1f1` field gray, `#184c8f` navy labels/button, `#fff` card.)
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **navy-blue `#184c8f`** — used for the `.form-label` text
    AND the "Check availability" submit button background (button text
    `#fff`). The ONLY accent color.
  - Section: **100vh**, `background-image: url('../img/background.jpg')`
    (daytime city skyline), `background-size: cover; background-position:
center`, `font-family: 'Montserrat', sans-serif; font-weight: 300`.
    `.section-center`: absolute `top: 50%; transform: translateY(-50%);
left: 0; right: 0`. NO scrim.
  - Card (`.booking-form`): **`background: #fff`** (solid white),
    `padding: 30px 15px 0px`, **`border-radius: 4px`**, `overflow: auto`.
  - Fields (`.form-control`): **`background: #f2f1f1`** (solid light gray),
    `border: none`, `box-shadow: none`, **`height: 65px`**,
    **`font-size: 24px`**, `color: #090a0b`, `font-weight: 300`,
    **`border-radius: 4px`**. Placeholder / empty-date color:
    **`#b1b6bd`** (via `::placeholder` and
    `input[type="date"].form-control:invalid`).
  - Labels (`.form-label`): **`color: #184c8f`** (navy), `display: block`,
    `font-weight: 600`, `height: 25px; line-height: 25px`,
    `font-size: 16px`, `position: relative`, **`margin-top: 10px`**,
    `text-transform: uppercase` — a block label BELOW the field (10px gap).
    `.form-label:after` — connector triangle: `content: ''; position:
absolute; left: 10px; top: -10px; width: 0; height: 0; border-style:
solid; border-width: 10px 10px 0 10px; border-color: #f2f1f1 transparent
transparent transparent;` — a 10px **field-gray `#f2f1f1` triangle
    pointing DOWN** (base at top) bridging the gap between the field's
    bottom edge and the label.
  - Selects: `select.form-control { -webkit-appearance: none; appearance:
none; }`. `.select-arrow` — **`position: absolute; right: 0px; top:
0px; width: 24px; height: 65px; line-height: 65px; text-align: center;
pointer-events: none; color: #b1b6bd; font-size: 14px`** (a plain
    right-edge arrow zone spanning the field height — NO background strip);
    `::after` content `'\279C'` (➜ U+279C) `transform: rotate(90deg)`.
  - Submit (`.submit-btn`): `background: #184c8f; border: none;
font-weight: 600; text-transform: uppercase; height: 90px;
border-radius: 4px; font-size: 18px; width: 100%; color: #fff; display:
block`. **90px tall** — taller than the 65px fields (it stretches its
    row). NO hover rule in the source CSS (do not invent one).
  - Fonts: **'Montserrat', sans-serif** (weights 300 + 600 — both loaded on
    Google Fonts). The source loads only these two weights; the button and
    labels use 600, the base/fields use 300.
  - Radius family: **4px** (fields, card, button). NO shadows anywhere
    (`box-shadow: none` on fields; card has none).
  - Grid rhythm: fields 65px tall; `.form-group` margin-bottom 30px; labels
    25px tall with 10px top margin; button 90px; rows 8/2/2 and 4/4/4.
  - Responsive: Bootstrap `col-md-8/col-md-2/col-md-4` grid — below 768px
    all rows collapse to full-width stacked fields; the button stays full
    width.
- **KEY DIFFERENCES vs Restly (Booking 6) — the closest sibling, do NOT
  merge:** Restly = NO card (translucent-white fields ARE the card, sharp
  0-radius rectangles directly over the photo), copper-brown `#8c5d28`
  labels+button, Imprima + Cantata One, centered 52px serif h1 "Make Your
  Reservation", labels INSET at the field's top edge, 80px fields, 28px
  serif field text. Sleeply = solid WHITE CARD (radius 4px, padding 30px
  15px 0), solid LIGHT-GRAY `#f2f1f1` fields (65px, 24px `#090a0b`
  weight-300 text, radius 4px), NAVY `#184c8f` labels + button (button 90px
  tall), Montserrat (300/600), NO headline, labels BELOW the fields with a
  field-gray connector triangle. Also the select arrow strip differs:
  Restly = full-height `rgba(255,255,255,0.3)` bar; Sleeply = plain
  `#b1b6bd` 24px-wide arrow zone with NO background.
- **KEY DIFFERENCES vs Coastly (Booking 2) / Wingly (Booking 5) — do NOT
  merge:** Coastly = dark `#1a1e24` fields, lime `#72b01d`, left CTA column
  ("Book Now!" 58px uppercase) + right form, 100px fields, separators.
  Wingly = dark translucent `rgba(0,0,0,0.7)` card, red `#f23e3e`, PT Sans,
  white PILL fields (radius 40px), static labels ABOVE fields, flight field
  set, no headline. Sleeply = white card, light-gray fields, navy `#184c8f`,
  hotel field set, labels below fields, no headline.
- **Family palette check (2026-08-09):** navy `#184c8f` joins the family
  blue members — Skyly `#4fa3e3` (light blue) and Stayly `#6499ff` (medium
  blue) — as a distinctly DARK navy; keep `#184c8f` exact. Other family
  accents: Roomzy `#f14634`, Ridely `#ffc600`, Coastly `#72b01d`, Guestly
  `#ff9000`, Roostly `#ff0063`, Innly `#c99552`, Lodgely `#6c8f18`, Bookly
  `#2b9328`, Drivly `#ffc001`, Wingly `#f23e3e`, Nestly `#9a8067`, Hostly
  `#856849`, Restly `#8c5d28`. (Family mapping verified from each spec:
  1→Reservly, 2→Coastly, 3→Nestly, 4→Drivly, 5→Wingly, 6→Restly, 7→**Sleeply**
  (this prep), 8/9 still un-prepped, 10→Roomzy, 11→Roostly, 12→Stayly,
  13→Ridely, 14→Triply, 15→Innly, 16→Lodgely, 17→Hostly, 18→Guestly,
  19→Skyly, 20→Bookly.)
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the page background uses a
  seeded picsum placeholder (`picsum.photos/seed/sleeply-1/1920/1080`; the
  source `background.jpg` daytime cityscape must not be copied) with
  `cover`/`center` and NO scrim (the solid white card provides its own
  contrast — the photo stays fully visible around the card); date inputs are
  native `<input type="date">` styled with Tailwind (no datepicker
  dependency); Guests/Children are native `<select>`s with `appearance:
none` + a plain right-edge arrow zone (24px wide, 65px tall, `#b1b6bd`
  rotated `➜` U+279C glyph or lucide ChevronDown at 14px, pointer-events
  none, NO background strip — NOT Restly's translucent bar, NOT Wingly's
  floating 32×32 glyph); labels are real `<label htmlFor>` elements as
  BLOCK elements BELOW each field (`margin-top: 10px`, navy `#184c8f`,
  16px, weight 600, uppercase, 25px line-height) with the small field-gray
  `#f2f1f1` connector triangle (10px border trick, pointing down, left 10px)
  bridging the gap; fields keep the source's `#f2f1f1` 65px / 24px
  `#090a0b` weight-300 text, radius 4px, borderless, shadowless; body in
  Montserrat (300/600) via Google Fonts `<link>` in `index.html`; document
  title "Sleeply — Hotel Booking Template"; brand "Booking"/"Colorlib
  Booking" → "Sleeply" everywhere. The "Check availability" button validates
  the form (destination, check-in, check-out required; guests/children
  defaulted) and reveals a summary line (destination, guests/children,
  dates) — the original demo is static, so this minimal interactive behavior
  is a documented recreation choice, kept in a pure exported function for
  100%-coverage tests. Source copy kept verbatim: "Check In" (capital I),
  "Check out" (lowercase o), placeholder "Enter Address, zip, city or
  airport".

Sleeply lives in `apps/sleeply` (package `@free-react-templates/sleeply`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport reservation section with photo background

The system SHALL render a full-viewport (100vh) reservation section with a
full-bleed cover/center-positioned photograph as the page background,
vertically centering the white form card. The page SHALL NOT render any
navbar, hero chrome, headline, or footer (single-section form demo).

#### Scenario: Full-viewport section with photo background

- **GIVEN** the Sleeply page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed photograph
  (`picsum.photos/seed/sleeply-1/1920/1080`) as its background,
  cover-positioned and centered
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar, hero chrome, headline,
  or a footer

### Requirement: Solid white form card

The system SHALL render the form inside a solid white card with 4px rounded
corners, 30px top / 15px side padding, and no shadow, holding a two-row grid
of fields.

#### Scenario: Card styling

- **GIVEN** the Sleeply page is rendered
- **WHEN** the form is displayed
- **THEN** the form SHALL be contained in a solid white (`#fff`) card
- **AND** the card SHALL have a 4px corner radius, 30px top and 15px side
  padding, and no border or shadow

### Requirement: Light-gray form fields

The system SHALL render every field as a solid light-gray `#f2f1f1`
rectangle — 65px tall, 4px radius, no border, no shadow — with near-black
`#090a0b` 24px weight-300 text.

#### Scenario: Field styling

- **GIVEN** the Sleeply page is rendered
- **WHEN** the form fields are displayed
- **THEN** every field SHALL have a solid light-gray `#f2f1f1` background,
  65px height, 4px corner radius, no border, and no box-shadow
- **AND** every field SHALL show its value in near-black `#090a0b` at 24px,
  weight 300

#### Scenario: Placeholder color

- **GIVEN** the Sleeply page is rendered
- **WHEN** a field is empty
- **THEN** its placeholder text (and an empty date field's value) SHALL
  render at `#b1b6bd`

### Requirement: Navy labels below the fields

The system SHALL render a navy-blue `#184c8f` uppercase label BELOW each
field (block element, 10px top margin, 16px, weight 600, 25px line-height),
with a small field-gray `#f2f1f1` connector triangle pointing down from the
field's bottom edge toward the label.

#### Scenario: Label position and styling

- **GIVEN** any field of the form is displayed
- **WHEN** the field is empty, focused, or has a value
- **THEN** its label SHALL sit BELOW the field (10px gap), never inside or
  above it
- **AND** the label SHALL be navy-blue `#184c8f`, uppercase, 16px, weight
  600, with 25px line-height
- **AND** the label SHALL be a real `<label>` associated with the control
  via `htmlFor`/`id`

#### Scenario: Connector triangle

- **GIVEN** any field of the form is displayed
- **WHEN** the label is rendered
- **THEN** a small triangle SHALL bridge the gap between the field's bottom
  edge and the label, at 10px from the left
- **AND** the triangle SHALL be field-gray `#f2f1f1` (10px border trick,
  pointing DOWN — base at the top against the field, apex toward the label)

### Requirement: Destination field

The system SHALL render the Destination text input as the widest field of the
first row (8/12), with placeholder "Enter Address, zip, city or airport".

#### Scenario: Destination field content

- **GIVEN** the Sleeply page is rendered
- **WHEN** the form is displayed
- **THEN** a text input labelled "Destination" SHALL be shown, occupying 8
  of 12 columns in the first row
- **AND** the input SHALL show the placeholder "Enter Address, zip, city or
  airport"

### Requirement: Guests and Children selects

The system SHALL render Guests (options 1, 2, 3) and Children (options 0, 1, 2) as selects in the first row (2/12 each), with native appearance removed
and a plain right-edge arrow zone on each.

#### Scenario: Select options and layout

- **GIVEN** the Sleeply page is rendered
- **WHEN** the form is displayed
- **THEN** a select labelled "Guests" SHALL be shown with options 1, 2, 3
- **AND** a select labelled "Children" SHALL be shown with options 0, 1, 2
- **AND** Guests and Children SHALL each occupy 2 of 12 columns, to the
  right of Destination

### Requirement: Check-in and check-out date fields

The system SHALL render Check In and Check out as required native date
inputs in the second row, each occupying 4 of 12 columns.

#### Scenario: Date fields

- **GIVEN** the Sleeply page is rendered
- **WHEN** the form is displayed
- **THEN** a date input labelled "Check In" SHALL be shown, marked required
- **AND** a date input labelled "Check out" SHALL be shown, marked required
- **AND** the two date fields SHALL sit side by side on ≥768px, each
  occupying 4 of 12 columns

### Requirement: "Check availability" submit button

The system SHALL render a full-width (4/12 slot) navy-blue "Check
availability" button with white uppercase 18px weight-600 text, 90px height
(taller than the 65px fields), 4px corners, and no hover rule (matching the
source CSS). The button SHALL validate required fields and show a summary.

#### Scenario: Button styling

- **GIVEN** the Sleeply page is rendered
- **WHEN** the form is displayed
- **THEN** a button reading "Check availability" SHALL be shown, occupying 4
  of 12 columns in the second row
- **AND** the button SHALL have a navy-blue `#184c8f` background with white
  uppercase 18px weight-600 text, 90px height, and 4px corners
- **AND** the button SHALL be taller than the adjacent 65px fields
- **AND** the button SHALL have no hover/focus style change (the source CSS
  defines none)

#### Scenario: Submit with valid input

- **GIVEN** the user has filled Destination, Check In, and Check out
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the destination, guest
  counts and dates (e.g. "Downtown Dubai · 2 guests, 1 child · Aug 10 –
  Aug 14, 2026")
- **AND** the summary SHALL be styled with the navy-blue `#184c8f` brand
  color or on a navy-tinted background

#### Scenario: Submit with missing required fields

- **GIVEN** the Sleeply page is rendered
- **WHEN** the user clicks "Check availability" with Destination, Check In,
  or Check out empty
- **THEN** the form SHALL show validation messages for the invalid fields
- **AND** no summary SHALL be shown

### Requirement: Select arrow zones

The system SHALL render Guests and Children as selects with native appearance
removed and a plain right-edge arrow zone on each field — 24px wide, full
65px field height, `#b1b6bd` rotated `➜` (U+279C) glyph or ChevronDown at
14px, with NO background strip.

#### Scenario: Selects with right-edge arrow zone

- **GIVEN** the Sleeply page is rendered
- **WHEN** the form is displayed
- **THEN** both selects SHALL hide their native appearance
  (`appearance: none`)
- **AND** an arrow zone SHALL sit at the right edge of each select, 24px
  wide and spanning the field's full 65px height
- **AND** the zone SHALL show a rotated `➜` (U+279C) glyph or ChevronDown in
  `#b1b6bd` at 14px, without capturing pointer events
- **AND** the zone SHALL have no background strip (plain — NOT Restly's
  `rgba(255,255,255,0.3)` bar)

### Requirement: Mobile stacking

The system SHALL collapse the side-by-side field rows to stacked full-width
fields on small screens, matching the source's Bootstrap `col-md-*` behavior.

#### Scenario: Stacked below 768px

- **GIVEN** the Sleeply page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** Destination, Guests, and Children SHALL stack vertically, each
  taking full width (source `col-md-8`/`col-md-2` behavior)
- **AND** Check In, Check out, and the "Check availability" button SHALL
  stack vertically, each taking full width (source `col-md-4` behavior)
- **AND** the button SHALL remain full width

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-sleeply`
- [ ] `scripts/verify-app.sh sleeply` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with full-bleed cover/center
      PHOTO page background (seeded picsum `sleeply-1/1920/1080`, NO scrim —
      photo visible around the card) → vertically centered `.booking-form`
      solid WHITE card (radius 4px, padding 30px 15px 0) → field grid row 1
      (Destination 8/12 + Guests 2/12 + Children 2/12) → row 2 (Check In
      4/12 + Check out 4/12 + "Check availability" 4/12); NO headline, NO
      navbar, NO hero chrome, NO footer (single-section demo)
- [ ] Brand color `#184c8f` (navy-blue — labels + "Check availability"
      button background) in `@theme` and used via Tailwind classes
- [ ] Fields: solid `#f2f1f1` background; 65px height; 4px radius;
      borderless; shadowless; `#090a0b` 24px weight-300 text;
      placeholder/empty-date `#b1b6bd`
- [ ] Labels: real `<label htmlFor>` as BLOCK elements BELOW each field
      (10px top margin, never inside/above), `#184c8f`, uppercase, 16px,
      weight 600, 25px line-height, with the 10px `#f2f1f1` connector
      triangle pointing DOWN (base at top, left 10px)
- [ ] Montserrat (300 + 600) via Google Fonts `<link>` in `index.html`
- [ ] Page background = seeded picsum (`sleeply-1/1920/1080`) cover/center
      full-bleed WITHOUT a separate overlay scrim (source `background.jpg`
      daytime cityscape not copied)
- [ ] Selects: Guests 1–3, Children 0–2 — `appearance: none` + plain
      right-edge arrow zone (24px wide × 65px tall, `#b1b6bd` rotated
      `➜`/ChevronDown at 14px, pointer-events-none, NO background strip)
- [ ] "Check availability" button: solid `#184c8f` bg, white uppercase 18px
      weight-600 text, height 90px (taller than fields), full width of its
      4/12 slot, 4px corners, NO hover rule; validates required fields
      (destination/check-in/check-out) and shows a summary line / validation
      messages
- [ ] Source copy kept verbatim: "Check In" (capital I), "Check out"
      (lowercase o), placeholder "Enter Address, zip, city or airport"
- [ ] Mobile (<768px): 8/2/2 row stacks full width; 4/4/4 row stacks full
      width; button stays full width
- [ ] Grid rhythm: fields 65px tall, `.form-group` 30px bottom margin,
      labels 25px tall with 10px top margin, button 90px, rows 8/2/2 and
      4/4/4; radius family 4px; no shadows anywhere
- [ ] Placeholder images via `picsum.photos/seed/sleeply-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
