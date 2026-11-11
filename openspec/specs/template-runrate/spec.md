# Template: Runrate (Pricing table — a dark **usage-bill estimator**: a two-column page on an ink-navy ground where the left panel is three metered controls — two 11/12-stop sliders and a support toggle — and the right panel is a light, sticky bill card that recomputes a `$` total from a flat platform fee plus metered calls and storage, with a four-segment stacked bar that grows in proportion to each line's dollars)

## Purpose

**One page that turns two controls into one number.** This is the **sixth variant of the `pricing-table` snippet family**
(12 variants) and the family's **second calculator** — but a different instrument from its `prorata` neighbour. `ratecard`,
`tallyboard`, `parity` and `limelight` are comparison pages (plan cards or a real table). `prorata` sells one per-seat plan
through a **numeric** field and a **graduated** rate table. This one sells **metered consumption** through **two independent
sliders** whose stops are not linear (0 → 100M calls in eleven steps, 1 GB → 10 TB in twelve), adds a **$149 boolean**, and
renders the answer twice: as a single total **and** as a four-segment bar whose segment widths are the **raw dollar amounts**.

The composition is the family's only **dark** one: an ink-navy ground with a single teal radial glow in the top-right
corner, a near-black control panel with hairline borders, and one **light** card (sticky on desktop) that carries the money.
Five CSS custom properties live on the section class, the script writes a sixth (`--cl-pricing06-fill`) inline per slider.

- **Source slug:** `pricing-table-06`
- **ColorLib page:** https://colorlib.com/wp/template/pricing-table-06/ — **HTTP 200, 114,070 B** (`curl -4`; a second
  fetch read 114,062 B, so quote it as ≈114.1 kB), `<title>` `Pricing Table V06 - Free Bootstrap Pricing Tables 2026 -
Colorlib`, `h1` **"Pricing Table V06"**, `datePublished` **2026-09-25T15:12:49+00:00**, meta description _"A dark usage
  pricing calculator for a hosted API. Free download, no jQuery or plugins."_ — **accurate again** (third variant in a row
  whose marketing copy matches the artefact). The page publishes no download-size claim; the archive measures
  **384,421 B = 375.4 KiB**.
  **The design name the naming audit reads is ColorLib "Pricing Table V06".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/pricing-table-06/ — **HTTP 200,
  4,550 B**. The slug-only path `theme/pricing-table-06/` is **404 (9 B)** and `theme/bb/pricing-table-06/` is **404
  (9 B)**: the `bootstrap/` prefix is the only live path, as for every `card`, `alert`, `hero` and `pricing-table` variant
  before it. One stylesheet `css/style.css?v=3931283e` — **10,930 B**, sha256
  `807b65acd15709bc14185e7d61e8ae917dfc4c3b083c0032f840261f19bc9347` — and one script `js/snippet.js?v=1b70d6be` —
  **3,414 B**, sha256 `b6a2e397696b4115505ab856ee720f2305d91f74706600ba446b580bd189052a`. Both are **the page's own** (the
  preview host injects nothing into this document beyond `noindex` metas and a `cdnjs.cloud` `dns-prefetch`).
- **Archive (verified twin):** https://preview.colorlib.com/downloads/free/pricing-table-06.zip — **HTTP 200,
  384,421 B**, containing `index.html` (**4,347 B**), `css/style.css`, `js/snippet.js`, `fonts/` (8 woff2) and a
  `README.md`. **`css/style.css` and `js/snippet.js` hash IDENTICALLY to the live copies** → _live preview verified; the
  archive is its un-versioned twin_. `index.html` differs from the live DOM by **203 B of `<head>` + two `?v=` queries
  only** (live adds `noindex` metas, the `cdnjs.cloud` `dns-prefetch`, `fetchpriority="high"`, and a `?v=` on both
  assets) — the same 203-byte delta as four of its siblings, which is why the `<body>` is byte-identical. Verified by
  serving the archive over `python3 -m http.server` and diffing **every rect against the live page at 1440, 1000, 861,
  860, 600 and 375** — **identical to the hundredth at all six widths** (see the reference readings).
  ⚠️ The archive `README.md` advertises **`images/` — which does not exist** in the zip (seventh variant in a row with a
  phantom file line). There is no photography on this page at all: **0 `<img>`, 0 `<svg>`**.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-06.jpg — **HTTP 200, 30,250 B,
  1200 × 972**, and it is **AVIF behind a `.jpg`** again (`file` → `ISO Media, AVIF`; `PIL` opens it as 1200 × 972 RGB) —
  the sixth variant in seven. The shot is a **macOS browser mock-up** (traffic lights, a `preview.colorlib.com` URL pill,
  a rounded window with a drop shadow on a grey surround, the page floating on ~90 % of the width) showing the whole
  page: eyebrow, one-line headline, two-line lede, the dark panel with both sliders at their defaults (1M / 50 GB) and
  the unchecked support row, and the light card reading **$39.40** with its four-row breakdown. Do **not** adopt the
  window frame, its rounded corners or its shadow.
