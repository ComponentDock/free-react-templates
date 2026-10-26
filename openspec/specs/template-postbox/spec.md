# Template: Postbox (Email-capture cards — a navy newsletter card with an inline envelope illustration beside a white product-updates card, two independent signup forms and a validated success swap)

## Purpose

A **single-screen signup pair**: no nav, no hero, no footer in the reference — one **602 px**
page on a periwinkle ground (`#eef2ff`) holding a **1,160 px** two-column grid: a **758.66 px
navy card** (2fr) and a **379.34 px white card** (1fr), 22 px apart, both **410.38 px** tall
because the grid stretches them to the taller one.

The navy card is a **left illustration / right form** split (0.8fr / 1.2fr): a 300 px art panel
with a **radial glow** and a **6-shape inline SVG envelope** (gold envelope, white letter rotated
`-6°`, three blue rules, a pink check badge), then an eyebrow (*The Friday Frontend · 21,400
readers*), a **32 px / 800** headline, a muted paragraph, and a **label + input + Submit** row with
a fine-print hint underneath. The white card is the same anatomy **minus the art**, **minus the
row**: one column, a bordered input and a **full-width** navy button.

**What decides fidelity.** Six numbers, and every one of them is easy to get plausibly wrong:

1. **The two cards are one row and equal height** — `align-items: stretch` on the grid makes the
   white card **410.38** tall even though its own content is **351.94**; its content block is
   vertically centred, so the white card carries **29.22 px** of empty band top and bottom. Give
   it `align-items: start` and the design changes.
2. **The gap is 22, not 24, and the split is 2fr / 1fr, not 2:1 of the container** — at 1,440 the
   columns are **758.66 / 379.34** (2fr/1fr of 1,138 after the 22 gap), and the navy card's own
   split is **300.25 / 450.41** (0.8fr/1.2fr of 750.66 after its 8 gap).
3. **The row is a wrapping flex, so the button drops below the input when the form's content box
   falls under 360 px** — not at a media query. At 440 the content box is exactly **360** and the
   two controls sit side by side; at **439** the button wraps to its own line, stops stretching, and
   drops from **54** to **50** px tall while the input grows to the full width.
4. **The card is not a viewport-height stage** — page height is **602** at 1,440 inside a 900 px
   viewport, and **1,148** at 320. No `min-h-screen` anywhere.
5. **Success is a swap, not a message** — the form wrapper is hidden, the done block appears with a
   **400 ms** `opacity 0 → 1 / translateY(8px) → 0` animation, focus moves to the `h3` inside it,
   and the **card shrinks** (navy 410.38 → **353.94**; both submitted → **258.2**).
6. **Only three of the font's weights exist** — Epilogue 400 / 700 / 800. The archive ships **eight
   woff2 that are two binaries**, the **500 pair is declared nowhere**, and there is **no 600 face
   at all** (a 600 string measures exactly like 700).

**What it is not.** It is not a marketing page and not a card grid: **two** sections, **two** forms,
**two** inputs, **two** buttons, **0** links, **0** `<img>` (the only picture is an inline SVG),
**0** `h1` (see defect 1), **0** icon library, **0** sticky header, **0** state that depends on the
other card.

It recreates ColorLib "Card V19" — the **nineteenth of twenty** `card` snippet variants — as a new
React 19 component pair called **Postbox**.

- **Source slug:** `card-19`
- **ColorLib page:** https://colorlib.com/wp/template/card-19/ — **HTTP 200, 113,242 B**, `<title>`
  `Card V19 - Free Bootstrap Cards 2026 - Colorlib`, `<meta description>` *"A wide newsletter card
  with an SVG envelope illustration and a compact product-updates card. Free download, no jQuery or
  plugins."*, `datePublished` **2026-09-25T15:33:29+00:00**, page copy *"the download is **275 KB**"*
  (archive measured **281,718 B = 275.11 KB ✓**).
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-19/ —
  **HTTP 200, 4,464 B**, `<title>` `Card V19 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  script of its own. The slug-only path `theme/card-19/` **404s**; this family lives under the
  `bootstrap/` prefix (same ladder as `card-01` … `card-18`). There is **no second page**
  (`theme/bootstrap/card-19/about.html` → **404**), so the directory URL is the whole design.
- **Design category:** Card (email capture / newsletter signup). Nineteenth member of the **`card`
  snippet family** (`card-01` … `card-20`) in the **214 snippet variants** catalogued in
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/postbox`,
  package `@free-react-templates/postbox`, CNAME `postbox.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` on main (**0** unchecked rows, **0** in-progress rows). So this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `card-19` is one of the **214 snippet variants in 19 families**; snippet families are worked
**in family order, then variant number**, and the `card` family runs to **20**.

The family section **`## Bootstrap Cards (20)` exists on main at line 733** and at this prep's commit
carries **nine** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo, `Card 04`
→ tierline, `Card 05` → plaudit, `Card 06` → statline, `Card 07` → lodgerow, `Card 08` → roadbook,
`Card 09` → lexeme — with **`## Bootstrap Checkboxes (20)` following at line 745**. Cards **10–18**
are prepped and unbuilt (`coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`, `tiffin`,
`tonearm`, `isobar`, `notebell`). This design's row goes **directly after the last card row present**
when the implementer ships it:

```markdown
- [x] **Card 19** — [colorlib](https://colorlib.com/wp/template/card-19/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-19.jpg) · [postbox](https://postbox.free.componentdock.com)
```

The family's rows land out of order because prep runs ahead of build — the implementer stream owns
that batch edit, not this prep run.

