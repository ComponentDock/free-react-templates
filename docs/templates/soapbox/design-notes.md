# Soapbox — design notes (ColorLib "Hero V07", the `hero` family's seventh variant)

Companion to `openspec/specs/template-soapbox/spec.md`. Everything below was measured on **2026-10-26** against
the live preview with `curl -4` (HTTP facts, bytes, sha256) and Playwright Chromium (layout, computed styles),
motion disabled unless a probe says otherwise.

## 1. Where the reference lives

| thing          | URL / path                                                    | reading |
| -------------- | ------------------------------------------------------------- | ------- |
| ColorLib page  | https://colorlib.com/wp/template/hero-07/                      | 200, 113,911 B, `<title>` "Hero V07 - Free Bootstrap Hero Sections 2026 - Colorlib", `datePublished` 2026-09-25T15:09:05+00:00, "the download is 171 KB" |
| preview (live) | https://preview.colorlib.com/theme/bootstrap/hero-07/          | **200, 5,168 B** — the slug-only `theme/hero-07/` is **404 (9 B)**, `theme/bb/hero-07/` is **404 (9 B)** |
| stylesheet     | `…/css/style.css?v=0a2ee79b`                                   | 15,352 B, 692 lines, sha256 `477fe309b2bb61a1…` (identical in the archive) |
| script         | `…/js/snippet.js?v=c3ce2cf4`                                   | 2,822 B, 78 lines, sha256 `4dedd169d14bf033…` (identical in the archive) |
| archive        | https://preview.colorlib.com/downloads/free/hero-07.zip         | 200, 174,853 B (170.8 KiB), 15 entries = 4 dirs + 11 files |
| screenshot     | https://colorlib.com/wp/wp-content/uploads/sites/2/hero-07.jpg  | 200, 53,054 B, **AVIF behind a `.jpg`**, 1200 × 972 |
| inner pages    | `index.html` 200 (5,168 B, byte-identical to the directory URL) | `schedule.html` / `speakers.html` / `venue.html` / `tickets.html` / `sponsors.html` / `about.html` → **404 (9 B)** |

`diff` of the live HTML against `out/hero-07/index.html`: **identical except the `<head>`** (robots pair, cdnjs
`dns-prefetch`, `fetchpriority`, `?v=` on both assets). CSS and JS are byte-identical, so the strongest claim
available is the checked one: **live preview verified, the archive is its un-versioned twin**.

The README advertises `index.html`, `css/style.css`, `js/snippet.js`, `fonts/` **and `images/`** — and there is no
`images/` folder and no image file anywhere in the 15 entries. This is the **sixth consecutive** variant whose
README claims an `images/` directory it does not ship (Hero V06 was the one exception). The page itself holds
**0** `<img>`.

## 2. DOM skeleton (as shipped)

