# Prologue — design notes (replication research)

Source: ColorLib **Coming Soon V14** — https://colorlib.com/wp/template/comingsoon_14/
(source slug `comingsoon_14`; ColorLib page HTTP 200, 109,297 B,
`text/html; charset=UTF-8`, page title
"Coming Soon V14 - Free Website Template 2026 - Colorlib", description "The best
free coming soon website template with a modern and responsive split-screen
design, subscription and social icons." — verified 2026-10-11).

The theme preview `https://preview.colorlib.com/theme/comingsoon_14/` returns
**HTTP 404** (9 B, `text/plain`) — the same live-preview gap as the rest of the
`comingsoon_*` family (verified 2026-10-11), so the live-preview DOM could not be
parsed. Fallback used, exactly as `docs/replication.md` prescribes for an
unreachable preview: the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_14.zip`
(HTTP 200, 409,625 B, `application/zip`) — the real template's own files — as the
DOM/CSS/behaviour reference, plus the TEMPLATES.md screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-14.jpg`
(HTTP 200, 174,138 B, served as `image/avif` — this slug is AVIF, not JPEG —
1200×972, converted to PNG with ffmpeg and reviewed visually).

Reference artifacts (research date 2026-10-11):

- `/tmp/cs14/srczip14.zip` → extracted to `/tmp/cs14/out/comingsoon_14/`
  (`index.html` 4,537 B / 72 lines · `css/style.css` 757 lines / 11,868 B ·
  `js/snippet.js` 1,119 B / 32 lines · `README.md` 1,261 B ·
  `images/bg01.jpg` **1200×900**, 228,711 B, mean `rgb(102,110,114)` (cool
  grey-green mountain/forest) · `images/icons/logo.png` **35×43** RGBA, 1,351 B,
  dominant colour `rgb(51,51,51)` (a near-black monogram) ·
  `images/icons/favicon.ico` 32,038 B · `fonts/PlayfairDisplay-Regular.woff2`
  70,984 B · `fonts/Poppins-Regular.woff2` 48,416 B ·
  `fonts/Poppins-Medium.woff2` 48,444 B ·
  `fonts/fontawesome-webfont-subset.woff2` 576 B)
- `/tmp/cs14/src14.html` (the ColorLib marketing page), `/tmp/cs14/prev14.html`
  (the 404 preview body), `/tmp/cs14/shot14.raw` (raw `image/avif`) and
  `/tmp/cs14/shot14.png` (1200×972 review copy).
- **Live render check:** the extracted `index.html` was opened in Chrome and
  measured at 1440×900, 1180×900, 900×1000, 765×1000, 600×1200 and 400×1400, and
  its submit path was exercised. At 1440×900
  `document.documentElement.scrollHeight === clientHeight` (900 px) — the page is
  exactly ONE viewport with no scrolling — and every computed token below was
  read back from `getComputedStyle` (authoritative, not inferred from the sheet).
- **Occluded-scrim proof:** a 1440×900 render screenshot was sampled against the
  raw `bg01.jpg` pixels (panel 907 px wide, `cover` at scale 1.0 → source x-offset
  `(1200-907)/2 = 146.5`): rendered `rgb(241,235,245)` vs source
  `rgb(241,235,245)` and rendered `rgb(129,149,160)` vs source `rgb(129,149,160)`
  — ratio 1.0, i.e. the `rgba(0,0,0,0.5)` layer does NOT darken the photograph.

## Placeholder photograph

No source asset is ever reused, so the photo panel carries the seeded
placeholder `https://picsum.photos/seed/prologue-hollow/1200/900`. The seed was
picked by rendering candidates and reviewing them: the first candidate returned
a flat, near-solid yellow frame that fought the `#ffe151` subscribe bar sitting
on top of it, so the shipped seed is a cool-toned outdoor scene — the closest
available stand-in for the reference's grey-green mountain/forest photograph.

## Visual summary (from screenshot + live render of the extracted source)

```
┌───────────────────────────┬──────────────────────────────────────────────┐
│ ▌                         │                                              │
│ (mark 35×43, #333)        │                                              │
│                           │        photograph bg01.jpg                   │
│                           │        1200×900 · cover · center             │
│    COMING                 │        (static — NO slideshow)               │
│    SOON                   │                                              │
│    (Playfair 60px,        │   ▲ the yellow bar overhangs the seam:       │
│     uppercase, #333)      │   │  bar x=118→593 · seam x=533 · 60px past   │
│                           │   │  the panel, 80×80 arrow ON the photo      │
│    Follow us for …        │                                              │
│    (Poppins 24px, #999)   │                                              │
│  ██████████████████████████████┤ ← #ffe151 bar, 80px tall, radius 0      │
│  █ ▌Subscribe Now: │ Email… │ → █ (172×80 tab: 5px #333 left rule)        │
│  █                             │                                          │
│  FOLLOW US  (f) (t) (y)   │                                              │
│  (Poppins 16px UP #999,   │                                              │
│   36×36 1px #e6e6e6 rings)│                                              │
└───────────────────────────┴──────────────────────────────────────────────┘
   37% white panel                63% photo panel
   flex column space-between      (empty element, background-image)
   padding 37px 50px 52px 70px
   + ONE rgba(0,0,0,0.5) scrim at z-index:-1 behind BOTH panels (invisible)
```

Row: `.flex-w.flex-str.size1.overlay1` → `width:100%; min-height:100vh;
display:flex; flex-wrap:wrap; align-items:stretch; position:relative;
z-index:1`, no scroll at 1440×900.

## DOM skeleton (source `index.html`, verbatim class structure)

```
div.flex-w.flex-str.size1.overlay1
├── div.flex-w.flex-col-sb.wsize1.bg0.p-l-70.p-t-37.p-b-52.p-r-50.respon1   ← LEFT (37%, #fff)
│   ├── div.wrappic1
│   │   └── a[href="#"] > img[src=images/icons/logo.png]                    ← MARK 35×43
│   ├── div.w-full.p-t-100.p-b-90.p-l-48.p-l-0-md                           ← HERO BLOCK
│   │   ├── h3.l1-txt1.p-b-34.respon3                                       "Coming Soon"
│   │   ├── p.m2-txt1.p-b-46                                                "Follow us for update now!"
│   │   └── form.contact100-form.validate-form.m-t-10.m-b-10
│   │       └── div.wrap-input100.validate-input.m-lr-auto-lg
│   │             [data-validate="Email is required: ex@abc.xyz"]
│   │           ├── input.s2-txt1.placeholder0.input100.trans-04
│   │           │     [type=text][name=email][placeholder="Email Address"]
│   │           ├── button.flex-c-m.ab-t-r.size2.hov1.respon5
│   │           │     └── i.zmdi.zmdi-long-arrow-right.fs-30.cl1.trans-04
│   │           │           (inlined svg.cl-icon, viewBox 0 0 384 512)
│   │           └── div.flex-c-m.ab-t-l.s2-txt1.size4.bor1.respon4
│   │                 └── span  "Subcribe Now:"        ← source typo
│   └── div.flex-w.flex-m                                                   ← SOCIAL BAND
│       ├── span.m2-txt2.p-r-40                                             "Follow us"
│       ├── a[href="#"].size3.flex-c-m.how-social.trans-04.m-r-15.m-b-5.m-t-5
│       │     └── i.fa.fa-facebook  (inlined svg, viewBox 0 0 1024 1792)
│       ├── a…  i.fa.fa-twitter     (viewBox 0 0 1664 1792)
│       └── a…  i.fa.fa-youtube-play(viewBox 0 0 1792 1792)
└── div.wsize2.bg-img1.respon2[style="background-image:url('images/bg01.jpg')"] ← RIGHT (63%, EMPTY)
```

Quirks worth knowing before implementing:

- `.s2-txt1` is on BOTH the field and the label tab and IS defined in the sheet
  (Poppins-Medium 15px `#333`) — the V13 sibling's missing-rule trap does not
  exist here.
- `.m-lr-auto-lg` (on the field wrapper) has no rule in any media block; it is
  inert.
- `.respon3{font-size:60px}` at ≤576px re-declares the base 60px — a no-op.
- The scrim `::after` is `z-index:-1` in the row's stacking context, so it paints
  behind the opaque white panel AND behind the photo panel's own background —
  invisible (see the pixel proof above).

## CSS token reference (extracted from `css/style.css`, verified against the live render)

| Area           | Rule / computed value at 1440×900                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Row            | `.flex-w{display:flex; flex-wrap:wrap}` · `.flex-str{align-items:stretch}` · `.size1{width:100%; min-height:100vh}` · `.overlay1{position:relative; z-index:1}` → 1440×900                                                                                                                                                                                                                                                                                                                                            |
| Scrim          | `.overlay1::after{content:""; display:block; position:absolute; z-index:-1; width:100%; height:100%; top:0; left:0; background:rgba(0,0,0,0.5)}` → 1440×900, occluded                                                                                                                                                                                                                                                                                                                                                 |
| Left panel     | `.wsize1{width:37%}` + `.bg0{background-color:#fff}` + `.p-l-70.p-t-37.p-b-52.p-r-50` → `padding:37px 50px 52px 70px`, `display:flex; flex-direction:column; justify-content:space-between`, 533×900 at (0,0)                                                                                                                                                                                                                                                                                                         |
| Photo panel    | `.wsize2{width:63%}` + `.bg-img1{background-position:center; background-repeat:no-repeat; background-size:cover}` → 907×900 at x=533, empty element                                                                                                                                                                                                                                                                                                                                                                   |
| Mark           | `.wrappic1{display:block}` + `.wrappic1 img{max-width:100%}` → image 35×43 at (70,37), wrapper 413×43 (block-level, NO `flex-grow`)                                                                                                                                                                                                                                                                                                                                                                                   |
| Hero block     | `.w-full{width:100%}` + `.p-t-100.p-b-90.p-l-48` (+ `.p-l-0-md` at ≤768px) → 413×531 at (70,176), padding `100px 0 90px 48px`                                                                                                                                                                                                                                                                                                                                                                                         |
| Heading        | `.l1-txt1{font-family:PlayfairDisplay-Regular; font-size:60px; color:#333; line-height:1.1; text-transform:uppercase}` + `.p-b-34` (+ `.respon3{font-size:60px}` ≤576 = no-op); `font-weight:500` from the sheet's `.h3,h3` rule → box 365×166 at (118,276)                                                                                                                                                                                                                                                           |
| Sub-line       | `.m2-txt1{font-family:Poppins-Regular; font-size:24px; color:#999; line-height:1.2}` + `.p-b-46` → box 365×75 at (118,442)                                                                                                                                                                                                                                                                                                                                                                                            |
| Form           | `.contact100-form{max-width:100%}` + `.m-t-10.m-b-10` → 365×80 at (118,526)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Subscribe bar  | `.wrap-input100{width:650px; max-width:calc(100% + 110px); position:relative; background-color:transparent; height:80px}` (+ `max-width:100%` at ≤992px) → **475×80 at (118,526)** (content 365 + 110)                                                                                                                                                                                                                                                                                                                |
| Field          | `.input100{display:block; width:100%; height:100%; padding:0 80px 0 172px; background-color:#ffe151; box-shadow:0 10px 15px 0px rgba(0,0,0,0.1)}` → `:focus` `…rgba(0,0,0,0.2)`; ≤576px `padding-left:25px; padding-right:60px`; `.s2-txt1{Poppins-Medium 15px #333 line-height:1.2}`; `.placeholder0::placeholder{color:#666}`                                                                                                                                                                                       |
| Label tab      | `.size4{width:172px; height:80px}` + `.ab-t-l{position:absolute; left:0; top:0}` + `.flex-c-m{justify-content:center; align-items:center}` + `.bor1{border-left:5px solid #333}` → 172×80 at (118,526), text 107×18 at (153,557); ≤576px `.respon4{width:5px}` + `.respon4 span{display:none}`                                                                                                                                                                                                                        |
| Arrow button   | `.size2{width:80px; height:80px}` + `.ab-t-r{position:absolute; right:0; top:0}` + `.flex-c-m`; `button{outline:none; border:none; background:transparent; cursor:pointer}` → 80×80 at (513,526); glyph `i.zmdi-long-arrow-right` `.fs-30{font-size:30px}` `.cl1{color:#333}` `.trans-04{transition:all 0.4s}` → 23×31 at (542,551); `.hov1:hover i{transform:translateX(10px)}`; ≤576px `.respon5{width:60px}`                                                                                                       |
| Social band    | `.flex-w.flex-m{display:flex; flex-wrap:wrap; align-items:center}` → 413×46 at (70,802)                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Social caption | `.m2-txt2{font-family:Poppins-Regular; font-size:16px; color:#999; line-height:1.2; text-transform:uppercase}` + `.p-r-40{padding-right:40px}` → 127×19 at (70,815)                                                                                                                                                                                                                                                                                                                                                   |
| Social circle  | `.size3{width:36px; height:36px}` + `.how-social{color:#666; font-size:16px; background-color:transparent; border-radius:50%; border:1px solid #e6e6e6}` + `.m-r-15.m-b-5.m-t-5` + `.trans-04` → first circle 36×36 at x=197; `.how-social:hover{background-color:#333; color:#fff}`                                                                                                                                                                                                                                  |
| Bubble         | `.alert-validate::before{content:attr(data-validate); max-width:70%; background-color:#fff; border:1px solid #c80000; border-radius:0px; padding:4px 25px 4px 10px; top:50%; transform:translateY(-50%); right:72px; pointer-events:none; font-family:Poppins-Medium; color:#c80000; font-size:14px; line-height:1.4; text-align:left; visibility:hidden; opacity:0; transition:opacity 0.4s}` → verified computed: `right:72px`, `border:1px solid rgb(200,0,0)`, `padding:4px 25px 4px 10px`, `Poppins-Medium 14px` |
| Bubble glyph   | `.alert-validate::after{content:"\f071"; font-family:FontAwesome; color:#c80000; font-size:14px; top:50%; transform:translateY(-50%); right:78px}` → verified `right:78px`, 14px                                                                                                                                                                                                                                                                                                                                      |
| Bubble reveal  | `.alert-validate:hover:before{visibility:visible; opacity:1}`; `@media (max-width:992px){.alert-validate::before{visibility:visible; opacity:1}}`                                                                                                                                                                                                                                                                                                                                                                     |
| Breakpoints    | `@media (max-width:1200px){.respon1{width:60%} .respon2{width:40%}}` · `@media (max-width:992px){.respon1{width:100%; padding-left:15px; padding-right:15px} .respon2{width:100%; height:500px} .wrap-input100{max-width:100%}}` · `@media (max-width:768px){.p-l-0-md{padding-left:0}}` · `@media (max-width:576px){.respon3{font-size:60px} .respon4{width:5px} .respon4 span{display:none} .respon5{width:60px} .input100{padding-left:25px; padding-right:60px}}`                                                 |
| Base type      | `html{box-sizing:border-box; font-family:sans-serif; line-height:1.15}` · `body,html{font-family:Arial,sans-serif; font-size:15px; color:#666666; height:100%; background-color:#fff}` — all VISIBLE type is Playfair Display / Poppins                                                                                                                                                                                                                                                                               |
| Faces          | `@font-face PlayfairDisplay-Regular` · `Poppins-Regular` · `Poppins-Medium` (self-hosted woff2) + a 576 B `FontAwesome` subset for the bubble glyph only                                                                                                                                                                                                                                                                                                                                                              |

### Measured geometry by breakpoint (live render, `getBoundingClientRect`)

| Viewport | Left panel                             | Photo panel      | Bar (`wrap-input100`)                 | Notes                                                         |
| -------- | -------------------------------------- | ---------------- | ------------------------------------- | ------------------------------------------------------------- |
| 1440×900 | 533×900, padding `37px 50px 52px 70px` | 907×900 at x=533 | 475×80 at (118,526) → right edge 593  | no scroll (900/900); bar crosses the seam (533) by 60px       |
| 1180×900 | 708×900 (60%)                          | 472×900 (40%)    | 650×80 at (118,493) → right edge 768  | seam at 708 → still 60px of overhang                          |
| 900×1000 | 885×643 (full width, `37px 15px 52px`) | 885×500 below it | 650×80 inside an 807px content box    | STACKED; document 1143px → scrolls                            |
| 765×1000 | 750×643                                | 750×500 below it | 650×80                                | ≤768: hero `padding-left` 0 (content x=15)                    |
| 600×1200 | 600×671                                | 600×500 below it | 570×80 (`max-width:100%`)             | hero `padding-left` 0                                         |
| 400×1400 | 400×804                                | 400×500 below it | 370×80; field padding `0 60px 0 25px` | ≤576: tab 5px (span hidden), button 60×80, heading still 60px |

(The device-metrics override must be set BEFORE the document is loaded, otherwise
a stale layout can be read back — the ≤576px field padding only shows up after a
reload.)

## Section-by-section fidelity notes

1. **Row** — `flex flex-wrap items-stretch` (NOT `items-center`) is what makes the
   photo panel full height; `min-h-screen` on the row, not on each panel. Two
   children only, white panel first.
2. **Left panel** — `space-between` + exactly three children. Do not add a
   wrapping inner container around all three: the three bands must stay direct
   children for the 37px/52px edges to land correctly (measured: mark y=37,
   social band ending at 848 = 900−52).
3. **Mark** — the source wrapper has NO `flex-grow` (unlike several siblings). Keep
   it `display:block`; the image is 35×43 and sits exactly at the panel's padding
   origin.
4. **Hero block** — its own `padding:100px 0 90px 48px`; the 100px top padding is
   what centres the block visually between the mark and the form. `padding-left`
   drops to 0 at ≤768px (the block's content then lines up with the panel's 15px
   side padding).
5. **Heading** — 60px Playfair Display, weight 500, uppercase, `line-height:1.1`
   → it wraps to two lines in a 365px box. Do NOT centre it in the panel (the
   source is left-aligned inside a full-width block) and do NOT italicise it.
6. **Sub-line** — 24px Poppins 400 `#999`, 46px below the heading. The
   screenshot's grey line is exactly this token.
7. **Subscribe bar** — the single most distinctive element: 80px tall, `#ffe151`,
   square, soft 10/15 shadow, `calc(100% + 110px)` so it overhangs the panel by
   60px and reaches onto the photograph. Implement the overhang with
   `w-[650px] max-w-[calc(100%+110px)]` and `max-[992px]:max-w-full`; using
   `w-full` or a fixed 650px alone breaks either the 1440 or the 1180 case (at
   1180 the content box is 540px, so the bar is exactly 650px; at 1440 the content
   box is 365px, so the bar is 475px).
8. **Field** — `#ffe151` fill, no border, no radius, `padding:0 80px 0 172px`
   (172px clears the label tab, 80px clears the arrow button), shadow 0.1 alpha →
   0.2 on focus; Poppins 500 15px `#333`; placeholder `#666`.
9. **Label tab** — 172×80 at the bar's top-left, transparent, the ONLY decoration
   being `border-left:5px solid #333`. At ≤576px it collapses to a 5px black tick
   with the caption hidden, and the field's padding drops to `0 60px 0 25px`.
10. **Arrow button** — 80×80 at the bar's top-right, transparent, 30px `#333`
    arrow, hover `translateX(10px)` over `.4s`. It is inside the form, so a click
    submits; add an `aria-label` (the source has none).
11. **Social band** — caption (uppercase, `pr-[40px]`) then three 36×36 circles
    with `1px solid #e6e6e6` and 16px `#666` glyphs; hover `#333` fill + white
    glyph. Row is `align-items:center`, margins `5px 15px 5px 0` (no left margin).
12. **Photo panel** — ONE static image via `background-size:cover`. Do not
    animate it; do not add a caption, gradient or overlay. If the recreation
    keeps the scrim element at all it must stay BEHIND the panel so the photo is
    not darkened.
13. **Validation** — the same bubble as the family's other siblings but with this
    slug's own offsets (`right:72px`, glyph `78px`); hover-revealed above 992px,
    always visible at ≤992px, cleared on focus.
14. **No navbar / no footer band / no second section** — the page is the split and
    nothing else; only the Component Dock attribution line is added.

## Source → React adaptation table

| Source                                        | Recreation                                                                                                                    |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `div.flex-w.flex-str.size1.overlay1`          | `div` with `min-h-screen w-full flex flex-wrap items-stretch relative z-[1]` in `Prologue.tsx`                                |
| `.overlay1::after` `rgba(0,0,0,0.5)` scrim    | ONE `absolute inset-0 -z-10 bg-black/50` element behind both panels (occluded — photo must stay undarkened)                   |
| `.wsize1.bg0…respon1` white panel             | flex column `w-[37%] max-[1200px]:w-[60%] max-[992px]:w-full bg-white …`                                                      |
| `.wrappic1 img` (35×43 PNG)                   | `BrandMark.tsx` — the app's own wordmark/monogram rendered as JSX/SVG (`#333`, ≤43px)                                         |
| `.l1-txt1` PlayfairDisplay-Regular 60px       | `Heading.tsx` — `font-playfair text-[60px] leading-[1.1] font-medium uppercase text-[#333] pb-[34px]`                         |
| `.m2-txt1` Poppins-Regular 24px `#999`        | `SubLine.tsx` — Poppins 24px `text-[#999] pb-[46px]`, own copy                                                                |
| `.wrap-input100` 650px / `calc(100% + 110px)` | `SubscribeBar.tsx` — `h-[80px] w-[650px] max-w-[calc(100%+110px)] relative max-[992px]:max-w-full`                            |
| `.input100` `#ffe151` + shadow                | `EmailField.tsx` — `bg-[#ffe151] shadow-[0_10px_15px_0_rgba(0,0,0,0.1)] focus:shadow-[…0.2]` + e-mail validation              |
| `.size4.bor1` 172×80 tab                      | `SubscribeLabel.tsx` — absolute `left-0 top-0 w-[172px] max-[576px]:w-[5px] border-l-[5px] border-l-[#333]`                   |
| `.size2` 80×80 arrow button                   | `SubmitArrow.tsx` — absolute `right-0 top-0 size-[80px] max-[576px]:w-[60px]`, lucide arrow, `group-hover:translate-x-[10px]` |
| `.m2-txt2` caption + `.how-social` rings      | `SocialBand.tsx` / `SocialLinks.tsx` — caption + three `size-9 rounded-full border border-[#e6e6e6]` circles                  |
| `.how-social:hover` `#333`                    | `hover:bg-[#333] hover:text-white transition-all duration-[400ms]`                                                            |
| `.alert-validate::before/::after`             | `ValidationBubble.tsx` — own offsets `right-[72px]` / glyph `right-[78px]`, opacity transition `400ms`                        |
| `js/snippet.js` validate-form                 | `useEmailValidation.ts` — same regex `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/`, prevent submit, clear on focus                        |
| `images/bg01.jpg` (1200×900)                  | `https://picsum.photos/seed/prologue-hollow/1200/900` on the photo panel                                                      |
| `fonts/*.woff2` (Playfair Display + Poppins)  | Google Fonts `<link>`: `Playfair+Display:wght@400;500` + `Poppins:wght@400;500` (all faces exist on Google Fonts)             |
| inlined fa/zmdi SVG paths                     | `lucide-react` glyphs (Facebook, Twitter/X, Youtube, ArrowRight, TriangleAlert)                                               |
| — (source has no footer credit)               | `Attribution.tsx` — the ONLY addition: a small Component Dock line linking `https://www.componentdock.com/`                   |

## Sibling comparison (same `## Uncategorized (15)` group, `comingsoon_01..15`)

Already prepped before this slug: `comingsoon_01..13` → `debut`, `premiere`,
`incoming`, `eve`, `advent`, `airborne`, `imminent`, `forthcoming`, `awaited`,
`impending`, `oncoming`, `looming`, `pending`. `comingsoon_14` (**prologue**) is
the 14th.

**Closest relative: `comingsoon_12` → `looming`.** Both are white-panel splits
with the same Poppins 24px `#999` update line, the same 10/15px shadow and
`translateX(10px)` arrow, the same validation bubble shape and the same
50→60/40→stacked responsive choreography. The nine deltas that keep `prologue`
from being a copy:

1. split **37/63** (looming: 50/50);
2. **one static photograph** (looming: three-photograph cross-fading slideshow);
3. heading **Playfair Display 60px upright, weight 500, uppercase, two lines**
   (looming: `PlayfairDisplay-BlackItalic` 90px weight 900, italic, 60px ≤576px);
4. **yellow `#ffe151` square bar** with a 5px `#333` left-border label tab
   (looming: white well, no border, no radius, no tab);
5. bar **overhangs the panel by 60px** via `calc(100% + 110px)` (looming: 500px
   well fully inside the panel);
6. arrow button **80×80** (looming: 90×80 lane inside the well; `pending`: 35px);
7. socials are **1px `#e6e6e6` hairline rings** with 16px `#666` glyphs behind an
   uppercase `FOLLOW US` caption (looming: filled `#ccc` discs, 22px white
   glyphs, no caption; `pending`: translucent white rings on a photo);
8. bubble pinned **right:72px / glyph 78px** (looming: 82/88; `pending`: 32/38);
9. the scrim is **invisible** here (looming: the visible wash over the photo).

No sibling has an asymmetric 37/63 split, a brand-coloured input, a left-border
label tab or an overhanging control.

## Fidelity risks to watch during implementation

- **Bar width formula.** `w-[650px] max-w-[calc(100% + 110px)]` — `w-full` or a
  bare `w-[650px]` mis-shape both the 1440 and the 1180 cases. Keep the
  ≤992px `max-w-full` override so the stacked layout cannot overflow.
- **Overhang is intentional, not a bug.** At ≥1200px 60px of the yellow bar and
  the whole arrow button sit on the photograph. Do not "fix" it with
  `overflow-hidden` on the panel (that would also clip the button) or by shrinking
  the bar.
- **The scrim must stay invisible.** If the recreation puts the photo on the
  panel's own `background-image` (as the source does) the 50% layer stays behind
  it. Rendering the scrim ABOVE the photo would darken it and break the
  screenshot match.
- **Square yellow bar, not a pill.** `rounded-none`, no border, shadow only —
  the family's other slugs are pills/wells/underlines.
- **Label tab collapse.** At ≤576px it is a 5px black tick with the caption
  hidden, and the field padding becomes `0 60px 0 25px`; hiding the tab entirely
  instead would lose the black rule the design leans on.
- **Font weights.** Playfair Display 500 and Poppins 500 must come from the
  Google Fonts link (`wght@400;500`), otherwise the browser synthesises them and
  the heading/field text render too thin.
- **No countdown and no slideshow.** This slug's `snippet.js` has ONE
  feature (validation). Adding a countdown (as the V13 sibling needed) would be
  invention.
- **Copy.** Write your own headline/update line/caption/placeholder strings of the
  same kind; the source's `Subcribe Now:` misspelling must not be reproduced (and
  no source string may appear in `apps/prologue`).
- **Assets.** Never copy `bg01.jpg`, `logo.png`, the favicon, the woff2 files or
  the inlined fa/zmdi paths; the icon font is not needed at all (`lucide-react`).
