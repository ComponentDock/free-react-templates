# Template: Prorata (Pricing table — a single-plan **seat calculator**: a two-column warm-stone page where the left column sells one plan in six dash-marked bullets and the right column is a white 24-radius card holding a 1–200 seat slider, a numeric seat field, three graduated rate chips (the current one filled ink-black), a live `$` total with a two-decimal average, an orange CTA and a volume-pricing footnote — no plan grid, no billing switch, no imagery)

## Purpose

**One plan, one slider, one number that moves.** This is the **fifth variant of the `pricing-table` snippet family**
(12 variants) and its **odd one out**: `ratecard`, `tallyboard`, `parity` and `limelight` are all _comparison_ pages —
two or three plan cards, or a real `<table>`, with a billing toggle or a featured column. This one has **no plan cards at
all**. It sells a single per-seat product and makes the price a **function of a control**: a graduated three-tier rate
table, a 1–200 seat range plus a numeric field, a live total, a live two-decimal average, and three chips that light up
as the seat count crosses each tier boundary. The whole page is **63 lines of HTML, one 13,491 B stylesheet and one
2,890 B script** — and it is the family's only **calculator**: `ratecard`, `parity` and `limelight` are CSS-only,
`tallyboard` has a billing switch, and this is the only variant whose headline number is **computed** from a control
rather than written into the markup.

- **Source slug:** `pricing-table-05`
- **ColorLib page:** https://colorlib.com/wp/template/pricing-table-05/ — **HTTP 200, 114,119 B**, `<title>`
  `Pricing Table V05 - Free Bootstrap Pricing Tables 2026 - Colorlib`, `h1` **"Pricing Table V05"**, `datePublished`
  **2026-09-25T15:12:47+00:00**, meta description _"A minimal one-plan pricing section with a calculator card. Free
  download, no jQuery or plugins."_ — **this one is accurate** (unlike V04's copy-pasted table description).
  The page publishes no download-size claim; the archive measures **208,620 B = 203.7 KiB**.
  **The design name the naming audit reads is ColorLib "Pricing Table V05".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/pricing-table-05/ — **HTTP 200,
  3,631 B**, the **smallest document of the family**. The slug-only path `theme/pricing-table-05/` is **404 (9 B)** and
  `theme/bb/pricing-table-05/` is **404 (9 B)**: the `bootstrap/` prefix is the only live path, exactly as for every
  `card`, `alert`, `hero` and `pricing-table` variant before it. One stylesheet
  `css/style.css?v=5ae95599` — **13,491 B**, sha256
  `3e8ea9944fd12afdde5ee7ec002c042a22657e2a9afcee06b1f728c6a8fed9d1` — and one script
  `js/snippet.js?v=87d4f924` — **2,890 B**, sha256
  `a5be0cb3c96c1ed67ab11d54671bcb0493585ed4174b6995015a9dcdb06cf6a0`. Both are **the page's own** (no host-injected
  script this time; the preview host injects nothing into this document).
- **Archive (verified twin):** https://preview.colorlib.com/downloads/free/pricing-table-05.zip — **HTTP 200,
  208,620 B**, containing `index.html` (**3,428 B**), `css/style.css`, `js/snippet.js`, `fonts/` (10 woff2) and a
  `README.md`. **`css/style.css` and `js/snippet.js` hash IDENTICALLY to the live copies** → _live preview verified;
  the archive is its un-versioned twin_. `index.html` differs from the live DOM by **203 B of `<head>` + two `?v=`
  queries only** (live adds `noindex` metas, a `cdnjs.cloud` `dns-prefetch`, `fetchpriority="high"`); the `<body>` is
  byte-identical apart from the `<script src>` query. Verified by serving the archive over
  `python3 -m http.server` and diffing **every rect** against the live page at 12 widths — **identical to the hundredth
  everywhere** (see the reference readings table), which is why this spec quotes reference numbers as port numbers.
  ⚠️ The archive `README.md` advertises **`images/` — which does not exist** in the zip (sixth variant in a row with a
  phantom file line). There is no photography on this page at all.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-05.jpg — **HTTP 200, 50,378 B,
  1200 × 972**, and it is a **real progressive JPEG** this time (`file` → `JPEG image data, progressive, precision 8`;
  `PIL` opens it without conversion — the previous four variants were AVIF behind a `.jpg`). The shot is a **macOS
  browser mock-up** (traffic lights, a `preview.colorlib.com` URL pill, a rounded window with a drop shadow on a grey
  surround) at ≈ **0.79** of 1440, showing the whole page: eyebrow, two-line headline, lede, the six-bullet list, and
  the calculator card with the slider at 12 seats and **$140**. Do **not** adopt the window frame, its rounded corners
  or its shadow.
