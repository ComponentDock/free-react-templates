# Notebell — design notes (`card-18` → `apps/notebell`)

Everything below was measured on **2026-10-26** against the live preview
`https://preview.colorlib.com/theme/bootstrap/card-18/` (HTTP 200, 5,474 B) with `curl -4` +
Playwright 1.62 Chromium, and cross-checked against the source archive
`preview.colorlib.com/downloads/free/card-18.zip` (172,736 B). Tokens come from the stylesheet
(`css/style.css?v=682e4fc0`, 10,274 B, sha256 `77880247…`) and from `getComputedStyle` at 1,440;
geometry comes from a width sweep that steps one pixel across each wrap threshold. Where the sheet and
the render disagree, **the render wins**, and the disagreements are listed in §5.

## 1 — What this design actually is

The family's **first inbox**. Seventeen siblings before it were *objects on a page* — a profile plate, a
product card, a price tier, a listing row, a photo grid, a weather console — all static. This one is a
**small application**: four rows of data, a counter, and four verbs (mark read, mark unread, mark all,
archive) whose effects are visible in the same screen. Nothing else in the batch has a destructive
action with an undo.

```
 ┌──────────────────────────────────────────────────────────────────────┐
 │ Notifications (3)                            Mark all as read        │ ← h1 24/700 + 26 px pill + violet text
 │ ┌──────────────────────────────────────────────────────────────────┐ │
 │ │ (MK)  Mara Kovač commented on Q4 launch plan             ●       │ │ ← unread: #1b1e30 + #3a3f78 + 9 px dot
 │ │       ┃ Can we move the press embargo to Tuesday? …             │ │ ← quote: 3 px violet rule, 4 % white
 │ │       2 min ago · Marketing                                     │ │ ← meta 13 px; "Unread · " is clipped
 │ │       [ Mark as read ] [ ⧉ Archive ]                            │ │ ← 15/400 buttons, radius 9
 │ ├──────────────────────────────────────────────────────────────────┤ │
 │ │ [✓]   Deploy web-app #1482 finished on production        ●       │ │ ← 12 px-radius square avatar
 │ │       19 min ago · Build took 3 min 12 s                        │ │
 │ │       [ Mark as read ] [ ⧉ Archive ]                            │ │
 │ ├──────────────────────────────────────────────────────────────────┤ │
 │ │ (DA)  Diego Alves invited you to Design Review           ●       │ │
 │ │       3 h ago · Thu 1 Oct, 10:00–11:00                          │ │
 │ │       [ Mark as read ] [ ⧉ Archive ]                            │ │
 │ ├──────────────────────────────────────────────────────────────────┤ │
 │ │ [⚠]   Invoice INV-2093 is 5 days overdue                         │ │ ← read: #171a22 + #262a35, no dot
 │ │       Yesterday · Billing                                       │ │
 │ │       [ Mark as unread ] [ ⧉ Archive ]                          │ │
 │ └──────────────────────────────────────────────────────────────────┘ │
 │ ‹toast: 1 px at rest · 41 px with a message · 49 px with Undo›        │
 │ ‹empty line: hidden until the list is empty›                          │
 └──────────────────────────────────────────────────────────────────────┘
   620 wide, cards 200.5 / 130.5 / 130.5 / 130.5, gap 10
```

The composition is **one column with no container**: the 620 px strip has no surface, so the four cards
read as four separate objects floating on the near-black ground, and the only "frame" in the design is
the violet radial glow behind the header. Every card is the same 16 px radius, same 1 px border, same
16/18 padding — the difference between them is *state*, not style.

The information order inside a card is an event log, not marketing: **who → what happened → (what was
said) → when + which stream → what I can do about it**. The meta line sits *between* the text and the
buttons, which is why the buttons never align across cards with different line counts.

## 2 — Section order (exact, no invented sections)

