# Template: Coastly (Booking Forms / Hotel Book Now Widget)

## Purpose

Coastly is a single-page hotel booking-form template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Colorlib Booking Form V2 — Free Book Now Template" website
template (source: https://colorlib.com/wp/template/colorlib-booking-2/),
built under a DIFFERENT name (Coastly — "coast", a holiday-resort
destination (the source photo is a sunny pool resort), plus the "-ly"
suffix, matching the Booking Forms family convention: Reservly, Roomzy,
Roostly, Stayly, Ridely, Triply, Innly, Lodgely, Hostly, Guestly, Skyly;
re-branded) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-09): the official preview
> `https://preview.colorlib.com/theme/colorlib-booking-2/` returns HTTP 404
> (curl verified), as it does for the whole classic Booking Forms family (see
> the template-skyly / template-stayly / template-roostly / template-roomzy /
> template-reservly / template-ridely / template-triply / template-innly /
> template-lodgely / template-hostly / template-guestly preps — the
> `preview.colorlib.com/assets/js/products.js` product map only covers new
> Astro-era templates). The LIVE PREVIEW button on the ColorLib template page
> resolves to `https://colorlib.com/etc/bforms/<slug>/` for the whole family.
> **The live demo was fetched and analyzed at
> `https://colorlib.com/etc/bforms/colorlib-booking-2/` (HTTP 200, ~6.3 KB
> HTML + `css/style.css` ~3.2 KB + `css/bootstrap.min.css` ~121 KB), the live
> render was verified in the browser (dark form slab LEFT, "BOOK NOW!"
> headline RIGHT, lime-green button), and the TEMPLATES.md screenshot
> (`colorlib-booking-2.jpg`, 1200×972, viewed in browser) matches the live
> render 1:1.**

## Design reference (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V2" — page title "Colorlib
  Booking Form V2 - Free Book Now Template 2026 - Colorlib" (template page
  `https://colorlib.com/wp/template/colorlib-booking-2/`). Internal demo doc
  title: "Booking Form HTML Template". Category in TEMPLATES.md: **Booking
  Forms (22)**. The recreation brands itself **Coastly** but keeps the same
  section structure, field set and copy kinds.
