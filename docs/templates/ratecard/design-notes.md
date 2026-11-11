# Ratecard — design notes (ColorLib Pricing Table V01, `pricing-table-01`)

Replication research for `apps/ratecard`. Read `openspec/specs/template-ratecard/spec.md` first — it carries the
token table, the requirement set and the two verification ladders. This file carries the DOM skeleton, the raw CSS
token block, the screenshot read, the prescribed copy, the section-by-section fidelity notes, the adaptation table
and the measurement notes.

Reference: <https://preview.colorlib.com/theme/bootstrap/pricing-table-01/> (**the slug-only path 404s** — the
`bootstrap/` prefix is the only live one). Source page: <https://colorlib.com/wp/template/pricing-table-01/>.
Archive: <https://preview.colorlib.com/downloads/free/pricing-table-01.zip> (676,381 B). Screenshot:
<https://colorlib.com/wp/wp-content/uploads/sites/2/pricing-table-01.jpg> (42,342 B, AVIF behind `.jpg`).

## 1. Paper facts (verified 2026-11-11)

| Thing | Value |
| --- | --- |
| Preview | `theme/bootstrap/pricing-table-01/` **200, 4,254 B**; `theme/pricing-table-01/` **404 (9 B)**; `theme/bb/…` **404** |
| Stylesheet | `css/style.css?v=3f9ba568`, **10,222 B**, sha256 `a46142940334a13a066b8007e5f232a0ffebc17786acc23194ffcfc4a1d77798` |
| Archive CSS | **identical hash** → live preview verified, archive is its un-versioned twin |
| Archive HTML | `index.html` **4,062 B**; differs from the live DOM only in `<head>` (no `?v=`, no `dns-prefetch`, no `robots`) |
| JS | **none** — no `<script>` in the DOM, no `js/` in the zip, `/js/snippet.js` **404 (9 B)** |
| Zip entries | **16**: `index.html`, `css/style.css`, `README.md`, 10 woff2 (the README's `js/` and `images/` lines are false) |
| Fonts | 8 `@font-face`, **2 binaries**: latin 48,432 B `c9407645…`, latin-ext 85,272 B `a28eb6d3…` → variable cut; a 5th `inter-500-*` pair ships **undeclared and unused** |
| Images | **none**. Two inline SVGs (flag star, disc tick via `data:` URI) |
| Anchors | **4**, all `href="#"` → dead. `/about.html` / `/pricing.html` / `/contact.html` all **404**; `/index.html` byte-identical to `/` |
| Structure | 1 `<section>`, 1 `<h1>`, 3 `<h2>`, 3 `<ul>` (4 + 5 + 5 `<li>`), 0 `<form>`, 0 `<footer>` |

The preview reachability ladder was probed in this order before any claim: slug-only (404) → `bootstrap/` (200) →
`bb/` (404). No "unreachable" note belongs in this spec.

## 2. DOM skeleton (verbatim shape, class names replaced by comments)

```html
<main class="demo">                      <!-- padding: clamp(40px,7vw,96px) 16px -->
  <section aria-labelledby="title">      <!-- max-width 1120, centred, 15px/1.55, #111827 -->
    <header>                             <!-- max-width 640, centred, mb 48 -->

      <p>eyebrow</p>                     <!-- 13px/700, .08em, uppercase, #2453d6 -->
      <h1 id="title">headline</h1>       <!-- clamp(30,4.6vw,46), 800, -.035em, 1.1, balance -->
      <p>lede</p>                        <!-- 16.5px, #4b5563, balance -->
    </header>

    <div class="grid">                   <!-- repeat(3,minmax(0,1fr)), gap 24, stretch -->

      <article aria-labelledby="p1">     <!-- card 1: white, 1px #e3e6eb, r18 -->
        <div class="top">
          <h2 id="p1">Solo</h2>          <!-- 20px/700, -.01em, lh 1.55 -->
          <p>description</p>             <!-- 14.5px, min-height 48, mt 8 -->
        </div>
        <p class="price">
          <span class="amount">$15</span><!-- 48px/800, -.04em, lh 1, tabular-nums -->
          <span class="per">per seat / month</span>   <!-- 14px, baseline, gap 8 -->
        </p>                             <!-- margin: 26px 0 24px -->
        <a class="cta">Start 14-day trial</a>          <!-- ghost, block, 12/18, r10 -->
        <p class="label">Solo includes</p>             <!-- mt 28, pt 24, border-t 1px, 13px/700 -->
        <ul>                             <!-- 6/0/6/30 per li, ::before 20px disc -->
          <li>…</li>
        </ul>
      </article>

      <article aria-labelledby="p2" class="pop">       <!-- featured: 2px accent, margin -16 0, pt 48 -->
        <p class="flag">★ Most popular</p>             <!-- absolute, top -15, left 50%, r999 -->
        …
        <a class="cta cta--solid">Start 14-day trial</a>
        …
      </article>

      <article aria-labelledby="p3"> … </article>
    </div>

    <p class="foot">Prices in USD… <a>Compare all features</a></p>   <!-- mt 40, centred, 1 line -->
  </section>
</main>
```

Class names in the source are `cl-pricing01`, `__head`, `__eyebrow`, `__title`, `__lede`, `__grid`, `__plan`,
`--pop`, `__flag`, `__top`, `__name`, `__desc`, `__price`, `__amount`, `__per`, `__cta`, `--solid`, `__label`,
`__list`, `__foot`. There is no `__top` rule in the sheet (the wrapper is inert) and no `cl-icon` usage.

## 3. CSS token block (values as shipped)

```css
body { margin: 0; background: #f6f7f9;
       font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
.demo          { padding: clamp(40px, 7vw, 96px) 16px; }
.section       { --accent: #2453d6; --accent-soft: #e8eefc; --ink: #111827;
                 --muted: #4b5563; --line: #e3e6eb;
                 max-width: 1120px; margin: 0 auto; color: var(--ink);
                 font-size: 15px; line-height: 1.55; }
.head          { max-width: 640px; margin: 0 auto 48px; text-align: center; }
.eyebrow       { color: var(--accent); font-size: 13px; font-weight: 700;
                 letter-spacing: .08em; text-transform: uppercase; }
h1             { margin: 10px 0 14px; font-size: clamp(30px, 4.6vw, 46px);
                 font-weight: 800; letter-spacing: -.035em; line-height: 1.1;
                 text-wrap: balance; }
.lede          { color: var(--muted); font-size: 16.5px; text-wrap: balance; }
.grid          { display: grid; grid-template-columns: repeat(3, minmax(0,1fr));
                 gap: 24px; align-items: stretch; }
.plan          { position: relative; display: flex; flex-direction: column;
                 padding: 32px 30px 34px; border: 1px solid var(--line);
                 border-radius: 18px; background: #fff;
                 box-shadow: 0 1px 2px rgba(17,24,39,.04);
                 transition: box-shadow .25s ease, transform .25s ease; }
.plan:hover    { box-shadow: 0 18px 40px -24px rgba(17,24,39,.28); transform: translateY(-2px); }
.plan--pop     { margin: -16px 0; padding-top: 48px; border: 2px solid var(--accent);
                 box-shadow: 0 24px 48px -28px rgba(36,83,214,.55); }
.flag          { position: absolute; top: -15px; left: 50%; display: inline-flex;
                 align-items: center; gap: 6px; padding: 5px 14px; border-radius: 999px;
                 background: var(--accent); color: #fff; font-size: 12.5px; font-weight: 700;
                 white-space: nowrap; transform: translateX(-50%); }
.name          { font-size: 20px; font-weight: 700; letter-spacing: -.01em; }
.desc          { min-height: 48px; margin: 8px 0 0; color: var(--muted); font-size: 14.5px; }
.price         { display: flex; align-items: baseline; gap: 8px; margin: 26px 0 24px; }
.amount        { font-size: 48px; font-weight: 800; letter-spacing: -.04em; line-height: 1;
                 font-variant-numeric: tabular-nums; }
.per           { color: var(--muted); font-size: 14px; }
.cta           { display: block; padding: 12px 18px; border: 1px solid #c9d1de;
                 border-radius: 10px; background: #fff; color: var(--ink); font-weight: 600;
                 text-align: center; text-decoration: none;
                 transition: background-color .2s ease, border-color .2s ease, color .2s ease; }
.cta:hover     { border-color: var(--accent); color: var(--accent); }
.cta--solid    { border-color: var(--accent); background: var(--accent); color: #fff; }
.cta--solid:hover { background: #1b43b3; color: #fff; }
.cta:focus-visible { outline: 3px solid var(--accent); outline-offset: 3px; }
.label         { margin: 28px 0 12px; padding-top: 24px; border-top: 1px solid var(--line);
                 font-size: 13px; font-weight: 700; }
.list li       { position: relative; padding: 6px 0 6px 30px; color: #1f2937; font-size: 14.5px; }
.list li::before { content: ""; position: absolute; top: 8px; left: 0; width: 20px; height: 20px;
                 border-radius: 50%;
                 background: var(--accent-soft) url("data:image/svg+xml,…tick…") center / 14px no-repeat; }
.foot          { margin: 40px 0 0; color: var(--muted); font-size: 14px; text-align: center; }
.foot a        { color: var(--accent); font-weight: 600; text-underline-offset: 3px; }
.foot a:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 2px; }
@media (max-width: 900px) {
  .grid        { grid-template-columns: minmax(0,1fr); max-width: 460px; margin: 0 auto; gap: 32px; }
  .plan--pop   { margin: 0; }
  .desc        { min-height: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .plan, .cta  { transition: none; }
  .plan:hover  { transform: none; }
}
```

Only **five** custom properties exist, all on `.cl-pricing01` (section scope, not `:root`) — that scoping is why the
tokens must move into `@theme` deliberately rather than being inherited.

## 4. Screenshot read

`pricing-table-01.jpg` is **1200 × 972**, an **AVIF** container behind a `.jpg` name, and a **macOS browser mock-up**:
traffic lights, a URL pill reading `preview.colorlib.com`, a soft drop shadow on a near-white surround. The page inside
occupies x 60…1158 (≈ 1098 px) at a scale of ≈ **0.7625** of a 1440 viewport, so **sizes** convert back exactly
(the Starter card measures 431 px tall in the image → **565** at 1440, against **559.73** live) while **y positions**
do not, because the window chrome sits above the page. Use the JPEG for composition and the live page for numbers.

What the screenshot shows and the live page confirms:

- a **cool light-grey ground** (`#f6f7f9`) with **no band, no gradient, no texture** — the only whites are the cards;
- a centred head: a small blue uppercase **PRICING** eyebrow, a single heavy **near-black headline**, and a two-line
  grey sub-paragraph; nothing else in the head — **no button, no proof row, no logo**;
- three **equal-width** cards with generous **30 px side padding**, a **hairline** border and an **18 px** radius;
- the **middle card visibly taller and outlined in blue**, its border **2 px**, with a **blue pill** straddling its
  top edge carrying a white star and "Most popular";
- the middle card's CTA filled **solid blue**; the neighbours' CTAs **white with a light grey border** — the design's
  single hierarchy signal;
- prices set huge (48 px) with the "per seat / month" qualifier small and baseline-aligned to the right of the amount;
- each plan's bullets as **pale blue discs with a blue tick**, 20 px, aligned in a column 30 px in from the card's
  text edge (i.e. flush with the card's padding box);
- one **centred grey footnote** with the underlined blue "Compare all features" at its end;
- the **lower half of the middle card is empty** — no shadow inset, no background change, no per-plan note.

Do not adopt the mock-up's window chrome, its rounded window corners or its shadow, and do not add a page background
behind the page: the grey **is** the page.

## 5. Prescribed copy (use verbatim; it reproduces the reference's whole height ladder)

Brand: **Slatebox** (a shared support inbox for studios). Eyebrow `Pricing`.

Headline `Simple plans for every queue` — one line at 1440 (612.92), breaks to two at 435.

Lede: `Slatebox gathers the replies, hand-offs and follow-ups your studio repeats every week into one shared queue.
Start free for 14 days, no card needed.` — two lines at 1440 (588 / 589).

| | Card 1 | Card 2 (featured) | Card 3 |
| --- | --- | --- | --- |
| name | `Solo` | `Team` | `Studio` |
| desc | `For one or two people answering a handful of messages a day.` | `For a studio that needs routing, due times and weekly reporting.` | `For several brands or a client list that needs an audit trail.` |
| price | `$15` | `$39` | `$99` |
| CTA | `Start 14-day trial` | `Start 14-day trial` (solid) | `Talk to sales` |
| label | `Solo includes` | `Everything in Solo, plus` | `Everything in Team, plus` |
| bullets | `1 shared queue` · `300 replies a month` · `Saved replies and labels` · `Email support, next business day` | `6 shared queues` · `4,000 replies a month` · `Round-robin routing and due times` · `Weekly workload reports` · `Live chat support` | `Unlimited queues and brands` · `Unlimited replies` · `SSO sign-in and audit log` · `99.9% uptime agreement` · `Named setup contact` |

Flag `Most popular`; qualifier `per seat / month`; footnote `Prices in USD, excluding tax. Save 15% with annual
billing. Compare all features`.

Copy budget, measured: every bullet must stay **one line at 265.33 px** of content width (card content 295.33 minus the
30 px disc gutter) and each description **two lines at 295.33**. The longest bullets above measure 244 px (`Round-robin
routing and due times`) and 230 px (`Email support, next business day`) — that is the headroom, do not exceed it with
a synonym.

## 6. Section-by-section fidelity notes

1. **The ground.** `#f6f7f9` on `body`; the section paints nothing. The vertical rhythm comes **entirely** from the
   demo's `padding: clamp(40px, 7vw, 96px) 16px`: 96 at ≥1371.43, `7vw` in 571.43…1371.43, 40 at ≤571.43. At 1440 the
   page is 96 + 815.28 + 96 = **1007.28**.
2. **The head.** 640 wide, centred, `margin-bottom: 48`. The `h1`'s `text-wrap: balance` is load-bearing only below
   436, where it splits 179.41 / 218.27 instead of a longer first line. `letter-spacing: -.035em` is `-1.61px` at 46
   and `-1.05px` at 30 — specify it in `em`, not `px`.
3. **The grid.** `repeat(3, minmax(0,1fr))` and **not** `1fr`: with `minmax(auto,1fr)` the longest bullet would push
   the tracks wider than 357.33 instead of wrapping. Measured columns are 357.328 / 357.328 / 357.344 — the 0.016 px
   asymmetry is Chrome's `1fr` rounding and is not reproducible by hand; assert ±0.05.
4. **The featured card's three signals.** 2 px accent border, `margin: -16px 0`, `padding-top: 48`. Together:
   `48 − 16 + 2 = 34` of top inset against the siblings' `32`, i.e. **1 px lower** content, and an overhang of
   **16 px above and below** the grid (591.73 vs 559.73). Any one of the three dropped changes a measured number: drop
   the margin and the card aligns at 559.73; use a `ring` instead of a border and the flag moves 2 px up and the inner
   height loses 2 px; drop `padding-top: 48` and everything below the name rises 16 px.
5. **The flag.** `top: -15px` resolves against the **padding box** of the `position: relative` card, so with a 2 px
   border the pill's top is `273.86 + 2 − 15 = 260.86` — 13 px above the card's border box and 29 px above the grid.
   Its bottom (290.24) is 0.38 px *below* the grid's top edge. `white-space: nowrap` is why the label never wraps;
   width is font-dependent (130 on Google Inter, 134 on the archive binary).
6. **The price row.** `display: flex; align-items: baseline; gap: 8`, `margin: 26px 0 24px`. The **baseline** alignment
   is what puts `per seat / month` 25 px below the amount's top (460.86 vs 435.86) while the row stays 48 tall — a
   centred flex row would float the label to the middle (11.6 px lower) and is visibly wrong.
7. **The CTA.** Full-width block anchor, `padding: 12px 18px` + 1 px border + 23.25 line = **49.25**, radius 10. The
   ghost's border `#c9d1de` is **1.54 : 1** on white — the port replaces it with **`#7f8a9c`** (3.49) and keeps
   everything else. The solid variant's hover fill `#1b43b3` is the only hover colour change on the page.
8. **The ruled label.** `margin: 28px 0 12px; padding-top: 24px; border-top: 1px` → **45.14** total. This is the
   page's only divider; there is no `<hr>` and no other border inside a card.
9. **The bullet discs.** 20 × 20, `top: 8px`, `left: 0`, `border-radius: 50%`, `#e8eefc`, with a 14 px tick centred by
   `background … center / 14px no-repeat`. The disc sits in the `li`'s **30 px left padding**, so its left edge is the
   card's padding box; a `list-style` bullet cannot be centred this way. Items are 34.47 tall (6 + 22.475 + 6), and the
   tick's stroke colour is the accent — **not** a lighter blue.
10. **The footnote.** One 14 px line, 40 px under the grid. It wraps to two lines (43.38) at ≤620, where the link
    "Compare all features" moves to the second line by itself. `text-underline-offset: 3px`, weight 600.
11. **Stretch slack.** Card 1 ends 35.46 px above its card's bottom edge, card 3 only 1 px. Nothing is bottom-aligned,
    so a port that mixes in `justify-between` or `flex-1` on the list will visibly break the reference's rhythm.
12. **No motion beyond 8 px of travel.** Two transitions (card `.25s`, CTA `.2s`) and a 2 px lift. `prefers-reduced-
    motion` kills both; there is no `@keyframes` in the sheet and none should be added.

## 7. Source → React adaptation table

| Source | Port | Why |
| --- | --- | --- |
| `<main class="cl-pricing01-demo">` padding clamp | `<main className="px-4 py-[clamp(40px,7vw,96px)] bg-ground">` | one gutter token, no wrapper divs |
| `.cl-pricing01` custom props on the section | `@theme` tokens + `text-ink` / `bg-accent` classes | Tailwind 4 tokens, no raw hex in components |
| `repeat(3, minmax(0,1fr))` | `grid grid-cols-3 gap-6 items-stretch max-[900px]:grid-cols-1 max-[900px]:max-w-[460px] max-[900px]:gap-8` | `minmax(0,…)` is `grid-cols-3`'s default in Tailwind 4 — verify, do not assume |
| `.plan--pop { margin: -16px 0 }` | `-my-4` on the featured card only | must not leak to siblings |
| `.plan--pop { border: 2px }` | `border-2 border-accent` (a real border) | `ring-2` does not affect layout and moves the flag |
| `li::before` data-URI tick | `<span className="… rounded-full bg-accent-soft"> <Check size={14} strokeWidth={2} aria-hidden /> </span>` | `lucide-react`, no asset, `aria-hidden` |
| flag `<svg>` star | `<Star size={14} fill="currentColor" aria-hidden />` | same 14 px, `currentColor` |
| 4 × `href="#"` | 4 × `https://www.componentdock.com/` + `target="_blank" rel="noreferrer noopener"` | repo rule: no dead anchors |
| no footer | slim `<footer>` strip with a Component Dock link | repo rule: every app links Component Dock |
| `all: revert` firewall | **dropped** | Tailwind preflight already normalises; the firewall would un-reset `h1`/`ul`/`p` |

## 8. Sibling comparison (snippet batch)

- **Against `hero` variants** (`hero-10` virga … `hero-12` lakelight): those are 12 whole pages of 100vh with a header
  bar, a form and a photograph. This one is the opposite end of the batch — **one band, no header, no form, no image** —
  so the port carries **no shell chrome at all** between the `<main>` and the section. Do not copy the hero family's
  `100vh` floor, its `min-height` shell or its 40–48 px gutters; the demo padding is the only gutter.
- **Against `alert`/`card` variants**: those pages centre a single component in a viewport (`body` display grid or a
  demo padding like this one) but carry **state** (dismissal, timers, `aria-live`). This page is **stateless**: no
  `<script>`, no state, no timers, nothing to test beyond hover/focus. Its test budget is therefore small — layout
  assertions at five widths, one hover/focus test, one reduced-motion test.
- **Within its own family:** variant 1 is the smallest preview in the family (4,254 B). Variants 2, 3, 6 and 12 range
  from 4,550 to **25,337 B**, so later variants are **not** copy-and-retint jobs — variant 3 in particular ships a
  five-fold larger page. The shared DNA is the centred head + plan grid + footnote shape, not the markup.
- **Fonts:** every sibling so far used a display face with personality (Bricolage, Urbanist, Manrope, Outfit). This one
  is **Inter only** — the flat, product-UI choice, and the reason the page reads as an app screen rather than a
  brochure. Loading a second face would be the fastest way to lose the design.

## 9. Measurement notes (how these numbers were taken)

- `browser_exec` / CDP is dead in this container; the measurements came from **node Playwright**
  (`/root/free-templates-firebase/node_modules/playwright/index.mjs`) with
  `await page.evaluate(() => document.fonts.ready)` plus 600 ms before reading boxes, viewport **1440 × 900**.
- The preview host needs `curl -4` (IPv6 is refused) and a full browser UA.
- The screenshot is **AVIF** behind `.jpg`: `PIL.Image.open(...).save('shot.png')` then read the PNG.
- **Hover state survives a viewport sweep.** `page.hover()` before looping `setViewportSize()` leaves the card
  translated by −2 px for the rest of the run (the featured card then reads y 271.86 instead of 273.86 and the flag
  258.86 instead of 260.86). Measure hover **after** the sweep, or re-enter the page between passes.
- A port simulation was measured before writing this file: the same stylesheet with the `@font-face` block replaced by
  a Google Fonts `<link>` and the prescribed copy substituted. It reproduced the reference's document height at every
  width **except 1024 / 1000 / 901 / 320**, where the reference's longer sentences wrap more:
  **967 / 964 / 964 / 2257** against **1012 / 1028 / 1066 / 2412**. That gap is copy length, not layout — do not chase
  it, and do not lengthen the copy to close it.
