# Template: Steadystate (Alert — a payments status-page incident card with a native disclosure timeline)

## Purpose

**One narrow column on a cool grey ground: a brand line, and under it a single white incident card with a
6 px amber bar across its top.** The page is the status surface of an invented payments API. The card opens
with a rounded amber **state pill** (*"Degraded performance"*) on the left and a monospaced
**`Started 25 Sep, 09:12 UTC · 2 h 18 min`** on the right, then an `h1` in plain language (*"Card payments
in the EU are slower than usual"*), a two-line summary that says what is *not* broken, and a row of three
small outlined **chips** — two tinted amber (the affected services) and one plain (a service that is fine).

Below that, a **native `<details open>`** runs the rest of the card: a `52.8` px summary row reading
**Incident timeline** + a grey **`4 updates`** pill + a chevron that is already **rotated 180°** because the
panel starts open, and inside it a **vertical timeline drawn entirely with `::before` / `::after`** — a
11 px dot per event (hollow grey `#b6bfcc` on white, except the **current** one, which is filled amber with
a `0 0 0 4px #fff0cc` ring), a `1.5px` `#dde2e9` connector between them, a bold label + a monospaced
`11:20 UTC` on one wrapping line, and a 15 px paragraph under it.

Outside the card, a second white panel with radius 14 lists **four services** on hairline rows, each
right-aligned with a **status word plus a colour dot** — three green *Operational*, one amber *Degraded*.
There is **no JavaScript on this page at all**: the disclosure is the browser's own, and the only motion is
a `200 ms` chevron rotation.

- **Source slug:** `alert-09`
- **ColorLib page:** https://colorlib.com/wp/template/alert-09/ — **HTTP 200, 113,789 B**, `<title>`
  `Alert V09 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V09"**, meta description *"An incident
  alert for a payments status page, with a status pill, start time and duration, a plain-language summary…
  Free download, no jQuery or plugins."*, `datePublished` **2026-09-25T14:53:49+00:00**, claims *"the
  download is 303 KB"* (measured **309,885 B = 302.6 KiB** ✓), lists the behaviours verbatim (*"Native
  `<details>` disclosure, no JavaScript needed"*, *"Vertical timeline drawn with pseudo-elements"*,
  *"Machine-readable `<time>` elements on every update"*, *"Monospace timestamps next to readable copy"*,
  *"Status shown with text as well as colour"*), and its related grid links **seven** other variants of the
  same family (the numbers either side of its own — not named here, so the slug census stays honest).
  This is the **design name the naming audit reads**: ColorLib "Alert V09".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-09/ — **HTTP 200,
  4,909 B**, `<title>` `Alert V09 | Colorlib`, `lang="en"`, **one** stylesheet
  (`css/style.css?v=cadafce7`), **no snippet `<script>`**, and **no** host gtag in the document the way the
  earlier variants carry one (the only scripts at runtime are the preview host's own Cloudflare/gtag pair,
  injected by the wrapper). The slug-only path `theme/alert-09/` is **404 (9 B)** and `theme/bb/alert-09/`
  is **404 (9 B)** — the same `bootstrap/` prefix ladder as the eight earlier variants of this family.
- **Design category:** Alert (**an incident/status alert** — the only variant in the family that is a
  *durable page state* rather than a transient message, a validation summary, or prose admonition).
  **Ninth** of the **`alert` snippet family** (**12** variants) in the **214 snippet variants** of
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/steadystate`, package
  `@free-react-templates/steadystate`, CNAME `steadystate.free.componentdock.com`.

**What this design is, and what it is not.** The family so far: **noticeboard** a static severity ladder,
**allclear** a dismiss/restore list, **fieldguide** admonitions inside prose with no script, **banderole** a
page-level announcement bar, **snapback** a file list with two actionable bars, **beaconry** a dark
cluster-health panel of four simultaneous alerts, **proofmark** a form returned with an error summary,
**mayfly** a stack of self-dismissing toasts. `alert-09` is the first that **never goes away and asks
nothing**: no dismiss button, no restore, no countdown, no form — an alert that stays until the incident is
resolved, wrapped in the page that reports it. It is also the family's first **`<details>`**: the
disclosure is native, so the whole interaction budget is one chevron rotation and a browser-provided
`open` attribute.

**The seven things a careless port flattens** (each measured below):

- **The timeline is pseudo-elements, not an icon list.** Each `<li>` carries `::before` (an `11 × 11`
  `border: 2px` circle at `top: 7px; left: -23px`) and `::after` (a `width: 1.5px` `#dde2e9` connector at
  `top: 22px; bottom: -4px; left: -18px`), with `:last-child::after { display: none }`. A port that draws a
  Lucide icon per row loses the **continuous 1.5 px rule** and the 4 px ring spacing.
- **The current event is the only filled dot — and it is the *first* one.** `.cl-alert09__event--current`
  swaps the hollow `#b6bfcc` border for `var(--cl-alert09-tone)` and adds the `#fff0cc` halo; the newest
  event sits at the **top** of the `<ol>`, so "current" means first, not last.
- **`<details open>` at load, and the chevron is already at 180°.** The rotate rule keys off
  `.cl-alert09__details[open] .cl-alert09__chev`, so the arrow points **up** on arrival and only returns to
  `none` (`transform: none`, i.e. 0°) after a user closes the panel. Measured transforms: open
  `matrix(-1, 0, 0, -1, 0, 0)`, closed `none`, and **mid-transition samples are neither** — a test that
  reads the transform 60 ms after a click sees ~`-73°` and fails.
- **The card has a 6 px *border*, not a padded bar.** `border-top: 6px solid var(--cl-alert09-tone)` with
  `overflow: hidden` — that is why the amber bar follows the 14 px radius instead of sitting inside it, and
  why the card's box is `720 × 601.86` including the bar.
- **The state tone is a single literal that only two consumers read.** `--cl-alert09-tone: #f2a900` on
  `.cl-alert09` feeds the 6 px bar *and* the pill's triangle glyph; the pill's own wash (`#fff3d6`) and ink
  (`#5c3a00`) are separate literals, so recolouring the tone does **not** recolour the pill.
- **Three chips do not fit on one row at 481–484 px.** The card's padding steps `24 → 16` at **480**, and
  the chips need **403** px of content: one row at **≥ 485** (content 403), **two rows at 481–484**
  (content 399–402), then **one row again at 469–480** (content 403–414) — the seam inverts twice in five
  pixels and the card height jumps `768.6 → 804.7 → 764.6`.
- **`4 updates` is copy, not a count.** The summary prints a hard-coded string beside **four** `<li>`
  elements. It is the same class of defect as the family's stale-form-summary, one variant later.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,905** rows, **3,161** lines on `160a1a732`), so this
design comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist
never recorded. `alert-09` is one of the **214 snippet variants in 19 families**; the 42 standalone designs
in that gap are all prepped. Families are worked **in family order, then variant number** — the card family
(20) is **closed**, the alert family is in progress (noticeboard, allclear, fieldguide, banderole, snapback,
beaconry, proofmark, mayfly prepped; **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **ninth** entry of a
section that does not exist yet. It belongs **between `## Bootstrap Accordions (20)` (line 639) and
`## Bootstrap Buttons (20)` (line 663)** — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 09** — [colorlib](https://colorlib.com/wp/template/alert-09/) · [steadystate](https://steadystate.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-09.jpg)
```

Row-grammar warning, measured on main `160a1a732`: `## Bootstrap Accordions` (the section immediately
above) uses `[colorlib] · [app] · ![preview]` — preview **last**; `## Bootstrap Buttons` mixes both orders.
Use the **accordion** form (preview last) and re-read the surrounding lines **immediately before pushing** —
two implementer streams write this file.

**The name.** `steadystate` — one lowercase word, the control-theory term for a system that has settled:
the exact idea of a status page. It matches the family's closed-single-word pattern (noticeboard, allclear,
fieldguide, banderole, snapback, beaconry, proofmark, mayfly). Verified free on main `160a1a732`:
`git grep -il steadystate origin/main` → **0 files**; no `apps/steadystate`; no
`openspec/specs/template-steadystate`; no bold name in `TEMPLATES.md`; and the ColorLib catalogue URLs
`colorlib.com/wp/template/steadystate/`, `preview.colorlib.com/theme/steadystate/` and
`preview.colorlib.com/theme/bootstrap/steadystate/` all **404**.

Rejected on measurement: **`nominal`** (the natural word for "all systems nominal") **7 files**;
**`uptime`** **99 files** (a shipped app name); **`statusline`** **29 files**; **`standdown`** **1 file**;
**`postmortem`** **2 files**. Still free on the same probe if a later variant needs one: `greenbar`,
`allgreen`, `allsteady`, `clearsky`, `restoral`. Do **not** reuse `noticeboard`, `allclear`, `fieldguide`,
`banderole`, `snapback`, `beaconry`, `proofmark` or `mayfly`, nor the card family's twenty taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 4,909 B** live (`4,717 B` inside the archive), `<title>` "Alert V09 \| Colorlib", `lang="en"`, **one** stylesheet, **0** `<script>` elements in the document (the runtime scripts are the preview host's Cloudflare/gtag injection) |
| preview path      | **`theme/bootstrap/alert-09/`**; `theme/alert-09/` **404** (9 B), `theme/bb/alert-09/` **404** (9 B)                        |
| stylesheet        | `css/style.css?v=cadafce7`, **12,347 B**, **517** lines, sha256 `2506f03e4d549422bbdfa0438860f5564dc41a845eec76cd5fa2e1905a87a0c4` |
| script            | **none**. `/js/snippet.js` is a **hard 404 (9 B)** and the archive has **no `js/` directory** — unlike every earlier `alert-*` variant this one needs no script (defect 4) |
| archive           | `preview.colorlib.com/downloads/free/alert-09.zip`, **200, 309,885 B** (= 302.6 KiB ✓ the page's "303 KB"), **18 entries**: 3 dirs + `index.html` 4,717 B + `css/style.css` 12,347 B + `README.md` 1,262 B + **12 `woff2`** |
| live ↔ archive    | CSS **identical sha256**; the two HTML files differ **only in the `<head>`** (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, the `?v=` query) → **live preview verified; the archive is its un-versioned twin** |
| README            | lists `index.html`, `css/style.css`, **`js/snippet.js`**, `fonts/` and **`images/  its images`** — **there is no `js/` and no `images/`** in the archive, and the document has no script at all (defect 4) |
| fonts             | **12** `woff2` over **6** binaries: sans latin **40,240 B** sha256 `056e4e24…c939818` (the *same file* shipped as `400`/`500`/`600`/`700`), sans latin-ext **25,868 B** sha256 `ae1d854f…75b405` (same file × 4), mono-400 latin **10,052 B** `c36f509c…93a7ac`, mono-400 latin-ext **8,860 B** `f1050dc5…a85816d`, mono-500 latin **10,060 B** `a76f53ca…02a6c0`, mono-500 latin-ext **8,848 B** `77f03e26…ec4ae5`; the sheet declares **12** `@font-face` (mono 400/500, sans 400/500/600/700) |
| type proof        | the four sans `@font-face` all point at one byte-identical latin binary, yet the **advance widths differ** — canvas A/B at 32 px on `"Card payments in the EU"`: 300 → **357**, 400 → **357**, 500 → **356**, 600 → **361**, 700 → **369**, 800 → **369** ⇒ **one variable cut**, 400–700 are real instances, 300/800 alias to the extremes. Mono is flat **437** at every weight with all faces pre-loaded, so its two binaries differ only in stroke (and **nothing in the sheet applies `font-weight: 500` to a mono element**, so the 500 pair is never requested — defect 5) |
| classes           | **28** classes in the markup, **28** with at least one rule; **0** unstyled markup classes; **1** dead rule — `.cl-icon` (`height: 1em; width: auto; fill: currentColor; display: inline-block`), the **ninth consecutive sibling** in this family to carry it (defect 3) |
| custom properties | **3**: `--cl-alert09-tone: #f2a900` and `--cl-alert09-deep: #7a4b00` on `.cl-alert09`, plus `--cl-alert09-mono: "IBM Plex Mono", ui-monospace, …` on `.cl-alert09-page` |
| CSS anatomy       | **12** `@font-face` + 4 `:where(html) … { all: revert }` guard groups (~48 lines of framework reset) + **63** style rules; **2** `@media` (`max-width: 480px`, `prefers-reduced-motion: reduce`), **0** `@keyframes`, **2** `transition` declarations (`transform .2s ease` on the chevron, `none` under reduced motion), **0** container queries, **0** gradients |
| controls          | **1 `<a>`** (`#subscribe`), **0 `<button>`**, **0 `<input>`**, **0 `<img>`**, **3 `<svg>`** (24 px brand mark, 16 px pill triangle, 18 px chevron — all inline, all `aria-hidden`), **1 `<details>`**, **4 `<time>`**, **11 `<li>`** (3 chips + 4 events + 4 services) |
| headings          | **1 `h1`** (the incident headline) and nothing else — no `h2`–`h6`; the event labels are `<span>`s               |
| landmarks         | `<main class="cl-alert09-demo">` (unlabelled) → `<section role="status" aria-labelledby="cl-alert09-title">` + a sibling `<ul aria-label="All services">` |
| ids / fragments   | **1** id (`cl-alert09-title`) and **1 fragment** (`#subscribe`) that resolves to **nothing** — the page's only link is dead (defect 1) |
| document height   | **1018** at 1440 × 900; **966** at 768 × 900; **1220** at 390 × 900; **1336** at 320 × 900 — vertical only, `scrollX` **0** and `scrollWidth === clientWidth` at every width |
| screenshot        | `https://colorlib.com/wp/wp-content/uploads/sites/2/alert-09.jpg`, **32,566 B**, **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it — and it is a **macOS browser mock-up** (traffic lights, drop shadow, a *filled* `preview.colorlib.com` URL pill) whose content matches the live render 1:1 (defect 10). The page's own `srcset` also offers `-1024x829`, `-768x622`, `-408x330`, `-353x286` and `-338x274` crops |

## Page arithmetic — one 720 px column, one card, one list

Measured at 1440 × 900 with the real faces loaded (the archive copy, whose CSS hashes identically to live).

| box                        | x   | y        | w     | h        |
| -------------------------- | --- | -------- | ----- | -------- |
| `main.cl-alert09-demo`     | 0   | 0        | 1440  | 1017.94  |
| `div.cl-alert09-page`      | 360 | 72       | **720** | 873.94 |
| `__head`                   | 360 | 72       | 720   | 27.89    |
| `p.__brand`                | 360 | 72       | 216   | 27.89    |
| `a.__sub`                  | 936 | 75.09    | 144   | 21.69    |
| `section.cl-alert09`       | 360 | 123.89   | **720** | **601.86** |
| `__top`                    | 385 | 129.89   | 670   | 46.14    |
| `span.__state`             | 385 | 147.89   | 197   | 28.14    |
| `span.__since`             | 751 | 152.27   | 304   | 19.38    |
| `h1.__title`               | 385 | 190.03   | 670   | 32.5     |
| `p.__text`                 | 385 | 228.53   | 670   | 49.59    |
| `ul.__affected`            | 385 | 294.13   | 670   | 28.14    |
| `li.__chip` (1st)          | 385 | 294.13   | 147   | 28.14    |
| `details.__details`        | 361 | 340.27   | 718   | 376.48   |
| `summary.__summary`        | 361 | 341.27   | 718   | 52.8     |
| `ol.__timeline`            | 361 | 394.06   | 718   | 322.69   |
| `li.__event` (1st)         | 413 | 398.06   | 642   | 91.3     |
| `p.__ev-head` (1st)        | 413 | 398.06   | 642   | 24.8     |
| `p.__ev-text` (1st)        | 413 | 424.86   | 642   | 46.5     |
| `ul.cl-alert09-services`   | 360 | 745.75   | 720   | 200.19   |
| `li` (1st)                 | 361 | 746.75   | 718   | 48.8     |

**The card's 601.86 decomposes exactly** (border-box, so the 6 px bar and 1 px bottom border are inside):
`6 (border-top) + 46.14 (__top) + 14 + 32.5 + 6 (__title) + 49.59 (__text) + 16 + 28.14 + 18 (__affected)
+ 376.48 (__details) + 8 (padding-bottom) + 1 (border-bottom) = 601.85`.

**The details' 376.48** = `1 (border-top) + 52.8 (summary) + 322.69 (timeline)`; the timeline's 322.69 =
`4 + 91.3 + 91.3 + 68.05 + 50.05 + 18` (padding-top, four events, padding-bottom), and each event's height
is `24.8 (head) + 2 + n × 23.25 (text at 15 px / 1.55) + 18 (padding-bottom, last child 0)`.

**The services panel's 200.19** = `48.8 (first row, no border) + 3 × 49.8 (1 px border-top each) + 2 (outer
borders)`.

Closed, the card is **279.17** and the document **900** — the timeline's 322.69 disappears from the card but
**`ol.__timeline` still reports 322.69 through `getBoundingClientRect()` while the `<details>` is closed**
(Chrome keeps the layout of a closed disclosure's content box). Assert on the `<details>` or the card, never
on the `<ol>`.

## Design tokens — one amber state tone, one navy ink, one blue for interaction

| role                 | value                                             | where                                                                 |
| -------------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| ink                  | `#16202e`                                         | `h1`, event labels, service names, brand line                         |
| ink body             | `#3b4658`                                         | `__text`, `__ev-text`, plain chip text                                |
| muted                | `#566173`                                         | `__since`, `__ev-time`, chevron, `__sub`… (mono timestamps)           |
| paper                | `#ffffff`                                         | the card and the services panel                                       |
| ground               | `#f4f6f9`                                         | `body`                                                                |
| tone (amber)         | `#f2a900`                                         | the 6 px card bar, the pill's triangle glyph, the current dot, the warn dot (`--cl-alert09-tone`) |
| tone deep            | `#7a4b00`                                         | current event label, `Degraded` row status (`--cl-alert09-deep`)      |
| pill wash / ink      | `#fff3d6` / `#5c3a00`                             | `.cl-alert09__state`                                                  |
| chip wash / border   | `#fffaf0` / `#efcf82`                             | `.cl-alert09__chip--degraded`                                         |
| plain chip border    | `#d5dbe4`                                         | `.cl-alert09__chip`                                                   |
| count wash / ink     | `#eef1f5` / `#475264`                             | `.cl-alert09__count`                                                  |
| success text / dot   | `#146c43` / `#1f9d61`                             | `.cl-alert09-services__ok`, `::before` dot                            |
| link / focus         | `#0b5cad`                                         | `__sub` text, `:focus-visible` outlines (2 px, offset 2 on the link, −2 on the summary) |
| card border          | `#ead9b0`                                         | `.cl-alert09` left/right/bottom edge (the top edge is the tone bar)   |
| hairline (rows)      | `#e1e6ed` outer, `#eef1f5` separators             | `.cl-alert09-services`                                               |
| hairline (details)   | `#e8ebf0`                                         | `.cl-alert09__details` `border-top`                                   |
| summary hover        | `#f8f9fb`                                         | `.cl-alert09__summary:hover`                                          |
| dot hollow / rule    | `#b6bfcc` / `#dde2e9`                             | `__event::before` (non-current) / `__event::after`                    |
| current halo         | `#fff0cc`                                         | `0 0 0 4px` ring on the current dot                                   |
| card shadow          | `0 1px 2px rgba(22,32,46,.05), 0 16px 32px -24px rgba(22,32,46,.3)` | `.cl-alert09`                                        |

