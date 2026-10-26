# Coursebook — design notes (`card-12` → `apps/coursebook`)

Research date **2026-10-26**. Live reference: `https://preview.colorlib.com/theme/bootstrap/card-12/`
(**200, 6,048 B**). Source spec: `openspec/specs/template-coursebook/spec.md`. Task outline:
`docs/templates/coursebook/tasks.md`. Every number below is measured (Playwright 1.62 Chromium,
`curl -4`), not read off the sheet — where the two disagree, the measurement wins and is marked.

## 1 — What this design actually is

A **learning dashboard card set**: three courses, each a white panel whose top half is a 16:9
photograph and whose bottom half is a *progress* report. The card answers, in order — *which course*
(track eyebrow + title), *by whom* (avatar + name), *how big* (lessons + running time), *how far in*
(label + percentage + bar) — then a tinted strip answers *what next* and offers the only affordance.

It is the **twelfth member of the `card` family** and it is the batch's **only card with no
behaviour at all**: the archive contains no `js/` directory, `curl` returns zero `<script>` tags, and
the ten script tags a browser reports are Cloudflare's zaraz/gtag/beacon injection on the preview
host. Everything interactive is CSS — a 3 px lift, a soft shadow, and a 4 → 8 px gap growth.

Three structural facts decide whether the recreation reads correctly:

1. **It is a three-state demo, not three designs.** 58 % / 17 % / 100 %, `Resume →` twice and
   `View →` once. A port that gives all three cards the same footer loses the point of the snippet.
2. **The card's bottom edge is a rule, not a flow.** `body { flex: 1 }` pins the strip, so the
   middle card (one-line title) shows a 43.39 px gap between bar and strip while its neighbours show
   20 px. That hole is the design's honesty about variable content.
3. **The bar is textured.** An 8 px striped overlay (16 px tile, white 25 %) is the only decoration
   in the file that has no class of its own.

## 2 — Structure order (1:1, nothing elided)

```
main.cl-card12-demo                      max-width 1160 + padding clamp(32,6vw,72) 16
├─ header.cl-card12-demo__head           flex / wrap / space-between / gap 12 / mb 24
│  ├─ h1.cl-card12-demo__title           "Continue learning"  26–34 / 700 / −.02em
│  └─ p.cl-card12-demo__streak           pill: SVG flame 18 + "6-day streak" 14/600
└─ div.cl-card12-grid                    auto-fit minmax(290,1fr) / gap 22
   └─ article.cl-card12  (×3)            p 10 / border 1 #e6e8f0 / radius 22 / flex column
      │                                  [3rd adds .cl-card12--done]
      ├─ div.cl-card12__thumb            relative / overflow hidden / radius 16 / aspect 16:9
      │  ├─ img.cl-card12__img           700×440 intrinsic, w/h 100 %, object-fit cover
      │  └─ span.cl-card12__level        absolute bottom 10 left 10 / radius 8 / white .94
      ├─ div.cl-card12__body             flex 1 / padding 16 12 4
      │  ├─ p.cl-card12__track           13/600 accent
      │  ├─ h2.cl-card12__title          > a.cl-card12__link (::after inset 0 = card hit area)
      │  ├─ p.cl-card12__teacher         span.cl-card12__avatar (28 disc, aria-hidden) + name
      │  ├─ ul.cl-card12__meta           li ×2 — 17 px stroked icon + text, gap 16
      │  └─ div.cl-card12__progress      ** unstyled wrapper **
      │     ├─ div.cl-card12__progress-top   span (count) + strong (58% | Completed)
      │     └─ div.cl-card12__bar            role=progressbar > span (width: N %)
      └─ p.cl-card12__next               strip: span(sentence) + span.cl-card12__go (chip)
```

Nothing sits between the grid and the end of `<body>` — no footer, no CTA band, no status line.
That is why the content height (715.41) is shorter than the viewport (900) and why the catalogue
screenshot shows a large empty region under the cards: the mockup frames a fixed viewport, the page
does not fill it.

## 3 — Token reference (copy-paste block, from the live sheet + computed styles)

