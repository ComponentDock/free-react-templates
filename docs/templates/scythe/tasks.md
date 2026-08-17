# Scythe — implementation tasks + design notes

Recreates ColorLib **Multiselect 11** (`multiselect-11`) as **Scythe**.
Read `openspec/specs/template-scythe/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-11/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-11/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-11.jpg` (1200×972, AVIF)
- Source page: `https://colorlib.com/wp/template/multiselect-11/` (TEMPLATES.md line 833, ONE occurrence)
- Engine: **Select2 v4 + jQuery 3.3.1 + Bootstrap 4 (loaded, unused)**.
  Siblings 01–08 (Picker/Sifter/Winnow/Cull/Glean/Garner/Reap/Pluck) are
  Semantic UI; 09 (Thresh) is Select2 + DARK theme; 10 (Sickle) is a
  hand-rolled vanilla dropdown + light coral; **11 (Scythe) is Select2 +
  LIGHT theme + purple brand** — the light twin of Thresh.

## Section order (1:1)

1. Heading + hint — centered h2 "Scythe" (20px, black, Roboto) with the
   hint "Tags separate with comma ','" (`#b3b3b3`, font-light) below,
   ~112px page padding (`py-28`), centered container, ~640px widget column.
2. Multiselect tags control — NO label (source has none; add `aria-label`
   "Select tags"). White box (1px `#aaa`, 4px radius, focus 1px black),
   placeholder "Select a tags", inline search, 8 preset options, free tags
   on comma/space, purple `#65587f` chips with left ×, panel drops down
   (200px scroll), closes on selection / outside click / Escape.
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles, browser-verified)

| Token               | Value                                                                                                                  | Where                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Page bg             | `#fff` (plain white)                                                                                                   | customized body                                      |
| Brand accent        | `#65587f` (dusty purple)                                                                                               | chips bg, highlighted option bg                      |
| Heading             | 20px, black, Roboto, centered; page padding `7rem 0` (≈112px)                                                          | `div.content`, `h2.text-center`                      |
| Hint text           | `#b3b3b3`, weight 300, ~16px, centered, ≈`mb-4` below heading                                                          | `p` (overridden even though the tag says text-black) |
| Widget box          | bg `#fff`, `border: 1px solid #aaa`, radius `4px`, cursor text                                                         | `.select2-selection--multiple`                       |
| Focus state         | `border: solid black 1px`, `outline: 0`                                                                                | `.select2-container--focus`                          |
| Placeholder         | "Select a tags" (source grammar — keep or fix, note in PR), gray (~`#999`), only when empty                            | `.select2-selection__placeholder`                    |
| Tag chips           | bg `#65587f`, border none, `font-size: 14px`, `color: #fff`, padding `2px 10px`                                        | `.select2-selection__choice`                         |
| Chip remove (×)     | color `rgba(255,255,255,0.5)`, `margin-right: 10px`, no border/shadow, `.3s` transition, hover → `#fff`; LEFT of label | `.select2-selection__choice__remove`                 |
| Inline search input | transparent bg, no border/outline/shadow, `top: 2px; left: 4px`                                                        | `.select2-search--inline .select2-search__field`     |
| Dropdown panel      | bg `#fff`, `border: 1px solid #aaa`, radius `4px`, width 100%, flush under box                                         | `.select2-dropdown`                                  |
| Options list        | no margin/padding, `max-height: 200px`, `overflow-y: auto`                                                             | `.select2-results__options`                          |
| Option default      | transparent bg, black text                                                                                             | `.select2-results__option`                           |
| Option selected     | bg `#f4f4f4`; hover → `#ddd`, color `#000`                                                                             | `[aria-selected=true]`                               |
| Option highlighted  | bg `#65587f`, color `#fff`                                                                                             | `.select2-results__option--highlighted`              |
| Font                | Roboto (load 300+400 via Google Fonts `<link>`; source loads 300)                                                      | body + headings                                      |
| Layout              | container ≈1140px; widget column ≈647px (`col-7`)                                                                      | approximate: centered `max-w-[640px]` column, w-full |

Preset options (8): Design, HTML5, CSS3, jQuery, BS4, Bootstrap,
WordPress, FrontEnd — in that order.

## Behaviors to recreate (from main.js + live browser verification)

1. Click box → dropdown opens with filtered option list.
2. Click option → purple chip added, dropdown CLOSES (each selection
   closes — Sickle stayed open; Scythe closes. Verify in your tests).
3. Typing in inline search filters options by case-insensitive substring;
   clearing restores all 8.
4. Type text + `,` OR ` ` (tokenSeparators) → custom chip created from the
   typed text; input clears; duplicates/empty tokens ignored.
