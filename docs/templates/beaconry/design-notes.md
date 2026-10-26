# Beaconry — design notes

Source: ColorLib **Alert V06** (`alert-06`), preview `https://preview.colorlib.com/theme/bootstrap/alert-06/`.
Target: `apps/beaconry`. Spec: `openspec/specs/template-beaconry/spec.md`. All numbers below were
measured on 2026-10-26 with `curl -4` + Playwright 1.62 Chromium at 1440 × 900 unless stated.

---

## 1. What this design is

**One panel, four alerts, no script.** The document is a centred 810 px card on a near-black ground,
606.75 px tall at 1440, holding a header (environment line, title, three-pill tally) and four alert
rows of four severities:

```
main.cl-alert06-demo            900 px min-height, padding 88 / 16, flex-centred, #06080d + 2 tints
└── section.cl-alert06          810 × 606.75   gradient #111723→#0c111a, r 20, hairline, big shadow
    ├── header  .__head         760 × 55.75    env (mono #7dd3fc) + h1 22/600 + tally 3 pills
    ├── div     .__list         760 × 481      grid, gap 10
    │   ├── div .__item--critical  760 × 107.5  rose gradient + rose border + PULSING dot
    │   ├── div .__item--warning   760 × 107.5  wash, amber dot (pulse 2.6 s)
    │   ├── div .__item--info      760 × 128.5  wash, blue dot (base tone, NO rule on the modifier)
    │   └── div .__item--ok        760 × 107.5  wash, green dot (static)
```

The earlier variants of the family are *messages*: **noticeboard** a severity ladder, **allclear** a
dismiss/restore list, **fieldguide** admonitions inside prose, **banderole** a page-level announcement
bar, **snapback** a file list with two actionable bars. `alert-06` is the first **dashboard panel** —
four *co-existing* alerts of four severities on one surface, colour carried by a **pulsing dot and a
mono chip** rather than by a bar, and the only tinted surface being the critical row. It is also the
first whose header carries a **summary that must agree with the list**, which the reference gets wrong.

## 2. Paper facts (the whole reference on one screen)

| what | value |
| ---- | ----- |
| preview | `theme/bootstrap/alert-06/` **200, 3,955 B**; `theme/alert-06/` and `theme/bb/alert-06/` **404 (9 B)**; `…/index.html` **200** (same bytes) |
| stylesheet | `css/style.css?v=be2e4226`, **11,966 B**, 452 lines, sha `d607a2287d08f7fed53d5fd15ba8c0e824bda3598c9d1d54f870ae3b45c46267` |
| script | **none** — `/js/snippet.js` is a **soft 404** (HTTP 404 with a 9 B `Not Found` body); no `js/` in the archive |
| archive | 628,539 B = **613.8 KiB** ✓ "614 KB", 18 entries (3 dirs + 15 files) |
| live ↔ archive | CSS identical sha; HTML differs **only in `<head>`** → live preview verified, archive is its un-versioned twin |
| fonts | 12 woff2 → **4 binaries**: Inter latin 48,432 B / latin-ext 85,272 B; JBM latin 31,340 B / latin-ext 11,596 B; both **variable** |
| CSS anatomy | 12 `@font-face`, 2 `all: revert` guard groups, ~29 design blocks, 2 media queries (560 / reduced motion), 1 keyframes, 2 transitions |
| DOM | 4 `<a>`, 0 button/form/img/svg, 1 `h1`, 1 `ul` + 3 `li`, 13 `p`, **1 id** |
| screenshot | `uploads/sites/2/alert-06.jpg`, 26,958 B, **1200 × 972**, **AVIF behind `.jpg`**, a **macOS browser mock-up** |

## 3. Page arithmetic

