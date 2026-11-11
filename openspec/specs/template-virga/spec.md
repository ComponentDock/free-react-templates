# Template: Virga (Hero — a dark edge-hosting hero: a radially masked line grid under one breathing glow, a centred two-line headline with a gradient tail, a white CTA beside a command chip, and a four-cell stats band carrying a twelve-bar uptime strip)

## Purpose

**One full-height software hero** — the tenth variant of the `hero` snippet family. Nine earlier variants sold a
designer's portfolio, conference tickets, a restaurant, a newsletter and two physical products; this one sells an
**edge-hosting platform**, and it is the family's first **developer-tooling** page. A `100vh`-floored flex column
holds a **glass header bar** (gradient-triangle wordmark, four nav links, a muted "Sign in" and an ink-filled
"Deploy now") and a **single centred hero section**: an **announcement pill** with a gradient version tag, a
**two-line display headline whose second line is a gradient-clipped block `span`**, a three-line sub-paragraph, an
**action row** (a white-gradient CTA beside a monospace command chip that reads like a terminal line), and a
**four-cell `dl` stats band** — the second cell carrying a **twelve-bar uptime strip** instead of a hint line.

The page is **dark-only**. The ground is `#07090f`; a **56 px line grid** at `rgba(255,255,255,.1)` sits behind
everything under a **radial mask** (`ellipse 70% 60% at 50% 30%`, opaque to 20 %, gone by 75 %), and one **900 × 520
glow disc** — sky `#7dd3fc` at 35 % alpha fading into violet `#a78bfa` at 18 % — hangs **260 px above the top edge**,
blurred 20 px, breathing on an 8 s loop and **clipped by the shell's `overflow: hidden`**. The palette is six tokens
wide (`#07090f` ground, `#f4f6fb` ink, `#9aa3b8` muted, `rgba(255,255,255,.1)` hairline, `#7dd3fc` sky, `#a78bfa`
violet) plus three semantic accents that never appear as tokens: the green `#86efac` hint text, the `#4ade80` bar
fill, and the `#facc15` "dip" bar. Radii are three values and no more: **999** (announcement pill and its tag),
**10** (menu button, CTA, command chip) and **20** (the stats band); nav links and the header buttons take **8**.

The document is **916 px at 1440 × 900** — 16 px taller than the viewport — because a `min-height: 100vh` floor plus
content that outgrows it. It lands on exactly **900** only in the middle of the ladder, and the height curve is
**non-monotonic in both directions**: the 861–960 band is *taller* than 1440 (942 at 960, when the stats band drops
to two columns) while the 328–338 band is *shorter* than 320 (933 against 994). This is the variant's central
measurement trap: **never infer the height ladder from the viewport width.**

- **Source slug:** `hero-10`
- **ColorLib page:** https://colorlib.com/wp/template/hero-10/ — **HTTP 200, 113,861 B**, `<title>`
  `Hero V10 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V10"**, `datePublished`
  **2026-09-25T15:09:12+00:00**, meta description _\\"A dark, centred hero for a cloud hosting platform, set on a faint
  line grid that fades out with a radial mask under… Free download, no jQuery or plugins.\\"_, and the claim _\\"the
  download is 188 KB\\"_ (measured **192,281 B = 187.8 KiB** ✓).
  **The design name the naming audit reads is ColorLib \\"Hero V10\\".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-10/ — **HTTP 200, 4,423 B**,
  `<title>` `Hero V10 | Colorlib`, `lang=\\"en\\"`, **one** stylesheet (`css/style.css?v=e974452a`,
  `fetchpriority=\\"high\\"`) and **one** author `<script>` (`js/snippet.js?v=d02f9cca`, 1,363 B — the mobile menu).
  The slug-only path `theme/hero-10/` is **404 (9 B)** and `theme/bb/hero-10/` is **404 (9 B)**: the `bootstrap/`
  prefix is the only live path, as for every card, alert and hero variant before it. `index.html` under the same
  directory is **byte-identical to the directory URL** (4,423 B, `cmp` clean) — a no-op link, never a 404.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-10.jpg — **HTTP 200, 37,674 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name. It is a **macOS browser mock-up** (traffic-light chrome,
  a `preview.colorlib.com` URL pill, a drop shadow on a near-white ground) with the page inside at ≈ **1112 px**.
  Do not adopt the frame, the rounded window corners or the shadow.
- **Design category:** Hero (**B2B developer-tooling / edge-hosting hero — masked grid, breathing glow, gradient
  headline tail, terminal-style secondary action and a metrics band**; variant 10 of the **12**-variant `hero`
  family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/virga`, package
  `@free-react-templates/virga`, CNAME `virga.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1888 | items with NO spec on main: 0`. So this design comes from
`docs/catalog-coverage.md`, which lists **214 snippet variants in 19 families** that ColorLib's own listing carries
and the checklist never recorded. `hero-10` is **variant 10 of 12** in the `hero` family, worked in variant order:
1 → proscenium (shipped), 2 → afterglow (shipped), 3 → presswork (shipped), 4 → tendril, 5 → epistle, 6 → overtone
(shipped), 7 → soapbox (shipped), 8 → trattoria (prepped), 9 → belvedere (prepped), and this prep is **variant 10**.

## Bootstrap Heroes (12)

