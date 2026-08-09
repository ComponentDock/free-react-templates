# Template: Skyly (Booking Forms / Airline Flight Booking Widget)

## Purpose

Skyly is a single-page airline flight-booking form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V19 — Free Airline Flight Booking
Template" website template (source: https://colorlib.com/wp/template/colorlib-booking-19/),
built under a DIFFERENT name (Skyly — "sky", the domain of flight, plus the
"-ly" suffix, matching the Booking Forms family convention: Reservly, Roomzy,
Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly; re-branded)
per the monorepo naming mandate (never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-19/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-stayly / template-roostly / template-roomzy / template-reservly
> / template-ridely / template-triply / template-innly / template-lodgely /
> template-hostly / template-guestly preps — the
> `preview.colorlib.com/assets/js/products.js` product map only covers new
> Astro-era templates). The LIVE PREVIEW button on the ColorLib template page
> resolves to `https://colorlib.com/etc/bforms/<slug>/` for the whole family.
> **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-19/` (HTTP 200, ~6.1 KB
> HTML + `css/style.css` ~3.7 KB + `css/bootstrap.min.css` ~121 KB), and the
> TEMPLATES.md screenshot (`colorlib-booking-19.jpg`, 1200×972, viewed in
> browser) matches the live render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V19" — page title "Colorlib
  Booking Form V19 - Free Airline Flight Booking Template". Category in
  TEMPLATES.md: **Booking Forms (22)**. Internal doc title: "Booking Form
  HTML Template". The recreation brands itself **Skyly** but keeps the same
  section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-19/` (HTTP 200, ~6.1 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row`:
  - `#booking` — **full-bleed PHOTO page background**:
    `background-image: url('../img/background.jpg'); background-size: cover;
background-position: center;` (the photo is an airplane-window view: white
    wing + blue tail fin over snow-capped mountains and a turquoise glacial
    lake, bright blue sky with wispy clouds), `color: #191a1e`, `font-family:
'Lato', sans-serif`.
  - Row (Bootstrap grid, NO Bootstrap dependency in the recreation):
    - `col-md-4` → `.booking-cta` (margin-top 45px) — the LEFT COPY column:
      - **h1 "Book your flight today"** — `font-size: 52px`,
        `text-transform: uppercase`, `color: #4fa3e3`, `font-weight: 400`.
      - **p** — `font-size: 22px`, `color: #191a1e` (Lorem-ipsum copy).
    - `col-md-7 col-md-offset-1` → `.booking-form` — the RIGHT WHITE CARD:
      **`background: #fff`, `max-width: 642px`, `width: 100%`, `margin: auto`,
      `padding: 45px 25px 25px`, `border-radius: 4px`, `box-shadow: 0px 0px
10px -5px rgba(0, 0, 0, 0.4)`**.
  - `<form>` contents, in order:
    - **Flight-type radio group** (`.form-checkbox`) — custom circular radios
      (input visually hidden, 20×20px circle, 2px `#dfe5e9` border, checked →
      10px `#4fa3e3` dot): **Roundtrip** (checked by default in the source? —
      no `checked` attr; the first radio is `Roundtrip`), **One way**,
      **Multi-City**. Labels: `padding-top: 4px; padding-left: 30px;
font-weight: 700; color: #191a1e`; `label+label { margin-left: 15px }`.
    - Row 1 (`col-md-6` × 2): **Flying from** (text input, placeholder
      "City or airport") · **Flyning to** — SOURCE TYPO for "Flying to"
      (text input, placeholder "City or airport").
    - Row 2 (`col-md-6` × 2): **Departing** (date input, `required`) ·
      **Returning** (date input, `required`).
    - Row 3 (`col-md-4` × 3 — THREE columns): **Adults (18+)** (select,
      options 1/2/3) · **Children (0-17)** (select, options 0/1/2) ·
      **Travel class** (select, options "Economy class" / "Business class" /
      "First class"). Each select has a `.select-arrow` glyph.
    - `.form-btn` → `.submit-btn` full-width **"Show flights"** button.
  - NO navbar, NO footer, NO other sections — a one-section form demo (page
    ends with only the GA script). **NO custom media query in the source
    CSS** — the ≤768px responsive behavior comes entirely from Bootstrap's
    `col-md-*` grid (the CTA column stacks ABOVE the form card; the 2-col and
    3-col rows collapse to a single column).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-19.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** light, airy, travel-aesthetic
  page. A full-screen photograph (airplane wing flying over turquoise water
  and snowy mountains under a bright blue sky) fills the entire viewport. On
  the LEFT, over the photo: the large uppercase light-blue headline **"BOOK
  YOUR FLIGHT TODAY"** (`#4fa3e3`, ~52px) with a dark-grey 22px Lorem-ipsum
  paragraph beneath. On the RIGHT, a clean white rounded card (max-width
  642px, soft shadow) holding the flight-search form: three radio "pills"
  (Roundtrip / One way / Multi-City, custom circles), then two text fields
  with floating light-blue labels (Flying from / Flying to, placeholder "City
  or airport"), then Departing / Returning date fields, then a
  three-column row of selects (Adults / Children / Travel class), and a
  full-width solid blue **"SHOW FLIGHTS"** button (`#4fa3e3`, white uppercase
  18px text). Fields have 2px light-grey-blue (`#dfe5e9`) borders, sharp 4px
  corners, 65px height. The ONLY accent is the bright sky-blue `#4fa3e3`
  (headline, radio dots, button) — everything else is white / light grey /
  dark grey. Clean, modern, sky-blue aviation aesthetic.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with a full-bleed
     cover/center PHOTO background (airplane wing over turquoise lake +
     mountains); content vertically centered via `.section-center`.
  2. Left column (4/12): `.booking-cta` — **h1 "Book your flight today"**
     (52px, uppercase, `#4fa3e3`, weight 400) + 22px `#191a1e` paragraph.
  3. Right column (7/12, offset 1): `.booking-form` — white card
     (max-width 642px, radius 4px, shadow `0 0 10px -5px rgba(0,0,0,0.4)`,
     padding 45px 25px 25px), containing:
     - Radio group: Roundtrip · One way · Multi-City (custom circles).
     - Row: Flying from (text, placeholder "City or airport") · Flying to
       (text, placeholder "City or airport"; source typo "Flyning to" — fix).
     - Row: Departing (date, required) · Returning (date, required).
     - Row: Adults (18+) select 1/2/3 · Children (0-17) select 0/1/2 ·
       Travel class select (Economy/Business/First).
     - `.form-btn` — **Show flights** (full-width `#4fa3e3` submit, white
       uppercase 18px text, height 65px).
  4. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **sky blue `#4fa3e3`** — used for the CTA h1, the radio
    checked dots, and the submit button background. The ONLY accent color;
    high-contrast against white and the photo.
  - Label color: **light blue `#98c9ee`** (`.form-label`) — a softer tint of
    the brand blue, used for the FLOATING labels inside the inputs.
  - Card: **`#fff`**, max-width 642px, `border-radius: 4px`, `box-shadow:
0px 0px 10px -5px rgba(0, 0, 0, 0.4)`, `padding: 45px 25px 25px`.
  - Section: **100vh**, `background-image` photo, `background-size: cover`,
    `background-position: center`, `color: #191a1e`.
  - Font: **'Lato', sans-serif** for everything (weights 400 + 700). Google
    Fonts link: `family=Lato:wght@400;700`. NO display font — Lato only.
  - Headline (`.booking-cta h1`): **`color: #4fa3e3`**, 52px,
    `text-transform: uppercase`, `font-weight: 400`. Paragraph: 22px,
    `#191a1e`. `.booking-cta`: `margin-top: 45px`.
  - Floating labels (`.form-label`): **`color: #98c9ee`**, absolute
    `top: 6px; left: 20px`, `font-weight: 700`, `text-transform: uppercase`,
    `line-height: 24px; height: 24px`, `font-size: 12px` — FLOATING labels
    rendered INSIDE the input's top edge (inputs carry `padding-top: 24px`
    so the typed value sits below the label).
  - Inputs (`.form-control`): `background-color: #fff`, `height: 65px`,
    `padding: 0px 15px; padding-top: 24px`, `color: #191a1e`,
    **`border: 2px solid #dfe5e9`**, `font-size: 16px`, `font-weight: 700`,
    `box-shadow: none`, **`border-radius: 4px`** (sharp, NOT pill),
    `transition: 0.2s all`; **focus → `background: #f9fafb`** (very light
    grey). Placeholder / empty-date color: `#dfe5e9` (also the border color;
    empty date inputs render `#dfe5e9` via
    `input[type="date"].form-control:invalid`).
  - `.form-group`: `position: relative`, `margin-bottom: 20px`.
  - Select: `appearance: none`; custom `.select-arrow` — absolute,
    `right: 6px; bottom: 6px`, 32×32px, `line-height: 32px`,
    `text-align: center`, `pointer-events: none`, **`color: #dfe5e9`**,
    `font-size: 14px`; `::after` content `'\279C'` (➜) rotated 90°.
  - Radio (`.form-checkbox`): input visually hidden (`position: absolute;
margin-left: -9999px; visibility: hidden`); label `padding-top: 4px;
padding-left: 30px`, `font-weight: 700`, `color: #191a1e`; `label+label {
margin-left: 15px }`; `input+span` — 20×20px circle, `background: #fff`,
    `border: 2px solid #dfe5e9`, `border-radius: 50%`; `::after` — centered
    circle `background-color: #4fa3e3`, 0px when unchecked, **10×10px when
    checked**.
  - Button (`.submit-btn`): **`color: #fff`, `background-color: #4fa3e3`**
    (SOLID sky blue), `font-weight: 400`, `font-size: 18px`, `border: none`,
    **`border-radius: 4px`**, `height: 65px`, `display: block`, `width:
100%`, **`text-transform: uppercase`**. (No hover rule in the source CSS
    — the recreation may darken the blue on hover, e.g. `#3d8fd4`, as a
    documented choice.)
  - Responsive: NO custom media query in the source; Bootstrap `col-md-*`
    stacking handles ≤768px (CTA stacks above the card; 2-col and 3-col rows
    collapse to one column).
- **KEY DIFFERENCES vs Stayly (Booking 12) — also blue, do NOT copy the
  Stayly design:** Stayly sits on a light-grey `#f7f9fa` page with a ~250px
  SIDE PHOTO PANEL inside the white card, `#6499ff` used ONLY on the button,
  40px-tall inputs, static labels ABOVE the fields, and a full-width select.
  Skyly has a FULL-BLEED PHOTO page background (no side panel), `#4fa3e3`
  used on the h1 + radio dots + button, 65px-tall inputs with 2px `#dfe5e9`
  borders, FLOATING labels INSIDE the inputs (`#98c9ee`), custom circular
  radio pills, and a two-column CTA + card layout. Same Lato font family,
  same 642px card width — that's where the similarity ends.
- **KEY DIFFERENCES vs Hostly (Booking 17) — also light, do NOT merge the
  two:** Hostly is the taupe/beige variant (white 912px card on a
  `rgba(133,104,73,0.33)` wash, LEFT photo panel inside the card, Playfair
  Display 900 headline, taupe `#856849` labels/button, PILL inputs/button,
  "Make your reservation" header, "Check availability" button). Skyly is the
  SKY-BLUE variant (white 642px card directly on a full-bleed photo, no inner
  photo panel, Lato headline "Book your flight today", blue `#4fa3e3`
  labels/button, SHARP 4px-radius inputs/button, flight field set with radio
  pills, "Show flights" button). Both are light single-section form demos;
  field sets differ completely (Hostly: adults/children + Room Type select;
  Skyly: flight-type radios + route + dates + Adults/Children/Travel class).
- **KEY DIFFERENCES vs Guestly (Booking 18) — dark variant, do NOT copy:**
  Guestly is the DARK ORANGE variant (near-black `#0f0f0f` card on a WHITE
  page, full-width photo header panel inside the card, Medula One headline,
  orange `#ff9000` labels/button, PILL inputs). Skyly is the LIGHT BLUE
  variant (white card on a full-bleed photo, no inner photo panel, Lato
  headline, blue `#4fa3e3` labels/button, SHARP 4px-radius inputs).
- **First in the family with this palette:** no other Booking Forms prep uses
  sky blue `#4fa3e3` or the floating in-input label treatment (verified
  against all existing `template-*` specs 2026-08-09) — do not copy from
  stayly (`#6499ff`, side panel, static labels) or roomzy (red-orange
  `#f14634`) / roostly (hot pink `#ff0063`).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the page background uses a
  seeded picsum placeholder (`picsum.photos/seed/skyly-1/1920/1080`, an
  aerial/landscape seed; the source `background.jpg` must not be copied) with
  `cover`/`center`; date inputs are native `<input type="date">` styled with
  Tailwind (no datepicker dependency); select arrows = rotated `➜` glyph
  (U+279C) or lucide ChevronDown as a floating `#dfe5e9` 32×32 glyph at
  `right 6px bottom 6px`; custom circular radios (lucide CircleDot or CSS
  spans — 20px circle, 2px `#dfe5e9` border, checked → 10px `#4fa3e3` dot);
  floating labels = absolute `top 6px left 20px`, 12px, uppercase, weight
  700, `#98c9ee`, with inputs padded `padding-top: 24px`; body in Lato 400/700
  via Google Fonts `<link>` in `index.html` (NO display font); document title
  "Skyly — Airline Flight Booking Template"; brand "Booking"/"Colorlib
  Booking" → "Skyly" everywhere. Fix the source typo "Flyning to" → "Flying
  to". The "Show flights" button validates the form (departing and returning
  dates required; returning ≥ departing) and reveals a summary line
  (flight type, route, dates, adults, children, class) — the original demo is
  static, so this minimal interactive behavior is a documented recreation
  choice, kept in a pure exported function for 100%-coverage tests.

