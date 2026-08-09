# Dozely (ColorLib Booking 8) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V8 — Free Reservation Form"
> (https://colorlib.com/wp/template/colorlib-booking-8/) under the NEW name
> **Dozely** ("doze" + "-ly", following the Booking Forms family convention
> Reservly/Coastly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly/
> Guestly/Skyly/Bookly/Nestly/Drivly/Wingly/Restly/Sleeply; single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-09), per the monorepo naming mandate (never
> reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V8" — free HOTEL / reservation
  booking-form widget template ("Make your reservation", Destination /
  Check In / Check out / Rooms / Adults / Children / Email / Phone, "Book
  Now"), Bootstrap-based (Booking Forms category, 22 templates in the
  family). Internal demo doc title: "Booking Form HTML Template". The
  recreation brands itself **Dozely**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-8/` (HTTP 200, ~7.6 KB
  HTML + `css/style.css` ~3.6 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-8/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as all the earlier template-* preps). The TEMPLATES.md screenshot
  (`colorlib-booking-8.jpg`, 1200×972, viewed in browser) and the live render
  (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** one rounded card (subtle
  lift) centered on a plain WHITE page. The card's background photo is a
  **TROPICAL RESORT AT DUSK** ("blue hour"): multi-story resort building with
  warm golden window lights, calm swimming pool reflecting the light, palm
  trees, deep blue-purple twilight sky — dimmed by a `rgba(0,0,0,0.7)`
  overlay. Inside: centered bold white "Make Your Reservation" (capitalized),
  then a tight grid of dark translucent PILL fields (fully rounded ends,
  ~60px tall) with white text and small ORANGE floating labels; bottom row = a
  full-width bright-orange pill **"BOOK NOW"** button. Warm orange accents
  (`#ff8846` + `#e35e0a`) over the cool dusk photo = cozy, upscale resort
  booking widget. The reference DOM/CSS contain NO icons inside fields (the
  screenshot's tiny glyphs are render noise — do not invent icons).
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — WHITE page (no page-level photo), content
     vertically centered via `.section-center` (absolute top 50%,
     translateY(-50%)).
  2. `.booking-form` — centered dark photo CARD (max-width 642px, padding
     40px, radius 5px, `::before` overlay `rgba(0,0,0,0.7)`):
     - `.form-header` — h1 **"Make your reservation"** (white, Raleway 700,
       42px, capitalize, centered, 30px bottom margin).
     - **Destination** — text, full width, placeholder "Country, ZIP,
       city...".
     - Row (6/6): **Check In** (date, required) · **Check out** (date,
       required).
     - Row (4/4/4): **Rooms** (select, hidden placeholder "no of rooms",
       options 1/2/3) · **Adults** ("no of adults", 1/2/3) · **Children**
       ("no of children", 0/1/2).
     - Row (6/6): **Email** (placeholder "Enter your Email") · **Phone**
       (placeholder "Enter you Phone" — source typo, keep).
     - `.form-btn` → **button.submit-btn "Book Now"** (full width).
  3. No footer, no other content sections (single-section demo).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand: **`#ff8846`** (orange — floating `.form-label` text + focus ring
    `0 0 0 2px #ff8846`) and **`#e35e0a`** (deep orange — "Book Now" button
    bg; text `#fff`). Two-tone orange accent family.
  - Section: **100vh**, WHITE page background, font **'Raleway', sans-serif**
    (400 + 700); `.section-center` absolute top 50% translateY(-50%).
  - Card (`.booking-form`): max-width 642px, margin auto, **padding 40px**,
    overflow hidden, `background-image: url('../img/background.jpg')`
    cover/center, **border-radius 5px**, z-index 20; `::before` overlay
    **`rgba(0,0,0,0.7)`** (z-index -1). (No box-shadow in style.css; the
    screenshot's subtle lift → optional soft shadow.)
  - Headline (`.form-header h1`): **'Raleway' 700**, `text-transform:
capitalize`, **42px**, margin 0, `#fff`, centered; `.form-header` margin-
    bottom 30px.
  - Fields (`.form-control`): **`rgba(255,255,255,0.2)`** bg, **height 60px**,
    padding 0 25px, border none, **border-radius 40px** (PILL), `#fff` text,
    `box-shadow 0 0 0 2px transparent`; **focus → 2px `#ff8846` ring**;
    placeholder + invalid date **`rgba(255,255,255,0.5)`**; date inputs get
    `padding-top: 16px`.
  - Labels (`.form-label`): **FLOATING** — absolute, `top: -10px; left:
25px`, opacity 0, `#ff8846`, 11px, weight 700, uppercase, letter-spacing
    1.3px, 15px line-height; `.input-not-empty` (JS class when control has a
    value) → `opacity 1; top: 10px`. **Date labels always visible**
    (`input[type="date"] + .form-label { opacity: 1; top: 10px }`).
  - Selects: `appearance: none`; `option { color: #000 }`. `.select-arrow` —
    FLOATING 32×32 glyph: absolute right 15px, top 50% translateY(-50%),
    line-height 32px, pointer-events none, `rgba(255,255,255,0.5)`, 14px;
    `::after` `'\279C'` (➜) rotated 90° (points down).
  - Button (`.submit-btn`): **`#e35e0a`** bg, `#fff` uppercase 16px weight
    700, letter-spacing 1.3px, height 60px, padding 10px 30px, radius 40px,
    width 100%; **hover/focus → `opacity: 0.9`** (the family's only hover
    rule).
  - Fonts: 'Raleway' 400/700 everywhere (Google Fonts
    `family=Raleway:wght@400;700`).
  - Radius family: **40px pills** (fields + button), **5px** card.
  - Grid rhythm: fields 60px tall; 30px vertical gap (`.form-group`
    margin-bottom 30px); card padding 40px; rows 6/6 → 4/4/4 → 6/6.
  - Responsive: Bootstrap `col-md-*` grid only (below 768px rows stack
    full width; button stays full width).
- **Family distinctions (do NOT copy these siblings):**
  - vs **Sleeply** (Booking 7, CLOSEST sibling): Sleeply = SOLID WHITE card
    (no photo, no overlay), NAVY `#184c8f` label+button, light-gray
    `#f2f1f1` fields, Montserrat, labels BELOW the fields (with connector
    triangle), daytime city skyline as the PAGE background, NO headline.
    Dozely = DARK card (resort-dusk photo INSIDE card + 0.7 overlay), orange
    `#ff8846`/`#e35e0a`, Raleway, translucent `rgba(255,255,255,0.2)` pills,
    orange FLOATING labels inside fields, headline INSIDE the card, white
    page.
  - vs **Wingly** (Booking 5): both dark `rgba(0,0,0,0.7)` card + pills, but
    Wingly = RED `#f23e3e`, PT Sans, static white labels ABOVE fields, flight
    set, no headline. Dozely = orange, Raleway, floating labels inside
    fields, hotel set, headline inside card.
  - vs **Restly** (Booking 6): NO card, translucent WHITE sharp 0-radius
    fields over night-cityscape page photo (no scrim), copper-brown
    `#8c5d28` inset FIXED labels, Imprima + Cantata One, serif headline
    OUTSIDE the form. Dozely = dark photo card + 0.7 overlay, orange, Raleway,
    40px pills, floating labels, sans headline inside card.
  - Orange family neighbors (keep exact): Guestly `#ff9000`, Ridely/Drivly
    `#ffc600`, Roostly `#ff0063`, Wingly `#f23e3e` — Dozely's pair is
    `#ff8846` + `#e35e0a`.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap grid
  (NO Bootstrap dependency); single-section form page — repo-standard
  Navbar/Footer must NOT be added; page background white; card background =
  seeded picsum (`picsum.photos/seed/dozely-1/900/675`; source
  `background.jpg` resort photo NOT copied) cover/center + `rgba(0,0,0,0.7)`
  overlay over the card; native date inputs (no datepicker dep); selects
  `appearance:none` + FLOATING 32×32 arrow glyph (lucide ChevronDown,
  `rgba(255,255,255,0.5)`, 14px, pointer-events-none — NOT Restly's
  full-height strip); labels real `<label htmlFor>` that FLOAT (hidden
  opacity-0 above the field until the control has a value, then visible at
  top — date labels always visible); Raleway 400/700 Google Fonts `<link>`;
  document title "Dozely — Hotel Booking Template"; brand "Booking" →
  "Dozely" everywhere. "Book Now" validates (destination, check-in,
  check-out required; rooms/adults/children defaulted) and shows a summary
  line (destination · rooms/adults/children · dates · email/phone) — original
  is static, this minimal interaction is a documented recreation choice in a
  pure exported function for 100%-coverage tests. Source copy kept verbatim:
  "Make your reservation", "Country, ZIP, city...", "Check In" (capital I),
  "Check out" (lowercase o), "no of rooms"/"no of adults"/"no of children",
  "Enter your Email", "Enter you Phone" (source typo), "Book Now".

## Tasks (implementation order)

- [ ] Scaffold `apps/dozely` (copy simplest existing app, rename package to
      `@free-react-templates/dozely`; NOT `apps/colorlib-booking-8`)
- [ ] `@theme` tokens: `--color-brand: #ff8846` (orange — labels + focus
      ring), `--color-brand-dark: #e35e0a` (button), field bg
      `rgba(255,255,255,0.2)`, placeholder `rgba(255,255,255,0.5)`, radius
      40px (pills) + 5px (card)
- [ ] `index.html`: Raleway 400/700 Google Fonts `<link>`
      (`family=Raleway:wght@400;700`), title "Dozely — Hotel Booking
      Template"
- [ ] Section: 100vh white page, content vertically centered, NO
      navbar/footer/hero chrome
- [ ] Card: centered, max-w-[642px], p-10, rounded-[5px], picsum
      `dozely-1/900/675` cover/center bg + `bg-black/70` overlay covering the
      card (soft shadow optional — matches screenshot lift)
- [ ] Headline: h1 "Make your reservation" — Raleway 700, white, 42px,
      capitalize, centered, 30px bottom margin
- [ ] Destination: text input full width, placeholder "Country, ZIP,
      city..."
- [ ] Check In + Check out: native date inputs (6/6 row), both `required`,
      labels ALWAYS visible
- [ ] Rooms (1/2/3) + Adults (1/2/3) + Children (0/1/2) selects (4/4/4 row)
      with hidden placeholder options "no of rooms"/"no of adults"/"no of
      children"
- [ ] Email (placeholder "Enter your Email") + Phone (placeholder "Enter
      you Phone") inputs (6/6 row)
- [ ] Floating labels: real `<label htmlFor>` — hidden (`opacity-0`, above
      field top edge) until control has a value, then visible at top; `#ff8846`
      11px weight-700 uppercase tracking-[1.3px]; date labels always visible
- [ ] Field styling: `bg-white/20`, h-[60px], rounded-full (pill), borderless,
      white text, placeholder white/50, focus ring-2 `#ff8846`
- [ ] Select arrow glyphs: floating 32×32 lucide ChevronDown at right edge,
      `rgba(255,255,255,0.5)`, pointer-events-none
- [ ] "Book Now" button: full width, `#e35e0a` bg, white uppercase 16px
      weight-700 tracking-[1.3px], h-[60px], pill, hover/focus opacity-90
- [ ] Validation + summary: pure exported function (required:
      destination/check-in/check-out; summary "Malibu · 2 rooms, 3 adults, 1
      child · Aug 10 – Aug 14, 2026 · a@b.com")
- [ ] Responsive: below 768px all rows stack full width; button stays full
      width
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh dozely` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL, tokens, what differs; merge
      immediately; `[~]`→`[x]` + surge URL + `npm run readme:status`
