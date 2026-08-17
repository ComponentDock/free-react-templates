# Sieve — implementation tasks + design notes

Recreates ColorLib **Multiselect 13** (`multiselect-13`) as **Sieve**.
Read `openspec/specs/template-sieve/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-13/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-13/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-13.jpg` (1200×972, AVIF)
- Source page: `https://colorlib.com/wp/template/multiselect-13/` (TEMPLATES.md line 835, ONE occurrence)
- Engine: **Select2 v4 + jQuery 3.3.1 + Bootstrap 4 (loaded, unused)**.
  Siblings 01–08 (Picker/Sifter/Winnow/Cull/Glean/Garner/Reap/Pluck) are
  Semantic UI; 09 (Thresh) is Select2 + DARK theme; 10 (Sickle) is a
  hand-rolled vanilla dropdown + light coral; 11 (Scythe) is Select2 +
  LIGHT theme + purple brand; 12 (Sheaf) is Select2 + LIGHT-GRAY page +
  CORAL brand + borderless shadowed dropdown, US-states theme; **13 (Sieve)
  is Select2 + LIGHT-GRAY page + TEAL `#29c7ac` brand + FULLY SQUARE
  corners + NAMES theme (9 person names)** — the angular teal cousin of
  Sheaf.

## Section order (1:1)

1. Heading + hint — centered h2 "Sieve" (20px, dark, Roboto) with the hint
   "Names separate with comma ','" (`#b3b3b3`, font-light) below, on the
   LIGHT-GRAY page, ~112px page padding (`py-28`), centered container,
   ~640px widget column.
2. Multiselect tags control — NO label (source has none; add `aria-label`
   "Select names"). White box (1px `#aaa`, **SQUARE corners**, focus 1px
   black), placeholder **"Select a state"** (verbatim source quirk — names
   theme but state placeholder; keep it), inline search, 9 preset names,
   free tags on comma/space (custom tags also become list options), teal
   `#29c7ac` chips with left ×, floating borderless **square** shadowed
   panel (200px scroll), closes on selection / outside click / Escape.
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles, browser-verified)

