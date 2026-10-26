# Template: Trattoria (Hero — a full-bleed restaurant hero: a dining-room photograph under a layered dark wash, a centred serif wordmark over a three-column bar, and a translucent opening-hours card)

## Purpose

**One landing screen for a restaurant** — the eighth variant of the `hero` snippet family, and its first
**hospitality** hero: the seven before it sold software, a physical product, a newsletter or conference tickets,
and this is the first whose subject is a place you sit down in. A **1400 × 933 JPEG of a laid dining table** fills the
viewport edge to edge (`object-fit: cover`, `object-position: 50% 60%`) and is held back by **two stacked dark
washes** — a 180° fade that is 78 % opaque at the top and 92 % at the foot, plus a 90° fade that runs 85 %→10 %
left to right — so the type on the left is legible while the plate on the right still reads. Over that: a **three
column bar** (four tracked-out nav links · a **two-line centred wordmark** · a phone number on the right, with a
44 px circular menu button that only exists below 861), then a **two-column hero** whose **right** track is a
**340 px translucent card** — hairline border, `backdrop-filter: blur(12px)`, a serif `h2`, a four-row `dl` of
opening hours separated by dashed rules, then a pin icon and the address with an italic footnote.

The copy column is the family's first with **no button pair of equal weight**: one **filled gold bar, radius 2**
(almost square — the only sharp-cornered CTA in the eight variants) beside an _underlined_ text link with a
trailing arrow that **grows its gap** on hover instead of sliding the glyph. The headline is **sentence case in a
serif** (Playfair Display 500) with one **gold italic word** inside it — the family's first italic accent inside an
`h1` that is neither uppercase nor tracked.

Photography is the design: there is **one** `<img>` (decorative, `alt=""`), **no** `<form>`, **no** `<input>`, **one**
`<h1>`, **one** `<h2>`, **1** `<button>` and **8** `<a>` — seven of them `href="#"` and the eighth a **redacted**
`tel:+441****0148` (trap 6). One script (`js/snippet.js`, 1,363 B) drives the menu and nothing else.

At 1440 × 900 the document is **exactly 900 px**: the bar is 83.89 and the hero is **748.25**, bottom-aligned in
an 816.11 px `main` by `align-items: flex-end`. That fit is a **band**, and a narrow one in the middle: **900** at
every width from **961** up, **900** only from **521 to 583** below the collapse, and **1013 / 976 / 906** in
between (the ladder below lists every seam).

- **Source slug:** `hero-08`
- **ColorLib page:** https://colorlib.com/wp/template/hero-08/ — **HTTP 200, 113,962 B**, `<title>`
  `Hero V08 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V08"**, `datePublished`
  **2026-09-25T15:09:07+00:00**, meta description _"A full-screen restaurant hero with a dining-room photo under a
  layered dark overlay, a centred serif wordmark and… Free download, no jQuery or plugins."_, and the claim
  _"the download is 298 KB"_ (measured **305,372 B = 298.2 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V08".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-08/ — **HTTP 200,
  4,080 B**, `<title>` `Hero V08 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=950359f3`,
  `fetchpriority="high"`) and **one** `<script src="js/snippet.js?v=2baa9bc8">`. The slug-only path
  `theme/hero-08/` is **404 (9 B)** and `theme/bb/hero-08/` is **404 (9 B)**: the `bootstrap/` prefix is the only
  live path, as for every card, alert and hero variant before it.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-08.jpg — **HTTP 200, 63,869 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name. It is a **macOS browser mock-up** on a white ground with
  a drop shadow and a `preview.colorlib.com` URL pill; the page inside the frame is **~1120 px** wide. Do not adopt
  the frame.
- **Design category:** Hero (**restaurant / hospitality hero — full-bleed photograph, layered dark wash, centred
  two-line wordmark between nav and phone, gold square-cornered CTA, translucent hours card**; variant 8 of the
  **12**-variant `hero` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/trattoria`, package
  `@free-react-templates/trattoria`, CNAME `trattoria.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows (the only `[~]` is the status legend on line 12) — so this design comes from `docs/catalog-coverage.md`, which lists **214 snippet variants in 19 families**
that ColorLib's own listing carries and the checklist never recorded. `hero-08` is **variant 8 of 12** in the
`hero` family. The family is worked in variant order: 1 → proscenium (shipped), 2 → afterglow (shipped), 3 →
presswork (shipped), 4 → tendril (shipped), 5 → epistle (shipped), 6 → overtone (prepped, not yet built), 7 →
soapbox (prepped, not yet built), and this prep is **variant 8**.

## Bootstrap Heroes (12)

`## Bootstrap Heroes (12)` opens at **line 830** of `TEMPLATES.md`, between `## Bootstrap Footers (20)` and
`## Bootstrap Modals (20)`. Answered on main `dc1da0d88` the section holds **five** rows — Hero 01 → proscenium,
Hero 02 → afterglow, Hero 03 → presswork, Hero 04 → tendril, Hero 05 → epistle. The row grammar in this section is
`[colorlib] · ![preview] · [app]` — **preview in the middle**:

```markdown
- [x] **Hero 08** — [colorlib](https://colorlib.com/wp/template/hero-08/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-08.jpg) · [trattoria](https://trattoria.free.componentdock.com)
```

Insert it **after** whichever hero rows exist at that moment, keep that grammar, and **re-read the surrounding
lines immediately before pushing** — the implementer streams rewrite this file, and the section grew a row
mid-run at least twice.

**The name.** `trattoria` — one lowercase word for the kind of place the design is (a wood-fired Italian
restaurant), it keeps the snippet families' closed-single-word pattern (`nameplate`, `octavo`, `wafer`,
`proscenium`, `tendril`, `epistle`, `overtone`, `soapbox`), and it is not the source's invented name. Verified free
on main: `git grep -il trattoria` → **0 files**; no `apps/trattoria`; no `openspec/specs/template-trattoria`; no
`docs/templates/trattoria`; no `**Trattoria**` row in `TEMPLATES.md`; and all three ColorLib URLs miss —
`colorlib.com/wp/template/trattoria/` **404**, `preview.colorlib.com/theme/trattoria/` **404**,
`preview.colorlib.com/theme/bootstrap/trattoria/` **404**.

Checked and **free** for later variants of this family: **`larder`**, **`woodsmoke`**, **`osteria`**,
**`firelight`**, **`vinoteca`**, **`salumi`** — each **0 files, 0 folders, all three ColorLib URLs 404**. Rejected
on measurement: `hearth` (29 files, an app), `supper` (25 files, an app), `tavern` (20 files, an app), `mizzen`
(20 files, an app), `charcoal` (859 files, a spec exists), `banquette` (3 files, a spec), `taverna` (3 files, a
spec), `pantry` (6 files), `cellar` (8 files), `marrow` (24 files), `bruschetta` (9 files), `cucina` (1 file — not
zero).

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium)

