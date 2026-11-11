# Template: Alpenglow (Hero — a cinematic night-sky landscape built entirely in CSS: a panning three-range mountain scene under a glowing sun and a grain wash, a left-aligned two-line display headline, a pulsing play button that opens a modal film player, and a three-chapter strip)

## Purpose

**One full-height outdoor-brand film hero** — the eleventh variant of the `hero` snippet family. The nine shipped
or prepped variants sold a designer's portfolio, conference tickets, a restaurant, a newsletter, two physical
products, a hosting platform and a chiropractic clinic; this one sells a **film and the clothing worn in it**, and
it is the family's first page whose whole background is a **drawn scene** rather than a grid, a blur or a
photograph.

A `100vh`-floored flex column holds a **transparent header bar** (a mountain-path glyph plus "Northbound", a menu
button and four nav links), then a **single left-aligned hero section** — a **kicker** with a live red dot, a
**two-line display headline**, a three-line sub-paragraph, an **action row** pairing a **76 px white play disc with
a two-line label** against an **outlined pill** — and finally a **three-item chapter list** on a hairline rule. A
single `<dialog>` holds the "film": a **16 : 9 gradient panel** with a fake control bar, closed by a circular button
or by clicking the backdrop.

The page is **dark-only and photographic-by-illustration**: nothing but **six** `<svg>` marks and **zero** `<img>`
elements. Behind the copy sits a **sky gradient** (`#1a2150` → `#43377a` → `#b95d8a` → `#f59a6c` → `#ffd48e`) on a
`100 % × 160 %` canvas, slowly panned; eight **radial-gradient stars** twinkle in its top half; a **34 vmin sun** —
`#fff0c2` core, `#ffd08a` disc, fading to nothing at 70 % — hangs at `left: 62 %; bottom: 22 %`; and **three
mountain ranges** (46 %, 34 % and 22 % of the viewport height, painted as inline-SVG data URIs in `#6d3f78`,
`#392d5c` and `#161b33`) slide sideways at **120 s / 70 s / 40 s**. A **grain layer** finally paints a horizontal
`rgba(10,13,28,.78 → 0)` wash plus a 3 px scanline, which is what makes the left half readable.

The palette is four tokens plus the scene's own stops: `#0f1426` night, `#fff` ink, `#dfe3f1` soft and `#ffb86b`
amber, with the red `#ff5d5d` "live" dot as the only fifth colour. Radii are **999** (the shop pill, the dialog's
screen label), **50 %** (every disc), **20** (the dialog, the mobile dropdown) and **12** (the fake control bar).

The document is **exactly the viewport height at every width** when the viewport is 900 tall — the first variant in
the family with no vertical overflow at 900 — because the content floor is only **766** at 1440 and **843** at 320.
The floor, not the viewport, is what a short window scrolls: at **1440 × 600** the page is **766** and scrolls 166.

- **Source slug:** `hero-11`
- **ColorLib page:** https://colorlib.com/wp/template/hero-11/ — **HTTP 200, 114,179 B**, `<title>`
  `Hero V11 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V11"**, `datePublished`
  **2026-09-25T15:09:14+00:00**, meta description _"A cinematic hero for an outdoor brand film that looks like a
  video background but is made entirely in CSS… Free download, no jQuery or plugins."_, and the claim _"159 KB"_
  (measured **162,619 B = 158.8 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V11".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-11/ — **HTTP 200, 4,921 B**,
  `<title>` `Hero V11 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=dacabf7f`,
  `fetchpriority="high"`) and **one** author `<script>` (`js/snippet.js?v=c4e1c4a7`, 2,386 B — the menu **and** the
  dialog). The slug-only path `theme/hero-11/` is **404 (9 B)** and `theme/bb/hero-11/` is **404 (9 B)**: the
  `bootstrap/` prefix is the only live path, as for every card, alert and hero variant before it. `index.html` under
  the same directory is **byte-identical to the directory URL** (4,921 B, `cmp` clean) — a no-op link, never a 404.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-11.jpg — **HTTP 200, 34,350 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name. It is a **macOS browser mock-up** (traffic-light chrome,
  a `preview.colorlib.com` URL pill, a drop shadow on a near-white ground) with the page inside at ≈ **1112 px**,
  showing the hero only — the dialog is not pictured. Do not adopt the frame, the rounded window corners or the
  shadow.
- **Design category:** Hero (**outdoor apparel / brand-film hero — a CSS-drawn night landscape, a left-aligned
  display headline, a play-disc CTA with a modal player and a chapter strip**; variant 11 of the **12**-variant
  `hero` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/alpenglow`, package
  `@free-react-templates/alpenglow`, CNAME `alpenglow.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1890 | items with NO spec on main: 0` (main `29f42ef7a`). So this design comes from
`docs/catalog-coverage.md`, which lists **214 snippet variants in 19 families** that ColorLib's own listing carries
and the checklist never recorded. `hero-11` is **variant 11 of 12** in the `hero` family, worked in variant order:
1 → proscenium (shipped), 2 → afterglow (shipped), 3 → presswork (shipped), 4 → tendril, 5 → epistle, 6 → overtone
(shipped), 7 → soapbox (shipped), 8 → trattoria (shipped), 9 → belvedere (prepped), 10 → virga (prepped), and this
prep is **variant 11**.

## Bootstrap Heroes (12)

`## Bootstrap Heroes (12)` opens at **line 830** of `TEMPLATES.md`, between `## Bootstrap Footers (20)` and
`## Bootstrap Modals (20)`. On main `29f42ef7a` the section holds **nine** rows — Hero 01 → proscenium, Hero 02 →
afterglow, Hero 03 → presswork, Hero 04 → tendril, Hero 05 → epistle, Hero 06 → overtone, Hero 07 → soapbox,
Hero 08 → trattoria, Hero 09 → belvedere (shipped mid-prep). **Hero 10 (virga) has no row yet** — its prep is
unbuilt — so `TEMPLATES.md` lags the prep queue by one. The row grammar in this section is
`[colorlib] · ![preview] · [app]`, preview in the middle:

```markdown
- [ ] **Hero 11** — [colorlib](https://colorlib.com/wp/template/hero-11/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-11.jpg) · [alpenglow](https://alpenglow.free.componentdock.com)
```

Insert it **after** whichever hero rows exist at that moment (after Hero 09 today, after Hero 10 once it lands),
keep that grammar, and **re-read the surrounding lines immediately before pushing** — the implementer streams rewrite
this file and the section grew a row in each of the last four prep runs (Hero 07 during the belvedere prep, Hero 08
during the virga prep, Hero 09 during this one).

