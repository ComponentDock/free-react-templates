# Winnow — implementation tasks + design notes

Recreates ColorLib **Multiselect 03** (`multiselect-03`) as **Winnow**.
Read `openspec/specs/template-winnow/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-03/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-03/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-03.jpg`
- Source page: `https://colorlib.com/wp/template/multiselect-03/`

## Section order (1:1)

1. Heading section — centered h2 "Winnow" (28px, #000, Lato 400, lh 1.5),
   ~112px page padding (`section` `py-[7em]`-ish → `py-28`), centered container.
2. Multiselect control — "Select Language" label + trigger + panel + "N
   selected" summary.
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles)

| Token                    | Value                                                                                                                                                  | Where                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Brand accent             | `#3e64ff` (blue)                                                                                                                                       | row hover TEXT + selected (`active`) row TEXT — NEVER a fill (this is the big difference from Sifter!) |
| Trigger bg               | `#fff`                                                                                                                                                 |                                                                                                        |
| Trigger border           | `1px solid rgba(34,36,38,0.15)` (fresh/closed) → `#e6e6e6` while open (`!important`)                                                                   | source border "sticks" #e6e6e6 after interaction (UI bug — recreate fresh-load state)                  |
| Trigger radius           | `4px` → `4px 4px 0 0` open                                                                                                                             |                                                                                                        |
| Trigger padding / height | `10px` / ≈47px (fixed; no tags to grow it)                                                                                                             |                                                                                                        |
| Trigger shadow           | none (closed AND `:focus`)                                                                                                                             | customized build strips Semantic's default                                                             |
| Panel                    | `#fff`, NO border, radius `0 0 4px 4px`, shadow `0 3px 19px -15px rgba(0,0,0,0.41)`, max-h ≈224px, `overflow-y: auto`                                  | shadow only while open                                                                                 |
| Rows                     | `padding: 11px 16px`, color `black`, font-size 13px, w 400, `border-top: 1px solid #e6e6e6` divider, hover/selected → text `#3e64ff` on transparent bg | hover is TEXT-ONLY (no fill!)                                                                          |
| Placeholder "All"        | 12px, weight 700, `rgba(191,191,191,0.87)`; REPLACED by summary once ≥1 selected                                                                       | first option (value="") demoted to placeholder — NOT a menu row                                        |
| Summary text             | **"N selected"** (e.g. "2 selected"), 12px, weight 700, `rgba(0,0,0,0.8)`, NOT interactive                                                             | Semantic `useLabels: false` behavior — no tag pills in this template                                   |
| Caret                    | `rgba(0,0,0,0.87)` down chevron, ≈10px, absolute right ≈10px / top 15px                                                                                | lucide `ChevronDown`                                                                                   |
| Field label              | "Select Language", `gray` = `#808080`, 16px, w 400, mb ≈7px                                                                                            | add `htmlFor` (a11y fix)                                                                               |
| Heading                  | 28px, `#000`, Lato 400, lh 1.5, centered, ≈42–48px gap below                                                                                           |                                                                                                        |
| Body                     | Lato 16px, lh 1.8, `#fff` bg, color gray                                                                                                               | load Lato 400 only                                                                                     |
| Layout                   | container ≈1140px; control column ≈380px → trigger ≈350px wide                                                                                         | approximate: centered `max-w-sm` (24rem) column, `w-full` field                                        |

Options data (10): PHP(1), Javascript(2), Java(3), jQuery(4), SQL(5),
Wordpress(6), Python(7), .Net(8), HTML(9), CSS(10). "All" (`value=""`) is
placeholder text only — NOT an option.

## Implementation outline (TDD)

