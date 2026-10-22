# Pending — design notes (replication research)

<!-- docs-drift:2026-10-22 -->
> **⚠ Reference re-read 2026-10-22 — this brief is stale below.**
> The spec (`openspec/specs/template-pending/spec.md`, section
> **Live reference restored**) is the contract and is canonical over this
> file: `docs/replication.md` — CSS values are canonical over screenshots.
>
> - **Reference is live:** `https://colorlib.com/etc/cs/comingsoon_13/index.html` answers **HTTP 200**
>   today; the 404 / "design from screenshot" wording below is the
>   prep-time state. Read section order and markup from the live page.
>
> Where the live design differs materially from the notes below (a few
> designs were re-skinned), build what the spec describes.
<!-- /docs-drift -->

Source: ColorLib **Coming Soon V13** — https://colorlib.com/wp/template/comingsoon_13/
(source slug `comingsoon_13`; ColorLib page HTTP 200, 109,296 B,
`text/html; charset=UTF-8`, page title
"Coming Soon V13 - Free Full-Screen Website Template 2026 - Colorlib",
description "The best free website template with a full-screen image slider
background for creating a top-notch coming soon page." — verified 2026-10-11).

The theme preview `https://preview.colorlib.com/theme/comingsoon_13/` returns
**HTTP 404** (9 B, `text/plain`) — the same live-preview gap as the rest of the
`comingsoon_*` family (verified 2026-10-11), so the live-preview DOM could not be
parsed. Fallback used, exactly as `docs/replication.md` prescribes for an
unreachable preview: the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_13.zip`
(HTTP 200, 695,439 B, `application/zip`) — the real template's own files — as the
DOM/CSS/behaviour reference, plus the TEMPLATES.md screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-13.jpg`
(HTTP 200, 44,344 B, served as `image/avif` — this slug is AVIF, not JPEG —
1200×972, converted to PNG with ffmpeg and reviewed visually).

Reference artifacts (research date 2026-10-11):

- `/tmp/cs13/srczip13.zip` → extracted to `/tmp/cs13/out/comingsoon_13/`
  (`index.html` 5,906 B · `css/style.css` 803 lines / 12,391 B ·
  `js/snippet.js` 4,003 B · `README.md` 1,261 B ·
  `images/bg01.jpg` **1900×900**, 131,737 B, mean `rgb(40,45,35)` ·
  `images/bg02.jpg` 1900×900, 114,142 B, mean `rgb(4,38,24)` ·
  `images/bg03.jpg` 1900×900, 140,414 B, mean `rgb(47,63,81)` ·
  `images/bg04.jpg` 1900×900, 149,213 B, mean `rgb(199,200,204)` ·
  `images/icons/logo.png` **127×24** RGBA, 1,946 B, every opaque pixel pure white
  (mean `rgb(255,255,255)` — a white wordmark) · `images/icons/favicon.ico`
  32,038 B · `fonts/Montserrat-Regular.woff2` 59,632 B ·
  `fonts/Montserrat-SemiBold.woff2` 59,576 B ·
  `fonts/Playlist Script.woff2` 37,712 B ·
  `fonts/fontawesome-webfont-subset.woff2` 576 B)
- `/tmp/cs13/src13.html` (the ColorLib marketing page), `/tmp/cs13/prev13.html`
  (the 404 preview body), `/tmp/cs13/shot13.raw` (raw `image/avif`) and
  `/tmp/cs13/shot13.png` (1200×972 review copy).
- **Live render check:** the extracted `index.html` was opened in Chrome and
  measured at 1440×900 and at a narrow viewport. At 1440×900
  `document.documentElement.scrollHeight === clientHeight` (900 px) — the page is
  exactly ONE viewport with no scrolling — and every computed token below was
  read back from `getComputedStyle` (authoritative, not inferred from the sheet).

## Visual summary (from screenshot + live render of the extracted source)

```
┌──────────────────────────────────────────────────────────────────────┐
│  Graden.           35 Days  18 Hr  59 Min  58 Sec   ( SIGN UP )      │  ← TOP BAR
│                                                                      │
│                                                                      │
│                        Coming Soon                                   │  ← CENTRE
│                  (180px brush-script, white)                         │
│                                                                      │
│                            ( ▶ )                                     │  ← 60×60 white disc
│                                                                      │
│  (f) (t) (y)                          Email Address  →               │  ← BOTTOM BAR
└──────────────────────────────────────────────────────────────────────┘
   fixed full-bleed 4-photo slideshow behind everything, rgba(0,0,0,0.5) scrim
```

- **One screen, fixed photographic backdrop.** A `position:fixed` 100%×100%
  slideshow of FOUR landscape 1900×900 photographs sits at `z-index:0` over a
  `#000` backdrop; the content column is `position:relative; z-index:1` with a
  single `rgba(0,0,0,0.5)` scrim as its `::after` at `z-index:-1`. The scrim is
  therefore above the slideshow and below the content — the same one-layer wash
  as the rest of the family, but this slug's backdrop is FIXED to the viewport
  (not absolute inside a panel, as in `comingsoon_12`).
- **A brush-script headline is the design.** `h3.l1-txt2` is
  `Playlist Script` at **180px** `#fff`, line-height 1.1, centred — the largest
  and the only script face in the whole `comingsoon_01..15` family (siblings top
  out at 120px and use Poppins / Playfair Display / Ubuntu / Montserrat).
- **The countdown lives in the TOP bar**, in the same wrapped row as the brand
  mark and the `Sign Up` pill: four number+label pairs
  (`35 Days · 18 Hr · 59 Min · 58 Sec`), Montserrat 30px digits / 18px labels,
  baseline-aligned, the mark's box `flex-grow:1` pushing the countdown and the
  pill to the right edge.
- **The centre is headline + a circular play button** — and nothing else. The
  60×60 button is a solid WHITE disc (`::after` at `z-index:-1`) with a `#333`
  triangle on it; hovering fades the disc to 0.6 opacity and scales it 1.2. There
  is **no handler** for it in `js/snippet.js` — it is decorative in the source.
- **The e-mail field is a bare underline**, not a well: 280×50, transparent,
  `border-bottom:1px solid rgba(255,255,255,0.1)`, `border-radius:0`,
  `padding:0 40px 0 3px` (3px left inset — the tightest in the family), with a
  16px `#999` arrow in an invisible `35×50` lane at its right end that turns
  `#fff` on hover.
- **Socials are thin translucent rings**: 36×36, `border-radius:50%`,
  `border:1px solid rgba(255,255,255,0.1)`, transparent fill, 18px `#999` glyphs,
  hover → white fill + `#555` glyph. They sit bottom-LEFT, the form bottom-RIGHT
  (one `space-between` bar).

## DOM skeleton (source `index.html`, verbatim class structure)

```
body
├── div.simpleslide100                                     ← FIXED BACKDROP (100%×100%, z-index:0, #000)
│   ├── div.simpleslide100-item.bg-img1   style="background-image:url('images/bg01.jpg')"
│   ├── div.simpleslide100-item.bg-img1   …bg02.jpg;display:none
│   ├── div.simpleslide100-item.bg-img1   …bg03.jpg;display:none
│   └── div.simpleslide100-item.bg-img1   …bg04.jpg;display:none       (FOUR slides)
└── div.flex-col-c-sb.size1.overlay1.p-l-75.p-r-75.p-t-20.p-b-40.p-lr-15-sm
        │   .flex-col-c-sb = flex column + space-between + align-items:center
        │   .size1 = width:100%; min-height:100vh ; .overlay1 = relative; z-index:1
        │   .overlay1::after = rgba(0,0,0,0.5) at z-index:-1   ← THE ONLY SCRIM
        ├── div.w-full.flex-w.flex-sb-m                                  ← ① TOP BAR
        │   ├── div.wrappic1.m-r-30.m-t-10.m-b-10                        ← MARK (flex-grow:1)
        │   │   └── a > img[src=images/icons/logo.png]                   (127×24 white wordmark)
        │   ├── div.flex-w.cd100.p-t-15.p-b-15.p-r-36                    ← COUNTDOWN
        │   │   └── div.flex-w.flex-b.m-r-22.m-t-8.m-b-8 ×4
        │   │       ├── span.l1-txt1.wsize1.days|hours|minutes|seconds   (30px Montserrat, min-width 46px)
        │   │       └── span.m1-txt1.p-b-2   "Days" | "Hr" | "Min" | "Sec"   (18px Montserrat)
        │   └── div.m-t-10.m-b-10
        │       └── a.size2.s1-txt1.flex-c-m.how-btn1.trans-04   "Sign Up"   ← CTA PILL (140×50, 1px #fff, radius 25)
        ├── div.flex-col-c-m.p-l-15.p-r-15.p-t-80.p-b-90                 ← ② CENTRE
        │   ├── h3.l1-txt2.txt-center.p-b-55.respon1    "Coming Soon"     (Playlist Script 180px)
        │   └── div > button.how-btn-play1.flex-c-m                       ← PLAY DISC 60×60
        │              └── i.zmdi.zmdi-play > svg.cl-icon (triangle path)  (#333 on the white ::after disc)
        └── div.flex-sb-m.flex-w.w-full                                  ← ③ BOTTOM BAR
            ├── div.flex-w.flex-c-m.m-t-10.m-b-10                        ← SOCIALS (left)
            │   └── a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-3.m-t-3 ×3
            │            i.fa.fa-facebook / i.fa.fa-twitter / i.fa.fa-youtube-play
            └── form.contact100-form.validate-form.m-t-10.m-b-10         ← E-MAIL (right)
                └── div.wrap-input100.validate-input.m-lr-auto-lg
                        [data-validate="Email is required: ex@abc.xyz"]
                    ├── input.s2-txt1.placeholder0.input100.trans-04[type=text]
                    │        [name=email][placeholder="Email Address"]
                    └── button.flex-c-m.ab-t-r.size4.s1-txt1.hov1        ← ARROW LANE 35×50
                             > i.zmdi.zmdi-long-arrow-right.fs-16.cl1.trans-04
```

Three children of one `space-between` column: top bar / centre / bottom bar.
There is **no navbar, no footer band, no scrolling section, no modal, no
navigation links** — but (unlike `comingsoon_12`) there IS a countdown, a CTA
pill, a play button and an e-mail form.

## CSS token reference (extracted from `css/style.css`, verified against the live render)

```css
/* page column + the ONLY scrim */
.flex-col-c-sb { display:flex; flex-direction:column; justify-content:space-between;
                 align-items:center }
.size1 { width:100%; min-height:100vh }
.overlay1 { position:relative; z-index:1 }
.overlay1::after { content:""; display:block; position:absolute; z-index:-1;
                   width:100%; height:100%; top:0; left:0; background:rgba(0,0,0,0.5) }
.p-l-75{padding-left:75px} .p-r-75{padding-right:75px}
.p-t-20{padding-top:20px}  .p-b-40{padding-bottom:40px}

/* fixed photographic backdrop */
.simpleslide100 { display:block; position:fixed; z-index:0; width:100%; height:100%;
                  top:0; left:0; background-color:#000 }
.simpleslide100-item { display:block; position:absolute; width:100%; height:100%; top:0; left:0 }
.bg-img1 { background-position:center; background-repeat:no-repeat; background-size:cover }

/* flex helpers */
.flex-w{display:flex; flex-wrap:wrap} .flex-b{display:flex; align-items:flex-end}
.flex-c-m{display:flex; justify-content:center; align-items:center}
.flex-sb-m{display:flex; justify-content:space-between; align-items:center}
.flex-col-c-m{display:flex; align-items:center; justify-content:center; flex-direction:column}
.w-full{width:100%} .txt-center{text-align:center} .ab-t-r{position:absolute; right:0; top:0}
.trans-04{transition:all 0.4s}

/* ① top bar */
.wrappic1 { display:block; flex-grow:1 }   .wrappic1 img { max-width:100% }
.cd100    { /* no own rule: padding via utilities */ }
.size2 { min-width:140px; height:50px }
.s1-txt1 { font-family:Montserrat-SemiBold; font-size:14px; color:#fff; line-height:1.2;
           text-transform:uppercase }
.how-btn1 { padding:0 15px; background-color:transparent; border:1px solid #fff;
            border-radius:25px }
.how-btn1:hover { background-color:#fff; color:#555 }

/* countdown digits + labels */
.l1-txt1 { font-family:Montserrat-Regular; font-size:30px; color:#fff; line-height:1 }
.m1-txt1 { font-family:Montserrat-Regular; font-size:18px; color:#fff; line-height:1 }
.wsize1  { min-width:46px }
.p-b-2{padding-bottom:2px} .m-r-22{margin-right:22px} .m-t-8{margin-top:8px} .m-b-8{margin-bottom:8px}
.p-t-15{padding-top:15px} .p-b-15{padding-bottom:15px} .p-r-36{padding-right:36px}

/* ② centre */
.flex-col-c-m { … }  .p-t-80{padding-top:80px} .p-b-90{padding-bottom:90px}
.l1-txt2 { font-family:Playlist Script; font-size:180px; color:#fff; line-height:1.1 }
.p-b-55{padding-bottom:55px}
.how-btn-play1 { width:60px; height:60px; background-color:transparent; border-radius:50%;
                 font-size:20px; color:#333; position:relative; z-index:1 }
.how-btn-play1::after { content:""; display:block; position:absolute; z-index:-1; width:100%;
                        height:100%; top:0; left:0; background-color:#fff; border-radius:50%;
                        transition:all 0.4s }
.how-btn-play1:hover:after { opacity:0.6; transform:scale(1.2) }

/* ③ bottom bar — socials */
.size3 { width:36px; height:36px }
.how-social { color:#999; font-size:18px; border:1px solid rgba(255,255,255,0.1);
              background-color:transparent; border-radius:50% }
.how-social:hover { background-color:#fff; color:#555 }
.m-r-3{margin-right:3px} .m-l-3{margin-left:3px} .m-b-3{margin-bottom:3px} .m-t-3{margin-top:3px}

/* ③ bottom bar — e-mail underline */
.contact100-form { max-width:100% }   .m-t-10{margin-top:10px} .m-b-10{margin-bottom:10px}
.wrap-input100 { width:280px; max-width:100%; position:relative;
                 background-color:transparent; height:50px }
.validate-input { position:relative }
.input100 { display:block; width:100%; height:100%; padding:0 40px 0 3px;
            border-bottom:1px solid rgba(255,255,255,0.1);
            background-color:rgba(255,255,255, 0.0) }
.input100:focus { background-color:rgba(255,255,255,0.05) }
.size4 { width:35px; height:100% }
.fs-16{font-size:16px} .cl1{color:#999} .hov1:hover i{color:#fff}
.placeholder0::-webkit-input-placeholder { color:#999999 }   /* + -moz/-ms/-moz-placeholder */
/* NOTE: no standard ::placeholder selector, and NO .s2-txt1 rule anywhere in the sheet */

/* validation bubble */
.alert-validate::before { content:attr(data-validate); position:absolute; max-width:70%;
  background-color:#fff; border:1px solid #c80000; border-radius:0px;
  padding:4px 25px 4px 10px; top:50%; transform:translateY(-50%); right:32px;
  pointer-events:none; font-family:Montserrat-Regular; color:#c80000; font-size:14px;
  line-height:1.4; text-align:left; visibility:hidden; opacity:0; transition:opacity 0.4s }
.alert-validate:hover:before { visibility:visible; opacity:1 }
@media (max-width:992px) { .alert-validate::before { visibility:visible; opacity:1 } }
.alert-validate::after { content:"\f071"; font-family:FontAwesome; display:block;
  position:absolute; color:#c80000; font-size:14px; top:50%;
  transform:translateY(-50%); right:38px }

/* responsive */
@media (max-width:992px) { .respon1 { font-size:160px } }
@media (max-width:768px) { .respon1 { font-size:120px } }
@media (max-width:576px) { .p-lr-15-sm { padding-left:15px; padding-right:15px }
                           .respon1 { font-size:80px } }

/* base */
html { box-sizing:border-box; font-family:sans-serif; line-height:1.15 }
body { margin:0; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",
       Arial,sans-serif; font-size:1rem; font-weight:400; line-height:1.5; color:#212529; background:#fff }
body, html { font-family:Arial, sans-serif; font-size:15px; color:#666666; height:100%;
             background-color:#fff }              /* ← the later rule wins */
@font-face { font-family:Montserrat-Regular;   src:url('../fonts/Montserrat-Regular.woff2') format('woff2') }
@font-face { font-family:Montserrat-SemiBold;  src:url('../fonts/Montserrat-SemiBold.woff2') format('woff2') }
@font-face { font-family:Playlist Script;      src:url('../fonts/Playlist Script.woff2') format('woff2') }
@font-face { font-family:'FontAwesome';       src:url('../fonts/fontawesome-webfont-subset.woff2') format('woff2'); font-display:block }
```

`@font-face` families: **Montserrat-Regular** (countdown digits + labels, bubble
text), **Montserrat-SemiBold** (CTA pill + the arrow lane, 14px uppercase),
**Playlist Script** (the 180px headline), plus a 576 B FontAwesome subset used
ONLY for the bubble's `\f071` warning glyph — every other glyph (play triangle,
arrow, three brands) is an inlined SVG `path` wrapped in `i.fa`/`i.zmdi` with
`.cl-icon{height:1em; width:auto; fill:currentColor}`.