```
panelH = 2 + 48 + head + 20 + list
       = 2 + 48 + 55.75 + 20 + 481            = 606.75
list   = 107.5 + 107.5 + 128.5 + 107.5 + 3×10 = 481
item   = 2 + 32 + max(dot 10, body 73.5)      = 107.5     (body 94.5 → 128.5 for the info row)
body   = row 22.5 + 4 + desc 21 + 8 + meta 18 = 73.5
row    = max(chip 19.25, name 22.5)           = 22.5      (47.75 / 70.25 once it wraps)
head   = env 18.75 + 4 + h1 33                = 55.75
```

The panel is **content-box** (`max-width: 760` + 48 padding + 2 border = **810**); the reference's own
`*` rule sets `border-box` on the *children* only, which is why the children's numbers look normal
while the panel's outer box is 50 px wider than its `max-width`. The demo wrapper is a flex row with
`align-items: flex-start`, so the panel never stretches and the `clamp(24px, 7vw, 88px)` vertical
padding only decides where it starts (**88** at ≥1258).

### Design tokens (reference CSS, verbatim values)

```css
body  { margin: 0; background: #06080d;
        font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.demo { display: flex; justify-content: center; align-items: flex-start; box-sizing: border-box;
        min-height: 100vh; padding: clamp(24px, 7vw, 88px) 16px;
        background: radial-gradient(40% 40% at 20% 0%, rgba(56,189,248,.10) 0%, transparent 70%),
                    radial-gradient(35% 40% at 90% 100%, rgba(244,63,94,.08) 0%, transparent 70%), #06080d; }
.panel{ --ink: #e6ebf2; --muted: #97a3b6; --line: rgba(148,163,184,.14);
        --mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
        width: 100%; max-width: 760px; padding: 24px; border: 1px solid var(--line);
        border-radius: 20px; background: linear-gradient(180deg, #111723 0%, #0c111a 100%);
        box-shadow: 0 40px 80px -40px rgba(0,0,0,.8); color: var(--ink); line-height: 1.5; }
.head { display: flex; flex-wrap: wrap; gap: 12px 24px; align-items: flex-end;
        justify-content: space-between; margin-bottom: 20px; }
.env  { margin: 0 0 4px; color: #7dd3fc; font-family: var(--mono); font-size: 12.5px; }
.title{ margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -.01em; }
.tally li { display: inline-flex; gap: 8px; align-items: center; padding: 5px 11px;
            border: 1px solid var(--line); border-radius: 999px; color: var(--muted);
            font-size: 12.5px; font-weight: 500; }
.pip  { width: 7px; height: 7px; border-radius: 50%; background: currentColor; }   /* own color per tone */
.list { display: grid; gap: 10px; }
.item { --tone: #38bdf8; --glow: rgba(56,189,248,.55);                                /* info = the BASE */
        display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: start;
        padding: 16px 18px; border: 1px solid var(--line); border-radius: 14px;
        background: rgba(255,255,255,.025); transition: border-color .2s, background-color .2s; }
.item:hover { border-color: rgba(148,163,184,.28); background: rgba(255,255,255,.04); }  /* DEFECT 3 */
.item--critical { --tone: #fb7185; --glow: rgba(251,113,133,.6);
        border-color: rgba(251,113,133,.35);
        background: linear-gradient(90deg, rgba(251,113,133,.10), rgba(251,113,133,.02) 60%); }
.item--warning  { --tone: #fbbf24; --glow: rgba(251,191,36,.5); }
.item--ok       { --tone: #34d399; --glow: rgba(52,211,153,.45); }
.dot  { position: relative; width: 10px; height: 10px; margin: 7px 4px 0; border-radius: 50%;
        background: var(--tone); box-shadow: 0 0 0 3px rgba(255,255,255,.04), 0 0 12px 2px var(--glow); }
.dot::after { content: ""; position: absolute; inset: 0; border-radius: 50%;
              background: var(--tone); opacity: 0; }
.row  { display: flex; flex-wrap: wrap; gap: 6px 10px; align-items: center; margin: 0; }
.sev  { padding: 1px 8px; border-radius: 6px; background: rgba(255,255,255,.06);
        color: var(--tone); font-family: var(--mono); font-size: 11.5px; font-weight: 500;
        letter-spacing: .04em; text-transform: uppercase; }
.name { color: #f5f8fc; font-size: 15px; font-weight: 600; }
.desc { margin: 4px 0 0; color: #b3bdcc; font-size: 14px; }
.meta { display: flex; flex-wrap: wrap; gap: 4px 16px; margin: 8px 0 0; color: var(--muted);
        font-family: var(--mono); font-size: 12px; }
.link { align-self: center; padding: 7px 12px; border: 1px solid var(--line); border-radius: 8px;
        color: var(--ink); font-size: 13px; font-weight: 500; text-decoration: none;
        white-space: nowrap; transition: border-color .15s, background-color .15s; }
.link:hover { border-color: var(--tone); background: rgba(255,255,255,.05); }
.link:focus-visible { outline: 2px solid var(--tone); outline-offset: 2px; }
@keyframes cl-alert06-pulse { 0% { opacity: .6; transform: scale(1); } 100% { opacity: 0; transform: scale(3); } }
@media (max-width: 560px) { .panel { padding: 18px 14px; }
  .item { grid-template-columns: auto 1fr; gap: 12px; padding: 14px; }
  .link { grid-column: 2; justify-self: start; } }
@media (prefers-reduced-motion: reduce) { /* both animations off; only critical keeps a static ring */ }
```

