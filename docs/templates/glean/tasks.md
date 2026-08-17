# Glean (ColorLib Multiselect 05) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Glean** (NEW name —
> the ColorLib source keeps its name "Multiselect 05"). Implementation ships
> on `feat/template-glean` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Multiselect 05" — free single-page multiselect
  dropdown component template (source:
  https://colorlib.com/wp/template/multiselect-05/). TEMPLATES.md row: line
  827 (**Bootstrap Multiselect (20)**, header line 822). The
  `multiselect-05` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-17 by direct
  fetch AND live browser interaction):** the default
  `https://preview.colorlib.com/theme/multiselect-05/` returns **404** —
  the REAL preview is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-05/`
  (HTTP 200, 4,097 bytes — the whole page is ~60 lines; the Bootstrap
  UI-component series lives under the `/theme/bootstrap/` prefix).
  Stylesheets: `css/style.css` (**221,864 bytes — CUSTOMIZED Bootstrap
  4.3.1 + ~160-line custom select2 token tail; read the tail only**),
  select2 4.0.4 CDN CSS (plugin defaults), font-awesome 4.7 (only for
  `fa-check` in the checked checkbox — use lucide `Check`). **Lato**
  (300/400/700) cf-fonts @font-face blocks in the head — headings use
  `"Lato", Arial, sans-serif` weight 400; body stays on the Bootstrap
  default system stack (load Lato as the app font anyway — it IS the
  template's loaded family). `js/main.js`: the ONLY demo logic —
  `$(".js-select2").select2({ closeOnSelect: false, placeholder: "Click to
select an option", allowHtml: true, allowClear: true, tags: true })`.
  Screenshot (`multiselect-05.jpg`, 1200×972) browser-verified 2026-08-17:
  white page, centered dark "Multiselect #05" heading, select2 widget OPEN —
  light selection box with three selected chips (Option1, Option2, Option4,
  each with ×) + small ORANGE clear-all × at the right, dropdown list below
  with square checkboxes — checked filled ORANGE `#fd5f00` with white check,
  unchecked empty.
- **KEY DIFFERENCE vs Multiselect 01–04:** this variant uses the **select2**
  plugin (not bootstrap-multiselect). Tokens are DIFFERENT: brand orange
  `#fd5f00` (not green `#52de97`); 13 generic options Option1..13 (not 6
  languages); inline search + tags + clear-all; **NO "Select all" row**.
  Do NOT copy the Picker/Sifter/Winnow/Cull specs' token values.
- **QUIRK — panel stays open while selecting (VERIFIED live):** clicking
  Option1 then Option2 keeps the panel open (`closeOnSelect: false`); both
  become chips + orange-checked rows. Only outside-click / Escape / trigger
  re-click closes it.
- **QUIRK — tags: true:** typing a new value into the search field + Enter
  creates a brand-new option on the fly (source comment "создает новые
  опции на лету"). It becomes a chip like any other.
- **QUIRK — allowClear: true:** the small ORANGE × at the right of the
  selection box clears ALL selections at once (distinct from per-chip ×).
- **QUIRK — inline search:** select2's multiple-mode search is a textbox
  INSIDE the selection box (placeholder "Click to select an option") that
  filters the option list as you type.
- **QUIRK — unused badges:** options carry `data-badge=""` and main.js has
  an `iformat` badge renderer, but it is wired only to `.icons_select2`
  (absent on this page) — NO badges render. Do not add badges.
- **Structure observed (1:1):**
  - `section.ftco-section` (`padding: 7em 0` ≈ 112px) → `div.container` →
    two `div.row.justify-content-center`:
    1. `div.col-md-7.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #05" (`font-size: 28px; color: #000`, Lato 400). Demo
       label — rename to the brand name "Glean".
    2. `div.col-lg-4.d-flex.justify-content-center.align-items-center` →
       `select.js-select2[multiple]` (hidden by the plugin) — 13 options
       Option1..Option13 (`value="O1".."O13"`, `data-badge=""`).
  - Combobox (plugin-rendered): `span.select2-container` (`min-width:
600px`; `100%` under 992px) → `.select2-selection--multiple` —
    `border-width: 2px; border-color: transparent; padding: 5px 10px;
line-height: 1.6; transition: 0.3s; margin-bottom: 10px; box-shadow:
0px 3px 22px -15px rgba(0,0,0,0.63)`; focus → `border-color: #fd5f00`.
    Inside: chips `.select2-selection__choice` (`border: none; background:
rgba(0,0,0,0.1); font-size: 15px; padding: 2px 10px; color: gray`;
    remove × `margin-right: 5px`), clear-all `.select2-selection__clear`
    (`color: #fd5f00`), search `input.select2-search__field` (placeholder
    "Click to select an option").
  - Panel (plugin-rendered): `.select2-dropdown--below` — `padding: 10px 0;
border-radius: 4px; border: none; box-shadow: 0px 3px 22px -15px
rgba(0,0,0,0.63)` (open container: `0px 3px 22px -15px rgba(0,0,0,0.8)`).
    Rows `.select2-results__option` (`padding-right: 20px; vertical-align:
middle`) with custom `:before` checkbox (20×20, 2px `rgba(0,0,0,0.2)`,
    radius 4px, `margin-right: 15px; margin-left: 10px`); checked
    `[aria-selected=true]:before` → `#fd5f00` fill + white check, border 0.
    Selected AND highlighted rows keep WHITE bg + `#000` text (custom
    overrides of select2's default blue highlight).
  - No footer in source → mandatory minimal Component Dock footer.
- **Design tokens (full list in the spec):** brand `#fd5f00` (checked fill,
  focus border, clear-all), chips `rgba(0,0,0,0.1)`/`gray`, checkbox border
  `rgba(0,0,0,0.2)`, panel shadow `0 3px 22px -15px rgba(0,0,0,0.63)`,
  heading `#000` 28px, Lato 400.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/cura`), rename
   package to `@free-react-templates/glean`, set `public/CNAME` to
   `glean.free.componentdock.com` and `"homepage"` to
   `https://glean.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace (grep check
   `free-react-templates/glean`). Keep `injectUiSource()` in
   `vite.config.ts`. Copy the MemoryStorage polyfill from
   `apps/cura/src/test/setup.ts` (jsdom 30 has no localStorage).
2. **State model** — simplest shape wins: keep the option list in a
   constant (`APP_OPTIONS = ['Option1', ..., 'Option13']` — or generate
   `Option${n}` for n=1..13); component state = `selected: string[]` +
   `open: boolean` + `query: string`. `tags: true` means a new value typed
   - Enter is appended to `selected` (and to the option list if it should
     re-appear in the filter — simplest: track `customTags` separately or add
     to a `knownOptions` state).
3. **Sections** — `App.tsx` composes: `HeadingSection` (h2 "Glean"),
   `MultiselectControl`, `Footer`. Match the component-per-section layout of
   sibling apps.
4. **MultiselectControl** — combobox container `div` (or `button`-free
   div with `role="combobox"`-style a11y — check sibling patterns):
   `rounded-[4px]`, 2px TRANSPARENT border (`border-2 border-transparent`,
   `focus-within:border-[#fd5f00]`), `px-[10px] py-[5px]`, `leading-6`,
   `mb-10px`, shadow `0 3px 22px -15px rgba(0,0,0,0.63)`,
   `aria-haspopup="listbox"` `aria-expanded={open}`. Inside, in order:
   selected chips (gray `bg-black/10`, `text-[15px]`, `px-[10px] py-[2px]`,
   rounded, `text-gray-500`, per-chip `X` remove with `aria-label`), the
   clear-all `X` (`text-[#fd5f00]`, renders only when
   `selected.length > 0`), and the search `input` (placeholder "Click to
   select an option"). Chips and clear-all need `pointer-events` care so the
   input stays focusable (classic select2 layout: chips wrap ABOVE the
   input line).
5. **Panel** — `role="listbox"` (semantic upgrade over the source's
   `ul > li` soup), white, `rounded-[4px]`, `border-none`, shadow `0 3px
22px -15px rgba(0,0,0,0.63)`, `py-10px`, `w-full`; options filtered by
   `query` (case-insensitive substring). Each row: `pr-20px`, custom 20×20
   square checkbox (hidden input + styled span: `border-2 border-black/20`,
   `rounded-[4px]`, `mr-15px ml-10px`; checked → bg `#fd5f00` + white
   `Check` icon, border-0) + label `Option{n}`. Selected row keeps WHITE bg
   (no blue highlight). NO "Select all" row (this variant doesn't have one).
6. **Interaction** — clicking an option toggles membership and does NOT
   close the panel (`closeOnSelect: false` — VERIFIED live); search input
   filters; Enter with non-empty query that matches no existing option
   creates a NEW tag (`tags: true`); clear-all empties everything; per-chip
   × removes one. Close on: outside click (document listener in `useEffect`,
   ref-based containment), Escape key. Selections persist across open/close.
7. **A11y + focus** — all interactive elements `focus-visible` rings per
   repo conventions; panel options expose selected state (`aria-selected`);
   search input gets `aria-label`/placeholder association; close on Escape;
   `aria-expanded` flips; clear-all and per-chip × get `aria-label`s.
8. **Footer** — minimal "More templates at Component Dock" line linking
   `https://www.componentdock.com/` (small muted text, contentinfo
   landmark).
9. **Tests (TDD, 100% coverage)** — colocated `*.test.tsx`:
   - Render: heading "Glean"; selection box with placeholder "Click to
     select an option"; `aria-haspopup`/`aria-expanded=false` initially; no
     chips; no clear-all.
   - Open: focus/click opens panel with 13 options (Option1..Option13),
     all unchecked squares; `aria-expanded=true`.
   - Selection: click Option1 + Option2 → both orange-checked, panel STILL
     open, chips Option1 + Option2 appear, clear-all appears; click Option2
     again (or its chip ×) → unchecked + chip gone; clear-all → all
     cleared, clear-all disappears.
   - Tag creation: type "Custom" + Enter → chip "Custom" selected; remove
     it via its ×.
   - Filter: type "5" → only matching options visible; clear → all 13 back.
   - Dismiss: outside click, Escape — panel closes, `aria-expanded` false,
     selections preserved.
   - Footer renders Component Dock link; document title correct.
10. **Gate** — `scripts/verify-app.sh glean` (typecheck + lint + knip +
    fallow + 100% coverage vitest + build) and `npm run spec:validate`;
    then the PR flow: branch `feat/template-glean` → PR → immediate squash
    merge → `[~]`→`[x]` bookkeeping in TEMPLATES.md + `npm run readme:status`.

## Verification checklist (prep-side, already done)

- [x] Live preview DOM fetched + analyzed (real URL under
      `/theme/bootstrap/` prefix — the default 404s, like the Modal series).
- [x] Design tokens extracted from the custom CSS tail (tokens above;
      brand `#fd5f00` orange — NOT the green `#52de97` of Multiselect 01–04).
- [x] Screenshot viewed in the browser and described (visual design noted).
- [x] Live browser interaction: open, select 2, orange checked fill, chips,
      clear-all verified; panel-stays-open + search + tags behavior noted.
- [x] Spec written: `openspec/specs/template-glean/spec.md`.
- [x] Name collision check: `glean` free in `apps/`, `openspec/specs/`,
      `docs/templates/`.
