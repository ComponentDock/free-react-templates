# Groat — implementation tasks + design notes

Recreates ColorLib **Multiselect 17** (`multiselect-17`) as **Groat**.
Read `openspec/specs/template-groat/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the bare one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-17/` (returns "Not Found" — the
  SECOND member of the series under the `/theme/bootstrap/` prefix; do not "fix" it back —
  the spec and this file record the correct URL)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-17.jpg` (1200×972
  AVIF; shows heading "Multi-Select #7 (Limit to 7 selection)", button reading
  **"Alaska, California, Illinois, Maine"**, open menu with four selected rows marked by a
  GREEN checkmark AND GREEN text — Alaska, California, Illinois, Maine; hover row lit)
- Source page: `https://colorlib.com/wp/template/multiselect-17/` (TEMPLATES.md line 839, ONE
  occurrence — section header "## Bootstrap Multiselect (20)" at line 821; no dup rows to mark)
- Engine: **bootstrap-select v1.13.9 by SnapAppointments**
  - jQuery 3.3.1 + Popper + Bootstrap 4.6 (the plugin ONLY handles the widget; the
    Bootstrap 4 form/button/dropdown CSS gives it its INPUT-BOX look). EMPTY `main.js`
    (`$(function() { });`) — everything is the plugin's DEFAULTS **plus `data-max-options="7"`**:
    no search, no select-all, no title, values text format.
  - Siblings: 01–08 (Picker/Sifter/Winnow/Cull/Glean/Garner/Reap/Pluck) Semantic UI;
    09 (Thresh) Select2 + DARK; 10 (Sickle) vanilla jQuery + light coral; 11 (Scythe)
    Select2 + purple `#65587f`; 12 (Sheaf) Select2 + coral `#f67280`; 13 (Sieve)
    Select2 + teal `#29c7ac` + fully square; 14 (Fanner) + 15 (Bolter)
    jQuery-MultiSelect v2.4.18 (search + select-all + light-blue selected rows,
    stay-open borderless shadowed button); **16 (Husk) bootstrap-select, all-DARK
    selection styling, NO limit**; **17 (Groat, THIS ONE) bootstrap-select with a
    GREEN `#8cba51` accent AND a 7-item limit**. Do NOT copy the Select2 or
    jQuery-MultiSelect members. **CLOSEST PRECEDENT: `apps/husk` — copy the whole
    widget machinery (open/close, stay-open picks, comma-join button text,
    checkmark-only selection), then apply the two deltas below.**
    IF `apps/husk` does not exist yet (implementer has not shipped it), fall back to
    `apps/fanner` / `apps/bolter` (same stay-open state machinery) and build the
    bootstrap-select visuals per this file.

## What makes Groat DIFFERENT from Husk (16) — the "delta" list

| Aspect              | Husk (16, bootstrap-select)               | **Groat (17, bootstrap-select)**                                                                                               |
| ------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Selection limit     | NONE — any number of states can be picked | **`data-max-options="7"` — max 7 selections; the 8th+ pick is REJECTED with a transient "Limit reached (7 items max)" notice** |
| Selected-row text   | Dark `#212529` (same as unselected)       | **GREEN `#8cba51`** (custom `style.css`: `.dropdown-menu li.selected > a.selected { color: #8cba51 }`)                         |
| Checkmark color     | Dark `#212529`                            | **GREEN `#8cba51`** (custom `style.css`: `.check-mark { color: #8cba51 }`)                                                     |
| Heading             | "Multi-Select #6" → "Husk"                | **"Multi-Select #7 (Limit to 7 selection)" → "Groat (Limit to 7 selections)"**                                                 |
| Keyboard-active row | (same Bootstrap default)                  | **`#007bff` bg + white text** (Bootstrap `.dropdown-item.active` — same as Husk; verified live)                                |
| Button open bg      | `#dae0e5` (btn-light `.show` tint)        | **`#dae0e5` (SAME — live computed rgb(218,224,229))**                                                                          |

Everything else is IDENTICAL to Husk: page bg `#efefef`, 7rem vertical padding,
centered 20px `#212529` h2, centered `col-md-5` ≈445px widget column, all 50
states in alphabetical order, bordered input-style button (1px `#d3d9df`, 4px
radius, 38px tall, 16px Roboto, 6px 12px padding, no shadow, dark caret),
menu (1px `rgba(0,0,0,.15)` border, 4px radius, no shadow, flush below the
button, max-height 373px + internal scroll, one column), placeholder "Nothing
selected" `#999`, comma-joined button text in selection order, no search box,
no select-all, no actions box, stay-open while picking, outside-click +
Escape close, selections persist, row padding `4px 24px`, row hover `#f8f9fa`.

## Section order (1:1)

