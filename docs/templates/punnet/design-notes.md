# Punnet — design notes

Reference: ColorLib **Alert V10** (`alert-10`) · live `https://preview.colorlib.com/theme/bootstrap/alert-10/`
(**200, 9,875 B**) · CSS `css/style.css?v=9a9e3383` (**5,151 B**, 245 lines, sha
`a5f4ff1d…beee1c6` live **and** archive) · **no script** (`/js/snippet.js` → hard **404**, 9 B; `/js/main.js`
→ **404**; the archive has no `js/`) · archive `downloads/free/alert-10.zip` (**4,484 B** = 4.38 KiB, 5
entries; HTML differs from live only in `<head>`) → **live preview verified, the archive is its un-versioned
twin**.

Measured 2026-10-26 with Playwright 1.62 Chromium against the live page at 1440 × 900, all faces loaded, then
swept 1 px at a time across every seam (320 → 1440).

## What the design is

**A consumer notification wall, not a severity ladder.** The family's earlier nine entries each show *one*
alert situation: a bar, a toast stack, a severity list, an error summary, prose admonitions, a status page.
This one shows **four unrelated messages at once**, in a grid, and they are all permanent. The four tints are
not a ramp — they are **categories**: mint = a delivery in progress, lilac = a reward unlocked, peach = a
payment method expiring, rose = a missed delivery. Only the rose tile carries `role="alert"`; the other three
are `role="status"`. Colour therefore carries the *subject*, and the copy carries the *urgency*.

The page is deliberately small: **5,151 B of CSS, 245 lines, 20 style rules** after the framework guard. There
is no `position`, no `z-index`, no `overflow` rule anywhere in the sheet (only the `hr` reset), no gradient, no
keyframe, no container query, no script. Everything the design does visually is four custom properties, one
grid, one rotation and two transitions.

**One token family, four values, one shared exception.** `.cl-alert10` declares `--cl-alert10-bg`,
`-badge`, `-ink`, `-btn`; each modifier redefines exactly those four. The four consumers are the tile
background, the badge background, the badge/badge-SVG/title colour, and the pill label + hover fill + focus
ring. **The paragraph's colour is not a token** — `#3f3547` is a literal on `__text`, identical in all four
tiles. A port that tokenises "text colour" and derives it per tone will produce four different contrasts and
lose the reference's one constant.

The name **punnet** is the shallow basket soft fruit is sold in — the container a produce box arrives as. It
carries the family's single-word pattern (noticeboard, allclear, fieldguide, banderole, snapback, beaconry,
proofmark, mayfly, steadystate).

The port is a **layout, color and semantics problem**, not a behaviour problem: there is no script, no form and
no state — the only motion is a `2px` lift and a `150 ms` colour inversion.

## DOM skeleton (the reference, verbatim shape)

```html
<main class="cl-alert10-demo">                       <!-- min-height:100vh, padding clamp(24px,7vw,88px) 16px -->
  <section class="cl-alert10-wrap" aria-labelledby="cl-alert10-title">   <!-- max-width 900, colour #2b2433 -->
    <header class="cl-alert10-wrap__head">           <!-- text-align:center, mb 28 -->
      <p class="cl-alert10-wrap__hello">Good morning, Ines <span aria-hidden="true">🌿</span></p>
      <h1 class="cl-alert10-wrap__title" id="cl-alert10-title">Your Sprout Box updates</h1>
    </header>

    <div class="cl-alert10-grid">                    <!-- auto-fit minmax(min(100%,380px),1fr), gap 20 -->
      <div class="cl-alert10 cl-alert10--mint" role="status">        <!-- no rule for --mint: the base IS mint -->
        <span class="cl-alert10__badge" aria-hidden="true">          <!-- 64×64, r22, rotate(-4deg) -->
          <svg viewBox="0 0 32 32" width="30" height="30" focusable="false">…truck…</svg>
        </span>
        <div class="cl-alert10__body">                               <!-- min-width:0 -->
          <p class="cl-alert10__title">Your box is on its way!</p>
          <p class="cl-alert10__text">Rui is 12 minutes away with 6 recipes …</p>
          <a class="cl-alert10__action" href="#track">Track delivery</a>   <!-- dead fragment -->
        </div>
      </div>
      <div class="cl-alert10 cl-alert10--lilac" role="status"> … gift …   "Choose my treat" → #treat </div>
      <div class="cl-alert10 cl-alert10--peach" role="status"> … card …   "Update card"    → #card  </div>
      <div class="cl-alert10 cl-alert10--rose"  role="alert" > … circle! … "Pick a new slot" → #reschedule </div>
    </div>
  </section>
</main>
```

