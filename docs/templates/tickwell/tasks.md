# Tickwell (ColorLib Checkbox 05) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tickwell`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 05" — fifth of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-05/).
  TEMPLATES.md line 735 — mark that line `[x]` when done (single row).
  NOTE: each item in this series is a DIFFERENT variant design — Checkbox 05
  is the notification-filter pill variant with yellow count badges and a
  magenta checked state, NOT the Tickbox six-variant list and NOT the
  Checkly mint sports-card variant. Do not reuse the Tickbox/Checkly app
  blindly; verify the live DOM for each new item.
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-05/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-05/` (HTTP 200,
  8.1 KB HTML, verified 2026-08-15). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-05/css/style.css`
  (~221 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (status icons = glyphs `\f1db` circle-thin /
  `\f058` check-circle). Google Font **Poppins** 300–500 (@font-face in
  head). Cross-checked with the TEMPLATES.md screenshot (`checkbox-05.jpg`
  1200×972, browser-viewed 2026-08-15) — all match. Demo brands itself
  "Checkbox #05"; recreation uses the NEW name **Tickwell**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  light `#fafafa`. One centered column: black 28px heading "Checkbox #05",
  then a narrow col-md-4 (~350px) plain list of three white pill-tag labels
  (bg `rgba(255,255,255,0.9)`, hairline border `rgba(0,0,0,0.1)`, text
  `rgba(0,0,0,0.8)`, 18px, 4px radius, 10px 20px padding, 10px gap), each
  with a pale-yellow count badge and a hollow-circle icon at the right end:
  1. **News** — badge **200**
  2. **Direct Message** — badge **234**
  3. **Followers** — badge **1,189**
     All three start UNCHECKED (no `checked` attribute in the DOM; the
     screenshot shows all hollow circles). The magenta `#c400c6` fill is
     interactive-only (checked state) — visible in no static screenshot,
     captured from the CSS. No navbar, no footer, no images — just the one
     `ftco-section`.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5
.pb-md-4` "Checkbox #05" (28px, #000, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (~350px centered
     column) → `ul.ks-cboxtags` (list-style none, padding 20px) → 3 × `li`:
     `<input type="checkbox" id="checkboxOne|Two|Three">` (absolute,
     opacity 0; NO `checked` on any — all unchecked by default) + `<label
for=...>` white pill: label text + `<span>` count badge; `::before` =
     status icon (24px, right end, `right: 40px`, unchecked `\f1db`
     `rgba(0,0,0,0.2)` → checked `\f058` `#fff`), 0.3s transition,
     `prefers-reduced-motion` respected.
- **Design tokens (from `css/style.css`):**
  - Brand accent `#c400c6` (vivid magenta) — CHECKED pill bg + border; the
    checked icon renders white ON the magenta fill.
  - Count badge `#f9e090` (pale yellow), white 12px text, 30px pill radius,
    padding 2px 5px, margin-left 10px; checked → bg `#fff`, text `#000`.
  - Page bg `#fafafa`; heading `#000` 28px; pill bg `rgba(255,255,255,0.9)`;
    pill border `rgba(0,0,0,0.1)`; pill text `rgba(0,0,0,0.8)` 18px;
    unchecked icon `rgba(0,0,0,0.2)`.
  - Base: body "Poppins", Arial, sans-serif, 14px, lh 1.8, color gray.
  - Pills: border-radius 4px, padding 10px 20px, margin-bottom 10px, cursor
    pointer, user-select none, transition all 0.2s (icon swap 0.3s).
- **Recreation decisions:** FontAwesome glyphs → lucide-react `Circle`
  (unchecked) / `CircleCheck` (checked; probe the export — `CheckCircle` is
  the older alias, per the lucide-rename pitfall), 24px, colored per state,
  0.3s transition via Tailwind `transition-colors`; Poppins via Google Fonts
  `<link>`; keep the hidden native `<input type="checkbox">` inside the
  label for a11y (click + Space toggle); no external libs. Demo has no
  footer — add a MINIMAL footer with the mandated Component Dock link
  (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/tickwell`; rename package to
   `@free-react-templates/tickwell`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `tickwell.free.componentdock.com`, `"homepage"` =
   `https://tickwell.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: `#fafafa` page bg, `#c400c6` magenta
   accent (checked state), `#f9e090` badge yellow, `rgba(255,255,255,0.9)`
   pill bg, `rgba(0,0,0,0.8)` pill text, `rgba(0,0,0,0.1)` pill border,
   `rgba(0,0,0,0.2)` unchecked icon; radii 4px / 30px; Poppins font stack.
3. `src/App.tsx`: single `DemoSection` — centered `h2` "Checkbox #05"
   (28px, `#000`) + `NotificationFilterList` (the 3 pills) inside a
   `max-w-[350px] mx-auto` column; section `py-[112px]`.
4. `src/components/NotificationFilterList.tsx` (or `CheckboxPills.tsx`):
   data array `[{ id, label, count }]` = News/200, Direct Message/234,
   Followers/1,189; per-pill `checked` state (default false); each pill =
   `<label>` wrapping a visually hidden real `<input type="checkbox">`
   (`sr-only` or absolute+opacity-0 per reference) + visible row: label text
   → `#f9e090` count badge `<span>` → `Circle`/`CircleCheck` lucide icon at
   the right end; checked styling: `bg-[#c400c6] border-[#c400c6] text-white`
   - icon `CircleCheck` white + badge `bg-white text-black`;
     `transition-colors duration-200/300`; honor `prefers-reduced-motion`.
5. Minimal footer with Component Dock link (`packages/ui` Button/ButtonLink +
   `cn()` used somewhere — knip gate).
6. Tests (100% coverage): default states (3 labels + badges 200/234/1,189 +
   all hollow `Circle`), click toggles check (magenta bg + `CircleCheck` +
   badge flip), toggle back, keyboard (Space) toggle, a11y (label ↔ input),
   responsive column, footer link.
7. Gate: `scripts/verify-app.sh tickwell`; PR description with source
   (ColorLib Checkbox 05), preview URL, tokens, diffs; mark TEMPLATES.md
   line 735 `[x]` + surge URL + `npm run readme:status`.
