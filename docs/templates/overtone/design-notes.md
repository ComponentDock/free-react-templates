# Overtone — design notes (ColorLib "Hero V06", the `hero` family's sixth variant)

Companion to `openspec/specs/template-overtone/spec.md`. Everything below was measured on
**2026-10-26** against the live preview with `curl -4` (HTTP facts, bytes, sha256) and Playwright Chromium
(layout, computed styles), motion disabled unless a probe says otherwise.

## 1. Where the reference lives

| thing          | URL / path                                                              | reading |
| -------------- | ----------------------------------------------------------------------- | ------- |
| ColorLib page  | https://colorlib.com/wp/template/hero-06/                                | 200, 113,693 B, `<title>` "Hero V06 - Free Bootstrap Hero Sections 2026 - Colorlib", `datePublished` 2026-09-25T15:09:03+00:00, "the download is 342 KB" |
| preview (live) | https://preview.colorlib.com/theme/bootstrap/hero-06/                    | **200, 7,604 B** — the slug-only `theme/hero-06/` is **404 (9 B)**, `theme/bb/hero-06/` is **404 (9 B)** |
| stylesheet     | `…/css/style.css?v=652edf3d`                                            | 16,413 B, 774 lines, sha256 `9e101b166b3dc6f2…` (identical in the archive) |
| script         | `…/js/snippet.js?v=00dc53e6`                                            | 3,375 B, 90 lines, sha256 `83eb651e659715fe…` (identical in the archive) |
| archive        | https://preview.colorlib.com/downloads/free/hero-06.zip                  | 200, 350,577 B (342.4 KiB), 22 entries = 6 dirs + 16 files |
| screenshot     | https://colorlib.com/wp/wp-content/uploads/sites/2/hero-06.jpg           | 200, 35,124 B, **AVIF behind a `.jpg`**, 1200 × 972 |
| inner pages    | `index.html` 200 (7,604 B, sha256 identical to the directory URL)        | `shop.html` / `product.html` / `cart.html` / `headphones.html` / `about.html` / `support.html` → **404 (9 B)** |

`diff` of the live HTML against `out/hero-06/index.html`: **identical except the `<head>`** (robots pair, cdnjs
`dns-prefetch`, `fetchpriority`, cache-busters) plus one `decoding="sync"` on the `<img>`, and `?v=` on both
assets. So the strongest claim available is the checked one: **live preview verified, the archive is its
un-versioned twin** (CSS and JS are byte-identical).

This is also the first variant in the family whose README does not lie: it advertises
`index.html`, `css/style.css`, `js/snippet.js`, `fonts/` and `images/`, and all five exist (the previous five
each claimed an `images/` folder that was missing).

## 2. DOM skeleton (as shipped)

