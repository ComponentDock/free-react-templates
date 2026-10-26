# Template: Afterglow (Hero — a centred SaaS hero on a four-blob gradient mesh)

## Purpose

**One centred marketing hero on a pastel mesh gradient, with a glass pill for a nav bar and a six-tile logo
cloud below it** — the second variant of the `hero` snippet family, and the family's *rounded* counterpart to
Proscenium's split, product-mock hero. Nothing is drawn in CSS beyond the background: the "product shot" is
absent, the six customer wordmarks are **inline SVG + type**, and the only photography in the whole
catalogue item is the screenshot's own macOS window frame.

The page is **two sections, not one**: a `<section>` hero (rating pill → `h1` → sub → two CTAs → free-plan
note) and a second `<section>` logo cloud whose heading is the document's only `<h2>`. The root is
`min-height:100vh` with `overflow:hidden`, but the content is **950 px tall at a 900 px viewport**, so unlike
Proscenium this hero *just* scrolls: 50 px, enough to see that the logotype row is a band of its own.

- **Source slug:** `hero-02`
- **ColorLib page:** https://colorlib.com/wp/template/hero-02/ — **HTTP 200, 113,812 B**, `<title>`
  `Hero V02 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V02"**, `datePublished`
  **2026-09-25T15:08:54+00:00**, author Aigars Silkalns, licence CC BY 3.0, meta description *"A centred
  landing-page hero for a remote-work video product, set on a soft gradient mesh made of four blurred
  shapes…"*, and the claim *"the download is 204 KB"* (measured **208,724 B = 203.8 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V02".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-02/ — **HTTP 200,
  6,280 B**, `<title>` `Hero V02 | Colorlib`, `lang="en"`, **one** stylesheet
  (`css/style.css?v=eec58a92`) and **one** snippet `<script>` (`js/snippet.js?v=cc77b063`). The slug-only path
  `theme/hero-02/` is **404 (9 B)** and `theme/bb/hero-02/` is **404 (9 B)**: the `bootstrap/` prefix is the
  only live path, exactly as for the card, alert and first hero variants.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-02.jpg — **HTTP 200, 39,771 B**,
  **1200 × 972**, and it is **AVIF behind a `.jpg`** (`file` → `ISO Media, AVIF Image`; PIL opens it). It is
  a **macOS browser mock-up** on a grey ground with a drop shadow and a `preview.colorlib.com` URL pill.
  `<slug>-featured.jpg` is **404 (146 B html)**.
- **Design category:** Hero (**centred SaaS hero on an animated gradient mesh + a logo cloud** — variant 2 of
  the **12**-variant `hero` family, and the first of them with a second section).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/afterglow`, package
  `@free-react-templates/afterglow`, CNAME `afterglow.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` on main is fully `[x]` — **0** `- [ ]`, **0** `[~]`, 2,908 rows — so this design comes from
`docs/catalog-coverage.md`: designs on colorlib.com's own listing that the checklist never recorded.
`hero-02` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that gap are all
prepped, the card (20) and alert (12) families are complete, and the hero family is in progress. Families are
worked **in family order, then variant number** — this is **variant 2 of 12**.

## Bootstrap Heroes (12)

`TEMPLATES.md` still has **no `## Bootstrap Heroes` section on main** (Proscenium's row is suggested, not
written, and implementers have not shipped it yet). Alphabetically (`Alerts` · `Buttons` · `Calendars` ·
`Carousels` · `Cards` · `Checkboxes` · `Dropdowns` · `Footers` · **`Heroes`** · `Modals` · `Multiselect` ·
`Wizards`) the section belongs **between `## Bootstrap Footers (20)` and `## Bootstrap Modals (20)`**, and this
row is its **second** entry, directly under the `Hero 01` row:

```markdown
## Bootstrap Heroes (12)

- [x] **Hero 01** — [colorlib](https://colorlib.com/wp/template/hero-01/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-01.jpg) · [proscenium](https://proscenium.free.componentdock.com)
- [x] **Hero 02** — [colorlib](https://colorlib.com/wp/template/hero-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-02.jpg) · [afterglow](https://afterglow.free.componentdock.com)
```

Row-grammar warning, measured on main `abb7826af`: the neighbouring sections are **inconsistent** — Alerts
and most Footers rows are `[colorlib] · ![preview] · [app]`, while Modals rows are
`[colorlib] · [app] · ![preview]`. Use the **preview-in-the-middle** form shown above and re-read the
surrounding lines immediately before pushing — two implementer streams write this file.

**The name.** `afterglow` — one lowercase word for the light that stays on a surface after the source has
moved, which is exactly what this page is: four drifting colour fields behind a scrim. It keeps the snippet
families' closed-single-word pattern. Verified free on main `abb7826af`: `git grep -il afterglow` → **0
files**; no `apps/afterglow`; no `openspec/specs/template-afterglow`; no bold name in `TEMPLATES.md`; and
`colorlib.com/wp/template/afterglow/` (**404**), `preview.colorlib.com/theme/afterglow/` (**404, 9 B**),
`preview.colorlib.com/theme/bootstrap/afterglow/` (**404, 9 B**) all miss.

Rejected on measurement: **`daybreak`** (**22** repo hits, and an app + spec already exist).
Also checked and free for later variants of this family: **`halation`**, **`skywash`**, **`prismary`**,
**`glowmelt`**. Wordbank still held back from the family's first run: `banneret`, `proem`, `apron`, `teaser`,
`marquee`, `valance`, `flyspace`, `cyclorama`, `downstage`, `footlights`, `skyline`, `flourish`.

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium)

