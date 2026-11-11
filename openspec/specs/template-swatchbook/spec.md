# Template: Swatchbook (Pricing table — a **marketplace service listing**: a gig page's header, seller row and hero photo on the left over a real eight-row `<table>` comparison, with a sticky tabbed package picker on the right that switches between three priced offers — the family's first variant whose prices live inside an interactive control)

## Purpose

**A gig page, not a plan grid.** This is the **eighth variant of the `pricing-table` snippet family** (12 variants), and it
is the first one built as a **marketplace listing**: the plan comparison is a genuine `<table>` inside the *listing* column,
while the thing that actually sells a package is a **sticky 400 px card** with a WAI-ARIA tablist and three panels. The
seven earlier variants either laid plans side by side (`ratecard`, `tallyboard`, `parity`, `limelight`), turned them into
rows (`perch`) or computed a price (`prorata`, `runrate`); **this one splits the job in two** — a dense comparison matrix
for the left brain and one "Continue $420" for the right — and it is the family's only variant with **true interactive
state** (three tabs, keyboard-navigable, one panel visible at a time).

The composition is marketplace-neutral, not coloured: an `#f7f7fb` grey ground, a white 14 px-radius table ringed by a
hairline `#e4e2ec` shadow, a violet `#5b21b6` accent used only for the selected tab, the meta icons, the contact link and
the CTA's hover fill, a warm `#fef3c7` / `#78350f` "Top rated" badge, and a gem-coloured avatar gradient. **One image, one
script, no form, no `<input>`, no `<nav>`, no footer.**

- **Source slug:** `pricing-table-08`
- **ColorLib page:** https://colorlib.com/wp/template/pricing-table-08/ — **HTTP 200, 114,516 B** (`curl -4`), `<title>`
  `Pricing Table V08 - Free Bootstrap Pricing Tables 2026 - Colorlib`, `h1` **"Pricing Table V08"**, `datePublished`
  **2026-09-25T15:12:53+00:00**, meta description _"A service listing in the style of a freelance marketplace, with the gig
  title, seller, rating and cover photo on the..."_ — **accurate**: the artefact really is a gig page with a package
  picker. **The design name the naming audit reads is ColorLib "Pricing Table V08".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/pricing-table-08/ — **HTTP 200,
  19,821 B**. The slug-only path `theme/pricing-table-08/` is **404 (9 B)** and `theme/bb/pricing-table-08/` is **404
  (9 B)**: the `bootstrap/` prefix is the only live path, as for every `card`, `alert`, `hero` and `pricing-table` variant
  before it. One stylesheet `css/style.css?v=34bc1d21` — **12,515 B**, sha256
  `6ab144816f5d414c79483a18041ffafdfcfc68b40783574d8c23cf5df128b0ae` — one script `js/snippet.js?v=64e2eac8` —
  **1,484 B**, sha256 `023007381acc0311ab0d2e6b8035aa3bbf5cfaa521cb7028888586bb207222a7` — and one image
  `images/cover.jpg` — **111,020 B** (`image/jpeg`, natural **900 × 560**). `index.html` is **200, 19,821 B**, the
  directory URL byte-for-byte, so a link to it is a no-op rather than a 404; `about.html` is **404 (9 B)** — this is a
  **single-page** snippet, not a multi-page theme.
- **Archive (verified twin):** https://preview.colorlib.com/downloads/free/pricing-table-08.zip — **HTTP 200,
  272,287 B**, containing `index.html` (**19,581 B**), `css/style.css` (**12,515 B**, hash-identical to the live copy),
  `js/snippet.js` (**1,484 B**, hash-identical), `images/cover.jpg` (**111,020 B**, hash-identical), `README.md`
  (1,278 B) and `fonts/` (**10 woff2**). **The `<body>` differs from the live one by exactly 48 B** — ` fetchpriority="high"
  decoding="sync"` on the `<img>` (37 B) plus the script's `?v=64e2eac8` (11 B); everything else is byte-identical. The
  live document is 19,821 B against the archive's 19,581 B: the remaining **192 B is `<head>` only** — two `noindex` metas,
  the `cdnjs.cloud` `dns-prefetch`, and the stylesheet's `?v=` — the same 192-byte delta as five of its siblings.
  Serving the archive over `python3 -m http.server` and diffing **every rect against the live page at 1440 × 1024 × 960 ×
  520 × 375** returned **0 differences** (63 rects per width), so the archive is a pixel twin, not an approximation.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-08.jpg — **HTTP 200, 52,898 B,
  1200 × 972**, and it is **AVIF behind a `.jpg`** again (`file` → `ISO Media, AVIF`; `PIL` opens it as 1200 × 972 RGB) —
  the eighth variant in nine. The shot is a **macOS browser mock-up** (traffic lights, a `preview.colorlib.com` URL pill,
  a rounded white window) showing the page at ≈0.9 of the window: the two-line gig title, the gradient avatar and
  "Top rated" badge, the swatch-book photo, **"Compare packages"** with the header band's `Basic $180 / Standard $420 /
  Premium $890`, and the right-hand card with `Standard` underlined in violet, `Brand Kit` + `$420`, two meta chips, a
  check list with one crossed-off line, and the ink "Continue $420" bar over a pale contact strip. Do **not** adopt the
  window frame, its rounded corners or its shadow.
- **Design category:** Pricing table (**marketplace gig listing — 8-row comparison `<table>` + sticky 3-tab package
  picker; no nav, no footer, no form, one image, one 47-line script, real interactive state**; variant **8 of 12** in the
  `pricing-table` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/swatchbook`, package
  `@free-react-templates/swatchbook`, CNAME `swatchbook.free.componentdock.com`.

**Name:** `swatchbook` — one lowercase word, no hyphen, **0 hits** as an identifier across the repo (`git grep -il
swatchbook origin/main` prints nothing), no `apps/swatchbook`, no `openspec/specs/template-swatchbook`, and no name in
`TEMPLATES.md` uses it. It is the object in the hero photo (a book of colour swatches) — the vocabulary of the *service
being sold*, not of the component (*pricing table*, *tabs*, *card*) — it pairs with the renamed studio below, and it is
**not** a ColorLib slug: `colorlib.com/wp/template/swatchbook/` → **404**, `preview.colorlib.com/theme/swatchbook/` →
**404**, and `preview.colorlib.com/theme/bootstrap/swatchbook/` → **404**.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` (2,926 rows, 0 `- [ ]`, 0 `[~]`), so this item comes from the **catalogue-gap queue** in
`docs/catalog-coverage.md`: 256 ColorLib-listed designs that the checklist never recorded — 42 stand-alone pages plus
**214 snippet variants in 19 families**. The `pricing-table` family is **8 of 12** prepped after this run (`ratecard` 01,
`tallyboard` 02, `parity` 03, `limelight` 04, `prorata` 05 and `runrate` 06 **shipped**; `perch` 07 and `swatchbook` 08
prepped and unbuilt), and only variants 01–06 have rows.

## Where the row goes once this ships (the prep must not add it)

The implementer appends the row under `## Bootstrap Pricing Tables (12)` (header at **line 891**, rows 01–06 at **893**,
**894**, **895**, **896**, **897** and **898**, `## Bootstrap Wizards (30)` at **900** as of `262793dff`) — grammar
`[colorlib] · ![preview] · [app]`, exactly as its six siblings:

