# Tabula (ColorLib Table 08) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-tabula`. Recreation name:
> **Tabula** (NEW name — the ColorLib source keeps its name
> "Table 08").
>
> Full replication research (preview DOM skeleton, CSS tokens,
> screenshot analysis, section-by-section fidelity notes, sibling
> comparison) lives in `design-notes.md` in this folder — read it
> first. The OpenSpec requirements are in
> `openspec/specs/template-tabula/spec.md`.

## Quick facts

- **ColorLib item:** "Table 08" (TEMPLATES.md line 2891, "## Table
  (25)" at line 2868). Slug `table-08` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL (NON-STANDARD path):**
  https://preview.colorlib.com/theme/bootstrap/table-08/ — slug-only
  URL 404s. Stylesheet:
  `https://preview.colorlib.com/theme/bootstrap/table-08/css/style.css?v=ad6b6e2c`
  (11,049 bytes, self-contained, byte-identical to the source ZIP's
  sheet, SHA-256 `0486be16…8e5a`). Both verified HTTP 200 at prep
  time (2026-10-01).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-08.jpg
  (served as AVIF 1200×972 despite the .jpg extension — same quirk as
  table-05/table-07; convert before analyzing).
- **Signature tokens:** light blue-gray page `#f8f9fd` (same canvas
  as table-05/06), white table card with soft shadow
  `0 5px 12px -12px rgba(0,0,0,0.29)`, Poppins 400/700 (Roboto
  declared-but-unused — do NOT load it), black 28px h2 + 20px h3
  subheading, `#ececec` row rules / open-row bands, `#f3f3f3`
  accordion panels, green `#28a745` chevrons.
- **Source JS:** ⚠️ THIS template is interactive (unlike table-07 —
  zero scripts). The live page loads `js/snippet.js?v=7636a493`: a
  vanilla-JS Bootstrap-4-style collapse engine (no jQuery/Bootstrap)
  implementing a SINGLE-OPEN accordion (data-parent="#accordion"):
  click a row → its panel height-animates open (0.35s ease), any
  other open panel closes, the row's `.cl-collapsed` class +
  `aria-expanded` flip, the FontAwesome arrow flips up/down;
  `prefers-reduced-motion` disables animations.

## Implementation tasks (for the implementer stream)

1. **Scaffold** — copy the simplest existing app to `apps/tabula`,
   rename package to `@free-react-templates/tabula`, run
   `npm install` at repo root, set `public/CNAME` + `homepage` to
   `tabula.free.componentdock.com`, register `injectUiSource()` in
   `vite.config.ts`.
2. **Tokens** — `src/index.css` `@theme`: `--color-page: #f8f9fd`,
   `--color-heading: #000`, `--color-muted: #808080`,
   `--color-cell: #212529`, `--color-rule: #ececec`,
   `--color-openrow: #ececec`, `--color-panel: #f3f3f3`,
   `--color-accent: #28a745`, `--color-cardshadow: rgba(0,0,0,0.29)`.
   Load Poppins 400/700 via Google Fonts `<link>` in `index.html`
   (do NOT load Roboto).
3. **Components** (colocated tests, TDD, 100% coverage):
   - `Navbar` — none (source has no navbar; skip).
   - `PageHeading` — h2 "Table #08" (28px/400/#000) + h3
     "Collapsible Table" (1.25rem/400/#000), both centered;
     h2 wrapper ~50% @768+; BOTH wrappers 1.5rem margin-bottom
     (⚠️ `.cl-mb-4`, not table-07's 3rem). Set sizes/weights
     EXPLICITLY — Tailwind v4 preflight resets h1–h6.
   - `ProductTable` — semantic table in a horizontal-scroll wrapper
     (min-width 1000px, soft card shadow): 6-col thead (`#` ·
     `Product Name` · `Price` · `Quantity` · `Total` · empty icon
     column; 14px/30px padding/bold/#000/2px `#ececec` underline/
     white band/`scope="col"`), 4 product trigger rows + 4
     accordion panels (colspan=6, `#f3f3f3`, 30px padding).
   - `AccordionPanel` — the full-width detail panel row.
   - `Footer` — Component Dock attribution only.
4. **Accordion state** — React state (e.g.
   `openRowId: string | null`, initial = row 1's id), SINGLE-OPEN:
   click open row → null; click closed row → that row (closes
   previous). Trigger rows: pointer cursor, open band
   `bg-openrow` + `ChevronUp`, closed `bg-white` +
   `hover:bg-openrow` + `ChevronDown`; icons 12px `text-accent`
   from lucide-react, `aria-hidden`; triggers keyboard-operable
   (Enter/Space) with `aria-expanded` + `aria-controls` → panel.
   Height animation ~0.35s ease when motion allowed; instant under
   `prefers-reduced-motion` (CSS media query or
   `useReducedMotion`).
5. **Data** — static array: rows 1–4, each
   (n, "Laptop Technology AS2020", "$200.00", "2", "$400.00") +
   one descriptive paragraph per panel. Paraphrase allowed if same
   kind of content.
6. **Verify** — `scripts/verify-app.sh tabula` green (typecheck, lint,
   100% coverage, build); PR `feat/template-tabula` to main with
   source slug + preview URL (bootstrap path) + tokens in the
   description; squash-merge immediately; then `[~]`→`[x]` +
   `npm run readme:status` bookkeeping (implementer stream owns the
   TEMPLATES.md marker).

## Fidelity notes (section by section)

- **Page shell** — `#f8f9fd` page, Poppins 16/1.8/400/gray, 7em
  section padding, container 1140px/15px gutters (540/720/960
  breakpoints).
- **Headings** — h2 "Table #08": 28px / weight 400 (the FINAL rule —
  not the reboot's 500) / `#000`, centered; h3 "Collapsible Table":
  1.25rem / 400 / `#000`, centered; BOTH wrappers `.cl-mb-4` =
  **1.5rem** (⚠️ table-07 used 3rem — siblings differ).
- **Table shell** — `.table-wrap` overflow-x scroll; table
  min-width 1000px, width 100%, border-collapse collapse, WHITE row
  bands, cell text `#212529`, soft shadow
  `0px 5px 12px -12px rgba(0,0,0,0.29)`.
- **Header row** — 6 th: `#` · `Product Name` · `Price` · `Quantity`
  · `Total` · empty icon column (source `<th>&nbsp;</th>`); 14px /
  bold (UA default — set explicitly) / `#000`; padding 30px; no
  side/top borders; 2px `#ececec` bottom rule; white background;
  add `scope="col"` (source omits — a11y improvement, same as
  siblings).
- **Data rows** — 4 × 6 cells with canonical data above; row-number
  th (source already has `scope="row"`) bold 14px; cells 14px /
  `#212529` / 30px padding / border none / 2px `#ececec` bottom
  rule; whole row is a click target (`cursor: pointer`).
  ⚠️ The sheet also declares `tr { margin-bottom: 10px }` — under
  `border-collapse: collapse` row margins have no effect; the
  CANONICAL visual is the 2px `#ececec` separator (screenshot
  confirms).
- **Panels** — full-width td colspan=6, `#f3f3f3`, 30px padding,
  14px, one paragraph each; `.cl-collapse:not(.cl-show) { display:
  none }` — only the open panel renders.
- **Accordion behavior** — SINGLE-OPEN (data-parent): opening a row
  closes the other; initial state row 1 OPEN (aria-expanded=true,
  up-arrow, `#ececec` band) + rows 2–4 closed (white, down-arrows).
  Click open row → closes it (no panel open). Height animation
  0.35s ease; instant under reduced-motion.
- **Toggle-row colors** — open: `#ececec` !important; closed: `#fff`
  !important; closed hover: `#ececec` !important. Net: trigger rows
  are gray when open OR hovered, white only when closed+unhovered.
- **Icons** — 12px `#28a745` chevrons from lucide-react
  (ChevronUp open / ChevronDown closed), aria-hidden. The source
  uses FontAwesome `\f062`/`\f063` + a bundled FontAwesome subset —
  do NOT reproduce FontAwesome (monorepo icon rule).
- **Footer** — minimal Component Dock link (source has none —
  monorepo rule). Zero ColorLib strings anywhere in the app.
- **Fonts** — Poppins 400 + 700 only. The source sheet declares
  Roboto `@font-face` but no rule uses it; loading Roboto would be a
  divergence, not a fidelity win. Tailwind preflight resets h1–h6 —
  heading size/weight must be explicit utilities.

## Out of scope

- No navbar, no framework, no extra sections — the source is a single
  snippet page; match it 1:1 (plus the mandatory Component Dock
  footer).
- Do not implement in this prep run — prep stream only writes
  spec + research.