| # | block                                                              | reference element                    |
| - | ------------------------------------------------------------------ | ------------------------------------ |
| 1 | page ground, violet radial glow, fluid padding                      | `body`, `main.cl-card18-demo`        |
| 2 | 620 px column (no surface)                                          | `section.cl-card18-panel`            |
| 3 | header — `h1` + counter pill + *Mark all as read*                   | `.cl-card18-panel__head`             |
| 4 | list — four notification cards                                      | `ul.cl-card18-list` → `li.cl-card18` |
| 5 | toast status line (in DOM at 1 px, grows with a message)            | `.cl-card18-panel__toast`            |
| 6 | empty note (hidden until the list is empty)                         | `.cl-card18-panel__empty`            |
| 7 | *(nothing)*                                                         | the reference ends at the section; the port adds one Component Dock line |

No nav, no logo, no hero, no CTA, no testimonial, no newsletter, no footer in the reference. **Do not add
a filter bar, a "Notifications / Archive" tab pair, an avatar menu or a search field** — the page has
exactly one screen and four verbs, and a tab would make the archive recoverable when the design gives the
user only a single-slot Undo.

## 3 — Section-by-section fidelity notes

### 3.1 The ground and the column (620, no surface)

`body { margin: 0; background: #0d0f14 }`, then `main` = `display: flex; justify-content: center;
padding: clamp(32px, 6vw, 72px) 16px; background: radial-gradient(50% 40% at 50% 0%, rgba(99,102,241,.18),
transparent 70%)`. The gradient is painted on the **flex container**, so it spans the full viewport width
and the demo's full height (1,440 × 833 at desktop) — it is not a card-sized blob.

| viewport | padding-top | panel width | panel y  | content height |
| -------: | ----------: | ----------: | -------: | -------------: |
|    1,440 |          72 |         620 |       72 |          **833** |
|    1,200 |          72 |         620 |       72 |            833 |
|    1,024 |       61.44 |         620 |    61.44 |         811.88 |
|      900 |          54 |         620 |       54 |            797 |
|      768 |       46.08 |         620 |    46.08 |         781.16 |
|      640 |        38.4 |         608 |    38.39 |         765.78 |
|      480 |          32 |         448 |       32 |            753 |
|      390 |          32 |         358 |       32 |          841.5 |
|      375 |          32 |         343 |       32 |          929.5 |
|      360 |          32 |         328 |       32 |          1,063 |
|      320 |          32 |         288 |       32 |        1,169.5 |

The panel's `max-width: 620px` is the only constraint: the ground reaches 1,440 but the content never
does. At 1,440 the page is **833** tall inside a **900** viewport — no scrollbar, and no `min-height:
100vh` anywhere (a port that adds one turns a card into a "screen").

### 3.2 The header (36 px, three parts)

`display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12;
margin-bottom: 16`. Height **36** = the `h1`'s line box (**24 px × 1.5**), not the pill's 26.

| part        | size          | position      | note                                            |
| ----------- | ------------- | ------------- | ----------------------------------------------- |
| `h1`        | **180.77 × 36** | x 410, y 72 | `flex; align-items: center; gap: 10`; **24 / 700 / −0.48 px / lh 36** |
| counter     | **26 × 26**   | x 564.77, y **77** | pill: `min-width 26; padding 0 8; radius 999; #818cf8` on `#0d0f14` text, **14 / 700**; vertically centred, so it sits 5 px below the text's top |
| all-button  | **124 × 34.5** | x 906, y 72.75 | `padding: 6px 10px; radius 8`; **aligned to the header's middle**, not its top |

The `h1` contains the counter **and** a visually hidden *" unread"*, so the accessible name is
*"Notifications 3 unread"* while the visible text is `Notifications 3`. The counter is **not** a live
region (defect 4).

The header wraps when `180.77 + 12 + 124 = 316.77` stops fitting: measured **350 → 36**,
**349 → 82.5** (the all-button drops to a second row, `justify-content: space-between` puts it left).
That is the only wrap in the whole page above 320.

