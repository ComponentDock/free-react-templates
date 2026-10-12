# Awaited — design notes (replication research)

Source: ColorLib **Coming Soon V09** —
https://colorlib.com/wp/template/comingsoon_09/ (source slug `comingsoon_09`;
ColorLib page HTTP 200, 109,296 B, `text/html; charset=UTF-8`, page title
"Coming Soon V09 - Free Website Template 2026 - Colorlib", description "An
engaging free coming soon website template with a unique full-screen background
slider, social icons and countdown timer" — verified 2026-10-11). The theme
preview `https://preview.colorlib.com/theme/comingsoon_09/` returns **HTTP 404**
(9 B, `text/plain;charset=UTF-8`, verified 2026-10-11 — the same live-preview gap
as the rest of the `comingsoon_*` family; there is no `theme/bootstrap/<slug>/`
variant either). Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_09.zip`
(HTTP 200, 436,524 B, `application/zip`) — the real template's own files — as the
DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-9.jpg`
(HTTP 200, 125,303 B, served as `image/jpeg` — 1200×972 at prep time;
  ⚠️ re-measured 2026-10-13 it answers `image/avif`, 40,808 B, so decode the
  fetched bytes rather than trusting the extension).

Reference artifacts: `/tmp/cs09/cs09.zip`, extracted to
`/tmp/cs09/out/comingsoon_09/` (`index.html` 4,568 B · `css/style.css` 8,825 B ·
`js/snippet.js` 2,997 B · `README.md` 1,260 B · `images/bg01.jpg` 1900×900,
102,266 B · `images/bg02.jpg` 1900×900, 185,088 B · `images/icons/logo.png`
132×29 RGBA, 2,034 B · `images/icons/favicon.ico` 32,038 B ·
`fonts/Poppins-Regular.woff2` 48,416 B · `fonts/Poppins-Thin.woff2` 44,820 B ·
`fonts/Poppins-Black.woff2` 47,176 B), screenshot saved to `/tmp/cs09/shot.jpg`
(1200×972), ColorLib page saved to `/tmp/cs09/src09.html`. Research date:
2026-10-11.

## Visual summary (from screenshot + source)

One full-viewport screen with *no scrolling content*. Behind everything is a
`position:fixed`, full-size photograph slideshow that cross-fades between two
`1900×900` photos every 7 s. Over the photo sit TWO full-screen layers inside the
content column: a `#b224ef` (bottom) → `#7579ff` (top) violet gradient at
`opacity:0.3`, and above it a `rgba(0,0,0,0.4)` black scrim. The result is a soft,
low-contrast lavender/mauve film: the photography reads as texture, brightest at
the top and slightly warmer darker toward the bottom.

The content column is `justify-content:space-between`, giving three bands:

1. **Top bar** — left: a small white wordmark image (the source logo says
   "OCEAN"; recreation renders its OWN name). Its container has `flex-grow:1`, so
   it also pushes the CTA to the right edge. Right: a white pill button,
   `min-width:140px`, `height:50px`, `border-radius:25px`, UPPERCASE `#555`
   label, labelled "Sign Up" in the source (use a "Sign Up"-equivalent string).
