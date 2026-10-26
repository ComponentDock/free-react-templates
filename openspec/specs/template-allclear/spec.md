# Template: Allclear (Alert — a dismissible, restorable project notice board)

## Purpose

A **glass notice panel on a lavender-to-blue gradient**: one centred 620 px column (676 px outer —
see the `content-box` trap) holding a two-line project head with a dark **count pill** pinned to its
baseline, then **four white notice rows**, each with a **40 px pastel icon tile**, a 15 px / 700 title,
two lines of 14 px copy, and a **36 px × dismiss button** in its top-right corner. Every row can be
dismissed; the count decrements, a polite live region narrates the dismissal ("Dismissed … 3 notices
left."), focus jumps to the next row's ×; when the list empties, a **dashed "You are all caught up."
box** replaces it and a **dark "Show dismissed notices" pill** restores all four. There is no nav, no
hero, no footer band, no form, **no links**, and no images.

- **Source slug:** `alert-02`
- **ColorLib page:** https://colorlib.com/wp/template/alert-02/ — **HTTP 200, 113,327 B**,
  `<title>` `Alert V02 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V02"**, authoritative
  description *"A project workspace card with four notices, each with a close button. Free download, no
  jQuery or plugins."*, "Author: Colorlib", "Released: September 2026", "License: CC BY 3.0",
  `datePublished` **2026-09-25T14:53:34+00:00**, claims *"the download is 248 KB"* (measured
  **253,874 B = 247.9 KiB** ✓), and links its siblings `Alert 01`, `03`, `07`…`12` (the family runs to
  twelve). This is the **design name the naming audit reads**: ColorLib "Alert V02".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-02/ —
  **HTTP 200, 6,230 B**, `<title>` `Alert V02 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  authored script. The slug-only path `theme/alert-02/` is **404 (9 B)**; `theme/bb/alert-02/` is
  **404 (9 B)**. Same `bootstrap/` prefix ladder as `alert-01` and the `card` family.
- **Design category:** Alert (dismissible notice list / inbox-zero
  pattern). **Second** of the **`alert` snippet family** (**12** variants) in the **214 snippet variants**
  of `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/allclear`,
  package `@free-react-templates/allclear`, CNAME `allclear.free.componentdock.com`.

**What this design is.** `alert-01` was a static severity ladder; `alert-02` is the *interactive* twin —
the same four-tone family, but as a **working dismiss/restore list**. The four rows are not severities
to decorate with (info/success/warning/danger badges in separate quads): each row carries a **tinted icon
tile over an otherwise identical white card**, and the differences are *editorial* (a design review, a
green build, two overdue tasks, a near-full drive). The product here is the **motion + state**: a row
leaves by collapsing its grid track to `0fr` while sliding 24 px right and fading, the count and the
live text update **immediately** (not after the animation), and focus lands on the row below.

**The one real behaviour — and the four things that make it feel right.** The reference ships **2,623 B
of plain JS** (75 lines, no jQuery). The four details a careless port flattens:

- **Dismissal is a grid-track collapse, not a height animation.** `grid-template-rows: 1fr → 0fr` on
  the `<li>`, with `min-height: 0` + `overflow: hidden` on the inner — and because `.cl-alert02__inner`
  also carries `padding-bottom: 12px`, the collapsed row still occupies **12 px** until `hidden` is
  applied at `transitionend` (~410 ms measured). Without `min-height: 0` the 0fr track does not collapse
  at all.
- **The count and the live region update on click, not on completion.** Measured 30 ms after the click:
  class `is-leaving`, count already **3**, live already `Dismissed "Design review moved to Thursday". 3
  notices left.`, focus already on the second row's ×. The visual is 380 ms behind the state.
- **Focus follows the list, then the button.** Closing row 1 focuses row 2's ×
  (`aria-label="Dismiss: Build 2.14.0 passed QA"`); closing the *last* row focuses the restore pill;
  restoring focuses row 1's × again. There is no `aria-expanded`, no `aria-live` on the rows
  themselves — the narration lives in one 13 px `<p role="status">` under the list.
- **`prefers-reduced-motion` is a real branch.** It sets `--cl-alert02-speed: 0s`, drops the 24 px
  translate, **and** the script skips the transition path entirely (`finish()` on the same frame —
  measured `hidden === true` synchronously after the click). A port that only zeroes the CSS duration
  leaves the row in the DOM for 600 ms.

**The parts a careless port flattens** (each measured here, expanded below):

- **`max-width: 620px` is the CONTENT width, not the card width.** The panel is `content-box`; at 1440
  it measures **676 × 560** (620 + 2 × 28 padding). Copying `max-w-[620px]` with Tailwind's border-box
  gives a card 56 px narrower than the reference and moves every measured column.
- **The panel is not a flex row of equal columns; it is one column whose rows touch.** There is **no
  gap** between notices — the 12 px visible gap is `.cl-alert02__inner { padding-bottom: 12px }`, which
  is also what survives the collapse.
- **The rows are not equal height.** At 1440 the amber row is **89.5** while the other three are
  **110.5**, because its body is one line. Do not add `min-h` to "fix" the stack.
- **The panel is glass, and the ground is two radial gradients over a lavender base**, not a flat
  colour: `rgba(255,255,255,.72)` over `#eceafd` with `#d9d3ff` (10 % 0 %) and `#cfe9ff` (100 % 100 %)
  blooms. A flat `bg-white/70` over `#eceafd` loses the corner tints the design is built on.
- **The count pill is aligned to the head's BASELINE row, not its centre** (`align-items: flex-end`),
  so its bottom edge is flush with the sub-line's bottom (both end at y **175**).
- **The pill says "1 notices".** The reference's own live text pluralises correctly ("1 notice left")
  but the `<span>` beside "notices" is only ever a number. Fix it in the port (defect 1).
- **Padding drops from 28 to 20/16 at 480** — which makes the panel's *content* **wider** at 479 than
  at 481 (416 vs 393), the only inverted step in the design.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,898** rows, 3,154 lines), so this design comes
