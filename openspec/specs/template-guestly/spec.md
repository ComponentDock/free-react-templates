# Template: Guestly (Booking Forms / Room Reservation Widget)

## Purpose

Guestly is a single-page hotel room-reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V18 — Free Room Reservation Template"
website template (source: https://colorlib.com/wp/template/colorlib-booking-18/),
built under a DIFFERENT name (Guestly — "guest", a person who stays at a
hotel / books a room, plus the friendly "-ly" suffix, matching the Booking
Forms family convention: Reservly, Roomzy, Roostly, Stayly, Ridely, Triply,
Innly, Lodgely, Hostly; re-branded) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-18/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-stayly / template-roostly / template-roomzy / template-reservly
> / template-ridely / template-triply / template-innly / template-lodgely /
> template-hostly preps — the `preview.colorlib.com/assets/js/products.js`
> product map only covers new Astro-era templates). The LIVE PREVIEW button on
> the ColorLib template page resolves to `https://colorlib.com/etc/bforms/<slug>/`
> for the whole family. **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-18/` (HTTP 200, ~5.2 KB
> HTML + `css/style.css` ~3.4 KB), and the TEMPLATES.md screenshot
> (`colorlib-booking-18.jpg`, 1200×972, viewed in browser) matches the live
> render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V18" — page title "Colorlib
  Booking Form V18 - Free Room Reservation Template"; meta description "Take
  your online bookings to the next level with this free room reservation
  template based on Bootstrap Framework now." Category in TEMPLATES.md:
  **Booking Forms (22)**. Internal doc title: "Booking Form HTML Template".
  The recreation brands itself **Guestly** but keeps the same section
  structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-18/` (HTTP 200, ~5.2 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%)) vertically
  centering `.container > .row > .booking-form` card:
  - `#booking` — no background set (the page background stays WHITE), `height:
100vh`, `font-family: 'Lato', sans-serif`.
  - `.booking-form` — **`background: #0f0f0f`** (near-black, 642px-wide DARK
    card), **`max-width: 642px`, `width: 100%`, `margin: auto`**, NO
    border-radius, NO box-shadow.
  - `.form-header` — **the card's TOP HALF is a full-width PHOTO header
    panel**: `background-image: url('../img/background.jpg');
background-size: cover; background-position: center; padding: 85px 25px
25px; position: relative; z-index: 20` PLUS `::before` — full-bleed
    overlay **`background: rgba(81, 81, 81, 0.8)`** (a DARK grey scrim; the
    photo is a blurred hotel interior/lobby shot).
    - **h2 "Reserve your Room"** — `font-family: 'Medula One', cursive`,
      `color: #fff`, `font-size: 58px`, `text-transform: capitalize`,
      `margin: 0 0 15px`. NOTE: h2 (not h1), Medula One display font.
    - **p** — `color: #fff`, `font-size: 18px` (Lorem ipsum copy: "Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      laboriosam numquam at…").
  - `<form>` — **`padding: 30px`** (the DARK form area below the photo
    header).
  - Row 1 (Bootstrap `row` + `col-md-6` × 2, NO Bootstrap dependency in the
    recreation):
    - **Arrival date** (date input, `required`) — label above, `.form-label`.
    - **Departure date** (date input, `required`).
    - **NO `.in-out` divider** — no ⇔ symbol between the date fields.
  - Row 2 (Bootstrap `col-md-4` × 3 — THREE columns):
    - **Rooms** (select, options 1/2/3) + `.select-arrow`.
    - **Adults** (select, options 1/2/3) + `.select-arrow`.
    - **Kids** (select, options 0/1/2) + `.select-arrow`.
  - `.form-btn` (margin-top **10px**) → `.submit-btn` full-width **"Check
    availability"** button.
  - NO navbar, NO hero copy, NO footer, NO other sections — a one-section
    form demo (page ends with only the GA script). **NO custom media query in
    the source CSS** — the ≤768px responsive behavior comes entirely from
    Bootstrap's `col-md-*` grid (both rows collapse to a single column; the
    photo header stays full-width on top).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-18.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** stark, high-contrast design
  on a WHITE page background. A single near-black card (max-width 642px, sharp
  corners, no shadow) vertically centered. The card's TOP HALF is a full-width
  photo header — a dark, moody, slightly blurred hotel interior/lobby photo
  under a heavy dark-grey `rgba(81,81,81,0.8)` scrim — with the large white
  display headline "RESERVE YOUR ROOM" (condensed display serif, ~58px) and a
  small white 18px Lorem-ipsum paragraph. The BOTTOM HALF is the solid
  near-black `#0f0f0f` form area holding PILL-SHAPED (radius 40px) dark
  translucent inputs (2px `rgba(255,255,255,0.15)` borders, white text):
  row 1 = Arrival date / Departure date, row 2 = Rooms / Adults / Kids
  selects (each with a dim floating arrow), and a full-width **pill-shaped
  bright-orange "CHECK AVAILABILITY" button** (`#ff9000`, white bold uppercase
  18px text). Small uppercase ORANGE `#ff9000` labels (ARRIVAL DATE, DEPARTURE
  DATE, ROOMS, ADULTS, KIDS) sit above each field, 20px indented. The ONLY
  accent is the vibrant orange — everything else is white/black/grey. Dark,
  upscale, high-contrast hotel aesthetic.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section on the WHITE page
     background; content vertically centered via `.section-center`.
  2. `.booking-form` (max-width 642px, `#0f0f0f`, sharp corners, no shadow) —
     the card, containing:
     - `.form-header` — full-width PHOTO header panel (cover/center photo +
       `rgba(81,81,81,0.8)` scrim, padding 85px 25px 25px) holding:
       - **"Reserve your Room"** h2 (Medula One cursive, 58px, `#fff`,
         capitalized) + 18px white Lorem-ipsum paragraph.
     - `<form>` (padding 30px):
       - Row 1: **Arrival date** (date, required) · **Departure date** (date,
         required) — two columns, NO divider.
       - Row 2: **Rooms** (select 1/2/3) · **Adults** (select 1/2/3) ·
         **Kids** (select 0/1/2) — THREE columns, each with a floating dim
         arrow glyph.
       - `.form-btn` — **Check availability** (full-width pill `#ff9000`
         submit, white bold 18px uppercase text, height 55px).
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **orange `#ff9000`** — used for the `.form-label` text and
    the submit button background. The ONLY accent color; high-contrast
    against the near-black card.
  - Card: **`#0f0f0f`** (near-black), max-width 642px, NO border-radius, NO
    box-shadow.
  - Photo header: full card width, `background-size: cover; background-position:
center`, `padding: 85px 25px 25px`, scrim **`rgba(81, 81, 81, 0.8)`**
    (dark grey).
  - Headline: **`#fff`**, `font-family: 'Medula One', cursive` (a condensed
    display font), **58px**, `text-transform: capitalize` — h2 (NOT h1).
    Subtitle: `#fff`, 18px, Lato.
  - Font: **'Lato', sans-serif** for body/labels/inputs/button (weights 400 +
    700), **'Medula One', cursive (400)** for the headline. Google Fonts
    links: `family=Lato:wght@400;700` and `family=Medula+One` (single 400
    weight face).
  - Labels (`.form-label`): **`color: #ff9000`** (brand orange),
    `text-transform: uppercase`, `line-height: 24px`, `height: 24px`,
    `font-size: 14px`, `font-weight: 400`, **`margin-left: 20px`** (indented
    to align with the pill inputs' padding) — STATIC uppercase orange labels
    ABOVE the input (NOT floating, NOT bottom tab bars).
  - Inputs (`.form-control`): `background-color: transparent`, `height: 45px`,
    `padding: 0px 20px`, `color: #fff`, **`border: 2px solid
rgba(255, 255, 255, 0.15)`**, `font-size: 16px`, `font-weight: 700`,
    `box-shadow: none`, **`border-radius: 40px`** (PILL), `transition: 0.2s
all`; **focus → `background: #fff`, `color: #222`** (white fill, near-black
    text); placeholder `rgba(255,255,255,0.15)` (focus → `rgba(0,0,0,0.3)`).
    Empty date inputs render `rgba(255,255,255,0.15)` (`input[type="date"].form-control:invalid`).
  - `.form-group`: `position: relative`, `margin-bottom: 20px`.
  - Select: `appearance: none`; custom `.select-arrow` — absolute,
    `right: 10px`, `bottom: 7px`, 32×32px, `line-height: 32px`,
    `text-align: center`, `pointer-events: none`, **`color: rgba(255,255,255,0.15)`**
    (dim white), `font-size: 14px`; `::after` content `'\279C'` (➜) rotated
    90°; on focus the arrow becomes `rgba(0,0,0,0.3)` (matches the white-fill
    focus state). NOTE: the arrow is a floating DIM-WHITE glyph (matching the
    placeholder/border color, NOT white, NOT orange) — no tab background.
  - Button (`.submit-btn`): **`color: #fff`, `background-color: #ff9000`**
    (SOLID orange), `font-weight: 700`, `font-size: 18px`, `border: none`,
    **`border-radius: 40px`** (pill), `height: 55px`, `display: block`,
    `width: 100%`, **`text-transform: uppercase`**. `.form-btn` wrapper:
    `margin-top: 10px`. (No hover rule in the source CSS — the recreation may
    darken the orange on hover, e.g. `#e68200`, as a documented choice.)
  - Responsive: NO custom media query in the source; Bootstrap `col-md-*`
    stacking handles ≤768px (2-col and 3-col rows collapse to one column).
- **KEY DIFFERENCES vs Lodgely (Booking 16) — also dark, do NOT copy the
  Lodgely design:**
  - Card `#0f0f0f` max-width 642px, sharp corners (Lodgely: `#1e1e1e` panel,
    max-width 586px, sharp corners, full-bleed section photo behind it).
  - Photo lives in a full-width header PANEL inside the card's top half
    (Lodgely's photo is the full-bleed SECTION background).
  - Headline **'Medula One' cursive 58px** (Lodgely: 'Hind' sans 700 42px);
    header is an **h2** (Lodgely: h1).
  - Field set: TWO rows — dates (Arrival/Departure) then a THREE-column
    Rooms/Adults/Kids row (Lodgely: different arrangement; no full-width
    select).
  - **ORANGE `#ff9000`** labels + button (Lodgely: olive `#6c8f18`).
  - **PILL inputs** (radius 40px, transparent fill, 2px `rgba(255,255,255,0.15)`
    border, white text, focus → white fill `#222` text) vs Lodgely's
    borderless `#2d2d2d` dark inputs.
  - Pill `#ff9000` button (weight 700, 18px, uppercase, height 55px) vs
    Lodgely's sharp olive button.
- **KEY DIFFERENCES vs Hostly (Booking 17) — also pill-shaped, do NOT merge
  the two:** Hostly is the LIGHT taupe variant (white 912px card on a
  `rgba(133,104,73,0.33)` wash, LEFT photo panel, Playfair Display 900
  headline, taupe `#856849` labels/button); Guestly is the DARK ORANGE variant
  (near-black 642px card on a WHITE page, full-width photo header, Medula One
  headline, orange `#ff9000` labels/button). Different field sets (Hostly:
  adults/children + full-width Room Type select; Guestly: Rooms/Adults/Kids
  in a 3-column row, no Room Type select). Both share: pill inputs/button,
  uppercase 20px-indented labels, "Check availability" button, static labels.
- **First in the family with this palette:** no other Booking Forms prep uses
  orange `#ff9000` or the Medula One font (verified against all existing
  `template-*` specs 2026-08-09) — do not copy from roomzy (red-orange
  `#f14634`), roostly (hot pink `#ff0063`) or stayly (blue `#6499ff`).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the photo header uses a
  seeded picsum placeholder (`picsum.photos/seed/guestly-1/1280/600`, an
  interior/lobby-style seed; the source `background.jpg` must not be copied)
  with an `rgba(81,81,81,0.8)` overlay (Tailwind `bg-[rgba(81,81,81,0.8)]` or
  a theme token); date inputs are native `<input type="date">` styled with
  Tailwind (no datepicker dependency); select arrows = rotated `➜` glyph
  (U+279C) or lucide ChevronDown as a floating `rgba(255,255,255,0.15)` 32×32
  glyph at `right 10px bottom 7px` (NO tab background); headline in Medula One
  (NOT the body font), body in Lato 400/700; both via Google Fonts `<link>` in
  `index.html`; document title "Guestly — Room Reservation Widget Template";
  brand "Booking"/"Colorlib Booking" → "Guestly" everywhere. The "Check
  availability" button validates the form (arrival and departure dates
  required; departure ≥ arrival) and reveals a summary line (arrival →
  departure, rooms, adults, kids) — the original demo is static, so this
  minimal interactive behavior is a documented recreation choice, kept in a
  pure exported function for 100%-coverage tests. Labels are static,
  uppercase, orange, ABOVE the input — NOT floating, NOT bottom tab bars.

Guestly lives in `apps/guestly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with dark card on white

The system SHALL render a full-viewport (100vh) booking section on a WHITE
page background vertically centering a sharp-cornered near-black form card
(`#0f0f0f`, max-width 642px, no radius, no shadow). The page SHALL NOT render
any navbar, hero copy, or footer chrome (single-section form demo).

#### Scenario: Full-viewport section with white background and dark card

- **GIVEN** the Guestly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the page background SHALL be white
- **AND** a near-black card (`#0f0f0f`, max-width 642px, sharp corners, no
  box-shadow) SHALL be vertically and horizontally centered
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: Photo header panel with dark scrim

The system SHALL render a full-width photo header panel as the card's top
half: a cover-positioned photograph dimmed by a dark-grey `rgba(81,81,81,0.8)`
scrim, padded 85px top / 25px sides+bottom, containing the form header.

#### Scenario: Photo header with grey scrim and headline

- **GIVEN** the Guestly page is rendered
- **WHEN** the form card is displayed
- **THEN** the top half of the card SHALL be a full-width photo panel using a
  cover/center-positioned photograph (seeded picsum interior image)
- **AND** the photograph SHALL be dimmed by an `rgba(81,81,81,0.8)` overlay
- **AND** the panel SHALL have padding 85px 25px 25px
- **AND** a `h2` reading "Reserve your Room" SHALL appear inside the panel
- **AND** the headline SHALL use the Medula One display font, size ~58px,
  white `#fff`, capitalized
- **AND** an 18px white paragraph (Lorem-ipsum copy) SHALL appear below the
  headline

### Requirement: Arrival and departure date fields

The system SHALL render Arrival date and Departure date inputs side by side
in the booking form, with no divider between them.

#### Scenario: Date fields without divider

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** an "Arrival date" date input and a "Departure date" date input
  SHALL be present side by side
- **AND** both inputs SHALL be required
- **AND** NO divider symbol SHALL appear between the two fields
- **AND** an empty date input SHALL display dim-white
  `rgba(255,255,255,0.15)` text until a value is picked
- **AND** the inputs SHALL be pill-shaped (border-radius ~40px) with a
  transparent fill, a 2px `rgba(255,255,255,0.15)` border, white bold text
  and height 45px
- **AND** on focus the input SHALL flip to a white fill with near-black
  `#222` text

#### Scenario: Departure not before arrival

- **GIVEN** the user has picked an arrival date
- **WHEN** the user picks a departure date earlier than the arrival date
- **THEN** the form SHALL flag the departure field as invalid
- **AND** submission SHALL be blocked until departure is on or after arrival

### Requirement: Rooms, Adults and Kids selects

The system SHALL render three selects (Rooms, Adults, Kids) side by side in
one row with the source option sets and a floating dim-white arrow glyph at
the right edge of each select.

#### Scenario: Three-column select row

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Rooms" select SHALL offer options 1, 2 and 3
- **AND** an "Adults" select SHALL offer options 1, 2 and 3
- **AND** a "Kids" select SHALL offer options 0, 1 and 2
- **AND** the three selects SHALL be laid out side by side in a single row
  (three equal columns on desktop)
- **AND** each select SHALL display an arrow (rotated `➜` glyph or
  ChevronDown) as a floating `rgba(255,255,255,0.15)` 32×32 glyph at
  `right 10px bottom 7px` inside the input
- **AND** the arrow SHALL have no tab background (no grey/branded tab)

### Requirement: Check availability button

The system SHALL render a full-width "Check availability" submit button
(solid orange `#ff9000` background with white bold uppercase text,
pill-shaped) that validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** arrival and departure dates are filled in (departure ≥ arrival)
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the reservation details
  (e.g. "Arrival 2026-08-10 → Departure 2026-08-13 · 2 rooms · 2 adults ·
  1 kid")
- **AND** the summary SHALL be styled with the orange `#ff9000` brand color
  or on an orange-tinted background

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Check availability" with missing required fields
  (dates)
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

### Requirement: Static uppercase orange labels

The system SHALL render each field with a static, uppercase, orange `#ff9000`
label ABOVE the input, indented 20px (matching the source — NOT floating
labels, NOT bottom-edge tab bars).

#### Scenario: Label placement and styling

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** every field (Arrival date, Departure date, Rooms, Adults, Kids)
  SHALL have a label directly above its input
- **AND** each label SHALL be 14px, weight 400, uppercase, orange `#ff9000`,
  line-height 24px, with a 20px left indent
- **AND** each label SHALL be associated with its control via
  `htmlFor`/`id` (accessible)

### Requirement: Mobile stacking

The system SHALL collapse the multi-column rows to a single column on small
screens (≤768px), matching the source's Bootstrap `col-md-*` behavior.

#### Scenario: Single column below 768px

- **GIVEN** the Guestly page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** the Arrival date / Departure date row SHALL stack vertically
- **AND** the Rooms / Adults / Kids row SHALL stack vertically
- **AND** the photo header SHALL remain full-width on top of the card
- **AND** the card SHALL stay centered with max-width 642px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-guestly`
- [ ] `scripts/verify-app.sh guestly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section on WHITE background →
      vertically centered near-black card (`#0f0f0f`, max-width 642px,
      sharp corners, no shadow) → full-width photo header panel (cover
      photo + `rgba(81,81,81,0.8)` scrim, padding 85px 25px 25px) with h2
      "Reserve your Room" (Medula One, 58px, `#fff`, capitalized) + 18px
      white subtitle → fields in source order (Arrival date + Departure
      date · Rooms + Adults + Kids) → Check availability button; NO
      navbar, NO footer (single-section demo)
- [ ] Brand color `#ff9000` (labels, button background) in `@theme` and
      used via Tailwind classes
- [ ] Medula One (display, weight 400 only) + Lato (400/700) via Google
      Fonts `<link>`s in `index.html`
- [ ] Photo header = seeded picsum (`guestly-1/…`) cover/center with
      `rgba(81,81,81,0.8)` overlay, full card width, padding 85px 25px 25px
- [ ] Header: h2 "Reserve your Room", Medula One 58px `#fff` capitalized
      (display font — NOT the body font), + 18px white subtitle paragraph
- [ ] Arrival date (date, required) + Departure date (date, required)
      side by side; NO ⇔ divider
- [ ] Inputs: transparent fill, height 45px, padding 0 20px, white bold
      16px text, 2px `rgba(255,255,255,0.15)` border, radius 40px (PILL);
      focus → white fill + `#222` text; placeholder / empty date state
      `rgba(255,255,255,0.15)`
- [ ] Selects: Rooms (1/2/3), Adults (1/2/3), Kids (0/1/2) side by side in
      a 3-column row; `appearance: none`; floating `rgba(255,255,255,0.15)`
      32×32 arrow glyph (rotated `➜`/ChevronDown) at right 10px bottom 7px,
      NO tab background
- [ ] Labels: static, uppercase, 14px weight-400 orange `#ff9000`, 20px
      left indent, `htmlFor`/`id` associated
- [ ] "Check availability" button: full width, solid `#ff9000` bg, white
      bold 18px uppercase text, height 55px, radius 40px (pill), border
      none; validates (dates required, departure ≥ arrival) and shows
      summary / validation messages
- [ ] Mobile (≤768px): rows collapse to a single column; photo header
      stays full-width on top; card centered with max-width 642px
- [ ] Placeholder images via `picsum.photos/seed/guestly-<n>/<w>/<h>`,
      icons from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
