# Template: Voyagely (Booking Forms / Travel Booking Form)

## Purpose

Voyagely is a single-page travel-booking form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Reg Form V11" website template
(source: https://colorlib.com/wp/template/colorlib-regform-11/), built under a
DIFFERENT name (Voyagely — a voyage/travel booking, re-branded) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Hawaii-themed travel booking widget: a full-viewport hero
photograph (split-level: green island coastline above the waterline, underwater
temple statues in teal water below), a minimal header with the wordmark
"HAWAII" top-left and a 2×2 grid menu icon top-right, and a centered dark
translucent container (`rgba(11,13,24,0.6)`, radius 10px) holding a horizontal
booking form — Destination (placeholder "EG. HAWAII"), From / To date pickers
("Pick a date" + calendar icon), a Quantity stepper (0, min 0, chevron
up/down), and a yellow "Book now" submit button. Voyagely recreates that
structure 1:1 with matching layout, colors, typography, and content types (no
ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Reg Form V11" / slug
> `colorlib-regform-11` is FORBIDDEN as the app name. **Voyagely** is the new,
> original name — single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified 2026-08-09).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Reg Form V11" — "The best free booking with
  datepicker widget based on Bootstrap with a user-friendly code structure for
  quick integration" (ColorLib meta description). Category in TEMPLATES.md:
  **Booking Forms (22)** (line 323). The recreation brands itself **Voyagely**
  but keeps the same section structure and copy kinds.
- **Live preview DOM analyzed (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/colorlib-regform-11/` returns HTTP 404
  (no Astro-era mirror in `preview.colorlib.com/assets/js/products.js`), but
  the working live demo is
  `https://colorlib.com/etc/regform/colorlib-regform-11/` — HTTP 200,
  page title "Sign Up Form by Colorlib", 3.2 KB HTML + `css/style.css`
  (13.5 KB) + `fonts/material-icon/css/material-design-iconic-font.min.css`
  (icon font: calendar, chevrons) + `vendor/jquery-ui/jquery-ui.min.css`
  (datepicker). Confirmed via the source template page's demo link
  (`href="https://colorlib.com/etc/regform/colorlib-regform-11/"`).
- **Visual design (live render + screenshot `colorlib-reg-form-11.jpg`
  (1200×972, browser-verified 2026-08-09) — match 1:1):** immersive travel
  hero — full-viewport background photo (above water: bright sky, clouds,
  grassy rocky headland; below water: submerged statues on the seabed in
  clear teal-blue water) with `background-size: cover`, centered. Top-left
  "HAWAII" in bold white uppercase sans (Poppins); top-right a 2×2 grid
  (dots) menu icon. Centered horizontally across the middle: a large dark
  semi-transparent container holding the booking interface — four white input
  fields in a row with small white uppercase-ish labels above (Destination /
  From / To / Quantity) and a bright yellow "Book now" button at the right
  end. No navbar links, no footer — this is a one-section form-demo page.
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`div.header`, flex, `align-items: center`,
     `justify-content: space-between`, padding 50px 57px) — two images:
     `images/header-text.png` (90×28, the "HAWAII" wordmark) and
     `images/dots.png` (22×24, the 2×2 grid menu icon). Recreate the
     wordmark as styled text ("VOYAGELY") and the grid icon as a lucide
     `Grid`/`LayoutGrid` icon (no copied assets).
  2. **Booking container** (`div.container`, width 960px, background
     `rgba(11,13,24,0.6)`, `border-radius: 10px`, `margin: 265px auto`) —
     `<form id="booking-form" class="booking-form" method="POST">` with
     padding 35px 70px 51px 70px, containing `div.form-group` (flex,
     `align-items: center`, `justify-content: space-between`):
     - `div.form-destination` (width 230px): `<label for="destination">`
       "Destination" + text input `#destination` placeholder "EG. HAWAII".
     - `div.form-date-from.form-icon` (width 155px): label "From" + text
       input `.date_from` placeholder "Pick a date" + calendar trigger
       (`ui-datepicker-trigger`, absolute right 16px top 40px, color #999).
     - `div.form-date-to.form-icon` (width 155px): label "To" + text input
       `.date_to` placeholder "Pick a date" + calendar trigger.
     - `div.form-quantity` (width 80px, relative): label "Quantity" +
       `span.modify-qty.plus` (chevron-up, absolute right 12px top 23px,
       color #999, z-index 99) + number input `#quantity` value 0 min 0
       (color #999, spin buttons removed via CSS) + `span.modify-qty.minus`
       (chevron-down, absolute right 12px bottom 0).
     - `div.form-submit` (width 140px): `<input type="submit" class="submit"
value="Book now">`.
  3. No footer, no extra content sections in the source.
- **JS behaviors (original, `js/main.js` + inline):** jQuery UI datepicker on
  `#date_from` and `#date_to` (`dateFormat: "dd-mm-yy"`, `showOn: "both"`,
  calendar icon as `buttonText`); quantity stepper functions `Tang()` (+1 when
  value ≥ 0) and `Giam()` (−1 when value ≥ 1) — i.e. min 0, no max; form has
  `method="POST"` with no action (client-side demo). Recreate in React: two
  native `<input type="date">` fields (or a lightweight date picker), a
  stepper with plus/minus buttons honoring the 0 minimum, and a submit that
  validates and shows a booking summary (per repo form conventions — zod +
  react-hook-form patterns).

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Font:** Poppins (Google Fonts, weights 300–900; body 14px, line-height
  1.8, weight 600; labels 12px weight 500; inputs 16px weight 600). Load via
  Google Fonts `<link>` in `index.html`.
- **Brand colors:**
  - `#f8ba0f` — yellow/gold: "Book now" submit button bg. Hover `#ce9906`.
  - `rgba(11, 13, 24, 0.6)` — dark translucent booking container bg (over
    the hero photo).
  - `#fff` — body text/headings, labels, submit button text, input bg.
  - `#222` — input text color.
  - `#999` — input placeholder, quantity value, calendar/stepper icons.
- **Radii:** 10px (booking container), 5px (inputs), 0 / rectangular submit
  button (no radius on `.submit`).
- **Spacing:** container margin 265px auto (vertically centered in hero);
  form padding 35px 70px 51px 70px; header padding 50px 57px; inputs padding
  13px 20px; submit padding 15px 20px + margin-top 23px; labels margin-bottom
  2px; field widths 230 / 155 / 155 / 80 / 140px; stepper icons right 12px
  (plus top 23px, minus bottom 0); datepicker trigger right 16px top 40px.
- **Responsive:** ≤768px — container `width: calc(100% - 30px)`,
  `.form-group` `flex-direction: column`, all fields width 100% +
  margin-bottom 20px; ≤480px — form padding 35px 30px 51px 30px.
- **Placeholder images (never copy ColorLib assets):** hero →
  `https://picsum.photos/seed/voyagely-hero/1461/973` (source photo is
  1461×973; any 16:9 seed works).

## Requirements

### Requirement: Full-screen hero with photo background

The system SHALL render a full-viewport hero whose background is a cover
photograph (tropical coast / underwater travel scene — recreate with a seeded
placeholder photo), with the header and booking container overlaid on it.

#### Scenario: Hero layout

- **GIVEN** the Voyagely page is rendered
- **WHEN** the hero section is displayed
- **THEN** the page SHALL have a full-viewport background photo
  (`background-size: cover`, centered, no repeat)
- **AND** the booking container SHALL be horizontally centered over the
  photo with vertical margin 265px on desktop

### Requirement: Header with wordmark and menu icon

The system SHALL render a top header row with the travel wordmark on the left
and a 2×2 grid menu icon on the right, in white.

#### Scenario: Header content

- **GIVEN** the Voyagely page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL be a flex row (`space-between`, `align-items:
center`) with padding 50px 57px
- **AND** the left side SHALL show the wordmark "VOYAGELY" in bold white
  uppercase sans-serif (recreating the source "HAWAII" image wordmark with
  text — no copied asset)
- **AND** the right side SHALL show a 2×2 grid menu icon (lucide
  `LayoutGrid`), white, with an `aria-label` (e.g. "Menu")

### Requirement: Booking container

The system SHALL render a dark translucent rounded container (960px desktop,
`rgba(11,13,24,0.6)`, radius 10px) holding the booking form.

#### Scenario: Container styling

- **GIVEN** the Voyagely page is rendered
- **WHEN** the booking container is displayed
- **THEN** the container SHALL have background `rgba(11,13,24,0.6)`,
  border-radius 10px, width 960px on desktop, and form padding
  35px 70px 51px 70px
- **AND** on viewports ≤768px the container SHALL be
  `width: calc(100% - 30px)` and the form fields SHALL stack vertically

### Requirement: Destination field

The system SHALL render a destination text input in the booking form.

#### Scenario: Destination input

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Destination" input SHALL be present with the placeholder
  "EG. HAWAII"
- **AND** the input SHALL be required for submission
- **AND** inputs SHALL be white with radius 5px, padding 13px 20px, 16px
  weight-600 `#222` text, and `#999` placeholder

### Requirement: From / To date pickers

The system SHALL render From and To date fields in the booking form, each
with a calendar icon trigger.

#### Scenario: Date fields

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** two date inputs SHALL be present, labeled "From" and "To", each
  with the placeholder "Pick a date"
- **AND** each field SHALL show a calendar icon on its right side (lucide
  `Calendar`), positioned absolutely (right 16px, top 40px, color #999)
- **AND** the To date SHALL not be selectable before the From date
  (validation)

### Requirement: Quantity stepper

The system SHALL render a Quantity stepper with plus/minus chevron buttons
and a numeric value, minimum 0.

#### Scenario: Stepper controls

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Quantity" field SHALL be present with an initial value of 0
  (rendered in `#999`)
- **AND** a chevron-up button SHALL sit above the value and a chevron-down
  button below it (lucide `ChevronUp` / `ChevronDown`, color #999,
  `aria-label`s "Increase quantity" / "Decrease quantity")

#### Scenario: Stepper limits

- **GIVEN** the quantity stepper is displayed
- **WHEN** the user presses the chevron-down button while the value is 0
- **THEN** the value SHALL NOT go below 0
- **AND** pressing chevron-up SHALL increment the value by one

### Requirement: Book now submit button

The system SHALL render the yellow "Book now" submit button (`#f8ba0f`,
white text, `#ce9906` hover) that validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** a destination is entered and From/To dates are chosen
- **WHEN** the user clicks "Book now"
- **THEN** the form SHALL show a summary line with the destination, dates,
  and quantity (e.g. "Voyage to EG. HAWAII from [from] to [to] for N
  guests")

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Book now" without a destination or dates
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

### Requirement: Responsive behavior

The system SHALL stack the booking form fields vertically on mobile and
reduce the container/form padding.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Voyagely page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the booking container SHALL be `calc(100% - 30px)` wide
- **AND** the form fields SHALL stack in a column, each 100% wide with
  margin-bottom 20px
- **AND** on viewports ≤480px the form padding SHALL be
  35px 30px 51px 30px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-voyagely`
- [ ] `scripts/verify-app.sh voyagely` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): header (wordmark "VOYAGELY" +
      grid menu icon) → full-screen hero photo → dark booking container
      (Destination · From · To · Quantity · Book now). No extra sections.
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#f8ba0f`
      (submit bg, hover `#ce9906`), `rgba(11,13,24,0.6)` (container),
      `#fff` / `#222` / `#999` text and input colors
- [ ] Font: Poppins 300–900 via Google Fonts `<link>` in `index.html`,
      title "Voyagely — Travel Booking Template"
- [ ] Hero photo = seeded picsum (`voyagely-hero`); wordmark = styled text;
      icons from lucide-react (`LayoutGrid`, `Calendar`, `ChevronUp`,
      `ChevronDown`) — no copied assets
- [ ] Date inputs are native `<input type="date">`; To ≥ From validation
- [ ] Stepper honors min 0; submit shows summary / validation messages
- [ ] Mobile (≤768px): container `calc(100% - 30px)`, fields stack 1-col;
      ≤480px form padding 30px sides
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Colorlib Regform 11" row, line
      323 — Booking Forms category)
