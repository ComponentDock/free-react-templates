# Tideline — design notes (replication of ColorLib "Villa")

Prep research for `openspec/specs/template-tideline/spec.md`. Everything below
was measured — nothing is a guess dressed as a token:

- Preview HTML fetched with `curl -4`: **22,040 B**, sha256
  `343535413cf59fd75e81509797fe6dd09e2b3c7212f3e73cef006e6c12b44457`.
- Theme sheets: `css/style.min.css` **13,718 B** (sha256 `03483841…`),
  `css/modern.min.css` **9,628 B** (sha256 `4f06d292…`), `css/fonts.min.css`
  **2,941 B** (sha256 `18c4eed6…`), `js/main.min.js` **3,903 B** (sha256
  `2a528d3b…`).
- Live render measured with headless chromium (Playwright, node module) at
  **1440×900**, **768×900** and **390×844**: per-band
  `getBoundingClientRect`, per-element `getComputedStyle`, `[...document.fonts]`,
  `scrollWidth` vs `clientWidth`, anchor census, and viewport screenshots per
  band (full-page captures blank lazy photos — see "capture artefact" below).
- Screenshot card: `villa-free-template.jpg` served as **AVIF**, decoded with
  PIL (1200×946), inspected.

## What the reference is

A coastal-resort concept page ("Villa" is explicitly a *fictional* resort in the
source's own footer note) in a serif-display + ultra-light-sans register:
translucent white wordmark over a full-height sailing photograph, an editorial
four-card explore row, a single-slide photographic gallery, three journal cards
on a **patterned grey band that slides up behind the gallery**, a three-column
principles band, and a near-black four-column footer with an underline-only
newsletter field.

The theme behind it is **fourteen live pages** (`index`, `hotel`, `restaurant`,
`yacht`, `about`, `blog`, `contact`, `stay-guide`, three room pages, two
articles, plus the kit's own `Doc/index.html`). The single-page build keeps the
home page's five bands and maps the navigation onto anchors; it does not invent
the room detail pages, the menu, the day planner, the enquiry form, the article
pages or the vendor docs.

## Screenshot analysis (TEMPLATES.md card image)

A **browser-chrome** capture (Safari-style dots + address bar), **top fold
only**, 1200×946:

- White "Villa" serif wordmark at the top-left of the photo, hamburger at the
  top-right — the header is transparent and overlays the hero.
- Full-bleed sailing-deck photo (rigging, mast, sea and sunset) under a dark
  wash; centred "Welcome to *Villa* resort" in a large serif, the brand in
  italic.
- A bright pink pill CTA ("EXPLORE THE BEAUTY") beside an outlined pill
  ("DOWNLOAD"), both fully rounded, uppercase and tracked.
- The white band below starts ~180px into the fold with a grey uppercase
  eyebrow and four staggered photo cards (dining, pool, room, yacht).

**The card image is an older revision of the same design.** Its copy is the v2
edit — the eyebrow reads "YOU CAN VISIT", the sub-line is "Discover our
world-class hotel & restaurant resort.", the second CTA is "DOWNLOAD" — while
the live v3 page reads "You can explore", "A little room to breathe. A little
time by the water." and "Find your room". The live CTA also paints a deeper
crimson than the card's brighter pink. **The live sheet is canonical**
(docs/replication.md: CSS values beat screenshots); the copy inventory in the
spec comes from the live DOM.

## DOM skeleton (live preview, 1440×900)

```
header.site-header                        absolute, padding 60px 0
  .site-logo > a > em                     "Villa" 30px/700 serif #fff (58×33 at 15,58)
  button.site-menu-toggle                 48×48, three 40×2px bars
  .site-navbar                            fixed, inset 0, #fff, display:none
    ul.menu                               7 × 40px serif links (55px boxes)
    .extra-info                           2 columns, 17px labels, hidden ≤767px
main#main                                 (no tabindex — defect)
  section.site-hero.overlay               h 900 = 100vh (min 700), wash rgba(0,0,0,.51)
    picture.hero-picture > img            sail-8163, object-position 60% center
    h1.heading + p.sub-heading + .hero-actions (2 pills, 12px gap)
  section.section.visit-section#explore   h 546, padding 112px 0
    h2.heading (15px uppercase, 3px tracking)
    4 × .col-lg-3.col-md-6 > .visit       285px, img 255×170, h3 20px, p 14px
  section.section.slider-section          h 1,217
    h2.heading (80px serif) + p.lead (20px/300)
    .home-slider.major-caousel            1,110×741 frame, 6 slides
      .owl-nav .owl-prev/.owl-next        48×48 circles at x105 / x1287
      .owl-dots                           6 × 10×10
  section.section.blog-post-entry.bg-pattern   h 1,429, mt -500, pt 500
    h2.heading + p.lead
    3 × article.media.media-custom        350px wide, img 350×233, body 24px
  section.section.testimonial-section     h 759
    h2.heading + p.lead
    3 × .col-md-4.text-center              380px, .principle-icon 70×70
  footer.section.footer-section           h 531, #1a1a1a, padding 112px 0
    .row.mb-4 > 4 × .col-md-3             285px each
    .row.bordertop > p                    copyright
```

## Measured numbers worth keeping

| what | value |
|---|---|
| document height, 1440×900 | **4,883px** (`scrollWidth == clientWidth == 1440`) |
| document height, 390×844 | **6,963px** (`scrollWidth == clientWidth == 390`) |
| container | **1,140px** at x 150 (`.container`); header uses `.container-fluid` max 1,600 |
| section rhythm | **112px** (`7em`) → **48px** ≤991px → **80px** ≤767px |
| hero | 900px (`100vh`, min 700); inner column 950×243 at y 329; buttons at y 510 |
| explore cards | 285px wide, photo **255×170**, heading 18px tall at y 1,012, cards at y 1,060 |
| gallery | frame **1,110×741** at (165, 1762); arrows 48×48 at x105/x1287, y 2,099; dots 10×10 at y 2,437 |
| journal | band top **2,163** (gallery ends 2,663 → 500px overlap); cards 350px at y 2,963, heights 464/434/493 |
| principles | columns 380px at y 4,000; icons 70×70 |
| footer | columns 285px at y 4,463; newsletter row 255×51 at y 4,521; copyright row 1,140×70 at y 4,701 |
| shapes | buttons **50px** pill; circles 50%; cards/fields/sections **0** radius |

## Typography and font delivery (measured, not assumed)

- `body` = **16px / 28.8px (1.8) / weight 200**, `#50565c`, family
  `"Mukta Mahee", arial, sans-serif`.
- Every heading = **`"Times New Roman", Times, serif`** — a *system* face. The
  page has **no Google Fonts `<link>`** and **no `@font-face` for the serif**;
  Linux renders it as Liberation Serif (metric-compatible), which is exactly
  what the live screenshots show. So no display webfont is invented here: the
  honest token is the system stack.
- The theme **self-hosts Mukta Mahee at 200 / 300 / 400 only** (nine
  `@font-face` rules — latin, latin-ext, gurmukhi per weight). `[...document.fonts]`
  reports `Mukta Mahee: 200`, `300`, `400` loaded and nothing else. Two rules
  ask for **500** (`.site-navbar .menu-label`, `.footer-title`), so the live
  render synthesises it. Tideline loads **200;300;400;500** from
  `https://fonts.googleapis.com/css2?family=Mukta+Mahee:wght@200;300;400;500&display=swap`
  (HTTP **200**) so the sans weights are real, and keeps **500** on the serif
  headings because that is what the reference resolves to (Times has 400/700 —
  its 500 is a synthesised mid-weight; prescribing 700 would visibly diverge).
- Weight map actually used: **200** body/copy/meta/links, **300** `.lead` and
  the principles copy, **400** form input, **500** the eyebrow heading, the
  menu-labels, the footer titles and every serif `h2`/`h3`, **700** the hero
  `h1` and the wordmark.

## Colour: where the two sheets disagree

`style.min.css` (v1 layer) uses **`#e61c5d`** — `::selection` background,
`a:hover`, `.visit a:hover`, review stars, the nav `:before` (later overridden).
`modern.min.css` (v2 layer) introduces the design's real accent set and wins on
specificity/order:

| role | value | declaration |
|---|---|---|
| action / filled button | **`#c0144a`** | `:root{--villa-accent:#c0144a}`; `.btn-primary{--bs-btn-bg:#c0144a}` |
| action hover | **`#9e103c`** | `.btn-primary` hover/active |
| link on light / focus ring | **`#a7103d`** | 12 declarations (`.text-link`, `.eyebrow`, `.form-control:focus`, `:focus-visible`) |
| icon glyph on pale disc | **`#ad1546`** on **`#fff2f6`** | `.principle-icon` |
| nav highlight | **`#f9c3d4`** | `.site-navbar nav .menu li a:before` |
| body text | **`#50565c`** | `:root{--villa-text:#50565c}` + `body{color:var(--villa-text)}` |
| muted (eyebrow, detail) | **`#646a70`** | `.visit-section .heading`, `.visit-detail` |
| meta line | **`#686868`** | `.media-custom .meta-post` (the older `#ced4da` rule loses) |
| pattern band | **`#e9ecef`** + `img/round.png` | `.bg-pattern` |
| footer | **`#1a1a1a`**, links **`#bababa`**, rules `rgba(255,255,255,.1)` / `#888` | `.footer-section`, `.bordertop`, `.newsletter-row` |

The v1 pink survives only on `::selection`; do not use it for buttons.

## Interaction inventory (`js/main.min.js`)

1. **Menu** — toggles `menu-open` on `<body>` (+`overflow:hidden`) and `open` on
   the button, sets `aria-controls`/`aria-expanded`/`aria-label`, sets the panel
   `display:block`, focuses its first link; Escape closes and returns focus;
   `Tab`/`Shift-Tab` are trapped inside `[toggle, …panel a/button/input]`.
2. **Year** — `[data-year]` ← `new Date().getFullYear()`.
3. **Newsletter** — `form[action=mail.php][data-kit-form]` with a hidden
   `form=newsletter` decoy, `type=email required`, `[data-form-status]`.
4. **The gallery** is configured by `data-owl` on the wrapper
   (`{items:1, loop:false, rewind:true, autoplay:false, nav:true,
   navText:["‹","›"], margin:0}`) and booted by the kit on top of **Swiper 14**
   — `.swiper-initialized` is present and only the active slide is painted.
5. **Inner pages only** (not built): contact query-param prefill + departure
   validation, the journal search filter, the day planner generator, the
   checklist counter/copy button. Listed so nobody re-invents them here.

## Source defects and deltas

| # | source | delta |
|---|---|---|
| 1 | Skip link targets `<main id="main">` with **no `tabindex`** — focus never moves | add `tabindex="-1"` (or explicitly `focus()` the target) |
| 2 | Footer submit styled crimson in `modern`, but `.footer-newsletter button[type=submit]{background:none}` wins → transparent | ship the **measured** transparent 48×50 arrow button |
| 3 | Mukta Mahee 500 asked for but never delivered (200/300/400 only) | load 200;300;400;500 |
| 4 | Serif headings ask 500 on a 400/700 face | keep 500 (matches the reference render) |
| 5 | Journal cards have unequal heights (464/434/493) | keep natural heights, `align-items:start` |
| 6 | Footer links to `Doc/index.html` (vendor documentation) | drop the item |
| 7 | Copyright credits ColorLib | `© {year} Tideline — made with Component Dock` → `https://www.componentdock.com/` |
| 8 | Screenshot copy is the v2 edit | use the live v3 copy inventory |
| 9 | 7 nav items + 4 explore cards point at sibling pages | in-page anchors (spec delta 1 + delta 2), no `href="#"` |
| 10 | `img[loading=lazy]{content-visibility:auto}` blanks photos in a **full-page** screenshot | capture artefact only — do not copy the rule; not a rendering defect |

### Capture artefact (for whoever re-measures this slug)

A `fullPage` Playwright screenshot leaves the gallery frame and the journal
photos **white**, because `modern.min.css` sets
`img[loading=lazy]{content-visibility:auto}` — the off-screen render subtree is
skipped during the stitched capture. Viewport screenshots per band show the
photos normally (`naturalWidth` 1140 for every `-1600` variant, 13 of 14 images
`complete`). Do not read that blank as a collapsed band: the measured heights
(741px frame, 233px card photos) are stable and the images paint on scroll.

## Inner-page inventory (probe receipts)

| page | status | bytes |
|---|---|---|
| `index.html` | 200 | 22,040 |
| `hotel.html` | 200 | 18,185 |
| `restaurant.html` | 200 | 10,139 |
| `yacht.html` | 200 | 11,782 |
| `about.html` | 200 | 14,968 |
| `blog.html` | 200 | 11,813 |
| `contact.html` | 200 | 10,048 |
| `stay-guide.html` | 200 | 9,627 |
| `room-classic.html` | 200 | 12,928 |
| `room-studio.html` | 200 | 13,008 |
| `room-suite.html` | 200 | 12,959 |
| `journal-slow-weekend.html` | 200 | 13,763 |
| `journal-packing.html` | 200 | 13,807 |
| `Doc/index.html` | 200 | 11,702 |

Each opens with a `page-inside` hero (70vh, min 500px, gradient
`#00000080 → #0000009e 30% 72% → #00000080`) and the same header/footer chrome.
Their band inventories are recorded in the spec so a later multi-page pass has
the reference — **nothing of this is built in the single-page pass**.

## Name check (receipts)

- `git grep -il tideline origin/main` → **0**
- `ls apps | grep tideline` → nothing; `openspec/specs/template-tideline` → did not exist before this prep
- `colorlib.com/wp/template/tideline/` → **404**;
  `preview.colorlib.com/theme/tideline/` → **404**;
  `preview.colorlib.com/theme/bootstrap/tideline/` → **404**
