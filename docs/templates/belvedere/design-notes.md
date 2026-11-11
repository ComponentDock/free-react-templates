# Belvedere — design notes (ColorLib "Hero V09", the `hero` family's ninth variant)

Everything below is measured on the live preview, not inferred from the sheet: `curl -4` for the paper facts and
node Playwright Chromium (`/root/free-templates-firebase/node_modules/playwright`) for the render, with
`document.fonts.ready` awaited and 600–800 ms of settle time. Motion is running unless a number says otherwise.

## 1. Where the reference lives

| thing | value |
| --- | --- |
| live preview | `https://preview.colorlib.com/theme/bootstrap/hero-09/` — **200, 4,881 B** |
| dead paths | `theme/hero-09/` **404 (9 B)** · `theme/bb/hero-09/` **404 (9 B)** |
| page title | `Hero V09 \| Colorlib`, `lang="en"` |
| stylesheet | `css/style.css?v=3c92ef29` — **13,325 B**, sha256 `aed258869a6c9a8d…` |
| script | **none** — `js/snippet.js` **404 (9 B)**; the rendered page's ten `<script>`s are the preview host's |
| archive | `downloads/free/hero-09.zip` — **479,477 B (468.2 KiB)**, 16 entries |
| archive twin | `css/style.css` byte-identical to live (`cmp` clean) → *live preview verified; the archive is its un-versioned twin* |
| archive README lie | lists `js/snippet.js  the behaviour, in plain JavaScript`; there is **no `js/` entry** in the zip |
| fonts | 8 `@font-face` over **2** woff2 (`…-latin` 76,868 B ×4 weights, `…-latin-ext` 30,636 B ×4) → one variable binary per subset |
| photograph | `images/portrait.jpg` **42,067 B, 600 × 600** |
| source page | `https://colorlib.com/wp/template/hero-09/` — **200, 113,778 B**, `h1` "Hero V09", `datePublished` 2026-09-25T15:09:09+00:00, "the download is 468 KB" ✓ |
| screenshot | `…/uploads/sites/2/hero-09.jpg` — **200, 47,533 B**, **1200 × 972**, **AVIF behind `.jpg`** |
| inner pages | **none** — `about.html`, `work.html`, `notes.html`, `contact.html`, `gallery.html`, `services.html` all **404** on all three prefixes; the directory URL is byte-identical to `index.html` |

`TEMPLATES.md` has **no row** for this design (its `## Bootstrap Heroes (12)` section stops at Hero 06 on main
`db803b7b5`; Hero 07/08 are prepped but unbuilt). The suggested row is in the spec, in the section's
`[colorlib] · ![preview] · [app]` grammar.

## 2. DOM skeleton (as shipped)

```
div.cl-hero09                                    (flex column, min-height 100vh, overflow hidden, radial disc)
├─ header.cl-hero09__bar                         (flex, space-between, max-width 1180, padding 24 48)
│  ├─ a.cl-hero09__logo  href="#"                ("m" span aria-hidden + "maren.holt")
│  └─ nav.cl-hero09__nav  aria-label="Main"      (class has NO rule — phantom)
│     └─ ul.cl-hero09__links                     (flex, gap 4)
│        └─ li ×3 > a.cl-hero09__link            (Work [aria-current=page], About, Notes — all href="#")
└─ main.cl-hero09__main                          (flex 1, display flex, align-items center)
   └─ section.cl-hero09__hero  aria-labelledby="cl-hero09-title"
      │                                          (grid .8fr 1.2fr, gap clamp(36,6vw,96), padding 48 48 88)
      ├─ div.cl-hero09__portrait                 (relative, max-width 420)
      │  ├─ div.cl-hero09__frame                 (aspect 4/5, 6px white border, radius 999 999 28 28)
      │  │  └─ img.cl-hero09__img                (600×600 source, cover, object-position 50% 30%)
      │  ├─ p.cl-hero09__status                  (ink pill, bottom -18, nowrap)
      │  │  ├─ span.cl-hero09__pulse aria-hidden (10px green dot, ::after pings 1.8s)
      │  │  └─ "Available for work from January"
      │  └─ span.cl-hero09__sticker aria-hidden  (64px yellow disc, rotate 12s, top 12% right -22)
      │     └─ svg 30×30 (four-point star, currentColor)
      └─ div.cl-hero09__copy
         ├─ p.cl-hero09__hello                   ("Hi, I'm Maren — product designer & front-end developer in Rotterdam")
         ├─ h1.cl-hero09__title  id=cl-hero09-title
         │  └─ "I design and build " + mark.cl-hero09__mark("calm interfaces") + " for health and climate teams."
         ├─ p.cl-hero09__bio                     (3-line paragraph)
         ├─ div.cl-hero09__actions
         │  ├─ a.cl-hero09__primary  href="mailto:hello@marenholt.design"  (svg 18×18 envelope + address)
         │  └─ a.cl-hero09__secondary href="#"     ("Download CV " + span("(PDF, 120 KB)"))
         └─ div.cl-hero09__meta                  (border-top hairline, margin-top 36, padding-top 26)
            ├─ ul.cl-hero09__social  aria-label="Elsewhere"
            │  └─ li ×4 > a.cl-hero09__social-link href="#" aria-label=…  (svg 20×20 each)
            └─ dl.cl-hero09__stats
               └─ div ×3 > dt + dd               (Experience/9 years · Shipped/40+ products · Now/Studio Polder)
```

