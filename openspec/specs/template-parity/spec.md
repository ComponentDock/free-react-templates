# Template: Parity (Pricing table — a three-plan feature-comparison matrix on a white card over a cool grey ground: a left-aligned "Compare plans" head with two collapse-controls, a sticky bottom-aligned plan header whose middle column is tinted and tagged "Popular", and four collapsible `<tbody>` groups of 17 feature rows — tick / cross / value cells, no imagery, no form, no keyframes)

## Purpose

**One comparison table, nothing else** — the **third variant of the `pricing-table` snippet family** (12 variants) and
the family's first member that is **literally a `<table>`**: `<caption>`, `<colgroup>`, `<thead>`, four `<tbody>`s,
`scope="col" | "rowgroup" | "row"` and a `headers` attribute on **every** data cell. Where `ratecard` and
`tallyboard` are grids of plan cards, this one is a **matrix**: the plan header row is `position: sticky; top: 0`
inside a `table-layout: fixed` table, each group is a `<tbody>` whose rows are hidden/shown by a `<button
aria-expanded>` in its own `<th scope="rowgroup" colspan="4">`, and two "Expand all" / "Collapse all" buttons drive all
four groups. The whole behaviour is **44 lines** of plain JavaScript with **no jQuery, no framework, no build step**;
the stylesheet is **11,928 B** with **6 custom properties**, **2 media queries** (`max-width: 720px`,
`prefers-reduced-motion`) and **zero `@keyframes`**.

The design is a **white 20 px-radius card on the page ground `#f2f4f3`**, holding a left-aligned head (a 13 px teal
eyebrow, a 38 px `h1`, a one-line lede, then a 36.25 px toolbar of two 13.5 px ghost buttons), and a **1080 px table**
whose first column is **34 %** and whose other three split the rest into **237.59 / 237.59 / 237.63**. The middle
plan — *Team*, `$12` — is the featured one by **fill only**: its `<th>` and its nineteen cells carry a pale mint wash
(`#f0faf8` in the header, `#effaf8` in the body) and a **14 px top radius**, and a solid teal **"Popular"** pill sits
*inside* the header cell above the plan name. There is **no border, no offset, no lift, no lime/red/ink inversion** —
the family's three preceding "featured" devices (2 px + `-16px` in `ratecard`, fill-only in `tallyboard`) recur here
for the third time in a third shape.

- **Source slug:** `pricing-table-03`
- **ColorLib page:** https://colorlib.com/wp/template/pricing-table-03/ — **HTTP 200, 114,766 B**, `<title>`
  `Pricing Table V03 - Free Bootstrap Pricing Tables 2026 - Colorlib`, `h1` **"Pricing Table V03"**, `datePublished`
  **2026-09-25T15:12:43+00:00**, meta description _\"A plan comparison built as a real table with a caption, column and
  row headers, and headers attributes on every cell. Free download, no jQuery or plugins.\"_ — which describes this page
  exactly — and a download-size claim of **267 KB** (measured archive **273,052 B = 266.7 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Pricing Table V03".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/pricing-table-03/ — **HTTP 200,
  25,337 B**. The slug-only path `theme/pricing-table-03/` is **404 (9 B)** and `theme/bb/pricing-table-03/` is **404
  (9 B)**; the `bootstrap/` prefix is the only live path, exactly as for every `card`, `alert`, `hero` and
  `pricing-table` variant before it. One stylesheet: `css/style.css?v=02cb6fd2`, **11,928 B**, sha256
  `db284bc112b27f56523c5862fa153176e075d1fb046e6aa81d50c7ef2483b4fe`; one script: `js/snippet.js?v=a8409c87`,
  **1,334 B**, sha256 `960973d69eec205d78bf188f59008441c1381327eff5b4577686489ad34f5a45` (**44 lines**, IIFE, no jQuery).
  **Both files hash identical** to the copies inside `downloads/free/pricing-table-03.zip` (**273,052 B**) → *live
  preview verified; the archive is its un-versioned twin*. The archive's `index.html` (**25,134 B**, sha256
  `86f6197f6d02…`) differs from the live DOM (**25,337 B**, sha256 `f605a479baa3…`) by **203 B**: the live copy adds a
  `noindex` robots meta, a `cdnjs.cloud` `dns-prefetch`, `fetchpriority="high"` and **`?v=` query strings on both
  assets** — `diff -u` shows the `<body>` is byte-identical apart from the 11 B script query. (`diff` on a head slice
  lies; diff the whole file.)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-03.jpg — **HTTP 200, 25,409 B,
  1200 × 972**, and it is **AVIF behind a `.jpg` extension** (`file` → `ISO Media, AVIF`; `PIL` opens it and needs
  `.convert('RGB')` before you can look at it). Convert before viewing. `…-template.jpg`, `…-free-template.jpg` and
  `…-featured.jpg` are all **404 (146 B)**. The shot is a **macOS browser mock-up** (traffic lights, a
  `preview.colorlib.com` URL pill, a soft drop shadow on a grey surround) with the page inside at ≈ **1140 px**
  (scale ≈ **0.79** of 1440): the full head, the toolbar, the three plan headers, the tinted Team column, **two whole
  groups** (*Projects and tasks*, *Collaboration*) and the top of *Reporting* — the card is cut off mid-table, so the
  screenshot cannot tell you the total height or what *Security and admin* looks like. Do **not** adopt the window
  frame, the rounded window corners or the mock-up's shadow.
