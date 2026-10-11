# Airborne — design notes (replication research)

Source: ColorLib **Coming Soon V06** —
https://colorlib.com/wp/template/comingsoon_06/ (source slug `comingsoon_06`;
ColorLib page title "Coming Soon V06 - Free Website Template 2026", HTTP 200,
109,293 B, verified 2026-10-11). The theme preview
`https://preview.colorlib.com/theme/comingsoon_06/` returns **HTTP 404**
(9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same live-preview gap
as the rest of the `comingsoon_*` family), so the live preview DOM is unreachable
for this slug. Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_06.zip`
(HTTP 200, 384,899 B, `application/zip`) — the real template's own files — as
the DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-6.jpg`.

Reference artifacts: `/tmp/cs06/cs06.zip`, extracted to
`/tmp/cs06/ex/comingsoon_06/` (`index.html` 8,665 B · `css/style.css` 24,277 B ·
`js/snippet.js` 2,522 B · `README.md` 1,260 B · `images/bg01.jpg` 1900×900
252,921 B · `images/icons/logo.png` 52×29 1,442 B ·
`images/icons/favicon.ico` 32,038 B · `fonts/Aldrich-Regular.woff2` 19,412 B ·
`fonts/Poppins-Regular.woff2` 48,416 B · `fonts/Poppins-Bold.woff2` 48,144 B ·
`fonts/fontawesome-webfont-subset.woff2` 524 B), screenshot converted to
`/tmp/coming-soon-6.png` (1200×972, source served as AVIF, decoded with
`avifdec`), background photo converted to `/tmp/cs06-bg01.png`. Research date:
2026-10-11.

## Visual summary (from screenshot + source)

One full-viewport screen. Behind everything is a PHOTOGRAPH — hot-air balloons
silhouetted against a sunrise over misty hills and a mesa (warm golden-brown
tones, 1900×900) — covered by a strong two-stop gradient overlay at 80%
opacity: bright BLUE `#009efd` at the top edge easing to GREEN `#2af598` at the
bottom. Balloon silhouettes ghost through the wash, so the photograph is clearly
present rather than decorative noise.

In the top-left corner sits a small white wordmark (the source uses a 52×29 PNG
reading "Oc"); in the top-right, three square white-outlined social buttons
(facebook, twitter, youtube) with transparent fills and white glyphs, sitting in
a neat row with small gaps.

Mid-left, the copy block: an uppercase light-weight "OUR WEBSITE IS" line, then
a very large, very heavy uppercase "COMING SOON" headline. Directly below it the
countdown — a FLIP CLOCK reading "35 : 17 : 59 : 57": eight small dark
near-black-navy cards (slightly rounded, tight 2px gaps) each holding one white
monospaced-looking digit (Aldrich), separated between digit groups by white
colons, with tiny uppercase captions "DAYS", "HRS", "MIN", "SEC" sitting just
below and slightly to the RIGHT of each group.

To the right, vertically centred in the band, a white rounded card
(390px wide, 10px corners): a heavy uppercase "NEWSLETTER" heading in dark grey,
then two full-width pale-grey rounded pill inputs reading "Name" and "Email"
(their text is CENTRED, unlike most forms), then a full-width green rounded
"Subscribe" button, then a two-line grey note: "And don't worry, we hate spam
too! You can unsubscribe at anytime."

Overall aesthetic: photographic and airy rather than flat — the blue→green wash
over a sunrise balloon photo, white type, a dark navy flip clock as the visual
anchor, and exactly one saturated action colour (the green button, which is also
the social-button hover). No nav bar, no scrolling sections, no footer band.

## Structure order (1:1 with the source DOM)

