# Soarly (ColorLib Booking 9) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V9 — Free Flight Booking Form"
> (https://colorlib.com/wp/template/colorlib-booking-9/) under the NEW name
> **Soarly** ("soar" + "-ly", following the Booking Forms family convention
> Reservly/Coastly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly/
> Guestly/Skyly/Bookly/Nestly/Drivly/Wingly/Restly/Sleeply/Dozely; single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-09), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V9" — free AIRLINE FLIGHT
  booking-form widget template ("Book Your Flight", flight-type radios, Flying
  from / Flying to, Check In / Check Out, Travel class / Adults / Children,
  "Check availability"), Bootstrap-based (Booking Forms category, 22 templates
  in the family). Internal demo doc title: "Booking Form HTML Template". The
  recreation brands itself **Soarly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-9/` (HTTP 200, ~7.6 KB
  HTML + `css/style.css` ~3.4 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-9/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as all the earlier template-* preps). The TEMPLATES.md screenshot
  (`colorlib-booking-9.jpg`, 1200×972, viewed in browser) and the live render
  (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** one FLAT dark-charcoal card
  centered on a plain WHITE page — NO imagery anywhere. The card's top band is
  slightly darker (`#1a1f24`) and holds a bold white LEFT-aligned headline
  "Book Your Flight". Fields are near-black (`#1c2126`) with SHARP corners; at
  rest each field shows its uppercase mid-gray label (`#2d343b`) inside as
  placeholder text; once filled, the label jumps to small white caps ABOVE the
  field and the white value appears inside. Selected "Roundtrip" radio shows a
  mustard-yellow (`#f7c411`) ring + dot. The LEFT-aligned "Check availability"
  button is mustard-yellow with near-black text. High-contrast, minimal,
  utilitarian airline booking widget.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — WHITE page (no page-level photo), content
     vertically centered via `.section-center` (absolute top 50%,
     translateY(-50%)).
  2. `.booking-form` — centered SOLID-CHARCOAL card (max-width 642px, padding
     0 40px 40px, NO radius, NO shadow, background `#2d343b`):
     - `.form-header` — full-bleed darker band (`padding: 40px; margin: 0
-40px 30px; background: #1a1f24`), LEFT-aligned h1 **"Book Your
       Flight"** (white, Montserrat 700, 38px, capitalize).
     - **Flight-type radio group** — Roundtrip (first) · One way · Multi-City:
       uppercase white 700 labels, custom 20×20px circles (`#1c2126` fill,
       border 2px `#1c2126`, radius 50%); checked → border `#f7c411` + 10px
       dot `#f7c411`.
     - **Flying from** — text input, full width.
     - **Flying to** — text input, full width.
     - Row (6/6): **Check In** (date) · **Check Out** (date).
     - Row (4/4/4): **Travel class** (Economy/Business/First) · **Adults**
       (1/2/3) · **Children** (0/1/2) — each with a 24px-wide FULL-HEIGHT
       right-edge arrow strip (`#2d343b`, ➜ rotated 90°).
     - `.form-btn` → **button.submit-btn "Check availability"** — LEFT-aligned,
       NOT full width: `#f7c411` bg, `#1c2126` text, 700, height 50px,
       padding 0 50px, NO hover rule.
  3. No footer, no other content sections (single-section demo).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand: **`#f7c411`** (mustard yellow — radio checked border + dot,
    submit button bg) and **`#1c2126`** (near-black — field bg, radio fill,
    button text). Neutrals: **`#2d343b`** (card bg + RESTING label color +
    select-arrow color) and **`#1a1f24`** (header band).
  - Section: **100vh**, WHITE page background, font **'Montserrat',
    sans-serif** (400 + 700); `.section-center` absolute top 50%
    translateY(-50%).
  - Card (`.booking-form`): max-width 642px, margin auto, padding **0 40px
    40px**, background **`#2d343b`** — NO border-radius, NO box-shadow (flat).
  - Header (`.form-header`): `padding: 40px; margin: 0 -40px 30px;
background: #1a1f24` (full-bleed band); h1: **'Montserrat' 700**,
    capitalize, **38px**, margin 0, `#fff`, LEFT-aligned.
  - Fields (`.form-control`): **`background-color: #1c2126`**, **height
    50px**, padding 7px 20px 0, border none, **border-radius: 0px** (SHARP),
    `color: #fff`; empty+unfocused → `color: transparent` (label acts as
    placeholder).
  - Labels (`.form-label`): **FLOATING-ABOVE** — rest: absolute `top: 15px;
left: 20px`, uppercase, `color: #2d343b`, 700, 16px, pointer-events
    none, transition 0.2s; `.input-not-empty` (JS class when control has a
    value) or `:focus` → `top: -10px; color: #fff; font-size: 14px`
    (floats ABOVE the field edge, white small caps). Same rule for ALL
    fields including dates (source has no special date rule — unlike Dozely).
  - Radios (`.form-checkbox`): native inputs hidden (`margin-left: -9999px;
visibility: hidden`); `span` 20×20px circle, `border: 2px solid
#1c2126; background: #1c2126; border-radius: 50%`; checked →
    `border-color: #f7c411` + inner dot 10×10px `#f7c411`; labels white 700,
    padding-left 30px; `label + label { margin-left: 15px }`.
  - Selects: `appearance: none`; `.select-arrow` — 24px-wide FULL-HEIGHT
    right-edge strip: absolute right 0, bottom 0, width 24px, height 50px,
    line-height 50px, center, pointer-events none, **`color: #2d343b`**,
    14px; `::after` `'\279C'` (➜) rotated 90° (points down).
  - Button (`.submit-btn`): **`background-color: #f7c411`**, **`color:
#1c2126`**, 700, **height 50px**, border none, **padding 0 50px** —
    LEFT-aligned, NOT full width; NO hover rule in source.
  - Fonts: 'Montserrat' 400/700 everywhere (Google Fonts
    `family=Montserrat:wght@400;700`).
  - Radius family: **0px everywhere** (card/fields/button flat); only radio
    circles 50%.
  - Grid rhythm: fields 50px tall; 30px vertical gap (`.form-group`
    margin-bottom 30px); card side padding 40px; header 40px padding + 30px
    bottom margin; rows 6/6 → 4/4/4.
  - Responsive: Bootstrap `col-md-*` grid only (below 768px rows stack
    full width; button keeps intrinsic width).
- **Family distinctions (do NOT copy these siblings):**
  - vs **Wingly** (Booking 5, CLOSEST sibling — ALSO a flight set): Wingly =
    WHITE `#fff` PILL fields (radius 40px, 65px, 2px `#dfe5e9` borders) over
    a PAGE-LEVEL photo background, RED `#f23e3e` accents, PT Sans 400, STATIC
    white 12px labels ABOVE the fields, NO headline, full-width red pill
    button. Soarly = SOLID-CHARCOAL flat card on a WHITE page, near-black
    SHARP fields, MUSTARD `#f7c411`, Montserrat 400/700, FLOATING labels
    (gray inside at rest → white caps above when filled), "Book Your Flight"
    headline inside the card, left-aligned non-full-width button.
  - vs **Dozely** (Booking 8): Dozely = hotel set, photo INSIDE card +
    `rgba(0,0,0,0.7)` overlay, ORANGE `#ff8846`/`#e35e0a`, Raleway,
    translucent white PILL fields, orange labels floating INSIDE the field
    (top 10px), centered headline, full-width button with hover opacity.
    Soarly = flight set, SOLID charcoal card (no photo), MUSTARD `#f7c411`/
    `#1c2126`, Montserrat, near-black SHARP fields, labels floating ABOVE the
    field (top -10px), left-aligned headline + button.
  - vs **Sleeply** (Booking 7): Sleeply = solid WHITE card, navy `#184c8f`,
    light-gray `#f2f1f1` fields, labels BELOW fields, page-level daytime
    skyline photo, no headline. Soarly = charcoal card, mustard, near-black
    fields, floating-above labels, white page, headline inside card.
  - Yellow family neighbors (keep exact): Ridely/Drivly `#ffc600`, Guestly
    `#ff9000` — Soarly's `#f7c411` is the only true mustard in the family.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap grid
  (NO Bootstrap dependency); single-section form page — repo-standard
  Navbar/Footer must NOT be added; page background white; card background
  SOLID `#2d343b` (NO photo in this variant — no picsum needed for the card);
  native date inputs (no datepicker dep); selects `appearance:none` +
  24px-wide FULL-HEIGHT right-edge arrow strip (lucide ChevronDown or rotated
  ➜, `#2d343b`, 14px, pointer-events-none — NOT Dozely's floating 32×32
  glyph); labels real `<label htmlFor>` that FLOAT ABOVE the field (at rest:
  `#2d343b` uppercase 16px 700 inside at top 15px/left 20px with control text
  transparent; on value/focus: white 14px at top -10px above the field — same
  rule for dates); flight-type radios as custom circles (hidden native input
  - styled span, 20px, `#1c2126` fill, checked `#f7c411` border + 10px dot);
    Montserrat 400/700 Google Fonts `<link>`; document title "Soarly — Flight
    Booking Template"; brand "Booking" → "Soarly" everywhere. "Check
    availability" validates (flying-from, flying-to required; dates + selects
    defaulted) and shows a summary line (flight type · from → to · dates ·
    travel class · adults · children) — original is static, this minimal
    interaction is a documented recreation choice in a pure exported function
    for 100%-coverage tests. Source copy kept verbatim: "Book Your Flight",
    "Roundtrip", "One way", "Multi-City", "Flying from", "Flying to", "Check
    In", "Check Out", "Travel class", "Economy class"/"Business class"/"First
    class", "Adults", "Children", "Check availability".

