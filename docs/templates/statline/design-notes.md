# Statline — design notes

Source: ColorLib **Card V06** (`card-06`), ColorLib page `https://colorlib.com/wp/template/card-06/`
(HTTP 200, 113,292 B), live preview `https://preview.colorlib.com/theme/bootstrap/card-06/index.html`
(**HTTP 200, 6,439 B**, read 2026-10-25 with `curl -4`; **the slug-only path 404s** — `theme/card-06/`,
`theme/card-06/index.html` and `theme/bb/card-06/` are all 9 B 404s). Recreation name `statline`. Spec:
`openspec/specs/template-statline/spec.md`. Tasks: `docs/templates/statline/tasks.md`.

A **hand-written static snippet**, not a theme build: 6.4 KB of HTML and one 8,892 B stylesheet with **no
script, no `js/` directory and no behaviour** — but unlike every earlier member of this family it is not
inert: the card has a **`:hover` state**, a `.2s` transition and a `prefers-reduced-motion` branch, and its
visual core is **four inline SVG sparklines** with per-card gradients. Still **0 anchors, 0 forms, 0
buttons and 0 focusable elements**; Bootstrap appears only as the same `:where(html) … { all: revert; }`
guard (55 lines plus six `::-webkit-datetime-edit` selectors and a `[hidden]` re-hide) that every sibling
carries.

The live sheet is byte-identical to the copy inside `downloads/free/card-06.zip`
(sha256 `ea90880adfd37014e7a8debf06c59034bf3ee309727bbdd96fc57eaa061cfb76`, 8,892 B); the live HTML (6,439 B) is
the zip's `index.html` (6,247 B) plus the host's injections (two `robots` metas, a `cdnjs` `dns-prefetch`, the
`?v=e812858e` cache-buster with `fetchpriority="high"`). So: **live preview verified; the archive is its
un-versioned twin.** The ZIP is **541,867 B, 14 entries**: 3 directories, `index.html`, `css/style.css`,
`README.md` (1,260 B) and eight `fonts/*.woff2`.

⚠️ The archive's `README.md` lists `js/snippet.js  the behaviour, in plain JavaScript` **and**
`images/  its images`. **There is no `js/` directory, no `images/` directory, no `<script>` and not one
`<img>`.** Same lie as `card-01`, `card-03`, `card-04` and `card-05`; `card-02` is the only sibling that really
ships JS.

## Structure order (measured at 1440 × 900, webfonts loaded)

| # | band                                          | hook                    | ground    | top |   height |
| - | --------------------------------------------- | ----------------------- | --------- | --: | -------: |
| 0 | page                                          | `body`                  | `#eef1f6` |   0 |   481.38 |
| 1 | container (1,232 outer / 1,200 content)        | `.cl-card06-demo`       | —         |   0 |   481.38 |
| 2 | head: title block left, date chip right        | `-demo__head`           | —         |  72 |       57 |
| 3 | grid (4 × 286.5, gap 18)                       | `.cl-card06-grid`       | —         | 153 |   256.38 |
| — | *nothing else*                                 | —                       | —         |   — |        — |

Per card, top to bottom: `__top` (**34** — label centred against a 34 px icon chip) → 10 → `__value` (**33**) →
6 → `__delta` (**24.19**) → 14 → `__spark` (**56**) → 10 → `__foot` (**31.19** = 1 px rule + 12 pad + 18.2
line) → 16 padding-bottom. Card padding is `20px 20px 16px`; the sum plus two 1 px borders is **256.38**.

Inside card 1 at 1440: card 120–406.5 × 153–409.38; `__top` y 174 (icon 34, label 19.59); value y 218;
pill y 257; spark y 295.19; foot y 361.19.

## Section-by-section fidelity notes

**1 — The ground.** `#eef1f6`, a **cool** blue-grey (R 238 / G 241 / B 246) that sits between Tailwind's
`slate-50` `#f8fafc` and `slate-100` `#f1f5f9` but is **not on the ramp**. The cards are pure `#fff`. This is
the family's first cool ground: Nameplate used warm paper, Marketrow `#f1f1ef`, Octavo paper, Tierline
`#0c0f1d`, Plaudit `#fffdf9`. Getting the two off-ramp greys (`#eef1f6` here, `#eef2f7` for the footnote rule)
wrong makes the page look like a stock Tailwind dashboard, which it deliberately is not.

