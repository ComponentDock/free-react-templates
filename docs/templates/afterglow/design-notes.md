# Afterglow — design notes (`hero-02`, hero family 2/12)

Measured 2026-10-26 against the live preview (`theme/bootstrap/hero-02/`, HTTP 200) with Playwright Chromium
1.5x at fourteen widths, plus `curl -4` for the paper facts and a **text-transparent re-render** for every
contrast number (so each ratio is measured against the pixels actually behind the glyphs, not against the
nearest hex).

- Live preview: `https://preview.colorlib.com/theme/bootstrap/hero-02/` — **200, 6,280 B**. Slug-only
  `theme/hero-02/` → **404 (9 B)**; `theme/bb/hero-02/` → **404 (9 B)**.
- Archive: `downloads/free/hero-02.zip` — **208,724 B** (= 203.8 KiB, matching the listing page's "204 KB"),
  18 entries (4 dirs + 14 files); `css/style.css` **15,265 B** sha256 `0b9d74f8…` and `js/snippet.js`
  **1,363 B** sha256 `655b4305…` hash **identically** to the live copies → **live preview verified; the
  archive is its un-versioned twin**. The two HTML files differ **only in `<head>`** (robots pair, cdnjs
  `dns-prefetch`, `fetchpriority`, `?v=` strings). The README advertises an `images/` folder that **does not
  exist** — the second variant in a row with that lie.
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/hero-02.jpg` — **39,771 B, 1200 × 972**,
  and it is **AVIF behind a `.jpg`** (`file` → `ISO Media, AVIF Image`; PIL opens it, `vision_analyze` will
  not). `<slug>-featured.jpg` → **404 (146 B html)**.
- Inner pages: **none**. `index.html` is **200, 6,280 B** — byte-identical to the directory URL;
  `about.html` / `pricing.html` → **404 (9 B)**; one HTML file in the archive.

## DOM skeleton (verbatim shape, 91 lines)

```
div.cl-hero02[--ink,--muted,--glass,--gutter]
├── div.cl-hero02__mesh[aria-hidden]
│   ├── span.cl-hero02__blob--a    #ff9fd2   top:-18%  left:2%   46vw max 680  blur 70  .75
│   ├── span.cl-hero02__blob--b    #8fc5ff   top:-10%  right:0
│   ├── span.cl-hero02__blob--c    #b7a0ff   top:28%   left:26%
│   └── span.cl-hero02__blob--d    #ffd3a1   top:36%   right:12%  width:32vw
├── header.cl-hero02__bar[.is-enhanced][.is-open]
│   └── div.cl-hero02__bar-inner                     ← the glass pill; backdrop-filter ⇒ containing block
│       ├── a.cl-hero02__logo[href="#"]              → 26px SVG disc + "Driftwork" (18/800)
│       ├── button.cl-hero02__menu-btn[aria-expanded][aria-controls]
│       │   ├── svg.cl-hero02__menu-open             (two rules, 22px)
│       │   └── svg.cl-hero02__menu-close            (hidden until .is-open)
│       └── nav.cl-hero02__nav#cl-hero02-nav[aria-label="Main"]
│           ├── ul.cl-hero02__links                  → 4 × a.cl-hero02__link (Product, Templates, Pricing, Changelog)
│           └── a.cl-hero02__login                   "Log in"
├── main.cl-hero02__main                             flex:1; column; justify-content:center
│   ├── section.cl-hero02__hero[aria-labelledby=cl-hero02-title]
│   │   ├── p.cl-hero02__rating → span.cl-hero02__stars (5 svg) + text node
│   │   ├── h1.cl-hero02__title#cl-hero02-title
│   │   ├── p.cl-hero02__sub
│   │   ├── div.cl-hero02__actions
│   │   │   ├── a.cl-hero02__cta  + 16px arrow svg
│   │   │   └── a.cl-hero02__ghost
│   │   └── p.cl-hero02__note
│   └── section.cl-hero02__logos[aria-labelledby=cl-hero02-logos-title]
│       ├── h2.cl-hero02__logos-title#cl-hero02-logos-title
│       └── ul.cl-hero02__logo-list
│           └── li.cl-hero02__brand--{kestrel,halcyon,pine,lumen,quarry,bluefin}  (svg + text)
└── script
```

## Token block (copy-paste for `index.css`)

```css
@theme {
  --color-ground:        #fbfaff;
  --color-ink:           #14121f;
  --color-muted:         #423f55;
  --color-kicker:        #4a4760;
  --color-wordmark:      #3a374c;
  --color-star:          #d97706;
  --color-focus:         #6d28d9;
  --color-login-hover:   #2e2a45;
  --color-mesh-pink:     #ff9fd2;
  --color-mesh-blue:     #8fc5ff;
  --color-mesh-violet:   #b7a0ff;
  --color-mesh-peach:    #ffd3a1;
  --color-glass:         rgb(255 255 255 / .62);
  --color-glass-edge:    rgb(255 255 255 / .8);
  --radius-pill:         999px;
  --radius-panel:        24px;
  --radius-tile:         16px;
  --gutter:              clamp(16px, 4vw, 40px);
}
```

Shadows, verbatim from the sheet: bar `0 8px 30px -12px rgba(40,30,90,.18)`; CTA
`0 14px 30px -12px rgba(20,18,31,.55)` → hover `0 18px 34px -12px rgba(20,18,31,.6)`; panel
`0 24px 48px -18px rgba(40,30,90,.35)`.

## Screenshot analysis (1200 × 972, AVIF)

A macOS window on a grey ground: traffic lights, a soft drop shadow, `preview.colorlib.com` in the URL pill.
Inside the frame the page is **1110 px wide**, so the capture shows the **~480 px** wrap of the headline
(`Async video / updates your team / will actually watch`) — *not* the 1440 one. Content matches the live
render 1:1; the only thing the frame adds is the frame.

What it shows: a pink → lavender → blue → peach wash across the whole first screen, brightest at the top
corners and fading to off-white at the bottom; a **long glass pill** floating 16 px from the top with the
wordmark left, four links centred, a black `Log In` pill right; then a centred column — a white rating pill
with five amber stars, a very large black headline, three lines of grey sub-copy, a black pill CTA with an
arrow beside a white pill, a one-line free-plan note — and finally an uppercase tracked kicker over **six**
translucent tiles, each holding a small dark-grey SVG mark and a wordmark, every wordmark set differently.

The pastels are **not** a CSS gradient: there is no `linear-gradient` on the page except the scrim. The colour
comes from four blurred 662 px circles that drift on 16–22 s loops.

## Section-by-section fidelity notes

**1. Mesh (the whole visual identity).** Four `<span>`s, `46vw` capped at 680, `aspect-ratio:1`,
`border-radius:50%`, `filter:blur(70px)`, `opacity:.75`; positions `-18%/2%`, `-10%/right:0`, `28%/26%`,
`36%/right:12%` (the last one `width:32vw`). Three keyframes, **no `0%` frame** — the rest state is the box.
Blob d reuses a's keyframes with `16s alternate-reverse`. At ≤ 860 **all blobs become `80vw`** and blur drops
to 50; measured width goes **up** at that breakpoint (396 at 861 → 680 at 860) and only then shrinks with the
viewport.

**2. The scrim is load-bearing.** `.cl-hero02__mesh::after` =
`linear-gradient(180deg, rgba(251,250,255,.1), rgba(251,250,255,.55) 60%, #fbfaff)`. Without the 55 % stop the
muted sub-copy sits directly on `#e2d7fe`; with it the measured worst-case ratio is **7.42** (it would be
~4.5 without). The bottom stop is opaque, so the logo cloud is on plain `#fbfaff`.

**3. The pill, not the bar, positions the dropdown.** `offsetParent` of `nav` is
`cl-hero02__bar-inner`. `backdrop-filter:blur(14px)` on the pill makes it the containing block for the
absolutely positioned `nav` (its padding box, 1 px inside the border), so the source's `left: var(--gutter)`
lands `1 + gutter` in from the pill's edge and the panel sits **8 px under the pill**: at 860 the pill is 66
tall (the 44 px button sets it), so the panel's top is `17 + 64 + 8 = 89`, not the bar's 81. Measured panel: **720.42 × 306.6 at (69.8, 89)**; at 390
**324 × 306.6 at (33, 89)**.

**4. Mobile mode is JS-gated.** Every ≤ 860 rule is scoped to `.is-enhanced`, added by the script on init. The
no-JS page keeps the nav in flow: at 390 the pill grows to **358 × 248.3** (radius 24), the hero starts at
**y 264.3** and the document goes **925 → 1107**. This is the same trap as the family's first variant, and it
is still the one a port is most likely to "fix" wrongly.

**5. The headline does not gain lines as it narrows.** `text-wrap:balance` re-balances: **3 lines at 1440
through 390**, four only at 320. The 480 wrap matches the screenshot; the 1440 wrap is
`Async video updates / your team will / actually watch`. `max-width:15ch` resolves to 870 / 735 / 480 / 420 px
and only ties the container around 1024 — it never shortens a line, so do not chase it.

**6. The logo grid does the vertical work.** 6 → **3 at 960** (list 64 → 140, document 900 → 925) → **2 at
520** (tiles 64 → 56, list 188, document 920 → 913). The 960 step is the only place the document *grows* for a
layout reason; the 520 step shrinks the tiles enough to offset the extra row.

**7. Six wordmarks, six treatments.** `Kestrel` base `19/800` (its `--kestrel` class has **no rule** — an inert
hook), `halcyon` `500/.02em`, `Pinegrove` **`Georgia, "Times New Roman", serif` 700 italic** (the page's only
serif), `LUMEN LABS` `15px/.16em` (uppercase in markup; `13px/.1em` at ≤ 520), `Quarry` `700/-.04em`,
`bluefin` `600 italic` with a 26 px mark. They are the section's content, not decoration.

**8. Centring is the flex parent.** `main{flex:1; justify-content:center}` with content 869.14 against 868.75
of space at 1440 (zero slack, document 950) and 29.28 of slack at 1024 (hero at **95.89**, not 81.25). A port
that hard-codes the offset drifts up to 14.64 px.

## Contrast (measured against the pixels behind the glyphs)

| text                                  | worst pixel behind it | ratio |
| ------------------------------------- | --------------------- | ----- |
| `h1` `#14121f`                        | `#e9caf4`             | **12.52** |
| sub `#423f55`                         | `#e2d7fe`             | **7.42** |
| note `#423f55`                        | `#dad4ed`             | **7.05** |
| kicker `#4a4760`                      | `#f1ecfd`             | **7.69** |
| wordmark `#3a374c` on the glass tile  | `#faf8fe`             | **10.88** |
| nav link `#423f55` on the glass pill  | `#fee8f4`             | **8.71** |
| `Log in` white on ink                 | solid `#14121f`       | **18.49** |
| stars `#d97706`                       | `#fde9f5`             | **2.75** — decorative, `aria-hidden`, numeral beside it |

Every text pair passes AA; the worst is 7.05. The star row is the page's only sub-3 : 1 pair and is allowed
because the sentence "4.8/5 from 1,200 remote teams" carries the value.

## Source → React adaptation

| source                                    | port                                                             |
| ----------------------------------------- | ---------------------------------------------------------------- |
| `div.cl-hero02__mesh` + 4 spans            | `<Mesh />` — four `<span aria-hidden>`s, keyframes in CSS, **no JS** |
| `header.cl-hero02__bar` + `bar-inner`      | `<SiteHeader />` (pill is the element that carries `backdrop-blur`) |
| `initMenu()` (40 lines)                   | `useMobileMenu()` — `is-enhanced` on mount, toggle, Escape + focus, outside click, `matchMedia('(min-width: 861px)')` |
| `section.cl-hero02__hero`                 | `<Hero />` → `<RatingPill>`, `h1`, `p`, `<Actions>`, note            |
| `section.cl-hero02__logos`                | `<LogoCloud />` → `h2` + 6 × `<WordmarkTile model>`                 |
| `--cl-hero02-*` (4 props)                 | `@theme` tokens (same four + the mesh colours)                     |
| `Driftwork` (wordmark, sub, CTA)          | **Nightwave** — 9 characters, so no fold moves                     |
| `#` anchors (all 8)                       | real routes / in-page ids                                          |
| — (none in the source)                     | `<Footer>` with the Component Dock link                            |

## Family context

Variant **2 of 12** in the `hero` family; the catalogue-gap queue runs the family's **remaining ten variants**
next, then the sixteen remaining snippet families in `docs/catalog-coverage.md` order. Unlike variant 1 (**Proscenium**, a
split 1 : 1.1 hero built around a CSS product mock), this one is **centred, has no mock, has a second
section**, and its document scrolls. The shared family defects to check on every later variant: `is-enhanced`
gating of the mobile bar, the `.cl-icon` dead rule (13 for 13), the `.cl-hero02__links` `!important` centring,
and the `:where(html) … revert` guard block.
