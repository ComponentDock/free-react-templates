# Template: Lakelight (Hero — a holiday-rental hero on warm sand: an eyebrow with a 28 px orange rule, a three-line display headline whose last word is an italic teal `<em>`, three inline proof points, a lake photograph with a 32/32/32/120 radius and a floating white stay card, and a five-column white search panel that rides up over the picture)

## Purpose

**One full-height holiday-rental hero** — the twelfth and last variant of the `hero` snippet family. The eleven
before it sold a designer's portfolio, conference tickets, a restaurant, a newsletter, two physical products, a
hosting platform, a chiropractic clinic and a CSS-drawn alpine film; this one sells **places to sleep beside an
alpine lake**, and it is the family's only page built on a **light warm-paper ground with a two-column
headline-plus-photograph split and a real booking form**.

A `100vh`-floored flex column holds a **transparent header bar** (a rounded-teal tile glyph plus "alpwise", four
nav links and an outlined `Log in` pill), then a **single hero section** laid out as a CSS grid with two named
areas: `copy media` on the first row and a full-width `search` row under it. The copy column carries a **teal
eyebrow behind a 28 × 2 px orange rule**, a **three-line 89.6 px display headline** whose trailing word is an
**italic teal `<em>`**, a three-line sub-paragraph and a **three-item proof row** (`strong` figure + phrase). The
media column is a `<figure>` holding a **portrait 900 × 960 lake photograph** (`object-fit: cover` into a
`clamp(380px, 58vh, 600px)` frame) with a **rounded-top, 120 px bottom-left corner** and a **white stay card**
absolutely parked 28 px from its top-right corner. The search panel is a **white, 24 px-radius, five-column grid**
— `Where`, `Check in`, `Check out`, `Guests`, `Search` — that **overlaps the photograph's foot by 64 px**, offset
**86.4 px** in from the left edge so it never lines up with the copy column.

The palette is five tokens on the source's own sheet: `#f7efe3` sand ground, `#102a27` ink, teal
`#0e5c55`, warm orange `#e0703a` and muted grey-green `#4b5f5b`, with a `#e4d8c6` hairline for the field
separators. Radii are **32/32/32/120** (the photograph), **24** (the search panel), **18** (the card and the
submit), **16** (each field), **12** (the menu button), **10** (each nav link) and **999** (the `Log in` pill).

The document is **exactly the viewport height at a 900-tall viewport for every width from 901 to 1440** (content
floor **781** at 1440), and it **scrolls from 900 px down** because the layout flips to one column there and the
hero grows to **897.84**. The height ladder is **non-monotonic twice**: it dips from **1041 at 640** to **1028 at
547** while the viewport narrows, and the two-column→one-column flip at **900** *shortens* the headline from three
lines to **one** (the copy column doubles in width) before the 2-line and 3-line states come back at 736 and 380.

- **Source slug:** `hero-12`
- **ColorLib page:** https://colorlib.com/wp/template/hero-12/ — **HTTP 200, 113,608 B**, `<title>`
  `Hero V12 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V12"**, `datePublished`
  **2026-09-25T15:09:16+00:00**, meta description _\"A split hero for a holiday-rental site, with the headline, intro
  and three proof points on the left and a large…\"_ plus _\"Free download, no jQuery or plugins.\"_, and a
  download-size claim of **364 KB** (measured archive **372,436 B = 363.7 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V12".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-12/ — **HTTP 200, 5,733 B**,
  `<title>` `Hero V12 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=1a961d00`,
  `fetchpriority="high"`, 15,887 B, sha256 `b48ef8abb85645d141f71bb7cdd0bf35f2ff6f06ce1562db53059d896c51a137`) and
  **one** author `<script>` (`js/snippet.js?v=3b678d27`, 3,555 B, sha256
  `e7580a322d7cfc111e48f6154f0a9d60544d59310924b6444de9f84bdd28bad2` — the menu **and** the search). The slug-only
  path `theme/hero-12/` is **404 (9 B)** and `theme/bb/hero-12/` is **404 (9 B)**: the `bootstrap/` prefix is the
  only live path, as for every card, alert and hero variant before it.
  **Both hashes are identical inside `downloads/free/hero-12.zip` (372,436 B)** → *live preview verified; the
  archive is its un-versioned twin*. `index.html` differs only in the `<head>` (5,493 vs 5,733 B): the archive
  carries no `?v=` query, no `fetchpriority`/`decoding` on the `<img>`, no `dns-prefetch` and no `robots` metas.
  The three relevant `<svg>` icons are inline, and the page loads **no** third-party resource at all.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-12.jpg — **HTTP 200, 62,666 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name. It is a **macOS browser mock-up** (traffic-light chrome,
  a `preview.colorlib.com` URL pill, a drop shadow on a near-white ground) with the page inside at ≈ **1104 px**,
  showing the bar, the copy column, the photograph, the stay card and the search panel — the page's bottom edge is
  not pictured. Do not adopt the frame, the rounded window corners or the shadow.
- **Design category:** Hero (**holiday-rental marketplace hero — a sand-ground split headline + photograph with a
  floating stay card and a five-field booking panel riding over the picture**; variant **12 of 12** and the last of
  the `hero` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/lakelight`, package
  `@free-react-templates/lakelight`, CNAME `lakelight.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1892 | items with NO spec on main: 0` (main `16a887058`; 3,331 spec
folders). So this design comes from `docs/catalog-coverage.md`, which lists **214 snippet variants in 19 families**
that ColorLib's own listing carries and the checklist never recorded. `hero-12` is **variant 12 of 12** in the
`hero` family, worked in variant order: 1 → proscenium (shipped), 2 → afterglow (shipped), 3 → presswork (shipped),
4 → tendril (shipped), 5 → epistle (shipped), 6 → overtone (shipped), 7 → soapbox (shipped), 8 → trattoria
(shipped), 9 → belvedere (shipped), 10 → virga (prepped), 11 → alpenglow (prepped), and this prep is **variant
12 — the family is then complete**.

## Bootstrap Heroes (12)

`## Bootstrap Heroes (12)` opens at **line 830** of `TEMPLATES.md`, between `## Bootstrap Footers (20)` and
`## Bootstrap Modals (20)`. On main `aac34491a` the section holds **ten** rows — Hero 01 → proscenium, Hero 02 →
afterglow, Hero 03 → presswork, Hero 04 → tendril, Hero 05 → epistle, Hero 06 → overtone, Hero 07 → soapbox,
Hero 08 → trattoria, Hero 09 → belvedere, and **Hero 10 → virga, which shipped while this prep was being written**
(it held nine rows at `16a887058`). **Hero 11 (alpenglow) has no row yet** — its prep is unbuilt — so
`TEMPLATES.md` still lags the prep queue by one. The row grammar in this section is
`[colorlib] · ![preview] · [app]`, preview in the middle:

```markdown
- [ ] **Hero 12** — [colorlib](https://colorlib.com/wp/template/hero-12/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-12.jpg) · [lakelight](https://lakelight.free.componentdock.com)
```