Skyly lives in `apps/skyly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with photo background

The system SHALL render a full-viewport (100vh) booking section with a
full-bleed cover/center-positioned photograph as the page background,
vertically centering a two-column layout (CTA copy + white form card). The
page SHALL NOT render any navbar, hero chrome, or footer (single-section form
demo).

#### Scenario: Full-viewport section with photo background

- **GIVEN** the Skyly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed photograph
  (`picsum.photos/seed/skyly-1/1920/1080`) as its background, cover-positioned
  and centered
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: CTA copy column

The system SHALL render a left-side call-to-action column with the headline
"Book your flight today" and a short supporting paragraph, in the source
typography.

#### Scenario: CTA headline and paragraph

- **GIVEN** the Skyly page is rendered
- **WHEN** the page loads
- **THEN** a `h1` reading "Book your flight today" SHALL be shown on the left
  side of the layout
- **AND** the headline SHALL be uppercase, ~52px, weight 400, in the brand
  sky-blue `#4fa3e3`
- **AND** a 22px dark-grey `#191a1e` paragraph (Lorem-ipsum copy) SHALL
  appear below the headline
- **AND** the CTA column SHALL occupy ~4/12 of the row width on desktop

### Requirement: White flight-search form card

The system SHALL render a white form card (max-width 642px, 4px radius, soft
drop shadow, padding 45px 25px 25px) on the right side of the layout,
containing the flight-search form.

