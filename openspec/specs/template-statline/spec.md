# Template: Statline (KPI cards — four store metrics with tinted icon chips, tabular values, good/bad delta pills and SVG sparklines with gradient area fill)

## Purpose

A **four-card KPI strip on a cool grey page**, where each card is one metric: a small grey label and a
rounded icon chip on the top row, a **30 px tabular value**, a **pill-shaped trend delta** (green up / green
down / red down), a **sparkline** drawn as an inline `<svg>` with a fade-out area fill, and a hairline-topped
footnote naming the comparison period. Above them, one **left-aligned head** (title + sub-copy) with a
**bordered date-range chip** pushed to the right edge. ColorLib's own listing states the brief in one line:

> "Dashboard cards for four store metrics, each with an icon, the current value, a coloured trend delta and a
> small SVG sparkline with area fill. Deltas are coloured by whether the change is good or bad, and each
> includes hidden text for screen readers."

That one sentence is the whole design. This is the **sixth member of the `card` snippet family**
(`card-01` … `card-20`) and the family's first **data-dashboard** member: the previous five were content cards
(profile, product, cover, pricing, testimonial) and all five were inert. This one is still **static** — 0
anchors, 0 forms, 0 buttons, 0 authored `<script>` — but it is the first sibling with a **hover state**, a
**transition** and a `prefers-reduced-motion` branch, and the first whose visual core is **drawn geometry**
(4 sparklines, 4 gradients) rather than type and photography.

The personality is in six small, copyable details; lose any of them and a correct palette still reads as a
generic "stats row":

1. **The accent is per card and it is one inline token.** `--cl-card06-accent` is `#4f46e5` (indigo-600),
   `#0891b2` (cyan-600), `#db2777` (pink-600) and `#16a34a` (green-600), set on each `<li>`'s `style`
   attribute. It drives exactly three things: the **icon glyph colour**, the icon chip's **12 % tint**
   (`color-mix(in srgb, var(--accent) 12%, #fff)`), and the **sparkline stroke + gradient stops**.
2. **The sparkline is a real vector, not a graphic.** `viewBox="0 0 120 40"` stretched into a **244.5 × 56**
   box with `preserveAspectRatio="none"`, so the polyline is **2.04× wider and 1.4× taller** than its
   coordinates — and the stroke stays **2 px** only because of `vector-effect: non-scaling-stroke`. Drop that
   one declaration and every line becomes ~4 px thick and blurred on the horizontal.
3. **The delta pill is coloured by sentiment, not by direction.** Card 4 has a **falling** arrow painted
   **green** (`good`) and card 3 has a **falling** arrow painted **red** (`bad`): "0.6 pts decrease, an
   improvement" vs "0.4 pts decrease". The `--good` / `--bad` pair is a *judgement* carried in the data, and
   any derivation from the arrow direction is wrong.
4. **The head is a two-part bar, not a centred block.** Title + sub-copy on the left, a **208 px bordered
   chip** (calendar glyph + `26 Aug – 24 Sep 2026`) bottom-aligned on the right, `justify-content:
   space-between`, `align-items: flex-end`, `flex-wrap: wrap`. Below **700 px** the chip drops onto its own
   line and the head grows from **57** to **110** px.
5. **Nothing has a shadow except on hover.** The plate is `#fff` with a **1 px `#e2e8f0` border**, radius
   **16**, and a `0 1px 2px rgba(15,23,42,.04)` whisper; hover lifts it to `border-color #cbd5e1` +
   `0 10px 28px -18px rgba(15,23,42,.35)` over `.2s`. There is no lift, no scale, no ring.
6. **Every card is exactly the same height, always.** All four internal boxes are fixed (34 icon row, 33
   value, 24.19 pill, 56 spark, 31.19 foot) and every label/footnote is one line at ≥ 320 px, so the card is
   **256.38 px** at every viewport from 320 to 1,440 — a genuinely height-stable card, unlike Plaudit
   (whose heights were content-driven) and Tierline (whose featured card was taller by design).

The recreation is a **section, not a site**: one `<main>`, one head, one four-item `<ul>`. There is no nav, no
hero, no chart legend, no filter bar, no "view report" CTA, no footer plate — inventing any of those is the
main fidelity risk. The stack is React 19 + Vite + Tailwind 4 + TypeScript (strict), 100 % coverage, via
`apps/statline`.

**Source mapping (provenance lives here, in the row and in the PR — never in the app, AGENTS.md rule 5):**
`apps/statline` recreates ColorLib **Card V06** (`card-06`), `https://colorlib.com/wp/template/card-06/`,
live preview `https://preview.colorlib.com/theme/bootstrap/card-06/index.html`. The store, the range and the
four metrics are the source's fictional dashboard and stay as they are.

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,887 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-06` is the **sixth member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**), one
of the **214 snippet variants in 19 families** the listing carries and `TEMPLATES.md` does not. The 42
standalone designs in that gap are all prepped; the snippet families are the remaining queue, worked **in
family order, then variant number**. `card-01` → **Nameplate** (`1a09a0c7b`), `card-02` → **Marketrow**
(`780313169`), `card-03` → **Octavo** (`2a8371ce0`), `card-04` → **Tierline** (`9e6e58563`) and `card-05` →
**Plaudit** (`7487355a6`) came first.

When the app ships, its row belongs in a new family section **`## Bootstrap Cards (20)`**, inserted
**after `## Bootstrap Carousels (20)` (line ~710) and before `## Bootstrap Checkboxes (20)` (line ~733)**, with
that heading's count bumped. The row is:

```markdown
- [x] **Card 06** — [colorlib](https://colorlib.com/wp/template/card-06/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-06.jpg) · [statline](https://statline.free.componentdock.com)
```

(Adding rows for the other 14 variants is a **batch** decision for the implementer stream, not a prep-run side
effect — this prep touches no shared file.)

**The name.** `statline` — one lowercase word, in no app folder, no spec folder, and `git grep -il statline
origin/main` returns **0** files (no substring collision, which is the stricter test this pipeline uses); the
ColorLib catalogue URLs `colorlib.com/wp/template/statline/`, `preview.colorlib.com/theme/statline/` and
`preview.colorlib.com/theme/bootstrap/statline/` all answer **404**. Free alternates if a later stream needs
one: `tallydeck`, `baseline`-family rejects aside — `plotline`, `basepoint`, `deltaline`, `scorewell`,
`gaugeline`, `metricfold`, `ratiopad` were all checked free too.

