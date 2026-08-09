# Roostly (ColorLib Booking 11) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V11"
> (https://colorlib.com/wp/template/colorlib-booking-11/) under the NEW name
> **Roostly** (roost — a place to rest/stay; single lowercase word, no
> collision with `apps/` or `openspec/specs/` — verified 2026-08-09), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V11" — free travel booking
  form template, Bootstrap-based (Booking Forms category, 22 templates in
  the family). Page title: "Colorlib Booking Form V11 - Free Travel Booking
  Template 2023"; meta: "A straightforward and quick-to-use free travel
  booking form template with date pickers and drop-downs for quick
  selection." The demo's internal title is "Booking Form HTML Template"; the
  recreation brands itself **Roostly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-11/` (HTTP 200, ~4.0 KB
  HTML + `css/style.css`). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-11/`
  returns 404 (curl AND browser) and there is no pages.dev mirror — the LIVE
  PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family
  (same pattern as the template-roomzy prep). No Wayback snapshot of the
  preview exists (CDX empty). The TEMPLATES.md screenshot
  (`colorlib-booking-11.jpg`, 1200×972, viewed in browser) matches the live
  render 1:1.
- **Visual design (screenshot + live render):** full-viewport hero
  photograph — Golden Gate Bridge at twilight (deep purple/blue sky, warm
  bridge lights reflecting on water) — with a soft white wash
  (`rgba(255,255,255,0.15)`). A white card (`border-radius: 2px`) is
  vertically + horizontally centered over the photo, containing ONE
  horizontal row of fields: Destination | Check In | Check out | Guests |
  hot-pink "Check availability" button. Labels are small hot-pink
  `#ff0063` text; placeholders grey `#818390`; inputs borderless and
  shadowless. NO navbar, NO hero copy, NO footer — one-section form demo.
- **Structure (1:1, field order, verified live):**
  1. `#booking.section` (height 100vh, photo bg + `bg-white/15` overlay,
     Poppins; content vertically centered).
  2. `.booking-form` (white, radius 2px), one `.row.no-margin`:
     - **Destination** (text, placeholder "Country, ZIP, city...", col-3).
     - Nested row (col-6): **Check In** (date, required) | **Check out**
       (date, required) | **Guests** (select 1/2/3, default 1, custom
       rotated `➜` arrow).
     - **Check availability** button (col-3, full width of column).
  3. No footer, no other content (single-section demo; page ends after the
     form).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand: **#ff0063** (hot pink) — ONLY brand color; labels + button.
  - Font: **Poppins** sans-serif (source loads weight 400; recommend
    `family=Poppins:wght@400;500;600`).
  - Hero: photo `background-size: cover; background-position: center` +
    overlay `rgba(255,255,255,0.15)` (white wash — NOT a color tint).
  - Card: bg `#fff`, `border-radius: 2px`; `.form-group` padding 25px;
    column divider `.form-group::after` — `rgba(129,131,144,0.15)`, 2px
    wide, 75px tall, top 25px, right 0.
  - Inputs: transparent bg, radius 0, `border: none`, height 50px, 20px
    `#222` text, weight 400, padding 0, NO shadow on focus.
  - Placeholders: **#818390** (also the empty-date color via
    `input[type="date"]:invalid`).
  - Select: `appearance: none`; custom `.select-arrow` 32×32 bottom-right,
    `➜` (U+279C) rotated 90°, #818390, `pointer-events: none`.
  - Labels: `#ff0063`, 14px, 25px line-height, weight 400, block.
  - Button: width 100%, height 75px, bg #ff0063, white 16px weight 400,
    capitalize, border none, radius 2px — text **"Check availability"**.
- **Recreation approach:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); hero photo → seeded picsum
  (`picsum.photos/seed/roostly-1/1920/1080`, dusk/bridge-like landscape if
  possible); white wash `bg-white/15`; date inputs native
  `<input type="date">`; select arrow = rotated `➜` glyph or lucide
  ChevronDown; Poppins via Google Fonts; document title "Roostly — Travel
  Booking Template"; brand text "Booking"/"Colorlib Booking" → "Roostly".
  Repo-standard Navbar/Footer are NOT part of this template (single-section
  demo) — keep the page as a bare form section.
- "Check availability" validates (destination + dates required, check-out ≥
  check-in) and reveals a summary line (destination, dates, guests) — the
  original is static, so this minimal interactivity is a documented
  recreation choice in a pure exported function for 100% coverage.
- Accessibility: labels associated with inputs (`htmlFor`/`id`), `required`
  on destination + date fields, semantic `<main>` landmark.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/roostly`
      (package `@free-react-templates/roostly`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: single full-viewport booking section (photo bg +
      white/15 overlay) → vertically centered white card (radius 2px) →
      fields in source order → Check availability. NO navbar / NO footer.
- [ ] Field row: Destination (text, placeholder "Country, ZIP, city...") |
      Check In (date, required) | Check out (date, required) | Guests
      (select 1/2/3, default 1) | Check availability (full width).
- [ ] Tokens: `--color-brand #ff0063`, input text #222, placeholders
      #818390, card #fff radius 2px, dividers rgba(129,131,144,0.15) 2px
      between columns, inputs radius 0/borderless/shadowless 50px 20px.
- [ ] Labels: 14px #ff0063 above each input, associated via htmlFor/id.
- [ ] Select arrow: rotated `➜` (or ChevronDown) bottom-right #818390,
      pointer-events none.
- [ ] Button: width 100%, 75px tall, bg #ff0063, white 16px capitalize,
      radius 2px, "Check availability".
- [ ] Form validation: destination + both dates required; check-out ≥
      check-in; per-field error indication; summary line on valid submit.
- [ ] Poppins (400/500/600) via Google Fonts link in index.html; document
      title "Roostly — Travel Booking Template"; `<main>` landmark.
- [ ] Hero: seeded picsum `roostly-1/1920/1080` + `bg-white/15`, cover.
- [ ] `scripts/verify-app.sh roostly` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