#### Scenario: White card with form

- **GIVEN** the Skyly page is rendered
- **WHEN** the page loads
- **THEN** a white card SHALL be shown on the right side (~7/12 of the row
  width, offset 1/12)
- **AND** the card SHALL have max-width 642px, `border-radius: 4px`, a
  `0 0 10px -5px rgba(0,0,0,0.4)` shadow, and padding 45px 25px 25px
- **AND** the card SHALL contain the flight-search form fields in source
  order

### Requirement: Flight-type radio group

The system SHALL render three custom circular radio options — Roundtrip,
One way, Multi-City — with the source pill styling.

#### Scenario: Radio options rendered

- **GIVEN** the flight-search form is displayed
- **WHEN** the form is rendered
- **THEN** radio options "Roundtrip", "One way" and "Multi-City" SHALL be
  present in that order, with 15px spacing between labels
- **AND** each option SHALL show a 20×20px circle with a 2px `#dfe5e9`
  border
- **AND** the selected option SHALL show a 10×10px `#4fa3e3` dot inside the
  circle
- **AND** each label SHALL be weight 700 in `#191a1e`, padded left 30px
- **AND** the radio inputs SHALL be accessible (label/input association,
  `aria-checked` or native radio semantics)

### Requirement: Route fields with floating labels

