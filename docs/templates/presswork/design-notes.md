# Presswork — design notes (`hero-03`, hero family 3/12)

Measured 2026-10-26 against the live preview (`theme/bootstrap/hero-03/`, HTTP 200) with Playwright Chromium
1.5× at fourteen widths, plus `curl -4` for the paper facts, a canvas A/B for every weight claim, and
`pg.hover()` for the two hover states.

- Live preview: `https://preview.colorlib.com/theme/bootstrap/hero-03/` — **200, 2,912 B**. Slug-only
  `theme/hero-03/` → **404 (9 B)**; `theme/bb/hero-03/` → **404 (9 B)**.
- Stylesheet: `css/style.css?v=0f238947` — **9,666 B, 430 lines**, sha256 `84536fc18e8a670d…`.
- **No script anywhere.** The HTML has no `<script>` element, `js/snippet.js` → **404 (9 B)**, and the
  archive has no `js/` directory. This is the family's first variant with **zero behaviour**.
- Archive: `preview.colorlib.com/downloads/free/hero-03.zip` — **200, 286,646 B** (279.9 KiB, matching the
  listing page's "280 KB"), **11 entries** = 4 dirs + 7 files. `css/style.css` hashes **identically** to the
  live copy → **live preview verified; the archive is its un-versioned twin**. The two HTML files differ
  **only in `<head>`** (`robots` pair, cdnjs `dns-prefetch`, `fetchpriority`, `?v=`).
- The README advertises `js/snippet.js`, an `images/` folder and "the behaviour, in plain JavaScript" —
  **none of the three exists**. Third variant in a row whose README lists files that are not shipped.
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/hero-03.jpg` — **61,019 B, 1200 × 972**,
  a **real progressive JPEG** (the family's first; Afterglow's and Upright's were AVIF behind a `.jpg`).
- Inner pages: **none**. `index.html` is **200, 2,912 B** = byte-identical to the directory URL;
  `about.html` → **404 (9 B)**; one HTML file in the archive.

## DOM skeleton (verbatim shape, 62 lines)

```
div.cl-hero03[--paper,--ink,--muted,--rule,--accent,--serif,--gutter]
├── header.cl-hero03__bar
│   ├── a.cl-hero03__logo[href="#"]              → "Atelier Nord" + span[aria-hidden]®
│   └── nav.cl-hero03__nav[aria-label="Main"]    ← NO CSS RULE (inert hook)
│       └── ul.cl-hero03__links
│           └── li × 4 → a.cl-hero03__link[.cl-hero03__link--contact]
│                        Work[aria-current=page] · Studio · Journal · Contact
└── main.cl-hero03__main                          flex:1
    └── section.cl-hero03__hero[aria-labelledby=cl-hero03-title]
        ├── p.cl-hero03__kicker                  3 × span (Brand & digital studio / Copenhagen — Lisbon / Est. 2011)
        ├── div.cl-hero03__head                  position:relative, flex item
        │   ├── h1.cl-hero03__title#cl-hero03-title
        │   │   ├── span.cl-hero03__line                    "We shape brands"
        │   │   ├── span.cl-hero03__line--indent            "that " + em"outlast" + " the"
        │   │   └── span.cl-hero03__line                    "trend cycle."
        │   └── div.cl-hero03__badge[aria-hidden]
        │       ├── svg[viewBox="0 0 120 120"] → defs > path#cl-hero03-circle (r 46) + text > textPath
        │       └── span.cl-hero03__badge-arrow           "↘" (&#8600;)
        └── div.cl-hero03__foot                  grid 1.3fr / 1fr / auto, margin-top:auto
            ├── p.cl-hero03__intro
            ├── ol.cl-hero03__services → li × 3 → span(01|02|03) + label
            └── a.cl-hero03__more + 22px arrow svg
```

Nothing else: no `<h2>`, no `<img>`, no `<button>`, no `<form>`, no `<footer>`, one `id`
(`cl-hero03-title`), six anchors — **all six `href="#"`**.

## Token block (copy-paste for `index.css`)

```css
@theme {
  --color-paper:   #f1ece2;
  --color-ink:     #1a1714;
  --color-muted:   #5a5249;
  --color-rule:    #cfc5b5;
  --color-accent:  #b3401e;
  --font-display:  "Fraunces", "Iowan Old Style", Georgia, serif;
  --font-sans:     system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --gutter:        clamp(16px, 4vw, 56px);
  --text-display:  clamp(3rem, .6rem + 10vw, 12rem);
}
```

That is the **whole palette** — 5 colours, 6 hex literals, **zero** `rgb()`/`rgba()`, no shadows, no borders
thicker than 1 px, and exactly two radii (999 px on the CTA, 50 % on the ring's implied circle). No shadow is
declared anywhere in the sheet.

## Screenshot analysis (1200 × 972, progressive JPEG)

A macOS window on a grey ground: traffic lights, a soft drop shadow, `preview.colorlib.com` in the URL pill.
Inside the frame the page is **~1110 px** wide, so the capture sits between the 1101 and 1100 columns of the
ladder — and it shows the **stacked** foot (one column), which is the 1100-side layout, not the 1440 one.
Content matches the live render 1:1; the only thing the frame adds is the frame.

What it shows: a warm off-white page with a single hairline under the header; a serif wordmark left
(`Atelier Nord®`, at ~22 px it reads almost like a masthead) and four sans links right with the current one
underlined; below, a grey tracked uppercase line split by two thin slashes; then the headline — three lines of
enormous high-contrast serif, the middle one pushed right so the block reads as a staircase, and the word
*outlast* in italic rust breaking the black rhythm; a circular stamp low on the right with tiny letters around
its rim and a rust arrow pointing down-right; a second hairline; and under it a three-part foot — a paragraph
at 17.6 px, three numbered services set in the serif with tiny sans numerals hanging in the gutter, and a
black-outlined pill reading "See selected work →".

**The impression is a printed page, not an app screen**: two rules, no cards, no shadows, no photography, and
type doing all the work. That is the thing to preserve — a port that adds a card, a badge row or a shadow has
already lost the design.

## Section-by-section fidelity notes

**1. Header.** `padding: 26px var(--gutter)`, `border-bottom: 1px` rule, `flex-wrap: wrap`,
`align-items: baseline`, `justify-content: space-between`, `gap: 8px 24px`. Height **87.09** = 26 + (22 px
Fraunces at `line-height:1.55` = 34.09) + 26 — i.e. the bar is sized by the **wordmark's line box**, not by the
links (24.8). `align-items:baseline` is why the links sit at y 34 and not at 26. At ≤ 640 the column layout
puts the wordmark at y **18** and the nav at **60.09** (`padding-block:18px`).

**2. Kicker.** Three runs, `gap: 6px 28px`, separators generated by `span + span::before` — so the `/` is part
of the *following* span and the visible spacing around it is **28 px flex gap + 28 px margin-right**. Run
widths **223.7 / 241.59 / 119.14** at 1440 (the third starts with its slash). This row is the only place the
page uses `text-transform` and tracking; keep it `600`, not `700` — at 13 px the difference is visible at 1×.

**3. Headline.** Three explicit block spans; the middle carries `padding-left: 1.4em` (**215.04**) which is
what makes the staircase. Type is `clamp(3rem, .6rem + 10vw, 12rem)` at **weight 350** with `opsz 144`,
`line-height: .9` and `letter-spacing: -.045em`. Canvas A/B proves the 350 is a real instance
(**892 / 903 / 930** at 300/350/400), so load Fraunces with both the `opsz` and `wght` axes. Because the lines
are spans, the line count never changes: **3** at every width from 1440 to 320, with the line box shrinking
from 138.23 to 45.59.

**4. Badge.** `position: absolute; right: 0; bottom: 0` inside `.cl-hero03__head`, so it is pinned to the
**head's** padding box — measured (1257.61, 567.55) with the head's bottom edge at **693.94**. That works only
because the head is a **flex item** (flex items establish an independent formatting context, so the `h1`'s
`44px`/`64px` margins stay inside the 522.7 height). Re-implement it as a plain `<div>` and the margins
collapse out: head **414.7**, badge **64.02 px higher**. Width is `clamp(88px, 6vw + 40px, 150px)` — 126.39 at
1440, hitting the 88 floor at 800 px. The ring text is `10.5px/600/.18em` on a radius-46 `textPath`; the arrow
is a `<span>` with `↘` at 34 px (26 at ≤ 640) in Fraunces accent.

**5. Foot.** `1.3fr 1fr auto`, `align-items: end`, `gap: clamp(24px,4vw,64px)` (**57.6** at 1440),
`padding-top: 28`, `border-top: 1px`, `margin-top: auto`. Columns **542.594 / 417.391 / 252.828**. The intro
is `clamp(1rem, .96rem + .2vw, 1.1rem)` → **17.6 px** (capped above 1120), 4 lines at 27.28 line box; its
`max-width: 34em` resolves to **598.4** against its own font size, so it never actually shortens a line at
1440 (column 542.59) and only matters at 1100, where the stacked column is 597.03 — one pixel under. The
services list is Fraunces **20 px** with `gap: 6px`; each numeral is a `36px`-wide `12px/600` **system-sans**
span in muted at `vertical-align: 3px`, which is what puts the tiny digits above the serif baseline. The CTA is
a 1 px ink ring at radius 999 with `padding: 16px 26px` and `white-space: nowrap`.

**6. The single screen.** `main { flex: 1 }` and the hero is a `flex-direction: column` with
`margin-top: auto` on the foot. At 1440 the content is **800.9** against 812.91, so the auto margin resolves to
**12.01 px**; at 1100 it is **0** (the document grows to 955) and at 768 it is **97.64**. Every other width in
the ladder still fits in 900.

## Contrast (computed against the flat paper ground — no gradient or image sits behind any text)

| text                                       | pair            | ratio     |
| ------------------------------------------ | --------------- | --------- |
| `h1` `#1a1714` on `#f1ece2`                 | ink / paper     | **15.16** |
| *outlast* `#b3401e` on `#f1ece2`            | accent / paper  | **4.86**  |
| intro, kicker, numerals `#5a5249`           | muted / paper   | **6.51**  |
| CTA hover label `#f1ece2` on `#1a1714`      | paper / ink     | **15.16** |
| focus ring `#b3401e` on `#f1ece2`           | accent / paper  | **4.86** (≥ 3 for UI) |
| hairlines `#cfc5b5` on `#f1ece2`            | rule / paper    | 1.45 — decorative only |
| accent on ink (only if a port inverts the CTA) | accent / ink | 3.12      |

Every text pair passes AA; the worst is *outlast* at **4.86**, which also passes as normal text and is set at
display size anyway. The 1.45 hairline is the only number that needs care: it is a *rule*, and would fail
1.4.11 if it were ever used as a control's boundary — the CTA's border is `ink` (**15.16**), which is why the
button reads as a button.

## Source → React adaptation

| source                                        | port                                                                |
| --------------------------------------------- | ------------------------------------------------------------------- |
| `div.cl-hero03` shell                          | `<App>` wrapper — `min-height:100vh`, flex column, paper ground       |
| `header.cl-hero03__bar`                        | `<SiteHeader>` — wordmark + `<nav>` links, **no state, no hook**      |
| `p.cl-hero03__kicker` + generated `/`          | `<Kicker>` — three spans, separator stays in CSS                     |
| `h1.cl-hero03__title` (3 spans) + `<em>`       | `<Headline>` — three `<span className="block">`, `<em>` on the rust word |
| `div.cl-hero03__badge` + svg + arrow span      | `<RingBadge>` — one `<svg aria-hidden>`, one span, keyframe in CSS    |
| `div.cl-hero03__foot`                          | `<HeroFoot>` → `<Intro>` · `<ServiceList>` (data) · `<CtaLink>`      |
| — (none in the source)                         | `<Footer>` with the Component Dock link                              |
| `--cl-hero03-*` (7 props)                      | `@theme` tokens (5 colours + the two font stacks + the gutter)        |
| `Atelier Nord` (wordmark)                      | **Studio Ferro** — 12 characters, so no box in the tables moves       |
| `#` anchors (all 6)                            | real routes / in-page ids                                            |

## Family context

Variant **3 of 12** in the `hero` family; the catalogue-gap queue runs the family's **remaining nine**
variants next, then the sixteen other snippet families in `docs/catalog-coverage.md` order. Where the family
sits: **Proscenium** (v1) is a split 1 : 1.1 hero built around a CSS product mock, **Afterglow** (v2) a centred
SaaS hero on a four-blob mesh with a logo cloud, **Presswork** (v3) an **editorial** full-height hero with no
chart, no mesh, no second section and **no JavaScript at all**.

Shared family defects to check on every later variant: the `.cl-icon` dead rule (**14 for 14**), the
`:where(html) … { …: revert }` guard block, and — new with this variant — an **inert** `.cl-hero03__nav` class
that carries no rule at all (v1 and v2 both had one). Presswork also brings the family's first **real
horizontal-overflow defect** (the rotating badge, trap 2 of the spec) and its first **margin-collapse trap**
(the head is a flex item, trap 1).
