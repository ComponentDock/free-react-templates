# Template: Perch (Pricing table — a warm-cream coworking **membership rate list**: four full-width rows instead of a plan grid, each row a four-track line — icon tile + name/description, a wrapped strip of feature chips, a right-aligned price with its period beneath, and a pill CTA — with the third row inverted to ink, flagged "Most chosen" and carrying the only filled button on the page)

## Purpose

**A price list you read down, not across.** This is the **seventh variant of the `pricing-table` snippet family** (12
variants) and the family's **first row-based** one. `ratecard`, `tallyboard`, `parity`, `limelight` and `prorata`/`runrate`
all arrange plans in **columns** (a grid of cards, a real `<table>`, or a two-panel calculator). This one turns the grid
90°: each plan is one **full-width `<li>`** carrying four aligned tracks, so the eye compares prices by scanning a single
right-hand column. It exists to prove the family can compare **four** plans where the column layouts ran out of width.

The composition is warm and editorial, not chrome-y: a `#f4efe6` cream ground, a `#fffcf7` card per row with a hairline
`#e2d8c9` border at an 18 px radius, one **inverted** ink row as the featured plan, a magenta `#9d174d` accent used only
for the eyebrow and the icon glyphs, and a pink `#fbcfe8` flag + CTA pair on that one row. **There is no JavaScript at
all** — no script tag, no `<form>`, no `<input>`, no `<button>`; the only behaviour on the page is CSS hover/focus.

- **Source slug:** `pricing-table-07`
- **ColorLib page:** https://colorlib.com/wp/template/pricing-table-07/ — **HTTP 200, 114,143 B** (`curl -4`), `<title>`
  `Pricing Table V07 - Free Bootstrap Pricing Tables 2026 - Colorlib`, `h1` **"Pricing Table V07"**, `datePublished`
  **2026-09-25T15:12:51+00:00**, meta description _\"Coworking memberships laid out as full-width rows instead of columns.
  Free download, no jQuery or plugins.\"_ — **accurate**: the artefact really is a row-based pricing list.
  **The design name the naming audit reads is ColorLib "Pricing Table V07".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/pricing-table-07/ — **HTTP 200,
  5,648 B**. The slug-only path `theme/pricing-table-07/` is **404 (9 B)** and `theme/bb/pricing-table-07/` is **404
  (9 B)**: the `bootstrap/` prefix is the only live path, as for every `card`, `alert`, `hero` and `pricing-table`
  variant before it. One stylesheet `css/style.css?v=00f3ebca` — **9,999 B**, sha256
  `a26cf535481b9968cc694ab3770e3decc45e6416f0ea2259381df9403528447d` — and **no script**: the document references none,
  and `js/snippet.js` under the same directory is **404 (9 B)**. The stylesheet is the page's own (the preview host
  injects nothing beyond two `noindex` metas and a `cdnjs.cloud` `dns-prefetch`).
- **Archive (verified twin):** https://preview.colorlib.com/downloads/free/pricing-table-07.zip — **HTTP 200,
  194,804 B**, containing `index.html` (**5,456 B**), `css/style.css` (**9,999 B**, hash-identical to the live copy),
  `README.md` (1,278 B) and `fonts/` (8 woff2). **The `<body>` is byte-identical to the live page** (5,203 B each); the
  whole 5,648 → 5,456 B delta (**192 B**) is `<head>` only — two `noindex` metas, the `cdnjs.cloud` `dns-prefetch`,
  `fetchpriority="high"` and the `?v=` query on the stylesheet — the same 192-byte delta as four of its siblings.
  Verified by serving the archive over `python3 -m http.server` and diffing **every rect against the live page at
  1440 × 900** — identical to the hundredth (see the reference readings).
  ⚠️ The archive `README.md` advertises **`js/snippet.js` and `images/` — neither exists** in the zip and neither exists
  on the page (no `<script>`, no `<img>`): the eighth variant in a row with phantom file lines. It also ships a
  **500 weight the sheet never declares** (see the font note).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-07.jpg — **HTTP 200, 31,747 B,
  1200 × 972**, and it is **AVIF behind a `.jpg`** again (`file` → `ISO Media, AVIF`; `PIL` opens it as 1200 × 972 RGB) —
  the seventh variant in eight. The shot is a **macOS browser mock-up** (traffic lights, a `preview.colorlib.com` URL
  pill, a rounded window with a drop shadow) showing the whole page at ≈0.9 of the window: the magenta eyebrow, the huge
  "Memberships" word, the two-line lede parked to the **right** on the same baseline, the four cream rows, the third row
  in ink with its pink "Most chosen" pill straddling its top edge, the pink filled "Join", and the single grey footnote.
  Do **not** adopt the window frame, its rounded corners or its shadow.
