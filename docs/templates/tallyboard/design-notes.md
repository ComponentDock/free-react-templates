# Tallyboard — design notes (ColorLib Pricing Table V02, `pricing-table-02`)

Reference: <https://preview.colorlib.com/theme/bootstrap/pricing-table-02/> · Source:
<https://colorlib.com/wp/template/pricing-table-02/> · Spec: `openspec/specs/template-tallyboard/spec.md` ·
Tasks: `docs/templates/tallyboard/tasks.md`.

This file is the research record: what the page is made of, the tokens as shipped, the copy to use, the section
notes, the React mapping and the family comparison. Every number was measured on the live preview at 1440 × 900 with
node Playwright Chromium after `document.fonts.ready`, and re-measured on a port harness (the reference's own
stylesheet, `@font-face` replaced by a Google `<link>`, plus the prescribed copy) unless marked *reference only*.

## 1. Paper facts (verified 2026-11-11)

| Item | Value |
| --- | --- |
| preview (live) | `theme/bootstrap/pricing-table-02/` **200, 5,085 B**; slug-only **404 (9 B)**; `theme/bb/` **404 (9 B)** |
| stylesheet | `css/style.css?v=ed71bf2a` **11,546 B** sha256 `1deee5488522c6958d3614630b0cbefd2e66885d11b72132b923802ee151f862` |
| script | `js/snippet.js?v=d20d1742` **1,920 B** (52 lines) sha256 `53474a7060d52fdeceec4c3b6b15f742ddf3f89003320860b5aab4223057ea20` |
| archive | `downloads/free/pricing-table-02.zip` **254,156 B**; CSS **and** JS hash **identical** → *live preview verified; the archive is its un-versioned twin* |
| archive HTML | `index.html` **4,882 B** — differs from the live DOM only in `<head>` (robots metas, `dns-prefetch`, `fetchpriority`, `?v=`); **203 B** |
| ColorLib page | **200, 114,437 B**, `<title>` `Pricing Table V02 - Free Bootstrap Pricing Tables 2026 - Colorlib`, `h1` "Pricing Table V02", `datePublished` **2026-09-25T15:12:41+00:00**, download claim **248 KB** (archive 248.2 KiB ✓) |
| screenshot | `pricing-table-02.jpg` **200, 65,417 B, 1200 × 972**, a **real progressive JPEG** (the previous variant's AVIF-behind-`.jpg` trap does not repeat here) |
| fonts | 10 woff2 = **2 binaries**: latin **27,272 B** `cd8db90c…`, latin-ext **21,688 B** `0303e02b…`; `HVAR`/`MVAR`/`STAT` present → **variable** cut; 8 `@font-face` for 400/600/700/800; a `500` pair ships **undeclared and unused** |
| weight proof | canvas at 46 px, `Analytics that respects`: **507 (400) / 518 (700) / 533 (800)** — the axis is live, so an 800 heading is not synthesised |
| structure | 1 `main` · 1 `section` · 1 `h1` · 4 `h2` · 4 `article` · 4 `ul` · 15 `li` · **1 `button`** · 4 `a` · 1 `role="status"` · 0 `img`/`svg`/`form`/`input`/`footer` |
| anchors | **4**, all `href="#"` — **4 dead**; no `tel:`, no inner pages, no second document |
| media queries | 2 layout (`1080`, `600`) + 1 motion — **the fewest of any variant prepped so far** |
| keyframes | **0**; 4 transitions (track colour 250 ms, knob 300 ms with overshoot, side-label colour 200 ms, CTA background + transform 200 ms) |

## 2. DOM skeleton (verbatim shape, class names replaced by comments)

```
<main class="demo">                                     <!-- padding clamp(40,7vw,92) 16 -->
  <section class="section" aria-labelledby="h1">        <!-- 1200 max, 15/1.55, ink -->
    <header class="head">                               <!-- 680 centre -->
      <h1 id="h1">…</h1>                                <!-- clamp(30,4.5vw,48)/800, balance -->
      <p class="lede">…</p>                             <!-- 16.5 muted, balance -->
    </header>

    <div class="billing">                               <!-- flex wrap centre, gap 14, mt 36 mb 44 -->
      <span class="side" aria-hidden="true">Monthly</span>
      <button class="switch" type="button" aria-pressed="false">
        <span class="vh">Bill annually</span>           <!-- the ONLY accessible name -->
        <span class="knob" aria-hidden="true"></span>
      </button>
      <span class="side" aria-hidden="true">Annually <span class="save">Save 20%</span></span>
    </div>
    <p class="vh" role="status" aria-live="polite"></p> <!-- empty at load -->

    <div class="grid">                                  <!-- repeat(4,minmax(0,1fr)), gap 18 -->
      <article aria-labelledby="p1">
        <h2 id="p1">…</h2>
        <p class="views">…</p>
        <p class="price"><span class="amount">$<span class="num" data-monthly data-annual>…</span></span><span class="per">/ mo</span></p>
        <p class="note" data-monthly data-annual>…</p>
        <a class="cta" href="#">…</a>
        <ul class="list"><li>…</li>…</ul>
      </article>
      … three more, the third with `plan--pop` and a `<p class="flag">Best value</p>` first
    </div>
  </section>
</main>
<script src="js/snippet.js"></script>
```

Class names in the source: `cl-pricing02-demo`, `cl-pricing02`, `__head`, `__title`, `__lede`, `__vh`, `__billing`,
`__side`, `__save`, `__switch`, `__knob`, `__grid`, `__plan`, `--pop`, `__flag`, `__name`, `__views`, `__price`,
`__amount`, `__num`, `__per`, `__note`, `__cta`, `__list`. `.cl-icon` is declared and **never used** (no SVG on the
page); the tick is a CSS `::before` data-URI.

## 3. CSS token block (values as shipped, abridged)

```css
/* lines 8–61: the :where(html) … { all: revert } firewall — DO NOT PORT (Bootstrap neutralisation) */

body          { margin: 0; background: #fbf7ef;
                font-family: "Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.demo         { padding: clamp(40px, 7vw, 92px) 16px; }
.section      { --green: #14532d; --lime: #bef264; --ink: #1c1917; --muted: #57534e; --line: #e7e0d2;
                max-width: 1200px; margin: 0 auto; color: var(--ink);
                font-size: 15px; line-height: 1.55; }
.head         { max-width: 680px; margin: 0 auto; text-align: center; }
h1            { margin: 0 0 14px; font-size: clamp(30px, 4.5vw, 48px); font-weight: 800;
                letter-spacing: -.035em; line-height: 1.08; text-wrap: balance; }
.lede         { margin: 0; color: var(--muted); font-size: 16.5px; text-wrap: balance; }
.vh           { position: absolute; width: 1px; height: 1px; margin: 0; overflow: hidden;
                clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; }
.billing      { display: flex; flex-wrap: wrap; align-items: center; justify-content: center;
                gap: 14px; margin: 36px 0 44px; font-weight: 600; }
.side         { display: inline-flex; align-items: center; gap: 8px; color: var(--muted);
                transition: color .2s ease; }
.side:first-child, .is-annual .side:last-child { color: var(--ink); }
.is-annual .side:first-child { color: var(--muted); }
.save         { padding: 3px 10px; border-radius: 999px; background: var(--lime);
                color: #1a2e05; font-size: 12.5px; font-weight: 700; }
.switch       { position: relative; width: 60px; height: 34px; padding: 0; border: 0;
                border-radius: 999px; background: #a8a29e; cursor: pointer;
                transition: background-color .25s ease; }
.switch[aria-pressed="true"] { background: var(--green); }
.knob         { position: absolute; top: 4px; left: 4px; width: 26px; height: 26px;
                border-radius: 50%; background: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.25);
                transition: transform .3s cubic-bezier(.3,1.4,.5,1); }
.switch[aria-pressed="true"] .knob { transform: translateX(26px); }
.switch:focus-visible { outline: 3px solid var(--green); outline-offset: 3px; }
.grid         { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
.plan         { position: relative; display: flex; flex-direction: column;
                padding: 28px 24px 30px; border: 1px solid var(--line);
                border-radius: 22px; background: #fffdf8; }
.plan--pop    { border-color: var(--green); background: var(--green); color: #f7fee7; }
.flag         { position: absolute; top: 24px; right: 20px; margin: 0; padding: 3px 10px;
                border-radius: 999px; background: var(--lime); color: #1a2e05;
                font-size: 12px; font-weight: 700; }
.name         { margin: 0; font-size: 19px; font-weight: 700; }
.views        { margin: 4px 0 0; color: var(--muted); font-size: 14px; }
.plan--pop .views, .plan--pop .per, .plan--pop .note { color: #d9f99d; }
.price        { display: flex; align-items: baseline; gap: 6px; margin: 22px 0 2px; }
.amount       { font-size: 46px; font-weight: 800; letter-spacing: -.04em; line-height: 1;
                font-variant-numeric: tabular-nums; }
.per          { color: var(--muted); font-weight: 600; }
.note         { min-height: 23px; margin: 0 0 22px; color: var(--muted); font-size: 13.5px; }
.cta          { display: block; padding: 11px 16px; border-radius: 999px; background: var(--ink);
                color: #fff; font-weight: 700; font-size: 14.5px; text-align: center;
                text-decoration: none; transition: background-color .2s ease, transform .2s ease; }
.cta:hover    { background: #44403c; transform: translateY(-1px); }
.plan--pop .cta       { background: var(--lime); color: #1a2e05; }
.plan--pop .cta:hover { background: #d9f99d; }
.cta:focus-visible    { outline: 3px solid var(--green); outline-offset: 3px; }
.plan--pop .cta:focus-visible { outline-color: var(--lime); }
.list         { margin: 24px 0 0; padding: 0; list-style: none; }
.list li      { position: relative; padding: 5px 0 5px 26px; font-size: 14.5px; }
.list li::before { content: ""; position: absolute; top: 10px; left: 2px; width: 14px; height: 14px;
                background: url("data:image/svg+xml,…stroke='%2314532d' stroke-width='2.4'…") center / contain no-repeat; }
.plan--pop .list li::before { background-image: url("…stroke='%23bef264'…"); }
@media (max-width: 1080px) { .grid { grid-template-columns: repeat(2, minmax(0,1fr)); max-width: 720px; margin: 0 auto; } }
@media (max-width: 600px)  { .grid { grid-template-columns: minmax(0,1fr); } }
@media (prefers-reduced-motion: reduce) {
  .switch, .knob, .side, .cta { transition: none; }
  .cta:hover { transform: none; }
}
```

Only **five** custom properties exist, all on the section class (not `:root`) — the same scoping as the previous
variant, so tokens must be moved into `@theme` deliberately.

## 4. Screenshot read

`pricing-table-02.jpg` is **1200 × 972** and a **macOS browser mock-up**: three traffic lights, a URL pill reading
`preview.colorlib.com`, a soft shadow, a near-white surround. The page inside spans x 40…1157 (≈ **1113 px**) at a
scale of ≈ **0.773** of a 1440 viewport — sizes divide back exactly (the featured card measures 350 px wide in the
image → **452.8** tall, against **452.19** measured live), while y positions do not, because the window chrome sits
above the page.

What the image shows, and the live page confirms:

- a **warm cream ground** (`#fbf7ef`) with **no band, no gradient, no texture** and **no shadow under any card** —
  the only surfaces are the three near-white cards and the one solid green panel;
- a centred head: one heavy two-line headline and a two-line grey sub-paragraph — **no eyebrow, no button, no logo**
  (the previous variant's uppercase eyebrow does **not** exist here);
- a **centred billing row**: `Monthly` · a 60 × 34 grey track with the white knob at the left · `Annually` + a
  **lime "Save 20%" pill** — the pill is the only other lime object on the page;
- **four equal cards** with 24 px side padding, a 22 px radius and a hairline `#e7e0d2` border; the third is a
  **solid deep-green panel** with a **lime** "Best value" pill in its top-right corner, its plan name and views line
  in cream/tender-green, and a **lime CTA**;
- prices set huge (46 px) with the `$` inline and the "/ mo" qualifier small and baseline-aligned beside the digit;
- a small grey billing note under each price (`Billed monthly`), then the CTA, then a **tick-bulleted** list — the
  ticks are **dark green outlines**, not filled discs (a different family device from the previous variant's pastel
  discs);
- card 4's third bullet wraps to **two lines** (`Shared and embedded dashboards`) — visible in the screenshot, and
  load-bearing for the equal-height composition;
- **card 1's list is three items**, so it carries the most empty space at the bottom (55.94 px below its last bullet).

Do not adopt the window chrome, the window's rounded corners, the drop shadow or the near-white surround.

## 5. Prescribed copy (use verbatim; it reproduces the whole height ladder)

Brand: **Tallyboard** (cookie-free pageview analytics). No eyebrow — the reference has none.

| Slot | Copy |
| --- | --- |
| `h1` | `Pageview analytics priced by traffic` — **2** lines (103.66) at 1440, 1 line at 920, 2 again at ≤480 |
| lede | `Tallyboard counts pageviews without cookies or a consent banner. Choose a plan by monthly views and move up when your traffic does.` — **2** lines (51.13) at 1440 |
| side labels | `Monthly` / `Annually` + chip `Save 20%` |
| plan 1 | **Launch** · `25k views / month` · `$0` `/ mo` · note `Free forever` · CTA `Start for free` · bullets `1 website`, `90-day data history`, `Core dashboard` |
| plan 2 | **Grow** · `250k views / month` · `$15` → `$12` · note `Billed monthly` → `$144 billed yearly` · CTA `Start 30-day trial` · bullets `5 websites`, `3-year data history`, `Goals and UTM campaigns`, `Weekly email digests` |
| plan 3 (featured) | **Studio** · `1M views / month` · `$40` → `$32` · note `Billed monthly` → `$384 billed yearly` · flag `Best value` · CTA `Start 30-day trial` · bullets `30 websites`, `Unlimited data history`, `Funnels and revenue goals`, `Stats API and CSV export` |
| plan 4 | **Company** · `5M views / month` · `$100` → `$80` · note `Billed monthly` → `$960 billed yearly` · CTA `Start 30-day trial` · bullets `Unlimited websites`, `10 team members with roles`, **`Shared dashboards and embeds`** (the two-line one, 222 px at 14.5 px), `Priority support` |
| status | `Annual billing: prices shown per month, billed yearly.` / `Monthly billing.` |
| footer | `Component Dock` → `https://www.componentdock.com/` |

Copy arithmetic that matters: the headline must stay **two** lines at 1440 and the lede **two**; the four plan names
must fit one line at 236.5 px (the longest here is `Company`, 19 px/700 — all four do); the lede's `balance` wrapping
is what makes the head **168.78** rather than 194.31 (three lines).

## 6. Section-by-section fidelity notes

**Head (680 × 168.78 at (380, 92)).** `h1` `margin: 0 0 14px` then the lede. The head has **no** `margin-bottom`: the
billing row's `margin-top: 36` is the only clearance, which is why the row's top edge is at **296.78**
(= 92 + 168.78 + 36). At 1440 the `h1` is two lines of 51.84 and the lede two of 25.575 — 103.66 + 14 + 51.13.

**Billing row (1200 × 34 at y 296.78).** `flex-wrap: wrap`, `gap: 14`, weight 600. The two side spans are
`aria-hidden`; only the switch is focusable and the only text a screen reader gets from the control is its hidden
label. The active label is `#1c1917` and the inactive `#57534e`, swapped by one class on the section. The row is 34 px
tall because the switch is; the labels' line boxes (23.25 / 25.38) are centred inside it, which is why the chip's box
starts 4.31 px above the left label's top.

**Switch (60 × 34).** A track (`border: 0`, radius 999) plus a 26 px knob at 4/4. **State is carried three ways** —
`aria-pressed`, the track fill (`#a8a29e` → `#14532d`), and the knob's `translateX(26px)`. The knob's easing
`cubic-bezier(.3,1.4,.5,1)` **overshoots**: measured `matrix(1,0,0,1,27.2701,0)` right after the click, `26.8408` at
~100 ms, exactly `26` by ~300 ms. Ports that use `ease` or `ease-out` lose the small bounce and read "flat".

**Grid (1200 × 452.19 at (120, 374.78)).** Four 286.5 px columns, 18 px gaps. `minmax(0,1fr)` matters: with plain
`1fr` the longest bullet (`Shared dashboards and embeds`, 222 px) sets a column floor and the 1200 px grid would
overflow. The four cards are the **same height** and their internal blocks align row-by-row across cards, because
every name, views line and note is one line — this design has **no** `min-height` alignment device on the price row
(that was the previous variant's trick).

**Featured card (third).** `border-color` and `background` both `#14532d`; body in `#f7fee7`, muted in `#d9f99d`; the
CTA is lime. **Nothing about its box changes** — no 2 px border, no negative margin, no `pt-12`, no shadow. This is the
family's opposite treatment to the previous variant and the single easiest thing to get wrong by pattern-matching
siblings.

**Flag (`Best value`).** `position: absolute; top: 24px; right: 20px`, **inside** the card — 13.22 px below the card's
top edge, not straddling it. Its box (85 × 24.59 in the reference, 79 in the port) overlaps the plan name's line box
vertically (name top 403.78, flag top 399.78, flag bottom 424.37) but not horizontally, because the name is left
aligned and short. Right-anchored: any change to the label's width moves its **left** edge, never its right.

**Card stack.** 28 padding + 29.44 name → 4 → 21.69 views → 22 → 47.25 price (+2) → 23 note → 22 → 44.47 CTA → 24 →
list. The price row's `margin-bottom: 2` plus the note's `min-height: 23` is what keeps the CTA at y 575.16 even if a
note's text changed length; the CTA is a block at 100 % of the 236.5 px content box (a 286.5 card minus 2 × 24 and
2 × 1 px border).

**Bullets.** 26 px left padding with a 14 px tick at `left: 2`, `top: 10` — so the tick's centre sits at 9 px from the
item's left edge and its top 5 px below the item's padding-top. Items are 32.47 (one line) or 54.94 (two). Card 4's
list is therefore **152.34**, 22.47 more than cards 2–3 — the reason the row is 452.19 rather than 429.72.

**No images, no SVG, no footer.** The reference has none; the port adds only the house footer strip.

## 7. The switch, measured

| t after click | figures | knob translateX | track | side label colours | note |
| --- | --- | --- | --- | --- | --- |
| before | 0 / 15 / 40 / 100 | 0 | `rgb(168,162,158)` | ink / muted | monthly |
| ~0 ms | 0 / 13 / 34 / 85 | **27.2701** | `rgb(37,92,58)` (in transition) | muted / ink | notes already swapped, status set |
| ~100 ms | 0 / 12 / 33 / 83 | 26.8408 | `rgb(22,84,46)` | muted / ink | |
| ~300 ms | 0 / 12 / 32 / 80 | **26** | `rgb(20,83,45)` | muted / ink | settled |
| ~450–700 ms | 0 / 12 / 32 / 80 | 26 | `#14532d` | muted / ink | final |
| second click | 0 / 15 / 40 / 100 | 0 | back to grey | ink / muted | status `Monthly billing.` |

Source behaviour worth porting exactly: `countTo` reads `parseFloat(el.textContent)` as its start value, cancels any
in-flight `_raf`, and returns early when `from === target` or when reduced motion is on. The notes and the status
string are set **synchronously** in the same handler, so the note changes one frame before the digits finish — that
is the reference's own behaviour, not a bug.

## 8. Source → React adaptation table

| Source | React port |
| --- | --- |
| `data-monthly` / `data-annual` on `.num` and `.note` | a `PLANS` array with `monthly` / `annual` numbers and note strings; render from state |
| `root.classList.toggle('is-annual')` | `annual` boolean → a class on the section (or two Tailwind variants) |
| `apply(annual)` handler | one `setAnnual(a => !a)` + a `useEffect`-free handler that also starts the count-ups |
| `countTo` rAF loop | a `useCountUp` hook: `useRef` frame id, cancel on unmount and on re-click, start from the displayed value |
| `matchMedia('(prefers-reduced-motion: reduce)').matches` | read inside the handler (not at module scope) so a mid-session preference change is honoured |
| `status.textContent = …` | `useState<string>('')` rendered into the `role="status"` `<p>` |
| `::before` data-URI tick | inline `<Check>` from `lucide-react` (14 px, `strokeWidth={2.4}`) or the same data-URI; colour from the token |
| `:where(html) … { all: revert }` | **dropped** — Tailwind preflight already provides the reset |
| `.cl-pricing02__vh` clip technique | `sr-only` utilities inside the button and on the status `<p>` |
| 4 × `href="#"` | 4 CTAs → `https://www.componentdock.com/` (blank, `noreferrer noopener`) |
| — | + `PageFooter` strip linking Component Dock |

File shape to match the repo: `src/App.tsx` (section + footer), `src/components/PricingBand.tsx`,
`src/components/BillingSwitch.tsx`, `src/components/PlanCard.tsx`, `src/components/PriceFigure.tsx` (the animated
number), `src/content.ts` (plans, copy, URLs), `src/index.css` (`@theme` + `@layer components`), one test file beside
each component + `App.test.tsx`.

## 9. Sibling comparison (snippet batch, pricing-table family)

| | previous variant (`ratecard`) | **this variant (`tallyboard`)** |
| --- | --- | --- |
| cards | 3 | **4** |
| headline block | eyebrow + `h1` + lede | `h1` + lede, **no eyebrow** |
| state | none — **no JavaScript at all** | **one toggle**, 600 ms count-up, live region |
| featured device | 2 px border + `-16px` margin + pill **outside** | **fill only** — 1 px border, no offset, pill **inside** |
| CTA hierarchy | 1 solid + 2 ghost | 3 dark + 1 **lime** |
| bullets | 20 px pastel disc + SVG tick | **14 px bare tick** |
| card shadow | `0 1px 2px` resting, lift on hover | **none**, and **no card hover** |
| alignment device | `min-height` on the description | none — the notes are `min-height: 23` only to stop collapse |
| height at 1440 | 1007 | **919** |
| ground | cool `#f6f7f9` | warm cream `#fbf7ef` |

Family-wide lesson from the two: **the `pricing-table` variants share the card stack's grammar (name → views/desc →
price → note → CTA → list) but not its numbers.** Nothing in this spec should be copied from `ratecard` except the
page-shell shape and the footer rule.

## 10. Measurement notes (how these numbers were taken)

- Node Playwright (`/root/free-templates-firebase/node_modules/playwright`) at 1440 × 900, `waitUntil:
  'domcontentloaded'`, `document.fonts.ready`, then 300–600 ms; `networkidle` hangs on the preview host.
- **The hover state survives `setViewportSize()`** (the previous run's trap): every sweep here opened a **fresh page
  per width**; do the same if you measure hover.
- **`text-wrap: balance` on both the `h1` and the lede** — a line count read before the font settles is meaningless,
  and the balance can hold a count across 100 px of viewport, so seams were probed one pixel at a time
  (`940/921/920`, `565…560`, `390…380`, `332…330`, `650…640`).
- The port harness is the reference's own `style.css` with the `@font-face` blocks replaced by a Google `<link>` and
  the prescribed copy substituted, served from `file://`, measured after `document.fonts.load()` for all four weights.
  It reproduces the reference's **document height exactly at 1440, 1280, 1200, 1120, 1081, 1080, 1000, 900, 820, 768,
  700, 640, 601, 600, 560, 480, 428, 375** and differs at **390** (2090 vs 2115) and **320** (2177 vs 2235) purely
  because the reference's copy takes one more lede line at 390 and one more headline + lede line at 320.
- Google-vs-archive drift (canvas, both faces loaded): `h1` 800/46 **823 → 807 (−1.94 %)**, 800/40.5 **711 → 711**,
  lede 400/16.5 **1077 → 1040 (−3.44 %)**, CTA label 700/14.5 **134 → 123 (−8.21 %)**, bullet 400/14.5 **244 → 244**,
  note 400/13.5 **108 → 109**. The −8 % at 14.5/700 is the largest single-family drift measured so far; it narrows the
  "Best value" pill by 6 px and moves the card-4 bullet wrap seam from **681 to 645**.
- Overflow: `documentElement.scrollWidth === clientWidth` at every width, and `window.scrollTo(200, 0)` leaves
  `scrollX = 0` — no horizontal scroll anywhere, including at 320 and after the billing row wraps at 331.
