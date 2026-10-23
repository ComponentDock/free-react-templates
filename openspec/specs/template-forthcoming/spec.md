# Template: Forthcoming (Coming Soon / Under Construction)

## Purpose

Forthcoming is a single-screen coming-soon / under-construction page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free "Coming Soon V08" template (source slug `comingsoon_08` — one full-viewport
screen: a dark green botanical photograph (1900×900 leaf macro, average
`rgb(73,104,87)`) covered by a dark-purple wash — `#61045f` at the TOP easing to
`#aa076b` at the BOTTOM, declared at 90% opacity — plus a second full-size
`rgba(0,0,0,0.2)` black scrim layer stacked over that wash; inside a 790px centred
column: a 60px white gift-card glyph, a 48px UPPERCASE Poppins-Bold "Coming Soon"
heading, a 25px Playfair-Display-Regular subtitle, a thin translucent-bordered
2px `rgba(255,255,255,0.35)` BOX holding the countdown as four 100px units
separated by Poppins-Light 70px colons (`35 : 17 : 59 : 57`) with italic Playfair
labels underneath, and finally a 500px pill-shaped e-mail field (2px
`rgba(255,255,255,0.5)` border, 25px radius, `#4272d7` focus ring) beside a 160px
blue `#4272d7` pill "Notify Me" button that inverts to white with blue text on
hover), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_08/
  (HTTP 200, 109,310 B, `text/html; charset=UTF-8`, verified 2026-10-11; page
  title "Coming Soon V08 - Free Website Template 2026 - Colorlib", description
  "The best free coming soon website template with a 100% mobile-friendly
  layout, featuring a countdown timer.")
- **Preview:** https://preview.colorlib.com/theme/comingsoon_08/ returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same
  live-preview gap as the rest of the `comingsoon_*` family), so the live
  preview DOM is unreachable for this slug. Fallback (documented per — **re-probed 2026-10-23: the demo serves** (measured record below)
  `docs/replication.md`): the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_08.zip`
  (HTTP 200, 510,048 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs08/ex/comingsoon_08/` — `index.html` (3,057 B), `css/style.css`
  (11,247 B), `js/snippet.js` (3,069 B), `README.md` (1,260 B),
  `images/bg01.jpg` (1900×900, 225,163 B), `images/icons/favicon.ico`
  (32,038 B), and six self-hosted faces: `fonts/Poppins-Regular.woff2`
  (48,416 B), `Poppins-Light.woff2` (48,180 B), `Poppins-Bold.woff2` (48,144 B),
  `PlayfairDisplay-Regular.woff2` (61,612 B),
  `PlayfairDisplay-Italic.woff2` (65,124 B) and
  `fontawesome-webfont-subset.woff2` (576 B). That zip (the real rendered
  template's own files) is the DOM/CSS/JS reference, together with the
  TEMPLATES.md screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-8.jpg
  (HTTP 200, 24,353 B, served as AVIF, 1200×972, decoded with `avifdec` to
  `/tmp/cs08/coming-soon-8.png` and reviewed visually 2026-10-11)
- **New name:** `forthcoming` (apps/forthcoming,
  `@free-react-templates/forthcoming`) — the source demo title "Coming Soon 8",
  its uppercase "Coming Soon" headline copy, its `bg01.jpg` photograph, its
  zmdi gift-card glyph and its favicon are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/comingsoon_08/index.html` — HTTP 200, 3,127 B, title `Coming Soon 8`.
>
> Sheet: `https://colorlib.com/etc/cs/comingsoon_08/css/style.css?v=baa69ba2` (11,247 B).
> Faces it actually declares: `Poppins-Bold`, `PlayfairDisplay-Italic`, `Segoe UI`, `Roboto`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

The reference is one full-viewport screen, not a scrolling site. The screen
wrapper is `div.bg-img1.overlay1.size1.flex-w.flex-c-m.p-t-55.p-b-55.p-l-15.p-r-15`
with an inline `style="background-image: url('images/bg01.jpg')"`:
`.size1{width:100%; min-height:100vh}`, `.bg-img1{background-position:center;
background-repeat:no-repeat; background-size:cover}`, `.flex-w{flex-wrap:wrap}`,
`.flex-c-m{justify-content:center; align-items:center}`. So the washed wrapper IS
the padded, viewport-sized flex box here — 55px top / 55px bottom / 15px sides —
and its single child is centred on BOTH axes. (Note the difference from its
V07 sibling `imminent`, where the washed wrapper carries no padding and the
padded `min-height:100vh` box is a CHILD.)

Two stacked overlay layers paint over the photograph, both `z-index:-1` and both
full-size, in this order:

1. `.overlay1::before{content:""; display:block; position:absolute; z-index:-1;
width:100%; height:100%; top:0; left:0; background:#61045f;
background:linear-gradient(bottom, #aa076b, #61045f); opacity:0.9}` — the brand
   wash: `#61045f` is the solid fallback, and the legacy `bottom` keyword means
   "starting at the bottom", so in modern syntax the rendered wash is
   `linear-gradient(to top, #aa076b, #61045f)`: saturated magenta-purple
   `#aa076b` at the BOTTOM easing to deep violet-plum `#61045f` at the TOP,
   exactly as the screenshot shows (a dark plum upper half sliding into a
   brighter warm purple lower half);
2. `.overlay1::after{content:""; display:block; position:absolute; z-index:-1;
width:100%; height:100%; top:0; left:0; background:rgba(0,0,0,0.2)}` — a 20%
   black scrim painted AFTER (i.e. on top of) the wash, darkening the whole
   screen a further fifth. Both layers sit under the content but over the photo.
   This is the only slug in the `comingsoon_*` family with TWO overlay layers,
   and the darker-than-siblings look in the screenshot comes from that extra
   scrim — the recreation must render both layers, not one heavier gradient.

Because the source photo is a GREEN leaf macro (average `rgb(73,104,87)`, corners
as dark as `rgb(13,24,16)`), essentially all of the purple on screen comes from
the wash + scrim, with the leaf veins reading as texture through 90% opacity.

Inside the wrapper stands exactly ONE child, `div.wsize1`
(`.wsize1{max-width:100%; width:790px}`), holding four blocks in this order:

FIRST the icon line `p.txt-center.p-b-23` containing
`i.zmdi.zmdi-card-giftcard.cl0.fs-60` — `.cl0{color:#fff}` and
`.fs-60{font-size:60px}` — an inlined 427×512 SVG of Material's "card_giftcard"
glyph (a rounded card with a bow and ribbon) with
`class="cl-icon"` (`.cl-icon{height:1em; width:auto; fill:currentColor;
display:inline-block}`), i.e. a 60px white outline glyph centred with 23px below
it.

SECOND the heading `h3.l1-txt1.txt-center.p-b-22` reading "Coming Soon" —
`.l1-txt1{font-family:Poppins-Bold; font-size:48px; color:#fff;
line-height:1.2; text-transform:uppercase}` — so the visible type is the
UPPERCASE 48px bold headline "COMING SOON" in the screenshot, centred, with 22px
below it. It is a real `h3` element, not a paragraph.

THIRD the subtitle `p.txt-center.m2-txt1.p-b-67` reading "Our website is under
construction, follow us for update now!" — `.m2-txt1{font-family:
PlayfairDisplay-Regular; font-size:25px; color:#fff; line-height:1.2}`, centred
with 67px below it. This slug's body copy is the SERIF Playfair Display face —
the only serif type on the page apart from the countdown labels.

FOURTH the countdown box
`div.flex-w.flex-sa-m.cd100.bor1.p-t-42.p-b-22.p-l-50.p-r-50.respon1` — a
wrapping, SPACE-AROUND, items-centred row carrying `.bor1{border:2px solid
rgba(255,255,255,0.35)}` and `padding:42px 50px 22px` (at ≤768px `.respon1`
overrides to `padding-left:15px; padding-right:15px; max-width:340px;
margin:0 auto`), so the clock sits inside a THIN TRANSLUCENT RECTANGLE with
SQUARE corners — the box is the clock's frame, not a card. Inside it, seven
children in strict alternation:

- `div.flex-col-c-m.wsize2.m-b-20` — `.flex-col-c-m{align-items:center;
justify-content:center; flex-direction:column}`, `.wsize2{width:100px}`, 20px
  bottom margin — holding `span.l1-txt2.p-b-4.days` (`35` in the static DOM) over
  `span.m2-txt2` (`Days`);
- `span.l1-txt2.p-b-22` — a literal COLON, printed at the same
  `.l1-txt2{Poppins-Light; font-size:70px; color:#fff; line-height:1}` size as the
  digits, with 22px below it;
- the same unit for `.hours` (`17`) / `Hours`;
- `span.l1-txt2.p-b-22.respon2` — the SECOND colon, which is the only one hidden
  on small screens (`.respon2{display:none}` at ≤768px);
- the same unit for `.minutes` (`50`) / `Minutes`;
- a third plain `span.l1-txt2.p-b-22` colon;
- the same unit for `.seconds` (`39`) / `Seconds`.

Digits are Poppins-Light 70px (`l1-txt2`), NOT bold; labels are
`span.m2-txt2{font-family:PlayfairDisplay-Italic; font-size:18px; color:#fff;
line-height:1}` — italic serif, sentence case ("Days", "Hours", "Minutes",
"Seconds", no `text-transform`), exactly as the screenshot shows. Unlike its
siblings (`imminent` rings, `airborne` flip clock, `advent` bar), this slug's
clock is an outlined BOX divided by full-size colons.

FIFTH the form `form.flex-w.flex-c-m.contact100-form.validate-form.p-t-70` —
`.contact100-form{width:100%}`, wrapping, centre-justified, with 70px of top
padding (the gap below the countdown box), holding two children:

- `div.wrap-input100.validate-input.where1` with
  `data-validate="Email is required: ex@abc.xyz"` —
  `.wrap-input100{width:500px; max-width:calc(100% - 10px); position:relative;
background-color:transparent; height:50px; border:2px solid
rgba(255,255,255,0.5); border-radius:25px}` and `.where1{margin:20px 5px 0px 5px}`,
  so the field is a 500px PILL with a 2px translucent-white border, a
  TRANSPARENT fill (the wash shows through) and 25px radius — the family's only
  rounded field. Its
  `input.s1-txt1.placeholder0.input100[type=text][name=email]
[placeholder="Email Address"]` is `display:block; width:100%; background:
transparent`, `input.input100{height:100%; padding:0 38px 0 38px}` in
  `s1-txt1{Poppins-Regular; font-size:15px; color:#fff; line-height:1.2}` with a
  `#fff` placeholder on all four vendor variants (`.placeholder0`), plus its
  `span.focus-input100` sibling;
- `button.flex-c-m.s1-txt1.size2.how-btn.trans-04.where1` labelled "Notify Me" —
  `.size2{min-width:160px; height:50px}`, `.how-btn{padding:0 20px;
background-color:#4272d7; border-radius:25px}` (a blue pill, the same 25px
  radius as the field), `.trans-04{transition:all .4s}`, `.where1` margins again.

The field's and the button's shared `.where1{margin:20px 5px 0px 5px}` is what
produces the single centred row of a pill field plus a pill button with 10px
between them (2×5px), sitting above 20px of top margin — do not collapse those
margins away.

The focus ring is an OUTLINE, not a shadow bloom (unlike `imminent`):
`.focus-input100{position:absolute; display:block; width:calc(100% + 4px);
height:calc(100% + 4px); top:-2px; left:-2px; pointer-events:none; border:2px
solid #4272d7; border-radius:25px; visibility:hidden; opacity:0;
transition:all 0.4s; transform:scaleX(1.1) scaleY(1.2)}` and
`.input100:focus + .focus-input100{visibility:visible; opacity:1;
transform:scale(1)}` — a blue `#4272d7` pill ring that snaps in from a slightly
larger scale over `.4s`. Brand blue reappears in the button fill, so this slug's
accent is BLUE `#4272d7`, not green and not the wash purple.

The button hover is a full inversion: `.how-btn:hover{background-color:#fff;
color:#4272d7}` — white fill, blue label — over the same `.4s` transition. The
button's own label colour is `#fff` at rest (`s1-txt1`).

The form is validated on submit by the same framework-free `.validate-form`
handler as the rest of the family: the fields are
`.validate-input .input100, .validate-input input, .validate-input textarea`;
per field, `type=email` or `name=email` must match
`/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` (on the trimmed value) and other fields must be
non-empty; a failure adds `.alert-validate` to the closest `.validate-input` and
calls `preventDefault`; the class is removed on `focus`. There is NO success path
in the source (a valid submit simply reloads the demo page) — the recreation
shows a React-state confirmation instead and must not navigate. This slug's
bubble is the ROUNDED variant: `.alert-validate::before{content:
attr(data-validate); position:absolute; max-width:70%; background-color:#fff;
border:1px solid #c80000; border-radius:15px; padding:4px 25px 4px 10px;
top:50%; transform:translateY(-50%); right:12px; pointer-events:none;
font-family:Poppins-Regular; color:#c80000; font-size:14px; line-height:1.4;
text-align:left; visibility:hidden; opacity:0; transition:opacity 0.4s}` plus
`.alert-validate::after{content:"\f071"; font-family:FontAwesome; display:block;
position:absolute; color:#c80000; font-size:14px; top:50%;
transform:translateY(-50%); right:18px}`, revealed by
`.alert-validate:hover:before{visibility:visible; opacity:1}` and, inside
`@media (max-width:992px)`, `.alert-validate::before{visibility:visible;
opacity:1}` — 15px radius, 14px type, and `\f071` is FontAwesome's warning
TRIANGLE, so the recreation uses a lucide-react `AlertTriangle`.

There are NO social buttons, NO logo/wordmark, NO navbar and NO footer band in
this slug — unlike `imminent` (wordmark + three round social discs) and
`premiere` (slideshow chrome). The entire screen is: glyph, heading, subtitle,
boxed colon clock, one-row form.

The countdown script (`js/snippet.js`, config
`{"sel":".cd100","kind":"spans","cfg":{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}}`)
is the family's `spans` flavour, NOT the flip clock: the target date is built as
`new Date(0, -1, 35, 18, 0, 0)` (year 0, month `-1`), which can never be in the
future, so the fallback rule kicks in and the target becomes
`Date.now() + 35 days + 18 hours` — the demo therefore never reads zero. It then
repaints the four spans once per second (`setInterval(paint, 1000)` plus an
immediate `paint()`), writing `r.d` RAW into `.days` (days are NOT zero-padded —
35, 9, 5 …) and `pad(r.h)`, `pad(r.m)`, `pad(r.s)` where
`pad = n => ('0'+n).slice(-2)` (hours/minutes/seconds ARE two digits), and clears
the interval once the remaining time reaches 0. `.hours`, `.minutes`, `.seconds`
also carry the class names the selector writes to, the three colons are static
markup the script never touches, and the countdown container is skipped entirely
if it already contains a `.flip-clock-wrapper` (the family's other flavour).

The palette is a two-layer purple wash over a green botanical photograph plus
exactly one saturated accent: wash `#aa076b` (bottom) → `#61045f` (top) with
`#61045f` as the solid fallback at `opacity:0.9`, a `rgba(0,0,0,0.2)` scrim over
it, brand blue `#4272d7` (Notify Me fill, focus-ring border, hover label colour),
field border `rgba(255,255,255,0.5)`, clock-box border `rgba(255,255,255,0.35)`,
white type/placeholder/digits/labels, and validation red `#c80000` on white.

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V08" (source:
  https://colorlib.com/wp/template/comingsoon_08/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3039; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/forthcoming` absent, TEMPLATES.md line 3039 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_08/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11), so the
  live preview DOM could not be parsed. Fallback used (documented): the
  official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_08.zip` (HTTP 200,
  510,048 B, `application/zip`), downloaded and extracted to
  `/tmp/cs08/ex/comingsoon_08/`. Reference artifacts: `/tmp/cs08.zip`,
  `/tmp/cs08/ex/comingsoon_08/`, `/tmp/cs08/coming-soon-8.png` (decoded
  screenshot, 1200×972), `/tmp/cs08/src.html` (the ColorLib page). Research
  date: 2026-10-11. The source HTML/CSS/JS is authoritative for section
  structure, copy, tokens, and behaviour.
- **Screenshot:** `coming-soon-8.jpg` (AVIF, decoded and reviewed visually
  2026-10-11) confirms the layout: the background is a dark botanical macro —
  large leaf veins filling the frame — washed end-to-end in purple that is deep
  plum at the top edge and brighter magenta-purple in the lower half, with the
  leaf texture clearly visible through it; a small white OUTLINE gift-card glyph
  sits centred above the type; centred under it the words "COMING SOON" in a
  heavy UPPERCASE sans (the widest, boldest piece of type on the screen);
  directly under that one line of white SERIF text reading "Our website is under
  construction, follow us for update now!"; then a wide, thin-bordered
  transparent RECTANGLE containing four large thin numbers separated by colons —
  "35 : 17 : 59 : 57" — each number sitting above a small ITALIC serif label
  ("Days", "Hours", "Minutes", "Seconds"); and below the box one centred row of a
  rounded PILL e-mail field (thin white outline, transparent fill, white
  "Email Address" placeholder) next to a solid BLUE pill button reading
  "Notify Me". No nav bar, no social icons, no scrolling sections, no footer
  band, and no visible logo.
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN dependency at runtime — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in,
  then re-declares a minimal Bootstrap-derived reboot) with six self-hosted
  `@font-face` blocks (Poppins-Light / Regular / Bold, PlayfairDisplay-Regular /
  -Italic, plus a 576-byte FontAwesome subset). The recreation uses Tailwind 4 +
  React state; the revert guard, the reboot, and all source class names are
  NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Screen: `.bg-img1.size1.overlay1.flex-w.flex-c-m` +
    `.p-t-55.p-b-55.p-l-15.p-r-15` — `width:100%; min-height:100vh`, photo
    `cover`/centre/no-repeat, `display:flex; flex-wrap:wrap;
justify-content:center; align-items:center`, `padding:55px 15px`
  - Wash layer: `.overlay1::before{background:#61045f;
background:linear-gradient(bottom,#aa076b,#61045f); opacity:0.9}`, full-size,
    `z-index:-1`, under the content, over the photo
  - Scrim layer: `.overlay1::after{background:rgba(0,0,0,0.2)}`, full-size,
    `z-index:-1`, painted after the wash (a SECOND darkening layer)
  - Column: `.wsize1{max-width:100%; width:790px}`
  - Glyph line: `.txt-center.p-b-23` > `i.zmdi.zmdi-card-giftcard.cl0.fs-60`
    (`.cl0{color:#fff}`, `.fs-60{font-size:60px}`,
    `.cl-icon{height:1em; width:auto; fill:currentColor; display:inline-block}`)
  - Heading: `.l1-txt1{Poppins-Bold 48px; color:#fff; line-height:1.2;
text-transform:uppercase}` + `.txt-center` + `.p-b-22`
  - Subtitle: `.m2-txt1{PlayfairDisplay-Regular 25px; color:#fff;
line-height:1.2}` + `.txt-center` + `.p-b-67`
  - Clock box: `.flex-w` + `.flex-sa-m{justify-content:space-around;
align-items:center}` + `.bor1{border:2px solid rgba(255,255,255,0.35)}` +
    `.p-t-42.p-b-22.p-l-50.p-r-50`; ≤768px `.respon1{padding-left:15px;
padding-right:15px; max-width:340px; margin:0 auto}`
  - Clock unit: `.flex-col-c-m{align-items:center; justify-content:center;
flex-direction:column}` + `.wsize2{width:100px}` + `.m-b-20`
  - Clock digits and colons: `.l1-txt2{Poppins-Light 70px; color:#fff;
line-height:1}` with `.p-b-4` on digits and `.p-b-22` on colons; the 2nd colon
    also carries `.respon2` → `display:none` at ≤768px
  - Clock labels: `.m2-txt2{PlayfairDisplay-Italic 18px; color:#fff;
line-height:1}` (sentence case, no `text-transform`)
  - Form row: `.contact100-form{width:100%}` + `.flex-w` + `.flex-c-m` +
    `.validate-form` + `.p-t-70`
  - Field well: `.wrap-input100{width:500px; max-width:calc(100% - 10px);
position:relative; background-color:transparent; height:50px; border:2px solid
rgba(255,255,255,0.5); border-radius:25px}` + `.validate-input
{position:relative}` + `.where1{margin:20px 5px 0px 5px}`
  - Field input: `.input100{display:block; width:100%; background:transparent}`
    - `input.input100{height:100%; padding:0 38px 0 38px}` +
      `.s1-txt1{Poppins-Regular 15px; color:#fff; line-height:1.2}` +
      `.placeholder0` → `#fff` on all four vendor placeholder variants
  - Focus ring: `.focus-input100{width:calc(100% + 4px);
height:calc(100% + 4px); top:-2px; left:-2px; border:2px solid #4272d7;
border-radius:25px; visibility:hidden; opacity:0; transition:all 0.4s;
transform:scaleX(1.1) scaleY(1.2)}` →
    `.input100:focus + .focus-input100{visibility:visible; opacity:1;
transform:scale(1)}`
  - Button: `.size2{min-width:160px; height:50px}` + `.flex-c-m` +
    `.s1-txt1{Poppins-Regular 15px; color:#fff; line-height:1.2}` +
    `.how-btn{padding:0 20px; background-color:#4272d7; border-radius:25px}` +
    `.trans-04` + `.where1`; hover `.how-btn:hover{background-color:#fff;
color:#4272d7}`
  - Validation bubble: `.alert-validate::before{content:attr(data-validate);
max-width:70%; background-color:#fff; border:1px solid #c80000;
border-radius:15px; padding:4px 25px 4px 10px; top:50%; transform:
translateY(-50%); right:12px; pointer-events:none; font-family:
Poppins-Regular; color:#c80000; font-size:14px; line-height:1.4;
text-align:left; visibility:hidden; opacity:0; transition:opacity .4s}` +
    `.alert-validate::after{content:"\f071"; font-family:FontAwesome;
display:block; position:absolute; color:#c80000; font-size:14px; top:50%;
transform:translateY(-50%); right:18px}` + `.alert-validate:hover:before{
visibility:visible; opacity:1}` and, inside `@media (max-width:992px)`,
    `.alert-validate::before{visibility:visible; opacity:1}`
  - Base type: `body,html{font-family:Arial,sans-serif; font-size:15px;
color:#666666; height:100%; background-color:#fff}` (all visible type is
    Poppins or Playfair Display); `input,textarea{display:block; outline:none;
border:none}`; `button{outline:none; border:none; background:transparent;
cursor:pointer}`; `h3,p{margin:0px}`
  - Fonts (source, self-hosted woff2): Poppins-Light (300), Poppins-Regular
    (400), Poppins-Bold (700), PlayfairDisplay-Regular (400),
    PlayfairDisplay-Italic (italic 400) — NO Aldrich/mono face, and the
    recreation loads Poppins (300 / 400 / 700) + Playfair Display (400 + italic 400) from Google Fonts via `<link>` in `index.html`
- **Content map (source DOM):**
  `div.bg-img1.overlay1.size1.flex-w.flex-c-m.p-t-55.p-b-55.p-l-15.p-r-15`
  `[style="background-image:url(images/bg01.jpg)"]` containing a single
  `div.wsize1`:
  1. `p.txt-center.p-b-23` > `i.zmdi.zmdi-card-giftcard.cl0.fs-60` (60px white
     gift-card outline glyph) — ← ICON
  2. `h3.l1-txt1.txt-center.p-b-22` — "Coming Soon" (uppercase via CSS) —
     ← HEADING
  3. `p.txt-center.m2-txt1.p-b-67` — "Our website is under construction, follow
     us for update now!" — ← SUBTITLE
  4. `div.flex-w.flex-sa-m.cd100.bor1.p-t-42.p-b-22.p-l-50.p-r-50.respon1` —
     ← COUNTDOWN BOX
     - `div.flex-col-c-m.wsize2.m-b-20 > span.l1-txt2.p-b-4.days` (35) +
       `span.m2-txt2` (Days)
     - `span.l1-txt2.p-b-22` (":")
     - the same unit for `.hours` (17) / Hours
     - `span.l1-txt2.p-b-22.respon2` (":" — hidden at ≤768px)
     - the same unit for `.minutes` (50) / Minutes
     - `span.l1-txt2.p-b-22` (":")
     - the same unit for `.seconds` (39) / Seconds
  5. `form.flex-w.flex-c-m.contact100-form.validate-form.p-t-70` — ← FORM ROW
     - `div.wrap-input100.validate-input.where1[data-validate="Email is required:
ex@abc.xyz"] > input.s1-txt1.placeholder0.input100[type=text][name=email]
[placeholder="Email Address"] + span.focus-input100`
     - `button.flex-c-m.s1-txt1.size2.how-btn.trans-04.where1` — "Notify Me"
- **Behaviour (`js/snippet.js`, two framework-free features):**
  1. `.validate-form` submit validation — as described above; one e-mail field,
     `data-validate="Email is required: ex@abc.xyz"`; no success path in the
     source (a valid submit reloads the demo page).
  2. Countdown on `.cd100` — `kind:"spans"` with config
     `{Y:0,M:0,D:35,h:18,m:0,s:0}`: `new Date(0, -1, 35, 18, 0, 0)` is always in
     the past, so the declared fallback `end = Date.now() + D*864e5 + h*36e5`
     (= now + 35 days + 18 hours) is what actually runs; `paint()` writes the raw
     day count into `.days` and `pad()`-ed hours/minutes/seconds
     (`pad = n => ('0'+n).slice(-2)`), runs once immediately and then every
     1000 ms, and clears its interval when the remaining time hits 0; elements
     already containing a `.flip-clock-wrapper` are skipped.

## Design tokens

| Token                 | Value                                                                                                                                                                                                                          | Where                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| wash gradient (page)  | `#aa076b` (bottom) → `#61045f` (top) — source `linear-gradient(bottom, #aa076b, #61045f)` (legacy `bottom` = "starting at the bottom" ⇒ modern `to top`)                                                                       | full-viewport overlay over the photo                                          |
| wash fallback         | `#61045f`                                                                                                                                                                                                                      | background-color behind the gradient                                          |
| wash opacity          | `0.9`                                                                                                                                                                                                                          | first overlay layer                                                           |
| scrim layer           | `rgba(0,0,0,0.2)`                                                                                                                                                                                                              | second full-size overlay layer, painted OVER the wash                         |
| page photograph       | source `images/bg01.jpg` (1900×900 dark green leaf macro, average `rgb(73,104,87)`) — recreation uses `https://picsum.photos/seed/forthcoming-bg/1900/900`                                                                     | full-viewport background, `cover` centred                                     |
| brand blue            | `#4272d7`                                                                                                                                                                                                                      | Notify Me fill, focus-ring border, button hover label colour                  |
| glyph                 | 60px white outline gift-card glyph (source zmdi inlined SVG) ⇒ lucide `Gift` at 60px `#fff`                                                                                                                                    | top of the column                                                             |
| heading               | `#fff` Poppins-Bold 48px/1.2, `text-transform:uppercase`, 22px below                                                                                                                                                           | column                                                                        |
| subtitle              | `#fff` PlayfairDisplay-Regular 25px/1.2, 67px below                                                                                                                                                                            | column                                                                        |
| clock box             | `border:2px solid rgba(255,255,255,0.35)`, NO radius, `padding:42px 50px 22px`, wrap + space-around + items-centre                                                                                                             | countdown frame                                                               |
| clock box (mobile)    | ≤768px: `padding-left/right:15px`, `max-width:340px`, `margin:0 auto`                                                                                                                                                          | ≤768px                                                                        |
| clock unit            | `width:100px`, centred column, 20px below                                                                                                                                                                                      | inside the box                                                                |
| clock digits          | `#fff` Poppins-Light 70px/1, 4px below                                                                                                                                                                                         | inside each unit                                                              |
| clock colons          | `#fff` Poppins-Light 70px/1, 22px below; the SECOND colon hidden at ≤768px                                                                                                                                                     | between units                                                                 |
| clock labels          | `#fff` PlayfairDisplay-Italic 18px/1, sentence case                                                                                                                                                                            | inside each unit                                                              |
| field well            | `width:500px`, `max-width:calc(100% - 10px)`, `height:50px`, `border:2px solid rgba(255,255,255,0.5)`, `border-radius:25px`, transparent fill                                                                                  | form row                                                                      |
| field input           | transparent fill, `padding:0 38px`, `#fff` text (Poppins-Regular 15px/1.2), `#fff` placeholder (all vendor variants)                                                                                                           | form row                                                                      |
| field/focus layout    | `.where1{margin:20px 5px 0px 5px}` on BOTH the well and the button                                                                                                                                                             | form row                                                                      |
| focus ring            | 100%+4px box offset −2px, `2px solid #4272d7`, `border-radius:25px`, hidden → `visibility:visible; opacity:1; transform:scale(1)` from `scaleX(1.1) scaleY(1.2)`, transition `all .4s`                                         | focused field                                                                 |
| button                | `min-width:160px`, `height:50px`, `padding:0 20px`, `background:#4272d7`, `border-radius:25px`, label Poppins-Regular 15px/1.2 `#fff`, `transition:all .4s`                                                                    | form row                                                                      |
| button hover          | fill → `#fff`, label → `#4272d7`                                                                                                                                                                                               | over `.4s`                                                                    |
| validation bubble     | white fill, `1px solid #c80000`, `border-radius:15px`, `padding:4px 25px 4px 10px`, `max-width:70%`, right 12px, vertically centred, Poppins-Regular 14px/1.4 `#c80000`, opacity over `.4s`; icon 14px `#c80000` at right 18px | error state                                                                   |
| validation visibility | hidden by default; shown on field hover; always shown at ≤992px; cleared on focus                                                                                                                                              | error state                                                                   |
| error red             | `#c80000`                                                                                                                                                                                                                      | bubble border/text/icon                                                       |
| fonts                 | Poppins-Light (digits + colons 70px), Poppins-Regular (input/button 15px, bubble 14px, base 15px), Poppins-Bold (heading 48px), PlayfairDisplay-Regular (subtitle 25px), PlayfairDisplay-Italic (clock labels 18px)            | typography                                                                    |
| radii                 | 25px (field well, focus ring, button), 15px (validation bubble), 0px (countdown box, glyph, headings)                                                                                                                          | shapes                                                                        |
| screen                | `width:100%`, `min-height:100vh`, `padding:55px 15px`, `display:flex; flex-wrap:wrap; justify-content:center; align-items:center`; photo `cover` centred + wash (90%) + scrim (20%)                                            | layout                                                                        |
| column                | `width:790px`, `max-width:100%`                                                                                                                                                                                                | centred child of the wrapper                                                  |
| base type             | `body,html{font-family:Arial,sans-serif; font-size:15px; color:#666666; background:#fff}` (all visible type is Poppins/Playfair Display)                                                                                       | typography                                                                    |
| countdown behaviour   | target `now + 35 d + 18 h` (the configured `new Date(0,-1,35,…)` is always past); 1 s tick; days raw, h/m/s zero-padded; immediate first paint; interval cleared at 0                                                          | countdown                                                                     |
| attribution           | Poppins-Regular 12–13px white/70 centred line below the form                                                                                                                                                                   | footer requirement (ADDED vs the reference — the source has no footer credit) |

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/comingsoon_08/index.html` | HTTP 200 · 3,127 B · title `Coming Soon 8` |
| stylesheet | `https://colorlib.com/etc/cs/comingsoon_08/css/style.css?v=baa69ba2` | HTTP 200 · 11,247 B · sha256 `15e5a9f112bf` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×14,
`#61045f`×5, `#aa076b`×4, `#4272d7`×3, `#c80000`×3, `#212529`×1,
`#666666`×1.

**Low-chroma values the sheet actually uses** — `#212529`, `#666666`; any
sampled Tailwind grey above is an approximation of these.

## Requirements

### Feature: Full-viewport double-overlay photo screen

The page is one screen, not a scrolling site: a background photograph covered by
a 90%-opacity magenta-purple wash AND a second 20% black scrim, with the wrapper
itself carrying `min-height:100vh`, the `55px 15px` padding and both-axis
centring.

#### Scenario: Page renders as one double-washed photo screen

- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a single washed wrapper occupies `width:100%; min-height:100vh` with
  `padding:55px 15px` and centres its single child on BOTH axes (`display:flex;
flex-wrap:wrap; justify-content:center; align-items:center`)
- **And** its background is a photographic image (`cover`, centred, no-repeat)
  filling the whole screen
- **And** TWO stacked full-size layers sit over the photograph, both under the
  content: a `linear-gradient(to top, #aa076b, #61045f)` wash at `opacity:0.9`
  with `#61045f` as the solid fallback (deep plum `#61045f` at the top easing to
  magenta-purple `#aa076b` at the bottom, exactly as the screenshot shows), and
  ABOVE it a `rgba(0,0,0,0.2)` black scrim
- **And** the two layers are rendered as separate elements (or a stacked
  background), never collapsed into one heavier gradient
- **And** the wrapper's single child is a `max-width:100%; width:790px` column
  stacking the glyph, heading, subtitle, countdown box and form, in that order
- **And** there is NO navbar, NO social row, NO wordmark, NO scrolling section
  and NO footer band

### Feature: Centred glyph, uppercase heading and serif subtitle

A 60px white gift-card outline glyph, a 48px uppercase bold headline and a 25px
serif subtitle, each with its own fixed spacing.

#### Scenario: Column head renders the reference typography

- **Given** the screen renders
- **When** the top of the column is visible
- **Then** it renders a centred 60px white outline glyph (lucide-react `Gift`
  substituting the source zmdi "card_giftcard" SVG — the glyph asset is NEVER
  copied) with 23px below it
- **And** under it an `h3` reading "Coming Soon"-equivalent copy in
  Poppins-Bold 48px/1.2 white, `text-transform:uppercase` (the screenshot shows
  "COMING SOON"), centred with 22px below it
- **And** under that ONE centred line of copy
  ("Our website is under construction, follow us for update now!"-equivalent) in
  PlayfairDisplay-Regular 25px/1.2 white with 67px below it
- **And** the copy is the same _kind_ as the source (paraphrasable) and never
  reuses the source demo title "Coming Soon 8" or the source page's own strings
  verbatim beyond that kind of content

### Feature: Boxed colon countdown

Four 100px units separated by full-size colons, inside one thin translucent
rectangle with square corners.

#### Scenario: Clock renders inside the reference box

- **Given** the screen renders
- **When** the countdown is visible
- **Then** it renders as ONE wrapping, space-around, items-centred row carrying
  `border:2px solid rgba(255,255,255,0.35)` with NO radius and
  `padding:42px 50px 22px`
- **And** at ≤768px the box becomes `max-width:340px` with `margin:0 auto` and
  `padding-left/right:15px`
- **And** it holds FOUR units in the order days, hours, minutes, seconds, each
  `width:100px`, laid out as a centred column with 20px below, rendering a digit
  in Poppins-Light 70px/1 white with 4px below it over a label in
  PlayfairDisplay-Italic 18px/1 white in sentence case (`Days` / `Hours` /
  `Minutes` / `Seconds` — never uppercased)
- **And** the units are separated by THREE literal colons in Poppins-Light 70px/1
  white with 22px below each (`35 : 17 : 59 : 57`)
- **And** the SECOND colon is the only one hidden at ≤768px, the other two stay
- **And** no unit, digit, label or colon borrows the source's static DOM values
  as its content — the values come from the live countdown
- **And** the clock is NOT rings, NOT cards and NOT a flip clock: the box is a
  thin outlined rectangle with square corners and the separator is a full-size
  text colon

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

### Feature: Pill e-mail field and blue Notify Me button

A 500px translucent-bordered pill field with a blue focus ring, beside a 160px
blue pill button, in one centred row.

#### Scenario: Form renders the reference one-row pill layout

- **Given** the screen renders
- **When** the form is visible
- **Then** it renders as ONE wrapping, centre-justified row 100% wide with 70px
  of padding above it, holding the field well and the button
- **And** the well is `width:500px` capped at `max-width:calc(100% - 10px)`,
  `height:50px`, `border:2px solid rgba(255,255,255,0.5)`,
  `border-radius:25px` (a pill), `position:relative`, with a TRANSPARENT fill so
  the wash shows through
- **And** both the well and the button carry `margin:20px 5px 0px 5px`, so the
  pair sits 20px below whatever precedes it with 10px between the two children
- **And** the field is `height:100%` inside the well with `padding:0 38px`,
  transparent fill, and renders Poppins-Regular 15px/1.2 `#fff` typed text with
  a `#fff` placeholder reading "Email Address"-equivalent copy on every vendor
  variant
- **And** the button is `min-width:160px`, `height:50px`, `padding:0 20px`,
  `background:#4272d7`, `border-radius:25px`, labelled "Notify Me" in
  Poppins-Regular 15px/1.2 white, `transition:all .4s`
- **And** at desktop width the field and the button share ONE centred row (both
  pills, 50px tall, flush apart from the 2×5px margins)

#### Scenario: Focus ring and button hover match the reference

- **Given** the form renders
- **When** the field receives focus
- **Then** an absolutely-positioned element one border-width larger than the well
  (`width/height:calc(100% + 4px)`, offset `-2px`) becomes visible with
  `border:2px solid #4272d7` and `border-radius:25px`, animating from
  `transform:scaleX(1.1) scaleY(1.2)` to `scale(1)` with `visibility`/`opacity`
  over `all .4s`
- **And** the ring is an OUTLINE, not a blurred box-shadow bloom (unlike the V07
  sibling)
- **And** hovering the button over `.4s` inverts it: fill `#4272d7` → `#fff` and
  label `#fff` → `#4272d7`, so the label stays legible throughout

#### Scenario: Form validates as in the reference

- **Given** the form renders
- **When** the user submits with a missing or malformed e-mail
- **Then** the well reveals a white bubble carrying its message
  (`1px solid #c80000`, `border-radius:15px`, `padding:4px 25px 4px 10px`,
  `max-width:70%`, right 12px and vertically centred, Poppins-Regular 14px/1.4
  `#c80000`) plus a lucide `AlertTriangle` glyph (`#c80000`, 14px, right 18px)
  replacing the source FontAwesome `\f071` triangle
- **And** the bubble follows the source visibility rule — hidden until an
  invalid submit, then visible while that field is hovered and ALWAYS visible at
  ≤992px — and clears on focus
- **And** the field accepts the source pattern
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
- **Then** the palette includes: wash stops `#aa076b` (bottom) / `#61045f` (top)
  with the `#61045f` solid fallback at 90% opacity, the `rgba(0,0,0,0.2)` scrim,
  brand blue `#4272d7`, field border `rgba(255,255,255,0.5)`, clock-box border
  `rgba(255,255,255,0.35)`, white type/placeholder/digits/labels, error
  `#c80000`
- **And** Poppins (300 / 400 / 700) and Playfair Display (400 + italic 400) load
  via a Google Fonts `<link>` in `index.html`; there is NO Aldrich and no
  monospace face in this slug
- **And** shapes are radius 25px (well, focus ring, button), 15px (bubble) and
  0px (clock box, glyph, headings); transitions are `all .4s` (button, focus
  ring) and `opacity .4s` (bubble)

### Feature: Footer attribution

The reference has no footer credit and no footer band; the monorepo requires a
Component Dock attribution, so a small line is added under the form.

#### Scenario: Attribution links Component Dock

- **Given** the page renders
- **When** the attribution line is visible
- **Then** it renders in Poppins-Regular 12–13px, centred, directly under the
  form row inside the column, and reads a Component-Dock attribution (e.g. "More
  templates at Component Dock") linking `https://www.componentdock.com/`,
  branded "Component Dock"
- **And** it never mentions ColorLib, "Colorlib", the source demo title, the
  source credit line or the source slug
- **And** it is the ONLY addition to the reference layout (documented as a
  deliberate deviation in the spec and PR)

## Verification checklist

- [x] Layout 1:1 with the reference: ONE washed wrapper at
      `min-h-screen w-full` with `padding:55px 15px`, `flex flex-wrap
justify-center items-center`, a photo background (`cover`, centred) plus TWO
      overlay layers — a `to top` `#aa076b → #61045f` wash at `opacity:0.9` with
      the `#61045f` fallback and a `rgba(0,0,0,0.2)` scrim ABOVE it; inside, one
      `w-[790px] max-w-full` column; no navbar, no social row, no footer band
- [x] Block order matches: 60px white glyph (23px below) → uppercase 48px
      Poppins-Bold "Coming Soon"-equivalent h3 (22px below) → 25px
      PlayfairDisplay-Regular subtitle (67px below) → boxed colon countdown →
      one-row pill form → Component Dock attribution
- [x] Clock box: wrapping, space-around, items-centred,
      `border:2px solid rgba(255,255,255,0.35)`, SQUARE corners,
      `padding:42px 50px 22px` (≤768px `max-w-[340px] mx-auto` +
      `px-[15px]`); FOUR `w-[100px]` units as centred columns with 20px below,
      order days → hours → minutes → seconds
- [x] Clock typography: digits AND colons Poppins-Light 70px/1 white (digits
      `pb-[4px]`, colons `pb-[22px]`), THREE colons present with the SECOND one
      hidden at ≤768px; labels PlayfairDisplay-Italic 18px/1 white in SENTENCE
      case ("Days" / "Hours" / "Minutes" / "Seconds")
- [x] Clock behaviour: 1 s tick toward `now + 35 d + 18 h`; days written raw
      while h/m/s are zero-padded; immediate first paint; interval cleared on
      unmount and at zero remaining
- [x] Form row: `w-full` wrapping centre-justified row with `pt-[70px]`; well
      `w-[500px] max-w-[calc(100%-10px)] h-[50px]` with
      `border-2 border-[rgba(255,255,255,0.5)] rounded-[25px]` and transparent
      fill; BOTH well and button carry `margin:20px 5px 0`; field `h-full px-[38px]`
      with `#fff` text (Poppins-Regular 15px/1.2) and a `#fff` placeholder
- [x] Button: `min-w-[160px] h-[50px] px-[20px] bg-[#4272d7] rounded-[25px]`,
      Poppins-Regular 15px/1.2 white "Notify Me", `transition-all duration-[400ms]`,
      hover `bg-white` + `text-[#4272d7]`
- [x] Focus ring: an outline one border-width larger than the well (offset
      `-2px`), `2px solid #4272d7`, `rounded-[25px]`, hidden until focus, then
      scaling from `scaleX(1.1) scaleY(1.2)` to `scale(1)` with
      visibility/opacity over `.4s` — NOT a box-shadow bloom
- [x] Validation: invalid/empty e-mail → white bubble (`1px solid #c80000`,
      radius 15px, `padding 4px 25px 4px 10px`, `max-width:70%`, right 12px,
      Poppins-Regular 14px `#c80000`) with a lucide `AlertTriangle` (14px
      `#c80000`, right 18px); hidden until an invalid submit, then visible on
      field hover and always at ≤992px; cleared on focus; invalid submit never
      navigates; valid submit shows a React-state confirmation
- [x] Poppins (300 / 400 / 700) + Playfair Display (400 + italic 400) via Google
      Fonts `<link>`; radii 25px / 15px / 0px; transitions `.4s` (all) and `.4s`
      (opacity)
- [x] Placeholder photograph used is
      `picsum.photos/seed/forthcoming-bg/1900/900`; the gift glyph is lucide
      `Gift` at 60px white; icons are lucide-react only; no copied assets, glyph
      SVG, photo, favicon, font files or CSS; no jQuery, no framework, no CDN
      runtime
- [x] Component Dock attribution links `https://www.componentdock.com/`
      (Poppins-Regular 12–13px, centred under the form)
- [x] Zero `colorlib` / source-demo-title / `comingsoon_08` references anywhere
      in `apps/forthcoming` (comments included)
- [x] App folder `apps/forthcoming`, package
      `@free-react-templates/forthcoming`, `homepage`
      `https://forthcoming.free.componentdock.com`, `public/CNAME`
      `forthcoming.free.componentdock.com`, lockfile registers the workspace
- [x] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh forthcoming` passes

## Implementation notes (added with the app)

- **Arbitrary-value class names.** CSS `calc()` requires whitespace around `+`
  and `-`, so the implementation writes the two calc utilities as
  `max-w-[calc(100%_-_10px)]` and `h/w-[calc(100%_+_4px)]` (Tailwind turns the
  underscores into spaces). The rendered CSS is exactly the reference's
  `calc(100% - 10px)` / `calc(100% + 4px)` — verified in the built stylesheet.
- **Copy.** The headline reads "We're almost there" and the subtitle "Leave your
  e-mail and we'll tell you the moment we launch." — both original one-liners, so
  the headline stays on a single line inside the 790px column as the reference's
  short uppercase headline does (a longer rephrasing wraps to two lines).
- **Field fill.** The archived screenshot makes the field look light-filled, but
  the reference stylesheet is authoritative: `.wrap-input100` is
  `background-color: transparent` with a `#fff` placeholder, which is what the
  recreation renders (confirmed in the built page: `rgba(0, 0, 0, 0)` fill).
- **Verified rendered geometry** (1440×900, built `dist`): wrapper padding
  `55px 15px`, column 790px, clock box 790px with `2px solid
rgba(255,255,255,0.35)` / `border-radius: 0` / `justify-content: space-around`
  / `padding: 42px 50px 22px`, digits 70px weight 300 white, labels italic 18px
  Playfair Display, wash `linear-gradient(to top, #aa076b, #61045f)` at
  `opacity: 0.9` over a `rgba(0,0,0,0.2)` scrim, field 500px pill (transparent
  fill, white placeholder) beside the 160×50px `#4272d7` pill, form row
  `padding-top: 70px`, and `documentElement.scrollHeight === innerHeight` (a
  single screen, no scrolling).
