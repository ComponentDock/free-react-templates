# Gridhost — design notes (section-by-section fidelity)

Source: ColorLib **"Webhostingservice"** — slug `webhostingservice`,
https://colorlib.com/wp/template/webhostingservice/ · preview
`https://preview.colorlib.com/theme/webhostingservice/`.
New name: **gridhost** (apps/gridhost, `@free-react-templates/gridhost`).

Research date **2026-10-11**. Reference artifacts:
`/tmp/whs/page.html` (47,215 B), `/tmp/whs/main-style.css` (64,303 B),
`/tmp/whs/shot.raw` (AVIF screenshot, 47,419 B) and `/tmp/whs/shot.png`
(1200×946, decoded with PIL — `vision_analyze` rejects raw AVIF).

Reference DOM/assets: `assets/css/style.css` (the only author sheet that matters;
the page also loads Bootstrap, OwlCarousel, SlickNav, Slick, nice-select,
magnific-popup, animate and three icon fonts — none copied), `assets/js/main.js`
plus jQuery/Slick/SlickNav/Owl/nice-select/counterup/waypoints, and the artwork
`logo.png`, `logo2_footer.png`, `hero/hero_right.png`,
`gallery/visit_bg.jpg`, `gallery/section_bg02.jpg`, `gallery/section_bg03.jpg`,
`gallery/footer_bg.jpg`, `gallery/cisco_brand{,2..6}.png`, `gallery/blog{1,2,3}.png`,
`gallery/shape-services.png`, `gallery/procing-shape{1,2}.png`,
`gallery/testimonail.png`, `icon/roket.png`, `testmonial/Homepage_testi.png`,
`testmonial/shape-testimonial.png`, `top-left-shape.png`, `right-top-shape.png`,
`left-botom-shape.png`.

## Global tokens (from the source stylesheet + live render)

- **Body:** `Muli, sans-serif`, 16 px, colour `#212529` (Bootstrap default — the
  sheet never sets a body colour), on a white page.
- **Headings:** the sheet's global rule is
  `h1,h2,h3,h4,h5,h6{font-family:"Oswald",sans-serif; color:#0b1c39; font-weight:500}`.
  Component rules override size/colour/weight but **not** the family, so every
  heading on the page is Oswald **except** the blog-card titles and every footer
  column heading, which the sheet explicitly re-points to Muli
  (`.blog-cap h4{font-family:"Muli"}`, `.footer-area .footer-tittle
  h4{font-family:"Muli"}`).
- **Weights in use:** 300 (footer links/copy, plan list), 400 (body, search
  input), 500 (nav links, footer headings, the global default), 600 (h2/h3
  headings, TLD labels, testimonial founder, `.0N` numerals), 700 (hero h1,
  services "get started", support numbers, blog titles), 800 (`pere-text strong`),
  900 (the plan-card price span).