### 3.3 The cards (one shell, two states, four heights)

Shell: `position: relative; display: flex; gap: 14; padding: 16px 18px 16px 16px; border: 1px solid;
border-radius: 16px; transition: background-color .25s, border-color .25s, opacity .25s, transform .25s`.
Padding is **asymmetric** (16 left, 18 right) because the dot is inset 18 from the right; the body
compensates with its own `padding-right: 18` so text and dot never collide.

| state  | background | border     | dot |
| ------ | ---------- | ---------- | --- |
| unread | `#1b1e30`  | `#3a3f78`  | **9 × 9** `#818cf8` at `top 20 / right 18`, `box-shadow: 0 0 0 4px rgba(129,140,248,.2)` |
| read   | `#171a22`  | `#262a35`  | **none** (`content: none`) |

The three signals matter together: the two surfaces differ by **2 %** luminance
(`rgb(27,30,48)` vs `rgb(23,26,34)`), which is invisible alone; the border jumps from
`#3a3f78` (a violet-blue) to `#262a35` (a dark grey), and the dot appears. Remove any one and the state
stops reading at a glance.

Height arithmetic at 1,440: `130.5 = 34 chrome (2 × border + 32 padding) + 22.5 text + 25.5 meta block
(6 margin + 19.5 line) + 48.5 action block (12 margin + 36.5 button)`; the quoted card adds `8 (margin) +
62 (quote)` → **200.5**. Nothing has a `min-height`; every later value is a wrapped line:

| viewport | card 1 | card 2 | card 3 | card 4 | trigger |
| -------: | -----: | -----: | -----: | -----: | ------- |
| 1,440–480 | 200.5 | 130.5 | 130.5 | 130.5 | — |
| 440 | 244 | 153 | 130.5 | 130.5 | cards 1+2 text wrap; card 1 quote → 3 lines |
| 420 | 244 | 153 | 153 | 130.5 | card 3 text wraps |
| 390 | 244 | 153 | 153 | 130.5 | quote stays 3 lines (**83**) |
| 386 | 265 | 153 | 153 | 130.5 | quote → 4 lines (**104**) |
| 380 | 265 | 153 | 153 | **153** | card 4 text wraps (content box hits 238) |
| 375 | 265 | 153 | 153 | **197.5** | card 4's action row wraps (**81**) |
| 360 | 309.5 | 197.5 | 197.5 | 197.5 | all action rows wrap; quote → 4 lines |
| 320 | 330.5 | 217 | 217 | 197.5 | meta lines wrap (**39**); quote → 5 lines (**125**) |

The **action-row wrap point is content ≥ 238 px** — `129 (Mark as unread) + 8 (gap) + 101 (Archive)`, and
the content box is `panel − 92 (chrome + avatar + gap) − 18 (dot lane) = panel − 110`. So the *Mark as
unread* card wraps at **panel 348 → viewport 380**, while the *Mark as read* cards need only **222** and
wrap at **panel 332 → viewport 364**. That 16 px difference is why card 4 grows first at 375.

### 3.4 The content column inside a card

| part    | geometry                          | tokens |
| ------- | --------------------------------- | ------ |
| avatar  | **42 × 42** at x 427, y 141       | `flex: none`; circle `50%` or `--icon` square `12`; `--cl-card18-c` ground; white `14 / 700` initials or a **20** px `stroke-width 2.4` glyph |
| body    | **528 × h** at x 483              | `flex: 1; min-width: 0; padding-right: 18` |
| text    | **510 × 22.5** (per line)         | `15 / 1.5`, `#c9cdd8` on read / `#eef0f6` on unread; `strong` `#eef0f6` **600** |
| quote   | **510 × 62** at y 171.5           | `margin-top: 8; padding: 10px 12px; border-left: 3px solid #818cf8; radius 0 10px 10px 0; background: rgba(255,255,255,.04); #d5d8e2 14 / 1.5` |
| meta    | **510 × 19.5** at y 239.5         | `margin-top: 6; 13 / 1.5; #a3a9b8`; `<time>` + `·` + category |
| actions | **510 × 36.5** at y 271           | `margin-top: 12; flex; flex-wrap: wrap; gap: 8` |
| button  | **113 × 36.5** (ghost **101**)    | `padding: 6px 12px; radius 9; border 1px #343a4a; background #222634`; hover `#2a2f3f` / `#4a5166` |
| dot     | **9 × 9** at `top 20 / right 18`  | `::after`, `#818cf8`, halo `0 0 0 4px rgba(129,140,248,.2)` |

