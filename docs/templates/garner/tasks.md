# Garner (ColorLib Multiselect 06) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Garner** (NEW name —
> the ColorLib source keeps its name "Multiselect 06"). Implementation ships
> on `feat/template-garner` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Multiselect 06" — free single-page multiselect
  dropdown component template (source:
  https://colorlib.com/wp/template/multiselect-06/). TEMPLATES.md row: line
  828 (**Bootstrap Multiselect (20)**, section header line 821). The
  `multiselect-06` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-17 by direct
  fetch + screenshot cross-check):** the default
  `https://preview.colorlib.com/theme/multiselect-06/` returns **404** —
  the REAL preview is
  `https://preview.colorlib.com/theme/bootstrap/multiselect-06/`
  (HTTP 200, 3,373 bytes — the whole page is ~50 lines; the Bootstrap
  UI-component series lives under the `/theme/bootstrap/` prefix).
  Stylesheets: `css/style.css` (**231,275 bytes — CUSTOMIZED Bootstrap
  4.3.1 + a custom `.selectMultiple` token tail from ~line 8136; read the
  tail only**), font-awesome 4.7 (loaded but UNUSED — the chevron/× glyphs
  are pure CSS bars). **Lato** (300/400/700) cf-fonts @font-face blocks in
  the head — the custom tail sets `body { font-family: "Lato", Arial,
sans-serif; font-size: 16px; line-height: 1.8; background: #fafafa;
color: gray }` (Lato IS the app font; body 16px/1.8 — unlike Multiselect
  05, this variant also restyles the BODY, not just headings) and `h1–h5 {
line-height: 1.5; font-weight: 400; font-family: "Lato"; color: #000 }`.
  `js/main.js` builds the whole widget from the hidden `select[multiple]`:
  wrap → build box (placeholder span + selected chips + arrow div) + list
  (li per unselected option); click li → wait 500ms → chip + select the
  option (keep panel open); click chip → animate width to 0 → re-add li +
  deselect + unhide placeholder when empty; click arrow/placeholder span →
  toggle `open`.
- **KEY DIFFERENCE vs Multiselect 01–05:** this variant uses a **custom
  write-your-own jQuery widget**, NOT bootstrap-multiselect (01–04) and NOT
  select2 (05). Tokens are DIFFERENT: deep brand orange `#f16821` (not
  green `#52de97`, not `#fd5f00`); 5 LANGUAGE options (Javascript, jQuery,
  HTML, Wordpress, PHP — back to languages, like 01–04's 6, but a different
  set); **NO search, NO clear-all, NO select-all** — chips + × only. Do NOT
  copy the Picker/Sifter/Winnow/Cull/Glean specs' token values.
- **QUIRK — the dropdown list IS the unselected set (VERIFIED in main.js):
  selecting a row REMOVES it from the list and adds a chip to the box;
  deselecting (chip ×) re-inserts the row into the list.** The panel never
  shows checked rows — rows just disappear on select. This is the widget's
  defining interaction (contrast: select2 keeps rows and checks them).
- **QUIRK — panel stays open while selecting:** nothing in main.js closes
  the dropdown when a row is clicked. It closes only via the arrow/
  placeholder toggle (open class removed). Outside click does NOT close it
  in the source either (no document click-outside handler) — closing on
  outside click is a documented a11y lift for the React version (glean
  does the same).
- **QUIRK — placeholder visibility:** the "Add Language" span shows only
  while nothing is selected; first chip hides it, last chip removal brings
  it back.
- **QUIRK — open trigger is narrow:** only clicks on the arrow or the
  placeholder span toggle `open` (source jQuery selector). Make the whole
  box the toggle target in React (bigger hit target, same behavior) and
  note it as a deviation.
- **QUIRK — commented-out pre-selection:** the source has
  `<option selected>Framer X</option>` COMMENTED OUT — the demo renders with
  NO selection. Recreate the no-selection initial state (do NOT ship a
  preselected chip; note Framer X is not an option).
