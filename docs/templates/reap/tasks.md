# Reap (ColorLib Multiselect 07) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Reap** (NEW name —
> the ColorLib source keeps its name "Multiselect 07"). Implementation ships
> on `feat/template-reap` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Multiselect 07" — free single-page multiselect
  dropdown component template (source:
  https://colorlib.com/wp/template/multiselect-07/). TEMPLATES.md row: line
  829 (**Bootstrap Multiselect (20)**, section header line 821). The
  `multiselect-07` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-17 by direct
  fetch + screenshot cross-check):** the default
  `https://preview.colorlib.com/theme/multiselect-07/` returns **404** —
  the REAL preview is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-07/`
  (HTTP 200, 4,000 bytes — the whole page is ~60 lines; the Bootstrap
  UI-component series lives under the `/theme/bootstrap/` prefix).
  Stylesheets: `css/style.css` (**222,822 bytes — CUSTOMIZED Bootstrap
  4.3.1 + a custom Semantic-UI token tail from ~line 8135; read the tail
  only**), Semantic UI 2.2.13 `semantic.min.css` from the jsdelivr CDN
  (the widget's default chrome — box border/radius, chips, menu, chevron
  icon), and font-awesome 4.7 (USED for the menu row bullet:
  `content: '\f192'` = `fa-circle-thin` hollow circle). **Lato** (300/400/700)
  cf-fonts @font-face blocks in the head — the custom tail sets
  `body { font-family: "Lato", Arial, sans-serif; font-size: 16px;
line-height: 1.8; background: #fff; color: gray }` (page is WHITE, not
  `#fafafa` like Multiselect 06) and `h1–h5 { line-height: 1.5;
font-weight: 400; font-family: "Lato"; color: #000 }`.
  `js/main.js` is 270 bytes and does ONE thing:
  `$('.label.ui.dropdown').dropdown();` (plus no-op handlers that match
  nothing on this page) — ALL widget behavior is stock Semantic UI 2.2
  multiple-selection semantics.
