# Impending — design notes (replication research)

Source: ColorLib **Coming Soon V10** —
https://colorlib.com/wp/template/comingsoon_10/ (source slug `comingsoon_10`;
ColorLib page HTTP 200, 109,308 B, `text/html; charset=UTF-8`, page title
"Coming Soon V10 - Free Website Template 2026 - Colorlib", description "A
modern, easy-to-use and responsive free coming soon website template that helps
create an impressive under construction page" — verified 2026-10-11). The theme
preview `https://preview.colorlib.com/theme/comingsoon_10/` returns **HTTP 404**
(9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same live-preview gap
as the rest of the `comingsoon_*` family; there is no `theme/bootstrap/<slug>/`
variant either). Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_10.zip`
(HTTP 200, 757,898 B, `application/zip`) — the real template's own files — as the
DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-10.jpg`
(HTTP 200, 27,907 B, served as `image/avif` — the slug is AVIF, not JPEG —
1200×972).

Reference artifacts: `/tmp/cs10/cs10.zip`, extracted to
`/tmp/cs10/out/comingsoon_10/` (`index.html` 6,046 B · `css/style.css` 12,772 B ·
`js/snippet.js` 4,003 B · `README.md` 1,261 B · `images/bg01.jpg` 1900×900,
121,109 B · `images/bg02.jpg` 1900×900, 192,851 B · `images/bg03.jpg` 1900×900,
125,797 B · `images/icons/logo.png` 55×31 RGBA, 1,263 B · `images/icons/favicon.ico`
32,038 B · `fonts/PlayfairDisplay-BlackItalic.woff2` 75,548 B ·
`PlayfairDisplay-Bold.woff2` 75,964 B · `PlayfairDisplay-Italic.woff2` 75,304 B ·
`Poppins-Medium.woff2` 48,444 B · `Poppins-Regular.woff2` 48,416 B ·
`fontawesome-webfont-subset.woff2` 576 B), screenshot saved to
`/tmp/cs10/shot.avif` + `/tmp/cs10/shot.jpg` (1200×972), photo previews to
`/tmp/cs10/bg01_s.jpg` … `bg03_s.jpg` (900×426), ColorLib page saved to
`/tmp/cs10/src10.html`. Research date: 2026-10-11.

## Visual summary (from screenshot + source)

One full-viewport screen with *no scrolling content*, and — unusually for this
family — **no colour at all**. Behind everything is a `position:fixed`,
full-size, `#000`-backed photograph slideshow that cross-fades between THREE
`1900×900` photos every 7 s over a 1 s fade. Over the photo sits exactly ONE
overlay: a `rgba(0,0,0,0.7)` scrim. There is no gradient wash, so the page reads
as near-black with only ~30% of the photography visible — a very different
treatment from the violet/magenta-washed siblings.

The layout is not a centred column either. The top bar carries the page's
vertical rhythm with `padding-bottom:185px`, and beneath it a
`flex-sb flex-row-rev` wrapper (`padding:0 46px 0 58px`) holds three blocks:

1. **Top bar** — left: a small white mark of two overlapping filled triangles (a
   mountain-peak glyph, 55×31, no text). Its container has `flex-grow:1`, so it
   also pushes the CTA to the right edge. Right: a white pill button,
   `min-width:140px`, `height:50px`, `border-radius:25px`, whose label is
   `PlayfairDisplay-Italic` 18px `#333` in SENTENCE CASE — "Sign Up" — not the
   uppercase sans pill of the siblings; hover turns the fill to
   `rgba(255,255,255,0.12)` and the label white.
