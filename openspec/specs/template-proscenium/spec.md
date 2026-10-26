# Template: Proscenium (Hero — a split marketing hero whose product shot is drawn in CSS)

## Purpose

**One viewport-tall landing hero, split 1 : 1.1 — copy on the left, a product dashboard on the right that is
built out of `<div>`s, not a screenshot.** No photography anywhere: the "app" is a white card with a fake
browser bar, a 56 px icon rail, three KPI tiles, a bar-plus-line chart and three transaction rows, tilted
`rotateY(-6deg) rotateX(2deg)` behind `perspective(1600px)`. A single floating toast — *"Invoice #1042 paid ·
Reconciled automatically"* — hangs off its lower-left corner.

The page is the **template family's first hero**, and the first snippet in the catalogue that is a *whole
viewport* rather than a component: a header bar, one `<h1>`, one paragraph, two buttons, a three-item trust
list, and the mock. It has **no section below the fold, no footer, no form, no `<img>`, no `<h2>`** — nine of
the ten anchors are dead `#` and so is the tenth (the wordmark). Everything that looks alive is CSS: the bars
grow once on load, the toast bobs on a 5 s loop, and both stop under `prefers-reduced-motion`.

- **Source slug:** `hero-01`
- **ColorLib page:** https://colorlib.com/wp/template/hero-01/ — **HTTP 200, 113,555 B**, `<title>`
  `Hero V01 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V01"**, meta description *"A split
  landing-page hero for a finance software product, with an announcement pill, headline, supporting copy,
  two…"*, `datePublished` **2026-09-25T15:08:52+00:00**, author Colorlib, licence CC BY 3.0, and the claim
  *"the download is 250 KB"* (measured **255,841 B = 249.8 KiB** ✓). The page's five advertised behaviours are
  all verified below: *"Dashboard mock built with HTML and CSS, no images"*, *"Fluid clamp() headline with
  gradient accent"*, *"Accessible mobile menu with Esc and outside-click close"*, *"Mock simplifies itself on
  phones instead of shrinking"*, *"Reduced-motion friendly chart and card animations"*. **The design name the
  naming audit reads is ColorLib "Hero V01".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-01/ — **HTTP 200,
  8,351 B**, `<title>` `Hero V01 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=dfd407d1`) and
  **one** snippet `<script>` (`js/snippet.js?v=c01f0e96`). The slug-only path `theme/hero-01/` is **404 (9 B)**
  and `theme/bb/hero-01/` is **404 (9 B)**: the `bootstrap/` prefix is the only live path, exactly as for the
  card and alert families.
- **Design category:** Hero (**landing-page hero with a CSS-drawn product mock** — the first of the
  `hero` snippet family, and the family's only variant that fills the viewport rather than a card).
  **First** of the **`hero` snippet family** (**12** variants) in the **214 snippet variants** of
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/proscenium`, package
  `@free-react-templates/proscenium`, CNAME `proscenium.free.componentdock.com`.

**What this design is, and what it is not.** The card family (20) is closed and the alert family (12) is
closed; this is the **third family**, so there are no siblings to compare against yet — the comparison that
matters is against the repo's existing *whole-page* apps, and there the difference is that this one has **no
second band at all**: the source's `<main>` contains one `<section>` and the document is exactly
`100vh` tall above 961 px (measured `scrollHeight 900` at a 900 px viewport). A port that "finishes the page"
with a features grid, a testimonial band and a footer has invented 80 % of a design that does not exist.

**The eight things a careless port flattens** (each measured below):

- **The mock's rendered rect is not its size.** `perspective(1600px) rotateY(-6deg) rotateX(2deg)` with
  `transform-origin: left center` makes a **570 × 522** box report **592.15 × 542.28** (+3.9 %). Every
  hit-test and every screenshot looks 22 px wider than the element is. Read `offsetWidth/offsetHeight` on the
  mock subtree, never `getBoundingClientRect()`.
- **`.cl-hero01__cta` is two different buttons.** The header's *"Start free"* and the hero's *"Start 14-day
  trial"* share the class — **40 px tall / radius 10 / 14.5 px** in the bar, **50 px tall / radius 12** in the
  hero. `document.querySelector('.cl-hero01__cta')` returns the **bar** one (105 × 40), which is how a port
  ends up with a 40 px primary CTA.
- **The hero is centred by flexbox, not by padding.** `main` is `display:flex; flex:1; align-items:center`, so
  at 1440 the section sits at **y 129.61** — `80 (bar) + (820 − 720.78)/2`. The padding
  `clamp(32px,6vw,88px) … clamp(56px,8vw,112px)` only shapes the box; it does not place it.
- **The wrap inverts at the 960 breakpoint.** The `h1` is **3 lines** at 961 (398 px column) and **2 lines** at
  960 (640 px copy, single column). The narrowest layout has the *fewest* headline lines — a width ladder
  written as "more lines as it narrows" is wrong here.
- **Three of the mock's elements are deleted on phones, not shrunk.** At ≤ 560 the icon rail
  (`display:none`), the third KPI (*"Runway"*) and the third transaction row disappear, and the chart drops
  **150 → 120**. The card therefore gets **shorter** (522 → 439 at 560) while the viewport narrows.
- **The gradient headline is one span, and it wraps.** `.cl-hero01__accent` is
  `linear-gradient(92deg,#5b3df5,#9333ea)` + `background-clip:text` + `-webkit-text-fill-color:transparent`;
  at 1440 it straddles two lines (its rect is **151.2 px** tall — two line boxes merged), so a port must keep
  it inline and never as a block or a heading-level wrapper.
- **The mobile menu only exists if JS runs.** `.cl-hero01__menu-btn` is `display:none` until the script adds
  `.is-enhanced`; with JS off at 390 px the nav stays visible and **wraps** (`flex-wrap` fallback). A port
  that hides the nav in CSS alone loses the no-JS page.
- **The toast is clipped for 139 px of viewport.** At 561–699 the badge's `left:-28px` lands at a negative x
  (gutter is `clamp(16px,4vw,40px)` = 22.44 at 561) and `.cl-hero01{overflow:hidden}` shaves up to **5.56 px**
  off its left edge.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` on main is fully `[x]` — **0** `- [ ]`, **0** `[~]`, 2,908 rows — so this design comes from
`docs/catalog-coverage.md`: designs on colorlib.com's own listing that the checklist never recorded.
`hero-01` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that gap are all
prepped, and the card (20) and alert (12) families are complete. Families are worked **in family order, then
variant number** — this run opens the **`hero` family (12)**, so it is **variant 1 of 12** and the first of
its family to be prepped.

## Bootstrap Heroes (12)

`TEMPLATES.md` has **no `## Bootstrap Heroes` section on main yet**, so this row is the first entry of a
section that does not exist. Alphabetically (`Alerts` · `Buttons` · `Calendars` · `Carousels` · `Cards` ·
`Checkboxes` · `Dropdowns` · `Footers` · **`Heroes`** · `Modals` · `Multiselect` · `Wizards`) it belongs
**between `## Bootstrap Footers (20)` (its last row `Bootstrap Footer 20` / `footerpulse`) and
`## Bootstrap Modals (20)`**, i.e. inserted after the blank line that follows Footer 20:

