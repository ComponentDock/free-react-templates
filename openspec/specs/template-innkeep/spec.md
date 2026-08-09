# Template: Innkeep (Booking Forms / Room Booking Form)

## Purpose

Innkeep is a single-page hotel room-booking form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Regform 25" website template
(source: https://colorlib.com/wp/template/colorlib-regform-25/), built under a
DIFFERENT name (Innkeep — an inn/hotel reservation keeper, re-branded) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a minimalist room-reservation widget: a full-viewport
photograph (a hiker in a straw hat overlooking a red-rock canyon) as the page
background, and a white 511px form card vertically centered on the left
(11.07% from the left edge, wrapped in a 7px subtle-texture frame with a soft
drop shadow) holding the heading "FIND A ROOM", a two-column grid of fields —
Name ("Your Name") / Phone ("Phone"), Check-in / Check-out (date pickers with
calendar icons, format `dd M yyyy`), Adults / Children (1–6 dropdowns with
chevron-down icons) — a custom checkbox with a placeholder consent line, and a
blue uppercase "BOOK ROOM" button whose label does a slide-swap on hover.
Innkeep recreates that structure 1:1 with matching layout, colors, typography,
and content types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Colorlib Regform 25" / slug
> `colorlib-regform-25` is FORBIDDEN as the app name. **Innkeep** is the new,
> original name — single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified 2026-08-09).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Regform 25" — "An easy-to-use free
  Bootstrap book a room form with a minimalist and versatile design that
  easily adapts to your branding" (ColorLib meta description). Category in
  TEMPLATES.md: **Booking Forms (22)** (line 324). The recreation brands
  itself **Innkeep** but keeps the same section structure and copy kinds.
