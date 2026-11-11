# Swatchbook — design notes (ColorLib **Pricing Table V08**, slug `pricing-table-08`)

The reference is a **marketplace gig listing**, not a plan grid: a listing column carries the gig's header, seller,
photo and an eight-row comparison `<table>`; a **sticky 400 px card** beside it carries the three packages behind an ARIA
tablist. It is the `pricing-table` family's **8th of 12** variant and its **only** one with interactive state.

## Source inventory

| What | Value |
| ---- | ----- |
| ColorLib page | `https://colorlib.com/wp/template/pricing-table-08/` — **200, 114,516 B** |
| `h1` / `title` | `Pricing Table V08` / `Pricing Table V08 - Free Bootstrap Pricing Tables 2026 - Colorlib` |
| `datePublished` | `2026-09-25T15:12:53+00:00` |
| meta description | _A service listing in the style of a freelance marketplace, with the gig title, seller, rating and cover photo on the…_ — **accurate** |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/pricing-table-08/` — **200, 19,821 B** (slug-only and `bb/` → **404, 9 B**) |
| Stylesheet | `css/style.css?v=34bc1d21` — **12,515 B**, sha256 `6ab144816f5d414c79483a18041ffafdfcfc68b40783574d8c23cf5df128b0ae` |
| Script | `js/snippet.js?v=64e2eac8` — **1,484 B**, sha256 `023007381acc0311ab0d2e6b8035aa3bbf5cfaa521cb7028888586bb207222a7` (47 lines, one IIFE, no dependencies) |
| Image | `images/cover.jpg` — **111,020 B**, `image/jpeg`, **900 × 560** |
| Archive | `https://preview.colorlib.com/downloads/free/pricing-table-08.zip` — **200, 272,287 B** |
| Archive contents | `index.html` 19,581 B · `css/style.css` 12,515 B (**hash-identical**) · `js/snippet.js` 1,484 B (**hash-identical**) · `images/cover.jpg` 111,020 B (**hash-identical**) · `README.md` 1,278 B · `fonts/` **10 woff2** |
| Live vs archive | `<body>` differs by **exactly 48 B**: ` fetchpriority="high" decoding="sync"` (37) + `?v=64e2eac8` (11). The other **192 B** is `<head>` (2 `noindex` metas, `cdnjs.cloud` dns-prefetch, stylesheet `?v=`) |
| Screenshot | `pricing-table-08.jpg` — **200, 52,898 B, 1200 × 972**, **AVIF behind a `.jpg`** (`file` → ISO Media, AVIF) |
| Reference rects | local archive at 1440 × 1024 × 960 × 520 × 375 == live preview, **0 differences** across 63 rects per width |

Single page: `index.html` is **200** and byte-identical to the directory URL; `about.html` is **404 (9 B)**. Four anchors,
**all** `href="#"` (three CTAs + the contact link).

## CSS census

| Metric | Value |
| ------ | ----- |
| Bytes | 12,515 (3,000 fewer than `pricing-table-03`, 2,500 more than `-07`) |
| `@font-face` | **8** — 400 / 500 / 700 / 800 × latin / latin-ext |
| Rule blocks | **77** (2 of them not design: the `all: revert` shield and the dead `.cl-icon`) |
| Media queries | **3** — `max-width: 960`, `max-width: 520`, `prefers-reduced-motion: reduce` |
| Custom properties | **4**, all on `.cl-pricing08`: `--…-accent #5b21b6`, `--…-ink #17151f`, `--…-muted #5a5668`, `--…-line #e4e2ec` |
| Gradients | **1** (the avatar) |
| `@keyframes` / `filter` / `text-shadow` | **0 / 0 / 0** |
| Transitions | 2 × `.2s ease` (tab `color, background-color`; CTA `background-color`) |
| Rows in the table | thead **1** + tbody **8** |

## DOM skeleton (reference, 1440 × 900)

