# Template: Nestly (Booking Forms / Hotel Booking Widget)

## Purpose

Nestly is a single-page hotel/travel booking-form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V3 — Free Bootstrap Reservation Widget"
website template (source: https://colorlib.com/wp/template/colorlib-booking-3/),
built under a DIFFERENT name (Nestly — "nest", a cozy place to stay/rest,
fitting the hospitality/room-reservation use case, plus the friendly "-ly"
suffix, matching the Booking Forms family convention: Reservly, Coastly,
Roomzy, Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly,
Skyly, Bookly; re-branded) per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-3/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-skyly / template-stayly / template-roostly / template-roomzy /
> template-reservly / template-ridely / template-triply / template-innly /
> template-lodgely / template-hostly / template-guestly / template-coastly /
> template-bookly preps — the `preview.colorlib.com/assets/js/products.js`
> product map only covers new Astro-era templates). The LIVE PREVIEW button
> on the ColorLib template page resolves to
> `https://colorlib.com/etc/bforms/<slug>/` for the whole family. **The live
> demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-3/` (HTTP 200, ~7.0 KB
> HTML + `css/style.css` ~2.4 KB + `css/bootstrap.min.css`), the live render
> was verified in the browser (white horizontal booking BAR over a tropical
> beach photo, taupe `#9a8067` "Book Now" serif header LEFT + "CHECK
> AVAILABILITY" button RIGHT), and the TEMPLATES.md screenshot
> (`colorlib-booking-3.jpg`, 1200×972, viewed in browser) matches the live
> render 1:1.** NOTE: this is the HORIZONTAL single-bar layout variant of the
> family — do NOT confuse it with the stacked-card variants (Bookly/Hostly/
> Skyly/Innly/etc.). It is the sibling of Coastly (Booking 2, dark slab) and
> Roomzy (Booking 10, red horizontal bar) in structure, but light/white with
> a taupe accent.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V3" — free hotel reservation
  form widget template, Bootstrap-based (Booking Forms category, 22 templates
  in the family). Internal demo doc title: "Booking Form HTML Template". The
  recreation brands itself **Nestly** but keeps the same section structure,
  field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-3/` (HTTP 200, ~7.0 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row > .booking-form`:
  - `#booking` — **full-bleed PHOTO page background**:
    `background-image: url('../img/background.jpg'); background-size: cover;
background-position: center;` (the photo is a **tropical beach**: three
    beige patio umbrellas + dark lounge chairs with beige cushions on white
    sand, calm turquoise water, a rocky breakwater, hazy blue mountains and a
    bright blue sky with fluffy clouds), with
    `font-family: 'Source Sans Pro', sans-serif`. NO overlay scrim — the
    photo shows at full saturation (unlike Bookly's 80% white wash).
  - `.booking-form` — the **HORIZONTAL WHITE BAR**: `background: #fff`,
    `box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.3)`,
    `border: 1px solid rgba(60, 64, 101, 0.1)`. (No max-width, no radius —
    spans the full `.container` row width.)
  - Inside the form, a `row.no-margin` (columns have 0 padding) with THREE
    zones:
    - `col-md-3` → `.form-header` — `padding: 15px 10px; height: 110px;
line-height: 110px; text-align: center;` holding **h2 "Book Now"** —
      `font-family: 'Alegreya', serif; display: inline-block; font-size:
52px; color: #9a8067` (the taupe brand color).
    - `col-md-7` → an inner `row.no-margin` of FOUR fields (each
      `.form-group` = `position: relative; height: 110px; padding: 15px 10px;
margin-bottom: 0`):
      1. `col-md-4` — **Check In** (date input)
      2. `col-md-4` — **Check out** (date input)
      3. `col-md-2` — **Guests** (select: options 1 / 2 / 3) + `.select-arrow`
      4. `col-md-2` — **Kids** (select: options 0 / 1 / 2) + `.select-arrow`
    - `col-md-2` → `.form-btn` — `padding: 15px 10px; height: 110px;`
      holding **button.submit-btn "Check availability"** —
      `background: #9a8067; color: #fff; border: none; font-weight: 400;
text-transform: uppercase; font-size: 14px; display: block; height:
80px; width: 100%` (tall taupe block button).
  - **STATIC labels (NOT floating — the defining difference vs Bookly):**
    `.form-label` is a plain `display: block` 30px line ABOVE the input:
    `color: #818390; font-weight: 400; height: 30px; line-height: 30px;
font-size: 14px`. No jQuery, no `.input-not-empty` mechanic, no floating
    on focus — labels sit fixed at the top of each 110px group.
  - Fields (`.form-control`): `font-family: 'Alegreya', serif;
background-color: transparent; border-radius: 0px; border: none; height:
50px; box-shadow: none; padding: 0; font-size: 28px; color: #3c404a;
font-weight: 700` — BIG serif values with NO borders at all (not even a
    bottom rule).
  - Selects: `select.form-control { -webkit-appearance: none; appearance:
none; }`. `.select-arrow` — `position: absolute; right: 0px; bottom:
20px; width: 32px; height: 32px; line-height: 32px; text-align: center;
pointer-events: none; color: #818390; font-size: 12px` with `::after`
    content `'\279C'` (➜ U+279C) `transform: rotate(90deg)`.
  - NO navbar, NO footer, NO other sections — a one-section form demo (page
    ends with only the gtag GA script). Responsive behavior comes entirely
    from Bootstrap's `col-md-*` grid (the bar's zones stack below 992px).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with a full-bleed
     cover/center PHOTO background (tropical beach with umbrellas); content
     vertically centered via `.section-center`.
  2. `.booking-form` — white horizontal bar: LEFT `col-md-3` `.form-header`
     "Book Now" (Alegreya 52px `#9a8067`, centered) → MIDDLE `col-md-7` four
     fields: Check In (date) + Check out (date) + Guests (select 1/2/3) +
     Kids (select 0/1/2) → RIGHT `col-md-2` `.form-btn` "Check availability"
     (tall taupe `#9a8067` block).
  3. No footer, no other content sections (single-section demo).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-3.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** bright resort aesthetic. A
  full-screen tropical beach photograph (three beige umbrellas with dark
  lounge chairs on white sand, turquoise water, rocky breakwater, hazy blue
  mountains, blue sky with clouds) fills the viewport at FULL saturation (no
  overlay). Across the middle sits a long WHITE horizontal booking bar with a
  subtle shadow. On the bar's LEFT, a large elegant serif **"Book Now"**
  headline in muted taupe/gold **`#9a8067`**. In the middle, four fields with
  small grey uppercase-ish labels ("Check In", "Check out", "Guests", "Kids")
  above BIG serif values (28px, dark slate `#3c404a`). On the RIGHT, a tall
  rectangular **"CHECK AVAILABILITY"** button in the same muted taupe
  `#9a8067` with white uppercase sans-serif text. The ONLY accent colors are
  the taupe `#9a8067` (header + button) and the dark slate `#3c404a` values;
  everything else is white, grey `#818390` labels and the beach photo. Clean,
  minimal, high-end resort booking widget.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **taupe `#9a8067`** — used for the "Book Now" header text
    AND the "Check availability" button background. The ONLY accent color.
  - Text color: **`#3c404a`** (dark slate) — form control values.
  - Label + arrow color: **`#818390`** (grey) — static labels and select
    arrows.
  - Card: **`#fff`** background, `box-shadow: 0px 2px 5px -2px
rgba(0, 0, 0, 0.3)`, `border: 1px solid rgba(60, 64, 101, 0.1)` — a
    HORIZONTAL BAR spanning the row (no max-width, no border-radius).
  - Fonts: **"Alegreya"** (serif, weight 700) for the header h2 AND every
    form control value; **"Source Sans Pro"** (sans-serif, weight 400) for
    the page/body. Google Fonts links in the demo head: Alegreya 700 +
    Source Sans Pro 400 (via cf-fonts @font-face blocks).
  - Section: **100vh**, photo `cover`/`center`, NO overlay.
  - `.form-header`: `padding: 15px 10px; height: 110px; line-height: 110px;
text-align: center`. h2 — **Alegreya, 52px, `#9a8067`**, inline-block.
  - `.form-group`: `position: relative; height: 110px; padding: 15px 10px;
margin-bottom: 0`.
  - `.form-label` (STATIC): `display: block; color: #818390; font-weight:
400; height: 30px; line-height: 30px; font-size: 14px` — fixed at the top
    of the group, never floats.
  - Fields (`.form-control`): **transparent bg, `border-radius: 0px` (SHARP),
    `border: none`, height 50px, `box-shadow: none`, `padding: 0`, 28px,
    `#3c404a`, weight 700, Alegreya** — no borders at all.
  - Selects: `appearance: none`. `.select-arrow` — absolute `right: 0;
bottom: 20px`, 32×32, `line-height: 32px`, `text-align: center`,
    `pointer-events: none`, **`#818390`, 12px**; `::after` content `'\279C'`
    (➜) rotated 90°.
  - Button (`.submit-btn`): **`background: #9a8067` (SOLID taupe),
    `color: #fff`, `font-weight: 400`, `text-transform: uppercase`,
    `font-size: 14px`, `display: block`, `height: 80px`, `width: 100%`,
    `border: none`**. (No hover rule in the source CSS.)
  - Responsive: Bootstrap `col-md-3 / col-md-7 / col-md-2` keep the
    header/fields/button on one row ≥992px; below 992px the zones stack
    vertically (header on top, then the four fields, then the button full
    width). The inner `col-md-4 / col-md-4 / col-md-2 / col-md-2` field row
    wraps below 992px (two dates stay wider, Guests/Kids narrow).
