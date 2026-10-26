# Banter — design notes (`card-20` → `apps/banter`)

ColorLib **Card V20**, twentieth and **last** of the twenty `card` snippet variants — and the only
*social feed* in the family. Reference fetched 2026-10-26 with `curl -4` + Playwright 1.62 (Chromium):
the live preview `https://preview.colorlib.com/theme/bootstrap/card-20/` (HTTP 200, 6,483 B) and the
archive `preview.colorlib.com/downloads/free/card-20.zip` (HTTP 200, 370,739 B). Tokens come from the
stylesheet and were then re-read from `getComputedStyle` / `getBoundingClientRect` on the rendered page
at sixteen widths. Where a stylesheet declaration and the render disagree, **the render wins** and the
disagreement is listed in §5.

Files: `openspec/specs/template-banter/spec.md` (authority) · `docs/templates/banter/tasks.md` (build
order). Local artefacts kept for this run: `/tmp/c20/{index.html,style.css,snippet.js,card-20.zip}`,
`/tmp/c20-sweep.json`, `/tmp/c20-1440.png`, `/tmp/c20-mob.png`, `/tmp/c20-open.png`,
`/tmp/c20-toast.png`, `/tmp/c20-320.png`, `/tmp/card-20-shot.png` (the catalogue screenshot, converted
from AVIF).

## 1 — What this design actually is

Two posts from a community feed, side by side on a warm-grey desk. The left card is a **photo post**
with a long paragraph and a hashtag; the right card is a **link post** with a bordered preview row.
Below each paragraph sits either a full-bleed photograph or a link tile, then a muted engagement line,
then a hairline, then a three-up action bar. Nothing else — no nav, no hero, no footer, no visible
heading, no second row.

What makes it *this* design rather than "two social cards":

- **The pair is unequal and top-aligned.** `align-items: start` — **613.25** beside **358.25**. Any
  version that stretches them (the postbox pattern) is a different design.
- **The photograph is the card's edge, not an element inside it.** Full-bleed, `aspect-ratio: 3/2`,
  no side margin, corners clipped by `overflow: hidden`; the text above it is inset 18 px, so the image
  reads as a window cut in the card.
- **The action bar is a grid of three equal tracks**, each action centred in its track — not a
  left-aligned flex row. That is why *Like 248* sits at x 27 while *Comment* sits at x 136.
- **Interaction is real and local.** Like flips `aria-pressed` and formats its count with
  `Intl.NumberFormat('en-US')`; Comment opens an inline reply row that **grows the card** by 64.5;
  Share copies the post URL. None of it touches the static engagement line above.
- **Two avatars, two inline colours** (`#0e7490`, `#9333ea`) — the only saturated colours on the page
  besides the hashtag/liked red and the link tile's gradient.

It is the family's **first and only social card**: every sibling (`card-01` … `card-19`) is a product,
pricing, testimonial, listing or form card. It is also the family's **first card with no visible
heading** (the `h1` is visually hidden) and the **first with three mutually-similar controls** on one
hairline.

## 2 — Section order (exact, no invented sections)

