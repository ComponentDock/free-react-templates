# Template: Notebell (Notification inbox — a dark four-card notification panel with an unread counter, a per-card read toggle, archive-with-undo and an empty state)

## Purpose

A **single-screen notification inbox**: no nav, no hero, no footer in the reference — one **833 px**
page on a near-black ground (`#0d0f14`) with a violet radial glow at the top, holding a **620 px**
column: a **header row** (*Notifications* + a 26 px violet counter pill + a violet *Mark all as read*),
then **four notification cards** in a 10 px-gapped list, then an invisible **toast slot** that only
materialises while it has something to say.

The page is **stateful, and the state is the design**. Three of the four cards start **unread** — a
violet-tinted surface (`#1b1e30`), a violet border (`#3a3f78`) and a **9 px dot** at `top: 20; right: 18`
with a 4 px `rgba(129,140,248,.2)` halo; the fourth is **read** — flat `#171a22` on `#262a35`, no dot,
and its action reads *Mark as unread*. The counter shows **3**; every action mutates it. Archiving a card
slides it 24 px right and fades it out over **250 ms**, then removes it from the DOM and offers **Undo**
for one card at a time. Archive all four and the panel says *You're all caught up.*

**What it is not.** It is **not** a dashboard and **not** a card grid. There is **one** column, **one**
surface per row, no photography (**0** `<img>`), no icon font, no shadows anywhere (the only depth cue is
the border colour and the unread tint), and **no second column** at any width. The whole page is **four
cards**, **ten** buttons (**eight** in the cards + *Mark all as read* + *Undo*), **six** inline SVGs and
**0** links.

**What decides fidelity.** Four numbers, and every one of them is easy to get plausibly wrong:

1. **The panel is 620 wide and the cards are the surfaces** — the 620 px column has **no** background,
   border or radius of its own; painting it as a card turns four rows into a widget.
2. **Unread ≠ read by surface *and* border *and* dot, in that order** — `#1b1e30` vs `#171a22` is a
   2-percent luminance step that only reads because the border jumps `#3a3f78` → `#262a35` and the dot
   appears. Ship the dot without the border and the state becomes invisible.
3. **Card height is text-driven: 200.5 for the quoted card and 130.5 for the other three** — the quote,
   the text and the action row all wrap independently, so at 390 the same list is
   **244 / 153 / 153 / 130.5** and at 375 it becomes **265 / 153 / 153 / 197.5**. Any `min-height` on a
   card freezes a layout the reference never renders.
4. **The buttons are 15 px / 400, not 13.5 / 600** — the sheet *declares* 13.5/600 on the card buttons,
   14/600 on *Mark all as read* and 14/700 on *Undo*, and all three declarations are beaten by
   `.cl-card18-panel button { font: inherit }` (specificity `0,1,1` > `0,1,0`). The live page and
   ColorLib's own screenshot both render **regular weight at the inherited size**. See defect 1.

- **Source slug:** `card-18`
- **ColorLib page:** https://colorlib.com/wp/template/card-18/ — **HTTP 200, 113,320 B**, `<title>`
  `Card V18 - Free Bootstrap Cards 2026 - Colorlib`, `<meta description>` *"A dark notification panel
  with unread and read cards, each with an avatar or status icon, text, time and actions. Free download,
  no jQuery or plugins."*, `datePublished` **2026-09-25T15:33:27+00:00**, page copy *"the download is
  **169 KB**"* (archive measured **172,736 B = 168.69 KB ✓**). It is the **eighteenth of twenty** `card`
  variants.
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-18/ —
  **HTTP 200, 5,474 B**, `<title>` `Card V18 | Colorlib`, `lang="en"`, **one** stylesheet, **one** script
  of its own, `<meta name="robots" content="noindex, nofollow">`. The slug-only path `theme/card-18/`
  **404s**; this family lives under the `bootstrap/` prefix (same ladder as `card-01` … `card-17`).
- **Design category:** Card (inbox / notification list). Eighteenth member of the **`card` snippet
  family** (`card-01` … `card-20`) in the **214 snippet variants** catalogued in
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/notebell`, package
  `@free-react-templates/notebell`, CNAME `notebell.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` on main (**0** unchecked rows, **0** in-progress rows). So this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `card-18` is one of the **214 snippet variants in 19 families**; snippet families are worked
**in family order, then variant number**, and the `card` family runs to **20**.

The family section **`## Bootstrap Cards (20)` exists on main at line 733** and at this prep's commit
carries **eight** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo, `Card 04` →
tierline, `Card 05` → plaudit, `Card 06` → statline, `Card 07` → lodgerow, `Card 08` → roadbook — with
**`## Bootstrap Checkboxes (20)` following at line 744**. Cards **09–17** are prepped and unbuilt
(`lexeme`, `coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`, `tiffin`, `tonearm`, `isobar`).
This design's row goes **directly after the last card row present** when the implementer ships it:

```markdown
- [x] **Card 18** — [colorlib](https://colorlib.com/wp/template/card-18/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-18.jpg) · [notebell](https://notebell.free.componentdock.com)
```

The family's rows land out of order because prep runs ahead of build — the implementer stream owns that
batch edit, not this prep run.

