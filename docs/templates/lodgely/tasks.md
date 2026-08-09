# Lodgely (ColorLib Booking 16) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V16 — Free Online Hotel
> Booking Widget" (https://colorlib.com/wp/template/colorlib-booking-16/)
> under the NEW name **Lodgely** ("lodge" — a small hotel/accommodation,
> fitting the hotel booking use case + "-ly", matching the Booking Forms
> family convention Reservly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly;
> single lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-09), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V16" — free HOTEL booking
  widget template, Bootstrap-based (Booking Forms category, 22 templates in
  the family). Meta: "The best free online hotel booking widget template
  that adapts to your accommodation business website smoothly." Internal doc
  title: "Booking Form HTML Template"; the recreation brands itself
  **Lodgely**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-16/` (HTTP 200, ~5.3 KB
  HTML + `css/style.css` ~2.5 KB). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-16/`
  returns 404 (curl verified) and there is no pages.dev mirror — the LIVE
  PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family
  (same pattern as the template-stayly / template-roostly / template-roomzy
  / template-reservly / template-ridely / template-triply / template-innly
  preps). The TEMPLATES.md screenshot (`colorlib-booking-16.jpg`, 1200×972,
  viewed in browser) matches the live render 1:1.
- **Visual design (screenshot + live render):** full-viewport photograph of
  a bright tropical resort — large clear-blue swimming pool in the
  foreground, palm trees, sandy deck with lounge chairs and thatched beach
  umbrellas under a sunny sky (vibrant blues/greens/sandy beiges) — dimmed
  by a heavy 60% black overlay (`#booking::before`, `rgba(0,0,0,0.6)`). Dead
  center: a DARK near-black panel (`#1e1e1e`, max-width 586px, padding 40px,
  sharp corners, soft drop shadow) with a centered bold WHITE sans-serif
  headline "Make Your Reservation" (42px). Row 1: two dark date inputs side
  by side, no divider. Row 2: three dark selects (No of rooms 1, Adults 1,
  Children 0) with a small white arrow glyph at each right edge. Bottom:
  full-width **lime/olive-green `#6c8f18` button** with white text "Check
  availability". High-contrast dark-on-photo hotel booking aesthetic.
- **KEY DIFFERENCES vs Innly (Booking 15) — do NOT copy the Innly light
  design:**
  - DARK panel `#1e1e1e`, radius 0, max-width 586px, padding 40px + shadow
    (Innly: white `#fff` card, radius 3px, max-width 768px, padding 30px).
  - Heavy 60% scrim (Innly: light 20%); same bright resort photo.
  - Headline in **Hind sans** 42px white (Innly: Cardo serif 38px `#0c0c09`).
  - NO ⇔ divider between the dates (Innly: bronze ⇔).
  - Static WHITE weight-400 labels with letter-spacing 0.4px (Innly: bronze
    weight-700 labels); no brand-colored label text.
  - Inputs `#2d2d2d`, no border, radius 0, white text (Innly: white fill,
    1px `#e1e1e1` border, radius 3px, grey text).
  - Select arrow: floating 32×32 white glyph right 6px bottom 6px, no tab
    background (Innly: 24px grey `#e1e1e1` tab, bronze on focus).
  - Olive-green `#6c8f18` button, weight 400 (Innly: bronze `#c99552`,
    weight 700).
  - Layout: button in its own `.form-btn` row below col-md-4 × 3 selects
    (Innly: button inside col-md-3 × 4 row).
  - Same field set and copy ("Make your reservation", Check In, Check out,
    No of rooms, Adults, Children, "Check availability").
- **KEY DIFFERENCES vs Triply (Booking 14) — also dark, do NOT merge:**
  - HAS a centered h1 header (Triply: none); STATIC white labels above
    inputs (Triply: hidden-until-filled bottom tab bars); olive `#6c8f18`
    button (Triply: yellow `#ffc600`); hotel field set (Triply: taxi field
    set).