## 4. Measured geometry at 1440 × 900

| element | box | note |
| ------- | --- | ---- |
| `.demo` | 1440 × 900 at (0,0) | padding `88px 16px` |
| `.panel` | **810 × 606.75** at (315, 88) | content-box; 760 + 48 + 2 |
| `.__head` | 760 × **55.75** at (340, 113) | `margin-bottom: 20px` |
| `.__env` | 142.92 × 18.75 at (340, 113) | mono 12.5 / 18.75 `#7dd3fc` |
| `.__title` | 142.92 × 33 at (340, 135.75) | 22 / 33, 600, −0.22 px |
| `.__tally` | 300 × 30.75 at (800, 138) | pills 86 / 94 / 104, gap 8, flush right at 1100 |
| `.__list` | 760 × **481** at (340, 188.75) | grid gap 10 |
| row 1 | 760 × **107.5** at (340, 188.75) | cols `18px 591px 81px` |
| row 2 | 760 × **107.5** at (340, 306.25) | cols `18px 600px 72px` |
| row 3 | 760 × **128.5** at (340, 423.75) | cols `18px 604px 68px`, description **2 lines** |
| row 4 | 760 × **107.5** at (340, 562.25) | cols `18px 589px 83px` |
| `.__dot` | 10 × 10 at (363, 212.75) | `margin: 7px 4px 0` ⇒ the 18 px column |
| `.__body` | 591 × 73.5 at (393, 205.75) | first row's body |
| `.__row` | 591 × 22.5 at (393, 205.75) | flex-wrap, gap 6 / 10 |
| `.__sev` | 75.69 × 19.25 at (393, 207.38) | mono 11.5 / 17.25, `+0.46px`, uppercase |
| `.__name` | 231 × 22.5 at (478.69, 205.75) | 15 / 22.5, 600 |
| `.__desc` | 591 × 21 at (393, 232.25) | 14 / 21 |
| `.__meta` | 591 × 18 at (393, 261.25) | mono 12 / 18, gap 4 / 16 |
| `.__link` | **81 × 35.5** at (1000, 224.75) | vertically centred: `(107.5 − 35.5) / 2 = 36` from the row's top |