- **Live preview DOM analyzed (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/colorlib-regform-25/` returns HTTP 404
  ("Not Found" — classic-era template, not in the Astro-era
  `preview.colorlib.com/assets/js/products.js` product map), but the working
  live demo is `https://colorlib.com/etc/regform/colorlib-regform-25/` —
  HTTP 200, page title "RegistrationForm_v9 by Colorlib", 3.6 KB HTML +
  `css/style.css` (5.5 KB) + `fonts/linearicons/style.css` (calendar icon) +
  `fonts/material-design-iconic-font/css/material-design-iconic-font.min.css`
  (chevron-down icon) + `vendor/date-picker/css/datepicker.min.css` (Air
  Datepicker). Confirmed via the source template page's demo link
  (`href="https://colorlib.com/etc/regform/colorlib-regform-25/"`).
- **Visual design (live render + screenshot `colorlib-reg-form-25.jpg`
  (1200×972, browser-verified 2026-08-09) — match 1:1):** adventure-travel
  backdrop — a person (light-blue tee, wide-brim beige straw hat) seen from
  behind, looking out over a dramatic red-rock canyon with a river below
  (`background-size: cover`, anchored right-center on desktop, centered
  ≤1199px). Overlaid on the left: a clean white form card with a soft shadow
  (`0 0 10px rgba(0,0,0,0.2)`) and a faint textured 7px frame. Heading "FIND
  A ROOM" in bright medium blue (`#3e91f7`), uppercase, wide letter-spacing.
  All inputs are flat white with thin `#e6e6e6` borders; labels are dark
  `#4c4c4c` with an asterisk for required fields; the solid blue `#3e91f7`
  "BOOK ROOM" button matches the heading. No navbar, no footer — a one-section
  form-demo page.
- **Section order (1:1, verified from live DOM):**
  1. **Wrapper** (`div.wrapper`, min-height 100vh, background
     `url(images/bg-registration-form-9.jpg) no-repeat right center`,
     background-size cover — the canyon photo IS the page background, not a
     section div).
  2. **Inner frame** (`div.inner` — position absolute, top 50%,
     left 11.07%, translateY(-50%), width 511px, padding 7px, background
     `url(images/bg-inner.png) repeat` (66×66 subtle light texture tile),
     box-shadow `0 0 10px 0 rgba(0,0,0,0.2)`). The 7px padding + texture
     tile creates a thin decorative frame around the white form.
  3. **Form** (`<form action="">`, width 100%, padding 57px 46px 55px,
     background #fff):
     - `h3` "FIND A ROOM" (uppercase, 35px, Poppins-Medium, `#3e91f7`,
       letter-spacing 3px, margin-bottom 22px).
     - `div.form-row` (flex, margin-bottom 25px) — two `div.form-wrapper`
       (width 50%, first-child margin-right 25px):
       - Name: `<label>` "Name *" + `input.form-control[type=text]`
         placeholder "Your Name".
       - Phone: `<label>` "Phone *" + input placeholder "Phone".
     - `div.form-row` — Check-in / Check-out:
       - `<label>` "Check-in *" + `span.lnr.lnr-calendar-full` (Linearicons
         calendar, absolute left 16px top 43px, 15px, `#666`) +
         `input.form-control.datepicker-here` (`data-language='en'`,
         `data-date-format="dd M yyyy"`, id dp1, padding-left 39px).
       - Check-out: same, id dp2.
     - `div.form-row.last` (margin-bottom 22px) — Adults / Children:
       - `<label>` "Adults *" + `select.form-control` (options 1–6) +
         `i.zmdi.zmdi-chevron-down` (absolute right 16px top 42px, 15px,
         `#666`).
       - `<label>` "Chidren *" (sic — source typo; use "Children" in the
         recreation) + select 1–6 + chevron-down.
     - `div.checkbox` (padding-left 22px) — custom checkbox (native input
       opacity 0 + `.checkmark` 12×13px, radius 2px, bg `#ebebeb`, border
       `#ccc`, check glyph `#333` shown via `:checked ~ .checkmark:after`)
       with the placeholder consent line "No one rejects, dislikes, or
       avoids pleasure itself." (source copy — paraphrase to an
       equivalent consent-style line).
     - `<button data-text="Book Room">` — 173×42px, margin-top 30px, bg
       `#3e91f7`, white uppercase text (Muli-SemiBold 15px,
       letter-spacing 3px), hover `#0072fd` with the label slide-swap
       animation (see JS behaviors).
  4. No footer, no navbar, no extra content sections in the source.
- **JS behaviors (original, `js/main.js` + vendor):** Air Datepicker
  (`vendor/date-picker`) initialised on `#dp1` / `#dp2` with
  `dateFormat: "dd M yyyy"`, English locale; selects for Adults/Children;
  custom checkbox; the button's hover swap is pure CSS (`button:after`
  `content: attr(data-text)` — on hover the visible `<span>` fades/moves down
  40px while the `::after` copy slides in from `translate(-30%,-25%)` to
  `translate(0,-25%)`). Recreate in React: two native `<input type="date">`
  fields (repo convention — see Voyagely) with a calendar icon, two `<select>`
  dropdowns, a custom checkbox, and a submit that validates and shows a
  booking summary (per repo form conventions — zod + react-hook-form
  patterns). Keep the button hover label-swap as a CSS/React transition.

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Fonts:** Poppins (body `Poppins-Regular` 13px; heading `Poppins-Medium`)
  and Muli (inputs `Muli-Regular` 13px; labels/button `Muli-SemiBold`).
  Recreate with Google Fonts `<link>` in `index.html`: Poppins 400/500 +
  Muli 400/600 (or Muli via Google Fonts; fall back to Poppins-only with
  weight 400/600 if Muli is not available).
- **Brand colors:**
  - `#3e91f7` — brand blue: "FIND A ROOM" heading + "BOOK ROOM" button bg.
    Hover `#0072fd`.
  - `#fff` — form card bg, button text.
  - `#4c4c4c` — field labels.
  - `#666` — input text, calendar/chevron icons.
  - `#999` — body text (outside the form, mostly unused on this page).
  - `#e6e6e6` — input border (1px solid).
  - `#ebebeb` + `#ccc` — checkbox checkmark bg / border; check glyph `#333`.
  - `rgba(0,0,0,0.2)` — card drop shadow.
- **Radii:** 0 (rectangular inputs, button); 2px (checkbox checkmark).
- **Spacing:** card width 511px; left 11.07%; form padding 57px 46px 55px;
  heading margin-bottom 22px; form-row margin-bottom 25px (last 22px);
  label margin-bottom 8px; inputs height 42px, padding 0 14px (date inputs
  padding-left 39px); button 173×42px, margin-top 30px; checkbox padding-left
  22px; icons 15px (calendar left 16px top 43px; chevron right 16px top 42px).
