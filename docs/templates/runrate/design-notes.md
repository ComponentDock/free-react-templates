# Runrate — design notes (ColorLib **Pricing Table V06**, slug `pricing-table-06`)

Research record for `openspec/specs/template-runrate/spec.md`. Everything here was read off the live preview and its
stylesheet on **2026-11-11**, reproduced against the archive twin, and then re-measured on a **replica** (the archive's
own CSS + the prescribed copy + the served Google face) that is the port's own reference.

## Source inventory

| item                   | value                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| ColorLib page          | https://colorlib.com/wp/template/pricing-table-06/ — **200, 114,070 B** (2nd fetch 114,062 B)                                         |
| `h1` / `datePublished` | "Pricing Table V06" / **2026-09-25T15:12:49+00:00**                                                                                   |
| meta description       | _"A dark usage pricing calculator for a hosted API. Free download, no jQuery or plugins."_ — accurate                                 |
| live preview           | `theme/bootstrap/pricing-table-06/` — **200, 4,550 B**                                                                                |
| slug-only / `bb/`      | `theme/pricing-table-06/` **404 (9 B)** · `theme/bb/pricing-table-06/` **404 (9 B)**                                                  |
| stylesheet             | `css/style.css?v=3931283e` — **10,930 B**, sha256 `807b65acd15709bc14185e7d61e8ae917dfc4c3b083c0032f840261f19bc9347`                  |
| script                 | `js/snippet.js?v=1b70d6be` — **3,414 B**, sha256 `b6a2e397696b4115505ab856ee720f2305d91f74706600ba446b580bd189052a`                   |
| archive                | `downloads/free/pricing-table-06.zip` — **200, 384,421 B**                                                                            |
| archive members        | `index.html` 4,347 · `css/style.css` 10,930 · `js/snippet.js` 3,414 · `README.md` 1,278 · `fonts/` 8 woff2                            |
| twin proof             | CSS + JS sha256 **identical** live ↔ archive → live preview verified, archive is its un-versioned twin                                |
| HTML delta             | live 4,550 vs archive 4,347 = **203 B of `<head>`** (noindex metas, `cdnjs.cloud` `dns-prefetch`, `fetchpriority`, two `?v=` queries) |
| screenshot             | `pricing-table-06.jpg` — **200, 30,250 B, 1200 × 972**, **AVIF behind `.jpg`** (`file` → ISO Media, AVIF; PIL opens it)               |
| README lies            | advertises `images/` — the zip has none and the page has **zero images** (7th variant in a row)                                       |

## CSS census

| fact              | value                                                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| custom properties | **6** — five on `.cl-pricing06`, `--cl-pricing06-fill` written inline per slider                                                                    |
| rule blocks       | 71 (60 of them the `all: revert` host firewall — **not ported**)                                                                                    |
| media queries     | **2** — `(max-width: 860px)` and `(prefers-reduced-motion: reduce)`                                                                                 |
| transitions       | **2** — `flex-grow .35s ease` (bar segments), `background-color .2s ease` (CTA)                                                                     |
| keyframes         | **0**                                                                                                                                               |
| gradients         | **2** — the page's radial teal glow, the track's hard stop                                                                                          |
| shadows           | **4** — card, `inset -2px 0` separator, thumb halo, two focus rings                                                                                 |
| hex colours       | 18 (`#0b1120 #0d9488 #0f172a #111a2e #134e4a #14b8a6 #22304a #2a3a57 #2dd4bf #334155 #33476b #3b82f6 #475569 #a3b0c2 #e2e8f0 #f43f5e #f8fafc #fff`) |
| rgba              | 4 — `rgba(45,212,191,.06/.12/.35)`, `rgba(0,0,0,.6)`                                                                                                |
| radii             | 3 · 6 · 12 · 14 · 20 · 999                                                                                                                          |
| markup classes    | 37, all styled; `.cl-icon` is styled and **never used** (dead rule, not ported)                                                                     |
| `:has()`          | one rule — `__check:has(__box:checked)`; replaced by a state attribute in the port                                                                  |

## DOM skeleton (reference, 1440 × 900)

