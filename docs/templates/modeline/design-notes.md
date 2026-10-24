# Modeline — design notes (replication of ColorLib "Glamour")

Brief for the implementer. Source design: **Glamour**
(`https://colorlib.com/wp/template/glamour/`,
preview `https://preview.colorlib.com/theme/glamour/`). New app name:
**Modeline** (`apps/modeline`, package `@free-react-templates/modeline`, deploy
`modeline.free.componentdock.com`). Spec:
`openspec/specs/template-modeline/spec.md`.

Prep status: this design has **no app**. Rows **1028**, **1583** and **1712** of
`TEMPLATES.md` say `[x]` but credit the `glamour` app, whose spec names a
different ColorLib design (**Look**, `theme/look/`) — a false `[x]`
(`docs/row-multiplicity.md` §2 APP-WRONG-DESIGN, `row-excl / spec-excl` =
**0 / 36**). The implementer re-opens all three rows on its branch and re-marks
them after merge. **Do not touch `apps/glamour`.**

## What the reference is

A **fashion / model-agency** theme (Bootstrap 4 grid + jQuery 3.2.1: Owl
Carousel 2 for the hero, isotope + magnific-popup for the portfolio, a
hand-written square-height fix, a preloader, a search overlay). Verified for this
prep: the slug-only preview is live (HTTP 200, **11,445 B**, sha256
`3d5514b8…`), `css/style.css` is **28,429 B** (sha256 `42e090e9…`), `js/main.js`
is **3,877 B** (sha256 `93fa56be…`), and `/downloads/free/glamour.zip` is
**404** — there is **no archive**, the live preview is the only reference. There
is no `js/snippet.js` and no `js/custom.js` (both 404), and no
`theme/bootstrap/` or `theme/bb/` twin (both 404).

**5,055px tall at 1440×900** (stable across reloads — no AOS, no counters, only
the hero fade) and **11,775px at 390×844** (the mosaic alone is 4,290px of it:
eleven 390px squares stacked), with `scrollWidth === clientWidth` at 1440 /
1024 / 390 (no horizontal-overflow defect to inherit). 10 `<img>`, **0 `h1`**,
4 `h2`, 6 `h3`, 4 `h6`, 2 forms, 2 inputs, 32 anchors (9 dead `#`, 4 empty
`href=""` on the four "Add to cart" links).

### The screenshot is a top fold only

`glamour-free-template.jpg` is an **AVIF** 1200×946 body served under a `.jpg`
name (decode with PIL before inspecting). It shows the header, the hero and the
bottom-left prev/next squares — **nothing below the fold**. Every band from the
quote down was measured from the live render (`getBoundingClientRect` per band,
`getComputedStyle` per role, plus per-band screenshots), so this brief is not a
screenshot guess.

## Section-by-section fidelity notes

1. **Header (93px).** Navy `#081624`, `padding: 16px 90px`, `text-align:
   center`; the two lists float left/right around the crest, which is
   `display: inline-block` with `padding-right: 80px` on its wrapper. Items are
   13px uppercase white with `margin-right: 50px` and `padding: 22px 0` (so the
   hover/focus target is 64px tall inside a 93px bar). The **92px white
   `search-switch`** is absolutely positioned over the bar at `right: 0` with
   `padding-top: 30px` — it reads as a white bite out of the navy strip, not as
   a button inside the bar. Reproduce that negative space.
2. **Hero (965px).** `hero-slider-item` is `padding: 170px 0 214px`; the inner
   `.hs-content` is **1440×581** with `padding: 179px 0 102px` and the halftone
   as its `background-image` (`cover`). The headline is an `h2` at **160px /
   192px / 700 / `#081624`** with `margin-bottom: 42px`; the source reveals it
   per slide with `opacity 0 → 1` and `top 50px → 0` (0.4s delay, then the two
   CTAs at 0.6s and 0.8s). Because the photo is **grayscale and light** (mean
   luminance 180), navy type is high-contrast on it — keep the placeholder light
   and desaturated (`?grayscale` on picsum) or the headline will fail contrast.
3. **The rail and the rotated line.** Five 48px navy circles, `right: 39px`,
   `top: 240px` from the hero, 22px apart, white 13px glyphs; at ≤767 they
   become a centred horizontal row at `top: 80px` and the rotated brand line is
   hidden. The line itself is `transform: rotate(90deg)` from `right top` with
   `margin-right: 50px` — a CSS transform, not an image.
