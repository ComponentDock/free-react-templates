# Template: Limelight (Pricing table — a dark neon three-plan card grid on a `#08060f` grid-lined ground with pink and cyan radial washes: a centred pill eyebrow carrying a live green dot, a 60 px headline whose last word glows cyan, and three 20-radius glass cards whose middle one carries a pink→violet→cyan gradient border, a "Creator favourite" flag and a gradient CTA — icon tile, dashed price rule, sparkle bullets, no imagery, no form, and **no JavaScript at all**)

## Purpose

**One screen, three plans, nothing else** — the **fourth variant of the `pricing-table` snippet family** (12 variants) and
the family's first **dark** member: where `ratecard`, `tallyboard` and `parity` are light card grids and tables on white
or cool grey, this one is a **night-mode landing page** — `#08060f` ground, a 44 px violet hairline grid, two large
radial washes (pink at the top-left, cyan at the right), and three translucent cards stacked on top of it.

The whole page is **80 lines of HTML, one 10,976 B stylesheet, and zero script tags**. There is no `<script>` in the
archive, no `js/` directory, no form, no input, no image (the three plan icons are inline `<svg>`), no keyframes, and no
behaviour beyond **two CSS transitions** (card lift + border fade, CTA background fade). The `aria-labelledby` wiring is
already correct; the only interactive elements are **three anchor CTAs**, all of them `href="#"`.

- **Source slug:** `pricing-table-04`
- **ColorLib page:** https://colorlib.com/wp/template/pricing-table-04/ — **HTTP 200, 114,247 B**, `<title>`
  `Pricing Table V04 - Free Bootstrap Pricing Tables 2026 - Colorlib`, `h1` **"Pricing Table V04"**, `datePublished`
  **2026-09-25T15:12:45+00:00**, meta description _\"A plan comparison built as a real table with a caption, column and
  row headers, and headers attributes on every cell. Free download, no jQuery or plugins.\\"_, download-size claim
  **169 KB** (measured archive **172,961 B = 168.9 KiB** ✓). **The design name the naming audit reads is ColorLib
  "Pricing Table V04".** The description is copy-pasted from variant 03 and is **wrong for this page** — there is no
  `<table>`, no `<caption>`, no `headers` attribute. Do not carry it into the spec's prose.
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/pricing-table-04/ — **HTTP 200,
  4,686 B**. The slug-only path `theme/pricing-table-04/` is **404 (9 B)**; the `bootstrap/` prefix is the only live
  path, exactly as for every `card`, `alert`, `hero` and `pricing-table` variant before it. One stylesheet:
  `css/style.css?v=ed8c81c2`, **10,976 B**, sha256
  `0990c056e4e37cf44fdb0585fced837f2dab0b059b6779e3ee9ce26f51148da6`. **No script** — the ten `<script>` elements a
  browser sees are injected by the preview host (GTM `G-…`, Cloudflare Zaraz, the insights beacon); they are not in the
  document.
- **Archive (verified twin):** `downloads/free/pricing-table-04.zip`, **172,961 B**. Its `css/style.css` hashes
  **identically** to the live copy → *live preview verified; the archive is its un-versioned twin*. Its `index.html`
  (**4,494 B**, sha256 `637ee3700777…`) differs from the live DOM (**4,686 B**, sha256 `f794bd794fb1…`) by **192 B** of
  `<head>` only: the live copy adds a `noindex` robots meta, a `cdnjs.cloud` `dns-prefetch`, `fetchpriority="high"` and
  the `?v=` query on the stylesheet. `diff` of the two files shows **no** `<body>` change.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-04.jpg — **HTTP 200, 47,683 B,
  1200 × 972**, and it is **AVIF behind a `.jpg` extension** (`file` → `ISO Media, AVIF`; `PIL` opens it and needs
  `.convert('RGB')` before you can look at it). Convert before viewing. `…-template.jpg`, `…-free-template.jpg` and
  `…-featured.jpg` are all **404**. The shot is a **macOS browser mock-up** (traffic lights, a `preview.colorlib.com`
  URL pill, a rounded window with a drop shadow on a grey surround) at ≈ **0.79** of 1440; inside it you can see the
  full page — head, all three cards and the foot note — because this design is only **1082 px** tall. Do **not** adopt
  the window frame, the rounded window corners or the mock-up's shadow.