**No `<header>`/`<footer>` landmark at page level** (the `<header>` is inside the `<section>`), **no `nav`**, and
**no `h2`** — the four tile titles are `<p class="cl-alert10__title">`. Four `role` attributes exist and they
are the only ARIA on the page (`aria-labelledby` on the section, `aria-hidden` on each badge).

The sheet's first 18 blocks are the framework guard, not design:

```css
:where(html) :is(html,body,div,span,p,a,h1,…,mark), :is(html, body) { all: revert; }
:where(html) input::-webkit-datetime-edit(-fields-wrapper|-text|-month-field|-day-field|-year-field) { all: revert; }
:where(html) :is(img, svg) { vertical-align: revert; }
:where(html) :is(img, table, thead, tbody, tfoot, tr, th, td, caption, hr, iframe, video) { box-sizing: revert; }
…
```

15 guard groups, 22 `revert` declarations, ~60 of the sheet's 245 lines. It exists so a host page's Bootstrap
reboot cannot restyle the snippet. **The port drops all of it** (Tailwind preflight already normalises) but
keeps the *effect*: nothing in the tile may inherit a host `box-sizing`, `vertical-align` or `border-style`.

## Section-by-section fidelity notes

### 1. Ground, wrapper and the 900 px measure

`body { margin: 0; background: #fffdf8; font-family: "Nunito", system-ui, … }`.
`main.cl-alert10-demo { box-sizing: border-box; min-height: 100vh; padding: clamp(24px, 7vw, 88px) 16px }` —
the padding knees are **vw 343** (`7vw = 24`) and **vw 1258** (`7vw = 88`); at 1440 it is `88px 16px`, so the
wrap starts at y **88**.

`section.cl-alert10-wrap { max-width: 900px; margin: 0 auto; color: #2b2433; line-height: 1.5 }` and
`* , *::before, *::after { box-sizing: border-box }` on its descendants. `wrap = min(900, vw − 32)`; it hits
the cap at **vw 932**.

At 1440 the document is **900** tall — exactly the viewport — because `541.5` of content sits inside
`min-height: 100vh`. **The desktop page does not scroll.** The first width that scrolls is **811** (`983`).

### 2. Header

`__head { margin-bottom: 28px; text-align: center }`, **900 × 89.5**.
`__hello { margin: 0 0 4px; color: #6b5f73; font-size: 17px; font-weight: 700 }` → **25.5** tall (`1.5`), ends
in U+1F33F inside `span[aria-hidden]`.
`__title` (the `h1`) `{ margin: 0; font-size: clamp(28px, 5vw, 40px); font-weight: 800; letter-spacing: -.02em }`
→ **60** tall at 1440 (`40 × 1.5`), **−0.8px** tracking. Two knees: `5vw = 40` at **800**, `5vw = 28` at **560**.
It holds one line down to **357** and folds to **84** at **356** (wrap 324).

Note the header carries **no** background band — the ground is continuous, the greeting is the only muted ink
on the page.

### 3. The grid and the `minmax` seam

`grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr)); gap: 20px`.
Two columns need `2 × 380 + 20 = 780` of wrap ⇒ **viewport 812** (`wrap 780`, cards `380`). At **811** the wrap
is `779` and there is one column.

Above the seam the card shrinks with the viewport — it is **not** fixed at 440:

| vw   | 1440 | 1200 | 1024 | 932 | 900 | 860 | 820 | 812 |
| ---- | ---: | ---: | ---: | --: | --: | --: | --: | --: |
| card |  440 |  440 |  440 | 440 | 424 | 404 | 384 | 380 |

`align-items` is the grid default (`stretch`), so **a row's two cells share the taller height**. At 815 and 812
the rose title folds and the peach tile — whose own copy did not change — is stretched `202 → 225.75`. Assert
the body's height, or `__text`'s line count, never the tile's box.

### 4. The tile

```
flex; gap 18; align-items flex-start; padding 24; border-radius 28; background var(--bg);
transition transform .2s ease, box-shadow .2s ease
```

`440 × 202` at 1440, body column **310** = `440 − 48 − 64 − 18`.

Height decomposition, exact:

```
24 pad  + 2 (title mt) + 23.75 (title) + 4 (title mb) + 69.75 (3 × 23.25) + 14 (text mb) + 40.5 (pill) + 24 pad = 202
```

