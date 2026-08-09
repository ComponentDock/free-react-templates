# Guestly (ColorLib Booking 18) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V18 — Free Room Reservation
> Template" (https://colorlib.com/wp/template/colorlib-booking-18/) under the
> NEW name **Guestly** ("guest" — a person who stays at a hotel / books a
> room + "-ly", matching the Booking Forms family convention
> Reservly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly; single
> lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-09), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V18" — free ROOM RESERVATION
  widget template, Bootstrap-based (Booking Forms category, 22 templates in
  the family). Meta: "Take your online bookings to the next level with this
  free room reservation template based on Bootstrap Framework now." Page
  title: "Colorlib Booking Form V18 - Free Room Reservation Template".
  Internal doc title: "Booking Form HTML Template"; the recreation brands
  itself **Guestly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-18/` (HTTP 200, ~5.2 KB
  HTML + `css/style.css` ~3.4 KB). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-18/`
  returns 404 (curl verified) and there is no pages.dev mirror — the LIVE
  PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family
  (same pattern as the template-stayly / template-roostly / template-roomzy
  / template-reservly / template-ridely / template-triply / template-innly
  / template-lodgely / template-hostly preps). The TEMPLATES.md screenshot
  (`colorlib-booking-18.jpg`, 1200×972, viewed in browser) matches the live
  render 1:1.
- **Visual design (screenshot + live render):** stark, high-contrast design
  on a WHITE page background. A single near-black card (max-width 642px,
  sharp corners, no shadow) is vertically centered. The card's TOP HALF is a
  full-width photo header — a dark, moody, slightly blurred hotel
  interior/lobby photo under a heavy dark-grey `rgba(81,81,81,0.8)` scrim —
  with the large white display headline "RESERVE YOUR ROOM" (Medula One,
  ~58px) and a small white 18px Lorem-ipsum paragraph. The BOTTOM HALF is the
  solid near-black `#0f0f0f` form area holding PILL-SHAPED (radius 40px) dark
  translucent inputs (2px `rgba(255,255,255,0.15)` borders, white bold text):
  row 1 = Arrival date / Departure date, row 2 = Rooms / Adults / Kids
  selects (each with a dim floating arrow), and a full-width pill-shaped
  bright-orange "CHECK AVAILABILITY" button (`#ff9000`, white bold uppercase
  18px). Small uppercase ORANGE `#ff9000` labels (ARRIVAL DATE, DEPARTURE
  DATE, ROOMS, ADULTS, KIDS) sit above each field, 20px indented. The ONLY
  accent is the vibrant orange — everything else is white/black/grey. Dark,
  upscale, high-contrast hotel aesthetic.
- **KEY DIFFERENCES vs Lodgely (Booking 16) — also dark, do NOT copy the
  Lodgely design:**
  - Card `#0f0f0f` max-width 642px, sharp corners (Lodgely: `#1e1e1e` panel,
    max-width 586px, full-bleed section photo behind it).
  - Photo in a full-width header PANEL inside the card's top half (Lodgely:
    full-bleed section background).
  - Headline 'Medula One' cursive 58px (Lodgely: 'Hind' sans 700 42px);
    header is an **h2** (Lodgely: h1).
  - Field set: dates row + THREE-column Rooms/Adults/Kids row (Lodgely:
    different arrangement; no full-width select).
  - **ORANGE `#ff9000`** labels + button (Lodgely: olive `#6c8f18`).
  - **PILL inputs** (radius 40px, transparent fill, 2px `rgba(255,255,255,0.15)`
    border, white text, focus → white fill + `#222` text) vs Lodgely's
    borderless `#2d2d2d` dark inputs.
  - Pill `#ff9000` button (weight 700, 18px, uppercase, height 55px) vs
    Lodgely's sharp olive button.
- **KEY DIFFERENCES vs Hostly (Booking 17) — also pill-shaped, do NOT merge
  the two:** Hostly is the LIGHT taupe variant (white 912px card on a
  `rgba(133,104,73,0.33)` wash, LEFT photo panel, Playfair Display 900
  headline, taupe `#856849` labels/button); Guestly is the DARK ORANGE
  variant (near-black 642px card on a WHITE page, full-width photo header,
  Medula One headline, orange `#ff9000` labels/button). Different field sets
  (Hostly: adults/children + full-width Room Type select; Guestly:
  Rooms/Adults/Kids 3-column row, no Room Type select). Shared grammar: pill
  inputs/button, uppercase 20px-indented labels, "Check availability"
  button, static labels.
