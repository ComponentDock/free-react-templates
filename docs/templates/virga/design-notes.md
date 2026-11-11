# Virga — design notes (ColorLib "Hero V10")

Prep research for `apps/virga`, recreating https://colorlib.com/wp/template/hero-10/ from the live preview at
https://preview.colorlib.com/theme/bootstrap/hero-10/ (the slug-only path 404s; `bootstrap/` is the only live one).
Every number below was measured on 2026-11-11 with node Playwright Chromium at 1440 × 900 unless a width is named,
after `document.fonts.ready` + 700–900 ms. The spec carries the same facts as requirements; this file is the
working map.

## 1. What the page is

A single-screen developer-tooling hero, dark-only, centred, with **no photography at all** (`<img>` count: 0) and one
behaviour (a mobile menu). Its whole visual identity is three layers — a **masked line grid**, a **breathing glow**
and a **gradient-clipped second headline line** — over four content blocks and one metrics band. Content inventory:

| Block | Count | Notes |
| --- | --- | --- |
| `<header>` bar | 1 | wordmark + 4 links + 2 buttons + menu button (hidden ≥861) |
| announcement pill | 1 | gradient version tag + sentence + chevron |
| `h1` | 1 | two visual lines; the second is a block `span` |
| sub-paragraph | 1 | `max-width: 38em`, 3 lines |
| actions | 2 | white CTA + command chip |
| stats band | 1 `dl` / 4 cells | cell 2 carries the 12-bar strip |
| `<footer>` | 0 | the reference has none — the port adds the Component Dock strip |
| `<img>` / `<form>` / `<input>` | 0 / 0 / 0 | nothing to download, nothing to submit |
| `<svg>` / `<button>` / `<a>` | 4 / 1 / 9 | 9 anchors, **all** `href="#"` |

## 2. DOM skeleton (from the live DOM, class names as-is)

```html
<div class="cl-hero10">
  <div class="cl-hero10__grid" aria-hidden="true"></div>
  <div class="cl-hero10__glow" aria-hidden="true"></div>

  <header class="cl-hero10__bar">
    <div class="cl-hero10__bar-inner">
      <a class="cl-hero10__logo" href="#"><svg 24×24 gradient triangle/> Stratus</a>
      <button class="cl-hero10__menu-btn" aria-expanded="false" aria-controls="cl-hero10-nav" aria-label="Open menu">
        <svg class="cl-hero10__menu-open" 20×20/><svg class="cl-hero10__menu-close" 20×20/>
      </button>
      <nav class="cl-hero10__nav" id="cl-hero10-nav" aria-label="Main">
        <ul class="cl-hero10__links">
          <li><a class="cl-hero10__link" href="#" aria-current="page">Platform</a></li>
          … Network · Docs · Pricing
        </ul>
        <div class="cl-hero10__nav-end">
          <a class="cl-hero10__signin" href="#">Sign in</a>
          <a class="cl-hero10__deploy" href="#">Deploy now</a>
        </div>
      </nav>
    </div>
  </header>

  <main class="cl-hero10__main">
    <section class="cl-hero10__hero" aria-labelledby="cl-hero10-title">
      <a class="cl-hero10__announce" href="#">
        <span class="cl-hero10__announce-tag">4.0</span> Now running in 318 cities <svg 14×14 chevron/>
      </a>
      <h1 class="cl-hero10__title" id="cl-hero10-title">Ship to the edge <span>in one command.</span></h1>
      <p class="cl-hero10__sub">…three-line paragraph…</p>
      <div class="cl-hero10__actions">
        <a class="cl-hero10__cta" href="#">Start deploying free</a>
        <p class="cl-hero10__cmd"><span aria-hidden="true">$</span> <code>npx stratus deploy</code></p>
      </div>
      <dl class="cl-hero10__stats">
        <div class="cl-hero10__stat"><dt>Developers</dt><dd><span class="cl-hero10__num">2.4M</span><span class="cl-hero10__hint">+38% this year</span></dd></div>
        <div class="cl-hero10__stat"><dt>Uptime, last 12 months</dt><dd><span class="cl-hero10__num">99.995%</span>
          <span class="cl-hero10__bars" aria-hidden="true"><i></i>×9<i class="is-dip"></i><i></i><i></i></span></dd></div>
        <div class="cl-hero10__stat"><dt>Countries served</dt><dd><span class="cl-hero10__num">118</span><span class="cl-hero10__hint">318 edge locations</span></dd></div>
        <div class="cl-hero10__stat"><dt>Median latency</dt><dd><span class="cl-hero10__num">27 ms</span><span class="cl-hero10__hint">p95 under 60 ms</span></dd></div>
      </dl>
    </section>
  </main>
</div>
```

