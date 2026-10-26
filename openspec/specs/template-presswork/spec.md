# Template: Presswork (Hero — a type-led studio hero with an indented serif headline and a rotating ring badge)

## Purpose

**One full-height hero screen for a brand-and-digital studio, carried almost entirely by a single very large
Fraunces headline** — the third variant of the `hero` snippet family, and the family's first *editorial* entry
after Proscenium's split product-mock hero and Afterglow's centred gradient-mesh hero. There is **no
photography, no gradient field, no product shot and no JavaScript at all**: the whole page is a warm paper
ground, a hairline-ruled header, a three-run kicker, three explicit headline lines (the middle one indented, one
word in italic rust), a spinning ring badge, and a bottom rule over a three-column foot (paragraph → numbered
services → pill CTA).

The layout is a **single `<section>`** inside `<main>`, `min-height:100vh` on the root, and the foot is pushed to
the bottom of the screen by `margin-top:auto` rather than by a fixed height. At 1440 × 900 the document is
**exactly 900 px** — zero scroll, the only variant of the family so far that fits the first screen with no
slack to spare (Proscenium filled it by clipping, Afterglow overflowed it by 50 px).

- **Source slug:** `hero-03`
- **ColorLib page:** https://colorlib.com/wp/template/hero-03/ — **HTTP 200, 113,819 B**, `<title>`
  `Hero V03 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V03"**,
  `datePublished` **2026-09-25T15:08:57+00:00**, meta description *"A minimal, type-led hero for a design
  studio, built around a very large serif headline with an indented middle line… Free download, no jQuery or
  plugins."*, and the claim *"the download is 280 KB"* (measured **286,646 B = 279.9 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V03".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-03/ — **HTTP 200,
  2,912 B**, `<title>` `Hero V03 | Colorlib`, `lang="en"`, **one** stylesheet
  (`css/style.css?v=0f238947`) and **no `<script>` at all**. The slug-only path `theme/hero-03/` is
  **404 (9 B)** and `theme/bb/hero-03/` is **404 (9 B)**: the `bootstrap/` prefix is the only live path,
  exactly as for the card, alert and first two hero variants.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-03.jpg — **HTTP 200, 61,019 B**,
  **1200 × 972**, and this one is a **real progressive JPEG** (`file` → `JPEG image data, progressive,
  precision 8`) — unlike Afterglow's and Upright's AVIF-behind-a-`.jpg`. It is a **macOS browser mock-up** on
  a grey ground with a drop shadow and a `preview.colorlib.com` URL pill, **~1110 px** of page inside the
  frame.
- **Design category:** Hero (**editorial studio hero — display serif, paper ground, hairline rules, one
  circular badge**; variant 3 of the **12**-variant `hero` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/presswork`, package
  `@free-react-templates/presswork`, CNAME `presswork.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` on main is fully `[x]` — **0** `- [ ]`, **0** `[~]`, 2,910 rows — so this design comes from
`docs/catalog-coverage.md`: designs on colorlib.com's own listing that the checklist never recorded.
`hero-03` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that gap are all
prepped and shipped-or-queued, the card (20) and alert (12) families are complete, and the hero family is in
progress. Families are worked **in family order, then variant number** — this is **variant 3 of 12**.

## Bootstrap Heroes (12)

`TEMPLATES.md` **gained the `## Bootstrap Heroes (12)` section while this prep was being written**: on main
`b1fba8845` it sits at **line 830**, between `## Bootstrap Footers (20)` (whose last row is line 828) and
`## Bootstrap Modals (20)` (line 834), and holds exactly **one** row — `Hero 01` → proscenium — on line 832.
`Hero 02` (afterglow) is prepped but **not** written yet, so this row is currently the section's **second**
entry and becomes the third once the Afterglow implementer lands:

```markdown
## Bootstrap Heroes (12)

- [x] **Hero 01** — [colorlib](https://colorlib.com/wp/template/hero-01/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-01.jpg) · [proscenium](https://proscenium.free.componentdock.com)
- [x] **Hero 02** — [colorlib](https://colorlib.com/wp/template/hero-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-02.jpg) · [afterglow](https://afterglow.free.componentdock.com)
- [x] **Hero 03** — [colorlib](https://colorlib.com/wp/template/hero-03/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-03.jpg) · [presswork](https://presswork.free.componentdock.com)
```

Row grammar, verified on main `b1fba8845`: the section's existing `Hero 01` row is
`[colorlib] · ![preview] · [app]` — **preview in the middle**, matching the Footers section above it (Modals
rows below use the opposite order). Insert `Hero 03` **after** whichever hero rows exist at that moment, keep
that grammar, and re-read the surrounding lines immediately before pushing, because two implementer streams
write this file.

**The name.** `presswork` — one lowercase word for the printer's side of publishing: the setting, inking and
pressing of a page, which is what this design is (Fraunces, paper, hairlines, a rust accent). It keeps the
snippet families' closed-single-word pattern. Verified free on main `5386b1700` and again on `b1fba8845`:
`git grep -il presswork` → **0 files**; no `apps/presswork`; no `openspec/specs/template-presswork`; no
`docs/templates/presswork`; and `colorlib.com/wp/template/presswork/` (**404**),
`preview.colorlib.com/theme/presswork/` (**404, 9 B**),
`preview.colorlib.com/theme/bootstrap/presswork/` (**404, 9 B**) all miss.

Checked and **free** for later variants of this family: **`letterform`**, **`ledgerline`**, **`hatchmark`**.
Rejected on measurement: `colophon` (spec + docs exist), `broadsheet` (app + spec exist), `folio` (app), `quill`
(app), `imprint` (app), `masthead` (spec exists), `vellum` (app).

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium)

