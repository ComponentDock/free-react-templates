# Template: Hostly (Booking Forms / Hotel Booking Widget)

## Purpose

Hostly is a single-page hotel/travel booking-form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V17 — Free Travel Booking Template"
website template (source: https://colorlib.com/wp/template/colorlib-booking-17/),
built under a DIFFERENT name (Hostly — "host", one who receives/entertains
guests, fitting the hospitality/room-reservation use case, plus the friendly
"-ly" suffix, matching the Booking Forms family convention: Reservly, Roomzy,
Roostly, Stayly, Ridely, Triply, Innly, Lodgely; re-branded) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-17/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-stayly / template-roostly / template-roomzy / template-reservly
> / template-ridely / template-triply / template-innly / template-lodgely
> preps — the `preview.colorlib.com/assets/js/products.js` product map only
> covers new Astro-era templates). The LIVE PREVIEW button on the ColorLib
> template page resolves to `https://colorlib.com/etc/bforms/<slug>/` for the
> whole family. **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-17/` (HTTP 200, ~5.0 KB
> HTML + `css/style.css` ~3.8 KB), and the TEMPLATES.md screenshot
> (`colorlib-booking-17.jpg`, 1200×972, viewed in browser) matches the live
> render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V17" — page title "Colorlib
  Booking Form V17 - Free Travel Booking Template 2026"; meta description
  "The best free travel booking template with a Bootstrap base for online
  room reservations and different accommodation businesses." Category in
  TEMPLATES.md: **Booking Forms (22)**. Internal doc title: "Booking Form
  HTML Template". The recreation brands itself **Hostly** but keeps the same
  section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-17/` (HTTP 200, ~5.0 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%)) vertically
  centering `.container > .row > .booking-form` card:
  - `#booking` — **`background: rgba(133, 104, 73, 0.33)`** — a LIGHT warm
    taupe/beige wash (NOT a photo, NOT a dark scrim; the light side of the
    family like Innly, but a COLOR wash rather than Innly's photo + light
    scrim), `font-family: 'Alice', serif`.
  - `.booking-form` — **`max-width: 912px`, `width: 100%`, `margin: auto`,
    `background: #fff`, `border-radius: 6px`, `box-shadow: 0px 5px 10px -5px
rgba(0, 0, 0, 0.1)`** (WHITE card, wider than Lodgely's 586px dark
    panel; radius 6px).
  - `.booking-bg` — **an ABSOLUTE photo panel overlapping the card's LEFT
    edge**: `position: absolute; left: 25px; top: -25px; bottom: -25px;
width: 400px; background-image: url('../img/background.jpg');
background-size: cover; background-position: center; padding: 25px;
border-radius: 6px; box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.1);
overflow: hidden` PLUS `::before` — full-bleed overlay **`background:
rgba(133, 104, 73, 0.78)`** (a HEAVY warm-taupe sepia scrim — the photo
    is a landmark building / Taj Mahal shot, tinted sepia).
  - `.form-header` — inside the photo panel (`.booking-bg`), `position:
relative; z-index: 20; margin-bottom: 30px; margin-top: 60px`:
    - **h2 "Make your reservation"** — `font-family: 'Playfair Display',
serif`, `font-weight: 900`, `color: #fff`, `font-size: 42px`,
      `text-transform: capitalize`, `margin: 0 0 15px`. NOTE: h2 (not h1),
      Playfair Display 900, WITH a subtitle paragraph below.
    - **p** — `color: #fff`, `font-size: 18px` (Lorem ipsum copy: "Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
      laboriosam numquam at…").
  - `<form>` — **`margin-left: 425px`** (clears the 400px photo panel),
    `padding: 30px`.
  - Row 1 (Bootstrap `row` + `col-md-6` × 2, NO Bootstrap dependency in the
    recreation):
    - **Check In** (date input, `required`) — label above, `.form-label`.
    - **Check Out** (date input, `required`).
    - **NO `.in-out` divider** — no ⇔ symbol between the date fields.
  - Row 2 (Bootstrap `col-md-6` × 2):
    - **Adults** (select, options 1/2/3) + `.select-arrow`.
    - **Children** (select, options 0/1/2) + `.select-arrow`.
    - **NOTE: NO "No of rooms" select in this variant** (Lodgely/Booking 16
      has rooms/adults/children; Hostly has adults/children + a full-width
      Room Type select instead).
  - Full-width field: **Room Type** (select, `required`, `placeholder`-style
    hidden option "Select room type" — `option value="" selected hidden`;
    options **"Private Room (1 to 2 People)"** and **"Family Room (1 to 4
    People)"**) + `.select-arrow`.
  - `.form-btn` (margin-top 30px) → `.submit-btn` full-width **"Check
    availability"** button.
  - NO navbar, NO hero copy, NO footer, NO other sections — a one-section
    form demo (page ends with only the GA script). One media query at
    ≤768px: `.booking-bg` becomes `position: relative`, `left/right/bottom:
0`, `top: -15px`, `width: 95%`, `margin: auto`; `form { margin-left: 0 }`
    (photo panel stacks above the form on mobile).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-17.jpg`,
  1200×972, viewed in browser 2026-08-09 + live render):** minimal, elegant
  light design on a solid neutral taupe/beige background
  (rgba(133,104,73,0.33) wash). A WHITE rounded card (max-width 912px, soft
  drop shadow) with a VERTICAL PHOTO PANEL overlapping its left edge (400px
  wide, sepia-tinted photo of the Taj Mahal with a heavy warm-taupe scrim):
  white serif headline "Make Your Reservation" (Playfair Display, large,
  bold) and a small white Lorem-ipsum paragraph sit inside the photo panel's
  bottom half. The form area to the right of the panel holds PILL-SHAPED
  (fully rounded, radius 40px) white inputs with 1px `#e5e5e5` borders and
  light-grey placeholder text: row 1 = Check In / Check Out date fields, row
  2 = Adults / Children selects, then a full-width Room Type select ("Select
  room type" placeholder), and a full-width **pill-shaped taupe-brown button
  "Check availability"** (rgba(133,104,73,0.9), white bold 18px text).
  Uppercase small taupe labels (`#856849`) sit above each field, indented
  (margin-left 20px). Earthy monochromatic palette (beige/taupe/brown/white)
  — calm, luxury-travel aesthetic. Light counterpart of Lodgely's dark panel;
  pill inputs+button make it the ONLY rounded Booking Forms variant so far
  (Lodgely/Triply are sharp-cornered).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with the light warm
     taupe `rgba(133,104,73,0.33)` wash background; content vertically
     centered via `.section-center`.
  2. `.booking-form` (max-width 912px, white, radius 6px, shadow) — the
     card, containing:
     - `.booking-bg` — absolute photo panel (left 25px, top/bottom -25px,
       width 400px, cover/center photo + `rgba(133,104,73,0.78)` scrim,
       radius 6px, padding 25px) holding:
       - `.form-header` — **"Make your reservation"** h2 (Playfair Display
         900, 42px, `#fff`, capitalized) + 18px white Lorem-ipsum paragraph.
     - `<form>` (margin-left 425px, padding 30px):
       - Row 1: **Check In** (date, required) · **Check Out** (date,
         required) — two columns, NO divider.
       - Row 2: **Adults** (select 1/2/3) · **Children** (select 0/1/2),
         each with a floating light-grey arrow glyph.
       - **Room Type** (full-width select, required, placeholder "Select
         room type"; options "Private Room (1 to 2 People)" / "Family Room
         (1 to 4 People)") + arrow glyph.
       - `.form-btn` — **Check availability** (full-width pill
         rgba(133,104,73,0.9) submit, white bold 18px text).
  3. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **taupe/bronze `#856849`** (= rgba(133, 104, 73, 1)) — used
    for labels and the submit button (at 0.9 alpha, 1 on hover), and as the
    section wash at 0.33 alpha and the photo scrim at 0.78 alpha. The ONLY
    accent color; earthy and monochromatic.
  - Section background: **`rgba(133, 104, 73, 0.33)`** solid wash (light
    taupe/beige) — NOT a photo, NOT dark.
  - Card: `#fff`, max-width 912px, `border-radius: 6px`, `box-shadow: 0px
5px 10px -5px rgba(0, 0, 0, 0.1)`.
  - Photo panel: 400px wide, `left: 25px; top: -25px; bottom: -25px`,
    `background-size: cover; background-position: center`, radius 6px, scrim
    **`rgba(133, 104, 73, 0.78)`** (sepia tint over the photo).
  - Headline: **`#fff`**, `font-family: 'Playfair Display', serif`, weight
    **900**, 42px, capitalized — a SERIF display font (unlike Lodgely's Hind
    sans). Subtitle: `#fff`, 18px, Alice serif.
  - Font: **'Alice', serif** for body/labels/inputs/button (weights 400 +
    700), **'Playfair Display' 900** for the headline. Google Fonts links:
    `family=Alice:wght@400;700` and `family=Playfair+Display:wght@900`.
  - Labels (`.form-label`): **`color: #856849`** (brand taupe),
    `text-transform: uppercase`, `line-height: 24px`, `height: 24px`,
    `font-size: 14px`, `font-weight: 400`, **`margin-left: 20px`** (indented
    to align with the pill inputs' padding) — STATIC uppercase taupe labels
    ABOVE the input (NOT floating, NOT bottom tab bars).
  - Inputs (`.form-control`): `background-color: #fff`, `height: 45px`,
    `padding: 0px 15px`, `color: #151515` (near-black text), `border: 1px
solid #e5e5e5`, `font-size: 16px`, `font-weight: 700`, `box-shadow:
none`, **`border-radius: 40px`** (PILL — the signature shape of this
    variant), `transition: 0.2s all`; focus → `background: #f8f8f8`;
    placeholder `#e5e5e5`. Empty date inputs render `#e5e5e5`
    (`input[type="date"].form-control:invalid`); empty selects too
    (`select.form-control:invalid` → `#e5e5e5`, options back to `#151515`).
  - `.form-group`: `position: relative`, `margin-bottom: 20px`.
  - Select: `appearance: none`; custom `.select-arrow` — absolute,
    `right: 3px`, `bottom: 5px`, 32×32px, `line-height: 32px`,
    `text-align: center`, `pointer-events: none`, **`color: #e5e5e5`**,
    `font-size: 14px`; `::after` content `'\279C'` (➜) rotated 90°. NOTE:
    the arrow is a floating LIGHT-GREY `#e5e5e5` glyph (matching the border
    color, NOT white, NOT brand-colored) — no tab background, no focus color
    change.
  - Button (`.submit-btn`): **`color: #fff`, `background-color: rgba(133,
104, 73, 0.9)`**, `font-weight: 700`, `font-size: 18px`, `border: none`,
    **`border-radius: 40px`** (pill), `height: 55px`, `display: block`,
    `width: 100%`; hover/focus → `rgba(133, 104, 73, 1)` (solid brand).
    `.form-btn` wrapper: `margin-top: 30px`.
  - Mobile (≤768px): photo panel stacks above the form — `position:
relative`, `top: -15px`, `width: 95%`, `margin: auto`; `form {
margin-left: 0 }`.
- **KEY DIFFERENCES vs Lodgely (Booking 16) — do NOT copy the Lodgely dark
  design:**
  - WHITE card `#fff` + radius 6px, max-width 912px vs near-black `#1e1e1e`
    - radius 0, max-width 586px.
  - LIGHT taupe section wash `rgba(133,104,73,0.33)` vs dark photo + 60%
    black scrim.
  - Photo lives in an ABSOLUTE LEFT photo panel (400px, sepia taupe scrim
    0.78) holding the header vs a full-bleed section photo (Lodgely has no
    photo panel — the whole section IS the photo).
  - Headline in **Playfair Display serif 900** 42px + 18px white subtitle
    vs Hind sans 700 42px with NO subtitle.
  - Field set differs: NO "No of rooms" select; ADDED full-width **Room
    Type** select ("Select room type" placeholder, Private/Family Room
    options); Adults/Children only in row 2.
  - PILL inputs (radius 40px, white fill, 1px `#e5e5e5` border, near-black
    `#151515` bold text) vs Lodgely's borderless `#2d2d2d` dark inputs.
  - Uppercase TAUPE `#856849` labels, weight 400, margin-left 20px vs
    Lodgely's white weight-400 non-uppercase labels.
  - Arrow glyph `#e5e5e5` right 3px bottom 5px vs Lodgely's white 32×32 at
    right 6px bottom 6px.
  - Pill taupe `rgba(133,104,73,0.9)` button (weight 700, 18px, height 55px)
    vs sharp olive `#6c8f18` weight-400 50px button.
  - h2 (not h1) for the header.
- **KEY DIFFERENCES vs Innly (Booking 15) — also light, do NOT merge the
  two:** Innly is a white card with a full-bleed resort photo + light 20%
  scrim behind it, Cardo serif headline, bronze `#c99552` labels/divider,
  sharp 3px corners, 24px grey arrow tabs; Hostly is a taupe WASH section
  (no photo behind the card), a LEFT photo panel, Playfair Display 900
  headline, taupe `#856849` labels, PILL 40px-radius inputs/button, and the
  Room Type select. Different field sets (Innly: rooms/adults/children in a
  4-col row with the button; Hostly: adults/children + room type, button in
  its own row).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the photo panel uses a
  seeded picsum placeholder (`picsum.photos/seed/hostly-1/500/700`, an
  architectural/landmark seed; the source `background.jpg` must not be
  copied) as the 400px left panel with an `rgba(133,104,73,0.78)` overlay
  (Tailwind `bg-[rgba(133,104,73,0.78)]` or a theme token); date inputs are
  native `<input type="date">` styled with Tailwind (no datepicker
  dependency); select arrows = rotated `➜` glyph (U+279C) or lucide
  ChevronDown as a floating `#e5e5e5` 32×32 glyph at `right 3px bottom 5px`
  (NO tab background); headline in Playfair Display 900 (NOT the body font),
  body in Alice 400/700; both via Google Fonts `<link>` in `index.html`;
  document title "Hostly — Travel Booking Widget Template"; brand
  "Booking"/"Colorlib Booking" → "Hostly" everywhere. The "Check
  availability" button validates the form (check-in and check-out dates
  required; check-out ≥ check-in; Room Type selected) and reveals a summary
  line (check-in → check-out, adults, children, room type) — the original
  demo is static, so this minimal interactive behavior is a documented
  recreation choice, kept in a pure exported function for 100%-coverage
  tests. Labels are static, uppercase, taupe, ABOVE the input — NOT
  floating, NOT bottom tab bars.

Hostly lives in `apps/hostly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with taupe wash

The system SHALL render a full-viewport (100vh) booking section on a light
warm-taupe background (`rgba(133,104,73,0.33)`) vertically centering a white
rounded form card. The page SHALL NOT render any navbar, hero copy, or
footer chrome (single-section form demo).

#### Scenario: Full-viewport section with light taupe background

- **GIVEN** the Hostly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use the solid warm-taupe background wash
  `rgba(133,104,73,0.33)`
- **AND** a white card (`#fff`, max-width 912px, border-radius 6px, soft
  drop shadow) SHALL be vertically and horizontally centered
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: Left photo panel with header

The system SHALL render an absolute photo panel overlapping the card's left
edge (400px wide, top/bottom -25px) with a cover-positioned photograph
dimmed by a warm-taupe `rgba(133,104,73,0.78)` scrim, containing the form
header.

#### Scenario: Photo panel with sepia scrim and header

- **GIVEN** the Hostly page is rendered
- **WHEN** the form card is displayed
- **THEN** a 400px-wide photo panel SHALL overlap the left edge of the card
  (left 25px, extending 25px above and below the card)
- **AND** the panel SHALL use a full-bleed photograph (seeded picsum
  architectural image) with `cover`/`center` sizing
- **AND** the photograph SHALL be dimmed by an `rgba(133,104,73,0.78)`
  overlay
- **AND** the panel SHALL have border-radius 6px, padding 25px and a soft
  drop shadow

#### Scenario: Header inside the photo panel

- **GIVEN** the photo panel is displayed
- **WHEN** the panel is rendered
- **THEN** a centered-left `h2` reading "Make your reservation" SHALL appear
  inside the panel (margin-top ~60px)
- **AND** the headline SHALL use the Playfair Display serif font, weight
  900, size ~42px, white `#fff`, capitalized
- **AND** an 18px white paragraph (Lorem-ipsum copy) SHALL appear below the
  headline
- **AND** the form fields SHALL be laid out to the right of the panel
  (margin-left ~425px on desktop)

### Requirement: Check-in and check-out date fields

The system SHALL render Check In and Check Out date inputs side by side in
the booking form, with no divider between them.

#### Scenario: Date fields without divider

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Check In" date input and a "Check Out" date input SHALL be
  present side by side
- **AND** both inputs SHALL be required
- **AND** NO divider symbol SHALL appear between the two fields
- **AND** an empty date input SHALL display light-grey `#e5e5e5`
  placeholder-like text until a value is picked
- **AND** the inputs SHALL be pill-shaped (border-radius ~40px) with a white
  fill, a 1px `#e5e5e5` border, near-black `#151515` bold text and height
  45px

#### Scenario: Check-out not before check-in

- **GIVEN** the user has picked a check-in date
- **WHEN** the user picks a check-out date earlier than the check-in date
- **THEN** the form SHALL flag the check-out field as invalid
- **AND** submission SHALL be blocked until check-out is on or after
  check-in

### Requirement: Adults and Children selects

The system SHALL render two selects (Adults, Children) side by side with the
source option sets and a floating light-grey arrow glyph at the right edge
of each select.

#### Scenario: Select field set

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** an "Adults" select SHALL offer options 1, 2 and 3
- **AND** a "Children" select SHALL offer options 0, 1 and 2
- **AND** each select SHALL display an arrow (rotated `➜` glyph or
  ChevronDown) as a floating `#e5e5e5` 32×32 glyph at `right 3px bottom 5px`
  inside the input
- **AND** the arrow SHALL have no tab background (no grey/branded tab)

### Requirement: Room Type select

The system SHALL render a full-width "Room Type" select with the source
placeholder and options, marked required.

#### Scenario: Room type options

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a full-width "Room Type" select SHALL appear below the Adults /
  Children row
- **AND** the select SHALL show the placeholder option "Select room type"
  (hidden once a choice is made)
- **AND** the select SHALL offer options "Private Room (1 to 2 People)" and
  "Family Room (1 to 4 People)"
- **AND** the select SHALL be required
- **AND** an empty select SHALL display light-grey `#e5e5e5` text until a
  value is picked
- **AND** the select SHALL display the floating `#e5e5e5` arrow glyph

### Requirement: Check availability button

The system SHALL render a full-width "Check availability" submit button
(solid taupe `rgba(133,104,73,0.9)` background with white bold text,
pill-shaped) that validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** check-in and check-out dates are filled in (check-out ≥
  check-in) and a room type is selected
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the reservation details
  (e.g. "Check-in 2026-08-10 → Check-out 2026-08-13 · 2 adults · 1 child ·
  Private Room (1 to 2 People)")
- **AND** the summary SHALL be styled with the taupe `#856849` brand color
  or on a taupe-tinted background

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Check availability" with missing required fields
  (dates or room type)
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

### Requirement: Static uppercase taupe labels

The system SHALL render each field with a static, uppercase, taupe
`#856849` label ABOVE the input, indented 20px (matching the source — NOT
floating labels, NOT bottom-edge tab bars).

#### Scenario: Label placement and styling

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** every field (Check In, Check Out, Adults, Children, Room Type)
  SHALL have a label directly above its input
- **AND** each label SHALL be 14px, weight 400, uppercase, taupe `#856849`,
  line-height 24px, with a 20px left indent
- **AND** each label SHALL be associated with its control via
  `htmlFor`/`id` (accessible)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-hostly`
- [ ] `scripts/verify-app.sh hostly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with taupe
      `rgba(133,104,73,0.33)` wash → vertically centered white card
      (`#fff`, max-width 912px, radius 6px, shadow) → left photo panel
      (400px, top/bottom -25px, cover photo + `rgba(133,104,73,0.78)`
      scrim) with h2 "Make your reservation" (Playfair Display 900, 42px,
      `#fff`) + 18px white subtitle → fields in source order (Check In +
      Check Out · Adults + Children · Room Type) → Check availability
      button; NO navbar, NO footer (single-section demo)
- [ ] Brand color `#856849` (labels, button background at 0.9/1, section
      wash 0.33, photo scrim 0.78) in `@theme` and used via Tailwind
      classes
- [ ] Playfair Display (900) + Alice (400/700) via Google Fonts `<link>`s
      in `index.html`
- [ ] Photo panel = seeded picsum (`hostly-1/…`) cover/center with
      `rgba(133,104,73,0.78)` overlay, 400px wide, left 25px, top/bottom
      -25px, radius 6px, padding 25px
- [ ] Header: h2 "Make your reservation", Playfair Display 900 42px `#fff`
      (serif display — NOT the body font), capitalized, + 18px white
      subtitle paragraph; margin-top ~60px
- [ ] Check In (date, required) + Check Out (date, required) side by side;
      NO ⇔ divider
- [ ] Inputs: white fill, height 45px, padding 0 15px, near-black `#151515`
      bold 16px text, 1px `#e5e5e5` border, radius 40px (PILL), focus bg
      `#f8f8f8`, `#e5e5e5` placeholder / dim empty date & select state
- [ ] Selects: Adults (1/2/3), Children (0/1/2) side by side, then
      full-width Room Type (placeholder "Select room type", options
      "Private Room (1 to 2 People)" / "Family Room (1 to 4 People)",
      required); `appearance: none`; floating `#e5e5e5` 32×32 arrow glyph
      (rotated `➜`/ChevronDown) at right 3px bottom 5px, NO tab background
- [ ] Labels: static, uppercase, 14px weight-400 taupe `#856849`, 20px left
      indent, `htmlFor`/`id` associated
- [ ] "Check availability" button: full width, `rgba(133,104,73,0.9)` bg
      (solid `#856849` on hover/focus), white bold 18px text, height 55px,
      radius 40px (pill), border none; validates (dates required, check-out
      ≥ check-in, room type required) and shows summary / validation
      messages
- [ ] Mobile (≤768px): photo panel stacks above the form (relative, width
      95%, top -15px, margin auto) and the form's left margin collapses to 0
- [ ] Placeholder images via `picsum.photos/seed/hostly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
