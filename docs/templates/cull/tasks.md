# Cull — implementation tasks + design notes

Recreates ColorLib **Multiselect 04** (`multiselect-04`) as **Cull**.
Read `openspec/specs/template-cull/spec.md` first — it holds every token,
the live-verified DOM structure, and the Gherkin scenarios.

## Live reference

- Preview (REAL url — the default one 404s): `https://preview.colorlib.com/theme/bootstrap/multiselect-04/`
- Wrong/404: `https://preview.colorlib.com/theme/multiselect-04/` (returns "Not Found")
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-04.jpg`
- Source page: `https://colorlib.com/wp/template/multiselect-04/`
- Engine CSS (token source for the widget): `https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css`

## Section order (1:1)

1. Heading section — centered h2 "Cull" (28px, #000, Lato 400, lh 1.5),
   ~112px page padding (`ftco-section` 7em → `py-28`), centered container.
2. Multiselect control — 220px bootstrap-select-style widget centered in a
   ~380px column (trigger pill + 3-row city panel with pink checks).
3. Footer — Component Dock link only (no footer in source; convention).

## Design tokens (from live CSS + computed styles)

| Token                  | Value                                                                                                                                                                                                 | Where                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Brand accent           | `#f30e5c` (raspberry pink)                                                                                                                                                                            | SELECTED-ROW CHECKMARK ONLY (`.bs-ok-default:after` override) — never row text     |
| Trigger bg             | `#f8f9fa` (btn-light) → hover/open ≈`#e2e6ea` (observed `#dadfe5` open)                                                                                                                               |                                                                                    |
| Trigger border         | `1px solid #f8f9fa` fresh (SAME as bg → visually borderless) → `#d3d9df` on hover/open                                                                                                                | recreate fresh state + hover border                                                |
| Trigger radius         | `4px` (never changes, open or closed)                                                                                                                                                                 |                                                                                    |
| Trigger size / padding | 220×38px, `padding: 6px 12px`, line-height 24px, `box-shadow: none`                                                                                                                                   | widget fixed `w-[220px]`, `h-[38px]`                                               |
| Trigger text           | "Nothing selected" `#999` (placeholder) → joined ", " city names `#212529` (e.g. "Toronto, Bucharest"); mirrored in `title` attr                                                                      | bs-placeholder class drops once ≥1 selected                                        |
| Caret                  | Bootstrap `.dropdown-toggle::after` border triangle (`border-top: 4px solid`, ≈8×4px), color = text color (`#999` → `#212529`)                                                                        | NO caret span in source — lucide `ChevronDown` at right edge                       |
| Menu                   | `#fff`, border `1px solid rgba(0,0,0,0.15)`, radius `4px`, `padding: 8px 0`, NO shadow, min-width 100% (=220px), flush under trigger                                                                  |                                                                                    |
| Rows                   | `padding: 4px 24px`, color `#212529`, Lato 16px, lh 1.8 (28.8px), transparent bg, hover/focus bg `#f8f9fa` (BS4 default), NO dividers                                                                 | text right margin 34px (room for check)                                            |
| Checkmark              | CSS border check `.bs-ok-default:after` (w .5em, h 1em, border 0 .26em .26em 0, rotate 45°), color `#f30e5c`, 12px, mt 5px, absolute right 15px / top 5px, `display:none` unless selected + menu open | `Check`-style lucide icon or CSS-drawn check — color `#f30e5c`                     |
| Heading                | `Multiselect #04` → recreate as "Cull"; 28px, `#000`, Lato 400, lh 1.5 (42px), centered, 48px gap below (`mb-5`)                                                                                      |                                                                                    |
| Body                   | Lato 16px, lh 1.8, `#fff` bg, color gray `#808080`; headings `#000`                                                                                                                                   | load Lato 400 only (300/700 unused here)                                           |
| Layout                 | container ≈1140px; heading col; control col ≈380px → widget EXACTLY 220px wide, centered by column flex                                                                                               | approximate: centered `max-w-2xl` container, `max-w-sm` column, `w-[220px]` widget |

Options data (3): Toronto, Bucharest, Paris — NO values, NO "All", NO label
element above the control. Selection state = the city names themselves.

## Implementation outline (TDD)

1. Copy the simplest existing app (sibling precedence: `apps/winnow` is the
   closest precedent — same series, same page shape: heading + one control
   - footer; copy its test setup incl. the `MemoryStorage` jsdom polyfill
     from `apps/cura/src/test/setup.ts` if needed — jsdom 30 has no
     localStorage) → `apps/cull`, package `@free-react-templates/cull`,
     `public/CNAME` = `cull.free.componentdock.com`, `"homepage"` =
     `https://cull.free.componentdock.com`. Register workspace in root
     `package-lock.json` via root `npm install` before committing (deploy
     Action runs `npm ci`).
2. App shell: `App.tsx` composes `Heading`, `MultiSelect` (the control),
   `Footer`; `main.tsx` entry; document title "Cull — Multiselect
   Dropdown".
3. `MultiSelect` component (state-driven, no plugins — NO bootstrap-select,
   NO jQuery, NO Bootstrap):
   - State: `selected: string[]` (city names), `open: boolean`.
   - Trigger `button`: `bg-[#f8f9fa]` + `border border-[#f8f9fa]` fresh
     (visually borderless) → hover/open `bg-[#e2e6ea] border-[#d3d9df]`,
     `rounded`, `h-[38px]`, `px-3 py-1.5`, `w-full`, Lato 16px,
     `text-left relative`, `aria-haspopup="listbox"`, `aria-expanded`,
     `aria-label="Select cities"`; `title` = current text; caret
     `ChevronDown` absolute `right-3 top-1/2 -translate-y-1/2`, size
     ~14px, color `#999` placeholder / `#212529` selected.
   - Placeholder: "Nothing selected", `text-[#999]`, shown when
     `selected.length === 0` (class `bs-placeholder` equivalent).
   - Text: when `selected.length > 0`, show `selected.join(", ")` in
     `text-[#212529]` — NOT pills, NOT "N selected" (that was Winnow).
   - Panel: `role="listbox"` `absolute top-full left-0 right-0 z-10`, bg
     white, `border border-black/15` (`rgba(0,0,0,0.15)`), `rounded`,
     `py-2`, no shadow, `w-full` (220px). Rows: `role="option"`/
     `aria-selected` buttons: `px-6 py-1` (4px 24px), `text-[#212529]`
     text-base, `leading-[1.8]`, hover `bg-[#f8f9fa]` (BS4 dropdown-item
     fill — NO text color change on selection). Reserve right room:
     `pr-10`/`[&_.check]:right-[15px]`-style spacing; check indicator
     (`Check` icon or CSS-drawn check) `text-[#f30e5c]` size 12px,
     absolute `right-[15px] top-[5px]`, visible ONLY when the row is
     selected (and panel open — it's menu-scoped in the source).
   - Toggle logic: clicking a row toggles it in/out of `selected`; panel
     STAYS open (bootstrap-select multiple default); trigger text + title
     update; hidden-select semantics replaced by this real state.
   - Close: outside click (effect listener), Escape, trigger toggle;
     selections persist across open/close.
   - A11y: `aria-haspopup`/`aria-expanded` flip; per-row `aria-selected`;
     focus-visible rings.
4. `Heading` component: h2 "Cull" 28px #000 Lato font-heading lh-1.5.
5. `Footer`: "More templates at Component Dock" linking
   `https://www.componentdock.com/`, small muted text.
6. Tests (100% coverage): heading renders; trigger renders with
   placeholder "Nothing selected" (no label element above it); opens panel
   on click with 3 rows Toronto/Bucharest/Paris; clicking rows toggles
   selection, keeps panel open, replaces placeholder with ", "-joined text;
   title attr mirrors text; re-clicking a selected row deselects; zero
   selections restores "Nothing selected"; checkmarks visible only on
   selected rows; outside click/Escape/toggle closes; selections persist
   across close; aria-expanded flips; footer link present.
7. Gate: `scripts/verify-app.sh cull`; `npm run spec:validate`.

## Fidelity notes / gotchas

- **Real preview URL** is `/theme/bootstrap/multiselect-04/` — the bare
  slug 404s. If the preview is unreachable in a run, fall back to the
  screenshot + this spec.
- **Engine is bootstrap-select 1.13.1, NOT Semantic UI** — series members
  01–03 (Picker/Sifter/Winnow) are Semantic dropdowns; this one is a
  Bootstrap 4-styled widget. Do NOT copy the Semantic patterns (no
  `div.menu`, no `item` rows, no icon-font caret, no tag pills, no
  "N selected" summary).
- **js/main.js is DEAD CODE** — it defines a custom `Multiselect` class
  targeting `#countries` from a different template; nothing on this page
  matches it. The widget is bootstrap-select's own auto-init
  (`.selectpicker[multiple]` → rendered on DOM ready). Implement from the
  rendered DOM described here, not from main.js.
- **Fresh trigger is visually borderless** — border computes to the same
  `#f8f9fa` as the bg (live-verified). The border only shows on
  hover/open (`#d3d9df`). Recreate that two-state behavior.
- **Dark row text + pink check, NOT blue text** — the accent `#f30e5c`
  colors ONLY the selected-row checkmark (custom `.bs-ok-default:after`
  override). Row text stays `#212529` whether selected or not. This is
  the series differentiator vs Winnow/Sifter (`#3e64ff` text).
- **No label, no "All", no values** — unlike Winnow there is no "Select
  Language" label, and unlike Sifter there is no empty-value "All" row:
  just 3 plain-text city options. Add an `aria-label` on the trigger for
  a11y (documented fix).
- **No caret span** — bootstrap-select renders no caret element; the arrow
  is Bootstrap's `.dropdown-toggle::after` showing through the transparent
  filter-option. Use a lucide `ChevronDown` at the right edge instead.
- **Checkmarks are menu-scoped** — `.show-tick .dropdown-menu .selected
span.check-mark` — visible only on selected rows while the panel is
  open. Never show checks on the trigger itself.
- The source loads font-awesome + popper + bootstrap.js for this page but
  uses none of them (dead assets) — ship none.
- Use lucide `ChevronDown` + `Check` only (probe exports first — lucide
  renamed `Check`-family icons across versions). No images at all in the
  source — none in the app.
- Rename rule: app may not reference colorlib anywhere; provenance lives
  in spec + TEMPLATES.md + PR only.
- Dependencies: avoid new deps; reuse `packages/ui` Button/`cn()` where
  sensible, but the trigger row buttons are bespoke (custom classes).

## Definition of done

- `apps/cull` passing `scripts/verify-app.sh cull` (typecheck, lint, knip,
  fallow, 100% coverage vitest, build).
- `npm run readme:status` regenerated; TEMPLATES.md row 826 marked
  `[~]`→`[x]` with surge URL + homepage by the implementer stream.
- PR with `feat: cull — ...` description including source template, real
  preview URL, tokens used, and the deviations above; merged immediately
  via `gh pr merge --squash --delete-branch`.
