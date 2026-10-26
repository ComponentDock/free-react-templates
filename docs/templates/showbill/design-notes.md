# Showbill — design notes (`card-11` → `apps/showbill`)

Research date **2026-10-26**. Live reference: `https://preview.colorlib.com/theme/bootstrap/card-11/`
(**200, 6,522 B**). Source spec: `openspec/specs/template-showbill/spec.md`. Task outline:
`docs/templates/showbill/tasks.md`. Every number below is measured (Playwright 1.62 Chromium,
`curl -4`), not read off the sheet — where the two disagree, the measurement wins and is marked.

## 1 — What this design actually is

A **city listings card set**: three events, each a white panel whose top half is a photograph and
whose bottom half is a ticket. The card answers four questions in order — *what* (category + title),
*when* (date leaf + time row), *where* (venue row), *who* (attendee faces + count) — and then a
**dashed rule with two punched notches** separates that from the transaction: *how much* (price) and
*put it in my calendar* (button).

It is the **eleventh member of the `card` family** and the first one whose subject is an **event**
rather than a product, an article or an account. Two consequences:

1. **The date is the hero**, not the image. The leaf is the only saturated element that crosses a
   boundary (photo → white), and it is deliberately the largest number on the page after the `h1`.
2. **The card has a real action with real output.** Cards 01–10 are display-only or hover-only; this
   one writes a file. That `.ics` generator is the whole JavaScript payload of the reference.

There is no nav, no hero, no footer, no form, no accordion, no carousel. It is **one head + one grid +
one status line**.

## 2 — Token reference (copy-paste block from the live sheet)

```css
/* ground + ink */
--page:        #f5f3ef;   /* body background AND the notch fill — not a Tailwind step */
--paper:       #ffffff;   /* card surface */
--ink:         #171717;   /* card text, h2, day number, price figure, h1 — neutral-900 */
--muted:       #525252;   /* sub-line, weekday, count, price label — neutral-600 */
--fact:        #404040;   /* fact rows — neutral-700 */

/* accents */
--accent:      #1d4ed8;   /* blue-700: eyebrow, month strip, button border/label, hover fill */
--status:      #1e40af;   /* blue-800: the role="status" line — a DIFFERENT blue */
--flag-bg:     #facc15;   /* amber-400 */
--flag-ink:    #422006;   /* amber-950 */
--done-ink:    #15803d;   /* green-700 */
--done-bg:     #f0fdf4;   /* green-50 */
--ticket:      #e5e1d8;   /* the 2px dashed stub rule — warm, not neutral grey */
--focus:       #93c5fd;   /* blue-300 in the reference — FAILS, ship #2563eb instead */

/* faces (inline in the reference, data in the app) */
#2563eb #be185d #047857   /* card 1: AM JL RT */
#7c3aed #c2410c #0e7490   /* card 2: SF NB PO */
#b45309 #4f46e5           /* card 3: CV DK */

/* shadows */
card:  0 1px 2px rgba(0,0,0,.05), 0 16px 36px -24px rgba(0,0,0,.35);
leaf:  0 10px 24px -8px rgba(0,0,0,.35);

/* radii */
card 20 · leaf 14 (month strip 14 14 0 0) · button 12 · flag 999 · faces 50%

/* type — ONE face, four instances */
font-family: "Archivo", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
weights present: 400 · 500 · 600 · 800      /* 700 does not exist */
h1        clamp(30px,4vw,44px) / 800 / -.03em / 1.05
leaf day  28px / 800 / -.03em / 1
h2        21px / 800 / -.02em / 1.2
eyebrow   13px / 800 /  .08em  uppercase
fact      15px / 400 / 1.45
count     14px / 500
weekday   12px / 600
month     12px / 800 /  .12em  uppercase
flag      12.5px / 800
price     14px label + 20px/800 figure
button    14.5px / 600
status    15px / 600
```

## 3 — Palette notes

- **`#f5f3ef` is a putty, not a warm white.** On screen the difference from `#fff` is only ~4 L\*, but
  it is the difference between "three cards on a page" and "three cut-outs on paper". Shipping
  `bg-white` on the body is the single most likely first-pass error.
- **Every chromatic value except the papers and `--ticket` is a stock Tailwind step** (`blue-700`,
  `blue-800`, `neutral-600/700/900`, `amber-400/950`, `green-50/700`, and the eight face colours).
  So the `@theme` block is tiny: paper, ticket, focus. No invented ramp, no `@theme` colour scale.
