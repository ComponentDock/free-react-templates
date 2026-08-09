# Stayly (ColorLib Booking 12) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V12"
> (https://colorlib.com/wp/template/colorlib-booking-12/) under the NEW name
> **Stayly** ("stay" — a place to stay + "-ly"; single lowercase word, no
> collision with `apps/` or `openspec/specs/` — verified 2026-08-09), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V12" — free travel booking
  form template, Bootstrap-based (Booking Forms category, 22 templates in
  the family). Meta: "A responsive free modern reservation form template
  with a split-screen design that offers you to spice things up with an
  image." Internal doc title: "Booking Form HTML Template"; the recreation
  brands itself **Stayly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-12/` (HTTP 200, ~5.4 KB
  HTML + `css/style.css` ~3.1 KB). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-12/`
  returns 404 (curl verified) and there is no pages.dev mirror — the LIVE
  PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family
  (same pattern as the template-roomzy / template-roostly preps). The
  TEMPLATES.md screenshot (`colorlib-booking-12.jpg`, 1200×972, viewed in
  browser) matches the live render 1:1.
- **Visual design (screenshot + live render):** light-gray page (`#f7f9fa`)
  with ONE centered white card (max-width 642px) split in two: left ~250px
  image panel — sunny resort scene (bright blue sky, white wooden loungers
  angled toward a blue pool, palm trees, beach umbrella) — and right white
  form: dark-navy bold title "Make your reservation", 2×2 grid of
  light-gray square inputs (Check In / Check Out / Adults / Children), then
  full-width Email and Phone inputs, then a full-width medium-blue
  rectangular "Book Now" button with white text. Flat, clean,
  Bootstrap-era: radius 0 everywhere, subtle inset input shadows, one soft
  drop shadow on the card. NO navbar, NO footer — one-section form demo.
- **Structure (1:1, field order, verified live):**
  1. `#booking.section` (height 100vh, bg `#f7f9fa`, Cabin; content
     vertically centered via `.section-center` = absolute top 50% +
     translateY(-50%)).
  2. `.booking-form` (white, max-width 642px, margin auto,
     `box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.3)`):
     - `.booking-bg` — absolute left panel, width 250px, top/bottom 0,
       photo `cover`/`center`; hidden at max-width 480px (form margin-left
       → 0).
     - `form` — margin-left 250px, padding 30px, `border: 1px solid
#f9fafc`, border-left 0.
     - `.form-header` — "Make your reservation" h2, margin-bottom 30px.
     - Row 1: **Check In** (date, required) | **Check Out** (date,
       required).
     - Row 2: **Adults** (select 1/2/3, first option 1) | **Children**
       (select 0/1/2, first option 0) — each + custom rotated `➜` arrow.
     - **Email** (placeholder "Enter your email").
     - **Phone** (placeholder "Enter your phone number").
     - `.form-btn` (margin-top 10px) → **Book Now** full-width submit.
  3. No footer, no other content (single-section demo; page ends after the
     form + GA script).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand: **#6499ff** (medium blue) — ONLY brand color; submit button bg.
  - Heading/input text: **#122244** (dark navy).
  - Font: **Cabin** sans-serif, weights 400 + 700 (recommend
    `family=Cabin:wght@400;700`).
  - Page bg + input bg: `#f7f9fa`.
  - Card: bg `#fff`, max-width 642px, margin auto,
    `box-shadow: 0 5px 10px -5px rgba(0,0,0,0.3)`; form border
    `1px solid #f9fafc` (left side removed).
  - Inputs (`.form-control`): bg `#f7f9fa`, height 40px, padding 0 10px,
    radius 0, border 0, 16px weight 700 `#122244`, inset shadow
    `0 1px 4px rgba(181,193,204,0.3)` (unchanged on focus).
  - Placeholders: **#dde3e8** (also the empty-date color via
    `input[type="date"]:invalid`).
  - Labels (`.form-label`): **#b5c1cc**, 14px, weight 700, UPPERCASE,
    line-height/height 24px.
  - Select: `appearance: none`; custom `.select-arrow` 32×32, right 0,
    bottom 4px, `➜` (U+279C) rotated 90°, color #dddee9, 14px,
    `pointer-events: none`.
  - Button (`.submit-btn`): `#6499ff` bg, white, weight 700,
    padding 13px 35px, 16px, border none, width 100%, radius 0 — text
    **"Book Now"**.
- **Recreation approach:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); side image → seeded picsum
  (`picsum.photos/seed/stayly-1/<w>/<h>`, resort/pool-like landscape if
  possible; the source `background.jpg` must not be copied); date inputs
  native `<input type="date">`; select arrows = rotated `➜` glyph or lucide
  ChevronDown; Cabin via Google Fonts `<link>`; document title "Stayly —
  Booking Form Template"; brand text "Booking"/"Colorlib Booking" →
  "Stayly". Repo-standard Navbar/Footer are NOT part of this template
  (single-section demo) — keep the page as a bare form section.
- "Book Now" validates (both dates required + email format + phone
  required; check-out ≥ check-in) and reveals a summary line (dates,
  adults/children, email) — the original is static, so this minimal
  interactivity is a documented recreation choice in a pure exported
  function for 100% coverage.
- Accessibility: labels associated with inputs (`htmlFor`/`id`), `required`
  on date/email/phone, semantic `<main>` landmark, `aria-label` on
  icon-only controls (select arrows are decorative spans).

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/stayly`
      (package `@free-react-templates/stayly`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: single full-viewport light-gray section (`#f7f9fa`,
      height 100vh) → vertically centered white split card (max-width
      642px, shadow) → image panel left 250px / form right → fields in
      source order → Book Now. NO navbar / NO footer.
- [ ] Field order: Check In (date, required) | Check Out (date, required)
      → Adults (select 1/2/3) | Children (select 0/1/2) → Email ("Enter
      your email") → Phone ("Enter your phone number") → Book Now.
- [ ] Tokens: `--color-brand #6499ff`, heading/input text #122244, page+input
      bg #f7f9fa, placeholders #dde3e8, labels #b5c1cc, card #fff radius 0,
      form border #f9fafc, inset shadow rgba(181,193,204,0.3).
- [ ] Labels: 14px #b5c1cc uppercase weight 700 above each input,
      associated via htmlFor/id.
- [ ] Select arrows: rotated `➜` (or ChevronDown) bottom-right #dddee9,
      pointer-events none.
- [ ] Button: width 100%, bg #6499ff, white weight-700 16px, padding
      13px 35px, radius 0, "Book Now".
- [ ] Form validation: both dates + email + phone required; email format;
      check-out ≥ check-in; per-field error indication; summary line on
      valid submit.
- [ ] Cabin (400/700) via Google Fonts link in index.html; document title
      "Stayly — Booking Form Template"; `<main>` landmark.
- [ ] Side image: seeded picsum `stayly-1/…` + cover, hidden below 480px
      (form full width).
- [ ] `scripts/verify-app.sh stayly` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
