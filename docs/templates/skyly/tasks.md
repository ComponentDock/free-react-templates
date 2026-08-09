# Skyly (ColorLib Booking 19) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V19 — Free Airline Flight
> Booking Template" (https://colorlib.com/wp/template/colorlib-booking-19/)
> under the NEW name **Skyly** ("sky" — the domain of flight + "-ly",
> matching the Booking Forms family convention
> Reservly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly/Guestly;
> single lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-09), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V19" — free AIRLINE FLIGHT
  BOOKING widget template, Bootstrap-based (Booking Forms category, 22
  templates in the family). Page title: "Colorlib Booking Form V19 - Free
  Airline Flight Booking Template". Internal doc title: "Booking Form HTML
  Template"; the recreation brands itself **Skyly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-19/` (HTTP 200, ~6.1 KB
  HTML + `css/style.css` ~3.7 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-19/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as the template-stayly / template-roostly / template-roomzy /
  template-reservly / template-ridely / template-triply / template-innly /
  template-lodgely / template-hostly / template-guestly preps). The
  TEMPLATES.md screenshot (`colorlib-booking-19.jpg`, 1200×972, viewed in
  browser) matches the live render 1:1.
- **Visual design (screenshot + live render):** light, airy, travel-aesthetic
  page. A full-screen photograph (airplane wing flying over turquoise water
  and snowy mountains under a bright blue sky) fills the entire viewport. On
  the LEFT, over the photo: the large uppercase light-blue headline "BOOK
  YOUR FLIGHT TODAY" (`#4fa3e3`, ~52px) with a dark-grey 22px Lorem-ipsum
  paragraph beneath. On the RIGHT, a clean white rounded card (max-width
  642px, soft shadow) holding the flight-search form: three radio "pills"
  (Roundtrip / One way / Multi-City, custom circles), then two text fields
  with floating light-blue labels (Flying from / Flying to, placeholder
  "City or airport"), then Departing / Returning date fields, then a
  three-column row of selects (Adults / Children / Travel class), and a
  full-width solid blue "SHOW FLIGHTS" button (`#4fa3e3`, white uppercase
  18px). Fields have 2px light-grey-blue (`#dfe5e9`) borders, sharp 4px
  corners, 65px height. The ONLY accent is the bright sky-blue `#4fa3e3` —
  everything else is white / light grey / dark grey. Clean, modern, sky-blue
  aviation aesthetic.
- **KEY DIFFERENCES vs Stayly (Booking 12) — also blue, do NOT copy the
  Stayly design:** Stayly sits on a light-grey `#f7f9fa` page with a ~250px
  SIDE PHOTO PANEL inside the white card, `#6499ff` used ONLY on the button,
  40px-tall inputs, static labels ABOVE the fields, and a full-width select.
  Skyly has a FULL-BLEED PHOTO page background (no side panel), `#4fa3e3` on
  the h1 + radio dots + button, 65px-tall inputs with 2px `#dfe5e9` borders,
  FLOATING labels INSIDE the inputs (`#98c9ee`), custom circular radio pills,
  and a two-column CTA + card layout. Same Lato font family, same 642px card
  width — that's where the similarity ends.
