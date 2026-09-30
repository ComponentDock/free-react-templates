# Gridline (ColorLib Css Table 11) — Design Notes

> Replication research for **Gridline** (NEW name) — recreation of ColorLib
> **Css Table 11** (slug `css-table-11`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 11" (TEMPLATES.md line 2870; section "## Table
  (25)" at line 2868 — first item in the section). Slug `css-table-11`
  appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-11/
  (page title: "CSS Table V11 - Free Responsive Table Template 2026 -
  Colorlib").
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-11/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-11/**
  (HTTP 200, 3,525 bytes, `<title>Table #1</title>`). The `bootstrap/`
  path segment is discoverable from the ColorLib template page's own links
  (`preview.colorlib.com/theme/bootstrap/css-table-11/` + the download zip
  `preview.colorlib.com/downloads/free/css-table-11.zip`).
- **Preview CSS:** `css/style.css?v=7705366a` (8,985 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing else.
  No framework, no build step." It reverts Bootstrap-reboot base styles
  (`all: revert` on html/body/div/…/table elements), then styles from
  browser defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted
  woff2), `.cl-container` (Bootstrap-like responsive container 540/720/
  960/1140px), `.cl-table` + `.cl-table-responsive`, `.content`
  (7rem padding), `.custom-table` (borderless header, `min-width: 900px`,
  `#777`/300 body cells), `.control` / `.control__indicator` (custom
  checkbox), print rules.
- **Source scripts:** `js/snippet.js` (select-all checkbox behavior,
  class `js-check-all`) — REIMPLEMENT in React state; no jQuery in the
  source at all.
- **Icons:** icomoon glyph font (`@font-face icomoon`, checkmark glyph
  `content: '\e5ca'` on `.control__indicator:after`) — REPLACE with
  lucide-react `Check` (or a CSS-drawn check); do not ship icon fonts.
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400; 500 for the h2) in `index.html`.
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.
- **Naming check:** "gridline" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30). Note: the string `gridline`
  appears incidentally as a Tailwind token name (`--color-gridline:
  #e6e6e6`) inside `apps/planner` and `apps/chronogrid` — that is a
  per-app `@theme` token, NOT a folder/spec collision; the workspace name
  `gridline` is free.

## Screenshot analysis (`css-table-11.jpg`, 2026-09-30)

(AVIF 1200×972 served from the .jpg URL; visually analyzed.)

Minimal, utilitarian data-table demo on a white page:

- **Page:** pure white, no navbar/footer/imagery in the source; generous
  vertical whitespace (~7rem top/bottom) around a centered container.
- **Heading:** small dark label "Table #1" at the top-left of the
  container (≈20px, medium weight, near-black), clearly separated from the
  table by a wide gap (~3rem).
- **Table:** one wide data table; columns read: `[checkbox] Order Name
  Occupation Contact Education`. Header labels are DARK (near-black,
  default weight) and the header row has NO visible borders (no rule above
  or below).
- **Rows:** 4 data rows; row text is LIGHT GRAY and light-weight (the
  signature look — `#777` at font-weight 300); thin light-gray horizontal
  separators (`#dee2e6`) between rows; no vertical borders; comfortable
  cell padding.
- **Checkboxes:** custom rounded-square checkboxes (~20px, radius 4px,
  2px gray outline when unchecked). The screenshot shows ONE row checked:
  solid Bootstrap-blue fill with a white check (row "4616 / Matthew
  Wasil"). The header checkbox (select-all) is shown unchecked.
- **Overall aesthetic:** clean, spare, developer-demo feel — the table IS
  the page. Matches the live preview exactly.

## CSS token reference (from the live preview styles)

```
Font .............. "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif
                    (Google Fonts 300/400; body 16px/400/1.5)
Page background ... #fff (body)
Ink / heading .... #212529 (body color; h2 20px/500, lh 1.2)
Table body text .. #777, font-weight 300 (.custom-table tbody th/td)
Row separators ... #dee2e6 (th/td border-top 1px solid; NO vertical borders)
Header row ....... borderless (.custom-table thead tr/th: border-top none,
                    border-bottom none !important); labels inherit #212529
Accent blue ...... #007bff (Bootstrap primary — ONLY accent: checkbox
                    hover/focus border + checked fill)
Checkbox ......... 20x20px, border-radius 4px, border 2px solid #ccc,
                    transparent bg (.control__indicator; native input
                    hidden: absolute, z-index -1, opacity 0)
  hover/focus .... border 2px solid #007bff
  checked ........ border+bg #007bff, white checkmark (icomoon \e5ca → lucide Check)
  disabled ....... bg #e6e6e6 @ 0.6 opacity, border #ccc
                    (checked+disabled: #007bff @ 0.2 opacity)
Container ......... max-width 540px @576 · 720px @768 · 960px @992 ·
                    1140px @1200; 15px side padding; auto margins
Table ............ width 100%, min-width 900px (.custom-table);
                    cell padding 0.75rem, vertical-align top;
                    border-collapse collapse
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
      <h2 class="cl-mb-5">Table #1</h2>       <!-- 20px/500, 3rem gap -->
      <div class="cl-table-responsive">       <!-- overflow-x: auto -->
        <table class="cl-table custom-table"> <!-- min-width: 900px -->
          <thead>
            <tr>
              <th scope="col">
                <label class="control control--checkbox">
                  <input type="checkbox" class="js-check-all"/>
                  <div class="control__indicator"></div>
                </label>
              </th>
              <th scope="col">Order</th>
              <th scope="col">Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Contact</th>
              <th scope="col">Education</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <label class="control control--checkbox">
                  <input type="checkbox"/>
                  <div class="control__indicator"></div>
                </label>
              </th>
              <td>1392</td><td>James Yates</td><td>Web Designer</td>
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
  <script src="js/snippet.js"></script>       <!-- check-all behavior -->
</body>
```

## Section-by-section fidelity notes

1. **Page shell** — white bg, Roboto everywhere, `.content` = `7rem 0`
   padding, `.cl-container` = centered responsive container (1140px
   desktop / 15px gutters; 540/720/960 at 576/768/992 breakpoints). In
   Tailwind: `bg-white`, `py-28` (~7rem), `mx-auto max-w-[1140px]
   px-[15px]` with responsive `max-w` steps (or a shared container
   pattern from `packages/ui` if one exists).
2. **Heading** — single h2 "Table #1" (paraphrase OK, keep a short
   table-ish label), 20px / weight 500 / `#212529`, `mb-12` (3rem).
3. **Table wrapper** — `overflow-x-auto` div around the table
   (`min-w-[900px]` on the table). Verify horizontal scroll on narrow
   viewports.
4. **Data table** — real `<table>` semantics (`thead`/`tbody`,
   `th[scope=col]` headers, `th[scope=row]` row headers). Header row:
   borderless, labels `#212529` default weight. Body cells: `#777`,
   `font-weight: 300`, `p-3` (0.75rem), `align-top`; 1px `#dee2e6`
   `border-t` per cell (no vertical borders). Columns: select-all
   checkbox · Order · Name · Occupation · Contact · Education.
   Demo rows: 4 rows of same-kind data (4-digit orders, names,
   design/dev occupations, +CC phones, schools) — paraphrase strings
   freely.
5. **Custom checkboxes** — hide the native input (absolute, opacity 0),
   render a 20×20 indicator: `rounded` (4px), `border-2 border-[#ccc]`,
   transparent → hover/focus-visible `border-[#007bff]` → checked
   `bg-[#007bff] border-[#007bff]` + white lucide `Check` (size ~14px,
   `stroke-[3]`) → disabled `bg-[#e6e6e6]/60 border-[#ccc]`
   (checked+disabled `bg-[#007bff]/20`). Manage state in React
   (`useState` for header-all + per-row flags); header checkbox toggles
   all rows; rows toggle independently.
6. **Footer attribution** — the source has NO footer; monorepo rule
   mandates a Component Dock link. Add a minimal centered line under the
   table (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) styled quietly (small, muted
   `#777`). Zero ColorLib references anywhere in app files.

## Replacement / adaptation summary (source → React)

| Source | Recreation |
|--------|-----------|
| icomoon `\e5ca` checkmark | lucide-react `Check` (or CSS-drawn check) |
| `js/snippet.js` check-all | React state (header-all + per-row flags) |
| Self-hosted Roboto woff2 | Google Fonts `<link>` (300/400/500) |
| Hand-rolled `.cl-*` CSS | Tailwind utilities + `@theme` tokens (`--color-ink: #212529`, `--color-muted: #777`, `--color-line: #dee2e6`, `--color-accent: #007bff`, `--color-surface: #fff`) |
| No footer | Minimal Component Dock attribution line (monorepo rule) |
| ColorLib provenance | Lives ONLY in this spec + TEMPLATES.md + PR — never in app files |
