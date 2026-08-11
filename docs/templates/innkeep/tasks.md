# Innkeep (ColorLib Regform 25) — Tasks & Design Notes

> Recreation of ColorLib "Colorlib Regform 25" — free Bootstrap room-booking
> form template (https://colorlib.com/wp/template/colorlib-regform-25/) under
> the NEW name **Innkeep** (an inn/hotel reservation keeper — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md — verified 2026-08-09), per the monorepo naming mandate (never
> reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Regform 25" — "An easy-to-use free
  Bootstrap book a room form with a minimalist and versatile design that
  easily adapts to your branding" (ColorLib meta description). Listed in
  TEMPLATES.md under **Booking Forms (22)** (line 324). The recreation brands
  itself **Innkeep**.
- **Preview URL — IMPORTANT (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/colorlib-regform-25/` returns **HTTP
  404** ("Not Found" — classic-era template, not in the Astro-era
  `preview.colorlib.com/assets/js/products.js` product map). The **working
  live demo** is `https://colorlib.com/etc/regform/colorlib-regform-25/`
  (HTTP 200, title "RegistrationForm_v9 by Colorlib") — found via the demo
  link on the source template page. Use the `/etc/regform/` URL, NOT the
  preview.colorlib.com one. Same pattern as Voyagely (Regform 11).
- **Visual design (live render + screenshot `colorlib-reg-form-25.jpg`,
  1200×972, browser-verified — match 1:1):** adventure-travel backdrop — a
  person (light-blue tee, wide-brim beige straw hat) seen from behind looking
  out over a dramatic red-rock canyon with a river below (`background-size:
cover`, right-center on desktop, centered ≤1199px). Left side: a clean
  white form card with a soft drop shadow (`0 0 10px rgba(0,0,0,0.2)`) and a
  faint 7px textured frame. Heading "FIND A ROOM" in bright medium blue
  `#3e91f7` (uppercase, letter-spacing 3px). Flat white inputs with thin
  `#e6e6e6` borders; dark `#4c4c4c` labels with asterisks; solid blue
  `#3e91f7` "BOOK ROOM" button matching the heading. No navbar, no footer —
  one-section form-demo page.
- **⚠ KEY TRAPS:**
  - This is a **one-section form-demo page** — NO navbar links, NO footer, NO
    extra content sections. Do not invent sections; the background photo and
    the white form card are the whole page.
  - The source "Chidren *" label is a TYPO (missing 'l') — fix to "Children"
    in the recreation.
  - The checkbox copy "No one rejects, dislikes, or avoids pleasure itself."
    is placeholder Lorem-style text — paraphrase to an equivalent
    consent-style line (same KIND of content), e.g. "I agree to the booking
    terms and conditions."
  - Source datepickers are Air Datepicker (`dd M yyyy`, English) — the repo
    convention is native `<input type="date">`; keep the left-side calendar
    icon (lucide `Calendar`, left 16px top 43px, `#666`) and enforce
    Check-out ≥ Check-in.
  - The 7px card frame is a 66×66 PNG texture tile (`bg-inner.png`) repeated —
    approximate with a plain subtle light-gray frame (e.g. 7px `bg-neutral-100`
    padding ring or a light border), NEVER copy the PNG.
  - The button hover is a CSS label swap: visible `<span>` fades and moves
    down 40px while `button:after` (`content: attr(data-text)`) slides in
    from `translate(-30%,-25%)` to `translate(0,-25%)`. Recreate with a CSS
    transition on two stacked labels — the end state is the same "BOOK ROOM"
    text on `#0072fd`.
- **Section order (1:1, verified from live DOM):**
  1. **Wrapper** (`div.wrapper` — min-height 100vh, bg
     `url(images/bg-registration-form-9.jpg) no-repeat right center`, cover).
     The photo is the PAGE background, not a section div.
  2. **Inner frame** (`div.inner` — absolute, top 50%, left 11.07%,
     translateY(-50%), width 511px, padding 7px, bg `url(images/bg-inner.png)
repeat`, box-shadow `0 0 10px 0 rgba(0,0,0,0.2)`).
  3. **Form** (`<form action="">` — width 100%, padding 57px 46px 55px, bg
     #fff):
     - `h3` "FIND A ROOM" (uppercase 35px Poppins-Medium `#3e91f7`,
       letter-spacing 3px, mb 22px);
     - Row 1 (flex, mb 25px; each wrapper 50%, first margin-right 25px):
       Name * (input placeholder "Your Name") + Phone * (placeholder
       "Phone");
     - Row 2: Check-in * (label + `lnr-calendar-full` span absolute left
       16px top 43px 15px `#666` + `input.datepicker-here` padding-left
       39px, `dd M yyyy`, id dp1) + Check-out * (same, id dp2);
     - Row 3 (`.last`, mb 22px): Adults * (select 1–6 + `zmdi-chevron-down`
       absolute right 16px top 42px 15px `#666`) + Children * (same, fix
       typo);
     - `div.checkbox` (padding-left 22px): custom checkbox (input opacity 0
       - `.checkmark` 12×13px radius 2px bg `#ebebeb` border `#ccc`, check
         glyph `#333` via `:checked ~ .checkmark:after`) + consent line;
     - `<button data-text="Book Room">` (173×42px, mt 30px, bg `#3e91f7`,
       #fff uppercase Muli-SemiBold 15px letter-spacing 3px, hover
       `#0072fd` + label swap).
  4. **No footer / no navbar / no extra sections** in the source.
- **CSS details worth matching:** body — Poppins-Regular 13px `#999`;
  inputs/selects — Muli-Regular 13px `#666`, border 1px `#e6e6e6`, height
  42px, padding 0 14px (date inputs 0 0 0 39px); labels — Muli-SemiBold 17px
  `#4c4c4c` mb 8px; h3 — Poppins-Medium 35px `#3e91f7` uppercase
  letter-spacing 3px mb 22px; checkbox text is body 13px.
- **Responsive:** ≤1199px — bg position center center; ≤991px — card width
  60%; ≤767px — card width 100%, position static (no translateY), padding 0,
  box-shadow none; wrapper background none; form padding 30px 20px; form-rows
  block (fields 100% wide, mb 25px, first-child margin-right 0).
- **Icon mapping (source icon fonts → lucide-react):** lnr-calendar-full →
  `Calendar` (left side) · zmdi-chevron-down → `ChevronDown` (right side).
- **Neighbor check (2026-08-09):** sibling Booking Forms preps: Voyagely
  (Regform 11 — yellow `#f8ba0f` booking bar on dark translucent container
  over Hawaii photo), Reservly (Booking V1 — blue `#007bff` alpine card
  form). Innkeep's `#3e91f7` blue left-aligned white card over a canyon photo
  is distinct — no token clashes; keep it exact. Name does not collide with
  the `-ly` booking family (roomzy, roostly, stayly, innly, lodgely, hostly,
  guestly, bookly, nestly, restly, sleeply, dozely, wingly, triply, ridely,
  coastly, skyly, drivly, soarly).

## Tasks (implementation order)

- [ ] Scaffold `apps/innkeep` (copy simplest existing app, rename package to
      `@free-react-templates/innkeep`; NOT `apps/colorlib-regform-25`);
      `npm install` at root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-brand: #3e91f7`, `--color-brand-hover:
  #0072fd`, `--color-label: #4c4c4c`, `--color-ink: #666`,
      `--color-border: #e6e6e6`, `--color-check: #ebebeb` (per spec)
- [ ] `index.html`: Poppins 400/500 + Muli 400/600 Google Fonts `<link>`,
      title "Innkeep — Room Booking Template"
- [ ] Full-viewport page: seeded picsum bg
      (`picsum.photos/seed/innkeep-badlands/1920/1288` — screened 2026-08-11;
      `innkeep-bg` renders a camper van and was rejected), `background-size:
    cover`, right-center desktop / center ≤1199px / hidden ≤767px
- [ ] Form card: 511px desktop (60% ≤991px, 100% static ≤767px), left
      11.07%, vertically centered (top 50% + translateY(-50%)) desktop,
      shadow `0 0 10px rgba(0,0,0,0.2)`, 7px subtle frame (no copied PNG)
- [ ] Form (padding 57px 46px 55px desktop; 30px 20px ≤767px): "FIND A
      ROOM" heading (`#3e91f7` uppercase 35px w500 letter-spacing 3px)
- [ ] Row 1 (flex, 50/50, first mr 25px): Name input (placeholder "Your
      Name", required) · Phone input (placeholder "Phone", required) — flat
      white, border `#e6e6e6`, h-42px, 13px `#666`, labels `#4c4c4c` 17px
- [ ] Row 2: Check-in · Check-out native date inputs (`Calendar` icon left
      16px top 43px `#666`, padding-left 39px, dd MMM yyyy; Check-out ≥
      Check-in validation)
- [ ] Row 3 (`.last`): Adults · Children selects 1–6 default 1 (`ChevronDown`
      right 16px top 42px `#666`, native appearance hidden; "Children" typo
      fixed)
- [ ] Custom consent checkbox (12×13px radius 2px `#ebebeb`/`#ccc`, check
      `#333`) + paraphrased consent line
- [ ] "BOOK ROOM" button: 173×42px, mt 30px, bg `#3e91f7` white uppercase
      15px letter-spacing 3px, hover `#0072fd` + label slide-swap transition
- [ ] Submit behavior: zod validation (name, phone, check-in, check-out
      required) → on success show summary line ("Room booked for …: … to …,
      N adults, M children"); on missing fields show per-field errors, no
      summary
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh innkeep` passes; `npm run spec:validate`
- [ ] PR: source template, preview URL (`/etc/regform/` one + note the 404
      official preview), tokens, what differs (placeholder image, native
      date inputs, "Children" typo fix, paraphrased consent line,
      summary-on-submit, reworded branding); merge immediately; mark
      TEMPLATES.md "Colorlib Regform 25" row (Booking Forms, line 324)
      `[x]` + surge URL + `npm run readme:status`
