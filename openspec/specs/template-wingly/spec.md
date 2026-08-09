# Template: Wingly (Booking Forms / Airline Flight Booking Widget)

## Purpose

Wingly is a single-page airline flight-booking form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V5" website template
(source: https://colorlib.com/wp/template/colorlib-booking-5/), built under a
DIFFERENT name (Wingly — "wing", the aircraft's wing, plus the friendly "-ly"
suffix, matching the Booking Forms family convention: Reservly, Roomzy,
Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly, Skyly,
Coastly, Bookly, Nestly, Drivly; re-branded) per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite + React
19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-5/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-skyly / template-stayly / template-roostly / template-roomzy /
> template-reservly / template-ridely / template-triply / template-innly /
> template-lodgely / template-hostly / template-guestly / template-coastly /
> template-bookly / template-nestly / template-drivly preps — the
> `preview.colorlib.com/assets/js/products.js` product map only covers new
> Astro-era templates). The LIVE PREVIEW button on the ColorLib template page
> resolves to `https://colorlib.com/etc/bforms/<slug>/` for the whole family.
> **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-5/` (HTTP 200, ~5.6 KB
> HTML + `css/style.css` ~3.4 KB + `css/bootstrap.min.css`), the background
> photo (`img/background.jpg`, 1920×1080, fetched) was viewed, and the
> TEMPLATES.md screenshot (`colorlib-booking-5.jpg`, 1200×972, viewed in
> browser) matches the live render 1:1.** NOTE: this is the DARK TRANSLUCENT
> FLIGHT card variant with a RED accent — do NOT confuse it with Skyly
> (Booking 19, light white flight card, `#4fa3e3` sky blue) or Drivly
> (Booking 4, dark car card, `#ffc001` gold). It is the dark-flight sibling
> of Skyly in structure (same flight field set) — but DARK
> (`rgba(0,0,0,0.7)` translucent card over the photo, NO white card) with
> red `#f23e3e` accents.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V5" — free AIRLINE
  flight-booking form widget template, Bootstrap-based (Booking Forms
  category, 22 templates in the family). Internal demo doc title: "Booking
  Form HTML Template". The recreation brands itself **Wingly** but keeps the
  same section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-5/` (HTTP 200, ~5.6 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row > .booking-form`:
  - `#booking` — **full-bleed PHOTO page background**:
    `background-image: url('../img/background.jpg'); background-size: cover;
background-position: center;` (the photo is an **airplane wing over a
    sea of clouds** — bright sun lens-flaring from the upper right, blue
    sky; 1920×1080), with `font-family: 'PT Sans', sans-serif`. **NO
    separate overlay scrim** — the card itself is translucent dark
    (`rgba(0,0,0,0.7)`) and the photo stays fully visible around it.
  - `.booking-form` — the **DARK TRANSLUCENT CARD**: `background:
rgba(0, 0, 0, 0.7); padding: 40px; border-radius: 6px;` — NO max-width
    (spans the full Bootstrap container width, ~1170px at lg), NO
    box-shadow, NO border. The dark card floats directly over the photo.
  - `<form>` contents, in order:
    1. **Flight-type radio group** (`.form-checkbox`) — custom circular
       radios (input visually hidden, 20×20px white circle, checked →
       10×10px `#f23e3e` red dot): **Roundtrip** (first, no `checked` attr
       in source — visually first option), **One way**, **Multi-City**.
       Labels: `padding-top: 4px; padding-left: 30px; font-weight: 400;
color: #fff`; `label+label { margin-left: 15px }`.
    2. Row (`col-md-6` + `col-md-6`): **Flying from** (text input,
       placeholder "City or airport") + **Flyning to** — SOURCE TYPO for
       "Flying to" (text input, placeholder "City or airport").
    3. Row (`col-md-3` + `col-md-3` + `col-md-2` + `col-md-2`):
       **Departing** (date input, `required`) · **Returning** (date input,
       `required`) · **Adults (18+)** (select, options 1/2/3, `.select-arrow`
       glyph) · **Children (0-17)** (select, options 0/1/2,
       `.select-arrow`).
    4. Row (`col-md-3` + `col-md-3`): **Travel class** (select, options
       "Economy class" / "Business class" / "First class", `.select-arrow`)
       · `.form-btn` holding **button.submit-btn "Show flights"**.
  - NO navbar, NO footer, NO headline, NO CTA column — a one-section form
    demo (page ends with only the gtag GA script). **NO custom media query
    in the source CSS** — the ≤768px responsive behavior comes entirely
    from Bootstrap's `col-md-*` grid (the 2-col and 4-col rows collapse to
    single columns).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with a full-bleed
     cover/center PHOTO background (airplane wing above a sea of clouds,
     sun flare); content vertically centered via `.section-center`.
  2. `.booking-form` — dark translucent `rgba(0,0,0,0.7)` card (FULL
     container width, padding 40px, radius 6px): radio group
     (Roundtrip · One way · Multi-City) → Flying from + Flying to
     (side-by-side) → Departing + Returning + Adults + Children → Travel
     class + "Show flights" button.
  3. No footer, no other content sections (single-section demo).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-5.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** immersive aviation
  aesthetic. A full-screen photograph of an airplane wing flying above a sea
  of clouds (bright sun, lens flare, blue sky) fills the viewport. Floating
  in the center: a wide semi-transparent DARK grey rounded rectangle holding
  the flight-search form. Top-left: three custom radio buttons with white
  text — "Round trip" (selected, filled white circle), "One way",
  "Multi-City". Below: two wide WHITE pill-shaped inputs (Flying From /
  Flying To, placeholder "City or airport") with small uppercase WHITE
  labels above them; then a row of Departing / Returning date inputs and
  Adults / Children selects (white pills); then Travel class select and, at
  bottom right, a solid red-orange **"SHOW FLIGHTS"** pill button with white
  uppercase text. The ONLY accent color is red `#f23e3e` (radio dots +
  button); everything else is the dark translucent card, white pill fields,
  white labels and the cloudscape photo. Clean, high-contrast airline
  booking widget.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **red `#f23e3e`** — used for the radio checked dots AND the
    "Show flights" submit button background. The ONLY accent color.
  - Card: **`rgba(0, 0, 0, 0.7)`** (translucent near-black) — `.booking-form`
    background, `padding: 40px`, `border-radius: 6px`; NO max-width, NO
    shadow, NO border (spans the full container).
  - Inputs (`.form-control`): **`background-color: #fff`** (white pills),
    `height: 50px`, `color: #191a1e`, `border: none`, `font-size: 16px`,
    `font-weight: 400`, `box-shadow: none`, **`border-radius: 40px`**
    (PILL shape), `padding: 0px 25px`. Placeholder / empty-date color:
    **`rgba(82, 82, 84, 0.4)`** (40% grey — via `::placeholder` and
    `input[type="date"].form-control:invalid`).
  - Labels (`.form-label`): **`color: #fff`**, `display: block`,
    `margin-left: 20px`, `margin-bottom: 5px`, `font-weight: 400`,
    `text-transform: uppercase`, `line-height: 24px; height: 24px`,
    `font-size: 12px` — **STATIC** labels above each field (NOT floating;
    the defining difference vs Skyly).
  - Radio (`.form-checkbox`): input visually hidden (`position: absolute;
margin-left: -9999px; visibility: hidden`); label `padding-top: 4px;
padding-left: 30px`, weight 400, `#fff`; `label+label { margin-left:
15px }`; `input+span` — 20×20px circle, `background: #fff`,
    `border-radius: 50%`; `span:after` — circle `background-color:
#f23e3e`, `transition: 0.2s all`; unchecked → `opacity: 0`, checked →
    `opacity: 1`, 10×10px.
  - Selects: `select.form-control { -webkit-appearance: none; appearance:
none; }`. `.select-arrow` — `position: absolute; right: 10px; bottom:
6px; width: 32px; height: 32px; line-height: 32px; text-align: center;
pointer-events: none; color: rgba(0, 0, 0, 0.3); font-size: 14px;` with
    `::after` content `'\279C'` (➜ U+279C) `transform: rotate(90deg)`.
  - Submit (`.submit-btn`): `color: #fff; background-color: #f23e3e;
font-weight: 400; height: 50px; font-size: 14px; border: none; width:
100%; border-radius: 40px; text-transform: uppercase; transition: 0.2s
all`; hover/focus → `opacity: 0.9`. `.form-btn { margin-top: 27px }`.
  - Font: **'PT Sans', sans-serif** — only weight 400 (the cf-fonts
    @font-face block loads PT Sans 400 latin only; no 700 in the demo).
    Google Fonts link: `family=PT+Sans` (400).
  - Section: **100vh**, photo `cover`/`center`, `font-family: 'PT Sans',
sans-serif`. `.section-center`: absolute `top: 50%; transform:
translateY(-50%); left: 0; right: 0`. `.form-group`: `position:
relative; margin-bottom: 20px`.
  - Radius family: 6px (card), 40px (PILL inputs, PILL button), 50% (radio
    circles). NO shadows anywhere (card has none; inputs have none).
  - Responsive: Bootstrap `col-md-6/col-md-3/col-md-2` grid — below 768px
    the 2-col and 4-col rows collapse to a single column; the card stays
    full-width centered.