### Measured geometry (live render of the extracted source at 1440×900)

| element | measurement |
| ------- | ----------- |
| content column | 1440×900, `flex column / space-between / align-items:center`, padding `20px 75px 40px`, `position:relative; z-index:1`; document `scrollHeight == clientHeight == 900` (no scroll) |
| top bar | 1290×76 at (75,20) — wrapping row, `space-between`, centered items |
| mark `.wrappic1` | box at x=75, w=684 (`flex-grow:1`), margins `10px 30px 10px 0`; the image renders 127×24 |
| countdown `.cd100` | box at x=789, w=436, padding `15px 36px 15px 0` |
| CTA `.how-btn1` | 140×50 at x=1225 — i.e. flush with the column's 75px right padding |
| centre `.flex-col-c-m` | 803×483, padding `80px 15px 90px` |
| headline | Playlist Script **180px** at desktop (box 773×253); 160px ≤992, 120px ≤768, 80px ≤576 |
| play disc | 60×60, white `::after` at `z-index:-1`, `#333` glyph, 20px font-size |
| socials row | 126×42 at (75,804) |
| e-mail form | 280×50 at (1085,800) — bottom-right, flush with the 75px right padding |
| arrow lane | 35×50 absolute `top:0; right:0`; glyph 16px `#999` |