- **Design category:** Pricing table (**single-plan SaaS seat calculator — graduated per-seat pricing, 1–200 seats,
  $12 / $10 / $8, no plan grid, no monthly-annual switch, no imagery, no testimonial, no footer**; variant **5 of 12** in
  the `pricing-table` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/prorata`, package
  `@free-react-templates/prorata`, CNAME `prorata.free.componentdock.com`.

**Name:** `prorata` — one lowercase word, no hyphen, **0 hits** across the repo
(`git grep -il prorata origin/main` → nothing), no `apps/prorata`, no `openspec/specs/template-prorata`, and no name in
`TEMPLATES.md` uses it. It is the accounting term for exactly what the page computes (a pro-rata, graduated price per
seat), it does not describe the component (_pricing table_, _calculator_), and it is **not** a ColorLib slug:
`colorlib.com/wp/template/prorata/`, `preview.colorlib.com/theme/prorata/` and
`preview.colorlib.com/theme/bootstrap/prorata/` all return **404**.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]`, **0** `[~]` — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1898 | items with NO spec on main: 0` (main `e6d8e9e65`,
**3,336** spec folders before this one). So this design comes from `docs/catalog-coverage.md`, which lists **214
snippet variants in 19 families** the ColorLib listing carries and the checklist never recorded. The `pricing-table`
family is **family 4** in that document's order; its first four variants are prepped (`ratecard` `6211c30be` — the only
one **shipped**, PR #1941 / `d09980172` — `tallyboard` `d7c78c0c0`, `parity` `5c1674c68`, `limelight` `a79233b0b`) and
**this is the fifth**. `grep -c pricing-table TEMPLATES.md` is **2** lines: the section header and the single ratecard
row.

Family census (probed 2026-11-11 under `theme/bootstrap/`, all **HTTP 200**): **01 4,254 B · 02 5,085 B · 03 25,337 B ·
04 4,686 B · 05 3,631 B · 06 4,550 B · 07 5,648 B · 08 19,821 B · 09 5,510 B · 10 5,484 B · 11 5,422 B · 12 6,683 B**.
The family splits into **three branches**, not two: the small card grids (01/02/04/06/12), the two big **table**
variants (03/08), and this **calculator** — 05 is the **smallest** document and the **only one with a live numeric
state machine**. It is not a reskin of any sibling: there is no plan header row, no `<table>`, no featured card, no
billing switch, no `<form>` submission and **no imagery**. Read each variant's DOM from scratch.

## Where the row goes once this ships (the prep must not add it)

`TEMPLATES.md` **has** the section: `## Bootstrap Pricing Tables (12)` at line **891**, opened by `ratecard`'s
shipment, with exactly one row in it (**Pricing Table 01**, `ratecard`). `## Bootstrap Wizards (30)` is at line **895**.
The bookkeeping commit should **append this row after the Pricing Table 01 row** (variant order — do **not** create a
second section), in the family's own row grammar (source · preview · app):

```
- [x] **Pricing Table 05** — [colorlib](https://colorlib.com/wp/template/pricing-table-05/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-05.jpg) · [prorata](https://prorata.free.componentdock.com)
```

If `tallyboard`, `parity` or `limelight` ships first it will have added its own row above this one; re-read
`TEMPLATES.md` **after** the final `git pull --rebase` — a sibling's bookkeeping moved these line numbers in each of the
last six prep runs (`ratecard`'s merge moved Wizards 891 → 895 mid-prep).

## Design tokens (read off `style.css`, 13,491 B, sha256 `3e8ea994…`)

Five custom properties live on **one class**, `.cl-pricing05`, not on `:root` — and the script writes the sixth
(`--cl-pricing05-fill`) onto that same element's inline `style`:

| Token                   | Value                                                                             | Where it lands                                                                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--cl-pricing05-accent` | `#c2410c`                                                                         | eyebrow, every list dash, the CTA fill, the input + slider + footnote focus rings (Tailwind `orange-700`)                                              |
| `--cl-pricing05-ink`    | `#0c0a09`                                                                         | headline, list labels, label, amount, `is-current` chip fill + border, CTA focus ring, the slider's filled track and thumb ring (Tailwind `stone-950`) |
| `--cl-pricing05-muted`  | `#57534e`                                                                         | lede, "Estimate your price", `/ seat`, "Your price", `/ month`, the detail line, the footnote (`stone-600`)                                            |
| `--cl-pricing05-line`   | `#e7e5e4`                                                                         | the list's top rule, the total's top rule, the card border, every idle chip border (`stone-200`)                                                       |
| `--cl-pricing05-fill`   | `5.5%` (CSS default)                                                              | the slider track's hard gradient stop; **the script overwrites it inline** to `((seats-1)/199)×100%` — `0%` … `100%`                                   |
| page ground             | `#fafaf9`                                                                         | `body` background — the only ground (`stone-50`)                                                                                                       |
| card                    | `#ffffff`                                                                         | the calculator card, 1 px `#e7e5e4`, radius **24**, `box-shadow: 0 30px 60px -40px rgba(12,10,9,.35)`                                                  |
| input fill / border     | `#fafaf9` / `#d6d3d1`                                                             | the seat number field (`stone-300` border — **1.49 : 1, see the fix below**)                                                                           |
| scale text              | `#78716c` (`stone-500`) under `.cl-pricing05__scale`, **`#6b6560` on the spans**  | 1 / 50 / 100 / 150 / 200 — the span rule overrides the parent, and `#6b6560` is **not** a Tailwind stone (5.74 : 1)                                    |
| chip idle border        | `#e7e5e4`                                                                         | the two chips that are neither used nor current                                                                                                        |
| chip used               | fill `#f5f5f4` (`stone-100`), border `#d6d3d1`                                    | every tier below the current one                                                                                                                       |
| chip current            | fill **and** border `#0c0a09`, `color: #fff`, its range + `/ seat` text `#d6d3d1` | exactly one chip at any seat count                                                                                                                     |
| CTA hover               | `#9a3412`                                                                         | `orange-800` — the only colour change on hover anywhere on the page                                                                                    |
| slider track rest       | `#e7e5e4`                                                                         | the unfilled half of the track (**1.26 : 1, see the fix below**)                                                                                       |
| thumb                   | `#fff` with `3px solid #0c0a09`, `box-shadow: 0 2px 8px rgba(0,0,0,.2)`           | the 26 px handle                                                                                                                                       |

**The palette is two Tailwind ramps renamed, not a bespoke palette**: `orange-700/800` for the accent and a
`stone-50…stone-950` neutral ramp for everything else — read the hexes as `orange-700` and `stone-*` and the whole
sheet makes sense (`#fafaf9` = stone-50, `#f5f5f4` = stone-100, `#e7e5e4` = stone-200, `#d6d3d1` = stone-300,
`#78716c` = stone-500, `#57534e` = stone-600, `#0c0a09` = stone-950). One exception: `#6b6560` on the scale spans.

Radii: **24** (card) · **14** (CTA) · **12** (chips) · **10** (number field) · **999** (slider track) · **50%** (thumb).
Borders: **1 px everywhere** except the thumb's **3 px** ring. Shadows: only **two** on the page — the card's
`0 30px 60px -40px rgba(12,10,9,.35)` and the thumb's `0 2px 8px rgba(0,0,0,.2)` (plus the focus ring
`0 0 0 4px #fff, 0 0 0 7px #c2410c` on the focused thumb). **No gradients except the slider track's hard stop, no
`@keyframes`, no `text-shadow`, no `backdrop-filter`.**

Font: **Manrope**, `system-ui` fallback, weights used **400 / 500 / 600 / 700 / 800**. The archive ships **10 woff2
files that are 2 binaries**: every `manrope-<400…800>-latin.woff2` is **24,576 B** sha256 `e310b55a7fd9…` and every
`…-latin-ext.woff2` is **15,240 B** sha256 `ce093b341d9c…` — the same two files repeated **five** times, so the cut is
**variable** and the sheet declares five weights over one binary pair. Google's `css2` response serves **one** variable
binary for all five weights (`manrope/v23`, latin URL
`https://fonts.gstatic.com/s/manrope/v23/xn7gYHE41ni1AdIRggexSg.woff2`) — no `opsz` axis, `wght` only.

Type scale as shipped: **56 / 57.12** (`h1`, `clamp(34px,5vw,56px)`, **800**, `letter-spacing: -.045em`, `line-height:
1.02`) · **60 / 63** (amount, `clamp(44px,6vw,60px)`, **800**, `-.045em`, `1.05`, `tabular-nums`) · **18 / 28.8** (seat
field, **700**, `tabular-nums`) · **17 / 27.2** (`Team seats` label **700**; lede **400** at `#57534e`, capped at
**470** wide) · **15.5 / 24.8** (section base — CTA label **700**, `/ month` **600**) · **15 / 24** (card heading, **700**,
`uppercase`, `letter-spacing: .04em`, `#57534e`) · **14.5 / 23.2** (the six bullets, **500**) · **14 / 22.4** (eyebrow
**700** accent; "Your price" **600**; the detail line **400**) · **13.5 / 21.6** (footnote) · **12.5 / 20** (chip range
and the `/ seat` suffix) · **12 / 19.2** (the 1–50–100–150–200 scale, `tabular-nums`).

## The calculator contract (read off `js/snippet.js`, 2,890 B)

```
tiers  = [ {min: 1,  max: 10,  rate: 12}, {min: 11, max: 50, rate: 10}, {min: 51, max: 200, rate: 8} ]
seats  = clamp(round(+raw) || 1, 1, 200)                     // NaN/'' → 1, 12.6 → 13, -5 → 1, 999 → 200
count(i) = max(0, min(seats, max_i) - min_i + 1)             // seats used from tier i
total    = Σ count(i) × rate(i)                              // graduated, NOT a flat rate
avg      = total / seats, 2 dp
fill     = ((seats - 1) / 199) × 100 + '%'                   // written to --cl-pricing05-fill inline
```

Verified against the live page (sweep of every seat value 1…200 at 1440): **1 → $12 · 2 → $24 · 9 → $108 · 10 → $120 ·
11 → $130 · 12 → $140 · 13 → $150 · 30 → $320 · 50 → $520 · 51 → $528 · 60 → $600 · 100 → $920 · 150 → $1,320 ·
199 → $1,712 · 200 → $1,720.** Averages render with **two** decimals (`$11.67`, `$10.00`, `$8.60`) and the total with
**none**, but with the locale's grouping separator once it passes a thousand (`$1,720`) — both come from
`Intl.NumberFormat('en-US', {style:'currency', currency:'USD', …})`, so the port must use the same formatter pair
(`maximumFractionDigits: 0` and `min/max: 2`), **not** string hacks.

Detail line grammar: `parts.join(' + ') + '. Average ' + <b>$avg</b> + ' per seat, billed monthly.'` where each part is
`"<count> × $<rate>"` — only tiers with `count > 0` appear, so it grows **1 → 2 → 3 parts** as the seats cross 10 and 50:

| seats | parts | detail text                                                               | lines at 1440 |
| ----: | ----- | ------------------------------------------------------------------------- | ------------: |
|     1 | 1     | `1 × $12. Average $12.00 per seat, billed monthly.`                       |             1 |
|    12 | 2     | `10 × $12 + 2 × $10. Average $11.67 per seat, billed monthly.`            |         **1** |
|    50 | 2     | `10 × $12 + 40 × $10. Average $10.40 per seat, billed monthly.`           |             1 |
|    51 | 3     | `10 × $12 + 40 × $10 + 1 × $8. Average $10.35 per seat, billed monthly.`  |         **2** |
|   200 | 3     | `10 × $12 + 40 × $10 + 150 × $8. Average $8.60 per seat, billed monthly.` |             2 |

Class state per chip, every seat count: `is-used` on **every tier with `count > 0`** and `is-current` on the **one**
tier the seat count falls inside — so at 12 seats chip 1 is `is-used` (grey) and chip 2 is `is-used is-current`
(ink); at 51+ all three are `is-used` and chip 3 is also `is-current`. `is-current` wins the paint because it is
declared **after** `is-used` in the sheet (both are 2-class selectors).

Event wiring: `range` `input` → update; `input` `input` → update **only when the field is non-empty**; `input` `change`
→ rewrite the field with the clamped value; the `<form>`'s `submit` → `preventDefault()` + rewrite. The field is only
rewritten by `update()` when it does **not** have focus (`document.activeElement !== input`), which is what lets you
type `30` without the field eating the `0`.

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium at 1440 × 900, `document.fonts.ready`)

