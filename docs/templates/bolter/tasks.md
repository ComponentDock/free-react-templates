# Bolter — implementation tasks + design notes

Recreates ColorLib **Multiselect 15** (`multiselect-15`) as **Bolter**.
Read `openspec/specs/template-bolter/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-15/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-15/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-15.jpg` (1200×972, AVIF;
  shows heading "Multi-Select #5", button reading **"12 selected"**, open panel with 3 columns,
  selected rows LIGHT-BLUE)
- Source page: `https://colorlib.com/wp/template/multiselect-15/` (TEMPLATES.md line 837, ONE occurrence)
- Engine: **jQuery-MultiSelect v2.4.18 by Patrick Springstubbe (nobleclem)**
  - jQuery 3.3.1. Siblings 01–08 (Picker/Sifter/Winnow/Cull/Glean/Garner/
    Reap/Pluck) are Semantic UI; 09 (Thresh) is Select2 + DARK; 10 (Sickle)
    is vanilla jQuery + light coral; 11 (Scythe) is Select2 + purple
    `#65587f`; 12 (Sheaf) is Select2 + coral `#f67280`; 13 (Sieve) is
    Select2 + teal `#29c7ac` + fully square; 14 (Fanner) and **15 (Bolter)
    are the jQuery-MultiSelect members**: grayscale page, borderless
    shadowed 4px-radius BUTTON (not an input box), checkbox-per-row state
    list, panel that STAYS OPEN while selecting. Do NOT copy the Select2
    members. **CLOSEST PRECEDENT: `apps/fanner` — copy its React widget
    architecture and change the tokens below.**

## What makes Bolter DIFFERENT from Fanner (14) — the "delta" list

| Aspect            | Fanner (14)                                             | **Bolter (15)**                                                    |
| ----------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
| Config columns    | `columns: 2`                                            | **`columns: 3`** (3-column list, column-gap 0)                     |
| Widget column     | `col-md-3` ≈ 255px                                      | **`col-md-5` ≈ 475px** (wider; centered `max-w-[480px]`)           |
| Panel width       | `min-width: 320px`, `left: 16px` — OVERFLOWS the column | **SAME width as the column** (width 100%, left 0, NO min-width)    |
| Panel gap         | `margin-top: 1px` (plugin default)                      | **`margin-top: 12px`** (deliberate gap — use `mt-3`)               |
| Selected rows     | bg `#efefef` (gray)                                     | **bg `#e1f2fb` (LIGHT BLUE)** — the signature color                |
| Hover rows        | bg `#efefef`                                            | **bg `#f7f7f7`** (near-white)                                      |
| Heading           | "Multi-Select #4"                                       | **"Multi-Select #5"** → recreate as "Bolter"                       |
| Screenshot button | "6 selected"                                            | **"12 selected"** (wider button; same counter logic)               |
| Page `p` style    | — (no p rules)                                          | `p { color: #b3b3b3; font-weight: 300 }` (page still has NO `<p>`) |

Everything else (button, caret, shadow, search, select-all, panel padding,
row padding, checkbox position, stay-open behavior, 50 states, Roboto,
`#efefef` page) is IDENTICAL to Fanner.

## Section order (1:1)

1. Heading — centered h2 "Bolter" (20px, dark `#212529`, Roboto) on the
   LIGHT-GRAY `#efefef` page, ~112px page padding (`py-28`), centered
   container, widget in a centered WIDE column (`max-w-[480px]`).
2. Multiselect control — NO label (source has none; add `aria-label`
   "Select states"). Borderless white button (40px, 4px radius, subtle
   shadow → deeper on hover/open, right caret) showing "Select States"
   (placeholder, gray) / comma-joined selections (`#333`) / "N selected".
   Open panel: floating white card (NO border, 4px radius, SAME width as
   the column, **12px gap below the button**, `0 15px 30px` shadow, 20px
   padding) with search box ("Search States", bottom-rule only), uppercase
   gray 11px SELECT ALL (flips to "Unselect all"), and the 50 US states in
   **THREE** columns of checkbox rows (selected `#e1f2fb`, hover
   `#f7f7f7`, 4px radius). Panel stays open while selecting; outside click
   / Escape closes.
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles, browser-verified 2026-08-17)