## Tasks (implementation order)

- [ ] Scaffold `apps/soarly` (copy simplest existing app, rename package to
      `@free-react-templates/soarly`; NOT `apps/colorlib-booking-9`)
- [ ] `@theme` tokens: `--color-brand: #f7c411` (mustard — radios + button),
      `--color-ink: #1c2126` (fields/button text), card `#2d343b`, band
      `#1a1f24`, radius 0 (sharp)
- [ ] `index.html`: Montserrat 400/700 Google Fonts `<link>`
      (`family=Montserrat:wght@400;700`), title "Soarly — Flight Booking
      Template"
- [ ] Section: 100vh white page, content vertically centered, NO
      navbar/footer/hero chrome
- [ ] Card: centered, max-w-[642px], px-10 pb-10, bg-[#2d343b], NO radius,
      NO shadow, NO photo
- [ ] Header band: full-bleed darker band bg-[#1a1f24], p-10, mb-[30px]
      (negative side margins to span card padding); h1 "Book Your Flight" —
      Montserrat 700, white, 38px, capitalize, LEFT-aligned
- [ ] Flight-type radios: Roundtrip / One way / Multi-City — hidden native
      inputs + custom 20×20px circles (`#1c2126` fill, checked → `#f7c411`
      border + 10px dot), uppercase white 700 labels, 15px gap between
      options
- [ ] Flying from + Flying to: full-width text inputs with floating labels
- [ ] Check In + Check Out: native date inputs (6/6 row)
- [ ] Travel class (Economy/Business/First) + Adults (1/2/3) + Children
      (0/1/2) selects (4/4/4 row) with `appearance:none`
- [ ] Floating labels: real `<label htmlFor>` — at rest INSIDE the field
      (top 15px / left 20px, `#2d343b` uppercase 16px 700, control text
      transparent); on value/focus floats ABOVE the field (top -10px, white,
      14px); same rule for all fields including dates
- [ ] Field styling: bg-[#1c2126], h-[50px], SHARP (no radius), borderless,
      white value text
- [ ] Select arrow strips: 24px-wide FULL-HEIGHT right-edge strip
      (`#2d343b`, lucide ChevronDown, pointer-events-none) — NOT Dozely's
      floating 32×32 glyph
- [ ] "Check availability" button: LEFT-aligned (NOT full width), `#f7c411`
      bg, `#1c2126` 700 text, h-[50px], px-[50px], NO hover rule
- [ ] Validation + summary: pure exported function (required:
      flying-from/flying-to; summary "Roundtrip · JFK → LAX · Aug 10 – Aug
      14, 2026 · Economy class · 1 adult · 0 children")
- [ ] Responsive: below 768px rows stack full width; button keeps intrinsic
      width
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh soarly` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs; merge
      immediately; `[~]`→`[x]` + surge URL + `npm run readme:status`
