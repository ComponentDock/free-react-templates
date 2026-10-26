# Template: Noticeboard (Billing notices — four severity alerts in one 680 px column)

## Purpose

A **single-column notice panel**: one centred 680 px stack on a cool grey ground (`#f5f6f8`)
holding a three-line head (uppercase eyebrow, page title, one-sentence intro) and then **four
alerts in the four standard severities** — info, success, warning, danger — each a tinted 12 px-radius
card with a 1 px border in its own hue, a **22 × 22 outline icon** in the accent colour, a **15 px / 600
title in a darkened shade of the same hue**, and **14 px body copy** at a fixed grey. The page carries
**no other band**: no nav, no hero, no footer, no form, no buttons, no links, **no JavaScript**.

- **Source slug:** `alert-01`
- **ColorLib page:** https://colorlib.com/wp/template/alert-01/ — **HTTP 200, 112,959 B**,
  `<title>` `Alert V01 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V01"**, authoritative
  description *"The four standard alert types in a light, crisp style, shown on a billing page for an
  invoicing app. Free download, no jQuery or plugins."*, "Author: Colorlib", "Released: September
  2026", "License: CC BY 3.0", `datePublished` **2026-09-25T14:53:32+00:00**, claims *"528 KB"*
  (measured **541,001 B** ✓), and links its siblings `Alert 02`, `07`…`12` (the family runs to twelve).
  This is the **design name the naming audit reads**: ColorLib "Alert V01".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-01/ —
  **HTTP 200, 3,733 B**, `<title>` `Alert V01 | Colorlib`, `lang="en"`, **one** stylesheet, **zero**
  authored scripts. The slug-only path `theme/alert-01/` is **404 (9 B)**; `theme/bb/alert-01/` is
  **404 (9 B)**. Same `bootstrap/` prefix ladder as the `card` family — not a dead preview.
- **Design category:** Alert (billing / transactional notices). First of the **`alert` snippet
  family** (**12** variants, `01`–`12`) in the **214 snippet variants** of `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/noticeboard`,
  package `@free-react-templates/noticeboard`, CNAME `noticeboard.free.componentdock.com`.

**What this design is.** It is not a UI kit page of *one* alert — it is the **whole severity ladder at
once**, and the ladder is the product: four tints that must read as one family, each with its own
border, icon colour and title colour, all four **exactly the same height** at desktop widths. The head
above them exists to make the tint ladder legible ("Ledgerly · Billing" tells you these are account
notices, not toasts), and the empty grey below is the `min-height: 100vh` ground of a single-screen
demo, not a section.

**The one real behaviour is the absence of one.** `curl` returns **1 stylesheet and 0 `<script>`**
(the ten `<script>` tags a browser reports are Cloudflare's zaraz/gtag/beacon injection, not the
snippet) and the archive ships **no `js/` directory at all**, although its `README.md` still lists
`js/snippet.js` (defect 6). Nothing is clickable: **0 links, 0 buttons, 0 inputs, 0 focusable
elements**. The only interaction in the reference is hover-less and focus-less — there is none.

**The parts a careless port flattens** (each measured here, expanded below):

- **There are two gaps between the head and the first alert, not one.** The panel is a `grid` with
  `gap: 14px` **and** the head carries `margin-bottom: 14px`, so the head's grid row measures
  **115 px** (101 + 14) and the first alert starts **28 px** below the intro's baseline box, not 14.
  A port that drops the margin closes the design's only asymmetric gap.
- **The four alerts are equal height only because the copy is.** At 1440 the four bodies are 2 lines
  each and all four cards measure **101.5 px**; the first width where they diverge is **560** (the
  danger card hits 3 lines) — so the row-mates are *not* stretched by a grid, they just happen to
  agree. Reproduce the copy, not a `min-height`.
- **`--info` is a class with no rule.** The markup's first alert is `cl-alert01--info`; the sheet has
  **no `--info` selector** — the base `.cl-alert01` rule carries the blue defaults and the three other
  modifiers override them. Shipping a fourth "info" variant block is redundant; shipping only the
  three modifiers and forgetting the base defaults gives you four untinted cards.
- **The title colour is a darkened hue, not the accent.** Accent `#2563eb` paints the icon while the
  title uses `#1e3a8a`; the same split holds on all four (see the palette table). Using the accent for
  the title drops contrast from **9.46:1** to **4.72:1** and makes the four titles read as link-ish.
- **The card's insets are 18 px horizontally and 16 px vertically** (`padding: 16px 18px`), which is
  why the icon's left edge sits at **19 px** inside the card (18 padding + 1 border) and the text
  column starts at **55 px**. Rounding to `p-4`/`p-5` moves every text column.
- **The mobile media query changes the alert, not the page.** At **≤ 480** only
  `.cl-alert01 { gap: 12px; padding: 14px }` changes; the panel keeps its 16 px gutter and the 12 px
  radius, so the alert's own left inset drops from 19 to **15 px** while the head above it does not
  move. This one-pixel-class step is visible and is reproduced in the reference.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,890** rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`alert-01` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that
gap are all prepped. Families are worked **in family order, then variant number** — the `card` family
(20) is closed, so `alert` is next.

