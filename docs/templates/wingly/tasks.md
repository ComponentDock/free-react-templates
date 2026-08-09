# Wingly (ColorLib Booking 5) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V5 — Free Airline Flight
> Booking Form" (https://colorlib.com/wp/template/colorlib-booking-5/) under
> the NEW name **Wingly** ("wing" + "-ly", following the Booking Forms family
> convention Reservly/Coastly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/
> Lodgely/Hostly/Guestly/Skyly/Bookly/Nestly/Drivly; single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-09), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V5" — free AIRLINE
  flight-booking form widget template, Bootstrap-based (Booking Forms
  category, 22 templates in the family). Internal demo doc title: "Booking
  Form HTML Template". The recreation brands itself **Wingly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-5/` (HTTP 200, ~5.6 KB
  HTML + `css/style.css` ~3.4 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-5/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as the template-skyly / template-stayly / template-roostly /
  template-roomzy / template-reservly / template-ridely / template-triply /
  template-innly / template-lodgely / template-hostly / template-guestly /
  template-coastly / template-bookly / template-nestly / template-drivly
  preps). The TEMPLATES.md screenshot (`colorlib-booking-5.jpg`, 1200×972,
  viewed in browser) and the live render (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** immersive aviation
  aesthetic. A full-screen photograph of an airplane wing flying above a sea
  of clouds (bright sun, lens flare, blue sky) fills the viewport. Floating
  in the center: a wide semi-transparent DARK grey rounded rectangle holding
  the flight-search form. Top-left: three custom radio buttons with white
  text — "Round trip" (selected, filled white circle), "One way",
  "Multi-City". Below: two wide WHITE pill-shaped inputs (Flying From /
  Flying To, placeholder "City or airport") with small uppercase WHITE
  labels above them; then a row of Departing / Returning date inputs and
  Adults / Children selects (white pills); then Travel class select and, at
  bottom right, a solid red-orange **"SHOW FLIGHTS"** pill button with white
  uppercase text. The ONLY accent color is red `#f23e3e` (radio dots +
  button); everything else is the dark translucent card, white pill fields,
  white labels and the cloudscape photo. Clean, high-contrast airline
  booking widget.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — full-bleed cover/center PHOTO background
     (airplane wing above clouds); NO separate scrim — content vertically
     centered via `.section-center` (absolute top 50%, translateY(-50%)).
  2. `.booking-form` — DARK TRANSLUCENT CARD (`rgba(0,0,0,0.7)`, padding
     40px, radius 6px, FULL container width, NO max-width, NO
     shadow/border):
     - `.form-checkbox` radio group: **Roundtrip · One way · Multi-City**
       (custom circles: white 20px, checked → 10px `#f23e3e` dot).
     - Row (`col-md-6` ×2): **Flying from** · **Flying to** (text inputs,
       placeholder "City or airport"; source typo "Flyning to" → fix).
     - Row (`col-md-3` + `col-md-3` + `col-md-2` + `col-md-2`):
       **Departing** (date, required) · **Returning** (date, required) ·
       **Adults (18+)** (select 1/2/3) · **Children (0-17)** (select 0/1/2).
     - Row (`col-md-3` + `col-md-3`): **Travel class** (select
       Economy/Business/First) · `.form-btn` → **button.submit-btn
       "Show flights"**.
  3. No footer, no other content sections (single-section demo).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand: **red `#f23e3e`** (radio checked dots + "Show flights" button
    bg; button text `#fff`).
  - Card: **`rgba(0,0,0,0.7)`** translucent near-black, padding 40px,
    radius 6px, NO max-width / shadow / border.
  - Inputs: **`#fff`** bg, NO border, height 50px, radius 40px (PILL),
    padding 0 25px, color `#191a1e`, weight 400, font-size 16px;
    placeholder + invalid date `rgba(82,82,84,0.4)`.
  - Labels: **`#fff`**, 12px, uppercase, weight 400, `margin-left: 20px`,
    `margin-bottom: 5px`, 24px line-height/height, STATIC (never float).
  - Radios: input visually hidden; label `padding-top: 4px; padding-left:
30px`, weight 400, `#fff`; `label+label { margin-left: 15px }`;
    `input+span` 20×20 white circle radius 50%; `span:after` `#f23e3e`
    10×10 dot, `transition: 0.2s all`, opacity 0→1 on checked.
  - Font: **'PT Sans', sans-serif** — weight 400 only (cf-fonts @font-face
    loads 400 latin; NO 700 in the demo). Google Fonts `PT+Sans`.
  - Selects: `appearance:none`; `.select-arrow` right 10px bottom 6px,
    32×32, `rgba(0,0,0,0.3)` 14px, `::after` `'\279C'` (➜) rotated 90°.
  - Submit: `#f23e3e` bg, `#fff` uppercase 14px weight-400, height 50px,
    width 100%, radius 40px, hover/focus `opacity: 0.9`;
    `.form-btn { margin-top: 27px }`.
  - Radius family: 6px card · 40px pill inputs+button · 50% radio circles.
    No shadows anywhere.
  - Responsive: Bootstrap `col-md-*` grid (below 768px rows collapse).
- **Family distinctions (do NOT copy these siblings):**
  - vs **Skyly** (Booking 19): same flight field set, but Skyly = LIGHT —
    white 642px card, CTA h1 "Book your flight today" + left column,
    floating `#98c9ee` labels, 65px bordered inputs radius 4px, Lato,
    `#4fa3e3` blue. Wingly = DARK — translucent `rgba(0,0,0,0.7)` full-width
    card, NO headline/CTA, STATIC white labels, 50px borderless PILL inputs,
    PT Sans, `#f23e3e` red.
  - vs **Drivly** (Booking 4): both dark cards, but Drivly = solid
    `#101113` 642px card + gold `#ffc001`, "Book a car" h1, grey fields
    radius 3px, Montserrat, CAR field set. Wingly = translucent full-width
    card + red `#f23e3e`, NO headline, white PILL fields, PT Sans, FLIGHT
    field set.
  - vs **Roomzy** (Booking 15): Roomzy's coral-red `#f14634` is a
    DIFFERENT red — keep `#f23e3e` exact.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap grid
  (NO Bootstrap dependency); single-section form page — repo-standard
  Navbar/Footer must NOT be added; background = seeded picsum
  (`picsum.photos/seed/wingly-1/1920/1080`, clouds/sky-appropriate seed;
  source `background.jpg` NOT copied) cover/center with NO separate scrim
  (the card's own `rgba(0,0,0,0.7)` provides contrast; photo fully visible
  around the card); native date inputs (no datepicker dep); selects
  `appearance:none` + rotated `➜` glyph/lucide ChevronDown; custom circular
  radios (visually-hidden native inputs); STATIC `<label htmlFor>`
  elements (must NOT float, unlike Skyly); PT Sans 400 Google Fonts
  `<link>`; document title "Wingly — Flight Booking Template"; brand
  "Booking" → "Wingly" everywhere. "Show flights" validates (flying-from,
  flying-to, departing, returning required; adults/children/travel-class
  defaulted) and shows a summary line (route · dates · passengers · class)
  — original is static, this minimal interaction is a documented recreation
  choice in a pure exported function for 100%-coverage tests.

## Tasks (implementation order)

- [ ] Scaffold `apps/wingly` (copy simplest existing app, rename package to
      `@free-react-templates/wingly`; NOT `apps/colorlib-booking-5`)
- [ ] `@theme` tokens: `--color-brand: #f23e3e` (red), `--color-ink:
  #191a1e` (input text), card `rgba(0,0,0,0.7)`, placeholder
      `rgba(82,82,84,0.4)`, radius 6px (card) + 40px (pills)
- [ ] `index.html`: PT Sans 400 Google Fonts `<link>`, title "Wingly —
      Flight Booking Template"
- [ ] Section: 100vh, picsum `wingly-1/1920/1080` cover/center, content
      vertically centered, NO navbar/footer/headline
- [ ] Card: full-width, `rgba(0,0,0,0.7)` bg, padding 40px, rounded 6px, no
      shadow/border
- [ ] Radio group: Roundtrip / One way / Multi-City — visually-hidden
      native inputs + custom white 20px circles + red `#f23e3e` 10px
      checked dot; white labels, 30px left padding, 15px spacing
- [ ] Route fields (static labels): Flying from + Flying to row (text,
      placeholder "City or airport"); fix source typo "Flyning to" → "Flying
      to"; labels white 12px uppercase; inputs white 50px pill radius-40
      borderless, `#191a1e` text, placeholder 40% grey
- [ ] Date/passenger row: Departing (date, required) + Returning (date,
      required) + Adults (1–3) + Children (0–2) selects
- [ ] Travel class select (Economy/Business/First) + "Show flights" button
      row
- [ ] Select arrows: appearance-none + rotated ➜/ChevronDown
      `rgba(0,0,0,0.3)` 14px 32×32 right-10 bottom-6 pointer-events-none
- [ ] "Show flights" button: full-width, `#f23e3e` bg, white uppercase 14px
      text, h-50, rounded-[40px], hover opacity 0.9
- [ ] Validation + summary: pure exported function (required:
      flying-from/flying-to/departing/returning; summary "JFK → LHR · Aug
      10 – Aug 17, 2026 · 2 adults, 1 child · Economy")
- [ ] Responsive: route row stacks <768px; date/passenger row wraps full
      width; travel class + button stack; button stays full width
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh wingly` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs; merge
      immediately; `[~]`→`[x]` + surge URL + `npm run readme:status`