Counts: **1** `<h1>`, **0** `<h2>`, **0** `<h3>`, **1** `<img>`, **6** `<svg>`, **1** `<mark>`, **1** `<dl>`,
**0** `<form>`, **0** `<input>`, **0** `<button>`, **10** `<a>`, **1** `<section>`, **1** `<header>`, **1** `<nav>`,
**0** `<footer>`. Class census: 26 markup / 26 declared / 1 phantom (`cl-hero09__nav`) / 1 dead (`.cl-icon`).

## 3. Token reference (verbatim from `css/style.css`)

```css
.cl-hero09 {
  --cl-hero09-bg: #e8f0fa;
  --cl-hero09-ink: #0f1f3d;
  --cl-hero09-muted: #43526e;
  --cl-hero09-yellow: #ffd23f;
  --cl-hero09-blue: #2456d6;
  --cl-hero09-card: #fff;
  --cl-hero09-gutter: clamp(16px, 4vw, 48px);
  background: radial-gradient(circle at 18% 70%, #d4e3f7 0 22%, transparent 22.2%), var(--cl-hero09-bg);
  font-size: 16px; line-height: 1.55; color: var(--cl-hero09-ink);
  min-height: 100vh; display: flex; flex-direction: column; overflow: hidden;
}
body { background: #e8f0fa; font-family: "Bricolage Grotesque", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.cl-hero09 a { color: inherit; text-decoration: none; }          /* 0,1,1 — beats every single-class colour */
.cl-hero09 a:focus-visible { outline: 3px solid var(--cl-hero09-blue); outline-offset: 3px; }
```

Derived values in use: frame ground `#cbd9ee`, ping green `#34d399`, CTA hover `#1b45b5`, and five `rgba()` ink
derivations — `.07` (nav hover), `.14` (meta rule), `.2` (ghost border), `.45` (frame shadow), `.5` (pill + sticker
shadows) — plus `rgba(36,86,214,.8)` for the CTA shadow and `rgba(255,255,255,.6)` for the ghost ground.

Type scale actually rendered at 1440: **68.8 / 18.4 / 17 / 16 / 14.5 / 12.5**, line heights **71.552 / 28.52 /
26.35 / 24.8 / 22.475 / 19.375**, weights **400 / 500 / 600 / 700**.

Clamps:
- `h1`: `clamp(2.3rem, 1.3rem + 3.6vw, 4.3rem)` → 68.8 at 1440, 66.88 at 1280, 53.2 at 900, floor **36.8** from ~771.
- intro/bio: `clamp(1.02rem, .98rem + .25vw, 1.15rem)` (bio) and `clamp(1rem, .96rem + .25vw, 1.15rem)` (intro) →
  both **18.4** from vw **1216** up.
- gutter `clamp(16px, 4vw, 48px)`, hero gap `clamp(36px, 6vw, 96px)`, hero padding block `clamp(20px,4vw,48px)`
  top / `clamp(48px,7vw,88px)` bottom.

Media steps: `max-width: 900px` (single column, centred copy, portrait `min(72%,320px)` auto-centred, actions and
meta justified centre) and `max-width: 520px` (bar padding 16, logo 16, nav pills `8px 10px`/15, portrait 70 %,
sticker 52 / `right: -18`, pill 13.5/`9px 14px`, actions `flex: 1 1 100%`, stats centred), plus
`prefers-reduced-motion: reduce` (all animation/transition `none !important`).

## 4. The screenshot (visual read)

