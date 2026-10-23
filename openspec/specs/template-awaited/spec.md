# Template: Awaited (Coming Soon / Under Construction)

## Purpose

Awaited is a single-screen coming-soon page in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Coming Soon V09"
template (source slug `comingsoon_09` — one full-viewport screen behind a
cross-fading FULL-SCREEN background slideshow: a fixed, `z-index:0`,
`100% × 100%` `.simpleslide100` layer holding two `1900×900` photographs
(`bg01.jpg`, a bright beach/sky scene averaging `rgb(202,214,225)`; `bg02.jpg`, a
dark photo averaging `rgb(101,99,99)`) that fade into each other over 1000 ms
every 7000 ms; over that, a content layer `z-index:1` carrying TWO stacked washes
— a `#7579ff` → `#b224ef` gradient at `opacity:0.3` and, above it, a
`rgba(0,0,0,0.4)` black scrim — which together render the reference as a muted
lavender/mauve film over the photography. The content layer is one
`min-height:100vh` column with `justify-content:space-between` holding three
bands: a TOP BAR (a white wordmark image left, a 140×50 white 25px-radius
"Sign Up" pill right, 80px side padding, 22px top padding), a CENTRED MIDDLE
block (`50px` top / `120px` bottom padding: a 72px THIN
`rgba(255,255,255,0.5)` UPPERCASE heading with 15px letter-spacing, and a
four-unit countdown — four `195px` columns each with a `120px` BLACK white
number above a 12px Regular white UPPERCASE label indented 35px), and a BOTTOM
band of three 36×36 white-outline circular social discs), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source:** https://colorlib.com/wp/template/comingsoon_09/
  (HTTP 200, 109,296 B, `text/html; charset=UTF-8`, verified 2026-10-11; page
  title "Coming Soon V09 - Free Website Template 2026 - Colorlib", description
  "An engaging free coming soon website template with a unique full-screen
  background slider, social icons and countdown timer.")
- **Preview:** https://preview.colorlib.com/theme/comingsoon_09/ returns
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same
  live-preview gap as the rest of the `comingsoon_*` family; there is no
  `theme/bootstrap/<slug>/` variant either), so the live preview DOM is
  unreachable for this slug. Fallback (documented per `docs/replication.md`): — **re-probed 2026-10-23: the demo serves** (measured record below)
  the official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_09.zip`
  (HTTP 200, 436,524 B, `application/zip`) was downloaded and extracted to
  `/tmp/cs09/out/comingsoon_09/` — `index.html` (4,568 B), `css/style.css`
  (8,825 B), `js/snippet.js` (2,997 B), `README.md` (1,260 B),
  `images/bg01.jpg` (1900×900, 102,266 B), `images/bg02.jpg` (1900×900,
  185,088 B), `images/icons/logo.png` (132×29 RGBA, 2,034 B),
  `images/icons/favicon.ico` (32,038 B), and three self-hosted faces:
  `fonts/Poppins-Regular.woff2` (48,416 B), `Poppins-Thin.woff2` (44,820 B) and
  `Poppins-Black.woff2` (47,176 B). That zip (the real rendered template's own
  files) is the DOM/CSS/JS reference, together with the TEMPLATES.md
  screenshot.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-9.jpg
  — ⚠️ **the CDN re-encodes this object:** read as `image/jpeg` at prep time
  (2026-10-11, 125,303 B) and **re-measured 2026-10-13 as `image/avif`, 40,808 B**
  (body signature `ftypavif`), 1200×972 either way, reviewed visually 2026-10-11.
  Fetch the bytes and decode what you get (`ffmpeg`/PIL handle both variants);
  never trust the `.jpg` extension or any single reading
- **New name:** `awaited` (apps/awaited, `@free-react-templates/awaited`) — the
  source demo title "Coming Soon 9", its `bg01.jpg`/`bg02.jpg` photographs, its
  "OCEAN" wordmark image, its inlined fa-brand SVG icons, its "Sign Up" label,
  its "Coming Soon" copy and its favicon are never reused
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/cs/comingsoon_09/index.html` — HTTP 200, 4,638 B, title `Coming Soon 9`.
>
> Sheet: `https://colorlib.com/etc/cs/comingsoon_09/css/style.css?v=fe7de957` (8,825 B).
> Faces it actually declares: `Poppins-Thin`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

The reference is one full-viewport screen, not a scrolling site. Its skeleton is
TWO sibling layers, both full-screen:

1. `div.simpleslide100` — the BACKGROUND slideshow — `.simpleslide100{display:
block; position:fixed; z-index:0; width:100%; height:100%; top:0; left:0}`,
   holding the `1900×900` photographs as `.simpleslide100-item{position:
absolute; width:100%; height:100%; top:0; left:0}` + `.bg-img1{background-
position:center; background-repeat:no-repeat; background-size:cover}` with
   inline `style="background-image:url(images/bg01.jpg)"` (item 1) and
   `style="background-image:url(images/bg02.jpg);display:none"` (item 2). This
   layer sits BEHIND the content (`z-index:0`) and is `position:fixed`, so it
   never scrolls.
