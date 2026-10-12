# Template: Gridhost (Web Hosting)

## Purpose

Gridhost is a full single-page **web-hosting marketing site** in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free **"Webhostingservice"** template (source slug
`webhostingservice` — the Web Hosting family's **navy-and-pink hosting
showcase**: a **`#020230` midnight-navy hero** carrying an ~908 px-tall
isometric *server / cloud* illustration beside a **65 px/700 Oswald white
headline** and a pink **pill** action, a **transparent header** that turns into a
solid `#010E21` sticky bar on scroll (wordmark, six links with two dropdowns, and
a **pink `#eb566c` phone pill**), a **services band** whose top half is a warm
`#f8f5f2` wash carrying **three white cards** with line-art icons, `.01/.02/.03`
pink numerals and a navy round-arrow "get started" link (the whole card turning
pink on hover), a **navy photo band** with a **pill domain-search bar** (white
input + TLD `<select>` + pink "search now" pill) over a `1px #032a57`-bordered
**six-column TLD price strip** where each column is tinted its own TLD colour, a
**split "we are with you"** band (copy + illustration) then a **3 × 2
partner-logo grid**, a **pricing block** pairing a `#ff4f5b` pink plan card
(peach `#fce0d8` rocket medallion, 35 px/900 white `$ 05.00`, white rule, white
list, white pill button) with a copy column and a **pill Monthly/Yearly tab
pair**, a **testimonial split** (founder + 30 px pink name + 20 px quote beside
an illustration, pale-pink/pink chevron arrows), a **dark circuit-photo support
band** with a white headline and **two pink 165×136 rounded contact cards**, a
**three-card blog row** whose `#fff9f9` captions overlap their photos from the
bottom-right, and a **navy footer** (logo, three link columns, circular social
buttons, a `1px #1c2e4c` rule and a running-year credit).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths, no brand marks) and never reuses the source name or its
copy verbatim.

- **Source:** https://colorlib.com/wp/template/webhostingservice/ (listed in
  TEMPLATES.md `## Web Hosting (20)` at line 3069 — that section holds 20 items
  across lines 3049–3070; the slug `webhostingservice` appeared exactly once in
  TEMPLATES.md and in no spec on main before this one)
- **Preview:** `https://preview.colorlib.com/theme/webhostingservice/` returns
  **HTTP 200**, `text/html`, **47,215 B**, title
  `Web Hosting HTML-5 Template` (verified 2026-10-11). Its DOM was fetched and
  parsed, and its theme stylesheet
  `.../assets/css/style.css` (HTTP 200, **64,303 B**) was tokenized and
  cross-checked against the **live render** in a browser (computed styles +
  `getBoundingClientRect` at a 1440×900 desktop viewport plus a 375×800 narrow
  pass). Live preview is the primary reference; no fallback was needed. Other
  sheets the preview loads (never copied): `assets/css/bootstrap.min.css`,
  `owl.carousel.min.css`, `slicknav.css`, `flaticon.css`, `animate.min.css`,
  `magnific-popup.css`, `fontawesome-all.min.css`, `themify-icons.css`,
  `slick.css`, `nice-select.css`.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/webhostingservice-free-template.jpg
  (HTTP 200, **47,419 B**, served as **AVIF** despite the `.jpg` name, decoded to
  **1200×946** and inspected visually 2026-10-11 after a PIL conversion to PNG —
  `vision_analyze` rejects the raw AVIF).
- **New name:** `gridhost` (apps/gridhost, `@free-react-templates/gridhost`) —
  a server *grid* plus a *host*: single lowercase word, kebab-safe, thematically
  the source's subject matter without touching its name. The source name
  "Webhostingservice", its wordmark, its "Hosting" ring-logo, its
  `hero_right.png` / `visit_bg.jpg` / `section_bg0*.jpg` / `cisco_brand*.png`
  artwork, its icons and its copy are never reused. `gridhost` collides with no
  `apps/` folder, no `openspec/specs/` folder, no `docs/templates/` folder and no
  TEMPLATES.md name (verified 2026-10-11: a repo-wide `grep -ril gridhost`
  returns zero hits; `https://colorlib.com/wp/template/gridhost/` and
  `https://preview.colorlib.com/theme/gridhost/` both return **HTTP 404**, so it
  is not a ColorLib source name either).
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Evidence audit (2026-10-12):** the source `<title>` recorded in this spec is the plain
  raw-HTTP string. A leading horse-emoji prefix that an earlier browser pass recorded
  is added to *every* page title by this container's browser harness (reproduced on
  `example.com`), not by the source. Nothing else in this evidence block changed.

## Design reference (replication findings)

