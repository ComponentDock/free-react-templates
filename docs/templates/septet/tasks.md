# Septet (ColorLib Checkbox 17) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-septet`.

## Design notes (replication findings)

- **Original:** ColorLib "Checkbox 17" — seventeenth of the "Bootstrap
  Checkboxes (20)" series (source: https://colorlib.com/wp/template/checkbox-17/).
  TEMPLATES.md line 747 — mark that line `[x]` when done (single row, no dups).
- **Preview URL caveat:** `https://preview.colorlib.com/theme/checkbox-17/`
  is **404** — these demos live under the Bootstrap mega-theme. Use
  `https://preview.colorlib.com/theme/bootstrap/checkbox-17/` (HTTP 200,
  17.3 KB HTML, verified 2026-08-15). Page stylesheet (contains the WHOLE
  widget):
  `https://preview.colorlib.com/theme/bootstrap/checkbox-17/css/style.css`
  (2,818 bytes / 87 lines — fully extracted for tokens). libs: bootstrap 4,
  jquery, popper. **Tick is pure CSS** (border-drawn L — no icon font).
  Google Font **Roboto** (system stack — NOT Poppins). Document title:
  "Checkbox #7". Cross-checked with the TEMPLATES.md screenshot
  (`checkbox-17.jpg` 1200×972, browser-viewed 2026-08-15) AND live computed
  styles (16×16px indicator, border rgb(0,144,158), tick borders 4px
  rgb(0,144,158), mask 7px white, input display:none, h2 20px/48px margins,
  .content 112px padding) — all match.
- **NUMBERING QUIRK (verified 2026-08-15, from the Quartet research):** the
  preview server hosts TWO sub-series. Entries 01–10 = custom designs
  "Checkbox #01"–"#10" (Tickbox/Picks/Ticktag/Checkly/Tickwell/Toggly/
  Switchly/Soluna/Taskly/Moodly). Entries 11–20 = codrops-sourced demos
  "BS4 Custom Checkbox #1"–"#9": checkbox-11 → "#1" (Quadly, Bootstrap
  `custom-control` widget), 12 → "#2" (Duo, codrops `.control` widget, blue
  `#007bff`), 13 → "#3" (Trio, codrops `.control` widget, blue `#007bff`),
  14 → "#4" (Quartet, codrops `.control` widget, purple `#7e0cf5`), 15 → "#5"
  (Quintet, MATERIAL widget, hot pink `#e13a9d`), 16 → "#6" (Sextet, codrops
  `.control` widget, blue `#007bff`), **17 → "#7" (THIS template, codrops
  OVERFLOW widget, teal `#00909e`)** … 19 → "#9", 20 → duplicate "#9". Each
  11–20 entry has its OWN heading AND its own widget/checked color — do NOT
  reuse the Sextet (blue `.control`) or Quintet (Material, pink) components.
  Septet's widget is the codrops **overflow** variant: Bootstrap
  `custom-control` label + `overflow-control-indicator` + `::before/::after`
  tick+mask.
- **Visual design (DOM + CSS tokens + screenshot + live computed styles):**
  minimal demo page on pure white. One centered narrow column (col-lg-3 ≈
  255–280px) with 112px vertical padding: left-aligned 20px dark heading
  "Checkbox #7" (48px vertical margins), then FOUR stacked
  `label.custom-control.overflow-checkbox` rows — each a 16×16px 3px-radius
  2px-bordered square indicator (absolute top 4px left 0) + 24px left
  padding + 16px label text:
  1. **First checkbox** — checked → teal `#00909e` border + CSS border-drawn
     teal checkmark OVERFLOWING the box's top edge, white notch at the
     border crossing
  2. **Second checkbox** — unchecked → teal `#00909e` border, no tick
  3. **Disabled** — unchecked + disabled → `#ccc` border at 50% opacity, no
     tick, not interactive
  4. **Disabled & checked** — checked + disabled → `#ccc` border at 50%
     opacity, grey `#ccc` tick, not interactive
     No navbar, no footer — just the `.content` block. Heading copy on the
     reference reads "Checkbox #7" (NOT "#17") — keep it verbatim; the
     checklist row "Checkbox 17" is the mapping record, not on-screen copy.
