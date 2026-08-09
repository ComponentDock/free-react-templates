# Hostly (ColorLib Booking 17) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V17 — Free Travel Booking
> Template" (https://colorlib.com/wp/template/colorlib-booking-17/) under the
> NEW name **Hostly** ("host" — one who receives/entertains guests, fitting
> the hospitality/room-reservation use case + "-ly", matching the Booking
> Forms family convention
> Reservly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely; single
> lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-09), per the monorepo naming mandate
> (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V17" — free TRAVEL/room
  reservation widget template, Bootstrap-based (Booking Forms category, 22
  templates in the family). Meta: "The best free travel booking template
  with a Bootstrap base for online room reservations and different
  accommodation businesses." Page title: "Colorlib Booking Form V17 - Free
  Travel Booking Template 2026". Internal doc title: "Booking Form HTML
  Template"; the recreation brands itself **Hostly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-17/` (HTTP 200, ~5.0 KB
  HTML + `css/style.css` ~3.8 KB). NOTE: `https://preview.colorlib.com/theme/colorlib-booking-17/`
  returns 404 (curl verified) and there is no pages.dev mirror — the LIVE
  PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family
  (same pattern as the template-stayly / template-roostly / template-roomzy
  / template-reservly / template-ridely / template-triply / template-innly
  / template-lodgely preps). The TEMPLATES.md screenshot
  (`colorlib-booking-17.jpg`, 1200×972, viewed in browser) matches the live
  render 1:1.
- **Visual design (screenshot + live render):** minimal, elegant LIGHT
  design on a solid neutral taupe/beige background (`rgba(133,104,73,0.33)`
  wash). A WHITE rounded card (max-width 912px, radius 6px, soft drop
  shadow) with a VERTICAL PHOTO PANEL overlapping its left edge (400px wide,
  sepia-tinted photo — Taj Mahal landmark — with a heavy warm-taupe
  `rgba(133,104,73,0.78)` scrim). White serif headline "Make Your
  Reservation" (Playfair Display 900) and a small white Lorem-ipsum
  paragraph sit inside the photo panel. The form area right of the panel
  holds PILL-SHAPED (radius 40px) white inputs with 1px `#e5e5e5` borders:
  Check In / Check Out dates, Adults / Children selects, a full-width Room
  Type select ("Select room type"), and a full-width pill taupe-brown
  "Check availability" button (`rgba(133,104,73,0.9)`, white bold 18px).
  Uppercase small taupe `#856849` labels above each field, 20px indented.
  Earthy monochromatic palette (beige/taupe/brown/white) — calm, luxury
  travel aesthetic. The LIGHT counterpart of Lodgely; the ONLY pill-shaped
  variant so far.
- **KEY DIFFERENCES vs Lodgely (Booking 16) — do NOT copy the Lodgely dark
  design:**
  - WHITE card `#fff` + radius 6px, max-width 912px (Lodgely: `#1e1e1e`
    panel, radius 0, max-width 586px).
  - LIGHT taupe wash section `rgba(133,104,73,0.33)` (Lodgely: dark photo +
    60% black scrim).
  - Photo in an ABSOLUTE LEFT panel (400px, sepia scrim 0.78) holding the
    header (Lodgely: full-bleed section photo, no panel).
  - Headline Playfair Display serif 900 + 18px white subtitle (Lodgely:
    Hind sans 700, no subtitle); header is an **h2** (Lodgely: h1).
  - Field set: NO "No of rooms"; ADDED full-width **Room Type** select
    ("Select room type", Private Room (1 to 2 People) / Family Room (1 to 4
    People)); Adults/Children only in row 2.
  - PILL inputs (radius 40px, white fill, 1px `#e5e5e5` border, `#151515`
    bold text) vs Lodgely's borderless `#2d2d2d` dark inputs.
  - Uppercase TAUPE `#856849` labels (weight 400, margin-left 20px) vs
    white weight-400 non-uppercase labels.
  - Arrow glyph `#e5e5e5` right 3px bottom 5px vs white at right 6px bottom
    6px.
  - Pill taupe `rgba(133,104,73,0.9)` button (weight 700, 18px, height
    55px) vs sharp olive `#6c8f18` (weight 400, 50px).
