# Pluck (ColorLib Multiselect 08) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Pluck** (NEW name —
> the ColorLib source keeps its name "Multiselect 08"). Implementation ships
> on `feat/template-pluck` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Multiselect 08" — free single-page multiselect
  dropdown component template (source:
  https://colorlib.com/wp/template/multiselect-08/). TEMPLATES.md row: line
  830 (**Bootstrap Multiselect (20)**, section header line 821). The
  `multiselect-08` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-17 by direct
  fetch + screenshot cross-check):** the default
  `https://preview.colorlib.com/theme/multiselect-08/` returns **404** —
  the REAL preview is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-08/`
  (HTTP 200, 5,506 bytes — the whole page is 92 lines; the Bootstrap
  UI-component series lives under the `/theme/bootstrap/` prefix).
  Stylesheets: `css/style.css` (**220,581 bytes — CUSTOMIZED Bootstrap
  4.3.1 + a custom Chosen token tail from ~line 8135; read the tail
  only**), Chosen 1.4.2 `chosen.css` from the cdnjs CDN (the widget's
  default chrome — box, chips, results, icons), and font-awesome 4.7
  (loaded but **UNUSED** on this page — the widget's chevron/× come from
  Chosen's own `chosen-sprite.png`, NOT FA glyphs; do NOT load an icon
  font, use lucide). **Lato** (300/400/700) cf-fonts @font-face blocks in
  the head — the custom tail sets `body { font-family: "Lato",
Arial, sans-serif; font-size: 16px; line-height: 1.8; background: #fff;
color: gray }` (page is WHITE) and `h1–h5 { line-height: 1.5;
font-weight: 400; font-family: "Lato"; color: #000 }`.
  `js/main.js` is 189 bytes and does ONE real thing:
  `$('.chosen-select').chosen();` (plus a no-op
  `$('.chosen-select-deselect').chosen({ allow_single_deselect: true })`
  that matches nothing on this page) — ALL widget behavior is stock Chosen
  1.4.2 multiple-selection semantics.
- **KEY DIFFERENCE vs Multiselect 01–07 (a FIFTH widget family):** 01–04
  use the bootstrap-multiselect plugin (green `#52de97`, "Select all"
  row); 05 uses select2 (orange `#fd5f00`, search + tags + clear-all);
  06 uses a custom hand-rolled jQuery widget (deep orange `#f16821`);
  07 uses Semantic UI 2.2.13 (rose `#e8647c`, fluid box, "Select Topics"
  label, menu stays open on select); **08 uses Chosen 1.4.2** (lime
  `#a7d129`, 32 NFL teams in 8 optgroups, HAS an in-box search field,
  plain click-select CLOSES the dropdown, ctrl/cmd+click keeps it open).
  Tokens are DIFFERENT: brand lime `#a7d129` (not green, not orange, not
  deep orange, not rose), page `#fff`, chips translucent dark `rgba(0,0,0,
0.1)` with dark text (not colored like 05's orange tags or 07's rose
  chips). Do NOT copy the sibling specs' token values.
- **QUIRK — plain click-select CLOSES the dropdown (VERIFIED in
  chosen.jquery.js `result_select`):** Chosen multiple mode calls
  `results_hide()` after a normal select — `if (!((evt.metaKey ||
evt.ctrlKey) && this.is_multiple)) { this.results_hide(); }`. This is the
  OPPOSITE of Semantic 07 (which stays open). Only **Ctrl/Cmd+click**
  selects without closing. Recreate both paths; the implementer coming from
  07's spec MUST NOT assume "stays open".
- **QUIRK — deliberately mixed chrome colors:** the custom tail overrides
  the CLOSED `.chosen-choices` border to lime `#a7d129`, but the ACTIVE
  box keeps Chosen's default focus styles unchanged:
  `.chosen-container-active .chosen-choices { border: 1px solid #5897fb;
box-shadow: 0 0 5px rgba(0,0,0,0.3) }`. So the box turns Chosen-blue
  `#5897fb` with a soft glow when open/focused. Reproduce exactly — do not
  "fix" it to all-lime.
- **QUIRK — menu shows only the unselected set (VERIFIED in
  chosen.jquery.js `include_option_in_results`):** returns false for
  `option.selected` in multiple mode (default `display_selected_options =
false`) and for the empty placeholder option. Selecting moves a row into
  a chip; chip × re-inserts the row. The screenshot shows the pristine open
  state (no chips yet), so chip appearance comes from the CSS tokens.
- **QUIRK — the search box:** Chosen ALWAYS renders a search input in
  multiple mode (`this.search_field` lives inside the choices box, left of
  the chips). Unlike 07 (Semantic, no `search` class → no search), THIS
  template has live filtering with optgroup-aware visibility and a
  "No results match" row. Recreate it.
- **QUIRK — malformed source HTML:** the FIRST optgroup (NFC EAST) is
  missing its closing `</optgroup>` tag (browsers auto-close at the next
  `<optgroup>`). Recreate the DATA as well-formed 8×4 groups; don't
  replicate the malformed markup.
- **QUIRK — no field label:** there is NO label above the box (unlike
  07's "Select Topics" label + in-box placeholder pair). The prompt lives
  ONLY in the in-box placeholder "Your Favorite Football Teams" (`#999`),
  visible while zero chips exist.
- **QUIRK — no row separators / no icons:** option rows are plain 14px
  text (10px padding, +15px left indent for group options) — no `#ef90a2`
  rules, no hollow-circle bullets, no FA glyphs. Only the box chevron and
  chip × icons exist (Chosen sprite → lucide equivalents).
- **Structure observed (1:1):**
  - `section.ftco-section` (`padding: 7em 0` ≈ 112px; page bg `#fff`) →
    `div.container` → two `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #08" (`font-size: 28px; color: #000`, Lato 400). Demo
       label — rename to the brand name "Pluck".
    2. `div.col-lg-6.d-flex.justify-content-center.align-items-center` →
       `select.chosen-select[multiple]` with
       `data-placeholder="Your Favorite Football Teams"` + `tabindex="6"`
       (Chosen hides the raw select after init). Data: `<option
value=""></option>` placeholder marker (do NOT recreate — the
       placeholder string comes from data-placeholder) + 8 optgroups × 4
       teams: NFC EAST (Dallas Cowboys, New York Giants, Philadelphia
       Eagles, Washington Redskins), NFC NORTH (Chicago Bears, Detroit
       Lions, Green Bay Packers, Minnesota Vikings), NFC SOUTH (Atlanta
       Falcons, Carolina Panthers, New Orleans Saints, Tampa Bay
       Buccaneers), NFC WEST (Arizona Cardinals, St. Louis Rams, San
       Francisco 49ers, Seattle Seahawks), AFC EAST (Buffalo Bills, Miami
       Dolphins, New England Patriots, New York Jets), AFC NORTH (Baltimore
       Ravens, Cincinnati Bengals, Cleveland Browns, Pittsburgh Steelers),
       AFC SOUTH (Houston Texans, Indianapolis Colts, Jacksonville
       Jaguars, Tennessee Titans), AFC WEST (Denver Broncos, Kansas City
       Chiefs, Oakland Raiders, San Diego Chargers).
  - Widget (Chosen-rendered): closed box `ul.chosen-choices` — white,
    custom `border: 1px solid #a7d129`, `padding: 5px 10px`, `line-height:
3` (TALL), `border-radius: 4px`, `box-shadow: none`, `background-image:
none`, `width: 100%`; active/focused → `border: 1px solid #5897fb` +
    `0 0 5px rgba(0,0,0,0.3)`; chevron (Chosen sprite arrow) right, down
    closed / up open; dropdown `.chosen-drop` — `margin-top: 2px`, `border:
1px solid #a7d129`, `box-shadow: none`, `border-radius: 4px`; rows
    `.chosen-results li` — 14px, `padding: 10px` (+15px left for
    group-options), 0.3s transition; `.highlighted` — flat `#a7d129` bg
    (replaces Chosen's default `#3875d7`→`#2a62bc` gradient) with white
    text; `.group-result` — `padding: 15px 0`, 17px, `background:
rgba(0,0,0,0.05)`; chips `.search-choice` — `border: none`, `padding:
10px 25px 10px 10px`, `background: rgba(0,0,0,0.1)`, `border-radius:
2px`, 14px, `#333` text, × at `top: 11px; right: 8px`.
  - No footer in source → mandatory minimal Component Dock footer.
- **Design tokens (full list in the spec):** brand **`#a7d129`** (lime —
  closed box border, dropdown border, highlighted-row background [white
  text], link color, `.bg-primary`), focus border + glow **`#5897fb`** /
  `rgba(0,0,0,0.3)`, chips **`rgba(0,0,0,0.1)`** bg + `#333` text + 2px
  radius, group-header strip **`rgba(0,0,0,0.05)`**, page bg **`#fff`**,
  heading `#000` 28px, body gray Lato 16px/1.8, placeholder + search
  default `#999999`, typed search `#444`, no-results `#777` on `#f4f4f4`.
- **Screenshot (`multiselect-08.jpg`, 1200×972) browser-verified
  2026-08-17:** white page, centered dark "Multiselect #08" heading, open
  Chosen dropdown with a search field in the box, an NFC NORTH group
  header on a faint grey strip, and the "Chicago Bears" row highlighted
  solid lime; no chips selected (pristine open state); no other page
  content. Lime `#a7d129` is the only hue.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/cura`), rename
   package to `@free-react-templates/pluck`, set `public/CNAME` to
   `pluck.free.componentdock.com` and `"homepage"` to
   `https://pluck.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace (grep check
   `free-react-templates/pluck`). Keep `injectUiSource()` in
   `vite.config.ts`. This template has no dark mode — the MemoryStorage
   polyfill from `apps/cura/src/test/setup.ts` likely not needed.
2. **Data model** — constant group list (8 groups × 4 teams, exact NFL
   names above; well-formed groups, ignore the source's malformed first
   optgroup); NO placeholder pseudo-option in state (placeholder string is
   a separate constant "Your Favorite Football Teams"). Component state =
   `selected: string[]`, `open: boolean`, `query: string` (search text),
   `highlightIndex: number` (position within the VISIBLE filtered list).
   `visible` list = teams matching `query` (case-insensitive substring)
   minus `selected`, grouped by their group; group headers render only
   when ≥1 of their options is visible.
3. **Sections** — `App.tsx` composes: `HeadingSection` (h2 "Pluck"),
   `MultiselectControl`, `Footer`. Match the component-per-section layout
   of sibling apps.
4. **MultiselectControl** — white page section `min-h-screen bg-white` with
   ~~112px vertical padding; centered column (~~`col-lg-6` width, e.g.
   `max-w-2xl` — wider than Reap's `max-w-md`), `mb-12` under the heading.
   NO field label above the control. Trigger box `div` (`role="combobox"`
   OR button semantics + `aria-haspopup="listbox"` `aria-expanded={open}`,
   keyboard toggle via Enter/Space, `tabIndex={0}`, `aria-label`="Your
   Favorite Football Teams"): `border border-[#a7d129] rounded-[4px]
bg-white px-2.5 py-3 text-sm leading-[3]` (tall box); open/focused →
   `border-[#5897fb] shadow-[0_0_5px_rgba(0,0,0,0.3)]`, `focus-visible`
   ring per repo conventions. Inside, in flow order: search `input`
   (transparent borderless, `aria-label` "Search teams" or the combobox
   pattern from a sibling), placeholder span (grey `#999999`, visible only
   when `selected.length === 0` — implement as the input's placeholder
   text), selected chips (translucent `bg-[rgba(0,0,0,0.1)] text-[#333]
rounded-[2px] px-2.5 py-[10px] text-sm`, `X` remove button with per-chip
   `aria-label` e.g. `Remove Chicago Bears`), chevron
   `ChevronDown`/`ChevronUp` right-aligned. Whole box click toggles `open`
   (when closed); when open, focus goes to the search input.
5. **Menu** — `role="listbox"`, absolute below the box: `bg-white
rounded-[4px] mt-0.5 border border-[#a7d129]` (NO shadow — the source
   removed Chosen's default); closed state hidden. Group headers `div`
   (`role="presentation"` or `aria-hidden`-safe non-selectable rows):
   `bg-[rgba(0,0,0,0.05)] text-[17px] py-[15px] px-[10px] font-normal`
   (non-interactive, not focusable). Option rows `li`/`div`
   (`role="option"` + `aria-selected` + `id` for `aria-activedescendant`
   wiring): `text-sm py-2.5 pl-[25px] pr-2.5` (10px base + 15px group
   indent), `cursor-pointer`, hover/highlight `bg-[#a7d129] text-white`
   (flat lime, white text — NOT the Chosen blue gradient), `transition
duration-300` (+ `motion-reduce:transition-none` per the source's
   prefers-reduced-motion handling). No row separators, no per-row icons.
   Content = visible teams with their group header preceding the group's
   first row.
6. **Interaction** — plain click (or Enter) on a row → add to `selected`
   (chip appears, row leaves the menu, menu CLOSES, search clears — the
   VERIFIED Chosen behavior; do NOT copy Reap's "stays open"); Ctrl/Cmd+click
   → add WITHOUT closing; click a chip's × → remove from `selected` (row
   re-enters the menu; placeholder returns when `selected` is empty).
   Toggle `open` on box click; when open, typing in the search input
   filters; Escape, outside click (document listener in `useEffect`,
   ref-based containment), and blur close the menu. Selections persist
   across open/close. `highlightIndex` moves with ArrowDown/ArrowUp over
   the visible (unselected, filtered) rows, Enter selects the highlighted
   one; reset highlight to 0 on open/query change. Skip Chosen's sprite
   animations — smooth CSS transitions are enough.
7. **A11y + focus** — trigger exposes `aria-haspopup="listbox"`/
   `aria-expanded` and is keyboard-activatable (Enter/Space), close on
   Escape; rows expose `role="option"` + `aria-selected`; search input
   labeled; chip × buttons get `aria-label`; `focus-visible` rings per repo
   conventions; `aria-activedescendant` on the search input pointing at the
   highlighted option.
8. **Footer** — minimal "More templates at Component Dock" line linking
   `https://www.componentdock.com/` (small muted text, contentinfo
   landmark).
9. **Tests (TDD, 100% coverage)** — colocated `*.test.tsx`:
   - Render: heading "Pluck"; white page; control box with placeholder
     "Your Favorite Football Teams", down chevron,
     `aria-haspopup`/`aria-expanded=false`, NO chips; NO field label
     above the box; document title "Pluck — Multiselect Dropdown".
   - Open: click box → menu with 8 group headers + 32 team rows,
     `aria-expanded=true`, chevron up, box border class switched to
     `#5897fb` (assert the class/state, not computed color).
   - Search: type "cow" → only "Dallas Cowboys" row remains, only NFC
     EAST header visible; type "xyz" → "No results match" row; clear →
     all 32 rows back; type "NFC" → no matches (headers don't match).
   - Selection (plain click): click "Chicago Bears" row → chip appears
     (with `aria-label`'d remove ×), row leaves the menu, menu CLOSES,
     `aria-expanded=false`, placeholder hidden, search cleared.
   - Selection (ctrl/cmd+click): reopen, ctrl+click "Chicago Bears" then
     "Dallas Cowboys" → two chips, menu STAYS open, both rows gone.
   - Deselection: click chip × → chip gone, row back in the menu; remove
     last chip → placeholder visible again.
   - Keyboard: ArrowDown/ArrowUp moves highlight, Enter selects on the
     highlighted row (menu closes), Escape closes, outside click closes,
     blur closes — selections preserved across cycles.
   - Hover state: assert hover classes on the highlighted row (or skip —
     CSS-only).
   - Absent controls: no "Select all" row, no clear-all button; chips
     selectable beyond any limit (select all 32 in state → 32 chips OK).
   - Footer renders Component Dock link.
10. **Gate** — `scripts/verify-app.sh pluck` (typecheck + lint + knip +
    fallow + 100% coverage vitest + build) and `npm run spec:validate`;
    then the PR flow: branch `feat/template-pluck` → PR → immediate squash
    merge → `[~]`→`[x]` bookkeeping in TEMPLATES.md + `npm run readme:status`.

## Verification checklist (prep-side, already done)

- [x] Live preview DOM fetched + analyzed (real URL under
      `/theme/bootstrap/` prefix — the default 404s, like the rest of the
      Bootstrap UI series).
- [x] Design tokens extracted from the custom CSS tail (tokens above;
      brand `#a7d129` lime — NOT `#52de97` of 01–04, NOT `#fd5f00` of 05,
      NOT `#f16821` of 06, NOT `#e8647c` of 07; page bg `#fff` white;
      chips translucent `rgba(0,0,0,0.1)`; ACTIVE border Chosen-default
      `#5897fb` + glow).
- [x] Screenshot viewed in the browser and described (visual design noted:
      pristine open Chosen dropdown — search field in the box, NFC NORTH
      group header on faint grey strip, "Chicago Bears" row solid-lime
      highlighted; no chips in shot; lime is the only hue).
- [x] Widget behavior verified in chosen.jquery.js source: menu =
      unselected set, plain select closes (`results_hide`), ctrl/cmd+click
      stays open, search filtering + variant-aware headers + "No results
      match", chip × re-inserts, close on Escape/outside/blur.
- [x] Spec written: `openspec/specs/template-pluck/spec.md`.
- [x] Name collision check: `pluck` free in `apps/`, `openspec/specs/`,
      `docs/templates/`, TEMPLATES.md (verified 2026-08-17).