`:hover { transform: translateY(-2px); box-shadow: 0 16px 30px -22px rgba(43,36,51,.45) }`. Measured before
`transform: none` / `box-shadow: none`, after `matrix(1,0,0,1,0,-2)` /
`rgba(43,36,51,0.45) 0 16px 30px -22px`. **The tile is not interactive** — the lift is pure decoration and the
port should keep it that way (defect 4).

Under `prefers-reduced-motion: reduce` the sheet sets `transition: none` on the tile and `transform: none` on
`:hover`; measured `transition: none`, `transform: none`. Keep both (ColorLib lists this as a feature).

### 5. The badge (the design's one tricky box)

```
width 64; height 64; display grid; place-items center; flex none;
border-radius 22; background var(--badge); color var(--ink);
box-shadow: inset 0 -4px 0 rgba(0,0,0,.06), 0 6px 14px -8px var(--ink);
transform: rotate(-4deg)
nth-child(even) → rotate(4deg)
```

Because of the rotation the **rect is 68.31 × 68.31** (`64 × (cos4° + sin4°)`), and the SVG inside measures
**32.02** for `width="30"`. The shadow is two things people drop: the **inset bottom edge** (a `4px` `6 %`
black strip along the bottom curve) and the **tone-coloured** drop shadow at `-8px` spread (it is `var(--ink)`,
not black).

At **≤ 480**: `52 × 52`, radius `18`, SVG `26` (rect `55.5` / `27.75`).

### 6. Title, paragraph, pill

Title `19 / 800 / 1.25` in `var(--ink)`, `margin: 2px 0 4px` → **23.75**.
Paragraph `15.5 / 400 / 1.5` → **23.25** per line, `#3f3547` **in every tile**, `margin: 0 0 14px`.
Line counts at 1440: **3 / 2 / 3 / 3** (mint / lilac / peach / rose) = `69.75 / 46.5 / 69.75 / 69.75`.
Pill `padding: 9px 18px`, `border-radius: 999px`, `background: #fff`,
`box-shadow: 0 2px 0 rgba(0,0,0,.06)`, `15 / 800`, `color: var(--btn)` → **40.5** tall, **133 / 151 / 121 /
142** wide. `:hover { background: var(--btn); color: #fff }` over `150 ms`; measured
`rgb(255,255,255)`/`rgb(19,96,60)` → `rgb(19,96,60)`/`rgb(255,255,255)`.
`:focus-visible { outline: 3px solid var(--btn); outline-offset: 2px }` — measured only under keyboard focus,
`none` after a mouse click.

The pill's **shape** is invisible against its tile (`1.12–1.19 : 1`); the label is the affordance
(`6.93–8.02 : 1`). Add a 1 px `color-mix` edge in the port.

### 7. The 480 step — the seam that runs backwards

|               | 481                 | 480                        |
| ------------- | ------------------- | -------------------------- |
| tile padding  | `24px`              | `20px 18px`                |
| tile gap      | `18px`              | `14px`                     |
| tile radius   | `28px`              | `24px`                     |
| badge         | `64` (rect 68.31)   | `52` (rect 55.5)           |
| badge radius  | `22px`              | `18px`                     |
| glyph         | `30` (rect 32.02)   | `26` (rect 27.75)          |
| content       | **319**             | **346**                    |
| tile heights  | `202 / 178.75 / 202 / 202` | `170.75 / 170.75 / 170.75 / 194` |
| document      | **1012**            | **933**                    |

Padding (−8) *and* badge (−12) step together, so content **grows 27 px** while the viewport loses 1. Every
text fold therefore runs backwards across the seam: peach goes 3 → 2 body lines and the document gets 79 px
shorter as the window narrows.

### 8. The title-fold ladder

The four titles need different widths, so they fold in a fixed order as content shrinks:

| tile  | folds to 2 lines at | viewport | why                                   |
| ----- | ------------------- | -------- | ------------------------------------- |
| rose  | content ≤ **252**   | 385      | *We couldn't reach your door* (27 ch) |
| lilac | content ≤ **202**   | 336      | *You unlocked a free dessert* (27 ch) |
| peach | content ≤ **201**   | 335      | *Your card expires soon* (22 ch)      |
| mint  | content ≤ **198**   | 332      | *Your box is on its way!* (24 ch)     |

Measured pairs: rose `251 → 2 lines / 256 → 1` (and `251.5 / 254` in the two-column band), lilac `202 / 203`,
peach `201 / 204`, mint `198 / 200`. Body-text folds in the same band: peach `4 → 3` lines at content **225**,
mint `4 → 3` at **242**, lilac `1 → 2` at **277**.