**2 — The head.** A **bar**, not a centred block: `flex; flex-wrap: wrap; align-items: flex-end;
justify-content: space-between; gap: 16px; margin-bottom: 24px`. Left: `h1` "Overview" at **28/700/−.02em**
with `line-height: normal` (34 box), sub **15/400** `#475569` with `margin-top: 4`. Right: a **208 × 37**
bordered chip — `padding: 9px 14px`, `1px solid #d8dee8`, radius **10**, `#fff`, **14/500** `#334155`, a
**16 × 16** calendar glyph, `gap: 8`, text `26 Aug – 24 Sep 2026` (**en dash**). Bottom-aligned, so the chip's
bottom edge (129) is the head's bottom edge.

**3 — The grid is arithmetic.** `repeat(auto-fit, minmax(240px, 1fr))`, **gap 18 fixed**, `list-style: none`.
There is **no width query in the file**. 4 columns while `gridWidth ≥ 1,014` (240·4 + 18·3) → **≥ 1,046**
viewport; 3 while ≥ 756 → **788–1,045**; 2 while ≥ 498 → **530–787**; 1 at **≤ 529**. Bisected to the pixel:
**1,046 → 4**, **1,045 → 3**, **788 → 3**, **787 → 2**, **530 → 2**, **529 → 1**. Same mechanism as
Nameplate / Marketrow / Plaudit (opposite of Tierline's fixed 3 tracks + one 880 px query).

**4 — The card plate.** `#fff`, `border: 1px solid #e2e8f0`, radius **16**, `padding: 20px 20px 16px`,
`0 1px 2px rgba(15,23,42,.04)`, `14px/1.4`, `position: relative`, `display: flex; flex-direction: column`.
Only three radii exist on the page: **16** (card), **10** (icon chip, date chip) and **999** (delta pill).

**5 — Four accents, each doing exactly three jobs.** `--cl-card06-accent` is set **inline** on each `<li>`
(`#4f46e5`, `#0891b2`, `#db2777`, `#16a34a` — stock indigo/cyan/pink/green 600). It drives the **icon glyph
colour**, the **12 % icon tint** (`color-mix(in srgb, var(--accent) 12%, #fff)`; sheet fallback `#f1f5f9`), and
the **sparkline stroke + both gradient stops**. It never touches the value, the label, the border, the pill or
the footnote — a "brand-coloured metric" is the failure mode.

**6 — Delta pills are sentiment, not direction.** `--cl-card06-good: #15803d` (green-700) on `#dcfce7`
(green-100); `--cl-card06-bad: #be123c` (rose-700) on `#ffe4e6` (rose-100). Card 4 (**Refund rate**) carries a
**down** arrow in **green** — "0.6 pts decrease, an improvement" — and card 3 carries a down arrow in red.
Pills are `inline-flex; gap: 4; align-self: flex-start; padding: 3px 8px 3px 6px; radius 999; 13/600;
tabular-nums`; measured widths **73 / 64 / 75 / 76**, height **24.19**.

**7 — The sparkline.** `viewBox="0 0 120 40"`, `preserveAspectRatio="none"`, rendered into **244.5 × 56** →
x scale **2.0375**, y scale **1.4**. The line keeps its **2 px** weight only because of
`vector-effect: non-scaling-stroke`; without it the horizontal stretch thickens it to ~4.07 px. The area path is
the line path closed with `L120 40 L0 40 Z`, filled with a per-card `linearGradient` (`x1=0 x2=0 y1=0 y2=1`,
accent at **.28 → 0**). The svg is `display: block; width: 100%; height: 56px; margin: 14px 0 10px;
overflow: visible`.

**8 — Values are tabular.** `font-variant-numeric: tabular-nums` on `__value` (30/700/1.1/−.03em) and on
`__delta` (13/600) — the reason `$84,210` and `1,286` line up on the left edge across the row even though the
counts differ.

**9 — Hover is the only motion.** `transition: border-color .2s ease, box-shadow .2s ease`; hover raises the
border to `#cbd5e1` and the shadow to `0 10px 28px -18px rgba(15,23,42,.35)` (note the **negative spread** —
the shadow is a close contact shadow, not a lift). Under `prefers-reduced-motion: reduce` the computed
transition is **`none`**. There are no keyframes, no scroll reveal, no `[data-animate]`, no observer.

## What is different from the five earlier `card` variants

| property         | card-01 nameplate        | card-02 marketrow          | card-03 octavo              | card-04 tierline           | card-05 plaudit                        | **card-06 (this one)**                                  |
| ---------------- | ------------------------ | -------------------------- | --------------------------- | -------------------------- | -------------------------------------- | ------------------------------------------------------- |
| ground           | paper `#fbfaf7`          | `#f1f1ef`                  | paper                       | near-black `#0c0f1d`       | warm paper `#fffdf9`                   | **cool grey `#eef1f6`**                                 |
| card plate       | white, radius 22, shadow | white, radius 18, shadow   | **no plate at all**         | dark/white, radius 22      | three tints, radius 24, no shadow      | **white, radius 16, 1 px border + whisper shadow**       |
| row relationship | four peers               | four peers + chips         | three peers                 | featured is 58.5 px taller | peers, one inverted by paint only      | **four peers, identical height by construction**         |
| headline face    | Plus Jakarta Sans        | DM Sans                    | Fraunces (cards)            | Manrope                    | Newsreader 500 (serif)                 | **Inter 700 on a single-face page**                      |
| the "content"    | portraits + names        | product photos + prices    | cover photos + chips        | plan tiers + ribbon        | serif italic quotes + stars            | **numbers, deltas and 4 hand-drawn polylines**            |
| colour model     | one brand colour         | sale chips                 | one accent                  | gradient + glow            | three tints, accent per card           | **four accents, each lives only in the icon + spark**     |
| media            | 4 `<img>`                | 4 product images           | 3 cover photos              | 0 `<img>`, 13 ticks        | 0 `<img>`, 18 SVGs                     | **0 `<img>`, 13 SVGs (4 of them chart paths)**            |
| interactivity    | card links               | add-to-bag toggle          | card links                  | 3 CTAs (`href="#"`)        | **none at all**                        | **hover only — 0 focusable**                             |
| width queries    | `auto-fit`               | `auto-fit`                 | `auto-fit`                  | fixed 3 + one 880 query    | `auto-fit`, 0 `@media`                 | **`auto-fit`, 0 width query, 1 reduced-motion query**     |
| height behaviour | content-driven           | content-driven             | content-driven              | one featured card          | non-monotonic (quotes)                 | **constant 256.38 at every width**                        |

## Traps (all measured, all cheap to repeat)

1. **Eight font files, two binaries — and the "bold" is fake.** `inter-400-latin.woff2`,
   `inter-500-latin.woff2`, `inter-600-latin.woff2` and `inter-700-latin.woff2` are **byte-identical**
   (sha256 `c9407645…`, 48,432 B); the four `latin-ext` files likewise (`a28eb6d3…`, 85,272 B). Chromium
   registers four faces and reports them all `loaded`, but they are the **Regular** cut with synthetic
   emboldening: measured advance of `"$84,210"` at 30 px is **114.00 / 118.00 / 119.00 / 119.00** at 400 / 500 /
   600 / 700, against Google Inter's real **114.00 / 115.00 / 120.00 / 121.00**. Ship the four real weights from
   Google Fonts and disclose that the ink is ~1.7 % wider and lighter than the reference's faux bold. **Do not**
   add `font-synthesis: none` — that would flatten the reference's 700 to a regular, the opposite of the fix.
2. **`preserveAspectRatio="none"` without `non-scaling-stroke` destroys the line.** The svg is stretched 2.04×
   horizontally and 1.4× vertically; `stroke-width: 2` on a stretched viewBox renders ~4.07 px thick (and
   slightly trapezoidal at joins). `.cl-card06__line` sets `vector-effect: non-scaling-stroke` — carry that
   declaration verbatim, in the CSS or as `vectorEffect` in JSX.
3. **The gradients' ids are global.** `cl-card06-g1 … g4` are hard-coded strings. In React, generate a unique id
   per instance (`useId`) — otherwise a second instance on the same page silently adopts the first one's
   gradient and the "accent" stops lie.
4. **`content-box` container.** `max-width: 1200px` + `padding: 0 16px` measures **1,232** outer because the
   sheet's reset leaves `box-sizing` at the browser default. In Tailwind (border-box) `max-w-[1200px] px-4`
   gives a **1,168** content box and **278.5** px cards — an 8 px error on every track. Write
   `max-w-[1232px] px-4`.
5. **The `good`/`bad` classes contradict the arrows.** Model `tone` and `dir` as **separate fields**; card 4 is
   `↓` + `good`. Any `sign → colour` derivation is a visible defect, and it is exactly the kind of "cleanup" a
   later refactor performs without noticing.
6. **The hidden word must not widen the pill.** `.cl-card06__sr` is `position: absolute` inside the
   relatively-positioned **card** (not the pill), so it leaves the pill's flex flow entirely. Tailwind's
   `sr-only` is also absolute — fine — but `hidden`, `text-[0px]` or `opacity-0` are not: they change the pill's
   measured width (73 / 64 / 75 / 76) or its height.
7. **The card height is stable only because the copy is short.** Every internal box is fixed (34 / 33 / 24.19 /
   56 / 31.19) and every label and footnote is one line at ≥ 320. A longer metric name ("Average order value")
   wraps, adds 19.6 px and breaks the 256.38 assertion — the check is valid for the reference copy only.
8. **`document.scrollHeight` lies below the viewport height.** At 1,440 it reports **900** while the band is
   **481.38**. Measure the band element (`.cl-card06-demo`), not the document.
9. **`color-mix()` serialises as `color(srgb …)`.** Assert `background-color` against
   `color(srgb 0.917176 0.912941 0.987765)` (or compare channels), not against a hex string — the pixels are
   right and a hex comparison fails.
10. **The head's two thresholds are not where a breakpoint would put them.** Chip drops at **699** (needs 668
    content = 444 + 16 + 208) and the sub-copy wraps at **475** (needs 444). Neither is a Tailwind step; both
    are `flex-wrap` arithmetic on intrinsic widths, so a `md:`/`sm:` rewrite lands on the wrong pixels.