**The name.** `notebell` — one lowercase word: a note plus a bell, i.e. what an inbox is. It names the
design's subject without touching its source, and it reads as a product. It is in **no** `apps/` folder,
**no** spec folder, **no** `docs/templates/` folder, and `git grep -il notebell origin/main` returns
**nothing at all** (0 hits, checked 2026-10-26). The ColorLib catalogue paths
`colorlib.com/wp/template/notebell/`, `preview.colorlib.com/theme/notebell/` and
`preview.colorlib.com/theme/bootstrap/notebell/` are all **404**. Do **not** reuse the family's taken
names `nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`,
`lexeme`, `coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`, `tiffin`, `tonearm`, `isobar`.
Other candidates measured free the same day (0 repo hits, all three paths 404): `bellpost`, `pingline`,
`inboxly`, `chimepost`, `quietbell`, `dingbell` — reserved for later variants. `chime` (46 hits) and
`inkling` (4 hits) are **taken as substrings**, not as apps.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 5,474 B**, `<title>` "Card V18 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script (`js/snippet.js`)                                  |
| preview path      | **`theme/bootstrap/card-18/`** — the directory URL is the page. `theme/card-18/` is **404**                                                          |
| stylesheet        | `css/style.css?v=682e4fc0`, **10,274 B**, **440** lines, sha256 `77880247e21890b026813576abf8f89311158e942d811bf19277d107fd9beec4`                       |
| behaviour script  | `js/snippet.js?v=0faca0b4`, **3,520 B**, sha256 `cbc509be74a6f6b60f80d0e687b8e6b47aa2fabd3e0205f845f6cbe3df36c1c9`                                     |
| archive           | `preview.colorlib.com/downloads/free/card-18.zip`, **200, 172,736 B** (168.69 KB ✓ the page's "169 KB"), **14 entries**: 7 dirs + `index.html` **5,271 B** + `css/style.css` **10,274 B** + `js/snippet.js` **3,520 B** + `README.md` **1,260 B** + **8 `woff2`** |
| live ↔ archive    | **CSS and JS byte-identical** (same sha256 both sides) — *live preview verified; the archive is its un-versioned twin*. HTML **5,474 vs 5,271 B**: the 203-byte delta is one `noindex, nofollow` meta, one `dns-prefetch` to cdnjs, `fetchpriority="high"` on the stylesheet and the two `?v=` cache-busters → **the preview is the archive's versioned twin** |
| CSS shape         | **58** top-level rules (**60** `{` blocks incl. 2 nested in the one `@media`): **16** `:where(html) …` host resets, **6** `@font-face`, **1** `@media` (`prefers-reduced-motion`), **0** `@keyframes`, **0** `@supports`, **0** container queries, **1** `:has()` |
| classes           | **23** distinct `cl-` classes in the stylesheet, **22** in the markup; **1 dead selector** — `.cl-icon` (declared, 0 hits in the markup; the **10th consecutive** card with this leftover); **1 state class** with no rule of its own — `is-unread` is only ever used as `.cl-card18.is-unread` |
| custom properties | **6**: `--cl-card18-accent` `#818cf8`, `--ink` `#eef0f6`, `--muted` `#a3a9b8`, `--surface` `#171a22`, `--line` `#262a35` on the panel; `--cl-card18-c` set **inline per card** (violet `#6d28d9`, green `#15803d`, amber `#b45309`, rose `#be123c`) — the only per-item token in the file |
| cascade reset     | the sheet opens with **16** `:where(html) …` rules (`all: revert` on ~50 elements, a `[hidden]` repair, `img, svg` and table reversions) — a host-page reset so a Bootstrap parent cannot restyle the snippet; **do not port it**, Tailwind preflight already owns this |
| controls          | **10** `<button>` — **8** card actions + *Mark all as read* + *Undo* (in the DOM, `hidden` at rest); **0** `<a>`, **0** `<form>`, **0** `<input>`, **0** `<img>`, **0** media; **6** `<svg>` (4 archive, 1 check, 1 warning)                       |
| headings          | **1 × `h1`** (*Notifications*, carrying the counter `<span>` and an `sr-only` *" unread"*) — the section is `<section aria-labelledby="cl-card18-title">`; **no** `h2`+                      |
| semantics         | `<ul class="cl-card18-list">` of **4** `<li class="cl-card18">`; `<blockquote>` for the quoted comment; `<time datetime="…">` on every card; `__state` is a **visually hidden** span inside the meta line so *Unread ·* is spoken but not seen |
| live regions      | the toast is `role="status"` and always in the DOM (**1 px** tall at rest); the counter is **not** a live region — announcements ride the toast text |
| blocks            | `<main class="cl-card18-demo">` → `<section class="cl-card18-panel">` → header / `<ul>` / toast / empty `<p>` → *(nothing after the section)* |
| content height    | **833** at 1,440 (panel **689** + 2 × 72) · **811.88** at 1,024 · **781.16** at 768 · **753** at 480 · **841.5** at 390 · **929.5** at 375 · **1,063** at 360 · **1,169.5** at 320 — no `min-height: 100vh`; at 1,440 the demo is **833** tall inside a 900 px viewport (no scrollbar) |
| horizontal scroll | **none** from 320 to 1,440 (`scrollWidth === clientWidth`, `scrollX` 0 after a 200 px nudge, at 1440 / 1200 / 1024 / 900 / 768 / 640 / 480 / 390 / 375 / 360 / 320) |
| screenshot        | `card-18.jpg` — **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`, 20,376 B); convert before viewing. A `card-18-free-template.jpg` does **not** exist (404). It is ColorLib's **browser-frame mockup** (macOS traffic lights + `preview.colorlib.com` bar) and matches the live render 1:1 — same four cards, same order, same copy, same dot |
| fonts             | **Instrument Sans**, **6 `@font-face`** = **3 weights (400 / 600 / 700) × 2 subsets**, but the archive ships **8 `woff2` that are only 2 distinct binaries**: every `*-latin.woff2` is byte-identical (sha256 `6219bc4bfdfc5d9b…`, 29,904 B) and every `*-latin-ext.woff2` too (sha256 `21fac8da552a915e…`, 11,092 B). The **500 pair is unreferenced** (the family's card-14 pattern). The file is a **variable cut**: at 40 px the string *"Notifications"* measures **234 / 234 / 244 / 248** px at 400 / 500 / 600 / 700 — 500 is identical to 400 because no face declares it, while 600 and 700 are real (+4.3 % / +6.0 %). **Do not reproduce the trick** — load Instrument Sans 400 / 500 / 600 / 700 from Google Fonts |

### The panel (1,440 px; panel at x 410, y 72, 620 × 689)

| part     | geometry                                                                                                          |
| -------- | ----------------------------------------------------------------------------------------------------------------- |
| ground   | `body` `#0d0f14`; `main` `display: flex; justify-content: center; padding: clamp(32px, 6vw, 72px) 16px`; overlay `radial-gradient(50% 40% at 50% 0%, rgba(99,102,241,.18), transparent 70%)` |
| column   | **620 × 689** at x 410 — `max-width: 620px; width: 100%`; **no** background, border, radius, padding or shadow; base **15 / 1.5**, ink `#eef0f6` |
| header   | **620 × 36** at y 72 — `flex; align-items: center; justify-content: space-between; gap: 12; margin-bottom: 16`    |
| `h1`     | **180.77 × 36** — `display: flex; align-items: center; gap: 10`, **24 / 700 / −0.48 px (−.02em) / lh 36**          |
| counter  | **26 × 26** at x 564.77, y **77** — `inline-grid; place-items: center; min-width: 26; padding: 0 8; radius 999; background #818cf8; color #0d0f14`, **14 / 700** |
| all-read | **124 × 34.5** at x 906, y 72.75 — `padding: 6px 10px; radius 8; transparent; color #818cf8`; hover `rgba(129,140,248,.12)` |
| list     | **620 × 622** at y 124 — `display: grid; gap: 10; list-style: none`                                                |
| toast    | **620 × 1** at y 760 — `flex; justify-content: space-between; gap: 12; margin-top: 14; min-height: 1px`; grows to **41** with a message (`padding: 10px 14px; radius 12; background #262a35`) and **49** when *Undo* is shown |
| empty    | `margin-top: 24`, centred, muted **15 / 1.5**, `display: none` until the list is empty (**22.5** tall when shown)   |
| bottom   | **761** = 72 + 689                                                                                                 |

### The four cards (1,440 px; all 620 wide at x 410)

| # | card y | size        | avatar          | text (1 or 2 lines)                              | quote | state  |
| - | -----: | ----------- | --------------- | ------------------------------------------------ | ----- | ------ |
| 1 |    124 | **200.5**   | circle `#6d28d9` *MK* | *Mara Kovač* commented on *Q4 launch plan*  | **62** px, 2 lines | unread |
| 2 |    334.5 | **130.5** | **12 px-radius square** `#15803d`, white check | Deploy *web-app #1482* finished on *production* | — | unread |
| 3 |    475 | **130.5**   | circle `#b45309` *DA* | *Diego Alves* invited you to *Design Review*   | — | unread |
| 4 |    615.5 | **130.5** | **12 px-radius square** `#be123c`, white triangle | Invoice *INV-2093* is 5 days overdue | — | **read** |

Every card shares one shell: `display: flex; gap: 14; padding: 16px 18px 16px 16px; border: 1px solid;
border-radius: 16px;` with `transition: background-color .25s, border-color .25s, opacity .25s,
transform .25s` and **no shadow**. Unread takes `background #1b1e30`, `border-color #3a3f78`; read takes
`background #171a22`, `border-color #262a35`. Inside: **42 × 42** avatar (`flex: none`, `border-radius:
50%`, `--cl-card18-c` as the ground, `14 / 700` white initials; the `--icon` modifier drops the radius to
**12** and puts a **20 px** stroke `2.4` glyph in it), a body that is `flex: 1; min-width: 0;
padding-right: 18` (**528** wide, **510** of text) — the 18 px right padding is the dot's lane — a text
line at **15 / 1.5** (`#c9cdd8` on read, `#eef0f6` on unread; `strong` is `#eef0f6` at **600**), an
optional `<blockquote>` (**8** px below the text, `padding: 10px 12px`, `border-left: 3px solid #818cf8`,
`border-radius: 0 10px 10px 0`, `background: rgba(255,255,255,.04)`, `#d5d8e2` at **14 / 1.5**), a meta
line (**6** px below, **13 / 1.5**, `#a3a9b8`, `<time>` + a `&middot;` separator + a category) and an
action row (**12** px below, `flex; flex-wrap: wrap; gap: 8`).

The action buttons are the family's oddity: `inline-flex; align-items: center; gap: 6; padding: 6px 12px;
border: 1px solid #343a4a; border-radius: 9px; background: #222634; color #eef0f6` (**113 × 36.5** for
*Mark as read*, **129** for *Mark as unread*, **101** for the ghost *Archive*) with hover
`background #2a2f3f; border-color #4a5166`; the ghost is transparent with muted text and hovers to
`rgba(255,255,255,.06)` + ink. Every glyph is **16 × 16**, `stroke: currentColor`, `stroke-width: 2`.

