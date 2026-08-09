# Template: Bookly (Booking Forms / Hotel Reservation Widget)

## Purpose

Bookly is a single-page hotel reservation-form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V20 — Free Bootstrap Reservation Widget"
website template (source: https://colorlib.com/wp/template/colorlib-booking-20/),
built under a DIFFERENT name (Bookly — "book", the action the form performs
(the CTA is "Book Now"), plus the "-ly" suffix, matching the Booking Forms
family convention: Reservly, Coastly, Roomzy, Roostly, Stayly, Ridely, Triply,
Innly, Lodgely, Hostly, Guestly, Skyly; re-branded) per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-20/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-skyly / template-stayly / template-roostly / template-roomzy /
> template-reservly / template-ridely / template-triply / template-innly /
> template-lodgely / template-hostly / template-guestly / template-coastly
> preps — the `preview.colorlib.com/assets/js/products.js` product map only
> covers new Astro-era templates). The LIVE PREVIEW button on the ColorLib
> template page resolves to `https://colorlib.com/etc/bforms/<slug>/` for the
> whole family. **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-20/` (HTTP 200, ~8.8 KB
> HTML + `css/style.css` ~3.1 KB + `css/bootstrap.min.css` ~121 KB), the live
> render was verified in the browser (white 642px card RIGHT, black uppercase
> "MAKE YOUR RESERVATION" headline LEFT, green `#2b9328` button, floating
> labels), and the TEMPLATES.md screenshot (`colorlib-booking-20.jpg`,
> 1200×972, viewed in browser) matches the live render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V20" — page title "Colorlib
  Booking Form V20 - Free Bootstrap Reservation Widget - Colorlib" (template
  page `https://colorlib.com/wp/template/colorlib-booking-20/`). Internal demo
  doc title: "Booking Form HTML Template". Category in TEMPLATES.md: **Booking
  Forms (22)**. The recreation brands itself **Bookly** but keeps the same
  section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-20/` (HTTP 200, ~8.8 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row`:
  - `#booking` — **full-bleed PHOTO page background**:
    `background-image: url('../img/background.jpg'); background-size: cover;
background-position: center;` (the photo is a modern luxurious hotel
    bedroom: a bed with crisp white linens and a beige throw blanket, a desk
    and chair by a large window with sheer curtains, natural light, light
    wood tones), with `#booking::before` — a **white overlay** covering the
    whole section: `background: rgba(255, 255, 255, 0.8)`.
    `font-family: 'Montserrat', sans-serif`.
  - Row (Bootstrap grid, NO Bootstrap dependency in the recreation):
    - `col-md-5` → `.booking-cta` (margin-top 45px) — the LEFT COPY column:
      - **h1 "Make your reservation"** — `font-size: 52px`,
        `text-transform: uppercase`, `font-weight: 900`, `color: #181818`
        (near-black).
      - **p** — `font-size: 22px`, `color: #181818` (Lorem-ipsum copy).
    - `col-md-6 col-md-offset-1` → `.booking-form` — the RIGHT WHITE CARD:
      `background: #fff`, `box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.3)`,
      `max-width: 642px`, `width: 100%`, `margin: auto`, `padding: 40px 30px`.
  - `<form>` contents, in order (each `.form-group` has `position: relative`
    and `margin-bottom: 20px`):
    - Row 1 — TWO `col-md-6` columns: **Name** (text input) and **Email**
      (email input).
    - Row 2 — **Phone** (tel input, `col-md-6`) + **Rooms** (select, options
      1/2/3, `col-md-3 col-sm-6`) + **Guests** (select, options "1 Person" /
      "2 People" / "3 People", `col-md-3 col-sm-6`). Each select carries a
      `.select-arrow` glyph (rotated `➜`).
    - Row 3 — TWO `col-md-6` columns: **Check In** (date input, `required`)
      and **Check Out** (date input, `required`).
    - `.form-btn` → `.submit-btn` full-width **"Book Now"** button.
  - **Floating labels via jQuery** (the defining mechanic of this variant):
    on load and on `input`, `floatedLabel()` toggles `.input-not-empty` on
    each `.form-group` when its input has a value. Combined with CSS, empty
    unfocused fields show a placeholder-like uppercase label at `top: 20px`
    that floats to `top: 0`, shrinks to 14px and turns GREEN `#2b9328` on
    focus or once the field has a value.
  - NO navbar, NO footer, NO other sections — a one-section form demo (page
    ends with only the jQuery + GA scripts). Responsive behavior comes
    entirely from Bootstrap's `col-md-*` / `col-sm-*` grid (the Rooms/Guests
    pair stays 2-up ≥768px via `col-sm-6`; the CTA/card columns collapse
    below 992px).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with a full-bleed
     cover/center PHOTO background (hotel bedroom) + `rgba(255,255,255,0.8)`
     white overlay; content vertically centered via `.section-center`.
  2. LEFT column (5/12): `.booking-cta` — **h1 "Make your reservation"**
     (52px, uppercase, `#181818`, weight 900) + 22px `#181818` paragraph.
  3. RIGHT column (6/12, offset 1/12): `.booking-form` — white 642px card
     (padding 40px 30px, subtle shadow): Row 1 Name + Email → Row 2 Phone +
     Rooms + Guests (selects with `➜` arrows) → Row 3 Check In + Check Out
     (both required) → "Book Now" button.
  4. No footer, no other content sections (single-section demo).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-20.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** light, airy hotel-aesthetic
  page. A full-screen photograph of a modern luxury hotel bedroom (white
  linens, beige throw blanket, desk + chair by a large window with sheer
  curtains, natural light) fills the viewport, washed out by an 80% white
  overlay. On the LEFT, a large near-black uppercase headline **"MAKE YOUR
  RESERVATION"** (`#181818`, ~52px, weight 900) with a 22px `#181818`
  Lorem-ipsum paragraph beneath. On the RIGHT, a clean WHITE card (~642px,
  subtle shadow) holding the reservation form: 55px underline-style inputs
  (only a 2px `rgba(0,0,0,0.2)` bottom border), light-grey uppercase labels
  inside each field that float to the top edge, shrink to 14px and turn
  GREEN `#2b9328` on focus or when filled, and a full-width solid-green
  `#2b9328` **"Book Now"** button (white text). The ONLY accent color is the
  green `#2b9328` — everything else is near-black `#181818`, grey
  `rgba(0,0,0,0.2)` and the washed-out photo. Clean, modern, high-contrast
  hotel reservation widget.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **green `#2b9328`** — used for the floated/focused label
    color AND the submit button background. The ONLY accent color in the
    whole design.
  - Text color: **`#181818`** (near-black) — headline, paragraph, and field
    text.
  - Card: **`#fff`** background, `box-shadow: 0px 0px 10px -5px
rgba(0, 0, 0, 0.3)`, `max-width: 642px`, `width: 100%`, `margin: auto`,
    `padding: 40px 30px`.
  - Overlay: `#booking::before` — `rgba(255, 255, 255, 0.8)` over the photo.
  - Border/underline color: **`rgba(0, 0, 0, 0.2)`** — the 2px `border-bottom`
    on every field, the placeholder color, the empty-date color, the idle
    label color AND the select-arrow color.
  - Label states: idle `.form-label` — `rgba(0,0,0,0.2)`, `font-weight: 700`,
    `text-transform: uppercase`, 16px, absolute `top: 20px; left: 0`,
    `line-height: 24px; height: 23px`, `pointer-events: none`. Floated
    (`.form-control:focus + .form-label` or `.input-not-empty .form-label`)
    — `top: 0`, **`color: #2b9328`**, `font-size: 14px`. The jQuery toggles
    `.input-not-empty`; the CSS additionally hides the value of empty
    unfocused fields (`:not(.input-not-empty) .form-control:not(:focus) {
color: transparent }`).
  - Font: **'Montserrat', sans-serif** for everything (weights 400 + 700).
    Google Fonts link: `family=Montserrat:wght@400;700`. NO display font.
  - Section: **100vh**, photo `cover`/`center`, `color` inherits.
  - CTA (`.booking-cta`): `margin-top: 45px`. h1 — **52px,
    `text-transform: uppercase`, `font-weight: 900`, `#181818`**.
    p — **22px, `#181818`**.
  - Fields (`.form-control`): **`background-color: #fff`, `color: #181818`,
    `font-size: 16px`, `font-weight: 700`, `height: 55px`,
    `border-radius: 0px` (SHARP square), `border: none` EXCEPT
    `border-bottom: 2px solid rgba(0,0,0,0.2)`, `box-shadow: none`,
    `padding: 0; padding-top: 15px`, `transition: 0.2s`**. Placeholder /
    empty-date text: `rgba(0,0,0,0.2)`.
  - Form group rhythm: `.form-group` — `position: relative`,
    `margin-bottom: 20px`.
  - Selects (`.form-control` select): `appearance: none`. `.select-arrow` —
    absolute `right: 0; bottom: 7px`, `width: 32px; height: 32px`,
    `line-height: 32px`, `text-align: center`, `pointer-events: none`,
    **`color: rgba(0,0,0,0.2)`, `font-size: 14px`**; `::after` content
    `'\279C'` (➜) rotated 90°.
  - Button (`.submit-btn`): **`color: #fff; background-color: #2b9328`**
    (SOLID green), `font-weight: 700`, `height: 55px`, `padding: 10px 35px`,
    `font-size: 18px`, `border: none`, `display: block`, `width: 100%`,
    `text-transform: capitalize`. (No hover rule in the source CSS.)
  - Responsive: Bootstrap `col-sm-6` keeps Rooms/Guests 2-up ≥768px and
    stacks them below 768px; `col-md-5` / `col-md-6 col-md-offset-1` keep
    CTA-left/card-right ≥992px and stack (CTA above card) below 992px.
