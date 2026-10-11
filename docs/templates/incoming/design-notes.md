# Incoming — design notes (replication research)

Source: ColorLib **Coming Soon V03** —
https://colorlib.com/wp/template/comingsoon_03/ (source slug `comingsoon_03`;
ColorLib page title "Coming Soon V03 - Free Under Construction Template 2026",
HTTP 200, 109,371 B, verified 2026-10-11). Theme preview
`https://preview.colorlib.com/theme/comingsoon_03/` returns **HTTP 404**
(9 B, `text/plain;charset=UTF-8`, verified 2026-10-11), and so does
`https://preview.colorlib.com/theme/comingsoon_03/index.html`; the ColorLib
template page exposes only the anchor preview
`https://preview.colorlib.com/#comingsoon_03` and a downloadable source zip.
Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_03.zip`
(HTTP 200, 154,001 B, `application/zip`) as the DOM/CSS/behaviour reference,
plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-3.jpg`.
Reference artifacts: `/tmp/prep3/comingsoon_03.zip`, extracted to
`/tmp/prep3/src03/comingsoon_03/` (`index.html` 2,033 B · `css/style.css`
10,104 B · `js/snippet.js` 3,069 B · `README.md` 1,260 B · `images/bg01.jpg` ·
`images/icons/logo.png` · `images/icons/favicon.ico` · `fonts/`
Barlow-Regular/Medium/Bold woff2 + a FontAwesome subset), screenshot converted
to `/tmp/prep3/shot3.png` (1200×972, source served as AVIF). Research date:
2026-10-11.

## Visual summary (from screenshot)

A single full-viewport coming-soon screen, but unlike its series siblings there
is a distinct **card**: a wide, softly rounded, translucent white panel
(`880px`, `border-radius:18px`, `rgba(255,255,255,0.8)`) floating centred on a
light, softly blurred photograph. The photo shows a large glossy green leaf
(anthurium/peace-lily) entering from the left edge and, low on the left, a clear
glass and a white plinth — a bright, airy, near-white backdrop with soft
shadows, so the card reads as a frosted panel rather than a dark wash.

Inside the card, running down the centre: a small dark wordmark near the top
with a tiny purple sun/asterisk glyph beside it; directly under it the grey line
"Our website is under construction"; then one centred row of four **dark
rectangular tiles** (rounded, near-black `#333333`) reading "35 Days",
"17 Hours", "59 Minutes", "57 Seconds" — large white numbers with small white
labels; then a wide vertical gap (the row reserves `min-height:230px`); then a
compact form row: a narrow light-grey input reading "Your Email" immediately
left of a purple "Get Notified" button; and directly beneath it the small grey
line "I promise to never spam" with "never" underlined. There is no navigation
and no footer band. Overall aesthetic: light, photographic, restrained — two
accents only (purple `#846add`, dark `#333333`) over grey neutrals.

## Structure order (1:1 with the source DOM)

The reference is one screen, not a scrolling page:

1. `div.bg-img1.size1.flex-w.flex-c-m.p-t-55.p-b-55.p-l-15.p-r-15` — the
   screen: `width:100%; min-height:100vh`, wrapping, centred both axes, with
   55px vertical / 15px horizontal padding and an inline
   `background-image:url('images/bg01.jpg')` plus `.bg-img1`
   (`background-position:center; background-repeat:no-repeat;
   background-size:cover`). ONE static image — no slideshow layer, no
   `setInterval` for the background.
   1. `div.wsize1.bor1.bg1.p-t-175.p-b-45.p-l-15.p-r-15.respon1` — the card:
      `max-width:100%; width:880px`, `border-radius:18px`,
      `background-color:rgba(255,255,255,0.8)`, padding `175px 15px 45px`, and
      `padding-top:80px` at ≤576px. Contains, in order:
      1. `div.wrappic1 > img[alt=LOGO]` — centred logo image
         (`images/icons/logo.png`; `.wrappic1{display:block;width:100%;
         text-align:center}`, `.wrappic1 img{max-width:100%}`)
      2. `p.txt-center.m1-txt1.p-t-33.p-b-68` — "Our website is under
         construction"
      3. `div.wsize2.flex-w.flex-c.hsize1.cd100` — countdown row (wrapping,
         centred, `min-height:230px`) with four
         `div.flex-col-c-m.size2.how-countdown` cells, each a
         `span.l1-txt1.p-b-9.days|hours|minutes|seconds` (DOM: 35 / 17 / 50 /
         39) over a `span.s1-txt1` label (Days / Hours / Minutes / Seconds)
      4. `form.flex-w.flex-c-m.contact100-form.validate-form.p-t-55` — wrapping
         centred row, `width:100%`: `div.wrap-input100.validate-input.where1`
         (`data-validate="Email is required: ex@abc.xyz"`) with
         `input.s1-txt2.placeholder0.input100[type=text name=email
         placeholder="Your Email"]` + `span.focus-input100`, and
         `button.flex-c-m.s1-txt3.size3.how-btn.trans-04.where1` —
         "Get Notified"
      5. `p.s1-txt4.txt-center.p-t-10` — "I promise to <span
         class="bor2">never</span> spam"
