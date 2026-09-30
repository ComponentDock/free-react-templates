# Nightgrid (ColorLib Css Table 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-nightgrid`. Recreation name: **Nightgrid** (NEW
> name — the ColorLib source keeps its name "Css Table 16").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-nightgrid/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 16" (TEMPLATES.md line 2875, "## Table
  (25)" section). Slug `css-table-16` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-16/`
  (HTTP 200, 4,251 bytes, `<title>Table #6</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-16/`
  returns **HTTP 404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=32f306b0` (9,122 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then styles
  from defaults.
- **Preview JS:** **NONE** — the live DOM loads zero `<script>` tags.
  No snippet.js, no checkboxes, no select-all — unlike css-table-14/15,
  there is NO state to reimplement in React. The row hover is pure CSS.
- **Key tokens:** Roboto (300 body/cells, 500 h2), **page `#3c373e`
  (dark plum-charcoal — the ONLY dark css-table variant)**, heading
  `#fff` 20px/500, WHITE uppercase 11px letter-spaced (.2rem) header
  labels with 30px padding-bottom (borderless, directly on the dark
  page), table body `#777` @ weight 300 (20px v / 0.75rem h padding, no
  borders), sub-blurb `rgba(255,255,255,0.3)` @ 300/80% block, name
  links `rgba(255,255,255,0.3)` (faint white, NOT blue), `.more` Details
  links 11px/900/uppercase/.2rem `rgba(255,255,255,0.3)`, **row
  hover/focus: cell text → `#fff`, links → `#fdd114` (yellow)** (.3s
  ease), odd-row stripe tint `rgba(0,0,0,0.05)`, container 540/720/960/
  1140px @576/768/992/1200 with 15px gutters, table `min-width: 900px`
  in `overflow-x: auto` wrapper, content `7rem 0` padding, heading
  margin 3rem, links never underlined (`.3s all ease` transitions).
- **Sections in DOM order:** dark page shell (7rem padding, centered
  container) → h2 heading "Table #6" (20px/500, `#fff`, on the dark
  page) → overflow-x-auto wrapper → dark data table (6 borderless
  columns: Order · Name · Occupation (+ sub-blurb) · Contact ·
  Education · empty header; 7 data rows with white uppercase header
  labels, faint `#777` cells, odd-row stripe tint, faint-white name +
  Details links; hover/focus turns text white + links yellow — CSS-only)
  → minimal Component Dock attribution line (source has no footer; monorepo
  rule mandates the link).
- **Naming check:** "nightgrid" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30; also
  grep'd for content collisions on origin/main + TEMPLATES.md — zero
  hits). Fits the sibling naming idiom gridline / gridspan / rowcard /
  rowglow / gridpane.
- **Sibling warning:** Gridline (`css-table-11`), Rowglow
  (`css-table-12`), Gridspan (`css-table-13`), Rowcard
  (`css-table-14`) and Gridpane (`css-table-15`) are prepped near-identical
  snippets. Nightgrid's distinguishing features: the DARK `#3c373e` page
  with white uppercase header labels directly on it, faint-white links
  (siblings use blue `#007bff` links), odd-row `rgba(0,0,0,0.05)` stripe
  tint, and the yellow `#fdd114` hover on white cell text (Rowglow is the
  other hover variant: light gray page, row turns fully white on hover —
  no yellow). Do NOT copy tokens between the six apps.

## Tasks (todo outline for implementers)

- [ ] Scaffold app: copy the simplest existing app → `apps/nightgrid`,
      rename package to `@free-react-templates/nightgrid`, set
      `public/CNAME` (`nightgrid.free.componentdock.com`) + `homepage`;
      run `npm install` at repo root so the lockfile registers the
      workspace.
- [ ] Load Roboto 300/400/500 via Google Fonts `<link>` in `index.html`.
- [ ] `src/index.css` `@theme` tokens: page `#3c373e`, heading `#fff`,
      muted `#777`, faint `rgba(255,255,255,0.3)`, highlight `#fdd114`,
      stripe `rgba(0,0,0,0.05)`; keep the `injectUiSource()` vite
      pattern.
- [ ] `App.tsx` composition: `PageShell` → `DarkTable` → footer
      (Component Dock attribution). Single `main`/`h2` hierarchy.
- [ ] `DarkTable.tsx` (or equivalent): `overflow-x-auto` wrapper →
      `<table>` `min-width: 900px` / `w-full` / `border-collapse`;
      thead `th` 11px uppercase tracking-[.2rem] `#fff` pb-[30px]
      borderless (6 columns, `scope="col"`, LAST cell empty); tbody = 7
      data rows; cells `#777` weight 300, padding 20px v / 0.75rem h,
      `align-top`, NO borders, `.3s ease` color transition; odd rows
      (1st/3rd/5th/7th) tinted `rgba(0,0,0,0.05)` (stripe utility on
      the table + odd-row selector, e.g.
      `[&>tbody>tr:nth-child(odd)]:bg-black/5` or a small CSS rule).
- [ ] Row data + content: 7 rows (4 unique + 3 duplicates of rows 2–4,
      or 4 unique — same KIND either way): 4-digit ids, names as
      `rgba(255,255,255,0.3)` no-underline links, occupation +
      faint block blurb, +CC phones, school names, "Details" `.more`
      link (11px/900/uppercase/tracking-[.2rem]/faint) in column 6.
- [ ] Hover/focus treatment (signature, CSS-only): `group-hover` /
      `group-focus-within` (or CSS `tbody tr:hover, tbody tr:focus-within`)
      → cell text `text-white`, links `text-[#fdd114]`; ~0.3s ease;
      revert on leave; stripe tint unaffected. NO React state, NO JS.
- [ ] Footer: minimal "Made with Component Dock" attribution linking
      `https://www.componentdock.com/`. ZERO ColorLib references in app
      files (comments included) — token notes only.
- [ ] Tests (TDD, colocated `*.test.tsx`, scenario-style `it` blocks
      mirroring the spec's Gherkin): shell/heading render (dark bg, white
      h2), header casing/6th-empty column, 7 rows + demo data, sub-blurb,
      faint link colors, Details `.more` styling, odd-row tint, hover/focus
      white+yellow treatment (e.g. CSS class assertions — the hover is
      pure CSS, so assert the group classes/CSS are present and the
      initial colors are correct), responsive wrapper, footer link,
      accessibility semantics. 100% coverage via
      `scripts/verify-app.sh nightgrid`.
- [ ] PR `feat/template-nightgrid` → squash-merge; description must cite
      source slug `css-table-16`, the `bootstrap/` preview path, tokens,
      and the two signatures (dark `#3c373e` page + yellow `#fdd114`
      hover links).
