# Template: Epistle (Hero — a newsletter landing hero built around one inline email field)

## Purpose

**One landing screen for a weekly design newsletter** — the fifth variant of the `hero` snippet family, and the
family's first entry whose whole point is a **form**: a cream page with a peach radial glow in the top-right
corner, a hairline header bar (italic-coral "The" + a bold wordmark, four muted links with a coral underline on
the current one), then a two-column hero — a white issue pill, a **balance-wrapped 4-line display headline**
whose second clause is coral over a hand-highlighted band, a three-line lede, a **pill email field with a hard
5 × 5 px ink offset shadow** and a coral subscribe button inside it, a hint line, and a four-avatar proof row —
facing a **three-card rotated stack** holding a mock newsletter issue (yellow card +7°, blue card −5°, white
issue card −1° with an 8 × 8 px ink shadow) and a mint **"Free forever"** sticker rotated 12° over its corner.

There is **no photography and no `<img>` at all**: the whole right-hand visual is nine divs/spans, four inline
SVGs in the page (menu open, menu close, mail icon, check icon) and three gradients. The page carries **one**
script (`js/snippet.js`, 3,178 B) and it does exactly two jobs: turn the nav into a disclosure menu below
861 px, and run the client-side email validation + success state.

At 1440 × 900 the document is **929 px**, not 900: the copy column is 694.8 px tall inside an 854.8 px hero, so
`min-height:100vh` only guarantees a floor. The page fits **exactly 900 px from 961 to 1192** and starts
scrolling at **1193** (see the ladder) — unlike the family's third and fourth variants, this one does *not* land
on 900 at 1440.

- **Source slug:** `hero-05`
- **ColorLib page:** https://colorlib.com/wp/template/hero-05/ — **HTTP 200, 113,694 B**, `<title>`
  `Hero V05 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V05"**,
  `datePublished` **2026-09-25T15:09:01+00:00**, meta description *"A landing hero for a weekly design
  newsletter, built around one inline email field and a subscribe button. Free download, no jQuery or
  plugins."*, and the claim *"the download is 239 KB"* (measured **244,753 B = 239.0 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V05".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-05/ — **HTTP 200,
  5,440 B**, `<title>` `Hero V05 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=5126e0b0`,
  `fetchpriority="high"`) and **one** `<script src="js/snippet.js?v=6f1b8891">`. The slug-only path
  `theme/hero-05/` is **404 (9 B)** and `theme/bb/hero-05/` is **404 (9 B)**: the `bootstrap/` prefix is the
  only live path, as for every card, alert and hero variant before it.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-05.jpg — **HTTP 200, 45,232 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name (fourth of the family's five). It is a **macOS
  browser mock-up** on a grey ground with a drop shadow and a `preview.colorlib.com` URL pill; the page inside
  the frame is **~1120 px** wide. Do not adopt the frame.
- **Design category:** Hero (**newsletter landing hero — cream ground, peach corner glow, balance-wrapped
  headline with a highlighted clause, pill email field with a hard offset shadow, three rotated cards carrying
  a mock issue, mint sticker badge**; variant 5 of the **12**-variant `hero` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/epistle`, package
  `@free-react-templates/epistle`, CNAME `epistle.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows (the only `[~]` is the status legend on line
12) — so this design comes from `docs/catalog-coverage.md`, which lists **214 snippet variants in 19 families**
that ColorLib's own listing carries and the checklist never recorded. `hero-05` is **variant 5 of 12** in the
`hero` family. The family is worked in variant order: `hero-01` → proscenium (shipped), `hero-02` → afterglow
(shipped), `hero-03` → presswork (shipped), `hero-04` → tendril (prepped, not yet built), and this prep is
**`hero-05`**.

## Bootstrap Heroes (12)

`## Bootstrap Heroes (12)` opens at **line 830** of `TEMPLATES.md`, between `## Bootstrap Footers (20)` and
`## Bootstrap Modals (20)`. Answered on main `8cb80977b` its rows are `Hero 01` → proscenium, `Hero 02` →
afterglow, `Hero 03` → presswork (a fourth row for `Hero 04` → tendril appears when that prep ships). The row
grammar in this section is `[colorlib] · ![preview] · [app]` — **preview in the middle**:

```markdown
- [x] **Hero 05** — [colorlib](https://colorlib.com/wp/template/hero-05/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-05.jpg) · [epistle](https://epistle.free.componentdock.com)
```

Insert it **after** whichever hero rows exist at that moment, keep that grammar, and **re-read the surrounding
lines immediately before pushing** — the implementer streams rewrite this file, and the section grew a row
twice during the previous prep.

**The name.** `epistle` — one lowercase word for a letter written to be read by many, which is exactly what a
newsletter is, and it keeps the snippet families' closed-single-word pattern (`nameplate`, `octavo`, `wafer`,
`proscenium`, `tendril`). Verified free on main: `git grep -il epistle` → **0 files**; no `apps/epistle`; no
`openspec/specs/template-epistle`; no `docs/templates/epistle`; and all three ColorLib URLs miss —
`colorlib.com/wp/template/epistle/` **404**, `preview.colorlib.com/theme/epistle/` **404**,
`preview.colorlib.com/theme/bootstrap/epistle/` **404**.

Checked and **free** for later variants of this family: **`postmark`**, **`handbill`**, **`maildrop`**,
**`newssheet`**, **`sundaysend`** (each 0 files, 0 folders, all three ColorLib URLs 404). Rejected on
measurement: `missive` (9 files, 1 spec), `broadsheet` / `gazette` / `inkwell` / `quill` (17–33 files, an app
each), `leaflet` (12 files), `courier` (110 — every "courier" string), `weekender` (1), `dispatch` (455).

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium, motion disabled)

