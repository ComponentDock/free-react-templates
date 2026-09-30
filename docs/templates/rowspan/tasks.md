# Rowspan (ColorLib Table 07) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-rowspan`. Recreation name:
> **Rowspan** (NEW name — the ColorLib source keeps its name
> "Table 07").
>
> Full replication research (preview DOM skeleton, CSS tokens,
> screenshot analysis, section-by-section fidelity notes, sibling
> comparison) lives in `design-notes.md` in this folder — read it
> first. The OpenSpec requirements are in
> `openspec/specs/template-rowspan/spec.md`.

## Quick facts

- **ColorLib item:** "Table 07" (TEMPLATES.md line 2890, "## Table
  (25)" at line 2868). Slug `table-07` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL (NON-STANDARD path):**
  https://preview.colorlib.com/theme/bootstrap/table-07/ — slug-only
  URL 404s. Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/table-07/css/style.css?v=f1f9ad16`
  (8,744 bytes, self-contained, byte-identical to the source ZIP's
  sheet). Both verified HTTP 200 at prep time (2026-10-01).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-07.jpg
  (served as AVIF 1200×972 despite the .jpg extension — same quirk as
  table-05; convert before analyzing).
- **Signature tokens:** dark charcoal page `#2b3035`, dark panel table
  `#343a40`, Poppins 400/700 (Roboto declared-but-unused — do NOT
  load it), white 28px h2, borderless 14px/20px-30px cells separated
  by 3px/4px `#2b3035` page-color gaps, `rgba(255,255,255,0.075)` row
  hover. The ONLY css-table-family entry with a full dark page canvas
  (table-01…06 siblings are light `#f8f9fd`/white).
- **Source JS:** none — zero `<script>` tags on the live page. The
  only interactivity is the CSS row-hover highlight (reproduce with
  Tailwind `group-hover`, no JS state).

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app to `apps/rowspan`,
   rename package to `@free-react-templates/rowspan`, run
   `npm install` at repo root, set `public/CNAME` +
   `homepage` to `rowspan.free.componentdock.com`, register
   `injectUiSource()` in `vite.config.ts`.
2. **Tokens** — `src/index.css` `@theme`: `--color-page: #2b3035`,
   `--color-panel: #343a40`, `--color-ink: #fff`,
   `--color-heading: #fff`, `--color-muted: #808080`,
   `--color-gap: #2b3035`, `--color-rowhover: rgba(255,255,255,0.075)`.
   Load Poppins 400/700 via Google Fonts `<link>` in `index.html`
   (do NOT load Roboto).
3. **Components** (colocated tests, TDD, 100% coverage):
   - `Navbar` — none (source has no navbar; skip).
   - `TableHeading` — single h2 "Table #07" (28px/400/#fff),
     centered, wrapper ~50% @768+ with 3rem margin-bottom.
   - `PeopleTable` — semantic dark table: 4 thead th (`#` · First
     Name · Last Name · Email, scope="col"), 5 tbody rows with
     row-number th (scope="row", bold), borderless cells, 3px/4px
     `#2b3035` gaps, ~10px row spacing, horizontal-scroll wrapper
     (min-width 1000px), `group-hover:bg-[rgba(255,255,255,0.075)]`
     on rows.
   - `Footer` — Component Dock attribution only.
4. **Data** — static array: (1, Mark, Otto, markotto@email.com) /
   (2, Jacob, Thornton, jacobthornton@email.com) / (3, Larry, the
   Bird, larrybird@email.com) / (4, John, Doe, johndoe@email.com) /
   (5, Gary, Bird, garybird@email.com). Paraphrase allowed if same
   kind of content (name + name + email).
5. **Verify** — `scripts/verify-app.sh rowspan` green (typecheck, lint,
   100% coverage, build); PR `feat/template-rowspan` to main with
   source slug + preview URL (bootstrap path) + tokens in the
   description; squash-merge immediately; then `[~]`→`[x]` +
   `npm run readme:status` bookkeeping (implementer stream owns the
   TEMPLATES.md marker).

## Fidelity notes (section by section)

- **Page shell** — `#2b3035` page, Poppins 16/1.8/400/gray, 7em
  section padding, container 1140px/15px gutters (540/720/960
  breakpoints).
- **Heading** — single h2 "Table #07": 28px / weight 400 (the FINAL
  rule — not the reboot's 500) / color `#fff` (the `.heading-section`
  rule overrides h2's `#000`), centered; wrapper ~50% @768+ with
  **3rem** margin-bottom (⚠️ table-06 used 1.5rem — siblings differ).
- **Table shell** — `.table-wrap` overflow-x scroll; table
  min-width 1000px, width 100%, border-collapse collapse, background
  `#343a40`, white text, **no visible borders** (the source's
  `cl-table-bordered` class is neutralized by the final
  `.cl-table-dark.cl-table-bordered { border: 0 }` rule — the
  `#c6c8ca`/`#95999c` dark-variant values in the middle of the sheet
  are overridden by the final `#343a40`/`#454d55` block; `#343a40`
  is canonical).
- **Header row** — 4 th: `#` · `First Name` · `Last Name` · `Email`;
  14px / bold (UA default — the sheet's revert block only reverts
  th text-align, never font-weight) / white; 20px/30px padding; 4px
  `#2b3035` bottom gap (page color — reads as dark separation, not a
  border); add `scope="col"` (source omits it — documented a11y
  improvement, same as siblings).
- **Body rows** — 5 × 4 cells with canonical data above; row-number
  th (source already has `scope="row"`) bold white 14px; cells
  14px/white/20px/30px padding; 3px `#2b3035` bottom gap per row +
  ~10px row margin → rows read as separated dark bands (screenshot
  confirms).
- **Hover** — `rgba(255,255,255,0.075)` on the hovered row, white
  text preserved; the ONLY interactivity (CSS only, no JS).
- **Footer** — minimal Component Dock link (source has none —
  monorepo rule). Zero ColorLib strings anywhere in the app.
- **Fonts** — Poppins 400 + 700 only. The source sheet declares
  Roboto `@font-face` but no rule uses it; loading Roboto would be a
  divergence, not a fidelity win.

## Out of scope

- No navbar, no framework, no extra sections — the source is a single
  snippet page; match it 1:1.
- Do not implement in this prep run — prep stream only writes
  spec + research.
