# Template: Roomly (Hotel Room Booking Form Landing)

## Purpose

Roomly is a single-screen hotel room-booking form page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Reg Form V25" design (see TEMPLATES.md, Booking
Forms category), built under the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a full-viewport hotel booking page: a golden-hour canyon
photograph (a traveler in a straw hat overlooking a rocky landscape) as the
full-bleed background, and a single white room-booking card floating on the
left holding a "Find a Room" heading, six form fields (Name, Phone,
Check-in/Check-out date pickers, Adults/Children selects), a custom
checkbox, and a blue "Book Room" button. Roomly recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Colorlib Reg Form V25" is FORBIDDEN
> as the app name. **Roomly** (a play on "room" — the hotel room booking
> theme) is the new, original name — single lowercase word, no collision
> with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md
> (verified 2026-08-09). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Reg Form V25" — free Bootstrap "book a
  room" form (ColorLib page title: "Colorlib Reg Form V25 - Free Bootstrap
  Book A Room Form"; the inner HTML `<title>` reads "RegistrationForm_v9 by
  Colorlib"). Category in TEMPLATES.md: **Booking Forms (22)**. The
  recreation brands itself **Roomly** but keeps the same section structure,
  field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/regform/colorlib-regform-25/` (HTTP 200, 3.6 KB
  HTML + `css/style.css` 239 lines, 5.5 KB). The official
  `https://preview.colorlib.com/theme/colorlib-regform-25/` returns HTTP 404
  (no Astro-era mirror exists for this classic template — same situation as
  the sibling Booking Forms preps, e.g. Islet←Regform 11, Roomzy←Booking 10).
  The ColorLib template page's LIVE PREVIEW button points at the
  `colorlib.com/etc/regform/<slug>/` host, which is the real demo
  (confirmed by opening the template page and reading the Preview link href
  `https://colorlib.com/etc/regform/colorlib-regform-25/`). DOM is rendered
  below; the TEMPLATES.md screenshot (`colorlib-reg-form-25.jpg`) matches the
  live render 1:1.
- **Section order (1:1, verified from live DOM):**
  1. `<div class="wrapper">` — full-viewport backdrop
     (`min-height: 100vh; position: relative;
background: url("../images/bg-registration-form-9.jpg") no-repeat right
center; background-size: cover`). No header strip, no nav, no footer — the
     page is exactly this background + the card.
  2. `<div class="inner">` — the floating card frame
     (`position: absolute; top: 50%; left: 11.07%; transform:
translateY(-50%); width: 511px; box-shadow: 0 0 10px rgba(0,0,0,0.2);
background: url("../images/bg-inner.png") repeat; padding: 7px`) — a subtle
     patterned border framing the white form.
  3. `<form>` — white card body (`width: 100%; padding: 57px 46px 55px;
background: #fff`) containing:
     - `<h3>Find a Room</h3>` — uppercase, 35px, Poppins-Medium weight 500,
       `#3e91f7`, `letter-spacing: 3px`, `margin-bottom: 22px`.
     - `.form-row` 1 — two `.form-wrapper` cells (each `width: 50%`, first
       `margin-right: 25px`): `Name *` label + `<input type="text"
class="form-control" placeholder="Your Name">`; `Phone *` label + input
       `placeholder="Phone"`.
     - `.form-row` 2 — `Check-in *` + `Check-out *`: labels, each with a
       `<span class="lnr lnr-calendar-full">` calendar icon (absolute left
       16px / top 43px, 15px, `#666`) and `<input type="text"
class="form-control datepicker-here" data-date-format="dd M yyyy">` (Air
       Datepicker widget, `padding-left: 39px`).
     - `.form-row.last` 3 — `Adults *` + `Chidren *` (sic — the original
       misspells "Children"): `<select class="form-control">` with options
       1–6, each with a `<i class="zmdi zmdi-chevron-down">` chevron icon
       (absolute right 16px / top 42px, 15px, `#666`).
     - `.checkbox` — custom checkbox: hidden native input + `.checkmark`
       span (12×13px, `#ebebeb` bg, 1px `#ccc` border, radius 2px, check
       glyph `#333` on check) + label text "No one rejects, dislikes, or
       avoids pleasure itself." (lorem-ipsum filler — keep the same KIND of
       copy, e.g. a room-preference note).
     - `<button data-text="Book Room"><span>Book Room</span></button>` —
       `width: 173px; height: 42px; margin-top: 30px; background: #3e91f7;
color: #fff; text-transform: uppercase; letter-spacing: 3px;` with the
       original's hover slide-swap animation (the `data-text` copy slides in
       from the left, the span slides down/out, `background → #0072fd`).
