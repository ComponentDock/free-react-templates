# Alpenglow — design notes (ColorLib "Hero V11")

`apps/alpenglow` recreates `https://preview.colorlib.com/theme/bootstrap/hero-11/`
(https://colorlib.com/wp/template/hero-11/ — the slug-only preview path 404s) under a new name. Every number below
was measured on 2026-11-11 with `curl -4` and node Playwright Chromium at 1440 × 900 unless a width is named;
motion was frozen with an injected `animation-play-state: paused`, because four of this page's layers move
continuously.

## 1. What the page is

A single-screen **outdoor brand-film hero**: a landscape painted entirely in CSS, one left-aligned copy column, and
a film that opens in a modal.

- **Zero photographs.** The page has **0** `<img>` elements. The mountains are three inline-SVG **data URIs** used as
  repeating `background-image`s, the stars are eight `radial-gradient` dots, the sun is one radial gradient, and the
  sky is one five-stop linear gradient being panned. It is the family's only "video-background" hero that is neither
  a video nor an image.
- **Two behaviours, 62 lines of JS.** A progressive mobile menu, and a `<dialog>` player. No scroll effects, no
  observers, no reveal engine.
- **One page.** No inner routes exist: eight plausible names × both prefixes all return 404, and `index.html` is
  byte-identical to the directory URL.
- **No footer.** The reference ends on the chapter strip; the port adds a slim Component Dock footer (delta in the
  spec).

## 2. DOM skeleton (from the live DOM, class names as-is)

```
div.cl-hero11
├─ div.cl-hero11__scene[aria-hidden=true]
│  ├─ span.cl-hero11__sky
│  ├─ span.cl-hero11__stars
│  ├─ span.cl-hero11__sun
│  ├─ span.cl-hero11__range.cl-hero11__range--far
│  ├─ span.cl-hero11__range.cl-hero11__range--mid
│  ├─ span.cl-hero11__range.cl-hero11__range--near
│  └─ span.cl-hero11__grain
├─ header.cl-hero11__bar            (.is-enhanced / .is-open)
│  └─ div.cl-hero11__bar-inner
│     ├─ a.cl-hero11__logo           svg 26 + "Northbound"
│     ├─ button.cl-hero11__menu-btn  svg.cl-hero11__menu-open | svg.cl-hero11__menu-close
│     └─ nav.cl-hero11__nav#cl-hero11-nav[aria-label=Main]
│        └─ ul.cl-hero11__links > li × 4 > a.cl-hero11__link   (first has aria-current="page")
├─ main.cl-hero11__main
│  ├─ section.cl-hero11__hero[aria-labelledby=cl-hero11-title]
│  │  ├─ p.cl-hero11__kicker            "A Northbound film · 2 min 14 s"
│  │  ├─ h1.cl-hero11__title#cl-hero11-title
│  │  ├─ p.cl-hero11__sub
│  │  └─ div.cl-hero11__actions
│  │     ├─ button.cl-hero11__play[aria-haspopup=dialog][aria-controls=cl-hero11-dialog]
│  │     │  ├─ span.cl-hero11__play-icon (svg 22)
│  │     │  └─ span.cl-hero11__play-text "Watch the film" + span "2:14"
│  │     └─ a.cl-hero11__shop
│  └─ ul.cl-hero11__chapters[aria-label="Film chapters"] > li × 3 > span (01/02/03) + text
└─ dialog.cl-hero11__dialog#cl-hero11-dialog[aria-labelledby=cl-hero11-dialog-title]
   ├─ div.cl-hero11__dialog-head > h2.cl-hero11__dialog-title + button.cl-hero11__close
   └─ div.cl-hero11__player
      ├─ div.cl-hero11__screen > span.cl-hero11__screen-label + p.cl-hero11__screen-note
      └─ div.cl-hero11__controls[aria-hidden=true]
         ├─ span.cl-hero11__ctl-play (svg 14)
         ├─ span.cl-hero11__ctl-track > span
         └─ span.cl-hero11__ctl-time "0:38 / 2:14"
```

Census: **42** markup classes (all declared, no phantom), 1 `h1`, 1 `h2`, 6 `<svg>`, 3 `<button>`, 6 `<a>` (all
`#`), 0 form controls, 1 `dialog`, 0 `footer`. `.cl-icon` is declared and never used.

## 3. CSS token block (verbatim shape to port)

```css
body { margin: 0; background: #0f1426;
       font-family: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif }

.cl-hero11 {
  --cl-hero11-ink: #fff;
  --cl-hero11-soft: #dfe3f1;
  --cl-hero11-accent: #ffb86b;
  --cl-hero11-night: #0f1426;
  --cl-hero11-gutter: clamp(16px, 4vw, 48px);
  position: relative; isolation: isolate; display: flex; flex-direction: column;
  min-height: 100vh; overflow: hidden; background: var(--cl-hero11-night);
  color: var(--cl-hero11-ink); font-size: 16px; line-height: 1.55;
}
.cl-hero11 a      { color: inherit; text-decoration: none }   /* ← the 0,1,1 bug, delta 7 */
.cl-hero11 ul     { margin: 0; padding: 0; list-style: none }
.cl-hero11 a:focus-visible, .cl-hero11 button:focus-visible
                  { outline: 3px solid var(--cl-hero11-accent); outline-offset: 3px }
```

The page also opens with a **host reset**: `:where(html) :is(html,body,div,…) { all: revert }` over 56 selectors,
22 `revert` declarations in all, so that a host framework's `box-sizing` and type scale cannot leak in. In a React
port the reset is unnecessary (Tailwind's preflight is the base), but the `[hidden] { display: none }` re-declaration
and the `vertical-align: revert` on `img/svg` are worth keeping in mind if any framework CSS is added later.

Palette, complete: night `#0f1426` · ink `#fff` · soft `#dfe3f1` · amber `#ffb86b` · live `#ff5d5d` · sky
`#1a2150 → #43377a → #b95d8a → #f59a6c → #ffd48e` · ranges `#6d3f78` / `#392d5c` / `#161b33` · sun `#fff0c2` /
`#ffd08a` · hairline `rgba(255,255,255,.22)` · dialog `#0b0f1f` · screen `#1d2550 → #5a3470 → #c0607a`. **Eighteen
values in all, four of them tokens** — this page is unusual in that most of its colour lives in the scene, not in a
ramp.

## 4. Screenshot read (`hero-11.jpg`, 1200 × 972, AVIF behind a `.jpg`)

The listing image is a **macOS browser mock-up** — traffic lights, a `preview.colorlib.com` URL pill, rounded corners
and a drop shadow on a near-white ground — with the page inside at ≈ **1112 px**. Never adopt the frame.

What the page inside actually shows, top to bottom:

1. A dark indigo sky that warms toward the horizon: violet at the top, magenta band across the middle, peach-gold at
   the bottom third. The gradient is **visible**, not a flat wash, and the left half is noticeably darker than the
   right — that is the grain layer's 90° gradient doing its job.
2. **Three overlapping mountain silhouettes** — a mauve far range, a deep purple mid range, and a near-black front
   range — each with a zig-zag ridge line, all anchored to the bottom edge.
3. A **bright sun** low and right of centre (roughly 68 % across, 40 % down), with a soft halo bleeding into the sky
   and a visible hard disc edge — the reference's radial has a hard stop at 31 %.
4. A **white wordmark** at the top left with a small stroke-only mountain glyph; four **white nav labels** at the top
   right, the first carrying a short amber underline.
5. A **two-line headline** in an extremely heavy, tightly tracked grotesque, its two lines optically equal in weight
   (the first line ends short, the second runs long).
6. A **three-line soft grey-blue paragraph** capped well short of the headline's width.
7. A **white play disc** with a thin ring around it (the 1.2 s-delayed ripple mid-flight), a two-line label beside
   it, and an **outlined pill** to its right.
8. A **hairline rule** and three **chapter** items: amber `01/02/03`, soft labels, generous 40 px gaps.

Two things the screenshot implies but does not show: the **dialog** (it is only reachable by clicking play) and the
**mobile layout** (no phone frame is included).

## 5. Section-by-section fidelity notes

### 5.1 Shell + scene

- The shell is **exactly 900** at 1440 × 900. The content floor is **766** (bar 82.8 + hero 604.52 + strip 78.25),
  and `min-height: 100vh` absorbs the difference. At **1440 × 600** the document is 766 and scrolls.
- `main { flex: 1; justify-content: center }` centres **the hero and the chapter strip together** (682.77). The hero
  therefore starts at **y 150.02**, not at `82.8 + 96`. This is the single most mis-portable line on the page: a port
  that centres the hero alone will put it 34 px lower.
- The sky is a **160 %-tall canvas on a 100 %-tall box**, so the visible window at `background-position: 0 0` is the
  top **62.5 %** of the gradient — at rest the page never shows the `#ffd48e` stop. The 16 s animation slides the
  canvas up until the bottom stop is visible, which is the slow "sunset" the design is selling. Do not "simplify" it
  to a static 100 % gradient: the page then has no gold at all.
- The sun's size is **`34vmin`** — viewport-height-driven, so at 1440 × 900 it is **306**, and at 1440 × 600 it is
  still 306 (the height did not change) while at 900 × 1200 it would shrink to 204. Assert it via
  `offsetWidth`/`offsetHeight`, never its rect (delta 8).
- The three ranges use `background-size: <w>px 100%` + `preserveAspectRatio='none'`, so the ridge line **stretches**
  to the band height. Keep the data URIs inline; re-drawing them as three `<svg>` elements changes how they tile.

### 5.2 Header bar

- No border, no fill, no `position: sticky` — the bar is simply the first flex child. It is **82.8** tall at 1440
  (24 + 34.8 + 24) and **94** at ≤860 (the 46 px button). That 11.2 px difference is the only geometric consequence
  of the menu button existing.
- The wordmark is `inline-flex` with `gap: 10`; its 158 px width is 26 glyph + 10 + the 20 px/800 text. The glyph is
  `stroke="currentColor" stroke-width="2"` with `fill="none"` — a **path**, not an icon font.
- Every nav link is `padding: 4px 0` + a **2 px** border, so a resting link is 34.8 tall and the amber current
  underline sits **2 px** below the text box, not on its baseline. Getting this wrong changes the bar height.

### 5.3 Kicker

- Three details in one line: the **8 px red dot** with a 4 px 25 % ring (so it reads as 16 px of colour and eats
  10 px of `gap`), the **`.16em` tracking** (2.24 px at 14 px), and the fact that it is **inline-level**.
- Because it is `inline-flex` it lives in the parent's **24.8 px strut** and its box starts **2.15 px** below the
  hero's padding edge (248.17 against 246.02). The `h1`'s 18 px margin then counts from the strut's bottom (270.82),
  not from the kicker's box (269.86). A `flex flex-col` port blockifies the kicker and moves everything up 2.15 px —
  acceptable, but record it.
- It wraps to **2 lines at 349 and below**, which adds 21.69 to the column.

### 5.4 Headline

- **99.2 px / 94.24**, weight **800**, tracking **-3.968**. The 99.2 is the clamp ceiling (`6.2rem`) reached at vw
  **1400**; below that it is `20.8 + 5.6vw`. The line-height is `.95` — the two lines are *tighter than solid*, which
  is why the second line's cap sits so close to the first line's descender.
- `text-wrap: balance` matters: the copy breaks **"Made for the" / "long way round"**, i.e. the second line is longer
  (652.45 vs 538.39). Without balance the browser would break it near the middle of the string.
- The whole `h1` occupies 720 (the hero's width), while the text inside it only reaches 652.45 — do not set a width
  on the heading itself, or the balance re-breaks.
- Line ladder: **3 lines ≤322**, **2 lines ≥323**, never 1, never 4.

### 5.5 Sub-paragraph

- `max-width: 34em` resolves against its own font-size, so the cap moves with the clamp: **652.8** at 1440 (19.2 px),
  **479.34** at 521 (16.9 px). That is why it holds 3 lines from 504 and 4 from 382.
- Its colour is the page's only real use of `--soft` outside the chapter strip — and it is the pair that decides the
  design's readability (10.71 : 1 over the wash).

### 5.6 Action row

- The play control is a **button whose disc is the visual**: 76 px white, **`padding-left: 3px`** to optically centre
  the triangle, and the label sits 16 px to its right. The two ripple rings are `::before`/`::after` on the **icon**,
  not on the button, so they scale from the disc's centre.
- `border: 1.5px` on the pill **computes and lays out as 1 px** (height 54.8 = 24.8 + 28 + 2, and
  `getComputedStyle` reports `1px`). Same 1.5 → 1 rounding as `underrule` and `notebell`. Write `1px`.
- The pill is **vertically centred** in the 76 px row by `align-items: center`, which is why its y is 633.13 rather
  than 622.53.
- The row wraps **of its own accord at 573** (240 + 28 + 260 = 528 > the 524.4 the hero offers) and the media query
  at 520 then forces the full-width form. Two different mechanisms, one visible effect; the spec asserts both seams.

### 5.7 Chapter strip

- Full `main` width (**1224**), not the hero's 720 — it is a sibling of the hero section, and that is the page's
  strongest single composition cue: the rule runs past the copy column.
- `padding: 22px 0 32px !important` — the `!important` exists because the reference's own `ul` reset would otherwise
  win the shorthand. Port it as `pt-[22px] pb-8` and drop the flag.
- Three wrap states: **1 row ≥603**, **2 rows 521–602**, **column ≤520**. 554 px of items + 80 px of gaps is why the
  one-row seam is 603 and not 640.

### 5.8 Dialog

- 960 wide, **610** tall = 70 head + 540 screen. The screen is `aspect-ratio: 16/9` on the dialog's width, so the
  height is derived, never declared.
- The fake control bar is `position: absolute` inside `.cl-hero11__player` (which is `relative`), inset `0 16px 14px`
  — it floats **over** the screen's bottom, which is why the screen's own `place-content: center` content sits
  slightly high.
- The close-on-backdrop logic is not `e.target === dialog` alone: a `showModal()` dialog's backdrop click **does**
  target the dialog, so the reference re-tests `clientX/clientY` against the dialog's rect and closes only when the
  point is **outside** it. Removing that test makes any click inside the player close the film.
- `is-paused` on the **shell** (not the dialog) is what pauses the scene — `animation-play-state: paused` on
  `.cl-hero11.is-paused .cl-hero11__scene *`. Without it the sky keeps drifting behind the modal.

### 5.9 Motion

Seven infinite animations plus one on-open animation: `sky` 16 s, `twinkle` 4 s, `sun` 16 s, `pan` 120 s,
`pan-mid` 70 s, `pan-near` 40 s, `ripple` 2.4 s × 2 (one delayed 1.2 s), `pop` .3 s. The reduced-motion reset is a
single rule on `.cl-hero11 *`, `.cl-hero11 *::before`, `.cl-hero11 *::after`, `.cl-hero11__dialog` and its subtree
with `!important` — the only `!important` in the sheet besides the strip's padding.

## 6. Source → React adaptation table

| Source | Port | Note |
| --- | --- | --- |
| static `index.html` | `App.tsx` + `sections/` | one route, no data layer |
| `.cl-hero11__scene` spans | `SceneBanner` with `aria-hidden` | keep the seven layers as separate divs; the CSS is per-layer |
| `.cl-hero11__bar` + `.is-enhanced`/`.is-open` | `SiteBar` with `useState` + `useEffect` | progressive: only enhance after mount |
| menu `matchMedia` listener | `useEffect` returning a cleanup | the reference never removes it; the port must |
| `.cl-hero11__play` `<button>` | `<button aria-haspopup="dialog">` | not an anchor |
| native `<dialog>` + `showModal()` | same, via `useRef` | keep native: focus trap and Esc come free |
| `.is-paused` on the shell | `isPaused` state on the root | pauses all seven scene animations |
| backdrop rect test | `onClick` on the dialog with the same rect check | do not drop it |
| inline SVG mountains (data URI) | same data URIs in `@theme`/arbitrary CSS | not `public/` files |
| `.cl-icon` (dead utility) | drop | nothing uses it |
| `a { color: inherit }` bug | `text-soft` on resting links | see delta 7 |
| 6 dead `#` anchors | `#top`, `#chapters`, componentdock.com | no `href="#"` in the port |
| — | `Footer` strip | the reference has none |

## 7. Sibling comparison (the 12-variant `hero` family)

| Variant | Name | Device | Background | Motion |
| --- | --- | --- | --- | --- |
| 01 | proscenium | centred copy + 3D product mock | tinted ground + glow | 1 breathing glow |
| 02 | afterglow | centred copy + glass pill | blurred photo | reveals |
| 03 | presswork | two-column editorial | paper + rules | minimal |
| 04 | tendril | phone mock + bobbing cards | soft gradient | bob + reveals |
| 05 | epistle | newsletter hero | tinted band | reveals |
| 06 | overtone | warm product hero | gradient | subtle |
| 07 | soapbox | conference hero + tickets | dark + lime | reveals |
| 08 | trattoria | photo hero, hours card | full-bleed photo | glass, no motion |
| 09 | belvedere | rotating sticker + copy | gradient | rotation |
| 10 | virga | centred copy + stats band | line grid + radial mask | 1 breathing glow |
| **11** | **alpenglow** | **left copy + play disc + dialog** | **CSS landscape (5 gradients + 3 SVG ranges)** | **7 infinite + 1 open** |
| 12 | — | not yet prepped | — | — |

Where this one differs from everything before it: it is the only hero whose **background is drawn content** rather
than a wash, the only one with a **modal** (a real `<dialog>` with focus management), the only one whose primary CTA
is a **`<button>`** rather than a link, and the only one that is **exactly viewport-height at a 900 viewport at every
width**. It is also the first with a **second heading level** on the page (the dialog's title) — the earlier ten have
either 0 or 1 `h2`.

Shared with **virga** (10) and **belvedere** (9): a `100vh`-floored flex column with `overflow: hidden`, a menu that
is progressive (`.is-enhanced`), and the family's `a { color: inherit }` specificity artefact. Shared with **trattoria**
(8): a left-hanging composition over a photographic-feeling ground, and a hairline-ruled meta row at the bottom of the
hero.

## 8. Traps (measured, not inferred)

1. **The family's `a { color: inherit }` wins again (0,1,1 > 0,1,0).** All four resting nav links compute to ink
   `#fff`; their declared `#dfe3f1` never paints. Probe a **non-current** link: `querySelector` returns the
   `aria-current` one, which is legitimately ink at 0,2,0, and the bug looks like intent. The hover and current rules
   are also 0,2,0, so only the **resting** state is wrong.
2. **Four layers move, so four rects lie.** The sun drifts `translateY(12%)` on 16 s, the ranges pan their
   `background-position` continuously, the sky moves its 160 % canvas, and the two ripple rings scale to 1.7. Freeze
   with `animation-play-state: paused` (or open the dialog, which sets `.is-paused`) before measuring anything.
3. **`main { justify-content: center }` centres two children, not one.** The hero's y is `82.8 + (817.2 − 682.77)/2
   = 150.02`. A port that centres only the hero lands at 189.14 — 39 px low.
4. **The kicker is inline-level and floats 2.15 px into the strut.** Blockifying it moves the entire copy column up
   2.15 px and re-derives the `h1`'s margin origin.
5. **`border: 1.5px` computes and lays out as 1 px.** The pill's 54.8 height proves it (24.8 + 28 + 2). Write `1px`;
   do not copy the declaration and wonder where the half pixel went.
6. **Two mechanisms produce the same wrap.** The action row wraps at **573** by pure flex arithmetic (528 > 524.4)
   and is forced at **520** by the media query — with different heights (148.8 vs 136.8, because the disc shrinks).
   Assert both.
7. **The sky's visible window is the top 62.5 % of a 160 % canvas.** "Simplify" the gradient to 100 % and the page
   loses every warm stop, including the gold band the sun sits in.
8. **`34vmin` is height-driven.** At 1440 × 900 the sun is 306; at 900 × 1200 it would be 204, and below 861 the
   media query replaces it with `50vmin` anyway. Assert offset size, and assert it at a named viewport height.
9. **A backdrop click targets the dialog.** The reference's `clientX/Y` + `getBoundingClientRect` re-test is load
   bearing: without it, clicking anywhere in the player closes the film.
10. **The document is exactly the viewport at 900 — and that is not a claim about the design's height.** The content
    floor is 766 (1440) to 843 (320); a 600-tall window scrolls 166 px. Do not "make it fit 900" by shrinking the
    hero; the reference behaves the same way.
11. **Weight 600 in Figtree is narrower than 500** (607 vs 612 at 40 px) and 300/900 clamp to the declared
    400/800 ends. Never infer a missing weight from an advance width, and never request 300 or 900.
12. **`!important` appears exactly three times**: the chapter strip's padding (an artefact of the reference's own
    reset) and the two lines of the reduced-motion block. Anything else that needs `!important` in the port is a
    specificity bug to fix at the root.
