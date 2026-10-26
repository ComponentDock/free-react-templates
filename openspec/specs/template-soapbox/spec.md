# Template: Soapbox (Hero — a two-day conference hero: an oversized outlined headline, a hairline facts row and a lime countdown card)

## Purpose

**One landing screen for a conference** — the seventh variant of the `hero` snippet family, and its first
**event** hero rather than a product one. An electric-blue ground (`#1b2cf5`) carries a 64 px white grid and
three concentric rings (one hairline, one rotating lime dashed, one radial glow), a 92.8 px bar with a
two-tone diamond wordmark and a lime-bordered **Tickets** pill, then a **1.35 : 0.65 grid**: an oversized
uppercase headline whose second line mixes solid type with a **`2027` drawn only as a 2 px lime outline**, a
three-line standfirst, a hairline `dl` of three facts (when / where / speakers with three overlapping avatar
chips), and beside it a **lime card** — hard 12 px offset shadow, "Doors open in" + an `Early bird` chip,
**four dark countdown tiles**, the price line with a struck comparison, a blue **Get your ticket** bar and an
underlined secondary link.

It is the family's first **zero-photography** variant: **0** `<img>`, **0** `<form>`, **0** `<input>`, one
`<h1>`, one `<h2>` and eight anchors that are **all** `href="#"`. Two scripts drive it (menu + countdown), and
the countdown is the only live data on the page — it re-derives days/hours/minutes/seconds from
`data-target="2027-03-18T09:00:00+00:00"` every second, aligned to the wall clock.

At 1440 × 900 the document is **exactly 900 px** and the hero is **623.34 px** tall, centred by
`main { flex:1; align-items:center }`. That fit is a **band**: it holds at every width from **1001** up, and at
**1000** the single-column collapse takes the document to **1020** (see trap 1).

- **Source slug:** `hero-07`
- **ColorLib page:** https://colorlib.com/wp/template/hero-07/ — **HTTP 200, 113,911 B**, `<title>`
  `Hero V07 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V07"**, `datePublished`
  **2026-09-25T15:09:05+00:00**, meta description *"A bold event hero for a two-day front-end conference, with an
  oversized uppercase title, an outlined year, the… Free download, no jQuery or plugins."*, and the claim
  *"the download is 171 KB"* (measured **174,853 B = 170.8 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V07".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-07/ — **HTTP 200,
  5,168 B**, `<title>` `Hero V07 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=0a2ee79b`,
  `fetchpriority="high"`) and **one** `<script src="js/snippet.js?v=c3ce2cf4">`. The slug-only path
  `theme/hero-07/` is **404 (9 B)** and `theme/bb/hero-07/` is **404 (9 B)**: the `bootstrap/` prefix is the
  only live path, as for every card, alert and hero variant before it.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-07.jpg — **HTTP 200, 53,054 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name (sixth of the family's seven). It is a **macOS browser
  mock-up** on a white ground with a drop shadow and a `preview.colorlib.com` URL pill; the page inside the frame
  is **~1120 px** wide and shows the hero with **142 days** on the clock. Do not adopt the frame.
- **Design category:** Hero (**event / conference hero — electric-blue ground, 64 px grid + three rings,
  oversized uppercase headline with an outlined year, hairline facts row, lime countdown card with a hard offset
  shadow**; variant 7 of the **12**-variant `hero` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/soapbox`, package
  `@free-react-templates/soapbox`, CNAME `soapbox.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows (the only `[~]` is the status legend on line
12) — so this design comes from `docs/catalog-coverage.md`, which lists **214 snippet variants in 19 families**
that ColorLib's own listing carries and the checklist never recorded. `hero-07` is **variant 7 of 12** in the
`hero` family. The family is worked in variant order: variant 1 → proscenium (shipped), variant 2 → afterglow
(shipped), variant 3 → presswork (shipped), variant 4 → tendril (shipped), variant 5 → epistle (prepped, not yet
built), variant 6 → overtone (prepped, not yet built), and this prep is **variant 7**.

## Bootstrap Heroes (12)

`## Bootstrap Heroes (12)` opens at **line 830** of `TEMPLATES.md`, between `## Bootstrap Footers (20)` and
`## Bootstrap Modals (20)`. Answered on main `ac36c7347` the section holds **four** rows — Hero 01 → proscenium,
Hero 02 → afterglow, Hero 03 → presswork, Hero 04 → tendril. The row grammar in this section is
`[colorlib] · ![preview] · [app]` — **preview in the middle**:

```markdown
- [x] **Hero 07** — [colorlib](https://colorlib.com/wp/template/hero-07/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-07.jpg) · [soapbox](https://soapbox.free.componentdock.com)
```

Insert it **after** whichever hero rows exist at that moment, keep that grammar, and **re-read the surrounding
lines immediately before pushing** — the implementer streams rewrite this file, and the section has grown rows
mid-run before.

**The name.** `soapbox` — one lowercase word for the crate a speaker stands on; it is a conference word, which is
the design's subject, and it keeps the snippet families' closed-single-word pattern (`nameplate`, `octavo`,
`wafer`, `proscenium`, `tendril`, `epistle`, `overtone`). Verified free on main:
`git grep -il soapbox` → **0 files**; no `apps/soapbox`; no `openspec/specs/template-soapbox`; no
`docs/templates/soapbox`; no `**Soapbox**` row in `TEMPLATES.md`; and all three ColorLib URLs miss —
`colorlib.com/wp/template/soapbox/` **404**, `preview.colorlib.com/theme/soapbox/` **404**,
`preview.colorlib.com/theme/bootstrap/soapbox/` **404**.

Checked and **free** for later variants of this family: **`lanyard`** (0 files, 0 folders, all three ColorLib URLs
404). Rejected on measurement: `keynote` (91 files, already an app), `byline` (170 files, an app), `podium`
(26 files, an app), `ticker` (180 files, an app), `marquee` (87 files), `rostrum` (3 files), `placard` (2),
`handbill` (1 — not zero).

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium)