```
- [x] **Pricing Table 08** — [colorlib](https://colorlib.com/wp/template/pricing-table-08/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-08.jpg) · [swatchbook](https://swatchbook.free.componentdock.com)
```

Variant 07's row is still absent (its prep carries the same instruction), so row order is decided by **when each app
ships**, not by the variant number. Re-read `TEMPLATES.md` **after every rebase** — a sibling has landed mid-prep in each
of the last eleven runs.

## Design tokens (read off `style.css`, 12,515 B, sha256 `6ab14481…`)

Four custom properties, **all on `.cl-pricing08`** (not `:root`), and every other colour a literal:

| Token                   | Value     | Where it lands                                                                          |
| ----------------------- | --------- | --------------------------------------------------------------------------------------- |
| `--cl-pricing08-accent` | `#5b21b6` | the selected tab's text + 3 px underline, the two meta icons, the contact link, CTA hover |
| `--cl-pricing08-ink`    | `#17151f` | the section's base text **and** the CTA's fill **and** its hover-adjacent chip's ground   |
| `--cl-pricing08-muted`  | `#5a5668` | the crumbs, the price sub-labels, every description, the unselected tab, the contact line |
| `--cl-pricing08-line`   | `#e4e2ec` | every divider: table cells, thead band, tab strip, card border, contact strip            |

Bespoke literals the sheet uses directly — **none of these is a Tailwind step, do not "regularise" them**:

| Value          | Where                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| `#f7f7fb`      | `body` ground (the demo wrapper paints nothing of its own — one ground only)               |
| `#faf9fd`      | the thead band, the **unselected** tab fill, and the contact strip                          |
| `#ffffff`      | the table card, the package card, and the **selected** tab fill                             |
| `#2c2838`      | the eight row labels (`tbody th`) — a second ink, 14.31 : 1 on white                        |
| `#047857`      | every "included" check in the table and in the panels (5.48 : 1)                            |
| `#8e8a9c`      | the `—` dash **and** the crossed-list glyph (3.35 : 1 — see the contrast fix)               |
| `#6f6b7e`      | the crossed-off list text (5.15 : 1)                                                        |
| `#fef3c7` / `#78350f` | the "Top rated" badge (8.15 : 1)                                                      |
| `#d97706`      | the rating star glyph                                                                       |
| `#7c3aed` → `#db2777` | the 48 px avatar's `linear-gradient(135deg, …)`                                       |
| `rgba(255,255,255,.16)` | the price chip inside the CTA (renders `#3c3a43` over the ink fill; white text 11.01 : 1) |
| `rgba(23,21,31,.35)` | the package card's `0 24px 50px -32px` drop shadow                                     |

**Radii:** **18** (package card) · **16** (cover photo) · **14** (the table card) · **12** (the CTA) · **6** (badge, price
chip) · **50 %** (avatar).
**Borders:** **1 px** everywhere (table cells, card, tab strip, contact strip) — no 1.5 px, no dashed rule.
**Shadows:** exactly **two** — the table's hairline ring `0 0 0 1px var(--line)` (the only thing that draws its edge,
because `border-collapse: collapse` cannot carry a radius) and the card's `0 24px 50px -32px rgba(23,21,31,.35)`. One
`linear-gradient` (the avatar). No `@keyframes`, no `filter`, no `text-shadow`, no `backdrop-filter`.
**Transitions:** two, both `.2s ease` — `color, background-color` on the tab and `background-color` on the CTA; both are
dropped under `prefers-reduced-motion: reduce`.

**Font:** **Figtree**, `system-ui` fallback, weights declared **400 / 500 / 700 / 800** — and **all four are used**: 400
(body, descriptions, items, contact), 500 (the `$180/$420/$890` sub-labels and the row labels), 700 (crumbs' strong,
seller name, badge, tabs, meta, CTA), 800 (h1, caption, panel names, prices).
⚠️ **The reference ships ONE variable binary under five names.** All five `-latin` files are **20,184 B with the same
sha256** (`8330490a…`) and all five `-latin-ext` files are **10,228 B with the same sha256**, so the eight `@font-face`
rules point at **two files**; the `-600-` pair is shipped and **never declared**. Worse, the *rendered* advances do not
match the real Figtree at those weights: "Top rated" at 12 / 700 measures **61 px** in the reference and **53 px** on
Google's `Figtree` v9, "Standard" at 14 / 700 **65 → 58**, the 36 / 800 headline **928 → 909** — see the font-drift
section, which is the single most important number in this prep.

**Type scale as shipped** (px, with the computed line-height): **36 / 41.4** (`h1`, `clamp(26px, 3.4vw, 36px)`, **800**,
`letter-spacing: -.025em`, `line-height: 1.15`, `text-wrap: balance`) · **30 / 46.5** (panel price, **800**, `-.03em`) ·
**20 / 31** (the caption, **800**) · **18 / 27.9** (panel name, **800**) · **15 / 23.25** (section base — tabs **700**,
CTA **700**, seller name **700**, avatar initials **700**) · **14.5 / 22.48** (panel description, list items) · **14 /
21.7** (crumbs' strong, rating, meta chips **700**, table cells, price chip **700**) · **13.5 / 20.92** (crumbs) · **12 /
18.6** (badge, **700**).

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium, `document.fonts.ready`, local archive served on 127.0.0.1)

Every figure below is a **rect from the served archive**, cross-checked against the live preview at 1440 × 900 — the two
agree to the hundredth at every measured element.

**At 1440 × 900** (`clamp` gives the wrapper `72px 16px`; `6vw` = 86.4 > 72):

