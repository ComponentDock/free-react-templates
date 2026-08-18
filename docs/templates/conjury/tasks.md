# Conjury (ColorLib Wizard 2) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-conjury`.

## Design notes (replication findings)

- **Original:** ColorLib "Colorlib Wizard 2" — a 4-step hotel reservation
  wizard (source: https://colorlib.com/wp/template/colorlib-wizard-2/).
  TEMPLATES.md line 857, single copy (`grep -c
'wp/template/colorlib-wizard-2/'` = 1).
- **Preview DOM analyzed:** https://colorlib.com/etc/bwiz/colorlib-wizard-2/index.html
  (HTTP 200, ~12.5 KB HTML, `<title>FormWizard_v2</title>`). **The
  preview.colorlib.com URL is 404 for this template** — the wizard demos live
  under colorlib.com/etc/bwiz/. Stylesheet `css/style.css` (~10.3 KB) parsed
  for tokens; images sampled with PIL; `js/main.js` read for behavior. Stack
  is jQuery + jquery.steps — recreate all wizard behavior client-side in
  React (no jQuery).
- **Screenshot:** `colorlib-free-wizard-2.jpg` (1200×972, verified in the
  browser): browser window on a soft peach/rose gradient; card with a luxury
  hotel photo on top and "YOUR RESERVATION" in a thin-outlined white box;
  deep-navy wizard panel below with vertical step list (step 1 gold), underline
  dropdown date fields, and a gold pill "BOOK NOW →". Matches the live demo.
- **New name:** Conjury — single lowercase word continuing the wizard spell
  series (Conjure, Banish, Dispel, Abjure, Bewitch, Enthrall, Spellbind,
  Beguile, Mesmerize, Incant, Stepwise). NOT "colorlib-wizard-2" — never
  reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** DARK navy card on a warm
  peach page. Navy `#012353` panel (texture tile is flat navy — sample it as
  solid), gold `#edc948` accents (buttons/active step/prices/links, hover
  `#d4b43f`), slate `#5d718e` input underlines, light blue `#81acee`
  dropdown popups, white text everywhere on navy, white boards with navy text
  on steps 2/4, pill buttons (`border-radius 21px`). Fonts: Poppins 400/500 +
  Bitter 400 (Google Fonts). Banner 909×316 hotel photo with overlaid title in
  a white-outlined box.

## Structure (1:1, section order — from the live DOM)

1. **Shell** — full-viewport warm-peach gradient (`#fed6b3 → #fec7a0`,
   corners `#d39076`, fallback `#f9f6f1`) approximated as a CSS gradient;
   centered card `max-w-[909px]`.
2. **Banner header** — hotel photo strip (picsum placeholder,
   `seed/conjury-banner/909/316`), centered "YOUR RESERVATION" (Bitter 30px
   uppercase white, 1px `rgba(255,255,255,0.5)` bordered box, padding
   9px 23px, letter-spacing 0.3px).
3. **Wizard panel** — solid navy `#012353`, padding ~62px 60px 58px 62px
   (mobile: 50px 20px); two columns: steps rail (26.05% + 68px gutter) and
   content (73.95%).
4. **Steps rail (inside panel, left)** — 3px `rgba(242,242,242,0.4)` left
   border; 4 links "1. Choose Date" … "4. Confirmation" (31px tall, 18px left
   padding, 16px gaps, Poppins-Medium 15px, white; active = gold `#edc948`
   with full-height 3px gold bar at `left:-3px`). All steps clickable
   (`enableAllSteps`), fade transition.
5. **Step 1 — Choose Date** — row 1: Check in / Check out (underline date
   fields, inline suffix label "Check in :" bottom-left, calendar icon
   bottom-right, today's date prefilled, format "dd - m - yyyy"); row 2:
   Duration (1–5 Nights) + Room (1–5 Rooms) custom dropdowns; centered gold
   pill "BOOK NOW" (164px, arrow icon after label) → next step.
6. **Step 2 — Choose Room** — two columns: left white board (navy text; Room
   1 : Small Room, Room 2 : Luxury Room, line row: Adult : 2 + Children : 0);
   right: two date fields (persist step-1 values, calendar icons) + two
   labeled groups "Room 1 :" / "Room 2 :" each with Adults (1–3) and Children
   (No Child/1/2/3) dropdowns; gold pill "BOOK NOW" → next step.
7. **Step 3 — Make a Reservation** — rows: First Name + Last Name; Phone +
   Mail; full-width Address; full-width Special Requirements textarea
   (~79px); custom terms checkbox ("I have read and accept the terms and
   conditions." with gold link); wider gold pill "BOOK BY EMAIL" (195px) →
   next step. Terms required before advancing (recreation improvement —
   source has zero validation; also the source button is a dead end, see 9).
8. **Step 4 — Confirmation** — two columns: left white board (Check In /
   Check Out with the chosen dates); right bill (1px white border): Room 1
   Small Room $34 + Adult 2 / Children 0; Room 2 Luxury Room $23 + Adult 4 /
   Children 1; Rooms & Services $80; Vat 8% $08; Total Price $88 (gold
   prices); payment radios "Full Payment" (checked) / "10% Deposit" (custom
   12px circles, 4px white dot); below them the "20% Deposit — Pay the rest
   on arrival — $78" row; gold pill "CONFIRMATION" (195px).
9. **Completion** — clicking CONFIRMATION shows a success state (recreation
   improvement: the original button has no handler and the demo ends there).
10. **Footer** — Component Dock line (monorepo mandate; source has none).

## Implementation tasks (for the implementer)

- [ ] Scaffold `apps/conjury` (copy simplest existing app; package
      `@free-react-templates/conjury`; `public/CNAME` =
      `conjury.free.componentdock.com`; homepage
      `https://conjury.free.componentdock.com`; run `npm install` at root so
      the lockfile registers the workspace; verify with
      `grep -c "free-react-templates/conjury" package-lock.json`).
- [ ] `index.html`: Poppins (400/500) + Bitter (400) Google Fonts links;
      title "Conjury".
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #edc948`,
      `--color-brand-dark: #d4b43f`, `--color-navy: #012353`,
      `--color-slate: #5d718e`, `--color-skyline: #81acee`, fonts
      `--font-sans` Poppins, `--font-display` Bitter.
- [ ] Components: `Navbar` not needed — this is a form-only template; build
      `ReservationWizard` (state machine: step index, form state,
      `aria-current` steps, fade transition), `StepRail`, `DateField`
      (suffix label + calendar icon + picker), `SelectField` (custom
      dropdown: toggle, outside-click close, option select), `SummaryBoard`,
      `Bill` (prices + payment radios + deposit row), `Checkbox` (terms),
      `PillButton` (gold, arrow icon), `SuccessCard` (final state).
- [ ] Date picker: no new dependency needed for fidelity — a lightweight
      inline month-grid picker component (or native `<input type="date">`
      styled to the underline look) is fine; must open on focus/click and
      write "dd - m - yyyy" into the field.
- [ ] State: dates, duration, room count, per-room adults/children, contact
      fields, terms accepted, payment option — persist across steps; step 2
      date fields and step 4 bill/board reflect earlier choices.
- [ ] Icons via lucide-react: `ChevronDown` (selects/dropdowns), `Calendar`
      (date fields), `ArrowRight` (buttons), `Check` (checkbox).
- [ ] Banner image: `https://picsum.photos/seed/conjury-banner/909/316`
      (or a seed variant) — never copy the source JPEG.
- [ ] Responsive: <768px stack everything (sidebar on top, form rows single
      column, board/bill below), paddings 20px; test mobile menu-free layout.
- [ ] Footer: "Made with Component Dock" linking to
      https://www.componentdock.com/.
- [ ] Tests: Vitest + Testing Library, one describe per component,
      scenario-style `it` blocks mirroring the spec, 100% coverage.
- [ ] Self-review checklist (`docs/self-review.md`), run
      `npm run verify:app -- conjury` (or `scripts/verify-app.sh conjury`),
      commit `feat: Conjury — hotel reservation wizard (ColorLib Wizard 2)`.
