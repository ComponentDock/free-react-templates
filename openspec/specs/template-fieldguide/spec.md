# Template: Fieldguide (Alert — an admonition set inside a documentation article)

## Purpose

A **documentation article with four stacked admonitions**. One centred 720 px column on a warm
off-white ground (`#fbfaf7`), no card, no shadow, no nav: a 14 px breadcrumb (`Docs / Integrations /
Webhooks`), a **38 px / 700** article title, 17 px prose at 1.65, two numbered `h2` sections
("1. Create an endpoint", "2. Verify the signature"), and **four callouts** — **Note** (blue),
**Tip** (green), **Important** (violet), **Caution** (amber) — each a **4 px left border plus a pale
tint of the same hue**, a **14 px / 700 uppercase label with an 18 × 18 stroked icon**, and 16 px body
copy that may carry an inline code chip or a coloured underlined link. The last callout (**Caution**)
sits directly under **Important** with **no heading of its own**. There is **no script at all** in
this variant — no dismiss, no toggle, no form, no button, no image, no state.

- **Source slug:** `alert-03`
- **ColorLib page:** https://colorlib.com/wp/template/alert-03/ — **HTTP 200, 113,418 B**,
  `<title>` `Alert V03 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V03"**, authoritative
  description *"Note, Tip, Important and Caution callouts placed inside a documentation article about
  webhooks. Free download, no jQuery or plugins."*, "Author: Colorlib", "Released: September 2026",
  "License: CC BY 3.0", `datePublished` **2026-09-25T14:53:37+00:00**, claims *"the download is 267 KB"*
  (measured **272,944 B = 266.5 KiB** ✓), and links its siblings by display name — Alert 01, 02, 04, 07, 08 and 09 (the family runs to twelve). This is the **design name the naming audit
  reads**: ColorLib "Alert V03".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-03/ —
  **HTTP 200, 4,423 B**, `<title>` `Alert V03 | Colorlib`, `lang="en"`, **one** stylesheet, **zero**
  `<script>` elements. The slug-only path `theme/alert-03/` is **404 (9 B)**; `theme/bb/alert-03/` is
  **404 (9 B)**. Same `bootstrap/` prefix ladder as `alert-01`, `alert-02` and the `card` family.
- **Design category:** Alert (documentation admonitions / callout set).
  **Third** of the **`alert` snippet family** (**12** variants) in the **214 snippet variants** of
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/fieldguide`,
  package `@free-react-templates/fieldguide`, CNAME `fieldguide.free.componentdock.com`.

**What this design is.** The `alert` family has so far been a *component* family: `alert-01` a static
severity ladder, `alert-02` a dismiss/restore list. `alert-03` is the same four-tone vocabulary used
the other way round — **as editorial apparatus inside a page of prose**. The callouts are not the
subject; the article is. That inverts every prior assumption:

- **Nothing is interactive.** No dismiss button, no restore, no counter, no live region. The host
  answers `/js/snippet.js` with **9 bytes of text (`Not Found`)** and the archive ships **no `js/`
  directory at all**, while its README still advertises `js/snippet.js` — the file simply does not
  exist. A port that "restores" behaviour from the siblings' specs is inventing it.
- **The tone is carried by two flat values, not by an icon tile.** Border + tint, both from one accent.
  There is no white row, no glass, no pastel tile: `alert-02`'s token shape is the wrong starting point.
- **The callouts are inline-flow blocks, not a list.** They sit at four *different* points in the
  document (after the intro, after §1, and twice after §2 with no heading between the last two), each
  with `margin: 20px 0`, so the page's vertical rhythm is prose → callout → heading → prose → callout.
  Rebuilding them as a `ul` of four equal rows destroys the design's whole argument.
- **One padding step inverts nothing but shrinks the chamfer.** At ≤ 480 the callout padding drops
  `14/18/14/20 → 12/14/12/16` and the article font-size `17 → 16`: unlike `alert-02`, the content box
  does **not** grow, but the callout's inner width jumps by 2 px while the page loses 1.

**The four things a careless port flattens** (each measured here, expanded below):

- **The radii are one-sided.** `border-radius: 0 10px 10px 0` — the left corners are **square**,
  because the 4 px border is the design's spine. Tailwind's `rounded-lg` on all four corners is the
  most common wrong answer.
- **The tint is generated, not chosen.** `color-mix(in srgb, <accent> 8%, #fff)` (10 % for caution),
  behind an `@supports` guard, with `rgba()` fallbacks at `.08/.09/.08/.10`. The resulting hexes are
  `#eef3fd`, `#ecf8f1`, `#f5effe`, `#fbf1e6` — **not** Tailwind's `blue-50`/`green-50`/`violet-50`/
  `amber-50` (`#eff6ff`, `#f0fdf4`, `#f5f3ff`, `#fffbeb`). Measured `backgroundColor` matches the
  `color-mix` arithmetic to the byte.
- **The label is uppercase and tracked `+0.06em`** (0.84 px at 14 px), in the **darker** of the tone's
  two colours, while the border uses the **brighter** one. Two values per tone, both load-bearing.
- **The prose is 17 px, the callout copy is 16 px.** They are different scales; a single `text-base`
  everywhere moves every measured line.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,900** rows, **3,156** lines), so this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `alert-03` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in
