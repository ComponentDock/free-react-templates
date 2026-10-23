# Template: Looming (Coming Soon / Under Construction)

## Purpose

Looming is a single-screen coming-soon page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Coming Soon
V12" template (source slug `comingsoon_12` — the family's only **SPLIT-SCREEN**
coming-soon page: a `width:100%; min-height:100vh` wrapping flex row split into
an opaque WHITE 50% left panel and a 50% right panel that is a full-height
three-photograph cross-fading slideshow of warm `950×900` interior/furniture
shots, covered by a single `rgba(0,0,0,0.5)` page scrim that is invisible on the
left because that panel paints its own `#fff`).

The left panel is a second flex column with `justify-content:space-between` at
`padding:37px 80px 50px 65px`, so THREE bands land on its top, middle and bottom
edge: a small `51×44` near-black logo mark pinned top-left; a centred hero block
(`padding:80px 0 90px`) holding a **90px `PlayfairDisplay-BlackItalic`** `#333`
"Coming Soon" heading (weight 900, italic — the heaviest serif in the family),
beneath it a 24px `Poppins-Regular` `#999` "Follow us for update now!" line, and
beneath that a **500×80 WHITE e-mail well with NO border and NO radius**, only a
soft `0 10px 15px rgba(0,0,0,0.1)` shadow (0.2 on focus), whose `Email Address`
placeholder is `#999999` and whose submit affordance is an absolutely positioned
`90×80` lane at the well's top-right corner holding a 30px `#333` arrow glyph
that slides `translateX(10px)` on hover — there is no coloured button disc
anywhere; and a bottom band of THREE `36×36` **filled `#ccc` circles** with 22px
white glyphs (Facebook / Twitter / YouTube) that flip to a `#333` fill on hover,
left-aligned rather than centred.