The archive twin was served over `python3 -m http.server` next to a Google-font copy of the same markup, and **the
archive copy reproduces the live page on every single rect at all 12 widths** (1440, 1200, 1000, 900, 861, 860, 480,
440, 414, 390, 331, 320) — document, wrapper, both columns, card, every card row, the chips, the CTA and the footnote,
to the hundredth. Every number below is therefore the reference's own.

| Reading                       | Reference (= archive twin)                                                               | Google Manrope     |
| ----------------------------- | ---------------------------------------------------------------------------------------- | ------------------ |
| document height at 1440 × 900 | **900** (= the viewport; content is **836.34**)                                          | 900 (836.34)       |
| demo wrapper                  | **1440 × 836.34**, `padding: 110px 16px` (`clamp(40px,8vw,110px)`)                       | identical          |
| section (grid)                | **1100 × 616.34** at (170, 110), `grid-template-columns: 1.05fr 1fr`, gap **86.4**       | identical          |
| left column                   | **519.16 × 435.92** at (170, **200.2**) — centred by `align-items: center`               | identical          |
| eyebrow                       | **22.39** at y 200.2, 14/700 `#c2410c`                                                   | identical          |
| `h1`                          | **519.16 × 114.22** at y 232.59 (2 lines of 57.12)                                       | identical, 2 lines |
| lede                          | **470 × 81.56** at y 362.81 (3 lines of 27.2)                                            | identical, 3 lines |
| bullet list                   | **519.16 × 159.75** at y 476.38, 2 cols of **247.58**, gap **4 / 24**                    | identical          |
| card                          | **494.45 × 616.34** at (775.55, 110), padding **40**, radius **24**                      | identical          |
| card content width            | **412.45**                                                                               | 412.45             |
| card heading                  | **412.45 × 24** at y 151                                                                 | identical          |
| seats row                     | **412.45 × 46.8** at y 199; label **96 × 27.19**; field **92 × 46.8**                    | identical          |
| range                         | **412.45 × 28** at y 259.8                                                               | identical          |
| scale                         | **412.45 × 19.19** at y 291.8; spans at x **816.55 / 905.66 / 1001.78 / 1104.89 / 1208** | identical          |
| chips                         | **412.45 × 69.19** at y 332.98; tracks **132.14 / 132.16 / 132.16**, gap **8**           | identical          |
| chip range / rate             | **106.14 × 20** at y 343.98 and **106.14 × 27.19** at y 363.98                           | identical          |
| total block                   | **412.45 × 140.78** at y 430.17; label at y 455.17; sum **63** at y 479.56               | identical          |
| amount                        | **138.2 × 63** (`$140`); **189.81** (`$1,720`)                                           | 138.2 / 188.81     |
| `/ month`                     | **60 × 24.8** at (962.75, 515.56), baseline-aligned                                      | identical          |
| detail                        | **412.45 × 22.39** at y 548.56 (1 line at 12 seats)                                      | identical          |
| CTA                           | **412.45 × 54.8** at y 594.95                                                            | identical          |
| footnote                      | **412.45 × 21.59** at y 663.75 (1 line at 1440)                                          | identical          |

### The two fits that decide the layout

**1. The footnote is the tightest fit on the page: 0.52 px.** `Over 200 seats? ` (**106.00**) +
`Talk to us about volume pricing` at **600** (**209.00**) = **315.00 px of text** inside a **315.60 px** content box at
vw 880 — so the footnote wraps to a second line across a **17-px-wide band, 861 → 878**, and only there. In the
single-column region it wraps again at **≤ 396** (box 314) and is one line from **397** (box 315). Google's Manrope
measures the same string at **305.00** (**105 + 200**, −3.2 %) → the 861–878 band **disappears** and the single-column
seam moves to **396 / 397**. Consequence of the port: at 861–878 the card is **21.59 px shorter** than the reference
(618.84 vs 640.44), the info column re-centres **−10.8** (150.34 vs 161.14) and the document stays 900; at **390** the
card is **21.59 shorter** and the document **1247 → 1225**. Port decision: **keep the copy**, accept the delta, assert
the 1440 numbers and the 390 document height, and never assert a string width — assert **heights**.

**2. The detail line grows at exactly 51 seats, and the card grows with it.** At 1440 the 12-seat detail is **375.00**
px in a **412.45** box (37.45 slack). At **51** seats the third part appears and the string measures **437** → it
**wraps**, the card goes **616.34 → 638.73** (**+22.39**), the CTA moves **594.95 → 617.34**, and because the root is
`align-items: center` the **whole left column re-centres** (info y **200.2 → 211.41**, +11.21). Nothing else on the
page moves and the document height does not change (the page is 836 tall in a 900 viewport). This is real behaviour,
not a bug: **reproduce it**, and make it a test (`51` seats → detail 44.78 / card 638.73 / info y 211.41).

Google-vs-archive drift, measured in-context on this page (`getBoundingClientRect` on a cloned span, so
`letter-spacing` and `text-transform` are honoured):

| String                                                         | size / weight       |    archive |     Google |           Δ |
| -------------------------------------------------------------- | ------------------- | ---------: | ---------: | ----------: |
| `10 × $12 + 2 × $10. Average $11.67 per seat, billed monthly.` | 14 / 400            | **375.00** |     358.00 | **−4.53 %** |
| `Over 200 seats? ` + link                                      | 13.5 / 400 + 600    | **315.00** |     305.00 | **−3.17 %** |
| `Talk to us about volume pricing`                              | 13.5 / 600          |     209.00 |     200.00 |     −4.31 % |
| `One plan. Every feature.`                                     | 14 / 700            |     171.00 |     163.00 |     −4.68 % |
| `ESTIMATE YOUR PRICE`                                          | 15 / 700, `.04em`   |     180.41 |     173.41 |     −3.88 % |
| `Team seats`                                                   | 17 / 700            |      96.00 |      92.00 |     −4.17 % |
| `Start a 14-day trial`                                         | 15.5 / 700          |     144.00 |     138.00 |     −4.17 % |
| `Seats 1–10`                                                   | 12.5 / 400          |      59.00 |  **62.00** | **+5.08 %** |
| `$12`                                                          | 17 / 800            |      30.00 |      29.00 |     −3.33 % |
| `Pay per seat,`                                                | 56 / 800, `-.045em` |     317.25 | **319.25** |     +0.63 % |
| `Pay per seat, nothing else`                                   | 56 / 800, `-.045em` |     637.48 |     643.48 |     +0.94 % |
| `$140`                                                         | 60 / 800, `-.045em` |     138.20 |     138.20 |      0.00 % |
| `$1,720`                                                       | 60 / 800, `-.045em` |     189.81 |     188.81 |     −0.53 % |
| `/ month`                                                      | 15.5 / 600          |      60.00 |      59.00 |     −1.67 % |

**Drift is size-dependent in both directions on one page** — Google is **4–5 % narrower** at 13.5–17 px and
**0.6–0.9 % wider** at 56–60 px, and **wider at 12.5 px** (`Seats 1–10` 59 → 62). The 12.5 px row is the one visible
consequence: at **331** and **340** the middle chip's `Seats 11–50` wraps to two lines in the port (**40** vs **20**
tall) and at **320** the first chip joins it — the chip box itself stays **105.19** (the grid stretches all three) so
the page height does not move; only the chip's internal text stack shifts +20. Reproduce the wrap, not a fix.