| what              | value                                                                                                                                    |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 2,912 B** live (**2,720 B** inside the archive), `<title>` "Hero V03 \| Colorlib", `lang="en"`, **one** stylesheet, **zero** `<script>` |
| preview path      | **`theme/bootstrap/hero-03/`**; `theme/hero-03/` **404** (9 B), `theme/bb/hero-03/` **404** (9 B)                                          |
| stylesheet        | `css/style.css?v=0f238947`, **9,666 B**, **430** lines, sha256 `84536fc18e8a670d…` (**identical** in the archive)                         |
| script            | **none** — there is no `<script>` element and `js/snippet.js` is **404 (9 B)**; the archive has **no `js/` directory at all**             |
| archive           | `preview.colorlib.com/downloads/free/hero-03.zip`, **200, 286,646 B** (= 279.9 KiB ✓ the page's "280 KB"), **11 entries** = 4 dirs + **7 files** |
| archive contents  | `index.html` **2,720 B**, `css/style.css` **9,666 B**, `README.md` **1,260 B**, `fonts/` **4 × woff2**, and nothing else                   |
| live ↔ archive    | CSS **identical sha256**; the two HTML files differ **only in the `<head>`** (the `robots` pair, the cdnjs `dns-prefetch`, `fetchpriority="high"`, the `?v=` query) → **live preview verified; the archive is its un-versioned twin** |
| README            | advertises `js/snippet.js` **and** an `images/` folder — **neither exists** (no script element, no `<img>`, no `js/`, no `images/`). Third variant in a row with this lie |
| inner pages       | **none** — `index.html` is **200, 2,912 B** = byte-identical to the directory URL; `about.html` → **404 (9 B)**; one HTML file in the archive |
| fonts (declared)  | **4** `@font-face`, all **Fraunces**, each `font-weight: 300 700`, `font-style` normal + italic × subsets `latin` / `latin-ext`; no Google Fonts `<link>`, no `@import` |
| fonts (binaries)  | **4 distinct** files — `fraunces-300-latin` **67,388 B** sha256 `48282a415ec2…`, `fraunces-300-latin-ext` **59,540 B** sha256 `f120089b9440…`, `fraunces-300-italic-latin` **81,704 B** sha256 `4af9c759c805…`, `fraunces-300-italic-latin-ext` **71,568 B** sha256 `1e0d114a7292…`; the page loads **2** of them (latin normal + latin italic) |
| type proof        | canvas A/B, `100px Fraunces`, string `"We shape brands outlast"`: **300 → 892**, **350 → 903**, **400 → 930**, **500 → 945**, **600 → 969**, **700 → 1,012**, **800 → 1,012**, **900 → 1,012** ⇒ the **350** in the sheet is a real instance of the variable cut (not a synthesised interpolation) and 800/900 clamp to 700 |
| sans proof        | canvas A/B, system stack, 100 px: **400 = 500 = 1,832.71**, **600 = 700 = 2,060.16** ⇒ this container's `system-ui` ships **two** weights, so the nav's declared `500` *renders* as 400 and the kicker's `600` renders as 700. Do not "correct" the declared weights by eye |
| Google Fonts      | `css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&display=swap` → **200** (the `opsz` axis is required for `font-variation-settings:"opsz" 144` to mean anything) |
| classes           | **20** classes in the markup, **19** with at least one rule, **0** phantom modifiers; **1** inert hook — `.cl-hero03__nav` has **no rule** (the nav is a bare flex child); **1** dead rule — `.cl-icon` (**the fourteenth consecutive snippet to carry it**) |
| custom properties | **7** on `.cl-hero03` — `--paper` `#f1ece2`, `--ink` `#1a1714`, `--muted` `#5a5249`, `--rule` `#cfc5b5`, `--accent` `#b3401e`, `--serif` `"Fraunces","Iowan Old Style",Georgia,serif`, `--gutter` `clamp(16px,4vw,56px)` |
| CSS anatomy       | **69** `{` blocks (4 `@font-face` + **1** `@keyframes` + **3** `@media` + style rules); width queries **1100** and **640** + reduced motion; **23** `revert` declarations in the `:where(html)` guard block; **2** `!important` (both in the reduced-motion kill switch); **4** `transition` declarations (3 live + the override); **2** `animation` declarations (1 live + the override); **6** hex literals / **5** distinct colours, **0** `rgb()`/`rgba()`; **1** gradient — and it is the nav underline |
| controls          | **0** `<form>`, **0** `<input>`, **0** `<button>`; **2** inline `<svg>` (the ring + the CTA arrow), **0** `<img>`; **6** `<a>`, **all six `href="#"`** |
| headings          | **1** `<h1>` ("We shape brands that outlast the trend cycle."), **0** `<h2>`                                                              |
| landmarks         | `<header class="cl-hero03__bar">` → `<nav aria-label="Main">`; `<main class="cl-hero03__main">` → **one** `<section aria-labelledby>`; **no** `<footer>`, **no** `<aside>` |
| ids               | **1** — `cl-hero03-title` (`aria-labelledby`); the ring's `textPath` uses `cl-hero03-circle` (a `<defs>` path, not an element id target)    |
| document height   | **900** at 1440, 1280, 1101, 900, 768, 641, 640…320; **955** at 1100; **913** at 1024 — vertical only at every width **except** the ≤~455 px badge-overflow band (see trap 2) |
| reduced motion    | `@media (prefers-reduced-motion: reduce)` sets `animation:none !important; transition:none !important` on **every** descendant and pseudo-element — the badge freezes at its current angle, it is **not** removed |

## Page arithmetic at 1440 × 900 (measured, `getBoundingClientRect`)

| element            | box                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `.cl-hero03`       | **1440 × 900**; `min-height:100vh`, `flex column`; bg `#f1ece2`; `16px / 1.55`; font `system-ui`                     |
| `header` bar       | **1440 × 87.09** at (0, 0) — `padding: 26px 56px`, `border-bottom: 1px #cfc5b5`, `flex-wrap`, `align-items:baseline`, `justify-content:space-between`, `gap: 8px 24px` |
| wordmark           | **144.16 × 34.09** at (56, 26) — Fraunces **22px / 600 / `-.01em`**; the `®` is a `.55em` superscript 2 px after it |
| `nav` (= `ul`)     | **316.02 × 24.8** at (**1067.98**, 34) — 4 links, `gap: 40px`, `15px / 500`, `padding: 4px 0`                        |
| one link           | Work **37.98**, Studio **47.78**, Journal **51.89**, Contact **58.36** (Contact is `--accent`); the current page's link carries a **full** 1 px `currentColor` underline |
| hero section       | **1440 × 812.91** at (0, **87.09**) — `padding: 64px 56px 56px` (`clamp(28px,5vw,64px)` / gutter / `clamp(32px,5vw,56px)`) |
| kicker             | **1328 × 20.14** at (56, **151.09**) — `13px / 600 / .12em / uppercase` muted, `gap: 6px 28px`, 3 runs of **223.7 / 241.59 / 119.14** |
| `.cl-hero03__head` | **1328 × 522.7** at (56, **171.23**) = h1's 44 px top margin + 414.7 + its 64 px bottom margin (**no collapsing — it is a flex item**) |
| `h1`               | **1328 × 414.7** at (56, **215.23**) = **153.6 px / 138.24 line box / 3 lines**; `font-weight:350`, `line-height:.9`, `letter-spacing:-6.912px` (`-.045em`), `font-variation-settings:"opsz" 144`, **no max-width** |
| one headline line  | **1328 × 138.23** each, stacked at y 215.23 / 353.47 / 491.70; the middle one is indented **215.04 px** (`1.4em`)  |
| ring badge         | **126.39 × 126.39** at (**1257.61**, **567.55**) — `right:0; bottom:0` of the head, `width: clamp(88px, 6vw + 40px, 150px)` |
| foot grid          | **1328 × 138.06** at (56, **705.94**) — columns **542.594 / 417.391 / 252.828**, `gap: 57.6` (`clamp(24px,4vw,64px)`), `align-items:end`, `margin-top:auto`, `padding-top:28`, `border-top:1px #cfc5b5` |
| intro paragraph    | **542.59 × 109.06** at (56, 734.94) — `clamp(1rem, .96rem + .2vw, 1.1rem)` = **17.6 px** at 1440 (it stops growing at 1120, floors at 16 at 320), `1.55` line box **27.28** / **4 lines**, muted, `max-width:34em` → **598.4 px** (the em resolves against the *intro's own* size, not the root) |
| services `ol`      | **417.39 × 105** at (**656.19**, 739) — 3 `<li>` **31** tall, `gap: 6`, Fraunces **20px**; each numeral is a **36 px**-wide `12px/600` system-sans span in muted, `vertical-align:3px` |
| CTA pill           | **252.83 × 58.8** at (**1131.17**, **785.2**) — `1px solid ink`, radius **999**, `padding: 16px 26px`, `gap: 12`, 22 px arrow (`stroke-width:1.6`) |

**Where the 900 comes from, and why nothing scrolls.** The hero's content is `64 + 20.14 + 522.7 + 138.06 +
56 = 800.9` against **812.91** of space, so `margin-top:auto` on the foot resolves to **12.01 px** — the foot
sits 12 px below the head and the document is exactly the viewport. The slack is not constant: it is **0** at
1100 (where the document grows to 955) and **97.64 px** at 768. A port that hard-codes a foot offset instead of
reproducing `margin-top:auto` drifts by up to 97 px.

## The five devices

**1. The headline is three nodes, not a paragraph.** `.cl-hero03__title` contains three
`<span class="cl-hero03__line">`s, each `display:block`; the second also carries `--indent` (`padding-left:1.4em`
→ `.6em` at ≤ 640) and an `<em>outlast</em>` in `--accent`, `font-style:italic`, `font-weight:300`. Because the
lines are explicit, no wrapping choice can change the rhythm: every width from 1440 down to 320 is **3 lines**
(the measured line boxes are 138.23 / 107.72 / 77.77 / 66.33 / 69.91 / 46.16 / 45.59 px tall — the height
changes with the type size, never the count). Type size is `clamp(3rem, .6rem + 10vw, 12rem)`: 153.6 at 1440,
119.7 at 1101, 112 at 1024, 86.4 at 768, 73.7 at 641, **48.6** at 390 and **48** (the 3rem floor) at 320.

**2. The badge spins, and its rotation is the only motion.** `.cl-hero03__badge` is an absolutely positioned
square pinned to the **head's** bottom-right corner; inside it an SVG holds a `<textPath>` on a 46-radius circle
("Booking projects for spring 2027 •") at `10.5px / 600 / .18em / uppercase`, filled ink, animated
`cl-hero03-spin 22s linear infinite`, plus a separate `↘` (`&#8600;`) centred on top at **34 px** (26 at ≤ 640)
in Fraunces `--accent`. Measured rotation is real: the computed matrix moved from `0.9647 / 0.2634` to
`0.8201 / 0.5723` over 1.2 s.

**3. The kicker is three runs with generated slashes.** `gap: 6px 28px` on the flex row, and
`span + span::before { content:"/"; margin-right:28px; color: var(--rule) }` — so the separator belongs to the
*following* span, which is why the visual space either side of a slash is `28 + 28` and why the third span's
width (119.14) is measured from the slash, not from "Est. 2011".

**4. The foot is a 3-column grid that becomes a 3-row stack at 1100.** `1.3fr 1fr auto` with
`align-items:end` → the intro (542.59), the services list (417.39) and the CTA (252.83). Below 1100 the grid
collapses to one column and the *services* list turns into a **3-column** grid
(`repeat(3, auto); justify-content:start`), the CTA goes `justify-self:start`, and the intro's
`max-width:34em` is **one pixel away from biting**: it resolves to **598.4 px** at 1440 and the stacked column
is 597.03 at 1100, so the cap never shortens a line here — but it is what keeps the paragraph from running the
full width of a wide column, and at 320 it resolves to **544** (16 px × 34).

**5. The nav underline is a background, not a border.** `.cl-hero03__link` carries
`background: linear-gradient(currentColor, currentColor) no-repeat 0 100% / 0 1px` and grows to `100% 1px` on
`:hover` **and** on `[aria-current="page"]` over `.35s ease` — 1 px tall, sitting on the link's own bottom edge
(the link has `padding: 4px 0`), so it reads as a typed rule rather than a UI underline. The CTA's hover is the
other inversion: `background: ink; color: paper` over `.25s` plus `translateX(4px)` on the arrow.

## Width ladder (measured)

| vw   | h1 px  | line box | docH | bar H  | gutter | foot                        | badge | kicker |
| ---- | ------ | -------- | ---- | ------ | ------ | --------------------------- | ----- | ------ |
| 1440 | 153.6  | 138.23   | 900  | 87.09  | 56     | 3 cols 542.6 / 417.4 / 252.8 | 126.39 | 1 line |
| 1280 | 137.6  | 123.84   | 900  | 87.09  | 51.2   | 3 cols 464.8 / 357.6 / 252.8 | 116.8 | 1 line |
| 1101 | 119.7  | 107.72   | 900  | 87.09  | 44.04  | 3 cols 379.8 / 292.2 / 252.8 | 106.05 | 1 line |
| 1100 | 119.6  | 107.64   | **955** | 87.09 | 44     | **1 col**, stacked **315.67** | 106 | 1 line |
| 1024 | 112    | 100.8    | **913** | 87.09 | 40.96 | 1 col, stacked **308.58**   | 101.44 | 1 line |
| 900  | 99.6   | 89.64    | 900  | 87.09  | 36     | 1 col 3-row                 | 94    | 1 line |
| 768  | 86.4   | 77.76    | 900  | 87.09  | 30.72  | 1 col, services wrap to **62** tall | **88** (clamp floor) | 1 line |
| 641  | 73.7   | 66.33    | 900  | 87.09  | 25.63  | 1 col 3-row                 | 88    | **2 lines** |
| 640  | 73.6   | 69.92    | 900  | **103.89** | 25.59 | 1 col, services **1 column** | 88  | **1 line** |
| 560  | 65.6   | 62.32    | 900  | 103.89 | 22.4   | 1 col                       | 88    | 2 lines |
| 480  | 57.6   | 54.72    | 900  | 103.89 | 19.2   | 1 col                       | 88    | 2 lines |
| 390  | 48.6   | 46.17    | 900  | 103.89 | 16     | 1 col, CTA **stretched 358** | 88   | 2 lines |
| 320  | **48** (floor) | 45.59 | 900 | 103.89 | 16  | 1 col                       | 88    | **3 lines** |

Three things this table says that a hand-written one would get wrong:

1. **The document is tallest at 1100, not at 320.** 955 at 1100 → 913 at 1024 → 900 at 900 → 900 at 320. The
   `1100` block stacks the foot into three rows while the headline is still 119.6 px tall; by 900 the headline
   has shrunk enough to pay for the stacking. Never model document height as monotonic in width.
2. **The kicker loses a line when the viewport narrows** (2 lines at 641 → **1** at 640) because the 640 block
   drops the type 13 → 11.5 px and the separators 28 → 14 px. Only at 320 does it go to 3.
3. **The bar gets 16.8 px taller at 640** (87.09 → 103.89) because `flex-direction:column` puts the nav on a
   second line (wordmark y 18, nav y 60.09 = 103.89 − 34.09 − 18 − … measured directly).

## The traps (all cost real measurement time)

1. **A flex item keeps its child's margins — a plain block does not.** `.cl-hero03__head` is a flex item of
   `.cl-hero03__hero` (`display:flex; flex-direction:column`), so the `h1`'s `44px … 64px` margins are **inside**
   its 522.7 height and `bottom:0` puts the badge's bottom edge at **693.94**. Re-implement the head as an
   ordinary `<div>` and the margins collapse *out*, the head measures **414.7**, and the badge jumps **64.02 px
   up** — the one thing in this design that silently breaks under a "harmless" wrapper change.
2. **The rotating badge makes the page scroll horizontally below ~455 px.** A square rotating in place has an
   axis-aligned bounding box up to `88 × √2 = 124.45` — an **18.23 px** overhang on each side — and the badge's
   right edge is flush with the head's content edge, i.e. exactly one gutter inside the viewport. With the
   `16 px` minimum gutter the AABB sticks out by ~2 px, and it is **real scrollable overflow**: at 390
   `body.scrollWidth` is **392** vs `clientWidth` 390 and `scrollTo(500, 0)` → **`scrollX` 2**; same at 320
   (322 / 320). It is **phase-dependent** — at 480 the element's AABB measured 1.76 px past the edge while the
   document still did **not** overflow, because the sampled angle was near 0°/90° — so never assert a fixed
   number, and **fix it** rather than reproduce it: `overflow-x: clip` on the shell, or inset the badge by the
   AABB overhang (`right: max(0px, calc(18.23px - var(--gutter) + 16px))`), or rotate a wrapper whose box is
   already square to the corner.
3. **`font-weight:350` is a real instance, not a rounding error.** 892 / **903** / 930 at 300 / 350 / 400 on the
   canvas A/B. Port it as `fw350` and load Fraunces *with the `opsz` axis* — without `opsz 9..144` in the
   Google Fonts URL, `font-variation-settings:"opsz" 144` is inert and the display size renders 90 % correctly
   but noticeably tighter.
4. **This host's `system-ui` has two weights.** Canvas widths for 400 and 500 are byte-identical (1,832.71), as
   are 600 and 700 (2,060.16): the nav's `500` renders as 400 and the kicker's `600` renders as 700 *here*.
   Keep the declared weights — a port that "matches the screenshot" by setting the nav to 400 will be wrong on
   every machine that has a real weight-500 face.
5. **The single screen is slack, not height.** `margin-top:auto` on the foot measured **12.01 px** at 1440,
   **0** at 1100, **97.64** at 768. Do not hard-code any of them.
6. **`clamp(3rem, .6rem + 10vw, 12rem)` reaches its floor at 384 px.** 48.6 px at 390 → 48 px at 320: the type
   stops shrinking below 384 while the column keeps shrinking, which is where the indent (`.6em` = 28.8) starts
   eating the middle line.
7. **Dead rule and inert hook.** `.cl-icon` (styled, unused — 14th consecutive snippet) and
   `.cl-hero03__nav` (used, unstyled). Neither is a porting target; the nav needs no rule at all.

## Contrast (computed from the flat paper ground — the page has no gradient or image behind any text)

| text                                              | pair                | ratio    |
| ------------------------------------------------- | ------------------- | -------- |
| headline `#1a1714` on `#f1ece2`                    | ink / paper         | **15.16** |
| `outlast` `#b3401e` on `#f1ece2`                   | accent / paper      | **4.86**  |
| intro + kicker `#5a5249` on `#f1ece2`              | muted / paper       | **6.51**  |
| CTA hover label `#f1ece2` on `#1a1714`             | paper / ink         | **15.16** |
| focus ring `#b3401e` on `#f1ece2` (2 px, 4 px off) | accent / paper      | **4.86** (≥ 3 for UI) |
| hairlines `#cfc5b5` on `#f1ece2`                   | rule / paper        | 1.45 — **decorative only** |
| `accent` on `ink` (only reachable if a port inverts the CTA) | accent / ink | 3.12 |

Every text pair passes AA (`outlast` at 4.86 passes even as normal text, and it is display size). The 1.45
hairline is the one number to keep an eye on: it is fine as a *rule*, and would fail 1.4.11 if a port ever used
it as a control boundary — the CTA's border is `ink` (15.16), which is why the button reads as a button.

## Requirements

### Requirement: A single full-height screen with no script

The template SHALL render one 100vh hero screen from static markup, with no client JavaScript and no
second section.

#### Scenario: One screen, one section, one headline at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** it renders
- **THEN** there SHALL be exactly one `<header>` (the bar), one `<nav aria-label="Main">`, one `<main>` and
  **one** `<section aria-labelledby>` inside it
- **AND** there SHALL be exactly **one** `<h1>` and **zero** `<h2>` elements
- **AND** the document SHALL be **exactly 900 px** tall with `scrollX === 0` and
  `scrollWidth === clientWidth`
- **AND** there SHALL be **no `<script>`**, no `<form>`, no `<input>` and no `<img>` in the template

#### Scenario: The ground, the type and the two rules

- **GIVEN** the design tokens
- **WHEN** the page paints
- **THEN** the ground SHALL be `#f1ece2`, the ink `#1a1714`, the muted copy `#5a5249`, the hairline
  `#cfc5b5` and the accent `#b3401e`
- **AND** body type SHALL be `16px / 1.55` in the system sans stack, and display type SHALL be
  **Fraunces** at `opsz 144`
- **AND** the header's `border-bottom` and the foot's `border-top` SHALL each be **1 px** `#cfc5b5`

### Requirement: A hairline header with a gradient underline

The header SHALL hold a serif wordmark and four plain links on a single baseline-separated row.

#### Scenario: Wordmark, four links, and the underline that draws itself

- **GIVEN** the header at 1440
- **WHEN** measured
- **THEN** it SHALL be **1440 × 87.09** with `padding: 26px var(--gutter)` and
  `justify-content:space-between`
- **AND** the wordmark SHALL be **144.16 × 34.09** at (56, 26) — Fraunces **22px / 600 / `-.01em`** — with the
  `®` as a `.55em` superscript 2 px after the name, `aria-hidden`
- **AND** the link list SHALL measure **316.02 × 24.8** at (1067.98, 34), four links `gap: 40px` at
  `15px / 500`, `padding: 4px 0`
- **AND** the last link SHALL be `--accent`
- **AND** each link's underline SHALL be a `currentColor` gradient of `0 1px` that grows to **`100% 1px`** on
  hover and on `[aria-current="page"]`, over `.35s ease` — not a border, not a text-decoration

#### Scenario: The bar stacks instead of collapsing

- **GIVEN** the header is `flex-wrap:wrap`
- **WHEN** the viewport is 640 or narrower
- **THEN** it SHALL become a column (**103.89** tall) with the wordmark at y **18** and the nav at y **60.09**
- **AND** the four links SHALL still fit one row at 320 (**256.02** wide in a 288 column, `gap: 20px`)
- **AND** there SHALL be **no** hamburger, no toggle button and no hidden panel — the reference has none

### Requirement: A three-run kicker with generated slash separators

The hero SHALL open with an uppercase, tracked, three-run kicker whose separators are generated by CSS.

#### Scenario: Three runs at 1440

- **GIVEN** the kicker paragraph of three `<span>`s
- **WHEN** measured at 1440
- **THEN** it SHALL be **1328 × 20.14** at (56, 151.09) at
  `13px / 600 / letter-spacing:.12em / text-transform:uppercase` in `--muted`
- **AND** the flex gap SHALL be `6px 28px` and each `span + span::before` SHALL be `content:"/"` with
  `margin-right: 28px` in `--rule`
- **AND** the three run widths SHALL measure **223.7 / 241.59 / 119.14**
- **AND** at ≤ 640 the type SHALL drop to **11.5 px**, the gap to `4px 14px` and the slash margin to **14 px**

### Requirement: A three-line display headline with an indented middle line

The headline SHALL be three explicit block lines, the middle one indented, with one word in italic accent.

#### Scenario: Three lines, never four

- **GIVEN** three `<span>` lines, each `display:block`
- **WHEN** the viewport narrows from 1440 to 320
- **THEN** the `h1` SHALL keep **three lines** at every width (no `text-wrap`, no wrapping of a line's own text)
- **AND** its type size SHALL follow `clamp(3rem, .6rem + 10vw, 12rem)` — **153.6** at 1440, **112** at 1024,
  **73.7** at 641, **48** (the floor, reached at 384 px) at 320
- **AND** `line-height` SHALL be **`.9`** (`138.24` at 1440) and `.95` at ≤ 640
- **AND** `letter-spacing` SHALL be **`-.045em`** (`-6.912 px` at 1440) and `-.04em` at ≤ 640
- **AND** the font SHALL be Fraunces at **weight 350** with `font-variation-settings: "opsz" 144`

#### Scenario: The indent and the italic word

- **GIVEN** the middle line
- **WHEN** it renders
- **THEN** it SHALL carry `padding-left: 1.4em` (**215.04 px** at 1440) and `.6em` at ≤ 640
- **AND** the word *outlast* inside it SHALL be an `<em>` in `--accent`, `font-style:italic`, `font-weight:300`
- **AND** the headline's block SHALL measure **1328 × 414.7** at (56, 215.23), with `44px` above and `64px`
  below it, both **inside** the head wrapper

### Requirement: A rotating ring badge pinned to the headline block

The hero SHALL place a slowly rotating circular availability badge at the headline block's bottom-right corner.

#### Scenario: The ring, the arrow, and the 22-second clock

- **GIVEN** the badge at 1440
- **WHEN** measured
- **THEN** it SHALL be **126.39 × 126.39** at (**1257.61**, **567.55**) — the head's content-box bottom-right
  corner, `width: clamp(88px, 6vw + 40px, 150px)`, `aspect-ratio: 1`
- **AND** the SVG SHALL hold a `textPath` on a radius-**46** circle reading "Booking projects for spring 2027 •"
  at **10.5px / 600 / .18em / uppercase**, filled `--ink`
- **AND** a `↘` SHALL be centred over it at **34 px** (26 at ≤ 640) in Fraunces `--accent`
- **AND** the SVG SHALL rotate on `cl-hero03-spin 22s linear infinite`
- **AND** the whole badge SHALL be `aria-hidden`, because rotating text is not readable by assistive tech

#### Scenario: The rotation must not create horizontal scroll

- **GIVEN** a square rotating inside a corner-flush box
- **WHEN** the viewport is 455 px or narrower, where the `16 px` gutter is smaller than the **18.23 px** AABB
  overhang of an 88 px square
- **THEN** the port SHALL NOT reproduce the reference's overflow (`body.scrollWidth` **392** vs
  `clientWidth` 390, `scrollX` **2**)
- **AND** it SHALL contain the rotation — `overflow-x: clip` on the shell, an inset badge, or a square rotating
  wrapper — so `scrollWidth === clientWidth` at 390, 320 and 300

### Requirement: A three-column foot pushed to the bottom of the screen

The hero SHALL close with a rule over an intro paragraph, a numbered services list and a pill CTA, aligned to
the bottom edge of the viewport.

#### Scenario: Intro, three services, one pill at 1440

- **GIVEN** the foot grid
- **WHEN** measured at 1440
- **THEN** it SHALL be **1328 × 138.06** at (56, **705.94**), `grid-template-columns: 1.3fr 1fr auto`,
  `gap: 57.6`, `align-items: end`, `padding-top: 28`, `border-top: 1px`, `margin-top: auto`
- **AND** the intro SHALL be **542.59 × 109.06** at 17.6 px / 27.28 line box / **4 lines** with
  `max-width: 34em` (which resolves against its own 17.6 px → **598.4**, and does not bite at any width), in
  `--muted`
- **AND** the services `<ol>` SHALL be **417.39 × 105** at (656.19, 739) — three 31 px rows, `gap: 6`, Fraunces
  **20 px**, each numeral a **36 px**-wide `12px / 600` sans span in muted at `vertical-align: 3px`
- **AND** the CTA SHALL be **252.83 × 58.8** at (1131.17, **785.2**) — `1px solid --ink`, radius **999**,
  `padding: 16px 26px`, `gap: 12`, with a 22 px arrow at `stroke-width: 1.6`

#### Scenario: The CTA inverts, and the arrow leads

- **GIVEN** the CTA's hover state
- **WHEN** a pointer enters it
- **THEN** the background SHALL become `--ink` and the label `--paper` over `.25s`
- **AND** the arrow SHALL translate **4 px** right over `.25s`
- **AND** keyboard focus SHALL draw a **2 px** `--accent` outline at **4 px** offset (`:focus-visible`)

#### Scenario: The foot stacks at 1100 and the services re-flow at 640

- **GIVEN** the `max-width: 1100px` block
- **WHEN** the viewport is 1100 or narrower
- **THEN** the foot SHALL collapse to **one** column, with the services list becoming a **3-column** grid
  (`repeat(3, auto)`, `justify-content:start`) and the CTA `justify-self:start`
- **AND** the CTA SHALL stretch to the full column at ≤ 640 (`justify-self:stretch`, centred)
- **AND** the services list SHALL return to **one** column at ≤ 640

### Requirement: The screen fills by slack, not by height

The layout SHALL fill exactly one viewport by distributing the leftover space above the foot.

#### Scenario: 12 px of slack at 1440, 0 at 1100, 97.64 at 768

- **GIVEN** the root is `min-height:100vh` with `flex-direction:column`
- **WHEN** the page is measured
- **THEN** the hero's content SHALL be **800.9** against **812.91** of space, so the foot's computed
  `margin-top` SHALL be **12.01 px** at 1440
- **AND** it SHALL be **0** at 1100 (where the document grows to **955**) and **97.64** at 768
- **AND** the document height ladder SHALL read **900 / 900 / 900 / 955 / 913 / 900 / 900 / 900 … 900** at
  **1440 / 1280 / 1101 / 1100 / 1024 / 900 / 768 / 641 / 320** — i.e. it SHALL be **tallest at 1100**, not at
  the narrowest width

### Requirement: Motion that stops on request

The badge SHALL be the template's only animation and SHALL stop under reduced motion.

#### Scenario: One animation, all transitions killed

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads
- **THEN** the badge's `animation-name` SHALL compute to **`none`** and its transform to `none`
- **AND** every `transition` in the template SHALL compute to `none`
- **AND** no element SHALL slide, fade, reveal or parallax — the reference has **no** scroll animation, no
  observer, no keyframe other than the ring, and the port SHALL not add one

### Requirement: Repo obligations

The port SHALL carry a Component Dock footer, SHALL add the `TEMPLATES.md` row, and SHALL NOT leak provenance
into app files.

#### Scenario: Footer, routes and no provenance in the app

- **GIVEN** every marketplace template carries a Component Dock footer
- **WHEN** the port is built
- **THEN** it SHALL add a `<footer>` **below** the 100vh hero, linking `https://www.componentdock.com/`
  ("Component Dock") — the reference has none, and the hero itself SHALL keep its own `min-height:100vh` so the
  fold measurements above still hold
- **AND** the six `href="#"` anchors SHALL get real destinations (`Work`, `Studio`, `Journal`, `Contact`, the
  wordmark, the CTA)
- **AND** `aria-current="page"` SHALL sit on the link for the page the visitor is on, not permanently on *Work*
- **AND** no app file SHALL contain `colorlib`, `hero-03`, `Atelier Nord`, `presswork`'s source name or the
  preview URL

#### Scenario: The `TEMPLATES.md` row

- **GIVEN** `TEMPLATES.md` gained `## Bootstrap Heroes (12)` at line 830 on main `b1fba8845` with the single
  `Hero 01` row
- **WHEN** the template ships
- **THEN** the row SHALL be inserted **after** whichever hero rows exist (under `Hero 02` once Afterglow lands,
  second entry until then), in the section between `## Bootstrap Footers (20)` and `## Bootstrap Modals (20)`
- **AND** the row SHALL read `- [x] **Hero 03** — [colorlib](https://colorlib.com/wp/template/hero-03/) ·
  ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-03.jpg) ·
  [presswork](https://presswork.free.componentdock.com)`

## Adapting to the repo (deltas — read before writing code)

**Copy.** The reference's invented studio name SHALL NOT appear. Use these replacements:

| source                                                     | port                                                                                          |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| "Atelier Nord" (+ `®` superscript)                          | **"Studio Ferro"** (+ the same `®` span) — **12 characters, the same as the source**, so every box in the tables above still holds |
| headline `We shape brands that outlast the trend cycle.`     | **keep** — no brand in it, and the fold table is keyed to it                                    |
| kicker `Brand & digital studio` / `Copenhagen — Lisbon` / `Est. 2011` | **keep** the three-run shape; the two cities MAY change, but a different character count re-measures the 641/640 wrap |
| intro paragraph ("An independent team of fourteen designers…") | **keep** (generic), and append the badge's sentence — see the accessibility fix below           |
| services `Identity systems` / `Websites & products` / `Editorial & packaging` | **keep** — invented categories, and the 768 px wrap depends on their lengths  |
| CTA `See selected work`                                     | **keep** — 17 characters, which is what makes the pill **252.83** wide                          |

If the port changes any of those strings it MUST re-measure the folds (h1 3/3/3/3, kicker 1/2/1/3, intro
4 at 1440 / **5** at 1101 / 4 at 1100 / **6** at 320, services 3×1 row → 3 columns → 1 column) because the wrap
points are **content** widths, not viewport truths.

**Structure → React.** `App` → `<SiteHeader>` (wordmark + `<nav>` links, no state, no hook — there is nothing
to open) → `<Hero>` → `<Kicker>` (three runs), `<Headline>` (three `<span className="block">` lines, `<em>` on the
accent word), `<RingBadge>` (one `<svg>` + one arrow span, `aria-hidden`, pure CSS animation) →
`<HeroFoot>` (`<Intro>`, `<ServiceList>`, `<CtaLink>`) → `<Footer>`. **No `useState`, no `useEffect`, no
event listener:** the whole template is static markup plus two CSS transitions and one keyframe. If a hook
appears, something has been over-built.

Keep the services as **data** (`{ index, label }[]`) so the numeral's 36 px span is one component, not three
copy-pastes.

**Tokens.** Put the palette in `@theme`: `--color-paper: #f1ece2`, `--color-ink: #1a1714`,
`--color-muted: #5a5249`, `--color-rule: #cfc5b5`, `--color-accent: #b3401e`; `--font-display: "Fraunces",
"Iowan Old Style", Georgia, serif`; `--font-sans: system-ui, …`; `--gutter: clamp(16px, 4vw, 56px)`. The display
size needs its own clamp (`--text-display: clamp(3rem, .6rem + 10vw, 12rem)`), because Tailwind's type scale
cannot express `.6rem + 10vw`.

**Fraunces.** Load it with the optical-size axis —
`https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&display=swap`
(verified **200**) — otherwise `font-variation-settings:"opsz" 144` is inert and the display line renders with
the wrong contrast of thick-to-thin. Set `font-weight:350` explicitly; Tailwind has no `fw350` utility, so use
an arbitrary value (`font-[350]`).

**Prescribed fixes (behavioural, not cosmetic).**
1. Contain the badge's rotation so the page cannot scroll horizontally at ≤ 455 px (trap 2).
2. The badge's sentence lives only inside `aria-hidden` SVG text: put **"Booking projects for spring 2027"** in
   the visible copy (the intro's last sentence is the natural home) so the availability claim is not lost to
   assistive tech, and keep the ring itself `aria-hidden`.
3. `aria-hidden` the three service numerals (`01`/`02`/`03`) so a screen reader reads "Identity systems", not
   "zero one Identity systems".
4. Give the six `href="#"` anchors real targets, and move `aria-current` to the current page.
5. Add the Component Dock `<footer>` below the hero.

**Do not port:** the `:where(html) … { …: revert }` guard block (**23** `revert` declarations — Tailwind's
preflight covers it), the dead `.cl-icon` rule, the inert `.cl-hero03__nav` hook, the `[hidden]` re-declaration
that only exists to undo the guard block, the source's `#` anchors, or the macOS screenshot frame.

## Verification checklist

- [ ] `apps/presswork` exists, package `@free-react-templates/presswork`, `public/CNAME` =
      `presswork.free.componentdock.com`, `"homepage"` = `https://presswork.free.componentdock.com`
- [ ] `npm run verify:app presswork` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-presswork --type spec` is valid
- [ ] measured at 1440 × 900: bar **1440 × 87.09**; wordmark **144.16 × 34.09** at (56, 26); link list
      **316.02 × 24.8** at (1067.98, 34) with link widths 37.98 / 47.78 / 51.89 / 58.36; hero
      **1440 × 812.91** at (0, 87.09); kicker **1328 × 20.14** at (56, 151.09); head **1328 × 522.7** at
      (56, 171.23); `h1` **1328 × 414.7** at (56, 215.23) at **153.6 px / 138.24**; three lines 138.23 tall,
      middle indent **215.04**; badge **126.39²** at (1257.61, 567.55); foot **1328 × 138.06** at (56, 705.94)
      with columns **542.594 / 417.391 / 252.828**, `gap: 57.6`; intro **542.59 × 109.06**; services
      **417.39 × 105** at (656.19, 739); CTA **252.83 × 58.8** at (1131.17, 785.2)
- [ ] document height **900** at 1440 and `scrollX === 0`; `scrollWidth === clientWidth` at **1440, 1280, 1101,
      1100, 1024, 900, 768, 641, 640, 560, 480, 390, 320, 300** (the badge fix is what keeps 390/320/300 clean)
- [ ] document height **955** at 1100 and **913** at 1024 (the two widths that grow)
- [ ] `h1` is **3 lines** at every width 1440 → 320 and **48 px** at 320 (the clamp floor)
- [ ] badge rotation measured over ≥ 1 s (`transform` matrix changes); under
      `prefers-reduced-motion: reduce` it is `none` and every transition is `none`
- [ ] link underline `background-size` **`100% 1px`** on hover and on `aria-current`; CTA hover inverts to
      `ink`/`paper` with the arrow at `translateX(4px)`; focus-visible is **2 px** accent at **4 px** offset
- [ ] no `<script>`, no `<form>`, no `<img>`; exactly **one** `<h1>`, **zero** `<h2>`; footer links
      `https://www.componentdock.com/`
- [ ] contrast: ink/paper **15.16**, accent/paper **4.86**, muted/paper **6.51** — unchanged if the tokens are
      used as specified
- [ ] `git grep -il 'colorlib\|hero-03\|atelier nord' apps/presswork` → no hits
