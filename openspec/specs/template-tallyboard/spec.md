# Template: Tallyboard (Pricing table — a four-plan pageview-analytics pricing page on warm cream: a centred title/lede head, a monthly↔annual switch whose prices count up, a four-column grid of 22 px cards whose third is a solid deep-green "Best value" panel, pill CTAs, tick bullets and no imagery, no form, no second band)

## Purpose

**One pricing-table section with a live billing switch** — the **second variant of the `pricing-table` snippet family**
(12 variants). It is the family's **first stateful member**: a single `<button aria-pressed>` that flips four plan
cards between monthly and annual pricing, counting each figure up over **600 ms** and swapping each card's billing note
at the same moment. There is **no photograph, no form, no icon font, no framework**; ten named colour tokens live on
one section class, there are **two layout media queries** (`1080`, `600`) plus a `prefers-reduced-motion` block, and the
document is **919 px tall at 1440 × 900** — i.e. it scrolls by exactly **19 px** at the canonical viewport.

A single `<main class="cl-pricing02-demo">` holds **one `<section>`** whose children are a **centred head** (`h1` + lede
inside a 680 px column), a **centred billing row** (two side labels around a 60 × 34 switch), a **`role="status"` live
region** (empty at load), and a **`repeat(4, minmax(0,1fr))` grid with `gap: 18`**. Each plan card is a white-cream,
**22 px-radius**, hairline-bordered flex column of **`padding: 28px 24px 30px`** holding a 19 px plan name, a 14 px
views line, a **46 px price row** (`$40` at 46 px/800 with `tabular-nums` plus a 15 px "/ mo"), a
**23 px-min-height** billing note, a **full-width 44.47 px pill CTA**, and a tick-bulleted feature list. The third card
is the family's **inverted** featured panel: solid `#14532d`, body copy in `#f7fee7`, muted copy in `#d9f99d`, its CTA
the only **lime** fill on the page, and an absolute **"Best value"** pill sitting inside the card's top-right corner.

Unlike the previous variant of this family (prepped as `ratecard`, a three-card cooler page with a ghost-CTA
hierarchy), the featured card here is **not taller, not offset and not outlined** — it is **the same 452.19 px box as
its three siblings** and differs only in fill, text colour and CTA. The height device of the family survives in a new
form: all four cards are **exactly equal** because the grid stretches them to the tallest list, which leaves
**55.94 / 23.47 / 23.47 / 1.00 px** of unused space below the last bullet. That last bullet is load-bearing — it wraps
to two lines at 1440 and is the only reason card 4 is not identical to card 2.

- **Source slug:** `pricing-table-02`
- **ColorLib page:** https://colorlib.com/wp/template/pricing-table-02/ — **HTTP 200, 114,437 B**, `<title>`
  `Pricing Table V02 - Free Bootstrap Pricing Tables 2026 - Colorlib`, `h1` **"Pricing Table V02"**,
  `datePublished` **2026-09-25T15:12:41+00:00**, meta description _\"Four plan cards for a web analytics product with a
  toggle switch that moves between monthly and annual billing. Free download, no jQuery or plugins.\"_ — which
  describes this page exactly — and a download-size claim of **248 KB** (measured archive **254,156 B = 248.2 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Pricing Table V02".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/pricing-table-02/ — **HTTP 200,
  5,085 B**. The slug-only path `theme/pricing-table-02/` is **404 (9 B)** and `theme/bb/pricing-table-02/` is **404
  (9 B)**; the `bootstrap/` prefix is the only live path, exactly as for every `card`, `alert`, `hero` and
  `pricing-table` variant before it. One stylesheet: `css/style.css?v=ed71bf2a`, **11,546 B**, sha256
  `1deee5488522c6958d3614630b0cbefd2e66885d11b72132b923802ee151f862`; one script: `js/snippet.js?v=d20d1742`,
  **1,920 B**, sha256 `53474a7060d52fdeceec4c3b6b15f742ddf3f89003320860b5aab4223057ea20` (**52 lines**, IIFE, no jQuery).
  **Both files hash identical** to the copies inside `downloads/free/pricing-table-02.zip` (**254,156 B**) →
  *live preview verified; the archive is its un-versioned twin*. The archive's `index.html` (**4,882 B**, sha256
  `fadc8df5d27c…`) differs from the live DOM (**5,085 B**, sha256 `9a94e6c389ce…`) **only in the `<head>`**: the live
  copy adds a `noindex` robots meta, a `cdnjs.cloud` `dns-prefetch`, `fetchpriority="high"` and the two `?v=` query
  strings (**203 B** in total). `index.html` is byte-identical to the directory URL — a no-op link, not a second page.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-02.jpg — **HTTP 200, 65,417 B**,
  **1200 × 972**, served as a **real JPEG** this time (progressive, 3 components — no AVIF conversion needed, unlike
  the previous variant). It is a **macOS browser mock-up** (traffic lights, a `preview.colorlib.com` URL pill, a drop
  shadow on a near-white surround) with the page inside at ≈ **1113 px** (scale ≈ **0.773** of 1440): head, the whole
  billing row, all four cards, the featured panel and the two-line bullet in card 4 are visible; the page's own cream
  ground starts *inside* the window. Do not adopt the frame, the rounded window corners or the shadow.