Insert it **after** whichever hero rows exist at that moment (after Hero 10 today, after Hero 11 once it lands),
keep that grammar, and **re-read the surrounding lines immediately before pushing** — the implementer streams
rewrite this file and the section grew a row in each of the last six prep runs (Hero 07, 08 and 09 during earlier
preps, Hero 10 during this one).

**The name.** `lakelight` — one lowercase word for the light that comes off an alpine lake, which is literally the
photograph this page is built around and the turquoise in its `#0e5c55` accent. It keeps the snippet families'
closed-single-word pattern (`nameplate`, `octavo`, `wafer`, `virga`, `proscenium`, `soapbox`, `trattoria`,
`belvedere`, `alpenglow`), and it is not the source's invented brand (`alpwise`). Verified free on main
`16a887058`: `git grep -il lakelight origin/main` → **0 files**; no `apps/lakelight`; no
`openspec/specs/template-lakelight`; no `docs/templates/lakelight`; no `**Lakelight**` row in `TEMPLATES.md`; and
all three ColorLib URLs miss — `colorlib.com/wp/template/lakelight/` **404**,
`preview.colorlib.com/theme/lakelight/` **404**, `preview.colorlib.com/theme/bootstrap/lakelight/` **404**.

Checked and **free** for later variants of this family (0 grep hits each, all three URLs 404): **`harborage`**,
**`shoreward`**, **`larchwood`**, **`hollowell`**. **Taken, do not reuse:** `mooring` (7 files), `headland` (8),
`pinecrest` (4), `boathouse` (4), `stillwater` (3), `anchorage` (3), `combe` (4), `moorings` (2).

## Design tokens (read off `css/style.css`, 15,887 B, sha256 `b48ef8abb85645d1…`)

| Token | Value | Where it lands |
| --- | --- | --- |
| `--cl-hero12-sand` | `#f7efe3` | `<body>` and shell ground, the `Log in` hover label, the logo glyph's mountain |
| `--cl-hero12-ink` | `#102a27` | headline, wordmark, **resting nav links** (see the specificity note), labels, input text, card row 1, footer |
| `--cl-hero12-muted` | `#4b5f5b` | sub-paragraph, proof phrases, card place line, **the nav-link colour that never paints** |
| `--cl-hero12-teal` | `#0e5c55` | eyebrow, the italic `<em>`, current nav link, the field focus ring, the status line, the logo tile |
| `--cl-hero12-orange` | `#e0703a` | the eyebrow's 28 px rule, the submit fill, **the 3 px focus ring** |
| `--cl-hero12-line` | `#e4d8c6` | the 1 px separator between search fields |
| `--cl-hero12-gutter` | `clamp(16px, 4vw, 48px)` | bar and hero inline padding (48 at ≥1200, 16 at ≤400) |
| submit text | `#1c0d04` | the 17 px/800 `Search` label on the orange fill |
| submit hover | `#f08a55` | the only hover fill on the page |
| field hover / focus | `#faf6ef` / `#f1f8f6` | the two field states |
| field tint (≤1080) | `#f8f3ea` | every field once the grid becomes 2 × 2 |
| placeholder | `#6a7874` | the `Where` hint and the empty date segments |
| card | `rgba(255,255,255,.95)`, `box-shadow: 0 16px 36px -16px rgba(16,42,39,.45)` | the floating stay card |
| search panel | `#fff`, `box-shadow: 0 30px 60px -30px rgba(16,42,39,.45), 0 0 0 1px rgba(16,42,39,.06)` | the five-column panel |
| nav hover wash | `rgba(16,42,39,.06)` | each nav link on hover |
| mobile panel | `#fff`, `box-shadow: 0 24px 48px -18px rgba(16,42,39,.4)` | the ≤860 dropdown |
| radii | **999** · **120** · **32** · **24** · **18** · **16** · **12** · **10** | `Log in` pill · photo bottom-left · photo's other three corners · search panel · card + submit · each field · menu button · each nav link |
| type | **Urbanist** 400/500/600/700/800, `system-ui` fallback; body **16 px / 1.55** | everything |

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium, `document.fonts.ready` + 600–900 ms)

- **The sheet declares 10 `@font-face` over exactly 2 binaries.** All five weights point at the **same** two files
  (`urbanist-400-latin.woff2` 27,812 B and `urbanist-400-latin-ext.woff2` 16,464 B, sha256 `ce6e0dd8…` /
  `2abe1ed2…` for every weight) → a **variable cut**, not five statics. Proved by canvas A/B on the single binary
  at 100 px: `400` **1267**, `500` **1272**, `600` **1285**, `700` **1297**, `800` **1310**, `900` **1318** — five
  distinct advances, so one file really carries the range.
- **Google's Urbanist matches the archive almost exactly**: the same string at 100 px/800 measures **1309** on
  Google vs **1310** on the archive binary (**0.08 %**), and the h1 as laid out (89.6 px, `letter-spacing: -.045em`)
  measures **1070.17** on both. Unlike `hero-09`'s Bricolage, **no seam needs re-tuning** for the served font.
- **The italic is a real slanted cut, and it is metric-identical to the roman.** The archive declares **no italic**
  face at all (all ten `font-style: normal`), so the reference's `<em>` is a browser synthesis; Google *does* serve
  a distinct italic binary (`…/L0x4DF02iFML4hGCyMqgXS9sjg.woff2`), and `ital,wght@0,400..800;1,400..800` returns
  **HTTP 200**. Measured at 100 px/700: `quieter afg` = **501** in both styles, and the rendered italic is visibly
  slanted. **Consequence for the port:** loading the italic axis is a *free* improvement with **zero** effect on
  line breaks — the h1's three-line seam is unchanged.
- **The base link rule wins again.** `.cl-hero12 a { color: inherit }` is **0,1,1** and beats
  `.cl-hero12__link { color: var(--muted) }` (**0,1,0**), so **all three non-current nav links render ink
  `#102a27`**, not muted. Measured on a *non-current* link ("Experiences"): `rgb(16, 42, 39)`. Only
  `[aria-current="page"]` (**0,2,0**) paints teal — which is exactly what makes the bug look like intent. Hover is
  **0,2,0** too, so the `rgba(16,42,39,.06)` wash and ink text do land.
- **`1.5px` borders compute and lay out as `1px`** — both the `Log in` pill and the 44 px menu button declare
  `1.5px` and measure `border-top-width: 1px`. Same family artefact as alpenglow/soapbox.
- **`ul { margin: 0 }` out-specifies the proof row**: `.cl-hero12 ul` (**0,1,1**) beats `.cl-hero12__proof`
  (**0,1,0**), which is why the source needs `margin-top: 26px !important`. The rendered value is **26**.
- **Every anchor is dead.** The live page holds **six** `<a href>` — the wordmark, four nav links and `Log in` —
  and **all six are `href="#"`**. There is no inner page (no `about.html`, no `stays.html`): the whole reference is
  one `index.html`. One `<h1>`, **zero `<h2>`**, one `<form>`, three `<input>` + one `<select>`, **no `<footer>`**.
- **Assets:** one `<img>` (`images/lake.jpg`, a **900 × 960** portrait JPEG, 142,286 B) displayed at
  **603.44 × 522** with `object-fit: cover` — i.e. it is cropped top-and-bottom at 1440. Three inline `<svg>`
  (the logo mountain, the menu/close pair, the submit magnifier). No icon font, no third-party request.
