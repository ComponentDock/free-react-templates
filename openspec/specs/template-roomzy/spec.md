# Template: Roomzy (Booking Forms / Room Reservation Form)

## Purpose

Roomzy is a single-page hotel room-reservation form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking 10" website template
(source: https://colorlib.com/wp/template/colorlib-booking-10/), built under a
DIFFERENT name (**Roomzy** — a room reservation, re-branded) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NAMING NOTE: the ColorLib source name "Colorlib Booking 10" is FORBIDDEN as
> the app name. **Roomzy** (room + "easy" booking) is the new, original name —
> single lowercase word, no collision with `apps/` or other spec folders
> (verified 2026-08-09 against `ls apps/` and `openspec/specs/`). Source slug
>
> - preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking 10" — a free hotel booking /
  reservation form template based on Bootstrap (ColorLib meta: booking form
  template with date pickers, guest counters and room-type selection).
  Category in TEMPLATES.md: **Booking Forms (22)**. The recreation brands
  itself **Roomzy** but keeps the same section structure, field set and copy
  kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-10/` (HTTP 200, ~5.7 KB
  HTML). The official `https://preview.colorlib.com/theme/colorlib-booking-10/`
  returns HTTP 404 and there is no `<slug>-colorlib.pages.dev` mirror for this
  classic template (the `preview.colorlib.com/assets/js/products.js` product
  map only covers new Astro-era templates). The ColorLib template page's LIVE
  PREVIEW button for the whole Booking Forms family points at
  `https://colorlib.com/etc/bforms/<slug>/` — that is the real demo host
  (confirmed via the archived template page
  `web.archive.org/web/20260419083833/https://colorlib.com/wp/template/colorlib-booking-10/`).
  Browser-rendered and analyzed: body computed background is solid white, form
  has NO box-shadow, button radius 0.
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-10.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** a stark, plain
  white full-viewport page with a single centered booking form (max-width
  586px, vertically centered). NO navbar, NO hero copy, NO footer — this is a
  one-section form demo. The form is a dense grid of tall (80px) rectangular
  fields separated by thin light-gray divider lines (fields share borders:
  `border-bottom: 0` between stacked rows, `border-left: 0` between sibling
  columns). All labels are small **red-orange italic** captions floating at
  the top-left inside each field; values/placeholders are dark navy
  `#0e2753` / light gray `#dddee9`. A full-width, sharp-cornered
  red-orange **"Book Now"** button closes the form. Screenshot and live
  render match 1:1.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (height 100vh) white section,
     content vertically centered via `.section-center` (top 50% +
     translateY(-50%)).
  2. `.booking-form` (max-width 586px, centered, width 100%) containing the
     form:
     - Row 1 (two columns): **Check In** (date input, required) | **Check
       Out** (date input, required).
     - Row 2 (two columns): **Adults (18+)** (select: 1/2/3) | **Children
       (0-17)** (select: 0/1/2), each with a custom `➜` arrow glyph
       (U+279C, rotated 90°) at the bottom-right.
     - **Room Type** (select, required, placeholder "Select room type":
       options "Private Room (1 to 2 People)" / "Family Room (1 to 4
       People)").
     - **Email** (email input, placeholder "Enter your email").
     - **Phone** (tel input, placeholder "Enter your phone number").
     - **Book Now** — full-width submit button.
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css` + rendered
  computed styles, verified 2026-08-09):**
  - Brand color: **red-orange `#f14634`** — the ONLY brand color. Used for
    the floating field labels (`.form-label`) and the submit button
    background.
  - Text: **dark navy `#0e2753`** — control values (font-size 20px, weight
    700). Placeholders `#dddee9`.
  - Borders/dividers: **`#dddee9`** 1px; stacked fields drop the bottom
    border (`border-bottom: 0px`) so rows share a single divider line;
    sibling columns drop the left border (`border-left: 0px`). On mobile
    (max-width 767px) the left border returns (`border-left: 1px solid
#dddee9`) as columns stack.
  - Page background: **solid white `#ffffff`** (computed; no image, no
    gradient — do NOT add a photo background).
  - Form: max-width **586px**, centered, no shadow, no card fill (white on
    white — the "card" look comes only from the field grid).
  - Controls: height **80px**, `padding: 25px 20px 0` (label sits inside
    the top), border-radius **0px** (sharp corners), background white;
    focus background `#f9f9f9`, no focus shadow/ring.
  - Labels: absolute top-left (left 20px, top 10px), **italic**, 14px,
    weight 400, color `#f14634`.
  - Select arrow: `.select-arrow` 32×32 at bottom-right inside the select,
    content `➜` (U+279C) rotated 90°, color `#dddee9`, pointer-events none.
  - Submit button: full width, height **80px**, background **`#f14634`**,
    white text, weight 700, size 18px, `text-transform: capitalize`,
    border none, radius 0.
  - Font: **Lato** (400/700) via Google Fonts — `@font-face` Lato 400/700
    (normal + italic) in the source head.
  - Stack: Bootstrap 4-era markup (`form-control`, `form-group`,
    `col-sm-6`, `.row.no-margin`); the recreation must NOT use Bootstrap —
    re-implement with Tailwind.

## Requirements

### Requirement: Full-viewport layout

The system SHALL render a single full-viewport white section with the booking
form vertically centered.

#### Scenario: Page layout

- **GIVEN** the Roomzy page is rendered
- **WHEN** the page loads
- **THEN** the page SHALL have a solid white background
- **AND** the booking form SHALL be horizontally centered with a maximum
  width of 586px
- **AND** the form SHALL be vertically centered in the viewport

### Requirement: Date fields

The system SHALL render Check In and Check Out date inputs side by side.

#### Scenario: Check-in/check-out fields

- **GIVEN** the Roomzy page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL show a "Check In" label with a required date input
- **AND** it SHALL show a "Check Out" label with a required date input
  next to it

### Requirement: Guest selects

The system SHALL render Adults and Children counter selects side by side with
custom arrow indicators.

#### Scenario: Guest fields

- **GIVEN** the Roomzy page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL show an "Adults (18+)" select with options 1, 2 and 3
- **AND** it SHALL show a "Children (0-17)" select with options 0, 1 and 2

### Requirement: Room type select

The system SHALL render a required Room Type select with a placeholder and
two room options.

#### Scenario: Room type options

- **GIVEN** the Roomzy page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL show a "Room Type" select whose placeholder reads
  "Select room type"
- **AND** it SHALL offer "Private Room (1 to 2 People)" and "Family Room
  (1 to 4 People)" options
- **AND** the select SHALL be required (form cannot submit without a
  choice)

### Requirement: Contact fields

The system SHALL render Email and Phone text fields.

#### Scenario: Contact inputs

- **GIVEN** the Roomzy page is rendered
- **WHEN** the form is displayed
- **THEN** it SHALL show an Email input with placeholder "Enter your email"
- **AND** it SHALL show a Phone input with placeholder "Enter your phone
  number"

### Requirement: Book Now submit

The system SHALL render a full-width "Book Now" submit button in the brand
color.

#### Scenario: Submit button

- **GIVEN** the Roomzy page is rendered
- **WHEN** the form is displayed
- **THEN** a full-width button reading "Book Now" SHALL be visible
- **AND** the button SHALL use the brand color `#f14634` with white text

### Requirement: Form validation

The system SHALL validate required fields before submitting.

#### Scenario: Required fields block submit

- **GIVEN** the Roomzy page is rendered
- **WHEN** the user submits the form with empty date fields or no room type
- **THEN** the form SHALL NOT submit and SHALL indicate the missing fields
- **AND** a valid email SHALL be required in the email field

### Requirement: Responsive behavior

The system SHALL adapt the two-column field rows on small screens.

#### Scenario: Mobile layout

- **GIVEN** the Roomzy page is rendered on a viewport narrower than 768px
- **WHEN** the form is displayed
- **THEN** the Check In/Check Out and Adults/Children pairs SHALL stack
  vertically
- **AND** each stacked field SHALL keep its divider border on all sides

### Requirement: Page composition

The system SHALL render the form inside a main landmark with a document
title.

#### Scenario: Full page render

- **GIVEN** the Roomzy app is rendered
- **WHEN** the page loads
- **THEN** the form SHALL live in the main landmark
- **AND** the document title SHALL be "Roomzy — Hotel Booking Template"

## Verification checklist

- [ ] Section structure + field order matches the source 1:1 (single
      #booking section, form field rows as above)
- [ ] Brand color `#f14634` in `@theme` (e.g. `--color-brand`), used for
      labels + Book Now button via Tailwind classes
- [ ] Control text `#0e2753`, borders/dividers `#dddee9`, placeholder
      `#dddee9`, focus background `#f9f9f9` (no focus ring — source has
      none)
- [ ] Sharp corners (radius 0) on all controls and the button; 80px tall
      fields; full-width button
- [ ] Shared-divider behavior: no bottom border between stacked rows, no
      left border between sibling columns; borders return on mobile stack
- [ ] Lato (400/700, incl. italic) via Google Fonts `<link>` in index.html
- [ ] Select arrow: rotated `➜` glyph (or lucide ChevronDown equivalent)
      bottom-right, color `#dddee9`, pointer-events none
- [ ] Solid white page background — NO photo/gradient background added
- [ ] No copied assets; no Bootstrap dependency (re-implemented in
      Tailwind); icons from lucide-react if any
- [ ] Brand renamed "Colorlib Booking 10" → "Roomzy"; document title
      "Roomzy — Hotel Booking Template"
- [ ] `scripts/verify-app.sh roomzy` green: typecheck + lint + vitest
      100% coverage + build
- [ ] Uses packages/ui (Button, cn) where applicable — knip-safe
- [ ] Spec validated: `npm run spec:validate`
