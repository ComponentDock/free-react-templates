# Template: Dozely (Booking Forms / Hotel Reservation Form)

## Purpose

Dozely is a single-page hotel reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V8" website template
(source: https://colorlib.com/wp/template/colorlib-booking-8/), built under a
DIFFERENT name (Dozely — "doze", a light sleep/nap, plus the friendly "-ly"
suffix, matching the Booking Forms family convention: Reservly, Coastly,
Roomzy, Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly,
Skyly, Bookly, Nestly, Drivly, Wingly, Restly, Sleeply; re-branded) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-8/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-skyly / template-stayly / template-roostly / template-roomzy /
> template-reservly / template-ridely / template-triply / template-innly /
> template-lodgely / template-hostly / template-guestly / template-coastly /
> template-bookly / template-nestly / template-drivly / template-wingly /
> template-restly / template-sleeply preps — the
> `preview.colorlib.com/assets/js/products.js` product map only covers new
> Astro-era templates). The LIVE PREVIEW button on the ColorLib template page
> resolves to `https://colorlib.com/etc/bforms/<slug>/` for the whole family.
> **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-8/` (HTTP 200, ~7.6 KB
> HTML + `css/style.css` ~3.6 KB + `css/bootstrap.min.css`), the card
> background photo (`img/background.jpg`, 900×675, fetched) was viewed in the
> browser, and the TEMPLATES.md screenshot (`colorlib-booking-8.jpg`, 1200×972,
> viewed in browser) matches the live render 1:1.** NOTE: this is the
> DARK-PHOTO-CARD variant with a DOUBLE-ORANGE accent (`#ff8846` focus ring +
> floating labels, `#e35e0a` submit button), Raleway typography, 40px PILL
> fields and the "Make your reservation" headline INSIDE the card — do NOT
> confuse it with Sleeply (Booking 7, the closest sibling: SOLID WHITE card,
> navy `#184c8f` label+button accent, light-gray `#f2f1f1` fields, Montserrat,
> labels BELOW the fields, daytime city skyline photo, NO headline) or Restly
> (Booking 6: NO card — translucent white sharp fields directly on a night
> cityscape photo, copper-brown `#8c5d28`, Imprima + Cantata One) or Wingly
> (Booking 5: same `rgba(0,0,0,0.7)` dark card + pill fields, but RED
> `#f23e3e`, PT Sans, static white labels ABOVE the fields, flight field set,
> no headline). Dozely is the dark-card, orange, Raleway, floating-label
> sibling with the resort-dusk photo inside the card.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V8" — free HOTEL / reservation
  ("Make your reservation", Destination, Check In / Check out, Rooms, Adults,
  Children, Email, Phone, "Book Now") booking-form widget template,
  Bootstrap-based (Booking Forms category, 22 templates in the family).
  Internal demo doc title: "Booking Form HTML Template". The recreation brands
  itself **Dozely** but keeps the same section structure, field set and copy
  kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-8/` (HTTP 200, ~7.6 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row` containing `.booking-form` (the
  card):
  - `#booking` — NO page-level background (white page); only
    `font-family: 'Raleway', sans-serif`. The PHOTO lives INSIDE the card.
  - `.booking-form` — the CARD: `max-width: 642px; width: 100%; margin:
auto; padding: 40px; overflow: hidden; background-image:
url('../img/background.jpg'); background-size: cover; border-radius:
5px; z-index: 20`. Its `::before` pseudo-element covers the whole card
    with **`background: rgba(0, 0, 0, 0.7)`** (dark overlay scrim).
  - `.form-header` — `text-align: center; margin-bottom: 30px`; `h1`
    **"Make your reservation"** — `font-weight: 700; text-transform:
capitalize; font-size: 42px; margin: 0; color: #fff`. The headline is
    INSIDE the card (unlike Restly's outside-headline).
  - `<form>` contents, in order:
    1. **Destination** — text input, full width, placeholder "Country, ZIP,
       city...", label "Destination".
    2. Row (`col-md-6` + `col-md-6`): **Check In** (date, `required`) ·
       **Check out** (date, `required`).
    3. Row (`col-md-4` × 3): **Rooms** (select, hidden placeholder option
       "no of rooms", options 1/2/3) · **Adults** (select, "no of adults",
       options 1/2/3) · **Children** (select, "no of children", options
       0/1/2).
    4. Row (`col-md-6` + `col-md-6`): **Email** (email input, placeholder
       "Enter your Email") · **Phone** (tel input, placeholder "Enter you
       Phone" — source typo "you", keep verbatim).
    5. `.form-btn` → **button.submit-btn "Book Now"** (full width).
  - Each field is `.form-group` — `position: relative; margin-bottom: 30px`.
    Inside: the control + `<span class="form-label">` (floating label);
    selects also carry `<span class="select-arrow">`.
  - NO navbar, NO footer, NO other content sections — a one-section form demo
    (page ends with only the gtag GA script). NO custom media query in the
    source CSS — the ≤768px responsive behavior comes entirely from
    Bootstrap's `col-md-*` grid (rows collapse to full-width stacked fields).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section on a WHITE page;
     content vertically centered via `.section-center`.
  2. `.booking-form` — centered dark photo CARD (max-width 642px, radius 5px,
     padding 40px, `rgba(0,0,0,0.7)` overlay): `.form-header` h1 "Make your
     reservation" (white, 42px, 700, capitalize, centered, 30px bottom
     margin) → Destination → Check In / Check out → Rooms / Adults / Children
     → Email / Phone → "Book Now" button.
  3. No footer, no other content sections (single-section demo).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-8.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** a single rounded card
  (subtle lift/shadow) centered on a plain WHITE page. The card's background
  photo is a **TROPICAL RESORT AT DUSK** ("blue hour"): a multi-story
  hotel/resort building complex with warm golden lights spilling from
  windows, a calm swimming pool reflecting the light, palm trees and lush
  foliage, deep blue-purple twilight sky — darkened by the `rgba(0,0,0,0.7)`
  overlay. Inside: centered bold white headline "Make Your Reservation"
  (capitalized), then a tight grid of dark translucent PILL-shaped fields
  (fully rounded ends) with white text and small orange floating labels; the
  bottom row holds a full-width bright-orange pill **"BOOK NOW"** button.
  Warm orange accents (`#ff8846` label/focus + `#e35e0a` button) over a cool
  dusk-photo card = cozy, upscale resort booking widget. (The screenshot
  appears to show small glyphs at the left of some fields, but the reference
  DOM/CSS contain NO icons — fields are plain controls with placeholder
  text only; do not invent icons.)
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand colors: **`#ff8846`** (orange — `.form-label` text + focus ring
    `box-shadow: 0 0 0 2px #ff8846`) and **`#e35e0a`** (deep orange — the
    "Book Now" `.submit-btn` background; button text `#fff`). Two-tone
    orange accent family.
  - Section: `#booking` height **100vh**, `font-family: 'Raleway',
sans-serif`; page background = default WHITE (no page photo). No
    navbar/footer.
  - Card (`.booking-form`): `max-width: 642px; width: 100%; margin: auto;
padding: 40px; overflow: hidden; background-image:
url('../img/background.jpg')` (resort dusk photo 900×675), `background-size:
cover`, **`border-radius: 5px`**, `z-index: 20`; `::before` overlay
    **`rgba(0, 0, 0, 0.7)`** (top/right/bottom/left 0, `z-index: -1`).
  - Headline (`.form-header h1`): **'Raleway' 700**, `text-transform:
capitalize`, **42px**, `margin: 0`, `color: #fff`, centered;
    `.form-header { text-align: center; margin-bottom: 30px }`.
  - Fields (`.form-control`): **`background: rgba(255, 255, 255, 0.2)`**
    (translucent white over the dark overlay), **`height: 60px`**, `padding:
0 25px`, `border: none`, **`border-radius: 40px`** (PILL), `color: #fff`,
    `box-shadow: 0 0 0 2px transparent`; **focus → `box-shadow: 0 0 0 2px
#ff8846`** (orange ring), `transition: 0.2s`. Placeholder / empty-date
    color: **`rgba(255, 255, 255, 0.5)`**. `input[type="date"].form-control`
    gets `padding-top: 16px` (date text baseline) and `.form-control:invalid`
    shows the 50% white.
  - Labels (`.form-label`): **FLOATING** — `position: absolute; top: -10px;
left: 25px; opacity: 0; color: #ff8846; font-size: 11px; font-weight:
700; text-transform: uppercase; letter-spacing: 1.3px; height/line-height:
15px; transition: 0.2s all`. When the group has `.input-not-empty` (JS
    toggles it once a text/select control has a value): `opacity: 1; top:
10px`. **Date inputs are different**: `input[type="date"].form-control +
.form-label { opacity: 1; top: 10px }` — date labels are ALWAYS visible
    (dates are always "filled" by the control).
  - Selects: `select.form-control { -webkit-appearance: none; appearance:
none }`; `select.form-control option { color: #000 }`. `.select-arrow` —
    `position: absolute; right: 15px; top: 50%; transform: translateY(-50%);
width/height/line-height: 32px; text-align: center; pointer-events: none;
color: rgba(255, 255, 255, 0.5); font-size: 14px` — a FLOATING 32×32
    glyph at the right edge (NOT a full-height strip like Restly); `::after`
    content `'\279C'` (➜ U+279C) `transform: rotate(90deg)` (points down).
  - Submit (`.submit-btn`): `color: #fff; background-color: #e35e0a;
font-weight: 700; height: 60px; padding: 10px 30px; width: 100%;
border-radius: 40px; border: none; text-transform: uppercase; font-size:
16px; letter-spacing: 1.3px`; **hover/focus → `opacity: 0.9`** (the only
    hover rule in this family's source CSS).
  - Fonts: **'Raleway', sans-serif** everywhere (section + fields + headline),
    weights **400 and 700** (Google Fonts `family=Raleway:wght@400;700`).
  - Radius family: **40px pills** for fields and button; **5px** for the
    card. Card shows a subtle lift in the screenshot; `style.css` declares no
    box-shadow (a soft `box-shadow` is an acceptable faithful touch).
  - Grid rhythm: fields 60px tall; 30px vertical gap between form groups
    (margin-bottom 30px); card padding 40px; rows 6/6, 4/4/4, 6/6.
  - Responsive: Bootstrap `col-md-*` grid only (below 768px rows stack
    full width; button stays full width).
- **KEY DIFFERENCES vs Sleeply (Booking 7) — the closest sibling, do NOT
  merge:** Sleeply = SOLID WHITE card (`#fff` background, no photo, no
  overlay) with NAVY-BLUE `#184c8f` label + button, LIGHT-GRAY `#f2f1f1`
  fields, Montserrat typography, labels BELOW the fields (with a small
  field-gray connector triangle), daytime city skyline PHOTO as the page
  background, NO headline. Dozely = DARK card (resort-dusk photo INSIDE the
  card + `rgba(0,0,0,0.7)` overlay), DOUBLE-ORANGE `#ff8846`/`#e35e0a`
  accents, Raleway, translucent `rgba(255,255,255,0.2)` PILL fields with
  orange FLOATING labels inside the fields, "Make your reservation" headline
  inside the card, white page background.
- **KEY DIFFERENCES vs Wingly (Booking 5) — do NOT merge:** Wingly also uses
  a dark translucent `rgba(0,0,0,0.7)` card + pill fields, but: RED `#f23e3e`
  accent, PT Sans, static white uppercase labels ABOVE the fields, flight
  field set (Roundtrip/One way/Multi-City, Flying from/to, Departing/
  Returning, Travel class), no headline. Dozely = ORANGE `#ff8846`/`#e35e0a`,
  Raleway, FLOATING orange labels inside the fields, hotel field set,
  headline inside the card.
- **KEY DIFFERENCES vs Restly (Booking 6) — do NOT merge:** Restly = NO card
  (translucent WHITE `rgba(255,255,255,0.85)` SHARP 0-radius fields directly
  on a night-cityscape page photo, no scrim), copper-brown `#8c5d28` inset
  FIXED labels, Imprima + Cantata One, centered serif headline OUTSIDE the
  form. Dozely = DARK photo CARD with 0.7 overlay, orange accents, Raleway,
  40px pills, floating labels, sans headline INSIDE the card.
- **Family palette check (2026-08-09):** orange accents in the family:
  Guestly `#ff9000`, Ridely/Drivly `#ffc600`, Roostly `#ff0063`, Wingly
  `#f23e3e` — Dozely's `#ff8846` + `#e35e0a` are the warm-orange pair, keep
  exact. (Family mapping: 1→Reservly, 2→Coastly, 3→Nestly, 4→Drivly, 5→Wingly,
  6→Restly, 7→Sleeply, 8→**Dozely**, 10→Roomzy, 11→Roostly, 12→Stayly,
  13→Ridely, 14→Triply, 15→Innly, 16→Lodgely, 17→Hostly, 18→Guestly, 19→Skyly,
  20→Bookly; 9 still un-prepped.)
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; page background = white;
  card background = seeded picsum placeholder
  (`picsum.photos/seed/dozely-1/900/675`; the source `background.jpg` resort
  photo must not be copied) with `cover`/`center` + an `rgba(0,0,0,0.7)`
  overlay covering the card; date inputs are native `<input type="date">`
  styled with Tailwind (no datepicker dependency); Rooms/Adults/Children are
  native `<select>`s with `appearance: none` + a FLOATING 32×32 arrow glyph
  at the right edge (lucide ChevronDown or rotated `➜`, `rgba(255,255,255,0.5)`,
  14px, pointer-events-none — NOT Restly's full-height strip); labels are real
  `<label htmlFor>` elements that FLOAT: hidden (`opacity-0`, above the
  field) until the control has a value, then `opacity-100 top-2.5` in
  `#ff8846` 11px uppercase letter-spacing 1.3px — date labels always visible
  (dates are always filled); body in Raleway 400/700 via Google Fonts
  `<link>` in `index.html`; document title "Dozely — Hotel Booking Template";
  brand "Booking"/"Colorlib Booking" → "Dozely" everywhere. The "Book Now"
  button validates the form (destination, check-in, check-out required;
  rooms/adults/children defaulted) and reveals a summary line (destination ·
  rooms/adults/children · dates · email/phone) — the original demo is static,
  so this minimal interactive behavior is a documented recreation choice, kept
  in a pure exported function for 100%-coverage tests. Source copy kept
  verbatim: "Make your reservation", "Country, ZIP, city...", "Check In",
  "Check out", "no of rooms" / "no of adults" / "no of children", "Enter your
  Email", "Enter you Phone" (source typo — keep), "Book Now".

Dozely lives in `apps/dozely` (package `@free-react-templates/dozely`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport reservation section with white page

The system SHALL render a full-viewport (100vh) reservation section on a
plain white page, vertically centering the booking card. The page SHALL NOT
render any navbar, hero chrome, or footer (single-section form demo).

#### Scenario: Full-viewport section with centered card

- **GIVEN** the Dozely page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown on a
  plain white background
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar, hero chrome, or a
  footer

### Requirement: Dark photo card with overlay

The system SHALL render the booking card centered with a maximum width of
642px, 40px padding, 5px corner radius, and a cover-positioned photograph as
its background, dimmed by a `rgba(0, 0, 0, 0.7)` overlay that covers the
whole card.

#### Scenario: Card appearance

- **GIVEN** the Dozely page is rendered
- **WHEN** the booking card is displayed
- **THEN** the card SHALL be centered with a maximum width of 642px and 40px
  padding
- **AND** the card SHALL show a full-bleed cover-positioned photograph
  (`picsum.photos/seed/dozely-1/900/675`) as its background with a 5px corner
  radius
- **AND** the card SHALL be dimmed by a `rgba(0, 0, 0, 0.7)` overlay covering
  its entire area

### Requirement: Centered headline inside the card

The system SHALL render a centered white headline "Make your reservation"
inside the card, above the form: Raleway 700, 42px, capitalized, with a 30px
bottom margin.

#### Scenario: Headline content and styling

- **GIVEN** the Dozely page is rendered
- **WHEN** the card is displayed
- **THEN** a level-1 heading reading "Make your reservation" SHALL be shown,
  centered at the top of the card
- **AND** the heading SHALL be white, in the Raleway font at weight 700, 42px,
  with capitalized letter casing
- **AND** the heading SHALL have a 30px bottom margin

### Requirement: Translucent pill fields

The system SHALL render every field as a 60px-tall translucent white pill
(background `rgba(255, 255, 255, 0.2)`, 40px corner radius, no border) with
white text, 50%-white placeholder text, and a 2px `#ff8846` focus ring.

#### Scenario: Field styling

- **GIVEN** the Dozely page is rendered
- **WHEN** the form fields are displayed
- **THEN** every field SHALL have a `rgba(255, 255, 255, 0.2)` background,
  60px height, 40px (pill) corner radius, and no border
- **AND** every field SHALL show its value in white
- **AND** an empty field SHALL show its placeholder (and an empty date field's
  value) at `rgba(255, 255, 255, 0.5)`
- **AND** a focused field SHALL show a 2px `#ff8846` focus ring and no other
  border change

### Requirement: Floating field labels

The system SHALL render a small orange label inside the top-left of each
field that floats: hidden (above the field, `opacity 0`) until the control
has a value, then visible at `top: 10px` — in `#ff8846`, 11px, weight 700,
uppercase, 1.3px letter-spacing. Date-field labels SHALL always be visible.

#### Scenario: Label visibility and styling

- **GIVEN** any field of the form is displayed
- **WHEN** the field is empty
- **THEN** its label SHALL be hidden (opacity 0, positioned above the field's
  top edge)
- **AND** the label SHALL be a real `<label>` associated with the control via
  `htmlFor`/`id`

#### Scenario: Label shown when the field has a value

- **GIVEN** a text input or select of the form
- **WHEN** the control has a value
- **THEN** its label SHALL become visible at the top inside the field
- **AND** the label SHALL be `#ff8846`, 11px, weight 700, uppercase, with
  1.3px letter-spacing

#### Scenario: Date labels always visible

- **GIVEN** a date input of the form
- **WHEN** the form is displayed
- **THEN** its label SHALL always be visible at the top inside the field,
  regardless of whether a date is selected

### Requirement: Destination field

The system SHALL render the Destination text input full width at the top of
the form with placeholder "Country, ZIP, city...".

#### Scenario: Destination field content

- **GIVEN** the Dozely page is rendered
- **WHEN** the form is displayed
- **THEN** a text input labelled "Destination" SHALL be shown, spanning the
  full width of the card
- **AND** the input SHALL show the placeholder "Country, ZIP, city..."

### Requirement: Check-in and check-out date fields

The system SHALL render Check In and Check out as required native date inputs
side by side, each occupying 6 of 12 columns.

#### Scenario: Date fields

- **GIVEN** the Dozely page is rendered
- **WHEN** the form is displayed
- **THEN** a date input labelled "Check In" SHALL be shown, marked required
- **AND** a date input labelled "Check out" SHALL be shown, marked required
- **AND** the two date fields SHALL sit side by side on ≥768px, each
  occupying 6 of 12 columns

### Requirement: Rooms, Adults and Children selects

The system SHALL render Rooms (options 1, 2, 3), Adults (options 1, 2, 3) and
Children (options 0, 1, 2) as selects in a single row (4/12 each) with native
appearance removed, hidden placeholder options ("no of rooms", "no of adults",
"no of children") and a floating arrow glyph at the right edge of each.

#### Scenario: Select options and layout

- **GIVEN** the Dozely page is rendered
- **WHEN** the form is displayed
- **THEN** a select labelled "Rooms" SHALL be shown with a hidden placeholder
  "no of rooms" and options 1, 2, 3
- **AND** a select labelled "Adults" SHALL be shown with a hidden placeholder
  "no of adults" and options 1, 2, 3
- **AND** a select labelled "Children" SHALL be shown with a hidden
  placeholder "no of children" and options 0, 1, 2
- **AND** the three selects SHALL sit side by side on ≥768px, each occupying
  4 of 12 columns
- **AND** each select SHALL have native appearance removed and a 32px arrow
  glyph (e.g. a downward chevron) at its right edge in
  `rgba(255, 255, 255, 0.5)` that does not intercept clicks

### Requirement: Email and Phone fields

The system SHALL render Email and Phone side by side (6/12 each) with
placeholders "Enter your Email" and "Enter you Phone".

#### Scenario: Contact fields

- **GIVEN** the Dozely page is rendered
- **WHEN** the form is displayed
- **THEN** an email input labelled "Email" SHALL be shown with the placeholder
  "Enter your Email"
- **AND** a phone input labelled "Phone" SHALL be shown with the placeholder
  "Enter you Phone"
- **AND** the two fields SHALL sit side by side on ≥768px, each occupying 6 of
  12 columns

### Requirement: "Book Now" submit button

The system SHALL render a full-width pill "Book Now" button in `#e35e0a` with
white uppercase 16px weight-700 text, 1.3px letter-spacing, 60px height, and
an opacity-0.9 hover state. The button SHALL validate required fields and show
a summary.

#### Scenario: Button styling

- **GIVEN** the Dozely page is rendered
- **WHEN** the form is displayed
- **THEN** a button reading "Book Now" SHALL be shown, spanning the full width
  of the card
- **AND** the button SHALL have a `#e35e0a` background, white uppercase 16px
  weight-700 text, 1.3px letter-spacing, 60px height, and a 40px (pill)
  corner radius
- **AND** hovering or focusing the button SHALL reduce its opacity to 0.9

#### Scenario: Validation and summary

- **GIVEN** the user has not filled a required field (destination, check-in,
  or check-out)
- **WHEN** the user activates "Book Now"
- **THEN** the form SHALL NOT submit
- **AND** the user SHALL see which required fields are missing
- **GIVEN** the required fields are filled
- **WHEN** the user activates "Book Now"
- **THEN** a summary line SHALL be shown with the destination, rooms/adults/
  children, dates, and contact values

### Requirement: Mobile stacking

The system SHALL stack every multi-column row full width below 768px, keeping
the button full width.

#### Scenario: Responsive layout

- **GIVEN** the Dozely page is rendered on a viewport narrower than 768px
- **WHEN** the form is displayed
- **THEN** Check In/Check out, Rooms/Adults/Children, and Email/Phone SHALL
  stack to full-width fields
- **AND** the "Book Now" button SHALL remain full width

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-dozely`
- [ ] `scripts/verify-app.sh dozely` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport white section (100vh, vertically
      centered content) → centered dark photo CARD (max-width 642px, radius
      5px, padding 40px, `rgba(0,0,0,0.7)` overlay) with h1 "Make your
      reservation" (Raleway 700, white, 42px, capitalize, centered, 30px
      bottom margin) → Destination (full width) → Check In / Check out (6/6)
      → Rooms / Adults / Children (4/4/4) → Email / Phone (6/6) → "Book Now"
      button (full width); NO navbar, NO hero chrome, NO footer
      (single-section demo)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#ff8846` (floating
      labels + focus ring) and `#e35e0a` ("Book Now" button background)
- [ ] Card: page background WHITE (no page-level photo); card background =
      seeded picsum `dozely-1/900/675` cover/center + `rgba(0,0,0,0.7)`
      overlay (source `background.jpg` resort-dusk photo not copied)
- [ ] Fields: `rgba(255,255,255,0.2)` bg, 60px height, 40px pill radius,
      borderless, white text, placeholder/empty-date `rgba(255,255,255,0.5)`,
      focus ring 2px `#ff8846`
- [ ] Labels: real `<label htmlFor>` FLOATING inside each field — hidden
      (opacity 0, above top edge) until the control has a value, then visible
      at top; `#ff8846`, 11px, weight 700, uppercase, letter-spacing 1.3px;
      DATE labels always visible; never invent icons/glyphs inside fields
- [ ] Raleway 400/700 via Google Fonts `<link>` in `index.html`
      (`family=Raleway:wght@400;700`)
- [ ] Selects: Rooms 1–3, Adults 1–3, Children 0–2 — hidden placeholder
      options ("no of rooms"/"no of adults"/"no of children"), `appearance:
    none`, FLOATING 32×32 arrow glyph at the right edge
      (`rgba(255,255,255,0.5)`, 14px, pointer-events-none — NOT Restly's
      full-height strip)
- [ ] "Book Now" button: solid `#e35e0a` bg, white uppercase 16px weight-700
      text, 1.3px letter-spacing, 60px height, full width, pill radius, hover/
      focus opacity 0.9; validates required fields (destination/check-in/
      check-out) and shows a summary line / validation messages
- [ ] Source copy kept verbatim: "Make your reservation", "Country, ZIP,
      city...", "Check In", "Check out", "no of rooms" / "no of adults" /
      "no of children", "Enter your Email", "Enter you Phone" (source typo),
      "Book Now"
- [ ] Mobile (<768px): all multi-column rows stack full width; button stays
      full width
- [ ] Grid rhythm: fields 60px tall, 30px vertical gap between form groups,
      card padding 40px, rows 6/6 → 4/4/4 → 6/6
- [ ] Placeholder images via `picsum.photos/seed/dozely-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
