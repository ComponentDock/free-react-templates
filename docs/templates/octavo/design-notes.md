# Octavo — design notes

Source: ColorLib **Card V03** (`card-03`), ColorLib page `https://colorlib.com/wp/template/card-03/`
(HTTP 200, 113,460 B), live preview `https://preview.colorlib.com/theme/bootstrap/card-03/`
(**HTTP 200, 4,469 B**, read 2026-10-25 with `curl -4`; **note the `/bootstrap/` prefix** — the slug-only path
404s, both as a directory and as `/index.html`, and `/theme/bb/` 404s too). Recreation name `octavo`. Spec:
`openspec/specs/template-octavo/spec.md`. Tasks: `docs/templates/octavo/tasks.md`.

A **hand-written static snippet**, not a theme build: 4.5 KB of HTML and one 7,618 B stylesheet with **no
script element, no `js/` directory and no behaviour whatsoever**. Bootstrap appears only as a
`:where(html) :is(html, body, div, …) { all: revert; }` guard so the snippet renders identically inside any host
page; Tailwind's preflight replaces it. The stylesheet's header says it plainly: *"Every style this snippet uses,
and nothing else. No framework, no build step."*

The live sheet is byte-identical to the copy inside `downloads/free/card-03.zip`
(sha256 `67b2694540d927e96071c78b54c6d3ae0e7c032e069be3bd4ef372d8ae6c8246`, 7,618 B); the live HTML is the zip's
`index.html` plus the host's injections (two `robots` metas, a `cdnjs` `dns-prefetch`, the `?v=` cache-buster with
`fetchpriority="high"`, and per-image `fetchpriority` / `decoding` / `loading` hints). So: **live preview
verified; the archive is its un-versioned twin.**

⚠️ The archive's `README.md` lists `js/snippet.js  the behaviour, in plain JavaScript`. **There is no `js/`
directory and no script.** Same lie as the sibling `card-01`, the opposite of `card-02` (which really ships
1,628 B). Do not go looking for behaviour on this design; there is none to reproduce.

## Structure order (measured at 1440 × 900)

| # | band                                          | hook               | ground    |   top | height |
| - | --------------------------------------------- | ------------------ | --------- | ----: | -----: |
| 0 | page                                          | `body`             | `#fbfaf7` |     0 |  699.2 |
| 1 | container (1,212 outer / 1,180 content)       | `.cl-card03-demo`  | —         |     0 |  699.2 |
| 2 | head: `h1` + "All articles →" + 2 px rule     | `__head`           | —         |    72 |   68.4 |
| 3 | grid (3 × 369.3, gap 36)                      | `.cl-card03-grid`  | —         | 168.4 |  458.8 |
| — | *nothing else*                                | —                  | —         |     — |      — |

Per card, top to bottom: `__cover` (369.3 × 230.8, radius 14, `__chip` pinned inside at 14 / 14) → `__body`
(155: headline `h2`›`a` 55, `margin-bottom 10`, excerpt 72) → `__meta` (`margin-top 18`, `border-top 1px
#e7e5e0`, `padding-top 16`, 55 tall: `__avatar` 38 × 38, `__who` › `__author` + `__date`›`time`, `__read` 114 ×
29.6).

## Section-by-section fidelity notes

### The head

Left: the `h1` **"From the journal"** at `clamp(30px, 4vw, 44px)` / 1.1 / 600 / `−0.02em`, in **Fraunces** —
340.9 × 48.4 at 1440. Right: **"All articles →"** at 15/600 ink, 107.9 px wide, its right edge exactly on the
container's right edge (1,310). The header is `align-items: baseline`, so the link's 18 px box sits at y 98
while the `h1` starts at y 72 — they share a baseline, not a top edge. Under them a **2 px ink rule**
(`padding-bottom: 18px`) spans the full 1,180 px content width, and `margin-bottom: 28px` opens to the grid.

The head is one row down to **388 px** and wraps below it: at 387 the link drops to its own row at x 16 / y 77
and the head measures 83 px; at 388 it is 53 px and the link sits at x 264.1. The arithmetic is
`235.4 (h1) + 12 (gap) + 107.9 (link) = 355.3` against `vw − 32`.

### The grid