2. **Content wrapper** — `justify-content:space-between; flex-direction:row-reverse`,
   `position:relative`:
   - a **heading block taken out of flow** (`.where3`: `position:absolute; top:0;
     left:19%; max-width:600px`) carrying the biggest type on the page — "Coming
     Soon" in `PlayfairDisplay-BlackItalic` **90px** white — then "Follow us for
     update now!" in `Poppins-Regular` 24px `#cccccc`, then a 500×60 translucent
     e-mail well (`rgba(255,255,255,0.1)`, `padding-right:80px`) holding a
     `Poppins-Medium` 15px white input with a white "Email Address" placeholder
     and an 80px-wide absolutely positioned right submit lane with a 15px white
     paper-plane glyph;
   - the **vertical countdown** (`.cd100`: `flex-direction:column`,
     `padding-top:34px`) at the RIGHT edge — four `90px`-wide units, each a 60px
     `PlayfairDisplay-Bold` white number over a 14px `PlayfairDisplay-Italic`
     white sentence-case label, left-aligned, with NO colons, boxes or rings;
   - the **vertical social stack** (`.where2`: `flex-direction:column`,
     `padding-top:470px`) at the LEFT edge — three 36×36 transparent boxes with
     NO border and NO radius, holding 28px white SQUARE brand glyphs (Facebook
     official, Twitter square, Pinterest square) that dim to
     `rgba(255,255,255,0.2)` on hover.

The screenshot matches this exactly: an almost-black rose photograph, white
peak mark top-left, white "SIGN UP" (italic serif) pill top-right, a huge italic
"Coming Soon" on the left with the grey sub-line and the translucent e-mail bar,
four big white serif numbers stacked down the right (35 / 18 / 59 / 57) with
small italic labels under them, and three white square social glyphs stacked at
the lower left. The screenshot's very top strip is the marketing page's browser
chrome ("colorlib.com") — not part of the template.

Validated in the source: `.overlay1::after{background:rgba(0,0,0,0.7)}` is the
only overlay pseudo-element in the sheet — there is no `::before` gradient, no
brand hex, and `.simpleslide100` itself sets `background-color:#000`.

## Background photographs

- `bg01.jpg` (1900×900, 121,109 B, average `rgb(45,43,43)`, corners
  `rgb(16,16,18)`) — a pale **garden rose** lit from above on a pure black
  background: a big creamy-white rose head filling the centre-left, dark leaves
  and near-black negative space around it. This is the photo the screenshot
  shows (its top third is what survives the 70% scrim).
- `bg02.jpg` (1900×900, 192,851 B, average `rgb(41,49,37)`) — a dark
  **palm-frond** macro: long green leaflets fanning from a bright yellow-green
  mid-rib across a black background, in a busy diagonal composition. Much
  greener than the other two, so the 7 s cross-fade shifts the page from neutral
  black to a faint green-black.
- `bg03.jpg` (1900×900, 125,797 B, average `rgb(97,91,104)`) — a **dusk mountain
  landscape**: a silhouetted conifer on the left, forested ridges below a valley
  filling with fog, and a warm low sun glowing behind cloud bands in a
  purple-blue sky. The brightest and most colourful of the three; its fog/sun
  band passes right behind the countdown column.

Recreation placeholders (deterministic, per `docs/replication.md`):
`https://picsum.photos/seed/impending-bg1/1900/900`,
`https://picsum.photos/seed/impending-bg2/1900/900` and
`https://picsum.photos/seed/impending-bg3/1900/900`. The source photos (and the
`logo.png` peak mark, the favicon and the fa SVG paths) are NEVER copied.

## DOM skeleton (from the source zip)

