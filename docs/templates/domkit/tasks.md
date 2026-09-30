# Domkit (ColorLib Table 03) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-domkit`. Recreation name: **Domkit**
> (NEW name — the ColorLib source keeps its name "Table 03").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-domkit/spec.md`.

## Quick facts

- **ColorLib item:** "Table 03" (TEMPLATES.md line 2886, "## Table
  (25)" at line 2868). Slug `table-03` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/table-03/`
  (HTTP 200, 3,074 bytes, `<title>Table 03</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/table-03/`
  returns **HTTP 404** — always use the `bootstrap/` path (same quirk as
  css-table-11/12/16, table-01/02, Gridline, Rowglow, Nightgrid, Gridkit,
  Rowdeck).
- **Preview CSS:** `css/style.css?v=75abd250` — ⚠️ direct curl fetches
  returned **404** at prep time (2026-09-30) even though the page loads
  fine; tokens were captured from the LIVE browser-rendered page (full
  cssRules dump + computed styles) and are canonical in
  `design-notes.md` / the spec — implementers do NOT need to re-fetch it.
- **Key tokens:** Poppins **400/500/700** (body 16px/1.8/normal, color
  gray), page **#f8f9fd (light blue-gray)**, h2 28px weight **400**
  color #000, h4 subheading 24px weight 400, table min-width
  **1000px** + white bg + centered text + shadow
  `0 5px 12px -12px rgba(0,0,0,.29)`, **thead-primary background
  #6807f9 (vivid violet)** with white bold 14px labels (30px padding),
  TLD `th.scope` cells **#e8ebf8** (bold, border-b `#e0e5f6`), ≥768px
  odd-position tds (Registration + Transfer) **#f4f6fc** (border-b
  `#ecEFFa`), white tds elsewhere (border-b `#f8f9fd`), last row
  border-b-0, **Sign Up buttons #6807f9 / 13px / 500 / 2px radius /
  2px border / 6px 12px padding, hover #5305c8 + shadow**, container
  540/720/960/1140px @576/768/992/1200 with 15px gutters, section
  padding `7em 0`, heading gap 3rem, subheading gap 1.5rem, wrapper
  `overflow-x: scroll`, **no JS, no images, no icons**.
- **Sections in DOM order:** light blue-gray page shell (7em padding,
  centered container) → centered h2 heading "Table #03" (28px, weight
  400, 3rem gap) → centered h4 subheading "Create Your Domain Name"
  (24px, weight 400, 1.5rem gap) → responsive wrapper (`overflow-x:
  scroll`) → domain-pricing table (violet `#6807f9` thead: TLD ·
  Duration · Registration · Renewal · Transfer · Register; 6 rows:
  .com $70 / .net $75 / .org $65 / .biz $60 / .info $50 / .me $45 —
  all "1 Year", Renewal/Transfer $5.00 — TLD column shaded lavender,
  alternating #f4f6fc columns at ≥768px, violet Sign Up button per
  row, last row border-b-0) → minimal Component Dock attribution line
  (source has no footer; monorepo rule mandates the link).
- **Interactive note:** the source preview loads ZERO scripts — the
  `href="#"` Sign Up anchors are inert there. The recreation SHALL make
  them real interactive elements (`packages/ui` Button/ButtonLink)
  styled to the violet tokens, accessible name "Sign Up", NO invented
  navigation (source behavior: link to `#`).
- **Naming check:** "domkit" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep clean); fits
  the `-kit` family (gridkit — the sibling Table 01 recreation; the
  buildex/next/regen/structure ui-kit items).

## Implementation task outline

1. `npm create vite@latest apps/domkit -- --template react-ts`; install
   Tailwind CSS 4 (`@tailwindcss/vite`), rename package to
   `@free-react-templates/domkit`; add `"homepage":
   https://domkit.free.componentdock.com` and `public/CNAME` with
   `domkit.free.componentdock.com`.