```
main.cl-pricing08-demo                      padding: 72px 16px, bg #f7f7fb, h 1307.58
└─ section.cl-pricing08                     grid 720 / 400, gap 40, items start, max-w 1160, 15/23.25 #17151f
   ├─ div.gig                               x140 y72 720 × 1163.58
   │  ├─ p.crumbs                          720 × 20.92        13.5 #5a5668
   │  ├─ h1.title                          720 × 82.78        36/800 · 2 lines · balance
   │  ├─ div.seller                        720 × 48           flex gap 14, mb 22
   │  │  ├─ span.avatar  (SH)              48 × 48            50 % gradient
   │  │  └─ div
   │  │     ├─ p.sname  Studio Halden      inline             + span.level 77 × 20.59
   │  │     └─ p.rating                    256 × 21.69        star 16, 4.9, (318 reviews) · 41 orders in queue
   │  ├─ img.cover                         720 × 448          aspect 900/560, radius 16
   │  └─ table.table                       720 × 483.88       mt 32, ring 1px, radius 14
   │     ├─ caption  Compare packages      720 × 43           20/800, pb 12
   │     ├─ thead   (td, th, th, th)       67.88               band #faf9fd, 12/16, 14/700
   │     └─ tbody   × 8 rows               46.69 … 46.19       label left 500 #2c2838, 3 cells centred
   └─ aside.box                             900, 72 400 × 568.56   sticky top 24, radius 18
      ├─ div.tabs (role=tablist)            398 × 56.25        grid 3, 1px dividers
      ├─ div.panel (role=tabpanel) × 3      398 × 459.63       one visible, padding 24/24/26
      │  ├─ div.ptop → h3.pname + p.price   81 / 70.41 × 27.89 / 46.5   baseline row
      │  ├─ p.pdesc                         350 × 44.94        14.5, 2 lines
      │  ├─ ul.meta × 2                     124 + 98 × 21.69   gap 20, 14/700, icon 18
      │  ├─ ul.inc × 6                      350 × 30.47        icon 16, gap 10
      │  └─ a.cta                           350 × 51.69        radius 12, ink, chip 53 × 23.69
      └─ p.contact                          398 × 50.69        #faf9fd, 1px top rule, centred
footer (port only)                          repo strip, one Component Dock link
```

## The token block, as the port should write it

```css
@theme {
  --color-swatch-ground: #f7f7fb;   /* body */
  --color-swatch-band:   #faf9fd;   /* thead, unselected tab, contact strip */
  --color-swatch-ink:    #17151f;   /* text + CTA fill */
  --color-swatch-label:  #2c2838;   /* the 8 row labels */
  --color-swatch-muted:  #5a5668;   /* crumbs, descriptions, unselected tab */
  --color-swatch-line:   #e4e2ec;   /* every divider + the table's ring */
  --color-swatch-accent: #5b21b6;   /* selected tab, meta icons, link, CTA hover */
  --color-swatch-ok:     #047857;   /* checks */
  --color-swatch-off:    #6f6b7e;   /* the fix: dash + crossed glyph (ref: #8e8a9c, 3.35) */
  --color-swatch-badge:  #fef3c7;
  --color-swatch-badge-ink: #78350f;
  --color-swatch-star:   #d97706;
  --color-swatch-avatar-a: #7c3aed;
  --color-swatch-avatar-b: #db2777;
}
```

