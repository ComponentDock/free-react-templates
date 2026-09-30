# Nightgrid (ColorLib Css Table 16) — Design Notes

> Replication research for **Nightgrid** (NEW name) — recreation of ColorLib
> **Css Table 16** (slug `css-table-16`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 16" (TEMPLATES.md line 2875; section
  "## Table (25)"). Slug `css-table-16` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-16/
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-16/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-16/**
  (HTTP 200, 4,251 bytes, `<title>Table #6</title>`). The `bootstrap/`
  path segment matches all sibling css-table previews — always use it.
- **Preview CSS:** `css/style.css?v=32f306b0` (9,122 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing else.
  No framework, no build step." It reverts Bootstrap-reboot base styles
  (`all: revert` on html/body/div/…/table elements), then styles from
  browser defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted
  woff2), `.cl-container` (Bootstrap-like responsive container 540/720/
  960/1140px), `.cl-table` + `.cl-table-responsive` + `.cl-table-striped`
  (odd-row tint `rgba(0,0,0,0.05)`), `.content` (7rem padding), and the
  dark-theme `.custom-table` overrides (see tokens below), print rules.
- **Source scripts:** **NONE** — the live DOM loads zero `<script>` tags
  (verified 2026-09-30). Unlike css-table-14/15 there is NO snippet.js,
  NO checkboxes, NO select-all, NO React-state machinery. The whole
  template is static HTML + CSS; the row hover is pure CSS
  (`tbody tr:hover` / `:focus`). Do NOT add checkboxes.
- **Icons:** none — no icomoon font, no glyph icons; the Details column
  is a plain text link.
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400; 500 for the h2) in `index.html`.
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.

## DOM skeleton (live preview, trimmed)

```html
<div class="content">
  <div class="cl-container">
    <h2 class="cl-mb-5">Table #6</h2>
    <div class="cl-table-responsive">          <!-- overflow-x: auto -->
      <table class="cl-table cl-table-striped custom-table">   <!-- min-width: 900px -->
        <thead>
          <tr>
            <th scope="col">Order</th>
            <th scope="col">Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Contact</th>
            <th scope="col">Education</th>
            <th scope="col"></th>               <!-- EMPTY header (Details column) -->
          </tr>
        </thead>
        <tbody>
          <tr scope="row">                     <!-- NOTE: stray scope on <tr> is
            <td>1392</td>                        invalid HTML; browsers ignore it —
            <td><a href="#">James Yates</a></td>  body cells are plain td's -->
            <td>Web Designer
              <small class="cl-d-block">Far far away, behind the word mountains</small>
            </td>
            <td>+63 983 0962 971</td>
            <td>NY University</td>
            <td><a href="#" class="more">Details</a></td>
          </tr>
          <tr>  <!-- 4616 · Matthew Wasil · Graphic Designer · +02 020 3994 929 · London College -->
            …same structure…
          </tr>
          <tr>  <!-- 9841 · Sampson Murphy · Mobile Dev · +01 352 1125 0192 · Senior High -->
            …same structure…
          </tr>
          <tr>  <!-- 9548 · Gaspar Semenov · Illustrator · +92 020 3994 929 · College -->
            …same structure…
          </tr>
          <tr>  <!-- 4616 · Matthew Wasil — DUPLICATE of row 2 -->
          <tr>  <!-- 9841 · Sampson Murphy — DUPLICATE of row 3 -->
          <tr>  <!-- 9548 · Gaspar Semenov — DUPLICATE of row 4 -->
        </tbody>
      </table>
    </div>
  </div>
</div>
<!-- NO <script> tags at all -->
```

## Design tokens (canonical CSS values)

| Token | Value |
|-------|-------|
| Font | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`; body 16px/1.5, **weight 300** |
| Page background | **`#3c373e`** (dark plum-CHARCOAL — the signature; the ONLY dark css-table variant) |
| Heading | h2: 20px / weight 500 / line-height 1.2 / color **`#fff`** / margin-bottom 3rem (`.cl-mb-5`) |
| Header labels | `.custom-table thead th { font-size: 11px; text-transform: uppercase; letter-spacing: .2rem; color: #fff; padding-bottom: 30px; border-top: none; border-bottom: none !important }` — white, borderless, directly on the dark page |
| Table body text | `#777`, `font-weight: 300`, padding 20px top/bottom + 0.75rem horizontal, `vertical-align: top`, `border: none`, `transition: .3s all ease` |
| Sub-blurb | `rgba(255,255,255,0.3)`, weight 300, 80% size, `cl-d-block` (`display: block !important`) — "Far far away, behind the word mountains" |
| Name links (default) | `rgba(255,255,255,0.3)` — faint WHITE (**NOT** the reboot's `#007bff` blue — `.custom-table tbody td a` overrides it) |
| Details links (`.more`) | `rgba(255,255,255,0.3)`, 11px, `font-weight: 900`, `text-transform: uppercase`, `letter-spacing: .2rem` |
| Link base | `a, a:hover { text-decoration: none !important }` + `transition: .3s all ease` — no underlines anywhere |
| Row hover/focus (signature) | `tbody tr:hover td, tbody tr:focus td { color: #fff }`; `td a` + `td .more` → **`#fdd114`** (YELLOW); .3s all ease |
| Striped odd rows | `.cl-table-striped tbody tr:nth-of-type(odd) { background-color: rgba(0,0,0,0.05) }` — subtle darker bands on rows 1/3/5/7; the live table carries the class |
| Container | `.cl-container`: 15px gutters, max-width 540 @576 / 720 @768 / 960 @992 / 1140 @1200 |
| Table + wrapper | `table { width: 100%; min-width: 900px; border-collapse: collapse }`; `.cl-table-responsive { display: block; width: 100%; overflow-x: auto }` |
| Content | `.content { padding: 7rem 0 }` |

## Screenshot analysis (css-table-16.jpg → AVIF, analyzed 2026-09-30)

The screenshot (a macOS-browser capture of the live preview) confirms the
stylesheet exactly:

- **Dark plum-charcoal page** (`#3c373e`) — dramatically different from
  all five siblings (white or light-gray pages). Minimalist, moody.
- **White heading** "Table #6" top-left above the table, 20px.
- **Uppercase WHITE header labels** — ORDER / NAME / OCCUPATION /
  CONTACT / EDUCATION — small (11px), wide letter-spacing (.2rem),
  borderless, sitting directly on the dark ground; the 6th column header
  is empty.
- **Seven data rows** with faint gray text (`#777`): 4-digit order ids,
  faint-white name links, occupation + very faint block sub-blurb
  beneath, +CC phones, schools, and faint uppercase letter-spaced
  "DETAILS" links on the right. Odd rows show subtle darker stripe
  bands.
- **Row 3 (9841, Sampson Murphy) is HOVERED in the capture** — the
  signature: ALL cell text turns WHITE and the name + DETAILS links
  turn YELLOW (`#fdd114`), a striking highlight against the dark page.
- **No borders, no row-cards, no radius, no checkboxes, no footer, no
  imagery** — pure data-table on dark ground. Aesthetic: clean, moody,
  "dark-mode data table" showcase.

## Fidelity notes (section-by-section)

1. **Page shell** — `bg-[#3c373e]`, Roboto 300; `.content` 7rem vertical
   padding; container max-width 1140px / 15px gutters (responsive
   540/720/960). Do NOT use a light page (that's every sibling).
2. **Heading** — h2, 20px / 500 / `#fff`, 3rem margin-bottom, on the
   dark page ABOVE the table. Label "Table #6" or a same-kind paraphrase
   ("People Table").
3. **Responsive wrapper** — `overflow-x: auto` around the table only.
   NO panel wrapper (that's Gridpane/css-table-15).
4. **Table** — `min-width: 900px`, width 100%, `border-collapse:
   collapse`, `cl-table-striped` class on; inside the overflow wrapper.
5. **thead** — borderless (no top/bottom), 6 columns Order | Name |
   Occupation | Contact | Education | (empty), labels 11px uppercase
   letter-spacing .2rem `#fff`, `padding-bottom: 30px`, `scope="col"`.
6. **tbody rows** — 7 data rows (4 unique + 3 duplicates of rows 2–4);
   NO spacer rows, NO row-cards/radius/gaps — rows sit directly on the
   dark page; cell text `#777` / weight 300 / 20px vertical + 0.75rem
   horizontal padding / `vertical-align: top` / `border: none`; odd rows
   tinted `rgba(0,0,0,0.05)`; `.3s all ease` transition on cells.
7. **Occupation cell** — title + block `small` blurb
   `rgba(255,255,255,0.3)` / 300 / 80%; same sentence every row.
8. **Name cell** — `a` `rgba(255,255,255,0.3)` (faint white), no
   underline.
9. **Details cell** — `a.more`: 11px / weight 900 / uppercase /
   letter-spacing .2rem / `rgba(255,255,255,0.3)`, no underline.
10. **Hover/focus (signature, CSS-only)** — `tbody tr:hover` (and
    `:focus`): all cell text → `#fff`; all links → `#fdd114`; .3s ease.
    Pure CSS — NO React state, NO JS to reimplement. Leaving the row
    reverts colors; stripe tint and layout stay put.
11. **Footer** — source has none; add the mandated minimal Component Dock
    attribution link (`https://www.componentdock.com/`, branded
    "Component Dock"). Zero ColorLib references anywhere in app files
    (comments included) — replace provenance comments with design-token
    notes (e.g. "brand palette: #3c373e page with #fdd114 hover links").

## Demo data (same KIND — paraphrase OK)

| Order | Name (faint link) | Occupation (+ blurb) | Contact | Education | Details |
|-------|-------------------|----------------------|---------|-----------|---------|
| 1392 | James Yates | Web Designer | +63 983 0962 971 | NY University | Details |
| 4616 | Matthew Wasil | Graphic Designer | +02 020 3994 929 | London College | Details |
| 9841 | Sampson Murphy | Mobile Dev | +01 352 1125 0192 | Senior High | Details |
| 9548 | Gaspar Semenov | Illustrator | +92 020 3994 929 | College | Details |

(Rows 2–4 are then DUPLICATED in the live DOM → 7 rows total. Keeping
the duplicates or trimming to 4 is acceptable — same KIND either way.)

## Sibling warning (do NOT copy tokens across)

- **Gridline** (`css-table-11`, Table #1): white page, borderless header,
  `#dee2e6` row separators, no hover, no sub-blurb.
- **Rowglow** (`css-table-12`, Table #2): gray page `#efefef`, rows turn
  fully white on hover (no radius/gaps/shadow).
- **Gridspan** (`css-table-13`, Table #3): white page, separators +
  blue-tinted active/hover rows with 1px `#007bff` hairlines, sub-blurb.
- **Rowcard** (`css-table-14`, Table #4): gray PAGE, white rounded
  row-cards + gaps + hover shadow; checked state visible ONLY on the
  checkbox (no `.active` rule); blue links.
- **Gridpane** (`css-table-15`, Table #5): WHITE page + gray rounded
  PANEL wrapper + uppercase 12px header labels on the gray + checked
  rows dim to `opacity: .4`.
- **Nightgrid** (this, `css-table-16`, Table #6): the ONLY DARK variant
  — plum-charcoal page `#3c373e`, white uppercase 11px/.2rem header
  labels directly on the dark ground, faint `#777` cells, faint-white
  links (NOT blue), `rgba(0,0,0,0.05)` stripe tint on odd rows, and the
  **hover signature: cell text → `#fff`, links → `#fdd114` yellow**.
  No checkboxes, no panel, no row-cards, no borders, no JS. Distinguish
  from Rowglow by the DARK page + yellow hover links (Rowglow: light
  gray page, white row fill on hover).