2. Copy the simplest existing table app (e.g. `apps/gridkit` or
   `apps/rowdeck`) as the structural base — same file layout, `cn()`
   usage, `@theme` token pattern. (`apps/gridkit` is the closest
   sibling: same page canvas + heading treatment + centered subheading
   family; Domkit differs in the violet header + shading + buttons.)
3. `index.html`: Google Fonts `<link>` for **Poppins 400;500;700**;
   title "Domkit".
4. `@theme` tokens: `--color-page: #f8f9fd`, `--color-primary:
   #6807f9`, `--color-primary-hover: #5305c8`, `--color-ink: #212529`,
   `--color-heading: #000`, `--color-surface: #fff`, `--color-scope:
   #e8ebf8`, `--color-scope-border: #e0e5f6`, `--color-shade: #f4f6fc`,
   `--color-shade-border: #ecEFFa`.
5. Page shell component: `bg-page`, body font Poppins, content area
   `py-[7em]`, centered `max-w-[1140px] px-[15px]` container (Tailwind
   breakpoints mirroring 540/720/960/1140 behavior: `max-w` steps).
6. Heading: single centered `h2` "Table #03", `text-[28px] font-normal
   text-heading`, `mb-12` (3rem).
7. Subheading: centered `h4` "Create Your Domain Name", `text-2xl
   font-normal text-heading`, `mb-6` (1.5rem).
8. Data table component: `overflow-x-auto` wrapper; `<table
   className="w-full min-w-[1000px] bg-surface text-center
   [box-shadow:0_5px_12px_-12px_rgba(0,0,0,0.29)]">`. thead
   `bg-primary` with `th` cells `font-bold text-white text-sm
   px-[30px] py-[30px] border-none`; 6 columns: TLD · Duration ·
   Registration · Renewal · Transfer · Register. 6 `<tbody>` rows:
   first cell `<th scope="row" className="font-bold bg-scope
   border-b-2 border-scope-border">` TLD (.com/.net/.org/.biz/.info/
   .me); data cells `text-sm text-ink px-[30px] py-[30px]` + centered +
   per-position backgrounds/borders (white cells `bg-surface
   border-b-2 border-page`; ≥768px odd-position tds — 3rd and 5th
   cells of each row (Registration, Transfer) — `bg-shade
   border-b-2 border-shade-border`, e.g. via `md:` variants or a
   scoped nth-child selector). Last row (.me): `border-b-0` on every
   cell. Tailwind preflight has NO th/td rules — author `font-bold`
   explicitly.
9. Sign Up buttons: per-row CTA in the Register column — `packages/ui`
   Button/ButtonLink (or a styled button) `bg-primary
   border-primary text-white text-[13px] font-medium border-2
   rounded-[2px] px-3 py-1.5`, hover `bg-primary-hover
   border-primary-hover` + shadow `0 12px 20px -6px rgba(0,0,0,0.21)`;
   monorepo `focus-visible` ring; accessible name "Sign Up"; no
   invented destination (source links to `#`).
10. Paraphrase-allowed demo data: keep TLD + duration + registration +
    renewal + transfer + CTA per row (source: .com $70 / .net $75 /
    .org $65 / .biz $60 / .info $50 / .me $45; all "1 Year";
    Renewal/Transfer $5.00).
11. Minimal footer: one line linking `https://www.componentdock.com/`
    branded "Component Dock". Zero ColorLib references anywhere
    (comments included).
12. TDD: Vitest + Testing Library — heading text/weight, subheading
    text/weight, violet header bar color + 6 columns, 6 rows with
    scope="row" TLD cells + prices, scope/shade/white cell backgrounds
    + border colors + border-b-0 last row, `min-w-[1000px]` scroll
    wrapper, Sign Up button styling + hover class + accessible name,
    responsive shading gate, footer link, absence of ColorLib strings.
    100% coverage via `scripts/verify-app.sh domkit`.
13. PR `feat/template-domkit` → squash-merge immediately; after merge
    run `npm run readme:status`, set `[x]` in TEMPLATES.md, push.
