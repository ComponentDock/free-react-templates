# Looming — design notes (replication research)

Source: ColorLib **Coming Soon V12** —
https://colorlib.com/wp/template/comingsoon_12/ (source slug `comingsoon_12`;
ColorLib page HTTP 200, 109,403 B, `text/html; charset=UTF-8`, page title
"Coming Soon V12 - Free Split-Screen Website Template 2026 - Colorlib",
description "A full-blown free website template for under construction pages with
a split-screen design, slideshow and social media icons." — verified 2026-10-11).
The theme preview `https://preview.colorlib.com/theme/comingsoon_12/` returns
**HTTP 404** and the `theme/bootstrap/comingsoon_12/` variant is **HTTP 404** as
well (verified 2026-10-11 — the same live-preview gap as the rest of the
`comingsoon_*` family). Replication therefore used the **official source zip**
`https://preview.colorlib.com/downloads/free/comingsoon_12.zip`
(HTTP 200, 554,988 B, `application/zip`) — the real template's own files — as the
DOM/CSS/behaviour reference, plus the screenshot
`https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-12.jpg`
(HTTP 200, 28,010 B, served as `image/avif` — this slug is AVIF, not JPEG —
1200×972, converted to PNG with PIL and reviewed visually).

Reference artifacts: `/tmp/cs12/cs12.zip`, extracted to
`/tmp/cs12/out/comingsoon_12/` (`index.html` 4,703 B · `css/style.css` 703 lines ·
`js/snippet.js` 2,053 B · `README.md` · `images/bg01.jpg` 950×900, 95,997 B,
mean `rgb(82,76,72)` · `images/bg02.jpg` 950×900, 130,039 B, mean `rgb(43,31,26)` ·
`images/bg03.jpg` 950×900, 151,513 B, mean `rgb(115,132,144)` ·
`images/icons/logo.png` 51×44 RGBA, 1,558 B, mean `rgb(21,21,21)` ·
`images/icons/favicon.ico` 32,038 B · `fonts/PlayfairDisplay-BlackItalic.woff2`
75,548 B · `fonts/Poppins-Regular.woff2` 48,416 B · `fonts/Poppins-Medium.woff2`
48,444 B · `fonts/fontawesome-webfont-subset.woff2` 576 B), ColorLib page saved to
`/tmp/cs12/src12.html`, screenshot to `/tmp/cs12/shot.jpg` (raw twice-AVIF) and
`/tmp/cs12/shot.png` (1200×972, the review copy). Research date: 2026-10-11.

## Visual summary (from screenshot + source)

One full-viewport screen with *no scrolling content*, split down the middle:

```
┌───────────────────────────┬───────────────────────────┐
│  A.            (mark)     │                           │
│                           │                           │
│                           │   photograph (bg01)       │
│      Coming Soon          │   white laptop + white    │
│   (Playfair Black Italic) │   chair on a walnut desk  │
│  Follow us for update now!│   bg-cover, centred       │
│                           │   darkened 50% by the     │
│  ┌─────────────────────┐  │   page-wide scrim         │
│  │ Email Address     → │  │                           │
│  └─────────────────────┘  │                           │
│                           │                           │
│  (f) (t) (y)              │                           │
└───────────────────────────┴───────────────────────────┘
   50%  opaque #fff               50%  photo + scrim
```

- **The split is the design.** This is the ONLY slug in the `comingsoon_01..15`
  group that is not one full-bleed photographed screen: a white half carries all
  the content and the photographic half is decorative. The page scrim
  (`rgba(0,0,0,0.5)`) sits behind BOTH panels, so it dims only the photograph.
- **The heading is the family's heaviest face** — Playfair Display **Black
  Italic** (900 italic) at 90px in `#333`, sentence case. Every sibling uses a
  lighter sans or a non-black serif; nothing else in the family has this
  calligraphic weight.
- **The e-mail well is a flat white slab**: 500×80, no border, no radius, only a
  soft `0 10px 15px rgba(0,0,0,0.1)` shadow, with the submit affordance hidden in
  an invisible `90×80` lane at its top-right corner holding a bare 30px `#333`
  arrow (which slides 10px right on hover). There is no coloured button anywhere
  on the page.
- **Socials are filled light-grey discs**, left-aligned under the well's column
  (not centred like the sibling slugs), 36×36 with 22px white glyphs, hover fill
  `#333`.