that gap are all prepped. Families are worked **in family order, then variant number** — the `card`
family (20) is closed, `alert` is in progress (`alert-01` → **noticeboard**, `alert-02` → **allclear**,
both prepped 2026-10-26).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet** (the `alert-01` prep creates it, and
neither `noticeboard` nor `allclear` has shipped at the time of writing), so this row is the **third**
entry of a section that may not exist yet. It belongs **between `## Bootstrap Accordions (20)`
(line 639) and `## Bootstrap Buttons (20)` (line 663)**, keeping the file's alphabetical section order:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 03** — [colorlib](https://colorlib.com/wp/template/alert-03/) · [fieldguide](https://fieldguide.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-03.jpg)
```

Row-grammar warning, measured on main `505e78e02`: the file is **not** consistent. `## Bootstrap
Accordions` (the section immediately above) uses `[colorlib] · [app] · ![preview]`; `## Bootstrap
Buttons` uses `[colorlib] · ![preview] · [app]` for 12 rows and the app-before-preview order for 7. Use
the **accordion** form (app before preview) because it is the immediate neighbour, and read the
surrounding lines **immediately before pushing** — two implementer streams write this file.

**The name.** `fieldguide` — one lowercase (closed-compound) word, matching the family's
`noticeboard` / `allclear` and the card family's `coursebook` / `roadbook` pattern: a field guide is a
document you read *alongside* the thing it annotates, which is exactly what these four callouts do to
the article. Verified free on main `505e78e02`: `git grep -il fieldguide origin/main` → **0 files**;
no `apps/fieldguide`; no `openspec/specs/template-fieldguide`; no bold name in `TEMPLATES.md`; and the
ColorLib catalogue URLs `colorlib.com/wp/template/fieldguide/` (**404, 63,534 B** error page),
`preview.colorlib.com/theme/fieldguide/` (**404, 9 B**), `preview.colorlib.com/theme/bootstrap/fieldguide/`
(**404, 9 B**) and `theme/bb/fieldguide/` (**404, 9 B**) all miss.

Zero-hit alternatives measured the same run, still free if a later variant needs one: `scholia`,
`postil`, `handnote`, `helpcard`, `notepaper`, `quickref`, `admonish`. Rejected on measurement:
`gloss` (**43** hits), `rubric` (2), `marginalia` (18, app exists), `sidenote` (14), `runbook` (2),
`advisory` (109, app exists), `footnote` (207). Do **not** reuse `noticeboard` (alert-01) or `allclear`
(alert-02), nor the card family's taken names `nameplate`, `marketrow`, `octavo`, `tierline`,
`plaudit`, `statline`, `lodgerow`, `roadbook`, `lexeme`, `coffer`, `showbill`, `coursebook`, `shortlist`,
`baylist`, `tiffin`, `tonearm`, `isobar`, `notebell`, `postbox`, `banter`.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 4,423 B** live (`4,231 B` inside the archive), `<title>` "Alert V03 \| Colorlib", `lang="en"`, **one** stylesheet, **zero** `<script>` |
| preview path      | **`theme/bootstrap/alert-03/`**; the directory URL *is* the page. `theme/alert-03/` **404** (9 B), `theme/bb/alert-03/` **404** (9 B) |
| stylesheet        | `css/style.css?v=3ba02bf9`, **7,108 B**, 274 lines, sha256 `8cfe38727c0217fcdea1da9e3990d4d71d575fc64d202a48710f388f8d7b57bc` |
| script            | **none.** The document has no `<script>`; `/js/snippet.js` answers **HTTP 200 with 9 B — the literal text `Not Found`** (a soft 404); the archive has **no `js/` directory** |
| archive           | `preview.colorlib.com/downloads/free/alert-03.zip`, **200, 272,944 B** (= 266.5 KiB ✓ the page's "267 KB"), **12 entries**: 3 dirs + `index.html` 4,231 B + `css/style.css` 7,108 B + `README.md` 1,262 B + **6 `woff2`**; **no** `js/`, **no** `images/` |
| live ↔ archive    | CSS **identical sha256**; the two HTML files differ only in the `<head>` (`robots` metas, a `cdnjs` `dns-prefetch`, `?v=3ba02bf9`, `fetchpriority="high"`) → **live preview verified; the archive is its un-versioned twin** |
| README            | claims `js/snippet.js  the behaviour, in plain JavaScript` and an `images/` folder — **neither exists** (defect 4) |
| fonts             | **6** `woff2` but only **2 distinct binaries**: `source-sans-3-*-latin.woff2` 3 × **28,792 B** sha256 `ac057a55…`, `*-latin-ext.woff2` 3 × **60,048 B** sha256 `ed3571ea…`. Declared **400 / 600 / 700** × latin / latin-ext = 6 `@font-face` over 2 files. Proved **variable**, not static: one binary declared `font-weight: 400 700` renders the same 38 px string at **584 / 589 / 608 / 603** px for 400 / 500 / 600 / 700, and the shipped discrete declarations give the identical four numbers — so the weights are axis instances. **600 is 5 px *wider* than 700** — do not "fix" it. At 1440 exactly **3 latin faces** load (400, 600, 700) |
| CSS size          | **39** top-level blocks = 6 `@font-face` + 1 `@supports` (2 inner rules) + 1 `@media` (2 inner rules) + **31 style rules**, of which **10** are `:where(html) … { all: revert }` guards → **21 design style rules** (**25** counting the 4 nested in `@supports`/`@media`). **115** selectors: **23** design + **88** guard at top level + **4** nested. **3** custom properties, **1** `transition`, **1** media query (`max-width: 480px`), **1** `@supports`, **0** `@keyframes`, **0** container queries |
| classes           | **15** in the markup, **14** styled; **1 phantom** (`.cl-alert03--note` has **no rule** — the base `.cl-alert03` rule paints the blue tone) and **1 dead selector** (`.cl-icon`, `querySelectorAll('.cl-icon').length === 0` — the eighth snippet in a row with this leftover) |
| custom properties | **3**: `--cl-alert03-accent` (`#2563eb` base), `--cl-alert03-ink` (`#1d4ed8`), `--cl-alert03-tint` (`rgba(37,99,235,.08)`), each re-declared by the three modifier rules |
| controls          | **4** `<a>` (all in the callouts), **0** `<button>`, **0** forms, **0** inputs, **0** `<img>`, **4** focusable elements |
| headings          | **1 × `h1`** (38 px) and **2 × `h2`** ("1. Create an endpoint", "2. Verify the signature"). The four callout labels are `<p>` — **do not promote them to headings** |
| blocks            | `<main class="cl-alert03-demo">` → `<article class="cl-alert03-doc" aria-labelledby>` → crumb `<p>` + `h1` + intro `<p>` + note + `h2` + `<p>` + tip + `h2` + `<p>` + important + caution |
| roles             | each callout is `<div role="note" aria-label="Note|Tip|Important|Caution">` — the **aria-label duplicates the visible label text** (delta 3) |
| content height    | main **1088** at 1,440 (viewport 900) · **≈1435** at 320 (1435–1437 across passes) |
| horizontal scroll | **none at any width probed** — `documentElement.scrollWidth === clientWidth` at 320 / 360 / 375 / 390 / 414 / 420 / 440 / 460 / 468 / 476 / 480 / 481 / 520 / 560 / 600 / 640 / 668 / 680 / 700 / 720 / 740 / 760 / 800 / 840 / 864 / 900 / 1024 / 1120 / 1280 / 1440 / 1600, and `scrollTo(300,0)` → `scrollX 0` at 320 |
| screenshot        | `alert-03.jpg` **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens it, convert before viewing — and it is a **marketing composition**, see below |