- **Design category:** Pricing table (**row-based membership / rate list — four full-width rows, no plan grid, no
  comparison table, no billing toggle, no calculator, no imagery, no nav, no footer, no JavaScript**; variant **7 of 12**
  in the `pricing-table` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/perch`, package
  `@free-react-templates/perch`, CNAME `perch.free.componentdock.com`.

**Name:** `perch` — one lowercase word, no hyphen, **0 hits** as an identifier across the repo (`git grep -il perch`
matches only the words _supercharge_ / _perched_ inside five apps' copy and one alt text — never a folder, package or
token), no `apps/perch`, no `openspec/specs/template-perch`, and no name in `TEMPLATES.md` uses it. It is the
coworking/desk-rental verb ("a perch for the day"), it does **not** describe the component (_pricing table_, _rows_,
_cards_), it pairs with the venue copy below, and it is **not** a ColorLib slug:
`colorlib.com/wp/template/perch/` → **404**, `preview.colorlib.com/theme/perch/` → **404**, and
`preview.colorlib.com/theme/bootstrap/perch/` → **404**.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` (**2,923** rows, 0 `- [ ]`, 0 `[~]`), so this item comes from the **catalogue-gap queue**
in `docs/catalog-coverage.md`: 256 ColorLib-listed designs that the checklist never recorded — 42 stand-alone pages plus
**214 snippet variants in 19 families**. The `pricing-table` family is **7 of 12** prepped after this run (`ratecard` 01,
`tallyboard` 02, `parity` 03, `limelight` 04 and `prorata` 05 **shipped**; `runrate` 06 and `perch` 07 prepped and
unbuilt), and variants 01–05 have rows.

## Where the row goes once this ships (the prep must not add it)

The implementer appends the row under `## Bootstrap Pricing Tables (12)` (header at **line 891**, rows 01–05 at **893**,
**894**, **895**, **896** and **897**, `## Bootstrap Wizards (30)` at **899** as of `6928fd0a8`) — grammar
`[colorlib] · ![preview] · [app]`, exactly as its five siblings:

```
- [x] **Pricing Table 07** — [colorlib](https://colorlib.com/wp/template/pricing-table-07/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-07.jpg) · [perch](https://perch.free.componentdock.com)
```

Variant 06's row is still absent (its prep carries the same instruction), so row order is decided by **when each app
ships**, not by the variant number. Re-read `TEMPLATES.md` **after every rebase** — a sibling has landed mid-prep in each
of the last ten runs.

## Design tokens (read off `style.css`, 9,999 B, sha256 `a26cf535…`)

Five custom properties, **all on `.cl-pricing07`** (not `:root`), and every other colour a literal:

| Token                   | Value     | Where it lands                                                                                        |
| ----------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `--cl-pricing07-accent` | `#9d174d` | the eyebrow (14 / 600) and every icon glyph — nothing else on the page uses it                        |
| `--cl-pricing07-ink`    | `#231a14` | the section's base text **and** the inverted row's fill **and** the CTA's border/hover fill           |
| `--cl-pricing07-muted`  | `#5f5249` | the lede, every plan description, every `/ per` label, the `from` prefix, the footnote                |
| `--cl-pricing07-line`   | `#e2d8c9` | the row border and every chip border                                                                  |
| `--cl-pricing07-card`   | `#fffcf7` | the row fill                                                                                          |

Bespoke literals the sheet uses directly — **none of these is a Tailwind step, do not "regularise" them**:

| Value     | Where                                                                                     |
| --------- | ----------------------------------------------------------------------------------------- |
| `#f4efe6` | `body` ground (the demo wrapper paints nothing of its own — one ground only)              |
| `#f1e7d8` | the icon tile on the three plain rows                                                     |
| `#3b2d23` / `#f9a8d4` | the icon tile on the inverted row, and its glyph (a pink **300**)             |
| `#fbcfe8` / `#500724` | the "Most chosen" flag **and** the inverted row's CTA (a pink **200** / pink **950** pair) |
| `#fbf6ee` | the inverted row's text                                                                   |
| `#d9ccbb` | the inverted row's description, `/ per` and `from` labels (a **second** muted, lighter than `#5f5249`) |
| `#4a3a2e` | the inverted row's chip borders (a fourth chip-border value)                              |
| `#cdbfa9` | the row's **hover** border                                                                |
| `#fff`    | the inverted row's CTA on **hover** (fill, border and 15.03 : 1 text)                     |

Two of the nine chip/row borders are the *only* thing separating a row from the ground, so the token set is load-bearing:
`--line` in three places, `#4a3a2e` in one, `#cdbfa9` on hover, and the inverted row's own `--ink` border.

**Radii:** **18** (row) · **14** (icon tile, 48 px) · **12** (icon tile at ≤ 420, 40 px) · **999** (chips, flag, CTA).
**Borders:** **1 px** row and chips; **1.5 px** on the CTA (**1 px** used at DPR 1 — Chrome snaps used border widths, so
`getComputedStyle` reports `1px`; declare `1.5px` and accept the snap).
**Shadows:** exactly **one** — the row hover `0 14px 30px -22px rgba(35, 26, 20, .45)`. No gradients, no `@keyframes`,
no `filter`, no `text-shadow`, no `backdrop-filter`.
**Transitions:** two, both `.2s ease` — `border-color, box-shadow` on the row and `background-color, color` on the CTA;
both dropped under `prefers-reduced-motion: reduce`.

**Font:** **Outfit**, `system-ui` fallback, weights used **400 / 600 / 700** and nothing else. The archive ships **8 woff2
that are 2 binaries**: `outfit-{400,500,600,700}-latin.woff2` are **all 32,228 B with the same sha256**
(`92684e4a…`), and the four `-latin-ext` files are **all 14,760 B with the same sha256** (`9e38b3f1…`) — one variable
cut per subset. The sheet declares **6 `@font-face`** (400 / 600 / 700 × latin / latin-ext), so the **`-500-` pair is
shipped and never used**: do not import a 500. Google's `css2?family=Outfit:wght@400;600;700&display=swap` answers
**HTTP 200, 2,493 B, 6 `@font-face`** with **the same two binaries reused across all three weights** (`v15`), i.e. the
same variable build shape.

**Type scale as shipped** (px, with the computed line-height): **72 / 72** (`h1`, `clamp(40px, 6.5vw, 72px)`, **700**,
`letter-spacing: -.04em`, `line-height: 1`) · **30 / 33** (the amount, **700**, `-.03em`, `1.1`, `tabular-nums`) ·
**21 / 31.5** (plan name, **600**, `-.01em`) · **16 / 24** (section base — eyebrow **600**, lede, CTA label **600**) ·
**14.5 / 21.75** (plan description, `margin-top: 2`) · **14 / 21** (eyebrow, footnote) · **13.5 / 20.25** (chips,
`/ per`, `from` label) · **12.5 / 18.75** (the flag, **600**).

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium, `document.fonts.ready`, local archive served on 127.0.0.1)