- **Two blues, not one.** The accent (`#1d4ed8`) paints the eyebrow, the month strip and the button;
  the status line is `#1e40af`, one step darker. They are 6.70 and 7.87:1 respectively, and on screen
  they read as the same blue — which is why a port that collapses them is invisible to review but
  wrong in the token table.
- **`--ticket` is warm** (`#e5e1d8`, 1.30:1 on white). It is a *perforation*, not a divider: it must
  stay faint. A `border-neutral-200` substitutes a cold grey and breaks the paper metaphor.
- **The notches are page-coloured, not white.** That is what makes them read as holes: they paint the
  ground colour *over* the card's edge, at half-diameter outside the border box. In the app they must
  point at the page token, and the card must not clip them.

## 4 — Geometry, section by section (1440 px)

| element | box | notes |
| --- | --- | --- |
| `main` | x 124, **1192** outer / **1160** content | `max-width: 1160px` + `padding: 72px 16px` (content-box), centred |
| header | x 140, y 72, 1160 × 71.19 | h1 44 px in a 46.2 px box, sub 16 px at +8, **28 px** to the grid |
| grid | x 140, y **171.19**, 1160 × 533.53 | 3 tracks **370.656 / 370.672 / 370.656**, gap 24 |
| card | **370.66 × 533.53** | radius 20, white, two-layer shadow, flex column |
| media | **370.66 × 232.97** | **700:440**, *not* the declared 16:9 (208.49) |
| leaf | **68 × 79** at left 18, bottom **−30** | 30 px below the photo, 14 px above the eyebrow |
| month strip | 68 × **21** | stretched, `margin-top: −8px` so it overhangs the leaf padding |
| day | **34.33 × 28** | 28 px/800, ink |
| body | 370.66 × 217.55 | `padding: 44px 22px 18px`, `flex: 1` |
| eyebrow | y 452 | 13 px, tracking 1.04 px |
| h2 | y 471, **326.66 wide**, 25.19 tall | `margin: 4px 0 12px` |
| facts | 2 rows × 21.75 | grid `gap: 6px`; icons **17 × 17** |
| attendee row | y 573.69, 30 tall | gap 10; faces **30 × 30**, overlap −6 |
| stub | y 621.70, **370.66 × 83.02** | `2px dashed #e5e1d8`, `padding: 18px 22px 20px` |
| notches | 20 × 20 at top **−11**, left/right **−10** | half outside the card |
| button | **173 × 43.02** | `10px 16px`, gap 8, icon 18, `1.5px` border, radius 12 |
| status | y **724.72**, 1160 wide, **22.5** tall | 20 px under the stub, centred, `min-height: 1.5em` |

Vertical stack inside a card: media 232.97 → body 217.55 (44 top pad, ~276 of content) → stub 83.02 =
533.53.

## 5 — Responsive behaviour (measured per width)

- **Columns are arithmetic.** Content = `viewport − 32`; 3 columns need `3·290 + 2·24 = 918`, 2 need
  `2·290 + 24 = 604`. Measured: **3 at 950, 2 at 949, 2 at 636, 1 at 635**; tracks at the floors are
  exactly **290.00**.
- **At 320 the track is 290 in a 288 box** → the card's right edge sits 2 px into the 16 px gutter
  (14 px visible). `scrollX` stays 0; nothing overflows the document. Do not add padding to "fix" it.
- **The media band scales with the track**, so single-column cards are tall: track 603 at 635 gives a
  379 px photo and a **679.56** px card, versus **525.56** at 390 (track 358, photo 225).
- **Card heights are content-driven**: 533.53 at 1440 → 564.52 at 1,024 (h2 wraps to two lines at a
  270.66 content width) → 524.31 at 768 → 525.56 at 390 → 549.02 at 320.
- **The row stretches to the tallest card**, so equal heights at 1440 prove nothing; the odd ones out
  are **700** (third card 569.13 vs 528.13) and **360** (third 572.89 vs 506.70) where only the third
  title wraps.
- **The stub wraps before the card does.** Needs are **271 / 257 / 297** px of content. Card 2 unwraps
  at track 303, card 1 at 313, card 3 at 348. At the 1,024 three-column width (content 270.66) cards
  1 and 3 wrap — card 1 by **0.34 px** — and only card 2 stays on one row: stub heights
  **124.02 / 83.02 / 124.02**. This is the design's most fragile number.
- **Document height**: 819.22 at 1440 (900 is the viewport, not the content), 825.89 at 1,024,
  1,292.53 at 768, 1,815.69 at 390, 1,903.05 at 320, 1,929 after a click at 320.