The unread dot is a **pseudo-element**, not markup: `content: ""; position: absolute; top: 20; right: 18;
width/height: 9; border-radius: 50%; background: #818cf8; box-shadow: 0 0 0 4px rgba(129,140,248,.2)`.
Read cards have **no** `::after` at all (`content: none`).

### Heights are text-driven, and the arithmetic is exact

`130.5 = 34 chrome (2 border + 32 padding) + 22.5 text + 25.5 meta block (6 margin + 19.5 line) + 48.5
action block (12 margin + 36.5 button)`. Card 1 adds **8 (quote margin) + 62 (quote: 42 text + 20
padding)** = **200.5**. Every jump after that is one 22.5 px text line, one 19.5 px meta line, one 44.5 px
wrapped-action row (36.5 + 8 gap) or one 21 px quote line:

| viewport | panel | card 1 | card 2 | card 3 | card 4  | what wrapped                                          |
| -------: | ----: | -----: | -----: | -----: | ------: | ----------------------------------------------------- |
|    1,440 |   620 |  200.5 |  130.5 |  130.5 |   130.5 | nothing                                               |
|      480 |   448 |  200.5 |  130.5 |  130.5 |   130.5 | nothing (448 − 110 = 338 px of text fits all four)     |
|      440 |   408 |  244   |  153   |  130.5 |   130.5 | card 1 & 2 text → 2 lines, card 1 quote → 3 lines      |
|      420 |   388 |  244   |  153   |  153   |   130.5 | card 3 text → 2 lines                                  |
|      390 |   358 |  244   |  153   |  153   |   130.5 | card 1 quote → 3 lines                                 |
|  **380** |   348 |  265   |  153   |  153   | **153** | card 4 text → 2 lines (its content box hits 238)       |
|  **375** |   343 |  265   |  153   |  153   | **197.5** | card 4 **actions wrap**: content 233 < 238 = 129 + 8 + 101 |
|  **364** |   332 |  265   |  153   |  153   |   197.5 | cards 1–3 actions wrap (113 + 8 + 101 = 222 > 320 − 110)\* |
|      360 |   328 |  309.5 |  197.5 |  197.5 |   197.5 | all four wrap; card 1 quote → 4 lines                  |
|      320 |   288 |  330.5 |  217   |  217   |   197.5 | meta lines → 2 lines (39); card 1 quote → 5 lines      |
|      350 |   318 |  309.5 |  197.5 |  197.5 |   197.5 | **header still one line** — the last width before it wraps |
|  **349** |   317 |  309.5 |  197.5 |  197.5 |   197.5 | **header wraps** (`180.77 + 12 + 124 = 316.77` no longer fits) → header **82.5** |

\* measured: at 370 (panel 338) cards 1–3 keep one action row and only card 4 wraps; at 360 all wrap.
The action row's wrap point is therefore **content ≥ 238 px** for the *Mark as unread* variant
(body = panel − 92, minus the 18 px dot lane), i.e. **panel ≥ 348 → viewport ≥ 380**.

### Type — one family, five roles