- **KEY DIFFERENCES vs Bookly (Booking 20) — the floating-label white-card
  variant, do NOT copy:** Bookly is the GREEN hotel variant (white 642px
  stacked card, `#2b9328` accent, Montserrat, CTA LEFT + form RIGHT, 55px
  underline fields with FLOATING labels that turn green on focus/fill, name/
  email/phone/rooms/guests/check-in/check-out field set, "Make your
  reservation" h1, "Book Now" button). Nestly is the TAUPE HORIZONTAL-BAR
  variant (`#9a8067`, Alegreya + Source Sans Pro, single white bar: "Book
  Now" header + Check In/Check out/Guests/Kids + "Check availability",
  STATIC grey labels, 50px borderless 28px serif fields). Nestly's labels
  NEVER float; Bookly's whole mechanic is floating.
- **KEY DIFFERENCES vs Hostly (Booking 17) — also taupe, do NOT confuse:**
  Hostly = `#856849` (darker taupe) + Alice serif + Playfair Display, a
  STACKED 912px white card with a sepia-tinted photo panel overlapping the
  LEFT edge, PILL inputs/button, "Make your reservation" header, "Check
  availability" button. Nestly = `#9a8067` (lighter gold-taupe) + Alegreya +
  Source Sans Pro, a HORIZONTAL white bar spanning the row (NO inner photo
  panel), SHARP 0-radius borderless fields, STATIC grey labels, "Book Now"
  header. Same family, completely different layout.
- **KEY DIFFERENCES vs Coastly (Booking 2) — the DARK horizontal-bar
  variant, do NOT merge:** Coastly = solid `#1a1e24` dark charcoal slab,
  `#72b01d` lime accent, CTA RIGHT + form LEFT in a horizontal bar, static
  white `capitalize` labels, 100px sharp fields. Nestly = LIGHT variant
  (white bar over a beach photo, `#9a8067` taupe accent, CTA/header LEFT +
  fields MIDDLE + button RIGHT, static grey labels, 110px groups with 50px
  fields). Same horizontal-bar layout family — palettes, fonts, field sets
  and label colors are all different.
- **KEY DIFFERENCES vs Roomzy (Booking 10) — the RED horizontal-bar variant,
  do NOT copy:** Roomzy = `#f14634` red accent, horizontal bar with left
  title + fields + button (per the template-roomzy prep). Nestly = `#9a8067`
  taupe. Verify against template-roomzy before implementing to keep the two
  bars visually distinct.
- **First in the family with this palette:** no other Booking Forms prep
  uses taupe `#9a8067` (verified against all `template-*` specs 2026-08-09 —
  Hostly `#856849` is a different darker taupe, Skyly `#4fa3e3`, Coastly
  `#72b01d`, Guestly `#ff9000`, Roostly `#ff0063`, Stayly `#6499ff`, Ridely
  `#ffc600`, Roomzy `#f14634`, Innly `#c99552`, Lodgely `#6c8f18`, Bookly
  `#2b9328`) — do not copy from hostly (stacked card) or coastly (dark slab).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the page background uses a
  seeded picsum placeholder (`picsum.photos/seed/nestly-paradise/1920/1080`,
  an ocean/coast scene — the closest beach-appropriate match in the picsum
  pool; the source `background.jpg` must not be copied)
  with `cover`/`center`, NO overlay; date inputs are native
  `<input type="date">` styled with Tailwind (no datepicker dependency); the
  form is a WHITE HORIZONTAL BAR with a 3-zone layout (header 3/12 · fields
  7/12 · button 2/12, inner field row Check In 4 + Check out 4 + Guests 2 +
  Kids 2), shadow `0 2px 5px -2px rgba(0,0,0,0.3)`, border
  `1px solid rgba(60,64,101,0.1)`; labels are STATIC `<label htmlFor>`
  elements (grey `#818390`, 14px, weight 400, above the field — they must
  NOT float, unlike Bookly); select arrows = rotated `➜` glyph (U+279C) or
  lucide ChevronDown, `#818390`, 12px, 32×32, at `right 0 bottom 20px`;
  body in Source Sans Pro 400 + Alegreya 700 via Google Fonts `<link>` in
  `index.html`; document title "Nestly — Hotel Reservation Template"; brand
  "Booking"/"Colorlib Booking" → "Nestly" everywhere. The "Check
  availability" button validates the form (check-in required, check-out
  required, check-out ≥ check-in) and reveals a summary line (dates, guests,
  kids) — the original demo is static, so this minimal interactive behavior
  is a documented recreation choice, kept in a pure exported function for
  100%-coverage tests.