| what              | value                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 6,280 B** live (**6,231 B** inside the archive), `<title>` "Hero V02 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script  |
| preview path      | **`theme/bootstrap/hero-02/`**; `theme/hero-02/` **404** (9 B), `theme/bb/hero-02/` **404** (9 B)                                        |
| stylesheet        | `css/style.css?v=eec58a92`, **15,265 B**, **661** lines, sha256 `0b9d74f895291a8321da8a5b240b3e0cfe3d29e397e19840c4641108c519a4e6`         |
| script            | `js/snippet.js?v=cc77b063`, **1,363 B**, sha256 `655b43058f4d992ddd4f235d8850656380c950f1bab219209f944d03547ffe76`; `/js/main.js` **404 (9 B)** |
| archive           | `preview.colorlib.com/downloads/free/hero-02.zip`, **200, 208,724 B** (= 203.8 KiB ✓ the page's "204 KB"), **18 entries** = 4 dirs + **14 files** |
| archive contents  | `index.html` **6,231 B**, `css/style.css` **15,265 B**, `js/snippet.js` **1,363 B**, `README.md` **1,260 B**, `fonts/` **10 × woff2**      |
| live ↔ archive    | CSS **identical sha256**, JS **identical sha256**; the two HTML files differ **only in the `<head>`** (a `robots` pair, a cdnjs `dns-prefetch`, `fetchpriority="high"`, and the `?v=` query strings) → **live preview verified; the archive is its un-versioned twin** |
| inner pages       | **none** — `index.html` is **200, 6,280 B** = byte-identical to the directory URL; `about.html` and `pricing.html` are **404 (9 B)**; the archive ships exactly one HTML file |
| fonts (declared)  | **10** `@font-face`, all **Manrope**, weights **400 / 500 / 600 / 700 / 800** × two subsets (`latin`, `latin-ext`); no Google Fonts `<link>`, no `@import` |
| fonts (binaries)  | only **2** binaries: `latin` **24,576 B** sha256 `e310b55a7fd9…`, `latin-ext` **15,240 B** sha256 `ce093b341d9c…` — **all five weight files of a subset hash identically** ⇒ **one variable cut per subset** |
| type proof        | canvas A/B, `100px Manrope`, string `"Async video updates 0194"`: **400 → 1,198**, **500 → 1,217**, **600 → 1,236**, **700 → 1,258**, **800 → 1,273**, **900 → 1,273** ⇒ five genuinely distinct widths out of one binary per subset, and **900 clamps to 800** |
| Google Fonts      | `css2?family=Manrope` → **200**, `css2?family=Manrope:wght@400;500;600;700;800&display=swap` → **200** (the comma axis list `…,500,…` → **400**, so write the semicolons) |
| classes           | **37** classes in the markup, **36** with at least one rule, **0** phantom modifiers; **1** inert hook — `.cl-hero02__brand--kestrel` has **no rule** (it exists so the first wordmark reads at base weight); **1** dead rule — `.cl-icon` (**the thirteenth consecutive snippet to carry it**) |
| custom properties | **4** on `.cl-hero02` — `--cl-hero02-ink` `#14121f`, `--cl-hero02-muted` `#423f55`, `--cl-hero02-glass` `rgba(255,255,255,.62)`, `--cl-hero02-gutter` `clamp(16px,4vw,40px)` |
| CSS anatomy       | **101** blocks = **11** guard rules (`:where(html) … { …: revert }`, **22** `revert` declarations, 2 of them `all: revert`) + **10** `@font-face` + style rules + **3** `@keyframes` (one frame each) + **4** `@media`; width queries **960 / 860 / 520** + reduced motion; **6** `transition` declarations (5 live + the reduced-motion override); **18** colour literals (**13** distinct); **5** `!important` |
| controls          | **0** `<form>`, **0** `<input>`, **1** `<button type="button">` (the menu), **15** inline `<svg>`, **0** `<img>`                          |
| headings          | **1** `<h1>` ("Async video updates your team will actually watch"), **1** `<h2>` (the logo-cloud kicker)                                 |
| landmarks         | `<header class="cl-hero02__bar">` → `<nav aria-label="Main">`, `<main class="cl-hero02__main">` → **two** `<section>` (`aria-labelledby` on each); **no** `<footer>`, **no** `<aside>` |
| ids               | **2** — `cl-hero02-nav` (`aria-controls`) and `cl-hero02-title` / `cl-hero02-logos-title` (`aria-labelledby`, 2 more) → **3** total, **0** dangling |
| anchors           | **8 total, 8 dead `#`** — wordmark, 4 nav links, `Log in`, hero CTA, ghost CTA. `aria-current="page"` is on *Product* (a demo artefact). No `tel:`, no `mailto:`, no external link |
| document height   | **950** at 1440 (50 px of scroll at a 900 px viewport), **943** at 1280, **900** at 1024 and 961, **925** at 960, **904** at 900, **900** at 861 / 860 / 768 / 561 / 521, **920** at 520, **913** at 480, **925** at 390, **1031** at 320 — vertical only, `scrollX` **0** and `scrollWidth === clientWidth` at every width probed |
| reduced motion    | `@media (prefers-reduced-motion: reduce)` sets `animation:none !important; transition:none !important` on **every** descendant and pseudo-element — the mesh freezes in place, it is **not** removed |

## Page arithmetic at 1440 × 900 (measured, `getBoundingClientRect`)

| element             | box                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------- |
| `.cl-hero02`        | **1440 × 950**; `min-height:100vh`, `overflow:hidden`, `isolation:isolate`; bg `#fbfaff`; `16px / 1.55`   |
| `header` bar        | **1440 × 81.25** at (0, 0) — `padding: 16px 40px 0`                                                       |
| bar pill (inner)    | **1080 × 65.25** at (**180**, 16); `padding: 10px 10px 10px 18px`; radius **999**; `gap: 28`              |
| wordmark            | **115.77 × 27.89** at (199, 34.67) — 26 px SVG disc + 9 px gap + `18px/800` label                          |
| `nav`               | **906.23 × 43.25** at (342.77, 27) — `flex:1`, `justify-content:space-between`                              |
| link list           | **392 × 39.25**, centred by `margin: 0 auto !important`; 4 links **90** wide at (547.39, 29)               |
| `Log in`            | **85 × 43.25** at (1164, 27); `padding: 10px 20px`; radius 999                                             |
| hero section        | **900 × 699** at (270, **81.25**); `padding: clamp(40px,6vw,80px) var(--gutter) clamp(36px,4.5vw,60px)` = **80 / 40 / 60** |
| rating pill         | **322 × 35.69** at (559, **161.25**); `padding: 6px 14px`, radius 999, `gap: 8`, **5 × 14 px** stars        |
| `h1`                | **820 × 264.38** at (310, **220.94**) = **86.4 px / 88.128 line box / 3 lines**; `margin: 24px 0 20px`      |
| `p.sub`             | **691.19 × 89.25** at (374.41, **505.31**) = 19.2 px / 29.76 line box / **3 lines**; `max-width: 36em`      |
| actions row         | **428 × 54** at (506, **628.56**); `gap: 12`, `margin-top: 34`                                             |
| primary CTA         | **224 × 54** at (506, 628.56); radius **999**; 16 px arrow                                             |
| ghost CTA           | **192 × 54** at (**742**, 628.56)                                                                          |
| free-plan note      | **266 × 21.69** at (587, **698.56**)                                                                       |
| logo-cloud section  | **1080 × 170.14** at (180, **780.25**); `padding: 0 40px 64px`                                             |
| `h2` kicker         | **1000 × 20.14** at (220, 780.25); `margin: 0 0 22px` (22 px gap to the grid)                               |
| logo grid           | **1000 × 64** at (220, **822.39**) — **6** columns of **156.66**, `gap: 12`                                |
| one wordmark tile   | **156.66 × 64**; `padding: 0 12px`, radius **16**, `min-height: 64`, `gap: 8`                               |

**Where the 950 comes from.** `main` is `display:flex; flex:1; flex-direction:column; justify-content:center`.
Its content is `699 + 170.14 = 869.14` against `950 − 81.25 = 868.75` of space, so the centring has **zero
slack** and the document is the content: 950. The centring only becomes visible where the content is shorter
than the viewport — at 1024 the slack is `(818.75 − 789.47) = 29.28`, i.e. **14.64 px above and below**, which
is why the hero starts at **y 95.89** there and not at the bar's 81.25. A port that hard-codes `padding-top`
instead of reproducing the flex centring drifts by up to 14.64 px between ~960 and ~1200.

## The mesh — four blobs and a scrim

`.cl-hero02__mesh` is `position:absolute; inset:0; z-index:-1; overflow:hidden` inside an
`isolation:isolate` root; the root's background is `#fbfaff`, so the blobs paint **behind** all content but
inside the stacking context.

| blob | colour    | box                                   | animation                                            |
| ---- | --------- | ------------------------------------- | ---------------------------------------------------- |
| a    | `#ff9fd2` | `top:-18%; left:2%`   (662.39 px @1440) | `cl-hero02-a` **18 s** ease-in-out infinite alternate |
| b    | `#8fc5ff` | `top:-10%; right:0`   (662.39 px)       | `cl-hero02-b` **22 s**                                |
| c    | `#b7a0ff` | `top:28%; left:26%`   (662.39 px)       | `cl-hero02-c` **20 s**                                |
| d    | `#ffd3a1` | `top:36%; right:12%`, **`width:32vw`** (460.8 px) | reuses `cl-hero02-a` at **16 s** `alternate-reverse` |

Each blob is `width:46vw; max-width:680px; aspect-ratio:1; border-radius:50%; filter:blur(70px);
opacity:.75; will-change:transform`. The three keyframes end at `translate(14vw,10vh) scale(1.15)`,
`translate(-16vw,14vh) scale(.9)` and `translate(8vw,-12vh) scale(1.2)` — all from **no start frame**, so the
rest state is the CSS box itself. At **≤ 860** every blob becomes `width:80vw` (still capped at 680) and
`filter:blur(50px)`, which is why the 860 column of the blob widths *grows* to the 680 cap while the one below
it shrinks with the viewport.

`.cl-hero02__mesh::after` is the scrim that makes the type readable:
`linear-gradient(180deg, rgba(251,250,255,.1), rgba(251,250,255,.55) 60%, #fbfaff)` — 10 % white over the top
of the colour, 55 % at 60 % height, **opaque ground at the bottom**, so the logo cloud sits on `#fbfaff` and
the headline still sits on pink/blue. **The scrim is not decoration**; without it the `#423f55` sub-copy drops
into the gradient at ~4.5 : 1 instead of the measured 7.4 : 1.

## Design tokens

| token                | value                                                                    | used for                                                   |
| -------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
| ground               | `#fbfaff`                                                                | `body`, `.cl-hero02`, the scrim's last stop                 |
| ink                  | `#14121f`                                                                | `h1`, wordmark, current nav link, `Log in` fill, CTA fill   |
| muted                | `#423f55`                                                                | sub-copy, nav links, free-plan note                         |
| glass                | `rgba(255,255,255,.62)` + `backdrop-filter: blur(14px)`                   | the bar pill **and** the rating pill                        |
| glass edge           | `rgba(255,255,255,.8)` (bar) / `.9` (rating)                              | 1 px borders on both pills                                  |
| pink                 | `#ff9fd2`                                                                | mesh blob a                                                 |
| blue                 | `#8fc5ff`                                                                | mesh blob b                                                 |
| violet               | `#b7a0ff`                                                                | mesh blob c                                                 |
| peach                | `#ffd3a1`                                                                | mesh blob d                                                 |
| star amber           | `#d97706`                                                                | the five 14 px rating stars (decorative, `aria-hidden`)     |
| kicker ink           | `#4a4760`                                                                | the `h2` logo-cloud kicker                                  |
| wordmark ink         | `#3a374c`                                                                | the six customer wordmarks                                  |
| tile fill            | `rgba(255,255,255,.5)` → `:hover` `.85`, edge `rgba(255,255,255,.85)`     | the six wordmark tiles                                      |
| ghost fill           | `rgba(255,255,255,.75)` → `:hover` `#fff`, edge `rgba(20,18,31,.12)`      | "See how it works"                                          |
| nav link hover       | `rgba(20,18,31,.06)` + ink text                                          | the four links                                              |
| login hover          | `#2e2a45`                                                                | measured mid-transition `#2d2943`                           |
| focus ring           | `#6d28d9`, `3px`, `outline-offset: 3px`                                   | **every** `a` and `button`                                  |
| bar shadow           | `0 8px 30px -12px rgba(40,30,90,.18)`                                     | the floating pill                                           |
| CTA shadow           | `0 14px 30px -12px rgba(20,18,31,.55)` → `:hover` `0 18px 34px -12px rgba(20,18,31,.6)` + `translateY(-2px)` | the primary button |
| menu shadow          | `0 24px 48px -18px rgba(40,30,90,.35)` (≤ 860, open only)                 | the dropdown panel                                          |

Radii: pill **999** (bar, rating, links, `Log in`, CTA, ghost), dropdown **24**, wordmark tile **16**,
menu button and the logo disc **50 %**. Borders are **1 px** everywhere; nothing in the sheet declares
`1.5px`. The two `!important`s on colour (`Log in`, CTA) exist because `.cl-hero02 a { color: inherit }`
outranks a single class.

## Typography — one variable face, five declared cuts

| role            | size / weight / line-height                                                                 | notes                                              |
| --------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `h1`            | `clamp(2.5rem, 1.2rem + 5.2vw, 5.4rem)` → **86.4 px** at ≥ 1292, **800**, `1.02`, `letter-spacing:-.045em` | `max-width:15ch`, `text-wrap:balance`; `margin: 24px 0 20px` |
| sub             | `clamp(1.02rem, .95rem + .35vw, 1.2rem)` → **19.2 px**, 400, `1.55`                            | `max-width:36em`, `text-wrap:pretty`, muted        |
| wordmark        | **18 px / 800**, `letter-spacing:-.02em`                                                      | 26 px inline SVG disc, 9 px gap                    |
| nav link        | **15 px / 600**, `padding: 8px 14px`, radius 999                                              | muted → ink on `rgba(20,18,31,.06)`                 |
| `Log in`        | **15 px / 700**, `padding: 10px 20px`                                                         | white on ink                                        |
| rating pill     | **14 px / 600**, `padding: 6px 14px`                                                          | stars `14 px`, `gap: 1px`, amber `#d97706`          |
| CTA / ghost     | **16 px / 700**, `min-height: 54`, `padding: 0 28px`, `gap: 10`                                | pill; the CTA's arrow is `16 px`                    |
| free-plan note  | **14 px / 500**                                                                               | muted                                              |
| `h2` kicker     | **13 px / 700**, `uppercase`, `letter-spacing:.14em` (= 1.82 px)                               | `#4a4760`                                           |
| wordmark tiles  | **19 px / 800** base, `letter-spacing:-.02em`                                                  | five variants below                                 |

**One family, five real weights.** `"Manrope", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` on
`body`, inherited everywhere. The **2 binaries / 10 `@font-face`** split is a **variable cut** per subset with
five discrete declarations, so the port may simply load
`css2?family=Manrope:wght@400;500;600;700;800&display=swap` (verified 200) and keep the same five weights.
**No 300, no 900** — 900 measures identically to 800.

**The six wordmarks are six treatments, and that is the design.** `Kestrel` runs at base `800`; `halcyon` at
**500 / `letter-spacing:.02em`**; `Pinegrove` at **`Georgia, "Times New Roman", serif`, 700 italic** — the
page's only serif; `LUMEN LABS` at **15 px / `.16em`** (the uppercase is in the markup); `Quarry` at **700 /
`-.04em`**; `bluefin` at **600 italic** with a wider 26 px mark. Flattening them to one weight turns a logo
cloud into a list of words.

## The width ladder

Three width media queries (**960 / 860 / 520**) and three `clamp()`s do everything:

```
≤ 960   logo grid 6 → 3 columns        (list 64 → 140 tall, 2 rows; document 900 → 925)
≤ 860   bar switches to menu mode      (only under .is-enhanced: 44 px round button, nav absolute)
        every blob 46vw → 80vw, blur 70 → 50
≤ 520   actions stack (each 100 %, 54 + 54 + 12 = 120 tall), logo grid 3 → 2 columns,
        wordmark tile min-height 64 → 56 and 19 px → 17 px, LUMEN LABS 15 → 13 px / .1em
always  --gutter clamp(16px,4vw,40px); h1 clamp(2.5,1.2rem+5.2vw,5.4); sub clamp(1.02,.95+.35vw,1.2)
```

Resolved `h1` sizes: **86.4** at 1440 · **72.448** at 1024 · **69.12** at 960 · **66** at 900 · **63.92** at
860 · **59.136** at 768 · **48.372** at 561 · **46.24** at 520 · **44.16** at 480 · **40** at 390 and 320 (the
floor). The ceiling is reached at **vw 1292.3**; the floor at **vw 400**.

Gutter: **40** at ≥ 1000, **34.4** at 860, **30.72** at 768, **22.44** at 561, **20.8** at 520, **16** at ≤ 400.

## Where the text folds (measured per character)

| element | 1440 | 1024 / 960 / 768 | 480 / 390 | 320 |
| ------- | ---- | ---------------- | --------- | --- |
| `h1` | `Async video updates` / `your team will` / `actually watch` | same **3** lines | `Async video` / `updates your team` / `will actually watch` | **4**: `Async video` / `updates your` / `team will` / `actually watch` |
| sub | 3 lines, break after `…a written` | 3 lines; at 768 the break moves to `…waiting for a time` | 3 at 480, **4** at 390 | **5** |
| `h2` kicker | 1 line | 1 line | 1 line | **2** (`…distributed` / `teams`) |
| rating pill | 1 row | 1 row | 1 row | **wraps to 2 text lines** (35.69 → 57.69 tall) |
| free-plan note | 1 line | 1 line | 1 line | 1 line |

Two things worth stating plainly: the `h1` is **3 lines from 1440 all the way down to 390** — a 49-character
headline on `text-wrap:balance` simply re-balances — and it only splits into four at **320**, where the copy
column is **288 px** and the 40 px font cannot fit `updates your team`. The screenshot shows the *480 px*
wrap (`Async video / updates your team / …`), not the 1440 one, because the mock-up's frame is ~1110 px wide.

`max-width:15ch` resolves to **870 px** at 1440, **735** at 1024, **480** at 560 and **420** at 320; the copy
column is `900 − 2 × gutter` (**820 / 735 / 480 / 288**), so the `ch` cap only *ties* the container in the
~1000 px band and never actually shortens a line. Do not remove it, but do not expect it to do anything.

## Contrast (WCAG 2.x, computed from the shipped hexes; glass pairs measured on the rendered pixels)

| pair                                                        | ratio   | verdict |
| ----------------------------------------------------------- | ------- | ------- |
| ink `#14121f` on ground `#fbfaff`                           | **17.80** | AAA |
| ink on the darkest mesh behind the headline (`#e9caf4`, per-glyph) | **12.52** | AAA |
| muted `#423f55` on ground                                   | **9.75**  | AAA |
| muted on the pinkest mesh behind the sub (`#e2d7fe`, per-glyph) | **7.42**  | AA  |
| muted note on `#dad4ed` (scrim over violet)                 | **7.05**  | AA  |
| `h2` kicker `#4a4760` on ground / worst behind it           | **8.56** / **7.69** | AAA / AA |
| wordmark `#3a374c` on the glass tile (`#faf8fe`)            | **10.88** | AAA |
| nav link `#423f55` on the glass pill (`#fee8f4`)            | **8.71**  | AAA |
| wordmark `#14121f` on the glass pill                        | **15.80** | AAA |
| white on ink CTA / `Log in`                                 | **18.49** | AAA |
| white on `Log in` hover `#2e2a45`                           | **13.70** | AAA |
| ink on the nav-link hover `rgba(20,18,31,.06)` over ground  | **16.87** | AAA |
| focus ring `#6d28d9` on ground                              | **6.84**  | ✓ (≥ 3 : 1) |
| star amber `#d97706` on the rating pill                     | **3.07** on ground / **2.75** on the pinkest mesh | icons only — the **text** "4.8/5 from 1,200 remote teams" carries the meaning and sits at 12.55 |
| ghost edge `rgba(20,18,31,.12)` over its fill               | **1.22**  | decorative edge on a 54 px pill whose label is 17.8 : 1 |

**Every text pair passes AA** and the worst measured text ratio anywhere on the page is **7.05**. The only
sub-3 : 1 pair is the decorative star row (2.75 at its worst pixel), which is `aria-hidden` and always
accompanied by the numeral — a port must keep both properties, not just the colour.

## Behaviour — the menu (the page's only state)

`js/snippet.js` is 40 lines and does one thing: `initMenu()`.

1. Finds `.cl-hero02__bar`, its `.cl-hero02__menu-btn` and the element named by `aria-controls`
   (`cl-hero02-nav`); returns silently if any is missing.
2. Adds **`is-enhanced`** to the bar — every `≤ 860` mobile rule is scoped to `.is-enhanced`, so **without JS
   the mobile layout does not exist**.
3. `setOpen(true/false)` toggles `is-open`, `aria-expanded="true|false"` and the label
   **"Close menu" / "Open menu"**.
4. Closes on: button click, a click on any link **inside** the nav, **Escape** (and returns focus to the
   button), a click anywhere outside the bar, and `matchMedia('(min-width: 861px)')` turning true.

Measured at 860: closed → `aria-expanded="false"`, nav `display:none`, all-zero rect; open →
`aria-expanded="true"`, label `Close menu`, panel **720.42 × 306.6 at (69.8, 89)**, document stays **900**
(absolute, so it overlays); Escape → closed and `document.activeElement === button` ✓; a nav link click →
closed ✓; a body click → closed ✓.

At 390 the panel is **324 × 306.6 at (33, 89)**, each link **52.3** tall at **17 px**, `Log in` **51.3** tall,
document unchanged at 925.

**Without JS at 390** the bar never gets `is-enhanced`, so the pill keeps its content in flow:
`flex-wrap` turns the bar into **358 × 248.3** with radius **24**, the nav **226.3** tall, the hero starts at
**y 264.3** and the document grows **925 → 1107**. That is the no-JS page — a port that hides the nav in CSS
alone loses it.

## The dropdown anchors to the pill, not to the bar (`backdrop-filter` trap)

`.cl-hero02__nav` is `position:absolute; top:calc(100% + 8px); left:var(--gutter); right:var(--gutter)` inside
a `bar` that is `position:relative`. The measured containing block is **`.cl-hero02__bar-inner`**
(`offsetParent` = `cl-hero02__bar-inner`), not the bar: `backdrop-filter: blur(14px)` on the pill makes it a
containing block for absolutely positioned descendants, and the containing block is its **padding box** (1 px
inside the border). So the source's own `left/right: var(--gutter)` lands **1 px border + gutter** from the
pill's edge — x **69.8 = 34.4 + 1 + 34.4**, width **720.42 = 791.22 − 2 × 35.4** — and
`top: calc(100% + 8px)` hangs the panel 8 px under the pill: at 860 the pill is **66** tall (the 44 px menu
button sets it), so its padding box is 64 and the panel starts at y **89 = 17 + 64 + 8**, not at the bar's 81.

A React port must reproduce this deliberately: if the `backdrop-blur` lives on a wrapper that also contains
the `nav`, the panel's geometry changes; if it is dropped, the panel jumps **up** to the bar's edge and widens
by 70.8 px. Put the blur on the pill element and keep the `nav` inside it, exactly as the markup does.

## Requirements

### Requirement: Two sections and a header, on one scrolling document

The page SHALL be a header bar, a centred hero section and a logo-cloud section on a single document.

#### Scenario: A header, a hero section and a logo-cloud section

- **GIVEN** the reference at `theme/bootstrap/hero-02/`
- **WHEN** the page renders at 1440 × 900
- **THEN** there SHALL be exactly one `<header>` (the bar), one `<nav>`, one `<main>` and **two**
  `<section>` elements inside it, each labelled by `aria-labelledby`
- **AND** there SHALL be exactly **one `<h1>`** (the headline) and **one `<h2>`** (the logo-cloud kicker)
- **AND** the root SHALL be `min-height:100vh; overflow:hidden` with a **950 px** document, i.e. 50 px of
  vertical scroll at 900 and **no** horizontal scroll (`scrollX === 0`)

#### Scenario: The ground is a mesh, not a colour

- **GIVEN** `body { background:#fbfaff }` and an `isolation:isolate` root
- **WHEN** the hero paints
- **THEN** a `position:absolute; inset:0; z-index:-1` mesh SHALL hold **four** circular blobs —
  `#ff9fd2` (`top:-18%; left:2%`), `#8fc5ff` (`top:-10%; right:0`), `#b7a0ff` (`top:28%; left:26%`) and
  `#ffd3a1` (`top:36%; right:12%; width:32vw`) — each `46vw` wide (capped at **680**), `aspect-ratio:1`,
  `border-radius:50%`, `filter:blur(70px)`, `opacity:.75`
- **AND** a `::after` scrim SHALL fade them out with
  `linear-gradient(180deg, rgba(251,250,255,.1), rgba(251,250,255,.55) 60%, #fbfaff)`
- **AND** the three keyframes SHALL start from no transform and end at `translate(14vw,10vh) scale(1.15)`,
  `translate(-16vw,14vh) scale(.9)` and `translate(8vw,-12vh) scale(1.2)`

### Requirement: A floating glass bar with a centred link list

The header SHALL be a floating glass pill holding a wordmark, four links and a log-in button.

#### Scenario: Pill, wordmark, four links, log-in

- **GIVEN** the header at 1440
- **WHEN** it renders
- **THEN** the bar SHALL be `padding: 16px 40px 0` (**81.25** tall) and its pill **1080 × 65.25 at (180, 16)**,
  radius **999**, `1 px rgba(255,255,255,.8)` border, `rgba(255,255,255,.62)` fill, `blur(14px)`,
  `padding: 10px 10px 10px 18px`, `gap: 28`
- **AND** the wordmark SHALL be a 26 px inline SVG disc plus an `18px/800` label, **9 px** apart
- **AND** the four links SHALL be `15px/600` in `#423f55`, `padding: 8px 14px`, radius 999, **90 px** wide,
  centred in the remaining space by `margin: 0 auto`, with `aria-current="page"` on exactly one
- **AND** `Log in` SHALL be **85 × 43.25**, `15px/700` white on `#14121f`, hover `#2e2a45`

#### Scenario: The menu button exists only when the script runs

- **GIVEN** every `≤ 860` rule is scoped to `.cl-hero02__bar.is-enhanced`
- **WHEN** the viewport is 860 or narrower
- **THEN** with the script loaded the bar SHALL show a **44 × 44** ink circle and hide the nav behind it
- **AND** without the script the bar SHALL keep the nav in flow (`flex-wrap`, radius **24**) — at 390 that is
  **358 × 248.3** with the document at **1107** — so the port MUST preserve the no-JS page

#### Scenario: Open, close, Escape, outside click, resize

- **GIVEN** the menu button at 860
- **WHEN** it is clicked
- **THEN** `is-open` SHALL be set, `aria-expanded="true"`, the label SHALL become "Close menu" and the panel
  SHALL be **720.42 × 306.6 at (69.8, 89)** — anchored to the **pill**, 8 px below it
- **AND** Escape SHALL close it and return focus to the button; a nav-link click, a click outside the bar and
  a resize to ≥ 861 SHALL each close it

### Requirement: The hero — five stacked pieces, all centred

The hero SHALL stack a rating pill, a balanced headline, a sub-paragraph, two pill buttons and a note, all centred.

#### Scenario: Rating, headline, sub, two CTAs, one note

- **GIVEN** the hero section
- **WHEN** measured at 1440
- **THEN** it SHALL be **900 × 699 at (270, 81.25)** with `padding: 80px 40px 60px` and `text-align:center`
- **AND** the rating pill SHALL be **322 × 35.69 at (559, 161.25)** — `14px/600`, `padding: 6px 14px`, five
  `14 px` amber stars (`#d97706`, `aria-hidden`), `gap: 8`
- **AND** the `h1` SHALL be **820 × 264.38 at (310, 220.94)** — **86.4 px / 800 / 88.128 line box / 3 lines**,
  `letter-spacing:-.045em`, `text-wrap:balance`, `margin: 24px 0 20px`
- **AND** the sub SHALL be **691.19 × 89.25 at (374.41, 505.31)** — 19.2 px, `max-width:36em`,
  `text-wrap:pretty`, `#423f55`
- **AND** the actions row SHALL be **428 × 54 at (506, 628.56)**, `gap: 12`, `margin-top: 34`, with a
  **224 × 54** ink pill (16 px arrow) and a **192 × 54** glass pill at x **742**
- **AND** the note SHALL be **266 × 21.69 at (587, 698.56)**, `14px/500` muted

#### Scenario: The headline keeps three lines from 1440 to 390

- **GIVEN** the 49-character headline on `text-wrap:balance`
- **WHEN** the viewport narrows
- **THEN** it SHALL read `Async video updates / your team will / actually watch` at 1440 and
  `Async video / updates your team / will actually watch` at 480 — **three** lines at both
- **AND** it SHALL only reach **four** lines at **320**, where the column is **288** wide
- **AND** the sub SHALL be 3 lines down to 480, **4** at 390 and **5** at 320

### Requirement: The logo cloud — a kicker, six tiles, six treatments

The second section SHALL be a kicker plus six wordmark tiles, each with its own typographic treatment.

#### Scenario: Six wordmarks in one row, three, then two

- **GIVEN** the second section
- **WHEN** measured at 1440
- **THEN** it SHALL be **1080 × 170.14 at (180, 780.25)** with `padding: 0 40px 64px`
- **AND** the `h2` SHALL be `13px/700 uppercase letter-spacing:.14em` in `#4a4760`, `margin: 0 0 22px`
- **AND** the grid SHALL be **6 × 156.66** columns, `gap: 12`, each tile **156.66 × 64**, radius **16**,
  `padding: 0 12px`, `rgba(255,255,255,.5)` fill with a `rgba(255,255,255,.85)` edge
- **AND** at **≤ 960** it SHALL be **3** columns (list **140** tall) and at **≤ 520** **2** columns of
  **234.2**, tiles **56** tall

#### Scenario: The six treatments are the design

- **GIVEN** the six invented wordmarks
- **WHEN** they render
- **THEN** `Kestrel` SHALL be `19px/800`; `halcyon` **500 / `.02em`**; `Pinegrove` **Georgia 700 italic**;
  `LUMEN LABS` **15 px / `.16em`** (uppercase in the markup); `Quarry` **700 / `-.04em`**; `bluefin`
  **600 italic** with a 26 px mark
- **AND** each SHALL carry its own inline SVG mark, `aria-hidden`, `22 px` (26 for `bluefin`)

### Requirement: Motion, cheaper on phones, absent on request

The mesh SHALL drift on four independent CSS clocks and SHALL stop when reduced motion is requested.

#### Scenario: Four blobs drift on four clocks

- **GIVEN** `will-change:transform` on each blob
- **WHEN** the page idles
- **THEN** blobs a/b/c/d SHALL animate on **18 s / 22 s / 20 s / 16 s** (`alternate`,
  `alternate-reverse` for d — which reuses a's keyframes), `ease-in-out`, infinite
- **AND** at **≤ 860** each SHALL become `80vw` wide with `blur(50px)`
- **AND** under `prefers-reduced-motion: reduce` **all** animation and transition SHALL be `none`, leaving the
  four blobs in their CSS positions

### Requirement: Repo obligations

The port SHALL carry a Component Dock footer and SHALL NOT leak provenance into app files.

#### Scenario: Footer, brand, and no provenance in the app

- **GIVEN** every marketplace template carries a Component Dock footer
- **WHEN** the port is built
- **THEN** it SHALL add a `<footer>` below the logo cloud linking `https://www.componentdock.com/`
  ("Component Dock") — the reference has none
- **AND** it SHALL NOT add a features grid, a testimonial band, a pricing table, a third CTA or a nav column
- **AND** no app file SHALL contain `colorlib`, `hero-02`, `Driftwork` or the preview URL

#### Scenario: The `TEMPLATES.md` row

- **GIVEN** `TEMPLATES.md` has no `## Bootstrap Heroes` section
- **WHEN** the template ships
- **THEN** the row SHALL be the **second** entry of `## Bootstrap Heroes (12)`, under the `Hero 01` row, in the
  section inserted between `## Bootstrap Footers (20)` and `## Bootstrap Modals (20)`
- **AND** the row SHALL read `- [x] **Hero 02** — [colorlib](https://colorlib.com/wp/template/hero-02/) ·
  ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-02.jpg) ·
  [afterglow](https://afterglow.free.componentdock.com)`

## Adapting to the repo (deltas — read before writing code)

**Copy.** The reference's invented brand SHALL NOT appear. Use these replacements:

| source                                        | port                                                    |
| --------------------------------------------- | ------------------------------------------------------- |
| "Driftwork" (wordmark, sub, CTA label)         | **"Nightwave"** (`git grep -il nightwave` → **0**) — **9 characters, the same as the source**, so every fold in the tables above still holds |
| `Try Driftwork free`                           | `Try Nightwave free`                                     |
| headline `Async video updates your team will actually watch` | **keep** — no brand in it, and the fold table is keyed to it |
| rating `4.8/5 from 1,200 remote teams`, note, kicker | **keep** (generic copy)                          |
| `Kestrel` · `halcyon` · `Pinegrove` · `LUMEN LABS` · `Quarry` · `bluefin` | **keep** — invented names, and each one's typographic treatment is the section's content |

If the port changes any of those strings it MUST re-measure the folds (h1 3/3/3/4, sub 3/3/4/5, kicker 1/2),
because the wrap points are content widths, not viewport truths.

**Structure → React.** `App` → `<SiteHeader>` (wordmark, `<nav>` links, `Log in`, `useMobileMenu` hook that
reproduces `setOpen` + Escape + outside click + the 861 px media listener) → `<Hero>` (`<RatingPill>`, `h1`,
sub, `<Actions>`, note) → `<LogoCloud>` (`h2` + `<WordmarkTile>` × 6, each taking `{ name, mark, className }`)
→ `<Footer>`. The mesh is one `<Mesh />` component holding four `<span>`s and **no JS** — the animation is
pure CSS, so nothing about it belongs in `useEffect`.

Keep the six wordmark treatments as **data** (`{ name, weight, tracking, family, mark }`), not as six
hand-written class strings, so the 320 px `LUMEN LABS` step (`15 → 13 px`, `.16em → .1em`) is one rule.

**Tokens.** Put the palette in `@theme`: `--color-ground:#fbfaff`, `--color-ink:#14121f`,
`--color-muted:#423f55`, `--color-kicker:#4a4760`, `--color-wordmark:#3a374c`, `--color-star:#d97706`,
`--color-focus:#6d28d9`, `--color-mesh-pink:#ff9fd2`, `--color-mesh-blue:#8fc5ff`,
`--color-mesh-violet:#b7a0ff`, `--color-mesh-peach:#ffd3a1`; radii `--radius-pill:999px`,
`--radius-tile:16px`, `--radius-panel:24px`; the gutter as `--gutter: clamp(16px,4vw,40px)`.

**The blur is load-bearing twice over:** it is the glass look **and** it is what positions the dropdown
(see above). Tailwind's `backdrop-blur-[14px]` on the pill is the faithful choice; a `filter: blur()` on the
pill would *also* create the containing block but would blur its children — do not substitute.

**Prescribed fixes (all behavioural, not cosmetic).** (1) Give the eight anchors real destinations — the
source's are all `#`, wordmark and `Log in` included. (2) `aria-current="page"` belongs on the page the
visitor is on, not permanently on *Product*. (3) Add the Component Dock `<footer>`. (4) The rating pill's
`<p>` should expose the score as text (it already does: "4.8/5 from 1,200 remote teams") — keep the stars
`aria-hidden` so a screen reader hears the sentence once.

**Do not port:** the `:where(html) … { …: revert }` guard block (**22** `revert` declarations — Tailwind's
preflight covers it), the dead `.cl-icon` rule, the inert `.cl-hero02__brand--kestrel` hook, the two
`!important` colours that work around `.cl-hero02 a { color: inherit }`, the `margin: 0 auto !important` on the
link list (express the centring as `mx-auto`), the source's `#` anchors, or the macOS screenshot frame.

## Verification checklist

- [ ] `apps/afterglow` exists, package `@free-react-templates/afterglow`, `public/CNAME` =
      `afterglow.free.componentdock.com`, `"homepage"` = `https://afterglow.free.componentdock.com`
- [ ] `npm run verify:app afterglow` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-afterglow --type spec` is valid
- [ ] measured at 1440 × 900: bar **1440 × 81.25**; pill **1080 × 65.25** at (180, 16); wordmark
      **115.77 × 27.89** at (199, 34.67); link **90** at (547.39, 29); `Log in` **85 × 43.25** at (1164, 27);
      hero **900 × 699** at (270, 81.25); rating **322 × 35.69** at (559, 161.25); `h1` **820 × 264.38** at
      (310, 220.94); sub **691.19 × 89.25** at (374.41, 505.31); actions **428 × 54** at (506, 628.56); CTA
      **224 × 54**, ghost **192 × 54** at x 742; note at (587, 698.56); logo section **1080 × 170.14** at
      (180, 780.25); grid **6 × 156.66 × 64**, `gap: 12`
- [ ] document height **950** at 1440 (50 px of scroll) and **900** at 1024; `scrollX === 0` and
      `scrollWidth === clientWidth` at **320 / 390 / 480 / 520 / 768 / 860 / 960 / 1024 / 1440**
- [ ] tokens exact: ground `#fbfaff`; ink `#14121f`; muted `#423f55`; kicker `#4a4760`; wordmark `#3a374c`;
      stars `#d97706`; ring `#6d28d9` 3 px / offset 3; glass `rgba(255,255,255,.62)` + `blur(14px)`; blobs
      `#ff9fd2` / `#8fc5ff` / `#b7a0ff` / `#ffd3a1` at `46vw` max 680, `blur(70px)`, `opacity:.75`; scrim
      `rgba(251,250,255,.1) → .55 @60% → #fbfaff`
- [ ] the mesh is **CSS only**: four spans, three keyframes (18 / 22 / 20 / 16 s), no `useEffect`, no canvas
- [ ] `h1` **86.4 px / 800 / 1.02 / -.045em**, 3 lines at 1440 and 480, **4** at 320; sub 19.2 px, 3 lines
      down to 480, **4** at 390, **5** at 320; kicker `13px/700 uppercase .14em`, 2 lines at 320
- [ ] the six wordmarks keep their six treatments (800 / 500 `.02em` / **Georgia italic** / 15 px `.16em` /
      700 `-.04em` / 600 italic) — not one weight
- [ ] width ladder: **960** 3-column grid; **860** menu mode + `80vw` blobs at `blur(50px)`; **520** stacked
      actions (**120** tall) + 2-column grid at **56**-tall tiles + `LUMEN LABS` at 13 px
- [ ] vertical centring is the **flex parent**, not padding: hero y **81.25** at 1440 (no slack) and
      **95.89** at 1024 (14.64 px of slack each side)
- [ ] behaviour: `is-enhanced` only when JS runs; at 390 no-JS the bar is **358 × 248.3**, doc **1107**, hero
      at y **264.3**; at 860 the open panel is **720.42 × 306.6 at (69.8, 89)** — **anchored to the pill**;
      at 390 **324 × 306.6 at (33, 89)**; `aria-expanded` tracked; label swaps; **Escape returns focus to the
      button**; link click, outside click and ≥ 861 px all close
- [ ] the dropdown's containing block is the **pill** (blur on the pill, `nav` inside it) — dropping or
      moving the `backdrop-filter` moves the panel
- [ ] motion: `prefers-reduced-motion` leaves the blobs **in place** (`animation:none`), it does not hide them
- [ ] contrast: every text pair ≥ 4.5 : 1 **measured against the pixels behind the glyphs** (worst **7.05**);
      stars stay `aria-hidden` beside the numeral; focus ring ≥ 3 : 1 on the mesh
- [ ] exactly 1 `<h1>`, 1 `<h2>`, **0** `<img>`, **0** `<form>`, **0** `<input>`, 1 `<button>`; 15 inline SVGs,
      every decorative one `aria-hidden`
- [ ] type: Manrope **400 / 500 / 600 / 700 / 800** only (one `css2` request with semicolons, no local
      `woff2`); no 300, no 900 (900 clamps to 800)
- [ ] no occurrence of `colorlib`, `hero-02`, `Driftwork` in any app file; the Component Dock link is in a
      real `<footer>` **below** the logo cloud
- [ ] `TEMPLATES.md` carries the `Hero 02` row as the **second** entry of `## Bootstrap Heroes (12)`
- [ ] `curl -I https://afterglow.free.componentdock.com` → 200, `ssl_verify_result=0`