1. Heading — centered h2 "Groat (Limit to 7 selections)" (20px, weight 500,
   dark `#212529`, Roboto) on the LIGHT-GRAY `#efefef` page, ~112px page padding
   (`py-28`), centered container, widget in a centered WIDE column
   (`max-w-[480px]` — matches the original's `col-md-5` ≈445px content width).
2. Multiselect control — NO label (source has none; add `aria-label="Select states"` +
   proper listbox/option roles for a11y per the spec). The control is the INPUT-BOX
   button: btn-light bg `#f8f9fa` (open `#dae0e5`), 1px `#d3d9df` border, 4px radius,
   38px tall, 16px text, `padding: 6px 12px`, NO shadow, right-edge dark caret.
   Placeholder "Nothing selected" (`#999`) until a pick; then comma-joined names in
   selection order (`#212529`).
3. Dropdown menu — appears flush below the button: white, `1px solid
rgba(0,0,0,.15)` border, 4px radius, NO shadow, same width as the button,
   `max-height: 373px` + internal scroll. ONE alphabetical column of 50 state rows:
   `padding: 4px 24px`, 16px `#212529`, hover `#f8f9fa`. **Selected rows: text GREEN
   `#8cba51` + a green checkmark** (rotated square, right:15px top:5px — build it
   with a CSS border trick or an SVG check; ~12px, `#8cba51`). Keyboard-active row:
   `#007bff` bg + white text. No search box, no select-all, no actions.
4. Footer — minimal line linking https://www.componentdock.com/ ("Component Dock"),
   per monorepo convention (the original has no footer).

## Implementation tasks (TDD order)

1. Scaffold app from the simplest existing template — **prefer copying from
   `apps/husk` if it exists** (identical widget, only the two deltas differ):
   `cp -r apps/<closest> apps/groat`; rename package to
   `@free-react-templates/groat`; set `public/CNAME` =
   `groat.free.componentdock.com` and `"homepage"` =
   `https://groat.free.componentdock.com`; wire `injectUiSource()` in
   `vite.config.ts` (copy from an existing app verbatim); run `npm install`
   at the repo root so `package-lock.json` registers the workspace.
2. App shell + layout: `#efefef` page, Roboto Google Fonts link in
   `index.html`, `py-28` content wrapper, centered h2 "Groat (Limit to 7
   selections)", footer with Component Dock link. Tests: page load, heading,
   footer, bg color class.
3. Widget state hook (port from `apps/husk`):
   - open/close (button toggle, outside click, Escape, re-click)
   - selection set (Set of state values), toggle pick, stay-open on pick/deselect
   - button text: placeholder vs comma-join in selection order
   - **selection cap: reject picks beyond 7, show the "Limit reached (7 items
     max)" notice, allow picks again after a deselect**
   - Tests for every behavior in the spec scenarios.
4. Menu rendering: 50 states in order, one column, `max-height: 373px`
   scroll container (use `overflow-y-auto`), row hover `#f8f9fa`, row
   padding `4px 24px`, **green `#8cba51` text + green checkmark on selected
   rows only**, keyboard-active `#007bff`/white. Tests: 50 rows, ordering,
   checkmark visibility, selection-state styling, keyboard
   arrow/Enter/Escape, max-limit scenarios.
5. A11y pass: `aria-haspopup="listbox"`, `aria-expanded`, `role="listbox"`/
   `option` with `aria-selected`, focus management on open/close.
6. Full per-app gate: `npm run verify:app groat` (typecheck + lint + knip +
   fallow + vitest 100% coverage + build).

## Fidelity gotchas (learned while researching 2026-08-17)

- The REAL preview URL carries the `/theme/bootstrap/` prefix — the classic
  `/theme/multiselect-17/` URL 404s. When the implementer spot-checks the
  live page, use
  `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`.
- **The green accent is THE visual tell of this member**: selected row text
  AND checkmark are `#8cba51` moss green (NOT Husk's dark `#212529`). The
  custom `style.css` on this page overrides the plugin defaults. Do NOT port
  Husk's dark checkmark styling.
- **The 7-item limit is the behavioral tell**: `data-max-options="7"` on the
  select. At 7 picks, the next pick is rejected. Verified two ways live:
  keyboard Enter (row does not get `selected`, count stays 7) and a full
  mouse mousedown/mouseup/click sequence (button text stays at 7 names and a
  transient "Limit reached (7 items max)" notice appears). Implement the
  limit as state: `limit: 7` in the hook, block the toggle when
  `selected.size >= 7 && !isSelected(value)`, surface the notice text.
- The limit message uses bootstrap-select's default `maxOptionsText`:
  **"Limit reached (7 items max)"** — use that exact string in the notice.
- Button text is the RAW comma-joined list — there is NO "N selected"
  counter and NO title on this member. The official screenshot proves it
  ("Alaska, California, Illinois, Maine").
- The menu has NO shadow and NO gap below the button (flush, ~2px from the
  button border) — do not port Fanner/Bolter's `0 15px 30px` shadow or 12px
  gap.
- Bootstrap 4.6's `.form-control` height is 38px (`calc(1.5em + .75rem +
2px)`); the button border in the live render reads `#d3d9df` (Bootstrap's
  `$input-border-color` family; prefer the exact computed `#d3d9df`).
- Row hover is `#f8f9fa` (Bootstrap default); the KEYBOARD-active row is
  `#007bff` with white text (Bootstrap `.dropdown-item.active`) — both are
  defaults, keep them.
- No icomoon, Poppins, or Source Serif Pro — Roboto 300/400 only.
