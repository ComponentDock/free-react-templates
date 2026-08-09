# Roomly (ColorLib Regform 25) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Reg Form V25" — free Bootstrap "Book A
> Room" form (https://colorlib.com/wp/template/colorlib-regform-25/) under
> the NEW name **Roomly** (play on "room" — the hotel room booking theme;
> single lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-09), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Reg Form V25" — free Bootstrap "book a
  room" form (page title: "Colorlib Reg Form V25 - Free Bootstrap Book A
  Room Form"; inner HTML `<title>`: "RegistrationForm_v9 by Colorlib"),
  Booking Forms category, Bootstrap-era static HTML + jQuery (Air
  Datepicker, no Bootstrap grid in this one). The recreation brands itself
  **Roomly**.
- **Preview DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/regform/colorlib-regform-25/` — HTTP 200, 3.6 KB
  HTML + `css/style.css` 239 lines (5.5 KB). ⚠ The official
  `https://preview.colorlib.com/theme/colorlib-regform-25/` returns **404**
  (no Astro-era mirror for this classic template — same as sibling Booking
  Forms preps). The ColorLib template page's LIVE PREVIEW button is the
  source of truth: `https://colorlib.com/etc/regform/<slug>/` (confirmed by
  reading the Preview link href on the template page).
- **⚠ KEY TRAP:** the page is NOT a full landing page — it is a SINGLE
  screen: one white room-booking card over a full-bleed canyon photo. No
  navbar, no hero copy, no services, no footer. Do not invent sections;
  replicate exactly: background photo → floating card (h3 → 3 form rows →
  checkbox → button).
- **Visual design (screenshot `colorlib-reg-form-25.jpg`, 1200×972,
  browser-verified + live render):** golden-hour adventure-travel aesthetic.
  Background = canyon photograph (bearded traveler in a straw hat + light
  blue-grey tee, seen from behind, overlooking a rocky American-Southwest
  landscape — warm oranges/yellows on distant peaks, deep browns/greys in
  shadow). Left: clean white card, subtle drop shadow, "FIND A ROOM" in
  bold uppercase blue `#3e91f7`, two-column field grid, small custom
  checkbox, bright blue "BOOK ROOM" button. Medium blue accent vs white +
  photo is the whole palette.
- **Section order (1:1, verified from live DOM):**
  1. **Background** (`div.wrapper`) — `min-height: 100vh`, photo
     `bg-registration-form-9.jpg` `no-repeat right center`, `background-size:
cover`; ≤1199px → `center center`. No header/nav/footer.
  2. **Card frame** (`div.inner`) — absolute, `top: 50%; left: 11.07%;
translateY(-50%)`, `width: 511px`, `box-shadow: 0 0 10px
rgba(0,0,0,0.2)`, `bg-inner.png` repeat frame `padding: 7px`; ≤991px →
     `width: 60%`; ≤767px → static, `width: 100%`, no shadow/padding.
  3. **Form** (white, `padding: 57px 46px 55px`) →
     - `h3` "Find a Room": uppercase 35px Poppins-Medium 500 `#3e91f7`,
       letter-spacing 3px, margin-bottom 22px.
     - **Row 1** (`.form-row`): Name * (text, placeholder "Your Name") +
       Phone * (text, placeholder "Phone") — 50/50, 25px gap.
     - **Row 2**: Check-in * + Check-out * — label + `lnr lnr-calendar-full`
       icon (left 16px, top 43px, 15px `#666`) + `.form-control
datepicker-here` (Air Datepicker, `data-date-format="dd M yyyy"`,
       padding-left 39px).
     - **Row 3** (`.form-row.last`): Adults * + Chidren * (sic) — selects
       options 1–6 + `zmdi zmdi-chevron-down` icon (right 16px, top 42px,
       15px `#666`). Recreation: fix spelling to "Children *".
     - **Checkbox** (`.checkbox`): hidden input + `.checkmark` (12×13px,
       `#ebebeb` bg, 1px `#ccc`, radius 2px, check glyph `#333`) + label
       "No one rejects, dislikes, or avoids pleasure itself." (lorem filler
       → keep same KIND: e.g. "No-smoking room preferred.").
     - **Button**: "Book Room" — 173×42px, `margin-top: 30px`, bg `#3e91f7`,
       white uppercase Muli-SemiBold 15px, letter-spacing 3px; hover bg
       `#0072fd` + label slide-swap animation via `data-text` (recreate as
       color change or simple transition).