2. `div.flex-col-c-sb.size1.overlay1` — the CONTENT layer —
   `.size1{width:100%; min-height:100vh}`, `.flex-col-c-sb{display:flex;
flex-direction:column; justify-content:space-between; align-items:center}`,
   `.overlay1{position:relative; z-index:1}`. It carries the doubled wash as two
   pseudo-elements, both full-size, both `z-index:-1`, both `top:0; left:0`:

   - `.overlay1::before{background:#7579ff; background:linear-gradient(bottom,
#b224ef, #7579ff); opacity:0.3}` — the brand wash: `#7579ff` is the solid
     fallback, and the legacy `bottom` keyword means "starting at the bottom",
     so in modern syntax the rendered wash is
     `linear-gradient(to top, #b224ef, #7579ff)`: magenta-violet `#b224ef` at
     the BOTTOM easing to periwinkle blue-violet `#7579ff` at the TOP, at a low
     `0.3` opacity so the photograph reads strongly through it;
   - `.overlay1::after{background:rgba(0,0,0,0.4)}` — a 40% black scrim painted
     AFTER (on top of) the wash, darkening the whole screen a further two-fifths.

   The content layer's `justify-content:space-between` is what pins the top bar
   to the top edge and the social row to the bottom edge with the heading +
   countdown floating in the middle — the three-band structure is the layout.

Inside the content layer, three children in order:

FIRST the TOP BAR `div.w-full.flex-w.flex-sb-m.p-l-80.p-r-80.p-t-22.p-lr-15-sm`
— `.w-full{width:100%}`, wrapping row, `justify-content:space-between`, items
centred, 80px left/right padding and 22px top padding (at ≤576px `.p-lr-15-sm`
overrides the side padding to 15px). It holds two children:

- `div.wrappic1.m-r-30.m-t-10.m-b-10` — `.wrappic1{display:block;
flex-grow:1}` + 30px right margin + 10px top/bottom margin — wrapping
  `a > img[src=images/icons/logo.png]` (the white "OCEAN" wordmark, a 132×29 PNG;
  `.wrappic1 img{max-width:100%}`). Because `.wrappic1` has `flex-grow:1`, the
  wordmark container stretches and pushes the button to the right edge — the
  button is at the far right, not merely space-between-shifted;
- `div.flex-w.m-t-10.m-b-10` wrapping a single
  `a.size2.m1-txt1.flex-c-m.how-btn1.trans-04` labelled "Sign Up" —
  `.size2{min-width:140px; height:50px}`, `.flex-c-m{justify-content:center;
align-items:center}`, `.m1-txt1{font-family:Poppins-Regular; font-size:18px;
color:#555; line-height:1.2; text-transform:uppercase}`,
  `.how-btn1{padding:0 15px; background-color:#fff; border-radius:25px}`,
  `.trans-04{transition:all 0.4s}` — so the CTA is a 140px-min, 50px-tall WHITE
  PILL with 25px radius and an 18px UPPERCASE `#555` label, and
  `.how-btn1:hover{background-color:#555555; color:#fff}` inverts it on hover.

SECOND the CENTRED MIDDLE block
`div.flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-120` — a centred column (items +
justify centred, flex-direction column) with 15px side padding and `50px` top /
`120px` bottom padding (the padding is what vertically positions the block
between the bars). It holds two blocks:

- `h3.l1-txt1.txt-center.p-b-40.respon1` reading "Coming Soon" —
  `.l1-txt1{font-family:Poppins-Thin; font-size:72px; line-height:1.1;
color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:15px}`,
  centred with 40px below it (`.respon1` drops to `font-size:45px` at ≤576px).
  This is the family's THINNEST heading — Poppins weight 100, 72px, HALF-TRANSPARENT
  white, classes it as an airy letterspaced outline over the photography (the
  screenshot shows a very light "COMING SOON");
- `div.flex-w.flex-c-m.cd100` — the COUNTDOWN — wrapping, centre-justified row
  holding FOUR units in order days, hours, minutes, seconds, each
  `div.flex-col-c.wsize1.m-b-30` — `.flex-col-c{display:flex; flex-direction:
column; align-items:center}`, `.wsize1{width:195px}`, 30px bottom margin — with
  two stacked children:
  - `span.l1-txt2.p-b-9.<unit>` — `.l1-txt2{font-family:Poppins-Black;
font-size:120px; line-height:1; color:#fff; text-transform:uppercase}` with 9px
    below it — a 120px BLACK (weight 900) white number, the heaviest type on the
    page and a deliberate contrast against the thin heading;
  - `span.s1-txt1.where1.p-l-35` — `.s1-txt1{font-family:Poppins-Regular;
font-size:12px; color:#fff; line-height:1; text-transform:uppercase}` +
    `.where1{align-self:flex-start}` + `.p-l-35{padding-left:35px}` — a 12px
    UPPERCASE white label ("Days" / "Hours" / "Minutes" / "Seconds"), aligned to
    the START of the 195px column (so it sits indented 35px from the unit's left
    edge under the left side of the big number, as the screenshot shows), NOT
    centred.

  There are NO colons, NO boxes and NO separators — the four units simply sit
  side by side, each 195px wide, with the big number over its left-indented
  label. This is a different clock treatment from every earlier `comingsoon_*`
  sibling (boxed colons, rings, flip clock, progress bar).