```markdown
## Bootstrap Heroes (12)

- [x] **Hero 01** — [colorlib](https://colorlib.com/wp/template/hero-01/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-01.jpg) · [proscenium](https://proscenium.free.componentdock.com)
```

Row-grammar warning, measured on main `05b0f9316`: the neighbouring sections are **inconsistent** —
`## Bootstrap Alerts` row 01 is `[colorlib] · ![preview] · [app]`, `## Bootstrap Footers` 12–16/18–20 are the
same, but Footers 17 and every `## Bootstrap Modals` row are `[colorlib] · [app] · ![preview]`. Use the
**preview-in-the-middle** form shown above (the Alerts/Footers majority) and re-read the surrounding lines
immediately before pushing — two implementer streams write this file.

**The name.** `proscenium` — one lowercase word, the architectural **frame** of a stage: the arch the audience
looks through at the scene. That is exactly what this design is, a framed first screen, and it keeps the
snippet families' closed-single-word pattern. Verified free on main `05b0f9316`:
`git grep -il proscenium origin/main` → **0 files**; no `apps/proscenium`; no
`openspec/specs/template-proscenium`; no bold name in `TEMPLATES.md`; and the catalogue URLs
`colorlib.com/wp/template/proscenium/` (**404**), `preview.colorlib.com/theme/proscenium/` (**404, 9 B**) and
`preview.colorlib.com/theme/bootstrap/proscenium/` (**404, 9 B**) all miss.

Rejected on measurement (all still free): **`masthead`** (**17** repo hits — a substring of existing prose
about site headers), **`upstage`** (**1**). Also checked and free for later variants of this family:
**`banneret`**, **`proem`**. Wordbank held back for the family's remaining eleven variants: `apron`, `teaser`, `marquee`, `valance`,
`flyspace`, `cyclorama`, `downstage`, `footlights`, `skyline`, `flourish`.

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium 1.5x)

