# Gridmark (ColorLib Table 04) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-gridmark`. Recreation name: **Gridmark**
> (NEW name — the ColorLib source keeps its name "Table 04").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-gridmark/spec.md`.

## Quick facts

- **ColorLib item:** "Table 04" (TEMPLATES.md line 2887, "## Table
  (25)" at line 2868). Slug `table-04` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/table-04/`
  (HTTP 200, 18,520 bytes, `<title>Table 04</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/table-04/`
  returns **HTTP 404** — always use the `bootstrap/` path (same quirk as
  css-table-11/12/16, table-01/02/03 — Gridline, Nightgrid, Gridkit,
  Rowdeck, Domkit).
- **Preview CSS:** `css/style.css?v=19583881` — ⚠️ direct curl fetches
  returned **404** at prep time (2026-09-30) even though the page loads
  fine; tokens were captured from the LIVE browser-rendered page (full
  cssRules dump + computed styles) and are canonical in
  `design-notes.md` / the spec — implementers do NOT need to re-fetch it.
- **Key tokens:** Poppins **400/600/700** (body 16px/1.8/normal, color
  gray), page **#fff (PURE WHITE — NOT `#f8f9fd`)**, h2 28px weight
  **400** color #000, h4 subheading 24px weight 400, table min-width
  **1000px** + white bg + centered text + shadow
  `0 5px 12px -12px rgba(0,0,0,.29)` + border-collapse **collapse** +
  outer `1px solid #dee2e6`, **thead: borderless BLACK day headers**
  (Monday–Sunday, bold 14px, 30px padding — NO colored bar, unlike
  Table 03), tbody 5×7 cells white 14px/30px padding/1px #dee2e6
  borders/middle + whitesmoke `#f5f5f5` hover over 0.5s + ~10px row
  spacing, **× marks** (lucide X, 12px, `rgba(0,0,0,0.3)`), **class
  cards** (90px circular picsum images gridmark-1…7 + "Yoga training"
  strong 12px/600/#666 + "7 am-6 am" 12px **#ffafb0 salmon**), tfoot
  month-nav (th 16px bold/12px padding/top + links #000 400 hover
  #ffafb0 + 12px lucide arrows), container 540/720/960/1140px
  @576/768/992/1200 with 15px gutters, section padding `7em 0`,
  heading gap 3rem, subheading gap 1.5rem, wrapper `overflow-x: scroll`,
  **no JS; images + icons via placeholders/lucide**.
- **Sections in DOM order:** pure white page shell (7em padding,
  centered container) → centered h2 heading "Table #04" (28px, weight
  400, 3rem gap) → centered h4 subheading "Class Schedule Table" (24px,
  weight 400, 1.5rem gap) → responsive wrapper (`overflow-x: scroll`) →
  class-schedule table (borderless black thead: Monday…Sunday; 5 body
  rows × 7 cells — canonical pattern R1 `X C1 X C2 X C3 X` · R2 `C4 X
  C5 X C6 X C7` · R3 = R1 · R4 = R2 · R5 `C1 X C2 C3 X C4 C5` — 16
  ×-cells + 19 class-cards cycling 7 circular photos; R5 Wed+Thu are
  BOTH cards, intentional; tfoot "← September" … "November →" month
  nav) → minimal Component Dock attribution line (source has no footer;
  monorepo rule mandates the link).
- **Interactive note:** the source preview loads ZERO scripts — the
  class-card and month links are inert `href="#"` anchors there. The
  recreation SHALL make them real interactive elements with accessible
  names, styled to the tokens above, and NO invented destination.
- **Naming check:** "gridmark" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep clean); fits
  the grid family (gridkit — the sibling Table 01 recreation; gridpane,
  gridline).

## Implementation task outline

1. `npm create vite@latest apps/gridmark -- --template react-ts`; install
   Tailwind CSS 4 (`@tailwindcss/vite`), rename package to
   `@free-react-templates/gridmark`; add `"homepage":
   https://gridmark.free.componentdock.com` and `public/CNAME` with
   `gridmark.free.componentdock.com`.
2. Copy the simplest existing table app (e.g. `apps/gridkit` or
   `apps/domkit`) as the structural base — same file layout, `cn()`
   usage, `@theme` token pattern. (`apps/gridkit` is the closest
   sibling: same heading/subheading/container family; Gridmark differs
   in the WHITE canvas, bordered grid table, ×/card cell pattern, and
   tfoot month-nav.)
3. `index.html`: Google Fonts `<link>` for **Poppins 400;600;700**;
   title "Gridmark".
4. `@theme` tokens: `--color-page: #fff`, `--color-ink: #212529`,
   `--color-heading: #000`, `--color-accent: #ffafb0`, `--color-label:
   #666`, `--color-surface: #fff`, `--color-line: #dee2e6`,
   `--color-hover: #f5f5f5`, `--color-mark: rgba(0,0,0,0.3)`.
5. Page shell component: `bg-page` (WHITE), body font Poppins, content
   area `py-[7em]`, centered `max-w-[1140px] px-[15px]` container
   (Tailwind breakpoints mirroring 540/720/960/1140 behavior).
6. Heading: single centered `h2` "Table #04", `text-[28px] font-normal
   text-heading`, wrapper column `mb-12` (3rem).
7. Subheading: centered `h4` "Class Schedule Table", `text-2xl
   font-normal text-heading`, `mb-6` (1.5rem).
8. Data table component: `overflow-x-auto` wrapper; `<table
   className="w-full min-w-[1000px] bg-surface text-center
   border-collapse [box-shadow:0_5px_12px_-12px_rgba(0,0,0,0.29)]
   border border-line">`. thead: 7 `<th>` day labels Monday…Sunday,
   `font-bold text-heading text-sm px-[30px] py-[30px] border-none` —
   NO background color (white page shows through). Tailwind preflight
   has NO th/td rules — author `font-bold`/`text-[14px]` explicitly.
9. Body rows: 5 `<tr>` × 7 `<td>` following the canonical pattern (R1
   `X C1 X C2 X C3 X` · R2 `C4 X C5 X C6 X C7` · R3 = R1 · R4 = R2 ·
   R5 `C1 X C2 C3 X C4 C5`; R5 Wed+Thu both cards is intentional).
   Cells: `bg-surface text-[14px] text-ink px-[30px] py-[30px]
   border border-line align-middle` + centered + `hover:bg-hover
   transition-colors duration-500` (disable transition under
   `prefers-reduced-motion`). Row spacing ~10px (source `tbody tr`
   margin-bottom 10px).
10. ×-cells: lucide `X` `size={12}` `className="text-mark"` (or
    `text-[rgba(0,0,0,0.3)]`) `aria-hidden="true"`, centered.
11. Class-cells: circular image `w-[90px] h-[90px] rounded-full
    bg-cover bg-center mx-auto mb-2` with
    `https://picsum.photos/seed/gridmark-<n>/180/180` (n = 1…7 cycled)
    + block link: `<strong className="text-xs font-semibold
    text-label">Yoga training</strong>` + `<br>` + time `text-xs
    text-accent` ("7 am-6 am" — paraphrase allowed, keep two-line
    structure). Real interactive element, accessible name, no invented
    destination (source `href="#"`).
12. tfoot: 7 `<th>` — th1 link `← September` (lucide ArrowLeft
    `size={12}` before text), th2–6 empty, th7 link `November →`
    (ArrowRight after text). th cells: `text-base font-bold px-3 py-3
    align-top border border-line` (16px/700/12px/top — NOT the body
    styles). Links: `text-base font-normal text-black
    hover:text-accent transition-colors`; accessible names; no invented
    destination.
13. Minimal footer: one line linking `https://www.componentdock.com/`
    branded "Component Dock". Zero ColorLib references anywhere
    (comments included).
14. TDD: Vitest + Testing Library — heading text/weight, subheading
    text/weight, WHITE page bg (assert NOT blue-gray), borderless black
    7-column thead + bold weights, 5×7 cell grid with the canonical
    pattern (16 ×-cells / 19 cards), ×-cell icon color + aria-hidden,
    circular 90px images + #666/600 label + #ffafb0 time, cell hover
    class + reduced-motion, tfoot month-nav content/borders/12px
    padding/hover, `min-w-[1000px]` scroll wrapper, footer link,
    absence of ColorLib strings. 100% coverage via
    `scripts/verify-app.sh gridmark`.
15. PR `feat/template-gridmark` → squash-merge immediately; after merge
    run `npm run readme:status`, set `[x]` in TEMPLATES.md, push.