## Reference readings (2026-10-25, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 6,439 B**, `text/html; charset=utf-8`, `<title>` "Card V06 \| Colorlib", `lang="en"`                      |
| preview path      | **`theme/bootstrap/card-06/index.html`** — the directory form `…/bootstrap/card-06/` is the same 6,439 B; `theme/card-06/`, `theme/card-06/index.html` and `theme/bb/card-06/` are **404** (9 B) |
| ColorLib page     | `https://colorlib.com/wp/template/card-06/` **200, 113,292 B** (states "the download is 529 KB")                 |
| stylesheet        | `css/style.css?v=e812858e`, **8,892 B**, sha256 `ea90880adfd37014e7a8debf06c59034bf3ee309727bbdd96fc57eaa061cfb76`; zip twin **identical** |
| archive           | `preview.colorlib.com/downloads/free/card-06.zip`, **200, 541,867 B**, **14 entries** (3 dirs + `index.html` 6,247 B + `css/style.css` + `README.md` 1,260 B + 8 `woff2`) |
| `js/snippet.js`   | **does not exist** — no `js/` directory, no `<script>` in the file; the archive README claims one (**defect**)   |
| archive README    | 1,260 B; also claims `images/` — **no `images/` directory** (**defect**)                                          |
| fonts             | 8 `@font-face` rules (Inter **400 / 500 / 600 / 700**, `latin` + `latin-ext`) but only **2 distinct binaries**: the four `latin` files are byte-identical (sha256 `c9407645…`, 48,432 B each) and the four `latin-ext` files likewise (`a28eb6d3…`, 85,272 B each) → **500/600/700 are faux-bold over the Regular binary** (**defect**, see §Known defects 4) |
| images            | **none** — 0 `<img>`, 0 in the archive                                                                            |
| SVG               | **13 inline**: 1 calendar glyph (chip), 4 metric glyphs (18 × 18 in a 34 × 34 chip), 4 delta arrows (14 × 14) and 4 sparklines (each carrying 1 gradient + 2 paths) |
| classes           | **19** in the markup, **19** selected by the sheet → **1 dead selector** (`.cl-icon`) **and 1 unstyled markup class** (`.cl-card06__area`, filled by its `fill` attribute only) |
| anchors           | **0** — the page has nothing to click; **0 focusable elements** of any kind                                      |
| forms / buttons   | **0 / 0**                                                                                                       |
| headings          | 1 × `h1` ("Overview") + **4 × `h2`**, one per metric label — the card titles are a real heading level           |
| blocks            | `<main>` → `<header>` (a `div` wrapping `h1`+sub, plus the range `<p>`) → one `<ul>` of 4 `<li>`                 |
| media queries     | **1** — `@media (prefers-reduced-motion: reduce)`, which sets `transition: none`. **No width query anywhere**    |
| keyframes         | **none** — 0 `@keyframes`; the only motion is the card's `.2s` border/shadow hover                               |
| custom properties | **3**: `--cl-card06-accent` (also re-set inline per card), `--cl-card06-good: #15803d`, `--cl-card06-bad: #be123c` |
| authored scripts  | **0**. The 10 `<script>` elements in the *live* DOM are host injections (gtag `G-SEKJ4E9T4H`, Cloudflare Zaraz `s.js`, `/s9cc/`, `beacon.min.js`) — none is in the file |
| content height    | **481.38** at 1,440 and 1,280 · 462.88 at 1,046 · **737.13** at 1,045 · 734.64 at 1,024 · 706.31 at 788 · 706.19 at 787 · 703.92 at 768 · **728.75** at 530 · 1,277.5 at 529 / 480 · **1,296.5** at 390 / 360 / 320 |
| horizontal scroll | **none at any width probed** — `scrollWidth === clientWidth` **and** `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 480 / 529 / 530 / 768 / 787 / 788 / 1,024 / 1,045 / 1,046 / 1,280 / 1,440 |

## Design tokens (measured from `style.css`, 8,892 B, and from `getComputedStyle` at 1440 px)

### Palette — a cool grey ground, a slate type ramp, four accents, two tones

| role                | value       | where                                                                       |
| ------------------- | ----------- | --------------------------------------------------------------------------- |
| page ground         | `#eef1f6`   | `body` background — **cool blue-grey**, not `#f8fafc` and not white; it is not a Tailwind slate step |
| band ink            | `#0f172a`   | `.cl-card06-demo` `color` (= slate-900)                                     |
| sub-copy            | `#475569`   | `-demo__sub` (slate-600)                                                    |
| card surface        | `#ffffff`   | `.cl-card06` background                                                     |
| card border         | `#e2e8f0`   | `.cl-card06` `border` (slate-200); **hover** `#cbd5e1` (slate-300)           |
| card shadow         | `rgba(15,23,42,.04)` | `0 1px 2px`; **hover** `0 10px 28px -18px rgba(15,23,42,.35)`       |
| metric label        | `#475569`   | `__label` (slate-600)                                                       |
| value ink           | `#0f172a`   | `__value` inherits the card's `color`                                       |
| icon chip ground    | `color-mix(in srgb, var(--accent) 12%, #fff)` | `__icon` — computed as `color(srgb …)`; the sheet's fallback line is `#f1f5f9` |
| footnote            | `#64748b`   | `__foot` (slate-500)                                                        |
| footnote rule       | `#eef2f7`   | `__foot` `border-top` — **not** a Tailwind step (nearest are slate-100 `#f1f5f9` / white) |
| chip border         | `#d8dee8`   | `-demo__range` `border` — also **not** a Tailwind step                      |
| chip ink            | `#334155`   | `-demo__range` (slate-700)                                                  |
| accent 1 (indigo)   | `#4f46e5`   | card 1 `--cl-card06-accent` — icon glyph, icon tint, sparkline stroke + gradient |
| accent 2 (cyan)     | `#0891b2`   | card 2                                                                      |
| accent 3 (pink)     | `#db2777`   | card 3                                                                      |
| accent 4 (green)    | `#16a34a`   | card 4                                                                      |
| good tone           | `#15803d` on `#dcfce7` | `--cl-card06-good` (green-700) on `__delta--good` (green-100)      |
| bad tone            | `#be123c` on `#ffe4e6` | `--cl-card06-bad` (rose-700) on `__delta--bad` (rose-100)          |
| spark area gradient | `accent` at **.28 → 0** | `linearGradient` `x1="0" x2="0" y1="0" y2="1"` per sparkline       |

Measured serialisations: `__icon` background comes back as `color(srgb 0.917176 0.912941 0.987765)` for
indigo, `color(srgb 0.883765 0.948235 0.963765)` cyan, `color(srgb 0.983059 0.898353 0.936)` pink,
`color(srgb 0.890353 0.956706 0.914824)` green — i.e. `#eae9fc`, `#e1f2f6`, `#fbe5ef`, `#e3f4e9`. Assert the
`color(srgb …)` form (or compare channels) in tests; a hex assert will fail even when the pixels are right.

**The type ramp is Tailwind's slate scale, but the two greys that define the page are not on it**: the ground
`#eef1f6` and the footnote rule `#eef2f7` are hand-picked off-ramp values (nearest steps are `#f1f5f9` and
`#f8fafc`). Everything else — `#0f172a`, `#475569`, `#64748b`, `#334155`, `#e2e8f0`, `#cbd5e1` — is the stock
slate ramp, and the four accents are stock indigo/cyan/pink/green 600. So this is the family's first design
whose palette is *almost* stock Tailwind: reproducing it is not a matter of remembering hexes, it is a matter
of not "tidying" the two off-ramp greys into `slate-100`.

### Type — one face, four weights, all of them faux-bold above Regular

| element                | family                          | size / line-height      | weight | tracking  | colour     |
| ---------------------- | ------------------------------- | ----------------------- | ------ | --------- | ---------- |
| `h1` (`-demo__title`)  | `Inter, system-ui, …`           | **28** / normal (34 box) | **700** | `−.02em` (`−0.56px`) | `#0f172a` |
| sub (`-demo__sub`)     | `Inter, system-ui, …`           | **15** / normal (19 box) | 400    | —         | `#475569`  |
| chip (`-demo__range`)  | `Inter, system-ui, …`           | **14** / normal          | **500** | —        | `#334155`  |
| metric label           | `Inter, system-ui, …`           | **14** / 1.4 (19.6)      | **500** | —        | `#475569`  |
| value (`__value`)      | `Inter, system-ui, …`           | **30** / **1.1** (33)    | **700** | `−.03em` (`−0.9px`) | `#0f172a` |
| delta pill             | `Inter, system-ui, …`           | **13** / 1.4 (18.2)      | **600** | —        | `#15803d` / `#be123c` |
| footnote (`__foot`)    | `Inter, system-ui, …`           | **13** / 1.4 (18.2)      | 400    | —        | `#64748b`  |