## 6 — States

| state | where | treatment |
| --- | --- | --- |
| rest | button | white, `1.5px #1d4ed8` border, accent label, radius 12 |
| hover | button only | background `#1d4ed8`, label white (6.70:1) |
| focus-visible | button | `3px` outline, offset `2px`; reference `#93c5fd` (1.80:1) → **ship `#2563eb`** (5.17:1) |
| pressed | button | no custom style (UA default) |
| done | button after click | `#15803d` border + label on `#f0fdf4` (4.79:1), icon kept, label "Saved to calendar"; **permanent** |
| done (second click) | button | re-downloads, label unchanged |
| status | page, under the grid | `role="status"`, 15/600 `#1e40af`, centred, 22.5 px reserved → **48 px** at 320 once populated |
| card | any | **no** state — no hover lift, no focus, not clickable |
| motion | button transition | `.2s ease` on background/colour; `none` under `prefers-reduced-motion` |

No loading, empty or error state exists in the reference: the data is three literals and the download
is generated synchronously. Do not invent a skeleton.

## 7 — Screenshot analysis (`card-11.jpg`)

**The listing image is an AVIF container with a `.jpg` extension** (`file` → `ISO Media, AVIF Image`),
**1200 × 972**; `PIL` opens it, convert to PNG before viewing.

It is **a browser-window mockup**, not a browser capture: a macOS chrome bar (three traffic lights, a
`preview.colorlib.com` address pill) frames the page inside a slightly darker grey canvas, so the real
putty ground only fills the framed rectangle. **Do not adopt the frame, the surround, or the traffic
lights** — they belong to the catalogue page, not the design.

What it shows: a large ink `h1` at top-left with a one-line grey sub under it and an **empty right
half** (the head is left-aligned and never fills its row); the three cards in one row, each the height
of the row; the photographs' dark interiors reading as three distinct blocks against white bodies; and
**the bottom ~40 % of the frame empty paper**, because the page is content-height (~819 px) on a
972 px canvas. The screenshot therefore also proves the page is **short**, not full-viewport — the
opposite of `card-10`.

Second-order details visible only at zoom: the leaf's blue cap is **flush** with the leaf's top edge
(the `−8px` overhang); the flag sits inside the photo's top-right corner, not on the card edge; the
dashed rule visually *stops* at the punched semicircles; and the button's border is noticeably
thinner than its outline would suggest (1.5 px).

## 8 — Sibling comparison (the `card` family)

| member | device | ground | type |
| --- | --- | --- | --- |
| nameplate / marketrow / octavo | product/article cards | light or tinted paper | one sans |
| tierline / plaudit / statline | pricing / testimonial / stat cards | light paper | one sans |
| lodgerow / roadbook | listing card, photo-led | photo band | one sans |
| lexeme | editorial card with faces | light | one sans |
| coffer | glass finance cards | **dark gradient + blobs** | one sans |
| **showbill** | **event card with a date leaf and a ticket stub** | **warm paper `#f5f3ef`** | one sans, **4 instances** |

Carry-overs worth checking by grep rather than re-deriving: the family declares `.cl-icon` and never
uses it (**fourth** time — drop it), never adds a keyframe or a reveal, never uses a framework, and
always ships `:where(html) … { all: revert }` as a Bootstrap neutraliser (Tailwind preflight is the
equivalent — do not port it). **Do not** carry coffer's dark ground, its `@supports` glass or its
"dim the blobs" rule; nothing here is translucent, and the only overlap is the leaf, which is opaque.

## 9 — Traps for the implementer (each cost a measurement here)

1. **`aspect-ratio: 16/9` does not apply.** The sheet declares it, `getComputedStyle` reports it, and
   the band still measures **1.5909:1** because the `<img width="700" height="440">` child sets the
   height. 232.97 px at 1440, not 208.49. Use `700/440`.
2. **The stub's wrap point differs per card** and at 1,024 card 1 misses by **0.34 px**
   (271 needed vs 270.66 available). Any change to the gap (12), the button (173) or the price label
   (86/72/112) moves a threshold you cannot see in the sheet.
3. **The visible venue is not the calendar venue.** "Belém" on screen, "Lisbon" in the `.ics`. This is
   the only piece of information architecture on the page; do not normalise it.
4. **700 renders as 800.** Four instances in one binary: buckets at 352 / 367 / 374 / 392 px per 40 px
   string. `font-bold` (700) silently resolves to the 800 instance, so the eyebrow, `h2`, day, price
   and `h1` all collapse to one weight and the hierarchy inverts.
