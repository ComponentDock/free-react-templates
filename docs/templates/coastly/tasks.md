# Coastly (ColorLib Booking 2) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Booking Form V2 — Free Book Now Template"
> (https://colorlib.com/wp/template/colorlib-booking-2/) under the NEW name
> **Coastly** ("coast" — a holiday-resort destination, matching the sunny
> pool-resort source photo + "-ly", following the Booking Forms family
> convention Reservly/Roomzy/Roostly/Stayly/Ridely/Triply/Innly/Lodgely/
> Hostly/Guestly/Skyly; single lowercase word, no collision with `apps/`,
> `openspec/specs/` or `docs/templates/` — verified 2026-08-09), per the
> monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Booking Form V2" — free HOTEL "Book Now"
  widget template, Bootstrap-based (Booking Forms category, 22 templates in
  the family). Template page title: "Colorlib Booking Form V2 - Free Book Now
  Template 2026 - Colorlib". Internal demo doc title: "Booking Form HTML
  Template"; the recreation brands itself **Coastly**.
- **Demo DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/bforms/colorlib-booking-2/` (HTTP 200, ~6.3 KB
  HTML + `css/style.css` ~3.2 KB + `css/bootstrap.min.css`). NOTE:
  `https://preview.colorlib.com/theme/colorlib-booking-2/` returns 404 (curl
  verified) — the LIVE PREVIEW link on the ColorLib template page resolves to
  `colorlib.com/etc/bforms/<slug>/` for the whole Booking Forms family (same
  pattern as the template-skyly / template-stayly / template-roostly /
  template-roomzy / template-reservly / template-ridely / template-triply /
  template-innly / template-lodgely / template-hostly / template-guestly
  preps). The TEMPLATES.md screenshot (`colorlib-booking-2.jpg`, 1200×972,
  viewed in browser) and the live render (browser-verified) match 1:1.
- **Visual design (screenshot + live render):** light resort-aesthetic page.
  A full-screen photograph (white lounge chairs + swimming pool + cabana
  under a bright blue sky) fills the viewport, washed out by an 85% white
  overlay. LEFT: a solid very-dark `#1a1e24` form slab with WHITE labels
  ("Your Destination", "Check In", "Check out", "Guests") at each field's
  top-left edge, thin translucent vertical rules between the Check In /
  Check out / Guests columns, a light ⇌ swap glyph between the date fields,
  and a full-width LIME-GREEN `#72b01d` "Check availability" button closing
  the slab. RIGHT: large uppercase dark headline **"BOOK NOW!"** (~58px,
  `#1a1e24`, weight 400) + 16px Lorem paragraph. The ONLY accent is the lime
  green `#72b01d` button. Clean, modern, high-contrast hotel "book now"
  widget.