**The name.** `alpenglow` — one lowercase word for the rosy light a low sun throws on a mountain top, which is
literally the sky this page paints behind three ranges. It keeps the snippet families' closed-single-word pattern
(`nameplate`, `octavo`, `wafer`, `virga`, `proscenium`, `soapbox`, `trattoria`, `belvedere`), and it is not the
source's invented brand. Verified free on main `29f42ef7a`: `git grep -il alpenglow origin/main` → **0 files**; no
`apps/alpenglow`; no `openspec/specs/template-alpenglow`; no `docs/templates/alpenglow`; no `**Alpenglow**` row in
`TEMPLATES.md`; and all three ColorLib URLs miss — `colorlib.com/wp/template/alpenglow/` **404**,
`preview.colorlib.com/theme/alpenglow/` **404**, `preview.colorlib.com/theme/bootstrap/alpenglow/` **404**.

Checked and **free** for later variants of this family: **`lastlight`** (0 files, all three URLs 404). **Taken, do
not reuse:** `northlight` (2 files), `skylight` (13 files).

## Design tokens (read off `css/style.css`, 19,489 B, sha256 `ab10bb154f7fa1be…`)

| Token | Value | Where it lands |
| --- | --- | --- |
| `--cl-hero11-ink` | `#fff` | headline, wordmark, nav hover/current, play label, shop label, dialog text |
| `--cl-hero11-soft` | `#dfe3f1` | sub-paragraph, chapter labels, "2:14" line, the **declared** nav-link colour |
| `--cl-hero11-accent` | `#ffb86b` | kicker, chapter numbers, focus ring, dialog progress fill, current-link underline |
| `--cl-hero11-night` | `#0f1426` | `<body>`, shell, play-glyph ink, shop hover label, menu-button wash |
| `--cl-hero11-gutter` | `clamp(16px, 4vw, 48px)` | bar and main inline padding (48 from vw 1200, 16 at ≤400) |
| sky | `linear-gradient(180deg, #1a2150 0%, #43377a 30%, #b95d8a 55%, #f59a6c 75%, #ffd48e 100%)`, `background-size: 100% 160%` | the scene's ground, panned 16 s alternate |
| sun | `radial-gradient(circle, #fff0c2 0 30%, #ffd08a 31%, rgba(255,190,120,.5) 40%, rgba(255,160,120,0) 70%)` | the 34 vmin disc |
| ranges | far `#6d3f78` @ `.85` · mid `#392d5c` · near `#161b33` | three inline-SVG data-URI bands |
| grain | `linear-gradient(90deg, rgba(10,13,28,.78), rgba(10,13,28,.35) 55%, rgba(10,13,28,0))` + `repeating-linear-gradient(0deg, rgba(255,255,255,.025) 0 1px, transparent 1px 3px)` | the readability wash + scanline |
| live dot | `#ff5d5d` + `box-shadow: 0 0 0 4px rgba(255,93,93,.25)` | the kicker's 8 px dot |
| hairline | `rgba(255,255,255,.22)` | the chapter rule (the only section rule on the page) |
| pill border / wash | `rgba(255,255,255,.45)` / `rgba(15,20,38,.25)` | the shop pill |
| menu button | border `rgba(255,255,255,.35)`, wash `rgba(15,20,38,.35)` | the ≤860 hamburger |
| dropdown | `rgba(15,20,38,.96)`, `box-shadow: 0 24px 48px -16px rgba(0,0,0,.6)` | the ≤860 nav panel |
| dialog | ground `#0b0f1f`, `box-shadow: 0 40px 100px -20px rgba(0,0,0,.7)`, backdrop `rgba(6,8,18,.82)` + `blur(6px)` | the `<dialog>` |
| dialog screen | `radial-gradient(circle at 70% 70%, rgba(255,184,107,.45), transparent 45%)` over `linear-gradient(160deg, #1d2550, #5a3470 55%, #c0607a)` | the 16 : 9 panel |
| control bar | `rgba(6,8,18,.6)`, track `rgba(255,255,255,.3)`, fill `#ffb86b` | the fake player controls |
| radii | **999** · **50 %** · **20** · **12** · **4** · **2** | pill + screen label · every disc · dialog + dropdown · control bar · inline `code` · track |
| type | **Figtree** 400/500/600/700/800, `system-ui` fallback; body **16 px / 1.55** | everything |
| type scale | 99.2 / 20 / 19.2 / 18 / 17 / 16 / 15 / 14 / 13 | h1 · logo · sub · play label · dialog title · body/pill · chapters · kicker/"2:14" · numbers/time |

Contrast, measured off a **text-transparent re-render** (median of the pixels behind each box, 2026-11-11):
ink on the washed sky **16.05 : 1** (title), soft **10.71** (sub), amber **9.94** (kicker), nav ink **15.50**,
shop ink on the pill **13.15**, chapter soft **13.35**, chapter numbers **10.33**, wordmark **18.03**, focus ring
**9.42**, play glyph on white **18.29**, dialog close on its `rgba(255,255,255,.1)` tile **14.86**. The worst pair
on the page is the **amber chapter numeral at 390 over the lit near range — 6.82 : 1**, still clear of 4.5. **This
variant has no failing contrast pair**; the port has nothing to repair, only to preserve. Two non-text edges are
worth knowing: the shop pill's 45 % white border composites to **3.96 : 1** against the sky (above the 3 : 1 control
threshold) and the chapter hairline is **2.02 : 1** (a decorative divider, not a boundary).

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium, `document.fonts.ready` + 700–900 ms)

- **Live CSS is the archive's un-versioned twin.** `css/style.css` live is **19,489 B**, sha256
  `ab10bb154f7fa1be847a26516fe6c55f94e64135347d77fb96298ebf7e2bc1eb`; the copy inside
  `downloads/free/hero-11.zip` is **byte-identical**, and so is `js/snippet.js` (**2,386 B**, sha256
  `8b573a28e193d68b…`) → **live preview verified; the archive is its un-versioned twin** for both files. The **HTML
  differs only in `<head>` + the two `?v=` query strings** (robots meta, a `cdnjs` dns-prefetch,
  `fetchpriority="high"` on the sheet); the body is identical.