Every figure below is a **rect from the served archive**, cross-checked against the live preview at 1440 × 900 — the two
agree to the hundredth at every measured element (`180, 225, 1080 × 101.25` for row 1 in both).

**At 1440 × 900** (`clamp` gives the wrapper `96px 16px`; `7vw` = 100.8 > 96):

| Element        | Rect (x, y, w, h)        | Notes                                                            |
| -------------- | ------------------------ | ---------------------------------------------------------------- |
| wrapper        | `0, 0, 1440, 861.5`      | `padding: 96px 16px`, `background: #f4efe6`                      |
| section        | `180, 96, 1080, 669.5`   | `max-width: 1080`, `margin: 0 auto`, 16 / 24, `#231a14`          |
| head           | `180, 96, 1080, 97`      | flex, `align-items: flex-end`, `justify-content: space-between`  |
| eyebrow        | `180, 96, 413.44, 21`    | 14 / 600, `#9d174d`, `margin: 0`                                 |
| `h1`           | `180, 121, 413.44, 72`   | 72 px, **one** line, `margin: 4px 0 0`, tracking −2.88           |
| lede           | `860, 145, 400, 48`      | right-hand side, `max-width: 400`, **two** lines of 24           |
| rows           | `180, 225, 1080, 491.5`  | `display: grid`, `gap: 12`, four rows                            |
| row 1 Day Pass | `180, 225, 1080, 101.25` | tracks `285.61 · 365.59 · 182.8 · 124`, 24 px gaps               |
| row 2 Flex 10  | `180, 338.25, 1080, 123` | taller: its description wraps to **two** lines                   |
| row 3 Resident | `180, 473.25, 1080, 112.5` | inverted; its four chips wrap to **two** lines                 |
| row 4 Studio   | `180, 597.75, 1080, 118.75` | tallest price block: `from` + amount + period                 |
| footnote       | `180, 744.5, 1080, 21`   | 14 / 400, `#5f5249`, `margin-top: 28`                            |
| document       | `1440 × 900`             | content ends at 765.5; **861.5** of page, so the 900 viewport wins |

**Inside row 1 at 1440:** icon `205, 248, 48 × 48` (radius 14, `#f1e7d8`, glyph `#9d174d`) · name `269, 248, 167.45 × 31.5`
· description `269, 281.5, 167.45 × 21.75` · chips `514.61, 260.5, 365.59 × 30.25` — three chips of **168.28 · 112.41 ·
64.25** with 8 px gaps · price column `904.2, 249, 182.8 × 53.25`, amount **33** tall, period **20.25** · CTA
`1111, 250.63, 124 × 50` (right edge 1235 = content edge).

**Row height arithmetic** (this is the whole layout rule, and it is worth asserting):
`row = max(plan, chips, price, CTA) + 44 (padding) + 2 (borders)`. At 1440 that is `55.25 + 46 = 101.25`,
`77 + 46 = 123`, `66.5 + 46 = 112.5`, `72.75 + 46 = 118.75`. Row 2's plan is 77 because its description takes two lines
(31.5 + 2 + 43.5); row 4's price is 72.75 because the `from` label adds 19.5 above the 33 px amount.

**At 375 × 900** (the stacked face): wrapper padding **40px 16px**; section **343** wide; head `16, 40, 343 × 153` — the
lede drops under the title (`flex-wrap`) and takes **three** lines (72); rows **242.75 / 264.5 / 264.5 / 264.5**; icon
**40 × 40** radius 12; name 19 / 28.5; amount 26 / 28.6; chips wrap (`white-space: normal`); CTA full width **305 × 50**;
footnote `16, 1325.25, 343 × 42` (**two** lines); document **1407**.

**Height sweep** (document height, same archive, no scrollbar anywhere; `scrollWidth === clientWidth` at all 19 widths):

