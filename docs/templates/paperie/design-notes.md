# Paperie — design notes (replication research)

Recreation of ColorLib **"Invits"** → app `apps/paperie`, template name
**paperie**. Everything below was measured from the live preview
(`https://preview.colorlib.com/theme/invits/`, HTTP 200, 32,391 B) and its
stylesheet `assets/css/style.css` (HTTP 200, 59,750 B, sha256
`8f8973ab0b14d7203d0821603845a1fcd3296f63c88d17d462210cedcacdc1c9`) on
2026-10-12, at 1440 / 1200 / 768 / 375 px. The archive
`https://preview.colorlib.com/downloads/free/invits.zip` is **404** — there is no
downloaded twin to diff against, so the live preview is the only reference.

## Reference availability

| Reference | Status |
| --- | --- |
| Source page `https://colorlib.com/wp/template/invits/` | HTTP 200 |
| Live preview `https://preview.colorlib.com/theme/invits/` | **HTTP 200**, 32,391 B, `<title>Wedding HTML-5 Template</title>` |
| `assets/css/style.css` | **HTTP 200**, 59,750 B, sha256 `8f8973ab…` |
| `assets/js/main.js` | **HTTP 200**, 7,652 B, sha256 `aaae1b72…` |
| Archive `downloads/free/invits.zip` | **HTTP 404** (no twin) |
| TEMPLATES.md screenshot `invits-free-template.jpg` | HTTP 200, **AVIF** (181,443 B, 1200 × 946) → converted to PNG and inspected |
| Google Fonts `Playfair+Display`, `Poppins` | HTTP 200 (probe with a real browser UA; the `css2` API needs `:wght@…`, not `:400,700`) |

## DOM skeleton (source order)

