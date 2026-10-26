# Proscenium — design notes (`hero-01`, hero family 1/12)

Measured 2026-10-26 against the live preview (`theme/bootstrap/hero-01/`, HTTP 200) with Playwright Chromium at
14 widths, plus `curl -4` for the paper facts. Every number here is either **`offsetWidth/offsetHeight`** (the
mock subtree — see the tilt note) or a rect from an untransformed element.

- Live preview: `https://preview.colorlib.com/theme/bootstrap/hero-01/` — **200, 8,351 B**. Slug-only
  `theme/hero-01/` → **404 (9 B)**; `theme/bb/hero-01/` → **404 (9 B)**.
- Archive: `downloads/free/hero-01.zip` — **255,841 B**, 18 entries; `css/style.css` and `js/snippet.js`
  hash **identically** to the live copies (sha256 `aaea869b…`, `ed6dffdc…`) → **live preview verified; the
  archive is its un-versioned twin**. Only the `<head>` differs (2 robots tags, a cdnjs dns-prefetch,
  `fetchpriority`, `?v=` strings).
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/hero-01.jpg` — **65,776 B, 1200 × 972**, a
  real **JPEG** (the batch's usual AVIF-behind-`.jpg` trap does **not** apply here). It is a **macOS browser
  mock-up** (traffic lights, drop shadow, `preview.colorlib.com` pill) whose content matches the live render
  1:1. `<slug>.jpg`, `<slug>-template.jpg`, `<slug>-free-template.jpg`, `<slug>-featured.jpg` are all **404**;
  only the `sites/2/` path is live.
- Inner pages: **none**. `index.html` is **200, 8,351 B** — byte-identical to the directory URL; `about.html`
  and `pricing.html` are **404 (9 B)**; the archive ships exactly one HTML file. This is a single-page snippet,
  not a multi-page theme.

## DOM skeleton (verbatim shape, 127 lines)

```
div.cl-hero01
├── header.cl-hero01__bar[.is-enhanced][.is-open]
│   └── div.cl-hero01__bar-inner
│       ├── a.cl-hero01__logo[href="#"]            → 28px inline SVG (rect rx=8) + "Tallyhive"
│       ├── button.cl-hero01__menu-btn[aria-expanded][aria-controls=cl-hero01-nav][aria-label]
│       │   ├── svg.cl-hero01__menu-open          → 3-line hamburger, 22px
│       │   └── svg.cl-hero01__menu-close         → X, 22px
│       └── nav.cl-hero01__nav#cl-hero01-nav[aria-label=Main]
│           ├── ul.cl-hero01__links → 4 × li > a.cl-hero01__link[href="#"]  (Product has aria-current=page)
│           └── div.cl-hero01__nav-actions
│               ├── a.cl-hero01__signin[href="#"]
│               └── a.cl-hero01__cta.cl-hero01__cta--sm[href="#"]      ← 40 px, radius 10
├── main.cl-hero01__main
│   └── section.cl-hero01__hero[aria-labelledby=cl-hero01-title]
│       ├── div.cl-hero01__copy
│       │   ├── a.cl-hero01__pill[href="#"] → span.__pill-tag "New" + text + 14px chevron svg
│       │   ├── h1.cl-hero01__title#cl-hero01-title
│       │   │     "Close the books in hours, " + span.cl-hero01__accent "not weeks."
│       │   ├── p.cl-hero01__sub
│       │   ├── div.cl-hero01__actions
│       │   │   ├── a.cl-hero01__cta[href="#"]                    ← 50 px, radius 12
│       │   │   └── a.cl-hero01__ghost[href="#"] > span.__play(svg) + text
│       │   └── ul.cl-hero01__trust → 3 × li (svg check + label)
│       └── div.cl-hero01__visual[aria-hidden on the toast branch]
│           ├── div.cl-hero01__mock[role=img][aria-label]
│           │   ├── div.cl-hero01__mock-top
│           │   │   ├── span.cl-hero01__dots → 3 × i
│           │   │   └── span.cl-hero01__url "app.tallyhive.io/overview"
│           │   └── div.cl-hero01__mock-body            (grid 56px 1fr)
│           │       ├── div.cl-hero01__side             → __side-logo + 4 × __side-item (.is-on)
│           │       └── div.cl-hero01__panel
│           │           ├── div.cl-hero01__panel-head   → __panel-title "Overview" + __range "Last 12 months"
│           │           ├── div.cl-hero01__kpis → 3 × div.cl-hero01__kpi
│           │           │     (label / value / delta[--down], third carries .cl-hero01__kpi--extra)
│           │           ├── div.cl-hero01__chart
│           │           │   ├── div.cl-hero01__bars → 12 × span[style="--h:NN%"] (12th .is-on)
│           │           │   └── svg.cl-hero01__line → 1 path, viewBox 0 0 300 100
│           │           └── ul.cl-hero01__rows → 3 × li
│           │                 (span.__chip[style="--c:#16a34a|#dc2626"] + __row-name + __row-amt)
│           └── div.cl-hero01__float[aria-hidden]
│               └── span.cl-hero01__float-icon(svg) + span(strong + span)
└── script[src="js/snippet.js"]
```

Counts: **1** `<h1>`, **0** `<h2>`, **0** `<img>`, **0** `<form>`, **0** `<input>`, **1** `<button>`,
**10** `<svg>`, **10** `<a>` (all `href="#"`), **2** ids (`cl-hero01-nav`, `cl-hero01-title`), landmarks
`header` / `nav` / `main` / `section`.

## CSS token reference (from `css/style.css`, 19,611 B, 895 lines)

```css
.cl-hero01{
  --cl-hero01-accent:#5b3df5;  --cl-hero01-ink:#121229;   --cl-hero01-muted:#535470;
  --cl-hero01-line:#e6e5f0;    --cl-hero01-surface:#fff;   --cl-hero01-gutter:clamp(16px,4vw,40px);
  color:var(--cl-hero01-ink); font-size:16px; line-height:1.55; min-height:100vh; overflow:hidden;
  background:
    radial-gradient(60% 60% at 85% 20%, rgba(139,92,246,.16), transparent 70%),
    radial-gradient(40% 50% at 10% 90%, rgba(91,61,245,.08),  transparent 70%),
    #f7f7fb;
}
.cl-hero01::before{ /* dot grid */
  background-image:radial-gradient(rgba(18,18,41,.09) 1px, transparent 1px);
  background-size:22px 22px;
  -webkit-mask-image:linear-gradient(180deg,#000,transparent 75%);
          mask-image:linear-gradient(180deg,#000,transparent 75%);
}
body{ margin:0; background:#f7f7fb; font-family:"Plus Jakarta Sans",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif }
```

Everything else worth copying verbatim:

```css
/* bar */        max-width:1240px; padding:20px var(--gutter); gap:32px
/* grid */       grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);
                 gap:clamp(32px,5vw,72px);
                 padding:clamp(32px,6vw,88px) var(--gutter) clamp(56px,8vw,112px)
/* h1 */         font-size:clamp(2.35rem,1.4rem + 3.6vw,4.1rem); font-weight:800;
                 line-height:1.04; letter-spacing:-.035em; margin:22px 0 18px
/* accent */     background:linear-gradient(92deg,#5b3df5,#9333ea);
                 -webkit-background-clip:text; background-clip:text;
                 -webkit-text-fill-color:transparent
/* sub */        font-size:clamp(1rem,.95rem + .3vw,1.15rem); max-width:34em; color:var(--muted)
/* cta */        min-height:50px; padding:0 24px; border-radius:12px;
                 box-shadow:inset 0 1px 0 rgba(255,255,255,.25), 0 10px 24px -10px rgba(91,61,245,.7);
                 hover → background:#4a2ee0; transform:translateY(-1px)
/* cta--sm */    min-height:40px; padding:0 16px; border-radius:10px; font-size:14.5px
/* mock */       border:1px solid #dcd9ec; border-radius:18px;
                 box-shadow:0 2px 4px rgba(18,18,41,.04), 0 40px 80px -30px rgba(52,34,150,.35);
                 font-size:13px;
                 transform:perspective(1600px) rotateY(-6deg) rotateX(2deg);
                 transform-origin:left center
/* float */      left:-28px; bottom:-44px; padding:12px 16px 12px 12px; radius:14px;
                 box-shadow:0 20px 40px -18px rgba(18,18,41,.35); animation:float 5s ease-in-out infinite
/* focus */      outline:3px solid var(--accent); outline-offset:3px   (a:focus-visible, button:focus-visible)
/* media */      @media (max-width:960px){ grid → 1fr; copy max-width:640; mock transform:none }
                 @media (max-width:860px){ .is-enhanced menu mode; :not(.is-enhanced) → flex-wrap }
                 @media (max-width:560px){ actions full width; rail/3rd KPI/3rd row hidden;
                                           kpis 2 cols; chart 120; toast left:12px bottom:-40px }
                 @media (prefers-reduced-motion:reduce){ animation:none !important; transition:none !important }
```

Sheet anatomy: **138** blocks = **11** `:where(html)` guard rules (**22** `revert` declarations, 2 `all: revert`)
+ **10** `@font-face` + **84** top-level style rules + **25** rules inside 4 media queries + **2** `@keyframes`
(one frame each). Colours: **40** literals, **29** distinct. `!important` on 5 lines (3 real: CTA `color:#fff`,
`__trust` and `__rows` `margin-top`; 2 in the reduced-motion block). Transitions: 4, all **200 ms**. Gradients: 7.
**No `1.5px` borders** anywhere — every edge is 1 px.

## Screenshot analysis (1200 × 972 JPEG)

Split hero on a very pale lilac-white ground that has two soft violet blooms and a barely-visible dot texture
that fades out toward the bottom. Left column, top to bottom: a **pill** (`New` in a solid violet chip + "Rolling
forecasts are live" + chevron) → a **three-line headline** in near-black at ~65 px with the phrase *"not weeks."*
painted in a violet→purple gradient → a two-sentence sub in grey → a **solid violet primary button** beside a
**white ghost button with a small circular play chip** → three inline green checkmarks with short labels.

Right column: a **white dashboard card**, visibly tilted (its top edge runs downhill to the right, its right edge
is nearer the viewer), with a pale grey browser bar (three traffic-light dots + a rounded URL field), a narrow
left icon rail with one highlighted tile, and the panel: *Overview* + a *Last 12 months* chip, **three KPI tiles**
(MRR $84,210 +12.4 % green; Net burn $31,870 −4.1 % blue; Runway 26 mo +3 mo), a **bar chart with a rising line**
over it, and **three transaction rows** with green `In` / red `Out` chips and right-aligned bold amounts. A small
**white toast** with a green check tile sits at the card's lower-left corner, overhanging the card's edge.

The frame around everything is **macOS browser chrome** with a `preview.colorlib.com` pill — that is the
screenshot's packaging, not the design. **Port the page, never the frame.**

## Section-by-section fidelity notes

1. **The bar is not sticky and not opaque.** It is a plain in-flow `<header>` with `z-index:5` on a transparent
   ground; the bloom shows through it. No border, no shadow, no background colour.
2. **Wordmark tile is `currentColor`-filled SVG, the text is separate.** The 28 px `rect rx=8` takes
   `var(--accent)` via `.logo svg{color:…}` while the label is `--ink`. Two colours, one element.
3. **Nav links are padding-defined, not gap-defined:** `gap: 4px` between 8/12-padded 15 px links. A port that
   copies only the gap gets a cramped row.
4. **The hero's two CTAs are different components.** The bar's is `105 × 40` radius **10** at `14.5px`; the
   hero's is `154 × 50` radius **12** at 16 px. The source shares one class — and one `!important` for the white
   text — which is why `querySelector('.cl-hero01__cta')` measures the wrong button.
5. **The vertical rhythm is margin-driven inside the copy:** pill (0) → `h1` (`mt 22 / mb 18`) → sub → actions
   (`mt 32`) → trust (`mt 28`). The sub itself has `margin: 0`.
6. **The accent span's rect is 151.2 px tall at 1440** because it merges two line boxes: *"not"* closes line 2 and
   *"weeks."* is line 3. Any assertion on that rect must expect the merge.
7. **The mock is a grid of two fixed numbers:** `56px 1fr` for rail + panel, and `repeat(3,1fr)` for the KPIs.
   Every "responsive" change inside it is a **media-query deletion** (rail, KPI 3, row 3), never a flex shrink.
8. **The chart's line is absolutely positioned over the bars**, `inset: 12px`, with
   `vector-effect: non-scaling-stroke` so the 2.5 px stroke survives `preserveAspectRatio="none"`. Drop that
   attribute and the line thickens horizontally at wide widths.
9. **Bars animate with `scaleY(.1) → 1` from `transform-origin: bottom`**, heights are inline `--h` percentages
   of the chart's **content** box (150 − 24 = 126 px → 34 % = 42.84 px, measured 43).
10. **The toast bobs 8 px every 2.5 s** (`50% { translateY(-8px) }` on a 5 s loop) and is `aria-hidden`; its text
    duplicates nothing, so hiding it loses no information — but the port still needs it visually.
11. **Nothing is sticky, nothing scrolls, nothing is lazy.** The entire page is one screen of static DOM; the only
    state is the menu's three booleans.
12. **Two centres, not one:** the page's content is vertically centred by `main{flex:1;align-items:center}` while
    the copy column is centred inside the grid by `align-items:center`. Both matter at 1440 (section at y 129.61,
    copy at y 228.58).

## Source → React adaptation

| source                                        | port                                                              |
| --------------------------------------------- | ----------------------------------------------------------------- |
| `div.cl-hero01` (BEM, `--cl-hero01-*` props)  | `App` + Tailwind `@theme` tokens; no BEM, no custom-prop fan-out   |
| 56 utility-free classes                       | components: `SiteHeader`, `HeroCopy`, `DashboardMock`, `RevenueChart`, `KpiTile`, `TransactionRow`, `FloatingToast` |
| `js/snippet.js` IIFE + `.is-enhanced` latch   | `useMobileMenu()` hook: `isEnhanced` on mount, `open`, Escape + focus return, outside click, `matchMedia('(min-width: 861px)')` |
| 12 hard-coded `span[style="--h:NN%"]`         | `bars: number[]` in `src/data/hero.ts`, mapped                  |
| 3 hard-coded `<li>` transactions              | `rows: {chip, c, name, amount}[]`                                 |
| `.cl-hero01__cta` (two sizes, one class)      | two components — `SmallCta` (bar) and `PrimaryCta` (hero)          |
| `:where(html) … { …: revert }` guard (22×)    | **not ported** — Tailwind preflight already normalises             |
| 5 `!important`                                | **not ported** — style the button component instead                |
| `.cl-icon{height:1em;…}` (unused)             | **not ported** — 12th consecutive snippet to carry this dead rule  |
| `#` anchors (10/10)                           | real routes/sections; `aria-current` on the actual page            |
| branding "Tallyhive" / `app.tallyhive.io`     | "Ledgerwell" / `app.ledgerwell.io`                                 |
| no footer                                     | one `<footer>` with the Component Dock link, **below** the band     |
| `100vh`                                       | `min-h-[100svh]` (mobile URL-bar safe) while keeping the 1440 equal 900 |

## Family context — this is `hero-01`, and there is nothing to compare it to yet

The card family (20) and alert family (12) are closed, so `hero-01` is the **first of a new family (12)** and
the first snippet in the repo that is a *viewport* rather than a *component*. What the previous families taught
that does carry over:

- **`theme/bootstrap/` is the only live prefix** for these snippet families — assume the slug-only path 404s and
  probe `bootstrap/` before writing "unreachable" (this variant: slug 404 / `bootstrap` 200 / `bb` 404).
- **10 `@font-face` over 2 binaries is the family's normal** → a variable cut per subset, five declared weights,
  one Google Fonts request in the port.
- **`.cl-icon` is dead in every variant so far** — it is dead here too (markup has none).
- **The screenshot is a macOS browser mock-up** (as in alerts 03/11 and several cards) — never adopt the frame.
- **Archive ↔ live hash check is the cheapest verification** and it passed here for both CSS and JS.

What is **new** for the family and must be re-checked on each later variant of the family rather than assumed:

- **A transformed hero visual** (`perspective` + two rotations) — the family's first 3D transform, and the first
  time rects lie by ~4 %. the next variant may or may not tilt; measure it, do not copy this spec's numbers.
- **A viewport-height layout** — `min-height:100vh` + `overflow:hidden`. Check whether the document actually
  scrolls at 1440 before asserting "one screen".
- **A no-JS fallback that matters** — the `is-enhanced` latch is a pattern from the alert family, but here it
  guards the entire navigation.
- **Deleting chrome at 560 instead of shrinking it** — the alert/card families only ever hid a badge; here a rail,
  a KPI and a table row vanish.

Still-free names for the rest of the family (checked 2026-10-26): `banneret`, `proem`, `apron`, `teaser`,
`marquee`, `valance`, `flyspace`, `cyclorama`, `downstage`, `footlights`, `skyline`, `flourish`.
Taken: `proscenium` (this one).
