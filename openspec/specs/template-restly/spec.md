# Template: Restly (Booking Forms / Hotel Reservation Form)

## Purpose

Restly is a single-page hotel reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V6" website template
(source: https://colorlib.com/wp/template/colorlib-booking-6/), built under a
DIFFERENT name (Restly — "rest", a night's stay / repose, plus the friendly
"-ly" suffix, matching the Booking Forms family convention: Reservly, Coastly,
Roomzy, Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly,
Skyly, Bookly, Nestly, Drivly, Wingly; re-branded) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack: Vite

- React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-6/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-skyly / template-stayly / template-roostly / template-roomzy /
> template-reservly / template-ridely / template-triply / template-innly /
> template-lodgely / template-hostly / template-guestly / template-coastly /
> template-bookly / template-nestly / template-drivly / template-wingly preps
> — the `preview.colorlib.com/assets/js/products.js` product map only covers
> new Astro-era templates). The LIVE PREVIEW button on the ColorLib template
> page resolves to `https://colorlib.com/etc/bforms/<slug>/` for the whole
> family. **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-6/` (HTTP 200, ~4.6 KB
> HTML + `css/style.css` ~2.7 KB + `css/bootstrap.min.css`), the background
> photo (`img/background.jpg`, 1920×1080, fetched) was viewed, and the
> TEMPLATES.md screenshot (`colorlib-booking-6.jpg`, 1200×972, viewed in
> browser) matches the live render 1:1.** NOTE: this is the NO-CARD
> TRANSLUCENT-WHITE-FIELDS variant with a COPPER-BROWN `#8c5d28` accent and a
> CENTERED serif headline — do NOT confuse it with Coastly (Booking 2, the
> closest sibling: dark `#1a1e24` fields + lime `#72b01d`, Montserrat, left
> CTA column) or Wingly (Booking 5, dark translucent `rgba(0,0,0,0.7)` card +
> red `#f23e3e`, PT Sans pills). It is the light-field, no-card sibling of
> Coastly in structure (fields ARE the card, sharp 0-radius rectangles
> floating directly over the photo) — but LIGHT (`rgba(255,255,255,0.85)`
> fields, dark `#333` text) with a copper-brown `#8c5d28` label+button brand
> and Imprima + Cantata One typography.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V6" — free HOTEL /
  reservation ("Make Your Reservation", Check In / Check out, Guests,
  Children) booking-form widget template, Bootstrap-based (Booking Forms
  category, 22 templates in the family). Internal demo doc title: "Booking
  Form HTML Template". The recreation brands itself **Restly** but keeps the
  same section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-6/` (HTTP 200, ~4.6 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row` containing `.booking-cta` (the
  headline) and `.booking-form` (the form):
  - `#booking` — **full-bleed PHOTO page background**:
    `background-image: url('../img/background.jpg'); background-size: cover;
background-position: center;` (the photo is a **NIGHT CITYSCAPE** —
    dense skyscrapers lit with thousands of warm golden window lights, dark
    blue/black sky; a distinctive twisted tower on the right resembles the
    Cayan Tower, Dubai; 1920×1080), with `font-family: 'Imprima', sans-serif`.
    **NO card, NO overlay scrim** — the individual translucent-white FIELDS
    themselves float directly over the photo (the fields ARE the card).
  - `.booking-cta` — **centered headline** (text-align center, margin-bottom
    30px): `h1` **"Make Your Reservation"** — `font-family: 'Cantata One',
serif; color: #fff; margin: 0; font-size: 52px; font-weight: 700`
    (synthetic bold — only weight 400 is loaded).
  - `.booking-form` — NO background, NO padding, NO border/shadow (transparent
    wrapper; the fields provide all visual structure). `<form>` contents, in
    order (no explicit `.row` wrappers — bare `col-md-*` divs float/wrap at
    12 columns):
    1. Row (`col-md-8` + `col-md-2` + `col-md-2`): **Destination** (text
       input, placeholder "Enter Address, zip, city or airport") ·
       **Guests** (select, options 1/2/3, `.select-arrow`) · **Children**
       (select, options 0/1/2, `.select-arrow`).
    2. Row (`col-md-4` + `col-md-4` + `col-md-4`): **Check In** (date input,
       `required`) · **Check out** (date input, `required`) · `.form-btn`
       holding **button.submit-btn "Check availability"**.
  - Each field is `.form-group` — `position: relative; height: 80px;
margin-bottom: 10px; margin-right: -10px; margin-left: -10px` (the
    negative side margins tighten the Bootstrap 15px column gutters to a
    10px gap between adjacent fields). Inside: `<span class="form-label">`
    (the label) + the control; selects also carry `<span class="select-arrow">`.
  - NO navbar, NO footer, NO other content sections — a one-section form demo
    (page ends with only the gtag GA script). **NO custom media query in the
    source CSS** — the ≤768px responsive behavior comes entirely from
    Bootstrap's `col-md-*` grid (the 8/2/2 and 4/4/4 rows collapse to
    full-width stacked fields).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with a full-bleed
     cover/center PHOTO background (NIGHT CITYSCAPE — Dubai-style skyline,
     warm window lights); content vertically centered via `.section-center`.
  2. `.booking-cta` — centered serif h1 "Make Your Reservation" (white,
     52px, Cantata One).
  3. `.booking-form` — NO card: translucent-white fields directly on the
     photo — Destination (8/12) + Guests (2/12) + Children (2/12) in row 1;
     Check In (4/12) + Check out (4/12) + "Check availability" button (4/12)
     in row 2.
  4. No footer, no other content sections (single-section demo).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-6.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** high-end hotel booking
  aesthetic over a night-time metropolis photograph (dense skyline of lit
  skyscrapers, dark blue/black sky, warm golden window light). Centered at
  the top of the form area: "Make Your Reservation" in a large white serif,
  centered. Below it, a tight two-row grid of SHARP-cornered (0-radius)
  semi-transparent WHITE rectangles (each ~80px tall) floating directly over
  the photo — a wide Destination field with a small placeholder
  "Enter Address, zip, city or airport", a Guests select showing "1" and a
  Children select showing "0" (each with a subtle right-edge arrow strip),
  then Check In and Check out date fields and, on the right of that row, a
  solid copper-brown rectangular **"CHECK AVAILABILITY"** button with white
  uppercase text. Small COPPER-BROWN labels (Destination, Guests, Children,
  Check In, Check out) sit INSIDE the top-left of each field. The ONLY brand
  accent is copper-brown `#8c5d28` (labels + button); fields are translucent
  white with dark `#333` serif text. Clean, upscale, urban-hotel widget.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **copper-brown `#8c5d28`** — used for the `.form-label`
    text AND the "Check availability" submit button background (button text
    `#fff`). The ONLY accent color.
  - Section: **100vh**, `background-image: url('../img/background.jpg')`
    (night cityscape), `background-size: cover; background-position: center`,
    `font-family: 'Imprima', sans-serif`. `.section-center`: absolute
    `top: 50%; transform: translateY(-50%); left: 0; right: 0`.
  - Headline (`.booking-cta h1`): **'Cantata One', serif**, `color: #fff`,
    `font-size: 52px`, `font-weight: 700` (synthetic — only weight 400
    loaded), `margin: 0`; `.booking-cta { text-align: center;
margin-bottom: 30px }`.
  - Fields (`.form-control`): **`background: rgba(255, 255, 255, 0.85)`**
    (translucent white), focus → **`rgba(255, 255, 255, 1)`** (solid);
    **`border-radius: 0px`** (SHARP square), `border: none`, `box-shadow:
none`, **`height: 80px`**, **`font-family: 'Cantata One', serif`**,
    **`font-size: 28px`**, `color: #333`, `font-weight: 600` (synthetic),
    **`padding-top: 30px`** (control text sits below the inset label),
    `transition: 0.2s background`. Placeholder / empty-date color:
    **`rgba(51, 51, 51, 0.3)`** (30% grey — via `::placeholder` and
    `input[type="date"].form-control:invalid`).
  - Labels (`.form-label`): **`color: #8c5d28`** (copper-brown), `display:
block`, `font-weight: 700`, `height: 30px; line-height: 30px`,
    `font-size: 14px`, `letter-spacing: 0.6px`, **`position: absolute;
left: 10px; top: 0px`** — INSET at the field's top edge (fixed; does NOT
    float, does NOT move on focus/empty).
  - Selects: `select.form-control { -webkit-appearance: none; appearance:
none; }`. `.select-arrow` — **`position: absolute; right: 0px;
bottom: 0px; width: 24px; height: 80px; line-height: 80px; text-align:
center; pointer-events: none; background: rgba(255, 255, 255, 0.3)`**
    (a FULL-HEIGHT 80px translucent-white strip at the field's right edge);
    `::after` content `'\279C'` (➜ U+279C) `transform: rotate(90deg)`,
    `color: #333; font-size: 14px`.
  - Submit (`.submit-btn`): `background: #8c5d28; border: none;
font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px;
height: 80px; border-radius: 0px; font-size: 18px; width: 100%;
color: #fff`. NO hover rule in the source CSS (unlike Wingly's opacity
    fade — do not invent one).
  - Fonts: **'Imprima', sans-serif** (section/base) + **'Cantata One',
    serif** (headline + field text). Both are single-weight families on
    Google Fonts (only 400 exists); the 600/700 weights in the CSS are
    browser-synthesized. Google Fonts link: `family=Imprima&family=Cantata+One`.
  - Radius family: **0px everywhere** (sharp rectangles). NO shadows
    anywhere (fields have `box-shadow: none`; no card exists).
  - Grid rhythm: fields 80px tall; 10px vertical gap (margin-bottom 10px);
    ~10px horizontal gap between fields (col 15px padding − 10px negative
    margin = 5px each side); rows are 8/2/2 and 4/4/4.
  - Responsive: Bootstrap `col-md-8/col-md-2/col-md-4` grid — below 768px
    all rows collapse to full-width stacked fields; the button stays full
    width.
- **KEY DIFFERENCES vs Coastly (Booking 2) — the closest sibling, do NOT
  merge:** both are NO-CARD designs (fields ARE the card, sharp 0-radius
  rectangles directly over the photo) with a "Check availability" button.
  Coastly = DARK: fields `#1a1e24` (near-black), white labels + white field
  text, Montserrat (400/700), lime-green `#72b01d` button, LEFT CTA column
  with "Book Now!" h1 (58px uppercase) + RIGHT form (7/12 offset),
  100px-tall fields, 1px `rgba(243,239,245,0.33)` separators between
  columns, photo washed out by a light scrim. Restly = LIGHT: translucent
  WHITE fields `rgba(255,255,255,0.85)` (→ solid on focus), COPPER-BROWN
  `#8c5d28` labels + button, dark `#333` serif field text, Imprima +
  Cantata One, CENTERED 52px serif h1 "Make Your Reservation" above a
  FULL-WIDTH form (8/2/2 → 4/4/4), 80px-tall fields, NO separators, photo
  fully visible (no scrim).
- **KEY DIFFERENCES vs Wingly (Booking 5) — do NOT merge:** Wingly = dark
  translucent `rgba(0,0,0,0.7)` CARD (full width), red `#f23e3e` accent, PT
  Sans, white PILL fields (radius 40px, borderless), static white uppercase
  labels ABOVE the fields, flight field set (Roundtrip/One way/Multi-City,
  Flying from/to, Departing/Returning, Adults/Children, Travel class), no
  headline. Restly = NO card, translucent WHITE fields (radius 0), copper
  brown `#8c5d28`, inset brown labels, hotel field set (Destination, Guests,
  Children, Check In, Check out), centered serif h1 "Make Your Reservation".
- **Family palette check (2026-08-09):** copper-brown `#8c5d28` is the
  brown-family member alongside Nestly's taupe `#9a8067` and Hostly's dark
  taupe `#856849` — all three are DISTINCT browns; keep `#8c5d28` exact.
  Other family accents: Roomzy `#f14634` (coral-red), Ridely `#ffc600`,
  Skyly `#4fa3e3`, Coastly `#72b01d`, Guestly `#ff9000`, Roostly `#ff0063`,
  Stayly `#6499ff`, Innly `#c99552`, Lodgely `#6c8f18`, Bookly `#2b9328`,
  Drivly `#ffc001`, Wingly `#f23e3e`. (Family mapping verified from each
  spec: 1→Reservly, 2→Coastly, 3→Nestly, 4→Drivly, 5→Wingly, 10→Roomzy,
  11→Roostly, 12→Stayly, 13→Ridely, 14→Triply, 15→Innly, 16→Lodgely,
  17→Hostly, 18→Guestly, 19→Skyly, 20→Bookly; 6→**Restly**, 7/8/9 still
  un-prepped. NOTE: the Wingly spec's "Roomzy (Booking 15)" is a typo —
  Roomzy is Booking 10.)
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the page background uses a
  seeded picsum placeholder (`picsum.photos/seed/restly-metropolis/1920/1080`;
  NOTE 2026-08-11: the prep-pinned seed `restly-1` was verified to render an
  auditorium interior, not a cityscape — seed `restly-metropolis` (picsum
  id/1078, a night high-rise facade densely lit with warm windows) is used
  instead to match the source photo's night-cityscape subject; the source
  `background.jpg` night-cityscape must not be copied) with
  `cover`/`center` and NO scrim (the translucent-white fields provide their
  own contrast — the photo stays fully visible between/around fields); date
  inputs are native `<input type="date">` styled with Tailwind (no
  datepicker dependency); Guests/Children are native `<select>`s with
  `appearance: none` + a FULL-HEIGHT arrow strip at the field's right edge
  (24px wide, 80px tall, `rgba(255,255,255,0.3)` background, rotated `➜`
  U+279C glyph or lucide ChevronDown in `#333` at 14px — NOT Wingly's
  floating 32×32 glyph); labels are real `<label htmlFor>` elements INSET at
  the top edge of each field (`top-0 left-2.5`, copper-brown `#8c5d28`,
  14px, weight 700, letter-spacing 0.6px, 30px line-height — they must sit
  inside the field and NEVER float); fields keep the source's `#333` 28px
  Cantata One weight-600 text with `padding-top` clearance for the label;
  body in Imprima + Cantata One via Google Fonts `<link>` in `index.html`;
  document title "Restly — Hotel Booking Template"; brand
  "Booking"/"Colorlib Booking" → "Restly" everywhere. The "Check
  availability" button validates the form (destination, check-in,
  check-out required; guests/children defaulted) and reveals a summary line
  (destination, guests/children, dates) — the original demo is static, so
  this minimal interactive behavior is a documented recreation choice, kept
  in a pure exported function for 100%-coverage tests. Source copy kept
  verbatim: "Check In" (capital I), "Check out" (lowercase o).