```html
<div class="cl-hero06">                                     <!-- min-height:100vh, flex column, #f3f2ee -->
  <header class="cl-hero06__bar">                           <!-- 1440 × 70, #17171a -->
    <div class="cl-hero06__bar-inner">                      <!-- 1280 × 70, padding 14px 40px, gap 32 -->
      <a class="cl-hero06__logo" href="#">fieldnote<span>audio</span></a>
      <nav class="cl-hero06__nav" id="cl-hero06-nav" aria-label="Main">
        <ul class="cl-hero06__links">                       <!-- flex, gap 6 -->
          <li><a class="cl-hero06__link" href="#" aria-current="page">Headphones</a></li>
          <li><a class="cl-hero06__link" href="#">Earbuds</a></li>
          <li><a class="cl-hero06__link" href="#">Speakers</a></li>
          <li><a class="cl-hero06__link" href="#">Support</a></li>
        </ul>
      </nav>
      <div class="cl-hero06__tools">                        <!-- 90 × 42, gap 6 -->
        <a class="cl-hero06__icon-btn" href="#" aria-label="Search"><svg/></a>
        <a class="cl-hero06__icon-btn" href="#" aria-label="Cart, 2 items">
          <svg/>
          <span class="cl-hero06__cart-count" aria-hidden="true">2</span>  <!-- 18 × 18, radius 9 -->
        </a>
        <button class="cl-hero06__menu-btn" type="button"
                aria-expanded="false" aria-controls="cl-hero06-nav" aria-label="Open menu">
          <svg class="cl-hero06__menu-open"/><svg class="cl-hero06__menu-close"/>
        </button>
      </div>
    </div>
  </header>

  <main class="cl-hero06__main">                            <!-- flex:1, align-items:center -->
    <section class="cl-hero06__hero" aria-labelledby="cl-hero06-title">
      <div class="cl-hero06__media">                        <!-- 648.59 × 518.88 -->
        <figure class="cl-hero06__frame">                   <!-- radius 28, 5:4, #1c1d21, one shadow -->
          <img class="cl-hero06__img" src="images/midnight.jpg" width="900" height="600" alt="…" fetchpriority="high" decoding="sync">
          <figcaption class="cl-hero06__caption">
            <span class="cl-hero06__caption-dot"></span><span class="cl-hero06__caption-text">Midnight</span>
          </figcaption>
        </figure>
        <ul class="cl-hero06__badges" aria-label="Highlights">   <!-- absolute, left/right/bottom 18 -->
          <li><strong>40 h</strong><span>battery</span></li>
          <li><strong>&minus;35 dB</strong><span>noise cancelling</span></li>
          <li><strong>268 g</strong><span>weight</span></li>
        </ul>
      </div>

      <div class="cl-hero06__info">                         <!-- 479.41 × 629.64 -->
        <p class="cl-hero06__eyebrow"><span>New</span> Over-ear &middot; Wireless</p>
        <h1 class="cl-hero06__title" id="cl-hero06-title">Contour ANC Headphones</h1>
        <p class="cl-hero06__rating"><span class="cl-hero06__stars" aria-hidden="true">★★★★★</span>
           <span>4.7 out of 5 &middot; <a href="#">2,318 reviews</a></span></p>
        <p class="cl-hero06__price"><span class="cl-hero06__now">$249</span>
           <s class="cl-hero06__was"><span class="cl-hero06__sr">Was </span>$299</s>
           <span class="cl-hero06__save">Save $50</span></p>
        <p class="cl-hero06__desc">Adaptive noise cancelling, a 40-hour battery …</p>

        <fieldset class="cl-hero06__colours">
          <legend class="cl-hero06__legend">Colour: <strong class="cl-hero06__colour-name">Midnight</strong></legend>
          <div class="cl-hero06__swatches">
            <label class="cl-hero06__swatch" style="--sw:#1c1d21">
              <input class="cl-hero06__radio" type="radio" name="…-colour" value="Midnight" checked
                     data-src="images/midnight.jpg" data-alt="…" data-stock="In stock, ships tomorrow">
              <span class="cl-hero06__sr">Midnight</span>
            </label>
            <!-- Stone #8b8e94 … Blush #f2b8c6 (data-stock "Only 4 left, ships in 3 days") … -->
          </div>
        </fieldset>
        <p class="cl-hero06__stock" aria-live="polite">
          <span class="cl-hero06__stock-dot" aria-hidden="true"></span>
          <span class="cl-hero06__stock-text">Midnight: In stock, ships tomorrow</span></p>

        <div class="cl-hero06__buy">
          <button class="cl-hero06__add" type="button">Add to cart &middot; $249</button>
          <button class="cl-hero06__wish" type="button" aria-pressed="false" aria-label="Save to wishlist"><svg/></button>
        </div>

        <ul class="cl-hero06__perks">
          <li><svg/>Free 2-day shipping</li>
          <li><svg/>30-day returns</li>
          <li><svg/>2-year warranty</li>
        </ul>
      </div>
    </section>
  </main>
</div>
```

**No `<footer>`, no `<form>`, no `<h2>`.** 2 ids (`cl-hero06-nav`, `cl-hero06-title`), 8 anchors all `href="#"`,
8 inline SVGs, 1 `<img>`, 3 radios, 3 buttons.

## 3. Token reference block (verbatim from the stylesheet)

