# Gridkit (ColorLib Table 01) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gridkit`. Recreation name: **Gridkit** (NEW name —
> the ColorLib source keeps its name "Table 01").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-gridkit/spec.md`.

## Quick facts

- **ColorLib item:** "Table 01" (TEMPLATES.md line 2884, "## Table
  (25)" at line 2868). Slug `table-01` appears exactly ONCE in TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/table-01/`
  (HTTP 200, 1,924 bytes, `<title>Table 01</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/table-01/`
  returns **HTTP 404** — always use the `bootstrap/` path (same quirk as
  css-table-11/12, Gridline, Rowglow).
- **Preview CSS:** `css/style.css?v=0efe9947` (7,469 bytes) — single
  self-contained sheet, no framework, no JS, no icons.
- **Key tokens:** Poppins 400 (body 16px/1.8/normal, color gray), page
  **#f8f9fd (light blue-gray)**, h2 28px weight **400** color #000,
  table white surface min-width **1000px**, **thead-primary background
  #1089ff (bright blue)** with white bold 14px labels (20px 30px
  padding), body cells #212529 14px (20px 30px) with **3px #f8f9fd bottom
  dividers** (page color on white), bold `<th scope="row">` row numbers,
  container 540/720/960/1140px @576/768/992/1200 with 15px gutters,
  section padding `7em 0`, heading→table gap 3rem, wrapper
  `overflow-x: scroll`, **no buttons/links/icons/JS at all**.
- **Sections in DOM order:** light blue-gray page shell (7em padding,
  centered container) → centered h2 heading "Table #01" (28px, weight
  400) → responsive wrapper (`overflow-x: scroll`) → data table
  (blue `#1089ff` thead: # · First Name · Last Name · Email Address;
  5 white-body rows with bold row numbers 1–5, first/last name +
  email each) → minimal Component Dock attribution line (source has no
  footer; monorepo rule mandates the link).
- **Naming check:** "gridkit" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30); fits the established `-kit`
  family (btnkit, dropkit, foldkit, pipekit, selkit, showkit,
  swatchkit, toolkit).

## Implementation task outline

1. `npm create vite@latest apps/gridkit -- --template react-ts`; install
   Tailwind CSS 4 (`@tailwindcss/vite`), rename package to
   `@free-react-templates/gridkit`; add `"homepage":
   https://gridkit.free.componentdock.com` and `public/CNAME` with
   `gridkit.free.componentdock.com`.
2. Copy the simplest existing table app (e.g. `apps/rowglow` or
   `apps/gridline`) as the structural base — same file layout, `cn()`
   usage, `@theme` token pattern.
3. `index.html`: Google Fonts `<link>` for **Poppins 400**; title
   "Gridkit".
4. `@theme` tokens: `--color-page: #f8f9fd`, `--color-header-blue:
   #1089ff`, `--color-ink: #212529`, `--color-heading: #000`,
   `--color-surface: #fff`.
5. Page shell component: `bg-page`, body font Poppins, content area
   `py-[7em]`, centered `max-w-[1140px] px-[15px]` container (Tailwind
   breakpoints mirroring 540/720/960/1140 behavior: `max-w` steps).
6. Heading: single centered `h2` "Table #01", `text-[28px] font-normal
   text-heading`, `mb-3rem` (Tailwind `mb-12` ≈ 3rem).
7. Data table component: `overflow-x-auto` wrapper; `<table
   className="w-full min-w-[1000px] bg-surface border-collapse">`;
   thead `bg-header-blue` with `th` cells `font-bold text-white
   text-sm px-[30px] py-5 border-none`; 5 `<tbody>` rows: first cell
   `<th scope="row" className="font-bold">` number, then 3 `<td>`s;
   body cells `text-ink text-sm px-[30px] py-5 border-b-[3px]
   border-page`; no vertical borders, no zebra striping. Author
   `font-bold` explicitly on all `th` (Tailwind preflight has NO th/td
   rules; do not rely on UA defaults).
8. Paraphrase-allowed demo data: keep number + first + last + email per
   row (source: Mark Otto / Jacob Thornton / Larry the Bird / John Doe /
   Gary Bird).
9. Minimal footer: one line linking `https://www.componentdock.com/`
   branded "Component Dock". Zero ColorLib references anywhere
   (comments included).
10. TDD: Vitest + Testing Library — heading text/weight, header row
    columns + blue background, 5 rows with scope="row" numbers, cell
    borders/padding, `min-w-[1000px]` scroll wrapper, footer link,
    absence of ColorLib strings. 100% coverage via
    `scripts/verify-app.sh gridkit`.
11. PR `feat/template-gridkit` → squash-merge immediately; after merge
    run `npm run readme:status`, set `[x]` in TEMPLATES.md, push.