### Page arithmetic — one clamp, one cap, one step

```css
body   { margin: 0; background: #fbfaf7;
         font-family: "Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
main   { box-sizing: border-box; min-height: 100vh; padding: clamp(24px, 6vw, 72px) 16px; }
article{ max-width: 720px; margin: 0 auto; color: #22262e; font-size: 17px; line-height: 1.65; }
.cl-alert03 { margin: 20px 0; padding: 14px 18px 14px 20px;
              border-left: 4px solid var(--accent); border-radius: 0 10px 10px 0;
              background: var(--tint); }
```

`article` is `content-box` but carries no padding, so `max-width: 720` **is** its width; its
descendants (`article *`) are forced to `border-box`, so a callout's `width` equals the article's 720
and its padding sits *inside* that. The content column is therefore:

| vw                 | article px | main padding-x | article x | where it comes from                     |
| ------------------ | ---------: | -------------: | --------: | --------------------------------------- |
| **≥ 752**          |    **720** |             16 |  `(vw−720)/2` | `max-width: 720px` + `margin: 0 auto`  |
| 751 → 33           | **vw − 32** |             16 |    **16** | block fills the main content box        |
| **320**            |    **288** |             16 |    **16** | same formula, measured                  |

The vertical padding is the same clamp on the other axis (`6vw`, floor 24, cap 72):

| vw            | padding-top    | proof                                                            |
| ------------- | -------------: | ---------------------------------------------------------------- |
| ≥ **1,200**   | **72 px** (cap)| 6 vw = 72 at 1,200; measured 72 at 1,440, 1,280, **1,200**       |
| 1,199 → 401   | **6 vw**       | 1024 → **61.44**, 900 → **54**, 760 → **45.6**, 640 → **38.4**, 520 → **31.2**, 481 → **28.86** |
| ≤ **400**     | **24 px** (floor) | 320 → **24**; 375 → **24**; 414 → **24.84** (first px above the floor) |

Measured geometry at 1440 (viewport 1440 × 900, first layout pass):

| element            | box                            | note                                        |
| ------------------ | ------------------------------ | ------------------------------------------- |
| `main`             | 1440 × **1088**, padding 72/16 | `min-height: 100vh` (900) is exceeded by content |
| `article`          | **720 × 923.84** at (360, 72)  | 17 / 1.65 = 28.05                            |
| crumb              | 720 × **23.09** at (360, 72)   | `margin: 0 0 10px`, 14 / 23.1                |
| `h1`               | 720 × **43.69** at (360, 105.09) | 38 / 1.15 = 43.7, `margin: 0 0 14px`       |
| intro `p`          | 720 × **56.09** at (360, 162.78) | 2 lines × 28.05, `margin: 0 0 14px`        |
| note callout       | **720 × 107.88** at (360, 238.88) | 2-line body                              |
| `h2` #1            | 720 × **34.64** at (360, 380.75) | 21 / 1.65 = 34.65, `margin: 34px 0 8px`   |
| `p` after §1       | 720 × **56.09** at (360, 423.39) |                                            |
| tip callout        | **720 × 107.88** at (360, 499.48) | 2-line body                              |
| `h2` #2            | 720 × **34.64** at (360, 641.98) |                                            |
| `p` after §2       | 720 × **56.09** at (360, 684.63) |                                            |
| important callout  | **720 × 107.88** at (360, 760.72) | 2-line body                              |
| caution callout    | **720 × 107.88** at (360, 888.59) | **no heading between it and the violet one** |
| label (in a callout) | 23.09 tall at x **384**        | `display: flex; gap: 8px; align-items: center; margin: 0 0 4px` |
| label icon         | **18 × 18** at (384, +2.54 from the label top) | `display: block; flex: none`, `stroke: currentColor` |
| callout body text  | **678** wide at x **384**      | 678 = 720 − 4 (border) − 20 (padding) − 18 (right padding) |
| inline `code` chip | 5 px radius, `padding: 1px 6px`, bg `rgba(34,38,46,.07)` | 13.76 px inside a callout (0.86 × 16), **14.62 px in prose** (0.86 × 17) |

Callout height is a sum, and the sum is exact even though the measured total jitters by up to **0.6 px**
between layout passes (`108.5` and `108.19` were seen for the tip and caution on a second pass, with every
*y* below them shifting by the same amount):