5. **The done state is written by replacing `textContent`** and re-prepending the icon (the reference
   wipes the label, destroying the SVG, then puts it back). In React, render the label from state and
   keep the icon in the tree.
6. **`DTSTAMP` is `new Date()` at click time** — the only non-deterministic byte. Assert the shape,
   never the value.
7. **The status line is global, not per-card.** One `role="status"` under the grid; a click on card 2
   overwrites card 1's message and leaves card 1's *button* in the done state.
8. **`min-height: 1.5em` does not prevent the phone reflow.** The message is two lines at 320, so the
   page grows 25.5 px on first click. Document it or reserve two lines; do not drop the reservation.
9. **The notches need an unclipped card.** `overflow: hidden` on the card or the stub deletes them, and
   they paint the **page** colour, so they break if the ground changes.
10. **jsdom has no `URL.createObjectURL`.** Test `buildIcs` as a pure function and stub the two URL
    methods plus the anchor click for the wrapper (fake timers for the 1 s revoke) — otherwise the
    click test throws `Not implemented`.

## 10 — Source → React adaptation

| reference | React |
| --- | --- |
| `data-cl-card11-event` + 4 `data-*` per card | typed `events` array; `data-*` attributes optional, not the source of truth |
| leaf spans hand-written ("Oct" / "14" / "Wed") | derive from `start`: `Intl.DateTimeFormat('en-GB', { month: 'short' })`, day, weekday |
| `.cl-card11__faces span` inline `--cl-card11-c` | `faces: [{ initials, color }]`, inline `style={{ backgroundColor }}` |
| `cl-card11__cal` + `is-done` class | `saved` boolean per card id in a `Set`/record; label from state |
| IIFE + `querySelectorAll` | `useState` for the saved set + the status message (no effect needed) |
| `PRODID:-//Colorlib//Card V11//EN` | neutral product id, e.g. `-//Component Dock//Showbill//EN` |
| 3 jpg photographs | `picsum.photos/seed/showbill-<n>/700/440` (keep the ratio) |
| inline clock / pin / calendar SVGs | lucide `Clock`, `MapPin`, `CalendarPlus` |
| `role="status"` under the grid | same element, rendered by the section that owns the saved state |

No effect is required anywhere on this page — the only state is "which buttons have been clicked" plus
one message, both written from an event handler. That keeps it clear of the repo's
`react(set-state-in-effect)` rule by construction.

## 11 — Reference readings kept for citation

- Preview: `https://preview.colorlib.com/theme/bootstrap/card-11/` — **200, 6,522 B**; slug-only and
  `theme/bb/` both **404 (9 B)**. `<title>` "Card V11 | Colorlib", `lang="en"`.
- Stylesheet: `css/style.css?v=0d07e8f4`, **10,537 B**, **453 lines**, **58 rules**, **24** `.cl-*`
  selectors, **23** markup classes (all styled), **1** dead (`.cl-icon`), **1** media query, **0**
  `@keyframes`/`@supports`/`@container`, sha256 `e0993d6b…`.
- Script: `js/snippet.js?v=a7e5e3bc`, **2,269 B**, **70 lines**, sha256 `fd888548…`.
- Archive: `downloads/free/card-11.zip` **200, 417,861 B** (the page's "408 KB"); **19 entries**
  (5 dirs + 14 files). CSS **and** JS byte-identical to live; the body differs only in three `<img>`
  attributes → live preview verified, archive is its un-versioned twin.
- Fonts: 8 `@font-face`, **2 binaries** (`7150c0ec…` latin ×4, `a999e009…` latin-ext ×4), instances
  **400/500/600/800**; canvas 40 px "Upcoming in Lisbon" = 352 / 367 / 374 / 392 px.
- ColorLib page: **200, 113,531 B**, "Author: Colorlib", "Released: September 2026",
  "License: CC BY 3.0", `datePublished` 2026-09-25T15:33:13Z, prev **Card V10**, next **Card V12**.
- Screenshot: `card-11.jpg`, AVIF, **1200 × 972**, browser-mockup composition.
- Verified download: `product-craft-summit-2026.ics`, **311 B**, **11 CRLF**, **0 bare LF**,
  `LOCATION:Centro de Congressos\, Lisbon`.
- Contrast: text worst **4.79:1** (done state), everything else ≥ 6.70; focus ring **1.80:1** —
  the only failure, fixed with `#2563eb` (**5.17 / 4.66**).
