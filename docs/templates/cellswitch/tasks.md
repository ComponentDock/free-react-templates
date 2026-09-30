# Cellswitch (ColorLib Css Table 17) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cellswitch`. Recreation name: **Cellswitch** (NEW
> name — the ColorLib source keeps its name "Css Table 17").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-cellswitch/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 17" (TEMPLATES.md line 2876, "## Table
  (25)" section). Slug `css-table-17` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-17/`
  (HTTP 200, 8,633 bytes, `<title>Table #7</title>`).
  ⚠️ The slug-only URL `https://preview.colorlib.com/theme/css-table-17/`
  returns **HTTP 404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=f68519b2` (12,148 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then styles
  from defaults; includes iOS-switch + custom-checkbox component styles
  and an `@media print` A3 block (screen layout stays responsive).
- **Preview JS:** `js/snippet.js?v=6c1448f7` — check-all
  (`input.js-check-all` toggles every row checkbox + an `active` class
  on rows) + per-row checkbox toggling `active`. **The stylesheet styles
  NO `.active` and NO row hover** — reimplement ONLY the checkbox state
  in React state; do NOT invent row-highlight styling. iOS switches are
  pure CSS (`:checked`), untouched by the snippet.js.
- **Key tokens:** Roboto (300 body/cells, 500 h2), **page `#fff` (WHITE)**,
  heading 20px/500 dark ink `#212529`, header labels **`#000` normal-case**
  bold weight, `padding-bottom: 30px`, borderless; table body `#777` @
  weight 300 (20px v / 0.75rem h padding, no borders), sub-blurb `#b3b3b3`
  @ 300/80% block, links `#007bff` (hover `#0056b3`) NO underline — the
  `.more` Details class has **NO rule** (plain blue link, unlike
  css-table-16); checkbox 20×20px radius 4px border 2px `#ccc`, hover/
  focus `#007bff`, checked = `#007bff` fill + WHITE check (lucide
  Check/inline SVG — NEVER the icomoon font); **iOS switch OFF = white
  pill 32×20px radius 16px border 2px `#ddd` + knob left; ON = green
  `#4cd964` track + knob right (THE signature)**; odd-row stripe tint
  `rgba(0,0,0,0.05)`; container 540/720/960/1140px @576/768/992/1200 with
  15px gutters; table `min-width: 900px` in `overflow-x: auto` wrapper;
  content `7rem 0` padding; heading margin 3rem; NO row hover treatment.
- **Sections in DOM order:** white page shell (7rem padding, centered
  container) → h2 heading "Table #7" (20px/500, dark ink, on white) →
  overflow-x-auto wrapper → white data table (7 columns: [select-all
  checkbox] · Order · Name (iOS switch + blue link) · Occupation (+
  sub-blurb) · Contact · Education · empty header; 7 data rows with
  black normal-case header labels, faint `#777` cells, odd-row stripe
  tint, plain blue name + Details links; switches ON in rows 1/2/5/6,
  OFF in 3/4/7; all row checkboxes unchecked) → minimal Component Dock
  attribution line (source has no footer; monorepo rule mandates the link).
- **Naming check:** "cellswitch" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30; also
  grep'd for content collisions on origin/main + TEMPLATES.md — zero
  hits). Fits the sibling naming idiom gridline / gridspan / rowcard /
  rowglow / gridpane / nightgrid.
- **Sibling warning:** Gridline (`css-table-11`), Rowglow
  (`css-table-12`), Gridspan (`css-table-13`), Rowcard
  (`css-table-14`), Gridpane (`css-table-15`) and Nightgrid
  (`css-table-16`) are prepped near-identical snippets. Cellswitch's
  distinguishing features: the **iOS green `#4cd964` toggle switches** in
  the Name column (the ONLY variant with switches), BLACK normal-case
  header labels on a WHITE page, plain blue `#007bff` Details links (no
  `.more` styling), and NO row hover / NO active-class styling (checkbox
  + switch states are the only color changes). Gridline shares the
  checkbox/select-all machinery but has no switches. Do NOT copy tokens
  between the seven apps.

## Tasks (todo outline for implementers)

- [ ] Scaffold app: copy the simplest existing app → `apps/cellswitch`,
      rename package to `@free-react-templates/cellswitch`, set
      `public/CNAME` (`cellswitch.free.componentdock.com`) + `homepage`;
      run `npm install` at repo root so the lockfile registers the
      workspace.
