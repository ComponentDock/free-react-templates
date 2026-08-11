# Drivly (ColorLib Booking 4) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V4 — Free Car Booking Form"
> (https://colorlib.com/wp/template/colorlib-booking-4/) under the NEW name
> **Drivly** ("drive" + "-ly", following the Booking Forms family convention
> Reservly/Coastly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly/
> Guestly/Skyly/Bookly/Nestly; single lowercase word, no collision with
> `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-09), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V4" — free CAR-booking /
  car-rental form widget template, Bootstrap-based (Booking Forms category,
  22 templates in the family). Internal demo doc title: "Booking Form HTML
  Template"; meta: "The best free car booking form template that uses
  Bootstrap Framework to guarantee great flexibility." The recreation brands
  itself **Drivly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-4/` (HTTP 200, ~7.8 KB
  HTML + `css/style.css` ~2.4 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-4/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as the template-skyly / template-stayly / template-roostly /
  template-roomzy / template-reservly / template-ridely / template-triply /
  template-innly / template-lodgely / template-hostly / template-guestly /
  template-coastly / template-bookly / template-nestly preps). The
  TEMPLATES.md screenshot (`colorlib-booking-4.jpg`, 1200×972, viewed in
  browser) and the live render (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** urban taxi aesthetic. A
  full-screen photograph of a row of yellow taxis driving down a city street
  fills the viewport, dimmed by a 60% black overlay scrim. Centered on top: a
  DARK near-black (`#101113`) rectangular card with 3px rounded corners
  holding a car-booking form. Headline **"BOOK A CAR"** in large bold
  uppercase gold-yellow **`#ffc001`**. Inside: light-grey (`#f5f5f5`) input
  fields with small uppercase WHITE labels (NAME, EMAIL, PHONE, PICKUP
  LOCATION, DESTINATION, PICKUP DATE, HOUR, MIN, AM/PM) and light-grey
  placeholders; date+time row uses a native date input + three selects with a
  small arrow glyph. Bottom: wide gold-yellow **"BOOK NOW"** button with dark
  text. ONLY accent: gold-yellow `#ffc001`; everything else is the dark card,
  light fields, white labels and the taxi photo.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — full-bleed cover/center PHOTO background
     (yellow taxis on a city street) WITH `rgba(0,0,0,0.6)` overlay scrim;
     content vertically centered.
  2. `.booking-form` — DARK STACKED CARD (max-width 642px, `#101113` body,
     padding 30px 20px, radius 3px, NO shadow/border):
     - `.form-header` — centered h1 **"Book a car"**, 58px uppercase 700,
       `#ffc001`, margin-bottom 25px.
     - Fields (static white 12px uppercase labels above each control):
       Name + Email (`col-sm-6`+`col-sm-6`) → Phone → Pickup Location →
       Destination → Pickup Date (`col-sm-5`, native date, required) +
       Hour (`col-sm-4`, 1–12) / Min (`col-sm-4`, 05–55 step 5) / AM/PM
       (`col-sm-4`, AM|PM).
     - `.form-btn` → **button.submit-btn "Book Now"** — `#ffc001` bg,
       `#101113` text, weight 700, height 50px, width 100%, radius 3px,
       uppercase.
  3. No footer, no other content sections (single-section demo).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand: **gold-yellow `#ffc001`** (h1 + button bg; button text `#101113`).
  - Card: **`#101113`** (near-black; also input text color).
  - Inputs: **`#f5f5f5`** bg, no border, 45px height, radius 3px, weight 400;
    placeholder `rgba(16,17,19,0.3)`; invalid date input same 30%-grey.
  - Labels: **`#fff`**, 12px, uppercase, weight 400, 5px bottom margin,
    STATIC (never float).
  - Overlay: **`rgba(0,0,0,0.6)`** via `#booking::before`.
  - Font: **Montserrat** (400 labels/body, 700 h1+button) via Google Fonts.
  - Selects: `appearance:none`; `.select-arrow` right 0 bottom 6px, 32×32,
    `#101113` 14px, `::after` `'\279C'` (➜) rotated 90°.
  - Radius family: 3px (card, inputs, button). No shadows anywhere.
- **Family distinctions (do NOT copy these siblings):**
  - vs **Ridely** (Booking 13, `#ffc600`): same dark-car idea but SPLIT
    layout (photo panel left 310px + form right, `#1a1b1d`, Raleway,
    floating labels, no date/time row). Drivly = single centered card,
    `#ffc001`, Montserrat, static labels, full field set. Keep `#ffc001` vs
    `#ffc600` exact.
  - vs **Coastly** (Booking 2): dark HORIZONTAL slab + lime `#72b01d`, CTA
    right. Drivly = stacked card + gold.
  - vs **Bookly** (Booking 20): light white card + green `#2b9328`,
    floating labels, hotel field set, CTA-left split. Drivly = dark card +
    gold, static labels, car field set.
  - vs **Nestly** (Booking 3): light white horizontal bar + taupe `#9a8067`
    over undimmed beach photo. Drivly = dark card + gold over dimmed taxi
    photo.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap grid
  (NO Bootstrap dependency); single-section form page — repo-standard
  Navbar/Footer must NOT be added; background = seeded picsum
  (`picsum.photos/seed/drivly-city/1920/1080`, city-street-appropriate seed;
  source `background.jpg` NOT copied) + `rgba(0,0,0,0.6)` scrim; native date
  input (no datepicker dep); selects `appearance:none` + rotated `➜`
  glyph/lucide ChevronDown; STATIC `<label htmlFor>` elements; Montserrat
  400/700 Google Fonts `<link>`; document title "Drivly — Car Booking
  Template"; brand "Booking" → "Drivly" everywhere. "Book Now" validates
  (required: name, email, phone, pickup, destination, pickup date) and shows
  a summary line (pickup → destination · date · time) — original is static,
  this minimal interaction is a documented recreation choice in a pure
  exported function for 100%-coverage tests.

## Tasks (implementation order)

- [ ] Scaffold `apps/drivly` (copy simplest existing app, rename package to
      `@free-react-templates/drivly`; NOT `apps/colorlib-booking-4`)
- [ ] `@theme` tokens: `--color-brand: #ffc001` (gold-yellow), `--color-ink:
  #101113` (card/text), `--color-field: #f5f5f5` (inputs), label white,
      placeholder `rgba(16,17,19,0.3)`, radius 3px
- [ ] `index.html`: Montserrat 400/700 Google Fonts `<link>`, title "Drivly
      — Car Booking Template"
- [ ] Section: 100vh, picsum `drivly-city/1920/1080` cover/center, `::before`
      scrim `rgba(0,0,0,0.6)`, content vertically centered
- [ ] Card: max-w 642px, `#101113` body, padding 30px 20px, rounded 3px, no
      shadow/border
- [ ] Header: centered h1 "Book a car" — 58px, uppercase, 700, `#ffc001`
- [ ] Fields (static labels): Name + Email row, Phone, Pickup Location,
      Destination, Pickup Date (date, required) + Hour(1–12)/Min(05–55)/
      AM-PM selects; labels white 12px uppercase; inputs `#f5f5f5` 45px
      radius-3 borderless, `#101113` text, placeholder 30% grey
- [ ] Select arrows: appearance-none + rotated ➜/ChevronDown `#101113`
      14px 32×32 right-0 bottom-6 pointer-events-none
- [ ] "Book Now" button: full-width, `#ffc001` bg, `#101113` uppercase 700
      text, h-50, rounded-3
- [ ] Validation + summary: pure exported function (required fields; summary
      "Downtown → Airport · Aug 10, 2026 · 10:05 AM")
- [ ] Responsive: Name/Email stack <576px; date+time row wraps full width;
      button stays full width
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh drivly` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs; merge
      immediately; `[~]`→`[x]` + surge URL + `npm run readme:status`
