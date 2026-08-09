# Nestly (ColorLib Booking 3) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V3 — Free Bootstrap
> Reservation Widget" (https://colorlib.com/wp/template/colorlib-booking-3/)
> under the NEW name **Nestly** ("nest", a cozy place to stay/rest — the
> hospitality use case + "-ly", following the Booking Forms family convention
> Reservly/Coastly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly/
> Guestly/Skyly/Bookly; single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-09), per the monorepo naming mandate (never reuse the ColorLib
> source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V3" — free HOTEL
  reservation-form widget template, Bootstrap-based (Booking Forms category,
  22 templates in the family). Internal demo doc title: "Booking Form HTML
  Template"; the recreation brands itself **Nestly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-3/` (HTTP 200, ~7.0 KB
  HTML + `css/style.css` ~2.4 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-3/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as the template-skyly / template-stayly / template-roostly /
  template-roomzy / template-reservly / template-ridely / template-triply /
  template-innly / template-lodgely / template-hostly / template-guestly /
  template-coastly / template-bookly preps). The TEMPLATES.md screenshot
  (`colorlib-booking-3.jpg`, 1200×972, viewed in browser) and the live
  render (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** bright resort aesthetic. A
  full-screen tropical beach photograph (three beige patio umbrellas + dark
  lounge chairs on white sand, calm turquoise water, a rocky breakwater,
  hazy blue mountains, bright blue sky with fluffy clouds) fills the
  viewport at FULL saturation — NO overlay scrim (unlike Bookly's 80% white
  wash). Across the middle: a long WHITE HORIZONTAL booking bar with a
  subtle shadow. LEFT: large elegant serif **"Book Now"** in muted
  taupe/gold **`#9a8067`**. MIDDLE: four fields with small grey static
  labels ("Check In", "Check out", "Guests", "Kids") above BIG serif values
  (28px, dark slate `#3c404a`). RIGHT: tall rectangular
  **"CHECK AVAILABILITY"** button in the same taupe `#9a8067`, white
  uppercase sans-serif text. ONLY accents: taupe `#9a8067` + slate
  `#3c404a`; everything else white / grey `#818390` / the photo.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — full-bleed cover/center PHOTO background
     (tropical beach), NO overlay; content vertically centered.
  2. `.booking-form` — WHITE HORIZONTAL BAR (shadow
     `0px 2px 5px -2px rgba(0,0,0,0.3)`, border
     `1px solid rgba(60,64,101,0.1)`, sharp corners, full container width),
     three zones in a `row.no-margin`:
     - LEFT `col-md-3` `.form-header` (110px, padding 15px 10px, centered):
       h2 **"Book Now"** — Alegreya 52px `#9a8067`, inline-block.
     - MIDDLE `col-md-7` inner row: `col-md-4` **Check In** (date) +
       `col-md-4` **Check out** (date) + `col-md-2` **Guests** (select
       1/2/3) + `col-md-2` **Kids** (select 0/1/2); each `.form-group`
       110px, padding 15px 10px, margin-bottom 0; label = static grey
       `#818390` 14px 30px line ABOVE a 50px transparent borderless input
       showing 28px Alegreya-700 `#3c404a` values; selects
       `appearance: none` + `.select-arrow` (rotated `➜` U+279C, `#818390`
       12px, 32×32, right 0 bottom 20px, pointer-events none).
     - RIGHT `col-md-2` `.form-btn` (110px, padding 15px 10px):
       button **"Check availability"** — `#9a8067` bg, `#fff` uppercase
       14px weight-400 text, 80px tall, width 100%, border none.
  3. No footer, no other content (single-section demo).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand accent: **taupe `#9a8067`** — "Book Now" header text AND button
    background ONLY.
  - Text: **`#3c404a`** (dark slate) — form control values.
  - Label + arrow: **`#818390`** (grey) — static labels + select arrows.
  - Bar: **`#fff`**, shadow `0 2px 5px -2px rgba(0,0,0,0.3)`, border
    `1px solid rgba(60,64,101,0.1)`, no radius, full container width.
  - Fonts: **Alegreya 700** (serif — header h2 AND field values) +
    **Source Sans Pro 400** (body) via Google Fonts.
  - Section: 100vh, photo cover/center, NO overlay.
  - Header/field-group height: **110px**, padding 15px 10px.
  - Static labels: `display: block; #818390; weight 400; 30px line; 14px` —
    fixed above the field, NEVER float (KEY difference vs Bookly).
  - Fields: transparent bg, `border-radius: 0` (sharp), `border: none`,
    50px height, `padding: 0`, 28px, `#3c404a`, weight 700, Alegreya.
  - Select arrow: `➜` (U+279C) rotated 90°, `#818390` 12px, 32×32,
    absolute right 0 bottom 20px, `pointer-events: none`.
  - Button: `#9a8067` bg, `#fff` uppercase 14px weight-400 text, 80px
    height, width 100%, border none (no hover rule in source CSS).
  - Responsive: zones on one row ≥992px (`col-md-3/7/2`), stack below
    992px; inner field row wraps (dates wider, selects narrower).
- **KEY DIFFERENCES vs Bookly (Booking 20, do NOT copy):** Bookly = green
  `#2b9328` STACKED 642px card + floating labels + Montserrat + underline
  fields. Nestly = taupe `#9a8067` HORIZONTAL BAR + STATIC labels + Alegreya/
  Source Sans Pro + borderless fields. Nestly's labels NEVER float.
- **KEY DIFFERENCES vs Hostly (Booking 17, also taupe — do NOT confuse):**
  Hostly = `#856849` (darker) + Playfair Display, stacked 912px card with an
  inner sepia photo panel, PILL inputs/button, "Make your reservation".
  Nestly = `#9a8067` (lighter gold-taupe), horizontal bar spanning the row,
  NO inner panel, SHARP borderless fields, "Book Now" header.
- **KEY DIFFERENCES vs Coastly (Booking 2, do NOT merge):** Coastly = dark
  `#1a1e24` slab + lime `#72b01d`, CTA RIGHT/form LEFT. Nestly = LIGHT white
  bar over beach photo, `#9a8067`, header LEFT + fields MIDDLE + button
  RIGHT. Same horizontal-bar family, opposite treatment.
- **KEY DIFFERENCES vs Roomzy (Booking 10, do NOT copy):** Roomzy = red
  `#f14634` horizontal bar (see template-roomzy prep). Nestly = taupe
  `#9a8067`. Verify against template-roomzy to keep the two bars distinct.
- **First in the family with this palette:** no other Booking Forms prep
  uses taupe `#9a8067` (family so far: Hostly `#856849`, Skyly `#4fa3e3`,
  Coastly `#72b01d`, Guestly `#ff9000`, Roostly `#ff0063`, Stayly
  `#6499ff`, Ridely `#ffc600`, Roomzy `#f14634`, Innly `#c99552`, Lodgely
  `#6c8f18`, Bookly `#2b9328`).
- **Recreation decisions:** Tailwind grid (NO Bootstrap); single-section
  page — NO Navbar/Footer; bg = `picsum.photos/seed/nestly-1/1920/1080`
  cover/center, NO overlay; native date inputs; STATIC real `<label
htmlFor>` labels (source uses non-semantic `<span class="form-label">`);
  select arrow = rotated `➜` or lucide ChevronDown `#818390` 12px 32×32 at
  right 0 bottom 20px; title "Nestly — Hotel Reservation Template";
  "Check availability" validates (check-in required, check-out required,
  check-out ≥ check-in) and shows a summary (documented recreation choice —
  source is static).

## Tasks (implementation order, TDD)

1. Scaffold `apps/nestly` (copy simplest existing app, rename package to
   `@free-react-templates/nestly`); `npm install` at root to register the
   workspace in `package-lock.json` (implementer's job — prep stream never
   touches the lockfile); verify `grep -c "free-react-templates/nestly"`
   package-lock.json.
2. `index.html`: title "Nestly — Hotel Reservation Template", Google Fonts
   `<link>` Alegreya 700 + Source Sans Pro 400.
3. `src/index.css`: `@theme` tokens — brand `#9a8067` (taupe), text
   `#3c404a`, label/arrow `#818390`, bar border `rgba(60,64,101,0.1)`;
   Alegreya (display) + Source Sans Pro (body) font families.
4. Tests (red) → `App.tsx` + components:
   - `BookingSection.tsx` — 100vh section, picsum bg (`nestly-1/1920/1080`)
     cover/center (NO overlay), vertical centering.
   - `BookingBar.tsx` — white horizontal bar (shadow + 1px border, sharp
     corners), 3-zone grid (header 3/12 · fields 7/12 · button 2/12).
   - `FormHeader.tsx` — "Book Now" h2, Alegreya 52px `#9a8067`, centered.
   - `BookingForm.tsx` — Check In (date) + Check out (date) + Guests
     (select 1/2/3) + Kids (select 0/1/2); STATIC labels (never float);
     select arrows; validation (dates, check-out ≥ check-in) → summary or
     validation messages.
   - Mobile: zones stack <992px; inner field row wraps.
5. `scripts/verify-app.sh nestly` → green; `npm run spec:validate`.
6. PR description must include: source template (ColorLib Booking 3,
   `https://colorlib.com/wp/template/colorlib-booking-3/`), live demo URL
   analyzed (`https://colorlib.com/etc/bforms/colorlib-booking-3/`), design
   tokens (`#9a8067`, `#3c404a`, `#818390`, Alegreya + Source Sans Pro),
   what differs (Nestly name, picsum placeholder, real `<label>`s, static
   labels, interactive validation summary).
7. Ship: TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`;
   deploy URL `https://free-react-templates-nestly.surge.sh/`.