The meta line is the subtle one: the markup is
`<span class="__state">Unread · </span><time>2 min ago</time> · Marketing`, and `__state` is clipped
(`clip-path: inset(50%)`, 1 × 1) — so the **visible** line starts at the time ("2 min ago · Marketing")
while the **spoken** line includes the state word. A port that prints the state visibly adds a leading
`·` that the design does not have; a port that drops it loses the state for screen readers.

### 3.5 The buttons — the cascade defect

The sheet declares three button typographies and **none of them apply**:

| selector                    | declared            | rendered        | why |
| --------------------------- | ------------------- | --------------- | --- |
| `.cl-card18__btn`           | 13.5 / 600          | **15 / 400**    | `.cl-card18-panel button { font: inherit }` is `0,1,1` > `0,1,0` |
| `.cl-card18-panel__all`     | 14 / 600            | **15 / 400**    | same rule; inherits the header's 15 |
| `.cl-card18-panel__undo`    | 14 / 700            | **14 / 400**    | same rule; inherits the toast's 14 |

Enumerating the matched font rules on a card button returns exactly three: the `all: revert` reset, the
`font: inherit` shorthand, then `font-size: 13.5px; font-weight: 600`. The shorthand wins on specificity,
so the button box is **36.5** tall (22.5 line box + 12 padding + 2 border) rather than the ~32 a 13.5 px
semi-bold label would give. **ColorLib's screenshot shows the same regular-weight label**, so this is the
design as shipped, not a render quirk: reproduce **15 / 400** and record the sheet's numbers as dead.

### 3.6 The toast and the empty line

The toast is always in the DOM at **620 × 1** (`min-height: 1px; margin-top: 14`) so the page bottom is
**761**, then:

| state                     | height | styling |
| ------------------------- | -----: | ------- |
| no message                |  **1** | transparent, no padding |
| message                   | **41** | `padding: 10px 14px; radius 12; background #262a35` |
| message + Undo            | **49** | same, with the Undo button (36.5 tall) forcing the row |

The growth is driven by `:has(span:not(:empty))` — the padding and background exist only while the message
span has text. In React that becomes a conditional class; the important part is that the 1 px
reservation stays, or the page bottom moves to 760.

Empty line: `<p hidden>` → `margin-top: 24; text-align: center; color: #a3a9b8`, **22.5** tall, rendered
**below** the toast because it is later in the DOM. After archiving all four, the panel shows the toast
(*"Notification archived."* + Undo) **and** *"You're all caught up."* at the same time — the design does
not clear the toast when the list empties.

## 4 — The state machine, as measured

Every step below was exercised in Chromium against the live page and is reproduced verbatim in the spec.

| step | counter | unread cards | toast | Undo | focus |
| ---- | ------: | -----------: | ----- | ---- | ----- |
| load | 3 | 3 | — (1 px) | hidden | `<body>` |
| *Mark as read* (card 1) | 2 | 2 | `Marked as read.` | hidden | the button |
| *Mark as unread* (card 1) | 3 | 3 | `Marked as unread.` | hidden | the button |
| *Archive* (card 2) | 2 | 2 | `Notification archived.` | **shown** | next card's read button |
| *Undo* | 3 | 3 | `Notification restored.` | hidden | restored card's read button |
| *Mark all as read* | **0** (grey pill) | 0 | `All notifications marked as read.` | hidden | the all-button |
| archive ×4 | 0 | 0 | `Notification archived.` | **shown** | the all-button |