Validation is this slug's own flavour: an invalid `Email Address` submit adds an
`alert-validate` class whose bubble is a WHITE box with a `1px solid #c80000`
border, `border-radius:0`, `padding:4px 25px 4px 10px`, red
`Poppins-Medium 14px/1.4` text reading the field's `data-validate` string
(`Email is required: ex@abc.xyz`), vertically centred on the field and pinned
`right:82px`, with a 14px red warning glyph `right:88px` beside it; the bubble is
revealed on hover above 992px and shown always at ≤992px, and any focus on the
field clears it. The heading drops to 60px at ≤576px. The split holds 50/50 until
1200px, becomes **60/40** at ≤1200px, then STACKS at ≤992px (white panel full
width with 15px side padding, photo panel full width at a fixed `height:500px`).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_12/
  (HTTP 200, 109,403 B, `text/html; charset=UTF-8`, verified 2026-10-11; page
  title "Coming Soon V12 - Free Split-Screen Website Template 2026 - Colorlib",
  description "A full-blown free website template for under construction pages
  with a split-screen design, slideshow and social media icons.")
- **Preview:** https://preview.colorlib.com/theme/comingsoon_12/ returns
  **HTTP 404**, and the `https://preview.colorlib.com/theme/bootstrap/comingsoon_12/`
  variant is **HTTP 404** as well (both verified 2026-10-11 — the family-wide
  live-preview gap), so the live preview DOM is unreachable for this slug — **re-probed 2026-10-23: the demo serves** (measured record below).
  Fallback (documented per `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_12.zip`
  (HTTP 200, 554,988 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs12/out/comingsoon_12/` — `index.html` (4,703 B), `css/style.css`
  (703 lines), `js/snippet.js` (2,053 B), `README.md`, `images/bg01.jpg`
  (950×900, 95,997 B), `images/bg02.jpg` (950×900, 130,039 B), `images/bg03.jpg`
  (950×900, 151,513 B), `images/icons/logo.png` (51×44 RGBA, 1,558 B),
  `images/icons/favicon.ico` (32,038 B), and four self-hosted faces
  `fonts/PlayfairDisplay-BlackItalic.woff2` (75,548 B),
  `fonts/Poppins-Regular.woff2` (48,416 B), `fonts/Poppins-Medium.woff2`
  (48,444 B), `fonts/fontawesome-webfont-subset.woff2` (576 B). That zip (the
  real rendered template's own files) is the DOM/CSS/behaviour reference,
  together with the TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-12.jpg
  (HTTP 200, 28,010 B, served as `image/avif` — NOT JPEG for this slug —
  1200×972, reviewed visually 2026-10-11)
- **New name:** `looming` (apps/looming, `@free-react-templates/looming`) — the
  source demo title "Coming Soon 12", its `bg01.jpg`…`bg03.jpg` photographs, its
  `logo.png` mark file, its inlined fa/zmdi SVG icons, its "Coming Soon" /
  "Follow us for update now!" / "Email Address" / "Email is required: ex@abc.xyz"
  strings and its favicon are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/comingsoon_12/index.html` — HTTP 200, 4,773 B, title `Coming Soon 12`.
>
> Sheet: `https://colorlib.com/etc/cs/comingsoon_12/css/style.css?v=b18dee51` (11,285 B).
> Faces it actually declares: `Poppins-Medium`, `PlayfairDisplay-BlackItalic`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

The reference is two columns in ONE `100vh` row, not a scrolling site. Its
skeleton is a single flex row:

1. `div.flex-w.flex-str.size1.overlay1` — the PAGE ROW —
   `.flex-w{display:flex; flex-wrap:wrap}` + `.flex-str{align-items:stretch}` +
   `.size1{width:100%; min-height:100vh}` + `.overlay1{position:relative;
z-index:1}` with the wash as a pseudo-element
   `.overlay1::after{content:""; display:block; position:absolute; z-index:-1;
width:100%; height:100%; top:0; left:0; background:rgba(0,0,0,0.5)}`. The scrim
   is a single layer behind the two panels, so it only ever darkens the PHOTO
   panel — the left panel paints opaque white over it. There is NO gradient and
   no second overlay.
2. Inside that row, TWO children in document order — the white content panel
   FIRST, the photo panel SECOND.

FIRST the WHITE CONTENT PANEL
`div.flex-w.flex-col-sb.wsize1.bg0.p-l-65.p-t-37.p-b-50.p-r-80.respon1` —
`.flex-col-sb{display:flex; flex-direction:column; justify-content:space-between}`
+ `.wsize1{width:50%}` + `.bg0{background-color:#fff}` +
`padding:37px 80px 50px 65px`. The `space-between` column is that panel's whole
layout: logo top, hero centred in the leftover space, socials on the bottom edge.
Three children:

- `div.wrappic1 > a > img[src=images/icons/logo.png]` — the BRAND MARK,
  `.wrappic1{display:block}` + `.wrappic1 img{max-width:100%}`. The source file
  is a 51×44 RGBA mark (average `rgb(21,21,21)` — near-black), pinned top-left of
  the panel.
- `div.w-full.flex-c-m.p-t-80.p-b-90 > div.wsize2` — the CENTRED HERO BLOCK,
  `.w-full{width:100%}`, `.flex-c-m{display:flex; justify-content:center;
align-items:center}` (which centres the inner block on BOTH axes inside the
  `space-between` leftover space), `padding:80px 0 90px`, `.wsize2{max-width:100%}`.
  Three children:
  - `h3.l1-txt1.p-b-34.respon3` reading "Coming Soon" —
    `.l1-txt1{font-family:PlayfairDisplay-BlackItalic; font-size:90px;
line-height:1.1; color:#333}` with 34px below it and `.respon3{font-size:60px}`
    at ≤576px. This is a **weight-900 ITALIC serif in `#333`**: the heaviest,
    most decorative heading in the whole coming-soon family (siblings use
    hairline/regular sans or italic/regular serif faces — none use Black
    Italic). The face's own italic slant is the signature; there is **no
    `letter-spacing`** declaration and the heading is **sentence case**, not
    uppercase.
  - `p.m2-txt1.p-b-46` reading "Follow us for update now!" —
    `.m2-txt1{font-family:Poppins-Regular; font-size:24px; line-height:1.2;
color:#999}` with 46px below it. A mid-grey geometric sans line, smaller than
    the heading by ~3.75×.
  - `form.contact100-form.validate-form.m-t-10.m-b-10` — the E-MAIL CAPTURE —
    `.contact100-form{max-width:100%}` + 10px block margins, holding ONE
    `div.wrap-input100.validate-input[data-validate="Email is required:
ex@abc.xyz"]` — `.wrap-input100{width:500px; max-width:100%; position:relative;
background-color:transparent; height:80px}` + `.validate-input{position:
relative}` — with TWO children:
    - `input.s2-txt1.placeholder0.input100.trans-04[type=text][name=email]` with
      `placeholder="Email Address"` — `.s2-txt1{font-family:Poppins-Medium;
font-size:15px; color:#333; line-height:1.2}`, `.placeholder0::placeholder{
color:#999999}`, `.input100{display:block; width:100%; height:100%;
padding:0 90px 0 35px; background-color:#fff; box-shadow:0 10px 15px 0px
rgba(0,0,0,0.1)}` (focus → the same shadow at `0.2`), `.trans-04{transition:
all 0.4s}`. Note the input is a bare `type="text"` field (NOT `type=email`) and
      it is a **flat white slab: `border-radius:0`, no border, shadow only** —
      the family's *lightest* well, with a 35px left inset and a 90px right
      inset reserved for the submit lane.
    - `button.flex-c-m.ab-t-r.size2.hov1` holding
      `i.zmdi.zmdi-long-arrow-right.fs-30.cl1.trans-04` (an inlined `svg.cl-icon`
      arrow path) — `.ab-t-r{position:absolute; right:0; top:0}`, `.size2{width:
90px; height:80px}`, `.flex-c-m` (centres the glyph), `.fs-30{font-size:30px}`,
      `.cl1{color:#333}`, `.hov1:hover i{transform:translateX(10px)}`. The submit
      is therefore an invisible `90×80` L A N E at the well's top-right corner —
      no fill, no radius, no border — holding a 30px `#333` right-arrow that
      nudges 10px right on hover. There is no text label and no icon-only
      accessibility label in the source; the recreation MUST add an
      `aria-label`.
- `div.flex-w` — the SOCIAL ROW — a wrapping row with THREE
  `a.size3.flex-c-m.how-social.trans-04.m-r-15.m-b-10` — `.size3{width:36px;
height:36px}`, `.flex-c-m`, `.how-social{color:#fff; font-size:22px;
background-color:#ccc; border-radius:50%}` + `.trans-04` + 15px right and 10px
  bottom margins, hover `.how-social:hover{background-color:#333; color:#fff}`.
  These are **FILLED `#ccc` discs** (no border — the inverse of the
  white-outlined circles in other family slugs) holding 22px white glyphs:
  Facebook, Twitter and YouTube (`i.fa.fa-facebook`, `i.fa.fa-twitter`,
  `i.fa.fa-youtube-play`, each an inlined FontAwesome `svg.cl-icon` path). The
  row is NOT centred: it is a plain wrap row inside the panel, so the three discs
  sit LEFT-ALIGNED on the panel's bottom edge (still indented by the panel's 65px
  left padding).

SECOND the PHOTO PANEL
`div.wsize1.simpleslide100-parent.respon2` — `.wsize1{width:50%}` +
`.simpleslide100-parent{position:relative; z-index:1}` — holding one
`div.simpleslide100` with THREE `div.simpleslide100-item.bg-img1` children:
`.simpleslide100{display:block; position:absolute; z-index:-1; width:100%;
height:100%; top:0; left:0}`,
`.simpleslide100-item{display:block; position:absolute; width:100%; height:100%;
top:0; left:0}`,
`.bg-img1{background-position:center; background-repeat:no-repeat;
background-size:cover}` with inline
`style="background-image:url('images/bg01.jpg')"` (item 1, the only one shown)
and `...bg02.jpg...;display:none` / `...bg03.jpg...;display:none` for items 2–3.
The three source photographs are warm, dark, interior-desk shots (mean colours
`rgb(82,76,72)`, `rgb(43,31,26)`, `rgb(115,132,144)` — the first, seen in the
screenshot, is a white laptop and white designer chair on a dark walnut desk).
The layer is absolutely positioned with `z-index:-1` INSIDE the relatively
positioned photo panel, so it fills the panel's own box (not the viewport),
which is why the white panel is never covered.

What is NOT here: no navbar, no footer band, no countdown, no scrolling section,
no modal, no navigation links. The page is the white panel (mark / heading /
sub-line / e-mail well / socials) and the photo panel.

The script (`js/snippet.js`) is framework-free and carries exactly TWO
behaviours:

1. **E-mail validation** on every `.validate-form`: on submit, each field in
   `.validate-input` is checked with `fieldOk()` — a trimmed value must match
   `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` when the field is `type=email` or
   `name=email`, otherwise must be non-empty; each failing field's
   `.validate-input` ancestor (or parent) gets `.alert-validate` added and the
   submit is prevented (`event.preventDefault()`), and a `focus` handler removes
   `.alert-validate` from that field. There is no success state, no request — the
   button never navigates.
2. **Background cross-fade slideshow** on every `.simpleslide100` with ≥2 items:
   each item gets `transition:opacity 1000ms` with item 0 at `opacity:1`/shown
   and the rest `display:none`; unless `prefers-reduced-motion: reduce` matches,
   a `7000ms` `setInterval` shows the next item at `opacity:0`, flips it to `1`
   inside a `requestAnimationFrame`, fades the current one out and hides it after
   the `1000ms` transition, wrapping `now = (now + 1) % items.length` (three
   items here).

The palette is white chrome over warm photography: `#fff` panel, `#333` heading
and icons, `#999` sub-line and placeholder, `#999999` placeholder token, `#ccc`
social discs whose hover is `#333`, `#c80000` validation red, and a single
`rgba(0,0,0,0.5)` scrim that only the photos sit behind. There is NO brand
accent colour, no gradient, and no dark/light toggle.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V12" (source:
  https://colorlib.com/wp/template/comingsoon_12/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3043; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/looming` absent, TEMPLATES.md line 3043 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_12/ →
  **HTTP 404**, and the `theme/bootstrap/comingsoon_12/` variant → **HTTP 404**
  (both verified 2026-10-11), so the live preview DOM could not be parsed.
  Fallback used (documented per `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_12.zip` (HTTP 200,
  554,988 B, `application/zip`), extracted to `/tmp/cs12/out/comingsoon_12/`.
  Reference artifacts: `/tmp/cs12/cs12.zip`,
  `/tmp/cs12/out/comingsoon_12/`, `/tmp/cs12/src12.html` (the ColorLib page),
  `/tmp/cs12/shot.jpg` (raw `image/avif`) + `/tmp/cs12/shot.png` (converted
  1200×972, used for the visual review). Research date: 2026-10-11. The source
  HTML/CSS/JS is authoritative for section structure, copy, tokens and
  behaviour.
- **Screenshot:** `coming-soon-12.jpg` (served as `image/avif`, converted and
  reviewed visually 2026-10-11) confirms the layout exactly: a WHITE left half
  and a photographic right half of equal width. Top-left of the white half is a
  small near-black italic-serif mark reading "A."; vertically centred is the
  large heavy ITALIC serif headline "Coming Soon" in near-black; under it a
  mid-grey sans line "Follow us for update now!"; under that a flat white e-mail
  box with the grey placeholder "Email Address" and a dark right-arrow at its
  right end; and at the bottom-left three small light-grey filled CIRCLES with
  white Facebook, Twitter and YouTube glyphs. The right half is a single warm
  photograph — a white laptop and a white designer chair seen from above on a
  dark walnut desk, cropped `cover` — visibly darkened by the 50% scrim. No
  navbar, no countdown, no footer band, no visible form chrome beyond the well.
  (The screenshot's top strip is the marketing page's browser chrome — not part
  of the template.)
- **Stylesheets in the reference:** a single `css/style.css` (703 lines, no
  framework, no jQuery, no runtime CDN — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in, then
  re-declares a minimal Bootstrap-derived reboot) with three self-hosted
  `@font-face` blocks (PlayfairDisplay-BlackItalic, Poppins-Regular,
  Poppins-Medium) plus a 576 B FontAwesome subset for the validation glyph (the
  fa/zmdi arrow and social glyphs are inlined SVG `path`s in the markup). The
  recreation uses Tailwind 4 + React state; the revert guard, the reboot and all
  source class names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Page row: `.flex-w{display:flex; flex-wrap:wrap}` +
    `.flex-str{align-items:stretch}` + `.size1{width:100%; min-height:100vh}` +
    `.overlay1{position:relative; z-index:1}`
  - Scrim (the ONLY overlay): `.overlay1::after{… background:rgba(0,0,0,0.5)}`,
    full-size, `z-index:-1` — behind the panels, so it darkens only the photo
    half
  - White panel: `.flex-col-sb{display:flex; flex-direction:column;
justify-content:space-between}` + `.wsize1{width:50%}` +

    `.bg0{background-color:#fff}` + `.p-t-37{padding-top:37px}` +
    `.p-b-50{padding-bottom:50px}` + `.p-l-65{padding-left:65px}` +
    `.p-r-80{padding-right:80px}`

  - Mark: `.wrappic1{display:block}` + `.wrappic1 img{max-width:100%}`
  - Hero block: `.w-full{width:100%}` + `.flex-c-m{display:flex;
justify-content:center; align-items:center}` + `.p-t-80{padding-top:80px}` +
    `.p-b-90{padding-bottom:90px}`; inner `.wsize2{max-width:100%}`
  - Heading: `.l1-txt1{PlayfairDisplay-BlackItalic 90px; line-height:1.1;
color:#333}` + `.p-b-34{padding-bottom:34px}`; `.respon3` (≤576px) → 60px
  - Sub-line: `.m2-txt1{Poppins-Regular 24px; line-height:1.2; color:#999}` +
    `.p-b-46{padding-bottom:46px}`
  - Form: `.contact100-form{max-width:100%}` + `.m-t-10.m-b-10`;
    `.wrap-input100{width:500px; max-width:100%; position:relative;
background-color:transparent; height:80px}` + `.validate-input{position:
relative}`

  - E-mail field: `.input100{display:block; width:100%; height:100%;
padding:0 90px 0 35px; background-color:#fff; box-shadow:0 10px 15px 0px
rgba(0,0,0,0.1)}`, focus → `0.2`; `.s2-txt1{Poppins-Medium 15px;
color:#333; line-height:1.2}`; `.placeholder0::placeholder{color:#999999}`;
    `.trans-04{transition:all 0.4s}`
  - Submit lane: `.ab-t-r{position:absolute; right:0; top:0}` +
    `.size2{width:90px; height:80px}` + `.flex-c-m` + `.fs-30{font-size:30px}` +
    `.cl1{color:#333}`; hover `.hov1:hover i{transform:translateX(10px)}`
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
position:absolute; max-width:70%; background-color:#fff; border:1px solid
#c80000; border-radius:0px; padding:4px 25px 4px 10px; top:50%;
transform:translateY(-50%); right:82px; pointer-events:none;
font-family:Poppins-Medium; color:#c80000; font-size:14px; line-height:1.4;
text-align:left; visibility:hidden; opacity:0; transition:opacity 0.4s}`,
    revealed by `.alert-validate::before{visibility:visible; opacity:1}` when
    hovered and unconditionally at ≤992px; `.alert-validate::after{content:
"\f071"; font-family:FontAwesome; position:absolute; color:#c80000;
font-size:14px; top:50%; transform:translateY(-50%); right:88px}`
  - Social row: `.flex-w`; disc `.size3{width:36px; height:36px}` +
    `.flex-c-m` + `.how-social{color:#fff; font-size:22px; background-color:#ccc;
border-radius:50%}` + `.trans-04` + `.m-r-15.m-b-10`; hover
    `.how-social:hover{background-color:#333; color:#fff}`
  - Photo panel: `.simpleslide100-parent{position:relative; z-index:1}` +
    `.simpleslide100{display:block; position:absolute; z-index:-1; width:100%;
height:100%; top:0; left:0}` + `.simpleslide100-item{display:block;
position:absolute; width:100%; height:100%; top:0; left:0}` +
    `.bg-img1{background-position:center; background-repeat:no-repeat;
background-size:cover}`

  - Responsive: `@media (max-width:1200px){.respon1{width:60%}
.respon2{width:40%}}`; `@media (max-width:992px){.respon1{width:100%;
padding-left:15px; padding-right:15px} .respon2{width:100%; height:500px}}`;
    `@media (max-width:576px){.respon3{font-size:60px}}`
  - Base type: `html{box-sizing:border-box; font-family:sans-serif;
line-height:1.15}` / `body{margin:0; font-family:-apple-system,BlinkMacSystemFont,
"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; font-size:1rem;
font-weight:400; line-height:1.5; color:#212529}` — all VISIBLE type is
    Playfair Display Black Italic / Poppins (Regular + Medium)
  - Fonts (source, self-hosted woff2): PlayfairDisplay-BlackItalic (heading),
    Poppins-Regular (sub-line), Poppins-Medium (field text + bubble) — the
    recreation loads Playfair Display **900 italic** + Poppins **400 / 500** from
    Google Fonts via `<link>` in `index.html`; icons are `lucide-react` (no icon
    font).
- **Content map (source DOM):**
  `div.flex-w.flex-str.size1.overlay1`:
  1. `div.flex-w.flex-col-sb.wsize1.bg0.p-l-65.p-t-37.p-b-50.p-r-80.respon1` — ← WHITE PANEL
     - `div.wrappic1 > a > img[src=images/icons/logo.png]` (51×44 mark)
     - `div.w-full.flex-c-m.p-t-80.p-b-90 > div.wsize2` — ← CENTRED HERO
       - `h3.l1-txt1.p-b-34.respon3` — "Coming Soon"
       - `p.m2-txt1.p-b-46` — "Follow us for update now!"
       - `form.contact100-form.validate-form.m-t-10.m-b-10` — ← E-MAIL WELL
         - `div.wrap-input100.validate-input[data-validate="Email is required:
           ex@abc.xyz"]`
           - `input.s2-txt1.placeholder0.input100.trans-04[name=email]`
             `[placeholder="Email Address"]`
           - `button.flex-c-m.ab-t-r.size2.hov1 > i.zmdi-long-arrow-right`
     - `div.flex-w` — ← SOCIAL ROW
       - three `a.size3.flex-c-m.how-social.trans-04.m-r-15.m-b-10` wrapping
         `i.fa.fa-facebook` / `i.fa.fa-twitter` / `i.fa.fa-youtube-play`
  2. `div.wsize1.simpleslide100-parent.respon2` — ← PHOTO PANEL
     - `div.simpleslide100 > div.simpleslide100-item.bg-img1` ×3 (bg01 shown,
       bg02/bg03 `display:none`)
- **Behaviour (`js/snippet.js`, two framework-free features):** e-mail
  validation as described above (submit-time class toggle + `preventDefault`, no
  network), and the three-item background cross-fade (1000 ms opacity,
  7000 ms interval, `requestAnimationFrame` swap, `prefers-reduced-motion`
  short-circuit). Both are reimplemented as React state/effects with cleanup.

### Sibling comparison (why this slug is not a copy of its neighbours)

Within the `## Uncategorized (15)` `comingsoon_01..15` group, `comingsoon_12` is
distinctive in SEVEN ways — do not blur it with `01`–`11`:

- **It is the only SPLIT-SCREEN slug.** Every other entry in the family is one
  full-bleed photographic screen behind a scrim with (at most) a centred column;
  this one divides the viewport into two equal halves and puts OPAQUE WHITE over
  the left half. The scrim therefore reads as "photo vignette", not "page dim".
- **The heading is a weight-900 ITALIC serif (`PlayfairDisplay-BlackItalic`,
  90px).** It is the heaviest and most decorative face in the family, where
  siblings use hairline/regular sans or plain italic/regular serif cuts. It is
  also **sentence case** (`Coming Soon`), whereas most sibling headings are
  uppercase.
- **A flat white e-mail well with a shadow and NO border/radius** (500×80,
  `box-shadow:0 10px 15px rgba(0,0,0,0.1)` → `0.2` on focus) — the family's
  lightest field treatment; other slugs use dark/bordered or pill wells.
- **An arrow LANE as the submit affordance** (an absolutely positioned `90×80`
  `top:0; right:0` button holding a bare 30px `#333` arrow that slides
  `translateX(10px)` on hover) instead of a filled/bordered button disc or a
  labelled pill.
- **A white validation bubble with `1px solid #c80000`, `border-radius:0`, red
  `Poppins-Medium` text at `right:82px` and a warning glyph at `right:88px`**,
  hover-revealed above 992px and always-on at ≤992px — the only slug in the
  family whose bubble is a bordered white box rather than a tinted/dark chip.
- **Filled grey `#ccc` circular socials** (36×36, `border-radius:50%`, 22px
  white glyph, hover fill `#333`), LEFT-aligned on the panel's bottom edge —
  siblings use centred rows of white-outlined or translucent discs.
- **A 50/60/stacked-width rhythm that is unique in the family:** 50/50 above
  1200px, 60/40 at ≤1200px, and a full STACK at ≤992px where the photo panel
  becomes a fixed `500px`-tall band under the white panel (side padding 15px).
  Siblings have no such two-axis behaviour, and this slug has no countdown at
  all.

## Design tokens

| Token                  | Value                                                                                                                                                                                                                                                    | Where                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| page background        | `#fff` on the content panel (`.bg0`); the page row itself has no background — the photo panel covers the other half                                                                                                                                       | left panel vs right panel                                  |
| page scrim             | `rgba(0,0,0,0.5)` — one full-size `z-index:-1` layer behind both panels, so it darkens only the photograph (no gradient)                                                                                                                                  | page row (only overlay)                                    |
| page photographs       | source `images/bg01.jpg` (950×900, white laptop + white designer chair on a dark walnut desk, mean `rgb(82,76,72)` — the slide the screenshot caught), `bg02.jpg` (950×900, warm dark interior, mean `rgb(43,31,26)`), `bg03.jpg` (950×900, cooler grey-blue interior, mean `rgb(115,132,144)`); recreation uses `https://picsum.photos/seed/looming-bg1/950/900` … `...-bg3/950/900` | photo panel slideshow                                      |
| slideshow              | absolute `100%×100%` inside the relative photo panel, `z-index:-1`; item `transition:opacity 1000ms`; `7000ms` interval; wraps THREE photos; honours `prefers-reduced-motion`                                                                             | right panel                                                |
| split ratio            | `width:50%`**/50%** (`min-height:100vh`, `align-items:stretch`) → **60% / 40%** at ≤1200px → **stacked** at ≤992px (content 100% with 15px side padding, photo 100% at `height:500px`)                                                                     | page row                                                   |
| white panel            | `background:#fff`, `display:flex; flex-direction:column; justify-content:space-between`, `padding:37px 80px 50px 65px` (top 37 / right 80 / bottom 50 / left 65)                                                                                             | left panel (the layout mechanism)                          |
| brand mark             | source 51×44 RGBA mark, mean `rgb(21,21,21)`; container `display:block`, `img{max-width:100%}`; recreation renders its OWN name/mark (source file and glyph never copied)                                                                                   | panel band 1 (top-left)                                    |
| hero block             | `display:flex; justify-content:center; align-items:center`, `width:100%`, `padding:80px 0 90px`; inner wrapper `max-width:100%`                                                                                                                            | panel band 2 (middle of the space-between column)          |
| heading                | `PlayfairDisplay-BlackItalic` (Playfair Display **900 italic**) 90px/1.1 `#333`, sentence case, 34px below; **60px** at ≤576px; no `letter-spacing`                                                                                                        | hero block                                                 |
| sub-line               | `Poppins-Regular` 24px/1.2 `#999`, 46px below                                                                                                                                                                                                             | hero block                                                 |
| e-mail well            | `500×80`, `max-width:100%`, `position:relative`, transparent wrapper; field `display:block; width:100%; height:100%`, `padding:0 90px 0 35px`, `background:#fff`, `border-radius:0`, NO border, `box-shadow:0 10px 15px 0px rgba(0,0,0,0.1)` → `rgba(0,0,0,0.2)` on focus                                        | hero block (form)                                          |
| field text             | `Poppins-Medium` 15px/1.2 `#333`; placeholder `#999999`; source field is `type="text"` (not `type=email`) but is validated as an e-mail                                                                                                                     | e-mail well                                                |
| submit lane            | absolute `top:0; right:0`, `90×80`, no fill/border/radius, holding a 30px `#333` arrow; `transition:all .4s`; hover `translateX(10px)`; needs an `aria-label` in the recreation (the source has none)                                                        | e-mail well (right end)                                    |
| form margins           | `margin:10px 0` on the form, `max-width:100%`                                                                                                                                                                                                             | hero block                                                 |
| validation bubble      | white box, `1px solid #c80000`, `border-radius:0px`, `padding:4px 25px 4px 10px`, `max-width:70%`, centred via `top:50%; translateY(-50%)`, `right:82px`, `Poppins-Medium` 14px/1.4 `#c80000`, `pointer-events:none`, `opacity 0 → 1` over `.4s`; message from `data-validate` = "Email is required: ex@abc.xyz" | invalid field                                              |
| validation glyph       | 14px `#c80000` warning glyph at `right:88px`, vertically centred (source: FontAwesome `\f071`)                                                                                                                                                             | invalid field                                              |
| validation visibility  | hidden until hover above 992px; ALWAYS visible at ≤992px; cleared on `focus`; `preventDefault()` on invalid submit                                                                                                                                        | invalid field                                              |
| social row             | wrapping row, left-aligned on the panel's bottom edge (NO `justify-content:center`), 15px right / 10px bottom margin per disc                                                                                                                              | panel band 3 (bottom edge)                                 |
| social disc            | `36×36`, `background:#ccc`, `border-radius:50%`, NO border, 22px white glyph, `transition:all .4s`                                                                                                                                                        | social row (×3)                                            |
| social glyphs          | Facebook, Twitter/X and YouTube — source inlines `fa-facebook` / `fa-twitter` / `fa-youtube-play` (and a `zmdi-long-arrow-right` for the submit); the recreation uses `lucide-react` equivalents and NEVER copies the paths                                                    | social row + submit                                        |
| social hover           | fill → solid `#333`, glyph stays `#fff`                                                                                                                                                                                                                   | over `.4s`                                                 |
| radii                  | `0px` everywhere except the `50%` social circles (the e-mail well and submit lane are square; there is no pill in this slug)                                                                                                                              | shapes                                                     |
| accent colour          | NONE — no brand colour token; the page's only colour is the warm photography through the 50% scrim plus the `#c80000` validation red                                                                                                                       | palette                                                    |
| fonts                  | Playfair Display 900 italic 90px (heading) · Poppins 400 24px (sub-line) · Poppins 500 15px (field) and 14px (bubble)                                                                                                                                      | typography                                                 |
| Google Fonts mapping   | `Playfair+Display:ital,wght@1,900` + `Poppins:wght@400;500` — the source faces are PlayfairDisplay-BlackItalic, Poppins-Regular, Poppins-Medium; no icon font is needed (lucide-react)                                                                      | `index.html` `<link>`                                      |
| base type              | `body{font-family:-apple-system,…,"Helvetica Neue",Arial,sans-serif; font-size:1rem; font-weight:400; line-height:1.5; color:#212529}` (all VISIBLE type is Playfair Display / Poppins)                                                                   | typography                                                 |
| transitions            | `all .4s` (field, submit arrow, socials), `opacity .4s` (bubble), `opacity 1000ms` (slideshow), `7000ms` interval                                                                                                                                           | interaction                                                |
| attribution            | a small centred line under the page content linking `https://www.componentdock.com/` ("Component Dock")                                                                                                                                                     | ADDED vs the reference (the source has no footer credit)   |

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_12/index.html` | HTTP 200 · 4,773 B · title `Coming Soon 12` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_12/css/style.css?v=b18dee51` | HTTP 200 · 11,285 B · sha256 `df71fec32270` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×7,
`#999999`×5, `#333333`×4, `#c80000`×3, `#212529`×1, `#007bff`×1,
`#0056b3`×1, `#666666`×1, `#cccccc`×1.

**Low-chroma values the sheet actually uses** — `#999999`, `#333333`,
`#212529`, `#666666`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Split-screen shell (white panel + photo panel in one 100vh row)

One full-viewport wrapping flex row stretched to its tallest child, holding an
opaque white content panel and a photographic panel side by side, under a single
50% scrim.

#### Scenario: Page renders as a two-half split screen

- **Given** the page loads at desktop width (>1200px)
- **When** the layout renders
- **Then** a single flex row occupies `width:100%; min-height:100vh` with
  `align-items:stretch`, and its two children each take `width:50%`
- **And** the FIRST child (left) is a WHITE (`#fff`) panel and the SECOND child
  (right) is the photograph panel
- **And** ONE full-size overlay sits behind both panels: `rgba(0,0,0,0.5)` —
  visible as a darkening of the photograph only, since the left panel paints its
  own white background
- **And** there is NO gradient layer, NO brand accent colour and NO dark/light
  toggle
- **And** there is NO navbar, NO footer band, NO countdown and NO scrolling
  section on the page

#### Scenario: The split responds at the two breakpoints

- **Given** the viewport narrows
- **When** the width is ≤1200px
- **Then** the white panel grows to `60%` and the photo panel shrinks to `40%`
- **And** when the width is ≤992px the two halves STACK: the white panel becomes
  full width with 15px left/right padding and the photo panel becomes a full-width
  band with a fixed `500px` height below it
- **And** at ≤576px the heading drops from 90px to 60px

### Feature: White panel bands (mark, hero, socials)

The white panel is itself a `justify-content:space-between` column at
`padding:37px 80px 50px 65px`, pinning the mark to the top, the hero block to the
middle leftover space and the socials to the bottom edge.

#### Scenario: Mark is pinned top-left

- **Given** the white panel renders
- **When** the top of the panel is inspected
- **Then** the app's OWN brand mark (a small dark wordmark, e.g. a short
  letterform or word) is anchored at the panel's top-left, inside the 37px top
  and 65px left padding
- **And** the mark is never the source's 51×44 PNG file or its glyph

#### Scenario: Hero block is centred in the leftover space

- **Given** the white panel renders
- **When** the middle band is inspected
- **Then** a `width:100%` flex row centred on both axes wraps a `max-width:100%`
  block with `padding:80px 0 90px`
- **And** inside it the heading (Playfair Display **900 italic** 90px/1.1 `#333`,
  sentence case, 34px below), the sub-line (Poppins 400 24px/1.2 `#999`, 46px
  below) and the e-mail form follow in that order
- **And** the source's copy is never reproduced verbatim — the recreation writes
  its own headline, sub-line and field label of the same kind
- **And** the heading never gains a `letter-spacing` declaration and is never
  uppercased

#### Scenario: Socials are left-aligned filled circles on the bottom edge

- **Given** the white panel renders
- **When** the bottom band is inspected
- **Then** THREE 36×36 circular buttons sit on the panel's bottom edge, left
  aligned (no centring), each `background:#ccc`, `border-radius:50%`, no border,
  with a 22px white glyph (Facebook, Twitter, YouTube from `lucide-react`), 15px
  right and 10px bottom margins, and `transition:all .4s`
- **And** hovering a disc flips its fill to solid `#333` while the glyph stays
  white

### Feature: E-mail capture (flat white well with an arrow submit lane)

A 500×80 flat white well with a soft shadow and no border or radius, an
`Email Address` placeholder, and an invisible `90×80` submit lane at its
top-right holding an arrow that slides right on hover.

#### Scenario: Well renders the reference treatment

- **Given** the hero block renders
- **When** the form is inspected
- **Then** the form is `max-width:100%` with 10px block margins and wraps a
  `500px × 80px` (max-width 100%) relatively positioned, transparent container
- **And** the field fills it, is `display:block`, has `padding:0 90px 0 35px`,
  `background:#fff`, `border-radius:0`, NO border, and
  `box-shadow:0 10px 15px 0px rgba(0,0,0,0.1)`
- **And** the field's text is Poppins 500 15px/1.2 `#333` and its placeholder
  (`Email Address` in the source — the recreation uses its own equivalent label)
  is `#999999`
- **And** focusing the field deepens the shadow to `rgba(0,0,0,0.2)` over `.4s`

#### Scenario: Submit lane sits inside the well

- **Given** the e-mail well renders
- **When** its right end is inspected
- **Then** an absolutely positioned `top:0; right:0` button of `90×80` covers the
  right lane with NO fill, border or radius, centring a 30px `#333` arrow glyph
- **And** hovering it translates the glyph `10px` to the right over `all .4s`
- **And** the button carries an `aria-label` (the source has none — the
  recreation adds it for accessibility)
- **And** submitting valid input never navigates away or issues a network request

#### Scenario: Invalid submit shows the reference validation bubble

- **Given** the field is empty or is not a valid e-mail
  (`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`)
- **When** the form is submitted
- **Then** the submit is prevented and the field's container gains the error
  state
- **And** a bubble appears over the field: white background, `1px solid #c80000`
  border, `border-radius:0`, `padding:4px 25px 4px 10px`, max-width 70%,
  vertically centred on the field, pinned 82px from the right edge, in Poppins
  500 14px/1.4 `#c80000`
- **And** the bubble text is the field's own requirement message (the source
  reads "Email is required: ex@abc.xyz" — the recreation writes its own
  equivalent)
- **And** a 14px `#c80000` warning glyph sits 88px from the right edge, vertically
  centred
- **And** the bubble fades in over `.4s`
- **And** it is revealed on hover above 992px and is ALWAYS visible at ≤992px
- **And** focusing the field clears the error state
- **And** the bubble does not intercept pointer events

### Feature: Right-panel photograph slideshow under the scrim

The photo panel is a relatively positioned box filling the right half, with an
absolutely positioned `z-index:-1` cross-fading layer of three photographs inside
it.

#### Scenario: Photo panel fills its half of the split

- **Given** the page renders at desktop width
- **When** the right half is inspected
- **Then** it is a relatively positioned box of `width:50%` containing an
  absolutely positioned `100% × 100%` layer at `z-index:-1`
- **And** the layer holds THREE `cover`-sized, centred, no-repeat photographs
  (recreation placeholders
  `https://picsum.photos/seed/looming-bg1/950/900` … `...-bg3/950/900`)
- **And** the first photograph is shown and the other two are hidden
- **And** the layer is not `position:fixed` and does not extend under the white
  panel

#### Scenario: Photographs cross-fade every seven seconds

- **Given** the slideshow layer holds THREE photographs
- **When** the effect runs
- **Then** every 7000 ms the current photograph fades out and the next fades in
  over a 1000 ms opacity transition, the old one hidden once the transition
  completes, wrapping back to the first after the third
- **And** when `prefers-reduced-motion: reduce` matches, the slideshow stays on
  the first photograph and never cycles
- **And** the interval is cleared on unmount

### Feature: Component Dock attribution

#### Scenario: Footer credit links Component Dock

- **Given** any template in the monorepo must credit the marketplace
- **When** the page renders
- **Then** a small attribution line links `https://www.componentdock.com/`
  branded "Component Dock"
- **And** this line is the ONLY addition versus the reference (the source page has
  no footer credit)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/looming/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/looming/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] App exists at `apps/looming`, package `@free-react-templates/looming`,
      `homepage` `https://looming.free.componentdock.com`, `public/CNAME`
      `looming.free.componentdock.com`; `npm install` run at the repo root and the
      lockfile registers the workspace
      (`grep -c "free-react-templates/looming" package-lock.json` ≥ 1)
