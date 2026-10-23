# Template: Eve (Coming Soon / Under Construction)

## Purpose

Eve is a single-screen coming-soon / under-construction page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Coming Soon V04" template (source slug `comingsoon_04` — a full-viewport
purple→violet gradient screen holding a white uppercase "Coming Soon" headline,
a light under-construction line, a row of four white rounded-square countdown
tiles, one outlined white pill button that opens a subscribe modal, and a small
footer credit line), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_04/
  (page title "Coming Soon V04 - Free Gradient Website Template 2026",
  HTTP 200, 109,305 B, verified 2026-10-11)
- **Preview:** https://preview.colorlib.com/theme/comingsoon_04/ returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11), so the
  live preview DOM is unreachable for this slug. Fallback (documented per
  `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_04.zip`
  (HTTP 200, 252,580 B, `application/zip`) was downloaded and extracted —
  `index.html` (3,459 B), `css/style.css` (16,469 B), `js/snippet.js`
  (6,189 B), `README.md` (1,260 B), `images/icons/favicon.ico`, and the
  `fonts/Montserrat-Regular|Light|Black|Bold.woff2` set plus a FontAwesome
  subset. That zip (the real rendered template's own files) is the DOM/CSS/JS
  reference, together with the TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-4.jpg
  (served as AVIF, 1200×972; reviewed visually 2026-10-11)
- **New name:** `eve` (apps/eve, `@free-react-templates/eve`) — the source
  demo title "Coming Soon 4" / "Coming Soon V04" and the demo footer credit
  are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

The reference is one full-viewport screen, not a scrolling site. The background
is a single diagonal gradient — `linear-gradient(-45deg, #ac32e4, #7918f2,
#4801ff)` (fallback `#7918f2`) on `.bg-g1` — filling `width:100%;
min-height:100vh`. The screen is a flex COLUMN with `justify-content:
space-between` and `align-items:center`: an empty spacer `<span>` sits above and
a small credit line below, so the middle block (`.flex-col-c.p-t-50.p-b-50`,
flex column, align-centre, 50px vertical padding) is optically centred. Screen
padding is 55px top / 35px bottom / 15px sides (top drops to 35px at ≤576px via
`.respon1`).

The centred block, in order: an h3 "Coming Soon" (Montserrat-Black 50px/1.2
white, uppercase, 10px bottom padding); a light line "Our website is under
construction" (Montserrat-Light 30px/1.2 white, 60px bottom padding); a
centred wrapping countdown row (`pb-82`) of four white rounded-square tiles
(`.how-countdown` = `background-color:#fff; border-radius:18px; margin:0px 18px
25px 18px`; `.size2` = `90px × 90px`), each stacking a Montserrat-Bold 36px/1
`#555555` number over a Montserrat-Regular 12px/1 uppercase `#7d8da6` label
(Days / Hours / Minutes / Seconds); and one outlined pill button "Follow us for
update now!" (`.size3` = `min-width:280px; max-width:100%; min-height:50px`;
`.how-btn` = `padding:10px 20px`, transparent fill, `border:2px solid #fff`,
`border-radius:25px`, `overflow:hidden` with a `::before` gradient overlay —
`linear-gradient(45deg, #ac32e4, #7918f2, #4801ff)`, `opacity:0 → 1` on hover
over `.4s` — and a Montserrat-Bold 15px white label).

Clicking that button opens a modal (`#subscribe`, `.cl-modal.cl-fade`,
Bootstrap-style but framework-free): a white card (`.modal-subscribe.bg0.bor2`
= `background:#fff`, `border-radius:5px`, `.size4` = `width:686px;
max-width:100%`, padding 54px top / 100px bottom / 15px sides) centred by a
`min-height:100%` flex dialog with 50px/15px padding, carrying an absolutely
positioned close button (`.where1` → `top:-40px; right:5px`, 26px glyph,
`rgba(255,255,255,0.5)` → `1` on hover). Inside a `.wsize1` column
(`max-width:390px`, auto margins): a "Subscribe" heading (Montserrat-Black 24px
`#333`, uppercase) whose word is underlined by `.bor1`
(`border-bottom:3px solid #3a5dff`) with 6px bottom padding; a Montserrat-Regular
18px `#555` uppercase line "Follow us for update now!" (40px bottom padding);
a form with two 50px-tall pill inputs (`border:2px solid #e6e6e6`,
`border-radius:25px`, white fill, `padding:0 30px`, Montserrat-Bold 15px `#555`
text, `#999999` placeholders "Name" / "Email") each with a hidden focus ring
(`border:2px solid #3a5dff`, radius 25px, `scaleX(1.1) scaleY(1.2)` → `scale(1)`
over `.4s`); a full-width `#3a5dff` "Get Updates" pill (`.size5` = `width:100%;
height:50px`, radius 25px, hover `#333` with white text); and a small
Montserrat-Regular 12px `#999` line "And don't worry, we hate spam too! You can
unsubcribe at anytime." (`.wsize2` = `max-width:285px`, centred, 20px top
padding).

