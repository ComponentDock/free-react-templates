# Bookly (ColorLib Booking 20) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V20 — Free Bootstrap
> Reservation Widget" (https://colorlib.com/wp/template/colorlib-booking-20/)
> under the NEW name **Bookly** ("book" — the action the form performs, the
> CTA is "Book Now" + "-ly", following the Booking Forms family convention
> Reservly/Coastly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/Hostly/
> Guestly/Skyly; single lowercase word, no collision with `apps/`,
> `openspec/specs/` or `docs/templates/` — verified 2026-08-09), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V20" — free HOTEL
  reservation-form widget template, Bootstrap-based (Booking Forms category,
  22 templates in the family). Template page title: "Colorlib Booking Form
  V20 - Free Bootstrap Reservation Widget - Colorlib". Internal demo doc
  title: "Booking Form HTML Template"; the recreation brands itself
  **Bookly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-20/` (HTTP 200, ~8.8 KB
  HTML + `css/style.css` ~3.1 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-20/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as the template-skyly / template-stayly / template-roostly /
  template-roomzy / template-reservly / template-ridely / template-triply /
  template-innly / template-lodgely / template-hostly / template-guestly /
  template-coastly preps). The TEMPLATES.md screenshot
  (`colorlib-booking-20.jpg`, 1200×972, viewed in browser) and the live
  render (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** light, airy hotel-aesthetic
  page. A full-screen photograph of a modern luxury hotel bedroom (bed with
  white linens + beige throw, desk + chair by a window with sheer curtains,
  natural light, light wood tones) fills the viewport, washed out by an 80%
  white overlay. LEFT: large near-black uppercase headline **"MAKE YOUR
  RESERVATION"** (`#181818`, ~52px, weight 900) + 22px `#181818` Lorem
  paragraph. RIGHT: clean WHITE card (~642px, subtle shadow) with 55px
  underline-style inputs (2px `rgba(0,0,0,0.2)` bottom border only),
  light-grey uppercase labels that float to the top edge, shrink to 14px and
  turn GREEN `#2b9328` on focus or when filled, and a full-width solid-green
  `#2b9328` "Book Now" button. ONLY accent = green `#2b9328`.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — full-bleed cover/center PHOTO background
     (hotel bedroom) + `rgba(255,255,255,0.8)` white overlay; content
     vertically centered.
  2. LEFT (5/12): `.booking-cta` — h1 "Make your reservation" (52px
     uppercase `#181818` weight 900) + 22px `#181818` paragraph.
  3. RIGHT (6/12 offset 1/12): `.booking-form` — white 642px card (padding
     40px 30px, shadow `0 0 10px -5px rgba(0,0,0,0.3)`): Row 1 Name + Email
     → Row 2 Phone + Rooms + Guests (selects + `➜` arrows) → Row 3 Check In
     - Check Out (both required) → "Book Now" button.
  4. No footer, no other content (single-section demo).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand accent: **green `#2b9328`** — floated/focused label color AND
    button background ONLY.
  - Text: **`#181818`** (near-black) — headline, paragraph, field text.
  - Card: **`#fff`**, shadow `0 0 10px -5px rgba(0,0,0,0.3)`, max-width
    642px, padding 40px 30px.
  - Overlay: `rgba(255,255,255,0.8)` over the photo.
  - Border/placeholder/label-idle/arrow: **`rgba(0,0,0,0.2)`** (2px bottom
    rule on every field, placeholder, empty-date text, idle label, select
    arrow).
  - Font: **Montserrat 400/700** (Google Fonts), NO display font.
  - Fields: `#fff` bg, `#181818` 16px weight-700 text, 55px height,
    `border-radius: 0` (sharp), 2px `rgba(0,0,0,0.2)` bottom border only,
    `padding-top: 15px`, `transition: 0.2s`.
  - Floating labels: `.form-label` — `rgba(0,0,0,0.2)`, weight 700,
    uppercase, 16px, absolute top 20px left 0, `pointer-events: none`;
    floated (`:focus` or `.input-not-empty`) — top 0, 14px, `#2b9328`.
    jQuery toggles `.input-not-empty` on input value; CSS hides value of
    empty unfocused fields (`color: transparent`).
  - Select arrow: `➜` (U+279C) rotated 90°, `rgba(0,0,0,0.2)` 14px, 32×32,
    absolute right 0 bottom 7px, `pointer-events: none`.
  - Button: `#2b9328` bg, `#fff` weight-700 `capitalize` 18px text, 55px
    height, `padding: 10px 35px`, full width, border none (no hover rule in
    source CSS).
  - Layout: CTA LEFT 5/12, card RIGHT 6/12 offset 1/12.
  - Responsive: Rooms/Guests stay 2-up ≥768px (`col-sm-6`), stack below;
    CTA/card stack below 992px.