Radii: card **14**, services panel **14**, chip **6**, pill **999**, count pill **999**, dots **50 %**, the
link's focus ring **2**. There are **no gradients and no keyframes** anywhere in the sheet.

Type: **IBM Plex Sans** everywhere and **IBM Plex Mono** for timestamps only —
`h1` `clamp(21px, 3.4vw, 26px) / 700`, `line-height: 1.25`, `letter-spacing: -.01em` (**−0.26px** at 26),
`margin: 14px 0 6px`; `__brand` `18 / 700`; `__sub` `14 / 600`; `__state` `13 / 700`; `__since` `12.5` mono;
`__text` `16 / 400` on the page's `line-height: 1.55` (**24.8**); chips `13 / 400` (`600` when degraded);
`__summary` `16 / 600`; `__count` `12.5 / 500`; `__ev-label` `16 / 700`; `__ev-time` `12.5` mono;
`__ev-text` `15 / 400` (**23.25**); service rows `16 / 500`; `__ok` / `__warn` `14 / 400`.

Fixed metrics: demo `padding: clamp(24px, 6vw, 72px) 16px`, `min-height: 100vh`, `box-sizing: border-box`;
page `max-width: 720px`, `line-height: 1.55`; `__head` `gap: 8px 16px`, `margin-bottom: 24px`; card
`padding: 0 24px 8px`, `border-top: 6px`, `overflow: hidden`; `__top` `padding-top: 18px`, `gap: 8px 16px`;
`__state` `padding: 4px 12px 4px 10px`, `gap: 8`; `__affected` `gap: 8px`, `margin: 16px 0 18px`; chip
`padding: 3px 10px`; `__details` `margin: 0 -24px`; `__summary` `padding: 14px 24px`, `gap: 10`; `__count`
`padding: 1px 8px`; `__timeline` `padding: 4px 24px 18px 52px`; `__event` `padding-bottom: 18px`; `__ev-head`
`gap: 4px 12px`; `__ev-text` `margin: 2px 0 0`; services `margin: 20px 0 0`, row `padding: 12px 20px`,
`gap: 12`.