The system SHALL render "Flying from" and "Flying to" text inputs with
placeholder "City or airport" and floating light-blue labels inside the input
top edge.

#### Scenario: Route inputs

- **GIVEN** the flight-search form is displayed
- **WHEN** the form is rendered
- **THEN** a "Flying from" text input and a "Flying to" text input SHALL be
  present side by side
- **AND** both inputs SHALL show the placeholder "City or airport"
- **AND** each input SHALL carry a floating 12px uppercase weight-700
  `#98c9ee` label at the input's top edge (top 6px, left 20px; input
  `padding-top: 24px`)
- **AND** each label SHALL be associated with its control via
  `htmlFor`/`id` (accessible)
- **AND** the "Flying to" label SHALL read "Flying to" (fixing the source
  typo "Flyning to")

### Requirement: Departing and Returning date fields

The system SHALL render Departing and Returning date inputs side by side,
both required.

#### Scenario: Date fields

- **GIVEN** the flight-search form is displayed
- **WHEN** the form is rendered
- **THEN** a "Departing" date input and a "Returning" date input SHALL be
  present side by side
- **AND** both inputs SHALL be required
- **AND** an empty date input SHALL display the light-grey `#dfe5e9` text
  color until a value is picked
- **AND** the inputs SHALL have a white fill, 2px `#dfe5e9` border, 4px
  radius, 65px height, and 16px weight-700 `#191a1e` text

