# Oncoming — design notes (replication research)

Source: ColorLib **Coming Soon V11** —
https://colorlib.com/wp/template/comingsoon_11/ (source slug `comingsoon_11`;
ColorLib page HTTP 200, 109,272 B, `text/html; charset=UTF-8`, page title
"Coming Soon V11 - Free Website Template 2026 - Colorlib", description "An
impressive free website template for quickly setting up a coming soon page
without building it from the ground up." — verified 2026-10-11). The theme
preview `https://preview.colorlib.com/theme/comingsoon_11/` returns **HTTP 404**
(9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same live-preview gap
as the rest of the `comingsoon_*` family; there is no `theme/bootstrap/<slug>/`
variant either). Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_11.zip`
(HTTP 200, 700,942 B, `application/zip`) — the real template's own files — as the
DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-11.jpg`
(HTTP 200, 45,662 B, served as `image/avif` — this slug is AVIF, not JPEG —
1200×972).

Reference artifacts: `/tmp/cs11/cs11.zip`, extracted to
`/tmp/cs11/out/comingsoon_11/` (`index.html` 4,939 B · `css/style.css` 8,561 B ·
`js/snippet.js` 2,997 B · `README.md` 1,261 B · `images/bg01.jpg` 1900×900,
142,089 B · `images/bg02.jpg` 1900×900, 135,048 B · `images/bg03.jpg` 1900×900,
164,461 B · `images/bg04.jpg` 1900×900, 118,402 B · `images/icons/logo.png`
119×22 RGBA, 1,741 B · `images/icons/favicon.ico` 32,038 B ·
`fonts/Lato-Hairline.woff2` 30,856 B · `fonts/Lato-Regular.woff2` 32,652 B ·
`fonts/PlayfairDisplay-Italic.woff2` 75,304 B), screenshot saved to
`/tmp/cs11/shot.avif` + `/tmp/cs11/shot.jpg` (1200×972), photo previews to
`/tmp/cs11/bg01_s.jpg` … `/tmp/cs11/bg04_s.jpg` and `/tmp/cs11/bg_montage.jpg`
(1120×530), ColorLib page saved to `/tmp/cs11/src11.html`. Research date:
2026-10-11.

## Visual summary (from screenshot + source)

One full-viewport screen with *no scrolling content*, and — unique in this
family — **no e-mail capture at all**. Behind everything is a `position:fixed`,
full-size photograph slideshow that cross-fades between **FOUR** `1900×900`
winter photographs every 7 s over a 1 s fade. The photographic set is the
family's only *winter / holiday* set and its brightest:

| file             | subject                                                                     | average rgb     |
| ---------------- | --------------------------------------------------------------------------- | --------------- |
| `images/bg01.jpg`| clear glass bauble with a frost-fern inside on golden pine needles           | `rgb(92,88,100)`  |
| `images/bg02.jpg`| macro frost crystals on a deep-blue pane with a low sun flare                | `rgb(85,94,113)`  |
| `images/bg03.jpg`| pale snow-ridge landscape at dawn (the brightest of the four)                | `rgb(183,185,194)`|
| `images/bg04.jpg`| one large snowflake on a soft blue-white blur                                | `rgb(125,142,159)`|

Over the photo sits exactly ONE overlay: a `rgba(0,0,0,0.5)` scrim. There is no
gradient wash, so the page reads as a luminous blue-white winter scene — much
lighter than `impending` (`comingsoon_10`, 0.7 scrim) and dramatically lighter
than the magenta/periwinkle-washed `forthcoming` / `awaiting`. Note also that
the fixed slideshow layer carries **no `background-color`** in this slug (sibling
`10` sets `#000`), so each cross-fade briefly reveals the white page body.

The layout is not a top-bar-rhythm or absolute-positioned scheme: the content
layer itself is `display:flex; flex-direction:column; align-items:center;
justify-content:space-between` at `min-height:100vh`, so the three child bands
land on the top, middle and bottom of the viewport.

