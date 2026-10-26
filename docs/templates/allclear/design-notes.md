# Allclear — design notes

Recreation of the ColorLib **Alert V02** design (`alert-02`). Runtime `apps/allclear`; spec
`openspec/specs/template-allclear/spec.md`; tasks `docs/templates/allclear/tasks.md`.

## 1. The reference, measured

| file | live | archive (`downloads/free/alert-02.zip`, 253,874 B) |
| ---- | ---- | -------------------------------------------------- |
| `index.html` | **6,230 B**, `<title>` "Alert V02 \| Colorlib", `lang="en"` | 6,027 B — differs only in the `<head>` (`robots` ×2, `dns-prefetch`, `?v=`, `fetchpriority`) |
| `css/style.css` | **10,141 B**, 425 lines, sha256 `3c50ebde42dd…` | byte-identical |
| `js/snippet.js` | **2,623 B**, 75 lines, sha256 `ebf0a63a5d50…` | byte-identical |
| `fonts/` | — | **10 × woff2**, only **2 distinct binaries** (`latin` 27,272 B, `latin-ext` 21,688 B) |
| `images/` | — | **absent**, although the README lists it |

Identical CSS **and** JS hashes mean the live preview is verified and the archive is its un-versioned
twin — so either source can be used for a re-check. The sheet declares **8** `@font-face`
(400 / 600 / 700 / 800 × two ranges) and never declares 500, while shipping five `-500-` files that are
byte-identical to the 400 ones (a variable cut, not a static family).

Rule census: **53** style rule blocks (48 top-level + 3 inside the 480 query + 2 inside the
reduced-motion query), **133** selectors, **5** custom properties, **2** `transition` declarations,
**0** `@keyframes`, **0** `@supports`, **0** container queries, plus **9** `:where(html) … { all: revert }`
guard rules (31 selectors) that exist only to shield the snippet from a host page's reboot.

## 2. DOM skeleton (live, indentation mine)

```
main.cl-alert02-demo
└─ section.cl-alert02[aria-labelledby=cl-alert02-title]
   ├─ header.cl-alert02__head
   │  ├─ div
   │  │  ├─ h1.cl-alert02__heading#cl-alert02-title[tabindex=-1]   "Project Atlas"
   │  │  └─ p.cl-alert02__sub                   "Mobile app redesign · Sprint 14 of 18"
   │  └─ p.cl-alert02__count                    <span data-…-count>4</span> notices
   ├─ ul.cl-alert02__list[aria-label="Project notices"]
   │  └─ li.cl-alert02__item × 4
   │     └─ div.cl-alert02__inner
   │        ├─ div.cl-alert02__msg.cl-alert02__msg--{violet,green,amber,rose}[role=status|alert]
   │        │  ├─ span.cl-alert02__badge[aria-hidden] > svg 20×20
   │        │  └─ div.cl-alert02__text
   │        │     ├─ p.cl-alert02__title
   │        │     └─ p                       body copy
   │        └─ button.cl-alert02__close[aria-label="Dismiss: <title>"] > svg 18×18
   ├─ div.cl-alert02__empty[hidden]  > svg 28 + p "You are all caught up."
   └─ footer.cl-alert02__foot
      ├─ button.cl-alert02__restore[hidden]    "Show dismissed notices"
      └─ p.cl-alert02__live[role=status]       narration
```

## 3. Token block (copy into `@theme`)

```css
/* ground */
--color-ground:  #eceafd;
--color-bloom-a: #d9d3ff;   /* radial 50% 45% at 10% 0%   */
--color-bloom-b: #cfe9ff;   /* radial 45% 45% at 100% 100% */
/* ink */
--color-ink:    #1c1a33;
--color-muted:  #5b5876;
--color-focus:  #5b3fe0;
/* row chrome */
--color-row:    #ffffff;
--color-close-hover:  #f0eef9;
--color-close-active: #e4e0f6;
--color-restore-hover: #38345e;
--color-empty-border:  #c9c3ec;
/* tones: glyph / tile */
--color-violet: #6d4aff;  --color-violet-soft: #efebff;
--color-green:  #0f8a5f;  --color-green-soft:  #e2f6ec;
--color-amber:  #b45309;  --color-amber-soft:  #fdf0dc;
--color-rose:   #d0264f;  --color-rose-soft:   #fde6ec;
--speed: .38s;
```