`## Bootstrap Heroes (12)` opens at **line 830** of `TEMPLATES.md`, between `## Bootstrap Footers (20)` and
`## Bootstrap Modals (20)`. On main `7dc401444` the section holds **eight** rows — Hero 01 → proscenium, Hero 02 →
afterglow, Hero 03 → presswork, Hero 04 → tendril, Hero 05 → epistle, Hero 06 → overtone, Hero 07 → soapbox,
Hero 08 → trattoria. **Hero 09 (belvedere) has no row yet** — its prep is unbuilt — so `TEMPLATES.md` lags the prep
queue by two. The row grammar in this section is `[colorlib] · ![preview] · [app]`, preview in the middle:

```markdown
- [ ] **Hero 10** — [colorlib](https://colorlib.com/wp/template/hero-10/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-10.jpg) · [virga](https://virga.free.componentdock.com)
```

Insert it **after** whichever hero rows exist at that moment (after Hero 08 today, after Hero 09 once it lands),
keep that grammar, and **re-read the surrounding lines immediately before pushing** — the implementer streams rewrite
this file and the section grew a row mid-run twice (Hero 07 during the belvedere prep, Hero 08 during this one).

**The name.** `virga` — one lowercase word for precipitation that evaporates before it reaches the ground: a cloud
word for a cloud platform, and the streak of a falling column is what the masked grid and the glow above the fold
look like. It keeps the snippet families' closed-single-word pattern (`nameplate`, `octavo`, `wafer`, `proscenium`,
`tendril`, `epistle`, `overtone`, `soapbox`, `trattoria`, `belvedere`), and it is not the source's invented name.
Verified free on main `8b0f15438`: `git grep -il virga origin/main` → **0 files**; no `apps/virga`; no
`openspec/specs/template-virga`; no `docs/templates/virga`; no `**Virga**` row in `TEMPLATES.md`; and all three
ColorLib URLs miss — `colorlib.com/wp/template/virga/` **404**, `preview.colorlib.com/theme/virga/` **404**,
`preview.colorlib.com/theme/bootstrap/virga/` **404**.

Checked and **free** for later variants of this family: **`brink`**, **`graupel`**, **`updraft`**, **`embrasure`**,
**`cornice`** (3 files) — each 0 apps and 404 on all three ColorLib URLs. **Taken, do not reuse:** `cirrus`
(26 files, an app), `isobar` (31 files, an app), `cusp` (10 files).

## Design tokens (read off `css/style.css`, 13,804 B, sha256 `a1a9d8a1beb6820a…`)

| Token | Value | Where it lands |
| --- | --- | --- |
| `--cl-hero10-bg` | `#07090f` | page ground, bar wash, tag text, CTA text, `<body>` |
| `--cl-hero10-ink` | `#f4f6fb` | headline, wordmark, numbers, "Deploy now" fill |
| `--cl-hero10-muted` | `#9aa3b8` | nav links, sub-paragraph, `dt`, command chip text |
| `--cl-hero10-line` | `rgba(255,255,255,.1)` | bar bottom border, pill border, chip border, stat grid lines, grid lines |
| `--cl-hero10-sky` | `#7dd3fc` | focus ring, headline tail gradient start-mid, glow core, tag gradient start |
| `--cl-hero10-violet` | `#a78bfa` | headline tail gradient end, glow fade, tag gradient end |
| `--cl-hero10-gutter` | `clamp(16px, 4vw, 40px)` | bar and hero inline padding (40 from vw 1000, 16 at 320) |
| panel fill | `linear-gradient(180deg, rgba(255,255,255,.043), rgba(255,255,255,.016))` | the stats band only |
| panel hairlines | `1px solid rgba(255,255,255,.1)` | band border + the three inter-cell rules |
| hint | `#86efac` | the "+38 % this year" / "318 edge locations" lines |
| bar fill | `#4ade80`, dip `#facc15` | eleven green bars and the tenth yellow one |
| pill text (declared) | `#c6ccda` — **but renders `#f4f6fb`**, see the specificity finding |
| mobile nav ground | `#0b0e17` | the open dropdown panel only |
| chip fill | `rgba(255,255,255,.03)` | the command chip |
| radii | **999** · **20** · **10** · **8** · **2** | pill + tag · stats band · menu btn / CTA / chip · nav link / header buttons · uptime bars |
| type | **Geist** 400/600/700, `system-ui` fallback; body **16 px / 1.55** | everything |
| mono | `ui-monospace, "SF Mono", Menlo, Consolas, monospace` at 14.5 px | the command chip only |

Contrast, computed from the tokens (all measured against `#07090f`, and against the band's effective top fill
`#121419`): ink **18.41 : 1**, muted **7.87** (**7.29** on the band), sub **7.87**, hint **13.12** on the band,
sky **11.94**, violet **7.31**, tag ink on the gradient **11.94** (sky end) to **7.31** (violet end), CTA ink on
`#dfe5f2` **15.76**, "Deploy now" ink on ink **18.41**. **This variant has no failing pair** — unlike its immediate
siblings — so the port has nothing to repair, only to preserve.

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium, `document.fonts.ready` + 700–900 ms)