1. Copy the simplest existing app (sibling precedence: `apps/sifter` is the
   closest precedent — same series, same page shape: heading + one control
   - footer; copy its test setup incl. the `MemoryStorage` jsdom polyfill
     if present) → `apps/winnow`, package `@free-react-templates/winnow`,
     `public/CNAME` = `winnow.free.componentdock.com`, `"homepage"` =
     `https://winnow.free.componentdock.com`. Register workspace in root
     `package-lock.json` via root `npm install` before committing (deploy
     Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `MultiSelect` (the control),
   `Footer`; `main.tsx` entry; document title "Winnow — Multiselect
   Dropdown".
3. `MultiSelect` component (state-driven, no plugins):
   - State: `selected: string[]` (language values), `open: boolean`.
   - Trigger `button`: white, `border` 1px `rgba(34,36,38,0.15)` (closed)
     → `#e6e6e6` + `rounded-b-none` (open), `rounded`, `p-2.5` (10px),
     min-h ~47px, `aria-haspopup="listbox"`, `aria-expanded`,
     `text-left w-full`, relative; caret `ChevronDown` absolute
     `right-2.5 top-3.5` (top 15px / right 10px), size 10px,
     `text-black/85`.
   - Placeholder: "All", `text-xs font-bold` color
     `rgba(191,191,191,0.87)`, rendered only when `selected.length === 0`.
   - Summary: when `selected.length > 0` show `{n} selected` text
     (`{1} selected`, `{2} selected`, …) — `text-xs font-bold`
     `text-black/80`, NOT interactive.
   - Panel: `role="listbox"` `absolute top-full left-0 right-0`, bg white,
     no border, `rounded-b`, shadow `0 3px 19px -15px rgba(0,0,0,0.41)`,
     `max-h-56` (=224px) `overflow-y-auto`, `z-10`. Rows:
     `role="option"`/`aria-selected` buttons: `py-[11px] px-4`, `border-t
border-[#e6e6e6]`, `text-[13px]` black, `hover:text-[#3e64ff]`
     (transparent bg — NO fill), selected row `text-[#3e64ff]` while open
     (and keep it visible so users can see what's chosen).
   - Toggle logic: clicking a row toggles it in/out of `selected` (the
     source allows deselecting by clicking the active row); panel STAYS
     open. Hidden-select semantics are replaced by this real state.
   - Close: outside click (effect listener), Escape, trigger toggle.
   - A11y: label `htmlFor` → trigger `id`; `aria-expanded` flip; focus
     visible rings.
4. `Heading` component: h2 "Winnow" 28px #000 Lato font-heading lh-1.5.
5. `Footer`: "More templates at Component Dock" linking
   `https://www.componentdock.com/`, small muted text.
6. Tests (100% coverage): heading renders; label+trigger render with
   placeholder "All"; opens panel on click with 10 rows (PHP…CSS); clicking
   rows toggles selection, keeps panel open, replaces placeholder with "1
   selected"/"2 selected" summary; re-clicking a selected row deselects and
   decrements; zero selections restores "All"; outside click/Escape/toggle
   closes; selections persist across close; aria-expanded flips; footer
   link present.
7. Gate: `scripts/verify-app.sh winnow`; `npm run spec:validate`.

## Fidelity notes / gotchas

- **Real preview URL** is `/theme/bootstrap/multiselect-03/` — the bare
  slug 404s. If the preview is unreachable in a run, fall back to the
  screenshot + this spec.
- **"All" is placeholder, not a menu row** — verified live. The static
  screenshot (which shows "All" as the first item) predates plugin
  behavior; live DOM wins. Implementers: do NOT add an "All" option.
- **Summary text, NOT tag pills** — `useLabels: false` (from the `no
label` class) makes this member show "N selected" in the trigger instead
  of Sifter-style rose tags. No X/delete icon exists in this template.
- **Accent is TEXT-ONLY blue** — `#3e64ff` hover/selected text on
  transparent rows. Do NOT copy Sifter's rose fill treatment.
- **Trigger border is stateful**: closed = `rgba(34,36,38,0.15)` (fresh
  load), open = `#e6e6e6`; the source's `!important` sticks the border at
  `#e6e6e6` after interaction (a bug — implement the clean fresh-load
  state).
- **No shadow when closed** — the customized Semantic build drops the
  default dropdown shadow; only the open panel has the soft shadow.
- The source loads font-awesome + Bootstrap + popper for this page but
  uses none of them (dead assets) — ship none.
- Use lucide `ChevronDown` only (probe exports first). No images at all in
  the source — none in the app.
- Rename rule: app may not reference colorlib anywhere; provenance lives
  in spec + TEMPLATES.md + PR only.
- Deselection UX: users re-open the panel and click the blue (selected)
  row to toggle it off — keep selected rows visibly blue in the open panel.

## Definition of done

- `apps/winnow` passing `scripts/verify-app.sh winnow` (typecheck, lint,
  knip, fallow, 100% coverage vitest, build).
- `npm run readme:status` regenerated; TEMPLATES.md row 825 marked
  `[~]`→`[x]` with surge URL + homepage by the implementer stream.
- PR with `feat: winnow — ...` description including source template,
  real preview URL, tokens used, and the deviations above; merged
  immediately via `gh pr merge --squash --delete-branch`.