| role              | size / weight / tracking           | colour     |
| ----------------- | ---------------------------------- | ---------- |
| `h1` *Notifications* | **24 / 700 / −.02em / lh 1.5**  | `#eef0f6`  |
| counter pill      | **14 / 700**                       | `#0d0f14` on `#818cf8` (zero: `#a3a9b8` on `#2a2f3b`) |
| *Mark all as read*, *Undo* | **15 / 400** (inherited; see defect 1) | `#818cf8` |
| card text         | **15 / 400 / 1.5** (`strong` **600**) | `#c9cdd8`, unread `#eef0f6` |
| quote             | **14 / 400 / 1.5**                 | `#d5d8e2`  |
| meta              | **13 / 400 / 1.5**                 | `#a3a9b8`  |
| card buttons      | **15 / 400** (inherited; sheet says 13.5 / 600) | `#eef0f6`, ghost `#a3a9b8` |
| avatar initials   | **14 / 700**                       | `#fff`     |

### Contrast (WCAG 2.1, computed from the rendered colours)

| pair                                   | ratio   |
| -------------------------------------- | ------: |
| ink `#eef0f6` on unread `#1b1e30`       | **14.46** |
| ink on read `#171a22`                   | **15.27** |
| card text `#c9cdd8` on read             | **10.94** |
| quote `#d5d8e2` on its 4 % white ground | **10.37** |
| button text on `#222634`                | **13.21** |
| muted `#a3a9b8` on read                 | **7.39** |
| muted on unread                         | **7.00** |
| accent `#818cf8` on the page ground     | **6.43** |
| counter ink on accent                   | **6.43** |
| accent on a card surface                | **5.83** |
| zero-counter muted on `#2a2f3b`         | **5.69** |

Every pair clears **AA** for body text; the weakest is **5.69**. There is no contrast defect to fix —
do not "improve" the muted meta to a lighter grey, it is deliberately the third ink level.

## The state machine (this is the behaviour to reproduce)

| action                     | list                        | counter            | toast (role=status)            | focus                                  |
| -------------------------- | --------------------------- | ------------------ | ------------------------------ | -------------------------------------- |
| initial render             | 4 cards, 3 unread           | `3`, accent pill   | empty, **1 px** tall, no bg    | `<body>`                               |
| *Mark as read* on an unread card | that card loses `is-unread`, button → *Mark as unread*, hidden state word → *Read ·* | **−1** | *"Marked as read."*, no Undo | stays on the button                    |
| *Mark as unread* on a read card | inverse                | **+1**             | *"Marked as unread."*, no Undo | stays on the button                    |
| *Mark all as read*         | **every** card read         | `0`, pill → `#2a2f3b` + muted | *"All notifications marked as read."*, no Undo | stays on the all-button |
| *Archive* on a card        | that card gets `is-leaving` (opacity 0, `translateX(24px)`) for **250 ms**, then is **removed** | **−1 if unread** | *"Notification archived."* + **Undo** | the **next** card's read button, else the previous sibling's, else *Mark all as read* |
| *Undo*                     | the archived card is re-inserted **at its original index** (`insertBefore(card, next)`), keeping its read state | restored | *"Notification restored."*, Undo hides | the restored card's read button |
| archive the last card      | `0` cards; **empty line** *"You're all caught up."* appears **below** the toast | `0` | *"Notification archived."* + Undo | *Mark all as read*                     |

**Exact strings (do not paraphrase):** `Mark as read` · `Mark as unread` · `Archive` · `Mark all as read`
· `Undo` · `Marked as read.` · `Marked as unread.` · `Notification archived.` · `Notification restored.` ·
`All notifications marked as read.` · `You're all caught up.` · hidden state words `Unread ·` / `Read ·`.

**Undo is single-slot.** `lastArchived` holds **one** card; archiving a second replaces it, so the first
archive becomes permanent and the toast only ever offers the newest. Undo is disabled **only** by being
hidden, and after one undo `lastArchived` is nulled — a second click on a *still visible* Undo is a no-op
(it cannot be reached: the button hides in the same tick).

**Reduced motion.** `prefers-reduced-motion: reduce` sets `transition: none` on the card and the buttons
and `transform: none` on `.is-leaving`, and the script removes the card **synchronously** instead of after
250 ms. Measured: the card is gone within one frame.

**The time stamps are frozen.** `<time datetime="2026-09-25T13:58">2 min ago</time>` and friends are
static copy from a demo captured on 2026-09-25 — the page never computes relative time. Ship the strings
(or compute against a pinned `NOW` so the tests stay deterministic); do not build a live clock.

## Defects found in the reference (the port's deltas list)

1. **Every button's declared weight is dead.** `.cl-card18-panel button { font: inherit }` has
   specificity `0,1,1`; `.cl-card18__btn` (`13.5 / 600`), `.cl-card18-panel__all` (`14 / 600`) and
   `.cl-card18-panel__undo` (`14 / 700`) are all `0,1,0`, so the shorthand wins and the rendered font is
   the inherited one: card buttons and *Mark all as read* measure **15 / 400**, *Undo* **14 / 400**.
   **ColorLib's own screenshot shows the regular-weight render**, so this is not a render artifact to
   correct — the reference *looks* like this. Ship **15 / 400** for the card buttons and the all-button,
   **14 / 400** for Undo, and do not copy `13.5 / 600` out of the sheet.
2. ***Mark all as read* never disables.** With the counter at `0` (or with the list empty) the control is
   still visible, focusable and clickable, and clicking it only re-announces *"All notifications marked as
   read."* The reference has no disabled state; a port MAY disable it when unread is 0 — if it does, the
   disabled style must stay violet-ish rather than inventing a new grey.
3. **Undo restores exactly one card** (see above). A user who archives four cards can recover one. Keep
   the single slot — a stack is a different design — but do not present Undo as a general escape hatch.
4. **The counter is not a live region.** It is a plain `<span>` inside the `h1`; the only announced change
   is the toast. Adding `aria-live="polite"` to the counter is a safe improvement (it is not a visual
   change), but it will double-announce alongside the toast — pick one, and say which in the PR.
5. **`.cl-icon` is a dead selector** (declared `height: 1em; width: auto; fill: currentColor`, used by
   **0** elements) — the 10th consecutive `card` variant carrying it. Drop it.
6. **`[hidden]` needs a repair** because the sheet's `all: revert` reset would otherwise un-hide the Undo
   button and the empty line (the sheet re-declares `[hidden] { display: none }` at class weight). In
   React this whole dance disappears: conditional-render, or `hidden` + Tailwind's `[hidden]:hidden`.
7. **The toast reserves a 1 px band** at rest and only gains padding/background through
   `:has(span:not(:empty))`. A port needs either a conditional class or to keep the `:has()` shape — the
   1 px reservation is why the page bottom is **761**, not 760.