- **KEY DIFFERENCES vs Skyly (Booking 19) — the other white-card floating-label
  variant, do NOT copy the Skyly design:** Skyly is the SKY-BLUE FLIGHT
  variant (white 642px card on a full-bleed photo, `#4fa3e3` accent, Lato
  font, flight field set with circular radio pills, 65px-tall inputs with 2px
  `#dfe5e9` borders, floating `#98c9ee` labels, "Book your flight today" h1,
  "Show flights" button). Bookly is the GREEN HOTEL variant: `#2b9328`
  accent, Montserrat font, hotel reservation field set (Name / Email / Phone
  / Rooms / Guests / Check In / Check Out), 55px-tall inputs with 2px
  `rgba(0,0,0,0.2)` bottom borders, grey `rgba(0,0,0,0.2)` labels floating
  to green on focus/fill, "Make your reservation" h1, "Book Now" button.
  Same white-card-on-photo layout family — the palettes, fonts, field sets
  and label colors are all different.
- **KEY DIFFERENCES vs Coastly (Booking 2) — the DARK family variant, do NOT
  merge the two:** Coastly is the DARK/CHARCOAL hotel variant (solid
  `#1a1e24` flush dark slab, `#72b01d` lime-green accent, CTA RIGHT + form
  LEFT, static white `capitalize` labels at the field's top edge, 100px
  sharp fields, destination/check-in/check-out/guests). Bookly is the LIGHT
  hotel variant (white 642px card, `#2b9328` green accent, CTA LEFT + form
  RIGHT, FLOATING uppercase labels that turn green, 55px fields, name/email/
  phone/rooms/guests/check-in/check-out, "Book Now" button).
