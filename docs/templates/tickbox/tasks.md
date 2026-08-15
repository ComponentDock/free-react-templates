# Tickbox (ColorLib Checkbox 01) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tickbox`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 01" — first of the "Bootstrap Checkboxes
  (20)" series (source: https://colorlib.com/wp/template/checkbox-01/).
  TEMPLATES.md line 731 — mark that line `[x]` when done (single copy).
  Sibling items Checkbox 02–20 are the SAME design with heading "Checkbox
  #NN" — reuse the Tickbox app for those later (new name + heading per item).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-01/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-01/` (HTTP 200,
  8.5 KB HTML). Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/checkbox-01/css/style.css`
  (~221 KB, fully extracted for tokens). libs: bootstrap 4, jquery, popper,
  font-awesome 4.7 (checkbox icons = glyphs `\f0c8` square-o / `\f14a`
  check-square). Google Font **Poppins** 300–900 (cf-fonts @font-face in
  head). Cross-checked with the TEMPLATES.md screenshot (`checkbox-01.jpg`
  1200×972, browser-viewed) — all match. Demo brands itself "Checkbox #01";
  recreation uses the NEW name **Tickbox**.
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  light `#fafafa`/white. One centered column: black 28px heading "Checkbox
  #01", then a narrow col-md-4 (~350px) list of six stacked checkboxes —
  colored square icon (white checkmark when checked) + same-colored label
  right of it (35px left padding, 16px/500 label, 12px row gap):
  1. **Primary** `#0075f6` (checked)
  2. **Success** `#28a745` (checked)
  3. **Danger** `#dc3545` (checked)
  4. **Warning** `#ffc107` (checked)
  5. **Info** `#17a2b8` (checked)
  6. **Primary** plain/grey (checked + `disabled`, greyed out)
     All six checked in the demo; icon swaps square-o → check-square with a 0.3s
     transition. No navbar, no footer — just the one `ftco-section`.
- **Structure (1:1, section order):**
  1. `section.ftco-section` (padding 7em 0) → `div.container` (centered,
     max-width ~1140px):
  2. `div.row` → `div.col-md-12.text-center` → `h2.heading-section.mb-5
.pb-md-4` "Checkbox #01" (28px, #000, centered, mb 3rem).
  3. `div.row.justify-content-center` → `div.col-md-4` (~350px centered
     column) → 6 × `label.checkbox-wrap[.checkbox-{variant}]`:
     label text (variant color) + `<input type="checkbox" checked>`
     (absolute, opacity 0, 0×0; 6th adds `disabled`) + `<span.checkmark>`
     → `:after` FontAwesome 20px icon (unchecked `\f0c8`
     rgba(0,0,0,0.1); checked `\f14a` rgba(0,0,0,0.2) default or variant
     color), transition 0.3s.
- **Design tokens (from `css/style.css`):**
  - Variant colors (label + checked icon): `#0075f6` primary, `#28a745`
    success, `#dc3545` danger, `#ffc107` warning, `#17a2b8` info; plain/
    disabled = unchecked rgba(0,0,0,0.1) → checked rgba(0,0,0,0.2).
  - Base: body "Poppins", Arial, sans-serif, 14px, lh 1.8, color gray,
    bg `#fafafa`; `.ftco-section` 7em vertical padding; `.heading-section`
    28px `#000`.
  - Checkbox: 35px left padding, 16px/500 label, 12px margin-bottom,
    pointer cursor, user-select none; icon 20px, margin-top -4px, 0.3s
    transition.
  - Bootstrap `:root` palette for reference: primary #007bff, success
    #28a745, danger #dc3545, warning #ffc107, info #17a2b8.
- **Recreation decisions:** FontAwesome glyphs → lucide-react `Square` /
  `SquareCheck` (20px, stroke ~2, colored per variant, 0.3s transition via
  Tailwind `transition-colors`); Poppins via Google Fonts `<link>`; keep the
  hidden native `<input type="checkbox">` inside the label for a11y (click +
  Space toggle; `disabled` on the 6th blocks toggling); no external libs.
  Demo has no footer — add a MINIMAL footer with the mandated Component Dock
  link (https://www.componentdock.com/) per repo rules.

## Implementation task outline

1. Copy the simplest existing app → `apps/tickbox`; rename package to
   `@free-react-templates/tickbox`; run `npm install` at repo root; register
   `injectUiSource()` in `vite.config.ts`; `public/CNAME` =
   `tickbox.free.componentdock.com`, `"homepage"` =
   `https://tickbox.free.componentdock.com`.
2. `@theme` tokens in `src/index.css`: variant colors above + page bg
   `#fafafa`; Poppins (300–900) via Google Fonts in `index.html`.
3. Components (src/components/): `CheckboxRow` (label + hidden input +
   lucide icon, props: label, variant, defaultChecked, disabled) and
   `Footer` (minimal Component Dock link). Optional: `DemoHeading`.
4. `src/App.tsx` composes: heading row + checkbox list in one centered
   section + footer; document title "Tickbox — Checkbox UI Template".
5. Tests FIRST (red) per spec scenarios (six variants, checked visuals,
   toggle by click/Space, disabled not toggleable, a11y name, footer link);
   then implementation; 100% coverage.
6. Verify: `scripts/verify-app.sh tickbox`; `npm run spec:validate`.
7. PR: `feat/template-tickbox` → squash-merge to main; PR description
   includes source template, preview URL (incl. the /theme/bootstrap/
   sub-path caveat), design tokens, what differs (lucide icons instead of
   FontAwesome, footer added per repo mandate).