- **`js/snippet.js` is 93 lines of plain JavaScript** and defines two behaviours plus one fix-up: `initMenu()`
  (adds `is-enhanced`, toggles `is-open` + `aria-expanded` + the button's `aria-label`, closes on a nav-link click,
  on `Escape` (returning focus to the button), on any outside click, and on a `(min-width: 861px)` media change) and
  `initSearch()` (the date defaults, the `min` chain and the submit message — below), then the
  "re-measure every `<select>` once `document.fonts.ready`" display-toggle.

## Design at 1440 × 900 (measured)

- Shell **1440 × 900** — `min-height: 100vh`, flex column, `background: #f7efe3`, `color: #102a27`,
  16 px / 1.55. Document height **exactly 900**: the content floor is **781**.
- **Bar 1440 × 86.8** at (0, 0), transparent, `position: relative; z-index: 5`; inner row **1320 × 86.8** at
  (60, 0) with `padding: 20px 48px` and `gap: 36`.
- **Logo 118.17 × 35.64** at (108, 25.58) — `inline-flex`, `gap: 10`, 23 px/800, `letter-spacing: -.03em`
  (`-0.69px`); its **30 × 30** glyph at (108, 28.39) is an SVG tile `rx=9` in `#0e5c55` with a `#f7efe3`
  two-peak path, and the wordmark sits in the line box, not centred on it.
- **Nav 1069.83 × 46.8** at (262.17, 20) — `flex: 1`, `justify-content: space-between`, `gap: 20`.
  - **Links row 423 × 40.8** at (262.17, 23): four links **72 / 119 / 82 / 138** wide (`padding: 8px 14px`,
    radius **10**, `gap: 4`, 16 px/600).
  - **`Log in` 86 × 46.8** at (1246, 20) — `padding: 10px 20px`, a **1 px** (declared 1.5) ink border, radius
    **999**, 16 px/700; its right edge is the bar's padding edge at **1332**.
  - **Menu button** `display: none` at 1440; it is **44 × 44**, radius 12, shown only ≤860.
- **Main 1440 × 813.2** at (0, 86.8) — `display: flex; flex: 1; align-items: center`, so the hero is **centred in
  the leftover space**: its top is **146.38** = `86.8 + (813.2 − 694.05)/2`, **not** `86.8 + 32`.
- **Hero 1320 × 694.05** at (60, 146.38) — `display: grid`, columns **548.56** and **603.44**
  (`minmax(0,1fr) minmax(0,1.1fr)`), `column-gap: 72`, areas `"copy media" / "search search"`,
  `padding: 32px 48px 64px`.
