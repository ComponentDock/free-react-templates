# Fanner — implementation tasks + design notes

Recreates ColorLib **Multiselect 14** (`multiselect-14`) as **Fanner**.
Read `openspec/specs/template-fanner/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-14/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-14/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-14.jpg` (1200×972, AVIF)
- Source page: `https://colorlib.com/wp/template/multiselect-14/` (TEMPLATES.md line 836, ONE occurrence)
- Engine: **jQuery-MultiSelect v2.4.18 by Patrick Springstubbe (nobleclem)**
  - jQuery 3.3.1. Siblings 01–08 (Picker/Sifter/Winnow/Cull/Glean/Garner/
    Reap/Pluck) are Semantic UI; 09 (Thresh) is Select2 + DARK; 10 (Sickle)
    is vanilla jQuery + light coral; 11 (Scythe) is Select2 + purple `#65587f`;
    12 (Sheaf) is Select2 + coral `#f67280`; 13 (Sieve) is Select2 + teal
    `#29c7ac` + fully square. **14 (Fanner) is the FIRST jQuery-MultiSelect
    member: grayscale/ZERO-SATURATION look, borderless shadowed 4px-radius
    BUTTON (not an input box), checkbox-per-row 2-column state list, panel
    that STAYS OPEN while selecting.** Do NOT copy the Select2 members.

## Section order (1:1)

1. Heading — centered h2 "Fanner" (20px, dark `#212529`, Roboto) on the
   LIGHT-GRAY `#efefef` page, ~112px page padding (`py-28`), centered
   container, widget in a NARROW centered ~255px column (`max-w-[260px]`).
2. Multiselect control — NO label (source has none; add `aria-label`
   "Select states"). Borderless white button (40px, 4px radius, subtle
   shadow → deeper on hover/open, right caret) showing "Select States"
   (placeholder, gray) / comma-joined selections (`#333`) / "N selected".
   Open panel: floating white card (NO border, 4px radius, `min-w-[320px]`
   — WIDER than the column, `left` offset, `0 15px 30px` shadow, 20px
   padding) with search box ("Search States", bottom-rule only), uppercase
   gray 11px SELECT ALL (flips to "Unselect all"), and the 50 US states in
   TWO columns of checkbox rows (selected/hover `#efefef`, 4px radius).
   Panel stays open while selecting; outside click / Escape closes.
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles, browser-verified)

| Token           | Value                                                                                                                                                                                                                                                  | Where                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| Page bg         | **`#efefef`** (light gray — NOT white)                                                                                                                                                                                                                 | body                            |
| Brand accent    | **NONE — zero-saturation grayscale** (white, `#333`, `#aaa`, `#999`, `#efefef`; native blue checkboxes are the only saturated pixels)                                                                                                                  | —                               |
| Heading         | 20px, dark `#212529`, Roboto, centered; page padding `7rem 0` (≈112px)                                                                                                                                                                                 | `div.content`, `h2.text-center` |
| Widget column   | `col-md-3` ≈ **255px** centered (of the 1140px container)                                                                                                                                                                                              | `.row.justify-content-center`   |
| Button          | bg `#fff`, **`border: none !important`**, **radius 4px**, height 40px, font 13px, z-index 2, `padding: 5px 20px 5px 10px`, `text-align: left`                                                                                                          | `.ms-options-wrap > button`     |
| Button shadow   | rest `0 1px 1px rgba(0,0,0,0.1)`; hover + open `0 2px 10px rgba(0,0,0,0.1)`; `.3s` transition; outline none                                                                                                                                            | same                            |
| Button text     | placeholder "Select States" `#aaa`; selections `#333` (comma+space join); **"N selected"** when join wider than button OR >10 picks (` selected`)                                                                                                      | button `span`                   |
| Caret           | 6px CSS triangle, `border-top-color: #999`, right 10px, top 50%, margin-top -3px                                                                                                                                                                       | button `::after`                |
| **Panel**       | bg `#fff`, **NO border**, **radius 4px**, **`min-width: 320px`**, `left: 16px`, padding 20px, `0 15px 30px 0 rgba(0,0,0,0.1)` shadow, z-index 1, absolute, `width: 100%`, `margin-top: 1px`, `margin-bottom: 20px`, `overflow: auto`, min-height 200px | `.ms-options`                   |
| Search input    | `width: 100%`, `padding: 4px 5px`, no border, **`border-bottom: 1px solid #efefef`**, outline none, placeholder "Search States"                                                                                                                        | `.ms-search input`              |
| Select-all link | inline-block, `#aaaaaa`, **uppercase**, 11px, hover → `#000`; text flips to "Unselect all"                                                                                                                                                             | `.ms-selectall`                 |
| Options list    | list-style none, padding/margin 0, **`column-count: 2`**, `column-gap: 0` (column 1 fills first)                                                                                                                                                       | `ul`                            |
| Option rows     | label: `position: relative`, `display: inline-block`, `width: 100%`, padding `4px 4px 4px 20px` (custom top/bottom 5px), margin `1px 0`, **radius 4px**, border none; hover/selected bg **`#efefef`**                                                  | `li > label`                    |
| Checkbox        | native control, absolute `left: 4px` `top: 7px`, `margin: 0 5px 0 0`; checked = browser default blue                                                                                                                                                   | `label > input[type=checkbox]`  |
| Font            | Roboto (load 300+400 via Google Fonts `<link>`; source loads 300)                                                                                                                                                                                      | body + headings                 |

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
  columns: 2,
  placeholder: 'Select States',
  search: true,
  searchOptions: { default: 'Search States' },
  selectAll: true,
})
```

1. Click button → panel toggles open/closed; only one open at a time;
   outside click / Escape closes; Enter/Space on the button also toggles.
2. Click a row → checkbox toggles, row gets `#efefef` selected style,
   button text updates — **panel STAYS OPEN** (live-verified). OPPOSITE of
   Scythe/Sheaf/Sieve (those close per selection). Test it.