- **KEY DIFFERENCES vs Skyly (Booking 19) — the OTHER flight card, do NOT
  merge:** Skyly = LIGHT theme: WHITE 642px card (radius 4px, shadow
  `0 0 10px -5px rgba(0,0,0,0.4)`), LEFT CTA column with h1 "Book your
  flight today" (52px `#4fa3e3` uppercase) + 22px paragraph, FLOATING
  `#98c9ee` labels, inputs 65px with 2px `#dfe5e9` borders and 4px SHARP
  radius, 3-col row (Adults/Children/Travel class all `col-md-4`), 65px
  button with 18px text, Lato font. Wingly = DARK theme: translucent
  `rgba(0,0,0,0.7)` FULL-width card (radius 6px, NO shadow), NO CTA column,
  NO headline, STATIC white 12px uppercase labels above the fields, white
  PILL inputs (radius 40px, 50px, borderless), row layout
  6/6 → 3/3/2/2 → 3/3 (Travel class + button share the last row), 50px
  pill button with 14px text, PT Sans 400 font, red `#f23e3e` accent vs
  sky-blue `#4fa3e3`. Same flight field set — completely different
  palette, label behavior, card treatment and grid.
- **KEY DIFFERENCES vs Drivly (Booking 4) — the other DARK card, do NOT
  merge:** Drivly = car booking, solid `#101113` card (max-width 642px,
  radius 3px), gold `#ffc001` accent, centered h1 "Book a car" (58px),
  light-grey `#f5f5f5` fields (radius 3px), Montserrat, fields
  Name/Email/Phone/Pickup/Destination + Pickup Date/Hour/Min/AM-PM. Wingly =
  flight booking, translucent `rgba(0,0,0,0.7)` FULL-width card (radius
  6px), red `#f23e3e` accent, NO headline, WHITE pill fields (radius 40px),
  PT Sans, fields Roundtrip/One way/Multi-City + Flying from/to +
  Departing/Returning + Adults/Children + Travel class. Same dark-card
  family — palette, field set, radii and fonts all differ.