| what              | value                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 8,351 B** live (**8,148 B** inside the archive), `<title>` "Hero V01 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script |
| preview path      | **`theme/bootstrap/hero-01/`**; `theme/hero-01/` **404** (9 B), `theme/bb/hero-01/` **404** (9 B)                                        |
| stylesheet        | `css/style.css?v=dfd407d1`, **19,611 B**, **895** lines, sha256 `aaea869b3e6f89adef7198acd1acfd178b59f627c3c3051d3838bf468511bd1f`        |
| script            | `js/snippet.js?v=c01f0e96`, **1,363 B**, sha256 `ed6dffdc38275905b0c9026b99114f1809c4f6ae17bb23c8b88e55a39b6f0085`; `/js/main.js` **404 (9 B)** |
| archive           | `preview.colorlib.com/downloads/free/hero-01.zip`, **200, 255,841 B** (= 249.8 KiB ✓ the page's "250 KB"), **18 entries** = 5 dirs + **13 files** |
| archive contents  | `index.html` **8,148 B**, `css/style.css` **19,611 B**, `js/snippet.js` **1,363 B**, `README.md` **1,260 B**, `fonts/` **10 × woff2**      |
| live ↔ archive    | CSS **identical sha256**, JS **identical sha256**; the two HTML files differ **only in the `<head>`** (a `robots` pair, a `cdnjs` `dns-prefetch`, `fetchpriority="high"`, and the `?v=` query strings) → **live preview verified; the archive is its un-versioned twin** |
| inner pages       | **none** — `index.html` is **200, 8,351 B** = byte-identical to the directory URL; `about.html` and `pricing.html` are **404 (9 B)**; the archive ships exactly one HTML file |
| fonts (declared)  | **10** `@font-face`, all `Plus Jakarta Sans`, weights **400 / 500 / 600 / 700 / 800** × two subsets (`latin`, `latin-ext`); no Google Fonts `<link>`, no `@import` |
| fonts (binaries)  | only **2** binaries: `latin` **27,272 B** sha256 `cd8db90cd950…`, `latin-ext` **21,688 B** sha256 `0303e02b53b0…` — **all five weight files of a subset hash identically** ⇒ **one variable cut per subset** |
| type proof        | canvas A/B, `100px "Plus Jakarta Sans"`, string `"Close the books 0194"`: **400 → 1,031**, **500 → 1,028**, **600 → 1,038**, **700 → 1,040**, **800 → 1,042**, **900 → 1,042** (monospace control 1,204.1) ⇒ 400/500/600/700/800 are five genuinely distinct widths **out of one binary per subset**, and **900 clamps to 800** |
| Google Fonts      | `css2?family=Plus+Jakarta+Sans` → **200**, `css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap` → **200** (both usable in the port) |
| classes           | **56** classes in the markup, **56** with at least one rule, **0** phantom modifiers; **1** dead rule — `.cl-icon` (**the twelfth consecutive snippet to carry it**) |
| custom properties | **6** on `.cl-hero01` (`--cl-hero01-accent`, `-ink`, `-muted`, `-line`, `-surface`, `-gutter`), plus `--h` per bar and `--c` per chip in the markup (inline styles) |
| CSS anatomy       | **138** blocks = **11** guard rules (`:where(html) … { …: revert }`, **22** `revert` declarations, 2 of them `all: revert`) + **10** `@font-face` + **84** top-level style rules + **25** more inside media queries + **4** `@media` + **2** `@keyframes` with 1 frame each; width queries **960 / 860 / 560** (3 + 9 + 12 rules) + 1 reduced-motion query, **4** `transition` declarations, **7** gradients, **40** colour literals (**29** distinct), **5** `!important` |
| controls          | **0** `<form>`, **0** `<input>`, **1** `<button type="button">` (the menu), **10** inline `<svg>`, **0** `<img>`                          |
| headings          | **1** `<h1>`, **0** `<h2>` — the page has exactly one heading level                                                            |
| landmarks         | `<header class="cl-hero01__bar">` → `<nav aria-label="Main">`, `<main class="cl-hero01__main">` → `<section aria-labelledby="cl-hero01-title">`; **no** `<footer>`, **no** `<aside>` |
| ids               | **2** — `cl-hero01-nav` (`aria-controls`) and `cl-hero01-title` (`aria-labelledby`); **0** dangling ids |
| anchors           | **10 total, 10 dead `#`** — wordmark, 4 nav links, `Sign in`, header CTA, announcement pill, hero CTA, "Watch 3-min demo". `aria-current="page"` is on *Product* (a demo artefact; the port must move it to the real page) |
| document height   | **900** at 1440 × 900 / 1280 / 1024 / 961 (no scroll at all), **1166** at 960, **1118** at 768, **1104** at 560, **1145** at 390, **1221** at 320 — vertical only, `scrollX` **0** and `scrollWidth === clientWidth` at every width probed |
| screenshot        | `https://colorlib.com/wp/wp-content/uploads/sites/2/hero-01.jpg`, **65,776 B**, **1200 × 972**, a **real progressive JPEG** (unlike most of the catalogue, which serves AVIF behind `.jpg`), and it is a **macOS browser mock-up** — traffic lights, a drop shadow and a `preview.colorlib.com` URL pill around the page. Content matches the live render 1:1. **The `<slug>.jpg`, `<slug>-template.jpg`, `<slug>-free-template.jpg` and `<slug>-featured.jpg` paths all 404**; only the `sites/2/` path is live |

## Page arithmetic at 1440 × 900 (measured, `getBoundingClientRect`)

| element            | box                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------ |
| `.cl-hero01`       | **1440 × 900**; `min-height:100vh`, `overflow:hidden`; bg `#f7f7fb` + 2 radials + dot grid |
| `header` bar-inner | **1240 × 80** at (**100**, 0); `padding: 20px 40px`; `gap: 32`                        |
| `nav`              | **1009.41 × 40** at (290.59, 20) — flex row, links + actions                          |
| `hero` (grid)      | **1240 × 720.78** at (**100**, **129.61**) — `padding: 86.4px 40px 112px`             |
| grid columns       | **518.09** / **569.91** (1 : 1.1 of 1,088 with a 72 px gap)                           |
| copy column        | **518.09 × 497.22** at (140, **228.58**)                                              |
| announcement pill  | **259 × 35.38** at (140, 228.58); the `New` tag **49 × 23.38** at (146, 234.58)        |
| `h1`               | **518.09 × 204.61** at y **285.95** — 65.6 px / 68.224 line box / **3 lines**; margin `22px 0 18px` |
| accent span        | **367.17 × 151.2** — its rect merges **two** line boxes ("not" ends line 2, "weeks." is line 3) |
| `p.sub`            | **518.09 × 85.55** at y **508.56** — 18.4 px, **3 lines**, `max-width: 34em` (= 625.6 px) |
| actions row        | **518.09 × 50** at y **626.11**                                                       |
| hero CTA           | **154 × 50**, radius **12**, `padding: 0 24px`                                        |
| ghost CTA          | **225 × 50** at x **342**, radius **12**, `padding: 0 20px 0 12px`                    |
| trust list         | **518.09 × 21.69** at y **704.11** — one row, `gap: 8px 20px`                          |
| visual column      | **569.91 × 522.39** at (730.09, **216**)                                              |
| mock               | **offset 570 × 522** (rect **592.15 × 542.28**, see transform note)                    |
| mock bar           | **568 × 50** (content 49 + 1 px border-bottom), `padding: 12px 16px`                   |
| mock body          | **568 × 471** = rail **56** + panel **512**                                           |
| icon rail          | **56 × 471**, `padding: 18px 0`, `gap: 14`; logo tile **26 × 26** radius 8, items **22 × 22** radius 7 |
| panel              | **512 × 471**, `padding: 18px 20px 20px`                                              |
| KPI grid           | **472 × 97**, 3 columns **151** each, `gap: 10`, `margin-top: 14`                     |
| KPI tile           | **151 × 97** = `12` padding + label 17 + value 26 + delta 21 + 2 × 1 border, radius **12** |
| chart              | **472 × 150**, `padding: 12`, radius **12**                                            |
| bars               | 12 bars, `gap: 6%`, heights `43, 53, 48, 64, 60, 72, 79, 74, 88, 93, 103, 116` px      |
| transaction rows   | **472 × 38 / 38 / 37**, `padding: 8px 4px`, 1 px `#f0eff6` bottom rule (never on the last) |
| floating toast     | **234 × 62** at (**702.09**, **716.63**) = `left:-28px; bottom:-44px` off the visual    |

## The transform is a measurement trap, not a style detail

`.cl-hero01__mock` carries `transform: perspective(1600px) rotateY(-6deg) rotateX(2deg)` with
`transform-origin: left center` (computed `0px 261.195px`). At 1440 that turns a **570 × 522** box into a
**592.15 × 542.28** rect — **+22.15 px wide, +20.28 px tall (+3.9 %)** — and it does the same to every
descendant: the panel reads **533.84** wide where its `offsetWidth` is **512**, the KPI tiles read **150.6**
where they are **151** boxes minus borders, the chart reads **155.74** where its `height` is **150**. All
arithmetic in this spec uses **offset** sizes; a port that asserts rects will reproduce the *tilt* in its
numbers and then chase 4 % forever.

**The port keeps the tilt** (it is the design) but must not keep the transform on touch: at ≤ 960 it is
`transform:none`, which is also why the gotcha only exists at desktop widths.

## Design tokens — a violet accent on a cool off-white, one ink

| token              | value                                                    | used for                                                        |
| ------------------ | -------------------------------------------------------- | --------------------------------------------------------------- |
| ground             | `#f7f7fb`                                                | `body` and `.cl-hero01` base                                    |
| glow (top right)   | `radial-gradient(60% 60% at 85% 20%, rgba(139,92,246,.16), transparent 70%)` | the violet bloom behind the mock            |
| glow (bottom left) | `radial-gradient(40% 50% at 10% 90%, rgba(91,61,245,.08), transparent 70%)`  | the second, weaker bloom                     |
| dot grid           | `radial-gradient(rgba(18,18,41,.09) 1px, transparent 1px)` / `background-size: 22px 22px`, masked `linear-gradient(180deg,#000,transparent 75%)` | the `::before` texture over the ground |
| accent             | `#5b3df5`                                                | CTA fill, pill tag, logo tile, active bar, focus ring, side-rail active item |
| accent hover       | `#4a2ee0`                                                | CTA `:hover`                                                    |
| accent gradient    | `linear-gradient(92deg, #5b3df5, #9333ea)`               | the `<span>` inside the `h1` (`background-clip:text`)           |
| chart line         | `#9333ea`                                                | the SVG line inside the chart                                   |
| ink                | `#121229`                                                | `h1`, wordmark, nav current link, KPI values, row names          |
| muted              | `#535470`                                                | sub-copy, nav links, pill label, trust list                     |
| line               | `#e6e5f0`                                                | nav pill border, ghost border, KPI/range borders, rails          |
| surface            | `#ffffff`                                                | ghost button, mock card, mobile-menu panel, toast               |
| mock edge          | `#dcd9ec`                                                | the mock's own 1 px border (deeper than `--line`)                |
| mock chrome        | `#fbfbfe`                                                | fake browser bar + icon rail background                          |
| fake URL field     | `#f0eff7` on `#5e5f78`                                   | "app.ledgerwell.io/overview"                                    |
| traffic lights     | `#fda4a4` / `#fcd58a` / `#9fe0b1`                        | the three 10 px dots                                            |
| range chip         | `#55566e` on `#fff`, border `--line`                     | "Last 12 months"                                                |
| rail item          | `#eceaf5`; active `rgba(91,61,245,.22)` + `0 0 0 5px rgba(91,61,245,.08)` | the four placeholder tiles                    |
| delta up           | `#dcfce7` bg / `#166534` text                            | `+12.4%`, `+3 mo`                                               |
| delta down         | `#e0f2fe` bg / `#075985` text                            | `−4.1%` (a **U+2212 minus**, not a hyphen)                      |
| chart ground       | `linear-gradient(180deg,#faf9ff,#f3f1ff)`                | inside the chart panel                                          |
| bars               | `#d9d3fb`, active `#5b3df5`, radius `5 5 2 2`            | the 12 bars                                                     |
| amount chips       | `color-mix(in srgb, var(--c) 12%, #fff)` with `--c` `#16a34a` / `#dc2626` → **`#e3f4e9`** / **`#fbe5e5`** | `In` / `Out` tags                     |
| row rules          | `#f0eff6`                                                | 1 px bottom border on rows 1–2                                  |
| success icon       | `#16a34a`                                                | toast tile + the three trust checkmarks (**icons only**, 3.3 : 1 — decorative) |
| play chip          | `rgba(91,61,245,.1)` + `#5b3df5` glyph                   | the ghost button's 28 px circle                                 |
| CTA shadow         | `inset 0 1px 0 rgba(255,255,255,.25), 0 10px 24px -10px rgba(91,61,245,.7)`; hover `0 14px 28px -12px rgba(91,61,245,.8)` | the primary button |
| mock shadow        | `0 2px 4px rgba(18,18,41,.04), 0 40px 80px -30px rgba(52,34,150,.35)` | the tilted card                                   |
| toast shadow       | `0 20px 40px -18px rgba(18,18,41,.35)`                   | the floating badge                                             |
| menu shadow        | `0 24px 48px -20px rgba(18,18,41,.3)` (≤ 860, open only) | the mobile nav panel                                            |

Radii: pill **999**, mock **18**, mobile menu **16**, toast **14**, CTA / ghost / menu button **12**, small CTA
**10**, nav link + range chip + logo tile **8**, rail item **7**, URL field + `In`/`Out` chip **6**, bar top
**5** / bottom **2**, dots and play circle **50 %**. Borders are **1 px** everywhere in the reference; nothing
in the sheet declares `1.5px` (unlike the alert family).

## Typography — one variable face, five declared cuts

| role              | size / weight / line-height                        | notes                                            |
| ----------------- | -------------------------------------------------- | ------------------------------------------------ |
| `h1`              | `clamp(2.35rem, 1.4rem + 3.6vw, 4.1rem)` → **65.6 px** at ≥ 1440, **800**, `1.04`, `letter-spacing:-.035em` | 3 lines at 1440; `margin: 22px 0 18px` |
| sub               | `clamp(1rem, .95rem + .3vw, 1.15rem)` → **18.4 px**, 400 | `max-width: 34em` (= 625.6 px), muted        |
| wordmark          | **19 px / 800**, `letter-spacing:-.02em`, `gap: 10px` | 28 px inline SVG, `rx=8` tile                 |
| nav link          | **15 px / 500** (current page **600**), `padding: 8px 12px`, radius 8 | muted → ink + `rgba(91,61,245,.07)` on hover |
| sign in           | **15 px / 600**                                    | hover turns accent                               |
| pill label        | **14 px / 500**; the `New` tag **12.5 px / 700**   | pill `padding: 5px 12px 5px 5px`, tag `2px 10px` |
| CTA               | **16 px / 700**, `min-height: 50` (bar: **14.5 px**, `min-height: 40`) | text is `#fff` via `!important` in the source |
| ghost             | **16 px / 600**, `min-height: 50`                  | 28 px play circle, `gap: 10`                     |
| trust             | **14 px / 500**, `gap: 6px` icon-to-label          | 16 px checkmark SVGs                             |
| mock base         | **13 px**                                          | every mock size is `px`, not `rem`               |
| panel title       | **16 px / 700**; range chip **12 px**               |                                                  |
| KPI label         | **11.5 px / 600**, `uppercase`, `letter-spacing:.06em` (= 0.69 px) | muted `#5e5f78`                  |
| KPI value         | **19 px / 800**, `letter-spacing:-.02em`           | `17 px` at ≤ 560                                 |
| KPI delta         | **11.5 px / 700**, `padding: 1px 7px`, radius 6    |                                                  |
| row name          | **13 px / 600**; amount **700** `tabular-nums`      | the amounts use **U+2212** for negatives         |
| toast             | **14 px**, second line **12.5 px**                 | `padding: 12px 16px 12px 12px`                   |

**One family, no fallback drama:** `"Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto,
sans-serif` on `body` and inherited everywhere. The **2 binaries / 10 `@font-face`** split means the source
ships a **variable cut** per subset with five discrete declarations — the port may just load
`css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap` (verified 200) and keep the same five
weights. **No 300, no 900**: 900 clamps to 800 in the source.

## The width ladder

Three width media queries (**960 / 860 / 560**) and three `clamp()`s do everything:

```
gutter              = clamp(16px, 4vw, 40px)          → 16 at ≤400, 4vw between, 40 at ≥1000
hero padding-block  = clamp(32px, 6vw, 88px) … clamp(56px, 8vw, 112px)
column gap          = clamp(32px, 5vw, 72px)
```

| breakpoint | what changes                                                                                                    |
| ---------- | --------------------------------------------------------------------------------------------------------------- |
| **≤ 960**  | grid → one column (`1fr`); `.cl-hero01__copy` gets `max-width: 640`; the mock's transform is **removed**          |
| **≤ 860**  | *when `.is-enhanced`*: menu button `44 × 44` (radius 12) shows, nav becomes an absolute panel 6 px under the bar with a `16` radius and a shadow; *without* `.is-enhanced`: `.bar-inner` and `.nav` simply `flex-wrap` |
| **≤ 560**  | both hero actions go `flex: 1 1 100%`; mock body → one column and the **rail is hidden**; KPIs → 2 columns and the **third is hidden**; chart **150 → 120**; KPI value **19 → 17**; URL text **12 → 11**; the **third transaction row is hidden**; toast `left: 12px; bottom: -40px`; `.cl-hero01__visual` gets `margin-bottom: 24px` |
| reduced motion | every animation and transition inside `.cl-hero01` is `none !important`                                     |

Document height by width (the ladder a port must reproduce): **900** at 1440 / 1280 / 1024 / 961 · **1166** at
960 · 1139 at 861 · **1118** at 768 · 1102 at 561 · **1104** at 560 · 1096 at 480 · **1145** at 390 · **1221** at
320. The single biggest step is the **960** one (+266 px), because the layout goes from two columns to one.

## Where the text folds (measured per character)

| element | 1440 / 1280 | 1024 / 961 | 960 / 768 | 560 | 480 / 390 | 320 |
| ------- | ----------- | ---------- | --------- | --- | --------- | --- |
| `h1`    | `Close the books` / `in hours, not` / `weeks.` | `Close the` / `books in hours,` / `not weeks.` | `Close the books in hours,` / `not weeks.` | same 2 lines | `Close the books in` / `hours, not weeks.` | back to **3**: `Close the books` / `in hours, not` / `weeks.` |
| sub     | 3 lines | 4 lines | **2** lines (640 px copy) | 3 | 3 at 480, **4** at 390 | 4 |
| trust   | 1 row | 1 row | 1 row | 1 row | **2 rows** | 2 rows |
| KPI labels | `MRR` / `NET BURN` / `RUNWAY` | `MRR` wraps to 2 lines at 1024's 116 px tile | 1 line | 1 line | 1 line | 1 line |

Two things worth stating plainly: the **`h1` has two different 3-line wraps** (a wide one at 1440 and a narrow
one at 320) with 2-line layouts **between** them, and the **`sub` folds at 640-content** because the copy
column stops growing at 960 while its `34em` cap (625.6 px) is already satisfied there.

## Contrast (WCAG 2.x, computed from the shipped hexes)

| pair                                            | ratio   | verdict |
| ----------------------------------------------- | ------- | ------- |
| ink `#121229` on ground `#f7f7fb`               | **17.17** | AAA   |
| muted `#535470` on ground `#f7f7fb`             | **6.85**  | AA    |
| muted `#535470` on white                        | **7.32**  | AAA   |
| white on accent `#5b3df5` (CTA, pill tag)       | **6.12**  | AA    |
| ink `#121229` on white (mock chrome)            | **17.6**  | AAA   |
| KPI label `#5e5f78` on white                    | **5.44**  | AA    |
| range chip `#55566e` on white                   | **7.14**  | AA    |
| delta up `#166534` on `#dcfce7`                 | **6.49**  | AA    |
| delta down `#075985` on `#e0f2fe`               | **6.59**  | AA    |
| accent `#5b3df5` on ground (focus ring, ≥ 3 : 1)| **5.73**  | ✓     |
| gradient headline start `#5b3df5` on ground     | **5.73**  | AA (large text needs 3 : 1) |
| gradient headline end `#9333ea` on ground       | **5.04**  | AA    |
| muted on the chart's panel `#f3f1ff`            | **6.56**  | AA    |
| success `#16a34a` on white (checkmarks, toast tile) | **3.3** | icons only — the label beside them carries the meaning |

**Every text pair on this page passes AA**, and the palette is the cleanest in the snippet batch: the lowest
text ratio is the KPI label at **5.44** and the tightest *boundary* is the ghost button's `--line` border at
**1.22** (a decorative edge on a 50 px button whose label is 17.17 : 1 — acceptable, but a port that leans on
that border alone for affordance should darken it to `#c9c3f5`, as its own `:hover` does).

## Behaviour — the mobile menu (the page's only state)

`js/snippet.js` is 40 lines and does one thing: `initMenu()`.

1. Finds `.cl-hero01__bar`, its `.cl-hero01__menu-btn` and the element named by the button's `aria-controls`.
2. Adds **`is-enhanced`** to the bar — this is what turns the CSS mobile mode on. Without JS the class is never
   added and the nav stays in flow, wrapping.
3. `setOpen(true/false)` toggles `is-open`, `aria-expanded="true|false"` and the label
   **"Close menu" / "Open menu"**.
4. Closes on: button click, a click on any link inside the nav, **Escape** (and **returns focus to the button**),
   a click anywhere outside the bar, and `matchMedia('(min-width: 861px)')` turning true.

Measured at 390: closed → `aria-expanded="false"`, nav `display:none`, `getBoundingClientRect()` all zeros;
open → `aria-expanded="true"`, label `Close menu`, nav **358 × 286.19 at (16, 78)**, document stays **1145**
(absolute, so it overlays); Escape → `aria-expanded="false"`, nav `display:none`, `document.activeElement ===
button` ✓.

## Requirements

### Feature: The page skeleton — one viewport, two columns, no second band

#### Scenario: A single 100vh screen with a header and one section

- **GIVEN** the reference at `theme/bootstrap/hero-01/`
- **WHEN** the page renders at ≥ 961 px
- **THEN** there SHALL be exactly one `<header>` (the bar), one `<nav>`, one `<main>` and one `<section>` inside
  it, and **nothing else** before the port's own footer
- **AND** the root SHALL be `min-height: 100vh` with `overflow: hidden`, so the document does **not** scroll at
  1440 × 900 (`scrollHeight === 900`)
- **AND** there SHALL be no `<h2>`, no `<form>`, no `<input>` and no `<img>` anywhere on the page

#### Scenario: The ground is three layers, not one colour

- **GIVEN** `body { background: #f7f7fb }`
- **WHEN** the hero paints
- **THEN** it SHALL stack `radial-gradient(60% 60% at 85% 20%, rgba(139,92,246,.16), transparent 70%)` and
  `radial-gradient(40% 50% at 10% 90%, rgba(91,61,245,.08), transparent 70%)` over `#f7f7fb`
- **AND** a `::before` overlay SHALL draw a **1 px dot grid on a 22 px pitch** in `rgba(18,18,41,.09)`, masked by
  `linear-gradient(180deg,#000,transparent 75%)` so the dots fade out by the lower quarter
- **AND** the overlay SHALL be `pointer-events: none`

#### Scenario: The section is centred by the flex parent, not by its padding

- **GIVEN** `main { display:flex; flex:1; align-items:center }`
- **WHEN** measured at 1440 × 900
- **THEN** the section box SHALL be **1240 × 720.78 at (100, 129.61)** = `80` (bar) + `(820 − 720.78)/2`
- **AND** its padding SHALL be `clamp(32px,6vw,88px) clamp(16px,4vw,40px) clamp(56px,8vw,112px)`, which is
  **86.4 / 40 / 112** at 1440

#### Scenario: A 1 : 1.1 split with a clamp gap

- **GIVEN** the hero grid
- **WHEN** measured at 1440
- **THEN** the columns SHALL be `minmax(0,1fr) minmax(0,1.1fr)` → **518.09** and **569.91** of 1,088 px
- **AND** the gap SHALL be `clamp(32px,5vw,72px)` = **72**

### Feature: The header bar

#### Scenario: Wordmark, four links, sign-in, one primary button

- **GIVEN** the bar
- **WHEN** it renders at 1440
- **THEN** it SHALL be **1240 × 80** at (100, 0), `padding: 20px 40px`, `gap: 32`, logo → nav → actions in that
  order
- **AND** the wordmark SHALL be a `19px/800` label with a **28 px inline SVG tile** (`rect rx=8`,
  `fill: currentColor` in `#5b3df5`) and a 10 px gap
- **AND** the four links SHALL be `15px/500` in `#535470`, `padding: 8px 12px`, radius **8**, hover → ink on
  `rgba(91,61,245,.07)`; the current page SHALL be `600` weight ink with `aria-current="page"`
- **AND** `Sign in` SHALL be `15px/600`; the bar CTA SHALL be **105 × 40**, radius **10**, `14.5px/700` — a
  **smaller** button than the hero's, with the same class name in the source

#### Scenario: The menu button exists only when the script runs

- **GIVEN** the CSS `@media (max-width: 860px)` block, which only targets `.is-enhanced`
- **WHEN** the viewport is 860 or narrower
- **THEN** with the script loaded the bar SHALL show a **44 × 44** button (1 px `#e6e5f0` border, radius 12)
  and hide the nav behind it
- **AND** without the script the bar SHALL keep the nav in flow, `flex-wrap`-ing the links and actions — the port
  SHALL preserve this no-JS fallback (a nav hidden purely in CSS is a regression)

#### Scenario: Open, close, Escape, outside click, resize

- **GIVEN** the menu button at 390
- **WHEN** it is activated
- **THEN** the panel SHALL open as an absolute card under the bar — **358 × 286.19 at (16, 78)** — with radius
  **16**, `padding: 10`, `gap: 8`, shadow `0 24px 48px -20px rgba(18,18,41,.3)`, links `16px` at `padding: 12`
- **AND** `aria-expanded` SHALL track state, the label SHALL read `Close menu` / `Open menu`
- **AND** Escape SHALL close it **and move focus back to the button**; an outside click SHALL close it; a link
  click SHALL close it without navigating (all ten hrefs are `#` in the source — the port gives them real
  destinations)
- **AND** crossing to ≥ 861 px SHALL close it

### Feature: The copy column

#### Scenario: An announcement pill, a gradient headline, a sub, two actions, three proofs

- **GIVEN** the copy column at 1440
- **WHEN** it renders
- **THEN** the pill SHALL be **259 × 35.38** — radius **999**, 1 px `#e6e5f0`, `rgba(255,255,255,.8)` fill — with a
  `New` tag (`49 × 23.38`, `12.5px/700`, accent fill, white text) and a trailing 14 px chevron
- **AND** the `h1` SHALL be **65.6px/800**, line-height **1.04**, `letter-spacing: -.035em`, `margin: 22px 0
  18px`, **3 lines** at 518 px
- **AND** the second part of the headline SHALL be an **inline `<span>`** painted by
  `linear-gradient(92deg,#5b3df5,#9333ea)` with `background-clip:text` and `-webkit-text-fill-color:transparent`
- **AND** the sub SHALL be `18.4px/400` in `#535470`, `max-width: 34em`, **3 lines** at 518 px
- **AND** the actions SHALL be a **154 × 50** primary (accent, radius 12, shadow
  `inset 0 1px 0 rgba(255,255,255,.25), 0 10px 24px -10px rgba(91,61,245,.7)`) and a **225 × 50** ghost
  (white, 1 px `#e6e5f0`, radius 12, a 28 px `rgba(91,61,245,.1)` play circle), `gap: 12`
- **AND** the trust list SHALL be one row of three items, `14px/500` muted, `gap: 8px 20px`, each led by a
  **16 px `#16a34a` checkmark**, `margin-top: 28`

#### Scenario: The headline wraps twice as three lines

- **GIVEN** the measured character folds
- **WHEN** the viewport is 1440, 1024, 960, 480 and 320
- **THEN** the lines SHALL be `Close the books / in hours, not / weeks.` at **1440**;
  `Close the / books in hours, / not weeks.` at **1024**; `Close the books in hours, / not weeks.` at **960**;
  `Close the books in / hours, not weeks.` at **480**; and **3 lines again** at **320**
- **AND** the port SHALL NOT assume "narrower means more headline lines" — the 960 step *reduces* them

### Feature: The dashboard mock — HTML and CSS, zero images

#### Scenario: Frame, rail, panel

- **GIVEN** the visual column (**569.91 × 522.39 at (730.09, 216)**)
- **WHEN** the mock renders at 1440
- **THEN** its box SHALL be **570 × 522** (`offsetWidth/offsetHeight`) with 1 px `#dcd9ec`, radius **18**,
  `overflow: hidden`, shadow `0 2px 4px rgba(18,18,41,.04), 0 40px 80px -30px rgba(52,34,150,.35)`
- **AND** it SHALL be `perspective(1600px) rotateY(-6deg) rotateX(2deg)` with `transform-origin: left center`,
  computed `transform:none` at ≤ 960
- **AND** the fake browser bar SHALL be **568 × 50**, `#fbfbfe`, `padding: 12px 16px`, three **10 px** dots
  (`#fda4a4`, `#fcd58a`, `#9fe0b1`), and a **max 260 px** URL field (`#f0eff7` on `#5e5f78`, radius 6, `12px`)
- **AND** the body SHALL be a grid `56px 1fr`: a rail (`#fbfbfe`, 1 px right border, `padding: 18px 0`,
  `gap: 14`) with a 26 px active tile and four 22 px placeholders, then the **512** px panel
  (`padding: 18px 20px 20px`)

#### Scenario: Three KPIs, a chart, three rows

- **GIVEN** the panel
- **WHEN** measured at 1440
- **THEN** the KPI grid SHALL be **472 × 97**, three **151** px tiles, `gap: 10`, `margin-top: 14`, each radius
  **12** with a 1 px border and `12` padding, label `11.5px/600` uppercase `+.06em` in `#5e5f78`, value
  `19px/800`, delta a `1px 7px` pill radius 6 (`+12.4%` `#166534` on `#dcfce7`; `−4.1%` `#075985` on `#e0f2fe`,
  **U+2212**)
- **AND** the chart SHALL be **472 × 150**, radius 12, `padding: 12`, `linear-gradient(180deg,#faf9ff,#f3f1ff)`,
  holding **12 bars** (`gap: 6%`, radius `5 5 2 2`, `#d9d3fb`, the last `#5b3df5`, heights from `--h` at
  34/42/38/51/48/57/63/59/70/74/82/**92** %) and an **absolutely positioned** SVG polyline over them
  (`inset: 12px`, `color:#9333ea`, `stroke-width:2.5`, `vector-effect:non-scaling-stroke`, `preserveAspectRatio:none`)
- **AND** three transaction rows SHALL follow (38 / 38 / 37 px, `padding: 8px 4px`, 1 px `#f0eff6` bottom rule on
  rows 1–2 only), each an `In`/`Out` chip **34 px** wide in `color-mix(in srgb, var(--c) 12%, #fff)`, a flex-1
  name (`13px/600`), and a `tabular-nums` **700** amount

#### Scenario: The mock is one accessible image, not a wall of text

- **GIVEN** a dashboard that exists only as decoration
- **WHEN** assistive tech reads the page
- **THEN** the mock SHALL be a single `role="img"` with an `aria-label` naming the numbers it shows
  (the source's: *"Tallyhive dashboard preview: monthly recurring revenue of $84,210, up 12.4 percent, with a
  revenue chart and recent transactions"*)
- **AND** every one of the **10** inline SVGs SHALL be inside an `aria-hidden="true"` subtree
  (**8** carry it themselves; the hero SVG spans sit inside `.cl-hero01__play` and `.cl-hero01__float`, which are
  the two `aria-hidden` non-SVG elements)
- **AND** the bars SHALL NOT be exposed as a table or list

### Feature: The floating toast

#### Scenario: One badge, two lines, hung off the mock's corner

- **GIVEN** the visual column
- **WHEN** at ≥ 561 px
- **THEN** the toast SHALL be **234 × 62** at `left: -28px; bottom: -44px` of the visual box — measured
  (702.09, 716.63) at 1440 — white, 1 px `#e6e5f0`, radius **14**, `padding: 12px 16px 12px 12px`,
  shadow `0 20px 40px -18px rgba(18,18,41,.35)`
- **AND** it SHALL hold a **34 × 34** radius-10 `#16a34a` tile with a 16 px white check, a `14px` bold line
  and a `12.5px` muted line
- **AND** at ≤ 560 it SHALL move to `left: 12px; bottom: -40px`
- **AND** the port SHALL fix the reference's **5.56 px clip** at 561–699 (the negative `left` meets
  `overflow:hidden` on a gutter below 28 px) by clamping `left` to `max(-28px, calc(28px - var(--gutter)))`

### Feature: Motion, and its off switch

#### Scenario: Bars grow once, the toast bobs forever (until reduced motion)

- **GIVEN** `@keyframes cl-hero01-grow` (`from { transform: scaleY(.1) }`) and `@keyframes cl-hero01-float`
  (`50% { translateY(-8px) }`)
- **WHEN** the page loads
- **THEN** each bar SHALL scale from 10 % to its `--h` over **0.9 s** `cubic-bezier(.2,.8,.2,1) both`, with the
  last six delayed **0.15 s**
- **AND** the toast SHALL bob on a **5 s** `ease-in-out` infinite loop
- **AND** under `prefers-reduced-motion: reduce` both SHALL be `animation: none` (verified: `animationName` is
  `none` on both, and the bars still render at their `--h` height)
- **AND** the four `transition`s (nav link colour/background, CTA transform/shadow/colour, ghost border-colour,
  menu button) SHALL all be **200 ms** and SHALL also be suppressed under reduced motion

### Feature: Responsive ladder and overflow

#### Scenario: Three media queries, three clamps, no surprises

- **GIVEN** the reference's only width steps — **960**, **860**, **560**
- **WHEN** the page is measured from 320 to 1440
- **THEN** at ≤ 960 the grid SHALL be one column, `.copy` capped at **640**, and the mock untilted
- **AND** at ≤ 860 the enhanced bar SHALL become the menu mode described above
- **AND** at ≤ 560 both hero actions SHALL be full-width, the rail and the third KPI and the third row SHALL be
  hidden, the KPI grid SHALL drop to two columns, the chart to **120**, and the toast SHALL reposition
- **AND** the document height SHALL follow **900 / 1166 / 1118 / 1104 / 1145 / 1221** at
  1440 / 960 / 768 / 560 / 390 / 320

#### Scenario: No horizontal overflow, ever

- **GIVEN** any width from 320 to 1440
- **WHEN** the page is scrolled horizontally
- **THEN** `scrollX` SHALL stay **0** and `scrollWidth` SHALL equal `clientWidth`
- **AND** the untilted mock SHALL never exceed its column (the source's own mock is **570** in a **569.91** column,
  i.e. 0.09 px of rounding, never a scrollbar)

### Feature: Repo integration

#### Scenario: Wiring

- **GIVEN** the monorepo
- **WHEN** the app is created
- **THEN** it SHALL live at `apps/proscenium`, package `@free-react-templates/proscenium`,
  `public/CNAME` = `proscenium.free.componentdock.com`, `"homepage"` = `https://proscenium.free.componentdock.com`
- **AND** it SHALL reuse `packages/ui` where a component exists (button primitives, `cn()`)
- **AND** no app file SHALL mention `colorlib`, `hero-01`, "Tallyhive" or any other source string

#### Scenario: The footer is the port's only addition

- **GIVEN** the source has no footer
- **WHEN** the port adds one
- **THEN** it SHALL be a plain `<footer>` **below** the hero band, carrying the mandatory
  `https://www.componentdock.com/` ("Component Dock") link
- **AND** it SHALL NOT add a features grid, a testimonial band, a pricing table, a second CTA or a nav column —
  the reference is one screen and the port stays one screen plus a footer

#### Scenario: The `TEMPLATES.md` row

- **GIVEN** `TEMPLATES.md` has no `## Bootstrap Heroes` section
- **WHEN** the template ships
- **THEN** the row SHALL be the **first** entry of a `## Bootstrap Heroes (12)` section inserted between
  `## Bootstrap Footers (20)` and `## Bootstrap Modals (20)`
- **AND** the row SHALL read `- [x] **Hero 01** — [colorlib](https://colorlib.com/wp/template/hero-01/) ·
  ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-01.jpg) ·
  [proscenium](https://proscenium.free.componentdock.com)`

## Adapting to the repo (deltas — read before writing code)

**Copy.** The reference's invented brand SHALL NOT appear. Use these replacements:

| source                                       | port                                                    |
| -------------------------------------------- | ------------------------------------------------------- |
| "Tallyhive" (wordmark + sub)                 | **"Ledgerwell"** (`git grep -il ledgerwell` → 0)         |
| `app.tallyhive.io/overview`                  | `app.ledgerwell.io/overview`                            |
| headline `Close the books in hours, not weeks.` | **keep** — no brand in it, and the fold tables above are keyed to it |
| sub, pill, trust list, KPI labels/values, row names | **keep** (generic finance copy, no brand)      |
| `Invoice #1042 paid` / `Reconciled automatically` | **keep**                                           |

If the port changes any of those strings it MUST re-measure the fold table (h1 3/3/2/2/3, sub 3/4/2/3/4) and
update the spec, because the wrap points are content widths, not viewport truths.

**Structure → React.** `App` → `<SiteHeader>` (wordmark, `<nav>` links, sign-in, small CTA, `useDisclosure`-style
`useMobileMenu` hook that reproduces `setOpen` + Escape + outside click + 861 px media listener) →
`<HeroCopy>` (pill, `h1` with an inline `<GradientSpan>`, sub, actions, trust list) →
`<DashboardMock>` (composed of `MockChrome`, `MockRail`, `KpiTile`, `RevenueChart`, `TransactionRow`) →
`<FloatingToast>`. The 12 bar heights are **data** (`number[]` of percentages), never 12 hard-coded spans; the
three transactions are an array of `{ chip, chipColor, name, amount }`. One `apps/proscenium/src/data/hero.ts`
keeps the copy out of JSX so the fold assertions are cheap.

**Tokens.** Put the palette in `@theme`: `--color-ground: #f7f7fb`, `--color-accent: #5b3df5`,
`--color-accent-hover: #4a2ee0`, `--color-accent-2: #9333ea`, `--color-ink: #121229`,
`--color-muted: #535470`, `--color-line: #e6e5f0`, `--color-surface: #fff`, `--color-mock-edge: #dcd9ec`,
`--color-mock-chrome: #fbfbfe`; radii `--radius-mock: 18px`, `--radius-cta: 12px`. The ink/ground/line trio maps
cleanly onto Tailwind's own scale if you prefer utilities (`slate-950`-ish ink is not the same value — use the
hexes).

**Prescribed fixes (all four are behavioural, not cosmetic).** (1) Give the ten anchors real destinations — the
source's are all `#`, including the wordmark; a marketplace demo should link the nav to real pages or to
`sections` that exist. (2) `aria-current="page"` belongs on the page the visitor is on, not permanently on
*Product*. (3) Add a `<footer>` with the Component Dock link (the reference has none). (4) Clamp the toast's
`left` so the 561–699 px band is not clipped.

**Do not port:** the `:where(html) … { …: revert }` guard block (**22** `revert` declarations — Tailwind's
preflight already does this), the dead `.cl-icon` rule, the five `!important`s (**three** of them work around
`.cl-hero01 a { color: inherit }` beating `.cl-hero01__cta`; a port should style the button component instead),
the `content` duplication in the trust `<li>`s, the macOS screenshot frame, or the source's `#` anchors.

## Verification checklist

- [ ] `apps/proscenium` exists, package `@free-react-templates/proscenium`, `public/CNAME` =
      `proscenium.free.componentdock.com`, `"homepage"` = `https://proscenium.free.componentdock.com`
- [ ] `npm run verify:app proscenium` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-proscenium --type spec` is valid
- [ ] measured at 1440 × 900: bar **1240 × 80** at (100, 0); section **1240 × 720.78** at (100, 129.61);
      columns **518.09 / 569.91**; copy at (140, 228.58); pill **259 × 35.38**; `h1` **204.61** tall at y 285.95
      (65.6 px, 3 lines); sub **85.55** at y 508.56; actions **50** at y 626.11; trust at y 704.11; visual
      **569.91 × 522.39** at (730.09, 216); toast **234 × 62** at (702.09, 716.63)
- [ ] mock `offsetWidth/offsetHeight` = **570 × 522** (never assert the transformed **592.15 × 542.28** rect);
      rail **56**, panel **512**, KPIs **472 × 97** in three **151** tiles, chart **472 × 150**, rows
      **38 / 38 / 37**
- [ ] tokens exact: ground `#f7f7fb` + the two radial blooms + the 22 px dot grid at `rgba(18,18,41,.09)`;
      accent `#5b3df5` (hover `#4a2ee0`); gradient `92deg #5b3df5 → #9333ea`; ink `#121229`; muted `#535470`;
      line `#e6e5f0`; mock edge `#dcd9ec`; chrome `#fbfbfe`; deltas `#166534/#dcfce7` and `#075985/#e0f2fe`
- [ ] the headline's accent is an **inline span** with `background-clip:text` that still wraps inside the `h1`
- [ ] the two CTAs are different sizes (bar **40** / radius 10 / 14.5 px; hero **50** / radius 12) — do not let a
      shared `.cl-hero01__cta`-style class collapse them
- [ ] the mock tilts only at ≥ 961 (`perspective(1600px) rotateY(-6deg) rotateX(2deg)`, origin left centre) and
      is `transform: none` below
- [ ] behaviour: `is-enhanced` only when JS runs (no-JS nav wraps and stays visible); button **44 × 44** at ≤ 860;
      panel **358 × 286.19** at 390; `aria-expanded` tracked; label swaps; **Escape returns focus to the button**;
      outside click and link click close; ≥ 861 px closes
- [ ] motion: bars `0.9 s` with the last six delayed `0.15 s`; toast `5 s` infinite; both `none` under
      `prefers-reduced-motion` (bars still at their `--h` height); four `200 ms` transitions
- [ ] width ladder: **960** single column + `max-width: 640` copy + untilted mock; **860** menu mode; **560**
      full-width actions, hidden rail / third KPI / third row, 2-column KPIs, chart **120**, toast at
      `left: 12px`
- [ ] document heights **900 / 1166 / 1118 / 1104 / 1145 / 1221** at 1440 / 960 / 768 / 560 / 390 / 320
- [ ] folds: `h1` 3 / 3 / 2 / 2 / 3 lines at 1440 / 1024 / 960 / 480 / 320; sub 3 / 4 / 2 / 3 / 4
- [ ] no horizontal overflow from 320 to 1440 (`scrollX` 0, `scrollWidth === clientWidth`); the toast is not
      clipped in the 561–699 band
- [ ] exactly 1 `<h1>`, **0** `<h2>`, **0** `<img>`, **0** `<form>`, **0** `<input>`, 1 `<button>`; the mock is a
      single `role="img"` with a label that names its numbers; all 10 SVGs are inside `aria-hidden` subtrees
- [ ] type: Plus Jakarta Sans **400 / 500 / 600 / 700 / 800** only (one Google Fonts `css2` request, no local
      `woff2`, no 300, no 900)
- [ ] no occurrence of `colorlib`, `hero-01`, `Tallyhive` in any app file; the Component Dock link is in a real
      `<footer>` **below** the hero
- [ ] `TEMPLATES.md` carries the `Hero 01` row as the first entry of a new `## Bootstrap Heroes (12)` section
      between `## Bootstrap Footers (20)` and `## Bootstrap Modals (20)`
- [ ] `curl -I https://proscenium.free.componentdock.com` → 200, `ssl_verify_result=0`