| Token               | Value                                                                                                                                                                           | Where                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Page bg             | **`#efefef`** (light gray — NOT white)                                                                                                                                          | customized body                                      |
| Brand accent        | **`#29c7ac`** (teal/turquoise)                                                                                                                                                  | chips bg, highlighted option bg                      |
| Heading             | 20px, dark/black (Bootstrap `#212529`), Roboto, centered; page padding `7rem 0` (≈112px)                                                                                        | `div.content`, `h2.text-center`                      |
| Hint text           | `#b3b3b3`, weight 300, ~16px, centered, ≈`mb-4` below heading                                                                                                                   | `p` (overridden even though the tag says text-black) |
| Widget box          | bg `#fff`, `border: 1px solid #aaa`, **radius `0` (SQUARE — live computed 0px)**, cursor text                                                                                   | `.select2-selection--multiple`                       |
| Focus state         | `border: solid black 1px`, `outline: 0` (live computed 1px solid black)                                                                                                         | `.select2-container--focus`                          |
| Placeholder         | **"Select a state"** (SOURCE QUIRK — names theme but state placeholder), gray (~`#999`), only when empty                                                                        | `.select2-selection__placeholder`                    |
| Tag chips           | bg `#29c7ac`, border none, **radius `0` (SQUARE)**, `font-size: 14px`, `color: #fff`, padding `2px 10px` (live computed rgb(41,199,172), 14px, 0px)                             | `.select2-selection__choice`                         |
| Chip remove (×)     | color `rgba(255,255,255,0.5)`, `margin-right: 10px`, no border/shadow, `.3s` transition, hover → `#fff`; LEFT of label                                                          | `.select2-selection__choice__remove`                 |
| Inline search input | transparent bg, no border/outline/shadow, `top: 2px; left: 4px`                                                                                                                 | `.select2-search--inline .select2-search__field`     |
| **Dropdown panel**  | bg `#fff`, **NO border**, **radius `0` (FULLY SQUARE — unlike Sheaf's `0 0 7px 7px`!)**, **`overflow: hidden`**, **shadow `0 15px 30px rgba(0,0,0,0.2)`** — floating panel look | `.select2-dropdown`                                  |
| Options list        | no margin/padding, `max-height: 200px`, `overflow-y: auto`                                                                                                                      | `.select2-results__options`                          |
| Option default      | transparent bg, black text                                                                                                                                                      | `.select2-results__option`                           |
| Option selected     | bg `#f4f4f4`; hover → `#ddd`, color `#000`                                                                                                                                      | `[aria-selected=true]`                               |
| Option highlighted  | bg `#29c7ac`, color `#fff`                                                                                                                                                      | `.select2-results__option--highlighted`              |
| Font                | Roboto (load 300+400 via Google Fonts `<link>`; source loads 300)                                                                                                               | body + headings                                      |
| Layout              | container ≈1140px; widget column ≈647px (`col-7`)                                                                                                                               | approximate: centered `max-w-[640px]` column, w-full |

Preset options (9): Joefrey, Robert, Jorge, Mark, Luke, John, James,
Ryan, Ronnie — in that order (names theme). NOTE: the screenshot renders
the first one as "Josephine" but the LIVE DOM (authoritative) says
"Joefrey".

## Behaviors to recreate (from main.js + live browser verification)

1. Click box → dropdown opens with filtered option list.
2. Click option → teal chip added, dropdown CLOSES (each selection
   closes — same as Scythe/Sheaf, opposite of Sickle. Verify in tests).
3. Typing in inline search filters options by case-insensitive substring
   ("Mar" → "Mar" candidate + "Mark"); clearing restores all 9.
4. Type text + `,` OR ` ` (tokenSeparators) → custom chip created from the
   typed text; input clears; duplicates/empty tokens ignored. The custom
   tag ALSO appears as a selectable `[aria-selected=true]` option in the
   list on next open.
5. × on a chip removes it (live-verified); placeholder "Select a state"
   returns when empty.
6. Focus → box border turns solid black.
7. Outside click / Escape closes the panel; chips persist across cycles.

## Implementation outline (TDD)

1. Copy the simplest existing app (sibling precedence: `apps/sheaf` is the
   closest structural precedent — same Select2-style single-control page
   shape and identical behavior set; reuse its `MemoryStorage` jsdom
   polyfill in test setup) → `apps/sieve`, package
   `@free-react-templates/sieve`, `public/CNAME`
   = `sieve.free.componentdock.com`, `"homepage"` =
   `https://sieve.free.componentdock.com`. Register workspace in root
   `package-lock.json` via root `npm install` before committing (deploy
   Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `Multiselect`, `Footer`;
   `main.tsx` entry; document title "Sieve — Multiselect Dropdown". Load
   Roboto 300+400 via Google Fonts `<link>` in `index.html`; page bg
   `#efefef` on the root section.
3. Data module: `src/data/names.ts` exporting the 9 preset options as a
   string array (source order). No fetch.
4. Component: `src/components/Multiselect.tsx` —
   - container `div` (white, `border border-[#aaa] cursor-text
focus-within:border-black` — **NO `rounded` classes anywhere**,
     `aria-label` "Select names", `aria-haspopup="listbox"`,
     `aria-expanded`, wraps chips + input in a flex row, `p-1`-ish
     padding, min height for the 14px chips).
   - chips (`span`/`button` pairs): `bg-[#29c7ac] text-white text-sm
px-2.5 py-0.5 inline-flex items-center gap-2` — **no rounding** —
     lucide `X` icon (10–12px, `text-white/50 hover:text-white`) on the
     LEFT before the label (source quirk); click on `X` removes that chip.
   - inline `input` (flex-1, min-w, transparent bg, no border/outline,
     placeholder "Select a state" shown only when no chips, value
     controlled): onChange updates the filter query; onKeyUp/onChange
     watch for `,` or ` ` in the value → split on `[, ]`, trim, drop
     empties, dedupe vs. existing chips (case-insensitive), add the rest
     as chips AND to the option list, clear the input.
   - dropdown panel (`role="listbox"`, white, **NO border, NO rounding**,
     `shadow-[0_15px_30px_rgba(0,0,0,0.2)] overflow-hidden max-h-[200px]
overflow-y-auto`, absolutely positioned under the box or in normal
     flow — pick layout that survives tests): lists the 9 filtered preset
     options PLUS any custom tags as `role="option"`/`button` rows —
     default transparent/black; selected (already a chip) `bg-[#f4f4f4]`
     (hover `#ddd`); active option (keyboard/focus or mouse hover)
     `bg-[#29c7ac] text-white`; click → add chip + close panel.
   - state: `{ open, query, chips: string[] }`; panel closes on
     selection, outside click (document mousedown listener with cleanup),
     and Escape (keydown handler with cleanup); chips persist.
5. TDD notes: tests must cover — heading + hint render; widget initial
   state (placeholder "Select a state", aria attributes, 1px `#aaa`-style
   border class, **no `rounded` class present**); open/close on click; 9
   options in order when open; filter as you type (case-insensitive
   substring, clear restores); click option → chip + panel closes +
   placeholder gone; multiple selections accumulate without duplicates;
   comma and space create free tags + the tag joins the option list;
   duplicate/empty tokens ignored; × removes a chip; placeholder returns
   when empty; focus-within black border class present; outside click and
   Escape close the panel; chips persist across close/reopen; footer link
   - homepage/CNAME config.
6. Verify: `npm run spec:validate` (spec is on main), then
   `scripts/verify-app.sh sieve`, then commit `feat: add Sieve template
(ColorLib Multiselect 13)` on `feat/template-sieve`, PR + immediate
   squash merge, then bookkeeping (`[~]`→`[x]`, surge URL, homepage,
   `npm run readme:status`) per the standard workflow.

## Pitfalls / reminders

- The default preview URL 404s — use the `/theme/bootstrap/` one.
- **The page bg is `#efefef` (light gray), NOT white.**
- **EVERYTHING is SQUARE: widget box, chips, and dropdown all have
  `border-radius: 0`** — `style.css` forces it on `.form-control` and all
  Select2 shapes with `!important`. Do NOT copy Sheaf's 4px box/chip or
  7px dropdown rounding; do NOT add `rounded` classes anywhere.
- **Brand color is teal/turquoise `#29c7ac`** — Scythe was purple
  `#65587f`, Sheaf was coral `#f67280`. Do not copy the siblings' colors.
- This member CLOSES the dropdown on each selection (Scythe and Sheaf
  close too; Sickle stayed open — do not copy Sickle's toggle semantics).
  Verify with a test.
- Chips put the × on the LEFT with a 10px gap (Select2 quirk — matches
  the screenshot). Do not move it to the right without a documented
  deviation.
- **Placeholder quirk: "Select a state"** even though the theme is names.
  Keep it verbatim (source main.js says so) and note it in the PR — do
  not "fix" it.
- Source hint text says "Names seperate with comma ','" (typo — the
  screenshot renders "separate"). Pick verbatim or corrected and note it
  in the PR — do not silently change or silently keep; document the choice.
- **Custom tags join the option list** — after creating "california",
  reopening the list shows "california" as a selected option. Recreate
  this (it's Select2's `tags: true` behavior).
- Screenshot shows "Josephine" as the first option; the LIVE DOM says
  "Joefrey" — use Joefrey.
- The 9 preset options fit in the 200px panel — keep the structural
  `max-h-[200px] overflow-y-auto` scroll container anyway (tests/build
  should assert it exists).
- Uppercase/lowercase: preset names are capitalized proper nouns — keep
  exact casing; free tags keep whatever casing the user typed (verified:
  "california" stays lowercase).
- The head loads Poppins + Source Serif Pro + icomoon but style.css only
  uses Roboto — load ONLY Roboto in the recreation.
- No clear-all control, no selection counter — the chips ARE the entire
  selection UI. Don't "improve" it.
- Focus border is solid black (Select2 focus) — implement via
  `focus-within:border-black` on the container.
- Follow `apps/sheaf`'s `injectUiSource()` vite.config.ts pattern (see
  docs/conventions.md) — it is required for Tailwind v4.3 relative
  `@source` handling.