- **Design category:** Pricing table (**consumer-app / creator-tool pricing — three cards: *Rookie* free, *Streamer*
  $9 (featured, gradient border + flag + gradient CTA), *Legend* $24; neon-on-black, no imagery, no toggle, no
  monthly/annual switch**; variant **4 of 12** in the `pricing-table` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/limelight`, package
  `@free-react-templates/limelight`, CNAME `limelight.free.componentdock.com`.

**Name:** `limelight` — one lowercase word, kebab-free, **0 hits** across the repo (`git grep -il limelight origin/main`
→ nothing), no `apps/limelight`, no `openspec/specs/template-limelight`, and no bold name in `TEMPLATES.md` uses it.
It is the stage-light word for a creator-streaming product, so it reads as a name rather than as a description of the
component.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-11-11)

`TEMPLATES.md` is fully `[x]` — **2,922** `[x]` rows, **0** `- [ ]` and **0** `[~]` — and
`python3 ~/.hermes/skills/automation/componentdock-prep-stream/scripts/find-next-unprepped.py` reports
`open items: 0 | prepped slugs on origin/main: 1898 | items with NO spec on main: 0` (main `d09980172`, **3,335**
spec folders before this one). So this design comes from `docs/catalog-coverage.md`, which lists **214 snippet
variants in 19 families** that ColorLib's own listing carries and the checklist never recorded. The `pricing-table`
family is **family 4** in that document's order; its first three variants are prepped (`ratecard` `6211c30be` — **and
shipped while this prep ran**, PR #1941, bookkeeping `d09980172` — `tallyboard` `d7c78c0c0`, `parity` `5c1674c68`) and
**this is the fourth**. `grep -c pricing-table TEMPLATES.md` is **1** line (the ratecard row) — the section only
appeared with that shipment.

Family census (probed 2026-11-11 under `theme/bootstrap/`): **01 4,254 B · 02 5,085 B · 03 25,337 B · 04 4,686 B ·
06 4,550 B · 12 6,683 B** — all **HTTP 200**. This variant belongs to the **small-card-grid** branch of the family
(01/02/04/06/12), not the table branch (03). It is **not** a reskin of `ratecard` or `tallyboard`: those are light
grounds with a plan header row and a billing switch; this one is dark, has **no** switch, **no** comparison rows, and
its featured device is a **gradient border + flag + gradient CTA**, not a fill or an offset ring. Read each variant's DOM
from scratch.

## Where the row goes once this ships (the prep must not add it)

`TEMPLATES.md` now **has** the section: `## Bootstrap Pricing Tables (12)` exists at line **891**, opened by
`ratecard`'s shipment, with one row in it (**Pricing Table 01**, `ratecard`). `## Bootstrap Wizards (30)` moved to line
**895**. The bookkeeping commit should **append this row after the Pricing Table 01 row** (variant order — do **not**
create a second section), in the family's own row grammar (source · preview · app):

```
- [x] **Pricing Table 04** — [colorlib](https://colorlib.com/wp/template/pricing-table-04/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-04.jpg) · [limelight](https://limelight.free.componentdock.com)
```

If `tallyboard` or `parity` ships first it will have added its own row above this one; re-read `TEMPLATES.md` **after**
the final `git pull --rebase` — a sibling's bookkeeping moved these line numbers in each of the last five prep runs
(`ratecard`'s merge landed mid-prep here and moved Wizards 891 → 895).

## Design tokens (read off `style.css`, 10,976 B, sha256 `0990c056…`)

Five custom properties live on **one class**, `.cl-pricing04`, not on `:root`:

| Token | Value | Where it lands |
| --- | --- | --- |
| `--cl-pricing04-pink` | `#f472b6` | Streamer icon, the featured card's gradient start, the flag's gradient start, the featured sparkle bullets, the featured amount's glow, the featured card's big shadow |
| `--cl-pricing04-cyan` | `#22d3ee` | Rookie icon, the glowing word in the `h1`, the plain sparkle bullets, the ghost CTA's focus ring, the featured card's outer glow, the glow CTA's gradient end |
| `--cl-pricing04-violet` | `#a78bfa` | Legend icon, every translucency on the page (borders, rules, washes, CTA border), the featured gradient's middle stop |
| `--cl-pricing04-ink` | `#f5f3ff` | `h1`, plan names, amounts, CTA label on the ghost buttons |
| `--cl-pricing04-muted` | `#b9b3d1` | lede, every plan description, `/ month`, every bullet label, the foot note |
| ground | `#08060f` | `body` background — the only page ground |
| card top / bottom | `rgba(30,22,52,.9)` → `rgba(18,14,32,.95)` | the two plain cards' `linear-gradient(180deg, …)` |
| featured top / bottom | `#221538` → `#140f24` | the featured card's `padding-box` layer |
| featured border | `#f472b6` → `#a78bfa` 50% → `#22d3ee` | the featured card's `border-box` layer, `135deg` |
| flag ink | `#1a0b1f` | "CREATOR FAVOURITE" text on the pink→`#c084fc` flag |
| glow CTA ink | `#16091f` | "Go Streamer" text on the `#f9a8d4 → #c4b5fd 55% → #67e8f9` gradient |
| glow CTA hover | `#fbcfe8` → `#ddd6fe` 55% → `#a5f3fc` | the same button on hover (a full stop lighter) |
| live dot | `#4ade80` | the 8 px eyebrow dot + its `0 0 10px` halo |
| eyebrow text | `#ddd6fe` | the pill's label on `rgba(167,139,250,.08)` |
| card hover border | `rgba(167,139,250,.45)` | every card's hover border (the featured one stays `transparent`) |

Radii: **20** (cards), **12** (icon tiles, both CTA shapes), **6** (the flag), **999** (the eyebrow pill), **50%** (the
dot). Borders: 1 px only — `rgba(167,139,250,.2)` on a plain card, `transparent` on the featured card (its visible
border is the gradient `border-box` layer), `rgba(167,139,250,.45)` on the ghost CTAs, `rgba(167,139,250,.35)` on the
pill, and one **dashed** 1 px `rgba(167,139,250,.25)` under the price row. **Seven** `box-shadow` declarations and
**two** `text-shadow`s: the dot's halo, the three icon rings (pink's also carries `0 0 24px -4px rgba(244,114,182,.6)`),
the featured card's **three-layer** shadow `0 0 0 1px rgba(244,114,182,.15), 0 30px 80px -30px rgba(244,114,182,.6),
0 0 60px -20px rgba(34,211,238,.4)`, the glow CTA's `0 10px 30px -10px rgba(244,114,182,.8)` (hover:
`0 12px 36px -8px rgba(34,211,238,.7)`), the `h1` glow word's `0 0 24px rgba(34,211,238,.55)` and the featured amount's
`0 0 28px rgba(244,114,182,.6)`.

**The ground is five background layers** on `.cl-pricing04-demo`, in this order: `radial-gradient(38% 30% at 18% 8%,
rgba(236,72,153,.22), transparent 70%)` → `radial-gradient(34% 30% at 85% 20%, rgba(34,211,238,.18), transparent 70%)`
→ a 1 px horizontal violet hairline `rgba(148,115,255,.07)` on a **44 px** tile → the same in `90deg` → `#08060f`.
Reproduce all five; a flat `#08060f` loses the neon bloom that the whole design is sold on.

Font: **Space Grotesk**, `system-ui` fallback, weights **400 / 500 / 700**. The archive ships **8 woff2 files that are
2 binaries**: `space-grotesk-*-latin.woff2` **22,320 B** sha256 `a0d054c4af55…` and `…-latin-ext.woff2` **18,924 B**
sha256 `054c266fbb44…`, each repeated **four** times — 400, 500, **600** and 700 — so the cut is **variable** (a DOM
probe proves it: at 60 px `Streamer` inks **2,962 / 3,746 / 4,469** pixels at 400 / 500 / 700). The stylesheet declares
only **six** faces (400, 500, 700 × latin/latin-ext); **the 600 file is shipped but never declared**, so `font-semibold`
would fall back to 500 or synthesise. `CSS.getPlatformFontsForNode` reports the custom face as
`SpaceGrotesk-Light` / `custom=true` — the binary's own PostScript name is *Light* even though it is the variable default,
which is a red herring, not a weight bug.

Type scale as shipped: **60 / 61.2** (`h1`, `clamp(34px,5.6vw,60px)`, `-0.03em`, `1.02`, 700) · **50 / 50** (amount,
`-0.04em`, 700) · **22 / 34.1** (plan name, 700) · **16.5 / 25.575** (lede, `text-wrap: balance`) · **15 / 23.25**
(section base, CTA label at 700, `/ month`) · **14.5 / 22.475** (plan description, every bullet) · **14 / 21.7**
(foot note) · **13 / 20.15** (eyebrow, 500) · **12 / 18.6** (flag, 700, `uppercase`, `0.02em`).

## Reference readings (2026-11-11, `curl -4` + node Playwright Chromium at 1440 × 900, `document.fonts.ready`)

The archive twin was served over `python3 -m http.server` next to a Google-font copy of the same markup (product
renamed), and **the archive copy reproduces the live page on every single rect** — document, head, grid, all three
cards, the flag, the foot — to the hundredth. Every number in this spec is therefore the reference's own.

| Reading | Reference (= archive twin) | Google Space Grotesk |
| --- | --- | --- |
| document height at 1440 × 900 | **1082** | 1082 |
| demo wrapper | **1440 × 1081.77**, `padding: 104px 16px` | identical |
| section | **1120 × 873.77** at (160, 104) | identical |
| head | **640 × 178.45** at (400, 104) | identical |
| eyebrow pill | **196 × 34.14** at (622, 104) | identical box |
| `h1` | **640 × 61.19** at (400, 156.14), one line | 1 line, glow x **814.8** vs **813.3** |
| lede | **640 × 51.13** (2 lines) at (400, 231.33) | identical |
| grid | **1120 × 577.63** at (160, 338.45) | identical |
| cards | **358.66 / 358.67 / 358.66 × 577.63** at x **160 / 540.66 / 921.33** | identical |
| Rookie price row | y **518.02** (1-line description) | y **540.48** — **the description wraps**, see below |
| Streamer / Legend price row | y **540.48** | y 540.48 |
| amounts | **94 / 58 / 86** wide | **96 / 57 / 85** |
| flag | **145.09 × 26.59** at (729.23, 367.45) | **140.09 × 26.59** at x 734.23 |
| CTA bottoms | all **887.08** | identical |
| scroll range at 900 tall | **182** (1082 − 900) | 182 |

**Google-vs-archive drift runs in both directions on the same page** (canvas `measureText`, `Space Grotesk`, in the
built pages at 1440):

| String | size / weight | archive | Google | Δ |
| --- | --- | ---: | ---: | ---: |
| `Everything you need for your first streams.` | 14.5 / 400 | **300.00** | **307.00** | **+2.33 %** |
| `For growing channels that stream every week.` | 14.5 / 400 | 321 | 330 | **+2.80 %** |
| `For full-time creators and small esports teams.` | 14.5 / 400 | 328 | 333 | +1.52 % |
| `4K streaming to unlimited platforms` | 14.5 / 400 | 251 | 256 | **+1.99 %** |
| `720p streaming to one platform` | 14.5 / 400 | 224 | 225 | +0.45 % |
| `Level up your stream` | 60 / 700 | 607 | 606 | −0.16 % |
| `Download free` | 15 / 700 | 110 | 107 | **−2.73 %** |
| `CREATOR FAVOURITE` | 12 / 700 (+0.24 tracking) | 125.08 | 120.08 | **−4.00 %** |
| `Glitchcast for creators` | 13 / 500 | 150 | 146 | −2.67 % |
| `Cancel any time. Students get …` | 14 / 400 | 552 | 543 | −1.63 % |
| `/ month` | 15 / 400 | 58 | 57 | −1.72 % |

**The tightest fit on the page is 0.66 px, and Google's face breaks it.** The Rookie description is **300.00 px of text
in a 300.66 px content box** at 1440 — with the served (Google) face it measures **307** and wraps to two lines, which
pushes that card's price row **+22.47 px** (518.02 → 540.48) and re-aligns it with its neighbours by accident. The port
must not rely on the reference's copy: pick a description that fits with room to spare, e.g.
`Everything you need to start streaming.` (**286 px**, 14.66 px slack) or `All you need for your first streams.`
(**247 px**). Assert the *row heights*, never the copy widths.

## Design at 1440 × 900 (measured, reference = port)

```
demo  1440 × 1081.77 @ (0,0)   padding 104 16   five background layers
└ section 1120 × 873.77 @ (160,104)   font 15 / 23.25, ink #f5f3ff
  ├ head 640 × 178.45 @ (400,104)   margin: 0 auto 56, text-align center
  │ ├ eyebrow 196 × 34.14 @ (622,104)   13/500, pad 6 14, radius 999, border 1px rgba(167,139,250,.35)
  │ │ └ dot 8 × 8 @ (637,117.06)   #4ade80 + 0 0 10px halo
  │ ├ h1 640 × 61.19 @ (400,156.14)   60/700, -1.8px, lh 61.2, margin 18 0 14
  │ │ └ glow span 192.2 × 77 @ (813.3,148.14)   inline box, NOT the 61.2 line box
  │ └ lede 640 × 51.13 @ (400,231.33)   16.5/25.575, #b9b3d1, text-wrap: balance, 2 lines
  ├ grid 1120 × 577.63 @ (160,338.45)   cols 358.656 / 358.672 / 358.656, gap 22, stretch
  │ ├ card 1 Rookie  358.66 × 577.63 @ (160,338.45)
  │ ├ card 2 Streamer 358.67 × 577.63 @ (540.66,338.45)   featured
  │ └ card 3 Legend  358.66 × 577.63 @ (921.33,338.45)
  │   every card: padding 30 28 28, radius 20, 1px border, flex column
  │   ├ icon 46 × 46 @ y 369.45 (x 189 / 569.66 / 950.33), radius 12, svg 24 × 24 at +11
  │   ├ name 300.66 × 34.09 @ y 435.45   margin 20 0 4, 22/700
  │   ├ desc @ y 473.55:  card 1 **22.47** (1 line), cards 2–3 **44.94** (2 lines)
  │   ├ price 73 tall: card 1 @ 518.02, cards 2–3 @ 540.48   margin 22 0, pad-bottom 22, dashed bottom
  │   │ └ amount 50/700, lh 50, ls -2   ("Free" 94, "$9" 58, "$24" 86); `/ month` only on cards 2–3 @ y 565.48
  │   ├ list @ 613.02 / 635.48, heights **194.81 / 174.34 / 172.34**   flex:1, margin 0 0 28
  │   │ └ li 34.47 each (pad 6 0 6 28, 14.5/22.475), 4-point sparkle ::before 12 × 12 at top 12 / left 2
  │   └ cta 300.66 × **51.25** (bordered) / 300.67 × **49.25** (filled) @ y 835.83 / 837.83 — all bottoms 887.08
  │     flag (featured only) 145.09 × 26.59 @ (729.23,367.45) — top 28 / right 24 against the PADDING box
  └ foot 1120 × 21.69 @ (160,956.08)   margin 40 0 0, 14/21.7, #b9b3d1, centered, 1 line
```

Structure census of the reference: **1** `<main>`, **1** `<section>`, **1** `<header>`, **1** `<h1>`, **3** `<h2>`,
**3** `<article>` (each `aria-labelledby` its `h2`), **3** `<ul>` with **4 + 5 + 5 = 14** `<li>`, **3** `<a>`
(“Download free”, “Go Streamer”, “Go Legend” — all `href="#"`), **3** inline `<svg>` (24 × 24, `stroke-width: 1.8`,
`currentColor`), **0** `<img>`, `<form>`, `<input>`, `<button>`, `<script>` and `<footer>`.

## Copy census (reference wording — paraphrase freely, keep the *kind*)

| Slot | Reference copy |
| --- | --- |
| eyebrow | `Glitchcast for creators` (a green dot precedes it; the dot is decorative) |
| `h1` | `Level up your ` + `stream` (the second segment is the cyan glow span) |
| lede | `Overlays, instant clips and multistreaming in one app. Go live free, then unlock pro tools when your channel takes off.` |
| plan 1 | **Rookie** · `Everything you need for your first streams.` · **Free** (no `/ month`) · `720p streaming to one platform` · `12 overlay themes` · `30-second instant clips` · `Community Discord` · CTA `Download free` |
| plan 2 (featured) | flag `Creator favourite` · **Streamer** · `For growing channels that stream every week.` · **$9** `/ month` · `1080p60 to three platforms at once` · `All 140 overlay themes and alerts` · `AI highlight reels from every VOD` · `Custom sub and donation alerts` · `No Glitchcast watermark` · CTA `Go Streamer` |
| plan 3 | **Legend** · `For full-time creators and small esports teams.` · **$24** `/ month` · `4K streaming to unlimited platforms` · `Custom overlay designer` · `Sponsor slots and analytics` · `3 moderator seats` · `Priority support in 2 hours` · CTA `Go Legend` |
| foot | `Cancel any time. Students get Streamer free for a year with a valid school email.` |

The bullet glyph is a **data-URI SVG**, not an icon font: a 12 × 12 four-point sparkle
(`M6 0l1.6 4.4L12 6 7.6 7.6 6 12 4.4 7.6 0 6l4.4-1.6z`), fill `#22d3ee` on the plain cards and `#f472b6` on the
featured one. The port should draw the same shape with an inline SVG element (or a CSS mask of the same path) so the
fill can follow a token — a `lucide-react` `Sparkles` is four-lobed but **not** this glyph; if you use one, say so in
the PR.

## Line boxes and their seams (reference, measured by line count)

| Element | Seam |
| --- | --- |
| `h1` | **1** line at ≥ **359**; **2** at ≤ 358 (the glow span wraps with the word) |
| lede | **2** lines at ≥ **510**; **3** at 365–509; **4** at ≤ **364** (its block is 640 wide until the viewport is narrower) |
| foot note | **1** line at ≥ **584**; **2** at ≤ 583 |
| Rookie description (3-col) | **1** line at ≥ **1150**; **2** at ≤ 1149 — i.e. the moment the grid passes 1118 px |
| Rookie description (1-col) | **1** line at ≤ **390**; **2** at 391–460 |
| Streamer description (1-col) | **1** line at ≥ **411**; **2** at ≤ 410 |
| Legend description (1-col) | **1** line at ≥ **418**; **2** at ≤ 417 |
| `h1` font-size floor | `5.6vw` hits the **34 px** minimum at vw ≤ **607**; the **60 px** cap at vw ≥ **1072** |

## Height ladder (`document.scrollHeight` at a 900-tall viewport, reference)

| vw | 1440 | 1360 | 1280 | 1200 | 1120 | 1080 | 1024 | 1000 | 960 | 920 | 901 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| doc | 1082 | 1082 | 1079 | 1066 | **1053** | 1069 | 1057 | 1095 | **1109** | 1100 | 1096 |

| vw | 900 | 899 | 860 | 800 | 768 | 700 | 600 | 560 | 520 | 480 | 460 | 440 | 414 | 390 | 375 | 360 | 331 | 320 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| doc | **2103** | 2103 | 2095 | 2082 | 2075 | 2060 | 2039 | 2060 | 2060 | 2086 | 2086 | 2086 | 2108 | 2131 | 2153 | 2224 | **2348** | 2348 |

The ladder is **not monotonic**: it *shrinks* from 1120 (1053) to 1200 (1066) because the Rookie description gains its
second line at 1149, and it *grows* from 600 (2039) to 560 (2060) because the foot note wraps at 583. It jumps **+1007**
at the 900 → 901 boundary (3 columns → 1). Card heights in the single-column band: **520.69 / 553.16 / 555.16** at
900–440, **543.16 / 575.63 / 577.63** at 375, **565.63 / 665.50 / 600.09** at 331 — the cards are **not** equal height
once the grid is one column, and the middle one becomes the tallest at 331 when four of its five bullets wrap.

## Requirements

### Requirement: The page shell and its single section

The template SHALL render one full-bleed `<main>` on the `#08060f` ground whose background carries the two radial
washes and the 44 px violet grid, holding exactly one `<section>`, and — after adaptation — the port's Component Dock
footer strip and no other band.

#### Scenario: Shell geometry at 1440

- **GIVEN** the page at 1440 × 900
- **WHEN** it is measured after `document.fonts.ready`
- **THEN** the demo wrapper SHALL be **1440 × 1081.77** with `padding: 104px 16px` (a `clamp(48px, 8vw, 104px)`
  block padding), and the document SHALL be **1082** tall before the port footer
- **AND** the section SHALL be **1120 × 873.77** at **(160, 104)** with `max-width: 1120px`, `font-size: 15`,
  `line-height: 1.55`, `color: #f5f3ff`
- **AND** the background SHALL be the five declared layers in order — pink radial (38 % × 30 % at 18 % 8 %,
  `rgba(236,72,153,.22)`), cyan radial (34 % × 30 % at 85 % 20 %, `rgba(34,211,238,.18)`), 1 px horizontal violet
  hairline at 7 % on a **44 px** tile, the same at `90deg`, then `#08060f`.

#### Scenario: Structure census

- **GIVEN** the rendered reference
- **WHEN** its elements are counted
- **THEN** there SHALL be **1** `h1`, **3** `h2`, **3** `article`, **3** `ul`, **14** `li`, **3** `a`, **3** `svg`
- **AND** the reference SHALL carry **zero** `img`, `form`, `input`, `button`, `script` and `footer`
- **AND** the port SHALL add only the Component Dock footer.

#### Scenario: No JavaScript port

- **GIVEN** the archive contains no `js/` directory and the document has no `<script>` of its own
- **WHEN** the port is built
- **THEN** the page SHALL NOT ship any state machine, toggle, observer or timer — the only behaviour is CSS hover and
  focus — so the component tree SHALL be pure and every section SHALL be testable by render alone.

### Requirement: The head, its pill eyebrow and the glowing word

The template SHALL render a centred head of exactly three children — a pill eyebrow with a decorative live dot, an
`h1` whose last word is tinted cyan with a text-shadow, and a lede — capped at 640 px and followed by a 56 px gap.

#### Scenario: Head geometry at 1440

- **GIVEN** the head at 1440
- **WHEN** its children are measured
- **THEN** the head SHALL be **640 × 178.45** at (400, 104) with `margin-bottom: 56` and `text-align: center`
- **AND** the eyebrow SHALL be **196 × 34.14** at (622, 104): `display: inline-flex`, `gap: 8`, `padding: 6px 14px`,
  `border: 1px solid rgba(167,139,250,.35)`, `border-radius: 999`, `background: rgba(167,139,250,.08)`,
  `color: #ddd6fe`, 13 px / 500
- **AND** its dot SHALL be **8 × 8** at (637, 117.06), `background: #4ade80` with `box-shadow: 0 0 10px #4ade80` and
  `aria-hidden`
- **AND** the `h1` SHALL be **640 × 61.19** at y **156.14** (`margin: 18px 0 14px`), 60 px / 700, `letter-spacing:
  -.03em`, `line-height: 1.02`, in **one** line at 1440
- **AND** the lede SHALL be **640 × 51.13** at y **231.33** — 16.5 px / 400 in `#b9b3d1`, `text-wrap: balance`, in
  **two** lines.

#### Scenario: The glow span's box is not the line box

- **GIVEN** the `h1` line box is **61.2** tall (`1.02 × 60`)
- **WHEN** the glow `<span>` is measured
- **THEN** its rect SHALL be **192.2 × 77** at y **148.14** — **8 px above** the line box and **15.8 px taller**,
  because an inline box takes the font's ascent/descent, and the `text-shadow` does not add to it
- **AND** the port SHALL assert the span's **colour** and `text-shadow` (`0 0 24px rgba(34,211,238,.55)`), and SHALL
  assert the `h1` block's 61.19 — never treat 77 as a line height.

### Requirement: The three-card grid

The template SHALL lay the three plans out as a three-column CSS grid of equal tracks, 22 px apart, stretched to a
common height, inside the 1120 px section.

#### Scenario: Grid at 1440

- **GIVEN** the grid at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **1120 × 577.63** at (160, 338.45) with `grid-template-columns: repeat(3, minmax(0, 1fr))`,
  `gap: 22`, `align-items: stretch`
- **AND** the tracks SHALL measure **358.656 / 358.672 / 358.656** (sub-pixel rounding only — the three cards are equal
  by construction)
- **AND** the cards SHALL sit at x **160 / 540.66 / 921.33** and all be **577.63** tall.

#### Scenario: Stretch, not min-height

- **GIVEN** the cards differ by one description line and one bullet
- **WHEN** the grid height is read
- **THEN** it SHALL equal the **tallest** card — **577.63**, which is Legend's own content height at this width
- **AND** the two shorter cards SHALL absorb the difference in their **feature list**, because the list is `flex: 1`
  (measured list heights **194.81 / 174.34 / 172.34**), which is why every CTA's bottom edge lands on **887.08**
- **AND** the port SHALL keep `flex: 1` on the list — a `margin-top: auto` on the CTA gives the same CTA position but
  loses the slack measurement the tests assert.

### Requirement: A plan card and its anatomy

The template SHALL render each plan as a flex-column `<article>` with a coloured icon tile, its name, a description, a
price row closed by a dashed rule, a bulleted feature list, and a full-width CTA pinned to the bottom.

#### Scenario: Card box and tokens

- **GIVEN** a plain card at 1440
- **WHEN** its computed style is read
- **THEN** it SHALL be `display: flex; flex-direction: column`, `padding: 30px 28px 28px`, `border-radius: 20px`,
  `border: 1px solid rgba(167,139,250,.2)`, `background: linear-gradient(180deg, rgba(30,22,52,.9), rgba(18,14,32,.95))`
  and **no** shadow
- **AND** it SHALL be `position: relative` only because the featured card's flag is absolute.

#### Scenario: Icon, name, description

- **GIVEN** the card at 1440
- **WHEN** its children are measured
- **THEN** the icon tile SHALL be **46 × 46** at y **369.45**, `border-radius: 12`, with a per-plan wash
  (`rgba(34,211,238,.12)` cyan / `rgba(244,114,182,.14)` pink / `rgba(167,139,250,.14)` violet) and an inset 1 px ring
  at .35 / .4 / .4 of the same hue; the pink tile also carries `0 0 24px -4px rgba(244,114,182,.6)`
- **AND** the tile's `<svg>` SHALL be **24 × 24**, inset **11 px** (stroke `1.8`, `currentColor`), and `aria-hidden`
- **AND** the name SHALL be **300.66 × 34.09** at y **435.45** (`margin: 20px 0 4px`, 22 px / 700)
- **AND** the description SHALL start at y **473.55** at 14.5 px / 400 in `#b9b3d1` — **22.47** tall on Rookie and
  **44.94** on the two paid plans at 1440.

#### Scenario: The price row

- **GIVEN** the price row at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **73** tall with `margin: 22px 0`, `padding-bottom: 22px`, `border-bottom: 1px dashed
  rgba(167,139,250,.25)`, `display: flex`, `gap: 6`, `align-items: baseline`
- **AND** the amount SHALL be 50 px / 700, `letter-spacing: -.04em`, `line-height: 1`, measured **94** ("Free"),
  **58** ("$9") and **86** ("$24") wide
- **AND** only the two paid plans SHALL carry a `/ month` span (15 px, `#b9b3d1`) — it sits at y **565.48**, baseline
  aligned to the amount, and the free plan has **no** period marker at all
- **AND** the row's y SHALL be **518.02** on Rookie and **540.48** on the other two *because their descriptions differ
  by one line* — the price rows are deliberately **not** aligned across cards.

#### Scenario: The feature list

- **GIVEN** the list at 1440
- **WHEN** its items are measured
- **THEN** every `<li>` SHALL be **34.47** tall — `padding: 6px 0 6px 28px`, 14.5 px / 22.475 in `#b9b3d1`
- **AND** its marker SHALL be a `::before` **12 × 12** box at `top: 12px; left: 2px`, painted with the four-point
  sparkle path, cyan on the plain cards and `#f472b6` on the featured one
- **AND** the list SHALL be `flex: 1` with `margin: 0 0 28px` and `list-style: none`.

#### Scenario: The CTA

- **GIVEN** a ghost CTA at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **300.66 × 51.25** at y **835.83** — `display: block`, `padding: 13px 18px`, radius 12, 15 px /
  700 centred, `border: 1px solid rgba(167,139,250,.45)` (**fixed to `.6`** in the port, see the contrast requirement)
- **AND** the featured CTA SHALL be **300.67 × 49.25** at y **837.83** — `border: 0`, a `90deg` gradient
  `#f9a8d4 → #c4b5fd 55% → #67e8f9`, `color: #16091f` and `box-shadow: 0 10px 30px -10px rgba(244,114,182,.8)`
- **AND** all three CTAs SHALL end at y **887.08** — the 2 px difference in their tops is exactly the 1 px border the
  ghost buttons carry above and below.

### Requirement: The featured plan and its gradient border

The template SHALL mark the middle plan as featured by **border paint only** — a transparent 1 px border backed by a
135° pink→violet→cyan gradient — plus a corner flag, a glowing amount and the gradient CTA.

#### Scenario: The double background

- **GIVEN** the featured card
- **WHEN** its computed background is read
- **THEN** it SHALL be two layers: `linear-gradient(180deg, #221538, #140f24) padding-box` and
  `linear-gradient(135deg, #f472b6, #a78bfa 50%, #22d3ee) border-box`
- **AND** its border SHALL compute to `1px solid rgba(0,0,0,0)` — the gradient shows through the transparent border, so
  a port that simply sets `border-color` loses the design
- **AND** it SHALL carry exactly three shadows: `0 0 0 1px rgba(244,114,182,.15)`,
  `0 30px 80px -30px rgba(244,114,182,.6)`, `0 0 60px -20px rgba(34,211,238,.4)`
- **AND** its amount SHALL carry `text-shadow: 0 0 28px rgba(244,114,182,.6)` (the plain cards carry none).

#### Scenario: The flag resolves against the padding box

- **GIVEN** the flag is `position: absolute` with `top: 28px; right: 24px`
- **WHEN** it is measured at 1440
- **THEN** its rect SHALL be **145.09 × 26.59** at **(729.23, 367.45)** — that is **29 px** below the card's outer top
  edge and **25 px** in from its outer right edge, because the 1 px transparent border shifts both
- **AND** it SHALL be `padding: 4px 10px`, `border-radius: 6`, `background: linear-gradient(90deg, #f472b6, #c084fc)`,
  `color: #1a0b1f`, 12 px / 700, `uppercase`, `letter-spacing: .02em` — the markup says *Creator favourite*, the CSS
  shouts it.
- **AND** the port SHALL keep the flag as a sibling of the icon (not inside the `h2`), so the heading's accessible name
  stays the plan name.

### Requirement: Hover, focus and motion

The template SHALL provide exactly four interaction behaviours — a lift on every card, a border fade on the plain
cards, a wash on the ghost CTAs and a gradient swap on the featured CTA — with a visible 3 px focus ring on all three
links, and SHALL drop the movement under `prefers-reduced-motion: reduce`.

#### Scenario: Card hover

- **GIVEN** a pointer over a plain card at 1440
- **WHEN** 250 ms have passed
- **THEN** its transform SHALL be `matrix(1,0,0,1,0,-4)` and its border colour `rgba(167,139,250,.45)`
- **AND** the featured card SHALL lift by the same 4 px, keep its **transparent** border and keep its three shadows.

#### Scenario: CTA hover and focus

- **GIVEN** a pointer over a ghost CTA
- **WHEN** 200 ms have passed
- **THEN** its background SHALL be `rgba(167,139,250,.14)` and its label unchanged `#f5f3ff`
- **AND** hovering the featured CTA SHALL swap its gradient to `#fbcfe8 → #ddd6fe 55% → #a5f3fc` and its shadow to
  `0 12px 36px -8px rgba(34,211,238,.7)`
- **AND** `Tab` SHALL reach **all three** anchors in document order, each with
  `outline: 3px solid #22d3ee; outline-offset: 3px`, and **no** ring on the cards, the lists or the flag.

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page is rendered
- **THEN** both transitions SHALL compute to `none` and a hovered card SHALL keep `transform: none`
- **AND** the page SHALL contain **zero** `@keyframes` in either state — there is nothing else to disable.

### Requirement: The responsive step at 900

The template SHALL collapse the grid to a single centred column of at most 460 px at `max-width: 900px`, keep the
head's 640 px cap, and never scroll horizontally at any width down to 320.

#### Scenario: The step

- **GIVEN** the viewport moves from 901 to 900
- **WHEN** the grid is measured
- **THEN** it SHALL go from **869 × 665.50** (three tracks of 275) to **460 × 1673** with
  `grid-template-columns: minmax(0, 1fr)`, `max-width: 460`, `margin: 0 auto`
- **AND** the document SHALL go from **1096** to **2103**
- **AND** the cards SHALL stop being equal height: **520.69 / 553.16 / 555.16**, each centred in the 460 px column.

#### Scenario: Narrow cards

- **GIVEN** the single-column band
- **WHEN** the viewport is 375
- **THEN** the cards SHALL be **343** wide and **543.16 / 575.63 / 577.63** tall (every description now two lines)
- **AND** at 331 they SHALL be **299** wide and **565.63 / 665.50 / 600.09** tall — the middle card becomes the
  tallest because four of its five bullets wrap to two lines (**56.94** each instead of 34.47)
- **AND** the `h1` SHALL be **2** lines from 358 down (69.34 tall) and the foot note **2** lines from 583 down.

#### Scenario: No horizontal scroll

- **GIVEN** any width in the sweep
- **WHEN** `window.scrollTo(400, 0)` is called
- **THEN** `scrollX` SHALL stay **0** and `scrollWidth` SHALL equal `clientWidth` at 320, 331, 360, 375, 390, 414, 440,
  460, 480, 520, 560, 600, 700, 768, 800, 900, 901, 920, 960, 1000, 1024, 1080, 1120, 1200, 1280, 1440.

### Requirement: Contrast, and the one colour the port must change

The template SHALL keep every shipped colour that passes WCAG AA and SHALL raise the ghost CTA's border, whose only
boundary samples at **2.33 : 1**, to at least 3 : 1 against the card ground.

#### Scenario: The pairs that pass

- **GIVEN** the tokens as shipped
- **WHEN** contrast is computed against the surfaces they actually sit on
- **THEN** the ink SHALL measure **15.70** on a card top and **15.54** on the featured top; the muted `#b9b3d1`
  **8.55 / 9.40** (plain card, top to bottom) and **8.46 / 9.28** (featured), **10.00** on the page ground
- **AND** the flag's `#1a0b1f` SHALL measure **7.13** on `#f472b6` and **7.15** on `#c084fc`; the featured CTA's
  `#16091f` **10.59 / 10.41 / 13.25** across its gradient stops
- **AND** the eyebrow's `#ddd6fe` SHALL measure **13.32** on its own 8 % pill; cyan **9.53**, pink **6.43** and violet
  **6.33** on the card grounds; the focus ring **9.53** on a card and **11.14** on the page.

#### Scenario: The one fix

- **GIVEN** the ghost CTA's only boundary is `1px solid rgba(167,139,250,.45)`
- **WHEN** it is composited over the card gradient
- **THEN** it SHALL measure **2.33 : 1** at the card top and **2.57 : 1** at the bottom — below the 3 : 1 a control
  boundary needs
- **AND** the port SHALL raise it to `rgba(167,139,250,.6)` → **3.12 / 3.43**, or use solid `#a78bfa` (**6.96 / 6.26**)
  if a stronger edge is wanted
- **AND** the card's own `rgba(167,139,250,.2)` border (**1.32** on the page) and the dashed rule
  (**1.54** on a card) are **decorative** — the card is identified by its fill, the rule by its position — and SHALL
  stay as shipped.

### Requirement: The Component Dock footer

The template SHALL end with the repo's standard footer strip linking `https://www.componentdock.com/` as
"Component Dock", and no app file SHALL mention ColorLib, the slug or the source product name.

#### Scenario: Footer and provenance

- **GIVEN** the built app
- **WHEN** the page is inspected
- **THEN** a `<footer>` SHALL be the last element and SHALL carry exactly one outbound link,
  `https://www.componentdock.com/`, labelled **Component Dock**
- **AND** `grep -riE 'colorlib|pricing-table-04|glitchcast' apps/limelight` SHALL return **0** hits
- **AND** the footer SHALL be the only element the port adds below the 1082 px reference page, so the ladder's height
  assertions are always `reference + footer`.

## Adapting to the repo (deltas — read before writing code)

1. **Do not port the `:where(html) … { all: revert }` firewall.** The reference's first 60 lines are a Bootstrap-reset
   shield (it also re-asserts `[hidden]`, `table`, `th`, `caption`, `hr`, `img` reverts). In a Tailwind tree the
   preflight already owns that ground, and copying the shield makes every utility lose. Port only `.cl-pricing04*`.
2. **Do not port the dead `.cl-icon` rule** (`height: 1em; fill: currentColor`) — no element in the markup carries it.
   All 51 rule blocks minus the shield and that one are the design.
3. **The featured border needs the gradient-paint trick**, not `border-image`: `border: 1px solid transparent` +
   two backgrounds with `background-clip: padding-box, border-box` + `background-origin: border-box`. In Tailwind 4
   that is `border border-transparent bg-[linear-gradient(...)_padding-box,linear-gradient(...)_border-box]`; verify the
   computed `background-image` still lists **two** layers, and that the box-shadow's 0-offset 1 px ring is still there
   (it is the only thing that keeps the border visible at 100 % zoom on a busy ground).
4. **Icons:** `lucide-react` `Gamepad2` (Rookie), `Zap` (Streamer), `Crown` (Legend) at `size={24} strokeWidth={1.8}`
   reproduce the three shipped paths closely. The **bullet** is not a lucide glyph — draw the 12 × 12 four-point sparkle
   as an inline `<svg>` (or a `mask`) so the fill can switch to pink on the featured card.
5. **Fonts:** Space Grotesk 400 / 500 / 700 via the Google `css2` link — **take the `U+0000-00FF` (ASCII) subset** (the
   `css2` response returns three subsets per weight and the latin one is the ASCII face; picking the *last* URL lands on
   vietnamese and Chrome silently falls back to DejaVu). Verify with `CSS.getPlatformFontsForNode` that the title
   reports `SpaceGrotesk-…`/`custom=true` and **no** DejaVu. Google's cut drifts up to **+2.8 %** wider on body copy at
   14.5 px and **−2.7 %** narrower on 15 px/700 labels — the reason the Rookie description must be re-picked (see the
   0.66 px note above).
6. **Copy:** paraphrase the product name and the plan names freely, but keep the shape — a live-dot pill, a headline
   whose **last word** glows, one free plan **without** a period marker, and five bullets on the paid plans. The port
   must choose the Rookie description so it fits **one line at 1440** (≤ ~296 px); `Everything you need to start
   streaming.` measures 286.
7. **Links:** all three reference CTAs are `href="#"`. Give each a real destination (in-page signup anchor, or a route),
   keep the `3` count, and keep the focus ring. Do **not** add a billing switch: the reference has no monthly/annual
   control, and inventing one silently changes the page's whole device (that is `tallyboard`'s).