`hero-09.jpg` is a **macOS browser mock-up** — 1200 × 972, a grey ground, a drop shadow and a
`preview.colorlib.com` URL pill — with the page inside at **~1112 px**. Do **not** adopt the frame; the page itself
is edge-to-edge `#e8f0fa`. Inside the frame, top to bottom: a monogram wordmark with a white `Work` pill and two
plain links on the right; then a two-column hero — a **4:5 portrait in a white arch frame**, a **yellow star
sticker** on its upper right, a **navy pill with a green dot** across its foot, and on the right the muted intro
line, a **four-line navy headline with a yellow band across "calm interfaces"**, a three-line muted bio, a **blue
pill-shaped button with an envelope and an address** beside a **white outlined "Download CV (PDF, 120 KB)"**, a
hairline rule, **four white square icon tiles** and **EXPERIENCE 9 years · SHIPPED 40+ products · NOW Studio
Polder**. A large **pale disc** fills the lower-left corner behind the portrait.

Two things the screenshot gets wrong about the page, both because it is a ~1112 px render at a different DPR:
1. it shows the **icon tiles and the stats on one row** — at 1440 they are on **two** rows (the copy column is
   598.58 and the pair needs 600);
2. it shows the headline in **four** lines, which is right at 1440 but becomes **two** at 900 and **three** at 800.

## 5. Section-by-section fidelity notes

### 5.1 The shell and the disc
Root is a `flex column` with `min-height: 100vh` and `overflow: hidden`. The background is **two layers in one
declaration**: a `radial-gradient(circle at 18% 70%, #d4e3f7 0 22%, transparent 22.2%)` over the flat `#e8f0fa`.
Because it is a `circle` with no explicit size, the stops resolve against the **farthest-corner** distance
(≈ **1353 px** on a 1440 × 944 box), giving a hard radius of **≈ 298 px** — verified against the rendered pixels:
at y = 880 the tint spans **x 58–460** (centre 259, radius 298.6). The disc is **clipped by the viewport** at the
bottom, which is what makes it read as an arc rather than a circle. The 0.2 % feather (`22%` → `22.2%`) is what
keeps the edge from aliasing.

### 5.2 The bar
`max-width: 1180`, `padding: 24px 48px`, `gap: 16`, `space-between` → **88.80** tall. The monogram is a **34 px
ink disc** with a yellow lowercase `m` at 20 px/700 and `padding-bottom: 3px` (the glyph is optically centred, not
mathematically), `aria-hidden`, then the wordmark at 18 px/600 with `gap: 10`. The nav is three pills
(`padding: 8px 14px`, `gap: 4`): the current one is **white with a 1 px shadow**, the others are muted at rest and
take `rgba(15,31,61,.07)` on hover with ink text. The `<nav>` element itself has **no CSS rule** — the pill layout
lives entirely on the `ul`/`a`.

### 5.3 The portrait block
`max-width: 420` and a `4:5` frame with a **6 px white border**; `border-radius: 999px 999px 28px 28px` makes the
top corners a **199.5 px** arc (half the width) and leaves the bottom two softly squared. `overflow: hidden` crops
the 600 × 600 source at `object-position: 50% 30%` (a portrait crop, chin-and-shoulders). `filter: saturate(1.05)`
is applied to the image, and hovering the **block** (not the image) scales the image to `1.04` over
`.6s cubic-bezier(.2,.8,.2,1)`. The frame's ground `#cbd9ee` is only ever visible if the photograph fails.

The **sticker** is a 64 px yellow disc at `top: 12%; right: -22px` — so it overhangs the frame's right edge into
the 86.4 px column gap — with a 30 × 30 four-point star, and `animation: cl-hero09-turn 12s linear infinite`. The
**status pill** is ink, `white-space: nowrap`, `bottom: -18px`, centred with `left: 50%` +
`translateX(-50%)`, and its green dot carries a `::after` clone pinging `scale(1 → 2.8)` + fade over 1.8 s.

### 5.4 The copy column
Order is intro → `h1` → bio → actions → meta, with `h1` margins `16px 0 20px`, actions `margin-top: 30` and meta
`margin-top: 36` + `padding-top: 26` under a `1px rgba(15,31,61,.14)` rule. The `h1` is **700 weight at 68.8 px,
line-height 1.04, tracking -.035em** with `text-wrap: balance` — and it contains a real `<mark>` whose padding
(`0 .12em` = 8.256 px) and radius (`.18em` = 12.384 px) scale with the clamp, with
`-webkit-box-decoration-break: clone` so a wrapped phrase paints two bands. The intro is 500-weight muted; the bio
is 400-weight muted, `max-width: 34em`, i.e. it never uses the full 598.58 column.

