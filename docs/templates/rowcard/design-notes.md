# Rowcard (ColorLib Css Table 14) — Design Notes

> Replication research for **Rowcard** (NEW name) — recreation of ColorLib
> **Css Table 14** (slug `css-table-14`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 14" (TEMPLATES.md line 2873; section
  "## Table (25)"). Slug `css-table-14` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-14/
  (page title: "CSS Table V14 - Free Minimal Table Design Template 2026 -
  Colorlib").
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-14/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-14/**
  (HTTP 200, 4,028 bytes, `<title>Table #4</title>`). The `bootstrap/`
  path segment is discoverable from the ColorLib template page's own links
  (`preview.colorlib.com/theme/bootstrap/css-table-14/` + the download zip
  `preview.colorlib.com/downloads/free/css-table-14.zip`).
- **Preview CSS:** `css/style.css?v=4361de53` (10,761 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing else.
  No framework, no build step." It reverts Bootstrap-reboot base styles
  (`all: revert` on html/body/div/…/table elements), then styles from
  browser defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted
  woff2), `.cl-container` (Bootstrap-like responsive container 540/720/
  960/1140px), `.cl-table` + `.cl-table-responsive`, `.content`
  (7rem padding), `.custom-table` (borderless header, WHITE rounded
  row-cards + 10px transparent spacer gaps + hover box-shadow,
  `min-width: 900px`), `.control` / `.control__indicator` (custom
  checkbox), print rules.
- **Source scripts:** `js/snippet.js?v=dce5f118` (1,000 bytes, vanilla
  ES5 IIFE, no jQuery/no framework) — two config arrays:
  - `CHECK_ALL`: `{"all":".js-check-all","boxes":"th input[type=checkbox]","row":"active"}`
    — the header checkbox's `change` sets `.checked` on every row
    checkbox and `classList.toggle('active', all.checked)` on their
    closest `tr`.
  - `CHECK_ROWS`: `{"boxes":"th[scope=row] input[type=checkbox]","cls":"active"}`
    — each row checkbox toggles `active` on its own `tr`.
  REIMPLEMENT the checkbox state in React state: `Set<number>` (or
  per-row booleans) of checked rows; header checked ⇔ all rows checked
  (the source does NOT use indeterminate — keep it simple).
  **⚠ IMPORTANT fidelity caveat:** unlike its sibling css-table-13
  (Gridspan), THIS stylesheet contains **NO `.active` rule anywhere** —
  grep the 543-line sheet: selectors cover `tr:hover` shadow, cell
  backgrounds, spacer rows, and checkbox states, but never `.active`.
  The JS toggles the class; the CSS ignores it. A checked row looks
  IDENTICAL to an unchecked one except the checkbox fill. Do NOT port
  Gridspan's active-row tint/hairlines here.
- **Icons:** icomoon glyph font (`@font-face icomoon-subset.woff2`,
  checkmark glyph `content: '\e5ca'` on `.control__indicator:after`,
  white, centered via `transform: translate(-50%,-52%)`) — REPLACE with
  lucide-react `Check` (or a CSS-drawn check); do not ship icon fonts.
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400; 500 for the h2) in `index.html`.
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.
- **Naming check:** "rowcard" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30;
  `git grep -i rowcard origin/main -- apps openspec docs TEMPLATES.md`
  returned zero hits).
- **Download zip (alternate reference):**
  `https://preview.colorlib.com/downloads/free/css-table-14.zip` (linked
  from the ColorLib page; not needed if the preview DOM + CSS are enough).

## Screenshot analysis (`css-table-14.jpg`, 2026-09-30)

(AVIF data despite the .jpg extension, 1200×972; visually analyzed.)

Minimal, utilitarian data-table demo on a light-GRAY page:

- **Page:** light-gray `#efefef`, no navbar/footer/imagery in the source;
  generous vertical whitespace (~7rem top/bottom) around a centered
  container.
- **Heading:** small dark label "Table #4" at the top-left of the
  container (≈20px, medium weight, near-black `#212529`), clearly
  separated from the table (~3rem gap).
- **Table:** wide (~900px min) 6-column table — [checkbox] · Order · Name
  · Occupation · Contact · Education. Header labels are dark/bold
  (`#212529`, default th weight); the header row has NO borders and sits
  directly on the gray page.
- **Row treatment (the signature):** each of the 4 data rows renders as a
  WHITE rounded card (`#fff`, radius ~7px) floating on the gray page,
  separated by ~10px transparent gaps (gray shows through). NO cell
  borders anywhere — the white-card/gray-gap contrast IS the row
  separation. The screenshot captures row 2 (4616 Matthew Wasil) in the
  CHECKED state: its checkbox is solid blue `#007bff` with a white
  checkmark, but the row card itself looks identical to the others (no
  tint, no shadow) — confirming `.active` is unstyled.
- **Row cells:** Order numbers (1392/4616/9841/9548) in light-gray
  (`#777`, weight 300); Name cells are blue `#007bff` links WITHOUT
  underline (James Yates / Matthew Wasil / Sampson Murphy / Gaspar
  Semenov); Occupation cells show the title + a smaller lighter-gray
  (`#b3b3b3`) sub-blurb "Far far away, behind the word mountains"; Contact
  (+CC phones) and Education (schools) in `#777`/300.
- **Checkboxes:** rounded squares; unchecked = white with light-gray
  `#ccc` 2px border; checked = solid blue `#007bff` + white checkmark.
  The header checkbox (select-all) sits in the first header cell.
- **Hover state (from CSS, not the static screenshot):** each card lifts
  with `box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1)` over ~0.3s ease —
  a subtle drop shadow under the rounded white card.
- **Demo data (4 rows):**
  | # | Order | Name | Occupation (+ blurb) | Contact | Education |
  |---|-------|------|----------------------|---------|-----------|
  | 1 | 1392 | James Yates | Web Designer | +63 983 0962 971 | NY University |
  | 2 | 4616 | Matthew Wasil | Graphic Designer | +02 020 3994 929 | London College |
  | 3 | 9841 | Sampson Murphy | Mobile Dev | +01 352 1125 0192 | Senior High |
  | 4 | 9548 | Gaspar Semenov | Illustrator | +92 020 3994 929 | College |
- **No footer** in the source (monorepo rule adds the Component Dock
  attribution line).

## Live DOM skeleton (verified 2026-09-30)

```
body                                  (bg #efefef, Roboto 300)
└── .content                          (padding: 7rem 0)
    └── .cl-container                 (max-width 1140px ≥1200, 15px gutters)
        ├── h2.cl-mb-5                "Table #4"  (20px / 500 / #212529, mb 3rem)
        └── .cl-table-responsive      (overflow-x: auto)
            └── table.cl-table.custom-table   (min-width: 900px)
                ├── thead  (borderless)  → 6 × th[scope=col]
                │     [checkbox .js-check-all] Order Name Occupation Contact Education
                └── tbody
                      4 × [ tr (row-cards: white, radius 7px)
                              th[scope=row] (checkbox) · td 1392 · td <a>James Yates</a> ·
                              td "Web Designer" + small.cl-d-block blurb ·
                              td +63 983 0962 971 · td NY University
                            tr.spacer → td[colspan=100]  (10px transparent gap) ]
script js/snippet.js                  (CHECK_ALL + CHECK_ROWS, vanilla; .active class
                                       toggled but UNSIZED in CSS)
```

Note: the DOM initial state has all checkboxes unchecked; the screenshot's
checked row 2 illustrates the checkbox fill only (no row restyle).

## Design tokens (canonical, from `css/style.css`)

| Token | Value | Where |
|-------|-------|-------|
| Font | Roboto 300/400 (+500 for h2) | `body`, `@font-face` (Google Fonts `<link>` in the app) |
| Page bg | `#efefef` | `body` background-color (template override) |
| Ink | `#212529` | `body` color; `h2` 20px/500/1.2; thead th (bold default) |
| Cell text | `#777` @ 300 | `.custom-table tbody th, td` |
| Sub-blurb | `#b3b3b3` @ 300, 80% | `.custom-table ... small` (block) |
| Row cards | `background: #fff; border: none` | `.custom-table tbody tr th, td` |
| Card radius | `7px` + `overflow: hidden` | `.custom-table tbody tr:not(.spacer)`; first/last cell corners |
| Card gaps | 10px, transparent, radius 0 | `.custom-table tbody tr.spacer td` (`padding: 0; height: 10px`) |
| Card hover | `box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1)` | `.custom-table tbody tr:not(.spacer):hover`; `transition: .3s all ease` |
| `active` rows | NONE — no rule in the stylesheet | snippet.js toggles the class; CSS ignores it |
| Links | `#007bff`, hover `#0056b3`, no underline | `a`, `a:hover` + template `text-decoration: none !important`; `transition: .3s all ease` |
| Header row | borderless | `.custom-table thead tr, th` → `border-top: none; border-bottom: none !important` |
| Checkbox | 20×20, radius 4px, border 2px `#ccc`; hover/focus `#007bff`; checked fill `#007bff` + white check; disabled `#e6e6e6` @0.6 (checked+disabled `#007bff` @0.2) | `.control`, `.control__indicator` |
| Cell padding | 0.75rem horizontal, 20px vertical | `.cl-table` (0.75rem) + `.custom-table` (py 20px override) |
| Table | 100% width, min-width 900px, `border-collapse: collapse` | `.cl-table`, `.custom-table` |
| Wrapper | block, overflow-x auto | `.cl-table-responsive` |
| Container | 540 @576 / 720 @768 / 960 @992 / 1140 @1200 px, 15px padding, auto margins | `.cl-container` |
| Content pad | `7rem 0` | `.content` |
| Heading gap | 3rem | `.cl-mb-5` |

## Section-by-section fidelity notes

1. **Page shell** — light-gray bg `#efefef`; Roboto 300 body; container
   centered with 15px gutters; 7rem vertical padding. Tailwind
   approximation: `bg-[#efefef] font-[Roboto] py-28` +
   `mx-auto max-w-[1140px] px-4`.
2. **Heading** — one short dark label ("Table #4" or a paraphrase like
   "People Table"); 20px, weight 500, `mb-12` (3rem).
3. **Table wrapper** — `overflow-x-auto` div; table `min-w-[900px]
   w-full border-collapse`.
4. **thead** — borderless; 6 columns; th bold default weight, `#212529`,
   `scope="col"`. First column holds the select-all checkbox.
5. **tbody row-cards** — 4 data rows + 4 spacer rows; each data row:
   `bg-white` cells with `border-none`, cell text `#777`/300, py-5
   (20px) px-3 (0.75rem), `align-top`; row rendered as a card via
   `rounded-[7px] overflow-hidden` on the `<tr>` (or per-cell corners on
   first/last cell); spacer rows = 10px transparent gaps (e.g.
   `<tr aria-hidden="true"><td colSpan={6} className="h-2.5 p-0
   bg-transparent" /></tr>` — h-2.5 = 10px). NO cell borders at all.
6. **Occupation cell** — title + block small blurb (`#b3b3b3`, 300, 80%);
   same placeholder sentence in every row.
7. **Name links** — `<a>` `#007bff`, hover `#0056b3`, NO underline
   (source forces `text-decoration: none !important`), `transition-colors
   duration-300 ease`.
8. **Checkboxes** — hidden native input (`sr-only`/opacity-0 absolute)
   + styled indicator: 20×20 `rounded` `border-2 border-[#ccc]`;
   hover/focus `border-[#007bff]`; checked `bg-[#007bff]
   border-[#007bff]` + white lucide `Check`; disabled gray states.
   All with accessible labels; header = select-all. Checked state does
   NOT restyle the row — only the indicator changes.
9. **Row hover** — card shadow lift `hover:shadow-[0_2px_10px_-5px_rgba(0,0,0,0.1)]`,
   `transition-shadow duration-300 ease`; hover must NOT change any
   checkbox's checked state.
10. **Component Dock footer** — source has none; add minimal "Made with
    Component Dock" line linking https://www.componentdock.com/. Zero
    ColorLib references in the app (comments included).

## What differs from the source (allowed renames/substitutions)

- New name **Rowcard** (never "css-table-14" in app/package/folder).
- Roboto via Google Fonts `<link>` instead of self-hosted woff2.
- lucide-react `Check` instead of the icomoon glyph font.
- React state instead of vanilla `snippet.js` (checkbox state only — the
  source's `active` class is unstyled, so nothing else needs re-creating;
  keeping an inert `active` class for behavioral parity is optional).
- Placeholder demo text may be paraphrased but must keep the same KIND
  (4-digit orders, names, occupations + blurb, +CC phones, schools).
- Mandatory Component Dock attribution footer (source has none).
- Tailwind utilities + `@theme` tokens instead of the snippet's CSS.