- **Archive:** **162,619 B**, 15 entries, **10 `.woff2` files that are only 2 distinct binaries** —
  `figtree-*-latin` **20,184 B** (one hash, five names) and `figtree-*-latin-ext` **10,228 B** (one hash, five
  names) — i.e. **one variable binary per subset, copied under 400/500/600/700/800**. The sheet declares all five
  weights per subset (**10** `@font-face`), so nothing here is a dead file.
- **Variable, proved by A/B:** the same binary declared once as `font-weight: 100 900` measures, at 40 px for
  `Svolvær to Kabelvåg 0123456789`: **300 → 590, 400 → 611, 500 → 612, 600 → 607, 700 → 617, 800 → 622, 900 → 638**.
  Through the shipped five-face sheet the same string measures **100 = 300 = 400 = 611, 500 = 612, 600 = 607,
  700 = 617, 800 = 900 = 622** — the declared range is 400–800 and everything outside clamps to its nearest end.
  600 measuring **narrower** than 500 is the face, not a fallback: do not "fix" a weight by advance width.
- **CSS census:** 19,489 B · **80** style rules + **10** `@font-face` + **8** `@keyframes` (`sky`, `twinkle`, `sun`,
  `pan`, `pan-mid`, `pan-near`, `ripple`, `pop` — 24 inner steps) + **3** `@media` (`860`, `520`,
  `prefers-reduced-motion`) — **125** blocks in all · **5** custom properties · **5** `transition` declarations ·
  **3** `box-shadow` · **16** gradient functions · **3** `!important` (the chapter strip's forced padding and the
  two in the reduced-motion reset) · **22** `revert` declarations in the `all: revert` host reset.
- **Class census:** **42** markup classes, **every one declared** — no phantom. Declared but never in markup:
  `.cl-icon` (**dead**, the same unused utility as in `fieldguide`, `belvedere` and `virga`), plus the three
  JavaScript states `.is-enhanced`, `.is-open`, `.is-paused`.
- **Counts:** **1** `<h1>`, **1** `<h2>` (inside the dialog), **0** `<img>`, **6** `<svg>` (logo 26, menu 22, X 22,
  play 22, X 20, control play 14), **3** `<button>` (menu, play, close), **6** `<a>`, **0** `<form>`,
  **0** `<input>`, **1** `<dialog>`, **1** `<header>`, **1** `<main>`, **1** `<section>`, **0** `<footer>`.
- **Anchors: 6 total, all dead `#`** — wordmark, four nav links, the shop pill. The play control is a `<button>`,
  not a link. There is no `mailto:`, no `tel:` and no external link anywhere on the page. `hero-11` has **no inner
  pages**: eight candidate names (`about`, `contact`, `pricing`, `blog`, `films`, `collection`, `journal`, `gallery`,
  `shop`) × two prefixes (`theme/bootstrap/hero-11/`, `theme/hero-11/`) are **all 404**.
- **JavaScript:** a 62-line IIFE with two initialisers. `initMenu()` adds `.is-enhanced` to the bar on load (so the
  ≤860 dropdown is progressive — without JS the bar simply wraps), toggles `.is-open` + `aria-expanded` +
  `aria-label` (`Open menu`/`Close menu`), closes on a nav link click, on `Escape` (returning focus to the button),
  on any outside `document` click, and when `matchMedia('(min-width: 861px)')` starts matching. `initVideo()` opens
  the `<dialog>` with `showModal()`, adds `.is-paused` to the shell (**which pauses every scene animation**), focuses
  the close button on open, closes on the close button or on a click **outside the dialog's rect** (it re-tests
  `clientX/Y` against `getBoundingClientRect`, because a click on the backdrop targets the dialog itself), and on
  `close` removes `.is-paused` and returns focus to the play button. **No IntersectionObserver, no scroll listener,
  no `requestAnimationFrame`.**
- **Zero horizontal overflow** at every measured width: `scrollWidth === clientWidth` and `scrollX = 0` after
  `window.scrollTo(300, 0)` at 320, 390, 521, 700, 860, 861, 960, 1280, 1440 and 1920.

## Design at 1440 × 900 (measured, motion settled)

- Shell **1440 × 900**, `min-height: 100vh`, `overflow: hidden`, `isolation: isolate`, flex column; content floor
  **766**.
- **Bar inner 1320 × 82.8** at (60, 0) — `padding: 24px 48px`, `gap: 24`, transparent (no border, no fill).
- **Wordmark 158 × 31** at (108, 25.89) — 20 px/800, `letter-spacing: .02em`, `gap: 10`, a 26 px mountain-path
  glyph using `currentColor`.
- **Nav 348 × 34.8** at (984, 24) — four links `gap: 30`, each `padding: 4px 0` + a **2 px** bottom border, 16 px/
  500, so every link is **34.8** tall: Films **37**, Collection **78**, Expeditions **87**, Journal **56**.
- **Main 1320 × 817.2** at (60, 82.8), `padding: 0 48`, `justify-content: center` — it centres the **hero + chapter
  strip group** (604.52 + 78.25 = **682.77**), which is why the hero starts at **y 150.02** and not at
  `82.8 + 96`.
- **Hero 720 × 604.52** at (108, 150.02) — `max-width: 720`, `padding: 96px 0 56px` (the clamps
  `clamp(40px, 8vw, 96px)` / `clamp(32px, 5vw, 56px)`), left-aligned.
- **Kicker 317.2 × 21.69** at (108, 248.17) — `display: inline-flex`, `gap: 10`, 14 px/700, `letter-spacing: 2.24px`
  (`.16em`), uppercase, amber; an **8 px** `#ff5d5d` dot with a 4 px 25 % ring. It is inline-level, so it sits
  **2.15 px below** the hero's padding edge inside the parent's 24.8 px strut.
- **`h1` 720 × 188.47** at (108, 288.81) — **99.2 px / 94.24** (`.95`), weight **800**, `letter-spacing: -3.968px`
  (`.04em`), `margin: 18px 0 20px`, `text-wrap: balance`, `text-shadow: 0 2px 30px rgba(10,13,28,.35)`, in **2
  lines** measuring **538.39** and **652.45**.
- **Sub 652.8 × 89.25** at (108, 497.28) — **19.2 px / 29.76**, soft `#dfe3f1`, `max-width: 34em`
  (34 × 19.2 = 652.8), **3 lines** measuring **650 / 646 / 234**.
