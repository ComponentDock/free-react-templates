# Gridkit (ColorLib Table 01) — Design Notes

> Replication research for **Gridkit** (NEW name) — recreation of ColorLib
> **Table 01** (slug `table-01`). Research done 2026-09-30 by the prep
> stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Table 01" (TEMPLATES.md line 2884; section
  "## Table (25)" at line 2868). Slug `table-01` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/table-01/
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-01/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-01/**
  (HTTP 200, 1,924 bytes, `<title>Table 01</title>`). The `bootstrap/`
  path segment is the same quirk as css-table-11/12 (Gridline/Rowglow).
  Note: the download link `https://preview.colorlib.com/downloads/free/table-01.zip`
  is referenced on the ColorLib template page.
- **Preview CSS:** `css/style.css?v=0efe9947` (7,469 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing else.
  No framework, no build step." It reverts Bootstrap-reboot base styles
  (`all: revert` on html/body/div/…/table elements), then styles from
  browser defaults: reboot block, `@font-face` Roboto 400/700 (self-hosted
  woff2 — fallback only; never used by the final cascade), `.cl-container`
  (Bootstrap-like responsive container 540/720/960/1140px), `.cl-table`
  (base + final override: white bg, `min-width: 1000px`), `.ftco-section`
  (7em vertical padding), `.heading-section` (28px black h2), `.table-wrap`
  (`overflow-x: scroll`), `.thead-primary` (bright-blue header — the
  signature), `.cl-mb-5` / `.cl-text-center` / `.cl-justify-content-center`
  (3rem gap, centered heading), plus print rules.
- **Source scripts:** NONE — the page has no JavaScript at all.
- **Icons:** NONE — no icon font or icon usage anywhere in the source.
- **Fonts:** **Poppins** — the final `body` rule sets `font-family:
  "Poppins", Arial, sans-serif; font-size: 16px; line-height: 1.8;
  font-weight: normal`. Load a Google Fonts `<link>` (weight 400) in
  `index.html`. (The self-hosted Roboto @font-face rules are unreachable
  fallbacks — ignore them.)
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.
- **Naming check:** "gridkit" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30).

## Live DOM skeleton (verbatim structure)

```html
<body>
<section class="ftco-section">                      <!-- 7em 0 padding -->
  <div class="cl-container">                        <!-- Bootstrap-like container -->
    <div class="cl-row cl-justify-content-center">
      <div class="cl-col-md-6 cl-text-center cl-mb-5">
        <h2 class="heading-section">Table #01</h2>  <!-- 28px, #000, weight 400 -->
      </div>
    </div>
    <div class="cl-row">
      <div class="cl-col-md-12">
        <div class="table-wrap">                    <!-- overflow-x: scroll -->
          <table class="cl-table">                  <!-- min-width: 1000px, bg #fff -->
            <thead class="thead-primary">           <!-- bg #1089ff -->
              <tr>
                <th>#</th><th>First Name</th>
                <th>Last Name</th><th>Email Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>              <!-- bold row number -->
                <td>Mark</td><td>Otto</td>
                <td>markotto@email.com</td>
              </tr>
              <!-- rows 2–5: Jacob Thornton / Larry the Bird / John Doe / Gary Bird -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
```

No navbar, no hero, no cards, no forms, no footer — the ENTIRE source page
is one section: heading + table. The monorepo-mandated Component Dock
attribution footer is the only addition (same as Gridline/Rowglow).

## Design tokens (from `css/style.css?v=0efe9947` — canonical)

| Token | Value | CSS source |
| --- | --- | --- |
| Body font | `"Poppins", Arial, sans-serif` 16px / 1.8 / 400 | final `body` rule |
| Body color | `gray` (table content overrides to `#212529` via `.cl-table`) | `body`; `.cl-table { color: #212529 }` |
| Page background | `#f8f9fd` — light blue-gray | final `body` rule |
| h2 | Poppins, **font-weight 400**, line-height 1.5, color `#000` | explicit rule overrides reboot's 500 (same gotcha as css-table-12) |
| `.heading-section` | font-size **28px**, color `#000` | `.heading-section` |
| `.ftco-section` | `padding: 7em 0` | |
| `.cl-mb-5` | `margin-bottom: 3rem !important` | heading→table gap |
| `.cl-container` | 540px @576 · 720px @768 · 960px @992 · 1140px @1200; 15px side padding | Bootstrap-like |
| `.table-wrap` | `overflow-x: scroll` | |
| `.cl-table` (final) | `min-width: 1000px; width: 100%; background: #fff` | base rule also sets `color: #212529`, `margin-bottom: 1rem`, `border-collapse: collapse` (reboot) |
| `.thead-primary` | `background: #1089ff` — bright blue | the signature |
| thead th | `border: none; padding: 20px 30px; font-size: 14px; color: #fff`; **bold** — UA default, snippet never overrides th font-weight (author `font-bold` for determinism) | |
| tbody tr | `margin-bottom: 10px` — **dead CSS** (table rows ignore margins); do NOT reproduce | |
| tbody th/td | `border: none; padding: 20px 30px; border-bottom: 3px solid #f8f9fd; font-size: 14px`; color inherits `#212529` | dividers are the PAGE color on the white table |
| tbody th (row #) | bold at UA default (never reverted), `scope="row"` in the source | |
| Buttons/links/icons | none | zero interactive controls |
| Print rules | thead `table-header-group`, tr `page-break-inside: avoid`, body/container `min-width: 992px` | minor; not required for parity |

## Screenshot analysis (table-01.jpg, 1200×972, analyzed 2026-09-30)

The screenshot (served as AVIF from the ColorLib CDN) matches the live
preview exactly: a browser-chrome mockup on a white surround showing a
light blue-gray page (`#f8f9fd`), a centered dark "Table #01" heading in
a regular-weight sans (Poppins), and one table — bright-blue header bar
(`#1089ff`) with white bold column labels (#, First Name, Last Name,
Email Address), then five white rows with dark text and generous
(~50px) row heights, bold row numbers in the first column, and very
subtle light dividers between rows. No nav, no footer, no imagery, no
buttons visible. The overall aesthetic is the canonical Bootstrap-sample-
data look: clean, airy, single-purpose.

## Section-by-section fidelity notes

1. **Page shell** — `bg #f8f9fd`, Poppins 400, body line-height 1.8,
   color gray. Content area padded `7em 0`. Container capped at 1140px
   (desktop) with 15px gutters; Tailwind max-width steps should mirror
   540/720/960/1140.
2. **Heading block** — centered h2 "Table #01" at 28px / weight 400 /
   `#000`, 3rem margin-bottom above the table. Tailwind preflight resets
   h2 size/weight — set `text-[28px] font-normal` explicitly.
3. **Responsive table** — wrapper `overflow-x-auto`; table
   `min-w-[1000px] w-full bg-surface border-collapse`. Below 1000px the
   table scrolls inside the wrapper; layout stays intact.
4. **Blue header row** — `thead` `bg-header-blue (#1089ff)`;
   `th` cells `font-bold text-white text-sm px-[30px] py-5 border-none`.
   Tailwind preflight has NO th/td rules — author the bold explicitly.
5. **Body rows** — 5 rows, each: `<th scope="row" font-bold>` number
   (1–5) + 3 `<td>` (first, last, email). Cells `text-sm text-ink
   px-[30px] py-5 border-b-[3px] border-page` — the 3px `#f8f9fd`
   bottom border on the white surface is what separates rows. NO
   vertical borders, NO zebra striping, NO outer frame. Do NOT add
   hover effects — the source has none.
6. **Content** — same KIND of data: sequential numbers, first/last
   names, emails (source rows: Mark Otto / Jacob Thornton / Larry the
   Bird / John Doe / Gary Bird). Paraphrase allowed, structure kept.
7. **Attribution footer** — source has none; add the monorepo-mandated
   minimal line linking https://www.componentdock.com/ ("Component
   Dock"). Zero ColorLib references anywhere in the app (comments
   included).

## Gotchas for implementers

- The preview is at `.../theme/bootstrap/table-01/`, NOT
  `.../theme/table-01/` (the slug-only URL 404s).
- h2 font-weight is **400** (explicit rule), not the reboot's 500 and
  not bold — same trap that hit css-table-12/Rowglow.
- `th` bold comes from the UA default (the snippet never reverts th
  font-weight); author `font-bold` for deterministic rendering in both
  thead and row-number cells.
- The source's `tbody tr { margin-bottom: 10px }` is dead CSS — table
  rows ignore margins. Do not reproduce it as spacing.
- Row dividers are `3px solid #f8f9fd` (page color) on a white table —
  not gray `#dee2e6` lines like css-table-11.
- No JavaScript, no icons, no images, no interactive states anywhere —
  keep the recreation purely presentational.