- **KEY DIFFERENCES vs Hostly (Booking 17) — also light, do NOT copy:**
  Hostly is the TAUPE/BEIGE variant (white 912px card on a
  `rgba(133,104,73,0.33)` wash, LEFT photo panel INSIDE the card, Playfair
  Display 900 headline, taupe `#856849` labels/button, PILL inputs/button,
  "Make your reservation" header, "Check availability" button). Bookly has a
  FULL-BLEED photo page background (no inner panel), Montserrat, green
  `#2b9328`, SHARP 0-radius underline inputs, floating labels, "Book Now".
- **KEY DIFFERENCES vs Guestly (Booking 18) — dark variant, do NOT copy:**
  Guestly is the DARK ORANGE variant (near-black `#0f0f0f` card on a WHITE
  page, full-width photo header panel inside the card, Medula One headline,
  orange `#ff9000` labels/button, PILL inputs). Bookly is the LIGHT GREEN
  variant (white card on a washed-out full-bleed photo, no inner panel,
  Montserrat, green `#2b9328` labels/button, SHARP 0-radius inputs).
- **First in the family with this palette:** no other Booking Forms prep
  uses green `#2b9328` (verified against all existing `template-*` specs
  2026-08-09 — Skyly uses `#4fa3e3`, Coastly `#72b01d`, Guestly `#ff9000`,
  Roostly `#ff0063`, Stayly `#6499ff`, Ridely `#ffc600`, Roomzy `#f14634`,
  Innly `#c99552`, Lodgely `#6c8f18`, Hostly `#856849`) — do not copy from
  skyly (blue) or coastly (dark slab).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the page background uses a
  seeded picsum placeholder (`picsum.photos/seed/bookly-1/1920/1080`, a
  hotel-bedroom-appropriate seed; the source `background.jpg` must not be
  copied) with `cover`/`center` PLUS the `rgba(255,255,255,0.8)` white
  overlay (a `::before`-style absolutely-positioned overlay div); date
  inputs are native `<input type="date">` styled with Tailwind (no
  datepicker dependency); the form is a white 642px card (max-width 100%,
  padding 40px 30px, shadow `0 0 10px -5px rgba(0,0,0,0.3)`); the floating
  labels are implemented as REAL `<label htmlFor>` elements (source uses
  non-semantic `<span class="form-label">`) that float via React state
  (focused OR non-empty → `top: 0`, 14px, green `#2b9328`; idle →
  `top: 20px`, 16px, `rgba(0,0,0,0.2)`) — pure CSS `:focus` sibling
  selectors cannot reach the label when it precedes the input in the DOM, so
  a small `useState`/`useRef` hook tracking focus + value per field is the
  faithful equivalent of the source's jQuery `floatedLabel()`; select arrows
  = rotated `➜` glyph (U+279C) or lucide ChevronDown, `rgba(0,0,0,0.2)`,
  32×32, at `right 0 bottom 7px`; body in Montserrat 400/700 via Google
  Fonts `<link>` in `index.html` (NO display font); document title "Bookly —
  Hotel Reservation Template"; brand "Booking"/"Colorlib Booking" →
  "Bookly" everywhere. The "Book Now" button validates the form (name
  non-empty, valid email, phone non-empty, check-in + check-out required,
  check-out ≥ check-in) and reveals a summary line (name, dates, rooms,
  guests) — the original demo is static, so this minimal interactive
  behavior is a documented recreation choice, kept in a pure exported
  function for 100%-coverage tests.

