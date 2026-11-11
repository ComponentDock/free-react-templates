# Template: Belvedere (Hero — a one-screen designer portfolio: an arch-cropped portrait carrying a rotating sticker and a status pill, beside a yellow-highlighted headline, a blue CTA pair, four icon tiles and a three-cell stats band)

## Purpose

**One portfolio introduction screen** — the ninth variant of the `hero` snippet family, and the family's first
**personal** hero: the first eight sold software, a physical product, a newsletter, conference tickets and (V08) a
restaurant, and this one sells a person. A single `100vh`-floored flex column holds a **two-item header bar**
(a monogram wordmark on the left, three pill nav links on the right) and a **two-column hero**: a **4:5 portrait in
an arch-shaped frame** on the left with a **yellow star sticker** pinned to its shoulder and a **dark "Available for
work" pill** straddling its foot, and on the right an intro line, a **display headline with one yellow highlighted
phrase**, a biography paragraph, a **filled blue CTA beside a translucent ghost CTA**, a hairline rule, **four white
icon tiles** and a **three-cell `dl`** of uppercase-labelled stats.

The colour story is unusually small for the family: a **pale blue ground** (`#e8f0fa`) with a **single hard-edged
radial disc** tinted `#d4e3f7` in the lower-left, a **navy ink** (`#0f1f3d`), a **muted blue-grey** (`#43526e`), one
**brand blue** (`#2456d6`) used on exactly one element, and one **yellow** (`#ffd23f`) used on exactly three (the
sticker, the highlight, the logo glyph on hover and the social-tile icon on hover). Every radius is either **999 px**
(nav pills, status pill, sticker, logo disc, and the frame's two top corners) or a **soft 12–14 px** (CTAs, icon
tiles); the frame's bottom corners are the page's only `28px`.

There is **no author JavaScript at all** — `js/snippet.js` returns **404 (9 B)** and the archive has no `js/`
directory, although its README advertises one — so the two animations (a **1.8 s ping** on the status dot and a
**12 s linear rotation** on the sticker) are pure CSS, and the only interaction is CSS hover. **0 `<form>`, 0
`<input>`, 0 `<button>`, 1 `<img>`, 1 `<h1>`, 0 `<h2>`, 6 `<svg>`, 10 `<a>`** (nine dead `#`, one `mailto:`).

At **1440 × 900 the document is 944.28 px — 44 px taller than the viewport**, so the "single screen" promise is
false at the family's reference size; it fits exactly (**900**) only in a middle band, and the reason is the trap
this variant is built to hide: **the copy column is narrowest at the widest viewport**.

- **Source slug:** `hero-09`
- **ColorLib page:** https://colorlib.com/wp/template/hero-09/ — **HTTP 200, 113,778 B**, `<title>`
  `Hero V09 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V09"**, `datePublished`
  **2026-09-25T15:09:09+00:00**, meta description _\"An introduction hero for a freelance designer's portfolio,
  with an arched portrait, a pulsing Available for work… Free download, no jQuery or plugins.\"_, and the claim
  _\"the download is 468 KB\"_ (measured **479,477 B = 468.2 KiB** ✓).
  **The design name the naming audit reads is ColorLib \"Hero V09\".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-09/ — **HTTP 200, 4,881 B**,
  `<title>` `Hero V09 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=3c92ef29`,
  `fetchpriority="high"`) and **no author `<script>`** (the ten scripts in the rendered DOM are the preview host's
  gtag/Cloudflare Zaraz/beacon injections, not the snippet's). The slug-only path `theme/hero-09/` is **404 (9 B)**
  and `theme/bb/hero-09/` is **404 (9 B)**: the `bootstrap/` prefix is the only live path, as for every card, alert
  and hero variant before it. `index.html` under the same directory is **byte-identical to the directory URL**
  (4,881 B), i.e. a no-op link, never a 404.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-09.jpg — **HTTP 200, 47,533 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name. It is a **macOS browser mock-up** on a white ground with a
  drop shadow and a `preview.colorlib.com` URL pill; the page inside the frame is **~1112 px** wide. Do not adopt
  the frame.
- **Design category:** Hero (**personal / freelance-designer hero — arch portrait, rotating sticker, pulsing status
  pill, highlighted headline, CTA pair, icon tiles and a stats `dl`**; variant 9 of the **12**-variant `hero`
  family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/belvedere`, package
  `@free-react-templates/belvedere`, CNAME `belvedere.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1886 | items with NO spec on main: 0`. So this design comes from
`docs/catalog-coverage.md`, which lists **214 snippet variants in 19 families** that ColorLib's own listing carries
and the checklist never recorded. `hero-09` is **variant 9 of 12** in the `hero` family. The family is worked in
variant order: 1 → proscenium (shipped), 2 → afterglow (shipped), 3 → presswork (shipped), 4 → tendril, 5 →
epistle, 6 → overtone (shipped), 7 → soapbox (prepped), 8 → trattoria (prepped), and this prep is **variant 9**.

## Bootstrap Heroes (12)

`## Bootstrap Heroes (12)` opens at **line 832** of `TEMPLATES.md`, between `## Bootstrap Footers (20)` and
`## Bootstrap Modals (20)`. Answered on main `db803b7b5` the section holds **six** rows — Hero 01 → proscenium,
Hero 02 → afterglow, Hero 03 → presswork, Hero 04 → tendril, Hero 05 → epistle, Hero 06 → overtone. **Hero 07 and
Hero 08 have no row yet** (their preps are `soapbox` and `trattoria`, both unbuilt), so `TEMPLATES.md` lags the
prep queue by two. The row grammar in this section is `[colorlib] · ![preview] · [app]` — **preview in the middle**:

```markdown
- [ ] **Hero 09** — [colorlib](https://colorlib.com/wp/template/hero-09/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-09.jpg) · [belvedere](https://belvedere.free.componentdock.com)
```

Insert it **after** whichever hero rows exist at that moment (i.e. after Hero 06 today, after Hero 07/08 once they
land), keep that grammar, and **re-read the surrounding lines immediately before pushing** — the implementer
streams rewrite this file and the section grew a row mid-run at least twice.