At **≤ 480** the card's padding steps `0 24px 8px → 0 16px 6px`, the details' negative margin `−24 → −16`,
the summary's padding `14px 24px → 14px 16px`, the timeline's `4px 24px 18px 52px → 4px 16px 16px 42px` and
the service rows `12px 20px → 12px 16px`; the **dot offsets (−23 / −18) do not change**, because they are
measured from the event's own box, not from the padding.

## The width ladder (1 px sweep at the seams, 320 → 1440)

Single column at every width: `page = min(720, vw − 32)`, `card = page`, `content = card − 2 − 2 × padding`
(**670** at 1440, `vw − 82` above 480, `vw − 66` at ≤ 480).

| vw  | card w | card h     | top row | h1  | text | chips | events | doc  | note                                                     |
| --- | -----: | ---------: | ------- | --- | ---- | ----- | ------ | ---: | -------------------------------------------------------- |
| 320 | 288    | **985.9**  | 2 rows  | 2   | 6    | 2     | 4      | 1336 | both `__since` lines wrap; every band at its narrowest   |
| 360 | 328    | 914.6      | 2       | 2   | 5    | 2     | 4      | 1264 | `__since` 2 lines from here down                         |
| 375 | 343    | 895.3      | 2       | 2   | 5    | 2     | 4      | 1245 |                                                          |
| 390 | 358    | 870.5      | 2       | 2   | 4    | 2     | 4      | 1220 | event text drops to 4 lines below 400                    |
| 400 | 368    | 847.2      | 2       | 2   | 4    | 2     | 3      | 1197 |                                                          |
| 420 | 388    | 824.0      | 2       | 2   | 4    | 2     | 3      | 1146 |                                                          |
| 440 | 408    | 800.7      | 2       | 2   | 4    | 2     | 3      | 1126 |                                                          |
| 460 | 428    | 800.7      | 2       | 2   | 4    | 2     | 3      | 1128 |                                                          |
| 470 | 438    | **764.6**  | 2       | 2   | 4    | **1** | 3      | 1093 | content 404 ≥ 403: chips fold to one row at 16 px padding |
| 480 | 448    | 764.6      | 2       | 2   | 4    | 1     | 3      | 1094 | last 16 px-padding width                                 |
| **481** | **449** | **804.7** | 2   | 2   | 4    | **2** | 3      | 1135 | padding steps to 24; content 399 < 403 ⇒ chips wrap again |
| 485 | 453    | **768.6**  | 2       | 2   | 4    | **1** | 3      | 1099 | content 403 ⇒ one row again                              |
| 500 | 468    | 768.6      | 2       | **2** | 4  | 1     | 3      | 1101 | h1 no longer fits 21 px on one line (content 418)         |
| 536 | 504        | **717.5**  | 2       | **1** | 4  | 1     | 3      | —    | h1 fits one line at content 454                          |
| 540 | 508    | 694.3      | 2       | 1   | 3    | 1     | 3      | 1031 | `__text` loses its 4th line                              |
| 560 | 528    | 694.3      | **2**   | 1   | 3    | 1     | 3      | 1034 | `__top` wraps (content 478 < 517)                        |
| 599 | 567        | **643.7**  | **1**   | 1   | 3    | 1     | 2      | —    | content 517 = state 197 + 16 + since 304 ⇒ one row        |
| 640 | 608    | 644.6      | 1       | 1   | 3    | 1     | 2      | 993  |                                                          |
| 700 | 668    | 647.1      | 1       | 1   | 3    | 1     | 2      | 1003 | h1 at 23.8 px                                            |
| 768 | 720    | **601.86** | 1       | 1   | 2    | 1     | 2      | 966  | page hits its 720 cap; `__text` loses a line             |
| 1024| 720    | 601.86     | 1       | 1   | 2    | 1     | 2      | 997  |                                                          |
| 1440| 720    | 601.86     | 1       | 1   | 2    | 1     | 2      | 1018 | demo padding is at its 72 px clamp                       |