Nestly lives in `apps/nestly` (package `@free-react-templates/nestly`) and
uses shared components from `packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with photo background

The system SHALL render a full-viewport (100vh) booking section with a
full-bleed cover/center-positioned photograph as the page background (no
overlay), vertically centering a single horizontal white booking bar. The
page SHALL NOT render any navbar, hero chrome, or footer (single-section
form demo).

#### Scenario: Full-viewport section with photo background

- **GIVEN** the Nestly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed photograph
  (`picsum.photos/seed/nestly-paradise/1920/1080`) as its background,
  cover-positioned and centered
- **AND** the photo SHALL NOT be covered by any overlay or scrim
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: Horizontal white booking bar layout

The system SHALL render a white horizontal booking bar (subtle shadow,
1px translucent border) whose width spans the container row, laid out in
three zones left-to-right on desktop: a "Book Now" header column (~3/12), a
fields column (~7/12), and a button column (~2/12).

#### Scenario: Bar with three zones

- **GIVEN** the Nestly page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** a white bar SHALL be shown, full container width, with shadow
  `0 2px 5px -2px rgba(0,0,0,0.3)` and a 1px
  `rgba(60,64,101,0.1)` border
- **AND** the bar SHALL lay out three zones in a row: header (~3/12) on the
  left, fields (~7/12) in the middle, button (~2/12) on the right
- **AND** the bar SHALL have no border radius (sharp corners)

### Requirement: Book Now header column

The system SHALL render a left header column (~3/12) with a centered
"Book Now" heading in the taupe brand color and the serif display font.

#### Scenario: Book Now header

- **GIVEN** the white booking bar is displayed
- **WHEN** the page loads
- **THEN** a heading reading "Book Now" SHALL be shown centered in the left
  header column
- **AND** the heading SHALL be in the serif display font (Alegreya), 52px,
  in taupe `#9a8067`