- **KEY DIFFERENCES vs Skyly (Booking 19, same family, do NOT copy):** Skyly
  = light sky-blue FLIGHT variant (white 642px card, `#4fa3e3`, Lato,
  flight fields + radio pills, floating `#98c9ee` labels, 65px 4px-radius
  fields, "Book your flight today", "Show flights"). Bookly = green HOTEL
  variant (`#2b9328`, Montserrat, name/email/phone/rooms/guests/check-in/
  check-out, 55px SHARP underline fields, grey→green floating labels, "Make
  your reservation", "Book Now").
- **KEY DIFFERENCES vs Coastly (Booking 2, dark variant, do NOT merge):**
  Coastly = solid `#1a1e24` dark slab, lime `#72b01d`, CTA RIGHT/form LEFT,
  static white `capitalize` labels, 100px fields. Bookly = white 642px card,
  green `#2b9328`, CTA LEFT/form RIGHT, floating uppercase labels, 55px
  fields.
- **KEY DIFFERENCES vs Hostly (Booking 17, light variant):** Hostly = taupe
  `#856849` + Playfair Display + photo panel INSIDE the card + pills. Bookly
  = green `#2b9328` + Montserrat + full-bleed photo page (no inner panel) +
  SHARP underline fields.
- **First in the family with this palette:** no other Booking Forms prep
  uses green `#2b9328` (verified against all `template-*` specs 2026-08-09).
- **Recreation decisions:** Tailwind grid (NO Bootstrap); single-section
  page — NO Navbar/Footer; bg = `picsum.photos/seed/bookly-1/1920/1080`
  cover/center + `rgba(255,255,255,0.8)` overlay div; native date inputs;
  floating labels as REAL `<label htmlFor>` (source uses non-semantic
  `<span class="form-label">`) driven by a small React hook tracking
  focus/value per field (pure CSS `:focus + label` can't work when the label
  precedes the input in the DOM — the hook is the faithful equivalent of the
  source jQuery `floatedLabel()`); select arrow = rotated `➜` or lucide
  ChevronDown `rgba(0,0,0,0.2)` 32×32 at right 0 bottom 7px; title "Bookly —
  Hotel Reservation Template"; "Book Now" validates (name, valid email,
  phone, dates, check-out ≥ check-in) and shows a summary (documented
  recreation choice — source is static).

## Tasks (implementation order, TDD)

1. Scaffold `apps/bookly` (copy simplest existing app, rename package to
   `@free-react-templates/bookly`); `npm install` at root to register the
   workspace in `package-lock.json` (implementer's job — prep stream never
   touches the lockfile); verify `grep -c "free-react-templates/bookly"
package-lock.json`.
2. `index.html`: title "Bookly — Hotel Reservation Template", Google Fonts
   `<link>` Montserrat 400/700.
3. `src/index.css`: `@theme` tokens — brand `#2b9328` (green), text
   `#181818`, border/label-idle/arrow `rgba(0,0,0,0.2)`, overlay
   `rgba(255,255,255,0.8)`; Montserrat font-family.
4. Tests (red) → `App.tsx` + components:
   - `Hero.tsx`/`BookingSection.tsx` — 100vh section, picsum bg
     (`bookly-1/1920/1080`) cover/center, white overlay div, vertical
     centering, two-column grid (CTA left 5/12, card right 6/12 offset
     1/12).
   - `Cta.tsx` — h1 "Make your reservation" + 22px paragraph.
   - `BookingForm.tsx` — white card: Name + Email row, Phone + Rooms +
     Guests row (selects + arrows), Check In + Check Out row (required),
     "Book Now" button; floating-label hook per field; 20px form-group
     rhythm; validation (name, valid email, phone, dates, check-out ≥
     check-in) → summary or validation messages.
   - Mobile: Rooms/Guests stack <768px; CTA stacks above card <992px.
5. `scripts/verify-app.sh bookly` → green; `npm run spec:validate`.
6. PR description must include: source template (ColorLib Booking 20,
   `https://colorlib.com/wp/template/colorlib-booking-20/`), live demo URL
   analyzed (`https://colorlib.com/etc/bforms/colorlib-booking-20/`), design
   tokens (`#2b9328`, `#181818`, Montserrat, `rgba(0,0,0,0.2)`), what
   differs (Bookly name, picsum placeholders, real `<label>`s, floating-label
   hook, interactive validation summary).
7. Ship: TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`;
   deploy URL `https://free-react-templates-bookly.surge.sh/`.