Order matters: **grid, glow, bar, main** — the two decorative layers precede the chrome so `z-index: -2 / -1` and
`isolation: isolate` keep them under everything without a stacking hack.

## 3. CSS token block (verbatim shape to port)

```css
.cl-hero10 {
  --cl-hero10-bg: #07090f;
  --cl-hero10-ink: #f4f6fb;
  --cl-hero10-muted: #9aa3b8;
  --cl-hero10-line: rgba(255, 255, 255, .1);
  --cl-hero10-sky: #7dd3fc;
  --cl-hero10-violet: #a78bfa;
  --cl-hero10-gutter: clamp(16px, 4vw, 40px);
  min-height: 100vh; overflow: hidden; isolation: isolate;
  font-size: 16px; line-height: 1.55;
}
```

Semantic values that never become tokens (keep them as `@theme` entries anyway, they recur):

```css
--hint: #86efac;  /* +38% this year, 318 edge locations, p95 under 60 ms */
--bar:  #4ade80;  /* 11 of 12 uptime bars */
--dip:  #facc15;  /* the 10th bar */
--panel-top: rgba(255,255,255,.043);  --panel-bot: rgba(255,255,255,.015);
--dropdown: #0b0e17;                   /* open mobile nav only */
```

Sheet census for reference: **13,804 B · 79 style rules · 6 `@font-face` · 1 `@keyframes` · 4 media queries**
(`960`, `860`, `520`, `prefers-reduced-motion`) · **7 custom properties** · 5 transitions · 1 `box-shadow` ·
9 gradients · 4 `!important` · 22 `revert` declarations (the `all: revert` host reset at the top of the file, which
is only there to neutralise a host page's Bootstrap reboot — **do not port it**).

## 4. Screenshot read (`hero-10.jpg`, 1200 × 972, AVIF behind a `.jpg`)

- **A macOS browser mock-up** on a near-white ground: traffic lights, a `preview.colorlib.com` URL pill, rounded
  window corners and a soft drop shadow. The page inside is ≈ **1112 px** wide, i.e. a ~1440 desktop viewport
  scaled down. **Do not adopt the frame** — no white surround, no rounded window, no shadow.
- Inside the frame the read is exactly the CSS: near-black ground, a faint **56 px grid** that is brightest behind
  the headline and gone at the edges, a **violet/sky bloom** above the fold centre, the **white pill** with a
  gradient "4.0" tag, the **headline in two lines** — white then sky-to-violet — a three-line grey sub, the **white
  CTA** with a visible sky bloom under it, the **dark bordered chip** with a `$` prompt, and the **four-cell band**
  with hairline dividers and the little green strip under "99.995%".
- The screenshot confirms two things the CSS alone does not make obvious: the glow reads as a **soft violet haze**,
  not a hard disc (blur 20 + the mask's falloff), and the grid's brightest zone is **behind the headline**, not at
  the top of the page (`at 50% 30%`).
- The screenshot is a **static frame of the 8 s breathe** — do not match its glow opacity exactly; the animation
  moves between `opacity: 1` and `opacity: .7`.

## 5. Section-by-section fidelity notes

### 5.1 Shell + background

- Ground `#07090f` on both `<body>` and the shell. `min-height: 100vh` + `overflow: hidden` is the whole trick:
  the glow starts at `top: -260px` and is **clipped**, which is why it reads as light spilling in from above.
- Grid: `background-image: linear-gradient(line 1px, transparent 1px), linear-gradient(90deg, line 1px,
  transparent 1px)`, `background-size: 56px 56px`, `background-position: center top`, then
  `mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 75%)`. Computed mask drops the
  `ellipse` keyword (`radial-gradient(70% 60% at 50% 30%, …)`) — same thing. Keep `-webkit-mask-image`.
- Glow: 900 × 520 at `top: -260`, `left: 50%`, `translateX(-50%)`, radius 50 %, `blur(20px)`, radial
  `closest-side` with `rgba(125,211,252,.35)` at 0, `rgba(167,139,250,.18)` at 55 %, transparent at 100 %.
  `closest-side` on this box makes the gradient's radii **half of each side** — **450 px horizontally, 260 px
  vertically** — so the paint is a 900 × 520 ellipse softened by the 20 px blur.
- **The rect lies:** the breathe keyframe scales it to 1.08, so `getBoundingClientRect()` returned 910.61, 914.26,
  926.32, 931.36, 950.46 across samples while `offsetWidth` stayed **900**. Assert the offset box.

### 5.2 Header bar

- The bar is **translucent, not solid**: `rgba(7,9,15,.5)` + `backdrop-filter: blur(10px)` over a 1 px bottom
  rule. On a flat dark page the blur has nothing to blur, so it reads as a slightly darker strip — keep it anyway,
  it is what keeps the bar legible if the grid ever scrolls under it.
- Inner row is `max-width: 1200` with `gap: 36`, so the wordmark sits at x 160 on a 1440 viewport (120 shell inset +
  40 gutter).
- The nav is `flex: 1` + `space-between`: links left, "Sign in"/"Deploy now" right, one flex child doing both jobs.
- Wordmark is 18 px/600 with `letter-spacing: -.02em` (−0.36 px) — the same negative tracking family as the
  headline, one step milder.
- **Menu button at ≤860 is 42 × 42** with radius 10, a `1px` line border and a `4 %` white fill; it pushes itself
  right with `margin-left: auto`. The bar grows **67.47 → 71** because 42 + 2 × 14 padding + 1 border = 71.
- **Dropdown geometry:** the panel is `position: absolute; top: 100%` inside `.cl-hero10__bar`, which has a
  1 px bottom border, so the panel's top edge is at **y 70** on a 71-tall bar (absolutely positioned children are
  placed against the **padding box**). At 390 the panel is **390 × 306.84**; its links are **50.34** tall
  (17 px text + 12 px vertical padding + 2 px line slack) and its two end buttons differ by 2 px —
  **176 × 48.47** for the bordered sign-in against **174 × 46.47** for the unbordered deploy.
- **Progressive by design:** the media query only opens the dropdown when the script has added `.is-enhanced`, and
  the `:not(.is-enhanced)` rule sets `flex-wrap: wrap` on the row, the nav and the link list. Without JS the nav
  wraps under the wordmark and stays usable. Port this with a `useEffect` that sets a state flag on mount.

### 5.3 Announcement pill

- `inline-flex`, radius 999, `padding: 4px 12px 4px 4px` — the **4 px left padding is what makes the tag look
  inset**, and it is the only asymmetry in the component. `gap: 10`.
- Tag is 12.5 px/**700** ink on a 90° sky→violet gradient, 41 × 23.38. It is the page's only bold-700 text.
- It keeps **255 px** width at every viewport from 320 to 1920: inline-flex never wraps, and the sentence is short
  enough. If the port's copy is longer, the pill will wrap at 320 — keep the sentence short.
- Hover changes only the **border** (`rgba(125,211,252,.5)`), no fill, no lift.

### 5.4 Headline

- Size is `clamp(2.6rem, 1.2rem + 5.4vw, 5.8rem)`: **41.6** at 320 (the min), **71.04** at 960, **92.8** from vw
  **1364** (the max). `line-height: 1`, `letter-spacing: -.05em` (−4.64 at 92.8), weight **600**.
- The second line is a **`display: block` `span`**, not a `<br>`: that is what lets `background-clip: text` paint a
  single gradient across the whole line. Its gradient is `#bae6fd → #7dd3fc 35% → #a78bfa` at 90° — a **lighter**
  sky at the start than the token `#7dd3fc`, which is why the left of the line looks paler.
- `text-wrap: balance` plus the block span make the line ladder odd: **4 lines at ≤326 → 3 at 328–338 → 2 at 340+**,
  and at 320 the four lines are **127.5 / 160.4 / 108.5 / 191.4** wide, i.e. the **tail alone wraps to two**.
- The tail's computed `color` is still `#7dd3fc`; only `-webkit-text-fill-color: transparent` hides it. In the port
  keep a real `color` for forced-colors mode and set the fill on the gradient layer.

### 5.5 Sub-paragraph

- `clamp(1rem, .96rem + .3vw, 1.17rem)` → **18.72** from vw 1120; `max-width: 38em` resolves to **711.36 px**
  because `em` is the element's own size (38 × 18.72). It is **wider than the `h1`** at 1440 (682.41), which is
  intentional — the paragraph's optical measure is set by the em cap, not by the headline's line box.
- Line count: **5 at 320–368 · 4 at 390–480 · 3 at 521+**.

### 5.6 Action row

- CTA `min-height: 50`, `padding: 0 24`, radius 10, `linear-gradient(180deg,#fff,#dfe5f2)` with the ink label
  forced by `!important` in the reference (a base `a{color:inherit}` would otherwise inherit the ink anyway — but on
  a white fill the port should just set `text-ground`).
- The **shadow is the flourish**: a 1 px white ring plus `0 10px 30px -10px rgba(125,211,252,.6)`, i.e. a **sky**
  bloom, not black. In the screenshot it reads as a light haze under the white pill.
- Command chip: same height and radius, `1px` line border, `3 %` white fill, muted `$` + ink `<code>`, mono at
  14.5 px. The `$` is `aria-hidden` but **keep it out of the accessible name**, or the sentence reads "dollar npx…".
- At ≤520 the row is `width: 100%` and each child `flex: 1 1 100%` → two **full-width 50 px** rows **12** apart
  (**112** total). At 521 it is a single **434.88** row again.

### 5.7 Stats band

- One `dl` with four `div` wrappers — `dl > div > dt + dd` is the valid grouping and it also gives the grid its
  cells. Radius 20, 1 px hairline, the only gradient fill on the page besides the CTA and the tag.
- **Dividers are left border only**, added by `.stat + .stat`. The 960 query removes it from cell 3 and adds
  `border-top` to cells 3–4, so the 2 × 2 layout keeps exactly one rule per seam and no doubled edges.
- Numbers are `clamp(1.9rem, 1.4rem + 1.5vw, 2.7rem)` → **43.2** at 1440 (capped from vw 1387), weight 600,
  `letter-spacing: -.04em`, `line-height: 1.05`, **`tabular-nums`** — the tabular flag is what keeps "2.4M",
  "99.995%", "118" and "27 ms" optically aligned across cells.
- Hint line is `#86efac` at 13 px — a green that appears nowhere else on the page and is the only "success" colour.
- **Uptime strip:** 12 bars, `flex: 1`, `max-width: 10`, radius 2, `gap: 3`, the **10th** `#facc15`. At 1440 each bar
  is 10 wide and the strip **stops 73.5 px short** of the cell's right edge (12 × 10 + 11 × 3 = 153 inside 226.5).
  At 320 the bars shrink to **6.41** each inside 110 — `flex: 1` with `max-width` is a ceiling, not a fixed size.
- The strip is decorative but its **meaning is content**: pair it with an `sr-only` sentence ("99.99% uptime across
  the last twelve months") so the number is not orphaned from its visual.
- Cell heights are content-driven: the band is **148.42** at 1440, **282.38** at 960 (two rows), **268.97** at 521
  (two rows, full padding), **231.75** at 520 (two rows, tight padding) and **269.13** at 320 (the `dt` wraps and the
  hint wraps). Non-monotonic — assert the values, not a trend.

### 5.8 Motion

- Exactly **one** `@keyframes` (`cl-hero10-breathe`, 50 %: `opacity: .7; scale(1.08)`) on the glow, 8 s
  ease-in-out infinite; plus five `transition` declarations on hover colours and the CTA lift.
- The reduced-motion block zeroes **both** with `!important` on the universal descendant selector. Measured:
  `animation-name: none`, `transition-duration: 0s`, document height unchanged.
- No scroll effects, no parallax, no observers — this is the least behavioural hero in the family.

## 6. Source → React adaptation table

| Reference | Port | Why |
| --- | --- | --- |
| `.cl-hero10` shell with the `all: revert` host reset | `<div className="relative isolate flex min-h-screen flex-col overflow-hidden …">` | the reset exists only to beat a host page's Bootstrap; Tailwind preflight is the port's reset |
| `--cl-hero10-*` custom properties | `@theme` tokens (`--color-ground`, `--color-ink`, …) + `bg-ground`, `text-ink` | repo rule: tokens in `@theme`, no raw hex in components |
| inline 24 px SVG triangle with `linearGradient` | lucide `Triangle` filled via `fill="url(#…)"`, or an inline SVG kept verbatim | the gradient mark has no lucide equivalent |
| two inline SVGs swapped by `.is-open` CSS | one `<button>` with `{open ? <X/> : <Menu/>}` | React state replaces the CSS display swap |
| `.cl-hero10__link` colour from the class | `text-muted hover:text-ink` on the element | the reference's `a{color:inherit}` repaints every single-class colour to ink |
| `h1 … <span>` block tail | `<span className="block bg-[linear-gradient(…)] bg-clip-text text-transparent">` | same mechanism, one declaration |
| `<dl>` grid with `.stat + .stat { border-left }` | `border-l border-line` from the second child, `first:border-l-0` | Tailwind-friendly equivalent, same 1 px result |
| `repeat(4, minmax(0,1fr))` at ≥961 | `min-[961px]:grid-cols-4` (not `lg:`) | `lg` is 1024 in Tailwind; the reference breaks at 960 |
| 12 hand-written `<i></i>` | `Array.from({ length: 12 })` with `index === 9 && 'bg-dip'` | one data-driven source of truth for the strip |
| 30-line `initMenu()` IIFE | `useEffect` + `useState` toggling `is-open`, `aria-expanded`, `aria-label`, plus `Escape` / outside-click / media-query listeners | the listeners must be cleaned up |
| nine `href="#"` | real anchors + two external Component Dock links | repo rule: no dead anchors in a shipped template |
| no footer | slim Component Dock strip | repo rule: footer links `https://www.componentdock.com/` |

**Copy deltas** (must not survive): product name "Stratus", the command `npx stratus deploy`, "318 cities",
"2.4M developers", "99.995%", "118 countries", "27 ms", "p95 under 60 ms", "+38% this year", "318 edge locations"
and the whole sub-paragraph. Keep the **shape**: version tag + reach sentence, two-part headline, three-line sub,
CTA + one terminal line, four metrics of which one is a percentage with a bar strip.

**Fonts.** The reference ships **one variable binary per subset** (Geist latin 29,288 B, latin-ext 16,540 B,
each copied under four weight names; only 400/600/700 are declared, so the 500 files are dead weight and weight 500
falls back to 400). Proved variable by serving that binary with `font-weight: 100 900`: 40 px advances
**524 / 537 / 545 / 557 / 566 / 576 / 586 / 603** for **100 / 300 / 400 / 500 / 600 / 700 / 800 / 900**. Through the
shipped sheet: **400 = 545, 500 = 545, 600 = 566, 700 = 576, 800 = 576**. Load the Google Fonts twin,
`css2?family=Geist:wght@400..700&display=swap` (**200**), and ask for nothing above 700.

**Icons.** `Triangle` (24), `Menu` (20), `X` (20), `ChevronRight` (14). Nothing else on the page is an icon.

## 7. Sibling comparison (the 12-variant `hero` family)

| Variant | Name | Device | Height at 1440 |
| --- | --- | --- | --- |
| 01 | proscenium | 100vh page carrying a perspective-tilted mock panel | **900** exactly, no scroll |
| 02 | afterglow | software hero (see `references/run-2026-10-26-afterglow.md`) | — |
| 03 | presswork | shipped product hero (`references/run-2026-10-26-presswork.md`) | — |
| 04 | tendril | floating animated devices, 8 `@font-face` over 2 binaries | — |
| 05 | epistle | tall single-column hero | **929** (900 only from 961 to 1192) |
| 06 | overtone | shipped product hero (`references/run-2026-10-26-overtone.md`) | — |
| 07 | soapbox | event hero with a live countdown | non-monotonic ladder |
| 08 | trattoria | full-bleed photo, `main{align-items:flex-end}` | 900 in the middle bands |
| 09 | belvedere | arch portrait + rotating sticker, 0 JS | **944.28** |
| **10** | **virga** | **masked grid + breathing glow + gradient tail** | **916** |

What is **new** in Virga against the nine:

1. **The background does the work.** Every earlier variant put its identity in a photograph, an illustration or a
   shaped frame; this one has **zero images** and builds the whole look from two gradients, a mask and a blur.
2. **The second headline line is painted, not highlighted.** Belvedere used an inline `<mark>`; Virga uses a block
   `span` with `background-clip: text`, which means the gradient spans the **whole line** and the line break is
   structural (a `block`), not a `<br>`.
3. **A terminal chip as the secondary action.** It is the family's first non-button secondary CTA: no border-radius
   difference, no shadow, just a mono line — and it carries the product's install command as **content**.
4. **A metrics band with a chart-like strip.** Four `dt`/`dd` cells is belvedere's territory, but cell 2 replaces its
   hint line with a 12-bar strip, so one cell is 16 px taller than its peers and the strip has to flex-shrink at 320.
5. **Only one breakpoint trio**, all narrow-ladder: **960** (band), **860** (chrome), **520** (actions + band
   padding). There is no layout split, no two-column hero, no stacking at 900 — the page is a single centred column
   at every width, so the ladder is entirely about type and grid density.
6. **The height curve inverts twice** (861–960 is taller than 1440; 328–338 is shorter than 320) — proscenium and
   belvedere both had monotonic-ish curves. Assert the ladder, never the trend.

## 8. Traps (measured, not inferred)

1. **A base `a { color: inherit }` (0,1,1) beats every single-class link colour (0,1,0).** The nav links,
   "Sign in" and the pill's sentence all **render `#f4f6fb`**, not their declared `#9aa3b8` / `#c6ccda` — verified
   by `getComputedStyle` on all four links. Only `.deploy` and `.cta` keep their colours, and only because they
   carry `!important`. Fix in the port (set the colour on the element); the reference's "muted nav" is a fiction.
2. **The glow's rect is animation-phase dependent** — 910.61 / 914.26 / 926.32 / 931.36 / 950.46 across samples of a
   **900** px box. Use `offsetWidth` / `offsetHeight`.
3. **The document is 916 at 1440, not 900** — a `min-height: 100vh` floor plus content that outgrows it. `900`
   holds only in bands (340–860, 961–1202).
4. **The height ladder is non-monotonic in both directions**: 942 at 960 → 900 at 961, and 994 at 320 → 933 at 328 →
   900 at 340. The 2-column band is *taller* than the 4-column one, and the tight 520 cells make the band *shorter*
   than at 521 (268.97 → 231.75).
5. **The headline goes 4 → 3 → 2 lines as the viewport grows** (seams at 326/328 and 338/340), and it is `text-wrap:
   balance` plus a block span, so the tail can wrap **inside** the second line at 320.
6. **The bar's dropdown starts at y 70 on a 71-tall bar** — `top: 100%` resolves against the padding box, and the
   1 px bottom border is outside it.
7. **The dropdown's two end buttons are 176 and 174 wide** — the sign-in carries a 1 px border, and `flex: 1` splits
   the remainder after the borders.
8. **The uptime strip stops short** (153 of 226.5 used at 1440) because `max-width: 10` caps `flex: 1`; at 320 the
   same bars shrink to **6.41**. Never write a fixed bar width.
9. **`500` weight does not exist in the sheet** — six `@font-face` for 400/600/700 over one variable binary; a 500
   request renders the 400 face (identical 545 px advance). 800 clamps to 700.
10. **`.cl-icon` is dead** (declared, never used) and `.is-enhanced` / `.is-open` are JS-only states — a naive
    "declared vs markup" diff reports three misses that are not defects.
11. **`background-clip: text` needs a real fallback colour.** The reference sets `color: #7dd3fc` and hides it with
    `-webkit-text-fill-color: transparent`; keep the `color` so forced-colors / print does not lose the line.
12. **The screenshot is a mock-up, not the page.** Its white surround, window chrome and shadow are not part of the
    design, and its glow is a single frame of the 8 s breathe.