Four facts to keep: **the chip row inverts twice in five pixels** (481 → 804.7, 485 → 768.6) and the card
height is **not monotonic** anywhere; the **`__top` wrap threshold is content 517** (vw 599) and the **h1
wrap threshold is content 454** (vw 536) at the 21 px floor; the demo's own padding knees are at **vw 400**
(`6vw = 24`) and **vw 1200** (`6vw = 72`); and there is **no horizontal overflow at any width** —
`scrollX` stays **0** and `documentElement.scrollWidth === clientWidth` at 320 / 340 / 360 / 375 / 390 / 400 /
407 / 408 / 420 / 440 / 460 / 470 / 480 / 481 / 485 / 500 / 540 / 560 / 599 / 640 / 700 / 768 / 800 / 900 /
1024 / 1200 / 1440.

## Contrast (WCAG 2.x, computed from the shipped hexes)

| pair                                                | ratio     | verdict |
| --------------------------------------------------- | --------: | ------- |
| ink `#16202e` on paper `#fff`                        | **16.40** | AAA     |
| ink on ground `#f4f6f9`                              | **15.15** | AAA     |
| body `#3b4658` on paper                              | **9.53**  | AAA     |
| status pill `#5c3a00` on `#fff3d6`                   | **9.24**  | AAA     |
| degraded chip `#5c3a00` on `#fffaf0`                 | **9.80**  | AAA     |
| degraded row / current label `#7a4b00` on paper      | **7.41**  | AAA     |
| count pill `#475264` on `#eef1f5`                    | **6.97**  | AA/AAA  |
| operational `#146c43` on paper                       | **6.45**  | AA/AAA  |
| mono timestamps `#566173` on paper                   | **6.26**  | AA      |
| mono timestamps on ground                            | **5.78**  | AA      |
| subscribe link `#0b5cad` on ground                   | **6.16**  | AA      |
| focus ring `#0b5cad` on paper / on ground            | **6.67 / 6.16** | passes 1.4.11 |
| green dot `#1f9d61` on paper (non-text)              | **3.47**  | passes 1.4.11 |
| **amber bar `#f2a900` on paper (non-text)**          | **2.01**  | **below 3 : 1** |
| **amber glyph `#f2a900` on pill wash `#fff3d6`**     | **1.82**  | **below 3 : 1** |
| hollow dot `#b6bfcc` on paper (non-text)             | **1.86**  | decorative |
| timeline rule `#dde2e9` (non-text)                   | **1.30**  | decorative |

Every **text** pair passes AA with room — this is the first variant in the family with **zero** failing text
pairs, and the only family member whose amber tone is *both* the brand and a state colour. The two failing
**non-text** pairs are the 6 px bar and the pill's triangle glyph: the state is also stated in words
(`Degraded performance`, `Degraded`), so 1.4.11 is met by redundancy, but a colour-blind reader gets no
non-text cue from the bar. **Port fix:** keep `#f2a900` for the pill wash and the dot, and darken the *bar
and the glyph* to **`#b45309`** (5.02 : 1 on paper, 4.55 : 1 on the pill wash, 4.83 : 1 on the chip wash) so
the tone survives at 3 : 1 without changing the palette's character.

