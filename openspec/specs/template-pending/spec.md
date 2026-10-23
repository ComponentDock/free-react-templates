# Template: Pending (Coming Soon / Under Construction)

## Purpose

Pending is a single-screen coming-soon page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Coming Soon
V13" template (source slug `comingsoon_13`) — the family's **full-screen slider**
page: a `position:fixed`, viewport-sized cross-fading slideshow of FOUR landscape
`1900×900` photographs over a `#000` backdrop at `z-index:0`; ONE
`rgba(0,0,0,0.5)` scrim as the `::after` of the content column
(`z-index:1`, `z-index:-1` pseudo) so the wash sits above the slideshow and below
every word; and ONE `justify-content:space-between` column
(`width:100%; min-height:100vh; align-items:center`, `padding:20px 75px 40px`)
whose three bands are the whole layout.

The TOP band is a wrapping `space-between` row holding three things: the brand
mark's box (`flex-grow:1`, so it eats the slack and shoves the rest right — the
source file is a 127×24 all-white wordmark PNG), a **four-unit countdown**
(`35 Days · 18 Hr · 59 Min · 58 Sec`) of Montserrat-Regular **30px** white digits
with `min-width:46px` and 18px labels baseline-aligned by the unit row's
`align-items:flex-end` (the label carries `padding-bottom:2px`), and a
`Sign Up` **pill that is TRANSPARENT with a `1px solid #fff` border and
`border-radius:25px`** (`min-width:140px; height:50px`, Montserrat-SemiBold 14px
uppercase white, hover → filled `#fff` with `#555` text) — the family's only
bordered-transparent CTA. The countdown's position is unique in the family:
siblings carry theirs in the centre block, this slug carries it in the header.

The CENTRE band (`flex column, centred both axes`, `padding:80px 15px 90px`)
holds exactly two things: a **brush-script headline** — `Playlist Script` at
**180px** white, `line-height:1.1`, sentence case, centred, 55px above the next
element, and the LARGEST and ONLY script type in the `comingsoon_01..15` family
(160px at ≤992px, 120px at ≤768px, 80px at ≤576px) — above a **60×60 circular
play button** whose visible disc is its own `::after` at `z-index:-1`: a solid
WHITE `border-radius:50%` layer carrying a `#333` triangle glyph, with
`transition:all .4s` and a hover that drops the disc to `opacity:.6` and scales it
`1.2`. The source ships **no handler** for that button: it is decorative.

The BOTTOM band is a wrapping `space-between` row with the socials on the LEFT —
THREE 36×36 `border-radius:50%` circles that are **translucent rings**
(`border:1px solid rgba(255,255,255,0.1)`, transparent fill) around 18px `#999`
Facebook / Twitter / YouTube glyphs, each with 3px margins, hover → white fill and
`#555` glyph — and, on the RIGHT, the e-mail capture, which on this slug is a
**bare underline**: a `280px × 50px` transparent container whose field is
`display:block; width:100%; height:100%; padding:0 40px 0 3px` with
`border-bottom:1px solid rgba(255,255,255,0.1)`, `border-radius:0`, no box and no
fill (`background:rgba(255,255,255,0)` → `rgba(255,255,255,0.05)` on focus), a
`#999999` placeholder, and an invisible `35px × 100%` arrow lane pinned
`top:0; right:0` holding a 16px `#999` arrow that turns `#fff` on hover. The
sheet's `.s2-txt1` class is referenced by the markup but **absent from the
stylesheet**, so the source's field text silently fell back to Arial 15px in the
browser's default black.

Validation is the family's bordered bubble: an invalid submit adds
`alert-validate` to the field's `.validate-input` wrapper, whose `::before` is a
WHITE box with `1px solid #c80000`, `border-radius:0px`,
`padding:4px 25px 4px 10px`, `max-width:70%`, vertically centred
(`top:50%; translateY(-50%)`), pinned `right:32px`, in Montserrat-Regular
14px/1.4 `#c80000` reading the field's `data-validate` string
(`Email is required: ex@abc.xyz`), with a 14px `#c80000` warning glyph
(`\f071`) at `right:38px`; it fades over `.4s`, is revealed on hover above 992px,
is shown always at ≤992px, and is cleared by any focus on the field. Both offsets
are smaller than sibling slugs because the field is only 280px wide.