| width | 1440 | 1280 | 1100 | 1080 | 1000 | 960 | 920 | 901 | 900 | 860 | 768 | 700 | 600 | 480 | 420 | 390 | 375 | 360 | 320 |
| ----- | ---: | ---: | ---: | ---: | ---: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: | --: |
| `docH` | 900 | 900 | 900 | 900 | 900 | 900 | 900 | 900 | **1182** | 1174 | 1155 | **1205** | 1186 | 1275 | 1362 | 1386 | 1407 | 1407 | 1545 |

Two non-monotonic steps, both real:

1. **900 is a cliff, 901 is not.** `@media (max-width: 900px)` switches the row from four tracks to
   `"plan price" / "feats feats" / "cta cta"`, so at **901** the document is **900** (content 776) and at **900** it is
   **1182** — a **+282** jump for one pixel. Row heights go **123 → 209.5**.
2. **The head wraps at 765, not at 900.** The `h1` and the 400 px lede are one flex line while
   `413.44·(6.5vw/72) + 48 + 400 ≤ width − 32`: single line at **766** (head 74.8, `docH` 1155), wrapped at **765**
   (head **138.72**, `docH` **1218**). Between 900 and 766 the document *shrinks* as the title shrinks (1182 → 1155);
   below 765 it **grows** again (1205 at 700, 1186 at 600).

## The copy (verbatim — this is the fidelity contract)

Head: eyebrow `Hatchyard Coworking · Canal Street` (U+00B7) · `h1` **Memberships** · lede
`Fast Wi-Fi, good coffee and quiet rooms on every plan. No joining fee and one month's notice to leave.`

| # | Plan | Description | Chips | Price | CTA (visible + visually-hidden suffix) | Accessible name |
| - | ---- | ----------- | ----- | ----- | -------------------------------------- | --------------- |
| 1 | **Day Pass** | `Drop in whenever you like.` | `Any hot desk, 8am–6pm` · `Coffee and tea` · `1 guest` | **$28** `per day` | `Book a day` + `: Day Pass` | `Book a day: Day Pass` |
| 2 | **Flex 10** | `Ten days a month, any days you choose.` | `10 days a month` · `2 hours meeting rooms` · `Locker` | **$190** `per month` | `Join` + ` Flex 10` | `Join Flex 10` |
| 3 | **Resident** ⟵ inverted, flag `Most chosen` | `Your own desk, 24/7 access.` | `Dedicated desk` · `24/7 key fob` · `8 hours meeting rooms` · `Mail handling` | **$390** `per month` | `Join` + ` Resident` | `Join Resident` |
| 4 | **Studio** | `A lockable room for 2–6 people.` | `Private office` · `Your logo on the door` · `20 hours meeting rooms` | `from` **$1,450** `per month` | `Book a tour` + `: Studio` | `Book a tour: Studio` |

Footnote: `All prices include sales tax. Members get 15% off at the ground-floor café.` (U+2019 apostrophe in the
reference — use a typographic `’`).

Each row's chip list carries `aria-label="<Plan> includes"`. The `–` in `2–6` and `8am–6pm` is an en dash.

## What the port must change (reference defects, and the copy it must not copy verbatim)

The reference is unusually clean — **every text pair passes 4.5 : 1** (see the contrast requirement). The changes are
structural, not cosmetic:

1. **Do not port the 60-line `all: revert` firewall.** The sheet opens with
   `:where(html) :is(html, body, div, span, …) { all: revert }` plus re-asserts for `[hidden]`, `img/svg`, `table`,
   `th`, `caption`, `hr` — a shield so the snippet survives a Bootstrap host. In a Tailwind tree preflight already owns
   that ground; copying the shield makes every utility lose.
2. **Do not port the dead `.cl-icon` rule** (`height: 1em; fill: currentColor`) — no element carries the class. Of the
   **67** rule blocks, the shield and this one are not the design.
3. **Rename the venue.** `Hatchyard Coworking` is the reference's invented brand; the port keeps the *kind* of copy but
   not the name — ship **`Perch House · Canal Street`** and adjust the footnote to
   `… 15% off at the ground-floor café.` unchanged. Plan names (Day Pass / Flex 10 / Resident / Studio) are generic enough
   to keep verbatim; keep `$28 / $190 / $390 / $1,450` and every chip exactly.
4. **Restore list semantics.** The reference sets `list-style: none` on both the rows `<ul>` and each chips `<ul>`, which
   drops list semantics in Safari/VoiceOver. The port adds `role="list"` to both levels (harmless in the other engines).
5. **Keep the four CTAs as anchors with `href="#"`** — that is the reference's own choice and the family precedent
   (`limelight` ships three of them). Do **not** invent a form, a modal or a checkout: this page has no destination, and
   the visually-hidden suffix on each label is what makes the four links distinguishable out of context.
   Add `rel="nofollow"`-free, `aria-label`-free markup — the suffix already does the work.
6. **Keep the flag's `top: -11px` overlap.** The pill straddles the inverted row's top border and therefore overlaps the
   row above by 11 px; the parent must not clip (`overflow: visible` on the section, no `overflow: hidden` on `.rows`).
7. **The `1.5px` CTA border is declared, not snapped.** Emit `border-[1.5px]`; at DPR 1 the used width reports 1 px and
   that is correct — do not "fix" it to `1px` in the stylesheet, or DPR 2 renders a hairline where the reference does not.