4. **Quote (444px).** 36px italic, `margin-bottom: 28px`, attribution 30px/700.
   No rules, no background, no quotation-mark ornament in the sheet — the marks
   are typed into the copy.
5. **Portfolio mosaic (864px) — the one piece that must be pixel-faithful.**
   Twelve DOM tiles: `.portfolio-item` at `width: 20%` float-left, one
   `--big` at `width: 40%`, one `--disable` empty tile, and a JS pass setting
   every tile's `height` to its own width (2× for `--big` above 479px).
   Isotope then lays them out absolutely. Measured map (288px unit at 1440):
   row 0 → `works/1` at x0, **empty gap at x288**, `works/2` at x576,
   `works/6` at x864 as **576×576**; row 1 → `works/3` x0, `works/5` x288,
   `works/4` x576; row 2 → `works/7…works/11` across x0…x1152. In React use a
   CSS grid (`grid-template-columns: repeat(5, minmax(0,1fr))`, `gap: 0`) with
   `aspect-ratio: 1` tiles and `grid-column/row: span 2` on the big one — no JS
   measuring, no isotope. The empty tile is **content**, not a bug (delta 9).
   Tiles are B&W photography except one warm colour plate and one navy brand
   plate; keep that rhythm or the mosaic flattens into a grey slab.
6. **Hover overlay.** `.portfolio-view` is `position: absolute; top: 10%;
   height: 80%` → on hover `top: 0; height: 100%`, `opacity 0 → 1`, painted
   `#161024`, 24px white label ("loadmore" in the source — use "View" plus the
   project name). 0.3s. Keyboard focus must reach the same state; the source has
   no focus styling at all, so add a ring.