- [ ] `vite.config.ts` keeps `injectUiSource()`
- [ ] `npm run spec:validate` / `openspec validate template-looming --type spec`
      passes
- [ ] `scripts/verify-app.sh looming` passes: typecheck + lint + knip + fallow +
      vitest at 100% coverage + build
- [ ] Shell: one `min-h-screen w-full flex flex-wrap items-stretch` row; left
      child `w-1/2 bg-white` (`max-[1200px]:w-3/5`, `max-[992px]:w-full px-[15px]`),
      right child `w-1/2` (`max-[1200px]:w-2/5`,
      `max-[992px]:w-full h-[500px]`)
- [ ] Overlay: exactly ONE `bg-black/50` layer, positioned behind both panels
      (`z-[-1]`), no gradient, no second scrim
- [ ] White panel: `flex flex-col justify-between` with
      `pt-[37px] pr-[80px] pb-[50px] pl-[65px]`
- [ ] Mark: the app's own dark wordmark at the panel's top-left, `max-w-full`
      (never the source 51×44 PNG or its glyph)
- [ ] Hero: `w-full flex items-center justify-center py-[80px]` wrapping a
      `max-w-full` block
- [ ] Heading: `h3` in Playfair Display **900 italic** 90px/1.1 `#333`,
      sentence case, `pb-[34px]`, `text-[60px]` at ≤576px, no `letter-spacing`