#### Scenario: Returning not before departing

- **GIVEN** the user has picked a departing date
- **WHEN** the user picks a returning date earlier than the departing date
- **THEN** the form SHALL flag the returning field as invalid
- **AND** submission SHALL be blocked until returning is on or after
  departing

### Requirement: Adults, Children and Travel class selects

The system SHALL render three selects — Adults (18+), Children (0-17), Travel
class — side by side in one row with the source option sets and a floating
arrow glyph at the right edge of each select.

#### Scenario: Three-column select row

- **GIVEN** the flight-search form is displayed
- **WHEN** the form is rendered
- **THEN** an "Adults (18+)" select SHALL offer options 1, 2 and 3
- **AND** a "Children (0-17)" select SHALL offer options 0, 1 and 2
- **AND** a "Travel class" select SHALL offer "Economy class", "Business
  class" and "First class"
- **AND** the three selects SHALL be laid out side by side in a single row
  (three equal columns on desktop)
- **AND** each select SHALL display an arrow (rotated `➜` glyph or
  ChevronDown) as a floating `#dfe5e9` 32×32 glyph at `right 6px bottom 6px`
  inside the input

### Requirement: Show flights button

The system SHALL render a full-width "Show flights" submit button (solid
sky-blue `#4fa3e3` background with white uppercase 18px text, 4px radius,
65px height) that validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** all required fields are filled in (returning ≥ departing)
- **WHEN** the user clicks "Show flights"
- **THEN** the form SHALL show a summary line with the flight details (e.g.
  "Roundtrip · JFK → LHR · 2026-08-10 → 2026-08-13 · 2 adults · 1 child ·
  Economy class")
- **AND** the summary SHALL be styled with the sky-blue `#4fa3e3` brand color
  or on a blue-tinted background

#### Scenario: Submit with missing fields

- **GIVEN** the flight-search form is displayed
- **WHEN** the user clicks "Show flights" with missing required fields
  (dates)
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

### Requirement: Floating light-blue labels and input styling

The system SHALL render every field with a floating, uppercase, 12px,
weight-700, `#98c9ee` label at the input's top edge, and inputs styled per
the source tokens (white fill, 2px `#dfe5e9` border, 4px radius, 65px height,
16px weight-700 text, focus → `#f9fafb`).

#### Scenario: Label placement and styling

- **GIVEN** the flight-search form is displayed
- **WHEN** the form is rendered
- **THEN** every field (Flying from, Flying to, Departing, Returning, Adults,
  Children, Travel class) SHALL have a label positioned at the top edge of
  its input (floating — top 6px, left 20px; input `padding-top: 24px`)
- **AND** each label SHALL be 12px, weight 700, uppercase, light-blue
  `#98c9ee`, line-height 24px
- **AND** each label SHALL be associated with its control via
  `htmlFor`/`id` (accessible)

#### Scenario: Input focus state

- **GIVEN** the flight-search form is displayed
- **WHEN** a text/date input receives focus
- **THEN** the input background SHALL change to `#f9fafb`
- **AND** the 2px `#dfe5e9` border and 4px radius SHALL remain

### Requirement: Mobile stacking

The system SHALL collapse the multi-column layout to a single column on small
screens (≤768px), matching the source's Bootstrap `col-md-*` behavior.

#### Scenario: Single column below 768px

- **GIVEN** the Skyly page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** the CTA column SHALL stack above the form card
- **AND** the Flying from / Flying to row SHALL stack vertically
- **AND** the Departing / Returning row SHALL stack vertically
- **AND** the Adults / Children / Travel class row SHALL stack vertically
- **AND** the card SHALL stay centered with max-width 642px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-skyly`
- [ ] `scripts/verify-app.sh skyly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with full-bleed cover/center
      PHOTO page background (seeded picsum, `skyly-1/1920/1080`) → vertically
      centered two-column row → LEFT CTA (h1 "Book your flight today", 52px
      uppercase `#4fa3e3` weight 400 + 22px `#191a1e` paragraph) → RIGHT white
      card (max-width 642px, radius 4px, shadow `0 0 10px -5px
    rgba(0,0,0,0.4)`, padding 45px 25px 25px) → form fields in source order
      (Roundtrip/One way/Multi-City radios → Flying from + Flying to →
      Departing + Returning → Adults + Children + Travel class → Show
      flights); NO navbar, NO footer (single-section demo)
- [ ] Brand color `#4fa3e3` (h1, radio dots, button background) in `@theme`
      and used via Tailwind classes
- [ ] Label color `#98c9ee` for floating in-input labels; border/placeholder
      color `#dfe5e9`; text `#191a1e`
- [ ] Lato 400/700 via Google Fonts `<link>` in `index.html` (NO display
      font)
- [ ] Page background = seeded picsum (`skyly-1/1920/1080`) cover/center,
      full-bleed (source `background.jpg` not copied)
- [ ] CTA: h1 "Book your flight today" 52px uppercase `#4fa3e3` weight 400 +
      22px `#191a1e` paragraph
- [ ] Radios: Roundtrip / One way / Multi-City custom circles (20px, 2px
      `#dfe5e9` border, checked → 10px `#4fa3e3` dot), labels weight 700
      `#191a1e`, 30px left padding, 15px inter-label spacing
- [ ] Inputs: white fill, height 65px, `padding 0 15px` + `padding-top 24px`,
      `#191a1e` bold 16px text, 2px `#dfe5e9` border, radius 4px; focus →
      `#f9fafb`; placeholder / empty date `#dfe5e9`
- [ ] Floating labels: absolute top 6px left 20px, 12px uppercase weight-700
      `#98c9ee`, `htmlFor`/`id` associated; "Flying to" (source typo
      "Flyning to" fixed)
- [ ] Selects: Adults (1/2/3), Children (0/1/2), Travel class
      (Economy/Business/First) side by side in a 3-column row;
      `appearance: none`; floating `#dfe5e9` 32×32 arrow glyph (rotated
      `➜`/ChevronDown) at right 6px bottom 6px
- [ ] "Show flights" button: full width, solid `#4fa3e3` bg, white uppercase
      18px text, height 65px, radius 4px, border none; validates (dates
      required, returning ≥ departing) and shows summary / validation
      messages
- [ ] Mobile (≤768px): CTA stacks above card; rows collapse to a single
      column; card centered with max-width 642px
- [ ] Placeholder images via `picsum.photos/seed/skyly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