### 5.5 The CTA pair
Both are `inline-flex`, `min-height: 52`, `padding: 0 22`, radius **14**, weight 600, `gap: 10`, and both lift
`-2px` on hover. The primary is `#2456d6` with a blue-tinted shadow and an 18 px envelope; the ghost is
`rgba(255,255,255,.6)` with a **declared 1.5 px** `rgba(15,31,61,.2)` border that the renderer paints as **1 px**,
going solid white with an ink border on hover. The ghost's trailing `(PDF, 120 KB)` is a nested `<span>` in muted
at weight 400 — the only place inside a button where the weight drops.

### 5.6 The meta band
Four 44 px tiles (radius 12, white, `gap: 8`) each hold a 20 px glyph; hover flips the tile to ink ground with a
yellow glyph. The `dl` is three `div`-wrapped pairs, each `dt` 12.5 px/500 uppercase with **1 px** letter-spacing
in muted, each `dd` 17 px/600 in ink; the `gap` is `20px 36px`, so the tiles and the stats sit on one row only when
the column can give them 600 px.

### 5.7 The script
**There is none.** The README advertises `js/snippet.js`; the file 404s and the archive has no `js/` directory. Both
animations are CSS keyframes and every other state is `:hover`/`:focus-visible`. Nothing in the port needs
JavaScript — do not invent a scroll-reveal, a menu toggle or a count-up.

## 6. Source → React adaptation

| reference | port | note |
| --- | --- | --- |
| `div.cl-hero09` | `<div className="flex min-h-screen flex-col overflow-hidden bg-ground …">` | radial disc as an arbitrary `bg-[radial-gradient(…)]` layer |
| `header.cl-hero09__bar` | `<header className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-[var(--gutter)] py-6">` | wrap at ≤380 (the reference clips — see §7) |
| `a.cl-hero09__logo` + span | `<a href="#top">` + `<span aria-hidden>` disc | glyph `m` → **B** |
| `nav` + `ul.cl-hero09__links` | `<nav aria-label="Main">` + `<ul>` of 3 links | real targets, no `#` |
| `section.cl-hero09__hero` | `<section aria-labelledby>` with `grid` + `md:` → single column | collapse at **900**, not 768 |
| `div.cl-hero09__frame` | `<div className="aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[28px] border-6 border-card">` | Tailwind has no `border-6`; use `border-[6px]` |
| `img.cl-hero09__img` | `<img src="https://picsum.photos/seed/belvedere-1/1200/1500">` | `object-[50%_30%]`, `saturate-[1.05]`, `group-hover:scale-[1.04]` |
| `span.cl-hero09__sticker` | `<span aria-hidden className="… motion-safe:animate-[turn_12s_linear_infinite]">` | 64 px, `right-[-22px]`, `top-[12%]`; 52/`-18` at ≤520 |
| `p.cl-hero09__status` | `<p className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 whitespace-nowrap …">` | 14.5 px, `gap-2.5`, ink ground, white text |
| `span.cl-hero09__pulse` + `::after` | `<span aria-hidden>` + a second absolutely-positioned span, or a `before:`/`after:` pair | ping = `scale(2.8)` + `opacity:0`, 1.8 s, infinite |
| `h1` + `mark.cl-hero09__mark` | `<h1>` + `<mark className="bg-sun px-[.12em] py-0 rounded-[.18em] [box-decoration-break:clone]">` | keep `text-balance`, `leading-[1.04]`, `tracking-[-.035em]` |
| `a.cl-hero09__primary` | `<Button asChild>` or an `<a>` with `bg-brand text-white` | **set the white explicitly** (base `color: inherit` trap) |
| `a.cl-hero09__secondary` | ghost `<a>` with `border-[1.5px] border-ink/20 bg-white/60` | paints 1 px, as in the reference |
| `ul.cl-hero09__social` | `<ul aria-label="Elsewhere">` of 4 `<a>` with `aria-label` | `lucide-react` glyphs at 20 px |
| `dl.cl-hero09__stats` | `<dl>` of 3 `div > dt + dd` | `dt` `text-[12.5px] uppercase tracking-[1px] text-muted` |
| `--cl-hero09-*` | `@theme` tokens (`--color-ground`, `--color-ink`, `--color-muted`, `--color-brand`, `--color-brand-deep`, `--color-sun`, `--color-card`, `--color-frame`, `--color-ping`, `--color-disc`, `--gutter`, `--hero-gap`) | no raw hex in components |
| fonts | one Google Fonts `<link>` for Bricolage Grotesque `wght@400..700` | it is the page's only face |
| footer | **new** slim strip linking `https://www.componentdock.com/` | the reference has none |

