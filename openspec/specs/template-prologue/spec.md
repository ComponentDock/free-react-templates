# Template: Prologue (Coming Soon / Under Construction)

## Purpose

Prologue is a single-screen coming-soon page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Coming Soon
V14" template (source slug `comingsoon_14` — the family's **light split-screen**
page: a `width:100%; min-height:100vh` wrapping flex row at
`align-items:stretch`, split into an opaque WHITE **37%** left panel and a **63%**
right panel that is ONE static `1200×900` mountain/forest photograph
(`background-position:center; background-repeat:no-repeat;
background-size:cover`) — no slideshow on this slug).

The left panel is a second flex column with `justify-content:space-between` at
`padding:37px 50px 52px 70px`, so THREE bands land on its top, middle and bottom
edge: a small `35×43` near-black (`rgb(51,51,51)`) logo mark pinned top-left; a
hero block (`padding:100px 0 90px 48px`, left padding 0 at ≤768px) holding a
**60px `PlayfairDisplay-Regular`** `#333` `uppercase` "Coming Soon" heading
(`line-height:1.1`, 34px below it — a modal serif with a 500 weight inherited
from the sheet's `h3` rule), beneath it a 24px `Poppins-Regular` `#999` "Follow
us for update now!" line (46px below it), and beneath that a **650px-wide
(≤ content + 110px), 80px-tall `#ffe151` yellow subscribe bar with NO border and
NO radius**, only a soft `0 10px 15px rgba(0,0,0,0.1)` shadow (0.2 on focus),
whose field is `0 80px 0 172px` padded, `Poppins-Medium` 15px `#333` with a
`#666` placeholder, whose left end is an absolutely positioned `172×80` label tab
whose only decoration is a **`5px solid #333` left border** (transparent fill,
`Subcribe Now:` in the source — a typo the recreation corrects), and whose right
end is an absolutely positioned `80×80` transparent button holding a 30px `#333`
long-arrow that slides `translateX(10px)` on hover — because the bar is
`max-width:calc(100% + 110px)` it overhangs the panel's right edge by 60px, so
part of the yellow bar and the WHOLE arrow button land on the photograph
(measured at 1440×900 and 1180×900); and a bottom band with the uppercase
`FOLLOW US` label (`Poppins-Regular` 16px `#999`, 40px right padding) followed by
THREE `36×36` **transparent circles ringed `1px solid #e6e6e6`** with 16px `#666`
glyphs (Facebook / Twitter / YouTube) that flip to a `#333` fill with `#fff`
glyphs on hover.

One `rgba(0,0,0,0.5)` scrim exists — the `::after` of the page row at
`z-index:-1` — and on this slug it is **invisible**: it paints behind the opaque
white left panel AND behind the right panel's own background image, so the
photograph is NOT darkened. That was verified pixel-exactly against the source
asset (rendered `rgb(241,235,245)` / `rgb(129,149,160)` vs source
`rgb(241,235,245)` / `rgb(129,149,160)` — ratio 1.0, no wash).

Validation is this slug's own flavour: an invalid e-mail submit adds an
`alert-validate` class whose bubble is a WHITE box with a `1px solid #c80000`
border, `border-radius:0`, `padding:4px 25px 4px 10px`, red `Poppins-Medium
14px/1.4` text reading the field's `data-validate` string (`Email is required:
ex@abc.xyz`), vertically centred on the field and pinned `right:72px`, with a
14px red warning glyph `right:78px` beside it; the bubble is revealed on hover
above 992px and shown always at ≤992px, and any focus on the field clears it. The
heading stays 60px at every width (the source's ≤576px `respon3` rule is
redundant). The split is 37/63 until 1200px, becomes **60/40** at ≤1200px, then
STACKS at ≤992px (white panel full width with 15px side padding, photo panel full
width at a fixed `height:500px`, the page now scrolls); at ≤768px the hero block
loses its 48px left padding, and at ≤576px the label tab collapses to a bare 5px
black bar (its text hidden), the arrow button narrows to 60px and the field's
padding becomes `0 60px 0 25px`.

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_14/
  (HTTP 200, 109,297 B, `text/html; charset=UTF-8`, verified 2026-10-11; page
  title "Coming Soon V14 - Free Website Template 2026 - Colorlib", description
  "The best free coming soon website template with a modern and responsive
  split-screen design, subscription and social icons.")
- **Preview:** https://preview.colorlib.com/theme/comingsoon_14/ returns
  **HTTP 404** (9 B, `text/plain`, verified 2026-10-11 — the family-wide
  live-preview gap), so the live preview DOM is unreachable for this slug — **re-probed 2026-10-23: the demo serves** (measured record below).
  Fallback (documented per `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_14.zip`
  (HTTP 200, 409,625 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs14/out/comingsoon_14/` — `index.html` (4,537 B, 72 lines),
  `css/style.css` (757 lines, 11,868 B), `js/snippet.js` (1,119 B, 32 lines),
  `README.md` (1,261 B), `images/bg01.jpg` (1200×900, 228,711 B),
  `images/icons/logo.png` (35×43 RGBA, 1,351 B), `images/icons/favicon.ico`
  (32,038 B) and three self-hosted faces
  `fonts/PlayfairDisplay-Regular.woff2` (70,984 B),
  `fonts/Poppins-Regular.woff2` (48,416 B),
  `fonts/Poppins-Medium.woff2` (48,444 B) plus
  `fonts/fontawesome-webfont-subset.woff2` (576 B, used only for the validation
  glyph). That zip (the real rendered template's own files) is the DOM/CSS/
  behaviour reference, together with the TEMPLATES.md screenshot. The extracted
  page was additionally opened in Chrome and measured (`getComputedStyle` +
  `getBoundingClientRect`) at 1440×900, 1180×900 (≤1200 branch), 900×1000 and
  765×1000 (≤992 stacked branch), 600×1200 (≤768 branch) and 400×1400 (≤576
  branch), and its submit path was exercised, so every token below is verified
  against the live render, not just the sheet.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-14.jpg
  (HTTP 200, 174,138 B, served as `image/avif` — NOT JPEG for this slug —
  1200×972, converted to PNG with ffmpeg and reviewed visually 2026-10-11)
- **New name:** `prologue` (apps/prologue, `@free-react-templates/prologue`) —
  the source demo title "Coming Soon 14", its `bg01.jpg` photograph, its `35×43`
  `logo.png` mark file, its self-hosted woff2 faces, its inlined fa/zmdi SVG
  icons, its "Coming Soon" / "Follow us for update now!" / "Email Address" /
  "Subcribe Now:" / "Email is required: ex@abc.xyz" strings and its favicon are
  never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/comingsoon_14/index.html` — HTTP 200, 4,607 B, title `Coming Soon 14`.
>
> Sheet: `https://colorlib.com/etc/cs/comingsoon_14/css/style.css?v=0ef04472` (11,868 B).
> Faces it actually declares: `Poppins-Medium`, `PlayfairDisplay-Regular`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V14" (source:
  https://colorlib.com/wp/template/comingsoon_14/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3045; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/prologue` absent, TEMPLATES.md line 3045 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_14/ →
  **HTTP 404** (verified 2026-10-11), so the live preview DOM could not be
  parsed. Fallback used (documented per `docs/replication.md`): the official
  source zip `https://preview.colorlib.com/downloads/free/comingsoon_14.zip`
  (HTTP 200, 409,625 B, `application/zip`), extracted to
  `/tmp/cs14/out/comingsoon_14/`. Reference artifacts: `/tmp/cs14/srczip14.zip`,
  `/tmp/cs14/out/comingsoon_14/`, `/tmp/cs14/src14.html` (the ColorLib page),
  `/tmp/cs14/prev14.html` (the 404 body), `/tmp/cs14/shot14.raw` (raw
  `image/avif`) + `/tmp/cs14/shot14.png` (1200×972 review copy, converted with
  ffmpeg). Research date: 2026-10-11. The source HTML/CSS/JS is authoritative for
  section structure, copy, tokens and behaviour.
- **Screenshot:** `coming-soon-14.jpg` (served as `image/avif`, converted and
  reviewed visually 2026-10-11) shows a browser-framed page split by a hard
  vertical seam at roughly 38% of the width: on the LEFT a flat WHITE panel with
  a black angular monogram mark in its top-left corner, and, centred in its lower
  half, a large dark serif `COMING SOON` headline stacked on two lines
  (`COMING` / `SOON`, uppercase, no gradient), a grey sentence-case
  `Follow us for update now!` line under it, then a **mustard-yellow horizontal
  bar** that begins with a thick black vertical tick, reads
  `Subscribe Now:` and a grey `Email Address` placeholder, and ends in a plain
  dark right-arrow — the bar visibly crossing the seam onto the photo, with the
  arrow over the photograph. Bottom-left of the panel: the small uppercase grey
  `FOLLOW US` caption followed by three hairline-ringed circular social icons
  (facebook, twitter, youtube). On the RIGHT, edge-to-edge, a cool
  grey-green mountain-and-conifer photograph (snowy scree, dark spruce,
  yellow-green alpine scrub at the bottom) with NO darkening wash and no
  overlay, caption or button anywhere on it. No navbar, no footer band, no
  second section, no visible card.
- **Stylesheets in the reference:** a single `css/style.css` (757 lines, no
  framework, no jQuery, no runtime CDN — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in, then
  re-declares a minimal Bootstrap-derived reboot) with three self-hosted
  `@font-face` blocks (`PlayfairDisplay-Regular`, `Poppins-Regular`,
  `Poppins-Medium`) plus a 576 B FontAwesome subset used only for the validation
  glyph (`\f071`) and four media blocks (`1200px`, `992px` ×2, `768px`,
  `576px` ×2, alongside two `@media print` blocks). The zmdi long-arrow-right and
  the three fa brand glyphs are inlined SVG `path`s in the markup, each wrapped in
  `i.fa`/`i.zmdi` with `.cl-icon{height:1em; width:auto; fill:currentColor}`. The
  recreation uses Tailwind 4 + React state; the revert guard, the reboot and all
  source class names are NEVER copied.
- **Key theme rules (verified in `css/style.css` and in the live render):**
  - Page row: `.flex-w.flex-str.size1.overlay1` =
    `.flex-w{display:flex; flex-wrap:wrap}` + `.flex-str{align-items:stretch}` +
    `.size1{width:100%; min-height:100vh}` + `.overlay1{position:relative;
z-index:1}`
  - Scrim (the ONLY overlay): `.overlay1::after{content:""; display:block;
position:absolute; z-index:-1; width:100%; height:100%; top:0; left:0;
background:rgba(0,0,0,0.5)}` — `z-index:-1` inside the row's stacking context
    puts it BEHIND both children, so `.bg0` (`#fff`) hides it on the left and the
    photo panel's own background paints over it on the right. **Occluded in this
    slug** (pixel-exact check: no darkening).
  - Left panel: `.flex-w.flex-col-sb.wsize1.bg0.p-l-70.p-t-37.p-b-52.p-r-50.respon1`
    = `display:flex; flex-wrap:wrap; flex-direction:column;
justify-content:space-between`, `width:37%`, `background-color:#fff`,
    `padding:37px 50px 52px 70px`
  - Photo panel: `.wsize2.bg-img1.respon2[style="background-image:
url('images/bg01.jpg')"]` = `width:63%`, `.bg-img1{background-position:center;
background-repeat:no-repeat; background-size:cover}`
  - Mark: `.wrappic1{display:block}` + `.wrappic1 img{max-width:100%}` (no
    `flex-grow` here — unlike sibling slugs) around `a > img[src=logo.png]`
  - Hero block: `.w-full.p-t-100.p-b-90.p-l-48.p-l-0-md` =
    `width:100%; padding:100px 0 90px 48px`, `padding-left:0` at ≤768px
  - Heading: `.l1-txt1{font-family:PlayfairDisplay-Regular; font-size:60px;
color:#333; line-height:1.1; text-transform:uppercase}` +
    `.p-b-34{padding-bottom:34px}` + `.respon3{font-size:60px}` at ≤576px
    (**a no-op** — the base size is already 60px); `font-weight:500` comes from
    the sheet's `.h3, h3` rule
  - Sub line: `.m2-txt1{font-family:Poppins-Regular; font-size:24px; color:#999;
line-height:1.2}` + `.p-b-46{padding-bottom:46px}`
  - Form: `.contact100-form{max-width:100%}` + `.m-t-10.m-b-10` (10px block
    margins); `.wrap-input100{width:650px; max-width:calc(100% + 110px);
position:relative; background-color:transparent; height:80px}`,
    `max-width:100%` at ≤992px; `.validate-input{position:relative}`
  - Field: `.input100{display:block; width:100%; height:100%; padding:0 80px 0
172px; background-color:#ffe151; box-shadow:0 10px 15px 0px rgba(0,0,0,0.1)}`
    → `:focus{box-shadow:0 10px 15px 0px rgba(0,0,0,0.2)}`; at ≤576px
    `padding-left:25px; padding-right:60px` (= `0 60px 0 25px`); `.s2-txt1`
    (applied to the field) = `Poppins-Medium 15px #333 line-height:1.2`;
    `.placeholder0::placeholder{color:#666}` (vendor-prefixed rules only — there
    is no standard `::placeholder` selector)
  - Label tab: `.size4{width:172px; height:80px}` + `.ab-t-l{position:absolute;
left:0; top:0}` + `.flex-c-m{justify-content:center; align-items:center}` +
    `.bor1{border-left:5px solid #333}` (transparent fill, no other border, no
    radius) with a `Poppins-Medium` 15px `#333` span reading the source's
    `Subcribe Now:`; at ≤576px `.respon4{width:5px}` and `.respon4 span{display:
none}` — the tab collapses to its bare 5px black border
  - Arrow button: `.size2{width:80px; height:80px}` + `.ab-t-r{position:absolute;
right:0; top:0}` + `.flex-c-m`, transparent button (`button{outline:none;
border:none; background:transparent; cursor:pointer}`) holding
    `i.zmdi-long-arrow-right` with `.fs-30{font-size:30px}` + `.cl1{color:#333}` +
    `.trans-04{transition:all 0.4s}`; hover `.hov1:hover i{transform:
translateX(10px)}`; at ≤576px `.respon5{width:60px}`
  - Socials: `.flex-w.flex-m{align-items:center}` wrapping
    `span.m2-txt2.p-r-40` = `Poppins-Regular 16px #999 line-height:1.2;
text-transform:uppercase` + three `a.size3.flex-c-m.how-social.trans-04
.m-r-15.m-b-5.m-t-5` = `36px × 36px`, `justify-content:center;
align-items:center`, `color:#666; font-size:16px; background-color:
transparent; border-radius:50%; border:1px solid #e6e6e6`, hover
    `.how-social:hover{background-color:#333; color:#fff}`
  - Validation: `.alert-validate::before{content:attr(data-validate);
position:absolute; max-width:70%; background-color:#fff; border:1px solid
#c80000; border-radius:0px; padding:4px 25px 4px 10px; top:50%;
transform:translateY(-50%); right:72px; pointer-events:none; font-family:
Poppins-Medium; color:#c80000; font-size:14px; line-height:1.4;
text-align:left; visibility:hidden; opacity:0; transition:opacity 0.4s}`,
    revealed by `:hover:before` and unconditionally at ≤992px;
    `.alert-validate::after{content:"\f071"; font-family:FontAwesome;
display:block; position:absolute; color:#c80000; font-size:14px; top:50%;
transform:translateY(-50%); right:78px}`
  - Responsive: `@media (max-width:1200px){.respon1{width:60%} .respon2{width:
40%}}`; `@media (max-width:992px){.respon1{width:100%; padding-left:15px;
padding-right:15px} .respon2{width:100%; height:500px}}`;
    `@media (max-width:768px){.p-l-0-md{padding-left:0}}`;
    `@media (max-width:576px){.respon3{font-size:60px} .respon4{width:5px}
.respon4 span{display:none} .respon5{width:60px}}`
  - Base type: `html{box-sizing:border-box; font-family:sans-serif;
line-height:1.15}` / `body{margin:0; font-family:-apple-system,
BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
font-size:1rem; font-weight:400; line-height:1.5; color:#212529;
background-color:#fff}` overridden by the later `body,html{font-family:Arial,
sans-serif; font-size:15px; color:#666666; height:100%; background-color:
#fff}` — all VISIBLE type is Playfair Display (heading) and Poppins 400/500
  - Fonts (source, self-hosted woff2): PlayfairDisplay-Regular (heading), Poppins
    Regular + Medium (everything else). **All three faces exist on Google Fonts**,
    so the recreation loads `Playfair+Display:wght@400;500` +
    `Poppins:wght@400;500` via `<link>` in `index.html` (no substitution, unlike
    the family's script-face siblings); icons are `lucide-react` (no icon font).
- **Content map (source DOM, verified in the live render):**
  `div.flex-w.flex-str.size1.overlay1` →
  1. `div.flex-w.flex-col-sb.wsize1.bg0.p-l-70.p-t-37.p-b-52.p-r-50.respon1` —
     ← LEFT PANEL (white), three children in a `space-between` column:
     - `div.wrappic1 > a[href="#"] > img[src=images/icons/logo.png]` — ← MARK
     - `div.w-full.p-t-100.p-b-90.p-l-48.p-l-0-md` — ← HERO BLOCK
       - `h3.l1-txt1.p-b-34.respon3` — "Coming Soon"
       - `p.m2-txt1.p-b-46` — "Follow us for update now!"
       - `form.contact100-form.validate-form.m-t-10.m-b-10` →
         `div.wrap-input100.validate-input.m-lr-auto-lg[data-validate="Email is
required: ex@abc.xyz"]` containing, in order: `input.s2-txt1
.placeholder0.input100.trans-04[type=text][name=email]
[placeholder="Email Address"]`, `button.flex-c-m.ab-t-r.size2.hov1
.respon5 > i.zmdi.zmdi-long-arrow-right.fs-30.cl1.trans-04` (inlined
         `svg.cl-icon`, viewBox `0 0 384 512`) and `div.flex-c-m.ab-t-l.s2-txt1
.size4.bor1.respon4 > span` ("Subcribe Now:")
     - `div.flex-w.flex-m` — ← SOCIAL BAND:
       `span.m2-txt2.p-r-40` ("Follow us") + three
       `a[href="#"].size3.flex-c-m.how-social.trans-04.m-r-15.m-b-5.m-t-5`
       wrapping `i.fa.fa-facebook` / `i.fa.fa-twitter` / `i.fa.fa-youtube-play`
  2. `div.wsize2.bg-img1.respon2[style="background-image:
url('images/bg01.jpg')"]` — ← PHOTO PANEL (empty element)
  - `.s2-txt1` is applied twice in the markup (field AND label tab) and IS
    present in the sheet, so both render `Poppins-Medium 15px #333` — the
    opposite situation from the family's V13 sibling, whose `.s2-txt1` rule was
    missing. `.m-lr-auto-lg` (on the field wrapper) has NO rule in any media
    block — it is inert.
- **Measured geometry (live render, 1440×900 — no scroll:
  `scrollHeight === clientHeight === 900`):** row 1440×900; left panel 533×900
  (37%) at (0,0) with padding `37px 50px 52px 70px`; photo panel 907×900 (63%) at
  x=533 with `background-size:cover`, `background-position:50% 50%`; mark image
  35×43 at (70,37); hero block 413×531 at (70,176) with padding
  `100px 0 90px 48px`; heading box 365×166 at (118,276) (`60px/66px`, two lines +
  the 34px bottom padding); sub-line box 365×75 at (118,442); form 365×80 at
  (118,526); subscribe bar 475×80 at (118,526) — i.e. `content 365 + 110` — so its
  right edge is x=593 while the panel ends at x=533: **60px of the bar and the
  entire 80×80 arrow button (x 513→593) sit on the photograph**; label tab 172×80
  at (118,526) (its text 107×18 centred); arrow glyph 23×31 at (542,551); social
  band 413×46 at (70,802) with the `FOLLOW US` label 127×19 at (70,815) and the
  first 36×36 circle at x=197. At 1180×900 (≤1200 branch): left 708 (60%), photo
  472 (40%), bar 650×80 at (118,493) whose right edge (768) again clears the panel
  edge (708) by 60px. At 900×1000 (≤992 branch): STACKED — left panel 885×643
  (`padding:37px 15px 52px`), photo 885×500 below it, document 1143px (scrolls),
  bar 650 wide inside an 807px content box (no overflow). At 765×1000: same
  stacking, hero block left padding 0, document 1143px. At 600×1200: bar 570 wide
  (max-width 100%). At 400×1400 (≤576): label tab 5px wide with its span
  `display:none`, arrow button 60×80, field padding `0 60px 0 25px`, heading still
  60px.
- **Behaviour (`js/snippet.js`, 32 lines, framework-free, ONE feature):** e-mail
  validation on every `.validate-form` — a trimmed value must match
  `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` when the field is `type=email` or
  `name=email`, otherwise must be non-empty; every failing field's
  `.validate-input` ancestor (or parent) gets `.alert-validate` and the submit is
  prevented; a `focus` handler removes the class. There is NO countdown, NO
  slideshow, NO success state, no request and no navigation on this slug (the
  timeout-free `snippet.js` is the family's shortest).
- **Palette:** page/panel white (`#fff`); heading + arrow + label ink (`#333`);
  brand/subscribe accent (`#ffe151` yellow); muted sub-line and social caption
  (`#999`); social glyphs and placeholder (`#666`); hairline social ring
  (`#e6e6e6`); social hover fill (`#333`) with white glyphs; subscribe-bar shadow
  (`rgba(0,0,0,0.1)`, `0.2` on focus); validation red (`#c80000`); page scrim
  (`rgba(0,0,0,0.5)`, occluded/invisible); body text (`#666666`). There is NO
  gradient, NO dark-mode treatment and NO second accent.

### Sibling comparison (why this slug is not a copy of its neighbours)

Within the `## Uncategorized (15)` `comingsoon_01..15` group, `comingsoon_14` is
distinctive in NINE ways — its closest relative by far is the V12 sibling
(`looming`, `comingsoon_12`), also a white-panel split, so the Deltas below are
the ones an implementer must not blur:

- **Split is 37/63, not 50/50** (`looming` is 50/50; both go 60/40 at ≤1200px and
  stack at ≤992px with a 500px photo). This is the family's only asymmetric split.
- **The photograph is a single STATIC image** (`bg01.jpg`, 1200×900) set as
  `background-image` on the panel — `looming` runs a three-photograph
  cross-fading slideshow in the same slot and ships a bigger `snippet.js`.
- **The heading is `Playfair Display` REGULAR 60px uppercase, upright, in two
  lines at `#333`** — the family's only upright 60px serif heading. `looming` uses
  `PlayfairDisplay-BlackItalic` at **90px** (weight 900, italic) and drops to
  60px at ≤576px; `comingsoon_15` is untested/prep-pending, and the script-face
  slugs (`pending` 180px, plus the Poppins/Ubuntu/Montserrat siblings) are far
  apart. There is no italic, no weight-900 and no size change at any breakpoint
  here (the source's `respon3` rule is a no-op).
- **The subscribe control is a YELLOW `#ffe151` bar with a 5px `#333` left-border
  label tab** — the family's only brand-coloured input. `looming` uses a WHITE
  well with no border, no radius and no label tab; the other siblings use white
  pills, `#f5f5f5` wells, translucent-bordered pills, `#e6e6e6` boxes or bare
  underlines.
- **The bar overhangs the panel** (`width:650px; max-width:calc(100% + 110px)`) so
  it crosses the split by exactly 60px and the arrow button sits entirely on the
  photograph at ≥1200px. No sibling's control leaves its own panel.
- **The arrow button is `80×80`** (`.size2`) — the family's largest arrow
  affordance and the only one wider than its own glyph box; `looming`'s lane is
  `90×80` but sits INSIDE a 500px well, and `pending`'s is 35px wide.
- **Socials are hairline-ringed transparent circles** (`1px solid #e6e6e6`,
  transparent fill, 16px `#666` glyphs, hover `#333` fill + white glyphs) preceded
  by an uppercase `FOLLOW US` caption — `looming` has no caption and uses filled
  `#ccc` discs with 22px white glyphs; `pending` uses translucent white rings on a
  dark photograph.
- **The validation bubble is pinned `right:72px` with its glyph at `right:78px`**
  — `looming` uses `right:82px` / `right:88px` and `pending` `right:32px` /
  `right:38px`.
- **The page scrim is invisible** (fully occluded by two opaque panels) — in
  `looming` and the dark siblings the same `rgba(0,0,0,0.5)` layer is the visible
  wash over the photograph. Copying the layer's markup is fine; do not "fix" it
  into a visible overlay.

## Design tokens

| Token                 | Value                                                                                                                                                                                                                                                                                                           | Where                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| page row              | `width:100%`, `min-height:100vh`, `display:flex`, `flex-wrap:wrap`, `align-items:stretch`, `position:relative`, `z-index:1`                                                                                                                                                                                     | the whole page (two panels, one row)                     |
| split ratio           | left `37%` / right `63%` at ≥1201px → `60%` / `40%` at ≤1200px → both `100%` at ≤992px (stacked); NEVER 50/50 (that is the V12 sibling)                                                                                                                                                                         | the two panels                                           |
| left panel            | `background:#fff` (opaque), flex column, `justify-content:space-between`, `padding:37px 50px 52px 70px`; `padding:37px 15px 52px` at ≤992px                                                                                                                                                                     | left column (3 bands)                                    |
| photo panel           | `width:63%`, `background-image:url(...)`, `background-position:center`, `background-repeat:no-repeat`, `background-size:cover`, empty element; `width:100%; height:500px` at ≤992px; recreation placeholder `https://picsum.photos/seed/prologue-hollow/1200/900`                                               | right column (static, no slideshow)                      |
| page scrim            | ONE `rgba(0,0,0,0.5)` layer as the row's `::after` (`position:absolute; z-index:-1; inset:0`) — **occluded by both panels in this slug (invisible; verified pixel-exact)**; no gradient, no second overlay                                                                                                      | behind both panels                                       |
| brand mark            | source file is a 35×43 RGBA PNG of a solid `#333` monogram; wrapper `display:block` (no `flex-grow`); recreation renders its OWN wordmark/monogram (`#333`, ≤43px tall, `max-width:100%`)                                                                                                                       | left panel, top edge                                     |
| hero block            | `width:100%`, `padding:100px 0 90px 48px`; `padding-left:0` at ≤768px                                                                                                                                                                                                                                           | left panel, middle band                                  |
| heading               | Playfair Display **400/500, 60px, `line-height:1.1`, `#333`, `text-transform:uppercase`, no `letter-spacing`, 34px below**; size does NOT change at ≤576px (the source's `respon3` rule is a no-op)                                                                                                             | hero block                                               |
| centre sub-line       | Poppins 400, 24px/1.2, `#999`, 46px below                                                                                                                                                                                                                                                                       | hero block                                               |
| subscribe bar         | `width:650px`, `max-width:calc(100% + 110px)` (= content + 110px, so it overhangs the panel by 60px), `height:80px`, `position:relative`, transparent wrapper, 10px block margins; `max-width:100%` at ≤992px (no overflow once stacked)                                                                        | hero block                                               |
| subscribe field       | `display:block; width:100%; height:100%`, `padding:0 80px 0 172px`, `background:#ffe151`, `border-radius:0`, NO border, `box-shadow:0 10px 15px 0 rgba(0,0,0,0.1)` → `0 10px 15px 0 rgba(0,0,0,0.2)` on focus; `padding:0 60px 0 25px` at ≤576px                                                                | subscribe bar                                            |
| field text            | Poppins 500 (source `Poppins-Medium`), 15px/1.2, `#333`; placeholder `#666`                                                                                                                                                                                                                                     | subscribe field                                          |
| label tab             | absolute `left:0; top:0`, `172px × 80px`, transparent fill, NO radius, **`border-left:5px solid #333`** as its only decoration, centred Poppins 500 15px `#333` text; **5px wide with the label hidden at ≤576px** (a bare black tick)                                                                          | subscribe bar, left end                                  |
| arrow button          | absolute `right:0; top:0`, `80px × 80px` (60px wide at ≤576px), transparent fill, NO border/radius, centred 30px `#333` long-arrow, `transition:all .4s`, hover slides the glyph `translateX(10px)`; needs an `aria-label` (source has none)                                                                    | subscribe bar, right end (over the photograph)           |
| social band           | `display:flex; flex-wrap:wrap; align-items:center` with a 40px-right-padded caption then three circles                                                                                                                                                                                                          | left panel, bottom edge                                  |
| social caption        | Poppins 400, 16px/1.2, `#999`, `text-transform:uppercase` (source "Follow us")                                                                                                                                                                                                                                  | social band, before the circles                          |
| social circle         | `36px × 36px`, `border-radius:50%`, transparent fill, `border:1px solid #e6e6e6`, centred 16px `#666` glyph, `margin:5px 15px 5px 0`, `transition:all .4s`                                                                                                                                                      | social band (×3)                                         |
| social glyphs         | Facebook, Twitter/X and YouTube — source inlines `fa-facebook` / `fa-twitter` / `fa-youtube-play`; the recreation uses `lucide-react` equivalents and NEVER copies the paths                                                                                                                                    | social band (×3)                                         |
| social hover          | fill → `#333`, glyph → `#fff`                                                                                                                                                                                                                                                                                   | over `.4s`                                               |
| validation bubble     | white box, `1px solid #c80000`, `border-radius:0px`, `padding:4px 25px 4px 10px`, `max-width:70%`, centred via `top:50%; translateY(-50%)`, **`right:72px`**, Poppins 500 14px/1.4 `#c80000`, `pointer-events:none`, `opacity 0 → 1` over `.4s`; message from `data-validate` = "Email is required: ex@abc.xyz" | invalid field                                            |
| validation glyph      | 14px `#c80000` warning glyph at **`right:78px`**, vertically centred (source: FontAwesome `\f071`)                                                                                                                                                                                                              | invalid field                                            |
| validation visibility | hidden until hover above 992px; ALWAYS visible at ≤992px; cleared on `focus`; `preventDefault()` on invalid submit; no network request                                                                                                                                                                          | invalid field                                            |
| radii                 | `0px` on the subscribe bar, its field, the label tab and the bubble; `50%` on the three social circles only                                                                                                                                                                                                     | shapes                                                   |
| accent colour         | `#ffe151` (the subscribe bar) — the ONLY brand colour; everything else is white/`#333`/`#999`/`#666`/`#e6e6e6` plus the `#c80000` validation red                                                                                                                                                                | palette                                                  |
| fonts                 | Playfair Display 400/500 (heading) · Poppins 500 15px (field, label tab, bubble) · Poppins 400 24px/16px (sub-line, caption)                                                                                                                                                                                    | typography                                               |
| Google Fonts mapping  | `Playfair+Display:wght@400;500` + `Poppins:wght@400;500` — **no substitution needed** (all three source faces are on Google Fonts); no icon font (lucide-react)                                                                                                                                                 | `index.html` `<link>`                                    |
| base type             | `body,html{font-family:Arial,sans-serif; font-size:15px; color:#666666; height:100%; background-color:#fff}` (all VISIBLE type is Playfair Display / Poppins)                                                                                                                                                   | typography                                               |
| transitions           | `all .4s` (field, arrow glyph, social circles), `opacity .4s` (validation bubble); box-shadow switches `0.1 → 0.2` alpha on field focus                                                                                                                                                                         | interaction                                              |
| attribution           | a small low-emphasis line linking `https://www.componentdock.com/` ("Component Dock"), pinned absolutely inside the left panel so the three-band `space-between` geometry is untouched                                                                                                                          | ADDED vs the reference (the source has no footer credit) |

### Placeholder photograph

The recreation never ships a source asset, so the photographic panel carries a
seeded placeholder (`https://picsum.photos/seed/prologue-hollow/1200/900`). The
seed was chosen deliberately: several seeds in this family render flat, heavily
saturated frames (the first candidate returned a near-solid yellow image that
collided with the `#ffe151` subscribe bar), so the shipped seed is a cool-toned
outdoor scene closest to the reference's grey-green mountain/forest photograph.
This is the ONE intentional deviation inside the design reference — every token
around it is unchanged.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_14/index.html` | HTTP 200 · 4,607 B · title `Coming Soon 14` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_14/css/style.css?v=0ef04472` | HTTP 200 · 11,868 B · sha256 `b15bfa2b0746` |

**Live palette** (hex × occurrences in that sheet): `#666666`×6,
`#ffffff`×5, `#333333`×5, `#c80000`×3, `#999999`×2, `#212529`×1,
`#007bff`×1, `#0056b3`×1, `#ffe151`×1, `#e6e6e6`×1.

**Low-chroma values the sheet actually uses** — `#666666`, `#333333`,
`#999999`, `#212529`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Split-screen shell (one 100vh row, two panels, one occluded scrim)

One `100vh` row that stretches two panels — an opaque white 37% column and a 63%
static photograph — with the family's `rgba(0,0,0,0.5)` scrim behind both.

#### Scenario: Page renders as one non-scrolling split screen

- **Given** the page loads at desktop width (1440×900)
- **When** the layout renders
- **Then** a single flex ROW occupies `width:100%; min-height:100vh` with
  `align-items:stretch`, `flex-wrap:wrap`, `position:relative; z-index:1`
- **And** the document does NOT scroll (`scrollHeight === clientHeight` at
  1440×900)
- **And** its two children are, in order, the white content panel (`37%`) and the
  photo panel (`63%`)
- **And** there is NO navbar, NO footer band, NO second section, NO modal and no
  navigation links
- **And** there is NO gradient, NO dark-mode treatment and only the ONE
  `#ffe151` accent

#### Scenario: The scrim layer is present but occluded

- **Given** the page renders
- **When** the layering is inspected
- **Then** exactly ONE `rgba(0,0,0,0.5)` full-size layer exists, absolutely
  positioned at `z-index:-1` inside the `z-index:1` row so it paints BEHIND both
  panels
- **And** it is therefore INVISIBLE: the white panel (`#fff`) hides it on the left
  and the photo panel's own background image paints over it on the right — the
  photograph is NOT darkened (verified pixel-exact against the source asset)
- **And** there is no second overlay and no gradient

#### Scenario: Photo panel is a single static cover image

- **Given** the photo panel renders
- **When** it is inspected
- **Then** it occupies `63%` of the row, is an EMPTY element (no children) with
  `background-position:center; background-repeat:no-repeat; background-size:cover`
- **And** it shows exactly ONE image — the recreation's own placeholder
  `https://picsum.photos/seed/prologue-hollow/1200/900`
- **And** it carries NO slideshow, NO cross-fade, NO interval and NO caption,
  button or overlay of its own
- **And** it is never the source's `bg01.jpg` file

### Feature: White content panel (mark · hero · socials in a space-between column)

The left column distributes exactly three bands with `justify-content:space-between`
over an opaque white background.

#### Scenario: Three bands land on the panel's three edges

- **Given** the left panel renders at 1440×900
- **When** it is inspected
- **Then** it is a flex COLUMN with `justify-content:space-between` and
  `background:#fff`, `padding:37px 50px 52px 70px`
- **And** its first child is the brand mark at the top edge (y=37), its second is
  the hero block in the middle (y=176→707) and its third is the social band on
  the bottom edge (y=802→848)
- **And** at ≤992px the panel becomes full width with `padding:37px 15px 52px`
  and the page scrolls

#### Scenario: Brand mark is the app's own, top-left

- **Given** the panel renders
- **When** its top-left corner is inspected
- **Then** a `display:block` wrapper with NO `flex-grow` holds the app's OWN
  wordmark/monogram, `#333`, at most 43px tall with `max-width:100%`
- **And** it is never the source's 35×43 `logo.png` file or its glyph shapes
- **And** it is a link (`<a>`) in the source — the recreation may link it to the
  monorepo's own home without inventing a nav

### Feature: Hero block (serif headline · sub-line · yellow subscribe bar)

The middle band holds the heading, a muted sub-line and the brand-coloured
subscribe control with its label tab and overhanging arrow button.

#### Scenario: Heading is Playfair Display, 60px, upright and uppercase

- **Given** the hero block renders
- **When** the heading is inspected
- **Then** it is an `h3` in **Playfair Display** at **60px** with
  `line-height:1.1`, `font-weight:500`, `color:#333`,
  `text-transform:uppercase`, no `letter-spacing` and 34px of space below it
- **And** it renders on two lines (`COMING` / `SOON`) inside a 365px-wide box at
  1440×900
- **And** it stays 60px at EVERY width (the source's ≤576px rule re-declares
  60px — do not add a size change)
- **And** it is NOT italic and NOT weight-900 (that is the V12 sibling's heading)
- **And** the source's copy is never reproduced verbatim (the recreation writes
  its own headline of the same kind)

#### Scenario: Sub-line is muted Poppins under the heading

- **Given** the hero block renders
- **When** the line under the heading is inspected
- **Then** it is a sentence-case line in Poppins 400 24px/1.2 `#999`, 46px below
  the heading
- **And** it is the same _kind_ of content as the source's update line, never its
  verbatim string

#### Scenario: Subscribe bar is a yellow, square, shadowed 80px bar

- **Given** the hero block renders
- **When** the subscribe control is inspected
- **Then** the form is `max-width:100%` with 10px block margins and wraps a
  `height:80px`, `width:650px`, `max-width:calc(100% + 110px)` relatively
  positioned, transparent container
- **And** the field fills it (`display:block; width:100%; height:100%`) with
  `padding:0 80px 0 172px`, `background:#ffe151`, `border-radius:0`, NO border and
  `box-shadow:0 10px 15px 0 rgba(0,0,0,0.1)`
- **And** focusing the field deepens the shadow to `rgba(0,0,0,0.2)` (no colour,
  border or background change)
- **And** its text is Poppins 500 15px/1.2 `#333` with a `#666` placeholder
- **And** it is validated as an e-mail even though the source field is
  `type="text"`
- **And** the shape is a SQUARE bar — never a white pill, never a bordered well
  and never a bare underline

#### Scenario: Label tab marks the bar's left end with a 5px rule

- **Given** the subscribe bar renders
- **When** its left end is inspected
- **Then** an absolutely positioned `left:0; top:0` box of `172px × 80px` sits
  over the yellow field with a TRANSPARENT fill, NO radius, NO other border and
  **`border-left:5px solid #333`**
- **And** it centres a Poppins 500 15px `#333` caption inside it
- **And** the field's `padding-left:172px` exists to clear that box
- **And** at ≤576px the box narrows to `5px` and its text is hidden, leaving a
  bare black tick, and the field's padding becomes `0 60px 0 25px`
- **And** the caption is the recreation's own copy (the source's string is a
  misspelling the recreation corrects)

#### Scenario: Arrow button overhangs the panel onto the photograph

- **Given** the subscribe bar renders at ≥1200px
- **When** its right end is inspected
- **Then** an absolutely positioned `right:0; top:0` button of `80px × 80px`
  (60px wide at ≤576px) with NO fill, border or radius centres a 30px `#333`
  long-arrow glyph
- **And** hovering it slides the glyph `translateX(10px)` over `all .4s`
- **And** because the bar is `max-width:calc(100% + 110px)`, the bar's right edge
  crosses the panel's right edge by 60px, so part of the yellow field — and the
  WHOLE arrow button — sit over the photograph (measured at 1440×900: bar
  118→593, split at 533, button 513→593)
- **And** at ≤992px the `max-width:100%` override stops the overflow (the bar
  stays inside the stacked panel)
- **And** the button carries an `aria-label` (the source has none)
- **And** clicking it submits the form (the source's button is a plain
  `<button>` inside the form) and never navigates away or issues a network
  request for invalid input

### Feature: Social band (uppercase caption + hairline-ring circles)

#### Scenario: Caption then three ringed circles sit on the bottom edge

- **Given** the social band renders
- **When** it is inspected
- **Then** a wrapping row with `align-items:center` holds an uppercase
  Poppins 400 16px/1.2 `#999` caption with `padding-right:40px`
- **And** THREE `36px × 36px` `border-radius:50%` links follow it, each with a
  `1px solid #e6e6e6` border, a TRANSPARENT fill, a 16px `#666` glyph
  (Facebook, Twitter/X, YouTube from `lucide-react`),
  `margin:5px 15px 5px 0` and `transition:all .4s`
- **And** hovering a circle fills it `#333` and switches the glyph to `#fff`
- **And** they are NOT filled discs (that is the V12 sibling) and do NOT carry a
  solid white border (that is the V13 sibling)
- **And** the caption is the recreation's own copy, not the source's string

### Feature: Validation (bordered red bubble pinned 72px from the bar's right)

#### Scenario: Invalid submit shows the reference validation bubble

- **Given** the field is empty or is not a valid e-mail
  (`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`)
- **When** the form is submitted
- **Then** the submit is prevented and the field's container gains the error
  state
- **And** a bubble appears over the bar: white background, `1px solid #c80000`
  border, `border-radius:0`, `padding:4px 25px 4px 10px`, max-width 70%,
  vertically centred on the field, pinned **72px** from the bar's right edge, in
  Poppins 500 14px/1.4 `#c80000`
- **And** the bubble text is the field's own requirement message (the source reads
  "Email is required: ex@abc.xyz" — the recreation writes its own equivalent)
- **And** a 14px `#c80000` warning glyph sits **78px** from the right edge,
  vertically centred
- **And** the bubble fades in over `.4s`, does not intercept pointer events, is
  revealed on hover above 992px and is ALWAYS visible at ≤992px
- **And** focusing the field clears the error state
- **And** a valid submit (`name@example.com`) never adds the error state, never
  navigates and never issues a network request

### Feature: Responsive behaviour

#### Scenario: Ratio, stacking and the small-screen bar

- **Given** the page is rendered at a sequence of widths
- **When** the layout reflows
- **Then** at 1440px the split is `37%` / `63%`
- **And** at ≤1200px it is `60%` / `40%`
- **And** at ≤992px the panels STACK: the white panel becomes `100%` wide with
  `padding:37px 15px 52px`, the photo panel becomes `100% × 500px` below it, and
  the document now scrolls
- **And** at ≤768px the hero block's `padding-left:48px` becomes `0`
- **And** at ≤576px the field's padding becomes `0 60px 0 25px`, the label tab
  collapses to `5px` with its text hidden, and the arrow button narrows to 60px
- **And** the heading stays 60px at every width
- **And** no element overflows or overlaps a sibling at any width

### Feature: Component Dock attribution

#### Scenario: Footer credit links Component Dock

- **Given** any template in the monorepo must credit the marketplace
- **When** the page renders
- **Then** a small low-emphasis attribution line links
  `https://www.componentdock.com/` branded "Component Dock"
- **And** it is pinned absolutely inside the white panel so the three-band
  `space-between` geometry is untouched
- **And** this line is the ONLY addition versus the reference (the source page has
  no footer credit)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/prologue/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/prologue/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] App exists at `apps/prologue`, package `@free-react-templates/prologue`,
      `homepage` `https://prologue.free.componentdock.com`, `public/CNAME`
      `prologue.free.componentdock.com`; `npm install` run at the repo root and
      the lockfile registers the workspace
      (`grep -c "free-react-templates/prologue" package-lock.json` ≥ 1)
- [ ] `vite.config.ts` keeps `injectUiSource()`
- [ ] `npm run spec:validate` / `openspec validate template-prologue --type spec`
      passes
- [ ] `scripts/verify-app.sh prologue` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build
- [ ] Shell: ONE `min-h-screen w-full flex flex-wrap items-stretch relative z-[1]`
      row with exactly TWO children in order — the white `w-[37%]` /
      `max-[1200px]:w-[60%]` / `max-[992px]:w-full` column and the
      `w-[63%] max-[1200px]:w-[40%] max-[992px]:w-full max-[992px]:h-[500px]`
      photo panel; no scroll at 1440×900
- [ ] Scrim: exactly ONE `absolute inset-0 -z-10 bg-black/50` layer behind both
      panels (occluded/invisible — the photo must NOT be darkened); no gradient
- [ ] Photo panel: empty element with
      `bg-[url(...)] bg-cover bg-center bg-no-repeat` using
      `https://picsum.photos/seed/prologue-hollow/1200/900`; NO slideshow, NO
      interval, NO caption; never the source `bg01.jpg`
- [ ] Panel: `bg-white flex flex-col justify-between pt-[37px] px-[50px] pb-[52px]
    pl-[70px] max-[992px]:px-[15px]` with THREE children — mark, hero block,
      social band
- [ ] Mark: `block` wrapper (NO `flex-1`/`flex-grow`) with the app's own
      wordmark/monogram (`#333`, ≤43px tall, `max-w-full`), never the source PNG
- [ ] Hero block: `w-full pt-[100px] pb-[90px] pl-[48px] max-[768px]:pl-0`
      holding `Heading` → `SubLine` → `SubscribeBar`
- [ ] Heading: `h3` Playfair Display `text-[60px] leading-[1.1] font-medium
    text-[#333] uppercase pb-[34px]`, no `letter-spacing`, NO italic, NO
      weight-900, NO size change at any breakpoint; own copy
- [ ] Sub-line: Poppins 400 `text-[24px] leading-[1.2] text-[#999] pb-[46px]`;
      own copy
- [ ] Subscribe bar: `h-[80px] w-[650px] max-w-[calc(100%+110px)] relative
    my-[10px] max-[992px]:max-w-full`, wrapping the field, the label tab and the
      arrow button; at 1440×900 the bar spans x=118→593 while the split is at 533
- [ ] Field: `block h-full w-full pt-0 pr-[80px] pb-0 pl-[172px]
    max-[576px]:pr-[60px] max-[576px]:pl-[25px] rounded-none border-0
    bg-[#ffe151] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)]
    focus:shadow-[0_10px_15px_0_rgba(0,0,0,0.2)]`, Poppins 500 `text-[15px]
    text-[#333]`, `placeholder:text-[#666]`, validated as an e-mail
- [ ] Label tab: absolute `left-0 top-0 h-[80px] w-[172px] max-[576px]:w-[5px]`
      `flex items-center justify-center` with `border-l-[5px] border-l-[#333]`,
      transparent fill, no radius, Poppins 500 15px `#333` caption; the caption
      is hidden (`sr-only` or conditionally not rendered) at ≤576px
- [ ] Arrow button: absolute `right-0 top-0 h-[80px] w-[80px] max-[576px]:w-[60px]`
      `flex items-center justify-center` with no fill/border/radius, a 30px
      `#333` lucide arrow, `group-hover:translate-x-[10px]
    transition-transform duration-[400ms]`, `aria-label` present; it sits over
      the photograph at ≥1200px
- [ ] Social band: `flex flex-wrap items-center` with an uppercase Poppins 400
      `text-[16px] text-[#999] pr-[40px]` caption and THREE `size-9` (36×36)
      `rounded-full border border-[#e6e6e6] bg-transparent text-[#666] text-[16px]`
      links (`my-[5px] mr-[15px]`, `transition-all duration-[400ms]`, hover
      `bg-[#333] text-white`)
- [ ] Validation: bubble = white, `border border-[#c80000] rounded-none
    py-[4px] pl-[10px] pr-[25px]`, `max-w-[70%]`, vertically centred,
      `right-[72px]`, Poppins 500 14px/1.4 `#c80000`, `pointer-events-none`,
      opacity transition `400ms`; warning glyph 14px `#c80000` at `right-[78px]`;
      hidden-until-hover above 992px, always visible at ≤992px; cleared on focus;
      invalid submit prevented
- [ ] Validation acceptance test: empty field and `foo@bar` both show the error
      state and block submit; `name@example.com` submits without error state and
      without a network call
- [ ] Attribution: one small low-emphasis Component Dock line linked to
      `https://www.componentdock.com/`, absolutely positioned inside the white
      panel so the three-band `space-between` geometry is untouched
- [ ] Fonts: `Playfair+Display:wght@400;500` + `Poppins:wght@400;500` via Google
      Fonts `<link>` (no substitution — every source face is on Google Fonts);
      icons are `lucide-react` only
- [ ] Theme tokens in `src/index.css` `@theme`: accent `#ffe151`, ink `#333`,
      muted `#999`, glyph/placeholder `#666`, hairline `#e6e6e6`, white `#fff`,
      validation `#c80000`, body text `#666666`, shadow alpha `0.1`/`0.2`,
      scrim `rgba(0,0,0,0.5)`; radii `0px` (bar, field, tab, bubble) and `50%`
      (social circles)
- [x] Zero `colorlib` / source-demo-title / `comingsoon_14` references anywhere in
      `apps/prologue` (comments included)
- [ ] No copied assets: no `bg01.jpg`, no 35×43 `logo.png`, no favicon, no woff2
      files, no `css/style.css` (including its `all: revert` guard, the
      Bootstrap reboot and the FontAwesome subset), no inlined fa/zmdi SVG paths
- [ ] Visual check against the reference screenshot (`coming-soon-14.jpg`,
      1200×972): hard vertical seam at ~38%; flat white left panel with a dark
      monogram top-left; dark serif `COMING` / `SOON` stacked, centred
      lower-middle; grey update line under it; mustard-yellow square bar with a
      black left tick, `Subscribe Now:` caption, grey placeholder and a dark arrow
      — the bar crossing the seam onto the photograph; uppercase grey `FOLLOW US`
      caption and three hairline-ring social icons bottom-left; cool grey-green
      mountain/conifer photograph on the right with NO darkening wash
- [ ] Responsive check: 37/63 → 60/40 (≤1200) → stacked 100% + 500px photo
      (≤992, panel side padding 15px, page scrolls) → hero `padding-left` 0
      (≤768) → field `0 60px 0 25px` + 5px tab + 60px button (≤576); heading 60px
      at every width
- [ ] PR description includes: source template (ColorLib Coming Soon V14), preview
      URL (404 → source-zip fallback), the design tokens used (`#ffe151` accent,
      `#333` ink, `#999`/`#666` greys, `#e6e6e6` rings, `#fff` panel,
      `rgba(0,0,0,0.1)`/`0.2` shadow, `rgba(0,0,0,0.5)` scrim, `#c80000`
      validation, Playfair Display 60px + Poppins 15/16/24px, the 37/63 → 60/40 →
      stacked ratios, the `calc(100% + 110px)` overhang, the 5px tab rule, the
      80×80 arrow, the 72/78px bubble offsets) and what differs (new name, picsum
      placeholder photo, own wordmark/copy — including the source's misspelled
      caption corrected, lucide icons, an added `aria-label` on the arrow button
      and the Component Dock attribution line)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