At **390**: panel **358 × 1039.5** at (16, 27.3), padding `18px 14px`, head 98.5, tally 30.75,
list 883, rows **240.25 / 197.25 / 218.25 / 197.25**, doc **1094**. At **320**: panel **288 × 1317.75**
at (16, 24), head 137.25, tally 69.5 (wrapped), list 1122.5, rows **284.75 / 262.75 / 304.75 /
240.25**, doc **1366**. `scrollX` stays **0** and `scrollWidth === clientWidth` at every width from 300
to 820.

## 5. The width ladder (1 px sweep)

Panel outer: **810** at ≥842, then exactly **`vw − 32`**. Panel content: **760** at ≥842,
**`vw − 82`** for 561–841 (padding 24), **`vw − 62`** at ≤560 (padding 14 + border).

| what | thresholds |
| ---- | ---------- |
| head | 55.75 ≥529 · 98.5 362–528 · 137.25 ≤361 |
| tally | 30.75 ≥362 · 69.5 ≤361 |
| row 1 | 107.5 ≥696 · 128.5 619–695 · 150.5 568–618 · 175.75 561–567 · 172 490–560 · 194 439–489 · 219.25 414–438 · 240.25 355–413 · 284.75 319–352 · 305.75 ≤318 |
| row 2 | 107.5 ≥696 · 128.5 561–695 · 172 401–560 · 197.25 369–400 · 219.25 349–368 · 240.25 322–348 · 262.75 ≤321 |
| row 3 | 128.5 ≥622 · 149.5 561–621 · 172 506–560 · 193 422–505 · 218.25 366–421 · 261.75 327–359 · 304.75 ≤321 |
| row 4 | 107.5 ≥744 · 128.5 561–743 · 172 392–560 · 197.25 371–391 · 218.25 327–370 · 240.25 306–326 · 262.75 ≤305 |
| desc lines | r1 4 ≤318, 3 319–413, 2 ≥414 · r2 3 ≤348, 2 349–695, 1 ≥696 · r3 5 ≤321, 4 322–359, 3 360–505, 2 506–560, 3 561–621, 2 ≥622 · r4 3 ≤370, 2 371–743, 1 ≥744 |
| meta rows | r1 3 ≤354, 2 355–489, 1 490–560, 2 561–618, 1 ≥619 · r2 2 ≤368 · r3/r4 2 ≤326 |
| chip+name lines | r1 3 ≤352, 2 353–438, 1 439–560, 2 561–567, 1 ≥568 · r2 3 ≤321, 2 322–400, 1 ≥401 · r3 3 ≤365, 2 366–421, 1 ≥422 · r4 3 ≤305, 2 306–391, 1 ≥392 |
| doc height | 900 ≥561 · 910 at 560 · 1409 at 300 |

**Two inversions to keep.** (1) **≤560 is a layout change, not a scale**: the action drops to
`grid-column: 2` under the body, `gap` goes 16 → 12, `padding` 16/18 → 14, so each card gets *taller*
(**172** vs 175.75 / 128.5 / 149.5 / 128.5) while the panel as a whole gets **~94 px shorter**
(831.75 at 560 vs 738 at 561). (2) **Row 3's description is 3 lines at 561–621 but 2 at 506–560** —
the narrower three-column body wraps more than the two-column one, so line counts are *not* monotonic
in viewport width. Both are reproduced, not smoothed.

## 6. Behaviour

There is **no JavaScript**. Everything below is CSS:

| interaction | behaviour |
| ----------- | --------- |
| critical dot | `::after` pulses **1.6 s** `ease-out infinite`: `opacity .6 → 0`, `scale 1 → 3` (sampled: opacity 0.14 → 0.06 → 0.004 → 0.47 → 0.32 over ~1.7 s) |
| warning dot | same keyframes at **2.6 s** |
| info / ok dots | `::after` stays at `opacity: 0` — no animation |
| row hover | border hairline `.14 → .28`, wash `.025 → .04`, 0.2 s — **and it wipes the critical gradient** (defect 3) |
| action hover | border takes the row's tone, ground `rgba(255,255,255,.05)`, 0.15 s |
| action focus | `:focus-visible` `2px solid <tone>` at offset 2 (measured `rgb(251,113,133) solid 2px`) |
| reduced motion | animations off; **critical** keeps a static ring (`opacity .25`, `scale 2`), **warning** has no fallback (defect 9) |

