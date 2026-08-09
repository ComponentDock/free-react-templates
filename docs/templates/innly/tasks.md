# Innly (ColorLib Booking 15) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V15 — Free Resort Reservation
> Template" (https://colorlib.com/wp/template/colorlib-booking-15/) under
> the NEW name **Innly** ("inn" — a small hotel/lodge, fitting the resort
> reservation use case + "-ly", matching the Booking Forms family convention
> Reservly/Roomzy/Roostly/Stayly/Ridely/Triply; single lowercase word, no
> collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
> 2026-08-09), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V15" — free RESORT
  reservation form template, Bootstrap-based (Booking Forms category, 22
  templates in the family). Meta: "A free resort reservation form template
  with a Bootstrap structure and a responsive design that works for
  accommodation businesses." Internal doc title: "Booking Form HTML
  Template"; the recreation brands itself **Innly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-15/` (HTTP 200, ~7.4 KB
  HTML + `css/style.css` ~3.1 KB). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-15/`
  returns 404 (curl verified) and there is no pages.dev mirror — the LIVE
  PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family
  (same pattern as the template-stayly / template-roostly / template-roomzy
  / template-reservly / template-ridely / template-triply preps). The
  TEMPLATES.md screenshot (`colorlib-booking-15.jpg`, 1200×972, viewed in
  browser) matches the live render 1:1.
- **Visual design (screenshot + live render):** full-viewport photograph of
  a tropical luxury resort — large turquoise swimming pool in the
  foreground, wooden deck with dark lounge chairs and umbrellas, palm trees
  and jagged karst limestone mountains under a bright blue sky — dimmed by
  a light 20% black overlay (`#booking::before`, `rgba(0,0,0,0.2)`). Dead
  center: a WHITE card (max-width 768px, padding 30px, radius 3px) with a
  centered bold serif headline "Make Your Reservation" (`#0c0c09`). Row 1:
  two date inputs (white bg, 1px `#e1e1e1` border) with a bronze ⇔ symbol
  between them. Row 2: three selects (grey `#e1e1e1` arrow tab at the right
  edge) and a full-width "Check Availability" button in solid bronze/tan
  `#c99552` with white text. Light, airy, high-contrast resort aesthetic —
  the LIGHT counterpart of the family's dark V14 (Triply).
- **KEY DIFFERENCES vs Triply (Booking 14) — do NOT copy the Triply dark
  design:**
  - WHITE card `#fff` + radius 3px (Triply: near-black `#1a1b1d`, radius 0).
  - Light 20% scrim (Triply: 70%); bright resort photo (Triply: dark night
    street).
  - HAS a centered h1 "Make your reservation" in Cardo serif (Triply: no
    header at all).
  - STATIC bronze labels ABOVE inputs (Triply: hidden-until-filled bottom
    tab bars); 1px `#e1e1e1` borders (Triply: 2px `#4d4d4d`).
  - Bronze `#c99552` button, WHITE text (Triply: yellow `#ffc600`, dark
    text).
  - Josefin Sans + Cardo (Triply: Raleway).
  - Hotel field set: Check In/Check out dates, No of rooms, Adults,
    Children (Triply: taxi Name/Phone/Pickup/Destination/Passengers/date/
    time).