- **Inputs (shared `.form-control`):** 1px solid `#e6e6e6` border, height
  42px, padding `0 14px`, font Muli 13px `#666`; labels Muli-SemiBold 17px
  `#4c4c4c` margin-bottom 8px. **No border radius anywhere except the 2px
  checkbox checkmark.**
- **JS behaviors (original):** Air Datepicker on Check-in/Check-out
  (`vendor/date-picker/js/datepicker.js` + `datepicker.en.js`, format
  `dd M yyyy`); selects with chevron icons; custom checkbox; button hover
  text-swap. Form has no `action` → no backend. Recreate: React state date
  inputs (native `type="date"` or sibling booking-app datepicker pattern),
  selects 1–6, custom checkbox with accessible label, zod validation (name +
  phone required; check-in/out required, check-out ≥ check-in; adults ≥ 1)
  - per-field errors + success message — per repo form conventions.
- **Responsive:** ≤1199px bg center; ≤991px card `width: 60%`; ≤767px card
  static `100%` no shadow, bg removed (`background: none`), form padding
  `30px 20px`, rows stack (block) full-width `margin-bottom: 25px`.
- **Neighbor check (2026-08-09):** sibling preps in the same family: Islet
  (Regform 11, dark translucent panel on Hawaii photo, mustard `#f8ba0f`),
  Roomzy (Booking 10, white 2-col form), Coastly/Bookly (Booking 2) — none
  uses the white card + blue `#3e91f7` + canyon photo; keep Roomly exact.

## Tasks (implementation order)

- [ ] Scaffold `apps/roomly` (copy simplest existing app, rename package to
      `@free-react-templates/roomly`; NOT `apps/colorlib-regform-25`);
      `npm install` at root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #3e91f7` (heading + button bg, hover
      `#0072fd`), `--color-label: #4c4c4c`, `--color-input: #666`,
      `--color-border: #e6e6e6`, `--color-check: #ebebeb` (checkmark bg) +
      `#ccc` border / `#333` glyph
- [ ] `index.html`: Poppins 400/500 + Muli 400/600 Google Fonts `<link>`,
      title "Roomly — Hotel Room Booking Template"
- [ ] Background: full-viewport `picsum.photos/seed/roomly-1/1920/1080`
      photo, `bg-cover bg-right` desktop / `bg-center` ≤1199px
- [ ] Card: absolute `left-[11.07%]` vertically centered, `max-w-[511px]`,
      `shadow-[0_0_10px_rgba(0,0,0,0.2)]`, 7px neutral frame (light solid
      border — NOT the `bg-inner.png` tile), form padding `57px 46px 55px`
- [ ] Heading: "Find a Room" — uppercase, 35px, Poppins-Medium, `#3e91f7`,
      letter-spacing 3px
- [ ] Row 1: Name * (placeholder "Your Name") + Phone * (placeholder
      "Phone"), 50/50 with 25px gap
- [ ] Row 2: Check-in * + Check-out * date inputs with `Calendar` icon
      (left) + date picker, placeholder/format `dd M yyyy`
- [ ] Row 3: Adults * + Children * selects (options 1–6) with
      `ChevronDown` icon (right, `#666`)
- [ ] Custom checkbox: `#ebebeb` checkmark 12×13px, 1px `#ccc`, 2px radius,
      `#333` glyph on check, preference-note label (e.g. "No-smoking room
      preferred.")
- [ ] Button "Book Room": 173×42px, `#3e91f7` → hover `#0072fd`, white
      uppercase letter-spacing 3px, no radius
- [ ] Validation: zod schema (name + phone required; check-in/out required;
      check-out ≥ check-in; adults ≥ 1); per-field errors; success message
      on valid submit (client-side only — no backend)
- [ ] Responsive: ≤991px card `width: 60%`; ≤767px card static full-width
      no shadow, bg removed, form padding `30px 20px`, fields stacked
      full-width with 25px gaps
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh roomly` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL (note the 404 on
      `preview.colorlib.com/theme/` and the real host
      `colorlib.com/etc/regform/colorlib-regform-25/`), tokens, what
      differs (Roomly name, corrected "Children" spelling, placeholder
      photo); merge immediately; `[~]`→`[x]` + surge URL +
      `npm run readme:status`