- **Copy 548.56 × 568.34** at (108, 178.38) — `align-self: center`, `padding-bottom: 72` (content height
  **496.34**; this padding is what makes the row 568.34 and therefore what the photograph's box measures).
- **Eyebrow 247 × 23.25** at (108, 182.75) — `inline-flex`, `gap: 10`, 15 px/700 teal, preceded by a **28 × 2**
  `#e0703a` bar.
- **`h1` 548.56 × 255.33** at (108, 222) — **89.6 px / 85.12** (`.95`), weight **800**,
  `letter-spacing: -4.032px` (`-.045em`), `margin: 16px 0 18px`, in **3 lines** measuring **323.78**
  ("Wake up"), **434.72** ("somewhere") and **269.75** ("quieter."). The `<em>` is **teal, weight 700, italic**.
  The widest line leaves **113.84 px** of the column unused — the block is ragged, never justified.
- **Sub 548.56 × 90.7** at (108, 495.33) — **19.52 px / 30.26**, muted, `max-width: 30em` (**585.6**, i.e. wider
  than the column, so the column wins), **3 lines** measuring **538 / 515 / 30**.
- **Proof 548.56 × 62.69** at (108, 612.03) — flex row, `flex-wrap: wrap`, `gap: 10px 26px`, `margin-top: 26`,
  15 px muted with a 17 px/700 ink number. Three items **147 / 173 / 220** wide: two on row 1 at y **612.03**,
  the third wrapping to y **648.38** because `147 + 26 + 173 + 26 + 220 = 592 > 548.56`.
- **Media 603.44 × 568.34** at (728.56, 178.38) — `<figure>`, `position: relative`, `margin: 0`; it **stretches to
  the copy's height**, so it is **46.34 px taller than the photograph inside it**.
- **Image 603.44 × 522** at (728.56, 178.38) — `height: clamp(380px, 58vh, 600px)` (522 at vh 900, 600 from
  vh 1035, 380 at vh ≤655), `object-fit: cover`, radius **`32px 32px 32px 120px`**.
- **Stay card 257.91 × 109.59** at (1046.09, 206.38) — `position: absolute; top: 28px; right: 28px` against the
  **figure**, not the image; `min-width: 230`, `padding: 14px 16px`, radius **18**, `gap: 2`,
  `rgba(255,255,255,.95)`, `box-shadow: 0 16px 36px -16px rgba(16,42,39,.45)`, 14 px. Three rows: the title + star
  rating **24.02** tall (15.5 px/700; the rating is 600 and **48.91** wide, right-aligned), the place line
  **21.69** (14 px muted), the price **27.89** with an 18 px/700 figure.
- **Search panel 1137.61 × 93.7** at (194.39, 682.72) — `grid-template-columns: 1.5fr 1fr 1fr 1fr auto`,
  `padding: 10`, radius **24**, `#fff`, the two-part shadow, `margin: -64px 0 0 86.4px` (`clamp(0px, 6vw, 96px)`).
  Its left edge is `48 + 86.4 = 134.4` inside the hero content box → **194.39** absolute; its right edge is the
  hero's padding edge at **1332**. So it **overlaps the photograph's bottom 64 px** and never aligns with the
  copy column.
- **Fields 320.86 / 213.92 / 213.91 / 213.91 × 73.7** at y **692.72** — `padding: 10px 18px`, radius **16**,
  `display: flex; flex-direction: column; justify-content: center`.
  - **Label 20.14** tall — 13 px/700, `letter-spacing: .04em`, uppercase.
  - **Control 29.56** tall (`29` for text/select, `31` for the two native date inputs) — border 0, transparent,
    `font: inherit` at **16.5 px/500**, `padding: 2px 0`; placeholder `#6a7874`; the `select` has
    `appearance: none` plus a 14 px chevron data-URI at `right center`.
  - **Separator** on `.field + .field::before` — **1 px** `#e4d8c6`, `left: 0; top: 20%; bottom: 20%`
    (**14.73** each at 73.7), hidden (`opacity: 0`) when either neighbour is hovered or `:focus-within`.
- **Submit 147.02 × 73.7** at (1174.98, 692.72) — **stretched to the row** (its own `min-height` is 64),
  `padding: 0 30`, radius **18**, `gap: 10`, `margin-left: 8`, `#e0703a` with `#1c0d04` 17 px/800 text; the 20 px
  magnifier sits at (1204.98, 719.56). `:active` scales to **.98**.
- **Status line** — `grid-column: 1 / -1`, teal, 16 px/600, **0 tall** while empty; after a successful submit it is
  **1117.61 × 40.8** (padding `10px 18px 6px`) and the document **stays 900** (the hero had 119 px of slack).

## Line boxes and their seams (measured, `document.fonts.ready`)

| Element | 1440 (3 lines) | seam where the count changes |
| --- | --- | --- |
| `h1` (89.6 → 43.2 px) | 3 lines: 323.78 / 434.72 / 269.75 | **1 line** at **736–900**; **2 lines** at **381–735**; **3 lines** at **≤380** *and* at **≥901** |
| sub (19.52 → 16.96 px) | 3 lines: 538 / 515 / 30 | **3 lines** at **369–546**; **2 lines** at **≥547**; **4 lines** at **≤368** |
| proof row | 2 rows | **1 row** at **≥644**; **2 rows** at **344–643**; **3 rows** at **≤343** |

The **900** flip is the one to internalise: the two-column copy is **373.28** wide at 901 and **828** wide at 900,
so the headline loses two line breaks at the exact width where the layout loses a column. A port that keeps the
copy column narrow below 900 will read as wrong even though every other number matches.

## Height ladder (document height at a 900-tall viewport; `min-height: 100vh` masks it ≥901)

`900` at **901–1440** · `985` at **900** · `982` at **880** · `979` at **861** · `976` at **860** · `971` at
**820** · `965` at **768** · `963` at **736** · `1012` at **695–735** · `1005` at **644–694** · `1041` at **640** ·
`1035` at **600** · `1030` at **560** · `1028` at **547–559** · `1052` at **521–546** · `1058` at **520** ·
`1053` at **480–519** · `1049` at **381–479** · `1090` at **369–380** · `1116` at **344–368** · `1148` at
**320–343** · `1147` at **280–319**.

- **Content floor at 1440: 781** (bar 86.8 + hero 694.05). At **1440 × 600** the document is **781** and scrolls
  **181**; at every viewport height **≥781** it is exactly the viewport.
- Three inversions worth knowing: **640 → 547** the page *shrinks* 1041 → 1028 while the viewport loses 93 px;
  **900** the single-column flip adds **85** px (900 → 985); and **380 → 381** the h1 losing its third line is
  worth **41** px (1090 → 1049).
- **No horizontal overflow anywhere**: `scrollWidth === clientWidth` and `scrollX = 0` at 320, 390, 520, 700, 900,
  1080, 1280 and 1440.
- **Short viewports (the one real quirk):** at 1440 × 600 the `<img>` hits its `380` floor inside a **568.34**
  figure, so **124 px of sand** opens between the photograph's bottom (498.8) and the search panel's top (623.1).
  The reference does not compensate; a port may either accept it or set the image height to `100%` of the row —
  **record whichever you choose**.

## Requirements

### Requirement: The page shell and its single section

The template SHALL render exactly one `100vh`-floored shell on the sand ground, holding a header bar, one hero
`<section>` and nothing else, with the hero centred in the space the bar leaves.

#### Scenario: Shell, ground and type at 1440

- **GIVEN** the shell at 1440 × 900
- **WHEN** it is measured
- **THEN** it SHALL be **1440 × 900** with `background: #f7efe3`, `color: #102a27`, `min-height: 100vh`,
  `display: flex`, `flex-direction: column`, 16 px / 1.55, and its document height SHALL be **900**
- **AND** `box-sizing: border-box` SHALL apply to the shell's whole subtree (the reference declares it with `*`).

#### Scenario: The hero is centred by the main column, not by its padding

- **GIVEN** the bar is **86.8** tall and the hero **694.05**
- **WHEN** the hero's top edge is read
- **THEN** it SHALL be **146.38** — `86.8 + (813.2 − 694.05)/2`
- **AND** a port SHALL keep `flex: 1; align-items: center` on the main column: replacing it with
  `padding-top: 32` puts the hero at **118.8** and the photograph 27.58 px higher.

#### Scenario: No footer in the reference

- **GIVEN** the reference ends at the search panel
- **WHEN** the document is scanned
- **THEN** it SHALL contain **no `<footer>`**, one `<h1>`, **zero `<h2>`**, one `<form>`, three `<input>` and one
  `<select>` — the Component Dock footer is a port addition, specified below.

### Requirement: The header bar

The template SHALL render one transparent bar above the hero holding a wordmark, four nav links, a `Log in` pill
and a menu button that only appears at 860 and below.

#### Scenario: Bar composition at 1440

- **GIVEN** the bar at 1440
- **WHEN** its children are measured
- **THEN** the inner row SHALL be **1320 × 86.8** at (60, 0) with `padding: 20px 48px` and `gap: 36`, no border
  and no background of its own
- **AND** the wordmark SHALL be **118.17 × 35.64** at (108, 25.58) — 23 px/800, `letter-spacing: -.03em`,
  `gap: 10`, behind a **30 × 30** rounded-teal glyph
- **AND** the links row SHALL be **423 × 40.8** at (262.17, 23) with four links **72 / 119 / 82 / 138** at
  `padding: 8px 14px`, radius **10**, `gap: 4`
- **AND** the `Log in` pill SHALL be **86 × 46.8** at (1246, 20) — `padding: 10px 20px`, radius **999**, 16 px/700,
  with a border that measures **1 px** although the sheet says `1.5px`
- **AND** the menu button SHALL be `display: none` at 1440 and `44 × 44` (radius 12) when it does appear.

#### Scenario: Link colour, as rendered

- **GIVEN** the four nav links at rest
- **WHEN** a **non-current** link's `color` is read
- **THEN** it SHALL be **`rgb(16, 42, 39)`** (ink), because `.cl-hero12 a { color: inherit }` (0,1,1) out-specifies
  `.cl-hero12__link`'s muted declaration (0,1,0)
- **AND** the `aria-current="page"` link SHALL be teal `#0e5c55` (0,2,0) and hover SHALL paint ink on a
  `rgba(16,42,39,.06)` wash (0,2,0)
- **AND** the port SHALL paint the intended hierarchy (muted for resting links) rather than copy the accident —
  both readings pass contrast (**5.96** muted, **13.32** ink on sand).

### Requirement: The mobile menu

The template SHALL replace the link row with a dropdown panel at 860 and below, opened by a real `<button>` and
closable by click, `Escape`, a nav-link click and any viewport growth past 860.

#### Scenario: Panel geometry and state at 390

- **GIVEN** a 390 px viewport
- **WHEN** the menu button is clicked
- **THEN** the bar SHALL gain `is-open`, the button SHALL report `aria-expanded="true"` and
  `aria-label="Close menu"`, and the panel SHALL be **358** wide at x **16**, hanging from y **80**
  (`calc(100% - 4px)` of the **84** px bar) and **300.36** tall
- **AND** the panel SHALL be `#fff`, radius **20**, `padding: 12`, `gap: 10`,
  `box-shadow: 0 24px 48px -18px rgba(16,42,39,.4)`, with links in a column at `padding: 12` / 18 px and the
  `Log in` pill centred
- **AND** `Escape` SHALL close it, set `aria-expanded="false"` and return focus to the button.

#### Scenario: The menu never traps the page open

- **GIVEN** the panel is open
- **WHEN** a nav link is clicked, or a pointer lands outside the bar, or the viewport is resized past 861
- **THEN** the panel SHALL close and `aria-expanded` SHALL return to `"false"`
- **AND** the panel SHALL be `position: absolute` (it SHALL NOT push the hero down): the document height stays
  **1049** at 390 with the panel open or closed.

### Requirement: The copy column

The template SHALL render an eyebrow, a single display headline with an italic accent word, a sub-paragraph and a
three-item proof row, in that order, inside the grid's `copy` area.

#### Scenario: Eyebrow, headline and sub at 1440

- **GIVEN** the copy column **548.56** wide at 1440
- **WHEN** the three blocks are measured
- **THEN** the eyebrow SHALL be **247 × 23.25** at (108, 182.75) — 15 px/700 teal, `gap: 10`, behind a **28 × 2**
  orange bar drawn as a `::before`
- **AND** the `h1` SHALL be **548.56 × 255.33** at (108, 222) — **89.6 px / 85.12**, weight **800**,
  `letter-spacing: -4.032px`, `margin: 16px 0 18px`, in **3 lines** of **323.78 / 434.72 / 269.75**
- **AND** the last word SHALL be an `<em>` in teal at weight **700**, italic
- **AND** the sub SHALL be **548.56 × 90.7** at (108, 495.33) — **19.52 px / 30.26**, muted, `max-width: 30em`,
  in **3 lines** of **538 / 515 / 30**.

#### Scenario: The proof row wraps inside its own column

- **GIVEN** the three proof items at their natural widths **147 / 173 / 220**
- **WHEN** the row is measured at 1440
- **THEN** it SHALL be **548.56 × 62.69** at (108, 612.03) with `gap: 10px 26px` and `margin-top: 26`
- **AND** items 1 and 2 SHALL share y **612.03** and item 3 SHALL wrap to y **648.38**, because
  `147 + 26 + 173 + 26 + 220 = 592` exceeds **548.56** by 43.44
- **AND** the row SHALL collapse to **1 row** from a copy width of **644** (viewport **644**) and to **3 rows** at
  **≤343**.

#### Scenario: The headline's line count is not monotonic

- **GIVEN** the responsive ladder
- **WHEN** the `h1`'s line count is read across widths
- **THEN** it SHALL be **3** at 1440–901, **1** at 900–736, **2** at 735–381 and **3** at **380** and below.

### Requirement: The photograph and the stay card

The template SHALL render the hero photograph in a figure with a large bottom-left corner radius and park a white
stay card inside its top-right corner, with the card transitioning to a full-width bar on phones.

#### Scenario: The framed photograph at 1440

- **GIVEN** the media column **603.44** wide
- **WHEN** the figure and the image are measured
- **THEN** the `<figure>` SHALL be **603.44 × 568.34** at (728.56, 178.38) — stretched by the grid row, therefore
  **46.34 taller** than the image
- **AND** the `<img>` SHALL be **603.44 × 522** at (728.56, 178.38) with `object-fit: cover`, `display: block`,
  radius **`32px 32px 32px 120px`**, and a `width`/`height` attribute pair of **900 × 960** (its true aspect)
- **AND** the photograph SHALL be a placeholder (`picsum.photos/seed/lakelight-1/900/960`), never the source asset.

#### Scenario: The stay card

- **GIVEN** the figure at 1440
- **WHEN** the card is measured
- **THEN** it SHALL be **257.91 × 109.59** at (1046.09, 206.38) — `position: absolute; top: 28px; right: 28px`,
  `min-width: 230`, `padding: 14px 16px`, radius **18**, `gap: 2`, `rgba(255,255,255,.95)`,
  `box-shadow: 0 16px 36px -16px rgba(16,42,39,.45)`
- **AND** its three rows SHALL be **24.02** (title 15.5 px/700 + a right-aligned 48.91-wide rating, 600),
  **21.69** (place, 14 px muted) and **27.89** (an 18 px/700 figure over a 14 px suffix)
- **AND** from **520** down it SHALL pin to `top: 14px; right: 14px; left: 14px` with `min-width: 0` and
  `padding: 12px 14px`, measuring **450.41** at 520 and **260** at 320.

#### Scenario: The short-viewport gap is accepted or fixed explicitly

- **GIVEN** a 1440 × 600 viewport
- **WHEN** the image and the panel are measured
- **THEN** the image SHALL be **380** tall (the clamp floor) inside a **568.34** figure, leaving **124 px** of sand
  between the photograph's foot (498.8) and the panel's top (623.1)
- **AND** the port SHALL either reproduce that gap or stretch the image to the row — and say which in the PR.

### Requirement: The search panel

The template SHALL render a white five-column booking panel that overlaps the photograph's foot and becomes a
2 × 2 grid with a full-width submit below 1081.

#### Scenario: Panel geometry at 1440

- **GIVEN** the hero at 1440
- **WHEN** the panel is measured
- **THEN** it SHALL be **1137.61 × 93.7** at (194.39, 682.72) — `grid-template-columns: 1.5fr 1fr 1fr 1fr auto`,
  `padding: 10`, radius **24**, `#fff`,
  `box-shadow: 0 30px 60px -30px rgba(16,42,39,.45), 0 0 0 1px rgba(16,42,39,.06)`,
  `margin: -64px 0 0 86.4px` where the left offset is `clamp(0px, 6vw, 96px)`
- **AND** it SHALL overlap the photograph's bottom **64** px and its right edge SHALL be the hero's padding edge
  (**1332**).

#### Scenario: One field's anatomy

- **GIVEN** the `Where` field, **320.86 × 73.7** at (204.39, 692.72)
- **WHEN** its parts are measured
- **THEN** it SHALL have `padding: 10px 18px`, radius **16**, and a `:hover` ground of **`#faf6ef`**
- **AND** the label SHALL be **20.14** tall at 13 px/700, `letter-spacing: .04em`, uppercase, and the control
  **29.56** tall at 16.5 px/500 with no border, no outline and a transparent ground
- **AND** `:focus-within` SHALL paint **`#f1f8f6`** plus `inset 0 0 0 2px #0e5c55` on the wrapper while the input's
  own `outline` stays `none`
- **AND** at **≤1080** every field SHALL sit on **`#f8f3ea`** and lose its separator.

#### Scenario: Separators, submit and status

- **GIVEN** the four fields and the button at 1440
- **WHEN** the row is measured
- **THEN** each `.field + .field` SHALL carry a **1 px** `#e4d8c6` bar at `left: 0; top: 20%; bottom: 20%`, hidden
  while either neighbour is hovered or focused
- **AND** the submit SHALL be **147.02 × 73.7** at (1174.98, 692.72) — stretched by the row, `min-height: 64`,
  `padding: 0 30`, radius **18**, `gap: 10`, `margin-left: 8`, fill **`#e0703a`**, text **`#1c0d04`** at 17 px/800,
  a 20 px magnifier, hover **`#f08a55`**, `:active` `scale(.98)`
- **AND** the status `<p>` SHALL be a full-width grid child, teal 16 px/600, **0 tall** when empty and
  **1117.61 × 40.8** with `padding: 10px 18px 6px` once it carries text.

### Requirement: The booking logic and its message

The template SHALL default the dates, keep them consistent as the user edits them, and report the search in the
reference's exact sentence shape — and SHALL NOT repeat the reference's stale-message defect.

#### Scenario: Defaults on load

- **GIVEN** any date
- **WHEN** the page loads
- **THEN** `check in` SHALL be `today + 21` days, `check out` SHALL be `check in + 3`, both formatted `YYYY-MM-DD`
  and computed at **`T12:00:00`** local so a DST change cannot shift a day
- **AND** `check in.min` SHALL be today and `check out.min` SHALL be `check in + 1`
- **AND** the guests select SHALL default to **2 guests** and offer `1 / 2 / 3 / 4 / 5–6 / 7–8`.

#### Scenario: Changing the check-in rolls the check-out forward

- **GIVEN** a check-in of 2026-12-02 and a check-out of 2026-12-05
- **WHEN** the check-in is set to 2027-06-01
- **THEN** `check out.min` SHALL become **2027-06-02** and a check-out that now precedes it SHALL be **rolled
  forward to that date** (measured: 2027-06-02).

#### Scenario: The submit sentence

- **GIVEN** `where` = "Chamonix, France", the default dates and 2 guests
- **WHEN** the form is submitted
- **THEN** the status SHALL read
  **"Searching stays in Chamonix, France for 2 guests, 2 Dec to 5 Dec (3 nights)…"** — places, guests label,
  `d MMM` dates in **en-GB** and `Math.round((out − in) / 86400000)` nights
- **AND** it SHALL print **`night`** for a difference of 1 and **`nights`** otherwise, and end with **U+2026**
- **AND** the document height SHALL stay **900** at 1440 (the status fits in the hero's slack).

#### Scenario: The message must never go stale (a reference defect the port fixes)

- **GIVEN** a successful submit, then `where` cleared or a check-out earlier than its `min`
- **WHEN** the form is submitted again
- **THEN** the reference **leaves the previous sentence in place** while `checkValidity()` is `false` — verified
  both ways
- **AND** the port SHALL instead clear the line and state the problem (e.g. "Choose a destination") so the status
  always describes the current attempt, and SHALL keep it wired to `role="status"`.

### Requirement: The responsive ladder

The template SHALL implement exactly four content breakpoints — **1080**, **900**, **860** and **520** — and no
others.

#### Scenario: 1080 — the panel becomes 2 × 2

- **GIVEN** a 1080 px viewport
- **WHEN** the panel is measured
- **THEN** it SHALL be `grid-template-columns: 1fr 1fr` with `gap: 6`, `margin-left: 0`, and be **993.63 × 251.41**
  (four fields on two rows, then the submit spanning both columns at `margin: 2px 0 0`)
- **AND** the submit SHALL be **973.63 × 64** and every field SHALL sit on `#f8f3ea`.

#### Scenario: 900 — one column, and the headline collapses to one line

- **GIVEN** a 900 px viewport
- **WHEN** the hero is measured
- **THEN** it SHALL be a single column with areas `copy / media / search`, **828** wide copy, the copy's
  `padding-bottom` reduced to **28**, the image **360** tall with radius **`28px 28px 28px 80px`**, and the panel
  at `margin: -48px 12px 0`
- **AND** the `h1` SHALL be **1 line** at **65.8 px** — the width is what removes the breaks, not a font change.

#### Scenario: 860 — the bar swaps to a menu button

- **GIVEN** a 860 px viewport
- **WHEN** the bar is measured
- **THEN** the button SHALL appear at **44 × 44** and the bar SHALL settle at **84** tall (the document loses
  **3** px, 979 → 976, while the viewport loses 1).

#### Scenario: 520 — the card spans and the panel stacks three rows

- **GIVEN** a 520 px viewport
- **WHEN** the phone layout is measured
- **THEN** the image SHALL be **300** tall with radius **`24px 24px 24px 64px`**, the card **450.41 × 105.59** at
  `top 14 / left 14 / right 14`, and the panel **478.41 × 312.81** at `margin: -40px 0 0`, `padding: 8`,
  radius **22**
- **AND** `Where` SHALL span both columns, `Guests` SHALL span both columns, and `Check in`/`Check out` SHALL share
  one row at **228.2** each
- **AND** the submit SHALL be a full-width **56** px bar.

### Requirement: Contrast and focus

The template SHALL keep the reference's palette and text ratios, and SHALL repair its two focus/placeholder
failures rather than copy them.

#### Scenario: Text ratios to hold

- **GIVEN** the five tokens
- **WHEN** every pair on the page is computed
- **THEN** ink on sand SHALL be **13.32 : 1**, muted on sand **5.96**, teal on sand **6.87**, muted on the white
  card **6.80**, the submit label on orange **5.91** and the teal status on white **7.83**
- **AND** the ink-on-white card title SHALL be **15.19**.

#### Scenario: The two reference failures

- **GIVEN** the reference's focus ring and placeholder
- **WHEN** they are measured
- **THEN** the **3 px `#e0703a` ring at 3 px offset** SHALL be **2.81 : 1** on the sand ground (links, `Log in`, the
  menu button) — below the **3 : 1** a focus indicator needs — and **3.21 : 1** on the white panel, which passes
  only on the button
- **AND** the placeholder **`#6a7874`** SHALL be **4.61** on white but **4.17** on the `#f8f3ea` field ground and
  **4.28** on the `#faf6ef` hover ground
- **AND** the port SHALL darken both (e.g. ring `#b4551f` — verify ≥ 3 : 1 on sand **and** on white; placeholder
  `#566258` or darker) and SHALL assert the new pairs in a test.

#### Scenario: Keyboard reach

- **GIVEN** the port at 1440
- **WHEN** `Tab` is pressed through the page
- **THEN** focus SHALL pass wordmark → four links → `Log in` → four fields → submit, each with a visible ring
- **AND** the fields SHALL show the wrapper's `#f1f8f6` + 2 px teal `inset` ring, never the UA outline.

### Requirement: Motion

The template SHALL animate nothing but the reference's own transitions, and SHALL honour the reduced-motion
preference.

#### Scenario: The whole motion budget

- **GIVEN** the page at rest
- **WHEN** every animatable property is inspected
- **THEN** the only motion SHALL be `transition` declarations — `.2s` on the nav links' colour/wash, the `Log in`
  pill, the fields' ground, the submit's fill, and `.15s` on the submit's `transform`
- **AND** there SHALL be **no `@keyframes`** and no JavaScript animation on the page
- **AND** under `prefers-reduced-motion: reduce` the sheet's single reset SHALL force `animation: none` and
  `transition: none` with `!important` on the whole subtree, leaving heights unchanged.

### Requirement: The Component Dock footer

The template SHALL carry a footer that names and links Component Dock, because the reference has no footer at all.

#### Scenario: A slim branded strip

- **GIVEN** the reference ends at the search panel with no `<footer>`
- **WHEN** the port renders
- **THEN** it SHALL add one slim footer inside the shell, below the hero, built from the same tokens (13 px muted,
  no new colour, no new radius) containing a single link to `https://www.componentdock.com/` labelled
  **"Component Dock"**
- **AND** the footer SHALL NOT contain the word ColorLib and SHALL NOT sit on its own background band
- **AND** the document SHALL grow only by the footer's own height (≈ 40–56 px), recorded as a delta against the
  ladder above — the "exactly 900 at 900" property is lost by that amount and that is accepted.

## Adapting to the repo (deltas — read before writing code)

1. **Name and identity.** `apps/lakelight`, package `@free-react-templates/lakelight`, `public/CNAME` =
   `lakelight.free.componentdock.com`, `"homepage"` = `https://lakelight.free.componentdock.com`. The brand and its
   copy are invented anew: the source's **"alpwise"**, its "Wake up somewhere quieter." headline, its
   Chamonix/Julian-Alps sub-paragraph, its **4,200 / 4.9 / Free cancellation** proof figures, its
   "Boathouse on the lake · Braies, South Tyrol · sleeps 4 · €186" card and its **Dolomites, Chamonix, Julian Alps,
   Bernese Oberland, Tyrol** datalist SHALL NOT appear anywhere in `apps/`.
2. **Copy shape, not copy.** Keep the *kind* of text: a teal eyebrow shaped `"Hand-picked <noun> in the <range>"`
   behind a 28 px rule, a display headline of **three short words + one italic accent phrase ending in a period**,
   a three-line sub naming a range, a kind of property and a quality promise, three proof points shaped
   `"<figure> <phrase>"` (a thousands-separated count, a one-decimal rating, a single-word policy), a stay card of
   `name · sleeps n` over `place · sleeps n` over `€N / night`, and a five-field search. Pick your own mountain
   range, five destinations, currency number and ratings.
3. **Fonts:** load **Urbanist** from Google Fonts with the italic axis —
   `https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400..800;1,400..800&display=swap`
   (**HTTP 200**, verified; the roman URL without `ital` is also 200). One variable face per style over two
   subsets, which matches the reference's two binaries; the italic is a **free** upgrade the reference synthesises
   and its advances are identical, so no line box moves. Verified: Google 800 = **1309** vs archive **1310** at
   100 px — no seam re-tuning needed, unlike `hero-09`. No second face, no mono.
4. **Icons:** the three inline SVGs become `lucide-react` — `Mountain` (30, the logo tile's path), `Menu` and `X`
   (22, the two menu states), `Search` (20, the submit). Keep them `aria-hidden` except where the spec gives a
   label. The `select` chevron stays a CSS `background-image` data URI (or `ChevronDown` positioned absolutely) —
   it is drawn inside the control, not next to it.
5. **Anchors:** the reference has **six dead `#`** and the port SHALL leave none. Give the shell `id="top"`, the
   hero `id="stays"` and the proof row `id="proof"`; then the wordmark → `#top`; "Stays" → `#stays`;
   "Experiences" and "Guides" → `https://www.componentdock.com/`; "List your place" and `Log in` →
   `https://www.componentdock.com/` with `target="_blank" rel="noreferrer noopener"`. Keep exactly one
   `aria-current="page"` on "Stays", and keep the search a real `<form>` with a `<button type="submit">`.
6. **A11y baseline to preserve, not rebuild:** one `h1`; a labelled `<nav aria-label="Main">`; a real `<button>`
   for the menu with `aria-expanded` + `aria-controls` and a label that flips to `"Close menu"`; four `<label for>`
   pairs; `<datalist>` suggestions on the destination field; `role="status"` on the message (the reference has the
   role but leaves stale text — fix the text, keep the role); the rating's `aria-label="Rated 4.96 out of 5"`
   alongside its visible `★ 4.96`.
7. **The specificity artefact is a bug to fix, not to copy.** `.cl-hero12 a { color: inherit }` is **0,1,1** and
   beats `.cl-hero12__link`'s muted (**0,1,0**), so **all three non-current nav links render ink** — measured on
   "Experiences", not on the `aria-current` one, which is teal legitimately and makes the bug look like intent. In
   React set the colour on the element (`text-muted` on a resting link) so the intended hierarchy paints; both
   readings pass contrast (**5.96** vs **13.32**).
8. **`margin-top: 26px !important` on the proof row** exists only because `.cl-hero12 ul { margin: 0 }`
   (0,1,1) beats the single-class rule. In Tailwind put `mt-[26px]` on the `ul` and drop the `!important`, but keep
   the **26**.
9. **`main { align-items: center }` is load-bearing.** It centres the **hero** in the 813.2 px main column, which
   is why the hero's top is **146.38** and not `86.8 + 32`. The hero's `32`/`64` paddings only shape its box.
10. **The card is positioned against the figure, not the image.** The figure stretches to the copy's height
    (**568.34**) while the `<img>` is `clamp(380px, 58vh, 600px)` (**522**), so the card's `top: 28` measures from
    the figure's top — identical at 1440 because both start at y 178.38, but the gap below the image is real and
    the panel's `-64` margin is what hides it. If you make the image fill the figure, re-check the panel overlap.
11. **`1.5px` borders render `1px`.** Do not chase the missing half-pixel on the `Log in` pill or the menu button;
    write `border` (1 px) and match the measurement.
12. **Tokens live in `@theme`** (Tailwind 4): `--color-sand #f7efe3`, `--color-ink #102a27`, `--color-muted
    #4b5f5b`, `--color-teal #0e5c55`, `--color-orange #e0703a`, `--color-line #e4d8c6`, `--color-field #f8f3ea`,
    `--color-field-hover #faf6ef`, `--color-field-focus #f1f8f6`, `--color-on-orange #1c0d04`, `--color-submit-hover
    #f08a55`, `--color-placeholder <darkened>`, `--color-ring <darkened>`, `--radius-photo 32px/32px/32px/120px`,
    `--gutter clamp(16px,4vw,48px)`. Use them through classes; no raw hex in components.
13. **Dates are local strings, not `Date` objects in state.** Keep the reference's `iso()` / `addDays()` pair (both
    at `T12:00:00`) and compute the night count with `Math.round`, so DST and timezone cannot move a default or a
    label. Format the message with `toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })`.
14. **No new dependencies:** one face, four icons, no carousel, no chart, no date-picker library (the native
    `<input type="date">` is the control). **No `package-lock.json` hand-editing** — add the workspace with
    `npm install` at the root.

## Verification checklist

- [ ] `apps/lakelight` exists, package `@free-react-templates/lakelight`, `public/CNAME` =
      `lakelight.free.componentdock.com`, `"homepage"` = `https://lakelight.free.componentdock.com`
- [ ] `npm run verify:app lakelight` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-lakelight --type spec` is valid
- [ ] no source string survives: `grep -riE 'alpwise|quieter|Chamonix|Julian Alps|Braies|Boathouse|4,200|4\.96'
      apps/lakelight` → 0 hits
- [ ] measured at 1440 × 900: shell **1440 × 900** (doc **900**); bar inner **1320 × 86.8** at (60, 0) with
      `padding: 20 48`, `gap: 36`; logo **118.17 × 35.64**; links **72 / 119 / 82 / 138** at h **40.8**; `Log in`
      **86 × 46.8** at (1246, 20); main **1440 × 813.2**; hero **1320 × 694.05** at (60, **146.38**); copy
      **548.56 × 568.34**; eyebrow **247 × 23.25**; `h1` **548.56 × 255.33** at (108, 222) in **3 lines**
      (323.78 / 434.72 / 269.75) at **89.6 / 85.12**; sub **548.56 × 90.7** (3 lines, 538 / 515 / 30); proof
      **548.56 × 62.69** in **2 rows**; media **603.44 × 568.34**; img **603.44 × 522**, radius **32 32 32 120**;
      card **257.91 × 109.59** at (1046.09, 206.38); panel **1137.61 × 93.7** at (194.39, 682.72); fields
      **320.86 / 213.92 / 213.91 / 213.91** at h **73.7**; submit **147.02 × 73.7**
- [ ] at **1080** the panel is **993.63 × 251.41** on two rows with a full-width **64** px submit; at **900** the
      hero is one column with an **828** copy, a **360** image (`28 28 28 80`) and an `h1` in **1 line**; at **860**
      the bar is **84** with a **44** button; at **520** the image is **300** tall (`24 24 24 64`), the card spans
      **14 / 14 / 14**, and the panel is **478.41 × 312.81** with `Where` and `Guests` spanning both columns
- [ ] line-count ladder: `h1` **3** at ≥901, **1** at 900–736, **2** at 735–381, **3** at ≤380; sub **4** at ≤368,
      **3** at 369–546, **2** at ≥547; proof **1 row** at ≥644, **2** at 344–643, **3** at ≤343
- [ ] height ladder: **781** floor at 1440 (doc 781 at 1440 × 600); **985** at 900; **976** at 860; **1041** at 640;
      **1028** at 547; **1058** at 520; **1049** at 390; **1148** at 320
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at 320, 390, 520, 700, 900, 1080, 1280, 1440
- [ ] the form defaults to `today + 21` / `+3` at `T12:00:00`, `out.min` rolls forward when the check-in moves, and
      the message reads `Searching stays in <place> for <guests>, <d MMM> to <d MMM> (<n> night[s])…` with U+2026
- [ ] an invalid submit **replaces** the message instead of leaving the previous one, and `role="status"` stays on it
- [ ] the menu opens/closes with `aria-expanded`, closes on `Escape` (focus returns to the button), on a link click,
      on an outside click and on any viewport growth past 860
- [ ] the focus ring and the placeholder both pass **3 : 1** / **4.5 : 1** on every ground they land on, asserted
      in a test
- [ ] `prefers-reduced-motion: reduce` → all transitions `0s`, no `@keyframes` anywhere in the app
- [ ] every anchor resolves (no `href="#"`), the footer links `https://www.componentdock.com/`, and no app file
      mentions ColorLib

## Port notes — measured deltas against this spec (implementation run, 2026-11-11)

The build re-measured the **live preview** (`preview.colorlib.com/theme/bootstrap/hero-12/`, HTTP 200) in
Chromium at 1440 × 900 with `document.fonts.ready`, and the live page disagreed with this spec in four
places. The live page is the reference, so the port follows it; the spec's earlier numbers are kept above
for history.

| Reading | This spec | Live preview, re-measured | Port |
| --- | --- | --- | --- |
| sub | **90.7** tall, **3** lines (538 / 515 / 30) | **60.47**, **2** lines | **60.47**, 2 lines |
| copy | **568.34** | **538.11** | **538.11** |
| hero | 1320 × **694.05** at (60, **146.38**) | 1320 × **663.81** at (60, **161.48**) | identical to live |
| submit | **147.02** × 73.7 | **144.03** × 73.7 | **144.03** × 73.7 |
| card | **257.91** × 109.59 at (1046.09, 206.38) | **243.28** at (1060.72, 221.48) | **250.45** at (1053.55, 221.48) |
| fields | 320.86 / 213.92 / 213.91 / 213.91 | 321.86 / 214.58 / 214.58 / 214.56 | identical to live |

Everything else reproduced exactly against the live page: bar **1320 × 86.8** at (60, 0) with
`padding: 20px 48px` and `gap: 36`, `main` **813.2**, `h1` **548.56 × 255.33** at (108, 237.11) in **3**
lines at **89.6 / 85.12** with `letter-spacing: -4.032px`, proof **548.56 × 62.69** in **2** rows at
(108, 596.91) with `margin-top: 26`, media **603.44 × 538.11**, photograph **603.44 × 522** with radius
**32 32 32 120**, search panel **1137.61 × 93.7** at (194.39, 667.59) with `margin: -64px 0 0 86.4px`, and
the submit **144.03 × 73.7**.

Copy-driven widths (the only deltas that are not geometry bugs):

- **eyebrow 278.7** vs 238.84 — `Hand-picked cabins in the Pyrenees` is 40 px longer than the source's line;
  the shape and the 28 × 2 orange rule are unchanged.
- **logo 124.59** vs 116.45 — the new wordmark is one syllable longer.
- **link row 401.88** vs 401.88 at rest; the four links measure 67.77 / 114.02 / 77.5 / 130.59 (the spec's
  per-link figures included the 4 px `gap`, which is why they read 72 / 119 / 82 / 138).
- **document 950** at 1440 × 900 — **900 shell + 50.14 footer**. The footer is a sibling of the `100vh`
  shell, so the hero keeps the reference's offset and only the document grows (the accepted delta from
  "The Component Dock footer").

Fidelity ladders, port vs live: `h1` **3** lines at 1440 (3), **1** at 900 / 860 / 736 (1), **2** at 520 and
390 (2), **2** at 320 where the reference reads 3; shell height **984.64** at 900 (985), **976.33** at 860
(976), **962.56** at 736 (963), **1053.02** at 390 (1049), **1114.59** at 320 (1148); **1034.47** at 520
(1058) because the two-line sub gives back one 30.26 line there. `scrollWidth === clientWidth` and
`scrollX = 0` at every width measured.

Divergences that are deliberate:

1. **The photograph is a seeded placeholder** — `picsum.photos/seed/alpine/900/960` (a jetty over water)
   rather than `seed/lakelight-1`, whose crop read as forest floor under a lake caption.
2. **The date controls are 1 px taller at each end** (`padding: 3px 0` on `input[type=date]`) — the
   reference reaches the same 31.56 px by reverting the native date editor's own padding; without it the
   field measures 71.7 instead of 73.7 and the panel 91.7 instead of 93.7.
3. **Nav links paint their intended hierarchy** (muted at rest) instead of the reference's specificity
   accident that renders all three ink, as the spec requires.
4. **Focus ring `#b4551f`, placeholder `#566258`** — both pass (5.5 : 1 and 6.5 : 1 on the sand and on
   white) and both are asserted by `src/contrast.test.ts`, which reads the tokens out of `index.css`.
5. **The status line always describes the current attempt**: `noValidate` on the form, `Choose a
   destination.` / `Check out has to be after check in.` replacing a previous sentence, `role="status"`
   kept.