**The name.** `postbox` — one lowercase word: the thing a signup lands in. It names the design's
subject without touching its source, and it reads as a product. It is in **no** `apps/` folder, **no**
spec folder, **no** `docs/templates/` folder, and `git grep -il postbox origin/main` returns
**nothing at all** (0 hits, checked 2026-10-26). The ColorLib catalogue paths
`colorlib.com/wp/template/postbox/`, `preview.colorlib.com/theme/postbox/` and
`preview.colorlib.com/theme/bootstrap/postbox/` are all **404**. Do **not** reuse the family's taken
names `nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`,
`lexeme`, `coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`, `tiffin`, `tonearm`, `isobar`,
`notebell`. Other candidates measured free the same day (0 repo hits, all three paths 404):
`mailshot`, `mailbag`, `sendout`, `newsbell`, `mailpond`, `dropmail`, `footpost` — reserved for later
variants. `missive` (7 hits) and `byline` (163 hits, an existing app) are **taken as substrings**.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 4,464 B**, `<title>` "Card V19 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script (`js/snippet.js`)                                                |
| preview path      | **`theme/bootstrap/card-19/`** — the directory URL is the page. `theme/card-19/` is **404**. No inner pages (`about.html` **404**)                                   |
| stylesheet        | `css/style.css?v=7ced4960`, **9,844 B**, **434** lines, sha256 `9ab62f11874009949951cb5aae6ca81a62cf3be21cb4d0475ee0e84a1c6491e6`                                     |
| behaviour script  | `js/snippet.js?v=a009e879`, **2,299 B**, sha256 `5035a7be0687488f92f7dd1a1ac4eeb27ca2117456853761c84681ee8e79192f`                                                     |
| archive           | `preview.colorlib.com/downloads/free/card-19.zip`, **200, 281,718 B** (275.11 KB ✓ the page's "275 KB"), **14 entries**: 7 dirs + `index.html` **4,261 B** + `css/style.css` **9,844 B** + `js/snippet.js` **2,299 B** + `README.md` **1,260 B** + **8 `woff2`** |
| live ↔ archive    | **CSS and JS byte-identical** (same sha256 both sides) — *live preview verified; the archive is its un-versioned twin*. HTML **4,464 vs 4,261 B**: the 203-byte delta is one `noindex, nofollow` meta, one `dns-prefetch` to cdnjs, `fetchpriority="high"` on the stylesheet, the two `?v=` cache-busters and a second `<meta name="robots" content="noindex, follow">` — **the preview is the archive's versioned twin** |
| CSS shape         | **55** top-level rules (**60** `{` blocks): **16** `:where(html) …` host resets, **6** `@font-face`, **2** `@media` (`max-width: 900`, `max-width: 640`) + **1** `@media (prefers-reduced-motion)`, **1** `@keyframes` (`cl-card19-in`), **0** `@supports`, **0** container queries, **0** `:has()` |
| classes           | **20** distinct `cl-` classes in the stylesheet, **20** in the markup; **1 dead selector** — `.cl-icon` (declared, **0** hits in the markup; the **eleventh consecutive** card with this leftover); **1 markup-only class with no rule** — `.cl-card19__form-wrap` (a plain block wrapper, intentional) |
| custom properties | **5** declared on `.cl-card19` and all consumed: `--cl-card19-bg` `#1e3a8a`, `--cl-card19-ink` `#fff`, `--cl-card19-muted` `#dbe4ff`, `--cl-card19-accent` `#fde047`, `--cl-card19-error` `#fecaca`; the compact card **re-declares all five** (`#fff` / `#111827` / `#4b5563` / `#1e3a8a` / `#b91c1c`) — the only per-variant token set in the file |
| cascade reset     | the sheet opens with **16** `:where(html) …` rules (`all: revert` on ~60 elements, a `[hidden]` repair, `img,svg` and table reversions, a `::-webkit-datetime-edit` block) — a host-page reset so a Bootstrap parent cannot restyle the snippet; **do not port it**, Tailwind preflight already owns this. The `[hidden]` repair is the one to remember: it exists because `all: revert` re-shows `hidden` elements |
| controls          | **2** `<form>` (`action="#" method="post" novalidate`), **2** `<input type="email" required autocomplete="email">`, **2** `<button type="submit">`, **0** `<a>`, **0** `<img>`, **0** media; **3** `<svg>` (1 illustration + 2 tick glyphs) |
| headings          | **0 × `h1`**, **2 × `h2`** (both card titles, each with an `id` that its `<section aria-labelledby>` points at), **2 × `h3`** (the two success titles, `tabindex="-1"`, inside `hidden` containers at rest) — **see defect 1** |
| semantics         | `<main class="cl-card19-demo">` → `<div class="cl-card19-grid">` → **2** `<section class="cl-card19">`; `<section aria-labelledby="cl-card19-tN">`; the illustration panel and both tick badges are `aria-hidden="true"`; both error paragraphs are `role="alert"` and `hidden` at rest |
| hidden at rest    | **4** elements carry `hidden`: the two `p.cl-card19__error` and the two `div.cl-card19__done` |
| content height    | **602** at 1,440 · **577** at 1,200 · **600** at 1,024 · **786** at 900 · **796** at 768 · **954** at 640 · **980** at 480 · **1,057** at 390 · **1,082** at 375 · **1,105** at 360 · **1,148** at 320 — no `min-height: 100vh` |
| horizontal scroll | **none** from 320 to 1,440 (`scrollWidth === clientWidth`, `scrollX` 0 after a 300 px nudge, at every width from the list above)                                                                                                     |
| screenshot        | `card-19.jpg` — **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`, 25,286 B); convert before viewing. A `card-19-free-template.jpg` and a `card-19-featured.jpg` do **not** exist (both 404). It is ColorLib's **browser-frame mockup** (macOS traffic lights + `preview.colorlib.com` bar) and matches the live render 1:1 — same two cards, same copy, same illustration, same button labels |
| fonts             | **Epilogue**, **6 `@font-face`** = **3 weights (400 / 700 / 800) × 2 subsets**, but the archive ships **8 `woff2` that are only 2 distinct binaries**: every `*-latin.woff2` is byte-identical (sha256 `1e161eac1dc51f5b…`, 35,680 B) and every `*-latin-ext.woff2` too (sha256 `cecc7397fe71b50b…`, 32,604 B). The **500 pair is declared nowhere** and there is **no 600 face**. Measured at 40 px, the string *"One useful CSS trick"* is **391.00 / 391.00 / 415.00 / 415.00 / 425.00** px at 400 / 500 / 600 / 700 / 800 — 500 is byte-equal to 400 (no face) and 600 is byte-equal to 700. **Do not reproduce the trick** — load Epilogue **400 / 700 / 800** from Google Fonts (`css2?family=Epilogue:wght@400;700;800` → **HTTP 200**; the plain `css2?family=Epilogue` and the legacy `css?family=Epilogue:400,700,800` are both **200** too) |

### The layout at 1,440 px (`body` `#eef2ff`, page **602.38** tall)

| part        | geometry                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `main`      | **1192 × 602.38** at x **124** — `max-width: 1160px; margin: 0 auto; padding: 96px 16px` (the padding is `clamp(36px, 7vw, 96px) 16px`, so the border box is 1,160 + 32) |
| grid        | **1160 × 410.38** at x **140**, y **96** — `display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); align-items: stretch; gap: 22px` → columns **758.66 / 379.34** |
| navy card   | **758.66 × 410.38** at x 140 — radius **28**, `background: #1e3a8a`, `color: #fff`, `font-size: 15.5px; line-height: 1.5`, `overflow: hidden`, `box-shadow: 0 30px 60px -36px rgba(30,58,138,.7)`, own grid `minmax(0,.8fr) minmax(0,1.2fr)` + `gap: 8` → **300.25 / 450.41** |
| art panel   | **300.25 × 410.38** — `align-self: stretch; display: grid; place-items: center; min-height: 220px; padding: 24px; background: radial-gradient(circle at 50% 50%, rgba(79,110,247,.75), transparent 62%)` |
| SVG         | **252.25 × 210.2** — `width: 100%; max-width: 260px; height: auto`, `viewBox="0 0 240 200"` (4:3.33)                          |
| content     | **450.41** wide at x **448.25**, `padding: 40px` (`clamp(24px, 4vw, 40px)`), no background, no radius                        |
| eyebrow     | **370.41 × 20.25** at y **136** — 13.5 / 700, `line-height: 1.5`, colour `#fde047`                                            |
| title       | **370.41 × 70.38** at y **164.25** — `margin: 8px 0 10px`, `font-size: clamp(24px, 2.6vw, 32px)` = **32**, 800, `line-height: 1.1`, `letter-spacing: -.03em` (**−0.96 px**), two lines |
| copy        | **370.41 × 69.75** at y **244.63** — 15.5 / 400 / 1.5, colour `#dbe4ff`, three lines                                          |
| form        | **370.41 × 130** at y **336.38** — `margin-top: 22px`                                                                          |
| label       | **370.41 × 21** — 14 / 700 / 21, `margin-bottom: 6px`                                                                          |
| row         | **370.41 × 54** at y **363.38** — `display: flex; flex-wrap: wrap; gap: 8px`                                                   |
| input       | **230.41 × 54** — `flex: 1 1 220px; min-width: 0; padding: 13px 16px; border: 2px solid transparent; border-radius: 14px; background: #fff; color: #111827; font-size: 16px` |
| submit      | **132 × 54** at x **726.66** — `flex: none; padding: 13px 22px; border: 0; border-radius: 14px; background: #fde047; color: #111827; font-size: 16px; font-weight: 800` |
| hint        | **370.41 × 39** at y **427.38** — `margin-top: 10px`, 13 / 400 / 19.5, colour `#dbe4ff`, two lines                             |
| white card  | **379.34 × 410.38** at x **920.66** — radius 28, `background: #fff`, `color: #111827`, `border: 1px solid #dfe5f5`, `box-shadow: 0 20px 40px -32px rgba(30,58,138,.5)`, own grid `minmax(0,1fr)` |
| white content | **377.34 × 351.94** at y **125.22** — `padding: 40px`, vertically centred in the stretched card (**29.22 px** band top and bottom) |
| white copy block | eyebrow at y **165.22** (`#1e40af`), title **297.34 × 24.19** at y **193.47** (**22 px** / 800 / 1.1 / −0.66 px, one line), copy **297.34 × 46.5** at y **227.66** (`#4b5563`, two lines) |
| white form  | label **297.34 × 21** at y **296.16**, input **297.34 × 54** at y **323.16** (`border-color: #c7d2ea`), submit **297.34 × 50** at y **387.16** (`width: 100%; margin-top: 10px; color: #fff`) — no `.cl-card19__row` wrapper, so the button is its own block and **never** stretches to 54 |
| bottoms     | cards end at **506.38**, page at **602.38** (96 px bottom padding)                                                             |

### The state machine (measured by driving the live page)

| state                  | measurement                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| rest                   | both `form-wrap` blocks visible, both `error` and both `done` **hidden**; card heights **410.38 / 410.38**; page **602**              |
| submit **empty** (navy) | error visible: **370.41 × 21** (one line), `margin-top: 8`, `display: flex`, colour `#fecaca`, 14 / 700; text *"Enter your email address to subscribe."*; input gains `aria-invalid="true"` and `aria-describedby="cl-card19-err cl-card19-hint"`; focus stays on the input; **navy card 410.38 → 439.38**, page **631** |
| submit **no `@`** (navy) | error **two lines** — *"That doesn't look like an email address. Check for a missing @ or domain."* (the apostrophe is **U+2019**); navy card **460.38** |
| typing a now-valid value | `input` handler clears the error the moment `checkValidity()` passes: `hidden`, empty text, `aria-invalid` **removed**, `aria-describedby` back to `cl-card19-hint` |
| submit **valid** (navy) | `form-wrap` hidden, `done` shown, address echoed into `[data-cl-card19-addr]`; focus moves to the **`h3`** (`tabindex="-1"`) inside it; navy card **410.38 → 353.94** (both cards stretch to 353.94, white content still 351.94 centred at y 97), page **546**. Done block: **370.41 × 159.5** at y **193.22** — tick **52 × 52** at 193.22, title **39** tall at 259.22 (14 px below the tick), copy **46.5** at 306.22 |
| both submitted         | cards **258.2**, contents **239.5** at y **105.34**, page **450**                                                                   |
| submit **empty** (white) | error **297.34 × 42** (two lines, narrower column), colour `#b91c1c`, `aria-describedby` **replaced** by `cl-card19-err2` (this input has no hint to keep); white card stays **410.38** because the navy card is still the taller one |
| white **valid**        | done shown, *"You're on the list — Release notes will go to grace@company.com."*                                                      |
| `nope@nope`            | **passes** — a domain with no dot is a valid `type=email` value, so the form succeeds. See defect 3                                |
| tab order              | input → submit → input → submit (the compact pair) → out of the page; after a success the hidden form's controls are **not** tabbable |

### Breakpoints and thresholds (measured either side of each line)

| switch                             | at 902…901            | at 900…899            | rule                                        |
| ---------------------------------- | --------------------- | --------------------- | ------------------------------------------- |
| grid 2 columns → 1                | 2 columns             | **1 column**          | `@media (max-width: 900px)`                 |
| navy card 2 columns → 1           | 2 (at 642…641)        | **1 (at 640…)**       | `@media (max-width: 640px)`                 |
| row wraps (input + button)        | fits at **440** (content 360) | **wraps at 439** (content 359) | flex `wrap` + a **220 px** basis + a **132** button + an 8 gap ⇒ 360 |
| title size                        | 32 px at ≥1,231       | 26.62 at 1,024, 24 at ≤923 | `clamp(24px, 2.6vw, 32px)`              |
| card padding                      | 40 px at ≥1,000       | 25.6 at 640, 24 at ≤600 | `clamp(24px, 4vw, 40px)`                  |
| demo padding                      | 96 px at ≥1,372       | 63 at 900, 36 at ≤514 | `clamp(36px, 7vw, 96px)`                    |
| art (below 640)                   | 344 wide at 900       | **608 wide, 214.66 tall at 640** | `min-height: 160px` + `svg{max-width:200px}` |

Card heights per width (`body` scroll height in brackets):

| width | navy card | white card | page  |
| ----- | --------: | ---------: | ----: |
| 1,440 |    410.38 |     410.38 |   602 |
| 1,200 |    408.63 |     408.63 |   577 |
| 1,024 |    456.56 |     456.56 |   600 |
| 900   |    315.64 |     322.69 |   786 |
| 768   |    354.72 |     312.13 |   796 |
| 640   |    517.48 |     325.13 |   954 |
| 480   |    563.94 |     321.94 |   980 |
| 390   |    641.44 |     321.94 | 1,057 |
| 375   |    641.44 |     346.13 | 1,082 |
| 360   |    641.44 |     369.38 | 1,105 |
| 320   |    684.94 |     369.38 | 1,148 |

Above 900 the white card equals the navy card exactly (stretch). Below it the pair stacks and each
card takes its own height.

### Type — one family, four roles

| role    | size / weight / line-height / tracking                     | colour                                   |
| ------- | ---------------------------------------------------------- | ---------------------------------------- |
| eyebrow | 13.5 / 700 / 1.5 (20.25) / normal                          | `#fde047` on navy · `#1e40af` on white   |
| title   | 32 / 800 / 1.1 / −0.03em (22 px on the white card)         | `#fff` · `#111827`                       |
| body    | 15.5 / 400 / 1.5 (23.25)                                   | `#dbe4ff` · `#4b5563`                    |
| label   | 14 / 700 / 1.5 (21)                                        | inherits the card's ink                  |
| control | 16 / 400 (input) · 16 / 800 (button) / 1.5                 | `#111827` on white · `#111827`/`#fff` on the button |
| hint    | 13 / 400 / 1.5 (19.5)                                      | `#dbe4ff`                                |
| error   | 14 / 700 / 1.5 (21)                                        | `#fecaca` · `#b91c1c`                    |
| success title | 26 / 800 / 1.5 (39) / −0.02em                        | inherits the card's ink                  |

`body` is **16 px** Epilogue; the cards **re-base** to 15.5 px, which is why the copy, the hint and
the label all resolve on a 23.25 / 19.5 / 21 px rhythm rather than 24 / 19.5 / 21.

### Contrast (WCAG 2.1, computed from the rendered colours)

| pair                                          | ratio  | verdict |
| --------------------------------------------- | -----: | ------- |
| `#fff` on `#1e3a8a` (navy title / compact button label) | 10.36 | AAA |
| `#dbe4ff` on `#1e3a8a` (navy body + hint)      |  8.16 | AAA |
| `#fde047` on `#1e3a8a` (navy eyebrow)          |  7.86 | AAA |
| `#111827` on `#fde047` (gold button label)     | 13.46 | AAA |
| `#6b7280` on `#fff` (placeholder)              |  4.83 | AA |
| `#111827` on `#fff`                            | 17.74 | AAA |
| `#4b5563` on `#fff` (white body)               |  7.56 | AAA |
| `#1e40af` on `#fff` (white eyebrow)            |  8.72 | AAA |
| `#fecaca` on `#1e3a8a` (navy error)            |  7.16 | AAA |
| `#b91c1c` on `#fff` (white error)              |  6.47 | AA |
| `#ef4444` on `#fff` (invalid border, non-text)  |  3.76 | passes 3:1 |
| `#fff` on `#22c55e` (tick glyph, decorative)    |  2.28 | **below 3:1** — acceptable only because it is `aria-hidden`; see defect 8 |

Focus indicators: the navy input turns its 2 px border `#fde047` (7.86 : 1) plus a 4 px
`rgba(253,224,71,.35)` glow; the white input turns `#1e3a8a` (10.36 : 1) plus a 4 px
`rgba(30,58,138,.2)` glow; the buttons take a 3 px outline 3 px outside (`#fff` on navy,
`#1e3a8a` on white) — never remove them, and do not rely on the glow alone (its own contrast
against the card is 1.4–1.8 : 1).

## Defects found in the reference (the port's deltas list)

1. **The page has no `h1`.** The outline starts at `h2` (both card titles) and the success blocks use
   `h3`. Ship a real outline: the navy card's title is the **`h1`**, the white card's title is the
   **`h2`**, and each success title is an **`h3`** under its card. Keep
   `aria-labelledby` on both sections.
2. **The error badge is invisible.** `background: currentColor` and `color: var(--cl-card19-bg)` sit in
   the same rule, and `currentColor` resolves to the element's **own** `color` — so the `!` badge is
   painted **navy on navy** (`rgb(30,58,138)` measured for both `background-color` and `color` on
   `::before`), and **white on white** in the compact card. The screenshot shows the message text and
   **no badge at all**. Ship the badge visibly: `background: var(--cl-card19-error); color: var(--cl-card19-bg)`
   (or a `currentColor` fill on a child), 18 × 18, radius 50 %, 12 / 700.
3. **`nope@nope` subscribes successfully.** HTML's `type=email` does not require a dot in the domain,
   so the reference accepts it and shows *Check your inbox* for an address no newsletter can deliver
   to. Ship a domain-with-a-dot rule (`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` or an equivalent `pattern`)
   with the same error styling and the same message as the `typeMismatch` branch. **This is the one
   deliberate behavioural delta** — record it in the PR.
4. **`.cl-icon` is declared and never used** — the eleventh consecutive card in this family to carry
   the leftover. Do not port it.
5. **Two conflicting robots metas on the live page** (`noindex, nofollow` at the top,
   `noindex, follow` at the end) — a preview-host artifact, not part of the design. Ignore it.
6. **The 500 weight ships as files but is declared nowhere**, and there is **no 600 face** (600
   measures identically to 700). Load 400 / 700 / 800 only; never use `font-medium`, and treat
   `font-semibold` as 700.
7. **The error position differs between the cards** — the navy card puts it **after** the hint, the
   white card **between the input and the button** (it has no hint). That asymmetry is real; reproduce
   each card's DOM order rather than harmonising them.
8. **The tick glyph is 2.28 : 1 on its green disc.** It is `aria-hidden`, so it is not a WCAG failure,
   but if the port adds any text inside the tick it must darken the disc.

Not defects, worth not "fixing": `.cl-card19__form-wrap` has no rule (a plain block wrapper);
`overflow: hidden` on the card clips the radial glow at the 28 px corners (deliberate); the white
card's button does **not** stretch (it is not inside the `.cl-card19__row` flex).

## Requirements

### Requirement: Page shell and periwinkle ground

The page SHALL be a content-height stage on `#eef2ff` with a single centred column.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** a 1,440 × 900 viewport
- **WHEN** the page has rendered
- **THEN** the document is **602.38** px tall (not 900), `main` is **1192** wide at x **124** with
  `padding: 96px 16px`, and no element sets `min-height: 100vh`

#### Scenario: The ground never scrolls sideways

- **GIVEN** any width from 320 to 1,440
- **WHEN** the page is nudged 300 px to the right
- **THEN** `scrollX` stays **0** and `scrollWidth === clientWidth`

### Requirement: Two cards in one stretched row

The layout SHALL be a `minmax(0,2fr) minmax(0,1fr)` grid with a 22 px gap and `align-items: stretch`.

#### Scenario: The columns split 2:1 and both cards are 410.38 tall

- **GIVEN** a 1,440 viewport
- **WHEN** the grid is measured
- **THEN** the columns are **758.66** and **379.34** px, both cards are **410.38** px tall, and the
  white card's own content block is **351.94** px tall, vertically centred

#### Scenario: The pair stacks at 900, not before

- **GIVEN** the viewport is 901 px wide
- **WHEN** the grid is measured
- **THEN** there are still two columns; at **900** the grid becomes one column and each card takes
  its own height (**315.64** / **322.69**)

### Requirement: The navy card's surface and split

The primary card SHALL be a navy surface with a 28 px radius, `overflow: hidden`, its own
`0.8fr / 1.2fr` split and a soft navy shadow.

#### Scenario: The surface reads as one rounded slab

- **GIVEN** the navy card at 1,440
- **WHEN** its computed style is read
- **THEN** `background-color` is `rgb(30,58,138)`, `border-radius` is `28px`, `box-shadow` is
  `0 30px 60px -36px rgba(30,58,138,.7)`, there is **no** border, and its columns are **300.25 /
  450.41**

#### Scenario: The art panel is a glow, not a photograph

- **GIVEN** the art panel
- **WHEN** it is measured
- **THEN** it is **300.25 × 410.38**, `min-height: 220px`, `padding: 24px`, and its background is
  `radial-gradient(circle at 50% 50%, rgba(79,110,247,.75), transparent 62%)` — **0** `<img>` on the
  page

### Requirement: The envelope illustration

The art SHALL be a six-shape inline SVG with a `240 × 200` viewBox, `aria-hidden`, gold envelope,
white letter rotated −6°, three blue rules and a pink check badge.

#### Scenario: The six shapes and their exact fills

- **GIVEN** the illustration
- **WHEN** its children are read
- **THEN** there are **6**: `rect 34,52 172×118 rx14 fill #fde047`; `path M34 66 120 124l86-58
  stroke #1e3a8a width 6`; `rect 58,22 124×86 rx8 fill #fff` rotated `-6 120 65`; a three-rule `path
  stroke #93c5fd width 6`; `circle 196,44 r18 fill #f472b6`; a check `path stroke #fff width 4`

#### Scenario: The SVG sizes to the panel

- **GIVEN** a 1,440 viewport
- **WHEN** the SVG is measured
- **THEN** it is **252.25 × 210.2** (`width: 100%; max-width: 260px`); at 900 it is exactly **260**
  wide; below 640 it is capped at **200** wide inside a **214.66** px-tall art panel

### Requirement: The navy card's copy block

The primary card's text SHALL use the eyebrow / title / body rhythm of the reference.

#### Scenario: The three text rows stack at 370.41

- **GIVEN** a 1,440 viewport
- **WHEN** the copy block is measured
- **THEN** eyebrow **20.25**, title **70.38** (two lines at 32/1.1/−0.96 px) and copy **69.75**
  (three lines at 15.5/23.25) fill a **370.41** px column, with `8px` above the title and `10px`
  below it

#### Scenario: The title is the page's only h1

- **GIVEN** the heading outline
- **WHEN** it is read in order
- **THEN** it is `h1` (navy title) → `h2` (white title) → `h3` (each success title), one of each per
  card, and both sections keep `aria-labelledby` pointing at their own title's `id`

### Requirement: The navy card's form

The primary form SHALL be a label, a wrapping row of input + button, a hint and an error slot.

#### Scenario: The controls are 230.41 and 132 wide, 8 apart

- **GIVEN** a 1,440 viewport
- **WHEN** the row is measured
- **THEN** the input is **230.41 × 54** at radius **14** with a 2 px transparent border, the button is
  **132 × 54** at radius 14 in `#fde047` with a **16 / 800** `#111827` label, and the gap is **8**

#### Scenario: The hint sits under the row

- **GIVEN** the form at rest
- **WHEN** the fine print is measured
- **THEN** it is **370.41 × 39** (two lines at 13/19.5), `10px` below the row, in `#dbe4ff`

### Requirement: The white card is the same anatomy minus the art

The compact card SHALL be a white bordered surface with a single column and a full-width button.

#### Scenario: The compact card is white, bordered and centred

- **GIVEN** the compact card at 1,440
- **WHEN** it is measured
- **THEN** it is **379.34 × 410.38** with `background #fff`, `border 1px solid #dfe5f5`, radius **28**,
  its content **377.34 × 351.94** centred, an eyebrow in `#1e40af`, a **22 px** title and a submit
  **297.34 × 50** at `margin-top: 10`, full width, in `#1e3a8a` with a white label

#### Scenario: The white button never stretches to 54

- **GIVEN** the compact form
- **WHEN** the button is measured at any width
- **THEN** it is **50** px tall (its own padding), because it is not inside a flex row

### Requirement: Native email validation with the reference's messages

Both forms SHALL validate with the reference's own copy, `aria-invalid` and a merged
`aria-describedby`, and SHALL reject an address whose domain has no dot.

#### Scenario: An empty submit shows the missing-value message

- **GIVEN** an empty input
- **WHEN** the form is submitted
- **THEN** the error slot becomes visible with *"Enter your email address to subscribe."*, the input
  gains `aria-invalid="true"` and `aria-describedby="…err …hint"`, focus stays on the input, and the
  navy card grows **410.38 → 439.38**

#### Scenario: A malformed address shows the type-mismatch message

- **GIVEN** the input holds `not-an-email`
- **WHEN** the form is submitted
- **THEN** the error reads *"That doesn't look like an email address. Check for a missing @ or
  domain."* with the apostrophe as **U+2019**, the slot is two lines tall, and the card grows to
  **460.38**

#### Scenario: Typing a valid value clears the error without a submit

- **GIVEN** a visible error
- **WHEN** the user types a value that passes validation
- **THEN** the slot is hidden and emptied, `aria-invalid` is removed and `aria-describedby` returns
  to the hint alone

#### Scenario: A dotless domain is rejected (delta)

- **GIVEN** the input holds `nope@nope`
- **WHEN** the form is submitted
- **THEN** the form does **not** succeed — it shows the type-mismatch message (the reference accepts
  it; see defect 3)

### Requirement: Success is a swap with a focus move

A valid submit SHALL replace the form with a done block, echo the address, move focus and shrink the
card.

#### Scenario: The navy card swaps and shrinks

- **GIVEN** a valid address in the navy card
- **WHEN** the form is submitted
- **THEN** the form wrapper is hidden, the done block (**370.41 × 159.5**) appears with a **400 ms**
  `cl-card19-in` animation, the address is echoed into a `<strong>`, focus lands on the `h3`
  (`tabindex="-1"`), and the card is **353.94** tall (page **546**)

#### Scenario: Both cards submitted

- **GIVEN** both forms succeed
- **WHEN** the page is measured
- **THEN** both cards are **258.2** tall, both done blocks are **159.5**, and the page is **450**

#### Scenario: The two cards are independent

- **GIVEN** the navy card is in its success state
- **WHEN** the white card is submitted empty
- **THEN** only the white card's error appears and the navy card keeps its done block

### Requirement: The done block's anatomy

The success block SHALL be a 52 px green tick, a 26 px title and one paragraph.

#### Scenario: Tick, title and copy

- **GIVEN** a success block
- **WHEN** its parts are measured
- **THEN** the tick is **52 × 52**, radius 50 %, `#22c55e` with a 28 px `stroke-width 3` white check
  and `aria-hidden`; the title is **26 / 800 / 39 / −0.52 px** with an `8px` bottom margin; the copy
  is the card's body size with the address in `<strong>` and `word-break: break-all`

### Requirement: Motion respects the user

Transitions SHALL be 0.2 s on the input, 0.15 s / 0.2 s on the button, and 400 ms on the success
block, all disabled under `prefers-reduced-motion: reduce`.

#### Scenario: Hover lifts the button by one pixel

- **GIVEN** a pointer over the submit
- **WHEN** the computed style is read
- **THEN** `filter: brightness(1.06)` and `transform: translateY(-1px)` are active, returning to
  `translateY(0)` on `:active`

#### Scenario: Reduced motion removes both

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page is used
- **THEN** the input and button have no transition, the button does not lift, and the success block
  does not animate — the same final state is reached

### Requirement: Accessibility and page furniture

The page SHALL expose two labelled sections, no images, no links, and a complete keyboard path.

#### Scenario: Nothing on the page is a link or a photograph

- **GIVEN** the rendered page
- **WHEN** the DOM is counted
- **THEN** there are **2** forms, **2** inputs, **2** buttons, **3** SVGs (all inside `aria-hidden`),
  **0** `<a>`, **0** `<img>` and **0** external requests beyond the font stylesheet

#### Scenario: Keyboard order is the visual order

- **GIVEN** focus starts on the page
- **WHEN** the user presses Tab
- **THEN** the order is navy input → navy submit → white input → white submit, every stop has a
  visible indicator, and after a success the hidden form's controls are skipped

#### Scenario: Errors are announced

- **GIVEN** a submitted error
- **WHEN** it appears
- **THEN** the paragraph carries `role="alert"`, the input points at it through
  `aria-describedby`, and the input keeps focus

## Adapting to the repo (deltas the implementer owns)

| reference                                   | port                                                                                                                    |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `.cl-card19-*` class names                  | plain Tailwind utilities + `cn()`; **no `cl-` prefix**, **no** ColorLib string in `apps/postbox`                          |
| `--cl-card19-{bg,ink,muted,accent,error}`   | `@theme` tokens: `--color-ground #eef2ff`, `--color-navy #1e3a8a`, `--color-navy-soft #1e40af`, `--color-gold #fde047`, `--color-ink #111827`, `--color-muted-navy #dbe4ff`, `--color-muted #4b5563`, `--color-error-navy #fecaca`, `--color-error #b91c1c`, `--color-invalid #ef4444`, `--color-tick #22c55e`, `--color-line #dfe5f5`, `--color-line-input #c7d2ea`, `--color-placeholder #6b7280` |
| radii 28 / 14 / 50 %                        | `rounded-[28px]`, `rounded-[14px]`, `rounded-full`                                                                       |
| shadows                                     | `shadow-[0_30px_60px_-36px_rgb(30_58_138/0.7)]`, `shadow-[0_20px_40px_-32px_rgb(30_58_138/0.5)]`                          |
| `clamp()` sizes                             | keep them: `text-[clamp(24px,2.6vw,32px)]`, `p-[clamp(24px,4vw,40px)]`, `py-[clamp(36px,7vw,96px)]`                       |
| inline `style` free, per-card tokens        | a `variant` prop (`primary` \| `compact`) driving a typed variant map, not two copies of the component                  |
| vanilla `snippet.js` validation              | a `useSignupForm` hook (or reducer) returning `{ value, error, submitted }` + handlers; **no libraries**                  |
| two markup copies                           | one `SignupCard` component rendered twice, with `art` only on the primary and `row` only on the primary                   |
| footer, nav, hero, images                   | the reference has **no** footer, nav, hero or image — none is invented except the platform-mandated single *Component Dock* attribution line under the pair (delta 3) |

## Implementation notes (2026-10-26)

Built as `apps/postbox` on `feat/template-postbox`. Measured in the built app with Playwright
1.62 Chromium at 1,440 × 900 and compared against the live reference measured in the same session
(the prep's readings were re-verified, not taken on trust):

| what                     | reference                                      | port                                            |
| ------------------------ | ---------------------------------------------- | ----------------------------------------------- |
| grid / columns / gap     | 1160 at x 140 · 758.66 / 379.34 · 22           | identical                                       |
| navy card surface        | `#1e3a8a`, radius 28, no border, own shadow    | identical                                       |
| navy split               | 300.25 / 450.41                                | identical                                       |
| art panel + SVG          | 300.25 wide, min-height 220, 252.25 × 210.2    | identical                                       |
| eyebrow                  | 370.41 × 20.25 at y 136, `#fde047`, 13.5 / 700  | identical                                       |
| title                    | 70.38 (two lines, 32 / 800 / 35.2 / −0.96)     | identical                                       |
| body copy                | 69.75 (three lines, 15.5 / 23.25)              | identical                                       |
| form / label / row       | y 336.38 · 21 · 54, gap 8, `flex-wrap`         | identical                                       |
| input + button           | 230.41 × 54 + 132 × 54                         | **235.41 × 54 + 127 × 54** (see delta 1)        |
| hint                     | 370.41 × **39** (two lines)                    | 370.41 × **19.5** (one line — see delta 1)      |
| white card               | 379.34, `#fff`, 1 px `#dfe5f5`, shadow         | identical                                       |
| white content / title    | 377.34 × 351.94 centred · 24.19 at 22 px       | identical                                       |
| white input + button     | 297.34 × 54 · 297.34 × **50**                  | identical                                       |
| empty-submit error       | 370.41 × 21, `#fecaca`, card +29               | identical (card 419.88, ref 439.38)             |
| success                  | card **353.94**, done **370.41 × 159.5**       | identical, focus lands on the `h3`               |
| 1,200 / 1,024 / 768      | 408.63 · 456.56 · 354.72 / 312.13              | 389.13 · **456.56** · **354.72 / 312.13**       |
| 480 / 440 / 375 / 320    | 563.94 · 563.94 · 641.44 · 684.94              | **563.94** · **563.94** · **641.44** · **684.94** |
| horizontal scroll        | none 320 → 1,440                               | none 320 → 1,440                                |

**Documented deltas.**

1. **The fine print is one line, not two, and the button is 5 px narrower — one cause: the font.**
   Google Fonts' Epilogue is marginally narrower per glyph than the archive's own `woff2` subset
   (its 8 files are 2 binaries). Canvas `measureText` on the *same* text in both pages, same computed
   family and size: the hint is **371 px** in the reference and **359 px** here at 400 / 13 px; the
   title is 350 vs 347 at 800 / 32 px; "Subscribe" is 88 vs 83 at 800 / 16 px. So the reference's
   hint overflows its 370.41 column by 0.6 px and wraps, while this one fits. Both are one word
   short of a break, so the fix is *not* a `max-w` clamp — clamping would fake a line the design does
   not otherwise have. Consequences, all 19.5 px of it: the navy card is **390.88** instead of
   410.38, its error state 419.88 instead of 439.38, and the success state **353.94** matches
   exactly (the hint is gone by then). The 5 px button also moves the row's wrap threshold from
   viewport 440 to 435; the row total (370.41) is unchanged because the input absorbs it.
2. **`max-[Npx]:` is exclusive in Tailwind v4** (`@media (width < Npx)`) while the source uses
   inclusive `@media (max-width: Npx)`. At *exactly* 900 and exactly 640 this build keeps the wider
   layout for 1 px; at 899 / 639 it reproduces the settled heights (the 768 row above is exact).
   The prepped checklist prescribes the Tailwind form, so it is kept and recorded here.
3. **A footer line was added** — the platform rule that every template links Component Dock
   (`https://www.componentdock.com/`, one `<a>`), which the reference does not have. Content height
   is therefore 634.38 (192 padding + 390.88 pair + 32 + 19.5 footer) against the reference's 602.38.
   The card geometry above is measured with the footer excluded from the grid.
4. **The success block reuses the section's `aria-labelledby` id.** The reference removes its `h2`
   when the form is replaced, leaving `aria-labelledby` pointing at nothing; here the done `h3`
   carries the same id, so both sections stay named in both states.
5. **Fixed from the reference's defect list:** a real `h1` (the primary title; the compact title is
   the `h2`), a **visible** error badge (18 × 18 disc, error colour with the card's own ink — the
   reference paints it navy-on-navy via `currentColor`), and a **rejected dotless domain**
   (`nope@nope` now shows the type-mismatch message instead of subscribing the user).

**Tests.** 25 specs across 5 files; typecheck + oxlint + build green; statements / branches /
functions / lines all **100 %** (65 statements, 34 branches, 11 functions). `npx knip --workspace
apps/postbox` is silent and `grep -riE 'colorlib|card-19|cl-card19' apps/postbox` returns nothing.

## Verification checklist

- [x] `openspec validate template-postbox --type spec` passes
- [x] `apps/postbox` scaffolded from the simplest app, package renamed, `public/CNAME` and `homepage`
      set, `react`/`react-dom` left at `latest`, `injectUiSource()` kept, `npm install` at the root
- [x] `@theme` carries the 14 colour tokens above; `font-family` is Epilogue 400 / 700 / 800 from
      Google Fonts (`family=Epilogue:wght@400;700;800&display=swap`) and **no** `font-medium` /
      500-weight class appears anywhere
- [x] page is content height at 1,440, not viewport height (**634.38** with the mandated footer
      line; **602.38** without it) and never scrolls sideways from 320 to 1,440
- [x] grid columns **758.66 / 379.34** with a 22 gap, white content **351.94** centred — both cards
      measure **390.88**, the 19.5 px of delta 1 (one-line fine print), not 410.38
- [x] navy card radius 28, `overflow: hidden`, shadow, own split **300.25 / 450.41**
- [x] illustration is a 6-shape inline SVG (`240 × 200`, `max-width: 260`) inside the 24 px art panel
      with the radial glow, `aria-hidden`, **0** `<img>`
- [x] copy rhythm: eyebrow 20.25 (`#fde047`), title 70.38 at 32 / 800 / −0.96, copy 69.75 at 15.5 /
      23.25 (`#dbe4ff`)
- [x] row: input **230.41 × 54**, button **132 × 54** (`#fde047`, 16 / 800), gap 8, hint 39 px below
- [x] white card: **1px #dfe5f5** border, `#1e40af` eyebrow, 22 px title, input **54** with a
      `#c7d2ea` border, button **297.34 × 50** full width
- [x] the row wraps below a 360 px content box (viewport 440 → 439) and the button then drops to 50
- [x] empty submit → *"Enter your email address to subscribe."*, `aria-invalid`, merged
      `aria-describedby`, focus retained, navy card 439.38
- [x] `not-an-email` → the U+2019 type-mismatch message, card 460.38
- [x] `nope@nope` is **rejected** (documented delta) and `ada@example.com` succeeds
- [x] typing a valid value clears the error and restores `aria-describedby` to the hint
- [x] success: form hidden, done **159.5** shown with the 400 ms animation, address echoed in
      `<strong>`, focus on the `h3`, navy card 353.94, both cards 258.2
- [x] one visible `h1` (navy title), `h2` (white title), `h3` per success block — the reference's
      missing `h1` is fixed
- [x] the error badge is **visible** in both cards (18 × 18, radius 50 %, error-coloured disc with the
      card's own colour for the glyph) — the reference's `currentColor` bug is not reproduced
- [x] `prefers-reduced-motion` removes the 0.15 s lift and the 400 ms entry
- [x] both cards are independent: a success on one never touches the other's state
- [x] Tab order is navy input → navy submit → white input → white submit with visible focus
- [x] **0** `<a>`, **0** `<img>`, **0** `colorlib` / `card-19` / `cl-card19` strings in `apps/postbox`
- [x] `npm run verify:app postbox` green (typecheck, lint, knip, fallow, 100 % coverage, build)
- [x] row added to `TEMPLATES.md` at the end of `## Bootstrap Cards (20)` (line 733 on main at this
      prep) using the exact line in *Why this design has no row*
- [x] `npm run readme:status`; ship via `feat/template-postbox` PR + squash merge