- **Design category:** Pricing table (**pageview-analytics SaaS — four equal cards, the third inverted as a solid
  deep-green panel with a lime CTA; a monthly/annual switch that animates the prices; no imagery, no form, no
  keyframes**; variant **2 of 12** in the `pricing-table` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/tallyboard`, package
  `@free-react-templates/tallyboard`, CNAME `tallyboard.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows, **2,919** `[x]` rows — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1895 | items with NO spec on main: 0` (main `bde52aa72`, **3,334**
spec folders). So this design comes from `docs/catalog-coverage.md`, which lists **214 snippet variants in 19
families** that ColorLib's own listing carries and the checklist never recorded. The `pricing-table` family is
**family 4** in that document's order; its **first** variant is prepped (`ratecard`, spec on main, not yet built) and
**this is the second** — `grep -c pricing-table TEMPLATES.md` is **0**, so the section itself does not exist yet.

Family census (probed 2026-11-11 on variants **1, 2, 3, 6 and 12** under `theme/bootstrap/`): **all five are live,
HTTP 200** — **4,254 / 5,085 / 25,337 / 4,550 / 6,683 B**. A six-fold payload spread means **the family is not one
design with twelve accents**: variant 3 alone ships a 25 KB page with its own markup, and this one is **828 B larger
than its predecessor** and structurally different (four cards, a switch, no footnote). Read each variant before
prepping it, and never write another variant's slug into a spec's prose — the slug-coverage scan reads spec contents
and would mark that item prepped.

## Where the row goes once this ships (the prep must not add it)

`TEMPLATES.md` has **no** `## Bootstrap Pricing Tables` section yet (the previous prep's spec asked for it at line 889;
`grep -c 'Bootstrap Pricing Tables' TEMPLATES.md` is still **0** because that app has not shipped). The bookkeeping
commit should therefore either **append to** `## Bootstrap Pricing Tables (12)` if the implementer of the first variant
already opened it, or **create it immediately before `## Bootstrap Wizards (30)` (now line 890)** and add both rows.
Row grammar verified against the file (`[colorlib] · ![preview] · [app]`):

```
- [x] **Pricing Table 02** — [colorlib](https://colorlib.com/wp/template/pricing-table-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-02.jpg) · [tallyboard](https://tallyboard.free.componentdock.com)
```

## Design tokens (read off `css/style.css`, 11,546 B, sha256 `1deee548…`)

| Token | Value | Where it lands |
| --- | --- | --- |
| ground | `#fbf7ef` | `body` background — warm cream, the only page ground |
| card | `#fffdf8` | the three non-featured plan panels |
| green | `#14532d` | featured panel fill **and** its 1 px border; the switch's ON track; every focus ring's default colour; the tick glyph |
| lime | `#bef264` | the "Save 20%" chip, the "Best value" flag, the featured CTA, the featured tick glyph |
| chip ink | `#1a2e05` | text on lime (chip, flag, featured CTA) |
| ink | `#1c1917` | body text, plan names, amounts, the dark CTAs |
| muted | `#57534e` | lede, views line, billing note, "/ mo", the inactive side label |
| line | `#e7e0d2` | the 1 px card hairline |
| pop body | `#f7fee7` | featured card's name / amount / list text |
| pop muted | `#d9f99d` | featured card's views line, "/ mo", note, and its focus ring |
| switch off | `#a8a29e` | the OFF track — **2.36 : 1 on the ground, the one colour the port must change** (see the contrast requirement) |
| switch off (port) | `#8a8079` | the fixed track: **3.61** on the ground, **3.79** on a card, **3.86** against the white knob |
| CTA hover | `#44403c` | dark CTA hover |
| lime hover | `#d9f99d` | featured CTA hover |

Radii: **22** (card), **999** (CTA, flag, chip, both switch and track), **50 %** (knob). Borders: 1 px everywhere
(`--line` on three cards, `green` on the featured one, `0` on the switch). Shadows: exactly one —
`0 2px 6px rgba(0,0,0,.25)` under the switch knob; the cards carry **no** shadow at all (the previous variant's card
shadow is *not* part of this design).

Font: **Plus Jakarta Sans**, `system-ui` fallback, weights **400 / 600 / 700 / 800** and **no 500 usage** (a
`plus-jakarta-sans-500-*` pair ships in `fonts/` and is **undeclared and unused** — do not load a 500). The archive
ships **10 woff2 files that are 2 binaries**: `…-latin.woff2` **27,272 B** sha256 `cd8db90cd950…` and
`…-latin-ext.woff2` **21,688 B** sha256 `0303e02b53b0…`, each repeated five times (once per weight). Those binaries
carry `HVAR`/`MVAR`/`STAT` tables — a **variable** cut — and canvas A/B proves the axis is live: at 46 px the string
`Analytics that respects` measures **507 (400) / 518 (700) / 533 (800)**. Six `@font-face` would have sufficed; the
sheet declares eight, one per weight × subset.

Type scale as shipped: **48 / 51.84** (`h1`, `-.035em`, `1.08`, `text-wrap: balance`) · **19 / 29.45** (plan name,
700) · **16.5 / 25.575** (lede, `text-wrap: balance`) · **15 / 23.25** (section body, side labels — `font-weight:
600`) · **14.5 / 22.475** (CTA, bullets) · **14 / 21.7** (views line) · **13.5 / 20.925** (billing note) ·
**12.5 / 19.375** (Save chip) · **12 / 18.6** (flag) · **46 / 46** (amount, 800, `-.04em`, `tabular-nums`).

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium at 1440 × 900, `document.fonts.ready` + 400 ms)

