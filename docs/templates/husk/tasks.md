# Husk — implementation tasks + design notes

Recreates ColorLib **Multiselect 16** (`multiselect-16`) as **Husk**.
Read `openspec/specs/template-husk/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the bare one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-16/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-16/` (returns "Not Found" — NOTE:
  this is the FIRST member of the series that lives under the `/theme/bootstrap/` prefix;
  do not "fix" it back — the spec and this file record the correct URL)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-16.jpg` (1200×972 AVIF;
  shows heading "Multi-Select #6", button reading **"Arkansas, Hawaii, Iowa, Montana"**, open
  menu with four selected rows marked ONLY by dark right-edge checkmarks)
- Source page: `https://colorlib.com/wp/template/multiselect-16/` (TEMPLATES.md line 838, ONE occurrence
  — section header "## Bootstrap Multiselect (20)" at line 821; no dup rows to mark)
- Engine: **bootstrap-select v1.13.9 by SnapAppointments**
  - jQuery 3.3.1 + Popper + Bootstrap 4.6 (the plugin ONLY handles the widget; the
    Bootstrap 4 form/button/dropdown CSS gives it its INPUT-BOX look). EMPTY `main.js`
    (`$(function() { });`) — everything is the plugin's DEFAULTS: no search, no
    select-all, no title, no actions box, values text format.
  - Siblings: 01–08 (Picker/Sifter/Winnow/Cull/Glean/Garner/Reap/Pluck) Semantic UI;
    09 (Thresh) Select2 + DARK; 10 (Sickle) vanilla jQuery + light coral; 11 (Scythe)
    Select2 + purple `#65587f`; 12 (Sheaf) Select2 + coral `#f67280`; 13 (Sieve)
    Select2 + teal `#29c7ac` + fully square; 14 (Fanner) + 15 (Bolter)
    jQuery-MultiSelect v2.4.18 (search + select-all + light-blue selected rows,
    stay-open borderless shadowed button). **16 (Husk) is the FIRST bootstrap-select
    member**: bordered input-style button, plain scrollable single-column menu,
    checkmark-only selection indicator, stay-open while picking. Do NOT copy the
    Select2 or jQuery-MultiSelect members. **CLOSEST PRECEDENT: `apps/fanner` /
    `apps/bolter` — reuse the widget state machinery (open/close, stay-open picks,
    comma-join button text), then swap the visuals per the delta table below.**

## What makes Husk DIFFERENT from Bolter (15) — the "delta" list

| Aspect                 | Bolter (15, jQuery-MultiSelect)                                                                          | **Husk (16, bootstrap-select)**                                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Plugin engine          | jQuery-MultiSelect v2.4.18 (nobleclem)                                                                   | **bootstrap-select v1.13.9 (SnapAppointments)**                                                                         |
| Button look            | Borderless, shadowed (`0 1px 1px` → `0 2px 10px` on hover), 40px tall, 13px text, `#aaa`/#333 text       | **Bordered INPUT-BOX**: 1px `#d3d9df` border, 4px radius, 38px tall, 16px text, `#212529`/#999 placeholder, NO shadow   |
| Placeholder            | "Select States"                                                                                          | **"Nothing selected"** (`#999`, bootstrap-select default)                                                               |
| Panel/menu             | Borderless, 4px radius, `0 15px 30px rgba(0,0,0,.1)` shadow, 12px gap below button, same width as column | **1px `rgba(0,0,0,.15)` border, 4px radius, NO shadow, flush below the button, same width as button**                   |
| Menu layout            | 3 CSS columns (column-gap 0)                                                                             | **1 alphabetical column with internal scroll (max-height 373px, overflow-y auto)**                                      |
| List search box        | Yes ("Search States", 250ms debounce)                                                                    | **NO search box**                                                                                                       |
| Select-all link        | Yes (uppercase "SELECT ALL", flips to "Unselect all")                                                    | **NO select-all / no actions box**                                                                                      |
| Selected-row indicator | LIGHT-BLUE `#e1f2fb` row bg + native checkbox                                                            | **Dark checkmark only** (`bs-ok-default` rotated square, `right:15px top:5px`, `#212529`) — NO bg, NO bold, NO checkbox |
| Row hover              | `#f7f7f7`                                                                                                | **`#f8f9fa`** (Bootstrap dropdown-item default)                                                                         |
| Row padding            | `5px 4px 5px 20px`                                                                                       | **`4px 24px`**                                                                                                          |
| Button text            | "N selected" counter past 10 picks / overflow                                                            | **Always the comma-joined list in selection order** (no counter — no options set)                                       |
| Caret                  | 6px triangle, `#999`, right 10px                                                                         | **Bootstrap caret** (`::after` 4px `#212529` triangle, right edge)                                                      |
| Heading                | "Multi-Select #5" → "Bolter"                                                                             | **"Multi-Select #6" → "Husk"**                                                                                          |
| Menu stay-open         | Stays open while selecting                                                                               | **Stays open while selecting (SAME — reuse Fanner/Bolter logic)**                                                       |