```
body                    #eef0f4, Onest 16/1.5
└ main.cl-card20-demo              max-width 1100, margin auto, padding clamp(28px,5vw,64px) 16px
  ├ h1.cl-card20__sr              "Community feed"        (visually hidden — 1px, clipped)
  ├ div.cl-card20-feed            auto-fit minmax(min(100%,420px),1fr), gap 22, align-items start
  │ ├ article.cl-card20           aria-labelledby="cl-card20-a1"        PHOTO POST
  │ │ ├ header.cl-card20__head          flex, gap 12, padding 16 16 0 18      → 537 × 60
  │ │ │ ├ span.cl-card20__avatar        "NT", style="--cl-card20-c:#0e7490"    → 44 round
  │ │ │ ├ div.cl-card20__who
  │ │ │ │ ├ h2.cl-card20__name  id=cl-card20-a1   "Noa Tamura <span.__handle>@noatrails</span>"
  │ │ │ │ └ p.cl-card20__time   <time datetime="2026-09-25T08:14">6 h ago</time> · Trail Runners Club
  │ │ │ └ button.cl-card20__more        aria-label="More options for …"        → 38 round, inert
  │ │ ├ p.cl-card20__text               15/22.5, margin 12 18 14
  │ │ │ └ a.cl-card20__tag              "#trailrunning"    (the card's only <a>)
  │ │ ├ img.cl-card20__img              images/hike.jpg 900×600, 3/2, full-bleed  → 537 × 358
  │ │ ├ div.cl-card20__stats            "Sam, Priya and others liked this" | "18 comments · 6 shares"
  │ │ ├ div.cl-card20__bar              repeat(3,1fr), gap 4, margin 0 10, border-top, 6 0 8
  │ │ │ ├ button.cl-card20__act.cl-card20__like   aria-pressed=false data-count=248
  │ │ │ │ └ span.cl-card20__count       data-cl-card20-count → "248"
  │ │ │ ├ button.cl-card20__act         aria-expanded=false aria-controls=cl-card20-reply1  "Comment"
  │ │ │ └ button.cl-card20__act         data-cl-card20-share="https://example.com/posts/48213"  "Share"
  │ │ └ form.cl-card20__reply  id=cl-card20-reply1  action="#"  hidden          → 64.5 when open
  │ │   ├ span.cl-card20__avatar.cl-card20__avatar--me   "YOU"                   → 36 round
  │ │   ├ label.cl-card20__sr  for=cl-card20-in1
  │ │   ├ input.cl-card20__input  type=text  placeholder="Write a comment…"   → pill 999
  │ │   └ button.cl-card20__send  type=submit  "Post"
  │ └ article.cl-card20           aria-labelledby="cl-card20-a2"        LINK POST
  │   ├ header…  LB / #9333ea / "Leo Brandão @leobuilds" / Yesterday · Public
  │   ├ p.cl-card20__text.cl-card20__text--big     17/25.5, no tag
  │   ├ a.cl-card20__link            flex, gap 14, padding 12, border, radius 14   → 501 × 90
  │   │ ├ span.cl-card20__link-art   64 × 64, radius 12, gradient 135deg #9333ea→#2563eb, code glyph
  │   │ └ span.cl-card20__link-text  <strong>title</strong><span>code.example.com</span>
  │   ├ div.cl-card20__stats        "Ana, Kofi and others liked this" | "96 comments · 41 shares"
  │   ├ div.cl-card20__bar          like aria-pressed=TRUE data-count=1204 · comment · share
  │   └ form.cl-card20__reply  id=cl-card20-reply2  hidden
  └ p.cl-card20-demo__status      role="status"  position: fixed, bottom 24, empty at rest
```

Nothing else: **1** `<main>`, **2** `<article>`, **2** `<form>` (both hidden), **10** `<button>`,
**2** `<a>`, **1** `<img>`, **9** `<svg>`, **0** icon library, **0** external requests beyond the
stylesheet, the script and the font.

## 3 — Section-by-section fidelity notes

### 3.1 The ground and the stage

`body { margin: 0; background: #eef0f4 }` — a cool warm-grey (measured `rgb(238,240,244)`), not
`#f9fafb` and not white. `main` is `max-width: 1100px; margin: 0 auto; padding: clamp(28px,5vw,64px)
16px`, so at 1,440 the border box is **1132** at x **154** and the feed starts at x **170**, y **64**.
The page's content is **741.25** tall; the document reports 900 only because the viewport is the floor.

### 3.2 The feed — the only layout decision

`display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
align-items: start; gap: 22px`.

- Two columns need **862** px of content (2 × 420 + 22) ⇒ the split happens at viewport **894**, and
  **893** is a single **861** column.
- There is **no width media query in the file** — the sheet's only `@media` is
  `prefers-reduced-motion`. Do not translate this into `md:` / `lg:`: Tailwind's `md:` is 768 and
  would be 126 px early.
