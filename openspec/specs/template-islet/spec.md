# Template: Islet (Travel Booking Form Landing)

## Purpose

Islet is a single-screen travel-booking form page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free
"Colorlib Reg Form V11" design (see TEMPLATES.md, Booking Forms category),
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a full-viewport Hawaii travel booking page: a cinematic
over/underwater photo background, a small header strip with a white "HAWAII"
wordmark (left) and a grid/waffle icon (right), and a single centered dark
translucent booking panel (rounded 10px) holding one row of fields —
Destination, From/To date pickers, a Quantity stepper, and a yellow
"Book now" submit button. Islet recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

> NAMING NOTE: the ColorLib source name "Colorlib Reg Form V11" is FORBIDDEN
> as the app name. **Islet** (a small island — the Hawaii travel theme) is
> the new, original name — single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified 2026-08-09).
> Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Reg Form V11" — free booking form with
  datepicker widget, by Rok Krivec (ColorLib page title: "Colorlib Reg Form
  V11 - Free Booking w/ Datepicker Widget"). Category in TEMPLATES.md:
  **Booking Forms (22)**. The recreation brands itself **Islet** but keeps
  the same section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/regform/colorlib-regform-11/` (HTTP 200, 3.2 KB
  HTML + `css/style.css` 13.5 KB, 355 lines). The official
  `https://preview.colorlib.com/theme/colorlib-regform-11/` returns HTTP 404
  (no Astro-era mirror exists for this classic template — same situation as
  the sibling Booking Forms preps, e.g. Roomzy←Booking 10). The ColorLib
  template page's LIVE PREVIEW button points at the
  `colorlib.com/etc/regform/<slug>/` host, which is the real demo
  (confirmed by opening the template page and reading the Preview link href
  `https://colorlib.com/etc/regform/colorlib-regform-11/`). DOM is rendered
  below; the TEMPLATES.md screenshot (`colorlib-reg-form-11.jpg`) matches the
  live render 1:1.
- **Section order (1:1, verified from live DOM):**
  1. `<div class="header">` — full-width flex strip
     (`display: flex; align-items: center; justify-content:
space-between; padding: 50px 57px`): `<img src="images/header-text.png">`
     (the white "HAWAII" wordmark, top-left) + `<img src="images/dots.png">`
     (the white grid/waffle icon, top-right). No nav links, no text — two
     images only.
  2. `<div class="container">` — the dark translucent booking panel
     (`width: 960px; background: rgba(11, 13, 24, 0.6); margin: 265px auto;
border-radius: 10px`), containing
     `<form id="booking-form" class="booking-form" method="POST">`
     (`padding: 35px 70px 51px 70px`) with one `.form-group` row
     (`display: flex; align-items: center; justify-content: space-between`):
     - `.form-destination` (width 230px): `<label for="destination">`
       "Destination" + `<input type="text" id="destination" name="destination"
placeholder="EG. HAWAII">`.
     - `.form-date-from.form-icon` (width 155px): label "From" +
       `<input type="text" id="date_from" class="date_from"
placeholder="Pick a date">` (jQuery UI datepicker; calendar trigger
       icon `.ui-datepicker-trigger` absolutely positioned right 16px /
       top 40px, color #999).
     - `.form-date-to.form-icon` (width 155px): label "To" + same datepicker
       input (`id="date_to"`, placeholder "Pick a date").
     - `.form-quantity` (width 80px, `position: relative`): label "Quantity"
       - stepper — `<span class="modify-qty plus" onClick="Tang()">`
         chevron-up icon (absolute right 12px, top 23px, font-size 18px,
         color #999) + `<input type="number" name="quantity" id="quantity"
value="0" min="0" class="nput-text qty text">` (white input, value
         colored #999) + `<span class="modify-qty minus" onClick="Giam()">`
         chevron-down icon (absolute right 12px, bottom 0).
     - `.form-submit` (width 140px): `<input type="submit" id="submit"
class="submit" value="Book now">`.
  3. `<body>` background — the full-bleed photo
     (`body { background-image: url("../images/form-img.jpg");
background-repeat: no-repeat; background-size: cover;
background-position: center center; color: #fff; font-weight: 600;
font-family: Poppins; }`). No footer, no extra sections — the page is
     exactly these two blocks over the photo.
- **JS behaviors (original):** jQuery + jQuery UI datepicker on the From/To
  inputs; `Tang()` / `Giam()` increment/decrement `#quantity` (min 0);
  form submits via POST (no server in the demo — page reloads). Recreate as
  React state: two date inputs (native `type="date"` or datepicker pattern
  already used in sibling booking apps), quantity stepper buttons with
  `aria-label`s, and a submit handler with zod validation per repo
  conventions (destination required, From ≤ To, quantity ≥ 1) plus a
  user-facing success/error message.
- **Visual design (TEMPLATES.md screenshot `colorlib-reg-form-11.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** cinematic,
  immersive travel aesthetic. The background photo is a split-level
  over/underwater scene — a tropical island (lush green vegetation, sandy
  beach, bright sky with clouds) over submerged stone ruins bathed in deep
  turquoise/teal. Cool palette (teals, ocean blues, sandy beige) with white
  text and a warm mustard-yellow CTA. Top-left "HAWAII" wordmark in white
  uppercase; top-right white grid icon. Center: dark glassmorphism panel
  (navy at 60% opacity, 10px radius) with small white uppercase labels above
  white rounded inputs; a mustard-yellow `#f8ba0f` "Book now" button closes
  the row on the right.

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Font:** Poppins, weights 300–900 (body weight 600; labels 500; button
  14px weight 600 via `input` base). Load via Google Fonts `<link>` in
  `index.html`.
- **Brand colors:**
  - `#f8ba0f` — mustard yellow, submit button background (hover `#ce9906`).
  - `rgba(11, 13, 24, 0.6)` — dark navy translucent booking panel.
  - `#fff` — body text, labels, button text.
  - `#222` — input value text.
  - `#999` — placeholders, quantity value, stepper/calendar icons.
- **Radii:** 10px (booking panel), 5px (inputs + submit).
- **Spacing:** header padding 50px 57px; form padding 35px 70px 51px;
  input padding 13px 20px (font-size 16px); submit padding 15px 20px +
  margin-top 23px; field widths 230 / 155 / 155 / 80 / 140px.
- **Responsive:** ≤768px → panel `width: calc(100% - 30px)`, `.form-group`
  becomes `flex-direction: column`, all fields `width: 100%` with
  `margin-bottom: 20px`; ≤480px → form padding `35px 30px 51px`.

## Requirements

### Requirement: Full-bleed photo background

The system SHALL render a full-viewport background photo (Hawaii
over/underwater travel scene) that covers the whole page, centered, with
white Poppins text on top.

#### Scenario: Page background

- **GIVEN** the Islet page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a full-viewport background photo covering the
  entire viewport (`background-size: cover`, centered)
- **AND** the page text SHALL be white
- **AND** the body font SHALL be Poppins at weight 600, size 14px

### Requirement: Header strip with wordmark and grid icon

The system SHALL render a full-width header strip at the top of the page
with the white "HAWAII" wordmark on the left and a grid/waffle icon on the
right, spaced with `space-between`, padding 50px 57px.

#### Scenario: Header layout

- **GIVEN** the Islet page is rendered
- **WHEN** the header strip is displayed
- **THEN** a header SHALL be shown at the top of the page with
  `align-items: center` and `justify-content: space-between`
- **AND** the wordmark "HAWAII" (recreated as styled text — never a copied
  image) SHALL be shown on the left in white uppercase
- **AND** a grid/waffle icon SHALL be shown on the right (lucide `Grid`
  icon, white)

### Requirement: Dark translucent booking panel

The system SHALL render a single centered booking panel with a
`rgba(11, 13, 24, 0.6)` background, 10px border radius, width 960px
(max-width 100%), vertically positioned with a large top margin, containing
the booking form.

#### Scenario: Panel appearance

- **GIVEN** the Islet page is rendered
- **WHEN** the booking panel is displayed
- **THEN** the panel SHALL have a dark navy background at 60% opacity
  (`rgba(11, 13, 24, 0.6)`)
- **AND** the panel SHALL have a 10px border radius
- **AND** the panel SHALL be centered horizontally (`margin: 265px auto` on
  desktop) and hold the booking form with padding `35px 70px 51px`

### Requirement: Booking form field row

The system SHALL render the booking form as a single flex row
(`align-items: center; justify-content: space-between`) of five fields:
Destination (230px), From (155px), To (155px), Quantity (80px), and the
submit button (140px).

#### Scenario: Destination field

- **GIVEN** the Islet page is rendered
- **WHEN** the booking form is displayed
- **THEN** a field with the label "Destination" SHALL be shown with a white
  input (5px radius, padding 13px 20px, 16px weight-600 text `#222`)
- **AND** the input placeholder SHALL read "EG. HAWAII" in `#999`

#### Scenario: From and To date fields

- **GIVEN** the Islet page is rendered
- **WHEN** the booking form is displayed
- **THEN** a field with the label "From" SHALL be shown with a white input
  whose placeholder reads "Pick a date"
- **AND** a field with the label "To" SHALL be shown with a white input
  whose placeholder reads "Pick a date"
- **AND** each date field SHALL expose a calendar trigger (icon, `#999`)
  that opens a date picker when activated
- **AND** selecting a date SHALL fill the corresponding input with the
  chosen date

#### Scenario: Quantity stepper

- **GIVEN** the Islet page is rendered
- **WHEN** the booking form is displayed
- **THEN** a field with the label "Quantity" SHALL be shown with a white
  input displaying the current quantity
- **AND** an up chevron icon and a down chevron icon SHALL be shown inside
  the field (right side, `#999`, with `aria-label`s such as "Increase
  quantity" / "Decrease quantity")
- **AND** activating the up icon SHALL increment the quantity by 1
- **AND** activating the down icon SHALL decrement the quantity by 1 but
  never below 0

#### Scenario: Submit button

- **GIVEN** the Islet page is rendered
- **WHEN** the booking form is displayed
- **THEN** a button reading "Book now" SHALL be shown with a `#f8ba0f`
  background, white 14px weight-600 text, 5px radius, padding 15px 20px and
  margin-top 23px
- **AND** hovering the button SHALL change its background to `#ce9906`

### Requirement: Form validation and submit feedback

The system SHALL validate the booking form on submit (destination
non-empty, From and To dates present, From not after To, quantity ≥ 1),
show per-field errors when invalid, and show a user-facing success message
when valid (no backend exists — the demo posts to nowhere, so the
recreation SHALL handle submission client-side per repo conventions).

#### Scenario: Invalid submission

- **GIVEN** the Islet page is rendered
- **WHEN** the user activates "Book now" with an empty destination, missing
  dates, or quantity 0
- **THEN** the form SHALL NOT submit
- **AND** per-field error messages SHALL be shown for each invalid field
- **AND** the user SHALL be able to correct the fields and resubmit

#### Scenario: Valid submission

- **GIVEN** the Islet page is rendered with a destination, From/To dates
  (From ≤ To) and quantity ≥ 1 filled in
- **WHEN** the user activates "Book now"
- **THEN** a success message SHALL be shown to the user (no network request)

### Requirement: Responsive behavior

The system SHALL stack the form fields vertically below 768px: panel width
`calc(100% - 30px)`, fields full width with 20px bottom margin, and reduce
the form padding to `35px 30px 51px` below 480px.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Islet page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the booking panel SHALL have width `calc(100% - 30px)`
- **AND** the form fields SHALL stack vertically (single column), each at
  `width: 100%` with `margin-bottom: 20px`
- **AND** on a viewport ≤480px the form padding SHALL be `35px 30px 51px`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-islet`
- [ ] `scripts/verify-app.sh islet` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): header strip ("HAWAII" wordmark
      left + grid icon right, `space-between`, padding 50px 57px) → dark
      translucent booking panel (`rgba(11,13,24,0.6)`, radius 10px, width
      960px, margin 265px auto) with the form row (Destination 230px
      placeholder "EG. HAWAII" · From 155px "Pick a date" datepicker ·
      To 155px "Pick a date" datepicker · Quantity 80px stepper min 0 ·
      "Book now" 140px) → full-bleed background photo. No footer.
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#f8ba0f`
      (submit bg, hover `#ce9906`), `rgba(11,13,24,0.6)` (panel),
      `#222` (input text), `#999` (placeholders/icons); radii 10px / 5px
- [ ] Font: Poppins 300–900 via Google Fonts `<link>` in `index.html`,
      title "Islet — Travel Booking Template"
- [ ] Background photo via
      `https://picsum.photos/seed/islet-1/1920/1080` (full-bleed, cover,
      centered) — NEVER copy the ColorLib `form-img.jpg`; "HAWAII" wordmark
      recreated as text, icons from `lucide-react`
- [ ] Interactions: date pickers on From/To (calendar trigger), quantity
      stepper (min 0), submit with zod validation + per-field errors +
      success message; `aria-label` on icon-only controls, `aria-expanded`
      on the datepicker toggle
- [ ] Mobile (≤768px): panel `calc(100% - 30px)`, fields stack full-width
      with 20px gaps; ≤480px form padding `35px 30px 51px`
- [ ] Copy kinds kept: "Destination", "From", "To", "Quantity", "Book now",
      placeholders "EG. HAWAII" / "Pick a date"