- **Actions 720 × 76** at (108, 622.53) — `display: flex`, `flex-wrap: wrap`, `gap: 18px 28px`,
  `margin-top: 36`.
  - **Play 240 × 76** at x 108 — `padding-right: 24`, `gap: 16`, no border, no fill, ink label. Its **disc is
    76 × 76** at (108, 622.53), white, radius 50 %, a 22 px night play glyph nudged 3 px right, plus **two
    concentric `::before`/`::after` rings** — `2 px rgba(255,255,255,.6)`, radius 50 %, the second delayed
    **1.2 s**, both scaling to **1.7** and fading to 0 over **2.4 s**.
  - **Play text 124 × 40** at (200, 640.53) — `display: grid`, 18 px/700 ("Watch the film") over 14 px/500 soft
    (the duration).
  - **Shop pill 260 × 54.8** at (376, 633.13) — `padding: 14px 24px`, radius **999**, a **1 px**
    `rgba(255,255,255,.45)` border (declared `1.5px`, which computes and lays out as **1**), `rgba(15,20,38,.25)`
    wash, 16 px/600; it is **vertically centred** in the 76 px row, hence `633.13`.
- **Chapter strip 1224 × 78.25** at (108, 754.53) — full `main` content width, `border-top: 1px
  rgba(255,255,255,.22)`, `padding: 22px 0 32px` (`!important` in the reference), flex row `gap: 12px 40px`,
  15 px soft; three `li` at x **108 / 317 / 542**, widths **169 / 185 / 120**, each a 13 px/700 amber number
  `gap: 10` from its label.
- **Sun 306 × 306** at (892.8, 396.59) — `34vmin` (306 at vh 900), `left: 62 %`, `bottom: 22 %`, radius 50 %.
- **Ranges**: far **414** tall (46 %), mid **306** (34 %), near **198** (22 %), each `left: 0; right: 0;
  bottom: 0`, `background-repeat: repeat-x`, tiles **1200 / 1000 / 800** px wide.
- **Dialog 960 × 610** at (240, 145) — `width: min(960px, calc(100% - 32px))`, radius **20**, `#0b0f1f`. Head
  **70** tall (`padding: 14px 14px 14px 22px`, a 42 px circular close button), **screen 960 × 540** (16 : 9), and a
  **control bar 928 × 48** at (256, 693) — `inset: 0 16px 14px`, radius 12, `rgba(6,8,18,.6)`, a 28 px white disc,
  a **4 px** track with the amber fill at **28 %**, and a 13 px `tabular-nums` time.

## Content height ladder (measured at a 400 px viewport, where `min-height: 100vh` cannot mask it)

`843` at **≤322** · `801` at **323–325** · `775` at **326–349** · `757` at **350–381** · `732` at **382–503** ·
`716` at **504–520** · `704` at **521–573** · `642` at **574–602** · **`612` at 603–639** (the floor) · `620` at
**640** · `635` at **700** · `652` at **768** · `675` at **860** · `664` at **861** · `689` at **960** · `705` at
**1024** · `753` at **1280** · **`766` at 1440–1920**.

At a **900**-tall viewport every one of those widths renders a document of **exactly 900** — the floor never
reaches the viewport, so the page does not scroll anywhere from 300 to 1920. It is the family's first variant with
that property; the previous four all overshot 900 somewhere. Three inversions survive in the floor itself: the
**h1 leaving 3 lines at 323** is worth **42 px**; **861** is **11 px shorter** than 860 (the bar swaps a 46 px
menu button for a 34.8 px link row) while the hero grows 0.25; and the floor **dips to 612 at 603** before climbing
to 766 at 1440, so "narrower is shorter" is false below 603 and false again at 861.

## Requirements

### Requirement: The page shell and its drawn landscape

The template SHALL render exactly one full-height shell whose sky, stars, sun, three mountain ranges and grain wash
are decorative layers behind the content, painted in CSS, and clipped by the shell.

#### Scenario: Shell and ground at 1440

- **GIVEN** the shell at 1440 × 900
- **WHEN** it is measured
- **THEN** it SHALL be **1440 × 900** with `background: #0f1426`, `color: #fff`, `min-height: 100vh`,
  `overflow: hidden`, `isolation: isolate`, `display: flex`, `flex-direction: column`, 16 px / 1.55
- **AND** the scene container SHALL be absolutely positioned `inset: 0`, `z-index: -1`, `overflow: hidden`,
  `aria-hidden="true"`, so it never takes pointer events and never reaches the accessibility tree.

#### Scenario: Sky, stars, sun and the three ranges

- **GIVEN** the scene at 1440 × 900
- **WHEN** its layers are measured
- **THEN** the sky SHALL paint `linear-gradient(180deg, #1a2150 0%, #43377a 30%, #b95d8a 55%, #f59a6c 75%,
  #ffd48e 100%)` on a **`100 % × 160 %`** canvas, animating its `background-position` from `0 0` to `0 100 %` over
  **16 s ease-in-out infinite alternate**
- **AND** the star field SHALL be eight `radial-gradient` dots of 1–1.5 px in the top **55 %** of the scene at
  `opacity: .7`, twinkling to `.3` over **4 s ease-in-out infinite alternate**
- **AND** the sun SHALL be **306 × 306** at (892.8, 396.59) — `34vmin`, `left: 62 %`, `bottom: 22 %`, radius 50 %,
  `radial-gradient(circle, #fff0c2 0 30%, #ffd08a 31%, rgba(255,190,120,.5) 40%, rgba(255,160,120,0) 70%)`,
  drifting `translateY(12%)` and fading to `.8` on the same 16 s alternate
- **AND** the three range bands SHALL be **414 / 306 / 198** tall (46 / 34 / 22 % of the viewport) anchored
  `bottom: 0`, `repeat-x`, from inline-SVG data URIs in `#6d3f78` (`.85`), `#392d5c` and `#161b33`, tiled at
  **1200 / 1000 / 800** px and panning `-2400 / -2000 / -1600` px at **120 s / 70 s / 40 s linear infinite**
- **AND** the grain layer SHALL paint `linear-gradient(90deg, rgba(10,13,28,.78), rgba(10,13,28,.35) 55%,
  rgba(10,13,28,0))` plus a `repeating-linear-gradient(0deg, rgba(255,255,255,.025) 0 1px, transparent 1px 3px)`
  scanline — this wash is what makes the left column legible, and it SHALL NOT be dropped.

#### Scenario: The scene never scrolls the page sideways