## 7. Contrast (composited, WCAG 2.x)

Text pairs all pass; the **only** failure is non-text: the action's border at **1.27 : 1**.

| pair | ratio |
| ---- | ----- |
| h1 / names / descriptions / meta | 15.13 / 16.03–16.86 / 9.00–9.47 / 6.69–7.10 |
| env `#7dd3fc` | 10.87 |
| chip text: critical / warning / info / ok | **5.00** / 8.97 / 6.99 / 7.79 |
| critical row name / desc / meta | 15.12 / 8.49 / 6.31 |
| action label | 14.42 |
| **action border `rgba(148,163,184,.14)`** | **1.27 ✗** → use **`.6`** (3.28 : 1) |
| pips rose / amber / green (non-text) | 6.73 / 10.86 / 9.43 |

Note the gradient moves the panel ground between `#101621` at the header and `#0c121a` at the last
row, so each ratio above was computed at that element's own y, not against a single flat colour.

## 8. Screenshot analysis

`alert-06.jpg` is **26,958 B, 1200 × 972**, an **AVIF container behind a `.jpg`** extension
(`file` → `ISO Media, AVIF Image`; `PIL` opens it). It is a **macOS browser mock-up**: three
traffic-light dots, a chrome bar reading `preview.colorlib.com`, a **grey desk** and a drop shadow
around a 1200 × 900-ish window whose content is the live page. The same 1200 × 972 canvas as the
previous variant's mock-up — treat that size as this family's mock-up tell.

What the image confirms about the *design* (not the frame): the near-black ground with a faint blue
tint top-left and rose tint bottom-right; the panel's rounded 20 px corners and hairline border; the
mono environment line; the three pills in the top-right with their coloured pips; the critical row's
rose wash and rose border; the four dots with their halos; the ghost action buttons sitting on the
rows' right edge, vertically centred. What it does **not** show: the pulse (a still), the hover states,
the ≤560 layout. **Never adopt the frame** — the port's ground is `#06080d` edge to edge.

