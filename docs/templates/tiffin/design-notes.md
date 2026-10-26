# Tiffin — design notes (`card-15` → `apps/tiffin`)

Everything below was measured on **2026-10-26** against the live preview
`https://preview.colorlib.com/theme/bootstrap/card-15/` (HTTP 200, 3,893 B) with `curl -4` +
Playwright 1.62 Chromium, and cross-checked against the source archive
`preview.colorlib.com/downloads/free/card-15.zip` (304,887 B). Tokens come from the stylesheet
(`css/style.css`, 7,178 B, sha256 `3efaf82a…`) and from `getComputedStyle` at 1,440; where the two
disagree the live render wins, and the disagreements are listed in §4.

## 1 — What this design actually is

The family's **first card whose media escapes the card's rectangle**. Fourteen siblings before it keep
their photograph, nameplate or price inside the card's own box. This one floats a **176 px circular
plate 76 px above the card's top edge**, and lets it come to rest with its photo's bottom edge exactly
on the tinted band's bottom edge.

```
            ┌─────────┐        ← plate (176 Ø, 8 px white ring), top: -76
            │  dish   │
      ╭─────┴─────────┴─────╮  ← card top; band ::before 92 tall, radius 28 28 0 0
      │ ▓▓▓▓▓ band ▓▓▓▓▓▓▓ │  ← tint: peach / sage / butter
      ├─────────────────────┤  ← photo bottom = band bottom (+92)
      │      MAIN · ITALIAN │  ← +116 from card top (24 below the plate)
      │  Sheet-Pan Marghe…  │  ← serif, two lines
      │  A no-knead dough…  │  ← muted blurb, flex: 1
      │ ┈ TIME ┈ LEVEL ┈ … │  ← dashed 3-cell table
      │  (Vegetarian)(S4)   │  ← pills in the card's tint
      ╰─────────────────────╯
```

Because the plate overhangs, **all the air in the layout is plate air**: the header's `margin-bottom`
and the grid's `row-gap` are both **96 px**, which is **76** (plate above the card) **+ 20** (visible
gap). Nothing else on the page uses 96.

The card's information order is a menu entry, not a UI card: *what course it is → what the dish is →
one sentence of persuasion → the three numbers a cook checks → what you can eat it as*. No price, no
author, no avatar, no rating, no CTA — the only link is the dish title.

Cross-card variance is carried by **three devices**, and using all three is what makes the row look
designed rather than repeated:

- **tint** — peach / sage / butter, used by **both** the band and that card's pills;
- **difficulty** — 2 / 1 / 3 filled dots out of three, the only place the row differs in rhythm;
- **copy length** — 2 / 2 / 3 blurb lines and three different tag pairs.

## 2 — Structure order (1:1, nothing elided)

```
main.cl-card15-demo                       content 1140, padding 72/16
└─ header.cl-card15-demo__head            text-align center, margin-bottom 96
   ├─ p.cl-card15-demo__eyebrow           "This week's menu"
   └─ h1.cl-card15-demo__title            "Weeknight dinners, sorted"
└─ div.cl-card15-grid                     grid, auto-fit minmax(280,1fr), gap 96/26
   ├─ article.cl-card15                   ×3, style="--cl-card15-tint: …", radius 28, padding 116/26/24
   │  ├─ (::before)                       band: height 92, radius 28 28 0 0, bg tint
   │  ├─ div.cl-card15__plate             absolute top -76, 176 Ø, border 8 #fff, radius 50%, overflow hidden
   │  │  └─ img.cl-card15__img            700×520 source, 160×160 rendered, object-fit cover
   │  ├─ p.cl-card15__course              "Main · Italian"
   │  ├─ h2.cl-card15__title
   │  │  └─ a.cl-card15__link             href="#"  (::after overlay, inset 0, radius 28, z 1)
   │  ├─ p.cl-card15__desc                muted, flex: 1
   │  ├─ dl.cl-card15__stats              grid 3×1fr, padding 14 0, dashed top+bottom
   │  │  ├─ div > dt "Time"         + dd "45 min"
   │  │  ├─ div > dt "Level"        + dd > span.cl-card15__dots[data-level=2] > i×3  + "Medium"
   │  │  └─ div > dt "Per serving"  + dd "610 kcal"
   │  └─ ul.cl-card15__tags               aria-label="Tags", flex-wrap centre, gap 6
   │     └─ li ×2                          padding 4/11, radius 999, bg tint
   └─ (nothing after the grid)
```