```
calloutH = padTop + labelH + 4 + lines × 26.4 + padBottom
at 1440, 2 lines: 14 + 23.09 + 4 + 52.8 + 14 = 107.89 ✓ (measured 107.88)
at ≤480, 3 lines: 12 + 23.09 + 4 + 79.2 + 12 = 130.29 ✓ (measured 130.27)
```

### The admonition grammar — four tones, two colours and one tint each

```css
.cl-alert03           { --accent: #2563eb; --ink: #1d4ed8; --tint: rgba(37,99,235,.08); }
.cl-alert03--tip      { --accent: #16a34a; --ink: #15803d; --tint: rgba(22,163,74,.09); }
.cl-alert03--important{ --accent: #7c3aed; --ink: #6d28d9; --tint: rgba(124,58,237,.08); }
.cl-alert03--caution  { --accent: #d97706; --ink: #9a4a05; --tint: rgba(217,119,6,.1); }

@supports (background: color-mix(in srgb, red 10%, white)) {
  .cl-alert03            { background: color-mix(in srgb, var(--accent) 8%, #fff); }
  .cl-alert03--caution   { background: color-mix(in srgb, var(--accent) 10%, #fff); }
}
```

| tone          | class                  | border `--accent` | label + link `--ink` | computed tint | rendered `backgroundColor` | icon (24-viewBox, 18 px) |
| ------------- | ---------------------- | ----------------- | -------------------- | ------------- | ------------------------- | ------------------------ |
| **Note**      | *(base rule)*          | `#2563eb`         | `#1d4ed8`            | `#eef3fd`     | `color(srgb .931608 .951059 .993725)` | circle r 9.5 + `M12 11v5.5` + dot |
| **Tip**       | `.cl-alert03--tip`     | `#16a34a`         | `#15803d`            | `#ecf8f1`     | `color(srgb .926902 .971137 .943216)` | lightbulb (3 paths joined) |
| **Important** | `.cl-alert03--important`| `#7c3aed`        | `#6d28d9`            | `#f5effe`     | `color(srgb .958902 .938196 .994353)` | speech bubble + bang stem/dot |
| **Caution**   | `.cl-alert03--caution` | `#d97706`         | `#9a4a05`            | `#fbf1e6`     | `color(srgb .985098 .946667 .902353)` | triangle + bang stem/dot |

The four **`rgba()` tints are the fallback**, not the design: with `@supports` the paint is the
`color-mix` value, and the two disagree in the third decimal (`rgba(37,99,235,.08)` over `#fbfaf7` is
`#eaeef6` / `#e6f2e7` / `#f1ebf6` / `#f8eddf`, whereas `color-mix(… 8%, #fff)` is `#eef3fd` — mixed over **white**, not over the page
ground, because the callout is opaque). Ship the resolved hexes, not a `/8` alpha utility.

Label and border are **different shades on purpose**: border = `--accent` (bright), label text and links =
`--ink` (dark). Links inside a callout are `--ink` too, `600`, underlined.

### Type — one variable face, three declared weights

```
font-family: "Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
```

