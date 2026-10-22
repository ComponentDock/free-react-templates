# Template: Oncoming (Coming Soon / Under Construction)

## Purpose

Oncoming is a single-screen coming-soon page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Coming Soon
V11" template (source slug `comingsoon_11` — one full-viewport screen behind a
fixed, full-screen cross-fading background slideshow of **FOUR** `1900×900`
photographs, covered by a single `rgba(0,0,0,0.5)` scrim and nothing else — no
gradient wash, no accent colour — over a WINTER / holiday photographic set:
a crystal glass bauble with a frost-fern inside resting on pine needles
(`bg01`), a macro of frost crystals on a deep-blue pane with a low sun flare
(`bg02`), a pale snow-ridge landscape at dawn (`bg03`), and a single large
snowflake on a soft blue-white blur (`bg04`)). The page's whole geometry is a
THREE-BAND vertical distribution: the content layer is
`display:flex; flex-direction:column; align-items:center;
justify-content:space-between` at `width:100%; min-height:100vh`, so the top bar
pins to the top edge, the centred hero block floats in the middle, and the
social row sits on the bottom edge — the viewport itself is the layout
mechanism (no `padding-bottom:185px` rhythm block like sibling "Coming Soon
V10", no absolutely positioned columns). The top bar
(`padding:22px 80px 0 80px`, side padding 15px at ≤576px) carries a white
wordmark mark left (`119×22` in the source: the word "WINTER" in white
uppercase letter-spaced sans) and a `140×50` WHITE 25px-radius "Sign Up" pill
right whose label is an 18px `Lato-Regular` **UPPERCASE** `#555` string and
whose hover flips the fill to solid `#555555` with a white label (not the
translucent-white hover of sibling slugs). Below it the centred hero block
(`padding:50px 15px 120px`) holds a **72px `Lato-Hairline` UPPERCASE** white
"Coming Soon" heading (weight 100 — a hairline sans, the softest face in the
family) and beneath it a horizontal countdown row capped at `370px` (170px at
≤576px): FOUR units, each `min-width:165px` with 30px below, carrying a
**120px `PlayfairDisplay-Italic` UPPERCASE** white serif numeral with 37px
below it over an 18px `PlayfairDisplay-Italic` white abbreviated label
(Days / Hr / Min / Sec), separated by 120px italic-serif white COLONS that are
progressively hidden (the middle colon at ≤992px, the outer two at ≤576px) as
the row wraps to two-then-four lines. The bottom band is a centred row
(`padding-bottom:35px`) of THREE 36×36 CIRCULAR social buttons — `1px solid
#fff` border, `border-radius:50%`, transparent fill, an 18px white glyph, and a
hover that inverts them to a solid white disc with a `#555` glyph — Facebook,
Twitter and YouTube. There is NO e-mail form, NO navbar, NO footer band and NO
scrolling section: the whole page is the four-photo slideshow, the 50% scrim,
those three bands. It is built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_11/
  (HTTP 200, 109,272 B, `text/html; charset=UTF-8`, verified 2026-10-11; page
  title "Coming Soon V11 - Free Website Template 2026 - Colorlib", description
  "An impressive free website template for quickly setting up a coming soon
  page without building it from the ground up.")
- **Preview:** https://preview.colorlib.com/theme/comingsoon_11/ returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same
  live-preview gap as the rest of the `comingsoon_*` family; there is no
  `theme/bootstrap/<slug>/` variant either), so the live preview DOM is
  unreachable for this slug. Fallback (documented per `docs/replication.md`):
  the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_11.zip`
  (HTTP 200, 700,942 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs11/out/comingsoon_11/` — `index.html` (4,939 B), `css/style.css`
  (8,561 B), `js/snippet.js` (2,997 B), `README.md` (1,261 B), FOUR `1900×900`
  photographs `images/bg01.jpg` (142,089 B), `images/bg02.jpg` (135,048 B),
  `images/bg03.jpg` (164,461 B), `images/bg04.jpg` (118,402 B),
  `images/icons/logo.png` (119×22 RGBA, 1,741 B), `images/icons/favicon.ico`
  (32,038 B), and three self-hosted faces `fonts/Lato-Hairline.woff2`
  (30,856 B), `fonts/Lato-Regular.woff2` (32,652 B),
  `fonts/PlayfairDisplay-Italic.woff2` (75,304 B). That zip (the real rendered
  template's own files) is the DOM/CSS/behaviour reference, together with the
  TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-11.jpg
  (HTTP 200, 45,662 B, served as `image/avif` — NOT JPEG for this slug —
  1200×972, reviewed visually 2026-10-11)
- **New name:** `oncoming` (apps/oncoming, `@free-react-templates/oncoming`) —
  the source demo title "Coming Soon 11", its `bg01.jpg`…`bg04.jpg`
  photographs, its "WINTER" wordmark image, its inlined fa SVG icons, its
  "Sign Up" / "Coming Soon" / "Days" / "Hr" / "Min" / "Sec" strings and its
  favicon are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

The reference is one full-viewport screen, not a scrolling site. Its skeleton is
TWO sibling layers:

1. `div.simpleslide100` — the BACKGROUND slideshow —
   `.simpleslide100{display:block; position:fixed; z-index:0; width:100%;
height:100%; top:0; left:0}`, holding **FOUR**
   `.simpleslide100-item.bg-img1` children —
   `.simpleslide100-item{display:block; position:absolute; width:100%;
height:100%; top:0; left:0}` + `.bg-img1{background-position:center;
background-repeat:no-repeat; background-size:cover}` with inline
   `style="background-image:url(images/bg01.jpg)"` (item 1) and
   `...bg02.jpg...;display:none` (item 2) / `...bg03.jpg...;display:none`
   (item 3) / `...bg04.jpg...;display:none` (item 4). Note the layer carries
   **NO `background-color`** at all (unlike sibling "Coming Soon V10", whose
   layer is `#000`) — there is nothing behind the photographs, so a fade
   between two photos briefly reveals the white page background rather than
   black.
2. `div.flex-col-c-sb.size1.overlay1` — the CONTENT layer — `.size1{width:100%;
min-height:100vh}`, `.overlay1{position:relative; z-index:1}`, and crucially
   `.flex-col-c-sb{display:flex; flex-direction:column; align-items:center;
justify-content:space-between}`. The `justify-content:space-between` is the
   entire layout: the three child bands are pushed to the top, middle and
   bottom of the `100vh` column. The layer carries a single wash as one
   pseudo-element: `.overlay1::after{content:""; display:block;
position:absolute; z-index:-1; width:100%; height:100%; top:0; left:0;
background:rgba(0,0,0,0.5)}`. There is **NO `::before` gradient** in this
   slug. The scrim is 50% black — lighter than `impending`'s 0.7 but far heavier
   than `forthcoming`'s 0.2 — so this is the family's _brightest photographic_
   treatment: the winter photos (already pale/bright: `bg03` averages
   `rgb(183,185,194)`) still read clearly through it.

Inside the content layer, three children in order:

FIRST the TOP BAR
`div.w-full.flex-w.flex-sb-m.p-l-80.p-r-80.p-t-22.p-lr-15-sm`
— `.w-full{width:100%}`, wrapping row, `justify-content:space-between`,
items centred, `padding:22px 80px 0 80px` (side padding → 15px at ≤576px via
`.p-lr-15-sm`; **no bottom padding at all** — the band's height comes from its
children plus the 22px top padding, and the `space-between` axis supplies the
gap to the hero, not a padding block). Two children:

- `div.wrappic1.m-r-30.m-t-10.m-b-10` — `.wrappic1{display:block;
flex-grow:1}` + 30px right margin + 10px top/bottom margin — wrapping
  `a > img[src=images/icons/logo.png]` (a 119×22 RGBA wordmark: the word
  "WINTER" in white uppercase sans with wide letter-spacing; `.wrappic1 img{
max-width:100%}`). Because `.wrappic1` has `flex-grow:1` the mark stretches and
  pushes the button to the right edge;
- `div.flex-w.m-t-10.m-b-10` wrapping a single
  `a.size2.m1-txt1.flex-c-m.how-btn1.trans-04` labelled "Sign Up" —
  `.size2{min-width:140px; height:50px}`, `.flex-c-m{justify-content:center;
align-items:center}`, `.m1-txt1{font-family:Lato-Regular; font-size:18px;
color:#555; line-height:1.2; text-transform:uppercase}` — so unlike sibling
  "Coming Soon V10" (18px italic serif sentence case) this pill's label is an
  **UPPERCASE geometric sans in `#555`** — `.how-btn1{padding:0 15px;
background-color:#fff; border-radius:25px}` + `.trans-04{transition:all 0.4s}`.
  The CTA is a min-140 × 50 WHITE 25px-radius pill; hover
  `.how-btn1:hover{background-color:#555555; color:#fff}` turns it solid
  `#555` with a white label (a SOLID dark fill, not the 12%-white translucent
  fill siblings use).

SECOND the CENTRED HERO BLOCK
`div.flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-120` — `.flex-col-c-m{display:flex;
flex-direction:column; align-items:center; justify-content:center}` +
`padding:50px 15px 120px`. It is the middle band of the `space-between`
column, so it floats vertically between the top bar and the social row. Two
children:

- `h3.l1-txt1.txt-center.p-b-35.respon1` reading "Coming Soon" —
  `.l1-txt1{font-family:Lato-Hairline; font-size:72px; line-height:1.1;
color:#fff; text-transform:uppercase}` with 35px below it, `.txt-center{
text-align:center}`, and `.respon1{font-size:55px}` at ≤576px. `Lato-Hairline`
  is the **weight-100** cut of Lato: the heading is the softest, thinnest type
  in the entire family — a hairline sans in ALL CAPS. There is **no
  `letter-spacing` declaration**; the wide tracking visible in the screenshot
  is the face's own sidebearings at 72px. It is the ONLY sibling whose heading
  is a sans (all others are Playfair Display serif faces) and the only one
  whose countdown digits (120px) are LARGER than the heading (72px).
- `div.flex-w.flex-c.cd100.respon2` — the COUNTDOWN — `flex-wrap:wrap` +
  `.flex-c{justify-content:center}` + `.respon2{max-width:370px}` at ≤992px and
  `max-width:170px` at ≤576px. Because each unit is `min-width:165px`, the
  370px cap fits exactly TWO units per row and the 170px cap exactly ONE — the
  max-widths are what make the row wrap 1-2-4-1 as the viewport narrows, and
  they are why the colons are progressively hidden (below). Its children in
  document order are unit, colon, unit, colon, unit, colon, unit:
  - `div.flex-col-c.wsize1.m-b-30` — a UNIT — `.flex-col-c{display:flex;
flex-direction:column; align-items:center}`, `.wsize1{min-width:165px}`,
    30px below. Two stacked children:
    - `span.l1-txt2.p-b-37.days` — `.l1-txt2{font-family:PlayfairDisplay-Italic;
font-size:120px; line-height:1; color:#fff; text-transform:uppercase}` with
      37px below it — a **120px ITALIC SERIF** white numeral. This is the
      LARGEST type in the template and in the whole coming-soon family
      (siblings top out at 60–90px);
    - `span.m1-txt2.p-r-20` — `.m1-txt2{font-family:PlayfairDisplay-Italic;
font-size:18px; color:#fff; line-height:1}` with 20px RIGHT padding — an 18px
      italic serif white ABBREVIATED label. The `padding-right:20px` widens the
      label box on the right, so the centred label text shifts ~10px LEFT of
      the numeral's centre line; the four labels are **Days / Hr / Min / Sec**
      (abbreviated — NOT the "Hours / Minutes / Seconds" of siblings `03`–`10`).
  - `span.l1-txt2.p-t-15.dis-none-sm` — a COLON separator, reading ":" — the
    same 120px italic serif white face as the numerals, with 15px top padding
    so it sits on the numerals' optical centre line, and `.dis-none-sm`
    (`display:none` at ≤576px).
  - the Hours unit (label "Hr"), then `span.l1-txt2.p-t-15.dis-none-lg` — the
    MIDDLE colon, hidden at ≤992px (`.dis-none-lg`).
  - the Minutes unit (label "Min"), then a third
    `span.l1-txt2.p-t-15.dis-none-sm` colon, hidden at ≤576px.
  - the Seconds unit (label "Sec").
    So at desktop the clock reads `35 : 17 : 50 : 39` — four units of italic
    serif numerals separated by matching italic serif colons, centred, with the
    small label under each numeral.

THIRD the SOCIAL ROW
`div.flex-w.flex-c-m.p-b-35` — `flex-wrap:wrap` + `.flex-c-m{justify-content:
center; align-items:center}` + `padding-bottom:35px`. It is the bottom band of
the `space-between` column. Three identical anchors
`a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5` —
`.size3{width:36px; height:36px}`, `.flex-c-m` (centres the glyph),
`.how-social{color:#fff; font-size:18px; border:1px solid #fff;
background-color:transparent; border-radius:50%}` with 3px side margins and
5px bottom margin, `.trans-04` transition — i.e. three 36×36 **CIRCLES** with a
1px WHITE OUTLINE, a transparent fill and an 18px white glyph: **Facebook,
Twitter and YouTube** (`i.fa.fa-facebook`, `i.fa.fa-twitter`,
`i.fa.fa-youtube-play`, each an inlined FontAwesome `svg.cl-icon` path). Hover
`.how-social:hover{background-color:#fff; color:#555}` INVERTS the disc — the
border+glyph-circle becomes a solid white 36px disc holding a `#555` glyph.

There is NO navbar, NO footer band, NO e-mail form, NO modal and NO scrolling
section: the whole page is the fixed slideshow, the 50% scrim, the top bar, the
centred hero block and the social row. This is the ONLY slug in the
`comingsoon_*` family with no e-mail capture of any kind — the sole conversion
affordance is the "Sign Up" pill.

The countdown script (`js/snippet.js`) is the family's `spans` flavour with
config `{"sel":".cd100","kind":"spans","cfg":{"Y":0,"M":0,"D":35,"h":19,"m":0,
"s":0}}`: the target is built as `new Date(c.Y, c.M - 1, c.D, c.h, c.m, c.s)`
= `new Date(0, -1, 35, 19, 0, 0)` (year 0, month `-1`), which can never be in
the future, so the fallback rule kicks in and the target becomes
`Date.now() + 35 * 864e5 + 19 * 36e5` — the demo therefore never reads zero. It
then repaints the four spans once per second (`setInterval(paint, 1000)` plus an
immediate `paint()`), writing `r.d` RAW into `.days` (days are NOT zero-padded)
and `pad(r.h)`, `pad(r.m)`, `pad(r.s)` where `pad = n => ('0'+n).slice(-2)`,
and clears the interval once the remaining time reaches 0. Elements that
already contain a `.flip-clock-wrapper` are skipped. Note this snippet has **NO
form-validation block at all** (there is no form on this page) — its `paint()`
writes the values into the DOM with `if (n) n.textContent = v` guards, and the
`tpl`/`%-D` branch of the script is dead code for this slug.

The same script runs the background slideshow — for each `.simpleslide100` with
at least two items it sets `transition:opacity 1000ms`, shows item 0
(`opacity 1`) and hides the rest (`display:none`), then, unless
`prefers-reduced-motion: reduce` matches, every 7000 ms cross-fades the current
item out and the next in (showing the next at `opacity 0` then flipping it to
`1` inside a `requestAnimationFrame`, and hiding the old item after the
`1000ms` transition), wrapping through all **FOUR** items.

The palette is the reference's winter photography plus white chrome: an
un-backdropped fixed slideshow (no `#000` fill), a `rgba(0,0,0,0.5)` scrim,
white text and white glyphs, a `#fff` 25px-radius pill with a `#555` uppercase
`Lato-Regular` label whose hover is a SOLID `#555555` fill with a white label,
36px white-outlined circles for the socials (`#fff` fill + `#555` glyph on
hover), and no accent colour anywhere.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V11" (source:
  https://colorlib.com/wp/template/comingsoon_11/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3042; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/oncoming` absent, TEMPLATES.md line 3042 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_11/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11), so the
  live preview DOM could not be parsed. Fallback used (documented): the
  official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_11.zip` (HTTP 200,
  700,942 B, `application/zip`), downloaded and extracted to
  `/tmp/cs11/out/comingsoon_11/`. Reference artifacts: `/tmp/cs11/cs11.zip`,
  `/tmp/cs11/out/comingsoon_11/`, `/tmp/cs11/shot.avif` + `/tmp/cs11/shot.jpg`
  (screenshot, 1200×972), `/tmp/cs11/src11.html` (the ColorLib page),
  `/tmp/cs11/bg01_s.jpg` … `/tmp/cs11/bg04_s.jpg` and `/tmp/cs11/bg_montage.jpg`
  (photo previews, 560×265 each / 1120×530 montage). Research date: 2026-10-11.
  The source HTML/CSS/JS is authoritative for section structure, copy, tokens,
  and behaviour.
- **Screenshot:** `coming-soon-11.jpg` (served as `image/avif`, reviewed
  visually 2026-10-11) confirms the layout: a dark blue-violet winter page whose
  centre is a large clear glass bauble filled with a frosted fern pattern,
  resting on golden pine needles against a soft dark-blue bokeh (`bg01`, so the
  screenshot caught the FIRST slide); top-left the white uppercase wordmark
  "WINTER" in a letter-spaced sans; top-right a white rounded pill reading
  "SIGN UP" in uppercase; centre, in a thin uppercase sans, "COMING SOON"
  (visibly lighter in weight than any other type on the page); below it a
  horizontal row of four very large ITALIC SERIF numerals
  "35 : 18 : 59 : 57" separated by italic serif colons, each numeral with a
  small italic serif label under it ("Days", "Hr", "Min", "Sec"); and at the
  bottom centre three small white-outlined CIRCLES holding Facebook, Twitter
  and YouTube glyphs. No navbar, no footer band, no form, no scrolling content.
  (The screenshot's top strip is the marketing page's browser chrome —
  "colorlib.com" — not part of the template.)
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN dependency at runtime — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in,
  then re-declares a minimal Bootstrap-derived reboot) with three self-hosted
  `@font-face` blocks (Lato-Regular, Lato-Hairline, PlayfairDisplay-Italic) and
  no icon font at all (the fa glyphs are inlined SVG `path`s in the markup).
  The recreation uses Tailwind 4 + React state; the revert guard, the reboot,
  and all source class names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Slideshow layer: `.simpleslide100{display:block; position:fixed;
z-index:0; width:100%; height:100%; top:0; left:0}` — NOTE: no
    `background-color` (sibling `10` sets `#000`);
    `.simpleslide100-item{display:block; position:absolute; width:100%;
height:100%; top:0; left:0}`; `.bg-img1{background-position:center;
background-repeat:no-repeat; background-size:cover}`
  - Content layer: `.size1{width:100%; min-height:100vh}` +
    `.overlay1{position:relative; z-index:1}` +
    `.flex-col-c-sb{display:flex; flex-direction:column; align-items:center;
justify-content:space-between}` — the space-between column IS the layout
  - Scrim (the ONLY overlay): `.overlay1::after{… background:rgba(0,0,0,0.5)}`,
    full-size, `z-index:-1`. There is no `::before` and no gradient.
  - Top bar: `.w-full` + `.flex-w` + `.flex-sb-m{justify-content:space-between;
align-items:center}` + `.p-l-80.p-r-80.p-t-22.p-lr-15-sm` (≤576px side padding
    15px; NO bottom padding)
  - Mark: `.wrappic1{display:block; flex-grow:1}` + `.m-r-30.m-t-10.m-b-10`;
    `.wrappic1 img{max-width:100%}`
  - Sign Up pill: `.size2{min-width:140px; height:50px}` + `.flex-c-m` +
    `.m1-txt1{Lato-Regular 18px; color:#555; line-height:1.2;
text-transform:uppercase}` + `.how-btn1{padding:0 15px; background-color:#fff;
border-radius:25px}` + `.trans-04{transition:all .4s}`; hover
    `.how-btn1:hover{background-color:#555555; color:#fff}` (SOLID dark fill)
  - Hero block: `.flex-col-c-m{display:flex; flex-direction:column;
align-items:center; justify-content:center}` + `.p-t-50.p-b-120.p-l-15.p-r-15`
  - Heading: `.l1-txt1{Lato-Hairline 72px; line-height:1.1; color:#fff;
text-transform:uppercase}` + `.txt-center` + `.p-b-35`; `.respon1`
    (≤576px) → 55px
  - Countdown: `.cd100` + `.flex-w` + `.flex-c{justify-content:center}`;
    `.respon2{max-width:370px}` at ≤992px and `{max-width:170px}` at ≤576px
  - Countdown unit: `.flex-col-c{display:flex; flex-direction:column;
align-items:center}` + `.wsize1{min-width:165px}` + `.m-b-30`
  - Countdown digits: `.l1-txt2{PlayfairDisplay-Italic 120px; line-height:1;
color:#fff; text-transform:uppercase}` + `.p-b-37`
  - Countdown colons: the same `.l1-txt2` at `120px` + `.p-t-15`;
    `.dis-none-lg{display:none}` at ≤992px (middle colon);
    `.dis-none-sm{display:none}` at ≤576px (outer colons)
  - Countdown labels: `.m1-txt2{PlayfairDisplay-Italic 18px; color:#fff;
line-height:1}` + `.p-r-20`
  - Social row: `.flex-w` + `.flex-c-m{justify-content:center;
align-items:center}` + `.p-b-35`
  - Social button: `.size3{width:36px; height:36px}` + `.flex-c-m` +
    `.how-social{color:#fff; font-size:18px; border:1px solid #fff;
background-color:transparent; border-radius:50%}` + `.trans-04` +
    `.m-r-3.m-l-3.m-b-5`; hover `.how-social:hover{background-color:#fff;
color:#555}`
  - Base type: `body,html{font-family:Arial,sans-serif; font-size:15px;
color:#666666; height:100%; background-color:#fff}` (all visible type is Lato /
    Playfair Display); `h3{margin:0px}`
  - Fonts (source, self-hosted woff2): Lato-Regular (pill label),
    Lato-Hairline (heading), PlayfairDisplay-Italic (digits, colons, labels) —
    the recreation loads Lato **100 / 400** + Playfair Display **400 italic**
    from Google Fonts via `<link>` in `index.html`. There is no icon font: the
    socials are inlined fa SVGs in the reference and lucide-react icons in the
    recreation.
- **Content map (source DOM):** `div.simpleslide100` > four
  `div.simpleslide100-item.bg-img1` (bg01 visible, bg02/bg03/bg04
  `display:none`), then `div.flex-col-c-sb.size1.overlay1`:
  1. `div.w-full.flex-w.flex-sb-m.p-l-80.p-r-80.p-t-22.p-lr-15-sm` — ← TOP BAR
     - `div.wrappic1.m-r-30.m-t-10.m-b-10 > a > img[src=images/icons/logo.png]`
       (119×22 white "WINTER" wordmark)
     - `div.flex-w.m-t-10.m-b-10 > a.size2.m1-txt1.flex-c-m.how-btn1.trans-04`
       — "Sign Up"
  2. `div.flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-120` — ← CENTRED HERO BLOCK
     - `h3.l1-txt1.txt-center.p-b-35.respon1` — "Coming Soon"
     - `div.flex-w.flex-c.cd100.respon2` — ← HORIZONTAL COUNTDOWN
       - `div.flex-col-c.wsize1.m-b-30 > span.l1-txt2.p-b-37.days` (35) +
         `span.m1-txt2.p-r-20` (Days)
       - `span.l1-txt2.p-t-15.dis-none-sm` — ":"
       - the same unit for `.hours` (17) / Hr
       - `span.l1-txt2.p-t-15.dis-none-lg` — ":"
       - the same unit for `.minutes` (50) / Min
       - `span.l1-txt2.p-t-15.dis-none-sm` — ":"
       - the same unit for `.seconds` (39) / Sec
  3. `div.flex-w.flex-c-m.p-b-35` — ← SOCIAL ROW
     - three `a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5` wrapping
       `i.fa.fa-facebook` / `i.fa.fa-twitter` / `i.fa.fa-youtube-play`
       (inlined `svg.cl-icon` brand paths)
- **Behaviour (`js/snippet.js`, two framework-free features — NO form
  validation on this slug):**
  1. Countdown on `.cd100` — `kind:"spans"` with config `{Y:0,M:0,D:35,h:19,
m:0,s:0}`: `new Date(0, -1, 35, 19, 0, 0)` is always in the past, so the
     declared fallback `end = Date.now() + D*864e5 + h*36e5` (= now + 35 days +
     19 hours) is what actually runs; `paint()` writes the raw day count into
     `.days` and `pad()`-ed hours/minutes/seconds, runs once immediately and
     then every 1000 ms, and clears its interval when the remaining time hits 0;
     elements already containing a `.flip-clock-wrapper` are skipped.
  2. Background cross-fade slideshow on `.simpleslide100` — needs ≥2 items
     (this slug has FOUR); sets `transition:opacity 1000ms`, shows item 0, then
     every 7000 ms fades the current item out and the next in (the next is
     displayed at `opacity 0` and flipped to `1` inside a `requestAnimationFrame`,
     the old one hidden after the transition), wrapping
     `now = (now + 1) % items.length`; returns early (stays on item 0) when
     `prefers-reduced-motion: reduce` matches.

### Sibling comparison (why this slug is not a copy of its neighbours)

Within the `## Uncategorized (15)` `comingsoon_01..15` group, `comingsoon_11` is
distinctive in SIX ways — do not blur it with `03`–`10` or with the
`0N-comming-soon` set:

- **Four-photo slideshow.** It is the only slug in the family with a FOUR-item
  cross-fading background (`bg01` + `bg02` + `bg03` + `bg04`); `impending`
  (`comingsoon_10`) has three and `awaiting` (`comingsoon_09`) two.
- **An un-backdropped slideshow.** The fixed layer has NO `background-color`,
  so it fades against the page's white body rather than against black — the only
  slug in the family that does not set `#000` on the layer.
- **A 50% scrim and NO gradient.** Its single overlay is `rgba(0,0,0,0.5)`,
  lighter than `10`'s 0.7, and there is no `::before` gradient wash at all. On
  the family's BRIGHTEST photographic set (four pale winter photos: `bg03`
  averages `rgb(183,185,194)`), so the page reads as a luminous blue-white
  winter scene rather than the family's usual near-black.
- **`justify-content:space-between` as the layout.** The whole page is a
  `100vh` flex column with `space-between`: top bar, centred hero, bottom social
  row. No sibling uses a space-between column — `10` uses an absolute
  `left:19%` column and a `row-reverse` row, `09` centres a single column.
- **A hairline-sans heading over 120px italic-serif digits.** The heading is
  `Lato-Hairline` (weight 100) UPPERCASE at 72px — the ONLY sans heading and the
  ONLY weight-100 face in the family — while the countdown numerals are
  `PlayfairDisplay-Italic` **120px**, the largest type in the family and the
  only countdown that OUTWEIGHS its heading. The clock also keeps visible
  italic-serif COLONS and abbreviated labels (Days / Hr / Min / Sec), and its
  units are `165px` wide (siblings: 90px / 195px / 155px rings / flip cards).
- **White-outlined CIRCLE socials and NO e-mail form.** Three 36×36 discs with
  a `1px solid #fff` border, `border-radius:50%` and an 18px glyph that INVERT to
  a solid white disc with a `#555` glyph on hover (Facebook / Twitter /
  YouTube). This is the family's only slug with no e-mail capture at all — no
  well, no icon submit lane, no validation bubble; the sole CTA is the "Sign Up"
  pill, whose hover is a SOLID `#555555` fill rather than a translucent one.

## Design tokens

| Token                | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Where                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| slideshow backdrop   | NONE — the fixed layer sets no `background-color` (fades reveal the white page body; siblings set `#000`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | background colour of the fixed slideshow layer                                |
| page scrim           | `rgba(0,0,0,0.5)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | the ONLY overlay layer (no gradient)                                          |
| page photographs     | source `images/bg01.jpg` (1900×900, glass bauble with a frost-fern inside on pine needles over dark-blue bokeh, average `rgb(92,88,100)`), `images/bg02.jpg` (1900×900, frost crystals on a deep-blue pane with a low sun flare, average `rgb(85,94,113)`), `images/bg03.jpg` (1900×900, pale snow-ridge landscape at dawn — the brightest, average `rgb(183,185,194)`), `images/bg04.jpg` (1900×900, a single large snowflake on a blue-white blur, average `rgb(125,142,159)`) — recreation uses `https://picsum.photos/seed/oncoming-bg1/1900/900` … `.../oncoming-bg4/1900/900` | fixed full-screen cross-fade slideshow                                        |
| slideshow            | `position:fixed; z-index:0; 100%×100%`; item `transition:opacity 1000ms`; 7000 ms interval; wraps all FOUR photos; honours `prefers-reduced-motion`                                                                                                                                                                                                                                                                                                                                                                                                                                 | background                                                                    |
| content layer        | `width:100%; min-height:100vh`, `position:relative; z-index:1`, `display:flex; flex-direction:column; align-items:center; justify-content:space-between`                                                                                                                                                                                                                                                                                                                                                                                                                            | page shell (the layout mechanism)                                             |
| top bar              | `width:100%`, wrap, `justify-content:space-between; align-items:center`, `padding:22px 80px 0 80px` (≤576px side padding 15px; NO bottom padding)                                                                                                                                                                                                                                                                                                                                                                                                                                   | band 1                                                                        |
| mark                 | white uppercase letter-spaced wordmark (source 119×22 PNG reading "WINTER", alt "LOGO"), container `flex-grow:1`, 30px right / 10px top & bottom margin; recreation renders its OWN name/mark (source wordmark file and string never copied)                                                                                                                                                                                                                                                                                                                                        | band 1 left                                                                   |
| Sign Up pill         | `min-width:140px`, `height:50px`, `padding:0 15px`, `background:#fff`, `border-radius:25px`, label `Lato-Regular` 18px/1.2 `#555` UPPERCASE (sans, letter-spacing from the source's `uppercase` + `#555`), `transition:all .4s`                                                                                                                                                                                                                                                                                                                                                     | band 1 right                                                                  |
| Sign Up pill hover   | fill → SOLID `#555555`, label → `#fff`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | over `.4s`                                                                    |
| hero block           | `display:flex; flex-direction:column; align-items:center; justify-content:center`, `padding:50px 15px 120px`                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | band 2 (middle of the space-between column)                                   |
| heading              | `Lato-Hairline` (weight 100) 72px/1.1 white UPPERCASE, centred, 35px below; 55px at ≤576px; no explicit `letter-spacing`                                                                                                                                                                                                                                                                                                                                                                                                                                                            | hero block                                                                    |
| countdown container  | wrap + `justify-content:center`; `max-width:370px` at ≤992px (two units per row), `max-width:170px` at ≤576px (one unit per row)                                                                                                                                                                                                                                                                                                                                                                                                                                                    | hero block (below the heading)                                                |
| countdown unit       | `display:flex; flex-direction:column; align-items:center`, `min-width:165px`, 30px below (×4)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | countdown row (×4)                                                            |
| countdown digits     | `PlayfairDisplay-Italic` **120px**/1 white UPPERCASE, 37px below — the largest type on the page                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | each unit                                                                     |
| countdown labels     | `PlayfairDisplay-Italic` 18px/1 white, 20px RIGHT padding (shifts the centred label ~10px left of the numeral's axis); abbreviated "Days" / "Hr" / "Min" / "Sec"                                                                                                                                                                                                                                                                                                                                                                                                                    | each unit (under the numeral)                                                 |
| countdown colons     | the digits' own 120px italic serif white ":" with 15px top padding; the MIDDLE colon hidden at ≤992px, the OUTER two hidden at ≤576px                                                                                                                                                                                                                                                                                                                                                                                                                                               | between units (×3)                                                            |
| countdown order      | days → hours → minutes → seconds (source DOM also in that order; static demo values `35`/`17`/`50`/`39` are NEVER hard-coded as content)                                                                                                                                                                                                                                                                                                                                                                                                                                            | countdown row                                                                 |
| countdown behaviour  | target `now + 35 d + 19 h` (the configured `new Date(0,-1,35,19,…)` is always past); 1 s tick; days raw, h/m/s zero-padded; immediate first paint; interval cleared at 0 and on unmount                                                                                                                                                                                                                                                                                                                                                                                             | countdown                                                                     |
| social row           | wrap + `justify-content:center; align-items:center`, `padding-bottom:35px`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | band 3 (bottom edge of the space-between column)                              |
| social button        | `36×36`, `border:1px solid #fff`, `border-radius:50%` (CIRCLE), transparent fill, 18px white glyph, `transition:all .4s`, margins 3px sides / 5px bottom (6px gaps)                                                                                                                                                                                                                                                                                                                                                                                                                 | social row (×3)                                                               |
| social glyphs        | Facebook, Twitter/X and YouTube — source inlines `fa-facebook` / `fa-twitter` / `fa-youtube-play` SVG paths; the recreation uses lucide-react equivalents and NEVER copies the paths                                                                                                                                                                                                                                                                                                                                                                                                | social row                                                                    |
| social hover         | fill → solid `#fff` (inverting the disc), glyph → `#555`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | over `.4s`                                                                    |
| radii                | 25px (Sign Up pill), 50% (36px social circles), 0px (everything else)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | shapes                                                                        |
| accent colour        | NONE — the page's only colour comes from the photography through the 50% scrim; no brand colour token, no gradient token                                                                                                                                                                                                                                                                                                                                                                                                                                                            | palette                                                                       |
| fonts                | Lato-Hairline 72px (heading, weight 100) · Lato-Regular 18px UPPERCASE (pill label) · PlayfairDisplay-Italic 120px (digits + colons) and 18px (labels)                                                                                                                                                                                                                                                                                                                                                                                                                              | typography                                                                    |
| Google Fonts mapping | Lato **100** (Hairline) + **400** and Playfair Display **400 italic** — the source's faces are Lato-Hairline, Lato-Regular and PlayfairDisplay-Italic; no icon font is needed (lucide-react)                                                                                                                                                                                                                                                                                                                                                                                        | `index.html` `<link>`                                                         |
| base type            | `body,html{font-family:Arial,sans-serif; font-size:15px; color:#666666; background:#fff}` (all visible type is Lato / Playfair Display)                                                                                                                                                                                                                                                                                                                                                                                                                                             | typography                                                                    |
| transitions          | `all .4s` (pill, socials), `opacity 1000ms` (slideshow), `7000ms` interval, `1000ms` countdown tick                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | interaction                                                                   |
| e-mail capture       | NONE — no form, no well, no submit lane, no validation bubble on this slug (family-unique)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | —                                                                             |
| attribution          | Lato-Regular 12–13px white/70 centred line under the page content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | footer requirement (ADDED vs the reference — the source has no footer credit) |

<!-- ref-reverify:2026-10-22 -->

## Live reference restored (2026-10-22)

The prep recorded this ColorLib preview as unreachable, so its tokens were
read off the TEMPLATES.md screenshot and the docs brief says "screenshot
only". **Re-probed 2026-10-22** the reference answers **HTTP 200**, so the
live DOM and CSS are authoritative for token values — `docs/replication.md`:
*CSS values are canonical over screenshots*. The screenshot stays the layout
target.

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_11/index.html` | HTTP 200 · 5,009 B · title `Coming Soon 11` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_11/css/style.css?v=b77d0db0` | HTTP 200 · 8,561 B · sha256 `b7eb38ceb58d` |

## Requirements

### Feature: Fixed four-photo cross-fade slideshow under a single 50% scrim

One fixed full-viewport photograph slideshow cycling four winter photos,
darkened by a single `rgba(0,0,0,0.5)` scrim — no gradient wash, and no
`#000` backdrop behind the photographs.

#### Scenario: Page renders as one photographed-and-scrimmed screen

- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a fixed, `z-index:0`, `100% × 100%` background layer sits behind
  everything holding FOUR `cover`-sized, centred, no-repeat photographs, and the
  layer itself carries NO background colour (a cross-fade reveals the page body,
  not a black fill)
- **And** above it a content layer occupies `width:100%; min-height:100vh`,
  `position:relative; z-index:1`
- **And** ONE full-size overlay sits over the photograph inside the content
  layer: `rgba(0,0,0,0.5)` — a 50% black scrim
- **And** there is NO gradient layer and NO brand/accent colour anywhere on the
  page (the only colour comes from the photography)
- **And** the content layer itself is the layout: `display:flex;
flex-direction:column; align-items:center; justify-content:space-between`, so
  the top bar pins to the top edge, the hero block floats in the middle and the
  social row sits on the bottom edge of the `100vh` column
- **And** there is NO navbar, NO footer band, NO form, NO modal and NO
  scrolling section

#### Scenario: Background cross-fades through four photographs

- **Given** the slideshow layer holds FOUR photographs
- **When** the effect runs
- **Then** the first photograph is shown initially and the other three are hidden
- **And** every 7000 ms the current photograph fades out and the next fades in
  over a 1000 ms opacity transition, and the old one is hidden once the
  transition completes
- **And** the cycle wraps around after the FOURTH photograph back to the first
- **And** when `prefers-reduced-motion: reduce` matches, the slideshow stays on
  the first photograph and never cycles
- **And** the interval is cleared on unmount

### Feature: Top bar (white wordmark and white Sign Up pill)

A white uppercase letter-spaced wordmark pinned left and a 140×50 white
25px-radius pill pinned right, with no bottom padding of its own.

#### Scenario: Top bar renders the reference chrome

- **Given** the screen renders
- **When** the top bar is visible
- **Then** it is a full-width wrapping row with
  `justify-content:space-between; align-items:center` and
  `padding:22px 80px 0 80px` (side padding 15px at ≤576px, NO bottom padding)
- **And** its left child is the app's OWN white wordmark/mark (a text wordmark
  or inline SVG in white uppercase with wide tracking — the source's 119×22
  "WINTER" PNG, its alt and the string "WINTER" are NEVER copied) in a
  `flex-grow` container with 30px right / 10px top & bottom margins
- **And** its right child is a single pill CTA labelled with a "Sign
  Up"-equivalent string, `min-width:140px`, `height:50px`, `padding:0 15px`,
  `background:#fff`, `border-radius:25px`, an 18px `Lato-Regular` UPPERCASE
  `#555` label, `transition:all .4s`
- **And** hovering the pill over `.4s` fills it with SOLID `#555555` (not a
  translucent white) and turns the label `#fff`, so the label stays legible
  throughout

### Feature: Centred hero block — hairline-sans heading over a 120px serif clock

The middle band of the space-between column: a weight-100 uppercase sans
heading, and beneath it a horizontal countdown of four 120px italic-serif
numerals separated by italic-serif colons.

#### Scenario: Hero block renders the reference typography

- **Given** the screen renders at desktop width
- **When** the hero block is visible
- **Then** it is a flex column, `align-items:center`, `justify-content:center`,
  with `padding:50px 15px 120px`, floating in the vertical middle of the
  `100vh` content column
- **And** it renders an `h3` reading a coming-soon-equivalent string
  (paraphrasable copy; the source's own "Coming Soon" heading is never reused
  verbatim) in the weight-100 `Lato-Hairline` cut, **72px**/1.1, white,
  UPPERCASE, centred, with 35px below it, dropping to 55px at ≤576px
- **And** no `letter-spacing` is declared — the tracking comes from the face
- **And** beneath it, a countdown container that is a wrapping flex row with
  `justify-content:center`, capped at `max-width:370px` at ≤992px and
  `max-width:170px` at ≤576px

#### Scenario: Countdown renders the reference treatment

- **Given** the screen renders
- **When** the countdown row is visible
- **Then** it holds FOUR units in the order days → hours → minutes → seconds,
  each a flex column with `align-items:center`, `min-width:165px` and 30px
  below, separated by THREE colon separators in document order
- **And** each unit renders its numeral in `PlayfairDisplay-Italic`
  **120px**/1, white, UPPERCASE — the largest type on the page, larger than the
  72px heading — with 37px below it
- **And** beneath each numeral an 18px `PlayfairDisplay-Italic` white
  ABBREVIATED label ("Days" / "Hr" / "Min" / "Sec") carrying 20px right padding,
  so the label's centred text sits ~10px left of the numeral's axis
- **And** each separator is a 120px italic-serif white ":" with 15px top padding
  (sitting on the numerals' optical centre line)
- **And** the MIDDLE separator is hidden at ≤992px and the OUTER two are hidden
  at ≤576px, matching the row wrapping to two units per row and then one
- **And** no unit borrows the source's static DOM values (`35`/`17`/`50`/`39`)
  as its content — the values come from the live countdown

#### Scenario: Countdown counts down like the reference

- **Given** the countdown is mounted
- **When** it first paints and then a second elapses
- **Then** the target is `now + 35 days + 19 hours` (the source's configured
  `new Date(0, -1, 35, 19, 0, 0)` is always in the past, so the fallback target
  is what runs and the clock never reads all zeros)
- **And** the day value is written RAW (no zero padding) while hours, minutes
  and seconds are zero-padded to two digits
- **And** the values repaint immediately on mount and then once per second, and
  the interval is cleared on unmount and when the remaining time reaches 0

### Feature: Bottom row of three white-outlined circular social buttons

Three 36×36 transparent circles with a 1px white border and an 18px white glyph,
centred on the bottom edge of the page, inverting to solid white discs on hover.

#### Scenario: Social row renders the reference glyphs

- **Given** the screen renders
- **When** the social row is visible
- **Then** it is a wrapping flex row with `justify-content:center;
align-items:center` and `padding-bottom:35px`, sitting on the BOTTOM edge of the
  `100vh` content column (the third band of the space-between axis)
- **And** it holds THREE anchors, each `36×36`, transparent fill, with a
  `1px solid #fff` border and a `border-radius:50%` (CIRCLES, not squares), an
  18px white glyph, `transition:all .4s`, with 3px side margins and 5px bottom
  margin (so they sit 6px apart horizontally)
- **And** the three glyphs are a Facebook, a Twitter/X and a YouTube mark
  (lucide-react or equivalent — the source's inlined FontAwesome
  `fa-facebook` / `fa-twitter` / `fa-youtube-play` paths are NEVER copied)
- **And** hovering a circle over `.4s` fills it SOLID white and turns its glyph
  `#555`, so the outlined disc inverts

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4 `@theme`
tokens.

#### Scenario: Theme tokens match the reference

- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: the `rgba(0,0,0,0.5)` scrim, white text and
  white glyphs, the Sign Up pill (`#fff` fill, `#555` label, `#555555` hover
  fill with a white label), the social circle (`1px #fff` border, `#fff` hover
  fill with a `#555` glyph), and NO slideshow backdrop colour
- **And** there is NO brand accent colour and NO gradient token in this slug
- **And** Lato (100 Hairline / 400) and Playfair Display (400 italic) load via a
  Google Fonts `<link>` in `index.html`; there is no icon font and no mono face
- **And** shapes are radius 25px (Sign Up pill), 50% (36px social circles) and
  0px elsewhere (countdown units and colons are unboxed); transitions are
  `all .4s` (pill, socials), `opacity 1000ms` (slideshow), the countdown ticks at
  1000 ms and the slideshow advances at 7000 ms

### Feature: Footer attribution

The reference has no footer credit and no footer band; the monorepo requires a
Component Dock attribution, so a small line is added under the page content.

#### Scenario: Attribution links Component Dock

- **Given** the page renders
- **When** the attribution line is visible
- **Then** it renders in Lato 12–13px, centred (or bottom-left near the social
  row), as a small line reading a Component-Dock attribution (e.g. "More
  templates at Component Dock") linking `https://www.componentdock.com/`,
  branded "Component Dock"
- **And** it never mentions ColorLib, "Colorlib", the source demo title, the
  source credit line or the source slug
- **And** it is the ONLY addition to the reference layout (documented as a
  deliberate deviation in the spec and PR)

## Verification checklist

- [ ] Layout 1:1 with the reference: a fixed `z-index:0` full-screen slideshow
      layer with FOUR `cover` photos and **no** `#000` fill behind them; ONE
      overlay — `bg-black/50` — and NO gradient; the page shell is
      `flex flex-col items-center justify-between w-full min-h-screen relative
    z-1` so the three bands pin to top / middle / bottom; no navbar, no
      footer band, no form, no scrolling section
- [ ] Band order matches: top bar (own white wordmark left, "Sign Up"-equivalent
      pill right) → centred hero block (heading + countdown) → social row →
      Component Dock attribution
- [ ] Top bar: `w-full flex flex-wrap justify-between items-center
    pt-[22px] px-[80px] pb-0` (≤576px `px-[15px]`), NO bottom padding; the
      mark container is `flex-grow` with 30px right / 10px block margins; the
      mark is the app's OWN white uppercase wordmark (never the source 119×22
      "WINTER" PNG or its string)
- [ ] Sign Up pill: `min-w-[140px] h-[50px] px-[15px] bg-white rounded-[25px]`,
      Lato 400 18px/1.2 `#555` UPPERCASE label, `transition-all
    duration-[400ms]`, hover `bg-[#555555] text-white` (SOLID fill, not
      translucent)
- [ ] Hero block: `flex flex-col items-center justify-center pt-[50px]
    pb-[120px] px-[15px]`
- [ ] Heading: `h3` in Lato **100 (Hairline)** 72px/1.1 white UPPERCASE,
      centred, `pb-[35px]`, 55px at ≤576px, no `letter-spacing`
- [ ] Countdown: wrapping `flex justify-center` row, `max-w-[370px]` at ≤992px
      and `max-w-[170px]` at ≤576px; FOUR `min-w-[165px] flex-col items-center
    mb-[30px]` units in the order days → hours → minutes → seconds, each a
      Playfair Display **Italic 120px**/1 white numeral (`pb-[37px]`) over an
      18px italic white ABBREVIATED label ("Days" / "Hr" / "Min" / "Sec") with
      `pr-[20px]`
- [ ] Colons: three 120px italic-serif white ":" separators with
      `pt-[15px]`, the MIDDLE one `hidden` at ≤992px and the OUTER two `hidden`
      at ≤576px
- [ ] Countdown behaviour: 1 s tick toward `now + 35 d + 19 h`; days written raw
      while h/m/s are zero-padded; immediate first paint; interval cleared on
      unmount and at zero remaining
- [ ] Slideshow: fixed inset-0 layer with FOUR `1900×900` placeholder photos
      (`https://picsum.photos/seed/oncoming-bg1/1900/900` … `...-bg4/1900/900`),
      first shown, rest hidden, cross-fade over `1000ms` every `7000ms` wrapping
      all four, frozen on the first photo when `prefers-reduced-motion: reduce`,
      `clearInterval` on unmount
- [ ] Social row: `flex flex-wrap justify-center items-center pb-[35px]`;
      THREE `size-9` (36×36) anchors, `border border-white rounded-full`,
      transparent fill, 18px white glyphs, `transition-all duration-[400ms]`,
      3px side / 5px bottom margins, hover `bg-white text-[#555]`; icons are
      lucide-react brand marks (no copied fa paths)
- [ ] Fonts: Lato **100 / 400** + Playfair Display **400 italic** via Google
      Fonts `<link>`; radii 25px / 50% / 0px; transitions `.4s`, `1000ms`
      (slideshow); scrim `rgba(0,0,0,0.5)`; NO accent colour token, NO gradient
      token, NO slideshow backdrop colour token
- [ ] Icons are the recreation's own inline-SVG brand marks (the icon set no
      longer ships brand glyphs, so Facebook / Twitter-X / YouTube are hand-drawn
      `simple-icons` shapes, exactly as the sibling coming-soon apps do); no
      copied assets, wordmark, photo, favicon, font files or CSS; no jQuery, no
      framework, no CDN runtime
- [ ] Component Dock attribution links `https://www.componentdock.com/`
- [ ] Zero `colorlib` / source-demo-title / `comingsoon_11` / `WINTER`
      references anywhere in `apps/oncoming` (comments included)
- [ ] App folder `apps/oncoming`, package `@free-react-templates/oncoming`,
      `homepage` `https://oncoming.free.componentdock.com`, `public/CNAME`
      `oncoming.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh oncoming` passes