- **Live CSS is the archive's un-versioned twin.** `css/style.css` live is **13,804 B**, sha256
  `a1a9d8a1beb6820ae0f834fff498f7eb521aaa5a05aa59d9180f44b645e2fc32`; the copy inside
  `downloads/free/hero-10.zip` is **byte-identical**, and so is `js/snippet.js` (**1,363 B**, sha256
  `403348cde047c60e…`) → **live preview verified; the archive is its un-versioned twin** for both files. The **HTML
  differs only in `<head>` + the two `?v=` query strings** (robots meta, a `cdnjs` dns-prefetch,
  `fetchpriority="high"` on the sheet); the body is identical.
- **Archive:** **192,281 B**, 16 entries, **8 `.woff2` files that are only 2 distinct binaries** — `geist-*-latin`
  **29,288 B** (one hash, four names) and `geist-*-latin-ext` **16,540 B** (one hash, four names) — i.e. **one
  variable binary per subset, copied under 400/500/600/700**. The sheet declares only **six** `@font-face`
  (**400, 600, 700** × two subsets), so the two **`500` files ship unused**: a request for weight 500 falls back to
  the **400 face**.
- **Variable, proved by A/B:** served locally with one `@font-face` declared `font-weight: 100 900`, the same
  binary's 40 px advance for `Ship to the edge 0123456789` reads **100 → 524, 300 → 537, 400 → 545, 500 → 557,
  600 → 566, 700 → 576, 800 → 586, 900 → 603**. Through the shipped sheet the same string measures **400 = 545,
  500 = 545, 600 = 566, 700 = 576, 800 = 576** — 500 is the 400 face and 800 clamps to 700. Do not infer weight from
  an advance width.
- **CSS census:** 13,804 B · **79 style rules** + **6 `@font-face`** + **1 `@keyframes`** (`cl-hero10-breathe`) +
  **4 `@media`** (`960`, `860`, `520`, `prefers-reduced-motion`) · **7** custom properties · **5** `transition`
  declarations · **2** `animation` declarations (the glow, and the reduced-motion reset) · **1** `box-shadow` (the
  CTA's double ring + bloom) · **9** gradients · **4** `!important` (the header button's and the CTA's forced ink
  label, plus the two in the reduced-motion reset) · **22** `revert` declarations in the `all: revert` host reset.
- **Class census:** **30** markup classes, **every one declared** — no phantom. Declared but never in markup:
  `.cl-icon` (**dead**, the same unused utility as in `fieldguide` and `belvedere`) and the two JavaScript states
  `.is-enhanced` / `.is-open`. There are **no** unstyled markup classes on this page.
- **Counts:** **1** `<h1>`, **0** `<h2>`, **0** `<img>`, **4** `<svg>` (logo 24, menu/X 20+20, chevron 14),
  **1** `<button>` (the menu), **9** `<a>`, **0** `<form>`, **0** `<input>`, **1** `<section>`, **0** `<footer>`.
- **Anchors: 9 total, all dead `#`** — wordmark, four nav links, "Sign in", "Deploy now", the announce pill and the
  CTA. There is no `mailto:`, no `tel:` and no external link anywhere on the page. `hero-10` has **no inner pages**:
  eight candidate names (`about`, `contact`, `pricing`, `docs`, `network`, `platform`, `careers`, `blog`) × two
  prefixes (`theme/bootstrap/hero-10/`, `theme/hero-10/`) are **all 404**.
- **JavaScript:** the whole behaviour is a 30-line `initMenu()` — it adds `.is-enhanced` to the bar on load, so the
  ≤860 dropdown is progressive (without JS the nav simply wraps), toggles `.is-open` + `aria-expanded` +
  `aria-label` (`Open menu` / `Close menu`), closes on a link click, on `Escape` (returning focus to the button) and
  on any outside `document` click, and closes when `matchMedia('(min-width: 861px)')` starts matching. **No
  IntersectionObserver, no scroll listener, no `requestAnimationFrame`.**

## Design at 1440 × 900 (measured, motion settled)

- Shell **1440 × 916**, `min-height: 100vh`, `overflow: hidden`, `isolation: isolate`, flex column.
- **Bar 1440 × 67.47** at y 0 — `rgba(7,9,15,.5)` with `backdrop-filter: blur(10px)` and a **1 px**
  `rgba(255,255,255,.1)` bottom rule; inner **1200 × 66.47** at x 120, `padding: 14px 40px`, `gap: 36`.
- **Wordmark 96.48 × 27.89** at (160, 19.28) — 18 px/600, `letter-spacing: -0.36px`, a 24 px gradient triangle.
- **Nav 987.52** wide, `flex: 1`, `space-between`; four links from x 292.48 at h **38.47**, `padding: 8px 12px`,
  radius **8** at 14.5 px, `gap: 4`; "Platform" measures **82** wide.
- **"Sign in" 68 × 38.47** at x 1088 (14.5 px, no fill) · **"Deploy now" 116 × 38.47** at x 1164 — ink `#f4f6fb`
  fill, `#07090f` label, radius **8**, `padding: 8px 16px`, 600.
- **Hero 1200 × 848.39** at (120, 67.47) — `padding: 104px 40px 72px`, `max-width: 1200`, centred text,
  `main { flex: 1; align-items: center }` above it.
- **Announce pill 255 × 33.38** at (592.5, 171.47) — radius **999**, `padding: 4px 12px 4px 4px`, `gap: 10`,
  14 px, border `rgba(255,255,255,.1)`, fill `rgba(255,255,255,.04)`; the **"4.0" tag is 41 × 23.38**
  (`padding: 2px 10px`, radius 999, 12.5 px/700, ink on a 90° sky→violet gradient).