7. **About A.** The 7-of-12 text column measures **686×476 at x=132**; the
   heading is 48px/**400** with `padding-top: 33px` and `margin-bottom: 50px`;
   the paragraph is `margin-bottom: 50px`; the signature is a 233×84 image (a
   text/SVG placeholder is the honest substitute). The portrait is
   `position: absolute; right: -63px; top: 0` and the band is `overflow:
   hidden`, so the crop at the right edge is intentional — do not "fit" it.
8. **About B.** `container-fluid` + `p-0` columns: photo **720×522** flush to
   the left edge, text wrapper `padding-left: 171px` with `max-width: 655px`
   (the text block itself measures 534 wide at x=891). The halftone panel is
   `width: calc(100% + 115px)`, `height: calc(100% - 101px)`, `bottom: -112px`,
   behind the photo. Below 768 it stacks with 15px padding and the panel is
   `display: none`.
9. **Shop.** No heading and no band intro — the grid starts the band, with
   `padding-bottom: 100px`. Four 264-wide cards; images 264×411 (source
   400×623); name 30px/400; price 16px italic `#60656b`; the control is a
   `#081624` 130×46 block with 11px padding and centred white 16px text. The
   source prices every item "$235" — ship four distinct prices (delta 10).
10. **Newsletter.** 3-of-12 heading / 9-of-12 flex form; the field is 556×57
    with **12px uppercase italic** text, and the button is 164×57 white
    (`.sb-white` = white fill, navy text, 14px uppercase). The live field's grey
    edge is the UA's `2px inset rgb(118,118,118)` — there is **no border rule in
    the sheet**; paint a deliberate borderless white field with a real focus
    ring (delta 4).
11. **Footer.** Left 9-of-12: wordmark (156×61 in the source) plus a 12px
    `#081624` line at `opacity: .23` — so the copyright is *deliberately* faint,
    and the year must be rendered as a value, not hard-coded. Right 3-of-12: a
    three-row list at 15px `#60656b` whose labels are 75px-wide navy spans, so
    the values line up in a column.
12. **Search overlay.** Full-viewport `#000`, field 500px wide at **40px**,
    transparent, `#999` text, `border-bottom: 2px solid #333`; close is a 50px
    `#333` disc with a `+`. 400ms fade both ways, input cleared on close.
13. **Preloader.** `#000` full screen, `.loader` fades out on `load` then the
    overlay fades after a 400ms delay. Derive "hidden" from
    `document.readyState === 'complete' || loaded` during render — a document
    that is already complete never fires another `load`, and
    `set-state-in-effect` is an oxlint error in this repo.

## Inner pages (live, and NOT built in this pass)

The theme is multi-page. Probing each: `about.html` **200** (9,205 B —
432px `page-info-section` photo banner with a 160px white page title,
`about-intor-section`, `steps-section` numbered process steps,
`team-section` with Maria Smith / Jenny Williams / Stan Smith),
`portfolio.html` **200** (7,342 B — page banner + a `.portfolio-filter` row of
24px filter labels that drives isotope), `blog.html` **200** (10,512 B — page
banner + a 6-post masonry, each post with a navy date badge),
`contact.html` **200** (5,885 B — banner + `.contact-info-section` +
`.contact-section` form) and `elements.html` **200** (12,265 B — the component
sheet: Buttons, Accordions & Tabs, Loaders, Milestones with 123 / 25 / 19).
`gallery.html`, `services.html`, `single.html`, `model.html`, `models.html` are
**404**. So the six nav items have five real destinations and the `Shop` slot
points at `elements.html` (a quirk, not a shop page).

A single-page build therefore converts the nav to anchors (delta 3):
Home → `#home`, About the Brand → `#about`, Portfolio → `#portfolio`, Shop →
`#shop`, News → `#newsletter`, Contact → `#contact` (footer).
**Do not invent** a news band, a team band or a contact form from these pages
in this pass — the inventory above is here so a later multi-page pass has the
reference and so the implementer does not have to re-probe.

## Deltas (do not copy the source defects)

| # | Source behaviour | What Modeline ships |
|---|---|---|
| 1 | both Owl slides use `slider-bg-1.jpg` with identical copy | two distinct B&W placeholders, one artwork per slide |
| 2 | no `h1`; hero headline is an `h2` | hero headline is the page's single `h1`, same 160px treatment |
| 3 | nav → 5 other HTML pages | in-page anchors (map above); inner pages inventoried, not built |
| 4 | newsletter field's grey edge is the UA inset border | borderless white field + deliberate focus ring |
| 5 | `.site-btn:hover` repeats its own colour (no visible change) | navy → `#161024` hover, same for focus |
| 6 | three halftone PNGs (`hero-overlay`, `portfolio-overlay`, `image-box-bg`) | CSS dot grid, 24px pitch, ~2px dots, `rgba(29,29,27,.17)` |
| 7 | crest logos are 156×61 rasters | typographic MODELINE wordmark + a `lucide-react` crest glyph |
| 8 | mosaic mixes B&W photos, one colour plate, one navy plate | keep the mix with seeds `modeline-3…modeline-13` |
| 9 | `--disable` tile is a real 288px hole showing the halftone | keep the hole; do not close the grid |
| 10 | all four products are "$235" | four distinct prices |
| 11 | `body` colour is Bootstrap's `#212529` (the sheet never sets it) | body copy `#60656b` |
| 12 | `.about-secton` (source's typo) | correct class names, same structure |

## Font note

The sheet declares **Futura LT Book** four times via `@font-face` from
self-hosted `FuturaLT-{Light,Book,BookOblique,Bold}.woff2` and loads **no**
webfont (no `fonts.googleapis` link, no `@import`). Futura LT is proprietary
and not published on Google Fonts, so the recreation ships **Jost**
(300 / 400 / 700 + 400 italic — the exact four-face shape of the source) from
one Google Fonts `<link>`. Jost is the corpus' standard open Futura substitute;
`Questrial` is the documented alternative. Record the substitution in the PR —
never prescribe the un-shippable face.

## How these numbers were obtained

`curl -4` on the live page + `css/style.css` + `js/main.js` (sha256 recorded in
the spec), then headless Chromium at 1440×900, 1024×900 and 390×844:
`getBoundingClientRect` per band and per mosaic tile, `getComputedStyle` for
every token role, `document.documentElement.scrollHeight/scrollWidth` for the
page and the overflow check, and per-band `elementHandle.screenshot()` for the
visual pass. The halftone pitch and dot alpha were measured from the three
decoration PNGs in PIL (24px period on both axes, max alpha 44/255, colour
`#1D1D1B`); the hero photo's grayscale/lightness claim comes from a PIL
mean-luminance + saturation pass (1920×974, mean 180, saturation 0). Document
height is stable across reloads for this design, so the band table carries exact
numbers rather than the usual ±2%.