```html
<div class="cl-hero07">                                     <!-- min-height:100vh, flex column, overflow:hidden, #1b2cf5 -->
  <div class="cl-hero07__deco" aria-hidden="true">           <!-- absolute inset 0, z-index -1 -->
    <span class="cl-hero07__ring cl-hero07__ring--1"></span> <!-- 64vw / max 900, 1px white 16% -->
    <span class="cl-hero07__ring cl-hero07__ring--2"></span> <!-- 46vw / max 660, 2px dashed lime 35%, spin 60s -->
    <span class="cl-hero07__ring cl-hero07__ring--3"></span> <!-- 26vw / max 380, radial #0d1690 glow -->
  </div>

  <header class="cl-hero07__bar">                            <!-- 1440 × 92.8 -->
    <div class="cl-hero07__bar-inner">                       <!-- 1280 × 92.8, padding 22px 48px, gap 32 -->
      <a class="cl-hero07__logo" href="#">
        <svg width="30" height="30">…lime diamond + blue cross…</svg>
        FRONTEND/NORTH                                       <!-- 17px / 700 / .04em -->
      </a>
      <button class="cl-hero07__menu-btn" type="button" aria-expanded="false"
              aria-controls="cl-hero07-nav" aria-label="Open menu">…</button>   <!-- display:none at ≥861 -->
      <nav class="cl-hero07__nav" id="cl-hero07-nav" aria-label="Main">         <!-- flex:1, justify-end, gap 24 -->
        <ul class="cl-hero07__links">                        <!-- flex, gap 28 -->
          <li><a class="cl-hero07__link" href="#">Speakers</a></li>
          <li><a class="cl-hero07__link" href="#">Schedule</a></li>
          <li><a class="cl-hero07__link" href="#">Venue</a></li>
          <li><a class="cl-hero07__link" href="#">Sponsors</a></li>
        </ul>
        <a class="cl-hero07__tickets" href="#">Tickets</a>    <!-- 105 × 48.8, 2px lime border, radius 999 -->
      </nav>
    </div>
  </header>

  <main class="cl-hero07__main">                             <!-- flex:1, display:flex, align-items:center -->
    <section class="cl-hero07__hero" aria-labelledby="cl-hero07-title">   <!-- 1.35fr / .65fr, gap 72 -->
      <div class="cl-hero07__copy">                          <!-- 750.59 × 503.34 -->
        <p class="cl-hero07__edition">The 6th edition &middot; 2 days &middot; 1 track</p>
        <h1 class="cl-hero07__title" id="cl-hero07-title">
          <span class="cl-hero07__t1">Frontend</span>
          <span class="cl-hero07__t2">North <span class="cl-hero07__year">2027</span></span>  <!-- flex row, wraps -->
        </h1>
        <p class="cl-hero07__sub">Two days of honest talks on CSS, accessibility, performance and design systems, …</p>
        <dl class="cl-hero07__facts">                        <!-- flex-wrap, gap 16/40, 1px top rule -->
          <div class="cl-hero07__fact"><dt>When</dt>
            <dd><time datetime="2027-03-18">18</time>&ndash;<time datetime="2027-03-19">19 March 2027</time></dd></div>
          <div class="cl-hero07__fact"><dt>Where</dt><dd>Manchester Central, UK</dd></div>
          <div class="cl-hero07__fact"><dt>Speakers</dt>
            <dd><span class="cl-hero07__faces" aria-hidden="true">           <!-- 3 × 30px, -8 overlap -->
                  <span style="--c:#ffb4a2">NO</span>… </span>24 talks</dd></div>
        </dl>
      </div>

      <aside class="cl-hero07__card" aria-labelledby="cl-hero07-count-title">  <!-- 361.41 × 355.41, lime, radius 28 -->
        <div class="cl-hero07__card-head">
          <h2 class="cl-hero07__card-title" id="cl-hero07-count-title">Doors open in</h2>
          <span class="cl-hero07__live"><span aria-hidden="true"></span>Early bird</span>
        </div>
        <div class="cl-hero07__count" role="timer" aria-live="off" aria-atomic="true"
             data-target="2027-03-18T09:00:00+00:00">          <!-- repeat(4,1fr) = minmax(auto,1fr) -->
          <div class="cl-hero07__unit"><span class="cl-hero07__num" data-unit="days">000</span>
               <span class="cl-hero07__lbl">Days</span></div>
          … hours / minutes / seconds …
        </div>
        <p class="cl-hero07__price"><strong>&pound;299</strong> early bird &middot; <s>&pound;449</s> from 1 January</p>
        <a class="cl-hero07__cta" href="#">Get your ticket <svg width="20" height="20">…arrow…</svg></a>
        <a class="cl-hero07__secondary" href="#">See the full schedule</a>
      </aside>
    </section>
  </main>
</div>
```

No `<footer>`, no `<article>`, no `<figure>`, no form. Three ids: `cl-hero07-nav`, `cl-hero07-title`,
`cl-hero07-count-title`.

## 3. Token reference (verbatim from `css/style.css`)