| Reading | Reference | Port harness (Google Plus Jakarta Sans, prescribed copy) |
| --- | --- | --- |
| document height | **919** | **919** |
| `main` | 1440 × 918.97, `padding: 92px 16px` | same |
| section | **1200 × 734.97** at (120, 92) | same |
| head | **680 × 168.78** at (380, 92) | same |
| `h1` | **103.66** (2 lines × 51.84) at 48/800 | same |
| lede | **51.13** (2 lines) | same |
| billing row | **1200 × 34** at y 296.78 | same (x of the children shifts ≤ 3 px) |
| switch | **60 × 34** at (643, 296.78) | (644, 296.78) |
| knob | 26 × 26 at `top 4 / left 4` | same |
| "Save 20%" chip | 84 × 25.38 | **81** × 25.38 (narrower text) |
| side labels | 61 / 155 wide | **60 / 152** |
| grid | **1200 × 452.19** at (120, 374.78), columns `286.5 ×4`, gap 18 | same |
| cards | **286.5 × 452.19** at x 120 / 424.5 / 729 / 1033.5 | same |
| flag | **85 × 24.59** at (909.5, 399.78) | **79 × 24.59** at (**915.5**, 399.78) |
| name / views / price row | 29.44 @ 403.78 · 21.69 @ 437.22 · 47.25 @ 480.91 | same |
| amount widths | 53.34 / 78.5 / 79.5 / 103.66 | **54.34 / 80.5 / 80.5 / 106.66** |
| notes | 23 high @ 530.16 (all four) | same |
| CTAs | 236.5 × **44.47** @ 575.16 | same |
| lists | 97.41 / 129.88 / 129.88 / **152.34** @ 643.63 | same |
| items | **32.47** each, one **54.94** (card 4, item 3) | same |
| slack under the last bullet | 55.94 / 23.47 / 23.47 / **1.00** (+30 px padding) | same |
| structure | 1 `h1` · 4 `h2` · 4 `article` · 4 `ul` · 15 `li` · 1 `button` · 1 `svg`-free tick (CSS data-URI) · **0** `img`/`form`/`input` | same |

## Design at 1440 × 900 (measured, reference = port)

`main` starts at y 0 with 92 px of top padding, so the section begins at **92** and ends at **826.97**; the page's
19 px of scroll come entirely from the bottom padding (92) plus the section (734.97) exceeding 900 by 19.

```
y   92.00   head          680 × 168.78   (h1 103.66 · 14 gap · lede 51.13)
y  296.78   billing row  1200 × 34       (mt 36, mb 44)  Monthly[61] 14 switch[60] 14 Annually+chip[155]
y  374.78   grid         1200 × 452.19   (4 × 286.5, gap 18)
    374.78   card 1  x 120      452.19   Launch
    374.78   card 2  x 424.5    452.19   Grow
    374.78   card 3  x 729      452.19   Studio   ← solid #14532d + lime CTA + flag at (909.5, 399.78)
    374.78   card 4  x 1033.5   452.19   Company
     403.78  name 29.44 → 437.22 views 21.69 → 480.91 price 47.25 → 530.16 note 23 → 575.16 CTA 44.47 → 643.63 list
```

Inside a card: 1 px border + **28** padding-top put the name at `374.78 + 29`; the price row's `margin-top: 22`
absorbs the 4 px gap under the views line (views has `margin-top: 4`, no bottom margin); the note's
`margin-bottom: 22` is what separates the price block from the CTA; the list's `margin-top: 24` is the only space
between the CTA and the first bullet. Every one of the four CTAs is at the **same y** because every name, views line
and note is exactly one line — the 23 px `min-height` on the note exists for the case where one wraps (it never does
at any width: the longest note, `$960 billed yearly`, measures 109 px against a 240 px box at 320).

## Card anatomy in numbers (1440)

| Part | Value |
| --- | --- |
| card | 286.5 × 452.19, `padding: 28 24 30`, border 1, radius **22**, fill `#fffdf8` (featured `#14532d`) |
| name `h2` | 19 px/700, line **29.45**, height **29.44**, `margin: 0` |
| views | 14 px/400, line **21.7**, height **21.69**, `margin-top: 4` |
| price row | flex, `align-items: baseline`, `gap: 6`, `margin: 22 0 2`, height **47.25** |
| amount | 46 px/800, `line-height: 1`, `letter-spacing: -.04em` (**−1.84 px**), `tabular-nums` |
| "/ mo" | 15 px/600, sits on the amount's baseline (`y 504.91` = 480.91 + 24) |
| note | 13.5 px/400, `min-height: 23`, `margin-bottom: 22`, height **23** |
| CTA | block, `padding: 11 16`, radius 999, 14.5 px/700 (line 22.475) → **44.47** tall |
| list | `margin-top: 24`, `list-style: none`, 3 / 4 / 4 / 4 items |
| bullet `li` | `padding: 5px 0 5px 26px`, 14.5 px/400 (line 22.475) → **32.47**; a wrapped item is **54.94** |
| tick | **14 × 14** data-URI SVG (`viewBox 0 0 16 16`, stroke-width 2.4, round caps) at `top: 10px; left: 2px` |

## Line boxes and their seams (port copy, measured with Google Plus Jakarta Sans)