Restly lives in `apps/restly` (package `@free-react-templates/restly`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport reservation section with photo background

The system SHALL render a full-viewport (100vh) reservation section with a
full-bleed cover/center-positioned photograph as the page background,
vertically centering the headline and the booking form. The page SHALL NOT
render any navbar, hero chrome, or footer (single-section form demo).

#### Scenario: Full-viewport section with photo background

- **GIVEN** the Restly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed photograph
  (`picsum.photos/seed/restly-metropolis/1920/1080`) as its background,
  cover-positioned and centered
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar, hero chrome, or a
  footer

### Requirement: Centered reservation headline

The system SHALL render a centered serif headline "Make Your Reservation"
above the form: white, 52px, Cantata One, weight 700, with a 30px bottom
margin.

#### Scenario: Headline content and styling

- **GIVEN** the Restly page is rendered
- **WHEN** the page loads
- **THEN** a level-1 heading reading "Make Your Reservation" SHALL be shown,
  centered above the form
- **AND** the heading SHALL be white, in the Cantata One serif font, at
  52px, weight 700
- **AND** the heading SHALL have a 30px bottom margin

### Requirement: Translucent white fields directly on the photo (no card)

The system SHALL render the form fields as sharp-cornered translucent white
rectangles (background `rgba(255, 255, 255, 0.85)`, solid on focus) floating
directly over the photo — 80px tall, 0px radius, no border, no shadow, dark
`#333` 28px Cantata One text with 30px top padding. There SHALL be no card
wrapper, no scrim, and no field borders.

#### Scenario: Field styling

- **GIVEN** the Restly page is rendered
- **WHEN** the form fields are displayed
- **THEN** every field SHALL have a translucent white background
  `rgba(255, 255, 255, 0.85)`, 80px height, 0px (sharp) corner radius, no
  border, and no box-shadow
- **AND** every field SHALL show its value in dark `#333` at 28px in the
  Cantata One serif font, weight 600
- **AND** the field text SHALL sit below the inset label (30px top padding)
- **AND** a focused field SHALL transition to a solid white background
  `rgba(255, 255, 255, 1)`
- **AND** the page SHALL NOT contain a card wrapper, overlay scrim, or any
  border between or around fields

#### Scenario: Placeholder color

- **GIVEN** the Restly page is rendered
- **WHEN** a field is empty
- **THEN** its placeholder text (and an empty date field's value) SHALL
  render at `rgba(51, 51, 51, 0.3)` (30% grey)

### Requirement: Inset field labels

The system SHALL render a small copper-brown label INSET at the top-left
inside each field (fixed — never floating, never moving on focus or when the
field has a value), in `#8c5d28`, 14px, weight 700, letter-spacing 0.6px,
30px line-height.

#### Scenario: Label position and styling

- **GIVEN** any field of the form is displayed
- **WHEN** the field is empty, focused, or has a value
- **THEN** its label SHALL remain fixed at the top-left inside the field
  (10px from the left, at the field's top edge)
- **AND** the label SHALL be copper-brown `#8c5d28`, 14px, weight 700, with
  0.6px letter-spacing and 30px line-height
- **AND** the label SHALL be a real `<label>` associated with the control
  via `htmlFor`/`id`
- **AND** the label SHALL NOT float, shrink, or change color on focus or
  when the field has a value

### Requirement: Destination field

The system SHALL render the Destination text input as the widest field of the
first row (8/12), with placeholder "Enter Address, zip, city or airport".

#### Scenario: Destination field content

- **GIVEN** the Restly page is rendered
- **WHEN** the form is displayed
- **THEN** a text input labelled "Destination" SHALL be shown, occupying 8
  of 12 columns in the first row
- **AND** the input SHALL show the placeholder "Enter Address, zip, city or
  airport"

### Requirement: Guests and Children selects

The system SHALL render Guests (options 1, 2, 3) and Children (options 0, 1, 2) as selects in the first row (2/12 each), with native appearance removed
and a full-height arrow strip at the right edge of each.

#### Scenario: Select options and layout

- **GIVEN** the Restly page is rendered
- **WHEN** the form is displayed
- **THEN** a select labelled "Guests" SHALL be shown with options 1, 2, 3
- **AND** a select labelled "Children" SHALL be shown with options 0, 1, 2
- **AND** Guests and Children SHALL each occupy 2 of 12 columns, to the
  right of Destination

### Requirement: Check-in and check-out date fields

The system SHALL render Check In and Check out as required native date
inputs in the second row, each occupying 4 of 12 columns.

#### Scenario: Date fields

- **GIVEN** the Restly page is rendered
- **WHEN** the form is displayed
- **THEN** a date input labelled "Check In" SHALL be shown, marked required
- **AND** a date input labelled "Check out" SHALL be shown, marked required
- **AND** the two date fields SHALL sit side by side on ≥768px, each
  occupying 4 of 12 columns

### Requirement: "Check availability" submit button

The system SHALL render a full-width (4/12 slot) copper-brown "Check
availability" button with white uppercase 18px weight-700 text, 0.6px
letter-spacing, 80px height, sharp corners, and no hover rule (matching the
source CSS). The button SHALL validate required fields and show a summary.

#### Scenario: Button styling

- **GIVEN** the Restly page is rendered
- **WHEN** the form is displayed
- **THEN** a button reading "Check availability" SHALL be shown, occupying 4
  of 12 columns in the second row
- **AND** the button SHALL have a copper-brown `#8c5d28` background with
  white uppercase 18px weight-700 text, 0.6px letter-spacing, 80px height,
  and sharp (0px) corners
- **AND** the button SHALL have no hover/focus style change (the source CSS
  defines none)

#### Scenario: Submit with valid input

- **GIVEN** the user has filled Destination, Check In, and Check out
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the destination, guest
  counts and dates (e.g. "Downtown Dubai · 2 guests, 1 child · Aug 10 –
  Aug 14, 2026")
- **AND** the summary SHALL be styled with the copper-brown `#8c5d28` brand
  color or on a copper-tinted background

#### Scenario: Submit with missing required fields

- **GIVEN** the Restly page is rendered
- **WHEN** the user clicks "Check availability" with Destination, Check In,
  or Check out empty
- **THEN** the form SHALL show validation messages for the invalid fields
- **AND** no summary SHALL be shown

### Requirement: Select arrow strips

The system SHALL render Guests and Children as selects with native appearance
removed and a full-height arrow strip at the right edge of each field.

#### Scenario: Selects with full-height arrow strip

- **GIVEN** the Restly page is rendered
- **WHEN** the form is displayed
- **THEN** both selects SHALL hide their native appearance
  (`appearance: none`)
- **AND** an arrow strip SHALL sit at the right edge of each select,
  spanning the field's full 80px height and 24px width, with a
  `rgba(255, 255, 255, 0.3)` background
- **AND** the strip SHALL show a rotated `➜` (U+279C) glyph or ChevronDown
  in `#333` at 14px, without capturing pointer events

### Requirement: Mobile stacking

The system SHALL collapse the side-by-side field rows to stacked full-width
fields on small screens, matching the source's Bootstrap `col-md-*` behavior.

#### Scenario: Stacked below 768px

- **GIVEN** the Restly page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** Destination, Guests, and Children SHALL stack vertically, each
  taking full width (source `col-md-8`/`col-md-2` behavior)
- **AND** Check In, Check out, and the "Check availability" button SHALL
  stack vertically, each taking full width (source `col-md-4` behavior)
- **AND** the button SHALL remain full width

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-restly`
- [ ] `scripts/verify-app.sh restly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with full-bleed cover/center
      PHOTO page background (seeded picsum `restly-metropolis/1920/1080`,
      NO scrim, NO card — photo fully visible) → vertically centered
      `.booking-cta`
      h1 "Make Your Reservation" (Cantata One, white, 52px, centered, 30px
      bottom margin) → field grid row 1 (Destination 8/12 + Guests 2/12 +
      Children 2/12) → row 2 (Check In 4/12 + Check out 4/12 + "Check
      availability" 4/12); NO navbar, NO hero chrome, NO footer
      (single-section demo)
- [ ] Brand color `#8c5d28` (copper-brown — inset labels + "Check
      availability" button background) in `@theme` and used via Tailwind
      classes
- [ ] Fields: `rgba(255,255,255,0.85)` → solid `rgba(255,255,255,1)` on
      focus; 80px height; 0px radius (sharp); borderless; shadowless;
      `#333` 28px Cantata One weight-600 text; 30px top padding;
      placeholder/empty-date `rgba(51,51,51,0.3)`
- [ ] Labels: real `<label htmlFor>` INSET at top-left inside each field
      (fixed, never floating), `#8c5d28`, 14px, weight 700, letter-spacing
      0.6px, 30px line-height
- [ ] Imprima + Cantata One via Google Fonts `<link>` in `index.html`
      (`family=Imprima&family=Cantata+One`); source's 600/700 weights are
      browser-synthesized (both fonts are single-weight)
- [ ] Page background = seeded picsum (`restly-metropolis/1920/1080`,
      corrected 2026-08-11 — prep-pinned `restly-1` renders an auditorium
      interior; `restly-metropolis` = picsum id/1078 night high-rise facade
      with lit windows, matching the source night-cityscape subject)
      cover/center full-bleed WITHOUT a separate overlay scrim (source
      `background.jpg` night cityscape not copied)
- [ ] Selects: Guests 1–3, Children 0–2 — `appearance: none` + FULL-HEIGHT
      arrow strip (24px wide × 80px tall, `rgba(255,255,255,0.3)` bg,
      rotated `➜`/ChevronDown, `#333`, 14px, pointer-events-none) at the
      field's right edge (NOT Wingly's floating 32×32 glyph)
- [ ] "Check availability" button: solid `#8c5d28` bg, white uppercase 18px
      weight-700 text, 0.6px letter-spacing, height 80px, full width of its
      4/12 slot, sharp corners, NO hover rule; validates required fields
      (destination/check-in/check-out) and shows a summary line / validation
      messages
- [ ] Source copy kept verbatim: "Check In" (capital I), "Check out"
      (lowercase o), placeholder "Enter Address, zip, city or airport"
- [ ] Mobile (<768px): 8/2/2 row stacks full width; 4/4/4 row stacks full
      width; button stays full width
- [ ] Grid rhythm: fields 80px tall, ~10px gaps (10px bottom margin +
      −10px side margins against the column gutters), rows 8/2/2 and 4/4/4
- [ ] Placeholder images via `picsum.photos/seed/restly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