### Behaviour notes (source `js/snippet.js`, 94 lines, framework-free)

1. **E-mail validation** — on every `.validate-form` submit, each field is checked
   by `fieldOk()`: a trimmed value must match
   `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/` when the field is `type=email` or
   `name=email`, otherwise must be non-empty. Every failing field's
   `.validate-input` ancestor (or parent) gets `.alert-validate` and the submit is
   prevented (`event.preventDefault()`); a `focus` handler removes it. No success
   state, no request, no navigation.
2. **Countdown** — `COUNTDOWNS = [{"sel":".cd100","kind":"spans",
   "cfg":{"Y":0,"M":0,"D":35,"h":19,"m":0,"s":0}}]`. The target
   `new Date(0, -1, 35, 19, 0, 0)` is always in the past, so the script falls back
   to **`Date.now() + 35 days + 19 hours`** — the page always opens at
   `35 Days 19 Hr` and ticks down. Days are printed unpadded, hours/minutes/seconds
   via `('0'+n).slice(-2)`; the 1000 ms interval stops itself when the remaining
   time hits zero. The markup's static `35 / 17 / 50 / 39` is only the pre-script
   paint.
3. **Background cross-fade** — `.simpleslide100` items get
   `transition:opacity 1000ms`, item 0 at `opacity:1`/shown and the rest
   `display:none`; unless `prefers-reduced-motion: reduce` matches, a `7000ms`
   `setInterval` shows the next item at `opacity:0`, flips it to `1` in a
   `requestAnimationFrame`, fades the current one out and hides it after the
   `1000ms` transition, wrapping `now = (now + 1) % items.length` over the FOUR
   items.
