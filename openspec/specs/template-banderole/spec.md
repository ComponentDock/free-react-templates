# Template: Banderole (Alert — a slim gradient announcement bar above a product landing page)

## Purpose

A **product landing page whose top band is a dismissible announcement**. Above the site header sits a
**57.75 px** announcement bar painted with a **100° two-stop gradient** from deep green `#14532d` to
teal `#0f766e`, carrying four things on one centre-aligned row: a **lime `NEW` pill** (`#bef264`,
12 px / 700 / uppercase / `+0.06em`), a **15 px message** whose first words are bold ("Offline mode is
here." + a sentence), a **translucent glass pill CTA** with a 16 px arrow ("Read the release notes"),
and a **36 px circular close button** pinned 14 px from the right edge. Pressing close **collapses the
bar to zero height** (a `grid-template-rows: 1fr → 0fr` transition, 0.32 s), writes
`dismissed` into `localStorage`, and **moves focus to the `h1`**. A small centred line under the hero's
CTA — "Closed the banner? **Show it again**" — restores it and focuses the banner CTA.

Below the bar: a **1120 px header** (rounded-square sprout mark + "Fernwood" wordmark at 20/700, three
16 px nav links) and a **centred 820 px hero** on a warm oat ground `#f6f4ee`: a teal 16 px kicker, a
**68 px / 700 / 1.02 / −0.035em** headline that breaks over two lines, a 560 px / 18 px paragraph, a
**dark-green pill button** ("Start writing free") and the reset line. **Space Grotesk** throughout.

- **Source slug:** `alert-04`
- **ColorLib page:** https://colorlib.com/wp/template/alert-04/ — **HTTP 200, 113,710 B**, `<title>`
  `Alert V04 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V04"**, meta description *"A slim
  gradient bar at the very top of a product site announcing a new feature, with a tag, a short message
  and a… Free download, no jQuery or plugins."*, `datePublished` **2026-09-25T14:53:39+00:00**,
  claims *"169 KB"* (measured **173,000 B = 168.9 KiB** ✓), and links its siblings by display name —
  Alert 03, 05, 07, 08, 09, 10, 11 and 12 (the family runs to twelve). This is the **design name the
  naming audit reads**: ColorLib "Alert V04".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-04/ —
  **HTTP 200, 2,790 B**, `<title>` `Alert V04 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  `<script>`. The slug-only path `theme/alert-04/` is **404 (9 B)**; `theme/bb/alert-04/` is **404
  (9 B)**. Same `bootstrap/` prefix ladder as `alert-01`, `alert-02`, `alert-03` and the `card` family.
- **Design category:** Alert (announcement bar / dismissible top banner with restore).
  **Fourth** of the **`alert` snippet family** (**12** variants) in the **214 snippet variants** of
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/banderole`,
  package `@free-react-templates/banderole`, CNAME `banderole.free.componentdock.com`.

**What this design is, and what it is not.** `alert-01` was a static severity ladder, `alert-02` a
dismiss/restore *list*, `alert-03` admonitions inside prose. `alert-04` is the first variant that is **a
whole page whose subject is the bar**: the announcement is not a component demo in a frame, it is the
top band of a landing page, and its state is **persistent** (a reload with the key set starts collapsed,
header at `y = 0`). Four consequences shape the port:

- **The bar collapses, it does not `display: none`.** The height animation is a **grid row track**
  (`grid-template-rows: 1fr → 0fr` on the `aside`, `overflow: hidden` on the inner, plus `opacity`), so
  the elements inside keep their widths through the whole 0.32 s and the page below slides up smoothly.
  A port that toggles `hidden` or `height: 0` throws the animation away.
- **The restore control lives in the page, not in the bar.** "Show it again" is a `<button>` inside the
  hero's demo line, *always visible* in the reference (even while the bar is up). It is the only way
  back, and it clears the storage key rather than setting a third state.
- **Focus is moved by hand.** After dismissing, the reference focuses the **`h1`** (`tabindex="-1"`,
  `outline: none` with a `:focus-visible` ring); after restoring it focuses the **banner CTA**. Neither
  is a browser default — both are specified here.
- **Reduced motion is a separate branch**, not a shortened transition: with
  `prefers-reduced-motion: reduce` the bar is set `hidden` in the same tick, `.is-closing` is never
  applied, and the keyboard focus still lands on the `h1`.

**The four things a careless port flattens** (each measured here, expanded below):

- **The gradient is `100deg`, not `90deg`** — it runs from the **top-left** to the **bottom-right**, so
  the first 64 px of the bar is darker than the last. A flat `to-r` gradient is visibly wrong at 1440.
- **The bar's height is the CTA's, not the text's.** 57.75 = **12 + 33.75 + 12**: the 33.75 px glass
  pill is taller than the 21.75 px message line, so the bar's height is driven by the button. Porting it
  as a 48 px "ticker" is 10 px short.
- **Three wrap breaks, not one.** One row while the viewport ≥ **1001**; two rows at **1000**; the copy
  itself goes to **2 lines at 700**, **3 at 420** and **4 at 320**, and the ≤ **640** media step changes
  the bar's padding from `12/64` to `12/56/14/16` while the close button jumps from `top: 50%` to
  `top: 10px; right: 8px`.
- **The lime is only on the tag.** `#bef264` appears twice — the tag's fill and the banner's focus ring
  — and nowhere else. The page's own accent is `#14532d` / `#0f766e`; the demo text sits at `#56645a`
  and the reset link at `#0f5f58`. Using lime for the primary button is the classic wrong read.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,900** rows, **3,156** lines), so this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `alert-04` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in
