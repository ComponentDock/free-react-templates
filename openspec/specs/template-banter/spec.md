# Template: Banter (Card — social feed posts: two post cards on a warm-grey desk, one with a full-bleed photo and one with a link preview, each closing in a three-up action bar whose like / comment / share controls really work)

## Purpose

A **single-screen community feed**: no nav, no hero, no footer in the reference — one
**741.25 px** page on a warm-grey ground (`#eef0f4`) holding a **1,100 px** feed of **two** post
cards, **22 px** apart, **539 px** wide each, and **deliberately unequal in height** (`start`
alignment): the photo post is **613.25** tall, the link post **358.25**.

Both cards share one anatomy, five rows deep: an **avatar + name + handle + time + `⋯`** header, a
paragraph (the photo post ends it with a blue `#hashtag`), a **full-bleed 3:2 photograph** or a
**bordered link preview** with a 64 px gradient tile, a **muted engagement line** (*"Sam, Priya and
others liked this"* beside *"18 comments · 6 shares"*), and a **three-up action bar** — *Like* with
a live count, *Comment*, *Share* — separated by a 1 px hairline.

**What decides fidelity.** Seven numbers, and every one of them is easy to get plausibly wrong:

1. **The two columns are `auto-fit`, not a media query.** `repeat(auto-fit, minmax(min(100%, 420px),
   1fr))` with a **22** gap means two columns exist while the feed's content box is **≥ 862**
   (2 × 420 + 22) — i.e. from viewport **894** up — and **893** is already one **861 px** column.
   There is **no width media query anywhere in the sheet**; the only `@media` is
   `prefers-reduced-motion`.
2. **The cards do not stretch.** `align-items: start` keeps the heights unequal (**613.25 /
   358.25**); a stretched row (postbox's pattern) is the wrong reading of this design.
3. **The photo is full-bleed and exactly 3:2.** `width: 100%; aspect-ratio: 3 / 2; object-fit:
   cover`, **no** side margin, so it spans the card's **537 px** inner width at **358** tall and its
   corners are clipped by the card's `overflow: hidden` — the text above it is inset **18 px**.
4. **The action bar is a 3-column grid, not a flex row.** `grid-template-columns: repeat(3, 1fr)`,
   **4** gap, `margin: 0 10px`, `padding: 6px 0 8px` and a 1 px top hairline → three **169.66 × 40.5**
   hit areas inside a **517** bar.
5. **The labels render at 15 px / 400, not the 14.5 px / 600 the sheet asks for.** `.cl-card20 button
   { font: inherit }` (specificity 0,1,1) out-specifies `.cl-card20__act` (0,1,0), so the `font`
   shorthand wins and every action label — and the **Post** button — falls back to the card's base
   **15 / 1.5**. Measured, not guessed: see §*Type*.
6. **Opening a comment grows the card, it does not overlay.** The hidden `<form>` is the bar's
   sibling: **64.5** px tall at y **676.25**, so the photo card goes **613.25 → 677.75** and the page
   grows with it — the reference has no second column to push against.
7. **Two stylesheets' worth of colour live in six values.** `#eef0f4` ground, `#111827` ink,
   `#525c6b` muted, `#1d4ed8` link/like-blue, `#be123c` liked-heart red, and the link tile's
   `135deg #9333ea → #2563eb` gradient. The two avatars add inline `--c` values (`#0e7490` teal,
   `#9333ea` violet).

**What it is not.** It is not a grid of products and not a marketing page: **one** feed section,
**two** cards, **no** heading visible (the only `h1` is visually hidden — *"Community feed"*), **no**
nav, **no** footer, **no** pricing, **no** form at rest (**2** reply forms, both `hidden`), **one**
photograph.

It recreates ColorLib **"Card V20"** — the **last of the twenty** `card` snippet variants, and the
family's only *social* member — as a new React 19 component called **Banter**.

- **Source slug:** `card-20`
- **ColorLib page:** https://colorlib.com/wp/template/card-20/ — **HTTP 200, 113,135 B**, `<title>`
  `Card V20 - Free Bootstrap Cards 2026 - Colorlib`, `h1` **"Card V20"**, `<meta description>`
  *"Social feed posts with an avatar, name, handle, time, text, a photo or link preview, and
  engagement counts. Free download, no jQuery or plugins."*, *"Author: Colorlib / Released: September
  2026 / License: CC BY 3.0"*, `datePublished` **2026-09-25T15:33:31+00:00**, page copy *"the download
  is **362 KB**"* (archive measured **370,739 B = 362.05 KB ✓**), and **"previous post: Card V19"**
  with **no next post** — this is the family's **last** variant.
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-20/ —
  **HTTP 200, 6,483 B**, `<title>` `Card V20 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  script. The slug-only path `theme/card-20/` is **404 (9 B)**; `theme/bb/card-20/` is **404 (9 B)**.
  The `bootstrap/` prefix is this family's ladder, not a dead preview. No inner pages
  (`theme/bootstrap/card-20/about.html` → **404, 9 B**), so the directory URL is the whole design.
- **Design category:** Card (social / community feed posts). Twentieth and final member of the
  **`card` snippet family** (`card-01` … `card-20`) in the **214 snippet variants** catalogued in
  `docs/catalog-coverage.md` — *"`card` runs to 20; the other eighteen families stop at 12 or 10."*
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/banter`,
  package `@free-react-templates/banter`, CNAME `banter.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` on main (**0** unchecked rows, **0** in-progress rows). So this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. Snippet families are worked **in family order, then variant number**, and `card-20` is the
family's last variant, so this prep **closes the `card` family**.

The family section **`## Bootstrap Cards (20)` exists on main at line 733** and at this prep's commit
carries **ten** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo, `Card 04`
→ tierline, `Card 05` → plaudit, `Card 06` → statline, `Card 07` → lodgerow, `Card 08` → roadbook,
`Card 09` → lexeme, `Card 10` → coffer — with **`## Bootstrap Checkboxes (20)` following at line
746**. Cards **11–19** are prepped (and 11 in flight): `showbill`, `coursebook`, `shortlist`,
`baylist`, `tiffin`, `tonearm`, `isobar`, `notebell`, `postbox`. This design's row appends
**directly after the last card row present** when the implementer ships it:

```markdown
- [x] **Card 20** — [colorlib](https://colorlib.com/wp/template/card-20/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-20.jpg) · [banter](https://banter.free.componentdock.com)
```

The family's rows land out of order because prep runs ahead of build — the implementer stream owns
that batch edit, not this prep run.

**The name.** `banter` — one lowercase word: the back-and-forth of a community feed, which is exactly
what the two cards frame. It names the design's subject without touching its source. It is in **no**
`apps/` folder, **no** spec folder, **no** `docs/templates/` folder, and
`git grep -ci banter origin/main` returns **0** files (checked 2026-10-26). The ColorLib paths
`colorlib.com/wp/template/banter/` (**404**), `preview.colorlib.com/theme/banter/` (**404, 9 B**) and
`preview.colorlib.com/theme/bootstrap/banter/` (**404, 9 B**) are all free. Do **not** reuse the
family's taken names `nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`,
`lodgerow`, `roadbook`, `lexeme`, `coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`,
`tiffin`, `tonearm`, `isobar`, `notebell`, `postbox`. Other candidates measured free the same day
(0 repo hits, all three ColorLib paths 404): `chatter`, `gabfest`, `warble`, `chinwag`, `feedline`,
`newsplash` — reserved for later families.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 6,483 B**, `<title>` "Card V20 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script (`js/snippet.js`), sha256 `9c4cdb629b566c8a…`                    |
| preview path      | **`theme/bootstrap/card-20/`** — the directory URL is the page. `theme/card-20/` **404**, `theme/bb/card-20/` **404**, `…/about.html` **404**                        |
| stylesheet        | `css/style.css?v=3f75ecee`, **11,329 B**, **510** lines, sha256 `21553b31b63b7e6b731a73268bc0885dbf2e48e78b0fc6570a2d35757f5faad7`                                     |
| behaviour script  | `js/snippet.js?v=a3675c10`, **2,917 B**, sha256 `4edc32e412dc3e5b5a04403d87b89955184267d699a3ae9b8cf6bacb7495c9b7`                                                     |
| archive           | `preview.colorlib.com/downloads/free/card-20.zip`, **200, 370,739 B** (362.05 KB ✓ the page's "362 KB"), **21 entries**: 5 dirs + `index.html` **6,243 B** + `css/style.css` **11,329 B** + `js/snippet.js` **2,917 B** + `README.md` **1,260 B** + **8 `woff2`** + `images/hike.jpg` **113,256 B** |
| live ↔ archive    | **CSS and JS byte-identical** (same sha256 both sides). HTML **6,483 vs 6,243 B**: the **240-byte** delta is two `robots` metas, one `dns-prefetch` to cdnjs, `fetchpriority="high"` on the stylesheet **and** the image, `decoding="sync"` on the image, and the two `?v=` cache-busters — **the preview is the archive's versioned twin** |
| CSS shape         | **69** top-level rules (**73** `{` blocks): **16** `:where(html) …` host resets, **8** `@font-face`, **1** `@media` (`prefers-reduced-motion`) and **0** width media queries, **1** `@keyframes` (`cl-card20-beat`), **0** `@supports`, **0** container queries, **0** `:has()` |
| classes           | **29** distinct `cl-` classes in the stylesheet, **28** in the markup; the difference is **1 dead selector** — `.cl-icon` (declared, **0** hits in the markup; the **twelfth consecutive** card in this family carrying the leftover). No markup-only class: every class used has a rule |
| custom properties | **4** declared on `.cl-card20` and all consumed: `--cl-card20-link` `#1d4ed8`, `--cl-card20-ink` `#111827`, `--cl-card20-muted` `#525c6b`, `--cl-card20-line` `#e8eaef`; a **fifth**, `--cl-card20-c`, is set **inline per avatar** (`#0e7490` on the first card, `#9333ea` on the second) and has **no fallback** |
| cascade reset     | the sheet opens with **16** `:where(html) …` rules (`all: revert` on ~60 elements, the `[hidden]` repair, `img,svg` and table reversions, a `::-webkit-datetime-edit` block) — a host-page reset so a Bootstrap parent cannot restyle the snippet. **Do not port it**; Tailwind preflight owns this. The `[hidden]` repair is the one to remember: `all: revert` would otherwise re-show hidden elements |
| controls          | **2** `<article>` (each `aria-labelledby` its `h2` id), **2** `<form action="#" hidden>`, **2** `<input type="text" placeholder="Write a comment…">`, **10** `<button>` (2 `⋯`, 2 like, 2 comment, 2 share, 2 post), **2** `<a>` (the hashtag + the link-preview card), **1** `<img>`, **9** `<svg>`, **0** icon library |
| headings          | **1 × `h1`** — *"Community feed"* — carrying `.cl-card20__sr`, i.e. **visually hidden** (1 × 1, clipped); **2 × `h2`** are the post author names (`id="cl-card20-a1"` / `a2`, each the `aria-labelledby` target of its `<article>`); **0 × `h3`**. The screenshot shows **no** visible heading — that is the design |
| hidden at rest    | **2** elements carry `hidden`: both `form.cl-card20__reply`; the toast is present but empty (`:empty` → `padding: 0; opacity: 0`) |
| live region       | **1** `p[role="status"]` (`data-cl-card20-status`) — the toast, inside `<main>`, `position: fixed` |
| content height    | **741.25** at 1,440 · **733.25** at 1,200 · **679.65** at 1,024 · **625.91** at 900 · **623.31** at 894 · **1,249.46** at 893 (one column) · **1,153.63** at 768 · **1,081** at 640 · **1,014.33** at 480 · **1,054.83** at 390 · **1,149.72** at 320 — no `min-height: 100vh` anywhere |
| horizontal scroll | **none** from 320 to 1,440 (`scrollWidth === clientWidth`, `scrollX` 0 after a 300 px nudge) — but see defect 3: the third action is **clipped inside** the card below ~345 |
| screenshot        | `card-20.jpg` — **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`, 37,468 B); convert before viewing. It is ColorLib's **browser-frame mockup** (macOS traffic lights + `preview.colorlib.com` bar) and matches the live render 1:1 — same two cards, same copy, same photograph, same counts, same labels |
| fonts             | **Onest**, **8 `@font-face`** = **4 weights (400 / 500 / 600 / 700) × 2 subsets**, and the archive's 8 `woff2` are **2 distinct binaries**: every `*-latin.woff2` is byte-identical (sha256 `cc61cbd632bb677c…`, 33,808 B) and every `*-latin-ext.woff2` too (sha256 `f72bdc75595bf844…`, 28,428 B). It is a **variable** font: at 40 px the string *"Noa Tamura 1,204"* measures **336.00 / 339.00 / 341.00 / 343.00 / 343.00** px at 400 / 500 / 600 / 700 / 800 — the four declared weights are **real**, and **800 is identical to 700** (the axis clamps). Load **400;500;600;700** from Google Fonts (`css2?family=Onest:wght@400;500;600;700` → **HTTP 200**); never use `font-extrabold` |

### The layout at 1,440 px (`body` `#eef0f4`, content **741.25** tall)

| part        | geometry                                                                                                                     |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `main`      | **1132 × 741.25** at x **154** — `max-width: 1100px; margin: 0 auto; padding: clamp(28px,5vw,64px) 16px` (64 px top/bottom at 1,440) |
| feed        | **1100 × 613.25** at x **170**, y **64** — `display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%,420px),1fr)); align-items: start; gap: 22px` → columns **539 / 539** |
| photo card  | **539 × 613.25** at (170, **64**) — radius **20**, `background: #fff`, `border: 1px solid #e8eaef`, `box-shadow: 0 1px 2px rgba(17,24,39,.05)`, `overflow: hidden`, `font-size: 15px; line-height: 1.5` |
| header      | **537 × 60** at (171,65) — `display: flex; align-items: center; gap: 12px; padding: 16px 16px 0 18px`                          |
| avatar      | **44 × 44** at (189,81), radius 50 %, `background: var(--cl-card20-c)` = `#0e7490`, **14 / 700** white initials *NT*             |
| who block   | **397** wide at x **245** — name **15.5 / 700 / 1.3** (20.14) at y 83.17, meta **13 / 1.5** (19.5) at y 103.31 in `#525c6b`; the `@handle` is an inline span **inside** the `h2`, weight **400**, same muted colour |
| `⋯` button  | **38 × 38** at (654,84), radius 50 %, icon 20 px, colour `#525c6b`, hover bg `#f3f4f6`                                        |
| text        | **501 × 67.5** at (189,137) — `margin: 12px 18px 14px`, **15 / 1.5** (22.5), three lines, hashtag `#trailrunning` in `#1d4ed8` at **600** |
| photo       | **537 × 358** at (171,**218.5**) — `display: block; width: 100%; aspect-ratio: 3 / 2; object-fit: cover`, **no** margin: full-bleed |
| stats       | **537 × 44.25** at (171,576.5) — `display: flex; flex-wrap: wrap; justify-content: space-between; gap: 6px 12px; padding: 12px 18px`, **13.5 / 1.5** (20.25) in `#525c6b` |
| bar         | **517 × 55.5** at (181,620.75) — `grid-template-columns: repeat(3,1fr); gap: 4px; margin: 0 10px; padding: 6px 0 8px; border-top: 1px solid #e8eaef` |
| action      | **169.66 × 40.5** — `padding: 9px 6px`, radius **10**, icon **20** at `stroke-width 1.9`, gap **7**, label `#374151` (rendered **15 / 400**) |
| bottoms     | photo card ends at **677.25**; link card at **422.25**; content at **741.25** (64 px bottom padding)                          |

### The two variants (same anatomy, one different third row)

| row        | photo post (card 1)                                  | link post (card 2)                                                     |
| ---------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| header     | avatar `#0e7490` *NT*, **Noa Tamura** `@noatrails`, *6 h ago · Trail Runners Club* | avatar `#9333ea` *LB*, **Leo Brandão** `@leobuilds`, *Yesterday · Public* |
| text       | **15 / 22.5**, three lines, ends with the `#trailrunning` link | **17 / 25.5** (`__text--big`), three lines, no tag                |
| media      | `<img>` **537 × 358**, 3:2, full-bleed                 | `<a class="__link">` **501 × 90** at (750,227.5): `padding: 12px`, `border: 1px solid #e8eaef`, radius **14**, `gap: 14`, hover `#f8fafc` |
| media art  | —                                                    | **64 × 64** tile at (763,240.5), radius **12**, `linear-gradient(135deg,#9333ea,#2563eb)`, white `16 18 6-6 8 6` code glyph at **28 px / stroke 2** |
| media text | —                                                    | title **14.5 / 700**, sub *code.example.com* **13** in `#525c6b`, both clipped (`min-width: 0`) |
| stats      | *Sam, Priya and others liked this* / *18 comments · 6 shares* | *Ana, Kofi and others liked this* / *96 comments · 41 shares*  |
| actions    | Like **248** (unpressed)                             | Like **1,204** — **already pressed** (`aria-pressed="true"`, `#be123c`, filled heart) |
| height     | **613.25** (image-bound)                             | **358.25** (content-bound)                                             |

### The state machine (measured by driving the live page)

| state                  | measurement                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| rest                   | both reply forms `hidden`; photo card **613.25**, link card **358.25**; like counts **248** / **1,204**; toast empty (`padding: 0; opacity: 0`) |
| like, 1st click        | `aria-pressed` **false → true**, `data-count` 248 → **249**, label re-rendered by `Intl.NumberFormat('en-US')` → *248 → 249*; colour `#be123c`, heart fills, `.45s` beat; **no height change** |
| like, 2nd click        | back to **248**, `aria-pressed="false"`, grey `#374151`                                                                              |
| like on card 2         | 1,204 → **1,203** (formatted *1,203*), pressed → **false**; the thousands separator is the point                                     |
| comment open           | `aria-expanded="true"`, `form.hidden = false`, focus moves to `#cl-card20-in1`, the button takes bg `#eff6ff` / text `#1d4ed8`; **the card grows 613.25 → 677.75** and the form is **64.5** tall at y **676.25** |
| comment close (button) | `aria-expanded="false"`, form `hidden`, button returns to `#374151` on transparent; card back to **613.25**                          |
| `Escape` **in input**  | form closes, `aria-expanded="false"`, focus returns to the Comment button                                                            |
| `Escape` **on Post**   | **nothing happens** — the handler is bound to the input's `keydown` only; the form stays open with `aria-expanded="true"` (defect 4) |
| submit **empty**       | no toast, no message; focus returns to the input; the form stays open (defect 5)                                                     |
| submit **valid**       | input cleared, toast **"Comment posted."** for **2,600 ms**, **form stays open**, focus stays on Post                                |
| share, fine pointer    | `await navigator.clipboard.writeText(url)`, toast **"Link copied to clipboard."**                                                     |
| share, coarse pointer  | `navigator.share({ url })` when `matchMedia('(pointer: coarse)')` — otherwise the clipboard branch                                     |
| share, rejected        | toast **"Copy this link: https://example.com/posts/48213"** (the URL is not selectable — it is a toast, defect 7)                     |
| toast geometry         | **151 × 38** at x **564.5**, y **838** in a 1,280 × 900 viewport — `position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); padding: 10px 16px; border-radius: 12px; background: #111827`, **14 / 500** white, `box-shadow: 0 12px 28px -12px rgba(0,0,0,.5)`, `transition: opacity .2s` |

### Breakpoints and thresholds (measured either side of each line)

| switch                        | at 894…893                     | at 893…892                    | rule                                                    |
| ----------------------------- | ------------------------------ | ----------------------------- | ------------------------------------------------------- |
| feed 2 columns → 1            | 2 cols (**420 / 420**)         | **1 col (861)**               | `auto-fit` + `minmax(min(100%,420px),1fr)` + 22 gap ⇒ 862 |
| action bar fits 3 labels      | fits at **350** (spill −4)     | **clipped at 340** (6 px)     | 302 px of nowrap labels vs a 266 px bar at 320 (26 px cut) |
| card height, photo            | **533.91**                     | **805.41**                    | the 3:2 image scales with the column                    |
| demo padding                  | 44.7 at 894                    | 44.65 at 893                  | `clamp(28px,5vw,64px)`  · 64 at ≥1,280, 51.2 at 1,024, 45 at 900, 38.4 at 768, 32 at 640, 28 at ≤560 |

Card heights per width (content height in brackets):

| width | photo card | link card | content |
| ----- | ---------: | --------: | ------: |
| 1,440 |     613.25 |    358.25 |  741.25 |
| 1,200 |     613.25 |    358.25 |  733.25 |
| 1,024 |     577.25 |    358.25 |  679.65 |
|   944 |     550.58 |    383.75 |  644.98 |
|   900 |     535.91 |    383.75 |  625.91 |
|   894 |     533.91 |    383.75 |  623.31 |
|   893 |     805.41 |    332.75 | 1,249.46 |
|   768 |     722.08 |    332.75 | 1,153.63 |
|   640 |     636.75 |    358.25 | 1,081.00 |
|   480 |     552.58 |    383.75 | 1,014.33 |
|   390 |     541.33 |    435.50 | 1,054.83 |
|   360 |     521.33 |    435.50 | 1,034.83 |
|   320 |     552.44 |    519.28 | 1,149.72 |

Heights are **not** monotonic: they follow text wrapping, so the photo card is *taller* at 320
(**552.44**) than at 894 (**533.91**) and the link card jumps to **435.50** at 390 when both stats
groups orphan onto their own line.

### Type — one variable family, six roles

| role          | size / weight / line-height                        | colour                        |
| ------------- | -------------------------------------------------- | ----------------------------- |
| author name   | 15.5 / 700 / 1.3 (20.14)                            | `#111827`                     |
| `@handle`     | inherits 15.5 / **400** / 1.3                       | `#525c6b`                     |
| meta (time · audience) | 13 / 400 / 1.5 (19.5)                      | `#525c6b`                     |
| body          | 15 / 400 / 1.5 (22.5) · link card **17** / 1.5 (25.5) | `#111827`                   |
| hashtag       | inherits size / **600** / 1.5                       | `#1d4ed8`                     |
| link title / url | 14.5 / **700** · 13 / 400                        | `#111827` · `#525c6b`         |
| engagement    | 13.5 / 400 / 1.5 (20.25)                            | `#525c6b`                     |
| action labels | **15 / 400 (rendered)** — authored 14.5 / 600       | `#374151` · pressed `#be123c` |
| like count    | **500**, `font-variant-numeric: tabular-nums`       | inherits the button           |
| Post          | **15 / 400 (rendered)** — authored 14 / 600         | `#fff` on `#1d4ed8`           |
| reply input   | 15 / 400                                            | `#111827` on `#f9fafb`        |
| toast         | 14 / **500**                                        | `#fff` on `#111827`           |

`body` is **16 px** Onest; the cards **re-base** to **15 px**. The count span really does render at
**500** (it is not a `<button>`, so the `font` shorthand never reaches it) — that asymmetry is
visible beside the 400-weight labels on the same row.

### Contrast (WCAG 2.1, computed from the rendered colours)

| pair                                          | ratio  | verdict |
| --------------------------------------------- | -----: | ------- |
| `#111827` on `#fff` (names, body)              | 17.74 | AAA |
| `#374151` on `#fff` (action labels)            | 10.31 | AAA |
| `#525c6b` on `#fff` (handle, meta, stats)      |  6.77 | AA+ |
| `#1d4ed8` on `#fff` (hashtag)                  |  6.70 | AA+ |
| `#fff` on `#1d4ed8` (Post)                     |  6.70 | AA+ |
| `#be123c` on `#fff` (liked)                    |  6.29 | AA+ |
| `#1d4ed8` on `#eff6ff` (expanded Comment)      |  6.16 | AA+ |
| `#fff` on `#0e7490` (teal avatar *NT*)         |  5.36 | AA |
| `#fff` on `#9333ea` (violet avatar *LB*)       |  5.38 | AA |
| `#525c6b` on `#eef0f4` (muted on the ground)   |  5.93 | AA+ |
| `#6b7280` on `#f9fafb` (comment placeholder)   |  4.63 | AA |
| `#e8eaef` on `#fff` (card + hairline, non-text) |  1.20 | decorative only |
| `#d1d5db` on `#fff` (input border, non-text)   |  1.47 | misses 3:1 for a control boundary — see defect 9 |
| `#93c5fd` on `#fff` (focus ring, non-text)     |  1.80 | misses 3:1 against white — see defect 10 |

Focus: `outline: 3px solid #93c5fd; outline-offset: 2px` on every button and link; the comment input
takes `outline: 2px solid #93c5fd; outline-offset: 1px` plus a white background. Both rings are weak
against the white card (**1.80 : 1**), so the port must not remove them *and* should not rely on them
alone — keep the pointer/hover backgrounds as a second cue.

## Defects found in the reference (the port's deltas list)

1. **The action labels and the Post button never render at their authored type.** `.cl-card20 button
   { font: inherit }` is specificity **(0,1,1)**; `.cl-card20__act` and `.cl-card20__send`
   (**0,1,0**) lose the `font-size` / `font-weight` half of their own rules. Measured: every action
   label is **15 / 400** (authored 14.5 / 600) and Post is **15 / 400** (authored 14 / 600). Port the
   **measured** type — a 600-weight label changes the bar's rhythm and the labels' widths.
2. **`.cl-icon` is declared and never used** — the **twelfth consecutive** card in this family to
   carry the leftover. Do not port it.
3. **The third action is clipped below ~345 px.** The three labels are `white-space: nowrap` and need
   **302** px (105 + 110 + 79 + 2 × 4); the bar is **266** at a 320 viewport, and the card's
   `overflow: hidden` cuts the overflow — *"Share"* reads *"Sha"* at 320, clipped by **26** px
   (**6** px at 340, **0** at 350). The page never scrolls sideways, so the control simply
   disappears. **Port a fix**: let the grid track shrink (`min-w-0`) and drop the icon gap and the
   6 px side padding under 360 so all three labels fit — the documented visual delta.
4. **`Escape` only works while the input has focus.** The `keydown` listener is attached to the
   input, so pressing `Escape` with focus on **Post** leaves the form open with
   `aria-expanded="true"`. Port one handler on the form so the dialog-ish pattern closes from any
   control inside it, restoring focus to the Comment button.
5. **An empty submit is silent.** It prevents the default, focuses the input and returns — no toast,
   no message, no `aria-invalid`. Port a one-line hint through the same live region
   (*"Write a comment first."*) so the failure is not invisible.
6. **The comment form stays open after posting.** The reference clears the input, announces
   *"Comment posted."* and leaves the form expanded. That is the design; keep it, and keep the toast
   as the only confirmation (the count above does **not** move — *"18 comments"* is static).
7. **Share has no usable fallback when the clipboard fails.** The catch branch pushes the URL into a
   2.6 s toast, where it cannot be selected or copied. Port the same messages but make the failure
   recoverable (selectable text or a `mailto:`/copy field), and keep `navigator.share` gated on a
   coarse pointer exactly as the reference does.
8. **The page's only `h1` is visually hidden.** *"Community feed"* is `.cl-card20__sr` (1 × 1, clipped),
   and the two visible headings are the **author names** (`h2`). Keep that outline — do not invent a
   visible section title, and do not demote the names to `div`s.
9. **The comment input's border is 1.47 : 1** (`#d1d5db` on `#fff`-ish `#f9fafb`). It is the only
   boundary of the control. Port the token but pair it with the placeholder and the focus ring, or
   darken it one step.
10. **The focus ring is 1.80 : 1 on white.** Visible in practice against the `#eff6ff` / `#f3f4f6`
    hover fills, weak on a plain card. Keep the 3 px ring and add the hover background as a second
    cue; never `outline: none`.
11. **Two conflicting `robots` metas and a `dns-prefetch` to cdnjs** on the live page, plus
    `fetchpriority` / `decoding` on the image — preview-host artifacts, not design. Ignore them.
12. **The engagement numbers are static copy.** *"Sam, Priya and others liked this"* and
    *"18 comments · 6 shares"* never change when you like or post, and the like counts start at
    **248** / **1,204** with the second card **already liked**. Reproduce the initial state exactly
    (it is the screenshot's state) and keep the strings static — do not wire them to the toggles.

Not defects, worth not "fixing": the `⋯` button does nothing (no menu exists — it is a decoration
with an `aria-label`); `align-items: start` leaves the two cards unequal on purpose; the avatar's
inline `--cl-card20-c` has no fallback (a missing value paints an invisible disc); the stats row
`space-between` orphans its right group onto a second line below ~430 px, which is correct.

## Requirements

### Requirement: Page shell and warm-grey ground

The page SHALL be a content-height stage on `#eef0f4` with one centred feed column.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** a 1,440 × 900 viewport
- **WHEN** the page has rendered
- **THEN** the content is **741.25** px tall (the document reports 900 because the viewport is the
  floor), `main` is **1132** wide at x **154** with `padding: 64px 16px`, and no element sets
  `min-height: 100vh`

#### Scenario: The ground never scrolls sideways

- **GIVEN** any width from 320 to 1,440
- **WHEN** the page is nudged 300 px to the right
- **THEN** `scrollX` stays **0** and `scrollWidth === clientWidth`

### Requirement: The feed is an auto-fit grid with unequal cards

The feed SHALL be `repeat(auto-fit, minmax(min(100%, 420px), 1fr))` with a 22 px gap and
`align-items: start`.

#### Scenario: Two columns above 894, one at 893

- **GIVEN** a 894 px viewport
- **WHEN** the feed is measured
- **THEN** there are two **420** px columns at a **22** gap; at **893** the feed is a single **861** px
  column and the photo card grows to **805.41** while the link card shrinks to **332.75**

#### Scenario: The cards are not equal height

- **GIVEN** a 1,440 viewport
- **WHEN** both cards are measured
- **THEN** the photo card is **539 × 613.25** and the link card **539 × 358.25**, both starting at
  y **64** — `align-items: start`, never `stretch`

### Requirement: The card surface

Each card SHALL be a white 20 px-radius panel with a hairline border, a 1 px shadow and clipped
corners.

#### Scenario: The surface reads as one clipped slab

- **GIVEN** a card at 1,440
- **WHEN** its computed style is read
- **THEN** `background-color` is `rgb(255,255,255)`, `border` is `1px solid rgb(232,234,239)`,
  `border-radius` is `20px`, `box-shadow` is `rgba(17,24,39,.05) 0 1px 2px`, `overflow` is `hidden`,
  and the card re-bases type to **15 / 1.5**

#### Scenario: The photograph bleeds to the clipped corners

- **GIVEN** the photo card at 1,440
- **WHEN** the image is measured
- **THEN** it is **537 × 358** (the card's full inner width, `aspect-ratio: 3 / 2`,
  `object-fit: cover`, **0** horizontal margin) at y **218.5**, so its corners are cut by the card's
  radius rather than inset

### Requirement: The post header

Every post SHALL open with an avatar, a name containing an inline handle, a meta line and a `⋯`
button.

#### Scenario: The header is one 60 px row

- **GIVEN** a card at 1,440
- **WHEN** the header is measured
- **THEN** it is **537 × 60** with `padding: 16px 16px 0 18px` and `gap: 12`, the avatar is
  **44 × 44** (radius 50 %, **14 / 700** white initials on `#0e7490` or `#9333ea`), the name is
  **15.5 / 700 / 20.14** with its `@handle` at weight **400** in `#525c6b`, the meta is **13 /
  19.5** in `#525c6b` (a `<time datetime>` · audience), and the `⋯` button is **38 × 38**

#### Scenario: The `⋯` button is labelled but inert

- **GIVEN** the `⋯` button
- **WHEN** it is inspected
- **THEN** it carries `aria-label="More options for <name>'s post"` and has **no** menu, no state and
  no handler — it is decoration, and the port SHALL NOT invent a menu

### Requirement: The text block

The post body SHALL be a 15 px paragraph inset 18 px, ending in a hashtag link on the photo card.

#### Scenario: The paragraph's box

- **GIVEN** the photo card at 1,440
- **WHEN** the text is measured
- **THEN** it is **501 × 67.5** at (189,137) with `margin: 12px 18px 14px`, **15 / 22.5**, three lines

#### Scenario: The hashtag is the only inline link

- **GIVEN** the photo card's paragraph
- **WHEN** the tag is inspected
- **THEN** `#trailrunning` is an `<a>` in `#1d4ed8` at weight **600**, no underline at rest and
  underlined on hover, and it is the card's only `<a>`

#### Scenario: The link card's paragraph is larger

- **GIVEN** the link card at 1,440
- **WHEN** its text is measured
- **THEN** it is **501 × 76.5** at **17 / 25.5** (`__text--big`), three lines, with no tag

### Requirement: The link preview replaces the photograph

The link card SHALL carry a bordered preview row with a gradient tile, a title and a domain.

#### Scenario: A 501 × 90 bordered row

- **GIVEN** the link card at 1,440
- **WHEN** the preview is measured
- **THEN** it is **501 × 90** at (750,227.5) with `padding: 12`, `border: 1px solid #e8eaef`,
  radius **14**, `gap: 14`, `margin: 0 18px 4px`, and a hover background of `#f8fafc`

#### Scenario: The tile is a gradient, not an image

- **GIVEN** the preview's art tile
- **WHEN** it is measured
- **THEN** it is **64 × 64**, radius **12**, `linear-gradient(135deg,#9333ea,#2563eb)` with a white
  `stroke-width 2` code glyph at **28** px, and the row holds no `<img>`

### Requirement: The engagement line

Each card SHALL show a muted two-part engagement summary above a hairline.

#### Scenario: Two groups on one line, wrapped when narrow

- **GIVEN** a card at 1,440
- **WHEN** the stats row is measured
- **THEN** it is **537 × 44.25** (`padding: 12px 18px`, **13.5 / 20.25**, `#525c6b`,
  `justify-content: space-between`, `flex-wrap: wrap`) with *"…and others liked this"* left and
  *"18 comments · 6 shares"* right; at 390 it wraps to **70.5** with the right group on its own line

#### Scenario: The numbers never move

- **GIVEN** a like toggled or a comment posted
- **WHEN** the stats row is re-read
- **THEN** its text is unchanged — the summary is static copy, not state

### Requirement: The three-up action bar

Each card SHALL close with a 3-column grid of Like / Comment / Share above a 1 px hairline.

#### Scenario: Three equal tracks inside a 517 px bar

- **GIVEN** a card at 1,440
- **WHEN** the bar is measured
- **THEN** it is **517 × 55.5** at x **181** with `grid-template-columns: repeat(3,1fr)`, `gap: 4`,
  `margin: 0 10px`, `padding: 6px 0 8px` and `border-top: 1px solid #e8eaef`, and each action is
  **169.66 × 40.5** with radius **10**, a **20** px stroke icon, `gap: 7` and `padding: 9px 6px`

#### Scenario: The labels render at 15 / 400

- **GIVEN** any action button
- **WHEN** its computed style is read
- **THEN** `font-size` is **15px** and `font-weight` is **400** (the card's base, not the authored
  14.5 / 600 — defect 1), the text colour is `#374151`, and the count span alone is weight **500**
  with `tabular-nums`

#### Scenario: All three labels fit down to 350

- **GIVEN** viewports of 350, 340 and 320
- **WHEN** the third action is measured against the card's inner edge
- **THEN** at **350** it stays inside, at **340** it overruns by **6** px and at **320** by **26** px
  (the reference clips it; the port fits it — defect 3)

### Requirement: Like toggles a pressed state and a formatted count

The Like control SHALL toggle `aria-pressed`, adjust its count by one and format it for `en-US`.

#### Scenario: The first card goes 248 → 249 and back

- **GIVEN** the photo card's Like button at rest (`aria-pressed="false"`, count **248**)
- **WHEN** it is clicked
- **THEN** `aria-pressed` becomes `"true"`, `data-count` becomes **249**, the label reads *249*, the
  colour is `#be123c`, the heart fills, a **0.45 s** beat plays, and the card height does not change;
  a second click restores **248**

#### Scenario: Thousands are formatted, the data attribute is not

- **GIVEN** the link card's Like button at rest (`aria-pressed="true"`, visible **1,204**)
- **WHEN** it is clicked
- **THEN** it becomes unpressed, `data-count` is **1203** while the visible label reads **1,203** —
  the number is re-rendered through `Intl.NumberFormat('en-US')`

#### Scenario: The second card starts liked

- **GIVEN** a fresh render
- **WHEN** both Like buttons are read
- **THEN** the photo card is **unpressed at 248** and the link card is **pressed at 1,204** — the
  screenshot's state, reproduced as initial data

### Requirement: Comment opens an inline reply row

The Comment control SHALL reveal a hidden form, focus its input and grow the card.

#### Scenario: Opening grows the card by 64.5

- **GIVEN** the photo card at rest (**613.25**)
- **WHEN** Comment is clicked
- **THEN** `aria-expanded` becomes `"true"`, the form is unhidden at **64.5** tall (y **676.25**),
  focus lands on the input, the button takes `#eff6ff` / `#1d4ed8`, and the card is **677.75**

#### Scenario: Closing from the button or from the input

- **GIVEN** an open form
- **WHEN** Comment is clicked again, or `Escape` is pressed inside the input
- **THEN** the form is hidden, `aria-expanded` is `"false"`, the card returns to **613.25**, and
  `Escape` returns focus to the Comment button

#### Scenario: Escape works from any control in the form (delta)

- **GIVEN** an open form with focus on **Post**
- **WHEN** `Escape` is pressed
- **THEN** the form closes and focus returns to the Comment button — the reference does nothing here
  (defect 4)

#### Scenario: The reply row's geometry

- **GIVEN** an open form at 1,440
- **WHEN** its parts are measured
- **THEN** the row is `display: flex; align-items: center; gap: 10; padding: 4px 16px 16px`, the
  *YOU* avatar is **36 × 36** on `#374151` at **10 / 700**, the input is a **999** px pill
  (`padding: 10px 14px`, `1px solid #d1d5db`, `#f9fafb`, **15** px, placeholder *"Write a comment…"*),
  and Post is a **999** px pill in `#1d4ed8` (`padding: 9px 16px`, white label, hover `#1e40af`)

### Requirement: Comment submission

The reply form SHALL post through the live region and never navigate.

#### Scenario: A valid comment clears the field and announces

- **GIVEN** a typed comment
- **WHEN** Post is submitted
- **THEN** the default is prevented, the input is cleared, the toast reads *"Comment posted."* for
  **2,600 ms**, the form **stays open** and focus stays on Post

#### Scenario: An empty comment is explained (delta)

- **GIVEN** an empty input
- **WHEN** Post is submitted
- **THEN** the input keeps focus and the toast reads *"Write a comment first."* — the reference stays
  silent (defect 5)

### Requirement: Share copies or shares the post URL

Share SHALL use the Web Share API on coarse pointers and the clipboard otherwise, announcing both
paths.

#### Scenario: Desktop copies

- **GIVEN** a fine pointer
- **WHEN** Share is clicked
- **THEN** `navigator.clipboard.writeText('https://example.com/posts/48213')` runs and the toast reads
  *"Link copied to clipboard."*

#### Scenario: Touch shares

- **GIVEN** `(pointer: coarse)` and a `navigator.share` implementation
- **WHEN** Share is clicked
- **THEN** `navigator.share({ url })` is awaited and **no** toast is shown

#### Scenario: A rejected clipboard is recoverable (delta)

- **GIVEN** the clipboard promise rejects (insecure context, permission denied)
- **WHEN** Share is clicked
- **THEN** the URL is surfaced in a form the user can copy — the reference drops it into a 2.6 s
  toast where it cannot be selected (defect 7)

### Requirement: One live region, one timer

Every announcement SHALL use the single `role="status"` paragraph, and a new one SHALL cancel the
old timer.

#### Scenario: The toast's anatomy

- **GIVEN** a toast
- **WHEN** it is measured
- **THEN** it is `position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%)`,
  `padding: 10px 16px`, radius **12**, `#111827` background, white **14 / 500** text,
  `box-shadow: 0 12px 28px -12px rgba(0,0,0,.5)`, `transition: opacity .2s`, and it measures
  **151 × 38** for *"Comment posted."* at a 1,280 viewport

#### Scenario: An empty region is invisible and takes no space

- **GIVEN** no announcement
- **WHEN** the region's style is read
- **THEN** `padding` is `0` and `opacity` is `0`, so it never intercepts a click

#### Scenario: A second announcement restarts the clock

- **GIVEN** a visible toast with 1 s left
- **WHEN** another action announces
- **THEN** the text is replaced, the previous timer is cleared, and the new text lives a full
  **2,600 ms**

### Requirement: The two cards are independent

Neither card's state SHALL affect the other.

#### Scenario: Like, comment and post stay local

- **GIVEN** the link card liked, commented on and submitted
- **WHEN** the photo card is read
- **THEN** its like count, pressed state, form visibility and `aria-expanded` are untouched, and its
  height is still **613.25** (or **677.75** if its own form is open)

### Requirement: Motion respects the user

The only animation SHALL be the 0.45 s like beat plus 0.2 s colour/opacity transitions, all
disabled under `prefers-reduced-motion: reduce`.

#### Scenario: The beat is a scale, not a colour change

- **GIVEN** a liking click
- **WHEN** the heart animates
- **THEN** `cl-card20-beat` runs **0.45 s ease** with `scale(1.3)` at 30 % and `scale(.92)` at 60 %,
  and the fill colour changes immediately

#### Scenario: Reduced motion keeps the end state

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** the page is used
- **THEN** the action, link and toast transitions are `none` and the beat does not run, while every
  resulting state (pressed colour, filled heart, toast text) is identical

### Requirement: Accessibility and page furniture

The page SHALL expose one visually hidden `h1`, two labelled articles, hidden forms at rest and a
complete keyboard path.

#### Scenario: The outline is one hidden h1 and two author h2s

- **GIVEN** the rendered page
- **WHEN** the headings are read
- **THEN** there is exactly **one `h1`** (*"Community feed"*, visually hidden via the `sr` class) and
  **two `h2`** (the author names), each carrying the `id` its `<article aria-labelledby>` points at,
  and there is **no** `h3`

#### Scenario: Nothing on the page is an unlabelled control

- **GIVEN** the rendered page
- **WHEN** the DOM is counted
- **THEN** there are **2** articles, **2** forms (both `hidden`), **2** inputs (each with a
  visually hidden `<label for>`), **10** buttons (each with text or an `aria-label`), **2** links,
  **1** image with descriptive `alt`, **9** inline SVGs marked `aria-hidden`, and **1**
  `role="status"`

#### Scenario: Keyboard order is visual order

- **GIVEN** focus at the start of the feed
- **WHEN** the user presses Tab through the photo card
- **THEN** the order is `⋯` → hashtag → Like → Comment → Share → (Post only while the form is open),
  then the link card's `⋯` → preview link → Like → Comment → Share; hidden forms are skipped and
  every stop shows the 3 px ring

#### Scenario: Mobile keeps every control reachable (delta)

- **GIVEN** a 320 px viewport
- **WHEN** the action bar is measured
- **THEN** all three labels are fully visible inside the card — the reference clips *Share* by
  **26** px (defect 3)

## Adapting to the repo (deltas the implementer owns)

| reference                                   | port                                                                                                                    |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `.cl-card20*` class names                   | plain Tailwind utilities + `cn()`; **no `cl-` prefix**, **no** ColorLib string in `apps/banter`                          |
| `--cl-card20-{link,ink,muted,line}` + inline `--cl-card20-c` | `@theme` tokens: `--color-ground #eef0f4`, `--color-card #ffffff`, `--color-ink #111827`, `--color-muted #525c6b`, `--color-link #1d4ed8`, `--color-liked #be123c`, `--color-line #e8eaef`, `--color-hover #f3f4f6`, `--color-expanded #eff6ff`, `--color-tile-from #9333ea`, `--color-tile-to #2563eb`, `--color-avatar-teal #0e7490`, `--color-avatar-violet #9333ea`, `--color-input #f9fafb`, `--color-input-line #d1d5db`, `--color-placeholder #6b7280`, `--color-me #374151` |
| radii 20 / 14 / 12 / 10 / 999               | `rounded-[20px]`, `rounded-[14px]`, `rounded-xl`, `rounded-[10px]`, `rounded-full`                                        |
| `repeat(auto-fit, minmax(min(100%,420px),1fr))` | `grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]` with `items-start gap-[22px]` — **no** `md:`/`lg:` breakpoint, the grid does the work |
| `clamp(28px,5vw,64px)` padding              | keep it: `py-[clamp(28px,5vw,64px)] px-4`                                                                                 |
| the 16-rule `:where(html)` reset             | **do not port** — Tailwind preflight owns it (remember the `[hidden]` repair only if `hidden` is overridden anywhere)       |
| vanilla `snippet.js`                        | hooks: `usePostActions()` (like counter + `Intl.NumberFormat('en-US')`), `useCommentForm()` (open/hidden/focus/Escape/submit), `useShare()` (async, coarse-pointer branch), one `useToast()` owning the 2,600 ms timer — **no libraries** |
| one markup, two post shapes                 | one `<PostCard>` with a discriminated `media` prop (`{ kind: 'photo', src, alt }` \| `{ kind: 'link', title, domain, href }`) plus optional `tag`; **never** two copies                |
| hard-coded `cl-card20-in1` / `a1` ids       | `useId()` per instance so two cards never collide                                                                         |
| `images/hike.jpg` (113,256 B)              | `https://picsum.photos/seed/banter-1/900/600`, same 3:2 aspect and descriptive `alt`                                      |
| Onest woff2s in the archive                 | one Google Fonts `<link>`: `family=Onest:wght@400;500;600;700&display=swap`; **no** 800 weight, `font-extrabold` is wrong |
| `example.com/posts/48213`                   | keep a plausible absolute URL in the data, not in a component                                                             |
| footer, nav, hero                           | **none exist** — do not invent them; the reference has no footer, so add none (the Component Dock line only appears if the design gets a footer) |

## Verification checklist

- [ ] `openspec validate template-banter --type spec` passes
- [ ] `apps/banter` scaffolded from the simplest app, package renamed, `public/CNAME` and `homepage`
      set to `banter.free.componentdock.com`, `react`/`react-dom` at `latest`, `injectUiSource()`
      kept, `npm install` at the root
- [ ] `@theme` carries the 17 colour tokens above; the font is **Onest 400 / 500 / 600 / 700** from
      Google Fonts and **no** `font-extrabold` / 800 weight appears
- [ ] content is **741.25** tall at 1,440 (no `min-h-screen`) and never scrolls sideways from 320 to
      1,440
- [ ] feed is `auto-fit minmax(min(100%,420px),1fr)` at a **22** gap with `items-start`: **2 × 420**
      at 894, **1 × 861** at 893; **no** width media query anywhere
- [ ] cards are **539 × 613.25** and **539 × 358.25** at 1,440 (unequal, `start`-aligned), radius
      **20**, `1px #e8eaef`, shadow `0 1px 2px rgba(17,24,39,.05)`, `overflow-hidden`
- [ ] header **537 × 60** (`padding: 16px 16px 0 18px`, `gap: 12`), avatar **44** round with white
      **14 / 700** initials, name **15.5 / 700** with a **400**-weight `@handle`, meta **13 / 19.5**,
      `⋯` **38 × 38** with an `aria-label` and no menu
- [ ] text **501 × 67.5** at `margin: 12px 18px 14px`, **15 / 22.5**; hashtag `#1d4ed8` at **600**;
      the link card's text is **17 / 25.5**
- [ ] photo **537 × 358**, `aspect-ratio: 3 / 2`, `object-fit: cover`, full-bleed, corners clipped
- [ ] link preview **501 × 90**, radius **14**, `1px #e8eaef`, tile **64 × 64** radius **12** with
      the `135deg #9333ea → #2563eb` gradient and a white code glyph
- [ ] stats **537 × 44.25** (`padding: 12px 18px`, **13.5 / 20.25**, `space-between`, wrapping to
      **70.5** at 390) and static on every interaction
- [ ] bar **517 × 55.5** (`repeat(3,1fr)`, `gap: 4`, `margin: 0 10px`, `padding: 6px 0 8px`, 1 px top
      hairline) with **169.66 × 40.5** actions, radius **10**, 20 px icons at `stroke-width 1.9`
- [ ] action labels render **15 / 400** and the count **500** `tabular-nums` (the measured type — the
      authored 14.5 / 600 never renders; defect 1)
- [ ] like: 248 → **249** → 248 with `aria-pressed` flips, `#be123c` + filled heart + 0.45 s beat and
      **no** height change; link card 1,204 → **1,203** when unliked, `data-count` unformatted
- [ ] comment: opens to **+64.5** (card **677.75**), input focused, `#eff6ff` / `#1d4ed8` button;
      closes from the button and from `Escape` inside the input, focus back on the button; the card
      returns to **613.25**
- [ ] submit: valid → field cleared + *"Comment posted."* 2,600 ms, form stays open, focus on Post;
      empty → *"Write a comment first."* (documented delta)
- [ ] share: clipboard path announces *"Link copied to clipboard."*, coarse pointer uses
      `navigator.share`, a rejection surfaces a **copyable** URL (documented delta)
- [ ] one `role="status"` toast, fixed at `bottom: 24px`, radius **12**, `#111827`, **14 / 500**,
      0.2 s opacity, empty state at `padding: 0; opacity: 0`, a new message cancels the old timer
- [ ] one visually hidden `h1` (*Community feed*), two author `h2`s with the `aria-labelledby` ids —
      no visible heading invented
- [ ] Tab order: `⋯` → hashtag → Like → Comment → Share per card, hidden forms skipped, 3 px ring on
      every stop
- [ ] at 320 px all three action labels are fully visible (**no** 26 px clipping — defect 3 fixed)
- [ ] `prefers-reduced-motion: reduce` removes the beat and the transitions while every end state
      stays identical
- [ ] the two cards are independent (like, comment, submit and height)
- [ ] **0** `colorlib` / `card-20` / `cl-card20` strings in `apps/banter`; placeholder images only
      (`picsum.photos/seed/banter-*`); a descriptive `alt` on the photograph
- [ ] `npm run verify:app banter` green (typecheck, lint, knip, fallow, 100 % coverage, build)
- [ ] row appended to `TEMPLATES.md` at the end of `## Bootstrap Cards (20)` using the exact line in
      *Why this design has no row*
- [ ] `npm run readme:status`; ship via `feat/template-banter` PR + squash merge