Notes: `#fef3c7`/`#78350f`/`#047857`/`#7c3aed`/`#db2777`/`#5b21b6` are exactly `amber-100`/`amber-900`/`emerald-700`/
`violet-600`/`pink-600`/**`violet-800`**, so alias those names where the port prefers them. The other seven are bespoke.

## Font: one binary, five names — and the drift it causes

The archive's `fonts/` holds **10 files that are 2 binaries**: all five `-latin` files are **20,184 B, sha256
`8330490a…`** and all five `-latin-ext` are **10,228 B, same sha256**. The eight `@font-face` rules therefore point at
**one variable file per subset**; the `-600-` pair is shipped and **never declared**. Serving the same paths live returns
the identical bytes, so this is the shipped font, not a zip artefact.

The rendered advances are **not** real Figtree's. Measured with `canvas.measureText` in each page's own font context:

| string (size / weight) | reference | Google Figtree v9 | Δ |
| --- | ---: | ---: | ---: |
| `Top rated` (12 / 700) | 61 | 53 | −13.1 % |
| `Standard` (14 / 700) | 65 | 58 | −10.8 % |
| `Continue` (15 / 700) | 69 | 65 | −5.8 % |
| `Colour palette and fonts` (14 / 400) | 159 | 151 | −5.0 % |
| the `h1` (36 / 800) | 928 | 909 | −2.1 % |
| `$420` (30 / 800) | 74 | 74 | 0.0 % |
| `(318 reviews) · 41 orders in queue` (14 / 400) | 209 | 211 | +1.0 % |

Consequences on a replica built from the archive's own CSS + Google's `css2` link:

- `docH` **identical at 18 of 21 widths** (1440 → 520, plus 390 and 360).
- Table columns **329.22 · 110.77 · 138.45 · 141.56** vs `325.64 · 110.53 · 144.89 · 138.94` (auto layout).
- Badge **69** vs **77**; nothing else in the seller line moves.
- **Pinning the columns does not help**: a `<colgroup>` at the reference's percentages reproduced **414** but overshot
  **390**/**375** by −20 each and **320** by −101. Keep auto layout.
- 414 / 375 / 320 read **1527 / 1565 / 1668** against the reference's **1549 / 1585 / 1749** — one table label wraps a
  line earlier in the reference because its label column is ~7 px narrower.

## Screenshot analysis (AVIF, 1200 × 972, page at ≈0.9 of the window)

A macOS browser mock-up: traffic lights, a `preview.colorlib.com` URL pill, a rounded white window with a soft shadow.
Inside, on a very pale grey ground:

- **Left (≈60 % of the width).** A grey breadcrumb line; a **two-line** heavy headline whose second line is a full
  measure; then a **violet→pink gradient disc** with white initials, the studio name with a small **amber "Top rated"
  pill** to its right, and a grey `★ 4.9 (318 reviews) · 41 orders in queue` under it.
- Beneath: the big **colour swatch book** photo — fanning swatch cards, a dark desk, a tablet covered in hand-drawn
  palette blobs — at a 16 px radius. It is the only photograph on the page.
- Then **"Compare packages"** and the table: a very pale header band with `Basic $180 / Standard $420 / Premium $890`
  (plan bold, price lighter and under it), then five visible rows (`Logo concepts 2 3 4`, `Revisions 2 5 Unlimited`,
  `Delivery 5 days 7 days 12 days`, `Vector source file ✔ ✔ ✔`, `Colour palette and fonts — ✔ ✔`). The shot is cropped
  at the fold — the reference has eight rows. Row labels are left, values centred, hairlines `#e4e2ec`, and the whole
  card is white with a barely-there ring. There are **no zebra stripes and no highlighted column**.
- **Right (≈35 %).** The card: three tabs (`Basic | Standard | Premium`) with **Standard** in violet over a **3 px violet
  underline**, its panel white while the other two tabs sit on a paler band. Inside: `Brand Kit` (left) and `$420`
  (right, 30 px), a two-line grey description, `⏱ 7-day delivery` + `⟳ 5 revisions` on one bold 14 px line, six list
  entries with green checks and **one grey cross** (`Brand guidelines`), then the near-black **`Continue $420`** bar with
  a translucent price chip at its right end. Below the panel, a pale strip: `Need something custom?` and a violet bold
  underlined `Message Studio Halden`.
- The card's bottom edge sits well above the photo's, so the layout reads **asymmetric on purpose**: a long listing, a
  short sticky buy box.

