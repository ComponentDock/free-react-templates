# Rowglow (ColorLib Css Table 12) — Design Notes

> Replication research for **Rowglow** (NEW name) — recreation of ColorLib
> **Css Table 12** (slug `css-table-12`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 12" (TEMPLATES.md line 2871; section
  "## Table (25)" at line 2868). Slug `css-table-12` appears exactly
  ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-12/
  (page title: "CSS Table V12 - Free Responsive Table Template 2026 -
  Colorlib").
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-12/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-12/**
  (HTTP 200, 2,610 bytes, `<title>Table #2</title>`). The `bootstrap/`
  path segment is the same quirk as css-table-11 (Gridline).
- **Preview CSS:** `css/style.css?v=66bf8830` (7,712 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing else.
  No framework, no build step." It reverts Bootstrap-reboot base styles
  (`all: revert` on html/body/div/…/table elements), then styles from
  browser defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted
  woff2), `.cl-container` (Bootstrap-like responsive container 540/720/
  960/1140px), `.cl-table` + `.cl-table-responsive`, `.content`
  (7rem padding), `.custom-table` (borderless header AND borderless body
  cells, `min-width: 900px`, gray page bg, white row-hover), print rules.
- **Source scripts:** NONE — the page has no JavaScript at all.
- **Icons:** NONE — no icon font or icon usage anywhere in the source.
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400) in `index.html`. Body renders at
  `font-weight: 300` (light signature look).
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.
- **Naming check:** "rowglow" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30).

## Screenshot analysis (`css-table-12.jpg`, 2026-09-30)

(AVIF 1200×972 served from the .jpg URL; visually analyzed.)

Minimal, airy data-table demo on a light-gray page:

- **Page:** light gray (#efefef), no navbar/footer/imagery in the source;
  generous vertical whitespace (~7rem top/bottom) around a centered
  container.
- **Heading:** small dark label "Table #2" at the top-left of the
  container (≈20px, light weight, near-black), separated from the table
  by a wide gap (~3rem).
- **Table:** one wide data table; columns read: `Order Name Occupation
  Contact Education`. Header labels are DARK (near-black, default weight)
  and the header row has NO visible borders (no rule above or below).
- **Rows:** 4 data rows; row text is LIGHT GRAY and light-weight
  (`#777` at font-weight 300); NO row separators at all — rows float on
  the gray background, spaced by vertical cell padding. No vertical
  borders.
- **Occupation subtext:** every Occupation cell has a lighter gray
  one-liner under the job title ("Far far away, behind the word
  mountains") at 80% size — visible in the screenshot as faint gray text.
- **Row hover:** the screenshot captures the third row ("9841 / Sampson
  Murphy") in the HOVERED state — its background is solid white (#fff),
  which makes the row pop against the gray page. This white row-glow is
  the template's signature interaction (pure CSS, .3s ease).
- **Overall aesthetic:** clean, spare, developer-demo feel — the table IS
  the page. Matches the live preview exactly.

## CSS token reference (from the live preview styles)

```
Font .............. "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
                    (Google Fonts 300/400; BODY FONT-WEIGHT 300 — light look)
Page background ... #efefef (body — LIGHT GRAY, differs from css-table-11's #fff)
Ink / heading .... #212529 (h2 20px, lh 1.2, weight 300 inherited)
Table body text .. #777, font-weight 300 (.custom-table tbody th/td)
Subtext small .... #b3b3b3, font-weight 300, font-size 80%, display block
                    (.custom-table tbody ... small, .cl-d-block)
Row separators ... NONE (.custom-table tbody th/td: border: none — rows
                    separated by whitespace only)
Header row ....... borderless (.custom-table thead tr/th: border-top none,
                    border-bottom none !important); labels inherit #212529
Row hover glow ... background #fff, transition .3s all ease
                    (.custom-table tbody tr:hover, tr:focus — THE signature)
Accent colors .... none (no blue, no buttons, no links in the source)
Container ......... max-width 540px @576 · 720px @768 · 960px @992 ·
                    1140px @1200; 15px side padding; auto margins
Table ............ width 100%, min-width 900px (.custom-table);
                    cell padding 0.75rem horizontal, 20px vertical
                    (vertical wins — set after the 0.75rem shorthand);
                    vertical-align top; border-collapse collapse
Responsive ........ .cl-table-responsive: display block, overflow-x auto
                    (horizontal scroll below 900px)
Content area ...... padding 7rem 0 (.content)
Heading margin .... margin-bottom 3rem (.cl-mb-5, !important)
```

## DOM skeleton (live preview, 2026-09-30)

```html
<body>
  <div class="content">                       <!-- 7rem vertical padding -->
    <div class="cl-container">                <!-- centered, 1140px max -->
      <h2 class="cl-mb-5">Table #2</h2>       <!-- 20px/300, 3rem gap -->
      <div class="cl-table-responsive">       <!-- overflow-x: auto -->
        <table class="cl-table custom-table"> <!-- min-width: 900px -->
          <thead>
            <tr>
              <th scope="col">Order</th>
              <th scope="col">Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Contact</th>
              <th scope="col">Education</th>
            </tr>
          </thead>
          <tbody>
            <tr>                              <!-- source: stray scope="row" attr -->
              <td>1392</td><td>James Yates</td>
              <td>Web Designer
                <small class="cl-d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+63 983 0962 971</td><td>NY University</td>
            </tr>
            <!-- 3 more rows: 4616 Matthew Wasil / Graphic Designer /
                 +02 020 3994 929 / London College
                 9841 Sampson Murphy / Mobile Dev / +01 352 1125 0192 /
                 Senior High
                 9548 Gaspar Semenov / Illustrator / +92 020 3994 929 /
                 College -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- NO scripts, NO footer in source -->
</body>
```

## Section-by-section fidelity notes

1. **Page shell** — gray bg `#efefef`, Roboto everywhere at weight 300,
   `.content` = `7rem 0` padding, `.cl-container` = centered responsive
   container (1140px desktop / 15px gutters; 540/720/960 at 576/768/992
   breakpoints). In Tailwind: `bg-[#efefef]`, `py-28` (~7rem),
   `mx-auto max-w-[1140px] px-[15px]` with responsive `max-w` steps (or
   a shared container pattern from `packages/ui` if one exists).
2. **Heading** — single h2 "Table #2" (paraphrase OK, keep a short
   table-ish label), 20px / weight 300 / `#212529`, `mb-12` (3rem).
3. **Table wrapper** — `overflow-x-auto` div around the table
   (`min-w-[900px]` on the table). Verify horizontal scroll on narrow
   viewports.
4. **Data table** — real `<table>` semantics (`thead`/`tbody`,
   `th[scope=col]` headers). Header row: borderless, labels `#212529`.
   Body cells: `#777`, `font-weight: 300`, `px-3 py-5` (0.75rem /
   20px), `align-top`; **no borders at all** on body cells. Columns:
   Order · Name · Occupation · Contact · Education (NO checkbox column
   — differs from css-table-11). Demo rows: 4 rows of same-kind data
   (4-digit orders, names, design/dev occupations, +CC phones, schools)
   — paraphrase strings freely.
5. **Occupation subtext** — inside each Occupation `<td>`: a block-level
   small line (80% size, `#b3b3b3`, weight 300). Paraphrase the
   descriptor text ("Far far away, behind the word mountains" → any
   short filler phrase of the same kind).
6. **Row-hover glow** — `<tbody>` rows get
   `hover:bg-white focus:bg-white transition-colors duration-300
   ease-out` — the white row pops on the gray page. Pure CSS; no JS,
   no state. Keyboard focus (if any interactive element ever lands in a
   row) also lights the row per the source's `:focus` rule.
7. **Footer attribution** — the source has NO footer; monorepo rule
   mandates a Component Dock link. Add a minimal centered line under the
   table (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) styled quietly (small, muted
   `#777`). Zero ColorLib references anywhere in app files.

## Replacement / adaptation summary (source → React)

| Source | Recreation |
|--------|-----------|
| No JS at all | Pure React rendering; no state needed for the table itself |
| Hand-rolled `.cl-*` CSS | Tailwind utilities + `@theme` tokens (`--color-ink: #212529`, `--color-muted: #777`, `--color-subtext: #b3b3b3`, `--color-page: #efefef`, `--color-surface: #fff`) |
| CSS row-hover (`tr:hover`) | Tailwind `hover:bg-white focus:bg-white transition-colors duration-300` on `<tr>` |
| Self-hosted Roboto woff2 | Google Fonts `<link>` (300/400) |
| No footer | Minimal Component Dock attribution line (monorepo rule) |
| ColorLib provenance | Lives ONLY in this spec + TEMPLATES.md + PR — never in app files |

## Sibling comparison (css-table-11 → css-table-12)

Both are the same ColorLib table-snippet family, but Table #2 has these
deliberate differences — do NOT copy Gridline's spec values blindly:

| Aspect | css-table-11 (Gridline) | css-table-12 (Rowglow) |
|--------|------------------------|------------------------|
| Page background | `#fff` white | `#efefef` light gray |
| Body font-weight | 400 | **300** |
| Row separators | 1px `#dee2e6` top border per cell | **NONE** — borderless cells |
| Checkbox column | yes (custom checkboxes + select-all) | **NO** checkboxes at all |
| Occupation subtext | none | **yes** — `#b3b3b3` small block line |
| Row hover | none | **white `#fff` glow**, .3s ease |
| Accent blue `#007bff` | yes (checkbox states) | none |