THIRD the BOTTOM band `div.flex-w.flex-c-m.p-b-35` — a wrapping, centre-justified
row with 35px bottom padding holding three identical anchors
`a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5` — `.size3{width:36px;
height:36px}`, `.how-social{color:#fff; font-size:18px; border:1px solid #fff;
background-color:transparent; border-radius:50%}` with 3px side margins and 5px
bottom margin, `.trans-04` transition — i.e. three 36×36 WHITE-OUTLINE CIRCULAR
discs, transparent fill, white glyph, 6px apart (2×3px); each wraps an
`i.fa.fa-<brand>` whose child `svg.cl-icon{height:1em; width:auto;
fill:currentColor; display:inline-block}` is an inlined FontAwesome-brand path
(Facebook, Twitter, YouTube). On hover
`.how-social:hover{background-color:#fff; color:#555}` fills the disc white with
a grey glyph.

There is NO navbar, NO logo text beyond the wordmark image, NO form/email field,
NO footer band and NO scrolling section: the whole page is the fixed slideshow,
the washed content column, and its three bands.

The countdown script (`js/snippet.js`) is the family's `spans` flavour with
config `{"sel":".cd100","kind":"spans","cfg":{"Y":0,"M":0,"D":35,"h":19,"m":0,
"s":0}}`: the target is built as `new Date(0, -1, 35, 19, 0, 0)` (year 0, month
`-1`), which can never be in the future, so the fallback rule kicks in and the
target becomes `Date.now() + 35 days + 19 hours` — the demo therefore never reads
zero. It then repaints the four spans once per second (`setInterval(paint, 1000)`
plus an immediate `paint()`), writing `r.d` RAW into `.days` (days are NOT
zero-padded — 35, 9, 5 …) and `pad(r.h)`, `pad(r.m)`, `pad(r.s)` where
`pad = n => ('0'+n).slice(-2)` (hours/minutes/seconds ARE two digits), and clears
the interval once the remaining time reaches 0. Elements that already contain a
`.flip-clock-wrapper` (the family's other flavour) are skipped.

The same script runs the background slideshow: for each `.simpleslide100`, if
fewer than two `.simpleslide100-item` children it returns; otherwise it sets
`transition:opacity 1000ms` on every item, shows the first (`opacity:1;
display:''`) and hides the rest, then — unless `prefers-reduced-motion: reduce`
matches — every 7000 ms cross-fades the current item out and the next in
(`display:''; opacity:0` → next frame `opacity:1`, and the old item goes
`display:none` after the 1000 ms transition). The recreation reproduces this as a
React effect (interval + reduced-motion guard, cleanup on unmount).

The palette is the reference's low-opacity violet wash over photography plus
white chrome: wash `#b224ef` (bottom) → `#7579ff` (top) at `opacity:0.3` with
`#7579ff` as the solid fallback, a `rgba(0,0,0,0.4)` scrim over it, white text
and glyphs, a `rgba(255,255,255,0.5)` heading, a white pill CTA (label `#555`,
hover fill `#555`), and white-outline social discs (hover fill `#fff`, glyph
`#555`).

## Design reference (replication findings)

- **Original:** ColorLib "Coming Soon V09" (source:
  https://colorlib.com/wp/template/comingsoon_09/). Listed in TEMPLATES.md
  `## Uncategorized (15)` at line 3040; the slug appears exactly once (no
  duplicate `- [ ]` line). No implementation exists for this item
  (`apps/awaited` absent, TEMPLATES.md line 3040 still `- [ ]`).
- **Preview URL:** https://preview.colorlib.com/theme/comingsoon_09/ →
  **HTTP 404** (9 B, `text/plain;charset=UTF-8`, verified 2026-10-11), so the
  live preview DOM could not be parsed. Fallback used (documented): the
  official source zip
  `https://preview.colorlib.com/downloads/free/comingsoon_09.zip` (HTTP 200,
  436,524 B, `application/zip`), downloaded and extracted to
  `/tmp/cs09/out/comingsoon_09/`. Reference artifacts: `/tmp/cs09/cs09.zip`,
  `/tmp/cs09/out/comingsoon_09/`, `/tmp/cs09/shot.jpg` (screenshot, 1200×972),
  `/tmp/cs09/src09.html` (the ColorLib page). Research date: 2026-10-11. The
  source HTML/CSS/JS is authoritative for section structure, copy, tokens, and
  behaviour.
- **Screenshot:** `coming-soon-9.jpg` (served as `image/jpeg` at prep time,
  `image/avif` when re-measured 2026-10-13 — see the Screenshot bullet above;
  reviewed visually 2026-10-11) confirms the layout: the background reads as a soft, sandy
  lavender/mauve surface with faint photographic texture (the site's own beach
  photo under a low-opacity violet wash + 40% black scrim), fading light at the
  top and warmer in the lower half; top-left a small white wordmark; top-right a
  white rounded pill button reading "SIGN UP"; centred the words "COMING SOON"
  in a very LIGHT, widely letterspaced, semi-transparent white UPPERCASE sans —
  the thinnest type on the screen; directly beneath it four BIG heavy white
  numbers "35 18 59 57" spread across the width, each with a small white
  UPPERCASE label underneath ("DAYS", "HOURS", "MINUTES", "SECONDS") sitting
  under the number's left side; and at the very bottom three small white-outline
  circular social icons (Facebook, Twitter/X, YouTube) centred. No nav bar, no
  e-mail field, no footer band, no scrolling sections.
- **Stylesheets in the reference:** a single `css/style.css` (no framework, no
  jQuery, no CDN dependency at runtime — the sheet opens with a
  `:where(html) … all: revert` guard so a host page's reboot cannot leak in,
  then re-declares a minimal Bootstrap-derived reboot) with three self-hosted
  `@font-face` blocks (Poppins-Thin, Poppins-Regular, Poppins-Black). The
  recreation uses Tailwind 4 + React state; the revert guard, the reboot, and all
  source class names are NEVER copied.
- **Key theme rules (verified in `css/style.css`):**
  - Slideshow layer: `.simpleslide100{position:fixed; z-index:0; width:100%;
height:100%; top:0; left:0}` and `.simpleslide100-item{position:absolute;
width:100%; height:100%; top:0; left:0}` + `.bg-img1{background-position:center;
background-repeat:no-repeat; background-size:cover}`
  - Content layer: `.size1{width:100%; min-height:100vh}` +
    `.flex-col-c-sb{display:flex; flex-direction:column; justify-content:space-
between; align-items:center}` + `.overlay1{position:relative; z-index:1}`
  - Wash layer: `.overlay1::before{background:#7579ff;
background:linear-gradient(bottom,#b224ef,#7579ff); opacity:0.3}`, full-size,
    `z-index:-1`
  - Scrim layer: `.overlay1::after{background:rgba(0,0,0,0.4)}`, full-size,
    `z-index:-1`, painted after the wash (a SECOND darkening layer)
  - Top bar: `.w-full` + `.flex-w` + `.flex-sb-m{justify-content:space-between;
align-items:center}` + `.p-l-80.p-r-80.p-t-22.p-lr-15-sm` (≤576px side padding
    15px)
  - Wordmark: `.wrappic1{display:block; flex-grow:1}` + `.m-r-30.m-t-10.m-b-10`;
    `.wrappic1 img{max-width:100%}`
  - Sign Up pill: `.size2{min-width:140px; height:50px}` + `.flex-c-m` +
    `.m1-txt1{Poppins-Regular 18px; color:#555; line-height:1.2;
text-transform:uppercase}` + `.how-btn1{padding:0 15px; background-color:#fff;
border-radius:25px}` + `.trans-04{transition:all .4s}`; hover
    `.how-btn1:hover{background-color:#555555; color:#fff}`
  - Middle block: `.flex-col-c-m{display:flex; flex-direction:column;
align-items:center; justify-content:center}` + `.p-l-15.p-r-15.p-t-50.p-b-120`
  - Heading: `.l1-txt1{Poppins-Thin 72px; line-height:1.1;
color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:15px}` +
    `.txt-center` + `.p-b-40`; ≤576px `.respon1{font-size:45px}`
  - Countdown row: `.flex-w` + `.flex-c-m` + `.cd100`
  - Countdown unit: `.flex-col-c{display:flex; flex-direction:column;
align-items:center}` + `.wsize1{width:195px}` + `.m-b-30`
  - Countdown digits: `.l1-txt2{Poppins-Black 120px; line-height:1; color:#fff;
text-transform:uppercase}` + `.p-b-9`
  - Countdown label: `.s1-txt1{Poppins-Regular 12px; color:#fff; line-height:1;
text-transform:uppercase}` + `.where1{align-self:flex-start}` +
    `.p-l-35{padding-left:35px}`
  - Social row: `.flex-w` + `.flex-c-m` + `.p-b-35`
  - Social disc: `.size3{width:36px; height:36px}` + `.flex-c-m` +
    `.how-social{color:#fff; font-size:18px; border:1px solid #fff;
background-color:transparent; border-radius:50%}` + `.trans-04` +
    `.m-r-3.m-l-3.m-b-5`; hover `.how-social:hover{background-color:#fff;
color:#555}`
  - Base type: `body,html{font-family:Arial,sans-serif; font-size:15px;
color:#666666; height:100%; background-color:#fff}` (all visible type is
    Poppins); `h3{margin:0px}`
  - Fonts (source, self-hosted woff2): Poppins-Thin (100), Poppins-Regular
    (400), Poppins-Black (900) — NO Bold, NO serif face; the recreation loads
    Poppins (100 / 400 / 900) from Google Fonts via `<link>` in `index.html`
- **Content map (source DOM):**
  `div.simpleslide100` > two `div.simpleslide100-item.bg-img1` (bg01 visible,
  bg02 `display:none`), then
  `div.flex-col-c-sb.size1.overlay1`:
  1. `div.w-full.flex-w.flex-sb-m.p-l-80.p-r-80.p-t-22.p-lr-15-sm` — ← TOP BAR
     - `div.wrappic1.m-r-30.m-t-10.m-b-10 > a > img[src=images/icons/logo.png]`
       (white wordmark)
     - `div.flex-w.m-t-10.m-b-10 > a.size2.m1-txt1.flex-c-m.how-btn1.trans-04`
       — "Sign Up"
  2. `div.flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-120` — ← CENTRED MIDDLE
     - `h3.l1-txt1.txt-center.p-b-40.respon1` — "Coming Soon" (thin,
       letterspaced, half-transparent)
     - `div.flex-w.flex-c-m.cd100` — ← COUNTDOWN
       - `div.flex-col-c.wsize1.m-b-30 > span.l1-txt2.p-b-9.days` (35) +
         `span.s1-txt1.where1.p-l-35` (Days)
       - the same unit for `.hours` (17) / Hours
       - the same unit for `.minutes` (50) / Minutes
       - the same unit for `.seconds` (39) / Seconds
  3. `div.flex-w.flex-c-m.p-b-35` — ← SOCIAL ROW
     - three `a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5` wrapping
       `i.fa.fa-facebook` / `i.fa.fa-twitter` / `i.fa.fa-youtube-play` (inlined
       `svg.cl-icon` brand paths)
- **Behaviour (`js/snippet.js`, two framework-free features):**
  1. Countdown on `.cd100` — `kind:"spans"` with config `{Y:0,M:0,D:35,h:19,m:0,
s:0}`: `new Date(0, -1, 35, 19, 0, 0)` is always in the past, so the declared
     fallback `end = Date.now() + D*864e5 + h*36e5` (= now + 35 days + 19 hours)
     is what actually runs; `paint()` writes the raw day count into `.days` and
     `pad()`-ed hours/minutes/seconds (`pad = n => ('0'+n).slice(-2)`), runs once
     immediately and then every 1000 ms, and clears its interval when the
     remaining time hits 0; elements already containing a `.flip-clock-wrapper`
     are skipped.
  2. Background cross-fade slideshow on `.simpleslide100` — needs ≥2 items; sets
     `transition:opacity 1000ms`, shows item 0, then every 7000 ms fades the
     current item out and the next in, hiding the old one after the transition
     (`display:none`); returns early (stays on item 0) when
     `prefers-reduced-motion: reduce` matches.

## Design tokens

| Token                  | Value                                                                                                                                                                                                     | Where                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| wash gradient (page)   | `#b224ef` (bottom) → `#7579ff` (top) — source `linear-gradient(bottom, #b224ef, #7579ff)` (legacy `bottom` = "starting at the bottom" ⇒ modern `to top`)                                                  | full-viewport overlay over the slideshow                     |
| wash fallback          | `#7579ff`                                                                                                                                                                                                 | background-color behind the gradient                         |
| wash opacity           | `0.3`                                                                                                                                                                                                     | first overlay layer                                          |
| scrim layer            | `rgba(0,0,0,0.4)`                                                                                                                                                                                        | second full-size overlay layer, painted OVER the wash        |
| page photographs       | source `images/bg01.jpg` (1900×900, average `rgb(202,214,225)`) + `images/bg02.jpg` (1900×900, average `rgb(101,99,99)`) — recreation uses `https://picsum.photos/seed/awaited-bg1/1900/900` and `.../awaited-bg2/1900/900` | fixed full-screen cross-fade slideshow                       |
| slideshow              | `position:fixed; z-index:0; 100%×100%`; item `transition:opacity 1000ms`; 7000 ms interval; honours `prefers-reduced-motion`                                                                              | background                                                   |
| content layer          | `width:100%; min-height:100vh`, `flex-col`, `justify-content:space-between; align-items:center`, `position:relative; z-index:1`                                                                          | page shell                                                   |
| top bar                | `width:100%`, wrap, `justify-content:space-between; align-items:center`, `padding:22px 80px 0` (≤576px side padding 15px)                                                                                 | band 1                                                       |
| wordmark               | white wordmark image (source 132×29 PNG, alt "LOGO"), container `flex-grow:1`, 30px right / 10px top & bottom margin; recreation renders its OWN name as the white wordmark (source "OCEAN" never copied) | band 1 left                                                  |
| Sign Up pill           | `min-width:140px`, `height:50px`, `padding:0 15px`, `background:#fff`, `border-radius:25px`, label Poppins-Regular 18px/1.2 `#555` `text-transform:uppercase`, `transition:all .4s`                     | band 1 right                                                  |
| Sign Up pill hover     | fill → `#555555`, label → `#fff`                                                                                                                                                                          | over `.4s`                                                   |
| middle block           | centred flex column, `padding:50px 15px 120px`                                                                                                                                                            | band 2                                                       |
| heading                | Poppins-Thin **100** 72px/1.1, `rgba(255,255,255,0.5)`, `text-transform:uppercase`, `letter-spacing:15px`, `text-align:center`, 40px below; ≤576px 45px                                                | band 2                                                       |
| countdown row          | wrap, centre-justified, no separators                                                                                                                                                                     | band 2                                                       |
| countdown unit         | `width:195px`, centred column, 30px below                                                                                                                                                                 | band 2                                                       |
| countdown digits       | Poppins-Black **900** 120px/1 white, `text-transform:uppercase`, 9px below                                                                                                                                | each unit                                                    |
| countdown labels       | Poppins-Regular 400 12px/1 white, `text-transform:uppercase`, `align-self:flex-start`, `padding-left:35px`                                                                                                | each unit (left-indented)                                    |
| social row             | wrap, centre-justified, `padding-bottom:35px`                                                                                                                                                             | band 3                                                       |
| social disc            | `36×36`, `border:1px solid #fff`, `border-radius:50%`, transparent fill, glyph `#fff` 18px, `transition:all .4s`, margins `3px` sides / `5px` bottom                                                                                                             | band 3 (×3)                                                  |
| social disc hover      | fill → `#fff`, glyph → `#555`                                                                                                                                                                             | over `.4s`                                                   |
| radii                  | 25px (Sign Up pill), 50% (social discs), 0px (heading, digits, labels, wash, bars)                                                                                                                       | shapes                                                       |
| fonts                  | Poppins-Thin (100) heading 72px, Poppins-Regular (400) CTA 18px + labels 12px, Poppins-Black (900) digits 120px — NO Bold, NO serif                                                                      | typography                                                   |
| base type              | `body,html{font-family:Arial,sans-serif; font-size:15px; color:#666666; background:#fff}` (all visible type is Poppins)                                                                                  | typography                                                   |
| countdown behaviour    | target `now + 35 d + 19 h` (the configured `new Date(0,-1,35,19,…)` is always past); 1 s tick; days raw, h/m/s zero-padded; immediate first paint; interval cleared at 0 and on unmount                       | countdown                                                    |
| attribution            | Poppins-Regular 12–13px white/70 centred line under the social row                                                                                                                                       | footer requirement (ADDED vs the reference — the source has no footer credit) |

## Requirements

### Feature: Fixed cross-fade background slideshow and double wash

The page is one screen whose background is a fixed, full-viewport photograph
slideshow, washed by a low-opacity violet gradient and a 40% black scrim.

#### Scenario: Page renders as one washed slideshow screen

- **Given** the page loads at desktop width
- **When** the layout renders
- **Then** a fixed, `z-index:0`, `100% × 100%` background layer sits behind
  everything holding the slideshow photographs, each `cover`-sized, centred,
  no-repeat
- **And** above it a content layer occupies `width:100%; min-height:100vh`,
  `position:relative; z-index:1`, laid out as a column with
  `justify-content:space-between; align-items:center`
- **And** TWO stacked full-size layers sit over the photograph inside the content
  layer: a `linear-gradient(to top, #b224ef, #7579ff)` wash at `opacity:0.3`
  with `#7579ff` as the solid fallback (periwinkle-blue `#7579ff` at the top
  easing to magenta-violet `#b224ef` at the bottom), and ABOVE it a
  `rgba(0,0,0,0.4)` black scrim
- **And** the two layers are rendered as separate elements (or a stacked
  background), never collapsed into one heavier gradient
- **And** the content layer's three children are spread top/centre/bottom by
  `space-between`: the top bar, the centred heading + countdown block, and the
  social row
- **And** there is NO navbar, NO e-mail/form field, NO footer band and NO
  scrolling section

#### Scenario: Background cross-fades between two photographs

- **Given** the slideshow layer holds at least two photographs
- **When** the effect runs
- **Then** the first photograph is shown initially and the rest are hidden
- **And** every 7000 ms the current photograph fades out and the next fades in
  over a 1000 ms opacity transition, and the old one is hidden once the
  transition completes
- **And** the cycle wraps around after the last photograph
- **And** when `prefers-reduced-motion: reduce` matches, the slideshow stays on
  the first photograph and never cycles
- **And** the interval is cleared on unmount

### Feature: Top bar (wordmark and white Sign Up pill)

A white wordmark pinned left and a 140×50 white 25px-radius pill pinned right.

#### Scenario: Top bar renders the reference chrome

- **Given** the screen renders
- **When** the top bar is visible
- **Then** it is a full-width wrapping row with
  `justify-content:space-between; align-items:center` and `padding:22px 80px 0`
  (side padding 15px at ≤576px)
- **And** its left child is the app's OWN white wordmark (text or inline SVG
  rendering the new name — the source "OCEAN" wordmark image, "LOGO" alt and the
  image file are NEVER copied), whose container grows (`flex-grow:1`) with 30px
  right / 10px top & bottom margins
- **And** its right child is a single pill CTA labelled with a "Sign
  Up"-equivalent string, `min-width:140px`, `height:50px`, `padding:0 15px`,
  `background:#fff`, `border-radius:25px`, an 18px UPPERCASE Poppins-Regular
  `#555` label, `transition:all .4s`
- **And** hovering the pill over `.4s` inverts it: fill `#fff` → `#555555` and
  label `#555` → `#fff`, so the label stays legible throughout

### Feature: Thin letterspaced heading over a heavy four-unit countdown

A 72px thin half-transparent letterspaced uppercase heading above four 195px
columns, each a 120px black white number over a 12px left-indented label.

#### Scenario: Middle block renders the reference typography

- **Given** the screen renders
- **When** the centred block is visible
- **Then** it is a centred flex column with `padding:50px 15px 120px`
- **And** it renders an `h3` reading a "Coming Soon"-equivalent string
  (paraphrasable copy; the source demo title "Coming Soon 9" and the source's own
  "Coming Soon" string are never reused verbatim) in Poppins-Thin **100**
  72px/1.1 `rgba(255,255,255,0.5)`, `text-transform:uppercase`,
  `letter-spacing:15px`, centred with 40px below it, dropping to 45px at ≤576px
- **And** beneath it the countdown is a wrapping, centre-justified row with NO
  colons, boxes or separators, holding FOUR units in the order days, hours,
  minutes, seconds, each `width:195px`, laid out as a centred column with 30px
  below
- **And** each unit renders its number in Poppins-Black **900** 120px/1 white
  `text-transform:uppercase` with 9px below it, over a label in Poppins-Regular
  400 12px/1 white `text-transform:uppercase` that is `align-self:flex-start`
  with `padding-left:35px` (left-indented under the number, NOT centred)
- **And** the heading is the THINNEST type and the digits the HEAVIEST type on
  the page — the 100-vs-900 weight contrast is preserved, not flattened
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

### Feature: Circular social row

Three 36×36 white-outline circular discs centred at the bottom.

#### Scenario: Social row renders the reference discs

- **Given** the screen renders
- **When** the bottom band is visible
- **Then** it is a wrapping, centre-justified row with `padding-bottom:35px` at
  the bottom edge (pinned by the content layer's `space-between`)
- **And** it holds THREE anchors, each `36×36`, `border:1px solid #fff`,
  `border-radius:50%`, transparent fill, a white 18px glyph,
  `transition:all .4s`, with 3px side margins and 5px bottom margin (so they sit
  6px apart)
- **And** the three glyphs are a Facebook, a Twitter/X and a YouTube mark
  (lucide-react brand icons or equivalent — the source's inlined FontAwesome
  `svg.cl-icon` paths are NEVER copied)
- **And** hovering a disc over `.4s` fills it white and darkens the glyph to
  `#555`

### Feature: Design tokens & typography

The recreation exposes the reference palette and fonts as Tailwind 4 `@theme`
tokens.

#### Scenario: Theme tokens match the reference

- **Given** the app's `src/index.css` theme
- **When** the tokens are declared
- **Then** the palette includes: wash stops `#b224ef` (bottom) / `#7579ff` (top)
  with the `#7579ff` solid fallback at `opacity 0.3`, the `rgba(0,0,0,0.4)`
  scrim, white text/glyphs, the `rgba(255,255,255,0.5)` heading colour, the
  Sign-Up pill (`#fff` fill, `#555` label, `#555` hover fill), and the social
  discs (`#fff` border/glyph, `#fff` hover fill with `#555` glyph)
- **And** Poppins (100 / 400 / 900) loads via a Google Fonts `<link>` in
  `index.html`; there is NO Bold, NO serif and no monospace face in this slug
- **And** shapes are radius 25px (Sign Up pill), 50% (social discs) and 0px
  (heading, digits, labels, wash, bars); transitions are `all .4s` (pill, discs)
  and `opacity 1000ms` (slideshow), and the countdown ticks at 1000 ms

### Feature: Footer attribution

The reference has no footer credit and no footer band; the monorepo requires a
Component Dock attribution, so a small line is added under the social row.

#### Scenario: Attribution links Component Dock

- **Given** the page renders
- **When** the attribution line is visible
- **Then** it renders in Poppins-Regular 12–13px, centred, directly under the
  social row (or in the bottom band), reading a Component-Dock attribution (e.g.
  "More templates at Component Dock") linking
  `https://www.componentdock.com/`, branded "Component Dock"
- **And** it never mentions ColorLib, "Colorlib", the source demo title, the
  source credit line or the source slug
- **And** it is the ONLY addition to the reference layout (documented as a
  deliberate deviation in the spec and PR)

## Verification checklist

- [ ] Layout 1:1 with the reference: a fixed `z-index:0` full-screen slideshow
      layer behind a content column at `min-h-screen w-full`, `flex flex-col
      justify-between items-center`; inside it TWO overlay layers — a `to top`
      `#b224ef → #7579ff` wash at `opacity:0.3` with the `#7579ff` fallback and
      a `rgba(0,0,0,0.4)` scrim ABOVE it; three bands spread top/centre/bottom;
      no navbar, no e-mail field, no footer band
- [ ] Band order matches: top bar (wordmark left, "Sign Up"-equivalent pill
      right) → centred heading + four-unit countdown → social row → Component
      Dock attribution
- [ ] Slideshow: two photographs `picsum.photos/seed/awaited-bg1/1900/900` and
      `.../awaited-bg2/1900/900`, `cover` centred no-repeat; first shown, others
      hidden; cross-fade over 1000 ms every 7000 ms with wraparound; frozen on
      the first photo when `prefers-reduced-motion: reduce`; interval cleared on
      unmount
- [ ] Top bar: `w-full` wrapping `justify-between items-center` row with
      `pt-[22px] px-[80px]` (≤576px `px-[15px]`); left the app's OWN white
      wordmark (source "OCEAN"/"LOGO" never copied) in a `flex-grow` container
      with 30px right / 10px top+bottom margins; right a single pill CTA
      (`min-w-[140px] h-[50px] px-[15px] bg-white rounded-[25px]`, 18px UPPERCASE
      Poppins-Regular `#555` label, `transition-all duration-[400ms]`, hover
      `bg-[#555555] text-white`)
- [ ] Middle block: centred flex column `py` 50px top / 120px bottom / 15px sides;
      `h3` "Coming Soon"-equivalent in Poppins-Thin 100 72px/1.1
      `rgba(255,255,255,0.5)` `uppercase tracking-[15px]` centred with 40px
      below, 45px at ≤576px
- [ ] Countdown: wrapping centre-justified row, NO separators/colons/boxes; FOUR
      `w-[195px]` centred columns with 30px below, order days → hours → minutes
      → seconds; each a Poppins-Black 900 120px/1 white number (9px below) over
      a Poppins-Regular 12px/1 white UPPERCASE label that is
      `self-start pl-[35px]` (left-indented, not centred)
- [ ] Countdown behaviour: 1 s tick toward `now + 35 d + 19 h`; days written raw
      while h/m/s are zero-padded; immediate first paint; interval cleared on
      unmount and at zero remaining
- [ ] Social row: wrapping centre-justified row `pb-[35px]`; THREE `size-9`
      (36×36) discs `border border-white rounded-full` transparent fill with a
      white 18px glyph, `transition-all duration-[400ms]`, side margins 3px /
      bottom 5px; hover `bg-white text-[#555]`; icons are lucide-react brand
      marks (no copied FA svg paths)
- [ ] Poppins (100 / 400 / 900) via Google Fonts `<link>`; radii 25px / 50% /
      0px; transitions `.4s` (pill, discs) and `1000ms` (slideshow)
- [ ] Placeholder photographs used are the two `picsum.photos/seed/awaited-bg*`
      URLs; icons are lucide-react only; no copied assets, wordmark, photo,
      favicon, font files or CSS; no jQuery, no framework, no CDN runtime
- [x] Component Dock attribution links `https://www.componentdock.com/`
      (Poppins-Regular 12–13px, centred under the social row)
- [x] Zero `colorlib` / source-demo-title / `comingsoon_09` references anywhere
      in `apps/awaited` (comments included)
- [x] App folder `apps/awaited`, package `@free-react-templates/awaited`,
      `homepage` `https://awaited.free.componentdock.com`, `public/CNAME`
      `awaited.free.componentdock.com`, lockfile registers the workspace
- [ ] `vite.config.ts` keeps `injectUiSource()`; tests at 100% coverage;
      `scripts/verify-app.sh awaited` passes