- [ ] Sub-line: Poppins 400 24px/1.2 `#999`, `pb-[46px]`
- [ ] Well: `w-[500px] max-w-full h-[80px] relative`; field `h-full w-full
      pt-0 pr-[90px] pb-0 pl-[35px] bg-white rounded-none border-0
      shadow-[0_10px_15px_rgba(0,0,0,0.1)] focus:shadow-[0_10px_15px_rgba(0,0,0,0.2)]`,
      Poppins 500 15px `#333`, placeholder `#999999`, `transition-all
      duration-[400ms]`
- [ ] Submit: absolute `top-0 right-0 h-[80px] w-[90px]` button, no fill/border,
      30px `#333` lucide arrow, hover `translate-x-[10px]`, `aria-label` present
- [ ] Validation: bubble = white, `border border-[#c80000]`, `rounded-none`,
      `px-[25px] pr-[25px] pl-[10px] py-[4px]`, `max-w-[70%]`, vertically centred,
      `right-[82px]`, Poppins 500 14px/1.4 `#c80000`, `opacity` transition
      `400ms`, `pointer-events-none`; warning glyph 14px `#c80000` at
      `right-[88px]`; hidden-until-hover above 992px, always visible at ≤992px;
      cleared on focus; invalid submit prevented
- [ ] Validation acceptance test: empty field and `foo@bar` both show the error
      state and block submit; `name@example.com` submits without error state