8. **The 500 weight is shipped but undeclared** (8 woff2, 6 `@font-face`, 2 unique binaries). Any
   `font-medium` in the port would silently measure like 400. Do not use 500 at all.
9. **The read toggle has no `aria-pressed`/`aria-checked`.** State is carried by the button's own label
   (*Mark as read* ↔ *Mark as unread*) and by the card's surface. That is adequate — the label is the
   action, not the state — so keep it and do **not** add `aria-pressed` (it would make the label lie about
   the state). The clipped `Unread ·` / `Read ·` word inside the meta line is what a screen reader hears
   when it reads the card.

## Requirements

### Requirement 1: Page shell and near-black ground

The page SHALL be a single `main` on a `#0d0f14` ground carrying a top-centred violet radial overlay
(`radial-gradient(50% 40% at 50% 0%, rgba(99,102,241,.18), transparent 70%)`), with fluid padding
`clamp(32px, 6vw, 72px) 16px` and a **620 px** column that has **no** surface of its own.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** the port at 1,440
- **WHEN** the page is measured
- **THEN** the content SHALL be **833** tall (panel **689** + 2 × 72) with the panel at x 410, y 72
- **AND** there SHALL be no `min-height: 100vh` — the page is shorter than the 900 px viewport and shows
  no scrollbar

#### Scenario: The stage keeps its ground at every width

- **GIVEN** viewports 1,440 → 320
- **WHEN** the demo's computed padding is read
- **THEN** it SHALL be **72 / 16** at ≥ 1,200, **61.44 / 16** at 1,024, **46.08 / 16** at 768 and
  **32 / 16** at ≤ 533
- **AND** `scrollWidth` SHALL equal `clientWidth` at 1,440 / 1,200 / 1,024 / 900 / 768 / 640 / 480 / 390 /
  375 / 360 / 320

### Requirement 2: One 620 px column, no panel surface

The panel SHALL be `max-width: 620px; width: 100%` with `color: #eef0f6`, base **15 / 1.5**, and **no**
background, border, radius, padding or shadow — the cards, not the column, are the surfaces.

#### Scenario: The column shrinks but stays centred

- **GIVEN** the rendered page
- **WHEN** the panel's box is read at 1,440 / 768 / 640 / 480 / 390 / 320
- **THEN** it SHALL be **620 / 620 / 608 / 448 / 358 / 288** wide with a **16** px gutter on each side
- **AND** it SHALL be horizontally centred at every one of those widths (`panelX` 410 / 74 / 16 / 16 / 16 / 16)

#### Scenario: Painting the column is a different design

- **GIVEN** the panel element
- **WHEN** its computed background, border and radius are read
- **THEN** all three SHALL be transparent / `0` / `0px`
- **AND** the port SHALL NOT add a card container, a shadow or a divider the reference does not have

### Requirement 3: Header row — title, counter, all-read control

The header SHALL be a `flex` row (`justify-content: space-between; align-items: center; gap: 12;
margin-bottom: 16`) holding an `h1` *Notifications* at **24 / 700 / −.02em**, a **26 × 26** pill carrying
the unread count, and a *Mark all as read* button.

#### Scenario: The counter is a pill, not a number

- **GIVEN** the header at 1,440
- **WHEN** the counter is measured
- **THEN** it SHALL be **26 × 26** at x 564.77, y 77 — `min-width: 26`, `padding: 0 8`,
  `border-radius: 999`, `background #818cf8`, `color #0d0f14`, **14 / 700**
- **AND** the `h1`'s accessible name SHALL be *"Notifications 3 unread"* (the `sr-only` *" unread"* span)

#### Scenario: The header wraps only below 350

- **GIVEN** the header at 350 and at 349
- **WHEN** its height is read
- **THEN** it SHALL be **36** at 350 (single line) and **82.5** at 349 (wrapped onto two rows)
- **AND** the arithmetic SHALL be `180.77 + 12 + 124 = 316.77` against a panel of `min(vw − 32, 620)`

### Requirement 4: Four cards in a 10 px list

The list SHALL be a `<ul>` of exactly **four** `<li class="cl-card18">` in a `grid` with `gap: 10`,
`list-style: none`, each card `display: flex; gap: 14; padding: 16px 18px 16px 16px; border: 1px solid;
border-radius: 16px` and no shadow.

#### Scenario: The four heights are 200.5 / 130.5 / 130.5 / 130.5

- **GIVEN** the list at 1,440
- **WHEN** the cards are measured
- **THEN** they SHALL be **620 × 200.5** at y 124, then **620 × 130.5** at y 334.5 / 475 / 615.5, with
  the list **620 × 622** ending at y 746
- **AND** every card SHALL be a `<li>` inside one `<ul>`; the port SHALL NOT flatten them into `div`s or
  give them a `min-height`

#### Scenario: Heights follow the text, not the card

- **GIVEN** the same list at 440 / 420 / 390 / 380 / 375 / 360 / 320
- **WHEN** the four heights are read
- **THEN** they SHALL be `244/153/130.5/130.5`, `244/153/153/130.5`, `244/153/153/130.5`,
  `265/153/153/153`, `265/153/153/197.5`, `309.5/197.5/197.5/197.5`, `330.5/217/217/197.5`
- **AND** each jump SHALL be one wrapped line (22.5), one wrapped meta line (19.5), one wrapped action row
  (44.5) or one quote line (21) — never a fixed height

### Requirement 5: Unread and read are three signals

An unread card SHALL take surface `#1b1e30`, border `#3a3f78` and a **9 × 9** violet dot at `top: 20;
right: 18` with `box-shadow: 0 0 0 4px rgba(129,140,248,.2)`; a read card SHALL take surface `#171a22`,
border `#262a35` and **no** dot; both SHALL transition background, border, opacity and transform over
**250 ms**.

#### Scenario: The dot lives in the body's right lane

- **GIVEN** an unread card at 1,440
- **WHEN** the pseudo-element and the body are measured
- **THEN** the dot SHALL be **9 × 9** at `top: 20; right: 18` with a **4** px `rgba(129,140,248,.2)` halo
- **AND** the body SHALL keep `padding-right: 18` (**528** wide, **510** of text) so text never runs under it

#### Scenario: Read cards have no dot at all

- **GIVEN** the fourth card
- **WHEN** its `::after` is read
- **THEN** `content` SHALL be `none`
- **AND** its button SHALL read *Mark as unread* while the three unread cards read *Mark as read*

### Requirement 6: The quoted comment

