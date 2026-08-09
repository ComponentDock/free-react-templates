# Roomzy (ColorLib Booking 10) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking 10"
> (https://colorlib.com/wp/template/colorlib-booking-10/) under the NEW name
> **Roomzy** (room + "easy" booking; single lowercase word, no collision with
> `apps/` or `openspec/specs/` — verified 2026-08-09), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking 10" — free hotel booking /
  reservation form template, Bootstrap-based (Booking Forms category, 22
  templates in the family). The demo's internal title is "Booking Form HTML
  Template"; the recreation brands itself **Roomzy**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-10/` (HTTP 200, ~5.7 KB
  HTML). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-10/`
  returns 404 and there is no pages.dev mirror — the LIVE PREVIEW link on the
  ColorLib template page resolves to `colorlib.com/etc/bforms/<slug>/` for
  the whole Booking Forms family (confirmed via the archived template page
  `web.archive.org/web/20260419083833/https://colorlib.com/wp/template/colorlib-booking-10/`).
  The TEMPLATES.md screenshot (`colorlib-booking-10.jpg`, 1200×972, viewed in
  browser) matches the live render 1:1.
- **Visual design (screenshot + live render):** stark solid-white
  full-viewport page, single centered booking form (max-width 586px,
  vertically centered). NO navbar, NO hero, NO footer — one-section form
  demo. Dense grid of tall (80px) sharp-cornered rectangular fields divided
  by thin `#dddee9` lines (stacked rows share one divider, sibling columns
  share the vertical divider). Small red-orange **italic** labels float
  top-left inside each field. Full-width red-orange "Book Now" button closes
  the form.
- **Structure (1:1, field order, verified live):**
  1. `#booking` section (height 100vh, white, content vertically centered).
  2. `.booking-form` (max-width 586px, centered):
     - Row: **Check In** (date, required) | **Check Out** (date, required).
     - Row: **Adults (18+)** select (1/2/3) | **Children (0-17)** select
       (0/1/2), each with a rotated `➜` arrow bottom-right.
     - **Room Type** select (required; placeholder "Select room type";
       options "Private Room (1 to 2 People)" / "Family Room (1 to 4
       People)").
     - **Email** input (placeholder "Enter your email").
     - **Phone** input (placeholder "Enter your phone number").
     - **Book Now** full-width submit button.
- **Design tokens extracted from the live CSS + rendered styles (verified
  2026-08-09):**
  - Brand: **#f14634** (red-orange) — ONLY brand color; labels + button.
  - Text: **#0e2753** (dark navy, 20px, weight 700) control values;
    placeholders #dddee9.
  - Dividers: **#dddee9** 1px; `border-bottom: 0` between stacked rows,
    `border-left: 0` between siblings; mobile (max-width 767px) restores
    `border-left: 1px solid #dddee9` when columns stack.
  - Page bg: solid **#ffffff** (computed). No image, no gradient — do NOT
    invent a photo background.
  - Controls: height 80px, padding 25px 20px 0, border-radius 0, bg white,
    focus bg #f9f9f9, NO focus shadow/ring.
  - Labels: absolute (left 20px, top 10px), italic, 14px, weight 400,
    #f14634.
  - Select arrow: 32×32 bottom-right, `➜` (U+279C) rotated 90°, #dddee9,
    pointer-events none.
  - Button: width 100%, height 80px, bg #f14634, white bold 18px,
    capitalize, border none, radius 0.
  - Font: **Lato** (400/700 + italic) via Google Fonts
    (`family=Lato:ital,wght@0,400;0,700;1,400`).
- **Recreation approach:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); seeded picsum placeholders not needed (no
  images in this template — pure form page); lucide-react only if an arrow
  icon is used (source uses a rotated `➜` glyph, fine to keep as text glyph
  or ChevronDown); Lato via Google Fonts; repo-standard Navbar/Footer are
  NOT part of this template (single-section demo) — keep the page as a bare
  form section.
- Rename demo title "Booking Form HTML Template" → "Roomzy — Hotel Booking
  Template"; keep the same field labels and copy kinds.
- Accessibility: labels associated with inputs (`htmlFor`/`id`), `required`
  on date + room-type fields, semantic `<main>` landmark.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/roomzy`
      (package `@free-react-templates/roomzy`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: single full-viewport white section → vertically
      centered form (max-width 586px) → fields in source order → Book Now.
- [ ] Field rows: Check In + Check Out (date, required, side by side);
      Adults + Children (selects, side by side); Room Type (required,
      placeholder + 2 options); Email; Phone; Book Now full width.
- [ ] Tokens: `--color-brand #f14634`, control text #0e2753, borders
      #dddee9, focus bg #f9f9f9, radius 0 everywhere; shared-divider
      borders (no bottom border between rows, no left border between
      sibling columns); borders restore on mobile stack (<768px).
- [ ] Labels: absolute top-left inside each field, italic, 14px, brand
      color, associated via htmlFor/id.
- [ ] Select arrows: rotated `➜` (or ChevronDown) bottom-right, #dddee9,
      pointer-events none.
- [ ] Book Now: width 100%, 80px tall, bg #f14634, white bold 18px
      capitalize, no border.
- [ ] Form validation: required dates + room type block submit; email
      validated; per-field error indication.
- [ ] Lato (400/700 + italic) via Google Fonts link in index.html;
      document title "Roomzy — Hotel Booking Template"; main landmark.
- [ ] `scripts/verify-app.sh roomzy` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
