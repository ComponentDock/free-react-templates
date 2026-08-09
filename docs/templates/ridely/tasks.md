# Ridely (ColorLib Booking 13) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V13 — Free Book A Taxi
> Template" (https://colorlib.com/wp/template/colorlib-booking-13/) under
> the NEW name **Ridely** ("ride" — a taxi ride + "-ly", matching the Booking
> Forms family convention Reservly/Roomzy/Roostly/Stayly; single lowercase
> word, no collision with `apps/` or `openspec/specs/` — verified
> 2026-08-09), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V13" — free BOOK A TAXI
  template, Bootstrap-based (Booking Forms category, 22 templates in the
  family). Meta: "The best free book a taxi template with a dark design that
  uses Bootstrap Framework to guarantee great flexibility." Internal doc
  title: "Booking Form HTML Template"; the recreation brands itself
  **Ridely**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-13/` (HTTP 200, ~6.8 KB
  HTML + `css/style.css` ~3.8 KB). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-13/`
  returns 404 (curl verified) and there is no pages.dev mirror — the LIVE
  PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family
  (same pattern as the template-stayly / template-roostly / template-roomzy
  / template-reservly preps). The TEMPLATES.md screenshot
  (`colorlib-booking-13.jpg`, 1200×972, viewed in browser) matches the live
  render 1:1.
- **Visual design (screenshot + live render):** clean WHITE page with ONE
  centered near-black card (max-width 768px) split in two: left ~310px
  image panel — dark aerial city-street photo at dusk, two YELLOW taxis on
  a multi-lane road with a big white arrow painted on the asphalt (night
  ride theme) — and right dark-charcoal form: large white uppercase
  "BOOK YOUR TAXI" heading, underline-style input rows (thin grey #cecccd
  bottom border on transparent bg), small grey floating labels that turn
  taxi-yellow #ffc600 on focus/fill, full-width "Book Now" button with
  yellow text, dark bg and 2px yellow border. High-contrast dark card on
  light page; yellow accent echoes the taxi yellow in the photo. Flat,
  square (radius 0 everywhere), no gradients, no shadows. NO navbar, NO
  footer — one-section form demo.
- **Structure (1:1, field order, verified live):**
  1. `#booking.section` (height 100vh, Raleway; NO section bg — white page;
     content vertically centered via `.section-center` = absolute top 50% +
     translateY(-50%)).
  2. `.booking-form` (near-black `#1a1b1d`, max-width 768px, margin auto,
     no shadow):
     - `.booking-bg` — absolute left panel, width 310px, top/bottom 0,
       photo `cover`/`center`; hidden at max-width 480px (form margin-left
       → 0).
     - `form` — margin-left 310px, padding 30px.
     - `.form-header` — "Book Your Taxi" h2, margin-bottom 25px.
     - **Name** (text, placeholder "Enter your Name").
     - **Phone** (tel, placeholder "Enter your Phone number").
     - **Pickup Location** (tel, placeholder "Enter an origin location").
     - **Destination Location** (tel, placeholder "Enter a destination
       location").
     - **Passenger Numbers** (select, required, hidden empty option, then
       1/2/3) + custom rotated `➜` arrow.
     - **Pickup Date** (date, required) | **Pickup Time** (time, required)
       — side by side.
     - `.form-btn` (margin-top 25px) → **Book Now** full-width submit.
  3. No footer, no other content (single-section demo; page ends after the
     form + GA script).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand/accent: **#ffc600** (taxi yellow) — floating labels on
    focus/fill, submit-button text + 2px border. The only pop color.
  - Card + button bg: **#1a1b1d** (near-black).
  - Heading + input text: **#fff**.
  - Font: **Raleway** sans-serif, weights 400 + 700 (recommend
    `family=Raleway:wght@400;700`).
  - Page bg: white (section sets no background; screenshot confirms).
  - Card: bg #1a1b1d, max-width 768px, margin auto, NO shadow.
  - Inputs (`.form-control`): transparent bg, height 65px, padding 0 +
    padding-top 15px, radius 0, border 0, box-shadow none, color #fff,
    16px weight 700, `text-transform: capitalize`, **border-bottom 2px
    solid #cecccd**, transition 0.2s.
  - Placeholders: **rgba(255,255,255,0.3)** (also empty date/time color via
    `:invalid`).
  - Floating-label trick: `.form-group:not(.input-not-empty)
.form-control:not(:focus)` → `color: transparent` (typed text invisible
    until focused or filled; placeholder still shows).
  - Labels (`.form-label`): #ffc600, 14px weight 700, line-height/height
    24px, absolute left 0, top 26px → 0 on focus/fill, opacity 0 → 1,
    capitalize, pointer-events none, transition 0.2s all. Date/time/select
    labels always visible rgba(255,255,255,0.3) → #ffc600 on focus.
  - Select: `appearance: none`, options color #1a1b1d; `.select-arrow`
    32×32, right 0, bottom 4px, `➜` (U+279C) rotated 90°, color #cecccd,
    14px, pointer-events none.
  - Button (`.submit-btn`): #ffc600 text, #1a1b1d bg, weight 700, height
    55px, padding 10px 35px, 18px, radius 0, width 100%,
    **border 2px solid #ffc600** — "Book Now".
- **Recreation approach:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); side image → seeded picsum
  (`picsum.photos/seed/ridely-1/<w>/<h>`, dark city-street seed if
  possible; the source `background.jpg` must not be copied); date/time
  inputs native `<input type="date">` / `<input type="time">`; select
  arrows = rotated `➜` glyph or lucide ChevronDown; Raleway via Google
  Fonts `<link>`; document title "Ridely — Taxi Booking Form Template";
  brand text "Booking"/"Colorlib Booking" → "Ridely". Repo-standard
  Navbar/Footer are NOT part of this template (single-section demo) — keep
  the page as a bare form section.
