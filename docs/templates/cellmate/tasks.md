# Cellmate (ColorLib Css Table 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cellmate`. Recreation name: **Cellmate** (NEW
> name — the ColorLib source keeps its name "Css Table 20").
>
> Full replication research (preview DOM skeleton, CSS tokens, screenshot
> analysis, section-by-section fidelity notes) lives in `design-notes.md`
> in this folder — read it first. The OpenSpec requirements are in
> `openspec/specs/template-cellmate/spec.md`.

## Quick facts

- **ColorLib item:** "Css Table 20" (TEMPLATES.md line 2879, "## Table
  (25)" section). Slug `css-table-20` appears exactly ONCE in
  TEMPLATES.md.
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30):**
  `https://preview.colorlib.com/theme/bootstrap/css-table-20/`
  (HTTP 200, 8,943 bytes). ⚠️ The page `<title>` reads **"Table #7"**
  (STALE — copy-pasted from css-table-17/Cellswitch) but the live `<h2>`
  reads **"Table #10"** and the DOM matches the screenshot for
  css-table-20 exactly — this IS the right preview. The slug-only URL
  `https://preview.colorlib.com/theme/css-table-20/` returns **HTTP
  404** — always use the `bootstrap/` path.
- **Preview CSS:** `css/style.css?v=06d35dc4` (12,590 bytes) — single
  self-contained sheet, no framework; reverts Bootstrap reboot then
  styles from defaults; custom-checkbox component + iOS toggle switch
  component + an `@media print` A3 block (screen layout stays
  responsive). The table CARRIES `.cl-table-striped` (odd rows
  `rgba(0,0,0,0.05)`), and `.custom-table tbody th/td { border: none }`
  REMOVES the base `#dee2e6` cell borders (unlike css-table-19/Cellcrew
  which keeps them).
- **Preview JS:** `js/snippet.js?v=c35330b0` (1,103 bytes) —
  check-all group 1 (header checkbox → all checkboxes; row: null — NO
  highlight), check-all group 2 (header TOGGLE SWITCH → all switches +
  `cl-active` on every row), check-rows (each row switch toggles
  `cl-active` on its row). **CRITICAL — the highlight is SWITCH-driven:**
  `tr.cl-active { opacity: .4 }` (whole-row dim) + `.name:before` 2px
  RED `#dc3545` strike bar revealed across the name. Row checkboxes have
  ZERO highlight effect. **NO `tr:hover` rule exists** — unlike
  css-table-19/Cellcrew where hover shares the active treatment.
- **Key tokens:** Roboto (body **400**/`#212529` — cells override to
  300), **page `#fff` WHITE**, heading 20px/500 `#212529`, header
  labels **BLACK `#000` bold normal-case** borderless (SEVEN cells:
  checkbox · Order · Name · Occupation · Contact · Education · select-all
  switch), table body `#777` @ weight 300 (20px v / 0.75rem h padding),
  **borders REMOVED on tbody cells**, **zebra striping ON (odd rows
  `rgba(0,0,0,0.05)`)**, name links `#007bff` hover `#0056b3` NO
  underline, sub-blurb `#b3b3b3` @ 300 block, checkbox 20×20px radius
  4px border 2px `#ccc`, hover/focus `#007bff`, checked = `#007bff` fill
  + WHITE check (lucide Check/inline SVG — NEVER the icomoon font);
  **SIGNATURE: iOS toggle switches** — 32×20px white pill / radius 16px
  / 2px `#ddd` / 16px white knob (soft shadow) parked LEFT, checked =
  10px solid `#4cd964` green ring + knob RIGHT, ~.3s transition,
  ~0 10px horizontal margin; **SIGNATURE: switch-driven strike-out** —
  switch ON ⇔ row dimmed `opacity: .4` + RED `#dc3545` 2px strike bar on
  the name; NO row hover anywhere; container 540/720/960/1140px @576/
  768/992/1200 with 15px gutters; table `min-width: 900px` in
  `overflow-x: auto` wrapper; content `7rem 0` padding; **ZERO images**
  (no avatars, no photos — no picsum needed).
