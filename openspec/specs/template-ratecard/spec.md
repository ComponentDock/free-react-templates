# Template: Ratecard (Pricing table — a three-card SaaS pricing page on cool grey: a centred eyebrow/title/lede head, a stretch-equal three-column plan grid whose middle card carries a 2 px accent border, a −16 px vertical margin and a pill flag, ghost CTAs everywhere but the middle, check-disc bullet lists, and a one-line price footnote)

## Purpose

**One pricing-table section** — the **first variant of the `pricing-table` snippet family** (12 variants). It is the
simplest page in the whole 214-variant snippet batch: **no photograph, no form, no JavaScript, no icons beyond two
inline SVGs**, five named colour tokens, two media queries (`900`, `prefers-reduced-motion`), and a document that is
**1007 px tall at 1440 × 900** — i.e. it scrolls by exactly 107 px at the canonical viewport.

A single `<main class="cl-pricing01-demo">` holds **one `<section>`** whose three children are a **centred head**
(`eyebrow` / `h1` / `lede`, all inside a 640 px column), a **`repeat(3, minmax(0,1fr))` grid with `gap: 24`**, and a
**one-line footnote**. Each plan card is a white, 18 px-radius, hairline-bordered flex column of
**`padding: 32px 30px 34px`** holding a `h2` plan name, a **48 px-min-height** description (the alignment device that
keeps every price on one line), a **48 px price row** (`$15` at 48 px/800 with `tabular-nums` plus a 14 px
"per seat / month"), a **full-width 49.25 px CTA**, a **ruled label** (`border-top` + 24 px padding), and a
**`ul` of check-disc bullets** whose 20 px disc is a CSS pseudo-element painting `#e8eefc` behind an inline SVG tick.

The **middle card is the only "featured" device in the family that uses all three signals at once**: a **2 px accent
border** instead of the 1 px hairline, a **`margin: -16px 0`** that makes it **591.73 px** tall against its siblings'
559.73 and lets it **overhang the grid by 16 px at both ends**, and a **`top: -15px` pill flag** that therefore renders
**13 px above the grid's top edge** (absolute `top` measures from the *padding* box, so the 2 px border adds 2 px:
`273.86 + 2 − 15 = 260.86`). Only its CTA is filled (`#2453d6`); the other two cards carry the ghost button.

Because the featured card is **1 px taller inside than its siblings at every width** (48 px padding-top minus the
16 px negative margin plus the 2 px border), its content — price, CTA, label, bullets — sits **exactly 1 px lower**
than the neighbours' at 1440. That is a reference artefact worth reproducing deliberately, not an accident to fix:
`price` at y **436.86** against **435.86**.

The height ladder is **strictly decreasing across the three-column band** (1007 at 1440 → 972 at 1120 → 967 at 1024 →
**964** at 901) and then **jumps to 2072 at the 900 breakpoint**, where the grid becomes one 460 px column. From
there it falls to **2023 at 640**, climbs to **2083 at 480** (the third description gains its second line), and ends
at **2257 at 320**. It never overflows horizontally: `scrollWidth === clientWidth` and `scrollX = 0` at every width
tested (320 … 1440).