## Section-by-section fidelity notes

1. **Wrapper.** `clamp(32px, 6vw, 72px) 16px` — at 1440 `6vw` is 86.4 so it clamps to **72**; the same clamp gives 69.6
   at 1160 and 32 at 521. The ground is `body`, the wrapper paints nothing.
2. **The two-column grid.** `minmax(0, 1fr) 400px` with `gap: 40` inside `max-width: 1160`. At 1440 the content is 1160
   and the columns are exactly **720 / 400**; from 1160 down the left column shrinks (688 at 1160, 552 at 1024, 489 at
   961) while the card stays 400 — the card is the fixed object, the listing flexes.
3. **`align-items: start` is load-bearing twice.** On the grid it stops the card stretching to the listing's height; in
   the ≤ 960 flex column it is *inherited* and makes every child max-content — which is why the seller is 318 and not 343.
4. **The `h1` is `text-wrap: balance`d.** Two lines at 720 ("A brand identity and logo system" / "for your new startup"),
   one line at 928 (960 viewport), three at 288 (320 viewport). The wrap point is a font-and-width coincidence, not a
   breakpoint: the line count changes because the column width changes, not the font size (26 px below 600).
5. **The table is auto-laid-out.** Columns are content widths (325.64 / 110.53 / 144.89 / 138.94 at 720), not quarters.
   `border-collapse: collapse` (no vertical rules, one horizontal rule per cell), the last row's rule removed, and the
   ring drawn with `box-shadow` because a collapsed table ignores a border radius.
6. **The caption sits inside the card** — it is a `<caption>`, so it inherits the 15/23.25 root but is set to 20/800 at
   `line-height: 31`, left, with 12 px under it, and it is *inside* the white card and the hairline ring. Do not lift it
   out as a heading.
7. **Header band.** `thead th, thead td { background: #faf9fd }` plus `thead th { font-weight: 700 }`; the first cell is a
   `<td>` with no text, still banded and still 67.88 tall. The price inside a `<th>` is `display: block` at 500 weight and
   `--muted`, which is what makes the two-line header read cleanly.
8. **The check glyph and the dash** are 16 px inline SVGs and plain text respectively, each followed by a clipped
   `Included` / `Not included` — so the table is readable to a screen reader without a live-region hack, and the visible
   glyph stays tiny.
9. **The card's tab strip is a 3-column grid** with `box-shadow: inset 1px 0` as the divider, so the selected tab's white
   fill covers the strip's bottom rule while the `::after` bar sits on top of it at `bottom: -1px`.
10. **The panel's top row is `align-items: baseline`** (name 18/800 left, price 30/800 right), so the two sizes share a
    baseline rather than a centre line — a one-line detail that is obvious in the screenshot and easy to miss in CSS.
11. **The three panels are all 459.63 tall.** Each has exactly six items and the same meta shape, so the card height is
    *invariant* across tabs (568.56). Any assertion on `docH` after a tab switch is a no-op.
12. **Sticky, then static.** 1440: pins at 24 for the whole 408 px of scroll and never unpins. ≤ 960: `position: static`,
    ordered **above** the table, `max-width: 560` and centred, which is what makes the phone layout read as
    "photo → buy box → comparison" rather than "comparison → buy box".
13. **Nothing else moves.** No nav, no footer, no cookie bar, no scroll animation, no icon font, no jQuery.

## Source → React adaptation table