The palette is a gradient brand plus one blue accent over neutrals: the
three-stop gradient `#ac32e4 → #7918f2 → #4801ff` (page background, button hover
wash), action blue `#3a5dff` (modal primary button, focus ring, underline), tile
white `#fff` with `#555555` numbers and `#7d8da6` labels, modal greys `#333`
/`#555`/`#999`/`#e6e6e6`, credit `#cccccc`, and the `#c80000` validation red.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V04" (source:
  https://colorlib.com/wp/template/comingsoon_04/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3035; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/eve` absent, TEMPLATES.md line 3035 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_04/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11); the
  ColorLib page exposes only the anchor preview
  `https://preview.colorlib.com/#comingsoon_04` and the source zip download.
  Fallback used (documented): official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_04.zip` (HTTP 200,
  252,580 B, `application/zip`), downloaded and extracted to
  `/tmp/ref/cs04/comingsoon_04/`. Reference artifacts: `/tmp/ref/cs04.zip`,
  `/tmp/ref/cs04/`, `/tmp/ref/cs04shot.png` (converted screenshot, 1200×972).
  Research date: 2026-10-11. The source HTML/CSS/JS is authoritative for
  section structure, copy, tokens, and behaviour.
- **Screenshot:** `coming-soon-4.jpg` (reviewed visually 2026-10-11) confirms
  the layout: the whole viewport is a purple→violet diagonal gradient (deeper
  blue-purple upper-left, lighter violet lower-right); centred in the upper
  middle a large white uppercase "COMING SOON"; under it a lighter, thinner
  white line "Our website is under construction"; then a row of four WHITE
  rounded-square tiles reading "35 / DAYS", "17 / HOURS", "59 / MINUTES",
  "57 / SECONDS" (bold dark-grey numbers, tiny uppercase grey labels); then a
  wide gap followed by one white-outlined transparent pill button "Follow us
  for update now!" centred; and at the very bottom a small grey credit line
  ("© 2017 … Designed by …"). No navigation, no imagery, no footer band — the
  gradient alone carries the design.
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN dependency at runtime — the sheet even carries a `:where(html)
  … all: revert` guard so a host page's reboot cannot leak in) with four
  self-hosted `@font-face` blocks (Montserrat-Regular / Light / Black / Bold)
  and one FontAwesome subset face. The recreation uses Tailwind 4 + React
  state; the revert guard, the reboot, and all source class names are NEVER
  copied.
- **Key theme rules (verified in `css/style.css`):**
  - Screen: `.size1{width:100%; min-height:100vh}` on
    `.bg-g1.size1.flex-w.flex-col-c-sb.p-l-15.p-r-15.p-t-55.p-b-35.respon1`
    (flex column, `justify-content:space-between`, `align-items:center`,
    `flex-wrap:wrap`); `.respon1` → `padding-top:35px` at ≤576px
  - Background: `.bg-g1{background:#7918f2; background:linear-gradient(-45deg,
    #ac32e4, #7918f2, #4801ff)}`
  - Middle block: `.flex-col-c.p-t-50.p-b-50` (column, align-centre)
  - Headline: `.l1-txt1{font-family:Montserrat-Black; font-size:50px;
    color:#fff; line-height:1.2; text-transform:uppercase}` with
    `.txt-center.p-b-10`
  - Sub line: `.l1-txt2{font-family:Montserrat-Light; font-size:30px;
    color:#fff; line-height:1.2}` with `.txt-center.p-b-60`
  - Countdown tile: `.how-countdown{background-color:#fff;
    border-radius:18px; margin:0px 18px 25px 18px}` + `.size2{width:90px;
    height:90px}`; row `.flex-w.flex-c.cd100.p-b-82` (wrapping, centred)
  - Countdown number: `.l1-txt3{font-family:Montserrat-Bold; font-size:36px;
    color:#555555; line-height:1}` with `.p-b-9`; label `.s1-txt1{
    font-family:Montserrat-Regular; font-size:12px; color:#7d8da6;
    line-height:1; text-transform:uppercase}`
  - Pill button: `.size3{min-width:280px; max-width:100%; min-height:50px}` +
    `.how-btn{padding:10px 20px; background-color:transparent;
    border-radius:25px; border:2px solid #fff; position:relative; z-index:1;
    overflow:hidden}` + `.how-btn::before{content:""; position:absolute;
    z-index:-1; width:100%; height:100%; top:0; left:0;
    background:linear-gradient(45deg, #ac32e4, #7918f2, #4801ff);
    transition:all .4s; opacity:0}` + `.how-btn:hover:before{opacity:1}`; label
    `.s1-txt2{font-family:Montserrat-Bold; font-size:15px; color:#fff;
    line-height:1.2}`
  - Credit line: `.s1-txt3{font-family:Montserrat-Regular; font-size:12px;
    color:#cccccc; line-height:1.4}` with `.txt-center`
  - Modal shell: `.cl-modal{position:fixed; inset:0; z-index:1050; display:none;
    overflow:hidden; outline:0}` (overridden to `z-index:1160; padding:0;
    overflow-y:auto`) + `.cl-modal-dialog{display:flex; max-width:100%;
    min-height:100%; justify-content:center; align-items:center; margin:0;
    padding:50px 15px}`; `.cl-fade` = `opacity:0; transition:opacity .15s
    linear` → `.cl-show` `opacity:1`; dialog transform
    `translate(0,-25%)` → `translate(0,0)` over `.3s ease-out`; backdrop
    `position:fixed; inset:0; z-index:1040; background:#000` with
    `.cl-modal-backdrop.cl-show{opacity:0}` (the design deliberately shows no
    dark wash); body gets `.cl-modal-open{overflow-y:scroll}` and the scrollbar
    gap is compensated with `padding-right`
  - Modal card: `.modal-subscribe.bg0.bor2.size4.p-t-54.p-b-100.p-l-15.p-r-15`
    with `.where1-parent{position:relative}`; `.bg0{background-color:#fff}`,
    `.bor2{border-radius:5px}`, `.size4{width:686px; max-width:100%}`
  - Close button: `.how-btn2{color:rgba(255,255,255,0.5)}` →
    `.how-btn2:hover{color:rgba(255,255,255,1)}`, `.fs-26{font-size:26px}`,
    `.where1{position:absolute; top:-40px; right:5px}`, `.trans-04` = all `.4s`
  - Modal heading: `.m1-txt1{font-family:Montserrat-Black; font-size:24px;
    color:#333; line-height:1.2; text-transform:uppercase}` with
    `.txt-center.p-b-36`; the underlined word is
    `.bor1{border-bottom:3px solid #3a5dff}` with `.p-b-6`
  - Modal sub line: `.m1-txt2{font-family:Montserrat-Regular; font-size:18px;
    color:#555; line-height:1.4; text-transform:uppercase}` with
    `.txt-center.p-b-40`
  - Modal column: `.wsize1{max-width:390px}` + `.m-lr-auto{margin-left:auto;
    margin-right:auto}`
  - Input well: `.wrap-input100{width:100%; position:relative;
    background-color:#fff; height:50px; border:2px solid #e6e6e6;
    border-radius:25px}`; `input.input100{height:100%; padding:0 30px;
    background:transparent}`; text `.s1-txt4{font-family:Montserrat-Bold;
    font-size:15px; color:#555; line-height:1.2}`; placeholder
    `.placeholder0` `#999999`; spacing `.m-b-10` / `.m-b-20`
  - Focus ring: `.focus-input100{position:absolute; display:block;
    width:calc(100% + 4px); height:calc(100% + 4px); top:-2px; left:-2px;
    pointer-events:none; border:2px solid #3a5dff; border-radius:25px;
    visibility:hidden; opacity:0; transition:all .4s;
    transform:scaleX(1.1) scaleY(1.2)}` and
    `.input100:focus + .focus-input100{visibility:visible; opacity:1;
    transform:scale(1)}`
  - Modal button: `.size5{width:100%; height:50px}` +
    `.how-btn1{background-color:#3a5dff; border-radius:25px; padding:0 20px}` +
    `.how-btn1:hover{background-color:#333; color:#fff}` + `.trans-04`; label
    `.s1-txt2` (Montserrat-Bold 15px white)
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
    max-width:70%; background-color:#fff; border:1px solid #c80000;
    border-radius:15px; padding:4px 25px 4px 10px; top:50%;
    transform:translateY(-50%); right:12px; pointer-events:none;
    font-family:Montserrat-Bold; color:#c80000; font-size:13px;
    line-height:1.4; text-align:left; visibility:hidden; opacity:0;
    transition:opacity .4s}` + `.alert-validate::after{content:"\f06a";
    font-family:FontAwesome; color:#c80000; font-size:18px; top:50%;
    transform:translateY(-50%); right:18px}`, revealed by
    `.alert-validate:hover:before` and always inside
    `@media (max-width:992px)` — recreation uses a lucide-react
    `AlertCircle`/`AlertTriangle` instead
  - Small print: `.s1-txt5{font-family:Montserrat-Regular; font-size:12px;
    color:#999; line-height:1.6666667}` with `.txt-center.wsize2
    .m-lr-auto.p-t-20` (`.wsize2{max-width:285px}`)
  - Base type: `body,html{font-family:Arial,sans-serif; font-size:15px;
    color:#666666; background-color:#fff}` (visible type is entirely
    Montserrat)
  - Fonts (source, self-hosted woff2): Montserrat-Regular / Light / Black /
    Bold — recreation loads Montserrat (300/400/700/900) from Google Fonts via
    `<link>` in `index.html`
- **Content map (source DOM):**
  `div.bg-g1.size1.flex-w.flex-col-c-sb.p-l-15.p-r-15.p-t-55.p-b-35.respon1`
  containing, in order:
  1. `span` (empty flex spacer — with `space-between` it pushes the middle
     block to the optical centre)
  2. `div.flex-col-c.p-t-50.p-b-50` —
     - `h3.l1-txt1.txt-center.p-b-10` — "Coming Soon"
     - `p.txt-center.l1-txt2.p-b-60` — "Our website is under construction"
     - `div.flex-w.flex-c.cd100.p-b-82` — four
       `div.flex-col-c-m.size2.how-countdown` cells, each a
       `span.l1-txt3.p-b-9.days|hours|minutes|seconds` (DOM: 35 / 17 / 50 / 39)
       over a `span.s1-txt1` label (Days / Hours / Minutes / Seconds)
     - `button.flex-c-m.s1-txt2.size3.how-btn[data-toggle=modal]
       [data-target="#subscribe"]` — "Follow us for update now!"
  3. `span.s1-txt3.txt-center` — the demo credit line (source text
     "@ 2017 Coming Soon Template. Designed by Colorlib"; replaced in the
     recreation by the Component Dock attribution)
- **Modal DOM:** `div.cl-modal.cl-fade#subscribe[tabindex=-1][role=dialog]
  [aria-hidden=true]` → `div.cl-modal-dialog[role=document][data-dismiss=modal]`
  → `div.modal-subscribe.where1-parent.bg0.bor2.size4.p-t-54.p-b-100.p-l-15
  .p-r-15` containing, in order:
  1. `button.btn-close-modal.how-btn2.fs-26.where1.trans-04` — an inline SVG
     "×" (`.cl-icon`) replacing the source icon-font glyph
  2. `div.wsize1.m-lr-auto` —
     - `h3.m1-txt1.txt-center.p-b-36 > span.bor1.p-b-6` — "Subscribe"
     - `p.m1-txt2.txt-center.p-b-40` — "Follow us for update now!"
     - `form.contact100-form.validate-form` — two
       `div.wrap-input100.m-b-10|m-b-20.validate-input` with
       `data-validate="Name is required"` /
       `data-validate="Email is required: ex@abc.xyz"`, each an
       `input.s1-txt4.placeholder0.input100` + `span.focus-input100`; then
       `div.w-full > button.flex-c-m.s1-txt2.size5.how-btn1.trans-04` —
       "Get Updates"
     - `p.s1-txt5.txt-center.wsize2.m-lr-auto.p-t-20` — "And don't worry, we
       hate spam too! You can unsubcribe at anytime."
- **Behaviour (`js/snippet.js`, three framework-free features):**
  1. `.validate-form` submit validation — per field, e-mail fields (and any
     `name="email"`) must match `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`, other fields
     must be non-empty; a failure adds `.alert-validate` to the closest
     `.validate-input` and calls `preventDefault`; the class is removed on
     `focus`.
  2. Countdown on `.cd100` (config `{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}`):
     target `new Date(0, -1, 35, 18, 0, 0)` is in the past, so the source falls
     back to `Date.now() + 35 days + 18 hours` — the demo must never read
     `00:00:00`; ticks every 1000 ms; `days` is written unpadded while hours,
     minutes and seconds go through `('0'+n).slice(-2)`; the interval clears
     when the remaining time reaches zero.
  3. Modal (`data-toggle="modal"` → `data-target="#subscribe"`): open appends a
     `.cl-modal-backdrop`, sets `cl-modal-open` on `<body>` (compensating the
     scrollbar gap with `padding-right`), sets `aria-modal="true"`, animates
     `cl-show` on both, and focuses the first focusable field; close animates
     out then removes the backdrop, restores `aria-hidden`, clears the body
     class, and returns focus to the opener after 150 ms; closes on the close
     button, on `[data-dismiss="modal"]`, on a click outside the dialog (not
     inside `.modal-subscribe`), and on `Escape`; Tab is trapped inside the
     open dialog.

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| gradient brand (page) | `linear-gradient(-45deg, #ac32e4, #7918f2, #4801ff)` | full-viewport background |
| gradient fallback | `#7918f2` | background-color behind the gradient |
| gradient brand (button wash) | `linear-gradient(45deg, #ac32e4, #7918f2, #4801ff)` | pill button hover overlay |
| action blue | `#3a5dff` | modal primary button, focus ring, heading underline |
| dark hover | `#333` | modal button hover |
| tile surface | `#fff` | countdown tiles, modal card |
| tile number | `#555555` | countdown numbers |
| tile label | `#7d8da6` | countdown labels (uppercase) |
| headline / sub / button label | `#fff` | hero block over the gradient |
| modal heading | `#333` | "Subscribe" |
| modal sub / input text | `#555` | sub line, input values |
| placeholder / small print | `#999999` / `#999` | inputs, modal small print |
| modal muted | `#cccccc` | source credit line (footer) |
| input border | `#e6e6e6` | 2px pill input border |
| error red | `#c80000` | validation bubble border/text/icon |
| backdrop | `#000` at `opacity:0` | modal backdrop (kept invisible by design) |
| fonts | Montserrat-Black (headline 50px, modal heading 24px), Montserrat-Light (sub 30px), Montserrat-Bold (tile numbers 36px, labels/buttons/inputs 15px), Montserrat-Regular (tile labels 12px, modal sub 18px, small print 12px, credit 12px) | typography |
| radii | 25px (pill button, inputs, focus ring), 18px (countdown tiles), 5px (modal card), 15px (validation bubble), 3px (heading underline is a border, not a radius) | shapes |
| screen | `width:100%`, `min-height:100vh`, padding `55px 15px 35px` (top 35px at ≤576px), flex column `space-between` centred | layout |
| middle block | flex column, centred, `padding 50px 0` | layout |
| headline | Montserrat-Black 50px/1.2 white uppercase, `10px` bottom padding | hero |
| sub line | Montserrat-Light 30px/1.2 white, `60px` bottom padding | hero |
| countdown tile | `90px × 90px`, `background #fff`, `border-radius:18px`, `margin 0 18px 25px` | four tiles |
| countdown row | wrapping, centred, `82px` bottom padding | tiles |
| countdown number | Montserrat-Bold 36px/1 `#555555`, `9px` bottom padding | tiles |
| countdown label | Montserrat-Regular 12px/1 `#7d8da6` uppercase | tiles |
| pill button | `min-width:280px` (`max-width:100%`), `min-height:50px`, `padding 10px 20px`, `2px solid #fff`, radius 25px, transparent fill, gradient overlay `opacity 0→1` over `.4s` | hero |
| button label | Montserrat-Bold 15px/1.2 white | hero |
| modal card | `width:686px` (`max-width:100%`), `background #fff`, `border-radius:5px`, `padding 54px 15px 100px` | modal |
| modal dialog | flex centred, `min-height:100%`, `padding 50px 15px` | modal |
| close button | `26px`, `rgba(255,255,255,0.5)` → `1` on hover, absolute `top:-40px; right:5px`, `.4s` | modal |
| modal heading | Montserrat-Black 24px/1.2 `#333` uppercase, `36px` bottom padding, word underline `3px solid #3a5dff` (`6px` below) | modal |
| modal sub | Montserrat-Regular 18px/1.4 `#555` uppercase, `40px` bottom padding | modal |
| form column | `max-width:390px`, auto margins, form `width:100%` | modal |
| input | `width:100%`, `height:50px`, `border:2px solid #e6e6e6`, radius 25px, white fill, `padding 0 30px`, Montserrat-Bold 15px `#555` | modal |
| input spacing | `10px` (name) / `20px` (email) bottom margin | modal |
| focus ring | `2px solid #3a5dff`, radius 25px, `calc(100% + 4px)` at `-2px`, `scaleX(1.1) scaleY(1.2)` → `scale(1)`, visibility/opacity over `.4s`, `pointer-events:none` | modal |
| modal button | `width:100%`, `height:50px`, `#3a5dff` fill, radius 25px, `padding 0 20px`, hover `#333` + white text, `.4s` | modal |
| small print | Montserrat-Regular 12px/1.667 `#999`, `max-width:285px` centred, `20px` top padding | modal |
| modal motion | overlay `opacity .15s linear`; dialog `transform .3s ease-out` `translate(0,-25%)` → `translate(0,0)`; close teardown after `150ms` | modal |
| validation bubble | white fill, `1px solid #c80000`, radius 15px, `padding 4px 25px 4px 10px`, right `12px`, vertically centred, Montserrat-Bold 13px/1.4 `#c80000`; icon 18px `#c80000` at right `18px` | error state |
| validation visibility | hidden by default; shown on field hover; always shown at ≤992px | error state |
| countdown behaviour | target `{Y:0,M:0,D:35,h:18,m:0,s:0}`; past target → `now + 35 d + 18 h`; 1 s tick; days unpadded, h/m/s padded | counter |

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_04/index.html` | HTTP 200 · 3,527 B · title `Coming Soon 4` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_04/css/style.css?v=4e86c025` | HTTP 200 · 16,469 B · sha256 `852be96da789` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×13,
`#7918f2`×10, `#ac32e4`×8, `#4801ff`×8, `#999999`×5, `#000000`×3,
`#3a5dff`×3, `#c80000`×3, `#555555`×3, `#333333`×2.

**Low-chroma values the sheet actually uses** — `#999999`, `#555555`,
`#333333`, `#212529`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Full-viewport gradient screen

The page is one screen, not a scrolling site: a diagonal purple→violet gradient
with a space-between flex column centring one block.

#### Scenario: Page renders as one gradient screen
- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a single wrapper occupies `width:100%; min-height:100vh` with
  55px top / 35px bottom / 15px side padding and a diagonal
  `linear-gradient(-45deg, #ac32e4, #7918f2, #4801ff)` background (with a
  `#7918f2` fallback) — no photographic background
- **And** the wrapper is a flex column with `justify-content:space-between` and
  centre alignment, holding an empty spacer, the centred middle block, and the
  footer attribution line, so the middle block sits at the optical centre
- **And** the middle block is a centred flex column with 50px vertical padding
- **And** the wrapper's top padding drops to 35px at ≤576px (source
  `.respon1`)