```
body
├── div.preloader.d-flex  (white #f7f7f7 splash, 100 px spinner ring #800098)
├── header
│   └── div.header-area
│       └── div.main-header.header-sticky            (padding:15px 0)
│           └── div.container > div.row.align-items-center
│               ├── div.col-xl-2 > div.logo > a > img (logo.png, 113 × 33)
│               ├── div.col-xl-10
│               │   └── div.main-menu.f-right.d-none.d-lg-block > nav > ul#navigation
│               │       ├── li > a  Our Story | Location | Gallery | Guest Book
│               │       ├── li > a Pages + ul.submenu (Blog, Blog Details, Element)
│               │       └── li > a contact
│               └── div.col-12 > div.mobile_menu.d-block.d-lg-none  (slicknav target)
├── div.slider-area
│   └── div.slider-active                             (slick, fade)
│       ├── div.single-slider.slider-height.hero-overly[data-background=homeHero_1.jpg]
│       │   └── div.hero__caption.caption-bg (540×540 circle, ::before = rotating sprite)
│       │       └── div.circle-caption
│       │           ├── span  "Feb 14 2020"  (::before/::after = 57×2 white dashes)
│       │           ├── h1    "Julia & Jakson"
│       │           └── p     "We are getting married"
│       └── div.single-slider…[data-background=homeHero_2.jpg]   (same content)
├── div.Our-story-area.story-padding
│   ├── div.container > div.row
│   │   ├── div.col-lg-6 > div.story-img.mb-100
│   │   │   ├── img.story-imges (story-img.jpg)
│   │   │   └── div.shape-flower-img > img.flower-top (flower_top.png)
│   │   └── div.col-lg-6 > div.story-caption
│   │       ├── img (flower_right.png, 106 × 61)
│   │       ├── h3 "Our Story"
│   │       ├── p.story1  /  p.story2
│   └── div.shape-flower.d-none.d-xl-block
│       ├── img.flower1 (shape_left.png, 359 × 361, flush left, vertically centred)
│       └── img.flower2 (shape_right.png, 357 × 361, flush right)
├── div.service-area                                   (bg #fefcfa)
│   └── div.container > div.row > div.col-lg-4 ×3
│       └── div.singl-services.text-center.mb-60        (::before = 2×75 #e09513 rule)
│           ├── div.top-caption  > h4 + p (date)
│           ├── div.services-img > img (service<N>.png) + div.back-flower > img
│           └── div.bottom-caption > span (time) + p (venue)
├── div.our-memories-area.section-padding2
│   ├── div.container
│   │   ├── div.section-tittle.text-center > img (sprig) + h2 "OUR MEMORIES"
│   │   └── div.row.no-gutters > div.col-lg-4.col-md-4 ×6
│   │       └── div.memory > div.memories-img
│   │           ├── img (memories<N>.jpg)
│   │           └── div.menorie-icon[href] > i.ti-plus     (40 px circle + plus)
│   └── div.memories-shape.d-none.d-xl-block
│       ├── img.memories-shape1 (left-img.png, 259 × 532)
│       └── img.memories-shape2 (right-img.png, 283 × 535)
├── div.gift-area.gift-padding.gift-overly[data-background=memories/gft.jpg]
│   └── div.container > div.row > div.offset-lg-1.col-12 > div.gift-caption
│       ├── h2 "The Best Gift"
│       ├── p  "Will be your bresentation"
│       └── a.btn "R.S.V.P"
├── div.contact-form.section-padding2.fix
│   └── div.container > div.row > div.col-xl-6.col-lg-6.offset-lg-3 > div.form-wrapper
│       ├── div.section-tittle.tittle-form > img (sprig) + h2 "Are you attending?"
│       ├── form#contact-form[action="#"]   (Name, Email(email), select#select2, textarea, button.btn2)
│       ├── div.shape-inner-flower > img.top1/.top2/.top3/.top4   (4 corner sprigs)
│       └── div.shape-outer-flower > img.outer-top + img.outer-bottom (outside the card)
├── section.contact-sections > div.d-area > div#map    (Google Maps, 500 px, API key)
├── div.brand-area.section-padding2
│   └── div.container
│       ├── div.section-tittle.text-center > img (sprig) + h2 "OUR LOVELY PARTNERS"
│       └── div.brand-active.brand-border > div.single-brand ×5 > img (brand<N>.jpg)
└── footer > div.footer-main.footer-bg                  (bg #f9f7f4)
    ├── div.footer-area.footer-padding
    │   └── div.container > div.row.d-flex.justify-content-between
    │       ├── div.col-xl-4 > logo2_footer.png + p.info1 + p.info2 ×3
    │       ├── div.col-xl-3 > h4 "WEDDING PLANNER FAQS" + ul ×6
    │       ├── div.col-xl-2 > h4 "ABOUT US" + ul ×6
    │       └── div.col-xl-3 > h4 "Instagram" + ul.insta-feed ×6 (3 × 2 grid)
    └── div.footer-bottom-area.footer-bg > div.container > div.footer-border
        └── div.footer-copy-right.text-center > p  (colorlib credit → replace)
```

## CSS token reference block (verbatim highlights)