No footer, no CTA, no pagination, no logo, no nav. The snippet is three cards and a headline.

## 3 — The composition is five numbers

| number            | value     | source                                    |
| ----------------- | --------: | ----------------------------------------- |
| band height       |  **92 px** | `.cl-card15::before { height: 92px }`     |
| plate top         | **−76 px** | `.cl-card15__plate { top: -76px }`        |
| plate diameter    | **176 px** | `width/height: 176px`, border-box          |
| ring              |   **8 px** | `border: 8px solid #fff`                   |
| card padding-top  | **116 px** | `padding: 116px 26px 24px`                 |

They are not independent: `−76 + 8 + 160 = 92`. The **photo's bottom edge** lands on the **band's
bottom edge**, and the 8 px ring is the only thing that crosses into the white body. Measured at 1,440:
card top **244.5** → band bottom **336.5** → photo bottom **336.5** → plate bottom **344.5** → course
top **360.5**.

Consequences a port must reproduce:

- **No `overflow: hidden` on the card.** The plate is 76 px outside the card's box. The card's rounded
  top corners come from the *band's* radius (`28 28 0 0`), not from clipping a header.
- **The plate is centred with `left: 50%` + `translateX(-50%)`**, so its x is `(card − 176) / 2`
  = **93.33** at 1,440 (**243.33** absolute). The hover rotation must keep that translate:
  `translateX(-50%) rotate(12deg)`, not `rotate(12deg)` alone.
- **The ring is part of the plate's 176**, not an outline — `border-box`, `border: 8px`, and the image
  fills the remaining 160.

## 4 — Measured traps (things that look like details and are not)

1. **96 px is 76 + 20, twice.** Header `margin-bottom: 96` and grid `row-gap: 96` are plate clearance.
   A "sensible" 32–48 px collapses the composition: at 48 the plate would sit **28 px inside** the
   headline. Both numbers must stay 96, and they must change *together* if the plate ever changes size.
