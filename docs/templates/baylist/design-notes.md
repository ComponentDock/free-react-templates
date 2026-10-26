# Baylist — design notes (`card-14` → `apps/baylist`)

Everything below was measured on **2026-10-26** against the live preview
`https://preview.colorlib.com/theme/bootstrap/card-14/` (HTTP 200, 6,311 B) with `curl -4` +
Playwright 1.62 Chromium, and cross-checked against the source archive
`preview.colorlib.com/downloads/free/card-14.zip` (514,165 B). Tokens come from the stylesheet
(`css/style.css`, 10,207 B, sha256 `c2c1a59c…`) and from `getComputedStyle` at 1,440; where the two
disagree the live render wins, and the disagreements are listed in §4.

## 1 — What this design actually is

The family's **first photographic card**. Thirteen siblings are text-and-glyph compositions (name
plates, job notices, price cards); this one leads with an 800 × 540 photograph that fills the top
**59 %** of the card and leaves a text zone of only **171.55 px** for four facts.

The four facts are ordered the way a buyer reads a listing, not the way a UI kit orders a card:

1. **Price** — the biggest type on the card after the page `h1` (26 / 800).
2. **Address** — the only link, 17 / 700, ink, no underline.
3. **Area** — one muted line that sells the location in six words
   ("Coral Bay North · 5 min to the beach").
4. **Specs** — beds / baths / floor area in a single hairline-topped row.

The page around it is minimal to the point of being a demo: a gold eyebrow, a heavy headline, three
cards, and **nothing after the grid** — no CTA, no footer, no pagination. At 1,440 the whole content
is **664.3 px** and the remaining ~235 px is ground.

Cross-card variance is carried entirely by **three devices**, and using all three is what makes the
row look designed rather than repeated:

- **status badge colour** — dark (`#0f1c2e`), gold (`#fbbf24`), white;
- **heart state** — the middle card is **pre-saved** and solid red;
- **copy length** — 17 / 14 / 17 characters of address, three different photo counts (24 / 18 / 31).

## 2 — Structure order (1:1, nothing elided)

```
main.cl-card14-demo                       content 1180, padding 72/16
└─ header.cl-card14-demo__head            margin-bottom 28
   ├─ p.cl-card14-demo__eyebrow           "Featured listings"
   └─ h1.cl-card14-demo__title            "Homes for sale in Coral Bay"
└─ div.cl-card14-grid                     grid, 3 tracks, gap 24
   ├─ article.cl-card14                   ×3, white, r20, overflow hidden
   │  ├─ div.cl-card14__media             aspect 3/2, bg #e7e2d9
   │  │  ├─ img.cl-card14__img            800×540, object-fit cover
   │  │  ├─ span.cl-card14__status        + --new / --open modifier
   │  │  ├─ button.cl-card14__fav         aria-pressed, aria-label, heart svg
   │  │  └─ span.cl-card14__photos        camera svg + "24 photos"
   │  └─ div.cl-card14__body              padding 18/20/20
   │     ├─ p.cl-card14__price            "$1,290,000"
   │     ├─ h2.cl-card14__addr            > a.cl-card14__link (::after overlay)
   │     ├─ p.cl-card14__area             muted line
   │     └─ ul.cl-card14__specs           3 li: svg + strong + label
   └─ (nothing follows the grid)
```

That is the **whole document**: 3 `<article>`, 3 `<img>`, 3 `<button>`, 3 `<a>`, 15 `<svg>`, no form,
no input, no `role="status"`, no `<footer>`.

## 3 — Where the fidelity lives

### 3.1 The photograph owns the card, and the card owns the radius

`.cl-card14__media` is `aspect-ratio: 3 / 2` with a `#e7e2d9` ground, and the `<img>` inside is
`width: 100%; height: 100%; object-fit: cover`. The **only** radius in the card is on the card
(`border-radius: 20px`) combined with `overflow: hidden`; the media block has `border-radius: 0`.

So a port that rounds the media wrapper shows four white slivers at the top corners on every card, and
a port that rounds *and* keeps `overflow: hidden` double-clips (harmless) — the correct port is the
second one: radius on the card, nothing on the media.

`aspect-ratio: 3 / 2` is honest here because the `<img>` is `height: 100%`, so the ratio is decided by
the container, not by the intrinsic 800 × 540 (which is also 3:2 — the two agree, and the
`naturalWidth`/`naturalHeight` check confirms 800 × 540 for all three).

### 3.2 The heart is a fill change, and the pop is re-triggered on every press