- **KEY DIFFERENCES vs Innly (Booking 15) — also light, do NOT merge the
  two:** Innly = white card + full-bleed resort photo + 20% scrim, Cardo
  serif headline, bronze `#c99552`, sharp 3px corners, 24px grey arrow
  tabs, rooms/adults/children 4-col row w/ button inside. Hostly = taupe
  wash (no photo behind card), LEFT photo panel, Playfair Display 900
  headline, taupe `#856849`, PILL 40px radii, adults/children + room type,
  button in its own row.
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand: **taupe `#856849`** = rgba(133,104,73,1); label color, button bg
    (0.9, 1 on hover), section wash (0.33), photo scrim (0.78).
  - Fonts: **'Playfair Display' 900** (headline) + **'Alice', serif** 400/700
    (body/labels/inputs/button).
  - Card: `#fff`, max-width 912px, radius 6px, shadow `0px 5px 10px -5px
rgba(0,0,0,0.1)`.
  - Photo panel: 400px, left 25px, top/bottom -25px, cover/center, radius
    6px, padding 25px, scrim rgba(133,104,73,0.78).
  - Header: h2 Playfair 900 42px `#fff` capitalize, margin 60px top / 15px
    bottom; subtitle p `#fff` 18px.
  - Labels: `#856849` uppercase 14px weight 400, line-height 24px,
    margin-left 20px.
  - Inputs: `#fff` fill, height 45px, padding 0 15px, `#151515` weight 700
    16px, 1px `#e5e5e5` border, radius 40px, focus `#f8f8f8`, placeholder
    `#e5e5e5` (also invalid date/select text).
  - Select arrow: `#e5e5e5` 32×32, right 3px bottom 5px, rotated `➜`
    (U+279C), no tab bg.
  - Button: `rgba(133,104,73,0.9)` bg (solid on hover), `#fff` 700 18px,
    height 55px, radius 40px, full width; `.form-btn` margin-top 30px.
  - Mobile ≤768px: panel → relative, top -15px, width 95%, margin auto;
    form margin-left 0.

## Task list (implementation order)

1. [ ] Scaffold app: copy the simplest existing app (e.g. `apps/lodgely`),
       rename package to `@free-react-templates/hostly`, add workspace entry
       (root `npm install` so `package-lock.json` registers it).
2. [ ] `index.html`: title "Hostly — Travel Booking Widget Template",
       Google Fonts `<link>`s for Playfair Display 900 + Alice 400/700.
3. [ ] `src/index.css`: `@theme` tokens — brand `#856849` (+ alpha uses:
       0.33 wash / 0.78 scrim / 0.9 button), Alice body font, Playfair
       Display for display headings.
4. [ ] `src/App.tsx`: single-section page — `#booking` (h-screen,
       bg rgba(133,104,73,0.33)) → centered card (max-w-[912px], bg-white,
       rounded-[6px], shadow) → left photo panel (absolute, 400px, seeded
       picsum `hostly-1/500/700`, bg-cover, scrim overlay) + form header →
       `<BookingForm />`. NO navbar, NO footer.
5. [ ] `src/components/BookingForm.tsx`: form (ml-[425px] on desktop,
       p-[30px]) with Check In / Check Out dates (required), Adults 1-3 /
       Children 0-2 selects, full-width Room Type select (placeholder
       "Select room type", Private/Family Room options, required), arrow
       glyphs, pill inputs (rounded-[40px], border-[#e5e5e5]), uppercase
       taupe labels (uppercase, text-[#856849], ml-[20px]).
6. [ ] Validation + summary: pure exported function (dates required,
       check-out ≥ check-in, room type required) → summary line (check-in →
       check-out, adults, children, room type) or per-field messages;
       tests at 100% coverage.
7. [ ] Mobile: ≤768px panel stacks above form (relative, w-[95%], -top-15,
       mx-auto), form margin-left 0.
8. [ ] Tests: colocated `*.test.tsx` per component, scenario-style `it`
       blocks mirroring the spec Gherkin.
9. [ ] Gate: `scripts/verify-app.sh hostly` (typecheck + lint + vitest
       100% coverage + build); `npm run spec:validate` for
       `template-hostly`.
10. [ ] Ship: mark `[~]`→`[x]` in TEMPLATES.md + surge URL +
        `npm run readme:status`; PR description with source template, preview
        URL, tokens, differences.