```css
/* brand + text */
body{font-family:"Poppins",sans-serif;font-size:16px;color:#212529}
h1,h2,h3,h3,h4,h5,h6{font-family:"Playfair Display",serif;color:#362d2b;font-weight:500}
a{color:#800098}                      /* the sheet's own link colour */

/* buttons (identical blades, different sweep axis) */
.btn,.btn2{background:#800098;color:#fff;font-size:16px;font-weight:400;
  letter-spacing:1px;line-height:0;padding:30px 44px;border-radius:5px;
  min-width:150px;border:0;overflow:hidden;z-index:1;position:relative;
  text-transform:capitalize;transition:color .4s linear}
.btn::before,.btn2::before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;
  background:#620672;z-index:1;border-radius:5px;transform-origin:0 0;
  transition:transform .5s cubic-bezier(0.5,1.6,0.4,0.7)}
.btn::before{transform:scaleY(0)}  .btn:hover::before{transform:scaleY(1)}
.btn2::before{transform:scaleX(0)} .btn2:hover::before{transform:scaleX(1)}

/* header + sticky */
.main-header{padding:15px 0}
.main-header .main-menu ul li a{color:#002e5b;font-size:16px;padding:39px 19px;text-transform:capitalize;transition:all .3s ease-out}
.main-header .main-menu ul li:hover>a{color:#800098}
.header-sticky.sticky-bar.sticky .main-menu ul>li>a{padding:26px 20px}
.sticky-bar{position:fixed;top:0;left:0;width:100%;box-shadow:0 10px 15px rgba(25,25,25,.1);
  z-index:9999;animation:500ms ease-in-out 0s normal none 1 running fadeInDown}

/* dropdown — keep the quirky asymmetric radius */
.main-header .main-menu ul ul.submenu{position:absolute;width:170px;background:#fff;left:0;top:120%;
  visibility:hidden;opacity:0;box-shadow:0 0 10px 3px rgba(0,0,0,0.05);padding:17px 0;
  border-top:5px solid #800098;border-radius:0 37px 0px 24px;transition:all .3s ease-out}
.main-header ul>li:hover>ul.submenu{visibility:visible;opacity:1;top:100%}
.main-header .main-menu ul ul.submenu>li>a{padding:6px 10px !important;font-size:14px;color:#0b1c39}

/* hero */
.slider-height{max-height:940px;height:940px;background-position:center center;background-size:cover}
.hero-overly::before{background-color:rgba(0,0,0,0.1)}                 /* the scrim */
.hero__caption.caption-bg{background-repeat:no-repeat;background-size:cover;height:540px;width:540px}
.hero__caption::before{background-image:url(../img/hero/hero_circle.png);background-size:cover;
  width:540px;height:540px;z-index:-1;animation-name:rotateme;animation-duration:30s;
  animation-iteration-count:infinite;animation-timing-function:linear}
.circle-caption span{color:#fff;text-transform:uppercase;font-size:23px;font-family:"Poppins",sans-serif}
.circle-caption span::before{position:absolute;top:50%;left:-76px;width:57px;height:2px;background:#fff}
.circle-caption span::after {position:absolute;top:50%;right:-76px;width:57px;height:2px;background:#fff}
.circle-caption h1{font-size:65px;font-weight:700;color:#fff;font-family:"Playfair Display",serif;
  line-height:1.2;text-transform:capitalize;margin-bottom:30px}
.circle-caption p{color:#fff;text-transform:uppercase;font-size:23px}

/* story */
.story-padding{padding-top:200px;padding-bottom:100px}
.Our-story-area .story-caption{padding-left:48px;padding-right:45px;padding-top:48px}
.Our-story-area .story-caption h3{font-size:40px;font-weight:700;color:#362d2b;
  font-family:"Playfair Display",serif;text-transform:uppercase;margin-bottom:44px}
.Our-story-area .story-caption .story1{margin-bottom:35px}
.Our-story-area .story-img .shape-flower-img .flower-top{position:absolute;bottom:-79px;left:-71px}
.Our-story-area .shape-flower .flower1{position:absolute;left:0;top:50%;transform:translateY(-50%)}
.Our-story-area .shape-flower .flower2{position:absolute;right:0;top:50%;transform:translateY(-50%)}

/* schedule */
.service-area{background:#fefcfa;padding-top:170px;padding-bottom:110px}
.service-area .singl-services{position:relative}
.service-area .singl-services::before{position:absolute;top:50%;right:-17px;width:2px;height:75px;
  background:#e09513;transform:translateY(-50%)}
.service-area .col-lg-4:nth-child(3) .singl-services::before{display:none}
.service-area .singl-services .top-caption h4{color:#362d2b;font-size:35px;font-weight:400;line-height:1.2}
.service-area .singl-services .top-caption p{font-family:"Playfair Display",serif;color:#362d2b;
  font-size:20px;margin-bottom:54px}
.service-area .singl-services .services-img img{border:10px solid rgba(255,255,255,0.8);border-radius:50%}
.service-area .singl-services .bottom-caption span{color:#daad9e;letter-spacing:10px;font-size:16px;
  margin-bottom:15px;display:block}
.service-area .singl-services .bottom-caption p{color:#090908}

/* memories */
.section-padding2{padding-top:200px;padding-bottom:200px}
.section-tittle h2{color:#362d2b;font-size:40px;font-weight:700;margin-bottom:66px;
  line-height:1.3;text-transform:uppercase}
.our-memories-area .memory .memories-img::before{background-color:rgba(0,0,0,0.6);opacity:0;
  visibility:hidden;transition:all .4s ease-out}
.our-memories-area .memory .memories-img .menorie-icon i{color:#fff;font-size:20px;width:40px;
  height:40px;line-height:35px;border:2px solid #fff;border-radius:50%;opacity:0;visibility:hidden}
.memory:hover{padding:10px}
.memory:hover .memories-img::before{opacity:1;visibility:visible}
.memory:hover .memories-img .menorie-icon i{opacity:1;visibility:visible;transform:scale(1)}

/* gift */
.gift-overly::before{background-image:linear-gradient(0deg,#fff 0%,rgba(215,215,215,0.01) 99%,
  rgba(215,215,215,0) 100%)}                       /* white wash from the bottom */
.gift-area .gift-caption h2{font-size:70px;font-weight:700;color:#362d2b;
  font-family:"Playfair Display",serif;text-transform:capitalize}
.gift-area .gift-caption p{color:#362d2b;font-size:30px;margin-bottom:60px;line-height:1.3}

/* rsvp card */
.contact-form .form-wrapper{background:#fff;padding:100px 70px 100px 70px;
  box-shadow:0px 0px 86px 0px rgba(0,0,0,0.06);position:relative}
@media (min-width:992px) and (max-width:1199px){.contact-form .form-wrapper{padding:100px 82px 70px 82px}}
.contact-form .form-wrapper .shape-inner-flower .top1{position:absolute;top:20px;left:25px}
.contact-form .form-wrapper .shape-outer-flower .outer-top{position:absolute;top:-62px;left:-143px;z-index:-1}
.contact-form .form-wrapper .shape-outer-flower .outer-bottom{position:absolute;bottom:2px;right:-133px;z-index:-1}
.contact-form input{background:none;height:60px;width:100%;padding:10px 25px;border:1px solid #d9d9d9;
  color:#a3a3a3;font-weight:500;text-transform:capitalize;border-radius:5px}
.contact-form textarea{color:#a3a3a3;height:140px;width:100%;padding:30px 50px;letter-spacing:2px;
  border:1px solid #d9d9d9;border-radius:5px;text-transform:capitalize}
.nice-select{background:none;height:60px;width:100%;color:#a3a3a3;font-weight:500;
  border:1px solid #d9d9d9;border-radius:5px;text-transform:capitalize}
.nice-select::after{border-bottom:2px solid #a3a3a3;border-right:2px solid #a3a3a3;height:7px;width:7px;right:41px}

/* footer */
.footer-bg{background:#f9f7f4}
.footer-padding{padding-top:200px;padding-bottom:74px}
.footer-tittle h4{color:#362d2b;font-family:"Poppins",sans-serif;font-size:18px;margin-bottom:38px;
  font-weight:500;text-transform:uppercase}
.footer-tittle ul li a{color:#868c98;font-weight:300}
.footer-tittle ul li a:hover{color:#800098;padding-left:5px}
.footer-area .insta-feed{display:flex;flex-wrap:wrap} .footer-area .insta-feed li{width:33.33%}
.footer-border{border-top:1px solid #dddddd;padding:33px 0px}
.footer-bottom-area .footer-copy-right p{font-weight:300;font-size:16px;line-height:2}
.footer-bottom-area .footer-copy-right p i{color:#800098}

/* scroll-to-top */
#scrollUp{background:#800098;height:50px;width:50px;right:31px;bottom:18px;color:#fff;font-size:20px;
  text-align:center;border-radius:50%;line-height:48px;border:2px solid transparent}

/* breakpoints used by the sheet */
/* 1200–1600 · 992–1199 · 768–991 · 576–767 · ≤767 */
```