```css
.cl-card14__fav[aria-pressed="true"]      { color: var(--cl-card14-heart); }
.cl-card14__fav[aria-pressed="true"] svg  { fill: currentColor; }
```

Resting: 22 × 22 heart, `fill: none`, `stroke: currentColor` (ink), inside a 44 px white circle at
`rgba(255,255,255,.94)` with `0 4px 14px rgba(0,0,0,.18)`. Pressed: **stroke and fill both
`#e11d48`** → a solid red shape. Hover (unpressed): `scale(1.08)` and the stroke turns heart-red.

The script is 924 B and does one thing worth porting carefully:

```js
btn.classList.remove('is-popping');
if (on) { void btn.offsetWidth; btn.classList.add('is-popping'); }
```

The forced reflow is what lets the **same** class replay the `cl-card14-pop` keyframe
(`scale(1) → 1.35 → 1`, 0.4 s) on a second press. React cannot lean on `classList`, so use a state
counter as the animation `key` (remount the glyph) or alternate two class names; clear the state on
`onAnimationEnd`. **Both directions animate** — un-saving also pops, because the class is added
regardless of direction, and that asymmetry between "state" and "motion" is intentional in the source.

### 3.3 The three status badges are three colour pairs, not three labels

| card | copy             | ground            | text      | width at 1,440 |
| ---- | ---------------- | ----------------- | --------- | -------------: |
| 1    | `For sale`       | `#0f1c2e`         | `#ffffff` |         **73** |
| 2    | `New listing`    | `#fbbf24`         | `#3b2600` |         **93** |
| 3    | `Open house Sat` | `#ffffff`         | `#0f1c2e` |        **127** |

All three share `top/left 14`, `padding: 6px 12px`, `border-radius: 8px`, 13 / 700, height **30.84**.
The gold badge is the **only warm colour on the page** other than the eyebrow and the spec glyphs —
which is why it reads as "new" without any other signal.

### 3.4 The spec row is the page's only arithmetic that isn't a breakpoint

`repeat(3, auto)` + `justify-content: space-between` means the three cells sit at the two edges and the
middle, with `padding-left: 14` + `border-left: 1px` on cells 2 and 3. Measured cells: **71 / 89 /
112** px (beds / baths / "2,450 sq ft"), needing **272 px** of body content — i.e. a card of **≥312**
px.

