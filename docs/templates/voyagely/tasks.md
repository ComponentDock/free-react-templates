# Voyagely (ColorLib Regform 11) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Reg Form V11" — free booking-with-datepicker
> template (https://colorlib.com/wp/template/colorlib-regform-11/) under the
> NEW name **Voyagely** (a voyage/travel booking — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-09), per the monorepo naming mandate (never
> reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Reg Form V11" — "The best free booking with
  datepicker widget based on Bootstrap with a user-friendly code structure for
  quick integration" (ColorLib meta description). Listed in TEMPLATES.md under
  **Booking Forms (22)** (line 323). The recreation brands itself **Voyagely**.
- **Preview URL — IMPORTANT (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/colorlib-regform-11/` returns **HTTP
  404** (classic-era template, not in the Astro-era
  `preview.colorlib.com/assets/js/products.js` product map). The **working
  live demo** is `https://colorlib.com/etc/regform/colorlib-regform-11/`
  (HTTP 200, title "Sign Up Form by Colorlib") — found via the demo link on
  the source template page. Use the `/etc/regform/` URL, NOT the
  preview.colorlib.com one.
- **Visual design (live render + screenshot `colorlib-reg-form-11.jpg`,
  1200×972, browser-verified — match 1:1):** immersive Hawaii travel hero.
  Full-viewport background photo split at the waterline — above: bright sky,
  clouds, grassy rocky headland; below: submerged statues on a teal-blue
  seabed. White bold uppercase "HAWAII" wordmark top-left, 2×2 grid (dots)
  menu icon top-right. Centered mid-screen: dark translucent booking
  container (`rgba(11,13,24,0.6)`, radius 10px) with a horizontal row of four
  white inputs (Destination "EG. HAWAII" · From · To · Quantity 0) each with a
  small white label, plus a bright yellow **"Book now"** button at the right
  end.
- **⚠ KEY TRAPS:**
  - This is a **one-section form-demo page** — NO navbar links, NO footer, NO
    extra content sections in the source. Do not invent sections; the header
    (wordmark + menu icon) and the booking container are the whole page. The
    menu icon has no navigation behavior in the source (no menu JS) — render
    it as a decorative/icon-only element.
  - The source wordmark is an IMAGE (`images/header-text.png`, "HAWAII") —
    recreate as styled text "VOYAGELY" (bold white uppercase Poppins); the
    grid icon is `images/dots.png` → lucide `LayoutGrid`. Never copy the
    images.
  - Source datepickers are jQuery UI (`showOn: "both"`, `dd-mm-yy`) — the
    repo convention is native `<input type="date">`; keep From/To with the
    absolutely-positioned calendar icon (right 16px, top 40px, `#999`) for
    the source look, and enforce To ≥ From.
  - Quantity stepper JS (`Tang`/`Giam`) clamps at **min 0** (minus does
    nothing at 0; plus increments from any value ≥ 0). No max. Native
    spin-button arrows are stripped in the source CSS — keep the chevron
    buttons only.
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`div.header` — flex, align-items center,
     justify-content space-between, padding 50px 57px): `images/header-text.
png` (90×28 "HAWAII") + `images/dots.png` (22×24 grid).
  2. **Booking container** (`div.container` — width 960px, bg
     `rgba(11,13,24,0.6)`, border-radius 10px, margin 265px auto) →
     `form.booking-form` (padding 35px 70px 51px 70px, method POST, no
     action) → `div.form-group` (flex, align-items center,
     justify-content space-between):
     - `form-destination` (230px): label "Destination" + text input
       placeholder "EG. HAWAII";
     - `form-date-from` (155px, `.form-icon`): label "From" + input
       placeholder "Pick a date" + `.ui-datepicker-trigger` calendar icon
       (absolute right 16px top 40px, color #999, 16px);
     - `form-date-to` (155px, `.form-icon`): label "To" + input "Pick a
       date" + calendar icon;
     - `form-quantity` (80px, relative): label "Quantity" +
       `span.modify-qty.plus` (chevron-up, absolute right 12px top 23px,
       color #999, z-index 99) + number input `#quantity` value 0 min 0
       (color #999) + `span.modify-qty.minus` (chevron-down, absolute
       right 12px bottom 0);
     - `form-submit` (140px): submit input "Book now".
  3. **No footer / no extra sections** in the source — the hero photo is the
     page background (`body` bg image, cover, center), not a section div.
- **CSS details worth matching:** inputs — border none, bg `#fff`, radius
  5px, padding 13px 20px, font-size 16px, weight 600, color `#222`,
  placeholder `#999`; labels — 12px weight 500 margin-bottom 2px; `.submit`
  — bg `#f8ba0f`, color `#fff`, 14px, padding 15px 20px, margin-top 23px,
  hover `#ce9906`; body — 14px, line-height 1.8, weight 600, color `#fff`.
  There IS an `h1` style in the source CSS (21px, white, centered,
  margin-bottom 28px) but NO h1 in the DOM — ignore it.
- **Responsive:** ≤768px — container `width: calc(100% - 30px)`,
  `.form-group` `flex-direction: column`, destination/date/quantity fields
  width 100% + margin-bottom 20px (submit stays full width of the column);
  ≤480px — form padding 35px 30px 51px 30px.
- **Icon mapping (source zmdi icon font → lucide-react):** zmdi-calendar-alt
  → `Calendar` · zmdi-chevron-up → `ChevronUp` · zmdi-chevron-down →
  `ChevronDown` · grid dots image → `LayoutGrid`.
- **Neighbor check (2026-08-09):** sibling Booking Forms preps: Reservly
  (Booking V1 — blue `#007bff` alpine card form), the whole booking family
  (`-ly` names: roomzy, roostly, stayly, ridely, triply, innly, lodgely,
  hostly, guestly, skyly, coastly, bookly, nestly, drivly, wingly, restly,
  sleeply, dozely, soarly). Voyagely's yellow `#f8ba0f` on dark translucent
  container over a travel photo is distinct — no token clashes; keep it exact.

## Tasks (implementation order)

- [ ] Scaffold `apps/voyagely` (copy simplest existing app, rename package
      to `@free-react-templates/voyagely`; NOT `apps/colorlib-regform-11`);
      `npm install` at root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #f8ba0f`, `--color-brand-hover:
    #ce9906`, `--color-panel: rgba(11,13,24,0.6)`, `--color-ink: #222`,
      `--color-muted: #999`, white text default (per spec)
- [ ] `index.html`: Poppins 300–900 Google Fonts `<link>`, title "Voyagely —
      Travel Booking Template"
- [ ] Full-viewport hero: seeded picsum bg (`picsum.photos/seed/voyagely-
    hero/1461/973` or 1920/1080), `background-size: cover`, center; header
      row (padding 50px 57px): "VOYAGELY" bold white uppercase text + lucide
      `LayoutGrid` menu icon (`aria-label="Menu"`)
- [ ] Booking container: 960px desktop (`calc(100% - 30px)` ≤768px),
      `rgba(11,13,24,0.6)` bg, radius 10px, margin 265px auto desktop; form
      padding 35px 70px 51px 70px (30px sides ≤480px)
- [ ] Form row (flex space-between, column ≤768px): Destination input
      (placeholder "EG. HAWAII", required) · From date input · To date input
      (both placeholder "Pick a date" + `Calendar` icon absolute right 16px
      top 40px, To ≥ From validation) · Quantity stepper (initial 0, min 0,
      `ChevronUp`/`ChevronDown`, `aria-label`s) · "Book now" submit
      (`#f8ba0f`, hover `#ce9906`, white text, radius 0/rectangular)
- [ ] Input styling per source: white bg, radius 5px, padding 13px 20px,
      16px w600 `#222`, placeholder `#999`, no native spin arrows on number
- [ ] Submit behavior: zod validation (destination + dates required) → on
      success show summary line ("Voyage to … from … to … for N guests"); on
      missing fields show per-field errors, no summary
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh voyagely` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL (`/etc/regform/` one + note the 404
      official preview), tokens, what differs (placeholder image, text
      wordmark, native date inputs, summary-on-submit, reworded branding);
      merge immediately; mark TEMPLATES.md "Colorlib Regform 11" row
      (Booking Forms, line 323) `[x]` + surge URL + `npm run readme:status`
