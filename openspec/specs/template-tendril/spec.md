# Template: Tendril (Hero — an app-landing hero with a two-tone headline and a two-phone product mock)

## Purpose

**One full-height app-landing hero for a habit tracker** — the fourth variant of the `hero` snippet family, and
the family's first *product-shot* entry since Proscenium: a mint gradient ground, a marked wordmark with a pill
nav, a rating line, a two-tone display headline (**ink** then **green**, both 800 weight), a short paragraph, two
dark store buttons, a three-item fact row, and then a **pair of CSS-drawn phones** — one upright with a habit
list, one rotated 8° behind it showing a 42-day streak — standing on a 440 px lime disc, with a white
"🎉 42-day streak!" toast floating over their left edge.

There is **no photography and no `<img>` at all**: the whole product shot is divs, spans, two inline SVGs per
store badge, a conic-gradient ring, a data-URI checkmark and a `--v`-driven bar chart. The page carries **one**
script (`js/snippet.js`, 1,363 B) and it does exactly one job: turn the nav into a disclosure menu below 861 px.

At 1440 × 900 the document is **exactly 900 px** — zero scroll, like the family's third variant, and for the
same reason: `min-height:100vh` on the root with the hero centred inside a `flex:1` main.

- **Source slug:** `hero-04`
- **ColorLib page:** https://colorlib.com/wp/template/hero-04/ — **HTTP 200, 113,880 B**, `<title>`
  `Hero V04 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V04"**,
  `datePublished` **2026-09-25T15:08:59+00:00**, meta description *"A mobile-app landing hero for a habit
  tracker, with a rating line, a two-tone headline, short copy, two generic… Free download, no jQuery or
  plugins."*, and the claim *"the download is 376 KB"* (measured **385,195 B = 376.2 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V04".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-04/ — **HTTP 200,
  6,279 B**, `<title>` `Hero V04 | Colorlib`, `lang="en"`, **one** stylesheet
  (`css/style.css?v=a4de6ffa`, `fetchpriority="high"`) and **one** `<script src="js/snippet.js?v=74382b2d">`.
  The slug-only path `theme/hero-04/` is **404 (9 B)** and `theme/bb/hero-04/` is **404 (9 B)**: the
  `bootstrap/` prefix is the only live path, exactly as for the card, alert and earlier hero variants.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-04.jpg — **HTTP 200, 37,231 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name (third of the family's four; only the third variant
  was a real JPEG). It is a **macOS browser mock-up** on a grey ground with a drop shadow and a
  `preview.colorlib.com` URL pill; the page inside the frame is **~1120 px** wide.
- **Design category:** Hero (**app-landing hero — mint radial/linear gradient, 800-weight two-tone headline,
  two-phone CSS mock over a lime disc, floating toast**; variant 4 of the **12**-variant `hero` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/tendril`, package
  `@free-react-templates/tendril`, CNAME `tendril.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` on main `3a169ea6e` is fully `[x]` — **0** `- [ ]`, **0** `[~]` rows (the only `[~]` is the status
legend on line 12), **2,911** rows — so this design comes from `docs/catalog-coverage.md`: designs on colorlib.com's
own listing that the checklist never recorded.
`hero-04` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that gap are all
prepped, the card (20) and alert (12) families are complete, and the hero family is in progress. Families are
worked **in family order, then variant number** — this is **variant 4 of 12**, the family's first with a
**product mock made of two phones** and its first with a **real disclosure menu**.

## Bootstrap Heroes (12)

`TEMPLATES.md` on main `3a169ea6e` holds `## Bootstrap Heroes (12)` at **line 830**, between
`## Bootstrap Footers (20)` (last row line 828) and `## Bootstrap Modals (20)` (line 835), with **two** rows —
`Hero 01` → proscenium (line 832) and `Hero 02` → afterglow (line 833). The third variant is prepped but not
written yet, so this prep's row is currently the section's **third** entry and becomes the fourth once it lands:

```markdown
## Bootstrap Heroes (12)

- [x] **Hero 01** — [colorlib](https://colorlib.com/wp/template/hero-01/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-01.jpg) · [proscenium](https://proscenium.free.componentdock.com)
- [x] **Hero 02** — [colorlib](https://colorlib.com/wp/template/hero-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-02.jpg) · [afterglow](https://afterglow.free.componentdock.com)
- [x] **Hero 03** — [colorlib](https://colorlib.com/wp/template/hero-03/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-03.jpg) · [presswork](https://presswork.free.componentdock.com)
- [x] **Hero 04** — [colorlib](https://colorlib.com/wp/template/hero-04/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-04.jpg) · [tendril](https://tendril.free.componentdock.com)
```

Row grammar, verified on `3a169ea6e`: the section's rows are `[colorlib] · ![preview] · [app]` — **preview in the
middle**, matching the Footers section above it (Modals rows below use the opposite order). Insert `Hero 04`
**after** whichever hero rows exist at that moment, keep that grammar, and **re-read the surrounding lines
immediately before pushing** — two implementer streams write this file, and the row count changed twice while
this prep was being written.

**The name.** `tendril` — one lowercase word for the young shoot a climbing plant puts out to find its hold:
growth in small, repeated increments, which is what a habit tracker sells. It keeps the snippet families'
closed-single-word pattern. Verified free on main `fa0e89d89`: `git grep -il tendril` → **0 files**;
`git ls-tree -r origin/main | grep -c tendril` → **0**; no `apps/tendril`; no
`openspec/specs/template-tendril`; no `docs/templates/tendril`; and
`colorlib.com/wp/template/tendril/` (**404**), `preview.colorlib.com/theme/tendril/` (**404**),
`preview.colorlib.com/theme/bootstrap/tendril/` (**404**) all miss.

Checked and **free** for later variants of this family: **`habitrail`**, **`tallybook`**, **`morningly`**,
**`dailylight`**, **`wellheld`**. Rejected on measurement: `daymark` (cited in a shipped spec), `curfew` and
`keepsake` (app copy), `notch` (67 files), `ritual` (74), `morrow` (99 — every "tomorrow").

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium, motion disabled)