`repeat(auto-fit, minmax(280px, 1fr))`, `gap: clamp(20px, 3vw, 36px)`, inside a container whose
`max-width: 1180px` is a **content box** (the `all: revert` guard leaves `box-sizing: content-box`), so the outer
box is 1,212 and centres from 1,212 px up (x 114 at 1,440; x 354 at 1,920). Column thresholds bisected one pixel
at a time: **1 ≤ 611 · 2 = 612–927 · 3 ≥ 928 · never 4** (`4 × 280 + 3 × 36 = 1,228 > 1,180`, so the maximum
state is three columns at every viewport). Because the gap is a `clamp`, the track arithmetic moves with the
viewport: `2 × 280 + 20 = 580 ≤ 580` is the 612 flip and `3 × 280 + 2 × 27.84 = 895.7 ≤ 896` the 928 one.

`auto-fit` is what the sheet says; with exactly three items and never more than three tracks there is no empty
track to collapse, so it behaves exactly like `auto-fill` here. Keep `auto-fit` for fidelity.

**The height profile is non-monotonic twice over.** Across column states: 1,892 px at 611 → **1,083** at 612
(an 809 px drop) and 1,226 at 927 → 654.8 at 928. Inside a column state: the one-column page is **taller at 520
(1,712) than at 390 (1,540.3)** because the cover grows at `0.625 × width` while the excerpt only loses a line at
a time, and the card *shrinks* at each text-unwrap point (484.5 at 360 with 3-line headline + 4-line excerpt →
451.8 at 390 with 2 + 3 → 509 at 520 with 2 + 2). Card height decomposes exactly as
`cover + 18 + headline + 10 + excerpt + 18 + 55`; at 1,440 that is `230.8 + 18 + 55 + 10 + 72 + 18 + 55 = 458.8`,
which is also the card's natural height — there is no stretch slack at that width.

### Cards wrap at different widths — and still sit level

The three headlines are different lengths, so they stop wrapping at different viewports. In the three-column
state: card 3's headline reaches 2 lines at **1,056**, its excerpt 3 lines at **1,080**, card 2's excerpt 3
lines at **1,088**, card 1's headline 2 lines at **1,152**. The grid stretches every item to the row height and
`__body { flex: 1 }` absorbs the remainder **below the excerpt**, so all three meta strips stay on one line
(measured at 1,100: cards 488.3, metas all at y 595.6, card 3's excerpt starting 27.5 px higher than the other
two). Do not add `line-clamp` or a breakpoint to equalise the line counts — the alignment is a consequence of
`flex: 1`, not of equal copy.

### The card is bare

This is the family's odd one out. `card-01` (Nameplate) and `card-02` (Marketrow) are white plates with radius,
shadow and an inset; **`card-03` has a transparent `<article>`** — computed `background-color: transparent`,
`border-width: 0`, `border-radius: 0`, `box-shadow: none`, `padding: 0`. The only rounding on the page is the
cover's `border-radius: 14px`, which is on **all four corners** (verified by sampling the render: at 1 px inside
the left edge the bottom-left corner is paper for ~7 px of the 14 px arc). The photograph inside has no radius of
its own and is clipped by `overflow: hidden`.

### The 2 px inset

`__body { padding: 18px 2px 0 }` puts the headline and excerpt at card **x + 2** (132 at 1,440) while the cover,
the chip and the meta strip's rule start at **x + 0** (130). It reads like a stray pixel and it is deliberate:
the text column is optically inset under the photograph, the rule is structural. Do not "align" them.

### The chip and the hue system

The chip is **white with coloured text** (never coloured with white text): 30 px tall and 108 / 115.7 / 144.1 px
wide for *Productivity* / *Development* / *Life outside work*, `padding: 5px 11px`, radius 999, 12.5/600,
`box-shadow: 0 2px 8px rgba(0,0,0,.15)` so it survives a dark photo.
The three hues — `#1d4ed8` blue, `#047857` green, `#a21caf` magenta — are set as `--cl-card03-chip` on the card
and **duplicated** as `--cl-card03-hue` on the avatar span; both drive the avatar ground and the link's focus
ring. Collapse them to one value per card in React. Contrast was checked: 6.70 / 5.48 / 6.32 : 1 on white, all
above AA even at 12.5 px — do not adjust the hues.

### The whole-card link

