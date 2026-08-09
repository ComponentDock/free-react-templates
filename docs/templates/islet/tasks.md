# Islet (ColorLib Regform 11) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Reg Form V11" — free BOOKING FORM w/
> datepicker widget (https://colorlib.com/wp/template/colorlib-regform-11/)
> under the NEW name **Islet** (a small island — the Hawaii travel theme;
> single lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-09), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Reg Form V11" — free booking form with
  datepicker widget, by Rok Krivec (page title: "Colorlib Reg Form V11 -
  Free Booking w/ Datepicker Widget"), Booking Forms category, Bootstrap-era
  static HTML + jQuery (jquery-ui datepicker, no Bootstrap grid in this one).
  The recreation brands itself **Islet**.
- **Preview DOM analyzed (verified 2026-08-09):**
  `https://colorlib.com/etc/regform/colorlib-regform-11/` — HTTP 200, 3.2 KB
  HTML + `css/style.css` 13.5 KB (355 lines). ⚠ The official
  `https://preview.colorlib.com/theme/colorlib-regform-11/` returns **404**
  (no Astro-era mirror for this classic template — same as sibling Booking
  Forms preps). The ColorLib template page's LIVE PREVIEW button is the
  source of truth: `https://colorlib.com/etc/regform/<slug>/` (confirmed by
  reading the Preview link href on the template page).
- **⚠ KEY TRAP:** the page is NOT a full landing page — it is a SINGLE
  screen: header strip (2 images) + one booking form panel over a full-bleed
  photo. No navbar links, no hero copy, no services, no footer. Do not
  invent sections; replicate exactly: header → panel → (background).
- **Visual design (screenshot `colorlib-reg-form-11.jpg`, 1200×972,
  browser-verified + live render):** cinematic travel aesthetic. Background =
  split-level over/underwater photo (tropical island above, submerged stone
  ruins in turquoise/teal below). Header: white "HAWAII" wordmark (top-left,
  image `header-text.png` → recreate as TEXT) + white grid/waffle icon
  (top-right, image `dots.png` → lucide `Grid`). Center: dark glass panel
  `rgba(11,13,24,0.6)` radius 10px, small white uppercase labels, white
  rounded inputs, mustard-yellow `#f8ba0f` "Book now" button. Font: Poppins
  (body weight 600, labels 500, 14px base).
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`div.header`) — flex, `align-items: center`,
     `justify-content: space-between`, padding 50px 57px; left = white
     "HAWAII" wordmark, right = grid/waffle icon. No links.
  2. **Booking panel** (`div.container`) — width 960px, background
     `rgba(11, 13, 24, 0.6)`, `margin: 265px auto`, `border-radius: 10px`;
     `<form#booking-form.booking-form method="POST">` padding
     `35px 70px 51px 70px`; one `.form-group` row (flex, space-between,
     align-center) of five cells:
     - **Destination** (230px): label + text input, placeholder "EG. HAWAII".
     - **From** (155px, `.form-icon`): label + datepicker input, placeholder
       "Pick a date", calendar trigger icon right 16px/top 40px `#999`.
     - **To** (155px, `.form-icon`): same, `id="date_to"`.
     - **Quantity** (80px, relative): label + up chevron (absolute right
       12px, top 23px, 18px `#999`) + number input (value 0, min 0, text
       `#999`) + down chevron (absolute right 12px, bottom 0).
     - **Submit** (140px): `input.submit` value "Book now" — `#f8ba0f` bg,
       white text, 14px, padding 15px 20px, `margin-top: 23px`, hover
       `#ce9906`.
  3. **Body background** — `form-img.jpg`, cover, center, white Poppins
     weight-600 text. (No footer.)
- **Inputs (shared):** white bg, radius 5px, border none, padding 13px 20px,
  font-size 16px, weight 600, color `#222`, placeholder `#999`.
- **JS behaviors (original):** jquery-ui datepicker on From/To; `Tang()` /
  `Giam()` quantity ± (min 0); POST submit (no server → reload). Recreate:
  React state date inputs (native `type="date"` or sibling booking-app
  datepicker pattern), stepper buttons with `aria-label`s, zod validation
  (destination required, From ≤ To, quantity ≥ 1) + per-field errors +
  success message — per repo form conventions.
- **Responsive:** ≤768px → panel `width: calc(100% - 30px)`, `.form-group`
  column, all fields `width: 100%` + `margin-bottom: 20px`; ≤480px → form
  padding `35px 30px 51px`.
- **Neighbor check (2026-08-09):** sibling preps in the same family:
  Roomzy (Booking 10, white 2-col form), Wingly/Soarly/etc. (Booking 5–9)
  — none uses the dark translucent panel + mustard `#f8ba0f` on a photo;
  keep Islet exact.

## Tasks (implementation order)

- [ ] Scaffold `apps/islet` (copy simplest existing app, rename package to
      `@free-react-templates/islet`; NOT `apps/colorlib-regform-11`);
      `npm install` at root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #f8ba0f` (submit bg, hover `#ce9906`),
      `--color-panel: rgba(11,13,24,0.6)`, `--color-input: #222`,
      `--color-muted: #999`; radii 10px (panel) / 5px (inputs)
- [ ] `index.html`: Poppins 300–900 Google Fonts `<link>`, title "Islet —
      Travel Booking Template"
- [ ] Background: full-viewport `picsum.photos/seed/islet-1/1920/1080`
      photo, `bg-cover bg-center`, white Poppins w600 text
- [ ] Header: flex `space-between` padding 50px 57px — "HAWAII" wordmark as
      styled text (white, uppercase, bold) left; lucide `Grid` icon white
      right (aria-label "Menu")
- [ ] Booking panel: centered `max-w-[960px]`, `bg-[rgba(11,13,24,0.6)]`,
      rounded-[10px], `mt-[265px]` desktop (or flex centering equivalent),
      form padding `35px 70px 51px`
- [ ] Form row: flex `space-between` `items-center` — Destination (230px,
      placeholder "EG. HAWAII"), From + To (155px each, date inputs with
      calendar trigger icon, placeholder "Pick a date"), Quantity (80px,
      stepper with up/down chevrons, min 0, value shown in `#999`), submit
      "Book now" (140px, `#f8ba0f` → hover `#ce9906`, white w600 14px,
      padding 15px 20px, radius 5px)
- [ ] Validation: zod schema (destination required; From/To required; From
      ≤ To; quantity ≥ 1); per-field errors; success message on valid submit
      (client-side only — no backend)
- [ ] Responsive: ≤768px panel `calc(100% - 30px)`, fields stack full-width
      with 20px gaps; ≤480px form padding `35px 30px 51px`
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh islet` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL (note the 404 on
      `preview.colorlib.com/theme/` and the real host
      `colorlib.com/etc/regform/colorlib-regform-11/`), tokens, what
      differs; merge immediately; `[~]`→`[x]` + surge URL +
      `npm run readme:status`