## Hero circle: what the PNG actually contains (measured, not assumed)

The hero's purple disc is a **sprite** (`assets/img/hero/hero_circle.png`,
27,597 B, 540 × 540 RGBA), not CSS. Pixel analysis:

- fill: **`rgba(129,29,146,217)`** = `#811d92` at **85.1 %** alpha — 225,498 of
  291,600 pixels (77 %) carry exactly that value, so the disc is flat purple over
  the photo;
- a **white dashed ring at radius ≈ 251 px** (≈ 502 px diameter inside the 540 px
  box, i.e. inset ~19 px) — 775 white-ish pixels, all between radius 250 and 252;
- everywhere else is fully transparent (61,573 px of `alpha 0`) — the corners.

Recreation: a 540 px circle in `rgba(129,29,146,.85)` with a **dashed white ring**
(~1 px, inset ~19 px) and a 30 s linear rotation — the rotation only reads
because of the dashes. The wordmark is likewise a sprite (113 × 33): theme purple
`#800098` type with a **`#ff0b0b` full stop**.

## Screenshot analysis (TEMPLATES.md thumbnail, 1200 × 946)

Cream-white page; slim header with the purple "Invits." wordmark left and a
right-hand sentence-case nav; a photo hero with a **large translucent purple
circle** (white dashed ring, the date flanked by two white dashes, the couple
names in white Playfair Display, a white uppercase tagline) sitting left-of-centre
over the couple photo; below it the **"OUR STORY"** band with a small sprig above
the heading and a portrait photo left; then the schedule band on the faint cream
`#fefcfa`; a 3 × 2 photo gallery with pale flower line-art at both edges; a photo
"gift" band washed white; the white RSVP card with gold sprigs inside and
watercolour branches outside; a map strip; a partner-logo row; and a cream footer
with four columns. The thumbnail's section order matches the live DOM exactly.