The headline `<a>` is invisible as a link: `color: inherit`, no underline by default, and an `::after` overlay
at `inset: 0`, `border-radius: 14px`, `z-index: 1` that makes the entire card the target
(`elementFromPoint` at the card's top-left returns the anchor). The only affordance is a
`linear-gradient(currentColor, currentColor) 0 100% / 0 1.5px no-repeat` background that grows to `100% 1.5px`
over `.35s ease` on **`.cl-card03:hover`** — hovering the photograph reveals the headline's underline. Focus is
drawn on the overlay too: `outline: 3px solid var(--cl-card03-chip)` at `offset: 6px`, so the ring is that card's
hue and wraps the whole card's rounded bounds.

All four anchors (the head link and the three headlines) are `href="#"` in the source — dead. The recreation
points them at real in-page fragments and asserts no bare `#` survives.

### The meta strip

`display: flex; align-items: center; gap: 12px`, 13.5 px, `margin-top: 18px`, `padding-top: 16px`,
`border-top: 1px solid #e7e5e0` → 55 px tall. The 38 × 38 initials disc (`border-radius: 50%`, ground = the card
hue, 13/600 white, `aria-hidden`) is `flex: none`; the author/date block is `flex: 1` (`line-height: 1.35`,
36.4 px); the read pill is `#f1efe9` / `#374151` 13.5/500 at radius 999 with a 15 × 15 clock at 10 px from its
left edge. The pill's right edge lands exactly on the card's right edge (499.3 at 1,440) because the middle
block absorbs the free space — not because of a margin.

### Type split

**Fraunces 600 on exactly two selectors** (the `h1` and the card headline); everything else — chip, excerpt,
author, date, read time, initials — is `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. The `h1`
clamps (30 → 44 px, `4vw` between 750 and 1,100); the card headline is a fixed **22 px** at every width. Weight
**500** is `@font-face`-declared twice and selected by nothing, and the two woff2 files per subset hash
identically (one variable face copied twice) — load 600 only.

### Motion

Two cues, both on card hover: the photo `scale(1.06)` over `.6s cubic-bezier(.2,.7,.2,1)` and the underline
`.35s`. There is **no lift, no fade, no `@keyframes` and no shadow change** anywhere in the sheet, and the single
`@media (prefers-reduced-motion: reduce)` block disables exactly those two transitions and the hover transform.
Resist adding a reveal-on-scroll: the original has no JavaScript to drive one.

### Screenshot vs live

`card-03.jpg` (1200 × 972, a real progressive JPEG) is a **framed capture**: macOS traffic lights, a URL bar
reading `preview.colorlib.com`, a white sheet and a drop shadow over a light grey page, with the real page
rendered at roughly 1,120 px inside it. None of that furniture belongs in the app; the app's ground is
`#fbfaf7` full-bleed. What the capture *does* prove is the intended composition: three columns, the rule under
the head, the three chip hues, and meta strips that line up across the row.

## Traps, all measured

1. **`theme/card-03/` 404s twice** (directory and `/index.html`) — the family lives at
   `theme/bootstrap/card-03/`. `theme/bb/card-03/` 404s as well. The directory index here answered 200 on the
   first probe, unlike `card-02` where it flaked once; either way prefer `/index.html` for a stable byte count.
2. **Directory listings are disabled** (`css/`, `images/`, `fonts/` all 404 with a 9 B body) — the files are
   only reachable by exact name.
3. **`js/snippet.js` 404s and no `js/` exists in the zip**, yet the archive's README documents the script.
4. **No `<script>` element at all** — so nothing on the page can be "reproduced" as behaviour. Any interactive
   affordance an implementer adds is invention.
5. **`index.html` is a no-op link**: the directory URL and `/index.html` return the same 4,469 B. `about.html`,
   `contact.html`, `blog.html`, `article.html` are all 404 — there is no inner-page inventory.
6. **Non-monotonic everything**: heights 1,892 (611) → 1,083 (612) → 654.8 (928), and 1,712 at 520 vs 1,540.3
   at 390. Four columns never happen. Do not "fix" any of it.
7. **Per-card wrap points** (1,056 / 1,080 / 1,088 / 1,152 in the three-column state) mean equal card heights and
   unequal line counts. Slack lives between excerpt and rule.
8. **The head wraps at 387/388**, one pixel apart, on `235.4 + 12 + 107.9` against `vw − 32`.
9. **`.cl-icon` is dead** (19 classes in markup, 20 in the sheet) and the two hue custom properties carry the
   same value twice per card — both are family leftovers, not design.
10. **The `→` is `&rarr;` (U+2192) inside an `aria-hidden` span**, not an icon and not `->`.