- [ ] Slideshow: absolute `inset-0 z-[-1]` layer inside the right panel, THREE
      `bg-cover bg-center bg-no-repeat` items, first shown, cross-fade `1000ms`
      every `7000ms` wrapping all three, frozen on the first photo under
      `prefers-reduced-motion: reduce`, `clearInterval` on unmount
- [ ] Socials: `flex flex-wrap`, LEFT aligned, three `size-9` (36×36)
      `rounded-full bg-[#ccc]` discs, no border, 22px white lucide glyphs,
      `mr-[15px] mb-[10px]`, `transition-all duration-[400ms]`, hover
      `bg-[#333]`
- [ ] Fonts: Playfair Display `ital,wght@1,900` + Poppins `400;500` via Google
      Fonts `<link>`; icons are `lucide-react` only
- [x] Zero `colorlib` / source-demo-title / `comingsoon_12` references anywhere in
      `apps/looming` (comments included)
- [ ] No copied assets: no source photographs, no `logo.png`, no favicon, no
      woff2 files, no `css/style.css` (including its `all: revert` guard and
      Bootstrap reboot), no inlined fa/zmdi SVG paths
- [ ] Visual check against the reference screenshot (`coming-soon-12.jpg`,
      1200×972): 50/50 split, white left half with "A."-style mark top-left and
      left-aligned grey circles bottom-left, heavy italic serif headline centred,
      flat white e-mail well with a dark arrow, dark-scrimmed warm photo right
      half
- [ ] Responsive check: 50/50 above 1200px, 60/40 at ≤1200px, stacked at ≤992px
      (white panel full width with 15px side padding, photo band `500px` tall),
      heading 60px at ≤576px
- [ ] PR description includes: source template (ColorLib Coming Soon V12), preview
      URL (404 for both the slug and the bootstrap variant → source-zip
      fallback), the design tokens used (`rgba(0,0,0,0.5)` scrim, `#fff` panel,
      `#333` heading/arrow, `#999`/`#999999` greys, `#ccc` → `#333` discs,
      `#c80000` validation, Playfair Display 900 italic + Poppins 400/500, the
      90px → 60px type scale, `0 10px 15px rgba(0,0,0,0.1)` well shadow, the
      50/60/stacked split rhythm), and what differs (new name, picsum
      placeholders, own mark/strings, lucide icons, added `aria-label`, Component
      Dock attribution line)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