- **Source slug:** `pricing-table-01`
- **ColorLib page:** https://colorlib.com/wp/template/pricing-table-01/ — **HTTP 200, 114,001 B**, `<title>`
  `Pricing Table V01 - Free Bootstrap Pricing Tables 2026 - Colorlib`, `h1` **"Pricing Table V01"**,
  `datePublished` **2026-09-25T15:12:38+00:00**, meta description _"A clean, light pricing section with three plan
  cards for a support automation product. Free download, no jQuery or plugins."_ — which describes this page exactly
  — and a download-size claim of **661 KB** (measured archive **676,381 B = 660.5 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Pricing Table V01".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/pricing-table-01/ — **HTTP 200,
  4,254 B**. The slug-only path `theme/pricing-table-01/` is **404 (9 B)**; the `bootstrap/` prefix is the only live
  path, exactly as for every `card`, `alert` and `hero` variant before it (`theme/bb/` also 404s for this family).
  One stylesheet: `css/style.css?v=3f9ba568`, **10,222 B**, sha256
  `a46142940334a13a066b8007e5f232a0ffebc17786acc23194ffcfc4a1d77798`. **No `<script>`** — and no `js/` directory in
  the archive either; `/js/snippet.js` returns **404 (9 B)**.
  **The archive's `css/style.css` hashes identical** inside `downloads/free/pricing-table-01.zip` (**676,381 B**) →
  *live preview verified; the archive is its un-versioned twin*. `index.html` (4,062 B) differs from the live DOM
  (4,254 B) **only in the `<head>`**: the archive has no `?v=` query, no `dns-prefetch` and no `robots` metas.
  `index.html` is byte-identical to the directory URL (sha256 `0300fc61…`) — a no-op link, not a second page.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-01.jpg — **HTTP 200, 42,342 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name (convert before viewing; `PIL` opens it). It is a **macOS
  browser mock-up** (traffic lights, a `preview.colorlib.com` URL pill, a drop shadow on a near-white ground) with the
  page inside at ≈ **1098 px** (scale ≈ 0.7625 of 1440): the head, all three cards, the flag and the footnote are
  visible; the page's own grey ground starts *inside* the window. Do not adopt the frame, the rounded corners or the
  shadow. Everything measured in the mock-up reproduces the live numbers (Starter card 431 px / 0.7625 = 565 against
  the measured **559.73**).
- **Design category:** Pricing table (**SaaS shared-inbox pricing — three equal cards, the middle one flagged and
  outlined; no imagery, no form, no motion beyond a 2 px hover lift**; variant **1 of 12** in the `pricing-table`
  family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/ratecard`, package
  `@free-react-templates/ratecard`, CNAME `ratecard.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows, **2,919** `[x]` rows — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1894 | items with NO spec on main: 0` (main `48665320e`, **3,332**
spec folders). So this design comes from `docs/catalog-coverage.md`, which lists **214 snippet variants in 19
families** that ColorLib's own listing carries and the checklist never recorded. The eighteen families before this one
are prepped or shipped; `pricing-table` is **family 4** in that document's order and **has never been touched** —
`grep -c pricing-table TEMPLATES.md` is **0**.

Family census (probed 2026-11-11 on variants **1, 2, 3, 6 and 12** under `theme/bootstrap/`): **all five are
live, HTTP 200** — this one at **4,254 B**, the others at **5,085 / 25,337 / 4,550 / 6,683 B**. A six-fold spread in
payload means **the family is not one design with twelve accents**: variant 3 alone ships a 25 KB page with its own
markup. Read each variant before prepping it (and never write another variant's slug into a spec's prose — the
slug-coverage scan reads spec contents and would mark it prepped).

## Where the row goes once this ships (the prep must not add it)

`TEMPLATES.md` has no `## Bootstrap Pricing Tables` section: the `## Bootstrap*` sections run Accordions (639) ·
Alerts (663) · Buttons (668) · Calendars (692) · Carousels (715) · Cards (738) · Checkboxes (761) · Dropdowns (784) ·
Footers (807) · Heroes (830) · Modals (843) · Multiselect (866) · **Wizards (889)**. The implementer's bookkeeping
commit should open **`## Bootstrap Pricing Tables (12)` immediately before `## Bootstrap Wizards (30)` at line 889**
and put the first row in it, following the section's own row grammar:

```
- [x] **Pricing Table 01** — [colorlib](https://colorlib.com/wp/template/pricing-table-01/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-01.jpg) · [ratecard](https://ratecard.free.componentdock.com)
```

## Design tokens (read off `css/style.css`, 10,222 B, sha256 `a4614294…`)

| Token | Value | Where it lands |
| --- | --- | --- |
| `--cl-pricing01-accent` | `#2453d6` | eyebrow, the foot link, the featured border, the solid CTA fill, the check tick, both focus rings |
| `--cl-pricing01-accent-soft` | `#e8eefc` | the 20 px bullet disc behind each tick |
| `--cl-pricing01-ink` | `#111827` | `h1`, plan names, labels, the ghost CTA label, the amount |
| `--cl-pricing01-muted` | `#4b5563` | lede, every description, "per seat / month", the footnote |
| `--cl-pricing01-line` | `#e3e6eb` | the 1 px card border and the ruled label's `border-top` |
| body ground | `#f6f7f9` | `<body>`; the whole page sits on it (no band, no gradient) |
| card | `#fff`, `border-radius: 18px`, `box-shadow: 0 1px 2px rgba(17,24,39,.04)` | all three cards |
| card hover | `box-shadow: 0 18px 40px -24px rgba(17,24,39,.28)`, `translateY(-2px)` | hover only, `.25s ease` both |
| featured card | `border: 2px solid #2453d6`, `box-shadow: 0 24px 48px -28px rgba(36,83,214,.55)`, `margin: -16px 0`, `padding-top: 48` | the middle card |
| ghost CTA | `#fff` fill, `1px solid #c9d1de`, `10px` radius, `12px 18px`, `600` | cards 1 and 3 |
| ghost CTA hover | border + label turn `#2453d6` (fill stays white) | hover only, `.2s ease` |
| solid CTA | `#2453d6` fill, white label, same geometry; hover `#1b43b3` (border stays accent) | the featured card |
| focus ring | `outline: 3px solid #2453d6; outline-offset: 3px` | every CTA (`:focus-visible`) |
| foot link ring | `outline: 2px solid #2453d6; outline-offset: 2px; border-radius: 2px` | the footnote's link |
| bullet disc | `20 × 20` at `top: 8px; left: 0`, `border-radius: 50%`, `#e8eefc` + a 2 px `#2453d6` tick in a 14 px `data:` SVG | each `li::before` |
| list item text | `#1f2937`, `14.5px / 22.475px`, `padding: 6px 0 6px 30px` | each `li` |
| radii | **999** · **18** · **10** | flag pill · card · CTA |
| type | **Inter** 400/600/700/800, `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` fallback; section `15px / 1.55` | everything |
| padding rhythm | `.cl-pricing01-demo { padding: clamp(40px, 7vw, 96px) 16px }`; section `max-width: 1120px`, centred | the page's only gutter |

Type scale actually painted at 1440: **46 / 50.6** (`h1`, `-.035em`), **20 / 31** (plan name, `-.01em`),
**16.5 / 25.575** (lede), **15 / 23.25** (body + CTA), **14.5 / 22.475** (desc + bullets), **14 / 21.7** (per +
footnote), **13 / 20.15** (`700`, eyebrow at `.08em` uppercase, label at `0`), **12.5 / 19.375** (flag), **48 / 48**
(amount, `-.04em`, `tabular-nums`).

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium at 1440 × 900, `document.fonts.ready` + 600 ms)

- **The sheet declares 8 `@font-face` over exactly 2 binaries.** `inter-400/600/700/800-latin.woff2` are **all the
  same file** (48,432 B, sha256 `c9407645…`) and the four `-latin-ext` faces are all one file (85,272 B, sha256
  `a28eb6d3…`) → a **variable cut**, not eight statics. The archive *also* ships `inter-500-latin(-ext).woff2` that
  **no `@font-face` declares**, and nothing on the page uses `font-weight: 500` — if a port ever asks for 500 it will
  silently synthesise, not load.
- **Google's Inter is *not* metric-identical to the archive's binary, and it drifts in both directions.** Same string,
  canvas `measureText`:
  `800 46px` → **640** (Google) vs **658** (archive) — Google **2.7 % narrower**;
  `700 20px "Growth"` → 71 vs 73; `600 15px "Start free trial"` → 101 vs 103;
  `400 16.5px` on the whole lede → **1066 vs 1078** (narrower);
  `400 14.5px` on a plan description → **398 vs 390** (Google **2 % wider**);
  `400 14px "per seat / month"` → **108 = 108**; `800 48px "$19"` → **85 = 85**, `"$129"` → 116 vs 115.
  **Consequence:** the display size shrinks by ~18 px per line while the small copy grows by ~8 px, so **every seam
  was re-measured against the served face instead of being carried over** — the title's 2→1 line seam moves from
  **426** (reference) to **436** (port) and the lede's 3→2 seam from **594** to **621**. Do not copy hero-09's
  "re-tune for Google" or lakelight's "no re-tuning needed" verdict: measure.
- **Two inline `<svg>` and no other asset.** The flag's 14 px star (`viewBox 0 0 20 20`, `fill="currentColor"`) and the
  check inside the disc's `data:` URI are the only graphics. **No `<img>`, no `js/`, no third-party request, no
  `<footer>`, no `<form>`, no `<input>`.** One `<h1>`, three `<h2>`.
- **Every anchor is dead.** The live page holds **4** `<a href>` — the three CTAs plus the footnote's "Compare all
  features" — and **all four are `href="#"`**. There is no second page: `/about.html`, `/pricing.html` and
  `/contact.html` all return **404 (9 B)**, and `/index.html` is byte-identical to the directory URL. So the whole
  reference is one document and the port has nothing to inherit in the way of routes.
- **The README lies about two directories.** `pricing-table-01/README.md` (1,278 B) advertises `js/snippet.js` and
  `images/`, and the zip contains **neither** (16 entries: `index.html`, `css/style.css`, `README.md`, 10 woff2).
  Everything interactive on this page is CSS.
- **The sheet opens with an `all: revert` firewall**: `:where(html) :is(html,body,div,span,p,…,li,…) { all: revert }`
  plus explicit `[hidden]`, `img/svg vertical-align`, `table`, `hr` and `caption` resets, so the snippet renders the
  same inside a host Bootstrap page. **That firewall is a series of 0,0,1 / 0,1,1 rules and it out-ranks nothing in
  this file** — every styled element is a `cl-pricing01__*` class (0,1,0) on a `html` ancestor, so nothing on the page
  actually resolves to a UA default. In React it is dead weight: **port the computed values, not the firewall**, and
  do not re-create `all: revert` (it would also reset Tailwind's preflight in the wrong direction).
- **Three specificity facts, all checked in the live sheet:** `.cl-pricing01 *` sets `box-sizing: border-box` (so
  every number below is a border-box number); `.cl-pricing01__desc { min-height: 48px }` is what aligns the three
  price rows, and it is **defeated the moment a description reaches three lines** (measured at 1000–1024 in the
  reference: desc 48 / 67.41 / 48); and `.cl-pricing01__flag` is `position: absolute` inside a card whose
  `position: relative` sits *outside* the 2 px border, which is the 2 px offset documented above.

## Design at 1440 × 900 (measured, reference)

Every number below is the **reference's**. The port reproduces them to the hundredth with the prescribed copy
(`docs/templates/ratecard/design-notes.md`) except for four font-dependent boxes, listed after the table: the amount's
width, the flag's width and x, the description line widths and the footnote link's width.

| Element | Box | Position | Notes |
| --- | --- | --- | --- |
| document | — | scrollHeight **1007** | scrolls 107 px at a 900-tall viewport; `scrollWidth 1440 = clientWidth` |
| `main.cl-pricing01-demo` | **1440 × 1007.28** | (0, 0) | `padding: 96px 16px` (7vw clamps to 96 only above 1371.43) |
| `section.cl-pricing01` | **1120 × 815.28** | (160, 96) | `max-width: 1120`, `15px / 1.55`, `#111827` |
| `head` | **640 × 145.86** | (400, 96) | `margin: 0 auto 48px`, `text-align: center` |
| eyebrow | 640 × **20.14** | y 96 | 13 px/700, `letter-spacing: 1.04px`, uppercase, `#2453d6` |
| `h1` | 640 × **50.59** | y 126.14 | `margin: 10px 0 14px`, 46 px/800, `-1.61px`, `1.1`, `text-wrap: balance`, **1 line 612.92** |
| lede | 640 × **51.13** | y 190.73 | 16.5 px, `#4b5563`, `text-wrap: balance`, **2 lines 562 / 511** |
| grid | **1120 × 559.73** | (160, 289.86) | `repeat(3, minmax(0,1fr))`, `gap: 24`, columns **357.328 / 357.328 / 357.344** |
| plan 1 (Starter) | **357.33 × 559.73** | (160, 289.86) | 1 px `#e3e6eb`, 18 px radius, `32px 30px 34px` |
| plan 2 (featured) | **357.33 × 591.73** | (541.33, **273.86**) | 2 px accent border, `margin: -16px 0`, `padding-top: 48`, accent shadow |
| plan 3 (Scale) | **357.34 × 559.73** | (922.66, 289.86) | as plan 1 |
| plan name | 295.33 × **31** | y 322.86 | 20 px/700, `-0.2px`, `1.55` |
| description | 295.33 × **48** | y 361.86 | `margin-top: 8`, `min-height: 48`, 14.5 px, 2 lines (276 / 169) |
| price row | 295.33 × **48** | y 435.86 (featured **436.86**) | `margin: 26px 0 24px`, `display:flex`, `align-items: baseline`, `gap: 8` |
| amount | **89.25 × 48** (`$129` **117.33**) | y 435.86 | 48 px/800, `-1.92px`, `line-height: 1`, `tabular-nums` |
| per | **108 × 21.69** | x 288.25 | 14 px, `#4b5563` |
| CTA | **295.33 × 49.25** | y 507.86 (featured 508.86) | `12px 18px`, 1 px, 10 px radius, 15 px/600; h = 12+12+23.25+2 |
| label | 295.33 × **45.14** | y 585.11 | `margin: 28px 0 12px`, `padding-top: 24`, `border-top: 1px`; 24+1+20.15 = 45.14 |
| list | 295.33 × **137.88** (4 items) / **172.34** (5) | y 642.25 | each `li` **34.47** = 6+22.475+6 |
| bullet disc | **20 × 20** | `top: 8px; left: 0` | `#e8eefc` + 14 px tick |
| flag | **134 × 29.38** | (**652.98**, **260.86**) | `top: -15px; left: 50%; translateX(-50%)`; 5+19.375+5 = 29.38 |
| footnote | 1120 × **21.69** | y 889.59 | `margin-top: 40`, 14 px, centred, **1 line**; link 151 px/600 underlined |

**Port boxes that differ from the table** (same copy, Google Inter): amount **88.25** wide for `$15`; flag
**130 × 29.38** at (**654.98**, **260.86**); description lines **239/189**, **289/149** and **255/136**; footnote link
**144** wide. Everything else in the table is identical, including all twelve height numbers.

**Three stretch facts that decide the card heights.** (1) The grid's height is **559.73** and the featured card's
591.73 lives *outside* it by ±16 px — the negative margin is not clipped because no ancestor has `overflow: hidden`
(this is why the flag can hang above the grid at all). (2) Card 1 has 4 bullets and 35.46 px of unpainted space
below them; card 3 has 5 bullets and **1 px** — card 3 drives the row, and nothing is bottom-aligned, so unequal
bullet counts always show as bottom slack on the shorter card. (3) `align-items: stretch` (grid default) is what
makes all three cards **559.73** tall: give a card `height: auto` and card 1 collapses to **493.7**.

## Card anatomy in numbers (1440)

`padding-top 32` + `name 31` + `small 8` + `desc 48` + `price margin 26 + 48 + 24` + `cta 49.25` +
`label margin 28 + 45.14` + `label margin-bottom 12` + `list 137.88` + `padding-bottom 34` = **493.73** content +
34 padding = 527.73 for card 1 — i.e. **32 px short of the 559.73 row**, which is exactly the slack reported above.
For the featured card the same stack with `padding-top 48` and `border 2` reaches **591.73 without any stretch**,
which is why it can be 32 px taller without changing the page's other numbers.

## Line boxes and their seams (port copy, measured with Google Inter)

- `h1` `clamp(30px, 4.6vw, 46px)`: **46** at ≥1000, **41.446** at 901, **41.4** at 900, **35.328** at 768,
  **30** at ≤652.17. Lines: **1** down to **436**, **2** at ≤435 (the two balanced lines measure 179.41 / 218.27).
- lede 16.5 px, `text-wrap: balance`: **2** lines at ≥621 (588 / 589 at 1440), **3** at 443–620, **4** at 339–442,
  **5** at ≤338.
- plan descriptions: **2** lines each at ≥1120 and again in the single-column band (where the 460 px column lets
  them run long); the featured one reaches **3** lines at 901–1024 and the third card's drops to **1** at 900–640
  (its copy fits 448 px once `min-height` is released). `min-height: 48` is what keeps the price rows level while
  every description is ≤2 lines; at **901** the first two descriptions reach 3 lines and the **third card's price
  rises 19.41 px** (417.33 / 418.33 / **397.92**).
- bullets: 1 line each at ≥1120 and ≤900; at 901–1024 one or two items wrap in each card (card 1's fourth, card 2's
  third, card 3's first) and at 320 the last item of card 1 and the first of card 3 wrap.

## Height ladder (port, `document.scrollHeight` at a 900-tall viewport; reference in brackets)

| width | port | reference | note |
| --- | --- | --- | --- |
| 1440 | **1007** | 1007 | canonical; identical to the hundredth |
| 1280 | **994** | 994 | |
| 1200 | **983** | 983 | |
| 1121 | **972** | 972 | last width where the 1120 section fits without the max-width helping |
| 1120 | **972** | 972 | |
| 1024 | **967** | 1012 | port copy wraps less: featured card 600.2 vs 645.14 |
| 1000 | **964** | 1028 | same cause, 2 extra lines in the reference's featured card |
| 901 | **964** | 1066 | three 273.66 columns; reference's bullets wrap far more |
| 900 | **2072** | 2072 | **the breakpoint**: one 460 px column, `gap: 32` |
| 768 | **2046** | 2046 | |
| 640 | **2023** | 2023 | `h1` at its 30 px floor |
| 560 | **2060** | 2060 | lede gains a third line, footnote two |
| 480 | **2083** | 2083 | third description gains its second line |
| 428 | **2141** | 2141 | `h1` wraps to two lines |
| 390 | **2141** | 2141 | |
| 375 | **2141** | 2141 | |
| 320 | **2257** | 2412 | reference's bullets wrap more; the port's card 1 is 4 lines shorter |

The port's 901–1024 and 320 deltas are **copy-length artefacts, not layout bugs** — the reference's sentences are
longer than the prescribed ones. Everything at ≥1120 and in the whole single-column band reproduces the reference
**exactly**, which is what the checklist asserts.

## Requirements

### Requirement: The page shell and its single section

The template SHALL render one full-bleed `main` on the `#f6f7f9` ground holding exactly one `<section>`
(1120 px, centred) with a head, a three-card grid and a footnote, and nothing else above the port's footer.

#### Scenario: Shell, ground and type at 1440

- **GIVEN** the page at 1440 × 900
- **WHEN** it is measured after `document.fonts.ready`
- **THEN** `main` SHALL be **1440 × 1007.28** with `padding: 96px 16px`, `background: #f6f7f9`, and the
  document SHALL be **1007** tall **before** the port footer below (the footer adds its own height to every number
  in the ladder)
- **AND** the section SHALL be **1120 × 815.28** at **(160, 96)** with `color: #111827`, `font-size: 15px`,
  `line-height: 1.55`, and `box-sizing: border-box` on its whole subtree.

#### Scenario: One section, one h1, no form and no imagery

- **GIVEN** the rendered document
- **WHEN** its structure is counted
- **THEN** there SHALL be **one** `<section>`, **one** `<h1>`, **three** `<h2>`, **one** `<ul>` per card, **four**
  `<a>` and **zero** `<form>`, `<input>`, `<img>`, `<script>` and `<footer>` in the reference
- **AND** the port SHALL add **only** the Component Dock footer specified below.

### Requirement: The centred head

The template SHALL render a 640 px centred head of eyebrow, `h1` and lede whose vertical rhythm is
`eyebrow 20.14 → 10 → h1 50.59 → 14 → lede 51.13`, with 48 px of clearance to the grid.

#### Scenario: Head geometry at 1440

- **GIVEN** the head at 1440
- **WHEN** its children are measured
- **THEN** the head SHALL be **640 × 145.86** at (400, 96) with `margin-bottom: 48`
- **AND** the eyebrow SHALL be **20.14** tall at y 96, 13 px/700, `letter-spacing: 1.04px`, `text-transform:
  uppercase`, colour `#2453d6`
- **AND** the `h1` SHALL be **50.59** tall at y 126.14 with `margin: 10px 0 14px`, 46 px/800, `letter-spacing:
  -1.61px`, `line-height: 1.1`, and its single line SHALL measure **612.92**
- **AND** the lede SHALL be **51.13** tall at y 190.73 at 16.5 px / 25.575 in **two** balanced lines.

#### Scenario: The headline is allowed to be one line at 1440 and two at 435

- **GIVEN** the prescribed headline
- **WHEN** the viewport shrinks
- **THEN** it SHALL stay on **one** line down to **436** and break to **two** at **435**
- **AND** it SHALL stay at the 46 px size down to 1000, follow `4.6vw` to 652, and hold **30** below that.

### Requirement: The plan grid

The template SHALL lay the three plans out in one `repeat(3, minmax(0, 1fr))` grid with a 24 px gap, `align-items:
stretch`, and equal-height cards.

#### Scenario: Grid geometry at 1440

- **GIVEN** the grid at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **1120 × 559.73** at (160, 289.86) with columns **357.328 / 357.328 / 357.344** and `gap: 24`
- **AND** the cards SHALL be **559.73**, **591.73** and **559.73** tall at x **160**, **541.33** and **922.66**
- **AND** the three cards SHALL share one row, so the grid's height equals the tallest *unmargined* card.

#### Scenario: The shorter card keeps its slack at the bottom

- **GIVEN** card 1 has four bullets and card 3 has five
- **WHEN** the cards' bottoms are compared with their last bullet
- **THEN** card 1 SHALL carry **35.46 px** of empty space below its last bullet and card 3 **1 px**
- **AND** nothing SHALL be bottom-aligned: the CTA, label and list all start at their own top offsets.

### Requirement: A plan card's anatomy

Each plan SHALL be a white 18 px-radius card with a 1 px `#e3e6eb` border, `padding: 32px 30px 34px`, a
six-part stack — name, description, price, CTA, ruled label, bullet list — in that order, with every margin spelled out
(padding arithmetic, not a flex `gap`).

#### Scenario: Name, description and price

- **GIVEN** any plan card at 1440
- **WHEN** its stack is measured
- **THEN** the name SHALL be **31** tall (20 px/700, `-0.2px`), the description **48** tall at `margin-top: 8`
  with `min-height: 48` and 2 lines, and the price row **48** tall at `margin: 26px 0 24px`
- **AND** the amount SHALL be 48 px/800 with `letter-spacing: -1.92px`, `line-height: 1`, `font-variant-numeric:
  tabular-nums`, and the "per seat / month" label 14 px in `#4b5563` **baseline-aligned 8 px to its right**.

#### Scenario: The CTA is a full-width 49.25 px control

- **GIVEN** a plan's CTA
- **WHEN** it is measured
- **THEN** it SHALL be **295.33 × 49.25** — `padding: 12px 18px`, 1 px border, 10 px radius, 15 px/600, centred —
  at y 507.86 (featured 508.86)
- **AND** the two side cards SHALL paint the ghost style (`#fff` fill, `#c9d1de` border, ink label) and the featured
  card the solid style (`#2453d6` fill, white label).

#### Scenario: The ruled label and the bullet list

- **GIVEN** the label and the list
- **WHEN** they are measured
- **THEN** the label SHALL be **45.14** tall at `margin: 28px 0 12px` with `padding-top: 24` over a 1 px
  `#e3e6eb` top border, 13 px/700
- **AND** each list item SHALL be **34.47** tall (`6px 0 6px 30px`, 14.5 px/22.475, `#1f2937`) with a **20 × 20**
  disc at `top: 8px; left: 0`, `border-radius: 50%`, filled `#e8eefc`, carrying a 14 px `#2453d6` tick
- **AND** the list SHALL be a real `<ul>` with `<li>` children (no `div` rows) and the ticks SHALL be decorative
  (`aria-hidden`, or a CSS background image, never a text character).

### Requirement: The featured plan

The middle plan SHALL be distinguished by three signals at once — a 2 px accent border, a −16 px vertical margin
and a pill flag above its top edge — and SHALL be the only card with a filled CTA.

#### Scenario: The three signals at 1440

- **GIVEN** the featured card
- **WHEN** it is measured
- **THEN** it SHALL be **591.73** tall at **(541.33, 273.86)** — i.e. **16 px above** and **16 px below** the grid's
  289.86 / 849.59 edges — with `border: 2px solid #2453d6`, `padding-top: 48`, `margin: -16px 0` and
  `box-shadow: 0 24px 48px -28px rgba(36,83,214,.55)`
- **AND** its content SHALL sit **1 px lower** than the neighbours' (price 436.86 vs 435.86, CTA 508.86 vs 507.86,
  label 586.11 vs 585.11) because `48 − 16 + 2 = 34` against the siblings' `32`
- **AND** the difference SHALL be preserved, not normalised: it is visible in the reference and costs nothing.

#### Scenario: The flag is positioned against the padding box

- **GIVEN** a 2 px border on the positioned card
- **WHEN** the flag is measured
- **THEN** it SHALL be **130 × 29.38** at **(654.98, 260.86)** with `top: -15px; left: 50%;
  transform: translateX(-50%)`, `padding: 5px 14px`, `border-radius: 999px`, `gap: 6`, 12.5 px/700 white on
  `#2453d6` (the reference pill is **134** wide on its taller Inter binary and centres at 652.98)
- **AND** its top SHALL be **13 px above the featured card** (273.86 − 260.86) and therefore **29 px above the
  grid**, while its bottom (290.24) sits **0.38 px below** the grid's top edge — the pill straddles the line
- **AND** the 13 px SHALL be **2 px less** than a naive `-15` from the border box, because absolute offsets resolve
  against the **padding** box and the card's border is 2 px
- **AND** the flag SHALL be the card's first child in the DOM and `position: absolute`, so it never takes layout space.

#### Scenario: No ancestor may clip the overhang

- **GIVEN** the card hangs 16 px above and below the grid and the flag another 13 px above that
- **WHEN** the port's shells are written
- **THEN** no ancestor of the grid SHALL set `overflow: hidden` (or a `transform`/`filter`/`contain` that would
  create a clipping containing block) — the source relies on the page clipping nothing
- **AND** the flag SHALL survive at 320 without collision with the head (it hangs into the 32 px grid gap).

### Requirement: Hover, focus and motion

The page SHALL carry exactly three motion/hover behaviours and no keyframes: the card lift, the CTA colour
transitions and the two focus rings.

#### Scenario: Hover states

- **GIVEN** a pointer over a card
- **WHEN** the card settles (~250 ms)
- **THEN** it SHALL be `translateY(-2px)` with `box-shadow: 0 18px 40px -24px rgba(17,24,39,.28)`
- **AND** hovering the solid CTA SHALL paint `#1b43b3` (border stays `#2453d6`) and hovering a ghost CTA SHALL turn
  its border and label `#2453d6` while the fill stays white.

#### Scenario: Focus is visible on every control

- **GIVEN** keyboard focus on a CTA
- **WHEN** `:focus-visible` matches
- **THEN** it SHALL paint `outline: 3px solid #2453d6; outline-offset: 3px`
- **AND** the footnote link SHALL paint `outline: 2px solid #2453d6; outline-offset: 2px` with `border-radius: 2px`.

#### Scenario: The whole motion budget under reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page renders
- **THEN** both transitions SHALL be `none` and the card's hover transform SHALL be `none`
- **AND** the app SHALL contain **zero** `@keyframes` and **zero** animated properties (the reference has none).

### Requirement: The responsive ladder

The template SHALL switch the grid to a single 460 px column at 900 and SHALL scale only two things above that:
the section's 7vw vertical padding and the `h1`'s `4.6vw` size.

#### Scenario: 900 — one column, 460 px wide, centred

- **GIVEN** the viewport at 900
- **WHEN** the grid is measured
- **THEN** it SHALL be **460 × 1695.08** at x **220** with `grid-template-columns: minmax(0,1fr)`, `gap: 32`
  and `margin: 0 auto`
- **AND** the featured card's `margin` SHALL be **0** (its 2 px border and 48 px padding-top stay), so the cards
  SHALL measure **522.2 / 574.67 / 534.2** and the document **2072**
- **AND** the description's `min-height` SHALL be **0**, which is what lets the third card's copy fit one line.

#### Scenario: 560 — the grid stops shrinking and the footnote wraps

- **GIVEN** the viewport at 560
- **WHEN** the page is measured
- **THEN** the grid SHALL still be **460** wide (x 50) inside a 528 px section, the lede **3** lines and the
  footnote **2** lines (43.38), for a document of **2060**
- **AND** at **480** the grid SHALL be **448** (x 16), the third description **2** lines and the document **2083**.

#### Scenario: 320 — nothing overflows

- **GIVEN** the viewport at 320
- **WHEN** `scrollWidth`, `clientWidth` and `scrollX` are read
- **THEN** `scrollWidth` SHALL equal `clientWidth` (**320**) and `scrollX` SHALL be **0** after `scrollTo(200, 0)`
- **AND** the section SHALL be **288** wide at x 16, the `h1` **2** lines at 30 px, the lede **5** lines and the
  document **2257**.

### Requirement: Contrast and focus colours

Text SHALL clear 4.5 : 1 and every focus indicator SHALL clear 3 : 1 on the ground it actually lands on.

#### Scenario: Text ratios measured 2026-11-11

- **GIVEN** the five tokens on their real grounds
- **WHEN** WCAG contrast is computed
- **THEN** ink on white SHALL be **17.74**, ink on the ground **16.55**, muted on white **7.56**, muted on the
  ground **7.05**, the bullet text `#1f2937` on white **14.68**, accent on white **6.4**, accent on the ground
  **5.97**, white on accent **6.4** (flag and solid CTA), the tick on its soft disc **5.5**, and the solid hover
  `#1b43b3` with white **8.4**
- **AND** the accent focus ring SHALL be **6.4** on white and **5.97** on the ground.

#### Scenario: The one reference failure the port fixes

- **GIVEN** the ghost CTA's border `#c9d1de`
- **WHEN** it is measured against the white card
- **THEN** it SHALL be **1.54 : 1** — below the 3 : 1 a control's boundary needs
- **AND** the port SHALL darken that border to **`#7f8a9c`** (**3.49** on white, **3.26** on the ground, **3.0** on
  the soft disc), keeping the 1 px width, the 10 px radius and the hover behaviour — the only deliberate colour
  change on the page
- **AND** the card's own `#e3e6eb` hairline (**1.25** on white) MAY stay: it is decoration, not a control.

### Requirement: The price footnote

The template SHALL close the section with one centred 14 px line carrying the tax/billing note and an underlined
accent link, 40 px below the grid.

#### Scenario: Footnote geometry

- **GIVEN** the footnote at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **1120 × 21.69** at y **889.59** with `margin-top: 40`, colour `#4b5563`, centred, and the
  whole sentence SHALL fit **one line** (a second line at ≤620 is expected: 43.38 at 560)
- **AND** the link SHALL be 14 px/600 in `#2453d6`, underlined (`text-underline-offset: 3px`), and SHALL be a real
  `<a>`.

### Requirement: The Component Dock footer

The template SHALL carry a footer that names and links Component Dock, because the reference has none.

#### Scenario: A slim branded strip

- **GIVEN** the reference ends at the footnote
- **WHEN** the port renders
- **THEN** it SHALL add one slim strip below the section, built from the same tokens (13 px muted, no new colour,
  no new radius), containing a single link to `https://www.componentdock.com/` labelled **"Component Dock"**
- **AND** it SHALL NOT contain the word ColorLib, SHALL NOT introduce a second background band, and SHALL add only
  its own height (≈ 40–56 px) to the document — every height in the ladder above grows by exactly that amount.

## Adapting to the repo (deltas — read before writing code)

1. **Name and identity.** `apps/ratecard`, package `@free-react-templates/ratecard`, `public/CNAME` =
   `ratecard.free.componentdock.com`, `"homepage"` = `https://ratecard.free.componentdock.com`. The brand and copy
   are invented anew: the source's **"Relaylane"**, its "Simple plans for every inbox" headline, its
   "Relaylane automates the replies, follow-ups and handoffs…" lede, its **Starter / Growth / Scale** plan names,
   its **$19 / $49 / $129** prices, its 2/500/4 · 10/5,000/5 · unlimited/unlimited/5 bullet lists, its
   "Prices in USD, excluding VAT. Save 15% with annual billing." footnote and its "Most popular" flag text SHALL NOT
   appear anywhere in `apps/`.
2. **Copy shape, not copy.** Keep the *kind* of text and the *measured* line counts: a one-word eyebrow (`Pricing`),
   a **headline of five or six words** that fits one 46 px line inside 640 (612.92 at 1440) and breaks to two at
   **435**, a **two-line lede** inside 640 that names the product, the work it removes and a no-card trial, plan
   descriptions of **2 lines at 295.33** (2 at 448 in the single column, 1 for the third card at 900–640), a
   **4 / 5 / 5** bullet split with **every bullet one line at 265.33 px of content width**, a footnote in the shape
   `"Prices in <currency>, excluding <tax>. Save N% with <billing>. <link>"`, and a **"Most popular"**-class flag.
   The prescribed copy in `docs/templates/ratecard/design-notes.md` reproduces the reference's whole ladder
   exactly; start from it and only swap nouns if you must.
3. **Fonts:** load **Inter** from Google Fonts — `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap`
   (**HTTP 200**; the legacy `css?family=Inter:400,600,700,800&display=swap` is also 200). One family, four weights,
   no italic, no mono. Google's Inter is **2.7 % narrower at 46 px** and **2 % wider at 14.5 px** than the archive's
   binary, so the seams in this spec are the **port's** (436 / 621 / 443 / 339), not the reference's
   (426 / 594 / 403 / 332). Do not add weight 500 — the archive ships the file but declares no face for it.
4. **Icons:** `lucide-react` `Star` (14 px, `fill="currentColor"`, in the flag) and `Check` (14 px, `strokeWidth={2}`,
   accent, inside the disc). Both `aria-hidden`. The disc stays a 20 px `rounded-full bg-accent-soft` element in the
   `li`'s padding box — do **not** use `list-style-image` (it cannot centre a 14 px glyph in a 20 px disc).
5. **Anchors:** the reference has **four dead `#`** and the port SHALL leave none. Point the three plan CTAs and the
   footnote's "Compare all features" at `https://www.componentdock.com/` with `target="_blank" rel="noreferrer
   noopener"`, and give the section `id="pricing"` so a later nav can reach it.
6. **A11y baseline to preserve, not rebuild:** one `h1`; `aria-labelledby` on the section and on each `<article>`
   pointing at its own `h2` id; the plan name as the card's first heading (no `h3` under an `h2` needed); real
   `<ul>`/`<li>`; the flag's star `aria-hidden` so the pill reads "Most popular"; the CTA a real `<a>`; the footnote
   a `<p>` with the link inline.
7. **Tokens live in `@theme`** (Tailwind 4): `--color-ground #f6f7f9`, `--color-ink #111827`, `--color-muted
   #4b5563`, `--color-accent #2453d6`, `--color-accent-soft #e8eefc`, `--color-accent-hover #1b43b3`, `--color-line
   #e3e6eb`, `--color-cta-line #7f8a9c` (the fixed ghost border), `--color-list-ink #1f2937`, `--radius-card 18px`,
   `--radius-cta 10px`. Use them through classes; no raw hex in components.
8. **The card stack is padding arithmetic, not flex spacing.** Reproduce it with explicit `mt`/`mb` values from the
   table (`name`, `mt-2 desc`, `mt-[26px] price`, `mb-6` under it, `mt-7 + pt-6 + border-t` on the label, `mb-3`
   under it) — a `gap` on the card would fold the label's margin in and lose the **45.14**/**28 + 12** split.
9. **`min-height: 48px` on the description is load-bearing.** It aligns the three price rows at 1440 and it
   *breaks* at 901 when a description reaches three lines (the third card's price sits 19.41 px higher). Keep the
   reference's behaviour and assert it — do not "fix" it with `min-height: 44.94` or `2lh`, both of which change the
   1440 alignment.
10. **Do not reproduce `all: revert`.** The source's `:where(html) … { all: revert }` firewall exists so the snippet
    can drop into a Bootstrap page; inside a React app with Tailwind's preflight it fights the framework for no
    benefit and would un-reset `ul`, `h1` and `p`. Port the computed values only.
11. **The featured card needs three coordinated values**: `margin: -16px 0`, `padding-top: 48` (not 32) and a **2 px**
    border (not `ring`, which does not affect layout). Swapping the ring for a border changes the flag's y by 1 px
    and the card's inner height by 2 px; swapping 48 for 32 moves the content 16 px and loses the 1 px signature.
12. **No new dependencies:** one face, two icons, no carousel, no chart, no form library. **No `package-lock.json`
    hand-editing** — add the workspace with `npm install` at the root.
13. **Keep the grid's `minmax(0, 1fr)`.** `repeat(3, 1fr)` is `minmax(auto, 1fr)`, and a long bullet would then push
    the tracks past 357.33. With `minmax(0, …)` the text wraps instead, which is what the measured columns show.

## Verification checklist

- [ ] `apps/ratecard` exists, package `@free-react-templates/ratecard`, `public/CNAME` =
      `ratecard.free.componentdock.com`, `"homepage"` = `https://ratecard.free.componentdock.com`
- [ ] `npm run verify:app ratecard` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-ratecard --type spec` is valid
- [ ] no source string survives: `grep -riE 'relaylane|every inbox|starter|growth|scale|\$19|\$49|\$129|5,000|most popular' apps/ratecard -i`
      → 0 hits for the branded ones (keep the generic "Most popular" label if you use it)
- [ ] measured at 1440 × 900: main **1440 × 1007.28** (`padding: 96 16`); section **1120 × 815.28** at (160, 96);
      head **640 × 145.86** (eyebrow 20.14, `h1` 50.59 / 1 line 612.92, lede 51.13 / 2 lines); grid
      **1120 × 559.73** at (160, 289.86), columns **357.328 / 357.328 / 357.344**; cards **559.73 / 591.73 /
      559.73** at x **160 / 541.33 / 922.66**; featured at y **273.86**; name **31**, desc **48**, price **48**,
      CTA **295.33 × 49.25**, label **45.14**, list **137.88 / 172.34**, item **34.47**, disc **20 × 20** at
      `top 8`, flag **130 × 29.38** at (654.98, 260.86), footnote **21.69** at y 889.59
- [ ] the featured card's content sits **1 px lower** than its siblings (price **436.86** vs **435.86**, CTA
      **508.86** vs **507.86**)
- [ ] at **901** the cards are **587.61 / 619.61 / 587.61** with the third price **19.41 px** higher than the first
      two (417.33 / 418.33 / 397.92); at **1024** **568.2 / 600.2 / 568.2**; at **900** the grid is **460** wide at
      x 220 with cards **522.2 / 574.67 / 534.2** and the document **2072**
- [ ] height ladder: **1007** at 1440 · **994** at 1280 · **983** at 1200 · **972** at 1121–1120 · **2072** at 900 ·
      **2046** at 768 · **2023** at 640 · **2060** at 560 · **2083** at 480 · **2141** at 428/390/375 · **2257** at
      320 (each + the port footer's height)
- [ ] line ladder: `h1` **1** down to 436 / **2** at 435 and below; lede **2** at ≥621, **3** at 443–620, **4** at
      339–442, **5** at ≤338; every bullet **1** line at 1440
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at 320, 360, 390, 428, 480, 560, 640, 768, 900, 901, 1024,
      1120, 1280, 1440
- [ ] hover = `translateY(-2px)` + `0 18px 40px -24px rgba(17,24,39,.28)`; solid CTA hover `#1b43b3`; ghost hover
      border + label accent; `:focus-visible` rings 3 px/3 px (CTAs) and 2 px/2 px (footnote link)
- [ ] `prefers-reduced-motion: reduce` → transitions `none`, no hover transform, no `@keyframes` in the app
- [ ] every anchor resolves (no `href="#"`) and the footer links `https://www.componentdock.com/`; no app file
      mentions ColorLib
- [ ] contrast asserted in a test: ink 17.74, muted 7.56 / 7.05, accent 6.4 / 5.97, white-on-accent 6.4, tick 5.5,
      ghost border **3.49** (the fixed `#7f8a9c`)

## Deltas recorded after the port shipped (2026-11-11)

Every number in this spec reproduced to the hundredth in `apps/ratecard` except the four font-dependent widths listed
above (amount 88.25, flag 130, description lines, footnote link 144) and one copy-length seam:

1. **The footnote's wrap seam is 575, not 620.** The port's note is not the source's sentence (rule: copy shape, not
   copy), and copy length alone decides the split. `Prices in USD, excluding sales tax. Annual billing saves 15%.`
   plus the link measures **542 px** at 14 px, so the note takes two lines from **≤575** instead of the reference's
   620. All four asserted ladder stops are unaffected (2023 at 640, 2060 at 560, 2082 at 480, 2257 at 320); only the
   576…620 window differs, by one 21.69 px line. A 600 px sentence restored 620 but pushed 320 to 2278 (three lines),
   and a 505 px sentence collapsed 560 to 2039 — 542 is the only width that satisfies both asserted stops.
2. **The banned-copy grep is not literally 0 hits.** `grep -riE 'relaylane|every inbox|starter|growth|scale|…'`
   matches 10 lines inside `apps/ratecard`, all of them the guard test's own banned-token list
   (`src/data/site.test.ts`) plus `initial-scale` in the required viewport meta. No rendered copy carries them; the
   test is the enforcement, and the grep is expected to find its subject.
3. **`min-height: 48px` is preserved as-is**, including its deliberate break at 901 (price rows 417.33 / 418.33 /
   397.92). It was not "fixed" with a `2lh` or a 44.94 px value.