- **JS behaviors (original):** Air Datepicker
  (`vendor/date-picker/js/datepicker.js` + `datepicker.en.js`) on
  Check-in/Check-out with `data-date-format="dd M yyyy"`; native select
  dropdowns (appearance stripped via CSS) with chevron icons; custom
  checkbox; button hover text-swap via `data-text`. Form has no `action` —
  no backend (posts to nowhere). Recreate as React state: two date inputs
  with calendar triggers (native `type="date"` or the datepicker pattern
  already used in sibling booking apps), two selects 1–6, custom checkbox
  with accessible label, and a submit handler with zod validation per repo
  conventions (name + phone required, check-in/check-out required and
  check-out ≥ check-in, adults ≥ 1) plus a user-facing success message.
- **Visual design (TEMPLATES.md screenshot `colorlib-reg-form-25.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** golden-hour
  adventure-travel aesthetic. The full-bleed background is a dramatic canyon
  photograph — a bearded traveler in a wide-brimmed straw hat and a light
  blue-grey tee, seen from behind, overlooking a rocky American-Southwest
  landscape (warm oranges/yellows on sunlit distant peaks, deep
  browns/greys/muted greens in shadow). A clean white card with a subtle
  drop shadow floats on the left. "FIND A ROOM" in bold uppercase blue
  (`#3e91f7`), a two-column field grid (Name/Phone, Check-in/Check-out with
  calendar icons, Adults/Children dropdowns with chevrons), a small custom
  checkbox, and a bright blue "BOOK ROOM" button. The medium blue accent
  against white + photo is the entire palette — clean, modern, hospitality.

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Fonts:** Poppins (body, Regular 400; h3, Medium 500) + Muli (labels,
  inputs, button, Regular 400 / SemiBold 600). Load both via Google Fonts
  `<link>` in `index.html` (Muli is a Google Font). Body 13px Poppins;
  labels 17px Muli-SemiBold; inputs 13px Muli; button 15px Muli-SemiBold.
- **Brand colors:**
  - `#3e91f7` — medium blue: h3 heading + "Book Room" button background.
  - `#0072fd` — button hover background.
  - `#fff` — form card background, button text.
  - `#4c4c4c` — field labels.
  - `#666` — input text, calendar/chevron icons.
  - `#999` — body text (checkbox row context), placeholder.
  - `#e6e6e6` — input border (1px solid).
  - `#ebebeb` + `#ccc` — custom checkbox checkmark bg/border; `#333` check glyph.
  - `rgba(0,0,0,0.2)` — card drop shadow (`0 0 10px`).
- **Radii:** none on inputs/button (square); only the checkbox checkmark has
  2px radius.
- **Spacing:** `.inner` padding 7px (frame) + shadow; form padding
  `57px 46px 55px`; h3 margin-bottom 22px; `.form-row` margin-bottom 25px
  (last row 22px); label margin-bottom 8px; button margin-top 30px; field
  gap 25px between the two 50% columns; inputs height 42px, padding
  `0 14px` (date inputs `padding-left: 39px` for the icon).
- **Responsive:** ≤1199px → background `center center`; ≤991px → `.inner`
  `width: 60%`; ≤767px → `.inner` static, `width: 100%`, shadow/frame
  padding removed, `.wrapper` background removed (`background: none`,
  `display: block`), form padding `30px 20px`, `.form-row` stacks
  (`display: block`) with each cell `width: 100%` + `margin-bottom: 25px`
  (first-child margin-right 0).

## Requirements

### Requirement: Full-viewport canyon background

The system SHALL render a full-viewport background photo (golden-hour canyon
landscape with a traveler) that covers the whole page, anchored right-center
on desktop and center-center below 1199px, with the room-booking card
floating on the left.

#### Scenario: Page background

- **GIVEN** the Roomly page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show a full-viewport background photo covering the
  entire viewport (`background-size: cover`, `background-position: right
center`; `center center` below 1199px)
- **AND** the photo SHALL be a travel/canyon landscape (placeholder photo —
  never the ColorLib asset)

