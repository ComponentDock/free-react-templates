# Template: Mayfly (Alert — a stack of self-dismissing toasts beside a profile card)

## Purpose

**One white profile card on a pale mint ground, and a column of dark toasts beside it that count
themselves down.** The page is a settings surface for an invented workspace: a rounded teal avatar with
initials, a name, a muted role line, three hairline-separated fact rows, a teal **Save changes** button, a
pale-teal **Invite a teammate** button, and a one-line note that explains the mechanic out loud —
*"Alerts close by themselves after 5 seconds. Hover or focus one to pause it."*

Beside the card sits an **empty notification column**, 380 px wide, that fills from the bottom of the
action: pressing either button prepends a **dark toast** (`#0f1f1d`, radius 16) carrying a 36 px circular
icon tile, a bold white title, a muted body line, an uppercase teal timer, a 32 px close button, and a
**4 px teal progress line pinned to the toast's bottom edge** that shrinks left-to-right as the five-second
budget runs out. The toast is not fixed to a corner and it is not an overlay: it is a **grid child** that
occupies real space, so the column grows downward (`287.7 → 566.39 → 1123.77` at 2 / 4 / 8 toasts) and at
nine toasts the page begins to scroll.

The mechanic is the design: a `requestAnimationFrame` loop decrements a **remaining** budget, paints it as
`transform: scaleX(remaining / 5000)` on the fill and as a `Closes in Ns` label, and stops decrementing
while the toast is hovered or holds focus — then a **260 ms exit** (`opacity 0`, `translateX(24px)`,
`scale(.98)`) removes it and returns focus to the button that opened it.

- **Source slug:** `alert-08`
- **ColorLib page:** https://colorlib.com/wp/template/alert-08/ — **HTTP 200, 113,592 B**, `<title>`
  `Alert V08 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V08"**, meta description *"Dark
  confirmation alerts that close themselves after five seconds, shown next to a profile card with Save and
  Invite buttons."*, `datePublished` / `dateModified` **2026-09-25T14:53:47+00:00**, claims *"the download
  is 191 KB"* (measured **195,826 B = 191.2 KiB** ✓), lists the behaviours verbatim (*"Countdown line driven
  by requestAnimationFrame, paused on hover and focus"*, *"Escape and a named close button dismiss it
  early"*, *"Focus returns to the button that opened it if focus was inside"*), and its related grid links
  **seven** siblings (`alert-06` … `alert-12`). This is the **design name the naming audit reads**: ColorLib
  "Alert V08".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-08/ — **HTTP 200,
  2,616 B**, `<title>` `Alert V08 | Colorlib`, `lang="en"`, **one** stylesheet, **one** theme `<script>`, no
  host gtag. The slug-only path `theme/alert-08/` is **404 (9 B)** and `theme/bb/alert-08/` is **404 (9 B)**
  — the same `bootstrap/` prefix ladder as the seven earlier variants of this family.
- **Design category:** Alert (a **transient, self-dismissing toast stack** — the only variant in the family
  whose alert is *time*, not severity, validation, or prose). **Eighth** of the **`alert` snippet family**
  (**12** variants) in the **214 snippet variants** of `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/mayfly`, package
  `@free-react-templates/mayfly`, CNAME `mayfly.free.componentdock.com`.

**What this design is, and what it is not.** The family so far: **noticeboard** a static severity ladder,
**allclear** a dismiss/restore list, **fieldguide** admonitions inside prose with no script, **banderole** a
page-level announcement bar, **snapback** a file list with two actionable bars, **beaconry** a dark
cluster-health panel of four simultaneous alerts, **proofmark** a form returned with an error summary.
`alert-08` is the first where an alert **needs no user action to disappear**, where alerts **stack**, and
where the design's whole motion budget is a **progress line**.

**The seven things a careless port flattens** (each measured below):

- **The countdown is a `transform`, not a width.** The fill is painted with
  `scaleX(remaining / 5000).toFixed(4)` on **every animation frame** and `transform-origin: left center`; a
  port that animates `width` (or a CSS transition) repaints layout 60×/s and cannot pause.
- **Pausing is per toast and is *state*, not a media query.** `mouseenter` / `focusin` set
  `hovered` / `focused`, `paint()` toggles `.is-paused` and swaps the label to **`Paused`**; the fill also
  drops to `opacity: .55`. Measured: the transform held `scaleX(0.3467)` for **900 ms** while hovered and
  resumed to `0.2634` on `mouseleave`.
- **The timer copy is a `ceil` ladder that never reaches zero.** `Closes in {max(1, ceil(remaining/1000))}s`
  reads `5s` for the first second, then `4s`, `3s`, `2s`, `1s` — measured at fills `0.8333 → 0.7833 →
  0.64 → 0.4967 → 0.3567 → 0.0701 → 0`. It is `aria-hidden`, and it must stay that way.
- **The exit is two separate things.** `is-leaving` is a **class** (`opacity: 0; transform:
  translateX(24px) scale(.98); transition: .24s`) and removal is a **`setTimeout(…, 260)`** — the element
  leaves the DOM 20 ms after the transition ends, and under `prefers-reduced-motion` the removal is
  **immediate** with no class at all.
- **The card's height is a staircase with a spike.** 564 (300) → 508 (320) → 487 (324) → 463 (353) → 405
  (405) → 384 (542–800) → **475 (801)** → 417 (833) → 396 (970+) — the two-column breakpoint *squeezes* the
  card to 361 px and makes it **91 px taller**, then the wider column pays the height back.
- **The toast column is in flow.** `region` is a grid child with `min-height: 1px`, `gap: 12px`, `prepend`
  order and **no `position: fixed`** — eight toasts make the region 1123.77 and the document 1300 at
  1440 × 900. A "proper toast" port that pins them to a corner is a different design.
- **Both kinds are the same colour.** The script adds `cl-alert08--saved` / `cl-alert08--invite` and **no
  rule in the sheet matches either**; `--cl-alert08-tone` stays `#2dd4bf` for both. Success and "invitation
  sent" are told apart by icon and words alone.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,904** rows, **3,160** lines on `1846490ed`), so this
design comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist
never recorded. `alert-08` is one of the **214 snippet variants in 19 families**; the 42 standalone designs
in that gap are all prepped. Families are worked **in family order, then variant number** — the card family
(20) is **closed**, the alert family is in progress (noticeboard, allclear, fieldguide, banderole, snapback,
beaconry, proofmark prepped; **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **eighth** entry of a
section that does not exist yet. It belongs **between `## Bootstrap Accordions (20)` (line 639) and
`## Bootstrap Buttons (20)` (line 663)** — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 08** — [colorlib](https://colorlib.com/wp/template/alert-08/) · [mayfly](https://mayfly.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-08.jpg)
```

Row-grammar warning, measured on main `1846490ed`: `## Bootstrap Accordions` (the section immediately above)
uses `[colorlib] · [app] · ![preview]` — preview **last**; `## Bootstrap Buttons` mixes both orders. Use the
**accordion** form (preview last) and re-read the surrounding lines **immediately before pushing** — two
implementer streams write this file.

**The name.** `mayfly` — one lowercase word, the insect whose adult life is a single day: the exact idea of
a message that exists for five seconds. It matches the family's closed-single-word pattern (noticeboard,
allclear, fieldguide, banderole, snapback, beaconry, proofmark). Verified free on main `1846490ed`:
`git grep -il mayfly origin/main` → **0 files**; no `apps/mayfly`; no `openspec/specs/template-mayfly`; no
bold name in `TEMPLATES.md`; and the ColorLib catalogue URLs `colorlib.com/wp/template/mayfly/`,
`preview.colorlib.com/theme/mayfly/` and `preview.colorlib.com/theme/bootstrap/mayfly/` all **404**.

Rejected on measurement: **`billet`** (a short note — the natural name) **7 files**; **`missive`** **8
files**; **`wisp`** **10 files** (substring of *whisper*); **`fleeting`** **1 file**. Still free on the same
probe if a later variant needs one: `topple`. Do **not** reuse `noticeboard`, `allclear`, `fieldguide`,
`banderole`, `snapback`, `beaconry` or `proofmark`, nor the card family's twenty taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 2,616 B** live (`2,413 B` inside the archive), `<title>` "Alert V08 \| Colorlib", `lang="en"`, **one** stylesheet, **1** `<script>` (the snippet — no host gtag on this page) |
| preview path      | **`theme/bootstrap/alert-08/`**; `theme/alert-08/` **404** (9 B), `theme/bb/alert-08/` **404** (9 B)                        |
| stylesheet        | `css/style.css?v=61fbfce1`, **8,775 B**, **394** lines, sha256 `369f5df4fea38f3f3cd7325efe3ede33145bd94145f55fc6ed6d53cdfdfd9678` |
| script            | `js/snippet.js?v=95f98c1e`, **4,146 B**, sha256 `e192374f8abb58f55e5e64fb1eaf264128ba18e77f94dcb3eae1d8a6a6ba70b3`; one IIFE, 101 lines, no framework |
| archive           | `preview.colorlib.com/downloads/free/alert-08.zip`, **200, 195,826 B** (= 191.2 KiB ✓ the page's "191 KB"), **16 entries**: 5 dirs + `index.html` 2,413 B + `css/style.css` 8,775 B + `js/snippet.js` 4,146 B + `README.md` 1,262 B + **8 `woff2`** |
| live ↔ archive    | CSS **and** JS **identical sha256**; the two HTML files differ **only** in the `<head>` (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, the two `?v=` queries) → **live preview verified; the archive is its un-versioned twin** |
| README            | lists `index.html`, `css/style.css`, `js/snippet.js`, `fonts/` and **`images/  its images`** — **there is no `images/` directory** in the archive (defect 9). It also repairs the "Bootstrap project" line to "Bootstrap 4, 5, 6" |
| fonts             | **8** `woff2` binaries in **2** distinct cuts: Outfit latin **32,228 B** sha256 `92684e4acde79ef07758cd09380b7e01e9824d8b061eddeda046f78c166d7b12`, latin-ext **14,760 B** sha256 `9e38b3f1575daba3435ef09d33a202585ed5bd204bd0a8c744955c750c2b9091`; the sheet declares only **6** `@font-face` (**400 / 600 / 700**), so the `outfit-500-*` pair ships **undeclared** (defect 10) |
| type proof        | one byte-identical binary per subset across three declarations, yet the **advance widths differ** — canvas A/B at 32 px on `"Profile saved invitation"`: 400 → **324**, 500 → **324**, 600 → **335**, 700 → **347**, 800 → **347**. 500 aliases to the 400 face and 800 to the 700 face ⇒ **one variable cut, three pinned instances**, axis set from each descriptor |
| classes           | **22** classes in the markup, **22** with a rule — plus **2** state classes the script adds (`is-paused`, `is-leaving`) that are styled, and **2 dead** kind classes (`cl-alert08--saved`, `cl-alert08--invite`) the script adds that **no rule matches** (defect 2). The only rule with no markup is `.cl-icon` (defect 3) |
| custom properties | **1**: `--cl-alert08-tone: #2dd4bf` on `.cl-alert08` — the whole tone system is a single literal |
| CSS anatomy       | **6** `@font-face` + 4 `:where(html) … { all: revert }` guard groups (~46 lines of framework reset) + ~40 design rule blocks; **2** `@media` (`max-width: 800px`, `prefers-reduced-motion: reduce`), **1** `@keyframes` (`cl-alert08-in`, 0.32 s), **3** `transition` declarations (button background .15 s, leaving toast .24 s, and `none` under reduced motion), **0** container queries |
| controls          | **4 `<button>`** (2 triggers + 2 toast closes), **0 `<a>`**, **0 `<input>`**, **0 `<img>`**, **4 `<svg>`** (2 icon + 2 close, one pair per rendered toast), **1 `<template>`** |
| headings          | **1 `h1`** (the person's name) and nothing else — no `h2`–`h6`                                                                  |
| landmarks         | `<main class="cl-alert08-demo">` (unlabelled) → `<section aria-labelledby="cl-alert08-title">` + a `<div role="status" aria-label="Notifications">` sibling |
| ids               | **2** (`cl-alert08-title`, `cl-alert08-tpl`) and **no fragments** — there is not a single `href` on the page            |
| document height   | **900** at 1440 × 900 (the wrapper's `min-height: 100vh` is the floor and the content is 396–893 short of it); **893** at 320 × 568 (scrolls 325); **833** at 390 × 664 (scrolls 169); **1300** with 8 toasts at 1440 × 900 |
| screenshot        | `https://colorlib.com/wp/wp-content/uploads/sites/2/alert-08.jpg`, **17,546 B**, **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it — and it is a **macOS browser mock-up** with an empty `preview.colorlib.com` URL pill (defect 11). `alert-08-free-template.jpg` and `alert-08-featured.jpg` are **404** |

## Page arithmetic — a 960 px grid, two columns, one in-flow stack

Measured at 1440 × 900 with the real faces loaded (the archive copy, whose CSS/JS hash identically to live;
only the demo's injected toasts differ from the plain page, and both copies inject two).

| box                        | x   | y    | w     | h        |
| -------------------------- | --- | ---- | ----- | -------- |
| `main.cl-alert08-demo`     | 0   | 0    | 1440  | 900      |
| `div.cl-alert08-layout`    | 240 | 88   | **960** | 396    |
| `section.cl-alert08-card`  | 240 | 88   | **552** | **396** |
| `__profile`                | 268 | 116  | 496   | 60       |
| `__avatar`                 | 268 | 118  | 56    | 56       |
| `h1.__title`               | 340 | 116  | 213   | 36       |
| `dl.__facts`               | 268 | 200  | 496   | 147      |
| fact row 1 / 2 / 3         | 268 | 200 / 249 / 298 | 496 | **49** each |
| `__actions`                | 268 | 371  | 496   | 48       |
| `__btn` (primary)          | 268 | 371  | **144** | 48     |
| `__btn--ghost`             | 422 | 371  | **183** | 48     |
| `p.__note`                 | 268 | 435  | 496   | 21       |
| `div.cl-alert08-region`    | 820 | 88   | **380** | **287.7** |
| toast 1 (`saved`)          | 820 | 88   | 380   | **127.34** |
| toast 2 (`invite`)         | 820 | 227.34 | 380 | **148.36** |
| toast icon tile            | 836 | 104  | 36    | 36       |
| toast close                | 1156 | 104 | 32    | 32       |
| toast progress line        | 820 | 211.34 | 380 | 4        |

The sums the port must preserve (each is a stack, not a setting):

- **Layout:** `552 + 28 (gap) + 380 = 960` = `max-width`, centred with `(1440 − 960) / 2 = 240`, top edge at
  the wrapper's `clamp(24px, 7vw, 88px)` = **88** at 1440.
- **Card:** `28 (padding) + 60 (profile) + 24 (facts margin-top) + 147 + 24 (facts margin-bottom) + 48
  (actions) + 16 (note margin-top) + 21 (note) + 28 (padding) = 396`.
- **Fact row:** `1 (border-top) + 12 + 24 + 12 = 49`; three of them = **147**.
- **Toast (`saved`, two-line body):** `16 (padding-top) + 93.34 (body) + 18 (padding-bottom) = 127.34`, and
  the body is `23.2 (title) + 2 + 42.05 (2 × 21.025) + 8 + 18.125 (timer) = 93.375`.
- **Toast (`invite`, three-line body):** `114.36` body ⇒ **148.36** — one extra body line is the whole
  difference between the two toasts, and it is why the stack is 287.7 and not 266.7.
- **Toast grid:** `380 − 16 − 12 − 12 = 340 = 36 (icon) + 12 (gap) + 260 (body) + 12 (gap) + 32 (close)`.
- **Stack:** `127.34 + 12 (gap) + 148.36 = 287.7`.

State transitions measured end to end (this is the behaviour to port, not a guess):

1. **Load** — the script prepends `invite` and then `saved`, so the **`saved` toast is the first child and
   sits on top**; both start their own 5,000 ms budget at injection (measured present at **313 ms** after
   navigation start). Nothing is focused (`activeElement` = `BODY`).
2. **t ≈ 0.7 s** — timer `Closes in 5s`, fill `scaleX(0.8333)`; at 1.4 s `4s / 0.64`; at 2.1 s `3s /
   0.4967`; at 2.8 s `2s / 0.3567`; at 4.9 s `1s / 0.0701`; at 5.2 s `1s / 0`.
3. **Hover a toast** — `is-paused` added, fill `opacity: .55`, label `Paused`, transform **frozen**
   (`0.3467` at both samples 900 ms apart). `mouseleave` resumes from the frozen remainder (`0.2634` after
   400 ms) — the budget is **carried**, not restarted.
4. **Focus inside** — `focusin` pauses the same way (measured with the close button focused: `is-paused`,
   `Paused`). `focusout` resumes only when `relatedTarget` is **outside** the toast.
5. **Close click** — `is-leaving` is added while focus is still on the close button (so the class list is
   `cl-alert08 is-paused is-leaving`), the element is removed **260 ms** later, and focus returns to the
   trigger that opened it (measured: `Save changes`).
6. **`Escape`** — same 260 ms exit; the listener is **on the toast**, so it only works while focus is inside
   one.
7. **Timer expiry** — the same exit path from a `remaining <= 0` frame: the toast disappears
   **5,238 ms** after injection (5,000 budget + 260 ms exit; measured `313 → 5,551` after navigation start).
8. **`prefers-reduced-motion: reduce`** — entry `animation: none`, and a close removes the toast **without**
   `is-leaving` (immediate; measured the remaining toast still present with `is-paused` and no leaving
   class).
9. **Stack growth** — 2 toasts `287.7`, 4 toasts `566.39` (last toast at y 506.03, document still 900), 8
   toasts **1123.77** and document **1300** (the page scrolls).

## Design tokens — one mint ground, one teal brand, one dark toast

| role                 | value                                             | where                                                                 |
| -------------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| ink                  | `#10231f`                                         | card text, `dd` values, avatar-adjacent type                          |
| muted                | `#52635f`                                         | `__sub`, `dt`, `__note`                                               |
| hairline             | `#e5ecea`                                         | the fact rows' `border-top: 1px`                                      |
| paper                | `#ffffff`                                         | the card                                                              |
| ground               | `#f1f5f4`                                         | `body`                                                                |
| ground wash          | `linear-gradient(135deg, rgba(20,184,166,.10), transparent 40%)` | painted over the ground on `.cl-alert08-demo` (a teal bloom in the top-left) |
| brand                | `#0f766e`                                         | primary button, every `:focus-visible` outline on the card             |
| brand hover          | `#0b5d57`                                         | primary button hover                                                  |
| brand ink            | `#0b4f49`                                         | ghost button text                                                     |
| brand wash           | `#e6f2f0`                                         | ghost button ground                                                   |
| brand wash hover     | `#d3e9e5`                                         | ghost button hover                                                    |
| avatar start / end   | `#14b8a6` → `#0e7490`                             | `linear-gradient(135deg, …)` on the 56 px tile                        |
| toast ground         | `#0f1f1d`                                         | the toast                                                             |
| toast ink            | `#e8f3f1`                                         | toast base colour (inherited)                                         |
| toast title          | `#ffffff`                                         | `__title`                                                             |
| toast body           | `#c5d6d3`                                         | `__text`, close icon                                                  |
| tone                 | `#2dd4bf`                                         | icon glyph, timer label, progress fill (`--cl-alert08-tone`)          |
| toast wash           | `rgba(255,255,255,.08)` (composites to `#22312f`) | icon tile ground, progress track                                      |
| toast wash hover     | `rgba(255,255,255,.10)`                           | close button hover                                                    |
| card shadow          | `0 20px 40px -28px rgba(15,50,45,.35)`            | `.cl-alert08-card`                                                    |
| toast shadow         | `0 18px 36px -18px rgba(15,31,29,.65)`            | `.cl-alert08`                                                         |

Radii: card **22**, avatar **18**, card buttons **12**, toast **16**, toast close **8**, icon tile **50 %**.
Type: **Outfit** only — `h1` `24 / 700` with `letter-spacing: -.01em` (**−0.24px**) and `line-height: 1.5`
(**36**), `__sub` `16 / 400`, `dt` `16 / 400` muted, `dd` `16 / 600`, buttons `16 / 600`, `__note` `14 / 400`
(**21**), avatar `20 / 700`, toast `line-height: 1.45` with `__title 16 / 600`, `__text 14.5 / 400`
(**21.025**), `__timer 12.5 / 600` **uppercase** with `letter-spacing: .04em` (**0.5px**) and
**18.125** tall.

Fixed metrics: wrapper `padding: clamp(24px, 7vw, 88px) 16px`; card padding **28** (`22px 18px` at ≤ 800);
profile `gap: 16`; facts `margin: 24px 0`, row `padding: 12px 0` with `gap: 4px 16px`; actions `gap: 10`;
card button `padding: 12px 20px`; note `margin: 16px 0 0`; toast `padding: 16px 12px 18px 16px`, grid
`36 / 1fr / 32` with `gap: 12`; icon tile `36 × 36`; close `32 × 32`; progress line `height: 4` in the
toast's bottom-left corner; region `gap: 12`, `min-height: 1px`.

## The width ladder (1 px sweep, 300 → 1010; every threshold measured)

Single column **≤ 800**: `card = vw − 32`, content `= vw − 68`, padding `22px 18px`.
Two columns **≥ 801**: `layout = min(960, vw − 32)`, `card = layout − 408` (i.e. `vw − 440` until
**992**, then **552**), padding **28**.

| vw  | card | card h | sub lines | note lines | actions | note                             |
| --- | ---: | -----: | --------: | ---------: | ------: | -------------------------------- |
| 300 | 268  | **564** | 2        | 3          | 106     | facts rows 2 and 3 **wrap** (77 each) |
| 310 | 278  | 564    | 2        | 3          | 106     | rows still wrapped               |
| 320 | 288  | **508** | 2        | 3          | 106     | rows flush again (49 each)       |
| 324 | 292  | **487** | 2        | **2**      | 106     | note loses a line                |
| 343 | 311  | 487    | 2        | 2          | 106     |                                  |
| 353 | 321  | **463** | **1**    | 2          | 106     | sub fits on one line at 213 px   |
| 360 | 328  | 463    | 1        | 2          | 106     |                                  |
| 390 | 358  | 463    | 1        | 2          | 106     |                                  |
| 405 | 373  | **405** | 1        | 2          | **48**  | buttons fit one row at content 337 |
| 480 | 448  | 405    | 1        | 2          | 48      |                                  |
| 542 | 510  | **384** | 1        | **1**      | 48      | note fits at content 474          |
| 600 | 568  | 384    | 1        | 1          | 48      |                                  |
| 768 | 736  | 384    | 1        | 1          | 48      |                                  |
| 799 | 767  | 384    | 1        | 1          | 48      |                                  |
| 800 | 768  | 384    | 1        | 1          | 48      | last single-column width         |
| **801** | **361** | **475** | 1  | **2**      | **106** | two columns; padding steps to 28 |
| 833 | 393  | **417** | 1        | 2          | **48**  | buttons fit again at content 337  |
| 900 | 460  | 417    | 1        | 2          | 48      |                                  |
| 970 | 530  | **396** | 1        | **1**      | 48      | note fits at content 474          |
| 992 | 552  | 396    | 1        | 1          | 48      | layout caps at 960                |
| 1024| 552  | 396    | 1        | 1          | 48      |                                  |
| 1440| 552  | 396    | 1        | 1          | 48      |                                  |

Four facts to keep: the card is **widest at 800 and narrowest at 801** (768 → 361) and its height **goes
over** at that seam (384 → 475); the height sequence is **not monotonic** in either direction; the wrapper's
own padding knee is at **1258** (`7vw ≥ 88` from `vw 1257.14`, measured `87.99 → 88`); and there is **no
horizontal overflow at any width** (`window.scrollTo(200, 0)` leaves `scrollX` **0** at 300 → 1440,
`body.scrollWidth === clientWidth` at every one).

## Contrast (WCAG 2.x, computed from the shipped hexes; the avatar measured on pixels)

| pair                                          | ratio     | verdict |
| --------------------------------------------- | --------: | ------- |
| ink `#10231f` on paper `#fff`                  | **16.38** | AA/AAA  |
| muted `#52635f` on paper                       | **6.35**  | AA/AAA  |
| muted on ground `#f1f5f4`                      | **5.77**  | AA/AAA  |
| ink on ground                                  | **14.90** | AA/AAA  |
| toast title `#fff` on toast `#0f1f1d`          | **17.02** | AA/AAA  |
| toast body `#c5d6d3` on toast                  | **11.29** | AA/AAA  |
| timer / fill `#2dd4bf` on toast                | **9.14**  | AA/AAA  |
| tone on the icon wash `#22312f`                | **7.29**  | AA/AAA  |
| white on brand `#0f766e` (button)              | **5.47**  | AA      |
| white on brand hover `#0b5d57`                 | **7.73**  | AA/AAA  |
| ghost `#0b4f49` on `#e6f2f0`                   | **8.22**  | AA/AAA  |
| ghost hover on `#d3e9e5`                       | **7.43**  | AA/AAA  |
| focus ring `#0f766e` on paper                  | **5.47**  | passes 1.4.11 |
| focus ring `#0f766e` on ground                 | **4.98**  | passes 1.4.11 |
| close ring `#2dd4bf` on toast                  | **9.14**  | passes 1.4.11 |
| **white `JR` on the gradient's light end `#14b8a6`** | **2.49** | **below 3 : 1** at the corner; measured **3.17** at the glyph positions |
| white on the gradient's dark end `#0e7490`     | **5.36**  | passes  |

Every **text** pair passes AA. The one marginal case is the avatar's white initials: sampled on the render,
the ground under the glyphs runs `#129f9e` (3.17) at the light end to `#0f7e93` (4.74), so it clears the
**large-text** threshold (20 px / 700) by 0.17 — see defect 8.

## Defects found in the reference (fix in the port; do not reproduce)

1. **The stack re-announces itself.** `role="status"` is `aria-atomic="true"`, so each insertion into the
   region announces **every toast in it** — and because the demo injects two toasts at load, a screen-reader
   user hears the whole column on arrival, then again per addition. **Port:** put the live region on the
   **toast** (`role="status"` per toast, container unlabelled) or make the container
   `aria-live="polite" aria-atomic="false"`; never `role="status"` + `aria-atomic` on a list that grows.
2. **Two dead kind classes.** `el.classList.add('cl-alert08--' + kind)` produces `cl-alert08--saved` /
   `cl-alert08--invite` and the sheet matches neither, so `--cl-alert08-tone` is `#2dd4bf` for both kinds
   (measured on both toasts). **Port:** either drop the class, or keep it and give the success kind its own
   tone — but do not ship a class that styles nothing.
3. **Dead CSS:** `.cl-icon` (`height: 1em; width: auto; fill: currentColor; display: inline-block`) styles
   nothing in this markup — the **eighth consecutive sibling** in this family to carry it.
4. **The pause state is invisible to assistive tech.** `Paused` / `Closes in Ns` is `aria-hidden` (correct —
   a label that changes 60×/s must not be announced), but nothing tells a screen-reader user that the clock
   stopped, and a keyboard user who leaves the toast resumes with whatever remains. **Port:** announce the
   pause **once** from the toast's own live region (`Paused while you interact`), and never auto-dismiss a
   toast that contains focus.
5. **The stack is unbounded and in flow.** No cap, no `position: fixed`, no scroll container: 8 toasts make
   the region **1123.77** and the document **1300** at 1440 × 900, and at ≤ 800 the region has `order: -1`,
   so a long stack pushes the whole card off-screen. **Port:** cap the stack at **4** toasts, dropping the
   oldest, and keep the in-flow column.
6. **Touch has no pause.** Pausing is `mouseenter` only; there is no `@media (hover: none)` path and no
   pointer handling, so on a phone the only exit is the 32 px close button. **Port:** also pause while a
   pointer is down inside the toast, and record the WCAG **2.2.1** deviation (5 s of content with no
   extension control) as *accepted with mitigations* — focus-pause + a named close button — never as
   compliant.
7. **Both toasts are injected on load.** The demo wants to show the component immediately, which a real page
   must not copy: the port starts with an **empty region** and lets the two buttons create the toasts.
8. **The avatar's white initials sit on a 2.49 : 1 corner.** On the render the glyph ground measures 3.17 at
   its lightest, i.e. 0.17 over the large-text threshold. **Port:** darken the gradient (e.g.
   `#0f766e → #0b4f49`, 5.47 / 8.22 against white) or use ink initials on the existing gradient.
9. **The README advertises `images/`** that the archive does not contain (the zip has `index.html`, `css/`,
   `js/`, `fonts/`, `README.md` only) — the **third variant in a row** with that line, and this page has
   **0 `<img>`**.
10. **An undeclared font pair.** `fonts/outfit-500-latin.woff2` and `-latin-ext` ship in the archive and no
    `@font-face` references them; a 500 request renders the 400 face (advance 324, identical to 400).
    **Port:** load **400 / 600 / 700** only.
11. **The screenshot is a macOS browser mock-up** — 1200 × 972, traffic lights, an **empty**
    `preview.colorlib.com` URL pill, a grey desk and a drop shadow, with the page rendered inside. Its
    *content* is an honest capture of the demo (both toasts, same words, same progress position), but the
    frame is **never** adopted: the recreation's ground is `#f1f5f4` edge to edge.

Two further reference facts that are **not** defects but must not be "fixed": the timer label is pinned to
`Closes in 1s` by `Math.max(1, …)` for the whole final second (measured at fills 0.0701 and 0), and the
progress line reaches `scaleX(0)` **before** the removal frame, so the last visible frame is an empty track.

## Requirements

### Feature: The page skeleton and its two columns

#### Scenario: One card, one stack, no chrome

- **GIVEN** the `mayfly` app at 1440 × 900
- **WHEN** the document is read top to bottom
- **THEN** the order SHALL be: **`<main>` wrapper → one grid → the profile card, then the notification
  region → the footer**
- **AND** the page SHALL contain **no nav, no hero, no imagery, no second card** — the only surfaces are the
  white card and the dark toasts on `#f1f5f4` + the teal bloom
- **AND** the wrapper SHALL be `box-sizing: border-box`, `min-height: 100vh`,
  `padding: clamp(24px, 7vw, 88px) 16px` (**24** at ≤ 342, `7vw` from 343, **88** at ≥ 1258) with
  `background: linear-gradient(135deg, rgba(20,184,166,.10), transparent 40%), #f1f5f4`

#### Scenario: The grid and its 801 px breakpoint

- **GIVEN** the port at 1440 and at 800 / 801
- **WHEN** the layout is measured
- **THEN** `≥ 801` SHALL be `display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 380px);
  gap: 28px; align-items: start; max-width: 960px; margin: 0 auto` — **552 + 28 + 380 = 960** at 1440, and
  **361 + 28 + 380 = 769** at 801
- **AND** `≤ 800` SHALL be a **single** `minmax(0, 1fr)` column with the **region first**
  (`order: -1`), so the toasts sit **above** the card and both are `vw − 32` wide
- **AND** the card's padding SHALL step **28 → 22px 18px** at the same breakpoint
- **AND** the breakpoint SHALL be exactly **800 / 801** — measured: 768-wide card at 800, 361-wide card at
  801

#### Scenario: The card is `border-box`

- **GIVEN** the card at 1440
- **WHEN** its box is measured
- **THEN** it SHALL be **552 × 396** at (240, 88) with `padding: 28px`, radius **22**, `background: #fff`,
  `box-shadow: 0 20px 40px -28px rgba(15,50,45,.35)`, `color: #10231f` and `line-height: 1.5`
- **AND** `box-sizing: border-box` SHALL apply to the card itself (the reference sets it on
  `.cl-alert08-layout *`, and `.cl-alert08-layout` is the one **content-box** element in the tree — it has no
  padding or border, so the outer width equals `max-width`; do not "fix" it)

### Feature: The profile card

#### Scenario: Header — avatar, name, role line

- **GIVEN** the card at 1440
- **WHEN** the header is measured
- **THEN** it SHALL be a flex row, `gap: 16`, `align-items: center`, **496 × 60** at (268, 116)
- **AND** the avatar SHALL be **56 × 56**, radius **18**, `display: grid; place-items: center`,
  `background: linear-gradient(135deg, #14b8a6, #0e7490)`, white **20 / 700** initials
- **AND** the `h1` SHALL be **213 × 36** at (340, 116), `24 / 700`, `letter-spacing: -.01em`, `line-height: 1.5`,
  `margin: 0`, and it SHALL be the page's **only heading**
- **AND** the role line SHALL be **213 × 24**, `16 / 400` in `#52635f`, `margin: 0`, and SHALL keep the
  reference's *kind* — a role plus a company separated by `·` (`&middot;`)

#### Scenario: The three fact rows

- **GIVEN** the `<dl>` at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **496 × 147** at (268, 200) with `display: grid; gap: 0; margin: 24px 0`, holding
  **three** `div` rows of **49** each
- **AND** each row SHALL be `display: flex; flex-wrap: wrap; gap: 4px 16px; justify-content: space-between;
  padding: 12px 0; border-top: 1px solid #e5ecea`, with `dt` `16 / 400` in `#52635f` and `dd`
  `16 / 600` in `#10231f` (`margin: 0`)
- **AND** the three labels SHALL keep the reference's *kind* — a time zone, a visibility, and a team size —
  and each value SHALL fit one line at 1440 so the row arithmetic (`1 + 12 + 24 + 12 = 49`) holds

#### Scenario: Facts rows wrap rather than overflow below ~315

- **GIVEN** the card narrower than ~315 (content < 247)
- **WHEN** the rows are measured
- **THEN** a row's `dd` SHALL drop below its `dt` inside the wrapping flex row and the row SHALL grow to
  **77** (`1 + 12 + 24 + 4 + 24 + 12`), so the `<dl>` measures **219** and the card **564** at 300
- **AND** at 320 (content 252 ≥ 247) all three rows SHALL be back to **49** and the card **508**
- **AND** no `overflow: hidden` or `text-overflow: ellipsis` SHALL be introduced anywhere in the card

#### Scenario: The two buttons and the 337 px wrap threshold

- **GIVEN** the actions row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be a flex row, `flex-wrap: wrap; gap: 10px`, **496 × 48**, with the primary
  **144 × 48** and the ghost **183 × 48**
- **AND** each button SHALL be `padding: 12px 20px; border: 0; border-radius: 12px; font: inherit;
  font-weight: 600; cursor: pointer`, the primary in `#0f766e`/`#fff` (hover `#0b5d57`) and the ghost in
  `#0b4f49` on `#e6f2f0` (hover `#d3e9e5`), both with `transition: background-color .15s ease`
- **AND** every button SHALL carry `:focus-visible { outline: 3px solid #0f766e; outline-offset: 2px }`
- **AND** the row SHALL hold **one** row at content ≥ **337** (measured: two rows at 404 viewport, one row at
  405) and stack to **106** below it — the port SHALL re-measure with its own labels rather than copying 337

#### Scenario: The note

- **GIVEN** the note paragraph at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **496 × 21** at (268, 435), `14 / 21`, `#52635f`, `margin: 16px 0 0`
- **AND** its copy SHALL keep the reference's *kind* — state the **five-second** budget and the
  **hover/focus pause** in one or two short sentences — and the number SHALL match the shipped `DURATION`

#### Scenario: Card height is a staircase, not a curve

- **GIVEN** a 1 px sweep from 300 to 1440
- **WHEN** the card height is recorded
- **THEN** it SHALL step **564 → 508 → 487 → 463 → 405 → 384 → 475 → 417 → 396** in that order, with the
  steps at **320** (facts rows flush), **324** (note loses a line), **353** (role line fits), **405**
  (buttons fit one row), **542** (note fits one line), **801** (two columns), **833** (buttons fit) and
  **970** (note fits one line in the wider column)
- **AND** a test SHALL assert that the height at 801 is **greater** than at 800 — the seam is where a naive
  port breaks

### Feature: The toast

#### Scenario: Anatomy

- **GIVEN** one toast inside the region at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **380 wide**, `display: grid; grid-template-columns: auto 1fr auto; gap: 12px;
  align-items: start; overflow: hidden; position: relative`, `padding: 16px 12px 18px 16px`, radius **16**,
  `background: #0f1f1d`, `color: #e8f3f1`, `line-height: 1.45`,
  `box-shadow: 0 18px 36px -18px rgba(15,31,29,.65)`
- **AND** its height SHALL be **127.34** for a two-line body and **148.36** for a three-line body, summing as
  `16 + body + 18` where `body = 23.2 (title) + 2 + n × 21.025 + 8 + 18.125 (timer)`
- **AND** the icon column SHALL be **36**, the body column **260**, the close column **32**
  (`380 − 16 − 12 = 340 = 36 + 12 + 260 + 12 + 32`)

#### Scenario: The icon tile

- **GIVEN** the toast's icon
- **WHEN** it is measured
- **THEN** it SHALL be **36 × 36**, `border-radius: 50%`, `display: grid; place-items: center`,
  `background: rgba(255,255,255,.08)`, `color: var(--tone)` (`#2dd4bf`), holding a **20 × 20** stroke icon
- **AND** the icon SHALL be `aria-hidden="true"` and purely decorative — the title carries the meaning

#### Scenario: Title, body and timer

- **GIVEN** the toast's text column
- **WHEN** each line is measured
- **THEN** the title SHALL be `16 / 600` in `#fff`, `margin: 0`
- **AND** the body SHALL be `14.5 / 400` in `#c5d6d3`, `margin: 2px 0 0`, `overflow-wrap: anywhere`
- **AND** the timer SHALL be `12.5 / 600` in the tone colour, `margin: 8px 0 0`, `letter-spacing: .04em`,
  `text-transform: uppercase`, **18.125** tall, and SHALL carry `aria-hidden="true"`

#### Scenario: The 4 px progress line

- **GIVEN** the toast at any moment
- **WHEN** the line is measured
- **THEN** it SHALL be `position: absolute; left: 0; right: 0; bottom: 0; height: 4px;
  background: rgba(255,255,255,.08)` with a **100 %**-tall fill in the tone colour,
  `transform-origin: left center`
- **AND** the fill SHALL be driven by `transform: scaleX(remaining / 5000)` — **never** by `width`,
  `flex-basis` or a CSS transition
- **AND** while paused the fill's `opacity` SHALL be **.55**

#### Scenario: The close button

- **GIVEN** one toast
- **WHEN** the close button is measured
- **THEN** it SHALL be **32 × 32**, radius **8**, `background: transparent`, `color: #c5d6d3`,
  `display: grid; place-items: center`, hovering to `rgba(255,255,255,.10)` + `#fff` and focusing to
  `outline: 2px solid var(--tone); outline-offset: 1px`
- **AND** its accessible name SHALL be `Dismiss: <title>` — the reference's `Dismiss: Profile saved`
  pattern, not a bare "Close"
- **AND** it SHALL hold a **16 × 16** `stroke-width: 2.4` cross

### Feature: The countdown

#### Scenario: Five seconds, sixty frames, one transform

- **GIVEN** a toast created at t = 0
- **WHEN** the loop runs
- **THEN** `DURATION` SHALL be **5000 ms**, decremented by the `requestAnimationFrame` delta only while
  neither hovered nor focused
- **AND** each frame SHALL paint `scaleX(max(0, remaining / 5000))` and the label
  `Closes in {max(1, ceil(remaining / 1000))}s`
- **AND** the loop SHALL be cancelled on removal (`cancelAnimationFrame`) and on unmount

#### Scenario: The label ladder

- **GIVEN** the filled reference state
- **WHEN** the label is sampled across the budget
- **THEN** it SHALL read `Closes in 5s` (0–1 s), `4s`, `3s`, `2s`, `1s` and **never `0s`** — measured at
  fills `0.8333 / 0.64 / 0.4967 / 0.3567 / 0.0701 / 0`
- **AND** a test SHALL drive fake timers and assert the **five** distinct labels in order

#### Scenario: Hover pauses that toast only, and the budget is carried

- **GIVEN** two toasts counting down
- **WHEN** the pointer enters one of them
- **THEN** that toast SHALL gain `is-paused`, its fill SHALL drop to `opacity: .55`, its label SHALL read
  `Paused`, and its transform SHALL **freeze** (measured: identical `scaleX(0.3467)` 900 ms apart) while the
  other toast keeps counting
- **AND** `mouseleave` SHALL resume from the **frozen** remainder (measured `0.3467 → 0.2634` in 400 ms),
  never from 1.0

#### Scenario: Focus pauses too, and only leaves when focus leaves

- **GIVEN** a toast containing the focused close button
- **WHEN** focus enters and then leaves it
- **THEN** `focusin` SHALL pause exactly as hover does and `focusout` SHALL resume **only** when
  `relatedTarget` is outside the toast
- **AND** a toast that contains focus SHALL **never** be auto-dismissed (defect 4's mitigation)

#### Scenario: The exit is 260 ms, twice-over

- **GIVEN** an expiry, a close click, or `Escape`
- **WHEN** the toast is removed
- **THEN** `is-leaving` SHALL be added (`opacity: 0; transform: translateX(24px) scale(.98);
  transition: opacity .24s ease, transform .24s ease`) and the element SHALL be removed **260 ms** later
- **AND** the measured end-to-end lifetime SHALL be ≈ **5,238 ms** (5,000 budget + 260 exit; measured
  `313 → 5,551` from navigation start)

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** a toast enters and is dismissed
- **THEN** the entry `animation` SHALL be `none` and the removal SHALL be **immediate** — no `is-leaving`,
  no 260 ms delay, no translate

### Feature: Stacking, focus and dismissal

#### Scenario: Newest on top, 12 px apart, in flow

- **GIVEN** the region
- **WHEN** toasts are added
- **THEN** each new toast SHALL be **prepended** (newest first), the region SHALL be `display: grid;
  gap: 12px; min-height: 1px` with **no** `position: fixed` and no scroll container
- **AND** the region height SHALL be **287.7** for the reference's two toasts, **566.39** for four and
  **1123.77** for eight, and the stack SHALL push the page rather than overlay it

#### Scenario: The stack is capped at four

- **GIVEN** more than four toasts requested
- **WHEN** the fifth is added
- **THEN** the oldest SHALL be dropped so **at most four** are rendered (defect 5) and a test SHALL press
  both triggers five times and assert `≤ 4` toast nodes
- **AND** the port SHALL NOT let the document grow: at 1440 × 900 the document SHALL stay **900** even at
  the cap

#### Scenario: `Escape` dismisses the focused toast

- **GIVEN** focus inside a toast
- **WHEN** `Escape` is pressed
- **THEN** that toast SHALL be removed through the 260 ms exit and no other toast SHALL be affected
- **AND** the listener SHALL be scoped to the toast (the reference binds `keydown` on the element, so
  `Escape` elsewhere does nothing)

#### Scenario: Focus returns to the trigger

- **GIVEN** a toast that holds focus when it is dismissed (by its close button, by `Escape`, or by expiry)
- **WHEN** it is removed
- **THEN** focus SHALL return to the button that created it (measured: after closing, `activeElement` is
  `Save changes`) and, if that trigger is gone, focus SHALL go to `document.body`

#### Scenario: The page starts empty

- **GIVEN** a fresh load of the port
- **WHEN** the region is read
- **THEN** it SHALL contain **zero** toasts (defect 7) and the two trigger buttons SHALL be the only way to
  create one
- **AND** the region SHALL remain in the DOM (an empty live region, `min-height: 1px`) so that additions are
  announced

### Feature: Semantics and accessibility

#### Scenario: One live region per toast

- **GIVEN** the rendered page
- **WHEN** the accessibility tree is read
- **THEN** each toast SHALL be the live region (`role="status"` on the toast element, `aria-atomic="true"`
  on the **toast**, not the container) or the container SHALL be `aria-live="polite" aria-atomic="false"`
  (defect 1) — the port SHALL NOT make a growing list atomic
- **AND** the region's `aria-label` SHALL name it (`Notifications`) and SHALL NOT be `role="status"` **and**
  labelled **and** atomic at once

#### Scenario: What a screen reader hears

- **GIVEN** a toast that appears
- **WHEN** it is announced
- **THEN** the announced string SHALL be the title and the body only — the timer, the icon and the progress
  line SHALL be `aria-hidden`, and the close button SHALL be reachable as `Dismiss: <title>`
- **AND** a pause SHALL be announced **once** from the toast's own region (`Paused while you interact`), not
  per frame (defect 4)

#### Scenario: Timing is adjustable enough to be honest

- **GIVEN** the five-second budget
- **WHEN** the port is reviewed against WCAG **2.2.1**
- **THEN** the deviation SHALL be **recorded** in this spec and in the app's notes — content disappears
  without an extension control — with the shipped mitigations: hover pause, focus pause, a named close
  button, and an `Escape` binding
- **AND** the port SHALL NOT claim 2.2.1 compliance, and it SHALL NOT lengthen the budget silently (the note
  in the card says five seconds)

#### Scenario: Keyboard path

- **GIVEN** the page loaded with no toasts
- **WHEN** `Tab` is pressed repeatedly
- **THEN** the order SHALL be the two card buttons and then, per toast, its close button (the region follows
  the card in DOM order at ≥ 801 and precedes it at ≤ 800 — the **visual** order is not the tab order, and
  the port SHALL keep DOM order equal to reading order)
- **AND** `Enter` / `Space` on a trigger SHALL create a toast, and on a close button SHALL dismiss one

#### Scenario: Non-text contrast and the avatar

- **GIVEN** the rendered page
- **WHEN** the avatar and every focus ring are measured
- **THEN** the avatar's white `20 / 700` initials SHALL clear **3 : 1** against the **lightest** point of
  their gradient (the reference measures **3.17** at the glyphs and **2.49** at the corner — fix it:
  `#0f766e → #0b4f49` measures 5.47 / 8.22)
- **AND** the card's `:focus-visible` rings SHALL clear **3 : 1** against both paper and ground
  (`#0f766e` = **5.47** on white, **4.98** on `#f1f5f4`)

### Feature: Type, faces and tokens

#### Scenario: Outfit at three weights

- **GIVEN** the built app
- **WHEN** the loaded faces are inspected
- **THEN** the only family SHALL be **Outfit** at **400 / 600 / 700** (Google Fonts
  `css2?family=Outfit:wght@400;600;700&display=swap`, probed **200** with a browser UA on 2026-10-26)
- **AND** no serif, no mono and no second sans SHALL appear anywhere in the tree, and **500** SHALL NOT be
  requested (the reference ships an undeclared 500 pair — defect 10; its absence costs nothing because the
  sheet never asks for it)

#### Scenario: Tokens live in `@theme`

- **GIVEN** `apps/mayfly/src/index.css`
- **WHEN** it is read
- **THEN** it SHALL declare the palette above as tokens (`ink`, `muted`, `hairline`, `paper`, `ground`,
  `brand`, `brand-hover`, `brand-ink`, `brand-wash`, `brand-wash-hover`, `avatar-from`, `avatar-to`,
  `toast`, `toast-ink`, `toast-title`, `toast-body`, `tone`, `toast-shadow`) and every component SHALL
  consume them through Tailwind classes + `cn()`
- **AND** **no** app file SHALL contain `colorlib`, the source slug, the source's invented brand, or a
  reference comment naming them — provenance lives in this spec and in `TEMPLATES.md` only
- **AND** the sheet's `:where(html) … { all: revert }` guard groups and the `cl-alert08-*` names SHALL **not**
  be ported

### Feature: Responsiveness and overflow

#### Scenario: The width ladder

- **GIVEN** the port at 300, 320, 324, 353, 390, 405, 480, 542, 768, 800, 801, 833, 970, 992 and 1440
- **WHEN** the card is measured
- **THEN** it SHALL be **vw − 32** up to 800 and `min(960, vw − 32) − 408` above it — **268** at 300,
  **288** at 320, **358** at 390, **448** at 480, **736** at 768, **768** at 800, **361** at 801, **460** at
  900, **552** at 992 and above
- **AND** the card height SHALL follow the staircase in the table above, including the **475** spike at 801

#### Scenario: No horizontal overflow, vertical scroll only when short

- **GIVEN** the port at 300, 320, 360, 390, 480, 768, 800, 801, 1024 and 1440
- **WHEN** `window.scrollTo(200, 0)` runs at each width
- **THEN** `window.scrollX` SHALL stay **0** and `body.scrollWidth` SHALL equal `clientWidth`
- **AND** the document SHALL be **900** at a 900 px viewport at every one of those widths, **893** at
  320 × 568 (scrolling 325) and **833** at 390 × 664 (scrolling 169) — the wrapper's `min-height: 100vh`
  is the floor in every case

### Feature: Repo integration

#### Scenario: Wiring

- **GIVEN** the app folder
- **WHEN** it is inspected
- **THEN** `apps/mayfly` SHALL exist with package `@free-react-templates/mayfly`, `public/CNAME` =
  `mayfly.free.componentdock.com` and `"homepage"` = `https://mayfly.free.componentdock.com`
- **AND** `vite.config.ts` SHALL register `injectUiSource()`, `package.json` SHALL declare
  `"react": "latest"`, and the lockfile SHALL register the workspace after a root `npm install`

#### Scenario: The attribution link is the page's only link

- **GIVEN** the reference has **0 `<a>` elements**
- **WHEN** the port is inspected
- **THEN** the footer SHALL carry the repo's Component Dock link (`https://www.componentdock.com/`, text
  "Component Dock") and it SHALL be the **only** anchor on the page
- **AND** no other element SHALL be an `<a>`; every control SHALL be a `<button type="button">`

#### Scenario: The TEMPLATES.md row

- **GIVEN** main `1846490ed`
- **WHEN** the row is added
- **THEN** it SHALL be the **eighth** entry of `## Bootstrap Alerts (12)`, inserted between
  `## Bootstrap Accordions (20)` (line 639) and `## Bootstrap Buttons (20)` (line 663), using the accordion
  grammar `[colorlib] · [mayfly] · ![preview]` with the screenshot
  `https://colorlib.com/wp/wp-content/uploads/sites/2/alert-08.jpg`

## Adapting to the repo (deltas — read before writing code)

| reference                                                              | port                                                                                                        |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` — 4 guard groups, ~46 lines            | **drop entirely** — Tailwind preflight already normalises                                                    |
| `--cl-alert08-tone` + `.cl-alert08__*` BEM names                        | `@theme` tokens (table above) + components `ProfileCard`, `FactsList`, `CardActions`, `ToastRegion`, `Toast`, `ToastTimer`, `SiteFooter` |
| `<template id="cl-alert08-tpl">` + `cloneNode(true)`                    | a React `<Toast>` component; no `<template>`, no `innerHTML`, no DOM cloning                                  |
| `MESSAGES` / `ICONS` string maps keyed by a `data-` attribute           | a typed `ToastKind` union with a per-kind `{ title, text, Icon }` record (lucide `Check` / `Mail`)             |
| `requestAnimationFrame` loop inside the toast                           | a `useEffect` loop with a `remaining` ref, cancelled on unmount; assert with fake timers + manual frame stepping |
| `fill.style.transform = scaleX(…)`                                      | `style={{ transform: \`scaleX(${progress})\` }}` (or a CSS custom property), never `width`                    |
| `timer.textContent = 'Paused'`                                          | `paused` state → label; keep `aria-hidden`, and announce the pause once (defect 4)                            |
| `role="status"` on the growing region                                   | `role="status"` **per toast** (defect 1)                                                                      |
| `cl-alert08--saved` / `--invite` (dead)                                  | drop, or use for the icon slot only — do not ship a class with no rule (defect 2)                             |
| `.cl-icon` dead rule                                                    | not ported (defect 3)                                                                                         |
| both toasts injected at load                                            | start empty; the two buttons create toasts (defect 7)                                                         |
| unbounded stack                                                         | cap at **4**, drop the oldest (defect 5)                                                                      |
| `mouseenter` only, no touch path                                        | add `pointerdown` pause; record the 2.2.1 deviation (defect 6)                                                 |
| `document.querySelector('[data-cl-alert08-region]')`                    | a `useRef` on the region (or `createPortal`-free in-flow rendering)                                           |
| 8 `woff2` over 2 binaries, 6 declared                                    | one Google Fonts `<link>` for `Outfit:wght@400;600;700` (verified 200)                                          |
| zero anchors                                                            | exactly **one** anchor: the Component Dock footer link (repo rule 5)                                          |
| screenshot's macOS window, empty URL pill, desk, drop shadow             | **never** adopted — the ground is `#f1f5f4` + the teal bloom edge to edge                                     |

Copy: keep the *kind* of content — an invented person with initials, a role line naming an invented
workspace, three fact rows (time zone / visibility / team size), a primary and a ghost action, a note stating
the five-second budget and the hover/focus pause, and two toast messages (a success confirmation and an
invitation confirmation whose body is long enough to wrap to **three** lines — that line count is what makes
the stack 287.7 and what proves the toast measures its own content). The reference's own names
(`Jonah Reyes`, `Nimbus Labs`, `priya.nair@…`) SHALL NOT appear in the port.

## Verification checklist

- [ ] `apps/mayfly` exists, package `@free-react-templates/mayfly`, `public/CNAME` =
      `mayfly.free.componentdock.com`, `"homepage"` = `https://mayfly.free.componentdock.com`
- [ ] `npm run verify:app mayfly` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-mayfly --type spec` is valid
- [ ] measured at 1440: layout **960**; card **552 × 396** at (240, 88); facts rows **49 / 49 / 49**;
      buttons **144 × 48** and **183 × 48**; region **380**; toasts **127.34** and **148.36**; stack
      **287.7**; document **900**
- [ ] the tokens are exact — ink `#10231f`, muted `#52635f`, hairline `#e5ecea`, ground `#f1f5f4`, brand
      `#0f766e` (hover `#0b5d57`), ghost `#0b4f49` on `#e6f2f0` (hover `#d3e9e5`), avatar `#14b8a6 →
      #0e7490`, toast `#0f1f1d`, toast body `#c5d6d3`, tone `#2dd4bf`
- [ ] the progress line is a **`transform: scaleX()`** on a 4 px bar, driven per frame, and it **freezes**
      on hover and on focus (measured: identical transform after 900 ms paused) then **resumes from the
      remainder**
- [ ] the label ladder is `5s / 4s / 3s / 2s / 1s` and **never `0s`**, `aria-hidden`, uppercase,
      `letter-spacing: .04em`
- [ ] a dismiss (close, `Escape`, or expiry) runs the **260 ms** `is-leaving` exit and returns focus to the
      trigger; total lifetime ≈ **5,238 ms**; reduced motion removes **instantly**
- [ ] the stack is **newest-first**, **12 px** apart, in flow (no fixed positioning), and **capped at 4**
      so the document stays **900** at 1440 × 900 (defect 5)
- [ ] the page starts with **zero** toasts and the two buttons are the only creators (defect 7)
- [ ] each toast (not the container) is the live region, or the container is
      `aria-live="polite" aria-atomic="false"` (defect 1); the timer, icon and progress line are
      `aria-hidden`; each close button's name is `Dismiss: <title>`
- [ ] the pause is announced **once** per pause, not per frame (defect 4), and a focused toast is never
      auto-dismissed
- [ ] the avatar's initials clear **3 : 1** against the lightest pixel of their gradient, and every focus
      ring clears **3 : 1** on paper and ground
- [ ] Outfit **400 / 600 / 700** only (no 500 request, no serif, no mono)
- [ ] width ladder verified: card **268 @ 300**, **288 @ 320**, **358 @ 390**, **448 @ 480**, **736 @ 768**,
      **768 @ 800**, **361 @ 801**, **460 @ 900**, **552 @ 992+**; card height **564 / 508 / 487 / 463 /
      405 / 384 / 475 / 417 / 396** across the same sweep, with **801 taller than 800**
- [ ] no horizontal overflow at 300 / 320 / 360 / 390 / 480 / 768 / 800 / 801 / 1024 / 1440 (`scrollX` 0,
      `scrollWidth === clientWidth`); document **900** at 900 tall, **893** at 320 × 568, **833** at
      390 × 664
- [ ] exactly **1 `h1`**, **0 `<img>`**, **0 `<input>`**, one anchor (Component Dock) and every control a
      `<button type="button">`
- [ ] no occurrence of `colorlib`, the source slug or the reference's invented names in any app file
- [ ] `TEMPLATES.md` carries the `Alert 08` row as the eighth entry of `## Bootstrap Alerts (12)`
- [ ] `curl -I https://mayfly.free.componentdock.com` → 200, `ssl_verify_result=0`