8. **Chip and row borders measure 1.23 – 1.57 : 1** and are *decorative* (nothing in a row is clickable except its CTA),
   so they are **not** WCAG 1.4.11 failures. Keep the values; do **not** darken `#e2d8c9` into a brown — that single
   change flattens the whole page.
9. **No `:root` tokens.** All five custom properties live on the section; the port puts them in `@theme` (Tailwind 4) so
   utilities can reference them by name, and nothing else on the page may introduce a colour.
10. **Add the Component Dock footer** — the reference has no `<footer>`. It is the only element the port appends, so every
    height assertion below is `reference + footer`.

## Requirements

### Requirement: The page shell

The template SHALL render one cream ground holding one 1080 px section made of a wrapping head, a four-row list and a
footnote — no nav, no hero, no imagery, no script.

#### Scenario: The shell at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** the wrapper and the section are measured
- **THEN** the wrapper SHALL be **1440** wide with `padding: clamp(40px, 7vw, 96px) 16px` and `background: #f4efe6`
- **AND** the section SHALL be **1080 × 669.5** at **(180, 96)** with `max-width: 1080`, `margin: 0 auto`,
  16 px / 24 px and colour `#231a14`
- **AND** the document SHALL be exactly **900** tall — the page is **861.5** tall, so the viewport wins and no scrollbar
  appears at 1440, 1280, 1100, 1080, 1000, 960, 920 and 901.

#### Scenario: Element census

- **GIVEN** the rendered page
- **WHEN** the structure is read
- **THEN** there SHALL be exactly **one** `h1`, **four** `h2` (one per plan), **four** `<a>`, **thirteen** chips,
  **four** inline `<svg>` icon glyphs (22 × 22 viewBox, `stroke-width: 1.8`, `stroke: currentColor`, `fill: none`,
  `aria-hidden`), **zero** `<img>` and **zero** `<script>` / `<form>` / `<input>` / `<button>`
- **AND** the shell SHALL be `main > section > (header, ul.rows, p.footnote)` with the section labelled by the `h1`
  (`aria-labelledby`), as in the reference.

### Requirement: The head

The template SHALL stack a magenta eyebrow and a one-line display headline on the left and park a two-line lede on the
right, both on one flex line that wraps below 766 px.

#### Scenario: Eyebrow, headline, lede at 1440

- **GIVEN** the head at 1440
- **WHEN** its children are measured
- **THEN** the eyebrow SHALL be **413.44 × 21** at (180, 96) — 14 px / 600 / `#9d174d` / `margin: 0`
- **AND** the `h1` SHALL be **413.44 × 72** at (180, 121) — **one** line of **72** at `clamp(40px, 6.5vw, 72px)`,
  700, `letter-spacing: -.04em` (**−2.88**), `line-height: 1`, `margin: 4px 0 0`
- **AND** the lede SHALL be **400 × 48** at (**860**, 145) — **two** lines of 24, 16 px / 400 / `#5f5249`,
  `max-width: 400`, `margin: 0`, its bottom edge (193) flush with the head's
- **AND** the head SHALL be `display: flex`, `flex-wrap: wrap`, `align-items: flex-end`,
  `justify-content: space-between`, `gap: 16px 48px`, `margin-bottom: 32`.

#### Scenario: The wrap point is 766, not the 900 breakpoint

- **GIVEN** widths 767 → 764
- **WHEN** the head height is read at each
- **THEN** it SHALL be **74.8 / 74.86 / 74.92** at 766 / 767 / 768 and **138.72** at **765**
- **AND** the document SHALL jump **1155 → 1218** across that one pixel, so a sweep at `1440 · 1024 · 768 · 375` SHALL be
  considered incomplete.

### Requirement: The row list

The template SHALL render four `<li>` rows in a 12 px-gapped grid, each a four-track grid
`1.25fr · 1.6fr · 0.8fr · auto` with 24 px gaps, a 1 px `#e2d8c9` border, an 18 px radius, `#fffcf7` fill and
`22px 24px` padding.

#### Scenario: The four rows at 1440

- **GIVEN** the list at 1440
- **WHEN** the rows are measured
- **THEN** they SHALL sit at y **225 / 338.25 / 473.25 / 597.75** with heights **101.25 / 123 / 112.5 / 118.75**
- **AND** each row's content box SHALL be **1030** wide with tracks of **285.61 · 365.59 · 182.8 · 124**
- **AND** each row SHALL satisfy `height = max(plan, chips, price, CTA) + 46`, which is why the four heights differ —
  the rows are **centre-aligned** (`align-items: center`), not stretched.

#### Scenario: Hover

- **GIVEN** any plain row
- **WHEN** the pointer enters it
- **THEN** its border SHALL become `#cdbfa9` and gain `box-shadow: 0 14px 30px -22px rgba(35, 26, 20, .45)`
- **AND** the transition SHALL be `.2s ease` on `border-color, box-shadow`, and both SHALL be disabled under
  `prefers-reduced-motion: reduce`
- **AND** the inverted row SHALL keep its `#231a14` border on hover (only the shadow changes).

### Requirement: A row's four tracks

Each row SHALL present, left to right: an icon tile with the plan's name and description, the chip strip, the
right-aligned price block, and the pill CTA.