## Screenshot analysis (the `TEMPLATES.md` reference image)

`https://colorlib.com/wp/wp-content/uploads/sites/2/alert-10.jpg` — **25,688 B**, **1200 × 972**, an **AVIF
container behind a `.jpg`** (`file` → `ISO Media, AVIF Image`; `PIL` opens and saves it as PNG).

What it shows, and what is **mock-up only**:

- a **macOS browser window** — three traffic lights, a light grey title bar, a drop shadow and a **filled URL
  pill** reading `preview.colorlib.com`. **None of it is in the render**: the ground is `#fffdf8` edge to edge
  with no frame, no desk and no shadow.
- inside the frame the content matches the live page **1:1**: the muted greeting with its seedling emoji, the
  two-line-free bold title, the **2 × 2** grid of mint / lilac / peach / rose tiles, the tilted squircle badges
  with their glyphs, and the four white pills.
- the screenshot's own aspect (`1200 × 972`) is the window box, not the page: the live page is **900** tall at
  1440 wide, i.e. a wider, shorter canvas.
- the `srcset` also serves `-1024x829`, `-768x622`, `-408x330`, `-353x286`, `-338x274` crops.

Visual read for fidelity: the tiles read as **four equal pastel cards with generous 28 px radii**, whose only
internal rule is the 18 px gap between a 64 px badge and the text column; the badges carry a visible **bottom
lip** (the inset shadow) and a slight colored glow; the pills are **white and flat**, and their labels are the
only place the variant's *dark* colour appears outside the title.

## Token reference block

```css
/* ground + ink */
--ground: #fffdf8;   --ink: #2b2433;   --muted: #6b5f73;   --body: #3f3547;

/* mint — the base block, no modifier class rule */
--mint-bg: #e3f7ec;  --mint-badge: #9be3bd;  --mint-ink: #0f5132;  --mint-btn: #13603c;
/* lilac */
--lilac-bg: #efe8ff; --lilac-badge: #cdb8ff; --lilac-ink: #4a2b91; --lilac-btn: #5b37b0;
/* peach */
--peach-bg: #fff0e0; --peach-badge: #ffc98f; --peach-ink: #7a3c06; --peach-btn: #8e4608;
/* rose */
--rose-bg: #ffe8ee;  --rose-badge: #ffb3c5;  --rose-ink: #8f1239;  --rose-btn: #a3163f;

/* chrome */
--pill: #fff;                                  /* + 0 2px 0 rgba(0,0,0,.06) */
--badge-inset: inset 0 -4px 0 rgba(0,0,0,.06); /* + 0 6px 14px -8px <tone-ink> */
--tile-lift: 0 16px 30px -22px rgba(43,36,51,.45);

/* type */
--face: "Nunito", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--h1: clamp(28px, 5vw, 40px) / 800 / 1.5 / -.02em;
--hello: 17px / 700;      --tile-title: 19px / 800 / 1.25;
--tile-text: 15.5px / 400 / 1.5;   --pill-text: 15px / 800 / 1.5;

/* radii */
--r-tile: 28px;  /* 24 ≤480 */   --r-badge: 22px; /* 18 ≤480 */   --r-pill: 999px;
```

## Source → React adaptation

| reference                                                  | port                                                                                          |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 20 `@font-face` from the host's `/cf-fonts/` block, 0 in the sheet | one Google Fonts link `Nunito:wght@500;600;700;800&display=swap` (the archive's own URL) |
| `font-weight: 400` on `__text` (no 400 face exists)         | `font-medium` (500) — the weight that actually renders                                          |
| four `--cl-alert10-*` props × 4 variants                    | one `AlertTile` + `tone` prop; `@theme` tokens per variant                                      |
| `nth-child(even) .__badge { rotate(4deg) }`                | `index % 2 ? 'rotate-4' : '-rotate-4'` (or `[&:nth-child(even)]:rotate-4`)                      |
| `repeat(auto-fit, minmax(min(100%,380px),1fr))`             | same in Tailwind arbitrary value — **never** `md:grid-cols-2`                                   |
| `box-shadow: inset 0 -4px 0 …, 0 6px 14px -8px var(--ink)` | `shadow-[inset_0_-4px_0_rgba(0,0,0,.06),0_6px_14px_-8px_var(--tone-ink)]`                       |
| `<p class="__title">`                                       | `h2` + `aria-labelledby` on the tile                                                            |
| `role="status"` ×3 + `role="alert"` on permanent tiles      | no live region at all                                                                           |
| dead `#track / #treat / #card / #reschedule`                | real section ids or routes                                                                      |
| `.cl-icon` dead rule; `.cl-alert10--mint` phantom modifier  | neither ported                                                                                  |
| inline SVG glyphs `32` viewBox at `30`, `stroke-width 2.2`  | `lucide-react` `Truck / Gift / CreditCard / CircleAlert` at `30` with `strokeWidth={2.2}`       |
| `:where(html) … { all: revert }` (15 blocks)                | dropped; keep the *effect* only (no host inheritance inside the tile)                           |

