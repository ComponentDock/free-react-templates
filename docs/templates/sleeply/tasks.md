# Sleeply (ColorLib Booking 7) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V7 — Free Reservation Form"
> (https://colorlib.com/wp/template/colorlib-booking-7/) under the NEW name
> **Sleeply** ("sleep" + "-ly", following the Booking Forms family convention
> Reservly/Coastly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly/
> Guestly/Skyly/Bookly/Nestly/Drivly/Wingly/Restly; single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-09), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V7" — free HOTEL /
  reservation booking-form widget template (Destination / Guests / Children /
  Check In / Check out), Bootstrap-based (Booking Forms category, 22
  templates in the family). Internal demo doc title: "Booking Form HTML
  Template". The recreation brands itself **Sleeply**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-7/` (HTTP 200, ~6.1 KB
  HTML + `css/style.css` ~2.4 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-7/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as the template-skyly / template-stayly / template-roostly /
  template-roomzy / template-reservly / template-ridely / template-triply /
  template-innly / template-lodgely / template-hostly / template-guestly /
  template-coastly / template-bookly / template-nestly / template-drivly /
  template-wingly / template-restly preps). The TEMPLATES.md screenshot
  (`colorlib-booking-7.jpg`, 1200×972, viewed in browser) and the live
  render (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** clean hotel-booking widget
  over a DAYTIME metropolis photograph (bright blue sky with soft wispy
  clouds, dense beige/grey NYC-style skyline fading into the horizon).
  Centered: a large solid WHITE card with slightly rounded corners holding a
  tight two-row grid of LIGHT-GRAY fields (~65px tall, rounded 4px,
  borderless): wide Destination field (placeholder "Enter Address, zip, city
  or airport") + Guests select ("1") + Children select ("0"), then Check In /
  Check out date fields + a TALL solid NAVY-BLUE **"CHECK AVAILABILITY"**
  button with white uppercase text (the button is TALLER than the fields —
  90px vs 65px). Small NAVY-BLUE uppercase labels sit BELOW each field, each
  with a tiny field-gray connector triangle pointing down at the label. The
  ONLY brand accent is navy-blue `#184c8f` (labels + button); fields are
  solid light-gray `#f2f1f1` with near-black `#090a0b` text. NO headline
  (unlike Booking 6/Restly). Clean, business-like hotel widget.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — full-bleed cover/center PHOTO background
     (daytime city skyline); NO scrim; content vertically centered via
     `.section-center` (absolute top 50%, translateY(-50%)).
  2. `.booking-form` — solid WHITE CARD (radius 4px, padding 30px 15px 0,
     overflow auto):
     - Row 1 (`col-md-8` + `col-md-2` + `col-md-2`): **Destination** (text,
       placeholder "Enter Address, zip, city or airport") · **Guests**
       (select 1/2/3 + arrow zone) · **Children** (select 0/1/2 + arrow
       zone).
     - Row 2 (`col-md-4` + `col-md-4` + `col-md-4`): **Check In** (date,
       required) · **Check out** (date, required) · `.form-btn` →
       **button.submit-btn "Check availability"** (90px tall).
  3. No footer, no headline, no other content sections (single-section
     demo). The `col-md-*` divs are DIRECT children of `<form>` (no `.row`
     wrappers) — Bootstrap floats wrap them at 12 columns.
- **Design tokens (from `css/style.css`, verified 2026-08-09; label-zone
  pixel-verified from the live screenshot):**
  - Brand: **navy-blue `#184c8f`** (`.form-label` text + "Check
    availability" button bg; button text `#fff`). ONLY accent color.
  - Section: **100vh**, bg photo cover/center (daytime city skyline), font
    **'Montserrat', sans-serif** weight 300; `.section-center` absolute top
    50% translateY(-50%). NO scrim.
  - Card (`.booking-form`): **solid `#fff`**, `padding: 30px 15px 0px`,
    **radius 4px**, `overflow: auto`, no shadow.
  - Fields (`.form-control`): **`background: #f2f1f1`** (solid light gray),
    border none, shadow none, **height 65px**, **font-size 24px**,
    `color: #090a0b`, weight 300, **radius 4px**; placeholder + invalid date
    **`#b1b6bd`**.
  - Labels (`.form-label`): **`#184c8f`**, block, weight 600, 25px
    height/line-height, 16px, uppercase, **`margin-top: 10px`** — BELOW the
    field (DOM order: control first, then label). `.form-label:after` —
    connector triangle: absolute left 10px top −10px, border trick
    `border-width: 10px 10px 0 10px; border-color: #f2f1f1 transparent
transparent transparent` → a 10px **`#f2f1f1` (field-gray) triangle
    pointing DOWN** bridging the field-to-label gap.
  - Selects: `appearance: none`. `.select-arrow` — **right 0 top 0, width
    24px, height 65px (full field height), line-height 65px, `#b1b6bd`,
    14px, pointer-events none, NO background strip**; `::after` `'\279C'`
    (➜) rotated 90°.
  - Button (`.submit-btn`): **`#184c8f`** bg, `#fff` uppercase 18px weight
    600, **height 90px** (taller than fields), radius 4px, width 100%,
    display block, NO hover rule in source.
  - Fonts: **'Montserrat', sans-serif** — weights 300 (base/fields) + 600
    (labels/button), both on Google Fonts
    (`family=Montserrat:wght@300;600`).
  - Radius family: **4px** (fields, card, button). No shadows anywhere.
  - Grid rhythm: fields 65px tall; `.form-group` margin-bottom 30px; labels
    25px tall with 10px top margin; button 90px; rows 8/2/2 and 4/4/4.
  - Responsive: Bootstrap `col-md-*` grid only (below 768px rows stack).
- **Family distinctions (do NOT copy these siblings):**
  - vs **Restly** (Booking 6, CLOSEST sibling): Restly = NO card
    (translucent-white `rgba(255,255,255,0.85)` fields ARE the card, sharp
    0-radius), COPPER-BROWN `#8c5d28` labels+button, Imprima + Cantata One,
    CENTERED 52px serif h1 "Make Your Reservation", labels INSET at the
    field's top edge, 80px fields, 28px serif field text, select arrow =
    full-height `rgba(255,255,255,0.3)` bar. Sleeply = solid WHITE CARD
    (radius 4px), solid LIGHT-GRAY `#f2f1f1` fields (65px, 24px `#090a0b`
    weight-300 text, radius 4px), NAVY `#184c8f` labels + button (90px),
    Montserrat 300/600, NO headline, labels BELOW fields with a field-gray
    connector triangle, select arrow = plain `#b1b6bd` zone (no strip).
  - vs **Coastly** (Booking 2): Coastly = dark `#1a1e24` fields, lime
    `#72b01d`, Montserrat, LEFT CTA column "Book Now!" 58px + RIGHT form
    (7/12 offset), 100px fields, 1px column separators. Sleeply = white
    card, light-gray fields, navy, full-width form, no CTA column.
  - vs **Wingly** (Booking 5): Wingly = dark translucent `rgba(0,0,0,0.7)`
    card + red `#f23e3e`, PT Sans, 40px pills, static white labels ABOVE
    fields, flight set, no headline. Sleeply = white card, light-gray
    fields, navy `#184c8f`, hotel set, labels below fields.
  - vs **Skyly** (Booking 19, `#4fa3e3`) / **Stayly** (Booking 12,
    `#6499ff`): Sleeply's `#184c8f` is the family's DARK navy — keep exact.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap grid
  (NO Bootstrap dependency); single-section form page — repo-standard
  Navbar/Footer must NOT be added; background = seeded picsum
  (`picsum.photos/seed/sleeply-1/1920/1080`; source `background.jpg` daytime
  cityscape NOT copied) cover/center with NO scrim (the solid white card
  provides its own contrast; photo visible around the card); native date
  inputs (no datepicker dep); selects `appearance:none` + plain right-edge
  arrow zone (24px × 65px, `#b1b6bd` rotated `➜`/lucide ChevronDown, 14px,
  pointer-events-none, NO background strip — NOT Restly's translucent bar,
  NOT Wingly's floating 32×32 glyph); labels real `<label htmlFor>` BLOCK
  elements BELOW each field (10px top margin, navy, uppercase, 16px, weight
  600, 25px line-height) + the 10px `#f2f1f1` connector triangle pointing
  down (border trick, left 10px); fields keep `#f2f1f1` 65px / 24px
  `#090a0b` weight-300 text, radius 4px, borderless, shadowless; Montserrat
  300/600 via Google Fonts `<link>`; document title "Sleeply — Hotel
  Booking Template"; brand "Booking" → "Sleeply" everywhere. "Check
  availability" validates (destination, check-in, check-out required;
  guests/children defaulted) and shows a summary line (destination ·
  guests/children · dates) — original is static, this minimal interaction is
  a documented recreation choice in a pure exported function for
  100%-coverage tests. Source copy kept verbatim: "Check In" (capital I),
  "Check out" (lowercase o), placeholder "Enter Address, zip, city or
  airport".

## Tasks (implementation order)

- [ ] Scaffold `apps/sleeply` (copy simplest existing app, rename package to
      `@free-react-templates/sleeply`; NOT `apps/colorlib-booking-7`)
- [ ] `@theme` tokens: `--color-brand: #184c8f` (navy-blue), field bg
      `#f2f1f1`, field text `#090a0b`, placeholder `#b1b6bd`, radius 4px
      (fields/card/button), no shadows anywhere
- [ ] `index.html`: Montserrat Google Fonts `<link>`
      (`family=Montserrat:wght@300;600`), title "Sleeply — Hotel Booking
      Template"
- [ ] Section: 100vh, picsum `sleeply-1/1920/1080` cover/center, content
      vertically centered, NO navbar/footer/hero chrome/headline, NO scrim
- [ ] Card: solid white, radius 4px, padding 30px 15px 0, no border/shadow
- [ ] Grid: two rows — 8/2/2 (Destination + Guests + Children) and 4/4/4
      (Check In + Check out + button); fields 65px tall; `.form-group`
      30px bottom margin
- [ ] Destination: text input, placeholder "Enter Address, zip, city or
      airport"
- [ ] Guests + Children selects (1/2/3 and 0/1/2) with `appearance: none`
- [ ] Check In + Check out native date inputs, both `required`
- [ ] Labels BELOW fields: real `<label htmlFor>` block elements
      (margin-top 10px), `#184c8f`, uppercase, 16px, weight 600, 25px
      line-height — NEVER inside or above the field
- [ ] Connector triangle: 10px `#f2f1f1` border trick (border-width 10px
      10px 0 10px, `#f2f1f1 transparent transparent transparent`), pointing
      DOWN, absolute left 10px top −10px relative to the label
- [ ] Field text: `#090a0b` 24px weight-300; placeholder/empty-date
      `#b1b6bd`
- [ ] Arrow zones: plain 24px-wide right-edge zone on each select, full 65px
      height, `#b1b6bd` rotated ➜/ChevronDown 14px, pointer-events-none, NO
      background strip
- [ ] "Check availability" button: full-width in 4/12 slot, `#184c8f` bg,
      white uppercase 18px weight-600 text, h-90 (TALLER than 65px fields),
      4px corners, NO hover rule
- [ ] Validation + summary: pure exported function (required:
      destination/check-in/check-out; summary "Downtown Dubai · 2 guests, 1
      child · Aug 10 – Aug 14, 2026")
- [ ] Responsive: below 768px rows stack full width; button stays full width
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh sleeply` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs; merge
      immediately; `[~]`→`[x]` + surge URL + `npm run readme:status`