- **KEY DIFFERENCES vs Hostly (Booking 17) — also light, do NOT merge the
  two:** Hostly = taupe/beige variant (white 912px card on a
  `rgba(133,104,73,0.33)` wash, LEFT photo panel, Playfair Display 900
  headline, taupe `#856849` labels/button, PILL inputs/button, "Make your
  reservation" header, "Check availability" button). Skyly = SKY-BLUE variant
  (white 642px card directly on a full-bleed photo, no inner photo panel,
  Lato headline "Book your flight today", blue `#4fa3e3` labels/button,
  SHARP 4px-radius inputs/button, flight field set with radio pills, "Show
  flights" button). Both light single-section form demos; field sets differ
  completely.
- **KEY DIFFERENCES vs Guestly (Booking 18) — dark variant, do NOT copy:**
  Guestly = DARK ORANGE (near-black `#0f0f0f` card on a WHITE page,
  full-width photo header panel inside the card, Medula One headline, orange
  `#ff9000` labels/button, PILL inputs). Skyly = LIGHT BLUE (white card on a
  full-bleed photo, no inner photo panel, Lato headline, blue `#4fa3e3`
  labels/button, SHARP 4px-radius inputs).
- **First in the family with this palette:** no other Booking Forms prep uses
  sky blue `#4fa3e3` or the floating in-input label treatment (verified
  against all existing `template-*` specs 2026-08-09).

## Section-by-section fidelity notes

1. **Full-viewport section (`#booking`)** — `height: 100vh`, font Lato,
   `color: #191a1e`. Background: full-bleed cover/center photo (use
   `picsum.photos/seed/skyly-1/1920/1080`, an aerial/landscape seed; never
   copy the source `background.jpg`).
2. **Vertical centering** — `.section-center`: absolute, top 50%,
   translateY(-50%), left/right 0.
3. **Left CTA column** (~4/12) — `.booking-cta` (margin-top 45px): h1 "Book
   your flight today" — 52px, uppercase, `#4fa3e3`, weight 400; p — 22px,
   `#191a1e`.
4. **Right white card** (~7/12 + 1/12 offset) — `.booking-form`: `#fff`,
   max-width 642px, margin auto, padding 45px 25px 25px, radius 4px, shadow
   `0px 0px 10px -5px rgba(0,0,0,0.4)`.
5. **Radio group** — Roundtrip · One way · Multi-City. Custom circles:
   20×20px, 2px `#dfe5e9` border, checked → 10px `#4fa3e3` dot. Labels weight
   700 `#191a1e`, padding-left 30px, `label+label { margin-left: 15px }`.
   Inputs visually hidden but accessible (native radio semantics).
6. **Route row** — Flying from (text, placeholder "City or airport") ·
   Flying to (text, placeholder "City or airport"). Fix the source typo
   "Flyning to" → "Flying to".
7. **Dates row** — Departing (date, required) · Returning (date, required).
   Empty date inputs render `#dfe5e9` text.
8. **Selects row** (3 columns) — Adults (18+) 1/2/3 · Children (0-17) 0/1/2 ·
   Travel class (Economy class/Business class/First class). `appearance:
none` + floating `#dfe5e9` arrow (rotated `➜`/ChevronDown) at right 6px
   bottom 6px, 32×32px.
9. **Submit** — `.form-btn` → "Show flights": full-width `#4fa3e3` bg, white
   uppercase 18px text, weight 400, height 65px, radius 4px, border none.
   Validate (dates required; returning ≥ departing) → summary line / inline
   validation messages (documented recreation choice; original is static).
10. **NO navbar, NO footer** — single-section demo (page ends after the GA
    script in the source).

## Design tokens (from `css/style.css`)

- Brand: `#4fa3e3` (sky blue) — h1, radio dots, submit button.
- Labels: `#98c9ee` (light blue) — floating in-input labels.
- Text: `#191a1e` (dark grey).
- Borders / placeholders: `#dfe5e9` (light grey-blue).
- Input focus bg: `#f9fafb` (very light grey).
- Card: `#fff`, radius 4px, shadow `0 0 10px -5px rgba(0,0,0,0.4)`.
- Font: Lato 400/700 (Google Fonts, no display font).
- Radii: 4px everywhere (inputs, card, button) — SHARP, NOT pill.

## Task outline (implementer)

1. Scaffold `apps/skyly` (copy simplest existing app, e.g. `apps/hostly`;
   package `@free-react-templates/skyly`; run `npm install` at root so the
   lockfile registers the workspace).
2. `vite.config.ts` with `injectUiSource()` (mandatory, see conventions).
3. `src/index.css` — Tailwind v4 `@theme`: `--color-brand: #4fa3e3`,
   `--color-label: #98c9ee`, `--color-ink: #191a1e`, `--color-border:
#dfe5e9`, `--color-focus: #f9fafb`; Lato font-family token.
4. `index.html` — Google Fonts `<link>` Lato 400/700; title "Skyly —
   Airline Flight Booking Template".
5. Components: `BookingSection` (100vh photo bg + centered row), `CtaCopy`,
   `FlightForm` (radios + route + dates + selects + submit), select-arrow
   glyph, floating-label styling.
6. Tests FIRST (red) per spec scenarios, then implementation (green) — 100%
   coverage.
7. Verify: `scripts/verify-app.sh skyly`; commit `feat: Skyly — airline
flight booking template (ColorLib Booking 19)`; PR + immediate squash
   merge; TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`.