```css
body { margin: 0; background: #1b2cf5; font-family: "Space Grotesk", system-ui, …; }

.cl-hero07 {
  --cl-hero07-blue:   #1b2cf5;   /* page ground, CTA fill */
  --cl-hero07-deep:   #0d1690;   /* card shadow, CTA hover */
  --cl-hero07-lime:   #d7ff3a;   /* accent: logo, labels, tickets border, year stroke, card */
  --cl-hero07-ink:    #0a0f3d;   /* card text, count tiles, chip */
  --cl-hero07-soft:   #dfe3ff;   /* standfirst + edition pill (NOT the nav links — see §7) */
  --cl-hero07-gutter: clamp(16px, 4vw, 48px);
  min-height: 100vh; overflow: hidden; color: #fff; font-size: 16px; line-height: 1.55;
  position: relative; isolation: isolate; background: var(--cl-hero07-blue);
}

/* the only other literal colours */
.cl-hero07__lbl        { color: #c3c8f0; }                       /* tile labels */
.cl-hero07__faces span { color: var(--cl-hero07-ink); background: var(--c); }
/* rgba() set: white .07 (grid) .12 (edition) .16 (ring 1) .22 (facts rule),
   lime .35 (ring 2), deep .9→0 (ring 3 glow), black .5 (menu panel shadow) */

.cl-hero07__title  { font-size: clamp(3.2rem, 1rem + 8.4vw, 9.4rem); font-weight: 700;
                     line-height: .86; letter-spacing: -.055em; text-transform: uppercase; }
.cl-hero07__year   { color: transparent; -webkit-text-stroke: 2px var(--cl-hero07-lime); letter-spacing: -.03em; }
.cl-hero07__num    { font-size: clamp(1.7rem, 1.2rem + 1.2vw, 2.4rem); font-weight: 700;
                     font-variant-numeric: tabular-nums; letter-spacing: -.03em; line-height: 1.1; }
.cl-hero07__sub    { font-size: clamp(1rem, .96rem + .3vw, 1.18rem); max-width: 36em; }
.cl-hero07__hero   { grid-template-columns: minmax(0,1.35fr) minmax(0,.65fr);
                     gap: clamp(32px,5vw,80px);
                     padding: clamp(24px,4vw,48px) var(--cl-hero07-gutter) clamp(40px,6vw,72px); }
.cl-hero07__card   { padding: clamp(20px,2.5vw,30px); border-radius: 28px;
                     box-shadow: 12px 12px 0 var(--cl-hero07-deep); }
@media (max-width: 1000px) { .cl-hero07__hero { grid-template-columns: 1fr; } .cl-hero07__card { max-width: 520px; } }
@media (max-width: 860px)  { …menu button 46px, nav absolute panel… }
@media (max-width: 520px)  { …logo 15px, stroke 1.5px, facts grid, shadow 8px, tiles 12px… }
```

## 4. The screenshot (visual read)

`hero-07.jpg` is a **macOS browser mock-up** — white ground, drop shadow, a `preview.colorlib.com` URL pill, the
page ~1120 px wide inside the frame, clock reading **142 days**. Do not adopt the frame; the live page is
edge-to-edge blue.

What the frame shows, in order: an electric-blue field with a faint white 64 px grid; a large hairline circle
bleeding off the top-right; a smaller dashed lime circle inside it; a barely-visible deep-blue glow behind the
card; the bar with a lime diamond-and-cross mark, `FRONTEND/NORTH`, four white links and a lime-outlined
**Tickets**; then `FRONTEND` in white caps and `NORTH` + an outlined `2027` beneath it; three lines of soft
lavender text; a hairline above `WHEN / WHERE / SPEAKERS` with three overlapping pastel avatar chips; and the
lime card — `Doors open in`, a dark `Early bird` chip, four dark tiles with big numbers, a price line with a
struck figure, a blue `Get your ticket` bar with an arrow, and an underlined secondary link — offset by a solid
deep-blue shadow to the bottom-right.