**Face delivery — the family's biggest departure.** Eight `@font-face` rules point at **eight file names but
two binaries**: `inter-400-latin.woff2`, `inter-500-latin.woff2`, `inter-600-latin.woff2` and
`inter-700-latin.woff2` are **byte-identical** (sha256 `c9407645…`, 48,432 B), and the four `latin-ext` files
likewise (`a28eb6d3…`, 85,272 B). Chromium loads all four weights and reports them `loaded`, but the glyphs
are the Regular cut with the browser's **synthetic emboldening**: measured advance for `"$84,210"` at 30 px is
**114.00** at weight 400 (identical to Google's Inter Regular), then **118.00 / 119.00 / 119.00** at 500 / 600 /
700 — against Google Inter's real **115.00 / 120.00 / 121.00**. So the reference's "700" is faux-bold and
~1.7 % narrower than a true Inter Bold.

Consequence for the recreation: **bundle nothing and prescribe one Google Fonts `<link>` for real Inter
400;500;600;700.** The layout does not move (every internal box is fixed-height and every label/footnote is
one line), but the ink will be marginally **lighter and wider** than the reference's synthesised bold — the
honest mirror of Tierline's synthesised semibold, and a delta to state in the PR, not to fix with
`font-synthesis: none` (which would render the reference's own 700 as an unstyled 400).

### Radii, rules, decoration, motion

| token                  | value                                                                 |
| ---------------------- | --------------------------------------------------------------------- |
| card radius            | **16 px** — the large radius of the page                              |
| icon chip radius       | **10 px** on a **34 × 34** square                                     |
| pill radius            | **999 px** (fully rounded, 24.19 tall)                                |
| date chip radius       | **10 px** on a 208 × 37 bordered pill                                 |
| card border            | `1 px solid #e2e8f0` → `#cbd5e1` on hover                             |
| footnote rule          | `1 px solid #eef2f7`, with `padding-top: 12px`                        |
| card shadow            | `0 1px 2px rgba(15,23,42,.04)` → `0 10px 28px -18px rgba(15,23,42,.35)` on hover |
| motion                 | `transition: border-color .2s ease, box-shadow .2s ease`; **none** under `prefers-reduced-motion: reduce` |
| keyframes              | **none**                                                              |
| page background image  | **none**                                                              |
| `box-sizing`           | `border-box` **only inside `.cl-card06 *`** — the container stays `content-box` (see below) |

### Layout — one band, an intrinsic grid, and not one width query

- `body { margin: 0; background: #eef1f6; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif }`.
- `.cl-card06-demo`: `max-width: 1200px`, `margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`,
  `color: #0f172a`, `font-size: 16px`. **`box-sizing` is the browser default (content-box)** — the sheet's
  `all: revert` guard resets it and the container is not inside `.cl-card06 *` — so the *outer* box is
  **1,232 px** and the content box **1,200 px**. ⚠️ In Tailwind/preflight (`border-box`) `max-w-[1200px] px-4`
  gives a **1,168 px** content box and **278.5 px** cards instead of 286.5. Prescribe
  **`max-w-[1232px] px-4`** (content 1,200) or `max-w-[1200px]` with the padding on an inner wrapper.
- `.cl-card06-grid`: `display: grid`, `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`,
  `gap: 18px`, `margin: 0`, `padding: 0`, `list-style: none`. **No width query anywhere.**
- Breakpoints fall out of the arithmetic: 4 columns while `gridWidth ≥ 1014` (240 × 4 + 18 × 3), i.e.
  **≥ 1,046 px viewport**; 3 while `gridWidth ≥ 756`, i.e. **788–1,045**; 2 while `gridWidth ≥ 498`, i.e.
  **530–787**; 1 at **≤ 529**. Bisected to the pixel: **1,046 → 4**, **1,045 → 3**, **788 → 3**, **787 → 2**,
  **530 → 2**, **529 → 1**.
- `.cl-card06-demo__head`: `display: flex`, `flex-wrap: wrap`, `align-items: flex-end`,
  `justify-content: space-between`, `gap: 16px`, `margin-bottom: 24px`.
- Vertical padding: `clamp(32px, 6vw, 72px)` → **72** at ≥ 1,200, **62.76** at 1,046, **61.44** at 1,024,
  **47.28** at 788, **46.08** at 768, **32** at ≤ 533.33.
- Band height = `2·pad + head + 24 + rows·256.38 + (rows − 1)·18`. Every measured value in the matrix below
  satisfies it; it is the cheapest way to catch a wrong row count.

### Component geometry (1440 px)

| element              | geometry                                                                              |
| -------------------- | ------------------------------------------------------------------------------------- |
| head                 | **1,200 × 57** at y **72**; `h1` 34 tall at y 72, sub 19 at y 110 (`margin-top: 4`); chip **208 × 37** at x 1,112, y **92** (bottom edge = head bottom 129) |
| grid                 | **1,200 × 256.38** at y **153** (head bottom + 24)                                     |
| card                 | **286.5 × 256.38** at x 120 / 424.5 / 729 / 1,033.5, y 153; radius 16; padding `20px 20px 16px`; **content 244.5** |
| `__top`              | 244.5 × **34**, `flex; align-items: center; justify-content: space-between; gap: 12`; `__label` 19.59 tall, one line |
| `__icon`             | **34 × 34**, radius **10**, `display: grid; place-items: center`, 12 % accent tint, 18 × 18 glyph (`stroke-width: 2`, `fill: none`, round caps/joins) |
| `__value`            | full width × **33** at y 218 (`margin: 10px 0 6px`), `tabular-nums`                    |
| `__delta`            | **73 / 64 / 75 / 76** × **24.19** at y 257, `inline-flex; gap: 4; align-self: flex-start`, `padding: 3px 8px 3px 6px`, 14 × 14 arrow |
| `__spark`            | **244.5 × 56** at y 295.19 (`margin: 14px 0 10px`), `overflow: visible`, `preserveAspectRatio="none"` |
| `__line`             | `stroke: var(--accent)`, `stroke-width: 2`, `vector-effect: non-scaling-stroke`, round caps/joins |
| `__foot`             | full width × **31.19** at y 361.19 (1 px rule + 12 pad + 18.2 line)                     |
| `__sr`               | 1 × 1, `position: absolute` inside the relatively-positioned card, `clip: rect(0 0 0 0)`, `clip-path: inset(50%)` |

### Sparkline geometry (measured, 1440 px)

`viewBox="0 0 120 40"` rendered into **244.5 × 56** → **x scale 2.0375**, **y scale 1.4**.

| card | y-range (units) | line bbox (px, from the svg's top-left) | pill width |
| ---- | --------------- | --------------------------------------- | ---------: |
| 1    | 6 → 32 (26)     | `0, 8.4, 244.5 × 36.4`                  |         73 |
| 2    | 12 → 26 (14)    | `0, 16.8, 244.5 × 19.6`                 |         64 |
| 3    | 9 → 25 (16)     | `0, 12.6, 244.5 × 22.4`                 |         75 |
| 4    | 9 → 29 (20)     | `0, 12.6, 244.5 × 28`                   |         76 |

So the four "shapes" differ in **amplitude**, not in canvas: card 1 rises steadily (jagged, 12 segments),
card 2 oscillates with a small lift at the end, card 3 peaks mid-month then falls, card 4 declines throughout.
The area path is the line path plus `L120 40 L0 40 Z` — it always fills to the **bottom of the viewBox**, not
to the line's own minimum.

### Responsive matrix (measured)

| viewport | columns | card width | card height | grid width | pad top | head | `h1` | sub | band height |
| -------: | ------: | ---------: | ----------: | ---------: | ------: | ---: | ---: | --: | ----------: |
|      320 |       1 |        288 |      256.4 |        288 |      32 |  129 |    1 |   2 |     1,296.5 |
|      360 |       1 |        328 |      256.4 |        328 |      32 |  129 |    1 |   2 |     1,296.5 |
|      390 |       1 |        358 |      256.4 |        358 |      32 |  129 |    1 |   2 |     1,296.5 |
|      475 |       1 |        443 |      256.4 |        443 |      32 |  129 |    1 |   2 |     1,296.5 |
|      476 |       1 |        444 |      256.4 |        444 |      32 |  110 |    1 |   1 |     1,277.5 |
|      480 |       1 |        448 |      256.4 |        448 |      32 |  110 |    1 |   1 |     1,277.5 |
|      529 |       1 |        497 |      256.4 |        497 |      32 |  110 |    1 |   1 |     1,277.5 |
|      530 |       2 |        240 |      256.4 |        498 |      32 |  110 |    1 |   1 |       728.75 |
|      699 |       2 |      324.5 |      256.4 |        667 |   41.94 |  110 |    1 |   1 |       748.63 |
|      700 |       2 |        325 |      256.4 |        668 |      42 |   57 |    1 |   1 |       695.75 |
|      768 |       2 |        359 |      256.4 |        736 |      46.08 | 57 |    1 |   1 |       703.9 |
|      787 |       2 |      368.5 |      256.4 |        755 |      47.22 | 57 |    1 |   1 |       706.2 |
|      788 |       3 |        240 |      256.4 |        756 |      47.28 | 57 |    1 |   1 |       706.3 |
|    1,024 |       3 |      318.7 |      256.4 |        992 |      61.44 | 57 |    1 |   1 |       734.6 |
|    1,045 |       3 |      325.7 |      256.4 |      1,013 |      62.7 |  57 |    1 |   1 |       737.1 |
|    1,046 |       4 |        240 |      256.4 |      1,014 |      62.76 | 57 |    1 |   1 |       462.9 |
|    1,280 |       4 |      286.5 |      256.4 |      1,200 |      72 |   57 |    1 |   1 |       481.4 |
|    1,440 |       4 |      286.5 |      256.4 |      1,200 |      72 |   57 |    1 |   1 |       481.4 |

Three shapes in that table are worth memorising. **The card height never changes** (256.4 at all widths) —
that is the design's one stable axis and the easiest assertion in the whole spec. **The head has two heights,
not a ramp**: 57 while the chip sits inline (≥ 700) and 110 once it drops (≤ 699), plus 129 below 476 where the
sub-copy itself wraps. And **the band is not monotonic for the obvious reason**: the head grows 53 px at 699
while the grid is already two columns, so the band *climbs* from **695.75** at 700 to **748.63** at 699, then
falls back as the vertical padding shrinks — a single 1,440 px check catches none of it.

## Requirements

### Requirement 1: Page shell and the single metric band

The app SHALL render one full-width band on the cool grey ground `#eef1f6` — a two-part head over a
four-column grid of metric cards — with **no other content bands**, no page background image and no
navigation.

#### Scenario: Ground and container at 1440

- **GIVEN** a 1440 × 900 viewport with the webfonts loaded
- **WHEN** the page is measured
- **THEN** `<body>` background is **`#eef1f6`** (`rgb(238,241,246)`) and the band is **481.38 px** tall (the
  page does not scroll)
- **AND** the band container is **1,232 px outer / 1,200 px content** at x **104**, padding **72 px** vertical
  and **16 px** horizontal, `color: #0f172a`
- **AND** the container is centred, so below 1,232 it is edge-to-edge with 16 px padding

#### Scenario: No invented bands or controls

- **GIVEN** the rendered app
- **THEN** it contains exactly one section: the metric band
- **AND** it contains **no** navigation bar, filter/date-picker control, "view report" button, chart legend,
  pagination, table, canvas chart, carousel or multi-column footer — the reference has none of them (0
  anchors, 0 forms, 0 buttons, 0 focusable elements)
- **AND** the only print-level element below the band is the single Component Dock attribution line
  (Requirement 10)

#### Scenario: The document title and language

- **GIVEN** the built `index.html`
- **THEN** `lang="en"` and the title names the recreation (e.g. "Statline — store metrics"), **not** the
  catalogue item "Card V06 | Colorlib"
- **AND** no `<meta name="description">` is required (the reference has none), but no ColorLib string appears
  in any app file

### Requirement 2: The head — title block left, date chip right, two wrap behaviours

The app SHALL render the head as a wrapping flex bar: a `div` holding the `h1` and one line of sub-copy,
`justify-content: space-between`, `align-items: flex-end`, `gap: 16px`, `margin-bottom: 24px`; a bordered
chip at the far right carrying a calendar glyph and the range text.

#### Scenario: Head geometry at 1440

- **GIVEN** a 1440 px viewport
- **THEN** the head is **1,200 × 57** at y **72**
- **AND** the `h1` "Overview" is **28 px / 700 / −.02em** (`−0.56px`), line-height **normal** (34 px box) at
  y 72, one line, in `#0f172a`
- **AND** the sub-copy is **15 px / 400** in `#475569`, **19 px** tall, `margin-top: 4px` from the `h1`
- **AND** the chip is **208 × 37** at x **1,112**, i.e. its **bottom edge on the head's baseline** (y 92 + 37 =
  129), `padding: 9px 14px`, `border: 1px solid #d8dee8`, radius **10**, background `#fff`, ink `#334155`,
  **14 px / 500**, `gap: 8px`, with a **16 × 16** `stroke-width: 2` calendar glyph

#### Scenario: The chip drops below the title block at 699

- **GIVEN** a viewport of **700 px**
- **THEN** the chip is still inline (head **57** tall, chip at y 62) because the head's content box is **668**
  = title block **444** + gap **16** + chip **208**
- **AND** at **699 px** the chip wraps to its own line: head **110** tall, chip at x 16, y **115**
- **AND** no `@media` query is involved — the wrap is `flex-wrap: wrap` arithmetic

#### Scenario: The sub-copy wraps at 475

- **GIVEN** the head is already stacked (viewport ≤ 699)
- **THEN** the sub-copy holds **one line (19 px)** while the head's content box is **≥ 444 px**, i.e. viewport
  **≥ 476**
- **AND** at **475 px** (content 443) it becomes **two lines (38 px)** and the head grows to **129**
- **AND** the `h1` "Overview" is one line at every width down to **320** (9 characters — it never wraps)

### Requirement 3: The grid — four intrinsic columns and no width query

The grid SHALL be `display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px`
with **no width-based media query and no Tailwind breakpoint prefix**.

#### Scenario: Column counts and thresholds

- **GIVEN** the band's content box at a given viewport
- **THEN** the grid shows **4** columns at **≥ 1,046**, **3** at **788–1,045**, **2** at **530–787** and **1**
  at **≤ 529**
- **AND** the thresholds are arithmetic: `240·n + 18·(n − 1)` fits while the grid is **1,014 / 756 / 498** wide
- **AND** bisected readings are **1,046 → 4**, **1,045 → 3**, **788 → 3**, **787 → 2**, **530 → 2**, **529 → 1**

#### Scenario: Card widths follow the track maths

- **THEN** the card width is `(gridWidth − 18·(n − 1)) / n`, measured as **286.5** at 1,440 and 1,280,
  **240** at 1,046 / 788 / 530, **325.7** at 1,045, **318.7** at 1,024, **368.5** at 787, **359** at 768,
  **497** at 529, **448** at 480, **358** at 390, **328** at 360 and **288** at 320

#### Scenario: No width query exists

- **THEN** the stylesheet contains exactly **one** `@media` rule (`prefers-reduced-motion: reduce`) and the
  app contains **no** `sm:` / `md:` / `lg:` / `xl:` class on the grid or the cards

### Requirement 4: Card anatomy — plate, top row, value, pill, spark, footnote

Each card SHALL be a white plate with a **1 px `#e2e8f0` border**, radius **16**, `padding: 20px 20px 16px`,
`font-size: 14px; line-height: 1.4`, a `rgba(15,23,42,.04)` `0 1px 2px` shadow, `position: relative`, and the
vertical stack `__top` → `__value` → `__delta` → `__spark` → `__foot`.

#### Scenario: Card geometry at 1440

- **GIVEN** a 1440 px viewport
- **THEN** each card is **286.5 × 256.38** at y **153**, content width **244.5**
- **AND** `__top` is **34** tall (the icon's height, label vertically centred), label **14 / 500** `#475569`,
  icon chip **34 × 34** radius **10**
- **AND** `__value` is **33** tall at y **218** (`margin: 10px 0 6px`), `tabular-nums`, `−.03em`
- **AND** `__delta` is **24.19** tall at y **257** (`padding: 3px 8px 3px 6px`, radius **999**, `gap: 4`,
  `align-self: flex-start`)
- **AND** `__spark` is **244.5 × 56** at y **295.19** (`margin: 14px 0 10px`)
- **AND** `__foot` is **31.19** tall at y **361.19**: a **1 px `#eef2f7`** rule, **12 px** `padding-top`, one
  18.2 px line in **13 / 400** `#64748b`
- **AND** the card's bottom edge is **409.38**

#### Scenario: The height is constant at every width

- **THEN** every card measures **256.38** tall at 320 / 360 / 390 / 480 / 529 / 530 / 768 / 788 / 1,024 /
  1,046 / 1,280 / 1,440
- **AND** the label, the value, the fingerprint footnote and the pill are all **one line** at every one of
  those widths (the longest label "Conversion rate" measures **112 px** at 14 px, inside a 246 px content box
  at the 320 px viewport)
- **AND** no `flex: 1`, spacer, `min-height` or `margin-top: auto` is needed to equalise the row — the stack is
  intrinsically the same height in all four cards

#### Scenario: Hover is the page's only motion

- **GIVEN** a pointer over a card
- **THEN** `border-color` becomes **`#cbd5e1`** and `box-shadow` becomes
  **`0 10px 28px -18px rgba(15,23,42,.35)`**
- **AND** both transition over **`.2s ease`**, and `getComputedStyle(...).transition` reports
  `border-color 0.2s, box-shadow 0.2s`
- **AND** under `prefers-reduced-motion: reduce` the computed `transition` is **`none`**
- **AND** no transform, scale, translate, ring, colour change of the value or opacity change occurs

### Requirement 5: The accent is per-card data and drives exactly three things

The app SHALL carry the four cards as an array whose entries include `accent`, and SHALL use that token for
the **icon glyph colour**, the **icon chip's 12 % tint**, and the **sparkline stroke plus gradient stops** —
and for nothing else.

#### Scenario: Accent values and their jobs

- **THEN** the accents are `#4f46e5` (Net revenue), `#0891b2` (Orders), `#db2777` (Conversion rate) and
  `#16a34a` (Refund rate)
- **AND** each card's `--accent` resolves from its own data entry, not from a `:nth-child` selector
- **AND** the icon chip's computed background is `color-mix(in srgb, var(--accent) 12%, #fff)`, serialised as
  `color(srgb 0.917176 0.912941 0.987765)` / `0.883765 0.948235 0.963765` / `0.983059 0.898353 0.936` /
  `0.890353 0.956706 0.914824` (`#eae9fc`, `#e1f2f6`, `#fbe5ef`, `#e3f4e9`)
- **AND** the icon glyph's computed `color` equals the accent exactly (`rgb(79,70,229)` / `rgb(8,145,178)` /
  `rgb(219,39,119)` / `rgb(22,163,74)`)
- **AND** the sparkline's `stroke` equals the accent and its two gradient stops use the accent at **.28** and
  **0** opacity
- **AND** the accent does **not** tint the value, the label, the border, the footnote or the delta pill

#### Scenario: The chip tint degrades gracefully

- **THEN** the sheet declares `background: #f1f5f9` **before** the `color-mix()` line — a grey fallback for
  engines without `color-mix`
- **AND** the app may ship only the `color-mix()` value (every supported browser has it), but must not use
  `#eae9fc`-style literals per card: the tint is derived from the accent

### Requirement 6: Delta pills are coloured by judgement, not by direction

Each delta SHALL be a pill with an **up or down arrow**, the change text, and a visually-hidden word; its
colour SHALL come from a `good` / `bad` tone carried in the data.

#### Scenario: The four pills

- **THEN** the pills read **`12.4%`** (up arrow, `good`), **`4.1%`** (up arrow, `good`), **`0.4 pts`**
  (down arrow, `bad`) and **`0.6 pts`** (down arrow, **`good`**)
- **AND** `good` paint is `#15803d` on `#dcfce7`; `bad` paint is `#be123c` on `#ffe4e6`
- **AND** the widths are **73 / 64 / 75 / 76** at 1440 — the one difference in structure is the text
  (`12.4%` vs `0.6 pts`), not padding

#### Scenario: Card 4 is a falling arrow that is good news

- **GIVEN** the Refund rate card
- **THEN** its arrow is the **down** path (`M8 3v10M4 9l4 4 4-4`) and its tone is **`good`** (green)
- **AND** its accessible text is "0.6 pts **decrease, an improvement**" — the hidden span says both
- **AND** no code derives the tone from the arrow direction; a `sign < 0 → bad` rule would paint it red and
  break the design

#### Scenario: The hidden word completes the announcement

- **THEN** each pill is `<p>` with the visible number followed by a `<span>` whose text is ` increase` /
  ` decrease` / ` decrease, an improvement` (leading space included)
- **AND** that span is **1 × 1** and clipped (`clip: rect(0 0 0 0)`, `clip-path: inset(50%)`,
  `position: absolute`, `white-space: nowrap`) — it is **removed from the pill's flex flow**, so the pill's
  width is unaffected by it
- **AND** the card is `position: relative`, which is what parks the clipped span (measured at x **27**, y
  **115.6** inside the card, i.e. outside the pill's own box)

### Requirement 7: The sparkline is drawn geometry with a non-scaling stroke

Each card SHALL contain one inline `<svg viewBox="0 0 120 40" preserveAspectRatio="none">` with a per-card
gradient `<defs>` and two paths (area + line), **not** an image, canvas or charting library.

#### Scenario: Stretching, and the one declaration that keeps it crisp

- **GIVEN** a 1440 px viewport
- **THEN** the sparkline box is **244.5 × 56** — an **x scale of 2.0375** and a **y scale of 1.4**
- **AND** the line's computed `stroke-width` is **2 px** and `vector-effect` is **`non-scaling-stroke`** —
  without that declaration the stroke would render **4.075 px** horizontally and the polyline would look
  smeared (the reference's whole trick)
- **AND** the line's rendered bbox heights are **36.4 / 19.6 / 22.4 / 28** px, matching each path's unit
  y-extent × 1.4

#### Scenario: Each card owns its gradient

- **THEN** the four gradients have **distinct ids** (`cl-card06-g1` … `cl-card06-g4`, global in the reference)
- **AND** each is `linearGradient x1="0" x2="0" y1="0" y2="1"` with stop 0 = accent at **`.28`** and stop 1 =
  accent at **`0`**
- **AND** in React the ids are derived per instance (or `useId`) so that two instances on one page cannot
  collide — a duplicated id makes the second sparkline adopt the first one's colour
- **AND** the area path is the line path plus `L120 40 L0 40 Z` (it fills to the bottom of the viewBox)

#### Scenario: The four polylines are content, not noise

- **THEN** the paths are exactly:
  - card 1 `M0 32 L10 30 L20 31 L30 26 L40 27 L50 22 L60 24 L70 18 L80 19 L90 13 L100 14 L110 8 L120 6`
  - card 2 `M0 24 L10 20 L20 26 L30 18 L40 22 L50 16 L60 25 L70 20 L80 23 L90 15 L100 19 L110 14 L120 12`
  - card 3 `M0 20 L10 17 L20 18 L30 12 L40 10 L50 13 L60 9 L70 15 L80 18 L90 16 L100 22 L110 21 L120 25`
  - card 4 `M0 10 L10 12 L20 9 L30 14 L40 13 L50 18 L60 16 L70 21 L80 20 L90 25 L100 24 L110 28 L120 29`
- **AND** the polyline is **jagged** — no `C`/`Q` curves, no smoothing, no stroke-linejoin rounding trick
- **AND** the sparkline sits between the pill and the footnote with `margin: 14px 0 10px` and
  `overflow: visible`

### Requirement 8: Responsive integrity

The layout SHALL have no horizontal scrollbar at any width and SHALL keep the card height constant.

#### Scenario: No horizontal scroll anywhere

- **THEN** `document.documentElement.scrollWidth === clientWidth` **and** `scrollTo(200, 0) → scrollX === 0`
  at **320 / 360 / 390 / 480 / 529 / 530 / 768 / 787 / 788 / 1,024 / 1,045 / 1,046 / 1,280 / 1,440**
- **AND** at 320 the single track is **288** wide inside a **288** grid — the `minmax(240px, 1fr)` floor is
  never reached, so unlike Plaudit there is **no** 2 px track overflow to reproduce or fix

#### Scenario: Band heights match the formula

- **THEN** the band is **481.38** at 1,440 and 1,280, **462.88** at 1,046, **737.13** at 1,045, **734.64** at
  1,024, **706.31** at 788, **706.19** at 787, **703.92** at 768, **728.75** at 530, **1,277.5** at 529 and
  480, and **1,296.5** at 390, 360 and 320
- **AND** each equals `2·pad + head + 24 + rows·256.38 + (rows − 1)·18`

#### Scenario: The vertical padding is viewport-derived

- **THEN** the band's `padding-block` is `clamp(32px, 6vw, 72px)`: **72** at 1,440 and 1,280, **62.76** at
  1,046, **61.44** at 1,024, **47.28** at 788, **46.08** at 768 and **32** from 530 down
- **AND** at 700 / 699 the padding is **42 / 41.94** — the *only* part of the layout that changes continuously

### Requirement 9: Semantics, accessibility and contrast

The band SHALL use a real document outline and SHALL expose the sparklines as labelled images.

#### Scenario: Document structure

- **THEN** there is exactly **one `h1`** ("Overview"), **four `h2`** (one per metric label, in grid order) and
  no `h3`–`h6`
- **AND** the band is a `<main>`, the head a `<header>`, the grid a `<ul>` and each card an `<li>`
- **AND** each sparkline is `<svg role="img">` with an English `aria-label` describing the trend
  ("Revenue trend, rising steadily over 30 days", "Orders trend, uneven with a small rise at the end",
  "Conversion trend, peaking mid-month then falling", "Refund trend, falling over 30 days")
- **AND** the icon chips (`<span aria-hidden="true">`), the delta arrows and the calendar glyph are
  `aria-hidden`, and the footer year/number is not invented
- **AND** the only focusable element in the app is the Component Dock attribution link (Requirement 10) —
  the reference has **0**

#### Scenario: Measured contrast

- **THEN** the pairs clear their thresholds: value `#0f172a` on `#fff` **17.85:1**, label `#475569` on
  `#fff` **7.58:1**, sub `#475569` on `#eef1f6` **6.69:1**, footnote `#64748b` on `#fff` **4.76:1**, chip
  `#334155` on `#fff` **10.35:1**, `good` **4.57:1**, `bad` **5.24:1**
- **AND** the icon glyphs measure **5.26 / 3.20 / 3.84 / 2.89 : 1** against their own 12 % tints — indigo
  clears 3:1, and the **green chip at 2.89:1 does not**; because the chip is `aria-hidden` decoration this is
  not a WCAG failure, but do not reuse the tint for text (see §Known defects 5)

#### Scenario: Nothing focusable is invented

- **THEN** there is no button, link, input, `tabindex` or `[role=button]` inside the band
- **AND** the hover state is **not** a click affordance: no cursor change, no `aria-haspopup`, no tooltip
- **AND** no `title` attribute or `aria-live` region is added to the numbers

### Requirement 10: Attribution, naming and provenance

The app SHALL ship as `apps/statline` with no ColorLib reference in any app file, and SHALL credit Component
Dock.

#### Scenario: Identity

- **THEN** the workspace package is `@free-react-templates/statline`, `public/CNAME` is
  `statline.free.componentdock.com` and `homepage` is `https://statline.free.componentdock.com`
- **AND** the app is named "Statline" in its UI/title, a name that appears nowhere in ColorLib's catalogue

#### Scenario: Footer attribution

- **THEN** one small line of print below the band links **`https://www.componentdock.com/`** with the text
  "Component Dock"
- **AND** it is the only link in the app and the only focusable element
- **AND** it is set in the same `#64748b` 13 px footnote style, so the page still reads as one band

#### Scenario: Clean provenance

- **THEN** `grep -ri colorlib apps/statline` and `grep -ri 'card-06' apps/statline` both return **no matches**
  (comments and test names included)
- **AND** the four metrics, the store copy and the date range are the source's fictional content and stay
  ("Net revenue", "$84,210", "26 Aug – 24 Sep 2026")
- **AND** no screenshot, CSS file, woff2 or README from the archive is copied into the app

### Requirement 11: Copy fidelity

The app SHALL reproduce the reference copy verbatim, including its typographic details.

#### Scenario: Head and chip

- **THEN** the `h1` is exactly **"Overview"** and the sub-copy exactly
  **"Store performance, last 30 days compared with the previous 30."**
- **AND** the chip text is exactly **"26 Aug – 24 Sep 2026"** with an **en dash** (`&ndash;`, U+2013), not a
  hyphen or an em dash

#### Scenario: The four metric entries

- **THEN** the cards read, in order:
  - **Net revenue** · **$84,210** · ↑ **12.4%** · *vs $74,920 previous period* · accent `#4f46e5`
  - **Orders** · **1,286** · ↑ **4.1%** · *vs 1,235 previous period* · accent `#0891b2`
  - **Conversion rate** · **3.18%** · ↓ **0.4 pts** · *vs 3.58% previous period* · accent `#db2777`
  - **Refund rate** · **1.9%** · ↓ **0.6 pts** · *vs 2.5% previous period* · accent `#16a34a`
- **AND** `$84,210` and `1,286` keep their **thousands separators**, `3.18%` keeps **two decimals**, `1.9%`
  keeps **one**, and the deltas keep `%` vs `pts` exactly

#### Scenario: Typographic details survive

- **THEN** the four values are `tabular-nums` at **30 / 700 / 1.1 / −.03em**
- **AND** the pills are `tabular-nums` at **13 / 600**
- **AND** the four icon glyphs are the reference's 24-unit paths at `stroke-width: 2` with round caps and
  joins: dollar (`M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`), shopping bag
  (`M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z` + `M3 6h18M16 10a4 4 0 0 1-8 0`), chart
  (`M3 3v18h18` + `m7 14 4-4 3 3 5-6`), refund arrow (`M3 12a9 9 0 1 0 3-6.7L3 8` + `M3 3v5h5`)
- **AND** the calendar glyph is `rect 3 4 18 18 rx 2` + `M16 2v4M8 2v4M3 10h18` at **16 × 16**, and the
  delta arrows are **14 × 14** (`M8 13V3M4 7l4-4 4 4` up, `M8 3v10M4 9l4 4 4-4` down)

## Screenshot analysis (catalogue image, `card-06.jpg`)

The listing image is **a framed capture, not a bare screenshot**: a **1200 × 972** **progressive JPEG**
(`file` → `JPEG image data, progressive, precision 8, 1200x972, components 3`; **36,168 B**) showing a
browser window — traffic lights and a URL pill reading `preview.colorlib.com` — on a white sheet with a soft
drop shadow over a `#eee` page. Inside the window the design renders in its **four-column** state: the
one-line `h1` and its sub-copy on the left, the date chip at the right, and four white cards with indigo,
cyan, pink and green accents.

Sampled pixels (JPEG drift accounts for 1–3 levels): page ground **`rgb(238,241,246)`** — exactly the token
`#eef1f6`; card plate **`rgb(255,255,255)`**; the pink pill **`rgb(255,230,232)`** against the token
`#ffe4e6`; the indigo icon tint **`rgb(237,234,255)`** against the computed `#eae9fc`. So the image was
rendered from the same sheet, and the palette matches within noise.

**The capture is scaled, so do not measure it.** The image's content area is ~**933 px** wide for a design
whose content box is 1,200 — the whole page was rendered at ~1,280 and scaled to ~0.78, which makes the cards
look ~217 px wide instead of 286.5. Every number in this spec comes from the live DOM, not from this image.

Unlike Plaudit, this screenshot **cannot mislead on type metrics**: the `h1` is the single word "Overview"
(one line at every width) and the values are short, so the image agrees with the live render line-for-line.
What it does *not* show is the two width-dependent head states (chip dropped at ≤ 699, sub-copy wrapped at
≤ 475) or the hover state — the image is a 1-column-of-each-possibility artifact: 4 columns, one head layout,
no hover.

The window frame, traffic lights, URL pill, white sheet and drop shadow are **catalogue furniture** — none of
it belongs in the app (the app's ground is the page's own `#eef1f6`, full-bleed). The empty lower two-thirds
of the frame is real, not a crop: at 1,440 the band is **481.38** px in a 900 px window.

## Known reference defects (do not copy)

1. **The archive README documents two directories that do not exist.** It lists `js/snippet.js — the
   behaviour, in plain JavaScript` and `images/ — its images`; the ZIP holds **11 files** (`card-06/index.html`,
   `card-06/css/style.css`, `card-06/README.md` and eight `card-06/fonts/*.woff2`) in 3 directories, with **no
   `js/` directory, no `images/` directory, no `<script>` element and not one `<img>`**. Identical to
   `card-01`, `card-03`, `card-04` and `card-05`; `card-02` is the only sibling that really ships JS.
2. **`.cl-icon` is a dead selector for the fifth sibling in a row.** The sheet styles it (`height: 1em;
   width: auto; fill: currentColor; display: inline-block`) and the markup never uses it; the 13 SVGs are
   styled through `__icon svg`, `__delta svg`, `__spark` and the chip's `svg` rule. Omit it.
3. **A markup class with no rule at all — new to this family.** `.cl-card06__area` appears on the area path
   and is selected by **zero** rules: its fill comes only from the `fill="url(#…)"` presentation attribute.
   Keep it that way (or style it), but do not assume the class carries CSS; a `grep` of the sheet finds it
   only in the markup, and a "missing rule" is not a bug here.
4. **Fonts: eight files, two binaries, four faux-bold weights.** `inter-400/500/600/700-latin.woff2` are
   byte-identical (sha256 `c9407645…`, 48,432 B) and the four `latin-ext` files likewise (`a28eb6d3…`,
   85,272 B). The page therefore renders 500/600/700 as Chromium **synthesis over Inter Regular**: measured
   `"$84,210"` advance at 30 px = **114.00 / 118.00 / 119.00 / 119.00** vs Google Inter's real
   **114.00 / 115.00 / 120.00 / 121.00**. Ship real weights from Google Fonts and disclose that the ink is
   ~1.7 % wider/lighter than the reference's synthesised 700. Do **not** add `font-synthesis: none` — that
   would render the reference's 700 as an unstyled 400 rather than the other way round.
5. **The green icon chip is below the non-text contrast floor.** `#16a34a` on its 12 % tint `#e3f4e9` is
   **2.89:1** (cyan 3.20:1, pink 3.84:1, indigo 5.26:1). WCAG 1.4.11 exempts purely decorative graphics and
   the chip is `aria-hidden`, so this is not a failure — but the chip *reads* as a status cue, so if it is ever
   given meaning, darken the glyph (`#15803d` gives **4.39:1**, `#166534` **6.24:1** on the same tint) and say
   so in the PR.
6. **`good` / `bad` are sentiment classes that contradict the arrows.** `.cl-card06__delta--good` is used on
   an **up** arrow (card 1, 2) *and* a **down** arrow (card 4); `--bad` on a down arrow (card 3). Any
   `direction → colour` derivation is wrong. Model it as two independent fields (`tone`, `dir`).
7. **The price of `content-box`.** The sheet's `all: revert` guard leaves the container at
   `box-sizing: content-box`, so `max-width: 1200px` + `16px` padding measures **1,232 px** outer. A Tailwind
   port that writes `max-w-[1200px] px-4` gets a 1,168 px content box and **278.5 px** cards — an 8 px error on
   every track. Write `max-w-[1232px] px-4`.
8. **The sparkline gradients' ids are page-global.** `cl-card06-g1` … `g4` are hard-coded; two instances of
   the card in one document would make the second sparkline inherit the first one's gradient. Derive the id.
9. **`preserveAspectRatio="none"` alone would ruin the stroke.** The 2 px line is only 2 px because of
   `vector-effect: non-scaling-stroke` on `.cl-card06__line`; without it the horizontal scale (2.04) thickens
   it and the vertical scale (1.4) offsets it, so the line renders as a 4 px smudge. This is the single most
   copy-worthy declaration in the file.
10. **`overflow: visible` on the sparkline is load-bearing but currently a no-op.** All four paths stay inside
    the viewBox, so nothing is clipped either way; keep the declaration, since a redrawn path would need it
    and removing it silently changes behaviour for future content.
11. **The head has no `<nav>`/landmark and the card labels are `h2`s.** Four `h2`s named after metrics is a
    legitimate outline; do not "improve" it to `<p>` (the outline is the only structure the band has) and do
    not add a `<section aria-label="Metrics">` wrapper the reference does not have.
12. **The `<head>` carries four things and nothing else** — `charset`, `viewport`, `<title>` and the stylesheet
    link. No theme-color, no description, no OG/Twitter cards, no JSON-LD, no favicon. A snippet needs none of
    them; do not add SEO metadata to the app's `index.html` beyond what the repo's other apps already carry.

## Verification checklist

- [ ] `apps/statline` exists, `@free-react-templates/statline` in `package.json`, `public/CNAME` =
      `statline.free.componentdock.com`, `homepage` the same
- [ ] footer line links `https://www.componentdock.com/` ("Component Dock") and is the **only** link and the
      only focusable element; **no** ColorLib string and no `card-06` in any app file (comments included)
- [ ] one band only: head + a 4-card grid; no nav, filter, legend, CTA, table, canvas chart or footer plate
      invented
- [ ] ground **`#eef1f6`**; container **1,232 outer / 1,200 content** at x 104, `padding:
      clamp(32px,6vw,72px) 16px` (→ 72 / 16 at 1440), `color: #0f172a`
- [ ] head **1,200 × 57** at y 72; `h1` **28/700/−.56px** `#0f172a`, sub **15/400** `#475569` `margin-top: 4`;
      chip **208 × 37** at x 1,112, `9px 14px`, `1px solid #d8dee8`, radius **10**, **14/500** `#334155`,
      **16 × 16** calendar glyph
- [ ] chip inline at **≥ 700** (head **57**), dropped at **≤ 699** (head **110**); sub **1 line ≥ 476**,
      **2 lines ≤ 475** (head **129**); `h1` one line at every width
- [ ] grid `repeat(auto-fit, minmax(240px,1fr))`, **gap 18**, **no `@media` width query and no
      `sm:`/`md:`/`lg:` prefix**; columns **1/1/1/1/1/1/1/2/2/2/3/3/4/4/4** at
      320/360/390/475/476/480/529/530/699/768/788/1,045/1,046/1,280/1,440
- [ ] card widths **288/328/358/443/444/448/497/240/324.5/359/368.5/325.7/240/286.5/286.5** at the same widths
- [ ] card **286.5 × 256.38** at 1440, radius **16**, `1px solid #e2e8f0`, `padding: 20px 20px 16px`,
      `14/1.4`, `0 1px 2px rgba(15,23,42,.04)`, content **244.5**; **card height 256.38 at every width**
- [ ] stack: `__top` **34** (icon **34 × 34** radius **10**) → `__value` **33** at y 218 (`margin: 10 0 6`,
      `tabular-nums`) → `__delta` **24.19** at y 257 → `__spark` **244.5 × 56** at y 295.19 → `__foot`
      **31.19** at y 361.19 (1 px `#eef2f7` rule + 12 pad); card bottom **409.38**
- [ ] hover: `#cbd5e1` border + `0 10px 28px -18px rgba(15,23,42,.35)`, `.2s ease` on both, `none` under
      `prefers-reduced-motion`; no transform, scale or ring
- [ ] accents `#4f46e5` / `#0891b2` / `#db2777` / `#16a34a` carried as **data** (one array, no `nth-child`);
      icon tint = accent at **12 %** (`#eae9fc` / `#e1f2f6` / `#fbe5ef` / `#e3f4e9`); accent nowhere else
- [ ] pills **73 / 64 / 75 / 76 × 24.19**, radius **999**, `3px 8px 3px 6px`, **13/600**, `tabular-nums`;
      `good` `#15803d` on `#dcfce7`, `bad` `#be123c` on `#ffe4e6`; **card 4 down arrow + `good`**
- [ ] hidden span per pill (` increase` / ` decrease` / ` decrease, an improvement`), **1 × 1**, clipped,
      absolutely positioned inside the relatively-positioned card, **not** adding pill width
- [ ] sparkline: `<svg viewBox="0 0 120 40" preserveAspectRatio="none" role="img" aria-label="…">`, four
      **distinct gradient ids** (accent `.28 → 0`), area path closing `L120 40 L0 40 Z`, line
      `stroke-width: 2` + **`vector-effect: non-scaling-stroke`**, `overflow: visible`,
      `margin: 14px 0 10px`; path data exactly as in Requirement 7
- [ ] line bboxes **36.4 / 19.6 / 22.4 / 28** tall with offsets **8.4 / 16.8 / 12.6 / 12.6**
- [ ] one `h1` + **four `h2`**, `lang="en"`, icon chips/arrows/calendar `aria-hidden`, `role="img"` on the
      four sparklines, 0 buttons/forms/inputs
- [ ] `scrollWidth === clientWidth` **and** `scrollTo(200,0) → scrollX 0` at **320 / 360 / 390 / 480 / 529 /
      530 / 768 / 787 / 788 / 1,024 / 1,045 / 1,046 / 1,280 / 1,440**
- [ ] band heights **1,296.5 / 1,296.5 / 1,296.5 / 1,296.5 / 1,277.5 / 1,277.5 / 1,277.5 / 728.75 / 748.63 /
      703.92 / 706.31 / 737.13 / 462.88 / 481.38 / 481.38** in the same width order as the checklist above
      (plus **706.19** at 787 and **734.64** at 1,024), each equal to
      `2·pad + head + 24 + rows·256.38 + (rows − 1)·18`
- [ ] Inter **400/500/600/700** via one Google Fonts `<link>`, no bundled woff2, no `font-synthesis: none`;
      the faux-bold delta vs the reference stated in the PR
- [ ] copy verbatim: "Overview", "Store performance, last 30 days compared with the previous 30.",
      "26 Aug – 24 Sep 2026" (**en dash**), `$84,210` / `1,286` / `3.18%` / `1.9%`, the four footnotes
- [ ] no script, no `<img>`, no `.cl-icon`, no reset guard, no `@keyframes`, no chart library, no new
      dependency
- [ ] 100 % coverage on the new app, `scripts/verify-app.sh statline` green
- [ ] after shipping (implementer stream, not prep): add the `## Bootstrap Cards (20)` row from §Why this
      design has no row in `TEMPLATES.md`, between `## Bootstrap Carousels (20)` and
      `## Bootstrap Checkboxes (20)`, and mark it `[x]`