- `align-items: start` is what keeps **613.25 / 358.25**; `stretch` (the family's other pattern)
  would give 613.25 / 613.25 and change the design.

### 3.3 The header row

`padding: 16px 16px 0 18px`, `gap: 12`, `align-items: center` → **537 × 60**. The avatar is **44**
round with **14 / 700** white initials on its inline `--cl-card20-c`. The name is an `h2` at **15.5 /
700 / 1.3**, and the handle is an **inline `<span>` inside that h2** at weight **400** — not a sibling
line. The meta line is **13 / 1.5** in `#525c6b` and mixes a real `<time datetime="2026-09-25T08:14">`
with a `&middot;` and an audience string. The `⋯` button is **38 × 38** and **does nothing**: it has an
`aria-label` naming the author and no menu behind it. Keep it inert; do not invent a dropdown.

At 320 the name and handle wrap onto separate lines (*"Noa Tamura"* / *"@noatrails"*) because the `who`
column is only **320-ish** wide there — that is the reference's behaviour, not a bug.

### 3.4 The text row

`margin: 12px 18px 14px`, **15 / 22.5**, three lines (**501 × 67.5**) on the photo card. The hashtag is
an inline `<a>` in `#1d4ed8` at weight **600**, underline only on hover. The link card swaps to
`__text--big` (**17 / 25.5**, three lines, **76.5**) — a deliberate size step, not a mistake.

### 3.5 The photo (full-bleed trap)

`display: block; width: 100%; height: auto; aspect-ratio: 3 / 2; object-fit: cover` with **no** margin
(only the text above carries the 18 px inset). At a 539 card the img is **537 × 358** starting at x
**171** — the card's own border box — so its corners are cut by `border-radius: 20` + `overflow:
hidden`. Two ways to get this wrong: adding `mx-[18px]` (inset, wrong) or `rounded-xl` on the image
(visible seams, wrong). The archive's photograph is **900 × 600**, 113,256 B; the port uses
`picsum.photos/seed/banter-1/900/600` and keeps a descriptive `alt`.

### 3.6 The link preview (the card's third row)

`margin: 0 18px 4px; padding: 12px; border: 1px solid #e8eaef; border-radius: 14px; display: flex;
align-items: center; gap: 14px` → **501 × 90**, hover `#f8fafc`. The tile is **64 × 64**, radius
**12**, `linear-gradient(135deg, #9333ea, #2563eb)` with a white two-chevron code glyph at **28** px
and `stroke-width 2` — the only gradient on the page. The text column is `min-width: 0` so a long
title truncates instead of pushing the tile.

### 3.7 The engagement line

`display: flex; flex-wrap: wrap; justify-content: space-between; gap: 6px 12px; padding: 12px 18px`,
**13.5 / 20.25** (the card's 1.5 line-height), `#525c6b` → **44.25** on one line, **70.5** when the
right group wraps below ~430 px. It is **static copy**: liking, commenting and posting never change it
(even *"18 comments"* stays 18 after a comment is posted). Reproduce that as data, not state.

### 3.8 The action bar

`grid-template-columns: repeat(3, 1fr); gap: 4px; margin: 0 10px; padding: 6px 0 8px; border-top: 1px
solid #e8eaef` → **517 × 55.5** with three **169.66 × 40.5** tracks. Each action is
`inline-flex; justify-content: center; gap: 7px; padding: 9px 6px; border-radius: 10px`, colour
`#374151`, icons **20** px at `stroke-width 1.9` (round caps and joins). Hover is `#f3f4f6`.

Three states carry colour: pressed like → `#be123c` + `fill: currentColor`; expanded comment →
`background #eff6ff` + `color #1d4ed8`; nothing for share.

**The label type is the trap**: authored `font-size: 14.5px; font-weight: 600`, **rendered 15 / 400**
(see §5.1). The count span is a `<span>`, so it *does* get its **500** weight and `tabular-nums` — the
row mixes a 500 number into 400-weight labels, and that is how the screenshot looks.

### 3.9 The reply row

Hidden at rest. When open: `display: flex; align-items: center; gap: 10px; padding: 4px 16px 16px` →
**64.5** tall, occupying y **676.25 → 740.75** and growing the card **613.25 → 677.75**. Contents:
a **36** px *YOU* avatar on `#374151` at **10 / 700**, a **999** radius input (`padding: 10px 14px`,
`1px solid #d1d5db`, `#f9fafb`, **15** px, placeholder *"Write a comment…"*, focus → 2 px `#93c5fd`
ring and a white background), and a **999** radius Post pill in `#1d4ed8` (`padding: 9px 16px`, hover
`#1e40af`).

### 3.10 The toast

One `p[role="status"]` at the end of `<main>`: `position: fixed; left: 50%; bottom: 24px;
transform: translateX(-50%); padding: 10px 16px; border-radius: 12px; background: #111827; color:
#fff; font-size: 14px; font-weight: 500; box-shadow: 0 12px 28px -12px rgba(0,0,0,.5); transition:
opacity .2s`. Empty → `padding: 0; opacity: 0` (no invisible click-blocker — keep that). Measured
**151 × 38** for *"Comment posted."* at a 1,280 viewport, x **564.5**, y **838**. Two hard-coded
messages plus an error template: *"Comment posted."*, *"Link copied to clipboard."*,
*"Copy this link: <url>"*. Timer: **2,600 ms**, cleared and restarted on each announcement.

## 4 — The numbers at 1,440 (measured)

| part        | geometry                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------- |
| `main`      | 1132 × 741.25 at x 154 — `padding: 64px 16px`                                                    |
| feed        | 1100 × 613.25 at (170,64) — `auto-fit minmax(min(100%,420px),1fr)`, gap 22, start                |
| photo card  | 539 × **613.25** at (170,64)                                                                     |
| link card   | 539 × **358.25** at (731,64)                                                                     |
| header      | 537 × 60 at (171,65); avatar 44 at (189,81); who 397 at x 245; name 20.14 tall; meta 19.5 tall; `⋯` 38 × 38 at (654,84) |
| text        | 501 × 67.5 at (189,137) — 15/22.5 × 3, margin 12 18 14                                            |
| photo       | 537 × 358 at (171,218.5) — 3:2, cover, full-bleed                                                |
| link row    | 501 × 90 at (750,227.5); tile 64 × 64 at (763,240.5)                                              |
| stats       | 537 × 44.25 at (171,576.5) / (732,321.5)                                                          |
| bar         | 517 × 55.5 at (181,620.75) / (742,365.75); action 169.66 × 40.5                                   |
| reply (open)| 64.5 at y 676.25; card 613.25 → **677.75**                                                        |
| toast       | 151 × 38 at (564.5,838) in 1280 × 900                                                             |

Widths sweep: `/tmp/c20-sweep.json` (16 viewports, columns / heights / padding / scroll checks).

## 5 — Where the render disagrees with the stylesheet

1. **The action labels and Post are 15 / 400, not 14.5 / 600 and 14 / 600.**
   `.cl-card20 button { font: inherit }` has specificity **(0,1,1)**; `.cl-card20__act { font-size:
   14.5px; font-weight: 600 }` and `.cl-card20__send { font-size: 14px; font-weight: 600 }` are
   **(0,1,0)**. The `font` shorthand also resets `font-family`, so the portions of those rules that
   lost are simply dead. Measured on the live page: `15px / 400` on all three actions and on Post.
   **Port the measured type.** If a 600-weight label is used instead, the bar's text gets wider and the
   three labels need 20+ more px, which makes the 320 px clipping (5.3) worse.
2. **`.cl-icon` is declared and never used** — a leftover in the twelfth consecutive card of this
   family (`fill: currentColor; height: 1em; width: auto`). The markup has **no** `.cl-icon`. Do not port.
3. **The bar overflows its card below ~345 px.** The labels are `white-space: nowrap` and measure
   105 + 110 + 79 = **302** px with two 4 px gaps; the bar's content box is **266** at a 320 viewport.
   The grid tracks stay at 1fr, so the buttons overflow their cells and `overflow: hidden` on the card
   cuts the third one: *Share* loses **26** px at 320 (**6** px at 340), and the page still reports no
   horizontal scroll because the overflow is clipped. Fix in the port with `min-w-0` tracks plus a
   tighter gap/padding under 360.
4. **`Escape` is bound to the input only.** `input.addEventListener('keydown', …)` — pressing Escape
   while Post is focused leaves the form open with `aria-expanded="true"`. Bind at the form.
5. **An empty submit is silent**: `preventDefault`, focus the input, return. No toast, no
   `aria-invalid`, no message. Add one line of copy through the same live region.
6. **The toast's error text is not copyable** (`"Copy this link: https://example.com/posts/48213"` in a
   2.6 s toast). Keep the messages but give the user a selectable/copyable fallback.
7. **`--cl-card20-c` has no fallback**: an avatar without the inline variable paints a transparent
   disc with invisible white initials. Use tokens per variant in the port.
8. **Two robots metas + a cdnjs `dns-prefetch` + `fetchpriority` / `decoding`** on the live HTML are
   preview-host artifacts (240 B between archive and live) — ignore.
9. **Every 16-rule `:where(html)` block is a host-page reset**, not design: `all: revert` on ~60
   elements plus a `[hidden]` repair that exists *only because* `all: revert` would otherwise re-show
   hidden elements. Do not port the reset; Tailwind preflight already owns this. If `hidden` is ever
   overridden in the port, remember the repair.

## 6 — Behaviour map (measured by driving the live page)

| trigger                    | resulting state                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------- |
| like, 1st click            | `aria-pressed="true"`, `data-count` 249, label *249*, `#be123c`, heart filled, 0.45 s beat, card unchanged |
| like, 2nd click            | back to 248, grey, unfilled                                                                          |
| like on link card          | 1,204 → `data-count` 1203, label *1,203* (formatted), pressed → false                                |
| comment open               | `aria-expanded="true"`, form unhidden (64.5), focus input, button `#eff6ff`/`#1d4ed8`, card **677.75** |
| comment close (button)     | form hidden, `aria-expanded="false"`, card **613.25**                                               |
| `Escape` in input          | closes, focus returns to the Comment button                                                          |
| `Escape` on Post           | **nothing** (defect)                                                                                 |
| submit empty               | focus back to input, form stays open, **no** message (defect)                                        |
| submit valid               | input cleared, *"Comment posted."* 2,600 ms, form **stays open**, focus on Post, stats unchanged      |
| share (fine pointer)       | `clipboard.writeText(...)` → *"Link copied to clipboard."*                                            |
| share (coarse pointer)     | `navigator.share({ url })`, no toast                                                                 |
| share (rejected)           | *"Copy this link: https://example.com/posts/48213"* for 2,600 ms                                      |

Cards are fully independent: nothing in card 1's state touches card 2's.

## 7 — Type, colour, contrast

One family (**Onest**, variable, 400–700 real, 800 clamps to 700), six roles: name 15.5/700, handle
15.5/400 muted, meta 13/19.5 muted, body 15/22.5 (17/25.5 on the link card), engagement 13.5/20.25
muted, labels 15/400 `#374151` with a 500 count, Post 15/400 white, toast 14/500.

Colour is six values plus two avatar fills: ground `#eef0f4`, ink `#111827`, muted `#525c6b`, link
`#1d4ed8`, liked `#be123c`, hairline `#e8eaef`, tile gradient `#9333ea → #2563eb`, avatars `#0e7490` /
`#9333ea`, hover `#f3f4f6`, expanded `#eff6ff`. Every text pair clears **AA** (lowest measured:
placeholder 4.63 : 1, avatars 5.36 / 5.38 : 1); the two weak non-text pairs are the **1.47 : 1** input
border and the **1.80 : 1** focus ring, both of which the port should keep *and* pair with the hover
fill as a second cue.

## 8 — Traps, in the order they bite

1. `align-items: stretch` instead of `start` — the cards must stay unequal.
2. A `md:`/`lg:` breakpoint instead of the `auto-fit` grid — the switch is **894 / 893**, not 768.
3. Insetting the photograph with `mx-[18px]` or rounding it separately — it is full-bleed and clipped
   by the card.
4. Making the bar a `flex justify-between` row — it is `repeat(3,1fr)`, which is why the labels sit at
   27 / 136 / 250 on a 320-wide card.
5. "Fixing" the action labels to 14.5 / 600 — that is authored, never rendered; measure, don't read.
6. Forgetting the count's **500** weight while matching the labels' 400 — the row looks subtly wrong.
7. Overlaying the reply row (absolute/`position`) — it is in flow and grows the card by 64.5.
8. Wiring the engagement line to the like state — it is frozen copy, *"18 comments · 41 shares"* and all.
9. Giving the `⋯` button a menu — no menu exists.
10. Starting the link card unliked — it ships **pressed at 1,204**.
11. Using `font-extrabold` / 800 — Onest's axis tops out at 700 and 800 measures identically.
12. Reimplementing the 16 `:where(html)` reset rules — preflight owns them.

## 9 — Reference quirk worth keeping

The card has **no `.cl-card20__text` bottom margin symmetry**: `12px 18px 14px`. On the photo card the
14 px is the gap to the image; on the link card it is the gap to the preview, whose own bottom margin
is 4. Getting those two numbers right is what puts the stats row at y **576.5** / **321.5**.