- **GIVEN** any viewport from 320 to 1920
- **WHEN** `window.scrollTo(300, 0)` runs
- **THEN** `window.scrollX` SHALL stay **0** and `scrollWidth === clientWidth` on the shell
- **AND** the shell's `overflow: hidden` SHALL clip the sun when the 16 s drift pushes it past the bottom edge,
  rather than growing the document.

### Requirement: The header bar

The template SHALL render one transparent bar above the hero holding a wordmark, four nav links and a menu button
that only appears below 861.

#### Scenario: Bar composition at 1440

- **GIVEN** the bar at 1440
- **WHEN** its children are measured
- **THEN** the inner row SHALL be **1320 × 82.8** at (60, 0) with `padding: 24px 48px` and `gap: 24`, no border and
  no background of its own
- **AND** the wordmark SHALL be **158 × 31** at (108, 25.89) — 20 px/800, `letter-spacing: .02em`, `gap: 10`, and a
  **26 px** stroke-only mountain-path glyph in `currentColor`
- **AND** the nav SHALL be **348 × 34.8** at (984, 24) with `gap: 30` and four links of **37 / 78 / 87 / 56** px
- **AND** each link SHALL be **34.8** tall from `padding: 4px 0` plus a **2 px** transparent bottom border, at 16 px/
  500, with `transition: color .2s, border-color .2s`
- **AND** the menu button SHALL be `display: none` at 1440 (reserve **46 × 46** for its narrow form).

#### Scenario: Link and focus states

- **GIVEN** the bar with `aria-current="page"` on one link
- **WHEN** the links are read
- **THEN** the current link SHALL be ink with an **amber** 2 px underline, and a hovered link SHALL be ink with a
  `rgba(255,255,255,.5)` underline
- **AND** the **declared** resting colour of every link is soft `#dfe3f1`, which the reference **never paints** —
  see delta 7
- **AND** every focusable control SHALL take `outline: 3px solid #ffb86b` at `outline-offset: 3px` (**9.42 : 1** on
  the washed sky).

#### Scenario: The bar without JavaScript

- **GIVEN** a viewport of 860 or narrower and no script
- **WHEN** the bar renders
- **THEN** the menu button SHALL stay hidden and the inner row plus the link list SHALL `flex-wrap`, so all four
  links remain reachable
- **AND** `.is-enhanced` SHALL be the only thing that turns the nav into a dropdown, i.e. the dropdown is
  **progressive**, never the default state.

### Requirement: The mobile menu

The template SHALL replace the nav with a dropdown panel below 861, opened and closed by a labelled button.

#### Scenario: Panel geometry

- **GIVEN** a viewport of 860 with the menu open
- **WHEN** the panel is measured
- **THEN** the inner row SHALL grow **82.8 → 94** tall (the 46 px button beats the 34.8 px link row) and the button
  SHALL sit at (779.61, 24), **46 × 46**, radius 50 %, `1 px rgba(255,255,255,.35)`, `rgba(15,20,38,.35)` wash
- **AND** the panel SHALL hang from the bar's **padding box** — top edge **y 94** — spanning
  `left: gutter` to `right: gutter` (**791.22** wide at 860), `padding: 10px 18px`, radius **20**,
  `rgba(15,20,38,.96)`, `box-shadow: 0 24px 48px -16px rgba(0,0,0,.6)`, and **252.75** tall
- **AND** each link SHALL be **58.44** tall at **19 px** with `padding: 14px 0` and a
  `1px rgba(255,255,255,.1)` divider — the last one dropping its border, hence **57.44** — and at 320 the panel
  SHALL be **288** wide with **252** wide links.

#### Scenario: The open/close contract

- **GIVEN** the script has run
- **WHEN** the button is pressed
- **THEN** the bar SHALL gain `.is-open`, `aria-expanded` SHALL read `"true"`, the label SHALL swap to
  `"Close menu"` and the glyph from the two-line mark to the X
- **AND** the menu SHALL close on a nav link click, on `Escape` (**focus returns to the button**), on a click
  anywhere outside the bar, and when `matchMedia('(min-width: 861px)')` starts matching
- **AND** it SHALL never trap focus and never lock the page scroll.

### Requirement: The kicker, headline and sub-paragraph

The template SHALL open the hero with a live-dot kicker, one two-line display `h1` and a capped sub-paragraph, all
left-aligned in one 720 px column.

#### Scenario: The kicker

- **GIVEN** the hero at 1440
- **WHEN** the kicker is measured
- **THEN** it SHALL be **317.2 × 21.69** at (108, 248.17) — `display: inline-flex`, `gap: 10`, **14 px/700**,
  `letter-spacing: 2.24px`, `text-transform: uppercase`, amber, painted at **9.94 : 1**
- **AND** its `::before` dot SHALL be **8 × 8**, radius 50 %, `#ff5d5d`, `box-shadow: 0 0 0 4px rgba(255,93,93,.25)`,
  and SHALL be decorative
- **AND** because the kicker is inline-level it SHALL sit **2.15 px below** the hero's padding edge inside the
  parent's 24.8 px strut, and the `h1`'s 18 px top margin SHALL count from the strut's bottom (270.82) — a flex
  port that blockifies the kicker loses those 2 px and SHALL record it as a delta
- **AND** it SHALL wrap to **2 lines** at 349 and below (43.38 tall).

#### Scenario: The two-line headline

- **GIVEN** the hero at 1440
- **WHEN** the `h1` is measured
- **THEN** it SHALL be **720 × 188.47** at (108, 288.81) — **99.2 px / 94.24**, weight **800**,
  `letter-spacing: -3.968px`, `margin: 18px 0 20px`, `text-wrap: balance`, `text-shadow: 0 2px 30px
  rgba(10,13,28,.35)`
- **AND** it SHALL be **2 lines** measuring **538.39** and **652.45**, and the second line SHALL be the longer one
- **AND** its size SHALL follow `clamp(2.8rem, 1.3rem + 5.6vw, 6.2rem)`: **44.8** at 320, **49.92** at 520, **71.2**
  at 900, **97.184** at 1364 and **99.2** from vw **1400** up.

#### Scenario: The line-count ladder

- **GIVEN** the headline from 300 to 1920
- **WHEN** the viewport is swept in 1 px steps
- **THEN** it SHALL be **3 lines** at **322 and below** (measuring 171 / 154 / 201 at 300, and 170.67 / 153.67 /
  200.88 at 320) and **2 lines** from **323** up
- **AND** it SHALL never return to 3 lines above 323, and never drop to 1 line at all.
- **AND** the seam SHALL be asserted by line count, never by height alone.