| Token           | Value                                                                                                                                                                                                                                                  | Where                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| Page bg         | **`#efefef`** (light gray — NOT white)                                                                                                                                                                                                                 | body                            |
| Brand accent    | **`#e1f2fb`** light blue — ONLY on selected rows + native blue checkboxes; everything else grayscale (white, `#333`, `#aaa`, `#999`, `#f7f7f7`)                                                                                                        | `li.selected label`             |
| Heading         | 20px, dark `#212529`, Roboto, centered; page padding `7rem 0` (≈112px)                                                                                                                                                                                 | `div.content`, `h2.text-center` |
| Widget column   | `col-md-5` ≈ **475px** centered (of the 1140px container); live computed 475px, button 445px                                                                                                                                                           | `.row.justify-content-center`   |
| Button          | bg `#fff`, **`border: none !important`**, **radius 4px**, height 40px, font 13px, z-index 2, `padding: 5px 20px 5px 10px`, `text-align: left`                                                                                                          | `.ms-options-wrap > button`     |
| Button shadow   | rest `0 1px 1px rgba(0,0,0,0.1)`; hover + open `0 2px 10px rgba(0,0,0,0.1)`; `.3s` transition; outline none                                                                                                                                            | same                            |
| Button text     | placeholder "Select States" `#aaa`; selections `#333` (comma+space join); **"N selected"** when join wider than button OR >10 picks (` selected`)                                                                                                      | button `span`                   |
| Caret           | 6px CSS triangle, `border-top-color: #999`, right 10px, top 50%, margin-top -3px                                                                                                                                                                       | button `::after`                |
| **Panel**       | bg `#fff`, **NO border**, **radius 4px**, **width 100% of the column (≈475px) — NO overflow, `left: 0`**, **`margin-top: 12px`**, padding 20px, `0 15px 30px 0 rgba(0,0,0,0.1)` shadow, z-index 1, absolute, `overflow: auto`, min-height 200px        | `.ms-options`                   |
| Search input    | `width: 100%`, `padding: 4px 5px`, no border, **`border-bottom: 1px solid #efefef`**, outline none, placeholder "Search States"                                                                                                                        | `.ms-search input`              |
| Select-all link | inline-block, `#aaaaaa`, **uppercase**, 11px, hover → `#000`; text flips to "Unselect all"                                                                                                                                                             | `.ms-selectall`                 |
| Options list    | list-style none, padding/margin 0, **`column-count: 3`**, `column-gap: 0` (column 1 fills first, ≈17 rows)                                                                                                                                             | `ul`                            |
| Option rows     | label: `position: relative`, `display: inline-block`, `width: 100%`, padding `4px 4px 4px 20px` (custom top/bottom 5px), margin `1px 0`, **radius 4px**, border none; hover/focus bg **`#f7f7f7`**; selected bg **`#e1f2fb`** with DARK `#212529` text | `li > label`                    |
| Checkbox        | native control, absolute `left: 4px` `top: 7px`, `margin: 0 5px 0 0`; checked = browser default blue                                                                                                                                                   | `label > input[type=checkbox]`  |
| Font            | Roboto (load 300+400 via Google Fonts `<link>`; source loads 300+400)                                                                                                                                                                                  | body + headings                 |

Options (50 US states, alphabetical — live DOM order): Alabama, Alaska,
Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida,
Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky,
Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi,
Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico,
New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania,
Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont,
Virginia, Washington, West Virginia, Wisconsin, Wyoming. (Values AL..WY.)

## Behaviors to recreate (from main.js + plugin + live browser verification)

```js
// the ENTIRE source demo config (js/main.js):
$('select[multiple].active.3col').multiselect({
  columns: 3,
  placeholder: 'Select States',
  search: true,
  searchOptions: { default: 'Search States' },
  selectAll: true,
})
```

1. Click button → panel toggles open/closed; only one open at a time;
   outside click / Escape closes; Enter/Space on the button also toggles.
2. Click a row → checkbox toggles, row gets `#e1f2fb` selected style,
   button text updates — **panel STAYS OPEN** (live-verified). OPPOSITE of
   Scythe/Sheaf/Sieve (those close per selection). Test it.