The first card SHALL carry a `<blockquote>` under its text: `margin-top: 8; padding: 10px 12px;
border-left: 3px solid #818cf8; border-radius: 0 10px 10px 0; background: rgba(255,255,255,.04); color:
#d5d8e2` at **14 / 1.5**.

#### Scenario: The quote is 62 px at 1,440

- **GIVEN** the first card at 1,440
- **WHEN** the quote is measured
- **THEN** it SHALL be **510 × 62** — two 21 px lines plus 20 px of padding — starting at y 171.5
- **AND** it SHALL be **83** (3 lines) at 390, **104** (4) at 386 and **125** (5) at 320, which is the
  only reason card 1 is **244 / 265 / 309.5 / 330.5** there

#### Scenario: One card has a quote, not all

- **GIVEN** the four cards
- **WHEN** blockquotes are counted
- **THEN** there SHALL be exactly **one**, in the first card
- **AND** the other three SHALL NOT reserve its 8 px margin

### Requirement 7: Avatars — two shapes, four colours, no images

Each card SHALL start with a **42 × 42** avatar whose ground is the per-card custom property
`--cl-card18-c` — **circle** for initials (*MK* `#6d28d9`, *DA* `#b45309`, `14 / 700` white), **12 px
rounded square** for status glyphs (check `#15803d`, triangle `#be123c`, a **20 px** `stroke-width 2.4`
white glyph) — with **0** `<img>` anywhere on the page.

#### Scenario: The glyph avatars are squares, the initials avatars are circles

- **GIVEN** the four avatars at 1,440
- **WHEN** their radii and grounds are read
- **THEN** card 1 SHALL be `50%` on `rgb(109,40,217)` and card 3 `50%` on `rgb(180,83,9)`
- **AND** card 2 SHALL be `12px` on `rgb(21,128,61)` with a check glyph and card 4 `12px` on
  `rgb(190,18,60)` with a warning glyph

#### Scenario: Nothing on the page is a photograph

- **GIVEN** the whole document
- **WHEN** assets are counted
- **THEN** `<img>` SHALL be **0**, background images **0**, and `<svg>` **6** (4 archive + 1 check + 1
  warning)
- **AND** no picsum placeholder SHALL appear — this design has no image slot to fill

### Requirement 8: Ten buttons, zero links, exact labels

The page SHALL contain **8** card action buttons (**2** per card), *Mark all as read* and *Undo* — and
**0** `<a>`, **0** `<form>`, **0** `<input>`; the button labels SHALL be exactly `Mark as read`,
`Mark as unread`, `Archive`, `Mark all as read`, `Undo`.

#### Scenario: The action row is two buttons, 8 px apart

- **GIVEN** a card at 1,440
- **WHEN** its action row is measured
- **THEN** it SHALL be **510 × 36.5** with `gap: 8`; *Mark as read* **113 × 36.5**, *Mark as unread*
  **129 × 36.5**, *Archive* **101 × 36.5**, all at `border-radius: 9`
- **AND** the row SHALL wrap into **81** px (two rows) when the body's content box drops below **238**
  — panel **348**, viewport **380** for the *Mark as unread* variant

#### Scenario: The glyph buttons keep their names

- **GIVEN** an *Archive* button
- **WHEN** the accessibility tree is read
- **THEN** its name SHALL be *"Archive"* (the **16 px** svg is `aria-hidden`), never an empty button
- **AND** there SHALL be no clickable link anywhere on the page

### Requirement 9: Mark-as-read toggles one card

Activating a card's read button SHALL toggle that card's `is-unread` class, flip the button label, flip
the hidden state word, recompute the counter and announce *"Marked as read."* or *"Marked as unread."*.

#### Scenario: One card, both directions

- **GIVEN** the initial page (counter 3)
- **WHEN** *Mark as read* is activated on card 1
- **THEN** the counter SHALL read **2**, card 1 SHALL lose the dot and the unread surface, its button
  SHALL read *Mark as unread*, and its hidden state word SHALL read *Read ·*
- **AND** activating it again SHALL return the page to **3** with the original surfaces and the toast
  *"Marked as unread."*

#### Scenario: Mark all is one gesture

- **GIVEN** the initial page
- **WHEN** *Mark all as read* is activated
- **THEN** all four cards SHALL be read, the counter SHALL be **0** and turn `#2a2f3b` on `#a3a9b8`
- **AND** every card button SHALL read *Mark as unread* and the toast SHALL read
  *"All notifications marked as read."*

### Requirement 10: Archive animates, removes and offers one undo

Activating *Archive* SHALL add `is-leaving` (**opacity 0**, `translateX(24px)`, **250 ms**), remove the
card, recompute the counter and show *"Notification archived."* with an **Undo** that re-inserts the card
at its original index.

#### Scenario: The leave is 250 ms, not instant

- **GIVEN** a card being archived
- **WHEN** it is sampled 120 ms later
- **THEN** it SHALL still be connected, with `opacity ≈ 0.17` and `translateX ≈ 20px`
- **AND** at 250 ms it SHALL be gone and the list SHALL hold **3** cards

#### Scenario: Undo restores the original slot

- **GIVEN** card 2 archived (list: 1, 3, 4)
- **WHEN** *Undo* is activated
- **THEN** the order SHALL be **1, 2, 3, 4** again with the card's unread state and dot intact
- **AND** the counter SHALL return to **3** and the toast SHALL read *"Notification restored."* with
  Undo hidden

#### Scenario: Focus lands on the next card's action

- **GIVEN** a card archived with the keyboard
- **WHEN** the removal completes
- **THEN** focus SHALL move to the **next** card's read button, or the previous sibling's when the
  archived card was last, or *Mark all as read* when the list is empty
- **AND** the page SHALL NOT drop focus to `<body>`

### Requirement 11: Empty state

When the list reaches zero cards the panel SHALL show *"You're all caught up."* — centred, muted,
`margin-top: 24` — **below** the toast, while the header, the counter (`0`) and *Mark all as read* stay in
place.

#### Scenario: Last archive empties the panel

- **GIVEN** one card left
- **WHEN** it is archived
- **THEN** the empty line SHALL be visible (**22.5** tall, `#a3a9b8`, centred) directly under the toast
- **AND** the toast SHALL still read *"Notification archived."* with **Undo** available

#### Scenario: The empty line is hidden until it is needed

- **GIVEN** the initial page
- **WHEN** the empty element is queried
- **THEN** it SHALL be `hidden` (**0** px, `display: none`)
- **AND** it SHALL stay hidden through any read/unread toggle, because only archiving can empty the list

### Requirement 12: The toast is a permanent, empty-by-default status line

