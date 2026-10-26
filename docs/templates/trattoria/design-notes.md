# Trattoria — design notes (ColorLib "Hero V08", the `hero` family's eighth variant)

Companion to `openspec/specs/template-trattoria/spec.md`. Everything below was measured on **2026-10-26** against
the live preview with `curl -4` (HTTP facts, bytes, sha256) and Playwright Chromium (layout, computed styles),
motion disabled unless a probe says otherwise.

## 1. Where the reference lives

| thing          | URL / path                                                      | reading                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ColorLib page  | https://colorlib.com/wp/template/hero-08/                       | 200, 113,962 B, `<title>` "Hero V08 - Free Bootstrap Hero Sections 2026 - Colorlib", `h1` "Hero V08", `datePublished` 2026-09-25T15:09:07+00:00, "the download is 298 KB" |
| preview (live) | https://preview.colorlib.com/theme/bootstrap/hero-08/           | **200, 4,080 B** — the slug-only `theme/hero-08/` is **404 (9 B)**, `theme/bb/hero-08/` is **404 (9 B)**                                                                  |
| stylesheet     | `…/css/style.css?v=950359f3`                                    | 13,589 B, 592 lines, sha256 `2f0c26aac0b2b1d0…` (identical in the archive)                                                                                                |
| script         | `…/js/snippet.js?v=2baa9bc8`                                    | 1,363 B, 40 lines, sha256 `6ab20dd81e6e9117…` (identical in the archive)                                                                                                  |
| archive        | https://preview.colorlib.com/downloads/free/hero-08.zip         | 200, 305,372 B (298.2 KiB), **16 entries** = 5 dirs + 11 files                                                                                                            |
| photograph     | `…/images/dining.jpg` (also in the archive)                     | 200, 141,870 B, **1,400 × 933** JFIF/**JPEG** (not AVIF), identical sha256 live vs archive                                                                                |
| screenshot     | https://colorlib.com/wp/wp-content/uploads/sites/2/hero-08.jpg  | 200, 63,869 B, **AVIF behind a `.jpg`**, 1200 × 972                                                                                                                       |
| inner pages    | `index.html` 200 (4,080 B, byte-identical to the directory URL) | one HTML file in the archive; no second page exists                                                                                                                       |

`diff` of the live HTML against `out/hero-08/index.html`: **identical except the `<head>`** (robots pair, cdnjs
`dns-prefetch`, `fetchpriority="high"`, `decoding="sync"`, `?v=` on both assets). CSS, JS **and the JPEG** are
byte-identical, so the strongest claim available is the checked one: **live preview verified, the archive is its
un-versioned twin**.

This is the **first variant of the eight whose archive ships the photograph its README advertises** (`images/`, one
JPEG). It is also the first whose README does not need an excuse.

## 2. DOM skeleton (as shipped)

```html
<div class="cl-hero08">
  <!-- min-height:100vh, flex column, overflow:hidden, isolate, #14100c -->
  <img class="cl-hero08__bg" src="images/dining.jpg" width="1400" height="933" alt="" />
  <!-- absolute inset 0, z -2 -->
  <!-- ::before overlay, inset 0, z -1: two linear-gradients of #14100c (180° + 90°) -->

  <header class="cl-hero08__bar">
    <!-- 1440 × 83.89, 1px bottom rule -->
    <div class="cl-hero08__bar-inner">
      <!-- 1320 × 82.89, grid 1fr auto 1fr, gap 24 -->
      <nav class="cl-hero08__nav" id="cl-hero08-nav" aria-label="Main">
        <ul class="cl-hero08__links">
          <!-- flex, gap 26 -->
          <li><a class="cl-hero08__link" href="#" aria-current="page">Menu</a></li>
          <li><a class="cl-hero08__link" href="#">Wine list</a></li>
          <li><a class="cl-hero08__link" href="#">Private dining</a></li>
          <li><a class="cl-hero08__link" href="#">Gift cards</a></li>
        </ul>
      </nav>

      <a class="cl-hero08__logo" href="#">
        <!-- 177.38 × 46.89, centred by the auto track -->
        <span class="cl-hero08__logo-name">Osteria Lume</span>
        <!-- 28px / 600 Playfair -->
        <span class="cl-hero08__logo-sub">Leith &middot; Edinburgh</span>
        <!-- 11px / 600 / .3em gold -->
      </a>

      <div class="cl-hero08__bar-end">
        <!-- flex, gap 12, justify-end -->
        <a class="cl-hero08__phone" href="tel:+441****0148">0131 555 0148</a>
        <!-- REDACTED href -->
        <button
          class="cl-hero08__menu-btn"
          type="button"
          aria-expanded="false"
          aria-controls="cl-hero08-nav"
          aria-label="Open menu"
        >
          …2 svg…
        </button>
        <!-- display:none ≥861 -->
      </div>
    </div>
  </header>

  <main class="cl-hero08__main">
    <!-- flex:1, display:flex, align-items:flex-END -->
    <section class="cl-hero08__hero" aria-labelledby="cl-hero08-title">
      <!-- grid 1fr / 340px, gap 72, items:end -->
      <div class="cl-hero08__copy">
        <!-- NO RULE — the grid track itself (812 at 1440) -->
        <p class="cl-hero08__eyebrow">
          <span aria-hidden="true"></span>Wood-fired kitchen since 2014
        </p>
        <h1 class="cl-hero08__title" id="cl-hero08-title">
          Slow suppers, <em>fired</em> by oak and olive wood
        </h1>
        <p class="cl-hero08__sub">Handmade pasta, whole fish from the Firth of Forth …</p>
        <div class="cl-hero08__actions">
          <a class="cl-hero08__book" href="#">Book a table</a>
          <a class="cl-hero08__menu-link" href="#"
            >View tonight&rsquo;s menu <svg width="18">…arrow…</svg></a
          >
        </div>
      </div>

      <aside class="cl-hero08__hours" aria-labelledby="cl-hero08-hours-title">
        <!-- 340 × 360.31, no radius -->
        <h2 class="cl-hero08__hours-title" id="cl-hero08-hours-title">Opening hours</h2>
        <dl class="cl-hero08__table">
          <!-- four div rows, 42.19 each, dashed rules -->
          <div>
            <dt>Monday</dt>
            <dd>Closed</dd>
          </div>
          <div>
            <dt>Tue &ndash; Thu</dt>
            <dd>17:00 &ndash; 22:00</dd>
          </div>
          <div>
            <dt>Fri &ndash; Sat</dt>
            <dd>12:00 &ndash; 23:00</dd>
          </div>
          <div>
            <dt>Sunday</dt>
            <dd>12:00 &ndash; 20:00</dd>
          </div>
        </dl>
        <p class="cl-hero08__address">
          <svg width="16">…pin…</svg><span>14 Commercial Quay, Leith, EH6 6LX</span>
        </p>
        <p class="cl-hero08__note">Walk-ins welcome at the bar.</p>
      </aside>
    </section>
  </main>
</div>
```

No `<footer>`, no `<article>`, no `<figure>`, no form. Three ids: `cl-hero08-nav`, `cl-hero08-title`,
`cl-hero08-hours-title`.

## 3. Token reference (verbatim from `css/style.css`)

```css
body { margin: 0; background: #14100c; font-family: system-ui, -apple-system, "Segoe UI", Roboto, …; }

.cl-hero08 {
  --cl-hero08-cream:  #f6ede0;   /* primary text, hairlines are this at alpha */
  --cl-hero08-soft:   #e6d9c6;   /* standfirst, nav links, dt, note */
  --cl-hero08-gold:   #e2b86b;   /* eyebrow, wordmark sub, em, CTA, ring, pin */
  --cl-hero08-dark:   #14100c;   /* ground, CTA label */
  --cl-hero08-serif:  "Playfair Display", Georgia, "Times New Roman", serif;
  --cl-hero08-gutter: clamp(16px, 4vw, 48px);
  min-height: 100vh; display: flex; flex-direction: column; overflow: hidden;
  position: relative; isolation: isolate;
  background: var(--cl-hero08-dark); color: var(--cl-hero08-cream);
  font-size: 16px; line-height: 1.6;
}