- **Structure observed (1:1):**
  - `section.ftco-section` (`padding: 7em 0` ≈ 112px; page bg `#fafafa`) →
    `div.container` → two `div.row.justify-content-center`:
    1. `div.col-md-7.text-center.mb-5` → `h2.heading-section` —
       "Multiselect #06" (`font-size: 28px; color: #000`, Lato 400). Demo
       label — rename to the brand name "Garner".
    2. `div.col-lg-4.d-flex.justify-content-center.align-items-center` →
       `select[multiple][data-placeholder="Add Language"]` (hidden by the
       plugin) — 5 options: Javascript, jQuery, HTML, Wordpress, PHP.
  - Widget (plugin-rendered): `div.selectMultiple` (`width: 240px;
position: relative`) →
    - box `div`: `padding: 8px 12px 2px 12px; border-radius: 8px; background:
#fff; font-size: 14px; min-height: 44px; box-shadow: 0 4px 16px 0 rgba(22,
42, 90, 0.12)` (hover `0 4px 24px -1px rgba(22,42,90,0.16)`; open `0 4px
20px -1px rgba(22,42,90,0.12)`). Inside: placeholder `span` (absolute
      `left: 12px; top: 8px; line-height: 28px`, `#99A3BA`, `.hide` →
      invisible when ≥1 chip), chips `a` (`padding: 0 24px 6px 8px;
line-height: 28px; color: #000; margin: 0 6px 0 0`; soft bg `:before`
      `rgba(228,236,250,0.7)` radius 4px; remove `i` = two 2px×10px bars
      `#f16821` radius 1px rotated ±45°), arrow `div` (28px wide; two 2px×8px
      bars `border-bottom: 8px solid #99A3BA`; closed ±130° = down chevron,
      open ±50° = up chevron).
    - list `ul`: `position: absolute; top: 100%; left: 0; right: 0;
border-radius: 8px; list-style: none`; closed `opacity: 0; visibility:
hidden; transform: translate(0, 20px) scale(0.8); transform-origin: 0 0;
filter: drop-shadow(0 12px 20px rgba(22,42,90,0.08))`; open `.open > ul` →
      `translate(0, 12px) scale(1); opacity 1; drop-shadow(0 16px 24px
rgba(22,42,90,0.16))`. Rows `li`: `padding: 12px 16px; color: #000;
background: #fff; cursor: pointer`; first `border-radius: 8px 8px 0 0`,
      last `0 0 8px 8px`; HOVER → `background: #f16821; color: #fff`; remove
      → ripple keyframe (6px `rgba(0,0,0,0.4)` dot scaling to ~50×, 0.4s
      ease-out).
  - No footer in source → mandatory minimal Component Dock footer.
- **Design tokens (full list in the spec):** brand **`#f16821`** (row hover
  fill + white text, chip × bars; also `a` link color + `.bg-primary` in
  the demo), placeholder/chevron **`#99A3BA`**, chip tint
  **`rgba(228,236,250,0.7)`**, box/panel **white** (8px radius), panel
  shadows `rgba(22,42,90,…)` (0.08 closed / 0.16 open drop-shadows, 0.12
  box shadow), page bg **`#fafafa`**, body text **gray**, heading `#000`
  28px, **Lato** 400 (headings) / 16px 1.8 (body).
- **Screenshot (`multiselect-06.jpg`, 1200×972) browser-verified 2026-08-17:**
  light `#fafafa` page, centered dark "Multiselect #06" heading, widget OPEN:
  white box with grey "Add Language" placeholder + up-chevron, white dropdown
  panel below with soft drop-shadow listing Javascript, jQuery, HTML,
  Wordpress (hovered → solid orange fill), PHP. No chips visible (nothing
  selected in the shot). Orange `#f16821` is the only hue.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app (e.g. `apps/cura`), rename
   package to `@free-react-templates/garner`, set `public/CNAME` to
   `garner.free.componentdock.com` and `"homepage"` to
   `https://garner.free.componentdock.com`. Run `npm install` at root so
   `package-lock.json` registers the workspace (grep check
   `free-react-templates/garner`). Keep `injectUiSource()` in
   `vite.config.ts`. Copy the MemoryStorage polyfill from
   `apps/cura/src/test/setup.ts` (jsdom 30 has no localStorage) if dark-mode
   persistence is used — this template has no dark mode, so likely not
   needed.
2. **State model** — simplest shape wins: `OPTIONS = ['Javascript',
'jQuery', 'HTML', 'Wordpress', 'PHP']` constant; component state =
   `selected: string[]` + `open: boolean`. `selected` drives BOTH the chips
   and the list content (list = `OPTIONS.filter(o => !selected.includes(o))`).
   No other widget state (no search query, no tags, no clear-all).
3. **Sections** — `App.tsx` composes: `HeadingSection` (h2 "Garner"),
   `MultiselectControl`, `Footer`. Match the component-per-section layout of
   sibling apps.
4. **MultiselectControl** — outer wrapper `div` (`w-[240px] relative`,
   `mx-auto`; in a centered `max-w` container column). Trigger box `div`
   (`role` + `aria-haspopup="listbox"` `aria-expanded={open}`, keyboard
   toggle via Enter/Space, `tabIndex={0}`): `rounded-[8px] bg-white`,
   `min-h-[44px]`, `px-3 pb-0.5 pt-2` (8px/12px/2px), `text-sm`, shadow
   `shadow-[0_4px_16px_0_rgba(22,42,90,0.12)]`, `aria-label`="Add Language"
   region. Inside, in flow order: placeholder `span` ("Add Language",
   `text-[#99A3BA]`, hidden when `selected.length > 0`), selected chips
   (soft `bg-[rgba(228,236,250,0.7)]` `rounded`, black label, orange `X`
   remove button `text-[#f16821]` with `aria-label` per chip), chevron
   `ChevronDown`/`ChevronUp` (`text-[#99A3BA]`, right-aligned) — or two CSS
   bars rotated like the source. Whole box click toggles `open` (documented
   lift over the arrow/span-only trigger).