#### Scenario: The sub-paragraph

- **GIVEN** the hero at 1440
- **WHEN** the paragraph is measured
- **THEN** it SHALL be **652.8 × 89.25** at (108, 497.28) — **19.2 px / 29.76**, soft `#dfe3f1`, capped at
  `max-width: 34em` (34 × 19.2)
- **AND** it SHALL run **3 lines** measuring **650 / 646 / 234** at 1440, and its size SHALL follow
  `clamp(1.02rem, .98rem + .3vw, 1.2rem)` — **19.2** from vw **736** up
- **AND** it SHALL run **6 lines** at ≤325, **5** at 326–381, **4** at 382–503 and **3** from **504** up.

### Requirement: The action row

The template SHALL pair a pulsing play disc with an outlined shop pill in one row that wraps of its own accord below
574 and stacks by rule at 520.

#### Scenario: Shapes at 1440

- **GIVEN** the action row at 1440
- **WHEN** both controls are measured
- **THEN** the row SHALL be **720 × 76** at (108, 622.53) with `gap: 18px 28px` and `margin-top: 36`
- **AND** the play control SHALL be **240 × 76** — a **76 × 76** white disc at x 108, `gap: 16`, `padding-right: 24`,
  no border and no fill — carrying a 22 px night glyph offset **3 px** right, and a **124 × 40** two-line label
  ("Watch the film" at 18 px/700 over the duration at 14 px/500 soft) at (200, 640.53)
- **AND** the shop pill SHALL be **260 × 54.8** at (376, 633.13) — `padding: 14px 24px`, radius **999**, a **1 px**
  `rgba(255,255,255,.45)` border (declared `1.5px`; it lays out as 1 px and the height proves it: 24.8 + 28 + 2),
  `rgba(15,20,38,.25)` wash, 16 px/600, vertically centred in the 76 px row.

#### Scenario: The pulse and the hovers

- **GIVEN** motion is allowed
- **WHEN** the play control renders
- **THEN** two concentric rings SHALL expand from the disc — `2 px rgba(255,255,255,.6)`, radius 50 %,
  `scale(1.7)` to `opacity: 0` over **2.4 s ease-out infinite**, the second delayed **1.2 s**, the first undelayed
- **AND** hovering the control SHALL scale the disc to **1.06** over `.25s`, and hovering the pill SHALL invert it to
  `#fff` fill, `#fff` border and a `#0f1426` label over `.2s`
- **AND** the disc's `::after` ring is the only element on the page whose rect moves every frame — freeze animations
  before measuring it.

#### Scenario: The wrap and the stack

- **GIVEN** the row between 521 and 574
- **WHEN** it is measured
- **THEN** at **573** it SHALL be **148.8** tall — the pill wrapping under the play control of its own accord
  (240 + 28 + 260 = 528 exceeds the 524.4 the hero offers) — and at **574** it SHALL return to a single **76** px row
- **AND** at **520 and below** the rule `flex: 1 1 100%` SHALL force the pill full width and centred, the disc SHALL
  shrink **76 → 64**, and the row SHALL be **136.8** tall
- **AND** at 320 the pill SHALL be **288** wide, i.e. the hero's content width.

### Requirement: The chapter strip

The template SHALL close the hero with a hairline-ruled list of three numbered chapters.

#### Scenario: At 1440

- **GIVEN** the strip at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **1224 × 78.25** at (108, 754.53) — the full `main` content width, **not** the hero's 720 —
  with `border-top: 1px rgba(255,255,255,.22)` and `padding: 22px 0 32px`
- **AND** it SHALL be a flex row `gap: 12px 40px` at 15 px soft, its three items **169 / 185 / 120** wide at x
  **108 / 317 / 542**, each `align-items: baseline` with a **13 px/700** amber number `gap: 10` from its label
- **AND** the numbers SHALL be `tabular-nums`-free but stay on one line, and each `li` SHALL be **23.25** tall.

#### Scenario: The wrap ladder

- **GIVEN** the strip from 320 to 1440
- **WHEN** the viewport narrows
- **THEN** it SHALL be **141** tall as a **three-row column** at **520 and below** (`flex-direction: column`,
  `gap: 8`, every item full width)
- **AND** it SHALL be **113.5** tall as **two rows** from **521 to 602**, and **78.25** as **one row** from **603**
  up (554 px of items plus 80 px of gaps needs a 634 px row)
- **AND** at 320 the items SHALL read one per line, all **288** wide.

### Requirement: The film dialog

The template SHALL open one native `<dialog>` from the play control, with a fake player inside, and close it without
losing the user's place.

#### Scenario: Shape at 1440

- **GIVEN** the dialog is open at 1440 × 900
- **WHEN** it is measured
- **THEN** it SHALL be **960 × 610** at (240, 145) — `min(960px, calc(100% - 32px))`, `max-height: calc(100% -
  32px)`, radius **20**, `#0b0f1f`, `overflow: hidden`, `box-shadow: 0 40px 100px -20px rgba(0,0,0,.7)`, and it SHALL
  be vertically centred by the browser
- **AND** the backdrop SHALL be `rgba(6,8,18,.82)` with `backdrop-filter: blur(6px)`
- **AND** the head SHALL be **70** tall (`padding: 14px 14px 14px 22px`, a **42 × 42** circular close button washed
  `rgba(255,255,255,.1)`) with the film title at 17 px/700 and a second `h2` in the document
- **AND** the screen SHALL be **960 × 540** (16 : 9) painted `radial-gradient(circle at 70% 70%,
  rgba(255,184,107,.45), transparent 45%)` over `linear-gradient(160deg, #1d2550, #5a3470 55%, #c0607a)`, carrying
  a dashed **999**-radius "Video placeholder" chip and one explanatory line
- **AND** the fake control bar SHALL be **928 × 48** at (256, 693) — `inset: 0 16px 14px`, radius 12,
  `rgba(6,8,18,.6)`, a 28 px white disc, a **4 px** track `rgba(255,255,255,.3)` with the amber fill at **28 %**, and
  a 13 px `tabular-nums` time — **entirely `aria-hidden`** (it is a picture of a player, not a player).

#### Scenario: The open/close contract

- **GIVEN** the page at rest
- **WHEN** the play control is pressed
- **THEN** `showModal()` SHALL open the dialog and the shell SHALL gain `.is-paused`, which sets
  `animation-play-state: paused` on **every** scene layer
