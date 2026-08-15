# Quintet (ColorLib Checkbox 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-quintet`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 15" — fifteenth of the "Bootstrap
  Checkboxes (20)" series (source: https://colorlib.com/wp/template/checkbox-15/).
  TEMPLATES.md line 745 — mark that line `[x]` when done (single row, no dups).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-15/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-15/` (HTTP 200,
  17.3 KB HTML, verified 2026-08-15). Page stylesheet (contains the WHOLE
  widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-15/css/style.css`
  (1,715 bytes / 50 lines — fully extracted for tokens). libs: bootstrap 4,
  jquery, popper. **No icon font needed** — the tick is pure CSS (rotated
  border L-shape). Google Font **Roboto** (system stack — NOT Poppins).
  Document title: "Checkbox #5". Cross-checked with the TEMPLATES.md
  screenshot (`checkbox-15.jpg` 1200×972, browser-viewed 2026-08-15) — all
  match.
- **NUMBERING QUIRK (verified 2026-08-15, from the Quartet research):** the
  preview server hosts TWO sub-series. Entries 01–10 = custom designs
  "Checkbox #01"–"#10" (Tickbox/Picks/Ticktag/Checkly/Tickwell/Toggly/
  Switchly/Soluna/Taskly/Moodly). Entries 11–20 = codrops-sourced demos
  "BS4 Custom Checkbox #1"–"#9": checkbox-11 → "#1" (Quadly, Bootstrap
  `custom-control` widget), 12 → "#2" (Duo, codrops `.control` widget, blue
  `#007bff`), 13 → "#3" (Trio), 14 → "#4" (Quartet, codrops `.control`
  widget, purple `#7e0cf5`), **15 → "#5" (this template, MATERIAL widget,
  hot pink `#e13a9d`)** … 19 → "#9", 20 → duplicate "#9". Each 11–20 entry
  has its OWN heading AND its OWN widget/checked color — do NOT reuse the
  Quartet component (different widget pattern + color).
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  pure white. One centered narrow column (col-lg-3 ≈ 280px) with 112px
  vertical padding: left-aligned 20px dark heading "Checkbox #5" (3rem
  vertical margins), then FOUR stacked Material-style custom-checkbox rows —
  each a 16×16px 2px-bordered square indicator + label, 24px left padding:
  1. **First checkbox** — checked → pink `#e13a9d` border + pink L-shaped
     tick (0.3s transition)
  2. **Second checkbox** — unchecked → grey `#ccc` border, no tick
  3. **Disabled** — unchecked + disabled → grey border at 40% opacity,
     greyed label
  4. **Disabled & checked** — checked + disabled → pink border + pink tick
     at 40% opacity (faded pink), greyed label
     No navbar, no footer — just the `.content` block. Heading copy on the
     reference reads "Checkbox #5" (NOT "#15") — keep it verbatim; the
     checklist row "Checkbox 15" is the mapping record, not on-screen copy.
- **Structure (1:1, section order):**
  1. `div.content` (padding 7rem 0 = 112px vertical) →
  2. `div.container.text-left` (centered container) →
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈280px centered
     narrow column) →
  4. `h2.my-5.text-left` "Checkbox #5" (20px, dark, left-aligned, 3rem
     top+bottom margins) →
  5. 4 × `label.custom-control.material-checkbox`:
     hidden `input.material-control-input` (`checked`/`disabled` per state)
     - `span.material-control-indicator` (16×16px, 2px border, absolute
       top 4px left 0) + `span.material-control-description` (label text).
- **Design tokens (from `css/style.css`):**
  - Checked color: **`#e13a9d`** (hot pink) via `--color` custom property;
    applied as `border-color` when checked
  - Indicator: **16×16px**, 2px border, **`#ccc`** unchecked,
    transition **0.3s**
  - Tick (checked): width **10px**, `rotateZ(45deg) translate(1px,-5px)`,
    `border-top: 0`, `border-left: 0` → right+bottom borders form the
    L-shape (2px thick, pink)
  - Disabled: indicator `opacity: .4`; label greyed (from the screenshot)
  - Row: relative, block, min-height 1.5rem, `padding-left 1.5rem` (24px)
  - Page: bg `#fff`, **Roboto** system stack, `.content` `7rem 0`, `h2`
    20px, `h2.my-5` = 3rem vertical margins
- **Recreation decisions:** pure-CSS tick (indicator span + `rotate-45`
  border L-shape — NO icon library, no copied assets); Roboto via Google
  Fonts `<link>`; **a11y deviation:** source sets the input to
  `display:none` (kills keyboard focus) — recreate with a visually-hidden
  but focusable native input + `peer`/`peer-checked:` sibling selectors.
  Labels verbatim: "First checkbox" / "Second checkbox" / "Disabled" /
  "Disabled & checked"; heading "Checkbox #5" verbatim. No footer in the
  demo — repo mandate: minimal footer with Component Dock link
  (https://www.componentdock.com/).

## Implementation outline (for the implementer stream)

1. Scaffold: `cp -r apps/<simplest-existing-app> apps/quintet`, rename
   package to `@free-react-templates/quintet`, set `public/CNAME` to
   `quintet.free.componentdock.com` and `"homepage"` to
   `https://quintet.free.componentdock.com`. `npm install` at root to
   register the workspace in package-lock.json.
2. Spec-first: this spec is already on main — validate with
   `npm run spec:validate`.
3. TDD at 100% coverage (typecheck + lint + vitest + build via
   `scripts/verify-app.sh quintet`):
   - `App.tsx` → `<Demo />` + `<Footer />`
   - `Demo.tsx` (or `CheckboxList.tsx`): `.content` (py-28) → centered
     container → narrow column (max-w-xs mx-auto) → `h2` "Checkbox #5" +
     four `CheckboxRow` components
   - `CheckboxRow.tsx`: label + visually-hidden native input (peer) +
     indicator span (16×16, border-2, peer-checked:border-[#e13a9d]) +
     tick span (peer-checked:block hidden, border-r-2 border-b-2
     rotate-45) + description text; `disabled` variant (opacity-40,
     greyed text, pointer-events-none)
   - `@theme` tokens: `--color-brand: #e13a9d`, `--color-border: #ccc`
   - Footer: minimal, Component Dock link (repo mandate)
4. Tests: all four states render in order; checked visuals (border + tick);
   unchecked; disabled cannot toggle; click + Space toggle enabled rows;
   accessible name = label; footer link; document title "Quintet — Checkbox
   UI Template".
5. Deploy: merge via PR → Deploy-to-Surge workflow handles
   quintet.free.componentdock.com; then bookkeeping (`[x]` + surge URL at
   TEMPLATES.md line 745 + `npm run readme:status`).
