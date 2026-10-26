# Template: Punnet (Alert — a four-tile pastel delivery-status grid with tilted icon badges)

## Purpose

**A cream page, a centred greeting, and a 2 × 2 grid of four pastel tiles — each tile one status message
from a grocery-box subscription, each opening with a large squircle icon badge tilted four degrees off
square.** The tiles are mint, lilac, peach and rose; every tile holds the same four parts: a `64 × 64` badge
in the variant's mid-tone (the SVG inside stroked in the variant's dark ink), a bold `19px` title in that same
dark ink, a `15.5px` paragraph in one shared body colour, and a **white pill link** whose label is the
variant's dark message colour and which **fills solid on hover**. The pill has no border: its only edge is a
`2px` `rgba(0,0,0,.06)` bottom shadow.

The page is **entirely static**: **no `<script>`**, **no `<button>`**, **no `<input>`**, **no `<img>`** —
four anchors, four inline SVGs, and a `200 ms` lift on hover. The grid is `repeat(auto-fit,
minmax(min(100%, 380px), 1fr))` with a `20px` gap, so the two-column layout is a **content** threshold
(wrap `780` px ⇒ viewport `812`) and not a media query; the only `@media` width rule on the page is the
`480` padding step.

- **Source slug:** `alert-10`
- **ColorLib page:** https://colorlib.com/wp/template/alert-10/ — **HTTP 200, 113,341 B**, `<title>`
  `Alert V10 - Free Bootstrap Alerts 2026 - Colorlib`, `h1` **"Alert V10"**, meta description *"Friendly
  consumer-style alerts for a meal-kit delivery app, laid out in a two-column grid. Free download, no jQuery
  or plugins."*, `datePublished` **2026-09-25T14:53:51+00:00**, claims *"the download is 4 KB"* (measured
  **4,484 B = 4.38 KiB** ✓ — the smallest archive in the family by two orders of magnitude, because it ships
  no webfonts, no script and no images), and lists the behaviours verbatim: *"Four pastel variants set with
  custom properties"*, *"Large tilted icon badges with a soft inner shadow"*, *"Pill action links that fill on
  hover"*, *"Responsive auto-fit grid, one column on phones"*, *"Hover lift disabled for reduced motion"*.
  Its related grid links **seven** variants of the same family (the numbers either side of its own — not
  named here, so the slug census stays honest). This is the **design name the naming audit reads**: ColorLib
  "Alert V10".
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/alert-10/ — **HTTP 200,
  9,875 B**, `<title>` `Alert V10 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=9a9e3383`),
  **zero** snippet `<script>` elements (the ten scripts at runtime are the preview host's own — gtag
  `G-SEKJ4E9T4H`, the Cloudflare Zaraz loader, `/s9cc/`, the Cloudflare Insights beacon and six inline
  stubs — none authored by the snippet). The slug-only path `theme/alert-10/` is **404 (9 B)** and
  `theme/bb/alert-10/` is **404 (9 B)**: the same `bootstrap/` prefix ladder as the nine earlier variants of
  this family.
- **Design category:** Alert (**a consumer notification wall** — four *simultaneous, unrelated* messages of
  different severity, all permanent, none dismissible; the family's first *grid* and its first
  **multi-variant palette**, where colour carries the category, not the state).
  **Tenth** of the **`alert` snippet family** (**12** variants) in the **214 snippet variants** of
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/punnet`, package
  `@free-react-templates/punnet`, CNAME `punnet.free.componentdock.com`.

**What this design is, and what it is not.** The family so far: **noticeboard** a static severity ladder,
**allclear** a dismiss/restore list, **fieldguide** admonitions inside prose with no script, **banderole** a
page-level announcement bar, **snapback** a file list with two actionable bars, **beaconry** a dark
cluster-health panel of four simultaneous alerts, **proofmark** a form returned with an error summary,
**mayfly** a stack of self-dismissing toasts, **steadystate** a status page that never goes away. This one is
the family's **notification wall done as a consumer product**: four pastel cards in a grid, each a different
*subject* (a delivery in progress, a reward, an expiring card, a missed delivery) rather than four degrees of
one severity. Nothing is dismissible, nothing is dismissable, nothing counts down, and — unlike beaconry's
dark panel — the whole wall is light, rounded (`28px`) and playful.

**The seven things a careless port flattens** (each measured below):

- **The two-column layout is a `minmax()` fact, not a breakpoint.** `repeat(auto-fit, minmax(min(100%,
  380px), 1fr))` with `gap: 20px` needs **780** px of wrap width for two columns, so the seam is **viewport
  812 / 811** — and the card width then *keeps shrinking* with the viewport (`440` at 1440 down to `380` at
  812) instead of being fixed. A port that writes `md:grid-cols-2` moves the seam to 768 and changes every
  card height in between.
- **The badges are rotated, so their rect is not their box.** `.cl-alert10__badge` is `64 × 64` with
  `border-radius: 22` and `transform: rotate(-4deg)` — `4deg` clockwise on `nth-child(even)`. The measured
  bounding box is therefore **68.31 × 68.31**, and the SVG inside measures **32.02** for the same reason. Any
  layout assertion has to allow for the rotation, and the tilt alternates by **DOM order** (cards 1/3 lean
  left, 2/4 lean right) whether the grid is two columns or one.
- **One body-text colour serves all four tints.** `#3f3547` is a literal on `__text`, *not* a custom property:
  only `--cl-alert10-bg`, `--cl-alert10-badge`, `--cl-alert10-ink` and `--cl-alert10-btn` vary per variant.
  The tint therefore changes the contrast of the *title* (7.59–8.63) and the *pill label* (6.93–8.02) but not
  the paragraph.
- **The pill is a white lozenge with no border.** `background: #fff`, `border-radius: 999px`,
  `box-shadow: 0 2px 0 rgba(0,0,0,.06)` — against its pastel tile that is **1.12–1.19 : 1**, i.e. the shape
  is invisible and the label is the whole affordance (7.59–8.02 : 1). Hover *inverts* it: the fill becomes the
  variant's dark button colour and the label goes white.
- **The tiles lift on hover and they are not interactive.** `:hover { transform: translateY(-2px); box-shadow:
  0 16px 30px -22px rgba(43,36,51,.45) }` applies to the whole card, which has no handler and no `tabindex`;
  under `prefers-reduced-motion` both the transform and the transition are dropped.
- **A grid row stretches to its tallest tile, so a card's height is not its content's height.** At viewport
  `815` the rose title folds to two lines and the *peach* tile, whose own copy is unchanged, is stretched from
  `202` to `225.75`. Measure the body, never the card, when asserting a wrap.
- **The `480` padding step grows the content while the viewport shrinks.** At `481` the tile is `449` wide with
  `24px` padding and a `64px` badge (content **319**); at `480` it is `448` wide with `20px / 18px` padding and
  a `52px` badge (content **346**). Content gains **27** px as the viewport loses 1, so every text-fold runs
  *backwards* across that seam — the peach tile drops from 3 text lines to 2 and the whole grid gets shorter
  (`1012 → 933`) while the viewport narrows.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,906** rows, **3,162** lines on `07680959b`), so this
design comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `alert-10` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that
gap are all prepped. Families are worked **in family order, then variant number** — the card family (20) is
**closed**, the alert family is in progress (nine prepped, **none shipped yet**).

