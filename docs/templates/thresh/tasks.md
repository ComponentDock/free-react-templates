# Thresh — implementation tasks + design notes

Recreates ColorLib **Multiselect 09** (`multiselect-09`) as **Thresh**.
Read `openspec/specs/template-thresh/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-09/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-09/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-09.jpg` (1200×972)
- Source page: `https://colorlib.com/wp/template/multiselect-09/` (TEMPLATES.md line 831, ONE occurrence)
- Engine: **Select2 4.0.4** (CDN css+js) — first Select2 member prepped;
  siblings 01–08 (Picker/Sifter/Winnow/Cull/Glean/Garner/Reap/Pluck) are Semantic UI.

## Section order (1:1)

1. Heading section — centered h2 "Thresh" (28px, #fff, Lato 400, lh 1.5),
   ~112px page padding (`py-[7em]`-ish → `py-28`), centered container.
2. Multiselect control — NO label (source has none; add `aria-label`
   "Select options" on the trigger for a11y). Dark trigger → yellow chips
   - clear-all × → black checkbox dropdown (13 options) → custom-tag input.
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles, browser-verified)

| Token                  | Value                                                                                                                                                  | Where                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Page bg                | `#343434` (dark gray)                                                                                                                                  | customized body                                                                           |
| Brand accent           | `#f6c523` (yellow)                                                                                                                                     | chips, clear ×, links, `.bg-primary`, checked boxes, selected/hover row text              |
| Trigger bg             | `rgba(0,0,0,0.8)`                                                                                                                                      | `.select2-selection--multiple`                                                            |
| Trigger border         | `2px solid transparent` (rest) → `rgba(0,0,0,0.1)` (focus/open)                                                                                        | 2px keeps layout stable                                                                   |
| Trigger radius/padding | `4px` / `5px 10px`                                                                                                                                     | lh 1.6, mb 10px                                                                           |
| Trigger shadow         | `0 3px 22px -15px rgba(0,0,0,0.63)` closed → `rgba(0,0,0,0.8)` open                                                                                    |                                                                                           |
| Placeholder / search   | "Click to select an option", `rgba(255,255,255,0.8)`; search input shrinks to ~0.75em once chips exist                                                 |                                                                                           |
| Panel (dropdown)       | `#000`, NO border, radius `4px`, padding `10px 0`, shadow `0 3px 22px -15px rgba(0,0,0,0.63)`                                                          | `.select2-dropdown--below`                                                                |
| Rows                   | padding `6px 20px 6px 6px`, color `gray` (#808080) 16px w400; hover: bg `rgba(255,255,255,0.1)` + text `#f6c523`; selected: bg `#000` + text `#f6c523` | `.select2-results__option`                                                                |
| Checkbox square        | ::before 20×20, `2px solid rgba(255,255,255,0.18)`, radius `4px`, transparent, mr 15px / ml 10px                                                       | checked → bg `#f6c523` + black check glyph (source: fontAwesome `\f00c` → lucide `Check`) |
| Tag chips              | bg `#f6c523`, text `#000` 15px, radius `4px`, padding `2px 10px`, border none; remove × `#000` mr 5px                                                  | `.select2-selection__choice`                                                              |
| Clear-all ×            | color `#f6c523`, weight 700; appears when ≥1 selection; clears all                                                                                     | `.select2-selection__clear`                                                               |
| Heading                | 28px, `#fff`, Lato 400, lh 1.5, centered, ≈42–48px gap below                                                                                           | `.heading-section` (note: WHITE — dark theme!)                                            |
| Body                   | Lato 16px, lh 1.8, `#343434` bg, color gray                                                                                                            | load Lato 400 only                                                                        |
| Layout                 | container ≈1140px; control column ≈460px (`col-lg-5`)                                                                                                  | approximate: centered `max-w-md` (28rem) column, `w-full` widget                          |

Options data (13): Option1(O1) … Option13(O13), all with EMPTY `data-badge`
(the badge/icon machinery is dead code — do NOT recreate).

## Implementation outline (TDD)

1. Copy the simplest existing app (sibling precedence: `apps/winnow` is the
   closest structural precedent — same single-control page shape; copy its
   test setup incl. the `MemoryStorage` jsdom polyfill if present) →
   `apps/thresh`, package `@free-react-templates/thresh`, `public/CNAME` =
   `thresh.free.componentdock.com`, `"homepage"` =
   `https://thresh.free.componentdock.com`. Register workspace in root
   `package-lock.json` via root `npm install` before committing (deploy
   Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `MultiSelect` (the control),
   `Footer`; `main.tsx` entry; document title "Thresh — Multiselect
   Dropdown".
3. `MultiSelect` component (state-driven, no plugins):
   - State: `selected: string[]` (option values), `open: boolean`,
     `customTags: string[]` (labels added via tags:true), `input: string`.
   - Trigger: `div`/`button` styled as the Select2 selection box: bg
     `rgba(0,0,0,0.8)`, 2px border transparent → `rgba(0,0,0,0.1)` when
     open/focused, `rounded`, px-2.5 py-1, shadow `0 3px 22px -15px
rgba(0,0,0,0.63)`, min-h ~44px, `aria-haspopup="listbox"`,
     `aria-expanded`, `aria-label` "Select options", relative;
     `tabIndex=0` + focus-visible rings.
   - Empty state: placeholder "Click to select an option"
     (`text-white/80`); when open show the inline text input
     (`bg-transparent text-white/80 outline-none`) that doubles as the
     tag-creation field.
   - Chips: for each selection render a chip `span`: `bg-[#f6c523]`
     `text-black text-[15px] px-2.5 py-0.5 rounded inline-flex items-center
gap-1` with the label + a `button` × (black) that removes only that
     chip. Right side: clear-all × (`text-[#f6c523] font-bold`) when ≥1
     selection (clears everything).
   - Panel: `role="listbox"` `absolute top-full left-0 right-0 z-10`,
     `bg-black rounded shadow` `0 3px 22px -15px rgba(0,0,0,0.63)`,
     `py-2.5`, max-h ~280px `overflow-y-auto`. Rows Option1..Option13
     plus any custom tags: `role="option"`/`aria-selected` buttons:
     `py-1.5 pr-5 pl-1.5`, 16px gray text, each with a 20×20 checkbox
     square (2px `rgba(255,255,255,0.18)` border, `rounded`, unchecked
     transparent; checked `bg-[#f6c523]` + lucide `Check` black ~12px),
     hover `bg-white/10` + `text-[#f6c523]`, selected row text
     `text-[#f6c523]` (bg `#000` at rest is the same as the panel — keep
     the yellow text as the distinguishing signal).
   - Toggle logic: clicking a row toggles it in/out of `selected`; panel
     STAYS open (`closeOnSelect: false` — always).
   - Tag creation: when the inline input is focused and the user presses
     Enter with non-empty text, add a NEW custom option (label = typed
     text, value = e.g. `custom-N`), select it, clear the input, keep the
     panel open. The custom tag appears as a chip and as a row in the
     panel (with its checkbox checked).
   - Close: outside click (effect listener), Escape, trigger toggle.
   - A11y: `aria-label` on trigger; `aria-expanded` flip; rows
     `aria-selected`; focus visible rings; `aria-activedescendant` if
     keyboard nav is added.
4. `Heading` component: h2 "Thresh" 28px #fff Lato font-heading lh-1.5.
5. `Footer`: "More templates at Component Dock" linking
   `https://www.componentdock.com/`, small muted text.
6. Tests (100% coverage): heading renders; trigger + placeholder render;
   opens panel on click/Enter with 13 rows Option1..Option13; checkbox
   squares render unchecked; clicking rows toggles selection, keeps panel
   open, renders yellow chips + clear-all ×; placeholder disappears with
   chips; chip × removes one; clear-all empties all and restores
   placeholder; typing + Enter creates + selects a custom tag (row + chip)
   and clears the input; outside click/Escape/toggle closes; selections
   persist across close; aria-expanded flips; footer link present.
7. Gate: `scripts/verify-app.sh thresh`; `npm run spec:validate`.

## Fidelity notes / gotchas

- **Real preview URL** is `/theme/bootstrap/multiselect-09/` — the bare
  slug 404s. If the preview is unreachable in a run, fall back to the
  screenshot + this spec.
- **Select2, NOT Semantic** — do not copy the widget shapes/colors from
  the Sifter/Winnow (Semantic) members. This one has: checkbox rows,
  yellow chips, clear-all, tags:true.
- **DARK THEME** — page `#343434`, panel `#000`, white heading, yellow
  `#f6c523` accents. The complete opposite of the light Semantic members.
- **`tags: true` is the series differentiator** — users type new options.
  Implementers MUST cover custom-tag creation in code AND tests; no other
  prepped member has it.
- **`closeOnSelect: false`** — panel never closes on selection.
- **No label** in the source — do not invent a visible "Select Language"
  label like Winnow's; add only an `aria-label` on the trigger.
- **font-awesome IS used here** (checkbox check glyph `\f00c`) — replace
  with lucide `Check`; do NOT ship font-awesome. The `.icons_select2`
  badge init in main.js is dead code (no matching DOM, empty data-badge)
  — omit badges/icons in rows.
- **Debug junk** `.select2-selection--multiple:after { content: 'hhghgh'
}` in the source CSS — ignore.
- **Checkbox check glyph**: source uses fontAwesome `\f00c` at 20×20 box,
  color #000 on #f6c523. lucide `Check` at ~12–14px black inside a 20×20
  `bg-[#f6c523]` rounded square is a faithful equivalent.
- **Selected-vs-hovered rows**: selected (not hovered) = `#000` bg +
  `#f6c523` text; hovered = `rgba(255,255,255,0.1)` bg + `#f6c523` text.
  The panel is `#000`, so at rest the selected row is distinguished by the
  yellow TEXT + checked box; keep that signal.
- **Transitions 0.3s** everywhere; honor `prefers-reduced-motion` (the
  source wraps them in reduced-motion media queries).
- Rename rule: app may not reference colorlib anywhere; provenance lives
  in spec + TEMPLATES.md + PR only.
- Use lucide icons (`Check`, `X`) — probe exports first. No images at all
  in the source — none in the app.

## Definition of done

- `apps/thresh` passing `scripts/verify-app.sh thresh` (typecheck, lint,
  knip, fallow, 100% coverage vitest, build).
- `npm run readme:status` regenerated; TEMPLATES.md row 831 marked
  `[~]`→`[x]` with surge URL + homepage by the implementer stream.
- PR with `feat: thresh — ...` description including source template,
  real preview URL, tokens used, and the deviations above; merged
  immediately via `gh pr merge --squash --delete-branch`.