8. **Tokens in `@theme`:** `--color-neon-pink: #f472b6`, `--color-neon-cyan: #22d3ee`, `--color-neon-violet:
   #a78bfa`, `--color-ink: #f5f3ff`, `--color-muted: #b9b3d1`, `--color-ground: #08060f`, plus the two card stops and
   the fixed `--color-cta-line: rgba(167,139,250,.6)`.
9. **Radii/spacing tokens:** 20 (card) · 12 (icon, CTA) · 6 (flag) · 999 (pill); card padding `30px 28px 28px`; grid
   gap **22**; section `max-width: 1120px`; wrapper block padding `clamp(48px, 8vw, 104px)`.
10. **Tests to write first** (they mirror the scenarios): shell + head geometry, glow span vs line box, grid tracks and
    stretch slack, price-row offsets on the three cards, list `flex: 1` slack, CTA bottoms all equal, the flag's
    padding-box offsets, hover transforms, three-CTA tab order with the 3 px ring, the 900 step, the 320 sweep, and the
    contrast pair for the fixed border.

## Verification checklist

- [ ] `apps/limelight` exists, package `@free-react-templates/limelight`, `public/CNAME` =
      `limelight.free.componentdock.com`, `"homepage"` = `https://limelight.free.componentdock.com`
- [ ] `npm run verify:app limelight` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-limelight --type spec` is valid
- [ ] no source string survives: `grep -riE 'colorlib|pricing-table-04|glitchcast' apps/limelight` → 0 hits
- [ ] measured at 1440 × 900: wrapper **1440 × 1081.77** (`padding: 104 16`); section **1120 × 873.77** at (160, 104);
      head **640 × 178.45** at (400, 104); eyebrow **196 × 34.14**; dot **8 × 8** at (637, 117.06); `h1` **61.19** at
      y 156.14 (1 line); glow span **192.2 × 77** at (813.3, 148.14); lede **51.13** (2 lines) at y 231.33; grid
      **1120 × 577.63** at (160, 338.45); tracks **358.656 / 358.672 / 358.656**; cards at x **160 / 540.66 / 921.33**
- [ ] card internals at 1440: icon **46 × 46** @ y 369.45 (svg 24 at +11); name **34.09** @ 435.45; descriptions
      **22.47 / 44.94 / 44.94**; price rows **73** tall @ **518.02 / 540.48 / 540.48**; amounts **94 / 58 / 86**;
      `/ month` @ y 565.48 on the two paid plans; lists **194.81 / 174.34 / 172.34**; CTA **51.25 / 49.25 / 51.25**
      with every bottom at **887.08**; flag **145.09 × 26.59** @ (729.23, 367.45); foot **21.69** @ (160, 956.08)
- [ ] structure: **1** `h1`, **3** `h2`, **3** `article`, **3** `ul`, **14** `li` (4 + 5 + 5), **3** `a`, **3** `svg`,
      **0** `img` / `form` / `input` / `button` / `script` in the port's own sections
- [ ] the Rookie description is **1 line** at 1440 in the *served* font (assert the price row's y, not the string)
- [ ] height ladder: **1082** at 1440 · **1079** at 1280 · **1066** at 1200 · **1053** at 1120 · **1069** at 1080 ·
      **1057** at 1024 · **1095** at 1000 · **1109** at 960 · **1100** at 920 · **1096** at 901 · **2103** at 900 ·
      **2082** at 800 · **2075** at 768 · **2060** at 700 · **2039** at 600 · **2060** at 560 · **2086** at 480 ·
      **2108** at 414 · **2131** at 390 · **2153** at 375 · **2224** at 360 · **2348** at 331 / 320 (each **+** the port
      footer's height)
- [ ] seams: `h1` 1 → 2 lines at **358/359**; lede 2 → 3 at **509/510** and 3 → 4 at **364/365**; foot 1 → 2 at
      **583/584**; Rookie description 1 → 2 at **1149/1150** (3-col) and 2 → 1 at **390** (1-col); Streamer **410/411**;
      Legend **417/418**
- [ ] the 900 step: grid **869 × 665.50** → **460 × 1673**, document **1096** → **2103**, card heights
      **520.69 / 553.16 / 555.16**
- [ ] `scrollWidth === clientWidth` and `scrollX = 0` at 320, 331, 360, 375, 390, 414, 440, 460, 480, 520, 560, 600, 700,
      768, 800, 900, 901, 920, 960, 1000, 1024, 1080, 1120, 1200, 1280, 1440
- [ ] hover: card `translateY(-4px)` + border **.2 → .45** in 250 ms; featured keeps `transparent` + its three shadows;
      ghost CTA background **rgba(167,139,250,.14)**; featured CTA swaps to the `#fbcfe8 → #ddd6fe → #a5f3fc` gradient