2. **Centred middle** — a very THIN, widely letterspaced, half-transparent white
   UPPERCASE heading ("COMING SOON"), then four big heavy white numbers spread
   across the width (`35 18 59 57` in the source's static DOM), each with a small
   white UPPERCASE label under its LEFT side ("DAYS", "HOURS", "MINUTES",
   "SECONDS"). The thin-heading / heavy-digits weight contrast is the signature of
   this slug.
3. **Bottom band** — three small (36×36) white-outline circular social discs
   (Facebook, Twitter/X, YouTube), centred.

The screenshot matches this exactly: a sandy-lavender washed screen, white
wordmark top-left, white "SIGN UP" pill top-right, thin airy "COMING SOON" over
heavy "35 18 59 57", small left-indented labels, and three outline discs at the
bottom.

## Background photographs

- `bg01.jpg` (1900×900, 102,266 B, average `rgb(202,214,225)`) — an aerial-ish
  **ocean surface**: deep blue water filling the lower half, a bright hazy
  white/pale-blue sky occupying the upper half with lots of empty negative space;
  this is the photo the source's "OCEAN" wordmark pairs with. Corners: top-left
  `rgb(255,255,255)`, top-right `rgb(248,247,252)`, bottom-left `rgb(171,187,202)`,
  bottom-right `rgb(16,88,113)`.
- `bg02.jpg` (1900×900, 185,088 B, average `rgb(101,99,99)`) — a **modern office
  interior**: a corridor with black-framed glass partitions down the centre, a
  light-wood shelving unit on the left, cool grey-blue walls and a polished pale
  floor. Much darker and greyer than `bg01`, so the 7 s cross-fade shifts the page
  from a bright airy wash to a dimmer grey one.

Recreation placeholders (deterministic, per `docs/replication.md`):
`https://picsum.photos/seed/awaited-bg1/1900/900` and
`https://picsum.photos/seed/awaited-bg2/1900/900`. The source photos (and the
`logo.png` wordmark, the favicon and the fa-brand SVG paths) are NEVER copied.

## DOM skeleton (from the source zip)

```
div.simpleslide100                              <- fixed background slideshow
  div.simpleslide100-item.bg-img1  (bg01.jpg)
  div.simpleslide100-item.bg-img1  (bg02.jpg, style="display:none")

div.flex-col-c-sb.size1.overlay1                <- content layer (space-between)
  div.w-full.flex-w.flex-sb-m.p-l-80.p-r-80.p-t-22.p-lr-15-sm   <- TOP BAR
    div.wrappic1.m-r-30.m-t-10.m-b-10 > a > img LOGO.png
    div.flex-w.m-t-10.m-b-10 > a.size2.m1-txt1.flex-c-m.how-btn1.trans-04
      "Sign Up"
  div.flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-120                 <- CENTRED
    h3.l1-txt1.txt-center.p-b-40.respon1    "Coming Soon"
    div.flex-w.flex-c-m.cd100                                   <- COUNTDOWN
      div.flex-col-c.wsize1.m-b-30 > span.l1-txt2.p-b-9.days "35"
                                   + span.s1-txt1.where1.p-l-35 "Days"
      div.flex-col-c.wsize1.m-b-30 > span.l1-txt2.p-b-9.hours "17"
                                   + span.s1-txt1.where1.p-l-35 "Hours"
      div.flex-col-c.wsize1.m-b-30 > span.l1-txt2.p-b-9.minutes "50"
                                   + span.s1-txt1.where1.p-l-35 "Minutes"
      div.flex-col-c.wsize1.m-b-30 > span.l1-txt2.p-b-9.seconds "39"
                                   + span.s1-txt1.where1.p-l-35 "Seconds"
  div.flex-w.flex-c-m.p-b-35                                      <- SOCIAL ROW
    a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5  (facebook)
    a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5  (twitter)
    a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5  (youtube)
```

## CSS token reference (verbatim from `css/style.css`)

```css
.simpleslide100 { display:block; position:fixed; z-index:0; width:100%; height:100%; top:0; left:0 }
.simpleslide100-item { display:block; position:absolute; width:100%; height:100%; top:0; left:0 }
.bg-img1 { background-position:center; background-repeat:no-repeat; background-size:cover }

.size1 { width:100%; min-height:100vh }
.overlay1 { position:relative; z-index:1 }
.overlay1::before {
  content:""; display:block; position:absolute; z-index:-1;
  width:100%; height:100%; top:0; left:0;
  background:#7579ff;
  background:linear-gradient(bottom, #b224ef, #7579ff);   /* legacy bottom = to top */
  opacity:0.3;
}
.overlay1::after {
  content:""; display:block; position:absolute; z-index:-1;
  width:100%; height:100%; top:0; left:0;
  background:rgba(0,0,0,0.4);
}

.flex-w  { flex-wrap:wrap }
.flex-c-m { justify-content:center; align-items:center }
.flex-sb-m { justify-content:space-between; align-items:center }
.flex-col-c { flex-direction:column; align-items:center }
.flex-col-c-m { flex-direction:column; align-items:center; justify-content:center }
.flex-col-c-sb { flex-direction:column; align-items:center; justify-content:space-between }
.trans-04 { transition:all 0.4s }

.w-full  { width:100% }
.p-t-22  { padding-top:22px }  .p-t-50 { padding-top:50px }
.p-b-9   { padding-bottom:9px } .p-b-35 { padding-bottom:35px }
.p-b-40  { padding-bottom:40px } .p-b-120 { padding-bottom:120px }
.p-l-15  { padding-left:15px } .p-l-35 { padding-left:35px } .p-l-80 { padding-left:80px }
.p-r-15  { padding-right:15px } .p-r-80 { padding-right:80px }
.m-t-10  { margin-top:10px } .m-b-5 { margin-bottom:5px } .m-b-10 { margin-bottom:10px }
.m-b-30  { margin-bottom:30px } .m-l-3 { margin-left:3px } .m-r-3 { margin-right:3px }
.m-r-30  { margin-right:30px } .txt-center { text-align:center }

.s1-txt1 { font-family:Poppins-Regular; font-size:12px; color:#fff; line-height:1; text-transform:uppercase }
.m1-txt1 { font-family:Poppins-Regular; font-size:18px; color:#555; line-height:1.2; text-transform:uppercase }
.l1-txt1 { font-family:Poppins-Thin; font-size:72px; line-height:1.1;
           color:rgba(255,255,255,0.5); text-transform:uppercase; letter-spacing:15px }
.l1-txt2 { font-family:Poppins-Black; font-size:120px; line-height:1; color:#fff; text-transform:uppercase }

.size2 { min-width:140px; height:50px }
.size3 { width:36px; height:36px }
.wsize1 { width:195px }
.where1 { align-self:flex-start }

.wrappic1 { display:block; flex-grow:1 }
.wrappic1 img { max-width:100% }
.how-btn1 { padding:0 15px; background-color:#fff; border-radius:25px }
.how-btn1:hover { background-color:#555555; color:#fff }
.how-social { color:#fff; font-size:18px; border:1px solid #fff;
              background-color:transparent; border-radius:50% }
.how-social:hover { background-color:#fff; color:#555 }

body,html { font-family:Arial,sans-serif; font-size:15px; color:#666666;
            height:100%; background-color:#fff }
h3 { margin:0px }

@media (max-width:576px) {
  .p-lr-15-sm { padding-left:15px; padding-right:15px }
  .respon1 { font-size:45px }
}
```

Fonts (`@font-face`, self-hosted woff2): **Poppins-Regular**, **Poppins-Thin**,
**Poppins-Black** — no Bold, no serif. Google Fonts equivalent: Poppins weights
**100 / 400 / 900**.

## Behaviour (`js/snippet.js`)

- **Countdown** — `COUNTDOWNS = [{sel:".cd100", kind:"spans", cfg:{Y:0,M:0,D:35,
  h:19,m:0,s:0}}]`. Target `new Date(0, -1, 35, 19, 0, 0)` is always in the past,
  so `end = Date.now() + 35*864e5 + 19*36e5` (now + 35 d + 19 h) is what runs.
  `paint()` writes `r.d` RAW into `.days`, and `pad(r.h)`/`pad(r.m)`/`pad(r.s)`
  (`pad = n => ('0'+n).slice(-2)`) into `.hours`/`.minutes`/`.seconds`; runs once
  immediately then every 1000 ms; `clearInterval` when `r.t <= 0`. Skips elements
  already containing a `.flip-clock-wrapper`.
- **Slideshow** — for each `.simpleslide100`: needs ≥2 items; sets
  `transition:opacity 1000ms`, shows item 0 (`opacity:1; display:''`) and hides
  the rest; then, unless `prefers-reduced-motion: reduce` matches, every 7000 ms
  cross-fades current→next (`next.style.display=''; next.style.opacity='0'` then
  next frame `next.opacity='1'; cur.opacity='0'`, and `cur.display='none'` after
  `SPEED=1000` ms), wrapping `now = (now+1) % items.length`.

There is NO form/validation, NO jQuery, NO framework and NO CDN call in this
slug.

## Source → React adaptation table

| Reference (source)                                  | Recreation (`apps/awaited`)                                                   |
| --------------------------------------------------- | ----------------------------------------------------------------------------- |
| `.simpleslide100` fixed layer with 2 bg items       | `Slideshow.tsx` — `fixed inset-0` layer, two cover photos, 7 s cross-fade     |
| `bg01.jpg` / `bg02.jpg`                             | `picsum.photos/seed/awaited-bg1/1900/900` + `.../awaited-bg2/1900/900`        |
| `logo.png` white wordmark ("OCEAN")                 | app's own name rendered as a white wordmark (no image asset copied)           |
| `.size2.m1-txt1.how-btn1` "Sign Up"                 | `SignUpButton.tsx` pill, "Sign Up"-equivalent copy, hover invert              |
| `h3.l1-txt1` Poppins-Thin 72px/15px, 0.5 white      | `Heading.tsx` — Poppins-Thin 100, `tracking-[15px]`, `text-white/50`          |
| `.cd100` four `.wsize1` units, Poppins-Black 120px  | `Countdown.tsx` — four `w-[195px]` columns, Poppins-Black 900 numbers         |
| `.s1-txt1.where1.p-l-35` labels (left-indented)     | label: `self-start pl-[35px]`, 12px UPPERCASE white                           |
| `.how-social` circles (inlined fa SVGs)             | lucide-react Facebook / Twitter-X / YouTube, `border border-white rounded-full` |
| (no footer credit in the source)                    | `Attribution.tsx` — "More templates at Component Dock" → componentdock.com    |

## Sibling comparison (same `comingsoon_*` family)

The `## Uncategorized (15)` `comingsoon_01..15` screenshots differ from the
`## Coming Soon (8)` `0N-comming-soon` set (different pages entirely). Within the
`comingsoon_*` group this slug (`comingsoon_09`) is distinctive for FOUR reasons —
do not blur it with its siblings:

- **It is the only one with a fixed, full-screen, cross-fading TWO-photo
  background slideshow** (`bg01` + `bg02`, 7 s cycle). Earlier siblings use a
  single static photo.
- **Its wash is a low-opacity (0.3) violet gradient** (`#b224ef` → `#7579ff`) — a
  periwinkle/magenta pair — over a `rgba(0,0,0,0.4)` scrim; the neighbouring
  `comingsoon_08` (`forthcoming`) is a 0.9-opacity magenta-purple (`#aa076b` →
  `#61045f`) over a `rgba(0,0,0,0.2)` scrim, i.e. much heavier and pinker. Verify
  the wash opacity and both gradient stops against the live sheet — they are the
  easiest token to copy wrongly.
- **Its heading is Poppins-Thin (100)** at 72px with 15px letter-spacing and
  `rgba(255,255,255,0.5)` colour, over the family's HEAVIEST digits
  (Poppins-Black 900 at 120px). No sibling pairs these two extremes.
- **Its clock has no frame and no separators** — four bare `195px` columns with
  left-indented labels. `forthcoming` uses a boxed colon clock; `imminent` rings;
  `airborne` a flip clock. Also, uniquely, this slug has a **top bar** (wordmark +
  pill CTA) and a **circular social row**, which the boxed-clock siblings lack.

## Fidelity notes

- Match section structure + order 1:1: top bar → centred heading + countdown →
  social row. No footer band exists in the reference; the Component Dock
  attribution is the ONLY deliberate addition.
- The wash is TWO layers (gradient at 0.3 + scrim 0.4) — render both, never a
  single heavier gradient.
- Keep the weight contrast: heading Poppins-Thin 100, digits Poppins-Black 900.
- The background layer is `position:fixed` and the content layer
  `min-height:100vh` with `justify-content:space-between` — the three-band spread
  is the layout, not three stacked sections in normal flow.
- Never copy assets: use `picsum.photos` placeholders, Google Fonts Poppins,
  lucide-react icons. No `colorlib`/source-slug/`OCEAN` strings in `apps/awaited`.