3. Button text: 0 picks → "Select States" (#aaa); 1..N picks →
   comma+space-joined names (#333) while the join fits; join wider than the
   button OR >10 picks → "N selected" (live: 2 picks showed "California,
   North Carolina"; 50 picks showed "50 selected"; screenshot shows "12
   selected"). Identical logic to Fanner — copy it.
4. Search input: type → rows filtered by case-insensitive substring
   (live: "Ca" → California, North Carolina, South Carolina; 250ms debounce
   in the plugin — an instant filter is equivalent, document it); clear →
   all 50 restored; no-match → empty list, no error.
5. SELECT ALL: checks every VISIBLE row (respects the search filter),
   button flips to "N selected", link text flips to "Unselect all"; clicking
   again clears all and restores "Select all".
6. Selections persist across close/reopen; wheel/touch scrolling is
   isolated inside the panel (page doesn't scroll with it).

## Implementation outline (TDD)

1. Copy the simplest existing app. **Sibling precedence: `apps/fanner` is
   the closest structural precedent** — same engine family, same widget
   model (button + checkbox rows + stay-open panel), same single-control
   page shell and jsdom MemoryStorage polyfill in test setup. Reuse the
   shell and the widget architecture; change the tokens below. Name it
   `apps/bolter`, package `@free-react-templates/bolter`, `public/CNAME` =
   `bolter.free.componentdock.com`, `"homepage"` =
   `https://bolter.free.componentdock.com`. Register the workspace in root
   `package-lock.json` via root `npm install` before committing (deploy
   Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `Multiselect`, `Footer`;
   `main.tsx` entry; document title "Bolter — Multiselect Dropdown". Load
   Roboto 300+400 via Google Fonts `<link>` in `index.html`; page bg
   `#efefef` on the root section; ~112px vertical padding (`py-28`);
   centered container with a centered `max-w-[480px]` column.
3. Data module: `src/data/states.ts` exporting the 50-state array (name +
   abbreviation pairs, source order, no fetch). The 50 rows are static.
4. Component: `src/components/Multiselect.tsx` —
   - Button per tokens (borderless, h-10, 13px, `rounded-[4px]`,
     `shadow-[0_1px_1px_rgba(0,0,0,0.1)]`
     `hover:shadow-[0_2px_10px_rgba(0,0,0,0.1)]`, caret `ChevronDown` from
     lucide-react at right, `aria-haspopup`, `aria-expanded`).
   - State: `selected: Set<string>` (or abbr set), `open: boolean`,
     `query: string`. Panel renders when `open`.
   - Panel: relative/fixed below the button — `mt-3` (the 12px gap), same
     width as the column, white, `rounded-[4px]`, borderless,
     `shadow-[0_15px_30px_rgba(0,0,0,0.1)]`, `p-5`, `max-h-[400px]`
     `overflow-auto`.
   - Search input filtering by case-insensitive substring
     (`query.trim().toLowerCase()`), instant.
   - SELECT ALL link: `text-[11px] uppercase text-[#aaa] hover:text-black`;
     flips label based on whether ALL VISIBLE rows are selected.
   - 3-column list: `columns-3` with `gap-0`; each row `<label>` + `<input
type="checkbox">`, `rounded-[4px] py-[5px] px-1 pl-5`; hover
     `hover:bg-[#f7f7f7]`; selected `bg-[#e1f2fb]` with dark text.
   - Click on a row toggles selection WITHOUT closing the panel; outside
     click (`useEffect` document listener) or Escape closes it.
   - Button text: placeholder / join / "N selected" via the same logic as
     Fanner (join with ", ", counter when join length overflows a
     conservative width budget e.g. 40 chars, or count > 10).
5. Footer: minimal "More templates at Component Dock" linking
   `https://www.componentdock.com/`.
6. Tests (mirror the spec scenarios): heading shell, button placeholder /
   join / counter states, panel open/close (outside click, Escape), 50
   rows in 3 columns, search filter (including no-match), select-all /
   unselect-all / visible-only select-all, stay-open selection, footer
   link. Copy the Fanner test structure and extend for the new tokens
   (3 columns, blue selected rows, 12px gap).
7. Run `npm run verify:app bolter` until green, self-review per
   `docs/self-review.md`, commit `feat: Bolter — ...` on a
   `feat/template-bolter` branch, open + immediately merge the PR.

## Fidelity pitfalls

- Do NOT copy Fanner's `min-w-[320px]` panel overflow or `left` offset —
  Bolter's panel is the SAME width as the column (no overflow) with a 12px
  gap. This is a real spec difference, not a bug.
- Do NOT use `#efefef` for the selected-row highlight — Bolter uses
  **`#e1f2fb`**. Hover is `#f7f7f7`, not `#efefef`.
- The list is **`columns-3`** — check the visual flow: column 1 fills
  top-to-bottom (~17 rows) before column 2. A flex/grid 3-column layout
  that splits the array evenly produces the same visual result; CSS
  multi-column (`columns-3`) is the closest and simplest — use it.
- The `3col` class means nothing functionally — `options.columns: 3` is
  the real switch. Ship `columns-3`, not a `.3col` class.
- Keep the native checkbox (or a faithful styled checkbox); the source
  applies no `accent-color`.
- Selected-row TEXT stays dark `#212529` — only the background is blue.
- No chips, no per-item × — selections live in the button text only.
- No ColorLib string in app files; footer must link componentdock.com.