4. **The play button has NO handler.** It is a `<button>` with no listener — no
   video, no modal, no navigation. The recreation must keep it decorative but
   give it an `aria-label` and the reduced-motion-safe hover treatment.

## Section-by-section fidelity notes

1. **Page shell** — one `min-h-screen` column, `flex flex-col justify-between
   items-center`, padding `20px 75px 40px` (`max-[576px]:px-[15px]`), `relative
   z-[1]`, holding exactly THREE bands. The `space-between` axis is the whole
   layout: top bar on the top edge, hero in the leftover middle, bottom bar on the
   bottom edge. Do not replace it with fixed paddings or `mt-auto` on one band.
2. **Fixed backdrop** — the slideshow is `position:fixed; inset:0; z-index:0` over
   `#000` with FOUR `bg-cover bg-center bg-no-repeat` items; item 0 shown, the rest
   hidden. It must stay FIXED (viewport-sized) — this slug has no photo panel and
   no per-panel layer. Placeholder images:
   `https://picsum.photos/seed/pending-bg1/1900/900` … `...-bg4/1900/900`
   (the source photographs are 1900×900 landscape — larger than sibling slugs).
3. **Scrim** — ONE `rgba(0,0,0,0.5)` layer sitting ABOVE the fixed slideshow
   (z-index 0) and BELOW the content column (z-index 1). No gradient, no second
   overlay.