Details that decide the port:

- **Undo is single-slot.** `lastArchived` holds one `{ card, next }`; the second archive overwrites it.
  The restore is `insertBefore(card, next)`, i.e. the **original index**, not "append".
- **The leave is 250 ms** and is applied by adding `.is-leaving` → `opacity: 0; transform:
  translateX(24px)` with the card's own 250 ms transition, then `setTimeout(done, 250)`. Sampled at
  120 ms: `opacity ≈ 0.17`, `translateX ≈ 20`, still connected.
- **Reduced motion removes synchronously** (`reduced()` short-circuits the timeout) and the sheet also
  kills the transition and the transform. Measured: gone in one frame.
- **Focus is moved for you**: next sibling's read button → previous sibling's → the all-button. The page
  never leaves focus on `<body>` after a removal (a plain `card.remove()` would).
- **`refresh()` runs on init**, so the counter is derived from the DOM's `is-unread` count rather than
  trusted from the markup — a React port derives it the same way (`items.filter(i => !i.read).length`).
- The read toggle writes **three** things at once: the card class, the button label, and the hidden state
  word. Miss the third and a screen reader hears a stale state.

## 5 — Where the sheet and the render disagree (the deltas to ship)

1. **Button typography** (§3.5): declared 13.5/600 · 14/600 · 14/700, rendered 15/400 · 15/400 · 14/400.
   Ship the render.
2. **`[hidden]` is repaired at class weight** because the sheet's `all: revert` reset would un-hide the
   Undo button and the empty line. React does not need the repair — conditional-render instead — but do
   not port `all: revert` and then wonder why `hidden` stopped working.
3. **`.cl-icon`** (`height: 1em; width: auto; fill: currentColor`) is declared and used nowhere — the
   10th consecutive `card` variant carrying this leftover. Drop it.
4. **500 is shipped but never declared**: 8 `woff2`, 6 `@font-face`, **2 unique binaries**
   (`*-latin` 29,904 B ×4, `*-latin-ext` 11,092 B ×4; the 500 pair is the unreferenced one). Canvas widths
   at 40 px: **234 / 234 / 244 / 248** for 400 / 500 / 600 / 700 — 500 measures exactly like 400 because
   no face declares it, while 600 and 700 are real. Do not use `font-medium`; do not copy the 8-file set.
