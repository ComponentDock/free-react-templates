# Rowdeck (ColorLib Table 02) — Design Notes

> Replication research for **Rowdeck** (NEW name) — recreation of ColorLib
> **Table 02** (slug `table-02`). Research done 2026-09-30 by the prep
> stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Table 02" (TEMPLATES.md line 2885; section
  "## Table (25)" at line 2868). Slug `table-02` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/table-02/
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-02/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-02/**
  (HTTP 200, 6,199 bytes, `<title>Table 02</title>`). The `bootstrap/`
  path segment is the same quirk as css-table-11/12/16 and table-01
  (Gridline/Rowglow/Nightgrid/Gridkit).
- **Preview CSS:** `css/style.css?v=8362951b` (9,178 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing
  else. No framework, no build step." It reverts Bootstrap-reboot base
  styles (`all: revert` on common elements), then styles from browser
  defaults: reboot block, `@font-face` Roboto 400/700 (self-hosted woff2
  — fallback only; never used by the final cascade), `.cl-container`
  (Bootstrap-like responsive container 540/720/960/1140px), `.cl-table`
  (base + final override: `border-collapse: separate; border-spacing: 0
  10px; min-width: 1000px` — the row-card signature), `.cl-thead-dark`
  (dark charcoal header), `.cl-alert` (row-card look on each tr:
  radius 0.25rem, transparent 1px border), `.cl-close` (dismiss ×
  styling), `.ftco-section` (7em vertical padding), `.heading-section`
  (28px black h2), `.table-wrap` (`overflow-x: scroll`), `.cl-mb-5` /
  `.cl-text-center` / `.cl-justify-content-center` (3rem gap, centered
  heading), plus print rules.
- **Source scripts:** NONE — the preview page loads ZERO `<script>` tags
  (verified 2026-09-30 on the live DOM). The row dismiss links carry
  Bootstrap `data-dismiss="alert"` + `role="alert"` markup but are
  **inert** in the preview (no Bootstrap JS). Recreation: make ×
  functional (state-driven row removal) + empty-state line — the
  evident markup intent, adapted to monorepo conventions.
- **Icons:** the source inlines Font Awesome `fa-close` as an inline
  SVG (`fill: currentColor`, 1em height; the inner span overrides to
  `font-size: 12px; color: #dc3545`). Recreation: `lucide-react` `X`,
  `#dc3545`, ~12px. No icon font to install.
- **Fonts:** **Poppins** — the final `body` rule sets `font-family:
  "Poppins", Arial, sans-serif; font-size: 16px; line-height: 1.8;
  font-weight: normal`. Load a Google Fonts `<link>` (weight 400) in
  `index.html`. (The self-hosted Roboto @font-face rules are unreachable
  fallbacks — ignore them.)
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.
- **Naming check:** "rowdeck" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep clean).

## Live DOM skeleton (verbatim structure)

```html
<body>
<section class="ftco-section">                      <!-- 7em 0 padding -->
  <div class="cl-container">                        <!-- Bootstrap-like container -->
    <div class="cl-row cl-justify-content-center">
      <div class="cl-col-md-6 cl-text-center cl-mb-5">
        <h2 class="heading-section">Table #02</h2>  <!-- 28px, #000, weight 400 -->
      </div>
    </div>
    <div class="cl-row">
      <div class="cl-col-md-12">
        <div class="table-wrap">                    <!-- overflow-x: scroll -->
          <table class="cl-table">                  <!-- min-width 1000px,
                                                       border-collapse: separate,
                                                       border-spacing: 0 10px -->
            <thead class="cl-thead-dark">           <!-- bg #343a40 -->
              <tr>
                <th>ID no.</th><th>First Name</th>
                <th>Last Name</th><th>Email</th><th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cl-alert" role="alert">    <!-- radius .25rem, shadow -->
                <th scope="row">001</th>            <!-- bold row ID -->
                <td>Mark</td><td>Otto</td>
                <td>markotto@email.com</td>
                <td><a class="cl-close" aria-label="Close">
                  <!-- inlined fa-close SVG; inner span 12px #dc3545 -->
                </a></td>
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

No navbar, no hero, no cards, no forms, no footer — the ENTIRE source
page is one section: heading + dismissible-row table. The monorepo-mandated
Component Dock attribution footer and the functional-dismiss/empty-state
behavior are the only additions (same footer rule as Gridline/Rowglow/
Nightgrid/Gridkit).

## Design tokens (from `css/style.css?v=8362951b` — canonical)

| Token | Value | CSS source |
| --- | --- | --- |
| Body font | `"Poppins", Arial, sans-serif` 16px / 1.8 / 400 | final `body` rule |
| Body color | `gray` (table content overrides to `#212529` via `.cl-table`) | `body`; `.cl-table { color: #212529 }` |
| Page background | `#f8f9fd` — light blue-gray | final `body` rule |
| h2 | Poppins, **font-weight 400**, line-height 1.5, color `#000` | explicit rule overrides reboot's 500 (same gotcha as css-table-12 / table-01) |
| `.heading-section` | font-size **28px**, color `#000` | `.heading-section` |
| `.ftco-section` | `padding: 7em 0` | |
| `.cl-mb-5` | `margin-bottom: 3rem !important` | heading→table gap |
| `.cl-container` | 540px @576 · 720px @768 · 960px @992 · 1140px @1200; 15px side padding | Bootstrap-like |
| `.table-wrap` | `overflow-x: scroll` | |
| `.cl-table` (final) | `min-width: 1000px; width: 100%; border-collapse: separate; border-spacing: 0 10px` | base rule also sets `color: #212529`, `margin-bottom: 1rem`. **THE signature: 10px vertical gaps between rows via border-spacing** |
| `.cl-thead-dark th` | `color: #fff; background-color: #343a40; border-color: #454d55` | dark charcoal header bar |
| thead th (final) | `border: none; padding: 30px; font-size: 14px; color: #fff`; **bold** — UA default, snippet never overrides th font-weight (author `font-bold` for determinism) | |
| tbody tr | `margin-bottom: 10px` — **dead CSS** (tr margins don't apply; the real gap is border-spacing); do NOT reproduce | |
| tbody tr shadow | `box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29)` | per-row card shadow (only renders with border-separate) |
| `.cl-alert` (on each tr) | `position: relative; padding: .75rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent; border-radius: 0.25rem` | row-card radius + transparent border (padding/margin on tr are dead; keep radius + border) |
| tbody th/td | `border: none; padding: 30px; font-size: 14px; background: #fff` | white cells on `#f8f9fd` = floating cards |
| tbody th (row ID) | bold at UA default (never reverted), `scope="row"` in the source | IDs 001–005 |
| `.cl-close` | `float: right; font-size: 1.5rem; font-weight: 700; color: #000; text-shadow: 0 1px 0 #fff; opacity: .5`; hover/focus `opacity: .75` | dismiss button chrome |
| Close icon inner span | `font-size: 12px; color: #dc3545` | the × itself — Bootstrap danger red |
| Link color (global) | `#1089ff`, transition `.3s all ease` | no plain links visible in the snippet; token for parity |
| Columns | 5: `ID no.` · `First Name` · `Last Name` · `Email` · empty actions | |
| Buttons/JS besides × | none | source preview is inert; recreation makes × functional |

## Screenshot analysis (table-02.jpg, AVIF data 1200×972, analyzed 2026-09-30)

The screenshot (served as AVIF from the ColorLib CDN; converted for
analysis) matches the live preview exactly: a browser-chrome mockup on a
white surround showing a light blue-gray page (`#f8f9fd`), a centered
dark "Table #02" heading in regular-weight Poppins, and one table — a
**dark charcoal header bar** (`#343a40`) with white bold column labels
(ID no., First Name, Last Name, Email), then **five white row cards
floating on the page background with visible ~10px gaps between them**,
each row showing dark 14px text (bold ID like "001", names, email) and
a **small red ×** at the far right edge. Rows have a very subtle
shadow giving the card-on-canvas look; corners appear slightly rounded.
No nav, no footer, no imagery, no other buttons visible. The aesthetic:
the canonical Bootstrap-sample-data table reimagined as floating white
cards on a cool light canvas — clean, airy, single-purpose, with the
dismissible-row affordance as the only interaction.

## Section-by-section fidelity notes

1. **Page shell** — `bg #f8f9fd`, Poppins 400, body line-height 1.8,
   color gray. Content area padded `7em 0`. Container capped at 1140px
   (desktop) with 15px gutters; Tailwind max-width steps should mirror
   540/720/960/1140.
2. **Heading block** — centered h2 "Table #02" at 28px / weight 400 /
   `#000`, 3rem margin-bottom above the table. Tailwind preflight resets
   h2 size/weight — set `text-[28px] font-normal` explicitly.
3. **Responsive table wrapper** — `overflow-x-auto`; table
   `min-w-[1000px] w-full border-separate border-spacing-y-[10px]`.
   Below 1000px the table scrolls inside the wrapper; layout stays
   intact. NEVER `border-collapse` — it destroys the gaps and shadows.
4. **Charcoal header bar** — `thead` `bg-header-dark (#343a40)`;
   `th` cells `font-bold text-white text-sm px-[30px] py-[30px]
   border-none`. Five columns: ID no. · First Name · Last Name · Email ·
   empty actions. Tailwind preflight has NO th/td rules — author the
   bold explicitly.
5. **Floating white row cards** — 5 rows, each: `<tr>` with
   `bg-surface` cells, per-row `[box-shadow:0_5px_12px_-12px_rgba(0,0,0,0.29)]`
   + `rounded` (0.25rem) + `border border-transparent`; first cell
   `<th scope="row" className="font-bold">` ID (001–005) + 3 `<td>`s
   (first, last, email) + dismiss-button cell. Cells `text-sm text-ink
   px-[30px] py-[30px] border-none`. The 10px gaps come from
   border-spacing, NOT margins. NO borders, NO zebra striping, NO outer
   frame. Do NOT add hover effects — the source has none.
6. **Dismiss button** — per row, right-aligned: lucide `X` at ~12px
   `#dc3545`, real `<button aria-label="Close">`, opacity 0.5 at rest /
   0.75 on hover/focus (mirroring `.cl-close`). Clicking removes the
   row (React state — the source preview is inert but the markup intent
   is Bootstrap alert dismissal). When zero rows remain: minimal muted
   empty-state line (no imagery/CTAs — monorepo convention; source has
   none). Do NOT put `role="alert"` on rows (a11y anti-pattern on tr).
7. **Content** — same KIND of data: zero-padded IDs 001–005 +
   first/last names + emails (source rows: Mark Otto / Jacob Thornton /
   Larry the Bird / John Doe / Gary Bird). Paraphrase allowed,
   structure kept.
8. **Attribution footer** — source has none; add the monorepo-mandated
   minimal line linking https://www.componentdock.com/ ("Component
   Dock"). Zero ColorLib references anywhere in the app (comments
   included).

## Gotchas for implementers

- The preview is at `.../theme/bootstrap/table-02/`, NOT
  `.../theme/table-02/` (the slug-only URL 404s).
- h2 font-weight is **400** (explicit rule), not the reboot's 500 and
  not bold — same trap that hit css-table-12/Rowglow/table-01/Gridkit.
- `th` bold comes from the UA default (the snippet never reverts th
  font-weight); author `font-bold` for deterministic rendering in both
  thead and row-ID cells (Tailwind preflight has NO th/td rules).
- **`border-collapse: separate` is load-bearing** — the 10px row gaps
  (border-spacing) AND the per-row shadows only work with it. Tailwind:
  `border-separate border-spacing-y-[10px]`.
- The source's `tbody tr { margin-bottom: 10px }` is dead CSS (tr
  margins don't apply) — the real gap is border-spacing; don't double
  up or reproduce the margin.
- Row radius (0.25rem) + transparent 1px border come from the
  `.cl-alert` class on each tr — keep them for the card look.
- The dismiss × renders at 12px `#dc3545` (inner span override), not
  the `.cl-close` 1.5rem black default — the inner override wins.
- `role="alert"` on rows is Bootstrap alert markup — do NOT reproduce
  it on `<tr>`; the functional button + aria-label carry the
  interaction and accessibility.
- No JavaScript, no images, no other interactive states anywhere — the
  recreation is presentational except for the state-driven dismiss.