The mock-up and the live render agree on every one of those points, including the **white** Tickets label (the
stylesheet's lime is overridden — §7).

## 5. Section-by-section fidelity notes

### 5.1 The decoration layer

- `.deco` is `position:absolute; inset:0; z-index:-1; pointer-events:none`; `::before` paints two
  `linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px)` layers at `background-size: 64px 64px`
  (horizontal + vertical). The grid starts at the deco box (the root), **not** at the viewport, and it does not
  move with scroll.
- Three rings, all `top:50%; translateY(-50%); aspect-ratio:1; border-radius:50%`:
  `64vw`/max 900 at `right:-8vw` (1 px `rgba(255,255,255,.16)`), `46vw`/max 660 at `right:1vw`
  (2 px dashed `rgba(215,255,58,.35)`, `animation: spin 60s linear infinite`), `26vw`/max 380 at `right:11vw`
  (`radial-gradient(circle, rgba(13,22,144,.9), rgba(13,22,144,0) 70%)`).
- Measured at 1440: ring 1 **900 × 900 at (655.19, 0)**, ring 2 **738.51 at (726.35, 80.74)** — 738.51 is the
  *rotated* square's bounding box, not its 660 width — ring 3 **374.39 at (907.22, 262.8)**.
- At ≤860: ring 1 `120vw` at `right:-60vw`, ring 2 `90vw` at `-45vw`, both `top:30%`, ring 3 `display:none`.
- `overflow:hidden` on the root is what keeps the rings from creating a horizontal scrollbar; `scrollX` is 0 at
  every width measured, including 320.

### 5.2 The bar

- Inner: `max-width:1280; margin:0 auto; padding:22px var(--gutter); gap:32; display:flex; align-items:center`.
  Height is 92.8 at ≥861 (22 + 48.8 + 22) and **90** at ≤860 (22 + 46 + 22 — the button is shorter than the nav).
- Wordmark: `inline-flex; gap:10; 17px/700; letter-spacing:.04em`, a 30 × 30 inline SVG (lime diamond
  `M15 2 28 15 15 28 2 15z` + a blue `stroke-width:3` cross). Width **197.53**.
- Nav: `display:flex; flex:1; align-items:center; justify-content:flex-end; gap:24`. Links `gap:28`, each
  `padding:6px 0`, `16px/500`, with a lime 2 px **background-gradient underline** that grows from `0 2px` to
  `100% 2px` (`transition: background-size .3s, color .2s`).
- Tickets: `padding:10px 20px; border:2px solid lime; border-radius:999px; 17px/700`; hover inverts to ink on lime.
- Menu button: `display:none; place-items:center; width/height:46px; border-radius:50%; background:lime;`
  `color:ink; margin-left:auto` — it only appears inside the `is-enhanced` + `≤860` block.
- The bar is **not sticky** and has no shadow; it scrolls away with the page (there is nothing to scroll at 900
  tall, so this only matters below 1000).

### 5.3 The copy column

- `__copy` has **no rule** — it is the grid's first track (750.594 = 1.35 fr of 1184 after the 72 gap).
- Edition pill: `display:inline-block; padding:6px 14px; border-radius:999px; background:rgba(255,255,255,.12);
  14px/500; color:soft`. Over the blue it renders `#3645f6`.
- Title: two block spans; the second is `display:flex !important; flex-wrap:wrap; align-items:baseline;
  gap:0 .18em`. `text-transform: uppercase` means the markup can stay sentence-case ("Frontend"), the render is
  caps, and the accessibility tree reads "Frontend North 2027".
- The year: `color:transparent`, `-webkit-text-stroke:2px lime` (1.5 px at ≤520), `letter-spacing:-.03em`.
- Standfirst: `max-width:36em` = **679.68** at 18.88 px — it clamps 0.01 px inside the 750.59 column, so the copy
  is the measure at 1440 and the column is the measure from 1100 down.
- Facts: `dl` with three `div` wrappers; `dt` lime `12.5px/700/.14em` uppercase, `dd` `18px/600` white with
  `display:flex; gap:10`. The third `dd` carries the avatar cluster (`30px` circles, `margin-left:-8`, `2px solid
  blue` ring so the overlap reads) then "24 talks".
- At ≤520 the `dl` becomes `grid-template-columns: 1fr 1fr` and `:first-child { grid-column: 1 / -1 }`; `dd` drops
  to 16 px.

### 5.4 The card

- `position:relative; padding:30px; border-radius:28px; background:lime; color:ink;
  box-shadow:12px 12px 0 deep` (8 px at ≤520), `max-width:520` at ≤1000. Height is **content-driven**: 355.41 at
  1440, 375.48 at 1200 (price wraps), 352.52 at 1222, 318.88 at ≤520, 342.13 at 320 (price wraps again).
- Head: title `20px/700/-.02em`; the `Early bird` chip is `inline-flex; gap:7; padding:4px 10px; radius:999;
  background:ink; color:lime; 12.5px/700` with a **7 px** dot that blinks (`opacity .25` at 50 %, 1.4 s).
- Countdown: `display:grid; grid-template-columns:repeat(4,1fr); gap:8; margin-top:18`. `1fr` is
  `minmax(auto,1fr)`, so the tracks take min-content first — the single most-missed detail in this template.
- Tile: `display:grid; justify-items:center; padding:14px 4px 10px; border-radius:16; background:ink; color:#fff`;
  number `clamp(1.7rem,1.2rem+1.2vw,2.4rem)` with `tabular-nums`; label `11px/600/.1em` `#c3c8f0`.
- Price: `15px; margin-top:18`; `<strong>` 22 px. `<s>` is the browser default line-through (no extra colour).
- CTA: `display:flex; align-items:center; justify-content:space-between; padding:16px 22px; border-radius:16;
  background:blue; color:#fff !important; 17px/700`; `svg { transition: transform .2s }`, `:hover svg` +4 px.
- Secondary: `display:block; margin-top:12; font-weight:600; text-align:center; text-decoration:underline
  !important; text-underline-offset:3px`; it inherits the card's ink.

### 5.5 The script

`js/snippet.js` is one IIFE with two initialisers and no dependencies:

- `initMenu` — adds `is-enhanced` to `.cl-hero07__bar`, wires the button (`aria-expanded` + `aria-label`), the
  panel's link clicks, `Escape` (closes **and** refocuses the button), a document click outside the bar, and
  `matchMedia('(min-width: 861px)')`.
- `initCountdown` — parses `data-target`, caches the four `[data-unit]` nodes, `pad(n, 2)` (days `pad(d, 3)`),
  floors the difference, rewrites `aria-label`, swaps the head to "Doors are open" at zero, schedules the next
  tick at `1000 − (Date.now() % 1000) + 5`, and re-renders on `visibilitychange`.

Nothing else runs: no observers, no scroll handlers, no form handling, no third-party script.

## 6. Source → React adaptation

| source                                            | port                                                                   |
| ------------------------------------------------- | ---------------------------------------------------------------------- |
| `.cl-hero07` + `.deco` + 3 rings                   | `<EventShell>` with an `aria-hidden` `<Decoration>` holding three absolutely positioned spans; `isolation:isolate` + `-z-10` preserved |
| `header.__bar` + `__bar-inner`                     | `<SiteHeader>` (wordmark `<Logo>`, `<NavLinks>`, `<TicketsPill>`, `<MenuButton>`) |
| `h1.__title` with `__t1`, `__t2`, `__year`         | `<Title>{line1}{line2}<Year>2027</Year></Title>` — two blocks, the second a wrapping flex row |
| `dl.__facts` + `__fact` + `__faces`                | `<Facts items={FACTS} />` with `<Avatars />` inside the third `dd`      |
| `aside.__card`                                     | `<CountdownCard>` (`<CardHead>`, `<Countdown>`, `<PriceLine>`, `<TicketCta>`, `<ScheduleLink>`) |
| `data-target` + `snippet.js` countdown             | `useCountdown(TARGET, { now })` hook; returns `{days, hours, minutes, seconds, done}` |
| bar script (open/close/Escape/outside/861)          | `SiteHeader` state + `useEffect` listeners, all cleaned up             |
| no footer                                          | `<SiteFooter>` linking `https://www.componentdock.com/`                |

## 7. Defects and unrendered intent (all confirmed on the live page)

1. **The nav links and the Tickets label never take their declared colour.** `.cl-hero07 a { color: inherit }` is
   `(0,1,1)`; `.cl-hero07__link` and `.cl-hero07__tickets` are `(0,1,0)`. Computed: both render `#fff` — the nav
   loses its `#dfe3ff` and the pill loses its lime text. The `.link:hover { color:#fff }` rule is therefore a
   no-op and only the lime underline animates. The screenshot shows white, so this is what the design *looks*
   like; the port keeps white and adds the missing current-page marker.
2. **The menu button's focus ring is lime on lime (1.15 : 1).** The card already recolours its own ring to ink
   (`.cl-hero07__card a:focus-visible { outline-color: ink }`); the button has no such override.
3. **`pad(d, 3)` prints leading zeros:** "142" today, "099" at 99 days, "000" at the door. The markup's static
   "000 / 00 / 00 / 00" shows the same padding before the script runs.
4. **All eight anchors are `href="#"`** — every nav item, the pill, the CTA and the secondary link, with no inner
   page to point at (all six probed paths 404).
5. **The README advertises an `images/` folder that does not exist** (sixth variant in a row) — and there is no
   image in the design at all.
6. **`aria-live="off"` on the timer is correct, not a bug** — a per-second announcement would be worse than
   silence; the `aria-label` is there for on-demand reads.
7. **`.cl-icon` is dead again** (eighteenth consecutive snippet), and `__copy` / `__t1` carry no rules.

Nothing else was found: no contrast failure among the text pairs (the tightest is the edition pill at **4.96**), no
overflow at any width from 320 to 1440, no dead CSS that paints, and no duplicate ids.

## 8. Seams worth re-measuring if the copy changes

| seam                                        | measured                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------ |
| `h1` second line wrap                       | needs **273.98 px**; fits at content 274 (vw 306) and wraps at 273 (vw 305), title 88.06 → 132.09 |
| standfirst line count                       | 3 at 1440, 4 at 521/520, 5 at 390/360, 6 at 320                            |
| facts row wrap                              | one row from content **624.69** (vw 679 / 1064), two rows at **623.78** (vw 678 / 1060) |
| card price wrap                             | one line at card inner ≥ **286.09** (vw 1222), two at **285.80** (vw 1221) |
| countdown tile equality                     | unequal above 1000 (a card 520 wide at ≤1000 gives four equal tracks)    |
| bar height                                  | **92.8** at ≥861, **90** at ≤860                                          |
| document height, single-column band          | 1020 @1000, 1005 @960, 983 @900, 968 @861, 965 @860, 932 @768, 910 @700, 904 @679, 971 @678, 960 @640, 966 @521, 957 @520, 950 @480, 942 @430, 985 @390, 984 @360, 1031 @306, 1075 @305, 1032 @320 |

## 9. Sibling comparison (same family, 12 variants)

| variant | app        | ground / accent                          | device                                                      |
| ------- | ---------- | ---------------------------------------- | ----------------------------------------------------------- |
| 01      | proscenium | dark, product mock                       | 100vh page, one `<h1>`, no form                             |
| 02      | afterglow  | pill nav + dropdown                      | `backdrop-filter` containing-block trap                     |
| 03      | presswork  | editorial                                | rotating badge, `text-wrap:balance`                          |
| 04      | tendril    | two-phone mock                           | two variable font binaries, animated rects                  |
| 05      | epistle    | coral, newsletter field                  | pill field / focus-within                                   |
| 06      | overtone   | cream + ink bar, photography             | three radios swapping one `<img>`                            |
| **07**  | **soapbox**| **electric blue + lime, no photography** | **live countdown + outlined year + min-content tiles**       |

What is new here and worth carrying forward: the **only** variant with a live clock, the only one whose hero has
two `h2`-free columns of *type* rather than a media block, the first with a **hard offset** card shadow (all six
previous cards/panels used soft shadows), and the first whose declared link colours lose the cascade.
