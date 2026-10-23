# Template: Impending (Coming Soon / Under Construction)

## Purpose

Impending is a single-screen coming-soon page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Coming Soon
V10" template (source slug `comingsoon_10` — one full-viewport screen behind a
cross-fading FULL-SCREEN background slideshow of **THREE** `1900×900`
photographs, covered by a single `rgba(0,0,0,0.7)` scrim and nothing else — no
gradient wash, no accent colour — so the page reads as near-black with white
chrome and a serif display face). The content is NOT a centred column: the
layout is built from an absolutely positioned LEFT column and a
`row-reverse` flex row. A TOP BAR spans the screen (a white two-peak mark left,
65/80px side padding, 22px top / 185px bottom padding; a 140×50 white
25px-radius "Sign Up" pill right, `#fff` fill, an 18px PlayfairDisplay-Italic
`#333` label). Below it a `flex-sb flex-row-rev` wrapper — `padding-left:58px`,
`padding-right:46px`, `position:relative` — holds three blocks: the heading block
`.where3` is taken OUT OF FLOW (`position:absolute; top:0; left:19%`,
`max-width:600px`) and carries a **90px** `PlayfairDisplay-BlackItalic` white
"Coming Soon" heading, a 24px `Poppins-Regular` `#cccccc` "Follow us for update
now!" line and a validation-wired e-mail form (a `500px` × `60px` well filled
`rgba(255,255,255,0.1)`, `padding-right:80px`, a 15px `Poppins-Medium` white
input and an 80px-wide absolutely positioned right submit button holding a 15px
white paper-plane glyph; hover `rgba(255,255,255,0.12)`), while the two in-flow
children are laid out by the row-reverse axis — the **VERTICAL countdown**
(`.cd100`, a wrapping COLUMN, 34px top padding, four `90px`-wide units each a
60px `PlayfairDisplay-Bold` white number with 30px below it over a 14px
`PlayfairDisplay-Italic` white label: Days / Hours / Minutes / Seconds) sits at
the RIGHT edge and the **VERTICAL social stack** (`.where2`, `padding-top:470px`,
three 36×36 transparent buttons with 28px white square brand glyphs and
`rgba(255,255,255,0.2)` hover — no border, no circle) sits at the LEFT edge,
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_10/
  (HTTP 200, 109,308 B, `text/html; charset=UTF-8`, verified 2026-10-11; page
  title "Coming Soon V10 - Free Website Template 2026 - Colorlib", description
  "A modern, easy-to-use and responsive free coming soon website template that
  helps create an impressive under construction page.")
- **Preview:** https://preview.colorlib.com/theme/comingsoon_10/ returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same
  live-preview gap as the rest of the `comingsoon_*` family; there is no
  `theme/bootstrap/<slug>/` variant either), so the live preview DOM is
  unreachable for this slug. Fallback (documented per `docs/replication.md`): — **re-probed 2026-10-23: the demo serves** (measured record below)
  the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_10.zip`
  (HTTP 200, 757,898 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs10/out/comingsoon_10/` — `index.html` (6,046 B), `css/style.css`
  (12,772 B), `js/snippet.js` (4,003 B), `README.md` (1,261 B), three
  `1900×900` photographs `images/bg01.jpg` (121,109 B), `images/bg02.jpg`
  (192,851 B), `images/bg03.jpg` (125,797 B), `images/icons/logo.png` (55×31
  RGBA, 1,263 B), `images/icons/favicon.ico` (32,038 B), and five self-hosted
  faces: `fonts/PlayfairDisplay-BlackItalic.woff2` (75,548 B),
  `PlayfairDisplay-Bold.woff2` (75,964 B), `PlayfairDisplay-Italic.woff2`
  (75,304 B), `Poppins-Medium.woff2` (48,444 B), `Poppins-Regular.woff2`
  (48,416 B) plus a 576 B FontAwesome subset. That zip (the real rendered
  template's own files) is the DOM/CSS/JS reference, together with the
  TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-10.jpg
  (HTTP 200, 27,907 B, served as `image/avif` — NOT JPEG for this slug —
  1200×972, reviewed visually 2026-10-11)
- **New name:** `impending` (apps/impending, `@free-react-templates/impending`) —
  the source demo title "Coming Soon 10", its `bg01.jpg`/`bg02.jpg`/`bg03.jpg`
  photographs, its white two-peak logo image, its inlined fa SVG icons, its
  "Sign Up" / "Coming Soon" / "Follow us for update now!" / "Email Address"
  strings and its favicon are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/comingsoon_10/index.html` — HTTP 200, 6,116 B, title `Coming Soon 10`.
>
> Sheet: `https://colorlib.com/etc/cs/comingsoon_10/css/style.css?v=3f53cd38` (12,772 B).
> Faces it actually declares: `Poppins-Medium`, `PlayfairDisplay-Bold`, `PlayfairDisplay-BlackItalic`, `Segoe UI`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

The reference is one full-viewport screen, not a scrolling site. Its skeleton is
TWO sibling layers:

1. `div.simpleslide100` — the BACKGROUND slideshow —
   `.simpleslide100{display:block; position:fixed; z-index:0; width:100%;
height:100%; top:0; left:0; background-color:#000}`, holding **three**
   `.simpleslide100-item.bg-img1` children —
   `.simpleslide100-item{display:block; position:absolute; width:100%;
height:100%; top:0; left:0}` + `.bg-img1{background-position:center;
background-repeat:no-repeat; background-size:cover}` with inline
   `style="background-image:url(images/bg01.jpg)"` (item 1) and
   `...bg02.jpg...;display:none` (item 2) / `...bg03.jpg...;display:none`
   (item 3). Note the `background-color:#000` black backdrop on the layer
   itself (sibling slugs omit it) — it is what makes the 1 s cross-fades read as
   fades to black rather than to white.
2. `div.size1.overlay1` — the CONTENT layer — `.size1{width:100%;
min-height:100vh}`, `.overlay1{position:relative; z-index:1}`, carrying a
   single wash as one pseudo-element: `.overlay1::after{content:""; display:
block; position:absolute; z-index:-1; width:100%; height:100%; top:0; left:0;
background:rgba(0,0,0,0.7)}`. There is **NO `::before` gradient** in this slug:
   the only overlay is the 70% black scrim, which is unusually heavy (compare
   `forthcoming` 0.2, `airborne`/`imminent` 0.8/0.9 gradient at 0.9 over a
   *lighter* photo). The result is a nearly black page whose only colour comes
   from the photography bleeding through at 30%.

Inside the content layer, two children in order:

FIRST the TOP BAR
`div.w-full.flex-w.flex-sb-m.p-l-65.p-r-80.p-t-22.p-b-185.p-lr-15-sm.respon8`
— `.w-full{width:100%}`, wrapping row, `justify-content:space-between`,
items centred, `padding:22px 80px 185px 65px` (side padding → 15px at ≤576px via
`.p-lr-15-sm`; bottom padding → 60px at ≤768px via `.respon8`). Its 185px bottom
padding is what pushes the content wrapper down from the top edge — that padding
is the vertical rhythm of the page, not a spacer element. Two children:

- `div.wrappic1.m-r-30.m-t-10.m-b-10` — `.wrappic1{display:block;
flex-grow:1}` + 30px right margin + 10px top/bottom margin — wrapping
  `a > img[src=images/icons/logo.png]` (a 55×31 white mark: two overlapping
  filled triangles forming a mountain-peak glyph with a diagonal notch, no text;
  `.wrappic1 img{max-width:100%}`). Because `.wrappic1` has `flex-grow:1` the
  mark stretches and pushes the button to the right edge;
- `div.flex-w.m-t-10.m-b-10` wrapping a single
  `a.size2.m1-txt1.flex-c-m.how-btn1.trans-04` labelled "Sign Up" —
  `.size2{min-width:140px; height:50px}`, `.flex-c-m{justify-content:center;
align-items:center}`, `.m1-txt1{font-family:PlayfairDisplay-Italic; font-size:
18px; color:#333; line-height:1.2}` — note NO `text-transform` here (the label
  is sentence case, in an ITALIC SERIF, unlike the UPPERCASE Poppins pills of
  siblings) — `.how-btn1{padding:0 15px; background-color:#fff;
border-radius:25px}` + `.trans-04{transition:all 0.4s}`. The CTA is a
  min-140 × 50 WHITE 25px-radius pill with an 18px italic-serif `#333` label;
  `.how-btn1:hover{background-color:rgba(255,255,255,0.12); color:#fff}` makes
  it go translucent-on-black with a WHITE label on hover (not a grey fill like
  `awaiting`'s sibling).

SECOND the CONTENT WRAPPER
`div.flex-sb.flex-row-rev.where3-parent.p-l-58.p-r-46.respon2` —
  `.flex-sb{display:flex; justify-content:space-between}` (the `.flex-w`/flex
  family block sets `display:flex`), `.flex-row-rev{flex-direction:row-reverse}`,
  `.where3-parent{position:relative}`, `padding-left:58px; padding-right:46px`.
  The row-reverse axis is the whole trick: the two in-flow children are laid out
  right-to-left, so the FIRST in-flow child (the countdown) lands at the RIGHT
  edge and the SECOND (the social stack) at the LEFT edge. At ≤992px
  `.respon2{flex-direction:column; justify-content:flex-start; align-items:
center; padding-left:15px; padding-right:15px}` returns it to a normal centred
  stack (and `.where3` becomes static — see below). Three children in order:

  a) `div.where3.wsize2.respon1` — the HEADING/COPY/FORM block —
     `.where3{position:absolute; top:0; left:19%}`,
     `.wsize2{max-width:600px}`. It is absolutely positioned against the wrapper
     (which is `position:relative`), NOT a flex item — that is why the heading
     and form sit at 19% from the left while the countdown is hard right
     regardless of the copy's length. At ≤992px
     `.respon1{position:relative; left:unset; top:unset; max-width:100%;
display:flex; flex-direction:column; align-items:center; flex-wrap:wrap}` puts
     it back into flow as a centred column. Contents:
     - `h3.l1-txt2.p-b-30.respon6.respon7` reading "Coming Soon" —
       `.l1-txt2{font-family:PlayfairDisplay-BlackItalic; font-size:90px;
line-height:1.1; color:#fff}` with 30px below it, `.respon6{text-align:center}`
       at ≤992px and `.respon7{font-size:65px}` at ≤576px. This is the LARGEST
       type in the template and the only face this slug shares with
       `forthcoming` (a serif display italic), at 90px — bigger than the 60px
       digits, unlike every sibling where the clock outperforms the heading;
     - `p.m2-txt1.respon6` reading "Follow us for update now!" —
       `.m2-txt1{font-family:Poppins-Regular; font-size:24px; color:#cccccc;
line-height:1.2}`, centred at ≤992px. The `#cccccc` grey (not white) is the
       one soft token on the page;
     - `form.contact100-form.validate-form.p-t-55.w-full` — `w-full`, 55px top
       padding — containing
       `div.wrap-input100.validate-input.m-lr-auto-lg[data-validate="Email is
required: ex@abc.xyz"]`:
       `.wrap-input100{width:500px; max-width:100%; position:relative;
background-color:transparent; height:60px; padding-right:80px; background-color:
rgba(255,255,255,0.1)}` (the second `background-color` wins: a 10%-white
       translucent well), `.m-lr-auto-lg{margin-right:auto; margin-left:auto}`
       at ≤992px, `.validate-input{position:relative}` as the bubble's anchor.
       Inside: an `input.s2-txt1.placeholder0.input100.trans-04[name=email]` —
       `.input100{display:block; width:100%; height:100%; padding:0 15px 0 25px;
background-color:rgba(255,255,255,0.0)}`, focus
       `.input100:focus{background-color:rgba(255,255,255,0.12)}`,
       `.s2-txt1{font-family:Poppins-Medium; font-size:15px; color:#fff;
line-height:1.2}`, `.placeholder0::*placeholder{color:#fff}` — with
       placeholder "Email Address", and a `button.flex-c-m.ab-t-r.size4.s1-txt1.
hov1.trans-04` — `.ab-t-r{position:absolute; right:0; top:0}`,
       `.size4{width:80px; height:100%}`,
       `.hov1:hover{background-color:rgba(255,255,255,0.12)}` — holding an
       `i.fa.fa-paper-plane.fs-15.cl0` (`.fs-15{font-size:15px}` +
       `.cl0{color:#fff}`) whose `svg.cl-icon{height:1em; width:auto;
fill:currentColor}` is an inlined FontAwesome paper-plane path. So the submit
       control is an 80px-wide, full-height, transparent button flush against
       the RIGHT edge of the 500px well (the well's `padding-right:80px` keeps
       the input text clear of it), showing a 15px white paper-plane glyph.

  b) `div.flex-w.flex-col.cd100.p-t-34.respon3` — the COUNTDOWN — `flex-wrap:
wrap` + **`flex-direction:column`** (`.flex-col`) + `padding-top:34px`. This is
     the family's only VERTICAL clock at desktop: the four units stack down the
     right side (siblings lay them out in a row). Each unit is
     `div.flex-col.wsize1.m-b-40.respon4` — `.wsize1{width:90px}` (note 90px,
     not the siblings' 195px), column, 40px below — with two stacked children:
     - `span.l1-txt1.p-b-30.<unit>` — `.l1-txt1{font-family:PlayfairDisplay-Bold;
font-size:60px; line-height:1; color:#fff}` with 30px below it — a 60px BOLD
       SERIF white number (Playfair Display Bold, i.e. a high-contrast serif,
       not a geometric sans like every sibling's Poppins/Lato/Barlow clock);
     - `span.s1-txt1` — `.s1-txt1{font-family:PlayfairDisplay-Italic;
font-size:14px; color:#fff; line-height:1}` — a 14px ITALIC SERIF white label
       in sentence case ("Days" / "Hours" / "Minutes" / "Seconds"). Both spans
       stretch to the 90px column width and the text is left-aligned by
       default, so the label sits under the left edge of the number.
     There are NO colons, NO rings, NO boxes, NO separators and no cartesian
     row: four bare, left-aligned, vertically stacked units. At ≤992px
     `.respon3{flex-direction:row; justify-content:center; padding-top:80px}`
     turns it back into a centred horizontal row, and `.respon4{align-items:
center; margin-right:15px; margin-left:15px}` centres each unit with 15px side
     margins.
  c) `div.flex-w.flex-col.where2.respon5` — the SOCIAL STACK — `flex-wrap:wrap`
     + `flex-direction:column` + `.where2{padding-top:470px}` (a hard 470px
     offset that drops the three icons to the lower-left of the screen while the
     wrapper's other content stays at the top). Three identical anchors
     `a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5` —
     `.size3{width:36px; height:36px}`, `.how-social{color:#fff; font-size:28px;
background-color:transparent}` with 3px side margins and 5px bottom margin,
     `.trans-04` transition — i.e. three 36×36 boxes with NO border and NO
     radius (unlike `awaiting`'s white-outline circles), holding 28px white
     glyphs: `i.fa.fa-facebook-official`, `i.fa.fa-twitter-square` and
     `i.fa.fa-pinterest-square`, each an inlined FontAwesome `svg.cl-icon` path.
     The square/rounded-square look in the screenshot comes from the GLYPHS
     themselves (official / square Facebook, Twitter and Pinterest marks), not
     from any box style. Hover `.how-social:hover{color:rgba(255,255,255,0.2)}`
     dims the glyph to 20% white. At ≤992px
     `.respon5{padding-top:100px; padding-bottom:30px; flex-direction:row;
justify-content:center}` makes it a centred horizontal row.

There is NO navbar, NO footer band, NO modal and NO scrolling section: the whole
page is the fixed slideshow, the 70% scrim, the top bar and those three blocks.

The countdown script (`js/snippet.js`) is the family's `spans` flavour with
config `{"sel":".cd100","kind":"spans","cfg":{"Y":0,"M":0,"D":35,"h":19,"m":0,
"s":0}}`: the target is built as `new Date(0, -1, 35, 19, 0, 0)` (year 0, month
`-1`), which can never be in the future, so the fallback rule kicks in and the
target becomes `Date.now() + 35 days + 19 hours` — the demo therefore never
reads zero. It then repaints the four spans once per second
(`setInterval(paint, 1000)` plus an immediate `paint()`), writing `r.d` RAW into
`.days` (days are NOT zero-padded) and `pad(r.h)`, `pad(r.m)`, `pad(r.s)` where
`pad = n => ('0'+n).slice(-2)`, and clears the interval once the remaining time
reaches 0. Elements that already contain a `.flip-clock-wrapper` are skipped.

The same script runs (1) the background slideshow — for each `.simpleslide100`
with at least two items it sets `transition:opacity 1000ms`, shows item 0 and
hides the rest, then, unless `prefers-reduced-motion: reduce` matches, every
7000 ms cross-fades the current item out and the next in (wrapping through all
THREE items) and hides the old one after the 1000 ms transition — and (2) the
form validation — `.validate-form` submit handlers mark each invalid
`.validate-input` with `.alert-validate` and `preventDefault()`, and clear the
class on field focus. Validity is `EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` for
`type=email`/`name=email` fields and non-empty otherwise. The bubble itself is
pure CSS: `.alert-validate::before{content:attr(data-validate);
background-color:#fff; border:1px solid #c80000; border-radius:0px; padding:4px
25px 4px 10px; top:50%; transform:translateY(-50%); right:82px;
font-family:Poppins-Medium; color:#c80000; font-size:14px; line-height:1.4;
max-width:70%; visibility:hidden; opacity:0; transition:opacity 0.4s}` shown on
`.alert-validate:hover:before` (and unconditionally at ≤992px), with
`.alert-validate::after{content:"\f071"; font-family:FontAwesome; color:#c80000;
font-size:14px; right:88px}` as the warning glyph.

The palette is the reference's near-black photography plus white chrome:
slideshow backdrop `#000`, scrim `rgba(0,0,0,0.7)`, white text/glyphs, a
`#cccccc` sub-line, a `#fff` 25px-radius pill with a `#333` italic-serif label
whose hover is `rgba(255,255,255,0.12)` with a white label, a
`rgba(255,255,255,0.1)` input well (0.12 on focus) and a transparent 80px
submit lane (0.12 on hover), and the shared error red `#c80000`.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V10" (source:
  https://colorlib.com/wp/template/comingsoon_10/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3041; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/impending` absent, TEMPLATES.md line 3041 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_10/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11), so the
  live preview DOM could not be parsed. Fallback used (documented): the
  official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_10.zip` (HTTP 200,
  757,898 B, `application/zip`), downloaded and extracted to
  `/tmp/cs10/out/comingsoon_10/`. Reference artifacts: `/tmp/cs10/cs10.zip`,
  `/tmp/cs10/out/comingsoon_10/`, `/tmp/cs10/shot.avif` + `/tmp/cs10/shot.jpg`
  (screenshot, 1200×972), `/tmp/cs10/src10.html` (the ColorLib page),
  `/tmp/cs10/bg01_s.jpg` … `bg03_s.jpg` (photo previews, 900×426). Research
  date: 2026-10-11. The source HTML/CSS/JS is authoritative for section
  structure, copy, tokens, and behaviour.
- **Screenshot:** `coming-soon-10.jpg` (served as `image/avif`, reviewed
  visually 2026-10-11) confirms the layout: a nearly BLACK page, the top ~30%
  of a photo of a pale garden rose on black visible behind a heavy dark scrim;
  top-left a small white mark of two overlapping triangles (a peak glyph); at
  the top-right a white rounded pill button reading "Sign Up" in an ITALIC
  SERIF; on the LEFT, roughly two-fifths down, the words "Coming Soon" in a
  very large italic serif (the "S" showing a swash), under them "Follow us for
  update now!" in a soft grey sans, and under that a wide translucent
  rectangle with a white "Email Address" placeholder and a small white
  paper-plane glyph at its right end; on the RIGHT, a VERTICAL stack of four
  big white serif numbers "35 / 18 / 59 / 57", each with a small italic serif
  label under its left edge ("Days", "Hours", "Minutes", "Seconds"); and at the
  lower LEFT, just above the copy's left edge, three small white SQUARE brand
  glyphs stacked vertically (Facebook, Twitter/X, Pinterest). No navbar, no
  footer band, no scrolling content. (The screenshot's top strip is the
  marketing page's browser chrome — "colorlib.com" — not part of the template.)
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN dependency at runtime — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in,
  then re-declares a minimal Bootstrap-derived reboot) with five self-hosted
  `@font-face` blocks (PlayfairDisplay-Italic, PlayfairDisplay-Bold,
  PlayfairDisplay-BlackItalic, Poppins-Regular, Poppins-Medium) plus a 576 B
  FontAwesome subset used only for the validation warning glyph. The recreation
  uses Tailwind 4 + React state; the revert guard, the reboot, and all source
  class names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Slideshow layer: `.simpleslide100{display:block; position:fixed; z-index:0;
width:100%; height:100%; top:0; left:0; background-color:#000}`;
    `.simpleslide100-item{display:block; position:absolute; width:100%;
height:100%; top:0; left:0}`; `.bg-img1{background-position:center;
background-repeat:no-repeat; background-size:cover}`
  - Content layer: `.size1{width:100%; min-height:100vh}` +
    `.overlay1{position:relative; z-index:1}`
  - Scrim (the ONLY overlay): `.overlay1::after{… background:rgba(0,0,0,0.7)}`,
    full-size, `z-index:-1`. There is no `::before` and no gradient.
  - Top bar: `.w-full` + `.flex-w` + `.flex-sb-m{justify-content:space-between;
align-items:center}` + `.p-l-65.p-r-80.p-t-22.p-b-185.p-lr-15-sm.respon8`
    (≤576px side padding 15px; ≤768px bottom padding 60px)
  - Mark: `.wrappic1{display:block; flex-grow:1}` + `.m-r-30.m-t-10.m-b-10`;
    `.wrappic1 img{max-width:100%}`
  - Sign Up pill: `.size2{min-width:140px; height:50px}` + `.flex-c-m` +
    `.m1-txt1{PlayfairDisplay-Italic 18px; color:#333; line-height:1.2}` +
    `.how-btn1{padding:0 15px; background-color:#fff; border-radius:25px}` +
    `.trans-04{transition:all .4s}`; hover
    `.how-btn1:hover{background-color:rgba(255,255,255,0.12); color:#fff}`
  - Content wrapper: `.flex-sb{justify-content:space-between}` +
    `.flex-row-rev{flex-direction:row-reverse}` +
    `.where3-parent{position:relative}` + `.p-l-58.p-r-46`; ≤992px `.respon2`
    → column, `flex-start`, centred, 15px side padding
  - Heading block: `.where3{position:absolute; top:0; left:19%}` +
    `.wsize2{max-width:600px}`; ≤992px `.respon1` → static centred flex column
  - Heading: `.l1-txt2{PlayfairDisplay-BlackItalic 90px; line-height:1.1;
color:#fff}` + `.p-b-30`; `.respon6{text-align:center}` at ≤992px;
    `.respon7{font-size:65px}` at ≤576px
  - Sub-line: `.m2-txt1{Poppins-Regular 24px; color:#cccccc; line-height:1.2}`
    + `.respon6`
  - Form: `.p-t-55`, `.w-full`; well `.wrap-input100{width:500px;
max-width:100%; position:relative; height:60px; padding-right:80px;
background-color:rgba(255,255,255,0.1)}`; input `.input100{display:block;
width:100%; height:100%; padding:0 15px 0 25px; background-color:rgba(255,255,
255,0)}`, focus `rgba(255,255,255,0.12)`; `.s2-txt1{Poppins-Medium 15px;
color:#fff; line-height:1.2}`; placeholder `#fff`; submit
    `.ab-t-r{position:absolute; right:0; top:0}` + `.size4{width:80px;
height:100%}` + `.hov1:hover{background-color:rgba(255,255,255,0.12)}`, glyph
    `.fs-15{font-size:15px}` + `.cl0{color:#fff}`
  - Countdown: `.flex-w.flex-col.cd100{padding-top:34px}`; unit
    `.flex-col.wsize1.m-b-40` with `.wsize1{width:90px}`; digits
    `.l1-txt1{PlayfairDisplay-Bold 60px; line-height:1; color:#fff}` +
    `.p-b-30`; label `.s1-txt1{PlayfairDisplay-Italic 14px; color:#fff;
line-height:1}`; ≤992px `.respon3{flex-direction:row; justify-content:center;
padding-top:80px}` + `.respon4{align-items:center; margin:0 15px}`
  - Social: `.flex-w.flex-col.where2{padding-top:470px}`; button
    `.size3{width:36px; height:36px}` + `.flex-c-m` + `.how-social{color:#fff;
font-size:28px; background-color:transparent}` + `.trans-04` +
    `.m-r-3.m-l-3.m-b-5`; hover `.how-social:hover{color:rgba(255,255,255,0.2)}`;
    ≤992px `.respon5{padding-top:100px; padding-bottom:30px;
flex-direction:row; justify-content:center}`
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
background-color:#fff; border:1px solid #c80000; border-radius:0px; padding:4px
25px 4px 10px; top:50%; transform:translateY(-50%); right:82px;
font-family:Poppins-Medium; color:#c80000; font-size:14px; line-height:1.4;
max-width:70%; visibility:hidden; opacity:0; transition:opacity 0.4s}` +
    `.alert-validate::after{content:"\f071"; font-family:FontAwesome;
color:#c80000; font-size:14px; right:88px}`; shown on
    `.alert-validate:hover:before` and unconditionally at ≤992px
  - Base type: `body,html{font-family:Arial,sans-serif; font-size:15px;
color:#666666; height:100%; background-color:#fff}` (all visible type is
    Playfair Display / Poppins); `h3,p{margin:0px}`
  - Fonts (source, self-hosted woff2): PlayfairDisplay-Italic (pill label,
    clock labels), PlayfairDisplay-Bold (clock digits), PlayfairDisplay-
    BlackItalic (heading), Poppins-Regular (sub-line), Poppins-Medium (input +
    validation) — the recreation loads Playfair Display (400 italic / 700 /
    900 italic) + Poppins (400 / 500) from Google Fonts via `<link>` in
    `index.html`
- **Content map (source DOM):**
  `div.simpleslide100` > three `div.simpleslide100-item.bg-img1` (bg01 visible,
  bg02/bg03 `display:none`), then `div.size1.overlay1`:
  1. `div.w-full.flex-w.flex-sb-m.p-l-65.p-r-80.p-t-22.p-b-185.p-lr-15-sm.
respon8` — ← TOP BAR
     - `div.wrappic1.m-r-30.m-t-10.m-b-10 > a > img[src=images/icons/logo.png]`
       (white two-peak mark)
     - `div.flex-w.m-t-10.m-b-10 > a.size2.m1-txt1.flex-c-m.how-btn1.trans-04`
       — "Sign Up"
  2. `div.flex-sb.flex-row-rev.where3-parent.p-l-58.p-r-46.respon2` — ← CONTENT
     - `div.where3.wsize2.respon1` (absolute, `top:0; left:19%`) — ← LEFT COLUMN
       - `h3.l1-txt2.p-b-30.respon6.respon7` — "Coming Soon"
       - `p.m2-txt1.respon6` — "Follow us for update now!"
       - `form.contact100-form.validate-form.p-t-55.w-full` — ← E-MAIL FORM
         - `div.wrap-input100.validate-input.m-lr-auto-lg[data-validate="Email
is required: ex@abc.xyz"]`
           - `input.s2-txt1.placeholder0.input100.trans-04[name=email]`
             placeholder "Email Address"
           - `button.flex-c-m.ab-t-r.size4.s1-txt1.hov1.trans-04 >
i.fa.fa-paper-plane.fs-15.cl0`
     - `div.flex-w.flex-col.cd100.p-t-34.respon3` — ← VERTICAL COUNTDOWN
       - `div.flex-col.wsize1.m-b-40.respon4 > span.l1-txt1.p-b-30.days` (35) +
         `span.s1-txt1` (Days)
       - the same unit for `.hours` (17) / Hours
       - the same unit for `.minutes` (50) / Minutes
       - the same unit for `.seconds` (39) / Seconds
     - `div.flex-w.flex-col.where2.respon5` — ← VERTICAL SOCIAL STACK
       - three `a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5` wrapping
         `i.fa.fa-facebook-official` / `i.fa.fa-twitter-square` /
         `i.fa.fa-pinterest-square` (inlined `svg.cl-icon` brand paths)
- **Behaviour (`js/snippet.js`, three framework-free features):**
  1. Countdown on `.cd100` — `kind:"spans"` with config `{Y:0,M:0,D:35,h:19,m:0,
s:0}`: `new Date(0, -1, 35, 19, 0, 0)` is always in the past, so the declared
     fallback `end = Date.now() + D*864e5 + h*36e5` (= now + 35 days + 19 hours)
     is what actually runs; `paint()` writes the raw day count into `.days` and
     `pad()`-ed hours/minutes/seconds, runs once immediately and then every
     1000 ms, and clears its interval when the remaining time hits 0; elements
     already containing a `.flip-clock-wrapper` are skipped.
  2. Background cross-fade slideshow on `.simpleslide100` — needs ≥2 items
     (this slug has THREE); sets `transition:opacity 1000ms`, shows item 0, then
     every 7000 ms fades the current item out and the next in, hiding the old
     one after the transition (`display:none`), wrapping
     `now = (now + 1) % items.length`; returns early (stays on item 0) when
     `prefers-reduced-motion: reduce` matches.
  3. Form validation on `.validate-form` — on submit, every invalid field's
     `.validate-input` wrapper gains `.alert-validate` and the submit is
     `preventDefault()`-ed; each field removes the class on `focus`; the field
     is valid when `EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` matches (email
     fields) or the trimmed value is non-empty. The bubble's copy comes from the
     wrapper's own `data-validate` attribute.

### Sibling comparison (why this slug is not a copy of its neighbours)

Within the `## Uncategorized (15)` `comingsoon_01..15` group, `comingsoon_10` is
distinctive in FIVE ways — do not blur it with `03`–`09` or with the
`0N-comming-soon` set:

- **Three-photo slideshow.** It is the only slug in the family with a THREE-item
  cross-fading background (`bg01` + `bg02` + `bg03`); `awaiting`
  (`comingsoon_09`) has two, the earlier siblings one static image.
- **No gradient wash at all.** Its single overlay is `rgba(0,0,0,0.7)` — a 70%
  black scrim — whereas `09` stacks a `#b224ef` → `#7579ff` gradient at 0.3
  under a 0.4 scrim colour-tinting the page periwinkle, and `forthcoming` (08)
  a 0.9 magenta-purple one. This slug's page is essentially black; its only
  colour is the photography.
- **Serif display typography.** Heading `PlayfairDisplay-BlackItalic` 90px,
  digits `PlayfairDisplay-Bold` 60px, pill label and clock labels
  `PlayfairDisplay-Italic` 18px / 14px, with `Poppins-Regular` 24px `#cccccc`
  for the sub-line and `Poppins-Medium` 15px for the input. No sibling uses a
  serif at all (they are Poppins / Lato / Montserrat / Barlow / Ubuntu).
- **A vertical clock on the right and a vertical social stack on the left**,
  produced by `.flex-row-rev` + `.flex-col` + an absolutely positioned heading
  block at `left:19%`. No sibling has an out-of-flow heading column, a
  right-hand vertical clock or a stacked social rail, and this slug's countdown
  units are 90px wide (siblings: 195px / 155px rings / flip cards).
- **An inline e-mail capture with an icon submit.** The 500×60 translucent well
  with an 80px paper-plane button inside it plus the `data-validate` error
  bubble exists in no other coming-soon sibling except through a full modal or
  a separate pill row.

## Design tokens

| Token                  | Value                                                                                                                                                                                                                  | Where                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| slideshow backdrop     | `#000`                                                                                                                                                                                                                 | background-color of the fixed slideshow layer                         |
| page scrim             | `rgba(0,0,0,0.7)`                                                                                                                                                                                                     | the ONLY overlay layer (no gradient)                                  |
| page photographs       | source `images/bg01.jpg` (1900×900, pale garden **rose** on pure black, average `rgb(45,43,43)`, corners `rgb(16,16,18)`), `images/bg02.jpg` (1900×900, dark **palm-frond** macro, average `rgb(41,49,37)`), `images/bg03.jpg` (1900×900, **dusk mountain** with a silhouetted conifer, fog and a low sun, average `rgb(97,91,104)`) — recreation uses `https://picsum.photos/seed/impending-bg1/1900/900`, `.../impending-bg2/1900/900`, `.../impending-bg3/1900/900` | fixed full-screen cross-fade slideshow |
| slideshow              | `position:fixed; z-index:0; 100%×100%`; item `transition:opacity 1000ms`; 7000 ms interval; wraps all THREE photos; honours `prefers-reduced-motion`                                                                   | background                                                            |
| content layer          | `width:100%; min-height:100vh`, `position:relative; z-index:1`                                                                                                                                                         | page shell                                                            |
| top bar                | `width:100%`, wrap, `justify-content:space-between; align-items:center`, `padding:22px 80px 185px 65px` (≤576px side padding 15px; ≤768px bottom 60px)                                                                | band 1                                                                |
| mark                   | white two-overlapping-triangle peak glyph (source 55×31 PNG, alt "LOGO"), container `flex-grow:1`, 30px right / 10px top & bottom margin; recreation renders its OWN name/mark (source glyph file never copied)         | band 1 left                                                           |
| Sign Up pill           | `min-width:140px`, `height:50px`, `padding:0 15px`, `background:#fff`, `border-radius:25px`, label `PlayfairDisplay-Italic` 18px/1.2 `#333` (sentence case, NO uppercase), `transition:all .4s`                        | band 1 right                                                          |
| Sign Up pill hover     | fill → `rgba(255,255,255,0.12)`, label → `#fff`                                                                                                                                                                        | over `.4s`                                                            |
| content wrapper        | `display:flex; justify-content:space-between; flex-direction:row-reverse`, `position:relative`, `padding:0 46px 0 58px`; ≤992px → column, `flex-start`, centred, 15px side padding                                    | band 2 (layout mechanism)                                             |
| heading block          | `position:absolute; top:0; left:19%`, `max-width:600px`; ≤992px static centred flex column, full width                                                                                                                | band 2 left column (out of flow)                                      |
| heading                | `PlayfairDisplay-BlackItalic` 90px/1.1 white, 30px below; ≤576px 65px; centred at ≤992px                                                                                                                               | left column                                                           |
| sub-line               | `Poppins-Regular` 24px/1.2 `#cccccc`; centred at ≤992px                                                                                                                                                                | left column                                                           |
| form                   | 55px top padding, `width:100%`                                                                                                                                                                                         | left column                                                           |
| input well             | `width:500px` (`max-width:100%`), `height:60px`, `padding-right:80px`, `background:rgba(255,255,255,0.1)`, `position:relative`; auto side margins at ≤992px                                                             | form                                                                  |
| input field            | 100% × 100%, `padding:0 15px 0 25px`, transparent fill → `rgba(255,255,255,0.12)` on focus, `Poppins-Medium` 15px/1.2 white text, white placeholder, `transition:all .4s`                                              | form                                                                  |
| submit lane            | `position:absolute; right:0; top:0`, `width:80px`, `height:100%`, transparent fill → `rgba(255,255,255,0.12)` on hover, `transition:all .4s`                                                                           | right edge of the well                                                |
| submit glyph           | 15px white paper-plane (source lucide/fa plane equivalent; source fa path never copied)                                                                                                                                | submit lane                                                           |
| validation bubble      | white fill, `1px solid #c80000`, `border-radius:0px`, `padding:4px 25px 4px 10px`, `max-width:70%`, right `82px`, vertically centred, `Poppins-Medium` 14px/1.4 `#c80000`, `opacity` over `.4s`; icon 14px `#c80000` at right `88px` | error state |
| validation visibility  | hidden by default (`visibility:hidden; opacity:0`); shown on wrapper hover; always shown at ≤992px; cleared on field focus                                                                                             | error state                                                           |
| error red              | `#c80000`                                                                                                                                                                                                              | bubble border/text/icon                                               |
| countdown container    | wrap + `flex-direction:column` + `padding-top:34px`; ≤992px → row, centred, `padding-top:80px`                                                                                                                          | band 2 right                                                          |
| countdown unit         | `width:90px`, column, 40px below; ≤992px centred with 15px side margins                                                                                                                                               | right of band 2 (×4)                                                  |
| countdown digits       | `PlayfairDisplay-Bold` 60px/1 white, 30px below                                                                                                                                                                       | each unit                                                             |
| countdown labels       | `PlayfairDisplay-Italic` 14px/1 white, sentence case ("Days" …)                                                                                                                                                       | each unit (under the number's left edge)                              |
| countdown behaviour    | target `now + 35 d + 19 h` (the configured `new Date(0,-1,35,19,…)` is always past); 1 s tick; days raw, h/m/s zero-padded; immediate first paint; interval cleared at 0 and on unmount                                | countdown                                                             |
| social stack           | wrap + `flex-direction:column` + `padding-top:470px`; ≤992px → centred row, `padding-top:100px`, `padding-bottom:30px`                                                                                                 | band 2 left (lower)                                                   |
| social button          | `36×36`, transparent fill, NO border, NO radius, 28px white glyph, `transition:all .4s`, margins 3px sides / 5px bottom (6px gaps)                                                                                     | social stack (×3)                                                     |
| social glyphs          | Facebook (official), Twitter/X (square) and Pinterest (square) — lucide-react equivalents; the source's inlined fa square-glyph paths are NEVER copied                                                                 | social stack                                                          |
| social hover           | glyph → `rgba(255,255,255,0.2)`                                                                                                                                                                                        | over `.4s`                                                            |
| radii                  | 25px (Sign Up pill), 0px (everything else: well, submit lane, countdown, social boxes, validation bubble)                                                                                                              | shapes                                                                |
| fonts                  | PlayfairDisplay-BlackItalic 90px (heading), PlayfairDisplay-Bold 60px (digits), PlayfairDisplay-Italic 18px (pill label) / 14px (clock labels), Poppins-Regular 24px (sub-line), Poppins-Medium 15px (input) + 14px (bubble) | typography                                                        |
| Google Fonts mapping   | Playfair Display **400 italic / 700 / 900 italic** + Poppins **400 / 500** — note the source's faces are PlayfairDisplay-BlackItalic (900 italic), PlayfairDisplay-Bold (700, upright) and PlayfairDisplay-Italic (400) | `index.html` `<link>`              |
| base type              | `body,html{font-family:Arial,sans-serif; font-size:15px; color:#666666; background:#fff}` (all visible type is Playfair Display / Poppins)                                                                             | typography                                                            |
| transitions            | `all .4s` (pill, input, submit, socials), `opacity 1000ms` (slideshow), `7000ms` interval, `1000ms` countdown tick, `opacity .4s` (bubble)                                                                            | interaction                                                           |
| attribution            | Poppins-Regular 12–13px white/70 centred line under the page content                                                                                                                                                   | footer requirement (ADDED vs the reference — the source has no footer credit) |

## Requirements

### Feature: Fixed three-photo cross-fade slideshow under a single 70% scrim

One fixed full-viewport photograph slideshow cycling three photos, darkened by a
single `rgba(0,0,0,0.7)` scrim — no gradient wash.

#### Scenario: Page renders as one photographed-and-scrimmed screen

- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a fixed, `z-index:0`, `100% × 100%` background layer with a `#000`
  background colour sits behind everything holding THREE `cover`-sized, centred,
  no-repeat photographs
- **And** above it a content layer occupies `width:100%; min-height:100vh`,
  `position:relative; z-index:1`
- **And** ONE full-size overlay sits over the photograph inside the content
  layer: `rgba(0,0,0,0.7)` — a 70% black scrim
- **And** there is NO gradient layer and NO brand/accent colour anywhere on the
  page (the only colour comes from the photography at 30% opacity)
- **And** the top bar and the content wrapper are spread by the top bar's
  `padding-bottom:185px`, not by a `space-between` column
- **And** there is NO navbar, NO footer band, NO modal and NO scrolling section

#### Scenario: Background cross-fades through three photographs

- **Given** the slideshow layer holds THREE photographs
- **When** the effect runs
- **Then** the first photograph is shown initially and the other two are hidden
- **And** every 7000 ms the current photograph fades out and the next fades in
  over a 1000 ms opacity transition, and the old one is hidden once the
  transition completes
- **And** the cycle wraps around after the THIRD photograph back to the first
- **And** when `prefers-reduced-motion: reduce` matches, the slideshow stays on
  the first photograph and never cycles
- **And** the interval is cleared on unmount

### Feature: Top bar (white peak mark and white Sign Up pill)

A white two-triangle peak mark pinned left and a 140×50 white 25px-radius pill
pinned right, above 185px of empty space.

#### Scenario: Top bar renders the reference chrome

- **Given** the screen renders
- **When** the top bar is visible
- **Then** it is a full-width wrapping row with
  `justify-content:space-between; align-items:center` and
  `padding:22px 80px 185px 65px` (side padding 15px at ≤576px, bottom padding
  60px at ≤768px)
- **And** its left child is the app's OWN white mark/name (an inline SVG peak
  glyph or the name rendered as a white wordmark — the source two-triangle PNG,
  its "LOGO" alt and the image file are NEVER copied) in a `flex-grow` container
  with 30px right / 10px top & bottom margins
- **And** its right child is a single pill CTA labelled with a "Sign
  Up"-equivalent string, `min-width:140px`, `height:50px`, `padding:0 15px`,
  `background:#fff`, `border-radius:25px`, an 18px ITALIC SERIF `#333` label in
  sentence case (NOT uppercase), `transition:all .4s`
- **And** hovering the pill over `.4s` turns the fill translucent-black
  (`rgba(255,255,255,0.12)`) and the label white, so the label stays legible
  throughout

### Feature: Out-of-flow left column — 90px italic-serif heading, sub-line, e-mail form

An absolutely positioned column at `left:19%` (`max-width:600px`) carrying the
heading, a soft-grey sub-line and a 500×60 translucent e-mail well with an 80px
paper-plane submit lane.

#### Scenario: Left column renders the reference typography and form

- **Given** the screen renders at desktop width
- **When** the content wrapper is visible
- **Then** the wrapper is `display:flex; justify-content:space-between;
flex-direction:row-reverse`, `position:relative`, with `padding:0 46px 0 58px`
- **And** the heading block is positioned OUT OF FLOW at `top:0; left:19%` with
  `max-width:600px` (absolutely positioned against the wrapper, so the countdown
  stays hard right regardless of copy length)
- **And** it renders an `h3` reading a coming-soon-equivalent string
  (paraphrasable copy; the source's own "Coming Soon" heading and "Follow us for
  update now!" line are never reused verbatim) in
  `PlayfairDisplay-BlackItalic` **90px**/1.1 white with 30px below it, dropping
  to 65px at ≤576px, centred at ≤992px
- **And** beneath it a sub-line in `Poppins-Regular` 24px/1.2 `#cccccc`
  (a soft grey, not white)
- **And** beneath that, with 55px of separation, an e-mail form filling the
  column: a well `width:500px` (`max-width:100%`), `height:60px`,
  `padding-right:80px`, filled `rgba(255,255,255,0.1)`, `position:relative`
- **And** inside the well a text input fills 100% × 100% with
  `padding:0 15px 0 25px`, a transparent fill that becomes
  `rgba(255,255,255,0.12)` on focus, `Poppins-Medium` 15px/1.2 white text and a
  white placeholder reading an "Email Address"-equivalent string,
  `transition:all .4s`
- **And** an 80px-wide, full-height, transparent submit button is positioned
  `absolute; right:0; top:0` inside the well (the well's `padding-right:80px`
  keeps typed text clear of it), turning `rgba(255,255,255,0.12)` on hover over
  `.4s`, and holds a 15px white paper-plane glyph (lucide-react `Send` or
  equivalent — the source's inlined fa paper-plane path is NEVER copied)
- **And** at ≤992px the column returns to normal flow as a centred flex column,
  the well's side margins auto-centre it, and the heading/sub-line centre

### Feature: Inline e-mail validation bubble

The reference ships a frameless white bubble with the field's own `data-validate`
copy and a warning glyph, anchored inside the well's right side.

#### Scenario: Invalid submit shows the reference bubble

- **Given** the e-mail field is empty or does not match the reference's e-mail
  pattern (`^[^\s@]+@[^\s@]+\.[^\s@]{2,}$`)
- **When** the form is submitted
- **Then** the submit is prevented and an error bubble appears anchored to the
  input wrapper, right-offset 82px and vertically centred
- **And** the bubble is a white box with a `1px solid #c80000` border, NO radius,
  `padding:4px 25px 4px 10px`, `max-width:70%`, carrying the field's own
  required-message copy in `Poppins-Medium` 14px/1.4 `#c80000`
- **And** a 14px `#c80000` warning glyph sits at right 88px beside it
- **And** the bubble fades in over `.4s`; it is hidden by default (opacity 0),
  revealed on wrapper hover, and always visible at ≤992px
- **And** focusing the field clears the error state
- **And** a valid submission does not block the form's submit

### Feature: Vertical countdown of serif digits on the right

A wrapping column at the right edge holding four 90px-wide units, each a 60px
serif number over a 14px italic serif label.

#### Scenario: Countdown renders the reference treatment

- **Given** the screen renders
- **When** the countdown column is visible
- **Then** it is a wrapping flex container with `flex-direction:column` and 34px
  top padding, sitting at the RIGHT edge of the
  `justify-content:space-between; flex-direction:row-reverse` wrapper
- **And** it holds FOUR units in order days, hours, minutes, seconds, each
  `width:90px`, laid out as a column with 40px below, with NO colons, boxes,
  rings, separators or borders between them
- **And** each unit renders its number in `PlayfairDisplay-Bold` **60px**/1
  white with 30px below it, over a label in `PlayfairDisplay-Italic` 14px/1
  white in sentence case ("Days" / "Hours" / "Minutes" / "Seconds")
- **And** the number and label are left-aligned within the 90px column, so the
  label sits under the number's LEFT edge
- **And** at ≤992px the countdown becomes a centred horizontal row with 80px top
  padding, each unit centred with 15px side margins
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

### Feature: Vertical social stack, lower left

Three 36×36 transparent boxes with 28px white square brand glyphs, stacked
vertically and dropped 470px down the left edge.

#### Scenario: Social stack renders the reference glyphs

- **Given** the screen renders
- **When** the social stack is visible
- **Then** it is a wrapping flex container with `flex-direction:column` and
  `padding-top:470px`, sitting at the LEFT edge of the content wrapper (the
  row-reverse axis puts it opposite the countdown)
- **And** it holds THREE anchors, each `36×36`, transparent fill, with NO border
  and NO border-radius (the square look comes from the glyphs, not the boxes),
  a 28px white glyph, `transition:all .4s`, with 3px side margins and 5px bottom
  margin (so they sit 6px apart vertically)
- **And** the three glyphs are a Facebook, a Twitter/X and a Pinterest mark
  (lucide-react or equivalent — the source's inlined FontAwesome
  `fa-facebook-official` / `fa-twitter-square` / `fa-pinterest-square` paths are
  NEVER copied)
- **And** hovering a box over `.4s` dims its glyph to `rgba(255,255,255,0.2)`
- **And** at ≤992px the stack becomes a centred horizontal row with 100px top and
  30px bottom padding

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4 `@theme`
tokens.

#### Scenario: Theme tokens match the reference

- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: the `#000` slideshow backdrop, the
  `rgba(0,0,0,0.7)` scrim, white text/glyphs, the `#cccccc` sub-line, the Sign
  Up pill (`#fff` fill, `#333` label, `rgba(255,255,255,0.12)` hover fill with a
  white label), the input well `rgba(255,255,255,0.1)` and its `0.12` focus
  state, the submit lane's `0.12` hover, the social hover
  `rgba(255,255,255,0.2)`, and the error red `#c80000`
- **And** there is NO brand accent colour and NO gradient token in this slug
- **And** Playfair Display (400 italic / 700 / 900 italic) and Poppins (400 / 500)
  load via a Google Fonts `<link>` in `index.html`; there is no mono face
- **And** shapes are radius 25px (Sign Up pill) and 0px everywhere else (well,
  submit lane, countdown units, social boxes, validation bubble); transitions
  are `all .4s` (pill, input, submit, socials), `opacity 1000ms` (slideshow) and
  `opacity .4s` (bubble), the countdown ticks at 1000 ms and the slideshow
  advances at 7000 ms

### Feature: Footer attribution

The reference has no footer credit and no footer band; the monorepo requires a
Component Dock attribution, so a small line is added under the page content.

#### Scenario: Attribution links Component Dock

- **Given** the page renders
- **When** the attribution line is visible
- **Then** it renders in Poppins-Regular 12–13px, centred (or bottom-left near
  the social stack), as a small line reading a Component-Dock attribution (e.g.
  "More templates at Component Dock") linking
  `https://www.componentdock.com/`, branded "Component Dock"
- **And** it never mentions ColorLib, "Colorlib", the source demo title, the
  source credit line or the source slug
- **And** it is the ONLY addition to the reference layout (documented as a
  deliberate deviation in the spec and PR)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/impending/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/impending/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Layout 1:1 with the reference: a fixed `z-index:0` full-screen `#000`
      slideshow layer with THREE cover photos behind a content layer at
      `min-h-screen w-full relative`; ONE overlay — `bg-black/70` — and NO
      gradient; the top bar's `pb-[185px]` (≤768px `pb-[60px]`) providing the
      vertical rhythm; no navbar, no footer band, no scrolling section
- [ ] Content wrapper: `flex justify-between flex-row-reverse relative
      pl-[58px] pr-[46px]` (≤992px column, `justify-start`, centred, `px-[15px]`)
- [ ] Band order matches: top bar (white peak mark left, "Sign Up"-equivalent
      pill right) → content wrapper [out-of-flow left column (heading + sub-line
      + e-mail form) | right vertical countdown | left vertical social stack] →
      Component Dock attribution
- [ ] Left column is `absolute top-0 left-[19%] max-w-[600px]`, static centred
      flex column at ≤992px
- [ ] Heading: `h3` in Playfair Display Black Italic (900 italic) 90px/1.1 white
      with 30px below, 65px at ≤576px, centred at ≤992px; sub-line
      `Poppins-Regular` 24px/1.2 `#cccccc`
- [ ] Form: well `w-[500px] max-w-full h-[60px] pr-[80px]
      bg-white/10 relative`; input `w-full h-full px-[25px]` transparent →
      `bg-white/[0.12]` on focus, `Poppins-Medium` 15px white text, white
      placeholder, `transition-all duration-[400ms]`; submit lane
      `absolute right-0 top-0 w-[80px] h-full` transparent →
      `bg-white/[0.12]` on hover with a 15px white lucide paper-plane glyph
- [ ] Validation: invalid submit prevented and marked, bubble `bg-white
      border border-[#c80000] rounded-none py-[4px] pr-[25px] pl-[10px]
      max-w-[70%] right-[82px]` centred vertically, `Poppins-Medium` 14px/1.4
      `#c80000` copy, 14px `#c80000` warning glyph at right 88px, hidden by
      default, revealed on wrapper hover and always visible at ≤992px, cleared on
      field focus, e-mail pattern `^[^\s@]+@[^\s@]+\.[^\s@]{2,}$`
- [ ] Countdown: wrapping `flex-col pt-[34px]` column at the right edge, FOUR
      `w-[90px]` units (`mb-[40px]`) in the order days → hours → minutes →
      seconds, each a Playfair Display Bold 60px/1 white number (30px below) over
      a Playfair Display Italic 14px/1 white sentence-case label, left-aligned,
      NO colons/boxes/rings; ≤992px centred row with `pt-[80px]` and 15px unit
      margins
- [ ] Countdown behaviour: 1 s tick toward `now + 35 d + 19 h`; days written raw
      while h/m/s are zero-padded; immediate first paint; interval cleared on
      unmount and at zero remaining
- [ ] Social stack: wrapping `flex-col pt-[470px]` column at the left edge, THREE
      `size-9` (36×36) transparent boxes with NO border and NO radius, 28px white
      glyphs, `transition-all duration-[400ms]`, 3px side / 5px bottom margins,
      hover glyph `text-white/20`; icons are lucide-react brand marks (no copied
      fa square-glyph paths); ≤992px centred row with `pt-[100px] pb-[30px]`
- [ ] Playfair Display (400 italic / 700 / 900 italic) + Poppins (400 / 500) via
      Google Fonts `<link>`; radii 25px / 0px; transitions `.4s`, `1000ms`
      (slideshow) and `.4s` (bubble)
- [ ] Placeholder photographs are the three `picsum.photos/seed/impending-bg*`
      URLs; icons are lucide-react only; no copied assets, mark, photo, favicon,
      font files or CSS; no jQuery, no framework, no CDN runtime
- [x] Component Dock attribution links `https://www.componentdock.com/`
- [x] Zero `colorlib` / source-demo-title / `comingsoon_10` references anywhere
      in `apps/impending` (comments included)
- [x] App folder `apps/impending`, package `@free-react-templates/impending`,
      `homepage` `https://impending.free.componentdock.com`, `public/CNAME`
      `impending.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh impending` passes
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