## Sibling comparison (the `alert` family, variants 01–10)

| prep         | device                                                        | script | motion                          | grid               |
| ------------ | ------------------------------------------------------------- | ------ | ------------------------------- | ------------------ |
| noticeboard  | static severity ladder                                        | none   | none                            | column             |
| allclear     | dismiss/restore list                                          | yes    | none                            | column             |
| fieldguide   | admonitions inside prose                                      | none   | none                            | one article        |
| banderole    | page-level announcement bar                                   | yes    | none                            | one bar            |
| snapback     | file list + two actionable bars                               | yes    | progress                        | column             |
| beaconry     | dark cluster-health panel, four simultaneous alerts           | yes    | none                            | column             |
| proofmark    | form returned with an error summary                           | yes    | none                            | column             |
| mayfly       | self-dismissing toast stack                                   | yes    | countdown + exit                | stack              |
| steadystate  | status page, native `<details>` timeline                      | none   | 200 ms chevron                  | one card           |
| **punnet**   | **four permanent pastel tiles, one per subject, in a grid**    | **none** | **2 px lift + pill fill**     | **auto-fit 2 × 2** |

Family "firsts" this variant owns: the only **grid** (every other variant is a column, a bar or a stack); the
only **multi-hue palette** where colour means *category*, not severity; the only one whose **two-column seam is
a `minmax()`** rather than a media query; the only one with **rotated** decorative boxes (so rects ≠ boxes);
one of only three with **no script at all** (with fieldguide and steadystate); and the family's **smallest
archive by two orders of magnitude** — **4,484 B** against ~253–310 KB — because it ships **no `woff2`, no `js`
and no `img`** at all.

Shared with the earlier nine: the `:where(html) … all: revert` guard (all ten carry it), one dead `.cl-icon`
rule (ten in a row), a README that describes files the archive does not contain, a screenshot that is a macOS
mock-up, and dead in-page fragments as the primary affordance.

## Traps this prep measured (reusable)

1. **A rotated box's rect is not its size.** `64 × 64` at `4°` measures `68.31`; a `30` SVG measures `32.02`.
   Assert the *computed* `width`/`height` or the transform, and allow for the rotation in any pixel assertion.
2. **A grid row stretches, so a card's height is not its content's.** At vw 815 the rose title folds and the
   *peach* card goes `202 → 225.75` with identical copy. Read `__text`'s line count (or the body's height)
   before blaming a rewrite.
3. **A padding + badge step in one media query inverts the ladder.** At 480 content grows 319 → 346 while the
   viewport shrinks, so the document gets **79 px shorter** as the window narrows and text folds run backwards.
   Sweep 1 px either side of every breakpoint and around every fold.
4. **`minmax(min(100%, 380px), 1fr)` is a content threshold, not a breakpoint.** The seam lands at **812**
   (`wrap 780`), and the card keeps shrinking above it (440 → 380) — a `md:grid-cols-2` port moves the seam to
   768 and changes every height between 768 and 812.
5. **A 400 request with no 400 face is served the 500 binary.** Canvas A/B (`"Your Sprout Box updates"` at
   32 px) reads **359** at both 400 and 500 while 600/700/800 read **361 / 372 / 383** — that equality *is* the
   tell. `900` reads **383** too, i.e. it clamps to the variable cut's top. Never quote `font-weight` from the
   sheet; measure the advance widths.
6. **`getBoundingClientRect()` on a rotated badge** is also why the badge's `x` is `21.85` from the tile's
   padding edge (`24 − 2.15`) — the visual left edge sits outside the 64 px box.
7. **A hover lift on a non-interactive tile is a defect, not a feature.** Keep the animation, but the port
   must not make the tile clickable or focusable to "justify" it.
8. **The screenshot's macOS frame is never part of the design.** Three variants in a row now ship a mock-up
   image; the page itself is edge-to-edge on its own ground colour.