- **First in the family with this palette:** no other Booking Forms prep uses
  orange `#ff9000` or Medula One (verified against all existing `template-*`
  specs 2026-08-09) — do not copy from roomzy (red-orange `#f14634`), roostly
  (hot pink `#ff0063`) or stayly (blue `#6499ff`).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand: **orange `#ff9000`** — label color + button bg. Only accent.
  - Fonts: **'Medula One', cursive (400)** headline + **'Lato', sans-serif**
    400/700 (body/labels/inputs/button).
  - Card: `#0f0f0f`, max-width 642px, NO radius, NO shadow.
  - Photo header: full card width, cover/center, padding 85px 25px 25px,
    scrim `rgba(81,81,81,0.8)`.
  - Header: h2 Medula One 58px `#fff` capitalize, margin 0 0 15px; subtitle
    p `#fff` 18px.
  - Labels: `#ff9000` uppercase 14px weight 400, line-height/height 24px,
    margin-left 20px.
  - Inputs: transparent fill, height 45px, padding 0 20px, `#fff` weight 700
    16px, 2px `rgba(255,255,255,0.15)` border, radius 40px, focus → bg `#fff`
    color `#222`, placeholder `rgba(255,255,255,0.15)` (also invalid date
    text).
  - Select arrow: `rgba(255,255,255,0.15)` 32×32, right 10px bottom 7px,
    rotated `➜` (U+279C), no tab bg; focus → `rgba(0,0,0,0.3)`.
  - Button: `#ff9000` solid bg, `#fff` 700 18px uppercase, height 55px,
    radius 40px, full width; `.form-btn` margin-top 10px. (No hover rule in
    source — may darken to ~`#e68200` on hover.)
  - Responsive: NO custom media query in source CSS — Bootstrap `col-md-*`
    stacking only (rows collapse below 768px).

## Task list (implementation order)

1. [ ] Scaffold app: copy the simplest existing app (e.g. `apps/hostly`),
       rename package to `@free-react-templates/guestly`, add workspace entry
       (root `npm install` so `package-lock.json` registers it).
2. [ ] `index.html`: title "Guestly — Room Reservation Widget Template",
       Google Fonts `<link>`s for Medula One (400) + Lato 400/700.
3. [ ] `src/index.css`: `@theme` tokens — brand `#ff9000`, Lato body font,
       Medula One for display headings.
4. [ ] `src/App.tsx`: single-section page — `#booking` (h-screen, white page
       bg) → centered card (max-w-[642px], bg-[#0f0f0f], sharp corners) →
       photo header panel (full width, seeded picsum `guestly-1/1280/600`,
       bg-cover, `rgba(81,81,81,0.8)` scrim, p-[85px_25px_25px]) + form
       header → `<BookingForm />`. NO navbar, NO footer.
5. [ ] `src/components/BookingForm.tsx`: form (p-[30px]) with Arrival /
       Departure date inputs (required), Rooms 1-3 / Adults 1-3 / Kids 0-2
       selects in a 3-column row, arrow glyphs, pill inputs
       (rounded-[40px], border-2 border-white/15, transparent bg, white
       text, focus → white bg `#222` text), uppercase orange labels
       (uppercase, text-[#ff9000], ml-[20px]).
6. [ ] Validation + summary: pure exported function (dates required,
       departure ≥ arrival) → summary line (arrival → departure, rooms,
       adults, kids) or per-field messages; tests at 100% coverage.
7. [ ] Mobile: rows collapse to a single column below 768px (grid → grid
       cols-1); photo header stays full-width on top; card centered.
8. [ ] Tests: colocated `*.test.tsx` per component, scenario-style `it`
       blocks mirroring the spec Gherkin.
9. [ ] Gate: `scripts/verify-app.sh guestly` (typecheck + lint + vitest
       100% coverage + build); `npm run spec:validate` for
       `template-guestly`.
10. [ ] Ship: mark `[~]`→`[x]` in TEMPLATES.md + surge URL +
        `npm run readme:status`; PR description with source template, preview
        URL, tokens, differences.
