# Rowdeck (ColorLib Table 02) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-rowdeck`. Recreation name: **Rowdeck**
> (NEW name — the ColorLib source keeps its name "Table 02").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-rowdeck/spec.md`.

## Quick facts

- **ColorLib item:** "Table 02" (TEMPLATES.md line 2885, "## Table
  (25)" at line 2868). Slug `table-02` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/table-02/`
  (HTTP 200, 6,199 bytes, `<title>Table 02</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/table-02/`
  returns **HTTP 404** — always use the `bootstrap/` path (same quirk as
  css-table-11/12/16, table-01, Gridline, Rowglow, Nightgrid, Gridkit).
- **Preview CSS:** `css/style.css?v=8362951b` (9,178 bytes) — single
  self-contained sheet, no framework, no JS, no icon fonts (the × is an
  inlined Font Awesome SVG; recreate with lucide-react).
- **Key tokens:** Poppins 400 (body 16px/1.8/normal, color gray), page
  **#f8f9fd (light blue-gray)**, h2 28px weight **400** color #000,
  table min-width **1000px**, **`border-collapse: separate; border-spacing:
  0 10px`** (the row-card signature — 10px gaps between rows),
  **thead-dark background #343a40 (dark charcoal)** with white bold 14px
  labels (30px padding), body cells #212529 14px on **#fff** (30px
  padding), **per-row box-shadow `0 5px 12px -12px rgba(0,0,0,0.29)`**,
  **0.25rem row radius** (`.cl-alert` class on each tr), dismiss ×
  (inner icon 12px **#dc3545**, button opacity 0.5 → 0.75 hover/focus),
  bold `<th scope="row">` IDs 001–005, container
  540/720/960/1140px @576/768/992/1200 with 15px gutters, section
  padding `7em 0`, heading→table gap 3rem, wrapper `overflow-x: scroll`,
  **no JS, no images, no other interactive controls**.
- **Sections in DOM order:** light blue-gray page shell (7em padding,
  centered container) → centered h2 heading "Table #02" (28px, weight
  400) → responsive wrapper (`overflow-x: scroll`) → data table (charcoal
  `#343a40` thead: ID no. · First Name · Last Name · Email · empty
  actions column; 5 white floating row cards with bold IDs 001–005,
  name/email cells, and a red × dismiss button each) → empty-state line
  (recreation addition when all rows dismissed) → minimal Component Dock
  attribution line (source has no footer; monorepo rule mandates the
  link).
- **Interactive note:** the source preview loads ZERO scripts — the
  `data-dismiss="alert"` close buttons are inert there. The recreation
  SHALL make × functional (remove row from state); that is the evident
  markup intent and gives the app testable behavior.
- **Naming check:** "rowdeck" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep clean); fits
  the row/grid family (rowcard, rowglow, gridline, gridspan, gridpane,
  gridkit) and the `-deck` family (appdeck, navdeck, photodeck, skydeck,
  studydeck, swipedeck, wizdeck).

## Implementation task outline

1. `npm create vite@latest apps/rowdeck -- --template react-ts`; install
   Tailwind CSS 4 (`@tailwindcss/vite`), rename package to
   `@free-react-templates/rowdeck`; add `"homepage":
   https://rowdeck.free.componentdock.com` and `public/CNAME` with
   `rowdeck.free.componentdock.com`.
2. Copy the simplest existing table app (e.g. `apps/gridkit` or
   `apps/rowglow`) as the structural base — same file layout, `cn()`
   usage, `@theme` token pattern. (`apps/gridkit` is the closest
   sibling: same page canvas + heading treatment; Rowdeck differs in
   the table signature.)
3. `index.html`: Google Fonts `<link>` for **Poppins 400**; title
   "Rowdeck".
4. `@theme` tokens: `--color-page: #f8f9fd`, `--color-header-dark:
   #343a40`, `--color-ink: #212529`, `--color-heading: #000`,
   `--color-surface: #fff`, `--color-danger: #dc3545`.
5. Page shell component: `bg-page`, body font Poppins, content area
   `py-[7em]`, centered `max-w-[1140px] px-[15px]` container (Tailwind
   breakpoints mirroring 540/720/960/1140 behavior: `max-w` steps).
6. Heading: single centered `h2` "Table #02", `text-[28px] font-normal
   text-heading`, `mb-12` (3rem).
7. Data table component: `overflow-x-auto` wrapper; `<table
   className="w-full min-w-[1000px] border-separate
   border-spacing-y-[10px]">` — DO NOT add `border-collapse` utilities
   (collapse destroys the gaps and the row shadows). thead
   `bg-header-dark` with `th` cells `font-bold text-white text-sm
   px-[30px] py-[30px] border-none`; 5 columns incl. an empty actions
   column. 5 `<tbody>` rows: first cell `<th scope="row" className="font-bold">`
   ID (001–005), then 3 `<td>`s (first, last, email) + dismiss-button
   cell; body cells `text-ink text-sm bg-surface px-[30px] py-[30px]
   border-none`; row `<tr>` gets
   `[box-shadow:0_5px_12px_-12px_rgba(0,0,0,0.29)]` and `rounded`
   (0.25rem) + the transparent 1px border for box-model parity.
   Tailwind preflight has NO th/td rules — author `font-bold`
   explicitly.
8. Dismiss behavior: `useState` for the rows; dismiss button per row —
   lucide-react `X` at ~12px `text-danger`, real `<button
   aria-label="Close">`, `opacity-50 hover:opacity-75`; clicking
   removes that row. When zero rows remain, render a minimal muted
   empty-state line (no imagery, no CTAs). Keep the header bar and
   shell intact.
9. Paraphrase-allowed demo data: keep ID + first + last + email per row
   (source: Mark Otto / Jacob Thornton / Larry the Bird / John Doe /
   Gary Bird, IDs 001–005).
10. Minimal footer: one line linking `https://www.componentdock.com/`
    branded "Component Dock". Zero ColorLib references anywhere
    (comments included). Do NOT put `role="alert"` on rows.
11. TDD: Vitest + Testing Library — heading text/weight, header bar
    color + 5 columns, 5 rows with scope="row" IDs, white cell
    backgrounds + 30px padding, row gap/shadow/radius classes,
    `min-w-[1000px]` scroll wrapper, dismiss removes row, empty-state
    after dismissing all, footer link, absence of ColorLib strings. 100%
    coverage via `scripts/verify-app.sh rowdeck`.
12. PR `feat/template-rowdeck` → squash-merge immediately; after merge
    run `npm run readme:status`, set `[x]` in TEMPLATES.md, push.