| what              | value                                                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 5,440 B** live (**5,237 B** inside the archive), `<title>` "Hero V05 \| Colorlib", `lang="en"`, **one** stylesheet, **one** `<script>` |
| preview path      | **`theme/bootstrap/hero-05/`**; `theme/hero-05/` **404** (9 B), `theme/bb/hero-05/` **404** (9 B)                                            |
| stylesheet        | `css/style.css?v=5126e0b0`, **17,174 B**, **790** lines, sha256 `e2a17686a4181f4c…` (**identical** in the archive)                          |
| script            | `js/snippet.js?v=6f1b8891`, **3,178 B**, **88** lines, one IIFE, sha256 `1daaab7abbe31919…` (**identical** in the archive); menu + signup   |
| archive           | `preview.colorlib.com/downloads/free/hero-05.zip`, **200, 244,753 B** (= 239.0 KiB ✓ the page's "239 KB"), **18 entries** = 4 dirs + **14 files** |
| archive contents  | `index.html` 5,237 B, `css/style.css` 17,174 B, `js/snippet.js` 3,178 B, `README.md` 1,260 B, `fonts/` **10 files**, nothing else              |
| live ↔ archive    | CSS **and** JS **identical sha256**; the two HTML files differ **only in the `<head>`** (robots pair, cdnjs `dns-prefetch`, `fetchpriority`, `?v=`) → **live preview verified; the archive is its un-versioned twin** |
| README            | advertises an `images/` folder — **it does not exist** (no `<img>`, no `images/`; every graphic is CSS or inline SVG). **Fifth variant in the family whose README claims a file it does not ship** |
| inner pages       | **none** — `index.html` is **200, 5,440 B**, **byte-identical** to the directory URL (`sha256 3f3b4953…` both ways); `about.html`, `contact.html`, `archive.html`, `latest.html` → **404 (9 B)**; one HTML file in the archive |
| fonts (declared)  | **10** `@font-face`, all **Outfit**, weights **400 / 500 / 600 / 700 / 800**, each × subsets `latin` / `latin-ext`; no Google Fonts `<link>`, no `@import` |
| fonts (binaries)  | only **2 distinct** files — `latin` **32,228 B** sha256 `92684e4a…` and `latin-ext` **14,760 B** sha256 `9e38b3f1…`; the 10 files are those two copied under five weight names |
| type proof        | canvas A/B, `64px "Outfit"`, string `"Handgloves 0123456789"`: **690 / 694 / 707 / 711 / 726** at **400 / 500 / 600 / 700 / 800** ⇒ the five declared weights are five real renderings out of two files, i.e. Chrome instances the variable axis (the binaries carry `HVAR`/`MVAR`/`STAT`); do not read the duplicate hashes as a broken download |
| Google Fonts      | `css2?family=Outfit` → **200**; `css2?family=Outfit:wght@100..900` → **200**; `css2?family=Outfit:wght@400;500;600;700;800` → **200** |
| classes           | **44** `cl-hero05*` classes in the markup; **42** carry rules, **2** are pure containers (`__copy`, `__done-text`); **1** dead rule (`.cl-icon`, unused here — the sixteenth consecutive snippet to carry it); state classes `is-enhanced` / `is-open` / `is-error` / `is-sent` exist only in CSS + script |
| custom properties | **7** on `.cl-hero05` — `--cl-hero05-cream` `#fff6ea`, `--ink` `#231a13`, `--muted` `#5f5145`, `--coral` `#d13f26`, `--coral-soft` `#ffd9c9`, `--line` `#ecdcc8`, `--gutter` `clamp(16px,4vw,40px)`; **44** `var()` reads |
| CSS anatomy       | **120** `{` blocks (10 `@font-face` + **4** media + style rules); queries **960 / 860 / 520** + reduced motion; **22** `revert` declarations in the `:where(html)` guard; **2** `!important` (both in the reduced-motion kill switch); **0** `@keyframes`, **1** `animation` declaration (that kill switch), **4** `transition`s; **3** gradients; **29** hex literals / **20** distinct + **1** `rgba()` = **21** colours; **7** `box-shadow`s |
| controls          | **1** `<form>`, **1** `<input type="email">`, **2** `<button>` (menu toggle + submit), **4** inline `<svg>`, **0** `<img>`, **5** `<a>` — **all five `href="#"`** |
| headings          | **1** `<h1>` ("One thoughtful email about product design, every Sunday."), **0** `<h2>`                                                      |
| landmarks         | `<header class="cl-hero05__bar">` → `<nav aria-label="Main">`; `<main>` → **one** `<section aria-labelledby>`; the stack is an `<article>` inside `aria-hidden`; **no `<footer>`**, no `<aside>` |
| ids               | **5** — `cl-hero05-nav` (the button's `aria-controls`), `cl-hero05-title` (`aria-labelledby`), `cl-hero05-email`, `cl-hero05-hint` and `cl-hero05-error` (both in the input's `aria-describedby`) |
| behaviour         | one IIFE, two initialisers: `initMenu` (is-enhanced, toggle + Escape + outside click + `matchMedia('(min-width: 861px)')`) and `initSignup` (validate → `is-error` + `role="alert"` message, or → `is-sent` + `role="status"` confirmation) |
| reduced motion    | `@media (prefers-reduced-motion: reduce)` sets `animation:none !important; transition:none !important` on every descendant and pseudo-element; nothing is removed and no state is lost |

## Design tokens

Extracted from `css/style.css` (canonical over the screenshot) and re-read off the live render. **21 colours**,
not the seven custom properties: the mock issue, the sticker, the stacks and the four avatars each carry their
own.

| role                 | value                          | where it is measured                                                        |
| -------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| ground (page)        | `#fff6ea`                      | `body` background and `--cream`; the shell re-declares it                    |
| corner glow          | `#ffe2cf` → transparent 68 %    | `.cl-hero05::before`, `radial-gradient(circle, #ffe2cf 0%, rgba(255,226,207,0) 68%)`, `62vw` circle at `right:-12vw; top:-20vw` |
| ink                  | `#231a13`                      | headline, wordmark, label, field border, card borders, offset shadows, focus ring |
| muted                | `#5f5145`                      | lede, nav links, hint, readers line, mail icon, mail sub-line                 |
| coral (accent)       | `#d13f26`                      | "The", the highlighted clause, dot, submit button, active underline, avatar tile, list numerals, focus ring |
| coral soft           | `#ffd9c9`                      | highlight band (`70 %` of the `em`'s box) and the dot's 4 px ring            |
| line                 | `#ecdcc8`                      | bar bottom border, tag ring, dashed mail-head rule, mobile link rules        |
| error                | `#b42318`                      | error text, error field border and its offset shadow                         |
| success ground       | `#e7f6ec` / icon `#137a3a`      | the done box and its 40 px check disc                                        |
| card yellow          | `#ffd35c`                      | `.cl-hero05__card--b`, `rotate(7deg)`                                        |
| card blue            | `#9ad7ff`                      | `.cl-hero05__card--c`, `rotate(-5deg)`                                       |
| sticker mint         | `#c8f0d2`                      | the 96 px "Free forever" disc                                                |
| issue art            | `#ffb18f → #d13f26`, `#ffe39a`, `#f3e7d7` | the three blocks in `.cl-hero05__mail-art` (first is a 135° gradient, spans both rows) |
| avatars              | `#f59e0b` `#0ea5e9` `#8b5cf6` `#10b981`, text `#1b130c` | the four 36 px initials, set inline via `style="--c:…"`        |
| placeholder          | `#857566`                      | `.cl-hero05__input::placeholder`                                             |
| submit hover         | `#b23117`                      | `.cl-hero05__submit:hover`                                                   |
| font family          | `"Outfit"`                     | everything, one family, no serif anywhere                                    |
| radii                | 999 / 24 / 22 / 20 / 12 / 50 % / 3 px | pill tag + field + submit / issue + back cards / field at ≤520 / done box / mail avatar + art blocks / sticker + avatar faces + dot / active-link underline |
| shadows              | 5                            | field `5px 5px 0 ink`; card A `8px 8px 0 ink`; tag ring `0 0 0 1px line`; dot ring `0 0 0 4px coral-soft`; error field `5px 5px 0 #b42318` |
| gutter               | `clamp(16px, 4vw, 40px)`       | 40 at ≥1000, **38.44** at 961, **20.84** at 521, 16 at ≤400                  |
| display type         | `clamp(2.4rem, 1.3rem + 4.2vw, 4.6rem)` | **73.6 px** at 1440 (cap reached at 1300), **61.16** at 961, **50.2** at 700, **38.4** (floor, reached at 419) at 390/320 |
| lede type            | `clamp(1.05rem, 1rem + .3vw, 1.22rem)` | **19.52 px** at 1440 (cap reached at 1174), **17.26** at 419, **16.8** (floor at ≤267) at 266 |

**Radius note for the port:** Tailwind covers `rounded-full` (999), `rounded-3xl` (24), `rounded-xl` (12); the
done box's **20** and the ≤520 field's **22** need arbitrary values (`rounded-[20px]`, `rounded-[22px]`), which
is fine. The **hard offset shadows are not Tailwind's `shadow-*` scale** — they are
`shadow-[5px_5px_0_var(--color-ink)]` / `shadow-[8px_8px_0_var(--color-ink)]`.

## Page arithmetic at 1440 × 900 (measured, motion disabled)

| element                  | box                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `.cl-hero05`             | **1440 × 929** (document); `min-height:100vh`, flex column, `overflow:hidden`; cream ground + peach glow; `16px / 1.55` |
| `header` bar             | **1440 × 73.8** at (0, 0); inner **1200 × 72.8** at (120, 0), `padding: 18px 40px`, `gap: 24`, `max-width:1200`, `margin:0 auto`; `border-bottom: 1px solid #ecdcc8` |
| wordmark                 | **173.45 × 34.09** at (160, 19.34) — "The" **36.03** wide in coral **italic 500** at 22 px, then the name at **22 px / 800 / -.03em** (**-0.66 px**) |
| nav                      | **297 × 36.8** at (**983**, 18) — pushed right by `margin-left:auto`, `gap: 28`; each link `padding: 6px 0`, **16 px / 500**; "Latest" is 49 px wide and carries `aria-current="page"` + a **3 px** coral bar at `bottom:-19px` |
| menu button              | `display:none` at ≥861 (zero rect); below 861 it is **44 × 44**, `margin-left:auto`, `border: 1.5px solid ink` (computes **2 px**), radius **50 %** |
| `main`                   | `flex:1; display:flex; align-items:center` → the hero is centred in the space under the bar **when it fits**         |
| hero section             | **1200 × 854.8** at (120, **73.8**) — `padding: 80px 40px`, `grid-template-columns: minmax(0,1.15fr) minmax(0,.85fr)`, `gap: 86.4`, `align-items:center`. Its top is flush with the bar because the content is 28.6 px taller than the space under it, so `align-items:center` has no slack to give |
| copy column              | **594.31 × 694.8** at (160, **153.8**) = 73.8 + 80                                                |
| issue pill               | **242 × 34.47** at (160, 153.8) — `padding: 6px 14px`, radius 999, `#fff`, `0 0 0 1px #ecdcc8`, `14.5px / 600`, `gap: 10`; the **8 px** coral dot carries a **4 px** `#ffd9c9` ring |
| `h1`                     | **594.31 × 300.25** at (160, **210.27**) — **73.6 px / 75.072 line box / 4 lines**, `700`, `line-height:1.02`, `letter-spacing:-.04em` (**-2.944 px**), `text-wrap:balance`, `margin: 22px 0 18px` |
| highlighted clause       | `<em>` "every Sunday." — **431.73 × 93**, **one** client rect at every width; coral text over `linear-gradient(transparent 70%, #ffd9c9 70%)`, `font-style:normal` |
| lede                     | **594.31 × 90.7** at (160, **528.52**) — **19.52 / 30.256 / 3 lines**, muted, `max-width:32em` = **624.64** (does not bite: the column is 594.31) |
| signup block             | **540 × 131.38** at (160, **651.22**) — `max-width:540`, `margin-top:32`                             |
| label                    | **540 × 21.69** at (160, 651.22), `14px / 600`, `margin-bottom: 8`                                  |
| field                    | **540 × 66** at (160, **680.91**) — flex, `padding: 6px 6px 6px 18px`, `border: 2px solid ink`, radius 999, white, `box-shadow: 5px 5px 0 ink`, `gap: 8` |
| mail icon                | **20 × 20** at (180, 703.91) — muted stroke                                                 |
| input                    | **314 × 48** at (208, 689.91) — `17px`, transparent, no border, placeholder `#857566`                |
| submit                   | **162 × 50** at (**530**, 688.91) — `padding: 0 24px`, radius 999, coral, white `16px / 700`         |
| hint                     | **540 × 21.69** at (160, **760.91**) — `14px` muted, `margin-top: 14`                               |
| readers row              | **594.31 × 36** at (160, **812.59**) — flex-wrap, `gap: 12`, `margin-top: 30`, `15px` muted; faces **117 × 36** (4 × 36 with `margin-left:-9` and a **2.5 px** cream ring, i.e. **2 px** computed), sentence **329** wide starting at x 289 |
| stack                    | **439.3 × 460** at (**840.7**, 271.19) — the hero's second column, `position:relative; min-height:460` |
| card A (issue)           | box **399 × 420**, `inset: 20px 10px auto 30px`, radius **24**, `2px solid ink`, `8px 8px 0 ink`, `rotate(-1deg)` → rect **406.57 × 426.9** at (867.07, 287.74) |
| card B (yellow)          | box **399 × 420**, `#ffd35c`, `rotate(7deg) translate(18px, 8px)` → rect **447.51 × 465.53** at (863.49, 278.56) |
| card C (blue)            | box **399 × 420**, `#9ad7ff`, `rotate(-5deg) translate(-14px, 10px)` → rect **434.38 × 453.2** at (840.08, 285.77) |
| issue head               | **348.2 × 61.05** at (893.5, 314.18) — 40 px coral "SD" tile radius **12**, name `14px/700`, "Issue #213 · 6 min read" muted; `padding-bottom:14`, `1px dashed #ecdcc8` rule |
| issue title              | **348.25 × 63.55** at (894.7, 383.17) — **25 px / 700 / 1.15 / -.02em**, 2 lines                    |
| issue art                | **349.16 × 116.04** at (896, 454.66) — `grid-template-columns: 2fr 1fr`, two `1fr` rows, `gap:8`, height **110**; block 1 spans both rows as a 135° coral gradient, block 2 `#ffe39a`, block 3 `#f3e7d7` |
| issue list               | **348.7 × 89.45** at (898.1, 578.64) — three rows, `gap: 8`, `14.5px`; coral `01`–`03` in `<b>` with `gap: 10` |
| sticker                  | **96 × 96** box at `right:-6; top:-8` of the stack, radius 50 %, `2px solid ink`, `#c8f0d2`, `15px / 800 / 1.05`, centred, `rotate(12deg)` → rect **113.86²** at (1181.07, 254.26) |

**Where 929 comes from.** `main { flex:1 }` would give the hero 826.2 px, but the copy column is **694.8** and the
hero's own padding is 80 + 80, so the hero is **854.8** — `min-height:auto` on the flex item lets `main` grow to
73.8 + 854.8 = **928.6 → 929**, and `align-items:center` has nothing left to centre. A port that assumes "hero
pages are exactly 100vh" will pin the wrong document height at every width from 1193 up.

## The six devices

**1. The headline's last clause is a highlighted `<em>`, not a coloured span.** `em { color: coral;
font-style: normal; background: linear-gradient(transparent 70%, #ffd9c9 70%) }` — the band covers the bottom
**30 %** of the line box and follows the text box, so it *ends where the sentence ends* (431.73 px into a
594.31 px column). It is **one client rect at every width** (431.73 at 1440, 228.05 at 390/320): the clause
never wraps internally, because `text-wrap: balance` distributes the lines above it.

**2. The email field is one pill with the button inside it.** `.field` is the bordered, shadowed pill
(`padding: 6px 6px 6px 18px`, `gap: 8`); the `<input>` is borderless and transparent, and the `<button>` is a
50 px coral pill inset by the field's 6 px padding + 2 px border. The *only* focus affordance is the field's
`box-shadow` flipping from ink to coral via `:focus-within` — the input's own `outline` is `none`.

**3. The shadows are hard, not blurred.** Five `box-shadow`s in the whole sheet, four of them
`Npx Npx 0 <opaque>`: the field (5), the issue card (8), the done box (5) and the error field (5, in `#b42318`).
The fifth is the tag's `0 0 0 1px` ring. There is no blur anywhere on the page.

**4. The stack is three absolutely positioned cards with different jobs.** B (yellow, +7°) and C (blue, −5°)
are empty 399 × 420 rectangles; A (white, −1°) holds the mock issue and the only shadow. Only A reacts to
hover (`rotate(0) translateY(-6px)` over `.4s cubic-bezier(.2,.8,.2,1)`); the whole stack is `aria-hidden`.

**5. The sticker is a rotated disc pinned to the stack's corner** (`right:-6; top:-8`), so it overlaps card B's
top-right corner and card A's edge at once — that overlap is the design, and it is why the sticker is *outside*
the card's padding box.

**6. The card is a fixed-height flex column, and its artwork is the flex item that gives.** `.card--a` is
`height:420` (370 at ≤520) with `display:flex; flex-direction:column; gap:14`; `.mail-art` declares
`height:110` (90 at ≤520) but has no `flex:none`, so when the title grows a line the artwork is what shrinks —
**60.92** at 961, **8** at 320. See trap 4.

## Width ladder (measured, `getBoundingClientRect`, motion disabled, after `document.fonts.ready`)

| vw   | docH     | `h1` px | `h1` lines | copy / stack       | readers | field | art    | bar / nav         |
| ---- | -------- | ------- | ---------- | ------------------ | ------- | ----- | ------ | ----------------- |
| 1440 | **929**  | 73.6    | 4          | 594.31 / 439.3     | 1 row   | 66    | 116.04 | 73.8 / links      |
| 1333 | 929      | 73.6    | 4          | 598.02 / 442.02    | 1 row   | 66    | 116.09 | 73.8 / links      |
| 1250 | 917      | 73.3    | 4          | 600.88 / 444.13    | 1 row   | 66    | 116.13 | 73.8 / links      |
| 1200 | 903      | 71.2    | 4          | 602.59 / 445.41    | 1 row   | 66    | 116.15 | 73.8 / links      |
| **1193** | **901** | 70.9   | 4          | 598.81 / 442.61    | 1 row   | 66    | 116.1  | 73.8 / links      |
| **1192** | **900** | 70.9   | 4          | 598.27 / 442.22    | 1 row   | 66    | 116.1  | 73.8 / links      |
| 1100 | 900      | 67      | 4          | 548.55 / 405.45    | 1 row   | 66    | 115.45 | 73.8 / links      |
| 1001 | 900      | 62.8    | 4          | 495.05 / 365.91    | 1 row   | 66    | 112.39 | 73.8 / links      |
| 970  | 900      | 61.5    | 4          | 479.67 / 354.55    | 1 row   | 66    | 83.45  | 73.8 / links      |
| 961  | 900      | 61.16   | 4          | 475.22 / 351.25    | 1 row   | 66    | **60.92** | 73.8 / links   |
| 960  | **1203** | 61.1    | 2          | 883.22 / 440       | 1 row   | 66    | 116.06 | 73.8 / links      |
| 900  | 1186     | 58.6    | 2          | 828 / 440          | 1 row   | 66    | 116.06 | 73.8 / links      |
| 861  | 1175     | 57      | 2          | 792.13 / 440       | 1 row   | 66    | 116.06 | **73.8** / links  |
| 860  | 1182     | 56.9    | 2          | 791.22 / 440       | 1 row   | 66    | 116.06 | **81** / hamburger |
| 768  | 1156     | 53.1    | 2          | 706.56 / 440       | 1 row   | 66    | 116.06 | 81 / hamburger    |
| 700  | 1137     | 50.2    | 2          | 644 / 440          | 1 row   | 66    | 116.06 | 81 / hamburger    |
| **664** | **1127** | 48.7  | **2**      | 610.91 / 440       | 1 row   | 66    | 116.06 | 81 / hamburger    |
| **663** | **1177** | 48.6  | **3**      | 609.97 / 440       | 1 row   | 66    | 116.06 | 81 / hamburger    |
| 600  | 1160     | 46      | 3          | 552 / 440          | 1 row   | 66    | 116.06 | 81 / hamburger    |
| 521  | 1149     | 42.7    | 3          | 479.34 / 440       | 1 row   | **66** | 116.06 | 81 / hamburger   |
| 520  | 1165     | 42.6    | 3          | 478.41 / 440       | 1 row   | **122** | 96.41 | 81 / hamburger   |
| 480  | 1194     | 41      | 3          | 441.63 / 440       | 2 rows  | 122   | 96.41  | 81 / hamburger    |
| 440  | 1216     | 39.3    | 3          | 404.81 / 404.81    | 2 rows  | 122   | 95.79  | 81 / hamburger    |
| 419  | 1213     | 38.4    | 3          | 385.5 / 385.5      | 2 rows  | 122   | 95.46  | 81 / hamburger    |
| **383** | **1212** | 38.4  | **3**      | 351 / 351          | 2 rows  | 122   | 79.7   | 81 / hamburger    |
| **382** | **1251** | 38.4  | **4**      | 350 / 350          | 2 rows  | 122   | 79.68  | 81 / hamburger    |
| 360  | 1274     | 38.4    | 4          | 328 / 328          | **3 rows** | 122 | 56.83 | 81 / hamburger   |
| 320  | 1299     | 38.4    | 4          | 288 / 288          | 3 rows  | 122   | **11.77** | 81 / hamburger |

Five things this table says that a hand-written one would get wrong:

1. **The document is *tallest* at the widest viewport and *exactly* 900 only in a band.** 929 at 1440 → 917 at
   1250 → 903 at 1200 → **900 at 1192 → 961** → **1203 at 960**. The two-column layout's tall copy column is the
   cause above 1193; the single-column stack is the cause below 961.
2. **`h1` lines are not monotonic**: **4** (961–1440, two columns) → **2** (664–960) → **3** (383–663) → **4**
   (≤382). Narrowing from 961 to 960 *halves* the line count.
3. **The field's 520 step is the only breakpoint that changes the document by exactly one element.** 521 → 520
   costs **+16 px** (66 → 122) because the button wraps to `flex: 1 1 100%`; at the same time the cards drop from
   420 to 370 tall and the whole stack drops 460 → 400, so the net is +16 rather than +56.
4. **The bar changes height at 861, not 860**: 73.8 with the inline nav, **81** once the 44 px button is in the
   flex row (44 + 36 padding + 1 border). It is a *width* change of the bar, and it moves everything below it.
5. **The mock's artwork is a viewport-dependent height** (116.04 → 60.92 → 8) even though the sheet says 110/90.
   It is the flex item that absorbs the overflow (trap 4), so no table of "declared" values can be trusted here.

## The traps (all cost real measurement time)

1. **The hero is not 100vh at 1440.** 929, not 900 — and the *slack* is negative, so `align-items:center` has no
   effect above 1192. Do not "fix" it by removing the min-height; the band 961–1192 genuinely is 900.
2. **A rotated card's rect is not its size.** Card B is **399 × 420** but its rect is **447.51 × 465.53**
   (399·cos7 + 420·sin7 = 447.5, 399·sin7 + 420·cos7 = 465.5). Card A: 399 × 420 → **406.57 × 426.9**. Card C:
   399 × 420 → **434.38 × 453.2**. Read `offsetWidth/offsetHeight` inside the stack, and remember the sticker's
   96 px box measures **113.86** at 12°.
3. **The rotated back card IS clipped at narrow widths — by the shell, not by a scrollbar.** Card B's rect ends
   at **398.21** at 390 (viewport 390) and **328.47** at 320, i.e. **8.2 / 8.5 px** of the yellow card is cut by
   `.cl-hero05`'s `overflow:hidden`. `document.scrollWidth === clientWidth` at every width, so this is a clip,
   never an overflow — but it is a real visual defect, and the port SHALL NOT reproduce it (see the fixes).
4. **The issue artwork is the flex item that shrinks.** `.mail-art` declares `height:110` but is a flex child
   with default `flex-shrink:1` inside a fixed-height card: when the title wraps to three lines (961) or the list
   to two (320) the art is what gives — **60.92** and **8** px measured, with `offsetHeight` agreeing (8). A port
   that reads the declared 110 px off the sheet will render a 110 px art block and push the card's content out.
   The fix is `flex: none` on the art plus letting the card grow (`height:auto; min-height:420`).
5. **`1.5px` borders compute to 2 px, and `2.5px` to 2 px.** The menu button's `border: 1.5px` and the avatar
   ring's `2.5px` both read back as `2px` at DPR 1. Quote the computed value, not the declared one.
6. **The focus ring is coral and so is the button it sits on.** `.cl-hero05__submit` is `#d13f26` and
   `button:focus-visible` draws a **3 px `#d13f26`** outline at 3 px offset — measured
   `outline: rgb(209,63,38) solid 3px`, i.e. **1 : 1** against the button. Keyboard users see nothing. The port
   SHALL use an ink ring on the coral button.
7. **The error message goes stale while typing.** `initSignup`'s `input` listener only clears the message when
   `messageFor()` is *empty*, so typing `alchie@studio` after an empty submit leaves the field showing
   *"Please enter your email address."* with `aria-invalid="true"` until the next submit re-renders it as
   *"That email looks incomplete…"*. Measured, not inferred. Fix it: the message (and `aria-invalid`) SHALL track
   the value on every change.
8. **The success confirmation is announced twice.** `<div class="done" role="status">` wraps the text **and**
   receives `.focus()` (`done-box` is `tabindex="-1"`), so screen readers get the live-region announcement plus
   the focus announcement. Keep the `role="status"` and drop the programmatic focus (or focus a heading outside
   the live region).
9. **`text-wrap:balance` is why the line ladder inverts.** Without it the 4/2/3/4 pattern above would not hold,
   and the `<em>`'s single-rect property depends on it. Do not "clean it up".
10. **Two markup classes have no rule** (`__copy`, `__done-text`) — they are containers, not phantom styles, and
    `.cl-icon` is dead for the sixteenth consecutive snippet. Do not port either.
11. **The `.tag`'s dot ring is a `box-shadow`, not a border**, so it does not affect layout; giving it a border
    instead moves the pill's width by 8 px.
12. **The nav's `is-enhanced` class is not decoration.** The `max-width:860` menu rules are all scoped
    `.bar.is-enhanced …`; without the class (no JS) the bar instead *wraps* its links (`flex-wrap`) and keeps
    them visible. React renders the disclosure unconditionally, which is the JS path — but the no-JS fallback
    still needs the links in the DOM.

## Contrast (computed from the token pairs)

The copy column sits entirely on the flat cream ground (`#fff6ea`); the peach glow is a `62vw` circle anchored
at `right:-12vw; top:-20vw`, so at 1440 it starts around x ≈ 720 and the text column (x 160–754) is over cream
for all but its last few pixels. Ratios below are against `#fff6ea`.

| text                                              | pair                    | ratio      |
| ------------------------------------------------- | ----------------------- | ---------- |
| headline `#231a13` on `#fff6ea`                   | ink / ground            | **15.97**  |
| lede, nav, hint, readers `#5f5145` on `#fff6ea`   | muted / ground          | **7.14**   |
| highlighted clause `#d13f26` on the `#ffd9c9` band | coral / coral-soft     | **3.60** — passes AA for large text (73.6 px) |
| highlighted clause `#d13f26` on `#fff6ea` (the top 70 % of the line) | coral / ground | **4.41** — large text passes; **fails 4.5 for normal text** |
| "The" in the wordmark `#d13f26` on `#fff6ea` (22 px, weight 500) | coral / ground | **4.41** — **fails AA** |
| issue list numerals `01`–`03` `#d13f26` on `#fff` | coral / white          | **4.72** — passes   |
| submit label `#fff` on `#d13f26`                  | white / coral           | **4.72**   |
| error `#b42318` on `#fff6ea`                      | error / ground          | **6.14**   |
| placeholder `#857566` on `#fff`                   | placeholder / field     | **4.44**   |
| done text `#231a13` on `#e7f6ec`                  | ink / success           | **15.29**  |
| done check `#fff` on `#137a3a`                    | white / success icon    | **5.42**   |
| sticker `#231a13` on `#c8f0d2`                    | ink / mint              | **13.71**  |
| avatar initials `#1b130c` on amber / sky / violet / emerald | ink / `--c`  | **8.54 / 6.62 / 4.33 / 7.23** — the violet one **fails AA** for 12 px text |
| focus ring `#d13f26` on `#fff6ea` (3 px)          | coral / ground          | **4.41** (≥ 3 for UI)      |

Three real accessibility deltas, all fixable without changing the look: the wordmark's coral "The" at 22 px
(**4.41**), the violet avatar's initials at 12 px (**4.33**), and the coral-on-coral focus ring on the submit
button (**1 : 1**). Deepen the coral to **`#b23117`** for small text (6.28 on white, 5.7-ish on cream) or keep
`#d13f26` for the 73.6 px clause only; use `#1b130c` on a darker violet or darken the violet token; ring the coral
button in ink.

## Requirements

### Requirement: One newsletter landing screen

The template SHALL render one cream landing screen whose only data entry is a single email field.

#### Scenario: Landmarks, counts and the one headline at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** it renders
- **THEN** there SHALL be exactly one `<header>` (the bar), one `<nav aria-label="Main">`, one `<main>` and
  **one** `<section aria-labelledby>` inside it
- **AND** there SHALL be exactly **one** `<h1>` ("One thoughtful email about product design, every
  Sunday.") and **zero** `<h2>` elements
- **AND** there SHALL be exactly **one** `<form>`, **one** `<input type="email">`, **two** `<button>` elements
  (the menu toggle and the submit), **0** `<img>` and **4** inline `<svg>`
- **AND** the document SHALL be **929 px** tall with `scrollX === 0` and `scrollWidth === clientWidth`

#### Scenario: The hero is centred only when it fits

- **GIVEN** the root is `min-height:100vh; display:flex; flex-direction:column` and `main` is `flex:1` with
  `align-items:center`
- **WHEN** the hero is measured at 1440
- **THEN** it SHALL be **1200 × 854.8** with its top flush at y **73.8**, because 73.8 + 854.8 = 928.6 > 900
- **AND** at 1100 the same rules SHALL centre it at y **87.45** (798.88 tall under a 73.8 px bar) and the
  document SHALL be exactly **900**

### Requirement: A cream ground with a peach corner glow

The page SHALL paint a flat cream ground with one soft radial highlight in the top-right corner.

#### Scenario: The two background layers

- **GIVEN** the shell `.cl-hero05`
- **WHEN** it paints
- **THEN** its background SHALL be `#fff6ea` and its text `#231a13`
- **AND** `::before` SHALL paint `radial-gradient(circle, #ffe2cf 0%, rgba(255,226,207,0) 68%)` in a
  **62vw** square, radius 50 %, at `right:-12vw; top:-20vw` (**892.8 × 892.8** at 1440), `pointer-events:none`
- **AND** the shell SHALL carry `overflow:hidden` — the only things it clips SHALL be the rotated back card at
  narrow widths and nothing at 1440

### Requirement: A wordmark bar with four links and a disclosure below 861

The header SHALL hold an italic-coral "The" wordmark on the left and four muted links on the right, collapsing
into a disclosure menu at 860 and below.

#### Scenario: Wordmark, links and the current underline at 1440

- **GIVEN** the header at 1440
- **WHEN** measured
- **THEN** the bar SHALL be **1440 × 73.8** with an inner **1200 × 72.8** at (120, 0), `padding: 18px 40px`,
  `gap: 24`, `max-width: 1200`, and a `1px solid #ecdcc8` bottom border
- **AND** the wordmark SHALL be **173.45 × 34.09** at (160, 19.34): "The" **36.03** wide in coral **italic 500**,
  the name at **22 px / 800 / -.03em**
- **AND** the nav SHALL be **297 × 36.8** at (**983**, 18) — `margin-left:auto`, `gap: 28` — with links at
  `padding: 6px 0`, **16 px / 500** in muted, and "Latest" **49** px wide
- **AND** the current link SHALL be ink with a **3 px** coral bar, radius `3px 3px 0 0`, at `bottom:-19px`

#### Scenario: The disclosure at 860 and 861

- **GIVEN** the `max-width:860px` block and the script's `is-enhanced` class
- **WHEN** the viewport is 860 or narrower
- **THEN** the nav SHALL be `display:none`, the **44 × 44** circular button SHALL appear at `margin-left:auto`,
  and the bar SHALL grow to **81** px (44 + 36 padding + 1 border)
- **AND** opening SHALL set `is-open`, `aria-expanded="true"`, `aria-label="Close menu"`, `display:block` on the
  panel, and swap the two icons
- **AND** the panel SHALL be `position:absolute; top:100%` of the bar, full width, cream, with a **2 px** ink
  bottom border and links at `padding: 14px 0`, **20 px / 600**, hairline rules, and **no** current-page bar
- **AND** **Escape**, an outside click, a link click and `matchMedia('(min-width: 861px)')` SHALL each close it;
  Escape SHALL also return focus to the button
- **AND** at 861 the button SHALL be `display:none`, the links visible, and the bar **73.8**

### Requirement: An issue pill above the headline

The copy column SHALL open with a white pill announcing the next issue.

#### Scenario: The pill and its ringed dot

- **GIVEN** the pill at 1440
- **WHEN** measured
- **THEN** it SHALL be **242 × 34.47** at (160, 153.8) — `display:inline-flex; gap:10`, `padding: 6px 14px`,
  radius **999**, `#fff`, `box-shadow: 0 0 0 1px #ecdcc8`, `14.5px / 600`
- **AND** the dot SHALL be **8 × 8**, radius 50 %, coral, with `box-shadow: 0 0 0 4px #ffd9c9`, `aria-hidden`
- **AND** the ring SHALL be a shadow, so the pill's width SHALL NOT change if the ring colour changes

### Requirement: A balance-wrapped headline with a highlighted clause

The headline SHALL be one `<h1>` whose last clause is a coral `<em>` over a 30 % highlight band.

#### Scenario: Four lines, one `<em>` fragment, a band that ends with the words

- **GIVEN** the `h1` at 1440
- **WHEN** measured after `document.fonts.ready`
- **THEN** it SHALL be **594.31 × 300.25** at (160, 210.27) — **73.6 px / 75.072 line box / 4 lines**,
  `font-weight:700`, `line-height:1.02`, `letter-spacing:-.04em` (**-2.944 px**), `margin: 22px 0 18px`
- **AND** `text-wrap` SHALL be `balance`
- **AND** the `<em>` SHALL measure **431.73 × 93** as **one** client rect, coral (`#d13f26`), `font-style:normal`,
  over `linear-gradient(transparent 70%, #ffd9c9 70%)`
- **AND** the type size SHALL follow `clamp(2.4rem, 1.3rem + 4.2vw, 4.6rem)`: **73.6** at 1440, **61.16** at 961,
  **50.2** at 700, **38.4** (floor at 419 and below) at 390/320

#### Scenario: The line ladder inverts at 960

- **GIVEN** a viewport sweep with the copy column measured at each step
- **WHEN** the width goes 961 → 960
- **THEN** the `h1` SHALL go from **4** lines (475.22 column) to **2** lines (883.22 column)
- **AND** it SHALL be **3** lines from 383 to 663, and **4** again at 382 and below
- **AND** the `<em>` SHALL remain a **single** rect at every width (**228.05** at 320)

### Requirement: A lede capped at 32em

The paragraph under the headline SHALL be muted, three lines at 1440, and capped at `32em`.

#### Scenario: Three lines and a cap that does not bite

- **GIVEN** the lede at 1440
- **WHEN** measured
- **THEN** it SHALL be **594.31 × 90.7** at (160, 528.52) — **19.52 / 30.256 / 3 lines**, `#5f5145`
- **AND** `max-width` SHALL compute to **624.64** (32 × 19.52), i.e. wider than the column, so it SHALL NOT clamp
  the text at 1440
- **AND** the type size SHALL follow `clamp(1.05rem, 1rem + .3vw, 1.22rem)` — **19.52** at 1440 (cap at 1174),
  **16.8** (floor at ≤267) at 266

### Requirement: An inline pill email field

The signup SHALL be a labelled pill field containing a mail icon, a borderless input and a coral submit button,
with a hint line under it.

#### Scenario: The field, the input and the button

- **GIVEN** the signup block at 1440
- **WHEN** measured
- **THEN** it SHALL be **540 × 131.38** at (160, 651.22) with a **540 × 21.69** label above it
  (`14px / 600`, `margin-bottom:8`, `for="…-email"`)
- **AND** the field SHALL be **540 × 66** at (160, 680.91) — `padding: 6px 6px 6px 18px`, `gap: 8`,
  `border: 2px solid #231a13`, radius **999**, `#fff`, `box-shadow: 5px 5px 0 #231a13`
- **AND** the icon SHALL be **20 × 20** at (180, 703.91) in muted, the input **314 × 48** at (208, 689.91) at
  **17 px** with `border:0` and a transparent ground, and the button **162 × 50** at (530, 688.91) with
  `padding: 0 24px`, radius 999, `#d13f26`, white **16 px / 700**
- **AND** the *only* focus affordance SHALL be the field's shadow flipping to `5px 5px 0 #d13f26` on
  `:focus-within` — the input's own `outline` SHALL remain `none`
- **AND** the hint SHALL be **540 × 21.69** at (160, 760.91), `14px` muted, and the input's
  `aria-describedby` SHALL name both the hint and the error element

#### Scenario: The button and the field at 520 and below

- **GIVEN** the `max-width:520px` block
- **WHEN** the viewport is 520 or narrower
- **THEN** the field SHALL wrap (`flex-wrap: wrap`), drop to radius **22**, `padding: 6`, and stand **122** tall
- **AND** the button SHALL be `flex: 1 1 100%` — **462.41** wide at 520 and **342** at 390 inside a 358 px field
- **AND** the icon SHALL keep `margin-left:12` so it does not sit on the rounded edge

### Requirement: Client-side email validation

Submitting the form SHALL validate the address in the browser and SHALL report the result in an alert region
without navigating.

#### Scenario: An empty submit

- **GIVEN** an empty input
- **WHEN** the form is submitted
- **THEN** `is-error` SHALL be added, the field's border and shadow SHALL turn `#b42318`, the input SHALL get
  `aria-invalid="true"` and receive focus
- **AND** the alert region SHALL read **"Please enter your email address."** and the signup block SHALL grow from
  **131.38** to **161.84** and the document from **929** to **959**

#### Scenario: A malformed address

- **GIVEN** the value `alchie@studio` (no TLD)
- **WHEN** the form is submitted
- **THEN** the alert region SHALL read **"That email looks incomplete. Try something like
  name@studio.com."** and focus SHALL return to the input
- **AND** the reference's *stale* message while typing SHALL NOT be reproduced: on every `input` event the
  message and `aria-invalid` SHALL be derived from the current value, so a value that is still invalid SHALL show
  the *incomplete* message rather than the previous one, and a valid one SHALL clear both

### Requirement: A success state that replaces the form

A valid submit SHALL hide the form and show a confirmation naming the address.

#### Scenario: The done box

- **GIVEN** a valid address
- **WHEN** it is submitted
- **THEN** the form SHALL be `display:none`, the done box SHALL be `display:block` inside a `role="status"`
  region, and the signup block SHALL shrink to **85.59** (the box, at 540 wide, y 659.81)
- **AND** the text SHALL read **"You are on the list. We sent a confirmation link to {address}. Issue #214
  arrives Sunday morning."** with the first sentence in `<strong>`
- **AND** the page SHALL re-centre: the hero SHALL shrink from **854.8** to **809.02** and the document SHALL
  become exactly **900** at 1440
- **AND** the live region SHALL announce once — the port SHALL NOT also move focus into it

### Requirement: A reader-proof row

The copy column SHALL close with four overlapping initials and a read count.

#### Scenario: Faces, count, and the wrap ladder

- **GIVEN** the readers row at 1440
- **WHEN** measured
- **THEN** it SHALL be **594.31 × 36** at (160, 812.59) — `display:flex; flex-wrap:wrap; gap:12`,
  `margin-top:30`, `15px` muted, the count in `<strong>` ink
- **AND** the four faces SHALL be **36 × 36** circles, radius 50 %, `margin-left:-9` (first child 0), each with a
  `2.5px` cream ring (computes **2 px**) and `--c` set inline; the group SHALL be **117** wide and `aria-hidden`
- **AND** the row SHALL be **one line (36 px)** at ≥498, **two lines (71.25)** from 361 to 497, and **three lines
  (94.5)** at 360 and below

### Requirement: A three-card rotated stack with a mock issue

The hero's second column SHALL hold three 399 × 420 cards, only the front one carrying content, plus a rotated
sticker.

#### Scenario: The three cards and their rotations

- **GIVEN** the stack at 1440
- **WHEN** measured
- **THEN** the stack SHALL be **439.3 × 460** at (840.7, 271.19), `position:relative`, `min-height:460`
- **AND** every card SHALL be a **399 × 420** box with `inset: 20px 10px auto 30px`, `border: 2px solid #231a13`,
  radius **24** — so their *rects* read **406.57 × 426.9** (A), **447.51 × 465.53** (B), **434.38 × 453.2** (C)
- **AND** B SHALL be `#ffd35c` at `rotate(7deg) translate(18px,8px)`, C `#9ad7ff` at
  `rotate(-5deg) translate(-14px,10px)`, and A white at `rotate(-1deg)` with `box-shadow: 8px 8px 0 #231a13`
- **AND** hovering the stack SHALL settle A to `rotate(0) translateY(-6px)` (`matrix(1,0,0,1,0,-6)`) over `.4s`
- **AND** the whole stack SHALL be `aria-hidden="true"` — it is decoration, and the visible copy already carries
  every claim it makes

#### Scenario: The issue inside the front card

- **GIVEN** card A at 1440
- **WHEN** its contents are measured
- **THEN** the head SHALL be **348.2 × 61.05** — a **40 px** coral "SD" tile at radius **12**, `14px/700` name,
  muted "Issue #213 · 6 min read", `padding-bottom:14` and a **1px dashed** `#ecdcc8` rule
- **AND** the title SHALL be **348.25 × 63.55** at **25 px / 700 / 1.15 / -.02em** in **2** lines
- **AND** the art SHALL be a **2fr 1fr** grid, two `1fr` rows, `gap:8`, height **110** — block 1 spanning both rows
  as `linear-gradient(135deg,#ffb18f,#d13f26)`, block 2 `#ffe39a`, block 3 `#f3e7d7`
- **AND** the list SHALL be three rows, `gap:8`, `14.5px`, with coral `<b>` numerals `01`–`03` and `gap:10`
- **AND** the art SHALL keep a **fixed** rendered height at every width (see the fixes) instead of absorbing the
  card's overflow

#### Scenario: The sticker

- **GIVEN** the "Free forever" sticker
- **WHEN** measured at 1440
- **THEN** its box SHALL be **96 × 96** at `right:-6; top:-8` of the stack, `2px solid #231a13`, radius 50 %,
  `#c8f0d2`, `15px / 800 / 1.05`, centred, `rotate(12deg)` — rect **113.86²** at (1181.07, 254.26)
- **AND** at ≤520 it SHALL be **80 × 80**, `13px`, `right:0; top:-6`

### Requirement: A responsive ladder

The layout SHALL stack at 960, swap the field's shape at 520 and never scroll horizontally.

#### Scenario: 960 stacks the hero

- **GIVEN** the `max-width:960px` block
- **WHEN** the viewport is 960
- **THEN** the hero grid SHALL become **one column**, the stack SHALL be `width:min(100%,440px); min-height:440;
  margin:0 auto`, and the copy column SHALL be **883.22** wide
- **AND** the document SHALL jump from **900** (at 961) to **1203** (at 960)
- **AND** the `h1` SHALL fall from 4 lines to **2** at the same pixel

#### Scenario: No horizontal scrolling, anywhere

- **GIVEN** the ladder from 1440 to 320
- **WHEN** each width is measured
- **THEN** `scrollX` SHALL be **0** and `document.scrollWidth` SHALL equal `clientWidth` at every step
- **AND** the rotated back card SHALL NOT be clipped: its right edge SHALL stay inside the viewport at 390 and 320
  (the reference loses **8.2 / 8.5 px** to the shell's `overflow:hidden`)

### Requirement: The Component Dock footer

The page SHALL end with a footer that links the marketplace, because the reference has none.

#### Scenario: The added footer

- **GIVEN** the reference ends at the hero (`<main>` is the last landmark; no `<footer>`)
- **WHEN** the port renders
- **THEN** a `<footer>` SHALL follow the hero, outside the 100vh shell, linking
  `https://www.componentdock.com/` as "Component Dock"
- **AND** it SHALL use the same cream ground, the `#ecdcc8` hairline and muted `14 px` text so it reads as part
  of the page rather than an appendage

## Adapting to the repo (deltas — read before writing code)

**Copy.** The reference's invented brand SHALL NOT appear. Use these replacements:

| source                                                        | port                                                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| "The Sunday Draft" (wordmark, issue head, confirmation)         | **"The Epistle"** — "The" stays coral italic; the name is **7** characters instead of 12, so the wordmark box shrinks from **173.45** to ~**128**; the nav is `margin-left:auto` and the bar is a flex row, so nothing else moves |
| "Issue #214 lands this Sunday"                                  | keep the shape; "Issue #214 lands this Sunday" is brand-free — a different number is fine  |
| `One thoughtful email about product design, every Sunday.`      | **keep** — no brand in it, and the 4/2/3/4 line ladder is keyed to exactly this string     |
| `Case studies, interface teardowns and a hand-picked reading list …` | **keep** — no brand; it is the 3-line measure at 1440                                |
| "Read by **18,400** designers at studios and startups"          | keep the number and the sentence                                                          |
| `AK JM SL RD`                                                   | keep four initials; their `--c` values are the design                                     |
| `Why good empty states feel like a conversation`                | keep — 2 lines at 25 px in the card                                                       |
| `01 Teardown… / 02 The 8px grid… / 03 Five portfolios…`          | keep the three rows                                                                       |
| "Free forever"                                                  | keep                                                                                      |
| `Latest / Archive / About / Sponsor`                            | keep, with `aria-current="page"` on **one** of them and real destinations                 |

If the port changes the headline or the wordmark, it MUST re-measure two seams: the `h1`'s line ladder
(**4** at ≥961, **2** at 664–960, **3** at 383–663, **4** at ≤382) and the bar's width (the nav is
`margin-left:auto`, so a wider wordmark only collides below ~520 where the button has replaced it).

**Structure → React.** `App` → `<SiteHeader>` (wordmark, `<NavLinks>`, `<MenuButton>` with `aria-expanded` /
`aria-controls`, panel) → `<Hero>` → `<HeroCopy>` (`<IssuePill>`, `<Headline>`, `<Lede>`, `<SignupForm>` with
`<EmailField>` + `<Hint>` + `<FormError>` + `<SuccessBox>`, `<ReaderProof>`) → `<IssueStack>` (three cards +
`<Sticker>`) → `<Footer>`. State lives in two components: `SiteHeader.isOpen` and
`SignupForm` (`email`, `status: 'idle' | 'error' | 'sent'`, `message`). The menu's Escape / outside-click /
`matchMedia` listeners SHALL be cleaned up on unmount.

Keep the data as arrays/constants: `LINKS` (4 with `current`), `AVATARS` (4 with `initials`, `color`),
`ISSUE_ITEMS` (3 with `n`, `text`), so the counts are testable and the copy lives in one place.

**Tokens.** Put the palette in `@theme`: `--color-ground:#fff6ea`, `--color-glow:#ffe2cf`, `--color-ink:#231a13`,
`--color-muted:#5f5145`, `--color-coral:#d13f26`, `--color-coral-deep:#b23117`, `--color-coral-soft:#ffd9c9`,
`--color-line:#ecdcc8`, `--color-error:#b42318`, `--color-success:#e7f6ec`, `--color-success-ink:#137a3a`,
`--color-card-yellow:#ffd35c`, `--color-card-blue:#9ad7ff`, `--color-mint:#c8f0d2`, `--color-placeholder:#857566`,
`--color-art-1:#f3e7d7`, `--color-art-2:#ffe39a`, `--color-avatar-1:#f59e0b`, `--color-avatar-2:#0ea5e9`,
`--color-avatar-3:#8b5cf6`, `--color-avatar-4:#10b981`, `--color-avatar-ink:#1b130c`;
`--font-sans: "Outfit", system-ui, …`; `--gutter: clamp(16px, 4vw, 40px)`;
`--text-display: clamp(2.4rem, 1.3rem + 4.2vw, 4.6rem)`; `--text-lede: clamp(1.05rem, 1rem + .3vw, 1.22rem)`.
Tailwind's type scale cannot express either clamp, and the hard shadows are arbitrary values.

**Outfit.** Load it once: `https://fonts.googleapis.com/css2?family=Outfit:wght@400..800&display=swap`
(verified **200**); the static form `wght@400;500;600;700;800` is also **200**, and the reference ships the same
two variable binaries under all five names. Weights used: **400** (lede, hint, readers, issue list),
**500** (nav links, italic "The"), **600** (pill, label, error), **700** (headline, submit, issue title),
**800** (wordmark, sticker, "SD" tile, `18,400`).

**Prescribed fixes (behavioural, not cosmetic).**

1. **Live validation.** Derive the message and `aria-invalid` from the value on every change (trap 7); never leave
   a message that describes a previous state.
2. **Announce once.** Keep `role="status"` on the success box and drop the programmatic focus into it (trap 8).
3. **Ring the coral button in ink.** The reference draws a coral focus ring on a coral button (trap 6); use
   `outline-color: var(--color-ink)` (or a 2 px ink ring at 2 px offset) for `:focus-visible` on the submit.
4. **Keep the artwork's height** — `flex: none` on the art and `height: auto; min-height: 420px` on the card, so
   the 110 px grid never collapses to 8 px at 320 (trap 4).
5. **Do not clip the back card.** Give the stack `padding-inline` or a smaller `translate` at ≤520 so the yellow
   card's right edge stays inside the viewport (trap 3) — the clip is 8.2 px at 390 and 8.5 px at 320.
6. **Contrast.** Deepen the coral to `#b23117` for the 22 px wordmark "The" and any small coral text, and darken
   the violet avatar (or its initials) to clear 4.5 : 1 — both are 4.41 / 4.33 in the reference.
7. **Anchors.** Give the five `href="#"` links real destinations; keep `aria-current="page"` on one only.
8. **Footer.** Add the Component Dock footer the reference lacks.

**Do not port:** the `:where(html) … { …: revert }` guard block (**22** `revert` declarations — Tailwind's
preflight covers it), the `[hidden]` re-declaration that only exists to undo it, the dead `.cl-icon` rule, the
`is-enhanced` no-JS path as *separate* CSS (React renders the enhanced state), the source's `#` anchors, the
`novalidate` attribute (let the port validate in React and keep the native types), or the macOS screenshot frame.

## Verification checklist

- [ ] `apps/epistle` exists, package `@free-react-templates/epistle`, `public/CNAME` =
      `epistle.free.componentdock.com`, `"homepage"` = `https://epistle.free.componentdock.com`
- [ ] `npm run verify:app epistle` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-epistle --type spec` is valid
- [ ] measured at 1440 × 900 (motion disabled): bar **1440 × 73.8**; inner **1200 × 72.8** at (120, 0); wordmark
      **173.45 × 34.09** at (160, 19.34); nav **297 × 36.8** at (983, 18); hero **1200 × 854.8** at (120, 73.8);
      copy **594.31 × 694.8**; pill **242 × 34.47**; `h1` **594.31 × 300.25** at (160, 210.27) at **73.6 / 75.072**
      in **4 lines**; `<em>` **431.73** wide as one rect; lede **594.31 × 90.7**; signup **540 × 131.38**;
      field **540 × 66**; input **314 × 48**; submit **162 × 50** at (530, 688.91); hint **540 × 21.69**;
      readers **594.31 × 36**; stack **439.3 × 460** at (840.7, 271.19); sticker rect **113.86²**
- [ ] cards measured via `offsetWidth/offsetHeight` are **399 × 420** each (rects **406.57 × 426.9**,
      **447.51 × 465.53**, **434.38 × 453.2** are the rotations, not the sizes)
- [ ] document height **929** at 1440, **900** at 1192 and 961, **901** at 1193, **1203** at 960, **1182** at 860,
      **1175** at 861, **1165** at 520, **1149** at 521, **1299** at 320
- [ ] `scrollX === 0` and `scrollWidth === clientWidth` at **1440, 1333, 1300, 1250, 1200, 1193, 1192, 1100,
      1001, 970, 961, 960, 900, 861, 860, 768, 700, 664, 663, 640, 600, 521, 520, 480, 440, 419, 390, 383, 382,
      360, 320**
- [ ] `h1` lines: **4** at 961–1440, **2** at 664–960, **3** at 383–663, **4** at ≤382; type size **38.4** at
      419 and below (the clamp floor)
- [ ] readers row **one line** at ≥498, **two** at 361–497, **three** at ≤360; field **66** at ≥521 and **122**
      at ≤520 with the button `flex:1 1 100%`
- [ ] menu: button appears at **860** (44 × 44, bar **81**), disappears at **861** (bar **73.8**);
      `aria-expanded` and `aria-label` toggle, icons swap, panel is `top:100%` with a 2 px ink border, and
      Escape / outside click / link click / crossing 861 each close it
- [ ] form: empty submit → "Please enter your email address." + `aria-invalid` + `#b42318` border and shadow +
      focus on the input + document **959**; `alchie@studio` → the *incomplete* message; the message tracks the
      value while typing (no stale text); a valid address → done box **85.59** tall, document **900**, announced
      once
- [ ] hover: stack → card A `matrix(1,0,0,1,0,-6)`; submit → `#b23117`; nav link → ink; focus-visible →
      **3 px** ring at 3 px offset, **ink** on the coral button (not coral)
- [ ] no `<img>`; exactly **one** `<h1>`, **zero** `<h2>`, **one** `<form>`, **one** input, **two** buttons,
      **5** ids as listed; footer links `https://www.componentdock.com/`
- [ ] contrast: ink/ground **15.97**, muted/ground **7.14**, white/coral **4.72**, ink/mint **13.71**,
      ink/success **15.29**; the coral small-text pair is deepened to `#b23117` and the violet avatar clears 4.5
- [ ] `git grep -il 'colorlib\|hero-05' apps/epistle` → **no hits** (the wordmark is **The Epistle**; the
      provenance lives only in this spec, `TEMPLATES.md` and the PR)