| Element            | Rect (x, y, w, h)          | Notes                                                                    |
| ------------------ | -------------------------- | ------------------------------------------------------------------------ |
| wrapper            | `0, 0, 1440, 1307.58`      | `padding: clamp(32px, 6vw, 72px) 16px`, `background: #f7f7fb`             |
| section (grid)     | `140, 72, 1160, 1163.58`   | `grid-template-columns: 720px 400px`, `gap: 40`, `align-items: start`      |
| gig column         | `140, 72, 720, 1163.58`    | holds crumbs → title → seller → cover → table                             |
| crumbs             | `140, 72, 720, 20.92`      | 13.5 / 400 / `#5a5668`, `margin: 0`                                       |
| `h1`               | `140, 100.92, 720, 82.78`  | **two** lines of 41.4, `margin: 8px 0 18px`                               |
| seller row         | `140, 201.7, 720, 48`      | flex, `gap: 14`, `margin-bottom: 22`                                      |
| avatar             | `140, 201.7, 48, 48`       | 50 %, gradient `#7c3aed → #db2777`, 700 / 15 / `#fff`                      |
| name column        | `202, 202.23, 256, 23.25`  | 700 / 15; the badge sits **inside** this line                              |
| "Top rated" badge  | `317, 203.56, 77, 20.59`   | `1px 8px`, radius 6, `#fef3c7` / `#78350f`, 12 / 700                       |
| rating line        | `202, 227.48, 256, 21.69`  | 14 / 400 / `#5a5668`; star 16 × 16 at (202, 230.33), `#d97706`             |
| cover              | `140, 271.7, 720, 448`     | `aspect-ratio: 900 / 560`, radius 16, `object-fit: cover`                  |
| table              | `140, 751.7, 720, 483.88`  | `margin-top: 32`, white, radius 14, ring `0 0 0 1px #e4e2ec`               |
| caption            | `140, 751.7, 720, 43`      | 20 / 800, `line-height: 31`, `padding: 0 0 12`, left                       |
| thead row          | `—, 794.7, 720, 67.88`     | band `#faf9fd`, cells `12px 16px`, 14 / 700, centred                       |
| head cell widths   | `325.64 · 110.53 · 144.89 · 138.94` | the empty corner cell is a `<td>`, the three plans are `<th scope="col">` |
| 8 body rows        | `46.69 × 7, then 46.19`    | label left (500 / 14 / `#2c2838`), the three cells centred                 |
| package card       | `900, 72, 400, 568.56`     | `position: sticky; top: 24`, radius 18, white, 1 px `#e4e2ec`              |
| tab strip          | `901, 73, 398, 56.25`      | `grid-template-columns: repeat(3, minmax(0,1fr))` → **132.66 / 132.67 / 132.67** |
| tab (each)         | `901/1033.66/1166.33, 73, 132.67, 55.25` | `padding: 16px 8px`, 700 / 15, `+` inset divider                |
| selected underline | —                          | `::after` **3 px**, `#5b21b6`, `bottom: -1px`, full width                  |
| panel (visible)    | `901, 129.25, 398, 459.63` | `padding: 24px 24px 26px`                                                 |
| panel name         | `925, 167.25, 81, 27.89`   | 18 / 800                                                                  |
| panel price        | `1204.59, 153.25, 70.41, 46.5` | 30 / 800, right-aligned on the name's baseline                        |
| description        | `925, 207.75, 350, 44.94`  | 14.5 / 400 / `#5a5668`, **two** lines, `margin: 8px 0 16px`                |
| meta chips         | `925 / 1069, 268.69, 124 / 98, 21.69` | flex `gap: 8px 20px`, 14 / 700, icon 18 × 18 `#5b21b6`           |
| 6 list items       | `925, 306.38 + 30.47·n, 350, 30.47` | icon 16 × 16, `gap: 10`, `padding: 4px 0`, 14.5 / 22.48           |
| CTA                | `925, 511.19, 350, 51.69`  | `padding: 14px 18px`, radius 12, ink fill, 700 / 15, `gap: 10`             |
| price chip in CTA  | `1113, 525.19, 53, 23.69`  | `1px 8px`, radius 6, `rgba(255,255,255,.16)`, 14 / 700                    |
| contact strip      | `901, 588.88, 398, 50.69`  | `padding: 14px 24px`, `#faf9fd`, `border-top: 1px #e4e2ec`, centred        |
| footer (port only) | —                          | the repo strip; it is the only element below the reference's 1308 px page  |

**Sticky arithmetic (measured):** the card starts at `y = 72`; at `scrollY = 400` its top is `24`, and at the maximum
scroll (`1308 − 900 = 408`) it is **still `24`** — the page is only 408 px taller than the viewport, so the sticky
`top: 24px` **never unpins** in the reference. Do not "fix" the card to `static`; at 1024 the page is 1179 and the card
travels 255 px before it pins.