- **Family palette check (2026-08-09):** red `#f23e3e` is unique in the
  family so far — Roomzy (Booking 15) uses a DIFFERENT coral-red `#f14634`
  (keep them exact and distinguishable), Ridely `#ffc600`, Skyly `#4fa3e3`,
  Coastly `#72b01d`, Guestly `#ff9000`, Roostly `#ff0063`, Stayly
  `#6499ff`, Innly `#c99552`, Lodgely `#6c8f18`, Bookly `#2b9328`, Nestly
  `#9a8067`, Hostly `#856849`, Drivly `#ffc001`. Keep `#f23e3e` exact.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the page background uses a
  seeded picsum placeholder (`picsum.photos/seed/wingly-1/1920/1080`, a
  clouds/sky-appropriate seed; the source `background.jpg` must not be
  copied) with `cover`/`center` and NO separate scrim (the card's own
  `rgba(0,0,0,0.7)` translucent background provides the contrast — the
  photo stays fully visible around the card); date inputs are native
  `<input type="date">` styled with Tailwind (no datepicker dependency);
  Adults/Children/Travel class are native `<select>`s with `appearance:
none` + a rotated `➜` glyph (U+279C) or lucide ChevronDown
  (`rgba(0,0,0,0.3)`, 14px, 32×32, at `right 10px bottom 6px`); the radio
  group is three custom circular radios (visually-hidden native inputs +
  white 20px circles, red 10px `#f23e3e` checked dot) with labels
  "Roundtrip" / "One way" / "Multi-City"; labels are STATIC real `<label
htmlFor>` elements (white, 12px, uppercase, above the field, `margin-left
20px` — they must NOT float, unlike Skyly); body in PT Sans 400 via
  Google Fonts `<link>` in `index.html`; document title "Wingly — Flight
  Booking Template"; brand "Booking"/"Colorlib Booking" → "Wingly"
  everywhere. The "Show flights" button validates the form
  (flying-from/flying-to/departing/returning required; adults/children/
  travel-class defaulted) and reveals a summary line (route, dates,
  passengers, class) — the original demo is static, so this minimal
  interactive behavior is a documented recreation choice, kept in a pure
  exported function for 100%-coverage tests.