- **Validation** shows as a white bordered bubble (`1px solid #c80000`,
  `border-radius:0`) pinned inside the field's right end with a red warning glyph
  beside it — hover-revealed on desktop, always visible at ≤992px.

## DOM skeleton (source `index.html`, verbatim class structure)

```
body
└── div.flex-w.flex-str.size1.overlay1                ← PAGE ROW (100% × min-height:100vh)
    │   .overlay1::after = rgba(0,0,0,0.5) at z-index:-1 (behind BOTH panels)
    ├── div.flex-w.flex-col-sb.wsize1.bg0.p-l-65.p-t-37.p-b-50.p-r-80.respon1   ← WHITE PANEL (50%)
    │   ├── div.wrappic1 > a > img[src=images/icons/logo.png]                   ← MARK (51×44)
    │   ├── div.w-full.flex-c-m.p-t-80.p-b-90 > div.wsize2                      ← CENTRED HERO
    │   │   ├── h3.l1-txt1.p-b-34.respon3            "Coming Soon"   (90px → 60px ≤576)
    │   │   ├── p.m2-txt1.p-b-46                     "Follow us for update now!"
    │   │   └── form.contact100-form.validate-form.m-t-10.m-b-10
    │   │       └── div.wrap-input100.validate-input[data-validate]
    │   │           ├── input.s2-txt1.placeholder0.input100.trans-04[name=email]
    │   │           │        [type=text][placeholder="Email Address"]
    │   │           └── button.flex-c-m.ab-t-r.size2.hov1 > i.zmdi-long-arrow-right
    │   │                    (inlined svg.cl-icon)                   ← SUBMIT LANE 90×80
    │   └── div.flex-w > a.size3.flex-c-m.how-social.trans-04.m-r-15.m-b-10 ×3   ← SOCIALS
    │            i.fa.fa-facebook / i.fa.fa-twitter / i.fa.fa-youtube-play
    └── div.wsize1.simpleslide100-parent.respon2                                 ← PHOTO PANEL (50%)
        └── div.simpleslide100                       (absolute, 100%×100%, z-index:-1)
            ├── div.simpleslide100-item.bg-img1  style="background-image:url(images/bg01.jpg)"
            ├── div.simpleslide100-item.bg-img1  ...bg02.jpg;display:none
            └── div.simpleslide100-item.bg-img1  ...bg03.jpg;display:none
```

## CSS token reference (extracted from `css/style.css`, authoritative over the screenshot)