The toast SHALL be a `role="status"` node that is always in the DOM at **1 px** (`min-height: 1px`,
`margin-top: 14`) and SHALL gain `padding: 10px 14px`, `border-radius: 12` and `background #262a35` only
while it has a message (**41** px, **49** px with Undo).

#### Scenario: Silence is a 1 px band

- **GIVEN** the initial page
- **WHEN** the toast is measured
- **THEN** it SHALL be **620 × 1** with a transparent background and no padding
- **AND** the page bottom SHALL be **761** — the 1 px reservation is part of the layout

#### Scenario: Messages replace each other

- **GIVEN** any sequence of actions
- **WHEN** the toast text is read
- **THEN** it SHALL hold exactly the last message, with no stacking and no timers
- **AND** **Undo** SHALL be visible only for an archive, and hidden again after it is used

### Requirement 13: Motion respects the user

Under `prefers-reduced-motion: reduce` the card and button transitions SHALL be `none`, the leave
transform SHALL be `none`, and archiving SHALL remove the card **synchronously**.

#### Scenario: Reduced motion skips the 250 ms

- **GIVEN** a context with reduced motion
- **WHEN** a card is archived
- **THEN** the card's computed `transition-duration` SHALL be `0s` and it SHALL be gone on the next frame
- **AND** the counter, toast and focus behaviour SHALL be identical to the animated path

#### Scenario: Nothing else animates

- **GIVEN** the page at rest
- **WHEN** animations are enumerated
- **THEN** there SHALL be **0** `@keyframes`, **0** infinite animations and **0** transitions other than
  the card's 250 ms and the buttons' 200 ms colour transitions
- **AND** the only moving thing in the whole page SHALL be a card leaving

### Requirement 14: Accessibility and page furniture

The page SHALL keep one `h1`, one `<section aria-labelledby>` pointing at it, the `<ul>`/`<li>` list
semantics, `<time datetime>` on every card, `role="status"` on the toast, a **2 px** `#818cf8` focus ring
at `outline-offset: 2px` on every button, and one attribution line linking
`https://www.componentdock.com/`.

#### Scenario: The heading outline is one deep

- **GIVEN** the rendered page
- **WHEN** headings are enumerated
- **THEN** there SHALL be exactly one `h1` (*Notifications*) and **no** `h2`/`h3`
- **AND** the section's `aria-labelledby` SHALL resolve to that `h1`'s id

#### Scenario: Focus is visible and ordered

- **GIVEN** the port at 1,440
- **WHEN** Tab is pressed from the document start
- **THEN** the focus order SHALL be *Mark all as read*, then card 1's two actions, then cards 2–4, then
  *Undo* (only while visible), then the Component Dock link
- **AND** every focused button SHALL show `2px solid #818cf8` at `outline-offset: 2px`

## Adapting to the repo (deltas the implementer owns)

| reference                                              | in `apps/notebell`                                                                  |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `.cl-card18*` class names                              | Tailwind utilities + the measured arbitrary values; **no** `cl-` class names anywhere |
| 6 `@font-face` + 8 `woff2` (2 unique binaries, 500 unreferenced) | one Google Fonts `<link>`: `family=Instrument+Sans:wght@400;500;600;700&display=swap` — real weights (defect 8) |
| `body { background:#0d0f14 }` + `.cl-card18-demo` gradient | app shell: `bg-[#0d0f14]` on the wrapper and one `bg-[radial-gradient(50%_40%_at_50%_0%,rgba(99,102,241,.18),transparent_70%)]` layer |
| 16 `:where(html) …` host resets                         | drop — Tailwind preflight already owns this                                          |
| `[hidden]` repair (defect 6)                            | conditional rendering, or `hidden` + Tailwind's `[hidden]:hidden`; never ship the reset |
| `.cl-icon` (dead)                                       | drop (defect 5)                                                                      |
| `.is-unread` class toggle + `::after` dot               | React state (`read: boolean` per notification) + a real `<span aria-hidden>` dot (keep the 9 px / `top-5 right-[18px]` geometry) |
| `button { font: inherit }` beating the sheet (defect 1)  | `text-[15px] font-normal` on card buttons and the all-button, `text-[14px] font-normal` on Undo — **do not** copy 13.5/600 |
| `list.addEventListener('click', …)` delegation           | one `onToggleRead` / `onArchive` per card, state in `useState`; no delegation needed |
| `lastArchived` single slot + `insertBefore(card, next)`  | `archived: { item, index } \| null` in state; undo = `splice(index, 0, item)` |
| `window.setTimeout(done, 250)` + `.is-leaving`           | `onTransitionEnd` on the card (with a 250 ms fallback) or a `setTimeout` gated by `useReducedMotion` |
| `:has(span:not(:empty))` toast styling                   | conditional classes on the toast: `message ? 'px-3.5 py-2.5 rounded-xl bg-[#262a35]' : 'min-h-px'` |
| `<time datetime>` + frozen copy                          | keep the `dateTime` attributes and the visible strings verbatim                      |
| no footer                                               | one Component Dock attribution line under the panel, centred, muted `#a3a9b8`         |
| 1 px toast band                                         | keep `min-h-px mt-3.5` so the bottom stays at 761, not 760                            |

`src/index.css` `@theme` tokens to declare (exact measured values):

```css
--color-ground:        #0d0f14;
--color-ink:           #eef0f6;
--color-muted:         #a3a9b8;
--color-surface:       #171a22;
--color-surface-unread:#1b1e30;
--color-line:          #262a35;
--color-line-unread:   #3a3f78;
--color-accent:        #818cf8;
--color-accent-glow:   rgb(99 102 241 / 0.18);
--color-text-dim:      #c9cdd8;
--color-quote-ink:     #d5d8e2;
--color-quote-bg:      rgb(255 255 255 / 0.04);
--color-btn:           #222634;
--color-btn-line:      #343a4a;
--color-btn-hover:     #2a2f3f;
--color-btn-line-hover:#4a5166;
--color-ghost-hover:   rgb(255 255 255 / 0.06);
--color-count-zero:    #2a2f3b;
--color-toast:         #262a35;
--color-avatar-1:      #6d28d9;
--color-avatar-2:      #15803d;
--color-avatar-3:      #b45309;
--color-avatar-4:      #be123c;
--font-sans:           "Instrument Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--radius-card:         16px;
--radius-avatar-icon:  12px;
--radius-btn:          9px;
--radius-toast:        12px;
--radius-quote:        10px;
```

Data shape the tests should pin:

```ts
type Avatar =
  | { kind: 'initials'; text: string; color: string }   // 'MK' #6d28d9, 'DA' #b45309
  | { kind: 'icon'; icon: 'check' | 'warning'; color: string }; // #15803d, #be123c

type Notification = {
  id: string;                 // 'mara' | 'deploy' | 'diego' | 'invoice'
  avatar: Avatar;
  body: React.ReactNode;      // strong-wrapped names/ids, exactly as the reference
  quote?: string;             // card 1 only
  time: { dateTime: string; label: string };  // '2026-09-25T13:58' / '2 min ago'
  category: string;           // 'Marketing' | 'Build took 3 min 12 s' | …
  read: boolean;              // 3 false, 1 true at mount
};

const INITIAL: Notification[] = [ /* 4 items, in the reference's order */ ];
const MESSAGES = {
  read:       'Marked as read.',
  unread:     'Marked as unread.',
  archived:   'Notification archived.',
  restored:   'Notification restored.',
  allRead:    'All notifications marked as read.',
  empty:      "You're all caught up.",
} as const;
```

**Suggested component split:** `App.tsx` (ground + gradient + `<Inbox>` + attribution),
`components/Inbox.tsx` (the `useInbox` state machine: items, counter, toast message, archived slot),
`components/InboxHeader.tsx`, `components/NotificationCard.tsx` (surface + dot + avatar + quote + meta +
actions), `components/NotificationAvatar.tsx`, `components/Toast.tsx`, `components/EmptyNote.tsx`,
`components/icons.tsx` (archive · check · warning, `stroke-width 2`), `lib/inbox.ts` (pure reducer:
`toggleRead`, `markAllRead`, `archive`, `undo`), `data.ts`.

**Coverage notes.** jsdom has no layout and no transitions, so the geometry is tested as **data, classes
and ARIA**, not pixels: the counter text and its `is-zero` class for 0; exactly 4 cards with 3 unread;
each card's button label; the hidden state word flipping between `Unread ·` and `Read ·`; the toast text
after each action and the presence/absence of Undo; the empty note appearing only when the list is empty
(after four archives); the reducer's `undo` restoring the item at its original **index** (assert the
array order, not just membership); the leave path via `onTransitionEnd` **and** the reduced-motion
instant path (both branches need a test to hold 100 % branches); the dot `aria-hidden`; the focus-move
target after an archive (next sibling → previous sibling → all-button, three branches). Assert the
wrap-sensitive classes (`text-[15px] font-normal` on the buttons) rather than trying to measure widths.

## Verification checklist

- [ ] `apps/notebell` exists, package `@free-react-templates/notebell`, `public/CNAME` =
      `notebell.free.componentdock.com`, `"homepage"` = `https://notebell.free.componentdock.com`
- [ ] `grep -ri 'colorlib\|card-18\|Card V18\|cl-card18' apps/notebell` → **no matches**
- [ ] page: `#0d0f14` ground + the violet radial overlay, padding **72 / 16** at 1,440 and **32 / 16** at
      390, content height **833** at 1,440; **no** `min-height: 100vh`
- [ ] column: `max-width 620`, centred, **no** background/border/radius/shadow; **620** at ≥ 1,024,
      **608** at 640, **448** at 480, **358** at 390, **288** at 320
- [ ] header: **36** tall, `h1` **24 / 700 / −.02em** (**180.77** wide), counter **26 × 26** pill at
      `min-width 26 / padding 0 8 / radius 999`, all-button **124 × 34.5**; header wraps to **82.5** at
      349 and stays **36** at 350
- [ ] list: `<ul>` of **4** `<li>`, `gap: 10`, cards **200.5 / 130.5 / 130.5 / 130.5** at 1,440; radius
      **16**, padding **16 / 18 / 16 / 16**, border **1**, no shadow; heights at 440 / 420 / 390 / 380 /
      375 / 360 / 320 as tabulated above
- [ ] unread: surface `#1b1e30`, border `#3a3f78`, dot **9 × 9** at `top 20 / right 18` with a **4** px
      halo; read: surface `#171a22`, border `#262a35`, **no** dot; body `padding-right: 18`
- [ ] quote: **510 × 62** at 1,440, `border-left: 3px solid #818cf8`, `border-radius: 0 10px 10px 0`,
      `rgba(255,255,255,.04)`, `#d5d8e2` **14 / 1.5**; one quote only
- [ ] avatars: **42 × 42**, circle for initials (violet / amber) and **12** px square for glyphs (green
      check / rose warning) with **20** px `stroke-width 2.4` glyphs; **0** `<img>`
- [ ] actions: **8** card buttons + *Mark all as read* + *Undo*; **0** `<a>` / `<form>` / `<input>`;
      buttons **113 / 129 / 101 × 36.5**, radius **9**, `text-[15px] font-normal` (defect 1), hover
      `#2a2f3f` / `#4a5166`, ghost hover `rgba(255,255,255,.06)`; row wraps to **81** below panel 348
- [ ] behaviour: toggling one card moves 3 → 2 and back; *Mark all* → **0** with the grey pill; archive
      leaves over **250 ms** (`opacity ≈ 0.17`, `translateX ≈ 20` at 120 ms) and removes; **Undo**
      restores the original index with the read state intact; a second archive replaces the undo slot
- [ ] empty: four archives → *"You're all caught up."* visible **below** the toast, counter `0`, list `0`
- [ ] toast: `role="status"`, **1** px at rest, **41** with a message, **49** with Undo, `#262a35` radius
      **12**, `margin-top: 14`; bottom of the page **761**
- [ ] motion: card transitions `250ms` on background/border/opacity/transform, buttons `200ms` on
      background/border, **0** keyframes; reduced motion → `0s` + **no** transform + synchronous removal
- [ ] a11y: one `h1`, section `aria-labelledby` bound to it, `<time datetime>` on all four cards,
      `role="status"` toast, dot `aria-hidden`, `2px #818cf8` ring at offset **2**, focus order header →
      cards → Undo → Component Dock link, focus never lands on `<body>` after an archive
- [ ] contrast holds: `#eef0f6` on `#1b1e30` **14.46**, `#c9cdd8` on `#171a22` **10.94**, `#a3a9b8` on
      `#171a22` **7.39**, `#818cf8` on `#0d0f14` **6.43**, zero pill **5.69**
- [ ] no horizontal scroll at 1,440 / 1,200 / 1,024 / 900 / 768 / 640 / 480 / 390 / 375 / 360 / 320
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app notebell` (typecheck + lint + knip + fallow + 100 % coverage + build) passes;
      `openspec validate template-notebell --type spec` is valid
