# Foretaste — design notes (replication research)

Source: ColorLib **Coming Soon V15** — https://colorlib.com/wp/template/comingsoon_15/
(source slug `comingsoon_15`; ColorLib page HTTP 200, 109,152 B,
`text/html; charset=UTF-8`, page title
"Coming Soon V15 - Free Gradient Website Template 2026 - Colorlib", description
"Build an under construction page and spice things up with this free coming soon
website template with gradient effect." — verified 2026-10-11).

The theme preview `https://preview.colorlib.com/theme/comingsoon_15/` returns
**HTTP 404** (9 B, `text/plain;charset=UTF-8`) — the same live-preview gap as the
rest of the `comingsoon_*` family. But unlike earlier siblings this slug's
rendered page IS reachable: the ColorLib preview wrapper
`https://preview.colorlib.com/#comingsoon_15` (HTTP 200) renders a
`product-iframe` whose `src` is
**`https://colorlib.com/etc/cs/comingsoon_15/index.html`** (HTTP 200, 7,597 B,
`text/html`) — that URL is the real rendered template and was used as the primary
DOM/CSS reference. Its stylesheet
`https://colorlib.com/etc/cs/comingsoon_15/css/style.css` (HTTP 200, 19,543 B)
was tokenized, and the page was opened in Chrome and measured with
`getComputedStyle` + `getBoundingClientRect` at **1440×900** and 765×437.
Cross-checked against the official source zip
`https://preview.colorlib.com/downloads/free/comingsoon_15.zip`
(HTTP 200, 364,971 B, `application/zip`) and the TEMPLATES.md screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-15.jpg`
(HTTP 200, 49,215 B, served as `image/avif` — this slug is AVIF, not JPEG —
1200×972, converted to PNG with ImageMagick and reviewed visually).

Reference artifacts (research date 2026-10-11):

- `/tmp/c15.html` — probe of `preview.colorlib.com/theme/comingsoon_15/` (404 body)
- `/tmp/t15.html` — the ColorLib marketing page (109,152 B)
- `/tmp/d15.html` — the LIVE demo HTML (7,597 B)
- `/tmp/s15.css` — the live stylesheet (19,543 B)
- `/tmp/cs15.zip` (364,971 B) → extracted `/tmp/cs15/comingsoon_15/`:
  `index.html` 7,527 B · `css/style.css` 19,543 B · `js/snippet.js` 1,516 B ·
  `README.md` 1,261 B · `images/bg01.jpg` **1900×900**, 230,688 B (a violet-washed
  downtown skyline, one tall spire centre) · `images/icons/logo.png` **101×44**
  RGBA, 1,968 B (a white two-letter monogram) · `images/icons/favicon.ico`
  32,038 B · `fonts/Montserrat-Thin.woff2` 57,316 B ·
  `fonts/Montserrat-Bold.woff2` 59,716 B · `fonts/Quantico-Regular.woff2`
  7,688 B
- `/tmp/c15.jpg` (raw `image/avif`) + `/tmp/c15.png` (1200×972 review copy,
  converted with ImageMagick)

## Section order (source markup, in full)

```html
<div class="bg-img1 size1 overlay1 p-b-35 p-l-15 p-r-15"
     style="background-image:url('images/bg01.jpg')">
  <div class="flex-col-c p-t-160 p-b-215 respon1">
    <div class="wrappic1"><a href="#"><img src="images/icons/logo.png"></a></div>
    <h3 class="l1-txt1 txt-center p-t-30 p-b-100">Coming Soon</h3>
    <div class="cd100 flip-clock-wrapper"> … 4 groups × 2 digit cards … </div>
  </div>
  <div class="flex-w flex-c-m p-b-35"> … 3 × <a class="size3 how-social"> … </div>
</div>
<script src="js/snippet.js"></script>
```

Only two sibling bands exist inside the shell: the centred column
(`.flex-col-c`) and the social row (`.flex-w.flex-c-m`). There is no navbar, no
form, no footer text.

## Measured tokens (live render + stylesheet)

| What              | Value                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shell background  | `background-image:url(bg01.jpg)`, `center / no-repeat / cover`, `min-height:100vh`, `width:100%`, `padding:0 15px 35px`                                                                                                                                       |
| gradient wash     | `.overlay1::before` → `linear-gradient(top, #b224ef, #7579ff)`, `opacity:0.8`, `position:absolute; inset:0; z-index:-1` (computed `linear-gradient(rgb(178,36,239), rgb(117,121,255))`)                                                                       |
| column            | `.flex-col-c` → `display:flex; flex-direction:column; align-items:center`, `padding:160px 0 215px` (`80px 0 100px` at ≤576px via `.respon1`)                                                                                                                  |
| monogram          | `.wrappic1` → `display:block; flex-grow:1`, `img { max-width:100% }`; source PNG 101×44 white monogram                                                                                                                                                        |
| headline          | `.l1-txt1` → `Montserrat-Thin 50px / 1.1`, `#fff`, `uppercase`, `letter-spacing:10px`, `padding:30px 0 100px`, `text-align:center`                                                                                                                            |
| countdown wrapper | `.flip-clock-wrapper` → `display:flex; flex-wrap:wrap; justify-content:center`, `width:100%; max-width:100%; margin-bottom:20px`; `max-width:470px; margin-right:10px` at ≤1200px; `max-width:210px; margin-right:10px` at ≤576px                             |
| digit tile        | `90×120`, `border-radius:10px`, `background:#0d1629`, `margin:3px`, plus `.flip-clock-wrapper .flip { margin-bottom:80px }` — the 80px bottom margin is the band the group captions hang in once the groups wrap (row step 203px: `y389` → `y592` at 765×437) |
| digit glyph       | `Quantico-Regular 120px`, `#fff`, flex-centred (computed `120px Quantico-Regular rgb(255,255,255)`)                                                                                                                                                           |
| colon divider     | `.flip-clock-divider` → `68px × 120px`; `::before` = `content:":"`, `Quantico-Regular 120px`, `#fff`; first divider `width:0` and no colon; `10px` (days+minutes) at ≤1200px with the minutes colon hidden; all `10px` and no colon at ≤576px                 |
| group captions    | `.flip-clock-divider::after` → `days`/`hrs`/`min`/`sec`, `Montserrat-Bold 14px`, `letter-spacing:3px`, `uppercase`, `#fff`, `width:193px`, `left:100%; top:100%; padding-top:23px`, centered                                                                  |
| social circle     | `.how-social` → `36×36` (`.size3`), `border-radius:50%`, `border:1px solid #fff`, `background:transparent`, glyph `18px #fff`; hover `background:#fff; color:#0d1629`; `transition: all .4s` (`.trans-04`); margins `3px` sides, `5px` bottom                 |
| social row        | `.flex-w.flex-c-m.p-b-35` → `flex-wrap:wrap; justify-content:center; align-items:center; padding-bottom:35px`                                                                                                                                                 |
| radii             | `10px` (digit tiles and their shadow layers), `50%` (social circles) — nothing else rounded                                                                                                                                                                   |
| fonts             | `Montserrat-Thin` (headline) · `Montserrat-Bold` (captions) · `Quantico-Regular` (digits + colons) — all three on Google Fonts (Montserrat 100/700, Quantico 400)                                                                                             |
| base type         | source `body` = system stack `-apple-system,… Arial, sans-serif`, `1rem/1.5`, `#212529`; but every visible glyph is one of the three webfonts                                                                                                                 |

## Measured geometry (Chrome, 1440×900, deviceScaleFactor 1)

| Element              | Rect                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| shell `.bg-img1`     | `x0 y0 w1425 h938` — `scrollHeight 938` vs `clientHeight 900` → 38px scroll (shell `padding-bottom:35px`)          |
| column `.flex-col-c` | `x15 y0 w1395 h827`                                                                                                |
| monogram `.wrappic1` | `x662 y160 w101 h44`                                                                                               |
| headline `.l1-txt1`  | `x468 y204 w490 h185` (185 = 30 + 55 + 100)                                                                        |
| countdown wrapper    | `x15 y389 w1395 h203`                                                                                              |
| tiles (8)            | `x230 x326` days · `x490 x586` hrs · `x750 x846` min · `x1010 x1106` sec — all `y392 w90 h120`, 6px between a pair |
| colon dividers       | `68×120`, e.g. the hours divider at `x419 y389`; the days divider is `w0`                                          |
| social row           | `x15 y827 w1395 h76`; first circle `x653 y827 36×36`                                                               |

At a 765×437 window the ≤1200px branch applies: the countdown wrapper measures
`470px` wide and the layout is otherwise identical (tiles still `90×120`).

## Behaviour (`js/snippet.js`, verbatim logic)

```js
var FLIP = { D: 35, h: 18 } // 35 days 18 hours from load
var end = Date.now() + FLIP.D * 864e5 + FLIP.h * 36e5
// every 1000ms: d|h|m|s = remaining, zero-padded to 2 digits each, then
// for each card whose visible digit differs: copy the old digit into
// .flip-clock-before, write the new one into .flip-clock-active, and
// re-trigger the flip by removing/re-adding the `play` class on that ul.
```

The static HTML ships the digits `35 : 17 : 59 : 57`, so the countdown reads
correctly before the script runs (the live capture showed `35 : 17 : 59 : 58`).
The flip itself is pure CSS: `turn`/`turn2` 0.5s linear animations on the
`li.flip-clock-active .down` / `li.flip-clock-before .up` cards, with the
`up:after` pseudo seam (a 3px `rgba(0,0,0,0.4)` line) disabled by the slug's own
override (`display:none`). No jQuery, no Bootstrap, no other behaviour.

## Visual read (screenshot `coming-soon-15.jpg`, 1200×972)

A flat single-screen poster: the whole frame is a violet→periwinkle gradient
washing a downtown skyline (one tall spire centre, dense mid-rise blocks either
side, a light haze at the horizon). Centred in the upper third is a white
two-letter monogram. Below it, the headline `COMING SOON` in a very thin, widely
letterspaced uppercase face (the 10px tracking makes the wordmark read as a
band of light type rather than a headline). Under that, four groups of two
near-black rounded tiles — `35 : 17 : 59 : 57` — with the colons rendered as two
stacked square dots each (the Quantico colon at 120px), and small bold uppercase
captions `DAYS · HRS · MIN · SEC` hanging under each group's left/right edge.
Near the bottom edge, three white hairline circles (Facebook, Twitter, YouTube)
in a centred row. No logo bar, no form, no footer text, no other content.

## Fidelity rules for this template

- The gradient IS the design: two stops `#b224ef → #7579ff` at `opacity:0.8`
  over one cover photograph. Do not flatten it to a solid colour, add a scrim, or
  split it into more stops.
- The headline is the family's thin/tracked variant — Montserrat **100**, 50px,
  `letter-spacing:10px`, white, uppercase, at every breakpoint. It is not a
  Playfair/Poppins headline like the light siblings.
- The countdown is the visual anchor: eight `90×120` `#0d1629` tiles at
  `border-radius:10px`, `120px` Quantico digits, and `68px` colon divider columns
  between the four groups (none before days), with Montserrat Bold 14px/3px
  captions hanging 23px below the tiles.
- The countdown must actually run: target `load + 35 days 18 hours`, 1000ms tick,
  only changed digits flip, clamped at zero, interval cleared on unmount.
- Social circles are hairline white rings (transparent fill), inverting to a white
  fill with a `#0d1629` glyph on hover/focus over `all .4s`.
- Only two breakpoints matter: ≤1200px (wrapper `470px`; days/minutes dividers
  `10px`; minutes colon hidden) and ≤576px (wrapper `210px`; all dividers `10px`
  and all colons hidden; column padding `80px 0 100px`).
- Assets are not copied: the skyline photo becomes
  `https://picsum.photos/seed/foretaste-skyline/1900/900`, the monogram is the
  app's own white wordmark, the icons are `lucide-react`, and the three webfonts
  come from Google Fonts.
- Provenance stays out of the app: no `colorlib`, no "Coming Soon 15", no
  `comingsoon_15`, no `Montserrat-Thin` / `Montserrat-Bold` / `Quantico-Regular`
  strings anywhere under `apps/foretaste`.