- **Structure (1:1, field order, verified live):**
  1. `#booking.section` (height 100vh, Hind sans; bg photo `cover`/`center`
     - `::before` overlay `rgba(0,0,0,0.6)`; content vertically centered via
       `.section-center` = absolute top 50% + translateY(-50%)).
  2. `.booking-form` (max-width 586px, width 100%, margin auto):
     - `.form-header` (text-align center, margin-bottom 25px) → **h1 "Make
       your reservation"** — Hind 700, 42px, capitalize, `#fff`.
     - `<form>` panel (bg `#1e1e1e`, padding 40px, box-shadow 0px 5px 15px
       -5px rgba(0,0,0,0.8), radius 0).
     - Row 1 (col-md-6 × 2): **Check In** (date, required) · **Check out**
       (date, required). NO divider.
     - Row 2 (col-md-4 × 3): **No of rooms** (select 1/2/3) · **Adults**
       (select 1/2/3) · **Children** (select 0/1/2) — each with a floating
       `.select-arrow` glyph.
     - `.form-btn` → **Check availability** submit (full width).
  3. No footer, no other content (single-section demo; page ends after the
     form + GA script).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand/accent: **#6c8f18** (olive/lime green) — SOLID submit-button
    background (white text); the only pop color on the dark panel.
  - Panel background: **#1e1e1e**, padding 40px, radius **0**, shadow
    `0px 5px 15px -5px rgba(0,0,0,0.8)`.
  - Section bg: photo `cover`/`center` + scrim `rgba(0,0,0,0.6)`.
  - Headline: **#fff** white, Hind 700, 42px, capitalized (sans-serif).
  - Labels (`.form-label`): **#fff**, 14px, weight **400**, margin-bottom
    5px, display inline-block, letter-spacing **0.4px** — static, ABOVE the
    input.
  - Inputs (`.form-control`): bg **#2d2d2d**, height 50px, padding 0 20px,
    **border none**, radius 0, box-shadow none, color **#fff**; placeholder
    **rgba(255,255,255,0.3)**; empty date inputs dim
    (rgba(255,255,255,0.3) via `:invalid`).
  - `.form-group`: position relative, margin-bottom 30px.
  - Select: `appearance: none`; `.select-arrow` — absolute right 6px bottom
    6px, 32×32, line-height 32px, text-align center, pointer-events none,
    **color #fff**, 14px, `➜` (U+279C) rotated 90°; NO tab background, no
    focus state.
  - Button (`.submit-btn`): **#fff text, #6c8f18 bg**, weight 400, height
    50px, border none, width 100%, display block, letter-spacing 0.4px,
    radius 0 — "Check availability". `.form-btn` wrapper has no extra
    margin in the CSS.
  - Font: **'Hind'** sans-serif (400 + 700) for EVERYTHING (headline, labels,
    inputs, button). Google Fonts: `family=Hind:wght@400;700`.
- **Recreation approach:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); background photo → seeded picsum
  (`picsum.photos/seed/lodgely-1/1600/900`, a tropical-resort/pool seed; the
  source `background.jpg` must not be copied) as full-bleed section bg with
  `bg-black/60` overlay; date inputs native `<input type="date">`; select
  arrows = rotated `➜` glyph or lucide ChevronDown as a floating white glyph
  (right 6px bottom 6px, 32×32, no tab background); Hind via Google Fonts
  `<link>`; document title "Lodgely — Hotel Booking Widget Template"; brand
  "Booking"/"Colorlib Booking" → "Lodgely". Repo-standard Navbar/Footer are
  NOT part of this template (single-section demo) — keep the page as a bare
  form section.
- Labels: static, white `#fff`, weight 400, letter-spacing 0.4px, ABOVE the
  input — NOT bottom tab bars (Triply) and NOT floating labels (Ridely).
  Real `<label htmlFor>` elements for a11y.
- "Check availability" validates (check-in + check-out dates required,
  check-out ≥ check-in; rooms/adults/children selected) and reveals a
  summary line (check-in → check-out, rooms, adults, children) — the
  original is static, so this minimal interactivity is a documented
  recreation choice in a pure exported function for 100% coverage.
- Accessibility: labels associated with inputs (`htmlFor`/`id`), `required`
  on both dates, semantic `<main>` landmark, `aria-label`/`aria-hidden` on
  decorative arrow glyphs.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/lodgely`
      (package `@free-react-templates/lodgely`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: single full-viewport section (100vh) with tropical-
      resort photo background (seeded picsum, cover/center) + `rgba(0,0,0,0.6)`
      scrim → vertically centered DARK panel (max-width 586px, #1e1e1e,
      padding 40px, radius 0, shadow) → centered white sans-serif header →
      fields in source order → Check availability. NO navbar, NO footer.
- [ ] Field order: header "Make your reservation" → Check In (date,
      required) · Check out (date, required) — NO divider → No of rooms
      (select 1/2/3) → Adults (select 1/2/3) → Children (select 0/1/2) →
      Check availability.
- [ ] Tokens: `--color-brand #6c8f18`, panel bg #1e1e1e, headline/labels
      #fff, input fill #2d2d2d, placeholder rgba(255,255,255,0.3), scrim
      rgba(0,0,0,0.6), radius 0 everywhere, shadow 0px 5px 15px -5px
      rgba(0,0,0,0.8).
- [ ] Header: h1 "Make your reservation", Hind 700 42px #fff (body font,
      NOT serif), centered, 25px bottom margin.
- [ ] Check In/Check out: native date inputs, #2d2d2d fill, height 50px,
      padding 0 20px, no border, radius 0, white 14px text, dim empty
      state; no divider between them.
- [ ] Selects: appearance-none; floating white 32×32 arrow glyph (rotated
      `➜` or ChevronDown) at right 6px bottom 6px, NO tab background;
      option sets 1/2/3, 1/2/3, 0/1/2.
- [ ] Labels: static, above input, 14px weight-400 white #fff
      letter-spacing 0.4px, associated via htmlFor/id.
- [ ] Button: width 100%, #6c8f18 bg, white weight-400 text letter-spacing
      0.4px, height 50px, radius 0, border none, "Check availability".
- [ ] Form validation: both dates required; check-out ≥ check-in; per-field
      error indication; summary line on valid submit.
- [ ] Hind (400/700) via Google Fonts link in index.html; document title
      "Lodgely — Hotel Booking Widget Template"; `<main>` landmark.
- [ ] `scripts/verify-app.sh lodgely` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