## Design at 1440 × 900 (measured, reference = port)

```
demo  1440 × 836.34 @ (0,0)   padding 110 16   ground #fafaf9
└ section 1100 × 616.34 @ (170,110)   grid 1.05fr / 1fr, gap 86.4, align-items: center
  ├ info 519.16 × 435.92 @ (170,200.2)          ← centred against the taller card
  │ ├ eyebrow 22.39 @ (170,200.2)      14/700 #c2410c, margin 0
  │ ├ h1 519.16 × 114.22 @ (170,232.59)  56/800, -2.52px, lh 57.12, 2 lines, margin 10 0 16
  │ ├ lede 470 × 81.56 @ (170,362.81)    17/27.2 #57534e, max-width 470, 3 lines
  │ └ ul 519.16 × 159.75 @ (170,476.38)  border-top 1px #e7e5e4, margin 32 0 0, padding 28 0 0,
  │   │                                  grid 2 × 247.58, gap 4 24
  │   ├ li 247.58 × 56.38 @ (170,505.38)   2 lines (pad 5 0 5 22, 14.5/23.2 500)
  │   ├ li 247.58 × 56.38 @ (441.58,505.38)
  │   └ 4 × li 247.58 × 33.19 @ y 565.75 / 602.94
  │      └ ::before 10 × 2 @ top 14, left 0, #c2410c
  └ form.calc 494.45 × 616.34 @ (775.55,110)   #fff, border 1px #e7e5e4, radius 24,
    │                                          padding 40, shadow 0 30px 60px -40px rgba(12,10,9,.35)
    ├ h2 412.45 × 24 @ (816.55,151)     15/700, uppercase, .04em, #57534e, margin 0 0 24
    ├ .seats 412.45 × 46.8 @ (816.55,199)   flex, space-between, margin-bottom 14
    │ ├ label 96 × 27.19 @ (816.55,208.8)   17/700, for=range
    │ └ input 92 × 46.8 @ (1137,199)        18/700 tabular, pad 8 10, radius 10, border #d6d3d1
    ├ input[range] 412.45 × 28 @ (816.55,259.8)   track 8 px, thumb 26 px, margin-top -9
    ├ .scale 412.45 × 19.19 @ (816.55,291.8)     12/19.2 #78716c, spans #6b6560, space-between
    ├ ol.tiers 412.45 × 69.19 @ (816.55,332.98)  3 × 132.15, gap 8, margin-top 22
    │ └ li.tier 132.15 × 69.19   pad 10 12, radius 12, border 1px
    │   ├ span.range 106.15 × 20 @ y 343.98     12.5/20 #57534e
    │   └ span.rate  106.15 × 27.19 @ y 363.98  17/800 + ::after " / seat" 12.5/500 #57534e
    ├ .total 412.45 × 140.78 @ (816.55,430.17)  border-top 1px, margin 28 0 24, padding-top 24
    │ ├ label 22.39 @ y 455.17     14/600 #57534e
    │ ├ .sum 63 @ y 479.56         flex, baseline, gap 8
    │ │ ├ output 138.2 × 63        60/800 -.045em lh 63, tabular
    │ │ └ span.per 60 × 24.8 @ (962.75,515.56)  15.5/600 #57534e
    │ └ p.detail 22.39 @ y 548.56  14/22.4 #57534e, margin 0 (1 line: 37.45 px of slack)
    ├ a.cta 412.45 × 54.8 @ (816.55,594.95)   pad 15 20, radius 14, #c2410c, #fff 700 centred
    └ p.fine 412.45 × 21.59 @ y 663.75   13.5/21.6 #57534e, centred, margin 14 0 0
```

