# Triply (ColorLib Booking 14) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V14 — Free Dark Booking Form
> Template" (https://colorlib.com/wp/template/colorlib-booking-14/) under
> the NEW name **Triply** ("trip" — a taxi trip + "-ly", matching the Booking
> Forms family convention Reservly/Roomzy/Roostly/Stayly/Ridely; single
> lowercase word, no collision with `apps/` or `openspec/specs/` — verified
> 2026-08-09), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V14" — free DARK booking
  form template, Bootstrap-based (Booking Forms category, 22 templates in
  the family). Meta: "The best free dark booking form template with a
  responsive design for all the car rental and taxi businesses out there."
  Internal doc title: "Booking Form HTML Template"; the recreation brands
  itself **Triply**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-14/` (HTTP 200, ~6.7 KB
  HTML + `css/style.css` ~3.5 KB). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-14/`
  returns 404 (curl verified) and there is no pages.dev mirror — the LIVE
  PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family
  (same pattern as the template-stayly / template-roostly / template-roomzy
  / template-reservly / template-ridely preps). The TEMPLATES.md screenshot
  (`colorlib-booking-14.jpg`, 1200×972, viewed in browser) matches the live
  render 1:1.
- **Visual design (screenshot + live render):** full-viewport dark
  photograph of a city street at night shot from a high angle — dark asphalt
  with white dashed lane markings and a double yellow center line, two
  yellow taxis (one prominent at the bottom center, one further back) —
  dimmed by a 70% black overlay (`#booking::before`, `rgba(0,0,0,0.7)`).
  Dead center: a near-black solid card (max-width 768px, padding 30px) with
  NO heading — the form begins directly with the first input. Inputs are
  transparent with 2px grey `#4d4d4d` borders (turning white when filled)
  and light-grey `rgba(255,255,255,0.3)` placeholders; each filled /
  date / time field shows a small uppercase tab label bar at its bottom
  edge (grey `#4d4d4d` bar with dark `#1a1b1d` text, turning WHITE with dark
  text when filled). The full-width "Book Now" button is solid taxi-yellow
  `#ffc600` with dark `#1a1b1d` text — INVERTED vs Ridely's dark button +
  yellow outline. Flat, square (radius 0 everywhere), no gradients, no
  shadows. NO navbar, NO footer — one-section form demo.
- **KEY DIFFERENCES vs Ridely (Booking 13) — do NOT copy the Ridely design:**
  - Section background is the PHOTO + 70% black scrim (Ridely: white page).
  - Solid card, NO split image panel / no `margin-left` (Ridely: 310px left
    image panel).
  - NO "Book Your Taxi" heading (Ridely has one).
  - Inputs: full 2px `#4d4d4d` box border → `#fff` on fill (Ridely:
    underline `#cecccd` bottom border only).
  - Labels are bottom-edge TAB bars (Ridely: floating labels above input).
  - Button: solid yellow bg + dark text, no border (Ridely: dark bg +
    yellow text + 2px yellow border).
  - Select placeholder option reads "Select Passenger Numbers" (Ridely:
    empty `&nbsp;`).
