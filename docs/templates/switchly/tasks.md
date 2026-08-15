# Switchly (ColorLib Checkbox 07) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-switchly`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 07" — seventh of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-07/).
  TEMPLATES.md line 737 — mark that line `[x]` when done (single row).
  NOTE: unlike Checkbox 01–03 (Tickbox/Picks/Ticktag), each item in this
  series is a DIFFERENT variant design — Checkbox 07 is the two-switch
  on/off-toggle variant with in-track "ON/OFF" labels, NOT the Tickbox
  six-variant list, NOT the Checkly sports pills, NOT the Toggly mini-switch.
  Do not reuse the Tickbox/Toggly app blindly; verify the live DOM for each
  new item.
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-07/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-07/` (HTTP 200,
  8.2 KB HTML, verified 2026-08-15). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-07/css/style.css`
  (~222 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (loaded but UNUSED here — no icon glyphs in this variant).
  Google Font **Poppins** 300–500 (@font-face in head). Cross-checked with
  the TEMPLATES.md screenshot (`checkbox-07.jpg` 1200×972, browser-viewed
  2026-08-15) — all match. Demo brands itself "Checkbox #07"; recreation
  uses the NEW name **Switchly**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  light `#fafafa`. One centered column: black 28px heading "Checkbox #07",
  then 18px muted `rgba(0,0,0,0.5)` sub-heading "On Off Switch Toggle", then
  TWO toggle switches stacked vertically, each centered in its own row:
  1. **Toggle 1 — OFF (unchecked):** `#e6e6e6` track with tiny right-aligned
     "OFF" text; white 24×24 knob at LEFT (shadow `0 3px 8px
rgba(0,0,0,0.2)`).
  2. **Toggle 2 — ON (checked):** `#d0a8dc` track with left-aligned white
     "ON" text; `#bd83ce` knob slid 31px RIGHT (shadow `0 3px 8px
rgba(189,131,206,0.7)`).
     No navbar, no footer, no images — just the one `ftco-section`.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5
.pb-md-4` "Checkbox #07" (28px, #000, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4.text-center` (~350px
     centered column) → `h5.heading-section` → `<small>On Off Switch
Toggle</small>` (18px rgba(0,0,0,0.5) centered).
  4. Two `div.w-100.d-flex.justify-content-center` rows, each holding one
     `div.checkbox` → `<input type="checkbox" id="cbx|cbx2"
style="display:none" [checked]>` + `<label for="cbx|cbx2"
class="toggle"><span></span></label>`. Toggle 1 (`#cbx`) unchecked;
     toggle 2 (`#cbx2`) has `checked` (ON by default).
- **Design tokens (from `css/style.css`):**
  - Brand accent `#bd83ce` (muted lavender-purple) — checked knob; checked
    track `#d0a8dc`; unchecked track `#e6e6e6`; knob `#fff`.
  - Page bg `#fafafa`; heading `#000` 28px; sub-heading `rgba(0,0,0,0.5)`
    18px; in-track label 10px; "ON" text `#fff`.
  - Shadows: `0 3px 8px rgba(0,0,0,0.2)` (unchecked knob) /
    `0 3px 8px rgba(189,131,206,0.7)` (checked knob); halo
    `rgba(189,131,206,0.5)` 56px.
  - Base: body "Poppins", Arial, sans-serif, 14px, lh 1.8, color gray.
  - Toggle: label 50×30px; track 50×22px, border-radius 30px, padding
    2px 8px; knob 24×24px, border-radius 50%; knob travel `translateX(31px)`.
  - Transitions: track background 0.2s ease; knob all 0.2s
    cubic-bezier(0.8,0.4,0.3,1.25) + background 0.15s ease; halo 0.4s ease.
- **Recreation decisions:** NO icons needed (the "OFF"/"ON" labels are
  `::before` content; font-awesome unused) — render the track text as a real
  `<span>`; knob is a plain rounded `<span>`, no lucide import required.
  Poppins via Google Fonts `<link>`; keep a real hidden
  `<input type="checkbox">` inside the label for a11y (click + Space toggle)
  — the source uses `display:none` which kills keyboard focus, so use the
  visually-hidden pattern (absolute, opacity 0) + `aria-label` ("Toggle 1" /
  "Toggle 2") per repo conventions; no external libs. Demo has no footer —
  add a MINIMAL footer with the mandated Component Dock link
  (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/switchly`; rename package to
   `@free-react-templates/switchly`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `switchly.free.componentdock.com`, `"homepage"` =
   `https://switchly.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: `#fafafa` page bg, `#bd83ce` purple
   accent, `#d0a8dc` checked track, `#e6e6e6` unchecked track, `#000`
   heading, `rgba(0,0,0,0.5)` sub-heading, `rgba(189,131,206,0.5)` halo,
   `rgba(189,131,206,0.7)` checked shadow, `rgba(0,0,0,0.2)` unchecked
   shadow; Poppins (300–500) via Google Fonts in `index.html`.
3. Components (src/components/): `ToggleSwitch` (hidden checkbox input +
   label wrapper + track span with "OFF"/"ON" + knob span + halo span; props:
   label (aria-label), defaultChecked; controlled `checked` state; click +
   Space toggle; focus-visible ring; `prefers-reduced-motion` via Tailwind
   `motion-reduce:` variants) and `Footer` (minimal Component Dock link).
   Optional: `DemoHeading`.
4. `src/App.tsx` composes: heading row + sub-heading + two `ToggleSwitch`
   components (toggle 1 default unchecked, toggle 2 default checked) in one
   centered section + footer; document title "Switchly — On Off Switch
   Toggle".
5. Tests FIRST (red) per spec scenarios (heading, sub-heading, two switches
   with default states, click toggle swaps track/knob colors + ON/OFF label +
   knob position, keyboard toggle, aria-label names, focus ring, reduced
   motion, footer link); then implementation; 100% coverage.
6. Verify: `scripts/verify-app.sh switchly`; `npm run spec:validate`.
7. PR: `feat/template-switchly` → squash-merge to main; PR description
   includes source template, preview URL (incl. the /theme/bootstrap/
   sub-path caveat), design tokens, what differs (visually-hidden input +
   aria-label instead of display:none, footer added per repo mandate).