- **`h1` 682.41 × 185.59** at (378.8, 230.84) — **92.8 px / 92.8**, weight 600, `letter-spacing: -4.64px`,
  `margin: 26px 0 20px`, `text-wrap: balance`, in **2 lines**; the second line is a **block `span` 682.41 × 92.8**
  at y 323.64 with `background: linear-gradient(90deg,#bae6fd,#7dd3fc 35%,#a78bfa)` +
  `background-clip: text` + `-webkit-text-fill-color: transparent`.
- **Sub 711.36 × 87** at (364.31, 436.44) — **18.72 px / 29.016**, muted, `max-width: 38em`, **3 lines**.
- **Actions 434.88 × 50** at (502.56, 557.44), `gap: 12`, `margin-top: 34`: **CTA 207 × 50** (radius 10,
  `padding: 0 24`, `min-height: 50`, 16 px/600, ink on `linear-gradient(180deg,#fff,#dfe5f2)`, shadow
  `0 0 0 1px rgba(255,255,255,.2), 0 10px 30px -10px rgba(125,211,252,.6)`) beside the **command chip
  215.88 × 50** (radius 10, `padding: 0 20`, border `rgba(255,255,255,.1)`, fill `rgba(255,255,255,.03)`, a muted
  `$` then an ink 14.5 px monospace command).
- **Stats band 1120 × 148.42** at (160, 695.44) — `margin-top: 88`, radius **20**, a 1 px hairline, the panel
  gradient, `grid-template-columns: repeat(4, minmax(0,1fr))` → **279.5** four times, and only a **left** border
  between cells. Cell **279.5 × 146.42**, `padding: 24px 26px`; `dt` 13.5 px muted; **number 43.2 px / 45.36**
  (`letter-spacing: -1.728px`, `font-variant-numeric: tabular-nums`) at y 747.36; hint 13 px `#86efac`.
- **Uptime strip 226.5 × 16** at (467.5, 800.72) in cell 2 — **12 bars**, `flex: 1`, `max-width: 10`, radius 2,
  `gap: 3`, eleven `#4ade80` and the **tenth** `#facc15`; the strip stops 73.5 px short of the cell's right edge,
  which is the look, not a bug.
- **Grid 1440 × 915.86** at 0,0 — `z-index: -2`, 56 × 56 px cells drawn as two 1 px `rgba(255,255,255,.1)`
  gradients, masked by `radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 75%)`.
- **Glow `offsetWidth` 900, `offsetHeight` 520**, `top: -260px`, centred, radius 50 %, `filter: blur(20px)`,
  `radial-gradient(closest-side, rgba(125,211,252,.35), rgba(167,139,250,.18) 55%, transparent)`,
  `animation: cl-hero10-breathe 8s ease-in-out infinite`. Its **bounding rect is phase-dependent** (see finding 2).

## Height ladder (measured, `document.scrollingElement.scrollHeight` at height 900)

`994` at **320** · `974` at **324** · `933` at **328–338** · **`900` from 340 to ~860** · `909` at **860** ·
`906` at **861–863** · `907` at 864–866 · `920` at **900** · `940–942` at **956–960** · **`900` from 961 to
1202** · `903` at 1278 · `904` at **1280–1363** · **`916` from 1364 up** (1364, 1440, 1600, 1920 all 916).
Two inversions to keep in mind: **the 2-column stats band (≤960) makes the page taller than 1440** (942 against
916), and the **520 step makes the band 37 px shorter** (268.97 → 231.75) while the cells get wider.

## Requirements

### Requirement: The page shell and its background field

The template SHALL render exactly one full-height dark shell, whose ground, line grid and glow are decorative
layers behind the content and clip to the shell.

#### Scenario: Ground, grid and glow at 1440

- **GIVEN** the shell at 1440 × 900
- **WHEN** the decorative layers are measured
- **THEN** the shell SHALL be **1440 × 916** with `background: #07090f`, `min-height: 100vh`,
  `overflow: hidden` and `isolation: isolate`
- **AND** the grid layer SHALL be a full-bleed absolutely positioned `div` at **1440 × 915.86**, `z-index: -2`,
  painting two 1 px `rgba(255,255,255,.1)` line families on a **56 × 56** tile, masked by
  `radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 75%)` so the lines fade out toward the edges
- **AND** the glow SHALL be **900 × 520** (`offsetWidth`/`offsetHeight`), `top: -260px`, centred,
  radius 50 %, `blur(20px)`, painted from `rgba(125,211,252,.35)` through `rgba(167,139,250,.18)` at 55 % to
  transparent, and **clipped by the shell** — its top 260 px are never visible
- **AND** neither layer SHALL take pointer events or appear in the accessibility tree.

#### Scenario: The background survives the narrow ladder

- **GIVEN** a viewport of 860 or narrower
- **WHEN** the glow is measured
- **THEN** it SHALL be **520** wide (`offsetWidth`) with `top: -200px`, per the 860 media query
- **AND** at **320** the shell SHALL still report `scrollWidth === clientWidth` and `scrollX = 0` after
  `window.scrollTo(300, 0)` — the reference does **not** overflow horizontally at any measured width from 320 to 1920.

### Requirement: The header bar