**The name.** `belvedere` — one lowercase word for a structure built to command a fine view, which is what an arch
framing a portrait is; it keeps the snippet families' closed-single-word pattern (`nameplate`, `octavo`, `wafer`,
`proscenium`, `tendril`, `epistle`, `overtone`, `soapbox`, `trattoria`), and it is not the source's invented name.
Verified free on main `db803b7b5`: `git grep -il belvedere origin/main` → **0 files**; no `apps/belvedere`; no
`openspec/specs/template-belvedere`; no `docs/templates/belvedere`; no `**Belvedere**` row in `TEMPLATES.md`; and
all three ColorLib URLs miss — `colorlib.com/wp/template/belvedere/` **404**,
`preview.colorlib.com/theme/belvedere/` **404**, `preview.colorlib.com/theme/bootstrap/belvedere/` **404**.

Checked and **free** for later variants of this family: **`portico`** is **taken** (45 files, an app), as are
`archway` (26), `aperture` (30), `marlowe` (20); `calmwell` and `porthole` are free but `porthole` has **2**
substring hits, so it fails the zero-substring rule. Still free and zero-hit at this measurement:
**`colonnade`**, **`balustrade`**, **`narthex`**, **`clerestory`** — each **0 files, 0 folders, all three ColorLib
URLs 404**.

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium 1xx, `document.fonts.ready` + 800 ms)

- **Live CSS is the archive's un-versioned twin.** `css/style.css` live is **13,325 B**, sha256
  `aed258869a6c9a8d…`, and the copy inside `downloads/free/hero-09.zip` is **byte-identical** (`cmp` clean) →
  **live preview verified; the archive is its un-versioned twin** for the sheet. The **HTML differs only in
  `<head>`** (`diff` shows four extra lines: a `robots` meta, a `cdnjs` dns-prefetch, `?v=3c92ef29` on the sheet,
  `fetchpriority="high" decoding="sync"` on the `<img>`) — the body is identical.
- **`js/snippet.js` → HTTP 404, 9 B** (`text/plain: Not Found`), and the archive has **no `js/` entry** in its 16
  entries, though its `README.md` lists `js/snippet.js   the behaviour, in plain JavaScript`. **Zero author JS.**
- **Archive:** 479,477 B, 16 entries, 8 × `@font-face` over **2 binaries** (`bricolage-grotesque-*-latin.woff2`
  **76,868 B** shared by 400/500/600/700, `…-latin-ext.woff2` **30,636 B** shared by the same four) → one
  **variable** binary per subset, not four static cuts. Canvas A/B on the same string at 40 px:
  **400 = 610.00, 500 = 626.00, 600 = 619.00, 700 = 633.00, 800 = 633.00** — four distinct advances (so the axis is
  real, not synthesised) and **800 clamps to 700**; note **600 measures *narrower* than 500**, so weight must never
  be inferred from advance width.
- **CSS census:** 13,325 B · **66** rule blocks / **84** selectors · **8** `@font-face` · **2** `@keyframes`
  (`cl-hero09-ping`, `cl-hero09-turn`) · **3** media queries (`900`, `520`, `prefers-reduced-motion`) · **7**
  custom properties (`--cl-hero09-bg|ink|muted|yellow|blue|card|gutter`) · **5** `transition` declarations ·
  **3** `animation` declarations · **5** `box-shadow` · **1** gradient · **3** `!important` (the CTA's `color:#fff`
  plus the two in the reduced-motion reset).
- **Class census:** **26** markup classes, **26** declared, one **phantom** (`cl-hero09__nav` — the `<nav>` has no
  rule at all) and one **dead** (`.cl-icon{height:1em;fill:currentColor}`, never applied: every SVG is inline with
  its own `width`/`height`).
