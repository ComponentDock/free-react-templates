# Picker (ColorLib Multiselect 01) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Picker** (NEW name —
> the ColorLib source keeps its name "Multiselect 01"). Implementation ships
> on `feat/template-picker` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Multiselect 01" — free single-page multiselect
  dropdown component template (source:
  https://colorlib.com/wp/template/multiselect-01/). TEMPLATES.md row: line
  823 (**Bootstrap Multiselect (20)**, header line 822). The
  `multiselect-01` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16 by direct
  fetch AND browser interaction):** the default
  `https://preview.colorlib.com/theme/multiselect-01/` returns **404** —
  the REAL preview is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-01/`
  (HTTP 200, 3.6KB HTML — the whole page is 52 lines; the Bootstrap
  UI-component series lives under the `/theme/bootstrap/` prefix).
  Stylesheets: `css/style.css` (**222.4KB — CUSTOMIZED Bootstrap 4.3.1 +
  ~160-line custom token tail starting at ~218.7KB; read the tail only**),
  font-awesome 4.7 CDN (only for `fa-check` in the checked checkbox — use
  lucide `Check`). **Lato** (300/400/700) cf-fonts @font-face blocks in the
  head — headings use `"Lato", Arial, sans-serif` weight 400; body stays on
  the Bootstrap default sans stack (load Lato as the app font anyway — it
  IS the template's loaded family). `js/main.js` (59 bytes): the ONLY demo
  logic — `$('#multiple-checkboxes').multiselect({ includeSelectAllOption:
true })` — plugin defaults for everything else (`numberDisplayed: 3`, so
  ≤3 selections show as a comma-joined list; "None selected" /
  "All selected" / "N of 6 selected" labels are stock). Screenshot
  (`multiselect-01.jpg`, 1200×972) browser-verified 2026-08-16: pale-gray
  page, centered dark "Multiselect #01" heading, gray "Select Language:"
  label, white trigger box ("None selected" + small gray caret), dropdown
  OPEN showing the white panel: "Select all" + PHP / JavaScript / Java /
  SQL / Jquery / .Net with blank 20px square checkboxes.
- **QUIRK — no label association:** the source is a bare `strong.sl`
  "Select Language:" beside a plugin-hidden `<select multiple>` — zero
  programmatic association. Fix in the recreation: real
  `htmlFor`/`id` (or `aria-label` on the trigger) — documented deviation.
- **QUIRK — trigger label rules (plugin defaults):** 0 → "None selected";
  ≤3 → comma-joined names (`numberDisplayed: 3`) e.g. "PHP,JavaScript"
  (VERIFIED live); all → "All selected"; else → "N of 6 selected". Recreate
  exactly; test all four states.
- **QUIRK — panel stays open while selecting:** clicking PHP and
  JavaScript (verified live) keeps the panel open — that is the multiselect
  pattern. Only outside-click / Escape / re-toggling the trigger closes it.
- **QUIRK — checked checkbox:** fill `#52de97` (soft green) + WHITE check
  (`fa-check` glyph in source; lucide `Check`), border removed. Unchecked:
  20×20, 2px `rgba(0,0,0,0.2)` border, radius 4px, transparent fill, 15px
  gap to label.
- **Structure observed (1:1):**
  - `section.ftco-section` (`padding: 7em 0` ≈ 112px) → `div.container` →
    `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #01" (`font-size: 28px; color: #000`, Lato 400). Demo
       label — rename to the brand name "Picker" (+ a demo subtitle like the
       sibling recreations, e.g. "Picker" heading + "Select Language" row).
    2. `div.col-md-8.col-lg-5.d-flex.justify-content-center.align-items-center`
       → `div.d-flex.text-left.align-items-center.w-100`:
       - `strong.sl` — "Select Language:" — `color: gray; width: 150px`.
       - `select#multiple-checkboxes` (hidden by the plugin) — options:
         PHP, JavaScript, Java, SQL, Jquery, .Net.
  - Trigger (plugin-rendered): `div.btn-group` (`height: 52px; width:
calc(100% - 150px)`) → `button.multiselect.btn` — `border-radius: 4px;
background: #fff; box-shadow: 0px 10px 23px -16px rgba(0,0,0,0.14);
padding: 0 10px; text-align: left`; caret `button:after` at right 20px,
    `color: #999999`, vertically centered. NO real border (the faint edge
    you see is the shadow) — do not add `border` in the recreation.
  - Panel (plugin-rendered): `ul.multiselect-container.dropdown-menu` —
    `position: absolute; width: 100%; padding: 10px 0; border: none;
box-shadow: 0px 10px 23px -16px rgba(0,0,0,0.14)`; Bootstrap dropdown
    white bg + 4px radius + `margin-top: -1px`. Rows: "Select all"
    (`font-weight: 700; color: gray`) then options as `li > a > label`
    (16px, weight 500, `margin-bottom: 12px`, `padding-left: 20px`) with
    the custom `label:before` checkbox (20×20, 2px `rgba(0,0,0,0.2)`,
    radius 4px, 15px margin-right); `.active` row → `#52de97` fill + white
    check, border 0.
  - No footer in source → mandatory minimal Component Dock footer.
