# Rowtint (ColorLib Table 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-rowtint`. Recreation name:
> **Rowtint** (NEW name — the ColorLib source keeps its name
> "Table 10").
>
> Full replication research (preview DOM skeleton, CSS tokens,
> screenshot analysis, section-by-section fidelity notes, sibling
> comparison) lives in `design-notes.md` in this folder — read it
> first. The OpenSpec requirements are in
> `openspec/specs/template-rowtint/spec.md`.

## Quick facts

- **ColorLib item:** "Table 10" (TEMPLATES.md line 2893, "## Table
  (25)" at line 2868). Slug `table-10` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL (NON-STANDARD path):**
  https://preview.colorlib.com/theme/bootstrap/table-10/ — slug-only
  URL 404s. Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/table-10/css/style.css?v=c2c0bfef`
  (9,883 bytes, self-contained, LINE-IDENTICAL to the source ZIP's
  sheet — live sheet has one extra trailing blank line; SHA-256s:
  live `6dc0e91d…0cde`, ZIP `b67dc830…d5d59`). Both verified HTTP 200
  at prep time (2026-10-01).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-10.jpg
  — REAL JPEG 1200×972 (JFIF, 59,627 bytes); no conversion needed.
- **Signature tokens:** light warm-gray page **`#fafafa`** (same as
  Billstack/table-09 ⚠️ not the `#f8f9fd` blue-gray of table-05/06/08),
  **charcoal `#343a40` dark header band with WHITE uppercase 13px/400
  labels**, **ALL cell text white** (`cl-table-dark`), five solid
  tint rows in sequence **`#1089ff` · `#28a745` · `#ffc107` ·
  `#dc3545` · `#17a2b8`** (primary = final override `#1089ff`, NOT
  `#007bff`), white edit (pencil-square) icon buttons, table
  min-width 1000px with soft shadow
  `0 5px 12px -12px rgba(0,0,0,0.29)`, Poppins 400/700 (Roboto
  declared-but-unused — do NOT load it), black 28px h2 (no
  subheading), 3rem heading margin.
- **Source JS:** NONE — zero `<script>` tags on the live DOM, and the
  source ZIP's index.html has none either. Fully static (like
  Billstack/Rowline/Rowspan — NOT like Tabula's JS accordion). Edit
  icons are dead `<a href="#">` links; recreate as
  `<button type="button">` with lucide `SquarePen`.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app to `apps/rowtint`,
   rename package to `@free-react-templates/rowtint`, run
   `npm install` at repo root, set `public/CNAME` + `homepage` to
   `rowtint.free.componentdock.com`, register `injectUiSource()` in
   `vite.config.ts`.
2. **Tokens** — `src/index.css` `@theme`: `--color-page: #fafafa`,
   `--color-heading: #000`, `--color-muted: #808080`,
   `--color-headerband: #343a40`, `--color-row-primary: #1089ff`,
   `--color-row-success: #28a745`, `--color-row-warning: #ffc107`,
   `--color-row-danger: #dc3545`, `--color-row-info: #17a2b8`,
   `--color-celltext: #fff`, `--color-cardshadow: rgba(0,0,0,0.29)`.
   Load Poppins 400/700 via Google Fonts `<link>` in `index.html`
   (do NOT load Roboto).