- **Design category:** Pricing table (**B2B project-management SaaS — a 3-plan × 17-feature comparison matrix with a
  sticky plan header, collapsible feature groups, a fill-only "Popular" column and no imagery at all**; variant **3 of
  12** in the `pricing-table` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/parity`, package
  `@free-react-templates/parity`, CNAME `parity.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows, **2,920** `[x]` rows — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1896 | items with NO spec on main: 0` (main `d7c78c0c0`, **3,334**
spec folders). So this design comes from `docs/catalog-coverage.md`, which lists **214 snippet variants in 19
families** that ColorLib's own listing carries and the checklist never recorded. The `pricing-table` family is
**family 4** in that document's order; its **first two** variants are prepped (`ratecard` `6211c30be`, `tallyboard`
`d7c78c0c0`, both still unbuilt — `ls apps/` has neither) and **this is the third**. `grep -c pricing-table
TEMPLATES.md` is **0**, so the section itself does not exist yet.

Family census (probed 2026-11-11 on variants **1, 2, 3, 6 and 12** under `theme/bootstrap/`): **all five are live,
HTTP 200** — **4,254 / 5,085 / 25,337 / 4,550 / 6,683 B**. This variant is **five times** the payload of either
predecessor and it is **not the same design at a different scale**: variants 1 and 2 are card grids, this one is a
`<table>` with four `<tbody>`s, 17 rows, sticky headers and two bulk controls. Read each variant's DOM from scratch and
never write another variant's slug into a spec's prose — the slug-coverage scan reads spec **contents** and would mark
that item prepped.

## Where the row goes once this ships (the prep must not add it)

`TEMPLATES.md` has **no** `## Bootstrap Pricing Tables` section yet — `grep -c 'Bootstrap Pricing Tables'
TEMPLATES.md` is **0** — because neither of the two prepped variants has shipped. `## Bootstrap Wizards (30)` is
**line 890** at `d7c78c0c0`. The bookkeeping commit should either **append to** `## Bootstrap Pricing Tables (12)` if
an implementer opened it first, or **create it immediately before `## Bootstrap Wizards (30)`** and add all three rows.
Row grammar verified against the file (`[colorlib] · ![preview] · [app]`):

```
- [x] **Pricing Table 03** — [colorlib](https://colorlib.com/wp/template/pricing-table-03/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-03.jpg) · [parity](https://parity.free.componentdock.com)
```

## Design tokens (read off `css/style.css`, 11,928 B, sha256 `db284bc1…`)

Six custom properties live on **one class**, `.cl-pricing03`, not on `:root`:

| Token | Value | Where it lands |
| --- | --- | --- |
| `--cl-pricing03-accent` | `#0f766e` | eyebrow, "Popular" pill fill, CTA border/text, filled CTA + its hover base, the tick circle, **every** focus ring |
| `--cl-pricing03-tint` | `#effaf8` | the featured column's **body** cells (`td.cl-pricing03__pop`) |
| `--cl-pricing03-ink` | `#0f1f1d` | card text, `h1`, plan names, prices, group titles |
| `--cl-pricing03-muted` | `#4a5a57` | lede, `__per`, the corner note, the feature count, `.cl-pricing03__all` idle text, the × glyph |
| `--cl-pricing03-line` | `#e1e7e5` | every 1 px rule: thead bottom, group-head bottom, each row's bottom, the two toolbar buttons' border |
| ground | `#f2f4f3` | `body` background — the only page ground (cool grey, 1.10 : 1 against the card) |
| card | `#fff` | the single card |
| header pop | `#f0faf8` | the featured `<th>`'s fill — **one shade off `--tint`**, see the seam note below |
| row hover | `#f7f9f8` | `tr:hover` on the three non-featured cells (the featured cell keeps `--tint`) |
| × glyph | `#8a9793` | `.cl-pricing03__ic--no` — **3.03 : 1 on white, 2.84 : 1 on the tint: the one colour the port must change** |
| CTA hover | `#115e59` | the filled (featured) CTA's hover fill |
| accent deep | `#0f766e` | (unchanged) the ghost CTAs fill with the accent on hover |

Radii: **20** (card), **16** (card at ≤720), **14 14 0 0** (featured header cell only — the body's tint column has
**square** bottom corners), **8** (both toolbar buttons, both CTA shapes, the group toggle's focus ring), **999**
(the pill). Borders: 1 px everywhere — `--line` on rules and the ghost buttons, `accent` on the outbound CTAs, **0** on
the two toolbar buttons' hover state and **0** on the tick circles (they are filled SVG). Shadow: exactly one, on the
card — `0 1px 2px rgba(15,31,29,.05), 0 20px 50px -30px rgba(15,31,29,.25)`. **Nothing else on the page has a
shadow.**

Font: **IBM Plex Sans**, `system-ui` fallback, weights **400 / 500 / 600 / 700**. The archive ships **8 woff2 files
that are 2 binaries**: `…-latin.woff2` **40,240 B** sha256 `056e4e2459f5…` and `…-latin-ext.woff2` **25,868 B** sha256
`ae1d854fefa1…`, each repeated **four** times (once per weight) — so the cut is **variable**, and a DOM A/B on the live
page proves the axis is live and **not monotone**: at 38 px the string `Analytics that respects` measures **390 (400) /
407 (500) / 403 (600) / 411 (700)** — **600 is narrower than 500**. Six `@font-face` would have sufficed; the sheet
declares eight.

Type scale as shipped: **38 / 43.7** (`h1`, `clamp(26px,3.6vw,38px)`, `-.02em`, `1.15`, 700) · **30 / 34.5** (price,
`-.03em`, `1.15`, 700) · **17 / 25.5** (plan name, 700) · **15 / 22.5** (section body, also the group title at 700) ·
**14.5 / 21.75** (row `th`, `#26332f`, 400) · **14 / 21** (row `td`, and the CTA label at 600) · **13.5 / 20.25** (both
toolbar buttons, 600) · **13 / 19.5** (eyebrow 700 `.06em` uppercase, lede's `__per`, the corner note, the feature
count) · **12.5 / 18.75** (row `td` at ≤720) · **11.5 / 17.25** (the pill, 700).

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium at 1440 × 900, `document.fonts.ready` + 400 ms)

| Reading | Reference (archive face) | Port (Google face, port copy) |
| --- | --- | --- |
| document height at 1440 × 900 | **1704** | **1704** |
| card | **1176 × 1544.44** at (132, 80) | identical |
| table | **1080 × 1260.5** at (180, 315.94) | identical |
| plan header row | **193.75** | **193.75** |
| feature row | **48.75** | **48.75** |
| "Popular" pill | **65.63 × 21.25** | **64.63 × 21.25** |
| featured CTA | **102 × 37** | **97 × 37** |
| "Expand all" / "Collapse all" | **97 × 36.25** / **105 × 36.25** | **97 / 105** |
| scroll range at 900 tall | **804** (1704 − 900) | **804** |

**Google-vs-archive drift, measured in-context on both pages** (in-flow `inline-block` spans inside
`.cl-pricing03__head`, `white-space: pre`, at 1440) — **it runs in both directions and it is size-dependent**:

| String | size / weight | archive | Google | Δ |
| --- | --- | ---: | ---: | ---: |
| `Every Parity feature, side by side` | 38 / 700 | 588 | 584 | **−0.68 %** |
| `Every Tallyboard feature, side by side` | 38 / 700 | 672 | 666 | −0.89 % |
| `$24` | 30 / 700 | 55 | 54 | −1.82 % |
| `Business` | 17 / 700 | 73 | 73 | 0 |
| `Two-factor authentication` | 14.5 / 400 | 175 | **177** | **+1.14 %** |
| `Task lists and boards` | 14.5 / 400 | 136 | **143** | **+5.15 %** |
| `Task lists and boards` | 13.5 / 400 | 126 | 130 | +3.17 % |
| `1-year retention` | 14 / 500 | 108 | 104 | −3.70 % |
| `Unlimited` | 12.5 / 400 | 56 | 57 | +1.79 % |
| `Prices in USD. Annual billing saves 16%.` | 13 / 400 | 232 | 234 | +0.86 % |
| `Expand all` | 13.5 / 600 | 67 | 67 | 0 |
| `Start trial` | 14 / 600 | 68 | **63** | **−7.35 %** |
| `Popular` | 11.5 / 700 | 46 | 45 | −2.17 % |
| the lede | 15 / 400 | 515 | 502 | −2.52 % |
| `5 features` | 13 / 400 | 63 | **59** | **−6.35 %** |
| `Security and admin` | 15 / 700 | 141 | 137 | −2.84 % |

**The trap that cost this run an hour:** Google's `css2` response for this family is **6 subsets × 4 weights = 24
`@font-face` blocks**, and every weight shares **one URL per subset**. Picking "the last one labelled latin" by eye
gives you the **cyrillic-ext** file (`unicode-range: U+0460-052F…`); the ASCII subset is the face whose `unicode-range`
starts **`U+0000-00FF`** (`…syxeKYY.woff2`, **45,712 B**). With the wrong file Chrome silently renders **DejaVu Sans**
for 26 of 34 glyphs and every measurement inflates by **+3 % … +20 %** in the wrong direction. Verify with
`CSS.getPlatformFontsForNode` (`postScriptName: IBMPlexSans-Regular, isCustomFont: true` and **no**
`DejaVu Sans` entry), never with `document.fonts.check()` — it answered `true` while the page was falling back.

## Design at 1440 × 900 (measured, reference = port)

```
body  #f2f4f3
main  .cl-pricing03-demo   1440 × 1704.44   padding: 80px 16px   (clamp(36px,6vw,80px) — 6vw hits the cap at 1334)
card  .cl-pricing03        1176 × 1544.44   at (132, 80)   padding: 48   radius: 20   bg #fff
  head  .cl-pricing03__head      1080 × 155.94  at (180, 128)   margin-bottom: 32
    eyebrow  "Compare plans"      19.5   at y 128     13/700, +.06em, #0f766e
    h1       38 px, 1 line        43.69  at y 155.5   margin: 8 0 8
    lede     15 px, 1 line        22.5   at y 207.19
    tools    two buttons          36.25  at y 247.69   margin-top: 18, gap: 8
      Expand all    97 × 36.25 at (180,   247.69)
      Collapse all 105 × 36.25 at (285,   247.69)     (8 px gap)
  table  .cl-pricing03__table   1080 × 1260.5  at (180, 315.94)
    thead row                     193.75
      corner td   367.19           note 13/400, max-width 200 → 2 lines, 39 tall, bottom-aligned
      th Basic    237.59  bg rgba(255,255,255,.96)
      th Team     237.59  bg #f0faf8, radius 14 14 0 0   ← popular
      th Business 237.63
    tbody 1  "Projects and tasks"  5 rows → 303.25  (59.5 group head + 5 × 48.75)
    tbody 2  "Collaboration"       4 rows → 254.5
    tbody 3  "Reporting"           4 rows → 254.5
    tbody 4  "Security and admin"  4 rows → 254.5
```

Inside the featured header cell, top to bottom: **pill** `64.63 × 21.25` at (798.78, 334.94) · **plan** `25.5` at
y 362.19 · **price** `34.5` at y 389.69 · **per** `19.5` at y 424.19 · **CTA** `97 × 37` at y 455.69; the cell's
own padding is `18 14 16` and its content is **bottom-aligned**, which is why the pill's line box (≈ 23.25, taller
than its 21.25 box) is what makes the row 193.75 and not 191.75.