- **AND** the header column SHALL be 110px tall with 15px 10px padding

### Requirement: Four-field middle column with static labels

The system SHALL render the middle column (~7/12) with four fields in order:
Check In (date), Check out (date), Guests (select 1/2/3), Kids (select
0/1/2), each with a STATIC grey label above a big serif value. Labels SHALL
be real `<label>` elements and SHALL NOT float on focus or value.

#### Scenario: Field set and order

- **GIVEN** the white booking bar is displayed
- **WHEN** the page loads
- **THEN** the middle column SHALL show four fields in source order:
  Check In, Check out, Guests, Kids
- **AND** Check In and Check out SHALL be date inputs
- **AND** Guests SHALL be a select with options 1, 2 and 3
- **AND** Kids SHALL be a select with options 0, 1 and 2

#### Scenario: Static labels

- **GIVEN** any field in the bar is displayed
- **WHEN** the field is empty, focused, or has a value
- **THEN** its label SHALL remain fixed at the top of the field group
  (grey `#818390`, 14px, weight 400, 30px line)
- **AND** the label SHALL be a real `<label>` associated with the control
  via `htmlFor`/`id`
- **AND** the label SHALL NOT float, shrink, or change color on focus or
  when the field has a value

#### Scenario: Field styling

- **GIVEN** the booking bar is displayed
- **WHEN** the fields are rendered
- **THEN** every field SHALL have a transparent background, sharp 0-radius
  corners, and no border at all
- **AND** every field SHALL show its value in 28px serif (Alegreya)
  weight-700 text in dark slate `#3c404a`
- **AND** every field group SHALL be 110px tall with 15px 10px padding and
  a 50px-tall input area

### Requirement: Select arrow glyphs

The system SHALL render "Guests" and "Kids" as selects with native
appearance removed and a floating arrow glyph at the right edge.

#### Scenario: Selects with arrow