- **Structure (1:1, field order, verified live):**
  1. `#booking.section` (height 100vh, Raleway; bg photo `cover`/`center`
     - `::before` overlay `rgba(0,0,0,0.7)`; content vertically centered via
       `.section-center` = absolute top 50% + translateY(-50%)).
  2. `.booking-form` (near-black `#1a1b1d`, max-width 768px, width 100%,
     margin auto, padding 30px, no shadow):
     - NO header (form starts directly with Name).
     - **Name** (text, placeholder "Enter your Name").
     - **Phone** (tel, placeholder "Enter your Phone number").
     - **Pickup Location** (tel, placeholder "Enter an origin location").
     - **Destination Location** (tel, placeholder "Enter a destination
       location").
     - **Passenger Numbers** (select, required, hidden option "Select
       Passenger Numbers", then 1/2/3) + custom rotated `➜` arrow.
     - **Pickup Date** (date, required) | **Pickup Time** (time, required)
       — side by side.
     - `.form-btn` (margin-top 10px) → **Book Now** full-width submit.
  3. No footer, no other content (single-section demo; page ends after the
     form + GA script).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-09):**
  - Brand/accent: **#ffc600** (taxi yellow) — SOLID submit-button
    background, dark `#1a1b1d` text. The only pop color.
  - Card background: **#1a1b1d** (near-black).
  - Section bg: photo `cover`/`center` + scrim `rgba(0,0,0,0.7)`.
  - Input text + filled border: **#fff**.
  - Input border (empty): **2px solid #4d4d4d** → `#fff` +
    `padding-bottom: 20px` when filled.
  - Placeholders + select arrow (empty): **rgba(255,255,255,0.3)**; arrow
    `#fff` when filled.
  - Tab labels (`.form-label`): #000 → #1a1b1d, weight 700, uppercase,
    14px, line-height/height 24px, absolute left 0 bottom 0, opacity 0 →
    1, width 100%, bg #4d4d4d → #fff (white bar + dark text when filled),
    padding 0 15px, pointer-events none, transition 0.2s all. Date/time/
    select labels always visible (opacity 1, #1a1b1d on grey bar).
  - Font: **Raleway** sans-serif, weights 400 + 700 (recommend
    `family=Raleway:wght@400;700`).
  - Inputs (`.form-control`): transparent bg, height 65px, padding 0 15px,
    radius 0, color #fff, 16px weight 700, box-shadow none, transition 0.2s,
    2px #4d4d4d border. Date/time/select: padding-bottom 20px.
  - Select: `appearance: none`, options #1a1b1d, `:invalid`
    rgba(255,255,255,0.3); `.select-arrow` 32×32, right 0, bottom 26px,
    `➜` (U+279C) rotated 90°, 14px, pointer-events none.
  - Button (`.submit-btn`): **#1a1b1d text, #ffc600 bg**, weight 700, height
    55px, 18px, radius 0, width 100%, border none — "Book Now".
  - `.form-btn`: margin-top 10px.
- **Recreation approach:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); background photo → seeded picsum
  (`picsum.photos/seed/triply-1/1600/900` or a night-city/road seed; the
  source `background.jpg` must not be copied) as full-bleed section bg with
  `bg-black/70` overlay; date/time inputs native `<input type="date">` /
  `<input type="time">`; select arrows = rotated `➜` glyph or lucide
  ChevronDown; Raleway via Google Fonts `<link>`; document title "Triply —
  Taxi Booking Form Template"; brand text "Booking"/"Colorlib Booking" →
  "Triply". Repo-standard Navbar/Footer are NOT part of this template
  (single-section demo) — keep the page as a bare form section.
- Tab labels: the source toggles a `.input-not-empty` class via jQuery;
  recreate with React state (focused + hasValue) — same visual behavior
  (hidden until filled for text inputs; always-visible grey bar for
  date/time/select; white bar + dark text when filled). Labels must be real
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

- [ ] Implementer: copy the simplest existing app → `apps/triply`
      (package `@free-react-templates/triply`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: single full-viewport section (100vh) with night-city
      photo background (seeded picsum, cover/center) + `rgba(0,0,0,0.7)`
      scrim → vertically centered solid near-black card (max-width 768px,
      #1a1b1d, padding 30px) → fields in source order → Book Now. NO
      heading, NO navbar, NO footer.
- [ ] Field order: Name ("Enter your Name") → Phone ("Enter your Phone
      number") → Pickup Location ("Enter an origin location") → Destination
      Location ("Enter a destination location") → Passenger Numbers
      (select 1/2/3, required, hidden "Select Passenger Numbers" option) →
      Pickup Date (date, required) + Pickup Time (time, required) → Book
      Now.
- [ ] Tokens: `--color-brand #ffc600`, card bg #1a1b1d, input text #fff,
      input border #4d4d4d (→ #fff on fill), placeholder
      rgba(255,255,255,0.3), label bar #4d4d4d (→ #fff), scrim
      rgba(0,0,0,0.7), radius 0 everywhere.
- [ ] Tab labels: 14px weight-700 uppercase, absolute bottom edge of input,
      hidden (opacity 0) until filled for text inputs; always-visible grey
      bar for date/time/select; filled → white bar with dark #1a1b1d text;
      associated via htmlFor/id.
- [ ] Inputs: transparent bg, height 65px, padding 0 15px, 2px #4d4d4d
      border (→ #fff + padding-bottom 20px when filled), 16px weight 700
      white; placeholder rgba(255,255,255,0.3).
- [ ] Select arrows: rotated `➜` (or ChevronDown) right-bottom
      rgba(255,255,255,0.3) → #fff when selected, pointer-events none.
- [ ] Button: width 100%, #ffc600 bg, #1a1b1d weight-700 18px text, height
      55px, radius 0, border none, "Book Now".
- [ ] Form validation: all fields required; phone format; per-field error
      indication; summary line on valid submit.
- [ ] Raleway (400/700) via Google Fonts link in index.html; document title
      "Triply — Taxi Booking Form Template"; `<main>` landmark.
- [ ] `scripts/verify-app.sh triply` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