```
main.cl-pricing06-demo            1440 × 859.19   pad 96 16, radial glow over #0b1120
└ section.cl-pricing06            1100 × 667.19 @ (170,96)   max-width 1100
  ├ header.cl-pricing06__head      760 × 142.94 @ y 96       margin-bottom 40
  │ ├ p.__eyebrow                   20.14 @ y 96             13/700 .08em up #2dd4bf
  │ ├ h1.__title                    49.67 @ y 126.14        46/700 -.03em 1.08
  │ └ p.__lede                      51.13 @ y 187.81        16.5/25.575 #a3b0c2 (2 lines)
  └ div.__body                    1100 × 484.25 @ y 278.94 grid 1.35fr/1fr gap 24, align start
    ├ form.__controls              618.13 × 441.81 @ (170,278.94)  grid gap 34 pad 38 radius 20 #111a2e
    │ ├ div.__field                540.13 × 109.22 @ y 317.94
    │ │ ├ div.__row                540.13 × 40.3    flex baseline space-between gap 12 mb 12
    │ │ │ ├ label.__label          175 × 23.25 @ y 330.94   15/600
    │ │ │ └ span.__value           30.97 × 40.3 @ x 718.16  26/700 -.02em tabular #fff
    │ │ ├ input[range]             540.13 × 26 @ y 370.23   min 0 max 10 step 1 value 4
    │ │ └ p.__hint                 540.13 × 20.92 @ y 406.23 13.5/20.925 mt 10
    │ ├ div.__field                540.13 × 109.22 @ y 461.16  (min 0 max 11 value 4)
    │ └ label.__check              540.13 × 77.38 @ y 604.38  pad 16 radius 14 dashed 1px gap 12
    │   ├ input[checkbox]          20 × 20 @ (226,622.38)    accent #2dd4bf, margin 1 0 0
    │   └ span.__check-text        474.13 × 43.38 @ (258,621.38) 14/21.7, <strong> #fff (2 lines)
    └ aside.__bill                 457.88 × 484.25 @ (812.13,278.94) #f8fafc radius 20 pad 32 sticky 24
      ├ h2.__bill-title            393.88 × 21.69 @ y 310.94 14/600 #475569
      ├ p.__total                  393.88 × 56.69 @ y 336.63 margin 4 0 18
      │ └ output.__out             161.05 wide              54/700 -.04em 1.05 tabular #0f172a
      ├ div.__bar                  393.88 × 10 @ y 411.31    4 × span, flex-grow = $
      ├ dl.__lines                 393.88 × 165.88 @ y 439.31 mb 24
      │ └ div.__line × 4           393.88 × 41.47            pad 9 0, border-top 1px #e2e8f0
      │   ├ dt (flex gap 10 #334155) → span.__key 10 × 10 r3 aria-hidden + text
      │   └ dd (600 tabular, right)  $25.00 / $9.00 / $5.40 / $0.00
      ├ p.__vh (visually hidden)    role=status aria-live=polite
      ├ a.__cta                    393.88 × 49.25 @ y 629.19 pad 13 18 radius 12 #0f172a
      └ p.__fine                   393.88 × 38.75 @ y 692.44 12.5/19.375 #475569 mt 14
```

## The token block, as the port should write it

```css
@theme {
  /* dark ground + panel */
  --color-ground: #0b1120; /* body + wrapper */
  --color-panel: #111a2e; /* the control panel */
  --color-panel-line: #22304a; /* its 1px border */
  --color-ink: #e2e8f0; /* section base text */
  --color-muted: #a3b0c2; /* lede, hints, support row */
  --color-teal: #2dd4bf; /* eyebrow, track fill, accent-color, focus */

  /* the light card */
  --color-card: #f8fafc;
  --color-card-ink: #0f172a;
  --color-card-muted: #475569; /* title + fine print */
  --color-card-dt: #334155; /* row labels */
  --color-card-rule: #e2e8f0; /* 1px row rules + bar ground */

  /* the four segments (bar + legend key share the value) */
  --color-seg-base: #0f172a;
  --color-seg-calls: #14b8a6;
  --color-seg-storage: #3b82f6;
  --color-seg-support: #f43f5e;

  /* CTA */
  --color-cta: #0f172a;
  --color-cta-hover: #134e4a;
  --color-cta-ring: #0d9488;

  /* FIXED control boundaries (reference values fail 1.4.11) */
  --color-track-rest: #506890; /* was #2a3a57 — 1.52 : 1  → 3.07 : 1 */
  --color-check-line: #546c8f; /* was #33476b — 1.86 : 1  → 3.24 : 1 */
}
```