## Defects found in the reference (fix in the port; do not reproduce)

1. **The page's only link is dead.** `Subscribe to updates` points at `#subscribe`; the document's only `id`
   is `cl-alert09-title`, so the link scrolls nowhere (and there is no form to subscribe to). **Port:**
   point it at the services panel (`#services`) or render a `mailto:`/status feed link that exists.
2. **`role="status"` wraps the entire card.** The live region is the 601.86 px `<section>`, so its implicit
   `aria-live="polite"` + `aria-atomic="true"` announces the **headline, the whole summary, three chips and
   four timeline events** (≈ 700 characters) whenever anything inside changes. **Port:** keep the live
   region on the **state line only** (`role="status"` on the pill + since row) and let the rest be static
   text; a status page's announcement is *"Degraded performance, started 09:12 UTC"*, not the article.
3. **Dead CSS:** `.cl-icon` (`height: 1em; width: auto; fill: currentColor; display: inline-block`) styles
   nothing in this markup — the **ninth consecutive sibling** in this family to carry it.
4. **The README advertises two directories that do not exist.** `js/snippet.js` is listed and there is **no
   `js/`** in the archive (`/js/snippet.js` is a hard **404**, and the document has **0** `<script>`); 
   `images/  its images` is listed and there are **no images** either — the page has **0** `<img>` and its
   three glyphs are inline SVG. This is the family's fourth README lie in a row.
5. **Two font binaries are never requested.** The sheet declares `IBM Plex Mono` 400 **and** 500, ships both
   pairs, and **no rule applies weight 500 to a mono element** (`__since` and `__ev-time` inherit 400; the
   `4 updates` pill is sans 500). **Port:** request mono **400 only**.
6. **`4 updates` is a hard-coded string beside four `<li>`s.** Nothing derives it; a fifth event would ship
   a lying count. **Port:** render `{events.length} updates` (and the plural is the test).
7. **`Payouts · operational` sits inside a list labelled "affected services".** Two of the three chips are
   `--degraded`; the third is a plain outline announcing health inside the *affected* group. **Port:** keep
   the three-chip rhythm but make every chip in that group affected (or relabel the group).
8. **The unbounded duration line is stale by design.** `Started … · 2 h 18 min` is static copy against a
   static `<time>`, consistent with the last event (09:12 → 11:20 = 2 h 08) only by accident of the numbers
   the author chose (11:30 would be 2 h 18). **Port:** derive the duration from the two timestamps, or drop
   the duration and keep the start time.
9. **`aria-label` on two `<ul>`s, none on the `<section>`.** The card's role is carried by `role="status"`
   + `aria-labelledby`, so a screen-reader user hears a live region before hearing what page they are on;
   there is no `header`/`footer` landmark and no skip link. **Port:** add a real page header (brand + link)
   and a footer, and keep exactly one live region.
10. **The screenshot is a macOS browser mock-up** — traffic lights, desk-grey surround, drop shadow, and a
    `preview.colorlib.com` URL pill. **Never** adopt the frame; the page is edge-to-edge `#f4f6f9`.

## Requirements

### Feature: The page skeleton and its single column

#### Scenario: One column, one card, one list, no chrome

- **GIVEN** the `steadystate` app at 1440 × 900
- **WHEN** the document is read top to bottom
- **THEN** the order SHALL be: **`<main>` wrapper → header (brand + one link) → the incident card → the
  services panel → the footer**
- **AND** the page SHALL contain **no nav, no hero, no imagery, no second card, no buttons** — the only
  surfaces are the amber-topped white card and the white services panel on `#f4f6f9`
- **AND** the wrapper SHALL be `box-sizing: border-box`, `min-height: 100vh`,
  `padding: clamp(24px, 6vw, 72px) 16px` (**24** at ≤ 400, `6vw` between, **72** at ≥ 1200) with
  `background: #f4f6f9`

#### Scenario: The 720 px measure

- **GIVEN** the port at 1440 and at 768 / 767
- **WHEN** the column is measured
- **THEN** it SHALL be `max-width: 720px; margin: 0 auto` and **720** wide at (360, 72) at 1440, with
  `color: #16202e` and `line-height: 1.55` (**24.8**)
- **AND** at **≤ 767** it SHALL be `vw − 32` (608 at 640, 358 at 390, 288 at 320) with **no** breakpoint of
  its own — the only width breakpoint on the page is the card's **480** padding step
- **AND** the page SHALL hold exactly **one `h1`** and **no `h2`–`h6`**

#### Scenario: Header — brand line and the page's only link

- **GIVEN** the header at 1440
- **WHEN** it is measured
- **THEN** it SHALL be `display: flex; flex-wrap: wrap; gap: 8px 16px; align-items: center;
  justify-content: space-between`, **720 × 27.89**, `margin-bottom: 24`