## Source inner pages (live, curl-probed 2026-10-12)

The source's file set is **nine-page** even though the landing page is the
one-page invitation design: **eight** further pages are live at
`https://preview.colorlib.com/theme/invits/<page>` (all **HTTP 200**, `curl -sS`
basis).

| Page | Live (`curl -sS`) | What it holds → what it informs |
| --- | --- | --- |
| `our_story.html` | **200**, 23,429 B | "Our Story", "The Best Gift", "OUR MEMORIES", "OUR LOVELY PARTNERS" → the story / memories / partners bands |
| `location.html` | **200**, 17,832 B | "Our Location" → the map band's copy kind (the recreation uses a key-less embed) |
| `gallery.html` | **200**, 18,750 B | "Our Gallery" + "OUR MEMORIES" grid |
| `booking.html` | **200**, 16,180 B | "Are you attending?" form → the RSVP card's field set |
| `blog.html` · `single-blog.html` | **200**, 31,101 B · 34,767 B | blog grid + post shell |
| `elements.html` · `contact.html` | **200**, 38,698 B · 19,142 B | style guide + contact shell |

Paperie stays a one-pager; those pages are read for structure and copy kind only.

## Section-by-section fidelity notes

1. **Header** — 103 px tall at rest (transparent over the page's white). Links
   `#002e5b`, 16 px, capitalize, `padding:39px 19px` (the sheet drops that to
   `39px 15px` at 992–1199). Hover `#800098`. Scrolled state (live-verified):
   `sticky-bar sticky` → `position:fixed`, height **77 px**, white, nav padding
   `26px 20px`, `box-shadow:0 10px 15px rgba(25,25,25,.1)`, `fadeInDown .5s`,
   `z-index:9999`. Below 992 px the nav is replaced by a slicknav bar: grey
   `#4c4c4c` strip, 54 px tall, with a **92 × 33 "MENU" button** (`#222`, radius
   4 px, white uppercase 16 px + hamburger) that expands to a **304 px** panel of
   white 14 px rows (`padding:10px 19px`, 41 px each) with a `+` marker on the
   Pages group. In React: a real disclosure with `aria-expanded` (slicknav clones
   the DOM and is not accessible).
2. **Hero** — 800 px at 1200–1600 px, 750 / 560 / 400 below that (the sheet's
   base value is 940 px, never reached at these widths). Two slides, identical
   copy, `fade:true`, and **no arrows and no dots** (`autoplay:false` too) — so on
   desktop the source effectively shows slide 1 forever. **Copy entrance:** each
   slide's three blocks carry `data-animation="fadeInUp"` + `data-delay` (`.3s` /
   `.5s` / `.9s` on the span, `h1`, `p`) and `main.js` `doAnimations()` — called
   from slick's `init` and `beforeChange` — adds the `animated fadeInUp` classes
   (verified live: the static HTML has **no** class, the running DOM does, and
   `animate.min.css` gives `.animated` a 1 s duration with
   `@keyframes fadeInUp{0%{opacity:0;translate3d(0,100%,0)} to{opacity:1;translateZ(0)}}`).
   Reproduce as a CSS keyframe with the same three delays, off under
   `prefers-reduced-motion: reduce`. The circle is
   `hero__caption.caption-bg` (540 × 540, captioned content centred at 405 × 208);
   per-breakpoint disc sizes 540 / 450 / 350 / 220. The date line's dashes are
   `::before`/`::after` 57 × 2 px white bars at ±76 px, hidden below 768 px.
   Measured copy box at 1440 px: h1 405 × 78 (65 px / 78 px line-height), p 405 ×
   30 (23 px), date 127 × 35.
