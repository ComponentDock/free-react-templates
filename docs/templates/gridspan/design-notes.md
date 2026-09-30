# Gridspan (ColorLib Css Table 13) — Design Notes

> Replication research for **Gridspan** (NEW name) — recreation of ColorLib
> **Css Table 13** (slug `css-table-13`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 13" (TEMPLATES.md line 2872; section
  "## Table (25)"). Slug `css-table-13` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-13/
  (page title: "CSS Table V13 - Free Modern CSS Table Template 2026 -
  Colorlib").
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-13/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-13/**
  (HTTP 200, 3,684 bytes, `<title>Table #3</title>`). The `bootstrap/`
  path segment is discoverable from the ColorLib template page's own links
  (`preview.colorlib.com/theme/bootstrap/css-table-13/` + the download zip
  `preview.colorlib.com/downloads/free/css-table-13.zip`).
- **Preview CSS:** `css/style.css?v=12e290cd` (10,634 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing else.
  No framework, no build step." It reverts Bootstrap-reboot base styles
  (`all: revert` on html/body/div/…/table elements), then styles from
  browser defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted
  woff2), `.cl-container` (Bootstrap-like responsive container 540/720/
  960/1140px), `.cl-table` + `.cl-table-responsive`, `.content`
  (7rem padding), `.custom-table` (borderless header, `min-width: 900px`,
  `#777`/300 body cells, blue hover/active highlight), `.control` /
  `.control__indicator` (custom checkbox), print rules.
- **Source scripts:** `js/snippet.js?v=8b6525f2` (1,000 bytes, vanilla
  ES5 IIFE, no jQuery/no framework) — two config arrays:
  - `CHECK_ALL`: `{"all":".js-check-all","boxes":"th input[type=checkbox]","row":"active"}`
    — the header checkbox's `change` sets `.checked` on every row
    checkbox and `classList.toggle('active', all.checked)` on their
    closest `tr`.
  - `CHECK_ROWS`: `{"boxes":"th[scope=row] input[type=checkbox]","cls":"active"}`
    — each row checkbox toggles `active` on its own `tr`.
  REIMPLEMENT in React state: `Set<number>` (or per-row booleans) of
  checked rows; header checked ⇔ all rows checked (indeterminate state is
  NOT used by the source — keep it simple unless desired).
- **Icons:** icomoon glyph font (`@font-face icomoon-subset.woff2`,
  checkmark glyph `content: '\e5ca'` on `.control__indicator:after`,
  white, centered via `transform: translate(-50%,-52%)`) — REPLACE with
  lucide-react `Check` (or a CSS-drawn check); do not ship icon fonts.
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400; 500 for the h2) in `index.html`.
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.
- **Naming check:** "gridspan" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30;
  `git grep -i gridspan origin/main -- apps openspec docs/templates`
  returned zero hits).

## Screenshot analysis (`css-table-13.jpg`, 2026-09-30)

(JPEG 1200×972; visually analyzed.)

Minimal, utilitarian data-table demo on a white page:

- **Page:** pure white, no navbar/footer/imagery in the source; generous
  vertical whitespace (~7rem top/bottom) around a centered container.
- **Heading:** small dark label "Table #3" at the top-left of the
  container (≈20px, medium/bold weight, near-black `#212529`), clearly
  separated from the table (~3rem gap).
- **Table:** wide (~900px min) 6-column table — [checkbox] · Order · Name
  · Occupation · Contact · Education. Header labels are dark/bold
  (`#212529`, default th weight); the header row has NO borders. Body
  cells are light-gray (`#777`), light weight (300), with a small
  lighter-gray (`#b3b3b3`) two-line-style blurb under each Occupation:
  "Far far away, behind the word mountains". Between rows: thin light-gray
  separators (`#dee2e6`, 1px top border per row); no vertical borders.
- **Row states shown:** rows 1 (1392 James Yates) and 3 (9841 Sampson
  Murphy) are CHECKED — their backgrounds are a very light blue
  (`rgba(0,123,255,0.03)`) and thin BLUE hairlines (`#007bff`) run along
  the top and bottom of those rows. Unchecked rows show only the gray
  separators. The checkboxes themselves: rounded squares; checked ones
  are solid blue `#007bff` with a white checkmark; unchecked ones are
  white with a light-gray `#ccc` 2px border.
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
body
└── .content                      (padding: 7rem 0)
    └── .cl-container             (max-width 1140px ≥1200, 15px gutters)
        ├── h2.cl-mb-5            "Table #3"        (20px / 500 / #212529, mb 3rem)
        └── .cl-table-responsive  (overflow-x: auto)
            └── table.cl-table.custom-table   (min-width: 900px)
                ├── thead  (borderless)  → 6 × th[scope=col]
                │     [checkbox .js-check-all] Order Name Occupation Contact Education
                └── tbody  → 4 × tr
                      th[scope=row] (checkbox) · td 1392 · td James Yates ·
                      td "Web Designer" + small.cl-d-block blurb ·
                      td +63 983 0962 971 · td NY University
script js/snippet.js              (CHECK_ALL + CHECK_ROWS, vanilla)
```

Note: the DOM initial state has all checkboxes unchecked; the screenshot's
checked rows illustrate the `active` styling.

## Design tokens (canonical, from `css/style.css`)

| Token | Value | Where |
|-------|-------|-------|
| Font | Roboto 300/400 (+500 for h2) | `body`, `@font-face` (Google Fonts `<link>` in the app) |
| Page bg | `#fff` | `body` |
| Ink | `#212529` | `body` color; `h2` 20px/500/1.2; thead th (bold default) |
| Cell text | `#777` @ 300 | `.custom-table tbody th, td` |
| Sub-blurb | `#b3b3b3` @ 300, 80% | `.custom-table ... small` (block) |
| Row separator | `1px solid #dee2e6` (top only) | `.cl-table th, td` (thead overridden to none) |
| Accent | `#007bff` | checkbox hover/focus/checked; hover/active hairlines |
| Row tint | `rgba(0,123,255,0.03)` | `tbody tr:hover`, `tbody tr.active` |
| Hairlines | `1px #007bff`, top -1px/bottom -1px per cell, `opacity 0→1` on hover/active, `.3s all ease` | `tbody tr ... :before/:after` |
| Checkbox | 20×20, radius 4px, border 2px `#ccc`; hover/focus `#007bff`; checked fill `#007bff` + white check; disabled `#e6e6e6` @0.6 (checked+disabled `#007bff` @0.2) | `.control`, `.control__indicator` |
| Cell padding | 0.75rem horizontal, 20px vertical | `.cl-table` (0.75rem) + `.custom-table` (py 20px override) |
| Table | 100% width, min-width 900px, `border-collapse: collapse` | `.cl-table`, `.custom-table` |
| Wrapper | block, overflow-x auto | `.cl-table-responsive` |
| Container | 540 @576 / 720 @768 / 960 @992 / 1140 @1200 px, 15px padding, auto margins | `.cl-container` |
| Content pad | `7rem 0` | `.content` |
| Heading gap | 3rem | `.cl-mb-5` |

## Section-by-section fidelity notes

1. **Page shell** — white bg; Roboto 300 body; container centered with
   15px gutters; 7rem vertical padding. Tailwind approximation:
   `bg-white font-[Roboto] py-28` + `mx-auto max-w-[1140px] px-4`.
2. **Heading** — one short dark label ("Table #3" or a paraphrase like
   "People Table"); 20px, weight 500, `mb-12` (3rem).
3. **Table wrapper** — `overflow-x-auto` div; table `min-w-[900px]
   w-full border-collapse`.
4. **thead** — borderless; 6 columns; th bold default weight, `#212529`,
   `scope="col"`. First column holds the select-all checkbox.
5. **tbody rows** — 4 rows; first cell `th[scope=row]` with checkbox;
   Occupation cell = title + block small blurb (`#b3b3b3`, 300, 80%);
   cell text `#777`/300; py-5 (20px) px-3 (0.75rem); `border-t
   border-[#dee2e6]` per cell; `align-top`.
6. **Row highlight** — checked ⇔ active: `bg-[rgba(0,123,255,0.03)]` +
   1px `#007bff` top+bottom lines on the row; `transition-colors
   duration-300 ease`; hover shows the same visual WITHOUT changing
   checked state. (Source uses per-cell absolute pseudo-lines; rendering
   top/bottom borders on the row/cells is an acceptable visual
   equivalent — verify against the screenshot.)
7. **Checkboxes** — hidden native input (`sr-only`/opacity-0 absolute)
   + styled indicator: 20×20 `rounded` `border-2 border-[#ccc]`;
   hover/focus `border-[#007bff]`; checked `bg-[#007bff]
   border-[#007bff]` + white lucide `Check`; disabled gray states.
   All with accessible labels; header = select-all.
8. **Footer** — source has none; add minimal "Made with Component Dock"
   line linking https://www.componentdock.com/. Zero ColorLib references
   in the app (comments included).

## What differs from the source (allowed renames/substitutions)

- New name **Gridspan** (never "css-table-13" in app/package/folder).
- Roboto via Google Fonts `<link>` instead of self-hosted woff2.
- lucide-react `Check` instead of the icomoon glyph font.
- React state instead of vanilla `snippet.js`.
- Placeholder demo text may be paraphrased but must keep the same KIND
  (4-digit orders, names, occupations + blurb, +CC phones, schools).
- Mandatory Component Dock attribution footer (source has none).
- Tailwind utilities + `@theme` tokens instead of the snippet's CSS.