Bookly lives in `apps/bookly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with photo background and white overlay

The system SHALL render a full-viewport (100vh) booking section with a
full-bleed cover/center-positioned photograph as the page background,
covered by an 80% white overlay, vertically centering a two-column layout
(CTA copy + white form card). The page SHALL NOT render any navbar, hero
chrome, or footer (single-section form demo).

#### Scenario: Full-viewport section with photo background

- **GIVEN** the Bookly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed photograph
  (`picsum.photos/seed/bookly-1/1920/1080`) as its background,
  cover-positioned and centered
- **AND** a white overlay (`rgba(255, 255, 255, 0.8)`) SHALL cover the
  whole section above the photo
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: CTA copy column (left side)

The system SHALL render a left-side call-to-action column with the headline
"Make your reservation" and a short supporting paragraph, in the source
typography.

#### Scenario: CTA headline and paragraph

- **GIVEN** the Bookly page is rendered
- **WHEN** the page loads
- **THEN** a `h1` reading "Make your reservation" SHALL be shown on the left
  side of the layout
- **AND** the headline SHALL be uppercase, ~52px, weight 900, in the
  near-black `#181818`
- **AND** a 22px `#181818` paragraph (Lorem-ipsum copy) SHALL appear below
  the headline
- **AND** the CTA column SHALL occupy ~5/12 of the row width on desktop

### Requirement: White form card (right side)

The system SHALL render a white card (~642px wide, subtle shadow, 40px 30px
padding) on the right side of the layout (~6/12 width, offset 1/12),
containing the reservation form with the source field set in order: Name +
Email row, Phone + Rooms + Guests row, Check In + Check Out row, then the
"Book Now" button.

#### Scenario: White card with fields

- **GIVEN** the Bookly page is rendered
- **WHEN** the page loads
- **THEN** a white card SHALL be shown on the right side of the layout
- **AND** the card SHALL be ~642px wide, centered in its column, with
  `rgba(0,0,0,0.3)` shadow and 40px 30px padding