```
div.simpleslide100                              <- fixed background slideshow (#000)
  div.simpleslide100-item.bg-img1  (bg01.jpg)
  div.simpleslide100-item.bg-img1  (bg02.jpg, style="display:none")
  div.simpleslide100-item.bg-img1  (bg03.jpg, style="display:none")

div.size1.overlay1                              <- content layer (70% black scrim)
  div.w-full.flex-w.flex-sb-m.p-l-65.p-r-80.p-t-22.p-b-185.p-lr-15-sm.respon8
                                                <- TOP BAR
    div.wrappic1.m-r-30.m-t-10.m-b-10 > a > img LOGO.png
    div.flex-w.m-t-10.m-b-10 > a.size2.m1-txt1.flex-c-m.how-btn1.trans-04
      "Sign Up"
  div.flex-sb.flex-row-rev.where3-parent.p-l-58.p-r-46.respon2
                                                <- CONTENT (row-reverse)
    div.where3.wsize2.respon1                   <- absolute top:0 left:19%
      h3.l1-txt2.p-b-30.respon6.respon7        "Coming Soon"
      p.m2-txt1.respon6                        "Follow us for update now!"
      form.contact100-form.validate-form.p-t-55.w-full
        div.wrap-input100.validate-input.m-lr-auto-lg
            [data-validate="Email is required: ex@abc.xyz"]
          input.s2-txt1.placeholder0.input100.trans-04[name=email]
            placeholder "Email Address"
          button.flex-c-m.ab-t-r.size4.s1-txt1.hov1.trans-04
            i.fa.fa-paper-plane.fs-15.cl0 (inlined svg.cl-icon)
    div.flex-w.flex-col.cd100.p-t-34.respon3    <- COUNTDOWN (vertical, right)
      div.flex-col.wsize1.m-b-40.respon4 > span.l1-txt1.p-b-30.days "35"
                                         + span.s1-txt1 "Days"
      div.flex-col.wsize1.m-b-40.respon4 > span.l1-txt1.p-b-30.hours "17"
                                         + span.s1-txt1 "Hours"
      div.flex-col.wsize1.m-b-40.respon4 > span.l1-txt1.p-b-30.minutes "50"
                                         + span.s1-txt1 "Minutes"
      div.flex-col.wsize1.m-b-40.respon4 > span.l1-txt1.p-b-30.seconds "39"
                                         + span.s1-txt1 "Seconds"
    div.flex-w.flex-col.where2.respon5          <- SOCIAL STACK (vertical, left)
      a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5  (facebook-official)
      a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5  (twitter-square)
      a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5  (pinterest-square)
```

Layout mechanics worth keeping in mind when rebuilding:

- The wrapper is `row-reverse` **and** `space-between`, so the FIRST in-flow
  child (`.cd100`, the countdown) lands at the RIGHT edge and the LAST
  (`.where2`, the social stack) at the LEFT edge. DOM order ≠ visual order.
- The heading block is `position:absolute` against the `position:relative`
  wrapper (`left:19%`), so it is NOT part of that axis at all — it floats over
  the left side while the countdown owns the right.
- `.where2{padding-top:470px}` is a hard vertical offset (not a flex alignment)
  that drops the social stack to the lower left.
- The top bar's `padding-bottom:185px` is the only thing separating the top bar
  from the wrapper (there is no `justify-content:space-between` on the page
  column, unlike the sibling slugs).

## CSS token reference (verbatim from `css/style.css`)