2. `js/snippet.js` — two framework-free behaviours: `.validate-form` submit
   validation and the `.cd100` countdown (details below). No third behaviour;
   in particular there is no background slideshow.

## Section-by-section fidelity notes

- **Layout / screen** — `.size1{width:100%;min-height:100vh}` is applied to
  BOTH the outer wrapper and the card, so the wrapper is a
  `flex-w flex-c-m` (wrapping, justify-centre, align-centre) box with
  `.p-t-55.p-b-55.p-l-15.p-r-15`. Recreation: a single `min-h-screen` flex
  wrapper centred both axes with `px-[15px] py-[55px]` — no grid, no split.
- **Photo backdrop** — the inline `background-image` plus `.bg-img1` means a
  single static, full-bleed, centre-cropped photo. Unlike `premiere`
  (`comingsoon_02`), there is NO fixed slideshow layer and NO dark overlay;
  the design leans on the card's `rgba(255,255,255,0.8)` wash instead.
  Recreation: one deterministic placeholder
  (`picsum.photos/seed/incoming-bg-1/1600/1000`) as a cover background layer.
- **Card** — `.wsize1.bor1.bg1` = 880px wide capped at 100%, radius 18px,
  `rgba(255,255,255,0.8)`. The huge `padding-top:175px` (dropping to 80px at
  ≤576px via `.respon1`) is what pushes the wordmark down into the middle of
  the screen; keep it — the design's generous top white space is a signature,
  not a mistake. Horizontal padding is 15px, bottom 45px.
- **Logo / wordmark** — the source ships a raster logo (`images/icons/logo.png`,
  plus a favicon) and the demo renders it as a small dark wordmark with a
  purple sun glyph. Assets must NOT be copied: the recreation renders its own
  wordmark (text in Barlow-Bold plus a small lucide-react accent icon), centred
  and width-capped.
- **Headline** — `.m1-txt1` Barlow-Bold 25px/1.2 `#999999`, centred, with
  `.p-t-33` above and an unusually large `.p-b-68` below (the gap before the
  tiles). One line only; the source copy is "Our website is under
  construction" (paraphrase freely, keep the same kind).
- **Countdown tiles** — the clearest difference from the other coming-soon
  templates: rectangular dark tiles, not circles. `.how-countdown` =
  `background-color:#333333; border-radius:10px; margin:0px 18px 25px 18px`;
  `.size2` = `90px × 100px`; the row is `.wsize2.hsize1` = `min-height:230px`,
  wrapping and centred, so the four tiles stay on one line on desktop and wrap
  on narrow screens. Inside each tile `.flex-col-c-m` centres a column:
  `span.l1-txt1.p-b-9` = Barlow-Medium 40px/1 white (the number) over
  `span.s1-txt1` = Barlow-Regular 14px/1 white (the label). The 230px row
  height leaves visible empty space below the tiles — keep it.
- **Countdown behaviour** — `js/snippet.js` config
  `{"Y":0,"M":0,"D":35,"h":18,"m":0,"s":0}` → `new Date(0, -1, 35, 18, 0, 0)`;
  since that is in the past the source falls back to
  `Date.now() + 35 d + 18 h`, and the same fallback must be kept so the demo
  never reads `00:00:00`. Ticks every 1000 ms; `days` is written unpadded while
  hours, minutes and seconds go through `('0'+n).slice(-2)`; the interval
  clears when the remaining time hits zero.