Below that the third cell wraps, the grid row stretches, and **all three cells become 40.6 tall**
(the other two don't have to wrap — the row heights are shared). The row goes **35.3 → 55.6** and the
body **171.55 → 191.84**.

That threshold bites in two places that are easy to miss:

- **three-column range**: at viewports **950–1,014** the cards are 290–311 px, so the row is already
  wrapped while the page still looks like a desktop layout (card height 385.17, not 364.88);
- **single-column range**: at **≤343** every card wraps (`635` → card 603 → one line; `343` → card 311
  → wrapped).

So the implementation must **not** hard-code a "desktop" spec row and a "mobile" one — the reference
has one fluid row and it wraps by arithmetic.

### 3.5 The whole card is one hit area, and the heart sits above it

`.cl-card14__link::after` is `position: absolute; inset: 0; border-radius: 20px; z-index: 1`. The
heart is `z-index: 2`. Everything else in the card — badge, photo count, price, area, specs — is
below the overlay.

Two consequences:

- clicking the photo, the price or the spec row navigates (in the reference, to `#` — defect 2);
- the status and photo-count text **cannot be selected**, because the overlay covers it.

The focus ring for the link is painted on that overlay
(`.cl-card14__link:focus-visible::after { outline: 3px solid #b7791f; outline-offset: -3px }`), which
is why keyboard focus draws a **full-card inset rectangle** at radius 20 rather than an outline around
17 px of text. Verified visually: the gold ring hugs the card's top-left/right corners.

### 3.6 Nothing moves except two hovers and one pop

The card has `transition: transform .3s, box-shadow .3s` and a `-4px` hover lift; the button has a
`0.2s` `transform`/`color` transition and a `1.08` hover scale; the pop is the only keyframe. There are
**no entrance animations**, no observers, no scroll effects — 0 `[data-animate]` analogues, 0
`@supports`, 1 `@media` block (the reduced-motion guard, which removes all three).

## 4 — Traps found while measuring

1. **A 0.2 s colour transition makes a click read the wrong hex.** Sampling
   `getComputedStyle(btn).color` 120 ms after a press returns **`rgb(217, 29, 71)`** — an interpolated
   step — not the token **`#e11d48` = `rgb(225, 29, 72)`**. Wait out 200 ms (or read
   `--cl-card14-heart`) before recording a colour. The same trap would fire on any hover measurement
   of the heart.
2. **A block element reports one `getClientRects()` entry even when it wraps.** The `h1` looked like
   "one line at every width" until its **height** was read: **31** at 376, **62** at 375. Use height
   (or `offsetHeight`), not the rect count, for a block's line count.
3. **The grid floor is not `min(100%, …)` in this card.** Below **306 px** the document really scrolls
   (`scrollX 1` at 305, **6** at 300) because `minmax(290px, 1fr)` keeps a 290 px track plus the 16 px
   page inset. `body.scrollWidth === clientWidth` at **306** and above; the honest claim is "no
   horizontal scroll at ≥306, real overflow below".
4. **`getComputedStyle(el, '::after').outline` reported `none` while `outlineColor` resolved gold.**
   The shorthand read is unreliable for pseudo-elements in this Chromium; the ring was confirmed by
   screenshot instead (a 3 px gold inset rectangle). Trust the pixels, not the shorthand.
5. **The archive ships a font weight the sheet never references.** 10 `woff2` in `fonts/`, 8
   `@font-face` rules; the **500** pair (44,276 B, 8.6 % of the download) is unreferenced. Do not
   conclude "five weights" from the file list — read the `@font-face` blocks.
6. **`max-width` without `box-sizing` moves the box.** `.cl-card14-demo` has no `box-sizing`, so
   `max-width: 1180` applies to the **content** box: the outer box is **1,212** at x **114** and the
   content starts at x **130**. A Tailwind port that sets `max-w-[1180px] px-4` gets a **1,148** px
   content box, 32 px narrow. Set the content width to 1180 (e.g. `max-w-[1212px] px-4` or
   `max-w-[1180px]` with the padding outside).
7. **The badge and the heart do not share an inset.** Badge is `14/14`, heart is `10/10` — 4 px closer
   to the corner on both axes. Flattening them to one value is the most common "close enough" error on
   this card.
8. **The photo count is below the link overlay.** Any port that gives that pill `position: relative`
   or a `z-index` to make it "clickable" breaks the single-hit-area contract; leave it decorative.

## 5 — Colour decisions to carry into `@theme`

```css
--color-ground:       #f7f5f1;  /* page; the only non-white surface                 */
--color-ink:          #0f1c2e;  /* price, address, badges, heart outline            */
--color-muted:        #4d5869;  /* area line, spec labels (7.20:1 on white)         */
--color-gold:         #b7791f;  /* spec glyphs, link focus ring (3.64:1 — non-text) */
--color-gold-soft:    #fbbf24;  /* "New listing" ground, heart focus ring           */
--color-gold-ink:     #3b2600;  /* text on the gold badge (8.60:1)                  */
--color-heart:        #e11d48;  /* pressed heart (4.70:1 on white)                  */
--color-rule:         #ece8e1;  /* spec row top border + cell dividers              */
--color-media-ground: #e7e2d9;  /* media placeholder before the photo paints        */
```

Contrast, measured: ink on white **17.13:1**, muted **7.20:1**, ink on ground **15.73:1**, eyebrow
`#8a5a00` on ground **5.44:1**, gold glyph on white **3.64:1** (graphical object — keep the glyphs
`aria-hidden` and the words present, which the reference already does).

## 6 — Open questions the implementer can settle

- **Where does an address link go?** The reference has no destination (`href="#"`). A single-screen
  demo can ship a real `/listings/<slug>` route or a `<button>` that opens nothing; either way
  `a[href="#"]` must be 0. Prefer a route — the overlay hit area implies navigation.
- **Does the pre-saved middle card survive a reload?** In the reference, no storage at all — state is
  inert per page load. Keeping it that way is faithful; adding `localStorage` is a product decision,
  not a fidelity one.
- **Is the gold spec glyph set worth replacing?** The reference's third glyph is **filled** while the
  first two are stroked — a real design tell (floor area is a different kind of measurement). Keep the
  fill unless the icon set makes it impossible; the nearest `lucide-react` trio is `BedDouble`, `Bath`,
  `Maximize`.
- **Component split.** `App` owns the saved set; `ListingCard` receives `initiallySaved` and reports
  presses. If the pop is implemented with a key on the glyph, `SaveButton` needs no `useEffect` at all
  — which is also what keeps the file inside the react-compiler lint rules (`react(set-state-in-effect)`
  is an error in this repo).
