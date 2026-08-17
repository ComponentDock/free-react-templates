# Sickle — implementation tasks + design notes

Recreates ColorLib **Multiselect 10** (`multiselect-10`) as **Sickle**.
Read `openspec/specs/template-sickle/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-10/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-10/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-10.jpg` (1200×972, AVIF)
- Source page: `https://colorlib.com/wp/template/multiselect-10/` (TEMPLATES.md line 832, ONE occurrence)
- Engine: **NONE — vanilla jQuery + lodash 3.5.0 + FontAwesome** — the
  first hand-rolled member of the series. Siblings 01–08 (Picker/Sifter/
  Winnow/Cull/Glean/Garner/Reap/Pluck) are Semantic UI; 09 (Thresh) is
  Select2; **10 (Sickle) is a plain custom dropdown** — no widget library.

## Section order (1:1)

1. Heading section — centered h2 "Sickle" (28px, #000, Lato 400, lh 1.5),
   ~112px page padding (`py-[7em]`-ish → `py-28`), centered container,
   ~42–48px gap below heading (`mb-5`).
2. Multiselect control — NO label (source has none; add `aria-label`
   "Select states" on the trigger for a11y). White trigger card "States
   (Any)" → toggle → white panel with search field + 56 checkbox rows →
   count updates; panel closes ONLY on trigger re-click.
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles, browser-verified)

| Token            | Value                                                                                                                                                                                      | Where                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| Page bg          | `#f8f9fd` (very light cool-gray)                                                                                                                                                           | customized body                                                |
| Brand accent     | `#ff5959` (coral-red)                                                                                                                                                                      | count, chevron, checked boxes, links, `.bg-primary`            |
| Heading          | 28px, `#000`, Lato 400, lh 1.5, centered, ≈42–48px gap below                                                                                                                               | `.heading-section` (note: BLACK — light theme!)                |
| Card (container) | `#fff`... actually container is transparent; button+list are the `#fff` surfaces; container: radius `5px`, shadow `0 10px 30px -4px rgba(0,0,0,0.15)`, font 14px sans-serif, overflow auto | `.dropdown-container`                                          |
| Trigger          | bg `#fff`, padding `15px 20px`, border none, w-full, cursor pointer; label gray w700; count `#ff5959` ml 4px; chevron 16px `#ff5959` mt 3px                                                | `.dropdown-button` + children                                  |
| Panel            | bg `#fff`, padding `10px 20px`, border-top none, w-full                                                                                                                                    | `.dropdown-list`                                               |
| Search input     | padding `5px 10px`, w-full, border none, radius `4px`, bg `rgba(0,0,0,0.05)`; focus: no shadow/outline                                                                                     | `.dropdown-search`                                             |
| List             | `margin: 20px 0 0`, `max-height: 200px`, `overflow-y: auto`, padding 0; `li { list-style: none }`, NO hover style                                                                          | `.dropdown-list ul`                                            |
| Checkbox rows    | label `padding-left: 35px`, `margin-bottom: 12px`, font 16px w500, cursor pointer, user-select none; native input hidden (opacity 0, 0×0)                                                  | `.checkbox-wrap`                                               |
| Custom checkbox  | 20px glyph: unchecked `\f0c8` (square outline) `rgba(0,0,0,0.1)`; checked `\f14a` (check square) `#ff5959`; transition 0.3s                                                                | `.checkmark:after` (+ `input:checked ~ .checkmark:after`)      |
| Body             | Lato 16px, lh 1.8, color gray (`#808080`), bg `#f8f9fd`                                                                                                                                    | load Lato 400 only                                             |
| Layout           | container ≈1140px; control column ≈460px (`col-md-5`)                                                                                                                                      | approximate: centered `max-w-md` (28rem) column, `w-full` card |

Options data (56): Alabama…Wyoming incl. AS, DC, FM, GU, MH, MP, PW, PR,
VI — full list in spec.md. Title-cased via `_.startCase` in source
(District Of Columbia, Federated States Of Micronesia, Northern Mariana
Islands, Virgin Islands).

## Behaviors to recreate (from main.js, live-verified)