The promo image's copy also matches the live page word for word, so it is an honest capture of the
live design (a first for this family's screenshots).

## 9. Section-by-section fidelity notes

**Ground and panel.** `#06080d` plus two radial tints; the panel's gradient runs top `#111723` to
bottom `#0c111a` over its full height, so it is *lighter* at the header than the body-text ratio above
assumes. Shadow is `-40px` spread on a `rgba(0,0,0,.8)` — visible only at the bottom edge on this dark
ground. The radius is 20, not 14: the rows are 14.

**Header.** Three elements, two rows of alignment: the env line + title stack on the left, the tally
sits on the **baseline of the `h1`** (`align-items: flex-end` → both bottoms at y 168.75). The tally is
**300 px** wide at 1440 and flush with the panel's right content edge (1100). It wraps to its own line
at ≤528 and to two rows at ≤361 — with a fourth pill those thresholds move, so re-measure.

**Tally.** Pills are outlined, not filled; the only colour is a **7 px pip** whose `background:
currentColor` resolves against its own `color` (unlike the postbox trap, the modifier here sets
`color` on the same element, so the pip *is* the tone). The pill text stays muted — do not colour the
label. The reference's numbers are wrong (defect 2); the port derives them.

**Section backgrounds.** Only one: the critical row's horizontal rose gradient, `.10` at the left edge
fading to `.02` at 60 %, over the shared `.025` white wash. Warning, info and ok are the plain wash.
There is no band, no divider, no zebra.

**Rows.** Grid `auto 1fr auto`. The dot's column is 18 px (10 + 4 px margin each side) and the dot sits
**7 px** below the row's padding edge, which makes it look optically centred against the headline
(22.5 tall) rather than against the whole body. The chip and the headline share one wrapping flex line,
so at narrow widths the chip stays on line 1 and the headline moves to line 2 — the row grows to
47.75 then 70.25 rather than clipping. The meta line has **no separators** (gap only), which is why
the mono face matters: the pairs read as columns, not as a sentence.

**Actions.** Height 35.5 = 7 + 19.5 + 7 + 2, i.e. the **line box plus padding plus border**; the
`align-self: center` is what produces the 36 px offset in the table above. The reference's border is
**1.27 : 1** — invisible on a dark ground; the port raises it (defect 5).

**Motion.** One keyframe. The critical dot's halo reaches `scale 3` on a 10 px dot, so the glow's
diameter is 30 px at the end of the cycle; the box-shadow ring stays at 10 px + 3 px spread. Under
reduced motion the reference leaves the warning dot blank — do not copy that.

**Dialog (port addition).** The reference's four actions go nowhere (defect 1). Rather than ship four
dead fragments, each becomes a real button opening a modal detail view: exact same geometry as the
reference's ghost control, so the *look* is unchanged, and the *behaviour* becomes real. The rows stay
static — no acknowledge state, no dismissal, no timers, so the 100 %-coverage tests stay honest.

## 10. Source → React adaptation table

| reference | port |
| --------- | ---- |
| static `index.html`, zero JS | one page component + a `rows` data module (id, severity, chip label, headline, description, meta pairs, action label, timeline) |
| four `<div class="cl-alert06__item cl-alert06__item--X" role="alert/status">` | `<ul>` of `<li>`, no live-region roles; severity carried by a typed union and a Tailwind class map |
| base `--cl-alert06-tone` + empty `--info` modifier | explicit `SEVERITY` map: `{ tone, wash, border, glow }` for all four |
| `<a href="#runbook">` … four dead fragments | `<button type="button">` + `<dialog>` (`showModal`, Escape, Close, focus return) |
| fixed tally "1 / 1 / 2" | tally computed from `rows`; four pills |
| `:hover { background: … }` (kills the gradient) | hover sets `background-color` only |
| link border `rgba(148,163,184,.14)` | `rgba(148,163,184,.6)` for the control (3.28 : 1) |
| content-box panel, `max-width: 760` | keep content-box (or `max-w-[810px]` + `border-box`, documented) |
| 12 `@font-face` from 4 binaries | Google Fonts: Inter 400–700, JetBrains Mono 400–500 |
| dead `.cl-icon` | not ported |
| no footer | quiet one-line footer linking Component Dock (repo rule 5) |

Copy to keep the *kind* of: environment + region; a cluster-health title; four alerts — a latency
breach, a capacity warning, a maintenance notice, a completed rollout; identifier pairs
(`svc:` / `node:` / `db:` / `by:`); timestamps; one action verb per row.

## 11. Sibling comparison (same family, same kit)

| variant | shape | what it adds that this one does **not** have |
| ------- | ----- | ------------------------------------------- |
| noticeboard | static severity ladder | tinted row backgrounds per severity (this one tints only critical) |
| allclear | dismiss/restore list | a state machine, a restore pill, a footer counter |
| fieldguide | prose with 4 admonitions | no script at all (this one matches), left-border call-outs |
| banderole | page-level announcement bar over a landing page | real site chrome and a dismiss button |
| snapback | file list + undo / connection bars | two JS machines, three dark bar grounds, `[hidden]` rules |

Shared with its siblings: the `bootstrap/` preview prefix, a `:where(html) … all: revert` guard block,
a dead `.cl-icon` rule, a README that advertises files it does not ship, an AVIF-behind-`.jpg`
promo image, and the content-box panel whose `max-width` is not its outer width. Different from all of
them: **this is the only one that is a list of simultaneous alerts rather than a message**, and the
only one whose **summary must agree with its own list**.