- Floating labels: the source toggles a `.input-not-empty` class via
  jQuery; recreate with React state (focused + hasValue) — same visual
  behavior (hidden until focus/fill for text inputs; always-visible grey
  for date/time/select; yellow on focus/fill). Labels must be real
  `<label htmlFor>` elements for a11y.
- "Book Now" validates (name, phone + phone format, pickup + destination
  locations, passenger count, date + time all required) and reveals a
  summary line (passengers, date + time, pickup → destination, name) — the
  original is static, so this minimal interactivity is a documented
  recreation choice in a pure exported function for 100% coverage.
- Accessibility: labels associated with inputs (`htmlFor`/`id`), `required`
  on all fields, semantic `<main>` landmark, `aria-label` on icon-only
  controls (select arrows are decorative spans).

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/ridely`
      (package `@free-react-templates/ridely`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: single full-viewport section on a white page (100vh)
      → vertically centered near-black split card (max-width 768px,
      #1a1b1d) → image panel left 310px / form right → fields in source
      order → Book Now. NO navbar / NO footer.
- [ ] Field order: Name ("Enter your Name") → Phone ("Enter your Phone
      number") → Pickup Location ("Enter an origin location") → Destination
      Location ("Enter a destination location") → Passenger Numbers
      (select 1/2/3, required, hidden empty option) → Pickup Date (date,
      required) + Pickup Time (time, required) → Book Now.
- [ ] Tokens: `--color-brand #ffc600`, card/button bg #1a1b1d, text #fff,
      underline border #cecccd, placeholder rgba(255,255,255,0.3),
      page bg white, radius 0 everywhere.
- [ ] Floating labels: #ffc600 14px weight 700, hidden until focus/fill
      for text inputs (opacity 0), always-visible grey for
      date/time/select; top 26px → 0; associated via htmlFor/id.
- [ ] Text inputs: transparent bg, height 65px, padding-top 15px,
      border-bottom 2px solid #cecccd, 16px weight 700 white, capitalize;
      typed text transparent until focused/filled; placeholder
      rgba(255,255,255,0.3).
- [ ] Select arrows: rotated `➜` (or ChevronDown) bottom-right #cecccd,
      pointer-events none.
- [ ] Button: width 100%, #1a1b1d bg, #ffc600 weight-700 18px text, 2px
      #ffc600 border, height 55px, radius 0, "Book Now".
- [ ] Form validation: all fields required; phone format; per-field error
      indication; summary line on valid submit.
- [ ] Raleway (400/700) via Google Fonts link in index.html; document title
      "Ridely — Taxi Booking Form Template"; `<main>` landmark.
- [ ] Side image: seeded picsum `ridely-1/…` + cover, hidden below 480px
      (form full width).
- [ ] `scripts/verify-app.sh ridely` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