3. **Our Story** — `padding:200px 0 100px`; photo 530 × 625 at x=168; the sprig
   overlaps at 215 × 302 (visible at xl; the sheet hides the wrapper in a
   narrower branch). Caption sprig 106 × 61; h3 40 px Playfair 700 uppercase,
   `margin-bottom:44px`; paragraphs measured `#978e98` (rgb 151,142,152) at 16 px
   / 30 px, first one 35 px below. Band-edge flowers 359 × 361 / 357 × 361,
   vertically centred, **xl only** (`d-none d-xl-block`).
4. **Schedule** — band `#fefcfa` (`padding:170px 0 110px`); cards 370 px each at
   1440 (col-lg-4), 237 px circles (217 px image + 2 × 10 px translucent ring),
   the sprig 173 × 244 tucked behind the circle's right edge; the gold divider is
   the card's own `::before` at `right:-17px`, and it is switched off on the third
   card (`nth-child(3)`) *and* below lg. Below lg the three columns stack.
5. **Memories** — `padding:200px 0`; tiles 390 × 482 at 1440 (3 across, no
   gutters), 385 × 476 at 1200, 230 × 284 at 768, full width 345 × 427 at 375.
   Hover = `rgba(0,0,0,.6)` wash + a 40 px circle (`line-height:35px`, 2 px white
   border, 50 %) with a plus glyph, plus a 10 px inset on the cell
   (`transition:all .4s ease-out`). The source opens a **magnific-popup**
   lightbox from `.menorie-icon` — in React use a `<dialog>`-based lightbox (no new
   dependency) and keep it keyboard operable. The plus glyph is a **themify icon
   font** glyph that does not paint in the downloaded set — recreate with a lucide
   icon. Edge line-art 259 × 532 / 283 × 535.
6. **Gift** — `padding:160px 0 170px`, background `memories/gft.jpg` via the
   `data-background` script, plus a `linear-gradient(0deg,#fff → transparent)`
   wash from the bottom (which is why the left half of the band reads white). The
   h2 is 70 px Playfair 700 capitalize on `#362d2b`, the copy 30 px, the CTA
   `.btn` 150 × 60 radius 5 px with the `scaleY` sweep. At 768 px the h2 stays
   70 px while the paragraph and paddings shrink.
7. **RSVP form** — `padding:200px 0`; the card is a `col-lg-6 offset-lg-3`
   (570 px at 1440, 563 px at 1200) with `padding:100px 82px 70px` and
   `box-shadow:0 0 86px 0 rgba(0,0,0,.06)`. Four 100 × 87 sprigs sit 20/25 px from
   the card's corners; the outer branches measure 499 × 493 (`top:-62px;
   left:-143px`) and 432 × 555 (`bottom:2px; right:-133px`) at `z-index:-1`. The
   select is a **jQuery nice-select** overlay — the native `<select>` is
   `display:none` — so the recreation must ship a real, keyboard-accessible
   select styled to the same 60 px skin (chevron 41 px from the right). The
   source's `action="#"` posts nowhere; validate locally and confirm in place.
8. **Map** — a 500 px `#map` filled by Google Maps with an **API key baked into
   the page**. Do not reuse it: the repo's existing templates embed either
   OpenStreetMap or the key-less `maps.google.com/maps?...&output=embed` form.
9. **Partners** — `padding:200px 0`; five marks 170 × 171 each, slick autoplay
   (`slidesToShow:5`, 3 at ≤1024, 2 at ≤991/600), no dots, no arrows.