- **Design tokens (full list in the spec):** brand `#52de97` (checked
  fill), white trigger/panel, radius 4px, shadow `0 10px 23px -16px
rgba(0,0,0,0.14)`, caret `#999`, checkbox border `rgba(0,0,0,0.2)`, label
  gray, heading `#000` 28px, Lato 400.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/cura`), rename
   package to `@free-react-templates/picker`, set `public/CNAME` to
   `picker.free.componentdock.com` and `"homepage"` to
   `https://picker.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace (grep check
   `free-react-templates/picker`). Keep `injectUiSource()` in
   `vite.config.ts`. Copy the MemoryStorage polyfill from
   `apps/cura/src/test/setup.ts` (jsdom 30 has no localStorage).
2. **State model** — simplest shape wins: keep the option list in a
   constant (`APP_LANGUAGES = ['PHP','JavaScript','Java','SQL','Jquery',
'.Net']`); component state = `selected: Set<string>` (or `string[]`) +
   `open: boolean`. Derive the trigger label with a pure function:
   `labelFor(selected, all)` → "None selected" | comma-joined (≤3) |
   "N of 6 selected" | "All selected" — extract it for 100%-coverage unit
   tests of all four rules.
3. **Sections** — `App.tsx` composes: `HeadingSection` (h2 "Picker" +
   subtitle if desired), `MultiselectControl`, `Footer`. Match the
   component-per-section layout of sibling apps.
4. **MultiselectControl** — flex row: `<label>` "Select Language:" (gray,
   w-[150px]) + trigger `button` (the real `<label>`/`<button>` pair fixes
   the source's missing association). Trigger: `type="button"`,
   `aria-haspopup="listbox"`, `aria-expanded={open}`, white bg, rounded-[4px],
   h-[52px], px-[10px], text-left, shadow `0 10px 23px -16px
rgba(0,0,0,0.14)`; `ChevronDown` absolutely right-20px `text-[#999]`
   (probe lucide export — `ChevronDown` exists; fall back to `ChevronDown`/
   `ArrowDown` per probe result). Panel: `role="listbox"` (semantic upgrade
   over the source's `a>label` soup), white, rounded-[4px], shadow same,
   `w-full`, `py-2.5`; rows are `label`-wrapped checkboxes — custom 20×20
   square via a styled `input[type=checkbox]` (accent-color `#52de97` won't
   give the 2px-border look — use the classic hidden-input + styled span
   pattern from the source: border 2px `rgba(0,0,0,0.2)`, rounded-[4px],
   checked → bg `#52de97` + white `Check` icon, border-0) with the option
   text at 16px/500, `mb-3`, `pl-5`. "Select all" row first: bold gray,
   `indeterminate` state when partially selected (nice a11y touch).
5. **Interaction** — toggle on checkbox change (NOT on row click only):
   clicking an option flips its membership and DOES NOT close the panel;
   "Select all" toggles all. Close on: outside click (document listener in
   `useEffect`, ref-based containment), Escape key, re-click of the trigger.
   Selections persist across open/close. Optional but faithful: keep the
   panel open during selection — this is the verified source behavior.
6. **A11y + focus** — all interactive elements `focus-visible` rings per
   repo conventions; panel options expose checked state (`aria-checked` on
   role=option or native checkbox semantics — pick per the shared Button
   patterns and keep it testable); close on Escape; `aria-expanded` flips.
   Focus moves to the panel when it opens (improvement over the source, in
   the spirit of the sibling recreations' documented fixes).
7. **Footer** — minimal "More templates at Component Dock" line linking
   `https://www.componentdock.com/` (small muted text, contentinfo
   landmark).
8. **Tests (TDD, 100% coverage)** — colocated `*.test.tsx`:
   - `labelFor` unit tests: none → "None selected"; 1–3 → comma list;
     all → "All selected"; 4–5 → "N of 6 selected".
   - Control render: label + trigger ("None selected") + aria props;
     open panel shows "Select all" + 6 options with unchecked squares.
   - Selection: click PHP + JavaScript → both checked (green fill state),
     panel STILL open, trigger "PHP,JavaScript"; click one again →
     unchecked + label updates; remove all → "None selected".
   - Select-all both ways; overflow label ("4 of 6 selected") after 4
     picks; "All selected" at 6/6.
   - Dismiss: outside click, Escape, trigger re-click — panel closes,
     `aria-expanded` false, selections preserved.
   - Footer renders Component Dock link; document title correct.
9. **Gate** — `scripts/verify-app.sh picker` (typecheck + lint + knip +
   fallow + 100% coverage vitest + build) and `npm run spec:validate`; then
   the PR flow: branch `feat/template-picker` → PR → immediate squash merge
   → `[~]`→`[x]` bookkeeping in TEMPLATES.md + `npm run readme:status`.

## Verification checklist (prep-side, already done)

- [x] Live preview DOM fetched + analyzed (real URL under
      `/theme/bootstrap/` prefix — the default 404s, like the Modal series).
- [x] Design tokens extracted from the custom CSS tail (tokens above).
- [x] Screenshot viewed in the browser and described (visual design noted).
- [x] Live browser interaction: open, select 2, checked fill, label rules
      verified.
- [x] Spec written: `openspec/specs/template-picker/spec.md`.
- [x] Name collision check: `picker` free in `apps/`, `openspec/specs/`,
      `docs/templates/`.