- **GIVEN** the booking bar is displayed
- **WHEN** the form is rendered
- **THEN** both selects SHALL hide their native appearance
  (`appearance: none`)
- **AND** an arrow glyph (rotated `➜` U+279C or ChevronDown,
  `#818390`, 12px, 32×32) SHALL float at the right edge
  (`right 0 bottom 20px`) of each select, without capturing pointer events

### Requirement: Check availability button column

The system SHALL render a right button column (~2/12) with a tall
full-width "Check availability" button (solid taupe `#9a8067` background,
white uppercase text) that validates the form and shows a summary.

#### Scenario: Button styling

- **GIVEN** the booking bar is displayed
- **WHEN** the form is rendered
- **THEN** a button reading "Check availability" SHALL be shown in the right
  column
- **AND** the button SHALL have a solid taupe `#9a8067` background with
  white uppercase 14px weight-400 text
- **AND** the button SHALL be 80px tall and span the full width of its
  column

#### Scenario: Submit with valid input

- **GIVEN** the user has picked a check-in date and a check-out date with
  check-out on or after check-in
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the selected dates and
  counts (e.g. "Aug 10 → Aug 13, 2026 · 2 Guests · 1 Kid")
- **AND** the summary SHALL be styled with the taupe `#9a8067` brand color
  or on a taupe-tinted background

#### Scenario: Submit with missing or invalid dates

- **GIVEN** the booking bar is displayed
- **WHEN** the user clicks "Check availability" with a missing check-in,
  missing check-out, or check-out before check-in
- **THEN** the form SHALL show validation messages for the invalid fields
- **AND** no summary SHALL be shown

### Requirement: Mobile stacking

The system SHALL collapse the horizontal bar to stacked zones on small
screens, matching the source's Bootstrap `col-md-*` behavior.

#### Scenario: Stacked below 992px

- **GIVEN** the Nestly page is rendered on a viewport narrower than 992px
- **WHEN** the page is displayed
- **THEN** the header column SHALL stack above the fields column, which
  SHALL stack above the button column (source `col-md-*` behavior)
- **AND** the inner field row SHALL wrap (Check In and Check out stay
  wider; Guests and Kids narrower)
- **AND** the button SHALL remain full width within its column

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-nestly`
- [ ] `scripts/verify-app.sh nestly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with full-bleed cover/center
      PHOTO page background (seeded picsum, `nestly-paradise/1920/1080`, NO
      overlay) → vertically centered WHITE HORIZONTAL BAR → LEFT header
      "Book Now" (3/12, Alegreya 52px `#9a8067`) → MIDDLE four fields
      (7/12: Check In + Check out dates, Guests + Kids selects) → RIGHT
      "Check availability" button (2/12); NO navbar, NO footer
      (single-section demo)
- [ ] Brand color `#9a8067` (taupe — "Book Now" header + button background)
      in `@theme` and used via Tailwind classes
- [ ] Text `#3c404a` (dark slate values); labels/arrows `#818390` (grey);
      bar `#fff` with shadow `0 2px 5px -2px rgba(0,0,0,0.3)` and border
      `1px solid rgba(60,64,101,0.1)`
- [ ] Alegreya 700 (display + field values) + Source Sans Pro 400 (body) via
      Google Fonts `<link>` in `index.html`
- [ ] Page background = seeded picsum (`nestly-paradise/1920/1080`) cover/center
      full-bleed, NO overlay (source `background.jpg` not copied)
- [ ] Bar: white, horizontal, full container width, sharp corners; zones
      header 3/12 · fields 7/12 · button 2/12; header + field groups 110px
      tall with 15px 10px padding
- [ ] Labels: STATIC real `<label htmlFor>` grey `#818390` 14px weight 400
      30px line above the field — MUST NOT float on focus/value (differs
      from Bookly)
- [ ] Fields: transparent bg, sharp 0-radius, NO borders, 50px input area,
      28px Alegreya weight-700 `#3c404a` values
- [ ] Selects: Guests 1/2/3 + Kids 0/1/2, `appearance: none`, arrow glyph
      (rotated `➜`/ChevronDown, `#818390` 12px 32×32) at right 0 bottom
      20px
- [ ] "Check availability" button: solid `#9a8067` bg, white uppercase 14px
      weight-400 text, height 80px, full column width; validates (dates,
      check-out ≥ check-in) and shows summary / validation messages
- [ ] Mobile (<992px): header → fields → button stack vertically; inner
      field row wraps; button full width
- [ ] Placeholder images via `picsum.photos/seed/nestly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