- **Sections in DOM order:** white page shell (7rem padding, centered
  container) → h2 heading "Table #10" (20px/500, dark ink, on white) →
  overflow-x-auto wrapper → data table (7 header cells / 7 body cells
  per row; 7 data rows = 4 unique with rows 5–7 repeating 2–4; odd-row
  zebra tint; initial live DOM: rows 1/2/5/6 struck (switch ON + dim +
  red strike), rows 3/4/7 normal, ALL checkboxes unchecked, header
  controls unchecked) → minimal Component Dock attribution line (source
  has no footer; monorepo rule mandates the link).
- **Interactive model (React state):** header checkbox = select-all for
  checkboxes ONLY (never touches switches/strike); header switch =
  select-all for the strike state (toggles all switches + all rows);
  row switch toggles only its own row (switch ON ⇔ struck); row
  checkbox toggles only its own box (no highlight, no header sync);
  invariant: switch checked ⇔ row struck. No hover effects on rows.
- **Naming check:** "cellmate" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content
  (verified 2026-09-30 — zero hits across all pools). Fits the sibling
  naming idiom gridline / gridspan / rowcard / rowglow / gridpane /
  nightgrid / cellswitch / cellgrid / cellcrew ("cell" = table cells;
  "mate" = switched on/off the active roster).
- **Sibling warning:** Gridline (`css-table-11`), Rowglow
  (`css-table-12`), Gridspan (`css-table-13`), Rowcard
  (`css-table-14`), Gridpane (`css-table-15`), Nightgrid
  (`css-table-16`), Cellswitch (`css-table-17` — closest: same switches
  but IN the Name column, `.active` NEVER styled, has a Details
  column), Cellgrid (`css-table-18` — dark variant), Cellcrew
  (`css-table-19` — avatars, kept borders, no zebra, checkbox-driven
  highlight WITH hover). Do NOT copy tokens across variants.

## Implementation outline (for the implementer)

1. Copy the simplest existing app as the base; rename the package to
   `@free-react-templates/cellmate`; run `npm install` at the repo root
   (lockfile registration); set `homepage` + `public/CNAME`
   (`cellmate.free.componentdock.com`); keep the `injectUiSource()` vite
   pattern.
2. `index.html`: Google Fonts `<link>` for Roboto 300/400/500.
3. `src/index.css` `@theme` tokens (see the spec's verification
   checklist): page/heading/header/muted/blurb/stripe/link/link-hover/
   checkbox/checkbox-border/switch/switch-border/strike.
4. Components: `App.tsx` (shell + heading + table + footer) →
   `DataTable.tsx` (thead + zebra tbody + rows), `ToggleSwitch.tsx`
   (the pill/knob switch — hidden checkbox input + label + custom
   indicator), `CustomCheckbox.tsx` (hidden input + 20px indicator +
   lucide Check on checked). No Navbar, no imagery.
5. State: `rows: { id, order, name, occupation, blurb, contact,
   education, switchOn, checked }[]` — implement the four interaction
   rules above + the switch ⇔ strike invariant; initial state = the live
   DOM arrangement (rows 1/2/5/6 struck) or all-off; header checkbox
   starts unchecked.
6. Strike visual: struck row `opacity-40`; name link gets a 2px
   `#dc3545` bar at its vertical center (absolute span / pseudo-element
   equivalent) when struck. NO row hover styles.
7. Footer: minimal "Component Dock" attribution link
   (https://www.componentdock.com/). Zero ColorLib references anywhere
   in the app (comments included).
8. Tests (TDD, 100% coverage): scenarios mirror the spec's Gherkin —
   shell/heading render, 7 header cells + zebra + borderless rows,
   checkbox visual states + independent select-all, switch visual states
   + header select-all + per-row toggle + invariant, no-hover, responsive
   scroll wrapper, footer attribution.
9. Verify: `scripts/verify-app.sh cellmate`; PR
   `feat/template-cellmate` — description must include source slug
   `css-table-20`, the `bootstrap/` preview path (with the stale
   `<title>Table #7</title>` caveat), the design tokens used, and what
   differs (renames; no images in this one).