## 7. Defects and unrendered intent (all confirmed on the live page)

1. **The header clips its own nav below 356 px.** The bar never wraps, its children need **356** px, and the root
   is `overflow: hidden`, so at **320** the `Notes` pill's right edge sits at **x 356** — **36 px cut off**, with
   `scrollX` still 0 (clipped, not scrollable; a `scrollWidth` probe would miss it). **Fix in the port:** wrap the
   bar or hide the wordmark text below 380.
2. **Nine of ten anchors are dead `#`.** Only the primary CTA acts (`mailto:`). **Fix:** real in-page targets for
   the wordmark and the three nav pills, a real `mailto:` for the CV button, and real external profiles for the
   four tiles.
3. **The focus ring fails 1.4.11 on one state.** `outline: 3px solid #2456d6` everywhere, but a social tile's
   hover ground is ink `#0f1f3d` → **2.63 : 1**. **Fix:** yellow ring (11.33) on that state.
4. **The README advertises a `js/` file that does not exist** (live 404, absent from the archive). Not
   user-visible; recorded so no implementer invents behaviour to fill it.
5. **`cl-hero09__nav` is a phantom class** and `.cl-icon` is a dead rule — a class-count census reports
   "26/26 styled" and is wrong.
6. **The status pill is wider than the frame it centres on** at ≤360 (249 vs 201.59). Intentional; not clipped.
7. **The page misses its own reference viewport** (944.28 at 1440 × 900). Intentional or not, it must be reproduced
   faithfully rather than "fixed" by shrinking type — but a port that adds the required Component Dock footer will
   grow further, and that growth is a documented delta.
8. **The JSON-LD/meta of the source page is not part of the design** — nothing on the preview page carries
   structured data, so the port needs none either.

## 8. Seams worth re-measuring if the copy changes

Any string change moves these; they are the page's load-bearing arithmetic, in the order they break:

1. **The intro line's wrap** — 1 line **1130–1369**, 2 lines outside. Driven by the *font clamp*, not only the
   column.
2. **The meta band's row count** — one row at copy **≥600** (viewports **1163–1400**), two outside it. The 1440
   state (two rows) is only **1.42 px** away from flipping: 598.58 vs 600.
3. **The CTA pair's wrap** — one row at copy **≥534** (viewports **≥1035** in the two-column range, **600–900**
   stacked), two otherwise.
4. **The stats' own wrap** — one row at content **≥364** (viewport **396**), two below, three at ≤400 with the
   tiles.
5. **The `h1`'s line count** — 4 / 2 / 3 / 4 across the ladder, with `balance` making it non-monotonic; the mark
   splits into two rects when the phrase wraps (measured at 521).
6. **The bar's minimum width** — 356 px; below it the reference clips and the port must wrap instead.
7. **The 520 portrait step** — `min(72%, 320px)` → `70%`, which *grows* the frame at the breakpoint.

## 9. Sibling comparison (same family, 12 variants)

- **proscenium** (V01), **afterglow** (V02), **presswork** (V03), **tendril** (V04), **epistle** (V05),
  **overtone** (V06), **soapbox** (V07), **trattoria** (V08) come before it; the family's remaining three variants
  are still un-prepped.
- **The family's first personal/portfolio subject** — the other eight sell software, a product, a newsletter,
  conference tickets or a restaurant; this is the only one whose "product" is a person, and the only one with
  **no footer, no form and no JavaScript at all**.
- **The first with a portrait-shaped (4:5) media block** — the others are 16:9-ish photographs, product mock-ups or
  full-bleed backgrounds. The arch frame is also the family's only **asymmetric radius** (`999/999/28/28`).
- **The first with an inline text highlight** (`<mark>` with `box-decoration-break: clone`).
- **Still the same family skeleton**: `header` bar + one `<section>` in a `100vh` flex column, one `<h1>`, a CTA
  pair, a meta row and CSS-only motion — so the port should reuse the same shell conventions as its siblings.
- **Height story differs**: proscenium was exactly 900 at 1440; this one is **944** at 1440 and only fits in the
  **1100–1400** band. Do not carry a sibling's "no scroll" assertion across.