The template SHALL render a single glass bar holding a wordmark, four nav links, a quiet sign-in link and one
ink-filled primary button, above the hero and outside its centring.

#### Scenario: Bar composition at 1440

- **GIVEN** the bar at 1440
- **WHEN** its children are measured
- **THEN** the bar SHALL be **1440 × 67.47** with a `1 px` `rgba(255,255,255,.1)` bottom border,
  `background: rgba(7,9,15,.5)` and `backdrop-filter: blur(10px)`
- **AND** its inner row SHALL be **1200 × 66.47** at x **120** with `padding: 14px 40px` and `gap: 36px`
- **AND** the wordmark SHALL be **96.48 × 27.89** at (160, 19.28), 18 px/600, `letter-spacing: -0.36px`, with a
  **24 px** two-stop (`#7dd3fc` → `#a78bfa`) triangle mark before the label
- **AND** the four links SHALL sit from x **292.48** at height **38.47** with `padding: 8px 12px`, radius **8**,
  14.5 px and `gap: 4`, inside a **987.52** wide `flex: 1` nav that is `space-between`
- **AND** "Sign in" SHALL be **68 × 38.47** at x **1088** with no fill, and "Deploy now" **116 × 38.47** at
  x **1164** with an ink `#f4f6fb` fill, a `#07090f` label, radius 8 and `padding: 8px 16px`

#### Scenario: Hover states

- **GIVEN** a pointer over the bar
- **WHEN** each control is hovered
- **THEN** a nav link SHALL take `rgba(255,255,255,.06)` behind it and ink for its label over `.2s`
- **AND** "Sign in" SHALL climb from muted to ink over `.2s`
- **AND** "Deploy now" SHALL brighten its fill to pure `#fff` over `.2s`
- **AND** the current-page link SHALL be ink at all times (`aria-current="page"` on "Platform").

#### Scenario: The dropdown below 861

- **GIVEN** a viewport of **860** or narrower and the script has run
- **WHEN** the menu button is pressed
- **THEN** the bar SHALL carry `.is-enhanced.is-open`, `aria-expanded="true"`, `aria-label="Close menu"`, the
  button glyph SHALL swap from the three-line mark to the X, and the nav SHALL switch from `display: none` to
  `display: flex` as an absolutely positioned panel
- **AND** the panel SHALL hang from the bar's **padding box**, i.e. its top edge is **y 70** on a **71**-tall bar
  (the 1 px bottom border is outside the containing block) and at 390 it SHALL be **390 × 306.84** over
  `#0b0e17` with `padding: 12px {gutter} 20px`
- **AND** its links SHALL be **50.34** tall at 17 px with `padding: 12px 8px`, and its two end buttons SHALL split
  the row as **176 × 48.47** (bordered sign-in) and **174 × 46.47** (unbordered deploy) — a **2 px** difference that
  comes from the sign-in's 1 px border, and it is correct
- **AND** the panel SHALL close on a link click, on `Escape` (with focus returned to the button), on a click outside
  the bar, and on `matchMedia('(min-width: 861px)')` starting to match
- **AND** with the panel closed the document at 860 SHALL be **909** — the 71 px bar against 67.47 above it.

### Requirement: The announcement pill

The template SHALL open the hero with one pill that pairs a gradient version tag with a sentence and a chevron.

#### Scenario: Shape and copy at 1440

- **GIVEN** the hero at 1440
- **WHEN** the pill is measured
- **THEN** it SHALL be **255 × 33.38** at (592.5, 171.47), radius **999**, `padding: 4px 12px 4px 4px`, `gap: 10`,
  14 px, a `1 px rgba(255,255,255,.1)` border and a `rgba(255,255,255,.04)` fill
- **AND** its tag SHALL be **41 × 23.38** (`padding: 2px 10px`, radius 999, 12.5 px/700, ink on
  `linear-gradient(90deg,#7dd3fc,#a78bfa)`) and its sentence SHALL sit on one line with a **14 px** chevron
- **AND** hover SHALL recolour only the border, to `rgba(125,211,252,.5)`, over `.2s`
- **AND** the pill SHALL keep a single **255** px width from 320 to 1920 (it is inline-flex and never wraps).

### Requirement: The headline and the sub-paragraph

The template SHALL centre one `h1` whose second line is a gradient-clipped block, followed by a capped
sub-paragraph.

#### Scenario: The headline's two lines

- **GIVEN** the hero at 1440
- **WHEN** the `h1` is measured
- **THEN** it SHALL be **682.41 × 185.59** at (378.8, 230.84) in **2 lines** at **92.8 px / 92.8**,
  weight 600, `letter-spacing: -4.64px`, `margin: 26px 0 20px` and `text-wrap: balance`
- **AND** the second line SHALL be a **block** `span` **682.41 × 92.8** at y **323.64**, painted
  `linear-gradient(90deg,#bae6fd,#7dd3fc 35%,#a78bfa)` with `background-clip: text` and a transparent fill colour,
  so the two words of the tail run sky-to-violet left to right
- **AND** the `span` SHALL be announced as part of the same heading, not as a separate landmark or list item
- **AND** the font size SHALL follow `clamp(2.6rem, 1.2rem + 5.4vw, 5.8rem)`: **41.6** at 320, **71.04** at 960,
  **92.8** from vw **1364** up.

#### Scenario: The line-count ladder is not monotonic-safe

