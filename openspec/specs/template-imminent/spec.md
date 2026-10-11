# Template: Imminent (Coming Soon / Under Construction)

## Purpose

Imminent is a single-screen coming-soon / under-construction page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Coming Soon V07" template (source slug `comingsoon_07` — one full-viewport
screen: a blurred office-interior photograph under a magenta→indigo gradient
wash (`#b224ef` at the bottom, `#7579ff` at the top, 90% opacity), a small white
wordmark top-left and three round white social buttons top-right, then a centred
700px column — a white 36px line reading "Our website is **Coming Soon**, follow
us for update now!" (the middle words bold), a one-row subscribe form (a 490px
white square-cornered e-mail field plus a 170px green `#57b846` "Subscribe"
button) over a small pale-grey spam note, and finally four 155px circular rings
(1px `rgba(255,255,255,0.3)` outline) each holding a big white digit and a tiny
uppercase label: `35 Days · 17 Hours · 59 Minutes · 57 Seconds`), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_07/
  (HTTP 200, 109,360 B, verified 2026-10-11)
- **Preview:** https://preview.colorlib.com/theme/comingsoon_07/ returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same
  live-preview gap as the rest of the `comingsoon_*` family), so the live
  preview DOM is unreachable for this slug. Fallback (documented per
  `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_07.zip`
  (HTTP 200, 295,754 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs07/ex/comingsoon_07/` — `index.html` (4,962 B), `css/style.css`
  (11,990 B), `js/snippet.js` (3,069 B), `README.md` (1,260 B),
  `images/bg01.jpg` (1900×900, 185,088 B), `images/icons/logo.png` (91×29,
  1,639 B), `images/icons/favicon.ico`, and the
  `fonts/Poppins-Regular.woff2` / `Poppins-Bold.woff2` pair plus a 576 B
  FontAwesome subset. That zip (the real rendered template's own files) is the
  DOM/CSS/JS reference, together with the TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-7.jpg
  (HTTP 200, 22,560 B, served as AVIF, 1200×972, decoded with `avifdec` to
  `/tmp/coming-soon-7.png` and reviewed visually 2026-10-11)
- **New name:** `imminent` (apps/imminent, `@free-react-templates/imminent`) —
  the source demo title "Coming Soon 7", its "UNO." PNG wordmark and its
  photograph are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

The reference is one full-viewport screen, not a scrolling site. The screen
wrapper is `div.bg-img1.size1.overlay1` with an inline
`style="background-image: url('images/bg01.jpg')"`:
`.size1{width:100%; min-height:100vh}` and
`.bg-img1{background-position:center; background-repeat:no-repeat;
background-size:cover}`. Note the difference from the rest of the family: this
slug's `overlay1` wrapper carries NO padding class — the whole screen is the
photograph, and the breathing room comes from the FIRST child,
`div.size1.p-l-15.p-r-15.p-t-30.p-b-50` (a second `min-height:100vh` box with
30px top / 15px side / 50px bottom padding). `.overlay1{position:relative;
z-index:1}` plus `.overlay1::before{content:""; display:block;
position:absolute; z-index:-1; width:100%; height:100%; top:0; left:0;
background:#7579ff; background:linear-gradient(bottom, #b224ef, #7579ff);
opacity:0.9}` paints the brand wash OVER the photograph: `#7579ff` is the solid
fallback that stands in where the legacy-direction gradient declaration is
dropped, and the rendered wash is magenta-purple `#b224ef` at the BOTTOM easing
to indigo `#7579ff` at the TOP (the legacy `bottom` keyword means "starting at
the bottom", so in modern syntax this is `linear-gradient(to top, #b224ef,
#7579ff)`) — exactly what the screenshot shows: a violet-blue upper half sliding
into a saturated purple/magenta lower half with the office photograph ghosting
through. The recreation must render the same `to top` two-stop gradient at 90%
opacity with the `#7579ff` fallback over a placeholder photograph.

Inside that padded box stand three bands, all vertically centred on each other's
axis:

FIRST the top bar `div.flex-w.flex-sb-m.p-l-75.p-r-60.p-b-165.respon1` —
wrapping (`flex-wrap:wrap`), `justify-content:space-between`,
`align-items:center`, with 75px left / 60px right / 165px bottom padding (at
≤576px `.respon1` overrides to `padding: 0 0px 65px 5px` — 5px left, no right,
65px bottom): a `.wrappic1.m-r-30.m-t-10.m-b-10` logo wrapper
(`display:block; flex-grow:1`, 30px right margin) holding the source PNG
wordmark, and a `.flex-w.m-t-10.m-b-10` row of three social links
`a.size4.flex-c-m.how-social.trans-04.m-r-5.m-b-3.m-t-3`
(`.size4{width:36px;height:36px}`, `.how-social{color:#999999; font-size:18px;
background-color:#fff; border-radius:50%}`, `.how-social:hover{
background-color:#57b846; color:#fff}`, `.trans-04{transition:all .4s}`, 5px
right margin, 3px vertical margins) whose glyphs are FontAwesome
`facebook` / `twitter` / `youtube-play` icons. These are the family's only ROUND,
WHITE-FILLED social buttons — three little white discs, not outlined squares.

SECOND the centred content column `div.wsize1.m-lr-auto`
(`.wsize1{max-width:700px}` + `.m-lr-auto{margin-left:auto;margin-right:auto}`):

- `p.txt-center.l1-txt1.p-b-60` — `Our website is <span class="l1-txt2">
Coming Soon</span>, follow us for update now!` — `.l1-txt1{font-family:
Poppins-Regular; font-size:36px; color:#fff; line-height:1.333333}` and
  `.l1-txt2{font-family:Poppins-Bold; font-size:36px; color:#fff;
line-height:1.333333}`, i.e. ONE sentence at 36px where only the two words
  "Coming Soon" are bold, centred, with 60px below it;
- `form.w-full.flex-w.flex-c-m.validate-form` — a wrapping, centre-justified row
  holding the e-mail well `.wrap-input100.validate-input.m-b-20`
  (`data-validate="Valid email is required: ex@abc.xyz"`; `.wrap-input100{
position:relative; max-width:100%; width:490px; z-index:1}` — 490px, not
  100%) whose `input.input100.placeholder0.m1-txt1[type=text][name=email]
[placeholder="Email Address"]` is `display:block; width:100%; background:#fff;
height:50px; padding:0 25px` in Poppins-Regular 16px `#57b846` (the typed text
  is BRAND GREEN, not grey) with a `#999999` placeholder, plus its
  `span.focus-input100` ring — and next to it `button.flex-c-m.size3.m1-txt2
.how-btn1.trans-04.m-b-20` (`.size3{min-width:170px; height:50px}`,
  `.m1-txt2{Poppins-Regular 16px; color:#fff; line-height:1.333333}`,
  `.how-btn1{background-color:#57b846; padding-right:20px; padding-left:20px;
position:relative}`) labelled "Subscribe". On a wide viewport the field
  (490px) and the button (170px) sit side by side in ONE centred row, exactly as
  the screenshot shows — the input is NOT full width and the button is NOT
  full width;
- `p.txt-center.s1-txt1.p-t-5` — `.s1-txt1{font-family:Poppins-Regular;
font-size:12px; color:#e5e5e5; line-height:1.333333}` — the spam note
  ("And don't worry, we hate spam too! You can unsubcribe at anytime." — the
  source's own spelling of "unsubscribe") centred with 5px above it.

THIRD the countdown `div.flex-w.flex-c-m.cd100.wsize1.m-lr-auto.p-t-116` — a
wrapping, centre-justified 700px row with 116px of top padding (a big gap below
the form, visible in the screenshot) holding FOUR rings,
`div.flex-col-c-m.size2.bor1.m-l-10.m-r-10.m-b-15`
(`.flex-col-c-m{align-items:center; justify-content:center;
flex-direction:column}`, `.size2{width:155px; height:155px}`,
`.bor1{border:1px solid rgba(255,255,255,0.3); border-radius:50%}`, 10px side
margins, 15px bottom margin), each with a digit `span.l1-txt3.p-b-9.days |
.hours | .minutes | .seconds` (`.l1-txt3{font-family:Poppins-Bold; font-size:
40px; color:#fff; line-height:1}` with 9px below) over a label
`span.s1-txt2` (`.s1-txt2{font-family:Poppins-Regular; font-size:12px;
color:#fff; line-height:1}`) reading `Days` / `Hours` / `Minutes` / `Seconds`.
The DOM ships the static values `35 / 17 / 50 / 39`; the script immediately
recomputes the whole clock.

The countdown script (`js/snippet.js`, config
`{"sel":".cd100","kind":"spans","cfg":{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}}`)
has the family's `spans` flavour, NOT the flip clock: the target date is built as
`new Date(0, -1, 35, 18, 0, 0)` (year 0, month `-1`), which can never be in the
future, so the fallback rule kicks in and the target becomes
`Date.now() + 35 days + 18 hours` — the demo therefore never reads zero. It then
repaints the four spans once per second (`setInterval(paint, 1000)` plus an
immediate `paint()`), writing `r.d` RAW into `.days` (days are NOT zero-padded —
35, 9, 5 …) and `pad(r.h)`, `pad(r.m)`, `pad(r.s)` where
`pad = n => ('0'+n).slice(-2)` (hours/minutes/seconds ARE two digits), and clears
the interval once the remaining time reaches 0. `.hours`, `.minutes`, `.seconds`
also carry the class names the selector writes to, so the four labels are
matched by class, and the countdown container is skipped entirely if it already
contains a `.flip-clock-wrapper` (the family's other flavour).

The form is validated on submit by the same framework-free `.validate-form`
handler as the rest of the family: per field, e-mail fields (or any
`name="email"`) must match `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`, other fields must
be non-empty; a failure adds `.alert-validate` to the closest `.validate-input`
and calls `preventDefault`; the class is removed on `focus`. There is NO success
path in the source (a valid submit simply reloads the demo page) — the
recreation shows a React-state confirmation instead and must not navigate. The
bubble is `.alert-validate::before{content:attr(data-validate); position:
absolute; max-width:70%; background-color:#fff; border:1px solid #c80000;
border-radius:0px; padding:5px 30px 6px 10px; top:50%; transform:
translateY(-50%); right:12px; pointer-events:none; font-family:Poppins-Regular;
color:#c80000; font-size:15px; line-height:1.4; text-align:left;
visibility:hidden; opacity:0; transition:opacity 0.4s}` plus
`.alert-validate::after{content:"\f071"; font-family:FontAwesome; ...color:
#c80000; font-size:16px; top:50%; transform:translateY(-50%); right:18px}`,
revealed by `.alert-validate:hover:before{visibility:visible; opacity:1}` and,
inside `@media (max-width:992px)`, `.alert-validate::before{visibility:visible;
opacity:1}`. This slug's bubble is SQUARE (`border-radius:0px`) and 15px —
unlike the series' earlier balloon-photo slug (16px radius, 12px, `\f06a`);
`\f071` is
FontAwesome's warning TRIANGLE, so the recreation uses a lucide-react
`AlertTriangle`, not `AlertCircle`. The focus bloom is the same
`anim-shadow 0.5s ease-in-out` run ending at `box-shadow:0px 0px 80px 30px;
opacity:0`, tinted `rgba(87,184,70,0.6)`.

The Subscribe button's hover is the one piece of flourish: `.how-btn1:hover{
background-color:transparent}` turns the green fill off while
`.how-btn1::before{content:""; display:block; position:absolute; z-index:-1;
width:100%; height:100%; top:0; left:0; background:#7579ff;
background:linear-gradient(top,#b224ef,#7579ff); transition:all 0.4s;
opacity:0}` fades a magenta→indigo gradient (modern `to bottom`: `#b224ef` top →
`#7579ff` bottom) in at `opacity:1` over `.4s`, so the button sweeps from brand
green to the page's own wash. The social buttons share the same `transition:
all .4s` and swap to `background:#57b846` with a white glyph.

The palette is a magenta→indigo brand wash over a photograph plus exactly one
saturated accent: wash `#b224ef` (bottom) → `#7579ff` (top) with `#7579ff` as the
solid fallback at `opacity:0.9`; brand green `#57b846` (Subscribe fill, social
hover fill, and the typed e-mail text colour) with the hover gradient
`#b224ef → #7579ff`; countdown ring `rgba(255,255,255,0.3)` with white digits and
labels; input `#fff` with `#999999` placeholder; note `#e5e5e5`; social icon
`#999999` on `#fff`; focus bloom `rgba(87,184,70,0.6)`; validation red `#c80000`.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V07" (source:
  https://colorlib.com/wp/template/comingsoon_07/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3038; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/imminent` absent, TEMPLATES.md line 3038 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_07/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11), so the
  live preview DOM could not be parsed. Fallback used (documented): the
  official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_07.zip` (HTTP 200,
  295,754 B, `application/zip`), downloaded and extracted to
  `/tmp/cs07/ex/comingsoon_07/`. Reference artifacts: `/tmp/cs07.zip`,
  `/tmp/cs07/ex/comingsoon_07/`, `/tmp/coming-soon-7.png` (decoded screenshot,
  1200×972). Research date: 2026-10-11. The source HTML/CSS/JS is authoritative
  for section structure, copy, tokens, and behaviour.
- **Screenshot:** `coming-soon-7.jpg` (AVIF, decoded and reviewed visually
  2026-10-11) confirms the layout: a softly blurred office / co-working interior
  (desks, glass partitions, hanging lights) washed end-to-end by a strong
  gradient that is violet-blue at the very top and saturated purple/magenta at
  the bottom, so the photograph reads as texture rather than subject; a small
  white wordmark reading "UNO." sits top-left; three small WHITE CIRCULAR social
  buttons (facebook, twitter, youtube glyphs in grey) sit in a neat row
  top-right; centred in the upper-middle of the screen a single 36px white line
  reads "Our website is **Coming Soon**, follow us for update now!" with only
  "Coming Soon" in bold; directly under it one centred row of a white
  square-cornered e-mail field (placeholder "Email Address") and a green
  "Subscribe" button, flush against each other; under that the two-line pale
  grey note "And don't worry, we hate spam too! You can unsubcribe at
  anytime."; and in the lower third four thin white circles, evenly spaced,
  each holding a big white number over a small white word — "35 Days",
  "17 Hours", "59 Minutes", "57 Seconds". No nav bar, no scrolling sections, no
  footer band.
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN dependency at runtime — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in,
  then re-declares a minimal Bootstrap-derived reboot) with two self-hosted
  `@font-face` blocks (Poppins-Regular, Poppins-Bold) and one FontAwesome subset
  face. The recreation uses Tailwind 4 + React state; the revert guard, the
  reboot, and all source class names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Screen: `.size1{width:100%; min-height:100vh}` and `.bg-img1`
    (cover, centre, no-repeat) on `div.bg-img1.size1.overlay1` with the inline
    background image and NO padding of its own; the padded box is the child
    `div.size1.p-l-15.p-r-15.p-t-30.p-b-50`
  - Wash: `.overlay1::before{background:#7579ff; background:linear-gradient(
bottom,#b224ef,#7579ff); opacity:0.9}`, full-size, `z-index:-1` under the
    content, over the photo
  - Top bar: `.flex-w` (wrap) + `.flex-sb-m` (space-between + items-centre) +
    `.p-l-75.p-r-60.p-b-165`; `.respon1` at ≤576px →
    `padding: 0 0px 65px 5px`; `.wrappic1{display:block; flex-grow:1}` +
    `.wrappic1 img{max-width:100%}`; `.m-r-30`, `.m-t-10`, `.m-b-10`
  - Social buttons: `.size4{width:36px;height:36px}` + `.flex-c-m` (centre both
    axes) + `.how-social{color:#999999; font-size:18px; background-color:#fff;
border-radius:50%}` + `.how-social:hover{background-color:#57b846;
color:#fff}` + `.m-r-5.m-b-3.m-t-3` + `.trans-04`
  - Content column: `.wsize1{max-width:700px}` + `.m-lr-auto`
  - Copy line: `.l1-txt1{Poppins-Regular 36px; color:#fff; line-height:1.333333}`
    - `.txt-center` + `.p-b-60`; the bold run is `.l1-txt2{Poppins-Bold 36px;
color:#fff; line-height:1.333333}` (an INLINE span, not a heading)
  - Form: `.w-full` + `.flex-w.flex-c-m` (wrapping, centred) + `.validate-form`;
    field well `.wrap-input100{position:relative; max-width:100%; width:490px;
z-index:1}` + `.validate-input{position:relative}` + `.m-b-20` on BOTH the
    well and the button
  - E-mail field: `.input100{display:block; width:100%; background:#fff;
height:50px; padding:0 25px}` with `.m1-txt1{Poppins-Regular 16px;
color:#57b846; line-height:1.333333}` and `.placeholder0` → `#999999` on
    all four vendor placeholder variants; SQUARE corners (no radius declared)
  - Focus bloom: `.focus-input100{content:''; display:block; position:absolute;
bottom:0; left:0; z-index:-1; width:100%; height:100%; box-shadow:0px 0px
0px 0px; color:rgba(87,184,70,0.6)}` +
    `.input100:focus + .focus-input100{animation:anim-shadow 0.5s ease-in-out
forwards}` + `@keyframes anim-shadow{to{box-shadow:0px 0px 80px 30px;
opacity:0}}`
  - Button: `.size3{min-width:170px; height:50px}` + `.flex-c-m` +
    `.m1-txt2{Poppins-Regular 16px; color:#fff; line-height:1.333333}` +
    `.how-btn1{background-color:#57b846; padding-right:20px; padding-left:20px;
position:relative}` + `.trans-04`; hover `.how-btn1:hover{background-color:
transparent}` with `.how-btn1::before{… background:linear-gradient(
top,#b224ef,#7579ff); transition:all 0.4s; opacity:0}` and
    `.how-btn1:hover:before{opacity:1}`
  - Note: `.s1-txt1{Poppins-Regular 12px; color:#e5e5e5; line-height:1.333333}`
    - `.txt-center` + `.p-t-5`
  - Countdown container: `.flex-w.flex-c-m` + `.cd100` + `.wsize1.m-lr-auto` +
    `.p-t-116`
  - Countdown ring: `.flex-col-c-m` (column, both axes centred) +
    `.size2{width:155px; height:155px}` + `.bor1{border:1px solid
rgba(255,255,255,0.3); border-radius:50%}` + `.m-l-10.m-r-10.m-b-15`
  - Countdown digit/label: `.l1-txt3{Poppins-Bold 40px; color:#fff;
line-height:1}` + `.p-b-9`; `.s1-txt2{Poppins-Regular 12px; color:#fff;
line-height:1}`
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
max-width:70%; background-color:#fff; border:1px solid #c80000;
border-radius:0px; padding:5px 30px 6px 10px; top:50%; transform:
translateY(-50%); right:12px; pointer-events:none; font-family:
Poppins-Regular; color:#c80000; font-size:15px; line-height:1.4;
text-align:left; visibility:hidden; opacity:0; transition:opacity .4s}` +
    `.alert-validate::after{content:"\f071"; font-family:FontAwesome;
display:block; position:absolute; color:#c80000; font-size:16px; top:50%;
transform:translateY(-50%); right:18px}` + `.alert-validate:hover:before{
visibility:visible; opacity:1}` and, inside `@media (max-width:992px)`,
    `.alert-validate::before{visibility:visible; opacity:1}`
  - Base type: `body,html{font-family:Arial,sans-serif; font-size:15px;
color:#666666; height:100%; background-color:#fff}` (visible type is
    entirely Poppins); `input,textarea{display:block; outline:none;
border:none}`; `button{outline:none; border:none; background:transparent;
cursor:pointer}`; `p{margin:0px}`; `a:hover{text-decoration:none}`
  - Fonts (source, self-hosted woff2): Poppins-Regular (400) and Poppins-Bold
    (700); NO Aldrich and NO monospace face in this slug (unlike its
    balloon-photo sibling of this series) — the recreation loads Poppins (400 / 700) from
    Google Fonts via `<link>` in `index.html`
- **Content map (source DOM):**
  `div.bg-img1.size1.overlay1[style=background-image:url(images/bg01.jpg)]`
  containing:
  1. `div.size1.p-l-15.p-r-15.p-t-30.p-b-50` — the padded screen box:
     - `div.flex-w.flex-sb-m.p-l-75.p-r-60.p-b-165.respon1` — ← TOP BAR
       - `div.wrappic1.m-r-30.m-t-10.m-b-10 > a[href="#"] > img[src=
images/icons/logo.png][alt=LOGO]` (91×29 white "UNO." wordmark)
       - `div.flex-w.m-t-10.m-b-10` — three
         `a.size4.flex-c-m.how-social.trans-04.m-r-5.m-b-3.m-t-3[href="#"] >
i.fa.fa-facebook | fa-twitter | fa-youtube-play` (inlined SVG glyphs)
     - `div.wsize1.m-lr-auto` — ← CONTENT COLUMN (700px, centred)
       - `p.txt-center.l1-txt1.p-b-60` — `Our website is <span class="l1-txt2">
Coming Soon</span>, follow us for update now!`
       - `form.w-full.flex-w.flex-c-m.validate-form` with
         `div.wrap-input100.validate-input.m-b-20[data-validate="Valid email
is required: ex@abc.xyz"] > input.input100.placeholder0.m1-txt1
[type=text][name=email][placeholder="Email Address"] +
span.focus-input100` and `button.flex-c-m.size3.m1-txt2.how-btn1
.trans-04.m-b-20` — "Subscribe"
       - `p.txt-center.s1-txt1.p-t-5` — the spam note ("And don't worry, we hate
         spam too! You can unsubcribe at anytime." — the source's own spelling
         of "unsubscribe")
     - `div.flex-w.flex-c-m.cd100.wsize1.m-lr-auto.p-t-116` — ← COUNTDOWN
       - `div.flex-col-c-m.size2.bor1.m-l-10.m-r-10.m-b-15 >
span.l1-txt3.p-b-9.days` (35) + `span.s1-txt2` (Days)
       - the same ring for `.hours` (17) / `Hours`, `.minutes` (50) / `Minutes`
         and `.seconds` (39) / `Seconds`
- **Behaviour (`js/snippet.js`, two framework-free features):**
  1. `.validate-form` submit validation — as described above; one e-mail field,
     `data-validate="Valid email is required: ex@abc.xyz"`; no success path in
     the source (a valid submit reloads the demo page).
  2. Countdown on `.cd100` — `kind:"spans"` with config
     `{Y:0,M:0,D:35,h:18,m:0,s:0}`: `new Date(0, -1, 35, 18, 0, 0)` is always in
     the past, so the declared fallback `end = Date.now() + D*864e5 + h*36e5`
     (= now + 35 days + 18 hours) is what actually runs; `paint()` writes the raw
     day count into `.days` and `pad()`-ed hours/minutes/seconds
     (`pad = n => ('0'+n).slice(-2)`), runs once immediately and then every
     1000 ms, and clears its interval when the remaining time hits 0; elements
     already containing a `.flip-clock-wrapper` are skipped.

## Design tokens

| Token                 | Value                                                                                                                                                                                                                         | Where                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| wash gradient (page)  | `#b224ef` (bottom) → `#7579ff` (top) — source `linear-gradient(bottom, #b224ef, #7579ff)` (legacy `bottom` = "starting at the bottom" ⇒ modern `to top`)                                                                      | full-viewport overlay over the photo                                          |
| wash fallback         | `#7579ff`                                                                                                                                                                                                                     | background-color behind the gradient                                          |
| wash opacity          | `0.9`                                                                                                                                                                                                                         | overlay layer over the photograph                                             |
| page photograph       | source `images/bg01.jpg` (1900×900 blurred office interior) — recreation uses `https://picsum.photos/seed/imminent-bg/1900/900`                                                                                               | full-viewport background, `cover` centred                                     |
| brand green           | `#57b846`                                                                                                                                                                                                                     | Subscribe button fill, social-button hover fill, typed e-mail text            |
| button hover          | gradient `to bottom` `#b224ef` → `#7579ff` at `opacity:1`, green fill → `transparent`                                                                                                                                         | Subscribe hover (over `.4s`)                                                  |
| social button         | `#fff` fill, radius 50%, icon `#999999` 18px                                                                                                                                                                                  | top-right discs                                                               |
| social hover          | fill `#57b846`, icon `#fff`                                                                                                                                                                                                   | over `.4s`                                                                    |
| countdown ring        | `1px solid rgba(255,255,255,0.3)`, radius 50%, `155×155px`                                                                                                                                                                    | four rings                                                                    |
| countdown digit       | `#fff` Poppins-Bold 40px, `line-height:1`, 9px below                                                                                                                                                                          | inside each ring                                                              |
| countdown label       | `#fff` Poppins-Regular 12px, `line-height:1`                                                                                                                                                                                  | inside each ring                                                              |
| copy line / bold run  | `#fff` Poppins-Regular 36px/1.333333 with an inline Poppins-Bold 36px/1.333333 span                                                                                                                                           | centred column                                                                |
| input fill            | `#fff`                                                                                                                                                                                                                        | Subscribe field                                                               |
| input text            | `#57b846`                                                                                                                                                                                                                     | typed value (Poppins-Regular 16px)                                            |
| placeholder           | `#999999`                                                                                                                                                                                                                     | field placeholder (all vendor variants)                                       |
| note                  | `#e5e5e5`                                                                                                                                                                                                                     | spam note (Poppins-Regular 12px/1.333333)                                     |
| focus bloom           | ring `rgba(87,184,70,0.6)`, animating to `box-shadow:0 0 80px 30px` + `opacity:0`                                                                                                                                             | focused field                                                                 |
| error red             | `#c80000`                                                                                                                                                                                                                     | validation bubble border/text/icon                                            |
| fonts                 | Poppins-Regular (copy 36px, input 16px, button 16px, labels 12px, note 12px, bubble 15px), Poppins-Bold (the "Coming Soon" run 36px, digits 40px)                                                                             | typography                                                                    |
| radii                 | 50% (social buttons, countdown rings), 0px everywhere else (input, button, bubble)                                                                                                                                            | shapes                                                                        |
| screen                | `width:100%`, `min-height:100vh`, NO padding on the washed wrapper; the padded child is `min-height:100vh` with `padding:30px 15px 50px`; photo `cover` centred + wash overlay at 90%                                         | layout                                                                        |
| top bar               | wrapping space-between row, items centred, `padding:0 60px 165px 75px` (≤576px `0 0 65px 5px`); logo wrapper `flex-grow:1` + 30px right margin; social row 5px right / 3px vertical margins                                   | top of screen                                                                 |
| content column        | `max-width:700px`, auto side margins                                                                                                                                                                                          | middle of screen                                                              |
| copy line             | Poppins-Regular 36px/1.333333 white centred, 60px below                                                                                                                                                                       | content column                                                                |
| form row              | wrapping, centre-justified, 100% wide, 20px below both children                                                                                                                                                               | content column                                                                |
| input well            | `width:490px` (`max-width:100%`), `position:relative`                                                                                                                                                                         | form row                                                                      |
| input field           | `height:50px`, `background:#fff`, `padding:0 25px`, no radius, Poppins-Regular 16px `#57b846`, `#999999` placeholder                                                                                                          | form row                                                                      |
| subscribe button      | `min-width:170px`, `height:50px`, `padding:0 20px`, `background:#57b846`, Poppins-Regular 16px white label, `transition:all .4s`                                                                                              | form row                                                                      |
| note                  | Poppins-Regular 12px/1.333333 `#e5e5e5`, centred, 5px above                                                                                                                                                                   | content column                                                                |
| countdown container   | wrapping, centre-justified, `max-width:700px`, auto side margins, `padding-top:116px`                                                                                                                                         | lower third                                                                   |
| countdown ring        | `155×155px`, `border:1px solid rgba(255,255,255,0.3)`, `border-radius:50%`, 10px side / 15px bottom margins, column with both axes centred                                                                                    | lower third                                                                   |
| countdown behaviour   | target `now + 35 d + 18 h` (the configured `new Date(0,-1,35,…)` is always past); 1 s tick; days raw, h/m/s zero-padded; immediate first paint; interval cleared at 0                                                         | lower third                                                                   |
| validation bubble     | white fill, `1px solid #c80000`, `border-radius:0px`, `padding:5px 30px 6px 10px`, `max-width:70%`, right 12px, vertically centred, Poppins-Regular 15px/1.4 `#c80000`, opacity over `.4s`; icon 16px `#c80000` at right 18px | error state                                                                   |
| validation visibility | hidden by default; shown on field hover; always shown at ≤992px                                                                                                                                                               | error state                                                                   |
| attribution           | Poppins-Regular 12–13px `#e5e5e5`/`#fff` centred line under the note                                                                                                                                                          | footer requirement (ADDED vs the reference — the source has no footer credit) |

## Requirements

### Feature: Full-viewport photo screen with brand wash

The page is one screen, not a scrolling site: a background photograph covered by
a 90%-opacity magenta→indigo gradient, with the padding carried by an inner
`min-height:100vh` box rather than by the washed wrapper.

#### Scenario: Page renders as one washed photo screen

- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a single washed wrapper occupies `width:100%; min-height:100vh` with
  NO padding of its own
- **And** its background is a photographic image (`cover`, centred, no-repeat)
  filling the whole screen
- **And** a `linear-gradient(to top, #b224ef, #7579ff)` layer at `opacity:0.9`
  sits over the photograph — indigo `#7579ff` at the top easing to magenta
  `#b224ef` at the bottom, exactly as the screenshot shows — with `#7579ff` as
  the solid fallback behind it and the photograph ghosting through
- **And** the wrapper's FIRST child is a second `min-height:100vh` box carrying
  `padding:30px 15px 50px`, and it stacks the top bar, then the content column,
  then the countdown, in that order
- **And** there is NO navbar, NO scrolling section and NO footer band below them

### Feature: Top bar (wordmark + round social buttons)

The brand mark sits top-left, three round white social buttons top-right, on one
wrapping space-between row.

#### Scenario: Top bar renders the reference row

- **Given** the screen renders
- **When** the top bar is visible
- **Then** it renders as ONE wrapping row with `justify-content:space-between`
  and vertically centred items, carrying `padding:0 60px 165px 75px` (5px left /
  0 right / 65px bottom at ≤576px)
- **And** its first child is a brand wordmark link (a text wordmark in
  Poppins-Bold white, grown to fill the space with a 30px right margin) whose
  asset is NEVER the source PNG — no copied logo file, and never the source's
  "UNO." mark
- **And** its second child is a wrapping row of exactly three social buttons,
  each `36×36px` with `background:#fff`, `border-radius:50%` (a filled white
  disc — this slug has no outline/square treatment), a 18px `#999999` icon and
  a 5px right margin
- **And** each social button carries an `aria-label` (facebook / twitter /
  youtube) and renders a lucide-react icon (`Facebook`, `Twitter`, `Youtube`)
  instead of the source FontAwesome/inlined-SVG glyphs
- **And** hovering a social button over `.4s` swaps to `background:#57b846`
  while the icon turns white

### Feature: Centred headline line

One 36px sentence, centred, with only the two middle words in bold.

#### Scenario: Copy renders with the reference typography

- **Given** the screen renders
- **When** the content column is visible
- **Then** it renders ONE centred line — "Our website is **Coming Soon**,
  follow us for update now!"-equivalent copy — in Poppins-Regular 36px/1.333333
  white, with the equivalent of "Coming Soon" as an inline Poppins-Bold
  36px/1.333333 white `span` (not a separate heading element, and not a
  different size)
- **And** the line carries 60px of space below it
- **And** the column itself is `max-width:700px` with auto side margins
- **And** the copy is the same _kind_ as the source (paraphrasable) and never
  reuses the source demo title "Coming Soon 7"

### Feature: Inline subscribe form

A 490px white field and a 170px green button sitting side by side in one centred
row, with a small note under them.

#### Scenario: Form renders the reference one-row layout

- **Given** the screen renders
- **When** the form is visible
- **Then** it renders as ONE wrapping, centre-justified row 100% wide, holding
  the e-mail well and the button (each with 20px below it)
- **And** the well is `width:490px` capped at `max-width:100%` and
  `position:relative`
- **And** its field is `height:50px`, `background:#fff`, `padding:0 25px`,
  SQUARE-cornered (no radius), Poppins-Regular 16px `#57b846` typed text
  (brand green, as in the reference) with a `#999999` placeholder reading
  "Email Address"-equivalent copy
- **And** the button is `min-width:170px`, `height:50px`, `padding:0 20px`,
  `background:#57b846`, labelled "Subscribe" in Poppins-Regular 16px white
- **And** at desktop width the field and the button share ONE centred row (the
  field is not full width and neither child wraps)
- **And** the row is followed by a centred Poppins-Regular 12px/1.333333
  `#e5e5e5` note 5px below it ("And don't worry, we hate spam too! You can
  unsubscribe at anytime."-equivalent)

#### Scenario: Focus and hover match the reference

- **Given** the form renders
- **When** the field receives focus
- **Then** an absolutely-positioned ring behind it plays
  `anim-shadow 0.5s ease-in-out forwards`, tinted `rgba(87,184,70,0.6)`, ending
  at `box-shadow:0 0 80px 30px` with `opacity:0`
- **And** hovering the button over `.4s` turns its `#57b846` fill transparent
  and fades in a `linear-gradient(to bottom, #b224ef, #7579ff)` layer at
  `opacity:1` behind the (still white) label, so the label stays legible
  throughout

#### Scenario: Form validates as in the reference

- **Given** the form renders
- **When** the user submits with a missing or malformed e-mail
- **Then** the well reveals a white bubble carrying its message
  (`1px solid #c80000`, `border-radius:0px`, `padding:5px 30px 6px 10px`,
  `max-width:70%`, right 12px and vertically centred, Poppins-Regular 15px/1.4
  `#c80000`) plus a lucide `AlertTriangle` glyph (`#c80000`, 16px, right 18px)
  replacing the source FontAwesome `\f071` triangle
- **And** the bubble follows the source visibility rule — hidden until an
  invalid submit, then visible while that field is hovered and ALWAYS visible at
  ≤992px — and clears on focus
- **And** the field accepts the source pattern
  `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` (the source marks it `type=text` and relies
  on that name-based check)
- **And** an invalid submit never navigates, and a valid submit is accepted as
  React state showing a confirmation (the source has no success path at all)

### Feature: Circular countdown

Four 155px outlined circles, each with a big white digit over a small label.

#### Scenario: Clock renders the four reference rings

- **Given** the screen renders
- **When** the countdown is visible
- **Then** it renders as ONE wrapping, centre-justified row `max-width:700px`
  with auto side margins and 116px of padding above it (the gap below the note)
- **And** it holds exactly FOUR rings, each `155×155px` with
  `border:1px solid rgba(255,255,255,0.3)`, `border-radius:50%`, 10px side and
  15px bottom margins, laid out as a centred column
- **And** each ring renders a digit in Poppins-Bold 40px/1 white with 9px below
  it and a label in Poppins-Regular 12px/1 white, in the order days, hours,
  minutes, seconds (`Days` / `Hours` / `Minutes` / `Seconds`)
- **And** no ring, digit, label or separator borrows the source's static DOM
  values as its content — the values come from the live countdown

#### Scenario: Clock counts down like the reference

- **Given** the countdown is mounted
- **When** it first paints and then a second elapses
- **Then** the target is `now + 35 days + 18 hours` (the source's configured
  `new Date(0, -1, 35, 18, 0, 0)` is always in the past, so the fallback target
  is what runs and the clock never reads all zeros)
- **And** the day value is written RAW (no zero padding) while hours, minutes
  and seconds are zero-padded to two digits
- **And** the values repaint immediately on mount and then once per second, and
  the interval is cleared on unmount and when the remaining time reaches 0

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4 `@theme`
tokens.

#### Scenario: Theme tokens match the reference

- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: wash stops `#b224ef` (bottom) / `#7579ff`
  (top) with the `#7579ff` solid fallback at 90% opacity, brand green `#57b846`
  with the `#b224ef → #7579ff` hover gradient, countdown ring
  `rgba(255,255,255,0.3)`, social icon `#999999`, input fill `#fff`, input text
  `#57b846`, placeholder `#999999`, note `#e5e5e5`, focus bloom
  `rgba(87,184,70,0.6)`, error `#c80000`
- **And** Poppins (400 / 700) loads via a Google Fonts `<link>` in
  `index.html` (this slug has NO Aldrich and no monospace face)
- **And** shapes are radius 50% (social buttons, countdown rings) and 0px
  (input, button, validation bubble); transitions are `all .4s` (social
  buttons, button, hover wash) and `opacity .4s` (bubble); the bloom is
  `0.5s ease-in-out`

### Feature: Footer attribution

The reference has no footer credit; the monorepo requires a Component Dock
attribution, so a small line is added under the spam note.

#### Scenario: Attribution links Component Dock

- **Given** the page renders
- **When** the attribution line is visible
- **Then** it renders in Poppins-Regular 12–13px, centred, directly under the
  spam note, and reads a Component-Dock attribution (e.g. "More templates at
  Component Dock") linking `https://www.componentdock.com/`, branded
  "Component Dock"
- **And** it never mentions ColorLib, "Colorlib", the source demo title, the
  source credit line or the source slug
- **And** it is the ONLY addition to the reference layout (documented as a
  deliberate deviation in the spec and PR)

## Verification checklist

- [ ] Layout 1:1 with the reference: one `min-h-screen` washed wrapper with NO
      padding of its own, a photo background (`cover`, centred) and a `to top`
      `#b224ef → #7579ff` overlay at `opacity:0.9` with the `#7579ff` fallback;
      inside it a second `min-h-screen` box with `padding:30px 15px 50px`
      stacking top bar → content column → countdown; no navbar, no footer band
- [ ] Block order matches: top bar (wordmark → three round social buttons) →
      centred 36px copy line → one-row subscribe form → spam note → four
      countdown rings
- [ ] Top bar: wrapping space-between, items centred, `padding:0 60px 165px
    75px` (5 / 0 / 65 at ≤576px); wordmark is an original text mark (never the
      source "UNO." PNG), grown with a 30px right margin; three `36×36px`
      `background:#fff` `border-radius:50%` discs with 18px `#999999` lucide
      icons, 5px right / 3px vertical margins, `aria-label`s, hover
      `background:#57b846` + white icon over `.4s`
- [ ] Copy line: ONE centred Poppins-Regular 36px/1.333333 white sentence with
      an inline Poppins-Bold 36px/1.333333 white span for the "Coming Soon"
      words, `padding-bottom:60px`, inside a `max-w-[700px] mx-auto` column
- [ ] Form row: wrapping, centre-justified, 100% wide, BOTH children with 20px
      below; field well `w-[490px] max-w-full relative`; field `h-[50px]`
      `bg-white` `px-[25px]` with NO radius, Poppins-Regular 16px `#57b846`
      text and a `#999999` placeholder; button `min-w-[170px] h-[50px]`
      `px-[20px]` `bg-[#57b846]` with a Poppins-Regular 16px white "Subscribe"
      label; on desktop both sit in ONE centred row
- [ ] Focus bloom: absolutely-positioned ring behind the field,
      `rgba(87,184,70,0.6)`, animating over `.5s ease-in-out` to
      `box-shadow:0 0 80px 30px` with `opacity:0`
- [ ] Button hover: green fill → `transparent`, with a
      `linear-gradient(to bottom, #b224ef, #7579ff)` layer fading in at
      `opacity:1` over `.4s`; label stays white and readable
- [ ] Note: Poppins-Regular 12px/1.333333 `#e5e5e5`, centred, 5px above
- [ ] Countdown: wrapping centre-justified `max-w-[700px] mx-auto` row with
      `pt-[116px]`; FOUR `155×155px` rings, `1px solid rgba(255,255,255,0.3)`,
      `border-radius:50%`, 10px side / 15px bottom margins, centred columns;
      digit Poppins-Bold 40px/1 white with 9px below; label Poppins-Regular
      12px/1 white; order days → hours → minutes → seconds
- [ ] Countdown behaviour: 1 s tick toward `now + 35 d + 18 h`; days written raw
      while h/m/s are zero-padded; first paint immediate; interval cleared on
      unmount and at zero remaining
- [ ] Validation: invalid/empty e-mail → white bubble (`1px solid #c80000`,
      radius 0px, `padding 5px 30px 6px 10px`, `max-width:70%`, right 12px,
      Poppins-Regular 15px `#c80000`) with a lucide `AlertTriangle` (16px
      `#c80000`, right 18px); hidden until an invalid submit, then visible on
      field hover and always at ≤992px; cleared on focus; invalid submit never
      navigates; valid submit shows a React-state confirmation
- [ ] Poppins (400 / 700) via Google Fonts `<link>`; radii 50% / 0px;
      transitions `.4s` (all), `.4s` (opacity), `.5s ease-in-out` (bloom)
- [ ] Placeholder photograph used is `picsum.photos/seed/imminent-bg/1900/900`;
      icons are lucide-react only; no copied assets, logo PNG, photo, font files
      or CSS; no jQuery, no framework, no CDN runtime
- [ ] Component Dock attribution links `https://www.componentdock.com/`
      (Poppins-Regular 12–13px, centred under the note)
- [ ] Zero `colorlib` / source-demo-title / `comingsoon_07` references anywhere
      in `apps/imminent` (comments included)
- [ ] App folder `apps/imminent`, package `@free-react-templates/imminent`,
      `homepage` `https://imminent.free.componentdock.com`, `public/CNAME`
      `imminent.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh imminent` passes