#### Scenario: The plan track

- **GIVEN** row 1 at 1440
- **WHEN** its plan block is measured
- **THEN** the tile SHALL be **48 × 48** at (205, 248), radius **14**, fill `#f1e7d8`, glyph `#9d174d`, 16 px from the
  name column, and SHALL be `aria-hidden`
- **AND** the name SHALL be **167.45 × 31.5** at (269, 248) — 21 px / 600 / `#231a14` / `-.01em` / `margin: 0`
- **AND** the description SHALL be **167.45 × 21.75** at (269, 281.5), `margin: 2px 0 0`, 14.5 px / 400 / `#5f5249`.

#### Scenario: The chip strip

- **GIVEN** any row
- **WHEN** its chips are measured
- **THEN** the strip SHALL be a wrapping flex with `gap: 6px 8px`, `list-style: none`, `role="list"` and
  `aria-label="<Plan> includes"`
- **AND** each chip SHALL be **30.25** tall — 13.5 px / 400, `padding: 4px 11px`, 1 px `#e2d8c9` border, radius 999,
  `white-space: nowrap` above 420
- **AND** row 1's three chips SHALL measure **168.28 · 112.41 · 64.25** on one line, row 2's three the same way, and
  the inverted row's **four** chips SHALL wrap onto **two** lines (**66.5** tall, `116.66 · 98.3 / 159.73 · 103.77`).

#### Scenario: The price block

- **GIVEN** any row
- **WHEN** its price is measured
- **THEN** it SHALL be a right-aligned flex column of `amount` then `per` — **never** inline
- **AND** the amount SHALL be 30 px / 700 / `-.03em` / `line-height: 1.1` / `font-variant-numeric: tabular-nums` (**33**
  tall) and the period 13.5 px / 400 / `#5f5249` (**20.25**)
- **AND** the Studio row SHALL prepend a `from` label (13 px / 400 / `#5f5249`, 19.5 tall), making its price block
  **72.75** and the row **118.75**.

#### Scenario: The CTA

- **GIVEN** any row
- **WHEN** its link is measured
- **THEN** it SHALL be **124 × 50** — `min-width: 124`, `padding: 12px 20px`, `border: 1.5px solid #231a14`,
  radius 999, 16 px / 600, transparent fill, `color: #231a14`, `text-decoration: none`
- **AND** on hover it SHALL fill `#231a14` and set its text to `#fbf6ee`
- **AND** on `:focus-visible` it SHALL draw `outline: 3px solid #9d174d` at `outline-offset: 3px`
- **AND** its accessible name SHALL be the visible label plus the visually-hidden suffix (`Book a day: Day Pass`,
  `Join Flex 10`, `Join Resident`, `Book a tour: Studio`) — four distinguishable links, not four "Join"s.

### Requirement: The inverted row

The third plan SHALL be the featured one: an ink row, a pink flag on its top edge, a pink-filled CTA, and its own
secondary text and chip-border colours.

#### Scenario: The ink treatment at 1440

- **GIVEN** row 3
- **WHEN** its styles are read
- **THEN** the row SHALL be `#231a14` with `color: #fbf6ee` and a `#231a14` border, keeping the same geometry as its
  siblings (**112.5** tall)
- **AND** its icon tile SHALL be `#3b2d23` with a `#f9a8d4` glyph, its description / `per` / `from` text `#d9ccbb`, and
  its chips' borders `#4a3a2e`
- **AND** its CTA SHALL be filled `#fbcfe8` with `#500724` text and border, hover `#fff` fill with `#500724` text, and a
  `#fbcfe8` focus ring.

#### Scenario: The flag

- **GIVEN** the flag
- **WHEN** it is measured
- **THEN** it SHALL be **90.22 × 22.75** at (205, 463.25) — `position: absolute`, `top: -11px`, `left: 24px`, radius
  999, `2px 10px` padding, `#fbcfe8` fill, `#500724` text, 12.5 px / 600
- **AND** it SHALL straddle the row's top border (it overlaps the row above by 11 px) with **no** clipping from any
  ancestor
- **AND** it SHALL read **before** the plan name in DOM order, so a screen reader announces "Most chosen, Resident".

### Requirement: Responsive behaviour

The template SHALL switch the row from four tracks to a two-column stacked card at **900 px** and tighten the plan block
at **420 px**, matching the reference at every width.

#### Scenario: The 900 px switch

- **GIVEN** widths 901 and 900
- **WHEN** a row is measured
- **THEN** at **901** it SHALL be one four-track line **123** tall and at **900** it SHALL be
  `grid-template-columns: minmax(0,1fr) auto` with `grid-template-areas: "plan price" "feats feats" "cta cta"`,
  `gap: 16`, `padding: 20px 18px` and **209.5** tall
- **AND** the CTA SHALL become `width: 100%` (830 wide at 900, 305 at 375)
- **AND** the document SHALL go **900 → 1182** across that pixel.

#### Scenario: The 420 px tightening

- **GIVEN** widths 420 and 421
- **WHEN** the plan block is measured
- **THEN** at **≤ 420** the tile SHALL be **40 × 40** radius 12, the name 19 px, the amount 26 px, the plan gap 12,
  and each chip SHALL set `white-space: normal` so long chips may wrap inside their pill