- **Input well** — `.wrap-input100` = 220px wide, `max-width:calc(100% - 10px)`,
  `position:relative`, `background-color:#e6e6e6`, `height:40px`,
  `border-radius:5px`; the field itself is `height:100%; padding:0 20px`, border
  none, transparent fill; text `.s1-txt2` = Barlow-Regular 15px/1.4 `#846add`;
  placeholder `#999999` ("Your Email"). Note how small this control is compared
  with the `premiere` pill (220×40 vs 500×70) — the compactness is part of the
  design.
- **Focus ring** — `.focus-input100` is a full-size absolutely positioned layer
  (`border:1px solid #846add; border-radius:5px; pointer-events:none`) that
  starts hidden (`visibility:hidden; opacity:0;
  transform:scaleX(1.1) scaleY(1.2)`) and, on `.input100:focus + .focus-input100`,
  becomes visible, opaque and `scale(1)` — a subtle "ring snaps in" effect over
  `all .4s`. Recreation: same absolutely positioned layer driven by
  focus state (Tailwind `peer-focus:` or a conditional class).
- **Button** — `.size3` = `min-width:120px; height:40px`; `.how-btn` =
  `padding:0 20px; background-color:#846add; border-radius:5px`, hover
  `#333333`, label `.s1-txt3` Barlow-Regular 15px/1.4 white; `.trans-04` = all
  `.4s`. The purple button is the primary accent; the hover flipping to the
  same `#333333` as the tiles ties the two accents together.
- **Form row** — `.contact100-form{width:100%}` with `.p-t-55` (55px gap after
  the tile row) and `.where1{margin:20px 5px 0px 5px}` on both the input wrapper
  and the button, so the two controls sit 10px apart and wrap when narrow.
- **Validation** — on submit, `js/snippet.js` tests each
  `.validate-input .input100` with `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` (the
  `email` field) and adds `.alert-validate` to the closest `.validate-input`
  when it fails, calling `preventDefault`; the class is removed on `focus`. The
  bubble styling is `.alert-validate::before` (white fill, `1px solid #c80000`,
  radius 2px, `padding 4px 25px 4px 10px`, `top:50%` + `translateY(-50%)`,
  `right:12px`, Barlow-Regular 13px/1.4 `#c80000`, `transition:opacity .4s`,
  hidden by default) plus a `::after` FontAwesome `\f071` glyph (14px
  `#c80000`, `right:18px`, vertically centred). Visibility: hidden until the
  invalid submit, then revealed by `.alert-validate:hover:before` and ALWAYS by
  the `@media (max-width:992px)` block. Recreation: React state for the error,
  the same visibility rules in Tailwind (hover + a `max-[992px]` variant), and
  a lucide-react `AlertTriangle` instead of the icon font.
- **Small print** — `.s1-txt4` Barlow-Regular 14px/1.5 `#999999` with `.p-t-10`
  and the word "never" wrapped in `.bor2`
  (`border-bottom:1px solid #999999`).
- **Base type** — `body,html{font-family:Arial,sans-serif; font-size:15px;
  color:#666666; background-color:#fff}` sits over the reboot's
  `-apple-system…`/`#212529` base; the visible type is entirely Barlow
  (Regular / Medium / Bold, self-hosted woff2 in the source). Recreation: load
  Barlow 400/500/700 from Google Fonts via `<link>` in `index.html`.
- **No framework, no CDN** — the snippet has zero dependencies (its README says
  so explicitly); everything is inlined in three files. The recreation is
  Tailwind 4 + React state only, and never copies the reboot, the class names,
  the CSS file, the photos, or the fonts.

## What the recreation must NOT carry over

- No `colorlib` / preview URL / source-slug / demo-brand strings in
  `apps/incoming` (provenance lives in this doc, the spec, TEMPLATES.md, and
  the PR).
- No copied assets: the background photo, `logo.png`, `favicon.ico`, the
  Barlow woff2 files, and the FontAwesome subset are all replaced (picsum
  placeholders, a text wordmark + lucide icon, Google Fonts, lucide
  `AlertTriangle`).
- No source class names or the Bootstrap-style reboot; the card's frosted look
  is rebuilt from theme tokens.
- Component Dock attribution (`https://www.componentdock.com/`) replaces any
  external/attribution link in the footer line.