from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `alert-02` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in
that gap are all prepped. Families are worked **in family order, then variant number** — the `card`
family (20) is closed, `alert` is in progress (`alert-01` → **noticeboard**, prepped 2026-10-26).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet** (the `alert-01` prep creates it), so
this row is the **second** entry of that section, which belongs **between `## Bootstrap Accordions (20)`
(line 639) and `## Bootstrap Buttons (20)` (line 663)**, keeping the file's alphabetical section order:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 01** — [colorlib](https://colorlib.com/wp/template/alert-01/) · [noticeboard](https://noticeboard.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-01.jpg)
- [x] **Alert 02** — [colorlib](https://colorlib.com/wp/template/alert-02/) · [allclear](https://allclear.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-02.jpg)
```

Read the surrounding lines **immediately before pushing** — two implementer streams write this file, so
the section may already exist with the `Alert 01` row (or have moved since this prep was written).

**The name.** `allclear` — one lowercase (closed-compound) word, matching the family's
`noticeboard` / `nameplate` / `coursebook` pattern: the all-clear is the signal that nothing is wrong,
which is exactly the panel's empty state ("You are all caught up."). `git grep -il allclear origin/main`
returns **0** files (the substring test this pipeline uses); there is no `apps/allclear`, no
`openspec/specs/template-allclear`, and the ColorLib catalogue URLs
`colorlib.com/wp/template/allclear/` (**404, 63,534 B error page**),
`preview.colorlib.com/theme/allclear/` (**404, 9 B**) and
`preview.colorlib.com/theme/bootstrap/allclear/` (**404, 9 B**) plus `theme/bb/allclear/` (**404, 9 B**)
all miss. Rejected on measurement: `checkoff` (**16** hits), `signoff` (**3** hits), `noticebox`
(**1** hit). Still free the same day if a later variant needs one: `catchup`, `clearway`, `clearout`,
`notelet`, `quittance`, `standdown`, `trayline`, `quietlist`, `tickoff` (0 hits each). Do **not** reuse
`noticeboard` (the family's `alert-01`) nor the `card` family's taken names `nameplate`, `marketrow`,
`octavo`, `tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`, `lexeme`, `coffer`, `showbill`,
`coursebook`, `banter`, `postbox`, `notebell`, `isobar`, `tonearm`, `tiffin`, `baylist`, `shortlist`.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 6,230 B** live (`6,027 B` inside the archive), `<title>` "Alert V02 \| Colorlib", `lang="en"`, **one** stylesheet, **one** authored script |
| preview path      | **`theme/bootstrap/alert-02/`**; the directory URL is the page. `theme/alert-02/` **404** (9 B), `theme/bb/alert-02/` **404** (9 B) |
| stylesheet        | `css/style.css?v=41f00800`, **10,141 B**, 425 lines, sha256 `3c50ebde42dd47029930e2ca63b0da24e329fdae3060ca314761c888e62eb0a2` |
| script            | `js/snippet.js?v=49be6df2`, **2,623 B**, 75 lines, sha256 `ebf0a63a5d50e2d34b553cf2dfef24c3020b2699009ef9037bf5ae55f916a6dd` |
| archive           | `preview.colorlib.com/downloads/free/alert-02.zip`, **200, 253,874 B** (= 247.9 KiB ✓ the page's "248 KB"), **18 entries**: 4 dirs + `index.html` 6,027 B + `css/style.css` 10,141 B + `js/snippet.js` 2,623 B + `README.md` 1,262 B + **10 `woff2`**; **no** `images/` |
| live ↔ archive    | CSS **and** JS **identical sha256**; the two HTML files differ only in the `<head>` (`robots` metas, a `dns-prefetch`, `?v=` cache-busters, `fetchpriority="high"`) → **live preview verified; the archive is its un-versioned twin** |
| fonts             | **10** `woff2` files but only **2 distinct binaries**: `plus-jakarta-sans-*-latin.woff2` 5 × 27,272 B sha256 `cd8db90cd950…`, `*-latin-ext.woff2` 5 × 21,688 B sha256 `0303e02b53b0…`. The sheet declares **8** `@font-face` (400 / 600 / 700 / 800 × `latin` / `latin-ext`) and **never declares 500**, although the archive ships `-500-` files — byte-identical to the 400 ones. Declaring the same binary at several weights yields varying widths, i.e. it is a **variable cut**. At 1440 exactly **3 latin faces** load (400, 700, 800) |
| CSS size          | **53** style rule blocks (48 top-level + 3 in the `480` query + 2 in the reduced-motion query), **8** `@font-face`, **133** selectors, **9** guard rules (`:where(html) … { all: revert }`, 31 selectors), **2** media queries (`max-width: 480px`, `prefers-reduced-motion: reduce`), **2** `transition` declarations, **5** custom properties, **0** `@keyframes`, **0** `@supports`, **0** container queries |
| classes           | **22** in the markup, **21** styled; **1 unstyled** (`.cl-alert02__msg--violet` — the base `.cl-alert02__msg` rule carries the violet tone) and **1 dead selector**, `.cl-icon` (`document.querySelectorAll('.cl-icon').length === 0`, the seventh snippet in a row with this leftover) |
| custom properties | **5**: `--cl-alert02-ink` (`#1c1a33`), `--cl-alert02-muted` (`#5b5876`), `--cl-alert02-speed` (`.38s`), `--cl-alert02-tone` (per-row), `--cl-alert02-soft` (per-row) |
| controls          | **0** links, **5** `<button>` (4 × dismiss + 1 restore, the restore `hidden` at load), **0** forms, **0** inputs, **0** `<img>`, **4** focusable elements at load |
| headings          | **1 × `h1`** ("Project Atlas", `tabindex="-1"`); the four notice titles are `<p>`, not headings — **do not promote them** |
| blocks            | `<main class="cl-alert02-demo">` → `<section class="cl-alert02">` → `<header>` (heading+sub / count) + `<ul>` **4 `<li>`** (inner → msg + close) + `<div class="__empty" hidden>` + `<footer>` (restore + live `<p>`) |
| roles             | `role="status"` on the violet/green/amber rows, `role="alert"` on the rose row; the narration `<p>` is `role="status"`; the `<ul>` has `aria-label="Project notices"`; the `<section>` is `aria-labelledby` the `h1` |
| content height    | panel **560** at 1,440 inside `main` **900** = the viewport (`min-height: 100vh`) · panel **904** and document **952** at 320 |
| horizontal scroll | **none at any width probed** — `documentElement.scrollWidth === clientWidth` **and** `scrollTo(200,0)` → `scrollX 0` at 320 / 360 / 390 / 398 / 400 / 430 / 480 / 481 / 520 / 560 / 600 / 640 / 700 / 708 / 768 / 900 / 1024 / 1280 / 1440 |
| screenshot        | `alert-02.jpg` **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens it, convert before viewing |

### Layout arithmetic — one centred column, a content-box cap, and a padding step that inverts

```css
main { display: flex; justify-content: center; align-items: flex-start;
       box-sizing: border-box; min-height: 100vh;
       padding: clamp(24px, 7vw, 88px) 16px;
       background: radial-gradient(50% 45% at 10% 0%, #d9d3ff 0%, transparent 70%),
                   radial-gradient(45% 45% at 100% 100%, #cfe9ff 0%, transparent 70%), #eceafd; }
.cl-alert02 { width: 100%; max-width: 620px; padding: 28px; border-radius: 24px;
              background: rgba(255,255,255,.72);
              box-shadow: 0 30px 60px -32px rgba(60,40,160,.35), inset 0 0 0 1px rgba(255,255,255,.8); }
```

`box-sizing` is **not** `border-box` on the panel (the sheet's `*` rule targets its *descendants*), so
`max-width` caps the **content** box and the outer box is `620 + 2 × 28 = 676`. Below the cap the panel
is a **flex item** that shrinks to the container's content box, i.e. `vw − 32` outer — which is why the
content width has three different formulas in three bands:

| vw                 | outer px       | padding  | content px | where it comes from                       |
| ------------------ | -------------: | -------- | ---------: | ----------------------------------------- |
| **≥ 709**          |        **676** | 28       |    **620** | `max-width: 620` on the content box       |
| 708 → 481          |    **vw − 32** | 28       | **vw − 88** | flex shrink to the main content box        |
| **≤ 480**          |    **vw − 32** | 20 / 16  | **vw − 64** | the media query drops the padding to 16    |

Measured on both sides of the two steps: **708 → 676/620**, **707 → 675/619**; **481 → 449/393**,
**480 → 448/416** (content *grows* 23 px while the viewport loses 1), **500 → 468/412**,
**320 → 288/256**.

The vertical padding is the same clamp on the other axis:

| vw          | padding-top      | proof                                        |
| ----------- | ---------------- | -------------------------------------------- |
| ≥ **1,258** | **88 px** (cap)  | 7 vw = 88 at 1,257.14; measured 88 at 1,440  |
| 1,257 → 344 | **7 vw**         | 1024 → **71.68**, 900 → **63**, 768 → **53.76**, 700 → **49**, 480 → **33.6** |
| ≤ **343**   | **24 px** (floor)| 320 → **24**                                 |

**Panel height is a sum, not a constant.** `panelH = padTop + 59 (head) + 18 (head margin) +
Σ item heights + 6 (foot margin) + footH + padBottom`, and each item is
`12 (inner padding-bottom) + msg`, with
`msg = 32 + max(40, 22.5 × titleLines + 2 + 21 × bodyLines)` at ≥ 481 and `28 + max(34, …)` at ≤ 480.
At 1440: `28 + 59 + 18 + 421 + 6 + 0 + 28 = 560` ✓ (items **110.5 / 110.5 / 89.5 / 110.5**).
The footer's height is `0` at load, **39** as soon as the restore pill appears (the pill, not the live
text, sets the row height — one dismissal → panel **488.5**), and **19.5** after a restore, when the
pill is hidden again and only the live line remains (panel **579.5**).

Measured geometry at 1440 (viewport 1440 × 900):

| element        | box                          | note                                    |
| -------------- | ---------------------------- | --------------------------------------- |
| `main`         | 1440 × 900, padding 88/16    | gradient ground                          |
| panel          | **676 × 560** at (382, 88)   | content 620 at (410, 116)                |
| head           | 620 × **59** at (410, 116)   | `display: flex; flex-wrap: wrap; gap: 8px 16px; align-items: flex-end; justify-content: space-between` |
| `h1`           | 231 × 36 at (410, 116)       | 24 / 800 / −0.48 px / 36                 |
| sub            | 231 × 21 at (410, 154)       | 14 / 400 / 21, `margin: 2px 0 0`         |
| count pill     | **88 × 27.5** at (942, 147.5) | right edge 1030 = 410 + 620; bottom 175 = head bottom |
| list           | 620 × **421** at (410, 193)  | 18 px below the head                     |
| item 1/2/4     | 620 × **110.5** at y 193 / **303.5** / 503.5 | pitch 110.5 (no gap)      |
| item 3 (amber) | 620 × **89.5** at y **414**  | one-line body                            |
| icon tile      | **40 × 40** at (426, 209)    | 16 px inset from the row, radius 12      |
| close button   | **36 × 36** at (984, 203)    | `top: 10px; right: 10px`, radius 10      |
| title / body   | 494 × 22.5 at (480, 209) / 494 × 42 at (480, 233.5) | text column 494 = 620 − 16 − 56 − 40 − 14 |
| footer         | 620 × **0** at (410, 620)    | `margin-top: 6px`; **39** while the restore pill shows, **19.5** after a restore |

## Palette — a glass card on a two-bloom lavender ground

| role                | value                       | where                                              |
| ------------------- | --------------------------- | -------------------------------------------------- |
| ground base         | `#eceafd`                   | `body` and the third background layer              |
| bloom top-left      | `#d9d3ff` at `10% 0%`       | `radial-gradient(50% 45% …)`                        |
| bloom bottom-right  | `#cfe9ff` at `100% 100%`    | `radial-gradient(45% 45% …)`                        |
| panel glass         | `rgba(255,255,255,.72)`     | `.cl-alert02`                                       |
| panel hairline      | `rgba(255,255,255,.8)`      | `inset 0 0 0 1px`                                   |
| panel shadow        | `rgba(60,40,160,.35)`       | `0 30px 60px -32px` — a **violet** shadow, not grey |
| ink                 | `#1c1a33`                   | `h1`, titles, count-pill ground, restore ground     |
| muted               | `#5b5876`                   | sub, body copy, close icon, live text, empty text   |
| focus ring          | `#5b3fe0`                   | all three `:focus-visible` rules                    |
| row                 | `#ffffff`                   | `.cl-alert02__msg` — **opaque**, over the glass     |
| row shadow          | `rgba(28,26,51,.06)` + `rgba(28,26,51,.25)` | `0 1px 2px`, `0 8px 20px -12px`  |
| violet tone / soft  | `#6d4aff` / `#efebff`       | base `.cl-alert02__msg` (class `--violet` has no rule) |
| green tone / soft   | `#0f8a5f` / `#e2f6ec`       | `.cl-alert02__msg--green`                           |
| amber tone / soft   | `#b45309` / `#fdf0dc`       | `.cl-alert02__msg--amber`                           |
| rose tone / soft    | `#d0264f` / `#fde6ec`       | `.cl-alert02__msg--rose`                            |
| close hover / active| `#f0eef9` / `#e4e0f6`       | `.cl-alert02__close:hover` / `:active`              |
| restore hover       | `#38345e`                   | `.cl-alert02__restore:hover`                        |
| empty border        | `#c9c3ec`                   | `1.5px dashed` (computes to **1 px** rendered)      |

There is **no tinted row ground**: all four rows are white, and the whole severity signal is the **icon
tile** (`soft` ground + `tone` glyph). That is the structural difference from `alert-01`, and it is the
first thing a port that reuses `alert-01`'s token quads gets wrong.

## Type — one variable face in four declared weights, two binaries

```
font-family: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
```

| element     | size  | weight | tracking | line-height | colour    |
| ----------- | ----- | -----: | -------: | ----------: | --------- |
| `h1`        | 24px  |    800 | `-.02em` |       36 (1.5) | `#1c1a33` |
| sub         | 14px  |    400 |        — |       21 (1.5) | `#5b5876` |
| count pill  | 13px  |    700 |        — |      19.5 (1.5) | `#fff` on `#1c1a33` |
| title       | 15px  |    700 |        — |     22.5 (1.5) | `#1c1a33` |
| body        | 14px  |    400 |        — |       21 (1.5) | `#5b5876` |
| close icon  | 18 px SVG | — | —      |              — | `currentColor` = muted |
| empty text  | 16px  |    600 |        — |       24 (1.5) | `#5b5876` |
| restore     | 14px  |    700 |        — |       21 (1.5) | `#fff`    |
| live        | 13px  |    400 |        — |      19.5 (1.5) | `#5b5876` |

The sheet declares **400 / 600 / 700 / 800** as eight `@font-face` over two binaries, so what the browser
actually has is a `wght` axis; 500 is never declared (but is shipped). Google Fonts serves the same axis:
`fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400..800` → **HTTP 200** (plain
`css2?family=Plus+Jakarta+Sans` also 200). Use **one** `<link>` to the axis, not four files.

## Radii, decoration, motion

| element      | radius | note                                                            |
| ------------ | -----: | --------------------------------------------------------------- |
| panel        |   24px | drops to **20px** at ≤ 480                                      |
| row (`msg`)  |   16px | white, opaque                                                    |
| icon tile    |   12px | drops to **10px** and **34 × 34** at ≤ 480                       |
| close        |   10px | transparent ground until hover                                   |
| count pill   |  999px | `padding: 4px 12px`                                              |
| restore      |  999px | `padding: 9px 16px` → **207 × 39**                               |
| empty box    |   16px | `1.5px dashed #c9c3ec`, `padding: 22px`, `gap: 12px`             |

**Motion budget:** exactly two `transition` declarations and **zero** `@keyframes`.

```css
.cl-alert02__item { transition: grid-template-rows var(--speed) cubic-bezier(.4,0,.2,1),
                    opacity calc(var(--speed) * .6) ease,
                    transform var(--speed) cubic-bezier(.4,0,.2,1); }
.cl-alert02__item.is-leaving { grid-template-rows: 0fr; opacity: 0; transform: translateX(24px); }
.cl-alert02__close { transition: background-color .15s ease, color .15s ease; }
@media (prefers-reduced-motion: reduce) { .cl-alert02 { --speed: 0s }
  .cl-alert02__item.is-leaving { transform: none } }
```

Measured collapse (1440, row 1, 110.5 → 0): **57 ms** → 108.3 px / opacity .82 · **108 ms** → 91.8 / .37
· **158 ms** → 43.9 / .08 · **210 ms** → 21.3 · **260–361 ms** → **12 px** (the inner's `padding-bottom`
is not part of the grid row, so a 12 px sliver survives the collapse) · **411 ms** → `hidden`, height
**0**. The script also arms a **600 ms** fallback timer, so a browser that never fires
`transitionend` still finishes.

## Behaviour — the state machine, exactly

State is four booleans per row (`hidden`, `is-leaving`) plus three outputs (count, empty, restore) and one
narration string. The script is 75 lines; this is all of it that matters:

```
visible()  = items where !hidden && !is-leaving
update(m)  = count.textContent = visible().length;
             empty.hidden   = visible().length > 0;
             restore.hidden = visible().length === items.length;
             live.textContent = m (only when m is given)
finish(li) = li.hidden = true; li.classList.remove('is-leaving')
dismiss(li) = next = the row after li in the CURRENT visible list, else the row before it
              li.classList.add('is-leaving')
              reduced motion ? finish(li) : (wait for transitionend on grid-template-rows, 600 ms cap)
              update(`Dismissed "${title}". ${left} ${left === 1 ? 'notice' : 'notices'} left.`)
              focus(next.close ?? restore ?? heading)
restore.click = unhide all, remove is-leaving, update('All notices restored.'), focus(items[0].close)
```

| event                     | count | empty box  | restore pill | live region                                        | focus           |
| ------------------------- | ----: | ---------- | ------------ | -------------------------------------------------- | --------------- |
| load                      | **4** | hidden     | hidden       | `""` (height 0)                                     | body            |
| dismiss row 1             | **3** | hidden     | **visible**  | `Dismissed "Design review moved to Thursday". 3 notices left.` | row 2's × |
| dismiss row 2             | **2** | hidden     | visible      | `Dismissed "Build 2.14.0 passed QA". 2 notices left.` | row 3's ×     |
| dismiss row 3             | **1** | hidden     | visible      | `Dismissed "Two tasks are past their due date". 1 notice left.` | row 4's × |
| dismiss row 4             | **0** | **visible** (74 px) | visible | `Dismissed "Storage almost full". 0 notices left.` | restore pill |
| click restore             | **4** | hidden     | hidden       | `All notices restored.`                             | row 1's ×      |

Three consequences the port must keep:

1. **`visible()` excludes `is-leaving`**, so the count drops the instant the animation starts, and a
   double-click on the same × cannot decrement twice (the second call finds no visible row at that
   index and `next` is `undefined`).
2. **`restore.hidden` is `n === items.length`**, i.e. the pill appears on the *first* dismissal and
   disappears only when all four are back. It is never shown on load.
3. **Focus is programmatic, and it moves before the animation ends.** Closing the last row focuses a
   button that *became* visible on an earlier dismissal; if it were still hidden, `focus()` would be a
   no-op and focus would fall to `<body>`.

`h1` carries `tabindex="-1"` and a `:focus-visible` ring (`2px solid #5b3fe0`, offset 4, radius 4) — it
is the reference's focus fallback, not an interactive control.

## Responsive matrix (measured; every height is content-driven)

| vw   | content px | panel px  | `h1` | head  | items (1→4)                          | title lines | body lines      | panel height |
| ---: | ---------: | --------: | ---: | ----: | ------------------------------------ | ----------- | --------------- | -----------: |
| 1440 |        620 |  676 × 560 |   24 |    59 | 110.5 · 110.5 · **89.5** · 110.5     | 1·1·1·1     | 2·2·**1**·2     |          560 |
| 1024 |        620 |  676 × 560 |   24 |    59 | 110.5 · 110.5 · 89.5 · 110.5         | 1·1·1·1     | 2·2·1·2         |          560 |
|  900 |        620 |  676 × 560 |   24 |    59 | 110.5 · 110.5 · 89.5 · 110.5         | 1·1·1·1     | 2·2·1·2         |          560 |
|  768 |        620 |  676 × 560 |   24 |    59 | 110.5 · 110.5 · 89.5 · 110.5         | 1·1·1·1     | 2·2·1·2         |          560 |
|  708 |        620 |  676 × 560 |   24 |    59 | 110.5 · 110.5 · 89.5 · 110.5         | 1·1·1·1     | 2·2·1·2         |          560 |
|  700 |        612 |  668 × 581 |   24 |    59 | 110.5 × 4                            | 1·1·1·1     | 2·2·2·2         |          581 |
|  640 |        552 |  608 × 581 |   24 |    59 | 110.5 × 4                            | 1·1·1·1     | 2·2·2·2         |          581 |
|  560 |        472 |  528 × 581 |   24 |    59 | 110.5 × 4                            | 1·1·1·1     | 2·2·2·2         |          581 |
|  520 |        432 |  488 × 602 |   24 |    59 | **131.5** · 110.5 · 110.5 · 110.5    | 1·1·1·1     | **3**·2·2·2     |          602 |
|  481 |        393 |  449 × 644 |   24 |    59 | 131.5 · 131.5 · 110.5 · 131.5        | 1·1·1·1     | 3·3·2·3         |          644 |
|  480 |    **416** |  448 × 570 |   24 |    59 | 127.5 · 106.5 · 106.5 · 106.5        | 1·1·1·1     | 3·2·2·2         |          570 |
|  430 |        366 |  398 × 633 |   24 |    59 | 127.5 × 4                            | 1·1·1·1     | 3·3·3·3         |          633 |
|  425 |        361 |  393 × 655.5 | 24 |    59 | **150** · 127.5 · 127.5 · 127.5      | **2**·1·1·1 | 3·3·3·3         |        655.5 |
|  422 |        358 |  390 × 678 |   24 |    59 | 150 · 127.5 · **150** · 127.5        | 2·1·**2**·1 | 3·3·3·3         |          678 |
|  399 |        335 |  367 × 678 |   24 |  **59** | 150 · 127.5 · 150 · 127.5          | 2·1·2·1     | 3·3·3·3         |          678 |
|  398 |    **334** |  366 × **713.5** | 24 | **94.5** | 150 · 127.5 · 150 · 127.5         | 2·1·2·1     | 3·3·3·3         |        713.5 |
|  397 |        333 |  365 × **734.5** |   24 |  94.5 | **171** · 127.5 · 150 · 127.5        | 2·1·2·1     | **4**·3·3·3     |        734.5 |
|  390 |        326 |  358 × 734.5 | 24 |  94.5 | 171 · 127.5 · 150 · 127.5           | 2·1·2·1     | 4·3·3·3         |        734.5 |
|  360 |        296 |  328 × 776.5 | 24 |  94.5 | 171 · **148.5** · 150 · **148.5**   | 2·1·2·1     | 4·**4**·3·**4** |        776.5 |
|  320 |        256 |  288 × 904 |   24 |  94.5 | **213** · **192** · **171** · **169.5** | **2·2·2·1** | **6·5·4·5** |      904 |

Boundaries worth memorising: **panel cap 709** (708 → 676, 707 → 675) · **padding step 480** (481:
content 393, 480: content **416**) · **head wraps at 398** (399 → head 59, 398 → 94.5: the count pill
drops to its own row, and the head needs **335 px**: 231 h1 block + 16 gap + 88 pill) ·
**title 1 wraps at 425** (text column 253), **title 3 at 422** (250) · **body 1 goes to 4 lines at
397** (text 225) · **body 2/4 at 360** (188) · **`h1` never wraps** (231 px, single line, all widths) ·
**padding-top caps at 1,258 and floors at 343** · **page scrolls vertically only at 320**
(panel 904 + 2 × 24 > 900 → document 952).

## Contrast — every text run clears AA; the four icon glyphs clear 3:1

| pair                                              | ratio | verdict                                   |
| ------------------------------------------------- | ----: | ----------------------------------------- |
| title ink `#1c1a33` on row white                   | 16.87 | pass                                      |
| body / sub / live `#5b5876` on row white           |  6.77 | pass                                      |
| sub `#5b5876` on the glass over the lavender bloom |  6.16 | pass — the page's worst text run           |
| sub on the glass over the blue bloom               |  6.37 | pass                                      |
| count & restore white on `#1c1a33`                 | 16.87 | pass                                      |
| restore hover white on `#38345e`                   | 11.53 | pass                                      |
| violet glyph `#6d4aff` on `#efebff` (non-text)     |  4.42 | pass                                      |
| green glyph `#0f8a5f` on `#e2f6ec` (non-text)      |  3.86 | pass — the thinnest margin                 |
| amber glyph `#b45309` on `#fdf0dc` (non-text)      |  4.47 | pass                                      |
| rose glyph `#d0264f` on `#fde6ec` (non-text)       |  4.35 | pass                                      |
| close icon `#5b5876` on white (non-text)           |  6.77 | pass                                      |
| focus ring `#5b3fe0` on white                      |  6.50 | pass (3:1 required for a focus indicator)  |
| empty border `#c9c3ec` on glass (decoration)       | ~1.3  | decoration only — label + icon carry it    |

No repair is needed. The four `soft` grounds are **not** Tailwind's `violet-50` / `emerald-50` /
`amber-50` / `rose-50`; substituting them shifts every tile by 3–6 ΔE and breaks the family look.

## Screenshot analysis (catalogue image, `alert-02.jpg`, AVIF 1200 × 972)

The listing image is the live render inside a **browser-window mockup** — light chrome, three traffic
lights, an address pill reading `preview.colorlib.com`, on a grey canvas with a soft shadow. Inside the
frame: the lavender-to-blue gradient, one white glass card, **Project Atlas** over
"Mobile app redesign · Sprint 14 of 18", the dark **4 notices** pill on the same row, then the four rows —
violet sun, green tick, amber clock, rose `!` — each with a title, two lines of copy (one for amber) and
a grey **×** at the right edge. **All four × are present** (verified at 1200 × 972: the fourth row's × is
at ~(838, 561) in the crop), so there is no screenshot/live mismatch to resolve here — unlike the
`alert-01` image, the listing shot and the live DOM agree row for row.

Every colour in the mockup matches the measured palette. What the mockup adds is its **frame**: chrome
bar, dots, address pill, outer canvas. **Do not reproduce the frame**, and do not add a band below the
card — the live page ends after the panel (the empty region is the `min-height: 100vh` ground).

## Known reference defects (do not copy)

1. **The pill does not singularise.** At one remaining notice the reference prints **"1 notices"** while
   its own live region correctly says "1 notice left." The port SHALL print "1 notice" in both places
   (`n === 1 ? 'notice' : 'notices'`). This is the only copy defect worth fixing.
2. **`--violet` is an unstyled class.** The markup carries `cl-alert02__msg--violet`; the sheet has no
   such rule — the base `.cl-alert02__msg` block *is* the violet variant. Port the tones as data, not as
   "base + three modifiers + a modifier that does nothing".
3. **`.cl-icon` is a dead selector.** A `height/width/fill` helper with no matching class in the markup.
   Drop it.
4. **Five font files are dead weight.** The archive ships `plus-jakarta-sans-{400,500,600,700,800}` ×
   two ranges, but the sheet declares only 400 / 600 / 700 / 800, and all five files per range are the
   same binary. Do not carry a `font-medium` step into the port.
5. **The README lists an `images/` folder that does not exist** (and the markup has no `<img>`). Do not
   invent an illustration to match the README.
6. **`role="status"` on content present at load** is not an announcement; the rows are static live
   regions. Keep the roles, add no JS to "trigger" them.
7. **The restore pill is a `<button>` that is `hidden` in the markup** — the script relies on the
   `[hidden] { display: none }` rule being present. In React, render conditionally *and* keep the
   attribute, or the first-tab order changes.
8. **`1.5px dashed` computes to a 1 px border at DPR 1.** Rendered weight is 1 px; do not chase 1.5.
9. **The `:where(html) :is(…){ all: revert }` guard block is in the file** (9 rules / 31 selectors). It
   exists only to shield the snippet from a host page's Bootstrap reboot — **do not port it**; Tailwind
   4's preflight is the reset and `all: revert` would undo it.
10. **`h1` has `outline: none` on `:focus`** with a `:focus-visible` ring only. If the port keeps the
    `tabindex="-1"` skip target, keep both rules — otherwise keyboard focus on the heading is invisible.

## Adapting to the repo (deltas the implementer owns)

| reference                                        | in `apps/allclear`                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------- |
| four hard-coded `<li>` + inline SVGs              | a typed `notices` array (`id`, `tone`, `title`, `text`, `icon`) + one `NoticeRow` component; tones in `@theme` |
| 10 × `woff2`, 8 `@font-face`, no 500              | one Google Fonts `<link>`: `family=Plus+Jakarta+Sans:wght@400..800` (verified **HTTP 200**) |
| inline SVG glyphs (20 px, stroke 2–2.6)           | `lucide-react` `Sun` / `Check` / `Clock` / `AlertCircle` at `size={20}`, `strokeWidth={2}`, `aria-hidden` |
| vanilla script, DOM queries, `classList`          | `useState<Set<string>>` of dismissed ids (or a `Record<id, 'in' | 'leaving' | 'gone'>`), one `useEffect`-free focus handoff via refs; **no** `transitionend` listener needed if the row unmounts on animation end via `onTransitionEnd` |
| `is-leaving` class + `hidden` attribute           | `leaving` state + conditional render; keep the 12 px `padding-bottom` on the inner and `min-h-0 overflow-hidden` on it |
| `--cl-alert02-speed` custom property              | a `--speed` token in `@theme` + `motion-reduce:` Tailwind variants **and** a `prefers-reduced-motion` guard in the handler (the CSS alone does not skip the JS path) |
| 5 px/1 px `box-shadow` pair on rows               | `shadow-[0_1px_2px_rgba(28,26,51,.06),0_8px_20px_-12px_rgba(28,26,51,.25)]` |
| content-box `max-width: 620`                      | `max-w-[620px]` **plus** `box-content` (or `max-w-[676px]` border-box with `p-7`); the outer box must measure **676** |
| `:where(html) :is(…){ all: revert }` guard        | dropped — Tailwind preflight                                               |
| `.cl-icon` helper, `--violet` class               | dropped                                                                    |
| no footer                                         | one Component Dock attribution line (repo rule)                            |
| "1 notices"                                       | **fixed** to "1 notice" (defect 1)                                         |

Tailwind 4 notes: the ground is
`bg-[radial-gradient(50%_45%_at_10%_0%,#d9d3ff_0%,transparent_70%),radial-gradient(45%_45%_at_100%_100%,#cfe9ff_0%,transparent_70%),#eceafd]`;
the panel is `w-full max-w-[620px] box-content p-7 rounded-3xl bg-white/[.72] shadow-[0_30px_60px_-32px_rgba(60,40,160,.35),inset_0_0_0_1px_rgba(255,255,255,.8)]`;
the row is `grid grid-cols-[40px_1fr] gap-3.5 p-[16px_56px_16px_16px] rounded-2xl bg-white` with the
close absolutely at `top-2.5 right-2.5 size-9 rounded-[10px]`; the mobile step is
`max-[480px]:p-[20px_16px] max-[480px]:rounded-[20px] max-[480px]:[&_.row]:p-[14px_48px_14px_14px]`.

## Requirements

### Requirement: Page shell, ground and the glass panel

The app SHALL render a single `main` landmark that paints the two-bloom lavender ground, centres one
glass panel, and imposes `min-height: 100vh`, with no navigation, hero, footer band, `<form>`, `<a>` or
image.

#### Scenario: The shell is one centred flex column on a gradient

- **GIVEN** the app rendered at 1440 px
- **WHEN** the page is measured
- **THEN** there SHALL be exactly one `<main>`, containing one `<section>` with one `<header>`, one `<ul>` of four rows, one empty-state block and one `<footer>`
- **AND** `main` SHALL be `display: flex; justify-content: center; align-items: flex-start; box-sizing: border-box; min-height: 100vh; padding: 88px 16px` at 1440 (the clamp `clamp(24px, 7vw, 88px) 16px`)
- **AND** `main` SHALL paint `radial-gradient(50% 45% at 10% 0%, #d9d3ff 0%, transparent 70%), radial-gradient(45% 45% at 100% 100%, #cfe9ff 0%, transparent 70%), #eceafd`
- **AND** `body` SHALL be `#eceafd` with `margin: 0`

#### Scenario: The panel is content-box and measures 676 px

- **GIVEN** the panel at 1440 px
- **WHEN** its box is read
- **THEN** it SHALL measure **676 × 560** at (382, 88) with `box-sizing: content-box`, `max-width: 620px`, `padding: 28px`
- **AND** its content box SHALL be **620 × 504** starting at (410, 116)
- **AND** it SHALL carry `background: rgba(255,255,255,.72)`, `border-radius: 24px`, and the shadow `0 30px 60px -32px rgba(60,40,160,.35), inset 0 0 0 1px rgba(255,255,255,.8)`
- **AND** a border-box `max-w-[620px]` SHALL be treated as a defect: it moves every column 28 px

#### Scenario: Document height is the viewport except at 320

- **GIVEN** the rendered page at 1440 × 900
- **WHEN** heights are read
- **THEN** `document.body.scrollHeight` SHALL read **900** at 1440, 1024, 768, 480, 430 and 390
- **AND** at 320 it SHALL read **952** (panel 904 + 2 × 24 padding) — the only width that scrolls vertically
- **AND** the only element after the panel SHALL be the Component Dock attribution line required by the repo

### Requirement: The head — title, sub-line and count pill

The header SHALL print the project name, a one-line sub-caption and a dark count pill, with the pill
baseline-aligned to the sub-line and **335 px** of content width required to keep them on one row.

#### Scenario: Copy and metrics at 1440

- **GIVEN** the header at 1440 px
- **WHEN** its parts are measured
- **THEN** the `h1` SHALL read "Project Atlas" at **24 px / 800 / −0.48 px tracking / 36 px line box**, ink `#1c1a33`, box 231 × 36 at (410, 116)
- **AND** the sub-line SHALL read "Mobile app redesign · Sprint 14 of 18" at **14 px / 400 / 21**, `#5b5876`, `margin: 2px 0 0`, box 231 × 21 at (410, 154)
- **AND** the head SHALL be a `flex` row with `flex-wrap: wrap; gap: 8px 16px; align-items: flex-end; justify-content: space-between; margin-bottom: 18px`, total height **59**

#### Scenario: The count pill is ink, pill-shaped and baseline-aligned

- **GIVEN** the count pill at 1440
- **WHEN** it is measured
- **THEN** it SHALL measure **88 × 27.5** at (942, 147.5) — right edge **1030** (head right) and bottom **175** (head bottom)
- **AND** it SHALL be `background: #1c1a33; color: #fff; font-size: 13px; font-weight: 700; padding: 4px 12px; border-radius: 999px`
- **AND** its text SHALL read "4 notices" with the numeral in its own `<span>`

#### Scenario: The pill wraps to its own row at 398

- **GIVEN** the head at 399 and then 398 px of content width
- **WHEN** it is measured
- **THEN** at 399 the head SHALL be **59** with the pill at y **79.42** on the same row
- **AND** at 398 the head SHALL be **94.5** with the pill at y **114.86**, on a second row
- **AND** the threshold SHALL be expressed as "content < 335" (399 ↔ 398 at the viewport), never as a media query the source does not have

### Requirement: The four notices

The panel SHALL print the reference's four notices in order violet → green → amber → rose, each a white
row with a tinted icon tile, a title, body copy and a dismiss button, and SHALL keep the amber row
shorter than the others because its body is one line.

#### Scenario: Copy, order and tones

- **GIVEN** the rendered list
- **WHEN** the rows are read
- **THEN** the titles SHALL be "Design review moved to Thursday", "Build 2.14.0 passed QA", "Two tasks are past their due date", "Storage almost full"
- **AND** the bodies SHALL be the Thursday-review reschedule, the 312-passing-test QA note, the two overdue tasks ("Empty cart illustration" / "Push copy for reorders") and the 9.6 GB of 10 GB storage warning — in that order
- **AND** the tones SHALL be violet `#6d4aff`/`#efebff`, green `#0f8a5f`/`#e2f6ec`, amber `#b45309`/`#fdf0dc`, rose `#d0264f`/`#fde6ec`
- **AND** every row ground SHALL be opaque `#fff` — **no** tinted card backgrounds

#### Scenario: Row geometry and the 12 px rhythm

- **GIVEN** the list at 1440
- **WHEN** the rows are measured
- **THEN** rows 1, 2 and 4 SHALL be **110.5** tall at y **193 / 303.5 / 503.5**, and row 3 **89.5** at y **414**
- **AND** the row SHALL be `display: flex; gap: 14px; align-items: flex-start; padding: 16px 56px 16px 16px; border-radius: 16px`
- **AND** the visible gap between rows SHALL be the inner's `padding-bottom: 12px` (there is **no** list `gap`)
- **AND** the icon tile SHALL be **40 × 40** at (426, 209) with radius 12 and a 20 px stroked glyph
- **AND** the close button SHALL be **36 × 36** at (984, 203), i.e. `top: 10px; right: 10px`, radius 10

#### Scenario: Titles may wrap, bodies drive the heights

- **GIVEN** the text column at 425 / 422 / 397 / 360 px
- **WHEN** the rows are measured
- **THEN** row 1's **title** SHALL wrap to 2 lines at 425 (row 150) and row 3's at 422
- **AND** row 1's **body** SHALL reach 4 lines at 397, and rows 2 and 4 at 360
- **AND** no row SHALL carry a `min-height`; at 1440 the three tall rows agree only because their copy is two lines

### Requirement: Dismissing a notice

Dismissing SHALL collapse the row's grid track to `0fr` while fading and sliding it 24 px right, SHALL
update the count and live region immediately, SHALL remove the row after the transition, and SHALL move
focus to the next row's dismiss button.

#### Scenario: The animation is a grid-track collapse

- **GIVEN** a row of height 110.5 at 1440
- **WHEN** its dismiss button is clicked
- **THEN** the row SHALL gain `is-leaving` and animate `grid-template-rows: 1fr → 0fr` over **380 ms** `cubic-bezier(.4,0,.2,1)`, `opacity → 0` over **228 ms**, `transform → translateX(24px)`
- **AND** the inner SHALL carry `min-height: 0; overflow: hidden` — without `min-height: 0` the track does not collapse
- **AND** the row SHALL still measure **12 px** between ~260 ms and the end (the inner's `padding-bottom`), then **0** once removed at `transitionend` (fallback **600 ms**)

#### Scenario: State updates before the animation finishes

- **GIVEN** the first row is dismissed at 1440
- **WHEN** the DOM is read 30 ms later
- **THEN** the row SHALL carry `is-leaving` and still measure **110.5**
- **AND** the count SHALL already read **3**
- **AND** the live region SHALL already read `Dismissed "Design review moved to Thursday". 3 notices left.`
- **AND** focus SHALL already be on the second row's dismiss button (`aria-label="Dismiss: Build 2.14.0 passed QA"`)

#### Scenario: The stack closes up and the pill appears

- **GIVEN** the first row has been dismissed and the transition has ended
- **WHEN** the list is measured
- **THEN** the list SHALL be **310.5** tall (rows 2, 3, 4 at 110.5 / 89.5 / 110.5) and the panel **488.5**
- **AND** the footer SHALL measure **39** — the restore pill's height, not the live line's 19.5
- **AND** the restore pill SHALL be visible from the **first** dismissal onward, not only when the list is empty

#### Scenario: Reduced motion skips the animation entirely

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** a dismiss button is clicked
- **THEN** `--speed` SHALL compute to `0s` and the leaving transform SHALL be `none`
- **AND** the row SHALL be removed **synchronously** (`hidden === true` in the same task), not after 600 ms
- **AND** the count, the live text and the focus move SHALL be identical to the animated path

### Requirement: Empty state and restore

When the last notice is dismissed the list SHALL be replaced by a dashed empty box and a dark restore
pill that brings all four notices back.

#### Scenario: The empty state

- **GIVEN** all four notices dismissed at 1440
- **WHEN** the panel is measured
- **THEN** the count SHALL read **0**, the list SHALL be **0** tall, and the empty box SHALL be **620 × 74** with `padding: 22px; gap: 12px; border: 1px dashed #c9c3ec; border-radius: 16px`
- **AND** it SHALL show a 28 px inbox glyph in `#5b5876` and the text "You are all caught up." at **16 px / 600 / 24**
- **AND** the panel SHALL measure **252**, and focus SHALL be on the restore pill

#### Scenario: Restore brings everything back

- **GIVEN** the empty state
- **WHEN** "Show dismissed notices" is clicked
- **THEN** all four rows SHALL return, the count SHALL read **4**, the empty box and the restore pill SHALL both be hidden
- **AND** the live region SHALL read "All notices restored." and focus SHALL move to the first row's dismiss button
- **AND** the panel SHALL measure **579.5** — 560 plus the **19.5** the live line now costs

#### Scenario: The pill pluralises correctly

- **GIVEN** exactly one notice remains
- **WHEN** the header is read
- **THEN** the pill SHALL read **"1 notice"** and the live region "… 1 notice left."
- **AND** at zero and at four it SHALL read "0 notices" / "4 notices" (the reference says "1 notices" — that defect SHALL NOT be reproduced)

### Requirement: Live-region semantics

The panel SHALL expose one `h1`, four dismiss buttons with per-row accessible names, a labelled list, and
exactly one narration live region.

#### Scenario: Landmarks, labels and roles

- **GIVEN** the rendered page
- **WHEN** the accessibility tree is walked
- **THEN** there SHALL be **1 `h1`**, **0** `h2`–`h6`, and the `<section>` SHALL be labelled by it (`aria-labelledby`)
- **AND** the `<ul>` SHALL carry `aria-label="Project notices"` and each row SHALL be an `<li>`
- **AND** each dismiss button SHALL carry `aria-label="Dismiss: <row title>"` and the restore button SHALL read "Show dismissed notices"
- **AND** the first three rows SHALL be `role="status"` and the rose row `role="alert"`
- **AND** there SHALL be exactly **one** `<p role="status">` that receives the narration text, with **no** `aria-live` on the rows

#### Scenario: Keyboard path and focus rings

- **GIVEN** the page freshly loaded at 1440
- **WHEN** Tab is pressed repeatedly
- **THEN** focus SHALL visit the four dismiss buttons in order and nothing else (the restore pill is `hidden`)
- **AND** each focus SHALL draw `outline: 2px solid #5b3fe0; outline-offset: 2px` (restore: offset 3; `h1`: offset 4 with a 4 px radius)
- **AND** the close button's hover ground SHALL be `#f0eef9` with ink `#1c1a33`, and its active ground `#e4e0f6`

### Requirement: Responsive ladder

The app SHALL reproduce the reference's width ladder exactly: a content cap at 709, a padding step at
480 that widens the content box, and no horizontal overflow at any width.

#### Scenario: The cap and the flex-shrink band

- **GIVEN** viewports 708 and 707
- **WHEN** the panel is measured
- **THEN** at 708 it SHALL be **676** outer / **620** content, and at 707 **675 / 619**
- **AND** from 708 down to 481 the outer box SHALL be `vw − 32` and the content `vw − 88`

#### Scenario: The 480 step widens the panel's content

- **GIVEN** viewports 481 and 480
- **WHEN** the panel is measured
- **THEN** at 481 it SHALL be 449 outer / **393** content with `padding: 28px`
- **AND** at 480 it SHALL be 448 outer / **416** content with `padding: 20px 16px`, radius **20**, icon tiles **34 × 34** radius **10**, row padding `14px 48px 14px 14px`, row gap **12**
- **AND** the panel height SHALL drop **644 → 570** while the viewport loses 1 px

#### Scenario: No horizontal overflow, ever

- **GIVEN** any width in 320, 360, 390, 398, 400, 430, 480, 481, 520, 560, 600, 640, 700, 708, 768, 900, 1024, 1280, 1440
- **WHEN** `scrollTo(200, 0)` is called after load
- **THEN** `window.scrollX` SHALL be **0** and `documentElement.scrollWidth` SHALL equal `clientWidth`
- **AND** at 320 the page MAY scroll vertically (document **952**) but SHALL NOT scroll horizontally

### Requirement: Attribution, naming and repo integration

The app SHALL be a new template named `allclear`, free of any reference to the source design in its own
files, with the repo's deployment and attribution wiring.

#### Scenario: Repo wiring

- **GIVEN** the shipped app
- **WHEN** the repo is inspected
- **THEN** `apps/allclear` SHALL exist with package `@free-react-templates/allclear`, `public/CNAME` = `allclear.free.componentdock.com` and `"homepage"` = `https://allclear.free.componentdock.com`
- **AND** `TEMPLATES.md` SHALL gain the `Alert 02` row in `## Bootstrap Alerts (12)` — between `Bootstrap Accordions` and `Bootstrap Buttons` — using the file's row grammar `[colorlib] · [allclear] · ![preview]`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"

#### Scenario: Provenance stays out of the app

- **GIVEN** every file under `apps/allclear`
- **WHEN** they are grepped (case-insensitive) for the source site's name and for the source slug
- **THEN** there SHALL be **no** hit in code, comments, `index.html` or tests
- **AND** the provenance SHALL live only in this spec, `TEMPLATES.md` and the PR body

## Verification checklist

- [ ] `apps/allclear` exists, package `@free-react-templates/allclear`, `public/CNAME` =
      `allclear.free.componentdock.com`, `"homepage"` = `https://allclear.free.componentdock.com`
- [ ] `npm run verify:app allclear` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-allclear --type spec` is valid
- [ ] measured at 1440: panel **676 × 560** at (382, 88), head **59**, list **421** at (410, 193),
      rows **110.5 / 110.5 / 89.5 / 110.5** at 193 / 303.5 / 414 / 503.5, tiles **40 × 40** at (426, 209),
      close **36 × 36** at (984, 203), pill **88 × 27.5** at (942, 147.5)
- [ ] the panel is `content-box` and measures **676** outer while its `max-width` is 620
- [ ] measured at 708 / 707: **676 / 620** then **675 / 619**; at 481 / 480: **449 / 393** then
      **448 / 416**, panel **644 → 570**
- [ ] measured at 398 / 399: head **94.5 / 59** (count pill on its own row at 398)
- [ ] measured at 397 / 425 / 422 / 360: row 1 body 4 lines / row 1 title 2 lines / row 3 title 2 lines /
      rows 2 and 4 at 4 body lines
- [ ] measured at 320: panel **288 × 904**, content **256**, rows **213 / 192 / 171 / 169.5**,
      `scrollX 0` after `scrollTo(200,0)`, document **952**
- [ ] dismiss row 1: `is-leaving` + count **3** + live text + focus on row 2 within one frame; row removed
      at ~**410 ms** with a **12 px** sliver before it
- [ ] with `prefers-reduced-motion: reduce`: the row is removed synchronously and `--speed` is `0s`
- [ ] all four dismissed: count **0**, empty box **620 × 74**, restore **207 × 39**, panel **252**, focus on restore
- [ ] restore: count **4**, live "All notices restored.", panel **579.5**, focus on row 1's ×
- [ ] exactly one notice left: pill reads **"1 notice"** (the reference's "1 notices" is fixed)
- [ ] contrast: titles 16.87:1, body 6.77:1, sub 6.16:1 worst case, glyphs 3.86–4.47:1, focus ring 6.50:1
- [ ] 1 `h1`, 0 other headings, 5 buttons, 0 links, 0 inputs, 0 `<img>`, 3 × `role="status"` + 1 × `role="alert"`
- [ ] no occurrence of the source slug or the source site's name in any app file
- [ ] `curl -I https://allclear.free.componentdock.com` → 200, `ssl_verify_result=0`
