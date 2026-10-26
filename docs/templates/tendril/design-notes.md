# Tendril — design notes (`hero-04`, hero family 4/12)

Measured 2026-10-26 against the live preview (`theme/bootstrap/hero-04/`, HTTP 200) with Playwright Chromium at
twenty-six widths, motion disabled via `reducedMotion:'reduce'`, and every wrap claim re-read after
`document.fonts.ready`; plus `curl -4` for the paper facts, a canvas A/B for the four weight instances, and
`pg.hover()` for the two hover states.

- Live preview: `https://preview.colorlib.com/theme/bootstrap/hero-04/` — **200, 6,279 B**. Slug-only
  `theme/hero-04/` → **404 (9 B)**; `theme/bb/hero-04/` → **404 (9 B)**.
- Stylesheet: `css/style.css?v=a4de6ffa` — **17,070 B, 808 lines**, sha256 `da7d13d74f6599bf…`.
- Script: `js/snippet.js?v=74382b2d` — **1,363 B**, sha256 `62165aac55010cf5…`; a single IIFE, menu only.
- Archive: `preview.colorlib.com/downloads/free/hero-04.zip` — **200, 385,195 B** (376.2 KiB, matching the
  listing's "376 KB"), **16 entries** = 4 dirs + 12 files. `css/style.css` **and** `js/snippet.js` hash
  **identically** to the live copies → **live preview verified; the archive is its un-versioned twin**. The two
  HTML files differ **only in `<head>`** (the `robots` pair, cdnjs `dns-prefetch`, `fetchpriority`, `?v=`).
- README: advertises `js/snippet.js` (true this time) **and** an `images/` folder (false — there is no `<img>`
  anywhere and no `images/` in the archive). Fourth variant in a row with at least one invented file.
- Screenshot: `hero-04.jpg` — **37,231 B, 1200 × 972**, **AVIF behind a `.jpg`** (converted with PIL before
  analysis). It is a macOS browser mock-up; the page inside the frame is ~1120 px wide.
- Inner pages: **none**. `index.html` is **200, 6,279 B** and **byte-identical** to the directory URL
  (`sha256 39b66ebe…` both ways); `about.html`, `features.html`, `stories.html`, `help.html`, `pricing.html` all
  **404 (9 B)**; one HTML file in the archive.
- Fonts: **8 `@font-face` over 2 binaries**. All four weights (400/500/700/800) point at the *same* two woff2
  files — `latin` **62,556 B** and `latin-ext` **31,312 B** — and the woff2 table directory of both carries
  `fvar`, `HVAR`, `MVAR`, `avar`, i.e. **they are variable**. Chrome instances the axis per declared weight:
  canvas A/B (`100px`, `"Small habits, tracked kindly."`) gives **1,134 / 1,175 / 1,252 / 1,264** for
  400 / 500 / 700 / 800, and `"Loop Plus"` gives **398 / 407 / 425 / 427**. So the page really renders four
  weights out of two files.
- CSS: **119** `{` blocks, 8 `@font-face`, 1 `@keyframes`, 3 width queries (**960 / 860 / 520**) + reduced motion,
  7 custom properties on the shell (6 `--cl-hero04-*` + the gutter), **39** hex literals / **25** distinct
  colours, **6** `rgba()`, **3** gradients, **3** transitions, **4** animation declarations, **23** `revert`,
  **5** `!important`.
- Classes: **45** `cl-*` in the markup, **all** with rules; `.cl-icon` is the **fifteenth consecutive dead rule**;
  `is-done` (×3) and `is-today` (×1) are markup state classes with **no rule of their own**; `is-enhanced` and
  `is-open` exist only in CSS and are added by the script.

## DOM skeleton (verbatim shape, 92 lines of markup)

```
div.cl-hero04
├── header.cl-hero04__bar
│   └── div.cl-hero04__bar-inner
│       ├── a.cl-hero04__logo[href="#"]
│       │   ├── span.cl-hero04__logo-mark[aria-hidden] → svg 18×18 (circle r6.5, dasharray "30 11", rotate -60)
│       │   └── "Loop"
│       ├── button.cl-hero04__menu-btn[type=button][aria-expanded=false][aria-controls=cl-hero04-nav][aria-label]
│       │   ├── svg.cl-hero04__menu-open  (three lines)
│       │   └── svg.cl-hero04__menu-close (X)
│       └── nav.cl-hero04__nav#cl-hero04-nav[aria-label="Main"]
│           └── ul.cl-hero04__links
│               └── li × 4 → a.cl-hero04__link
│                            Features[aria-current=page] · Loop Plus · Stories · Help
├── main.cl-hero04__main
│   └── section.cl-hero04__hero[aria-labelledby=cl-hero04-title]
│       ├── div.cl-hero04__copy
│       │   ├── p.cl-hero04__rating
│       │   │   ├── span.cl-hero04__score   "4.9"
│       │   │   ├── span.cl-hero04__stars[aria-hidden] "★★★★★"
│       │   │   └── span "from 38,000 ratings"
│       │   ├── h1.cl-hero04__title#cl-hero04-title
│       │   │   ├── (text node) "Small habits, "
│       │   │   └── span "tracked kindly."        ← display:block, green
│       │   ├── p.cl-hero04__sub
│       │   ├── div.cl-hero04__stores
│       │   │   └── a.cl-hero04__store[href="#"] × 2
│       │   │       ├── svg 26×26 (phone | play triangle)
│       │   │       └── span → small.cl-hero04__store-top + span.cl-hero04__store-name
│       │   └── ul.cl-hero04__facts
│       │       └── li × 3 → strong + text          (dot = ::before)
│       └── div.cl-hero04__visual[role=img][aria-label="Two phones showing the Loop app: …"]
│           ├── div.cl-hero04__phone.cl-hero04__phone--back
│           │   └── div.cl-hero04__screen.cl-hero04__screen--stats
│           │       ├── span.cl-hero04__s-label "This week"
│           │       ├── span.cl-hero04__streak "42"
│           │       ├── span.cl-hero04__s-sub "day streak"
│           │       ├── div.cl-hero04__week → span × 7 [style="--v:.6"] … [--v:.75]
│           │       └── div.cl-hero04__week-days → span × 7 "M T W T F S S"
│           ├── div.cl-hero04__phone.cl-hero04__phone--front
│           │   ├── span.cl-hero04__notch
│           │   └── div.cl-hero04__screen
│           │       ├── div.cl-hero04__app-top → span.cl-hero04__hello + span.cl-hero04__avatar "P"
│           │       ├── div.cl-hero04__days → span × 5 (Mo 21 … Fr 25, third .is-today)
│           │       ├── div.cl-hero04__ring-wrap
│           │       │   ├── span.cl-hero04__ring[style="--p:71%"] → span → b "5/7" + "done"
│           │       │   └── span.cl-hero04__ring-text → b "Nice pace." + " Two to go before bedtime."
│           │       └── ul.cl-hero04__habits → li × 5 (i + text; first three .is-done)
│           └── span.cl-hero04__toast[aria-hidden] "🎉 42-day streak!"
└── (script tag)
```

Nothing else: one `<h1>`, **zero** `<h2>`, five inline SVGs, **zero** `<img>`, **one** `<button>`, two ids
(`cl-hero04-nav`, `cl-hero04-title`), and **seven anchors — all seven `href="#"`** (wordmark, four links, two
store buttons). There is no `<footer>` and no second section.

## Token block (copy-paste for `index.css`)

```css
@theme {
  --color-ground:      #e9f4ee;
  --color-ground-top:  #f3faf6;
  --color-halo:        #c9ecd8;
  --color-ink:         #0f2e22;
  --color-muted:       #3d5a4d;
  --color-green:       #127a4f;
  --color-lime:        #c6f36b;
  --color-phone:       #0b0f0d;
  --color-rim:         #2c3a33;
  --color-store-hover: #1d2a24;
  --color-screen:      #fbfdfb;
  --color-cell:        #eef5f0;
  --color-cell-text:   #45604f;
  --color-well:        #e6f7ea;
  --color-track:       #cfe8d7;
  --color-today-label: #cfe5d8;
  --color-card-line:   #e3ece6;
  --color-done:        #54705f;
  --color-strike:      #9ab8a5;
  --color-box:         #b7cdbf;
  --color-avatar:      #fde68a;
  --color-avatar-ink:  #713f12;
  --color-stars:       #b45309;
  --color-stats:       #d6ebe0;
  --font-sans:   "DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --gutter:      clamp(16px, 4vw, 40px);
  --text-display: clamp(2.6rem, 1.2rem + 5vw, 5.2rem);
  --text-lede:    clamp(1.02rem, .95rem + .35vw, 1.2rem);
}
```

That is **25 colours** — the palette is not five hexes like the family's editorial variant: the two phone screens
carry their own neutrals (cell, well, track, card line, done, strike, box, avatar, stats) and the week bars are
the only `rgba()` colour in the design. **Eleven radii** (999 / 44 / 34 / 22 / 18 / 16 / 14 / 12 / 11 / 8 / 6) and
**four shadows**; the phone's and the screen's radii are the two that need arbitrary values in Tailwind.

## Screenshot analysis (1200 × 972, AVIF behind `.jpg`)

A macOS window on a grey ground with traffic lights, a soft drop shadow and a `preview.colorlib.com` pill. Inside
the frame the page is **~1120 px** wide, so the capture sits between the 1100 and 1077 columns of the ladder —
and it shows the **two-column** layout with the three facts still on **one** row (they only wrap below 1078),
which is consistent with a ~1120 px capture.

What it shows: a pale mint page that fades from a lighter top to a faintly greener bottom, with a soft mint glow
behind the product shot; a small dark rounded tile holding a lime ring mark, then the word **Loop** in heavy
without-serif; on the right a frosted white pill holding four links with *Features* inverted to dark. Then the
left column: a **4.9** chip, five amber stars, "from 38,000 ratings"; the headline in two enormous lines — **ink**
"Small habits," and **green** "tracked kindly." — set so tight the descenders almost touch; three lines of muted
copy; two black store buttons with a 19 px label over an 11.5 px eyebrow; and a row of three dotted facts with the
bold lead-ins *Free*, *Offline*, *No ads*.

On the right, the product shot: a **lime disc** mostly hidden behind two phones. The front phone is upright with a
white screen — "Good morning, Priya" and an amber **P** avatar, a five-day strip with *We 23* inverted, a green
ring reading **5/7 done** beside the words "Nice pace. Two to go before bedtime.", then five habit rows with three
green ticked and struck through. The back phone, tilted **8°** to the right and slightly lower, shows a dark screen
with a huge lime **42** over "day streak" and a seven-bar chart with weekday initials. Over the phones' left edge
floats a small white pill: **🎉 42-day streak!**

**The impression is a friendly consumer app, not a SaaS landing page**: no section boundaries at all, no cards in
the hero copy, no photography — the product is drawn, not photographed, and every pixel of it is a div. A port that
adds a screenshot, a logo cloud or a gradient border has already lost the design.

## Section-by-section fidelity notes

**1. The shell and the ground.** Three background layers on `.cl-hero04`: a radial `50% 60% at 78% 55%` from
`#c9ecd8` to transparent 70 %, over a `180deg` ramp `#f3faf6 → #e9f4ee`. The radial's horizontal half-width is
50 % of the page, so its left edge lands at **53 %** (x ≈ 763 at 1440) — the copy column (160–688) never sees it,
which is what makes the contrast numbers in the spec safe to quote. `min-height:100vh`, `flex-direction:column`,
`overflow:hidden` (the last one is what clips the toast: see trap 3).

**2. The bar.** `22px var(--gutter)` padding with the wordmark's 34.09 px line box sizing the row → **83.25**. The
mark is a 34 px ink tile, radius 11, holding an 18 px lime `<circle r=6.5 stroke-width=3 stroke-dasharray="30 11"
rotate(-60 10 10)">` — a ring with one gap, not a logo file. The pill is `rgba(255,255,255,.7)` with `padding:5`
and `gap:6`, so each link's 39.3 px pill sits inside a 39.25 px container: the 5 px padding is *inside* the same
`border-radius:999px`, which is why the group reads as one capsule with a raised dark segment.

**3. The headline.** A bare text node plus a `display:block` span. That is the entire trick: the break between the
two lines never depends on wrapping, so the block is **2 lines at every width from 1440 to 320** while the type
shrinks 83.2 → 41.6 px. `line-height:.98` is what makes the two lines nearly collide, and `-.045em` tracking is
what keeps the 800-weight word shapes from looking fat. At ≤960 the copy column becomes a centred flex column, so
the `h1` shrink-wraps: its box is **251.92** at 320 (its longest line) while the column is 288 — do not read that
box as the column.

**4. The description and the facts.** The paragraph is `clamp(1.02rem,.95rem+.35vw,1.2rem)` — 19.2 px at 1440, the
cap at 1143 — with `max-width:30em`, which resolves to **576** at 19.2 px and therefore never bites at 1440 (the
column is 528); below 960, where the column is 883 wide, it *does* bite (556.8 at 960). The facts row is the only
place the page uses `!important` besides the reduced-motion switch: `margin-top:30px !important` and (on the habit
list) `margin-top:12px !important`, both there to beat the `ul { margin:0 }` reset. Items are **130 / 190 / 104**
for a total of **472** — which is the exact wrap seam (one row at 1078, two at 1077).

**5. The product shot.** Four objects, back to front: the **disc** (440 px, `translate(-40%,-50%)` — deliberately
40 px right of centre so its right edge is flush with the visual's right edge, not centred on the phones), the
**back phone** (240 × 494, `top:40; left: calc(50% + 10px)`, `rotate(8deg)`, dark screen), the **front phone**
(270 × 556, `z-index:2`, white screen, the only phone with a shadow and the only one that bobs), and the **toast**
(`z-index:3`). The disc's visible crescent is what the screenshot reads as a lime glow; it is a plain circle, no
blur, no gradient.

**6. The two screens.** The front screen is `height:100%` inside a 10 px-padded body, so it is **250 × 536**; its
content adds up to exactly 536 and the last habit row ends **39.17 px** above the bottom. The ring is a
`conic-gradient(green 71%, #cfe8d7 0)` with a 50 px inner disc cut out by a same-coloured background — no SVG, no
mask. The checkboxes are 18 px squares (2 px border, radius 6) and the tick is a **data-URI SVG** at 14 px. The
back screen is `padding: 44px 18px 16px 110px` with `align-items:flex-end`, so its content hugs the right edge and
the **110 px left padding** is what keeps the streak numerals clear of the front phone's shoulder.

**7. The week chart.** Seven flex children at `height: calc(var(--v) * 100%)` inside a 110 px row — so the heights
are **66.23 / 93.47 / 77.12 / 109.81 / 98.91 / 49.89 / 82.57** and the tallest bar is the 4th, not the 5th. The
values live in inline styles, which is the one thing a React port should move to an array.

**8. The toast.** `top:60%; left: calc(50% - 300px)` **of the visual** — 264 − 300 = **−36**, i.e. 716 absolute at
1440, which puts its right edge 8 px over the front phone and its left edge 28 px right of the copy column. It runs
the bob with `-3s`, so it rises while the phone falls. It is `aria-hidden`.

## Contrast (computed from the token pairs; the text column is on the linear ramp)

| text                                                | pair                      | ratio     |
| --------------------------------------------------- | ------------------------- | --------- |
| headline `#0f2e22` on `#e9f4ee`                      | ink / ground              | **13.00** |
| second line `#127a4f` on `#e9f4ee`                   | green / ground            | **4.75**  |
| paragraph, rating, facts `#3d5a4d` on `#e9f4ee`      | muted / ground            | **6.73**  |
| score chip, current nav link `#fff` on `#0f2e22`     | white / ink               | **14.64** |
| store labels `#fff` on `#0b0f0d`                     | white / phone             | **19.29** |
| streak `#c6f36b` on `#0f2e22`                        | lime / ink                | **11.46** |
| stats labels `#d6ebe0` on `#0f2e22`                  | stats / ink               | **11.73** |
| habit done text `#54705f` on `#fff`                  | done / card               | **5.44**  |
| weekday label `#45604f` on `#eef5f0`                 | cell / cell               | **6.24**  |
| avatar `#713f12` on `#fde68a`                        | brown / amber             | **6.96**  |
| stars `#b45309` on `#e9f4ee` (`aria-hidden`)          | amber / ground            | 4.46      |
| focus ring `#127a4f` on `#e9f4ee` (3 px, 3 px off)   | green / ground            | **4.75** (≥ 3 for UI) |
| strike `#9ab8a5` on `#fff`                           | —                         | 2.15 — decoration |
| unchecked box `#b7cdbf` on `#fff`                    | —                         | 1.68 — decoration |

Every text pair passes AA. The two sub-2 ratios are decorative: the checkbox square is duplicated by the filled
state and the strikethrough is duplicated by `#54705f` text at 5.44, so neither is the *only* cue — a port that
drops the strikethrough and leaves a 1.68 border as the state would fail 1.4.11.

## Source → React adaptation

| source                                                  | port                                                                    |
| ------------------------------------------------------- | ----------------------------------------------------------------------- |
| `div.cl-hero04` shell                                    | `<App>` — 100vh flex column, the two gradient layers                    |
| `header.cl-hero04__bar` + `bar-inner`                    | `<SiteHeader>` — the only stateful component (`isOpen`)                  |
| `button.cl-hero04__menu-btn` + two SVGs                  | `<MenuButton>` — `aria-expanded` / `aria-controls` / label all derived   |
| `nav.cl-hero04__nav` + 4 links                            | `<Nav>` — `LINKS` array, panel styled from the bar's open state          |
| `div.cl-hero04__copy`                                     | `<HeroCopy>`                                                            |
| `p.cl-hero04__rating`                                     | `<Rating>` — chip + `aria-hidden` stars + sentence                      |
| `h1` (text node + `span.block`)                           | `<Headline>` — **text + `<span className="block">`**, never one node     |
| `p.cl-hero04__sub`                                        | `<Lede>`                                                                |
| `div.cl-hero04__stores` → 2 `a`                            | `<StoreButtons>` over a `STORES` array; icons are components            |
| `ul.cl-hero04__facts`                                      | `<Facts>` over a 3-item array; the dot stays `::before`                 |
| `div.cl-hero04__visual` (`role="img"`)                     | `<PhoneMock>` — keeps `role="img"` + its `aria-label`                   |
| `phone--back` + `screen--stats`                            | `<BackPhone>` → `<StatsScreen>` over `WEEK` (`{v}`) and the initial row |
| `phone--front` + `notch` + `screen`                        | `<FrontPhone>` → `<HabitScreen>` over `DAYS` and `HABITS` (`{done}`)    |
| `span.cl-hero04__toast`                                     | `<StreakToast>` — `aria-hidden`, and its claim also in the visible copy |
| — (none in the source)                                      | `<Footer>` with the Component Dock link                                 |
| `--cl-hero04-*` (6 props)                                   | `@theme` — 25 colour tokens (the phones own the rest)                    |
| `Loop`                                                      | **Tendril** (7 characters; the wordmark grows to ~109, the pill ~10)     |
| 7 × `href="#"`                                              | real routes / in-page ids                                                |

## Family context

Variant **4 of 12** in the `hero` family, and the family's second **product-mock** entry after the first variant —
but drawn in CSS where that one used a perspective card. Where the family sits so far: **Proscenium** (v1) a split
1 : 1.1 hero around a transformed dashboard mock; **Afterglow** (v2) a centred SaaS hero on a four-blob mesh with a
logo cloud; **Presswork** (v3) an editorial, type-only full-height hero with **no script at all**; **Tendril** (v4)
an app-landing hero with a **disclosure menu**, a **two-phone mock** and the family's **first real interactive
state**.

Shared family defects to check on every later variant: the `.cl-icon` dead rule (**15 for 15**), the
`:where(html) … { …: revert }` guard block (23 declarations), the `!important` on a `margin-top` that only exists to
beat the sheet's own `ul` reset, and the README's invented file list (this one still claims an `images/` folder).

New with this variant, worth carrying forward: **8 `@font-face` over 2 variable binaries** (the duplicate hashes are
not a bug), a **rotated box whose rect is 27 % wider than its box**, **two elements sharing one keyframe at
opposite phase**, and a **toast that the shell clips by 39.5 px** because it is positioned against a 528 px column
instead of the page.