Wingly lives in `apps/wingly` (package `@free-react-templates/wingly`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with photo background

The system SHALL render a full-viewport (100vh) booking section with a
full-bleed cover/center-positioned photograph as the page background,
vertically centering a single dark translucent booking card. The page SHALL
NOT render any navbar, hero chrome, headline/CTA column, or footer
(single-section form demo).

#### Scenario: Full-viewport section with photo background

- **GIVEN** the Wingly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed photograph
  (`picsum.photos/seed/wingly-1/1920/1080`) as its background,
  cover-positioned and centered
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar, a headline/CTA
  column, or a footer

### Requirement: Dark translucent booking card

The system SHALL render a dark translucent booking card (background
`rgba(0, 0, 0, 0.7)`) spanning the full content width (no max-width), with
40px padding and 6px corner radius, containing the flight-search form. The
card SHALL have no box-shadow and no border.

#### Scenario: Card with form

- **GIVEN** the Wingly page is rendered
- **WHEN** the page loads
- **THEN** a card with translucent near-black background `rgba(0, 0, 0,
0.7)` SHALL be shown, spanning the full content width, with 40px padding
  and 6px border radius
- **AND** the card SHALL contain the radio group, the route fields, the
  date/passenger fields, the travel-class select, and the submit button
- **AND** the card SHALL have no box-shadow and no border

### Requirement: Flight-type radio group

The system SHALL render a flight-type radio group with custom circular
radios (Roundtrip, One way, Multi-City): white 20px circles with a red
`#f23e3e` 10px dot when checked.

#### Scenario: Radio options and styling

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** three radio options SHALL be shown in order: Roundtrip, One
  way, Multi-City
- **AND** each option SHALL render a custom white circle (20×20px,
  border-radius 50%) in place of the native radio
- **AND** the checked option SHALL show a red `#f23e3e` dot (10×10px)
  inside its circle
- **AND** the labels SHALL be white, weight 400, with 30px left padding
  and 15px spacing between options

### Requirement: Route field set

The system SHALL render the route fields side by side on ≥768px: "Flying
from" and "Flying to" text inputs with placeholder "City or airport", each
with a STATIC white uppercase label.

#### Scenario: Route fields and order

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** the form SHALL show, in order: Flying from (text input,
  placeholder "City or airport") and Flying to (text input, placeholder
  "City or airport") side by side on ≥768px
- **AND** the source label typo "Flyning to" SHALL be corrected to "Flying
  to"

#### Scenario: Static labels

- **GIVEN** any field in the card is displayed
- **WHEN** the field is empty, focused, or has a value
- **THEN** its label SHALL remain fixed above the field, in white, 12px,
  uppercase, weight 400, with 20px left margin
- **AND** the label SHALL be a real `<label>` associated with the control
  via `htmlFor`/`id`
- **AND** the label SHALL NOT float, shrink, or change color on focus or
  when the field has a value

#### Scenario: Field styling

- **GIVEN** the dark booking card is displayed
- **WHEN** the fields are rendered
- **THEN** every field SHALL have a white background, no border, 50px
  height, and 40px (pill) border radius
- **AND** every field SHALL show its value in dark `#191a1e` at weight 400
- **AND** placeholders and empty date inputs SHALL render at
  `rgba(82, 82, 84, 0.4)` opacity

### Requirement: Date and passenger fields

The system SHALL render Departing and Returning as required native date
inputs, and Adults (18+) and Children (0-17) as selects, in one row on
≥768px.

#### Scenario: Date and passenger row

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** the form SHALL show, in one row on ≥768px: Departing (date
  input, required), Returning (date input, required), Adults (18+) (select
  with options 1, 2, 3), Children (0-17) (select with options 0, 1, 2)
- **AND** each select SHALL hide its native appearance and SHALL have an
  arrow glyph at its right edge

### Requirement: Travel class and submit

The system SHALL render a Travel class select (Economy class / Business
class / First class) with an arrow glyph, alongside a full-width red
"Show flights" submit button (pill shape) that validates the form and shows
a summary.

#### Scenario: Travel class select

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** a select labelled "Travel class" SHALL be shown with options
  Economy class, Business class, and First class
- **AND** the select SHALL hide its native appearance and SHALL have an
  arrow glyph at its right edge

#### Scenario: Button styling

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** a button reading "Show flights" SHALL be shown, full width
- **AND** the button SHALL have a red `#f23e3e` background with white
  uppercase 14px weight-400 text, 50px height, and 40px (pill) radius
- **AND** the button SHALL dim to 90% opacity on hover/focus

#### Scenario: Submit with valid input

- **GIVEN** the user has filled Flying from, Flying to, Departing, and
  Returning
- **WHEN** the user clicks "Show flights"
- **THEN** the form SHALL show a summary line with the route, dates,
  passengers and class (e.g. "JFK → LHR · Aug 10 – Aug 17, 2026 · 2
  adults, 1 child · Economy")
- **AND** the summary SHALL be styled with the red `#f23e3e` brand color
  or on a red-tinted background

#### Scenario: Submit with missing required fields

- **GIVEN** the dark booking card is displayed
- **WHEN** the user clicks "Show flights" with Flying from, Flying to,
  Departing, or Returning empty
- **THEN** the form SHALL show validation messages for the invalid fields
- **AND** no summary SHALL be shown

### Requirement: Select arrow glyphs

The system SHALL render Adults, Children, and Travel class as selects with
native appearance removed and a floating arrow glyph at the right edge.

#### Scenario: Selects with arrow

- **GIVEN** the dark booking card is displayed
- **WHEN** the form is rendered
- **THEN** all three selects SHALL hide their native appearance
  (`appearance: none`)
- **AND** an arrow glyph (rotated `➜` U+279C or ChevronDown,
  `rgba(0,0,0,0.3)`, 14px, 32×32) SHALL float at the right edge (`right
10px bottom 6px`) of each select, without capturing pointer events

### Requirement: Mobile stacking

The system SHALL collapse the side-by-side field rows to stacked fields on
small screens, matching the source's Bootstrap `col-md-*` behavior.

#### Scenario: Stacked below 768px

- **GIVEN** the Wingly page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** Flying from and Flying to SHALL stack vertically (source
  `col-md-6` behavior)
- **AND** the Departing / Returning / Adults / Children row SHALL wrap so
  every field takes full width (source `col-md-3`/`col-md-2` behavior)
- **AND** Travel class and the "Show flights" button SHALL stack, with the
  button remaining full width

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-wingly`
- [ ] `scripts/verify-app.sh wingly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with full-bleed cover/center
      PHOTO page background (seeded picsum `wingly-1/1920/1080`, NO scrim —
      photo fully visible) → vertically centered DARK TRANSLUCENT
      `rgba(0,0,0,0.7)` card (FULL content width, padding 40px, radius 6px,
      no shadow/border) → radio group (Roundtrip · One way · Multi-City) →
      Flying from + Flying to row → Departing + Returning + Adults +
      Children row → Travel class + "Show flights" row; NO navbar, NO
      headline/CTA, NO footer (single-section demo)
- [ ] Brand color `#f23e3e` (red — radio checked dots + "Show flights"
      button background) in `@theme` and used via Tailwind classes
- [ ] Card `rgba(0,0,0,0.7)`; inputs white 50px PILL (radius 40px)
      borderless with dark `#191a1e` text; placeholders
      `rgba(82,82,84,0.4)`; labels `#fff` 12px uppercase STATIC (never
      float)
- [ ] PT Sans 400 via Google Fonts `<link>` in `index.html`
- [ ] Page background = seeded picsum (`wingly-1/1920/1080`) cover/center
      full-bleed WITHOUT a separate overlay scrim (source `background.jpg`
      not copied)
- [ ] Radios: visually-hidden native inputs + custom white 20px circles,
      red `#f23e3e` 10px checked dot; labels Roundtrip / One way /
      Multi-City, white, 30px left padding, 15px spacing
- [ ] Selects: Adults 1–3, Children 0–2, Travel class
      Economy/Business/First — `appearance: none` + arrow glyph (rotated
      `➜`/ChevronDown, `rgba(0,0,0,0.3)`, 14px, 32×32) at `right 10px
    bottom 6px`
- [ ] "Show flights" button: solid `#f23e3e` bg, white uppercase 14px
      text, height 50px, full width, radius 40px, hover opacity 0.9;
      validates required fields and shows a summary line / validation
      messages
- [ ] Source typo "Flyning to" corrected to "Flying to"
- [ ] Mobile (<768px): route row stacks; date/passenger row wraps full
      width; travel class + button stack; button stays full width
- [ ] Placeholder images via `picsum.photos/seed/wingly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