### Requirement: Floating room-booking card

The system SHALL render a single white card (width 511px, max-width 100%)
absolutely positioned at `top: 50%; left: 11.07%`, vertically centered via
`translateY(-50%)`, with a subtle patterned 7px frame (recreated as a
neutral solid/light frame — never a copied image), a `rgba(0,0,0,0.2)` drop
shadow, and the white form inside with padding `57px 46px 55px`.

#### Scenario: Card appearance

- **GIVEN** the Roomly page is rendered
- **WHEN** the room-booking card is displayed
- **THEN** the card SHALL be positioned on the left side of the page,
  vertically centered, `width: 511px` on desktop
- **AND** the card SHALL have a drop shadow (`0 0 10px rgba(0,0,0,0.2)`)
- **AND** the form SHALL have a white background with padding
  `57px 46px 55px`

### Requirement: Heading

The system SHALL render the card heading "Find a Room" in uppercase, 35px,
Poppins-Medium (500), color `#3e91f7`, letter-spacing 3px, margin-bottom
22px.

#### Scenario: Card heading

- **GIVEN** the Roomly page is rendered
- **WHEN** the card is displayed
- **THEN** a heading SHALL read "Find a Room" in uppercase text
- **AND** the heading SHALL be `#3e91f7`, 35px, letter-spacing 3px

### Requirement: Name and Phone fields

The system SHALL render a form row with two 50%-width cells (25px gap):
"Name *" with a text input placeholder "Your Name", and "Phone *" with a
text input placeholder "Phone". Labels SHALL be 17px Muli-SemiBold
`#4c4c4c` with 8px bottom margin; inputs SHALL be 42px tall, 1px solid
`#e6e6e6` border, padding `0 14px`, text `#666`.

#### Scenario: Name and Phone row

- **GIVEN** the Roomly page is rendered
- **WHEN** the first form row is displayed
- **THEN** a field labeled "Name *" SHALL be shown with a text input whose
  placeholder reads "Your Name"
- **AND** a field labeled "Phone *" SHALL be shown with a text input whose
  placeholder reads "Phone"
- **AND** both fields SHALL be side by side at 50% width with a 25px gap

### Requirement: Check-in and Check-out date fields

The system SHALL render a form row with "Check-in *" and "Check-out *" date
fields, each with a calendar icon (left 16px, `#666`) and a date input
(padding-left 39px) that opens a date picker when activated.

#### Scenario: Date row

- **GIVEN** the Roomly page is rendered
- **WHEN** the second form row is displayed
- **THEN** a field labeled "Check-in *" SHALL be shown with a date input and
  a calendar icon
- **AND** a field labeled "Check-out *" SHALL be shown with a date input and
  a calendar icon
- **AND** activating either input SHALL open a date picker
- **AND** selecting a date SHALL fill the corresponding input with the
  chosen date

### Requirement: Adults and Children selects

The system SHALL render a form row with "Adults *" and "Children *" select
dropdowns offering options 1–6, each with a chevron-down icon on the right
(`#666`). (Note: the original misspells the label "Chidren *" — the
recreation SHALL use the correct spelling "Children *".)

#### Scenario: Guest selects row

- **GIVEN** the Roomly page is rendered
- **WHEN** the third form row is displayed
- **THEN** a field labeled "Adults *" SHALL be shown with a select offering
  options 1 through 6
- **AND** a field labeled "Children *" SHALL be shown with a select offering
  options 1 through 6
- **AND** each select SHALL show a chevron-down icon on its right side

### Requirement: Custom checkbox

The system SHALL render a custom-styled checkbox (12×13px checkmark,
`#ebebeb` background, 1px `#ccc` border, 2px radius, `#333` check glyph)
next to a room-preference note (same copy KIND as the original's
lorem-ipsum line, e.g. "No-smoking room preferred."), with an accessible
label.

#### Scenario: Checkbox toggle

- **GIVEN** the Roomly page is rendered
- **WHEN** the checkbox row is displayed
- **THEN** a custom checkbox SHALL be shown next to a preference note text
- **AND** activating the checkbox SHALL toggle its checked state, showing
  the `#333` check glyph when checked

### Requirement: Book Room button