```
div.bg-img1.size1.overlay1.p-t-24        [style="background-image:url(images/bg01.jpg)"]
├─ div.flex-w.flex-sb-m.p-l-80.p-r-74.p-b-175.respon5      ← TOP BAR
│  ├─ div.wrappic1.m-r-30.m-t-10.m-b-10 > a[href="#"] > img(logo)
│  └─ div.flex-w.m-t-10.m-b-10
│     ├─ a.size3.flex-c-m.how-social.trans-04.m-r-6 > i.fa-facebook
│     ├─ a.size3.flex-c-m.how-social.trans-04.m-r-6 > i.fa-twitter
│     └─ a.size3.flex-c-m.how-social.trans-04.m-r-6 > i.fa-youtube-play
└─ div.flex-w.flex-sa.p-r-200.respon1                      ← BODY BAND
   ├─ div.p-t-34.p-b-60.respon3                            ← LEFT COLUMN
   │  ├─ p.l1-txt1.p-b-10.respon2            "Our website is"
   │  ├─ h3.l1-txt2.p-b-45.respon2.respon4   "Coming Soon"
   │  └─ div.cd100.flip-clock-wrapper        ← FLIP CLOCK (8 ul.flip + 4 dividers)
   └─ div.bg0.wsize1.bor1.p-l-45.p-r-45.p-t-50.p-b-18.p-lr-15-sm   ← NEWSLETTER CARD
      ├─ h3.l1-txt3.txt-center.p-b-43       "Newsletter"
      ├─ form.w-full.validate-form
      │  ├─ div.wrap-input100.validate-input.m-b-10[data-validate="Name is required"]
      │  │  └─ input.input100.placeholder0.s1-txt1[type=text][name=name][placeholder=Name]
      │  │     + span.focus-input100
      │  ├─ div.wrap-input100.validate-input.m-b-20[data-validate="Valid email is required: ex@abc.xyz"]
      │  │  └─ input.input100.placeholder0.s1-txt1[name=email][placeholder=Email]
      │  │     + span.focus-input100
      │  └─ button.flex-c-m.size2.s1-txt2.how-btn1.trans-04     "Subscribe"
      └─ p.s1-txt3.txt-center.p-l-15.p-r-15.p-t-25   spam note
```

The flip-clock inner structure (repeated per card, 8 cards total, two per unit):

```
span.flip-clock-divider.days            (also .hours / .minutes / .seconds)
ul.flip[.play when animating]
├─ li.flip-clock-before > a[href="#"] > div.up   > div.cl-shadow + div.inn(old digit)
│                                     + div.down > div.cl-shadow + div.inn(old digit)
└─ li.flip-clock-active > a[href="#"] > div.up   > div.cl-shadow + div.inn(new digit)
                                      + div.down > div.cl-shadow + div.inn(new digit)
```

DOM digits in the shipped file: 35 / 17 / 59 / 57 (matches the screenshot).

## Section-by-section fidelity notes

### 1. Screen wrapper + wash (`div.bg-img1.size1.overlay1.p-t-24`)

- `.size1{width:100%; min-height:100vh}` — full viewport, no scroll intended.
- `.p-t-24{padding-top:24px}` is the ONLY padding on the wrapper: no side, no
  bottom. The top bar's own 80px/74px side padding and the body band's 200px
  right padding are what inset the content (so the newsletter card's right edge
  sits ~200px from the viewport edge on desktop, while the top bar's social
  buttons sit only 74px in — an asymmetry worth preserving).
- `.bg-img1{background-position:center; background-repeat:no-repeat;
  background-size:cover}` + inline `background-image:url('images/bg01.jpg')`.
  Recreation: `https://picsum.photos/seed/airborne-bg/1900/900`.
- `.overlay1{position:relative; z-index:1}` + `::before{content:""; display:block;
  position:absolute; z-index:-1; width:100%; height:100%; top:0; left:0;
  background:#30bab6; background:linear-gradient(top,#009efd,#2af598);
  opacity:0.8}`. The legacy `top` keyword means "starting at the top", so the
  rendered wash is BLUE `#009efd` at the top → GREEN `#2af598` at the bottom
  (confirmed by the screenshot). `#30bab6` is the solid fallback where the
  gradient declaration is dropped.
- Recreation: a `relative` wrapper with the photo as `background-cover`, an
  absolutely-positioned gradient overlay at `opacity-80` (`z-index:-1`
  equivalent → place it under the content with `absolute inset-0`), and the two
  bands as children. The source's `all: revert` reboot guard and every source
  class name are NEVER copied.