Groups: the head row is **59.5** = a 58.5 button + the 1 px bottom rule. The button is `display: flex;
align-items: center; gap: 12; padding: 26px 14px 10px; font-size: 15; font-weight: 700`, its count sits 63 px to the
right of the title (`5 features` at x 343), and the 18 × 18 chevron is pushed right by `margin-left: auto` to x 1228.

Rows: `padding: 13px 14px`, `border-bottom: 1px var(--line)`, so **48.75** = 26 + 21.75 + 1 on a `th` row and 26 + 21 +
1 where a `td` is the tallest. The last column is **0.04 px** wider than its siblings (237.63 vs 237.59) because 34 %
of 1080 leaves a remainder — assert with a **±0.05** tolerance, never on equality.

## Cell grammar (17 rows, counted from the markup)

| Column | ticks | crosses | values | total |
| --- | ---: | ---: | ---: | ---: |
| Basic | 3 | 10 | 4 | 17 |
| Team (featured) | 7 | 5 | 5 | 17 |
| Business | 11 | 0 | 6 | 17 |
| **all three** | **21** | **15** | **15** | **51** |

Groups: *Projects and tasks* 5 rows, *Collaboration* 4, *Reporting* 4, *Security and admin* 4. Every tick and cross
carries a **visually hidden `Included` / `Not included`**, so the matrix is readable without colour (Team is the only
column with all three states on one page). Fifteen `<td>`s hold a `<span class="cl-pricing03__val">` at weight **500**:
`5`, `Unlimited` ×2, `3 per project`, `10`, `2 GB`, `100 GB`, `1 TB`, `Unlimited`, `1-year retention`, `Help centre`,
`Email, 24 h`, `Priority chat` and the two `Unlimited`s in *Security and admin*.