```
┌─ div.flex-col-c-sb.size1.overlay1 ── column · align-items:center · justify-content:space-between · min-height:100vh ─┐
│  band 1  div.w-full.flex-w.flex-sb-m.p-l-80.p-r-80.p-t-22.p-lr-15-sm                                                 │
│            ├─ div.wrappic1.m-r-30.m-t-10.m-b-10   → 119×22 white "WINTER" wordmark (flex-grow:1 pushes the pill right)│
│            └─ div.flex-w.m-t-10.m-b-10            → a.size2.m1-txt1.flex-c-m.how-btn1.trans-04  "Sign Up"             │
│  band 2  div.flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-120                                                               │
│            ├─ h3.l1-txt1.txt-center.p-b-35.respon1  "Coming Soon"  (Lato-Hairline 72px UPPERCASE white)              │
│            └─ div.flex-w.flex-c.cd100.respon2        (max-width 370px ≤992 · 170px ≤576)                             │
│                 unit .days (35) · ":" · unit .hours (17) · ":" · unit .minutes (50) · ":" · unit .seconds (39)       │
│                 each unit: span.l1-txt2.p-b-37 numeral (PlayfairDisplay-Italic 120px)                                │
│                            span.m1-txt2.p-r-20 label (PlayfairDisplay-Italic 18px: Days/Hr/Min/Sec)                  │
│                 colons:   span.l1-txt2.p-t-15 · 2nd hidden ≤992px (dis-none-lg) · 1st+3rd hidden ≤576px (dis-none-sm)│
│  band 3  div.flex-w.flex-c-m.p-b-35                                                                                  │
│            └─ three a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5  (36×36 circles, 1px #fff border)          │
│                 i.fa.fa-facebook · i.fa.fa-twitter · i.fa.fa-youtube-play (inlined SVG paths)                        │
└──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
   under it: div.simpleslide100 (fixed, z-index:0, 100%×100%) → FOUR .simpleslide100-item.bg-img1 (cover, centred)
```

### Section-by-section fidelity notes

**1. Background slideshow (`.simpleslide100`)** — `display:block;
position:fixed; z-index:0; width:100%; height:100%; top:0; left:0`. Items:
`display:block; position:absolute; width:100%; height:100%; top:0; left:0`;
`.bg-img1` adds `background-position:center; background-repeat:no-repeat;
background-size:cover`. Inline styles set `url(images/bg0N.jpg)` and
`display:none` on items 2–4. Recreate with four
`https://picsum.photos/seed/oncoming-bgN/1900/900` layers, the first visible.
The layer has **no background-color** — do not add `bg-black` to it.

**2. Content layer (`.flex-col-c-sb.size1.overlay1`)** — `width:100%;
min-height:100vh` + `position:relative; z-index:1` + the flex column described
above. The scrim is the single `::after`: full-size, `z-index:-1`,
`background:rgba(0,0,0,0.5)`. One pseudo-element only.

**3. Top bar** — `padding:22px 80px 0 80px` (no bottom padding), wrapping row,
`space-between`, items centred, side padding 15px at ≤576px. Left: the wordmark
in a `flex-grow:1` container with `margin:10px 30px 10px 0`, `img{max-width:
100%}` — the source asset is a 119×22 RGBA PNG reading **WINTER** in white
uppercase with wide tracking. The recreation renders its OWN name/mark in that
treatment (never the file, never the string). Right: `a.size2.m1-txt1.flex-c-m.
how-btn1.trans-04` "Sign Up" — `min-width:140px; height:50px; padding:0 15px;
background:#fff; border-radius:25px`; the label is `Lato-Regular` 18px/1.2
`#555` **uppercase** (this is the one pill label in the family that is a plain
geometric sans in `#555`, not an italic serif). Hover → `background:#555555;
color:#fff` (a SOLID dark fill).

**4. Hero block** — `flex-col-c-m` (`align-items:center; justify-content:center`)
with `padding:50px 15px 120px`, the middle band of the space-between column.

**5. Heading** — `h3.l1-txt1.txt-center.p-b-35.respon1`: weight-100
`Lato-Hairline` **72px**/1.1 white UPPERCASE, centred, 35px below, 55px at
≤576px. No `letter-spacing` is declared anywhere — the wide tracking in the
screenshot is the face's own sidebearings at 72px. This heading is the family's
only sans heading and its only weight-100 face.

**6. Countdown (`.flex-w.flex-c.cd100.respon2`)** — wrapping, `justify-content:
center`, `max-width:370px` at ≤992px / `170px` at ≤576px. Each unit is
`flex-col-c` (`align-items:center`) + `min-width:165px` + `margin-bottom:30px`:
- numeral `span.l1-txt2.p-b-37`: `PlayfairDisplay-Italic` **120px**/1 white
  UPPERCASE — the largest type on the page (larger than the 72px heading; no
  sibling clock outweighs its heading), 37px below;
- label `span.m1-txt2.p-r-20`: `PlayfairDisplay-Italic` 18px/1 white, 20px
  RIGHT padding (which shifts the centred label text ~10px LEFT of the numeral's
  axis), abbreviated **Days / Hr / Min / Sec**.

