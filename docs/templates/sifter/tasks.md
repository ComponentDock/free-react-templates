# Sifter — implementation tasks + design notes

Recreates ColorLib **Multiselect 02** (`multiselect-02`) as **Sifter**.
Read `openspec/specs/template-sifter/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-02/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-02/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-02.jpg`
- Source page: `https://colorlib.com/wp/template/multiselect-02/`

## Section order (1:1)

1. Heading section — centered h2 "Sifter" (28px, #000, Lato 400, lh 1.5),
   ~112px page padding (`section` `py-[7em]`-ish → `py-28`), centered container.
2. Multiselect control — "Select Topics" label + trigger + panel + tags.
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles)

| Token                        | Value                                                                                                                      | Where                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Brand accent                 | `#e8647c` (rose)                                                                                                           | tag fill, row hover/selected fill, both with white text          |
| Trigger bg / border          | `#fff` / `1px solid #e6e6e6`                                                                                               | both open and closed; `border-color` is `!important`ed on active |
| Trigger radius               | `4px` (→ `4px 4px 0 0` open)                                                                                               | closed state = full 4px                                          |
| Trigger padding / min-height | `10px` / ≈33px (grows with tags; ≈54px with 2)                                                                             |                                                                  |
| Trigger shadow               | none (closed AND `:focus`)                                                                                                 | customized build strips Semantic's default                       |
| Panel                        | `#fff`, NO border, radius `0 0 4px 4px`, shadow `0 3px 19px -15px rgba(0,0,0,0.41)`, max-h ≈224px, `overflow-y: auto`      | shadow only while open                                           |
| Rows                         | `padding: 11px 16px`, color `rgba(0,0,0,0.95)`, `border-top: 1px solid #e6e6e6` divider, hover → bg `#e8647c` + white text |                                                                  |
| Placeholder "All"            | 12px, weight 700, `rgba(191,191,191,0.87)`; `display:none` after 1st selection                                             | first option (value="") demoted to placeholder — NOT a menu row  |
| Caret                        | `rgba(0,0,0,0.87)` down chevron, ≈10px, absolute right ≈10px / top 15px                                                    | lucide `ChevronDown`                                             |
| Selected tag                 | bg `#e8647c`, white text, radius 4px, `8px 10px` padding, 12px, white × (lucide `X`)                                       |                                                                  |
| Field label                  | "Select Topics", `gray` = `#808080`, 16px, w 400, mb ≈7px                                                                  | add `htmlFor` (a11y fix)                                         |
| Heading                      | 28px, `#000`, Lato 400, lh 1.5, centered, ≈42–48px gap below                                                               |                                                                  |
| Body                         | Lato 16px, lh 1.8, `#fff` bg, color gray                                                                                   | load Lato 400 only                                               |
| Layout                       | container ≈1140px; control column `col-lg-4` ≈380px → field ≈350px                                                         | approximate: centered `max-w-sm` (24rem) column, `w-full` field  |

## Implementation outline (TDD)

1. `npm run scaffold`-style copy of the simplest existing app (sibling:
   `apps/picker` is the closest precedent — same series, same page shape:
   heading + one control + footer; copy its test setup incl. the
   `MemoryStorage` jsdom polyfill if present) → `apps/sifter`, package
   `@free-react-templates/sifter`, `public/CNAME` = `sifter.free.componentdock.com`,
   `"homepage"` = `https://sifter.free.componentdock.com`.
   Register workspace in root `package-lock.json` via root `npm install`
   before committing (deploy Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `MultiSelect` (the control),
   `Footer`; `main.tsx` entry; document title "Sifter — Multiselect
   Dropdown".
3. `MultiSelect` component (state-driven, no plugins):
   - State: `selected: string[]` (topic values/ids), `open: boolean`.
   - Trigger `button`: white, `border border-[#e6e6e6]`, `rounded`,
     `p-2.5` (10px), min-h ~33px, `aria-haspopup="listbox"`,
     `aria-expanded`, `text-left w-full`, relative; caret `ChevronDown`
     absolute `right-2.5 top-3.5` (top 15px / right 10px), size 10px,
     `text-black/85`; open state: `rounded-b-none`.
   - Placeholder: "All", `text-xs font-bold` color
     `rgba(191,191,191,0.87)`, rendered only when `selected.length === 0`.
   - Tags: for each selection a `span`/`button` pill: bg `#e8647c`,
     text white, `rounded`, `py-2 px-2.5` (8px 10px), `text-xs`, with an
     `X` icon button (aria-label `Remove <topic>`) calling remove.
   - Panel: `role="listbox"` `absolute top-full left-0 right-0` (or in
     normal flow with `absolute`), bg white, no border, `rounded-b`,
     shadow `0 3px 19px -15px rgba(0,0,0,0.41)`, `max-h-56` (=224px)
     `overflow-y-auto`, `z-10`. Rows: `role="option"`/`aria-selected`
     buttons: `py-[11px] px-4`, `border-t border-[#e6e6e6]` first row
     included?, `text-[15px]`-ish color `rgba(0,0,0,0.95)`, `hover:bg-[#e8647c]
hover:text-white`, selected row keeps rose fill when panel open.
   - Topic data: eleven options "Topic 1".."Topic 11" (values 1–11).
     "All" is placeholder text only — NOT an option.
   - Close: outside click (effect listener), Escape, trigger toggle.
   - A11y: label `htmlFor` → trigger `id`; `aria-expanded` flip; focus
     visible rings.
4. `Heading` component: h2 "Sifter" 28px #000 Lato font-heading lh-1.5.
5. `Footer`: "More templates at Component Dock" linking
   `https://www.componentdock.com/`, small muted text.
6. Tests (100% coverage): heading renders; label+trigger render with
   placeholder "All"; opens panel on click with 11 rows; clicking rows adds
   tags + keeps panel open + hides placeholder; × removes tag; last-removal
   brings placeholder back; outside click/Escape/toggle closes; selections
   persist across close; aria-expanded flips; footer link present.
7. Gate: `scripts/verify-app.sh sifter`; `npm run spec:validate`.

## Fidelity notes / gotchas

- **Real preview URL** is `/theme/bootstrap/multiselect-02/` — the bare
  slug 404s. If the preview is unreachable in a run, fall back to the
  screenshot + this spec.
- **"All" is placeholder, not a menu row** — verified live. The static
  screenshot (which shows "All" as the first item) predates plugin
  behavior; live DOM wins. Implementers: do NOT add an "All" option.
- **Tag UI, not checkboxes** — selections render as rose pills INSIDE the
  trigger (Semantic `useLabels` default). No checkmarks anywhere.
- **No shadow when closed** — the customized Semantic build drops the
  default dropdown shadow; only the open panel has the soft shadow.
- The source loads font-awesome + Bootstrap + popper for this page but
  uses none of them (dead assets) — ship none.
- Use lucide `ChevronDown` + `X` only (probe exports first; lucide has
  `X`, `ChevronDown` — if `X` is missing use `XCircle`/`Close`, but prefer
  `X`).
- No images at all in the source — none in the app.
- Rename rule: app may not reference colorlib anywhere; provenance lives
  in spec + TEMPLATES.md + PR only.

## Definition of done

- `apps/sifter` passing `scripts/verify-app.sh sifter` (typecheck, lint,
  knip, fallow, 100% coverage vitest, build).
- `npm run readme:status` regenerated; TEMPLATES.md row 824 marked
  `[~]`→`[x]` with surge URL + homepage by the implementer stream.
- PR with `feat: sifter — ...` description including source template,
  real preview URL, tokens used, and the deviations above; merged
  immediately via `gh pr merge --squash --delete-branch`.