```css
body { margin: 0; background: #f3f2ee;
       font-family: "Sora", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }

.cl-hero06 {
  --cl-hero06-bg: #f3f2ee;
  --cl-hero06-ink: #17171a;
  --cl-hero06-muted: #5a5a60;
  --cl-hero06-line: #dfddd6;
  --cl-hero06-accent: #e4572e;
  --cl-hero06-gutter: clamp(16px, 4vw, 40px);
  display: flex; flex-direction: column; min-height: 100vh;
  background: var(--cl-hero06-bg); color: var(--cl-hero06-ink);
  font-size: 15.5px; line-height: 1.6;
}

.cl-hero06__bar        { background: var(--cl-hero06-ink); color: #f3f2ee; position: relative; z-index: 5; }
.cl-hero06__bar-inner  { display: flex; align-items: center; gap: 32px;
                         max-width: 1280px; margin: 0 auto; padding: 14px var(--cl-hero06-gutter); }
.cl-hero06__logo       { font-size: 20px; font-weight: 700; letter-spacing: -.04em; }
.cl-hero06__logo span  { margin-left: 2px; color: #ff8a65; font-weight: 300; }
.cl-hero06__nav        { margin: 0 auto; }                     /* centred in FREE space */
.cl-hero06__link       { padding: 8px 14px; border-radius: 8px; color: #c9c8c2; font-size: 14.5px; }
.cl-hero06__link[aria-current="page"] { color: #fff; font-weight: 600; }
.cl-hero06__icon-btn,
.cl-hero06__menu-btn   { width: 42px; height: 42px; border-radius: 50%; color: #f3f2ee; }
.cl-hero06__cart-count { position: absolute; top: 3px; right: 2px; min-width: 18px; height: 18px;
                         border-radius: 9px; background: #ff8a65; color: #17171a; font-size: 11px; font-weight: 700; }

.cl-hero06__main       { display: flex; flex: 1; align-items: center; }
.cl-hero06__hero       { display: grid; grid-template-columns: minmax(0,1.15fr) minmax(0,.85fr);
                         gap: clamp(28px, 5vw, 72px); align-items: center;
                         max-width: 1280px; margin: 0 auto;
                         padding: clamp(24px,4vw,56px) var(--cl-hero06-gutter) clamp(40px,5vw,64px); }

.cl-hero06__frame      { position: relative; margin: 0; overflow: hidden; border-radius: 28px;
                         background: #1c1d21; aspect-ratio: 5 / 4;
                         box-shadow: 0 30px 60px -30px rgba(23,23,26,.45); }
.cl-hero06__img        { display: block; width: 100%; height: 100%; object-fit: cover;
                         transition: opacity .3s ease, transform .6s cubic-bezier(.2,.8,.2,1); }
.cl-hero06__frame.is-swapping .cl-hero06__img { opacity: 0; transform: scale(1.03); }

.cl-hero06__caption    { position: absolute; left: 18px; top: 18px; display: inline-flex; align-items: center;
                         gap: 8px; padding: 6px 14px 6px 8px; border-radius: 999px;
                         background: rgba(255,255,255,.92); font-size: 13px; font-weight: 600; }
.cl-hero06__caption-dot{ width: 16px; height: 16px; border-radius: 50%;
                         background: var(--cl-hero06-current, #1c1d21);
                         box-shadow: 0 0 0 1px rgba(0,0,0,.15) inset; }

.cl-hero06__badges     { position: absolute; left: 18px; right: 18px; bottom: 18px;
                         display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
.cl-hero06__badges li  { display: grid; padding: 12px 14px; border-radius: 16px; line-height: 1.3;
                         background: rgba(255,255,255,.92);
                         -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }
.cl-hero06__badges strong { font-size: 18px; letter-spacing: -.02em; }
.cl-hero06__badges span   { color: var(--cl-hero06-muted); font-size: 12.5px; }

.cl-hero06__eyebrow    { gap: 10px; margin: 0; color: var(--cl-hero06-muted); font-size: 13.5px; }
.cl-hero06__eyebrow span { padding: 2px 10px; border-radius: 6px; background: var(--cl-hero06-ink);
                           color: #fff; font-size: 12px; font-weight: 600; }
.cl-hero06__title      { margin: 14px 0 10px; font-size: clamp(2rem, 1.2rem + 2.6vw, 3.3rem);
                         font-weight: 600; line-height: 1.06; letter-spacing: -.04em; }
.cl-hero06__stars      { color: #b45309; letter-spacing: 1px; }
.cl-hero06__now        { font-size: 34px; font-weight: 700; letter-spacing: -.03em; }
.cl-hero06__was        { color: #6b6b72; font-size: 18px; }
.cl-hero06__save       { align-self: center; padding: 3px 10px; border-radius: 999px;
                         background: #fde2d8; color: #9a3412; font-size: 12.5px; font-weight: 700; }
.cl-hero06__desc       { max-width: 32em; margin: 14px 0 0; color: var(--cl-hero06-muted); }

.cl-hero06__swatch     { position: relative; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; }
.cl-hero06__swatch::before { content:""; position:absolute; inset:5px; border-radius:50%;
                             background: var(--sw); box-shadow: 0 0 0 1px rgba(0,0,0,.12) inset;
                             transition: inset .2s; }
.cl-hero06__swatch::after  { content:""; position:absolute; inset:0; border:2px solid transparent;
                             border-radius:50%; transition: border-color .2s; }
.cl-hero06__swatch:has(:checked)::after  { border-color: var(--cl-hero06-ink); }
.cl-hero06__swatch:has(:checked)::before { inset: 6px; }
.cl-hero06__swatch:has(:focus-visible)   { outline: 2px solid var(--cl-hero06-accent); outline-offset: 3px; }
.cl-hero06__radio      { position:absolute; inset:0; width:100%; height:100%; margin:0; opacity:0; cursor:pointer; }

.cl-hero06__stock      { margin: 14px 0 0; color: #166534; font-size: 14px; font-weight: 500; }
.cl-hero06__stock-dot  { width: 8px; height: 8px; border-radius: 50%; background: #16a34a; }
.cl-hero06__stock.is-low { color: #9a3412; }
.cl-hero06__stock.is-low .cl-hero06__stock-dot { background: var(--cl-hero06-accent); }

.cl-hero06__add        { flex: 1; max-width: 340px; height: 56px; border: 0; border-radius: 16px;
                         background: var(--cl-hero06-ink); color: #fff; font-size: 16px; font-weight: 600; }
.cl-hero06__add:hover  { background: #33333a; }
.cl-hero06__add:active { transform: scale(.98); }
.cl-hero06__wish       { width: 56px; height: 56px; border: 1.5px solid var(--cl-hero06-line);
                         border-radius: 16px; background: #fff; color: var(--cl-hero06-ink); }
.cl-hero06__wish[aria-pressed="true"] { color: #c2410c; border-color: #c2410c; }
.cl-hero06__wish[aria-pressed="true"] path { fill: currentColor; }

.cl-hero06__perks      { margin-top: 24px !important; padding-top: 20px !important;
                         border-top: 1px solid var(--cl-hero06-line);
                         color: var(--cl-hero06-muted); font-size: 13.5px;
                         display: flex; flex-wrap: wrap; gap: 8px 22px; }

@media (max-width: 900px) { .cl-hero06__hero { grid-template-columns: 1fr; } }
@media (max-width: 860px) { /* .is-enhanced only: menu button grid, nav absolute top:100% … */
                            /* :not(.is-enhanced): the bar and the links flex-wrap instead */ }
@media (max-width: 520px) { .cl-hero06__hero { padding-top: 12px; gap: 24px; }
                            .cl-hero06__frame { border-radius: 22px; aspect-ratio: 1; }
                            .cl-hero06__badges { position: static; margin-top: 10px; gap: 8px; }
                            .cl-hero06__badges li { padding: 10px; background: #fff; }
                            .cl-hero06__badges strong { font-size: 16px; }
                            .cl-hero06__badges span { font-size: 11.5px; }
                            .cl-hero06__add { max-width: none; } }
@media (prefers-reduced-motion: reduce) { /* animation:none !important; transition:none !important */ }
```