/* the only other literal colours */
.cl-hero08__book:hover { background: #f0cd8c; }                    /* gold hover */
.cl-hero08__bg       { mask-image: linear-gradient(180deg, #000 55%, transparent); }  /* ≤520 only */
/* rgba() set: cream .12 (panel rules) .18 (bar + panel rules) .22 (card frame + row rules) .4 (button border)
   .5 (link underline); dark .1 .25 .3 .35 .4 .6 .72 .75 .78 .85 .92 .95 .97; */

.cl-hero08__bg        { object-fit: cover; object-position: 50% 60%;
                        animation: cl-hero08-zoom 24s ease-out both; }
@keyframes cl-hero08-zoom { from { transform: scale(1.08); } }

.cl-hero08::before    { background:
                          linear-gradient(180deg, rgba(20,16,12,.78) 0%, rgba(20,16,12,.25) 26%,
                                          rgba(20,16,12,.35) 55%, rgba(20,16,12,.92) 100%),
                          linear-gradient(90deg,  rgba(20,16,12,.85) 0%, rgba(20,16,12,.35) 60%,
                                          rgba(20,16,12,.1)  100%); }

.cl-hero08__bar-inner { display: grid; grid-template-columns: 1fr auto 1fr;
                        gap: 24px; max-width: 1320px; padding: 18px var(--cl-hero08-gutter); }
.cl-hero08__hero      { grid-template-columns: minmax(0, 1fr) 340px;
                        gap: clamp(32px, 5vw, 80px); align-items: end;
                        padding: clamp(80px,12vw,180px) var(--cl-hero08-gutter) clamp(40px,6vw,72px); }

.cl-hero08__title     { font-family: var(--cl-hero08-serif); font-weight: 500;
                        font-size: clamp(2.6rem, 1.3rem + 4.6vw, 5.6rem);
                        line-height: 1.02; letter-spacing: -.02em; text-wrap: balance; max-width: 13em; }
.cl-hero08__sub       { font-size: clamp(1rem, .96rem + .25vw, 1.15rem); max-width: 34em; }
.cl-hero08__book      { min-height: 56px; padding: 0 34px; border-radius: 2px;
                        background: var(--cl-hero08-gold);
                        color: var(--cl-hero08-dark) !important; }   /* the author's cascade workaround */
.cl-hero08__hours     { padding: 26px 28px; border: 1px solid rgba(246,237,224,.22);
                        background: rgba(20,16,12,.72); backdrop-filter: blur(12px); }  /* no radius */

@media (max-width: 1080px) { .cl-hero08__phone { display: none; } }
@media (max-width: 960px)  { .cl-hero08__hero { grid-template-columns: 1fr; } .cl-hero08__hours { max-width: 460px; } }
@media (max-width: 860px)  { …enhanced bar: 1fr auto, nav absolute panel, 44px button… }
@media (max-width: 520px)  { …logo 24px, hero pt 38vh, photo 75vh + mask, actions stack, card p 20px… }
```

## 4. The screenshot (visual read)

`hero-08.jpg` is a **macOS browser mock-up** — white ground, drop shadow, a `preview.colorlib.com` URL pill, the
page ~1120 px wide inside the frame. Do not adopt the frame; the live page is edge-to-edge photography.

What the frame shows, in order: a **dark, warm dining-room photograph** with a lit plate of fish at the centre-left
and out-of-focus stemware and a hand at the right; a **four-link uppercase nav** at the far left, a **two-line
serif wordmark** dead centre (`Osteria Lume` over a gold tracked-out `LEITH · EDINBURGH`), and a **phone number**
at the far right, all above a hairline; then a gold **rule + tracked eyebrow**, a **large cream serif headline** with
the word _fired_ in **gold italic**, three lines of soft body copy, a **filled gold CTA with square-ish corners**
(`BOOK A TABLE`) beside an **underlined text link with an arrow**; and on the right a **translucent, hairline-framed
card** holding `Opening hours`, four dashed rows, a **gold pin** and the address, closing on an italic footnote.

The mock-up and the live render agree on every one of those points. The only thing the frame cannot show is the
**12 px backdrop blur** on the card, which is what makes the card's ground read as glass over the photograph.

## 5. Section-by-section fidelity notes

### 5.1 The photograph and the wash

- `.cl-hero08__bg` is `position:absolute; inset:0; z-index:-2; width/height:100%; object-fit:cover;
object-position:50% 60%`, `fetchpriority="high"`, `decoding="sync"`, `alt=""`, with declared 1400 × 933. The
  zoom is `24s ease-out both` from `scale(1.08)` — measured mid-flight it reads **1552.37 × 970.23 at
  (-56.19, -35.12)**, so measure the layer with animations off.
- The overlay is **one** pseudo-element, `inset:0; z-index:-1`, with **two** gradient layers (180° and 90°). The
  90° layer is the legibility device for the left column — `.85` at x=0 falling to `.10` at the right edge, where
  the card sits.
- Below 861 the overlay switches to a **single** 180° ramp (`.75 / .3 @22% / .6 @45% / .95 @70%`) because the
  composition is one column and the horizontal protection is no longer needed.
- At ≤520 the photograph is **cropped to 75vh**, re-positioned to `60% 50%`, and **masked** from 55 % so the page
  below it is flat ground; the section's `padding-top: 38vh` is what lands the eyebrow over the masked edge.
- `overflow:hidden` on the root plus `isolation:isolate` is the whole stacking story: `z-index:-2` / `-1` only
  paint above the root's own background because of the isolate.

### 5.2 The bar

- Inner: `max-width:1320; margin:0 auto; padding:18px var(--gutter); display:grid;
grid-template-columns:1fr auto 1fr; align-items:center; gap:24`. Height is **83.89** when the wordmark
  (46.89 + 36 + 1 border) is tallest, **88.19** when the wrapped nav (51.19) is, **81** at ≤520.
- The wordmark's column is `auto`, so the box is exactly as wide as the longest line (177.38 at "Osteria Lume") and
  the grid centres it — a flex `space-between` bar cannot reproduce that optical centre.
- Links: 13.5 px / 500 / .12em uppercase, `padding: 4px 0`, `#e6d9c6`, hover **and** `[aria-current="page"]` →
  `#fff`; the current one adds a 1 px gold rule at `bottom:-2px`. They **wrap inside themselves** between 861 and
  1193 (each becomes 49.6 tall) — there is no query for it.
- Phone: 14 px / .06em soft, `:hover` white, hidden ≤1080. Its `href` in the shipped file is
  `tel:+441****0148` — four literal asterisks.
- Menu button: 44 × 44, `border:1px solid rgba(246,237,224,.4)`, `background:rgba(20,16,12,.4)`,
  `border-radius:50%`, `display:none`, and it only exists inside the `is-enhanced` + ≤860 block. The open/close
  icons are hidden/shown by `.bar.is-open`.

### 5.3 The copy column

- `__copy` has **no rule** — it is the first grid track (812 = 1224 − 340 − 72 at 1440).
- Eyebrow: `display:flex; align-items:center; gap:14; 13px/600/.24em` uppercase gold, with a `40 × 1` span in
  `currentColor` before the text (the span is `aria-hidden`). It **wraps to two lines at ≤432** because the text
  is a single flex item next to a fixed 40 px rule.
- Title: Playfair **500** (not 400, not 700 — the only light-ish headline in the family), `line-height:1.02`,
  `letter-spacing:-.02em`, `text-wrap: balance`, `max-width:13em` (1131.52 at 87.04, i.e. never the binding
  constraint at 1440 — the 812 column is). The `em` is `font-style: italic` in gold and inherits size and leading;
  its box is 169.3 × 116 and it starts line 2.
- Standfirst: 18.4 px / 29.44 (1.6), `max-width:34em` = **625.6** — the copy, not the 812 column, is the measure.
- Actions: `display:flex; flex-wrap:wrap; align-items:center; gap:16px 28px; margin-top:34`. The CTA is
  `min-height:56; padding:0 34px; border-radius:2px`; the text link is `padding:6px 0` on a 1 px cream-.5 rule with
  an 18 px arrow at `gap:10`, and hover grows `gap` to 14 while the rule turns gold.

### 5.4 The hours card

- `padding:26px 28px; border:1px solid rgba(246,237,224,.22); background:rgba(20,16,12,.72);
backdrop-filter: blur(12px)` — **no radius, no shadow**. It is bottom-aligned to the hero's content box, so its
  foot is at 828 (the same as the CTA row's foot plus the section's 72 px bottom padding).
- `h2`: Playfair 22 / 500, `margin: 0 0 14px`.
- Rows: `display:flex; justify-content:space-between; gap:16; padding:9px 0; font-size:14.5px;
border-bottom:1px dashed rgba(246,237,224,.22)`; `dt` soft, `dd` cream with `tabular-nums` so the four time
  ranges line up (17:00–22:00 / 12:00–23:00 / 12:00–20:00).
- Address: `display:flex; gap:10; margin-top:16; font-size:14px` with a 16 px gold pin nudged 3 px down; the note
  is `margin: 6px 0 0 26px` — 26 = pin 16 + gap 10, so it hangs under the text rather than the icon.
- At ≤960 the card caps at **460** and the address stops wrapping (44.78 → 21.59), which is most of the card's
  22 px height drop; at ≤520 its padding falls to 20 and its height to 325.92.

### 5.5 The script

`js/snippet.js` is one IIFE with **one** initialiser and no dependencies:

- `initMenu` — adds `is-enhanced` to `.cl-hero08__bar`, wires the button (`aria-expanded` + `aria-label`
  `Open menu` / `Close menu`), closes on a click inside the nav that hits an `<a>`, on `Escape` (**and refocuses
  the button**), on any document click outside the bar, and on `matchMedia('(min-width: 861px)')` becoming true.

Nothing else runs: no observers, no scroll handlers, no form handling, no third-party script, no timers.

## 6. Source → React adaptation

| source                                        | port                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `img.__bg` + `::before` wash                  | `<HeroMedia>` — the `<img>` plus an absolutely positioned overlay div at `-z-10`, inside the root's `isolate` |
| `header.__bar` + `__bar-inner`                | `<SiteHeader>` (`<NavLinks>`, `<Wordmark>`, `<Phone>`, `<MenuButton>`)                                        |
| `a.__logo` with `__logo-name` / `__logo-sub`  | `<Wordmark>` — two spans, centred by the `auto` grid track                                                    |
| `h1.__title` with `<em>`                      | `<Title>` — one string with the accent word as `<em>`, `text-balance`                                         |
| `.__actions` + `.__book` + `.__menu-link`     | `<Actions>` → `<BookCta>` + `<MenuLink>`                                                                      |
| `aside.__hours` + `dl.__table` + `.__address` | `<HoursCard>` (`<CardTitle>`, `<HoursList>` with four `<HoursRow>`, `<Address>`, `<Note>`)                    |
| bar script (open/close/Escape/outside/861)    | `SiteHeader` state + `useEffect` listeners, all cleaned up                                                    |
| no footer                                     | `<PageFooter>` linking `https://www.componentdock.com/`                                                       |

## 7. Defects and unrendered intent (all confirmed on the live page)

1. **The gold CTA's focus ring is gold (1.00 : 1).** `.cl-hero08 a:focus-visible { outline: 2px solid gold;
outline-offset: 4px }` and the CTA's ground is the same gold. Focused in Chromium the ring is invisible. The
   hours card has no links, so nothing else is affected.
2. **The `tel:` href is redacted** — `tel:+441****0148`. Not dialable anywhere.
3. **All seven other anchors are `href="#"`** and there is no second page to point at (one HTML file in the
   archive), so every nav item, the wordmark and both CTAs scroll to the top on click.
4. **The CTA's label needs `!important`** because `.cl-hero08 a { color: inherit }` is `(0,1,1)` and beats
   `.__book`'s `(0,1,0)`. Without the `!important` the gold button renders **cream text on gold at 1.60 : 1**.
5. **`.cl-icon` is dead again** (nineteenth consecutive snippet), and `__copy` carries no rule.
6. **Two of the six `@font-face` binaries are duplicated by size** — the 500 and 600 roman subsets are each
   38,460 / 20,980 B. Serving the same file under two names is harmless but pointless; the port loads Playfair from
   Google Fonts and inherits nothing.
7. **The README's dependency claim is accurate this time** — the archive really does contain `images/` and one
   JPEG, unlike the six variants before it.

Nothing else was found: no overflow at any width from 320 to 1440, no contrast failure among the text pairs (the
tightest fixed pair is the card's gold at **5.63** over a worst-case bright photo), no dead rule that paints, and
no duplicate ids.

## 8. Seams worth re-measuring if the copy changes

| seam                          | measured                                                                                                                                                                                  |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `h1` balanced line count      | **3** at 1416–1440 and ≤428; **2** at 1226–1415 and 429–960; **3** at 961–1225                                                                                                            |
| eyebrow wrap                  | one line from **433**, two lines at **432** and below                                                                                                                                     |
| nav link wrap                 | two lines at **1193** and below (bar 88.19), one line from **1194**                                                                                                                       |
| phone visibility              | hidden at **1080**, visible at **1081**                                                                                                                                                   |
| hero grid collapse            | two columns at **961**, one at **960** (card 340 → 460, document 900 → 1013)                                                                                                              |
| 100vh fit, single-column band | **900** at 521–583, **901** at 584, climbing to **1013** at 960                                                                                                                           |
| compact composition cliff     | **900** at 521, **1195** at 520 (38vh padding + 75vh masked photo)                                                                                                                        |
| card height                   | 360.31 at 340 wide, 337.92 at 460 wide, 325.92 at ≤520, 348.31 at 320                                                                                                                     |
| document height, full ladder  | 900 @1440…961; 1013 @960; 993 @900; 980 @861; 976 @860; 945 @768; 922 @700; 906 @640; 901 @584; 900 @583/521; 1195 @520; 1191 @480; 1235 @432; 1278 @428; 1277 @390; 1276 @360; 1324 @320 |

## 9. Sibling comparison (same family, 12 variants)

| variant | app           | ground / accent                          | device                                                                        |
| ------- | ------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| 01      | proscenium    | dark, product mock                       | 100vh page, one `<h1>`, no form                                               |
| 02      | afterglow     | pill nav + dropdown                      | `backdrop-filter` containing-block trap                                       |
| 03      | presswork     | editorial                                | rotating badge, `text-wrap:balance`                                           |
| 04      | tendril       | two-phone mock                           | two variable font binaries, animated rects                                    |
| 05      | epistle       | coral, newsletter field                  | pill field / focus-within                                                     |
| 06      | overtone      | cream + ink bar, photography             | three radios swapping one `<img>`                                             |
| 07      | soapbox       | electric blue + lime, no photography     | live countdown + outlined year + min-content tiles                            |
| **08**  | **trattoria** | **dark photograph, gold + cream, serif** | **full-bleed photo under a two-axis wash, glass hours card, square 2 px CTA** |

What is new here and worth carrying forward: the family's **first real photograph** (and the first archive that ships
one), the first **serif display face** (Playfair Display, 500 + italic 500), the first **sentence-case** headline
with an inline italic accent, the first **2 px** CTA radius, the first card that is a **blur** rather than a shadow
or a hard offset, and the first bar whose centre column is `auto` so the wordmark is optically centred rather than
flex-spaced.