### 2. Top bar (`div.flex-w.flex-sb-m.p-l-80.p-r-74.p-b-175.respon5`)

- `flex-wrap:wrap` + `justify-content:space-between` + `align-items:center`;
  `padding:0 74px 175px 80px`. The 175px bottom padding is what pushes the body
  band down away from the logo row — it is NOT a gap between sections to be
  replaced by an arbitrary margin.
- Responsive: `.respon5` at ≤576px → `padding-left:20px; padding-right:14px;
  padding-bottom:50px`.
- Logo wrapper `.wrappic1{display:block; flex-grow:1}` + `.wrappic1 img{
  max-width:100%}` with `.m-r-30.m-t-10.m-b-10` — grows to fill the row so the
  socials are pushed to the far right. Recreation: an original text wordmark
  (Poppins-Bold, white) instead of the PNG.
- Socials: `.size3{width:36px;height:36px}`, `.flex-c-m` (centre both axes),
  `.how-social{color:#fff; font-size:22px; background-color:transparent;
  border:2px solid #fff; border-radius:2px}`,
  `.how-social:hover{background-color:#00b26f; color:#fff}`, `.m-r-6`,
  `.trans-04{transition:all .4s}`. Icons: source FontAwesome glyphs inlined as
  SVG; recreation uses lucide-react `Facebook` / `Twitter` / `Youtube` with
  `aria-label`s. The 6px right margin stays on the last button too (source keeps
  it), so the row is not perfectly flush — harmless.

### 3. Body band (`div.flex-w.flex-sa.p-r-200.respon1`)

- `flex-wrap:wrap` + `justify-content:space-around` + `padding-right:200px`.
- Responsive: `.respon1` at ≤1400px → `padding:15px` (the 200px right padding
  collapses); at ≤1200px → `flex-direction:column; align-items:center` (stacked,
  centred — clock above card).
- Recreation: `flex flex-wrap justify-around pr-[200px]`, overridden at
  max-1400px (`p-[15px]`) and max-1200px (`flex-col items-center`).

### 4. Left column (`div.p-t-34.p-b-60.respon3`)

- `padding:34px 0 60px`; `.respon3` at ≤1200px → `display:flex;
  flex-direction:column; align-items:center`, with `.respon2{text-align:center}`
  on the eyebrow and headline. So below 1200px the whole left column is centred.
- Eyebrow `.l1-txt1`: Poppins-Regular 30px/1.2 white UPPERCASE, `.p-b-10`.
- Headline `.l1-txt2`: Poppins-Bold 70px/1.1 white UPPERCASE, `.p-b-45`;
  `.respon4` at ≤576px → 50px.