- **Responsive:** ≤1199px — background-position center center; ≤991px — card
  width 60%; ≤767px — card width 100%, static position (no vertical centering,
  no shadow, padding 0), wrapper background none, form padding 30px 20px,
  `.form-row` block (fields stack 100% wide, margin-bottom 25px, first-child
  margin-right 0).
- **Placeholder images (never copy ColorLib assets):** page background →
  `https://picsum.photos/seed/innkeep-bg/1920/1288` (source photo is
  1920×1288; any canyon/nature 16:10-ish seed works). The 66×66 `bg-inner.png`
  frame texture → approximate with a plain light-gray/white 7px frame (e.g. a
  subtle `bg-neutral-100` border or a 7px `#f7f7f7` padding) — do NOT copy the
  PNG.

## Requirements

### Requirement: Full-viewport photo background

The system SHALL render a full-viewport page whose background is a cover
photograph (adventure/canyon scene — recreate with a seeded placeholder photo),
with the form card overlaid on the left.

#### Scenario: Background layout

- **GIVEN** the Innkeep page is rendered
- **WHEN** the page is displayed
- **THEN** the page SHALL have a full-viewport background photo
  (`background-size: cover`, no repeat, anchored right-center on desktop and
  centered ≤1199px)
- **AND** on viewports ≤767px the background photo SHALL be hidden (source
  sets `background: none` on the wrapper)

### Requirement: Form card frame

The system SHALL render the white form card vertically centered on the left
side of the viewport, wrapped in a thin decorative frame with a soft drop
shadow.

#### Scenario: Card placement and styling

- **GIVEN** the Innkeep page is rendered on a desktop viewport
- **WHEN** the form card is displayed
- **THEN** the card SHALL be 511px wide, positioned at 11.07% from the left
  edge, vertically centered (top 50% + translateY(-50%))
- **AND** the card SHALL have a soft drop shadow `0 0 10px rgba(0,0,0,0.2)`
  and a 7px decorative frame around the white form (approximate the source
  texture tile with a subtle light-gray frame)
- **AND** on viewports ≤991px the card SHALL be 60% wide
- **AND** on viewports ≤767px the card SHALL be 100% wide, static (no
  vertical centering), with no shadow and no frame

### Requirement: FIND A ROOM heading

The system SHALL render the form heading "FIND A ROOM" in the brand blue,
uppercase, with wide letter-spacing.

#### Scenario: Heading style

- **GIVEN** the Innkeep form is displayed
- **WHEN** the heading is rendered
- **THEN** the heading SHALL read "FIND A ROOM" in `#3e91f7`, uppercase,
  35px, weight 500, letter-spacing 3px, margin-bottom 22px

### Requirement: Name and Phone fields

The system SHALL render Name and Phone text inputs in the first row of the
form, each with a required label and placeholder.

#### Scenario: Contact fields

- **GIVEN** the Innkeep form is displayed
- **WHEN** the first form row is rendered
- **THEN** a "Name *" input SHALL be present with the placeholder
  "Your Name" (required for submission)
- **AND** a "Phone *" input SHALL be present with the placeholder "Phone"
  (required for submission)
- **AND** both inputs SHALL be flat white with a 1px `#e6e6e6` border,
  height 42px, padding 0 14px, 13px `#666` text
- **AND** labels SHALL be `#4c4c4c`, 17px, margin-bottom 8px

### Requirement: Check-in / Check-out date pickers

The system SHALL render Check-in and Check-out date fields, each with a
calendar icon on the left.

#### Scenario: Date fields

- **GIVEN** the Innkeep form is displayed
- **WHEN** the second form row is rendered
- **THEN** a "Check-in *" date input SHALL be present with a calendar icon
  on its left (lucide `Calendar`, 15px, `#666`, positioned left 16px top
  43px)
- **AND** a "Check-out *" date input SHALL be present with the same calendar
  icon treatment
- **AND** both SHALL use native `<input type="date">` (repo convention)
  with the format dd MMM yyyy
- **AND** the Check-out date SHALL not be selectable before the Check-in
  date (validation)

### Requirement: Adults / Children dropdowns

The system SHALL render Adults and Children dropdowns (options 1–6) with a
chevron-down icon on the right.

#### Scenario: Guest dropdowns