## 4. Screenshot analysis (1200 × 972, AVIF)

- **Frame:** macOS Safari/Chrome window mock-up on a white ground with a soft drop shadow, three window dots and a
  `preview.colorlib.com` URL pill. The page inside is ~1120 px wide. **Never adopt the frame** — the reference page
  is edge-to-edge `#f3f2ee`.
- **What the mock shows that the DOM must produce:** an ink bar with the two-tone wordmark at the far left, four
  links, a search glyph and a cart glyph with an `#ff8a65` "2" badge; then a large rounded product photo on the
  left with a white "Midnight" pill in its top-left and three white chips along its bottom edge; then the shop
  column on the right — "New" pill + "Over-ear · Wireless", the two-line headline, five amber stars with
  "4.7 out of 5 · 2,318 reviews", the price row, three lines of description, "Colour: Midnight" with three
  swatches, the green stock line, the ink add-to-cart bar beside the square wishlist, and the three perks on a
  hairline.
- **The mock is not a measurement:** its photo is cropped differently, its vertical rhythm is compressed for the
  1120 px frame, and it shows only the desktop state. Everything in the spec is from the live render.
- **Only one colour state is shown** (Midnight). The other two come from the two remaining JPEGs — a white desk
  (Stone) and a pink/peach backdrop (Blush) — which is why the badge chips' contrast was measured against all
  three photographs.

