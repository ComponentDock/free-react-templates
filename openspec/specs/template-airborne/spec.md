# Template: Airborne (Coming Soon / Under Construction)

## Purpose

Airborne is a single-screen coming-soon / under-construction page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Coming Soon V06" template (source slug `comingsoon_06` — one full-viewport
screen: a hot-air-balloon photograph under a blue→green gradient wash (blue
`#009efd` at the top, green `#2af598` at the bottom, 80% opacity), the brand
wordmark top-left and three square outlined social buttons top-right, then a
two-column band — on the left an uppercase "our website is" line over a heavy
uppercase "coming soon" headline over an eight-card dark-navy FLIP-CLOCK
countdown (`35 : 17 : 59 : 57`, white Aldrich digits, white colons, tiny
uppercase `DAYS / HRS / MIN / SEC` labels), and on the right a white 390px
rounded "Newsletter" card with two centred grey pill inputs (Name, Email) and a
full-width green `#00b26f` pill "Subscribe" button over a small spam note),
built under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_06/
  (page title "Coming Soon V06 - Free Website Template 2026 - Colorlib",
  HTTP 200, 109,293 B, verified 2026-10-11)
- **Preview:** https://preview.colorlib.com/theme/comingsoon_06/ returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same
  live-preview gap as the rest of the `comingsoon_*` family), so the live
  preview DOM is unreachable for this slug. Fallback (documented per
  `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_06.zip`
  (HTTP 200, 384,899 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs06/ex/comingsoon_06/` — `index.html` (8,665 B), `css/style.css`
  (24,277 B), `js/snippet.js` (2,522 B), `README.md` (1,260 B),
  `images/bg01.jpg` (1900×900, 252,921 B), `images/icons/logo.png` (52×29),
  `images/icons/favicon.ico`, and the `fonts/Aldrich-Regular.woff2` /
  `Poppins-Regular.woff2` / `Poppins-Bold.woff2` trio plus a 524 B FontAwesome
  subset. That zip (the real rendered template's own files) is the DOM/CSS/JS
  reference, together with the TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-6.jpg
  (served as AVIF, 1200×972, converted to PNG with `avifdec` and reviewed
  visually 2026-10-11)
- **New name:** `airborne` (apps/airborne, `@free-react-templates/airborne`) —
  the source demo title "Coming Soon 6" / "Coming Soon V06", its PNG wordmark
  logo and its photo are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

The reference is one full-viewport screen, not a scrolling site. The screen
wrapper is `div.bg-img1.size1.overlay1.p-t-24` with an inline
`style="background-image:url('images/bg01.jpg')"`:
`.size1{width:100%; min-height:100vh}`,
`.bg-img1{background-position:center;background-repeat:no-repeat;background-size:cover}`
and `.p-t-24{padding-top:24px}` (the ONLY padding on the wrapper — there is no
side and no bottom padding, which is why the top bar is inset by its own 80px /
74px side padding and the newsletter card nearly touches the right edge of the
content band). `.overlay1{position:relative;z-index:1}` plus
`.overlay1::before{content:"";display:block;position:absolute;z-index:-1;
width:100%;height:100%;top:0;left:0;background:#30bab6;
background:linear-gradient(top,#009efd,#2af598);opacity:0.8}` paints the brand
wash OVER the photograph: `#30bab6` is the solid fallback that stands in where
the legacy-direction gradient declaration is dropped, and the rendered wash is
blue `#009efd` at the TOP easing to green `#2af598` at the BOTTOM (the legacy
`top` keyword means "starting at the top"), which is exactly what the
screenshot shows — a blue upper half sliding into a green lower half with the
balloon photograph ghosting through. The recreation must render the same
`to bottom` two-stop gradient at 80% opacity with the `#30bab6` fallback over a
placeholder photograph.

Inside the wrapper stand two bands. FIRST the top bar
`div.flex-w.flex-sb-m.p-l-80.p-r-74.p-b-175.respon5` — wrapping
(`flex-wrap:wrap`), `justify-content:space-between`, `align-items:center`, with
80px left / 74px right / 175px bottom padding (at ≤576px `.respon5` overrides
to 20px left / 14px right / 50px bottom): a `.wrappic1.m-r-30.m-t-10.m-b-10`
logo wrapper (`display:block; flex-grow:1`, 30px right margin) holding the
source PNG wordmark, and a `.flex-w.m-t-10.m-b-10` row of three social links
`a.size3.flex-c-m.how-social.trans-04.m-r-6` (`.size3{width:36px;height:36px}`,
`.how-social{color:#fff;font-size:22px;background-color:transparent;
border:2px solid #fff;border-radius:2px}`, `.how-social:hover{background-color:
#00b26f;color:#fff}`, `.trans-04{transition:all .4s}`, 6px right margin) whose
glyphs are FontAwesome `facebook` / `twitter` / `youtube-play` icons.

SECOND the body band `div.flex-w.flex-sa.p-r-200.respon1` — wrapping,
`justify-content:space-around` and 200px RIGHT padding (at ≤1400px `.respon1`
becomes `padding:15px`; at ≤1200px it becomes `flex-direction:column` +
`align-items:center`), which spreads its two children across the remaining
width:

- the left column `div.p-t-34.p-b-60.respon3` (34px top / 60px bottom padding;
  at ≤1200px `.respon3` becomes a centred flex column) holding, in order:
  `p.l1-txt1.p-b-10.respon2` — "Our website is" — Poppins-Regular 30px/1.2
  white UPPERCASE with 10px bottom padding; `h3.l1-txt2.p-b-45.respon2.respon4`
  — "Coming Soon" — Poppins-Bold 70px/1.1 white UPPERCASE with 45px bottom
  padding (at ≤576px `.respon4` drops it to 50px); and the countdown
  `div.cd100.flip-clock-wrapper`;
- the newsletter card `div.bg0.wsize1.bor1.p-l-45.p-r-45.p-t-50.p-b-18.p-lr-15-sm`
  — `.bg0{background-color:#fff}`, `.wsize1{width:390px;max-width:100%}`,
  `.bor1{border-radius:10px}`, 50px top / 45px left+right / 18px bottom padding
  (at ≤576px `.p-lr-15-sm` drops the side padding to 15px) — holding an
  `h3.l1-txt3.txt-center.p-b-43` "Newsletter" title (Poppins-Bold 30px/1.2
  `#333` UPPERCASE, centred, 43px bottom padding), a `form.w-full.validate-form`
  with the two input wells and the button, and the closing
  `p.s1-txt3.txt-center.p-l-15.p-r-15.p-t-25` spam note (Poppins-Regular
  13px/1.5 `#999`, centred, 15px side and 25px top padding).

The countdown is the family's only FLIP CLOCK. The source DOM holds EIGHT
`ul.flip` cards (two per unit: days 2, hours 2, minutes 2, seconds 2) plus four
`span.flip-clock-divider` elements (`.days`, `.hours`, `.minutes`, `.seconds`),
and the whole thing is a `.flip-clock-wrapper` = `display:flex; flex-wrap:wrap;
position:relative; max-width:100%; margin:0; margin-bottom:20px` (at ≤1200px
`justify-content:center`; at ≤576px `max-width:240px` + `margin-right:26px`).
Each card is `ul.flip` = `.flip-clock-wrapper ul{position:relative; margin:2px;
width:41px; height:54px; font-size:36px; border-radius:3px; background:#0d1629}`
with `margin-bottom:50px` on `.flip`, holding two stacked `li`
(`.flip-clock-before` z-index 3 / `.flip-clock-active` z-index 3→5) whose
`a > div.up` + `div.down` halves each carry a `.cl-shadow` overlay and a
`div.inn` digit — `font-family:Aldrich-Regular; color:#fff; font-size:35px;
background-color:#0d1629; border-radius:3px; height:200%`, centred with flex.
`.flip-clock-wrapper ul li a div.up:after` (the card's mid seam) is explicitly
`display:none` in this theme. Rather than the library labels, the theme prints
the separators and captions from the divider element:
`.flip-clock-divider{display:block;position:relative;width:26px;height:54px}`
with `::before{content:":"; font-family:Aldrich-Regular; color:#fff;
font-size:30px; ...centred}` — SUPPRESSED for `.days`
(`.flip-clock-divider.days::before{display:none}`) so the clock opens with the
day pair and no leading colon — and `::after{font-family:Poppins-Regular;
color:#fff; font-size:12px; text-transform:uppercase; text-align:center;
width:90px; position:absolute; left:100%; top:100%; padding-top:16px}` carrying
`content:"days"` / `"hrs"` / `"min"` / `"sec"` per divider class. Every span
inside a divider (`.flip-clock-label` and `.flip-clock-dot`) is hidden
(`.flip-clock-divider span{display:none}`), so the visible captions are only
those `::after` strings — which is why each caption in the screenshot sits
slightly to the RIGHT of its group, under the second digit and the colon.

The card flip is CSS-animated: on a change the `ul` gains `.play`, and then
`.flip-clock-wrapper ul.play li.flip-clock-active{animation:asd 0.5s 0.5s linear
both}` (a z-index keyframe 2 → 4), the ACTIVE card's lower half
`… li.flip-clock-active .down{animation:turn 0.5s 0.5s linear both}`
(`rotateX(90deg)` → `rotateX(0deg)`), the BEFORE card's upper half
`… li.flip-clock-before .up{animation:turn2 0.5s linear both}`
(`rotateX(0deg)` → `rotateX(-90deg)`), and the four shadow overlays fade through
`show 0.5s linear both` / `hide 0.5s 0.3s linear both` with
`linear-gradient(to bottom, rgba(0,0,0,0.1), black)` on the upper half and
`linear-gradient(to bottom, black, rgba(0,0,0,0.1))` on the lower half. The
eight cards are updated from one 1-second interval; h/m/s are zero-padded with
`('0'+n).slice(-2)`, the day pair is padded with
`String(d).padStart(Math.max(2, cards.length - 6), '0')` (i.e. 2 digits for the
8-card clock), the whole string is `all.slice(-cards.length)` split into digits,
and only the cards whose digit actually CHANGED are repainted and re-animated
(the source compares the currently shown `.inn` text before touching the DOM).

The form wells and button share the reference shapes: each well
`div.wrap-input100.validate-input` (`.m-b-10` on Name, `.m-b-20` on Email) is
`position:relative; width:100%; height:50px; z-index:1`, its
`input.input100.placeholder0.s1-txt1` is `display:block; width:100%;
background:#f5f5f5; height:100%; border-radius:25px; padding:0 20px;
text-align:center` in Poppins-Bold 15px/1.2 `#555` with a `#999999`
placeholder, its `span.focus-input100` is an absolutely-positioned
`border-radius:35px` ring (`box-shadow:0px 0px 0px 0px;
color:rgba(0,178,111,0.5)`) that on input focus plays
`anim-shadow 0.5s ease-in-out forwards` ending at
`box-shadow:0px 0px 80px 30px; opacity:0` — the green focus bloom — and the
submit is `button.flex-c-m.size2.s1-txt2.how-btn1.trans-04`
(`.size2{width:100%;height:50px}`, `.how-btn1{border-radius:25px;
background-color:#00b26f; padding-right:20px; padding-left:20px}`,
`.how-btn1:hover{background-color:#333333}`, Poppins-Bold 15px/1.2 white label
"Subscribe", `transition:all .4s`). The card closes with the
`p.s1-txt3` spam note.

The palette is a blue→green brand wash over a photograph plus dark navy clock
cards and one green action colour: wash gradient `#009efd` (top) → `#2af598`
(bottom) with `#30bab6` solid fallback at `opacity:0.8`; brand green `#00b26f`
(Subscribe button, social hover) with `#333333` as its hover; clock card
`#0d1629` with white `#fff` Aldrich digits, white colons and white 12px
captions; card `#fff` with `#333` title, `#f5f5f5` input fill, `#555` input
text, `#999999` placeholder and note `#999`; validation red `#c80000`.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V06" (source:
  https://colorlib.com/wp/template/comingsoon_06/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3037; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/airborne` absent, TEMPLATES.md line 3037 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_06/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11), so the
  live preview DOM could not be parsed. Fallback used (documented): the
  official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_06.zip` (HTTP 200,
  384,899 B, `application/zip`), downloaded and extracted to
  `/tmp/cs06/ex/comingsoon_06/`. Reference artifacts: `/tmp/cs06/cs06.zip`,
  `/tmp/cs06/ex/comingsoon_06/`, `/tmp/coming-soon-6.png` (converted
  screenshot, 1200×972), `/tmp/cs06-bg01.png` (converted source photo,
  1900×900). Research date: 2026-10-11. The source HTML/CSS/JS is authoritative
  for section structure, copy, tokens, and behaviour.
- **Screenshot:** `coming-soon-6.jpg` (AVIF, converted and reviewed visually
  2026-10-11) confirms the layout: a photograph of hot-air balloons drifting
  over misty hills at sunrise, washed by a strong blue→green gradient (bright
  blue at the top edge, green at the bottom), with balloon silhouettes ghosting
  through; a small white wordmark top-left; three square white-outlined social
  buttons (facebook, twitter, youtube) top-right; mid-left an uppercase
  "OUR WEBSITE IS" over a very large heavy uppercase "COMING SOON"; directly
  below it the flip clock reading "35 : 17 : 59 : 57" as eight dark
  near-black-navy cards with white digits separated by white colons and tiny
  uppercase captions "DAYS", "HRS", "MIN", "SEC" sitting under each group; and
  on the right a white rounded card with a heavy uppercase "NEWSLETTER"
  heading, two full-width grey rounded inputs reading "Name" and "Email", a
  full-width green rounded "Subscribe" button, and a two-line grey note
  "And don't worry, we hate spam too! You can unsubscribe at anytime." No nav
  bar, no scrolling sections, no footer band.
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN dependency at runtime — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in)
  with three self-hosted `@font-face` blocks (Poppins-Regular, Poppins-Bold,
  Aldrich-Regular) and one FontAwesome subset face. The recreation uses
  Tailwind 4 + React state; the revert guard, the reboot, and all source class
  names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Screen: `.size1{width:100%; min-height:100vh}` and `.bg-img1` (cover,
    centre, no-repeat) on `div.bg-img1.size1.overlay1.p-t-24` with the inline
    background image and 24px of TOP padding only
  - Wash: `.overlay1::before{background:#30bab6; background:linear-gradient(
top,#009efd,#2af598); opacity:0.8}`, full-size, `z-index:-1` under the
    content, over the photo
  - Top bar: `.flex-w` (wrap) + `.flex-sb-m` (space-between + items-centre) +
    `.p-l-80.p-r-74.p-b-175`; `.respon5` at ≤576px → 20px left / 14px right /
    50px bottom; `.wrappic1{display:block; flex-grow:1}` + `.wrappic1 img{
max-width:100%}`; `.m-r-30`, `.m-t-10`, `.m-b-10`
  - Social buttons: `.size3{width:36px;height:36px}` + `.flex-c-m` (centre both
    axes) + `.how-social{color:#fff;font-size:22px;background-color:transparent;
border:2px solid #fff;border-radius:2px}` + `.how-social:hover{
background-color:#00b26f;color:#fff}` + `.m-r-6` + `.trans-04`
  - Body band: `.flex-w.flex-sa` (`justify-content:space-around`) +
    `.p-r-200` (200px right padding) + `.respon1` (≤1400px → `padding:15px`;
    ≤1200px → column + items-centre)
  - Left column: `.p-t-34.p-b-60` + `.respon3` (≤1200px → centred flex column)
  - Eyebrow: `.l1-txt1{font-family:Poppins-Regular; font-size:30px; color:#fff;
line-height:1.2; text-transform:uppercase}` + `.p-b-10` + `.respon2`
    (≤1200px → centred)
  - Headline: `.l1-txt2{font-family:Poppins-Bold; font-size:70px; color:#fff;
line-height:1.1; text-transform:uppercase}` + `.p-b-45` + `.respon2` +
    `.respon4` (≤576px → 50px)
  - Clock wrapper: `.flip-clock-wrapper{display:flex; flex-wrap:wrap;
position:relative; max-width:100%; margin:0; margin-bottom:20px}`
    (≤1200px → `justify-content:center`; ≤576px → `max-width:240px;
margin-right:26px`)
  - Clock card: `.flip-clock-wrapper ul{position:relative; margin:2px;
width:41px; height:54px; font-size:36px; border-radius:3px;
background:#0d1629}` with `.flip-clock-wrapper .flip{box-shadow:none;
margin-bottom:50px}`; digits `.flip-clock-wrapper ul li a div div.inn{
font-family:Aldrich-Regular; color:#fff; font-size:35px; background-color:
#0d1629; border-radius:3px; height:200%; display:flex; align-items:center;
justify-content:center; position:absolute; left:0; z-index:1; width:100%}`;
    mid seam `.flip-clock-wrapper ul li a div.up:after{display:none}`
  - Clock divider: `.flip-clock-divider{display:block; position:relative;
width:26px; height:54px}`; colon `::before{content:":";
font-family:Aldrich-Regular; color:#fff; font-size:30px; centred, full
size}` — hidden for `.days`; caption `::after{font-family:Poppins-Regular;
color:#fff; font-size:12px; text-transform:uppercase; text-align:center;
width:90px; position:absolute; left:100%; top:100%; padding-top:16px}`
    with `content:"days" | "hrs" | "min" | "sec"`; `.flip-clock-divider span{
display:none}` hides every inner label/dot span
  - Clock flip animation: `asd 0.5s 0.5s linear both` (z-index 2 → 4) on
    `ul.play li.flip-clock-active`; `turn 0.5s 0.5s linear both`
    (`rotateX(90deg)` → `rotateX(0deg)`) on its `.down`; `turn2 0.5s linear
both` (`rotateX(0deg)` → `rotateX(-90deg)`) on `ul.play li.flip-clock-before
.up`; shadow overlays `linear-gradient(to bottom, rgba(0,0,0,0.1), black)`
    upper / `linear-gradient(to bottom, black, rgba(0,0,0,0.1))` lower animated
    with `show 0.5s linear both` and `hide 0.5s 0.3s linear both` (0.2s in one
    duplicated declaration — the theme's lower-half hide delay)
  - Card: `.bg0{background-color:#fff}` + `.wsize1{width:390px; max-width:100%}`
    - `.bor1{border-radius:10px}` + `.p-l-45.p-r-45.p-t-50.p-b-18` +
      `.p-lr-15-sm` (≤576px → 15px side padding)
  - Card title: `.l1-txt3{font-family:Poppins-Bold; font-size:30px; color:#333;
line-height:1.2; text-transform:uppercase}` + `.txt-center` + `.p-b-43`
  - Input well: `.wrap-input100{position:relative; width:100%; height:50px;
z-index:1}` + `.validate-input{position:relative}`; field
    `.input100{display:block; width:100%; height:100%; background:#f5f5f5;
border-radius:25px; padding:0 20px; text-align:center}`; text
    `.s1-txt1{font-family:Poppins-Bold; font-size:15px; color:#555;
line-height:1.2}`; placeholder `#999999` (`.placeholder0` webkit/moz/ms
    variants)
  - Input focus bloom: `.focus-input100{position:absolute; bottom:0; left:0;
z-index:-1; width:100%; height:100%; border-radius:35px; box-shadow:0px 0px
0px 0px; color:rgba(0,178,111,0.5)}` +
    `.input100:focus + .focus-input100{animation:anim-shadow 0.5s ease-in-out
forwards}` + `@keyframes anim-shadow{to{box-shadow:0px 0px 80px 30px;
opacity:0}}`
  - Button: `.size2{width:100%; height:50px}` + `.flex-c-m` + `.s1-txt2{
font-family:Poppins-Bold; font-size:15px; color:#fff; line-height:1.2}` +
    `.how-btn1{border-radius:25px; background-color:#00b26f; padding-right:20px;
padding-left:20px}` + `.how-btn1:hover{background-color:#333333}` +
    `.trans-04` (`all .4s`)
  - Note: `.s1-txt3{font-family:Poppins-Regular; font-size:13px; color:#999;
line-height:1.5}` + `.txt-center` + `.p-l-15.p-r-15.p-t-25`
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
max-width:70%; background-color:#fff; border:1px solid #c80000;
border-radius:16px; padding:5px 30px 6px 10px; top:50%;
transform:translateY(-50%); right:12px; pointer-events:none;
font-family:Poppins-Bold; color:#c80000; font-size:12px; line-height:1.4;
text-align:left; visibility:hidden; opacity:0; transition:opacity .4s}` +
    `.alert-validate::after{content:"\f06a"; font-family:FontAwesome;
display:block; position:absolute; color:#c80000; font-size:16px; top:50%;
transform:translateY(-50%); right:18px}` + `.alert-validate:hover:before{
visibility:visible; opacity:1}` and, inside `@media (max-width:992px)`,
    `.alert-validate::before{visibility:visible; opacity:1}` — the recreation
    uses a lucide-react `AlertCircle` instead of the icon-font glyph
  - Base type: `body,html{font-family:Arial,sans-serif; font-size:15px;
color:#666666; height:100%; background-color:#fff}` (visible type is
    entirely Poppins/Aldrich); `input,textarea{display:block; outline:none;
border:none}`; `button{outline:none; border:none; background:transparent;
cursor:pointer}`; `ul,li{margin:0; list-style-type:none}`
  - Fonts (source, self-hosted woff2): Poppins-Regular (400), Poppins-Bold
    (700) and Aldrich-Regular (400, the clock digits and colons) — the
    recreation loads Poppins (400 / 700) and Aldrich (400) from Google Fonts
    via `<link>` in `index.html`
- **Content map (source DOM):**
  `div.bg-img1.size1.overlay1.p-t-24[style=background-image:url(bg01.jpg)]`
  containing, in order:
  1. `div.flex-w.flex-sb-m.p-l-80.p-r-74.p-b-175.respon5` —
     - `div.wrappic1.m-r-30.m-t-10.m-b-10 > a[href="#"] > img[src=
images/icons/logo.png][alt=LOGO]` (52×29 white wordmark)
     - `div.flex-w.m-t-10.m-b-10` — three
       `a.size3.flex-c-m.how-social.trans-04.m-r-6[href="#"] > i.fa.fa-facebook
| fa-twitter | fa-youtube-play` (inlined SVG glyphs)
  2. `div.flex-w.flex-sa.p-r-200.respon1` —
     - `div.p-t-34.p-b-60.respon3` — `p.l1-txt1.p-b-10.respon2` ("Our website
       is"); `h3.l1-txt2.p-b-45.respon2.respon4` ("Coming Soon");
       `div.cd100.flip-clock-wrapper` with 4 `span.flip-clock-divider`
       (`.days` (colon suppressed) / `.hours` / `.minutes` / `.seconds`, each
       holding a hidden `span.flip-clock-label` and two hidden
       `span.flip-clock-dot`) interleaved with 8 `ul.flip` cards, each card a
       `li.flip-clock-before` + `li.flip-clock-active` pair of
       `a[href="#"] > div.up|div.down > div.cl-shadow + div.inn` digits —
       DOM values 35 / 17 / 59 / 57
     - `div.bg0.wsize1.bor1.p-l-45.p-r-45.p-t-50.p-b-18.p-lr-15-sm` —
       `h3.l1-txt3.txt-center.p-b-43` ("Newsletter");
       `form.w-full.validate-form` with
       `div.wrap-input100.validate-input.m-b-10[data-validate="Name is
required"] > input.input100.placeholder0.s1-txt1[type=text][name=name]
[placeholder=Name] + span.focus-input100`, the same well with `.m-b-20`
       and `data-validate="Valid email is required: ex@abc.xyz"`
       (`[name=email][placeholder=Email]`), and
       `button.flex-c-m.size2.s1-txt2.how-btn1.trans-04` — "Subscribe";
       `p.s1-txt3.txt-center.p-l-15.p-r-15.p-t-25` — the spam note ("And don't
       worry, we hate spam too! You can unsubcribe at anytime." — the source's
       own spelling of "unsubscribe")
- **Behaviour (`js/snippet.js`, two framework-free features):**
  1. `.validate-form` submit validation — per field, e-mail fields (or any
     `name="email"`) must match `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`, other fields
     must be non-empty; a failure adds `.alert-validate` to the closest
     `.validate-input` and calls `preventDefault`; the class is removed on
     `focus`. There is NO success path in the source (a valid submit simply
     reloads the demo page) — the recreation shows a React-state confirmation
     instead and must not navigate.
  2. Flip clock on `.flip-clock-wrapper` (config `{"D":35,"h":18}`): the target
     is always `Date.now() + 35 days + 18 hours` (the source never has a past
     target, so it never reads zero); it ticks once per 1000 ms, differs the
     rendered digits, and for each CHANGED card copies the shown digit into
     `li.flip-clock-before .inn` and the new digit into
     `li.flip-clock-active .inn` before restarting the `play` class (forcing a
     reflow with `void ul.offsetWidth`) so the flip animation replays; the
     digit string is the 2-digit day pair + `p(h) + p(m) + p(s)` sliced to the
     card count.

## Design tokens

| Token                                                                | Value                                                                                                                                                                                                                                                                                                                                                  | Where                                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| wash gradient (page)                                                 | `#009efd` (top) → `#2af598` (bottom) — source `linear-gradient(top, #009efd, #2af598)` (legacy `top` = "to bottom")                                                                                                                                                                                                                                    | full-viewport overlay over the photo                                          |
| wash fallback                                                        | `#30bab6`                                                                                                                                                                                                                                                                                                                                              | background-color behind the gradient                                          |
| wash opacity                                                         | `0.8`                                                                                                                                                                                                                                                                                                                                                  | overlay layer over the photograph                                             |
| page photograph                                                      | source `images/bg01.jpg` (1900×900 hot-air balloons at sunrise) — recreation uses `https://picsum.photos/seed/airborne-bg/1900/900`                                                                                                                                                                                                                    | full-viewport background, `cover` centred                                     |
| brand green                                                          | `#00b26f`                                                                                                                                                                                                                                                                                                                                              | Subscribe button fill, social-button hover fill                               |
| button hover                                                         | `#333333`                                                                                                                                                                                                                                                                                                                                              | Subscribe hover fill                                                          |
| clock card                                                           | `#0d1629`                                                                                                                                                                                                                                                                                                                                              | eight flip cards and their digits                                             |
| card surface                                                         | `#fff`                                                                                                                                                                                                                                                                                                                                                 | newsletter card                                                               |
| card title                                                           | `#333`                                                                                                                                                                                                                                                                                                                                                 | "Newsletter" (30px bold uppercase), "Coming Soon" headline is white           |
| input fill                                                           | `#f5f5f5`                                                                                                                                                                                                                                                                                                                                              | Name / Email pills                                                            |
| input text                                                           | `#555`                                                                                                                                                                                                                                                                                                                                                 | typed values (Poppins-Bold 15px)                                              |
| placeholder / note                                                   | `#999999` / `#999`                                                                                                                                                                                                                                                                                                                                     | placeholders and the spam note                                                |
| eyebrow / headline / clock digits / colons / captions / social icons | `#fff`                                                                                                                                                                                                                                                                                                                                                 | left column + top bar over the wash                                           |
| focus bloom                                                          | `rgba(0,178,111,0.5)` ring, animating to `box-shadow:0 0 80px 30px` + `opacity:0`                                                                                                                                                                                                                                                                      | focused input                                                                 |
| error red                                                            | `#c80000`                                                                                                                                                                                                                                                                                                                                              | validation bubble border/text/icon                                            |
| fonts                                                                | Poppins-Regular (eyebrow 30px, captions 12px, note 13px), Poppins-Bold (headline 70px→50px, card title 30px, inputs/button 15px, bubble 12px), Aldrich-Regular (digits 35px, colons 30px)                                                                                                                                                              | typography                                                                    |
| radii                                                                | 25px (inputs, button), 3px (flip cards + digits), 10px (newsletter card), 2px (social buttons), 35px (focus bloom ring), 16px (validation bubble)                                                                                                                                                                                                      | shapes                                                                        |
| screen                                                               | `width:100%`, `min-height:100vh`, `padding-top:24px` (NO side/bottom padding), photo `cover` centred + wash overlay at 80%                                                                                                                                                                                                                             | layout                                                                        |
| top bar                                                              | wrapping space-between row, items centred, `padding 0 74px 175px 80px` (≤576px `20px / 14px / 50px`); logo wrapper `flex-grow:1` + 30px right margin; social row 6px gaps                                                                                                                                                                              | top of screen                                                                 |
| social button                                                        | `36×36px`, `2px solid #fff`, radius 2px, transparent fill, 22px white icon, `transition:all .4s`, hover `background:#00b26f`                                                                                                                                                                                                                           | top right                                                                     |
| body band                                                            | wrapping `space-around` row, `padding-right:200px` (≤1400px `padding:15px`; ≤1200px column centred)                                                                                                                                                                                                                                                    | middle of screen                                                              |
| left column                                                          | `padding:34px 0 60px` (≤1200px centred flex column)                                                                                                                                                                                                                                                                                                    | left of the band                                                              |
| eyebrow                                                              | Poppins-Regular 30px/1.2 white uppercase, 10px bottom padding                                                                                                                                                                                                                                                                                          | left column                                                                   |
| headline                                                             | Poppins-Bold 70px/1.1 white uppercase (≤576px 50px), 45px bottom padding                                                                                                                                                                                                                                                                               | left column                                                                   |
| clock wrapper                                                        | wrapping flex, `max-width:100%`, `margin:0 0 20px` (≤1200px centred; ≤576px `max-width:240px` + 26px right margin)                                                                                                                                                                                                                                     | left column                                                                   |
| clock card                                                           | `41×54px`, `margin:2px`, radius 3px, `#0d1629`; wrapper cards `margin-bottom:50px`; no mid seam; Aldrich-Regular 35px white digits, flex-centred                                                                                                                                                                                                       | countdown                                                                     |
| clock divider                                                        | `26×54px` inline block; colon `":"` Aldrich-Regular 30px white centred (absent before the day group); caption Poppins-Regular 12px white uppercase, `width:90px`, positioned at `left:100%; top:100%` with `padding-top:16px` and centred text — `days` / `hrs` / `min` / `sec`                                                                        | countdown                                                                     |
| clock animation                                                      | change → `.play`: active lower half `turn 0.5s 0.5s linear both` (`rotateX(90deg)`→`0`), before upper half `turn2 0.5s linear both` (`rotateX(0)`→`-90deg`), z-index `asd 0.5s 0.5s linear both`; shadows `linear-gradient(to bottom, rgba(0,0,0,0.1), black)` / `(to bottom, black, rgba(0,0,0,0.1))` with `show 0.5s` + `hide 0.5s 0.3s linear both` | countdown                                                                     |
| clock behaviour                                                      | target `now + 35 d + 18 h`; 1 s tick; day pair + `hh`+`mm`+`ss` all 2 digits; only changed cards repaint and re-flip; interval cleared on unmount                                                                                                                                                                                                      | countdown                                                                     |
| newsletter card                                                      | `width:390px` (`max-width:100%`), `background:#fff`, radius 10px, `padding:50px 45px 18px` (≤576px side padding 15px)                                                                                                                                                                                                                                  | right of the band                                                             |
| card title                                                           | Poppins-Bold 30px/1.2 `#333` uppercase, centred, 43px bottom padding                                                                                                                                                                                                                                                                                   | card                                                                          |
| input well                                                           | `width:100%`, `height:50px`, `position:relative`; Name `margin-bottom:10px`, Email `margin-bottom:20px`                                                                                                                                                                                                                                                | card                                                                          |
| input field                                                          | `width/height:100%`, `background:#f5f5f5`, radius 25px, `padding:0 20px`, TEXT CENTRED, Poppins-Bold 15px/1.2 `#555`, `#999999` placeholder                                                                                                                                                                                                            | card                                                                          |
| focus bloom                                                          | ring `radius:35px`, `color:rgba(0,178,111,0.5)`, `box-shadow:0 0 0 0` → `anim-shadow 0.5s ease-in-out forwards` ending `box-shadow:0 0 80px 30px; opacity:0`                                                                                                                                                                                           | focused field                                                                 |
| subscribe button                                                     | `width:100%`, `height:50px`, `padding:0 20px`, `background:#00b26f`, radius 25px, white Poppins-Bold 15px/1.2 label, `transition:all .4s`, hover `#333333`                                                                                                                                                                                             | card                                                                          |
| spam note                                                            | Poppins-Regular 13px/1.5 `#999`, centred, `padding:25px 15px 0`                                                                                                                                                                                                                                                                                        | card footer                                                                   |
| validation bubble                                                    | white fill, `1px solid #c80000`, radius 16px, `padding:5px 30px 6px 10px`, right 12px, vertically centred, `max-width:70%`, Poppins-Bold 12px/1.4 `#c80000`, opacity over `.4s`; icon 16px `#c80000` at right 18px                                                                                                                                     | error state                                                                   |
| validation visibility                                                | hidden by default; shown on field hover; always shown at ≤992px                                                                                                                                                                                                                                                                                        | error state                                                                   |
| attribution                                                          | Poppins-Regular 12–13px `#999` centred line inside the card, under the note                                                                                                                                                                                                                                                                            | footer requirement (ADDED vs the reference — the source has no footer credit) |

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_06/index.html` | HTTP 200 · 8,733 B · title `Coming Soon 6` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_06/css/style.css?v=c14aad75` | HTTP 200 · 24,277 B · sha256 `ef21f5430c52` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×15,
`#999999`×5, `#000000`×4, `#009efd`×4, `#2af598`×4, `#333333`×3,
`#c80000`×3, `#cccccc`×2, `#0d1629`×2, `#00b26f`×2.

**Low-chroma values the sheet actually uses** — `#999999`, `#333333`,
`#cccccc`, `#212529`; any sampled Tailwind grey above is an approximation of
these.

## Requirements

### Feature: Full-viewport photo screen with brand wash

The page is one screen, not a scrolling site: a background photograph covered by
an 80%-opacity blue→green gradient with 24px of top padding only.

#### Scenario: Page renders as one washed photo screen

- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a single wrapper occupies `width:100%; min-height:100vh` with 24px of
  TOP padding and NO side or bottom padding
- **And** its background is a photographic image (`cover`, centred,
  no-repeat) filling the whole screen
- **And** a `linear-gradient(to bottom, #009efd, #2af598)` layer at `opacity:0.8`
  sits over the photograph — blue `#009efd` at the top easing to green
  `#2af598` at the bottom, exactly as the screenshot shows — with `#30bab6` as
  the solid fallback behind it and the photograph ghosting through
- **And** the wrapper stacks the top bar and the body band, in that order, and
  there is NO navbar, NO scrolling section and NO footer band below them

### Feature: Top bar (wordmark + social buttons)

The brand mark sits top-left, three square outlined social buttons top-right, on
one wrapping space-between row.

#### Scenario: Top bar renders the reference row

- **Given** the screen renders
- **When** the top bar is visible
- **Then** it renders as ONE wrapping row with
  `justify-content:space-between` and vertically centred items, carrying
  `padding:0 74px 175px 80px` (20px left / 14px right / 50px bottom at ≤576px)
- **And** its first child is a brand wordmark link (a text wordmark in
  Poppins-Bold white, grown to fill the space with a 30px right margin) whose
  asset is NEVER the source PNG — no copied logo file
- **And** its second child is a wrapping row of exactly three square social
  buttons (`36×36px`), each `background:transparent`,
  `border:2px solid #fff`, `border-radius:2px`, with a 22px white icon and a
  6px right margin
- **And** each social button carries an `aria-label` (Facebook / Twitter /
  Youtube) and renders an inline SVG brand glyph instead of the source
  FontAwesome icon font — lucide-react dropped its brand icons, so the paths
  live in a local `SocialIcon.tsx` (the same deviation other templates in this
  repo take)
- **And** hovering a social button over `.4s` swaps to `background:#00b26f`
  while the icon stays white

### Feature: Headline block

An uppercase eyebrow and a heavy uppercase headline in the left column.

#### Scenario: Eyebrow and headline render with the reference typography

- **Given** the screen renders
- **When** the left column is visible
- **Then** a line renders "Our website is"-equivalent copy in
  Poppins-Regular 30px/1.2 white, UPPERCASE, with 10px bottom padding
- **And** beneath it a heading renders "Coming Soon"-equivalent copy in
  Poppins-Bold 70px/1.1 white, UPPERCASE, dropping to 50px at ≤576px, with 45px
  bottom padding
- **And** the left column itself carries `padding:34px 0 60px` and becomes a
  centred flex column at ≤1200px
- **And** the copy is the same _kind_ as the source (paraphrasable) and never
  reuses the source demo title "Coming Soon 6" / "Coming Soon V06"

### Feature: Flip-clock countdown

Eight dark navy flip cards with white Aldrich digits, white colon dividers and
tiny uppercase captions — the family's only flip clock.

#### Scenario: Clock renders the reference cards, colons and captions

- **Given** the screen renders
- **When** the countdown is visible
- **Then** it renders as ONE wrapping flex row `max-width:100%` with 20px below
  it (centred at ≤1200px; `max-width:240px` + 26px right margin at ≤576px)
- **And** it holds EIGHT cards (`41×54px`, `margin:2px`, `border-radius:3px`,
  `background:#0d1629`, 50px below each card row) in four digit groups of two —
  days, hours, minutes, seconds — each showing an Aldrich-Regular 35px white
  digit, flex-centred, on `#0d1629`
- **And** between the groups sit white colons (`":"`, Aldrich-Regular 30px,
  centred in a `26×54px` divider) — with NO colon before the day group
- **And** under each group sits a Poppins-Regular 12px white UPPERCASE caption —
  `days`, `hrs`, `min`, `sec` — in a 90px block anchored at the divider's
  `left:100%` / `top:100%` with 16px top padding, so each caption sits to the
  RIGHT of its group exactly as the screenshot shows
- **And** the cards carry NO mid seam (source hides the `up:after` divider) and
  the clock shows no dots

#### Scenario: Clock flips changed cards and never reads zero

- **Given** the clock renders
- **When** a second elapses
- **Then** only the cards whose digit changed are repainted, and each of those
  plays the source flip: the active card's lower half `rotateX(90deg) → 0` over
  `0.5s` `linear` with a `0.5s` delay, the previous card's upper half
  `rotateX(0) → -90deg` over `0.5s` `linear`, and both shadow overlays
  (`linear-gradient(to bottom, rgba(0,0,0,0.1), black)` above,
  `linear-gradient(to bottom, black, rgba(0,0,0,0.1))` below) fading via
  `show 0.5s` / `hide 0.5s 0.3s linear`
- **And** the displayed value counts down once per second to a target of
  `now + 35 days + 18 hours` (source config `{D:35,h:18}`), so it never reads
  zero of everything
- **And** all four values are zero-padded to two digits each (8 cards total)
  and the interval is cleared on unmount

### Feature: Newsletter card

A white 390px rounded card with two centred pill inputs, a green pill button and
a spam note.

#### Scenario: Card renders the reference layout

- **Given** the screen renders
- **When** the card is visible
- **Then** it is `width:390px` capped at `max-width:100%`, `background:#fff`,
  `border-radius:10px`, with `padding:50px 45px 18px` (15px side padding at
  ≤576px)
- **And** it opens with a Poppins-Bold 30px/1.2 `#333` UPPERCASE centred
  "Newsletter" heading with 43px bottom padding
- **And** it closes with a Poppins-Regular 13px/1.5 `#999` centred note
  ("And don't worry, we hate spam too! You can unsubscribe at anytime.") with
  15px side and 25px top padding
- **And** the card is the SECOND child of the body band, which is a wrapping
  `space-around` row with 200px right padding (15px padding at ≤1400px,
  stacked-and-centred at ≤1200px)

#### Scenario: Form renders the reference pills

- **Given** the card renders
- **When** the form is visible
- **Then** it holds, in order, a Name well, an Email well (10px and 20px bottom
  margins respectively) and a full-width "Subscribe" button
- **And** each well is `width:100%`, `height:50px`, `position:relative`, and its
  field fills it with `background:#f5f5f5`, `border-radius:25px`,
  `padding:0 20px`, CENTRED text, Poppins-Bold 15px/1.2 `#555` and a `#999999`
  placeholder
- **And** focusing a field plays the green bloom — the ring over `.5s`
  `ease-in-out` to `box-shadow:0 0 80px 30px rgba(0,178,111,0.5)` fading to
  `opacity:0`
- **And** the button is `width:100%`, `height:50px`, `padding:0 20px`,
  `background:#00b26f`, `border-radius:25px`, labelled "Subscribe" in
  Poppins-Bold 15px/1.2 white
- **And** hovering the button over `.4s` switches the fill to `#333333`

#### Scenario: Form validates as in the reference

- **Given** the form renders
- **When** the user submits with an empty Name or a missing/malformed Email
- **Then** the offending well reveals a white bubble carrying its message
  (`1px solid #c80000`, `border-radius:16px`,
  `padding:5px 30px 6px 10px`, `max-width:70%`, right 12px and vertically
  centred, Poppins-Bold 12px/1.4 `#c80000`) plus a lucide `AlertCircle` glyph
  (`#c80000`, 16px, right 18px) replacing the source FontAwesome `\f06a`
- **And** the bubble follows the source visibility rule — hidden until an
  invalid submit, then visible while that field is hovered and ALWAYS visible at
  ≤992px — and clears on focus
- **And** the e-mail field accepts the source pattern
  `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` (the source marks it `type=text` and relies
  on that name-based check)
- **And** an invalid submit never navigates, and a valid submit is accepted as
  React state showing a confirmation (the source has no success path at all)

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4 `@theme`
tokens.

#### Scenario: Theme tokens match the reference

- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: wash gradient stops `#009efd` / `#2af598` with
  the `#30bab6` solid fallback at 80% opacity, brand green `#00b26f` with the
  `#333333` hover, clock card `#0d1629`, surface `#fff`, title `#333`, input
  fill `#f5f5f5`, input text `#555`, placeholder/note `#999999` / `#999`,
  focus bloom `rgba(0,178,111,0.5)`, error `#c80000`
- **And** Poppins (400 / 700) and Aldrich (400) load via a Google Fonts `<link>`
  in `index.html`
- **And** shapes are radius 25px (inputs, button), 3px (flip cards and digits),
  10px (newsletter card), 2px (social buttons), 35px (bloom ring) and 16px
  (validation bubble); transitions are `all .4s` (social buttons, button) and
  `opacity .4s` (bubble); the clock flip is `0.5s linear` and the bloom
  `0.5s ease-in-out`

### Feature: Footer attribution

The reference has no footer credit; the monorepo requires a Component Dock
attribution, so a small line is added as the last element inside the card.

#### Scenario: Attribution links Component Dock

- **Given** the page renders
- **When** the attribution line is visible
- **Then** it renders in Poppins-Regular 12–13px `#999`, centred, directly
  under the spam note, and reads a Component-Dock attribution (e.g. "More
  templates at Component Dock") linking `https://www.componentdock.com/`,
  branded "Component Dock"
- **And** it never mentions ColorLib, "Colorlib", the source demo title, the
  source credit line or the source slug
- **And** it is the ONLY addition to the reference layout (documented as a
  deliberate deviation in the spec and PR)

## Verification checklist

- [ ] Layout 1:1 with the reference: one `min-h-screen` wrapper with
      `padding-top:24px` and NO side/bottom padding, a photo background
      (`cover`, centred) and a `to bottom` `#009efd → #2af598` overlay at
      `opacity:0.8` with the `#30bab6` fallback; top bar then body band; no
      navbar, no footer band
- [ ] Block order matches: top bar (wordmark → three social buttons) → left
      column (eyebrow → headline → flip clock) + newsletter card
- [ ] Top bar: wrapping space-between, items centred, `padding:0 74px 175px
    80px` (20/14/50 at ≤576px); wordmark is an original text mark (never the
      source PNG), grown with a 30px right margin; three 36×36 `2px solid #fff`
      radius-2px transparent social buttons with 22px white lucide icons, 6px
      gaps, `aria-label`s, hover `#00b26f` over `.4s`
- [ ] Eyebrow: Poppins-Regular 30px/1.2 white UPPERCASE, `padding-bottom:10px`;
      headline Poppins-Bold 70px/1.1 white UPPERCASE (50px at ≤576px),
      `padding-bottom:45px`; left column `padding:34px 0 60px`, centred column
      at ≤1200px
- [ ] Flip clock: wrapping flex `max-width:100%` with `margin-bottom:20px`
      (centred at ≤1200px, `max-width:240px` + 26px right margin at ≤576px);
      EIGHT `41×54px` radius-3px `#0d1629` cards with `margin:2px` and 50px
      card-row spacing; Aldrich-Regular 35px white digits flex-centred
- [ ] Clock dividers: `26×54px`, white Aldrich-Regular 30px `":"` centred, with
      NO colon before the day group; captions Poppins-Regular 12px white
      UPPERCASE (`days` / `hrs` / `min` / `sec`) in a 90px block at
      `left:100%; top:100%` with 16px top padding; no dots, no mid seam
- [ ] Clock behaviour: 1 s tick toward `now + 35 d + 18 h`; 8 zero-padded
      digits; only changed cards repaint and replay the flip — active lower
      half `rotateX(90deg) → 0` over `.5s linear` delayed `.5s`, previous upper
      half `rotateX(0) → -90deg` over `.5s linear`, shadow gradients
      (`rgba(0,0,0,0.1) → black` above, `black → rgba(0,0,0,0.1)` below) via
      `show .5s` / `hide .5s .3s linear`; interval cleared on unmount
- [ ] Newsletter card: `390px` (`max-width:100%`), white, radius 10px,
      `padding:50px 45px 18px` (15px sides at ≤576px); title Poppins-Bold 30px
      `#333` UPPERCASE centred with 43px below; note Poppins-Regular 13px/1.5
      `#999` centred with `padding:25px 15px 0`
- [ ] Wells/fields: well `width:100%`, `height:50px`, `position:relative` with
      Name `mb-10px` and Email `mb-20px`; field `background:#f5f5f5`, radius
      25px, `padding:0 20px`, centred text, Poppins-Bold 15px `#555`,
      `#999999` placeholder; focus bloom ring radius 35px
      `rgba(0,178,111,0.5)` animating over `.5s ease-in-out` to
      `box-shadow:0 0 80px 30px` with `opacity:0`
- [ ] Button: `width:100%`, `height:50px`, `padding:0 20px`, `#00b26f`, radius
      25px, white Poppins-Bold 15px label "Subscribe", `transition:all .4s`,
      hover `#333333`
- [ ] Validation: invalid/empty Name or Email → white bubble (`1px solid
    #c80000`, radius 16px, `padding 5px 30px 6px 10px`, `max-width:70%`, right
      12px, Poppins-Bold 12px `#c80000`) with a lucide `AlertCircle` (16px
      `#c80000`, right 18px); hidden until an invalid submit, then visible on
      field hover and always at ≤992px; cleared on focus; invalid submit never
      navigates; valid submit shows a React-state confirmation
- [ ] Poppins (400 / 700) + Aldrich (400) via Google Fonts `<link>`; radii
      25/10/3/2/35/16px; transitions `.4s` (all), `.4s` (opacity), `.5s linear`
      (flip), `.5s ease-in-out` (bloom)
- [ ] Placeholder photograph used is `picsum.photos/seed/airborne-bg/1900/900`;
      social icons are inline SVG brand glyphs and the validation glyph is the
      lucide `AlertCircle`; no copied assets, logo PNG, photo, font files or
      CSS; no jQuery, no framework, no CDN runtime
- [ ] Component Dock attribution links `https://www.componentdock.com/`
      (Poppins-Regular 12–13px `#999`, centred under the note)
- [ ] Zero `colorlib` / source-demo-title / `comingsoon_06` references anywhere
      in `apps/airborne` (comments included)
- [ ] App folder `apps/airborne`, package `@free-react-templates/airborne`,
      `homepage` `https://airborne.free.componentdock.com`, `public/CNAME`
      `airborne.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh airborne` passes
