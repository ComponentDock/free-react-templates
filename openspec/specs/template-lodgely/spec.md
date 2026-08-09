# Template: Lodgely (Booking Forms / Hotel Booking Widget)

## Purpose

Lodgely is a single-page hotel-booking form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V16" website template
(source: https://colorlib.com/wp/template/colorlib-booking-16/), built under a
DIFFERENT name (Lodgely — "lodge", a small hotel/accommodation, fitting the
hotel booking use case, plus the friendly "-ly" suffix, matching the Booking
Forms family convention: Reservly, Roomzy, Roostly, Stayly, Ridely, Triply,
Innly; re-branded) per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-16/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-stayly / template-roostly / template-roomzy / template-reservly
> / template-ridely / template-triply / template-innly preps — the
> `preview.colorlib.com/assets/js/products.js` product map only covers new
> Astro-era templates). The LIVE PREVIEW button on the ColorLib template page
> resolves to `https://colorlib.com/etc/bforms/<slug>/` for the whole family.
> **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-16/` (HTTP 200, ~5.3 KB
> HTML + `css/style.css` ~2.5 KB), and the TEMPLATES.md screenshot
> (`colorlib-booking-16.jpg`, 1200×972, viewed in browser) matches the live
> render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V16" — page title "Colorlib
  Booking Form V16 - Free Online Hotel Booking Widget"; meta description "The
  best free online hotel booking widget template that adapts to your
  accommodation business website smoothly." Category in TEMPLATES.md:
  **Booking Forms (22)**. Internal doc title: "Booking Form HTML Template".
  The recreation brands itself **Lodgely** but keeps the same section
  structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-16/` (HTTP 200, ~5.3 KB
  HTML). Single-section document: `#booking.section` (height 100vh,
  font-family 'Hind') with `.section-center` (absolute, top 50%,
  translateY(-50%)) vertically centering a `.container > .row > .booking-form`
  card:
  - `#booking` — **`background-image: url('../img/background.jpg')`,
    background-size: cover, background-position: center** (the SECTION
    carries the photo) plus `#booking::before` — an absolute full-bleed
    overlay **`background: rgba(0, 0, 0, 0.6)`** (a HEAVY 60% black scrim —
    the DARK side of the family; Booking 15/Innly uses a light 0.2, do NOT
    copy Innly's light scrim).
  - `.booking-form` — **`max-width: 586px`, `width: 100%`, `margin: auto`**
    (narrower than Innly's 768px card; NO card background of its own — the
    DARK panel is the `<form>` itself).
  - `.form-header` — `text-align: center`, `margin-bottom: 25px`; **h1
    "Make your reservation"** — `font-size: 42px`, `color: #fff`,
    `font-weight: 700`, `text-transform: capitalize`, `margin: 0`. The h1
    inherits the **'Hind' SANS-SERIF** body font (NOT a serif display font
    like Innly's Cardo).
  - `<form>` — **`background-color: #1e1e1e`, `padding: 40px`,
    `box-shadow: 0px 5px 15px -5px rgba(0, 0, 0, 0.8)`** (the DARK panel;
    NO border-radius → sharp 0px corners).
  - Row 1 (Bootstrap `row` + `col-md-6` × 2, NO Bootstrap dependency in the
    recreation):
    - **Check In** (date input, `required`) — label above, `.form-label`.
    - **Check out** (date input, `required`).
    - **NO `.in-out` divider** — this variant has NO ⇔ symbol between the
      date fields (unlike Innly/Booking 15).
  - Row 2 (Bootstrap `col-md-4` × 3):
    - **No of rooms** (select, options 1/2/3) + `.select-arrow`.
    - **Adults** (select, options 1/2/3) + `.select-arrow`.
    - **Children** (select, options 0/1/2) + `.select-arrow`.
    - The submit button is NOT in this row (unlike Innly's col-md-3 × 4
      layout) — it sits below in its own `.form-btn` wrapper.
  - `.form-btn` → `.submit-btn` full-width **"Check availability"** button.
  - NO navbar, NO hero copy, NO footer, NO other sections — a one-section
    form demo (page ends with only the GA script). No media queries in
    `style.css` (Bootstrap handles the column collapse on mobile).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-16.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** full-viewport
  photograph of a bright tropical resort — a large clear-blue swimming pool
  in the foreground, palm trees, and a sandy deck with lounge chairs and
  thatched beach umbrellas under a sunny sky (vibrant blues, greens, sandy
  beiges) — dimmed heavily by the 60% black scrim. Dead center: a **DARK
  near-black panel** (max-width 586px, padding 40px, sharp corners, soft
  drop shadow) with a centered bold WHITE sans-serif headline "Make Your
  Reservation" (42px). Row 1: two dark date inputs (no visible borders) side
  by side, no divider between them. Row 2: three dark selects (No of rooms 1,
  Adults 1, Children 0) with a small white arrow glyph at the right edge of
  each. Bottom: a full-width **lime/olive-green `#6c8f18` button** with white
  text "Check availability". High-contrast dark-on-photo hotel booking
  aesthetic — the DARK counterpart of Innly (Booking 15)'s bright-white card,
  but unlike Triply (Booking 14) it KEEPS the centered header and the
  static-labels-above-inputs pattern.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (height 100vh) section with the
     tropical-resort photo background (`cover`/`center`) + `rgba(0,0,0,0.6)`
     scrim; content vertically centered via `.section-center`.
  2. `.booking-form` (max-width 586px, margin auto) — the entire card:
     - `.form-header` — centered **"Make your reservation"** h1 (Hind 700,
       42px, `#fff`, capitalized).
     - Row 1: **Check In** (date, required) · **Check out** (date, required)
       — two columns, NO divider between them.
     - Row 2: **No of rooms** (select 1/2/3) · **Adults** (select 1/2/3) ·
       **Children** (select 0/1/2), each with a floating white arrow glyph.
     - `.form-btn` — **Check availability** (full-width solid olive-green
       `#6c8f18` submit, white text).
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand/accent color: **olive/lime green `#6c8f18`** — the SOLID
    submit-button background (white text). The only pop color on the dark
    panel; echoes the tropical greens in the photo.
  - Form panel background: **near-black `#1e1e1e`**, **`padding: 40px`**,
    `border-radius: 0` (the whole design is sharp-cornered — NO radii
    anywhere, unlike Innly's 3px family), `box-shadow: 0px 5px 15px -5px
rgba(0, 0, 0, 0.8)`.
  - Section background: photo `../img/background.jpg` `cover`/`center` +
    heavy scrim **`rgba(0, 0, 0, 0.6)`**.
  - Headline: **`#fff`** (white), `font-family: 'Hind', sans-serif`, weight
    700, 42px, capitalized — NOT a serif.
  - Font: **'Hind', sans-serif** (body/labels/inputs/button/headline —
    weights 400 + 700). Google Fonts link recommendation:
    `family=Hind:wght@400;700`.
  - Labels (`.form-label`): `color: #fff`, `font-size: 14px`,
    `font-weight: 400` (NOT 700, NOT a brand color), `margin-bottom: 5px`,
    `display: inline-block`, `letter-spacing: 0.4px` — STATIC WHITE labels
    ABOVE the input (NOT the bottom-edge tab bars of Triply/Booking 14, NOT
    floating labels).
  - Inputs (`.form-control`): `background-color: #2d2d2d`, `height: 50px`,
    `padding: 0px 20px`, **`border: none`** (no border at all — dark inputs
    on the dark panel, distinguished by the lighter `#2d2d2d` fill),
    `box-shadow: none`, `border-radius: 0px`, **`color: #fff`**;
    placeholder **`rgba(255, 255, 255, 0.3)`**. Empty date inputs render
    dim white (`rgba(255,255,255,0.3)` via
    `input[type="date"].form-control:invalid`).
  - `.form-group`: `position: relative`, `margin-bottom: 30px`.
  - Select: `appearance: none`; custom `.select-arrow` — absolute,
    `right: 6px`, `bottom: 6px`, **32×32px**, `line-height: 32px`,
    `text-align: center`, `pointer-events: none`, **`color: #fff`**,
    `font-size: 14px`; `::after` content `'\279C'` (➜) rotated 90°. NOTE:
    the arrow is a FLOATING white glyph inside the dark input — there is NO
    grey/branded tab background (unlike Innly's 24px `#e1e1e1` tab and
    unlike Triply's full-width bottom bar). No focus color change.
  - Button (`.submit-btn`): **`color: #fff`, `background-color: #6c8f18`**,
    `font-weight: 400`, `height: 50px`, `border: none`, `display: block`,
    `width: 100%`, `letter-spacing: 0.4px`, `border-radius: 0` — text
    **"Check availability"**. `.form-btn` wrapper has NO extra margin in the
    CSS (the default Bootstrap form spacing applies).
- **KEY DIFFERENCES vs Innly (Booking 15) — do NOT copy the Innly light
  design:**
  - DARK panel `#1e1e1e` + sharp 0px corners vs white `#fff` card + 3px
    radius; max-width 586px vs 768px; form padding 40px vs card padding 30px.
  - Heavy 60% scrim vs light 20%; same bright resort photo underneath.
  - Headline in **Hind sans** 42px `#fff` vs Cardo serif 38px `#0c0c09`.
  - NO ⇔ divider between the dates (Innly has the bronze divider).
  - Static WHITE weight-400 labels with letter-spacing 0.4px vs static bronze
    weight-700 labels; no brand-colored label text.
  - Inputs: `#2d2d2d` fill, NO border, radius 0, white text vs white fill,
    1px `#e1e1e1` border, radius 3px, grey text.
  - Select arrow: floating 32×32 white glyph (right 6px bottom 6px), no tab
    background vs 24px grey tab with bronze focus state.
  - Olive-green `#6c8f18` button, weight 400, letter-spacing 0.4px vs bronze
    `#c99552` weight-700 button.
  - Layout: button in its own `.form-btn` row below the 3 selects (col-md-4 × 3) vs inside the 4-column row (col-md-3 × 4).
  - Same field set (check in/out, rooms, adults, children) and same copy.
- **KEY DIFFERENCES vs Triply (Booking 14) — also dark, do NOT merge the two:**
  - HAS a centered h1 header (Triply has no header at all).
  - STATIC white labels above inputs vs hidden-until-filled bottom tab bars.
  - Olive `#6c8f18` button vs yellow `#ffc600`; both white-ish/light text on
    dark cards.
  - Hotel field set (check in/out, rooms, adults, children) vs taxi field set
    (name, phone, pickup/destination, passengers, date, time).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; background photo → seeded
  picsum placeholder (`picsum.photos/seed/lodgely-1/1600/900`, a
  tropical-resort/pool seed; the source `background.jpg` must not be copied)
  as a full-bleed section background with an `rgba(0,0,0,0.6)` overlay
  (Tailwind `bg-black/60`); date inputs are native `<input type="date">`
  styled with Tailwind (no datepicker dependency); select arrows = rotated
  `➜` glyph (U+279C) or lucide ChevronDown as a floating white glyph at
  `right 6px bottom 6px` (32×32, NO tab background); the h1 uses the body
  font (Hind 700, 42px, white) — NOT a serif; Hind (400/700) via Google
  Fonts `<link>` in `index.html`; document title "Lodgely — Hotel Booking
  Widget Template"; brand "Booking"/"Colorlib Booking" → "Lodgely"
  everywhere. The "Check availability" button validates the form (check-in
  and check-out dates required; check-out ≥ check-in; rooms/adults/children
  selected) and reveals a summary line (check-in → check-out, rooms, adults,
  children) — the original demo is static, so this minimal interactive
  behavior is a documented recreation choice, kept in a pure exported
  function for 100%-coverage tests. Labels are static, white, ABOVE the
  input — NOT bottom tab bars, NOT floating labels.

Lodgely lives in `apps/lodgely` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport hotel booking section

The system SHALL render a full-viewport (100vh) booking section with a
tropical-resort photograph background dimmed by a 60% black overlay,
vertically centering a dark rounded-free form panel. The page SHALL NOT
render any navbar, hero copy, or footer chrome (single-section form demo).

#### Scenario: Full-viewport section with photo background and heavy scrim

- **GIVEN** the Lodgely page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed background photograph
  (seeded picsum tropical-resort image) with `cover`/`center` sizing
- **AND** the photograph SHALL be dimmed by an `rgba(0,0,0,0.6)` overlay
- **AND** a near-black panel (`#1e1e1e`, max-width 586px, padding 40px,
  border-radius 0, drop shadow) SHALL be vertically and horizontally centered
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: Form header

The system SHALL render a centered form header with the headline "Make your
reservation" in bold white sans-serif (the body font) above the form fields.

#### Scenario: Centered white sans-serif headline

- **GIVEN** the Lodgely page is rendered
- **WHEN** the form panel is displayed
- **THEN** a centered `h1` reading "Make your reservation" SHALL appear at
  the top of the panel
- **AND** the headline SHALL use the Hind sans-serif font (the body font),
  weight 700, size ~42px, in white `#fff`, capitalized
- **AND** the headline SHALL be followed by a 25px gap before the fields

### Requirement: Check-in and check-out date fields

The system SHALL render Check In and Check out date inputs side by side in
the booking form, with no divider between them.

#### Scenario: Date fields without divider

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Check In" date input and a "Check out" date input SHALL be
  present side by side
- **AND** both inputs SHALL be required
- **AND** NO divider symbol SHALL appear between the two fields
- **AND** an empty date input SHALL display dim white
  (`rgba(255,255,255,0.3)`) placeholder-like text until a value is picked
- **AND** the inputs SHALL have a `#2d2d2d` fill, no border, sharp corners
  and white text

#### Scenario: Check-out not before check-in

- **GIVEN** the user has picked a check-in date
- **WHEN** the user picks a check-out date earlier than the check-in date
- **THEN** the form SHALL flag the check-out field as invalid
- **AND** submission SHALL be blocked until check-out is on or after
  check-in

### Requirement: Rooms, Adults and Children selects

The system SHALL render three selects (No of rooms, Adults, Children) with
the source option sets and a floating white arrow glyph at the right edge of
each select.

#### Scenario: Select field set

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "No of rooms" select SHALL offer options 1, 2 and 3
- **AND** an "Adults" select SHALL offer options 1, 2 and 3
- **AND** a "Children" select SHALL offer options 0, 1 and 2
- **AND** each select SHALL display an arrow (rotated `➜` glyph or
  ChevronDown) as a floating white 32×32 glyph at `right 6px bottom 6px`
  inside the dark input
- **AND** the arrow SHALL have no tab background (no grey/branded tab)

### Requirement: Check availability button

The system SHALL render a full-width "Check availability" submit button
(solid olive-green `#6c8f18` background with white text, sharp corners) that
validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** check-in and check-out dates are filled in (check-out ≥
  check-in) and rooms, adults and children are selected
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the reservation details
  (e.g. "Check-in 2026-08-10 → Check-out 2026-08-13 · 1 room · 2 adults ·
  0 children")
- **AND** the summary SHALL be styled with the olive-green `#6c8f18` brand
  color or on an olive-tinted background

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Check availability" with missing required fields
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

### Requirement: Static white labels

The system SHALL render each field with a static, white label ABOVE the
input (matching the source — NOT floating labels, NOT bottom-edge tab bars).

#### Scenario: Label placement and styling

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** every field (Check In, Check out, No of rooms, Adults, Children)
  SHALL have a label directly above its input
- **AND** each label SHALL be 14px, weight 400, white `#fff`, with
  letter-spacing 0.4px
- **AND** each label SHALL be associated with its control via
  `htmlFor`/`id` (accessible)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-lodgely`
- [ ] `scripts/verify-app.sh lodgely` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with tropical-resort photo
      background + `rgba(0,0,0,0.6)` scrim → vertically centered near-black
      panel (`#1e1e1e`, max-width 586px, padding 40px, radius 0, shadow) →
      centered white sans-serif header "Make your reservation" → fields in
      source order → Check availability button; NO navbar, NO footer
      (single-section demo)
- [ ] Brand color `#6c8f18` (button background, summary accent) in `@theme`
      and used via Tailwind classes
- [ ] Hind (400/700) via Google Fonts `<link>` in `index.html`
- [ ] Background = seeded picsum (`lodgely-1/…`) full-bleed with `bg-black/60`
      overlay, `cover`/`center`
- [ ] Panel: max-width 586px, bg `#1e1e1e`, radius 0, padding 40px, margin
      auto, `shadow-[0px_5px_15px_-5px_rgba(0,0,0,0.8)]`
- [ ] Header: h1 "Make your reservation", Hind 700 42px `#fff` (body font,
      NOT serif), centered, 25px bottom margin
- [ ] Check In (date, required) + Check out (date, required) side by side;
      NO ⇔ divider
- [ ] Inputs: `#2d2d2d` fill, height 50px, padding 0 20px, NO border, radius
      0, 14px white text, `rgba(255,255,255,0.3)` placeholder / dim empty
      date state
- [ ] Selects: No of rooms (1/2/3), Adults (1/2/3), Children (0/1/2);
      `appearance: none`; floating white 32×32 arrow glyph (rotated
      `➜`/ChevronDown) at right 6px bottom 6px, NO tab background
- [ ] Labels: static, above input, 14px weight-400 white `#fff`
      letter-spacing 0.4px, `htmlFor`/`id` associated
- [ ] "Check availability" button: full width, `#6c8f18` bg, white weight-400
      text with letter-spacing 0.4px, height 50px, radius 0, border none;
      validates (dates required, check-out ≥ check-in) and shows summary /
      validation messages
- [ ] Placeholder images via `picsum.photos/seed/lodgely-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
