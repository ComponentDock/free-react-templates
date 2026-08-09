# Template: Soarly (Booking Forms / Airline Flight Booking Widget)

## Purpose

Soarly is a single-page airline flight booking widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V9" website template
(source: https://colorlib.com/wp/template/colorlib-booking-9/), built under a
DIFFERENT name (Soarly — "soar", to fly high, plus the friendly "-ly" suffix,
matching the Booking Forms family convention: Reservly, Coastly, Roomzy,
Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly, Skyly,
Bookly, Nestly, Drivly, Wingly, Restly, Sleeply, Dozely; re-branded) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-9/` returns HTTP 404
> (curl verified, "Not Found"), as it does for the whole classic Booking Forms
> family (see the template-skyly / template-stayly / template-roostly /
> template-roomzy / template-reservly / template-ridely / template-triply /
> template-innly / template-lodgely / template-hostly / template-guestly /
> template-coastly / template-bookly / template-nestly / template-drivly /
> template-wingly / template-restly / template-sleeply / template-dozely
> preps — the `preview.colorlib.com/assets/js/products.js` product map only
> covers new Astro-era templates). The LIVE PREVIEW button on the ColorLib
> template page resolves to `https://colorlib.com/etc/bforms/<slug>/` for the
> whole family. **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-9/` (HTTP 200, ~7.6 KB
> HTML + `css/style.css` ~3.4 KB + `css/bootstrap.min.css`) and the
> TEMPLATES.md screenshot (`colorlib-booking-9.jpg`, 1200×972, viewed in
> browser) matches the live render 1:1.** NOTE: this is the SOLID-CHARCOAL,
> MUSTARD-YELLOW variant — a dark card with a darker full-bleed header band,
> SHARP (0-radius) dark fields, Montserrat typography, a headline INSIDE the
> card ("Book Your Flight"), flight-type radios, and a left-aligned
> "Check availability" button. Do NOT confuse it with Wingly (Booking 5, the
> closest sibling — ALSO a flight set, but WHITE pill fields, RED `#f23e3e`
> accents, PT Sans, static white labels ABOVE the fields, a page-level photo
> background, and NO headline) or Dozely (Booking 8 — hotel set, ORANGE
> `#ff8846`/`#e35e0a`, Raleway, photo INSIDE the card, pill fields, centered
> headline).

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V9" — free AIRLINE FLIGHT
  booking widget ("Book Your Flight", flight-type radios, Flying from / Flying
  to, Check In / Check Out, Travel class / Adults / Children, "Check
  availability"), Bootstrap-based (Booking Forms category, 22 templates in the
  family). Internal demo doc title: "Booking Form HTML Template". The
  recreation brands itself **Soarly** but keeps the same section structure,
  field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-9/` (HTTP 200, ~7.6 KB
  HTML + `css/style.css` ~3.4 KB + `css/bootstrap.min.css`). Single-section
  document: `#booking.section` (height 100vh) with `.section-center` (absolute,
  top 50%, translateY(-50%), left/right 0) vertically centering
  `.container > .row` containing `.booking-form` (the card):
  - `#booking` — NO page-level background (plain WHITE page); only
    `font-family: 'Montserrat', sans-serif`. No photo anywhere (unlike
    Wingly/Dozely — this card is SOLID color).
  - `.booking-form` — the CARD: `max-width: 642px; width: 100%; margin:
auto; padding: 0 40px 40px; background: #2d343b` (solid charcoal). NO
    border-radius, NO box-shadow (flat rectangle).
  - `.form-header` — full-bleed darker band: `padding: 40px; margin: 0
-40px 30px; background: #1a1f24` (negative side margins span the card's
    40px padding); `h1` **"Book Your Flight"** — `font-weight: 700;
text-transform: capitalize; font-size: 38px; margin: 0; color: #fff`
    (LEFT-aligned, not centered).
  - `<form>` contents, in order:
    1. **Flight-type radio group** (`.form-checkbox`, inside a `.form-group`)
       — custom circular radios: **Roundtrip** (first, no `checked` attr in
       source), **One way**, **Multi-City**. Each label = uppercase white 700
       text with a 20×20px circle `span` (border + bg `#1c2126`, radius 50%);
       checked → border-color `#f7c411` + inner 10×10px dot `#f7c411`.
    2. **Flying from** — text input, full width, label "Flying from".
    3. **Flying to** — text input, full width, label "Flying to".
    4. Row (`col-md-6` + `col-md-6`): **Check In** (date input) · **Check
       Out** (date input).
    5. Row (`col-md-4` × 3): **Travel class** (select: Economy class /
       Business class / First class) · **Adults** (select: 1/2/3) ·
       **Children** (select: 0/1/2). Each select carries a `.select-arrow`
       (24px-wide full-height right-edge strip, `color: #2d343b`, content
       `'\279C'` ➜ rotated 90° to point down).
    6. `.form-btn` → **button.submit-btn "Check availability"** — NOT full
       width: `color: #1c2126; background-color: #f7c411; font-weight: 700;
height: 50px; border: none; padding: 0 50px` (left-aligned pill-ish
       button; screenshot shows it occupying only ~25% of card width).
  - Each field is `.form-group` — `position: relative; margin-bottom: 30px`.
    Inside: the control + `<span class="form-label">` (floating label);
    selects also carry `<span class="select-arrow">`.
  - **Floating-label behavior (JS, `floatedLabel()`):** on input/focus the
    group toggles `.input-not-empty`. At rest the label sits INSIDE the field
    (`top: 15px; left: 20px`), styled as the placeholder: uppercase, weight
    700, 16px, `color: #2d343b` (the card color — reads as mid-gray on the
    darker field), and the control's own text is `color: transparent` until
    filled/focused. When the group has `.input-not-empty` (or the control is
    focused), the label FLOATS ABOVE the field: `top: -10px; color: #fff;
font-size: 14px` — i.e. white small caps sitting on the card just above
    the field's top edge, while the value shows in white inside.
  - NO navbar, NO footer, NO other content sections — a one-section form demo
    (page ends with only the gtag GA script). NO custom media query in the
    source CSS — the ≤768px responsive behavior comes entirely from
    Bootstrap's `col-md-*` grid (rows collapse to full-width stacked fields).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section on a plain WHITE page;
     content vertically centered via `.section-center`.
  2. `.booking-form` — centered SOLID-CHARCOAL card (max-width 642px, no
     radius, padding 0 40px 40px): full-bleed darker `.form-header` band with
     left-aligned h1 "Book Your Flight" (white, 38px, 700, capitalize) →
     flight-type radios (Roundtrip / One way / Multi-City) → Flying from →
     Flying to → Check In / Check Out → Travel class / Adults / Children →
     left-aligned "Check availability" button.
  3. No footer, no other content sections (single-section demo).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-9.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** a single FLAT dark-charcoal
  card centered on a plain WHITE page. The card's top band is slightly darker
  (`#1a1f24`) and holds a bold white LEFT-aligned headline "Book Your Flight".
  Fields are near-black (`#1c2126`) with sharp corners; at rest each field
  shows its uppercase mid-gray label inside as placeholder text; once filled,
  the label jumps to small white caps ABOVE the field and the white value
  appears inside. The selected Roundtrip radio shows a mustard-yellow
  (`#f7c411`) ring + dot; the left-aligned "Check availability" button is
  mustard-yellow with near-black text. High-contrast, minimal, no imagery —
  a utilitarian airline booking widget.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand colors: **`#f7c411`** (mustard yellow — radio checked border + dot,
    and the "Check availability" `.submit-btn` background) and **`#1c2126`**
    (near-black — field backgrounds, radio circle fill, button text). Neutral
    charcoal stack: **`#2d343b`** (card background + resting label color +
    select-arrow color) and **`#1a1f24`** (header band background, darker than
    the card).
  - Section: `#booking` height **100vh**, `font-family: 'Montserrat',
sans-serif`; page background = default WHITE (no page photo). No
    navbar/footer.
  - Card (`.booking-form`): `max-width: 642px; width: 100%; margin: auto;
padding: 0 40px 40px; background: #2d343b`. **No border-radius, no
    box-shadow** (flat rectangle).
  - Header band (`.form-header`): `padding: 40px; margin: 0 -40px 30px;
background: #1a1f24` (full-bleed across the card). Headline
    (`.form-header h1`): **'Montserrat' 700**, `text-transform: capitalize`,
    **38px**, `margin: 0`, `color: #fff`, LEFT-aligned.
  - Fields (`.form-control`): **`background-color: #1c2126`**, **`height:
50px`**, `padding: 7px 20px 0`, `border: none`, **`border-radius: 0px`**
    (SHARP), `color: #fff`, no shadow. Empty/unfocused → `color: transparent`
    (only the label shows).
  - Labels (`.form-label`): at rest — `position: absolute; top: 15px; left:
20px; text-transform: uppercase; color: #2d343b; font-weight: 700;
line-height/height: 24px; font-size: 16px; pointer-events: none;
transition: 0.2s all` (INSIDE the field, acting as the placeholder).
    `.input-not-empty` or `:focus` → **floats ABOVE the field**: `top:
-10px; color: #fff; font-size: 14px`. (Label color at rest `#2d343b` is
    the card color, distinct from the darker `#1c2126` field — keep this
    contrast.)
  - Radios (`.form-checkbox`): inputs visually hidden (`margin-left:
-9999px; visibility: hidden`); each label has a 20×20px circle
    (`span`, `border: 2px solid #1c2126; background: #1c2126; border-radius:
50%`); checked → `border-color: #f7c411` + inner dot grows to 10×10px
    `background-color: #f7c411` (transition 0.2s). Labels: `color: #fff;
font-weight: 700; padding-top: 4px; padding-left: 30px`; `label + label
{ margin-left: 15px }`.
  - Selects: `select.form-control { -webkit-appearance: none; appearance:
none }`. `.select-arrow` — **24px-wide FULL-HEIGHT right-edge strip**:
    `position: absolute; right: 0; bottom: 0; width: 24px; height: 50px;
line-height: 50px; text-align: center; pointer-events: none; color:
#2d343b; font-size: 14px`; `::after` content `'\279C'` (➜ U+279C)
    `transform: rotate(90deg)` (points down). (NOT the floating 32×32 glyph
    of Dozely — this is a full-height strip like Restly's, but only 24px
    wide and dark `#2d343b`.)
  - Submit (`.submit-btn`): `color: #1c2126; background-color: #f7c411;
font-weight: 700; height: 50px; border: none; padding: 0 50px` — NOT
    full width, LEFT-aligned, no radius declared (screenshot shows slightly
    rounded appearance but source declares none — sharp is faithful; a tiny
    radius ≤ 4px is an acceptable faithful touch if it matches the render).
    No hover rule in source CSS (unlike Dozely's opacity-0.9).
  - Fonts: **'Montserrat', sans-serif** everywhere (section + fields +
    headline), weights **400 and 700** (Google Fonts
    `family=Montserrat:wght@400;700`).
  - Radius family: **0px (sharp)** — card, fields, button all declare no
    radius; only the radio circles are 50%.
  - Grid rhythm: fields 50px tall; 30px vertical gap (`.form-group`
    margin-bottom 30px); card side padding 40px; header band 40px padding,
    30px bottom margin; rows 6/6 → 4/4/4.
  - Responsive: Bootstrap `col-md-*` grid only (below 768px rows stack
    full width; button keeps its intrinsic width).
- **KEY DIFFERENCES vs Wingly (Booking 5) — the closest sibling, do NOT
  merge:** Wingly is ALSO a flight set (Roundtrip/One way/Multi-City, Flying
  from/to, Departing/Returning, Travel class), but: WHITE `#fff` PILL fields
  (radius 40px, 65px tall, 2px `#dfe5e9` borders) over a page-level photo
  background, RED `#f23e3e` accents, PT Sans 400, STATIC white 12px uppercase
  labels ABOVE the fields, no headline, full-width red pill button. Soarly =
  SOLID-CHARCOAL flat card on a WHITE page, near-black SHARP fields, MUSTARD
  `#f7c411` accents, Montserrat 400/700, FLOATING labels (mid-gray inside at
  rest → white caps above the field when filled), "Book Your Flight" headline
  inside the card, left-aligned non-full-width button.
- **KEY DIFFERENCES vs Dozely (Booking 8) — do NOT merge:** Dozely = hotel
  set, photo INSIDE card + `rgba(0,0,0,0.7)` overlay, ORANGE `#ff8846`/
  `#e35e0a`, Raleway, translucent `rgba(255,255,255,0.2)` PILL fields, orange
  labels floating INSIDE the field (top 10px), centered headline, full-width
  button with hover opacity. Soarly = flight set, SOLID charcoal card (no
  photo), MUSTARD `#f7c411`/`#1c2126`, Montserrat, near-black SHARP fields,
  labels that float ABOVE the field (top -10px), left-aligned headline +
  button.
- **KEY DIFFERENCES vs Sleeply (Booking 7) — do NOT merge:** Sleeply = solid
  WHITE card, navy `#184c8f`, light-gray `#f2f1f1` fields, labels BELOW the
  fields, page-level daytime skyline photo, no headline. Soarly = solid
  CHARCOAL card, mustard `#f7c411`, near-black fields, floating-above labels,
  white page, headline inside card.
- **Family palette check (2026-08-09):** mustard `#f7c411` is unique in the
  family (yellows elsewhere: Ridely/Drivly `#ffc600`, Guestly `#ff9000`; the
  rest are oranges/reds/navy). Keep exact. (Family mapping: 1→Reservly,
  2→Coastly, 3→Nestly, 4→Drivly, 5→Wingly, 6→Restly, 7→Sleeply, 8→Dozely,
  9→**Soarly**, 10→Roomzy, 11→Roostly, 12→Stayly, 13→Ridely, 14→Triply,
  15→Innly, 16→Lodgely, 17→Hostly, 18→Guestly, 19→Skyly, 20→Bookly.)
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; page background = white;
  card = SOLID `#2d343b` (NO photo — this variant has no imagery, so NO
  picsum needed for the card); fields `#1c2126` sharp 50px; floating labels
  as real `<label htmlFor>` elements: mid-gray `#2d343b` uppercase 16px 700
  INSIDE the field at rest (control text transparent), floating to white
  14px caps ABOVE the field (`top: -10px`) when the control has a value or is
  focused — date labels follow the same rule (they always have a value once
  the native picker is touched; source gives dates no special always-visible
  rule, unlike Dozely — keep the same behavior for all fields); flight-type
  radios as custom circles (visually hidden native inputs + styled spans,
  20px, `#1c2126` fill, checked → `#f7c411` border + 10px dot); selects
  `appearance:none` + 24px-wide FULL-HEIGHT right-edge arrow strip
  (`#2d343b`, lucide ChevronDown or rotated ➜, pointer-events-none — NOT
  Dozely's floating 32×32 glyph); "Check availability" button LEFT-aligned
  (NOT full width), `#f7c411` bg, `#1c2126` text, 700, 50px height, padding
  0 50px, no hover rule; Montserrat 400/700 via Google Fonts `<link>` in
  `index.html`; document title "Soarly — Flight Booking Template"; brand
  "Booking"/"Colorlib Booking" → "Soarly" everywhere. The "Check
  availability" button validates the form (flying-from, flying-to required;
  dates optional in source — keep required: flying-from/flying-to, dates,
  selects defaulted) and reveals a summary line (flight type · from → to ·
  dates · travel class · adults · children) — the original demo is static,
  so this minimal interactive behavior is a documented recreation choice,
  kept in a pure exported function for 100%-coverage tests. Source copy kept
  verbatim: "Book Your Flight", "Roundtrip", "One way", "Multi-City",
  "Flying from", "Flying to", "Check In", "Check Out", "Travel class",
  "Economy class"/"Business class"/"First class", "Adults", "Children",
  "Check availability".

Soarly lives in `apps/soarly` (package `@free-react-templates/soarly`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with white page

The system SHALL render a full-viewport (100vh) flight booking section on a
plain white page, vertically centering the booking card. The page SHALL NOT
render any navbar, hero chrome, or footer (single-section form demo).

#### Scenario: Full-viewport section with centered card

- **GIVEN** the Soarly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown on a
  plain white background
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar, hero chrome, or a
  footer

### Requirement: Solid charcoal booking card

The system SHALL render the booking card centered with a maximum width of
642px, 40px side padding, 40px bottom padding, a solid `#2d343b` charcoal
background, and no corner radius or shadow (flat rectangle). The card SHALL
NOT use any background photograph.

#### Scenario: Card appearance

- **GIVEN** the Soarly page is rendered
- **WHEN** the booking card is displayed
- **THEN** the card SHALL be centered with a maximum width of 642px and 40px
  side padding
- **AND** the card SHALL have a solid `#2d343b` background with no background
  image
- **AND** the card SHALL have no corner radius and no box shadow

### Requirement: Full-bleed header band with headline

The system SHALL render a full-bleed darker header band (`#1a1f24`, 40px
padding, 30px bottom margin) at the top of the card containing a left-aligned
white headline "Book Your Flight" in Montserrat 700, 38px, capitalized.

#### Scenario: Header content and styling

- **GIVEN** the Soarly page is rendered
- **WHEN** the card is displayed
- **THEN** a darker band (`#1a1f24`) SHALL span the full width of the card at
  its top, with 40px padding and a 30px bottom margin
- **AND** a level-1 heading reading "Book Your Flight" SHALL be shown,
  left-aligned inside the band
- **AND** the heading SHALL be white, in the Montserrat font at weight 700,
  38px, with capitalized letter casing

### Requirement: Sharp dark fields

The system SHALL render every field as a 50px-tall near-black (`#1c2126`)
field with NO border and NO corner radius, white value text, and a
`#2d343b`-colored uppercase label acting as placeholder text inside the field
at rest (16px, weight 700). Empty unfocused fields SHALL show the label
instead of the value.

#### Scenario: Field styling

- **GIVEN** the Soarly page is rendered
- **WHEN** the form fields are displayed
- **THEN** every field SHALL have a `#1c2126` background, 50px height, no
  border, and no corner radius
- **AND** an empty unfocused field SHALL show its label text (uppercase,
  `#2d343b`, 16px, weight 700) inside the field as its placeholder
- **AND** a filled or focused field SHALL show its value in white

### Requirement: Floating field labels

The system SHALL render a real `<label>` for each control that floats ABOVE
the field (to `top: -10px`, turning white and 14px) when the control has a
value or is focused, and otherwise sits inside the field at `top: 15px; left:
20px` in `#2d343b` uppercase 16px weight 700.

#### Scenario: Label at rest inside the field

- **GIVEN** an empty, unfocused field of the form is displayed
- **WHEN** the field has no value and no focus
- **THEN** the label SHALL sit inside the field, 15px from its top and 20px
  from its left, in `#2d343b`, uppercase, 16px, weight 700
- **AND** the label SHALL be a real `<label>` associated with the control via
  `htmlFor`/`id`

#### Scenario: Label floats above the field when filled or focused

- **GIVEN** any control of the form
- **WHEN** the control has a value or receives focus
- **THEN** the label SHALL move above the field (top `-10px` relative to the
  field group)
- **AND** the label SHALL become white and 14px
- **AND** the control's value SHALL be visible inside the field in white

### Requirement: Flight-type radio group

The system SHALL render three custom circular radios — Roundtrip, One way,
Multi-City — each with an uppercase white weight-700 label and a 20×20px
circle that fills `#1c2126` and shows a `#f7c411` border and 10px `#f7c411`
dot when checked. The native inputs SHALL be visually hidden.

#### Scenario: Radio options and checked styling

- **GIVEN** the Soarly page is rendered
- **WHEN** the form is displayed
- **THEN** three radio options SHALL be shown: "Roundtrip", "One way", and
  "Multi-City", each with an uppercase white weight-700 label
- **AND** each option SHALL show a 20×20px circular indicator with a
  `#1c2126` fill
- **AND** the selected option's indicator SHALL show a `#f7c411` border and a
  10×10px `#f7c411` dot
- **AND** the underlying native radio inputs SHALL be visually hidden but
  accessible

### Requirement: Flying from and Flying to fields

The system SHALL render "Flying from" and "Flying to" as full-width text
inputs at the top of the form, each with its floating label.

#### Scenario: Route fields

- **GIVEN** the Soarly page is rendered
- **WHEN** the form is displayed
- **THEN** a text input labelled "Flying from" SHALL be shown, spanning the
  full width of the card
- **AND** a text input labelled "Flying to" SHALL be shown, spanning the full
  width of the card below it

### Requirement: Check In and Check Out date fields

The system SHALL render Check In and Check Out as native date inputs side by
side, each occupying 6 of 12 columns.

#### Scenario: Date fields

- **GIVEN** the Soarly page is rendered
- **WHEN** the form is displayed
- **THEN** a date input labelled "Check In" SHALL be shown
- **AND** a date input labelled "Check Out" SHALL be shown
- **AND** the two date fields SHALL sit side by side on ≥768px, each
  occupying 6 of 12 columns

### Requirement: Travel class, Adults and Children selects

The system SHALL render Travel class (Economy class / Business class / First
class), Adults (1/2/3) and Children (0/1/2) as selects in a single row
(4/12 each) with native appearance removed and a 24px-wide full-height arrow
strip at the right edge of each in `#2d343b`.

#### Scenario: Select options and layout

- **GIVEN** the Soarly page is rendered
- **WHEN** the form is displayed
- **THEN** a select labelled "Travel class" SHALL be shown with options
  "Economy class", "Business class", and "First class"
- **AND** a select labelled "Adults" SHALL be shown with options 1, 2, 3
- **AND** a select labelled "Children" SHALL be shown with options 0, 1, 2
- **AND** the three selects SHALL sit side by side on ≥768px, each occupying
  4 of 12 columns
- **AND** each select SHALL have native appearance removed and a 24px-wide
  full-height arrow indicator at its right edge in `#2d343b` that does not
  intercept clicks

### Requirement: "Check availability" submit button

The system SHALL render a left-aligned (NOT full-width) "Check availability"
button with a `#f7c411` background, `#1c2126` weight-700 text, 50px height
and 0–50px horizontal padding, with no hover rule. The button SHALL validate
required fields and show a summary.

#### Scenario: Button styling

- **GIVEN** the Soarly page is rendered
- **WHEN** the form is displayed
- **THEN** a button reading "Check availability" SHALL be shown, left-aligned
  and NOT spanning the full width of the card
- **AND** the button SHALL have a `#f7c411` background with `#1c2126`
  weight-700 text and 50px height
- **AND** the button SHALL have no hover opacity change

#### Scenario: Validation and summary

- **GIVEN** the user has not filled a required field (flying-from or
  flying-to)
- **WHEN** the user activates "Check availability"
- **THEN** the form SHALL NOT submit
- **AND** the user SHALL see which required fields are missing
- **GIVEN** the required fields are filled
- **WHEN** the user activates "Check availability"
- **THEN** a summary line SHALL be shown with the flight type, route, dates,
  travel class, adults, and children values

### Requirement: Mobile stacking

The system SHALL stack every multi-column row full width below 768px, keeping
the button at its intrinsic width.

#### Scenario: Responsive layout

- **GIVEN** the Soarly page is rendered on a viewport narrower than 768px
- **WHEN** the form is displayed
- **THEN** Check In/Check Out and Travel class/Adults/Children SHALL stack to
  full-width fields
- **AND** the "Check availability" button SHALL keep its intrinsic width

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-soarly`
- [ ] `scripts/verify-app.sh soarly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport white section (100vh, vertically
      centered content) → centered SOLID-CHARCOAL card (max-width 642px, no
      radius, no shadow, padding 0 40px 40px, background `#2d343b`) with
      full-bleed darker header band (`#1a1f24`, 40px padding, 30px bottom
      margin) + left-aligned h1 "Book Your Flight" (Montserrat 700, white,
      38px, capitalize) → flight-type radios (Roundtrip / One way /
      Multi-City) → Flying from → Flying to → Check In / Check Out (6/6) →
      Travel class / Adults / Children (4/4/4) → left-aligned "Check
      availability" button; NO navbar, NO hero chrome, NO footer
      (single-section demo)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#f7c411`
      (radio checked ring + dot, button background) and `#1c2126` (field
      backgrounds, radio fill, button text); neutrals `#2d343b` (card + rest
      label + select-arrow) and `#1a1f24` (header band)
- [ ] Card: page background WHITE (no page-level photo), card background
      SOLID `#2d343b` (NO photo, NO picsum needed for this variant)
- [ ] Fields: `#1c2126` bg, 50px height, borderless, SHARP (0 radius), white
      value text; empty unfocused → label shown as placeholder (no value
      text)
- [ ] Labels: real `<label htmlFor>` — at rest inside the field (`top 15px /
    left 20px`, `#2d343b`, uppercase 16px weight 700); floats ABOVE the
      field (`top -10px`, white, 14px) when the control has a value or is
      focused; same rule for date fields
- [ ] Radios: visually hidden native inputs + custom 20×20px circles
      (`#1c2126` fill), checked → `#f7c411` border + 10px `#f7c411` dot;
      labels uppercase white 700; `label + label` 15px gap
- [ ] Montserrat 400/700 via Google Fonts `<link>` in `index.html`
      (`family=Montserrat:wght@400;700`)
- [ ] Selects: Travel class (Economy/Business/First), Adults 1–3, Children
      0–2 — `appearance: none`, 24px-wide FULL-HEIGHT arrow strip at the
      right edge (`#2d343b`, pointer-events-none — NOT Dozely's floating
      32×32 glyph)
- [ ] "Check availability" button: LEFT-aligned, NOT full width, `#f7c411`
      bg, `#1c2126` weight-700 text, 50px height, padding 0 50px, NO hover
      rule; validates required fields (flying-from/flying-to) and shows a
      summary line / validation messages
- [ ] Source copy kept verbatim: "Book Your Flight", "Roundtrip", "One way",
      "Multi-City", "Flying from", "Flying to", "Check In", "Check Out",
      "Travel class", "Economy class" / "Business class" / "First class",
      "Adults", "Children", "Check availability"
- [ ] Mobile (<768px): all multi-column rows stack full width; button keeps
      intrinsic width
- [ ] Grid rhythm: fields 50px tall, 30px vertical gap between form groups,
      card side padding 40px, header band 40px padding + 30px bottom margin,
      rows 6/6 → 4/4/4
- [ ] Icons from lucide-react (select arrows), no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
