# Picks (ColorLib Checkbox 02) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-picks`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 02" — second of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-02/).
  TEMPLATES.md line 732 — mark that line `[x]` when done (single row, no
  duplicates).
- **WARNING — sibling assumption is WRONG here:** the Tickbox spec assumed
  Checkbox 02–20 are the same design as Checkbox 01 (six color variants +
  disabled). Checkbox 02 is a DIFFERENT page: a sports picker ("Choose your
  favorite sports") with three PLAIN checkboxes (Basketball checked, Baseball/
  Badminton unchecked) — no variant colors, no disabled state, CIRCLE icons
  (not squares). Never reuse another checkbox item's findings; re-fetch the
  live preview per item.
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-02/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-02/` (HTTP 200,
  ~8 KB HTML). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-02/css/style.css`
  (~220 KB, Bootstrap 4.3.1 base + custom theme, fully extracted for tokens).
  libs: bootstrap 4.3.1, jquery, popper, font-awesome 4.7 (icons = glyphs
  `\f1db` circle-o / `\f058` check-circle). Google Font **Poppins** 300–900
  (cf-fonts @font-face in head). Cross-checked with the TEMPLATES.md
  screenshot (`checkbox-02.jpg` 1200×972, browser-viewed) — consistent: red
  filled icon with white checkmark for the checked row. Demo brands itself
  "Checkbox #02"; recreation uses the NEW name **Picks**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  light `#fafafa`. One centered column: black 28px heading "Checkbox #02",
  then a narrow col-md-4 (~350px) group: 20px/500 sub-heading "Choose your
  favorite sports", then three stacked checkboxes — circle icon + label
  (35px left padding, 16px label, 12px row gap):
  1. **Basketball** — checked: red `#f76262` filled circle w/ white checkmark
  2. **Baseball** — unchecked: grey `rgba(0,0,0,0.3)` circle outline
  3. **Badminton** — unchecked: same grey circle outline
     No navbar, no footer — just the one `ftco-section`.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5`
     "Checkbox #02" (28px, #000, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (~350px centered
     column):
     - `div.heading-title.mb-4` → `h3.h5` "Choose your favorite sports"
       (20px, weight 500, lh 1.2, body-gray color).
     - 3 × `label.checkbox-wrap`: label text + `<input type="checkbox">`
       (absolute, opacity 0, 0×0; 1st has `checked`) + `<span.checkmark>` →
       `:after` FontAwesome 20px icon (unchecked `\f1db` rgba(0,0,0,0.3);
       checked `\f058` #f76262 + rotate(-360deg) spin), transition 0.3s.
- **Design tokens (from `css/style.css`):**
  - Checked icon **#f76262** (coral red; also the theme's `a` color).
  - Unchecked icon **rgba(0,0,0,0.3)**.
  - Base: body "Poppins", Arial, sans-serif, 14px, lh 1.8, color gray
    (#808080), bg **#fafafa**; `.ftco-section` 7em vertical padding;
    `.heading-section` 28px `#000`.
  - Checkbox: 35px left padding, 16px label, 12px margin-bottom, pointer
    cursor, user-select none; icon 20px, margin-top -4px, 0.3s transition;
    checked adds rotate(-360deg) (spin).
  - Sub-heading: h3.h5 = 1.25rem/500/lh 1.2/mb 0.5rem (bootstrap), wrapper
    `.mb-4` = margin-bottom 1.5rem; color inherits body gray.
  - Bootstrap `:root` palette (reference only, NOT used by this demo).
- **Recreation decisions:** FontAwesome glyphs → lucide-react `Circle`
  (unchecked, 20px, stroke rgba(0,0,0,0.3)); checked = filled `#f76262`
  circle with white check (20px `rounded-full` span `bg-[#f76262]` centering
  white lucide `Check` ~12–14px — or `CheckCircle2` filled `#f76262` with
  white stroke), 0.3s spin via Tailwind `transition-transform`; Poppins via
  Google Fonts `<link>`; keep the hidden native `<input type="checkbox">`
  inside the label for a11y (click + Space toggle; Basketball starts
  `checked`); no external libs. Demo has no footer — add a MINIMAL footer
  with the mandated Component Dock link (https://www.componentdock.com/) per
  repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/picks`; rename package to
   `@free-react-templates/picks`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `picks.free.componentdock.com`, `"homepage"` =
   `https://picks.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: checked icon `#f76262`, unchecked
   rgba(0,0,0,0.3), page bg `#fafafa`, heading `#000`; Poppins (300–900) via
   Google Fonts in `index.html`.
3. Components (src/components/): `CheckboxRow` (label + hidden input +
   circle icon, props: label, defaultChecked) and `Footer` (minimal Component
   Dock link). Optional: `DemoHeading`, `SubHeading`.
4. `src/App.tsx` composes: heading row + content column (sub-heading + three
   checkbox rows) in one centered section + footer; document title "Picks —
   Checkbox UI Template".
5. Tests FIRST (red) per spec scenarios (heading + sub-heading, three sports
   in order, Basketball default-checked, checked/unchecked icon visuals,
   toggle by click/Space, a11y name, footer link); then implementation; 100%
   coverage.
6. Verify: `scripts/verify-app.sh picks`; `npm run spec:validate`.
7. PR: `feat/template-picks` → squash-merge to main; PR description includes
   source template, preview URL (incl. the /theme/bootstrap/ sub-path
   caveat), design tokens, what differs (lucide icons instead of FontAwesome,
   footer added per repo mandate, and a note that Checkbox 02 ≠ Checkbox 01 —
   sports picker, not the color-variant demo).