3. Button text: 0 picks → "Select States" (#aaa); 1..N picks →
   comma+space-joined names (#333) while the join fits; join wider than the
   button OR >10 picks → "N selected" (live: 2 picks showed "California,
   New York"; 50 picks showed "50 selected"; screenshot shows "6 selected").
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

1. Copy the simplest existing app. Sibling precedence: `apps/sieve` is the
   closest structural precedent (single-control Select2-style page shape,
   same jsdom MemoryStorage polyfill in test setup) — but the WIDGET model
   differs (button + checkbox rows vs input + chips). Reuse the shell,
   rewrite the control component. Name it `apps/fanner`, package
   `@free-react-templates/fanner`, `public/CNAME` =
   `fanner.free.componentdock.com`, `"homepage"` =
   `https://fanner.free.componentdock.com`. Register the workspace in root
   `package-lock.json` via root `npm install` before committing (deploy
   Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `Multiselect`, `Footer`;
   `main.tsx` entry; document title "Fanner — Multiselect Dropdown". Load
   Roboto 300+400 via Google Fonts `<link>` in `index.html`; page bg
   `#efefef` on the root section; ~112px vertical padding (`py-28`);
   centered container with a centered `max-w-[260px]` column.
3. Data module: `src/data/states.ts` exporting the 50-state array (name +
   abbreviation pairs, source order, no fetch). The 50 rows are static.
4. Component: `src/components/Multiselect.tsx` —
   - state: `{ open, query, selected: Set<string> }` (Set of names or
     codes — pick one key; the button text joins names).
   - `<button type="button">` — white bg, NO border, `rounded-[4px]`
     (NOT square!), `h-10`, `text-[13px]`, `text-left`, `w-full`,
     `px-2.5`, `shadow-[0_1px_1px_rgba(0,0,0,0.1)]`
     `hover:shadow-[0_2px_10px_rgba(0,0,0,0.1)]`, `transition-shadow`,
     `aria-haspopup="listbox"`, `aria-expanded={open}`,
     `aria-label="Select states"`; text = placeholder "Select States"
     (`text-[#aaa]`) / join (`text-[#333]`) / "N selected"; right caret:
     lucide `ChevronDown` (~14px, `text-[#999]`, absolute right-2.5) —
     probe lucide exports first — or a CSS triangle.
   - panel (`role="listbox"` / native list semantics, only mounted when
     open): white, NO border, `rounded-[4px]`, `min-w-[320px]` (WIDER than
     the 260px column — let it overflow like the source), `p-5`,
     `shadow-[0_15px_30px_rgba(0,0,0,0.1)]`, `max-h-[400px] overflow-y-auto`
     (window-based in source; fixed is a documented deviation), absolute or
     in-flow — pick layout that survives tests:
     - search `<input>`: `w-full px-1 py-1 border-0 border-b border-[#efefef]
outline-none bg-transparent`, placeholder "Search States", value
       controlled → filters rows by case-insensitive substring.
     - `<button>`/"SELECT ALL" toggle: `text-[11px] uppercase text-[#aaa]
hover:text-black` (no underline); label = all VISIBLE rows selected
       ? "Unselect all" : "Select all"; clicks select/deselect every
       visible row.
     - the list in `columns-2 gap-0`: 50 `<label>` rows (or li>label) —
       `relative block w-full pl-5 pr-1 py-[5px] rounded-[4px] cursor-pointer`,
       with native `<input type="checkbox">` absolutely at `left-1 top-2`
       (native checkbox = fidelity + free a11y), selected or hover →
       `bg-[#efefef]`; clicking a row toggles its selection and KEEPS the
       panel open.
   - close on outside click (document mousedown listener with cleanup) and
     Escape (keydown handler with cleanup); selections persist.
5. TDD notes: tests must cover — heading + page shell (bg class, py,
   centered narrow column, no subtitle); button initial state (placeholder
   "Select States", #aaa-style class, aria attributes, **no border class,
   rounded-[4px] present**, caret); open/close on click + outside click +
   Escape; all 50 states in order when open (assert the exact list);
   two-column list container class; row click toggles checkbox AND keeps
   panel open; button text joins "California, New York" with #333; "N
   selected" counter both when join overflows width (≈8+ long names) and
   when >10 selected ("11 selected"); deselect restores placeholder;
   search filters ("Ca" → 3 rows; case-insensitive; clear restores 50;
   "zzz" → empty); SELECT ALL selects all visible rows (respects active
   filter), flips to "Unselect all", button "50 selected"; second click
   clears; select-all style class; footer link; homepage/CNAME config.
6. Verify: `npm run spec:validate` (spec is on main), then
   `scripts/verify-app.sh fanner`, then commit `feat: add Fanner template
(ColorLib Multiselect 14)` on `feat/template-fanner`, PR + immediate
   squash merge, then bookkeeping (`[~]`→`[x]`, surge URL, homepage,
   `npm run readme:status`) per the standard workflow.

## Pitfalls / reminders

- The default preview URL 404s — use the `/theme/bootstrap/` one.
- **The page bg is `#efefef` (light gray), NOT white.**
- **THERE IS NO BRAND COLOR.** This member is grayscale. Do NOT carry over
  Scythe's purple, Sheaf's coral, or Sieve's teal. The only saturated
  pixels are the native blue checkboxes.
- **The button has NO border** (`border: none !important` overrides the
  plugin default `1px solid #aaa`) — it floats on a tiny shadow. Radius is
  **4px, NOT square** (do NOT copy Sieve's `rounded-none`).
- **The panel STAYS OPEN while selecting** — opposite of Scythe/Sheaf/
  Sieve. Do NOT copy their close-on-select semantics. Test it explicitly.
- **The selection UI is text-in-button, NOT chips.** No chips, no ×
  buttons, no clear-all. When the join doesn't fit (or >10 picks) it shows
  "N selected" (both the screenshot AND live confirm this). Don't "improve"
  it into chip UI.
- **Panel is wider than its column** (`min-width: 320px` in a ~255px
  column, `left: 16px`) — that floating overflow is the design. Don't
  squeeze the panel to fit the column.
- Widget column: `col-md-3` ≈ 255px — recreate a centered `max-w-[260px]`
  column, NOT the 640px column of the Select2 members.
- Native checkboxes are the source's actual UI (plugin shows them by
  default; `hide-checkbox` is off). Keep them native for fidelity and
  free a11y.
- Search is a bottom-rule-only input (`border-bottom: 1px solid #efefef`)
  — no full border/outline.
- SELECT ALL only affects VISIBLE rows (respects the active search
  filter) — plugin logic, keep it.
- No images anywhere; icons via lucide-react only (`ChevronDown` for the
  caret — probe the export name first; if absent use a CSS triangle).
- The `3col` and `active` classes on the source select are jQuery hooks /
  leftovers — do not ship them; the real column layout is TWO (config).
- Roboto 300 is the page font; Poppins/Source Serif Pro/icomoon are loaded
  by the source but unused — load ONLY Roboto.
- Sibling names for the series map: 01 Picker, 02 Sifter, 03 Winnow, 04
  Cull, 05 Glean, 06 Garner, 07 Reap, 08 Pluck, 09 Thresh, 10 Sickle, 11
  Scythe, 12 Sheaf, 13 Sieve, **14 Fanner (this one)**; 15+ are the same
  jquery.multiselect family (next prep targets).
- Follow `apps/sieve`'s `injectUiSource()` vite.config.ts pattern (see
  docs/conventions.md) — required for Tailwind v4.3 relative `@source`
  handling. Copy the jsdom MemoryStorage polyfill from
  `apps/cura/src/test/setup.ts` into the test setup.