## 5. Section-by-section fidelity notes

1. **Bar.** Height 70 is `42 + 14 + 14` — the icon buttons are the tallest child, not the 20 px wordmark. The
   inner is `max-width:1280` **plus** `padding: 14px 40px`, so the content box is 1200 wide starting at x 120.
   The nav's `margin: 0 auto` centres it in the leftover 480.17 px (240.08 each side), which puts it at 535.92 —
   **26.9 px right of the inner box's centre**, because the wordmark (143.83) is 53.83 px wider than the tools
   (90). Reproducing this with `justify-center` moves the nav and is a fidelity loss.
2. **Wordmark.** Two spans of the same 20 px size but opposite weights (700 / 300) and opposite colours
   (`#f3f2ee` / `#ff8a65`), `letter-spacing: -.04em` on the whole link and `margin-left: 2px` on the second word.
   The total is 143.83 — a port with a different word length changes the nav's position (see 1).
3. **Tools.** Two `<a>` and one `<button>` in a 6 px gap: 42 + 6 + 42 + 6 + 42 = **138** at ≤860 (the menu button
   is `display:none` above 861, so 90 there). The cart badge is `position:absolute; top:3; right:2` with
   `min-width:18px; height:18px; border-radius:9px` — it is a *capsule* (min-width), so a two-digit count grows it
   leftwards without changing the height.
4. **Frame.** `aspect-ratio: 5/4` with `overflow:hidden` and radius 28. Its `#1c1d21` background is what shows
   through while the photo fades at `is-swapping`. The single shadow is
   `0 30px 60px -30px rgba(23,23,26,.45)` — a *negative* spread, so it is a tight halo, not a soft card shadow.
5. **Caption pill.** 110 × 32.8 = 8 (left padding) + 16 (dot) + 8 (gap) + ~64 (the word "Midnight" at 13 px/600)
   + 14 (right padding). Because the width is content-driven, a longer colour name widens the pill — Blush is
   4 px narrower, Stone 1 px narrower.
6. **Badge strip.** Three equal columns of 197.53 inside 612.59 (`left/right: 18` inside a 648.59 frame), `gap: 10`.
   Each card is `display:grid` so the 18 px value and the 12.5 px label stack without a wrapper. Their
   `backdrop-filter: blur(8px)` over the photo is what makes the 92 % white read as glass; the *contrast* of the
   muted label therefore depends on the pixels behind it (5.85 / 6.34 / 6.57 over the three photos).
7. **Eyebrow.** Inline "New" pill (ink bg, white 12 px/600, radius 6) followed by muted 13.5 px text with a `·`.
   The pill is 23.19 tall — 2 px padding over a 19.2 line — so the row is 23.19, not 21.6.
