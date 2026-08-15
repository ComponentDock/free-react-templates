# Sextet (ColorLib Checkbox 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sextet`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 16" — sixteenth of the "Bootstrap
  Checkboxes (20)" series (source: https://colorlib.com/wp/template/checkbox-16/).
  TEMPLATES.md line 746 — mark that line `[x]` when done (single row, no dups).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-16/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-16/` (HTTP 200,
  16.8 KB HTML, verified 2026-08-15). Page stylesheet (contains the WHOLE
  widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-16/css/style.css`
  (2,215 bytes / 89 lines — fully extracted for tokens). libs: bootstrap 4,
  jquery, popper. **Tick is an ICON FONT glyph** (`icomoon` `\e5ca`, white) —
  recreate with lucide `Check`, do NOT copy the icomoon font. Google Font
  **Roboto** (system stack — NOT Poppins). Document title: "Checkbox #6".
  Cross-checked with the TEMPLATES.md screenshot (`checkbox-16.jpg` 1200×972,
  browser-viewed 2026-08-15) — all match.
- **NUMBERING QUIRK (verified 2026-08-15, from the Quartet research):** the
  preview server hosts TWO sub-series. Entries 01–10 = custom designs
  "Checkbox #01"–"#10" (Tickbox/Picks/Ticktag/Checkly/Tickwell/Toggly/
  Switchly/Soluna/Taskly/Moodly). Entries 11–20 = codrops-sourced demos
  "BS4 Custom Checkbox #1"–"#9": checkbox-11 → "#1" (Quadly, Bootstrap
  `custom-control` widget), 12 → "#2" (Duo, codrops `.control` widget, blue
  `#007bff`), 13 → "#3" (Trio, codrops `.control` widget, blue `#007bff`),
  14 → "#4" (Quartet, codrops `.control` widget, purple `#7e0cf5`), 15 → "#5"
  (Quintet, MATERIAL widget, hot pink `#e13a9d`), **16 → "#6" (this template,
  codrops `.control` widget, blue `#007bff`)** … 19 → "#9", 20 → duplicate
  "#9". Each 11–20 entry has its OWN heading AND its own widget/checked color
  — do NOT reuse the Quartet (purple) or Quintet (Material, pink) components.
  Sextet matches Duo/Trio's widget+color family but is its OWN demo with its
  own heading ("Checkbox #6").
- **Visual design (DOM + CSS tokens + screenshot):** minimal demo page on
  pure white. One centered narrow column (col-lg-3 ≈ 280px) with 112px
  vertical padding: left-aligned 20px dark heading "Checkbox #6" (3rem
  vertical margins), then FOUR stacked codrops-style custom-checkbox rows —
  each a 20×20px 4px-radius 2px-bordered square indicator + 18px label,
  30px left padding, 15px row spacing:
  1. **First checkbox** — checked → solid Bootstrap blue `#007bff` fill +
     white centered check
  2. **Second checkbox** — unchecked → grey `#ccc` border, transparent fill,
     no check
  3. **Disabled** — unchecked + disabled → grey `#e6e6e6` fill at 60%
     opacity, `#ccc` border, not interactive
  4. **Disabled & checked** — checked + disabled → blue `#007bff` fill at
     20% opacity, `#007bff` border, faded white check
     No navbar, no footer — just the `.content` block. Heading copy on the
     reference reads "Checkbox #6" (NOT "#16") — keep it verbatim; the
     checklist row "Checkbox 16" is the mapping record, not on-screen copy.
- **Structure (1:1, section order):**
  1. `div.content` (padding 7rem 0 = 112px vertical) →
  2. `div.container.text-left` (centered container) →
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈280px centered
     narrow column) →
  4. `h2.my-5.text-left` "Checkbox #6" (20px, dark, left-aligned, 3rem
     top+bottom margins) →
  5. 4 × `label.control.control--checkbox`:
     visually-hidden `input[type=checkbox]` (`checked`/`disabled` per state)
     - `div.control__indicator` (20×20px, 4px radius, 2px `#ccc` border,
       absolute top 2px left 0) + label text node.