- **Fonts are on Google Fonts:** `css2?family=Bricolage+Grotesque:wght@400..700&display=swap` → **200** with
  `font-weight: 400 700` (the variable form, closest to the reference's single binary);
  `:wght@400;500;600;700` → **200** as static cuts; the bare `css2?family=Bricolage+Grotesque` → **200**.
- **Links:** **10** anchors — the monogram wordmark (`#`), three nav pills (`#` ×3, `Work` carrying
  `aria-current="page"`), the mailto CTA (**real**: `mailto:hello@marenholt.design`), the CV button (`#`) and four
  social tiles (`#` ×4) → **nine dead `#`, one live `mailto:`**. Tab order is exactly document order:
  logo → Work → About → Notes → email → CV → code → writing → photography → profile.
- **Single page.** `about.html`, `work.html`, `notes.html`, `contact.html`, `gallery.html`, `services.html` are all
  **404 (9 B)** on all three prefixes — there is **no inner-page inventory** for this slug, unlike the
  wedding/business themes.
- **The photograph:** `images/portrait.jpg`, **42,067 B, 600 × 600 JPEG**, drawn into a **4:5** frame
  (`object-fit: cover`, `object-position: 50% 30%`), so ~40 % of its width is cropped away.

## Design tokens

| Token | Value | Where it is used |
| --- | --- | --- |
| ground | `#e8f0fa` | `body` and the root; the page's only large flat field |
| disc tint | `#d4e3f7` | the single `radial-gradient` stop, lower-left |
| ink | `#0f1f3d` | `h1`, `dd`, logo text, `.07`/`.14`/`.2`/`.45`/`.5` `rgba()` derivations |
| muted | `#43526e` | intro line, bio, nav labels at rest, `dt`, the CV's size span |
| brand blue | `#2456d6` | the primary CTA **and** the global focus ring (nothing else) |
| brand blue (hover) | `#1b45b5` | primary CTA hover |
| sun yellow | `#ffd23f` | the `<mark>` highlight, the sticker, the logo glyph, the social icon on hover |
| card | `#ffffff` | social tiles, the frame's 6 px border, the `aria-current` nav pill |
| frame ground | `#cbd9ee` | visible only if the photograph is missing (it is behind the `<img>`) |
| ping green | `#34d399` | the status dot (decorative only, `aria-hidden` parent) |
| gutter | `clamp(16px, 4vw, 48px)` | bar and hero inline padding |
| hero gap | `clamp(36px, 6vw, 96px)` | the grid's column gap (and the widest single knob on the page) |
| radius | `999px` / `28px` / `14px` / `12px` | pills + frame top / frame bottom / CTAs / icon tiles |
| type | `"Bricolage Grotesque", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | **one family, weights 400/500/600/700, no second face** |
| type scale | 68.8 (clamp) · 18.4 (clamp) · 17 · 16 · 14.5 · 12.5 | `h1` · intro/bio · `dd` · body/CTA · status · `dt` |
| shadows | `0 30px 60px -30px rgba(15,31,61,.45)` frame · `0 12px 24px -10px rgba(15,31,61,.5)` status · `0 10px 22px -12px rgba(36,86,214,.8)` CTA · `0 10px 20px -10px rgba(15,31,61,.5)` sticker · `0 1px 2px rgba(15,31,61,.08)` current pill | five, all coloured, none neutral |

The `h1` is `clamp(2.3rem, 1.3rem + 3.6vw, 4.3rem)`, i.e. **68.8 px at 1440**, **66.88** at 1280, **53.2** at
900, **36.8** (the floor, reached at ~771 px and held below) — with `line-height: 1.04`,
`letter-spacing: -.035em` (**-2.408 px** at 1440) and `text-wrap: balance`.

## Page arithmetic at 1440 × 900 (measured, motion settled)

- Root: **1440 × 944.28** at (0, 0) — `min-height: 100vh`, `display: flex; flex-direction: column`,
  `overflow: hidden`, `font-size: 16px; line-height: 1.55` → **the document is 44 px taller than the viewport and
  scrolls 44 px** (`scrollHeight 944`, `clientHeight 900`), with `scrollWidth === clientWidth === 1440`.
- Bar: **1180 × 88.80** at (130, 0), `padding: 24px 48px`, `max-width: 1180`, `gap: 16`, `space-between`.
  - logo **140 × 34** at (178, 27.39); monogram disc **34 × 34**, radius 50 %, ink ground, `#ffd23f` glyph at
    20 px/700 with `padding-bottom: 3px`; wordmark 18 px/600, `gap: 10`.
  - nav **225 × 40.80** at (1037, 24); three pills of **69 / 74 / 74** (`padding: 8px 14px`, `gap: 4`), radius 999.
- `main`: **1440 × 855.48** at (0, 88.80), `flex: 1; display: flex; align-items: center` (the hero fills it, so the
  centring is inert here — it only matters below the collapse).
- Hero: **1180 × 855.48** at (130, 88.80), `grid-template-columns: 399.031px 598.578px`, `column-gap: 86.40`
  (`6vw`), `padding: 48px 48px 88px`, `align-items: center`.
  - portrait/frame **399.03 × 498.78** at (178, 247.14) — `aspect-ratio: 4/5`, `border: 6px solid #fff`,
    `border-radius: 999px 999px 28px 28px`, `overflow: hidden`, `max-width: 420`.
  - status pill **283 × 42.47** at (236.02, 721.45) — `bottom: -18px`, `left: 50%`,
    `translateX(-50%)`, `padding: 10px 18px`, 14.5 px/500, `white-space: nowrap`, `gap: 10`.
  - pulse dot **10 × 10** at (254.02, 737.69), `#34d399`, `::after` pinging to `scale(2.8)` over **1.8 s**.
  - sticker: **64 × 64** box (`offsetWidth`), `top: 59.84` (**12 %** of the frame), `right: -22` → box spans
    x **535.03–599.03**; its **bounding rect reads 82.03 × 82.03** because the 12 s rotation is running.
  - copy **598.58 × 719.48** at (663.42, 136.80).
  - intro line **598.58 × 57.03** in **2 lines** (18.4 px/500, line-height 28.52, muted).
  - `h1` **598.58 × 286.19** at (663.42, 209.83) — **4 lines**, margin `16px 0 20px`.
  - `<mark>` on **line 2**, one rect **450.89 × 83** at (671.67, 275.38) — `padding: 0 8.256px`,
    `border-radius: 12.384px`, `box-decoration-break: clone`.
  - bio **598.58 × 85.55** in **3 lines**, `max-width: 34em`.
  - actions **598.58 × 52** at (663.42, 631.56), `margin-top: 30`, `gap: 12`.
  - primary **267 × 52** at (663.42, 631.56); secondary **255 × 52** at (942.42, 631.56).
  - meta **598.58 × 136.72** at (663.42, 719.56) — `border-top: 1px rgba(15,31,61,.14)`, `margin-top: 36`,
    `padding-top: 26`, `gap: 20px 36px` → **two rows at 1440**: tiles **200 × 44** at (663.42, 746.56), stats
    **364 × 45.72** at (663.42, 810.56). The row break happens because `200 + 36 + 364 = 600` and the copy column
    is **598.58**.
  - social: four **44 × 44** tiles, radius 12, `gap: 8` (x 663.42 / 715.42 / 767.42 / 819.42).
  - stats: three cells **83 / 112 / 113** wide, `gap: 28`; `dt` 12.5 px/500 uppercase `letter-spacing: 1px` muted,
    `dd` 17 px/600 ink; cell height **45.72**.
- **`main` is 855.48 and the bar 88.80 → 944.28, so the composition misses the 900 px viewport by 44.28 px.**

## The seven devices

1. **The arch frame.** `aspect-ratio: 4/5` with `border: 6px solid #fff` and
   `border-radius: 999px 999px 28px 28px` — the top two corners collapse to a **199.5 px** radius (half the width),
   giving a Roman arch, while the bottom two keep a **28 px** softening. `overflow: hidden` crops the square source
   to the arch; the visible frame is **399.03 × 498.78** at 1440.
2. **The rotating sticker.** A **64 px** `#ffd23f` disc at `top: 12%; right: -22px`, `display: grid; place-items:
   center`, carrying a 30 × 30 four-point star, and `animation: cl-hero09-turn 12s linear infinite` — the only
   motion longer than a second. It overhangs the frame by **22 px** into the 86 px column gap.
3. **The status pill.** Ink ground, white 14.5 px/500 text, `white-space: nowrap`, `bottom: -18px`, so it **straddles
   the frame's foot** (frame bottom 745.92, pill 721.45–763.92) and is `translateX(-50%)`-centred on the frame.
4. **The pinging dot.** 10 px `#34d399` disc with a `::after` clone animating `scale(1) → 2.8` + `opacity → 0` over
   1.8 s, infinite, no delay. Decorative — the pill's text carries the meaning.
5. **The highlighted phrase.** A real `<mark>` inside the `h1`, `background: #ffd23f`, `color: inherit`, padding and
   radius in **em** (`0 .12em` / `.18em`) so they scale with the clamp, plus `-webkit-box-decoration-break: clone`
   so a wrapped phrase paints two independent bands instead of one broken rectangle.
6. **The CTA pair.** A filled **blue 267 × 52** bar (radius 14, `min-height: 52`, `padding: 0 22`, 18 px envelope
   glyph, `gap: 10`, blue-tinted shadow) beside a **translucent ghost** (255 × 52, `rgba(255,255,255,.6)` ground,
   `1.5px` ink-`.2` border, ink text, muted 400-weight size span). Hover: the blue darkens to `#1b45b5` and lifts
   `-2px`; the ghost goes solid white with an ink border. They are **equal height and unequal width**.
7. **The meta band.** One hairline rule, then **four white 44 px icon tiles** (radius 12; hover flips to ink ground
   with a yellow glyph and lifts `-2px`) and a **three-cell `dl`** whose `dt`/`dd` pairs are uppercase labels over
   17 px values — the page's only data, and the only place a label is smaller than 14 px.

## Width ladder (measured, `getBoundingClientRect`, after `document.fonts.ready`)

Document height, two-column layout above **901** and one column at **900** and below:

| viewport | 1440 | 1401 | 1400 | 1300 | 1280 | 1200 | 1163 | 1162 | 1100 | 1035 | 1034 | 1024 | 960 | 920 | 901 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| height | 944 | 944 | **900** | 900 | 900 | 900 | 900 | 900 | 900 | 900 | **939** | 964 | 946 | 935 | 930 |

| viewport | 900 | 899 | 860 | 800 | 700 | 640 | 600 | 580 | 560 | 521 | 520 | 480 | 430 | 400 | 395 | 390 | 360 | 320 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| height | **1102** | 1101 | 1091 | 1127 | 1098 | 1147 | 1164 | 1224 | 1221 | 1241 | **1242** | 1203 | 1158 | 1197 | **1250** | 1246 | 1219 | 1208 |

- **`900` is a band, not a floor:** it holds from **1100 to 1400** and nowhere else. At **1401** the meta band
  wraps to a second row and the page jumps **900 → 944** — and it stays 944 all the way up (1920 measures 944 too).
- **The collapse at 900 costs 172 px:** 930 → **1102** in one pixel, because the portrait moves above the copy.
- **The 520 step grows the portrait:** `width: min(72%, 320px)` becomes `width: 70%`, and at 520 that is
  **334.88** vs **320** at 521 — the frame gets **18.6 px taller** while the viewport loses 1 px, so the document
  goes **1241 → 1242** (the one place in the ladder that runs backwards).
- Structural seams, all measured: **meta** one row **1163–1400**, two rows **≤1162** and **≥1401** · **actions**
  one row **≥1035**, two rows **901–1034**, one row **600–900**, two rows **≤580** (the wrap is a content-box
  threshold: the pair needs **534** px, i.e. viewport **581**) · **stats** one row at content **≥364** (viewport
  **396**), two rows **≤395**, three cells + social on three rows **≤400** only where the tile row also wraps ·
  **title** **4** lines at **1440–901** and **400–320**, **2** at **900–810**, **3** at **800–430** (`balance`
  makes the count non-monotonic) · **intro line** **1** line at **1130–1369** and **2** lines at **≥1370** and
  **≤1120** — and the copy column is **598.58** at both 1440 and 1160, so the flip there is *not* a width fact
  (see trap 9).
- **Nav clipping band:** the bar's children need **356 px** (logo 131 + gap 16 + nav 193 + 16 padding) and the bar
  never wraps, so at **≤355** the nav is cut by the root's `overflow: hidden` — at **320** the `Notes` pill ends at
  **x 356** on a 320 px canvas, i.e. **36 px of it is simply gone**, with `scrollX` still 0 (clipped, not
  scrollable). **This is a defect to fix, not to reproduce** (see deltas).

## The traps (each cost real measurement time)

1. **The copy column narrows as the viewport widens.** The grid is `.8fr / 1.2fr` of a box capped at **1180 px**,
   while the gap is **6vw** — so the gap eats the columns above 1200. Copy width: **607.2** at 1200, **604.3** at
   1280, **600.0** at 1400, **598.58** at 1440, **592.81** at 1600+. Consequences: the intro line is **1 line** at
   1300 and **2** at 1440; the meta band is **one row** at 1300 and **two** at 1440; the document is **900** at
   1300 and **944** at 1440. Never assume "wider viewport, roomier layout".
2. **The page is not one screen at its own reference size.** `min-height: 100vh` is a floor, the content is 944.28,
   so 1440 × 900 scrolls **44 px**. A "no scroll" assertion must be made at 1400 (or 1280), not 1440.
3. **A rotated box's rect is not its size.** The sticker is `64 × 64` but reads **82.03 × 82.03** (64 × 1.282) at one
   animation phase and **75.49** at another (900 px) and **52.89** at a third (520 px, where the box is 52). Use
   `offsetWidth`/`offsetHeight` for the sticker, and never assert its `getBoundingClientRect().width`.
4. **The highlight is taller than its line.** The `<mark>`'s rect is **83 px** tall against a **71.55 px** line box,
   because an inline background is painted on the font's inline box (ascent + descent), not on `line-height`. It
   therefore overlaps the next line's box by **11.46 px**; the yellow band looks "tight" but is not the line box.
   Do not derive the highlight height from `line-height`.
5. **`1.5px` does not survive the renderer.** `.cl-hero09__secondary` declares `border: 1.5px solid`, and computed
   style reports **`1px solid`** at DPR 1 in the reference. If the port uses `border-[1.5px]`, it will paint **1 px**
   as well — record the delta rather than "fixing" it to 2 px.
6. **`color: inherit` on every link, and one `!important` to beat it.** `.cl-hero09 a { color: inherit }` is
   `0,1,1` and out-specifies the single-class CTA (`0,1,0`), which is why the sheet needs `color: #fff !important`
   on the primary. Without it the CTA's label renders **ink on brand blue = 2.63 : 1**. In the port the colour must
   be set on the button element itself, and the contrast assertion must read the computed colour, not the class.
7. **The status pill is wider than the portrait it centres on.** At 320 the pill is **249** wide over a
   **201.59** frame, so it bleeds **23.7 px** past each side. That is by design (`left: 50%` + `nowrap`) and it is
   *not* clipped, because the root's `overflow: hidden` is at the page edge — do not "fix" it by shrinking the text.
8. **`cl-icon` is a dead rule and `cl-hero09__nav` is a phantom class.** 26 markup classes / 26 declared, but the two
   sets do not coincide: `.cl-icon` styles nothing, and the `<nav>` is styled by nothing. A census that only counts
   classes will report "all styled" and be wrong.
9. **The intro copy's line count flips twice and only one of the flips is about width.** It is **1 line** at
   **1130–1369**, **2 lines** at **≥1370** and at **≤1120** — yet the copy column is **598.58** at *both* 1440 and
   1160. The reason is the font's own clamp: `clamp(1rem, .96rem + .25vw, 1.15rem)` caps at **18.4 px** from
   vw **1216**, so above 1216 the type stays the same size while the column keeps narrowing. Any wrap assertion
   must name the viewport, and must not be reasoned from the column width alone.
10. **Two media steps, five consequences.** `900` changes the grid, the alignment (`text-align: center`), the
    portrait (`min(72%, 320px)`, auto margins) and the justification of both actions and meta; `520` changes the bar
    padding (24 → 16 block), the logo (18 → 16), the nav padding (14 → 10) and font (16 → 15), the sticker
    (64 → 52, `right: -22 → -18`), the status (14.5/10-18 → 13.5/9-14), the actions (each child `flex: 1 1 100%`) and
    the stats (centred). Every one of them is visible in the 320 render.

## Contrast (computed from the token pairs; text thresholds 4.5, non-text 3.0)

| pair | ratio | verdict |
| --- | --- | --- |
| ink `#0f1f3d` on ground `#e8f0fa` | **14.24** | pass |
| muted `#43526e` on ground | **6.84** | pass |
| muted on the disc tint `#d4e3f7` | **6.04** | pass (bio/status text can sit over the disc) |
| white on brand `#2456d6` | **6.22** | pass |
| white on brand-hover `#1b45b5` | **8.19** | pass |
| ink on yellow `#ffd23f` | **11.33** | pass (the highlight, the logo glyph) |
| white on ink (status pill) | **16.36** | pass |
| ink on card white | **16.36** | pass |
| muted on card white | **7.86** | pass (the CV's size span) |
| yellow glyph on ink (social hover) | **11.33** | pass |
| ping green `#34d399` on ink | **8.51** | decorative only |
| **focus ring `#2456d6` on ground** | **5.41** | pass (> 3) |
| **focus ring on card white** | **6.22** | pass |
| **focus ring on ink** (arrow-key focus on a hovered social tile) | **2.63** | **FAIL (1.4.11)** — fix in the port |
| **ink on brand blue** (what the `!important` prevents) | **2.63** | FAIL — never let the base `color: inherit` win |

The reference's one real accessibility failure is the last-but-one row: the ring is one blue for every control, and a
social tile whose hover state is ink ground keeps a blue ring. Fix: `outline-color: #ffd23f` on
`.social-link:hover:focus-visible` (11.33 on ink).

## Requirements

### Requirement: One portfolio hero screen

The template SHALL render a single screen whose content is a two-item header bar and one hero section holding a
portrait block and a copy block, with no form, no second section and no author JavaScript.

#### Scenario: Landmarks, counts and the one headline at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** it renders
- **THEN** there SHALL be exactly one `<header>`, one `<nav aria-label="Main">`, one `<main>`, **one**
  `<section aria-labelledby>` inside it, and **no** `<footer>` inside the hero shell
- **AND** there SHALL be exactly **one** `<h1>` (\"I design and build *calm interfaces* for health and climate
  teams.\"), **zero** `<h2>`, **zero** `<h3>`, **1** `<img>`, **0** `<form>`, **0** `<input>`, **0** `<button>`,
  **6** `<svg>`, **1** `<mark>`, **1** `<dl>` with three `dt`/`dd` pairs and **10** `<a>`
- **AND** the document SHALL be **944 px** tall (`scrollHeight`) with `scrollWidth === clientWidth`
- **AND** there SHALL be no `<script>` element authored by the template

#### Scenario: The hero is a 1180-wide grid inside a 100vh column

- **GIVEN** the root is `min-height: 100vh; display: flex; flex-direction: column; overflow: hidden` and `main` is
  `flex: 1`
- **WHEN** the hero is measured at 1440
- **THEN** the bar SHALL be **1180 × 88.80** at (130, 0) and the hero **1180 × 855.48** at (130, 88.80)
- **AND** the hero's grid SHALL resolve to **399.03 / 598.58** with an **86.40** column gap and `padding: 48px 48px
  88px`
- **AND** the portrait SHALL be **399.03 × 498.78** at (178, 247.14) and the copy block **598.58 × 719.48** at
  (663.42, 136.80)

### Requirement: The arch portrait with its sticker and status pill

The portrait block SHALL be a 4:5 photograph cropped by an arch-shaped frame, carrying a rotating yellow sticker at
its shoulder and a dark status pill across its foot.

#### Scenario: The frame, the crop and the 6 px border at 1440

- **GIVEN** the portrait block at 1440
- **WHEN** the frame is measured
- **THEN** it SHALL be **399.03 × 498.78**, `aspect-ratio: 4/5`, `border: 6px solid #fff`,
  `border-radius: 999px 999px 28px 28px`, `overflow: hidden`, `max-width: 420` and
  `box-shadow: 0 30px 60px -30px rgba(15,31,61,.45)`
- **AND** the `<img>` SHALL fill it with `object-fit: cover`, `object-position: 50% 30%`,
  `filter: saturate(1.05)` and a **4:5** source, being decorative in the layout sense but carrying a descriptive
  `alt`
- **AND** hovering the block SHALL scale the image to **1.04** over `.6s cubic-bezier(.2,.8,.2,1)`

#### Scenario: The sticker is 64 px square and its rect is not

- **GIVEN** animations are enabled
- **WHEN** the sticker is measured
- **THEN** `offsetWidth`/`offsetHeight` SHALL be **64 × 64** at `top: 12%` and `right: -22px`, i.e. its box spans
  x **535.03–599.03**, overhanging the frame by **22 px**
- **AND** its `getBoundingClientRect()` SHALL be **larger** than 64 (82.03 at one phase) because
  `animation: cl-hero09-turn 12s linear infinite` rotates it, so tests SHALL assert the offset box
- **AND** with `prefers-reduced-motion: reduce` the rotation SHALL be off and the rect SHALL equal **64 × 64**
- **AND** at ≤520 it SHALL be **52 × 52** at `right: -18px` with a 24 px glyph

#### Scenario: The status pill straddles the frame's foot

- **GIVEN** the pill at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **283 × 42.47** at (236.02, 721.45) — `left: 50%`, `translateX(-50%)`, `bottom: -18px`,
  `padding: 10px 18px`, radius 999, ink ground, white 14.5 px/500 text, `gap: 10`, `white-space: nowrap`
- **AND** it SHALL contain a **10 × 10** `#34d399` dot whose `::after` clone animates `scale(2.8)` + `opacity: 0`
  over **1.8 s** infinitely, marked `aria-hidden` so the phrase is announced once
- **AND** at ≤520 the pill SHALL be **249 × 38.92** (13.5 px text, `padding: 9px 14px`) and SHALL be allowed to be
  wider than the frame

### Requirement: The copy column

The copy block SHALL present an intro line, a display headline with one highlighted phrase, and a biography, in that
order and with no divider between them.

#### Scenario: The headline and its highlight

- **GIVEN** the copy block at 1440
- **WHEN** the `h1` is measured
- **THEN** it SHALL be **598.58 × 286.19** at (663.42, 209.83) in **4 lines** at **68.8 px / 71.552** with
  `letter-spacing: -2.408px`, `font-weight: 700`, `margin: 16px 0 20px` and `text-wrap: balance`
- **AND** the `<mark>` SHALL sit on **line 2**, paint a single rect **450.89 × 83** whose box is the font's inline
  box (taller than the 71.55 line box), with `padding: 0 .12em`, `border-radius: .18em` and
  `box-decoration-break: clone`
- **AND** the highlight's colour SHALL be `#ffd23f` with `color: inherit` (ink on yellow = **11.33 : 1**)
- **AND** when the phrase wraps (measured at 521) it SHALL paint **two** rects, not one

#### Scenario: The intro line and the biography

- **GIVEN** the copy block at 1440
- **WHEN** the text blocks are measured
- **THEN** the intro SHALL be **2 lines** of 18.4 px/500 muted text (line-height 28.52, block **57.03** tall)
- **AND** the bio SHALL be **3 lines** of 18.4 px/400 muted text (block **85.55** tall) capped at `max-width: 34em`
- **AND** the intro SHALL be **1 line** from **1130 to 1369** and **2 lines** from **1370 to 1440** (and again at
  **901–1120**), because the copy column narrows above 1200 while the intro's font is already capped at **18.4 px**
  from vw **1216**
- **AND** the bio SHALL stay **3 lines** from 1100 to 1440 and reach **4** at ≤1030

### Requirement: The CTA pair

The copy block SHALL end in two equal-height, unequal-width calls to action: a filled blue bar and a translucent
ghost bar.

#### Scenario: Shapes, colours and the forced white label

- **GIVEN** the two CTAs at 1440
- **WHEN** they are measured
- **THEN** the primary SHALL be **267 × 52** at (663.42, 631.56), ground `#2456d6`, radius **14**,
  `padding: 0 22`, `min-height: 52`, 16 px/600, an **18 px** envelope glyph, `gap: 10` and
  `box-shadow: 0 10px 22px -12px rgba(36,86,214,.8)`
- **AND** its label's computed colour SHALL be **white** (the reference needs `!important` to beat
  `a { color: inherit }`; the port SHALL set the colour on the control itself) — ink would be **2.63 : 1**
- **AND** the secondary SHALL be **255 × 52** at (942.42, 631.56), ground `rgba(255,255,255,.6)`, border
  `rgba(15,31,61,.2)` (declared `1.5px`, computing to **1px**), radius 14, ink text, with its `(PDF, 120 KB)` span
  muted at weight 400
- **AND** hover SHALL darken the primary to `#1b45b5` and lift it **-2 px**, and turn the ghost solid white with an
  ink border

#### Scenario: The pair wraps by content width, not by media query

- **GIVEN** the pair needs **534** px (267 + 12 + 255)
- **WHEN** the copy column is narrower than that
- **THEN** it SHALL wrap to two rows — measured at **901–1034** in the two-column layout and at **≤580** in the
  stacked layout, while **1035–1400** and **600–900** keep one row
- **AND** at ≤520 each child SHALL be `flex: 1 1 100%`, i.e. **full width** and stacked

### Requirement: The meta band

Below the CTAs the page SHALL show one hairline rule, four icon tiles and a three-cell definition list.

#### Scenario: Tiles and stats at 1440

- **GIVEN** the meta band at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **598.58 × 136.72** at (663.42, 719.56) with `border-top: 1px rgba(15,31,61,.14)`,
  `margin-top: 36`, `padding-top: 26` and `gap: 20px 36px`
- **AND** it SHALL hold **two rows**: four **44 × 44** white tiles (radius 12, `gap: 8`, total **200**) at
  (663.42, 746.56), then a **364 × 45.72** `dl` at (663.42, 810.56) whose cells are **83 / 112 / 113** wide with a
  **28** px gap
- **AND** each tile SHALL be an `<a>` with an `aria-label` and a **20 px** glyph, hover flipping it to ink ground
  with a **yellow** glyph and `translateY(-2px)`
- **AND** each `dt` SHALL be 12.5 px/500 uppercase with `letter-spacing: 1px` in muted, over a 17 px/600 ink `dd`

#### Scenario: The band's rows are a copy-column fact

- **GIVEN** the band needs **600** px to keep one row (200 + 36 + 364)
- **WHEN** the copy column is measured across the ladder
- **THEN** it SHALL be **one row (72.72)** from **1163** to **1400** only, and **two rows (136.72)** at **≤1162** and
  at **≥1401**
- **AND** at ≤900 (stacked, centred) it SHALL be one row at **900–600**, two at **≤560**, and **three (194.44)**
  at **≤395** where the three stats themselves wrap
- **AND** the port SHALL NOT \"fix\" the 1440 two-row state: it is the design

### Requirement: Responsive reshaping at 900 and 520

The template SHALL collapse to a centred single column at 900 and tighten the chrome at 520, and it SHALL keep the
header readable where the reference clips it.

#### Scenario: The collapse at 900

- **GIVEN** a viewport of 900
- **WHEN** the hero is measured
- **THEN** the grid SHALL be a single **828** px column, the portrait SHALL be **320 × 400** and centred, the copy
  SHALL be `text-align: center`, the intro and bio SHALL be centred with `margin-inline: auto`, and the actions and
  meta SHALL be `justify-content: center`
- **AND** the document SHALL be **1102** px — a **172** px jump from 930 at 901
- **AND** the `h1` SHALL drop to **2 lines** at 53.2 px and the meta SHALL return to one row

#### Scenario: The 520 step

- **GIVEN** a viewport of 520
- **WHEN** the chrome is measured
- **THEN** the bar's block padding SHALL be **16** (height **71.25**), the wordmark **16 px**, the nav pills
  `8px 10px` at **15 px**
- **AND** the portrait SHALL be **334.88** wide (**70 %**) against **320** at 521, so the frame grows **18.6** px and
  the document **1241 → 1242** while the viewport shrinks by one
- **AND** the sticker SHALL be **52** at `right: -18`, the pill **249 × 38.92**, both CTAs full width and the stats
  centred

#### Scenario: The header never clips

- **GIVEN** the bar's children need **356** px and the reference does not wrap the bar
- **WHEN** the viewport is **320**
- **THEN** the port SHALL NOT reproduce the reference's clipped `Notes` pill (its right edge sits at **x 356** on a
  320 canvas, **36 px** cut by `overflow: hidden`, `scrollX` still 0)
- **AND** instead the bar SHALL wrap (nav on its own line, centred) or the wordmark text SHALL be hidden below
  **380**, so that all three nav labels are fully visible at **320**
- **AND** `scrollWidth === clientWidth` SHALL hold at every width from 320 to 1920

### Requirement: Motion and its off switch

The template SHALL run two decorative CSS animations and SHALL stop both under `prefers-reduced-motion`.

#### Scenario: Pulse, rotation and hover, with a reduced-motion reset

- **GIVEN** motion is allowed
- **WHEN** the page renders
- **THEN** the status dot's `::after` SHALL animate `cl-hero09-ping` **1.8s** infinite and the sticker
  `cl-hero09-turn` **12s** linear infinite
- **AND** hover transitions SHALL be `.2s` on colour/transform and `.6s` on the portrait's scale, with no
  `requestAnimationFrame` and no JavaScript
- **AND** under `prefers-reduced-motion: reduce` both animations SHALL compute to **`none`** and every transition to
  **`none`** (`!important`), leaving a static page whose document height is unchanged

### Requirement: The Component Dock footer

The template SHALL carry a footer that names and links Component Dock, because the reference has no footer at all.

#### Scenario: A slim branded strip

- **GIVEN** the reference ends at the meta band with no `<footer>`
- **WHEN** the port renders
- **THEN** it SHALL add one slim footer inside the shell, below the hero, styled from the same tokens (13 px muted
  text over the same ground, no border, centred) containing a single link to `https://www.componentdock.com/`
  labelled **\"Component Dock\"**
- **AND** the footer SHALL NOT introduce a new colour, font or radius, and SHALL NOT contain the word ColorLib
- **AND** the document height SHALL grow only by the footer's own height (≈ 40–56 px), recorded as a delta

## Adapting to the repo (deltas — read before writing code)

1. **Name and identity.** `apps/belvedere`, package `@free-react-templates/belvedere`, `public/CNAME` =
   `belvedere.free.componentdock.com`, `"homepage"` = `https://belvedere.free.componentdock.com`. The persona,
   wordmark and address are invented anew: **Belvedere** the studio, a **`hello@belvedere.design`** mailto, and
   **no** \"Maren Holt\", `marenholt.design`, \"Studio Polder\", \"Rotterdam\" or any other source string anywhere in
   `apps/`.
2. **The portrait** becomes `https://picsum.photos/seed/belvedere-1/1200/1500` (4:5, deterministic) with
   `alt=\"Portrait of the designer\"` or similar — no source photograph is copied.
3. **Fonts:** load **only** Bricolage Grotesque, variable, from Google Fonts:
   `https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400..700&display=swap`. It is the page's
   only face, 400/500/600/700 are all real (canvas A/B: 610 / 626 / 619 / 633), and **800 clamps to 700** — do not
   ask for 800.
4. **Icons:** replace the six inline glyphs with `lucide-react` equivalents (`Mail`, `Code2`/`Terminal`,
   `PenLine`, `Camera`, `User`, `Sparkle`/`Star`) at the same pixel sizes (30, 18, 20 ×4). Keep them
   `aria-hidden` inside labelled links.
5. **Anchors:** the reference has **nine dead `#`**. The port SHALL leave none — the wordmark and all three nav
   pills resolve to a real `#top` on the shell (or to real routes if routes are added), the mailto is a real
   `mailto:`, the CV button becomes a real `mailto:hello@belvedere.design?subject=CV%20request` (documented
   delta: no PDF is shipped, the metadata span keeps its shape), and the four tiles point at real external
   profiles (`https://github.com`, `https://dev.to`, `https://unsplash.com`, `https://www.linkedin.com`) with
   `target=\"_blank\" rel=\"noreferrer noopener\"`.
6. **The clipped header is fixed, not copied** (requirement above): wrap the bar at ≤380.
7. **The focus ring needs one override:** the blue ring is correct everywhere except on a hovered ink-filled social
   tile (`2.63 : 1`). Use `#ffd23f` for that state, or move the tile's hover fill to ink-with-yellow-ring.
8. **The `!important` is not needed** in React: set `text-white` on the primary explicitly, then assert the computed
   colour in a test (the base `a { color: inherit }` trap is a CSS-specificity artefact, not a design decision).
9. **Tokens live in `@theme`** (Tailwind 4): `--color-ground #e8f0fa`, `--color-disc #d4e3f7`, `--color-ink #0f1f3d`,
   `--color-muted #43526e`, `--color-brand #2456d6`, `--color-brand-deep #1b45b5`, `--color-sun #ffd23f`,
   `--color-card #ffffff`, `--color-frame #cbd9ee`, `--color-ping #34d399`, `--gutter clamp(16px,4vw,48px)`,
   `--hero-gap clamp(36px,6vw,96px)`. Use them through classes; no raw hex in components.
10. **The radial disc** is part of the root's background:
    `radial-gradient(circle at 18% 70%, var(--color-disc) 0 22%, transparent 22.2%), var(--color-ground)`.
    With `circle`, the stop percentages resolve against the **farthest-corner** distance, so on a 1440 × 944 box
    the radius is **≈ 298 px** (0.22 × 1353) and the hard edge lands at **x 557 / y 959** — it is clipped by the
    viewport, which is what makes it read as an arc. Verified against pixels: at y = 880 the tint spans
    **x 58–460**, i.e. centre **259** and radius **≈ 298.6**.
11. **`main { display:flex; align-items:center }`** is inert at 1440 (the hero fills `main`) but becomes meaningful
    only if the port's content is shorter than the viewport; keep it, or drop it and let the hero grow — but then
    re-check the 900 band.
12. **No `package-lock.json` hand-editing:** add the workspace with `npm install` at the root.
13. **Do not add a `<script>`.** The two animations are CSS; the page has zero behaviour in the reference.

## Verification checklist

- [ ] `apps/belvedere` exists, package `@free-react-templates/belvedere`, `public/CNAME` =
      `belvedere.free.componentdock.com`, `"homepage"` = `https://belvedere.free.componentdock.com`
- [ ] `npm run verify:app belvedere` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-belvedere --type spec` is valid
- [ ] measured at 1440 × 900 (motion settled): bar **1180 × 88.80**; logo **140 × 34**; nav **225 × 40.80** with
      pills **69 / 74 / 74**; hero **1180 × 855.48** with columns **399.03 / 598.58** and gap **86.40**; frame
      **399.03 × 498.78**; pill **283 × 42.47** at (236.02, 721.45); dot **10 × 10**; sticker **64 × 64** at
      `right: -22`; intro **57.03** (2 lines); `h1` **286.19** in **4 lines** at **68.8 / 71.552**; mark
      **450.89 × 83**; bio **85.55** (3 lines); CTAs **267 × 52** and **255 × 52**; meta **598.58 × 136.72** in two
      rows; tiles **44 × 44**; stats **364 × 45.72** with cells **83 / 112 / 113**
- [ ] document height **944** at 1440 and 1401, **900** at 1400, 1300, 1280, 1200, 1163, 1162, 1100, 1035,
      **939** at 1034, **964** at 1024, **930** at 901, **1102** at 900, **1127** at 800, **1147** at 640,
      **1221** at 560, **1241** at 521, **1242** at 520, **1203** at 480, **1250** at 395, **1246** at 390,
      **1208** at 320
- [ ] meta band: **one row** 1163–1400, **two rows** at 1162 and 1401, **three rows** at ≤395 — the 1440 two-row
      state is intended
- [ ] actions: one row at 1035–1400 and 600–900, two rows at 901–1034 and ≤580; at ≤520 each is full width
- [ ] `h1` line count: **4** at 1440–901, **2** at 900–810, **3** at 800–430, **4** at ≤400; font **68.8** at 1440
      and **36.8** at ≤771
- [ ] intro line: **1** line at 1280 and **2** at 1440 (the copy column is *narrower* at 1440); bio **3** lines at
      both
- [ ] the sticker's **offset box** is 64 (52 at ≤520) and its rect is *larger* while the animation runs; under
      `prefers-reduced-motion` both animations compute to `none` and the rect equals 64
- [ ] the mark paints the font's inline box (**83** px, not 71.552) and splits into **two** rects when it wraps
- [ ] `scrollWidth === clientWidth` at 320, 360, 390, 480, 520, 560, 640, 768, 900, 1024, 1280, 1440, 1920 —
      and the **`Notes` pill is fully visible at 320** (the reference clips 36 px of it)
- [ ] zero `href=\"#\"` in the shipped app; the four social tiles are real external links with
      `rel=\"noreferrer noopener\"`; one nav item carries `aria-current=\"page\"`
- [ ] focus rings: blue `#2456d6` on the page and white, **11.33 : 1** (yellow) on the ink-filled social hover —
      no state below **3 : 1**
- [ ] the primary CTA's computed text colour is **white** (6.22 : 1), not inherited ink (2.63 : 1)
- [ ] one `<h1>`, zero `<h2>`, one `<img>`, zero `<form>`, zero `<button>`, six icons, ten anchors, 26 styleable
      classes; no `<script>`
- [ ] footer links `https://www.componentdock.com/` labelled \"Component Dock\" and adds ≈ 40–56 px of height
- [ ] `git grep -il 'colorlib\\|hero-09\\|marenholt\\|polder' apps/belvedere` → **no hits** (provenance lives only
      in this spec, `TEMPLATES.md` and the PR)