8. **Headline.** `clamp(2rem, 1.2rem + 2.6vw, 3.3rem)` reaches its 52.8 cap at ~1292 px, its 32 floor at ~492.
   `line-height: 1.06` → 55.968, `letter-spacing: -.04em` → **-2.112 px**. Two lines at 1440; **one line** in the
   whole 900–448 band; two again at ≤446. There is **no** `text-wrap:balance` here (unlike the family's fifth
   variant) — do not add it, the ladder above is the measured consequence of greedy wrapping.
9. **Rating.** `<span aria-hidden>` of five ★ (67.77 wide = 5 × 13.5 + 4 × 1 px of tracking) plus a muted
   sentence with an underlined ink link. `flex-wrap` is declared but the row never wraps at any tested width
   (22.39 everywhere, down to 320).
10. **Price.** `align-items: baseline` on the row, `align-self: center` on the save chip — that is why the chip
    (26 tall) is centred against a 54.39 line box while `$249` and `$299` share a baseline. The `<s>` carries an
    `sr-only` "Was " so the struck price is announced as "Was $299".
11. **Description.** 3 lines at 1440 (74.39), 4 lines from 1240 down, 5 at ≈400, 6 at 320. `max-width: 32em`
    resolves to 496 — wider than the 479.41 column at 1440, so it never bites in this family (it is there for wide
    containers).
12. **Colour fieldset.** The disc is `::before` (`inset: 5px`, `--sw`, inset 1 px ring at 12 % black), the ring is
    `::after` (2 px, transparent → ink), and the *radio itself* is the hit target at `opacity: 0` covering 44 × 44.
    The checked disc shrinks to `inset: 6px` (a 0.2 s transition) — a 2 px reduction in diameter, which is the
    whole selection affordance besides the ring.
13. **Stock line.** `aria-live="polite"` on the `<p>`, which contains both the dot and the text. `is-low` is set
    by `/only/i.test(data-stock)` — that regex, not a data attribute, is the state model.
14. **Buy row.** The add button is `flex:1` with `max-width:340`, so from 1024 down it is narrower than 340
    (313.45 at 1024, 288.97 at 960, 222 at 320) and below 520 `max-width` is removed so it fills. The wishlist is
    a fixed 56 × 56 — the pair is `340 + 10 + 56 = 406` of the 479.41 column at 1440, leaving 73.41 empty on the
    right (the row is not `justify-between`).
15. **Perks.** `display:flex; flex-wrap:wrap; gap: 8px 22px` — a content-box wrap at **463 px** (see the ladder),
    not a media query. The `!important` pair exists because the sheet's own `ul` reset sets `margin: 0`.
16. **Menu.** Below 861 the nav becomes `position:absolute; top:100%` (so the bar keeps its 70 px height and the
    document height does not change when it opens) with 17 px links and hairline rules. `is-enhanced` is what
    enables all of it; without the class the `<860` block instead lets the bar wrap.

## 6. Source → React adaptation

| source                                            | port                                                                                          |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `.cl-hero06` + `.cl-hero06__bar` … (46 classes)    | `App` → `<SiteHeader>` → `<Main>` → `<ProductHero>` → `<ProductMedia>` / `<ProductInfo>` → `<SiteFooter>` |
| `fieldnote audio` wordmark                         | `<Wordmark>` with a two-tone span, same 143.83 target width                                    |
| `initMenu()`                                       | `SiteHeader` `isOpen` state + `useEffect` for Escape / outside click / `matchMedia`            |
| `initSwatches()` (imperative DOM writes)           | `ProductHero` `colour` state; derived `src`, `alt`, `caption`, `legend`, `stock`, `isLow`      |
| `frame.style.setProperty('--cl-hero06-current')`   | `style={{ '--dot': colour.sw }}` on the frame (or pass the hex straight to the dot)            |
| `is-swapping` + `setTimeout(swap, 180)`            | a `swapping` boolean, `setTimeout` 180 ms, cleared on unmount; skipped under reduced motion    |
| `initWish()`                                       | `<WishlistToggle>` with `pressed` state and `aria-pressed`                                     |
| `images/*.jpg` (3 files, 26–36 KB each)            | `picsum.photos/seed/overtone-{midnight,stone,blush}/900/600`, same `alt` shapes                 |
| Sora, 10 `@font-face` over 2 binaries              | one Google Fonts link `css2?family=Sora:wght@300..800&display=swap`                            |
| 8 inline SVGs (+ `.cl-icon`, dead)                 | `lucide-react` (search, shopping-bag, menu, x, truck, rotate-ccw, shield, heart)               |
| `#` anchors (8)                                    | real routes or in-page ids; keep `aria-current="page"` on one                                   |
| no footer                                          | `<SiteFooter>` linking `https://www.componentdock.com/`                                        |
| inert `Add to cart`                                | `<AddToCart>` that increments a cart count and flips its label                                 |