4. **Top bar** — `w-full flex flex-wrap justify-between items-center` with:
   the mark wrapper `flex-1` (so it eats the free space and shoves the countdown +
   pill right), the countdown group (`flex flex-wrap pt-[15px] pb-[15px] pr-[36px]`)
   and the CTA (`mx-0 my-[10px]`). It WRAPS at narrow widths (verified: at 765 px
   the pill drops to a second line) — keep `flex-wrap`.
5. **Brand mark** — the source file is a 127×24 all-white wordmark PNG. The
   recreation renders its OWN wordmark ("Pending."-style) as text or inline SVG and
   never copies the PNG, its glyphs or the source's demo brand string.
6. **Countdown** — four `<div class="flex items-end mr-[22px] mt-[8px] mb-[8px]">`
   units, each `<span class="… min-w-[46px]">35</span><span class="… pb-[2px]">Days</span>`.
   Digits Montserrat **400** 30px/1 `#fff` `min-w-[46px]`; labels Montserrat 400
   18px/1 `#fff` with 2px bottom padding (baseline alignment comes from the unit's
   `align-items:flex-end`). Labels `Days / Hr / Min / Sec`. The 46px min-width is
   what stops the row jittering as the digits change — keep it. Reimplement the
   `35 days 19 hours` fallback target as React state with a 1000 ms interval and
   `clearInterval` on unmount; days unpadded, h/m/s zero-padded.