```css
.simpleslide100 { display:block; position:fixed; z-index:0; width:100%; height:100%;
                  top:0; left:0; background-color:#000 }
.simpleslide100-item { display:block; position:absolute; width:100%; height:100%; top:0; left:0 }
.bg-img1 { background-position:center; background-repeat:no-repeat; background-size:cover }

.size1 { width:100%; min-height:100vh }
.overlay1 { position:relative; z-index:1 }
.overlay1::after {                              /* the ONLY overlay — no ::before gradient */
  content:""; display:block; position:absolute; z-index:-1;
  width:100%; height:100%; top:0; left:0;
  background:rgba(0,0,0,0.7);
}

.flex-w  { display:flex; flex-wrap:wrap }
.flex-sb { display:flex; justify-content:space-between }
.flex-c-m { display:flex; justify-content:center; align-items:center }
.flex-sb-m { display:flex; justify-content:space-between; align-items:center }
.flex-col { display:flex; flex-direction:column }
.flex-row-rev { display:flex; flex-direction:row-reverse }
.trans-04 { transition:all 0.4s }
.ab-t-r { position:absolute; right:0px; top:0px }

.w-full  { width:100% }
.p-t-22  { padding-top:22px }   .p-t-34 { padding-top:34px }  .p-t-55 { padding-top:55px }
.p-b-30  { padding-bottom:30px } .p-b-185 { padding-bottom:185px }
.p-l-58  { padding-left:58px }  .p-l-65 { padding-left:65px }
.p-r-46  { padding-right:46px } .p-r-80 { padding-right:80px }
.m-t-10  { margin-top:10px }   .m-b-5 { margin-bottom:5px }   .m-b-10 { margin-bottom:10px }
.m-b-40  { margin-bottom:40px } .m-l-3 { margin-left:3px }    .m-r-3 { margin-right:3px }
.m-r-30  { margin-right:30px }
.fs-15   { font-size:15px }

.s1-txt1 { font-family:PlayfairDisplay-Italic; font-size:14px; color:#fff; line-height:1 }
.s2-txt1 { font-family:Poppins-Medium; font-size:15px; color:#fff; line-height:1.2 }
.m1-txt1 { font-family:PlayfairDisplay-Italic; font-size:18px; color:#333; line-height:1.2 }
.m2-txt1 { font-family:Poppins-Regular; font-size:24px; color:#cccccc; line-height:1.2 }
.l1-txt1 { font-family:PlayfairDisplay-Bold; font-size:60px; color:#fff; line-height:1 }
.l1-txt2 { font-family:PlayfairDisplay-BlackItalic; font-size:90px; color:#fff; line-height:1.1 }
.cl0     { color:#fff }

.size2 { min-width:140px; height:50px }
.size3 { width:36px;  height:36px }
.size4 { width:80px;  height:100% }
.wsize1 { width:90px }
.wsize2 { max-width:600px }

.where2 { padding-top:470px }
.where3-parent { position:relative }
.where3 { position:absolute; top:0; left:19% }

.wrap-input100 { width:500px; max-width:100%; position:relative;
                 background-color:transparent; height:60px; padding-right:80px;
                 background-color:rgba(255,255,255,0.1) }
.input100 { display:block; width:100%; height:100%; padding:0 15px 0 25px;
            background-color:rgba(255,255,255,0.0) }
.input100:focus { background-color:rgba(255,255,255,0.12) }
.placeholder0::-webkit-input-placeholder { color:#fff }   /* + -moz/-ms variants */
.validate-input { position:relative }
.alert-validate::before { content:attr(data-validate); position:absolute; max-width:70%;
  background-color:#fff; border:1px solid #c80000; border-radius:0px;
  padding:4px 25px 4px 10px; top:50%; transform:translateY(-50%); right:82px;
  pointer-events:none; font-family:Poppins-Medium; color:#c80000; font-size:14px;
  line-height:1.4; text-align:left; visibility:hidden; opacity:0;
  transition:opacity 0.4s }
.alert-validate::after { content:"\f071"; font-family:FontAwesome; display:block;
  position:absolute; color:#c80000; font-size:14px; top:50%;
  transform:translateY(-50%); right:88px }
.alert-validate:hover:before { visibility:visible; opacity:1 }

.wrappic1 { display:block; flex-grow:1 }
.wrappic1 img { max-width:100% }
.how-btn1 { padding:0 15px; background-color:#fff; border-radius:25px }
.how-btn1:hover { background-color:rgba(255,255,255,0.12); color:#fff }
.hov1:hover { background-color:rgba(255,255,255,0.12) }
.how-social { color:#fff; font-size:28px; background-color:transparent }
.how-social:hover { color:rgba(255,255,255,0.2) }

.fa { display:inline-block; line-height:1; font-size:inherit; font-style:normal }
.cl-icon { height:1em; width:auto; fill:currentColor; display:inline-block }

body,html { font-family:Arial,sans-serif; font-size:15px; color:#666666;
            height:100%; background-color:#fff }
h3,p { margin:0px }

@media (max-width:992px) {
  .m-lr-auto-lg { margin-right:auto; margin-left:auto }
  .respon1 { position:relative; left:unset; top:unset; max-width:100%;
             display:flex; flex-direction:column; align-items:center; flex-wrap:wrap }
  .respon2 { flex-direction:column; justify-content:flex-start; align-items:center;
             padding-left:15px; padding-right:15px }
  .respon3 { flex-direction:row; justify-content:center; padding-top:80px }
  .respon4 { align-items:center; margin-right:15px; margin-left:15px }
  .respon5 { padding-top:100px; padding-bottom:30px; flex-direction:row; justify-content:center }
  .respon6 { text-align:center }
  .alert-validate::before { visibility:visible; opacity:1 }
}
@media (max-width:768px) { .respon8 { padding-bottom:60px } }
@media (max-width:576px) {
  .p-lr-15-sm { padding-left:15px; padding-right:15px }
  .respon7 { font-size:65px }
}
```