- **GIVEN** the headline across the narrow end of the ladder
- **WHEN** the viewport is swept in 1–2 px steps
- **THEN** it SHALL be **4 lines** at ≤326, **3 lines** at 328–338 and **2 lines** from **340** up
- **AND** it SHALL stay **2 lines** from 340 to 1920 (the reference never goes to 3 or 4 again), and at 320 the four
  lines SHALL measure **127.5 / 160.4 / 108.5 / 191.4** wide — the tail alone wrapping to two
- **AND** the seam SHALL be asserted by line count, never by height alone.

#### Scenario: The sub-paragraph

- **GIVEN** the hero at 1440
- **WHEN** the paragraph is measured
- **THEN** it SHALL be **711.36 × 87** at (364.31, 436.44), **3 lines** at **18.72 px / 29.016**, muted `#9aa3b8`,
  capped at `max-width: 38em` (38 × 18.72 = 711.36)
- **AND** its size SHALL follow `clamp(1rem, .96rem + .3vw, 1.17rem)` — **18.72** from vw **1110** up
- **AND** it SHALL run **3 lines** from **521** to 1440, **4 lines** at **390–480** and **5 lines** at **320–368**.

### Requirement: The action row

The template SHALL pair one filled CTA with one monospace command chip in a single centred row that stacks below
521.

#### Scenario: Shapes at 1440

- **GIVEN** the action row at 1440
- **WHEN** both controls are measured
- **THEN** the row SHALL be **434.88 × 50** at (502.56, 557.44) with `gap: 12` and `margin-top: 34`
- **AND** the CTA SHALL be **207 × 50**, radius **10**, `padding: 0 24`, `min-height: 50`, 16 px/600, ink on
  `linear-gradient(180deg,#fff,#dfe5f2)`, with `box-shadow: 0 0 0 1px rgba(255,255,255,.2), 0 10px 30px -10px
  rgba(125,211,252,.6)`
- **AND** the chip SHALL be **215.88 × 50**, radius 10, `padding: 0 20`, a `1 px rgba(255,255,255,.1)` border,
  `rgba(255,255,255,.03)` fill, a muted `$` and an **ink** 14.5 px `ui-monospace` command
- **AND** hover SHALL lift the CTA **-2 px** over `.2s` and leave the chip static.

#### Scenario: The stack at 520

- **GIVEN** a viewport of **520**
- **WHEN** the row is measured
- **THEN** it SHALL be **full width (478.41 in the 520 hero) × 112** — two **50** px rows **12** apart —
  with each child at `flex: 1 1 100%` and its content centred
- **AND** at **521** the row SHALL return to **50** tall and **434.88** wide
- **AND** at 320 each child SHALL be **288 × 50**, i.e. the hero's content width.

### Requirement: The stats band

The template SHALL close the hero with one bordered four-cell `dl` whose second cell replaces a hint line with a
twelve-bar uptime strip.

#### Scenario: The band at 1440

- **GIVEN** the band at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **1120 × 148.42** at (160, 695.44), `margin-top: 88`, radius **20**, a `1 px
  rgba(255,255,255,.1)` border and `linear-gradient(180deg, rgba(255,255,255,.043), rgba(255,255,255,.016))`
- **AND** it SHALL be a **4 × 279.5** grid of cells **279.5 × 146.42** with `padding: 24px 26px` and a **left**
  border only between cells (no top, no right, no outer doubling)
- **AND** each cell SHALL carry a 13.5 px muted `dt` over a **43.2 px / 45.36** `dd` number with
  `letter-spacing: -1.728px` and `font-variant-numeric: tabular-nums`, plus one 13 px `#86efac` hint line —
  except cell 2, which carries the strip
- **AND** the strip SHALL be **226.5 × 16** at (467.5, 800.72): **12** `flex: 1` bars, `max-width: 10`, radius 2,
  `gap: 3`, eleven `#4ade80` and the **tenth** `#facc15`, `aria-hidden="true"`.

#### Scenario: Two columns below 961

- **GIVEN** a viewport of **960** or narrower
- **WHEN** the band is measured
- **THEN** it SHALL be `repeat(2, minmax(0,1fr))` with **395.06** cells at 861 and **440.61** at 960, and it SHALL
  drop the left border from cell 3 while adding a **top** border to cells 3 and 4
- **AND** the band SHALL be **282.38** tall at 960 against **141.7** at 961 — the page **grows 42 px** as the
  viewport shrinks by one pixel (**942 → 900**)
- **AND** at 960 the four cells SHALL read as two rows of two, in source order, with the strip still in cell 2.

#### Scenario: The 520 step and the 320 floor

- **GIVEN** a viewport of **520** or **320**
- **WHEN** the band is measured
- **THEN** at **520** the cells SHALL tighten to `padding: 18px 16px`, `dt` to **12.5 px** and the number to
  **1.6rem (25.6)**, so the band **shrinks** to **231.75** while the cells widen to **238.2**
- **AND** the strip SHALL shrink its bars to fit — **6.41** each at 320 inside a **110** px strip — keeping
  `max-width: 10` as a ceiling only
- **AND** at 320 each cell SHALL be **143** wide, `dt` "Uptime, last 12 months" SHALL wrap to **2 lines**, and the
  band SHALL be **269.13** tall.

### Requirement: The responsive ladder