2. **`max-width: 1140` with no `box-sizing` moves the box.** `.cl-card15-demo` has default `content-box`
   (the sheet's `box-sizing` rule targets `.cl-card15 *`, not `main`), so the outer box is **1,172** at
   x **134** and the content starts at x **150**. A Tailwind port of `max-w-[1140px] px-4` gets a
   **1,108** px content box — 32 px narrow, every track and every wrap threshold off by a few px. Use
   `max-w-[1172px] px-4`, or put the padding outside the 1,140 measure.
3. **The tint drives two surfaces.** `--cl-card15-tint` is set **inline per card** and consumed by the
   band's `::before` *and* by the tag pills. A port that hardcodes three band colours and lets pills
   inherit a default will ship mismatched cards the moment the data changes. One `tint` field, two
   consumers.
4. **The blurb is `flex: 1`, so its height is not its content height.** At 1,440 all three blurb boxes
   measure **67.5**, but card 3 shows **3** line rects inside it and cards 1–2 show **2**. If you assert
   blurb height against a text-measure expectation you will "fix" a non-bug; the stretch is what keeps
   the stat table and pills aligned across the row.
5. **Card heights are content-driven and therefore non-monotonic.** Narrowing the card wraps more text,
   so cards *grow* as the viewport shrinks: **434.5** at 1,440 → **452.5** at 1,140 → **481.25** at 992 →
   **503.75** at 950 → **412** at 900 (two columns, wider cards again) → **503.75** at 640 → **383.25**
   at 600 (one column, widest card) → **452.5** at 344 → **503.75** at 320. There is no `min-height`
   anywhere; do not add one to "stabilise" the grid.
6. **Rows are sized independently.** At 800 the cards measure **412 / 412 / 434.5** — card 3 is alone in
   row 2 and its row is its own. Only cards in the same row share a height.
7. **`.cl-card15__stats div:nth-child(2) dd { flex-direction: row }`** is a positional rule: "the second
   field is the level". Reorder the fields and the meter stacks vertically. Key it off the data.
8. **The dot border is declared `1.5px` and computed `1px`.** Chromium's computed style rounds the used
   value at DPR 1. Reproduce 1.5; do not "correct" it from a computed-style reading (the same trap the
   sibling cards hit with pseudo-element outlines).
9. **The `h1` clamp floors at 727.** `clamp(32px, 4.4vw, 50px)`: floor reached at `32 / 0.044 = 727.27`,
   so **every** viewport ≤ 727 renders 32 px / 33.6 — including 390 and 320. The title is **one line
   down to 398** (box 33.59) and **two from 397** (box 67.19).
10. **The course line must not ride the tint.** Accent `#c2410c` on peach measures **4.34:1** — under AA
    for normal text. In the reference the course sits **24 px below** the band, on white (**5.18:1**).
    Shortening `padding-top` or growing the band moves it onto the tint and silently breaks contrast.
11. **The level cell stacks its `dd` as a column** (`flex-direction: column`, `gap: 4`) except for the
    level cell, which is `row` with `gap: 6`. That 2 px difference is what makes the dots sit on the
    word's baseline instead of above it.
12. **The plate rotates 12° about its centre and grows its box.** 176 → **208.7** (`176 × (cos 12° +
    sin 12°)`), i.e. **16.35 px** each side; the 26 px column gap clears it by **9.65 px**. That is the
    entire tolerance for the hover effect — never shrink the gap "to tighten the row".
13. **The hover trigger is the card.** `.cl-card15:hover .cl-card15__plate` — hovering the band or the
    stat table spins the plate too. Porting it as `a:hover` shrinks the effect to the title's inline box
    (307 px of a 362 px card).
14. **The link overlay covers the plate.** `.cl-card15__link::after` is `inset: 0` at `z-index: 1`, so
    the plate, the band and the stats are all part of one hit area. Do not add a second interactive
    element inside the card.

## 5 — Colour decisions to carry into `@theme`

```css
--color-ground:      #fbf6ee;  /* page; warm cream, the only non-white surface        */
--color-ink:         #2a1d12;  /* headline, dish titles, stat values (16.37:1 white)  */
--color-muted:       #5c4a3a;  /* blurb, stat labels (8.41:1 on white)                */
--color-accent:      #c2410c;  /* course line, dot fills, focus ring (5.18:1 white)   */
--color-eyebrow:     #9a3412;  /* page eyebrow only — a darker rust, not the accent   */
--color-tag-ink:     #3d2a18;  /* pill text (11.41:1 on peach)                        */
--color-rule:        #e5d8c8;  /* the dashed table rules (1.40:1 — decorative)        */
--color-tint-peach:  #fde7d9;  /* card 1 band + pills                                 */
--color-tint-sage:   #e3f1dc;  /* card 2                                              */
--color-tint-butter: #fbeec2;  /* card 3                                              */
```

Contrast, measured: ink on white **16.37:1**, ink on ground **15.21:1**, muted **8.41:1**, accent
**5.18:1**, eyebrow on ground **6.79:1**, pill ink on its three tints **11.41 / 11.59 / 11.74:1**. The
only pair that fails AA is **accent on a tint (4.34:1)** — which the reference never renders, and which
§4.10 explains how to keep out of the port.

Two rusts, one palette: `#9a3412` is the page-level label, `#c2410c` is everything inside a card. Their
relative luminances are **0.094** and **0.153** — **39 %** apart — so they are easy to merge by accident
when read off a screenshot. The eyebrow is the darker of the two.

## 6 — Typography: one serif, one system stack

| role                 | face                | size / weight        |
| -------------------- | ------------------- | -------------------- |
| page headline        | DM Serif Display    | clamp(32, 4.4vw, 50) / 400 |
| dish titles          | DM Serif Display    | 25 / 400             |
| course, labels, tags, blurb, values | **system-ui stack** | 13 / 12 / 13 / 15 / 15 |

The archive ships **exactly two** `woff2` files (latin 17,844 B + latin-ext 6,800 B = **24,644 B**, 8 % of
the download) and **one** weight — 400. There is no 500/700 serif and no sans webfont at all; the body
face is the OS UI font. Load one Google Fonts `<link>` for DM Serif Display at 400 and leave the body
alone. Adding a sans webfont (Inter, Poppins) would restyle six of the eight roles at once.

## 7 — Behaviour: there is none, and that is the point

The archive has **no `js/` directory** (12 entries: 5 dirs + html + css + README + 3 jpg + 2 woff2) and
the page loads **no script of its own**. The README's "`js/snippet.js` — the behaviour" is stale
documentation from a sibling card. What exists is CSS only:

```css
.cl-card15__plate { transition: transform .6s cubic-bezier(.2, .7, .2, 1); }
.cl-card15:hover .cl-card15__plate { transform: translateX(-50%) rotate(12deg); }
.cl-card15__link:focus-visible::after { outline: 3px solid var(--cl-card15-accent); outline-offset: 4px; }
@media (prefers-reduced-motion: reduce) {
  .cl-card15__plate { transition: none; }
  .cl-card15:hover .cl-card15__plate { transform: translateX(-50%); }
}
```

So the port is a **pure render**: no state, no effect, no timer. That also means the 100 % coverage is
cheap (render + assertions) and there is no `react(set-state-in-effect)` risk anywhere. Resist the
temptation to add a save heart, a "cook this" button or a diet filter because the sibling cards have
one — this design's whole character is that it is a printed menu.

## 8 — Responsive behaviour (measured)

| viewport | columns | card width | card height(s)     | what changes                                   |
| -------: | ------- | ---------: | ------------------ | ---------------------------------------------- |
|    1,440 | 3       |    362.66  | 434.5 ×3           | reference frame                                |
|    1,140 | 3       |    352     | 452.5 ×3           | title/blurb rewrap                             |
|    1,024 | 3       |    313.33  | 452.5 ×3           | —                                              |
|      950 | 3       |    288.66  | 503.75 ×3          | blurb 3 lines; stat cells at ~79 px each       |
|  **924** | **3**   | **280.00** | 503.75 ×3          | last 3-column width (tracks exactly 280)       |
|  **923** | **2**   | **432.50** | content            | 3 → 2 columns                                  |
|      800 | 2       |    371     | 412 / 412 / 434.5  | row 2 sized on its own                         |
|  **618** | **2**   | **280.00** | content            | last 2-column width                            |
|  **617** | **1**   | **585**    | content            | 2 → 1 column                                   |
|      600 | 1       |    568     | 383.25 ×3          | widest card → shortest cards                   |
|      390 | 1       |    358     | 412 / 412 / 434.5  | h1 2 lines, blurbs 3 lines                     |
|      320 | 1       |    288     | 503.75 / 481.25 / 475 | stat cells still 3-across, pills fit       |

At every one of these the plate stays **176 px** and the band stays **92 px** — the card scales, the
plate does not. At 320 the plate is **61 %** of the card's width and still reads as a plate; that ratio
is the reason the component has a hard minimum card width at all.

## 9 — Open questions the implementer can settle

- **Where does a dish title link go?** The reference has `href="#"` ×3. A single-screen demo can ship a
  real `/recipes/<slug>` route or a non-anchor; either way `a[href="#"]` must be 0. Prefer a route — the
  overlay hit area implies navigation.
- **How is the ordinal exposed?** The dots are `aria-hidden` and only the word survives. Two clean
  options: make the `<dd>`'s text `Level 2 of 3 · Medium`, or put `aria-label="Level 2 of 3"` on the
  `<dd>` and keep the word visible. Either is better than three cards announcing "Medium".
- **Do the tints belong in data or in CSS?** They are content (each recipe card has a tint). Keep `tint`
  in `data.ts` and pass it as a CSS variable so band + pills read one source; do not write three
  `.tint-*` classes that a new recipe would have to guess.
- **Is the 12° rotation worth keeping?** Yes — it is the only motion in the design and it is cheap. But
  it must be `transition-transform` only (never `transition-all`), and it must keep the `-50%`
  translate, or the plate slides sideways as it turns.
- **The redesigned footer.** The reference has none. One Component Dock line under the grid, same
  content column, small and muted — do not invent a site footer with columns and links.