Fonts (`@font-face`, self-hosted woff2): **PlayfairDisplay-Italic**,
**PlayfairDisplay-Bold**, **PlayfairDisplay-BlackItalic**, **Poppins-Regular**,
**Poppins-Medium**, plus a 576 B FontAwesome subset used only for the validation
warning glyph. Google Fonts equivalent: Playfair Display **400 italic / 700 /
900 italic** + Poppins **400 / 500**.

## Behaviour (`js/snippet.js`)

- **Countdown** — `COUNTDOWNS = [{sel:".cd100", kind:"spans", cfg:{Y:0,M:0,D:35,
  h:19,m:0,s:0}}]`. Target `new Date(0, -1, 35, 19, 0, 0)` is always in the past,
  so `end = Date.now() + 35*864e5 + 19*36e5` (now + 35 d + 19 h) is what runs.
  `paint()` writes `r.d` RAW into `.days`, and `pad(r.h)`/`pad(r.m)`/`pad(r.s)`
  (`pad = n => ('0'+n).slice(-2)`) into `.hours`/`.minutes`/`.seconds`; runs once
  immediately then every 1000 ms; `clearInterval` when `r.t <= 0`. Skips elements
  already containing a `.flip-clock-wrapper`.
- **Slideshow** — for each `.simpleslide100`: needs ≥2 items (this slug has
  THREE); sets `transition:opacity 1000ms`, shows item 0 (`opacity:1; display:''`)
  and hides the rest; then, unless `prefers-reduced-motion: reduce` matches,
  every 7000 ms cross-fades current→next (`next.style.display='';
  next.style.opacity='0'` then next frame `next.opacity='1'; cur.opacity='0'`,
  and `cur.display='none'` after `SPEED=1000` ms), wrapping
  `now = (now+1) % items.length`.
- **Form validation** — for each `.validate-form`: on `submit`, every invalid
  field's `.validate-input` wrapper gains `.alert-validate` and, if any field was
  invalid, `event.preventDefault()`. Each field removes the class on `focus`.
  Validity: `EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` for `type=email` /
  `name=email` fields, otherwise a non-empty trimmed value. The bubble's copy is
  the wrapper's own `data-validate` attribute
  (`"Email is required: ex@abc.xyz"`).

No jQuery, no Bootstrap, no build step, no CDN call at runtime (per the source
`README.md`).

## Source → React adaptation table

| Reference (source)                                             | Recreation (`apps/impending`)                                                  |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `.simpleslide100` fixed `#000` layer with 3 bg items           | `Slideshow.tsx` — `fixed inset-0 bg-black`, three cover photos, 7 s cross-fade |
| `bg01.jpg` / `bg02.jpg` / `bg03.jpg`                           | `picsum.photos/seed/impending-bg1/1900/900` + `-bg2` + `-bg3`                   |
| `.overlay1::after{background:rgba(0,0,0,0.7)}`                 | one scrim layer `bg-black/70` (NO gradient element)                            |
| `logo.png` two-triangle peak mark                              | app's own white peak SVG / name (no image asset copied)                        |
| `.size2.m1-txt1.how-btn1` "Sign Up" (italic serif `#333`)      | `SignUpButton.tsx` white 25px pill, italic-serif label, translucent hover     |
| `.where3` absolute `top:0 left:19%` `max-width:600px`          | `HeroColumn.tsx` — `absolute top-0 left-[19%] max-w-[600px]`                  |
| `h3.l1-txt2` Playfair Black Italic 90px                        | `Heading.tsx` — italic serif 90px/1.1 white, 65px ≤576px                        |
| `p.m2-txt1` Poppins-Regular 24px `#cccccc`                     | `SubLine.tsx` — 24px `#cccccc`                                                 |
| `.wrap-input100` 500×60 `rgba(255,255,255,0.1)` + 80px pad-right | `EmailForm.tsx` well `w-[500px] h-[60px] pr-[80px] bg-white/10`                |
| `.input100` transparent → `0.12` focus, white placeholder      | controlled input with `focus:bg-white/[0.12]`                                  |
| `button.ab-t-r.size4.hov1` + fa paper-plane                    | `SubmitButton.tsx` — `absolute right-0 top-0 w-[80px]`, lucide `Send` 15px      |
| `.alert-validate::before/::after` bubble + warning glyph        | `FieldError.tsx` — white box, `1px #c80000`, no radius, hover/≤992px reveal     |
| `.cd100` 4 × `.wsize1` (90px) vertical units                   | `Countdown.tsx` — `flex-col w-[90px]` units, italic-serif digits 60px          |
| `.s1-txt1` Playfair Italic 14px labels                         | labels: italic serif 14px, sentence case                                       |
| `.where2` `padding-top:470px` social column                    | `SocialRail.tsx` — `flex-col pt-[470px]`, 36×36 transparent boxes, no border    |
| `.how-social` 28px fa square glyphs                            | lucide Facebook / Twitter(X) / Pinterest, 28px, hover `text-white/20`           |
| (no footer credit in the source)                               | `Attribution.tsx` — "More templates at Component Dock" → componentdock.com      |