- **GIVEN** the Innkeep form is displayed
- **WHEN** the last form row is rendered
- **THEN** an "Adults" select SHALL be present with options 1 through 6 and
  default value 1
- **AND** a "Children" select SHALL be present with options 1 through 6 and
  default value 1 (fix the source "Chidren" typo)
- **AND** each select SHALL show a chevron-down icon (lucide
  `ChevronDown`, 15px, `#666`) on its right (right 16px, top 42px) and
  hide the native appearance

### Requirement: Consent checkbox

The system SHALL render a custom consent checkbox with a placeholder
consent-style line of text.

#### Scenario: Checkbox rendering and toggle

- **GIVEN** the Innkeep form is displayed
- **WHEN** the checkbox is rendered
- **THEN** a custom checkbox SHALL be present next to a consent-style line
  (paraphrase of the source "No one rejects, dislikes, or avoids pleasure
  itself." — keep the same kind of placeholder consent copy)
- **AND** the checkbox SHALL be toggleable and show a check mark when
  checked (12×13px, radius 2px, bg `#ebebeb`, border `#ccc`, check `#333`)

### Requirement: BOOK ROOM submit button

The system SHALL render the blue uppercase "BOOK ROOM" submit button with the
source hover behavior, validating the form and showing a booking summary.

#### Scenario: Button styling and hover

- **GIVEN** the Innkeep form is displayed
- **WHEN** the button is rendered
- **THEN** a "BOOK ROOM" button SHALL be present (173×42px, margin-top
  30px, bg `#3e91f7`, white uppercase 15px text, letter-spacing 3px)
- **AND** on hover the button SHALL darken to `#0072fd` and the label SHALL
  do the source slide-swap (visible label slides down/fades while the same
  text slides in from the left)

#### Scenario: Submit with valid input

- **GIVEN** a name, phone, check-in, and check-out are entered
- **WHEN** the user clicks "BOOK ROOM"
- **THEN** the form SHALL show a summary line with the guest name, dates,
  adults, and children (e.g. "Room booked for [name]: [check-in] to
  [check-out], [N] adults, [M] children")

#### Scenario: Submit with missing fields

- **GIVEN** the Innkeep form is displayed
- **WHEN** the user clicks "BOOK ROOM" with required fields missing
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

### Requirement: Responsive behavior

The system SHALL stack the form fields vertically on mobile and remove the
background photo, card shadow, and frame.

#### Scenario: Mobile layout (≤767px)

- **GIVEN** the Innkeep page is rendered on a viewport ≤767px
- **WHEN** the page is displayed
- **THEN** the card SHALL be full-width, static, with no shadow and no frame
- **AND** the background photo SHALL be hidden
- **AND** the form SHALL use padding 30px 20px
- **AND** the form rows SHALL stack vertically with each field 100% wide and
  margin-bottom 25px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-innkeep`
- [ ] `scripts/verify-app.sh innkeep` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): full-viewport canyon photo
      background → white form card (frame + shadow, left 11.07%, vertically
      centered) → FIND A ROOM heading → Name/Phone row → Check-in/Check-out
      row → Adults/Children row → consent checkbox → BOOK ROOM button. No
      navbar, no footer, no extra sections.
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#3e91f7`
      (heading + button, hover `#0072fd`), `#fff` card, `#4c4c4c` labels,
      `#666` inputs/icons, `#e6e6e6` input borders, `#ebebeb`/`#ccc`
      checkbox
- [ ] Fonts: Poppins (400/500) + Muli (400/600) via Google Fonts `<link>`
      in `index.html`, title "Innkeep — Room Booking Template"
- [ ] Background photo = seeded picsum (`innkeep-bg`); icons from
      lucide-react (`Calendar`, `ChevronDown`) — no copied assets
- [ ] Date inputs are native `<input type="date">`; Check-out ≥ Check-in
      validation
- [ ] Adults/Children selects 1–6 with chevron icons; "Children" typo fixed
- [ ] Custom consent checkbox with checkmark; BOOK ROOM hover slide-swap
- [ ] Submit shows summary / validation messages (zod + react-hook-form
      patterns)
- [ ] Mobile (≤767px): card full-width static, photo hidden, fields stack
      1-col
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Colorlib Regform 25" row, line
      324 — Booking Forms category)