**The three tabs, measured at 1440** (the reference's own script, `select()` on init):

| State                       | Basic                    | Standard                 | Premium                  | Visible panel | Card height |
| --------------------------- | ------------------------ | ------------------------ | ------------------------ | ------------- | ----------- |
| initial (DOM)               | `aria-selected=false`    | `aria-selected=true`     | `aria-selected=false`    | Standard      | 568.56      |
| after `click` Basic         | `true`, `tabindex=0`     | `false`, `-1`            | `false`, `-1`            | Basic         | **568.56**  |
| after `click` Premium       | `false`, `-1`            | `false`, `-1`            | `true`, `0`              | Premium       | **568.56**  |
| `ArrowRight` on Premium     | `true` (wraps to index 0)| `false`, `-1`            | `false`, `-1`            | Basic         | **568.56**  |
| `Home`                      | `true`                   | `false`, `-1`            | `false`, `-1`            | Basic         | **568.56**  |

All three panels measure **459.63** tall (six list items each, all on one line), so **switching tabs never changes the
card's height** — a state change that is invisible in `docH` and only visible in the panel's text. Assert the panel
contents, not the card's height.

**Height sweep** (document height, archive, no scrollbar anywhere; `scrollWidth === clientWidth` at all 21 widths):

| width | 1440 | 1280 | 1160 | 1100 | 1024 | 1000 | 961 | 960 | 900 | 768 | 600 | 560 | 521 | 520 | 480 | 414 | 390 | 375 | 360 | 320 |
| ----- | ---: | ---: | ---: | ---: | ---: | ---: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: |
| `docH`| 1308 | 1308 | 1283 | 1238 | 1179 | 1160 | 1128 | **1956** | 1909 | 1805 | 1711 | 1681 | 1653 | **1593** | 1568 | 1549 | 1574 | 1585 | 1576 | 1749 |

Four steps are real and none is monotonic:

1. **960 is a cliff.** `@media (max-width: 960px)` turns the two-column grid into a **column flex**, so the card jumps
   above the table: `961 → 960` is **1128 → 1956** (**+828**) and the `h1` goes from **two** lines to **one** (the column
   is now 928 wide, not 720) — 82.78 → 37.53. Between 1000 and 961 the document *shrinks* as the left column narrows
   (1160 → 1128) while the `h1` is still two lines.
2. **520 is a table step, not a layout step.** `@media (max-width: 520px)` drops the cell padding to `10px 6px` and the
   cell font to 13 px: `521 → 520` is **1653 → 1593** (**−60**), and the first body row goes **46.69 → 41.14**.
3. **414 → 390 → 375 grows as the label column narrows.** "Colour palette and fonts" fits on one line at 414 (rows all
   41.14) and wraps at 390 (that row 61.28), and at 375 a second row ("Delivery") wraps too — `1549 → 1574 → 1585`.
4. **375 → 360 shrinks by 9**, because the cover photo (`aspect-ratio: 900/560`) loses 9.3 px of height faster than the
   wrapped rows gain; at **320** the `h1` takes **three** lines and the rating line wraps, so the document jumps to
   **1749** and the first body row to **61.28**.

**At 375 × 900** (the stacked face): crumb line **255** wide (not the full 343 — it is max-content), `h1` **343 × 59.78**
(two lines of 26/29.9), seller **318** (see the mechanism below), cover **343 × 213.42**, **card above table** — card
`16, 446.13, 343, 582.25`, table `16, 1060.38, 343, 492.83` — tabs **113.67** each, panel 451.63, CTA **305 × 51.69**.

⚠️ **Why the seller is 318 and not 343.** The desktop grid rule sets `align-items: start` on `.cl-pricing08`; the ≤ 960
rule only changes `display` to `flex`. So in the stacked column the **cross-axis is still `start`**, every child is
max-content, and only the elements that declare `width: 100%` — the table and the card — fill the column. The port must
reproduce this: `items-start` on the column flex, `w-full` on the table and the card, **no** `w-full` on the seller.

## The copy (verbatim — this is the fidelity contract)

Crumbs: `Graphics & Design › Logo & Brand Identity` (the `›` is U+203A, wrapped in `aria-hidden`).
Gig title: **`A brand identity and logo system for your new startup`**.
Seller: `Studio Halden` + badge **`Top rated`**; rating line **`4.9`** `(318 reviews) · 41 orders in queue` (U+00B7).
Cover: `alt="Colour swatch book and a tablet with hand-drawn palette sketches on a dark desk"`, `900 × 560`.

Comparison table — caption **`Compare packages`**, three `<th scope="col">` reading `Basic`/`$180`, `Standard`/`$420`,
`Premium`/`$890` (the price is a block inside the header cell, 500 weight), and eight `<th scope="row">` rows:

| # | Row label                    | Basic | Standard | Premium   |
| - | ---------------------------- | ----- | -------- | --------- |
| 1 | `Logo concepts`              | `2`   | `3`      | `4`       |
| 2 | `Revisions`                  | `2`   | `5`      | `Unlimited` |
| 3 | `Delivery`                   | `5 days` | `7 days` | `12 days` |
| 4 | `Vector source file`         | ✔     | ✔        | ✔         |
| 5 | `Colour palette and fonts`   | —     | ✔        | ✔         |
| 6 | `Social media kit`           | —     | ✔        | ✔         |
| 7 | `Brand guidelines`           | —     | —        | `16 pages` |
| 8 | `Business card and letterhead` | —   | —        | ✔         |

Each ✔ is a 16 × 16 inline `<svg>` (`stroke-width: 2`, `#047857`) followed by a visually-hidden `Included`; each `—` is a
`<span aria-hidden="true">—</span>` followed by a visually-hidden `Not included`. Every plan cell carries
`headers="cl-pricing08-col-<plan> cl-pricing08-row-<n>"`.

The package picker — `<h2>` **`Choose a package`** (visually hidden), tablist labelled `Packages`, three tabs and three
panels:

| Tab | Panel name | Price | Description | Meta | Items (in / off) |
| --- | ---------- | ----- | ----------- | ---- | ---------------- |
| `Basic` | **`Logo Starter`** | `$180` | `Two original logo concepts and the final files you need for web and print.` | `5-day delivery` · `2 revisions` | in: `2 logo concepts`, `Vector source file`, `Transparent PNG and SVG` · off: `Colour palette and fonts`, `Social media kit`, `Brand guidelines` |
| `Standard` ⟵ selected on load | **`Brand Kit`** | `$420` | `Three concepts plus a colour palette, type pairing and a ready-to-post social kit.` | `7-day delivery` · `5 revisions` | in: `3 logo concepts`, `Vector source file`, `Transparent PNG and SVG`, `Colour palette and fonts`, `Social media kit` · off: `Brand guidelines` |
| `Premium` | **`Full Identity`** | `$890` | `A complete identity system with a 16-page brand guide, stationery and launch assets.` | `12-day delivery` · `Unlimited revisions` | in: all six: `4 logo concepts`, `Vector source file`, `Transparent PNG and SVG`, `Colour palette and fonts`, `Social media kit`, `Brand guidelines` |

CTA in every panel: **`Continue`** + the price chip (`$180` / `$420` / `$890`); accessible name `Continue $420`.
Contact strip: `Need something custom?` + link **`Message Studio Halden`**.

## What the port must change (reference defects, and the copy it must not copy verbatim)

1. **Rename the studio.** `Studio Halden` is the reference's invented brand; the port ships **`Swatchbook Studio`** and
   the avatar initials become **`SS`** (the reference's `SH`). The contact link becomes `Message Swatchbook Studio`. Keep
   the gig title, the plan names and every number exactly.
2. **Do not port the 60-line `all: revert` firewall.** The sheet opens with a `:where(html)` block that resets ~60
   element names to `all: revert`, plus re-asserts for `[hidden]`, `img/svg`, `table`, `th`, `caption` and `hr` — e.g.
   `:where(html) :is(img, svg) { vertical-align: revert }` — a shield so the snippet survives a Bootstrap host. In a
   Tailwind tree preflight already owns that ground; copying the shield makes every utility lose.
3. **Do not port the dead `.cl-icon` rule** (`height: 1em; fill: currentColor`) — no element carries the class. Of the
   **77** rule blocks, the shield and this one are not the design.
4. **Fix exactly one contrast failure**: the `—` dash and the crossed-list glyph are `#8e8a9c` (**3.35 : 1** on white)
   while the text beside them is `#6f6b7e` (**5.15**). Ship **`#6f6b7e` for both**, so the "not included" state stops
   being the least legible thing on the page. Every other colour is kept byte-for-byte — in particular do **not** darken
   the `#e4e2ec` hairlines (1.28 : 1); they are the table's whole edge, and `border-collapse` gives no other way to draw
   it.
5. **Keep the ARIA tab pattern and make it real.** `role="tablist"` + three `role="tab"` buttons with
   `aria-controls`/`aria-selected`/`tabIndex`, three `role="tabpanel"` regions with `aria-labelledby` and `hidden`,
   arrow keys wrapping, `Home`/`End`. The reference's 47-line script does exactly this; the port reimplements it with
   `useState` — **this is the family's only design that needs component state**, so do not pretend it is static.
6. **Keep `href="#"` on all four links** (three CTAs + the contact link) — the reference's own choice and the family
   precedent (`limelight`, `perch`). Do **not** invent a form, a checkout or a modal.
7. **Keep the table's real semantics**: `<caption>`, `<th scope="col">` with the price as a block inside the cell, eight
   `<th scope="row">`, `headers` on every `td`, `aria-hidden` glyphs with visually-hidden text, and the empty corner as a
   `<td>` (not a `<th>` — it labels nothing).
8. **The cover becomes a placeholder.** `https://picsum.photos/seed/swatchbook-1/900/560` at the same intrinsic
   `900 × 560` with `aspect-ratio: 900 / 560`, radius 16 and a colour-swatch `alt`. Never copy `images/cover.jpg`.
9. **Keep `text-wrap: balance` on the `h1`.** It is what makes the two-line desktop split read as a sentence; it is a
   progressive enhancement (ignored by older engines), and removing it changes the wrap points.
10. **Add the Component Dock footer** — the reference has no `<footer>`. It is the only element the port appends, so
    every height assertion below is `reference + footer`.

## Requirements

### Requirement: The page shell

The template SHALL render one grey ground holding one 1160 px two-column section — a 720 px listing column and a 400 px
sticky package card, 40 px apart — with no nav, no hero band and no second page.

#### Scenario: The shell at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** the wrapper, the section and both columns are measured
- **THEN** the wrapper SHALL be **1440** wide with `padding: clamp(32px, 6vw, 72px) 16px` and `background: #f7f7fb`
- **AND** the section SHALL be **1160 × 1163.58** at **(140, 72)** with `max-width: 1160`, `margin: 0 auto`,
  `display: grid`, `grid-template-columns: 720px 400px`, `gap: 40`, `align-items: start`, 15 px / 23.25 and `#17151f`
- **AND** the listing column SHALL be **720** wide and the card **400 × 568.56** at **(900, 72)**
- **AND** the document SHALL be **1308** tall (1307.58 of content) so a 900 px viewport scrolls by **408**.

#### Scenario: Element census

- **GIVEN** the rendered page
- **WHEN** the structure is read
- **THEN** there SHALL be exactly **one** `h1`, **one** `h2` (the visually-hidden "Choose a package"), **three** `h3`
  (panel names), **one** `<table>` with **9** rows (**1** thead + **8** tbody), **3** `th[scope=col]`, **8**
  `th[scope=row]`, **25** `td`, **3** tabs, **3** tabpanels, **3** `<button>`, **4** `<a>`, **33** inline `<svg>`,
  **1** `<img>`, **1** `<script>`
- **AND** there SHALL be **no** `<form>`, `<input>`, `<select>`, `<textarea>`, `<nav>` or `<footer>` in the reference
- **AND** the shell SHALL be `main > section[aria-labelledby] > (div.gig, aside.box)`.

### Requirement: The gig header

The template SHALL open the listing with a breadcrumb line, a two-line balanced display headline, and a seller row made
of a gradient avatar, a name with a badge, and a rating line.

#### Scenario: Crumbs, headline and seller at 1440

- **GIVEN** the listing column at 1440
- **WHEN** its four blocks are measured
- **THEN** the crumbs SHALL be **720 × 20.92** at (140, 72) — 13.5 px / 400 / `#5a5668`, `margin: 0`, with the `›` in
  an `aria-hidden` span
- **AND** the `h1` SHALL be **720 × 82.78** at (140, 100.92) — **two** lines of 41.4 at 36 px / 800,
  `letter-spacing: -.025em`, `line-height: 1.15`, `margin: 8px 0 18px`, `text-wrap: balance`
- **AND** the seller row SHALL be **720 × 48** at (140, 201.7) — `display: flex`, `align-items: center`, `gap: 14`,
  `margin-bottom: 22`
- **AND** the avatar SHALL be **48 × 48** at (140, 201.7), `border-radius: 50%`,
  `background: linear-gradient(135deg, #7c3aed, #db2777)`, `#fff` at 700 / 15, and SHALL be `aria-hidden`
- **AND** the badge SHALL be **77 × 20.59** at (317, 203.56) — `1px 8px`, radius **6**, `#fef3c7` fill, `#78350f` text,
  12 px / 700 (its width is font-dependent: **69** with Google's Figtree, see the font-drift note)
- **AND** the rating line SHALL be **256 × 21.69** at (202, 227.48) — 14 px / 400 / `#5a5668`, the star a 16 × 16 glyph
  at (202, 230.33) in `#d97706`, the `4.9` a `<strong>` in ink.

#### Scenario: The cover

- **GIVEN** the cover image at any width
- **WHEN** it is measured
- **THEN** it SHALL be the column's full width at `aspect-ratio: 900 / 560` — **720 × 448** at 1440, **343 × 213.42** at
  375 — with `border-radius: 16`, `display: block` and `object-fit: cover`
- **AND** its placeholder SHALL carry an `alt` describing colour swatches (never the source's asset, never ColorLib).

### Requirement: The comparison table

The template SHALL render a real `<table>` with a caption, a tinted header band carrying the three prices, and eight
labelled rows whose cells are numbers, durations, check glyphs or dashes.

#### Scenario: The table at 1440

- **GIVEN** the table at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **720 × 483.88** at **(140, 751.7)** — `margin-top: 32`, `width: 100%`, `border-collapse:
  collapse`, white fill, radius **14**, `overflow: hidden`, and a hairline `box-shadow: 0 0 0 1px #e4e2ec` (the ring is
  the only edge: a collapsed table cannot carry a border radius)
- **AND** the caption SHALL be **720 × 43** at (140, 751.7) — 20 px / 800, `line-height: 31`, `padding: 0 0 12`,
  `caption-side: top`, left-aligned
- **AND** the header row SHALL be **67.88** tall on a `#faf9fd` band, its cells `12px 16px`, 14 px / 700, centred, with
  a 1 px `#e4e2ec` bottom rule
- **AND** the four columns SHALL measure **325.64 · 110.53 · 144.89 · 138.94** (auto layout — content-driven, *not*
  equal quarters; the 8 px drift under Google's Figtree is documented below)
- **AND** the eight body rows SHALL be **46.69** tall (**46.19** for the last, which loses its bottom rule) with
  `12px 16px` padding, 14 px, centred cells and a left-aligned 500-weight `#2c2838` row label.

#### Scenario: Included, not included, and a value

- **GIVEN** any body cell
- **WHEN** its content is read
- **THEN** a `✔` cell SHALL contain a 16 × 16 `<svg>` (`stroke: #047857`, `stroke-width: 2`, `aria-hidden`) **plus** a
  visually-hidden `Included`, so the cell's accessible text is `Included` rather than nothing
- **AND** a `—` cell SHALL contain `<span aria-hidden="true">—</span>` **plus** a visually-hidden `Not included`
- **AND** a value cell (`16 pages`, `Unlimited`, `12 days`) SHALL read as plain text with no glyph
- **AND** every cell SHALL carry `headers` naming its column and row.

#### Scenario: The last row loses its rule

- **GIVEN** the eighth body row
- **WHEN** its border is read
- **THEN** it SHALL be **0** (`tbody tr:last-child` clears the bottom rule) and SHALL measure **46.19** — 0.5 px
  shorter than its seven siblings.

### Requirement: The package card

The template SHALL place a 400 px sticky card beside the listing, made of a three-tab strip, one visible panel and a
contact strip, with the second package selected on load.

#### Scenario: The card at 1440

- **GIVEN** the card at 1440
- **WHEN** its parts are measured
- **THEN** it SHALL be **400 × 568.56** at **(900, 72)** — `position: sticky`, `top: 24`, `border: 1px solid #e4e2ec`,
  radius **18**, white, `overflow: hidden`, `box-shadow: 0 24px 50px -32px rgba(23,21,31,.35)`
- **AND** the tab strip SHALL be **398 × 56.25** — `display: grid`, `repeat(3, minmax(0,1fr))` → **132.66 / 132.67 /
  132.67**, with a 1 px bottom rule and a 1 px inset divider between tabs
- **AND** each tab SHALL be **55.25** tall, `padding: 16px 8px`, 15 px / 700, `#faf9fd` fill and `#5a5668` text when
  unselected, `#fff` fill and `#5b21b6` text when selected, plus a **3 px** `#5b21b6` `::after` bar at `bottom: -1px`
- **AND** the visible panel SHALL be **398 × 459.63** at (901, 129.25) with `padding: 24px 24px 26px`
- **AND** the name SHALL be 18 px / 800 and the price **30 px / 800** with `letter-spacing: -.03em`, on one baseline row
  (`display: flex; align-items: baseline; justify-content: space-between; gap: 12`)
- **AND** the description SHALL be 14.5 px / `#5a5668`, two lines at 350 wide, `margin: 8px 0 16px`
- **AND** the meta row SHALL be a wrapping flex with `gap: 8px 20px`, 14 px / 700, each chip 21.69 tall with an 18 × 18
  `#5b21b6` glyph and 6 px between glyph and label
- **AND** the six list items SHALL each be **30.47** tall (`padding: 4px 0`, `gap: 10`, 14.5 px), a 16 × 16 glyph, and
  the crossed-off ones in `#6f6b7e`
- **AND** the CTA SHALL be **350 × 51.69** — `padding: 14px 18px`, radius **12**, `#17151f` fill, `#fff`, 700 / 15,
  `gap: 10`, hover `#5b21b6` — containing a **53 × 23.69** price chip (`1px 8px`, radius 6, `rgba(255,255,255,.16)`)
- **AND** the contact strip SHALL be **398 × 50.69** — `padding: 14px 24px`, `#faf9fd`, `border-top: 1px #e4e2ec`,
  centred 14 px `#5a5668`, with the link in `#5b21b6` at 700 with a 3 px underline offset.

#### Scenario: Switching packages

- **GIVEN** the card with `Standard` selected
- **WHEN** a tab is clicked, or `ArrowLeft` / `ArrowRight` / `Home` / `End` is pressed on a focused tab
- **THEN** exactly one tab SHALL carry `aria-selected="true"` and `tabIndex={0}`; the others `false` and `-1`
- **AND** exactly one panel SHALL be visible (`hidden` removed) and the other two `hidden`
- **AND** the visible panel's name, price, description, meta pair, six items and CTA price SHALL be that tab's package
- **AND** the card's height SHALL be **568.56** in all three states (all panels are 459.63), so a height assertion cannot
  detect the switch — assert text or `hidden`.

#### Scenario: Focus

- **GIVEN** keyboard focus
- **WHEN** a tab or a panel is focused
- **THEN** it SHALL show `outline: 3px solid #5b21b6` at `outline-offset: -3px`
- **AND** the CTA SHALL show the same ring at `outline-offset: 3px`, and the contact link a **2 px** ring at `2px`.

### Requirement: Sticky behaviour

The card SHALL stay pinned 24 px from the top of the viewport for as long as the listing column is taller than the
viewport, and SHALL become static below 960 px.

#### Scenario: The pin

- **GIVEN** the page at 1440 × 900
- **WHEN** it is scrolled to 400 and then to the maximum 408
- **THEN** the card's viewport top SHALL be **24** at both positions (it starts at 72 and pins immediately)
- **AND** it SHALL never unpin in the reference — the page is only 408 px taller than the viewport — so a "the card
  scrolls away at the end" assertion is wrong
- **AND** at 1440 the card's bottom edge (640.56) SHALL stay above the fold.

### Requirement: Responsive behaviour

The template SHALL collapse to one column at **960 px** with the card **above** the table, and SHALL tighten the table
cells at **520 px**, matching the reference's ladder.

#### Scenario: The 960 px switch

- **GIVEN** widths 961 and 960
- **WHEN** the section, the card and the table are measured
- **THEN** at **961** the section SHALL be a two-column grid, the card **400 × 568.56** at x **545**, and the document
  **1128** tall
- **AND** at **960** it SHALL be `display: flex; flex-direction: column; gap: 0` with the gig wrapper `display: contents`,
  the card `position: static; order: 1; width: 100%; max-width: 560; margin: 24px auto 0` and the table `order: 2`
- **AND** the card SHALL therefore render **above** the table even though the table precedes it in the DOM
- **AND** the `h1` SHALL drop from **two** lines (82.78) to **one** (37.53) across that pixel and the document SHALL go
  **1128 → 1956**.

#### Scenario: The 520 px table step

- **GIVEN** widths 521 and 520
- **WHEN** a body cell is measured
- **THEN** at **521** its padding SHALL be `12px 16px` at 14 px and the document **1653**
- **AND** at **520** it SHALL be `10px 6px` at 13 px, the first body row **46.69 → 41.14**, the panel padding
  `24px 24px 26px → 20px 18px 22px`, and the document **1593**.

#### Scenario: The stacked card keeps `align-items: start`

- **GIVEN** any width ≤ 960
- **WHEN** the listing children are measured
- **THEN** the seller row SHALL be its max-content width — **318** at 375, **288** at 320 — and **not** the column width
- **AND** the table and the card SHALL each be **100 %** wide (343 at 375), because they declare `width: 100 %`
- **AND** the port SHALL reproduce this with `items-start` on the column flex and `w-full` on those two elements only.

#### Scenario: No overflow anywhere

- **GIVEN** any width from 320 to 1440
- **WHEN** the document is measured
- **THEN** `scrollX` SHALL stay **0** and `scrollWidth === clientWidth` (verified at all 21 sweep widths)
- **AND** the 320 case SHALL still fit: section **288**, table **288**, `h1` **three** lines, document **1749**.

### Requirement: Colour and contrast

The template SHALL ship the reference palette unchanged apart from the single "not included" fix, and SHALL declare the
four section tokens in `@theme`.

#### Scenario: The text pairs

- **GIVEN** the palette as shipped
- **WHEN** contrast is computed
- **THEN** ink `#17151f` SHALL be **18.05** on white and **16.89** on the ground; the row label `#2c2838` **14.31**;
  muted `#5a5668` **7.08** on white, **6.63** on the ground and **6.75** on the `#faf9fd` band; the accent `#5b21b6`
  **8.98** on white and **8.57** on the band; the badge `#78350f` on `#fef3c7` **8.15**; the green `#047857` **5.48**;
  the crossed-off text `#6f6b7e` **5.15**; the CTA's white on ink **18.05** and the chip's white on
  `rgba(255,255,255,.16)` **11.01**.

#### Scenario: The one failure the port fixes

- **GIVEN** the `—` dash and the crossed-list glyph
- **WHEN** contrast is computed against white
- **THEN** the reference's `#8e8a9c` SHALL measure **3.35 : 1** — below 4.5 for a 14–16 px glyph that is the *only*
  visual carrier of "not included"
- **AND** the port SHALL paint both in **`#6f6b7e`** (**5.15 : 1**), matching the text beside them.

#### Scenario: The decorative boundaries are left alone

- **GIVEN** the two hairline values the page uses
- **WHEN** contrast is computed against white
- **THEN** the `#e4e2ec` rules SHALL measure **1.28** and the `#faf9fd` band **1.05**
- **AND** the star glyph `#d97706` SHALL measure **2.98**
- **AND** all three SHALL be recorded as **decorative** (table rules are not UI components, the band is a tint, the star
  repeats the numeric rating) and SHALL **not** be darkened.

### Requirement: The Component Dock footer

The template SHALL end with the repo's standard footer strip linking `https://www.componentdock.com/` as "Component
Dock", and no app file SHALL mention ColorLib, the slug or the reference's studio name.

#### Scenario: Footer and provenance

- **GIVEN** the built app
- **WHEN** the page is inspected
- **THEN** a `<footer>` SHALL be the last element and SHALL carry exactly one outbound link,
  `https://www.componentdock.com/`, labelled **Component Dock**
- **AND** `grep -riE 'colorlib|pricing-table-08|studio halden|halden' apps/swatchbook` SHALL print **nothing** —
  provenance lives in this spec, `TEMPLATES.md` and the PR
- **AND** the footer SHALL be the only element below the reference's 1308 px page, so every height assertion is
  `1308 + footer` at desktop widths.

### Requirement: The port's non-goals

The template SHALL NOT reproduce the reference's host-neutralising CSS, its dead rules, its font binaries or its studio
name.

#### Scenario: What must not be ported

- **GIVEN** the built app
- **WHEN** the stylesheet and the source are inspected
- **THEN** there SHALL be **no** `:where(html) … all: revert` firewall, **no** `[hidden]` re-assert, **no** `.cl-icon`
  rule, **no** `--cl-pricing08-*` custom property, **no** `@font-face`, **no** `@keyframes`, **no** `prefers-color-scheme`
  branch (the page is light-only) and **no** copied `images/cover.jpg`
- **AND** the only state SHALL be the package tab (`useState`); there SHALL be **no** `useEffect`, context provider,
  observer, timer or `localStorage`.

## The font-drift note (read this before writing the checklist)

The port loads **Figtree from Google** (weights 400 / 500 / 700 / 800). The reference loads **one variable binary five
times** and its rendered advances are **not** Figtree's. Measured with `canvas.measureText` in each page's own font
context, at 1440:

| string (size / weight)                                   | reference | Google v9 | Δ      |
| -------------------------------------------------------- | --------: | --------: | -----: |
| `Top rated` (12 / 700)                                    |        61 |        53 | −13.1 % |
| `Standard` (14 / 700)                                     |        65 |        58 | −10.8 % |
| `Colour palette and fonts` (14 / 400)                      |       159 |       151 |  −5.0 % |
| `Continue` (15 / 700)                                      |        69 |        65 |  −5.8 % |
| `A brand identity and logo system for your new startup` (36 / 800) |  928 |   909 |  −2.1 % |
| `$420` (30 / 800)                                          |        74 |        74 |   0.0 % |
| `(318 reviews) · 41 orders in queue` (14 / 400)             |       209 |       211 |  +1.0 % |

Consequences, all measured on a replica built from the archive's own CSS + Google's `css2` link:

- **Heights survive.** `docH` is **identical** in 18 of the 21 sweep widths (1440 → 520, and 390 / 360).
- **Column boundaries move.** The four table columns are **329.22 · 110.77 · 138.45 · 141.56** instead of
  **325.64 · 110.53 · 144.89 · 138.94** — up to **8.28 px** — because `table-layout` is auto and the header text is the
  content. **Do not pin the columns**: a `<colgroup>` with the reference's percentages was measured and it reproduced
  **414** but broke **390** and **375** (−20 each) and **320** (−101); plain auto layout is the closer match.
- **The badge shrinks 8 px** (77 → 69), which shifts it left inside the seller line and nothing else.
- **Three mobile heights differ by one wrapped label**: at **414** the port is **1527** vs 1549, at **375** **1565** vs
  1585, at **320** **1668** vs 1749 — in each case a table label that takes two lines in the reference takes one (or
  vice-versa) because the label column is 7 px wider under Google's face. Assert **rows and block heights**, and quote
  both numbers at those three widths.
- **Never measure a string in one weight and call it the layout.** `Top rated` in a single `textContent` run fits; the
  badge is a 12 / 700 run inside a `1px 8px` box.

## Implementation notes for the port

- **Font**: `Figtree` 400 / 500 / 700 / 800 via
  `<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;700;800&display=swap">` — **200 with a
  modern UA** (woff2; the plain `curl` UA gets 4 `.ttf` faces and 868 B, which is the *same* family, so a `.ttf`
  response is not a dead font). No 600.
- **Tokens in `@theme`**: `--color-swatch-ground #f7f7fb`, `--color-swatch-band #faf9fd`, `--color-swatch-ink #17151f`,
  `--color-swatch-label #2c2838`, `--color-swatch-muted #5a5668`, `--color-swatch-line #e4e2ec`,
  `--color-swatch-accent #5b21b6`, `--color-swatch-ok #047857`, `--color-swatch-off #6f6b7e` (the fixed value, used for
  both the dash and the crossed glyph), `--color-swatch-badge #fef3c7`, `--color-swatch-badge-ink #78350f`,
  `--color-swatch-star #d97706`, `--color-swatch-avatar-a #7c3aed`, `--color-swatch-avatar-b #db2777`.
  Tailwind's `amber-100` (`#fef3c7`), `amber-900` (`#78350f`), `emerald-700` (`#047857`), `violet-600` (`#7c3aed`) and
  `pink-600` (`#db2777`) are **exact** — prefer those names as `@theme` aliases; `#5b21b6` is `violet-800`
  (`#5b21b6`) exactly, and `#17151f`, `#2c2838`, `#5a5668`, `#6f6b7e`, `#8e8a9c`, `#e4e2ec`, `#f7f7fb`, `#faf9fd` are not
  a Tailwind step.
- **Two data modules.** `src/data/packages.ts` — three entries with a tab label, panel name, price, description, a
  two-item meta pair and six include entries (label + on/off); and `src/data/compare.ts` — eight rows of label + three
  cells, each cell a discriminated union of text, yes or no. Deriving the panels from the table is tempting and **wrong**:
  the table's `16 pages` is a value where the panel says `Brand guidelines` is included — two different vocabularies for
  the same fact.
- **Icons**: `lucide-react` — `Clock` (18) and `RefreshCcw` (18) for the meta pair, `Check` (16) and `X` (16) for the
  include list, `Star` (16, filled) for the rating. The reference's SVG paths are a clock, a circular-arrow, a check
  and a cross, all `stroke: currentColor`.
- **Layout in Tailwind**: wrapper `min-h-screen bg-swatch-ground px-4 py-[clamp(32px,6vw,72px)]`; section
  `mx-auto grid max-w-[1160px] grid-cols-[minmax(0,1fr)_400px] items-start gap-10 max-[960px]:flex max-[960px]:flex-col
  max-[960px]:gap-0`; below 960 the gig wrapper is `max-[960px]:contents`, the card
  `max-[960px]:static max-[960px]:order-1 max-[960px]:mx-auto max-[960px]:mt-6 max-[960px]:w-full max-[960px]:max-w-[560px]`
  and the table `max-[960px]:order-2`.
- **The card's shadow and ring**: `shadow-[0_24px_50px_-32px_rgba(23,21,31,0.35)]` on the card, and the table needs
  `shadow-[0_0_0_1px_var(--color-swatch-line)] rounded-[14px] overflow-hidden` — a real `border` on a
  `border-collapse: collapse` table loses its corners and draws double interior rules.
- **Tab strip**: `grid grid-cols-3 border-b border-swatch-line` + `[&>*+*]:shadow-[inset_1px_0_var(--color-swatch-line)]`
  for the divider, each tab `px-2 py-4 text-[15px] font-bold font-[inherit] cursor-pointer` and the selected state driven
  by `aria-selected` (`[aria-selected=true]:bg-white [aria-selected=true]:text-swatch-accent` plus the 3 px `::after`
  bar, which is easiest as an absolutely-positioned `<span>` with `aria-hidden`).
- **Panel**: `px-6 pt-6 pb-[26px] max-[520px]:px-[18px] max-[520px]:pt-5 max-[520px]:pb-[22px]`, with `hidden` bound to
  the state — a `hidden` attribute, not `display:none`, so the UA default keeps it out of the a11y tree in every engine.
- **CTA height is 51.69** (`14 + 23.69 + 14`) and the chip is inline at `1px 8px`; do not `py-3` the pair into 52 — the
  measured row positions above are all keyed off 51.69.
- **Copy**: verbatim from the tables above except the studio (`Swatchbook Studio`, initials `SS`). Keep U+00B7 in the
  rating line, U+203A in the crumbs and the typographic characters exactly.
- **Tests**: the eight-row table with its three cell kinds, the four accessible link names (`Continue $180/420/890`,
  `Message Swatchbook Studio`), the tab pattern (initial Standard, click, `ArrowLeft`/`ArrowRight`/`Home`/`End`, wrap,
  `hidden` on the right panels), the six-item include list per package with `on: false` on the right ones, the badge and
  the rating line, the table's `headers` wiring and the screen-reader `Included`/`Not included` spans — none of them
  needs a browser; the rect ladder does.

## Verification checklist

- [ ] `apps/swatchbook` scaffolded from the simplest existing app, package `@free-react-templates/swatchbook`, CNAME
      `swatchbook.free.componentdock.com`, `"homepage"` = `https://swatchbook.free.componentdock.com`,
      `injectUiSource()` in `vite.config.ts`, `npm install` at the root so the lockfile registers the workspace
- [ ] `<title>Swatchbook — brand identity packages</title>`, `theme-color: #f7f7fb`, description without the source's
      name or studio
- [ ] Figtree **400 / 500 / 700 / 800** via `css2?family=Figtree:wght@400;500;700;800&display=swap` (no 600)
- [ ] `npm run verify:app swatchbook` green (typecheck + lint + 100 % coverage + build)
- [ ] 1440 × 900: section **1160 × 1163.58** at **(140, 72)**, columns **720 / 400** with a **40** gap, `h1`
      **720 × 82.78** (two lines), cover **720 × 448**, table **720 × 483.88** at y **751.7**, card **400 × 568.56** at
      **(900, 72)**
- [ ] table internals: caption **43**, header row **67.88** on `#faf9fd`, eight rows **46.69 × 7 + 46.19**, cells
      `12px 16px` at 14 px, columns within ±8.28 of **325.64 · 110.53 · 144.89 · 138.94** (auto layout, **not** pinned)
- [ ] card internals: tabs **56.25** (**132.66 × 3**), panel **398 × 459.63**, CTA **350 × 51.69** with a **53 × 23.69**
      chip, contact **398 × 50.69**
- [ ] document **1308** at 1440/1280; the card pins at top **24** when scrolled 400 and is still **24** at 408
- [ ] tabs: Standard selected on load; click/`ArrowRight`/`Home` switch `aria-selected`, `tabIndex`, `hidden`; the card's
      height stays **568.56** in all three states; the four accessible link names are exact
- [ ] badge **69–77** wide (font-dependent), `#fef3c7`/`#78350f`; avatar gradient `#7c3aed → #db2777`, initials **SS**
- [ ] 961 → 960: card **x 545 → centred 560**, order **0 → 1**, table order **2**, `h1` **82.78 → 37.53**, document
      **1128 → 1956**
- [ ] 521 → 520: cell padding **12px 16px → 10px 6px**, cell font **14 → 13**, first row **46.69 → 41.14**, panel padding
      **24 → 20/18/22**, document **1653 → 1593**
- [ ] ladder: 1160 → **1283**, 1100 → **1238**, 1024 → **1179**, 1000 → **1160**, 900 → **1909**, 768 → **1805**,
      600 → **1711**, 560 → **1681**, 480 → **1568**, 390 → **1574**, 360 → **1576**; at 414/375/320 the port is
      **1527 / 1565 / 1668** against the reference's **1549 / 1585 / 1749** (one wrapped label — quote both)
- [ ] `scrollX = 0` and `scrollWidth === clientWidth` at every width in 320 … 1440
- [ ] contrast: ink **18.05 / 16.89**, label **14.31**, muted **7.08 / 6.63**, accent **8.98**, badge **8.15**, green
      **5.48**, off text **5.15**; dash and crossed glyph **`#6f6b7e`, not `#8e8a9c`**
- [ ] no `all: revert`, no `.cl-icon`, no `--cl-pricing08-*`, no `@font-face`, no `@keyframes`, no `prefers-color-scheme`,
      no copied cover image
- [ ] state is `useState` for the tab only — no `useEffect`, no timers, no storage
- [ ] footer links `https://www.componentdock.com/` as **Component Dock**
- [ ] `openspec validate template-swatchbook --type spec` → _is valid_
- [ ] `grep -riE 'colorlib|pricing-table-08|halden' apps/swatchbook` → **0**
- [ ] bookkeeping: append the `TEMPLATES.md` row under `## Bootstrap Pricing Tables (12)` (after line **898**), re-read
      the file **after** the rebase, `npm run readme:status`, `gh workflow run deploy-surge.yml -f app="swatchbook"`