| Text | Lines at 1440 | Seam (port) | Seam (reference) |
| --- | --- | --- | --- |
| `h1` | 2 | 2 at **≥ 921**, 1 at **≤ 920** | 2 at 940, 1 at 921 — the same band |
| lede | 2 | 2 at **≥ 561**, 3 at **560–390**, 4 at **≤ 389** | 3 lines already at 561; 4 at 390 |
| billing row | 1 | 1 row at **≥ 332**, 2 rows (h **73.38**) at **≤ 331** | 2 rows at 332 |
| card-4 item 3 | **2** | 2 at **≤ 645** and at **≤ 321**, 1 at 646–? | 2 at **≤ 681** |
| `h1` at 320 | **2** | — | **3** (the reference's longer headline) |

The card-4 seam is the one the font substitution moves a lot: the reference's third bullet measures **244 px** at
14.5 px against a 210.5 px text box and does not reach one line until the card is **≥ 681 px** of viewport; the Google
face sets the prescribed bullet at **222 px**, so it fits from **646** upward. Both wrap at 1440, which is what the
equal-height composition depends on — see "Adapting to the repo".

## Height ladder (port, `document.scrollHeight` at a 900-tall viewport; reference in brackets where it differs)

| width | columns | document | card heights |
| --- | --- | --- | --- |
| 1440 | 4 × 286.5 | **919** (919) | 452.19 ×4 |
| 1280 | 4 × 286.5 | **914** (914) | 452.19 ×4 |
| 1200 | 4 × 278.5 | **903** (903) | 452.19 ×4 |
| 1120 | 4 × 258.5 | **914** (914) | **474.66 ×4** (the second bullet wraps) |
| 1081 | 4 × 248.75 | **909** (909) | 474.66 ×4 |
| 1080 | 2 × 351 | **1311** (1311) | 429.72 ×4 |
| 1024 | 2 × 351 | **1299** | 429.72 ×4 |
| 1000 | 2 × 351 | **1294** (1294) | 429.72 ×4 |
| 900 | 2 × 351 | **1226** (1226) | 429.72 ×4 |
| 820 | 2 × 351 | **1211** (1211) | 429.72 ×4 |
| 768 | 2 × 351 | **1201** (1201) | 429.72 ×4 |
| 700 | 2 × 325 | **1189** (1189) | 429.72 ×4 |
| 650 | 2 × 300 | **1180** | 429.72 ×4 |
| 645–601 | 2 × 292.5 … 275.5 | **1202 … 1196** (1201 / 1196) | 429.72, 429.72, **452.19, 452.19** |
| 600 | 1 × 568 | **2036** (2036) | **397.25**, 429.72 ×3 |
| 560 | 1 × 528 | **2057** (2057) | 397.25, 429.72 ×3 |
| 480 / 428 / 390 | 1 × 448 / 396 / 358 | **2090** (2090 / 2090 / **2115**) | 397.25, 429.72 ×3 |
| 375 / 340 | 1 × 343 / 308 | **2115** (2115) | 397.25, 429.72 ×3 |
| 331 | 1 × 299 | **2155** (billing wraps) | 397.25, 429.72 ×3 |
| 320 | 1 × 288 | **2177** (**2235**) | 397.25, 429.72, 429.72, **452.19** |

Two facts the ladder carries:

1. **It is not monotonic.** 903 at 1200 grows to 914 at 1120 (one bullet wraps in the narrower four-column band) and
   back to 909 at 1081; 1189 at 700 grows to 1201 at 640 (cards 3 and 4 gain a line and the grid stretches their
   row). Never assert "narrower is taller" in a test.
2. **Row stretch is the only equaliser.** At ≤ 645 card 4 is 22.47 px taller than cards 1–2, and **card 3 is pulled
   to 452.19 by the row** even though its own content is unchanged — that is `align-items: stretch` (the default), not
   a height rule. In the single-column band the same card is 452.19 at 320 and 429.72 at 600 for the same reason
   (the card is 288 vs 568 wide).

## Requirements

### Requirement: The page shell and its single section

The template SHALL render one full-bleed `main` on the `#fbf7ef` ground holding exactly one `<section>`
(1200 px, centred) with a head, a billing row, a live region, a four-column grid and nothing else above the port's
footer.

#### Scenario: Shell, ground and type at 1440

- **GIVEN** the page at 1440 × 900
- **WHEN** it is measured after `document.fonts.ready`
- **THEN** `main` SHALL be **1440 × 918.97** with `padding: 92px 16px` and `background: #fbf7ef`, and the document
  SHALL be **919** tall **before** the port footer below (the footer adds its own height to every number in the
  ladder)
- **AND** the section SHALL be **1200 × 734.97** at **(120, 92)** with `color: #1c1917`, `font-size: 15px`,
  `line-height: 1.55`, and `box-sizing: border-box` on its whole subtree.

#### Scenario: Structure census

- **GIVEN** the rendered document
- **WHEN** its elements are counted
- **THEN** there SHALL be **1** `<h1>`, **4** `<h2>`, **4** `<article>`, **4** `<ul>` with **15** `<li>`, **1**
  `<button>`, **4** `<a>`, **1** `role="status"` region and **zero** `<img>`, `<svg>`, `<form>`, `<input>`,
  `<script>`, `<footer>` and `<h3>` in the reference
- **AND** the port SHALL add **only** the Component Dock footer specified below, plus one `<svg>` per bullet if the
  tick is re-implemented inline instead of as a CSS data-URI.

### Requirement: The centred head

The template SHALL render a 680 px centred head of `h1` and lede whose vertical rhythm is `h1 103.66 → 14 → lede
51.13`, with `margin-bottom: 0` (the billing row's own 36 px top margin is the clearance).

#### Scenario: Head geometry at 1440

- **GIVEN** the head at 1440
- **WHEN** its children are measured
- **THEN** the head SHALL be **680 × 168.78** at (380, 92), `text-align: center`
- **AND** the `h1` SHALL be **103.66** tall at y 92 — **two** balanced lines of **51.84** at 48 px/800,
  `letter-spacing: -1.68px`, `line-height: 1.08`, `margin: 0 0 14px`
- **AND** the lede SHALL be **51.13** tall at y 209.66, 16.5 px/400 (line 25.575), colour `#57534e`, in **two**
  balanced lines.

#### Scenario: The headline line ladder

- **GIVEN** the prescribed headline at `clamp(30px, 4.5vw, 48px)`
- **WHEN** the viewport shrinks
- **THEN** it SHALL hold **48 px** down to 1067, follow `4.5vw` between 1066 and 667, and hold **30 px** at ≤ 666
- **AND** it SHALL stay on **two** lines down to 921 and drop to **one** at 920, returning to **two** at ≤ 480
  (30 px, 64.78 tall) — one line is never a breakpoint artefact of the copy at 1440.

### Requirement: The billing switch

The template SHALL render a centred billing row — `Monthly` (aria-hidden), a 60 × 34 `aria-pressed` switch, and
`Annually` + a lime `Save 20%` chip (aria-hidden) — plus a visually hidden `role="status"` live region, and toggling
it SHALL swap every price and every billing note and announce the change.

#### Scenario: Billing row geometry at 1440

- **GIVEN** the billing row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **1200 × 34** at y 296.78 with `margin: 36px 0 44px`, `gap: 14`, `flex-wrap: wrap`,
  `font-weight: 600`, `font-size: 15px`
- **AND** the switch SHALL be **60 × 34** at (643, 296.78) with `border-radius: 999px`, `border: 0`,
  `background: #a8a29e` in the OFF state
- **AND** the knob SHALL be a **26 × 26** white disc at `top: 4; left: 4` with `box-shadow: 0 2px 6px rgba(0,0,0,.25)`
- **AND** the "Save 20%" chip SHALL be **84 × 25.38** (81 in the port), `padding: 3px 10px`, `border-radius: 999px`,
  `background: #bef264`, `color: #1a2e05`, `font-size: 12.5px`, `font-weight: 700`
- **AND** the inactive side label SHALL be `#57534e` and the active one `#1c1917`, with `transition: color .2s ease`.

#### Scenario: Clicking the switch

- **GIVEN** the monthly state (`aria-pressed="false"`, no `is-annual` class, notes reading "Billed monthly")
- **WHEN** the switch is clicked once
- **THEN** `aria-pressed` SHALL become `"true"`, the section SHALL gain the annual state class, the switch track
  SHALL transition to `#14532d` over **250 ms**, and the knob SHALL translate **+26 px** over **300 ms** with
  `cubic-bezier(.3, 1.4, .5, 1)` (an overshoot — measured **27.27 px** at t ≈ 0, settling at 26)
- **AND** each price SHALL count from its monthly figure to its annual figure over **600 ms** with an ease-out cubic
  (`1 − (1 − t)³`): from 15 / 40 / 100 to **12 / 32 / 80**, sampled mid-flight at **13 / 34 / 85** (~0 ms) and
  **12 / 33 / 83** (~100 ms), final by ~450 ms
- **AND** the free plan's figure SHALL be `0` in both states and SHALL not animate (source **and** target are 0)
- **AND** the four notes SHALL read **"$144 billed yearly" / "$384 billed yearly" / "$960 billed yearly"** and the
  free plan **"Free forever"**, swapped in the same frame as the click (no transition)
- **AND** the live region SHALL read **"Annual billing: prices shown per month, billed yearly."**
- **AND** clicking again SHALL restore `0 / 15 / 40 / 100`, the "Billed monthly" notes and the status text
  **"Monthly billing."**

#### Scenario: Rapid toggling and reduced motion

- **GIVEN** a click that starts a count-up
- **WHEN** the switch is clicked again before it finishes
- **THEN** the in-flight `requestAnimationFrame` SHALL be cancelled and the new count SHALL start from the value on
  screen (never from the stale monthly figure)
- **AND** with `prefers-reduced-motion: reduce` the figures SHALL be set in **one frame** (no rAF loop), the knob and
  track SHALL jump (no transitions), and the status text SHALL still be announced.

### Requirement: The plan grid

The template SHALL render a four-column grid of four equal-height plan cards with an 18 px gap, collapsing to two
columns at 1080 and one column at 600.

#### Scenario: Grid geometry at 1440

- **GIVEN** the grid at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **1200 × 452.19** at (120, 374.78) with columns **286.5 / 286.5 / 286.5 / 286.5** and
  `gap: 18px`
- **AND** the four cards SHALL be **286.5 × 452.19** at x **120 / 424.5 / 729 / 1033.5**, all four sharing y 374.78
- **AND** the track definition SHALL be `repeat(4, minmax(0, 1fr))` — `1fr` alone is `minmax(auto, 1fr)` and lets the
  widest bullet widen a column.

#### Scenario: Equal heights come from stretch, not from a height rule

- **GIVEN** the four cards at 1440
- **WHEN** the space below each card's last bullet is measured
- **THEN** it SHALL be **55.94 / 23.47 / 23.47 / 1.00 px** above the 30 px bottom padding
- **AND** no card SHALL set a `height`, `min-height` or `justify-between`, and the bullets SHALL NOT be pushed to the
  bottom — the slack is deliberate empty space.

#### Scenario: The two-column band

- **GIVEN** a viewport of 1080 to 601
- **WHEN** the grid is measured
- **THEN** it SHALL be two columns capped at **720 px** and centred (`margin: 0 auto`), each card **351 px** wide
  from 1080 down to 752 and `(vw − 50) / 2` below that
- **AND** at **≤ 645** cards 3 and 4 SHALL be **452.19** while cards 1 and 2 stay **429.72** (card 4's third bullet
  wraps and the second row stretches).

### Requirement: A plan card's anatomy

Each card SHALL be a flex column of `padding: 28px 24px 30px`, a 1 px hairline border, a **22 px** radius and a
`#fffdf8` fill, holding name, views, price row, note, CTA and bullet list in that order.

#### Scenario: Name, views and price

- **GIVEN** a card at 1440
- **WHEN** its top three blocks are measured
- **THEN** the name SHALL be a `<h2>` at y **403.78**, **29.44** tall, 19 px/700 (line 29.45)
- **AND** the views line SHALL be at y **437.22**, **21.69** tall, 14 px/400, colour `#57534e`, `margin-top: 4`
- **AND** the price row SHALL be at y **480.91**, **47.25** tall, `display: flex`, `align-items: baseline`, `gap: 6`,
  `margin: 22px 0 2px`
- **AND** the amount SHALL be **46 px** tall, 46 px/800, `line-height: 1`, `letter-spacing: -1.84px`,
  `font-variant-numeric: tabular-nums`, and the "/ mo" qualifier SHALL sit on its baseline at y 504.91.

#### Scenario: The note and the CTA

- **GIVEN** a card at 1440
- **WHEN** the note and CTA are measured
- **THEN** the note SHALL be **236.5 × 23** at y 530.16, 13.5 px/400, `min-height: 23px`, `margin-bottom: 22px`
- **AND** the CTA SHALL be **236.5 × 44.47** at y 575.16, `padding: 11px 16px`, `border-radius: 999px`,
  `text-align: center`, `text-decoration: none`, 14.5 px/700 (line 22.475)
- **AND** the three non-featured CTAs SHALL be `#1c1917` on `#fff` and the featured one `#bef264` on `#1a2e05`.

#### Scenario: The bullet list

- **GIVEN** a card at 1440
- **WHEN** its list is measured
- **THEN** the list SHALL start at y **643.63** (`margin-top: 24`, `padding-left: 0`, `list-style: none`) and be
  **97.41 / 129.88 / 129.88 / 152.34** tall
- **AND** every unwrapped item SHALL be **32.47** tall (`padding: 5px 0 5px 26px`, 14.5 px, line 22.475) and card 4's
  third item SHALL be **54.94** (two lines)
- **AND** the tick SHALL be a **14 × 14** glyph at `top: 10px; left: 2px`, `#14532d` on three cards and `#bef264` on
  the featured one.

### Requirement: The featured plan

The third card SHALL be a solid `#14532d` panel with a `#14532d` border, `#f7fee7` body text, `#d9f99d` muted text,
a lime CTA and a "Best value" pill inside its top-right corner — with **no** size, offset or border-width difference
from its siblings.

#### Scenario: The featured signals at 1440

- **GIVEN** the third card at 1440
- **WHEN** it is compared with its siblings
- **THEN** its box SHALL be **286.5 × 452.19** at (729, 374.78) — the **same** size as cards 1, 2 and 4 — with a
  **1 px** border (not 2 px), no extra margin and no shadow
- **AND** its fill and border SHALL both be `#14532d`, its name and amount and bullets `#f7fee7`, and its views line,
  "/ mo" and note `#d9f99d`
- **AND** its CTA SHALL be the only lime fill (`#bef264` on `#1a2e05`) and its tick glyph the only lime tick.

#### Scenario: The flag is inside the card, not straddling it

- **GIVEN** the "Best value" pill
- **WHEN** it is measured
- **THEN** it SHALL be **absolute** at `top: 24px; right: 20px`, **85 × 24.59** at (909.5, 399.78) in the reference
  (**79** wide at x **915.5** in the port, since it is right-anchored and the Google face sets "Best value" 6 px
  narrower), `padding: 3px 10px`, `border-radius: 999px`, `#bef264` on `#1a2e05`, 12 px/700
- **AND** it SHALL sit **13.22 px** below the card's top edge and vertically collide with the plan name's line box
  (name top 403.78) — the name does **not** reserve space for it, and no plan name in the prescribed copy is long
  enough to run under it.

### Requirement: Hover, focus and motion

The template SHALL provide a 1 px hover lift on the dark CTAs, filled-state hover colours, 3 px focus rings, and a
motion budget of exactly four transitions with **zero `@keyframes`**.

#### Scenario: Hover states

- **GIVEN** a non-featured CTA
- **WHEN** it is hovered
- **THEN** its background SHALL go to **#44403c** and it SHALL lift **1 px** (`translateY(-1px)`), so a hovered CTA
  at y 575.16 measures **574.16**
- **AND** the featured CTA SHALL go to **#d9f99d** without a colour change to its label
- **AND** no card SHALL change size, shadow, border colour or text colour on hover — this family has **no card
  hover state**.

#### Scenario: Focus is visible on every control

- **GIVEN** keyboard focus
- **WHEN** the switch and a CTA are focused
- **THEN** each SHALL show `outline: 3px solid #14532d; outline-offset: 3px` (**8.53** on the ground, **8.96** on a
  card)
- **AND** the featured CTA SHALL override the ring to **#bef264** (**6.97** on the green fill)
- **AND** the ring SHALL be a real `outline` with an offset, never a `box-shadow` that the card's fill can swallow.

#### Scenario: The whole motion budget under reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page is inspected
- **THEN** the switch, knob, side labels and CTAs SHALL have `transition: none`, the CTA hover SHALL NOT translate,
  and the price count-up SHALL be skipped
- **AND** the app SHALL contain **zero** `@keyframes` and **zero** `animation:` declarations.

### Requirement: The responsive ladder

The template SHALL reproduce the measured height ladder, collapse the grid at 1080 and 600, and keep
`scrollWidth === clientWidth` at every width.

#### Scenario: 1080 — two columns, 720 px

- **GIVEN** a 1080-wide viewport
- **WHEN** the grid is measured
- **THEN** there SHALL be **two** 351 px columns in a 720 px grid, cards **429.72** tall, and the document SHALL be
  **1311** (from 909 at 1081 — the single largest jump in the ladder).

#### Scenario: 600 — one column, 568 px

- **GIVEN** a 600-wide viewport
- **WHEN** the grid is measured
- **THEN** there SHALL be **one** 568 px column at x 16, card 1 **397.25** (three bullets) and cards 2–4 **429.72**,
  and the document SHALL be **2036**.

#### Scenario: 390 and 320 — nothing overflows

- **GIVEN** the narrow bands
- **WHEN** the page is measured at 390 and at 320
- **THEN** the section SHALL be **358** and **288** wide at x 16, the lede **3** and **4** lines, the billing row one
  row at 390 and **two** rows (73.38) at ≤ 331, and card 4 **429.72** at 390 against **452.19** at 320
- **AND** `documentElement.scrollWidth === clientWidth` and `scrollTo(200, 0)` SHALL leave `scrollX = 0` at 320, 331,
  360, 375, 390, 428, 480, 560, 600, 601, 640, 645, 700, 768, 900, 1000, 1080, 1081, 1120, 1280 and 1440.

### Requirement: Contrast and the two fixes

The template SHALL meet 4.5 : 1 on all text, 3 : 1 on every control boundary, and SHALL fix the reference's only
failing boundary and its ambiguous toggle label.

#### Scenario: Text ratios measured 2026-11-11

- **GIVEN** the token set
- **WHEN** each pair is computed
- **THEN** ink on ground SHALL be **16.37**, ink on card **17.20**, muted on card **7.50**, muted on ground **7.14**,
  pop body on green **8.80**, pop muted on green **7.80**, lime on green **6.97**, chip ink on lime **11.19**, white
  on ink **17.49**, white on hover **10.27**
- **AND** the card hairline `#e7e0d2` (**1.23 / 1.29**) SHALL stay — it is decoration, not a control boundary.

#### Scenario: The switch track is the one failing boundary

- **GIVEN** the OFF track `#a8a29e`
- **WHEN** it is measured against the ground and the card
- **THEN** it SHALL be **2.36** and **2.48** — below the 3 : 1 required of a control's visual boundary (**1.4.11**)
- **AND** the port SHALL use **#8a8079** instead: **3.61** on the ground, **3.79** on a card, and **3.86** against
  the white knob (**#a8a29e** is only 2.52 against the knob, so the knob itself failed too)
- **AND** the ON state keeps `#14532d`, and state SHALL remain readable from **both** the knob position (0 → 26 px)
  and the track fill (the green-vs-stone pair is 2.36, so position is the primary cue, never colour alone).

#### Scenario: The toggle's name must describe its state

- **GIVEN** the reference's switch
- **WHEN** its accessible name is read in both states
- **THEN** it is **"Bill annually"** either way, which announces "Bill annually, pressed" when annual is already on —
  an action name on a stateful control
- **AND** the port SHALL name it **"Annual billing"** (`aria-label` or the visually hidden span), so
  pressed / not-pressed reads as a state, and SHALL keep the visible `Monthly` / `Annually` labels `aria-hidden`
  with the `Save 20%` chip's meaning carried by the live region.

### Requirement: The Component Dock footer

The template SHALL end with the house footer strip under the section, on the same cream ground, adding only its own
height.

#### Scenario: A slim branded strip

- **GIVEN** the page at any width
- **WHEN** the document is measured
- **THEN** below the section there SHALL be one strip of 13 px muted text with a single link labelled
  **"Component Dock"** pointing at `https://www.componentdock.com/` (`target="_blank"`, `rel="noreferrer noopener"`)
- **AND** it SHALL introduce no new colour, radius, border or band, and it SHALL be the **only** element outside the
  section apart from `main` itself.

## Adapting to the repo (deltas — read before writing code)

1. **Drop the `:where(html) … { all: revert }` firewall** (lines 8–61 of the sheet, 61 rule blocks of Bootstrap
   neutralisation). It exists so the snippet can be pasted into a Bootstrap page; inside React + Tailwind preflight it
   fights the framework. Port the **computed values**, not the firewall. The `[hidden]` re-assertion and the
   `input::-webkit-datetime-edit` block go with it (no inputs on this page).
2. **Google-vs-archive font drift is real here and runs in both directions.** Measured 2026-11-11 on the same
   canvas: `h1` at 800/46 px **823 → 807 (−1.94 %)**, at 800/40.5 px **711 → 711 (0 %)**; lede at 400/16.5
   **1077 → 1040 (−3.44 %)**; the CTA label at 700/14.5 **134 → 123 (−8.21 %)**; bullets at 400/14.5 **244 → 244
   (0 %)**; the note at 400/13.5 **108 → 109**. Consequences to re-measure on the built page: the card-4 bullet seam
   moves from **681 to 645**, the lede's 3→4 seam from **390 to 389**, the "Best value" pill is **6 px** narrower, and
   the "Save 20%" chip **3 px** narrower. Load
   `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap` — **no 500**, no
   italic (verified HTTP 200 with a browser UA).
3. **Keep card 4's third bullet wrapping at 1440** (it must measure between **> 210.5** and **< 421** px at 14.5 px so
   it takes two lines in a 236.5 px card but one in the 568 px single-column card). If it fits on one line, card 4
   drops 22.47 px, the grid stops being four equal cards and the whole 1440 composition flattens.
4. **Every number in this spec is a port number** measured against the prescribed copy with the Google face, except
   the six "reference" readings in the table above. The reference's 390 and 320 heights (**2115 / 2235**) and the
   title's third line at 320 belong to *its* longer copy; do not chase them.
5. **Replace the four dead `href="#"` CTAs.** The reference has four anchors, zero destinations. Point each CTA at
   `https://www.componentdock.com/` with `target="_blank" rel="noreferrer noopener"` (house pattern) or make it a
   `<button type="button">`; never ship `href="#"`.
6. **The tick glyph**: keep a 14 × 14 tick at `top: 10; left: 2`, `#14532d` / `#bef264`. `lucide-react`'s `Check` at
   `size={14} strokeWidth={2.4}` reproduces the source's stroke; a CSS data-URI (the source's own technique) is
   equally acceptable, but the colour must come from the token, not a hard-coded hex inside the URI.
7. **The switch** is a `<button aria-pressed>` (valid APG toggle-button pattern); do **not** convert it to
   `role="switch"` *and* keep `aria-pressed` — pick one. Keep the 60 × 34 / 26 knob geometry and the overshoot
   easing; keep `transition` on the track and the knob (the knob's transform is what animates, not its `left`).
8. **State lives in React, not in the DOM**: `annual` boolean → `aria-pressed`, a class on the section, four figures,
   four notes and the status string. The count-up needs a per-figure `requestAnimationFrame` that is cancelled and
   restarted from the **current** on-screen number on a rapid second click, and it must read
   `prefers-reduced-motion` through `matchMedia` (not a CSS media query, because the number itself is script-driven).
9. **`role="status"` starts empty in the reference** and only ever says two sentences; keep that (do not pre-seed a
   message into the live region at mount, or the page announces on load).
10. **Numbers are `tabular-nums`** so the count-up does not jitter the "/ mo" qualifier; the qualifier is baseline
    aligned to a 46 px/1 amount, so it must stay in the same baseline flex row (not a separate block).
11. **No imagery, no picsum, no icon library beyond the tick.** The reference has zero `<img>` and zero `<svg>`.
12. **Metadata**: `<title>` must not name the source; use a Tallyboard title + description and `theme-color:
    #fbf7ef`. No app file may contain "ColorLib", "Quillmetric", "pricing-table-02" or the reference's copy.

## Verification checklist

- [ ] `apps/tallyboard` exists, package `@free-react-templates/tallyboard`, `public/CNAME` =
      `tallyboard.free.componentdock.com`, `"homepage"` = `https://tallyboard.free.componentdock.com`
- [ ] `npm run verify:app tallyboard` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-tallyboard --type spec` is valid
- [ ] no source string survives: `grep -riE 'colorlib|quillmetric|pricing-table-02|cookie-free web analytics|pageviews / month' apps/tallyboard` → 0 hits
- [ ] measured at 1440 × 900: main **1440 × 918.97** (`padding: 92 16`); section **1200 × 734.97** at (120, 92);
      head **680 × 168.78** (`h1` **103.66** = 2 × 51.84 at 48/800, `-1.68px`; lede **51.13** = 2 lines);
      billing row **1200 × 34** at y 296.78; switch **60 × 34** at (643, 296.78); knob **26 × 26** at 4/4;
      grid **1200 × 452.19** at (120, 374.78) with columns **286.5 ×4**; cards **452.19** at x **120 / 424.5 / 729 /
      1033.5**; name **29.44** @ 403.78; views **21.69** @ 437.22; price row **47.25** @ 480.91; amount **46** tall at
      46/800/`-1.84px`; note **23** @ 530.16; CTA **236.5 × 44.47** @ 575.16; lists **97.41 / 129.88 / 129.88 /
      152.34** @ 643.63; item **32.47** and card 4's third **54.94**; flag **79 × 24.59** at (915.5, 399.78) port /
      **85** at (909.5) reference
- [ ] slack below the last bullet: **55.94 / 23.47 / 23.47 / 1.00** (+30 px padding) — assert it, don't "fix" it
- [ ] count-up: click → **12 / 32 / 80** with the "$144 / $384 / $960 billed yearly" notes and the annual status
      sentence; **600 ms** ease-out; second click restores **15 / 40 / 100** + "Monthly billing."; rapid double click
      restarts from the on-screen value; `prefers-reduced-motion` sets the figures in one frame
- [ ] knob moves **0 → 26 px** (with overshoot to ≈ 27.27 at the start), track `#a8a29e → #14532d`… **use #8a8079
      for OFF**, and the active side label swaps ink/muted
- [ ] height ladder: **919** at 1440 · **914** at 1280 · **903** at 1200 · **914** at 1120 · **909** at 1081 ·
      **1311** at 1080 · **1294** at 1000 · **1226** at 900 · **1201** at 768 · **1189** at 700 · **1180** at 650 ·
      **1202** at 645 · **1201** at 640 · **1196** at 601 · **2036** at 600 · **2057** at 560 · **2090** at 480 /
      428 / 390 · **2115** at 375 / 340 · **2155** at 331 · **2177** at 320 (each + the port footer's height)
- [ ] line ladder: `h1` **2** at ≥ 921 / **1** at 920–481 / **2** at ≤ 480; lede **2** at ≥ 561, **3** at 560–390,
      **4** at ≤ 389; billing row **2** rows at ≤ 331; card-4 item 3 **2** lines at 1440 and at ≤ 645 and ≤ 321
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at 320, 331, 360, 375, 390, 428, 480, 560, 600, 601, 640, 645,
      700, 768, 900, 1000, 1080, 1081, 1120, 1280, 1440
- [ ] hover: dark CTA `#44403c` + `translateY(-1px)` (y 574.16); featured CTA `#d9f99d`; **no card hover state**
- [ ] focus: 3 px / 3 px rings, `#14532d` everywhere except the featured CTA (`#bef264`); the switch's ring is
      visible against the cream ground
- [ ] `prefers-reduced-motion: reduce` → no transitions, no hover lift, no count-up, zero `@keyframes`
- [ ] a11y shape: one `h1`; `aria-labelledby` on the section and on each `<article>`; real `<ul>`/`<li>`;
      switch named **"Annual billing"** with `aria-pressed`; side labels `aria-hidden`; `role="status"` empty at
      mount; four resolving CTAs (no `href="#"`)
- [ ] contrast asserted in a test: ink **16.37 / 17.20**, muted **7.14 / 7.50**, pop body **8.80**, pop muted
      **7.80**, lime-on-green **6.97**, chip ink **11.19**, white-on-ink **17.49**, **track 3.61** (the fixed
      `#8a8079`), knob **3.86**
- [ ] footer strip links `https://www.componentdock.com/` and no app file mentions ColorLib
- [ ] bookkeeping: `npm run readme:status`, then the `TEMPLATES.md` row under `## Bootstrap Pricing Tables (12)`
      (create it before `## Bootstrap Wizards (30)` if the first variant has not shipped) and
      `gh workflow run deploy-surge.yml -f app="tallyboard"`