3. **Components** (colocated tests, TDD, 100% coverage):
   - `Navbar` — none (source has no navbar; skip).
   - `PageHeading` — single h2 "Table #10" (28px/400/#000, centered);
     wrapper ~50% @768+ with **3rem** margin-bottom. NO h3
     subheading. Set size/weight EXPLICITLY — Tailwind v4 preflight
     resets h1–h6.
   - `TintTable` — semantic table in a horizontal-scroll wrapper
     (min-width 1000px, `#343a40` dark default bg, white cell text,
     soft card shadow): 6-col thead on a **charcoal `#343a40` band**
     ("Invoce" · "Customer" · "Ship" · "Price" · "Pruchased Price" ·
     "" — source typos + empty 6th cell; fix or keep, optionally
     visually-hidden "Actions" label — document choice) at
     13px/400/**white**/uppercase/`20px 30px` padding/no borders/
     `scope="col"` on labeled cells; 5 tint rows (row-header th bold
     `scope="row"` white, cells 14px/**white**/`20px 30px`/no
     borders; row bg sequence `#1089ff` → `#28a745` → `#ffc107` →
     `#dc3545` → `#17a2b8`; NO row-hover treatment).
   - `EditButton` — `<button type="button">` with lucide `SquarePen`
     icon, `text-white`, ≈14px (`size-3.5` or `h-[1em] w-[1em]`),
     aria-label identifying the row (e.g. "Edit invoice 1001");
     visible focus-visible ring; clicking navigates/mutates nothing.
   - `Footer` — Component Dock attribution only.
4. **Data** — static array of 5 rows, ALL identical invoice data
   (1001 / Mark Otto / Japan / $3000 / $1200) mapped to the tint
   sequence: primary, success, warning, danger, info. Paraphrase
   allowed if same kind of content + sequence.
5. **Verify** — `scripts/verify-app.sh rowtint` green (typecheck,
   lint, 100% coverage, build); PR `feat/template-rowtint` to main
   with source slug + preview URL (bootstrap path) + tokens in the
   description; note the white-on-amber contrast divergence +
   typo/empty-label choices in the PR; squash-merge immediately; then
   `[~]`→`[x]` + `npm run readme:status` bookkeeping (implementer
   stream owns the TEMPLATES.md marker).

## Fidelity notes (section by section)

- **Page shell** — `#fafafa` page (⚠️ warm-gray, NOT `#f8f9fd`),
  Poppins 16/1.8/400/gray, 7em section padding, container
  1140px/15px gutters (540/720/960 breakpoints).
- **Heading** — h2 "Table #10": 28px / weight 400 (the FINAL rule —
  not the reboot's 500) / `#000`, centered; wrapper `.cl-mb-5` =
  **3rem**. NO subheading — exactly one h2 on the page.
- **Table shell** — `.table-wrap` overflow-x scroll; table
  min-width 1000px, width 100%, border-collapse collapse, `#343a40`
  dark default bg, **white `#fff` cell text** (⚠️ KEY DIFF vs
  Billstack's `#212529` cells — `cl-table-dark` color wins over the
  reboot rule), soft shadow `0 5px 12px -12px rgba(0,0,0,0.29)`.
- **Header row** — 6 th on a **charcoal `#343a40` band**
  (`cl-bg-dark`): "Invoce" · "Customer" · "Ship" · "Price" ·
  "Pruchased Price" · "" (⚠️ EMPTY 6th — the edit column has no
  source label). 13px / weight 400 (explicit) / **white** /
  uppercase (CSS-driven) / `20px 30px` / no borders /
  `scope="col"` on labeled cells. Source typos: keep verbatim or fix
  (documented micro-divergence, same policy as Billstack).
- **Data rows** — exactly 5 rows, all identical data:
  `1001 · Mark Otto · Japan · $3000 · $1200` + edit cell. Tint
  sequence top→bottom: **`#1089ff` (primary final override — NOT
  `#007bff`) · `#28a745` (success) · `#ffc107` (warning) ·
  `#dc3545` (danger) · `#17a2b8` (info)**. ALL cell text white
  (incl. bold row-header "1001" — set `font-bold` explicitly, UA
  default leaks through otherwise). Cells 14px / `20px 30px` / no
  borders. **NO row-hover** — the sheet's `a.cl-bg-*:hover` rules
  target links, rows are `<tr>`. ⚠️ white-on-amber `#ffc107`
  contrast ≈1.9:1 — source-faithful choice; note in PR.
- **Edit buttons** — source: `<a href="#">` + inline SVG FontAwesome
  "fa-edit" pencil-in-square (`.cl-icon` 1em, `.fa { color: #fff }`).
  Recreate: `<button type="button">` + lucide **`SquarePen`**,
  white, ≈14px, aria-label per row. Do NOT copy the inline SVG path
  (asset rule); lucide SquarePen is the closest shipping icon.
- **Footer** — minimal Component Dock attribution (source has no
  footer; monorepo rule). Zero ColorLib references in the app.