- [ ] Load Roboto 300/400/500 via Google Fonts `<link>` in `index.html`.
- [ ] `src/index.css` `@theme` tokens: page `#fff`, ink `#212529`,
      header `#000`, muted `#777`, blurb `#b3b3b3`, link `#007bff`,
      link-hover `#0056b3`, stripe `rgba(0,0,0,0.05)`, switch-on
      `#4cd964`, checkbox-border `#ccc`, switch-border `#ddd`; keep the
      `injectUiSource()` vite pattern.
- [ ] `App.tsx` composition: `PageShell` → `SwitchTable` → footer
      (Component Dock attribution). Single `main`/`h2` hierarchy.
- [ ] `SwitchTable.tsx` (or equivalent): `overflow-x-auto` wrapper →
      `<table>` `min-width: 900px` / `w-full` / `border-collapse`;
      thead `th` default bold / `#000` / NORMAL CASE (no uppercase, no
      tracking) / `pb-[30px]` borderless (7 columns, `scope="col"`,
      LAST cell empty, FIRST cell = select-all checkbox); tbody = 7
      data rows; cells `#777` weight 300, padding 20px v / 0.75rem h,
      `align-top`, NO borders; odd rows (1st/3rd/5th/7th) tinted
      `rgba(0,0,0,0.05)` (stripe utility on the table + odd-row
      selector, e.g. `[&>tbody>tr:nth-child(odd)]:bg-black/5` or a
      small CSS rule).
- [ ] Row data + content: 7 rows (4 unique + 3 duplicates of rows 2–4,
      or 4 unique — same KIND either way): 4-digit ids, blue `#007bff`
      no-underline name links, occupation + `#b3b3b3` block blurb,
      +CC phones, school names, plain blue "Details" link in column 7
      (NO `.more` styling — the source styles it nowhere).
- [ ] Checkbox component: visually hidden native input + 20×20px /
      radius 4px / 2px `#ccc` indicator (div or span); hover/focus
      border `#007bff`; checked = `#007bff` fill + WHITE checkmark
      (lucide `Check` or inline SVG — NEVER copy the icomoon font);
      all row checkboxes + header select-all start UNCHECKED.
- [ ] iOS switch component: label wraps hidden native checkbox +
      32×20px / radius 16px / white track / 2px `#ddd` border indicator;
      OFF = white pill + 16px knob (white, `shadow-[0_0_2px_#aaa,0_2px_5px_#999]`)
      on the LEFT; ON = green `#4cd964` track (the source uses a 10px
      solid green border trick — reproduce the VISUAL: green track + knob
      right) with knob slid RIGHT; ~0.3s transition; `margin: 0 10px`
      between switch and name link; vertically centered with the link
      (`flex items-center`, `pl-0` on the Name td). Initial states: rows
      1/2/5/6 ON, 3/4/7 OFF (or same KIND of mixed distribution).
- [ ] State wiring (React, NOT the source's snippet.js): `checked`
      state for the 7 row checkboxes + the header select-all; select-all
      change → set all row checkboxes to its value; row checkbox change →
      toggle only itself (header box does NOT auto-sync from row state,
      per the source JS); separate per-row switch state (independent of
      checkboxes). NO `.active` row class styling anywhere (the source
      styles that class never).
- [ ] Footer: minimal "Made with Component Dock" attribution linking
      `https://www.componentdock.com/`. ZERO ColorLib references in app
      files (comments included) — token notes only.
- [ ] Tests (TDD, colocated `*.test.tsx`, scenario-style `it` blocks
      mirroring the spec's Gherkin): shell/heading render (white bg,
      dark h2), header casing/7-column layout/empty 7th header, 7 rows
      + demo data, sub-blurb, plain blue link colors (name + Details,
      no uppercase), checkbox visual states (unchecked border / checked
      blue fill + check icon), select-all toggles all / row toggles
      independently / header does not auto-sync, switch initial states +
      toggle per row (independent), odd-row tint, NO active-row styling
      asserted, responsive wrapper, footer link, accessibility semantics
      (labels, scope="col", keyboard reach). 100% coverage via
      `scripts/verify-app.sh cellswitch`.
- [ ] PR `feat/template-cellswitch` → squash-merge; description must cite
      source slug `css-table-17`, the `bootstrap/` preview path, tokens,
      and the signature (iOS green `#4cd964` switches in the Name column).