| element        | size                | weight | tracking  | line-height  | colour     |
| -------------- | ------------------- | -----: | --------: | -----------: | ---------- |
| crumb          | 14px                |    400 |         — |    23.1 (1.65) | `#5f6673`  |
| crumb separator| 14px                |    400 |         — |           — | `#9aa0ab`, `margin: 0 6px` |
| `h1`           | `clamp(28px, 4.4vw, 38px)` | 700 | `-.015em` (−0.57 px @38) | 1.15 | `#22262e` |
| `h2`           | 21px                |    700 |         — |    34.65 (1.65) | `#22262e` |
| prose `p`      | **17px** (16px ≤480) |   400 |         — |    28.05 (1.65) | `#22262e` |
| callout label  | 14px                |    700 | `+.06em` (0.84 px) | 23.1 (1.65), **uppercase** | tone `--ink` |
| callout body   | **16px, always**    |    400 |         — |    26.4 (1.65) | `#22262e` |
| inline `code`  | `.86em`             |    400 |         — | inherit | `#22262e` on `rgba(34,38,46,.07)`, `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |
| callout link   | 16px                |    600 |         — | 26.4 | tone `--ink`, underline 1 px / offset 3 px |

`h2` and `p` inherit the article's 1.65; the `h1` sets its own 1.15. **The callout body never follows
the article's font-size** — it declares 16 px, so at ≤ 480 the prose shrinks to 16 and the callout copy
stays 16 while its *line-height* keeps 26.4 in both bands (16 × 1.65 in its own rule, not inherited).

Google Fonts serves the same axis: `css2?family=Source+Sans+3` → **200**, `css2?family=Source+Sans+3:wght@400;600;700`
→ **200**, legacy `css?family=Source+Sans+3:400,600,700` → **200**. Ship **one** `<link>` with the
discriminated axis.

### Radii, rules, motion

| element            | radius                | note                                                       |
| ------------------ | --------------------- | ---------------------------------------------------------- |
| callout            | `0 10px 10px 0`       | **left corners square** — the spine                        |
| callout left rule  | `4px solid --accent`  | inset border, `border-left` only                           |
| inline `code`      | 5px                   | `padding: 1px 6px`, `overflow-wrap: anywhere`               |
| link focus ring    | 3px                   | `outline: 2px solid var(--accent); outline-offset: 2px`     |

**Motion budget:** exactly **one** `transition` — `text-decoration-thickness .15s ease` on
`.cl-alert03__link`. Measured hover: **1 px → 2 px** underline. **Zero** `@keyframes`, zero transforms,
zero scroll effects; `prefers-reduced-motion` is not handled because there is nothing to reduce (the
underline still thickens under reduced motion — a 1 px decoration growth is not a motion hazard, but the
port MAY gate it).

### Responsive ladder (measured; content-driven heights)

| vw   | article px | `h1` px | `h1` lines | prose px | callout pad | callout inner | callout heights (1→4)     | body lines (1→4) |
| ---: | ---------: | ------: | ---------- | -------: | ----------- | ------------: | ------------------------- | ---------------- |
| 1600 |        720 |      38 |          1 |       17 | 14/18/14/20 |           678 | 107.88 × 4                | 2·2·2·2 |
| 1440 |        720 |      38 |          1 |       17 | 14/18/14/20 |           678 | 107.88 × 4                | 2·2·2·2 |
| 1280 |        720 |      38 |          1 |       17 | 14/18/14/20 |           678 | 107.88 × 4                | 2·2·2·2 |
|  900 |        720 |      38 |          1 |       17 | 14/18/14/20 |           678 | 107.88 × 4                | 2·2·2·2 |
|  760 |        720 |   33.44 |          1 |       17 | 14/18/14/20 |           678 | 107.88 × 4                | 2·2·2·2 |
|  752 |        720 |   33.1  |          1 |       17 | 14/18/14/20 |           678 | 107.88 × 4                | 2·2·2·2 |
|  720 |        688 |   31.68 |          1 |       17 | 14/18/14/20 |           646 | 107.88 × 4                | 2·2·2·2 |
|  680 |        648 |   29.92 |          1 |       17 | 14/18/14/20 |           606 | 107.88 × 4                | 2·2·2·**2** |
|  640 |        608 |   28.16 |          1 |       17 | 14/18/14/20 |           566 | 107.88 · 107.88 · 107.88 · **134.27** | 2·2·2·**3** |
|  620 |        588 |   28    |          1 |       17 | 14/18/14/20 |           546 | 107.88 · 107.88 · **134.27** · 134.27 | 2·2·**3**·3 |
|  600 |        568 |   28    |          1 |       17 | 14/18/14/20 |           526 | 107.88 · 107.88 · 134.27 · 134.27 | 2·2·3·3 |
|  500 |        468 |   28    |          1 |       17 | 14/18/14/20 |           426 | 107.88 · **134.27** · 134.27 · 134.27 | 2·**3**·3·3 |
|  481 |        449 |   28    |          1 |       17 | 14/18/14/20 |           407 | 107.88 · 134.27 · 134.27 · 134.27 | 2·3·3·3 |
|  480 |        448 |   28    |          1 |   **16** | **12/14/12/16** |        **410** | **103.88** · **130.27** · 130.27 · 130.27 | 2·3·3·3 |
|  476 |        444 |   28    |      **1** |       16 | 12/14/12/16 |           410 | 103.88 · 130.27 · 130.27 · 130.27 | 2·3·3·3 |
|  474 |        442 |   28    |      **2** |       16 | 12/14/12/16 |           410 | 103.88 · 130.27 · 130.27 · 130.27 | 2·3·3·3 |
|  440 |        408 |   28    |          2 |       16 | 12/14/12/16 |           374 | 103.88 · 130.27 · 130.27 · 130.27 | 2·3·3·3 |
|  424 |        392 |   28    |          2 |       16 | 12/14/12/16 |           358 | 103.88 · 130.27 · **130.27** · **156.66** | 2·3·**3**·**4** |
|  420 |        388 |   28    |          2 |       16 | 12/14/12/16 |           354 | 130.27 · 130.27 · 156.66 · 156.66 | **3**·3·4·4 |
|  360 |        328 |   28    |          2 |       16 | 12/14/12/16 |           294 | 130.27 · 130.27 · 156.66 · 156.66 | 3·3·4·4 |
|  320 |        288 |   28    |          2 |       16 | 12/14/12/16 |           254 | 156.66 · 156.66 · 183.05 · 183.05 | **4**·**4**·**5**·**5** |

Boundaries worth memorising: **article cap 752** (`min(vw−32, 720)`: 751 → 719, 752 → 720) · **padding-top caps
at 1,200 and floors at 400** · **`h1` clamp floor 28 px up to 636, then `4.4vw`, then 38 px from 864** ·
**`h1` wraps at article 444/443 (vw 476/475)** — the only wrap boundary in the design · **prose 17 → 16
at 480** · **callout padding step at 480**, which widens the inner box 407 → 410 while the viewport
loses 1 px · **body line counts step at article 436 (note), 479 (tip), 391 and 570 (important), 435 and
630 (caution)** · **no horizontal scroll at any width** · at 320 the long CLI chip wraps to **2 lines**
(44.39 px inside a 254 px column) thanks to `overflow-wrap: anywhere`, and the document reaches ≈1435.

### Contrast — every text run clears AA; two of the four borders do not clear 3:1

| run                                  | fg / bg                | ratio | verdict |
| ------------------------------------ | ---------------------- | ----: | ------- |
| prose ink on page ground             | `#22262e` / `#fbfaf7`  | **14.53** | AAA |
| crumb                                | `#5f6673` / `#fbfaf7`  | **5.54** | AA |
| crumb separator (decorative, `aria-hidden`) | `#9aa0ab` / `#fbfaf7` | **2.52** | fine for a `/` that is hidden from AT; **never** use it for text |
| Note label / link                    | `#1d4ed8` / `#eef3fd`  | **6.02** | AA |
| Tip label / link                     | `#15803d` / `#ecf8f1`  | **4.60** | AA — *the* tightest text pair in the design |
| Important label / link               | `#6d28d9` / `#f5effe`  | **6.31** | AA |
| Caution label / link                 | `#9a4a05` / `#fbf1e6`  | **5.61** | AA |
| callout body ink on any tint         | `#22262e` / tint       | **13.48–13.91** | AAA |
| inline code on its chip              | `#22262e` / chip       | **11.83–12.18** | AAA |
| Note / Important border vs own tint  | accent / tint          | **4.65 / 5.06** | fine |
| **Tip / Caution border vs own tint** | accent / tint          | **3.02 / 2.86** | **Tip just clears, Caution misses 3:1** — the border is decorative here (the label text + icon carry the meaning), so this is acceptable **only** because the tone is also named in words. A port that removes the visible label and keeps the colour would fail WCAG 1.4.11 |
| link focus ring vs own tint          | accent / tint          | **4.65–5.06** (Note/Important), 3.02/2.86 (Tip/Caution) | ring is 2 px solid — visible at every tone |