5. **The counter is not a live region**, and the toast is: the two announcements would collide if both
   were added. Pick one (the toast is the reference's choice).
6. **`Mark all as read` has no disabled state** — it stays active at 0 unread and after the list empties.
7. **The timestamps are frozen copy** (`2 min ago` with `datetime="2026-09-25T13:58"`); the page has no
   clock. Ship the strings.

## 6 — Screenshot analysis (`card-18.jpg`, AVIF 1200 × 972 behind a `.jpg`)

The listing image is a **browser-window mockup**: macOS traffic lights and a `preview.colorlib.com` bar
above a 1,200-wide render of the same page. It matches the live DOM 1:1 — four cards, same copy, same
order, same dot on the first three, same read card at the bottom, quote on card 1 — so it is a **second
confirmation** rather than extra information. Two things it settles that the sheet alone would not:

- the **buttons are regular weight** (§3.5) — the mockup shows *Mark as read* at the same optical weight
  as the meta line, not as semibold;
- the **unread tint is barely visible** and the state reads mainly from the border plus the dot, which is
  why the port must keep all three signals.

Convert before viewing (`curl` returns `image/avif` under a `.jpg` name; `vision_analyze` rejects it):
`python3 -c "from PIL import Image; Image.open('card-18.jpg').convert('RGB').save('card-18.png')"`.

## 7 — Source → React adaptation

| reference                                    | in `apps/notebell` |
| -------------------------------------------- | ------------------ |
| `li.is-unread` + `::after` dot               | `read: boolean` in state; a real `<span aria-hidden>` dot with the same 9 px / `top-5 right-[18px]` geometry |
| `--cl-card18-c` inline per card              | `avatar.color` in the data, applied as a `style` custom property or a fixed token per item |
| click delegation on the `<ul>`               | `onToggleRead(id)` / `onArchive(id)` handlers per card — one state machine, no DOM reading |
| `refresh()` counting `is-unread` in the DOM  | derived `unreadCount` from state |
| `lastArchived` closure variable              | `archived: { item: Notification; index: number } \| null` |
| `setTimeout(done, 250)` + `.is-leaving`      | `onTransitionEnd` (with a 250 ms safety timeout) and an immediate path under `useReducedMotion` |
| `:has(span:not(:empty))` toast styling       | conditional classes keyed off `message` |
| `font: inherit` beating the sheet            | `text-[15px] font-normal` / `text-[14px] font-normal` on buttons (defect 1) |
| `all: revert` + `[hidden]` repair            | drop both; conditional-render |
| `<time datetime>` + frozen labels            | keep `dateTime` and the labels verbatim |
| no footer                                    | one Component Dock line under the panel |

Suggested split: `App.tsx`, `components/Inbox.tsx` (state machine), `InboxHeader.tsx`,
`NotificationCard.tsx`, `NotificationAvatar.tsx`, `Toast.tsx`, `EmptyNote.tsx`, `icons.tsx`,
`lib/inbox.ts` (pure reducer), `data.ts`.

## 8 — Sibling comparison (same `card` family)

| slug | new name | device | how Notebell differs |
| ---- | -------- | ------ | -------------------- |
| `card-14` | **baylist** | property listing cards, photo-led, heart toggle | Notebell has **no images**, a counter, a destructive action and an undo — the first card design whose layout changes as the user acts |
| `card-16` | **tonearm** | audio/product card | Notebell's state is read/unread, not a selected variant; no gradients on the surfaces |
| `card-17` | **isobar** | three unequal weather panels | Notebell is one column of four equal-width rows whose **heights differ by content**, not by design |
| `card-18` | **notebell** | notification inbox | the family's first stateful list and its first dark-only ground (`#0d0f14`) |

Shared family habits worth checking instead of re-deriving: the `:where(html) …` reset block (16 rules,
never port it), the dead `.cl-icon` selector, the unreferenced 500 font pair, and a `@media
(prefers-reduced-motion: reduce)` block that only touches transitions.

## 9 — Traps met while measuring (for the next prep run)

- **Measure the fresh page for anything a flow can remove.** The quote and the sixth SVG live in card 1;
  after the archive flow runs, `document.querySelector('.cl-card18__quote')` returns `null` and
  `getComputedStyle(null)` throws inside `page.evaluate` — a crash, not a failed assertion. Read static
  geometry **before** the interaction script, or reload.
- **`document.fonts.check('500 15px "Instrument Sans"')` returns `true`** even though no 500 face exists
  — the API reports "a usable face exists", not "this weight is declared". Count `CSSFontFaceRule`s (6)
  and compare canvas widths (234 vs 244 vs 248) before claiming a weight is real.
- **A button's `getComputedStyle().font` is the truth, not the sheet.** Three font declarations in this
  file are dead; only the computed read (and the screenshot) shows it.
- **`body.scrollWidth === clientWidth` is not enough for a wrap claim** in this design: the action row
  wraps without any overflow, so the wrap point has to be found by reading the row's **height** (36.5 →
  81), not by looking for a scrollbar.
- **Two buttons' widths differ by 16 px** (`Mark as read` 113 vs `Mark as unread` 129) and that alone
  moves the wrap threshold from viewport 364 to 380 — always measure the widest label variant.