## Line boxes and their seams (port copy, measured with Google IBM Plex Sans)

- **`h1`**: 1 line at **≥ 444**, 2 lines at **≤ 443** (26 px, 29.89 line) — and it holds **2** lines all the way down
  to 320 (59.78). The reference's own headline (`Every Tallyboard feature, side by side`, 36 chars vs 31) flips at
  **500/499**; the five-character difference is worth **57 px** of viewport because the string sits 0.3 px from the
  444 px content edge at 505. Do not copy the archive's seam.
- **lede**: 1 line down to **561**, 2 at **560–321**, 3 at **320**.
- **corner note** (`Prices in USD. Annual billing saves 16%.`, `max-width: 200`, so it is the *box* that wraps, not
  the column): **2** lines at ≥ 414 and **3** at ≤ 400 in the port; the reference holds 2 down to 414 as well.
- **row `th`** (`Projects`, the first row): 1 line at **≥ 390**, 2 at **≤ 389** — the port's seam is **15 px wider**
  than the reference's (375/374) because `Projects` is short and the column crosses the 111 px content width late.
  **`Task lists and boards`** behaves the other way: 2 lines from **≤ 720** and 3 from **≤ 374** in the reference,
  2 from ≤ 720 and 3 from ≤ 389 in the port.
- **`1-year retention`** at 500 weight is the family's tightest fit: **111.23 px** of text in a **111.0 px** content
  box at 721, i.e. it wraps by **0.23 px** the moment the viewport drops one pixel — and it is the *only* row that
  grows at 721. Assert the row heights, not the copy.

## Height ladder (port, `document.scrollHeight` at a 900-tall viewport; reference in brackets where it differs)

| viewport | port | reference | notes |
| ---: | ---: | ---: | --- |
| 1440 | **1704** | 1704 | card at its 1080 content cap, pad 48 |
| 1280 | **1698** | 1698 | card still 1176 (max) |
| 1200 | **1688** | 1688 | card 1168, pad 48 |
| 1120 | **1672** | 1672 | pad now `4vw` = 44.8 |
| 1080 | **1664** | 1664 | pad 43.2 |
| 1000 | **1646** | 1646 | pad 40, `h1` 41.39 |
| 900 | **1622** | 1622 | pad 36 |
| 800 | **1598** | 1598 | pad 32 |
| 768 | **1590** | 1590 | pad 30.72 |
| 721 | **1579** | 1579 | last desktop step, pad 28.84, table 631.34 |
| **720** | **1347** | 1347 | **the mobile block**: pad `20 12`, radius 16, thead 96.75, rows 43.25, CTA + per **gone** |
| 700 | **1344** | 1344 | |
| 650 | **1338** | 1338 | |
| 600 | **1332** | 1332 | |
| 560 | **1349** | 1372 | lede goes to 2 lines |
| 520 | **1392** | 1372 | first value cells wrap |
| 506 | **1412** | — | |
| 500 | **1433** | 1392 | |
| 481 | **1433** | 1442 | |
| 480 | **1433** | 1442 | |
| 414 | **1598** | 1578 | `h1` 2 lines, note 3 lines |
| 400 | **1598** | 1598 | |
| 390 | **1598** | 1598 | rows mix 43.25 / 60.5 / 63.5 |
| 375 | **1633** | 1617 | |
| 360 | **1652** | 1652 | |
| 331 | **1692** | 1672 | |
| 320 | **1733** | 1732 | no horizontal scroll |