- **Section order (1:1, verified from live DOM):**
  1. `#booking.section` (100vh) — full-bleed cover/center PHOTO background
     (pool resort) + `rgba(255,255,255,0.85)` white overlay; content
     vertically centered.
  2. LEFT (4/12 pulled): `.booking-form` — dark `#1a1e24` form slab (flush
     fields, 0 gutters): "Your Destination" text input (placeholder "Enter a
     destination or hotel name") → 3-col row: Check In (date, required) ·
     ⇌ swap glyph · Check out (date, required) · Guests (select 1/2/3 +
     arrow strip) → "Check availability" button (lime green, 100px).
  3. RIGHT (7/12 pushed): `.booking-cta` — h1 "Book Now!" (58px uppercase
     `#1a1e24` weight 400) + 16px `#1a1e24` paragraph.
  4. No footer, no other content (single-section demo).
- **Design tokens (from `css/style.css`, verified 2026-08-09):**
  - Brand accent: **lime green `#72b01d`** — button background ONLY.
  - Dark slab/fields: **`#1a1e24`** (charcoal-navy); text `#fff` on slab,
    `#1a1e24` on photo side.
  - Overlay: `rgba(255,255,255,0.85)` over the photo.
  - Separators/borders: **`rgba(243,239,245,0.33)`** (2px bottom rule on
    every field, 1px left rule between sibling columns, select-arrow strip
    bg); glyphs `#f3eff5`; placeholder `rgba(255,255,255,0.4)`.
  - Font: **Montserrat 400/700** (Google Fonts), NO display font.
  - Fields: `#1a1e24` bg, `#fff` 18px text, 100px height, `border-radius: 0`
    (sharp), 2px `rgba(243,239,245,0.33)` bottom border only, `padding-top:
25px`. Labels: white, weight 400, `capitalize`, absolute left 10px top
    10px.
  - Select arrow: `➜` (U+279C) rotated 90°, `#f3eff5` 14px, on a
    `rgba(243,239,245,0.33)` 24×100px strip at right 0 bottom 0.
  - Swap glyph: `⇌` (U+21CC), 28px `#f3eff5`, 40×40, between the date
    fields, hidden <768px.
  - Button: `#72b01d` bg, `#fff` weight-700 `capitalize` text, 100px height,
    full width, hover/focus `opacity: 0.9`.
  - Layout: form LEFT 4/12 (`col-md-4 pull-7`), CTA RIGHT 7/12
    (`col-md-7 push-5`) — MIRRORED vs Skyly (Booking 19).
  - Responsive: 3-col date/guests row stays 3-up ≥768px (`col-sm-4`), stacks
    below; CTA/form stack below 992px; ⇌ hidden <768px (`.hidden-xs`).
- **KEY DIFFERENCES vs Skyly (Booking 19, same family):** Skyly = light
  sky-blue FLIGHT variant (white 642px card, `#4fa3e3`, Lato, CTA LEFT/form
  RIGHT, radio pills, floating `#98c9ee` labels, 65px 4px-radius fields).
  Coastly = dark-charcoal HOTEL variant (solid `#1a1e24` slab, `#72b01d`
  lime green, Montserrat, CTA RIGHT/form LEFT, destination+dates+guests,
  white capitalize labels, 100px SHARP square fields, ⇌ swap glyph).
- **KEY DIFFERENCES vs Guestly (Booking 18, the other dark variant):**
  Guestly = near-black `#0f0f0f` card on a WHITE page + photo header panel
  INSIDE the card, Medula One, orange `#ff9000`, PILL inputs. Coastly =
  `#1a1e24` fields flush on a WHITE-WASHED PHOTO page (no inner panel),
  Montserrat, lime green `#72b01d`, SQUARE inputs, white labels, 1px column
  separators, ⇌ glyph.
- **Recreation decisions:** Tailwind grid (NO Bootstrap); single-section
  page — NO Navbar/Footer; bg = `picsum.photos/seed/coastly-1/1920/1080`
  cover/center + white overlay div; native date inputs; labels as REAL
  `<label htmlFor>` (source uses non-semantic `<span>`); `capitalize` (NOT
  uppercase) label casing; form slab = `#1a1e24` container with 0-gap
  fields; select arrow = rotated `➜` or lucide ChevronDown in a 24×100px
  strip; ⇌ = lucide ArrowLeftRight or U+21CC; title "Coastly — Hotel
  Booking Form Template"; "Check availability" validates (destination +
  dates required, check-out ≥ check-in) and shows a summary (documented
  recreation choice — source is static).

## Tasks (implementation order, TDD)

1. Scaffold `apps/coastly` (copy simplest existing app, rename package to
   `@free-react-templates/coastly`); `npm install` at root to register the
   workspace in `package-lock.json` (implementer's job — prep stream never
   touches the lockfile); verify `grep -c "free-react-templates/coastly"
package-lock.json`.
2. `index.html`: title "Coastly — Hotel Booking Form Template", Google Fonts
   `<link>` Montserrat 400/700.
3. `src/index.css`: `@theme` tokens — brand `#72b01d` (lime), slab `#1a1e24`,
   separator `rgba(243,239,245,0.33)`, glyph `#f3eff5`, placeholder
   `rgba(255,255,255,0.4)`; Montserrat font-family.
4. Tests (red) → `App.tsx` + components:
   - `Hero.tsx`/`BookingSection.tsx` — 100vh section, picsum bg
     (`coastly-1/1920/1080`) cover/center, white overlay div, vertical
     centering, two-column grid (form left 4/12, CTA right 7/12).
   - `BookingForm.tsx` — dark slab: destination input (label "Your
     Destination", placeholder "Enter a destination or hotel name"), 3-col
     row (Check In date required, ⇌ swap glyph, Check out date required,
     Guests select 1/2/3 + arrow strip), column separators, 2px bottom
     borders, 100px sharp fields.
   - `Cta.tsx` — h1 "Book Now!" + paragraph.
   - Submit: validate (destination, dates, check-out ≥ check-in) → summary
     or validation messages; hover/focus opacity 0.9.
   - Mobile: row stacks <768px, ⇌ hidden <768px, CTA stacks above form.
5. `scripts/verify-app.sh coastly` → green; `npm run spec:validate`.
6. PR description must include: source template (ColorLib Booking 2,
   `https://colorlib.com/wp/template/colorlib-booking-2/`), live demo URL
   analyzed (`https://colorlib.com/etc/bforms/colorlib-booking-2/`), design
   tokens (`#72b01d`, `#1a1e24`, Montserrat), what differs (Coastly name,
   picsum placeholders, real `<label>`s, interactive validation summary).
7. Ship: TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`;
   deploy URL `https://free-react-templates-coastly.surge.sh/`.