7. **CTA pill** — `min-w-[140px] h-[50px] px-[15px] flex items-center justify-center`
   TRANSPARENT with `border border-white rounded-[25px]`, Montserrat **600** 14px/1.2
   uppercase `#fff`; hover → `bg-white text-[#555]`, `transition-all duration-[400ms]`.
   It is the family's only bordered-transparent pill: do not fill it at rest.
8. **Centre** — `flex flex-col items-center justify-center px-[15px] pt-[80px] pb-[90px]`
   with the headline (`text-center pb-[55px]`) then the play button. Nothing else
   goes in here — the form and socials belong to the bottom bar.
9. **Headline** — brush script 180px/1.1 `#fff`, sentence case, centred:
   160px ≤992px, 120px ≤768px, 80px ≤576px. This is the family's largest and only
   script face; a serif/sans substitute destroys the design.
10. **Play disc** — 60×60, `rounded-full`, transparent button with a full-size
    WHITE `::after` disc at `z-index:-1` (that is the disc you see) carrying a
    `#333` triangle; `transition:all .4s`; hover → disc `opacity:0.6` and
    `scale(1.2)`. Decorative (no handler in the source) → add an `aria-label` and
    no-op/reduced-motion-safe behaviour; do not invent a lightbox or video.
11. **Socials** — bottom-left, `flex flex-wrap items-center`, three 36×36
    `rounded-full` links with `border border-white/10`, transparent fill, 18px
    `#999` glyphs (Facebook, Twitter, YouTube from `lucide-react`), `m-[3px]`,
    `transition-all duration-[400ms]`; hover → `bg-white text-[#555]`. Thin
    translucent rings, NOT filled discs and NOT 1px solid white.
12. **E-mail field** — 280×50 (max-width 100%) transparent container; the input is
    `block h-full w-full pt-0 pr-[40px] pb-0 pl-[3px]`, `border-b
    border-b-white/10`, `rounded-none`, `bg-transparent`, `transition-all
    duration-[400ms]`, `focus:bg-white/5` — a bare underline, no box, no radius.
    Placeholder `#999999`.
13. **Arrow lane** — absolute `top-0 right-0 h-full w-[35px]` button, no fill/border,
    centring a 16px `#999` arrow that turns `#fff` on hover (`.hov1:hover i`); add
    the `aria-label` the source lacks. The field's `pr-[40px]` exists to clear it.