There is **no `## Bootstrap Alerts` section on main at all** (`grep -c alert TEMPLATES.md` → **0**), so
the implementer creates the section as well as the row. It belongs **between `## Bootstrap
Accordions (20)` (line 639) and `## Bootstrap Buttons (20)` (line 663)**, keeping the file's
alphabetical section order, with this row as its first entry:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 01** — [colorlib](https://colorlib.com/wp/template/alert-01/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-01.jpg) · [noticeboard](https://noticeboard.free.componentdock.com)
```

Read the surrounding lines **immediately before pushing** — two implementer streams write this file,
so the section may have moved or gained rows since this prep was written.

**The name.** `noticeboard` — one lowercase (closed-compound) word, matching the family's
`nameplate` / `coursebook` / `showbill` pattern: a noticeboard is the surface on which notices are
pinned, which is exactly what four alerts in a column are. It is in no app folder, no spec folder,
and `git grep -il noticeboard origin/main` returns **0** files (the substring test this pipeline
uses); the ColorLib catalogue URLs `colorlib.com/wp/template/noticeboard/`,
`preview.colorlib.com/theme/noticeboard/` and `preview.colorlib.com/theme/bootstrap/noticeboard/` all
return **404**. Rejected on measurement: `bulletin` (**23** substring hits, app **and** spec already
exist), `beacon` (**153** hits, app + spec), `signpost` (**13** hits, spec exists), `clarion`
(**3** hits, spec exists). Still free the same day if a later variant needs one: `tocsin`, `belfry`,
`crier`, `pinboard`, `corkboard`, `placard`, `flagpost`, `mayday` (0 hits each). Do **not** reuse the
`card` family's taken names `nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`,
`lodgerow`, `roadbook`, `lexeme`, `coffer`, `showbill`, `coursebook`, `banter`, `postbox`, `notebell`,
`isobar`, `tonearm`, `tiffin`, `baylist`, `shortlist`.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 3,733 B** live (`3,541 B` inside the archive), `<title>` "Alert V01 \| Colorlib", `lang="en"`, **one** stylesheet, **zero** authored scripts |
| preview path      | **`theme/bootstrap/alert-01/`**; the directory URL is the page. `theme/alert-01/` **404** (9 B), `theme/bb/alert-01/` **404** (9 B) |
| stylesheet        | `css/style.css?v=7a867c44`, **6,273 B**, 243 lines, sha256 `e5102b0dc2c71af47cc49e2eafc2994827a1006ae01d5d9b0e33112c3c5e196f` |
| script            | **none** — the archive ships no `js/` directory at all, although its `README.md` still lists `js/snippet.js` (defect 6) |
| archive           | `preview.colorlib.com/downloads/free/alert-01.zip`, **200, 541,001 B** (= 528 KB ✓ the page's claim), **14 entries**: 3 dirs + `index.html` 3,541 B + `css/style.css` 6,273 B + `README.md` 1,262 B + **8 `woff2`**; **no** `js/`, **no** `images/` |
| live ↔ archive    | CSS **identical sha256**; the body markup does not differ at all — the two HTML files differ only in the `<head>` (`robots` metas ×2, a `dns-prefetch`, the `?v=` cache-buster, `fetchpriority="high"`) → **live preview verified; the archive is its un-versioned twin** |
| fonts             | **8** `woff2` files but only **2 distinct binaries**: `inter-*-latin.woff2` 4 × 48,432 B sha256 `c940764593d0…`, `inter-*-latin-ext.woff2` 4 × 85,272 B sha256 `a28eb6d3ccb5…`; the sheet declares **6** `@font-face` (400 / 600 / 700 × `latin` / `latin-ext`) and **never declares 500** — the two `inter-500-*` files are byte-identical to the 400 files and unused. Declaring the same binary as `font-weight: 100 900` yields monotonically varying widths (414 → 465 px at 40 px), i.e. it is a **variable cut**, not four statics. At 1440 only the **3 latin faces load** |
| CSS size          | **34** top-level rules / **110** selectors, 6 `@font-face`, **9** guard rules (`:where(html) … { all: revert }`, 31 selectors), **1** media query (`max-width: 480px`), **0** `@keyframes`, **0** `@supports`, **0** container queries |
| classes           | **15** in the markup, **14** styled; **1 unstyled** (`.cl-alert01--info` — the base rule carries the blue) and **1 dead selector**, `.cl-icon` (`document.querySelectorAll('.cl-icon').length === 0`, the sixth card-row in a row with this leftover) |
| custom properties | **4**: `--cl-alert01-accent` (`#2563eb`), `--cl-alert01-bg` (`#eff5ff`), `--cl-alert01-line` (`#c7dbfe`), `--cl-alert01-title` (`#1e3a8a`) — declared once on `.cl-alert01` and overridden whole by `--success` / `--warning` / `--danger` |
| controls          | **0** links, **0** `<button>`, **0** forms, **0** inputs, **0** `<img>`, **0** focusable elements |
| headings          | **1 × `h1`** ("Invoices and payments"); the four alert titles are `<p>`, not headings — **do not promote them** |
| blocks            | `<main class="cl-alert01-demo">` → `<section class="cl-alert01-panel">` → `<header>` (eyebrow + h1 + intro) → **4** `<div class="cl-alert01">` → nothing else |
| roles             | `role="status"` on info, success, warning; `role="alert"` on danger (the only semantic difference between the four) |
| content height    | **753** at 1,440 (577 panel + 2 × 88 padding) while the document reads **900** = the viewport (`min-height: 100vh`) · 855 at 320 · `scrollHeight` 900 everywhere probed |
| horizontal scroll | **none at any width probed** — `documentElement.scrollWidth === clientWidth` and `scrollTo(200,0)` → `scrollX 0` at 320 / 360 / 390 / 430 / 480 / 481 / 520 / 560 / 640 / 700 / 768 / 900 / 1024 / 1200 / 1440 |
| screenshot        | `alert-01.jpg` **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens it, convert before viewing |

### Layout arithmetic — one centred column, a 680 cap, and a clamp ladder in two directions

```css
main { display: flex; justify-content: center; align-items: flex-start;
       box-sizing: border-box; min-height: 100vh;
       padding: clamp(24px, 7vw, 88px) 16px; }
.cl-alert01-panel { width: 100%; max-width: 680px; display: grid; align-content: start;
                    gap: 14px; color: #111827; line-height: 1.5; }
.cl-alert01-panel__head { margin-bottom: 14px; }
```

| vw   | panel px | where the number comes from                                          |
| ---: | -------: | -------------------------------------------------------------------- |
| 1440 |      680 | `max-width` — the cap binds from **712** upward                       |
|  711 |      679 | `vw − 32` (16 px gutter each side)                                    |
|  700 |      668 | `vw − 32`                                                             |
|  480 |      448 | `vw − 32` — the media query touches the alert, **not** the panel       |
|  320 |      288 | `vw − 32`                                                             |

The vertical padding is the *same* clamp on the other axis and it floors and caps at different widths:

| vw            | padding-top          | proof                                    |
| ------------- | -------------------- | ---------------------------------------- |
| ≥ **1,257**   | **88 px** (cap)      | 7 vw = 88 at 1,257; measured 88 at 1,440 |
| 1,256 → 343   | **7 vw**             | 700 → **49**, 720 → **50.4**, 375 → **26.25** |
| ≤ **343**     | **24 px** (floor)    | 320 → **24**                              |

Panel height at 1440 is **577** and it is fully accounted for by the grid: head row **115**
(101 + the 14 px `margin-bottom`, which the grid adds to the row track and then gaps again) +
**4 × 101.5** alerts + **4 × 14** gaps = **577**. The consequence to reproduce: **the head's box ends
at y 189 and the first alert starts at y 217 — 28 px**, while every alert-to-alert gap is **115.5**
pitch (101.5 + 14).

### Palette — one neutral ground, four tint quads, one shared body grey

| role                | value     | where                                                     |
| ------------------- | --------- | --------------------------------------------------------- |
| page ground         | `#f5f6f8` | `body` — a **blue-leaning** grey, not warm paper           |
| panel ink           | `#111827` | `.cl-alert01-panel` (`color`) — h1 inherits it             |
| muted               | `#4b5563` | eyebrow + intro                                            |
| body text (all 4)   | `#374151` | `.cl-alert01__text` — **the same grey on every tint**      |
| info bg / line / title / icon | `#eff5ff` / `#c7dbfe` / `#1e3a8a` / `#2563eb` | base `.cl-alert01` defaults (class `--info` has **no** rule) |
| success bg / line / title / icon | `#ecfdf5` / `#b7ecd4` / `#064e3b` / `#059669` | `.cl-alert01--success`  |
| warning bg / line / title / icon | `#fff8eb` / `#fbdba7` / `#7c2d12` / `#c2410c` | `.cl-alert01--warning`  |
| danger bg / line / title / icon  | `#fef2f2` / `#fbcaca` / `#7f1d1d` / `#dc2626` | `.cl-alert01--danger`   |
| card shadow         | `rgba(17,24,39,.04)` | `0 1px 2px 0` — the **ink**, not black          |

The four **titles are darker than their accents on purpose**: `#1e3a8a` vs `#2563eb`, `#064e3b` vs
`#059669`, `#7c2d12` vs `#c2410c`, `#7f1d1d` vs `#dc2626`. The accent is an **icon-only** colour
(and the only place a raw hue appears); the title takes the darkened shade so 15 px / 600 text clears
AA at 8.87–9.46:1 instead of 3.5–4.7:1.

### Type — one variable face, three declared instances, two binaries, no 500

```
font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
```

Canvas width of `"Invoices and payments"` at 30 px, per requested weight, against the declared faces:

| weight | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
| ------ | --: | --: | --: | --: | --: | --: | --: |
| width  | 324 | 324 | 324 | 331 | 335 | 335 | 335 |

There is **no 500 instance**: 500 resolves to the 400 face, and 800/900 collapse onto 700 — a
three-level hierarchy written as 500 / 600 / 800 silently renders **400 / 600 / 700**. The eight
files are two binaries (see readings), so the sheet's three "weights" are three points on one `wght`
axis, declared discretely. Google Fonts serves the same axis
(`fonts.googleapis.com/css2?family=Inter:wght@400..700` → **HTTP 200**).

| element        | size                       | weight | tracking | line-height |
| -------------- | -------------------------- | -----: | -------: | ----------: |
| `h1`           | `clamp(24px, 4vw, 30px)`   |    700 | `-.02em` | `1.5` (45 at 30) |
| eyebrow        | `13px`                     |    600 | `+.04em` | `1.5` (19.5) |
| intro          | `15px`                     |    400 |        — | `1.5` (22.5) |
| alert title    | `15px`                     |    600 |        — | `1.5` (22.5) |
| alert text     | `14px`                     |    400 |        — | `1.5` (21)  |

The `h1` is fluid **only between 600 and 750 px** (24 px floor, 30 px ceiling, 4 vw in between) and it
**never wraps**: it measures **1 line / 36 px** at every width down to 320. The eyebrow is uppercased
by `text-transform` — keep the source text in sentence case and let CSS do it, so the accessible name
stays readable.

### Radii, decoration, motion

| element   | radius | note                                                              |
| --------- | -----: | ----------------------------------------------------------------- |
| alert     |   12px | plus a **1 px** border in `var(--cl-alert01-line)`; radius on the border box |
| icon      |      — | a stroked `currentColor` SVG, **no** fill, no background disc      |
| shadow    |      — | `0 1px 2px rgba(17,24,39,.04)` — a 1 px lift, not a card shadow    |

There is **no motion at all**: **0** `@keyframes`, **0** `transition` declarations in the snippet's own
rules, no hover state, no focus ring (nothing is focusable). Any animation in the React port is an
embellishment that the reference does not have.

### Icon geometry — 22 px strokes in the accent, aligned to the title's cap height

| severity | shape (lucide-react equivalent)     | size | stroke | colour    |
| -------- | ----------------------------------- | ---: | -----: | --------- |
| info     | circle + `i` → `Info`               | 22   | 2 (glyph 2.2) | `#2563eb` |
| success  | circle + check → `CircleCheck`      | 22   | 2 (glyph 2.2) | `#059669` |
| warning  | triangle + `!` → `TriangleAlert`    | 22   | 2 (glyph 2.2) | `#c2410c` |
| danger   | octagon + × → `OctagonX`            | 22   | 2 (glyph 2.2) | `#dc2626` |

The icon is `display: block; flex: none; margin-top: 1px` in a `22px` grid column — i.e. it is nudged
**1 px down** relative to the title's line box, so the glyph's optical centre matches the title's
cap height. It also carries `aria-hidden="true" focusable="false"` in the reference: the icon repeats
nothing the title does not say, so keep it hidden.

### Responsive matrix (measured; panel and card heights are content-driven, never fixed)

Text line counts are what drive every card height: `101.5 = 16 + 16 padding + 2 border + 22.5 title +
3 gap + n × 21`. Below 480 the padding drops to 14 and the gap to 12, so the same 3 lines measure
**118.5**.

| vw   | panel px | `h1` | intro lines | pad / gap      | alert heights (1→4) | text lines (1→4) |
| ---: | -------: | ---: | ----------: | -------------- | ------------------- | ---------------- |
| 1440 |      680 | 30.0 |           1 | 16 / 18 · 14   | 101.5 · 101.5 · 101.5 · 101.5 | 2 · 2 · 2 · 2 |
| 1024 |      680 | 30.0 |           1 | 16 / 18 · 14   | 101.5 · 101.5 · 101.5 · 101.5 | 2 · 2 · 2 · 2 |
|  900 |      680 | 30.0 |           1 | 16 / 18 · 14   | 101.5 · 101.5 · 101.5 · 101.5 | 2 · 2 · 2 · 2 |
|  768 |      680 | 30.0 |           1 | 16 / 18 · 14   | 101.5 · 101.5 · 101.5 · 101.5 | 2 · 2 · 2 · 2 |
|  700 |      668 | 28.0 |           1 | 16 / 18 · 14   | 101.5 · 101.5 · 101.5 · 101.5 | 2 · 2 · 2 · 2 |
|  640 |      608 | 25.6 |           2 | 16 / 18 · 14   | 101.5 · 101.5 · 101.5 · 101.5 | 2 · 2 · 2 · 2 |
|  560 |      528 | 24.0 |           2 | 16 / 18 · 14   | 101.5 · 101.5 · **122.5** · 101.5 | 2 · 2 · **3** · 2 |
|  520 |      488 | 24.0 |           2 | 16 / 18 · 14   | **122.5** · 101.5 · 101.5 · **122.5** | **3** · 2 · 2 · **3** |
|  481 |      449 | 24.0 |           2 | 16 / 18 · 14   | **122.5** · **122.5** · 101.5 · **122.5** | **3** · **3** · 2 · **3** |
|  480 |      448 | 24.0 |           2 | **14 · 12**    | **118.5** · **118.5** · 97.5 · **118.5** | **3** · **3** · 2 · **3** |
|  430 |      398 | 24.0 |           2 | 14 · 12        | 118.5 × 4            | 3 · 3 · 3 · 3 |
|  390 |      358 | 24.0 |           2 | 14 · 12        | 118.5 · 118.5 · 118.5 · **139.5** | 3 · 3 · 3 · **4** |
|  360 |      328 | 24.0 |           2 | 14 · 12        | **139.5** · 118.5 · 118.5 · **139.5** | **4** · 3 · 3 · **4** |
|  320 |      288 | 24.0 |       **3** | 14 · 12        | **160.5** · **139.5** · **139.5** · **160.5** | **5** · **4** · **4** · **5** |

Panel heights at the same widths: **577 / 577 / 577 / 577 / 574 / 592.89 / 611.5 / 632.5 / 653.5 /
637.5 / 658.5 / 679.5 / 700.5 / 807**. Note the **481 → 480** discontinuity (653.5 → 637.5) — the
media query shrinks the cards by exactly 4 px each, and the panel shrinks by more than the 1 px the
viewport loses. The only *layout* boundary on the page is the panel cap at **712**; the intro wraps at
**671** (672 → 1 line, 671 → 2 lines); the alert titles never wrap, even at 224 px of text column at
320.

### Contrast — every text run clears AA by 8.8:1 or better; the four icons clear 3:1

| pair                                        | ratio  | verdict                     |
| ------------------------------------------- | -----: | --------------------------- |
| info title `#1e3a8a` on `#eff5ff`            |  9.46  | pass                        |
| success title `#064e3b` on `#ecfdf5`         |  9.23  | pass                        |
| warning title `#7c2d12` on `#fff8eb`         |  8.87  | pass — the page's worst text run |
| danger title `#7f1d1d` on `#fef2f2`          |  9.16  | pass                        |
| body `#374151` on the four tints             |  9.41 / 9.78 / 9.76 / 9.42 | pass        |
| `h1` `#111827` on ground `#f5f6f8`           | 16.41  | pass                        |
| eyebrow / intro `#4b5563` on ground          |  6.99  | pass                        |
| icon `#2563eb` on info tint (non-text)       |  4.72  | pass                        |
| icon `#059669` on success tint (non-text)    |  3.58  | pass — the thinnest margin  |
| icon `#c2410c` on warning tint (non-text)    |  4.90  | pass                        |
| icon `#dc2626` on danger tint (non-text)     |  4.41  | pass                        |
| border `#c7dbfe` / `#b7ecd4` / `#fbdba7` / `#fbcaca` on their tints | 1.25–1.33 | **decoration** — the border is not the only cue (tint + icon + title all differ), so 1.4.11 does not bite |

The palette is unusually clean for this family: **no repair is needed**. Keep the four quads exactly
as measured — substituting Tailwind's `blue-50` / `emerald-50` / `amber-50` / `red-50` shifts every
tint by 3–6 ΔE and breaks the family resemblance the design is *about*.

## Behaviour — there is none, and that is the specification

`curl` returns **0 scripts**, the archive has no `js/`, and there are **0 focusable elements**. The only
thing a visitor (or an assistive technology) can do is read:

1. **Nothing hovers, nothing focuses, nothing clicks.** No transition, no `:hover`, no `:focus` rule
   exists in the sheet. A port that adds a dismiss button adds a control the reference does not have.
2. **The four alerts are announced by role, not by script.** `role="status"` on the first three and
   `role="alert"` on the danger card are static live-region containers. Because the content is present
   at load, most screen readers will read them as ordinary text — which is exactly right for a static
   demo. **Do not add JavaScript to "trigger" them.**
3. **Escape hatch for a real app.** If this panel is later used for dynamic notices, the pattern is
   one live region that receives text, not four permanent ones — but that is out of scope for the
   recreation.

The React recreation therefore needs **no state, no effect, no handler, no router** — a data array, a
mapping component and a static `main`. Any `useState` in this app is a signal that the reference was
embellished.

## Requirements

### Requirement: Page shell and ground

The app SHALL render a single `main` landmark that centres one 680 px column on the `#f5f6f8` ground,
with no navigation, hero, footer band, form, button or script, and SHALL impose `min-height: 100vh`.

#### Scenario: The shell is one centred flex column

- **GIVEN** the app rendered at 1440 px
- **WHEN** the page is measured
- **THEN** there SHALL be exactly one `<main>`, containing one `<section>` with one `<header>` and four alert blocks
- **AND** `main` SHALL be `display: flex; justify-content: center; align-items: flex-start; box-sizing: border-box; min-height: 100vh; padding: clamp(24px, 7vw, 88px) 16px`
- **AND** `body` SHALL be `#f5f6f8` with `margin: 0`

#### Scenario: Document height is the viewport, not the content

- **GIVEN** the rendered page at 1440 × 900
- **WHEN** heights are read
- **THEN** the panel SHALL measure **577** and `main` **900**
- **AND** `document.body.scrollHeight` SHALL read **900** at 1440, 1024, 768 and 320 — the content is shorter than the viewport at every width probed (855 of content at 320), so the page never scrolls
- **AND** the only element after the panel SHALL be the Component Dock attribution line required by the repo

### Requirement: The head — three lines and a double gap

The header SHALL print an uppercase eyebrow, the `h1`, and a one-sentence intro, and SHALL sit **28 px**
above the first alert (its own 14 px `margin-bottom` plus the grid's 14 px `gap`).

#### Scenario: Copy and metrics

- **GIVEN** the header at 1440 px
- **WHEN** its three lines are measured
- **THEN** the eyebrow SHALL read "Ledgerly · Billing" at **13 px / 600 / +.04em**, uppercase, `#4b5563`, `margin: 0 0 6px`, box height **19.5**
- **AND** the `h1` SHALL read "Invoices and payments" at **30 px / 700 / −.02em**, line-height **45**, box **680 × 45** at y **113.5**
- **AND** the intro SHALL read "Account notices for September. Messages that need action stay here until they are resolved." at **15 px / 400**, `#4b5563`, `margin: 8px 0 0`, one line (**22.5**) at 1440

#### Scenario: The head is 101 px tall and the first alert starts 28 px later

- **GIVEN** the header and the first alert at 1440
- **WHEN** their boxes are read
- **THEN** the header SHALL measure **680 × 101** starting at y **88**, i.e. ending at **189**
- **AND** the first alert SHALL start at y **217**
- **AND** the panel's grid rows SHALL read **115 / 101.5 / 101.5 / 101.5 / 101.5** — the 115 is the head plus its margin, and the gap is applied again after it

#### Scenario: The intro wraps at 671, not at a breakpoint

- **GIVEN** viewports of 672 and 671 px
- **WHEN** the intro's height is read
- **THEN** at **672** (panel 640) it SHALL be **22.5** (one line) and at **671** (panel 639) it SHALL be **45** (two lines)

### Requirement: Container and clamp ladder

The column SHALL be `width: 100%; max-width: 680px` inside a 16 px gutter, and the vertical padding
SHALL be the same `clamp(24px, 7vw, 88px)` floored at 343 px and capped at 1,257 px.

#### Scenario: Panel width is arithmetic

- **GIVEN** viewports of 712, 711, 700, 480 and 320
- **WHEN** the panel is measured
- **THEN** the widths SHALL be **680 / 679 / 668 / 448 / 288** (`min(680, vw − 32)`)
- **AND** the panel SHALL start at x **380** at 1440 and at x **16** at every width below the cap

#### Scenario: Vertical padding floors before the panel does

- **GIVEN** viewports of 1,440, 720, 375 and 320
- **WHEN** `main`'s padding-top is read
- **THEN** it SHALL be **88 / 50.4 / 26.25 / 24**
- **AND** the panel's y SHALL equal that padding at every width (**88 / 50.39 / 26.25 / 24**)

#### Scenario: No horizontal scrolling anywhere

- **GIVEN** any probed width (320, 360, 390, 430, 480, 481, 520, 560, 640, 700, 768, 900, 1024, 1200, 1440)
- **WHEN** `scrollTo(200, 0)` is issued
- **THEN** `scrollX` SHALL remain **0** and `documentElement.scrollWidth` SHALL equal `clientWidth`

### Requirement: The alert quad — four severities, one geometry

Each alert SHALL be a `grid` of `22px 1fr` with a **14 px** gap, `padding: 16px 18px`, a 1 px border in
its `--line` colour, a **12 px** radius, its `--bg` ground and a `0 1px 2px rgba(17,24,39,.04)` shadow,
and all four SHALL use the same four custom properties.

#### Scenario: Box geometry at 1440

- **GIVEN** each of the four alerts
- **WHEN** its border box is measured
- **THEN** it SHALL be **680 × 101.5**
- **AND** its grid tracks SHALL read **22px 606px** (`680 − 36 padding − 2 border − 22 icon − 14 gap`)
- **AND** the padding SHALL read `16px 18px`, the border `1px solid` in the variant's `--line`, and the radius **12px**

#### Scenario: Vertical pitch

- **GIVEN** the four alerts at 1440
- **WHEN** their y positions are read
- **THEN** they SHALL start at **217 / 332.5 / 448 / 563.5** — a **115.5** pitch (101.5 + the 14 px gap)
- **AND** each SHALL be **101.5** tall, i.e. `16 + 16 padding + 2 border + 22.5 title + 3 + 42 text`

#### Scenario: The four token quads are exact

- **GIVEN** the rendered alerts
- **WHEN** the four custom properties are read on each
- **THEN** they SHALL be
  `#eff5ff / #c7dbfe / #1e3a8a / #2563eb` (info),
  `#ecfdf5 / #b7ecd4 / #064e3b / #059669` (success),
  `#fff8eb / #fbdba7 / #7c2d12 / #c2410c` (warning),
  `#fef2f2 / #fbcaca / #7f1d1d / #dc2626` (danger)
- **AND** the body text SHALL be `#374151` on all four, **not** a per-variant grey

#### Scenario: Below 480 the alert changes and the panel does not

- **GIVEN** viewports of 481 and 480
- **WHEN** the first alert and the panel are measured
- **THEN** at **481** the padding SHALL be `16px 18px`, the gap **14** and the alert **122.5 × 449**
- **AND** at **480** the padding SHALL be `14px`, the gap **12** and the alert **118.5 × 448** (2 lines at 480 versus 3 at 481)
- **AND** the panel's width formula (`vw − 32`) and the 12 px radius SHALL be unchanged by that query

### Requirement: Icon column

Each alert SHALL carry one 22 × 22 stroked icon in its accent colour, optically aligned to the title,
and hidden from assistive technology.

#### Scenario: Geometry

- **GIVEN** the info alert at 1440
- **WHEN** the icon box is read
- **THEN** it SHALL be **22 × 22** at x **399** (panel 380 + 18 padding + 1 border), y **235** (card 217 + 16 + 1 border + **1 px** `margin-top`)
- **AND** its `color` SHALL be the variant accent and its strokes `currentColor`, `fill: none`, `stroke-width: 2` (the inner glyph **2.2**)
- **AND** it SHALL be `display: block; flex: none` so it cannot be squeezed by the text column

#### Scenario: Four distinct glyphs, no background disc

- **GIVEN** the four alerts
- **WHEN** their icons are read
- **THEN** they SHALL be circle-`i`, circle-check, triangle-`!` and octagon-× (lucide `Info`, `CircleCheck`, `TriangleAlert`, `OctagonX`)
- **AND** each SHALL carry `aria-hidden="true"` and `focusable="false"`
- **AND** none SHALL have a filled or tinted background disc — the tint belongs to the card

### Requirement: Copy and the severity ladder

The panel SHALL print the reference's four notices, in order info → success → warning → danger, and
SHALL keep each alert's title and body to the same line counts at 1440 (2 lines of body).

#### Scenario: The four notices

- **GIVEN** the rendered panel
- **WHEN** the titles are read
- **THEN** they SHALL be "New tax rates from 1 October", "Payment received", "Card expires next month", "Bank sync failed"
- **AND** the bodies SHALL be the VAT/Portugal notice, the invoice `INV-2048` receipt, the Visa ending 4417 expiry and the failed bank sync — one sentence each, in that order
- **AND** each title SHALL be `<p>` at **15 px / 600 / 22.5**, **not** a heading, because the reference has exactly one `h1`

#### Scenario: Titles never wrap

- **GIVEN** the text column at 320 (224 px)
- **WHEN** the titles are measured
- **THEN** each SHALL stay **22.5** px tall (one line) at 1440, 480, 390 and 320
- **AND** the bodies SHALL be **2 / 3 / 4 / 5** lines as measured, never forced to a fixed height

### Requirement: Semantics and live regions

The panel SHALL expose one `h1`, no focusable elements, and the reference's live-region roles.

#### Scenario: Landmarks, roles and order

- **GIVEN** the rendered page
- **WHEN** the accessibility tree is walked
- **THEN** there SHALL be **1 `h1`**, **0** `h2`–`h6`, **1 `<section>`** labelled by the `h1`, and **0** focusable elements
- **AND** the first three alerts SHALL be `role="status"` and the danger alert `role="alert"`
- **AND** **no** interactive element SHALL exist: 0 `<a>`, 0 `<button>`, 0 `<input>`, 0 `<form>`
- **AND** no JavaScript SHALL be added to announce or dismiss them (defect 3)

### Requirement: Attribution, naming and repo integration

The app SHALL be a new template named `noticeboard`, free of any reference to the source design in its
own files, with the repo's deployment and attribution wiring.

#### Scenario: Repo wiring

- **GIVEN** the shipped app
- **WHEN** the repo is inspected
- **THEN** `apps/noticeboard` SHALL exist with package `@free-react-templates/noticeboard`, `public/CNAME` = `noticeboard.free.componentdock.com` and `"homepage"` = `https://noticeboard.free.componentdock.com`
- **AND** `TEMPLATES.md` SHALL gain the `## Bootstrap Alerts (12)` section between `Bootstrap Accordions` and `Bootstrap Buttons`, with the `Alert 01` row
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"

#### Scenario: Provenance stays out of the app

- **GIVEN** every file under `apps/noticeboard`
- **WHEN** they are grepped (case-insensitive) for the source site's name and for the source slug
- **THEN** there SHALL be **no** hit in code, comments, `index.html` or tests
- **AND** the provenance SHALL live only in this spec, `TEMPLATES.md` and the PR body

## Screenshot analysis (catalogue image, `alert-01.jpg`, AVIF 1200 × 972)

The listing image is a **browser-window mockup**: a light chrome bar with three traffic-light dots and a
rounded address pill reading `preview.colorlib.com`, floating on a grey canvas with a soft drop shadow.
Inside the frame the page shows exactly the live composition, and — critically — **the same large empty
grey region below the fourth alert**, because the frame is a fixed ~900 px viewport and the page is
`min-height: 100vh`.

Visible content top to bottom, centred in the frame: the caps eyebrow **LEDGERLY · BILLING**; the title
**Invoices and payments**; the grey intro line; then four stacked cards at equal width —
1. **blue** tint, circle-`i` icon, **New tax rates from 1 October**, two lines of VAT copy;
2. **green** tint, circle-check icon, **Payment received**, two lines about `INV-2048` and €3,450.00;
3. **amber** tint, triangle icon, **Card expires next month**, two lines about the Visa ending 4417;
4. **red** tint, octagon-× icon, **Bank sync failed**, two lines about the bank feed.

The tints read as **very pale paper**, and that is the design: the four grounds are within 3–6 % of white,
so the borders (1.25–1.33:1) and the icons carry the severity, not the fills. The mockup agrees with the
live render in every measurable respect except its **frame** — chrome bar, dots, address pill and outer
canvas are the listing site's presentation. **Do not reproduce the frame**, and do not fill the empty
region below the fourth card with a band: the live page genuinely ends after the alert stack.

## Known reference defects (do not copy)

1. **`--info` is an unstyled class.** The markup carries `cl-alert01--info`; the sheet has no such rule —
   the base `.cl-alert01` block *is* the info variant. Port the four quads as data (or four static class
   pairs), not as "base + three modifiers + an info modifier that does nothing".
2. **`.cl-icon` is a dead selector.** A height/width/fill helper with no matching class in the markup
   (`document.querySelectorAll('.cl-icon').length === 0`). Sixth snippet in a row with this leftover — drop it.
3. **Static live regions.** `role="alert"` on a node present at page load is not an interruption; most
   AT read it as ordinary text. That is fine for a demo, but do not add JS to "make the alert fire", and
   do not convert the four notices into a toast system.
4. **No focus ring, because nothing is focusable.** If a later pass adds a dismiss control (it should
   not — the reference has none), it must bring a real focus-visible ring; this design supplies no
   example to copy.
5. **Two sets of font files are dead weight.** The archive ships `inter-500-latin.woff2` and
   `inter-500-latin-ext.woff2` byte-identical to the 400 files, and the sheet never declares 500. Do not
   carry a `font-medium` step into the port — 500 renders as 400.
6. **The README lies about a script.** It lists `js/snippet.js`; the folder ships no `js/` at all.
   Do not invent behaviour to match the README.
7. **The `:where(html) :is(…){ all: revert }` guard block survives into the file.** 9 rules / 31
   selectors exist only to shield the snippet from a host page's Bootstrap reboot. In the React app this
   is **not** to be ported: Tailwind 4's preflight is the reset, and `all: revert` would undo it.
8. **Three `--cl-alert01-title` values end with a stray newline before the semicolon**
   (`--cl-alert01-title: #064e3b\n;`). Valid CSS, harmless — noted so nobody "fixes" the value.

## Adapting to the repo (deltas the implementer owns)

| reference                                   | in `apps/noticeboard`                                                       |
| ------------------------------------------- | --------------------------------------------------------------------------- |
| four hard-coded alert `<div>`s              | a typed `alerts` array (`severity`, `title`, `text`) + one `Alert` component; tokens in `@theme` |
| 8 × `woff2`, 6 `@font-face`, no 500         | one Google Fonts `<link>`: `family=Inter:wght@400..700` (verified **HTTP 200**) |
| inline SVGs with 2.2 glyph strokes           | `lucide-react` `Info` / `CircleCheck` / `TriangleAlert` / `OctagonX` at `size={22}` `strokeWidth={2}`, `aria-hidden` |
| `:where(html) :is(…){ all: revert }` guard   | dropped — Tailwind preflight                                                |
| `.cl-icon` helper                            | dropped                                                                     |
| `--info` class with no rule                  | four token quads in the data/`@theme`, no dead modifier                     |
| 0 scripts, 0 controls                        | 0 hooks, 0 handlers — static markup only                                    |
| no footer                                    | one Component Dock attribution line (repo rule)                             |
| repeated `.cl-alert01__title` / `__text`     | one `Alert` component; the four cards are its four props                    |

Tailwind 4 notes: `960`/`680` are arbitrary values (`max-w-[680px]`); the padding clamp is
`p-[clamp(24px,7vw,88px)_16px]`; the alert is
`grid grid-cols-[22px_1fr] gap-[14px] p-[16px_18px] rounded-xl border border-[var(--line)] bg-[var(--bg)] shadow-[0_1px_2px_rgba(17,24,39,.04)] max-[480px]:gap-3 max-[480px]:p-[14px]`;
the `h1` is `text-[clamp(24px,4vw,30px)] leading-[1.5] tracking-[-.02em] font-bold`. The four quads are
best expressed as four `@theme` colour pairs or as a `Record<Severity, {bg,line,title,accent}>` applied
through inline `style` custom properties — either way the **title** colour must stay the darkened shade,
not the accent.

## Verification checklist

- [ ] `apps/noticeboard` exists, package `@free-react-templates/noticeboard`, `public/CNAME` =
      `noticeboard.free.componentdock.com`, `"homepage"` = `https://noticeboard.free.componentdock.com`
- [ ] `npm run verify:app noticeboard` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-noticeboard --type spec` is valid
- [ ] measured at 1440: panel **680 × 577** at (380, 88), head **101**, alerts **101.5** at
      **217 / 332.5 / 448 / 563.5**, icon **22 × 22** at (399, 235)
- [ ] measured at 712 / 711: panel **680 / 679**; at 672 / 671: intro **1 / 2** lines
- [ ] measured at 481 / 480: alert padding `16px 18px` / `14px`, gap **14 / 12**, alert **122.5 / 118.5**
- [ ] measured at 320: panel **288**, `h1` **24**, intro **3** lines, alerts **160.5 / 139.5 / 139.5 / 160.5**,
      `scrollX 0` after `scrollTo(200,0)`, document height **900**
- [ ] the head-to-first-alert gap measures **28 px**, not 14
- [ ] the four token quads match the palette table exactly, and all four bodies are `#374151`
- [ ] contrast: titles 8.87–9.46:1, bodies 9.41–9.78:1, icons 3.58–4.90:1, no failing text run
- [ ] 1 `h1`, 0 other headings, 0 focusable elements, 0 scripts, 0 `<form>`, 3 × `role="status"` + 1 × `role="alert"`
- [ ] no occurrence of the source slug or the source site's name in any app file
- [ ] `curl -I https://noticeboard.free.componentdock.com` → 200, `ssl_verify_result=0`