- **Design category:** Pricing table (**usage-based / metered SaaS bill estimator — two non-linear sliders, one boolean,
  a flat base fee, a four-segment proportional bar; no plan grid, no billing switch, no table, no imagery, no
  testimonial, no nav, no footer**; variant **6 of 12** in the `pricing-table` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/runrate`, package
  `@free-react-templates/runrate`, CNAME `runrate.free.componentdock.com`.

**Name:** `runrate` — one lowercase word, no hyphen, **0 hits** across the repo (`git grep -il runrate origin/main` →
nothing), no `apps/runrate`, no `openspec/specs/template-runrate`, and no name in `TEMPLATES.md` uses it. It is the
SaaS-finance term for exactly what the card prints (the month's extrapolated spend from current usage), it does not
describe the component (_pricing table_, _slider_, _calculator_), and it is **not** a ColorLib slug:
`colorlib.com/wp/template/runrate/` → **404**, `preview.colorlib.com/theme/runrate/` → **404**, and
`preview.colorlib.com/theme/bootstrap/runrate/` → **404**.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` (**2,923** rows, 0 `- [ ]`, 0 `[~]`), so this item comes from the **catalogue-gap queue**
in `docs/catalog-coverage.md`: 256 ColorLib-listed designs that the checklist never recorded — 42 stand-alone pages plus
**214 snippet variants in 19 families**. The `pricing-table` family is **6 of 12** prepped after this run
(`ratecard` 01 built, `tallyboard` 02 built, `parity` 03, `limelight` 04 and `prorata` 05 prepped and unbuilt), and only
variants 01 and 02 have rows so far.

## Where the row goes once this ships (the prep must not add it)

The implementer appends the row under `## Bootstrap Pricing Tables (12)` (header at **line 891**, rows 01/02 at **893**
and **894**, `## Bootstrap Wizards (30)` at **896** as of `cb462ce41`) — grammar `[colorlib] · ![preview] · [app]`,
exactly as its two siblings:

```
- [x] **Pricing Table 06** — [colorlib](https://colorlib.com/wp/template/pricing-table-06/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-06.jpg) · [runrate](https://runrate.free.componentdock.com)
```

Rows 03/04/05 are still absent (their preps carry the same instruction), so the row order is decided by **when each app
ships**, not by the variant number. Re-read `TEMPLATES.md` **after every rebase** — a sibling has landed mid-prep in each
of the last eight runs.

## Design tokens (read off `style.css`, 10,930 B, sha256 `807b65ac…`)

Six custom properties: **five on `.cl-pricing06`** (not `:root`), and the sixth (`--cl-pricing06-fill`) written **inline
on each `<input type="range">`** by the script:

| Token                  | Value                                                                    | Where it lands                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `--cl-pricing06-teal`  | `#2dd4bf`                                                                | eyebrow, the filled half of both slider tracks, the checkbox `accent-color`, the checked border and tint, the range focus ring |
| `--cl-pricing06-ink`   | `#e2e8f0`                                                                | the section's base text — every label, the section's `color` (Tailwind `slate-200`)                                            |
| `--cl-pricing06-muted` | `#a3b0c2`                                                                | the lede, both hints, the checkbox row's text (`slate-400`-ish, **not** a Tailwind slate: it is `#94a3b8` one step away)       |
| `--cl-pricing06-panel` | `#111a2e`                                                                | the left control panel's fill — a bespoke navy, not a Tailwind step                                                            |
| `--cl-pricing06-line`  | `#22304a`                                                                | the panel's 1 px border                                                                                                        |
| `--cl-pricing06-fill`  | `40%` (CSS default)                                                      | the track gradient's hard stop; **the script overwrites it inline** as `((value − min)/(max − min))·100%`                      |
| page ground            | `#0b1120`                                                                | `body` **and** the demo wrapper (`radial-gradient(60% 50% at 80% 0%, rgba(45,212,191,.12), transparent 70%)` over it)          |
| bill card              | `#f8fafc`, text `#0f172a`                                                | the light card, radius **20**, `box-shadow: 0 30px 60px -30px rgba(0,0,0,.6)`                                                  |
| bill title             | `#475569`                                                                | "Your estimated bill" 14/600                                                                                                   |
| breakdown key row      | dt text `#334155`, rules `#e2e8f0`                                       | the four `dt`/`dd` rows — 1 px `border-top`, the first row's rule on top as well                                               |
| segment / key colours  | base `#0f172a` · calls `#14b8a6` · storage `#3b82f6` · support `#f43f5e` | both the bar segments and the 10 × 10 legend keys (same painted value)                                                         |
| bar ground             | `#e2e8f0`                                                                | the 10 px track behind the segments; the segments carry `box-shadow: inset -2px 0 #f8fafc` (a 2 px light notch)                |
| CTA                    | fill `#0f172a`, hover `#134e4a`, focus ring `#0d9488`                    | the one dark button, `transition: background-color .2s ease`                                                                   |
| slider track rest      | `#2a3a57`                                                                | the **unfilled** half (**1.52 : 1 — fixed in the port, see below**)                                                            |
| dashed checkbox border | `#33476b`                                                                | the row's 1 px **dashed** border (**1.86 : 1 — fixed in the port**)                                                            |
| thumb                  | `#fff`, 22 × 22, radius 6, `box-shadow: 0 0 0 4px rgba(45,212,191,.35)`  | the square handle; focus → `0 0 0 3px #0b1120, 0 0 0 6px #fff`                                                                 |

**This palette is bespoke, not a renamed Tailwind ramp.** Four values are Tailwind (`#0b1120` is close to but not
`slate-950`; `#0f172a` = `slate-900`, `#e2e8f0` = `slate-200`, `#f8fafc` = `slate-50`, `#475569` = `slate-600`,
`#334155` = `slate-700`, `#14b8a6` = `teal-500`, `#2dd4bf` = `teal-400`, `#0d9488` = `teal-600`, `#134e4a` = `teal-900`,
`#3b82f6` = `blue-500`, `#f43f5e` = `rose-500`) and the rest are hand-picked navies (`#111a2e`, `#22304a`, `#2a3a57`,
`#33476b`, `#a3b0c2`). Do not "regularise" them into `slate-*`: the panel and the track are the two surfaces the eye
compares, and moving `#111a2e` to `slate-900` changes both.

Radii: **20** (both panels) · **14** (the dashed support row) · **12** (CTA) · **6** (slider thumb) · **3** (legend key) ·
**999** (bar and track). Borders: **1 px** everywhere except the thumb (`border: 0`, ring by shadow). Shadows: **four** on
the page — the bill card, the inset separator on the bar segments, the thumb's teal halo, and the two focus rings.
**No gradients except the slider track's hard stop and the page's radial glow, no `@keyframes`, no `text-shadow`, no
`backdrop-filter`, no `filter`.** Two transitions only: `flex-grow .35s ease` on the segments and `background-color .2s
ease` on the CTA (both dropped under `prefers-reduced-motion`).

Font: **DM Sans**, `system-ui` fallback, weights used **400 / 600 / 700** (and nothing else). The archive ships **8 woff2
that are 2 binaries**: `dm-sans-{400,500,600,700}-latin.woff2` are **62,556 B** each and
`dm-sans-{400,500,600,700}-latin-ext.woff2` are **31,312 B** each — so four weight names per binary, i.e. a **variable
cut**. The sheet declares only **400 / 600 / 700** (6 `@font-face`), so the `-500-` pair is shipped and **never used** —
do not add a 500 to the Google import. Google's `css2?family=DM+Sans:wght@400;600;700` answers **HTTP 200, 2,613 B**
with **one binary pair for all three weights** (`v17`, latin 36,932 B / latin-ext 18,228 B) — a **different build** from
the archive's, and it measures differently (see the drift table).

Type scale as shipped: **46 / 49.68** (`h1`, `clamp(30px, 4.4vw, 46px)`, **700**, `letter-spacing: -.03em`,
`line-height: 1.08`) · **54 / 56.7** (the total, `clamp(42px, 5vw, 54px)`, **700**, `-.04em`, `1.05`, `tabular-nums`) ·
**26 / 40.3** (the two value pills, **700**, `-.02em`, `tabular-nums`) · **16.5 / 25.575** (lede) · **15 / 23.25** (the
section base: labels **600**, CTA **700**) · **14.5 / 22.475** (the four breakdown rows) · **14 / 21.7** (bill title
**600**, the support row's text) · **13.5 / 20.925** (the hints) · **13 / 20.15** (eyebrow, **700**, `letter-spacing:
.08em`, uppercase) · **12.5 / 19.375** (the fine print).

## The calculator contract (read off `js/snippet.js`, 3,414 B, sha256 `b6a2e397…`)

```
CALL_STEPS    = [0, 100000, 250000, 500000, 1000000, 2500000, 5000000, 10000000, 25000000, 50000000, 100000000]
STORAGE_STEPS = [1, 5, 10, 25, 50, 100, 250, 500, 1000, 2000, 5000, 10000]          // GB
PRICES        = { base: 25, freeCalls: 100000, per100k: 1, freeGb: 5, perGb: 0.12, support: 149 }

calls   = CALL_STEPS[+(range1.value)]                  // index, NOT a value: min 0 max 10
gb      = STORAGE_STEPS[+(range2.value)]               // index: min 0 max 11 → 1 … 10,000 GB
cost.base    = 25
cost.calls   = max(0, calls - 100000) / 100000 * 1
cost.storage = max(0, gb - 5) * 0.12
cost.support = checkbox.checked ? 149 : 0
total        = base + calls + storage + support
fill(i)      = (value - min) / (max - min) * 100 + '%'   // written to --cl-pricing06-fill inline, per input
```

Three formatters, all `Intl.NumberFormat('en-US')`: **currency USD with the default 2 decimals** for the total and the
four line amounts (`$39.40`, `$1,199.40`, `$0.00`); **`notation: 'compact', maximumFractionDigits: 1`** for the calls
pill (`0`, `100K`, `1M`, `2.5M`, `100M`); **plain grouping** for `aria-valuetext` (`1,000,000 requests`). Storage labels
switch at **1000 GB**: `gbLabel = gb >= 1000 ? gb/1000 + ' TB' : gb + ' GB'` → `1 TB`, `2 TB`, `5 TB`, `10 TB`.

Verified against the live page (every calls stop at the default 50 GB, every storage stop at the default 1M):

| control    | stop → amount   | monthly total | calls line | storage line |
| ---------- | --------------- | ------------: | ---------: | -----------: |
| calls 0    | 0               |    **$30.40** |      $0.00 |        $5.40 |
| calls 1    | 100K            |    **$30.40** |      $0.00 |        $5.40 |
| calls 2    | 250K            |    **$31.90** |      $1.50 |        $5.40 |
| calls 3    | 500K            |    **$34.40** |      $4.00 |        $5.40 |
| calls 4    | 1M (default)    |    **$39.40** |      $9.00 |        $5.40 |
| calls 5    | 2.5M            |    **$54.40** |     $24.00 |        $5.40 |
| calls 6    | 5M              |    **$79.40** |     $49.00 |        $5.40 |
| calls 7    | 10M             |   **$129.40** |     $99.00 |        $5.40 |
| calls 8    | 25M             |   **$279.40** |    $249.00 |        $5.40 |
| calls 9    | 50M             |   **$529.40** |    $499.00 |        $5.40 |
| calls 10   | 100M            | **$1,029.40** |    $999.00 |        $5.40 |
| storage 0  | 1 GB            |    **$34.00** |      $9.00 |        $0.00 |
| storage 1  | 5 GB            |    **$34.00** |      $9.00 |        $0.00 |
| storage 2  | 10 GB           |    **$34.60** |      $9.00 |        $0.60 |
| storage 3  | 25 GB           |    **$36.40** |      $9.00 |        $2.40 |
| storage 4  | 50 GB (default) |    **$39.40** |      $9.00 |        $5.40 |
| storage 5  | 100 GB          |    **$45.40** |      $9.00 |       $11.40 |
| storage 6  | 250 GB          |    **$63.40** |      $9.00 |       $29.40 |
| storage 7  | 500 GB          |    **$93.40** |      $9.00 |       $59.40 |
| storage 8  | 1 TB            |   **$153.40** |      $9.00 |      $119.40 |
| storage 9  | 2 TB            |   **$273.40** |      $9.00 |      $239.40 |
| storage 10 | 5 TB            |   **$633.40** |      $9.00 |      $599.40 |
| storage 11 | 10 TB           | **$1,233.40** |      $9.00 |    $1,199.40 |
| support on | —               |  **+$149.00** |          — |            — |

Corner combos, all verified in the browser: `calls 0 · storage 0 · support off` → **$25.00** (the bar is a single
100 % dark segment, `flex-grow 25/0/0/0`); `calls 10 · storage 11 · support on` → **$2,372.40**; `calls 10 · storage 0 ·
support on` → **$1,173.00**; `calls 0 · storage 11 · support on` → **$1,373.40**; `calls 7 · storage 7 · support on` →
**$332.40**.

Two arithmetic quirks the port **must keep**, because they are visible in the reference:

1. **The storage slider's first stop is 1 GB, not 0** (`STORAGE_STEPS[0] === 1`) while its `min` is **0** — so at the
   left end the pill reads `1 GB`, the track is **0 % filled**, and the line is `$0.00`. The calls slider's first stop
   _is_ 0 and its pill reads `0`.
2. **The bar's segment widths are the raw dollar amounts**, not percentages: `style.flexGrow = String(cost[k])` on a
   `flex: 0 1 0` child. So at the defaults the four `flex-grow`s are **25 / 9 / 5.4 / 0** and the painted widths are
   **249.92 / 89.97 / 53.98 / 0** of a 393.88 track. A port that normalises to percentages gets the same picture; a port
   that sets `flex-basis` instead of `flex-grow` breaks the `.35s` animation and the zero-width support segment.

Event wiring: `input` on both ranges → update; `change` on the checkbox → update; `submit` on the `<form>` →
`preventDefault()` (there is **no** submit button, so `Enter` in the form does nothing); `update()` runs **once on load**
(so the pills, the total, the four lines, the bar and the `aria-valuetext`s are all script-written, and the markup's
`1M` / `50 GB` / `$39.40` are only the pre-script defaults). The live region is debounced **700 ms**:
`role="status"` `aria-live="polite"`, text `Estimated total $39.40 per month.` — including on first load, because
`update()` schedules it.

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium at 1440 × 900, `document.fonts.ready`)

The archive twin was served over `python3 -m http.server`, and **the archive copy reproduces the live page on every
single rect at all six probed widths** (1440, 1000, 861, 860, 600, 375) — document, wrapper, section, both columns,
every control row, the bill card and its seven blocks, to the hundredth. Every number below is therefore the
reference's own.

| Reading                       | Reference (= archive twin)                                                               |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| document height at 1440 × 900 | **900** (= the viewport; content is **859.19**)                                          |
| demo wrapper                  | **1440 × 859.19**, `padding: 96px 16px` (`clamp(40px, 7vw, 96px) 16px`), radial glow     |
| section                       | **1100 × 667.19** at (170, 96), `max-width: 1100`, base 15 / 23.25 `#e2e8f0`             |
| head                          | **760 × 142.94** at y 96, `max-width: 760`, `margin-bottom: 40`                          |
| eyebrow                       | **20.14** at y 96 — 13 / 700, `.08em` (**1.04 px**), uppercase, `#2dd4bf`                |
| `h1`                          | **760 × 49.67** at y 126.14 — **one** line of 49.68 (46 / 700, `-1.38px`, `1.08`)        |
| lede                          | **760 × 51.13** at y 187.81 — **two** lines of 25.575 (16.5 / 400, `#a3b0c2`)            |
| body grid                     | **1100 × 484.25** at y 278.94 — `1.35fr / 1fr`, gap **24**                               |
| control panel                 | **618.13 × 441.81** at (170, 278.94) — pad **38**, radius **20**, border 1 px `#22304a`  |
| field 1                       | **540.13 × 109.22** at y 317.94 (row 40.3 + 12 + range 26 + 10 + hint 20.92)             |
| field 2                       | **540.13 × 109.22** at y 461.16                                                          |
| label / value                 | label **175 × 23.25** at y 330.94 (15 / 600); value **30.97 × 40.3** at x **718.16**     |
| range                         | **540.13 × 26** at y 370.23 (track 6, thumb 22, `margin-top: -8`)                        |
| hint                          | **540.13 × 20.92** at y 406.23 (13.5 / 20.925)                                           |
| support row                   | **540.13 × 77.38** at y 604.38 — pad 16, radius 14, **1 px dashed**, gap 12              |
| checkbox / its text           | box **20 × 20** at (226, 622.38); text **474.13 × 43.38** at (258, 621.38) — **2 lines** |
| bill card                     | **457.88 × 484.25** at (812.13, 278.94) — pad **32**, radius **20**, `#f8fafc`, sticky   |
| bill title                    | **393.88 × 21.69** at y 310.94 (14 / 600 `#475569`)                                      |
| total block                   | **393.88 × 56.69** at y 336.63 — `margin: 4px 0 18px`; the `output` is **161.05** wide   |
| bar                           | **393.88 × 10** at y 411.31 — radius 999, `#e2e8f0`, `margin-bottom: 18`                 |
| segments                      | **249.92 / 89.97 / 53.98 / 0** — `flex-grow` **25 / 9 / 5.4 / 0**                        |
| breakdown                     | **393.88 × 165.88** at y 439.31 — four rows of **41.47** (`padding: 9px 0`, 1 px rule)   |
| legend key                    | **10 × 10**, radius 3, at x 844.13 (y 455.55 / 497.02 / 538.48 / 579.95), gap **10**     |
| amount cell                   | right-aligned `dd` at x **1198 ± 5** (the digits' own width), 14.5 / 600, `tabular-nums` |
| CTA                           | **393.88 × 49.25** at y 629.19 — `padding: 13px 18px`, radius **12**                     |
| fine print                    | **393.88 × 38.75** at y 692.44 — **2** lines of 19.375, `margin-top: 14`                 |

DOM skeleton (the port reproduces it 1:1; indentation mirrors the reference's nesting):

```
main.demo 1440 × 859.19            radial glow over #0b1120, padding 96 16
└ section 1100 × 667.19 @ (170,96)  max-width 1100, aria-labelledby the h1
  ├ header 760 × 142.94 @ (170,96)  margin-bottom 40
  │ ├ p.eyebrow      20.14  @ y 96        13/700 .08em uppercase #2dd4bf
  │ ├ h1.title       49.67  @ y 126.14    46/700 -.03em 1.08 #fff, margin 10 0 12
  │ └ p.lede         51.13  @ y 187.81   16.5/25.575 #a3b0c2
  └ div.body 1100 × 484.25 @ (170,278.94)  grid 1.35fr/1fr, gap 24, align-items start
    ├ form.controls 618.13 × 441.81 @ (170,278.94)  grid, gap 34, pad 38, radius 20, #111a2e
    │ ├ div.field        540.13 × 109.22 @ y 317.94  (row 40.3 / range 26 / hint 20.92)
    │ │ ├ div.row        flex, baseline, space-between, gap 12, margin-bottom 12
    │ │ │ ├ label        175 × 23.25 @ y 330.94   15/600, for=range
    │ │ │ └ span.value   30.97 × 40.3 @ x 718.16  26/700 -.02em tabular #fff
    │ │ ├ input[range]   540.13 × 26 @ y 370.23   min 0 max 10 step 1 value 4
    │ │ └ p.hint         540.13 × 20.92 @ y 406.23 13.5/400 #a3b0c2, margin 10 0 0
    │ ├ div.field        540.13 × 109.22 @ y 461.16  (…min 0 max 11 value 4)
    │ └ label.check      540.13 × 77.38 @ y 604.38   flex, gap 12, pad 16, radius 14,
    │   │                                             border 1px dashed #33476b
    │   ├ input[checkbox] 20 × 20 @ (226,622.38)     accent-color #2dd4bf
    │   └ span.check-text 474.13 × 43.38 @ (258,621.38)  14/21.7, strong 700 #fff
    └ aside.bill 457.88 × 484.25 @ (812.13,278.94)   #f8fafc, radius 20, pad 32, sticky top 24
      ├ h2.bill-title   393.88 × 21.69 @ y 310.94    14/600 #475569
      ├ p.total         393.88 × 56.69 @ y 336.63    margin 4 0 18
      │ └ output        161.05 wide                  54/700 -.04em 1.05 tabular #0f172a
      ├ div.bar         393.88 × 10 @ y 411.31       4 spans, flex-grow = dollars
      ├ dl.lines        393.88 × 165.88 @ y 439.31   4 rows, border-top 1px #e2e8f0
      ├ p.vh            visually hidden              role=status aria-live=polite
      ├ a.cta           393.88 × 49.25 @ y 629.19    pad 13 18, radius 12, #0f172a
      └ p.fine          393.88 × 38.75 @ y 692.44    12.5/19.375 #475569, margin-top 14
```

Two composition facts a port gets wrong first: the **body grid is `align-items: start`** (the control panel is _shorter_
than the bill card — 441.81 vs 484.25 — so the two panels share a top edge and leave 42.44 px of dead space under the
left one), and the **bill card is `position: sticky; top: 24px`** even though the page is exactly viewport height at
1440 (the stickiness only bites once the document is taller than the viewport, i.e. at every width ≤ 860).

**Height ladder** (document height; the reference is viewport-capped at 900 above 861):

|   vw | document | section |  panel |   bill | notes                                                            |
| ---: | -------: | ------: | -----: | -----: | ---------------------------------------------------------------- |
| 1440 |  **900** |  667.19 | 441.81 | 484.25 | `7vw` padding hits its **96** ceiling from 1372                  |
| 1360 |      900 |  667.19 | 441.81 | 484.25 |                                                                  |
| 1280 |      900 |  667.19 | 441.81 | 484.25 |                                                                  |
| 1200 |      900 |  667.19 | 441.81 | 484.25 | section is 1100 wide again from 1132 (margins shrink)            |
| 1100 |      900 |  667.19 | 441.81 | 484.25 | section fills the width less its 16 px sides (1068)              |
| 1024 |      900 |  663.23 | 441.81 | 481.31 | `h1` 45.056 px                                                   |
|  960 |      900 |  656.83 | 441.81 | 477.95 | panel padding is at its **38** ceiling from 950                  |
|  900 |      900 |  649.83 | 437.81 | 473.81 |                                                                  |
|  880 |      900 |  646.42 | 436.19 | 471.34 | fine print **2** lines again (box 289)                           |
|  877 |      900 |  645.68 | 435.88 | 470.97 | last width with a 2-line fine print                              |
|  861 |      900 |  662.56 | 434.69 | 488.38 | **last 2-col**; fine print **3** lines, support row **2**        |
|  860 | **1181** | 1060.55 | 412.91 | 449.52 | **1 col**; support row collapses to **1** line, fine print **1** |
|  800 |     1160 | 1047.69 | 408.13 | 444.28 |                                                                  |
|  768 |     1149 | 1041.36 | 405.56 | 442.03 |                                                                  |
|  700 |     1126 | 1027.92 | 400.13 | 437.28 | panel padding **28**; fine print 1 line                          |
|  657 |     1132 | 1033.56 | 405.77 | 453.56 | fine print **2** lines (its box is 559 wide)                     |
|  640 |     1127 | 1037.41 | 395.31 | 452.44 | support row back to **1** line (634/635 is its seam)             |
|  600 |     1139 | 1055.13 | 413.81 | 451.66 | page **grows** 12 px while the viewport loses 40                 |
|  520 |     1131 | 1051.13 | 409.81 | 451.66 | …and **shrinks** again — non-monotonic both ways                 |
|  480 |     1189 | 1109.08 | 409.81 | 451.66 | lede **3** lines (485 is its seam)                               |
|  440 |     1189 | 1109.08 | 409.81 | 451.66 |                                                                  |
|  414 |     1210 | 1130.00 | 430.73 | 451.66 | the calls hint wraps (box 382) — panel **+20.92**                |
|  390 |     1210 | 1130.00 | 430.73 | 451.66 |                                                                  |
|  375 |     1232 | 1151.69 | 452.42 | 451.66 | support row **3** lines                                          |
|  360 |     1251 | 1171.06 | 452.42 | 471.03 | bill **+19.37** (fine print 3 lines)                             |
|  320 |     1298 | 1218.31 | 474.11 | 471.03 | `h1` 30 px **2** lines, lede **4**, support row **4**            |

**Wrap seams, measured with 1-px sweeps in `[320, 342] ∪ [450, 500] ∪ [494, 514] ∪ [620, 680] ∪ [840, 900]`** (each
step at a settled 300 ms):

| element                 | seam                         | effect                                                                                         |
| ----------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| `h1`                    | **2 lines ≤ 505 → 1 at 506** | section **1164 → 1131** at the seam (33 px); 1 line everywhere above                           |
| lede                    | **4 lines ≤ 332 → 3 at 333** | section **1277 → 1251**                                                                        |
| lede                    | **3 lines ≤ 484 → 2 at 485** | section **1189 → 1164**                                                                        |
| support row             | **2 lines ≤ 633 → 1 at 634** | document **1146 → 1125**, panel **−21.68** at 700                                              |
| fine print              | **2 lines ≤ 656 → 1 at 657** | bill **453.56 → 434.25** (**−19.31**)                                                          |
| media query             | **860 / 861**                | document **1181 → 900**, bill **449.52 → 488.38**, fine print 1 → **3**, support row 1 → **2** |
| fine print (2-col band) | **3 lines ≤ 876 → 2 at 877** | bill **490.23 → 470.97** (**−19.26**) — the page stays 900                                     |

**The tightest fit on the page is the support row's text: 3.13 px.** In the archive face it measures **471.00** in a
**474.13** box at 1440, which is why it wraps to **two** lines and why the panel is 77.38 tall instead of 55.69. Google's
DM Sans v17 measures the same string at **459.00** (−2.55 %) → **one line**, and the panel collapses to **420.13**
(−21.68) at every width ≥ ~1120. The copy prescribed below was chosen inside that band (measured **467.00** in the
served face) so the two-line render survives; any later copy edit must be re-measured against this 474.13 box.

**Google-vs-archive drift** (same strings, `getBoundingClientRect` on a cloned span at the element's own size, weight and
tracking — never `measureText`, which ignores `letter-spacing`):

| string                                   | size / weight |    archive |     Google |       Δ |
| ---------------------------------------- | ------------- | ---------: | ---------: | ------: |
| the `h1` sentence                        | 46 / 700      | **684.70** | **747.70** | +9.20 % |
| the total `$39.40`                       | 54 / 700      | **161.05** | **171.05** | +6.21 % |
| the total `$2,372.40`                    | 54 / 700      | **219.56** | **236.56** | +7.74 % |
| a line label (`Platform fee`)            | 14.5 / 400    |      86.00 |      82.00 | −4.65 % |
| the lede                                 | 16.5 / 400    |     891.00 |     895.00 | +0.45 % |
| a hint (`First 5 GB free…`)              | 13.5 / 400    |     218.00 |     211.00 | −3.21 % |
| the fine print                           | 12.5 / 400    |     579.00 |     566.00 | −2.25 % |
| the CTA label                            | 15 / 700      |     128.00 |     122.00 | −4.69 % |
| the bill title                           | 14 / 600      |     162.00 |     151.00 | −6.79 % |
| a field label (`API requests per month`) | 15 / 600      |     175.00 |     172.00 | −1.71 % |
| the value pill (`1M`)                    | 26 / 700      |      30.97 |      30.97 |  0.00 % |
| the eyebrow (uppercase)                  | 13 / 700      |     157.77 |     156.77 | −0.63 % |

The drift is **not a single scale factor** — it is +9.2 % at 46 px/700 and −6.8 % at 14 px/600, with one 0.00 % (the
`1M` pill, whose two glyphs happen to cancel). Two consequences the port must plan for: the **`h1` keeps its single line
with only 12.3 px to spare** in the served face (747.70 in 760 — the archive's 684.70 left 75.30), and **every
copy-derived wrap seam moves** (see the copy decisions below). Strategy: assert **heights and line counts at 1440 and
861**, never a string width.

## Ground truth for the port (measured on a replica of the reference with the copy below, served DM Sans, 1440 × 900)

A throwaway replica was built from the archive's own stylesheet and markup, with (a) the Google `css2` face, (b) the
prescribed copy, and (c) the two contrast tokens — then measured at 25 widths. It reproduces the reference **exactly**
(document 900, section 667.19, panel 441.81, bill 484.25, `h1` 49.67 = 1 line, lede 51.13 = 2 lines, support row 77.38,
fine print 38.75, every segment width) at **23 of the 25 widths**, including both sides of the 861 seam. The two
divergences are recorded in the copy decisions.

## What the port must change (reference defects, and the copy it must not copy verbatim)

1. **Two contrast failures, both control boundaries.** The slider's resting track `#2a3a57` is **1.52 : 1** on the
   `#111a2e` panel and the dashed support-row border `#33476b` is **1.86 : 1** — both under the 3 : 1 minimum for a UI
   component's boundary (WCAG 1.4.11). Fix with **two fixed tokens**: track rest **`#506890`** (**3.07** on the panel)
   and dashed border **`#546c8f`** (**3.24**). Both are the same hue family, so the look survives; the teal filled half,
   the thumb and the type are untouched. Every text pair already passes (7.24 – 18.83).
2. **The bar's teal segment is 2.38 : 1** (`#14b8a6` on `#f8fafc`). Do **not** recolour it: the segment is redundant
   with the legend key, the row label **and** the dollar amount beside it, so no information is carried by colour alone.
   Record the number in the test as an accepted-with-reason value.
3. **`all: revert` firewall — do not port.** The sheet opens with 60 lines of `:where(html) :is(…) { all: revert }` plus a
   `[hidden]` re-assert and table/img `box-sizing` overrides, purely to neutralise a host page's Bootstrap. A React app
   owns its document; port only the six custom properties and the 20 rules that follow. (Tailwind's preflight already does
   what the firewall was compensating for; the dashed border, the 1 px rules and the radii must be **re-declared**, since
   preflight zeroes borders.)
4. **`:has()` is not needed.** The checked state is `:has(.box:checked)` → `border-style: solid; border-color: teal;
background: rgba(45,212,191,.06)`. In React this is a `data-checked` attribute (or a `cn()` class) driven by state —
   same paint, no modern-selector dependency, and it makes the state testable without CSSOM gymnastics.
5. **The dead `#` CTA and the `<a href="#">`** must become a real link — point it at the app's own `#estimate`-style
   anchor or at `https://www.componentdock.com/` (the repo's footer link). The reference's only anchor is
   `href="#"` (1 anchor, 0 images, 0 svg, 0 buttons on the page).
6. **The support row is a `<label>` wrapping the checkbox** — keep that (it is the correct pattern), but add the
   missing `:focus-visible` ring on the **whole row** (`outline: 3px solid #2dd4bf, offset 2`), not just on the 20 px box,
   so keyboard users see the row they are on. Keep the box's own ring too.
7. **The `output` is not announced per drag step.** The reference debounces 700 ms into a `role="status"` node. In React,
   drive that from the derived total with a `useEffect` + `setTimeout` + cleanup (a debounce, **not** a synchronous
   `setState` in an effect — oxlint's `react(set-state-in-effect)` is an error in this repo), and keep the initial
   announcement.
8. **The `.cl-icon` rule is dead** (styled, never used) and the `--cl-pricing05`-style strings must not appear: the port
   uses `--color-*` `@theme` tokens, not `--cl-pricing06-*` custom properties.
9. **Copy.** The reference's words are paraphrased (the brand is "Runrate", not the source's fictional vendor), but the
   **numbers, the units, the step tables and the four line names' meaning are unchanged**, so every figure in this spec is
   directly assertable. Three strings were length-tuned against the **served** face so the port keeps the reference's
   line counts:

   | element     | prescribed copy                                                                                                                 |      served width | why this length                                                                                                                                                                                                                        |
   | ----------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | `h1`        | _Pay for what your app really uses_                                                                                             | **694.47** in 760 | the reference is 747.70 in 760 (12.3 px slack); the archive is 684.70. No paraphrase with an extra word fits (the next candidate measures 913.67) — accept a **16 px** earlier 2-line seam (488 vs 505) and assert heights at 1440/861 |
   | lede        | _Runrate bills a flat platform fee plus metered API calls and object storage. Move the sliders to estimate this month's total._ |    **902** in 760 | the reference measures 895 / Google 895 — the 3→2 seam lands within 4 px of the reference's 485                                                                                                                                        |
   | support row | _Priority support — one-hour replies and a shared channel. $149 / month._ (`Priority support` in `<strong>`)                    | **467** in 474.13 | the reference's 471 wraps by 3.13 px; anything ≤ 460 collapses the row to one line and the panel to 420.13                                                                                                                             |
   | fine print  | _An estimate only — you're billed on actual usage, and every account carries a spend cap and alerts._                           | **568** in 393.88 | the reference measures 566 → same 2-line render at 1440 and the same 3-line render at 861                                                                                                                                              |
   | calls hint  | _First 100,000 API calls are free, then $1.00 per 100,000._                                                                     | **345** in 540.13 | the reference measures 342; it must wrap at 414 (box 336) and not at 440 (box 362) — 345 sits in that band                                                                                                                             |

   **Measured consequences in the replica:** at **320** the support row is **3** lines instead of 4 (document **1277**
   vs **1298**, panel **452.42** vs **474.11**) — one line of a 20-glyph difference in a 288 px box; and at **414** the
   calls hint wraps in the reference but not in the port, so the port's panel is **409.81** vs **430.73** there. Every
   other width in the 25-point ladder matches. Assert 1277 at 320 and 409.81 at 414, and state both as known deltas —
   do **not** tune copy further.

10. **Add the repo's Component Dock footer strip** (`https://www.componentdock.com/`, "Component Dock") as the last
    element. It is not on the reference page, so **every document height in the ladder gains the footer's height** in the
    port (measure it once and add it; do not "fix" the spec's numbers).

## Requirements

### Requirement: The page shell

The template SHALL render one full-bleed dark ground with a single radial teal glow, holding one 1100 px section with a
760 px prose head and a two-column body of `1.35fr / 1fr` at a 24 px gap.

#### Scenario: The shell at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** the wrapper and the section are measured
- **THEN** the wrapper SHALL be **1440 × 859.19** with `padding: 96px 16px` and
  `background: radial-gradient(60% 50% at 80% 0%, rgba(45,212,191,.12), transparent 70%), #0b1120`
- **AND** the section SHALL be **1100 × 667.19** at **(170, 96)** with `max-width: 1100`, `margin: 0 auto`,
  15 px / 23.25 and colour `#e2e8f0`
- **AND** the document SHALL be exactly **900** tall (= the viewport) with **no scrollbar**.

#### Scenario: Head, body and column proportions

- **GIVEN** the section at 1440
- **WHEN** its children are measured
- **THEN** the head SHALL be **760 × 142.94** at y 96 with `max-width: 760` and `margin-bottom: 40`
- **AND** the body grid SHALL be **1100 × 484.25** at y 278.94 with
  `grid-template-columns: minmax(0,1.35fr) minmax(0,1fr)`, `gap: 24` and `align-items: start` — so the two panels share a
  top edge and the **shorter** control panel leaves **42.44** px of empty panel column below it
- **AND** the two tracks SHALL measure **618.13** and **457.88**.

#### Scenario: One h1, one h2, three controls

- **GIVEN** the rendered page
- **WHEN** the structure is read
- **THEN** there SHALL be exactly **one** `h1` and exactly **one** `h2` ("Your estimated bill")
- **AND** there SHALL be exactly **one** `<form>`, **two** `<input type="range">`, **one** `<input type="checkbox">`,
  **one** `<output>`, **one** `<dl>` with four `<div>`s, **one** `<aside>`, **one** `<a>` and **zero** `<img>` / `<svg>` /
  `<button>`.

### Requirement: The copy head

The template SHALL present a teal uppercase eyebrow, a 46 px single-line headline and a two-line lede, all inside a
760 px column.

#### Scenario: Eyebrow, headline and lede at 1440

- **GIVEN** the head at 1440
- **WHEN** its three blocks are measured
- **THEN** the eyebrow SHALL be **20.14** tall at y 96 — 13 px / 700 / `letter-spacing: .08em` (**1.04 px**) /
  `text-transform: uppercase` / `#2dd4bf` / `margin: 0`
- **AND** the `h1` SHALL be **760 × 49.67** at y 126.14 — **one** line of **49.68** (46 px / 700 / `-1.38px` /
  `line-height: 1.08` / `#fff`), `margin: 10px 0 12px`, with **694.47** px of text in the **760** box
- **AND** the lede SHALL be **760 × 51.13** at y 187.81 — **two** lines of **25.575** (16.5 px / 400 / `#a3b0c2`),
  `margin: 0`.

#### Scenario: The headline keeps one line down to 506

- **GIVEN** the `h1` at widths 500 → 520
- **WHEN** its height is read at each
- **THEN** it SHALL be **two** lines at 505 (**99.34**) and **one** line at 506 (**49.67**) in the reference face
- **AND** in the served face the port MAY flip up to 16 px earlier (**488**), which SHALL be recorded as a delta and not
  "fixed" by rewording.

### Requirement: The control panel

The template SHALL render the three metered controls as a `#111a2e` panel with a 1 px `#22304a` border, a 20 px radius
and a 38 px pad, in a single column with a 34 px gap: two slider fields, then the dashed support row.

#### Scenario: The panel shell

- **GIVEN** the panel at 1440
- **WHEN** its rect and computed style are read
- **THEN** it SHALL be **618.13 × 441.81** at **(170, 278.94)** with `padding: 38px`, `border-radius: 20`,
  `border: 1px solid #22304a`, `background: #111a2e`, `display: grid` and `gap: 34`
- **AND** the padding SHALL be `clamp(22px, 4vw, 38px)` — **22** at ≤ 560, fluid between, **38** from 950
- **AND** its content width SHALL be **540.13**.

#### Scenario: A slider field

- **GIVEN** either field at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **540.13 × 109.22** — a **40.3** row, `margin-bottom: 12`, a **26** slider and a **10** gap before
  a **20.92** hint
- **AND** the row SHALL be `display: flex`, `align-items: baseline`, `justify-content: space-between`, `gap: 12`
- **AND** the label SHALL be 15 px / 600 / `#e2e8f0` (**175** wide for "API calls per month") at y 330.94 — i.e. 13 px
  below the row's top, because the row is **baseline**-aligned against a 26 px pill
- **AND** the value pill SHALL be 26 px / 700 / `-0.52px` / `#fff` / `font-variant-numeric: tabular-nums`, right-aligned
  at x **718.16** (**30.97** wide for `1M`) and **40.3** tall
- **AND** the hint SHALL be 13.5 px / 20.925 / `#a3b0c2` with `margin: 10px 0 0`.

#### Scenario: The support toggle row

- **GIVEN** the support row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **540.13 × 77.38** with `padding: 16`, `border-radius: 14`, `border: 1px dashed #546c8f`
  (**fixed from `#33476b`**), `display: flex`, `align-items: flex-start`, `gap: 12`, 14 px / 21.7 and `#a3b0c2`
- **AND** the `<input type="checkbox">` SHALL be **20 × 20** at (226, 622.38) with `margin: 1px 0 0`,
  `flex: none`, `accent-color: #2dd4bf`
- **AND** the text SHALL be **474.13 × 43.38** at (258, 621.38) — **two** lines — with the leading label in a
  `<strong>` at `#fff` (**not** `#e2e8f0`: the reference's `strong` rule is `color: #fff`)
- **AND** the reference's `:has(:checked)` paint SHALL be reproduced as a state attribute: `border-style: solid`,
  `border-color: #2dd4bf`, `background: rgba(45,212,191,.06)` (⇒ `#132537` over the panel).

#### Scenario: The toggle is announced, not just painted

- **GIVEN** the checkbox focused via keyboard
- **WHEN** it is toggled with `Space`
- **THEN** the row SHALL show a **3 px `#2dd4bf`** outline at a 2 px offset **on the row**, in addition to the box's own
  ring, and the total SHALL change by **+$149.00**
- **AND** the `aria-checked` state of the native input SHALL be the only state exposed (no duplicate `aria-pressed`).

### Requirement: The two sliders

The template SHALL implement both controls as native `<input type="range">` elements whose **step index** (not value) is
read through a step table, with a 6 px two-tone track painted by a hard-stop gradient and a 22 px square white thumb.

#### Scenario: Track geometry and the fill stop

- **GIVEN** either slider at 1440
- **WHEN** it is measured
- **THEN** the input SHALL be **540.13 × 26** at y 370.23 (field 2: y 513.45) with `appearance: none`,
  `background: transparent` and `cursor: pointer`
- **AND** the `::-webkit-slider-runnable-track` SHALL be **6** tall, `border-radius: 999` and painted
  `linear-gradient(90deg, #2dd4bf var(--fill), #506890 var(--fill))` — a **hard stop**, the fixed rest colour, **not** a
  translucent white
- **AND** the thumb SHALL be **22 × 22** with `border-radius: 6`, `background: #fff`, `margin-top: -8px` and
  `box-shadow: 0 0 0 4px rgba(45,212,191,.35)`
- **AND** `--fill` SHALL be written **inline on the input** as `(value − min)/(max − min) × 100 %` — **40 %** for the
  calls default and **36.36 %** for the storage default (index 4 of 0…11).

#### Scenario: Keyboard, value text and repetition

- **GIVEN** a slider focused
- **WHEN** it receives arrow keys
- **THEN** it SHALL move one **step** (not one unit of the label's scale) and fire `input`
- **AND** `aria-valuetext` SHALL be set to the **human** amount — `1,000,000 requests` on calls, `50 GB` / `10 TB` on
  storage — while the visible pill stays **compact** (`1M`, `50 GB`), and the two SHALL never disagree on the _value_
  (calls `0` reads `0 requests` in both)
- **AND** `:focus-visible` SHALL paint the thumb ring `0 0 0 3px #0b1120, 0 0 0 6px #fff` with `outline: none` on the
  input itself.

#### Scenario: The Firefox delta

- **GIVEN** the page in Firefox
- **WHEN** the slider is inspected
- **THEN** the track SHALL be painted by `::-moz-range-track` (rest `#506890`) plus `::-moz-range-progress` (**teal**) instead
  of the gradient, and the thumb by `::-moz-range-thumb` — the fill therefore stops at the **thumb's centre**, not at the
  gradient's stop; that 1–2 px difference SHALL be recorded as the only cross-engine delta.

### Requirement: The bill card

The template SHALL render the estimate as one light card — `#f8fafc`, 20 px radius, 32 px pad, one soft shadow, sticky at
`top: 24px` — holding the title, the total, the proportional bar, the four-line breakdown, the live region, the CTA and
the fine print.

#### Scenario: The card shell and its title

- **GIVEN** the card at 1440
- **WHEN** its rect and computed style are read
- **THEN** it SHALL be **457.88 × 484.25** at **(812.13, 278.94)** with `background: #f8fafc`, `color: #0f172a`,
  `padding: 32`, `border-radius: 20`, `box-shadow: 0 30px 60px -30px rgba(0,0,0,.6)` and `position: sticky; top: 24`
- **AND** the title SHALL be **393.88 × 21.69** at y 310.94 — 14 px / 600 / `#475569`, `margin: 0`
- **AND** the padding SHALL be `clamp(22px, 3.5vw, 32px)` — **22.4** at 640, **32** from 915.

#### Scenario: The total

- **GIVEN** the total block at 1440
- **WHEN** it is measured
- **THEN** the block SHALL be **393.88 × 56.69** at y 336.63 with `margin: 4px 0 18px`
- **AND** the `<output>` SHALL be **54 px / 700 / `-2.16px` / `line-height: 1.05` / `tabular-nums`**, **161.05** wide
  for `$39.40` and **219.56** for `$2,372.40`, at `clamp(42px, 5vw, 54px)` (⇒ **43.05** at 861, **42** at ≤ 840)
- **AND** the text SHALL be exactly `$39.40` at the defaults — two decimals, locale grouping above a thousand, never a
  string concatenation with a `toFixed`.

#### Scenario: The four-segment bar

- **GIVEN** the bar at 1440 with the defaults
- **WHEN** its children are measured
- **THEN** the bar SHALL be **393.88 × 10** at y 411.31, `background: #e2e8f0`, `border-radius: 999`,
  `overflow: hidden`, `display: flex`, `margin-bottom: 18`
- **AND** each segment SHALL be `flex: 0 1 0`, `min-width: 0`, `box-shadow: inset -2px 0 #f8fafc` and
  `transition: flex-grow .35s ease`, painted `#0f172a` / `#14b8a6` / `#3b82f6` / `#f43f5e`
- **AND** the four widths SHALL be **249.92 / 89.97 / 53.98 / 0** because their `flex-grow` values are the **dollars**
  **25 / 9 / 5.4 / 0**; the bar SHALL never be empty (the base fee guarantees a non-zero total)
- **AND** the 2 px inset separator SHALL be drawn on **every** segment including the last, where the radius clips it to a
  sliver — reproduce it; do not "clean it up".

#### Scenario: The four-line breakdown

- **GIVEN** the breakdown at 1440
- **WHEN** it is measured
- **THEN** the `<dl>` SHALL be **393.88 × 165.88** at y 439.31 with `margin: 0 0 24px`
- **AND** each row SHALL be **41.47** tall (`padding: 9px 0`, `border-top: 1px solid #e2e8f0`, 14.5 px / 22.475) and
  `display: flex; justify-content: space-between; gap: 12`
- **AND** each `dt` SHALL be `display: flex; align-items: center; gap: 10`, colour `#334155`, led by a **10 × 10** key
  with `border-radius: 3` in the segment's colour, and `aria-hidden="true"` on that key (the label carries the meaning)
- **AND** each `dd` SHALL be `font-weight: 600`, `tabular-nums`, `margin: 0`, and right-aligned at the card's content edge
  — `$25.00` / `$9.00` / `$5.40` / `$0.00` at the defaults.

#### Scenario: The CTA and the fine print

- **GIVEN** the bottom of the card at 1440
- **WHEN** it is measured
- **THEN** the CTA SHALL be **393.88 × 49.25** at y 629.19 with `padding: 13px 18px`, `border-radius: 12`,
  `background: #0f172a`, `color: #fff`, 15 px / 700, `text-align: center`, hover `#134e4a` in `.2s`, and a
  `3px #0d9488` focus ring at a 3 px offset (**3.58 : 1** on the card)
- **AND** it SHALL be a **real** anchor (the reference's is a dead `#`)
- **AND** the fine print SHALL be **393.88 × 38.75** at y 692.44 — 12.5 px / 19.375 / `#475569`, `margin: 14px 0 0`,
  **two** lines at 1440 and **three** in the 861–876 band.

### Requirement: The estimate arithmetic

The template SHALL compute every visible figure from the two step indices and one boolean, using the reference's tables,
formatters and free tiers, so that every row of the verified tables reproduces exactly.

#### Scenario: The calls ladder

- **GIVEN** storage at its default (index 4) and support off
- **WHEN** the calls index is set to each of 0 … 10
- **THEN** the total SHALL read **$30.40 · $30.40 · $31.90 · $34.40 · $39.40 · $54.40 · $79.40 · $129.40 · $279.40 ·
  $529.40 · $1,029.40** and the calls line **$0.00 · $0.00 · $1.50 · $4.00 · $9.00 · $24.00 · $49.00 · $99.00 ·
  $249.00 · $499.00 · $999.00**
- **AND** the pill SHALL read **0 · 100K · 250K · 500K · 1M · 2.5M · 5M · 10M · 25M · 50M · 100M**.

#### Scenario: The storage ladder

- **GIVEN** calls at their default (index 4) and support off
- **WHEN** the storage index is set to each of 0 … 11
- **THEN** the total SHALL read **$34.00 · $34.00 · $34.60 · $36.40 · $39.40 · $45.40 · $63.40 · $93.40 · $153.40 ·
  $273.40 · $633.40 · $1,233.40** and the storage line **$0.00 · $0.00 · $0.60 · $2.40 · $5.40 · $11.40 · $29.40 ·
  $59.40 · $119.40 · $239.40 · $599.40 · $1,199.40**
- **AND** the pill SHALL read **1 GB · 5 GB · 10 GB · 25 GB · 50 GB · 100 GB · 250 GB · 500 GB · 1 TB · 2 TB · 5 TB ·
  10 TB**.

#### Scenario: The support boolean

- **GIVEN** any slider position
- **WHEN** the support box is checked
- **THEN** the total SHALL rise by exactly **$149.00**, the support line SHALL read `$149.00` instead of `$0.00`, and the
  support segment SHALL gain `flex-grow: 149` — at the defaults the total goes **$39.40 → $188.40**.

#### Scenario: The free tiers

- **GIVEN** calls at `100K` (index 1)
- **WHEN** the calls line is read
- **THEN** it SHALL be **`$0.00`** — the first 100,000 calls are free — and the line SHALL become non-zero only at
  `250K`
- **AND** at storage `5 GB` (index 1) the storage line SHALL be **`$0.00`**; the first non-zero storage line is
  **`$0.60`** at `10 GB`.

### Requirement: Live regions and announcements

The template SHALL expose each control's human value and announce the settled total once per change, without
double-announcing on every drag step.

#### Scenario: The debounced status

- **GIVEN** the default state
- **WHEN** 700 ms elapse after load
- **THEN** a `role="status"` `aria-live="polite"` node SHALL read `Estimated total $39.40 per month.`
- **AND** immediately after a change it SHALL still hold the **previous** sentence until 700 ms of quiet elapse (a
  test that reads it synchronously sees the old text — this is the debounce, not a bug)
- **AND** the node SHALL be visually hidden with the `1px + clip-path: inset(50%)` pattern, not `display: none`.

### Requirement: Responsive behaviour

The template SHALL collapse to one column at 860 and keep every control usable from 320 upward with no horizontal
overflow.

#### Scenario: The 861 seam

- **GIVEN** widths 860 and 861
- **WHEN** the document is measured at each
- **THEN** at **861** the body SHALL still be two columns (**829** wide, tracks **462.44 / 342.56**) and the document SHALL
  be **900**
- **AND** at **860** the body SHALL be one column, the document SHALL be **1181**, the bill SHALL move below the panel
  (`position: static`), the support row SHALL collapse from 2 to **1** line (**55.69**) and the fine print from 3 to
  **1** line (**19.38**).

#### Scenario: The narrow page

- **GIVEN** the page at 375, 360 and 320
- **WHEN** it is measured
- **THEN** the document SHALL be **1232 / 1251 / 1277** (the reference reads 1232 / 1251 / **1298** — the 320 delta is the
  support row's 4th line, see the copy decisions)
- **AND** `scrollX` SHALL stay **0** and `scrollWidth === clientWidth` at **every** width from 320 to 1440 (the reference
  has no overflow anywhere; any overflow is a port bug).

#### Scenario: The non-monotonic ladder

- **GIVEN** widths 600 → 520 → 480
- **WHEN** the document is measured
- **THEN** it SHALL be **1139 → 1131 → 1189** — the page **shrinks** 8 px while narrowing from 600 to 520 (the support row
  drops a line at 634 and the panel padding steps) and then **grows** 58 px at 480 (the lede's third line)
- **AND** a sweep that only checks `1440 · 1024 · 768 · 375` SHALL be considered incomplete.

### Requirement: Colour and contrast

The template SHALL reproduce the reference palette with exactly two corrections, each of which SHALL be a fixed token so
the value cannot drift with a theme.

#### Scenario: The text pairs

- **GIVEN** the palette as shipped
- **WHEN** contrast is computed
- **THEN** every text pair SHALL pass **4.5 : 1** — eyebrow `#2dd4bf` on the ground **10.12** and on the panel **9.32**;
  ink `#e2e8f0` **15.27 / 14.07**; muted `#a3b0c2` **8.56 / 7.88**; the title `#fff` **18.83**; the bill's `#475569`
  **7.24**; its `dt` `#334155` **9.90**; its `dd` `#0f172a` **17.06**; the CTA `#fff` on `#0f172a` **17.85** and on the
  hover `#134e4a` **9.48**.

#### Scenario: The two fixed boundaries

- **GIVEN** the two control tokens the port replaces
- **WHEN** contrast is computed against the `#111a2e` panel
- **THEN** the slider's resting track SHALL be **`#506890`** at **3.07 : 1** (the reference's `#2a3a57` is **1.52**)
- **AND** the support row's dashed border SHALL be **`#546c8f`** at **3.24 : 1** (the reference's `#33476b` is **1.86**)
- **AND** both values SHALL be declared as `@theme` tokens (`--color-track-rest`, `--color-check-line`), never inlined.

#### Scenario: State is never colour-only

- **GIVEN** the support row and the four breakdown lines
- **WHEN** a screen reader reads them
- **THEN** the checkbox SHALL expose its native checked state and a visible label, and each breakdown line SHALL read as
  `label + amount` (the 10 × 10 key is `aria-hidden`), so the **2.38 : 1** teal segment carries no unique information.

### Requirement: The port's non-goals

The template SHALL NOT reproduce the reference's host-neutralising CSS, its dead class rules or its source names.

#### Scenario: What must not be ported

- **GIVEN** the built app
- **WHEN** the stylesheet and the source are inspected
- **THEN** there SHALL be **no** `:where(html) … all: revert` firewall, **no** `[hidden]` re-assert, **no** `.cl-icon`
  rule, **no** `--cl-pricing06-*` custom property, **no** `prefers-color-scheme` branch (the page is dark-only)
- **AND** `grep -riE 'colorlib|pricing-table-06|parcelbase' apps/runrate` SHALL print **nothing** — provenance lives in
  this spec, `TEMPLATES.md` and the PR.

## Implementation notes for the port

- **One `useState` per control** (`callsIndex` 4, `storageIndex` 4, `support` false) and **everything else derived during
  render** — the two amounts, the total, the four `flex-grow`s, the two `--fill` percentages, the two pills and both
  `aria-valuetext`s. No effect writes derived state; the only effect is the 700 ms debounce (cleanup clears the timer).
- **The step tables are module constants** (`CALL_STEPS`, `STORAGE_STEPS`, `PRICES`), exported from a `pricing.ts` module
  so the tests can table-drive every row of the two ladders without touching the DOM.
- **Formatters as module-scope singletons** — `Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })`,
  `…{ notation: 'compact', maximumFractionDigits: 1 }` and `…{ }` for grouping. Three instances, created once; building
  them per keystroke is the classic slow path here.
- **`--fill` on the input's `style`**, not on the panel: the gradient lives in a pseudo-element, so a React prop cannot
  reach it any other way (`style={{ '--fill': `${pct}%` } as CSSProperties}` with a cast, or a
  `CSSProperties & Record<'--fill', string>` type).
- **`output` element**: `<output htmlFor="calls storage support">` — React spells the attribute `htmlFor` and renders
  `for=`, which is what the reference does; the `aria-live` is on the sibling status node, **not** on the output, so the
  total is not announced twice.
- **The bar** is four `<span>`s with `style={{ flexGrow: cost }}` — the `.35s` transition then animates the split exactly
  as the reference does (a `width` transition would jump at 0).
- **The dashed row's state** comes from `support` → `data-checked` + a `cn()` variant; no `:has()`.
- **Copy** is verbatim from the table in "What the port must change" — the five length-tuned strings are load-bearing and
  re-measuring them is a 30-second check, not a redesign.
- **Footer**: one Component Dock strip after the section, inside the same `#0b1120` ground (it must not introduce a third
  background).

## Verification checklist

- [ ] `apps/runrate` scaffolded from the simplest existing app, package `@free-react-templates/runrate`, CNAME
      `runrate.free.componentdock.com`, `"homepage"` = `https://runrate.free.componentdock.com`, `injectUiSource()` in
      `vite.config.ts`, `npm install` at the root so the lockfile registers the workspace
- [ ] `<title>Runrate — usage-based pricing</title>`, `theme-color: #0b1120`, description without the source's name
- [ ] DM Sans **400 / 600 / 700** only, via `css2?family=DM+Sans:wght@400;600;700&display=swap` (no 500: the archive ships
      a 500 binary the sheet never declares)
- [ ] `npm run verify:app runrate` green (typecheck + lint + 100 % coverage + build)
- [ ] 1440 × 900: document **900**, wrapper **1440 × 859.19**, section **1100 × 667.19** at (170, 96), panel
      **618.13 × 441.81**, bill **457.88 × 484.25** at (812.13, 278.94)
- [ ] head: eyebrow **20.14**, `h1` **49.67** (1 line), lede **51.13** (2 lines)
- [ ] fields **109.22** each at y 317.94 / 461.16; sliders **26** at y 370.23 / 513.45; hints **20.92**
- [ ] support row **77.38** (2 lines), box **20 × 20** at (226, 622.38), text **474.13 × 43.38**
- [ ] total **56.69** at y 336.63, `output` **161.05** for `$39.40`; bar **10** at y 411.31; breakdown **165.88**;
      CTA **49.25** at y 629.19; fine print **38.75** (2 lines)
- [ ] segments **249.92 / 89.97 / 53.98 / 0** at the defaults (`flex-grow` 25 / 9 / 5.4 / 0)
- [ ] both ladders reproduced row for row (calls 0…10, storage 0…11) plus the corner combos **$25.00 / $1,173.00 /
      $1,373.40 / $2,372.40 / $332.40**
- [ ] the status node announces `Estimated total $39.40 per month.` after **700 ms**, and holds the previous sentence
      before that
- [ ] 861 → 900 / 860 → **1181**, support row 2 → **1** line, fine print 3 → **1** line, bill goes `static`
- [ ] 320 → **1277**, 360 → **1251**, 375 → **1232**, 480 → **1189**, 520 → **1131**, 600 → **1139** (non-monotonic)
- [ ] `scrollX = 0` and `scrollWidth === clientWidth` at every width in 320 … 1440
- [ ] both fixed tokens present and passing: `#506890` **3.07**, `#546c8f` **3.24** on the panel
- [ ] no `all: revert`, no `.cl-icon`, no `--cl-pricing06-*`, no `:has(` dependency for the checked state
- [ ] footer links `https://www.componentdock.com/` as **Component Dock**
- [ ] `openspec validate template-runrate --type spec` → _is valid_
- [ ] `grep -riE 'colorlib|pricing-table-06|parcelbase' apps/runrate` → **0**
- [ ] bookkeeping: append the `TEMPLATES.md` row under `## Bootstrap Pricing Tables (12)` (after line 894), re-read the
      file **after** the rebase, `npm run readme:status`, `gh workflow run deploy-surge.yml -f app="runrate"`
