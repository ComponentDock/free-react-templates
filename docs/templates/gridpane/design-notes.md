# Gridpane (ColorLib Css Table 15) — Design Notes

> Replication research for **Gridpane** (NEW name) — recreation of ColorLib
> **Css Table 15** (slug `css-table-15`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 15" (TEMPLATES.md line 2874; section
  "## Table (25)"). Slug `css-table-15` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-15/
  (page title: "CSS Table V15 - Free Minimal Table Design Template 2026 -
  Colorlib").
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-15/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-15/**
  (HTTP 200, 4,058 bytes, `<title>Table #5</title>`). The `bootstrap/`
  path segment is discoverable from the ColorLib template page's own links
  (`preview.colorlib.com/theme/bootstrap/css-table-15/` + the download zip
  `preview.colorlib.com/downloads/free/css-table-15.zip`).
- **Preview CSS:** `css/style.css?v=cfec863e` (10,982 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing else.
  No framework, no build step." It reverts Bootstrap-reboot base styles
  (`all: revert` on html/body/div/…/table elements), then styles from
  browser defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted
  woff2), `.cl-container` (Bootstrap-like responsive container 540/720/
  960/1140px), `.cl-table` + `.cl-table-responsive`, `.content`
  (7rem padding), `.custom-table` (UPPERCASE borderless header, white
  rounded row-cards + 10px transparent spacer gaps + hover box-shadow,
  `min-width: 900px`), `.custom-table-responsive` (the signature gray
  panel), `.control` / `.control__indicator` (custom checkbox), print
  rules.
- **Source scripts:** `js/snippet.js?v=4363416b` (1,006 bytes, vanilla
  ES5 IIFE, no jQuery/no framework) — two config arrays:
  - `CHECK_ALL`: `{"all":".js-check-all","boxes":"th input[type=checkbox]","row":"cl-active"}`
    — the header checkbox's `change` sets `.checked` on every row
    checkbox and `classList.toggle('cl-active', all.checked)` on their
    closest `tr`.
  - `CHECK_ROWS`: `{"boxes":"th[scope=row] input[type=checkbox]","cls":"cl-active"}`
    — each row checkbox toggles `cl-active` on its own `tr`.
  REIMPLEMENT the checkbox state in React state: `boolean[]` (or
  `Set<number>`) of checked rows; header checked ⇔ all rows checked
  (the source does NOT use indeterminate — keep it simple).
  **✓ IMPORTANT fidelity fact:** THIS stylesheet DOES style the checked
  class: `.custom-table tbody tr.cl-active { opacity: .4; }` — a checked
  row renders at 40% opacity. The static DOM already ships row 2 (Matthew
  Wasil) checked + `cl-active`. This is the OPPOSITE of sibling
  css-table-14 (Rowcard), whose stylesheet never styles `.active`. Do NOT
  assume "checkbox state has no visual effect" here — the dim IS the
  signature.
- **Icons:** icomoon glyph font (`@font-face icomoon-subset.woff2`,
  checkmark glyph `content: '\e5ca'` on `.control__indicator:after`,
  white, centered via `transform: translate(-50%,-52%)`) — REPLACE with
  lucide-react `Check` (or a CSS-drawn check); do not ship icon fonts.
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400; 500 for the h2) in `index.html`.
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.

## DOM skeleton (live preview, trimmed)

```html
<div class="content">
  <div class="cl-container">
    <h2 class="cl-mb-5">Table #5</h2>
    <div class="cl-table-responsive custom-table-responsive">  <!-- gray panel -->
      <table class="cl-table custom-table">                     <!-- min-width: 900px -->
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
          <tr scope="row">                    <!-- NOTE: source puts scope on <tr>
            <th scope="row">                   (invalid HTML; browsers ignore it —
              <label class="control control--checkbox">   use th[scope=row] semantics)
                <input type="checkbox"/>
                <div class="control__indicator"></div>
              </label>
            </th>
            <td>1392</td>
            <td><a href="#">James Yates</a></td>
            <td>Web Designer
              <small class="cl-d-block">Far far away, behind the word mountains</small>
            </td>
            <td>+63 983 0962 971</td>
            <td>NY University</td>
          </tr>
          <tr class="spacer"><td colspan="100"></td></tr>
          <tr class="cl-active">              <!-- CHECKED row: checkbox checked=""
            <th scope="row">                   + tr.cl-active → opacity .4 -->
              <label class="control control--checkbox">
                <input type="checkbox" checked=""/>
                <div class="control__indicator"></div>
              </label>
            </th>
            <td>4616</td>
            <td><a href="#">Matthew Wasil</a></td>
            <td>Graphic Designer
              <small class="cl-d-block">Far far away, behind the word mountains</small>
            </td>
            <td>+02 020 3994 929</td>
            <td>London College</td>
          </tr>
          <tr class="spacer"><td colspan="100"></td></tr>
          <tr>  <!-- 9841 · Sampson Murphy · Mobile Dev · +01 352 1125 0192 · Senior High -->
            …same structure…
          </tr>
          <tr class="spacer"><td colspan="100"></td></tr>
          <tr>  <!-- 9548 · Gaspar Semenov · Illustrator · +92 020 3994 929 · College -->
            …same structure…
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="js/snippet.js?v=4363416b"></script>
```

## Design tokens (canonical CSS values)

| Token | Value |
|-------|-------|
| Font | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`; body 16px/1.5, **weight 300** |
| Page background | `#fff` (WHITE — gray lives only in the panel) |
| Ink (heading/body) | `#212529`; h2 20px / weight 500 / line-height 1.2 / margin-bottom 3rem (`.cl-mb-5`) |
| Panel (signature) | `.custom-table-responsive { background-color: #efefef; padding: 20px; border-radius: 4px; }` |
| Header labels | `.custom-table thead th { border-top: none; border-bottom: none !important; font-size: 12px; text-transform: uppercase; letter-spacing: .1rem; }` — color `#212529`, sits DIRECTLY on gray panel |
| Table body text | `#777`, `font-weight: 300`, padding 20px top/bottom + 0.75rem horizontal, `vertical-align: top`, NO borders |
| Sub-blurb | `#b3b3b3`, weight 300, 80% size, `display: block` — "Far far away, behind the word mountains" |
| Row cards | cells `background: #fff; border: none`; `tr:not(.spacer) { border-radius: 7px; overflow: hidden; transition: .3s all ease }`; corners repeated on first/last cell |
| Card gaps | `tr.spacer td { padding: 0 !important; height: 10px; border-radius: 0 !important; background: transparent !important }` — gray panel shows through |
| Card hover | `tr:not(.spacer):hover { box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1) }` |
| Checked rows (signature) | `tr.cl-active { opacity: .4 }` — whole row (card+text+checkbox) fades |
| Name links | `#007bff` / hover `#0056b3`, `transition: .3s all ease`, `text-decoration: none !important` (link AND hover) |
| Checkbox wrapper | `.control { display: block; position: relative; margin-bottom: 25px; cursor: pointer; font-size: 18px }`; native input `position: absolute; z-index: -1; opacity: 0` |
| Checkbox indicator | `.control__indicator { position: absolute; top: 2px; left: 0; height: 20px; width: 20px; border-radius: 4px; border: 2px solid #ccc; background: transparent }` |
| Checkbox hover/focus | `border: 2px solid #007bff` |
| Checkbox checked | `border: 2px solid #007bff; background: #007bff` + white checkmark (icomoon `\e5ca` → lucide `Check`, centered `translate(-50%,-52%)`) |
| Checkbox disabled | `background: #e6e6e6; opacity: 0.6; border: 2px solid #ccc`; checked+disabled `#007bff` @ 0.2 opacity, `#007bff` border |
| Container | `.cl-container`: 15px gutters, max-width 540 @576 / 720 @768 / 960 @992 / 1140 @1200 |
| Table + wrapper | `table { width: 100%; min-width: 900px }`; `.cl-table-responsive { display: block; width: 100%; overflow-x: auto }` |
| Content | `.content { padding: 7rem 0 }` |

## Screenshot analysis (css-table-15.jpg → AVIF, analyzed 2026-09-30)

The screenshot (a macOS-browser capture of the live preview) confirms the
stylesheet exactly:

- **White page** with generous whitespace; heading "Table #5" in dark ink
  sits on the white page, left-aligned above the panel.
- **Gray rounded panel** (`#efefef`, ~20px padding, 4px radius) wraps the
  entire table — the single biggest visual difference vs siblings
  (Gridline/Gridspan: plain white page; Rowglow/Rowcard: gray PAGE with
  no panel).
- **Uppercase header labels** — ORDER / NAME / OCCUPATION / CONTACT /
  EDUCATION — small (12px), letter-spaced, dark, rendered directly on
  the gray panel (no white behind thead).
- **White rounded row-cards** with clear 10px gray gaps between them;
  row 2 (Matthew Wasil, 4616) is **visibly dimmed/faded** — its card,
  text, and checkbox all render at ~40% opacity; the checkbox is still
  blue-filled (checked), the name link faded blue.
- **Custom checkboxes**: rounded-square outline, gray border, white/
  transparent fill; the checked one is solid blue with a white check.
- **Roboto Light** body text, medium-gray cell values, lighter gray
  sub-blurb under each occupation, blue no-underline name links.
- Aesthetic: clean, minimal, "data-table snippet" showcase — no navbar,
  no footer, no imagery.

## Fidelity notes (section-by-section)

1. **Page shell** — `bg-white`, Roboto 300; `.content` 7rem vertical
   padding; container max-width 1140px / 15px gutters (responsive
   540/720/960). Do NOT gray the page (that's Rowglow/Rowcard).
2. **Heading** — h2, 20px / 500 / `#212529`, 3rem margin-bottom, on the
   white page ABOVE the panel. Label "Table #5" or a same-kind paraphrase
   ("People Table").
3. **Gray panel** — `#efefef`, padding 20px, radius 4px, wraps thead +
   tbody; header labels sit directly on it. This is variant #5's first
   signature — implement it as a wrapper div with the three properties.
4. **Table** — `min-width: 900px`, width 100%, inside the panel within an
   `overflow-x-auto` wrapper; `border-collapse: collapse`; cells
   `#777` / weight 300 / 20px vertical + 0.75rem horizontal padding /
   `vertical-align: top`; NO cell borders.
5. **thead** — borderless (no top/bottom), 6 columns `[checkbox] Order |
   Name | Occupation | Contact | Education`, labels 12px uppercase
   letter-spacing .1rem `#212529`, `scope="col"`; NO white background on
   header cells.
6. **tbody rows** — 4 data rows + 4 10px transparent spacer rows; each
   data row = white cells (`#fff`, no border) + `border-radius: 7px`
   overflow hidden (corners on first/last cell) + `.3s all ease`
   transition; hover shadow `0 2px 10px -5px rgba(0,0,0,0.1)`.
7. **Occupation cell** — title + block `small` blurb `#b3b3b3` / 300 /
   80%; same sentence every row.
8. **Name cell** — `a` `#007bff`, hover `#0056b3`, no underline ever,
   .3s ease.
9. **Checked state (signature)** — React state (`boolean[]`) toggles a
   row class (e.g. `cl-active`) → `opacity: .4` on the whole `<tr>`;
   initial state: row 2 (4616) checked + dimmed; select-all sets/clears
   every row; per-row toggles affect only their row. No indeterminate in
   the source — header checked ⇔ all checked.
10. **Custom checkboxes** — hidden native input + 20×20px indicator
    (radius 4px, 2px `#ccc`; hover/focus `#007bff`; checked `#007bff`
    fill + white lucide `Check`; disabled states as in tokens).
11. **Footer** — source has none; add the mandated minimal Component Dock
    attribution link (`https://www.componentdock.com/`, branded
    "Component Dock"). Zero ColorLib references anywhere in app files
    (comments included) — replace provenance comments with design-token
    notes (e.g. "brand palette: #efefef panel on #fff page").

## Demo data (same KIND — paraphrase OK)

| Order | Name (blue link) | Occupation (+ blurb) | Contact | Education |
|-------|------------------|----------------------|---------|-----------|
| 1392 | James Yates | Web Designer | +63 983 0962 971 | NY University |
| 4616 | Matthew Wasil | Graphic Designer | +02 020 3994 929 | London College |
| 9841 | Sampson Murphy | Mobile Dev | +01 352 1125 0192 | Senior High |
| 9548 | Gaspar Semenov | Illustrator | +92 020 3994 929 | College |

(4616 ships CHECKED + dimmed in the initial state.)

## Sibling warning (do NOT copy tokens across)

- **Gridline** (`css-table-11`, Table #1): white page, borderless header,
  `#dee2e6` row separators, no hover, no sub-blurb.
- **Rowglow** (`css-table-12`, Table #2): gray page `#efefef`, rows turn
  fully white on hover (no radius/gaps/shadow).
- **Gridspan** (`css-table-13`, Table #3): white page, separators +
  blue-tinted active/hover rows with 1px `#007bff` hairlines, sub-blurb.
- **Rowcard** (`css-table-14`, Table #4): gray PAGE, white rounded
  row-cards + gaps + hover shadow; checked state visible ONLY on the
  checkbox (no `.active` rule).
- **Gridpane** (this, `css-table-15`, Table #5): WHITE page + gray
  rounded PANEL wrapper + UPPERCASE header labels + **checked rows dim to
  `opacity: .4`**. Two signatures: the panel + the dim-on-check.