- **KEY DIFFERENCE vs Multiselect 01–06 (a FOURTH widget family):** 01–04
  use the bootstrap-multiselect plugin (green `#52de97`, "Select all" row,
  6 language options); 05 uses select2 (orange `#fd5f00`, 13 generic
  options, search + tags + clear-all); 06 uses a custom hand-rolled jQuery
  widget (deep orange `#f16821`, 5 language options, fixed 240px box);
  **07 uses Semantic UI 2.2.13** (rose `#e8647c`, FLUID box width, "Select
  Topics" field label, 10 relationship/life options). Tokens are DIFFERENT:
  brand rose `#e8647c` (not green, not `#fd5f00`, not `#f16821`), page
  `#fff`, menu fills SOLID rose (06's menu stayed white), chips are rose
  (06's chips were a soft blue-grey tint). Do NOT copy the sibling specs'
  token values.
- **QUIRK — the dropdown menu IS the unselected set (VERIFIED in the source
  screenshot):** the open menu showed Family, Family Law, Friends, Work,
  Basketball, Investors, US Embassy — while chips Co-workers, Baseball, and
  Startup (already selected) were ABSENT from the menu. Semantic 2.2
  multiple selection moves picked rows into chips; the menu lists only the
  not-yet-selected options. Selecting re-renders menu + chip; chip ×
  re-inserts the row.
- **QUIRK — menu stays open while selecting:** stock Semantic 2.2 multiple
  behavior (single dropdowns close on select; multiple do not). Closes on
  outside click (Semantic's document handler), Escape, or re-toggle.
- **QUIRK — placeholder visibility:** the in-box placeholder "Select Topics"
  (the `<option value="">`) shows only while nothing is selected; first
  chip hides it, last chip removal restores it. There are TWO "Select
  Topics" strings: the field `label` ABOVE the box (always visible) and the
  conditional in-box placeholder.
- **QUIRK — no search / no clear-all / no select-all:** Semantic only
  renders a search box with the `search` class — this demo's select has NO
  `search` class and main.js never adds one. No "Select all" row, no
  clear-all button. Per-row selection only.
- **QUIRK — scrollable menu:** Semantic's default menu
  `max-height: 14.28571429rem; overflow-y: auto` is overridden to
  `max-height: none` in the ACTIVE state by the custom tail, yet the
  screenshot shows a scrollbar — implement `max-height` (~14.3rem) +
  `overflow-y: auto` to match the shot, and note the source-CSS-vs-screenshot
  discrepancy in the PR.
- **Structure observed (1:1):**
  - `section.ftco-section` (`padding: 7em 0` ≈ 112px; page bg `#fff`) →
    `div.container` → two `div.row.justify-content-center`:
    1. `div.col-md-6.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #07" (`font-size: 28px; color: #000`, Lato 400). Demo
       label — rename to the brand name "Reap".
    2. `div.col-lg-4.col-md-6.d-flex.justify-content-center.align-items-center`
       → `div.inline.w-100.field` → `label` "Select Topics" →
       `select[name="skills"][multiple]` with Semantic classes
       `label ui selection fluid dropdown` (hidden by Semantic after init)
       — placeholder `<option value="">Select Topics</option>` + 10
       options: Family, Family Law, Friends, Co-workers, Startup, Work,
       Basketball, Baseball, Investors, US Embassy.
  - Widget (Semantic-rendered): closed box `.ui.selection.dropdown` —
    white, `border: 1px solid rgba(34,36,38,0.15)`,
    `border-radius: 0.28571429rem` (~4.6px), custom `padding: 8px 10px`,
    text `font-size: 14px !important`; hover/focus → `border: 1px solid
#e8647c` + text `#e8647c`; chevron (Semantic "dropdown" icon) right,
    `top: 14px`, down closed / up open. Open: `.active` → border + text
    `#e8647c` (radius 4px); menu `background: #e8647c`, `border-radius:
4px`, `margin-top: 4px`, `box-shadow: 0 3px 19px -15px rgba(0,0,0,0.41)`;
    rows `.menu > .item` — `color: #fff`, 16px, `padding: 15px 15px 15px
35px`, `border-top: 1px solid #ef90a2`, `::after` FA `\f192` hollow
    circle (12px, left 15px, vertically centered); hover →
    `background: #fff; color: #e8647c`. Chips `.ui.label` — `background:
#e8647c`, `box-shadow: none`, white label, remove link `color: #fff;
padding: 6px 8px`, `.delete.icon` opacity 1.
  - No footer in source → mandatory minimal Component Dock footer.
- **Design tokens (full list in the spec):** brand **`#e8647c`** (rose —
  menu fill, chips, active/hover/focus border + text, link color,
  `.bg-primary`), row rule **`#ef90a2`**, page bg **`#fff`** (white!),
  box border `rgba(34,36,38,0.15)`, placeholder + field label muted
  dark gray, heading `#000` 28px, body gray, **Lato** 400 (headings) /
  16px 1.8 (body), menu shadow `0 3px 19px -15px rgba(0,0,0,0.41)`.
- **Screenshot (`multiselect-07.jpg`, 1200×972) browser-verified
  2026-08-17:** white page, centered dark "Multiselect #07" heading,
  "Select Topics" label, widget OPEN: three rose chips (Co-workers,
  Baseball, Startup — white labels + ×) in the box, solid-rose menu below
  with white circled rows and `#ef90a2` rules; the "Work" row hovered
  (white bg + rose text); a scrollbar on the menu edge; no other page
  content. Rose `#e8647c` is the only hue.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/cura`), rename
   package to `@free-react-templates/reap`, set `public/CNAME` to
   `reap.free.componentdock.com` and `"homepage"` to
   `https://reap.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace (grep check
   `free-react-templates/reap`). Keep `injectUiSource()` in
   `vite.config.ts`. This template has no dark mode — the MemoryStorage
   polyfill from `apps/cura/src/test/setup.ts` likely not needed.
2. **State model** — simplest shape wins: `OPTIONS = ['Family', 'Family
Law', 'Friends', 'Co-workers', 'Startup', 'Work', 'Basketball',
'Baseball', 'Investors', 'US Embassy']` constant (10 options; NO
   placeholder pseudo-option in state); component state = `selected:
string[]` + `open: boolean`. `selected` drives BOTH the chips and the
   menu content (menu = `OPTIONS.filter(o => !selected.includes(o))`).
   No other widget state (no search query, no tags, no clear-all).
3. **Sections** — `App.tsx` composes: `HeadingSection` (h2 "Reap"),
   `MultiselectControl`, `Footer`. Match the component-per-section layout of
   sibling apps.
4. **MultiselectControl** — white page section `min-h-screen bg-white` with
   ~112px vertical padding; centered column (`max-w` ~col-lg-4 width, e.g.
   `max-w-md`), `mb-12` under the heading. Field `label` "Select Topics"
   above the control (always visible, muted dark gray). Trigger box `div`
   (`role="combobox"` OR button semantics + `aria-haspopup="listbox"`
   `aria-expanded={open}`, keyboard toggle via Enter/Space, `tabIndex={0}`,
   `aria-label`="Select Topics"): `border border-[rgba(34,36,38,0.15)]
rounded-[4.6px] bg-white px-2.5 py-2 text-sm`, hover/focus/open →
   `border-[#e8647c]` + text `text-[#e8647c]`, `focus-visible` ring per repo
   conventions. Inside, in flow order: placeholder span ("Select Topics",
   muted gray, hidden when `selected.length > 0`), selected chips (rose
   `bg-[#e8647c] text-white`, white `X` remove button with per-chip
   `aria-label` e.g. `Remove Family`), chevron `ChevronDown`/`ChevronUp`
   right-aligned (`text-[#e8647c]` when open). Whole box click toggles
   `open`.
5. **Menu** — `role="listbox"` (semantic upgrade over Semantic's menu divs),
   absolute below the box: `bg-[#e8647c] rounded-[4px] mt-1
shadow-[0_3px_19px_-15px_rgba(0,0,0,0.41)] max-h-[14.3rem]
overflow-y-auto` (matches the screenshot scrollbar); closed state hidden
   (`hidden` / `invisible`). Rows `li`/`div` (`role="option"` +
   `aria-selected`): `text-white text-base py-[15px] pl-[35px] pr-[15px]
border-t border-[#ef90a2] relative`, hollow-circle bullet via lucide
   `Circle` (size 12, absolute left 15px, centered — probe the export; the
   source uses FA `fa-circle-thin`), hover `hover:bg-white hover:text-
[#e8647c]`, first row `border-t-0` (the source's first row has no visible
   rule at the top of the menu). Content = the 10 option labels EXCLUDING
   selected ones. NO "Select all" row, NO search input, NO clear-all button.
6. **Interaction** — click a row → add to `selected` (chip appears, row
   leaves the menu, menu STAYS open — VERIFIED: Semantic 2.2 multiple
   dropdowns never close on select); click a chip's × → remove from
   `selected` (row re-enters the menu; placeholder returns when `selected`
   is empty). Toggle `open` on box click; close on: outside click (document
   listener in `useEffect`, ref-based containment), Escape key, re-toggle.
   Selections persist across open/close. Skip Semantic's animations —
   smooth CSS transitions are enough.
7. **A11y + focus** — trigger exposes `aria-haspopup="listbox"`/
   `aria-expanded` and is keyboard-activatable (Enter/Space), close on
   Escape; rows expose `role="option"` + `aria-selected`; chip × buttons
   get `aria-label`; `focus-visible` rings per repo conventions.
8. **Footer** — minimal "More templates at Component Dock" line linking
   `https://www.componentdock.com/` (small muted text, contentinfo
   landmark).
9. **Tests (TDD, 100% coverage)** — colocated `*.test.tsx`:
   - Render: heading "Reap"; white page; field label + box with placeholder
     "Select Topics", down chevron, `aria-haspopup`/`aria-expanded=false`,
     NO chips; document title "Reap — Multiselect Dropdown".
   - Open: click box → rose menu with all 10 options, `aria-expanded=true`,
     chevron up; box border/text rose.
   - Selection: click "Family" then "Startup" → chips Family + Startup
     appear (each with `aria-label`'d remove ×), rows leave the MENU, menu
     STILL open, placeholder hidden.
   - Deselection: click Family chip × → chip gone, "Family" row back in the
     menu; remove last chip → placeholder visible again.
   - Dismiss: outside click, Escape, re-toggle — closes, `aria-expanded`
     false, selections preserved.
   - Hover state: assert the hover classes on a row (or skip — CSS-only).
   - Absent controls: queryByRole no searchbox, no button for clear-all,
     no "Select all" row.
   - Footer renders Component Dock link.
10. **Gate** — `scripts/verify-app.sh reap` (typecheck + lint + knip +
    fallow + 100% coverage vitest + build) and `npm run spec:validate`;
    then the PR flow: branch `feat/template-reap` → PR → immediate squash
    merge → `[~]`→`[x]` bookkeeping in TEMPLATES.md + `npm run readme:status`.

## Verification checklist (prep-side, already done)

- [x] Live preview DOM fetched + analyzed (real URL under
      `/theme/bootstrap/` prefix — the default 404s, like the rest of the
      Bootstrap UI series).
- [x] Design tokens extracted from the custom CSS tail (tokens above;
      brand `#e8647c` rose — NOT `#52de97` of 01–04, NOT `#fd5f00` of 05,
      NOT `#f16821` of 06; page bg `#fff` white).
- [x] Screenshot viewed in the browser and described (visual design noted:
      three rose chips selected, solid-rose open menu with white circled
      rows, hovered "Work" row inverted to white, scrollbar; menu = the
      unselected set — chips' options absent from the list).
- [x] main.js read end-to-end (270 bytes: plain Semantic
      `$('.label.ui.dropdown').dropdown()` init — no custom widget code;
      all behavior is stock Semantic 2.2 multiple-selection semantics).
- [x] Spec written: `openspec/specs/template-reap/spec.md`.
- [x] Name collision check: `reap` free in `apps/`, `openspec/specs/`,
      `docs/templates/`, TEMPLATES.md (verified 2026-08-17).