```css
/* page row + the ONLY overlay */
.flex-w   { display:flex; flex-wrap:wrap }
.flex-str { align-items:stretch }
.size1    { width:100%; min-height:100vh }
.overlay1 { position:relative; z-index:1 }
.overlay1::after { content:""; display:block; position:absolute; z-index:-1;
                   width:100%; height:100%; top:0; left:0; background:rgba(0,0,0,0.5) }

/* white panel */
.flex-col-sb { display:flex; flex-direction:column; justify-content:space-between }
.wsize1 { width:50% }        .bg0 { background-color:#fff }
.p-t-37{padding-top:37px} .p-b-50{padding-bottom:50px}
.p-l-65{padding-left:65px} .p-r-80{padding-right:80px}

/* mark */
.wrappic1 { display:block }  .wrappic1 img { max-width:100% }

/* hero */
.w-full { width:100% }
.flex-c-m { display:flex; justify-content:center; align-items:center }
.p-t-80{padding-top:80px} .p-b-90{padding-bottom:90px}
.wsize2 { max-width:100% }

/* type */
.l1-txt1 { font-family:PlayfairDisplay-BlackItalic; font-size:90px; line-height:1.1; color:#333 }
.m2-txt1 { font-family:Poppins-Regular; font-size:24px; color:#999; line-height:1.2 }
.s2-txt1 { font-family:Poppins-Medium;  font-size:15px; color:#333; line-height:1.2 }
.p-b-34{padding-bottom:34px} .p-b-46{padding-bottom:46px}
.fs-30{font-size:30px} .cl1{color:#333} .trans-04{transition:all 0.4s}

/* e-mail well */
.contact100-form { max-width:100% }  .m-t-10{margin-top:10px} .m-b-10{margin-bottom:10px}
.wrap-input100 { width:500px; max-width:100%; position:relative;
                 background-color:transparent; height:80px }
.validate-input { position:relative }
.input100 { display:block; width:100%; height:100%; padding:0 90px 0 35px;
            background-color:#fff;
            box-shadow:0 10px 15px 0px rgba(0,0,0,0.1) }
.input100:focus { box-shadow:0 10px 15px 0px rgba(0,0,0,0.2) }
.placeholder0::-webkit-input-placeholder { color:#999999 }   /* + -moz/-ms/-moz-placeholder */

/* submit lane */
.ab-t-r { position:absolute; right:0px; top:0px }
.size2  { width:90px; height:80px }
.hov1:hover i { transform:translateX(10px) }

/* validation bubble */
.alert-validate::before { content:attr(data-validate); position:absolute; max-width:70%;
  background-color:#fff; border:1px solid #c80000; border-radius:0px;
  padding:4px 25px 4px 10px; top:50%; transform:translateY(-50%); right:82px;
  pointer-events:none; font-family:Poppins-Medium; color:#c80000; font-size:14px;
  line-height:1.4; text-align:left; visibility:hidden; opacity:0; transition:opacity 0.4s }
.alert-validate:hover:before { visibility:visible; opacity:1 }
@media (max-width:992px) { .alert-validate::before { visibility:visible; opacity:1 } }
.alert-validate::after { content:"\f071"; font-family:FontAwesome; display:block;
  position:absolute; color:#c80000; font-size:14px; top:50%;
  transform:translateY(-50%); right:88px }

/* socials */
.size3 { width:36px; height:36px }
.how-social { color:#fff; font-size:22px; background-color:#ccc; border-radius:50% }
.how-social:hover { background-color:#333; color:#fff }
.m-r-15{margin-right:15px} .m-b-10{margin-bottom:10px}

/* photo panel + slideshow */
.simpleslide100-parent { position:relative; z-index:1 }
.simpleslide100 { display:block; position:absolute; z-index:-1;
                  width:100%; height:100%; top:0; left:0 }
.simpleslide100-item { display:block; position:absolute; width:100%; height:100%;
                       top:0; left:0 }
.bg-img1 { background-position:center; background-repeat:no-repeat; background-size:cover }

/* responsive */
@media (max-width:1200px) { .respon1{width:60%} .respon2{width:40%} }
@media (max-width:992px)  { .respon1{width:100%; padding-left:15px; padding-right:15px}
                            .respon2{width:100%; height:500px} }
@media (max-width:576px)  { .respon3{font-size:60px} }

/* base */
html { box-sizing:border-box; font-family:sans-serif; line-height:1.15 }
body { margin:0; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,
       "Helvetica Neue",Arial,sans-serif; font-size:1rem; font-weight:400;
       line-height:1.5; color:#212529 }
@font-face { font-family:PlayfairDisplay-BlackItalic; src:url('../fonts/PlayfairDisplay-BlackItalic.woff2') format('woff2') }
@font-face { font-family:Poppins-Regular;            src:url('../fonts/Poppins-Regular.woff2') format('woff2') }
@font-face { font-family:Poppins-Medium;             src:url('../fonts/Poppins-Medium.woff2') format('woff2') }
@font-face { font-family:'FontAwesome';              src:url('../fonts/fontawesome-webfont-subset.woff2') format('woff2'); font-display:block }
```

`@font-face` families: PlayfairDisplay-BlackItalic (heading), Poppins-Regular
(sub-line), Poppins-Medium (field text + bubble), plus a 576 B FontAwesome subset
used ONLY for the bubble's `\f071` warning glyph — the arrow and the three social
glyphs are inlined SVG `path`s (`.cl-icon{height:1em; width:auto; fill:currentColor}`).
Google Fonts mapping for the recreation: **Playfair Display 900 italic** and
**Poppins 400 / 500**.

## Section-by-section fidelity notes

1. **Page row** — `display:flex; flex-wrap:wrap; align-items:stretch` at
   `width:100%; min-height:100vh`, `position:relative; z-index:1`. The scrim is
   its `::after` at `z-index:-1` with `background:rgba(0,0,0,0.5)`. Because the
   white panel is a later-painted opaque child, the scrim is only ever visible
   over the photograph. Two children, content FIRST, photo SECOND.