- **AND** rows at 375 SHALL be **242.75 / 264.5 / 264.5 / 264.5**, the section **343**, the document **1407**.

#### Scenario: No overflow anywhere

- **GIVEN** any width from 320 to 1440
- **WHEN** the document is measured
- **THEN** `scrollX` SHALL stay **0** and `scrollWidth === clientWidth` (verified at all 19 sweep widths)
- **AND** the 320 case SHALL still fit: section **288**, rows **264.5 – 322.5**, document **1545**.

### Requirement: Colour and contrast

The template SHALL ship the reference palette unchanged, because every text pair already passes, and SHALL declare the
five section tokens in `@theme`.

#### Scenario: The text pairs

- **GIVEN** the palette as shipped
- **WHEN** contrast is computed
- **THEN** ink `#231a14` SHALL be **16.69** on the card and **14.92** on the ground; muted `#5f5249` **7.36** and
  **6.57**; the accent `#9d174d` **6.88** on the ground and **6.44** on the icon tile; the flag's `#500724` on
  `#fbcfe8` **10.88**; the inverted row's `#fbf6ee` **15.88**, its `#d9ccbb` secondary **10.82**, its glyph
  `#f9a8d4` on `#3b2d23` **7.3**; the focus ring **7.7** on the card.

#### Scenario: The decorative boundaries are left alone

- **GIVEN** the four boundary values the page actually uses
- **WHEN** contrast is computed against the card
- **THEN** the row/chip border `#e2d8c9` SHALL measure **1.38**, the hover border `#cdbfa9` **1.77**, the ground-against-
  row pair **1.06** and the inverted chips' `#4a3a2e` **1.57** on `#231a14`
- **AND** these SHALL be recorded as **decorative** (no row, chip or flag is interactive, so 1.4.11 does not apply) and
  SHALL **not** be darkened — the hairlines are the design.

### Requirement: The Component Dock footer

The template SHALL end with the repo's standard footer strip linking `https://www.componentdock.com/` as
"Component Dock", and no app file SHALL mention ColorLib, the slug or the reference's venue brand.

#### Scenario: Footer and provenance

- **GIVEN** the built app
- **WHEN** the page is inspected
- **THEN** a `<footer>` SHALL be the last element and SHALL carry exactly one outbound link,
  `https://www.componentdock.com/`, labelled **Component Dock**
- **AND** `grep -riE 'colorlib|pricing-table-07|hatchyard' apps/perch` SHALL print **nothing** — provenance lives in this
  spec, `TEMPLATES.md` and the PR
- **AND** the footer SHALL be the only element below the reference's 861.5 px page, so every height assertion is
  `861.5 + footer` at desktop widths.

### Requirement: The port's non-goals

The template SHALL NOT reproduce the reference's host-neutralising CSS, its dead rules, its source names or any state.

#### Scenario: What must not be ported

- **GIVEN** the built app
- **WHEN** the stylesheet and the source are inspected
- **THEN** there SHALL be **no** `:where(html) … all: revert` firewall, **no** `[hidden]` re-assert, **no** `.cl-icon`
  rule, **no** `--cl-pricing07-*` custom property, **no** `@font-face` (fonts come from a Google `<link>`), **no**
  `@keyframes`, and **no** `prefers-color-scheme` branch (the page is light-only)
- **AND** there SHALL be **no** `useState`, `useEffect`, context provider, observer or timer — the only behaviour is CSS
  hover, focus and the `prefers-reduced-motion` guard.

## Implementation notes for the port

- **Font**: `Outfit` 400 / 600 / 700 only, via
  `<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap">` (2,493 B, 6
  `@font-face`, one binary pair for all three weights). No 500 — the archive ships a 500 binary the sheet never
  declares, and importing it changes the variable axis' default instance.
- **Tokens in `@theme`**: `--color-perch-ground #f4efe6`, `--color-perch-card #fffcf7`, `--color-perch-ink #231a14`,
  `--color-perch-line #e2d8c9`, `--color-perch-muted #5f5249`, `--color-perch-accent #9d174d`,
  `--color-perch-tile #f1e7d8`, `--color-perch-pop-tile #3b2d23`, `--color-perch-pop-glyph #f9a8d4`,
  `--color-perch-pink #fbcfe8`, `--color-perch-pink-ink #500724`, `--color-perch-pop-text #fbf6ee`,
  `--color-perch-pop-muted #d9ccbb`, `--color-perch-pop-line #4a3a2e`, `--color-perch-line-hover #cdbfa9`.
  Tailwind's own `pink-200` (`#fbcfe8`), `pink-300` (`#f9a8d4`) and `pink-950` (`#500724`) are exact — prefer those names
  in `@theme` aliases rather than new hexes; **`#9d174d` is not** `rose-800` (`#9f1239`), so it needs its own token.
- **One data module.** Four plans as a typed array (`name`, `desc`, `chips`, `price: { from?: string; amount: string;
  per: string }`, `cta: { label: string; suffix: string }`, `featured?: boolean`, `icon: LucideIcon`). Icons come from
  `lucide-react` at 22 px with `strokeWidth={1.8}` — the reference's four glyphs are coffee cup, door, desk and
  building, i.e. `Coffee` / `DoorOpen` / `Armchair` / `Building2`.
