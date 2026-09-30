# Statusline (ColorLib Table 05) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation
> ships later on `feat/template-statusline`. Recreation name:
> **Statusline** (NEW name — the ColorLib source keeps its name
> "Table 05").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes, sibling comparison) lives
> in `design-notes.md` in this folder — read it first. The OpenSpec
> requirements are in `openspec/specs/template-statusline/spec.md`.

## Quick facts

- **ColorLib item:** "Table 05" (TEMPLATES.md line 2888, "## Table
  (25)" at line 2868). Slug `table-05` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/table-05/`
  (HTTP 200, 8,847 bytes, `<title>Table 05</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/table-05/`
  returns **HTTP 404** — always use the `bootstrap/` path (same quirk
  as css-table-11/12/16, table-01/02/03/04 — Gridline, Nightgrid,
  Gridkit, Rowdeck, Domkit, Gridmark).
- **Preview CSS:** `css/style.css?v=de8ec152`, resolved at
  `https://preview.colorlib.com/theme/bootstrap/table-05/css/style.css?v=de8ec152`
  (note the `table-05/` segment before `css/` — the bare
  `bootstrap/css/style.css` path 404s). ⚠️ Unlike the Table 01–04
  sheets, this one IS fetchable: HTTP 200, 11,913 bytes at prep time
  (2026-09-30). All tokens below were captured directly from the sheet
  — canonical; implementers do NOT need to re-fetch it.
- **Key tokens:** Poppins **400/500/700** (body 16px/1.8/normal, color
  gray `#808080`), page **`#f8f9fd` light blue-gray** (back after
  Gridmark's pure white — sibling values differ per entry), h2 28px
  weight **400** color #000, table min-width **1000px** + soft shadow
  `0 5px 12px -12px rgba(0,0,0,.29)` + border-collapse collapse,
  **thead: white bg + 4px `#eceffa` lavender underline**, gray 13px/500
  labels (Email · Username · Status; checkbox + remove columns
  unlabeled), tbody 5×5 cells white 14px/30px padding/no borders,
  **4px `#f8f9fd` row separators** (page-colored — read as gaps) +
  ~10px row margin + last row borderless, **status pills** (Active
  `#cff6dd`/`#1fa750`/dot `#23bd5a`; waiting `#fdf5dd`/`#cfa00c`/dot
  `#f2be1d`; radius 30px; padding 4px 10px 4px 25px; 10px dot),
  **50px circular avatars** (picsum seed statusline-1…5 at 100/100),
  **teal `#40bfc1` checkbox accent** (20px glyphs, row 1 default
  checked), **red `#dc3545` 12px × remove buttons** (lucide X; chrome
  opacity .5 → .75 hover), container 540/720/960/1140px
  @576/768/992/1200 with 15px gutters, section padding `7em 0`,
  heading gap 3rem, wrapper `overflow-x: scroll`,
  **no JS; avatars + icons via placeholders/lucide**.
- **Sections in DOM order:** light blue-gray page shell (7em padding,
  centered container) → centered h2 heading "Table #05" (28px, weight
  400, 3rem gap) → wrapper (`overflow-x: scroll`) → user-status table
  (thead: empty · Email · Username · Status · empty under the
  `#eceffa` underline; tbody: 5 alert-card rows — checkbox + avatar +
  email/date + username + status pill + remove ×; canonical data below;
  row 1 checkbox default-checked) → minimal Component Dock attribution
  line (source has no footer; monorepo rule mandates the link).
- **Canonical row data:**
  1. markotto@email.com · Added: 01/03/2020 · Markotto89 · Active
     (checked)
  2. jacobthornton@email.com · Added: 01/03/2020 · Jacobthornton ·
     Waiting for Resassignment
  3. larrybird@email.com · Added: 01/03/2020 · Larry_bird · Active
  4. johndoe@email.com · Added: 01/03/2020 · Johndoe1990 · Active
  5. garybird@email.com · Added: 01/03/2020 · Garybird_2020 · Waiting
     for Resassignment
  (Source typo: "Resassignment" — double s. Paraphrase allowed; keep
  status-pill semantics.)
- **Interactive note:** the source preview loads ZERO scripts — the
  remove buttons carry legacy `data-dismiss="alert"` but are dead
  there. The recreation SHALL make them functional (row removal via
  React state) and checkboxes genuinely toggleable (row 1
  default-checked) — documented divergences; visual design is
  unchanged.

## Task outline (for the implementer)

- [ ] Scaffold `apps/statusline` from the simplest existing table app;
      rename package to `@free-react-templates/statusline`;
      `npm install` at repo root so the lockfile registers the
      workspace
- [ ] `index.html`: Google Fonts Poppins 400/500/700; `homepage` +
      `public/CNAME` = `statusline.free.componentdock.com`
- [ ] `src/index.css`: `@theme` tokens from the spec checklist
      (page/ink/heading/line/active-*/wait-*/danger/accent/subtext/
      uncheck/shadow); register `injectUiSource()` in `vite.config.ts`
- [ ] `src/App.tsx`: page shell (`#f8f9fd`, 7em section padding,
      centered container) → heading → `StatusTable` → Component Dock
      attribution footer
- [ ] Components (TDD — tests first, scenario-style `it` blocks
      mirroring the spec's Gherkin):
  - `Heading.tsx` — h2 "Table #05", 28px/400/#000, centered, 3rem gap
  - `StatusTable.tsx` — wrapper + thead (5 cols, `#eceffa` underline,
    13px/500/gray labels) + tbody rows from a typed data array +
    React-state row removal
  - `MemberRow.tsx` — checkbox cell, `UserCell` (avatar + email/date
    stack), username, `StatusPill`, `RemoveButton`
  - `StatusPill.tsx` — variant map `Record<'active'|'waiting', string>`
    for the two pill palettes + dot
  - `Checkbox.tsx` — real input (opacity-0), Square/SquareCheck
    glyphs, accessible name per row, reduced-motion-safe transition
- [ ] Row state: `useState` of the 5 canonical rows; remove button
      splices the row; checkbox toggles per-row checked flag
- [ ] Icons via `lucide-react` (`X`, `Square`/`SquareCheck`); avatars
      via `picsum.photos/seed/statusline-<n>/100/100`
- [ ] Responsive: wrapper `overflow-x-auto`; table `min-width:
      1000px`; layout intact at narrow viewports
- [ ] Zero ColorLib references anywhere in `apps/statusline` (comments
      included); footer links https://www.componentdock.com/ branded
      "Component Dock"
- [ ] `scripts/verify-app.sh statusline` green (typecheck + lint + 100%
      coverage + build); PR `feat/template-statusline` → squash-merge;
      bookkeeping (`[x]`, surge URL, homepage, `npm run readme:status`)
      after merge

## Divergences from source (documented)

| Source | Recreation | Why |
| --- | --- | --- |
| Remove buttons dead (`data-dismiss`, no JS) | Row removal via React state | Monorepo pattern for interactive table demos; source is inert only because its snippet ships no JS |
| Checkbox labels have no text | Accessible name per row (e.g., "Select Markotto89") | Accessibility mandate; visual unchanged |
| Font Awesome glyph codes for checkboxes | lucide `Square`/`SquareCheck` (or custom) at same size/colors | No FA dependency; repo convention |
| `images/person_1…5.jpg` headshots | `picsum.photos/seed/statusline-<n>/100/100` | Never copy source assets |
| Poppins declared but never loaded (no Google Fonts link in preview head) | Poppins 400/500/700 loaded properly | Fidelity to the DESIGN (Poppins is the declared family) |
| "Waiting for Resassignment" typo | Keep or paraphrase | Copy may be paraphrased; keep status semantics |