5. **Panel** — `role="listbox"` (semantic upgrade over the source's
   `ul > li` soup), `ul`-style absolute below the box: `rounded-[8px]
bg-white`, drop-shadow `drop-shadow-[0_16px_24px_rgba(22,42,90,0.16)]`,
   closed state hidden; rows `li` (`role="option"` + `aria-selected`) with
   `px-4 py-3` (12px/16px), `text-black`, first/last `rounded-t-[8px]` /
   `rounded-b-[8px]`, hover `bg-[#f16821] text-white` (the source's ONLY
   hover treatment — no checkbox rows, no check marks). Content = the 5
   option labels, EXCLUDING selected ones (rows disappear on select).
   NO "Select all" row, NO search input, NO clear-all button.
6. **Interaction** — click a row → add to `selected` (chip appears, row
   leaves the list, panel STAYS open — VERIFIED: the source never closes on
   select); click a chip's × → remove from `selected` (row re-enters the
   list; placeholder returns when `selected` is empty). Toggle `open` on box
   click; close on: outside click (document listener in `useEffect`,
   ref-based containment — a11y lift, the source has none), Escape key,
   re-toggle. Selections persist across open/close. Skip the jQuery
   animation choreography (500ms chip delay, slideUp/slideDown, ripple) —
   smooth CSS transitions are enough; the ripple is decorative.
7. **A11y + focus** — trigger `aria-haspopup="listbox"`/`aria-expanded`,
   keyboard-activatable (Enter/Space), close on Escape; rows expose
   `role="option"` + `aria-selected`; chip × buttons get `aria-label`
   (e.g. `Remove Javascript`); `focus-visible` rings per repo conventions.
8. **Footer** — minimal "More templates at Component Dock" line linking
   `https://www.componentdock.com/` (small muted text, contentinfo
   landmark).
9. **Tests (TDD, 100% coverage)** — colocated `*.test.tsx`:
   - Render: heading "Garner"; #fafafa page; box with placeholder "Add
     Language", down chevron, `aria-haspopup`/`aria-expanded=false`, NO
     chips (Framer X commented out in the source); document title "Garner —
     Multiselect Dropdown".
   - Open: click box → panel with 5 options Javascript/jQuery/HTML/
     Wordpress/PHP, `aria-expanded=true`, chevron up.
   - Selection: click "Javascript" then "PHP" → chips Javascript + PHP
     appear (each with `aria-label`'d remove ×), rows leave the LIST, panel
     STILL open, placeholder hidden.
   - Deselection: click Javascript chip × → chip gone, "Javascript" row
     back in the list; remove last chip → placeholder visible again.
   - Dismiss: outside click, Escape, re-toggle — closes, `aria-expanded`
     false, selections preserved.
   - Absent controls: queryByRole no searchbox, no button for clear-all,
     no "Select all" row.
   - Footer renders Component Dock link.
10. **Gate** — `scripts/verify-app.sh garner` (typecheck + lint + knip +
    fallow + 100% coverage vitest + build) and `npm run spec:validate`;
    then the PR flow: branch `feat/template-garner` → PR → immediate squash
    merge → `[~]`→`[x]` bookkeeping in TEMPLATES.md + `npm run readme:status`.

## Verification checklist (prep-side, already done)

- [x] Live preview DOM fetched + analyzed (real URL under
      `/theme/bootstrap/` prefix — the default 404s, like the rest of the
      Bootstrap UI series).
- [x] Design tokens extracted from the custom CSS tail (tokens above;
      brand `#f16821` deep orange — NOT `#52de97` of 01–04, NOT `#fd5f00`
      of 05; page bg `#fafafa`).
- [x] Screenshot viewed in the browser and described (visual design noted:
      white box + grey placeholder + up-chevron + open panel with orange
      hover on "Wordpress").
- [x] main.js interaction logic read end-to-end (select removes row + adds
      chip, panel stays open, chip × re-inserts row, placeholder on/off,
      arrow/span-only open trigger).
- [x] Spec written: `openspec/specs/template-garner/spec.md`.
- [x] Name collision check: `garner` free in `apps/`, `openspec/specs/`,
      `docs/templates/`, TEMPLATES.md (verified 2026-08-17).