## Defects found in the reference (fix in the port; do not reproduce)

1. **Four dead in-page anchors.** The page holds **4** `<a>` elements and **0** other ids — every
   `href` is a fragment that resolves to nothing:

   | link copy                    | `href`         | target |
   | ---------------------------- | -------------- | ------ |
   | "plan limits"                | `#plans`       | **DEAD** |
   | "Parcelpost CLI"             | `#cli`         | **DEAD** |
   | "verifying signatures"       | `#signatures`  | **DEAD** |
   | "replay failed events"       | `#retries`     | **DEAD** |

   The only id on the page is `cl-alert03-title`, consumed by `aria-labelledby`. **Rule for the port:
   no `href="#…"` may point at a non-existent id** — either give the two `h2`s ids and point the
   relevant links at them, or demote the orphan links to `<strong>`. A test must assert every in-page
   anchor resolves.
2. **`.cl-alert03--note` has no rule.** The first callout carries the modifier in its markup, but the
   blue tone lives on the **base** class. Functionally harmless; structurally it means the base rule is
   doing double duty as the "note" tone. Declare the four tones explicitly in the port.
3. **The README advertises files that do not exist** — `js/snippet.js` and `images/`. There is no
   script and no image; the live host answers `/js/snippet.js` with a 9-byte soft 404. Do not port a
   behaviour file "to match the README".
4. **`.cl-icon` is a dead selector** (0 uses in the markup) — the eighth consecutive snippet in this
   family carrying the leftover. Do not port it.
5. **`role="note"` + `aria-label` duplicates the visible label.** The accessible name (`"Note"`) is the
   same string as the first visible line, so AT users hear it twice. Prefer `aria-labelledby` pointing
   at the label element, or drop the `aria-label` entirely and keep the visible label as content.
6. **The screenshot is a marketing composition, not a browser capture.** `alert-03.jpg` (1200 × 972,
   AVIF) shows a **macOS window chrome** (three traffic-light dots) with a **URL bar reading
   `preview.colorlib.com`**, floating on a **neutral grey ground with a drop shadow**. None of that is
   the design: the page's own ground is `#fbfaf7`, there is no window frame, no shadow and no browser
   UI. **Do not adopt the frame, the grey ground or the shadow** — they would triple the page's visual
   weight and are the single most likely source of a wrong "faithful" build from the screenshot alone.
7. **The Caution callout has no heading of its own.** It follows `Important` with nothing between them
   (two consecutive `role="note"` blocks, different tones). A port that "tidies" this by adding an `h2`
   or by merging the two into one block changes the section count the article's own numbering implies.

## Requirements

### Feature: The article skeleton

#### Scenario: Structure and section order at 1440

- **GIVEN** the rendered page at 1440 × 900
- **WHEN** the document is walked top to bottom
- **THEN** the order SHALL be: crumb `<p>`, `h1`, intro `<p>`, **Note** callout, `h2` "1. Create an endpoint", `<p>`, **Tip** callout, `h2` "2. Verify the signature", `<p>`, **Important** callout, **Caution** callout
- **AND** there SHALL be **exactly 3** headings: one `h1` and two `h2`, with **no** heading between the Important and Caution callouts
- **AND** the `h1` SHALL be the article's accessible name (`aria-labelledby`), and each callout label SHALL remain a `<p>`, never a heading

#### Scenario: The column arithmetic

- **GIVEN** viewports 1600, 1440, 900, 752, 751, 720, 480, 320
- **WHEN** the article box is measured
- **THEN** it SHALL be **720** wide centred from 752 upward (x = `(vw−720)/2`: 440 / 360 / 90 / 16)
- **AND** at 751 and below it SHALL be `vw − 32` at x **16** (719 at 751, 688 at 720, 448 at 480, 288 at 320)
- **AND** `main`'s vertical padding SHALL be `clamp(24px, 6vw, 72px)`: **72** at ≥1200, **61.44** at 1024, **45.6** at 760, **28.86** at 481, **24** at ≤400
- **AND** the callout SHALL span the full article width (**720** at 1440) with its padding **inside** that width (`box-sizing: border-box`)

### Feature: The four admonition tones

#### Scenario: Each tone paints border, label and tint from its own two colours

- **GIVEN** the four callouts at 1440
- **WHEN** `getComputedStyle` and the declared custom properties are read
- **THEN** the tones SHALL be: Note `#2563eb`/`#1d4ed8` over **`#eef3fd`**, Tip `#16a34a`/`#15803d` over **`#ecf8f1`**, Important `#7c3aed`/`#6d28d9` over **`#f5effe`**, Caution `#d97706`/`#9a4a05` over **`#fbf1e6`**
- **AND** `border-left` SHALL be **4px solid `<accent>`** and `border-radius` SHALL be **`0 10px 10px 0`** (square left corners) on all four
- **AND** the tint SHALL be the `color-mix(… 8%, #fff)` result (**10 %** for Caution), **not** the sibling family's white row or pastel icon tile, and **not** a Tailwind `*-50` value
- **AND** no callout SHALL be a `radial-gradient`, glass or shadowed surface

#### Scenario: The label line