- **Original:** ColorLib "Webhostingservice" (source slug `webhostingservice`,
  https://colorlib.com/wp/template/webhostingservice/). It is a hand-rolled
  Bootstrap-4-grid page (the theme sheet is a single 64 KB author stylesheet, not
  a framework skin); the recreation uses Tailwind utilities instead and copies
  nothing.
- **Preview URL:** `https://preview.colorlib.com/theme/webhostingservice/` →
  **HTTP 200** (47,215 B). Reference artifacts (research date 2026-10-11):
  `/tmp/whs/page.html`, `/tmp/whs/main-style.css`, `/tmp/whs/shot.raw` (AVIF),
  `/tmp/whs/shot.png` (decoded 1200×946). Scripts referenced (never copied):
  `assets/js/vendor/jquery-1.12.4.min.js`, `popper.min.js`,
  `bootstrap.min.js`, `slick.min.js`, `slicknav.min.js`, `owl.carousel.min.js`,
  `magnific-popup.min.js`, `nice-select.min.js`, `jquery.counterup.min.js`,
  `waypoints.min.js`, `ajax-contact.js`, `plugins.js`, `main.js`.
- **Screenshot (1200×946, AVIF → PNG):** a browser-chrome mock of the top of the
  page. A **midnight-navy `#020230` hero** fills the frame: at the top a
  transparent header with a **ring-and-antenna logo mark beside the white bold
  wordmark "Hosting"** (~28 px) and six white uppercase links (Home · About ·
  Services · Blog · Blog Details · Pages · Element · Contact appear as the
  nav's visible set) plus a **pink pill phone chip** at the right reading
  "+880.762.009" with a support-agent glyph. The hero's left column carries a
  heavy white **Oswald** headline over two lines ("Hosting digital technology
  web solution!") and, beneath it, a smaller white sub-line ("Automated Control
  Panel with Up to 50% Off Hosting Starting from $2.50/Month.") and one **pink
  pill "GET STARTED"** button; the right column holds a **flat-vector isometric
  illustration** of two servers, a cloud and two figures (blues, mint and a coral
  accent) with a thin vertical divider line to its left, a faint dotted texture
  at the bottom-left corner, a **vertical icon rail** at the right edge
  (facebook / twitter / instagram / globe, 14 px, `#45455f`) and a small pink
  **scroll-down tick** near the bottom right. The next band is introduced by its
  top half washed **warm off-white `#f8f5f2`** with a centred pink eyebrow "Oue
  Best Services" over a navy Oswald heading "What we have for you"; **three white
  cards** sit under it, each with a thin-line glyph (server / leaf / stacked
  servers), a navy heading ("Shared Hosting" / "Reseller Hosting" / "Cloud
  Hosting"), a grey blurb line, a navy round-arrow "GET STARTED" link and a large
  pink `.01` / `.02` / `.03` numeral at the card's bottom-right over a dotted
  accent.
- **Section order (measured from the live DOM at 1440 px, top → bottom, with
  measured top offsets / heights):**
  1. `header > .header-area.header-transparent` — **0 / 100 px**:
     `position:absolute; top:0; left:0; right:0; z-index:9` (the band sits *on
     top of* the hero, so the navy shows through), `.header-bottom.header-sticky`
     with `padding:22px 50px` (padding steps `0 90px → 0 80px → 0 60px → 22px
     50px → 22px 20px` across breakpoints) inside a
     `.container-fluid > .row.align-items-center`. Columns: `col-xl-2 col-lg-1
     col-md-1` logo (image **145×35**), `col-xl-8 col-lg-8 col-md-8` menu,
     `col-xl-2 col-lg-3 col-md-3` CTA. The menu is
     `.main-menu.f-right.d-none.d-lg-block > nav > ul#navigation` with
     `li{display:inline-block}` whose `a` are **14 px/500, uppercase**, white,
     `padding:39px 19px` (dropping to `39px 15px`), hover/current **`#eb566c`**;
     items are **Home · About · Services · Blog ▾ (Blog / Blog Details) · Pages ▾
     (Element) · Contact**. The dropdown is `ul.submenu`:
     `position:absolute; left:0; top:120%; width:170px; background:#fff;
     visibility:hidden; opacity:0; padding:17px 0; border-top:5px solid #eb566c;
     box-shadow:0 0 10px 3px rgba(0,0,0,.05); transition:all .3s ease-out`,
     opening to `visibility:visible; opacity:1; top:100%` on
     `ul>li:hover>ul.submenu`, its rows `margin-left:7px`, `a{padding:6px 10px;
     font-size:14px; color:#0b1c39; text-transform:capitalize}` → `#eb566c` on
     hover. The CTA is `.header-right-btn.f-right.d-none.d-lg-block > a.btn
     .header-btn` — the shared pink pill (radius 30 px) overridden to
     `padding:14px 29px` with a **22×25 inline SVG** support-agent glyph
     (`margin-right:9px; top:-2px`) and the label **`+880.762.009`**; measured
     **177×53**. Scrolled, JS adds `.sticky-bar` to `.header-bottom.header-sticky`
     (`background:#010E21`) and the links re-pad to `27px 13px`.
  2. `.slider-area.slider-bg` — **-1 / 923 px**: `background:#020230`, holding
     `.slider-active.dot-style` with **three identical** `.single-slider
     d-flex.align-items-center.slider-height` slides (`min-height:1000px`
     desktop, stepping 900 → 600 → 600 px down the breakpoints; **923 px**
     measured at 1440×900). Each slide is a container row with a
     `col-lg-6.col-md-9` caption and a `col-lg-6` image: `.hero__caption` →
     `h1` (**65 px/700** white, Oswald, `line-height:1.3`,
     `margin-bottom:32px`, stepping 55 → 50 → 29 px) + `p`
     (`margin-bottom:54px; padding-right:155px`, white 16 px) +
     `.slider-btns > a.btn.radius-btn` (**pink pill**, measured **169×54**);
     `.hero__img img` at `right:-63px` (measured **559×671**). Decorative
     `.slider-shape` images sit at top-left, top-right and `left:67px;
     bottom:95px`; `.slider-social` is `position:absolute; right:-20px;
     bottom:40%; transform:rotate(-90deg)` with 14 px icons in `#45455f`
     (hover `#f27420`). Slider chrome is a **vertical dot rail**
     (`.dot-style .slick-dots` `text-align:right; bottom:14%; right:35px`,
     `li{display:block}`): **3 px-wide bars**, idle **20 px** tall `#162e78`,
     active **34 px** tall **`#03a7d2`** (measured live: `rgb(3,167,210)`),
     10 px apart, 7 px bottom margin; each is a real `button` with
     `role="tab"` + `aria-label="1 of 3"` in the reference's own DOM.
  3. `.services-area.section-padding30.fix` — **922 / 1154 px**:
     `padding-top:195px; padding-bottom:140px` (195/140 → 150/90 → 100/40 →
     65/10 px down the breakpoints) with a **`::before` layer**
     (`width:100%; height:50%; background:#f8f5f2; top:0; left:0; right:0;
     z-index:0`) washing only the band's top half — the three cards straddle the
     seam. Content: a centred `.section-tittle.text-center.mb-100` (`.section-tittle`
     `margin-bottom:50px`; `span` = **18 px/700 `#eb566c`** with an **`::before`
     50 px × 2 px `#eb566c` rule** at `left:-67px`, vertically centred; `h2` =
     **50 px/600 `#28395a`** Oswald), then a row of **three** `col-lg-4 col-md-6
     col-sm-6` → `.services-wrapper.mb-50` (**`background:#fff`**, measured
     330×530) → `.single-services` (`padding:94px 57px 30px 65px`, → 53/25/11/26
     → 42/20/9/20) with `.services-icon span` (**70 px** glyph, `margin-bottom:50px`),
     `.services-cap h3 > a` (**30 px/600 `#28395a`** Oswald, stepping to 29 px),
     a `p` (`margin-bottom:30px`, 15 px) and
     `a.get-btn` (**13 px/700 uppercase `#10275c`**) whose leading `i` is a
     **24 × 24 navy `#10275c` circle** carrying a white arrow glyph
     (`margin-right:6px; top:2px`). Each card's `.services-shape` holds a
     **40 px/600 pink `.01`/`.02`/`.03`** numeral pinned `bottom:0; right:0`
     over a dotted accent image. **Card hover floods the whole card**:
     `.services-wrapper:hover` turns the icon `#eb566c`, the `get-btn` label
     `#eb566c !important` and its circle `background:#eb566c !important` with a
     white glyph. Source topics: Shared / Reseller / Cloud Hosting with a
     "Hunky dory barney…" blurb.
  4. `section.search-domain-area.section-bg.pt-140.pb-140` — **2076 / 623 px**:
     `data-background="assets/img/gallery/section_bg02.jpg"` (a dark navy photo
     with a dotted wave; JS paints it as `background-image` — measured live
     `url(.../section_bg02.jpg)` with `background-size:cover`), padding
     **140 px** top and bottom. A `row.align-items-end.mb-80` splits a
     `col-xl-4` title (`.section-tittle.section-tittle2`: `span` at
     `margin-left:72px`, **`h2` white** → measured 50 px Oswald `#fff`) and a
     `col-xl-8` `form.search-box` (`box-shadow:0 6px 29px 0
     rgba(36,43,94,.08); padding-top:30px; display:flex; flex-wrap:wrap;
     justify-content:space-between`, measured 690×90) whose three parts are
     `.input-form` (**65 %**, `border-radius:50px 0 0 50px`, `overflow:hidden`,
     its `input` **60 px** tall, `padding:9px 33px 9px 32px`, 18 px/400
     `#777777`, placeholder `#616875`, no border), `.select-form` (**13 %**, a
     `nice-select` replacement: **60 px** tall, white, `padding:11px 3px 11px
     43px`, **16 px/600 `#020230`**, chevron drawn from `#020230` borders) and
     `.search-form` (**22 %**, `border-radius:0 50px 50px 0`, its `a` **60 px**
     tall, `background:#eb566c`, white, uppercase, **Oswald 14 px**,
     `letter-spacing:.1em`, measured 152×60). Under it a `.domain-list`
     (`display:flex; flex-wrap:wrap; justify-content:space-between;
     border:1px solid #032a57; border-radius:10px; padding:15px 0; margin:0
     15px`, measured 690×86) holds **six** `.single-domain` columns (**16 %**
     wide, `padding-left:25px` → 13 px, separated by a **1 px `#032a57` vertical
     rule**, 74 px tall, `right:0; top:-10px`, hidden on the last child) each
     pairing a **TLD span** (16 px/700, tinted per column: `#ff7474`,
     `#ffdd74`, `#74ff9f`, `#748bff`, then `#f074ff` for every column from the
     fifth) with a `p` price line in **`#636376`**. Source values: `.com
     $3.99/Year`, `.net $2.99/Year`, `.com $3.99/Year`, `.co $5.99/Year`, `.org
     $2.99/Year`, `.live $1.99/Year`; the select lists `.com .bd .edu .gov .us
     .uk .pk .org .live .net`.
  5. `section.all-starups-area.section-padding2` — **2699 / 891 px**:
     `display:flex; align-items:center` (`padding-top/bottom:200px`, → 100 → 70
     px) split into `.starups` (**50 %** wide, `padding-left:19%`, dropping to
     `10%/35px`, `10%`, `8%`, then `0 30px; margin-bottom:60px`) and
     `.starups-img` (the remaining half, its `img` `visit_bg.jpg`). `.starups
     .starups-details` (`padding-right:117px`) holds a
     `.section-tittle.section-tittle3` (`span` `margin-left:72px`; `h2`
     **44 px** → measured 44/45 px, `margin-bottom:50px`), a `.details-caption`
     (`padding-top:45px; padding-bottom:35px`) with **two** paragraphs, and one
     `.btn` (**pink pill**). Source copy: "We are with you every step of the
     way" over two "Cnsectetur adipisicing…" paragraphs.
  6. `section.work-company` — **3590 / 204 px**: a plain white band (the classes
     `.work-company`, `.logo-area` and `.single-logo` have **no rules at all** in
     the theme sheet — see deltas) with `row.align-items-center`: a `col-lg-5`
     `.section-tittle.section-tittle3` (same pink eyebrow + navy heading) and a
     `col-lg-7 .logo-area` holding a **3 × 2 grid** of `col-lg-4 col-md-4
     col-sm-6` → `.single-logo` images (six partner marks, each rendering at its
     **natural 196×102** because no rule constrains it). Source copy: "Get your
     domain" + "We are with you every step of the way".
  7. `.our-pricing-area.section-padding30.fix` — **3794 / 1001 px**:
     `padding:195px 0 140px`, a `row.align-items-center` with a
     `col-lg-6.col-md-6` tab-content and a `col-lg-6.col-md-6` copy column.
     The card is `.single-pricing` (**`background:#ff4f5b`**,
     `padding:78px 73px` → 57/23 px, `position:relative`, `width:60%`, measured
     **342×636**) with a `div.pricing-shape` pair anchored bottom-left / top-right
     and a centred `.pricing-caption`: a **100 × 100 `#fce0d8` circle**
     (`line-height:100px`, `margin-left:42px`) carrying a rocket icon, a
     `span` **35 px/900 white** (`margin-bottom:30px; padding-bottom:30px;
     border-bottom:1px solid #fff`) reading `$ 05.00`, a `.pricing-listing ul`
     of four items (**16 px/300 white**, `margin:19px 0`) — "Increase traffic
     50%", "Social Media Marketing", "10 Free Optimization", "24/7 support" — and
     `a.btn.white-btn` (**white fill, `#020230` label**, pink pill geometry).
     The copy column holds the section title (pink "Oue Best Services" eyebrow +
     navy "Our pricing" heading + a two-paragraph blurb) and the tab pair
     `.nav-tabs` (`display:flex; justify-content:left; margin-bottom:31px`):
     `a.nav-item.nav-link` rows (**Oswald 16 px, uppercase, `padding:15px 43px`,
     measured 142×54**) idle `background:#fce0d8` / `color:#020230`, the
     `.active` one `background:#ff4f5b` / white, with the outer corners rounded
     `30px` (`:first-child` top-left + bottom-left, `:last-child` top-right +
     bottom-right) — labels **Monthly / Yearly**, each showing the same plan card.
  8. `.testimonial-area.testimonial-padding` — **4794 / 704 px**:
     `position:relative`, `padding-bottom:180px` → 100 → 120 → 70 px. A
     `row.align-items-center` splits a `col-lg-7.col-md-7`
     `.h1-testimonial-active` and a `col-lg-5.col-md-5` `.testimonial-banner`
     (`position:relative; right:-55px`, `img{width:100%}`). Each of the **two**
     `.single-testimonial` slides is a `.testimonial-caption`
     (`padding-left:80px` → 40 px) holding a
     `.testimonial-founder.d-flex.align-items-center.mb-30` (avatar +
     `.founder-text{margin-left:20px}` whose `span` is **30 px/600 `#eb566c`** and
     whose `p` is `#57667e`, 500) and a `.testimonial-top-cap p`
     (**20 px**, `line-height:1.5`, `padding-right:100px`, `margin-bottom:50px`;
     measured `#10285d`), plus a decorative
     `img.testimonial-shape.d-none.d-lg-block` at `left:0; top:31%`. Chrome: two
     `button.slick-arrow`s (**20 px glyphs**, vertically centred, `left:0` /
     `right:0`) — the **previous arrow measured `#ffe1e3`** (a pale pink) and the
     **next `#eb566c`**; there are **no dots** on this carousel. Source content:
     "Jahon Ann / CEO, Colorlib" over a lorem quote, repeated on both slides.
  9. `section.support-area.section-bg.pt-150.pb-150` — **5498 / 582 px**:
     `data-background="assets/img/gallery/section_bg03.jpg"` (a dark navy
     circuit-board photo, painted inline by JS, `background-size:cover`),
     `padding:150px 0` (→ `70px 0` below `lg`). A
     `row.align-items-center.justify-content-between` pairs a `col-lg-5`
     `.support-caption` (`.section-tittle.section-tittle5`: `span` at
     `margin-left:72px`; `h2` **`#f2f2f2`**, measured **50 px/600 Oswald**;
     `p.support-details` **white**, `padding:30px 10px 30px 0`) with a
     `col-lg-6` `.support-number` holding **two** `.single-contact.text-center`
     cards (**`background:#eb566c`**, **165 × 136**, `border-radius:10px`,
     `margin:0 15px`) — each a `.contact-icon i` (**50 × 50 circle**,
     `background:#ff6b81`, white glyph, `margin-bottom:16px; padding-top:24px`)
     over a `.contact-number span` (**16 px/700 white**). Source labels:
     `+1 514 648` (phone glyph) and "Text Us" (comment glyph).
  10. `section.blogs-area.section-padding30` — **6080 / 979 px**:
     `padding:195px 0 140px`, a centred `.section-tittle.text-center.mb-80`
     (pink "Our Blog" eyebrow + navy "Our latest news") over **three**
     `col-lg-4.col-md-6` → `.single-blogs.mb-100`
     (`margin-left:15px; margin-right:15px`) cards: a `.blog-img img`
     (**`border-radius:6px`**, full width) with a `.blog-cap` overlapped from the
     bottom (`padding:29px 20px 20px 31px; background:#fff9f9;
     position:absolute; bottom:-63px; right:0; width:94%; border-radius:0 7px 0 0`)
     containing a `span.color1` date (**14 px/600 uppercase `#57667e`**) and an
     `h4 > a` title (Muli, bold, `line-height:1.4`, measured **13.6 px** — see
     deltas) whose hover is **`#eb566c`**. Source content: "23 Dec, 2020" +
     "Addiction When Gambling Becomes" three times.
  11. `footer > .footer-area` — **7059 / 572 px**:
     `background-image:url(../img/gallery/footer_bg.jpg)` (`background-size:cover;
     background-repeat:no-repeat`; navy with faint circular textures), containing
     `.footer-top.footer-padding` (`padding-top:170px; padding-bottom:50px` → 100
     → 80) and `.footer-bottom`. The top is a `row.justify-content-between` of
     four columns: `col-xl-3` `.footer-logo` (**145×35** mark, `margin-bottom:40px`),
     `col-xl-2` "All packages" (`Package-1 … Custome`), `col-xl-2` "Quick Link"
     (`Contact Us`, `About Us`, `News & Articles`, `Privacy Policy`) and
     `col-xl-3` whose **`h4` is the phone number itself** (`+1 514 648 256`, white
     20 px — the source puts the contact value where the other columns put their
     heading) over a one-row `ul` (`youremail@gmail.com`) and a `<p>` street
     address (`123 East 26th Street, Fifth Floor, New York, NY 10011`). Column
     `h4`s are **white 20 px/500 in Muli** (`margin-bottom:29px`) — the theme
     re-points the footer headings off the global Oswald face; links are
     **`#8ba4b1`, weight 300**, hover **`#eb566c` with `padding-left:5px`**;
     list rows are `margin-bottom:15px`. `.footer-social` circles are **40 × 40,
     `border-radius:50%`, `1px solid #e5e5e5`**, `#8ba4b1` glyphs, filling
     **`#eb566c`** on hover. `.footer-bottom` (`border-top:1px solid #1c2e4c;
     padding:40px 0 23px`) holds a `.footer-copy-right p` in **`#8ba4b1`,
     weight 300**, whose year is written at runtime ("Copyright © [year] All
     rights reserved | This template is made with ♥ by Colorlib").
  12. `#back-top` — a **50 × 50 `#eb566c` circle** fixed `right:31px;
     bottom:18px` (`border-radius:50%; border:2px solid transparent;
     box-shadow:0 0 10px 3px rgba(108,98,98,.2)`) with a white 20 px icon.
  13. `#preloader-active` — a **full-screen `#f7f7f7` overlay** with a 100 px
     ring (`border-width:1px`, only `border-top-color:#eb566c`, `border-radius:50%`,
     white fill, a 2000 ms `zoom` animation) around a ≤55 px logo image and a
     `strong` caption in **`#dca73a`**. It fades out on load.
  14. Mobile menu — below `lg` the theme hides `.main-menu` and
     `.header-right-btn` (`display:none` measured at 375 px) and the reference
     ships a **SlickNav** clone: a `.slicknav_menu` with a `.slicknav_btn`
     (`MENU` label + three-bar icon) at the header's right; `slicknav.css` has no
     rules in the theme sheet (the plugin ships its own file, never copied).
- **Live-render deltas found (must be reproduced deliberately, not by
  accident):**
  - **Ten markup classes have no rule at all in `style.css`** — verified by
    diffing every class in the served HTML against the sheet:
    `search-domain-area`, `select-itms`, `work-company`, `logo-area`,
    `single-logo`, `single-testimonial`, `founder-img`, `header-right-btn`,
    `radius-btn`, `color1`, `pricing-button`, `slider-btns`, `tab-content`,
    `tab-pane`. They are structural hooks: the domain band relies entirely on
    `.section-bg` + the Bootstrap-style `pt-140/pb-140` utilities, the hero CTA
    is styled only by `.btn` (so `radius-btn` inherits the 30 px pill), the
    phone chip only by `.btn.header-btn`, the partner logos render at their
    natural size (**196×102** measured) with no max-width, and the blog date's
    `color1` gets its colour from `.blog-cap span` (`#57667e`), not from a
    `.color1` rule. The recreation should style these deliberately (Tailwind
    utilities) *to the same visual result* rather than reproducing the missing
    hooks.
  - **`.single-domain span` requests `font-size:20xp`** — an invalid unit the
    browser drops, so the TLD labels render at the inherited **16 px/700**
    (measured). Reproduce 16 px/700, not 20 px.
  - **The hero slider's dot rail is a different palette from the brand pink**:
    idle bars are `#162e78` and the active bar is **`#03a7d2`** (a cyan; measured
    live), 3 px wide, 20 px → 34 px tall, stacked vertically at
    `bottom:14%; right:35px` inside `#020230`. Do not "fix" it to `#eb566c`.
  - **The hero band is 923 px tall at 1440×900**, not the stylesheet's
    `min-height:1000px` (the measured slide box is 900–923 px depending on the
    viewport-height interaction) — treat it as `min-height:1000px` with the
    measured ≈920 px at this size, stepping 900 → 600 px at ≤1199/≤991 px.
  - **The testimonial arrows are asymmetrically coloured**: previous `#ffe1e3`
    (pale pink), next `#eb566c`, both 20 px glyphs at the band's edges, and the
    carousel has **no dots**.
  - **The pricing card's pink (`#ff4f5b`) is *lighter* than the brand pink**
    (`#eb566c`): the plan card, the active tab and the pricing block use
    `#ff4f5b`, while every other pink (buttons, eyebrows, numerals, contact
    cards, back-to-top, footer hover) is `#eb566c`. The button hover fill is a
    third pink, **`#f32a48`**, and the support cards' icon medallions are a
    fourth, **`#ff6b81`. Four distinct pinks — keep them apart.
  - **`.btn` is a pill with a sliding fill, not a colour swap**:
    `border-radius:30px; padding:27px 44px; font-size:14px; font-weight:500;
    letter-spacing:1px; text-transform:uppercase; line-height:0` with an
    `::before` layer (`background:#f32a48`, `transform:scaleX(0)`,
    `transition:transform .5s cubic-bezier(.5,1.6,.4,.7)`, `transform-origin:0 0`,
    `z-index:1`) that scales to `1` on hover while the label sits above it
    (`z-index:1`, `overflow:hidden`). The header chip reduces the padding to
    `14px 29px` (measured 177×53) and the hero CTA keeps the full padding
    (measured 169×54). The pricing card's `.white-btn` overrides fill/label only
    (white / `#020230`), keeping the pill shape and the pink hover fill.
  - **The services band's warm wash is a half-height layer, not a band
    colour**: `.services-area::before{height:50%; background:#f8f5f2; top:0}` sits
    *behind* the white cards, so the top half of the section is `#f8f5f2` and the
    bottom half is the page's white. The cards must sit exactly on that seam.
  - **The heading face flips twice**: the theme's global rule is
    `h1–h6{font-family:"Oswald"; color:#0b1c39; font-weight:500}`, but the
    **blog card titles and all footer column headings are re-pointed to Muli**
    (`.blog-cap h4{font-family:"Muli"}`, `.footer-area .footer-tittle
    h4{font-family:"Muli"}`), and the blog title's measured size is **13.6 px**
    because a later `h4{font-size:13px}` rule wins over the block's own
    `font-size:20px` at this viewport. The 20 px intent and the 13 px reality
    should be reconciled deliberately (use a legible 18–20 px title and say so)
    rather than copying the cascade accident.
  - **The support band's heading colour is `#f2f2f2`, not pure white**, while its
    body copy is `#fff`; the eyebrow above it stays `#eb566c` with a leading rule
    (`margin-left:72px`).
  - **The footer's third column has no heading** — the phone number occupies the
    `h4` slot, then the e-mail and the street address follow as list/link
    content. Keep that shape (a contact column whose "heading" is the phone).
  - **The domain TLD strip tints by column index, not by TLD**: children 1–4 are
    `#ff7474` / `#ffdd74` / `#74ff9f` / `#748bff`, and **children 5+ all share
    `#f074ff`** — so the source's second `.com` is green and its `.co` is blue.
    Reproduce the per-column mapping (with the app's own TLD list).
  - **The `#back-top` circle drops in only after scroll** (`#010E21` sticky bar,
    `#back-top` visible) and the reference's preloader blocks the page for a
    moment: the recreation must render content immediately (no blocking
    overlay) and keep the back-to-top control as a real, labelled button.
  - **`b,sup,sub,u,del{color:#1f2b7b}`** is a global element rule in the theme
    (a second navy) and **no such element exists on this page** (verified live:
    `main b, main u, main sup, main sub, main del` → 0); the other `#1f2b7b` /
    `#f9f9ff` / `#415094` / `#4cd3e3` / `#38a4ff` / `#f4e700` / `#f44a40` /
    `#f1f1f1` values in the sheet all belong to the source's `.genric-btn`,
    checkbox/radio and blog-sidebar component library — **not on this page**, so
    they stay out of the palette.
- **Interactive behaviour to reproduce (from the reference's markup/plugins):**
  the three-slide hero carousel (Slick, vertical 3 px dot rail with a cyan
  active bar, three identical slides, autoplay off under reduced motion), the
  transparent→`#010E21` sticky header, the two header dropdowns (`Blog` →
  Blog / Blog Details, `Pages` → Element) with a 5 px pink top border and a
  `.3s` fade, the SlickNav mobile menu (`MENU` button + bar icon) below `lg`, the
  services card hover flood (icon, label and round-arrow medallion all going
  pink), the pill domain search (input + TLD select + pink submit, with a
  validated "search now" action), the pricing Monthly/Yearly tab pair driving
  the plan card content, the testimonial carousel with its two coloured arrows,
  the footer's running-year copyright and the `#back-top` control.
- **Mesh of measured section geometry at a 1440×900 viewport (top offset /
  height):** `.slider-area` -1/923 · `.services-area` 922/1154 ·
  `.search-domain-area` 2076/623 · `.all-starups-area` 2699/891 ·
  `.work-company` 3590/204 · `.our-pricing-area` 3794/1001 ·
  `.testimonial-area` 4794/704 · `.support-area` 5498/582 · `.blogs-area`
  6080/979 · `.footer-area` 7059/572 (page ≈ **7,631 px**; the same page is
  **10,038 px** tall at 375 px and shows no horizontal overflow — measured
  `document.scrollWidth == innerWidth == 375`). Measured boxes: header logo
  145×35 · phone chip 177×53 · hero caption `h1` 353×338 at 65 px (three lines) ·
  hero illustration 559×671 · hero CTA 169×54 · service card 330×530 ·
  service icon 90×88 at 70 px · search bar 690×90 (input 449×60, submit 152×60) ·
  TLD strip 690×86 · partner logo 196×102 · pricing card 342×636 ·
  pricing price `span` 196×84 at 35 px/900 · pricing tabs 142×54 ·
  support card 165×136 · support icon medallion 50×50 · blog caption 320×148 ·
  footer social circle 40×40 · back-to-top 50×50. The container is the
  theme's 1140/1170 px box inside `container-fluid` for the header.
- **Brand colour census (from `assets/css/style.css`, by frequency):** `#fff`
  (70), **`#eb566c` (34)**, `#f9f9ff` (27 — component library only), `#1f2b7b`
  (20, library + a global `b/sup/sub/u/del` rule), `#f0e9ff` (12, library),
  `#999999` (10), `#415094` (7, library), `#4cd3e3` (7, library), `#020230` (6),
  `#eee` (6), `#38a4ff` (6, library), `#f4e700` (6, library), `#f44a40` (6,
  library), `#f1f1f1` (6, library), `#8ba4b1` (5), `#888888` (5), `#777` (4),
  `#828bb2` (4, library), `#28395a` (3), `#777777` (3), `#fce0d8` (3),
  `#fbf9ff` (3, library), `#0b1c39` (2), `#10275c` (2), `#032a57` (2),
  `#ff4f5b` (2), `#57667e` (2), `#8a8a8a` (2, library), `#6382e6` (2, library),
  plus one each of `#f8f5f2`, `#fff9f9`, `#45455f`, `#636376`, `#010E21`,
  `#1c2e4c`, `#03a7d2`, `#162e78`, `#ff6b81`, `#ff7474`, `#ffdd74`, `#74ff9f`,
  `#748bff`, `#f074ff`, `#f2f2f2`, `#f7f7f7`, `#dca73a`, `#f32a48`,
  `#616875`, `#e5e5e5`. Overlays/veils: `rgba(25,25,25,.1)` (mobile header
  shadow), `rgba(0,0,0,.05)` (dropdown shadow), `rgba(36,43,94,.08)`
  (search-bar shadow), `rgba(108,98,98,.2)` (back-to-top shadow),
  `rgba(35,181,185,.15)` (preloader ring shadow), `rgba(221,221,221,.3)` and
  `rgba(130,139,178,.1)` (library). The **home page itself** uses only
  `#eb566c` (brand), `#ff4f5b` (pricing pink), `#f32a48` (button hover fill),
  `#ff6b81` (support medallion), `#fce0d8` (peach), `#020230` / `#28395a` /
  `#10275c` / `#0b1c39` (navies), `#f8f5f2` / `#fff9f9` / `#ffffff` (surfaces),
  `#8ba4b1` / `#57667e` / `#636376` / `#777777` / `#616875` (muted greys),
  `#1c2e4c` (footer rule), `#010E21` (sticky header), `#e5e5e5` (social ring),
  `#03a7d2` + `#162e78` (hero dots), the five TLD tints and `#f2f2f2`
  (support heading).
- **Sibling comparison (why this slug is its own design):** this is the Web
  Hosting family's **midnight-navy-and-pink hosting showcase** — a `#020230`
  hero with an isometric illustration and a vertical cyan/navy dot rail, the
  family's only **half-height warm `#f8f5f2` wash behind three white service
  cards**, a pill domain-search bar over a per-column-tinted TLD price strip, a
  `#ff4f5b` **pricing card with a peach medallion and pill Monthly/Yearly tabs**,
  a dark circuit-photo support band with two pink contact cards, photo-overlapped
  blog captions and a navy photo footer. The family's other prepped recreations
  use entirely different palettes and structures — serverly (Bhost) magenta
  `#b632fa`/`#487fee` on `#020c22`, stratus (Cloud83) `#25ae88`/`#556080`,
  stratos (Cloudnest) indigo `#6366f1`, nebuly (Cloudtemplate)
  `#3f52e3`/`#21bf73`, hostcraft (Cohost) `#6927ff`, ecohive (Ecohosting)
  `#9f78ff` on `#2d0a31`, presto (Fastes) `#73469F`/`#FFBF81`, upnode (Hami)
  `#1c66de`, uplink (Hosthub) `#6247ea`/`#ec9d5f`, skyport (Hosting) `#3898f8`,
  skyvault (Hostspace) mint `#1befc5` on `#200e35`/`#4d1d85`, sitewise (Hostza)
  `#2e004b`/`#00d363`, skyward (Ignite) `#207dff`, upsurge (Ithost) `#eb2b63` on
  `#200545`, hostpeak / hostera (Lorahost) `#2926ac` → `#6128be`, soar (Raptor)
  `#2ebdc4`, netrise (Webhost) `#12e6ca` on `#233142`, harbor (Deerhost)
  `#120851`, rackline (Server) lime `#7cbd1e` on slate. **No prepped spec in the
  Web Hosting family contains `#eb566c` or `#ff4f5b` (repo-wide grep,
  2026-10-11: `#eb566c` occurs in exactly one other spec, in a different
  category; `#ff4f5b` in none), and no Web Hosting sibling spec mentions Muli or
  Oswald at all** — the Muli-body/Oswald-heading pairing plus the four-pink
  system (brand pink, pricing pink, hover fill, medallion pink) is unique to this
  entry. Do not borrow a sibling's palette or geometry.

## Design tokens

| Token                      | Value                                                                                                                                  | Where                                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| brand pink                 | `#eb566c`                                                                                                                              | every action (`GET STARTED`, `SEARCH NOW`, `GET THE PLAN` label, header phone chip), section eyebrows + their 50 px rules, blog title hover, footer link hover, footer social hover, half of the testimonial arrows, `.01/.02/.03` numerals, back-to-top circle |
| pricing pink               | `#ff4f5b`                                                                                                                              | the plan card surface and the active Monthly/Yearly tab                                                       |
| button hover fill          | `#f32a48`                                                                                                                              | the `.btn::before` layer that slides in (`scaleX(0 → 1)`) under every action                                   |
| support medallion pink     | `#ff6b81`                                                                                                                              | the 50 px circle behind the two support-card glyphs                                                           |
| peach                      | `#fce0d8`                                                                                                                              | the 100 px pricing medallion and the idle tab background                                                      |
| navy (band)                | `#020230`                                                                                                                              | the hero band, the pricing tab label colour, the white button's label colour                                   |
| navy (heading)             | `#28395a`                                                                                                                              | every section `h2` and the service card titles (Oswald 600)                                                    |
| navy (link/medallion)      | `#10275c`                                                                                                                              | the services "get started" label + its 24 px round arrow medallion, the testimonial quote                                |
| sticky header              | `#010E21`                                                                                                                              | the scrolled header bar                                                                                        |
| surfaces                   | `#ffffff` (page, cards, dropdown panel, search input) · `#f8f5f2` (the services band's top half) · `#fff9f9` (blog captions)            | bands                                                                                                          |
| photo bands                | `section_bg02.jpg` (domain search) · `section_bg03.jpg` (support) · `footer_bg.jpg` (footer) — **never copied**; recreate with picsum photos under a dark navy wash | backdrops |
| hero dot rail              | idle `#162e78` (20 px bars) · active `#03a7d2` (34 px bar) · 3 px wide, 10 px apart, at `bottom:14%; right:35px`                        | hero carousel chrome                                                                                           |
| TLD tints                  | `#ff7474` · `#ffdd74` · `#74ff9f` · `#748bff` · `#f074ff` (columns 5 and 6)                                                             | the six TLD labels in the price strip                                                                          |
| muted greys                | `#8ba4b1` (footer copy/links) · `#57667e` (blog dates, testimonial role) · `#636376` (TLD prices) · `#777777` (search input) · `#616875` (input placeholder) | typography                                                                                    |
| lines                      | `1px solid #032a57` (TLD strip box + its 74 px vertical rules) · `1px solid #fff` (the price/rule inside the plan card) · `1px solid #e5e5e5` (social rings) · `1px solid #1c2e4c` (footer rule) · `5px solid #eb566c` (dropdown top border) | dividers |
| text on dark               | `#ffffff` (hero copy, search/card copy, support heading at `#f2f2f2`, plan card copy) · `#f2f2f2` (support `h2` only)                   | dark bands                                                                                                     |
| shadows                    | `0 6px 29px 0 rgba(36,43,94,.08)` (search bar) · `0 0 10px 3px rgba(0,0,0,.05)` (dropdown) · `0 10px 15px rgba(25,25,25,.1)` (sub-`lg` header) · `0 0 10px 3px rgba(108,98,98,.2)` (back-to-top) | elevation                                        |
| font family                | body **Muli** (`Mulish` on Google Fonts is the same face under its current name), headings **Oswald** — `"Oswald", sans-serif` globally on `h1–h6`, re-pointed to Muli on the **blog card titles and every footer column heading** | whole page                                  |
| font weights               | `300` (footer links/copy, plan-card list) · `400` (body, search input, tab idle) · `500` (nav links, footer `h4`, the global `h1–h6` default) · `600` (all `h2`/`h3` headings, TLD labels, testimonial name, `.01–.03` numerals) · `700` (hero `h1`, service "get started", support numbers, blog title) · `800`/`900` (preloader caption; the plan-card price is **900**) | typography                |
| base type                  | `body` 16 px/400 Muli; nav links **14 px/500 uppercase**; hero `h1` **65 px/700** Oswald white (`line-height:1.3`, `mb:32px` → 55/50/29 px down the breakpoints); hero `p` 16 px white (`mb:54px`, `pr:155px`); section eyebrow **18 px/700 `#eb566c`** with a 50 × 2 px rule; section `h2` **50 px/600 `#28395a`** Oswald; service `h3` **30 px/600**; plan price **35 px/900** white (Muli); tab labels 16 px uppercase Oswald; blog date **14 px/600 uppercase**; blog title 13.6 px measured (Muli, 700 — see deltas); footer `h4` **20 px/500** white Muli | typography |
| radius                     | `30px` on every pill action and the tab pair's outer corners · `50px` on the search bar's outer ends · `10px` on the TLD strip and the two support cards · `7px`/`6px` on blog captions/images · `50%` on the back-to-top circle, the social rings, the support medallions and the pricing medallion · `0` on cards and inputs (the cut corner on a blog caption is `0 7px 0 0`) | shape language                                     |
| spacing rhythm             | `.section-padding30` `195px 0 140px` · `.section-padding2` `200px 0` · `pt-140/pb-140` and `pt-150/pb-150` utilities · `.testimonial-padding` `padding-bottom:180px` · `.footer-padding` `170px 0 50px` · title blocks `mb-80`/`mb-100`; all of them step down (150/90 → 100/40 → 65/10 px) across the breakpoints | layout                                                          |
| header                     | transparent, absolute over the hero (`z-index:9`), `padding:22px 50px`; logo 145×35; six links **14 px/500 uppercase white** (`padding:39px 19px`, hover/current `#eb566c`) with two dropdowns (white 170 px panel, `5px solid #eb566c` top border, `padding:17px 0`, `box-shadow:0 0 10px 3px rgba(0,0,0,.05)`, `top:120% → 100%`, `.3s`); phone chip = the pill at `padding:14px 29px` with a 22×25 glyph and the label `+880.762.009` (177×53); scrolled: `background:#010E21`, links `padding:27px 13px` | navigation                       |
| mobile menu                | below `lg` the desktop menu and the phone chip are `display:none`; the reference's SlickNav clone renders a `MENU` button + three-bar icon at the header's right — the recreation keeps a labelled toggle with `aria-expanded`, a slide/fade panel over a veil, and the same six links + phone action | navigation            |
| hero                       | `#020230`, three identical slides, `min-height:1000px` (≈920 px measured at 1440×900; 900 → 600 px at ≤1199/≤991 px); caption `col-lg-6 col-md-9` + image `col-lg-6` (**559×671**, `right:-63px`, hidden below `lg`); pink pill CTA (169×54); decorative shapes at top-left / top-right / `left:67px; bottom:95px` (recreate with CSS/SVG art, never the source PNGs); vertical icon rail at `right:-20px; bottom:40%; rotate(-90deg)`, 14 px `#45455f` icons (hover `#f27420`); vertical dot rail as above | hero                       |
| services band              | `padding:195px 0 140px` with a `::before` `#f8f5f2` layer covering the top **50 %**; centred title block (`mb-100`); three `col-lg-4 col-md-6` white cards (330×530) each `padding:94px 57px 30px 65px` (→ 53/25/11/26 → 42/20/9/20) with a **70 px** line glyph (`mb:50px`), a **30 px/600 `#28395a`** title, a 15 px blurb (`mb:30px`), a **13 px/700 uppercase `#10275c`** "get started" with a **24 px navy round arrow medallion** and a **40 px/600 pink `.0N`** numeral at the card's bottom-right; hover → glyph, label and medallion all `#eb566c` (medallion fill `#eb566c !important` with a white arrow) | services                  |
| domain search              | navy photo band, `140px` padding; left title (`h2` white, eyebrow inset 72 px) + right **pill bar** (690×90, `box-shadow:0 6px 29px 0 rgba(36,43,94,.08)`, `padding-top:30px`): input **60 px**/65 % (`padding:9px 33px 9px 32px`, 18 px/400 `#777777`, left end `50px`), TLD `<select>` 13 % (60 px, `padding:11px 3px 11px 43px`, **16 px/600 `#020230`**), pink submit 22 % (`60 px`, **Oswald 14 px uppercase**, `letter-spacing:.1em`, right end `50px`); below, a `1px solid #032a57` / `10px`-radius strip (690×86) of six TLD columns (16 % each, `padding-left:25px`, 1 px `#032a57` rules, 74 px tall) with the tinted TLD label (16 px/700) over a `#636376` price line | domain search | 
| split + logos              | `.section-padding2` (`200px 0`), flex row: copy half at `padding-left:19%` (`padding-right:117px` on the inner block, `44 px` `h2`, two paragraphs, pink pill) and an image half; then a white `work-company` band (204 px) pairing the same style of title with a **3 × 2** partner-logo grid (six marks, no border, no max-width — give then an explicit size and a muted treatment) | story band                |
| pricing                    | `padding:195px 0 140px`; left `col-lg-6` plan card **`#ff4f5b`** (342×636, `padding:78px 73px` → 57/23), centre-aligned: **100 px `#fce0d8` circle** with a rocket glyph, **35 px/900 white** `$ 05.00` (`mb:30px`, `padding-bottom:30px`, `1px solid #fff` rule), a four-row list (**16 px/300 white**, `margin:19px 0`), a **white pill** action (`#020230` label); decor shapes bottom-left / top-right; right `col-lg-6` copy column with eyebrow + `h2` + two paragraphs and the **pill tab pair** (Oswald 16 px uppercase, `padding:15px 43px`, idle `#fce0d8`/`#020230`, active `#ff4f5b`/white, outer corners `30px`), labelled Monthly / Yearly and driving the card | pricing                   |
| testimonial                | `padding-bottom:180px`; left `col-lg-7` carousel of **two** slides: avatar + `#eb566c` **30 px/600** name + `#57667e` role, then a **20 px** quote (`line-height:1.5`, `padding-right:100px`, `margin-bottom:50px`, `#10285d`), all inset `padding-left:80px` (→40); right `col-lg-5` illustration (`right:-55px`, full width); arrows 20 px at both edges (previous `#ffe1e3`, next `#eb566c`), **no dots** | testimonials              |
| support band               | dark circuit-photo band, `padding:150px 0` (→ `70px 0` below `lg`); left copy: pink eyebrow (inset 72 px) + **`#f2f2f2` 50 px/600** heading + white body (`padding:30px 10px 30px 0`); right: **two `#eb566c` 165×136 `10px`-radius** cards 15 px apart, each with a **50 px `#ff6b81` circle** (white glyph) over a **16 px/700 white** label (`+1 514 648` / `Text Us`) | support                   |
| blog                       | `padding:195px 0 140px`; centred title (`mb-80`); three `col-lg-4 col-md-6` cards: image with a **6 px** radius, then a **`#fff9f9`** caption absolutely positioned at `bottom:-63px; right:0; width:94%; border-radius:0 7px 0 0` (`padding:29px 20px 20px 31px`) with a **14 px/600 uppercase `#57667e`** date over a bold navy title (hover `#eb566c`) | blog                      |
| footer                     | navy photo band (`footer_bg.jpg` → picsum + navy wash), `.footer-padding` `170px 0 50px` (→100 →80): logo 145×35, then **All packages** (four rows), **Quick Link** (four rows) and a **contact column whose `h4` IS the phone number**, over an e-mail row and a street address; `h4` = **white 20 px/500 Muli** (`mb:29px`), links **`#8ba4b1`/300** (hover `#eb566c` + `padding-left:5px`), rows `margin-bottom:15px`; social rings 40 px (`1px solid #e5e5e5`, `#8ba4b1` → fill `#eb566c`); `.footer-bottom` `border-top:1px solid #1c2e4c; padding:40px 0 23px` with a `#8ba4b1`/300 running-year credit | footer                    |
| Google Fonts map           | `Oswald:wght@200..700` + `Mulish:wght@300;400;500;600;700;800;900` via one `<link>` in `index.html` (the reference's own `@import` requests `Muli:300,400,500,600,700,800` + `Oswald:200…700`; **both families resolve HTTP 200 on Google Fonts — `Muli` is still served as v34, and `Mulish` is the same face under its current name**, verified 2026-10-11; the plan-card price needs the `900` axis the source's import omits) — icons from `lucide-react` (the source's Flaticon / Font Awesome / Themify glyph fonts are never copied) | `index.html` |
| motion                     | hero carousel (Slick) with the vertical dot rail · `.3s` dropdown fade · `.5s cubic-bezier(.5,1.6,.4,.7)` button fill · `.4s ease-out` service/pricing hover transitions · testimonial carousel with its two arrows; all disabled under `prefers-reduced-motion: reduce` | animation                 |
| placeholders (own assets)  | hero illustration = an own inline SVG (servers + cloud) or `https://picsum.photos/seed/gridhost-hero/1200/1200` · story-band image = `.../gridhost-story/960/960` · partner logos = `lucide-react` marks in six neutral tiles · blog photos = `.../gridhost-blog-<n>/800/600` · testimonial avatar & illustration = `.../gridhost-founder/200/200` + `.../gridhost-quote/900/700` · domain/support/footer photo bands = `.../gridhost-domain/1600/900`, `.../gridhost-support/1600/900`, `.../gridhost-footer/1600/600` | ADDED vs the reference |
| attribution                | the footer credit line links `https://www.componentdock.com/` ("Component Dock"), replacing the source's Colorlib credit while keeping a computed current year                    | ADDED vs the reference |

## Requirements

### Feature: Header (transparent over the hero, solid navy when scrolled)

#### Scenario: Wordmark, six links and the phone chip render over the hero

- **Given** the page loads
- **When** the header renders
- **Then** it is **transparent** and absolutely positioned at the top of the page
  (`top:0; left:0; right:0`, above the hero band) so the `#020230` band shows
  through, with `padding:22px 50px` and three columns — the app's own wordmark
  (a decorative mark + name, ≈145×35), a centred menu and a right-aligned action
- **And** the menu holds exactly **six** links — home, about, services, blog,
  pages, contact — at **14 px/500 uppercase white** with `padding:39px 19px`,
  turning **`#eb566c`** on hover and marking the current page, and the reference's
  `index.html`/`about.html`/`services.html`/`blog.html`/`contact.html` targets are
  replaced by in-page anchors or the app's own routes
- **And** the right column holds a **pink `#eb566c` pill** (`padding:14px 29px`,
  ≈177×53, radius 30 px) pairing a 22×25 support glyph with the app's own phone
  label as a real `tel:` link whose accessible name includes the action
  ("call support"), with a visible `focus-visible` ring
- **And** no Colorlib or source-brand string appears anywhere in the header

#### Scenario: Two dropdowns open on hover and focus

- **Given** the header renders at ≥`lg`
- **When** the `blog` or `pages` item is hovered/focused or activated by keyboard
- **Then** a **white 170 px** panel appears under it with a **`5px solid #eb566c`
  top border**, `padding:17px 0`, `box-shadow:0 0 10px 3px rgba(0,0,0,.05)`,
  animating `top:120% → 100%` with a `.3s` fade, holding two rows (`blog` →
  blog + blog details) or one row (`pages` → elements)
- **And** each row is `padding:6px 10px` with **14 px** `#0b1c39` capitalised
  labels turning `#eb566c` on hover, the trigger exposes `aria-expanded`, and
  `Escape` closes the panel and returns focus to the trigger

#### Scenario: The header becomes a solid sticky bar on scroll

- **Given** the page has scrolled past the hero's top
- **When** the header is measured
- **Then** its bar is **solid `#010E21`**, the link padding tightens to
  `27px 13px`, and the bar stays pinned at the viewport's top with the same six
  links and phone chip still operable
- **And** below `lg` the desktop menu and the phone chip are hidden and a
  labelled mobile toggle (three-bar icon + `MENU` label shape, `aria-expanded`)
  replaces them, opening a panel with the same six links and the phone action,
  closable via its close control, the veil, or `Escape`, with focus return

### Feature: Hero (navy band with an isometric illustration)

#### Scenario: The navy hero renders the headline, sub-line, pink action and illustration

- **Given** the page loads
- **When** the hero renders
- **Then** it is a **`#020230`** band at least **900 px** tall (`min-height:1000px`
  desktop, measured ≈920 px at 1440×900; 900 → 600 px down the breakpoints) whose
  caption column (`col-lg-6 col-md-9` equivalent) holds an **Oswald 65 px/700
  white** headline (`line-height:1.3`, `margin-bottom:32px`; stepping 55 → 50 →
  29 px), a **16 px white** sub-line (`margin-bottom:54px`, `padding-right:155px`)
  and one **pink pill** action (measured 169×54, `padding:27px 44px`, radius
  30 px, uppercase Oswald 14 px/500 with `letter-spacing:1px`)
- **And** the right column carries the app's **own isometric illustration**
  (inline SVG or a deterministic placeholder, ≈559×671, hidden below `lg`) with a
  thin vertical divider line, and decorative dotted shapes at the band's corners
  recreated with CSS/SVG — never the source's `hero_right.png` or shape PNGs
- **And** the right edge holds a vertical icon rail (app's own social links, 14 px
  icons in `#45455f`, hover `#f27420`), and copy is the app's own paraphrase of a
  hosting offer (headline + discount/price sub-line), never the source's exact
  "Hosting digital technology web solution!" / "Automated Control Panel with Up
  to 50% Off…" strings

#### Scenario: The carousel moves between three slides with a vertical dot rail

- **Given** the hero renders
- **When** the carousel is operated
- **Then** **three** slides are present, each a full-height slide with its own
  caption + action (the reference repeats one slide three times; the recreation
  may vary the copy but must keep three), reachable by keyboard, with all content
  in the DOM at all times
- **And** the chrome is a **vertical dot rail** at `bottom:14%; right:35px` with
  **3 px-wide bars** — idle **20 px** tall `#162e78`, active **34 px** tall
  **`#03a7d2`**, 10 px apart — each a real `button` with
  `aria-label="<n> of 3"` and an exposed selected state
- **And** the carousel does not auto-advance under `prefers-reduced-motion:
  reduce`, and the hero produces no horizontal overflow at 320 px

### Feature: Services band (warm half-wash behind three white cards)

#### Scenario: A centred title and three cards straddle the colour seam

- **Given** the page renders
- **When** the services band is inspected
- **Then** the band is `padding:195px 0 140px` (stepping to 150/90 → 100/40 →
  65/10 px) with a full-width layer covering only its **top 50 %** in
  **`#f8f5f2`** *behind* the cards, and a centred title block (`margin-bottom`
  50 px, plus a 100 px gap before the cards) whose eyebrow is **18 px/700
  `#eb566c`** preceded by a **50 × 2 px `#eb566c` rule** and whose `h2` is
  **50 px/600 `#28395a`** Oswald
- **And** exactly **three** white cards follow (`col-lg-4 col-md-6 col-sm-6`,
  measured 330×530, `margin-bottom:50px`), each `padding:94px 57px 30px 65px`
  (stepping 53/25/11/26 → 42/20/9/20) holding a **70 px line-art glyph**
  (`margin-bottom:50px`), a **30 px/600 `#28395a`** title, a 15 px blurb
  (`margin-bottom:30px`) and a **13 px/700 uppercase** `#10275c` "get started"
  link prefixed by a **24 × 24 `#10275c` circle** with a white arrow glyph
- **And** each card carries its own **40 px/600 `#eb566c`** ordinal
  (`.01`, `.02`, `.03`) pinned to its bottom-right over a dotted accent, and the
  three topics are the app's own hosting-plan kinds (shared, reseller, cloud)
  with paraphrased blurbs — never the source's "Hunky dory barney…" text

#### Scenario: Hovering a card floods its accents with pink

- **Given** the three cards render
- **When** a card is hovered or focused within
- **Then** the glyph, the "get started" label and its round medallion all switch
  to **`#eb566c`** (with the medallion keeping a white arrow) in a
  `.4s ease-out` transition, and the card's white surface, size and layout do not
  shift
- **And** the link is a real focusable control with a visible `focus-visible`
  ring achieving the same state on keyboard focus, and the state is purely
  visual (nothing hidden from assistive tech)

### Feature: Domain search (pill bar over a per-column tinted TLD strip)

#### Scenario: A pill search bar pairs an input, a TLD select and a pink submit

- **Given** the page renders
- **When** the domain-search band is inspected
- **Then** it is a photo band (the app's own dark navy placeholder photo under a
  dark wash, `background-size:cover`) with **140 px** top and bottom padding,
  whose left quarter holds the pink eyebrow + a **white Oswald `h2`** and whose
  right three quarters hold a **pill bar** (measured 690×90,
  `box-shadow:0 6px 29px 0 rgba(36,43,94,.08)`) built from three joined parts
- **And** the input is **60 px** tall at **65 %** width (`padding:9px 33px 9px
  32px`, 18 px/400 `#777777`, placeholder `#616875`, left end rounded 50 px), the
  TLD `<select>` is **60 px** tall at **13 %** (`padding:11px 3px 11px 43px`,
  **16 px/600 `#020230`**) with a real `<label>`, and the submit is a **60 px**
  pink `#eb566c` block at **22 %** (uppercase Oswald 14 px, `letter-spacing:.1em`,
  right end rounded 50 px) that reads "search now" and validates a non-empty
  domain before acting
- **And** below the bar a **`1px solid #032a57`, 10 px-radius** strip
  (measured 690×86, `padding:15px 0`) holds **six** TLD price columns (16 % each,
  `padding-left:25px`, separated by **1 px `#032a57`** rules 74 px tall, hidden on
  the last column) whose **16 px/700** labels take the per-column tints
  `#ff7474`, `#ffdd74`, `#74ff9f`, `#748bff`, then `#f074ff` for the fifth and
  sixth, over price lines in **`#636376`** (the app's own prices)
- **And** the column tints follow the **index** order above (not the TLD text),
  the strip wraps without overflow at 320 px, and the whole bar degrades to
  stacked full-width parts below `md`

### Feature: Story band and partner logos

#### Scenario: A split band pairs copy with an illustration

- **Given** the page renders
- **When** the band after the domain strip is inspected
- **Then** it is a flex band with `padding:200px 0` (stepping 100 → 70 px) whose
  text half (a `50 %` column, inset `padding-left:19%` → 10 % → 8 % → `0 30px`
  with `margin-bottom:60px`) holds the pink eyebrow + a **44 px** `#28395a`
  Oswald heading (`margin-bottom:50px`), two paragraphs (`padding-top:45px;
  padding-bottom:35px`) and one **pink pill** action
- **And** its other half shows the app's own illustration
  (deterministic placeholder, never the source's `visit_bg.jpg`), the copy is the
  app's own "we're with you at every step" paraphrase, and the two halves stack
  to one column below `lg`

#### Scenario: Six partner marks render in a 3 × 2 grid

- **Given** the story band renders
- **When** the logo band under it is inspected
- **Then** a white band (measured 204 px tall) pairs a title column (pink eyebrow
  + `#28395a` heading) with a **3 × 2** grid of six partner marks
  (`col-lg-4 col-md-4 col-sm-6`), each a `lucide-react` mark or an own SVG in a
  neutral tile given an **explicit size** (the reference leaves them unstyled at
  their natural 196×102 — the recreation must not ship 196 px marks) with a
  muted, greyscale-leaning treatment that darkens on hover
- **And** the marks are the app's own abstract/brandless shapes (no cisco-style
  marks, no third-party logos) and each has an accessible name or is marked
  decorative

### Feature: Pricing (pink plan card beside a copy column and pill tabs)

#### Scenario: The pink plan card renders with a medallion, a price and a list

- **Given** the page renders
- **When** the pricing block is inspected
- **Then** the band is `padding:195px 0 140px` and its left half holds a card
  with surface **`#ff4f5b`** (measured 342×636, `padding:78px 73px` → 57/23 px)
  containing a **100 × 100 `#fce0d8` circle** with a rocket-style glyph, a
  **35 px/900 white** price line (`margin-bottom:30px; padding-bottom:30px;
  border-bottom:1px solid #fff`), a four-row feature list (**16 px/300 white**,
  `margin:19px 0`) and a **white pill** action (label `#020230`, pink hover fill,
  radius 30 px)
- **And** decorative shapes are anchored to the card's bottom-left and top-right
  (recreated with CSS/SVG), the app writes its own plan name, price and four
  feature lines (same kinds as the source: traffic lift, social marketing, free
  optimisation, 24/7 support), and the card stacks above the copy below `lg`

#### Scenario: Monthly/Yearly pill tabs drive the card

- **Given** the pricing block renders
- **When** the tab pair is inspected and operated
- **Then** two tabs sit in a flex row (`margin-bottom:31px`), each
  **Oswald 16 px uppercase** with `padding:15px 43px` (measured 142×54), the idle
  one filled **`#fce0d8`** with a `#020230` label and the active one filled
  **`#ff4f5b`** with a white label, the pair's outer corners rounded **30 px**
  (`:first-child` left side, `:last-child` right side)
- **And** the tabs implement a real tab interface (`role="tablist"`/`role="tab"`
  with `aria-selected`, arrow-key movement, `aria-controls` to the panel) and
  switching tabs swaps the plan content (billing period, price and/or plan name)
  accessibly, with focus visibly styled
- **And** the copy column beside the card carries the pink eyebrow, the
  `#28395a` heading and two paragraphs of the app's own copy

### Feature: Testimonials (split band with two coloured arrows)

#### Scenario: A founder block and a quote render beside an illustration

- **Given** the page renders
- **When** the testimonial band is inspected
- **Then** it is `padding-bottom:180px` (stepping 100 → 120 → 70 px) with a
  `col-lg-7` carousel column (content inset `padding-left:80px` → 40 px) and a
  `col-lg-5` illustration column (pushed right ≈55 px, full width)
- **And** each slide begins with a founder row — avatar + name in **30 px/600
  `#eb566c`** and a role line in **`#57667e`** — over a quote at **20 px**
  (`line-height:1.5`, `padding-right:100px`, `margin-bottom:50px`, colour
  `#10285d`)
- **And** the app supplies its own two named founders, roles and quotes (the
  reference repeats one person twice), with deterministic picsum avatars, never
  the source's `Homepage_testi.png` / `testimonail.png` artwork or its
  "Jahon Ann / CEO, Colorlib" text

#### Scenario: Two arrows move the carousel and there are no dots

- **Given** the carousel renders
- **When** its controls are inspected
- **Then** there are exactly **two 20 px arrows** vertically centred at the
  band's left and right edges — the previous in **`#ffe1e3`** (pale pink) and the
  next in **`#eb566c`** — each a real button with an accessible name ("previous
  testimonial" / "next testimonial"), and **no dots**
- **And** activating an arrow moves to the other slide, the active slide's
  content is exposed to assistive tech, `prefers-reduced-motion: reduce`
  suppresses any autoplay or slide animation, and keyboard users can reach both
  arrows and read both quotes
- **And** the two arrow colours are kept deliberately asymmetric (do not unify
  them)

### Feature: Support band (dark circuit photo with two pink contact cards)

#### Scenario: A white headline pairs with two pink rounded contact cards

- **Given** the page renders
- **When** the support band is inspected
- **Then** it is a photo band (the app's own dark navy "circuit" placeholder
  under a dark wash, `background-size:cover`) with `padding:150px 0`
  (→ `70px 0` below `lg`) and a `justify-content-between` row: a five-column copy
  block with the pink eyebrow (inset 72 px), a **`#f2f2f2` 50 px/600** Oswald
  headline and **white** body copy (`padding:30px 10px 30px 0`), and a six-column
  block with **two** contact cards
- **And** each card is **`#eb566c`**, **165 × 136**, `border-radius:10px`, 15 px
  apart, holding a **50 × 50 `#ff6b81` circle** (white glyph) over a **16 px/700
  white** label — one a `tel:` link and one a chat/text action — with the app's
  own phone number and label text (never `+1 514 648` / "Text Us" verbatim)
- **And** the support heading's `#f2f2f2` is kept distinct from the pure-white
  body copy, the cards stay legible over the photo (a solid dark fill sits under
  the image), and the two blocks stack below `lg`

### Feature: Blog (three cards with photo-overlapping captions)

#### Scenario: Three cards render under a centred title

- **Given** the page renders
- **When** the blog band is inspected
- **Then** it is `padding:195px 0 140px` with a centred title block
  (`margin-bottom:80px`) — pink "our blog"-style eyebrow over a `#28395a` Oswald
  heading — and exactly **three** `col-lg-4 col-md-6` cards (15 px side margins,
  `margin-bottom:100px`) each showing an image with a **6 px** radius
- **And** each card's caption is **`#fff9f9`**, absolutely positioned at
  `bottom:-63px; right:0; width:94%`, `border-radius:0 7px 0 0`,
  `padding:29px 20px 20px 31px`, holding a **14 px/600 uppercase `#57667e`** date
  over a bold navy title (Muli, hover `#eb566c`; render the title at a legible
  **18–20 px**, not the source's cascaded 13.6 px — see deltas)
- **And** the app writes its own three dated posts (same kind of content: a
  date + a short article title), the photos are deterministic picsum
  placeholders, each title is a real link with a `focus-visible` ring, and the
  three cards stack to one column below `md` without the captions clipping

### Feature: Footer (navy band with three columns and a running-year credit)

#### Scenario: Columns, social rings and the contact column render on the navy photo

- **Given** the page renders
- **When** the footer is inspected
- **Then** it is a navy photo band (the app's own dark placeholder under a navy
  wash) with `.footer-padding`-style `padding:170px 0 50px` (→100 →80) holding a
  spaced row: the app's wordmark (≈145×35, `margin-bottom:40px`) then **three**
  columns — a package list (four rows), a quick-link list (four rows) and a
  **contact column whose heading slot is the phone number itself** (white 20 px,
  matching the other headings) over an e-mail row and a street address
- **And** column headings are **white 20 px/500 in the body face (Muli)** with
  `margin-bottom:29px` — deliberately *not* the Oswald heading face used
  elsewhere — links are **`#8ba4b1` at weight 300** turning **`#eb566c`** with a
  `padding-left:5px` shift on hover, rows are spaced 15 px apart, and the phone
  and e-mail are real `tel:`/`mailto:` links
- **And** the social row is **40 × 40 circles** (`border-radius:50%`,
  `1px solid #e5e5e5`, `#8ba4b1` glyphs) filling **`#eb566c`** on hover, each
  icon-only control has an accessible name, and no third-party brand mark is
  copied (brand glyphs are inline SVG paths, not `lucide-react` brand icons)

#### Scenario: A ruled bottom bar carries a running year and the Component Dock link

- **Given** the footer renders
- **When** its bottom bar is inspected
- **Then** it is separated by `border-top:1px solid #1c2e4c` with
  `padding:40px 0 23px`, its copy is **`#8ba4b1` at weight 300**, and the credit
  line shows the **current year computed at render** (not hard-coded) plus exactly
  one link to `https://www.componentdock.com/` branded "Component Dock"
- **And** the source's Colorlib credit is gone and no Colorlib string survives
  anywhere in the footer

### Feature: Page chrome (back to top, no blocking overlay)

#### Scenario: A pink circle returns to the top and content is never blocked

- **Given** the page loads
- **When** the page chrome is inspected
- **Then** a **50 × 50 `#eb566c` circle** (`border-radius:50%`,
  `border:2px solid transparent`, `box-shadow:0 0 10px 3px rgba(108,98,98,.2)`)
  sits fixed at `right:31px; bottom:18px` with a white 20 px icon, appearing only
  after the user scrolls, and it is a real labelled button that scrolls back to
  the top
- **And** the reference's full-screen `#f7f7f7` preloader overlay is **not**
  reproduced as a blocking gate — the app renders its content immediately (any
  loading state is inline and non-blocking) so the page is usable before any
  asset finishes, with no layout shift when the hero photo loads

### Feature: Responsive behaviour

#### Scenario: Bands, grids and the header reflow on smaller screens

- **Given** the page renders at `lg`, `md` and `sm` widths
- **When** the layout is measured
- **Then** below `lg` the desktop menu, the hero illustration and the phone chip
  are hidden and the mobile toggle takes over, the hero band drops to 600 px
  with the headline stepping **65 → 55 → 50 → 29 px**, the services, blog, logo
  and partner grids collapse **3 → 2 → 1** column, the domain search bar's three
  parts stack full-width, the story/pricing/testimonial/support rows stack, and
  the section padding steps **195/140 → 150/90 → 100/40 → 65/10 px**
- **And** the TLD strip wraps to rows of three then two (the source's own
  `33.33 %` → `50 %` steps) without clipping, footer columns stack, and nothing
  overflows horizontally — the measured page width equals the viewport width at
  375 px (reference: `scrollWidth == innerWidth == 375`, page 10,038 px tall)

### Feature: Motion, accessibility and reduced motion

#### Scenario: Motion is decorative and fully suppressible

- **Given** the page loads with motion enabled
- **When** interactive elements are used
- **Then** the hero carousel advances via its dot rail, the header fades its two
  dropdowns (`.3s`), every pill action slides its `#f32a48` fill in over `.5s
  cubic-bezier(.5,1.6,.4,.7)`, and the service/pricing hover accents transition
  over `.4s ease-out`
- **And** under `prefers-reduced-motion: reduce` the carousels stop
  auto-advancing, transitions collapse to effectively instant, and all content is
  present immediately without reveal animations
- **And** every interactive element is keyboard reachable with a visible
  `focus-visible` ring, carousel/tab state is exposed to assistive tech, and the
  app's type scale never drops body copy below 16 px

### Feature: Component Dock attribution

#### Scenario: The footer links Component Dock exactly once

- **Given** the page renders
- **When** the footer is inspected
- **Then** exactly one clear link points to `https://www.componentdock.com/`
  branded "Component Dock", next to a computed current year
- **And** no `colorlib` / "Webhostingservice" / `webhostingservice` provenance
  string appears anywhere in `apps/gridhost` (comments included — record the
  palette as design-token notes instead) and no copied asset ships (no
  `hero_right.png`, `visit_bg.jpg`, `section_bg0*.jpg`, `footer_bg.jpg`,
  `cisco_brand*.png`, `blog*.png`, `roket.png`, `Homepage_testi.png`,
  `logo.png`/`logo2_footer.png`, no Flaticon / Font Awesome / Themify icon fonts,
  no Bootstrap / Slick / SlickNav / OwlCarousel / nice-select CSS or JS, no
  jQuery)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-gridhost`
- [ ] `scripts/verify-app.sh gridhost` passes: typecheck + lint + knip + fallow +
      vitest at **100 %** coverage + build
- [ ] Screenshot comparison against `webhostingservice-free-template.jpg`
      (1200×946 AVIF): `#020230` hero with a heavy white Oswald headline, a
      smaller white sub-line, a pink pill action and an isometric server
      illustration on the right, transparent header with a white wordmark, six
      uppercase links and a pink phone pill, the warm `#f8f5f2` half-wash behind
      three white service cards with thin-line glyphs and pink `.0N` numerals
- [ ] Live-render checks reproduced: hero band ≈920 px at a 1440×900 viewport
      (923 px measured, `min-height:1000px` rule; 600 px below 991 px) · vertical
      3 px dot rail (idle `#162e78` 20 px, active `#03a7d2` 34 px, `bottom:14%;
      right:35px`) · services band with a `#f8f5f2` layer over only its top 50 % ·
      pill search bar 690×90 with a 449×60 input and a 152×60 pink submit ·
      `1px solid #032a57` TLD strip with `#ff7474`/`#ffdd74`/`#74ff9f`/`#748bff`/
      `#f074ff` per-column tints at 16 px/700 · pricing card `#ff4f5b` 342×636
      with a 100 px `#fce0d8` medallion and a 35 px/900 price, tabs 142×54
      (`#fce0d8` idle / `#ff4f5b` active, outer corners 30 px) · testimonial
      arrows `#ffe1e3` (prev) and `#eb566c` (next) with no dots · support cards
      `#eb566c` 165×136 radius 10 px with 50 px `#ff6b81` medallions · blog
      captions `#fff9f9` at `bottom:-63px; width:94%; border-radius:0 7px 0 0` ·
      footer `h4` 20 px/500 **Muli** with `#8ba4b1`/300 links and 40 px social
      rings · `1px solid #1c2e4c` footer rule
- [ ] The **four pinks** are kept distinct: `#eb566c` (brand actions, eyebrows,
      numerals, contact cards, arrows, back-to-top), `#ff4f5b` (pricing card +
      active tab), `#f32a48` (button hover fill), `#ff6b81` (support medallion) —
      and `#03a7d2`/`#162e78` stay on the hero dot rail only
- [ ] `#020230` (hero band), `#28395a` (headings), `#10275c` (services link +
      medallion), `#010E21` (sticky header) are defined once as `@theme` tokens
      and used where the table says; the source's unused component-library hues
      (`#f9f9ff`, `#1f2b7b`, `#f0e9ff`, `#415094`, `#4cd3e3`, `#38a4ff`,
      `#f4e700`, `#f44a40`, `#f1f1f1`) do **not** appear
- [ ] Radius language matches: 30 px pills + tab outer corners, 50 px bar ends,
      10 px TLD strip + support cards, 6/7 px blog pieces, circles for the
      back-to-top, social rings and both medallions, 0 on cards/inputs, and the
      blog caption's cut corner is `0 7px 0 0`
- [ ] Oswald + Muli loaded via **one own Google Fonts `<link>`**
      (`Oswald:wght@200..700` + `Mulish:wght@300;400;500;600;700;800;900` — Mulish
      is the current name of the source's Muli face; both verified HTTP 200 on
      2026-10-11); the footer headings and blog titles use the body face while
      everything else uses Oswald; all icons from `lucide-react` plus inline SVG
      brand paths (never the source's Flaticon/Font Awesome/Themify fonts)
- [ ] The hero dot rail (`#03a7d2`/`#162e78`) and the asymmetric testimonial
      arrows (`#ffe1e3`/`#eb566c`) are reproduced as measured, not "corrected" to
      the brand pink
- [ ] The empty-in-the-source markup hooks are styled deliberately:
      `.work-company` band, partner-logo tiles (explicit size — never the
      reference's natural 196×102), `#back-top` and the sub-`lg` menu are all real
      styled components; nothing relies on a missing rule
- [ ] Zero `colorlib` / "Webhostingservice" / `webhostingservice` provenance
      references anywhere in `apps/gridhost` (comments included)
- [ ] No copied assets: no `hero_right.png`, `visit_bg.jpg`, `section_bg02.jpg`,
      `section_bg03.jpg`, `footer_bg.jpg`, `cisco_brand*.png`, `blog*.png`,
      `roket.png`, `Homepage_testi.png`, `procing-shape*.png`, `shape-*.png`,
      `logo*.png`, no Flaticon / Font Awesome / Themify / Slick / SlickNav /
      OwlCarousel / nice-select / Bootstrap / jQuery files, no Google Analytics
      snippet; photos from picsum, icons from `lucide-react`
- [ ] Accessibility: the mobile menu, both dropdowns, the pricing tab pair and
      both carousels are keyboard operable with exposed state (`aria-expanded`,
      `aria-selected`, `aria-label` on the dot rail and arrows), every icon-only
      control has an accessible name, focus is visible everywhere, and
      `prefers-reduced-motion: reduce` disables carousel motion and transitions
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component
      Dock") and shows a computed current year; the contact column keeps the
      phone-as-heading shape
- [ ] `public/CNAME` = `gridhost.free.componentdock.com` and
      `"homepage": "https://gridhost.free.componentdock.com"` in
      `apps/gridhost/package.json`; `package-lock.json` registers
      `@free-react-templates/gridhost`
- [ ] PR description includes: source template (ColorLib Webhostingservice),
      preview URL (`https://preview.colorlib.com/theme/webhostingservice/` →
      HTTP 200, 47,215 B; `assets/css/style.css` 64,303 B), the design tokens
      used (`#eb566c` brand pink, `#ff4f5b` pricing pink, `#f32a48` hover fill,
      `#ff6b81` medallion, `#020230` hero, `#28395a`/`#10275c` navies,
      `#f8f5f2`/`#fff9f9` surfaces, `#8ba4b1`/`#57667e`/`#636376` muted greys,
      `#1c2e4c` rule, `#010E21` sticky header, `#03a7d2`/`#162e78` dot rail,
      five TLD tints, 30/50/10/6/7 px radii, Oswald + Muli/Mulish), the measured
      structure (100 px transparent header, ≈920 px three-slide navy hero,
      3 service cards 330×530 on the `#f8f5f2` half-wash, 690×90 pill domain bar
      over a 690×86 TLD strip, story band + 3 × 2 logos, 342×636 `#ff4f5b` plan
      card with Monthly/Yearly pill tabs, two-slide testimonial band with
      two-tone arrows, 165×136 support cards on a circuit photo, 3 blog cards
      with overlapped captions, navy footer with three columns, page ≈7,631 px)
      and what differs (new name, own photos/icons/illustration, own copy,
      lucide + inline SVG instead of the source's icon fonts, no blocking
      preloader, SlickNav replaced by an accessible panel, deliberate styling of
      the source's unstyled hooks, per-column TLD tints kept by index, the
      blog-title cascade accident reconciled to a legible size, added
      keyboard/aria states, reduced-motion handling, Component Dock attribution)