- Recreation: semantic `<p>` + `<h1>`; copy paraphrased ("Our website is" /
  "Coming Soon" are generic enough to keep, but the demo title strings "Coming
  Soon 6" / "Coming Soon V06" must never appear).

### 5. Flip clock (`div.cd100.flip-clock-wrapper`)

Wrapper: `display:flex; flex-wrap:wrap; position:relative; max-width:100%;
margin:0; margin-bottom:20px` (≤1200px → `justify-content:center`; ≤576px →
`max-width:240px; margin-right:26px`).

Cards: `ul.flip` = `position:relative; margin:2px; width:41px; height:54px;
font-size:36px; border-radius:3px; background:#0d1629`, with
`.flip-clock-wrapper .flip{box-shadow:none; margin-bottom:50px}`. Each card holds
two `li` (`flip-clock-before` / `flip-clock-active`) whose `a > div` halves
(`.up` top, `.down` bottom, `height:50%`, `overflow:hidden`,
`perspective:200px` on the link) each contain a `.cl-shadow` overlay and a
`div.inn` digit. Digits: `font-family:Aldrich-Regular; color:#fff; font-size:
35px; background-color:#0d1629; border-radius:3px; height:200%;
display:flex; align-items:center; justify-content:center`. The card's mid seam
(`div.up:after`, a 3px `rgba(0,0,0,0.4)` bar in the library CSS) is EXPLICITLY
HIDDEN by this theme (`.flip-clock-wrapper ul li a div.up:after{display:none}`),
so the cards read as one clean dark block.

Dividers/separators (the theme replaces the library's labels): each
`span.flip-clock-divider` is `display:block; position:relative; width:26px;
height:54px`; its `::before` renders the white colon (`content:":"`;
Aldrich-Regular 30px; flex-centred, full size) and is SUPPRESSED for the day
group (`.flip-clock-divider.days::before{display:none}`); its `::after` renders
the caption (`font-family:Poppins-Regular; color:#fff; font-size:12px;
text-transform:uppercase; text-align:center; width:90px; position:absolute;
left:100%; top:100%; padding-top:16px`) with `content:"days" | "hrs" | "min" |
"sec"`. Every span INSIDE a divider is hidden
(`.flip-clock-divider span{display:none}`), so the library's
`span.flip-clock-label` / `span.flip-clock-dot` are invisible — that is why the
screenshot shows only 12px captions sitting to the right of each group, level
with the colon, and no dots.

Flip animation (all CSS, no JS animation library):
- `ul.play li.flip-clock-active{animation:asd 0.5s 0.5s linear both}` — a
  z-index keyframe (2 → 4) that raises the flipping card.
- `ul.play li.flip-clock-active .down{animation:turn 0.5s 0.5s linear both}` —
  `rotateX(90deg)` → `rotateX(0deg)`: the new digit's lower half swings down
  into place after the 0.5s delay.
- `ul.play li.flip-clock-before .up{animation:turn2 0.5s linear both}` —
  `rotateX(0deg)` → `rotateX(-90deg)`: the old digit's upper half swings away
  immediately.
- Shadows: `ul.play li.flip-clock-before .up .cl-shadow` and
  `ul.play li.flip-clock-active .up .cl-shadow` use
  `linear-gradient(to bottom, rgba(0,0,0,0.1), black)`; the `.down` shadows use
  `linear-gradient(to bottom, black, rgba(0,0,0,0.1))`; they animate with
  `show 0.5s linear both` (opacity 0 → 1) and `hide 0.5s 0.3s linear both`
  (one duplicated declaration writes 0.2s — the theme's own inconsistency; the
  canonical value is 0.3s).
- Recreation: a React `FlipClock` with four groups of two cards; on each tick
  only the cards whose digit changed get the "playing" state so their halves
  re-run the rotateX animations (mirrors the source's
  `void ul.offsetWidth; ul.classList.add('play')` reflow trick).

Clock behaviour (`js/snippet.js`): `FLIP = {"D":35,"h":18}`;
`end = Date.now() + 35*864e5 + 18*36e5` (no absolute date — the demo always has
~35 days left, so it never reads zero); `setInterval(paint, 1000)`;
`digits()` = `String(d).padStart(Math.max(2, cards.length - 6), '0') + p(h) + p(m)
+ p(s)` sliced to the last `cards.length` characters (8 → 2-digit day pair +
hh + mm + ss); `paint()` compares the currently shown `.inn` text per card and
returns early when unchanged, then moves the old digit into
`flip-clock-before`, writes the new digit into `flip-clock-active`, removes and
re-adds `play` (with a forced reflow) so the animation replays. Interval is never
cleared in the source (page-lifetime); the recreation must clear it on unmount.

### 6. Newsletter card
(`div.bg0.wsize1.bor1.p-l-45.p-r-45.p-t-50.p-b-18.p-lr-15-sm`)

- `.bg0{background-color:#fff}`, `.wsize1{width:390px; max-width:100%}`,
  `.bor1{border-radius:10px}`; `padding:50px 45px 18px`; at ≤576px
  `.p-lr-15-sm` → `padding-left:15px; padding-right:15px`. Note the very shallow
  18px bottom padding: the spam note sits close to the card's bottom edge.
- Title `.l1-txt3`: Poppins-Bold 30px/1.2 `#333` UPPERCASE, `.txt-center`,
  `.p-b-43`.
- Wells: `.wrap-input100{position:relative; width:100%; height:50px; z-index:1}`
  (`.validate-input{position:relative}`); Name `.m-b-10`, Email `.m-b-20`.
- Fields: `.input100{display:block; width:100%; background:#f5f5f5; height:100%;
  border-radius:25px; padding:0 20px; text-align:center}` — the CENTRED text is
  distinctive; keep it. Text `.s1-txt1` = Poppins-Bold 15px/1.2 `#555`;
  placeholder `#999999` (`.placeholder0` webkit/moz/ms variants). Recreation
  must keep a visible focus style (source relies on the bloom + `outline:none`).
- Focus bloom: `.focus-input100{position:absolute; bottom:0; left:0; z-index:-1;
  width:100%; height:100%; border-radius:35px; box-shadow:0px 0px 0px 0px;
  color:rgba(0,178,111,0.5)}` + `.input100:focus + .focus-input100{animation:
  anim-shadow 0.5s ease-in-out forwards}` + `@keyframes anim-shadow{to{
  box-shadow:0px 0px 80px 30px; opacity:0}}` — a green glow that blooms outward
  and fades. Recreation: a sibling ring element (or pseudo-element) keyed off
  `:focus-within` so it also works for the a11y focus state.
- Button: `.size2{width:100%; height:50px}` + `.flex-c-m` + `.s1-txt2` =
  Poppins-Bold 15px/1.2 white + `.how-btn1{border-radius:25px; background-color:
  #00b26f; padding-right:20px; padding-left:20px}` +
  `.how-btn1:hover{background-color:#333333}` + `.trans-04` (`all .4s`). The
  hover is a flat colour swap — there is NO gradient or overlay here (unlike the
  `advent` / `eve` siblings).
- Note: `.s1-txt3` = Poppins-Regular 13px/1.5 `#999`, `.txt-center`,
  `.p-l-15.p-r-15.p-t-25`. Source text keeps its typo ("unsubcribe"); the
  recreation writes "unsubscribe" correctly — same kind of content, no copied
  attribution.

### 7. Validation (`.validate-form` / `.alert-validate`)

- Source rules: e-mail field (or any `name="email"`) must match
  `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`; every other field must be non-empty after
  `trim()`. Failure → `.alert-validate` on the closest `.validate-input` +
  `preventDefault()`; the class is removed on `focus`. No success path at all in
  the source (a valid submit reloads the demo page) → the recreation shows a
  React-state confirmation and never navigates.
- Bubble: `::before{content:attr(data-validate); max-width:70%;
  background-color:#fff; border:1px solid #c80000; border-radius:16px;
  padding:5px 30px 6px 10px; top:50%; transform:translateY(-50%); right:12px;
  pointer-events:none; font-family:Poppins-Bold; color:#c80000; font-size:12px;
  line-height:1.4; text-align:left; visibility:hidden; opacity:0;
  transition:opacity .4s}` + `::after{content:"\f06a"; font-family:FontAwesome;
  display:block; position:absolute; color:#c80000; font-size:16px; top:50%;
  transform:translateY(-50%); right:18px}`. Visibility: hidden until an invalid
  submit; visible on field hover (`.alert-validate:hover:before`); ALWAYS visible
  at ≤992px (`.alert-validate::before{visibility:visible; opacity:1}`). The
  recreation replaces the FontAwesome `\f06a` glyph with a lucide-react
  `AlertCircle` (16px, `#c80000`, right 18px) and must expose the message text to
  assistive tech (`aria-invalid` + `aria-describedby`) since the source bubble is
  hover-only for most viewports.

### 8. Base type & fonts

- `body,html{font-family:Arial,sans-serif; font-size:15px; color:#666666;
  height:100%; background-color:#fff}`; `input,textarea{display:block;
  outline:none; border:none}`; `button{outline:none; border:none;
  background:transparent; cursor:pointer}`; `ul,li{margin:0;
  list-style-type:none}`; `h3,p{margin:0}`. All visible type is Poppins or
  Aldrich.
- Fonts (source, self-hosted woff2): Poppins-Regular (400), Poppins-Bold (700),
  Aldrich-Regular (400 — clock digits and colons). Recreation loads Poppins
  (400 / 700) + Aldrich (400) from Google Fonts via `<link>` in `index.html`.
- Icons: source FontAwesome (inlined SVG glyphs in the top bar, a subset woff2
  for the validation glyph). Recreation uses lucide-react only.

## Palette (for `@theme`)

| Role | Value |
| --- | --- |
| wash top (blue) | `#009efd` |
| wash bottom (green) | `#2af598` |
| wash solid fallback | `#30bab6` |
| wash opacity | `0.8` |
| brand green (button, social hover) | `#00b26f` |
| button hover | `#333333` |
| clock card / digit background | `#0d1629` |
| card surface | `#ffffff` |
| card title | `#333333` |
| input fill | `#f5f5f5` |
| input text | `#555555` |
| placeholder | `#999999` |
| note | `#999999` (13px) |
| focus bloom | `rgba(0,178,111,0.5)` |
| error | `#c80000` |
| type on wash / clock | `#ffffff` |

Radii: 25px (inputs, button), 10px (card), 3px (clock cards + digits), 2px
(social buttons), 35px (bloom ring), 16px (validation bubble).
Motion: `all .4s` (social + button), `opacity .4s` (bubble), `0.5s linear`
(flip), `0.5s ease-in-out` (bloom).

## Responsive summary (source breakpoints)

| Breakpoint | Changes |
| --- | --- |
| ≤1400px | `.respon1` → body band `padding:15px` (the 200px right padding collapses) |
| ≤1200px | `.respon1` → body band stacks (`flex-direction:column`, `align-items:center`); `.respon2` → eyebrow + headline centred; `.respon3` → left column becomes a centred flex column; `.flip-clock-wrapper` → `justify-content:center` |
| ≤992px | `.alert-validate::before` → validation bubble always visible |
| ≤576px | `.respon5` → top bar `padding:20px 14px 50px`; `.respon4` → headline 50px; `.p-lr-15-sm` → card side padding 15px; `.flip-clock-wrapper` → `max-width:240px; margin-right:26px`; `.flip-clock-divider.days` → `width:26px`; `.flip-clock-divider.minutes::before{display:none}` (the minutes colon is dropped so the clock fits) |

The recreation must keep the ≤576px clock shrink: cards stay 41×54px, the
wrapper narrows to 240px and the minutes colon disappears, letting the four
groups wrap inside the narrower column.

## Deviations (documented, deliberate)

1. **Photograph replaced** — `picsum.photos/seed/airborne-bg/1900/900` instead
   of the source `bg01.jpg` (assets are never copied). The wash, its opacity and
   the `cover` behaviour are unchanged.
2. **Wordmark** — an original white Poppins-Bold text mark replaces the source
   52×29 PNG logo.
3. **Icons** — lucide-react `Facebook` / `Twitter` / `Youtube` replace the
   inlined FontAwesome glyphs; lucide `AlertCircle` replaces the FontAwesome
   `\f06a` validation glyph.
4. **Attribution added** — the source has NO footer credit; the monorepo
   requires a Component Dock link, so a small Poppins-Regular 12–13px `#999`
   centred line is added under the spam note inside the card
   (`https://www.componentdock.com/`). This is the only layout addition.
5. **Copy** — paraphrased where it is template-specific; the demo title
   "Coming Soon 6" / "Coming Soon V06", the source credit line and the misspelt
   "unsubcribe" are never reproduced.
6. **Behaviour** — the source's page-lifetime `setInterval` is cleared on
   unmount; the recreation adds a React-state submit confirmation because the
   source has no success path; a11y attributes (`aria-label` on social buttons,
   `aria-invalid` / `aria-describedby` on the fields) are added.

## Provenance

- Source page: https://colorlib.com/wp/template/comingsoon_06/ (HTTP 200,
  109,293 B, title "Coming Soon V06 - Free Website Template 2026 - Colorlib",
  verified 2026-10-11)
- Preview (404): https://preview.colorlib.com/theme/comingsoon_06/
- Reference zip: https://preview.colorlib.com/downloads/free/comingsoon_06.zip
  (HTTP 200, 384,899 B)
- Screenshot:
  https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-6.jpg
  (AVIF, 1200×972)
- TEMPLATES.md: `## Uncategorized (15)`, line 3037 (`- [ ]`), slug appears once