```css
/* ground + ink */
--ground:    #f6f7fb;   /* body — BLUE-leaning grey, not warm paper */
--surface:   #ffffff;   /* card */
--ink:       #161a2e;   /* h1, title, card text, strong figures, level chip text */
--muted:     #4b5168;   /* --cl-card12-muted: meta, progress label, strip text */
--hairline:  #e6e8f0;   /* the card's 1px border */

/* per-card pairs — the 2nd and 3rd exist ONLY as inline style attributes */
accent/soft 1: #4f46e5 / #eef0ff      /* indigo — also the sheet's defaults */
accent/soft 2: #0f766e / #e6f6f3      /* teal   */
accent/soft 3: #b45309 / #fdf3e4      /* amber  */

/* streak pill */
--streak-bg: #fff1e6;  --streak-ink: #9a3412;  --streak-icon: #f97316;

/* surfaces + decoration */
--level-chip: rgba(255,255,255,.94);
--bar-stripe: rgba(255,255,255,.25);   /* 16px tile → 8px period */
--lift:       0 20px 40px -26px rgba(22,26,46,.45);

/* radii */
card 22 · thumb 16 · level 8 · avatar 50% · bar 999 · strip 14 · chip 10

/* type — ONE variable face, wght 400–700 */
font-family: "Lexend", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
h1          clamp(26px,3.4vw,34px) / 700 / -.02em
title       18px / 600 / 1.3 / -.01em
card base   14.5px / 400 / 1.5
teacher     14.5px / 500
meta        13.5px / 400
track       13px / 600            /* in the card accent */
progress    13px / 400 (label) · 13px / 600 (figure, ink)
strip       13px / 400 + strong 600 ink
chip        13px / 600 white
level       12px / 600
avatar      11px / 700
streak      14px / 600
```

The palette has **10 hexes in the sheet** and **4 more that exist only inline** — a token audit that
reads `style.css` alone will report three indigo cards.

## 4 — Measured at 1440 (page space, card 1 at x 140, y 139)

| part           | measurement                                                    |
| -------------- | -------------------------------------------------------------- |
| container      | 1192 outer (1160 content + 2 × 16), x 124; grid x 140, w 1160    |
| header         | 43 tall at y 72, `margin-bottom` 24 → grid starts at 139         |
| card           | **372 × 504.41**, padding 10, border 1 → inner 350              |
| thumb          | **350 × 196.88** = exactly 16:9, radius 16, y 150                |
| body           | **350 × 212.03**, content 326, y 346.88                          |
| track          | 326 × 19.5 at y 362.88 (accent, 13/600)                          |
| title          | 326 × **46.78** at y 386.38 (2 lines × 23.4); card 3 → **23.39** |
| teacher        | 326 × 28 at y 445.16 (28 px avatar + gap 8, mb 12)               |
| meta           | 326 × 20.25 at y 485.16, items 91 + 92 with gap 16               |
| progress line  | 326 × 19.5 at y 521.41, mb 6                                     |
| bar            | 326 × **8** at y 546.91, fill **189.08** (58 %)                  |
| strip          | **350 × 57.5** at y 574.91, radius 14, padding 12 / 14           |
| chip           | **96 × 33.5** (Resume) / **76** (View), gap 4 → 8 on hover       |
| content        | **715.41** (`body.scrollHeight`); document 900 = viewport        |

Body arithmetic, for anyone rebuilding the block: `16 (pt) + 19.5 (track) + 4 + 46.78 + 12 (title
margins) + 28 + 12 (teacher) + 20.25 + 16 (meta) + 19.5 + 6 (progress line) + 8 (bar) + 4 (pb) =
212.03`.

## 5 — Section-by-section fidelity notes

### 5.1 The head

`justify-content: space-between` with `flex-wrap: wrap`. Nothing is centred; the `h1` sits at the
grid's left edge (x 140) and the pill at its right (x 1155, width 145). The pill's padding is
**asymmetric** — `7px 14px 7px 10px` — because the flame glyph needs less air on its left than the
text does on its right. At 1,440 the header is 43 tall; below 765 the `h1` shrinks with `3.4vw` and
the header shrinks to 33; at **422** the pill drops to a second row and the header becomes 77.

### 5.2 The grid