- **AND** focus SHALL move to the close button, and a **`Escape`** key, the close button, or a click outside the
  dialog's rect SHALL close it (a backdrop click targets the dialog element itself, so the handler SHALL re-test the
  point against `getBoundingClientRect`)
- **AND** on close `.is-paused` SHALL be removed, the scene SHALL resume, and focus SHALL return to the play control
- **AND** the document SHALL keep its height and scroll position through the whole cycle.

#### Scenario: The dialog on a phone

- **GIVEN** a viewport of 390 × 844
- **WHEN** the dialog opens
- **THEN** it SHALL be **352 × 334** at (19, 283) and the head SHALL be **70** tall
- **AND** the screen SHALL switch to **4 : 3** (**352 × 264**) with `padding: 16px 16px 56px`, the control bar
  SHALL tighten to `inset: 0 8px 8px` at **40** tall, and the note SHALL drop to 13 px
- **AND** at 320 it SHALL be **282** wide with a **282 × 211.5** screen and no internal scroll
  (`scrollHeight === clientHeight`).

### Requirement: The responsive ladder

The template SHALL reshape at **860** and **520** only, and it SHALL reproduce the reference's content-height floor
at the measured widths.

#### Scenario: The two breakpoints

- **GIVEN** the reference's media queries
- **WHEN** the viewport crosses each
- **THEN** at **860** the menu button SHALL appear, the nav SHALL become the dropdown, the bar SHALL grow
  **82.8 → 94**, the grain wash SHALL flip from a 90° to a **180°** gradient (`.55 / .6 / .2`), and the sun SHALL
  move to `left: 45%`, `bottom: 14%`, **50 vmin**
- **AND** at **520** the play disc SHALL shrink to **64**, the pill SHALL go full width, the chapter strip SHALL
  become a column, the dialog's screen SHALL become 4 : 3 and its control bar SHALL tighten
- **AND** no other width SHALL change the composition — the rest of the ladder is fluid type and wrapping.

#### Scenario: Content heights to assert

- **GIVEN** a 400 px viewport height (so `min-height: 100vh` cannot mask the floor)
- **WHEN** the document is measured
- **THEN** it SHALL be **843** at 300–322, **801** at 323–325, **775** at 326–349, **757** at 350–381, **732** at
  382–503, **716** at 504–520, **704** at 521–573, **642** at 574–602, **612** at 603–639, **620** at 640, **635** at
  700, **652** at 768, **675** at 860, **664** at 861, **689** at 960, **705** at 1024, **753** at 1280, **766** at
  1440–1920
- **AND** at a **900** px viewport height every one of those widths SHALL render a document of exactly **900**, i.e.
  the reference does not scroll at 900 anywhere from 300 to 1920
- **AND** at **1440 × 600** it SHALL be **766** and scroll 166 — the floor, not the media queries, is what a short
  window sees; the port SHALL NOT "fix" this by shrinking the hero.

### Requirement: Motion and its off switch

The template SHALL run the scene's animations and stop all of them under `prefers-reduced-motion`.

#### Scenario: Eight animations, one switch

- **GIVEN** motion is allowed
- **WHEN** the page renders
- **THEN** the running animations SHALL be exactly: `sky` (16 s), `twinkle` (4 s), `sun` (16 s), `pan` (120 s),
  `pan-mid` (70 s), `pan-near` (40 s), `ripple` (2.4 s × 2 rings), all `infinite`, plus `pop` (`.3 s`) on the dialog
  as it opens
- **AND** under `prefers-reduced-motion: reduce` the stylesheet's single reset SHALL force `animation: none` and
  `transition: none` with `!important` on the shell's subtree **and** on the dialog and its subtree, leaving a
  static page whose content height is unchanged.

### Requirement: The Component Dock footer

The template SHALL carry a footer that names and links Component Dock, because the reference has no footer at all.

#### Scenario: A slim branded strip

- **GIVEN** the reference ends at the chapter strip with no `<footer>`
- **WHEN** the port renders
- **THEN** it SHALL add one slim footer inside the shell, below the chapter strip, built from the same tokens
  (13 px soft text, no new colour, no new radius) containing a single link to `https://www.componentdock.com/`
  labelled **"Component Dock"**
- **AND** the footer SHALL NOT contain the word ColorLib, and SHALL NOT sit on its own background band
- **AND** the document SHALL grow only by the footer's own height (≈ 40–56 px), recorded as a delta against the
  ladder above — the page's "exactly 900 at 900" property is lost by that amount and that is accepted.

## Adapting to the repo (deltas — read before writing code)

1. **Name and identity.** `apps/alpenglow`, package `@free-react-templates/alpenglow`, `public/CNAME` =
   `alpenglow.free.componentdock.com`, `"homepage"` = `https://alpenglow.free.componentdock.com`. The brand, the
   film and its route are invented anew: the source's "Northbound", "Made for the long way round", its
   Svolvær/Kabelvåg/Reinebringen chapter names and its entire sub-paragraph SHALL NOT appear anywhere in `apps/`.
2. **Copy shape, not copy.** Keep the *kind* of text: a kicker shaped `"<brand> film · <n> min <n> s"`, a two-part
   display headline that wraps at exactly two lines in a 720 px column, a three-line sub that names a place, a
   distance and a month, a play label over its duration, a shop line, and three numbered chapters whose numbers are
   `01/02/03`. Pick a route, a team size and a duration of your own.