| what              | value                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 4,080 B** live (**3,840 B** in the archive), `<title>` "Hero V08 \| Colorlib", `lang="en"`, **one** stylesheet, **one** `<script>`                                                                                                                                                                                                                                                                                                       |
| preview path      | **`theme/bootstrap/hero-08/`**; `theme/hero-08/` **404** (9 B), `theme/bb/hero-08/` **404** (9 B)                                                                                                                                                                                                                                                                                                                                               |
| stylesheet        | `css/style.css?v=950359f3`, **13,589 B**, **592** lines, sha256 `2f0c26aac0b2b1d0…` (**identical** in the archive)                                                                                                                                                                                                                                                                                                                              |
| script            | `js/snippet.js?v=2baa9bc8`, **1,363 B**, **40** lines, one IIFE, sha256 `6ab20dd81e6e9117…` (**identical** in the archive); menu only, nothing else                                                                                                                                                                                                                                                                                             |
| archive           | `preview.colorlib.com/downloads/free/hero-08.zip`, **200, 305,372 B** (= 298.2 KiB ✓ the page's "298 KB"), **16 entries** = 5 dirs + **11 files**                                                                                                                                                                                                                                                                                               |
| archive contents  | `index.html` 3,840 B, `css/style.css` 13,589 B, `js/snippet.js` 1,363 B, `README.md` 1,260 B, **`images/dining.jpg` 141,870 B**, `fonts/` **6 files**                                                                                                                                                                                                                                                                                           |
| live ↔ archive    | CSS **and** JS **and the JPEG identical sha256**; the two HTML files differ **only in the `<head>`** (robots pair, cdnjs `dns-prefetch`, `fetchpriority`, `?v=`) — **live preview verified; the archive is its un-versioned twin**                                                                                                                                                                                                              |
| README            | advertises `index.html`, `css/style.css`, `js/snippet.js`, `fonts/` **and `images/`** — and for the **first time in eight variants it ships one** (`images/dining.jpg`)                                                                                                                                                                                                                                                                         |
| inner pages       | **none** — `index.html` is **200, 4,080 B**, **byte-identical** to the directory URL; one HTML file in the archive                                                                                                                                                                                                                                                                                                                              |
| images            | **one** — `images/dining.jpg`, **1,400 × 933**, **141,870 B**, JFIF/JPEG (not AVIF), `alt=""`, `width/height` declared, `fetchpriority="high"`, `decoding="sync"`                                                                                                                                                                                                                                                                               |
| icons             | **4** inline `<svg>` — hamburger (24), close (24), the CTA arrow (18), the address pin (16 + circle)                                                                                                                                                                                                                                                                                                                                            |
| fonts (declared)  | **6** `@font-face`, all **Playfair Display**: `500 normal`, `500 italic`, `600 normal`, each × subsets `latin` / `latin-ext`; **no** Google Fonts `<link>`, no `@import`                                                                                                                                                                                                                                                                        |
| fonts (binaries)  | **6** files, **2 distinct sizes per style**: `500-latin` **38,460 B**, `500-latin-ext` **20,980 B**, `600-latin` **38,460 B**, `600-latin-ext` **20,980 B**, `500-italic-latin` **23,100 B**, `500-italic-latin-ext` **14,124 B** — the two roman weights are the **same 38,460 / 20,980 binaries served under two names** (verify the outline before calling that a duplicate download)                                                        |
| body font         | **system UI stack** (`system-ui, -apple-system, "Segoe UI", Roboto, …`) — unlike every sibling, the body text is **not** a webfont; Playfair is display-only                                                                                                                                                                                                                                                                                    |
| Google Fonts      | `css2?family=Playfair+Display:wght@500;600` → **200**; `css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500` → **200**                                                                                                                                                                                                                                                                                                                     |
| classes           | **29** distinct markup classes; **28** `cl-` rules; **1** markup class with **no rule at all** (`__copy` — a pure container); **1** dead rule (`.cl-icon`, unused here — the nineteenth consecutive snippet to carry it); state classes `is-enhanced` / `is-open` exist only in CSS + script                                                                                                                                                    |
| custom properties | **6** on `.cl-hero08` — `--cl-hero08-cream` `#f6ede0`, `--soft` `#e6d9c6`, `--gold` `#e2b86b`, `--dark` `#14100c`, `--serif` `"Playfair Display", Georgia, "Times New Roman", serif`, `--gutter` `clamp(16px,4vw,48px)`; **24** `var()` reads                                                                                                                                                                                                   |
| CSS anatomy       | **93** `{` blocks (= 6 `@font-face` + 5 `@media` wrappers + **82** style rules); queries **1080 / 960 / 860 / 520** + reduced motion; **23** `revert` declarations in the `:where(html)` guard; **3** `!important`; **1** `@keyframes` (`cl-hero08-zoom` 24 s), **2** `animation` declarations (the zoom + the reduced-motion kill switch), **4** `transition`s, **5** gradients, **0** `box-shadow`s (the card is hairline + blur, not shadow) |
| colours           | **10** hex literals / **7** distinct (`#14100c`, `#f6ede0`, `#e6d9c6`, `#e2b86b`, `#f0cd8c`, `#fff`, `#000` in the mask) + **21** `rgba()` / **18** distinct = **25** colour values                                                                                                                                                                                                                                                             |
| controls          | **0** `<form>`, **0** `<input>`, **1** `<button>` (the menu toggle), **4** inline `<svg>`, **1** `<img>`, **8** `<a>` — **7** `href="#"` and **one** `tel:` whose number is **redacted** in the shipped file                                                                                                                                                                                                                                    |
| headings          | **1** `<h1>` ("Slow suppers, _fired_ by oak and olive wood"), **1** `<h2>` ("Opening hours"), **0** `<h3>`                                                                                                                                                                                                                                                                                                                                      |
| landmarks         | `<header class="cl-hero08__bar">` → `<nav aria-label="Main">` + `<a>` wordmark + `<a>` phone + `<button>`; `<main>` → **one** `<section aria-labelledby>` → `<aside aria-labelledby>`; **no `<footer>`**                                                                                                                                                                                                                                        |
| ids               | **3** — `cl-hero08-nav` (the button's `aria-controls`), `cl-hero08-title` (`aria-labelledby` of the section), `cl-hero08-hours-title` (`aria-labelledby` of the aside)                                                                                                                                                                                                                                                                          |
| behaviour         | one IIFE, **one** initialiser: `initMenu` (adds `is-enhanced`, click toggles `is-open` + `aria-expanded` + `aria-label`, nav link click closes, Escape closes **and refocuses the button**, outside click closes, `matchMedia('(min-width: 861px)')` closes)                                                                                                                                                                                    |

## Design tokens

Extracted from `css/style.css` (canonical over the screenshot) and re-read off the live render. **25 colours**,
not the six custom properties: the hover gold, the focus ring and the eighteen `rgba()` washes each carry their own.

| role                    | value                                                                               | where it is measured                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ground (page + overlay) | `#14100c`                                                                           | `body`, `.cl-hero08`; every `rgba(20,16,12,…)` wash is this colour at alpha                                                |
| cream (primary text)    | `#f6ede0`                                                                           | `h1`, wordmark, hours `h2`, `dd`, phone, nav hover, hairline base                                                          |
| soft (secondary text)   | `#e6d9c6`                                                                           | standfirst, nav links, address note, `dt`, phone at rest                                                                   |
| gold (accent)           | `#e2b86b`                                                                           | eyebrow + its rule, wordmark sub, the italic `em`, CTA fill, focus ring, pin, current-page underline                       |
| gold hover              | `#f0cd8c`                                                                           | the CTA's `:hover` fill                                                                                                    |
| white                   | `#fff`                                                                              | nav link hover / `aria-current="page"` only                                                                                |
| bar hairline            | `rgba(246,237,224,.18)`                                                             | `border-bottom` of the bar and of the ≤860 panel                                                                           |
| link hairline           | `rgba(246,237,224,.50)`                                                             | the underline under "View tonight's menu" (gold on hover)                                                                  |
| card border             | `rgba(246,237,224,.22)`                                                             | the hours card's 1 px frame                                                                                                |
| card ground             | `rgba(20,16,12,.72)`                                                                | the hours card, over `backdrop-filter: blur(12px)`                                                                         |
| row rules               | `rgba(246,237,224,.22)` dashed                                                      | every `dl` row's `border-bottom`                                                                                           |
| menu button             | `rgba(20,16,12,.40)` on 1 px `rgba(246,237,224,.40)`                                | the 44 px circle at ≤860                                                                                                   |
| panel ground            | `rgba(20,16,12,.97)`                                                                | the ≤860 menu panel                                                                                                        |
| panel row rules         | `rgba(246,237,224,.12)`                                                             | each panel link's `border-bottom`                                                                                          |
| overlay 180°            | `.78 / .25 @26% / .35 @55% / .92`                                                   | the vertical wash on `.cl-hero08::before`                                                                                  |
| overlay 90°             | `.85 / .35 @60% / .10`                                                              | the horizontal wash, same pseudo-element (left dark → right light)                                                         |
| overlay ≤860            | `.75 / .30 @22% / .60 @45% / .95 @70%`                                              | the single vertical wash that replaces both below 861                                                                      |
| photo mask ≤520         | `#000` → `transparent` at 55 %                                                      | `mask-image: linear-gradient(180deg, #000 55%, transparent)`                                                               |
| font family (display)   | `"Playfair Display", Georgia, "Times New Roman", serif`                             | wordmark 28 px, `h1`, hours `h2`, the panel links at ≤860                                                                  |
| font family (body)      | `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | everything else; **16 px / 1.6**                                                                                           |
| radii                   | 2 / 50 % / 0                                                                        | the CTA (`2px`), the menu button (`50 %`), **everything else is square — the card has no radius**                          |
| display type            | `clamp(2.6rem, 1.3rem + 4.6vw, 5.6rem)`                                             | **87.04 px** at 1440, 79.68 at 1280, 70.48 at 1080, 65.01 at 961, 47.66 at 584, **41.6 (floor, from 452 down)** at 390/320 |
| headline leading        | `1.02` with `letter-spacing: -.02em` and `text-wrap: balance`                       | 88.78 line box at 1440; the `em` inherits both                                                                             |
| eyebrow                 | `13px / 600 / .24em`, uppercase, gold, 40 × 1 px rule at `gap: 14`                  | 20.8 tall; wraps to 2 lines at ≤432                                                                                        |
| nav link                | `13.5px / 500 / .12em`, uppercase, soft                                             | 24 tall at 1440; **wraps to 2 lines between 861 and 1193** (trap 3)                                                        |
| wordmark                | **28 px / 600** Playfair over **11 px / 600 / .3em** gold uppercase (+ `4px` gap)   | 46.89 tall, 177.38 wide at "Osteria Lume"                                                                                  |
| standfirst              | `clamp(1rem, .96rem + .25vw, 1.15rem)` = **18.4 px / 29.44**, `max-width: 34em`     | **625.6** at 1440 — the copy is the measure, not the column                                                                |
| hours `dl`              | `14.5px`, rows `padding: 9px 0`, `dd` `tabular-nums`                                | row **42.19** tall; block **168.75** for four rows                                                                         |
| gutter                  | `clamp(16px, 4vw, 48px)`                                                            | 48 at ≥1200, 34.4 at 860, 20.8 at 520, 16 at ≤400                                                                          |
| hero padding            | `clamp(80px,12vw,180px)` top · gutter sides · `clamp(40px,6vw,72px)` bottom         | 172.8 / 48 / 72 at 1440; 80 / 16 / 40 at ≤520                                                                              |
| hero gap                | `clamp(32px, 5vw, 80px)`                                                            | **72** at 1440 (5vw = 72 exactly), 60.5 at 1210, 32 at ≤640                                                                |
| bar                     | `padding: 18px gutter`, `gap: 24`, `max-width: 1320`                                | **83.89** tall at ≥1194, **88.19** at 861–1193, **83.89** again at ≤860, **81** at ≤520                                    |

**Radius note for the port:** Tailwind's `rounded-none` is the hours card and the panel; the CTA's **2 px** is
`rounded-[2px]` (not `rounded-sm`, which is 4 px in Tailwind 4) and the menu button is `rounded-full`. There is
**no shadow** anywhere in the reference — the card reads as a card because of the hairline border and the
`backdrop-blur-[12px]`, so `shadow-*` utilities must not be added.

## Page arithmetic at 1440 × 900 (measured, motion disabled)

| element            | box                                                                                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.cl-hero08`       | **1440 × 900** (document); `min-height:100vh`, flex column, **`overflow:hidden`**, `isolation:isolate`; `#14100c`; `16px / 1.6`                                                                         |
| `img.__bg`         | `absolute; inset:0; z-index:-2`, 1400 × 933 source; **measured 1552.37 × 970.23 at (-56.19, -35.12)** because the 24 s zoom is at **scale 1.0708** when sampled; `object-position: 50% 60%`             |
| `::before` overlay | `absolute; inset:0; z-index:-1`; two `linear-gradient` layers (180° + 90°)                                                                                                                              |
| `header.__bar`     | **1440 × 83.89** at (0, 0) — 82.89 of grid + the 1 px hairline                                                                                                                                          |
| `__bar-inner`      | **1320 × 82.89** at (60, 0), `padding: 18px 48px`, `gap: 24`, `grid-template-columns: 1fr auto 1fr`, `max-width: 1320`                                                                                  |
| `nav`              | **499.31 × 25.59** at (108, 28.64); `ul` `display:flex; gap:26`; link **46.64 × 24** at (108, 29.64), `padding: 4px 0`                                                                                  |
| wordmark           | **177.38 × 46.89** at (631.31, **18**) — name **177.38 × 30.8** at y 18, sub **177.23 × 12.09** at y 52.8                                                                                               |
| phone              | **117.81 × 22.39** at (1214.19, 30.25) — right edge 1332 = 60 + 1320 − 48                                                                                                                               |
| menu button        | `display:none` at ≥861 (zero rect); **44 × 44** circle at ≤860                                                                                                                                          |
| `main`             | **1440 × 816.11** at (0, 83.89); `flex:1; display:flex; align-items:flex-end`                                                                                                                           |
| `section`          | **1320 × 748.25** at (60, **151.75**) — bottom-aligned, so its foot is 900 and 67.86 px of `main` stays empty above it                                                                                  |
| `__hero` grid      | `grid-template-columns: minmax(0,1fr) 340px`, `gap: 72`, `align-items: end`, `padding: 172.8px 48px 72px`, `max-width:1320`                                                                             |
| copy column        | **812 × 503.45** at (108, **324.55**)                                                                                                                                                                   |
| eyebrow            | **812 × 20.8** at (108, 324.55) — **13 px / 600 / 3.12** uppercase gold, a **40 × 1** rule at `gap: 14`                                                                                                 |
| `h1`               | **812 × 266.34** at (108, **363.34**) — **87.04 / 88.78 line box / 3 lines**, weight **500**, `margin: 18px 0 20px`, `max-width: 13em` = 1131.52                                                        |
| `em` ("fired")     | **169.3 × 116** at (108, 438.13) — gold, `font-style: italic`, Playfair 500, inside line 2                                                                                                              |
| standfirst         | **625.59 × 88.31** at (108, **649.69**) — **18.4 / 29.44 / 3 lines**, soft, `max-width: 34em` = 625.6                                                                                                   |
| actions row        | **812 × 56** at (108, **772**) — `margin-top: 34`, `flex-wrap`, `gap: 16px 28px`                                                                                                                        |
| CTA                | **209.25 × 56** at (108, 772) — `min-height:56`, `padding: 0 34px`, radius **2**, `#e2b86b`, ink label **14 / 700 / 2.24** uppercase                                                                    |
| text link          | **192.5 × 38.59** at (**345.25**, 780.7) — 16 / 500, `padding: 6px 0`, 1 px `rgba(246,237,224,.5)` underline, 18 px arrow at `gap: 10`                                                                  |
| hours card         | **340 × 360.31** at (992, **467.69**) — `padding: 26px 28px`, 1 px `rgba(246,237,224,.22)`, `rgba(20,16,12,.72)`, `backdrop-filter: blur(12px)`, **no radius**; its foot is 828 = hero's content bottom |
| card `h2`          | **282 × 35.19** at (1021, 494.69) — **22 / 500** Playfair                                                                                                                                               |
| card `dl`          | **282 × 168.75** at (1021, 543.88) — four rows **42.19** each (9 + 23.19 + 1 px dashed)                                                                                                                 |
| address            | **282 × 44.78** at (1021, **728.63**) — 14 px, a 16 px gold pin, wraps to 2 lines at 340 wide                                                                                                           |
| note               | **256 × 21.59** at (1047, 779.41) — 13.5 px italic soft, `margin: 6px 0 0 26px`                                                                                                                         |

**Where 900 comes from.** The hero is 748.25 tall (copy 503.45 + 172.8 + 72), `main` is 816.11, and
`align-items:flex-end` parks the section's foot on the document's foot — 83.89 + 816.11 = **900** exactly, with
67.86 px of slack above the section. There is no `overflow:auto` on the content path; the root's `overflow:hidden`
exists only to clip the zoomed photograph.

## The seven devices

**1. One photograph, two washes, one slow push-in.** `.cl-hero08__bg` is `absolute; inset:0; z-index:-2;
object-fit:cover; object-position:50% 60%` with `animation: cl-hero08-zoom 24s ease-out both` whose only keyframe
is `from { transform: scale(1.08) }`. The overlay is a **single** `::before` at `z-index:-1` carrying **two**
`linear-gradient` layers: `180deg` (`.78 0% → .25 26% → .35 55% → .92 100%`) and `90deg` (`.85 0% → .35 60% →
.10 100%`). The vertical wash protects the bar and the foot; the horizontal one is what makes the left column
readable over a bright plate. Below 861 a **third** set of stops replaces both (`.75/.30/.60/.95`), and at ≤520 the
photograph itself is **cropped to 75vh and masked** (`linear-gradient(180deg, #000 55%, transparent)`), so the
lower half of the page is flat ground.

**2. The bar is a three-track grid, not a flex row.** `grid-template-columns: 1fr auto 1fr` with the nav first,
the wordmark second (auto — its width _is_ the centre), and `.bar-end` third (`justify-content:flex-end`). That is
why the wordmark is optically centred while the nav is left-aligned: a flex bar with `space-between` cannot
produce it. Below 861 the enhanced bar overrides to `1fr auto`, moves the wordmark's items to `start`, and the nav
becomes an absolutely positioned panel **inside the bar**.

**3. The nav links wrap before the bar does.** `.cl-hero08__links` is `display:flex; gap:26` with **no**
`flex-wrap`, so when the `1fr` track shrinks the anchors themselves wrap: at **≤1193** every link except "Menu"
is **49.6** tall instead of 24, the nav is **51.19**, and the bar grows **83.89 → 88.19**. The bar is otherwise
sized by the **wordmark** (46.89 + 36 padding + 1 border = 83.89), not by the nav.

**4. The headline is sentence case with one italic word.** `.cl-hero08__title` is Playfair **500** at
`clamp(2.6rem, 1.3rem + 4.6vw, 5.6rem)`, `line-height: 1.02`, `letter-spacing: -.02em`, `text-wrap: balance`,
`max-width: 13em`; the `em` is the only coloured run and inherits the parent's size. **`text-wrap: balance` is
load-bearing**: the browser chooses the break points, so the line count moves **3 → 2 at 1226** and back to
**3 → at 428** with no change to the column — the balanced breaks are not what a plain `max-width` produces.

**5. The CTA is almost square and the secondary link animates its gap.** `.__book` is a 56 px flex bar with
`border-radius: 2px`, `padding: 0 34px`, gold ground and an ink label marked `!important` (trap 4). `.__menu-link`
is a text link on a 1 px rule whose `:hover` changes `border-color` **and** grows `gap: 10 → 14`, so the 18 px
arrow slides 4 px without any transform.

**6. The hours card is a blur, not a shadow.** `padding: 26px 28px; border: 1px solid rgba(246,237,224,.22);
background: rgba(20,16,12,.72); backdrop-filter: blur(12px)` and **no** `border-radius`. `backdrop-filter` needs a
translucent background to do anything — dropping the `.72` wash turns the card into a solid block and dropping the
blur lets the photograph's stemware fight the `dl`. Rows are `display:flex; justify-content:space-between` with a
**dashed** hairline; the note is indented **26 px** (the pin's 16 + its 10 gap) so it aligns under the address
text, not under the pin.

**7. One script, one job.** `snippet.js` adds `is-enhanced` to the bar unconditionally, then wires the toggle,
the panel's link clicks, Escape (close **and** refocus), an outside click, and a `matchMedia('(min-width: 861px)')`
listener. There is no scroll handler, no observer, no form, no timer.

## Width ladder (measured, `getBoundingClientRect`, after `document.fonts.ready`)

| vw       | docH     | h1 px | h1 lines | hours card (w × h) | bar       | notes                               |
| -------- | -------- | ----- | -------- | ------------------ | --------- | ----------------------------------- |
| 1440     | **900**  | 87.04 | 3        | 340 × 360.31       | 83.89     | two columns, phone visible          |
| **1416** | 900      | 85.94 | **3**    | 340 × 360.31       | 83.89     | the 812 px column is the measure    |
| 1415     | 900      | 85.89 | **2**    | 340 × 360.31       | 83.89     |                                     |
| 1360     | 900      | 83.36 | 2        | 340 × 360.31       | 83.89     | balanced breaks fit in two          |
| 1280     | 900      | 79.68 | 2        | 340 × 360.31       | 83.89     |                                     |
| **1226** | 900      | 77.24 | **2**    | 340 × 360.31       | 83.89     | title seam                          |
| 1225     | 900      | 77.19 | **3**    | 340 × 360.31       | 83.89     |                                     |
| 1200     | 900      | 76.00 | 3        | 340 × 360.31       | 83.89     |                                     |
| **1194** | 900      | 75.72 | 3        | 340 × 360.31       | **83.89** | nav no longer wraps                 |
| 1193     | 900      | 75.68 | 3        | 340 × 360.31       | **88.19** | nav links wrap to two lines         |
| 1100     | 900      | 71.40 | 3        | 340 × 360.31       | 88.19     |                                     |
| **1081** | 900      | 70.53 | 3        | 340 × 360.31       | 88.19     | phone visible last width            |
| 1080     | 900      | 70.48 | 3        | 340 × 360.31       | 88.19     | phone hidden                        |
| 1024     | 900      | 67.90 | 3        | 340 × 360.31       | 88.19     |                                     |
| 1000     | 900      | 66.80 | 3        | 340 × 360.31       | 88.19     |                                     |
| **961**  | **900**  | 65.01 | 3        | 340 × 360.31       | 88.19     | last two-column width               |
| 960      | **1013** | 64.96 | 2        | **460** × 337.92   | 88.19     | one column, card capped at 460      |
| 900      | 993      | 62.20 | 2        | 460 × 337.92       | 88.19     |                                     |
| 861      | 980      | 60.41 | 2        | 460 × 337.92       | 88.19     | menu button absent last width       |
| **860**  | 976      | 60.36 | 2        | 460 × 337.92       | **83.89** | menu button present, nav absolute   |
| 768      | 945      | 56.13 | 2        | 460 × 337.92       | 83.89     |                                     |
| 700      | 922      | 53.00 | 2        | 460 × 337.92       | 83.89     |                                     |
| 640      | 906      | 50.24 | 2        | 460 × 337.92       | 83.89     |                                     |
| **584**  | **901**  | 47.66 | 2        | 460 × 337.92       | 83.89     | 100vh fit ends                      |
| 583      | **900**  | 47.62 | 2        | 460 × 337.92       | 83.89     | last width that still fits in 900   |
| **521**  | **900**  | 44.77 | 2        | 460 × 337.92       | 83.89     | last width before the compact block |
| **520**  | **1195** | 44.72 | 2        | 460 × 325.92       | **81**    | 38vh top padding, 75vh masked photo |
| 480      | 1191     | 42.88 | 2        | 441.63 × 325.92    | 81        |                                     |
| **433**  | 1214     | 41.60 | 2        | 398.38 × 325.92    | 81        | eyebrow on one line last width      |
| 432      | 1235     | 41.60 | 2        | 397.47 × 325.92    | 81        | eyebrow wraps to two lines          |
| 429      | 1235     | 41.60 | 2        | 394.69 × 325.92    | 81        |                                     |
| **428**  | **1278** | 41.60 | **3**    | 393.78 × 325.92    | 81        | title wraps to three lines          |
| 390      | 1277     | 41.60 | 3        | 358 × 325.92       | 81        | standfirst 4 lines                  |
| 360      | 1276     | 41.60 | 3        | 328 × 325.92       | 81        |                                     |
| 320      | 1324     | 41.60 | 3        | 288 × **348.31**   | 81        | standfirst 5 lines, address wraps   |

Five things this table says that a hand-written one would get wrong:

1. **The 100vh fit is not "everything above 960".** It is **900** from 961 to 1440, **900** again only from **521
   to 583**, and content-driven everywhere between: **1013 @960, 993 @900, 976 @860, 945 @768, 922 @700, 906 @640,
   901 @584**. Narrowing 584 → 583 _reduces_ the document by one pixel; 521 → 520 **adds 295**.
2. **The h1 alternates 2 / 3 lines four times.** `text-wrap: balance` chooses the breaks against a column that
   narrows while the type grows, so the measured line count is **3 at 1416–1440**, **2 at 1226–1415**, **3 at
   1225–961**, **2 at 960–429**, **3 at 428 and below**. There is no single threshold to memorise, and a port that
   hard-codes a `<br>` or a `max-width` will disagree somewhere in that list.
3. **The bar has three heights and two causes.** **83.89** when the wordmark is the tallest thing (≥1194 and
   ≤860), **88.19** when the wrapped nav is (861–1193), **81** at ≤520 (logo name drops to 24 px).
4. **The card's height moves 360.31 → 337.92 at the collapse**, not because its padding changes but because it
   gets **460** wide instead of 340 and the address stops wrapping: 44.78 → 21.59.
5. **The compact block is a 295 px cliff at 520.** `padding-top: 38vh` plus a 75vh photograph is a _mobile_
   composition, not a scaled desktop one — the document is **1195** at 520 and stays above 1190 to 320.

## The traps (all cost real measurement time)

1. **`main` is `align-items: flex-end`, not `center`.** The hero hangs from the bottom of the viewport, so its top
   edge is `900 − 748.25 = 151.75`, not a centring offset. Every sibling variant centres; copying their arithmetic
   here moves the whole section 67.86 px up.
2. **The photograph is scaled by the animation when you measure it.** `getBoundingClientRect()` on `.__bg` reads
   **1552.37 × 970.23 at (-56.19, -35.12)** because the 24 s zoom is mid-flight (`scale 1.0708`). Disable
   animations (`prefers-reduced-motion` or `page.emulateMedia`) before asserting the layer is `1440 × 900`.
3. **The nav wraps before any query fires.** There is no `@media` between 861 and 1080 for the links; they wrap
   because the `1fr` track shrinks (trap: bar **+4.3 px** at ≤1193, and each link becomes 49.6 tall).
4. **The CTA's ink label needs `!important` in the reference — and the port must not need it.** `.cl-hero08 a {
color: inherit }` is `(0,1,1)` and beats `.__book`'s `(0,1,0)`, so the author wrote
   `color: var(--cl-hero08-dark) !important`. In React put the colour on the element's own class at the same
   specificity or use `text-[#14100c]` on the `<a>` — never reintroduce `!important` to keep the cascade honest.
5. **The focus ring is gold on gold — 1.0 : 1.** `.cl-hero08 a:focus-visible` draws `2px solid #e2b86b` at 4 px
   offset, and the CTA's own ground is `#e2b86b`. Measured on the live page: the ring is invisible on the only
   filled control. The hours card has no links, so nothing else is affected. Fix in the port (below).
6. **The `tel:` href is redacted.** The shipped anchor is `href="tel:+441****0148"` — a placeholder with four
   asterisks. It is not dialable on any device. The port SHALL ship a real number.
7. **`.cl-hero08__copy` has no rule.** It is the grid's first track (812 = 1224 − 340 − 72). Do not look for
   padding that is not there, and do not "restore" it as a component with a class.
8. **The card has no radius and no shadow.** `border-radius: 0` and `backdrop-filter: blur(12px)` — adding
   `rounded-xl` or `shadow-lg` (as five of the first seven variants' cards do) breaks the look more than any colour
   change would.
9. **The backdrop blur is invisible without the wash.** `.72` alpha is what lets the blur read; on a solid ground
   the card is just a bordered box, and `backdrop-filter` on an element whose background is opaque does nothing.
10. **The mask at ≤520 is on the `<img>`, not on a wrapper.** `mask-image: linear-gradient(180deg,#000 55%,
transparent)` fades the _photograph's own_ bottom, so the section behind it (the `#14100c` ground) shows
    through — a wrapper with `opacity` would fade the overlay too and dull the CTA.
11. **`38vh` top padding at ≤520 is measured against the viewport, not the section.** With a 75vh photo the
    headline lands over the photo's masked lower edge; changing the photo height without changing the padding
    moves the headline off the photograph entirely.
12. **Six `@font-face` rules, two binaries per subset.** The 500 and 600 roman files are byte-identical in size
    (38,460 / 20,980); the _italic_ 500 is a separate, smaller pair (23,100 / 14,124). Do not conclude the
    download is corrupted — and do not copy the binaries: load Playfair from Google Fonts.
13. **`.cl-icon` is dead again** (nineteenth consecutive snippet), and the `:where(html) … { all: revert }` guard
    (23 declarations) plus its `[hidden]` re-declaration exist only to survive a host page's Bootstrap reboot.
    Neither belongs in the port.
14. **`is-enhanced` gates the whole mobile bar.** Without it the ≤860 block styles nothing and the bar falls back
    to a centred stacked layout (`:not(.is-enhanced)`). React renders the enhanced state, so the panel must be in
    the DOM and reachable, and the toggle must keep `aria-expanded` + `aria-label` in sync.

## Contrast (computed from the token pairs)

| text                                                       | pair              | ratio            |
| ---------------------------------------------------------- | ----------------- | ---------------- |
| cream `#f6ede0` on the ground `#14100c`                    | cream / dark      | **16.33**        |
| standfirst + `dt` + note `#e6d9c6` on the ground           | soft / dark       | **13.62**        |
| eyebrow, gold italic, gold labels on the ground            | gold / dark       | **10.19**        |
| CTA ink label on its gold fill                             | ink / gold        | **10.19**        |
| CTA ink on the `#f0cd8c` hover                             | ink / gold-hover  | **12.46**        |
| nav hover / current link                                   | white / dark      | **18.93**        |
| card text, worst case (card over a bright `#c9b49a` photo) | cream / `#473e34` | **9.02**         |
| card `dt` and note, same worst case                        | soft / `#473e34`  | **7.53**         |
| card pin + current-page underline, same worst case         | gold / `#473e34`  | **5.63**         |
| menu panel links                                           | cream / `#191510` | **15.66**        |
| **focus ring gold on the gold CTA (UI, needs 3)**          | gold / gold       | **1.00** — fails |
| focus ring gold on the dark ground (UI)                    | gold / dark       | **10.19**        |

One failure, and it is the same class of defect Soapbox shipped: the ring is drawn in the colour of the surface it
is drawn on. The card is the only place where the ratios depend on the **photograph**, which is why the 90°
overlay's `.85` at the left edge is a legibility requirement and not decoration — the worst-case pair above already
assumes a near-white plate behind `.72` of `#14100c`.

## Requirements

### Requirement: One restaurant hero screen

The template SHALL render one dark landing screen whose entire content is a header bar and a single hero section
holding a copy column and an opening-hours card, with no form and no second section.

#### Scenario: Landmarks, counts and the one headline at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** it renders
- **THEN** there SHALL be exactly one `<header>`, one `<nav aria-label="Main">`, one `<main>`, **one**
  `<section aria-labelledby>` and **one** `<aside aria-labelledby>` inside it, and **no** `<footer>` inside the shell
- **AND** there SHALL be exactly **one** `<h1>` ("Slow suppers, _fired_ by oak and olive wood"), **one** `<h2>`
  ("Opening hours"), **zero** `<h3>`, **1** `<img>`, **0** `<form>`, **0** `<input>`, **1** `<button>`,
  **4** `<svg>` and **8** `<a>`
- **AND** the document SHALL be **900 px** tall with `scrollWidth === clientWidth`
- **AND** the hours block SHALL be a `dl` with **four** `dt`/`dd` pairs inside `div` wrappers

#### Scenario: The hero hangs from the bottom of `main`

- **GIVEN** the root is `min-height:100vh; display:flex; flex-direction:column` and `main` is `flex:1` with
  `align-items:flex-end`
- **WHEN** the hero is measured at 1440
- **THEN** it SHALL be **1320 × 748.25** at (60, **151.75**) — 900 − 748.25 — with `main` at (0, 83.89) and
  **816.11** tall
- **AND** the section's foot SHALL equal the document's foot (**828** is its content bottom, 72 px of padding
  below it)

### Requirement: A full-bleed photograph under a two-layer wash

The page SHALL be grounded by one decorative photograph that covers the viewport, is pushed in slowly, and is held
back by two stacked gradients so the copy column stays legible.

#### Scenario: The photograph, the wash and the zoom at 1440

- **GIVEN** the page at 1440 × 900 with animations disabled
- **WHEN** the background layer is measured
- **THEN** the `<img>` SHALL be `position:absolute; inset:0; z-index:-2` at **1440 × 900**, `object-fit: cover`,
  `object-position: 50% 60%`, with `alt=""` and declared `width="1400" height="933"`
- **AND** the overlay SHALL be the root's `::before`, `inset:0`, `z-index:-1`, carrying a **180°** gradient
  (`.78 0%, .25 26%, .35 55%, .92 100%`) **and** a **90°** gradient (`.85 0%, .35 60%, .1 100%`) of `#14100c`
- **AND** with animations enabled the image SHALL carry `animation: cl-hero08-zoom 24s ease-out both` whose only
  keyframe is `from { transform: scale(1.08) }`
- **AND** the root SHALL keep `overflow: hidden` and `isolation: isolate` so neither layer creates a scrollbar or
  escapes behind the body

#### Scenario: The photograph is cropped and masked at 520

- **GIVEN** the `max-width:520px` block
- **WHEN** the viewport is 520
- **THEN** the `<img>` SHALL be **75vh** tall with `object-position: 60% 50%` and
  `mask-image: linear-gradient(180deg, #000 55%, transparent)`
- **AND** the overlay SHALL collapse to the single vertical set (`.75 0%, .3 22%, .6 45%, .95 70%`)
- **AND** the section SHALL start **38vh** from its own top

### Requirement: A three-track bar with a centred two-line wordmark

The header SHALL hold the four nav links, a centred two-line wordmark and a phone number, divided by a hairline,
with a circular menu button below 861.

#### Scenario: The bar, the links and the wordmark at 1440

- **GIVEN** the header at 1440
- **WHEN** measured
- **THEN** the bar SHALL be **1440 × 83.89** with a 1 px `rgba(246,237,224,.18)` bottom rule, and its inner box
  **1320 × 82.89** at (60, 0) with `padding: 18px 48px`, `gap: 24`, `max-width: 1320`,
  `grid-template-columns: 1fr auto 1fr`
- **AND** the nav SHALL be **499.31 × 25.59** at (108, 28.64) with links at `gap: 26`, each `padding: 4px 0`,
  **13.5 px / 500 / .12em** uppercase in `#e6d9c6`
- **AND** the wordmark SHALL be **177.38 × 46.89** at (631.31, 18): a **28 px / 600** serif name over an
  **11 px / 600 / .3em** gold uppercase sub-line, `4px` apart, centred
- **AND** the phone SHALL be **117.81 × 22.39** at (1214.19, 30.25) — **14 px / .06em** in `#e6d9c6`, flush with
  the inner box's right padding

#### Scenario: Hover, current page and the wrapped links

- **GIVEN** the pointer over a nav link, or a link marked `aria-current="page"`
- **WHEN** 200 ms have elapsed
- **THEN** the link SHALL render `#fff` and, when current, SHALL show a **1 px gold** rule at `bottom: -2px`
  spanning its own width
- **AND** the phone SHALL turn `#fff` on hover
- **AND** at **1193** the four links SHALL wrap to two lines each (**49.6** tall, nav **51.19**) and the bar SHALL
  grow to **88.19**, returning to one line and **83.89** at **1194**
- **AND** at **1080** and below the phone SHALL be `display: none`

### Requirement: The copy column

The left column SHALL run eyebrow → serif headline with a gold italic word → standfirst → one filled CTA and one
underlined text link, at the measured sizes.

#### Scenario: Eyebrow, headline and the italic run at 1440

- **GIVEN** the copy column at 1440
- **WHEN** measured after `document.fonts.ready`
- **THEN** the column SHALL be **812 × 503.45** at (108, 324.55)
- **AND** the eyebrow SHALL be **812 × 20.8** at (108, 324.55) — **13 px / 600 / .24em** uppercase gold with a
  **40 × 1 px** current-color rule at `gap: 14`, and the rule's span SHALL be `aria-hidden`
- **AND** the `h1` SHALL be **812 × 266.34** at (108, **363.34**) — **87.04 px / 88.78 line box / 3 lines**,
  weight **500**, `line-height: 1.02`, `letter-spacing: -.02em`, `margin: 18px 0 20px`, `max-width: 13em`, with
  `text-wrap: balance`
- **AND** the `em` SHALL be the only gold run (**169.3** wide, italic) and SHALL inherit the headline's size and
  leading

#### Scenario: Standfirst and the action row

- **GIVEN** the lower half of the copy column at 1440
- **WHEN** measured
- **THEN** the standfirst SHALL be **625.59 × 88.31** at (108, **649.69**) — **18.4 / 29.44 / 3 lines** in
  `#e6d9c6`, `max-width: 34em` = **625.6**
- **AND** the action row SHALL be **812 × 56** at (108, **772**) — `margin-top: 34`, `flex-wrap`,
  `gap: 16px 28px`
- **AND** the CTA SHALL be **209.25 × 56** at (108, 772): `min-height: 56`, `padding: 0 34px`, radius **2**,
  `#e2b86b`, **14 px / 700 / .16em** uppercase label in `#14100c`
- **AND** hovering the CTA SHALL change its fill to `#f0cd8c` and translate it **2 px** up
- **AND** the secondary link SHALL be **192.5 × 38.59** at (345.25, 780.7): **16 px / 500**, `padding: 6px 0`, a
  1 px `rgba(246,237,224,.5)` underline, and an **18 px** arrow at `gap: 10`
- **AND** hovering it SHALL turn the rule gold and grow the gap to **14**

### Requirement: A translucent opening-hours card

The right column SHALL be a square, 340 px card with a hairline border, a 12 px backdrop blur and a 72 % dark wash,
holding a serif heading, four dashed rows, an address with a pin and an italic footnote.

#### Scenario: The card and its rows at 1440

- **GIVEN** the card at 1440
- **WHEN** measured
- **THEN** it SHALL be **340 × 360.31** at (992, **467.69**) — `padding: 26px 28px`,
  `border: 1px solid rgba(246,237,224,.22)`, `background: rgba(20,16,12,.72)`,
  `backdrop-filter: blur(12px)`, **no** `border-radius`, **no** `box-shadow`, bottom-aligned to the hero's content
  box (foot **828**)
- **AND** its `h2` SHALL be **282 × 35.19** at (1021, 494.69) — **22 px / 500** serif in `#f6ede0`
- **AND** the `dl` SHALL be **282 × 168.75** at (1021, 543.88) — four rows **42.19** tall, each
  `display:flex; justify-content:space-between; padding: 9px 0` with a **1 px dashed** `rgba(246,237,224,.22)`
  bottom rule, `dt` in `#e6d9c6` and `dd` in `#f6ede0` with `font-variant-numeric: tabular-nums`, both **14.5 px**
- **AND** the address SHALL be **282 × 44.78** at (1021, **728.63**) — **14 px** beside a **16 px** gold pin
- **AND** the note SHALL be **256 × 21.59** at (1047, 779.41) — **13.5 px** italic in `#e6d9c6` at
  `margin: 6px 0 0 26px`

#### Scenario: The card in one column

- **GIVEN** the `max-width:960px` block
- **WHEN** the viewport goes 961 → 960
- **THEN** the hero SHALL become one column and the card SHALL take `max-width: 460`
- **AND** the card SHALL move to the second row at **(38, 617.94)** — **460 × 337.92** — and the document SHALL grow
  **900 → 1013**
- **AND** at 520 the card's padding SHALL drop to **20px** and its height to **325.92** (the address stops wrapping)

### Requirement: A disclosure menu below 861

Below 861 px the four links SHALL collapse into a 44 px circular button and a full-width panel inside the bar.

#### Scenario: Open, close and the icons at 860

- **GIVEN** the script has added `is-enhanced` and the viewport is 860
- **WHEN** the page loads
- **THEN** the button SHALL be a **44 × 44** circle — 1 px `rgba(246,237,224,.4)`, `rgba(20,16,12,.4)` ground —
  the nav SHALL be `display:none; position:absolute; top:100%; left:0; right:0`, and the document **976**
- **AND** clicking SHALL set `is-open`, `aria-expanded="true"`, `aria-label="Close menu"` and `display:block`, and
  swap the hamburger for the close icon
- **AND** the panel SHALL be **full width × 293.75** at (0, **82.89** for 860 / **80** for 390) —
  `padding: 12px var(--gutter) 24px`, `rgba(20,16,12,.97)` ground, a 1 px `rgba(246,237,224,.18)` bottom rule,
  links as **22 px serif** blocks at `padding: 14px 0` separated by 1 px `rgba(246,237,224,.12)` rules, and it
  SHALL **not** change the document height
- **AND** **Escape**, an outside click, a panel link and `matchMedia('(min-width: 861px)')` SHALL each close it,
  Escape returning focus to the button

### Requirement: Responsive reshaping at 1080, 960, 860 and 520

Four width queries SHALL reshape the page: the phone disappears at 1080, the grid collapses at 960, the bar turns
into a menu at 860, and the compact composition starts at 520.

#### Scenario: The one-column collapse at 960

- **GIVEN** the `max-width:960px` block
- **WHEN** the viewport goes 961 → 960
- **THEN** the hero grid SHALL become one column and the card SHALL be capped at **460**
- **AND** the `h1` SHALL go from **3** lines to **2** (the column widens from 496 to 844 while the type barely
  changes: 65.01 → 64.96) and the document from **900** to **1013**

#### Scenario: The compact composition at 520

- **GIVEN** the `max-width:520px` block
- **WHEN** the viewport goes 521 → 520
- **THEN** the bar SHALL drop to **81** (the wordmark name 28 → **24 px**, the sub's tracking .3em → .22em)
- **AND** the hero SHALL take `padding-top: 38vh`, the photograph **75vh** with its mask, and both action-row
  children `flex: 1 1 100%` with centred content — the CTA **478.41** wide at 520 and **358** at 390
- **AND** the document SHALL grow **900 → 1195** across that one pixel, and SHALL stay above **1190** down to 320

### Requirement: The Component Dock footer

The page SHALL end with a footer that links the marketplace, because the reference has none.

#### Scenario: The added footer

- **GIVEN** the reference ends at the hero (`<main>` is the last landmark; no `<footer>`)
- **WHEN** the port renders
- **THEN** a `<footer>` SHALL follow the shell, outside the 100vh `.cl-hero08` box, linking
  `https://www.componentdock.com/` as "Component Dock"
- **AND** it SHALL sit on the same `#14100c` ground with a `rgba(246,237,224,.18)` hairline top and `#e6d9c6` text,
  so the hero's measurements still hold

## Adapting to the repo (deltas — read before writing code)

**Copy and brand.** The reference's invented restaurant name SHALL NOT appear as a brand. Use these replacements:

| source                                                 | port                                                                                                                                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Osteria Lume" wordmark                                | **"trattoria"** — lowercase, matching the family's wordmark style, in the same 28 px / 600 Playfair (a shorter word keeps the centre and only pulls the nav's right edge) |
| "Leith · Edinburgh" sub-line                           | keep the shape — a two-part place line at **11 px / .3em** gold uppercase                                                                                                 |
| `Menu` / `Wine list` / `Private dining` / `Gift cards` | keep all four, `aria-current="page"` on the first, and **wire them** (fix 3)                                                                                              |
| `Slow suppers, fired by oak and olive wood` (the `h1`) | **keep** — brand-free, and the balanced 3-line break at 1440 is keyed to the string                                                                                       |
| `Wood-fired kitchen since 2014` (the eyebrow)          | keep the shape                                                                                                                                                            |
| the three-sentence standfirst                          | keep — it is the 3-line measure at 1440, 4 at 390, 5 at 320                                                                                                               |
| `Book a table` / `View tonight's menu`                 | keep both and **wire them** (fix 3)                                                                                                                                       |
| `Opening hours` + the four `dl` rows                   | keep — Monday / Tue–Thu / Fri–Sat / Sunday                                                                                                                                |
| `14 Commercial Quay, Leith, EH6 6LX`                   | keep or swap for another invented address; it must still wrap to **2 lines** at 340 wide and 1 line at 460                                                                |
| `Walk-ins welcome at the bar.`                         | keep — the italic footnote is what proves the 26 px indent                                                                                                                |
| `0131 555 0148` with `tel:+441****0148`                | **replace with a dialable `tel:`** — the reference ships a redacted href (trap 6)                                                                                         |
| `images/dining.jpg` (1,400 × 933)                      | **do not copy** — `https://picsum.photos/seed/trattoria-1/1400/933`, declared `width="1400" height="933"`, `alt=""`, `fetchpriority="high"`                               |

If the port changes the headline it MUST re-measure the `text-wrap: balance` breaks: the ladder's 2/3-line flips at
**1226** and **428** are a product of that string at that clamp, not of the column.

**Structure → React.** `App` → `<SiteHeader>` (`<NavLinks>`, `<Wordmark>` with name + sub, `<Phone>`,
`<MenuButton>`) → `<Main>` → `<RestaurantHero>` → `<HeroCopy>` (`<Eyebrow>`, `<Title>` with `<em>`, `<Standfirst>`,
`<Actions>` with `<BookCta>` + `<MenuLink>`) + `<HoursCard>` (`<CardTitle>`, `<HoursList>` with four `<HoursRow>`,
`<Address>` with a pin icon, `<Note>`) → `<PageFooter>`. The photograph and the overlay are one `<HeroMedia>`
component: the `<img>` plus the pseudo-element wash, inside the root's `isolate`. State lives in one place:
`SiteHeader.isOpen`. The menu's Escape / outside-click / `matchMedia` listeners SHALL be cleaned up on unmount.

Keep the data as constants: `NAV_LINKS` (4), `HOURS` (4 × `{days, hours}`), `CONTACT` (`{phone, tel, address,
note}`), so counts are testable and the copy lives in one place.

**Tokens.** Put the palette in `@theme`: `--color-ground:#14100c`, `--color-cream:#f6ede0`, `--color-soft:#e6d9c6`,
`--color-gold:#e2b86b`, `--color-gold-hover:#f0cd8c`; `--font-sans: system-ui, …` (the reference's own stack — do
**not** swap in Inter or Outfit); `--font-serif: "Playfair Display", Georgia, "Times New Roman", serif`;
`--gutter: clamp(16px,4vw,48px)`; `--hero-gap: clamp(32px,5vw,80px)`;
`--text-display: clamp(2.6rem, 1.3rem + 4.6vw, 5.6rem)`; `--text-lede: clamp(1rem, .96rem + .25vw, 1.15rem)`.
Tailwind's type scale cannot express the clamps, and the CTA's **2 px** radius plus the card's **0** need
arbitrary values (`rounded-[2px]`, `rounded-none`).

**Playfair Display.** Load it once, display-only:
`https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap` (verified
**200**; the roman-only `wght@500;600` form is also **200**). Weights used: **500** (the `h1`, its italic `em`, the
hours `h2`), **600** (the wordmark name). Everything else is the system UI stack at 400/500/600/700 — the family's
only variant that does not load a text webfont.

**Images and icons.** One photograph (placeholder, above) and **four** inline SVGs: hamburger and close (24), the
CTA arrow (18), the address pin (16). Reproduce them as inline SVG or `lucide-react` (`Menu`, `X`, `ArrowRight`,
`MapPin`). No other asset may be copied.

**Prescribed fixes (behavioural, not cosmetic).**

1. **Give the gold CTA an ink focus ring** (`focus-visible:outline-[#14100c]`, 2 px, 4 px offset), keeping the gold
   ring everywhere else — the reference draws gold on gold at **1.00 : 1** (trap 5).
2. **Ship a dialable `tel:` href.** The reference's is `tel:+441****0148` — a redacted placeholder (trap 6).
3. **Wire every anchor.** Seven of the eight are `href="#"` with no second page to point at (every inner path
   404s): the four nav links SHALL resolve inside the page (`#menu`, `#wine`, `#private`, `#gift`), and `Book a
table` / `View tonight's menu` SHALL scroll to a real section or open the booking step.
4. **Do not reproduce the dead `.cl-icon` rule** (nineteenth consecutive snippet) or the `__copy` container class;
   neither carries a style.
5. **Keep the photo decorative but real.** `alt=""` and `aria-hidden` is correct for the layer — the headline
   carries the meaning — but the `<img>` SHALL keep `width`/`height` so the layout does not shift, and SHALL have a
   visible `#14100c` fallback colour behind it if the placeholder fails.
6. **Keep `overflow:hidden` + `isolation:isolate`** on the shell, or the zoomed photograph leaks a horizontal
   scrollbar and the negative z-indexes drop behind the body — `isolation: isolate` on the root is the only
   reason they paint above its background at all.
7. **Footer.** Add the Component Dock footer the reference lacks.

**Do not port:** the `:where(html) … { …: revert }` guard block (**23** `revert` declarations — Tailwind's
preflight covers it), the `[hidden]` re-declaration that only exists to undo it, the `is-enhanced` no-JS path as
_separate_ CSS (React renders the enhanced state), the source's `#` anchors and redacted `tel:`, the six copied
font binaries, or the macOS screenshot frame.

## Verification checklist

- [ ] `apps/trattoria` exists, package `@free-react-templates/trattoria`, `public/CNAME` =
      `trattoria.free.componentdock.com`, `"homepage"` = `https://trattoria.free.componentdock.com`
- [ ] `npm run verify:app trattoria` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-trattoria --type spec` is valid
- [ ] measured at 1440 × 900 (motion disabled): bar **1440 × 83.89**; inner **1320 × 82.89** at (60, 0); nav
      **499.31 × 25.59** at (108, 28.64); wordmark **177.38 × 46.89** at (631.31, 18); phone **117.81 × 22.39** at
      (1214.19, 30.25); hero **1320 × 748.25** at (60, 151.75); copy **812 × 503.45** at (108, 324.55); eyebrow
      **812 × 20.8**; `h1` **812 × 266.34** at (108, 363.34) at **87.04 / 88.78** in **3 lines**; standfirst
      **625.59 × 88.31** at (108, 649.69); actions **812 × 56** at (108, 772); CTA **209.25 × 56**; text link
      **192.5 × 38.59** at (345.25, 780.7); card **340 × 360.31** at (992, 467.69); `h2` **282 × 35.19**; `dl`
      **282 × 168.75** with rows **42.19**; address **282 × 44.78** at (1021, 728.63); note **256 × 21.59** at
      (1047, 779.41)
- [ ] document height **900** at 1440, 1360, 1280, 1226, 1225, 1200, 1194, 1193, 1100, 1081, 1080, 1024, 1000 and
      **961**; **1013** at 960; **993** at 900; **980** at 861; **976** at 860; **945** at 768; **922** at 700;
      **906** at 640; **901** at 584; **900** at 583 and 521; **1195** at 520; **1191** at 480; **1235** at 432;
      **1278** at 428; **1277** at 390; **1276** at 360; **1324** at 320
- [ ] `scrollWidth === clientWidth` at every width above (the zoomed photograph is clipped, never scrolled)
- [ ] bar height **83.89** at ≥1194 and at ≤860, **88.19** at 861–1193, **81** at ≤520; the phone is `display:none`
      at **1080** and visible at **1081**
- [ ] title size follows `clamp(2.6rem, 1.3rem + 4.6vw, 5.6rem)`: **87.04** at 1440, 79.68 at 1280, 70.48 at 1080,
      65.01 at 961, **41.6** (floor, reached at 452) from 452 down; the balanced breaks give **3** lines at
      1416–1440 and ≤428, **2** at 1226–1415 and 429–960, **3** at 961–1225
- [ ] the photograph is **1** `<img>` at `object-position: 50% 60%` with a **1400 × 933** source, the wash is two
      gradients on one pseudo-element, and under `prefers-reduced-motion` the zoom is **off** (the layer is
      1440 × 900, not 1552 × 970)
- [ ] the card is square (`border-radius: 0`), shadowless, `rgba(20,16,12,.72)` with `backdrop-filter: blur(12px)`,
      and its four rows use a **dashed** hairline
- [ ] menu: button appears at **860** (44 × 44, nav absolute, document **976**), disappears at **861**; the panel is
      full width × **293.75** at (0, 82.89) and does not change the document height; `aria-expanded` / `aria-label`
      toggle and the icons swap; Escape (focus returns), outside click, panel link and crossing 861 each close it
- [ ] anchors: **no** `href="#"` left — four nav links, the phone, `Book a table` and `View tonight's menu` all
      resolve or act, and one nav item carries `aria-current="page"`
- [ ] the phone's `href` is a real `tel:` target (the reference's is redacted)
- [ ] exactly **one** `<h1>`, **one** `<h2>`, **1** `<img>`, **0** `<form>`, **1** button, **8** anchors and **3**
      ids in the reference shape; the footer links `https://www.componentdock.com/`
- [ ] no ColorLib asset or string is copied: the wordmark is **trattoria**, the photograph is a deterministic
      placeholder, the icons are inline SVG or `lucide-react`, Playfair Display comes from Google Fonts
- [ ] contrast: cream/dark **16.33**, soft/dark **13.62**, gold/dark **10.19**, ink/gold **10.19**, card worst case
      cream **9.02** / soft **7.53** / gold **5.63**; the CTA's ring is **ink**, not gold
- [ ] `git grep -il 'colorlib\|hero-08\|osteria' apps/trattoria` → **no hits** (provenance lives only in this spec,
      `TEMPLATES.md` and the PR)