that gap are all prepped. Families are worked **in family order, then variant number** — the `card`
family (20) is closed, `alert` is in progress (`alert-01` → **noticeboard**, `alert-02` → **allclear**,
`alert-03` → **fieldguide**, all prepped but **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **fourth** entry
of a section that does not exist yet. It belongs **between `## Bootstrap Accordions (20)` (line 639)
and `## Bootstrap Buttons (20)` (line 663)** — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 04** — [colorlib](https://colorlib.com/wp/template/alert-04/) · [banderole](https://banderole.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-04.jpg)
```

Row-grammar warning, measured on main `9d4e55e5d`: `## Bootstrap Accordions` (the section immediately
above) uses `[colorlib] · [app] · ![preview]`; `## Bootstrap Buttons` uses `[colorlib] · ![preview] ·
[app]` for 12 rows and app-before-preview for 7. Use the **accordion** form (app before preview) and
re-read the surrounding lines **immediately before pushing** — two implementer streams write this file.

**The name.** `banderole` — one lowercase word, a small banner/streamer (the literal name of the thing
this design is), and it matches the family's closed-single-word pattern (`noticeboard`, `allclear`,
`fieldguide`) and the card family's (`coursebook`, `roadbook`, `shortlist`). Verified free on main
`9d4e55e5d`: `git grep -il banderole origin/main` → **0 files**; no `apps/banderole`; no
`openspec/specs/template-banderole`; no bold name in `TEMPLATES.md`; and the ColorLib catalogue URLs
`colorlib.com/wp/template/banderole/`, `preview.colorlib.com/theme/banderole/`,
`preview.colorlib.com/theme/bootstrap/banderole/` and `theme/bb/banderole/` all miss.