**Both directions are real:** the reference is **taller** than the port between 560 and 481 (its longer `h1` wraps
there and the port's does not) and **shorter** at 331 (its `Audit log` row does not reach a third line). Every number
in this table is the **port's**, measured with the port's own copy — re-measure, do not trust the archive.

## Requirements

### Requirement: The page shell and its single section

The template SHALL render one full-bleed `main` on the `#f2f4f3` ground holding exactly one `<section>` — a 1176 px
white card with a head, a toolbar, and one `<table>` — plus the port's Component Dock footer, and no other band.

#### Scenario: Shell, ground and card at 1440

- **GIVEN** the page at 1440 × 900
- **WHEN** it is measured after `document.fonts.ready`
- **THEN** `main` SHALL be **1440 × 1704.44** with `padding: 80px 16px` and `background: #f2f4f3`, and the document
  SHALL be **1704** tall **before** the port footer below
- **AND** the card SHALL be **1176 × 1544.44** at **(132, 80)** with `padding: 48`, `border-radius: 20`,
  `background: #fff`, `font-size: 15`, `line-height: 1.5`, `color: #0f1f1d`, and **one** shadow:
  `0 1px 2px rgba(15,31,29,.05), 0 20px 50px -30px rgba(15,31,29,.25)`.

#### Scenario: Structure census

- **GIVEN** the rendered document
- **WHEN** its elements are counted
- **THEN** there SHALL be **1** `<h1>`, **0** `<h2>`, **1** `<table>` with **1** `<caption>`, **1** `<colgroup>`,
  **4** `<tbody>`, **22** `<tr>`, **6** `<button>` (2 toolbar + 4 group toggles), **3** `<a>`, **40** `<svg>` (36
  cell icons + 4 chevrons), **36** visually-hidden `Included`/`Not included` labels, and **zero** `<img>`, `<form>`,
  `<input>`, `<h3>` and `<footer>` in the reference
- **AND** the port SHALL add **only** the Component Dock footer and no other element above it.

#### Scenario: The card is content-box, and the port must not inherit that accident

- **GIVEN** `max-width: 1080px` with `padding: 48` and no `box-sizing`
- **WHEN** the card is measured at 1440
- **THEN** the reference's **outer** width SHALL be **1176** and its content **1080**
- **AND** the port SHALL reproduce that with `max-width: calc(1080px + 2 * var(--pad))` under `border-box` — a plain
  `max-width: 1080px` in a Tailwind tree yields a **1080** card whose table is **984**, i.e. 48 px narrower on each
  side and every row 4.5 % tighter; the four `<col>` widths are percentages, so the error is invisible at 1440 until
  the `th` seams move.

### Requirement: The head and its two bulk controls

The template SHALL render a left-aligned head — eyebrow, `h1`, lede, then "Expand all" and "Collapse all" — as two
ghost buttons that set every group's expansion in one click.

#### Scenario: Head geometry at 1440

- **GIVEN** the head at 1440
- **WHEN** its children are measured
- **THEN** the head SHALL be **1080 × 155.94** at (180, 128) and its own `margin-bottom` SHALL be **32**
- **AND** the eyebrow SHALL be **19.5** tall at y 128 — 13 px/700, `letter-spacing: .06em`, uppercase, `#0f766e`
- **AND** the `h1` SHALL be **43.69** tall at y 155.5 (`margin: 8px 0 8px`), one line at 38 px/700, `-.76px`,
  `line-height: 1.15`
- **AND** the lede SHALL be **22.5** tall at y 207.19, 15 px/400 in `#4a5a57`, in **one** line.

#### Scenario: The toolbar buttons

- **GIVEN** the toolbar at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **1080 × 36.25** at y 247.69 with `margin-top: 18`, `display: flex`, `gap: 8`
- **AND** "Expand all" SHALL be **97 × 36.25** at (180, 247.69) and "Collapse all" **105 × 36.25** at (285, 247.69)
- **AND** each SHALL be 13.5 px/600 on white with `padding: 7px 14px`, a **1 px `#e1e7e5`** border, `border-radius: 8`,
  and no other decoration; hover SHALL swap the border and the label to `#0f766e`.

#### Scenario: Both buttons drive all four groups

- **GIVEN** four groups, all expanded at a fresh 1440 load
- **WHEN** "Collapse all" is clicked
- **THEN** all four toggles SHALL read `aria-expanded="false"`, every one of the 17 rows SHALL be hidden, the table
  SHALL be **431.75** tall and the document SHALL fall to **900** (the viewport floor — the content is now **875.69**,
  so the number to assert is the floor, not a sum)
- **AND** "Expand all" SHALL restore `aria-expanded="true"` on all four and the document to **1704**.

### Requirement: The plan header row is sticky and bottom-aligned

The template SHALL render one `<thead>` row of a corner `<td>` and three `<th scope="col">`, sticky at the top of the
viewport, vertically bottom-aligned, with the featured cell carrying a tint, a 14 px top radius and its "Popular" pill
inside it.

#### Scenario: Header geometry at 1440

- **GIVEN** the `<thead>` row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **193.75** tall with cells at **367.19 / 237.59 / 237.59 / 237.63** and `padding: 18px 14px
  16px`, `vertical-align: bottom`, `text-align: left`, `border-bottom: 1px #e1e7e5`
- **AND** every `<th>` and the corner `<td>` SHALL compute `position: sticky; top: 0` with
  `background: rgba(255,255,255,.96)` and `backdrop-filter: blur(6px)` (the blur only inside `@supports`)
- **AND** the corner cell SHALL hold `Prices in USD. Annual billing saves 16%.` at 13 px/400 in `#4a5a57`,
  `max-width: 200`, wrapping to **2** lines (39 tall) and hanging from the cell's bottom edge.

#### Scenario: The featured column's two devices

- **GIVEN** the Team column
- **WHEN** its header and body cells are sampled
- **THEN** the header cell SHALL be `#f0faf8` with `border-radius: 14px 14px 0 0` and its body cells `#effaf8`
- **AND** the pill SHALL be **64.63 × 21.25** at (798.78, 334.94) — inside the cell, 6 px above the plan name — filled
  `#0f766e` with 11.5 px/700 white text, `padding: 2px 9px`, `border-radius: 999px`
- **AND** there SHALL be **no** 1 px border, **no** negative margin, **no** shadow and **no** `transform` on the column
  (variant 1's 2 px ring and variant 2's offset flag are **not** part of this design).

#### Scenario: Sticky behaviour under scroll

- **GIVEN** a 1440 × 900 viewport (max scroll **804**)
- **WHEN** the page is scrolled to 200, 400 and 804
- **THEN** the header's top SHALL read **115.94** at 200 (still moving with the table), **0** at 400 and **0** at 804
- **AND** at max scroll the table's bottom edge SHALL still be at **772.44**, i.e. the header never unpins — a port
  that wraps the table in `overflow: auto` loses this and is not the reference.

### Requirement: Four collapsible feature groups

The template SHALL group the 17 feature rows into four `<tbody>`s, each headed by a `<th scope="rowgroup" colspan="4">`
containing a `<button aria-expanded>` that toggles exactly its own rows.

#### Scenario: Group anatomy

- **GIVEN** a group head at 1440
- **WHEN** it is measured
- **THEN** the group row SHALL be **59.5** tall (a **58.5** button plus the 1 px rule) with `padding: 26px 14px 10px`
  on the button, `gap: 12`, 15 px/700 text
- **AND** the count `5 features` / `4 features` SHALL sit **63** px wide at x **343** in 13 px/400 `#4a5a57`
- **AND** the chevron SHALL be **18 × 18** at x **1228**, coloured `#4a5a57`, and SHALL read
  `transform: rotate(-90deg)` (`matrix(0,-1,1,0,0,0)`) when collapsed with a **200 ms** transition.

#### Scenario: Collapsing one group

- **GIVEN** all four groups expanded
- **WHEN** the first toggle is clicked
- **THEN** `aria-expanded` SHALL become `"false"`, the group's **5** rows SHALL have `hidden` (computed `display:
  none`), its `<tbody>` SHALL be **59.5** tall, and the document SHALL fall from **1704** to **1461** (**−243**)
- **AND** collapsing group 2, 3 or 4 SHALL cost **−195** each, and the last one SHALL appear to cost **−171** because
  the document is already at the **900** floor.

#### Scenario: The mobile default is load-only

- **GIVEN** a fresh load at **390** (or any width ≤ 720)
- **WHEN** the script runs
- **THEN** only the **first** group SHALL be expanded and the document SHALL be **923**, the table **584.75**
- **AND** resizing a page that loaded at 1440 down to 390 SHALL leave **all four expanded** (the reference tests
  `matchMedia` once at init) — reproduce that, and do not add a resize listener unless the spec is re-measured.

### Requirement: A feature row

The template SHALL render each feature as a `<tr>` with a `<th scope="row">` and three data cells, each cell carrying a
`headers` attribute that names its group, its feature and its plan.

#### Scenario: Row geometry and colour

- **GIVEN** any feature row at 1440
- **WHEN** it is measured
- **THEN** the row SHALL be **48.75** tall with `padding: 13px 14px` on every cell and a 1 px `#e1e7e5` bottom rule
- **AND** the row `th` SHALL be 14.5 px/400 `#26332f` and the `td`s 14 px/400 in `#0f1f1d`, aligned `middle`
- **AND** on hover the `th` and the two plain `td`s SHALL be `#f7f9f8` while the featured `td` SHALL stay `#effaf8`
  (its own rule out-specifies the row hover — flattening the column on hover is a defect, not a simplification).

#### Scenario: The two glyphs

- **GIVEN** a cell in each state
- **WHEN** it is measured
- **THEN** a tick SHALL be a **20 × 20** SVG whose circle is filled `#0f766e` with a white 2 px check, and a cross a
  **20 × 20** SVG stroked `#8a9793` — **use `#6b7a76` instead** (4.50 : 1 on white, **4.22 : 1 on the tint**; the
  reference's `#8a9793` is **2.84 : 1** on the featured column and fails 1.4.11)
- **AND** every tick and cross SHALL be accompanied by a visually hidden `Included` / `Not included`, and each value
  cell SHALL put its number in a `<span>` at weight **500**.

#### Scenario: The `headers` wiring is part of the contract

- **GIVEN** the table's ids
- **WHEN** a data cell is inspected
- **THEN** it SHALL carry `headers` naming **three** ids — the group (`…-g1`), the feature (`…-f1`) and the plan
  (`…-basic`) — and each group `<th>` SHALL be `scope="rowgroup"` with `colspan="4"`
- **AND** the caption SHALL exist in the DOM, visually hidden, and name the three plans.

### Requirement: Hover, focus and motion

The template SHALL show a visible focus ring on every control, no focus ring on static rows, and no motion beyond two
200 ms transitions.

#### Scenario: Focus rings

- **GIVEN** keyboard focus on each control
- **WHEN** the outline is read
- **THEN** every button, toggle and CTA SHALL show a **3 px** solid `#0f766e` ring with `outline-offset: 2px`
- **AND** the group toggle's ring SHALL be **inset** (`outline-offset: -3px`) with `border-radius: 8`, because it is
  a full-width row and an outer ring would sit outside the card's padding
- **AND** every ring SHALL measure **5.47 : 1** on white and **5.13 : 1** on the tinted header (both pass).

#### Scenario: The motion budget

- **GIVEN** the page
- **WHEN** the stylesheet is scanned
- **THEN** there SHALL be exactly **3** transitions — the CTA's `background-color` and `color` (200 ms), the chevron's
  `transform` (200 ms) — and **zero** `@keyframes`, `@media (hover: hover)` blocks and scroll listeners
- **AND** `prefers-reduced-motion: reduce` SHALL drop the chevron's and the CTA's transitions to `none` and change
  nothing else.

### Requirement: The responsive step at 720

The template SHALL switch at **max-width: 720px** to a narrower card (padding `20px 12px`, radius 16), a 37 % first
column, smaller type, and a **default-collapsed** table — and it SHALL keep every value readable.

#### Scenario: 720 versus 721

- **GIVEN** the two widths one pixel apart
- **WHEN** both are measured
- **THEN** at **721** the card SHALL be **689** (pad 28.84), the table **631.34**, the first column **214.66**, the
  header **193.75**, rows **48.75**, the CTA **visible**, and the document **1579**
- **AND** at **720** the card SHALL be **688** (pad `20 12`), the table **664**, the first column **245.67**, the header
  **96.75**, rows **43.25**, both `__per` and `__cta` `display: none`, and the document **1347**
- **AND** the table SHALL therefore be **32.66 px WIDER** at the narrower viewport — the step is not monotonic, and a
  test that asserts "narrower means smaller" fails here.

#### Scenario: The mobile row ladder

- **GIVEN** the table at ≤ 720 with 12.5 px cells and `overflow-wrap: anywhere`
- **WHEN** the viewport shrinks
- **THEN** every row SHALL be **43.25** at 720–400, the table **1046**
- **AND** at **390** the rows SHALL split into **43.25 / 60.5 / 63.5** exactly as listed in the port's row table, the
  table **1259.75**, and the document **1598**
- **AND** at **320** nothing SHALL overflow: `body.scrollWidth === clientWidth === 320` and `window.scrollX` SHALL stay
  **0** after `scrollTo(300, 0)`.

### Requirement: Contrast, and the two fixes

The template SHALL meet WCAG 2.2 AA on every text pair and 1.4.11 on every non-text indicator, which means two
reference colours change.

#### Scenario: Text ratios measured 2026-11-11

- **GIVEN** the palette
- **WHEN** contrast is computed
- **THEN** ink `#0f1f1d` SHALL be **17.02** on white and **15.96** on the tint; muted `#4a5a57` **7.26 / 6.81 / 6.83**
  (white / tint / header tint); the accent **5.47 / 5.13**; white on the accent **5.47**; the row `th` `#26332f`
  **13.15 / 12.34**
- **AND** the pill (11.5 px white on `#0f766e`) SHALL be **5.47**, which passes for normal text at that size.

#### Scenario: The cross glyph fails on the featured column

- **GIVEN** `#8a9793` on `#effaf8`
- **WHEN** the ratio is computed
- **THEN** it SHALL read **2.84** (and **3.03** on white — the same glyph passes and fails inside one row)
- **AND** the port SHALL use **`#6b7a76`** (**4.22** on the tint, **4.50** on white, **4.25** on the hover fill) for
  the cross, so the same token is valid in all three backgrounds.

#### Scenario: The toolbar button has no boundary

- **GIVEN** `#e1e7e5` on white
- **WHEN** the ratio is computed
- **THEN** the two toolbar buttons' 1 px border SHALL read **1.25 : 1** — a control whose only boundary is invisible
- **AND** the port SHALL keep `#e1e7e5` for the **table rules** (decorative, rows are separated by content) and give
  the two buttons `#8a9793` (**3.03 : 1**), the AA threshold for a non-text boundary.

### Requirement: The Component Dock footer

The template SHALL end with one slim branded strip linking https://www.componentdock.com/ ("Component Dock"), because
the reference has no footer at all and the repo's rule 5 requires one.

#### Scenario: A minimal strip

- **GIVEN** the built page
- **WHEN** the footer is measured
- **THEN** it SHALL be a single line on the same `#f2f4f3` ground, 13 px/400 `#4a5a57`, with one anchor to
  `https://www.componentdock.com/`
- **AND** it SHALL add its own height to every number in the ladder (the ladder in this spec ends **above** the footer).

## Adapting to the repo (deltas — read before writing code)

1. **Drop the `:where(html) … { all: revert }` firewall** (lines 8–61, ~30 rules of Bootstrap neutralisation). It
   exists so the snippet can be pasted into a Bootstrap page; inside React + Tailwind preflight it fights the
   framework. Port the **computed values**, not the firewall. Keep the things it was standing in for: `th` left
   alignment (the sheet sets it explicitly on both kinds of header), `border-collapse: separate` (Tailwind preflight
   sets `collapse`, which kills the sticky cells' borders *and* the 14 px radius), and the visual-hidden `.cl-pricing03__vh`
   clip trick (preflight's `sr-only` is equivalent).
2. **The card is content-box in the reference.** `max-width: 1080` + `padding: 48` = **1176** outer. Use
   `--pad: clamp(24px, 4vw, 48px)`, `max-width: calc(1080px + 2 * var(--pad))`, `padding: var(--pad)` under
   `border-box`; at ≤ 720 `--pad` becomes `20px 12px` and the cap never binds (the card is viewport − 32).
3. **Load the ASCII subset, not "the latin-looking URL".** `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap`
   returns **24** `@font-face` blocks over **6** subsets, one URL per subset shared by all four weights (a variable
   cut). The ASCII file is the one whose `unicode-range` starts **`U+0000-00FF`** (**45,712 B**); `…TKYbABA.woff2` is
   **cyrillic-ext** and silently gives you DejaVu Sans. Verify with `CSS.getPlatformFontsForNode`, **not**
   `document.fonts.check()` (it lies).
4. **Google-vs-archive drift is ±5 % and bidirectional** (table above): the CTA label is **7.35 % narrower**, `Task
   lists and boards` **5.15 % wider**, `5 features` **6.35 % narrower**. Consequence: the featured CTA is **97** wide
   instead of 102, the pill **64.63** instead of 65.63, and both `th` seams move (see the seam section). Every number
   in the ladder and the checklist is the **port's**; the reference column is context only.
5. **`table-layout: fixed` + `<colgroup>` is the whole layout.** Column 1 is `34%`, the other three share the rest; do
   not replace this with a CSS grid — the sticky `<thead>`, the equal row heights, the `headers` wiring and the
   "feature column hugs its content" behaviour all come from the table algorithm. Keep the `<caption>`, `scope` and
   `headers` attributes (the reference is unusually correct here, and the tests should assert the ids).
6. **`hidden` on a `<tr>` is the mechanism.** React renders `hidden={!open}`; do **not** swap in `display: none` via a
   class *and* `hidden`, and do **not** unmount the rows (the reference keeps them in the DOM and toggles `hidden`).
7. **The reference's `hidden` re-assertion rule** (`[hidden] { display: none }` at the weight of one class) exists only
   because of the `all: revert` firewall — preflight already does it. Drop it with the firewall.
8. **The CTA keyboard story is the reference's weakest point.** Both `__per` and `__cta` are `display: none` at
   ≤ 720, so the mobile page has **three plan prices and no way to sign up**. Fix it: keep the plan name + price as the
   header and render a **compact full-width CTA per plan below the table** at ≤ 720 (or keep a 32 px icon-only CTA in
   the header cell). Any such addition is a **deliberate delta** — say so in the PR and re-measure the mobile ladder.
9. **Replace the three dead `href="#"` CTAs** with real destinations
   (`https://www.componentdock.com/`, house pattern) or `<button type="button">`. Never ship `href="#"`.
10. **The "16 % annual" claim has no toggle.** The plan prices are monthly and there is no billing switch on this
    variant, so the note is a promise the UI cannot keep. Either keep the note **without** the percentage or make it
    `Prices in USD, per user, billed monthly.` — do not invent a switch (that is `tallyboard`'s device, not this one).
11. **Add `aria-controls`.** The reference's toggles carry `aria-expanded` but no `aria-controls`; give each `<tbody>`
    an `id` and point at it. Keep the accessible name as the group title ("Projects and tasks") — the count is part of
    the name in the reference and adds nothing for a screen reader, so either keep it or `aria-hidden` the count.
12. **The group-toggle ring is inset** (`outline-offset: -3px`), the button's ring is not (`2px`), the CTAs' is not.
    Carry both.
13. **State lives in React**: `Record<GroupId, boolean>` → `hidden` on each row, `aria-expanded` on each toggle, and
    two bulk setters. No `matchMedia` in a `useEffect` **plus** a resize listener — the reference is load-only; read it
    once at mount and document it.
14. **Sticky + `backdrop-filter`**: the header cells are `rgba(255,255,255,.96)` so rows bleed through 4 %. Keep that,
    but keep the `@supports (backdrop-filter: blur(6px))` guard too — without the blur the 0.96 alpha reads as a
    smudge.
15. **Pick one tint.** The header cell is `#f0faf8` and the body cells `#effaf8`; the 1-value seam is visible as a
    faint step at the header/body boundary in the screenshot. Either keep both (faithful) or use `#effaf8` for both
    (cleaner) — but state which, and make the contrast assertions match.
16. **Copy**: the reference's own copy says **"Tallyboard"**, which is the *app name of the previous variant in this
    family*. Do not ship that string: the port's product is **Parity** (`Every Parity feature, side by side`), and no
    app file may contain `ColorLib`, `pricing-table-03` or `Tallyboard`.
17. **No imagery**: zero `<img>`, zero `picsum`, no icon library — the tick, the cross and the chevron are 3 inline
    SVGs. `lucide-react`'s `Check`/`X`/`ChevronDown` at `size={18..20}` reproduce them, but the tick is a **filled
    circle with a white check**, which is not a lucide glyph; draw it as a 20 × 20 `<svg>` (`circle r=10` + a
    2 px white path) or as a `::before` with the same geometry.
18. **Metadata**: `<title>` must not name the source. Use a Parity title + description, `theme-color: #f2f4f3`.

## Verification checklist

- [ ] `apps/parity` exists, package `@free-react-templates/parity`, `public/CNAME` = `parity.free.componentdock.com`,
      `"homepage"` = `https://parity.free.componentdock.com`
- [ ] `npm run verify:app parity` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-parity --type spec` is valid
- [ ] no source string survives: `grep -riE 'colorlib|pricing-table-03|tallyboard' apps/parity` → 0 hits
- [ ] measured at 1440 × 900: `main` **1440 × 1704.44** (`padding: 80 16`); card **1176 × 1544.44** at (132, 80);
      head **1080 × 155.94** at (180, 128); eyebrow **19.5**; `h1` **43.69** (1 line, 38/700); lede **22.5**;
      toolbar **36.25** at y 247.69 with buttons **97 / 105** wide; table **1080 × 1260.5** at (180, 315.94);
      thead row **193.75**; columns **367.19 / 237.59 / 237.59 / 237.63** (±0.05); pill **64.63 × 21.25** at
      (798.78, 334.94); plan **25.5** @ 362.19; price **34.5** @ 389.69; per **19.5** @ 424.19; CTA **97 × 37** @
      455.69; group 1 **303.25** at y 509.69; toggle **58.5**; rows **48.75**; groups **303.25 / 254.5 / 254.5 /
      254.5**
- [ ] structure: **1** `h1`, **0** `h2`, **1** table with caption + 4 `tbody` + 22 `tr`, **6** buttons, **3**
      anchors, **40** svg, **36** hidden `Included`/`Not included`, **0** `img` / `form` / `input`
- [ ] cell grammar: **21** ticks, **15** crosses, **15** value cells; Basic **3 ✓ / 10 × / 4 v**, Team **7 / 5 / 5**,
      Business **11 / 0 / 6**
- [ ] behaviours: group 1 collapse → document **1461** (−243) with `display: none` on 5 rows and the chevron at
      `matrix(0,-1,1,0,0,0)`; groups 2–4 → **−195** each; collapse-all → **900** (floor) with table **431.75**;
      expand-all → **1704**; fresh load at 390 → only group 1 open, document **923**, table **584.75**; resize
      1440 → 390 keeps all four open
- [ ] sticky: header `top: 0` at scrollY ≥ 316 and still pinned at max scroll **804** (table bottom **772.44**)
- [ ] height ladder (port): **1704** at 1440 · **1698** at 1280 · **1688** at 1200 · **1672** at 1120 · **1664** at
      1080 · **1646** at 1000 · **1622** at 900 · **1598** at 800 · **1590** at 768 · **1579** at 721 · **1347** at
      720 · **1344** at 700 · **1338** at 650 · **1332** at 600 · **1349** at 560 · **1392** at 520 · **1433** at
      500 / 481 / 480 · **1598** at 414 / 400 / 390 · **1633** at 375 · **1652** at 360 · **1692** at 331 · **1733**
      at 320 (each **+** the port footer's height)
- [ ] `h1` line ladder: **1** line at ≥ 444, **2** at ≤ 443 down to 320; lede **2** lines at ≤ 560, **3** at 320;
      corner note **2** lines at ≥ 414, **3** at ≤ 400
- [ ] the 721 → 720 inversion: table **631.34 → 664** (+32.66), header **193.75 → 96.75**, rows **48.75 → 43.25**,
      `__per` and `__cta` `display: none` at 720 and visible at 721
- [ ] mobile row split at 390: **43.25 / 63.5 / 60.5** per the row table, table **1259.75**, document **1598**
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at 320, 331, 360, 375, 390, 400, 414, 480, 500, 506, 520, 560,
      600, 650, 700, 720, 721, 768, 800, 900, 1000, 1080, 1120, 1200, 1280, 1440
- [ ] hover: row `#f7f9f8` on `th` and the two plain cells, featured cell stays `#effaf8`; toolbar hover swaps border
      + label to `#0f766e`; featured CTA hover `#115e59`
- [ ] focus: 3 px `#0f766e` at +2 px on buttons / CTAs, at **−3 px** on the group toggle; no ring on rows
- [ ] `prefers-reduced-motion: reduce` → 3 transitions dropped, zero `@keyframes` anywhere
- [ ] contrast asserted in a test: ink **17.02 / 15.96**, muted **7.26 / 6.81 / 6.83**, accent **5.47 / 5.13**,
      white-on-accent **5.47**, row `th` **13.15 / 12.34**, **cross 4.22** on the tint (the fixed `#6b7a76`),
      **button border 3.03** (the fixed `#8a9793`)
- [ ] a11y shape: one `h1`; `aria-labelledby` on the section; caption present; `scope` + `headers` on every cell;
      `aria-expanded` **and** `aria-controls` on the four toggles; hidden labels on every tick/cross; three resolving
      CTAs (no `href="#"`); a mobile CTA path that exists
- [ ] footer strip links `https://www.componentdock.com/`; no app file mentions ColorLib, Tallyboard or the slug
- [ ] bookkeeping: `npm run readme:status`, then the `TEMPLATES.md` row under `## Bootstrap Pricing Tables (12)`
      (create the section before `## Bootstrap Wizards (30)`, line 890, if no sibling shipped first) and
      `gh workflow run deploy-surge.yml -f app="parity"`