- **And** there is NO navbar, NO imagery layer and NO scrolling section

### Feature: Headline block

The white uppercase title plus its light subtitle.

#### Scenario: Headline and subtitle render with the reference typography
- **Given** the screen renders
- **When** the hero block is visible
- **Then** an `<h1>`/heading renders "Coming Soon"-equivalent copy in
  Montserrat-Black 50px/1.2 white, uppercase, centred, with 10px bottom padding
- **And** beneath it a line renders in Montserrat-Light 30px/1.2 white,
  centred, with 60px bottom padding (source: "Our website is under
  construction")
- **And** the copy is the same _kind_ as the source (paraphrasable) and never
  reuses the source demo title "Coming Soon 4" / "Coming Soon V04"

### Feature: Countdown tiles

Four white rounded-square tiles in one wrapping row, each with a live value.

#### Scenario: Countdown renders and ticks
- **Given** the screen renders
- **When** the countdown row is visible
- **Then** four tiles render in a centred wrapping row with 82px bottom
  padding, each `90px × 90px` with `background #fff`, `border-radius:18px` and
  `margin 0 18px 25px`
- **And** each tile stacks a Montserrat-Bold 36px/1 `#555555` number (9px
  bottom padding) above a Montserrat-Regular 12px/1 uppercase `#7d8da6` label
  — Days, Hours, Minutes, Seconds
- **And** the values update once per second toward a target date, with hours,
  minutes and seconds zero-padded to two digits while days are NOT padded
  (source pads `('0'+n).slice(-2)` for h/m/s only)
- **And** when the configured target is already in the past the countdown runs
  toward `now + 35 days + 18 hours` instead, so it never reads zero of
  everything (source rule), and the interval stops at zero and on unmount

### Feature: Subscribe modal

An outlined pill button opens a framework-free modal with two validated fields.

#### Scenario: Outline pill button opens the modal
- **Given** the screen renders
- **When** the button is visible
- **Then** a transparent pill button renders centred below the tiles
  (`min-width:280px`, `max-width:100%`, `min-height:50px`, `padding 10px 20px`,
  `border:2px solid #fff`, `border-radius:25px`, `overflow:hidden`) with a
  Montserrat-Bold 15px/1.2 white label (source: "Follow us for update now!")
- **And** hovering it fades in a `linear-gradient(45deg, #ac32e4, #7918f2,
  #4801ff)` overlay from `opacity:0` to `1` over `.4s`, clipped to the pill
- **And** clicking it opens the modal (React state), focuses the first field,
  traps Tab inside the dialog, sets `aria-modal="true"`, and locks body scroll
  (`overflow:hidden`/scroll) compensating the scrollbar gap with `padding-right`

#### Scenario: Modal renders the subscribe card 1:1
- **Given** the modal is open
- **When** the card is visible
- **Then** a white card renders centred by a `min-height:100%` flex dialog with
  50px/15px padding — card `width:686px` capped at `100%`, `background:#fff`,
  `border-radius:5px`, padding 54px 15px 100px
- **And** the overlay fades in over `.15s linear` and the dialog slides from
  `translateY(-25%)` to `translateY(0)` over `.3s ease-out`; the backdrop layer
  stays invisible (source keeps it at `opacity:0`)
- **And** a close button (own-icon, e.g. lucide `X`, 26px) is positioned
  absolutely at `top:-40px; right:5px`, coloured `rgba(255,255,255,0.5)` and
  warming to full white on hover over `.4s`, with an `aria-label`
- **And** inside a `max-width:390px` centred column, in order: a
  Montserrat-Black 24px/1.2 `#333` uppercase heading (source: "Subscribe")
  whose word carries a `3px solid #3a5dff` bottom border 6px below it, with
  36px bottom padding; a Montserrat-Regular 18px/1.4 `#555` uppercase line
  (40px bottom padding); the form; and a Montserrat-Regular 12px/1.667 `#999`
  line capped at 285px, centred, with 20px top padding (source: "And don't
  worry, we hate spam too! You can unsubcribe at anytime.")

#### Scenario: Form validates as in the reference
- **Given** the modal is open
- **When** the form renders
- **Then** two pill inputs render full width in order Name (10px bottom
  margin) then Email (20px bottom margin): `height:50px`,
  `border:2px solid #e6e6e6`, `border-radius:25px`, white fill,
  `padding:0 30px`, Montserrat-Bold 15px `#555` text and `#999999`
  placeholders, each wrapped in a `position:relative` container
- **And** focusing an input reveals the source focus ring — a layer at
  `calc(100% + 4px)` / `calc(100% + 4px)` offset `-2px`, `border:2px solid
  #3a5dff`, radius 25px, animating `scaleX(1.1) scaleY(1.2)` → `scale(1)` with
  visibility/opacity over `.4s`, sending no pointer events
- **And** a full-width `#3a5dff` pill button "Get Updates" renders below
  (`width:100%`, `height:50px`, radius 25px, `padding 0 20px`, white
  Montserrat-Bold 15px label) darkening to `#333` (white text) on hover with a
  `.4s` transition
- **And** submitting with an empty Name or a malformed/empty Email addresses
  that field with a white bubble (`1px solid #c80000`, radius 15px,
  `padding 4px 25px 4px 10px`, right 12px and vertically centred,
  Montserrat-Bold 13px/1.4 `#c80000` text) plus a lucide `AlertCircle` warning
  glyph (`#c80000`, 18px, right 18px) replacing the source FontAwesome `\f06a`
- **And** the bubble follows the source visibility rule — hidden until an
  invalid submit, then visible while that field is hovered and ALWAYS visible at
  ≤992px — and clears on focus; a valid submit is accepted (React state, no
  navigation)

#### Scenario: Modal closes on every source affordance
- **Given** the modal is open
- **When** the user closes it via the close button, a `[data-dismiss]` click,
  a click outside the card, or `Escape`
- **Then** the overlay animates out and the backdrop is removed after ~150 ms,
  `aria-hidden` returns to `true`, the body scroll lock is released, and focus
  returns to the button that opened it
- **And** clicks inside the card never close it (source rule)

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4
`@theme` tokens.

#### Scenario: Theme tokens match the reference
- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: three gradient stops `#ac32e4` / `#7918f2` /
  `#4801ff` (with `#7918f2` as the solid fallback), action blue `#3a5dff`,
  dark `#333`, tile white `#fff`, number `#555555`, label `#7d8da6`, modal sub
  `#555`, placeholder `#999999`, muted `#cccccc`, input border `#e6e6e6`,
  error `#c80000`
- **And** Montserrat (Light 300 / Regular 400 / Bold 700 / Black 900) loads via
  a Google Fonts `<link>` in `index.html`
- **And** shapes are radius 25px (pills, inputs, focus ring), 18px (tiles),
  5px (modal card) and 15px (validation bubble); transitions are `.4s`
  (button overlay, focus ring, close button, modal button), `.15s linear`
  (overlay fade) and `.3s ease-out` (dialog slide)

### Feature: Footer attribution

A single Component Dock attribution replacing the source credit line.

#### Scenario: Attribution links Component Dock
- **Given** the page renders
- **When** the footer line is visible
- **Then** it renders in Montserrat-Regular 12px/1.4 `#cccccc`, centred, and
  reads a Component-Dock attribution (e.g. "Made with ♥ by Component Dock")
  linking `https://www.componentdock.com/`, branded "Component Dock" — never
  ColorLib, "Colorlib", the source demo title, the source credit line, or the
  source slug

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/eve/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/eve/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Layout 1:1 with the reference: one `min-h-screen` flex-column wrapper
      (`space-between`, centred, `padding 55px 15px 35px`; 35px top at ≤576px)
      with a `-45deg` `#ac32e4 → #7918f2 → #4801ff` gradient (solid `#7918f2`
      fallback); empty spacer above, attribution below, middle block centred
      (flex column, `padding 50px 0`); no navbar, no sections below the fold
- [ ] Block order matches: headline → sub line → countdown row → pill button
- [ ] Headline: Montserrat-Black 50px/1.2 white uppercase, centred, `10px`
      bottom padding; sub line Montserrat-Light 30px/1.2 white, centred, `60px`
      bottom padding
- [ ] Countdown: four `90×90px` white tiles (`border-radius:18px`,
      `margin 0 18px 25px`) in a centred wrapping row with `82px` bottom
      padding; Montserrat-Bold 36px `#555555` numbers above Montserrat-Regular
      12px uppercase `#7d8da6` labels (Days/Hours/Minutes/Seconds); live
      1-second tick; days unpadded, h/m/s zero-padded; past target falls back to
      now + 35 d + 18 h; interval cleared on unmount/zero
- [ ] Pill button: `min-width:280px` / `max-width:100%` / `min-height:50px`,
      `padding 10px 20px`, `2px solid #fff`, radius 25px, transparent fill,
      white Montserrat-Bold 15px label; hover fades in the `45deg`
      `#ac32e4 → #7918f2 → #4801ff` overlay over `.4s`, clipped to the pill
- [ ] Modal motion: overlay `opacity` `.15s linear`; dialog
      `translateY(-25%)` → `translateY(0)` over `.3s ease-out`; backdrop layer
      invisible; teardown after ~150 ms
- [ ] Modal card: `686px` capped at `100%`, white, radius 5px,
      `padding 54px 15px 100px`, centred by a `min-height:100%` flex dialog with
      `50px 15px` padding; close button 26px at `top:-40px; right:5px`,
      `rgba(255,255,255,0.5)` → white on hover, `.4s`, with `aria-label`
- [ ] Modal content: `max-width:390px` centred column — Montserrat-Black 24px
      `#333` uppercase heading with a `3px solid #3a5dff` underline 6px below
      and `36px` bottom padding; Montserrat-Regular 18px `#555` uppercase sub
      (`40px` bottom padding); form; Montserrat-Regular 12px `#999` small print
      capped at 285px, `20px` top padding
- [ ] Inputs: full width, `height:50px`, `2px solid #e6e6e6`, radius 25px, white
      fill, `padding 0 30px`, Montserrat-Bold 15px `#555`, `#999999`
      placeholders (Name 10px / Email 20px bottom margin)
- [ ] Focus ring: layer at `calc(100% + 4px)` offset `-2px`, `2px solid
      #3a5dff`, radius 25px, animating `scaleX(1.1) scaleY(1.2)` → `scale(1)`
      over `.4s`, `pointer-events:none`
- [x] Modal button "Get Updates": `width:100%`, `height:50px`, `#3a5dff`, radius
      25px, `padding 0 20px`, white 15px label, `#333` hover, `.4s`
- [ ] Validation: invalid/empty Name or Email → white bubble (`1px solid
      #c80000`, radius 15px, `padding 4px 25px 4px 10px`, right 12px,
      Montserrat-Bold 13px `#c80000`) with a lucide `AlertCircle` (18px
      `#c80000`, right 18px); hidden until an invalid submit, then visible on
      field hover and always at ≤992px; cleared on focus; valid submit accepted
      (React state, no navigation)
- [ ] Modal closes via close button, `[data-dismiss]`, outside click and
      `Escape`; clicks inside the card never close it; focus returns to the
      opener; body scroll lock released
- [ ] Montserrat (300/400/700/900) via Google Fonts `<link>`; radii 25px / 18px
      / 5px / 15px; transitions `.4s`, `.15s linear`, `.3s ease-out`
- [ ] All imagery is `picsum.photos/seed/eve-*` placeholders (none required by
      the design); icons from `lucide-react` (`AlertCircle` replaces the source
      FontAwesome `\f06a`, own `X` replaces the icon-font close glyph); no
      copied assets, font files, or CSS; no jQuery, no framework, no CDN
- [x] Component Dock attribution links `https://www.componentdock.com/`
- [x] Zero `colorlib` / source-demo-title / `comingsoon_04` references anywhere
      in `apps/eve` (comments included)
- [x] App folder `apps/eve`, package `@free-react-templates/eve`, `homepage`
      `https://eve.free.componentdock.com`, `public/CNAME`
      `eve.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh eve` passes
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