- **Layout in Tailwind**: row = `grid gap-6 rounded-[18px] border border-perch-line bg-perch-card px-6 py-[22px]
  `grid-cols-[minmax(0,1.25fr)_minmax(0,1.6fr)_minmax(0,0.8fr)_auto] items-center`; below 900 the four tracks must become
  the area map — use `max-[900px]:grid-cols-[minmax(0,1fr)_auto] max-[900px]:[grid-template-areas:'plan_price'_'feats_feats'_'cta_cta']`
  with explicit `[grid-area:…]` on the four children, because a plain `grid-cols-2` reflows them in DOM order and puts
  the chips in the price cell.
- **The CTA height is 50** (`12 + 24 + 12 + 2`) — do not add a `py-3.5` variant and do not stretch it; the reference
  aligns it to the row's centre line like the rest.
- **Chips**: `flex flex-wrap gap-x-2 gap-y-1.5` with `text-[13.5px] leading-[20.25px] px-[11px] py-1 rounded-full
  border border-perch-line whitespace-nowrap max-[420px]:whitespace-normal`.
- **`tabular-nums`** on the amount so `$1,450` lines up with `$28` in the right-hand column — this is the one detail that
  makes the row layout read as a table.
- **Copy**: verbatim from the table above, except the venue (`Perch House · Canal Street`). Keep the en dashes, the
  U+00B7 separator and the typographic apostrophe.
- **Tests**: the four row heights, the four accessible CTA names, the thirteen chips with their `aria-label`s, the
  inverted row's five colour overrides, the flag's DOM position, and the 900 / 420 media queries are the assertions
  worth writing — none of them needs a browser, all are jsdom-visible except the rects.

## Verification checklist

- [ ] `apps/perch` scaffolded from the simplest existing app, package `@free-react-templates/perch`, CNAME
      `perch.free.componentdock.com`, `"homepage"` = `https://perch.free.componentdock.com`, `injectUiSource()` in
      `vite.config.ts`, `npm install` at the root so the lockfile registers the workspace
- [ ] `<title>Perch — coworking memberships</title>`, `theme-color: #f4efe6`, description without the source's name
- [ ] Outfit **400 / 600 / 700** only, via `css2?family=Outfit:wght@400;600;700&display=swap` (no 500)
- [ ] `npm run verify:app perch` green (typecheck + lint + 100 % coverage + build)
- [ ] 1440 × 900: section **1080 × 669.5** at **(180, 96)**, head **1080 × 97**, `h1` **413.44 × 72** at (180, 121),
      lede **400 × 48** at (860, 145)
- [ ] rows at y **225 / 338.25 / 473.25 / 597.75**, heights **101.25 / 123 / 112.5 / 118.75**, tracks
      **285.61 · 365.59 · 182.8 · 124**
- [ ] row 1 internals: tile **48 × 48** at (205, 248), name **167.45 × 31.5**, chips **168.28 · 112.41 · 64.25**,
      amount **33**, CTA **124 × 50** at (1111, 250.63)
- [ ] footnote at y **744.5**, **21** tall; document **861.5** of content (900 with the viewport's height)
- [ ] inverted row: `#231a14` fill, `#fbf6ee` text, tile `#3b2d23` / glyph `#f9a8d4`, secondary `#d9ccbb`, chip borders
      `#4a3a2e`, CTA `#fbcfe8` / `#500724`, flag **90.22 × 22.75** at `top: -11px` with nothing clipping it
- [ ] four accessible names exactly `Book a day: Day Pass` · `Join Flex 10` · `Join Resident` · `Book a tour: Studio`
- [ ] 901 → 900: rows **123 → 209.5**, document **900 → 1182**, CTA **124 → 830** (full width)
- [ ] 421 → 420: tile 48 → **40**, name 21 → **19**, amount 30 → **26**, chips `nowrap` → `normal`
- [ ] 768 · 700 · 600 → **1155 · 1205 · 1186** (the head wrap at 765 is real: **766 → 765** is **1155 → 1218**)
- [ ] 480 → **1275**, 420 → **1362**, 375 → **1407**, 360 → **1407**, 320 → **1545**
- [ ] `scrollX = 0` and `scrollWidth === clientWidth` at every width in 320 … 1440
- [ ] contrast: ink **16.69 / 14.92**, muted **7.36 / 6.57**, accent **6.88**, pop text **15.88**, flag **10.88**
- [ ] no `all: revert`, no `.cl-icon`, no `--cl-pricing07-*`, no `@font-face`, no `@keyframes`, no `prefers-color-scheme`
- [ ] no `useState` / `useEffect` / timers anywhere in `apps/perch/src`
- [ ] footer links `https://www.componentdock.com/` as **Component Dock**
- [ ] `openspec validate template-perch --type spec` → _is valid_
- [ ] `grep -riE 'colorlib|pricing-table-07|hatchyard' apps/perch` → **0**
- [ ] bookkeeping: append the `TEMPLATES.md` row under `## Bootstrap Pricing Tables (12)` (after line **897**), re-read
      the file **after** the rebase, `npm run readme:status`, `gh workflow run deploy-surge.yml -f app="perch"`