10. **Footer** — `#f9f7f4`, `padding-top:200px; padding-bottom:74px` (70 px / 0
    under 992 px), four columns on a `justify-content-between` row; headings 18 px
    Poppins 500 uppercase `#362d2b` with `margin-bottom:38px`; links 16 px / 300
    `#868c98` that go `#800098` with a 5 px right shift on hover; the Instagram
    column is a 3 × 2 flex grid of 33.33 % cells (90 px at 1440, 115 px at 375);
    the closing rule is `1px solid #dddddd` with `padding:33px 0`; the copyright
    is 16 px / 32 px in `#978e98` with a purple heart. **The source's copyright
    credits Colorlib — replace with the required Component Dock link.**
11. **Scroll-to-top** — a 50 px `#800098` circle, 20 px white arrow, 31 px from
    the right / 18 px from the bottom, appearing after 300 px of scroll.

## Source → React adaptation table

| Source | Recreation |
| --- | --- |
| jQuery + slick / owl / slicknav / nice-select / magnific-popup / WOW | React state + CSS only; **no new dependencies** |
| Rotating `hero_circle.png` sprite | CSS circle `rgba(129,29,146,.85)` + dashed white ring + 30 s rotation |
| `logo.png` sprite wordmark | Text wordmark: "Paperie" in `#800098` + a `#ff0b0b` full stop |
| `data-background` jQuery script | Inline `style={{ backgroundImage }}` or a Tailwind arbitrary background |
| slick `doAnimations()` reading `[data-animation]`/`data-delay` on slide change | CSS keyframe (`fadeInUp`, .3/.5/.9 s) triggered per slide, off under reduced motion |
| slicknav mobile bar (cloned DOM) | Accessible disclosure (`aria-expanded`, focusable rows) |
| nice-select overlay hiding the `<select>` | Real `<select>` styled to the same skin |
| magnific-popup lightbox | `<dialog>`-based lightbox, keyboard operable |
| Google Maps with an API key | OpenStreetMap embed iframe (no key) |
| Colorlib credit in the footer | Component Dock link (`https://www.componentdock.com/`) + current year |
| All photography and sprig / branch PNGs | `picsum.photos/seed/paperie-<n>/<w>/<h>` + inline-SVG sprigs |
| themify / themify-icons / fontawesome glyphs | `lucide-react` icons |

## Sibling comparison (same ColorLib category, prepped under other names)

The Wedding family in this repo now has several recreated designs; "paperie" is
the **ornamental / watercolour one**:

| | paperie (this one) | trousseau | betrothal |
| --- | --- | --- | --- |
| Brand | magenta-purple **`#800098`** | hot pink `#ff2f92` | soft blush/blush-pink |
| Page | white with a cream `#fefcfa` band and a `#f9f7f4` footer | white with a `#f9f9ff` footer | airy white |
| Signature band | **540 px rotating purple circle** with a dashed ring | photo countdown with a translucent white timer panel | split hero with botanical framing |
| Radii | 5 px fields/buttons, 50 % circles, `0 37px 0px 24px` dropdown | square everywhere (0) | rounded cards |
| Ornaments | watercolour sprigs + big pale flower line-art | white flourish scrolls | leafy botanical line-art |
| Type | Playfair Display + Poppins | Playfair Display + Roboto | serif display + sans body |

Shared only in the loose sense of being invitation sites: structure, palette,
shape language and ornament treatment differ sharply per design — **never copy a
sibling's tokens**; every value in this note was measured on this slug's own
stylesheet at 1440 / 1200 / 768 / 375 px.

## Deltas to record in the PR

1. New brand name **Paperie** (source "Invits" never appears in the app).
2. Own couple names, dates, schedule titles, venue, footer copy and partner marks.
3. Photography → seeded picsum; every sprig / branch / line-art shape → inline SVG.
4. Map → OpenStreetMap embed instead of the source's keyed Google Maps.
5. Accessible substitutes for slicknav / nice-select / magnific-popup behaviour.
6. Two-slide fade hero keeps the source's copy on both slides, but exposes a
   pause/reduced-motion path the source lacks (it ships `autoplay:false` with no
   arrows and no dots).
7. Footer credit → Component Dock link (repo rule 5).