- **AND** the brand SHALL be a flex row, `gap: 10`, `18 / 700`, holding a **24 × 24** inline SVG mark
  (`aria-hidden`) whose two strokes carry the brand colours (`#0b5cad` wave, `#f2a900` dot in the
  reference — re-draw with the port's own palette) and the product name
- **AND** the link SHALL be `14 / 600` in `#0b5cad` with `text-underline-offset: 3px`, **144 × 21.69** at
  (936, 75.09), and `:focus-visible { outline: 2px solid #0b5cad; outline-offset: 2px; border-radius: 2px }`
- **AND** it SHALL resolve to a target that exists on the page (defect 1) — never `href="#"`

#### Scenario: The header wraps at content 376, and the card's top row at 517

- **GIVEN** a 1 px sweep across the seams
- **WHEN** the header and the card's top row are measured
- **THEN** the header SHALL hold **one row at vw ≥ 408** (content 376 = brand 216 + gap 16 + link 144) and
  SHALL wrap to **57.6** at **407** and below (the card moves down ≈ 29.7 px, its `y` 76.4 → 106)
- **AND** the card's `__top` (state pill 197 + gap 16 + since 304 = **517**) SHALL hold one row at
  **content ≥ 517** (vw **599**) and SHALL wrap to **73.5** at **598** and below — measured 600 one row,
  560 two, and 599 / 598 either side of the seam

### Feature: The incident card

#### Scenario: The 6 px state bar is a border

- **GIVEN** the card at 1440
- **WHEN** its box and border are read
- **THEN** it SHALL be **720 × 601.86** at (360, 123.89) with `border-radius: 14`, `background: #fff`,
  `overflow: hidden`, `padding: 0 24px 8px`, and `border-top: 6px solid var(--tone)` where the tone is the
  amber `#f2a900` (**not** a padded div, so the bar follows the radius)
- **AND** the remaining three borders SHALL be `1px solid #ead9b0` and the shadow
  `0 1px 2px rgba(22,32,46,.05), 0 16px 32px -24px rgba(22,32,46,.3)`
- **AND** `box-sizing: border-box` SHALL apply to every descendant of the column (the reference sets it on
  `.cl-alert09-page *`), so `720` is the outer width and `670` the content width

#### Scenario: The state pill and the start line

- **GIVEN** the card's top row at 1440
- **WHEN** it is measured
- **THEN** the pill SHALL be **197 × 28.14**, `display: inline-flex; gap: 8; align-items: center;
  padding: 4px 12px 4px 10px; border-radius: 999px; background: #fff3d6; color: #5c3a00; 13 / 700`
- **AND** it SHALL hold a **16 × 16** filled triangle with a `#3d2a00` inner stroke, `currentColor` fill in
  the tone, and `aria-hidden="true"` — decorative only, because the pill's own words carry the state
- **AND** the start line SHALL be **304 × 19.38** at (751, 152.27), `12.5px` in **IBM Plex Mono**, `#566173`,
  and SHALL contain a machine-readable `<time datetime="…">` for the start, `·` (`&middot;`) and the duration
- **AND** the row SHALL step its gap and padding only at **480** (card padding `24 → 16`), keeping the pill
  and the line `space-between`

#### Scenario: Headline and summary copy

- **GIVEN** the card at 1440
- **WHEN** the `h1` and the paragraph are measured
- **THEN** the `h1` SHALL be **670 × 32.5** at (385, 190.03), `clamp(21px, 3.4vw, 26px) / 700`,
  `line-height: 1.25`, `letter-spacing: -.01em`, `margin: 14px 0 6px`, and **one line at 1440**
- **AND** the paragraph SHALL be **670 × 49.59** (`2 × 24.8`), `16 / 400` in `#3b4658`, `margin: 0`, and
  SHALL keep the reference's *kind* — a plain-language summary that says the money is **not** lost and the
  scope is **not** everything
- **AND** the `h1` SHALL wrap to **two lines at content ≤ 453** (vw **535**), measured 535 → 2 lines,
  536 → 1 line at the 21 px floor

#### Scenario: Three chips and the 403 px fold

- **GIVEN** the chips row at 1440 and at the 481–484 seam
- **WHEN** it is measured
- **THEN** it SHALL be `display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 18px; list-style: none`,
  **670 × 28.14**, holding **three** chips of `padding: 3px 10px; border: 1px solid #d5dbe4;
  border-radius: 6px; font-size: 13px`
- **AND** the two affected chips SHALL carry `border-color: #efcf82; background: #fffaf0; color: #5c3a00;
  font-weight: 600` (measured **147** and **93** wide) and the healthy one SHALL stay plain (`#3b4658` on
  transparent, **147** wide)
- **AND** the row SHALL fold to **two rows (64.28)** whenever content < **403** — that is **481–484**
  (content 399–402 at 24 px padding) *and* **≤ 468** (content < 403 at 16 px padding), and it SHALL be
  **one row** at **469–480** and at **≥ 485**: the card height reads `768.6 → 804.7 (481) → 764.6 (480)`,
  and a port that tests only one side of the seam will ship the wrong height

#### Scenario: The four services rows

- **GIVEN** the services panel at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **720 × 200.19** at (360, 745.75), `margin: 20px 0 0`, `border: 1px solid #e1e6ed`,
  `border-radius: 14`, `background: #fff`, `list-style: none`
- **AND** each row SHALL be `display: flex; gap: 12; justify-content: space-between; padding: 12px 20px;
  font-weight: 500`, **49.8** tall with `border-top: 1px solid #eef1f5`, except the first (**48.8**, no
  border)
- **AND** the status SHALL be an inline-flex with an **8 × 8** `border-radius: 50%` `::before` dot,
  `14 / 400` — `#146c43` text over `#1f9d61` (`Operational`) or `#7a4b00` over the tone (`Degraded`)
- **AND** the state SHALL be readable as **text** at 200 % zoom without the dot

### Feature: The native disclosure timeline

#### Scenario: `<details open>` with the chevron already inverted

- **GIVEN** the card at load and after a click on the summary
- **WHEN** the disclosure is inspected
- **THEN** it SHALL be a native `<details open>` — **no script, no `aria-expanded`**, `margin: 0 -24px`,
  `border-top: 1px solid #e8ebf0`, spanning the card's full inner width (**718** at (361, 340.27))
- **AND** the `summary` SHALL be `display: flex; gap: 10; align-items: center; padding: 14px 24px;
  font-weight: 600; cursor: pointer; list-style: none`, **718 × 52.8**, with
  `::-webkit-details-marker { display: none }`, a `#f8f9fb` hover and
  `:focus-visible { outline: 2px solid #0b5cad; outline-offset: -2px }`
- **AND** the **18 × 18** chevron SHALL be pushed right by `margin-left: auto` and SHALL read
  `transform: matrix(-1, 0, 0, -1, 0, 0)` (**180°**) while `[open]`, and `transform: none` (**0°**) once
  closed, through `transition: transform .2s ease`
- **AND** a test SHALL read the transform **after** the 200 ms transition settles (a 60 ms sample reads
  ≈ `-73°` and is a false failure), and reduced motion SHALL remove the transition entirely

#### Scenario: The count pill

- **GIVEN** the summary row at 1440
- **WHEN** the count is measured
- **THEN** it SHALL be `padding: 1px 8px; border-radius: 999px; background: #eef1f5; color: #475264;
  font-size: 12.5px; font-weight: 500` (sans, **not** mono — the mono 500 pair is never used)
- **AND** its number SHALL be **derived** from the events array (`{n} updates`), not a literal (defect 6)

#### Scenario: The timeline rail is pseudo-elements

- **GIVEN** the `<ol>` at 1440, open
- **WHEN** it is measured
- **THEN** it SHALL be **718 × 322.69** at (361, 394.06), `position: relative; list-style: none;
  padding: 4px 24px 18px 52px`
- **AND** each event's `::before` SHALL be an **11 × 11** `border: 2px solid #b6bfcc; border-radius: 50%;
  background: #fff` circle at `top: 7px; left: -23px`
- **AND** each event's `::after` SHALL be a **1.5 px** `#dde2e9` connector at `top: 22px; bottom: -4px;
  left: -18px`, removed on `:last-child`
- **AND** the **first** event SHALL be the current one: `::before` `border-color` and `background` =
  the tone, plus `box-shadow: 0 0 0 4px #fff0cc`; its label SHALL read `#7a4b00` and every other label
  `#16202e`
- **AND** the rail SHALL be continuous across event boundaries — measured line heights `73.2969`,
  `73.2969`, `50.0469`, **none** (last child) against event heights `91.3`, `91.3`, `68.05`, `50.05`

#### Scenario: Event anatomy and the line-count staircase

- **GIVEN** one event at 1440
- **WHEN** it is measured
- **THEN** its head SHALL be `display: flex; flex-wrap: wrap; gap: 4px 12px; align-items: baseline;
  margin: 0`, `642 × 24.8`, holding a `16 / 700` label and a **12.5 px mono** `<time datetime>` (`11:20 UTC`)
- **AND** its paragraph SHALL be `margin: 2px 0 0; color: #3b4658; font-size: 15px`, `line-height: 23.25`,
  and each event SHALL be `padding-bottom: 18px` (**0** on the last), so a 2-line event is **91.3** and a
  1-line event is **68.05**
- **AND** the event text SHALL step **2 → 3 lines at vw ≤ 500** and **3 → 4 lines at vw ≤ 390**, taking the
  timeline to **392.4 / 413.7 / 436.9 / 460.2 / 506.7** at 500 / 430 / 410 / 390 / 320

#### Scenario: Closing the panel

- **GIVEN** the port at 1440 with the panel open
- **WHEN** the summary is clicked or activated with `Enter`
- **THEN** the card SHALL shrink **601.86 → 279.17** and the document **1018 → 900** (the wrapper's
  `min-height: 100vh` floor), the `<details>` box becoming **53.8**
- **AND** the content SHALL remain in the DOM and **`<ol>`.getBoundingClientRect()` SHALL keep reporting
  322.69** — assert the card or the `<details>`, never the `<ol>` (a test that reads the `<ol>` cannot tell
  open from closed)
- **AND** reopening SHALL restore **601.86 / 1018** exactly, and the state SHALL be reachable by keyboard
  with no `tabIndex` and no key handler of the port's own

### Feature: Semantics, states and accessibility

#### Scenario: One live region, and it is the state line

- **GIVEN** the rendered card
- **WHEN** the accessibility tree is read
- **THEN** the live region SHALL be **only** the pill + start line (`role="status"`), whose text is
  `Degraded performance` plus `Started …` — **not** the whole card (defect 2)
- **AND** the card SHALL be a labelled `<section aria-labelledby>` pointing at the `h1`, and each list
  (`affected`, `timeline`, `services`) SHALL carry its own accessible name
- **AND** every decorative glyph (brand mark, pill triangle, chevron, status dots) SHALL be `aria-hidden`
  and no status SHALL be conveyed by colour alone — each dot sits beside a word

#### Scenario: Keyboard path and focus order

- **GIVEN** the page at 1440
- **WHEN** `Tab` is pressed from the top
- **THEN** the order SHALL be: **the header link → the timeline summary** (the native disclosure is
  focusable, `tabIndex` 0, no role), then the footer link — measured
  `A.cl-alert09-page__sub, SUMMARY.cl-alert09__summary`
- **AND** `Enter` and `Space` SHALL both toggle the panel and the focus ring SHALL be
  `2px solid #0b5cad` with `outline-offset: -2px` on the summary and `2px` on the link

#### Scenario: The tone clears 3 : 1 where it is load-bearing

- **GIVEN** the shipped palette
- **WHEN** the non-text pairs are measured
- **THEN** the 6 px bar and the pill's triangle SHALL be darkened to **`#b45309`** (5.02 : 1 on paper,
  4.55 : 1 on `#fff3d6`, 4.83 : 1 on `#fffaf0`) — the reference's `#f2a900` is **2.01 / 1.82** and fails
  1.4.11 for a load-bearing boundary