```css
.cl-alert02 { max-width: 620px; padding: 28px; border-radius: 24px;
  background: rgba(255,255,255,.72);
  box-shadow: 0 30px 60px -32px rgba(60,40,160,.35),
              inset 0 0 0 1px rgba(255,255,255,.8);
  color: #1c1a33; line-height: 1.5; }
.cl-alert02__msg { display:flex; gap:14px; align-items:flex-start;
  padding: 16px 56px 16px 16px; border-radius: 16px; background:#fff;
  box-shadow: 0 1px 2px rgba(28,26,51,.06), 0 8px 20px -12px rgba(28,26,51,.25); }
.cl-alert02__badge { width:40px; height:40px; border-radius:12px;
  display:grid; place-items:center; background:var(--soft); color:var(--tone); }
```

## 4. Layout arithmetic — three bands, one inverted step

The panel is **`content-box`** (the sheet's `*` rule targets descendants only), so:

| vw            | outer        | padding | content        |
| ------------- | -----------: | ------- | -------------: |
| ≥ 709         | **676**      | 28      | **620**        |
| 708 → 481     | **vw − 32**  | 28      | **vw − 88**    |
| ≤ 480         | **vw − 32**  | 20 / 16 | **vw − 64**    |

Measured: `708 → 676/620`, `707 → 675/619`, `500 → 468/412`, `481 → 449/393`, **`480 → 448/416`**,
`430 → 398/366`, `320 → 288/256`. So the *content* width **jumps up 23 px** when the viewport drops
from 481 to 480 — the only inverse step in the design.

Vertical padding is `clamp(24px, 7vw, 88px)` on both axes: **88** from vw 1,258 up, `7vw` in between
(1024 → 71.68, 768 → 53.76, 700 → 49, 480 → 33.6), **24** at vw ≤ 343.

Panel height is a sum, not a constant:

```
panelH = padTop + 59 (head) + 18 (head margin) + Σ rows + 6 (footer margin) + footH + padBottom
row    = 12 (inner pb) + msg
msg    = 32 + max(40, 22.5 × titleLines + 2 + 21 × bodyLines)      /* ≥ 481 */
msg    = 28 + max(34, 22.5 × titleLines + 2 + 21 × bodyLines)      /* ≤ 480 */
footH  = 0 at load · 39 while the restore pill shows · 19.5 after a restore
```

1440: `28 + 59 + 18 + 421 + 6 + 0 + 28 = 560`. One dismissal: `… + 310.5 + 6 + 39 + 28 = 488.5`.
All four gone: `28 + 59 + 18 + 0 + 74 + 6 + 39 + 28 = 252`. After restore: `560 + 19.5 = 579.5`.

## 5. The glass panel and its two blooms

```
radial-gradient(50% 45% at 10% 0%,   #d9d3ff 0%, transparent 70%),
radial-gradient(45% 45% at 100% 100%, #cfe9ff 0%, transparent 70%),
#eceafd
```

The panel is 72 % white over that ground, so its effective backdrop runs from ~`rgb(244,243,255)` at the
top-left to ~`rgb(242,249,255)` at the bottom-right — a 1–2 % shift that the eye reads as glass. The
`inset 0 0 0 1px rgba(255,255,255,.8)` hairline is what makes the card edge legible without a border,
and the `0 30px 60px -32px rgba(60,40,160,.35)` shadow is **violet**, not neutral. A grey shadow makes
the card look pasted on.

## 6. Head: 59 px, two parts, one baseline

`display: flex; flex-wrap: wrap; gap: 8px 16px; align-items: flex-end; justify-content: space-between`.
The `h1` block is **231 px** wide at every viewport (single line, 24 px / 800 / −0.02em); the pill is
**88 × 27.5**. Because `align-items` is `flex-end`, the pill's **bottom** aligns with the sub-line's
box bottom — both end at **y 175**, which is the head's bottom edge. Centring the pill instead lifts it
~10 px and makes the header read as two unrelated objects.

The head needs **335 px** of content (231 + 16 gap + 88) to stay on one row, so it wraps at content
**334**, i.e. **vw 398** (`399 → head 59`, `398 → 94.5`, pill y 114.86). This is not a media query in
the source — it is a flex-wrap consequence, and it must stay one in the port.

## 7. Rows: white on glass, tone only in the tile

All four rows are opaque `#fff`; the `tone`/`soft` pair paints **only** the 40 px tile glyph and ground.
`gap: 14px`, tile 40, text column `content − 16 − 56 − 40 − 14` = **494** at 1440. The right inset is
**56** (not 16) to clear the absolutely-positioned close button; the button itself is **36 × 36** at
`top: 10px; right: 10px`, i.e. 6 px inside the 16 px text inset.

Vertical rhythm: `li` heights are the sum of their copy, and consecutive rows **touch** — the 12 px
breathing space is `.cl-alert02__inner { padding-bottom: 12px }`. Nothing in the list is a `gap`, a
margin, or a divider.

## 8. The dismissal mechanism (the part that is easy to fake wrong)

```css
.cl-alert02__item { display: grid; grid-template-rows: 1fr;
  transition: grid-template-rows var(--speed) cubic-bezier(.4,0,.2,1),
              opacity calc(var(--speed) * .6) ease,
              transform var(--speed) cubic-bezier(.4,0,.2,1); }
.cl-alert02__item.is-leaving { grid-template-rows: 0fr; opacity: 0; transform: translateX(24px); }
.cl-alert02__inner { position: relative; min-height: 0; overflow: hidden; padding-bottom: 12px; }
```

* `0fr` collapses **only** because the inner has `min-height: 0` (plus `overflow: hidden`). Without it
  the child's min-content height keeps the track open and the row does not move.
* The inner's `padding-bottom: 12px` is **not** in the animated track, so the row collapses to a **12 px
  sliver** and stays there until `hidden` lands: measured 260 ms → 12 px, 361 ms → 12 px,
  **411 ms → 0** (the script's `transitionend` listener on `grid-template-rows`, with a 600 ms guard).
* Count, empty box, restore pill, live text and focus all change **on click**; at 30 ms the row is still
  110.5 tall and the count already reads 3.
* `prefers-reduced-motion: reduce` → `--speed: 0s`, `transform: none`, and the script calls `finish()`
  **synchronously**, so `hidden === true` in the same task. CSS-only handling leaves a 600 ms ghost.

Timing samples (1440, row 1): 57 ms → 108.3 px / .82 · 108 → 91.8 / .37 · 158 → 43.9 / .08 ·
210 → 21.3 · 260–361 → 12 · 411 → 0.

## 9. Empty state, restore, and the narration

`div.__empty` is a sibling of the `<ul>`, `hidden` at load, `display: flex; gap: 12px; align-items:
center; padding: 22px; border: 1.5px dashed #c9c3ec; border-radius: 16px`, so the panel collapses to
**252** with a **74 px** dashed box carrying a 28 px inbox glyph and "You are all caught up." at
16 px / 600 / 24. `button.__restore` is a 999-radius ink pill, `padding: 9px 16px`, 14 / 700 →
**207 × 39**; it appears on the **first** dismissal (`restore.hidden = n === items.length`) and drives
the footer's 39 px height.

`p.__live[role=status]` is a **separate** region from the rows' static `role=status`/`alert`. Its copy
is the only narration: `Dismissed "<title>". <n> notice(s) left.` and `All notices restored.`
The reference pluralises **here** but not in the pill — the pill says "1 notices". Fix the pill.

## 10. Type

One variable face, `Plus Jakarta Sans`, declared at 400 / 600 / 700 / 800 over two binaries. Use a single
Google Fonts link `family=Plus+Jakarta+Sans:wght@400..800` (HTTP 200; the plain family URL is also 200).

| element | size | weight | line-height | tracking |
| ------- | ---: | -----: | ----------: | -------: |
| h1 | 24 | 800 | 36 | −0.02em |
| sub / body | 14 | 400 | 21 | — |
| pill | 13 | 700 | 19.5 | — |
| title | 15 | 700 | 22.5 | — |
| empty text | 16 | 600 | 24 | — |
| restore | 14 | 700 | 21 | — |
| live | 13 | 400 | 19.5 | — |

## 11. Responsive boundaries worth memorising

| boundary | what happens |
| -------- | ------------ |
| **709** | panel hits its 620 content cap (`707 → 619`) |
| **480** | panel padding 28 → 20/16, radius 24 → 20, tile 40 → 34 & radius 10, row padding 16/56 → 14/48; content **widens** 393 → 416; panel 644 → 570 |
| **425 / 422** | row 1 / row 3 titles wrap to 2 lines (text column 253 / 250) |
| **398** | head wraps — the count pill drops below the title block (head 59 → 94.5) |
| **397** | row 1's body reaches 4 lines (text 225) |
| **360** | rows 2 and 4 reach 4 body lines (text 188) |
| **343 → 320** | vertical padding floors at 24; at 320 the document is **952** (vertical scroll only) |
| **1,258** | vertical padding caps at 88 |

No width produces horizontal overflow: `scrollWidth === clientWidth` and `scrollX 0` after
`scrollTo(200,0)` at every width probed from 320 to 1440.

## 12. Semantics and focus

1 `h1` (`tabindex="-1"`, used as the last-resort focus target), 0 other headings, `<ul aria-label>`,
`section[aria-labelledby]`, per-row `aria-label="Dismiss: <title>"`, hidden-until-needed restore pill,
3 × `role="status"` + 1 × `role="alert"` on the rows, and one narration `role="status"`.
Tab order at load = the four × buttons. Focus rings: `2px #5b3fe0` at offset 2 (close), 3 (restore),
4 + radius 4 (`h1`). Every ring clears 6.5:1 on white.

## 13. Screenshot (`alert-02.jpg`, AVIF 1200 × 972 behind a `.jpg` name)

A browser-window mockup — chrome bar, three dots, `preview.colorlib.com` pill, grey canvas — containing
the live composition: gradient ground, one glass card, "Project Atlas" + sub-line + **4 notices** pill on
the same row, four white rows with violet sun / green tick / amber clock / rose `!` tiles and a grey × at
each right edge (**all four × are present**, including the fourth row at ~(838, 561)). The amber row is
visibly shorter (one line of copy). Colours match the measured palette; the frame is the listing site's
chrome and must **not** be reproduced.

## 14. Traps

| trap | consequence |
| ---- | ----------- |
| `max-w-[620px]` with Tailwind's border-box | card is 620 outer instead of **676**; every column 28 px left |
| a list `gap` instead of the inner's `pb-3` | rows 12 px apart *and* the collapsed row leaves no sliver — the animation loses its last frame |
| `grid-template-rows: 0fr` without `min-height: 0` | the row never collapses |
| a `height`/`max-height` animation | no track collapse, no smooth close-up of the stack |
| unmounting the row on click | the 380 ms animation never plays; the confirm-then-move feel is lost |
| updating count/live after `transitionend` | the number lags the click by 400 ms |
| tinted row grounds (copying `alert-01`'s quads) | four coloured cards where the reference has four white ones |
| `bg-white/70` without the gradient | flat lavender ground; the two corner blooms are gone |
| a neutral shadow | `rgba(60,40,160,.35)` is violet — grey makes the card look pasted on |
| centring the count pill | pill floats 10 px above the head's baseline |
| a `min-h` to equalise rows | hides the amber row's genuine 89.5 |
| `font-medium` anywhere | renders as 400 (no 500 face) |
| porting the `all: revert` guard block | undoes Tailwind preflight |
| leaving "1 notices" | the one copy defect the port is supposed to fix |

## 15. Sibling comparison — `alert-01` (noticeboard) vs `alert-02` (allclear)

| | `alert-01` → noticeboard | `alert-02` → allclear |
| --- | --- | --- |
| product | severity ladder, static | dismissable inbox, stateful |
| ground | cool grey `#f5f6f8`, flat | lavender + two blooms, glass panel |
| column | 680 content, `border-box` main | **620 content / 676 outer**, `content-box` panel |
| rows | tint quads (bg + border + title + icon) | white rows, tone only in the icon tile |
| controls | **0** | **5** buttons (4 × + restore) |
| script | none | 2,623 B; grid-track collapse + focus handoff |
| motion | none | 380 ms collapse, 228 ms fade, 24 px slide, reduced-motion branch |
| radius | 12 | 24 panel / 16 row / 12 tile |
| type | Inter, 3 weights | Plus Jakarta Sans, 4 declared weights (axis) |
| wrap edge | panel cap 712, intro 671 | cap 709, head 398, titles 425/422, body 397 |
| defects | `--info` unstyled, `.cl-icon`, README lies | `--violet` unstyled, `.cl-icon`, "1 notices", README's `images/` |

Both are single-screen, no-footer-band demos, and both belong to the same `## Bootstrap Alerts (12)`
section — so the port must not borrow `alert-01`'s tint-quad token shape.

## 16. Re-verify a claim

```sh
curl -4 -s https://preview.colorlib.com/theme/bootstrap/alert-02/ | sed -n '1,120p'
curl -4 -s https://preview.colorlib.com/theme/bootstrap/alert-02/css/style.css | sha256sum
#   → 3c50ebde42dd47029930e2ca63b0da24e329fdae3060ca314761c888e62eb0a2
curl -4 -s https://preview.colorlib.com/theme/bootstrap/alert-02/js/snippet.js | sha256sum
#   → ebf0a63a5d50e2d34b553cf2dfef24c3020b2699009ef9037bf5ae55f916a6dd
curl -4 -s -o /tmp/a.zip https://preview.colorlib.com/downloads/free/alert-02.zip   # 253,874 B

# geometry (no browser): panel outer = min(620, vw − 88) + 56 until vw 708, then 676;
# at ≤ 480 outer = vw − 32 with 16 px padding; rows = 12 + msg; head = 59 (+35.5 when wrapped)
NODE_PATH=/root/free-templates-firebase/node_modules node /tmp/alert02/measure.mjs
```

The arithmetic is closed-form, so every height in the spec can be re-derived without a browser; the
behaviour (focus target, live text, sliver, reduced-motion path) needs the DOM and therefore a page load.