- **Live demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-2/` (HTTP 200, ~6.3 KB
  HTML). Single-section document: `#booking.section` (height 100vh) with
  `.section-center` (absolute, top 50%, translateY(-50%), left/right 0)
  vertically centering `.container > .row`:
  - `#booking` — **full-bleed PHOTO page background**:
    `background-image: url('../img/background.jpg'); background-size: cover;
background-position: center;` (the photo is a sunny pool resort: white
    lounge chairs beside a swimming pool, a cabana/roof structure and a blue
    sky), with `#booking::before` — a **white overlay** covering the whole
    section: `background: rgba(255, 255, 255, 0.85)`. `font-family:
'Montserrat', sans-serif`.
  - Row (Bootstrap grid, NO Bootstrap dependency in the recreation):
    - `col-md-7 col-md-push-5` → `.booking-cta` (margin-top 80px,
      margin-bottom 30px) — the RIGHT COPY column:
      - **h1 "Book Now!"** — `font-size: 58px`, `text-transform: uppercase`,
        `font-weight: 400`, `color: #1a1e24` (dark charcoal-navy).
      - **p** — `font-size: 16px`, `color: #1a1e24` (Lorem-ipsum copy).
    - `col-md-4 col-md-pull-7` → `.booking-form` — the LEFT DARK FORM BLOCK:
      the four fields are flush (`.form-group { margin-bottom: 0 }`, `.row
.no-margin` with 0 gutters) and share one `#1a1e24` background, so the
      form reads as a **single dark slab/card** with a lime-green button
      closing it at the bottom (live render verified; the slab is NOT a
      separate white card like Skyly's — the fields ARE the card).
  - `<form>` contents, in order:
    - `.form-group` (full width): `<span class="form-label">Your
Destination</span>` + text input, placeholder "Enter a destination or
      hotel name".
    - `.row.no-margin` with THREE `col-sm-4` columns:
      1. **Check In** (date input, `required`) + `<span class="in-out
hidden-xs">&#8652;</span>` (U+21CC ⇌ "rightwards harpoon over
         leftwards harpoon") floating between Check In and Check out.
      2. **Check out** (date input, `required`).
      3. **Guests** (select, options 1/2/3) + `.select-arrow` glyph.
      - Sibling columns get a 1px translucent vertical separator:
        `[class*="col-"]+[class*="col-"] .form-group .form-control {
border-left: 1px solid rgba(243,239,245,0.33) }`.
    - `.form-btn` → `.submit-btn` full-width **"Check availability"** button.
  - NO navbar, NO footer, NO other sections — a one-section form demo (page
    ends with only the GA script). Responsive behavior comes entirely from
    Bootstrap's `col-md-*` / `col-sm-*` grid (the 3-field row stays 3-up
    ≥768px via `col-sm-4`, stacks below 768px; the CTA/form columns collapse
    below 992px; `.hidden-xs` hides the ⇌ glyph below 768px).
- **Visual design (TEMPLATES.md screenshot `colorlib-booking-2.jpg`, 1200×972,
  viewed in browser 2026-08-09 + live render):** light resort-aesthetic page.
  A full-screen photograph (white lounge chairs + swimming pool + cabana
  under a bright blue sky) fills the viewport, heavily washed out by an 85%
  white overlay. On the LEFT, a solid very-dark `#1a1e24` form block with
  WHITE 18px labels ("Your Destination", "Check In", "Check out", "Guests")
  at each field's top-left edge, dark fields separated by thin translucent
  vertical rules, a light ⇌ swap glyph between the two date fields, and a
  large full-width LIME-GREEN `#72b01d` "Check availability" button (white
  text) closing the block. On the RIGHT, the large uppercase dark headline
  **"BOOK NOW!"** (`#1a1e24`, ~58px, weight 400) with a 16px Lorem-ipsum
  paragraph beneath. The ONLY accent color is the lime green `#72b01d`
  (button) — everything else is dark charcoal `#1a1e24`, white, and the
  washed-out photo. Clean, modern, high-contrast hotel "book now" widget.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` — full-viewport (100vh) section with a full-bleed
     cover/center PHOTO background (pool resort) + `rgba(255,255,255,0.85)`
     white overlay; content vertically centered via `.section-center`.
  2. LEFT column (4/12, pulled): `.booking-form` — dark `#1a1e24` form block
     (flush fields, 0 gutters), containing:
     - "Your Destination" text input (placeholder "Enter a destination or
       hotel name").
     - Row: **Check In** (date, required) · ⇌ swap glyph (hidden <768px) ·
       **Check out** (date, required) · **Guests** (select 1/2/3) — three
       `col-sm-4` columns with 1px translucent vertical separators between
       them; the Guests select carries a `➜`-rotated arrow glyph.
     - `.form-btn` — **Check availability** (full-width lime-green
       `#72b01d` submit, white 700-weight capitalize text, height 100px).
  3. RIGHT column (7/12, pushed): `.booking-cta` — **h1 "Book Now!"** (58px,
     uppercase, `#1a1e24`, weight 400) + 16px `#1a1e24` paragraph.
  4. No footer, no other content sections (single-section demo).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand color: **lime green `#72b01d`** — used ONLY for the submit button
    background. The ONLY accent color in the whole design; high contrast
    against the dark `#1a1e24` slab.
  - Dark slab / field color: **`#1a1e24`** (very dark charcoal-navy) — every
    `.form-control` background; the flush fields read as one dark card.
  - Text colors: **`#1a1e24`** for the CTA h1 + paragraph (on the washed-out
    photo); **`#fff`** for field text and `.form-label`s (on the dark slab).
  - Overlay: `#booking::before` — `rgba(255, 255, 255, 0.85)` over the photo.
  - Border/separator color: **`rgba(243, 239, 245, 0.33)`** (translucent
    pale-grey-lavender) — used for the 2px `border-bottom` on every field AND
    the 1px `border-left` vertical separators between sibling columns AND the
    `.select-arrow` background.
  - Glyph color: **`#f3eff5`** (pale off-white) — the ⇌ in-out glyph and the
    select arrow `➜`.
  - Placeholder / empty-date color: `rgba(255, 255, 255, 0.4)`.
  - Font: **'Montserrat', sans-serif** for everything (weights 400 + 700).
    Google Fonts link: `family=Montserrat:wght@400;700`. NO display font.
  - Section: **100vh**, photo `cover`/`center`, `color` inherits.
  - CTA (`.booking-cta`): `margin-top: 80px; margin-bottom: 30px`. h1 —
    **58px, `text-transform: uppercase`, `font-weight: 400`, `#1a1e24`**.
    p — **16px, `#1a1e24`**.
  - Fields (`.form-control`): **`background-color: #1a1e24`, `color: #fff`,
    `font-size: 18px`, `font-weight: 400`, `height: 100px`,
    `border-radius: 0px` (SHARP square), `border: none` EXCEPT
    `border-bottom: 2px solid rgba(243,239,245,0.33)`, `box-shadow: none`,
    `padding-top: 25px`**. Labels sit at the field's top edge: `.form-label`
    — `color: #fff`, `font-weight: 400`, absolute `left: 10px; top: 10px`,
    **`text-transform: capitalize`** (NOT uppercase — matches the source
    "Your Destination" / "Check In" casing).
  - Column separator: `.booking-form [class*="col-"]+[class*="col-"]
.form-group .form-control { border-left: 1px solid rgba(243,239,245,0.33)
}` — the second and third columns (Check out, Guests) get a 1px
    translucent left rule.
  - In-out swap glyph (`.in-out`): `&#8652;` (U+21CC ⇌), `font-size: 28px`,
    `color: #f3eff5`, absolute `right: -20px; top: 57px`, 40×40px,
    `line-height: 40px`, `z-index: 20`, `translateY(-50%)`, hidden below
    768px (`.hidden-xs`).
  - Select (`.form-control` select): `appearance: none`. `.select-arrow` —
    absolute `right: 0; bottom: 0`, `width: 24px`, `height: 100px`,
    `line-height: 100px`, `text-align: center`, `pointer-events: none`,
    **`background: rgba(243,239,245,0.33)`**; `::after` content `'\279C'`
    (➜) rotated 90°, `color: #f3eff5`, `font-size: 14px`.
  - Button (`.submit-btn`): **`color: #fff; background-color: #72b01d`**
    (SOLID lime green), `font-weight: 700`, `border: none`, `display: block`,
    `width: 100%`, `height: 100px`, `padding: 0`,
    **`text-transform: capitalize`**, `transition: 0.2s all`; hover/focus →
    **`opacity: 0.9`** (the source's only hover treatment).
  - Responsive: Bootstrap `col-sm-4` keeps the date/guests row 3-up ≥768px
    and stacks it below 768px; `col-md-7 push-5` / `col-md-4 pull-7` keep
    CTA-right/form-left ≥992px and stack (CTA above form) below 992px; the ⇌
    glyph hides below 768px.
- **KEY DIFFERENCES vs Skyly (Booking 19) — same family, do NOT copy the
  Skyly design:** Skyly is the LIGHT/SKY-BLUE flight variant (white 642px
  card on a full-bleed photo, `#4fa3e3` accent, Lato font, CTA LEFT + form
  RIGHT, flight fields with radio pills and floating `#98c9ee` in-input
  labels, 65px fields, 4px radius, "Show flights" button). Coastly is the
  DARK/CHARCOAL hotel variant: CTA RIGHT + form LEFT (mirrored), a solid
  `#1a1e24` flush dark slab (NOT a white card), `#72b01d` lime-green accent,
  Montserrat font, hotel field set (destination / check-in / check-out /
  guests) with white `capitalize` labels at each field's top edge, 100px
  SHARP square fields with 2px bottom rules + 1px column separators, a ⇌
  swap glyph between the date fields, and a "Check availability" button.
- **KEY DIFFERENCES vs Guestly (Booking 18) — the other DARK family variant,
  do NOT merge the two:** Guestly is the dark-ORANGE variant (near-black
  `#0f0f0f` card on a WHITE page, full-width photo header panel INSIDE the
  card, Medula One display font, orange `#ff9000` labels/button, PILL
  inputs). Coastly is the dark-CHARCOAL variant with LIME GREEN `#72b01d`
  (fields `#1a1e24` flush on a WHITE-WASHED PHOTO page — no inner photo
  panel), Montserrat, SQUARE 0-radius inputs, white labels, 1px column
  separators and the ⇌ swap glyph.
- **KEY DIFFERENCES vs Stayly (Booking 12) — also light page, do NOT
  copy:** Stayly is a light-grey `#f7f9fa` page with a ~250px SIDE PHOTO
  PANEL inside a white card, `#6499ff` on the button only, 40px inputs,
  static labels ABOVE the fields and a full-width select. Coastly has a
  washed-out PHOTO page, a dark `#1a1e24` form slab, green `#72b01d`,
  100px inputs with in-field top labels, a 3-column date/guests row with
  separators and a swap glyph.
- **Second in the family with a dark slab (first with this palette):** no
  other Booking Forms prep uses charcoal `#1a1e24` + lime green `#72b01d`
  (verified against all existing `template-*` specs 2026-08-09 — Guestly
  uses `#0f0f0f` + orange `#ff9000`, Skyly `#4fa3e3`, Stayly `#6499ff`,
  Roomzy red-orange `#f14634`, Roostly hot pink `#ff0063`) — do not copy
  from guestly (dark) or skyly (blue).
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); page is a bare single-section form page —
  repo-standard Navbar/Footer must NOT be added; the page background uses a
  seeded picsum placeholder (`picsum.photos/seed/coastly-1/1920/1080`, a
  pool/resort-appropriate seed; the source `background.jpg` must not be
  copied) with `cover`/`center` PLUS the `rgba(255,255,255,0.85)` white
  overlay (a `::before`-style absolutely-positioned overlay div); date
  inputs are native `<input type="date">` styled with Tailwind (no
  datepicker dependency); the form block is a `#1a1e24` container with 0-gap
  flush fields (the "slab" look); select arrow = rotated `➜` glyph (U+279C)
  or lucide ChevronDown as a floating `rgba(243,239,245,0.33)` 24×100px
  strip at `right 0 bottom 0`; the ⇌ glyph = lucide ArrowLeftRight or the
  U+21CC character, `#f3eff5`, 28px, 40×40, absolutely between the date
  fields, hidden below 768px; labels = white `capitalize` (NOT uppercase)
  400-weight text at `left 10px top 10px` of each field, `htmlFor`/`id`
  associated (source uses non-semantic `<span>` labels — the recreation
  MUST use real `<label>`s for accessibility); body in Montserrat 400/700
  via Google Fonts `<link>` in `index.html` (NO display font); document
  title "Coastly — Hotel Booking Form Template"; brand "Booking"/"Colorlib
  Booking" → "Coastly" everywhere. The "Check availability" button validates
  the form (destination non-empty, check-in + check-out required,
  check-out ≥ check-in) and reveals a summary line (destination, dates,
  guests) — the original demo is static, so this minimal interactive
  behavior is a documented recreation choice, kept in a pure exported
  function for 100%-coverage tests.

Coastly lives in `apps/coastly` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Full-viewport booking section with photo background and white overlay

The system SHALL render a full-viewport (100vh) booking section with a
full-bleed cover/center-positioned photograph as the page background,
covered by an 85% white overlay, vertically centering a two-column layout
(dark form block + CTA copy). The page SHALL NOT render any navbar, hero
chrome, or footer (single-section form demo).

#### Scenario: Full-viewport section with photo background

- **GIVEN** the Coastly page is rendered
- **WHEN** the page loads
- **THEN** a section spanning the full viewport height SHALL be shown
- **AND** the section SHALL use a full-bleed photograph
  (`picsum.photos/seed/coastly-1/1920/1080`) as its background,
  cover-positioned and centered
- **AND** a white overlay (`rgba(255, 255, 255, 0.85)`) SHALL cover the
  whole section above the photo
- **AND** the content SHALL be vertically centered in the viewport
- **AND** the page SHALL NOT contain a navigation bar or a footer

### Requirement: CTA copy column (right side)

The system SHALL render a right-side call-to-action column with the headline
"Book Now!" and a short supporting paragraph, in the source typography.

#### Scenario: CTA headline and paragraph

- **GIVEN** the Coastly page is rendered
- **WHEN** the page loads
- **THEN** a `h1` reading "Book Now!" SHALL be shown on the right side of the
  layout
- **AND** the headline SHALL be uppercase, ~58px, weight 400, in the dark
  charcoal-navy `#1a1e24`
- **AND** a 16px `#1a1e24` paragraph (Lorem-ipsum copy) SHALL appear below
  the headline
- **AND** the CTA column SHALL occupy ~7/12 of the row width on desktop,
  pushed right

### Requirement: Dark form block (left side)

The system SHALL render a solid dark `#1a1e24` form block on the left side of
the layout (~4/12 of the row width, pulled left), whose flush 0-gap fields
read as a single dark slab, containing the hotel booking form.

#### Scenario: Dark form block with fields

- **GIVEN** the Coastly page is rendered
- **WHEN** the page loads
- **THEN** a dark `#1a1e24` form block SHALL be shown on the left side of
  the layout
- **AND** the fields inside SHALL be flush (no vertical gaps) so the block
  reads as one dark slab
- **AND** the block SHALL contain the booking form fields in source order:
  destination input, then the Check In / Check out / Guests row, then the
  "Check availability" button

### Requirement: Destination field

The system SHALL render a "Your Destination" text input with placeholder
"Enter a destination or hotel name", a white `capitalize` label at the
field's top edge, and the source dark field styling.

#### Scenario: Destination input

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a text input SHALL be shown with a label reading "Your
  Destination"
- **AND** the input SHALL show the placeholder "Enter a destination or hotel
  name"
- **AND** the label SHALL be white, weight 400, `capitalize`-cased, at the
  field's top-left edge (left 10px, top 10px), associated via
  `htmlFor`/`id`
- **AND** the input SHALL have a `#1a1e24` background, white 18px text,
  100px height, sharp 0-radius corners, and a 2px
  `rgba(243,239,245,0.33)` bottom border only

### Requirement: Check In and Check out date fields with swap glyph

The system SHALL render "Check In" and "Check out" date inputs side by side
(both required) with a light ⇌ swap glyph floating between them, and a 1px
translucent vertical separator before the Check out column.

#### Scenario: Date fields and swap glyph

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Check In" date input and a "Check out" date input SHALL be
  present side by side in the same row as the Guests select
- **AND** both inputs SHALL be required
- **AND** a `⇌` (U+21CC) glyph in `#f3eff5` (28px, 40×40) SHALL float
  between the two date fields, vertically centered on the fields
- **AND** the Check out column SHALL show a 1px `rgba(243,239,245,0.33)`
  left border separating it from the Check In column
- **AND** an empty date input SHALL display the `rgba(255,255,255,0.4)` text
  color until a value is picked

#### Scenario: Swap glyph hidden on mobile

- **GIVEN** the Coastly page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** the ⇌ swap glyph SHALL NOT be shown (source `.hidden-xs` behavior)

### Requirement: Guests select

The system SHALL render a "Guests" select offering options 1, 2 and 3 with
`appearance: none` and a floating arrow glyph strip at the right edge.

#### Scenario: Guests select with arrow

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** a "Guests" select SHALL offer options 1, 2 and 3
- **AND** the select SHALL hide its native appearance (`appearance: none`)
- **AND** an arrow glyph strip (rotated `➜` U+279C or ChevronDown, `#f3eff5`
  on a `rgba(243,239,245,0.33)` background, 24px wide, full 100px field
  height) SHALL float at the right edge (`right 0 bottom 0`) of the select
- **AND** the Guests column SHALL show a 1px `rgba(243,239,245,0.33)` left
  border separating it from the Check out column

### Requirement: Check availability button

The system SHALL render a full-width "Check availability" submit button
(solid lime-green `#72b01d` background with white weight-700 capitalize text,
100px height, sharp corners) that validates the form and shows a summary.

#### Scenario: Submit with valid input

- **GIVEN** all required fields are filled in (destination, check-in,
  check-out with check-out ≥ check-in, guests)
- **WHEN** the user clicks "Check availability"
- **THEN** the form SHALL show a summary line with the booking details (e.g.
  "Paradise Resort · Aug 10 → Aug 13, 2026 · 2 guests")
- **AND** the summary SHALL be styled with the lime-green `#72b01d` brand
  color or on a green-tinted background

#### Scenario: Submit with missing fields

- **GIVEN** the booking form is displayed
- **WHEN** the user clicks "Check availability" with missing required fields
- **THEN** the form SHALL show validation messages for the missing required
  fields
- **AND** no summary SHALL be shown

#### Scenario: Button hover state

- **GIVEN** the booking form is displayed
- **WHEN** the user hovers over or focuses the "Check availability" button
- **THEN** the button SHALL reduce to 90% opacity (the source's only hover
  treatment)

### Requirement: Field styling tokens

The system SHALL render every field with the source dark styling: `#1a1e24`
background, white 18px text, 100px height, sharp 0-radius corners, no side
borders, a 2px `rgba(243,239,245,0.33)` bottom border, 25px top padding, and
a white weight-400 `capitalize` label at the top-left edge.

#### Scenario: Field styling applied

- **GIVEN** the booking form is displayed
- **WHEN** the form is rendered
- **THEN** every field (destination, Check In, Check out, Guests) SHALL have
  a `#1a1e24` background with white 18px weight-400 text
- **AND** every field SHALL be 100px tall with sharp 0-radius corners
- **AND** every field SHALL have no border except a 2px
  `rgba(243,239,245,0.33)` bottom border
- **AND** every label SHALL be white, weight 400, `capitalize`-cased,
  positioned at the field's top-left edge, and associated with its control
  via `htmlFor`/`id`

### Requirement: Mobile stacking

The system SHALL collapse the multi-column layout to a single column on small
screens, matching the source's Bootstrap `col-md-*` / `col-sm-*` behavior.

#### Scenario: Single column below 768px

- **GIVEN** the Coastly page is rendered on a viewport narrower than 768px
- **WHEN** the page is displayed
- **THEN** the Check In / Check out / Guests row SHALL stack vertically
- **AND** the CTA column SHALL stack above the form block (source
  `col-md-*` behavior below 992px)
- **AND** the swap glyph SHALL be hidden
- **AND** the dark form block SHALL remain full-width

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-coastly`
- [ ] `scripts/verify-app.sh coastly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: full-viewport section with full-bleed cover/center
      PHOTO page background (seeded picsum, `coastly-1/1920/1080`) + 85%
      white overlay → vertically centered two-column row → LEFT dark
      `#1a1e24` form block (destination input → Check In + ⇌ + Check out +
      Guests row → Check availability button) → RIGHT CTA (h1 "Book Now!",
      58px uppercase `#1a1e24` weight 400 + 16px `#1a1e24` paragraph);
      NO navbar, NO footer (single-section demo)
- [ ] Brand color `#72b01d` (lime green, button background only) in `@theme`
      and used via Tailwind classes
- [ ] Dark slab/field color `#1a1e24`; text `#fff` on slab, `#1a1e24` on
      photo side; separator/border `rgba(243,239,245,0.33)`; glyph
      `#f3eff5`; placeholder `rgba(255,255,255,0.4)`
- [ ] Montserrat 400/700 via Google Fonts `<link>` in `index.html` (NO
      display font)
- [ ] Page background = seeded picsum (`coastly-1/1920/1080`) cover/center
      full-bleed + `rgba(255,255,255,0.85)` overlay (source `background.jpg`
      not copied)
- [ ] CTA: h1 "Book Now!" 58px uppercase `#1a1e24` weight 400 + 16px
      `#1a1e24` paragraph, column ~7/12 pushed right
- [ ] Form block: `#1a1e24`, flush 0-gap fields, ~4/12 pulled left
- [ ] Destination field: label "Your Destination" (white, capitalize, top
      left 10px, `htmlFor`/`id`), placeholder "Enter a destination or hotel
      name"
- [ ] Dates: Check In + Check out (required), `⇌` U+21CC `#f3eff5` 28px
      40×40 swap glyph between them (hidden <768px), empty dates
      `rgba(255,255,255,0.4)`
- [ ] Guests select: options 1/2/3, `appearance: none`, arrow strip
      (`➜`/ChevronDown, `#f3eff5` on `rgba(243,239,245,0.33)`, 24px wide,
      full height, right 0 bottom 0)
- [ ] 1px `rgba(243,239,245,0.33)` vertical separators before Check out and
      Guests columns; 2px bottom border on every field
- [ ] "Check availability" button: full width, solid `#72b01d` bg, white
      weight-700 capitalize text, height 100px, sharp corners, border none;
      hover/focus opacity 0.9; validates (destination + dates required,
      check-out ≥ check-in) and shows summary / validation messages
- [ ] Mobile (<768px): date/guests row stacks vertically, swap glyph hidden,
      CTA stacks above form block; <992px: CTA/form columns stack
- [ ] Placeholder images via `picsum.photos/seed/coastly-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