- **Structure (1:1, field order, verified live):**
  1. `#booking.section` (height 100vh, Josefin Sans; bg photo `cover`/`center`
     - `::before` overlay `rgba(0,0,0,0.2)`; content vertically centered via
       `.section-center` = absolute top 50% + translateY(-50%)).
  2. `.booking-form` (WHITE `#fff`, max-width 768px, width 100%, margin
     auto, padding 30px, border-radius 3px):
     - `.form-header` (text-align center, margin-bottom 40px) → **h1 "Make
       your reservation"** — Cardo 700, 38px, capitalize, `#0c0c09`.
     - Row 1 (col-md-6 × 2): **Check In** (date, required) · `.in-out`
       **⇔ divider** (absolute, 24px, `#c99552`, right -15px, bottom 25px,
       30×30, translateY(-50%), `hidden-xs hidden-sm` → hide below `sm`) ·
       **Check out** (date, required).
     - Row 2 (col-md-3 × 4): **No of rooms** (select 1/2/3) · **Adults**
       (select 1/2/3) · **Children** (select 0/1/2) — each with a
       `.select-arrow` tab · `.form-btn` (margin-top 23px) → **Check
       availability** submit.
  3. No footer, no other content (single-section demo; page ends after the
     form + GA script).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand/accent: **#c99552** (bronze/tan) — SOLID submit-button background
    (white text), label color, input focus border, ⇔ divider, select-arrow
    focus background. The only pop color.
  - Card background: **#fff**, radius **3px** (inputs, button and card all
    share the 3px radius family).
  - Section bg: photo `cover`/`center` + scrim `rgba(0,0,0,0.2)`.
  - Headline: **#0c0c09** (near-black), Cardo 700, 38px, capitalized.
  - Labels (`.form-label`): 14px, weight 700, margin-bottom 3px, display
    inline-block, **#c99552**, capitalize — static, ABOVE the input.
  - Inputs (`.form-control`): white bg, height 50px, padding 0 20px,
    **1px solid #e1e1e1** border, radius 3px, box-shadow none, color
    **#6b6b6d**, 14px; placeholder **#e1e1e1**; focus border **#c99552**;
    empty date inputs grey (#e1e1e1 via `:invalid`).
  - `.form-group`: position relative, margin-bottom 30px.
  - Select: `appearance: none`; `.select-arrow` — absolute right 0 bottom
    0, 24px wide, height 50px, bg **#e1e1e1**, color
    rgba(107,107,109,0.3), radius 0 3px 3px 0, pointer-events none, `➜`
    (U+279C) rotated 90°; **focus → bg #c99552, color #fff**.
  - `.in-out` ⇔: 24px, #c99552, right -15px, bottom 25px, 30×30,
    translateY(-50%), z-index 20, hidden below sm.
  - Button (`.submit-btn`): **#fff text, #c99552 bg**, weight 700, height
    50px, 14px, capitalize, radius 3px, width 100%, border none — "Check
    availability". `.form-btn`: margin-top 23px.
  - Fonts: **'Josefin Sans'** sans-serif (400 + 700, body/labels/inputs/
    button) + **'Cardo'** serif (700, headline). Google Fonts:
    `family=Cardo:wght@700&family=Josefin+Sans:wght@400;700`.
- **Recreation approach:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); background photo → seeded picsum
  (`picsum.photos/seed/innly-1/1600/900`, a tropical-resort/pool seed; the
  source `background.jpg` must not be copied) as full-bleed section bg with
  `bg-black/20` overlay; date inputs native `<input type="date">`; select
  arrows = rotated `➜` glyph or lucide ChevronDown inside a 24px grey tab
  (bronze on focus); ⇔ divider = the `⇔` glyph (U+21D4) or lucide
  ArrowLeftRight, `hidden sm:block`; Josefin Sans + Cardo via Google Fonts
  `<link>`; document title "Innly — Resort Reservation Form Template";
  brand "Booking"/"Colorlib Booking" → "Innly". Repo-standard Navbar/Footer
  are NOT part of this template (single-section demo) — keep the page as a
  bare form section.
- Labels: static, capitalized, bronze `#c99552`, ABOVE the input — NOT
  bottom tab bars (Triply) and NOT floating labels (Ridely). Real `<label
htmlFor>` elements for a11y.
- "Check availability" validates (check-in + check-out dates required,
  check-out ≥ check-in; rooms/adults/children selected) and reveals a
  summary line (check-in → check-out, rooms, adults, children) — the
  original is static, so this minimal interactivity is a documented
  recreation choice in a pure exported function for 100% coverage.
- Accessibility: labels associated with inputs (`htmlFor`/`id`), `required`
  on both dates, semantic `<main>` landmark, `aria-label` on icon-only
  controls (select arrows are decorative spans; ⇔ divider is decorative).

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/innly`
      (package `@free-react-templates/innly`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: single full-viewport section (100vh) with tropical-
      resort photo background (seeded picsum, cover/center) + `rgba(0,0,0,0.2)`
      scrim → vertically centered WHITE card (max-width 768px, #fff,
      padding 30px, radius 3px) → centered serif header → fields in source
      order → Check availability. NO navbar, NO footer.
- [ ] Field order: header "Make your reservation" → Check In (date,
      required) ⇔ Check out (date, required) → No of rooms (select 1/2/3)
      → Adults (select 1/2/3) → Children (select 0/1/2) → Check
      availability.
- [ ] Tokens: `--color-brand #c99552`, card bg #fff, headline #0c0c09,
      input border #e1e1e1 (→ #c99552 on focus), input text #6b6b6d,
      placeholder #e1e1e1, arrow tab #e1e1e1 (→ #c99552 on focus), scrim
      rgba(0,0,0,0.2), radius 3px everywhere.
- [ ] Header: h1 "Make your reservation", Cardo 700 38px #0c0c09,
      centered, 40px bottom margin.
- [ ] Check In/Check out: native date inputs, white bg, height 50px,
      padding 0 20px, 1px #e1e1e1 border (→ #c99552 focus), 14px #6b6b6d,
      grey empty state; ⇔ divider (#c99552) between them, hidden below sm.
- [ ] Selects: appearance-none; 24px grey #e1e1e1 arrow tab right edge
      (radius 0 3px 3px 0), rotated `➜` or ChevronDown, → #c99552 + white
      glyph on focus; option sets 1/2/3, 1/2/3, 0/1/2.
- [ ] Labels: static, above input, 14px weight-700 capitalize #c99552,
      associated via htmlFor/id.
- [ ] Button: width 100%, #c99552 bg, white weight-700 14px text, height
      50px, radius 3px, border none, "Check availability".
- [ ] Form validation: both dates required; check-out ≥ check-in; per-field
      error indication; summary line on valid submit.
- [ ] Josefin Sans (400/700) + Cardo (700) via Google Fonts link in
      index.html; document title "Innly — Resort Reservation Form
      Template"; `<main>` landmark.
- [ ] `scripts/verify-app.sh innly` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