Separators are the same `.l1-txt2` face at 120px with `padding-top:15px`, i.e.
three italic-serif white **colons**. The hidden-colon logic follows the
max-widths exactly: 4 × 165px never fits in 370px, so the row wraps to TWO units
per row at ≤992px (the MIDDLE colon would dangle → `dis-none-lg` hides it) and
to ONE unit per row at ≤576px (all colons dangle → `dis-none-sm` hides the outer
two, the middle already hidden).

**7. Social row** — `flex-w.flex-c-m.p-b-35`, the bottom band of the column.
Three `a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5`: `36×36`,
`border:1px solid #fff`, `border-radius:50%`, transparent fill, 18px white
glyph, `transition:all .4s`, 3px side / 5px bottom margins. Hover:
`background-color:#fff; color:#555` — the outlined disc inverts to a solid white
disc. Glyphs in the source are inlined fa SVG paths
(`fa-facebook`, `fa-twitter`, `fa-youtube-play`); the recreation uses
lucide-react equivalents.

**8. No form / no navbar / no footer** — `js/snippet.js` has NO
`.validate-form` block, there is no `<form>` in the markup and no footer band.
The only conversion affordance is the "Sign Up" pill. The monorepo's Component
Dock attribution line is the sole addition (deliberate deviation, documented).

## Tokens (extracted from `css/style.css`)

```
                       value                              where
slideshow backdrop     NONE (layer sets no bg)            .simpleslide100
page scrim             rgba(0,0,0,0.5)                    .overlay1::after  (only overlay, no gradient)
page shell             width:100%; min-height:100vh;
                       flex col; align-items:center;
                       justify-content:space-between     .size1.overlay1.flex-col-c-sb
top bar padding        22px 80px 0 80px                   .p-t-22.p-l-80.p-r-80
top bar @≤576          left/right 15px                    .p-lr-15-sm
mark container         flex-grow:1; margin:10px 30px 10px 0  .wrappic1.m-r-30.m-t-10.m-b-10
mark asset             119×22 RGBA white "WINTER" wordmark  images/icons/logo.png (NEVER copied)
pill                   min-width:140px; height:50px;
                       padding:0 15px; background:#fff;
                       border-radius:25px; transition:all .4s  .size2.how-btn1.trans-04
pill label             Lato-Regular 18px/1.2 #555 UPPERCASE  .m1-txt1
pill hover             background:#555555; color:#fff     .how-btn1:hover   (SOLID fill)
hero block             padding:50px 15px 120px;
                       flex col; align-items:center;
                       justify-content:center             .flex-col-c-m.p-t-50.p-b-120
heading                Lato-Hairline (100) 72px/1.1 #fff
                       UPPERCASE; 35px below;
                       55px @≤576                         .l1-txt1.p-b-35.respon1
countdown container    flex-wrap:wrap; justify-content:center;
                       max-width:370px @≤992px;
                       max-width:170px @≤576px            .flex-w.flex-c.cd100.respon2
countdown unit         flex col; align-items:center;
                       min-width:165px; margin-bottom:30px .flex-col-c.wsize1.m-b-30
numerals               PlayfairDisplay-Italic 120px/1 #fff
                       UPPERCASE; 37px below              .l1-txt2.p-b-37
labels                 PlayfairDisplay-Italic 18px/1 #fff;
                       padding-right:20px;
                       Days / Hr / Min / Sec              .m1-txt2.p-r-20
colons                 PlayfairDisplay-Italic 120px #fff;
                       padding-top:15px;
                       middle hidden @≤992px;
                       outer two hidden @≤576px           .l1-txt2.p-t-15.dis-none-lg/.dis-none-sm
social row             flex-wrap:wrap; justify-content:center;
                       align-items:center; padding-bottom:35px  .flex-w.flex-c-m.p-b-35
social button          36×36; border:1px solid #fff;
                       border-radius:50%; transparent;
                       font-size:18px; transition:all .4s;
                       margin:0 3px 5px                  .size3.how-social.trans-04
social hover           background:#fff; color:#555        .how-social:hover (disc inverts)
radii                  25px pill · 50% socials · 0px else
accent colour          NONE (no brand colour, no gradient)
base type              body,html Arial,sans-serif 15px #666666 on #fff
fonts (source)         Lato-Regular · Lato-Hairline · PlayfairDisplay-Italic
fonts (Google)         Lato 100 + 400 · Playfair Display 400 italic
icons                  source: inlined fa SVG paths → recreation: lucide-react
transitions            all .4s · opacity 1000ms (slideshow) · 7000ms interval · 1000ms tick
```

## Behaviour (from `js/snippet.js`, 2,997 B)

Two framework-free features — **no form validation on this slug**:

1. **Countdown** — `COUNTDOWNS = [{"sel":".cd100","kind":"spans",
   "cfg":{"Y":0,"M":0,"D":35,"h":19,"m":0,"s":0}}]`. For `kind:"spans"` the
   target is `new Date(c.Y, c.M - 1, c.D, c.h, c.m, c.s).getTime()` =
   `new Date(0, -1, 35, 19, 0, 0)` — year 0, month `-1` — which is always in the
   past, so the guard `if (!(end > Date.now()))` replaces it with
   `Date.now() + c.D * 864e5 + c.h * 36e5` = now + 35 days + 19 hours. `paint()`
   writes `r.d` RAW into `.days` and `pad(r.h)` / `pad(r.m)` / `pad(r.s)` where
   `pad = n => ('0' + n).slice(-2)`; it runs once immediately then
   `setInterval(paint, 1000)`, and calls `clearInterval(timer)` when
   `r.t <= 0`. Elements already containing `.flip-clock-wrapper` are skipped.
   The `else` branch (a `tpl` string with `%-D`/`%D`/… placeholders) is dead
   code for this slug.
2. **Background slideshow** — for each `.simpleslide100` with ≥2 items: set
   `transition:opacity 1000ms` on every item, `opacity 1` + `display ''` on
   item 0 and `opacity 0` + `display:none` on the rest. If
   `matchMedia('(prefers-reduced-motion: reduce)').matches` → return (stays on
   item 0). Then every `7000 ms`: take `cur = items[now]`,
   `nxt = items[(now + 1) % items.length]`, set `nxt.display = ''` and
   `nxt.opacity = '0'`, then inside a `requestAnimationFrame` set
   `nxt.opacity = '1'` and `cur.opacity = '0'`, and `setTimeout(() =>
   cur.display = 'none', 1000)`; advance `now = (now + 1) % items.length`. With
   FOUR items the cycle is bg01 → bg02 → bg03 → bg04 → bg01.

## Recreation mapping (deltas from the source)

| Reference                                             | Recreation                                                            |
| ----------------------------------------------------- | --------------------------------------------------------------------- |
| Four `1900×900` winter photographs in `images/`        | `https://picsum.photos/seed/oncoming-bg1..bg4/1900/900`                |
| `119×22` "WINTER" wordmark PNG                         | the app's own white uppercase wordmark (text or inline SVG)            |
| Inlined fa SVG paths (facebook / twitter / youtube)     | `lucide-react` brand icons                                            |
| Self-hosted `Lato-Hairline` / `Lato-Regular` / `PlayfairDisplay-Italic` woff2 | Google Fonts `<link>`: Lato 100 + 400, Playfair Display 400 italic |
| `js/snippet.js` DOM writes + `setInterval`              | React state + `useEffect` (interval cleared on unmount)                |
| `css/style.css` (with a `:where(html) all: revert` guard and a Bootstrap-derived reboot) | Tailwind 4 `@theme` tokens + utilities (guard and reboot never copied) |
| No footer credit                                       | one small Component Dock attribution line (required by the monorepo)   |
| No `apps/oncoming` exists yet                           | new app folder + workspace (TEMPLATES.md line 3042 stays `- [ ]` until an implementer claims it) |

## Fidelity risks to watch during implementation

- **Do not add a `#000` backdrop** to the slideshow layer; this slug has none,
  so the cross-fade reveals the white body. Copying sibling `10` here would
  change the felt lightness of every transition.
- **Scrim weight is 0.5, not 0.7 / 0.8 / 0.9.** On the pale `bg03` slide a
  heavier scrim destroys the "bright snowfield" reading that distinguishes this
  slug.
- **The heading is a hairline (weight 100).** Loading Lato 300 or 400 instead of
  100 makes it read like every other uppercase sans and loses the family-unique
  thinness. Google Fonts needs the `Lato:wght@100;400` axis explicit.
- **`justify-content:space-between` on a `100vh` column is the layout.** Do not
  replace it with fixed paddings or `mt-auto` on the social row and call it
  equivalent — the middle band centres only because the axis distributes the
  leftover space.
- **120px digits over a 72px heading** — resist "fixing" the hierarchy; the
  clock IS the loudest element here (the inverse of `impending`).
- **The colons must disappear in the right order** (middle at ≤992px, outer two
  at ≤576px) or the wrapped rows will show dangling colons.
- **No form.** Adding an e-mail capture "for parity" with `03`–`10` would be
  wrong; this slug's only CTA is the pill.
- **Abbreviated labels** "Days / Hr / Min / Sec" — not "Hours / Minutes /
  Seconds".
- Playfair Display must be loaded as an **italic** (400 italic); the numerals
  and labels are italic in every state.