- **AND** the card SHALL contain the form fields in source order: Name +
  Email, then Phone + Rooms + Guests, then Check In + Check Out, then the
  "Book Now" button
- **AND** consecutive fields SHALL have a 20px vertical rhythm between
  `.form-group`s

### Requirement: Field styling tokens

The system SHALL render every field with the source styling: white
background, near-black 16px weight-700 text, 55px height, sharp 0-radius
corners, no side borders, a 2px `rgba(0,0,0,0.2)` bottom border only, and
15px top padding.

#### Scenario: Field styling applied

- **GIVEN** the reservation form is displayed
- **WHEN** the form is rendered
- **THEN** every field (Name, Email, Phone, Rooms, Guests, Check In,
  Check Out) SHALL have a white background with near-black `#181818` 16px
  weight-700 text
- **AND** every field SHALL be 55px tall with sharp 0-radius corners
- **AND** every field SHALL have no border except a 2px
  `rgba(0,0,0,0.2)` bottom border
- **AND** empty unfocused fields SHALL show their placeholder/date text in
  `rgba(0,0,0,0.2)` (and the source's `color: transparent` value-hiding
  behavior for unfocused empty inputs is not required — visible
  `rgba(0,0,0,0.2)` text is the accessible equivalent)

### Requirement: Floating labels

The system SHALL render each field's label as an uppercase weight-700 label
inside the field, idle at `top: 20px` in `rgba(0,0,0,0.2)` 16px, floating to
`top: 0`, 14px, green `#2b9328` when the field is focused OR has a value
(the React equivalent of the source's jQuery `floatedLabel()` +
`.input-not-empty`). Labels SHALL be real `<label>` elements associated with
their controls via `htmlFor`/`id`.

#### Scenario: Idle label position

- **GIVEN** the reservation form is displayed
- **WHEN** a field is empty and not focused
- **THEN** its label SHALL sit at the field's vertical center
  (`top: 20px` of the 55px field), 16px, uppercase, weight 700, in
  `rgba(0,0,0,0.2)`
- **AND** the label SHALL be a real `<label>` associated with the control
  via `htmlFor`/`id` and SHALL NOT capture pointer events

#### Scenario: Floating label on focus and on value

- **GIVEN** the reservation form is displayed
- **WHEN** a field receives focus OR the user types a value into it
- **THEN** its label SHALL float to the field's top edge (`top: 0`),
  shrink to 14px and turn green `#2b9328`
- **AND** the label SHALL remain floated while the field has a value, even
  after the field loses focus

### Requirement: Select fields with arrow glyph

The system SHALL render "Rooms" and "Guests" as selects offering the source
options with `appearance: none` and a floating arrow glyph at the right edge.

#### Scenario: Rooms and Guests selects

- **GIVEN** the reservation form is displayed
- **WHEN** the form is rendered
- **THEN** a "Rooms" select SHALL offer options 1, 2 and 3
- **AND** a "Guests" select SHALL offer options "1 Person", "2 People" and
  "3 People"
- **AND** both selects SHALL hide their native appearance
  (`appearance: none`)
- **AND** an arrow glyph (rotated `➜` U+279C or ChevronDown,
  `rgba(0,0,0,0.2)`, 32×32, 14px) SHALL float at the right edge
  (`right 0 bottom 7px`) of each select, without capturing pointer events

### Requirement: Check In and Check Out date fields

The system SHALL render "Check In" and "Check Out" native date inputs, both
required, side by side in the same row, with empty dates displaying the
`rgba(0,0,0,0.2)` text color.

#### Scenario: Date fields

- **GIVEN** the reservation form is displayed
- **WHEN** the form is rendered
- **THEN** a "Check In" date input and a "Check Out" date input SHALL be
  present side by side in the same row
- **AND** both inputs SHALL be required
- **AND** an empty date input SHALL display the `rgba(0,0,0,0.2)` text
  color until a value is picked

### Requirement: Book Now button

The system SHALL render a full-width "Book Now" submit button (solid green
`#2b9328` background with white weight-700 capitalize text, 55px height)
that validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** all required fields are filled in (name, valid email, phone,
  check-in, check-out with check-out ≥ check-in, rooms, guests)