| what              | value                                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 5,168 B** live (**4,965 B** inside the archive), `<title>` "Hero V07 \| Colorlib", `lang="en"`, **one** stylesheet, **one** `<script>`                 |
| preview path      | **`theme/bootstrap/hero-07/`**; `theme/hero-07/` **404** (9 B), `theme/bb/hero-07/` **404** (9 B)                                                             |
| stylesheet        | `css/style.css?v=0a2ee79b`, **15,352 B**, **692** lines, sha256 `477fe309b2bb61a1…` (**identical** in the archive)                                            |
| script            | `js/snippet.js?v=c3ce2cf4`, **2,822 B**, **78** lines, one IIFE, sha256 `4dedd169d14bf033…` (**identical** in the archive); menu + countdown                    |
| archive           | `preview.colorlib.com/downloads/free/hero-07.zip`, **200, 174,853 B** (= 170.8 KiB ✓ the page's "171 KB"), **15 entries** = 4 dirs + **11 files**               |
| archive contents  | `index.html` 4,965 B, `css/style.css` 15,352 B, `js/snippet.js` 2,822 B, `README.md` 1,260 B, `fonts/` **8 files**                                              |
| live ↔ archive    | CSS **and** JS **identical sha256**; the two HTML files differ **only in the `<head>`** (robots pair, cdnjs `dns-prefetch`, `fetchpriority`, `?v=`) — **live preview verified; the archive is its un-versioned twin** |
| README            | advertises `index.html`, `css/style.css`, `js/snippet.js`, `fonts/` **and `images/`** — there is **no `images/` folder and no image file** (the sixth consecutive variant whose README claims one), and the page holds **0** `<img>` |
| inner pages       | **none** — `index.html` is **200, 5,168 B**, **byte-identical** to the directory URL; `schedule.html`, `speakers.html`, `venue.html`, `tickets.html`, `sponsors.html`, `about.html` → **404 (9 B)**; one HTML file in the archive |
| images            | **none** — the only artwork is **4 inline `<svg>`** (the 30 × 30 logo diamond, the two menu icons, the CTA arrow) and the three 30 px avatar chips are **CSS circles with initials** |
| fonts (declared)  | **8** `@font-face`, all **Space Grotesk**, weights **400 / 500 / 600 / 700**, each × subsets `latin` / `latin-ext`; no Google Fonts `<link>`, no `@import`     |
| fonts (binaries)  | only **2 distinct** files — `latin` **22,320 B** (sha `a0d054c4…`) and `latin-ext` **18,924 B** (sha `054c266f…`), four names each → **one variable binary per subset**; verify the cut before calling the duplicate hashes a broken download |
| Google Fonts      | `css2?family=Space+Grotesk` → **200**; `css2?family=Space+Grotesk:wght@300..700` → **200**; `css2?family=Space+Grotesk:wght@400;500;600;700` → **200**; legacy `css?family=Space+Grotesk:400,500,600,700&display=swap` → **200** |
| classes           | **39** distinct markup classes; **38** `cl-` rules; **2** markup classes with **no rule at all** (`__copy`, `__t1` — pure containers); **1** dead rule (`.cl-icon`, unused here — the eighteenth consecutive snippet to carry it); state classes `is-enhanced` / `is-open` exist only in CSS + script |
| custom properties | **6** on `.cl-hero07` — `--cl-hero07-blue` `#1b2cf5`, `--deep` `#0d1690`, `--lime` `#d7ff3a`, `--ink` `#0a0f3d`, `--soft` `#dfe3ff`, `--gutter` `clamp(16px,4vw,48px)`; **34** `var()` reads |
| CSS anatomy       | **106** `{` blocks (= 8 `@font-face` + 4 `@media` wrappers + **94** style rules); queries **1000 / 860 / 520** + reduced motion; **23** `revert` declarations in the `:where(html)` guard; **5** `!important`; **2** `@keyframes` (`cl-hero07-spin` 60 s, `cl-hero07-blink` 1.4 s), **3** `animation` declarations (the two + the reduced-motion kill switch), **5** `transition`s, **3** `box-shadow`s, **4** gradients; **11** hex literals / **7** distinct + **8** distinct `rgba()` = **15** colours |
| controls          | **0** `<form>`, **0** `<input>`, **1** `<button>` (the menu toggle), **4** inline `<svg>`, **0** `<img>`, **8** `<a>` — **all eight `href="#"`**                |
| headings          | **1** `<h1>` ("Frontend North 2027"), **1** `<h2>` ("Doors open in" — the card's label), **0** `<h3>`                                                          |
| landmarks         | `<header class="cl-hero07__bar">` → `<a>` wordmark + `<nav aria-label="Main">`; `<main>` → **one** `<section aria-labelledby>` → `<aside aria-labelledby>`; **no `<footer>`**, no `<article>` |
| ids               | **3** — `cl-hero07-nav` (the button's `aria-controls`), `cl-hero07-title` (`aria-labelledby` of the section), `cl-hero07-count-title` (`aria-labelledby` of the aside) |
| behaviour         | one IIFE, two initialisers: `initMenu` (adds `is-enhanced`, click toggles `is-open` + `aria-expanded` + `aria-label`, nav link click closes, Escape closes **and refocuses the button**, outside click closes, `matchMedia('(min-width: 861px)')` closes) and `initCountdown` (parse `data-target`, 3-digit days, aligned per-second `setTimeout`, rewrites `aria-label`, label → "Doors are open" at zero, re-renders on `visibilitychange`) |
| reduced motion    | `@media (prefers-reduced-motion: reduce)` sets `animation: none !important; transition: none !important` on every descendant and pseudo-element — the ring stops mid-rotation and the countdown keeps ticking |

## Design tokens

Extracted from `css/style.css` (canonical over the screenshot) and re-read off the live render. **15 colours**,
not the six custom properties: the pre text, the label tint, the avatar fills and the eight `rgba()` scrims each
carry their own.

| role                 | value                          | where it is measured                                                        |
| -------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| ground (page)        | `#1b2cf5`                      | `body` / `--blue`; the root re-declares it                                  |
| ink (text on lime)   | `#0a0f3d`                      | card text, count tiles, chip text, avatar initials, card focus ring         |
| deep (card shadow)   | `#0d1690`                      | the card's `12px 12px 0` (8 px at ≤520) and the CTA's hover ground          |
| lime (accent)        | `#d7ff3a`                      | logo diamond, fact labels, Tickets border, year outline, card ground, focus ring |
| soft (standfirst)    | `#dfe3ff`                      | `.sub`, `.edition` — **not** the nav links, which lose this colour (trap 2)  |
| label tint           | `#c3c8f0`                      | the four tile labels inside the dark tiles                                  |
| grid lines           | `rgba(255,255,255,.07)`        | the 64 px two-direction grid on `.deco::before`                             |
| hairlines            | `rgba(255,255,255,.22)` / `.16`| facts rule / outer ring                                                     |
| ring dashed          | `rgba(215,255,58,.35)`         | the rotating ring's 2 px dash                                               |
| ring glow            | `rgba(13,22,144,.9)` → `0`     | ring 3's `radial-gradient`, transparent at 70 %                             |
| edition pill         | `rgba(255,255,255,.12)`        | the eyebrow's background (renders `#3645f6` over the ground)                |
| panel                | `#0a0f3d` on the ink shell     | the ≤860 menu panel, radius 22, `0 24px 48px -16px rgba(0,0,0,.5)`          |
| focus ring (bar)     | `3px #d7ff3a` at `3px` offset  | every `a` / `button` — recoloured **ink** inside the card                   |
| avatars              | `#ffb4a2` `#a7f3d0` `#fde68a`  | the three 30 px chips, set inline as `--c`                                  |
| font family          | `"Space Grotesk"`              | everything, one family, no serif anywhere; body **16 px / 1.55**            |
| radii                | 999 / 28 / 22 / 16 / 12        | pills / card / menu panel / tiles + CTA / tiles at ≤520                     |
| display type         | `clamp(3.2rem, 1rem + 8.4vw, 9.4rem)` | **136.96 px** at 1440, 123.52 at 1280, 102.02 at 1024, 88.24 at 860, **51.2** (floor, reached at ≤419) at 390/320 |
| headline leading     | `0.86` with `letter-spacing: -.055em` | 117.786 line box at 1440; the outlined year overrides to `-.03em`     |
| countdown numbers    | `clamp(1.7rem, 1.2rem + 1.2vw, 2.4rem)` | **36.48 px** at 1440, 30.72 at 960, **27.2** (floor, reached at ≤667) at 640 down |
| standfirst           | `clamp(1rem, .96rem + .3vw, 1.18rem)` | **18.88 px / 29.264** (the cap, 3 lines at 1440), `max-width: 36em` = 679.68 |
| gutter               | `clamp(16px, 4vw, 48px)`       | 48 at ≥1200, 34.4 at 860, 20.8 at 520, 16 at ≤400                            |
| hero padding         | `clamp(24px,4vw,48px)` top · gutter sides · `clamp(40px,6vw,72px)` bottom | 48 / 48 / 72 at 1440; 34.4 / 34.4 / 51.6 at 860; 24 / 16 / 40 at ≤520 |
| hero gap             | `clamp(32px, 5vw, 80px)`       | **72** at 1440 (5vw = 72 exactly), 64 at 1280, 51.2 at 1024, 32 at ≤640       |
| card padding         | `clamp(20px, 2.5vw, 30px)`     | 30 at ≥1200, 25.6 at 1024, 20 at ≤800                                       |
| bar                  | `padding: 22px gutter`, `gap: 32`, `max-width: 1280` | **92.8** tall at ≥861, **90** at ≤860 (the 46 px button is shorter than the 48.8 px nav) |

**Radius / shadow note for the port:** Tailwind covers `rounded-full` (999), `rounded-2xl` (16, at 1 rem = 16 px);
the card's **28** and the panel's **22** need arbitrary values (`rounded-[28px]`, `rounded-[22px]`), and the tiles'
**12** at ≤520 is `rounded-xl`. Both shadows are arbitrary: `shadow-[12px_12px_0_#0d1690]` (8 px at ≤520) and the
panel's `shadow-[0_24px_48px_-16px_rgba(0,0,0,0.5)]`.

## Page arithmetic at 1440 × 900 (measured, motion disabled)

| element                  | box                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `.cl-hero07`             | **1440 × 900** (document); `min-height:100vh`, flex column, **`overflow: hidden`**; `#1b2cf5`; `16px / 1.55`           |
| deco layer               | `position:absolute; inset:0; z-index:-1` inside `isolation:isolate`; grid **1440 × 900** at 64 px pitch               |
| ring 1 / 2 / 3           | **900 × 900** at (655.19, 0) · **738.51** rotated at (726.35, 80.74) · **374.39** at (907.22, 262.8) — all clipped by the root's `overflow:hidden` |
| `header` bar             | **1440 × 92.8** at (0, 0); inner **1280 × 92.8** at (80, 0), `padding: 22px 48px`, `gap: 32`, `max-width:1280`         |
| wordmark                 | **197.53 × 30** at (128, 31.39) — 30 px svg + `gap: 10` + "FRONTEND/NORTH" at **17 px / 700 / .04em**                   |
| nav                      | **954.47 × 48.8** at (357.53, 22) — `flex:1`, `justify-content: flex-end`, `gap: 24`                                     |
| links                    | **352 × 36.8** at (831, 28) — `gap: 28`; each link `padding: 6px 0`, **16 px / 500**, colour **`#fff`** (trap 2)          |
| tickets pill             | **105 × 48.8** at (1207, 22) — `padding: 10px 20px`, **2 px** lime border, radius 999, **17 px / 700**, text `#fff`      |
| menu button              | `display:none` at ≥861 (zero rect); **46 × 46** at (779.61, 22) at 860, radius 50 %, lime ground, ink icon               |
| `main`                   | **1440 × 807.2** at (0, 92.8); `flex:1; display:flex; align-items:center`                                               |
| hero section             | **1280 × 623.34** at (80, **184.72**) = 92.8 + (807.2 − 623.34)/2; `padding: 48px 48px 72px`, grid **750.594 / 361.406**, `gap: 72` |
| copy column              | **750.59 × 503.34** at (128, 232.72)                                                                                   |
| edition pill             | **247 × 33.69** at (128, 232.72) — `padding: 6px 14px`, radius 999, `rgba(255,255,255,.12)`, **14 px / 500** soft        |
| `h1`                     | **750.59 × 235.53** at (128, **284.41**) — **136.96 px / 117.786 line box / 2 lines**, `700`, `line-height:.86`, `letter-spacing:-.055em`, `text-transform: uppercase`, `margin: 18px 0 20px` |
| line 1 (`__t1`)          | **750.59 × 117.77** — "FRONTEND"                                                                                        |
| line 2 (`__t2`)          | **750.59 × 117.77** at y 402.17 — flex row, `gap: 0 .18em` (**24.65**), baseline-aligned: "NORTH " (400.33) + `2027`     |
| `2027` (`__year`)        | **309.58 × 117.77** at (552.98, 402.17) — `color: transparent`, `-webkit-text-stroke: 2px #d7ff3a`, `letter-spacing:-.03em` |
| standfirst               | **679.67 × 87.75** at (128, 539.94) — **18.88 / 29.264 / 3 lines**, soft, `max-width: 36em` = **679.68**                 |
| facts `dl`               | **750.59 × 76.38** at (128, **659.69**) — `display:flex; flex-wrap:wrap`, `gap: 16px 40px`, `margin-top: 32`, `padding-top: 22`, `border-top: 1px rgba(255,255,255,.22)` |
| fact items               | **179 / 209 / 156** wide at x **128 / 347 / 596**, each **53.38** tall; `dt` **12.5 px / 700 / .14em** lime, `dd` **18 px / 600** white with `gap: 10` |
| avatars                  | **74 × 30** at (596, 706.06) — three **30 px** circles, `margin-left: -8`, **2 px** blue border, **10.5 px / 700** initials |
| card                     | **361.41 × 355.41** at (950.59, **306.69**) — `padding: 30px`, radius **28**, `#d7ff3a`, ink text, `box-shadow: 12px 12px 0 #0d1690` |
| card head                | **301.41 × 31** at (980.59, 336.69) — title **20 px / 700 / -.02em** (124.81 wide) + `Early bird` chip **92 × 27.38** (padding `4px 10px`, radius 999, ink ground, **12.5 px / 700** lime, **7 px** blinking dot, gap 7) |
| countdown grid           | **301.41 × 83.17** at (980.59, 385.69) — `repeat(4,1fr)` (**minmax(auto,1fr)**), `gap: 8`, `margin-top: 18`             |
| tiles                    | **71.72 / 67.98 / 68.00 / 69.70** at x **980.59 / 1060.31 / 1136.3 / 1212.3** — **not equal** (trap 3); `padding: 14px 4px 10px`, radius **16**, ink ground |
| number                   | **63.72 × 40.13** at (984.59, 399.69) — **36.48 px / 700 / -1.0944 letter-spacing / 40.128 line**, `tabular-nums`       |
| tile label               | **11 px / 600 / .1em** uppercase `#c3c8f0`, `margin-top: 2`                                                             |
| price line               | **301.41 × 34.09** at (980.59, **486.86**) — **15 px**, `margin-top: 18`; `<strong>£299</strong>` **22 px / 700**, then "early bird · ", `<s>£449</s>`, " from 1 January" |
| CTA                      | **301.41 × 58.34** at (980.59, **536.95**) — `padding: 16px 22px`, radius **16**, `#1b2cf5`, white **17 px / 700**, `display:flex; justify-content: space-between`, 20 px arrow; hover `#0d1690` + arrow `translateX(4px)` |
| secondary link           | **301.41 × 24.8** at (980.59, **607.3**) — `margin-top: 12`, **600**, centred, underlined at **3 px** offset              |

**Where 900 comes from.** The hero is 623.34 tall (its tallest column is the copy at 503.34 + 48 + 72 of padding);
`main` is 807.2, so `align-items:center` parks the section at 92.8 + 91.93 = **184.72** and the document closes at
exactly **900**. There is no `overflow:auto` anywhere on the content path.

## The six devices

**1. One decorative layer, three rings.** `.deco` is `position:absolute; inset:0; z-index:-1` with
`pointer-events:none`, and its `::before` paints the two 64 px gradients. The three rings are
`position:absolute; top:50%; right:<n>vw; aspect-ratio:1; translateY(-50%)`, so their **width** is what moves them:
`64vw`/max 900 (hairline white 16 %), `46vw`/max 660 at `right:1vw` (2 px dashed lime 35 %, `spin 60s linear
infinite`), `26vw`/max 380 at `right:11vw` (radial glow). Below 861 ring 1 becomes `120vw` at `right:-60vw`, ring 2
`90vw` at `-45vw`, both re-`top:30%`, and ring 3 is `display:none`.

**2. The headline is two blocks; the second is a flex row with an outlined year.** `.title > span { display:block }`
gives line 1; `.t2` overrides to `display:flex !important; flex-wrap:wrap; align-items:baseline; gap: 0 .18em`, so
the text node "North " and the `__year` span are two flex items that **wrap** when they no longer fit. `__year`
paints nothing but its stroke: `color: transparent; -webkit-text-stroke: 2px lime` (1.5 px at ≤520) and
`letter-spacing: -.03em`, which overrides the parent's `-.055em` for that span only.

**3. The four tiles are min-content sized.** `grid-template-columns: repeat(4, 1fr)` is **`minmax(auto, 1fr)`**, so
each track is at least its own min-content: at 1440 the tracks read **71.72 / 67.98 / 68.00 / 69.70**, and at 1200
they read **67.98 / 51.5 / 66.7 / 69.7** — the *hours* tile collapses to 51.5 because "HOURS" is the shortest label
while "MINUTES" pins its own track at 66.7. Only when the card is 520 wide (≤1000) do all four become equal
(111.5 / 112 / 113.25).

**4. The card's shadow is a hard offset, not a blur.** `box-shadow: 12px 12px 0 #0d1690` (8 px at ≤520) draws a
solid second card behind it; it is the only shadow on the page besides the menu panel's.

**5. The facts row is a `dl` on a hairline.** `margin-top: 32; padding-top: 22; border-top: 1px` + `flex-wrap` with
`gap: 16px 40px`; the three items are **179 / 209 / 156** wide, so the row needs **624.69 px** of content and wraps
below that (trap 1). At ≤520 the whole thing becomes `display:grid; grid-template-columns: 1fr 1fr` with the
**first** item spanning both columns, so "When" gets its own row and "Where" / "Speakers" share the next.

**6. The bar is logo + right-aligned nav.** `.nav { flex:1; justify-content: flex-end }` — unlike the previous
hero's auto-margin nav, this one is pinned to the **right edge**, so the wordmark's width never moves it; the menu
button (≤860) takes the nav's place with `margin-left: auto`.

## Width ladder (measured, `getBoundingClientRect`, motion disabled, after `document.fonts.ready`)

| vw   | docH      | title px | title lines | card (w × h)      | card pad | count tile h | facts  | sub lines | bar  |
| ---- | --------- | -------- | ----------- | ----------------- | -------- | ------------ | ------ | --------- | ---- |
| 1440 | **900**   | 136.96   | 2           | 361.41 × 355.41   | 30       | 83.17        | 1 row  | 3         | 92.8 |
| 1360 | 900       | 130.24   | 2           | 362.69 × 354.34   | 30       | 82.11        | 1 row  | 3         | 92.8 |
| 1280 | 900       | 123.52   | 2           | 364 × 353.3       | 30       | 81.06        | 1 row  | 3         | 92.8 |
| 1222 | 900       | 118.65   | 2           | — × **352.52**    | 30       | 80.4         | 1 row  | 3         | 92.8 |
| 1221 | 900       | 118.56   | 2           | — × **375.77**    | 30       | 80.3         | 1 row  | 3         | 92.8 |
| 1200 | 900       | 116.8    | 2           | 339.31 × 375.48   | 30       | 80           | 1 row  | 3         | 92.8 |
| 1100 | 900       | 108.4    | 2           | 311.03 × 369.17   | 27.5     | 78.69        | 1 row  | 3         | 92.8 |
| 1024 | 900       | 102.02   | 2           | 289.55 × 364.34   | 25.6     | 77.67        | **2 rows** | 3     | 92.8 |
| 1001 | **900**   | 100.08   | 2           | 283.05 × 362.89   | 25.03    | 77.38        | 2 rows | 3         | 92.8 |
| **1000** | **1020** | 100     | 2           | **520** × 339.59  | 25       | 77.36        | 1 row  | 3         | 92.8 |
| 960  | 1005      | 96.64    | 2           | 520 × 337.06      | 24       | 76.83        | 1 row  | 3         | 92.8 |
| 900  | 983       | 91.6     | 2           | 520 × 333.28      | 22.5     | 76.05        | 1 row  | 3         | 92.8 |
| 861  | 968       | 88.32    | 2           | 520 × 330.8       | 21.5     | 75.53        | 1 row  | 3         | 92.8 |
| **860** | 965    | 88.24    | 2           | 520 × 330.73      | 21.5     | 75.5         | 1 row  | 3         | **90** |
| 768  | 932       | 80.51    | 2           | 520 × 326.53      | 20       | 74.3         | 1 row  | 3         | 90   |
| 700  | 910       | 74.8     | 2           | 520 × 325.63      | 20       | 73.39        | 1 row  | 3         | 90   |
| 679  | **904**   | 73.04    | 2           | 520 × 325.24      | 20       | 73.14        | **1 row** | 3      | 90   |
| 678  | **971**   | 72.95    | 2           | 520 × 325.2       | 20       | 73.14        | **2 rows** | 3     | 90   |
| 640  | 960       | 69.76    | 2           | 520 × 325.2       | 20       | 72.97        | 2 rows | 3         | 90   |
| 521  | 966       | 59.76    | 2           | 479.34 × 325.2    | 20       | 72.97        | 2 rows | 4         | 90   |
| **520** | 957    | 59.68    | 2           | 478.41 × 318.88   | 20       | **66.64**    | 2 rows **grid** | 4 | 90 |
| 480  | 950       | 56.32    | 2           | 441.63 × 318.88   | 20       | 66.64        | grid   | 4         | 90   |
| 430  | 942       | 52.12    | 2           | 395.63 × 318.88   | 20       | 66.64        | grid   | 4         | 90   |
| 390  | **985**   | 51.2     | 2           | 358 × 318.88      | 20       | 66.64        | grid   | **5**     | 90   |
| 360  | 984       | 51.2     | 2           | 328 × 318.88      | 20       | 66.64        | grid   | 5         | 90   |
| **306** | 1031   | 51.2     | **2**       | 274 × 318.88      | 20       | 66.64        | grid   | 6         | 90   |
| 305  | **1075**  | 51.2     | **3**       | 273 × 318.88      | 20       | 66.64        | grid   | 6         | 90   |
| 320  | 1032      | 51.2     | 2           | 288 × 342.13      | 20       | 66.64        | grid   | 6         | 90   |

Five things this table says that a hand-written one would get wrong:

1. **The 100vh fit is a band that ends at 1001.** Document **900** at 1440, 1360, 1280, 1222, 1100, 1024 and
   **1001**; **1020** at 1000 (the one-column collapse). Between 1000 and 320 the document is **content-driven and
   not monotonic**: 1005 at 960, 983 at 900, 968 at 861, **965** at 860, 932 at 768, 910 at 700, **904** at 679,
   **971** at 678, 960 at 640, 966 at 521, **957** at 520, 950 at 480, 942 at 430, **985** at 390, 984 at 360.
   Narrowing the viewport by one pixel can make the page **67 px taller** (679 → 678, the facts wrap) or **9 px
   shorter** (521 → 520, the tile padding step).
2. **`h1` line count is monotonic only in the second line.** Line 1 ("FRONTEND") is always one block; line 2 wraps
   only below **306** — where content is **273.98 px** wide and the row needs exactly that — so the title is **3
   lines at 305 and 2 at 306**.
3. **The price line, not the card, owns the 23 px jump at 1222.** Card inner width 285.80 (vw 1221) wraps
   "£299 early bird · £449 from 1 January" onto two lines (**57.34**), inner 286.09 (vw 1222) keeps it on one
   (**34.09**), and the card height moves **375.77 → 352.52**.
4. **The facts wrap on content, not on a query**: one row at content ≥ **624.69** px (vw 679 in the single-column
   band, vw 1064 in the two-column band), two rows at ≤ **623.78** (vw 678, 1024, and vw 1060 where the copy column
   is 622.48). Below 520 the same `dl` is a 2-column grid, so "2 rows" there means two grid tracks, not two wrapped
   lines.
5. **The countdown floor is 27.2 px from 667 down**, so 640 → 320 differ only in the number of standfirst lines and
   the facts grid — except at 320, where the price wraps again (+23.25) and the card reaches **342.13**.

## The traps (all cost real measurement time)

1. **The document is content-driven the moment the grid collapses.** `main { flex:1 }` centres the hero, and the
   hero is taller than `main` from 1000 down, so `document.scrollHeight` is `barH + heroH`. There is **no** 100vh
   fit to verify below 1001 — test the fit only at ≥1001 and test the *content* heights below it.
2. **Two declared colours never render.** `.cl-hero07 a { color: inherit }` is specificity **(0,1,1)** and beats
   both `.cl-hero07__link` and `.cl-hero07__tickets` at **(0,1,0)**, so the nav links render **white** (not
   `#dfe3ff`) and the Tickets pill renders **white text on a lime border** (not lime text). Consequence: the nav has
   **no current-page marker**, `.link:hover { color: #fff }` is a no-op, and only the 2 px lime underline moves.
   The screenshot agrees with the render. A port must decide explicitly — this spec keeps the rendered white and
   treats "lime Tickets text" as the author's unrendered intent.
3. **`repeat(4, 1fr)` is not four equal tiles.** `1fr` = `minmax(auto, 1fr)`, so the tracks take their min-content
   first: **71.72 / 67.98 / 68 / 69.7** at 1440 and **67.98 / 51.5 / 66.7 / 69.7** at 1200. Tailwind's
   `grid-cols-4` compiles to `repeat(4, minmax(0,1fr))` and would force four **equal** tiles — visibly wrong at
   1200. Use `grid-cols-[repeat(4,1fr)]`.
4. **The outlined year is a text-stroke, so it has no box of its own.** `color: transparent` means the glyphs are
   invisible except their 2 px outline; the element's width is the **advance width** (309.58), and the stroke bleeds
   ~1 px past it on each side. `-webkit-text-stroke` is the only way to draw it; a `text-shadow` or an SVG copy
   changes the metrics.
5. **The second headline line fits by 0.01 px at some widths.** At 306 the row needs 273.98 and the content box is
   274; at 305 it is 273 and the year wraps to a third line. Any copy change ("North" longer), font fallback or
   `letter-spacing` tweak moves that seam — re-measure it if the headline changes.
6. **The root's `overflow:hidden` makes every overflow invisible *and* unscrollable.** The three rings are 900, 738
   and 374 px wide and stick out by up to 115 px on the right, yet `documentElement.scrollWidth` stays 1440 and
   `scrollX` stays 0 at every width — **including 320**, where the reference genuinely does not overflow. A port
   that drops `overflow:hidden` will grow a horizontal scrollbar from the rings alone.
7. **The rings are behind the content but in front of the ground.** `.deco` is `z-index:-1` inside
   `#1b2cf5` with `isolation:isolate`, so it paints above the root's background and below the text — reproducing
   that with a negative z-index **without** `isolation` drops the decoration behind the body and it disappears.
8. **The rotating ring's transform is the state, not the width.** `.ring--2` is `translateY(-50%)` + a 60 s
   `rotate` animation; under `prefers-reduced-motion` the animation is killed and it renders at **0°** (mid-frame
   rotation is never preserved). Its measured rect is therefore **738.51**, not 660 — a rotated square's bounding
   box, not its size.
9. **The countdown pads days to three digits.** `pad(d, 3)` turns 142 into "142" today but **"099"** when 99 days
   remain and **"000"** at the door. That is a display defect in the reference (the tiles read "000 / 00 / 00 / 00"
   in the markup before the script runs); the port SHALL print days without a leading zero.
10. **The timer is invisible to assistive tech by design.** The box is `role="timer"` with `aria-live="off"` and a
    per-second `aria-label` ("142 days, 21 hours, 25 minutes and 48 seconds until doors open") — the label updates
    but is **never announced**. Do not "fix" this by turning the live region on: a per-second announcement is
    worse than silence.
11. **`is-enhanced` gates the whole mobile menu.** Without it the ≤860 block styles nothing and the bar instead
    `flex-wrap`s (`:not(.is-enhanced)`); React renders the enhanced state, so the panel must be in the DOM and
    reachable, and the toggle must keep `aria-expanded` + `aria-label` in sync.
12. **The menu button's focus ring is lime on lime — 1.15 : 1.** The global `button:focus-visible` draws a 3 px
    `#d7ff3a` outline, and the button's own ground is `#d7ff3a`. The card already fixes its own case
    (`outline-color: ink`), the button does not. Prescribed fix (below).
13. **The card's shadow is part of the layout's look, not a soft blur.** `12px 12px 0` (8 px at ≤520) is a solid
    second card; a `shadow-lg` looks nothing like it and a filter-based shadow shifts the perceived edges.
14. **`-webkit-text-stroke-width: 1.5px` computes to 1.5, not 1 px**, unlike a `border: 1.5px`, which computes to
    **1 px** at DPR 1. Do not generalise the border trap to the stroke.
15. **All eight anchors are `href="#"`.** There is no second page to link to (every inner path 404s), so every
    "Speakers / Schedule / Venue / Sponsors / Tickets / Get your ticket / See the full schedule" target is dead and
    the page scrolls to the top on click. A port must give them destinations or handlers.
16. **The 64 px grid is a background-image, not elements.** Two `linear-gradient` layers at `64px 64px` on
    `.deco::before`; at 320 the grid still starts at the top-left of the *section*, not of the viewport, and the
    rings re-centre on `top:30%` below 861.

## Contrast (computed from the token pairs)

| text                                                | pair                    | ratio      |
| --------------------------------------------------- | ----------------------- | ---------- |
| white on the blue ground                            | `#fff` / `#1b2cf5`      | **7.71**   |
| standfirst + edition pill `#dfe3ff` on blue          | soft / blue             | **6.08**   |
| edition pill on its own 12 % white wash (`#3645f6`)  | soft / chip             | **4.96**   |
| fact labels `#d7ff3a` on blue                       | lime / blue             | **6.70**   |
| card text `#0a0f3d` on lime                         | ink / lime              | **15.89**  |
| count numbers white on the ink tile                 | white / ink             | **18.28**  |
| tile labels `#c3c8f0` on the ink tile               | label / ink             | **11.18**  |
| `Early bird` lime on the ink chip                   | lime / ink              | **15.89**  |
| CTA white on `#1b2cf5`                              | white / blue            | **7.71**   |
| CTA white on the `#0d1690` hover                    | white / deep            | **13.68**  |
| avatar initials on peach / mint / amber             | ink / face              | **10.71 / 14.26 / 14.68** |
| focus ring lime on the blue ground (UI, needs 3)    | lime / blue             | **6.70**   |
| focus ring ink on the lime card (UI)                | ink / lime              | **15.89**  |
| **focus ring lime on the lime menu button (UI)**     | lime / lime             | **1.15** — fails |

One real failure: the menu button's ring is drawn in the colour of its own background. Everything else clears —
this is the family's first variant whose text contrast table has **no** marginal pair (the previous five each had
one between 4.4 and 4.5).

## Requirements

### Requirement: One event hero screen

The template SHALL render one blue landing screen whose entire content is a header bar and a single hero section
holding a copy column and a countdown card, with no form and no photograph.

#### Scenario: Landmarks, counts and the one headline at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** it renders
- **THEN** there SHALL be exactly one `<header>`, one `<nav aria-label="Main">`, one `<main>`, **one**
  `<section aria-labelledby>` and **one** `<aside aria-labelledby>` inside it
- **AND** there SHALL be exactly **one** `<h1>` ("Frontend North 2027"), **one** `<h2>` ("Doors open in"), **zero**
  `<h3>`, **0** `<img>`, **0** `<form>`, **0** `<input>`, **1** `<button>`, **4** `<svg>` and **8** `<a>`
- **AND** the document SHALL be **900 px** tall with `scrollX === 0` and `scrollWidth === clientWidth`
- **AND** the four `<time>`-bearing facts SHALL be a `dl` with **three** `dt`/`dd` pairs

#### Scenario: The hero is centred by the flex parent

- **GIVEN** the root is `min-height:100vh; display:flex; flex-direction:column` and `main` is `flex:1` with
  `align-items:center`
- **WHEN** the hero is measured at 1440
- **THEN** it SHALL be **1280 × 623.34** at (80, **184.72**) — 92.8 (bar) + (807.2 − 623.34)/2
- **AND** at 1100 it SHALL be **1100 × 563.22** at y **214.78** and the document SHALL still be exactly **900**
- **AND** at 1000 the hero SHALL be **1000 × 927.02** at y **92.8** and the document SHALL be **1020**

### Requirement: The blue ground with a 64 px grid and three rings

The page ground SHALL be `#1b2cf5` carrying a two-direction 64 px grid and three concentric decorative rings that
never create overflow.

#### Scenario: The ground and the decoration at 1440

- **GIVEN** the page at 1440 × 900
- **WHEN** the decoration layer is measured
- **THEN** the root SHALL be `#1b2cf5` with `overflow: hidden` and the deco layer
  `position:absolute; inset:0; z-index:-1`
- **AND** the grid SHALL be two `rgba(255,255,255,.07)` 1 px gradients at `background-size: 64px 64px`
- **AND** ring 1 SHALL be **900 × 900** at (655.19, 0) with a 1 px `rgba(255,255,255,.16)` border, ring 2 a
  **2 px dashed** `rgba(215,255,58,.35)` circle spinning on a **60 s** linear loop, and ring 3 a **374.39** radial
  glow, transparent at 70 %
- **AND** `documentElement.scrollWidth` SHALL equal the viewport width and `scrollX` SHALL be **0** even at 320,
  where the rings are clipped rather than scrolled

#### Scenario: The decoration is reshaped below 861

- **GIVEN** the `max-width:860px` block
- **WHEN** the viewport is 860
- **THEN** ring 1 SHALL be **120vw** wide at `right:-60vw`, ring 2 **90vw** at `right:-45vw`, both `top:30%`
- **AND** ring 3 SHALL be `display:none`
- **AND** `scrollX` SHALL still be **0**

### Requirement: A bar with a diamond wordmark, four links and a Tickets pill

The header SHALL hold a two-part wordmark, a right-aligned four-link nav and an outlined Tickets pill.

#### Scenario: The bar, the links and the pill at 1440

- **GIVEN** the header at 1440
- **WHEN** measured
- **THEN** the bar SHALL be **1440 × 92.8** with an inner **1280 × 92.8** at (80, 0),
  `padding: 22px 48px`, `gap: 32`, `max-width: 1280`
- **AND** the wordmark SHALL be **197.53 × 30** at (128, 31.39): a **30 × 30** lime diamond with a blue cross,
  `gap: 10`, and a **17 px / 700 / .04em** uppercase string
- **AND** the nav SHALL be **954.47 × 48.8** at (357.53, 22) with `flex:1; justify-content: flex-end; gap: 24`, its
  link list **352 × 36.8** at (831, 28) at `gap: 28`, each link `padding: 6px 0`, **16 px / 500**
- **AND** the Tickets pill SHALL be **105 × 48.8** at (1207, 22) — `padding: 10px 20px`, **2 px** lime border,
  radius **999**, **17 px / 700**, and its text SHALL render **white**, the colour the cascade gives it (trap 2)

#### Scenario: Link hover and the bar's focus ring

- **GIVEN** the pointer over a nav link
- **WHEN** 400 ms have elapsed
- **THEN** the link SHALL keep `#fff` and grow a **2 px lime** underline (`background-size: 100% 2px`, gradient
  pinned to `0 100%`) that starts at **0 px** wide
- **AND** the Tickets pill SHALL invert to `#0a0f3d` on `#d7ff3a` on hover
- **AND** `:focus-visible` on any link or button SHALL draw a **3 px `#d7ff3a`** outline at **3 px** offset,
  recoloured to **`#0a0f3d`** inside the card — and the menu button SHALL use the ink ring, not the lime one

### Requirement: The copy column

The left column SHALL run edition pill → two-line uppercase headline with an outlined year → standfirst →
hairline facts row, in that order, at the measured sizes.

#### Scenario: Edition, headline and the outlined year at 1440

- **GIVEN** the copy column at 1440
- **WHEN** measured after `document.fonts.ready`
- **THEN** the column SHALL be **750.59 × 503.34** at (128, 232.72)
- **AND** the edition pill SHALL be **247 × 33.69** at (128, 232.72) — `padding: 6px 14px`, radius 999, a
  `rgba(255,255,255,.12)` wash, **14 px / 500** in `#dfe3ff`
- **AND** the `h1` SHALL be **750.59 × 235.53** at (128, **284.41**) — **136.96 px / 117.786 line box / 2 lines**,
  weight **700**, `line-height: .86`, `letter-spacing: -.055em`, `text-transform: uppercase`,
  `margin: 18px 0 20px`
- **AND** line 1 SHALL be **117.77** tall and line 2 **117.77** at y **402.17**, a flex row at `gap: 24.65` whose
  second item is **309.58** wide, `color: transparent` and stroked **2 px** in lime with `letter-spacing: -.03em`

#### Scenario: The standfirst and the facts row

- **GIVEN** the lower half of the copy column at 1440
- **WHEN** measured
- **THEN** the standfirst SHALL be **679.67 × 87.75** at (128, **539.94**) — **18.88 / 29.264 / 3 lines** in
  `#dfe3ff`, `max-width: 36em` = **679.68** (it clamps by 0.01 px, so the copy is the measure)
- **AND** the facts `dl` SHALL be **750.59 × 76.38** at (128, **659.69**) — `margin-top: 32`, `padding-top: 22`, a
  1 px `rgba(255,255,255,.22)` rule, `display:flex; flex-wrap: wrap; gap: 16px 40px`
- **AND** its items SHALL be **179 / 209 / 156** wide at x **128 / 347 / 596**, each **53.38** tall, with a
  **12.5 px / 700 / .14em** lime `dt` over an **18 px / 600** white `dd` at `gap: 10`
- **AND** the third `dd` SHALL carry three **30 × 30** avatars at `margin-left: -8` with a **2 px** blue ring and
  **10.5 px / 700** initials, then "24 talks"

### Requirement: A lime countdown card with a hard offset shadow

The right column SHALL be a lime card, radius 28, casting a **12 px 12px 0** deep-blue shadow, holding the head, the
four tiles, the price line, the CTA and the secondary link.

#### Scenario: The card and its head at 1440

- **GIVEN** the card at 1440
- **WHEN** measured
- **THEN** it SHALL be **361.41 × 355.41** at (950.59, **306.69**) — `padding: 30px`, radius **28**, `#d7ff3a`,
  ink text, `box-shadow: 12px 12px 0 #0d1690`
- **AND** the head SHALL be **301.41 × 31** at (980.59, 336.69): a **20 px / 700 / -.02em** title (124.81 wide) and
  the `Early bird` chip **92 × 27.38** at (1190, 338.5) — `padding: 4px 10px`, radius 999, ink ground, **12.5 px /
  700** lime, a **7 px** dot blinking on a **1.4 s** loop

#### Scenario: Four tiles that are not equal

- **GIVEN** the countdown grid at 1440
- **WHEN** measured
- **THEN** it SHALL be **301.41 × 83.17** at (980.59, 385.69) with `grid-template-columns: repeat(4, 1fr)` —
  **`minmax(auto, 1fr)`**, not four equal tracks — `gap: 8`, `margin-top: 18`
- **AND** the four tracks SHALL measure **71.72 / 67.98 / 68.00 / 69.70** at x **980.59 / 1060.31 / 1136.3 /
  1212.3**, each **83.17** tall with `padding: 14px 4px 10px`, radius **16** and an ink ground
- **AND** each number SHALL be **36.48 px / 700 / 40.128 line** with `font-variant-numeric: tabular-nums`, over an
  **11 px / 600 / .1em** `#c3c8f0` label at `margin-top: 2`
- **AND** at 1200 the tracks SHALL be **67.98 / 51.5 / 66.7 / 69.7** (the "MINUTES" label pins its own track), and
  at 1000 — card 520 wide — all four SHALL be equal (**111.5**)

#### Scenario: Price, CTA and the secondary link

- **GIVEN** the lower half of the card at 1440
- **WHEN** measured
- **THEN** the price line SHALL be **301.41 × 34.09** at (980.59, **486.86**) — **15 px**, `margin-top: 18`, a
  **22 px / 700** leading figure, a middot, an `<s>` comparison and "from 1 January"
- **AND** the CTA SHALL be **301.41 × 58.34** at (980.59, **536.95**) — `padding: 16px 22px`, radius **16**,
  `#1b2cf5`, white **17 px / 700**, label left and a 20 px arrow right
- **AND** hovering the CTA SHALL turn it `#0d1690` and translate the arrow **4 px** right
- **AND** the secondary link SHALL be **301.41 × 24.8** at (980.59, **607.3**) — `margin-top: 12`, **600**,
  centred, underlined at **3 px** offset, in ink on lime

### Requirement: A live countdown

The four tiles SHALL re-derive from `2027-03-18T09:00:00+00:00` every second, keep the clock aligned, and stop with
a final label at zero.

#### Scenario: The countdown reads the target

- **GIVEN** the card at 1440 with the reference target
- **WHEN** the script has rendered
- **THEN** the box SHALL be `role="timer"` with `aria-live="off"`, `aria-atomic="true"` and a `data-target` the
  script parses once
- **AND** days / hours / minutes / seconds SHALL be the floor of the remaining milliseconds, zero-padded to **2**
  digits (days to 2, **not 3** — the reference's 3-digit pad prints "099" under 100 days)
- **AND** the `aria-label` SHALL read "N days, N hours, N minutes and N seconds until doors open"

#### Scenario: Ticking and the zero state

- **GIVEN** a frozen clock in a test
- **WHEN** one second passes
- **THEN** exactly the seconds tile SHALL change and the next tick SHALL be scheduled for
  `1000 − (Date.now() % 1000) + 5` ms, so the tiles roll on the wall-clock second
- **AND** when the difference reaches **0** the head SHALL read "Doors are open" and the tiles SHALL show
  **00 / 00 / 00 / 00** with the timer stopped
- **AND** returning to the tab (`visibilitychange` → `visible`) SHALL re-render immediately and clear the pending
  timeout, and unmounting SHALL clear it too

### Requirement: A disclosure menu below 861

Below 861 px the four links and the Tickets pill SHALL collapse into a lime round button and a panel inside the bar.

#### Scenario: Open, close and the icons at 860

- **GIVEN** the script has added `is-enhanced` and the viewport is 860
- **WHEN** the page loads
- **THEN** the nav SHALL be `display:none; position:absolute`, the button **46 × 46** at (779.61, 22) with a lime
  ground, the bar **90** tall and the document **965**
- **AND** clicking SHALL set `is-open`, `aria-expanded="true"`, `aria-label="Close menu"` and `display:flex`, and
  swap the hamburger for the close icon
- **AND** the panel SHALL be **791.22 × 312.8** at (34.39, **90**) — `left/right: gutter`, `top:100%`, radius
  **22**, ink ground, `padding: 16`, `gap: 12`, `box-shadow: 0 24px 48px -16px rgba(0,0,0,.5)`
- **AND** its links SHALL be **20 px** at `padding: 12px 4px` with no gradient, and the Tickets pill centred
- **AND** **Escape**, an outside click, a panel link and `matchMedia('(min-width: 861px)')` SHALL each close it,
  Escape returning focus to the button

### Requirement: Responsive reshaping at 1000 and 520

Two width queries SHALL reshape the page: one column at 1000, and a compact card at 520.

#### Scenario: The one-column collapse at 1000

- **GIVEN** the `max-width:1000px` block
- **WHEN** the viewport goes 1001 → 1000
- **THEN** the hero grid SHALL become one column and the card SHALL take `max-width: 520`
- **AND** the card SHALL move from (677.92, 304.94) to **(40, 620.22)** and the document SHALL grow
  **900 → 1020**
- **AND** the facts row SHALL be **one** line at 1000 (it is **two** at 1024, where the copy column is narrower)

#### Scenario: The compact card at 520

- **GIVEN** the `max-width:520px` block
- **WHEN** the viewport goes 521 → 520
- **THEN** the logo SHALL drop to **15 px** and the year's stroke to **1.5 px**
- **AND** the facts `dl` SHALL become a 2-column grid at `gap: 16` with the **first** item spanning both columns and
  the `dd` at **16 px**
- **AND** the card shadow SHALL drop to **8px 8px 0**, the count `gap` to **6**, each tile to
  `padding: 12px 2px 8px` / radius **12**, and the label to **9.5 px / .06em**
- **AND** the document SHALL go **966 → 957** across that one pixel

### Requirement: The Component Dock footer

The page SHALL end with a footer that links the marketplace, because the reference has none.

#### Scenario: The added footer

- **GIVEN** the reference ends at the hero (`<main>` is the last landmark; no `<footer>`)
- **WHEN** the port renders
- **THEN** a `<footer>` SHALL follow the hero, outside the 100vh shell, linking
  `https://www.componentdock.com/` as "Component Dock"
- **AND** it SHALL sit on the same `#1b2cf5` ground with a `rgba(255,255,255,.22)` hairline and `#dfe3ff` text, so it
  reads as part of the page rather than an appendage

## Adapting to the repo (deltas — read before writing code)

**Copy and brand.** The reference's invented conference SHALL NOT appear as a brand. Use these replacements:

| source                                                        | port                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| "FRONTEND/NORTH" wordmark + diamond                            | **"soapbox"** (lowercase, matching the family's wordmark style) beside the same lime diamond — the nav is right-aligned, so a shorter wordmark moves only the nav's left edge, never the pill |
| `Frontend North 2027` (the `h1`)                               | **keep** — it is the event name, brand-free, and the 306 px wrap seam is keyed to the string |
| `The 6th edition · 2 days · 1 track`                           | keep the shape                                                                           |
| the three-sentence standfirst                                  | keep — it is the 3-line measure at 1440, 4 from 521, 5 from 390 and 6 at 320              |
| `18–19 March 2027` / `Manchester Central, UK` / `24 talks`     | keep, with the two `<time datetime>` values matching the countdown's target date          |
| `NO` / `KV` / `RB` avatar initials + the three `--c` fills     | keep — the chips are the only "faces" and they are `aria-hidden`                          |
| `Doors open in` + `Early bird`                                 | keep                                                                                     |
| `£299` / `£449` / "from 1 January"                             | keep; the struck price is an `<s>`, and the arithmetic must not contradict the chip       |
| `Get your ticket` / `See the full schedule`                    | keep both, and **wire them** (fix 2)                                                      |

If the port changes the headline it MUST re-measure the second line's **273.98 px** requirement and the title's
clamp (`3.2rem` floor at ≤419, `9.4rem` cap at ≥1600).

**Structure → React.** `App` → `<SiteHeader>` (wordmark `<Logo>`, `<NavLinks>`, `<TicketsPill>`,
`<MenuButton>`) → `<Main>` → `<EventHero>` → `<HeroCopy>` (`<EditionPill>`, `<Title>` with `<Year>`, `<Standfirst>`,
`<Facts>` with `<Fact>`, `<Avatars>`) + `<CountdownCard>` (`<CardHead>`, `<Countdown>` with four `<Tile>`,
`<PriceLine>`, `<TicketCta>`, `<ScheduleLink>`) → `<SiteFooter>`. State lives in two places: `SiteHeader.isOpen` and
a single `useCountdown(target)` hook (or `CountdownCard.now`). The menu's Escape / outside-click / `matchMedia`
listeners and the countdown's timeout SHALL be cleaned up on unmount.

Keep the data as constants: `NAV_LINKS` (4), `FACTS` (3 × `{label, value}`), `AVATARS` (3 × `{initials, fill}`),
`PRICE` (`{now, was, note}`), so counts are testable and the copy lives in one place. `TARGET` SHALL be one ISO
string, and the hook SHALL accept an injected clock so tests never assert "142".

**Tokens.** Put the palette in `@theme`: `--color-ground:#1b2cf5`, `--color-deep:#0d1690`, `--color-ink:#0a0f3d`,
`--color-lime:#d7ff3a`, `--color-soft:#dfe3ff`, `--color-label:#c3c8f0`, `--color-face-1:#ffb4a2`,
`--color-face-2:#a7f3d0`, `--color-face-3:#fde68a`; `--font-sans: "Space Grotesk", system-ui, …`;
`--gutter: clamp(16px,4vw,48px)`; `--hero-gap: clamp(32px,5vw,80px)`; `--text-display: clamp(3.2rem, 1rem + 8.4vw,
9.4rem)`; `--text-num: clamp(1.7rem, 1.2rem + 1.2vw, 2.4rem)`; `--card-pad: clamp(20px,2.5vw,30px)`. Tailwind's type
scale cannot express the clamps, and the 28 / 22 / 12 radii plus both shadows need arbitrary values.

**Space Grotesk.** Load it once: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400..700&display=swap`
(verified **200**); the static form `wght@400;500;600;700` is also **200**. Weights used: **400** (body), **500**
(nav links, edition pill), **600** (facts `dd`, secondary link, tile labels), **700** (headline, wordmark, tickets,
tile numbers, card title, chip, CTA, `dt`, initials).

**Images.** None. The four icons are inline SVG in the reference (30 px diamond, hamburger, close, arrow) — reproduce
them as inline SVG or `lucide-react` (`Menu`, `X`, `ArrowRight`, `Ticket`), sized 30 / 22 / 22 / 20.

**Prescribed fixes (behavioural, not cosmetic).**

1. **Print days without a leading zero.** The reference's `pad(d, 3)` prints "099" at 99 days and "000" at the door
   (trap 9); the port SHALL print `99` and `0`, keeping hours/minutes/seconds 2-digit.
2. **Wire the CTA and the two secondary links.** All eight anchors are `href="#"` (trap 15): the Tickets pill, the
   card CTA and "See the full schedule" SHALL scroll to a real section (or open a ticket step), and the four nav
   links SHALL resolve inside the page.
3. **Give the menu button an ink focus ring** (`focus-visible:outline-[#0a0f3d]`), keeping the lime ring everywhere
   else — the reference draws lime on lime at **1.15 : 1**.
4. **Mark the current nav item.** The reference has none because `.link:hover` and the declared soft colour both
   lose the cascade; add `aria-current="page"` plus a visible underline so the pill is not the only affordance.
5. **Keep `aria-live="off"` on the timer.** Update the `aria-label` only, never a live region (trap 10).
6. **Use `grid-cols-[repeat(4,1fr)]`, not `grid-cols-4`** (trap 3), or the four tiles become equal and the 1200
   render drifts by up to 16 px.
7. **Keep `overflow:hidden` on the shell** and reproduce the decoration with `isolation:isolate` + `z-index:-1`
   (traps 6 and 7); verify `scrollX === 0` at 320, 390 and 1440.
8. **Do not reproduce the dead `.cl-icon` rule** (eighteenth consecutive snippet to carry it) or the two container
   classes `__copy` / `__t1`; they carry no styles.
9. **Footer.** Add the Component Dock footer the reference lacks.

**Do not port:** the `:where(html) … { …: revert }` guard block (**23** `revert` declarations — Tailwind's
preflight covers it), the `[hidden]` re-declaration that only exists to undo it, the `is-enhanced` no-JS path as
*separate* CSS (React renders the enhanced state), the source's `#` anchors, or the macOS screenshot frame.

## Verification checklist

- [ ] `apps/soapbox` exists, package `@free-react-templates/soapbox`, `public/CNAME` =
      `soapbox.free.componentdock.com`, `"homepage"` = `https://soapbox.free.componentdock.com`
- [ ] `npm run verify:app soapbox` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-soapbox --type spec` is valid
- [ ] measured at 1440 × 900 (motion disabled): bar **1440 × 92.8**; inner **1280 × 92.8** at (80, 0); wordmark
      **197.53 × 30** at (128, 31.39); nav **954.47 × 48.8** at (357.53, 22); links **352 × 36.8** at (831, 28);
      tickets **105 × 48.8** at (1207, 22); hero **1280 × 623.34** at (80, 184.72); copy **750.59 × 503.34** at
      (128, 232.72); edition **247 × 33.69**; `h1` **750.59 × 235.53** at (128, 284.41) at **136.96 / 117.786** in
      **2 lines**; year **309.58** at (552.98, 402.17); standfirst **679.67 × 87.75** (3 lines); facts
      **750.59 × 76.38** at (128, 659.69) with items **179 / 209 / 156**; card **361.41 × 355.41** at
      (950.59, 306.69); head **301.41 × 31**; chip **92 × 27.38**; grid **301.41 × 83.17** with tracks
      **71.72 / 67.98 / 68.00 / 69.70**; price **34.09** at 486.86; CTA **58.34** at 536.95; secondary **24.8** at
      607.3
- [ ] document height **900** at 1440, 1360, 1280, 1222, 1200, 1100, 1064, 1024 and **1001**; **1020** at 1000;
      **1005** at 960; **983** at 900; **968** at 861; **965** at 860; **932** at 768; **910** at 700; **904** at
      679; **971** at 678; **960** at 640; **966** at 521; **957** at 520; **950** at 480; **942** at 430;
      **985** at 390; **984** at 360; **1031** at 306; **1075** at 305; **1032** at 320
- [ ] `scrollX === 0` at **1440, 1280, 1200, 1100, 1024, 1001, 1000, 960, 900, 861, 860, 768, 700, 679, 678, 640,
      521, 520, 480, 430, 390, 360, 320** (the rings are clipped, never scrolled)
- [ ] title size follows `clamp(3.2rem, 1rem + 8.4vw, 9.4rem)`: **136.96** at 1440, **123.52** at 1280, **102.02**
      at 1024, **88.24** at 860, **51.2** (floor) from 419 down; second line wraps to a **third** line only below
      306 (content 273.98 px) — and the standfirst is 3 / 4 / 5 / 6 lines at 1440 / 521 / 390 / 320
- [ ] facts: **one** row at content ≥ **624.69** px (vw 679 and up in the single-column band, vw 1100 in the
      two-column band), **two** wrapped rows at ≤ **623.78** (vw 678, 1024, 640); below 520 a 2-column grid with
      "When" spanning both
- [ ] card: **12px 12px 0** shadow at 361.41 wide, **8px 8px 0** at ≤520; price on **one** line at vw ≥1222 and
      **two** at ≤1221 (card 375.77 vs 352.52); four tiles **unequal** above 1000 and equal at 520 wide
- [ ] countdown: tiles are floor(diff) with 2-digit hours/minutes/seconds and **no** leading zero on days; the
      `aria-label` matches the tiles; at zero the head reads "Doors are open" and ticks stop; unmount clears the
      timeout
- [ ] menu: button appears at **860** (46 × 46, bar **90**, nav `display:none`), disappears at **861**; panel
      **791.22 × 312.8** at (34.39, 90) radius 22 with ink ground; `aria-expanded` / `aria-label` toggle and the
      icons swap; Escape (focus returns), outside click, panel link and crossing 861 each close it
- [ ] anchors: the port has **no** `href="#"` left — nav links, tickets, CTA and schedule link all resolve or act;
      `aria-current="page"` is on one nav item
- [ ] exactly **one** `<h1>`, **one** `<h2>`, **0** `<img>`, **0** `<form>`, **1** button, **8** anchors and **3** ids
      in the reference shape; the footer links `https://www.componentdock.com/`
- [ ] no ColorLib asset or string is copied: the wordmark is **soapbox**, icons are inline SVG or `lucide-react`,
      Space Grotesk comes from Google Fonts
- [ ] contrast: white/blue **7.71**, soft/blue **6.08**, lime/blue **6.70**, ink/lime **15.89**, white/ink **18.28**,
      label/ink **11.18**; the menu button's ring is **ink**, not lime
- [ ] `git grep -il 'colorlib\|hero-07\|frontend/north' apps/soapbox` → **no hits** (provenance lives only in this
      spec, `TEMPLATES.md` and the PR)
