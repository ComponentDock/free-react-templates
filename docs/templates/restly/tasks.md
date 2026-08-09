# Restly (ColorLib Booking 6) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V6 — Free Reservation Form"
> (https://colorlib.com/wp/template/colorlib-booking-6/) under the NEW name
> **Restly** ("rest" + "-ly", following the Booking Forms family convention
> Reservly/Coastly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly/
> Guestly/Skyly/Bookly/Nestly/Drivly/Wingly; single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-09), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V6" — free HOTEL /
  reservation booking-form widget template ("Make Your Reservation",
  Destination / Guests / Children / Check In / Check out), Bootstrap-based
  (Booking Forms category, 22 templates in the family). Internal demo doc
  title: "Booking Form HTML Template". The recreation brands itself
  **Restly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-6/` (HTTP 200, ~4.6 KB
  HTML + `css/style.css` ~2.7 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-6/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as the template-skyly / template-stayly / template-roostly /
  template-roomzy / template-reservly / template-ridely / template-triply /
  template-innly / template-lodgely / template-hostly / template-guestly /
  template-coastly / template-bookly / template-nestly / template-drivly /
  template-wingly preps). The TEMPLATES.md screenshot
  (`colorlib-booking-6.jpg`, 1200×972, viewed in browser) and the live
  render (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** high-end hotel booking
  aesthetic over a night-time metropolis photograph (dense skyline of lit
  skyscrapers — a distinctive twisted tower resembles the Cayan Tower,
  Dubai — dark blue/black sky, warm golden window light). Centered at the
  top of the form area: "Make Your Reservation" in a large white serif.
  Below it, a tight two-row grid of SHARP-cornered (0-radius)
  semi-transparent WHITE rectangles (~80px tall) floating directly over the
  photo: wide Destination field (placeholder "Enter Address, zip, city or
  airport") + Guests select ("1") + Children select ("0"), then Check In /
  Check out date fields + a solid copper-brown rectangular
  **"CHECK AVAILABILITY"** button with white uppercase text. Small
  COPPER-BROWN labels sit INSIDE the top-left of each field. The ONLY brand
  accent is copper-brown `#8c5d28` (labels + button); fields are translucent
  white with dark `#333` serif text. Clean, upscale, urban-hotel widget.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — full-bleed cover/center PHOTO background
     (night cityscape); NO scrim, NO card; content vertically centered via
     `.section-center` (absolute top 50%, translateY(-50%)).
  2. `.booking-cta` — centered serif **h1 "Make Your Reservation"** (white,
     52px, Cantata One, weight 700 synthetic, `margin-bottom: 30px`).
  3. `.booking-form` — transparent wrapper (fields ARE the card):
     - Row 1 (`col-md-8` + `col-md-2` + `col-md-2`): **Destination** (text,
       placeholder "Enter Address, zip, city or airport") · **Guests**
       (select 1/2/3 + arrow strip) · **Children** (select 0/1/2 + arrow
       strip).
     - Row 2 (`col-md-4` + `col-md-4` + `col-md-4`): **Check In** (date,
       required) · **Check out** (date, required) · `.form-btn` →
       **button.submit-btn "Check availability"**.
  4. No footer, no other content sections (single-section demo).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand: **copper-brown `#8c5d28`** (inset `.form-label` text + "Check
    availability" button bg; button text `#fff`). ONLY accent color.
  - Section: **100vh**, bg photo cover/center (night cityscape), font
    **'Imprima', sans-serif**; `.section-center` absolute top 50%
    translateY(-50%).
  - Headline (`.booking-cta h1`): **'Cantata One', serif**, `#fff`, 52px,
    weight 700 (synthetic), margin 0; CTA text-align center, margin-bottom
    30px.
  - Fields (`.form-control`): **`rgba(255,255,255,0.85)`** → solid
    `rgba(255,255,255,1)` on focus; **radius 0 (SHARP)**, border none,
    shadow none, **height 80px**, 'Cantata One' serif, **28px**, `#333`,
    weight 600 (synthetic), **padding-top 30px**; placeholder + invalid date
    **`rgba(51,51,51,0.3)`**; transition 0.2s background.
  - Labels (`.form-label`): **`#8c5d28`**, weight 700, height/line-height
    30px, 14px, letter-spacing 0.6px, **absolute left 10px top 0** — INSET
    at the field's top edge, FIXED (never floats).
  - Selects: `appearance: none`. `.select-arrow` — **right 0 bottom 0,
    width 24px, height 80px (FULL field height), line-height 80px, bg
    `rgba(255,255,255,0.3)`, pointer-events none**; `::after` `'\279C'` (➜)
    rotated 90°, `#333`, 14px.
  - Button (`.submit-btn`): **`#8c5d28`** bg, `#fff` uppercase 18px weight
    700, letter-spacing 0.6px, height 80px, radius 0, width 100%, NO hover
    rule in source.
  - Fonts: 'Imprima' (section/base) + 'Cantata One' (h1 + field text) —
    both single-weight families (only 400 on Google Fonts; 600/700
    synthesized). Google Fonts `family=Imprima&family=Cantata+One`.
  - Radius family: **0px everywhere**. No shadows anywhere.
  - Grid rhythm: fields 80px tall; margin-bottom 10px; margin-left/right
    −10px against Bootstrap col padding (→ ~10px gaps); rows 8/2/2 and 4/4/4.
  - Responsive: Bootstrap `col-md-*` grid only (below 768px rows stack).
- **Family distinctions (do NOT copy these siblings):**
  - vs **Coastly** (Booking 2, CLOSEST sibling): both are NO-CARD designs
    (fields ARE the card, sharp 0-radius, over the photo, "Check
    availability" button). Coastly = DARK `#1a1e24` fields, white labels +
    white field text, Montserrat, lime `#72b01d` button, LEFT CTA column
    "Book Now!" 58px + RIGHT form, 100px fields, 1px column separators.
    Restly = translucent WHITE `rgba(255,255,255,0.85)` fields, COPPER-BROWN
    `#8c5d28` labels + button, `#333` Cantata One serif field text, Imprima
    - Cantata One, CENTERED 52px serif h1 above a FULL-WIDTH form, 80px
      fields, no separators, no scrim.
  - vs **Wingly** (Booking 5): Wingly = dark `rgba(0,0,0,0.7)` CARD + red
    `#f23e3e`, PT Sans, 40px pills, static white labels ABOVE fields, flight
    set, no headline. Restly = NO card, translucent WHITE sharp fields,
    copper-brown `#8c5d28`, inset brown labels, hotel set, centered serif h1.
  - vs **Nestly** (Booking 3) / **Hostly** (Booking 17): brown-family
    neighbors (taupe `#9a8067` / dark taupe `#856849`) — Restly's `#8c5d28`
    is a distinct warm copper-brown; keep exact.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap grid
  (NO Bootstrap dependency); single-section form page — repo-standard
  Navbar/Footer must NOT be added; background = seeded picsum
  (`picsum.photos/seed/restly-1/1920/1080`; source `background.jpg` night
  cityscape NOT copied) cover/center with NO scrim (photo fully visible;
  fields provide their own contrast); native date inputs (no datepicker dep);
  selects `appearance:none` + FULL-HEIGHT arrow strip (24px × 80px,
  `rgba(255,255,255,0.3)` bg, rotated `➜`/lucide ChevronDown — NOT Wingly's
  floating 32×32 glyph); labels real `<label htmlFor>` INSET at top edge
  (fixed, never float); fields keep `#333` 28px Cantata One weight-600 text
  with top padding for the label; Imprima + Cantata One Google Fonts
  `<link>`; document title "Restly — Hotel Booking Template"; brand
  "Booking" → "Restly" everywhere. "Check availability" validates
  (destination, check-in, check-out required; guests/children defaulted) and
  shows a summary line (destination · guests/children · dates) — original is
  static, this minimal interaction is a documented recreation choice in a
  pure exported function for 100%-coverage tests. Source copy kept verbatim:
  "Check In" (capital I), "Check out" (lowercase o).

## Tasks (implementation order)

- [ ] Scaffold `apps/restly` (copy simplest existing app, rename package to
      `@free-react-templates/restly`; NOT `apps/colorlib-booking-6`)
- [ ] `@theme` tokens: `--color-brand: #8c5d28` (copper-brown), `--color-ink:
#333` (field text), field bg `rgba(255,255,255,0.85)` → solid on focus,
      placeholder `rgba(51,51,51,0.3)`, radius 0 (sharp) everywhere
- [ ] `index.html`: Imprima + Cantata One Google Fonts `<link>`
      (`family=Imprima&family=Cantata+One`), title "Restly — Hotel Booking
      Template"
- [ ] Section: 100vh, picsum `restly-1/1920/1080` cover/center, content
      vertically centered, NO navbar/footer/hero chrome, NO scrim, NO card
      wrapper
- [ ] Headline: centered h1 "Make Your Reservation" — Cantata One, white,
      52px, weight 700, 30px bottom margin
- [ ] Grid: two rows — 8/2/2 (Destination + Guests + Children) and 4/4/4
      (Check In + Check out + button); fields 80px tall, ~10px gaps
      (bottom-10 + −10px side margins against gutters)
- [ ] Destination: text input, placeholder "Enter Address, zip, city or
      airport"
- [ ] Guests + Children selects (1/2/3 and 0/1/2) with `appearance: none`
- [ ] Check In + Check out native date inputs, both `required`
- [ ] Inset labels: real `<label htmlFor>` at top-left INSIDE each field
      (top-0 left-2.5), `#8c5d28`, 14px, weight 700, letter-spacing 0.6px,
      30px line-height — fixed, never floating
- [ ] Field text: `#333` 28px Cantata One weight-600 with 30px top padding;
      placeholder/empty-date 30% grey
- [ ] Arrow strips: full-height 24px-wide bar at each select's right edge,
      `rgba(255,255,255,0.3)` bg, rotated ➜/ChevronDown `#333` 14px,
      pointer-events-none
- [ ] "Check availability" button: full-width in 4/12 slot, `#8c5d28` bg,
      white uppercase 18px weight-700 text, letter-spacing 0.6px, h-20,
      sharp corners, NO hover rule
- [ ] Validation + summary: pure exported function (required:
      destination/check-in/check-out; summary "Downtown Dubai · 2 guests, 1
      child · Aug 10 – Aug 14, 2026")
- [ ] Responsive: below 768px rows stack full width; button stays full width
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh restly` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs; merge
      immediately; `[~]`→`[x]` + surge URL + `npm run readme:status`