There is no navbar, no footer band, no second section and no scrolling: at
1440×900 `document.documentElement.scrollHeight === clientHeight` (900 px). It is
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_13/
  (HTTP 200, 109,296 B, `text/html; charset=UTF-8`, verified 2026-10-11; page
  title "Coming Soon V13 - Free Full-Screen Website Template 2026 - Colorlib",
  description "The best free website template with a full-screen image slider
  background for creating a top-notch coming soon page.")
- **Preview:** https://preview.colorlib.com/theme/comingsoon_13/ returns
  **HTTP 404** (9 B, `text/plain`, verified 2026-10-11 — the family-wide
  live-preview gap), so the live preview DOM is unreachable for this slug — **re-probed 2026-10-23: the demo serves** (measured record below).
  Fallback (documented per `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_13.zip`
  (HTTP 200, 695,439 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs13/out/comingsoon_13/` — `index.html` (5,906 B), `css/style.css`
  (803 lines), `js/snippet.js` (4,003 B), `README.md` (1,261 B),
  `images/bg01.jpg` (1900×900, 131,737 B), `images/bg02.jpg` (1900×900,
  114,142 B), `images/bg03.jpg` (1900×900, 140,414 B), `images/bg04.jpg`
  (1900×900, 149,213 B), `images/icons/logo.png` (127×24 RGBA, 1,946 B),
  `images/icons/favicon.ico` (32,038 B) and four self-hosted faces
  `fonts/Montserrat-Regular.woff2` (59,632 B),
  `fonts/Montserrat-SemiBold.woff2` (59,576 B),
  `fonts/Playlist Script.woff2` (37,712 B),
  `fonts/fontawesome-webfont-subset.woff2` (576 B). That zip (the real
  rendered template's own files) is the DOM/CSS/behaviour reference, together
  with the TEMPLATES.md screenshot. The extracted page was additionally opened
  in Chrome and measured (`getComputedStyle` + `getBoundingClientRect`) at
  1440×900 and at a narrow viewport, so every token below is verified against
  the live render, not just the sheet.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-13.jpg
  (HTTP 200, 44,344 B, served as `image/avif` — NOT JPEG for this slug —
  1200×972, converted to PNG with ffmpeg and reviewed visually 2026-10-11)
- **New name:** `pending` (apps/pending, `@free-react-templates/pending`) — the
  source demo title "Coming Soon 13", its `bg01.jpg`…`bg04.jpg` photographs, its
  127×24 `logo.png` wordmark, its self-hosted woff2 faces, its inlined zmdi/fa
  SVG icons, its "Coming Soon" / "Sign Up" / "Email Address" /
  "Email is required: ex@abc.xyz" strings and its favicon are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/comingsoon_13/index.html` — HTTP 200, 5,976 B, title `Coming Soon 13`.
>
> Sheet: `https://colorlib.com/etc/cs/comingsoon_13/css/style.css?v=20641a4e` (12,391 B).
> Faces it actually declares: `Montserrat-Regular`, `Playlist Script`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V13" (source:
  https://colorlib.com/wp/template/comingsoon_13/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3044; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/pending` absent, TEMPLATES.md line 3044 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_13/ →
  **HTTP 404** (verified 2026-10-11), so the live preview DOM could not be
  parsed. Fallback used (documented per `docs/replication.md`): the official
  source zip `https://preview.colorlib.com/downloads/free/comingsoon_13.zip`
  (HTTP 200, 695,439 B, `application/zip`), extracted to
  `/tmp/cs13/out/comingsoon_13/`. Reference artifacts: `/tmp/cs13/srczip13.zip`,
  `/tmp/cs13/out/comingsoon_13/`, `/tmp/cs13/src13.html` (the ColorLib page),
  `/tmp/cs13/prev13.html` (the 404 body), `/tmp/cs13/shot13.raw` (raw
  `image/avif`) + `/tmp/cs13/shot13.png` (1300×972-equivalent review copy,
  converted with ffmpeg). Research date: 2026-10-11. The source HTML/CSS/JS is
  authoritative for section structure, copy, tokens and behaviour.
- **Screenshot:** `coming-soon-13.jpg` (served as `image/avif`, converted and
  reviewed visually 2026-10-11) shows one full-bleed dark photograph (deep-green
  palm fronds) with, in white: a bold sans wordmark top-left; above/right of it
  four countdown groups (`35 Days 18 Hr 59 Min 58 Sec`) and at the far right a
  thin white rounded outline around an uppercase `SIGN UP` label; across the
  middle a very large connected brush-script headline "Coming Soon"; directly
  under it a small solid white circle with a dark play triangle; and on the
  bottom edge three thin-ringed circular social icons, far left, with a grey
  `Email Address` label sitting on a faint underline and a grey right-arrow at
  the bottom right. No nav bar, no footer band, no visible card or box anywhere.
  The live render of the extracted source confirms the same composition at
  1440×900 (no scroll) and at 765px, where the top row wraps and the pill drops
  to a second line and the heading renders at 160px.
- **Stylesheets in the reference:** a single `css/style.css` (803 lines, no
  framework, no jQuery, no runtime CDN — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in, then
  re-declares a minimal Bootstrap-derived reboot) with three self-hosted
  `@font-face` blocks (Montserrat-Regular, Montserrat-SemiBold, Playlist Script)
  plus a 576 B FontAwesome subset used only for the validation glyph. The
  zmdi play triangle, the zmdi arrow and the three fa brand glyphs are inlined
  SVG `path`s in the markup, each wrapped in `i.fa`/`i.zmdi` with
  `.cl-icon{height:1em; width:auto; fill:currentColor}`. The recreation uses
  Tailwind 4 + React state; the revert guard, the reboot and all source class
  names are NEVER copied.
- **Key theme rules (verified in `css/style.css` and in the live render):**
  - Content column: `.flex-col-c-sb{display:flex; flex-direction:column;
    justify-content:space-between; align-items:center}` +
    `.size1{width:100%; min-height:100vh}` + `.overlay1{position:relative;
    z-index:1}`; padding via `.p-l-75.p-r-75.p-t-20.p-b-40` =
    `20px 75px 40px`
  - Scrim (the ONLY overlay): `.overlay1::after{content:""; display:block;
    position:absolute; z-index:-1; width:100%; height:100%; top:0; left:0;
    background:rgba(0,0,0,0.5)}`
  - Backdrop: `.simpleslide100{display:block; position:fixed; z-index:0;
    width:100%; height:100%; top:0; left:0; background-color:#000}` +
    `.simpleslide100-item{display:block; position:absolute; width:100%;
    height:100%; top:0; left:0}` + `.bg-img1{background-position:center;
    background-repeat:no-repeat; background-size:cover}`
  - Flex helpers: `.flex-w{display:flex; flex-wrap:wrap}`,
    `.flex-b{display:flex; align-items:flex-end}`,
    `.flex-c-m{display:flex; justify-content:center; align-items:center}`,
    `.flex-sb-m{display:flex; justify-content:space-between; align-items:center}`,
    `.flex-col-c-m{display:flex; align-items:center; justify-content:center;
    flex-direction:column}`, `.w-full{width:100%}`, `.txt-center{text-align:center}`,
    `.ab-t-r{position:absolute; right:0px; top:0px}`, `.trans-04{transition:all 0.4s}`
  - Mark: `.wrappic1{display:block; flex-grow:1}` + `.wrappic1 img{max-width:100%}`
  - Countdown: `.cd100` has no rule of its own (styled by utilities
    `.p-t-15.p-b-15.p-r-36` = `15px 36px 15px 0`); digits `.l1-txt1{font-family:
    Montserrat-Regular; font-size:30px; color:#fff; line-height:1}` +
    `.wsize1{min-width:46px}`; labels `.m1-txt1{font-family:Montserrat-Regular;
    font-size:18px; color:#fff; line-height:1}` + `.p-b-2{padding-bottom:2px}`;
    unit `.flex-w.flex-b.m-r-22.m-t-8.m-b-8`; digits are plain `<span>`s with
    `.days` / `.hours` / `.minutes` / `.seconds` as script hooks only
  - CTA: `.size2{min-width:140px; height:50px}` + `.s1-txt1{font-family:
    Montserrat-SemiBold; font-size:14px; color:#fff; line-height:1.2;
    text-transform:uppercase}` + `.how-btn1{padding:0 15px; background-color:
    transparent; border:1px solid #fff; border-radius:25px}`; hover
    `.how-btn1:hover{background-color:#fff; color:#555}`
  - Centre: `.p-t-80{padding-top:80px}` + `.p-b-90{padding-bottom:90px}`;
    heading `.l1-txt2{font-family:Playlist Script; font-size:180px; color:#fff;
    line-height:1.1}` + `.p-b-55{padding-bottom:55px}`
  - Play button: `.how-btn-play1{width:60px; height:60px; background-color:
    transparent; border-radius:50%; font-size:20px; color:#333; position:relative;
    z-index:1}` + `::after{content:""; display:block; position:absolute;
    z-index:-1; width:100%; height:100%; top:0; left:0; background-color:#fff;
    border-radius:50%; transition:all 0.4s}`; hover `::after{opacity:0.6;
    transform:scale(1.2)}`
  - Socials: `.size3{width:36px; height:36px}` + `.how-social{color:#999;
    font-size:18px; border:1px solid rgba(255,255,255,0.1); background-color:
    transparent; border-radius:50%}`; hover `.how-social:hover{background-color:
    #fff; color:#555}`; `.m-r-3.m-l-3.m-b-3.m-t-3` (3px each)
  - E-mail: `.contact100-form{max-width:100%}` + `.m-t-10.m-b-10`;
    `.wrap-input100{width:280px; max-width:100%; position:relative;
    background-color:transparent; height:50px}` + `.validate-input{position:
    relative}`; field `.input100{display:block; width:100%; height:100%;
    padding:0 40px 0 3px; border-bottom:1px solid rgba(255,255,255,0.1);
    background-color:rgba(255,255,255, 0.0)}`, focus → `rgba(255,255,255,0.05)`;
    placeholder `.placeholder0::placeholder{color:#999999}` (vendor-prefixed
    rules only — there is no standard `::placeholder` selector); submit lane
    `.size4{width:35px; height:100%}` + `.ab-t-r` + `.flex-c-m` holding
    `i.zmdi-long-arrow-right` with `.fs-16{font-size:16px}` + `.cl1{color:#999}` +
    `.trans-04`; hover `.hov1:hover i{color:#fff}`
  - **Missing rules in the source sheet:** `.s2-txt1` (applied to the field in
    the markup) and `.m-lr-auto-lg` (applied to the field wrapper) have NO rule
    in `css/style.css` — the field therefore renders in the `body,html` Arial
    15px/`#666666` stack in the browser's default field-text colour. The
    recreation uses Montserrat 400 15px `#fff` instead (documented delta: the
    typed value must be legible over the photograph).
  - Validation: `.alert-validate::before{content:attr(data-validate);
    position:absolute; max-width:70%; background-color:#fff; border:1px solid
    #c80000; border-radius:0px; padding:4px 25px 4px 10px; top:50%;
    transform:translateY(-50%); right:32px; pointer-events:none; font-family:
    Montserrat-Regular; color:#c80000; font-size:14px; line-height:1.4;
    text-align:left; visibility:hidden; opacity:0; transition:opacity 0.4s}`,
    revealed by `:hover:before` and unconditionally at ≤992px;
    `.alert-validate::after{content:"\f071"; font-family:FontAwesome;
    display:block; position:absolute; color:#c80000; font-size:14px; top:50%;
    transform:translateY(-50%); right:38px}`
  - Responsive: `@media (max-width:992px){.respon1{font-size:160px}}`;
    `@media (max-width:768px){.respon1{font-size:120px}}`;
    `@media (max-width:576px){.p-lr-15-sm{padding-left:15px; padding-right:15px}
    .respon1{font-size:80px}}`
  - Base type: `html{box-sizing:border-box; font-family:sans-serif;
    line-height:1.15}` / `body{margin:0; font-family:-apple-system,
    BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-size:1rem; font-weight:400; line-height:1.5; color:#212529;
    background-color:#fff}` overridden by the later `body,html{font-family:Arial,
    sans-serif; font-size:15px; color:#666666; height:100%;
    background-color:#fff}` — all VISIBLE type is Montserrat (400/600) and
    Playlist Script
  - Fonts (source, self-hosted woff2): Playlist Script (heading), Montserrat
    Regular + SemiBold (everything else). **Playlist Script is NOT available on
    Google Fonts** — the CSS API answers **HTTP 400** for
    `family=Playlist+Script` (verified 2026-10-11), so the recreation loads
    **Kaushan Script** (the closest brush script; `Yellowtail` is the documented
    alternative) together with Montserrat `400;600` via `<link>` in
    `index.html`; icons are `lucide-react` (no icon font).
- **Content map (source DOM, verified in the live render):**
  `div.simpleslide100` → 4 × `div.simpleslide100-item.bg-img1`
  (`bg01` shown, `bg02`–`bg04` `display:none`), then
  `div.flex-col-c-sb.size1.overlay1.p-l-75.p-r-75.p-t-20.p-b-40.p-lr-15-sm`:
  1. `div.w-full.flex-w.flex-sb-m` — ← TOP BAR
     - `div.wrappic1.m-r-30.m-t-10.m-b-10 > a > img[src=images/icons/logo.png]`
     - `div.flex-w.cd100.p-t-15.p-b-15.p-r-36` — ← COUNTDOWN, four
       `div.flex-w.flex-b.m-r-22.m-t-8.m-b-8` units of
       `span.l1-txt1.wsize1.days|hours|minutes|seconds` +
       `span.m1-txt1.p-b-2` (labels "Days" / "Hr" / "Min" / "Sec")
     - `div.m-t-10.m-b-10 > a.size2.s1-txt1.flex-c-m.how-btn1.trans-04` —
       "Sign Up"
  2. `div.flex-col-c-m.p-l-15.p-r-15.p-t-80.p-b-90` — ← CENTRE
     - `h3.l1-txt2.txt-center.p-b-55.respon1` — "Coming Soon"
     - `div > button.how-btn-play1.flex-c-m > i.zmdi.zmdi-play` (inlined
       `svg.cl-icon`, path `M0 341 235 192 0 43Z`)
  3. `div.flex-sb-m.flex-w.w-full` — ← BOTTOM BAR
     - `div.flex-w.flex-c-m.m-t-10.m-b-10` with three
       `a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-3.m-t-3` wrapping
       `i.fa.fa-facebook` / `i.fa.fa-twitter` / `i.fa.fa-youtube-play`
     - `form.contact100-form.validate-form.m-t-10.m-b-10 >
       div.wrap-input100.validate-input.m-lr-auto-lg[data-validate="Email is
       required: ex@abc.xyz"] > input.s2-txt1.placeholder0.input100.trans-04
       [type=text][name=email][placeholder="Email Address"] +
       button.flex-c-m.ab-t-r.size4.s1-txt1.hov1 > i.zmdi.zmdi-long-arrow-right
       .fs-16.cl1.trans-04`
- **Measured geometry (live render at 1440×900):** column 1440×900
  (`scrollHeight === clientHeight`, no scroll), padding `20px 75px 40px`;
  top bar 1290×76 at (75,20); mark box x=75 w=684 (`flex-grow:1`) with the
  127×24 image inside; countdown group x=789 w=436, padding
  `15px 36px 15px 0`; CTA 140×50 at x=1225; centre 803×483 at (319,202) with
  padding `80px 15px 90px`; headline 180px (box 773×253); play disc 60×60;
  socials row 126×42 at (75,804); form 280×50 at (1085,800).
- **Behaviour (`js/snippet.js`, 94 lines, framework-free, three features):**
  1. **E-mail validation** on every `.validate-form`: a trimmed value must match
     `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` when the field is `type=email` or
     `name=email`, otherwise must be non-empty; every failing field's
     `.validate-input` ancestor (or parent) gets `.alert-validate` and the submit
     is prevented, and a `focus` handler removes the class. No success state, no
     request, no navigation.
  2. **Countdown** on `.cd100` (`kind:"spans"`, cfg `{Y:0,M:0,D:35,h:19,m:0,s:0}`):
     the literal target `new Date(0, -1, 35, 19, 0, 0)` is always in the past, so
     the script falls back to **`Date.now() + 35 days + 19 hours`** — the page
     always opens at `35 Days 19 Hr` and ticks down. Days print unpadded;
     hours/minutes/seconds use `('0'+n).slice(-2)`; the 1000 ms interval clears
     itself when the remaining time reaches zero. The markup's static
     `35 / 17 / 50 / 39` is only the pre-script paint.
  3. **Background cross-fade** on `.simpleslide100`: items get
     `transition:opacity 1000ms`, item 0 at `opacity:1`/shown and the rest
     `display:none`; unless `prefers-reduced-motion: reduce` matches, a `7000ms`
     `setInterval` shows the next item at `opacity:0`, flips it to `1` inside a
     `requestAnimationFrame`, fades the current one out and hides it after the
     `1000ms` transition, wrapping `now = (now + 1) % items.length` over the FOUR
     items.
  4. The play button has **no handler at all** — it is a `<button>` with no
     listener.
- **Palette:** white type/CTA border/CTA hover fill/play disc
  (`#fff`); muted glyphs and arrow (`#999`); placeholder (`#999999`); play glyph
  (`#333`); hover label colour (`#555`); hairline borders (`rgba(255,255,255,0.1)`
  on the field underline and the social rings); focus wash
  (`rgba(255,255,255,0.05)`); validation red (`#c80000`); page scrim
  (`rgba(0,0,0,0.5)`); slideshow backdrop (`#000`); body text (`#666666`). There
  is NO brand accent colour, NO gradient, NO dark/light toggle.

### Sibling comparison (why this slug is not a copy of its neighbours)

Within the `## Uncategorized (15)` `comingsoon_01..15` group, `comingsoon_13` is
distinctive in EIGHT ways — do not blur it with `01`–`12`:

- **Only slug with a brush-SCRIPT display face**, and the family's LARGEST
  heading: Playlist Script at **180px**. Siblings use Poppins (01–03, 06–09),
  Ubuntu (05), Montserrat-Light (04) or Playfair Display (08, 10, 11) and top out
  at 120px (`awaited`, `oncoming`).
- **Only slug with a circular PLAY button** (`how-btn-play1` appears in no other
  family spec) — a 60×60 white disc (`::after` at `z-index:-1`) with a `#333`
  triangle, hover `opacity:.6` + `scale(1.2)`.
- **Only slug whose countdown sits in the TOP bar**, in the same wrapped row as
  the mark and the CTA. Every sibling places its `cd100` countdown in the centre
  block (bordered or centred rows).
- **Only slug with a bare UNDERLINE e-mail field** (280×50, border-bottom only,
  transparent → white 5% focus wash, radius 0, 3px left inset, 40px right inset).
  Siblings use rounded wells: `#e6e6e6` boxes radius 5 (`03`), white pills radius
  25 (`04`, `05`, `06`), `#f5f5f5` centred pill (`06`), translucent-bordered 500px
  pills (`08`), `rgba(255,255,255,0.1)` 500×60 box (`10`) or a flat white 500×80
  shadow slab (`12`).
- **Only slug with a TRANSPARENT, 1px-white-bordered CTA pill** (hover fills
  `#fff` with `#555` text). Every sibling fills its pill at rest — `#846add`
  (`02`), `#3a5dff` (`04`), `#00b26f` (`06`), `#57b846` (`07`), `#fff`
  (`09`, `10`, `11`).
- **Only slug whose socials are thin TRANSLUCENT rings** (`1px solid
  rgba(255,255,255,0.1)`, transparent fill, 18px `#999` glyphs, hover → white
  fill + `#555`). Siblings use `2px solid #fff` squares (`06`), white-filled discs
  (`07`), `1px solid #fff` transparent circles (`09`, `11`), `#ccc` filled discs
  (`12`) or ringless 28px glyphs (`10`).
- **A FIXED full-viewport backdrop of FOUR `1900×900` photographs** over `#000`
  (`position:fixed`, `z-index:0`). `comingsoon_12`'s slideshow is absolute inside
  a 50% photo panel with three `950×900` images; this slug has no panel at all.
- **A four-unit countdown with `min-width:46px` digits + 18px labels** in a
  `15px 36px 15px 0` group, i.e. the header trio (mark · countdown · pill) is
  this slug's signature; no sibling has it.

## Design tokens

| Token                | Value                                                                                                                                                                                                                                     | Where                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| slideshow backdrop   | `#000` on the fixed layer (`.simpleslide100{position:fixed; z-index:0; background-color:#000}`)                                                                                                                                             | behind everything                              |
| page scrim           | `rgba(0,0,0,0.5)` — ONE full-size `z-index:-1` layer on the content column, so the wash sits above the fixed slideshow and below all content (no gradient, no second overlay)                                                              | content column (only overlay)                  |
| page photographs     | FOUR source images, all `1900×900`: `bg01.jpg` (deep-green foliage, mean `rgb(40,45,35)` — the slide the screenshot caught), `bg02.jpg` (dark forest, mean `rgb(4,38,24)`), `bg03.jpg` (cool blue-grey nebula/interior, mean `rgb(47,63,81)`), `bg04.jpg` (light grey, mean `rgb(199,200,204)`); recreation uses `https://picsum.photos/seed/pending-bg1/1900/900` … `...-bg4/1900/900` | fixed slideshow |
| slideshow timing     | item `transition:opacity 1000ms`; `7000ms` interval; `requestAnimationFrame` swap; hides the old item after `1000ms`; wraps the FOUR items; short-circuits on `prefers-reduced-motion: reduce`                                              | fixed slideshow                                |
| page column          | `width:100%`, `min-height:100vh`, `display:flex; flex-direction:column; justify-content:space-between; align-items:center`, `position:relative; z-index:1`, `padding:20px 75px 40px` → 15px side padding at ≤576px                          | the three-band layout                          |
| top bar              | `width:100%`, wrapping row, `justify-content:space-between`, `align-items:center` (`.w-full.flex-w.flex-sb-m`)                                                                                                                              | band 1                                         |
| brand mark wrapper   | `display:block; flex-grow:1`, `margin:10px 30px 10px 0` — the growth is what pushes the countdown and the CTA to the right edge                                                                                                             | top bar (left)                                 |
| brand mark           | source file is a 127×24 all-white wordmark PNG (every opaque pixel `rgb(255,255,255)`); recreation renders its OWN wordmark, `max-width:100%`                                                                                              | top bar (left)                                 |
| countdown group      | `display:flex; flex-wrap:wrap`, `padding:15px 36px 15px 0`                                                                                                                                                                                 | top bar (right of the mark)                    |
| countdown unit       | `display:flex; align-items:flex-end`, `margin:8px 22px 8px 0`                                                                                                                                                                              | countdown group (×4)                           |
| countdown digits     | Montserrat 400, 30px, `line-height:1`, `#fff`, `min-width:46px` (stops the ticking row jittering); days printed UNPADDED, h/m/s zero-padded                                                                                                 | countdown unit (×4)                            |
| countdown labels     | Montserrat 400, 18px, `line-height:1`, `#fff`, `padding-bottom:2px` (baseline alignment comes from the unit's `align-items:flex-end`); text `Days` / `Hr` / `Min` / `Sec`                                                                  | countdown unit (×4)                            |
| countdown target     | `now + 35 days + 19 hours` from load (the source's `new Date(0,-1,35,19,0,0)` target is always past), 1000 ms interval, stops at zero                                                                                                      | countdown behaviour                            |
| CTA pill             | `min-width:140px`, `height:50px`, `padding:0 15px`, transparent fill, `border:1px solid #fff`, `border-radius:25px`, Montserrat 600 14px/1.2 `#fff`, uppercase, `transition:all .4s`                                                        | top bar (right edge)                           |
| CTA hover            | fill → `#fff`, label colour → `#555`                                                                                                                                                                                                       | over `.4s`                                     |
| centre band          | `display:flex; flex-direction:column; align-items:center; justify-content:center`, `padding:80px 15px 90px`                                                                                                                                 | band 2                                         |
| heading              | Playlist Script **180px**/1.1 `#fff`, sentence case, centred, 55px below; **160px** at ≤992px, **120px** at ≤768px, **80px** at ≤576px; no `letter-spacing`, never uppercase; recreation face = **Kaushan Script** (Playlist Script is absent from Google Fonts — CSS API HTTP 400)                     | centre band                                    |
| play button          | 60×60, `border-radius:50%`, transparent button, `color:#333`, `font-size:20px`, `position:relative; z-index:1`, with a full-size WHITE `::after` disc at `z-index:-1` and `transition:all .4s`                                             | centre band, under the heading                 |
| play hover           | `::after` → `opacity:.6` and `transform:scale(1.2)`; the button has NO handler in the source (decorative) — the recreation adds an `aria-label` and honours `prefers-reduced-motion`                                                       | over `.4s`                                     |
| bottom bar           | `width:100%`, wrapping row, `justify-content:space-between`, `align-items:center` (`.flex-sb-m.flex-w.w-full`); socials left, e-mail right                                                                                                  | band 3                                         |
| social circle        | 36×36, `border-radius:50%`, `border:1px solid rgba(255,255,255,0.1)`, transparent fill, 18px `#999` glyph, `margin:3px`, `transition:all .4s` — a translucent RING, not a disc                                                              | bottom bar (left, ×3)                          |
| social glyphs        | Facebook, Twitter/X and YouTube — source inlines `fa-facebook` / `fa-twitter` / `fa-youtube-play`; the recreation uses `lucide-react` equivalents and NEVER copies the paths                                                                  | bottom bar (left)                              |
| social hover         | fill → `#fff`, glyph colour → `#555`                                                                                                                                                                                                       | over `.4s`                                     |
| e-mail well          | `280px × 50px`, `max-width:100%`, `position:relative`, transparent wrapper with 10px block margins; the form is `max-width:100%`                                                                                                           | bottom bar (right)                             |
| e-mail field         | `display:block; width:100%; height:100%`, `padding:0 40px 0 3px`, `border-bottom:1px solid rgba(255,255,255,0.1)`, `border-radius:0`, NO side/top border, `background:rgba(255,255,255,0)` → `rgba(255,255,255,0.05)` on focus, `transition:all .4s`; placeholder `#999999` | bottom bar (right)                             |
| field text           | source: `.s2-txt1` is referenced in the markup but ABSENT from the sheet, so the text rendered Arial 15px in the browser default colour; recreation: Montserrat 400 15px `#fff` (documented delta for legibility over the photograph)         | e-mail field                                   |
| submit lane          | absolute `top:0; right:0`, `35px × 100%`, no fill/border/radius, holding a 16px `#999` arrow that turns `#fff` on hover (`.hov1:hover i`); the field's 40px right inset exists for this lane; needs an `aria-label` (the source has none)   | e-mail well (right end)                        |
| validation bubble    | white box, `1px solid #c80000`, `border-radius:0px`, `padding:4px 25px 4px 10px`, `max-width:70%`, centred via `top:50%; translateY(-50%)`, `right:32px`, Montserrat 400 14px/1.4 `#c80000`, `pointer-events:none`, `opacity 0 → 1` over `.4s`; message from `data-validate` = "Email is required: ex@abc.xyz" | invalid field                                  |
| validation glyph     | 14px `#c80000` warning glyph at `right:38px`, vertically centred (source: FontAwesome `\f071`)                                                                                                                                              | invalid field                                  |
| validation visibility| hidden until hover above 992px; ALWAYS visible at ≤992px; cleared on `focus`; `preventDefault()` on invalid submit; no network request                                                                                                      | invalid field                                  |
| radii                | `0px` on the field and the bubble, `25px` on the CTA pill, `50%` on the social circles and the play disc                                                                                                                                   | shapes                                         |
| accent colour        | NONE — no brand colour token; the palette is white type over photography, plus the `#c80000` validation red                                                                                                                                 | palette                                        |
| fonts                | Playlist Script 180px (heading) · Montserrat 400 30px/18px (countdown) · Montserrat 600 14px uppercase (pill + lane) · Montserrat 400 14px (bubble)                                                                                        | typography                                     |
| Google Fonts mapping | `Montserrat:wght@400;600` + `Kaushan+Script` (the source's Playlist Script is NOT on Google Fonts — HTTP 400; `Yellowtail` is the documented alternative); no icon font is needed (lucide-react)                                          | `index.html` `<link>`                          |
| base type            | `body,html{font-family:Arial,sans-serif; font-size:15px; color:#666666; height:100%; background-color:#fff}` (all VISIBLE type is Montserrat / the brush script)                                                                            | typography                                     |
| transitions          | `all .4s` (field, pill, arrow, social rings, play disc), `opacity .4s` (bubble), `opacity 1000ms` / `7000ms` interval (slideshow)                                                                                                          | interaction                                    |
| attribution          | a small low-emphasis line linking `https://www.componentdock.com/` ("Component Dock"), pinned absolutely so the three-band `space-between` geometry is untouched                                                                            | ADDED vs the reference (the source has no footer credit) |

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_13/index.html` | HTTP 200 · 5,976 B · title `Coming Soon 13` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_13/css/style.css?v=20641a4e` | HTTP 200 · 12,391 B · sha256 `8f1a5511b6ee` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×12,
`#999999`×6, `#c80000`×3, `#555555`×2, `#212529`×1, `#007bff`×1,
`#0056b3`×1, `#666666`×1, `#000000`×1, `#333333`×1.

**Low-chroma values the sheet actually uses** — `#999999`, `#555555`,
`#212529`, `#666666`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Single-viewport shell (fixed slideshow + one scrim + a three-band column)

One `100vh` column that distributes exactly three bands with
`justify-content:space-between`, over a viewport-fixed photographic slideshow and
under a single 50% scrim.

#### Scenario: Page renders as one non-scrolling screen

- **Given** the page loads at desktop width (1440×900)
- **When** the layout renders
- **Then** a single flex COLUMN occupies `width:100%; min-height:100vh` with
  `justify-content:space-between` and `align-items:center`, padding
  `20px 75px 40px`, `position:relative; z-index:1`
- **And** the document does NOT scroll (`scrollHeight === clientHeight`)
- **And** its three children are the top bar, the centre band and the bottom bar,
  in that order
- **And** there is NO navbar, NO footer band, NO second section, NO modal and no
  navigation links
- **And** there is NO brand accent colour, NO gradient and NO dark/light toggle

#### Scenario: Exactly one 50% scrim above a viewport-fixed slideshow

- **Given** the page renders
- **When** the layering is inspected
- **Then** a `position:fixed` `100% × 100%` slideshow layer sits at `z-index:0`
  over a `#000` backdrop and holds FOUR `cover`-sized, centred, no-repeat
  photographs (recreation placeholders
  `https://picsum.photos/seed/pending-bg1/1900/900` … `...-bg4/1900/900`)
- **And** ONE `rgba(0,0,0,0.5)` full-size layer sits ABOVE that slideshow
  (`z-index:-1` inside the `z-index:1` column) and BELOW every piece of content
- **And** there is NO gradient layer and NO second overlay
- **And** the slideshow is `position:fixed` (viewport-sized), NOT absolute inside
  a panel and NOT a `background-image` on the column

#### Scenario: Photographs cross-fade every seven seconds

- **Given** the slideshow layer holds FOUR photographs
- **When** the effect runs
- **Then** every 7000 ms the current photograph fades out and the next fades in
  over a 1000 ms opacity transition, the old one hidden once the transition
  completes, wrapping back to the first after the fourth
- **And** when `prefers-reduced-motion: reduce` matches, the slideshow stays on
  the first photograph and never cycles
- **And** the interval is cleared on unmount

### Feature: Top bar (mark · countdown · CTA pill)

A wrapping `space-between` row on the column's top edge: the mark's growing box
pushes a four-unit countdown and a bordered-transparent pill to the right.

#### Scenario: Mark occupies the free space on the left

- **Given** the top bar renders
- **When** its left end is inspected
- **Then** a `w-full` wrapping row with `justify-content:space-between` and
  `align-items:center` holds a mark wrapper with `flex-grow:1` (margins
  `10px 30px 10px 0`) at its left
- **And** the mark rendered there is the app's OWN wordmark with
  `max-width:100%`
- **And** it is never the source's 127×24 all-white PNG file or its glyphs
- **And** the wrapper's growth is what pushes the countdown and the CTA to the
  right edge

#### Scenario: Countdown sits in the top bar

- **Given** the top bar renders
- **When** the middle-right of the row is inspected
- **Then** a wrapping flex group with `padding:15px 36px 15px 0` holds FOUR units
- **And** each unit is a row with `align-items:flex-end` and
  `margin:8px 22px 8px 0` holding a white Montserrat 400 30px/1 digit span with
  `min-width:46px` and a white Montserrat 400 18px/1 label with
  `padding-bottom:2px`
- **And** the four labels read `Days`, `Hr`, `Min` and `Sec` in that order
- **And** the countdown is NOT in the centre band and is NOT centred

#### Scenario: Sign Up pill is transparent with a 1px white border

- **Given** the top bar renders
- **When** its right end is inspected
- **Then** a `min-width:140px`, `height:50px`, `padding:0 15px` control sits flush
  with the column's right padding, centred on both axes
- **And** at rest it has a TRANSPARENT fill, a `1px solid #fff` border and
  `border-radius:25px`, with Montserrat 600 14px/1.2 uppercase white text
- **And** hovering it fills it `#fff` and switches the label to `#555` over
  `all .4s`
- **And** it is never filled at rest
- **And** the top row wraps at narrow widths instead of overflowing (the pill
  drops to its own line)

### Feature: Centre band (brush-script headline + circular play button)

The middle band is a both-axes-centred column holding only the headline and the
play button.

#### Scenario: Headline is the family's largest script type

- **Given** the centre band renders
- **When** the heading is inspected
- **Then** it is an `h3` in a brush script face at **180px** with `line-height:1.1`
  and white colour, sentence case, centred, with 55px of space below it
- **And** it is `160px` at ≤992px, `120px` at ≤768px and `80px` at ≤576px
- **And** it is never uppercased and never gains a `letter-spacing` declaration
- **And** the recreation loads **Kaushan Script** from Google Fonts for it, because
  the source's Playlist Script face is not published there (the CSS API answers
  HTTP 400) — the substitution is documented in the PR
- **And** the source's copy is never reproduced verbatim (the recreation writes its
  own headline of the same kind)

#### Scenario: Play button is a white disc with a dark triangle

- **Given** the centre band renders
- **When** the control under the heading is inspected
- **Then** it is a `60px × 60px` button with `border-radius:50%`, a transparent
  fill, `color:#333` and `position:relative; z-index:1`
- **And** a full-size WHITE `::after` disc at `z-index:-1` with
  `border-radius:50%` and `transition:all .4s` provides the visible disc, and a
  `#333` triangle glyph sits on it (recreation: the lucide `Play` icon)
- **And** hovering drops the disc to `opacity:.6` and scales it `1.2`
- **And** the button is decorative — the source wires no video, modal or navigation
  to it, and the recreation must not invent one
- **And** it carries an `aria-label` (the source has none) and honours
  `prefers-reduced-motion`

### Feature: Bottom bar (translucent social rings + underline e-mail field)

One wrapping `space-between` row: three thin-ringed social circles on the left, the
e-mail capture on the right.

#### Scenario: Socials are thin translucent rings, left aligned

- **Given** the bottom bar renders
- **When** its left end is inspected
- **Then** three `36px × 36px` `border-radius:50%` links sit in a wrapping row
  with `align-items:center`, each with a `1px solid rgba(255,255,255,0.1)` border,
  a TRANSPARENT fill, an 18px `#999` glyph (Facebook, Twitter, YouTube from
  `lucide-react`), `margin:3px` and `transition:all .4s`
- **And** hovering a ring fills it `#fff` and switches the glyph to `#555`
- **And** they are NOT filled discs and do NOT carry a solid white border

#### Scenario: E-mail field is a bare underline

- **Given** the bottom bar renders
- **When** the e-mail capture on the right is inspected
- **Then** the form is `max-width:100%` with 10px block margins and wraps a
  `280px × 50px` (max-width 100%) relatively positioned, transparent container
- **And** the field fills it, is `display:block`, has `padding:0 40px 0 3px`,
  `border-radius:0`, NO top or side border, `border-bottom:1px solid
  rgba(255,255,255,0.1)` and a transparent background
- **And** focusing it paints `rgba(255,255,255,0.05)` behind the text over `all .4s`
- **And** its text is Montserrat 400 15px white (the documented delta: the source's
  `.s2-txt1` rule is missing from its sheet, which left Arial-black text over the
  photograph) and its placeholder — `Email Address` in the source, the recreation
  uses its own equivalent label — is `#999999`
- **And** the field is validated as an e-mail even though the source field is
  `type="text"`

#### Scenario: Arrow submit lane sits at the field's right end

- **Given** the e-mail field renders
- **When** its right end is inspected
- **Then** an absolutely positioned `top:0; right:0` button of `35px × 100%`
  covers the lane with NO fill, border or radius, centring a 16px `#999` arrow
- **And** hovering it turns the arrow `#fff` over `all .4s`
- **And** the field's `padding-right` of 40px clears that lane
- **And** the button carries an `aria-label` (the source has none)
- **And** submitting valid input never navigates away or issues a network request

#### Scenario: Invalid submit shows the reference validation bubble

- **Given** the field is empty or is not a valid e-mail
  (`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`)
- **When** the form is submitted
- **Then** the submit is prevented and the field's container gains the error state
- **And** a bubble appears over the field: white background, `1px solid #c80000`
  border, `border-radius:0`, `padding:4px 25px 4px 10px`, max-width 70%,
  vertically centred on the field, pinned 32px from the right edge, in Montserrat
  400 14px/1.4 `#c80000`
- **And** the bubble text is the field's own requirement message (the source reads
  "Email is required: ex@abc.xyz" — the recreation writes its own equivalent)
- **And** a 14px `#c80000` warning glyph sits 38px from the right edge, vertically
  centred
- **And** the bubble fades in over `.4s`
- **And** it is revealed on hover above 992px and is ALWAYS visible at ≤992px
- **And** focusing the field clears the error state
- **And** the bubble does not intercept pointer events

### Feature: Countdown behaviour

#### Scenario: Countdown opens at 35 days 19 hours and ticks down

- **Given** the page loads
- **When** the countdown effect starts
- **Then** the remaining time is initialised to **now + 35 days + 19 hours** (the
  source's literal target date is always in the past, so this fallback is what the
  reference always shows)
- **And** it re-renders once every 1000 ms with days printed UNPADDED and hours,
  minutes and seconds zero-padded to two digits
- **And** the digits keep a `min-width:46px` so the row never jitters
- **And** the interval stops when the remaining time reaches zero and is cleared on
  unmount

### Feature: Component Dock attribution

#### Scenario: Footer credit links Component Dock

- **Given** any template in the monorepo must credit the marketplace
- **When** the page renders
- **Then** a small low-emphasis attribution line links
  `https://www.componentdock.com/` branded "Component Dock"
- **And** it is pinned absolutely inside the content column so the three-band
  `space-between` geometry is untouched
- **And** this line is the ONLY addition versus the reference (the source page has
  no footer credit)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/pending/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/pending/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] App exists at `apps/pending`, package `@free-react-templates/pending`,
      `homepage` `https://pending.free.componentdock.com`, `public/CNAME`
      `pending.free.componentdock.com`; `npm install` run at the repo root and the
      lockfile registers the workspace
      (`grep -c "free-react-templates/pending" package-lock.json` ≥ 1)
- [ ] `vite.config.ts` keeps `injectUiSource()`
- [ ] `npm run spec:validate` / `openspec validate template-pending --type spec`
      passes
- [ ] `scripts/verify-app.sh pending` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build
- [ ] Shell: one `min-h-screen w-full relative z-[1] flex flex-col
      justify-between items-center pt-[20px] px-[75px] pb-[40px]
      max-[576px]:px-[15px]` column with exactly three bands; no scroll at
      1440×900
- [ ] Backdrop: ONE `fixed inset-0 z-0 bg-black` layer holding FOUR
      `bg-cover bg-center bg-no-repeat` items
      (`picsum.photos/seed/pending-bg1..bg4/1900/900`), first shown and the rest
      hidden; cross-fade `1000ms` every `7000ms` wrapping all four; frozen on the
      first photo under `prefers-reduced-motion: reduce`; `clearInterval` on
      unmount
- [ ] Overlay: exactly ONE `bg-black/50` layer above the slideshow and below the
      content (`z-[-1]` inside the `z-[1]` column); no gradient, no second scrim
- [ ] Top bar: `w-full flex flex-wrap justify-between items-center`; mark wrapper
      `flex-1 mr-[30px] my-[10px]` with the app's own wordmark (`max-w-full`,
      never the source PNG); countdown group `flex flex-wrap pt-[15px] pb-[15px]
      pr-[36px]`; CTA `min-w-[140px] h-[50px] px-[15px] border border-white
      rounded-[25px] bg-transparent uppercase text-[14px] hover:bg-white
      hover:text-[#555] transition-all duration-[400ms]`
- [ ] Countdown: four units `flex items-end mr-[22px] my-[8px]`, digits Montserrat
      400 `text-[30px] leading-none text-white min-w-[46px]`, labels Montserrat 400
      `text-[18px] leading-none text-white pb-[2px]` reading `Days` / `Hr` / `Min` /
      `Sec`; initial value `now + 35d 19h`; days unpadded, h/m/s zero-padded;
      1000 ms interval; cleared on unmount and at zero
- [ ] Centre: `flex flex-col items-center justify-center px-[15px] pt-[80px]
      pb-[90px]` holding only the heading and the play button
- [ ] Heading: brush script (Kaushan Script) `text-[180px] leading-[1.1] text-white
      text-center pb-[55px]`, sentence case, no `letter-spacing`; `text-[160px]`
      ≤992px, `text-[120px]` ≤768px, `text-[80px]` ≤576px
- [ ] Play button: 60×60 `rounded-full` transparent button with a full-size white
      `after:` disc at `z-[-1]` and a `#333` lucide `Play` glyph;
      `hover:after:opacity-60 hover:after:scale-125 transition-all duration-[400ms]`;
      `aria-label` present; no video/modal wiring
- [ ] Bottom bar: `w-full flex flex-wrap justify-between items-center`; socials
      `flex flex-wrap items-center my-[10px]` with three `size-9` (36×36)
      `rounded-full border border-white/10 bg-transparent text-[#999]` links
      (`m-[3px]`, `transition-all duration-[400ms]`, hover `bg-white text-[#555]`);
      e-mail form `max-w-full my-[10px]` wrapping `w-[280px] max-w-full h-[50px]
      relative`
- [ ] Field: `block h-full w-full pt-0 pr-[40px] pb-0 pl-[3px] rounded-none
      border-b border-b-white/10 bg-transparent focus:bg-white/5
      transition-all duration-[400ms]`, Montserrat 400 `text-[15px] text-white`,
      `placeholder:text-[#999999]`, validated as an e-mail
- [ ] Arrow lane: absolute `top-0 right-0 h-full w-[35px] flex items-center
      justify-center` button, no fill/border/radius, 16px `#999` arrow turning
      `#fff` on hover, `aria-label` present
- [ ] Validation: bubble = white, `border border-[#c80000] rounded-none`,
      `py-[4px] pl-[10px] pr-[25px]`, `max-w-[70%]`, vertically centred,
      `right-[32px]`, Montserrat 400 14px/1.4 `#c80000`, `pointer-events-none`,
      opacity transition `400ms`; warning glyph 14px `#c80000` at `right-[38px]`;
      hidden-until-hover above 992px, always visible at ≤992px; cleared on focus;
      invalid submit prevented
- [ ] Validation acceptance test: empty field and `foo@bar` both show the error
      state and block submit; `name@example.com` submits without error state
- [ ] Attribution: one small low-emphasis Component Dock line linked to
      `https://www.componentdock.com/`, absolutely positioned so the three bands
      keep their `space-between` geometry
- [ ] Fonts: Montserrat `400;600` + Kaushan Script via Google Fonts `<link>` (the
      Playlist Script substitution is recorded in the PR); icons are `lucide-react`
      only
- [x] Zero `colorlib` / source-demo-title / `comingsoon_13` references anywhere in
      `apps/pending` (comments included)
- [ ] No copied assets: no source photographs, no 127×24 `logo.png`, no favicon, no
      woff2 files, no `css/style.css` (including its `all: revert` guard and
      Bootstrap reboot), no inlined zmdi/fa SVG paths
- [ ] Visual check against the reference screenshot (`coming-soon-13.jpg`,
      1200×972): full-bleed dark photograph, white wordmark top-left, four
      countdown units top-right with the thin-bordered pill at the far right, huge
      white brush-script headline centred, white play disc below it, three
      thin-ringed social circles bottom-left, grey placeholder on a faint underline
      with a grey arrow bottom-right
- [ ] Responsive check: heading 180 → 160 (≤992) → 120 (≤768) → 80 (≤576); column
      side padding 15px at ≤576px; the top bar wraps instead of overflowing
- [ ] PR description includes: source template (ColorLib Coming Soon V13), preview
      URL (404 → source-zip fallback), the design tokens used (`#000` backdrop,
      `rgba(0,0,0,0.5)` scrim, `rgba(255,255,255,0.1)` hairlines,
      `rgba(255,255,255,0.05)` focus wash, `#fff` type/pill border, `#999` /
      `#999999` greys, `#333` play glyph, `#555` hover text, `#c80000` validation,
      Montserrat 400/600 + brush script, the 180/160/120/80px headline scale, the
      `25px` pill, `50%` circles, the `1000ms` / `7000ms` slideshow), and what
      differs (new name, picsum placeholders, own wordmark/strings, Kaushan Script
      instead of the non-Google-Fonts Playlist Script, the white field-text delta,
      lucide icons, added `aria-label`s, Component Dock attribution line)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