| Reference | Port |
| --------- | ---- |
| `main.cl-pricing08-demo` + `body` background | `<div className="min-h-screen bg-swatch-ground px-4 py-[clamp(32px,6vw,72px)]">` |
| `section.cl-pricing08` grid | `grid max-w-[1160px] grid-cols-[minmax(0,1fr)_400px] items-start gap-10` |
| `.gig` + `.box` | `<div className="gig">` + `<aside className="sticky top-6 …">` |
| 8 hard-coded `<tr>` | `compare.map(...)` over a typed array of `CellValue` unions |
| 3 hard-coded panels | `packages.map(...)`; only the selected panel is not `hidden` |
| `.tabs` + `js/snippet.js` `select()` | `useState` + `role="tablist"`/`tab`/`tabpanel`, arrow/Home/End handler |
| `.level` badge | `rounded-md bg-swatch-badge px-2 py-px text-[12px] font-bold` |
| `.avatar` gradient | `bg-[linear-gradient(135deg,#7c3aed,#db2777)]`, `aria-hidden`, initials `SS` |
| `images/cover.jpg` | `https://picsum.photos/seed/swatchbook-1/900/560` at `aspect-[900/560]` |
| `.vh` (clip-path) | `sr-only` |
| 4 inline `<svg>` shapes | `lucide-react` `Clock`/`RefreshCcw` (18), `Check`/`X` (16), `Star` (16, filled) |
| `href="#"` × 4 | keep (family precedent: `limelight`, `perch`) |
| no `<footer>` | repo footer strip, one Component Dock link |
| `--cl-pricing08-*` on the section | `@theme` tokens, no CSS variables left in components |
| `all: revert` shield, `.cl-icon` | dropped — Tailwind preflight owns the first, the second has no element |

## Sibling comparison (same `pricing-table` family, 12 variants)

| # | app | shape | identity |
| - | --- | ----- | -------- |
| 01 | ratecard | 3-card grid | light, violet accent |
| 02 | tallyboard | 4 plans + usage metrics | table-ish columns |
| 03 | parity | 3-plan **comparison table** | real `<table>`, muted, sticky header |
| 04 | limelight | 3 glow cards | dark neon, gradient rings |
| 05 | prorata | seat calculator | two panels + range slider |
| 06 | runrate | usage calculator | dark, sliders, live total |
| 07 | perch | 4 full-width rows | warm cream, one inverted row |
| **08** | **swatchbook** | **gig listing + comparison table + sticky tabbed picker** | **grey ground, white cards, violet accent, marketplace copy** |

Swatchbook is the only one of the eight with **two** simultaneous price surfaces (the matrix and the picker) and the only
one that needs **component state** — `perch` and `parity` are pure CSS, `prorata`/`runrate` are numeric inputs. If a later
variant needs a tab pattern, this is the precedent to copy.

## Measured readings kept for the audit

- 1440: `docH` **1308**; table `140, 751.7, 720 × 483.88`; card `900, 72, 400 × 568.56`; panel `901, 129.25, 398 ×
  459.63`; CTA `925, 511.19, 350 × 51.69`; chip `1113, 525.19, 53 × 23.69`; contact `901, 588.88, 398 × 50.69`.
- Sticky at 1440: start 72 → **24** at `scrollY 400` → **24** at `scrollY 408` (`maxScroll`).
- Ladder: `1308 · 1308 · 1283 · 1238 · 1179 · 1160 · 1128 · 1956 · 1909 · 1805 · 1711 · 1681 · 1653 · 1593 · 1568 ·
  1549 · 1574 · 1585 · 1576 · 1749` at `1440 · 1280 · 1160 · 1100 · 1024 · 1000 · 961 · 960 · 900 · 768 · 600 · 560 ·
  521 · 520 · 480 · 414 · 390 · 375 · 360 · 320`.
- Mobile: 375 → seller **318**, card **343 × 582.25** above table **343 × 492.83**, tabs **113.67**, CTA **305**,
  `h1` **two** lines; 320 → `h1` **three** lines, rating **two** lines, first row **61.28**.
- Contrast: ink **18.05 / 16.89**, label **14.31**, muted **7.08 / 6.63 / 6.75**, accent **8.98 / 8.57**, badge **8.15**,
  ok **5.48**, off text **5.15**, CTA white **18.05**, chip **11.01**, dash **3.35 (fixed to 5.15)**, line **1.28**,
  band **1.05**, star **2.98**.