1. Click `.dropdown-button` → toggles `.dropdown-list` (`aria-expanded`).
2. No outside-click close, no Escape handler — toggle-only dismissal.
3. Typing in search filters rows by case-insensitive substring (`indexOf`),
   empty query shows all.
4. Checking a box: row checkbox fills coral `#ff5959`; count in trigger
   updates instantly to checked-count or "Any"; panel NEVER closes.

## Implementation outline (TDD)

1. Copy the simplest existing app (sibling precedence: `apps/thresh` is the
   closest structural precedent — same single-control page shape, including
   its `MemoryStorage` jsdom polyfill in test setup; also check `apps/winnow`
   for the light Semantic variant) → `apps/sickle`, package
   `@free-react-templates/sickle`, `public/CNAME` =
   `sickle.free.componentdock.com`, `"homepage"` =
   `https://sickle.free.componentdock.com`. Register workspace in root
   `package-lock.json` via root `npm install` before committing (deploy
   Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `Multiselect` (the control),
   `Footer`; `main.tsx` entry; document title "Sickle — Multiselect
   Dropdown". Load Lato 400 via Google Fonts `<link>` in `index.html`.
3. Data module: `src/data/states.ts` exporting the 56 states as
   `{ name, abbreviation }` (title-cased names, source order) — used by
   the list; no fetch, no lodash.
4. Component: `src/components/Multiselect.tsx` —
   - trigger `button` (w-full, white, `px-5 py-[15px]`, `rounded-[5px]`,
     shadow `0 10px 30px -4px rgba(0,0,0,0.15)`,
     `aria-haspopup="listbox"` `aria-expanded` `aria-label` "Select
     states"): "States" (gray w700) + "(Any)"/"(N)" (`#ff5959`) +
     `ChevronDown` (lucide, right, rotates when open).
   - panel (`role="listbox"`, w-full, white, `px-5 py-2.5`,
     `rounded-b-[5px]`): controlled search `input` (bg `black/5`,
     `rounded`, placeholder "Search states") filtering the rows
     case-insensitively; `ul`/div list `max-h-[200px] overflow-y-auto`
     with 56 rows (checkbox + label, `pl-[35px] mb-3 text-base
font-medium`); custom checkbox = hidden native checkbox + lucide
     `Square` / `SquareCheck` (20px) — probe exports.
   - state: `{ open, query, checked: Set<string> }`; count = checked.size
     || 'Any'; toggle-only close (click on trigger toggles; clicking
     outside does nothing — faithful).
   - no hover styles on rows.
5. TDD notes: tests must cover — heading render; trigger initial state
   ("States (Any)", chevron down, aria-expanded false); toggle open/close
   (and that outside click does NOT close); full 56-row list in order;
   search filtering (substring, case-insensitive, clear restores);
   checking rows updates count (Any → N → Any) and keeps panel open;
   selections persist across close/reopen; accessibility roles; footer
   link + homepage/CNAME config.
6. Verify: `npm run spec:validate` (spec is on main), then
   `scripts/verify-app.sh sickle`, then commit `feat: add Sickle template
(ColorLib Multiselect 10)` on `feat/template-sickle`, PR + immediate
   squash merge, then bookkeeping (`[~]`→`[x]`, surge URL, homepage,
   `npm run readme:status`) per the standard workflow.

## Pitfalls / reminders

- The default preview URL 404s — use the `/theme/bootstrap/` one.
- This member has NO hover styles, NO tag chips, NO clear-all, NO
  placeholder swap — the count + checkbox squares are the entire selection
  UI. Don't "improve" it with Thresh-like chips.
- FontAwesome glyphs (`\f0c8`/`\f14a`) and `fa-chevron-down` are the only
  icon usage — replace with lucide (`ChevronDown`, `Square`, `SquareCheck`
  or `Check`). Probe exports before use.
- The source loads Bootstrap + popper + jquery but uses none of the
  Bootstrap components — nothing to recreate from those.
- 56 rows × ~37px ≈ 2070px total list height; the 200px scroll window
  shows ~5 rows — make sure `max-h-[200px]` is applied to the scroll
  container in tests/build.