Zero-collision alternatives measured the same run, still free if a later variant needs one: `crier`,
`placard`, `stanchion`, `awning`, `hoarding`, `streamer`. Rejected on measurement because an app or a
spec already owns them: `ticker` (app+spec), `herald` (app), `bulletin` (app), `newswire` (app),
`pennant` (spec only), `marquee` (spec only). Do **not** reuse `noticeboard` (alert-01), `allclear`
(alert-02) or `fieldguide` (alert-03), nor the card family's twenty taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 2,790 B** live (`2,587 B` inside the archive), `<title>` "Alert V04 \| Colorlib", `lang="en"`, **one** stylesheet, **one** `<script>` |
| preview path      | **`theme/bootstrap/alert-04/`**; `theme/alert-04/` **404** (9 B), `theme/bb/alert-04/` **404** (9 B)                          |
| stylesheet        | `css/style.css?v=004bbd9e`, **10,161 B**, 434 lines, sha256 `84d0e799e091e0da3296cbadee5951e705a11b5e47ae79215f704a192e3e7f98` |
| script            | `js/snippet.js?v=84302f6d`, **1,970 B**, sha256 `e13887b983612320dce5607ff7afee686ec5c3a97afe3c2fce7047d986238281` — **this variant really ships its script** (unlike `alert-03`, whose `js/` was a 9-byte soft 404) |
| archive           | `preview.colorlib.com/downloads/free/alert-04.zip`, **200, 173,000 B** (= 168.9 KiB ✓ the page's "169 KB"), **16 entries**: 4 dirs + `index.html` 2,587 B + `css/style.css` 10,161 B + `js/snippet.js` 1,970 B + `README.md` 1,262 B + **8 `woff2`** |
| live ↔ archive    | CSS **identical sha256**, JS **identical sha256**; the two HTML files differ **only** in the `<head>` (`robots` metas, a `cdnjs` `dns-prefetch`, `?v=` query strings, `fetchpriority="high"`) → **live preview verified; the archive is its un-versioned twin** |
| README            | lists `images/  its images` — **there is no `images/` directory and the page has no `<img>`** (defect 3)                     |
| fonts             | **8** `woff2` but **2 distinct binaries**: latin **22,320 B** sha256 `a0d054c4af557de2…`, latin-ext **18,924 B** sha256 `054c266fbb441ee0…`. Declared **400 / 500 / 600 / 700** × latin / latin-ext = 8 `@font-face` over 2 files → **one variable cut**. At 1440 the four **latin** faces load and the four **latin-ext** faces do not |
| CSS size          | **56** top-level blocks = 8 `@font-face` + 2 `@media` + **10** `:where(html) … { all: revert }` guards + **36 design style rules** (41 design selectors, **88** guard selectors). **4** custom properties, **5** `transition` declarations, **0** `@supports`, **0** `@keyframes`, **0** container queries. Media: `max-width: 640px` (7 inner rules) and `prefers-reduced-motion: reduce` (1 rule, 2 selectors) |
| classes           | **19** in the markup, **18** styled; **1 phantom** (`.cl-alert04-page`, on `<body>`, has **no rule**) and **1 dead selector** (`.cl-icon` — the ninth snippet in a row carrying this leftover). `.is-closing` is a **state** class, added by script only |
| duplicate rule    | `.cl-alert04-hero__button` is declared **twice** (geometry in the first, `border/background/color` in the second) — merge into one rule in the port |
| custom properties | **4**: `--cl-alert04-from: #14532d`, `--cl-alert04-to: #0f766e`, `--cl-alert04-ink: #f0fdf4`, `--cl-alert04-lime: #bef264`, all on `.cl-alert04` and never re-set elsewhere |
| controls          | **2** `<button>` (close, demo reset), **6** `<a>` (logo, 3 nav, banner CTA, hero button), **3** `<svg>` (28 px mark, 16 px arrow, 18 px cross), **0** `<img>`, **0** forms/inputs, **8** focusable elements |
| headings          | **1 × `h1`** (`tabindex="-1"`) and **no `h2`–`h6` at all**. The bar carries no heading; the tag is a `<span>` — **do not promote it** |
| landmarks         | `<aside aria-label="Announcement">`, `<header>`, `<nav aria-label="Main">`, `<main id="top">`. The bar is an `aside`, **not** `role="alert"`, and it has **no `aria-live`** |
| ids / fragments   | exactly **one** id in the document (`#top`). **5 dead fragments**: `#release-notes` (CTA), `#features`, `#pricing`, `#journal` (nav) and `#start` (hero button) |
| document height   | **900** at 1440 × 900 — the page fits the viewport; there is no scroll and no footer band          |
| screenshot        | `alert-04.jpg` **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `avifdec` / `PIL` opens it, convert before viewing — and it is a **browser-chrome mock-up** (see defects) |

### Page arithmetic — one gradient, one collapse, three clamps

```css
body  { margin: 0; background: #f6f4ee;
        font-family: "Space Grotesk", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.cl-alert04      { display: grid; grid-template-rows: 1fr;
                   background: linear-gradient(100deg, #14532d, #0f766e); color: #f0fdf4;
                   transition: grid-template-rows .32s cubic-bezier(.4,0,.2,1), opacity .2s ease; }
.is-closing      { grid-template-rows: 0fr; opacity: 0; }
.__inner         { display: flex; flex-wrap: wrap; gap: 8px 20px; align-items: center;
                   justify-content: center; padding: 12px 64px; font-size: 15px; line-height: 1.45;
                   overflow: hidden; }
.cl-alert04-site { max-width: 1120px; margin: 0 auto; padding: 22px 24px; }
.cl-alert04-hero { max-width: 820px; margin: 0 auto;
                   padding: clamp(48px, 10vw, 110px) 24px 96px; text-align: center; }
.__title         { font-size: clamp(36px, 7vw, 68px); line-height: 1.02; letter-spacing: -.035em; }
```

The bar's height is a **sum of the taller child plus padding**, and every break is explained by it
(measured, one row per state):

| viewport | copy lines | rows in the bar | padding (t/r/b/l)     | bar height | proof                              |
| -------- | ---------: | --------------- | --------------------- | ---------: | ---------------------------------- |
| **1440** |          1 | 1 (msg + CTA)   | `12px 64px`           |  **57.75** | `12 + 33.75 + 12` (CTA is tallest) |
| **1001** |          1 | 1               | `12px 64px`           |  **57.75** | last width that fits: 630.2 + 20 + 222 = **872.2** + 128 = **1000.2** |
| **1000** |          1 | 2 (CTA wraps)   | `12px 64px`           |  **87.50** | `12 + 21.75 + 8 + 33.75 + 12`      |
| **900**  |          1 | 2               | `12px 64px`           |  **87.50** | same                               |
| **700**  |          2 | 3 (+CTA)        | `12px 64px`           | **109.25** | `12 + 43.5 + 8 + 33.75 + 12`       |
| **640**  |          2 | 3               | `12px 56px 14px 16px` | **111.25** | media step: `12 + 43.5 + 8 + 33.75 + 14` |
| **520**  |          2 | 3               | `12px 56px 14px 16px` | **111.25** | same                               |
| **420**  |          3 | 4               | `12px 56px 14px 16px` | **133.00** | `12 + 65.25 + 8 + 33.75 + 14`      |
| **320**  |          4 | 5               | `12px 56px 14px 16px` | **154.75** | `12 + 87 + 8 + 33.75 + 14`         |

Header and hero are the same three clamps on the other axis:

| element        | value                                     | measured ladder                                                        |
| -------------- | ----------------------------------------- | ---------------------------------------------------------------------- |
| header height  | `22 / 28 / 22` → **72**; `18+28+18` → **64** at ≤640 | 72 at 1440…660; **64** at 640, 620, 600, 520, 480, 440, 414; **97** at ≤400 (the 3-link nav drops to its own row: `18 + 28 + 12 + 21 + 18`) |
| hero padding-t | `clamp(48px, 10vw, 110px)`                | **110** at ≥1100; 102.4 at 1024; 90 at 900; 70 at 700; 64 at 640; 60 at 600; 52 at 520; **48** at ≤480 |
| `h1` size      | `clamp(36px, 7vw, 68px)`                  | **68** at ≥971.4; 63 at 900; 57.4 at 820; 49 at 700; 46.2 at 660; 44.8 at 640; 42 at 600; 36.4 at 520; **36** at ≤514.3 |

Measured geometry at 1440 × 900 (first layout pass; document height **900**, i.e. no scroll):

| element            | box                              | note                                                        |
| ------------------ | -------------------------------- | ----------------------------------------------------------- |
| `.cl-alert04`      | 1440 × **57.75** at (0, 0)       | gradient `linear-gradient(100deg, rgb(20,83,45), rgb(15,118,110))` |
| `.__inner`         | 1440 × 57.75, padding `12 64`    | `gap: 8px 20px`, `justify-content: center`                   |
| `.__msg`           | **630.2 × 21.75** at (283.9, 18) | flex, `gap: 12px`                                            |
| `.__tag`           | **46.2 × 21.4** at (283.9, 18.2) | 12 / 700, `+0.72px`, `2px 9px`, r **999**, bg `#bef264`, ink `#14350f` |
| `.__copy`          | **572 × 21.75** at (342.1, 18)   | 15 / 21.75; `<strong>` 700                                   |
| `.__cta`           | **222 × 33.75** at (934.1, 12)   | 15 / 600, `6px 14px`, r 999, bg `rgba(255,255,255,.14)`, ring `inset 0 0 0 1px rgba(255,255,255,.28)` |
| `.__close`         | **36 × 36** at (1390, 10.9)      | `right: 14px; top: 50%`, `translateY(-50%)`, r 50%           |
| `.cl-alert04-site` | **1168 × 72** at (136, 57.75)    | 1168 = `max-width 1120` + 2 × 24 padding                     |
| `.__logo`          | **134 × 28** at (160, 79.8)      | 28 px mark + 10 gap + 20 / 700 wordmark                      |
| `.__nav`           | **231 × 21** at (1049, 83.2)     | 3 links, `gap: 24px`, 16 / 500                               |
| `.cl-alert04-hero` | **868 × 608.4** at (286, 129.8)  | 868 = `max-width 820` + 2 × 24; padding `110 24 96`          |
| `.__kicker`        | 820 × 21 at (310, 239.8)         | 16 / 600, `#0f766e`, `margin: 0 0 14px`                      |
| `.__title`         | 820 × **138.72** at (310, 274.8) | 68 / 69.36 (**1.02**), ls **−2.38** (−0.035em), `#14281c`, 2 lines |
| `.__text`          | **560 × 83.7** at (440, 433.5)   | 18 / 27.9 (1.55), `#445248`, `margin: 20px auto 0`           |
| `.__button`        | **183 × 47** at (628.5, 549.1)   | 16 / 600, `13px 22px`, r 999, `#14532d` (hover `#0f3f22`)    |
| `.__demo`          | 820 × 18 at (310, 624.1)         | 14 px, `#56645a`, `margin: 28px 0 0`                         |
| `.__reset`         | **97 × 18** at (741, 624.1)      | 14 / 600, `#0f5f58`, underline, `offset 3px`                 |

### Design tokens — the announcement grammar (four tokens, one gradient)

```css
.cl-alert04 { --cl-alert04-from: #14532d; --cl-alert04-to: #0f766e;
              --cl-alert04-ink:  #f0fdf4; --cl-alert04-lime: #bef264; }
.__tag   { background: var(--cl-alert04-lime); color: #14350f; }   /* the only lime fill */
.__cta   { background: rgba(255,255,255,.14); box-shadow: inset 0 0 0 1px rgba(255,255,255,.28);
           color: #fff; }                                          /* glass, not a solid */
.__close { color: var(--cl-alert04-ink); }                          /* hover rgba(255,255,255,.16) */
banner focus ring  { outline: 2px solid #bef264; outline-offset: 2px; }
page   focus ring  { outline: 2px solid #0f766e; outline-offset: 3px; border-radius: 6px; }
```

| token / value            | reference value                                   | where it is used                              |
| ------------------------ | ------------------------------------------------- | --------------------------------------------- |
| banner gradient          | `linear-gradient(100deg, #14532d, #0f766e)`        | the whole `aside`                             |
| banner ink               | `#f0fdf4`                                          | message, `<strong>`, close icon               |
| tag fill / tag ink       | `#bef264` / `#14350f`                              | the `NEW` pill only (**not** the hero button) |
| CTA glass                | `rgba(255,255,255,.14)` + `inset 0 0 0 1px rgba(255,255,255,.28)` | banner CTA pill |
| page ground              | `#f6f4ee`                                          | `body`                                        |
| ink / body / nav         | `#14281c` / `#445248` / `#3b4a40`                  | headline+logo / hero paragraph / nav links    |
| kicker                   | `#0f766e`                                          | hero eyebrow                                  |
| primary button           | `#14532d`, hover `#0f3f22`                         | hero CTA                                      |
| demo / reset             | `#56645a` / `#0f5f58`                              | the "Closed the banner?" line and its button  |
| logo mark                | fill `#14532d`, glyph `#bbf7d0`                    | 28 px rounded square (`rx 9`)                 |
| radii                    | `999px` pills · `50%` close · `9px` mark · `6px` page focus | —                                  |
| type                     | `Space Grotesk` 400–700 (one variable cut), fallback `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | everything |


### Behaviour — one key, two directions, four measured outcomes

```js
const key = `cl-alert04:${banner.dataset.clAlert04Key || 'announcement'}`;   // → "cl-alert04:fernwood-offline-2026-10"
if (store.get(key) === 'dismissed') banner.hidden = true;                    // on load, no transition
hide():  store.set(key, 'dismissed');
         reduced → banner.hidden = true
         else    → +.is-closing → (transitionend on the banner | 500 ms timeout) → hidden, class removed
         → h1.focus()                                                        // heading has tabindex="-1"
reset(): store.remove(key); −.is-closing; banner.hidden = false; cta.focus();
```

Measured with Playwright (storage cleared between contexts):

| action                       | observed                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| load, no key                 | bar **57.75** tall, header at `y 57.75`, 8 focusable elements                                 |
| click close                  | `hidden=true`, bar **0** tall, header at `y 0`, class `is-closing` **removed**, key = `dismissed`, active element = **`H1`** |
| click "Show it again"        | `hidden=false`, bar **57.75** tall, key **deleted**, active element = the banner **CTA**      |
| reload after dismiss         | `hidden=true` on first paint (no flash), header at `y 0`                                      |
| dismiss under `reducedMotion`| `hidden=true`, `.is-closing` **never applied**, key still written                             |

The script is **1970 B, IIFE, `'use strict'`, no dependencies**, and touches `localStorage` through a
`try/catch` wrapper (`get`/`set`/`remove` swallow throw — private-mode safety). It binds exactly **two**
listeners (`click` on close, `click` on reset) plus a one-shot `transitionend`; there is **no** timer
loop, no scroll listener, no form.

### Contrast (WCAG 2.x, computed from the shipped hexes)

| run                                | value        | note                                                        |
| ---------------------------------- | ------------ | ----------------------------------------------------------- |
| banner message `#f0fdf4` on `#14532d` → `#0f766e` | **8.70 → 5.23** | the ink clears AA against both gradient ends        |
| `NEW` tag `#14350f` on `#bef264`   | **10.40**    | the strongest pairing in the design                          |
| banner CTA `#ffffff` on its glass pill | **6.26 → 4.17** | 4.65 at the pill's real position (≈72 % along the gradient) — **passes there, fails (4.17) at the teal extreme**. Fix in the port: raise the pill to `rgba(255,255,255,.22)` or use `#f0fdf4` on a `#0b4f49` solid |
| nav `#3b4a40` / logo `#14281c` on `#f6f4ee` | **8.53 / 14.14** |                                                       |
| kicker `#0f766e` on `#f6f4ee`      | **4.98**     | passes AA at 16 / 600                                         |
| headline `#14281c`, body `#445248` | **14.14 / 7.50** |                                                           |
| hero button `#ffffff` on `#14532d` | **9.11**     |                                                               |
| demo `#56645a`, reset `#0f5f58`    | **5.67 / 6.82** | 14 px runs — both clear AA                                   |

## Defects found in the reference (fix in the port; do not reproduce)

1. **Five dead in-page fragments.** `#release-notes` (banner CTA), `#features`, `#pricing`, `#journal`
   (nav) and `#start` (hero button) point at ids the document does not contain; only `#top` resolves.
   The port resolves nav to real section ids (or renders them as inert text) and never ships a dead
   `href="#…"`.
2. **The demo reset is always visible.** "Closed the banner? Show it again" renders while the banner is
   *up*, where pressing it is a no-op (it un-hides what is already visible, then steals focus to the
   CTA). The port shows the reset line **only when the bar is dismissed** — the affordance then means
   what it says.
3. **`README.md` advertises `images/  its images`** — there is no `images/` directory and no `<img>` in
   the page. Nothing to port; noted so a later reader does not go looking.
4. **Phantom and dead classes.** `.cl-alert04-page` (on `<body>`) has no rule at all;
   `.cl-icon` is styled but never used in the markup.
5. **The hero button is declared twice** with the same selector (geometry in one rule, colour in the
   next) — merged into one atomic class in the port.
6. **No `aria-live` on the bar** (it is an `<aside aria-label="Announcement">`), so a screen reader is
   never told the announcement changed; conversely, dismissal is announced only because focus moves to
   the `h1`, which happens to work. The port keeps the `<aside>` + labelled region, and **adds nothing**
   that would make the demo shout (`role="alert"` on a persistent banner is wrong).
7. **Screenshot is a browser mock-up**: `alert-04.jpg` is **1200 × 972**, an AVIF behind a `.jpg`
   extension, framed in a macOS window with a grey desk and a drop shadow. The frame is **never**
   adopted: the page ground is `#f6f4ee` edge to edge.

## Requirements

### Feature: The page skeleton

#### Scenario: Landmarks and order

- **GIVEN** the `banderole` app at 1440 × 900
- **WHEN** the document is read top to bottom
- **THEN** the order SHALL be: **announcement bar → site header (logo + 3 nav links) → hero (kicker,
  `h1`, paragraph, primary button, restore line)**
- **AND** the bar SHALL be an `<aside aria-label="Announcement">` (a labelled complementary landmark),
  the header a `<header>`, the nav a `<nav aria-label="Main">`, the hero a `<main id>` with an `h1`
- **AND** the page SHALL contain **exactly 1 `h1` and 0 `h2`–`h6`** — the tag, the copy and the demo
  line are **not** headings
- **AND** the document SHALL fit 900 px at 1440 (measured **900**): no scroll, no footer band, no
  second section to invent

#### Scenario: The bar is above, not inside, the header

- **GIVEN** the rendered page
- **WHEN** the bar and the header boxes are measured
- **THEN** the bar SHALL occupy `y 0 → 57.75` full width, and the header SHALL begin at `y 57.75`
- **AND** the bar SHALL be a sibling of the `<header>`, **not** a child: dismissing it SHALL move the
  header to `y 0` and the hero with it
- **AND** the bar SHALL be `position: static` — never `fixed`/`sticky` (the reference scrolls with the
  page; there is nothing to stick to)

### Feature: The announcement bar

#### Scenario: The gradient and the frame

- **GIVEN** the bar at 1440
- **WHEN** its computed background is read
- **THEN** it SHALL be **`linear-gradient(100deg, #14532d, #0f766e)`** — 100°, i.e. top-left → bottom-right
- **AND** its ink SHALL be **`#f0fdf4`** and its content box SHALL be
  `display: flex; flex-wrap: wrap; gap: 8px 20px; align-items: center; justify-content: center`
- **AND** its padding SHALL be **`12px 64px`** above 640 and **`12px 56px 14px 16px`** at ≤640
- **AND** its collapsed state SHALL be a **grid row track** (`grid-template-rows: 1fr → 0fr` +
  `opacity: 0`, `0.32s cubic-bezier(.4,0,.2,1)` / `0.2s ease`) with `overflow: hidden` on the inner —
  **never** `display: none` mid-animation

#### Scenario: Tag, message and CTA

- **GIVEN** the visible bar at 1440
- **WHEN** the three children are measured
- **THEN** the tag SHALL be **46.2 × 21.4**, `12px / 700`, `text-transform: uppercase`,
  `letter-spacing: 0.72px` (`+0.06em`), `padding: 2px 9px`, `border-radius: 999px`,
  `background: #bef264`, colour **`#14350f`**, `flex: none`
- **AND** the message SHALL be **15px / 21.75** with the opening words in `<strong>` (700), separated
  from the tag by a **12 px** flex gap
- **AND** the CTA SHALL be **222 × 33.75**, `15px / 600`, `padding: 6px 14px`, `border-radius: 999px`,
  `background: rgba(255,255,255,.14)`, `box-shadow: inset 0 0 0 1px rgba(255,255,255,.28)`,
  `color: #ffffff`, `white-space: nowrap`, `gap: 6px`, with a **16 px** arrow that translates **+3 px**
  on hover while the pill's fill rises to `rgba(255,255,255,.24)` over 0.15 s
- **AND** the bar's own height SHALL fall out of these numbers (57.75 = 12 + 33.75 + 12), not be set

#### Scenario: The close control

- **GIVEN** the bar at any width above 640
- **WHEN** the close button is measured
- **THEN** it SHALL be **36 × 36**, `border-radius: 50%`, transparent, `position: absolute;
  right: 14px; top: 50%; transform: translateY(-50%)`, holding an **18 px** cross stroked in `currentColor`
- **AND** at ≤640 it SHALL move to `top: 10px; right: 8px; transform: none`
- **AND** its accessible name SHALL be **"Dismiss announcement"** (`aria-label` on the `<button>`),
  the cross itself `aria-hidden="true"` + `focusable="false"`
- **AND** hover SHALL paint `rgba(255,255,255,.16)` and focus-visible SHALL draw
  `outline: 2px solid #bef264; outline-offset: 2px`

### Feature: Dismiss, persistence and restore

#### Scenario: Dismissing

- **GIVEN** the bar visible and no stored key
- **WHEN** the close button is pressed
- **THEN** the key SHALL be written as `<namespace>:<banner key>` = `dismissed` in `localStorage`
- **AND** the bar SHALL animate to **0 px** (class `is-closing`), then carry `hidden` and drop the class;
  the header SHALL reach `y 0`
- **AND** focus SHALL move to the **`h1`** (`tabindex="-1"`), whose `:focus-visible` ring is
  `2px solid #0f766e; outline-offset: 6px; border-radius: 6px`
- **AND** the animation's end SHALL be resolved by **`transitionend` on the bar itself** *or* a **500 ms**
  timeout, whichever fires first, guarded so it runs once

#### Scenario: Persisting

- **GIVEN** the key set to `dismissed`
- **WHEN** the page is reloaded
- **THEN** the bar SHALL be `hidden` **before the first paint of the layout** (no flash of a bar that
  then collapses) and the header SHALL start at `y 0`
- **AND** `localStorage` access SHALL be wrapped in `try/catch` so a throwing store degrades to
  "always visible" rather than a broken page

#### Scenario: Restoring

- **GIVEN** the bar dismissed
- **WHEN** "Show it again" is pressed
- **THEN** the key SHALL be **deleted** (not set to a third value), the bar SHALL be un-hidden and
  SHALL return to **57.75** without the closing class
- **AND** focus SHALL move to the **banner's CTA**
- **AND** the restore control SHALL be rendered **only while the bar is dismissed** (defect 2) — the
  reference's always-visible reset is a no-op while the bar is up

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the close button is pressed
- **THEN** the bar SHALL be set `hidden` **immediately**, `.is-closing` SHALL **never** be applied
- **AND** the key SHALL still be written and the focus SHALL still land on the `h1`
- **AND** the CSS `@media (prefers-reduced-motion: reduce)` branch SHALL also zero the bar's transition

### Feature: Site header

#### Scenario: Logo and nav

- **GIVEN** the header at 1440
- **WHEN** it is measured
- **THEN** its content box SHALL be **1168** wide at `x 136` (`max-width: 1120px` + `24px` padding each
  side), height **72** (`22 + 28 + 22`), `justify-content: space-between`, `flex-wrap: wrap`,
  `gap: 12px 24px`
- **AND** the logo SHALL be a **28 × 28** rounded square (`rx 9`, fill `#14532d`) holding a sprout glyph
  stroked `#bbf7d0` at **2 px**, followed by a **20 px / 700** wordmark in **`#14281c`**, `gap: 10px`
- **AND** the three nav links SHALL be **16 px / 500** in **`#3b4a40`**, `gap: 24px`, hovering to
  `#14532d` with a **4 px** underline offset
- **AND** at ≤640 the header padding SHALL become **`18px 16px`** (height **64**) and at ≤400 the nav
  SHALL drop to its own row (height **97**, `18 + 28 + 12 + 21 + 18`)

### Feature: Hero

#### Scenario: Composition

- **GIVEN** the hero at 1440
- **WHEN** it is measured
- **THEN** its box SHALL be **868** wide at `x 286` (`max-width: 820px` + `24px` padding), padding
  **`110px 24px 96px`**, `text-align: center`
- **AND** the kicker SHALL be **16 px / 600** in **`#0f766e`** with `margin: 0 0 14px`
- **AND** the `h1` SHALL be **68 px / 69.36 (1.02)**, `letter-spacing: −2.38px` (−0.035em), `#14281c`,
  **two lines** (`138.72` tall), `margin: 0`
- **AND** the paragraph SHALL be **18 px / 27.9 (1.55)** in `#445248`, `max-width: 560px`,
  `margin: 20px auto 0`, three lines (`83.7`)
- **AND** the primary button SHALL be **183 × 47**, `16px / 600`, `padding: 13px 22px`,
  `border-radius: 999px`, `background: #14532d` → hover **`#0f3f22`**, colour `#ffffff`, inside a
  `32px`-top flex row with `gap: 12px`
- **AND** the restore line SHALL be **14 px**, `#56645a`, `margin: 28px 0 0`, with the control at
  **14 px / 600** in `#0f5f58`, underlined at `offset 3px`, hovering to `#14532d`

#### Scenario: The h1 is a focus target, not a tab stop

- **GIVEN** the rendered hero
- **WHEN** Tab is pressed from the top of the page
- **THEN** the `h1` SHALL **not** receive focus (`tabindex="-1"`) but SHALL be focusable
  programmatically after a dismiss
- **AND** its `:focus` outline SHALL be suppressed while `:focus-visible` draws the 2 px teal ring —
  a mouse dismiss SHALL NOT paint a ring around the headline

### Feature: Type and faces

#### Scenario: One variable face

- **GIVEN** the shipped stylesheet and the archive's `fonts/`
- **WHEN** the eight `woff2` are hashed
- **THEN** there SHALL be **2 distinct binaries** — latin **22,320 B** (`a0d054c4…`) and latin-ext
  **18,924 B** (`054c266f…`) — declared at **400 / 500 / 600 / 700**, i.e. **one variable cut**
- **AND** the app SHALL load it with a single Google Fonts `<link>`
  (`family=Space+Grotesk:wght@400..700`, verified **200**) and keep the fallback stack
  `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`
- **AND** the app SHALL **not** copy any font file into `public/`

#### Scenario: The scale

- **GIVEN** any viewport
- **WHEN** computed sizes are read
- **THEN** the bar's copy SHALL be **15 px**, the tag **12 px**, the nav **16 px**, the kicker **16 px**,
  the paragraph **18 px**, the demo line **14 px**
- **AND** the `h1` SHALL follow `clamp(36px, 7vw, 68px)` — **68** at ≥971.4, **63** at 900, **49** at
  700, **36** at ≤514.3 — never a fixed size

### Feature: Responsiveness and overflow

#### Scenario: The three wrap breaks

- **GIVEN** viewports 1001 and 1000
- **WHEN** the bar is measured
- **THEN** at 1001 it SHALL be **one row** and **57.75** tall; at 1000 the CTA SHALL wrap to a second
  row and the bar SHALL be **87.50** tall
- **AND** the copy SHALL reach **2 lines at 700** (bar **109.25**), **3 at 420** (**133.00**) and
  **4 at 320** (**154.75**)
- **AND** the ≤640 media step SHALL change the bar's padding to `12px 56px 14px 16px` and the close
  button's placement to `top: 10px; right: 8px`, without changing the gradient, the tag or the CTA

#### Scenario: No horizontal overflow

- **GIVEN** any width in 320, 340, 360, 375, 390, 400, 414, 420, 440, 460, 480, 520, 560, 600, 640, 660,
  700, 760, 820, 900, 1000, 1001, 1024, 1120, 1200, 1440
- **WHEN** `documentElement.scrollWidth` is compared with `clientWidth` after load
- **THEN** they SHALL be **equal at every width** (measured equal in all 26), and `scrollTo(300, 0)`
  SHALL leave `scrollX` at **0**
- **AND** the header's 3 links SHALL wrap at ≤400 rather than shrink below their text

### Feature: Semantics, links and repo integration

#### Scenario: Every fragment resolves

- **GIVEN** the shipped app
- **WHEN** every `href^="#"` is resolved against the document's ids
- **THEN** **every** fragment SHALL reach an existing element (the reference's **5 dead fragments**
  SHALL NOT be reproduced)
- **AND** nav items whose section does not exist SHALL be rendered as plain text or point at real ids
- **AND** the banner CTA and the hero button SHALL point at real sections (or be buttons), never at
  `#release-notes` / `#start`

#### Scenario: Accessible names and states

- **GIVEN** the rendered page
- **WHEN** the accessibility tree is read
- **THEN** the bar SHALL expose a labelled `aside` ("Announcement"), the nav a labelled `nav` ("Main")
- **AND** the close button SHALL be named **"Dismiss announcement"** and the restore control SHALL be a
  real `<button>` (Enter/Space both work), not a link
- **AND** the tag SHALL be announced as text ("New"), **not** as a heading, and the icons SHALL be
  `aria-hidden="true"`
- **AND** the app SHALL hold **2 buttons, 6 links, 3 icons, 0 forms, 0 inputs, 0 `<img>`**, and **no**
  `role="alert"` / `aria-live` on the persistent bar

#### Scenario: Repo wiring

- **GIVEN** the shipped app
- **WHEN** the repo is inspected
- **THEN** `apps/banderole` SHALL exist with package `@free-react-templates/banderole`,
  `public/CNAME` = `banderole.free.componentdock.com` and `"homepage"` =
  `https://banderole.free.componentdock.com`
- **AND** `TEMPLATES.md` SHALL gain the `Alert 04` row as the **fourth** entry of
  `## Bootstrap Alerts (12)`, inserted between `## Bootstrap Accordions` and `## Bootstrap Buttons`,
  using the accordion grammar `[colorlib] · [banderole] · ![preview]`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"

#### Scenario: Provenance stays out of the app

- **GIVEN** every file under `apps/banderole`
- **WHEN** they are grepped (case-insensitive) for the source site's name and for the source slug
- **THEN** there SHALL be **no** hit in code, comments, `index.html`, tests or CSS token notes
- **AND** the invented host brand ("Fernwood" in the reference) SHALL be renamed — e.g. **Quietquill** —
  along with its storage namespace (`banderole:announcement`), so no source string survives
- **AND** the provenance SHALL live only in this spec, `TEMPLATES.md` and the PR body

## Adapting to the repo (deltas — read before writing code)

| reference                                                        | port                                                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` — **10** guard rules            | **drop entirely.** Tailwind preflight already normalises; `all: revert` would undo the app's base styles |
| `--cl-alert04-*` custom properties + `.cl-alert04__*` class names | `@theme` tokens (`--color-banner-from`, `--color-banner-to`, `--color-banner-ink`, `--color-banner-lime`, `--color-ground`, `--color-ink`, `--color-muted`, `--color-accent`) + components `AnnouncementBar`, `SiteHeader`, `Hero` |
| bar state held by class + `hidden` + `localStorage` in one IIFE    | `useState` for visibility, `useState(() => …)` lazy read of the store, `useEffect` only for the `transitionend` listener; **no** `setState` inside an effect for a derived value (oxlint `react(set-state-in-effect)` is an error here) |
| `grid-template-rows: 1fr → 0fr` height animation                  | keep it (grid rows animate cleanly); if `transitionend` is unavailable (jsdom), derive the settled state in render rather than from an effect |
| `.is-closing` class toggling                                      | a `closing` state that adds the collapsing classes; the 500 ms timeout is the fallback **and** must be cleared on unmount |
| `data-cl-alert04-key="fernwood-offline-2026-10"`                  | `data-key="announcement-2026-10"` on the component, namespace `banderole:`              |
| 5 dead `#` fragments                                              | nav → real ids inside the hero (`#write`, `#plan`, `#journal` sections) or plain text; the banner CTA and the hero button point at a real section |
| always-visible "Show it again" line                               | render **only when dismissed** (defect 2); same copy shape, new wording, no source brand  |
| hand-rolled 28 / 16 / 18 px SVGs                                  | the mark stays a custom 28 px rounded square (a lucide glyph inside, `stroke 2`); arrow → `ArrowRight` at **16 px / 2.2**; cross → `X` at **18 px / 2.2**, all `aria-hidden` |
| `Space Grotesk` woff2 self-hosted (2 binaries)                    | Google Fonts `<link>` for `Space+Grotesk:wght@400..700`                                   |
| phantom `.cl-alert04-page`, dead `.cl-icon`, duplicated `.__button` rule | none of the three is ported; the button is one atomic class                           |
| screenshot's macOS window + grey desk + shadow                     | **never** adopted — the ground is `#f6f4ee` edge to edge, no frame                        |

Copy: paraphrase freely, but keep the *kind* of content — a writing-app announcement with a `NEW` tag,
a bold hook plus one sentence, a "read the release notes" CTA, a logo + three nav links and a hero of
kicker → headline → support sentence → single primary CTA.

## Verification checklist

- [ ] `apps/banderole` exists, package `@free-react-templates/banderole`, `public/CNAME` =
      `banderole.free.componentdock.com`, `"homepage"` = `https://banderole.free.componentdock.com`
- [ ] `npm run verify:app banderole` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-banderole --type spec` is valid
- [ ] measured at 1440: bar **1440 × 57.75**, msg **630.2 × 21.75** at (283.9, 18), tag **46.2 × 21.4**,
      CTA **222 × 33.75** at (934.1, 12), close **36 × 36** at right 14, header **1168 × 72** at x 136,
      hero **868 × 608.4**, `h1` **138.72** (2 lines, 68 px), paragraph **560 × 83.7**, button **183 × 47**
- [ ] bar background is `linear-gradient(100deg, #14532d, #0f766e)` and ink is `#f0fdf4`
- [ ] tag is the **only** lime fill (`#bef264`, ink `#14350f`, `+0.72px`, radius 999)
- [ ] bar height at 1440 is **57.75** from `12 + 33.75 + 12` (not a fixed height, not 48)
- [ ] wrap ladder: **one row at 1001 / two at 1000** (57.75 / 87.50); copy **2 lines at 700** (109.25),
      **3 at 420** (133.00), **4 at 320** (154.75); ≤640 padding step `12/56/14/16` and close at
      `top 10 / right 8`
- [ ] header **72** above 640, **64** at 640, **97** at ≤400 (nav on its own row)
- [ ] `h1` clamp **68** at ≥971.4, **63** at 900, **49** at 700, **36** at ≤514.3; hero padding-top
      **110** at ≥1100, **48** at ≤480
- [ ] dismiss: bar → **0 px**, key = `dismissed`, focus = `h1`, class removed, header at `y 0`
- [ ] reload with the key set: bar `hidden` on first layout, header `y 0`, **no** flash
- [ ] restore: key **deleted**, bar back to **57.75**, focus = banner CTA, control **hidden while the
      bar is up**
- [ ] `prefers-reduced-motion: reduce`: bar hidden instantly, `.is-closing` never applied, focus still
      moves
- [ ] no horizontal overflow at 320 / 340 / 360 / 375 / 390 / 400 / 414 / 420 / 440 / 460 / 480 / 520 /
      560 / 600 / 640 / 660 / 700 / 760 / 820 / 900 / 1000 / 1001 / 1024 / 1120 / 1200 / 1440
- [ ] **every** `href="#…"` resolves (the reference's 5 dead fragments are fixed) and there are exactly
      **2 buttons / 6 links / 3 icons / 0 forms / 0 inputs / 0 images**
- [ ] CTA contrast checked at its real position (**4.65**) and at the gradient's teal extreme
      (**4.17**) — the port SHALL keep it ≥ 4.5 against the whole gradient
- [ ] exactly **1 heading** (`h1`, `tabindex="-1"`), no `role="alert"` / `aria-live` on the bar,
      `aria-label="Dismiss announcement"` on the close button
- [ ] no occurrence of the source slug or the source site's name in any app file; the host brand is
      renamed (Quietquill) and the storage namespace is `banderole:`
- [ ] `TEMPLATES.md` carries the `Alert 04` row as the fourth entry of `## Bootstrap Alerts (12)`
- [ ] `curl -I https://banderole.free.componentdock.com` → 200, `ssl_verify_result=0`