## Sibling comparison (other `comingsoon_*` slugs already prepped)

`03 incoming` (card + tiles), `04 eve` (gradient + modal), `05 advent` (gradient
+ white countdown bar), `06 airborne` (wash + flip clock + newsletter card),
`07 imminent` (wash + countdown rings), `08 forthcoming` (red-magenta wash +
boxed colon clock, single photo), `09 awaited` (2-photo slideshow + violet
0.3 gradient + 0.4 scrim, Poppins only, horizontal bare columns). `10` is
different in five ways that must not be blurred:

- **THREE-photo slideshow** (only slug in the family with three items).
- **No gradient wash at all** — the single overlay is `rgba(0,0,0,0.7)`, a 70%
  black scrim, on a `#000`-backed layer. The page has no accent colour; the
  siblings are all colour-tinted (violet / magenta / green / blue / pink).
- **Serif display type** — PlayfairDisplay BlackItalic 90px heading,
  PlayfairDisplay Bold 60px digits, PlayfairDisplay Italic 18px / 14px labels.
  No sibling uses a serif; all are Poppins / Lato / Montserrat / Barlow / Ubuntu.
- **An out-of-flow heading column at `left:19%` + a VERTICAL clock at the right
  + a VERTICAL social rail at the left**, produced by `flex-row-reverse` and
  absolute positioning. Siblings are centred single columns with horizontal
  clocks and horizontal social rows.
- **An inline e-mail capture** (500×60 translucent well, 80px icon submit lane)
  with a `data-validate` error bubble — where siblings use modals, pill rows or
  no form at all.

Also note the top bar's `padding-bottom:185px` (siblings use page-level
`space-between` or fixed paddings) and the social buttons having NO border/radius
(`awaited` uses white-outline `border-radius:50%` discs).

## Fidelity notes

- Match structure + order 1:1: top bar → row-reverse wrapper [absolute
  left column (heading, sub-line, e-mail form) — right vertical countdown — left
  vertical social stack] → attribution. There is no footer band in the reference;
  the Component Dock attribution is the ONLY deliberate addition.
- Keep the layout mechanism, not just the visual positions: the wrapper must be
  `flex-row-reverse` with `justify-content:space-between`, the heading block
  `position:absolute; top:0; left:19%`, the countdown a `flex-direction:column`
  container, and the social stack offset by `padding-top:470px`. Redrawing the
  same look with a plain centred column would lose the responsive behaviour
  (`respon1`–`respon8`).
- ONE overlay only — `bg-black/70`. Never add a gradient "for depth": the
  reference has none and the near-black page depends on that.
- Keep the type split: 90px Playfair Black Italic heading > 60px Playfair Bold
  digits (this slug's heading is BIGGER than its clock, unlike its siblings),
  14px Playfair Italic labels, `#cccccc` Poppins sub-line, white placeholder text.
- The submit lane is inside the well and the well reserves `padding-right:80px`
  for it — do not place the button outside.
- Never copy assets: use `picsum.photos` placeholders, Google Fonts Playfair
  Display + Poppins, lucide-react icons. No `colorlib`/source-slug/`"Coming
  Soon"`/`"Follow us for update now!"`/`"Email Address"` strings in
  `apps/impending`.