11. **`.cl-icon` is dead a fifth time**, and the sheet also leaves one markup class **unstyled**:
    `.cl-card06__area` has no rule at all — its fill comes from the `fill="url(#…)"` attribute. A "missing
    rule" here is the reference's shape, not a bug to fix.
12. **Band heights are non-monotonic at 699/700.** At 700 the head is 57 and the band **695.75**; at 699 the head
    is 110 and the band **748.63** — the band grows 53 px as the viewport shrinks 1 px. Sample both sides.
13. **No `<h3>` and no landmark above `<main>`.** Four `h2`s named after metrics is the reference's whole
    outline; don't demote them to `<p>` and don't wrap the grid in a labelled `<section>`.
14. **The archive's README lies twice** (`js/snippet.js`, `images/`). Read
    `zipfile.ZipFile(...).infolist()` before believing any claim about a `card-*` file set — the three
    directories are `card-06/`, `css/`, `fonts/`.

## Artifacts

`openspec/specs/template-statline/spec.md` (751 lines, 11 requirements / 32 scenarios,
`openspec validate template-statline --type spec` → **valid**) · `docs/templates/statline/tasks.md` (149 lines) ·
`docs/templates/statline/design-notes.md` (this file). Row when it ships: new `## Bootstrap Cards (20)` section
between `## Bootstrap Carousels (20)` (line ~710) and `## Bootstrap Checkboxes (20)` (line ~733) — *Card 06* →
`statline`.
Next prep in the family: **`card-07`**.