2. **White panel** — `width:50%`, `background:#fff`, a flex COLUMN with
   `justify-content:space-between`, `padding:37px 80px 50px 65px`. That
   `space-between` is the entire vertical layout: mark top, hero in the leftover
   middle, socials on the bottom edge. Never replace it with fixed paddings or
   `mt-auto` on one band only — the middle band only centres because the axis
   distributes the leftover space.
3. **Mark** — a 51×44 near-black (`rgb(21,21,21)`) mark, top-left. The recreation
   renders its OWN name/mark; the source file and glyph are never copied.
4. **Hero** — `w-full flex-c-m py-[80px]` (80 top / 90 bottom) centring a
   `max-w-full` block. Order: heading → sub-line → form, with 34px, 46px and
   10px block margins respectively.
5. **Heading** — Playfair Display **900 italic** 90px/1.1 `#333`, sentence case,
   60px at ≤576px. No `letter-spacing`, no uppercase: the italic slant and the
   black weight carry the design. Do not "correct" it to a lighter or roman face.
6. **E-mail well** — 500×80 (max-width 100%), transparent relative wrapper; the
   field is a flat white slab with `padding:0 90px 0 35px` (35px left text inset,
   90px right inset reserved for the submit lane), no border, no radius, and only
   the soft 0.1 (0.2 on focus) shadow. The 90px right inset exists literally for
   the lane — changing one without the other misaligns the text and the arrow.
7. **Submit lane** — absolute `top:0; right:0`, 90×80, transparent, no border, no
   radius, holding a bare 30px `#333` arrow with `transition:all .4s` and a
   `translateX(10px)` hover nudge. The recreation adds an `aria-label` (the
   source button has none) — that is an intentional, documented delta.
8. **Validation** — the bubble is `attr(data-validate)` on a white box with a
   `1px solid #c80000` border and `border-radius:0`, `padding:4px 25px 4px 10px`,
   `max-width:70%`, vertically centred (`top:50%; translateY(-50%)`) and pinned
   `right:82px`; the warning glyph sits at `right:88px`; both fade over `0.4s`.
   Above 992px it is hover-revealed (mouse only), at ≤992px always visible —
   reproduce that with a `group-hover`/focus-visible state plus a
   `max-[992px]:opacity-100` override, not by dropping the hover rule.
9. **Socials** — three 36×36 `#ccc` filled circles, NO border, 22px white glyphs,
   15px right / 10px bottom margins, hover fill `#333`. Left-aligned (the row has
   no centring class) — this is the visual difference that most often gets
   "fixed" wrongly against the centred sibling slugs.
10. **Photo panel** — `width:50%`, `position:relative; z-index:1`, with the
    slideshow layer absolute `100%×100%` at `z-index:-1` INSIDE it (not
    `position:fixed`): the layer fills the panel's own box, which is why the
    white half stays clean. Three `cover/centre/no-repeat` items; item 0 shown,
    items 1–2 `display:none` in the markup and switched by the script.
11. **Slideshow behaviour** — 1000 ms opacity transition, 7000 ms interval,
    `requestAnimationFrame` swap, wraps after the third item, and short-circuits
    (stays on item 0) when `prefers-reduced-motion: reduce` matches. Reimplement
    as React state + `useEffect` with `clearInterval` on unmount.
12. **Attribution** — one small "Component Dock" line linking
    `https://www.componentdock.com/`; the ONLY addition against the reference.

## Source → React adaptation table