- **WHEN** the user clicks "Book Now"
- **THEN** the form SHALL show a summary line with the reservation details
  (e.g. "Alex · Aug 10 → Aug 13, 2026 · 2 rooms · 2 People")
- **AND** the summary SHALL be styled with the green `#2b9328` brand color
  or on a green-tinted background

#### Scenario: Submit with missing or invalid fields

- **GIVEN** the reservation form is displayed
- **WHEN** the user clicks "Book Now" with missing required fields or an
  invalid email
- **THEN** the form SHALL show validation messages for the invalid fields
- **AND** no summary SHALL be shown

### Requirement: Mobile stacking

The system SHALL collapse the multi-column layout to a single column on small
screens, matching the source's Bootstrap `col-md-*` / `col-sm-*` behavior.

#### Scenario: Single column below 768px

- **GIVEN** the Bookly page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** the Rooms/Guests pair SHALL stack vertically (source `col-sm-6`
  behavior)
- **AND** the CTA column SHALL stack above the white card (source
  `col-md-*` behavior below 992px)
- **AND** the white card SHALL remain full-width within its column

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-bookly`
- [ ] `scripts/verify-app.sh bookly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with full-bleed cover/center
      PHOTO page background (seeded picsum, `bookly-1/1920/1080`) + 80%
      white overlay → vertically centered two-column row → LEFT CTA (h1
      "Make your reservation", 52px uppercase `#181818` weight 900 + 22px
      `#181818` paragraph, 5/12) → RIGHT white card (6/12 offset 1/12, 642px,
      shadow `0 0 10px -5px rgba(0,0,0,0.3)`, padding 40px 30px: Name+Email
      → Phone+Rooms+Guests → Check In+Check Out → "Book Now" button); NO
      navbar, NO footer (single-section demo)
- [ ] Brand color `#2b9328` (green — floated labels + button background) in
      `@theme` and used via Tailwind classes
- [ ] Text `#181818` (near-black); card `#fff`; overlay `rgba(255,255,255,0.8)`;
      border/placeholder/label-idle/select-arrow `rgba(0,0,0,0.2)`
- [ ] Montserrat 400/700 via Google Fonts `<link>` in `index.html` (NO
      display font)
- [ ] Page background = seeded picsum (`bookly-1/1920/1080`) cover/center
      full-bleed + `rgba(255,255,255,0.8)` overlay (source `background.jpg`
      not copied)
- [ ] CTA: h1 "Make your reservation" 52px uppercase `#181818` weight 900 +
      22px `#181818` paragraph, column ~5/12, `margin-top: 45px`
- [ ] Card: white, max-width 642px, padding 40px 30px, shadow
      `0 0 10px -5px rgba(0,0,0,0.3)`, 20px `.form-group` rhythm
- [ ] Fields: white bg, `#181818` 16px weight-700 text, 55px height, sharp
      0-radius, only a 2px `rgba(0,0,0,0.2)` bottom border, 15px top padding;
      placeholder/empty-date `rgba(0,0,0,0.2)`
- [ ] Floating labels: real `<label htmlFor>` uppercase weight-700; idle at
      `top: 20px` 16px `rgba(0,0,0,0.2)`, floated to `top: 0` 14px green
      `#2b9328` on focus OR non-empty (React state hook equivalent of the
      source jQuery `floatedLabel()`); `pointer-events: none`
- [ ] Selects: Rooms 1/2/3 + Guests "1 Person"/"2 People"/"3 People",
      `appearance: none`, arrow glyph (rotated `➜`/ChevronDown,
      `rgba(0,0,0,0.2)` 32×32 14px) at right 0 bottom 7px
- [ ] Dates: Check In + Check Out (required), native date inputs, empty
      dates `rgba(0,0,0,0.2)`
- [ ] "Book Now" button: full width, solid `#2b9328` bg, white weight-700
      capitalize 18px text, height 55px, border none; validates (name,
      valid email, phone, dates, check-out ≥ check-in) and shows summary /
      validation messages
- [ ] Mobile (<768px): Rooms/Guests stack; CTA stacks above card; <992px:
      CTA/card columns stack
- [ ] Placeholder images via `picsum.photos/seed/bookly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
