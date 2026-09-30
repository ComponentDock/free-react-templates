# Billstack (ColorLib Table 09) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-billstack`. Recreation name:
> **Billstack** (NEW name — the ColorLib source keeps its name
> "Table 09").
>
> Full replication research (preview DOM skeleton, CSS tokens,
> screenshot analysis, section-by-section fidelity notes, sibling
> comparison) lives in `design-notes.md` in this folder — read it
> first. The OpenSpec requirements are in
> `openspec/specs/template-billstack/spec.md`.

## Quick facts

- **ColorLib item:** "Table 09" (TEMPLATES.md line 2892, "## Table
  (25)" at line 2868). Slug `table-09` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL (NON-STANDARD path):**
  https://preview.colorlib.com/theme/bootstrap/table-09/ — slug-only
  URL 404s. Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/table-09/css/style.css?v=6a783924`
  (12,619 bytes, self-contained, byte-identical to the source ZIP's
  sheet, SHA-256 `3235ade3…1cf9`). Both verified HTTP 200 at prep
  time (2026-10-01).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-09.jpg
  — REAL JPEG 1200×972 this time (unlike table-05/07/08 which are
  AVIF despite `.jpg`); no conversion needed.
- **Signature tokens:** light warm-gray page **`#fafafa`** (⚠️ not
  the `#f8f9fd` blue-gray of table-05/06/08 — siblings differ),
  white table card with soft shadow
  `0 5px 12px -12px rgba(0,0,0,0.29)`, Poppins 400/700 (Roboto
  declared-but-unused — do NOT load it), black 28px h2 (no
  subheading), **uppercase 13px/400** header labels, odd-row striping
  `rgba(0,0,0,0.05)`, Bootstrap status buttons (green/amber/red,
  0.25rem radius), 3rem heading margin (⚠️ not Tabula's 1.5rem).
- **Source JS:** NONE — zero `<script>` tags on the live DOM, and the
  source ZIP has no `js/` directory. Fully static (like
  Rowline/Rowspan — NOT like Tabula's JS accordion). Status buttons
  are dead `<a href="#">` links; recreate as `<button type="button">`.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app to `apps/billstack`,
   rename package to `@free-react-templates/billstack`, run
   `npm install` at repo root, set `public/CNAME` + `homepage` to
   `billstack.free.componentdock.com`, register `injectUiSource()` in
   `vite.config.ts`.
2. **Tokens** — `src/index.css` `@theme`: `--color-page: #fafafa`,
   `--color-heading: #000`, `--color-muted: #808080`,
   `--color-cell: #212529`, `--color-stripe: rgba(0,0,0,0.05)`,
   `--color-success: #28a745`, `--color-success-hover: #218838`,
   `--color-warning: #ffc107`, `--color-warning-hover: #e0a800`,
   `--color-danger: #dc3545`, `--color-danger-hover: #c82333`,
   `--color-cardshadow: rgba(0,0,0,0.29)`.
   Load Poppins 400/700 via Google Fonts `<link>` in `index.html`
   (do NOT load Roboto).
3. **Components** (colocated tests, TDD, 100% coverage):
   - `Navbar` — none (source has no navbar; skip).
   - `PageHeading` — single h2 "Table #09" (28px/400/#000, centered);
     wrapper ~50% @768+ with **3rem** margin-bottom (⚠️ `.cl-mb-5`,
     not Tabula's 1.5rem). NO h3 subheading. Set size/weight
     EXPLICITLY — Tailwind v4 preflight resets h1–h6.
   - `InvoiceTable` — semantic table in a horizontal-scroll wrapper
     (min-width 1000px, soft card shadow): 6-col thead ("Invoce" ·
     "Customer" · "Ship" · "Price" · "Pruchased Price" · "Status" —
     source typos; fix or keep, document choice) at
     13px/400/uppercase/30px padding/no borders/white band/
     `scope="col"`, 8 invoice rows (row-header th bold `scope="row"`,
     cells 14px/`20px 30px`/no borders, odd rows striped
     `rgba(0,0,0,0.05)`, even rows `#fff`).
   - `StatusButton` — variant-mapped `<button type="button">`
     (`success` | `warning` | `danger`) via a typed
     `Record<Variant, string>` map + `cn()`; 1rem/0.375rem 0.75rem
     padding/0.25rem radius/1px border; hover colors per variant;
     0.15s transition disabled under `prefers-reduced-motion`;
     visible focus-visible ring.
   - `Footer` — Component Dock attribution only.
4. **Data** — static array of 8 rows, ALL identical invoice data
   (1001 / Mark Otto / Japan / $3000 / $1200) with the status
   SEQUENCE: Progress, Open, On hold, Progress, On hold, Open, Open,
   Progress. Paraphrase allowed if same kind of content + sequence.
5. **Verify** — `scripts/verify-app.sh billstack` green (typecheck,
   lint, 100% coverage, build); PR `feat/template-billstack` to main
   with source slug + preview URL (bootstrap path) + tokens in the
   description; squash-merge immediately; then `[~]`→`[x]` +
   `npm run readme:status` bookkeeping (implementer stream owns the
   TEMPLATES.md marker).

## Fidelity notes (section by section)

- **Page shell** — `#fafafa` page (⚠️ warm-gray, NOT `#f8f9fd`),
  Poppins 16/1.8/400/gray, 7em section padding, container
  1140px/15px gutters (540/720/960 breakpoints).
- **Heading** — h2 "Table #09": 28px / weight 400 (the FINAL rule —
  not the reboot's 500) / `#000`, centered; wrapper `.cl-mb-5` =
  **3rem** (⚠️ Tabula used 1.5rem — siblings differ). NO subheading —
  exactly one h2 on the page.
- **Table shell** — `.table-wrap` overflow-x scroll; table
  min-width 1000px, width 100%, border-collapse collapse, WHITE row
  bands, cell text `#212529`, soft shadow
  `0px 5px 12px -12px rgba(0,0,0,0.29)`.
- **Header row** — 6 th: "Invoce" · "Customer" · "Ship" · "Price" ·
  "Pruchased Price" · "Status" (⚠️ source typos "Invoce"/"Pruchased"
  — keep verbatim for pixel parity or fix as documented
  micro-divergence); **13px / weight 400 (explicit — NOT bold, unlike
  Tabula) / `#000` / text-transform uppercase**; 30px padding; NO
  borders (not even a bottom rule — unlike Tabula's 2px `#ececec`
  underline); white background; add `scope="col"` (source omits —
  a11y improvement, same as siblings).
- **Data rows** — 8 × 6 cells with canonical data above; row-header
  th "1001" (source already has `scope="row"`) bold 14px; cells 14px
  / `#212529` / `20px 30px` padding (⚠️ 20px vertical vs thead's
  30px) / border none. **Striping: odd rows (1,3,5,7)
  `rgba(0,0,0,0.05)`, even rows (2,4,6,8) `#fff`** — the striped rule
  `.cl-table-striped tbody tr:nth-of-type(odd)` beats the base
  `tbody tr { background: #fff }` on specificity. NO row-hover
  treatment (table has no hover class — unlike Tabula), NO separator
  borders.
- **Status buttons** — 8 `<button type="button">` (source:
  `<a href="#">`; identical visuals, real semantics) at 1rem /
  0.375rem 0.75rem padding / **0.25rem radius** (rounded rect, NOT a
  pill) / 1px border / weight 400. Variants: Progress = white on
  `#28a745` (hover `#218838`/`#1e7e34`); Open = **dark `#212529`
  text** on `#ffc107` (hover `#e0a800`/`#d39e00`); On hold = white
  on `#dc3545` (hover `#c82333`/`#bd2130`). 0.15s ease-in-out
  transition on color/bg/border/shadow; disabled under
  `prefers-reduced-motion`; visible focus ring per variant.
- **Fonts** — Poppins 400 + 700 only (700 for row-header "1001"
  cells, which render at UA default bold). The source sheet declares
  Roboto `@font-face` but no rule uses it; loading Roboto would be a
  divergence, not a fidelity win. Tailwind preflight resets h1–h6 AND
  th weight — heading size/weight and th weights must be explicit
  utilities (font-normal on thead labels, font-bold on row headers).
- **Footer** — minimal Component Dock link (source has none —
  monorepo rule). Zero ColorLib strings anywhere in the app.
- **DOM quirk to ignore** — the source HTML has a MISSING `</tr>` on
  row 6 (the "Open" row) — the browser auto-closes it and rows 7–8
  render normally (8 rows total, confirmed by screenshot). Render 8
  well-formed rows; do not reproduce the malformed markup.

## Out of scope

- No navbar, no framework, no extra sections — the source is a single
  snippet page; match it 1:1 (plus the mandatory Component Dock
  footer).
- Do not implement in this prep run — prep stream only writes
  spec + research.