`repeat(auto-fit, minmax(290px, 1fr))`, gap **22** (not 24 — that is the previous card's value).
Columns are therefore *arithmetic*: 3 while `grid ≥ 914`, 2 while `≥ 602`. Because `main` carries
`padding: … 16px`, the grid width is `min(1160, vw − 32)`, so the transitions land at **vw 946** and
**vw 634** — neither is a media query, and both were verified by probing 946/945 and 634/633.

At **320** the grid box is 288 while the track is pinned at 290: the card overruns its column by
2 px into the 16 px gutter, leaving 14 px of visible margin and **no** horizontal scroll
(`scrollX 0` after `scrollTo(200,0)`). Do not "fix" it with a smaller min track.

### 5.3 Media band and level chip

The 16:9 claim is **true here** — 350 × 196.88 is exactly 1.7778 — because the `<img>` is
`height: 100%`, so the ratio box owns the height and the 700 × 440 intrinsic does not participate.
That is the exact inverse of the sibling whose `<img>` is in-flow with `height: auto`, where the same
declaration renders 1.59:1. **Read the child's box, not the declaration.**

The chip is `rgba(255,255,255,.94)` — 94 %, not opaque — over a photograph, so a dark image bleeds
barely 6 % through; keep the alpha, it is what stops the chip looking like a sticker. Radius 8
against the thumb's 16 keeps the chip visibly *inside* the photo's corner.

### 5.4 Body copy

The track eyebrow is the only text in the card's accent, and it is **600, not uppercase** — no
`letter-spacing`, no `text-transform`. This is the family's first eyebrow that is sentence-case.

The title is 18 px / 600 / 23.4 line-height (1.3) with `−.01em`; cards 1 and 2 wrap to two lines and
card 3 fits one at 1440. The link inside carries the overlay: `position: absolute; inset: 0;
border-radius: 22px`, so the **whole card** is the target and the focus ring is drawn on the
overlay, not the text.

The teacher row is an avatar + name with `gap: 8`; the avatar is a **28 px disc of the card's soft
tint** with accent initials at 11/700 — there are no photographs of people anywhere in the design.
The row is `flex`, so a long name would push the avatar, not wrap around it.

### 5.5 Meta row

Two `li`s of "N lessons" and "H h MM min", each `inline-flex` with a **17 px stroked icon** at
`stroke-width: 1.8` and a `6` px gap, the row itself `gap: 16` with `flex-wrap: wrap`. Measured
widths are 91 + 92 (card 1), 90 + 89 (card 2), 89 + 91 (card 3) — i.e. the two items plus the gap
(16) are ~199 of the 326 content width, so the row only wraps below a ~200 px content box.

### 5.6 Progress block

`progress-top` is a `space-between` row: the count on the left in muted 13, the figure on the right
in **ink 600** 13 (in the finished card the figure is the *word* "Completed" at the same style). The
bar is 8 px tall, radius 999, `overflow: hidden`, track = the card's soft tint, fill = the accent,
and the fill carries a white-25 % 90° gradient tiled at 16 px — which yields an **8 px period**
(4 px white, 4 px clear). At 58 % the fill is 189.08 px, i.e. ~23.6 stripes.

Percentages are **round** of done/total (14/24 → 58.3 → 58; 3/18 → 16.7 → 17), and the bar uses the
same integer, so the fill is ≤ 1 px off the true fraction. Derive both from one number.

### 5.7 Footer strip

Full inner width (350), radius 14, ground = the card's **soft** tint, `padding: 12px 14px`, `mt-16`.
Because the body has `flex: 1`, every strip sits at the card's bottom edge; the consequence is the
20 / 43.39 px bar gap described above.

The sentence is one `span` (`inline-flex`, `gap 6`, `min-width: 0` so it can shrink), the lesson
title inside a `<strong>` in ink. The chip is `flex: none` and its verb differs per state
("Resume" / "View"); its arrow is 16 × 16 at `stroke-width: 2.2` and the whole chip is a
`<span aria-hidden="true">` — decoration inside the overlay, not a control.

Wrap arithmetic (**per card**): strip content = `track − 20 − 28`; need = `text + 10 + chip`.

| card | text | chip | need | wraps when track ≤ |
| ---: | ---: | ---: | ---: | -----------------: |
|    1 |  191 |   96 |  297 |                345 |
|    2 |  199 |   96 |  305 |                353 |
|    3 |  141 |   76 |  227 |                275 |

Measured: at 1,024 (track 316, content 266) cards 1 and 2 wrap to **63** and card 3 stays at
**57.5**; at 950 all three tracks are 291.33 and still only 1 and 2 wrap; at 914 (two columns, track
430) none wrap. Two lines = `12 + 39 + 12 = 63` exactly.

### 5.8 The finished variant

`--done` changes the strip's text colour to ink at 600, swaps the medal in (`18 × 18` stroked, accent)
and the verb to "View". The card's own geometry does not change: 57.5 px strip, same y. The bar's
`aria-valuenow` is 100 and its fill is the full 326.

## 6 — Traps worth carrying to the next variant

1. **`flex: 1` on the body is load-bearing.** Remove it and the middle card's strip rises 23.39 px,
   which reads as a broken row at 1440 and disappears into "grid stretch" at 2 columns.
2. **Two text insets on one card (12 body / 14 strip).** A 2 px step that is reproduced on every
   card at every width. Normalising is a visible drift on the 350 px strip.
3. **The strip wraps per card, not per row.** Never measure one card and generalise: at 1,024 the
   row hides two wrapped strips behind one unwrapped one because the grid stretches all three cards.
4. **A computed `aspect-ratio` is not evidence — but here it happens to be right.** Verify by
   dividing the measured box, and check the `<img>`'s own `height` value before deciding which
   behaviour applies.
5. **`@font-face` count ≠ file count ≠ instance count.** Eight declarations, **two** binaries, **four**
   instances (canvas: 349 / 357 / 360 / 367 at 400/500/600/700, then 367 for 800 and 900). The
   ceiling at 700 means `font-extrabold` is a no-op and a 600/700/800 hierarchy collapses.
6. **A browser reports 10 scripts on a page whose `curl` shows zero.** Never write "the reference has
   N scripts" from `document.querySelectorAll('script')` on the preview host — it serves Cloudflare's
   zaraz/gtag/beacon injections. `curl` is the authority for authored markup.
7. **A `<p>` can be a footer.** The strip is a paragraph in the reference; it must not stay one in the
   app, but its *geometry* (full inner width, 12/14 padding, 14 radius) is not negotiable.
8. **The clip-at-320 case again.** `track 290` in a `288` grid, 14 px visible, `scrollX 0`. Report
   *clipped*, and never probe overflow with `documentElement.scrollWidth` alone.

## 7 — Visual reference

- Catalogue screenshot `card-12.jpg` (**1200 × 972**, AVIF behind a `.jpg`) is a **browser-window
  mockup**: chrome bar, three traffic lights, address pill `preview.colorlib.com`, grey canvas around
  a framed page. The frame is the listing site's presentation — **do not reproduce it**.
- Inside the frame the render matches the live page pixel-for-pixel down to the pill's placement and
  the two-line titles; the only difference is the empty region below the cards, which the mockup's
  fixed viewport adds and the live page genuinely has (content 715.41).
- Live renders captured for this run: `/tmp/card12/live-1440.png`, `live-768.png`, `live-390.png`,
  `hover-1440.png`.

## 8 — How these numbers were taken

```bash
cd /tmp/card12
curl -4 -o live.html -w '%{http_code} %{size_download}\n' \
  https://preview.colorlib.com/theme/bootstrap/card-12/
curl -4 -o style.css  https://preview.colorlib.com/theme/bootstrap/card-12/css/style.css?v=b1aa0a8b
curl -4 -o card-12.zip https://preview.colorlib.com/downloads/free/card-12.zip
python3 -c "import zipfile; zipfile.ZipFile('card-12.zip').extractall('out')"   # unzip is absent
# measurement (node Playwright — the Python package is not installed here):
node measure.mjs > measure.json       # facts at 1440 + 18-width responsive matrix + canvas A/B
node measure2.mjs > measure2.json     # 946/945, 634/633, 423/422, real hover, script census
```

Reference readings: HTML **6,048 B** live / **5,750 B** in the archive; CSS **10,466 B**, 446 lines,
sha256 `fce39111…`; archive **448,645 B** (the page claims 438 KB ✓), 18 entries; live ↔ archive CSS
sha256 identical and the body markup byte-identical — the only diffs are `<head>` booleans and three
`<img>` attributes, so the archive is the live page's **un-versioned twin**. Screenshot is AVIF
behind a `.jpg`; `PIL.open` + `.convert('RGB').save()` before viewing.