| Reference                                                        | Recreation                                                              |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 50/50 → 60/40 → stacked split with `width` classes                | `w-1/2` + `max-[1200px]:w-3/5` / `max-[992px]:w-full` (+ `h-[500px]` photo band) |
| `.overlay1::after` `rgba(0,0,0,0.5)` at `z-index:-1`              | one absolutely positioned `bg-black/50` layer behind the panels          |
| `justify-content:space-between` column at `37/80/50/65` padding   | `flex flex-col justify-between pt-[37px] pr-[80px] pb-[50px] pl-[65px]`  |
| `51×44` `logo.png` mark                                          | the app's own dark wordmark (never the source file/glyph)                |
| `PlayfairDisplay-BlackItalic` 90px woff2                          | Google Fonts `Playfair+Display:ital,wght@1,900`, `text-[90px]` → `text-[60px]` at ≤576px |
| `Poppins-Regular` 24px / `Poppins-Medium` 15px woff2              | Google Fonts `Poppins:wght@400;500`                                      |
| `.input100` white slab, `box-shadow 0.1` → `0.2` focus            | Tailwind `shadow-[0_10px_15px_rgba(0,0,0,0.1)]` + `focus:shadow-[…0.2]`   |
| `.hov1:hover i{translateX(10px)}`                                 | `group-hover:translate-x-[10px] transition-all duration-[400ms]`        |
| `.alert-validate::before/::after` bubbles                         | a React `ValidationBubble` component driven by the field's error state   |
| Inlined `fa`/`zmdi` SVG paths (arrow + 3 brands)                  | `lucide-react` (ArrowRight, Facebook, Twitter, Youtube)                  |
| Three `950×900` photographs in `images/`                          | `https://picsum.photos/seed/looming-bg1..bg3/950/900`                    |
| `js/snippet.js` DOM class toggles + `setInterval`                 | React state + `useEffect` (interval cleared on unmount; rAF swap kept)    |
| `css/style.css` (with a `:where(html) all: revert` guard + Bootstrap reboot) | Tailwind 4 `@theme` tokens + utilities (guard and reboot never copied)  |
| No footer credit                                                 | one small Component Dock attribution line (monorepo requirement)         |
| No `apps/looming` exists yet                                      | new app folder + workspace (TEMPLATES.md line 3043 stays `- [ ]` until an implementer claims it) |

## Sibling comparison (same `## Uncategorized (15)` group)

| slug                     | invented name | page geometry                      | heading face / size                | e-mail capture                              | socials                                   |
| ------------------------ | ------------- | ---------------------------------- | ---------------------------------- | ------------------------------------------- | ----------------------------------------- |
| earlier family slugs (`comingsoon_01`…`comingsoon_11`, already prepped) | debut, premiere, incoming, eve, advent, airborne, imminent, forthcoming, awaited, impending, oncoming | ONE full-bleed photographed screen + scrim | hairline/regular sans or plain serif, often uppercase | dark/pill wells, labelled or disc submits; one slug has no form at all | centred rows; white-outlined or translucent discs |
| **`comingsoon_12` → `looming`** | **looming** | **SPLIT: opaque white 50% panel + 50% photo panel; 60/40 at ≤1200px; stacked at ≤992px** | **Playfair Display 900 ITALIC, 90px, sentence case (`#333`)** | **flat white 500×80 slab, shadow-only, invisible 90×80 arrow lane, bordered white validation bubble (`1px #c80000`, radius 0)** | **36×36 filled `#ccc` discs, LEFT-aligned, 22px white glyphs, hover `#333`** |

Do not copy values from the siblings: the split ratio, the background treatment,
the type face/weight, the field treatment, the validation bubble styling and the
social disc treatment all differ on this slug.

## Fidelity risks to watch during implementation

- **Do not flatten the split.** Making the photo full-bleed behind a translucent
  content panel (the sibling geometry) destroys the design; the left half is
  opaque `#fff` and the scrim must only read on the right half.
- **Heading is weight 900 ITALIC, sentence case.** Loading the roman face, a
  lighter weight, or uppercasing it loses the family-unique calligraphic look.
  Google Fonts requires the explicit `ital,wght@1,900` axis.
- **The well has NO border and NO radius.** Adding either turns it into a
  different (and much more common) component.
- **Keep `padding:0 90px 0 35px` on the field.** The 90px right inset IS the
  submit lane's box; changing one without the other breaks the alignment.
- **The socials are left-aligned, filled `#ccc`.** Centring them (the sibling
  habit) or giving them a border changes the bottom band completely.
- **The scrim lives BEHIND the panels** (one `z-index:-1` layer on the row), not
  on top of the photo panel only — mirroring how the source paints it. The effect
  must be identical even if the implementation composes it differently.
- **Validation state is shown two ways**: hover-revealed above 992px and always
  visible at ≤992px, cleared by focus, with the submit prevented. A test that
  only checks "message exists in the DOM" is not enough — exercise the hover
  override at a small viewport too.
- **No countdown, no navbar, no footer band.** Adding any of them "for parity"
  with the neighbouring slugs is wrong.