The template SHALL reshape at **960**, **860** and **520** only, and it SHALL reproduce the reference's height
curve at the measured widths.

#### Scenario: The three breakpoints

- **GIVEN** the reference's media queries
- **WHEN** the viewport crosses each
- **THEN** at **960** the stats band alone SHALL change (4 → 2 columns), taking the document **942 → 900**
- **AND** at **860** the bar SHALL grow **67.47 → 71**, the menu button SHALL appear (`display: none` → `grid`,
  **42 × 42**, radius 10, `1 px` border, `rgba(255,255,255,.04)` fill), the nav SHALL become the dropdown and the
  glow SHALL shrink to **520** wide, taking the document **906 → 909**
- **AND** at **520** the action row SHALL stack and the band SHALL tighten, taking it **268.97 → 231.75**
- **AND** no other width SHALL change the composition.

#### Scenario: Document heights to assert

- **GIVEN** a height of 900
- **WHEN** the document is measured at the ladder
- **THEN** it SHALL be **994** at 320, **974** at 324, **933** at 328–338, **900** from **340 to 860** except the
  menu-bar bump (**909** at 860), **906** at 861, **920** at 900, **942** at 960, **900** at 961–1202, **904** at
  1280–1363 and **916** at 1364, 1440, 1600 and 1920
- **AND** the port SHALL NOT "smooth" either inversion: the 861–960 hump and the 916 floor above 1364 are the design.

### Requirement: Motion and its off switch

The template SHALL run one decorative animation and stop it under `prefers-reduced-motion`.

#### Scenario: The breathing glow

- **GIVEN** motion is allowed
- **WHEN** the page renders
- **THEN** the glow SHALL animate `cl-hero10-breathe` **8s ease-in-out infinite**, whose only keyframe is 50 %:
  `opacity: .7` plus `scale(1.08)`
- **AND** hover transitions SHALL be `.2s` on colour / background / transform, with no JavaScript animation, no
  scroll listener and no `IntersectionObserver`
- **AND** under `prefers-reduced-motion: reduce` the glow's `animation-name` SHALL compute to **`none`** and every
  transition duration to **`0s`** (`!important`), leaving a static page whose document height is unchanged.

### Requirement: The Component Dock footer

The template SHALL carry a footer that names and links Component Dock, because the reference has no footer at all.

#### Scenario: A slim branded strip

- **GIVEN** the reference ends at the stats band with no `<footer>`
- **WHEN** the port renders
- **THEN** it SHALL add one slim footer inside the shell, below the hero, styled from the same tokens (13 px muted
  text over the same ground, a `1 px rgba(255,255,255,.1)` top rule at most) containing a single link to
  `https://www.componentdock.com/` labelled **"Component Dock"**
- **AND** the footer SHALL NOT introduce a new colour, font or radius, and SHALL NOT contain the word ColorLib
- **AND** the document height SHALL grow only by the footer's own height (≈ 40–56 px), recorded as a delta against
  the ladder above.

## Adapting to the repo (deltas — read before writing code)

1. **Name and identity.** `apps/virga`, package `@free-react-templates/virga`, `public/CNAME` =
   `virga.free.componentdock.com`, `"homepage"` = `https://virga.free.componentdock.com`. The product, its wordmark
   and its copy are invented anew: **Virga** the platform, a command that reads `npx virga deploy`, and fresh
   numbers — the source's "Stratus", `npx stratus deploy`, "318 cities", "2.4M", "99.995%", "118 countries",
   "27 ms" and its entire sub-paragraph SHALL NOT appear anywhere in `apps/`.
2. **Copy shape, not copy.** Keep the _kind_ of text: a version pill sentence, a two-part headline whose second
   part is the gradient block, a three-line sub, a CTA and one terminal line. Numbers must stay plausible and
   keep tabular alignment (four-cell band, one strip).
3. **Fonts:** load **only** Geist, variable, from Google Fonts:
   `https://fonts.googleapis.com/css2?family=Geist:wght@400..700&display=swap` (**HTTP 200**, verified). The
   reference ships **one variable binary** and this URL is its closest published twin; request **400–700** and no
   more — 800 does not exist in the reference's declared faces and would be synthesised. The chip's mono is the
   **system stack** (`ui-monospace, Menlo, Consolas`), not a second webfont.
4. **Icons:** four inline SVGs become `lucide-react` — `Triangle` (24, logo), `Menu` and `X` (20 each, the two menu
   states), `ChevronRight` (14, the pill). Keep them `aria-hidden`; the menu button keeps its `aria-label`.
5. **Anchors:** the reference has **nine dead `#`** and the port SHALL leave none. Give the shell `id="top"` and the
   stats band `id="network"`; then wordmark, "Platform" and "Sign in" → `#top`; "Network" → `#network`;
   "Docs" and "Pricing" → `https://www.componentdock.com/`; the pill → `#network`; "Deploy now" and the CTA →
   `https://www.componentdock.com/` with `target="_blank" rel="noreferrer noopener"`. Every external link gets a
   readable label; nothing scrolls nowhere.
6. **A11y baseline to preserve, not rebuild:** one `h1`, a labelled `<nav aria-label="Main">`, a real `<button>` for
   the menu with `aria-expanded` + `aria-controls`, `aria-current="page"` on one link, `aria-hidden` on the grid,
   the glow and the strip, and a `2 px` `#7dd3fc` focus ring at `3 px` offset on every focusable element
   (**11.94 : 1** on the ground). No contrast pair needs repair on this page.