14. **Validation bubble** — white, `border border-[#c80000] rounded-none
    py-[4px] pl-[10px] pr-[25px] max-w-[70%]`, vertically centred, `right-[32px]`,
    Montserrat 400 14px/1.4 `#c80000`, `pointer-events-none`, opacity fade `400ms`;
    a 14px `#c80000` warning glyph at `right-[38px]`; hidden until hover above
    992px, always visible at ≤992px (both offsets are SMALLER than sibling slugs
    because the field is only 280px wide — the bubble covers most of it).
15. **Attribution** — one small low-emphasis line linking
    `https://www.componentdock.com/`. The source has no footer; adding a fourth
    band to the `space-between` column would shift the three bands, so pin it
    absolutely (e.g. `absolute bottom-1 inset-x-0 text-center text-[11px]
    text-white/40`) inside the relative column and note it as the ONLY addition.

## Source → React adaptation table

| Reference | Recreation |
| --------- | ---------- |
| `position:fixed` 4-item `.simpleslide100` over `#000` | `fixed inset-0 z-0 bg-black` layer with four `bg-cover bg-center bg-no-repeat` items |
| `.overlay1::after` `rgba(0,0,0,0.5)` at `z-index:-1` | one `absolute inset-0 bg-black/50` layer between the slideshow and the column |
| `flex-col-c-sb` + `20/75/40` padding + `min-height:100vh` | `min-h-screen flex flex-col justify-between items-center pt-[20px] px-[75px] pb-[40px] max-[576px]:px-[15px]` |
| `.wrappic1{flex-grow:1}` mark box | `flex-1` on the mark wrapper (pushes countdown + pill right) |
| `Montserrat-Regular` 30px digits / 18px labels woff2 | Google Fonts `Montserrat:wght@400;600`, `text-[30px]` / `text-[18px]`, `min-w-[46px]` |
| `Montserrat-SemiBold` 14px uppercase pill | `font-semibold text-[14px] uppercase tracking-normal` |
| `Playlist Script` 180px woff2 (**not on Google Fonts** — the CSS API returns HTTP 400) | Google Fonts **Kaushan Script** (closest brush script; `Yellowtail` is the documented alternative) at 180/160/120/80px |
| `.how-btn1` transparent + `border:1px solid #fff` + `radius:25px`, hover `#fff`/`#555` | `border border-white rounded-[25px] hover:bg-white hover:text-[#555] transition-all duration-[400ms]` |
| `.how-btn-play1` + white `::after` disc, hover `opacity .6 / scale 1.2` | button + `after:` white disc, `hover:after:opacity-60 hover:after:scale-125`, `aria-label` added |
| `.input100` underline field, `bg rgba(255,255,255,0)` → `0.05` focus | `border-b border-b-white/10 focus:bg-white/5 rounded-none` |
| `.hov1:hover i{color:#fff}` on a 16px `#999` arrow | `group-hover:text-white transition-colors duration-[400ms]` + `aria-label` |
| `.alert-validate::before/::after` bubbles at `right:32px` / `38px` | a React `ValidationBubble` component driven by field error state |
| Inlined `zmdi`/`fa` SVG paths (play, arrow, 3 brands) | `lucide-react` (`Play`, `ArrowRight`, `Facebook`, `Twitter`, `Youtube`) |
| Four 1900×900 photographs in `images/` | `https://picsum.photos/seed/pending-bg1..bg4/1900/900` |
| `js/snippet.js` class toggles + `setInterval` | React state + `useEffect` (intervals cleared on unmount; rAF swap kept) |
| `css/style.css` (with a `:where(html) all: revert` guard + Bootstrap reboot) | Tailwind 4 `@theme` tokens + utilities (guard and reboot never copied) |
| No footer credit | one small Component Dock attribution line (monorepo requirement) |
| `.s2-txt1` referenced in the markup but **absent from the sheet** (field text fell back to Arial 15px in the UA's black) | Montserrat 400 15px `#fff` — a documented delta so the typed value is legible over the photograph |
| No `apps/pending` exists yet | new app folder + workspace (TEMPLATES.md line 3044 stays `- [ ]` until an implementer claims it) |

## Sibling comparison (same `## Uncategorized (15)` group, `comingsoon_01..15`)

| slug | name | geometry | headline face / size | countdown position | e-mail capture | socials |
| ---- | ---- | -------- | -------------------- | ------------------ | -------------- | ------- |
| `comingsoon_01..11` (already prepped) | debut, premiere, incoming, eve, advent, airborne, imminent, forthcoming, awaited, impending, oncoming | ONE full-bleed photographed screen + scrim (06/07 use a flip clock) | Poppins (01–03, 06–09), Ubuntu (05), Montserrat-Light (04), Playfair Display (08, 10, 11) — 24–120px | inside the CENTRE block (bordered/centred rows) | white / `#e6e6e6` rounded boxes, radius 5–35px, 50–500px wide | 1px–2px solid white rings, white fills, `#ccc` fills, 18–28px glyphs |
| `comingsoon_12` → **looming** | looming | SPLIT: opaque white 50% panel + 50% photo panel, 60/40 at ≤1200px, stacked at ≤992px | Playfair Display **900 italic** 90px | none | flat white 500×80 slab, shadow-only, invisible 90×80 arrow lane | 36×36 filled `#ccc` discs, LEFT-aligned, 22px glyphs |
| **`comingsoon_13` → `pending`** | **pending** | **ONE full-bleed FIXED 4-photo slideshow (`position:fixed`, z-index 0) + one 50% scrim; three bands of a `space-between` column** | **Playlist Script (brush script) 180px — the family's only script face and its largest heading (160/120/80 at the breakpoints)** | **in the TOP bar, beside the mark and the CTA (family-unique placement)** | **bare 280×50 UNDERLINE (border-bottom `rgba(255,255,255,0.1)`, transparent, radius 0, 3px left inset), 35×50 arrow lane, 16px `#999` → `#fff`** | **36×36 translucent rings (`1px solid rgba(255,255,255,0.1)`), transparent fill, 18px `#999` glyphs, hover white fill + `#555`** |

Also unique to `comingsoon_13` inside the family: the **circular play button**
(`how-btn-play1` — zero occurrences in every sibling spec) and the
**bordered-transparent CTA pill** (siblings always fill their pill: `#846add`,
`#3a5dff`, `#00b26f`, `#57b846`, or `#fff`).

Do not copy values from the siblings: the backdrop treatment, the headline face
and size, the countdown placement, the field treatment and the social ring
treatment all differ on this slug.

## Fidelity risks to watch during implementation

- **The backdrop is `position:fixed`, not absolute in a panel.** Copying
  `comingsoon_12`'s panel-scoped slideshow (or, worse, a `bg-image` on the column)
  changes the layering: the scrim must sit above a viewport-fixed slideshow and
  below the content column.
- **FOUR slides, 1900×900.** Three slides (the sibling habit) or `950×900`
  placeholders are both wrong here.
- **The headline face is a BRUSH SCRIPT and it is the largest type in the
  family.** Playlist Script is NOT on Google Fonts (the CSS API answers
  HTTP 400) — use Kaushan Script and note the substitution in the PR. Do not
  "fix" the script to a sans/serif, do not uppercase it, do not add
  `letter-spacing`.
- **The countdown belongs in the top bar** with `flex-1` on the mark wrapper and
  `flex-wrap` on the row. Moving it to the centre (the sibling pattern) or
  centring it changes the whole header.
- **The field is a bare underline, 280px wide, radius 0, 3px left inset.** Turning
  it into the family's white/pill well is the single most likely regression. Its
  `pr-[40px]` exists to clear the 35px arrow lane — change them together.
- **The CTA pill is transparent with a 1px white border at rest.** Filling it (as
  every sibling spec does) is wrong; the fill is the HOVER state, together with a
  `#555` label colour.
- **Socials are thin translucent rings** — not `#ccc` discs (12), not white-filled
  discs (07), not `1px solid #fff` (09/11), not 2px square-bordered (06).
- **The play button is decorative.** The source ships no handler; do not invent a
  video modal. Keep the white disc + `#333` triangle and the
  `opacity .6 / scale 1.2` hover, add an `aria-label`, and honour
  `prefers-reduced-motion`.
- **Zero scrolling.** At desktop the page is exactly one viewport
  (`scrollHeight == clientHeight == 900` at 1440×900). Do not add sections.
- **Keep the 46px digit min-width.** The countdown ticks every second; without it
  the row jitters — that is the entire reason `.wsize1` exists.
- **Validation offsets are small** (`right:32px`, glyph `right:38px`) because the
  field is only 280px wide; the bubble is hover-revealed above 992px and always
  visible at ≤992px, and any focus clears it. Test both the hover override and the
  small-viewport case.
- **Attribution without a fourth band.** Add the Component Dock line absolutely so
  the three-band `space-between` geometry is untouched.