- **Design tokens (from `css/style.css`):**
  - Checked color: **`#007bff`** (Bootstrap blue) — solid `border: 2px
solid #007bff; background: #007bff` on the indicator
  - Tick: `.control__indicator:after` `content: '\e5ca'` (icomoon font
    glyph), `color: #fff`, centered via `top/left 50%` +
    `translate(-50%, -52%)`, `display: none` until checked. The stray
    `disabled ~ .control__indicator:after { border-color: #7b7b7b }` rule
    is a codrops leftover with no effect on the font glyph — ignore.
  - Indicator: **20×20px**, **border-radius: 4px**, 2px solid **`#ccc`**
    border, transparent background
  - Hover AND focus: `border: 2px solid #007bff` (both selectors — keep
    both for a11y)
  - Disabled: `background: #e6e6e6; opacity: 0.6; pointer-events: none;
border: 2px solid #ccc`
  - Disabled & checked: `background-color: #007bff; opacity: .2;
border: 2px solid #007bff`
  - Row: block, relative, `padding-left: 30px`, `margin-bottom: 15px`,
    cursor pointer, `font-size: 18px`
  - Input: `position: absolute; z-index: -1; opacity: 0` (NOT
    `display: none` — stays keyboard-focusable; preserve this)
  - Page: bg `#fff`, **Roboto** system stack, `.content` `7rem 0`, `h2`
    20px, `h2.my-5` = 3rem vertical margins
- **Recreation decisions:** lucide `Check` icon (white, 16px, centered)
  replaces the icomoon glyph — no copied assets, no icon font; Roboto via
  Google Fonts `<link>`; input stays visually-hidden but focusable
  (`opacity-0` + `sr-only`-style) with `peer`/`peer-checked:` sibling
  selectors wiring the indicator — preserves exact visuals AND keyboard/SR
  accessibility. Labels verbatim: "First checkbox" / "Second checkbox" /
  "Disabled" / "Disabled & checked"; heading "Checkbox #6" verbatim. No
  footer in the demo — repo mandate: minimal footer with Component Dock
  link (https://www.componentdock.com/).

## Implementation outline (for the implementer stream)

1. Scaffold: `cp -r apps/<simplest-existing-app> apps/sextet`, rename
   package to `@free-react-templates/sextet`, set `public/CNAME` to
   `sextet.free.componentdock.com` and `"homepage"` to
   `https://sextet.free.componentdock.com`. `npm install` at root to
   register the workspace in package-lock.json.
2. Spec-first: this spec is already on main — validate with
   `npm run spec:validate`.
3. TDD at 100% coverage (typecheck + lint + vitest + build via
   `scripts/verify-app.sh sextet`):
   - `App.tsx` → `<Demo />` + `<Footer />`
   - `Demo.tsx` (or `CheckboxList.tsx`): `.content` (py-28) → centered
     container → narrow column (max-w-xs mx-auto) → `h2` "Checkbox #6" +
     four `CheckboxRow` components
   - `CheckboxRow.tsx`: label (pl-[30px], mb-[15px], text-lg) +
     visually-hidden native input (peer, opacity-0) + indicator span
     (20×20, rounded-[4px], border-2 border-[#ccc],
     peer-checked:border-[#007bff] peer-checked:bg-[#007bff],
     peer-focus:border-[#007bff], peer-hover:border-[#007bff],
     disabled:bg-[#e6e6e6] disabled:opacity-60,
     peer-checked:disabled:bg-[#007bff] peer-checked:disabled:opacity-20)
     - lucide `Check` icon (hidden until checked, text-white, 16px,
       centered) + label text; `disabled` variant (pointer-events-none)
   - `@theme` tokens: `--color-brand: #007bff`, `--color-border: #ccc`,
     `--color-disabled: #e6e6e6`
   - Footer: minimal, Component Dock link (repo mandate)
4. Tests: all four states render in order; checked visuals (blue fill +
   white check); unchecked; disabled cannot toggle; click + Space toggle
   enabled rows; accessible name = label; footer link; document title
   "Sextet — Checkbox UI Template".
5. Deploy: merge via PR → Deploy-to-Surge workflow handles
   sextet.free.componentdock.com; then bookkeeping (`[x]` + surge URL at
   TEMPLATES.md line 746 + `npm run readme:status`).