3. **Fonts:** load **only** Figtree, variable, from Google Fonts:
   `https://fonts.googleapis.com/css2?family=Figtree:wght@400..800&display=swap` (**HTTP 200**, verified — one
   variable face over two subsets, exactly the reference's two binaries). Request **400–800** and no more: the
   reference declares no 300 and no 900, and both clamp to the nearest declared end. No second face, no mono.
4. **Icons:** the six inline SVGs become `lucide-react` — `Mountain`/`Waves` (26, the wordmark), `Menu` and `X` (22,
   the two menu states), `X` (20, the dialog close), `Play` (22, the disc — lucide's `Play` is already filled-shape
   friendly, use `fill="currentColor"`), `Play` (14, the fake control bar). Keep them `aria-hidden` except where the
   spec gives a label.
5. **Anchors:** the reference has **six dead `#`** and the port SHALL leave none. Give the shell `id="top"` and the
   chapter strip `id="chapters"`; then the wordmark → `#top`; "Films" → `#top`; "Collection" and "Journal" →
   `https://www.componentdock.com/`; "Expeditions" → `#chapters`; the shop pill → `https://www.componentdock.com/`
   with `target="_blank" rel="noreferrer noopener"`. The play control stays a `<button>` (it opens the dialog).
6. **A11y baseline to preserve, not rebuild:** one `h1` (the film title inside the dialog is the page's only `h2`),
   a labelled `<nav aria-label="Main">`, a real `<button>` for the menu with `aria-expanded` + `aria-controls`,
   `aria-current="page"` on one link, the play button carrying `aria-haspopup="dialog"` + `aria-controls`, the
   dialog labelled by its own heading, `aria-hidden` on the scene and the fake control bar, and the `3 px` amber
   focus ring at `3 px` offset on every focusable control (**9.42 : 1**). No contrast pair needs repair on this page.
7. **The specificity artefact is a bug to fix, not to copy.** `.cl-hero11 a { color: inherit }` is **0,1,1** and
   beats `.cl-hero11__link`'s declared `#dfe3f1` (**0,1,0**), so **all four resting nav links render ink `#fff`** —
   measured on a **non-current** link (Collection), because the `aria-current` one is ink legitimately at 0,2,0 and
   makes the bug look like intent. In React set the colour on the element (`text-soft` on a resting link) so the
   intended hierarchy paints; either choice passes contrast (**10.71** vs **15.50**). The hover and current rules
   are both 0,2,0, so they already win.
8. **Do not measure the animated layers.** The sun's rect drifts with its 16 s `translateY(12%)` and the three
   ranges' `background-position` changes every frame; `.is-paused` (open dialog) or an injected
   `animation-play-state: paused` is the only way to get repeatable numbers. Assert `offsetWidth`/`offsetHeight` for
   the sun (**306** at vh 900, **50vmin** below 861), never `getBoundingClientRect()` mid-animation.
9. **Tokens live in `@theme`** (Tailwind 4): `--color-night #0f1426`, `--color-ink #fff`,
   `--color-soft #dfe3f1`, `--color-amber #ffb86b`, `--color-live #ff5d5d`, `--color-hairline
   rgb(255 255 255 / .22)`, `--color-sky-1 #1a2150` … `--color-sky-5 #ffd48e`, `--color-range-far #6d3f78`,
   `--color-range-mid #392d5c`, `--color-range-near #161b33`, `--color-dialog #0b0f1f`,
   `--gutter clamp(16px,4vw,48px)`. Use them through classes; no raw hex in components.
10. **The mountains are data URIs, not images.** Each range is
    `background-image: url("data:image/svg+xml,…<path … fill='%236d3f78'/>")` with
    `preserveAspectRatio='none'`, `background-repeat: repeat-x`, `background-size: <1200|1000|800>px 100%` and a
    `linear` pan. Keep them inline (percent-encoding included) — three `<svg>` files in `public/` would be three more
    requests for the same pixels, and `background-size` is what makes the ridges stretch to the band's height.
11. **`main { justify-content: center }` is load-bearing.** It centres the **hero + chapter strip group**
    (682.77 at 1440), not the hero: that is why the hero's top is **150.02** and not `82.8 + 96`. Change the hero's
    height and the whole column moves; the `48`/`96` paddings only shape the box.
12. **`padding: 22px 0 32px !important` on the chapter strip** is in the reference because its own `ul` reset would
    otherwise win. In Tailwind, put `pt-[22px] pb-8` on the `ul` and drop the `!important` — but keep the numbers,
    the 78.25 px strip is a real 78.25.
13. **No new dependencies:** one face, six icons, no carousel, no chart, no video library (the "player" is markup).
    **No `package-lock.json` hand-editing** — add the workspace with `npm install` at the root.

## Verification checklist

- [ ] `apps/alpenglow` exists, package `@free-react-templates/alpenglow`, `public/CNAME` =
      `alpenglow.free.componentdock.com`, `"homepage"` = `https://alpenglow.free.componentdock.com`
- [ ] `npm run verify:app alpenglow` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-alpenglow --type spec` is valid
- [ ] no source string survives: `grep -riE 'northbound|long way round|Svolv|Kabelv|Reinebringen|last ferry|
      140 km' apps/alpenglow` → 0 hits
- [ ] measured at 1440 × 900 (motion paused): shell **1440 × 900**; bar inner **1320 × 82.8** at (60, 0) with
      `padding: 24 48`; wordmark **158 × 31**; nav **348 × 34.8** at (984, 24) with links **37 / 78 / 87 / 56** at h
      **34.8**; main **1320 × 817.2**; hero **720 × 604.52** at (108, 150.02); kicker **317.2 × 21.69** at (108,
      248.17); `h1` **720 × 188.47** at (108, 288.81) in **2 lines** (538.39 / 652.45) at **99.2 / 94.24**;
      sub **652.8 × 89.25** (3 lines, 650 / 646 / 234); actions **720 × 76** with disc **76**, label **124 × 40**,
      pill **260 × 54.8** at (376, 633.13); chapters **1224 × 78.25** at (108, 754.53) with items **169 / 185 / 120**
- [ ] content floor **843** at 320, **775** at 326, **732** at 390, **716** at 520, **704** at 521, **642** at 574,
      **612** at 603, **766** at 1440; and **document exactly 900 at a 900 viewport for 320, 390, 521, 768, 860, 861,
      960, 1280, 1440 and 1920**
- [ ] headline **3 lines** at ≤322 and **2** from 323; sub **6 / 5 / 4 / 3** lines at 320 / 326 / 382 / 504
- [ ] chapter strip **3 rows** at ≤520, **2 rows** at 521–602, **1 row** from 603; action row wraps at 521–573 and
      returns to one row at 574
- [ ] at **520** the disc is **64**, the pill is full width and the strip is a column; at **860** the bar is **94**
      and the panel hangs from y **94** at **252.75** tall
- [ ] dialog **960 × 610** at 1440 with a **960 × 540** 16 : 9 screen, **928 × 48** control bar, radius **20**;
      at 390 **352 × 334** with a 4 : 3 screen; closes on Esc / close / backdrop; focus returns to the play control
- [ ] `.is-paused` pauses all seven scene animations while the dialog is open and releases them on close
- [ ] `prefers-reduced-motion: reduce` → `animation-name: none`, all transitions `0s`, heights unchanged
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at 320, 360, 390, 520, 768, 1024, 1440 and 1920
- [ ] every anchor resolves (no `href="#"`), the footer links `https://www.componentdock.com/`, and no app file
      mentions ColorLib