The system SHALL render a "Book Room" button — 173×42px, background
`#3e91f7`, white uppercase text, letter-spacing 3px, margin-top 30px, no
border radius — that darkens to `#0072fd` on hover (with the original's
label slide-swap animation recreated or simplified to a color change).

#### Scenario: Button appearance and hover

- **GIVEN** the Roomly page is rendered
- **WHEN** the card is displayed
- **THEN** a button reading "Book Room" SHALL be shown in uppercase white
  text on a `#3e91f7` background, 173×42px, no border radius
- **AND** hovering the button SHALL change its background to `#0072fd`

### Requirement: Form validation and submit feedback

The system SHALL validate the booking form on submit (name and phone
non-empty, check-in and check-out dates present with check-out not before
check-in, adults ≥ 1), show per-field errors when invalid, and show a
user-facing success message when valid (no backend exists — the demo posts
to nowhere, so the recreation SHALL handle submission client-side per repo
conventions).

#### Scenario: Invalid submission

- **GIVEN** the Roomly page is rendered
- **WHEN** the user activates "Book Room" with empty name/phone, missing
  dates, or a check-out before check-in
- **THEN** the form SHALL NOT submit
- **AND** per-field error messages SHALL be shown for each invalid field
- **AND** the user SHALL be able to correct the fields and resubmit

#### Scenario: Valid submission

- **GIVEN** the Roomly page is rendered with name, phone, check-in,
  check-out (check-out ≥ check-in) and adults filled in
- **WHEN** the user activates "Book Room"
- **THEN** a success message SHALL be shown to the user (no network request)

### Requirement: Responsive behavior

The system SHALL stack the card full-width and remove the photo background
below 767px: card static and `width: 100%` with no shadow/frame padding, the
form padding `30px 20px`, and each field full-width stacked with 25px bottom
margin.

#### Scenario: Mobile layout (≤767px)

- **GIVEN** the Roomly page is rendered on a viewport ≤767px
- **WHEN** the page is displayed
- **THEN** the card SHALL be static, `width: 100%`, with no drop shadow and
  no frame padding
- **AND** the background photo SHALL be removed (`background: none`)
- **AND** the form padding SHALL be `30px 20px`
- **AND** the fields SHALL stack vertically (single column), each at
  `width: 100%` with `margin-bottom: 25px`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-roomly`
- [ ] `scripts/verify-app.sh roomly` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with source): full-viewport canyon background
      (`bg-cover`, `bg-right` desktop / `bg-center` ≤1199px) → floating white
      card (left 11.07%, vertically centered, width 511px, `0 0 10px
    rgba(0,0,0,0.2)` shadow, 7px frame, form padding `57px 46px 55px`) with
      "Find a Room" h3 → Name/Phone row → Check-in/Check-out date row →
      Adults/Children select row → custom checkbox → "Book Room" button. No
      header, no nav, no footer.
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#3e91f7`
      (heading + button bg), `#0072fd` (hover), `#4c4c4c` (labels),
      `#666` (inputs/icons), `#e6e6e6` (input border), `#ebebeb`/`#ccc`/
      `#333` (checkbox)
- [ ] Fonts: Poppins 400/500 + Muli 400/600 via Google Fonts `<link>` in
      `index.html`, title "Roomly — Hotel Room Booking Template"
- [ ] Background photo via
      `https://picsum.photos/seed/roomly-1/1920/1080` (full-bleed, cover,
      right-center) — NEVER copy the ColorLib `bg-registration-form-9.jpg`;
      card frame recreated as a light solid border (never the `bg-inner.png`
      tile), icons from `lucide-react` (`Calendar`, `ChevronDown`)
- [ ] Interactions: date pickers on Check-in/Check-out (calendar trigger),
      Adults/Children selects 1–6, custom checkbox toggle, submit with zod
      validation + per-field errors + success message; `aria-label` on
      icon-only controls
- [ ] Mobile (≤767px): card static full-width, no shadow/frame, background
      removed, form padding `30px 20px`, fields stacked full-width with 25px
      gaps
- [ ] Copy kinds kept: "Find a Room", "Name *" / "Your Name", "Phone *" /
      "Phone", "Check-in *", "Check-out *", "Adults *", "Children *",
      preference-note checkbox, "Book Room" (original's "Chidren" typo fixed)
