# Rowline (ColorLib Table 06) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-rowline`. Recreation name:
> **Rowline** (NEW name — the ColorLib source keeps its name
> "Table 06").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes, sibling comparison) lives
> in `design-notes.md` in this folder — read it first. The OpenSpec
> requirements are in `openspec/specs/template-rowline/spec.md`.

## Quick facts

- **ColorLib item:** "Table 06" (TEMPLATES.md line 2889, "## Table
  (25)" at line 2868). Slug `table-06` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL (NON-STANDARD path):**
  https://preview.colorlib.com/theme/bootstrap/table-06/ — slug-only
  URL 404s. Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/table-06/css/style.css?v=86fd68ee`
  (13,348 bytes, self-contained). Both verified HTTP 200 at prep time
  (2026-09-30).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-06.jpg
  (real JPEG 1200×972).
- **Signature tokens:** sage header bar `#99b19c`, page `#f8f9fd`,
  Poppins (400/500/700), white 30px cells with 4px `#f8f9fd`
  separators, 13px white header labels, 12px `rgba(0,0,0,0.3)` blurbs,
  `#dc3545` remove ×, focus ring `#80bdff` + `rgba(0,123,255,0.25)`.
- **Source JS:** none — all interactivity is a documented React-state
  divergence (checkboxes toggle, qty edits recompute line totals,
  remove buttons delete rows).

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app to `apps/rowline`,
   rename package to `@free-react-templates/rowline`, run
   `npm install` at repo root, set `public/CNAME` +
   `homepage` to `rowline.free.componentdock.com`, register
   `injectUiSource()` in `vite.config.ts`.
2. **Tokens** — `src/index.css` `@theme`: `--color-page: #f8f9fd`,
   `--color-ink: #212529`, `--color-heading: #000`,
   `--color-sage: #99b19c`, `--color-danger: #dc3545`,
   `--color-subtext: rgba(0,0,0,0.3)`,
   `--color-uncheck: rgba(0,0,0,0.1)`,
   `--color-shadow: rgba(0,0,0,0.29)`,
   `--color-focus-border: #80bdff`,
   `--color-focus-ring: rgba(0,123,255,0.25)`. Load Poppins
   400/500/700 via Google Fonts `<link>` in `index.html`.
3. **Components** (colocated tests, TDD, 100% coverage):
   - `Navbar` — none (source has no navbar; skip).
   - `TableHeadings` — h2 "Table #06" (28px/400) + h3 "Table
     Accordion" (1.25rem/400), centered, wrapper 1.5rem mb.
   - `CartTable` — semantic table, 7 columns, sage thead bar, white
     cells, row separators, horizontal scroll wrapper.
   - `ProductCell` — 100×80 picsum thumbnail + name/blurb stack.
   - `QuantityCell` — editable input (min 1, max 100) + focus ring.
   - `RowCheckbox` — hidden real input + 20px sage/gray glyph.
   - `RemoveButton` — lucide X 12px `#dc3545`, opacity .5→.75.
   - `Footer` — Component Dock attribution only.
4. **State** — rows in React state; qty change → total = unit price ×
   qty (currency format, clamp 1–100); remove → splice row;
   checkbox → local toggle. Row 1 checkbox default-checked; canonical
   data: (44.99, 2, 89.98) / (30.99, 1) / (35.50, 1) / (76.99, 1) /
   (40.00, 1).
5. **Verify** — `scripts/verify-app.sh rowline` green (typecheck, lint,
   100% coverage, build); PR `feat/template-rowline` to main with
   source slug + preview URL (bootstrap path) + tokens in the
   description; squash-merge immediately; then `[~]`→`[x]` +
   `npm run readme:status` bookkeeping (implementer stream owns the
   TEMPLATES.md marker).

## Fidelity notes (section by section)

- **Page shell** — `#f8f9fd` page, Poppins 16/1.8/gray, 7em section
  padding, container 1140px/15px gutters (540/720/960 breakpoints).
- **Headings** — h2 "Table #06" 28px/400/#000 centered; h3 "Table
  Accordion" 1.25rem/400/#000 centered, 1.5rem mb. Weight 400 is the
  FINAL rule — not the reboot's 500.
- **Header row** — 7 th: empty · empty · Product · Price · Quantity ·
  total · empty; sage `#99b19c` bar; 13px/500/white; 30px padding;
  scope="col" on the 4 labeled. White-on-sage ≈2.3:1 — keep for
  fidelity; labels stay real text.
- **Rows** — 5 × 7 cells; canonical data above (row 5 reuses
  thumbnail 1 and carries borderless cells); cells 14px/white/30px/
  vertical middle; 4px `#f8f9fd` separators + ~10px row margin;
  `tr.cl-alert` approximated so the screenshot's band look holds.
- **Product cell** — thumbnail 100×80 cover (picsum seed
  rowline-<n>, /200/160 source); name 14px `#212529`; blurb 12px
  `rgba(0,0,0,0.3)`.
- **Quantity cell** — 10% column; bordered text input defaults
  2/1/1/1/1; focus `#80bdff` + `rgba(0,123,255,0.25)` ring; editing
  recomputes line total (documented divergence).
- **Checkboxes** — real hidden input; glyph 20px: unchecked
  `rgba(0,0,0,0.1)`, checked `#99b19c`; row 1 checked; 0.3s transition
  off under reduced motion; accessible name per product.
- **Remove** — `.cl-close` chrome (.5→.75) + 12px `#dc3545` ×;
  aria-label kept; click removes row via state.
- **Footer** — minimal Component Dock link (source has none — monorepo
  rule). Zero ColorLib strings anywhere in the app.

## Out of scope

- No navbar, no framework, no extra sections — the source is a single
  snippet page; match it 1:1.
- Do not implement in this prep run — prep stream only writes
  spec + research.