Radii tokens: `--radius-panel: 20px`, `--radius-check: 14px`, `--radius-cta: 12px`, `--radius-thumb: 6px`,
`--radius-key: 3px`, `--radius-pill: 999px`.

## Screenshot analysis (AVIF, 1200 × 972, ≈0.79 of 1440)

- **Frame**: a macOS browser mock-up — traffic lights, a `preview.colorlib.com` URL pill, a rounded window with a large
  soft drop shadow on a grey surround, the page occupying ~90 % of the frame. **Never reproduce the frame, its corners or
  its shadow**; the shipped page is edge-to-edge.
- **Ground**: a near-black navy that reads almost black at the edges, lightened by a single **teal glow** in the
  **top-right** (the radial gradient's centre is at 80 % / 0 %, so the glow washes the headline's right end and the
  card's top-right corner). No second light source, no vignette.
- **Type**: one family, three weights. The headline is white and **one line** at this width; the lede is two lines of a
  desaturated blue-grey. Everything on the dark side is either white (`#fff` for headline/value/strong) or that same
  blue-grey (`#a3b0c2`) except the eyebrow, which is the only teal _text_ on the page.
- **Left panel**: reads as a slightly lighter navy card floating on the ground, its boundary barely visible (that is the
  1 px `#22304a` border). Two absolutely identical control stacks; each row is label-left / big number-right, with the
  number visibly larger than the label and set on the row's baseline. The sliders are thin (6 px) with a **teal filled
  half** and a grey-blue rest, and the handle is a **small white rounded square**, not a circle — the single most
  distinctive shape on the page.
- **Support row**: a dashed outline that visibly says "optional", with a white native checkbox and a sentence whose first
  two words are bold white; at 1440 the sentence wraps to two lines, so the dashed box is noticeably taller than a
  single-line row.
- **Bill card**: the only light surface — near-white, no border, a soft shadow that lifts it off the navy. Reading order:
  small grey eyebrow-sized title, then a very large near-black total, then a **thin stacked bar** in four colours, then
  four hairline-separated rows of label + amount with small coloured square keys, then a near-black full-width button,
  then two lines of small grey fine print.
- **The bar is the visual summary and it is honest**: at the defaults the dark platform-fee segment is the widest single
  block, the teal calls segment is second, the blue storage segment is a sliver, and the rose support segment is
  **invisible** (zero width). A reader who checks the 50/50 feel of the card against `$25 / $9 / $5.40 / $0` sees them
  match.
- **Empty space**: the left panel's stack ends well above the card's bottom edge, leaving a ~42 px band of panel-column
  ground. That asymmetry is the reference's own (the grid is `align-items: start`), not a crop artefact.

## Section-by-section fidelity notes

**1. The ground and the glow.** One element carries both: the wrapper's `background` is a two-layer shorthand —
`radial-gradient(60% 50% at 80% 0%, rgba(45,212,191,.12), transparent 70%), #0b1120`. Percentages resolve against the
**wrapper's own box** (1440 × 859.19), so the glow's centre sits at x 1152, y 0 and its ellipse reaches 864 px wide / 430
px tall. `body` carries the flat `#0b1120` beneath it. In the port the glow belongs on the same element as the padding,
not on `body`: on `body` it would be sized to the document, and the whole wash would shift once the footer is added.

**2. Head.** `max-width: 760` on the header, but the `h1`'s own text is 694.47 (served face) — so the headline is
left-aligned inside a box 65 px wider than its text, and the lede wraps at 760. The head's `margin-bottom: 40` is the
only vertical rhythm between the prose and the grid; nothing else on the page uses a 40.

**3. Panel.** Radius 20, pad 38, gap 34, 1 px border. The padding is the family's largest and it is what makes the panel
read as a card rather than a band — at 640 the same padding is 28 and the panel still reads as a card. The three children
are equal-gap siblings: field / field / support row, no dividers, no rules.

**4. The row's baseline.** `align-items: baseline` on a row whose children are a 15 px label and a 26 px pill is why the
label sits at y 330.94 (13 px below the row's top at 317.94) while the pill starts at 317.94. With `center` the label
would sit at ~326 and the pill at 318 — a 5 px shift that is visible against the 12 px gap beneath.

**5. Slider internals.** Track 6 px centred in a 26 px input (10 px of transparent hit area above and below); thumb 22 px
with `margin-top: -8px` (so it overlaps the track by 8 px top and bottom); the fill is a **hard-stop gradient**, which is
why the boundary between teal and rest is a clean vertical edge at `--fill` and not a smooth ramp. The teal halo
`0 0 0 4px rgba(45,212,191,.35)` is the only saturated ring at rest — it is what makes the handle visible against the
navy panel.

**6. Support row.** The dashed border is `1px dashed`; Chrome renders 1 px dashes at ~3 px on / 3 px off, so the row reads
as a "sketch" outline. `padding: 16` + `gap: 12` + a 20 px box + two 21.7 lines = 77.38. The `<strong>` is `#fff` while
its sentence is `#a3b0c2` — the two-tone is the reference's own way of naming the add-on.

**7. Card.** 32 px pad, no border, one shadow. The shadow is `0 30px 60px -30px rgba(0,0,0,.6)` — a **negative spread**
that keeps it tight under the card, which is why the card looks "planted" rather than floating. `position: sticky; top:
24` matters only below 860 (where the document is taller than the viewport); at 1440 the page is exactly viewport height
and the card never moves.

**8. The bar.** Four `<span>`s, each `flex: 0 1 0` with `min-width: 0` and `flex-grow` set to the **raw dollars**. The
`inset -2px 0 #f8fafc` shadow draws a 2 px light separator at every segment's right edge — including the last, where the
bar's `border-radius: 999` + `overflow: hidden` clip it into a small notch at the rounded end. It is visible in the
screenshot at the right end of the blue segment; reproduce it.

**9. Breakdown rows.** Each row owns its top rule (so the first row's rule doubles as the block's top edge). `padding: 9px
0` + a 22.475 line = 41.47. The `dd` is `space-between`-right-aligned, so the four amounts do **not** share a left edge
(the digits' own widths differ by up to 10 px) but they do share a right edge at x 1238.

**10. Fine print.** Two lines at 1440 (box 393.88, text 568), three lines in the 861–876 band (box 282), one line in the
single-column band 657–860 (box 559+). That three-state wrap is the bill card's only responsive surprise.

## Source → React adaptation table

| reference                                        | port                                                                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `.cl-pricing06-demo` + inline radial             | `main` with `bg-[#0b1120]` + a `radial-gradient(...)` layer via `style` or an arbitrary `bg-[radial-gradient(...)]` |
| `.cl-pricing06` custom properties                | `@theme` `--color-*` tokens (no `--cl-*` strings anywhere)                                                          |
| `.cl-pricing06__field` × 2 (hand-written)        | one `<SliderField>` component, called twice with a step table + copy props                                          |
| `input.style.setProperty('--cl-pricing06-fill')` | `style={{ '--fill': `${pct}%` }}` on the input (typed cast)                                                         |
| `querySelector` + `addEventListener` wiring      | three `useState` + `onInput` / `onChange` + derived render values                                                   |
| `setTimeout(…, 700)` for the status              | `useEffect` on the total, `setTimeout` + `clearTimeout` cleanup                                                     |
| `:has(.box:checked)` paint                       | `data-checked` attribute + `cn()` variant                                                                           |
| `el.style.flexGrow = String(cost)`               | `style={{ flexGrow: cost }}` on each of four spans                                                                  |
| `<a href="#">Create a project</a>`               | real anchor (in-page target or the Component Dock link)                                                             |
| `@font-face` × 6 over 2 binaries                 | Google `css2` 400/600/700 (one binary pair for all three)                                                           |
| 60-line `all: revert` firewall                   | dropped (Tailwind preflight + explicit borders)                                                                     |
| no footer                                        | Component Dock strip appended (repo rule 5)                                                                         |

## Sibling comparison (same `pricing-table` family, 12 variants)

| variant | name        | shape                                                                | what this one shares / differs                                                                                                                                                                                                                    |
| ------- | ----------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01      | ratecard    | three plan cards, fill-only featured card, CSS-only                  | shares the DM-Sans-only type and the "one ink, one muted" palette; differs in **being interactive at all**                                                                                                                                        |
| 02      | tallyboard  | plan grid + annual/monthly switch, JS state                          | shares a live total; differs in having **no comparison axis** — one bill, not three plans                                                                                                                                                         |
| 03      | parity      | three-card comparison with a real `<table>`                          | shares the light-card-on-tint idea; differs in being **dark-only** and card-free                                                                                                                                                                  |
| 04      | limelight   | neon three-card grid, glass card, gradient border                    | shares the "second colour = accent" discipline; differs in having **no imagery, no gradient border, no cards**                                                                                                                                    |
| 05      | prorata     | single plan, **numeric** seat field + **graduated** tiers            | the closest sibling: also a calculator, also one `output`, also one debounced status. Differs in **two sliders instead of a field**, **flat + metered instead of graduated**, a **four-part bill with a proportional bar**, and a **dark ground** |
| 06      | **runrate** | dark ground, two non-linear sliders + one boolean, sticky light bill | —                                                                                                                                                                                                                                                 |

Two consequences of being variant 06: do **not** import `prorata`'s slot/`--fill` conventions verbatim (its `--fill` is
seated on the card root because its gradient lives in a pseudo-element of a different element; here each input owns its
own `--fill`) and do **not** reuse its contrast token (`#8f877f` was measured against a light ground; the dark panel needs
`#506890` / `#546c8f`).

## Measurement method + traps this run confirmed

- **`networkidle` never fires on the preview host** (a `cdnjs.cloud` `dns-prefetch` plus the hosted page's own polling):
  `page.goto(…, { waitUntil: 'networkidle' })` times out at 30 s. Use `load` + `document.fonts.ready` + a 300 ms settle.
- **`setViewportSize` needs 300 ms on this page.** At 70 ms, nine ladder widths read a stale line count (the support row
  and the fine print both wrap); the tell is a height that equals a neighbour's ± 21.68 / ± 19.31.
- **`getComputedStyle(el, '::-webkit-slider-thumb')` returns the host box** (540.13 × 26 for a 22 × 22 thumb) and
  `CSS.getPseudoElements` does not exist in this CDP build — measure the thumb from pixels or trust the sheet.
- **A block-level span's `getClientRects()` returns one rect for both lines** — the support row's text reports a single
  43.38 rect, so line counts must come from `height / line-height`, not from rect count.
- **The support row is a mixed-weight line.** Measuring the whole `textContent` at 400 gives 459 (one line); the real
  render is `<strong>` 700 + 400 and lands at 467 in the served face / 471 in the archive's — which is the 3.13 px that
  decides whether the panel is 441.81 or 420.13. Measure runs separately.
- **The archive's DM Sans is a different build from Google's.** Archive latin binary 62,556 B vs Google `v17` latin
  36,932 B → drift is **per string**: +9.20 % at 46 px/700, +6.21 % at 54 px/700, −6.79 % at 14 px/600, 0.00 % on `1M`.
  Every copy-derived seam moved; five strings were length-tuned (see the spec's copy table).
- **The `h1` has only 12.3 px of slack in the served face** (747.70 of 760) although the archive's face leaves 75.30 — a
  headline is the last thing to "improve" in this port.
- **A `prefers-reduced-motion` block exists but no `@keyframes`** — the only motion is two transitions, both dropped
  under the media query. Do not invent an animation budget.
- **`file pt06.jpg` says AVIF** while the extension says `.jpg`; `vision_analyze` rejects the raw file, so convert with
  PIL (`Image.open(...).convert('RGB').save('png')`) before reading it.

## Name candidates still free

`runrate` is taken. If a later pricing variant needs a name, these were checked and are unused:
`seatmeter`, `seatwise`, `seatline`, `tariffwise`, `gradus`, `scalewise`, `benchcount`, `seatcount`, `rampway`,
`slideline`, `calcseat`, `seatprice` (from the `prorata` run) plus `meterage`, `metron`, `usagemeter` — but re-grep
`origin/main` before using any of them.

## Build log — measured on the shipped app (2026-11-11)

Built as `apps/runrate` (72 tests, 100 % lines / branches / functions / statements). Served from `dist` over
`python3 -m http.server` and measured in Chromium at 1440 → 320 with `document.fonts.ready` — the Google face
(`css2?family=DM+Sans:wght@400;600;700`) is what these numbers were read with, so they are comparable with the spec's
replica, not with the archive's variable cut.

| vw   | document | main (wrapper) | section | panel  | bill   | support row | fine print | ref section |
| ---: | -------: | -------------: | ------: | -----: | -----: | ----------: | ---------: | ----------: |
| 1440 |  **903** |         859.19 |  667.19 | 441.81 | 484.25 |       77.38 |      38.75 |      667.19 |
| 1024 |  **900** |         806.58 |  663.23 | 441.81 | 481.31 |       77.38 |      38.75 |      663.23 |
|  861 |  **900** |         783.09 |  662.56 | 434.69 | 488.38 |       77.38 |      58.13 |      662.56 |
|  860 | **1225** |        1180.92 | 1060.55 | 412.91 | 449.52 |       55.69 |      19.38 |     1060.55 |
|  768 | **1193** |        1148.86 | 1041.36 | 405.56 | 442.03 |       55.69 |      19.38 |     1041.36 |
|  600 | **1183** |        1139.13 | 1055.13 | 413.81 | 451.66 |       77.38 |      38.75 |     1055.13 |
|  520 | **1175** |        1131.13 | 1051.13 | 409.81 | 451.66 |       77.38 |      38.75 |     1051.13 |
|  480 | **1233** |        1189.08 | 1109.08 | 409.81 | 451.66 |       77.38 |      38.75 |     1109.08 |
|  414 | **1254** |        1210.00 | 1130.00 | 430.73 | 451.66 |       77.38 |      38.75 |     1130.00 |
|  375 | **1276** |        1231.69 | 1151.69 | 452.42 | 451.66 |       99.06 |      38.75 |     1151.69 |
|  360 | **1321** |        1276.63 | 1196.63 | 452.42 | 471.03 |       99.06 |      58.13 |     1171.06 |
|  320 | **1342** |        1276.63 | 1218.31 | 474.11 | 471.03 |      120.75 |      58.13 |     1218.31 |

Every document height is the reference's own **plus 44.14** for the Component Dock strip (spec §10.10). Eleven of the
twelve widths reproduce the reference section, panel and bill to the hundredth; `scrollX = 0` and
`scrollWidth === clientWidth` at all twelve.

**The two predicted deltas are gone.** The support row's copy was one word short in the served face — the prescribed
string measured 473.13 in a 473.13 box, i.e. it fitted by 0 px and collapsed to one line (panel 420.13). Adding `team`
(to 508) restores the reference's two-line row (77.38) and, with it, the reference's panel heights at 1440 (441.81),
861 (434.69), 414 (**430.73**, the old delta 2) and 320 (**474.11**, the old delta 1). The spec's copy table and its
"tightest fit" paragraph were corrected to match.

**The one remaining delta is at 360** — the lede takes a fourth line there (head 209.17 vs the reference's 183.61, so the
document is 1321 vs 1295 + footer), because the served face's 3→4 wrap seam sits at ~365 rather than the reference's
~340. It is a font-metric seam, the same class as the two the spec already records; the copy was not tuned further.

Arithmetic and interaction, read in the browser: the calls ladder prints
`$30.40 · $30.40 · $31.90 · $34.40 · $39.40 · $54.40 · $79.40 · $129.40 · $279.40 · $529.40 · $1,029.40`, the storage ladder
`$34.00 · $34.00 · $34.60 · $36.40 · $39.40 · $45.40 · $63.40 · $93.40 · $153.40 · $273.40 · $633.40 · $1,233.40`, the
corners `$25.00` / `$2,372.40` / `$1,173.00` / `$1,373.40` / `$332.40`, `ArrowRight` moves exactly one stop (1M → 2.5M)
and fires `input`, and the status node speaks `Estimated total $39.40 per month.` once the dragging stops. Segment
widths at the defaults are **249.92 / 89.97 / 53.98 / 0** from `flex-grow` 25 / 9 / 5.4 / 0.