State lives in exactly three places: `SiteHeader.isOpen`, `ProductHero.colour`, `WishlistToggle.pressed`. The
cart count is a fourth if the port wires the CTA (it should). Everything else is derived.

## 7. Sibling comparison (same `hero` family)

| variant | invented name | what it is                              | device it introduces                                        | what Overtone shares / breaks |
| ------- | ------------- | --------------------------------------- | ----------------------------------------------------------- | ----------------------------- |
| 1       | proscenium    | a whole 100vh page, no form             | transformed perspective mock, `overflow:hidden` 100vh shell    | shares the `main{flex:1;align-items:center}` centring; **Overtone has no `overflow:hidden`** and its document is only 900 in a *band* (901+) |
| 2       | afterglow     | glass pill + absolute dropdown          | `backdrop-filter` on a pill makes it a containing block       | Overtone reuses `backdrop-filter: blur(8px)` — on the badge chips, which have **no** positioned descendants, so the containing-block trap does not bite |
| 3       | presswork     | editorial studio hero                    | a rotating square whose AABB overhangs                       | Overtone rotates **nothing**; its rects are its boxes. But it inherits presswork's lesson that a breakpoint can *remove* a wrap (the `h1` goes 2 → 1 at 901) |
| 4       | tendril       | two phones, animated bob               | 8 `@font-face` over 2 variable binaries; wrap seams after `document.fonts.ready` | Overtone's 10 `@font-face` over 2 Sora binaries is the same *variable cut* pattern — measure the wrap seams **after** `document.fonts.ready` or the `h1`/perks seams move |
| 5       | epistle       | newsletter hero with one inline email field | `text-wrap: balance`, hard offset shadows, rotated card stack | Overtone is the opposite: **no** balance (greedy wrap is the measured ladder), **no** offset shadows (one soft halo), **no** rotation. Both share the family's `clamp` type and the 100vh-flex shell |
| 6       | **overtone**  | product PDP hero                        | **the first `<img>` and the first state-driven photograph in the family**; colour swatches as a `fieldset` of invisible radios | — |

Family-wide facts that carried over: the `bootstrap/` preview prefix is the only live path; the archive is the
live preview's un-versioned twin (CSS/JS identical); `.cl-icon` is dead in every one of them; the reduced-motion
kill switch is identical; there is **no footer** in any variant (the port always adds the Component Dock one).

## 8. Measurement method (so the numbers can be re-taken)

```js
import { chromium } from '/root/free-templates-firebase/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const pg = await ctx.newPage();
await pg.goto('https://preview.colorlib.com/theme/bootstrap/hero-06/',
              { waitUntil: 'domcontentloaded', timeout: 60000 });   // networkidle hangs on this host
await pg.waitForTimeout(900);
await pg.evaluate(() => document.fonts.ready);                       // wrap seams move without this
// …getBoundingClientRect / getComputedStyle reads…
```

Three rules that this page forced:

1. **`reducedMotion: 'reduce'` kills every transition**, so a probe that measures hover/pressed **colour** must use
   a context without it and wait ≥ 300 ms (the reference's `color`/`border-color` transitions are 0.2 s).
2. **`window.scrollTo(200, 0)` before reading rects at 320** shifts every `getBoundingClientRect` by `-scrollX`;
   read `scrollX` first, or reset it, before you record positions.
3. **Read `offsetWidth/offsetHeight` only when something is transformed.** Nothing on this page is (unlike the
   family's first three variants), so rects equal boxes here — but the `img`'s attributes do **not** equal its
   natural size for `stone.jpg` (900 × 604 vs 900 × 600).