- [ ] focus: **3 px #22d3ee at +3 px** on all three anchors, reached by `Tab` in document order, none on cards
- [ ] `prefers-reduced-motion: reduce` → both transitions `none`, hover lift gone, zero `@keyframes` in either state
- [ ] contrast asserted in a test: ink **15.70 / 15.54**, muted **8.55 / 9.40 / 8.46 / 9.28 / 10.00**, flag ink
      **7.13 / 7.15**, glow CTA ink **10.59 / 10.41 / 13.25**, eyebrow **13.32**, cyan **9.53**, pink **6.43**, violet
      **6.33**, focus ring **9.53 / 11.14**, and the **fixed** ghost CTA border **≥ 3.0** (`.6` → 3.12 / 3.43)
- [ ] a11y shape: one `h1`; three `h2` plan names; every `article` `aria-labelledby` its `h2`; lists are real `<ul>`;
      the dot, the three icons and the sparkle markers are `aria-hidden`/decorative; the flag is not part of a heading;
      three resolving CTAs (no `href="#"`)
- [ ] footer strip links `https://www.componentdock.com/` as **Component Dock**
- [ ] bookkeeping: `npm run readme:status`, then **append** the `TEMPLATES.md` row under
      `## Bootstrap Pricing Tables (12)` (line **891**, after the Pricing Table 01 row; `## Bootstrap Wizards (30)` is
      at **895**) and `gh workflow run deploy-surge.yml -f app="limelight"`