`TEMPLATES.md` has **no `## Bootstrap Alerts` section on main yet**, so this row is the **tenth** entry of a
section that does not exist yet. It belongs **between `## Bootstrap Accordions (20)` (line 639) and
`## Bootstrap Buttons (20)` (line 663)** — alphabetical, `Alerts` after `Accordions`:

```markdown
## Bootstrap Alerts (12)

- [x] **Alert 10** — [colorlib](https://colorlib.com/wp/template/alert-10/) · [punnet](https://punnet.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-10.jpg)
```

Row-grammar warning, measured on main `07680959b`: `## Bootstrap Accordions` (the section immediately above)
uses `[colorlib] · [app] · ![preview]` — preview **last**; `## Bootstrap Buttons` mixes both orders. Use the
**accordion** form (preview last) and re-read the surrounding lines **immediately before pushing** — two
implementer streams write this file.

**The name.** `punnet` — one lowercase word, the British name for the shallow basket soft fruit is sold in:
the container a grocery box arrives as, and the design's own subject matter (a produce subscription, four
pastel tiles). It matches the family's closed-single-word pattern (noticeboard, allclear, fieldguide,
banderole, snapback, beaconry, proofmark, mayfly, steadystate). Verified free on main `07680959b`:
`git grep -il punnet origin/main` → **0 files**; no `apps/punnet`; no `openspec/specs/template-punnet`; no
bold name in `TEMPLATES.md`; and the ColorLib catalogue URLs `colorlib.com/wp/template/punnet/`,
`preview.colorlib.com/theme/punnet/` and `preview.colorlib.com/theme/bootstrap/punnet/` all **404**.