5. × on a chip removes it; placeholder "Select a tags" returns when empty.
6. Focus → box border turns solid black.
7. Outside click / Escape closes the panel; chips persist across cycles.

## Implementation outline (TDD)

1. Copy the simplest existing app (sibling precedence: `apps/thresh` is
   the closest structural precedent — same Select2-style single-control
   page shape + its `MemoryStorage` jsdom polyfill in test setup) →
   `apps/scythe`, package `@free-react-templates/scythe`, `public/CNAME`
   = `scythe.free.componentdock.com`, `"homepage"` =
   `https://scythe.free.componentdock.com`. Register workspace in root
   `package-lock.json` via root `npm install` before committing (deploy
   Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `Multiselect`, `Footer`;
   `main.tsx` entry; document title "Scythe — Multiselect Tags". Load
   Roboto 300+400 via Google Fonts `<link>` in `index.html`.
3. Data module: `src/data/tags.ts` exporting the 8 preset options as a
   string array (source order). No fetch.
4. Component: `src/components/Multiselect.tsx` —
   - container `div` (white, `border border-[#aaa] rounded cursor-text
focus-within:border-black`, `aria-label` "Select tags",
     `aria-haspopup="listbox"`, `aria-expanded`, wraps chips + input in a
     flex row, `p-1`-ish padding, min height for the 14px chips).
   - chips (`span`/`button` pairs): `bg-[#65587f] text-white text-sm
px-2.5 py-0.5 rounded-sm inline-flex items-center gap-2` — lucide
     `X` icon (10–12px, `text-white/50 hover:text-white`) on the LEFT
     before the label (source quirk); click on `X` removes that chip.
   - inline `input` (flex-1, min-w, transparent bg, no border/outline,
     placeholder "Select a tags" shown only when no chips, value
     controlled): onChange updates the filter query; onKeyUp/onChange
     watch for `,` or ` ` in the value → split on `[, ]`, trim, drop
     empties, dedupe vs. existing chips (case-insensitive), add the rest
     as chips, clear the input.
   - dropdown panel (`role="listbox"`, white, `border border-[#aaa]
rounded max-h-[200px] overflow-y-auto`, absolutely positioned under
     the box or in normal flow with the box — pick layout that survives
     tests): lists the 8 filtered preset options as
     `role="option"`/`button` rows — default transparent/black;
     selected (already a chip) `bg-[#f4f4f4]` (hover `#ddd`); active
     option (keyboard/focus or mouse hover) `bg-[#65587f] text-white`;
     click → add chip + close panel.
   - state: `{ open, query, chips: string[] }`; panel closes on
     selection, outside click (document mousedown listener with cleanup),
     and Escape (keydown handler with cleanup); chips persist.
5. TDD notes: tests must cover — heading + hint render; widget initial
   state (placeholder "Select a tags", aria attributes, 1px `#aaa`-style
   border class); open/close on click; 8 options in order when open;
   filter as you type (case-insensitive substring, clear restores);
   click option → chip + panel closes + placeholder gone; multiple
   selections accumulate without duplicates; comma and space create free
   tags; duplicate/empty tokens ignored; × removes a chip; placeholder
   returns when empty; focus-within black border class present; outside
   click and Escape close the panel; chips persist across close/reopen;
   footer link + homepage/CNAME config.
6. Verify: `npm run spec:validate` (spec is on main), then
   `scripts/verify-app.sh scythe`, then commit `feat: add Scythe template
(ColorLib Multiselect 11)` on `feat/template-scythe`, PR + immediate
   squash merge, then bookkeeping (`[~]`→`[x]`, surge URL, homepage,
   `npm run readme:status`) per the standard workflow.

## Pitfalls / reminders

- The default preview URL 404s — use the `/theme/bootstrap/` one.
- This member CLOSES the dropdown on each selection (Sickle stayed open —
  do not copy Sickle's toggle semantics). Verify with a test.
- Chips put the × on the LEFT with a 10px gap (Select2 quirk — matches
  the screenshot). Do not move it to the right without a documented
  deviation.
- Source hint text says "seperate" (typo) and placeholder says "Select a
  tags" (grammar). Pick verbatim or corrected and note it in the PR —
  do not silently change or silently keep; document the choice.
- The head loads Poppins + Source Serif Pro + icomoon but style.css only
  uses Roboto — load ONLY Roboto in the recreation.
- No clear-all control, no selection counter — the chips ARE the entire
  selection UI. Don't "improve" it.
- Focus border is solid black (Select2 focus) — implement via
  `focus-within:border-black` on the container.
- The 8 preset options fit in the 200px panel — keep the structural
  `max-h-[200px] overflow-y-auto` scroll container anyway (tests/build
  should assert it exists).