- **GIVEN** any callout at 1440
- **WHEN** the label is measured
- **THEN** it SHALL be **14px / 700 / 23.1**, `text-transform: uppercase`, `letter-spacing: 0.84px` (`+0.06em`), coloured in the tone's **`--ink`** (not the border colour)
- **AND** it SHALL be a flex row of `gap: 8px; align-items: center` holding an **18 × 18** icon then the word
- **AND** the icon SHALL be `display: block; flex: none`, stroked in `currentColor` (stroke-width **2**, **2.2** on the bang stems), `aria-hidden="true"` and `focusable="false"`
- **AND** the label SHALL sit **20 px** from the callout's left edge (4 px border + 20 px padding → x **384** at 1440) and **14 px** from its top, with the body starting **4 px** below the label

#### Scenario: Body copy and inline chips

- **GIVEN** a callout carrying an inline `code` chip and a link
- **WHEN** the body is measured
- **THEN** the body SHALL be **16px / 26.4** in every band (it SHALL NOT follow the article's 17→16 step), width **678** at 1440
- **AND** the chip SHALL be `0.86em` of the body (`13.76px` in a callout, `14.62px` in prose), `padding: 1px 6px`, `border-radius: 5px`, `background: rgba(34,38,46,.07)`, mono stack `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`, `overflow-wrap: anywhere`
- **AND** the link SHALL be `600`, `--ink`-coloured, underlined `1px` with `text-underline-offset: 3px`, thickening to **2px** on hover over `.15s ease`

### Feature: Type scale

#### Scenario: The clamps and the 480 step

- **GIVEN** the `h1` at 1440, 900, 864, 863, 640, 636, 320
- **WHEN** its computed font-size is read
- **THEN** it SHALL be **38** at 1440/900/864, **37.972** at 863, **28.16** at 640, **28** at 636 and below
- **AND** it SHALL carry `line-height: 1.15`, `letter-spacing: -0.015em` (−0.57 px at 38) and `font-weight: 700`
- **AND** the `h1` SHALL be **1 line from viewport 476** and **2 lines at 474 and below** — its only wrap boundary
- **AND** the prose SHALL be **17px / 28.05** at ≥481 and **16px / 26.4** at ≤480, while `h2` stays **21px / 34.65** throughout

#### Scenario: The face is one variable cut

- **GIVEN** the shipped stylesheet and the archive's `fonts/`
- **WHEN** the six `woff2` are hashed and a width ladder is measured
- **THEN** there SHALL be **2 distinct binaries** (latin **28,792 B** `ac057a55…`, latin-ext **60,048 B** `ed3571ea…`) declared at **400 / 600 / 700**
- **AND** one binary declared `font-weight: 400 700` SHALL reproduce the shipped advances exactly (**584 / 589 / 608 / 603** px for the same 38 px string at 400 / 500 / 600 / 700), proving a `wght` axis rather than three static files
- **AND** **600 being 5 px wider than 700** SHALL be preserved (it is the font's real instance geometry, not a bug)
- **AND** the app SHALL load the axis with one Google Fonts `<link>` (`family=Source+Sans+3:wght@400;600;700`, verified **200**) and keep the same fallback stack

### Feature: Responsiveness and overflow

#### Scenario: The callout padding step

- **GIVEN** viewports 481 and 480
- **WHEN** a callout is measured
- **THEN** at 481 its padding SHALL be **14px 18px 14px 20px** and its inner width **407**
- **AND** at 480 its padding SHALL be **12px 14px 12px 16px** and its inner width **410** — 3 px wider while the viewport loses 1 px
- **AND** its radius, border width and label size SHALL be unchanged by the step

#### Scenario: Content-driven heights

- **GIVEN** the four callouts at 1440
- **WHEN** they are measured
- **THEN** each SHALL be **≈107.88** tall (2-line bodies), and the exact sum SHALL be `14 + 23.09 + 4 + 2 × 26.4 + 14 = 107.89`
- **AND** at 320 they SHALL be **156.66 / 156.66 / 183.05 / 183.05** (4 / 4 / 5 / 5 body lines)
- **AND** no `min-height` SHALL be applied to force equal heights

#### Scenario: No horizontal overflow

- **GIVEN** any width in 320, 360, 390, 414, 440, 460, 468, 476, 480, 481, 520, 560, 600, 640, 680, 700, 720, 752, 760, 800, 864, 900, 1024, 1280, 1440
- **WHEN** `scrollTo(300, 0)` is called after load
- **THEN** `window.scrollX` SHALL be **0** and `documentElement.scrollWidth` SHALL equal `clientWidth`
- **AND** the long CLI chip SHALL wrap inside the column at 320 (2 lines, 44.39 px) rather than overflow

### Feature: Semantics, links and repo integration

#### Scenario: Every in-page anchor resolves

- **GIVEN** the shipped app
- **WHEN** every `<a href^="#">` is resolved against the document's ids
- **THEN** **every** fragment SHALL reach an existing element (the reference's four dead fragments SHALL NOT be reproduced)
- **AND** links whose sections do not exist SHALL be rendered as `<strong>` emphasis instead of anchors
- **AND** the app SHALL hold **0** buttons, **0** forms, **0** inputs, **0** `<img>` and **0** scripted behaviour — this variant has no JS

#### Scenario: Callout semantics

- **GIVEN** the four callouts
- **WHEN** the accessibility tree is read
- **THEN** each SHALL be a region with `role="note"` whose accessible name is its tone word ("Note", "Tip", "Important", "Caution") — via `aria-labelledby` on the visible label, not a duplicated `aria-label`
- **AND** the icons SHALL be `aria-hidden="true"` so the tone word is announced once
- **AND** tabbing SHALL visit only the surviving links, in document order, each showing `outline: 2px solid <accent>; outline-offset: 2px; border-radius: 3px`

#### Scenario: Repo wiring

- **GIVEN** the shipped app
- **WHEN** the repo is inspected
- **THEN** `apps/fieldguide` SHALL exist with package `@free-react-templates/fieldguide`, `public/CNAME` = `fieldguide.free.componentdock.com` and `"homepage"` = `https://fieldguide.free.componentdock.com`
- **AND** `TEMPLATES.md` SHALL gain the `Alert 03` row as the **third** entry of `## Bootstrap Alerts (12)`, inserted between `## Bootstrap Accordions` and `## Bootstrap Buttons`, using the accordion grammar `[colorlib] · [fieldguide] · ![preview]`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"

#### Scenario: Provenance stays out of the app

- **GIVEN** every file under `apps/fieldguide`
- **WHEN** they are grepped (case-insensitive) for the source site's name and for the source slug
- **THEN** there SHALL be **no** hit in code, comments, `index.html`, tests or CSS token notes
- **AND** the provenance SHALL live only in this spec, `TEMPLATES.md` and the PR body

## Adapting to the repo (deltas — read before writing code)

| reference                                   | port                                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` — 10 guard rules | **drop entirely.** React + Tailwind preflight already normalises; shipping `all: revert` would undo the app's own base styles |
| `.cl-alert03-demo` / `.cl-alert03-doc` class names | `main` + a `prose`-style container component; keep MAX WIDTH **720** and the exact paddings |
| base-rule tone + `--note` phantom class      | four explicit tones (`note`, `tip`, `important`, `caution`) in a typed `Record<Tone, Tokens>`; the note tone is declared, not inherited |
| `role="note"` + `aria-label`                 | `role="note"` + `aria-labelledby` the label, or a `<section aria-labelledby>`            |
| 4 dead fragments                             | 2 links repointed at the two `h2` ids (`#create-an-endpoint`, `#verify-the-signature`); the other 2 demoted to `<strong>` (defect 1) |
| invented brand "Parcelpost", header `X-Parcel-Signature`, CLI `parcel listen` | rename the in-app product (e.g. **Waybill**), header `X-Waybill-Signature`, `waybill listen --forward localhost:3000` — no source or source-brand string in app files |
| `@supports` + `rgba()` fallback tints        | ship the resolved solid tints (`#eef3fd`, `#ecf8f1`, `#f5effe`, `#fbf1e6`) as tokens; both branches render identically in every browser the app supports |
| self-hosted `woff2` (2 binaries)             | Google Fonts `<link>` for `Source+Sans+3:wght@400;600;700`                              |
| `.cl-icon` dead selector                     | not ported                                                                             |
| four hand-rolled 24-viewBox SVGs             | `lucide-react` at **18 px / stroke-width 2** (`Info`, `Lightbulb`, `MessageSquareWarning`, `TriangleAlert`), `aria-hidden`. The reference strokes them `currentColor` inside the label, so they inherit the label's **`--ink`** — keep that inheritance rather than passing the accent |
| screenshot's macOS window + grey ground + shadow | **never** adopted — the page ground is `#fbfaf7` and there is no frame                  |
| no behaviour at all                          | do **not** invent dismiss/toggle/restore. Tests cover anchors, tone tokens, wrap boundaries and the a11y names only |

Copy: paraphrase freely, but keep the *kind* of content — a webhook-integration guide with a Note
(plan limits), a Tip (local forwarding), an Important (signature hashing) and a Caution (72-hour
disable + retries), with the second and third sections numbered `1.` and `2.`.

## Verification checklist

- [ ] `apps/fieldguide` exists, package `@free-react-templates/fieldguide`, `public/CNAME` =
      `fieldguide.free.componentdock.com`, `"homepage"` = `https://fieldguide.free.componentdock.com`
- [ ] `npm run verify:app fieldguide` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-fieldguide --type spec` is valid
- [ ] measured at 1440: article **720** at x **360**, crumb **23.09** at y 72, `h1` **43.69** at y
      105.09, prose **56.09**, each callout **720 ≈ 107.88**, `h2` **34.64**, label **23.09** at x 384,
      icon **18 × 18** at x 384, body **678** wide, `main` **1088**
- [ ] callout geometry: `border-left: 4px`, `border-radius: 0 10px 10px 0`, padding
      `14px 18px 14px 20px`, margin `20px 0`
- [ ] the four tints are `#eef3fd` / `#ecf8f1` / `#f5effe` / `#fbf1e6` (not Tailwind `*-50`)
- [ ] labels are 14/700 uppercase +0.84 px, in `#1d4ed8` / `#15803d` / `#6d28d9` / `#9a4a05`
- [ ] measured at 752 / 751: article **720 / 719**; at 480 / 481: callout inner **410 / 407**, padding
      step applied, prose **16 / 17**
- [ ] measured at 476 / 474: `h1` **1 / 2** lines; clamp **28** at 636, **28.16** at 640, **38** at 864
- [ ] measured at 320: callouts **156.66 / 156.66 / 183.05 / 183.05**, `scrollX 0` after
      `scrollTo(300,0)`, document **≈1435**, long CLI chip wraps to 2 lines
- [ ] link hover thickens the underline **1 px → 2 px**; focus draws a 2 px `<accent>` outline at offset 2
      with a 3 px radius
- [ ] **every** `href="#…"` resolves to an existing id (the reference's 4 dead fragments are fixed)
- [ ] exactly 3 headings (1 `h1`, 2 `h2`), 4 `role="note"` regions named by `aria-labelledby`,
      18 icons `aria-hidden`, **0** buttons/forms/inputs/images/scripts
- [ ] contrast: prose 14.53:1, crumb 5.54:1, labels 6.02 / 4.60 / 6.31 / 5.61, body 13.48–13.91,
      chips 11.83–12.18
- [ ] no occurrence of the source slug or the source site's name in any app file
- [ ] `TEMPLATES.md` carries the `Alert 03` row as the third entry of `## Bootstrap Alerts (12)`
- [ ] `curl -I https://fieldguide.free.componentdock.com` → 200, `ssl_verify_result=0`