- **Structure (1:1, section order):**
  1. `div.content` (padding 7rem 0 = 112px vertical) →
  2. `div.container.text-left` (centered container) →
  3. `div.row.justify-content-center` → `div.col-lg-3` (≈255–280px centered
     narrow column) →
  4. `h2.my-5.text-left` "Checkbox #7" (20px, dark, left-aligned, 48px
     top+bottom margins) →
  5. 4 × `label.custom-control.overflow-checkbox`:
     `display: none` `input[type=checkbox]` (`checked`/`disabled` per state)
     - `span.overflow-control-indicator` (16×16px, 3px radius, 2px
       `#00909e` border, absolute top 4px left 0)
     - `span.overflow-control-description` (label text, 16px).
- **Design tokens (from `css/style.css`):**
  - Accent (border + tick): **`#00909e`** (teal) — `border: 2px solid
#00909e` on the indicator; tick `border-bottom/right: 4px solid #00909e`
  - Tick `.overflow-control-indicator::after`: 10×16px element, `border-
radius: 3px`; base `transform: rotateZ(90deg) scale(0)`; checked
    `transform: rotateZ(45deg) scale(1); top: -6px; left: 5px` →
    **overflows the box top edge** (upper tip ≈6px above the 16px box);
    `transition: .3s`
  - White mask `.overflow-control-indicator::before`: 10×16px element,
    `border-right: 7px solid #fff`, `border-radius: 3px`,
    `transform: rotateZ(45deg) scale(1); top: -4px; left: 5px`,
    `opacity: 0` → `1` when checked — **notches the border** where the tick
    crosses it; `transition: .3s`
  - Disabled: `:disabled ~ .overflow-control-indicator` →
    `opacity: .5; border: 2px solid #ccc`; disabled `::after` →
    `border-bottom/right: 4px solid #ccc` (grey tick)
  - No hover/focus rules in the source (input is `display: none`) —
    recreation ADDS a focus-visible ring (a11y improvement, visuals
    unchanged)
  - Row: Bootstrap 4 `.custom-control` base (`position: relative; display:
block; min-height: 24px; padding-left: 24px`); description span 16px
    dark `#212529` Roboto
  - Input: `display: none` (source) → recreation uses the repo
    visually-hidden-but-focusable pattern (see spec) — this is a DELIBERATE
    a11y improvement over the source, keep visuals identical
  - Page: `#fff` bg, Roboto stack, `.content` padding 7rem 0, `h2` 20px
    weight 500 dark
- **Recreation decisions (from spec):** pure-CSS tick + white mask (no
  assets, no icon font — unlike Sextet which needed a lucide `Check`), Roboto
  via Google Fonts `<link>`, plain React state per checkbox, `disabled`
  variants not toggleable, heading + 4 labels verbatim, minimal footer with
  https://www.componentdock.com/ (demo has no footer — repo mandate).

## Tasks (implementation checklist — do in order)

1. [ ] `apps/septet` scaffold: copy the simplest existing app (e.g.
       `apps/sextet`), rename package to `@free-react-templates/septet`,
       update `public/CNAME` → `septet.free.componentdock.com`, `homepage` →
       `https://septet.free.componentdock.com`; `npm install` at root so the
       lockfile registers the workspace (grep the lockfile to verify).
2. [ ] Spec-driven tests FIRST (TDD, 100% coverage): heading, four-state
       list, checked/unchecked/disabled visuals, overflow tick + white mask
       classes, toggle-by-click/Space, disabled no-toggle, a11y
       (accessible name, focus ring), footer with Component Dock link,
       document title.
3. [ ] `src/index.css`: `@theme` tokens — accent `#00909e` (teal), disabled
       `#ccc`; Roboto via Google Fonts `<link>` in `index.html`.
4. [ ] `CheckboxRow` component: visually-hidden-but-focusable native input +
       `peer`-wired indicator; checked → tick + mask classes with the exact
       geometry (`top: -6px; left: 5px` tick, `top: -4px; left: 5px` mask,
       45° rotation, 0.3s transition); disabled styles per state.
5. [ ] `DemoSection`: `.content` (112px padding) → centered container →
       centered narrow column → `h2` "Checkbox #7" + four rows in order.
6. [ ] `App.tsx`: DemoSection + minimal footer (Component Dock link) in a
       `<main>` landmark; title "Septet — Checkbox UI Template".
7. [ ] `scripts/verify-app.sh septet` (typecheck + lint + 100% coverage +
       build); PR `feat/template-septet` → merge immediately
       (`gh pr merge --squash --delete-branch`).
8. [ ] Bookkeeping: TEMPLATES.md line 747 `[~]`→`[x]` + surge URL,
       `npm run readme:status`, push. (Implementer's job — NOT the prep
       stream.)