7. **The specificity artefact is a bug to fix, not to copy.** In the reference, `a { color: inherit }` (0,1,1) beats
   `.cl-hero10__link`, `.cl-hero10__signin` and `.cl-hero10__announce` (0,1,0), so the muted nav, the muted
   sign-in and the pill's `#c6ccda` sentence all **render ink `#f4f6fb`** — measured, not inferred. In React set
   the colour on the element (`text-muted` on the link) so the intended hierarchy actually paints; if the port
   wants the reference's uniform ink, say so in the PR. Either choice passes contrast (**7.87** vs **18.41**).
8. **Do not measure the glow's rect.** `offsetWidth` is **900** (520 below 861); `getBoundingClientRect()` returned
   **910.61 → 950.46** across samples because the 8 s breathe scales it to 1.0118–1.08. Assert the offset box, or
   freeze the animation before measuring.
9. **Tokens live in `@theme`** (Tailwind 4): `--color-ground #07090f`, `--color-ink #f4f6fb`, `--color-muted
   #9aa3b8`, `--color-line rgba(255,255,255,.1)`, `--color-sky #7dd3fc`, `--color-violet #a78bfa`,
   `--color-hint #86efac`, `--color-bar #4ade80`, `--color-dip #facc15`, `--color-panel-top rgba(255,255,255,.043)`,
   `--color-panel-bot rgba(255,255,255,.016)`, `--gutter clamp(16px,4vw,40px)`. Use them through classes; no raw hex
   in components.
10. **The grid is two gradients, not an image:**
    `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px,
    transparent 1px)` on a `56px 56px` tile, masked with `radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%,
    transparent 75%)`. Keep the `-webkit-mask-image` twin for Safari.
11. **`main { flex: 1; align-items: center }`** is inert at 1440 (the hero fills `main`) and only matters in the
    bands where the hero is shorter than the viewport (560: hero **747.3** at y **111.84**; 780: **818.91** at
    **81.09**). Keep it, or drop it and re-check 340–860.
12. **No new dependencies:** one face, four icons, no carousel, no chart. **No `package-lock.json` hand-editing** —
    add the workspace with `npm install` at the root.

## Verification checklist

- [ ] `apps/virga` exists, package `@free-react-templates/virga`, `public/CNAME` =
      `virga.free.componentdock.com`, `"homepage"` = `https://virga.free.componentdock.com`
- [ ] `npm run verify:app virga` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-virga --type spec` is valid
- [ ] no source string survives: `grep -riE 'stratus|318 cities|99\.995|2\.4M|npx stratus' apps/virga` → 0 hits
- [ ] measured at 1440 × 900 (motion settled): shell **1440 × 916**; bar **1440 × 67.47** (inner **1200 × 66.47** at
      x 120); wordmark **96.48 × 27.89**; nav links h **38.47** from x **292.48**, "Platform" **82**; "Sign in"
      **68 × 38.47** at x 1088; "Deploy now" **116 × 38.47** at x 1164; hero **1200 × 848.39** at (120, 67.47);
      pill **255 × 33.38** at (592.5, 171.47) with tag **41 × 23.38**; `h1` **682.41 × 185.59** at (378.8, 230.84) in
      **2 lines** at **92.8 / 92.8**, `ls -4.64`; tail **682.41 × 92.8** at y 323.64; sub **711.36 × 87** (3 lines,
      **18.72 / 29.016**); actions **434.88 × 50** with CTA **207** and chip **215.88**; band **1120 × 148.42** at
      (160, 695.44) with cells **279.5 × 146.42**, numbers **43.2 / 45.36**; strip **226.5 × 16** at (467.5, 800.72)
      with **12** bars **10** wide, `gap: 3`, tenth `#facc15`
- [ ] document height **994** at 320, **974** at 324, **933** at 328–338, **900** at 340–859, **909** at 860,
      **906** at 861, **920** at 900, **942** at 960, **900** at 961–1202, **904** at 1280, **916** at 1364–1920
- [ ] headline **4 lines** at ≤326, **3** at 328–338, **2** at ≥340; sub **5 / 4 / 3** lines at 320 / 390 / 521
- [ ] band is **4 columns from 961**, **2 columns at ≤960** with the top border on cells 3–4 and no left border on
      cell 3; band height **282.38** at 960 vs **141.7** at 961
- [ ] at **520** the action row is **112** tall with both children full width, and the band drops to **231.75** with
      `18px 16px` cells, 12.5 px `dt` and 25.6 px numbers
- [ ] menu at **860**: bar **71**, button **42 × 42**, panel at y **70**, `aria-expanded` toggling, X/Menu swap,
      close on link / `Escape` (focus returns to the button) / outside click / 861 resize; without JS the nav wraps
- [ ] `prefers-reduced-motion: reduce` → `animation-name: none`, all transitions `0s`, height unchanged
- [ ] glow asserted as **900 × 520** (`offsetWidth`/`offsetHeight`) at 1440 and **520** wide at ≤860, never by rect
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at 320, 360, 390, 520, 768, 1024, 1440 and 1920
- [ ] every anchor resolves (no `href="#"`), the footer links `https://www.componentdock.com/`, and no app file
      mentions ColorLib