Rejected on measurement: **`sprigly`** (0 files, free — kept as the runner-up), **`hamperset`** (0 files),
**`doorpost`** (0 files), **`parcelday`** (0 files) — all four are still free if a later variant needs one.
Do **not** reuse `noticeboard`, `allclear`, `fieldguide`, `banderole`, `snapback`, `beaconry`, `proofmark`,
`mayfly` or `steadystate`, nor the card family's twenty taken names.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 9,875 B** live (**4,114 B** inside the archive), `<title>` "Alert V10 \| Colorlib", `lang="en"`, **one** stylesheet, **0** snippet `<script>` elements (10 host scripts at runtime) |
| preview path      | **`theme/bootstrap/alert-10/`**; `theme/alert-10/` **404** (9 B), `theme/bb/alert-10/` **404** (9 B)                        |
| stylesheet        | `css/style.css?v=9a9e3383`, **5,151 B**, **245** lines, sha256 `a5f4ff1dcf514f000d079ffdc73b0dc920c29f1bef2bf0720fca3c026beee1c6` |
| script            | **none**. `/js/snippet.js` is a **hard 404 (9 B)**, `/js/main.js` is **404 (9 B)**, and the archive has **no `js/` directory** (defect 8) |
| archive           | `preview.colorlib.com/downloads/free/alert-10.zip`, **200, 4,484 B** (= 4.38 KiB ✓ the page's "4 KB"), sha256 `40b697c81172d1f7af2a145df63aabc21c645719f29c0759085ccd3ca2ef08d4`, **5 entries**: 2 dirs + `index.html` **4,114 B** `a0751c0a…2eeca8b` + `css/style.css` **5,151 B** `a5f4ff1d…beee1c6` + `README.md` **1,262 B** `797b6ce4…466dc51` |
| live ↔ archive    | CSS **identical sha256**; the two HTML files differ **only in the `<head>`** (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, the `?v=` query, and the host's **5,685 B inline `/cf-fonts/` block** standing in for the Google Fonts link) → **live preview verified; the archive is its un-versioned twin** |
| README            | lists `index.html`, `css/style.css`, **`js/snippet.js`**, **`fonts/`** and **`images/  its images`** — **there is no `js/`, no `fonts/` and no `images/`** in the 5-entry archive, and the document has no script at all (defect 8) |
| fonts (live)      | **20** `@font-face` in the host's inline block — Nunito over **5** binaries (latin / latin-ext / cyrillic / cyrillic-ext / vietnamese, each `wght/normal.woff2`), every subset served as all four declared weights ⇒ **one variable cut per subset**. The **sheet itself declares 0 `@font-face`** |
| fonts (archive)   | **no `woff2` at all** — the archive links `https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800&display=swap` (re-probed **200** with a browser UA), the family's **first** Google-Fonts-only variant |
| type proof        | canvas A/B at 32 px on `"Your Sprout Box updates"`: 400 → **359**, 500 → **359**, 600 → **361**, 700 → **372**, 800 → **383**, 900 → **383**; `system-ui` → **449.25** ⇒ Nunito really renders, **400 aliases to the 500 face** (no 400 is declared) and **900 clamps to 800** (defect 6) |
| classes           | **16** classes in the markup, **16** with at least one rule; **1** dead rule — `.cl-icon` (the **tenth consecutive** sibling in this family to carry it), and **1** phantom modifier — `.cl-alert10--mint` exists in the markup but has **no rule** (the base block already *is* mint) |
| custom properties | **4** on `.cl-alert10` (`--cl-alert10-bg`, `-badge`, `-ink`, `-btn`), each of the three modifiers (`--lilac`, `--peach`, `--rose`) redefines exactly those four |
| CSS anatomy       | **35** top-level rule blocks = **15** guard groups (`:where(html) … { all: revert }`, 22 `revert` declarations, ~60 lines of framework reset) + **20** style rules; **2** `@media` (`max-width: 480px`, `prefers-reduced-motion: reduce`), **0** `@keyframes`, **3** `transition` declarations, **0** gradients, **0** `@font-face`, **25** colour literals (23 distinct), **0** container queries |
| controls          | **4 `<a>`**, **0 `<button>`**, **0 `<input>`**, **0 `<img>`**, **0 `<form>`**, **4 `<svg>`** (all `32 × 32` viewBox rendered at `30`, all inside an `aria-hidden` badge) |
| headings          | **1 `h1`** (the page title) and nothing else — the four tile titles are `<p>` (defect 3)                       |
| landmarks         | `<main class="cl-alert10-demo">` (unlabelled) → `<section class="cl-alert10-wrap" aria-labelledby="cl-alert10-title">` → `<header class="cl-alert10-wrap__head">`; **no** `nav`, **no** `footer` |
| live regions      | **4** — three `role="status"` and one `role="alert"`, each wrapping **124–139** characters *including its link*, on a page that never changes after load (defect 2) |
| ids / fragments   | **1** id (`cl-alert10-title`); **4** fragments (`#track`, `#treat`, `#card`, `#reschedule`) and **none** resolves — measured: a click sets `location.hash` and leaves `scrollY` at **0** with no matching element (defect 1) |
| document height   | **900** at 1440 × 900 (content 541.5 < viewport, so the page does **not** scroll), **983** at 811 × 900, **1012** at 481, **933** at 480, **990** at 390, **1214** at 320 — vertical only, `scrollX` **0** and `scrollWidth === clientWidth` at every width |
| screenshot        | `https://colorlib.com/wp/wp-content/uploads/sites/2/alert-10.jpg`, **25,688 B**, **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens and converts it — and it is a **macOS browser mock-up** (traffic lights, drop shadow, a *filled* `preview.colorlib.com` URL pill) whose content matches the live render 1:1. The page's own `srcset` also offers `-1024x829`, `-768x622`, `-408x330`, `-353x286` and `-338x274` crops |

## Page arithmetic — a 900 px measure, one header, four 440 px tiles

Measured at 1440 × 900 with the real faces loaded (Nunito from the host block; the archive's CSS hashes
identically to live).

| box                          | x       | y       | w       | h        |
| ---------------------------- | ------- | ------- | ------- | -------- |
| `main.cl-alert10-demo`       | 0       | 0       | 1440    | **900**  |
| `section.cl-alert10-wrap`    | 270     | 88      | **900** | 541.5    |
| `header.__head`              | 270     | 88      | 900     | 89.5     |
| `p.__hello`                  | 270     | 88      | 900     | 25.5     |
| `h1#cl-alert10-title`        | 270     | 117.5   | 900     | 60       |
| `div.cl-alert10-grid`        | 270     | 205.5   | 900     | 424      |
| tile 1 `--mint` (role=status)| 270     | 205.5   | **440** | **202**  |
| tile 2 `--lilac` (status)    | 730     | 205.5   | 440     | 202      |
| tile 3 `--peach` (status)    | 270     | 427.5   | 440     | 202      |
| tile 4 `--rose` (**alert**)  | 730     | 427.5   | 440     | 202      |
| `span.__badge` (rotated rect)| 291.85  | 227.35  | 68.31   | 68.31    |
| `svg` inside the badge       | 309.99  | 245.49  | 32.02   | 32.02    |
| `p.__title`                  | 376     | 231.5   | **310** | 23.75    |
| `p.__text`                   | 376     | 259.25  | 310     | 69.75    |
| `a.__action` (pill)          | 376     | 343     | **133** | **40.5** |

Tile 1's height decomposes exactly: **202** = `24` (pad) + `2` (title margin-top) + `23.75` (title) + `4`
(title margin-bottom) + `69.75` (3 body lines) + `14` (text margin-bottom) + `40.5` (pill) + `24` (pad). The
body column is **310** = `440 − 2 × 24 − 64 (badge) − 18 (gap)`.

Header: `__hello` is **900 × 25.5** (`17 / 700`, centred, `#6b5f73`, `margin: 0 0 4px`) and the `h1` is
**900 × 60** (`40 / 800`, `clamp(28px, 5vw, 40px)`, `line-height: 1.5`, `letter-spacing: -.02em` = **−0.8**,
centred, `#2b2433`). The grid starts **28** px below the header (`margin-bottom: 28px`).

Pill widths at 1440 (label-dependent, one line each): **133** (*Track delivery*), **151** (*Choose my
treat*), **121** (*Update card*), **142** (*Pick a new slot*); all **40.5** tall
(`padding: 9px 18px` + `line-height: 22.5` at `15 / 800`).

Grid: `display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr)); gap: 20px` ⇒
at 1440 `cols = "440px 440px"`, `gap = 20px`. Tiles are `display: flex; gap: 18px; align-items: flex-start;
padding: 24px; border-radius: 28px`, so a tile's own height is its content's — **except** that a grid row
stretches to its tallest cell (measured at 815/812: tiles 3 and 4 both `225.75` while tile 3's content is
`202`).

## Design tokens — four pastel variants over one ink

| role                    | value                          | where                                                          |
| ----------------------- | ------------------------------ | -------------------------------------------------------------- |
| ground                  | `#fffdf8`                      | `body`                                                          |
| ink                     | `#2b2433`                      | the `h1`                                                        |
| muted                   | `#6b5f73`                      | `__hello` (the greeting line)                                   |
| ink body                | `#3f3547`                      | **`__text` in all four tiles** (a literal, not a variant token) |
| mint tile / badge       | `#e3f7ec` / `#9be3bd`          | `.cl-alert10` base block (`--cl-alert10-bg` / `-badge`)         |
| mint ink / button       | `#0f5132` / `#13603c`          | title + SVG stroke (`-ink`) / pill label + hover fill (`-btn`)   |
| lilac tile / badge      | `#efe8ff` / `#cdb8ff`          | `.cl-alert10--lilac`                                            |
| lilac ink / button      | `#4a2b91` / `#5b37b0`          | idem                                                            |
| peach tile / badge      | `#fff0e0` / `#ffc98f`          | `.cl-alert10--peach`                                            |
| peach ink / button      | `#7a3c06` / `#8e4608`          | idem                                                            |
| rose tile / badge       | `#ffe8ee` / `#ffb3c5`          | `.cl-alert10--rose` (the only `role="alert"` tile)               |
| rose ink / button       | `#8f1239` / `#a3163f`          | idem                                                            |
| pill fill               | `#ffffff`                      | `__action` (all four variants)                                  |
| pill edge               | `0 2px 0 rgba(0,0,0,.06)`      | the only boundary the pill has                                  |
| badge inner shadow      | `inset 0 -4px 0 rgba(0,0,0,.06)` + `0 6px 14px -8px var(--ink)` | `__badge`                                        |
| tile hover shadow       | `0 16px 30px -22px rgba(43,36,51,.45)` | `.cl-alert10:hover`                                     |
| icon fill in the truck  | `#fff`                         | the two wheel circles' `fill`                                   |

Radii: tile **28**, badge **22**, pill **999**; at **≤ 480** the tile drops to **24** and the badge to **18**.
There are **no gradients and no keyframes** anywhere in the sheet.

Type: **Nunito only** — `h1` `clamp(28px, 5vw, 40px) / 800`, `line-height: 1.5`, `letter-spacing: -.02em`;
`__hello` `17 / 700`; `__title` `19 / 800`, `line-height: 1.25` (**23.75**); `__text` `15.5 / 400` on the
page's `line-height: 1.5` (**23.25**); `__action` `15 / 800`, `line-height: 1.5` (**22.5**). The **only**
`font-weight` values in the sheet are **700** and **800** — everything else is the body default of `400`,
which **no face provides**, so the paragraph actually renders at the **500** instance (defect 6).

Fixed metrics: demo `box-sizing: border-box`, `min-height: 100vh`,
`padding: clamp(24px, 7vw, 88px) 16px` (**24** at ≤ 343, `7vw` between, **88** at ≥ 1258); wrap
`max-width: 900px; margin: 0 auto; color: #2b2433; line-height: 1.5`; `__head` `margin-bottom: 28px`,
`text-align: center`; `__hello` `margin: 0 0 4px`; `__title` (h1) `margin: 0`; grid `gap: 20px`; tile
`padding: 24px`, `gap: 18px`, `border-radius: 28px`, `transition: transform .2s ease, box-shadow .2s ease`;
badge `width/height: 64px`, `border-radius: 22px`, `display: grid; place-items: center`, `transform:
rotate(-4deg)`; `__title` `margin: 2px 0 4px`; `__text` `margin: 0 0 14px`; `__action` `padding: 9px 18px`,
`border-radius: 999px`, `box-shadow: 0 2px 0 rgba(0,0,0,.06)`, `transition: background-color .15s ease,
color .15s ease`, `:focus-visible { outline: 3px solid var(--btn); outline-offset: 2px }`.

At **≤ 480** the tile's `gap` steps `18 → 14`, its padding `24 → 20px 18px`, its radius `28 → 24`; the badge
shrinks `64 → 52` (rect `68.31 → 55.5`) with radius `22 → 18`; the SVG shrinks `30 → 26` (rect `32.02 →
27.75` by the same 4° rotation). Nothing else changes — the pill, the type scale and the 20 px grid gap are
constant.

## The width ladder (1 px sweep at the seams, 320 → 1440)

`wrap = min(900, vw − 32)`; two columns while `wrap ≥ 780` (**vw ≥ 812**), then `card = (wrap − 20) / 2`;
one column below that with `card = wrap`. Content `= card − 2 × padding − badge − gap` — that is
`card − 130` above 480 and `card − 102` at ≤ 480 (the padding **and** badge step together).

| vw   | cols | card      | content | tile heights (mint / lilac / peach / rose) | doc  | note                                                        |
| ---- | ---- | --------: | ------: | ------------------------------------------ | ---: | ----------------------------------------------------------- |
| 1440 | 2    | 440       | 310     | 202 / 202 / 202 / 202                       | 900  | demo padding at its 88 px clamp; page does not scroll        |
| 1024 | 2    | 440       | 310     | 202 / 202 / 202 / 202                       | 900  | wrap hits its 900 cap at vw 932                              |
| 932  | 2    | 440       | 310     | 202 / 202 / 202 / 202                       | 900  | last width where the wrap is capped                          |
| 900  | 2    | 424       | 294     | 202 / 202 / 202 / 202                       | 900  |                                                              |
| 820  | 2    | 384       | 254     | 202 / 202 / 202 / 202                       | 900  | every title still one line                                   |
| **815** | 2 | 381.5     | 251.5   | 202 / 202 / **225.75** / **225.75**         | 900  | rose title folds (needs 252 px); peach is **stretched**      |
| **812** | 2 | **380**   | 250     | 202 / 202 / 225.75 / 225.75                 | 900  | last two-column width; wrap 780 = 2 × 380 + 20                |
| **811** | **1** | **779** | 649     | 178.75 / 155.5 / 178.75 / 178.75            | 983  | one column; all titles back to one line                      |
| 768  | 1    | 736       | 606     | 178.75 / 155.5 / 178.75 / 178.75            | 974  | `h1` down to 38.4 px (5vw)                                   |
| 700  | 1    | 668       | 538     | 178.75 / 178.75 / 178.75 / 178.75           | 983  | lilac gains a second line                                    |
| 600  | 1    | 568       | 438     | 178.75 × 4                                  | 962  |                                                              |
| 500  | 1    | 468       | 338     | 202 / 178.75 / 178.75 / 202                 | 991  | mint + rose at 3 text lines                                  |
| **481** | 1 | 449       | 319     | 202 / 178.75 / 202 / 202                    | 1012 | last 24 px-padding / 64 px-badge width                       |
| **480** | 1 | **448**   | **346** | **170.75 / 170.75 / 170.75 / 194**          | 933  | padding 20/18 + badge 52 ⇒ content **grows** 27 px           |
| 470  | 1    | 438       | 336     | 194 / 170.75 / 194 / 194                    | 978  |                                                              |
| 410  | 1    | 378       | 276     | 194 × 4                                     | 993  | rose title back to one line (needs 252)                      |
| 390  | 1    | 358       | 256     | 194 × 4                                     | 990  | fourth line of peach text is the next fold                   |
| **385** | 1 | 353       | 251     | 194 / 194 / 194 / **217.75**                | 1013 | rose title folds again                                       |
| 380  | 1    | 348       | 246     | 194 / 194 / 194 / 217.75                    | 1012 |                                                              |
| **377** | 1 | 345       | 243     | **194** / 217.75 / 194 / 217.75             | 1036 | mint text back to 3 lines (needs 242)                        |
| **359** | 1 | 327       | 225     | 217.25 / 217.75 / **194** / 241             | 1080 | peach text drops to 3 lines at content 225                   |
| **357** | 1 | 325       | 223     | 217.25 / 217.75 / 217.25 / 241              | 1103 | `h1` back to one line (needs 325 of wrap)                    |
| **356** | 1 | 324       | 222     | 217.25 / 217.75 / 217.25 / 241              | 1145 | `h1` folds to **two lines**                                   |
| 340  | 1    | 308       | 206     | 217.25 / 217.75 / 217.25 / 241              | 1143 |                                                              |
| **336** | 1 | 304       | 202     | 217.25 / **241** / 217.25 / 241             | 1166 | lilac title folds                                             |
| **335** | 1 | 303       | 201     | 217.25 / 241 / **241** / 241                | 1190 | peach title folds                                             |
| **332** | 1 | 300       | 198     | **241** × 4                                 | 1214 | mint title folds — every tile now 241                         |
| 320  | 1    | 288       | 186     | 241 × 4                                     | 1214 | narrowest; nothing clips                                      |

Facts to keep: **the two-column seam is viewport 812/811** (`wrap 780`), *not* 768, and the card keeps
shrinking above it; **the 480 step runs backwards** (content 319 → 346 as the viewport loses 1 px, doc 1012 →
933); **the title-fold ladder is 252 → 202 → 201 → 198** in that order (rose, lilac, peach, mint), so the
heights are non-monotonic in every band; **a grid row stretches**, so at 815/812 the peach tile measures
`225.75` with `202` of content; and there is **no horizontal overflow at any width** — `scrollX` stays **0**
and `documentElement.scrollWidth === clientWidth` at 320 / 326 / 330 / 335 / 340 / 352 / 356 / 357 / 359 / 375 /
377 / 380 / 385 / 390 / 400 / 410 / 430 / 470 / 480 / 481 / 500 / 600 / 700 / 768 / 800 / 811 / 812 / 813 / 815 /
820 / 900 / 932 / 1024 / 1280 / 1440.

## Contrast (WCAG 2.x, computed from the shipped hexes)

| pair                                             | ratio       | verdict |
| ------------------------------------------------ | ----------: | ------- |
| `h1` `#2b2433` on ground `#fffdf8`                | **14.73**   | AAA     |
| greeting `#6b5f73` on ground                      | **5.89**    | AA      |
| mint title `#0f5132` on tile `#e3f7ec`            | **8.37**    | AAA     |
| mint body `#3f3547` on tile                       | **10.37**   | AAA     |
| mint pill `#13603c` on `#fff` / white on the hover fill | **7.59 / 7.59** | AAA |
| mint icon `#0f5132` on badge `#9be3bd`            | **6.29**    | AA      |
| lilac title `#4a2b91` on tile `#efe8ff`           | **8.63**    | AAA     |
| lilac body on tile                                | **9.75**    | AAA     |
| lilac pill `#5b37b0` on `#fff` / inverted          | **8.02**    | AAA     |
| lilac icon `#4a2b91` on badge `#cdb8ff`           | **5.82**    | AA      |
| peach title `#7a3c06` on tile `#fff0e0`           | **7.59**    | AAA     |
| peach body on tile                                | **10.37**   | AAA     |
| peach pill `#8e4608` on `#fff` / inverted          | **6.93**    | AA/AAA  |
| peach icon `#7a3c06` on badge `#ffc98f`           | **5.65**    | AA      |
| rose title `#8f1239` on tile `#ffe8ee`            | **7.79**    | AAA     |
| rose body on tile                                 | **9.95**    | AAA     |
| rose pill `#a3163f` on `#fff` / inverted           | **7.65**    | AAA     |
| rose icon `#8f1239` on badge `#ffb3c5`            | **5.41**    | AA      |
| focus ring `--btn` on its own tile                | **6.79 / 6.74 / 6.20 / 6.57** | passes 1.4.11 |
| **white pill `#fff` on tile (non-text)**          | **1.12 / 1.19 / 1.12 / 1.16** | **below 3 : 1** |
| badge `--badge` on tile (non-text)                | **1.33 / 1.48 / 1.34 / 1.44** | decorative |

**Zero failing text pairs** — the second variant in the family to hold that, and the tightest is the rose icon
glyph on its own badge at **5.41**. The two sub-3 : 1 readings are **boundaries**, not text: the white pill
against its tile (`1.16` on rose) and the badge against its tile. The pill's *label* is 6.93–8.02 : 1 and is
the only thing identifying it, so 1.4.11 is met by the label, not by the shape. **Port fix:** add a
`1px solid color-mix(in srgb, var(--btn) 28%, transparent)` edge to the pill (≥ 3 : 1 on all four tints) so
the control reads as a control before it is hovered; keep the badge edge decorative (`aria-hidden` glyph
carries the meaning).

## Defects found in the reference (fix in the port; do not reproduce)

1. **All four links are dead.** `#track`, `#treat`, `#card`, `#reschedule` — the document's only `id` is
   `cl-alert10-title`. Measured: clicking *Track delivery* sets `location.hash = "#track"`, `document
   .getElementById("track")` is `null`, `scrollY` stays **0**. Every tile therefore has an affordance with no
   destination.
2. **Four live regions on a static page.** Three `role="status"` tiles and one `role="alert"` tile, each
   wrapping **124–139** characters *and a link*, on a page whose content never changes. `role="alert"` is
   assertive, so the rose tile is announced over anything else speaking when the page loads, and a screen
   reader re-reads a whole 202 px tile to reach its link. A wall of permanent messages needs **no** live
   region at all.
3. **The tile titles are paragraphs.** One `h1` and four `<p class="cl-alert10__title">` — no heading per
   message, so the page cannot be navigated by heading and each tile's title is not part of its link's
   context.
4. **Hover lift on non-interactive containers.** `.cl-alert10:hover` raises the tile `2px` and casts a
   30 px shadow, but the tile has no handler, no `tabindex` and no role: the affordance promises a click that
   nothing answers.
5. **`.cl-icon` is dead again — tenth variant in a row** — and its mirror image is present too:
   `.cl-alert10--mint` is a **phantom** modifier with no rule of its own (the base block *is* mint), so
   recolouring "the mint in the markup" and "the mint in the sheet" are two different edits.
6. **The body text asks for a weight nobody ships.** The archive links Nunito `500;600;700;800`; the sheet
   sets `font-weight: 400` on `__text` (the body default). No 400 face exists, so the browser serves the 500
   instance — canvas A/B at 32 px reads **359** at both 400 and 500 — and `900` clamps to `800` (**383** at
   both). What an implementer measures and what the CSS says disagree by one weight step.
7. **The pill has no visible boundary** (`1.12–1.19 : 1` against its tile, a `2px` `6 %` bottom shadow and no
   border) — see the contrast note.
8. **The README documents three directories that do not exist.** It lists `js/snippet.js`, `fonts/` and
   `images/`; the archive has **5 entries** (two dirs, `index.html`, `css/style.css`, `README.md`), no script,
   no webfont and no image. Third variant in a row with a README that describes a different snippet.
9. **Three `--cl-alert10-btn` declarations carry a stray newline before the semicolon** (`#5b37b0\n;`,
   `#8e4608\n;`, `#a3163f\n;` in the modifiers only). Valid CSS, sloppy source — copy the values, not the
   formatting.
10. **The screenshot is a macOS mock-up.** Traffic lights, a desk, a drop shadow and a *filled*
    `preview.colorlib.com` URL pill — none of it is in the render, whose ground is `#fffdf8` edge to edge.

## Requirements

### Feature: The page skeleton and its auto-fit grid

#### Scenario: One cream ground, one header, four tiles, no chrome

- **GIVEN** the `punnet` app at 1440 × 900
- **WHEN** the document is read top to bottom
- **THEN** the order SHALL be: **`<main>` wrapper → `<header>` (greeting line + `h1`) → the four-tile grid →
  the footer**
- **AND** the page SHALL contain **no nav, no hero, no imagery, no form, no buttons** — the only surfaces are
  the four pastel tiles on `#fffdf8`
- **AND** the wrapper SHALL be `box-sizing: border-box`, `min-height: 100vh`,
  `padding: clamp(24px, 7vw, 88px) 16px` (**24** at ≤ 343, `7vw` between, **88** at ≥ 1258) with
  `background: #fffdf8`

#### Scenario: The 900 px measure

- **GIVEN** the port at 1440 and at 932 / 931
- **WHEN** the grid column is measured
- **THEN** it SHALL be `max-width: 900px; margin: 0 auto` and **900** wide at (270, 88) at 1440, with
  `color: #2b2433` and `line-height: 1.5` (**24**)
- **AND** at **≤ 931** it SHALL be `vw − 32` (736 at 768, 358 at 390, 288 at 320) with **no** breakpoint of
  its own — the only width breakpoint on the page is the tile's **480** step
- **AND** the page SHALL hold exactly **one `h1`** and **no `h2`–`h6`** in the reference, with the port adding
  one `h2` per tile title (defect 3)

#### Scenario: The two-column seam is a `minmax()` fact, not a breakpoint

- **GIVEN** a 1 px sweep across the seam
- **WHEN** `grid-template-columns` is read
- **THEN** the grid SHALL be `repeat(auto-fit, minmax(min(100%, 380px), 1fr))` with `gap: 20px` and SHALL hold
  **two columns at vw ≥ 812** (`wrap 780` = 2 × 380 + 20) and **one column at 811** and below
- **AND** the card width SHALL keep shrinking with the viewport above the seam — **440** at 1440 (the wrap
  cap), **424** at 900, **380** at 812 — so the seam SHALL **not** be implemented as `md:grid-cols-2`
  (that would move it to 768 and change every height in between)

### Feature: The header

#### Scenario: Greeting line and page title

- **GIVEN** the header at 1440
- **WHEN** it is measured
- **THEN** it SHALL be `text-align: center`, `margin-bottom: 28px`, **900 × 89.5**, holding
  **two** stacked paragraphs' worth of type
- **AND** the greeting SHALL be **900 × 25.5**, `17 / 700` in `#6b5f73`, `margin: 0 0 4px`, and SHALL end in
  a **decorative** emoji in an `aria-hidden` span (the reference uses U+1F33F)
- **AND** the `h1` SHALL be **900 × 60** at (270, 117.5), `clamp(28px, 5vw, 40px) / 800`,
  `line-height: 1.5`, `letter-spacing: -.02em` (**−0.8** at 40), `margin: 0`, `#2b2433`, and **one line** at
  1440

#### Scenario: The title folds to two lines at vw 356

- **GIVEN** a 1 px sweep from 320 to 400
- **WHEN** the `h1`'s box is measured
- **THEN** it SHALL be **42** tall (one line at the 28 px floor) at **357** and above, and **84** (two lines)
  at **356** and below
- **AND** its font size SHALL be `40` at ≥ 800, `5vw` from 560 to 799 (`38.4` at 768), and `28` at ≤ 560 —
  three knees that a `text-4xl` utility does not reproduce

### Feature: One alert tile and its four parts

#### Scenario: Tile box

- **GIVEN** a tile at 1440
- **WHEN** its box is measured
- **THEN** it SHALL be **440 × 202** at (270, 205.5) with `display: flex; gap: 18px;
  align-items: flex-start; padding: 24px; border-radius: 28px`, background `var(--bg)` and
  `transition: transform .2s ease, box-shadow .2s ease`
- **AND** its body column SHALL be **310** wide = `440 − 2 × 24 − 64 − 18`, and its height SHALL decompose as
  `24 + 2 + 23.75 + 4 + 69.75 + 14 + 40.5 + 24 = 202`
- **AND** `box-sizing: border-box` SHALL apply to every descendant of the wrap (the reference sets it on
  `.cl-alert10-wrap *`), so `24` is total padding on each side and `64` the badge's outer box

#### Scenario: The tilted badge is 64 px rotated, so it measures 68.31

- **GIVEN** the badge at 1440
- **WHEN** its box, border and transform are read
- **THEN** it SHALL be `64 × 64`, `border-radius: 22`, `display: grid; place-items: center`,
  `background: var(--badge)`, `color: var(--ink)`, `flex: none`
- **AND** its `getBoundingClientRect()` SHALL read **68.31 × 68.31** at (291.85, 227.35) because of
  `transform: rotate(-4deg)` (`matrix(0.997564, -0.0697565, 0.0697565, 0.997564, 0, 0)`), and
  `nth-child(even)` SHALL tilt the other way (`+4deg`, matrix sign flipped) — so cards 1 and 3 lean left and
  2 and 4 lean right at **every** width, two columns or one
- **AND** its shadow SHALL be `inset 0 -4px 0 rgba(0,0,0,.06), 0 6px 14px -8px var(--ink)` — an inset bottom
  edge plus a tone-coloured drop shadow, both of which are lost if the badge is drawn as a flat circle

#### Scenario: The four glyphs are inline SVGs, 30 px inside a 32 viewBox

- **GIVEN** the badge's SVG
- **WHEN** it is measured
- **THEN** it SHALL be `viewBox="0 0 32 32"`, `width="30" height="30"`, `focusable="false"`,
  `fill="none"`, `stroke="currentColor"`, `stroke-width="2.2"`, and SHALL read **32.02** in the rect for the
  same 4° reason
- **AND** the four shapes SHALL be a **delivery truck** (body rect + cab path + two `r="2.6"` wheels with
  `fill="#fff"`), a **gift box** (rect + lid + ribbon + two loops), a **payment card** (rounded rect + a
  full-width stripe + a short line) and a **circled exclamation** (circle + a stem and a dot)
- **AND** they SHALL be re-drawn as `lucide-react` icons (`Truck`, `Gift`, `CreditCard`, `CircleAlert`) at
  `30px` with `strokeWidth={2.2}` — or kept as inline SVG if the wheel `fill` is to survive
- **AND** at **≤ 480** the SVG SHALL shrink to **26 × 26** while the viewBox stays `32`

#### Scenario: Title, paragraph and the shared body colour

- **GIVEN** the tile's text column at 1440
- **WHEN** it is measured
- **THEN** the title SHALL be **310 × 23.75**, `19 / 800`, `line-height: 1.25`, `margin: 2px 0 4px`,
  `color: var(--ink)` — **one line** at 1440 in all four tiles
- **AND** the paragraph SHALL be **310 × 69.75** in the mint tile (`3 × 23.25`), `15.5 / 400`,
  `line-height: 1.5`, `margin: 0 0 14px`, and its colour SHALL be the **single literal `#3f3547` in every
  tile** — the variant tokens do **not** reach it
- **AND** the paragraph's line count SHALL match the reference's per-tile lengths at 1440: **3 / 2 / 3 / 3**
  lines for mint / lilac / peach / rose (**69.75 / 46.5 / 69.75 / 69.75**), which is what keeps the four
  tiles the same height

#### Scenario: The pill is a white lozenge that inverts on hover

- **GIVEN** the pill at 1440
- **WHEN** it is measured and hovered
- **THEN** it SHALL be `inline-block`, `padding: 9px 18px`, `border-radius: 999px`, `background: #fff`,
  `box-shadow: 0 2px 0 rgba(0,0,0,.06)`, `color: var(--btn)`, `15 / 800`, `text-decoration: none`,
  **40.5** tall and **121–151** wide depending on the label (measured **133 / 151 / 121 / 142**)
- **AND** on `:hover` the fill SHALL become `var(--btn)` and the label `#fff` over
  `transition: background-color .15s ease, color .15s ease` — measured `rgb(255,255,255)`/`rgb(19,96,60)`
  before, `rgb(19,96,60)`/`rgb(255,255,255)` after
- **AND** it SHALL carry a **1px `color-mix(in srgb, var(--btn) 28%, transparent)` border** in the port — the
  reference's edge measures **1.12–1.19 : 1** against its tile, so the shape is otherwise invisible until it
  is hovered (defect 7)
- **AND** the pill SHALL be a real destination (a section id or a route), never `href="#"` (defect 1)

### Feature: The four variants and the tone tokens

#### Scenario: Four custom properties, three overrides

- **GIVEN** the stylesheet
- **WHEN** the variant blocks are read
- **THEN** `.cl-alert10` SHALL declare exactly four custom properties — `--bg: #e3f7ec`, `--badge: #9be3bd`,
  `--ink: #0f5132`, `--btn: #13603c` — and each of `--lilac`, `--peach`, `--rose` SHALL redefine **those four
  and nothing else**
- **AND** the four consumers SHALL be: tile `background: var(--bg)`, badge `background: var(--badge)`,
  badge `color` + title `color` + SVG `stroke` from `var(--ink)`, pill `color` + hover `background` +
  focus outline from `var(--btn)`
- **AND** the port SHALL express the four variants as **one component with a `tone` prop** (`mint | lilac |
  peach | rose`) backed by `@theme` tokens, not four duplicated blocks

#### Scenario: Colour is the category, and the words still say it

- **GIVEN** any tile
- **WHEN** its severity is considered
- **THEN** the four tints SHALL read as **categories** (delivery, reward, billing, failure), not as a
  severity ramp — and the reference makes **one** of them `role="alert"` (the failure) and **three**
  `role="status"`
- **AND** the port SHALL convey each tile's kind in **text** (its title) as well as in colour, and SHALL NOT
  rely on the tint alone to distinguish "problem" from "informational"
- **AND** the port SHALL drop the live-region roles from permanent tiles entirely (`role="alert"` on a
  tile that is present at load is an assertive announcement of static copy — defect 2)

### Feature: Motion, keyboard and focus

#### Scenario: The lift is 2 px and it belongs to the tile

- **GIVEN** a tile at 1440
- **WHEN** it is hovered and the transition is allowed to settle (≥ 200 ms)
- **THEN** `transform` SHALL read `matrix(1, 0, 0, 1, 0, -2)` and `box-shadow`
  `rgba(43,36,51,0.45) 0 16px 30px -22px`; before the hover both SHALL be `none`
- **AND** the lift SHALL be **decoration only** — the tile SHALL NOT become a link or a button, and the pill
  inside it SHALL remain the single interactive element (defect 4: do not reproduce a hover that promises a
  click)
- **AND** under `prefers-reduced-motion: reduce` the tile SHALL read `transition: none` and
  `transform: none` on hover (measured; the media query exists in the sheet)

#### Scenario: Focus is a 3 px ring in the variant's own button colour

- **GIVEN** keyboard traversal from the top of the document
- **WHEN** `Tab` is pressed
- **THEN** focus SHALL reach the four pills **in DOM order** (mint, lilac, peach, rose) and nothing else —
  measured: four `Tab` presses, four links, then a fifth press lands on the document body because the page has
  no other focusable element
- **AND** each focused pill SHALL show `outline: 3px solid var(--btn); outline-offset: 2px`
  (**6.79 / 6.74 / 6.20 / 6.57** : 1 against its own tile) and `:focus-visible` SHALL be the trigger, so a
  mouse click does not paint the ring
- **AND** the ring SHALL NOT be clipped — `outline-offset: 2px` puts it on the tile, and the pill is not
  inside an `overflow: hidden` box

### Feature: Type and faces

#### Scenario: One face, four weights, and the 400 that does not exist

- **GIVEN** the port
- **WHEN** the font stack is read
- **THEN** the page SHALL use **Nunito only**, loaded by **one** `<link>`:
  `https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800&display=swap` — the archive's own
  URL, re-probed **200** with a browser UA (**not** the `css2?family=Nunito:500,600,700,800` axis form, which
  also answers 200 but is not what the source ships)
- **AND** the port SHALL NOT request **400** — the reference ships none, so its `15.5px` body text renders at
  the **500** instance (canvas A/B: 359 at both 400 and 500) while `900` clamps to `800` (383 at both); the
  port SHALL set the paragraph to `500` explicitly so the CSS and the render agree (defect 6)
- **AND** the measured advance widths at 32 px SHALL be **359 / 361 / 372 / 383** for 500 / 600 / 700 / 800 —
  four real instances of one variable cut, not four static files
- **AND** the type scale SHALL be exactly `17 / 700` (greeting), `clamp(28px, 5vw, 40px) / 800` (`h1`),
  `19 / 800` (tile title, `1.25`), `15.5 / 500` (paragraph, `1.5`), `15 / 800` (pill) — the sheet's only
  declared weights are **700** and **800**

#### Scenario: Tokens live in `@theme`

- **GIVEN** the Tailwind 4 build
- **WHEN** the theme block is read
- **THEN** it SHALL carry the roles of the token table — `ground #fffdf8`, `ink #2b2433`, `muted #6b5f73`,
  `body #3f3547`, and per variant `mint/lilac/peach/rose` × `bg/badge/ink/btn` — so the tile is
  `bg-[--tone-bg]`-style token work and **not** four hard-coded class sets
- **AND** the radii SHALL be tokens or arbitrary values that match exactly: tile **28** (**24** ≤ 480), badge
  **22** (**18** ≤ 480), pill **999**

### Feature: Responsiveness and overflow

#### Scenario: The 480 step runs backwards

- **GIVEN** a 1 px sweep across 481 / 480
- **WHEN** the tile is measured
- **THEN** at **481** it SHALL be **449** wide with `padding: 24px`, `gap: 18px`, badge **64** (rect 68.31),
  radius **28**, content **319**, height **202 / 178.75 / 202 / 202**
- **AND** at **480** it SHALL be **448** wide with `padding: 20px 18px`, `gap: 14px`, badge **52**
  (rect 55.5), radius **24**, content **346**, height **170.75 / 170.75 / 170.75 / 194** — content **grows**
  27 px while the viewport loses 1, and the document height drops **1012 → 933**
- **AND** the SVG SHALL step `30 → 26` with the badge, and **nothing else** SHALL step — the pill, the type
  scale and the 20 px grid gap are constant across the seam

#### Scenario: The title-fold ladder

- **GIVEN** single-column widths from 320 to 470
- **WHEN** each tile title's box is measured
- **THEN** the titles SHALL fold in the order **rose at content ≤ 252** (vw 385), **lilac at ≤ 202**
  (vw 336), **peach at ≤ 201** (vw 335), **mint at ≤ 198** (vw 332) — a ladder, not a single breakpoint
- **AND** each fold SHALL add exactly **23.75** px to that tile and, in a two-column row, to its **row peer**
  as well (measured at 815: rose folds, peach stretches `202 → 225.75`)
- **AND** at **320** all four tiles SHALL be **241** (`47.5` title + `93` text + pill + padding) and the
  document SHALL be **1214** px tall

#### Scenario: No horizontal overflow, ever

- **GIVEN** the port at every width in the ladder
- **WHEN** `scrollWidth`, `clientWidth` and `scrollX` are read
- **THEN** `documentElement.scrollWidth` SHALL equal `clientWidth` and `window.scrollTo(200, 0)` SHALL leave
  `scrollX` at **0** at 320 / 326 / 330 / 335 / 340 / 352 / 356 / 357 / 359 / 375 / 377 / 380 / 385 / 390 /
  400 / 410 / 430 / 470 / 480 / 481 / 500 / 600 / 700 / 768 / 800 / 811 / 812 / 813 / 815 / 820 / 900 / 932 /
  1024 / 1280 / 1440
- **AND** at **≥ 812** and at 1440 the document SHALL be **900** — exactly the viewport, because
  `min-height: 100vh` and `541.5` px of content: the page does not scroll at desktop sizes
- **AND** vertical scrolling SHALL only begin below ≈ 812 (`983` at 811) and the badges SHALL never clip at
  any width

### Feature: Repo integration

#### Scenario: Wiring

- **GIVEN** `apps/punnet`
- **WHEN** the workspace is inspected
- **THEN** the package SHALL be `@free-react-templates/punnet`, `public/CNAME` SHALL contain
  `punnet.free.componentdock.com`, and `"homepage"` SHALL be `https://punnet.free.componentdock.com`
- **AND** the app SHALL reuse `packages/ui` where a component already exists and SHALL NOT reference
  ColorLib in any app file (comments included) nor carry the reference's invented copy
- **AND** `npm run verify:app punnet` SHALL pass (typecheck + lint + **100 %** coverage + build)

#### Scenario: The footer is the port's only chrome

- **GIVEN** the shipped page
- **WHEN** the footer is read
- **THEN** it SHALL be a real `<footer>` carrying the **Component Dock** link
  (`https://www.componentdock.com/`, "Component Dock") — the reference has **no footer and no nav** at all
- **AND** the page's anchor count SHALL be the four pills **plus** that attribution link (**5**), and every
  one of them SHALL resolve
- **AND** the four dead reference fragments SHALL NOT appear in the port

#### Scenario: The `TEMPLATES.md` row

- **GIVEN** `TEMPLATES.md` on main (`07680959b`, **0** `- [ ]`, **2906** `[x]`, 3,162 lines)
- **WHEN** the row is added
- **THEN** it SHALL be the **tenth** entry of `## Bootstrap Alerts (12)`, inserted between
  `## Bootstrap Accordions (20)` (line 639) and `## Bootstrap Buttons (20)` (line 663)
- **AND** the grammar SHALL be the accordion form — `[colorlib] · [app] · ![preview]`, preview **last** —
  matching the section above it
- **AND** the row SHALL read
  `- [x] **Alert 10** — [colorlib](https://colorlib.com/wp/template/alert-10/) · [punnet](https://punnet.free.componentdock.com) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/alert-10.jpg)`
  and SHALL only go `[x]` with the URL once the deploy is live

## Adapting to the repo (deltas — read before writing code)

| reference                                                              | port                                                                                                          |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `:where(html) … { all: revert }` — 15 guard groups, 22 `revert`s        | **drop entirely** — Tailwind preflight already normalises                                                      |
| four `--cl-alert10-*` custom props + `.cl-alert10__*` BEM names          | `@theme` role tokens + components `PageHeader`, `AlertWall`, `AlertTile`, `TileBadge`, `TileAction`, `SiteFooter` |
| `repeat(auto-fit, minmax(min(100%, 380px), 1fr))` + `gap: 20px`          | `grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-5` — **keep the `minmax`**, do not use `md:grid-cols-2` |
| `transform: rotate(-4deg)` / `nth-child(even) { rotate(4deg) }`          | `-rotate-4` on odd tiles, `rotate-4` on even (`[&:nth-child(even)]:rotate-4` or an `index % 2` prop)           |
| `clamp(28px, 5vw, 40px)` on the `h1`                                     | `text-[clamp(28px,5vw,40px)] leading-[1.5] tracking-[-.02em]`                                                  |
| 20 `@font-face` over 5 binaries (host) / 0 in the sheet                  | one Google Fonts `<link>`: `Nunito:wght@500;600;700;800&display=swap` — no 400 request, body text `500`        |
| `font-weight: 400` on `__text` with no 400 face                          | `font-medium` (**500**) — that is what the reference renders (defect 6)                                        |
| `#fff` pill, `2px` `6 %` shadow, no border                               | keep the white lozenge **and** add a `1px color-mix(var(--btn) 28%, transparent)` edge (defect 7)              |
| `role="status"` ×3 + `role="alert"` on permanent tiles                   | **no live region** on the wall; the tiles are static content (defect 2)                                        |
| `<p class="cl-alert10__title">` per tile                                 | `h2` per tile, and the pill inside the tile SHALL carry an `aria-label`/context that names the tile           |
| four dead fragments (`#track`, `#treat`, `#card`, `#reschedule`)         | real destinations (section ids or routes) — every anchor resolves (defect 1)                                   |
| `.cl-icon` dead rule, `.cl-alert10--mint` phantom modifier               | neither ported (defect 5)                                                                                      |
| inline SVG truck / gift / card / circle-alert at 30 px                   | `lucide-react` `Truck` / `Gift` / `CreditCard` / `CircleAlert` at `30`, `strokeWidth={2.2}` — or inline SVG if the wheel `fill="#fff"` matters |
| hover lift on a non-interactive tile                                     | keep the lift as **decoration** on the tile, and make the **pill** the only tab stop and the only click target  |
| no `footer`, no `nav`, one `h1` and four paragraphs                      | real `<footer>` + Component Dock link, one `h2` per tile, `aria-labelledby` from the wall to the `h1`          |
| screenshot's macOS window, desk, drop shadow, URL pill                   | **never** adopted — the ground is `#fffdf8` edge to edge                                                       |

Copy: keep the *kind* of content — an invented **grocery/produce subscription**, a greeting line naming a
customer, and **four** tiles of different *kinds*: a delivery in progress (titled ~24 characters, **3** body
lines at `15.5 px`), a reward/unlock (~27 characters, **2** lines), an expiring payment method (~22
characters, **3** lines), a missed delivery with a deadline (~27 characters, **3** lines), each ending in a
**two-to-three-word pill label** (14 / 15 / 11 / 14 characters in the reference). The line and character
counts matter: they are what make the four tiles `202` px tall and keep the 815/812 stretch invisible. The
reference's own invented names ("Sprout Box", "Ines", "Rui", "Mastercard ending in 0932", "20:00") SHALL NOT
appear in the port.

## Verification checklist

- [ ] `apps/punnet` exists, package `@free-react-templates/punnet`, `public/CNAME` =
      `punnet.free.componentdock.com`, `"homepage"` = `https://punnet.free.componentdock.com`
- [ ] `npm run verify:app punnet` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-punnet --type spec` is valid
- [ ] measured at 1440: wrap **900** at (270, 88); header **89.5**; greeting **25.5**; `h1` **60**; grid
      **900 × 424** at y **205.5** with `cols 440px 440px`; tiles **440 × 202**; badge rect **68.31**;
      SVG rect **32.02**; body column **310**; title **23.75**; text **69.75 / 46.5 / 69.75 / 69.75**;
      pills **133 / 151 / 121 / 142 × 40.5**; document **900**
- [ ] the tokens are exact — ground `#fffdf8`, ink `#2b2433`, muted `#6b5f73`, body `#3f3547`; mint
      `#e3f7ec`/`#9be3bd`/`#0f5132`/`#13603c`; lilac `#efe8ff`/`#cdb8ff`/`#4a2b91`/`#5b37b0`; peach
      `#fff0e0`/`#ffc98f`/`#7a3c06`/`#8e4608`; rose `#ffe8ee`/`#ffb3c5`/`#8f1239`/`#a3163f`; pill `#fff`
- [ ] the grid is `repeat(auto-fit, minmax(min(100%, 380px), 1fr))` with `gap: 20px` — two columns at
      **≥ 812** and one at **811**, card widths **440 / 424 / 380** at 1440 / 900 / 812
- [ ] the badges are **64 × 64** with `border-radius: 22` and `rotate(∓4deg)`, rect **68.31**, inset shadow
      `0 -4px 0 rgba(0,0,0,.06)` plus `0 6px 14px -8px var(--ink)`, SVG **30** inside a `32` viewBox
- [ ] the pill is `#fff`, `border-radius: 999px`, `padding: 9px 18px`, **40.5** tall, and **inverts** to
      `var(--btn)` / white on hover over **150 ms**; it carries the added **1 px** tone edge (≥ 3 : 1)
- [ ] hover raises the tile **2 px** with `0 16px 30px -22px rgba(43,36,51,.45)` and both are removed under
      `prefers-reduced-motion`; the tile itself is not focusable and not clickable
- [ ] keyboard: **four** pill tab stops in DOM order, `outline: 3px solid var(--btn)` at `offset: 2px`, no
      ring on mouse click, nothing clipped
- [ ] no live regions on the wall; one `h1` **and** one `h2` per tile; every anchor resolves (four pills +
      Component Dock = **5**); the Component Dock link is in a real `<footer>`
- [ ] width ladder verified: content **319 @ 481 → 346 @ 480** (the backwards step), document **933 @ 480**
      vs **1012 @ 481**, tiles **170.75 × 3 + 194** at 480 and **202 / 178.75 / 202 / 202** at 481;
      title folds at content **252 / 202 / 201 / 198**; all four tiles **241** at 320 with document **1214**
- [ ] no horizontal overflow at any width (`scrollX` 0, `scrollWidth === clientWidth`); document **900** at
      ≥ 812 and at 1440
- [ ] Nunito **500 / 600 / 700 / 800** only, one `<link>`, **no 400 request**, no local `woff2`
- [ ] exactly **0 `<img>`**, **0 `<input>`**, **0 `<button>`**, **0 `<script>`**, **4** inline-or-lucide
      glyphs, **1** `<main>`, **1** `<h1>`
- [ ] no occurrence of `colorlib`, `alert-10`, or the reference's invented names in any app file
- [ ] `TEMPLATES.md` carries the `Alert 10` row as the tenth entry of `## Bootstrap Alerts (12)`
- [ ] `curl -I https://punnet.free.componentdock.com` → 200, `ssl_verify_result=0`