- **AND** `#f2a900` MAY stay on the current-event dot and the `Degraded` dot, whose state is spelled out
  beside them, and the green `#1f9d61` dot already clears 3 : 1 (**3.47**)
- **AND** every text pair SHALL stay at or above its measured ratio (the tightest is the mono timestamp at
  **5.78** on the ground)

### Feature: Type, faces and tokens

#### Scenario: Two faces, five weights, two families

- **GIVEN** the app's font delivery
- **WHEN** the head is read
- **THEN** there SHALL be exactly **one** Google Fonts `<link>`
  (`family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400&display=swap` — verified
  **HTTP 200**, and the legacy `css?family=…` form also 200) and no local `woff2`
- **AND** **IBM Plex Sans** SHALL be the body face and **IBM Plex Mono** SHALL be used **only** for the
  start line, the event times and (optionally) the count — never for headings or body copy
- **AND** mono weight **500** SHALL NOT be requested (the reference ships it and never uses it — defect 5)

#### Scenario: Tokens live in `@theme`

- **GIVEN** the Tailwind 4 app
- **WHEN** the theme is read
- **THEN** the palette SHALL be exposed as `@theme` tokens named for their **role**
  (`ink`, `ink-body`, `muted`, `paper`, `ground`, `tone`, `tone-ink`, `tone-deep`, `pill-wash`, `pill-ink`,
  `chip-wash`, `chip-border`, `ok`, `ok-dot`, `link`, `card-border`, `hairline`, `hairline-soft`, `dot`,
  `rail`, `halo`) with the values from the table above
- **AND** the card's bar SHALL read the tone through the token (so one change recolours bar, dot and glyph
  together), and the pill's wash/ink SHALL be separate tokens — the reference keeps them as literals and a
  tone change leaves the pill stale

### Feature: Responsiveness and overflow

#### Scenario: The width ladder

- **GIVEN** a 1 px sweep 320 → 1440
- **WHEN** the card is measured
- **THEN** its width SHALL be `min(720, vw − 32)` and its height SHALL follow
  **985.9 (320) · 914.6 (340–360) · 895.3 (375) · 870.5 (390) · 847.2 (400–410) · 824.0 (420–430) ·
  800.7 (440–460) · 764.6 (470–480) · 804.7 (481–484) · 768.6 (485–500) · 694.3 (537–560) ·
  643.7 (599–640) · 601.86 (768+)**, with the h1 stepping `2 → 1` line at **536**, `__text` `4 → 3 → 2` at
  **540 / 768**, the top row `2 → 1` at **599** and the chips folding twice at **481** and **485**
- **AND** a test SHALL assert that the card at **481** is **taller** than at **480** and at **485** — the
  double seam is where a naive port breaks

#### Scenario: No horizontal overflow, vertical scroll only when short

- **GIVEN** the port at 320 / 360 / 390 / 480 / 481 / 768 / 1024 / 1440
- **WHEN** each width is measured
- **THEN** `documentElement.scrollWidth` SHALL equal `clientWidth` and `window.scrollTo(400, 0)` SHALL
  leave `scrollX` **0** at every one
- **AND** the document SHALL be **1018** at 1440 × 900, **966** at 768 × 900, **1220** at 390 × 900 and
  **1336** at 320 × 900 — vertical scrolling is the only scrolling, and no `text-overflow: ellipsis` or
  `overflow: hidden` SHALL be introduced on any text node (the card's `overflow: hidden` exists only so the
  6 px bar follows the radius)

### Feature: Repo integration

#### Scenario: Wiring

- **GIVEN** `apps/steadystate`
- **WHEN** the app is inspected
- **THEN** the package SHALL be `@free-react-templates/steadystate`, `public/CNAME` SHALL be
  `steadystate.free.componentdock.com` and `"homepage"` SHALL be `https://steadystate.free.componentdock.com`
- **AND** no app file SHALL mention ColorLib, `alert-09`, `Tidewater Pay`, or the reference's copy — the
  provenance lives only in this spec and the `TEMPLATES.md` row

#### Scenario: The footer is the port's second and last link

- **GIVEN** the rendered page
- **WHEN** the anchors are counted
- **THEN** there SHALL be exactly **two**: the header link and the **Component Dock** footer link
  (`https://www.componentdock.com/`, "Component Dock") — the reference has **one**, and it is dead
- **AND** the footer SHALL be a real `<footer>` landmark, which the reference does not have