Note the two alignment facts a port gets wrong first: the **left column is vertically centred** against the card
(`align-items: center` puts the info block at y 200.2, not at the card's 110), and the **amount and `/ month` are
baseline-aligned** (`align-items: baseline`, which is why `/ month` sits at y 515.56 inside a 63-tall row and not at
its top).

### Height ladder (content height = root height + 2 × wrapper padding; document is the max of that and the viewport)

|   vw | document |    content |       card | info y | notes                                                         |
| ---: | -------: | ---------: | ---------: | -----: | ------------------------------------------------------------- |
| 1440 |      900 | **836.34** |     616.34 |  200.2 | 2 cols, gap 86.4                                              |
| 1360 |      900 |     833.94 |     616.34 |    199 |                                                               |
| 1280 |      900 |     821.12 |     616.34 | 192.59 |                                                               |
| 1200 |      900 |     808.34 |     616.34 |  186.2 |                                                               |
| 1120 |      900 |     795.52 |     616.34 |  179.8 | section 1088 — the 16 px sides take over                      |
| 1080 |      900 |     789.12 |     616.34 | 178.63 | title **54** px                                               |
| 1024 |      900 | **802.55** | **638.73** |  188.2 | title **51.2**; detail **2 lines** — page grows as vw shrinks |
| 1000 |      900 |     798.73 |     638.73 | 175.92 | card padding hits its **40** ceiling                          |
|  960 |      900 |     786.58 |     632.98 |  160.3 |                                                               |
|  920 |      900 |     774.46 |     627.28 | 156.28 |                                                               |
|  901 |      900 |     768.72 |     624.56 | 154.38 |                                                               |
|  900 |      900 | **768.42** |     624.42 | 154.28 | shortest 2-col page                                           |
|  899 |      900 |     768.09 |     624.27 | 154.16 |                                                               |
|  880 |      900 |     762.31 |     621.53 | 152.23 | footnote **1** line (315 in 315.6) — the 0.52 px fit          |
|  861 |      900 |  **778.2** |     640.44 | 161.14 | **last 2-col**; footnote wraps (+21.59)                       |
|  860 | **1128** |    1127.87 |      596.3 |   68.8 | **1 col**; `h1` drops to **1** line                           |
|  800 |     1103 |    1103.05 |     587.73 |     64 |                                                               |
|  768 |     1090 |     1089.8 |     583.16 |  61.44 |                                                               |
|  700 |     1064 |    1064.34 |     576.14 |     56 |                                                               |
|  600 |     1033 |    1033.33 |     568.14 |     48 | card padding hits its **24** floor                            |
|  520 | **1040** |     1039.7 |     568.14 |  41.59 | page grows while vw shrinks                                   |
|  480 |     1141 |    1140.89 |     584.14 |     40 | **bullets → 1 column**; chip suffix stacks (chip **85.19**)   |
|  440 |     1163 |    1163.28 |     606.53 |     40 | detail **2 lines** (box 358)                                  |
|  420 |     1163 |    1163.28 |     606.53 |     40 |                                                               |
|  414 | **1198** |    1197.95 |     606.53 |     40 |                                                               |
|  400 |     1225 |    1225.14 |     606.53 |     40 |                                                               |
|  396 | **1247** |    1246.73 | **628.13** |     40 | footnote **2 lines** (+21.59)                                 |
|  390 |     1247 |    1246.73 |     628.13 |     40 | lede **4** lines                                              |
|  360 |     1247 |    1246.73 |     628.13 |     40 |                                                               |
|  349 |     1267 |    1266.73 | **648.13** |     40 | middle chip's range label wraps                               |
|  331 |     1267 |    1266.73 |     648.13 |     40 |                                                               |
|  320 | **1294** |    1293.92 |     648.13 |     40 | lede **5** lines; first chip wraps too                        |

**The ladder is non-monotonic in three places, in both directions** — **900 → 768.42** but **861 → 778.2** (the detail
line wraps as the card narrows); **1080 → 789.12** but **1024 → 802.55** (the same wrap, one step earlier); **600 →
1033.33** but **520 → 1039.7**; and the 860 step nearly **doubles** the page (778 → 1128). A sweep that only checks
`1440 · 1024 · 768 · 375` will miss every one of them.

### Seams (measured by 1-px sweeps, reference face)

- **Column collapse: 861 → 860** (`@media (max-width: 860px)`), document **900 → 1128**, card **379.2 → 828** wide.
- **`h1` line count flips twice, in opposite directions**: **2 lines at 861** (column 398 wide) → **1 line at 860**
  (column 828 wide) → **2 lines again at 418**, **1 line at 419** (the 34 px `clamp` floor). Nail down _both_ flips or
  the head's height is wrong at a dozen widths.
- **lede**: 3 lines at **404+**, **4** at **400–403** and down to **390**, **5** at **≤ 320**.
- **bullets**: 2 columns above **480**, 1 column at **≤ 480** (the `@media (max-width: 480px)` step).
- **detail line**: **1 line ≥ 1035**, **2 lines ≤ 1034** in the two-column band (content 377/376); **1 line ≥ 459**,
  **2 lines ≤ 458** in the single-column band (box 377/376) — the same 375-px string against two different paddings.
- **footnote**: wraps **only at 861–878** in the two-column band (box 308.33–314.76 against a **315.00** string) and at
  **≤ 396** (box 314) in the single-column band; 1 line from **397** and from **879**.
- **chip range label**: the middle chip (`Seats 11–50`) wraps to 2 lines at **≤ 348**, the first chip
  (`Seats 1–10`) at **≤ 320**; the chip's outer box stays **105.19** either way (the grid stretches all three).
- **card padding**: `clamp(24px, 4vw, 40px)` — **24** at ≤ 600, fluid between, **40** from **1000**.
- **section width**: `min(1100px, vw − 32px)` — the 16 px side padding takes over at **≤ 1132**.

## What the port must change (reference defects and the family's copy risks)

These are **deliberate deltas**, each testable, and each one is a place where copying the reference literally would
ship a bug:

1. **Both anchors are dead** (`href="#"`, two of them: the CTA and the footnote link). Clicking appends `#` to the URL
   and moves focus. Give the CTA a real destination (signup route / `#trial` anchor) and the footnote a real contact
   target (`#contact` / `mailto:`), keep **two** anchors in the card, and keep the focus rings.
2. **The tier state is colour-only.** `is-used` / `is-current` change fill, border and text colour and nothing else —
   no `aria-current`, no text, no live region. Add a visually-hidden state word to each chip (`used` / `current` /
   `upcoming`) **or** `aria-current="true"` on the current one plus an `aria-label` that names the tier and its rate,
   and keep the ink fill.
3. **The number field's border is 1.49 : 1** (`#d6d3d1` on the white card) — below the 3 : 1 non-text minimum.
   Use **`#8f877f`** (**3.54** on white, **3.39** against the field's own `#fafaf9` fill).
4. **The resting slider track is 1.26 : 1** (`#e7e5e4` on white). Same token: **`#8f877f`** → **3.54**. Keep the filled
   half `#0c0a09` (18.92).
5. **The field and the total can disagree while typing.** The field is not rewritten while focused, so `250` stays
   visible (total `$1,720`, i.e. 200 seats) and clearing it to `''` leaves the **previous** total on screen. Clamp on
   `change`/blur as the reference does, **and** derive the total from the clamped value at all times, **and** treat an
   empty field as `1` immediately (the reference only fixes it on blur).
6. **A dead `<form>`.** It carries a `submit` handler with `preventDefault()` but **no submit button** — and with two
   controls inside, the HTML implicit-submission rule fires nothing, so `Enter` in the field does nothing at all
   (verified: typing `3`, `Enter` → no navigation, no visible change). Decide deliberately: either drop the `<form>` for
   a `<div>`/`<fieldset>` and mark the region with `role="group"` + `aria-labelledby`, or keep the form and give it a
   real submit affordance. Do **not** ship the handler-only half.
7. **The visible label targets the slider, not the field** (`<label for=…-range>Team seats</label>`, while the field is
   labelled by a visually-hidden second label). That is a legitimate pattern — the slider _is_ the primary control —
   but it means the field has **no visible label**; keep the hidden label and add `aria-describedby` pointing at the
   total or the detail line.
8. **`aria-live="polite"` on the `<output>` re-announces on every drag step** (`51 seats, $528 per month` fires for
   each value). Keep the live region but only announce the settled value (debounce ~300 ms) so a screen-reader user is
   not flooded.
9. **The card jumps 22.39 px at 51 seats** (see above). Keep it (it is the design's honesty about the third tier), and
   assert it; if the port instead reserves two lines for the detail, every card height in the ladder shifts +22.39 at
   1440 and the spec's numbers no longer apply — pick one and record it.
10. **No `<h2>` for the price block, no footer, no nav.** That is the design, not an omission: one `h1`, one `h2`
    (the card heading), one `<form>`, two anchors, zero images, zero `<button>`s. Add **only** the Component Dock footer
    strip the repo requires (link `https://www.componentdock.com/` as "Component Dock") — it is not on the reference
    page, so every document height in the ladder gains the footer's height in the port.

## Requirements

### Requirement: The page shell and the two-column composition

The template SHALL render a single-screen pricing page on a warm stone ground, composed of exactly two columns —
a copy column and a calculator card — inside a `1100 px` centred grid whose items are **vertically centred**.

#### Scenario: The shell at 1440

- **GIVEN** the page at 1440 × 900
- **WHEN** the wrapper and the section are measured
- **THEN** the wrapper SHALL be **1440 × 836.34** with `padding: 110px 16px` (`clamp(40px,8vw,110px)`) and the ground
  `#fafaf9`
- **AND** the section SHALL be **1100 × 616.34** at **(170, 110)** with
  `grid-template-columns: minmax(0,1.05fr) minmax(0,1fr)`, `gap: clamp(32px,6vw,88px)` (**86.4** at 1440) and
  `align-items: center`
- **AND** the document height SHALL be **900** — the viewport, not the content (**836.34**) — so there is **no
  scrollbar** at 1440 × 900.

#### Scenario: The left column is centred, not top-aligned

- **GIVEN** the copy column at 1440
- **WHEN** its rect is read
- **THEN** it SHALL be **519.16 × 435.92** at (170, **200.2**) — that is `110 + (616.34 − 435.92)/2`, i.e. centred
  against the **taller card**, not aligned to the card's top
- **AND** a port that uses `align-items: start` SHALL be treated as a defect: the whole head sits 90.2 px too high.

#### Scenario: One h1, one h2, no other structure

- **GIVEN** the rendered page
- **WHEN** the heading tree is read
- **THEN** there SHALL be exactly **one** `h1` ("Pay per seat, nothing else", the section's `aria-labelledby` target)
  and exactly **one** `h2` ("Estimate your price", the calculator's `aria-labelledby` target)
- **AND** there SHALL be exactly **one** `<form>`, **one** `<ol>`, **one** `<ul>`, **two** `<a>` and **zero**
  `<img>` / `<svg>` / `<button>` on the page.

### Requirement: The copy column

The template SHALL present one accent eyebrow, a two-line 56 px headline with `-0.045em` tracking, a 470-px lede and a
six-item feature list split into two columns behind a hairline rule, each item marked by a 10 × 2 accent dash.

#### Scenario: Eyebrow, headline and lede

- **GIVEN** the copy column at 1440
- **WHEN** its three text blocks are measured
- **THEN** the eyebrow SHALL be **22.39** tall at y 200.2 — 14 px / 700 / `#c2410c`, `margin: 0`
- **AND** the `h1` SHALL be **114.22** tall at y 232.59 — **two** lines of **57.12** (56 px / 800, `line-height: 1.02`,
  `letter-spacing: -2.52px`), `margin: 10px 0 16px`, with 607 px of text inside a 519.16 px box
- **AND** the lede SHALL be **470 × 81.56** at y 362.81 — **three** lines of **27.2** (17 px / 400 / `#57534e`),
  `max-width: 470`, `margin: 0`.

#### Scenario: The six-bullet list

- **GIVEN** the list at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **519.16 × 159.75** at y 476.38 with `border-top: 1px solid #e7e5e4`,
  `margin: 32px 0 0`, `padding: 28px 0 0`, `display: grid`, `grid-template-columns: repeat(2, minmax(0,1fr))`,
  `gap: 4px 24px` and `list-style: none`
- **AND** every `<li>` SHALL be **247.58** wide with `padding: 5px 0 5px 22px`, 14.5 px / 500 / `#0c0a09` — heights
  **56.38 / 56.38 / 33.19 / 33.19 / 33.19 / 33.19**, because item 1 wraps to two lines ("Unlimited documents and
  templates") and the other five do not
- **AND** the marker SHALL be a `::before` **10 × 2** at `top: 14px; left: 0` painted `#c2410c` — a **dash**, not a tick,
  not a disc, and not an icon.

### Requirement: The calculator card

The template SHALL render the calculator as a white 24-radius card with a 40 px pad, a hairline border and one soft
drop shadow, holding the seat control, the tier chips, the price block, the CTA and the footnote in that order.

#### Scenario: The card shell

- **GIVEN** the card at 1440
- **WHEN** its rect and computed style are read
- **THEN** it SHALL be **494.45 × 616.34** at **(775.55, 110)** with `padding: 40px`, `border-radius: 24`,
  `border: 1px solid #e7e5e4`, `background: #fff` and
  `box-shadow: 0 30px 60px -40px rgba(12,10,9,.35)`
- **AND** its content width SHALL be **412.45** and its heading SHALL be **24** tall at y 151 — 15 px / 700,
  `text-transform: uppercase`, `letter-spacing: .04em`, `#57534e`, `margin: 0 0 24px`
- **AND** the padding SHALL be `clamp(24px, 4vw, 40px)` — **24** at ≤ 600, fluid between, **40** from 1000.

#### Scenario: The seats row

- **GIVEN** the seats row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **412.45 × 46.8** at y 199 with `display: flex`, `align-items: center`,
  `justify-content: space-between`, `gap: 16`, `margin-bottom: 14`
- **AND** the label "Team seats" SHALL be **96 × 27.19**, 17 px / 700, at x 816.55 — vertically centred in the row
  (`y 208.8`), and it SHALL be the **slider's** label, not the field's
- **AND** the number field SHALL be **92 × 46.8** at **(1137, 199)** — `type="number"`, `min=1`, `max=200`, `step=1`,
  `inputmode="numeric"`, 18 px / 700, `text-align: center`, `font-variant-numeric: tabular-nums`,
  `padding: 8px 10px`, `border-radius: 10`, `border: 1px solid #d6d3d1` (**→ `#8f877f` in the port**), fill `#fafaf9`
- **AND** the field SHALL carry a visually-hidden `<label>` ("Number of seats") — the only sr-only element on the page,
  implemented with the `1px + clip-path: inset(50%)` pattern, not `display: none`.

### Requirement: The seat slider

The template SHALL drive the seat count with a native `<input type="range">` whose track is a hard-stop two-tone
gradient keyed to the seat count, whose thumb is a 26 px white disc with a 3 px ink ring, and whose value is mirrored
into a number field.

#### Scenario: Track and thumb geometry

- **GIVEN** the slider at 1440
- **WHEN** its painted geometry is measured (screenshot pixel scan; `getComputedStyle` on `::-webkit-slider-thumb`
  returns the **host** box in this Chromium and cannot be trusted)
- **THEN** the element SHALL be **412.45 × 28** at y 259.8 with `appearance: none`, `background: transparent`
- **AND** the track SHALL be **8 px** tall, radius **999**, painted
  `linear-gradient(90deg, #0c0a09 var(--fill), #e7e5e4 var(--fill))` — a **hard stop at `--fill`**, not a smooth ramp
- **AND** the thumb SHALL be **26 × 26** with `border: 3px solid #0c0a09`, white fill, `margin-top: -9px`,
  `box-shadow: 0 2px 8px rgba(0,0,0,.2)` and `transition: transform .15s ease`; on `:active` it SHALL scale to **1.12**
- **AND** the thumb's centre SHALL sit at `13 + (W − 26) × fill` — at 12 seats (`fill` 5.5276 %) that is **34.36** px
  from the track's left edge, **11.4 px right of the gradient's stop**, which is why the fill edge is hidden under the
  thumb rather than visible beside it
- **AND** Firefox's variant SHALL be recorded as a delta: `::-moz-range-thumb` is **20 × 20**, not 26.

#### Scenario: The scale row

- **GIVEN** the scale under the slider
- **WHEN** it is measured
- **THEN** it SHALL be **412.45 × 19.19** at y 291.8 with `display: flex`, `justify-content: space-between`,
  `margin-top: 4px`, 12 px / 19.2, `font-variant-numeric: tabular-nums`, `color: #78716c`
- **AND** the five spans (`1`, `50`, `100`, `150`, `200`) SHALL be painted **`#6b6560`** — a rule that overrides the
  parent — and SHALL start at x **816.55 / 905.66 / 1001.78 / 1104.89 / 1208**
- **AND** the row SHALL be `aria-hidden="true"`: the labels are evenly spaced decorative ticks, **not** the slider's
  real positions (`50` is labelled at 21.7 % of the track while the value 50 lives at 24.6 %).

#### Scenario: Keyboard and value text

- **GIVEN** keyboard focus on the slider
- **WHEN** `ArrowRight`, `Home` or `End` is pressed
- **THEN** the seat count SHALL move by 1, to 1, and to 200 respectively, and the total, the chips, `--fill` and the
  field SHALL all follow in the same frame
- **AND** `aria-valuetext` SHALL read `"<n> seats, $<total> per month"` (singular `"1 seat"`), updated on every change
- **AND** the focus ring SHALL live on the **thumb** (`box-shadow: 0 0 0 4px #fff, 0 0 0 7px #c2410c`) with the range's
  own outline suppressed (`outline: none`), so a plain `outline` on the input is **not** the port's target.

### Requirement: The three rate chips

The template SHALL list the graduated rates as an ordered list of three chips and SHALL mark, on every change, which
tiers are in use and which one the current seat count sits in.

#### Scenario: The chip row

- **GIVEN** the chip row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **412.45 × 69.19** at y 332.98 with `display: grid`,
  `grid-template-columns: repeat(3, minmax(0,1fr))`, `gap: 8`, `margin: 22px 0 0`, `list-style: none`
- **AND** each chip SHALL be **132.15 × 69.19** with `padding: 10px 12px`, `border: 1px solid`,
  `border-radius: 12`, and its two lines SHALL be **20** (range, 12.5 px) and **27.19** (rate, 17 px / 800) tall
- **AND** each rate SHALL carry the generated suffix `" / seat"` — 12.5 px / 500 in `#57534e` — and at **≤ 480** that
  suffix SHALL become `display: block` with the text `"per seat"`, growing the line to **47.19** and the chip to
  **85.19**.

#### Scenario: The three states

- **GIVEN** the chips at 12 seats
- **WHEN** their classes and computed colours are read (after a **≥ 250 ms** settle — fill and border are
  `transition: .2s`, so an immediate read returns the **previous** colour)
- **THEN** chip 1 (`Seats 1–10`, `$12`) SHALL be `is-used` — fill **`#f5f5f4`**, border **`#d6d3d1`**, text `#0c0a09`
- **AND** chip 2 (`Seats 11–50`, `$10`) SHALL be `is-used is-current` — fill **and** border **`#0c0a09`**, rate text
  **`#fff`**, range and suffix text **`#d6d3d1`**
- **AND** chip 3 (`Seats 51+`, `$8`) SHALL carry **no** state class — transparent fill, `1px solid #e7e5e4` border,
  `#0c0a09` text, `#57534e` suffix
- **AND** at 1 seat chip 1 SHALL be the ink one; at 51 and at 200 **all three** SHALL be `is-used` and chip 3 also
  `is-current`.

### Requirement: The price block and the live total

The template SHALL print the graduated total as an `<output>`, with a `/ month` suffix baseline-aligned to it, and a
detail line that itemises the tiers and prints the two-decimal average.

#### Scenario: The total block

- **GIVEN** the price block at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **412.45 × 140.78** at y 430.17 with `margin: 28px 0 24px`, `padding-top: 24px` and
  `border-top: 1px solid #e7e5e4`
- **AND** "Your price" SHALL be **22.39** tall at y 455.17 (14 px / 600 / `#57534e`)
- **AND** the sum row SHALL be **63** tall at y 479.56 with `display: flex`, `align-items: baseline`, `gap: 8`
- **AND** the amount SHALL be **138.2 × 63** for `$140` (**189.81** for `$1,720`) — `clamp(44px, 6vw, 60px)`, 800,
  `-0.045em`, `line-height: 1.05`, `tabular-nums`
- **AND** `/ month` SHALL be **60 × 24.8** at **(962.75, 515.56)** — 15.5 px / 600 / `#57534e`, **baseline**-aligned to
  the amount, so it sits **36 px below** the row's top, not at it.

#### Scenario: The detail line

- **GIVEN** the detail line at 12 seats and at 1440
- **WHEN** it is read
- **THEN** it SHALL say `10 × $12 + 2 × $10. Average $11.67 per seat, billed monthly.` with the average wrapped in a
  `<span>` painted `#0c0a09` / 700 while the rest is `#57534e` / 400
- **AND** it SHALL be **22.39** tall (one line) with **37.45 px** of slack, and the average SHALL be formatted with
  **exactly two** decimals while the total uses **none** but **does** group thousands (`$1,720`, not `$1720`)
- **AND** at **51** and **200** seats the third part SHALL appear and the line SHALL wrap to **44.78**, growing the card
  to **638.73** and pushing the CTA to y **617.34** — see the reflow requirement.

#### Scenario: The reflow at 51 seats

- **GIVEN** the page at 1440 with 12 seats (card **616.34**, info y **200.2**)
- **WHEN** the seat count is raised to 51
- **THEN** the detail line SHALL be **44.78** and the card **638.73**
- **AND** the copy column SHALL re-centre to y **211.41** (**+11.21**) because the grid's `align-items: center` recentres
  the shorter column against the taller card
- **AND** the document height SHALL stay **900** — the page is still shorter than the viewport, so the reflow is
  invisible to any test that only measures `scrollHeight`.

### Requirement: The CTA and the footnote

The template SHALL close the card with one full-width accent CTA and one centred footnote carrying the volume-pricing
link, each with a visible focus ring and a real destination.

#### Scenario: The CTA

- **GIVEN** the CTA at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **412.45 × 54.8** at y 594.95 with `padding: 15px 20px`, `border-radius: 14`,
  `background: #c2410c`, `color: #fff`, 15.5 px / 700, `text-align: center`
- **AND** on hover its fill SHALL become **`#9a3412`** in **.2s** — the only hover colour change on the page
- **AND** its focus ring SHALL be `outline: 3px solid #0c0a09; outline-offset: 3px`, reachable by `Tab`
- **AND** its label SHALL be a sentence ("Start a 14-day trial"), not "Submit", and its `href` SHALL resolve (the
  reference's is `#`).

#### Scenario: The footnote

- **GIVEN** the footnote at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **412.45 × 21.59** at y 663.75 with `margin: 14px 0 0`, 13.5 px / 21.6 / `#57534e`, centred
- **AND** it SHALL read `Over 200 seats? ` + a linked `Talk to us about volume pricing` (ink `#0c0a09`, **600**,
  `text-underline-offset: 3px`) with `outline: 2px solid #c2410c; outline-offset: 2px` on focus
- **AND** it SHALL be **one** line at 1440 (315 px of text in 412.45) and **two** lines at ≤ 396 — the tightest fit on
  the page is **0.52 px** at vw 878/879, so its line count is the first thing a font swap breaks.

### Requirement: Responsive behaviour

The template SHALL collapse to a single column at **860 px** and SHALL re-flow — not merely shrink — at the widths
where the card's content stops fitting.

#### Scenario: The 860 step

- **GIVEN** the page at 861 and at 860
- **WHEN** both are measured
- **THEN** 861 SHALL still be two columns (info **398.14**, card **379.2 × 640.44**) with the document at **900**
- **AND** 860 SHALL be one column (card **828 × 596.3** below the copy) with the document at **1128**
- **AND** the `h1` SHALL go from **2** lines at 861 to **1** line at 860 — the wider single column fits the whole
  headline — and back to **2** at **418**.

#### Scenario: The narrow re-flows

- **GIVEN** widths of 480, 414, 390, 331 and 320
- **WHEN** the page is measured
- **THEN** at **≤ 480** the bullet list SHALL be one column and the chip suffix SHALL stack (`per seat`, chip **85.19**)
- **AND** at **390** the lede SHALL be 4 lines and the footnote 2 lines (document **1247**), at **331** the middle
  chip's range label SHALL wrap (document **1267**, card **648.13**), and at **320** the lede SHALL be 5 lines
  (document **1294**)
- **AND** `scrollWidth === clientWidth` and `scrollX = 0` SHALL hold at **every** width from 320 to 1440 — this design
  has no horizontal overflow anywhere, and a port that introduces one has a layout bug, not a fidelity win.

### Requirement: Contrast and accessible colour

The template SHALL meet WCAG AA for every text pair and 3 : 1 for every control boundary, **fixing the two pairs the
reference fails**.

#### Scenario: Text pairs (measured, reference palette)

- **GIVEN** the shipped palette
- **WHEN** every text pair is computed
- **THEN** these SHALL pass: eyebrow **4.96** (`#c2410c` on `#fafaf9`), lede/detail/footnote muted **7.63** on white and
  **7.30** on the page ground, ink text **18.92 – 19.76**, CTA white-on-orange **5.18** (**7.31** on hover), chip
  current range `#d6d3d1` on ink **13.26**, chip current rate white on ink **19.76**, scale **4.80** (`#78716c`) and
  **5.74** (`#6b6560`)
- **AND** these SHALL fail and SHALL be fixed: the number field's border **1.49** and the resting slider track **1.26**
  — both to **`#8f877f`** (**3.54** on white, **3.39** on the field's own ground)
- **AND** the two decorative pairs MAY stay: idle chip border **1.26** and used-chip border **1.37** (the state is also
  carried by the fill and by text, so they are not the sole means).

#### Scenario: State is not colour-only

- **GIVEN** a chip in the `is-current` state
- **WHEN** the page is read without colour
- **THEN** the current tier SHALL be exposed to assistive technology (`aria-current` and/or a visually-hidden state
  word) **and** the detail line SHALL name the same tier arithmetically (`10 × $12 + 2 × $10`), so the information
  survives
- **AND** every decorative element (the six dashes, the scale row) SHALL be `aria-hidden` or a CSS pseudo-element,
  and **no** interactive control SHALL depend on a hover state to be understood.

### Requirement: Motion

The template SHALL ship exactly three transitions and **zero** keyframes, and SHALL remove all of them under
`prefers-reduced-motion: reduce`.

#### Scenario: The motion budget

- **GIVEN** the rendered page
- **WHEN** the stylesheet is inspected
- **THEN** there SHALL be **no** `@keyframes`, **no** `animation`, **no** scroll reveal, **no** counter and **no**
  carousel — the page's only dynamics are the numbers themselves
- **AND** the transitions SHALL be exactly: chip `border-color` + `background-color` **.2s**, CTA `background-color`
  **.2s**, thumb `transform` **.15s**
- **AND** under `prefers-reduced-motion: reduce` all three SHALL compute to **`0s`** (verified live), and the thumb's
  `:active` scale SHALL be dropped with them.

## Implementation notes for the port

1. **Structure:** `App` → `PricingCalculator` (the section) → `PlanSummary` (left column) +
   `SeatCalculator` (the card) → `SeatControls`, `TierChips`, `PriceTotal`, `CtaButton`, `FootNote`. Keep the shipped
   component names free of the reference's class names — no `.cl-pricing05__*` strings in `apps/prorata`.
2. **State:** one `useState` for seats (initial **12**) plus derived values computed in render (`total`, `avg`, `fill`,
   `parts`, `detail`) — **no** effect that writes state, no `useMemo` needed. Follow
   `docs/conventions.md#effects-and-derived-state`.
3. **Formatting:** two `Intl.NumberFormat` instances at module scope (`max 0` for the total, `min/max 2` for the
   average) — the reference's exact formatters, so `$1,720` and `$11.67` come out right.
4. **The slider:** a native `<input type="range">` styled with `::-webkit-slider-runnable-track` / `-thumb` **and**
   the `::-moz-*` equivalents (a Firefox thumb is 20 px, not 26 — record it, do not "fix" it silently). `--fill` goes on
   the wrapper as an inline custom property, exactly as the reference does it (`root.style.setProperty`), because the
   gradient lives in a pseudo-element the component cannot style from React props.
5. **The number field:** `type="number"` + `inputMode="numeric"`, clamped through one pure function
   `clampSeats(raw: string): number` used by the slider, the field, `change` and the initial render — the single source
   of truth for `NaN`/`''`/`12.6`/`-5`/`999`.
6. **Tokens in `@theme`:** `--color-accent: #c2410c`, `--color-accent-hover: #9a3412`, `--color-ink: #0c0a09`,
   `--color-muted: #57534e`, `--color-line: #e7e5e4`, `--color-ground: #fafaf9`, `--color-chip-used: #f5f5f4`,
   `--color-control-line: #8f877f` (the fixed border token), and the two chip-radius / card-radius values.
7. **Radii/spacing tokens:** **24** card · **14** CTA · **12** chip · **10** field · **999** track · **50%** thumb;
   card pad `clamp(24px, 4vw, 40px)`; wrapper pad `clamp(40px, 8vw, 110px) 16px`; section `max-width: 1100px`;
   grid `1.05fr / 1fr`, gap `clamp(32px, 6vw, 88px)`.
8. **Fonts:** Manrope 400 / 500 / 600 / 700 / 800 via the Google `css2` link — **800 is used** (headline, amount, chip
   rates), so the import must include it; verify with `CSS.getPlatformFontsForNode` that the `h1` reports
   `Manrope`/`custom=true`. The served face is **4–5 % narrower** than the archive at 13.5–17 px and **0.5–0.9 %
   wider** at 56–60 px — re-check the footnote and the 331-px chip wrap after swapping, never the string widths.
9. **Copy:** paraphrase the product ("Inkpost" → your own name; the plan is one product with three rate tiers). Keep the
   **shape**: one eyebrow sentence, one two-clause headline, a three-sentence lede, **six** bullets, three chips with
   `Seats a–b` + `$n`, one CTA sentence, one footnote question + link. Keep the arithmetic's _character_: a 3-tier
   graduated scale over 1–200 seats with rates that decrease.
10. **Tests to write first** (they mirror the scenarios): `clampSeats` table (1 / 12 / 0 / -5 / 250 / '' / 12.6 / 'abc'),
    `total`/`avg`/`fill` for 1 · 10 · 11 · 12 · 50 · 51 · 200, the detail string per tier count, the chip class triple at
    1 / 12 / 51 / 200, `aria-valuetext` singular/plural, keyboard `ArrowRight`/`Home`/`End`, the 51-seat reflow
    (card 638.73, info y 211.41), the 1440 rect table, the 860 step, `scrollX = 0` at 320, the focus rings, and the two
    fixed contrast pairs.

## Verification checklist

- [ ] `apps/prorata` exists, package `@free-react-templates/prorata`, `public/CNAME` =
      `prorata.free.componentdock.com`, `"homepage"` = `https://prorata.free.componentdock.com`
- [ ] `npm run verify:app prorata` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-prorata --type spec` is valid
- [ ] no source string survives: `grep -riE 'colorlib|pricing-table-05|inkpost' apps/prorata` → 0 hits
- [ ] measured at 1440 × 900: wrapper **1440 × 836.34** (`padding: 110 16`); section **1100 × 616.34** at (170, 110);
      info **519.16 × 435.92** at (170, 200.2); eyebrow **22.39**; `h1` **114.22** at y 232.59 (2 lines); lede
      **470 × 81.56** at y 362.81; list **519.16 × 159.75** at y 476.38 with items **247.58** wide; card
      **494.45 × 616.34** at (775.55, 110); content **412.45**; heading **24** at y 151
- [ ] card internals at 1440: seats row **46.8** at y 199 (label **96 × 27.19**, field **92 × 46.8** at x 1137); range
      **28** at y 259.8; scale **19.19** at y 291.8; chips **69.19** at y 332.98 (tracks **132.15**, gap 8); total
      **140.78** at y 430.17; sum **63** at y 479.56 (amount **138.2**, `/ month` at (962.75, 515.56)); detail
      **22.39** at y 548.56; CTA **54.8** at y 594.95; footnote **21.59** at y 663.75
- [ ] structure: **1** `h1`, **1** `h2`, **1** `form`, **1** `ul` (6 `li`), **1** `ol` (3 `li`), **2** `input`
      (number + range), **1** `output`, **2** `a`, **0** `img` / `svg` / `button` / `script` in the port's own sections
- [ ] arithmetic: `1 → $12 · 2 → $24 · 9 → $108 · 10 → $120 · 11 → $130 · 12 → $140 · 13 → $150 · 30 → $320 ·
  50 → $520 · 51 → $528 · 60 → $600 · 100 → $920 · 150 → $1,320 · 199 → $1,712 · 200 → $1,720`, averages
      `$11.67` / `$10.00` / `$8.60`, `$1,720` grouped, `--fill` `0% … 100%`
- [ ] chip states: 1 seat → `used current / – / –`; 12 → `used / used current / –`; 51 and 200 → `used / used /
  used current`; ink fill `#0c0a09`, used fill `#f5f5f4`, suffix `#d6d3d1` on the current chip
- [ ] reflow: at 51 seats the detail is **44.78**, the card **638.73**, the CTA y **617.34** and the info column y
      **211.41**, with the document still **900**
- [ ] height ladder (document / content; **+ the port footer**): 1440 **900 / 836.34** · 1360 **900 / 833.94** ·
      1280 **900 / 821.12** · 1200 **900 / 808.34** · 1120 **900 / 795.52** · 1080 **900 / 789.12** · 1024
      **900 / 802.55** · 1000 **900 / 798.73** · 960 **900 / 786.58** · 900 **900 / 768.42** · 880 **900 / 762.31** ·
      861 **900 / 778.2** · 860 **1128** · 800 **1103** · 768 **1090** · 700 **1064** · 600 **1033** · 520 **1040** ·
      480 **1141** · 440 / 420 **1163** · 414 **1198** · 400 **1225** · 396 / 390 / 360 **1247** · 349 / 331 **1267** ·
      320 **1294**
- [ ] seams: columns 861/860; `h1` 2 → 1 at 860, 1 → 2 at 418/419; lede 3 → 4 at 400/403 and 4 → 5 at 320; list 2 → 1
      col at 480; detail 1 → 2 at 1034/1035 (2-col) and at 458/459 (1-col); footnote 2 → 1 at 396/397 and the
      861–878 band; middle chip label wraps at ≤ 348, first chip at ≤ 320; card pad 24 ↔ 40 across 600–1000
- [ ] Google-face deltas recorded, not "fixed": footnote one line at 861–878 (card **618.84**, info y **150.34**) and a
      **1225** document at 390; 12.5 px chip labels wrap one step earlier
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at 320, 331, 360, 375, 390, 414, 440, 480, 481, 520, 600, 700,
      768, 800, 860, 861, 880, 900, 901, 960, 1000, 1024, 1080, 1120, 1200, 1280, 1360, 1440
- [ ] motion: **0** `@keyframes`; 3 transitions (.2s chip, .2s CTA, .15s thumb); all `0s` under
      `prefers-reduced-motion: reduce`; thumb `:active` **1.12** → none
- [ ] focus: field `3px #c2410c` at +1; slider ring on the **thumb** (`0 0 0 4px #fff, 0 0 0 7px #c2410c`); CTA
      `3px #0c0a09` at +3; footnote link `2px #c2410c` at +2; `Tab` order field → slider → CTA → link
- [ ] contrast asserted in a test: eyebrow **4.96**, muted on white **7.63**, ink **18.92 – 19.76**, CTA **5.18**
      (hover **7.31**), current-chip range **13.26**, scale **4.80 / 5.74**, and the **fixed** control borders
      **3.54 / 3.39**
- [ ] a11y shape: one `h1`, one `h2`, the section and the form `aria-labelledby` their headings; the field has a
      visually-hidden label; `aria-valuetext` on the slider; the output is a live region that announces the **settled**
      value only; the current chip is announced (not colour-only); the scale row is `aria-hidden`; **two** resolving
      anchors (no `href="#"`)
- [ ] footer strip links `https://www.componentdock.com/` as **Component Dock**
- [ ] bookkeeping: `npm run readme:status`, then **append** the `TEMPLATES.md` row under
      `## Bootstrap Pricing Tables (12)` (line **891**, after the Pricing Table 01 row; `## Bootstrap Wizards (30)` is
      at **895**) and `gh workflow run deploy-surge.yml -f app="prorata"`