| what              | value                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 6,279 B** live (**6,076 B** inside the archive), `<title>` "Hero V04 \| Colorlib", `lang="en"`, **one** stylesheet, **one** `<script>` |
| preview path      | **`theme/bootstrap/hero-04/`**; `theme/hero-04/` **404** (9 B), `theme/bb/hero-04/` **404** (9 B)                                            |
| stylesheet        | `css/style.css?v=a4de6ffa`, **17,070 B**, **808** lines, sha256 `da7d13d74f6599bf…` (**identical** in the archive)                          |
| script            | `js/snippet.js?v=74382b2d`, **1,363 B**, sha256 `62165aac55010cf5…` (**identical** in the archive); **39** lines, one IIFE, menu only        |
| archive           | `preview.colorlib.com/downloads/free/hero-04.zip`, **200, 385,195 B** (= 376.2 KiB ✓ the page's "376 KB"), **16 entries** = 4 dirs + **12 files** |
| archive contents  | `index.html` 6,076 B, `css/style.css` 17,070 B, `js/snippet.js` 1,363 B, `README.md` 1,260 B, `fonts/` **8 files**, nothing else               |
| live ↔ archive    | CSS **and** JS **identical sha256**; the two HTML files differ **only in the `<head>`** (robots pair, cdnjs `dns-prefetch`, `fetchpriority`, `?v=`) → **live preview verified; the archive is its un-versioned twin** |
| README            | advertises an `images/` folder — **it does not exist** (no `<img>`, no `images/`, every graphic is CSS or inline SVG). Its `js/snippet.js` claim is true here, unlike the two previous variants; **fourth variant in a row with at least one false file claim** |
| inner pages       | **none** — `index.html` is **200, 6,279 B** = **byte-identical** to the directory URL (`sha256 39b66ebe…` both ways); `about.html`, `features.html`, `stories.html`, `help.html`, `pricing.html` → **404 (9 B)**; one HTML file in the archive |
| fonts (declared)  | **8** `@font-face`, all **DM Sans**, weights **400 / 500 / 700 / 800**, each × subsets `latin` / `latin-ext`; no Google Fonts `<link>`, no `@import` |
| fonts (binaries)  | only **2 distinct** files — `latin` **62,556 B** sha256 `aa530716b0d35186…` and `latin-ext` **31,312 B** sha256 `0d0609aee778d21b…`; the 8 files are those two copied under four weight names, and **both are variable fonts** (woff2 table directory carries `fvar`, `HVAR`, `MVAR`, `avar`) |
| type proof        | canvas A/B, `100px "DM Sans"`, string `"Small habits, tracked kindly."`: **≤400 → 1,134**, **450–500 → 1,175**, **600–700 → 1,252**, **750–900 → 1,264** ⇒ Chrome instances the variable axis **per declared weight**, so the four declared weights are four real renderings out of two files; `"Loop Plus"` agrees (398 / 407 / 425 / 427) |
| Google Fonts      | `css2?family=DM+Sans:wght@400..800&display=swap` → **200**; the static form `css2?family=DM+Sans:wght@400;500;700;800` → **200**; the `opsz` form `css2?family=DM+Sans:opsz,wght@9..40,400..800` → **200** |
| classes           | **45** `cl-*` classes in the markup, **all 45** with at least one rule; **1** dead rule — `.cl-icon` (**the fifteenth consecutive snippet to carry it**); **2** state classes in the markup (`is-done` ×3, `is-today` ×1) that have **no rule of their own** and only work as descendants; **2** more (`is-enhanced`, `is-open`) exist only in CSS and are added by the script |
| custom properties | **6** on `.cl-hero04` — `--cl-hero04-bg` `#e9f4ee`, `--cl-hero04-ink` `#0f2e22`, `--cl-hero04-muted` `#3d5a4d`, `--cl-hero04-green` `#127a4f`, `--cl-hero04-lime` `#c6f36b`, `--cl-hero04-gutter` `clamp(16px,4vw,40px)`; 30 `var()` reads |
| CSS anatomy       | **119** `{` blocks (8 `@font-face` + **1** `@keyframes` + **3** width queries + reduced motion + style rules); queries **960 / 860 / 520**; **23** `revert` declarations in the `:where(html)` guard block; **5** `!important` (2 in the reduced-motion kill switch, `.cl-hero04__store` colour, `.cl-hero04__facts` margin-top, `.cl-hero04__habits` margin-top); **3** `transition` declarations; **4** `animation` declarations (2 live + 2 in the override); **3** gradients (linear ground, radial halo, conic ring); **39** hex literals / **25** distinct colours, **6** `rgba()` |
| controls          | **0** `<form>`, **0** `<input>`; **1** `<button>` (the menu toggle); **5** inline `<svg>` (logo mark, menu open, menu close, two store icons), **0** `<img>`; **7** `<a>`, **all seven `href="#"`** |
| headings          | **1** `<h1>` ("Small habits, tracked kindly."), **0** `<h2>`                                                                                  |
| landmarks         | `<header class="cl-hero04__bar">` → `<nav aria-label="Main">`; `<main>` → **one** `<section aria-labelledby>`; **no** `<footer>`, **no** `<aside>` |
| ids               | **2** — `cl-hero04-nav` (the menu button's `aria-controls` target) and `cl-hero04-title` (`aria-labelledby`)                                  |
| initial document  | **900** at 1440 × 900 and every width from 1440 down to **961**; **1210** at 960 (the stack); not monotonic below that (see the ladder)       |
| reduced motion    | `@media (prefers-reduced-motion: reduce)` sets `animation:none !important; transition:none !important` on every descendant and pseudo-element — both phones and the toast freeze in place, nothing is removed |

## Design tokens

Extracted from `css/style.css` (canonical over the screenshot) and re-measured off the live render. The
palette is **25 colours**, not the six custom properties: the phones' inner screens carry their own neutrals.

| role                    | value                          | where it is measured                                                        |
| ----------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| ground (page)           | `#e9f4ee`                      | `body` background, `--cl-hero04-bg`                                          |
| ground (gradient top)   | `#f3faf6`                      | `linear-gradient(180deg, #f3faf6, #e9f4ee)` on `.cl-hero04`                   |
| halo (radial)           | `#c9ecd8`                      | `radial-gradient(50% 60% at 78% 55%, #c9ecd8 0%, transparent 70%)`            |
| ink                     | `#0f2e22`                      | headline, logo, score chip, nav pill's current link, `.screen--stats` bg      |
| muted                   | `#3d5a4d`                      | paragraph, rating line, facts, idle nav links                                |
| green (accent)          | `#127a4f`                      | headline's second line, fact dots, done checkboxes, ring arc, focus ring      |
| lime                    | `#c6f36b`                      | 440 px halo disc, logo mark glyph, streak numeral, week bars                  |
| phone black             | `#0b0f0d`                      | both phone bodies, notch, store buttons                                      |
| phone rim               | `#2c3a33`                      | `box-shadow: 0 0 0 2px #2c3a33 inset` on the phone body                      |
| store hover             | `#1d2a24`                      | `.cl-hero04__store:hover` background                                         |
| screen white            | `#fbfdfb`                      | front phone screen                                                           |
| day cell                | `#eef5f0` / text `#45604f`     | the five weekday cells; today's cell is `ink` with `#cfe5d8` label           |
| ring well               | `#e6f7ea`                      | `.ring-wrap` background and the ring's inner disc                            |
| ring track              | `#cfe8d7`                      | `conic-gradient(green 71%, #cfe8d7 0)`                                       |
| habit card              | `#fff` / border `#e3ece6`      | the five habit rows                                                          |
| habit done              | `#54705f`, strike `#9ab8a5`    | `.is-done` text and its `text-decoration-color`                              |
| checkbox                | border `#b7cdbf`               | the 18 px empty square (2 px border, radius 6)                               |
| avatar                  | `#fde68a` / `#713f12`          | the 30 px "P" chip                                                           |
| stars                   | `#b45309`                      | the five `★` glyphs, `letter-spacing: 2px`                                   |
| stats screen text       | `#d6ebe0`                      | labels and weekday initials on the dark screen                               |
| font family             | `"DM Sans"`                    | everything, one family, no serif anywhere                                    |
| radii                   | 999 / 44 / 34 / 22 / 18 / 16 / 14 / 12 / 11 / 8 / 6 px | pills and the notch / phone body / screen / open menu panel / ring well / toast / store + habit + menu button / day cell / logo mark / score chip / checkbox |
| shadows                 | 3                              | store `0 12px 24px -12px rgba(11,15,13,.6)`; phone `0 40px 70px -30px rgba(15,46,34,.6)`; toast `0 18px 40px -16px rgba(15,46,34,.45)`; menu panel `0 24px 48px -18px rgba(15,46,34,.35)` |
| gutter                  | `clamp(16px, 4vw, 40px)`       | 40 at ≥1000, 38.44 at 961, 20.84 at 521, 16 at ≤400                          |
| display type            | `clamp(2.6rem, 1.2rem + 5vw, 5.2rem)` | 83.2 px at 1440, 70.4 at 1024, 51.2 at 640, 41.6 (floor, reached at 448) at 390/320 |
| body type               | `clamp(1.02rem, .95rem + .35vw, 1.2rem)` | 19.2 px at 1440 (cap reached at 1143), 16.32 at 320                    |

**Radius note for the port:** the reference uses **eleven** distinct radii. Tailwind's scale covers
`rounded-full`, `rounded-2xl` (16), `rounded-xl` (12), `rounded-lg` (8), `rounded-md` (6) and `rounded-3xl`
(24); the phone's **44**, screen's **34**, panel's **22**, ring well's **18**, store/habit's **14** and logo
mark's **11** need arbitrary values (`rounded-[44px]` …), which is fine and intended.

## Page arithmetic at 1440 × 900 (measured, motion disabled)

| element                     | box                                                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `.cl-hero04`                | **1440 × 900**; `min-height:100vh`, flex column, `overflow:hidden`; ground = radial halo over the linear ramp; `16px / 1.55`; DM Sans |
| `header` bar                | **1440 × 83.25** at (0, 0); inner **1200 × 83.25** at (120, 0), `padding: 22px 40px`, `gap: 24`, `max-width:1200`, `margin:0 auto` |
| wordmark                    | **92.38 × 34.09** at (160, 24.58) — mark **34 × 34** at (160, 24.63) radius **11**, `#0f2e22` bg with a lime 18 px ring glyph; text `22px / 800 / -.03em` = **-0.66 px**, `gap: 10` |
| nav pill (= `ul`)           | **364 × 39.25** at (**916**, 22) — `margin-left:auto`, `gap: 6`, `padding: 5`, radius **999**, `rgba(255,255,255,.7)`   |
| one link                    | **96 / 102 / 83 / 65 × 39.3**; `padding: 8px 16px`, `15px / 500`, radius 999; current = ink bg + white label, hover = white bg + ink label |
| menu button                 | `display:none` at ≥861 (zero rect); below 861 it is **44 × 44** at `margin-left:auto`                                   |
| `main`                      | `flex:1; display:flex; align-items:center` → the hero is **vertically centred in the space under the bar**, not padded into place |
| hero section                | **1200 × 680** at (120, **151.63**) = 83.25 + (816.75 − 680)/2; `padding: 48px 40px 72px`, `grid-template-columns: 1fr 1fr`, `gap: 64`, `align-items:center` |
| copy column                 | **528 × 457.09** at (160, **251.08**) = 199.63 + (560 − 457.09)/2                                                       |
| rating row                  | **287.25 × 27.25** at (160, 251.08) — score chip **45 × 27.25** (radius 8, `padding: 2px 10px`, `15px / 700`, white on ink), stars **77.25 × 23.25** at (215, 253.08) `#b45309` `15px` `letter-spacing:2px`, then `from 38,000 ratings` `15px / 500` muted; `gap: 10` |
| `h1`                        | **528 × 163.06** at (160, **298.33**) — **83.2 px / 81.536 line box / 2 lines**, `font-weight:800`, `line-height:.98`, `letter-spacing:-.045em` (-3.744 px), `margin: 20px 0 18px` |
| headline line 1             | the bare text node "Small habits," — **429.34** wide, one line                                                          |
| headline line 2             | `<span>` "tracked kindly." — **528 × 81.53** at (160, 379.86), `display:block`, `color:#127a4f`                          |
| paragraph                   | **528 × 89.25** at (160, **479.39**) — **19.2 px / 29.76 line box / 3 lines**, muted, `max-width:30em` → **576** (does not bite: the column is 528) |
| store row                   | **528 × 55.06** at (160, **600.64**) — `display:flex; flex-wrap:wrap; gap:12; margin-top:32`                            |
| one store button            | **190 × 55.06** — `min-width:190` is the binding constraint (label length does **not** change the width), `padding: 10px 22px 10px 16px`, radius **14**, `#0b0f0d`, white label, 26 px icon, `gap: 12` |
| store label block           | top line **11.5 px, opacity .85**; name **19 px / 700 / -.01em** = 96 px wide                                           |
| facts row                   | **528 × 22.47** at (160, **685.7**) — `margin-top:30 !important`, `gap: 8px 24px`, `14.5 px` muted; items **130 / 190 / 104** wide at x 160 / 314 / 528; each has a **7 × 7** green dot as `::before` at `top:.6em`, `padding-left:16` |
| visual                      | **528 × 560** at (**752**, 199.63) — `position:relative; display:flex; justify-content:center; min-height:560`           |
| lime disc (`::before`)      | **440 × 440**, `top:50%; left:50%; transform:translate(-40%,-50%)` → box **(88, 60)** inside the visual, i.e. abs (840, 259.63); its **right edge is exactly the visual's right edge** (1280) |
| front phone                 | **270 × 556** at (**881**, 199.63) — `padding:10`, radius **44**, `#0b0f0d`, `0 0 0 2px #2c3a33 inset`, `z-index:2`, bob animation |
| notch                       | **84 × 24** at (974, 219.63) — radius 999, `top:20`, `left:50%`, `translateX(-50%)`                                      |
| front screen                | **250 × 536** at (891, 209.63) — radius **34**, `#fbfdfb`, `12.5 px`, `padding: 52px 16px 16px`, `overflow:hidden`; content scrollHeight **536 = clientHeight**, and the last habit ends **39.17 px** above the screen's bottom edge (nothing is clipped) |
| app top row                 | greeting `17px / 800 / -.02em` + avatar **30 × 30** circle `#fde68a` / `#713f12`                                        |
| weekday grid (5 cells)      | cells **38.8 × 39.53** (`repeat(5,1fr)`, `gap:6`, radius 12, `padding:6px 0`, label `10.5/500`, number `14/700`)          |
| ring well                   | ring **64 × 64** at (919, 383.58) — `conic-gradient(#127a4f 71%, #cfe8d7 0)`, inner **50** disc `#e6f7ea`, `5/7` at 15 px   |
| habit rows                  | **218 × 41.38** each, `gap: 7`, `margin-top: 12 !important`, border `1px #e3ece6`, radius 14, checkbox **18 × 18**        |
| back phone                  | box **240 × 494** at (274, 40) inside the visual (abs 1026, 239.63), `rotate(8deg)` → **AABB 306.42 × 522.59** at (992.79, 225.33) |
| stats screen (back)         | box **220 × 474**; its rotated AABB measures **283.83 × 500.01** — the rect is not the box                            |
| stats contents              | "This week" `12/500` `opacity:.9`; **streak "42" at 68 px / 800 / -.05em in lime**; "day streak" `13/500`; week chart **110** tall with 7 bars at `--v × 100%` (**66.23 / 93.47 / 77.12 / 109.81 / 98.91 / 49.89 / 82.57** = `.6 .85 .7 1 .9 .45 .75`), `gap:8`, radius 6, `rgba(198,243,107,.85)`; initials `M T W T F S S` at `10 px` |
| toast                       | **173 × 47.25** at (**716**, 535.63) — `position:absolute; top:60%; left: calc(50% - 300px)` of the **visual** (264 − 300 = **−36**), radius 16, white, `12px 18px` padding, `15px / 700`, bob animation with `-3s` |

**Where the 900 comes from.** `main { flex:1 }` gives the hero 816.75 px of space; the hero needs
`48 + max(457.09 copy, 560 visual) + 72 = 680`, so `align-items:center` resolves to **68.375 px** of slack above
and below and the document is exactly the viewport. A port that pads the hero to the viewport instead of
centring it drifts the whole section by 68.375 px at 1440 and by **0** at 960, where the stack overflows the
screen anyway.

## The six devices

**1. The headline is two nodes, not two sentences.** `Small habits,` is a bare text node; `tracked kindly.` is a
`<span display:block>` in `--green`. That is why the block is always **exactly two lines** — 1440 to 320 — and
why the `h1`'s own box is **528** wide at 1440 (the column) but **251.92** at 320 (shrink-to-fit: the copy
column becomes a centred flex column at ≤960, so the `h1` is only as wide as its longest line, and the first
line is 215.67 px at 320).

**2. The rating row is three ingredients with a hard marker.** A dark score chip, five `★` in amber with 2 px
tracking, and a muted sentence — `display:inline-flex; gap:10`. The stars are `aria-hidden`; the chip is not, so
the row reads "4.9 from 38,000 ratings".

**3. Store buttons are sized by `min-width`, not by copy.** **190 px** is a floor, and the label block
(11.5 px over 19 px) is narrower than it — so the label text can change without moving a single pixel of the
layout. The 26 px icons are **generic** outlines (a rounded phone, a play triangle), not the real Apple/Google
marks.

**4. The facts are a dot list, not bullets.** No `list-style` survives (`ul { list-style:none }` on the shell);
each `<li>` carries `padding-left:16` and a **7 px green circle** at `top:.6em`, so the dot's optical centre
tracks the first line at any type size.

**5. The product shot is four stacked CSS objects.** A **440 px lime disc** anchored to the visual's centre with
`translate(-40%,-50%)` (so it is *not* centred on the phones — it sits **40 px right** of centre and its right
edge lands exactly on the visual's right edge), a **front phone** 270 × 556 with a notch and a white habit
screen, a **back phone** 240 × 494 rotated **8°** showing a dark streak screen, and the toast. Only the front
phone has `z-index:2`; the back phone is painted between the disc and the front one.

**6. The only motion is a 6-second bob.** `@keyframes cl-hero04-bob { 50% { transform: translateY(-10px) } }`
applied to the front phone and to the toast, the toast with `-3s` so the two move in **opposite phase**. The
back phone does not move.

## Width ladder (measured, `getBoundingClientRect`, motion disabled, after `document.fonts.ready`)

| vw   | docH | `h1` px | copy / visual | facts        | phones                          | bar / nav        |
| ---- | ---- | ------- | ------------- | ------------ | ------------------------------- | ---------------- |
| 1440 | 900  | 83.2    | 528 / 528     | 1 row, 22.47 | front (881) back AABB (992.79)  | 83.25 / pill     |
| 1200 | 900  | 79.2    | 530 / 530     | 1 row        | front (760) back (871.79)       | 83.25 / pill     |
| 1100 | 900  | 74.2    | 482.5 / 482.5 | 1 row        | front (683.75) back (795.54)    | 83.25 / pill     |
| 1078 | 900  | 73.1    | 472.05 / —    | **1 row**    | —                               | 83.25 / pill     |
| 1077 | 900  | 73.05   | 471.58 / —    | **2 rows, 52.94** | —                          | 83.25 / pill     |
| 1024 | 900  | 70.4    | 446.41 / 446.41 | 2 rows     | front (625.8) back (737.59)     | 83.25 / pill     |
| 961  | 900  | 67.25   | 418.03 / 418.05 | 2 rows     | front (578.53)                  | 83.25 / pill     |
| 960  | **1210** | 67.2 | 883.22 / 883.22 | 1 row     | front (345) back (456.79)       | 88 / pill        |
| 900  | 1194 | 64.2    | 828 / 828     | 1 row        | front (315)                     | 88 / pill        |
| 861  | 1184 | 62.25   | 792.13 / 792.13 | 1 row      | front (295.5)                   | 88 / pill        |
| 860  | 1188 | 62.2    | 791.22 / 791.22 | 1 row      | front (295)                     | 88 / **hamburger** |
| 768  | 1164 | 57.6    | 706.56 / 706.56 | 1 row      | front (249)                     | 88 / hamburger   |
| 641  | 1132 | 51.25   | 589.75 / 589.75 | 1 row      | front (185.5)                   | 88 / hamburger   |
| 640  | 1132 | 51.2    | 588.81 / 588.81 | 1 row      | front (185)                     | 88 / hamburger   |
| 560  | 1121 | 47.2    | 515.22 / 515.22 | 1 row      | front (145) toast **−20**       | 88 / hamburger   |
| 521  | 1117 | 45.25   | 479.34 / 479.34 | 1 row      | front (125.5) toast **−39.5**   | 88 / hamburger   |
| 520  | 1132 | 45.2    | 478.41 / 478.41 | 1 row      | front (138) **back hidden**, toast re-centred | 88 / hamburger |
| 480  | 1155 | 43.2    | 441.63 / 441.63 | 2 rows, 50.94 | front (118)                   | 88 / hamburger   |
| 390  | 1177 | 41.6    | 358 / 358     | 2 rows       | front (73)                      | 88 / hamburger   |
| 320  | 1203 | 41.6 (floor) | 288 / 288 | **3 rows, 79.41** | front (38)                 | 88 / hamburger   |

Four things this table says that a hand-written one would get wrong:

1. **The document height is flat at exactly 900 for seven widths, then jumps 310 px at one pixel.** 900 at
   1440 … 961, then **1210** at 960. Nothing "gradually" goes below the fold.
2. **The facts wrap is a content seam, not a viewport breakpoint.** The row needs **472** px
   (130 + 24 + 190 + 24 + 104), so it is one row at 1078 (column 472.05) and two at 1077 (471.58).
3. **The stack at 960 is wider than the 1440 layout is tall**: the copy column becomes 883.22 wide and the visual
   stays 560 tall, so the page is 1210 — the tallest layout is the *single-column* one, not the narrowest.
4. **The document is not monotonic in width**: 1210 → 1194 → 1184 → **1188** (the hamburger swap costs 4 px)
   → 1164 → 1132 → 1121 → 1117 → **1132** (520 hides the back phone and stacks the stores, which *adds* 15 px)
   → 1155 → 1177 → 1203.

## The traps (all cost real measurement time)

1. **An animated element's rect moves with the animation phase.** The front phone measured y **198.27** on an
   un-paused page and **199.63** with motion off; the toast measured 526.98 vs 535.63 (it runs `-3s`, i.e.
   opposite phase). Never quote a bobbed element's rect — measure with `prefers-reduced-motion: reduce`,
   `offsetTop`/`offsetHeight`, or after `animation-play-state: paused`.
2. **A rotated box's rect is not its size.** The back phone's box is **240 × 494**; its AABB is
   **306.42 × 522.59** (240·cos8 + 494·sin8 = 306.42, 240·sin8 + 494·cos8 = 522.59) and its inner screen's rect
   measures **283.83 × 500.01** against a 220 × 474 box. Use `offsetWidth/offsetHeight` inside any transformed
   subtree — same class of trap as the first variant's perspective mock.
3. **The toast is anchored to the visual, and the shell clips it.** `left: calc(50% - 300px)` resolves against
   the **528 px visual**, not the page: at 1440 it sits at x **716**, i.e. 28 px right of the copy column's edge
   (688) — and it *overlaps the front phone by 8 px* by design. The offset becomes negative below ~561 px, and
   `.cl-hero04`'s `overflow:hidden` cuts it: **20 px** lost at 560, **39.5 px** at 521 — the emoji and the left
   padding disappear. Only at ≤520 does the sheet re-anchor it (`bottom:-6; left:50%; translateX(-50%)`). The
   port SHALL NOT reproduce the clip (see the fixes below).
4. **The `h1`'s box width is not the column below 960.** The copy column turns into
   `display:flex; flex-direction:column; align-items:center`, so the `h1` shrink-wraps to its longest line —
   **251.92** at 320 while the column is 288. Quoting the `h1` width as "the text column" is wrong at every
   width from 960 down.
5. **8 `@font-face` rules, 2 binaries.** All four weights point at the *same* two woff2 files (sha256 identical);
   both files are **variable** (`fvar`/`HVAR`/`MVAR`/`avar` in the woff2 directory) and Chrome instances the
   weight axis per declared `font-weight`, which is why 400/500/700/800 really measure 1,134 / 1,175 / 1,252 /
   1,264 px on a canvas. A port may load `wght@400..800` (one variable file) or the four statics — both match.
   Do not conclude "the weights are fake" from the duplicate hashes.
6. **`min-width:190` is why the store row is 392 wide**, not the labels. But the row's **wrap** is still
   content-driven at small widths: it fits one line down to 521 (392 in a 479 column) and only stacks because
   the 520 block sets `width:100%` / `flex:1 1 100%` on the buttons.
7. **The nav panel is taller than it looks and it overlaps the hero.** Open at 390 it is **358 × 243.38** at
   (16, 80) — `top: calc(100% - 8px)` of the 88 px bar — and it covers **235.38 px** of the hero (including the
   whole rating row). Its links grow from `8px 16px / 15px` to `13px 16px / 17px` and the pill's radius from
   999 to 22.
8. **The breakpoint is 860 in CSS and 861 in JS.** `@media (max-width: 860px)` shows the button;
   `matchMedia('(min-width: 861px)')` closes the panel on resize. Off-by-one either way leaves a panel that can
   never be closed, or a button that never appears.
9. **`.cl-icon` is dead for the fifteenth time**, and `is-done` / `is-today` have no rules of their own — they
   only work as descendants (`.habits .is-done`, `.days .is-today`).
10. **The facts are type-dependent, so measure after `document.fonts.ready`.** At 1100 the row read **52.94**
    (two lines) in one run timed 250 ms after `domcontentloaded` and **22.47** (one line) in every run that
    awaited font loading — with identical item widths (130 / 190 / 104) in both. The seam below (472.0) is only
    meaningful post-font-load, and the reference itself therefore **re-flows the facts on first paint**; a port
    that asserts a one-line facts row at 1100 must ensure the webfont is loaded (or `font-display` handled)
    before it measures.

## Contrast (computed from the token pairs)

The copy column sits **left of the halo**: the radial is centred at 78 % of the *page* with a 50 % radius, so its
left edge is at 53 % (x ≈ 763 at 1440) and the whole text column (x 160–688) is over the plain linear ramp
`#f3faf6 → #e9f4ee`. Ratios below are against the darker end (`#e9f4ee`), i.e. the worst case.

| text                                             | pair                     | ratio     |
| ------------------------------------------------ | ------------------------ | --------- |
| headline `#0f2e22` on `#e9f4ee`                   | ink / ground             | **13.00** |
| second line `#127a4f` on `#e9f4ee`                | green / ground           | **4.75**  |
| paragraph, rating, facts `#3d5a4d` on `#e9f4ee`   | muted / ground           | **6.73**  |
| score chip + current nav link `#fff` on `#0f2e22` | white / ink              | **14.64** |
| nav idle `#3d5a4d` on `rgba(255,255,255,.7)` over ground | muted / pill      | ≥ 6.6 (pill composite ≈ `#f3f8f5`) |
| store labels `#fff` on `#0b0f0d`                  | white / phone black      | **19.29** |
| streak `#c6f36b` on `#0f2e22`                     | lime / ink (stats screen) | **11.46** |
| stats labels `#d6ebe0` on `#0f2e22`               | white-ish / ink          | **11.73** |
| habit text `#54705f` on `#fff`                    | done / card              | **5.44**  |
| weekday label `#45604f` on `#eef5f0`              | cell text / cell         | **6.24**  |
| avatar letter `#713f12` on `#fde68a`              | brown / amber            | **6.96**  |
| stars `#b45309` on `#e9f4ee` (decorative, `aria-hidden`) | amber / ground     | **4.46**  |
| focus ring `#127a4f` on `#e9f4ee` (3 px, 3 px off) | green / ground          | **4.75** (≥ 3 for UI) |
| strike rule `#9ab8a5` on `#fff`                   | —                        | 2.15 — decoration only |
| unchecked box `#b7cdbf` on `#fff`                 | —                        | 1.68 — decoration only |

Every text pair passes AA. The two sub-2 ratios are the checkbox border and the strikethrough rule: both are
**decorative** (the row already carries `is-done` text colour at 5.44 and the checkbox is duplicated by the
line-through), so neither is a 1.4.11 control boundary — but a port that turns the checkbox into the *only*
state cue would fail, so keep the strikethrough.

## Requirements

### Requirement: A single full-height app-landing screen

The template SHALL render one 100vh hero screen whose only interactive control is the navigation toggle.

#### Scenario: One screen, one section, one headline at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** it renders
- **THEN** there SHALL be exactly one `<header>` (the bar), one `<nav aria-label="Main">`, one `<main>` and
  **one** `<section aria-labelledby>` inside it
- **AND** there SHALL be exactly **one** `<h1>` and **zero** `<h2>` elements
- **AND** the document SHALL be **exactly 900 px** tall with `scrollX === 0` and
  `scrollWidth === clientWidth` at 1440
- **AND** there SHALL be **no `<form>`**, no `<input>`, no `<img>` and **one** `<button>`

#### Scenario: The screen is centred by its flex parent

- **GIVEN** the root is `min-height:100vh; display:flex; flex-direction:column` and `main` is `flex:1` with
  `align-items:center`
- **WHEN** the hero is measured at 1440
- **THEN** it SHALL be **1200 × 680** at (120, **151.63**) — 83.25 px of bar plus **68.375 px** of slack above
  it, and the same below
- **AND** the slack SHALL collapse to **0** at 960, where the stacked hero is **1126.75** tall and the document
  grows to **1210**

### Requirement: A mint ground with a lime halo behind the product shot

The page SHALL paint a two-stop mint ground with a soft radial highlight behind the phones.

#### Scenario: The three gradient layers

- **GIVEN** the shell `.cl-hero04`
- **WHEN** it paints
- **THEN** its background SHALL be
  `radial-gradient(50% 60% at 78% 55%, #c9ecd8 0%, transparent 70%), linear-gradient(180deg, #f3faf6, #e9f4ee)`
- **AND** the radial's composite SHALL be left of nothing — the copy column (x 160–688) SHALL sit entirely on
  the linear ramp, which is why the text contrasts in this spec are quoted against `#e9f4ee` and `#f3faf6`
- **AND** the shell SHALL carry `overflow:hidden`, and the only thing it clips SHALL be the toast (see the
  toast requirement)

### Requirement: A marked wordmark and a pill navigation

The header SHALL hold a 34 px marked wordmark on the left and a 364 px pill of four links on the right.

#### Scenario: Wordmark, pill, current link at 1440

- **GIVEN** the header at 1440
- **WHEN** measured
- **THEN** the bar SHALL be **1440 × 83.25** with an inner **1200 × 83.25** at (120, 0), `padding: 22px 40px`,
  `gap: 24`, `max-width: 1200`
- **AND** the wordmark SHALL be **92.38 × 34.09** at (160, 24.58): a **34 × 34** ink tile, radius **11**, with an
  18 px lime ring glyph inside, `gap: 10`, and **22 px / 800 / -.03em** text
- **AND** the nav pill SHALL be **364 × 39.25** at (**916**, 22) — radius **999**, `padding: 5`, `gap: 6`,
  `rgba(255,255,255,.7)` — pushed right by `margin-left:auto`
- **AND** the four links SHALL be **96 / 102 / 83 / 65** wide at `padding: 8px 16px`, `15px / 500`
- **AND** the current link SHALL be ink with a white label, and a hovered link SHALL invert to white with an ink
  label over `.2s`

#### Scenario: The pill becomes a disclosure below 861

- **GIVEN** the `max-width: 860px` block plus the script's `is-enhanced` class
- **WHEN** the viewport is 860 or narrower
- **THEN** the **44 × 44** button SHALL appear at `margin-left:auto` and the nav SHALL be `display:none`
- **AND** at 861 and above the button SHALL be `display:none` and the pill visible — the script closes the panel
  on `matchMedia('(min-width: 861px)')`, so the CSS and JS thresholds are **860 / 861** and both SHALL hold

### Requirement: A rating line above the headline

The copy column SHALL open with a score chip, five stars and a muted count.

#### Scenario: Chip, stars, sentence

- **GIVEN** the rating row
- **WHEN** measured at 1440
- **THEN** it SHALL be **287.25 × 27.25** at (160, 251.08), `display:inline-flex; align-items:center; gap:10`
- **AND** the score chip SHALL be **45 × 27.25** — radius **8**, `padding: 2px 10px`, `15px / 700`, white on ink
- **AND** the stars SHALL be **77.25 × 23.25** at (215, 253.08), `#b45309`, `15 px`, `letter-spacing: 2px`, and
  `aria-hidden` (the chip carries the value)
- **AND** the sentence SHALL be `15px / 500` in `--muted`

### Requirement: A two-tone headline built from two nodes

The headline SHALL be an ink text node followed by a green block-level span, keeping exactly two lines.

#### Scenario: Two lines, never three, 1440 to 320

- **GIVEN** an `h1` whose children are the bare text `Small habits,` and a
  `<span class="block">tracked kindly.</span>`
- **WHEN** the viewport narrows from 1440 to 320
- **THEN** the `h1` SHALL measure **528 × 163.06** at 1440 and **251.92 × 81.5** at 320, and SHALL be **exactly
  two lines at every width** (line 1 = the text node, line 2 = the block span)
- **AND** the first line SHALL be **429.34** wide at 1440 and **215.67** wide at 320 — both narrower than the
  box, so no line ever wraps
- **AND** the type size SHALL follow `clamp(2.6rem, 1.2rem + 5vw, 5.2rem)` — **83.2** at 1440, **70.4** at 1024,
  **51.2** at 640, **41.6** (floor, reached at 448 px) at 390 and 320
- **AND** `font-weight` SHALL be **800**, `line-height` **.98**, `letter-spacing` **-.045em** (**-3.744 px** at
  1440), and the span's colour SHALL be `#127a4f`

### Requirement: Two store buttons with generic icons

The copy column SHALL close with two dark, 190 px store buttons whose icons are strokes, not trademarks.

#### Scenario: Two 190 × 55.06 buttons

- **GIVEN** the store row at 1440
- **WHEN** measured
- **THEN** the row SHALL be **528 × 55.06** at (160, 600.64), `gap: 12`, `margin-top: 32`
- **AND** each button SHALL be **190 × 55.06** with `min-width: 190px`, `padding: 10px 22px 10px 16px`,
  radius **14**, `#0b0f0d`, a 26 px icon and `gap: 12`
- **AND** the label block SHALL be two lines — **11.5 px at `opacity:.85`** over **19 px / 700 / -.01em**
- **AND** the icons SHALL be generic outlines (a rounded rect phone; a play triangle) and SHALL NOT reproduce the
  App Store or Google Play marks
- **AND** hover SHALL raise the button **2 px** (`translateY(-2px)`) and lighten it to `#1d2a24` over `.2s`

#### Scenario: They stack only because the sheet says so

- **GIVEN** the two buttons total **392** px
- **WHEN** the viewport is 521
- **THEN** they SHALL still sit on **one** row inside a 479.34 px column
- **AND** at 520 and below the `max-width:520` block SHALL make them full width (`flex: 1 1 100%`), giving a
  **122.13** tall row

### Requirement: A three-item fact list with generated dots

The hero SHALL state three product facts in a dot-marked row.

#### Scenario: Three items, one row, at 1440

- **GIVEN** the facts list
- **WHEN** measured at 1440
- **THEN** it SHALL be **528 × 22.47** at (160, 685.7), `margin-top: 30`, `gap: 8px 24px`, `14.5 px` muted
- **AND** the three items SHALL measure **130 / 190 / 104** at x **160 / 314 / 528**
- **AND** each item SHALL carry a **7 × 7** `border-radius:50%` green dot as `::before` at `left:0; top:.6em`
  with `padding-left: 16`
- **AND** the `<strong>` inside each item SHALL be ink, not muted

#### Scenario: The row wraps at a 472 px content width

- **GIVEN** the row's minimum single-line width is **472** (130 + 24 + 190 + 24 + 104)
- **WHEN** the viewport is 1078
- **THEN** the column SHALL be **472.05** and the row SHALL stay **one** line (**22.47**)
- **AND** at 1077 the column SHALL be **471.58** and the row SHALL be **two** lines (**52.94**), with the third
  item back at x 40
- **AND** at 320 it SHALL be **three** lines (**79.41**)

### Requirement: A two-phone product mock over a lime disc

The visual column SHALL draw a lime disc, a front phone with a habit screen and a back phone rotated 8°.

#### Scenario: The disc, the front phone, the notch

- **GIVEN** the visual column at 1440
- **WHEN** measured with motion disabled
- **THEN** it SHALL be **528 × 560** at (**752**, 199.63) with `position:relative; display:flex;
  justify-content:center; min-height:560px`
- **AND** the `::before` disc SHALL be **440 × 440**, `border-radius:50%`, `#c6f36b`, at
  `top:50%; left:50%; transform: translate(-40%, -50%)` → box (88, 60) inside the visual, its right edge flush
  with the visual's right edge at **1280**
- **AND** the front phone SHALL be **270 × 556** at (**881**, 199.63) — `padding:10`, radius **44**,
  `#0b0f0d`, `box-shadow: 0 0 0 2px #2c3a33 inset, 0 40px 70px -30px rgba(15,46,34,.6)`, `z-index:2`
- **AND** its notch SHALL be **84 × 24** at (974, 219.63), radius 999, `top:20`, centred by `translateX(-50%)`
- **AND** its screen SHALL be **250 × 536** — radius **34**, `#fbfdfb`, `12.5 px`, `padding: 52px 16px 16px`,
  `overflow:hidden` — and its content SHALL fit exactly (`scrollHeight === clientHeight === 536`)

#### Scenario: The habit screen's contents

- **GIVEN** the front screen
- **WHEN** measured
- **THEN** the top row SHALL hold a **17 px / 800 / -.02em** greeting and a **30 × 30** circle avatar (`#fde68a`
  on `#713f12`)
- **AND** the weekday strip SHALL be five cells of **38.8 px**, radius 12, `#eef5f0`, label `10.5 / 500`,
  number `14 / 700`, with the third cell (`is-today`) inverted to ink
- **AND** the ring well SHALL be `#e6f7ea`, radius **18**, `padding:12`, `margin-top:14`, holding a **64 × 64**
  `conic-gradient(#127a4f 71%, #cfe8d7 0)` with a **50** px inner disc and `5/7 done` at 9.5 / 15 px
- **AND** five habit rows SHALL be **218 × 41.38**, `gap:7`, `margin-top:12`, `1px solid #e3ece6`, radius 14,
  each with an **18 × 18** radius-6 checkbox whose tick is a **data-URI SVG** at `14px`
- **AND** the three `is-done` rows SHALL be `#54705f` with a `#9ab8a5` line-through and a green filled checkbox

#### Scenario: The back phone is rotated, and its rect lies

- **GIVEN** the back phone
- **WHEN** measured
- **THEN** its box SHALL be **240 × 494** at (274, 40) inside the visual (abs 1026, 239.63) with
  `transform: rotate(8deg)` — matrix `0.990268 / 0.139173 / -0.139173 / 0.990268`
- **AND** its axis-aligned rect SHALL read **306.42 × 522.59** at (992.79, 225.33) — arithmetic, not a size
- **AND** its screen's rect SHALL read **283.83 × 500.01** against a **220 × 474** box — so the port SHALL
  measure it with `offsetWidth/offsetHeight`, never with `getBoundingClientRect`
- **AND** the screen SHALL be `#0f2e22` with `#d6ebe0` type, `padding: 44px 18px 16px 110px`,
  `align-items:flex-end`, `text-align:right`
- **AND** the streak "42" SHALL be **68 px / 800 / -.05em** in `#c6f36b`, over "This week" (`12/500`) and
  "day streak" (`13/500`)
- **AND** the week chart SHALL be **110** tall with seven `rgba(198,243,107,.85)` bars at
  `height: calc(var(--v) * 100%)` for `--v` = `.6 .85 .7 1 .9 .45 .75` → **66.23 / 93.47 / 77.12 / 109.81 /
  98.91 / 49.89 / 82.57**, radius 6, `gap:8`, initials `M T W T F S S` at 10 px
- **AND** at 520 and below the back phone SHALL be `display:none`

### Requirement: A floating streak toast that is never clipped

The visual SHALL carry a white toast over the phones' left edge without any part of it being cut off.

#### Scenario: The toast at 1440

- **GIVEN** the toast
- **WHEN** measured with motion disabled
- **THEN** it SHALL be **173 × 47.25** at (**716**, 535.63) — `position:absolute; top:60%;
  left: calc(50% - 300px)` of the visual, `padding: 12px 18px`, radius **16**, white,
  `box-shadow: 0 18px 40px -16px rgba(15,46,34,.45)`, `15px / 700`
- **AND** it SHALL overlap the front phone by **8 px** and clear the copy column by **28 px**
- **AND** it SHALL be `aria-hidden="true"`

#### Scenario: The reference's own clip SHALL NOT be reproduced

- **GIVEN** `left: calc(50% - 300px)` against a 528 px visual
- **WHEN** the viewport is 560 (the toast's left edge computes to **−20**) or 521 (**−39.5**)
- **THEN** the reference SHALL cut **20 px** and **39.5 px** of the toast against the shell's `overflow:hidden`,
  and the port SHALL NOT reproduce it
- **AND** the port SHALL clamp the offset (`left: max(0px, calc(50% - 300px))` relative to the visual) or move
  the ≤520 re-anchor up to 640, so the toast SHALL be **fully visible at every width from 1440 to 320**
- **AND** a small overlap of the front phone's left edge (up to **28 px** at 560) SHALL be accepted — the design
  already overlaps by 8 px at 1440

### Requirement: One bob, two elements, and a kill switch

The template's only motion SHALL be a six-second vertical bob on the front phone and the toast.

#### Scenario: Opposite phase, ten pixels

- **GIVEN** `@keyframes cl-hero04-bob { 50% { transform: translateY(-10px) } }`
- **WHEN** the page runs without a reduced-motion preference
- **THEN** `.cl-hero04__phone--front` SHALL run `cl-hero04-bob 6s ease-in-out infinite` and the toast the same
  animation with a **-3s** delay, so their transforms SHALL move in opposite directions
- **AND** the back phone SHALL NOT animate
- **AND** the measured transform SHALL be a `matrix` whose `f` component moves between **0** and **−10**

#### Scenario: Reduced motion freezes everything

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page loads
- **THEN** `animation-name` SHALL compute to **`none`** on the front phone and the toast, and every `transition`
  in the template to `none`
- **AND** no element SHALL be removed or repositioned by the kill switch — both phones and the toast SHALL stay
  in their static boxes (**556** and **47.25** tall) and no scroll animation, observer or reveal SHALL exist

### Requirement: A real disclosure menu below 861

The toggle SHALL be a proper disclosure that reports its state, closes on Escape and on an outside click.

#### Scenario: Opening at 390

- **GIVEN** the bar with `is-enhanced` from the script
- **WHEN** the button is activated at 390
- **THEN** `aria-expanded` SHALL flip **false → true**, the label **"Open menu" → "Close menu"**, and the
  open/close glyphs SHALL swap (`display:none` / `block`)
- **AND** the panel SHALL be **358 × 243.38** at (16, 80) — `left`/`right` at the gutter, `top: calc(100% - 8px)`
  of the **88** px bar, `#fff`, radius **22**, `padding: 8`, `box-shadow: 0 24px 48px -18px rgba(15,46,34,.35)`
- **AND** each link SHALL grow to `padding: 13px 16px` at **17 px**, and the panel SHALL overlay **235.38 px** of
  the hero (the rating row included)
- **AND** the bar SHALL carry `z-index: 5` so the panel paints above the hero

#### Scenario: Escape, outside click, resize

- **GIVEN** the panel is open
- **WHEN** Escape is pressed
- **THEN** the panel SHALL close, `aria-expanded` SHALL return to `false`, and focus SHALL move to the button
- **AND** a click outside the bar SHALL close it, and activating any link inside it SHALL close it
- **AND** growing the viewport past **861** SHALL close it and hide the button, while the pill returns
- **AND** every listener SHALL be removed on unmount (the template renders once, but the port SHALL still clean up)

### Requirement: Responsive ladder

The layout SHALL stack at 960, swap to the disclosure at 860 and drop to one phone at 520.

#### Scenario: 960 is the stack

- **GIVEN** the `max-width:960` block
- **WHEN** the viewport is 960
- **THEN** the hero grid SHALL become **one column** (`grid-template-columns:1fr`), `text-align:center`, and the
  copy column SHALL turn into a centred flex column
- **AND** the visual SHALL move below the copy, and the document SHALL grow from **900** (at 961) to **1210**
- **AND** the store row and the facts SHALL be centred, and the paragraph SHALL keep `margin-inline:auto` with its
  `max-width:30em` now binding (**556.8** at 960, i.e. 30 × 18.56)

#### Scenario: 520 drops the back phone

- **GIVEN** the `max-width:520` block
- **WHEN** the viewport is 520 or narrower
- **THEN** the visual SHALL be **500** tall (`min-height:500; margin-top:8`), the front phone **244 × 500**, and
  the disc **320** with `translate(-50%,-50%)`
- **AND** the back phone SHALL be `display:none`
- **AND** the toast SHALL re-anchor to `top:auto; bottom:-6; left:50%; translateX(-50%); animation:none;
  white-space:nowrap`
- **AND** the document SHALL measure **1132** at 520 — 15 px *taller* than 521 — because the store row stacks

## Adapting to the repo (deltas — read before writing code)

**Copy.** The reference's invented brand SHALL NOT appear. Use these replacements:

| source                                                         | port                                                                                     |
| -------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| "Loop" (wordmark + paragraph + "Loop Plus")                     | **"Tendril"** (7 characters vs 4). The wordmark box grows from **92.38** to ~**109**; nothing else moves, because the pill is `margin-left:auto` and the bar is a flex row — but the pill's width grows by ~**10 px** (the "Loop Plus" link widens) so re-check 916 → its new left edge |
| headline `Small habits, tracked kindly.`                        | **keep** — no brand in it, and the two-line structure is keyed to it                      |
| `Loop is a calm habit tracker with gentle reminders, …`         | swap the brand only: `Tendril is a calm habit tracker with gentle reminders, streaks that forgive a missed day, and weekly check-ins that show how far you have come.` — **re-verify the 3 lines at 1440** (the column is 528 and the paragraph is 3 lines with slack) |
| `Good morning, Priya`                                          | keep the shape; the given name MAY change (the greeting is `space-between` with the avatar, so its width is not load-bearing) |
| `4.9`, `from 38,000 ratings`, `42`, `5/7`, `42-day streak!`     | **keep** — invented numbers, and the "42" is what makes the left column of the stats screen read correctly at 68 px |
| `Free for 5 habits` / `Offline first, synced later` / `No ads, ever` | **keep** — 130 / 190 / 104 px wide, and the 472 px total is the facts' wrap seam     |
| `Download on the` / `App Store`, `Get it on` / `Google Play`    | keep the wording; the icons are already generic strokes, and `min-width:190` means the labels do not drive the layout |
| `Features` / `Loop Plus` / `Stories` / `Help`                   | **Features / Tendril Plus / Stories / Help**                                              |

If the port changes the headline or the facts, it MUST re-measure the folds (headline **2** lines at every
width; facts **1** row at 1078+, **2** rows 1077–~450, **3** rows at 320) because both seams are **content**
widths, not viewport truths.

**Structure → React.** `App` → `<SiteHeader>` (wordmark, pill nav, `<MenuButton>` with `aria-expanded` /
`aria-controls`, panel) → `<Hero>` → `<HeroCopy>` (`<Rating>`, `<Headline>`, `<Lede>`, `<StoreButtons>`,
`<Facts>`) → `<PhoneMock>` (`<Halo/>` is CSS, `<BackPhone>` → `<StatsScreen>`, `<FrontPhone>` → `<HabitScreen>`,
`<Toast>`) → `<Footer>`. The **only** state is `isOpen` in `SiteHeader` (plus a `useEffect` for the Escape /
outside-click / `matchMedia` listeners with cleanup). Everything else is static markup.

Keep the data as arrays: `LINKS` (4), `FACTS` (3), `HABITS` (5 with `done`), `DAYS` (5 with `today`), `WEEK`
(7 with `v`), `STORES` (2 with `top`/`name`), so the loop counts are testable and the numbers live in one place.

**Tokens.** Put the palette in `@theme`: `--color-ground:#e9f4ee`, `--color-ground-top:#f3faf6`,
`--color-halo:#c9ecd8`, `--color-ink:#0f2e22`, `--color-muted:#3d5a4d`, `--color-green:#127a4f`,
`--color-lime:#c6f36b`, `--color-phone:#0b0f0d`, `--color-screen:#fbfdfb`, `--color-well:#e6f7ea`,
`--color-cell:#eef5f0`, `--color-card-line:#e3ece6`, `--color-done:#54705f`, `--color-strike:#9ab8a5`,
`--color-box:#b7cdbf`, `--color-avatar:#fde68a`, `--color-avatar-ink:#713f12`, `--color-stars:#b45309`,
`--color-stats:#d6ebe0`, `--color-track:#cfe8d7`, `--color-today-label:#cfe5d8`, `--color-rim:#2c3a33`,
`--color-store-hover:#1d2a24`, `--color-week-bar:rgba(198,243,107,.85)`; `--font-sans: "DM Sans", system-ui, …`;
`--gutter: clamp(16px, 4vw, 40px)`; `--text-display: clamp(2.6rem, 1.2rem + 5vw, 5.2rem)`; `--text-lede:
clamp(1.02rem, .95rem + .35vw, 1.2rem)`. Tailwind's type scale cannot express either clamp.

**DM Sans.** Load it once, as a variable face:
`https://fonts.googleapis.com/css2?family=DM+Sans:wght@400..800&display=swap` (verified **200**); the four
static weights (`wght@400;500;700;800`, also **200**) are an acceptable alternative, because the reference ships
the same variable file under all four names. Weights used: **400** (body, paragraph, facts, stats labels),
**500** (nav links, rating line, day cells, habit rows, stats sub-labels), **700** (score chip, store name,
toast), **800** (headline, wordmark, greeting, streak, avatar).

**Prescribed fixes (behavioural, not cosmetic).**

1. Clamp the toast so the shell never clips it (trap 3); keep the ≤520 re-anchor as-is or move it to 640.
2. Give the seven `href="#"` anchors real destinations (wordmark, four links, two store buttons), and keep
   `aria-current="page"` on the current page's link only — the reference parks it on *Features*.
3. `aria-hidden` the decorative glyphs that are still readable: the five `★` (already hidden), the weekday
   initials on the dark screen, the `M T W T F S S` row, and the habit checkboxes' `<i>` squares (use a `<span>`
   with `aria-hidden`, and let the text carry the state).
4. The phones' contents are **decorative**: keep them inside `role="img"` with an `aria-label` that states what
   they show (habit list, 5 of 7 done, 42-day streak), as the reference does — but the toast's claim SHALL also
   appear in the visible copy so it is not lost to assistive tech.
5. Add the Component Dock `<footer>` below the 100vh hero.
6. Keep the `is-enhanced` **fallback**: with no script the bar wraps and the nav stays visible
   (`.cl-hero04__bar:not(.is-enhanced)`), which is also the SSR/no-JS state the port should not break.

**Do not port:** the `:where(html) … { …: revert }` guard block (**23** `revert` declarations — Tailwind's
preflight covers it), the `[hidden]` re-declaration that only exists to undo it, the dead `.cl-icon` rule, the
`!important` on the facts' and habits' `margin-top` (Tailwind's preflight zeroes neither), the source's `#`
anchors, or the macOS screenshot frame.

## Verification checklist

- [ ] `apps/tendril` exists, package `@free-react-templates/tendril`, `public/CNAME` =
      `tendril.free.componentdock.com`, `"homepage"` = `https://tendril.free.componentdock.com`
- [ ] `npm run verify:app tendril` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-tendril --type spec` is valid
- [ ] measured at 1440 × 900 (motion disabled): bar **1440 × 83.25**; inner **1200 × 83.25** at (120, 0);
      wordmark **92.38 × 34.09** at (160, 24.58) with a **34 × 34** mark; pill **364 × 39.25** at (916, 22) with
      links **96 / 102 / 83 / 65**; hero **1200 × 680** at (120, 151.63); copy **528 × 457.09** at (160, 251.08);
      rating **287.25 × 27.25**; `h1` **528 × 163.06** at (160, 298.33) at **83.2 / 81.536** in **2 lines**;
      paragraph **528 × 89.25** at (160, 479.39); stores **528 × 55.06** at (160, 600.64) with buttons
      **190 × 55.06**; facts **528 × 22.47** at (160, 685.7) with items **130 / 190 / 104**; visual
      **528 × 560** at (752, 199.63); disc **440²** whose right edge is **1280**; front phone **270 × 556** at
      (881, 199.63); screen **250 × 536**; toast **173 × 47.25** at (716, 535.63)
- [ ] back phone box **240 × 494** at (274, 40) with `rotate(8deg)`, measured via `offsetWidth/offsetHeight`
      (**306.42 × 522.59** is its rect, not its size)
- [ ] document height **900** at 1440 and `scrollX === 0`; `scrollWidth === clientWidth` at **1440, 1200, 1100,
      1078, 1077, 1024, 961, 960, 900, 861, 860, 768, 641, 640, 560, 521, 520, 480, 390, 360, 320**
- [ ] document height **1210** at 960, **1184** at 861, **1188** at 860, **1132** at 520 — the ladder is not
      monotonic, and 520 is **15 px taller** than 521
- [ ] facts are **one** row at 1078 (column 472.05) and **two** rows at 1077 (471.58); **three** at 320
- [ ] `h1` is **2 lines** at every width 1440 → 320 and **41.6 px** at 320 (the clamp floor)
- [ ] menu: button appears at **860**, disappears at **861**; panel **358 × 243.38** at (16, 80) at 390;
      `aria-expanded` toggles, label swaps, Escape closes and returns focus, outside click closes, and crossing
      861 closes it
- [ ] toast fully visible at **560** and **521** (the reference loses 20 and 39.5 px) and re-anchored below 520
- [ ] bob measured over ≥ 1 s: the front phone's and the toast's `matrix.f` move between 0 and −10 in opposite
      phase; under `prefers-reduced-motion: reduce` both are `none` and every transition is `none`
- [ ] hover: nav link inverts to white/ink; store button `translateY(-2px)` and `#1d2a24`; focus-visible is a
      **3 px** `#127a4f` outline at **3 px** offset on every link and the button
- [ ] no `<form>`, no `<input>`, no `<img>`; exactly **one** `<h1>`, **zero** `<h2>`, **two** ids
      (`…-nav`, `…-title`); footer links `https://www.componentdock.com/`
- [ ] contrast: ink/ground **13.00**, green/ground **4.75**, muted/ground **6.73**, white/ink **14.64**,
      lime/ink **11.46**, white/phone **19.29** — unchanged if the tokens are used as specified
- [ ] `git grep -il 'colorlib\|hero-04' apps/tendril` → **no hits** (the wordmark is **Tendril**, never the
      source's brand; a bare `loop` grep is not a fidelity check either way)