#### Scenario: The `TEMPLATES.md` row

- **GIVEN** `TEMPLATES.md` on the shipping commit
- **WHEN** the `## Bootstrap Alerts (12)` section is created
- **THEN** it SHALL sit between `## Bootstrap Accordions (20)` and `## Bootstrap Buttons (20)`, using the
  accordion section's `[colorlib] · [app] · ![preview]` grammar, with **Alert 09** as its **ninth** row
- **AND** the row SHALL be `[x]` with `https://steadystate.free.componentdock.com` only after the app ships

## Adapting to the repo (deltas — read before writing code)

| reference                                                              | port                                                                                                          |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` — 4 guard groups, ~48 lines            | **drop entirely** — Tailwind preflight already normalises                                                      |
| `--cl-alert09-tone` / `--cl-alert09-deep` + `.cl-alert09__*` BEM names   | `@theme` role tokens (table above) + components `StatusHeader`, `IncidentCard`, `StatePill`, `AffectedChips`, `IncidentTimeline`, `TimelineEvent`, `ServiceStatusList`, `SiteFooter` |
| `border-top: 6px solid var(--tone)` + `overflow: hidden`                | `border-t-[6px] border-tone overflow-hidden rounded-[14px]` — keep it a **border**, not a padded bar           |
| `clamp(21px, 3.4vw, 26px)` on the `h1`                                  | `text-[clamp(21px,3.4vw,26px)] leading-[1.25] tracking-[-.01em]`                                               |
| `12` `@font-face` over 6 binaries, 2 of them unused                     | one Google Fonts `<link>`: `IBM Plex Sans:wght@400;500;600;700` + `IBM Plex Mono:wght@400` (both verified 200) |
| `<details open>` + `[open] .cl-alert09__chev { rotate(180deg) }`         | keep the native `<details defaultOpen>`; rotate with `group-open:rotate-180` on the chevron (no state, no JS)   |
| `4 updates` literal                                                     | `{events.length} updates` (defect 6)                                                                           |
| `role="status"` on the whole `<section>`                                | `role="status"` on the pill + start line only (defect 2)                                                       |
| `href="#subscribe"` (dead)                                              | `href="#services"` on the services panel, or a real feed/`mailto:` link (defect 1)                             |
| `.cl-icon` dead rule                                                    | not ported (defect 3)                                                                                          |
| inline SVG brand mark / triangle / chevron                              | `lucide-react` (`Activity` or a house mark), `AlertTriangle`, `ChevronDown` — or keep inline SVG for the mark   |
| 11 px dot + 1.5 px rail via `::before` / `::after`                      | keep the pseudo-elements (`before:` / `after:` utilities) — an icon column loses the continuous rail            |
| `#f2a900` on the bar and the glyph                                      | `#b45309` on bar + glyph, `#f2a900` kept for the dots (defect: 1.4.11)                                          |
| zero `footer`, no `header` landmark, one dead anchor                    | real `<header>` + `<footer>`, Component Dock link, `#services` target                                          |
| screenshot's macOS window, desk, drop shadow, URL pill                   | **never** adopted — the ground is `#f4f6f9` edge to edge                                                       |

Copy: keep the *kind* of content — an invented payments product, a **degraded** state, a start stamp plus a
duration, a headline naming the affected capability and region, a summary that reassures without hiding the
scope, **three** service chips of which at least two are degraded, a **four**-event timeline
(`Monitoring` → `Identified` → `Update` → `Investigating`, newest first, each with a `<time datetime>` and one
paragraph), and **four** service rows of which exactly one is degraded. The reference's own names
(`Tidewater Pay`, `Card payments in the EU`, `Frankfurt`, `6%`, `5 seconds`, `11:20 UTC`) SHALL NOT appear in
the port.

## Verification checklist

- [ ] `apps/steadystate` exists, package `@free-react-templates/steadystate`, `public/CNAME` =
      `steadystate.free.componentdock.com`, `"homepage"` = `https://steadystate.free.componentdock.com`
- [ ] `npm run verify:app steadystate` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-steadystate --type spec` is valid
- [ ] measured at 1440: column **720** at (360, 72); card **720 × 601.86** at (360, 123.89); pill
      **197 × 28.14**; start line **304**; chips **147 / 93 / 147**; details **718 × 376.48**; summary
      **52.8**; timeline **322.69**; first event **91.3**; services panel **720 × 200.19**; rows
      **48.8 / 49.8 × 3**; document **1018**
- [ ] the tokens are exact — ink `#16202e`, body `#3b4658`, muted `#566173`, ground `#f4f6f9`, tone
      `#f2a900`, tone-deep `#7a4b00`, pill `#fff3d6`/`#5c3a00`, chip `#fffaf0`/`#efcf82`, count
      `#eef1f5`/`#475264`, ok `#146c43`/`#1f9d61`, link `#0b5cad`, card border `#ead9b0`, hairlines
      `#e8ebf0` / `#eef1f5` / `#e1e6ed`, dot `#b6bfcc`, rail `#dde2e9`, halo `#fff0cc`
- [ ] the 6 px amber bar is a **`border-top`** under `border-radius: 14` + `overflow: hidden`, and the card
      measures 601.86 including it
- [ ] the timeline is **pseudo-element** dots (11 px, 2 px border) and a **1.5 px** connector, hollow for
      every event except the **first**, which is filled and haloed `0 0 0 4px #fff0cc`
- [ ] the disclosure is a native `<details defaultOpen>`; the chevron is **180°** open and **0°** closed,
      sampled **after** the 200 ms transition; closed card **279.17**, document **900**; the `<ol>` still
      reports 322.69 while closed (assert the card, not the `<ol>`)
- [ ] the update count is **derived**; the header link resolves to a real target; the live region is the
      state line only; the footer carries the Component Dock link (exactly **2** anchors on the page)
- [ ] the bar and the pill glyph use the darkened **`#b45309`** (≥ 3 : 1 on paper and both washes); every
      text pair keeps its measured ratio (tightest **5.78**)
- [ ] IBM Plex Sans **400 / 500 / 600 / 700** and IBM Plex Mono **400** only — one `<link>`, no local
      `woff2`, no mono 500
- [ ] width ladder verified: card **288 @ 320**, **358 @ 390**, **448 @ 480**, **449 @ 481**,
      **453 @ 485**, **720 @ 768+**; height **985.9 / 870.5 / 764.6 / 804.7 / 768.6 / 601.86** at those
      widths, with **481 taller than both 480 and 485**
- [ ] no horizontal overflow at any width (`scrollX` 0, `scrollWidth === clientWidth`); chip row folds at
      content **403**, top row at **517**, h1 at **454**
- [ ] exactly **1 `h1`**, **0 `h2`–`h6`**, **0 `<img>`**, **0 `<input>`**, **0 `<button>`**, one
      `<details>`, four `<time>`, two anchors
- [ ] no occurrence of `colorlib`, `alert-09`, or the reference's invented names in any app file
- [ ] `TEMPLATES.md` carries the `Alert 09` row as the ninth entry of `## Bootstrap Alerts (12)`
- [ ] `curl -I https://steadystate.free.componentdock.com` → 200, `ssl_verify_result=0`