- **Fonts on Google Fonts:** the source `@import`s
  `Muli:300,400,500,600,700,800|Oswald:200,300,400,500,600,700`. Both resolve
  **HTTP 200** today (`Muli` is still served as v34; **`Mulish` is the same face
  under its current name**). The import omits the **900** axis that the pricing
  price actually uses — the recreation adds it. (First probe with a bare
  `Mozilla/5.0` UA returned 400 for every family; a real Chrome UA returns 200 —
  the API is UA-sensitive, don't trust the 400.)

### Palette (home-page tokens only)

| Token                  | Value                            | Used by                                                                             |
| ---------------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| brand pink             | `#eb566c`                        | every pill action, header chip, eyebrows + their rules, `.0N` numerals, 5 px dropdown top border, blog title + footer link + social hover, back-to-top circle, support cards, previous/next arrow (next), preloader ring top |
| button hover fill      | `#f32a48`                        | the shared `.btn::before` layer (`scaleX(0 → 1)`)                                     |
| pricing pink           | `#ff4f5b`                        | plan-card surface + the active tab                                                    |
| support medallion pink | `#ff6b81`                        | the 50 px circle behind each support glyph                                            |
| peach                  | `#fce0d8`                        | 100 px pricing medallion, idle tab background                                          |
| hero band navy         | `#020230`                        | `.slider-bg`; also the tab label colour and the white button's label                  |
| heading navy           | `#28395a`                        | every section `h2`, service card titles                                               |
| link navy              | `#10275c`                        | services "get started" label + its 24 px round medallion; testimonial quote (`#10285d` measured) |
| global heading colour  | `#0b1c39`                        | the sheet's `h1–h6` default (blog titles / dropdown rows inherit this without an override) |
| sticky header          | `#010E21`                        | the scrolled `.sticky-bar`                                                            |
| surfaces               | `#ffffff`, `#f8f5f2` (services top half), `#fff9f9` (blog captions) | bands |
| muted greys            | `#8ba4b1` (footer), `#57667e` (blog date, testimonial role), `#636376` (TLD price), `#777777` (search input), `#616875` (placeholder) | typography |
| hero dot rail          | idle `#162e78` (20 px), active `#03a7d2` (34 px), 3 px wide | hero carousel chrome |
| TLD tints              | `#ff7474`, `#ffdd74`, `#74ff9f`, `#748bff`, `#f074ff` (columns 5–6) | the six TLD labels |
| rules                  | `#032a57` (strip box + column rules), `#fff` (plan price rule), `#e5e5e5` (social rings), `#1c2e4c` (footer bar), 5 px `#eb566c` (dropdown top) | dividers |
| shadows                | `0 6px 29px 0 rgba(36,43,94,.08)` (search bar), `0 0 10px 3px rgba(0,0,0,.05)` (dropdown), `0 10px 15px rgba(25,25,25,.1)` (sub-`lg` header), `0 0 10px 3px rgba(108,98,98,.2)` (back-to-top) | elevation |
| radii                  | 30 px pills + tab outer corners, 50 px bar ends, 10 px strip + support cards, 6/7 px blog pieces, `50%` medallions / social rings / back-to-top, 0 on cards and inputs | shape language |

Colour census by frequency in `style.css` (with the home-page subset flagged):
`#fff` 70, **`#eb566c` 34**, `#f9f9ff` 27 *(component library only)*, `#1f2b7b`
20 *(library + the global `b,sup,sub,u,del` rule; no such element exists on this
page — verified live: 0 matches)*, `#f0e9ff` 12 *(library)*, `#999999` 10, then
`#415094` 7, `#4cd3e3` 7, `#020230` 6, `#eee` 6, `#38a4ff` 6, `#f4e700` 6,
`#f44a40` 6, `#f1f1f1` 6 *(all library)*, `#8ba4b1` 5, `#888888` 5, `#777` 4,
`#828bb2` 4 *(library)*, `#28395a` 3, `#777777` 3, `#fce0d8` 3, `#fbf9ff` 3
*(library)*, `#0b1c39` 2, `#10275c` 2, `#032a57` 2, `#ff4f5b` 2, `#57667e` 2,
plus singles including `#f8f5f2`, `#fff9f9`, `#45455f`, `#636376`, `#010E21`,
`#1c2e4c`, `#03a7d2`, `#162e78`, `#ff6b81`, the five TLD tints, `#f2f2f2`,
`#f7f7f7`, `#dca73a`, `#f32a48`, `#616875`, `#e5e5e5`.

## Section-by-section (measured at 1440×900)

Header — `header > .header-area.header-transparent`, **0 / 100 px**:
`position:absolute; top:0; left:0; right:0; z-index:9`; `.header-bottom
.header-sticky` `padding:22px 50px` (steps `0 90px → 0 80px → 0 60px → 22px 50px →
22px 20px`). Logo image **145×35**. Menu links **14 px/500 uppercase** white,
`padding:39px 19px`, hover/current `#eb566c`; items Home · About · Services ·
Blog ▾ (Blog, Blog Details) · Pages ▾ (Element) · Contact. Dropdown
`ul.submenu`: `width:170px; background:#fff; visibility:hidden; opacity:0;
top:120%; padding:17px 0; border-top:5px solid #eb566c; box-shadow:0 0 10px 3px
rgba(0,0,0,.05); transition:all .3s ease-out` → `visible/1/top:100%` on
`ul>li:hover>ul.submenu`; rows `margin-left:7px` with `a{padding:6px 10px;
font-size:14px; color:#0b1c39; text-transform:capitalize}` → `#eb566c`. Phone chip
`.btn.header-btn` — pill, `padding:14px 29px`, **177×53**, 22×25 inline SVG
(`margin-right:9px`, `top:-2px`), label `+880.762.009`. Scrolled: `.sticky-bar`
`background:#010E21`, links re-padded `27px 13px`. Mobile: SlickNav clone
(`.slicknav_menu` with a `MENU` button + three-bar icon); the desktop menu and
chip are `display:none` at 375 px (verified live).

Hero — `.slider-area.slider-bg`, **-1 / 923 px**: `background:#020230`; three
`.single-slider` slides (`.slider-height` `min-height:1000px` desktop, → 900 → 600
→ 600 px); caption `h1` **65 px/700** Oswald white (`line-height:1.3`,
`margin-bottom:32px`; → 55 → 50 → 29 px measured 29 px at 375 px); `p`
`margin-bottom:54px; padding-right:155px` white 16 px; CTA `a.btn.radius-btn`
**169×54**; illustration `.hero__img img` **559×671** (`right:-63px`, hidden below
`lg`); shapes at top-left / top-right / `left:67px; bottom:95px`;
`.slider-social` `right:-20px; bottom:40%; rotate(-90deg)`, 14 px `#45455f`
(hover `#f27420`). Dot rail `.dot-style .slick-dots`: `text-align:right;
bottom:14%; right:35px`, `li{display:block}`; buttons **3 px** wide, idle **20 px**
`#162e78`, active **34 px** `#03a7d2`, `margin-right:10px; margin-bottom:7px`.

Services — `.services-area.section-padding30.fix`, **922 / 1154 px**:
`padding-top:195px; padding-bottom:140px` (→ 150/90 → 100/40 → 65/10);
`::before` `height:50%; background:#f8f5f2; top:0; z-index:0`. Title
`.section-tittle.text-center.mb-100` (eyebrow 18 px/700 `#eb566c` with a 50 × 2 px
rule at `left:-67px`; `h2` 50 px/600 `#28395a`). Three cards
`.services-wrapper.mb-50` (**background:#fff**, measured **330×530**),
`.single-services` `padding:94px 57px 30px 65px`; icon span **70 px**
(`margin-bottom:50px`, measured 90×88); title `h3 > a` **30 px/600 `#28395a`**
(→ 29 px); `p` 15 px `margin-bottom:30px`; `a.get-btn` **13 px/700 uppercase
`#10275c`** with a **24 × 24 `#10275c` circle** holding a white arrow
(`margin-right:6px; top:2px`); `.services-shape span` **40 px/600 `#eb566c`** at
`bottom:0; right:0`. Hover (`:hover` on the wrapper): icon `#eb566c`, `get-btn`
`#eb566c !important`, medallion `background:#eb566c !important` with a white
glyph.

Domain search — `section.search-domain-area.section-bg.pt-140.pb-140`,
**2076 / 623 px**: `data-background="assets/img/gallery/section_bg02.jpg"`
(JS paints it; measured inline `background-image`), `padding:140px 0`. Title
column `col-xl-4` (`.section-tittle2`: `span` inset `margin-left:72px`; `h2`
white, measured 50 px). Bar `form.search-box` (measured **690×90**):
`box-shadow:0 6px 29px 0 rgba(36,43,94,.08); padding-top:30px; display:flex;
flex-wrap:wrap; justify-content:space-between` — `.input-form` **65 %**
(`border-radius:50px 0 0 50px; overflow:hidden`; `input` **60 px**, measured
449×60, `padding:9px 33px 9px 32px`, 18 px/400 `#777777`, placeholder `#616875`),
`.select-form` **13 %** (`.nice-select` 60 px, white, `padding:11px 3px 11px
43px`, 16 px/600 `#020230`, chevron from `#020230` borders; source options `.com
.bd .edu .gov .us .uk .pk .org .live .net`), `.search-form` **22 %**
(`border-radius:0 50px 50px 0`; `a` **60 px**, measured **152×60**,
`background:#eb566c`, white, Oswald 14 px uppercase, `letter-spacing:.1em`).
Strip `.domain-list` (measured **690×86**): `border:1px solid #032a57;
border-radius:10px; padding:15px 0; margin:0 15px`; six `.single-domain`
**16 %** (`padding-left:25px` → 13 px; `::before` 1 px × 74 px `#032a57` rule at
`right:0; top:-10px`, hidden on `:last-child`) with a TLD span (16 px/700 —
the sheet's `font-size:20xp` is invalid and dropped) and a `p` in `#636376`.
Source values: `.com $3.99/Year`, `.net $2.99/Year`, `.com $3.99/Year`,
`.co $5.99/Year`, `.org $2.99/Year`, `.live $1.99/Year`.

Story band — `section.all-starups-area.section-padding2`, **2699 / 891 px**:
`display:flex; align-items:center`; `padding:200px 0` (→ 100 → 70). Text half
`.starups` `width:50%; padding-left:19%` (→ `10%/35px` → `10%` → `8%` → `0 30px;
margin-bottom:60px`), its `.starups-details` `padding-right:117px` holding a
`.section-tittle3` (eyebrow inset 72 px; `h2` **44 px**, `margin-bottom:50px`),
`.details-caption` (`padding-top:45px; padding-bottom:35px`) and one `.btn`.
Image half `.starups-img` → `visit_bg.jpg`.

Partner logos — `section.work-company`, **3590 / 204 px**: a plain white band
(`.work-company`, `.logo-area`, `.single-logo` have **no rules** in the sheet), a
`col-lg-5` title column and a `col-lg-7` 3 × 2 grid of six `col-lg-4 col-md-4
col-sm-6` marks, each rendering at its natural **196×102**.

Pricing — `.our-pricing-area.section-padding30.fix`, **3794 / 1001 px**:
`padding:195px 0 140px`. Card `.single-pricing` **`#ff4f5b`**, `padding:78px
73px` (→ 57/23), `position:relative`, `width:60%`, measured **342×636**; decor
`.pricing1` `bottom:0; left:0`, `.pricing2` `top:0; right:0`. Caption: medallion
`.procing-logo` **100 × 100 `#fce0d8`** (`line-height:100px; margin-left:42px`)
with a rocket glyph; `span` **35 px/900 white** (measured 196×84,
`margin-bottom:30px; padding-bottom:30px; border-bottom:1px solid #fff`) reading
`$ 05.00`; four list rows **16 px/300 white** (`margin:19px 0`); `a.btn.white-btn`
(white fill, `#020230` label). Copy column: eyebrow + "Our pricing" `h2` + two
paragraphs + `.nav-tabs` (`display:flex; justify-content:left; margin-bottom:31px`)
whose `a.nav-item.nav-link` rows are **Oswald 16 px uppercase**, `padding:15px
43px` (measured **142×54**), idle `#fce0d8`/`#020230`, `.active` `#ff4f5b`/white,
`:first-child` left corners 30 px and `:last-child` right corners 30 px —
**Monthly / Yearly**, each showing the same plan card.

Testimonials — `.testimonial-area.testimonial-padding`, **4794 / 704 px**:
`position:relative`, `padding-bottom:180px` (→ 100 → 120 → 70). `col-lg-7`
carousel (`.testimonial-caption` `padding-left:80px` → 40) with **two** slides:
founder row (`founder-text{margin-left:20px}`; name **30 px/600 `#eb566c`**, role
`#57667e`/500); quote `p` **20 px** (`line-height:1.5; padding-right:100px;
margin-bottom:50px`, measured `#10285d`). `col-lg-5` `.testimonial-banner`
(`right:-55px`, `img{width:100%}`). Decorative
`img.testimonial-shape.d-none.d-lg-block` at `left:0; top:31%`. Chrome:
`button.slick-arrow` 20 px glyphs at the band's edges — **previous `#ffe1e3`**,
**next `#eb566c`** — and **no dots**. Source content repeats "Jahon Ann / CEO,
Colorlib" twice.

Support — `section.support-area.section-bg.pt-150.pb-150`, **5498 / 582 px**:
`data-background="assets/img/gallery/section_bg03.jpg"` (dark navy circuit
photo), `padding:150px 0` (→ `70px 0`). Copy column `col-lg-5`:
`.section-tittle5` (eyebrow inset 72 px; `h2` **`#f2f2f2`**, measured 50 px/600;
`.support-details` white, `padding:30px 10px 30px 0`). Contact column
`col-lg-6`: two `.single-contact.text-center` cards **`#eb566c`**, **165 × 136**,
`border-radius:10px`, `margin:0 15px` — `.contact-icon i` **50 × 50
`#ff6b81`** circle (`margin-bottom:16px; padding-top:24px`, white glyph) over
`.contact-number span` **16 px/700 white**. Source labels `+1 514 648` (phone) and
`Text Us` (comment).

Blog — `section.blogs-area.section-padding30`, **6080 / 979 px**:
`padding:195px 0 140px`; centred title (`mb-80`); three `col-lg-4 col-md-6`
`.single-blogs.mb-100` (`margin-left/right:15px`): `.blog-img img`
**`border-radius:6px`** full width; `.blog-cap` **`#fff9f9`** at `bottom:-63px;
right:0; width:94%; border-radius:0 7px 0 0; padding:29px 20px 20px 31px`
(measured 320×148) with `span` **14 px/600 uppercase `#57667e`** and `h4 > a`
(Muli 700, `line-height:1.4`, **13.6 px measured** — a later `h4{font-size:13px}`
rule wins over the block's 20 px) hovering `#eb566c`.

Footer — `footer > .footer-area`, **7059 / 572 px**:
`background-image:url(../img/gallery/footer_bg.jpg)` (`cover`, `no-repeat`);
`.footer-top.footer-padding` `padding:170px 0 50px` (→ 100 → 80). Columns:
logo (`footer-logo` `margin-bottom:40px`, image 145×35) · **All packages**
(Package-1 … Custome) · **Quick Link** (Contact Us, About Us, News & Articles,
Privacy Policy) · a contact column whose **`h4` is the phone number**
(`+1 514 648 256`) over a one-row `ul` (`youremail@gmail.com`) and a `<p>`
address (`123 East 26th Street, Fifth Floor, New York, NY 10011`). Column `h4`
**white 20 px/500 Muli**, `margin-bottom:29px`; links **`#8ba4b1`/300**, hover
`#eb566c` + `padding-left:5px`; rows `margin-bottom:15px`. `.footer-social a`
**40 × 40** `border-radius:50%`, `1px solid #e5e5e5`, `#8ba4b1`, hover fill
`#eb566c`. `.footer-bottom` `border-top:1px solid #1c2e4c; padding:40px 0 23px`;
copy `#8ba4b1`/300 with a runtime year ("Copyright © [year] All rights reserved |
This template is made with ♥ by Colorlib").

Chrome — `#back-top`: **50 × 50 `#eb566c`** fixed `right:31px; bottom:18px`
(`border-radius:50%; border:2px solid transparent; box-shadow:0 0 10px 3px
rgba(108,98,98,.2)`), white 20 px icon. `#preloader-active`: full-screen
`#f7f7f7` overlay, 100 px ring (only `border-top-color:#eb566c`, white fill, a
2000 ms `zoom` animation) around a ≤55 px logo and a `strong` caption in
`#dca73a`.

## Deltas that must be reproduced deliberately

1. **Four pinks, on purpose.** `#eb566c` (brand actions, eyebrows, numerals,
   contact cards, next arrow, back-to-top), `#ff4f5b` (plan card + active tab),
   `#f32a48` (the sliding button hover fill) and `#ff6b81` (support medallions).
   Do not collapse them.
2. **The hero's dot rail is not pink.** Idle `#162e78`, active `#03a7d2`,
   3 px wide, 20 px → 34 px tall, stacked vertically at `bottom:14%; right:35px`.
3. **The testimonial arrows are asymmetric** (`#ffe1e3` previous, `#eb566c`
   next) and there are no dots.
4. **The `.btn` is a pill with a sliding fill**: `border-radius:30px;
   padding:27px 44px; font-size:14px; font-weight:500; letter-spacing:1px;
   text-transform:uppercase; line-height:0; overflow:hidden; position:relative;
   z-index:1` plus an `::before` layer `background:#f32a48; transform:scaleX(0);
   transform-origin:0 0; transition:transform .5s cubic-bezier(.5,1.6,.4,.7);
   z-index:1` scaling to `1` on hover. The header chip reduces padding to
   `14px 29px`; `.white-btn` swaps only fill/label (white / `#020230`).
5. **The services wash is a half-height layer**, not a band colour:
   `.services-area::before{height:50%; background:#f8f5f2; top:0}` behind white
   cards that straddle the seam.
6. **Ten-plus markup classes have no rule at all** — `search-domain-area`,
   `select-itms`, `work-company`, `logo-area`, `single-logo`,
   `single-testimonial`, `founder-img`, `header-right-btn`, `radius-btn`,
   `color1`, `pricing-button`, `slider-btns`, `tab-content`, `tab-pane`. Style
   them deliberately to the measured result (Tailwind), don't clone the holes:
   the domain band leans on `.section-bg` + the `pt-140/pb-140` utilities, the
   hero CTA is styled only by `.btn`, the partner marks render at their natural
   **196×102**, and `.color1` gets its colour from `.blog-cap span`.
7. **`.single-domain span{font-size:20xp}` is invalid** (typo unit) — the TLD
   labels are really **16 px/700**.
8. **The TLD tints follow the column index**, not the TLD text: 1 `#ff7474`,
   2 `#ffdd74`, 3 `#74ff9f`, 4 `#748bff`, 5–6 `#f074ff`.
9. **The heading face flips twice**: global `h1–h6` = Oswald, but blog card
   titles and every footer column heading are re-pointed to Muli (and the blog
   title's cascaded 13.6 px should be reconciled to a legible 18–20 px — a
   deliberate, documented deviation).
10. **The support heading is `#f2f2f2`, not `#fff`**, while its body copy is
    white; its eyebrow stays `#eb566c` with `margin-left:72px`.
11. **The footer's contact column has no heading** — the phone number occupies
    the `h4` slot.
12. **The reference's preloader blocks the page**; the recreation renders content
    immediately (non-blocking loading state only) and keeps `#back-top` as a real
    labelled button that appears after scroll.
13. **The hero band measures 923 px at 1440×900** though the sheet says
    `min-height:1000px` (900 px slides at ≤1199 px, 600 px at ≤991 px). At 375 px
    the hero is 600 px tall, the illustration is hidden, `h1` is 29 px and the
    page is 10,038 px tall with **no horizontal overflow**
    (`scrollWidth == innerWidth == 375`).
14. **Library-only colours stay out of the palette**: `#f9f9ff`, `#1f2b7b`,
    `#f0e9ff`, `#415094`, `#4cd3e3`, `#38a4ff`, `#f4e700`, `#f44a40`, `#f1f1f1`
    (`.genric-btn` / checkbox / radio / blog-sidebar components) plus the global
    `b,sup,sub,u,del{color:#1f2b7b}` rule whose elements never appear here.

## Placeholders and substitutions

- Hero photo/illustration → own inline SVG isometric art (preferred) or
  `https://picsum.photos/seed/gridhost-hero/1200/1200`; story band →
  `.../gridhost-story/960/960`; testimonial avatar/illustration →
  `.../gridhost-founder/200/200` + `.../gridhost-quote/900/700`; blog →
  `.../gridhost-blog-<n>/800/600`; photo bands (domain search, support, footer) →
  `.../gridhost-domain/1600/900`, `.../gridhost-support/1600/900`,
  `.../gridhost-footer/1600/600` under a dark navy wash.
- Icons: `lucide-react` (server, leaf/refresh, layers, arrow-right, phone,
  message, rocket, calendar, chevron-up) — never Flaticon / Font Awesome /
  Themify glyph fonts; brand marks (footer social) as inline SVG paths because
  `lucide-react` ships no brand icons.
- Fonts: one Google Fonts `<link>` — `Oswald:wght@200..700` +
  `Mulish:wght@300;400;500;600;700;800;900` (Mulish = the source's Muli face
  under its current name; the 900 axis covers the price).
- Copy: the app's own hosting copy of the same kinds (headline + discount
  sub-line + CTA; three service kinds with one-line blurbs; six TLD prices;
  a "we're with you" story; a plan with four features; two named testimonials;
  two phone/text contact actions; three dated posts; three footer columns).
- Attribution: the credit line links `https://www.componentdock.com/`
  ("Component Dock") and keeps a computed current year.

## Name check

`gridhost` — single lowercase word, kebab-safe; no `apps/gridhost`, no
`openspec/specs/template-gridhost`, no `docs/templates/gridhost`, no
TEMPLATES.md name, and a repo-wide `grep -ril gridhost` returns zero hits
(2026-10-11). `https://colorlib.com/wp/template/gridhost/` and
`https://preview.colorlib.com/theme/gridhost/` both return **HTTP 404**, so it is
not a ColorLib source name either.

## Sibling comparison (Web Hosting family)

This entry is the family's **midnight-navy-and-pink** page: `#020230` hero with an
isometric illustration and a cyan/navy vertical dot rail, the family's only
**half-height `#f8f5f2` wash behind three white service cards**, a pill domain
search over a per-column-tinted TLD strip, a `#ff4f5b` plan card with a peach
medallion and pill Monthly/Yearly tabs, two-tone testimonial arrows, a dark
circuit-photo support band with two pink contact cards and a navy photo footer.

Neighbours (all `[x]`/prepped): serverly magenta `#b632fa` on `#020c22`, stratus
`#25ae88`/`#556080`, stratos indigo `#6366f1`, nebuly `#3f52e3`/`#21bf73`,
hostcraft `#6927ff`, ecohive `#9f78ff` on `#2d0a31`, presto `#73469F`/`#FFBF81`,
upnode `#1c66de`, uplink `#6247ea`/`#ec9d5f`, skyport `#3898f8`, skyvault mint
`#1befc5` on `#200e35`/`#4d1d85`, sitewise `#2e004b`/`#00d363`, skyward
`#207dff`, upsurge `#eb2b63` on `#200545`, hostpeak/hostera `#2926ac` →
`#6128be`, soar `#2ebdc4`, netrise `#12e6ca` on `#233142`, harbor `#120851`,
rackline lime `#7cbd1e` on slate. **No Web Hosting sibling spec mentions Muli or
Oswald, and none contains `#eb566c` or `#ff4f5b` (repo-wide grep, 2026-10-11 —
`#eb566c` appears in exactly one other spec, in a different category; `#ff4f5b`
in none).** Do not borrow a sibling's palette, geometry or type pairing.