Everything else (page bg `#efefef`, 7rem vertical padding, centered 20px
`#212529` h2, centered `col-md-5` ≈445px widget column, all 50 states in
alphabetical order, outside-click + Escape close, selections persist,
Roboto 300/400) is IDENTICAL in spirit; only the widget visuals and menu
differ per the table.

## Section order (1:1)

1. Heading — centered h2 "Husk" (20px, weight 500, dark `#212529`, Roboto) on the
   LIGHT-GRAY `#efefef` page, ~112px page padding (`py-28`), centered container,
   widget in a centered WIDE column (`max-w-[480px]` — matches the original's
   `col-md-5` ≈445px content width).
2. Multiselect control — NO label (source has none; add `aria-label="Select states"` +
   proper listbox/option roles for a11y per the spec). The control is the INPUT-BOX
   button: white, 1px `#d3d9df` border, 4px radius, 38px tall, 16px text,
   `padding: 6px 12px`, NO shadow, right-edge dark caret. Placeholder "Nothing
   selected" (`#999`) until a pick; then comma-joined names in selection order
   (`#212529`).
3. Dropdown menu — appears flush below the button: white, `1px solid
rgba(0,0,0,.15)` border, 4px radius, NO shadow, same width as the button,
   `max-height: 373px` + internal scroll. ONE alphabetical column of 50 state rows:
   `padding: 4px 24px`, 16px `#212529`, hover `#f8f9fa`. Selected rows show ONLY the
   dark checkmark (rotated square, right:15px top:5px — build it with a CSS border
   trick or an SVG check; 12px, `#212529`). No search box, no select-all, no actions.
4. Footer — minimal line linking https://www.componentdock.com/ ("Component Dock"),
   per monorepo convention (the original has no footer).

## Implementation tasks (TDD order)

1. Scaffold app from the simplest existing template:
   `cp -r apps/<simplest> apps/husk`; rename package to
   `@free-react-templates/husk`; set `public/CNAME` =
   `husk.free.componentdock.com` and `"homepage"` =
   `https://husk.free.componentdock.com`; wire `injectUiSource()` in
   `vite.config.ts` (copy from an existing app verbatim); run `npm install`
   at the repo root so `package-lock.json` registers the workspace.
2. App shell + layout: `#efefef` page, Roboto Google Fonts link in
   `index.html`, `py-28` content wrapper, centered h2 "Husk", footer with
   Component Dock link. Tests: page load, heading, footer, bg color class.
3. Widget state hook (`useMultiSelect` or similar — study `apps/bolter` /
   `apps/fanner` for the proven shape):
   - open/close (button toggle, outside click, Escape, re-click)
   - selection set (Set of state values), toggle pick, stay-open on pick/deselect
   - button text: placeholder vs comma-join in selection order
   - Tests for every behavior in the spec scenarios.
4. Menu rendering: 50 states in order, one column, `max-height: 373px`
   scroll container (use `overflow-y-auto`), row hover `#f8f9fa`, row
   padding `4px 24px`, checkmark only on selected rows. Tests: 50 rows,
   ordering, checkmark visibility, keyboard arrow/Enter/Space/Escape.
5. A11y pass: `aria-haspopup="listbox"`, `aria-expanded`, `role="listbox"`/
   `option` with `aria-selected`, focus management on open/close.
6. Full per-app gate: `npm run verify:app husk` (typecheck + lint + knip +
   fallow + vitest 100% coverage + build).

## Fidelity gotchas (learned while researching 2026-08-17)

- The REAL preview URL carries the `/theme/bootstrap/` prefix — the classic
  `/theme/multiselect-16/` URL 404s. When the implementer spot-checks the
  live page, use
  `https://preview.colorlib.com/theme/bootstrap/multiselect-16/`.
- The checkmark is the ONLY selected-row indicator — do NOT add a
  background, bold, or checkbox. The wrapper auto-adds `show-tick` in the
  original; in the React recreation, simply render the checkmark for
  selected options.
- Button text is the RAW comma-joined list — there is NO "N selected"
  counter and NO title on this member (unlike Fanner/Bolter). The official
  screenshot proves it ("Arkansas, Hawaii, Iowa, Montana").
- The menu has NO shadow (bootstrap-select zeroes Bootstrap's default) and
  NO gap below the button (flush, ~2px from the button border) — do not
  port Fanner/Bolter's `0 15px 30px` shadow or 12px gap.
- Bootstrap 4.6's `.form-control` height is 38px (`calc(1.5em + .75rem +
2px)`); the border in the live render reads `#d3d9df` (Bootstrap's
  `$input-border-color` family, slightly lighter than `#ced4da` — either
  reads as the same thin gray; prefer the exact computed `#d3d9df`).
- Row hover is `#f8f9fa` (Bootstrap default), NOT `#f7f7f7` (Bolter) and
  NOT `#efefef` (Fanner).
- No icomoon, Poppins, or Source Serif Pro — Roboto 300/400 only.
