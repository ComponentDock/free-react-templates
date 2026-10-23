# Template: Rackline (Web Hosting)

## Purpose

Rackline is a full single-page **web-hosting / server-infrastructure marketing
site** in the free-react-templates monorepo. It is an original React recreation
of the ColorLib free **"Server"** template (source slug `server` — the Web
Hosting family's **lime-green data-centre** page: a **white utility bar** on top
(the wordmark plus three icon blocks — 24/7 support phone, e-mail, live chat),
a **flat `#343a40` nav strip** whose active/hover links are white, a **600 px
full-bleed photo hero** (server-room / circuit-board photos darkened by a
`rgba(0,0,0,.4)` overlay) that slides between two centred slides — *an
"Affordable Domains" headline with a price sub-line* and a "24/7 Customer
Support" headline, each pairing a **green `#7cbd1e` filled button** with a
**white-outline button** — a `#f8f9fa` band titled with a **32 px/500 question
headline** over **three white `1px #dee2e6`-bordered, shadowed plan cards**
(64 px lime glyph icon, plan name, "Plans start at $…/month", green "View
Details"), a **second 600 px photo band** left-aligned with a white 80 px/300
"Satisfied Clients" headline, a star-rating line and a green "Register Now"
button, a white band with **six white `2px #e6e6e6`-bordered icon cards** whose
whole surface fills with `#7cbd1e` on hover (heading, copy, icon and border all
flip to white/transparent), a `#f8f9fa` **testimonials carousel of four
centred 525 px slides** (90 px circular avatar, 18 px/300 name, uppercase
grey role, `1.1rem` quote, `8px` dots whose active one is lime), and a
`#393e46` **footer** with three identical link columns plus two
Europe/USA office blocks and a centred copyright line).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths, no brand marks) and never reuses the source name or its
copy verbatim.

- **Source:** https://colorlib.com/wp/template/server/ (listed in TEMPLATES.md
  `## Web Hosting (20)` at line 3048 — that section holds 20 items across lines
  3050–3069; the slug `server` appears exactly once in TEMPLATES.md and in no
  spec on main before this one)
- **Preview:** `https://preview.colorlib.com/theme/server/` returns
  **HTTP 200**, `text/html; charset=utf-8`, **36,720 B** and
  `<title>Server &mdash; Colorlib Website Template</title>` (verified
  2026-10-11). Its DOM was fetched and parsed, and its stylesheets
  `.../css/style.css` (HTTP 200, **26,987 B**) and `.../css/bootstrap.min.css`
  (HTTP 200, **36,889 B**, a Bootstrap **4.1.3** build whose `:root` declares
  `--primary: #7cbd1e`) plus `.../fonts/icomoon/style.css` (HTTP 200,
  **79,820 B**, the reference's own icon font — never copied) were tokenized and
  cross-checked against the **live render** in a browser (computed styles +
  `getBoundingClientRect` at a 1440×900 desktop viewport and a 375×800 narrow
  pass). Live preview is the primary reference; no fallback was needed.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/server-free-template.jpg
  (HTTP 200, **151,368 B**, served as **JPEG/JFIF progressive, 1200×946**,
  reviewed visually 2026-10-11).
- **New name:** `rackline` (apps/rackline, `@free-react-templates/rackline`) —
  taken from the source's own server-rack subject matter (a rack plus a "line"
  of hosting plans); the source name "Server", its wordmark, its logo glyph, its
  hero/plan/testimonial/icon assets and its copy are never reused. `rackline`
  collides with no `apps/` folder, no `openspec/specs/` folder, no
  `docs/templates/` folder and no TEMPLATES.md slug (verified 2026-10-11 — a
  repo-wide `grep -ril rackline` returns zero hits).
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Server" (source slug `server`,
  https://colorlib.com/wp/template/server/). It is a Bootstrap 4.1.3 page (the
  reference ships `css/bootstrap.min.css` with `--primary: #7cbd1e`; the
  recreation uses Tailwind utilities instead and copies nothing).
- **Preview URL:** `https://preview.colorlib.com/theme/server/` → **HTTP 200**
  (36,720 B). Reference artifacts (research date 2026-10-11):
  `/tmp/server/preview.html`, `/tmp/server/main-style.css`,
  `/tmp/server/bootstrap.min.css`, `/tmp/server/shot.jpg`. Other CSS the preview
  loads (never copied): `css/magnific-popup.css`, `css/jquery-ui.css`,
  `css/owl.carousel.min.css`, `css/owl.theme.default.min.css`,
  `css/bootstrap-datepicker.css`, `css/animate.css`, `css/fl-bigmug-line.css`,
  `css/aos.css`, `fonts/icomoon/style.css`,
  `fonts/flaticon/font/flaticon.css`. Scripts referenced (never copied):
  `js/jquery-3.3.1.min.js`, `js/jquery-migrate-3.0.1.min.js`, `js/jquery-ui.js`,
  `js/popper.min.js`, `js/bootstrap.min.js`, `js/owl.carousel.min.js`,
  `js/jquery.stellar.min.js`, `js/jquery.countdown.min.js`,
  `js/jquery.magnific-popup.min.js`, `js/bootstrap-datepicker.min.js`,
  `js/aos.js`, `js/main.js`, plus Cloudflare's `email-decode.min.js` and a
  Google Analytics tag.
- **Screenshot (1200×946):** a browser-chrome mock of the top of the page. A
  **white utility bar** carries a two-tone logo mark (a stacked-layers glyph over
  the black wordmark at the left, ~32 px/200) and, at the right, **three icon
  blocks**: a headset over the grey uppercase label "24/7 SUPPORT" with a black
  "1-800-200-3911" beneath it, an envelope over "EMAIL" with "mail@domain.com",
  and a chat bubble over "LIVE CHAT" with "Chat With Us Now". Under it a **flat
  dark `#343a40` strip** holds the menu — Home (**white**, current), Domain,
  Hosting (with a chevron), Blog, Contact in a dimmer `rgba(255,255,255,.6)` —
  and at the right a **white-outlined "Register"** button next to a **lime
  `#7cbd1e` filled "Login"** button, both square-cornered. The hero is a
  full-bleed photo of a **data-centre server rack** (a second slide shows a
  blue-lit circuit board) darkened by a black 40 % overlay; a **centred white
  80 px/300 headline** sits in the middle — slide 1 "Affordable Domains" with the
  smaller white line "from $7/year", slide 2 "24/7 Customer Support" — above two
  square buttons: a **lime "Download"** and a **white-outline "Get In Touch"**.
  Round translucent black chevron buttons sit on the left and right edges
  (`left:10px` / right edge, 50 px squares, vertically centred).
- **Section order (measured from the live DOM at 1440 px, top → bottom, with
  measured top offsets / heights):**
  1. `.site-navbar-wrap.bg-white` — **0 / 148 px**: `.site-navbar-top`
     (`height:72px`, `font-size:0.8rem`, `.container.py-2`) with a
     `col-6 col-md-6 col-lg-2` logo block — `<a class="d-flex align-items-center
     site-logo">` holding an icon-font cube glyph (`.fl-bigmug-line-cube29`, its
     own 44 px tinted square, `mr-3`) and the wordmark text at **`font-size:2rem`
     / `font-weight:200`**, `color:#000` — and a `col-6 col-md-6 col-lg-10`
     `ul.unit-4.ml-auto.text-right` (**12.8 px**, `.site-navbar-wrap a{color:#000}`)
     with **three** inline `<li>` blocks, each an `<a>` wrapping
     `d-flex align-items-center block-unit`: an `.icon` `div` (`line-height:0`,
     glyph **20–32 px**, black) plus a `d-none d-lg-block` column of a
     `span.text-gray-500.text-uppercase` label (`#adb5bd`, 12.8 px) over a
     `span.h6` value. The three are **24/7 Support / 1-800-200-3911**, **Email /
     mail@domain.com** and **Live Chat / Chat With Us Now**. Below `lg` the
     label/value column is hidden and only the icons remain
     (`.site-navbar-top .block-unit .icon span{font-size:20px !important}` at
     ≤991.98 px).
  2. `.site-navbar.bg-dark` — **72 / 75 px**: `background:#343a40`,
     `border-bottom:none`, `.container.py-1`, a 12-column row holding a
     `col-4 col-md-4 col-lg-8` nav and a `col-8 col-md-8 col-lg-4 text-right`
     button pair. Inside the nav: a `d-inline-block d-lg-none` toggle
     (`a.site-menu-toggle.js-menu-toggle.text-white` with a
     `span.icon-menu.h3` — a **28 px** hamburger glyph) and
     `ul.site-menu.js-clone-nav.d-none.d-lg-block` whose `li` are
     `display:inline-block; padding:10px 5px` and whose `a`
     (`padding:10px 10px`, `letter-spacing:.05em`, i.e. **0.8 px**) render at
     **16 px/400** in `rgba(255,255,255,.6)`, turning **white** on hover and for
     the `.active` item (`Home`). Items: **Home · Domain · Hosting · Blog ·
     Contact**, where `Hosting` is `.has-children` with a `::before` chevron
     glyph (`padding-right:20px`) that opens a **white dropdown** —
     `position:absolute; top:100%; margin-top:20px` collapsing to `0` on
     hover/focus, `padding:10px 0`, `background:#fff`,
     `box-shadow:0 2px 10px -2px rgba(0,0,0,.25)`,
     `border-left/right/bottom:1px solid #edf0f5` and an `arrow-top` 10 px white
     triangle at `left:20%` — listing **Shared Hosting, Dedicated Hosting,
     Premium Hosting, Cloud Hosting** plus a nested `.has-children` **Sub Menu**
     (a second panel opening at `left:100%; top:0`) with **Menu One / Menu Two /
     Menu Three**; each `li` is `min-width:200px` with `a{padding:5px 20px;
     display:block; color:#343a40}` turning **`#7cbd1e`** on hover. The right
     pair is `a.btn.btn-primary.btn-outline-primary.rounded-0.text-white.py-2.px-4`
     **Register** — transparent fill, `1px solid #7cbd1e` border, white label,
     **110×42** — and `a.btn.btn-primary.btn-primary.rounded-0.py-2.px-4`
     **Login** — `background:#7cbd1e`, `1px solid #7cbd1e`, white label,
     **90×42**.
  3. `.slide-one-item.home-slider.owl-carousel` — **148 / 600 px**: the hero
     slider with **two** `.site-blocks-cover.overlay` slides
     (`data-aos="fade" data-stellar-background-ratio="0.5"`, inline
     `style="background-image:url(images/hero_bg_1.jpg)"` /
     `hero_bg_2.jpg`). Each is
     `.site-blocks-cover{background-size:cover; background-repeat:no-repeat;
     background-position:top}` with `min-height:600px; height:calc(40vh)` (the
     600 px floor wins at any normal desktop height) and an `.overlay:before`
     wash of **`rgba(0,0,0,.4)`**. Content is a centred
     `row.align-items-center.justify-content-center.text-center` →
     `col-md-10`: an `h1` (**80 px/300 white**, `line-height:1.2`; the base
     `3rem`/900 rule is overridden at ≥768 px) and a `p` (**24 px**, white,
     `line-height:1.5`) holding two square buttons —
     `.btn.btn-primary.py-3.px-5.rounded-0` (**lime fill**, **173×58**,
     `padding:16px 48px`) and
     `.btn.btn-white.btn-outline-white.py-3.px-5.rounded-0` (**transparent fill**,
     `1px solid #fff`, white label, **188×58**). Slide 1 is `h1.mb-2`
     "Affordable Domains" + `p.mb-5` "from $7/year" + **Download / Get In Touch**;
     slide 2 is `h1.mb-5` "24/7 Customer Support" (no paragraph) + the same two
     buttons. The slider's arrows are `.slide-one-item.home-slider .owl-prev/
     .owl-next`: `position:absolute; top:50%; height:50px; width:50px;
     border-radius:0; background:rgba(0,0,0,.2); color:#fff; font-size:25px;
     transform:translateY(-50%)`, the previous arrow at `left:10px !important`,
     turning `black` (and the disabled pair to `opacity:.2`) on
     hover/focus.
  4. `.site-section.bg-light` — **748 / 713 px**: `background:#f8f9fa`,
     `padding:7em 0` (112 px, dropping to `3em 0` = 48 px below 768 px), a
     centred `h2` (**32 px/500**, `#4d4d4d`, `line-height:1.2` = 38.4 px box,
     max 540 px wide) in a `row.justify-content-center.text-center.mb-5`
     (`mb-5` = 48 px) — source copy "Different hosting platforms to suit every
     need!" — then `row.hosting` with **three** `col-md-6 col-lg-4` columns
     (`data-aos="fade"` with `data-aos-delay` 100/200/300), each an `.unit-2
     text-center.border.py-5.h-100.bg-white` card: **white**, `border:1px solid
     #dee2e6`, `padding:48px 0`, `box-shadow:0 5px 20px -5px rgba(0,0,0,.2)`,
     **350×356** — containing a `span.icon` at **64 px** in **`#7cbd1e`**
     (`.text-primary`), an `h3.h4` **24 px/500 `#000`** (`mb-2`), a `p.mb-4
     .text-gray-500` line in **`#adb5bd`** (`mb-4` = 24 px) and a green
     `a.btn.btn-primary.py-2.px-4.rounded-0` **View Details** (**141×42**,
     `padding:8px 24px`). The three plans: **Shared Hosting / Plans start at
     $3.99/month**, **Dedicated Hosting / $6.99**, **Premium Hosting / $9.99**
     (icons: `paper122`, `airplane86`, `hot67`).
  5. `.site-blocks-cover.overlay` (third band) — **1460 / 600 px**: the same
     cover component with `background-image:url(images/hero_bg_3.jpg)`, the
     `rgba(0,0,0,.4)` overlay and a **left-aligned** row
     (`align-items-center.text-left`, `col-md-7`): `h1.mb-2` "Satisfied Clients"
     at 80 px/300 white, `p.mb-5` "We are rated 4.99 / 5.00 (based on 4443
     Reviews)" at 24 px white, and one lime
     `.btn.btn-primary.py-3.px-5.rounded-0` **Register Now** (**173×58**).
  6. `.site-section` — **2060 / 858 px**: white, `padding:7em 0`, a centred
     `h2` **"Why Choose Us"** (32 px/500 `#4d4d4d`), then **six** `col-md-6
     col-lg-4` `.unit-3.h-100.bg-white` cards (**350×246**): `padding:30px`,
     `border:2px solid #e6e6e6`, `position:relative`, `transition:.3s all ease`,
     with a `:before` layer at `transform:scale(1.07)`, `opacity:0;
     visibility:hidden`, `background:#7cbd1e` that on **hover/focus** becomes
     `opacity:1; visibility:visible; transform:scale(1)` while the card's own
     border goes `2px solid transparent` and the `h2`, `p`, icon and SVG
     `stroke` all turn **white** (text `z-index:2`). Each card is a
     `d-flex.align-items-center.mb-3.unit-3-heading` row with a
     `.unit-3-icon-wrap` (**59×68**, `flex:0 0 59px`, `mr-4`) holding an inline
     **59×68 SVG stroked `#7cbd1e`** (`stroke-width:2px`) plus a `.unit-3-icon`
     glyph at **32 px** centred over it, an `h2.h5` (**20 px/500 `#4d4d4d`**,
     `mb-2`) and a `.unit-3-body` paragraph in **`#b3b3b3`**. The six topics:
     **High Quality Hardware, Top Data Centers, Outstanding Speed, Amazing
     Uptime, Best Support, Client Reviews**.
  7. `.site-section.block-4.bg-light` — **2918 / 635 px**: `#f8f9fa`,
     `padding:7em 0`, a centred `h2` **"Testimonials"**, then
     `.nonloop-block-4.owl-carousel` (`padding-bottom:2em` on the stage,
     `data-aos="fade"`) with **four** `.item.col-md-6.mx-auto` slides, each a
     `.block-38.text-center`: `border-radius:50%` on a **90 px** avatar image
     (`margin:0 auto 20px`), an `h3.block-38-heading` (**18 px/300 `#000`**,
     `margin:0`), a `p.block-38-subheading` (**`#b3b3b3`, uppercase**,
     `margin:0 0 20px`), then `.block-38-body` at **`1.1rem` (17.6 px)**
     `line-height:1.7`. The four slides alternate **Elizabeth Graham /
     Creative Director, XYG Company** and **Jennifer Greive / Lead Designer, Mig
     Company** (the source repeats the same two people twice). Carousel chrome
     (`.owl-nav` at `bottom:-2px`, arrows `font-size:30px`, `opacity:.2` →
     `1` on hover, `left/right:50px`, disabled hidden; `.owl-dots` at
     `bottom:-40px`, `8px` circles `background:#ccc`, the `.active` dot
     **`#7cbd1e`**, `margin-right:10px`).
  8. `footer.footer` — **3553 / 654 px**: `.site-footer{padding:7em 0;
     background:#393e46; color:rgba(255,255,255,.4)}`, links
     `rgba(255,255,255,.7)` → `#fff` on hover, `ul li{margin-bottom:10px}`,
     `.footer-heading{font-size:18px; color:#fff}`. A 12-column row splits a
     `col-lg-7` and a `col-lg-5`:
     - `col-lg-7` → `row` with **three** `col-6 col-md-4 col-lg-4.mb-5.mb-lg-0`
       columns, each an `h3.footer-heading.mb-4` over a `ul.list-unstyled` of
       **six** `#` links — the source lists the **same six labels three times**
       (**About · Services · Servers · Hosting · News · Careers**) under the
       titles **Company**, **Navigations** and **Quick Menu**.
     - `col-lg-5` → two `row`s, each with a `col-md-12` `h3.footer-heading.mb-4`
       (**Europe**, then **USA**) and, beneath it, a `col-md-6` address block
       (`London - 2398 <br> 10 Japson Street` / `New York - 2398 <br> 10 Hadson
       Carl Street`) beside a `col-md-6` contact pair
       (`Tel. + (123) 3240-345-9348 <br> Mail. europe@youdomain.com` /
       `usa@youdomain.com`).
     - A closing `row.pt-5.mt-5.text-center` with a `col-md-12` paragraph: the
       source's credit line (a running year from `document.write(new
       Date().getFullYear())`, "All Rights Reserved | This template is made with
       ♥ by Colorlib"). The recreation replaces it with the **Component Dock**
       attribution.
  9. Off-canvas menu (`.site-mobile-menu`, `300px`, fixed right,
     `translateX(110%)` → `0` with `.offcanvas-menu` on the body,
     `background:#fff`, `padding-top:20px`,
     `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`, `.3s ease-in-out`) with a
     header (`padding:0 20px`, a floated `.site-mobile-menu-close` holding a
     **30 px** close glyph that turns `#25262a` on hover) and a scrollable body
     (`padding:20px; height:calc(100vh - 52px); padding-bottom:150px`) wrapping
     `ul.site-nav-wrap` — top-level links `padding:10px 20px`, **20 px**,
     `color:#212529`, hover **`#7cbd1e`**, `.active` lime; sub-levels 16 px at
     `padding-left:40px` and `padding-left:60px`; a round 36×36
     `.arrow-collapse` control at `right:0; top:10px` (hover `#f8f9fa`) whose
     glyph rotates 180° when collapsed. Opening it also shows
     `.site-wrap:before` — a `rgba(0,0,0,.6)` full-page veil at `z-index:2000`
     with `.3s ease-in-out`.
- **Live-render deltas found (must be reproduced deliberately, not by
  accident):**
  - **The whole page is square-cornered.** The only radii on the home page are
    `border-radius:50%` on the testimonial avatars (90 px) and the carousel
    dots (8 px) — every button, card, band and dropdown is `0` (the markup even
    carries `rounded-0`). The source stylesheet's `4px` radius belongs to
    `.post-entry`/`.text` on its blog page, not here.
  - **The unit-3 hover is a full-surface wash, not a shadow.** A `:before`
    layer scaled `1.07 → 1` fades in `#7cbd1e` under the content while the card's
    2 px border goes transparent, so the card appears to *grow into* its own
    lime fill; heading, copy, glyph and the 59×68 SVG stroke all switch to
    `#fff` in the same `.3s` transition. Keyboard focus must trigger the same
    state.
  - **The hero and the mid-page band are photo-driven with a flat black
    overlay.** `background-position:top` plus `background-size:cover` and
    `data-stellar-background-ratio="0.5"` (7 elements carry stellar parallax) —
    at 1440 px the computed `background-position` was already drifting
    (`50% -74.8px`) when scrolled, so the recreation must implement its own
    small parallax (and disable it under `prefers-reduced-motion` instead of
    relying on the plugin).
  - **Every band is exactly 600 px tall on desktop.** `.site-blocks-cover,
    .site-blocks-cover .row{min-height:600px; height:calc(40vh)}` — at a 900 px
    viewport `40vh` (360 px) never wins, and at 375 px the band still measured
    **600 px** with no horizontal overflow.
  - **AOS reveals are real but silent under reduced motion.** 20 elements carry
    `data-aos="fade"` (the three plan cards additionally a 100/200/300 ms
    delay); the reveal layer starts at `opacity:0` and fades in on scroll. The
    recreation must keep the content in the DOM at all times and render it
    immediately under `prefers-reduced-motion: reduce`.
  - **The footer repeats one link list three times** (Company, Navigations,
    Quick Menu all list the same six labels) and the testimonial carousel
    repeats the same two people twice. That duplication is the reference's real
    content; the recreation keeps the *shape* (three columns / four slides) with
    its own distinct labels and names.
  - **The top utility bar collapses to icons only below `lg`** (the label/value
    column is `d-none d-lg-block`) and, at ≤991.98 px, the icon glyphs drop to
    `20px !important`. The desktop menu is `d-none d-lg-block`, so the
    hamburger (28 px glyph) is the only navigation below `lg`.
  - **`.text-gray-500` is `#adb5bd` and `.unit-3 p` is `#b3b3b3`** — two
    distinct muted greys that the reference uses for different jobs (card
    sub-lines / utility labels vs body copy); do not collapse them into one
    token.
  - **`.btn.btn-primary` in this build is a *filled* button**
    (`background:#7cbd1e; border:1px solid #7cbd1e; color:#fff`) because
    Bootstrap's `--primary` was re-pointed to the brand lime; the navbar's
    `Register` only *looks* outlined because it also carries
    `.btn-outline-primary` (which sets `background:transparent` and keeps the
    lime border). The recreation must keep those two distinct treatments — a
    solid lime action and a lime-bordered transparent action.
  - **`.bg-light` is `#f8f9fa` and `.bg-dark` is `#343a40`** (Bootstrap
    utilities, computed live); the light bands are `#f8f9fa`, **not** the
    cards' white `#fff`.
  - **The reference loads no Google Fonts link** — `Nunito Sans` arrives as five
    `@font-face` blocks (weights **200/300/400/700/900**) injected from
    Cloudflare's font CDN in the served `<head>`. The recreation links its own
    Google Fonts stylesheet instead and never copies those files.
  - **The 500-weight headings are requested but not among the served faces**
    (computed `font-weight:500` on the 32 px section titles and 20/24 px card
    titles) — the browser synthesizes them. The recreation's font link should
    include the `500` axis so the headings are real, not synthesized.
  - `#5f9117` (a darker lime) is used only by the source's
    `.unit-7.featured-pricing` folded tag corners and `.pricing-table` headers —
    **that pricing block does not exist on this home page**, so the token stays
    out of the palette.
  - `#7cbd1e` inside `rgba(124,189,30,…)` overlay forms, `#e6e7e9`
    (`.btn-secondary`), `#212529`/`#343a40` (mobile-menu links / dropdown links)
    and `#edf0f5` (dropdown rules) are the only other source hues on this page;
    `rgba(136,183,213,0)` is a border-transparency artefact of the dropdown
    arrow and carries no colour.
- **Interactive behaviour to reproduce (from the reference's markup/plugins):**
  the hero slider (OwlCarousel, two slides, looping, translucent square arrows
  and no visible dots on the hero), the `Hosting` dropdown open/close pair
  (including the nested `Sub Menu`), the off-canvas mobile panel toggled by
  `.site-menu-toggle`/`.js-menu-toggle` (with the `rgba(0,0,0,.6)` page veil and
  the rotating collapse arrows), the testimonials carousel (four slides, dots +
  arrow controls), stellar parallax on the photo bands, AOS fade-in reveals, and
  the footer's running-year copyright.
- **Mesh of measured section geometry at a 1440×900 viewport (top offset /
  height):** `.site-navbar-wrap` 0/148 (top bar 72 + dark nav 75) ·
  `.slide-one-item` 148/600 · `.site-section.bg-light` 748/713 ·
  `.site-blocks-cover` (band) 1460/600 · `.site-section` (Why Choose Us)
  2060/858 · `.site-section.block-4.bg-light` 2918/635 · `.site-footer`
  3553/654 (page ≈ 4,207 px; the same page is 6,904 px tall at 375 px).
  Measured widths: plan cards 350×356, unit-3 cards 350×246, testimonial slides
  525 px, avatar 90 px, hero headline box 920×96, hero `Download` 173×58,
  `Get In Touch` 188×58, `Register` 110×42, `Login` 90×42, `View Details`
  141×42; the container is Bootstrap's 1140 px at ≥1200 px.
- **Brand colour census (from `css/style.css`, by frequency):** `#fff` (33),
  **`#7cbd1e` (13)**, `#000` (10), `#ccc` (4), `#edf0f5` (3), `#b3b3b3` (3),
  `#e6e7e9` (2), `#e6e6e6` (2), `#ffffff` (2), then one each of `#4d4d4d`,
  `#333333`, `#393e46`, `#adb5bd`, `#343a40`, `#25262a`, `#212529`, `#f8f9fa`,
  `#a6a6a6`, `#e8e8e8`, `#2c3640`, `#3e4955`, `#5f9117`. Overlays/veils:
  `rgba(0,0,0,.2)` (carousel arrows), `rgba(0,0,0,.25)` (dropdown shadow),
  `rgba(0,0,0,.4)` (hero overlay), `rgba(0,0,0,.5)` (a generic `.unit-5`
  overlay that this page does not use), `rgba(0,0,0,.6)` (off-canvas veil),
  `rgba(255,255,255,.2)` (popular-domain divider, unused here),
  `rgba(255,255,255,.4)` (footer copy), `rgba(255,255,255,.6)` (nav links),
  `rgba(255,255,255,.7)` (footer links). The home page itself uses only the
  **lime `#7cbd1e`**, the greys `#343a40`/`#4d4d4d`/`#b3b3b3`/`#adb5bd`/
  `#212529`/`#e6e6e6`/`#edf0f5`/`#ccc`, the surfaces `#ffffff`/`#f8f9fa` and the
  footer band `#393e46`.
- **Sibling comparison (why this slug is its own design):** this is the Web
  Hosting family's **lime-and-slate data-centre** page — a **white utility bar +
  flat dark `#343a40` nav** over **two 600 px photo bands**, a plan row of
  **shadowed 1 px-bordered cards**, a six-card grid whose **entire card surface
  floods lime on hover**, and a **flat `#393e46` footer with three repeated link
  columns**. The family's other prepped recreations use entirely different
  palettes and structures — serverly (Bhost) magenta `#b632fa`/`#487fee` on
  `#020c22`, stratus (Cloud83) `#25ae88`/`#556080`/`#7fabda`, stratos
  (Cloudnest) indigo `#6366f1`/`#4f46e5`, nebuly (Cloudtemplate)
  `#3f52e3`/`#21bf73`, hostcraft (Cohost) `#6927ff`, ecohive (Ecohosting)
  `#9f78ff` on `#2d0a31`, presto (Fastes) `#73469F`/`#3B2774`/`#FFBF81`, upnode
  (Hami) `#1c66de`, uplink (Hosthub) `#6247ea`/`#ec9d5f`, skyport (Hosting)
  azure `#3898f8`, skyvault (Hostspace) mint `#1befc5` on the violet ramp
  `#200e35`/`#4d1d85`, sitewise (Hostza) `#2e004b`/`#00d363`, skyward (Ignite)
  `#207dff`/`#a1dd70`, upsurge (Ithost) `#eb2b63` on `#200545`, hostpeak /
  hostera (Lorahost) `#2926ac` → `#6128be`, soar (Raptor) `#2ebdc4`, netrise
  (Webhost) `#12e6ca`/`#8be55d` on `#233142`, harbor (Deerhost) `#120851`.
  **No prepped spec in the Web Hosting family mentions the lime `#7cbd1e`, the
  slate `#343a40` nav bar or `Nunito Sans` (verified by a repo-wide grep on
  2026-10-11 — `#7cbd1e` appears in the repo only in the unrelated
  welfare/charity Gracious, radio Wavelength and real-estate Lodging specs,
  and `Nunito Sans` only in other categories' specs)**, and no sibling combines
  a white utility bar with a flat dark nav strip, two 600 px overlaid photo
  bands, a three-card plan row with 64 px lime glyph icons, a six-card grid with
  a full lime hover wash, a four-slide testimonial carousel and a `#393e46`
  footer whose three columns repeat one link list. Do not borrow a sibling's
  palette or geometry.

## Design tokens

| Token                          | Value                                                                                                                                    | Where                                                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| brand (lime)                   | `#7cbd1e`                                                                                                                                | filled buttons (hero Download, Login, View Details, Register Now), 64 px plan-card icons, unit-3 icon stroke + hover fill, active carousel dot, dropdown/mobile-menu link hover, `.bg-primary`/`.text-primary` |
| brand (lime, unused here)      | `#5f9117`                                                                                                                                | only the source's `.unit-7` featured-pricing folded corners — **not on this page**, keep out of the palette                 |
| nav strip                      | `#343a40`                                                                                                                                | the flat dark menu bar (`bg-dark`), also the dropdown link colour                                                           |
| surfaces                       | `#ffffff` (page, cards, top bar, dropdown panel, off-canvas panel) · `#f8f9fa` (both `bg-light` bands, arrow-collapse hover)             | bands                                                                                                                      |
| footer band                    | `#393e46` (band) · `rgba(255,255,255,.4)` (footer copy) · `rgba(255,255,255,.7)` (footer links) → `#fff` on hover                        | footer                                                                                                                     |
| body text                      | `#4d4d4d` (body copy and card headings) · `#b3b3b3` (unit-3 copy, testimonial role) · `#adb5bd` (plan sub-line, utility labels)          | typography                                                                                                                 |
| dark text                      | `#000` (wordmark, utility values, plan-card titles, testimonial names) · `#212529` (off-canvas links) · `#25262a` (close-glyph hover)    | typography                                                                                                                 |
| nav link tone                  | `rgba(255,255,255,.6)` → `#fff` on hover/active                                                                                          | dark nav strip                                                                                                              |
| borders                        | `1px solid #dee2e6` (plan cards) · `2px solid #e6e6e6` → `transparent` on hover (unit-3) · `1px solid #edf0f5` (dropdown) · `1px solid #7cbd1e` (outline/lime buttons) · `1px solid #fff` (white outline button) · `1px solid #ccc` (a generic pagination ring, unused here) | dividers |
| overlays / veils               | `rgba(0,0,0,.4)` (both photo bands) · `rgba(0,0,0,.6)` (off-canvas page veil) · `rgba(0,0,0,.2)` (carousel arrows, hover `black`)         | photo bands & chrome                                                                                                        |
| shadows                        | `0 5px 20px -5px rgba(0,0,0,.2)` (plan cards) · `0 2px 10px -2px rgba(0,0,0,.25)` (dropdown) · `-10px 0 20px -10px rgba(0,0,0,.1)` (off-canvas panel) | elevation                                                                                                                   |
| font family                    | `"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`                                | whole page                                                                                                                 |
| font weights                   | `200` (wordmark) · `300` (hero headlines, testimonial names) · `400` (body, nav, buttons, links) · `500` (section + card headings, footer headings) · `700`/`900` are referenced by base/reset rules but unused on this page | typography                                                      |
| base type                      | `body` 16 px/400, `line-height:1.7`, `#4d4d4d`; `h1–h6` weight `500`; hero `h1` **80 px/300** white (`line-height:1.2`; `3rem`/900 base below 768 px); hero `p` **24 px** white (`line-height:1.5`); section `h2` **32 px/500** `#4d4d4d` (38.4 px box); plan `h3.h4` **24 px/500** `#000`; unit-3 `h2.h5` **20 px/500** `#4d4d4d`; testimonial `h3` **18 px/300** `#000` + uppercase role; testimonial body **`1.1rem` (17.6 px)**; utility bar `0.8rem` (12.8 px); footer `h3` **18 px/500** white, links 16 px | typography |
| radius                         | `0` on every button, card, band, dropdown and input (markup carries `rounded-0`) · `50%` only on the 90 px testimonial avatars and the 8 px carousel dots | shape language                                                                                                              |
| spacing rhythm                 | `.site-section` / `.site-footer` `padding:7em 0` (**112 px**) desktop → `3em 0` (**48 px**) below 768 px; section title block `mb-5` (48 px); hero band **`min-height:600px; height:calc(40vh)`**; page ≈ **4,207 px** tall at 1440 px (6,904 px at 375 px) | layout                                                                                                                      |
| top utility bar                | white, `height:72px`, `.container.py-2`; wordmark `2rem`/200 `#000` after a 44 px tinted cube glyph; `ul.unit-4` inline at 12.8 px, right-aligned, three blocks (icon + uppercase `#adb5bd` label + `h6` value): 24/7 Support `1-800-200-3911`, Email `mail@domain.com`, Live Chat `Chat With Us Now`; icon glyphs 20–32 px black (20 px ≤991.98 px); label/value column hidden below `lg` | utility bar                                                                                                                 |
| nav strip                      | `#343a40`, `height:75px`, `.container.py-1`; five links 16 px/400 `rgba(255,255,255,.6)` (active/hover white), `letter-spacing:.05em`, `li{padding:10px 5px}`, `a{padding:10px 10px}`; `Hosting` opens a white dropdown (`margin-top:20px` → `0`, `padding:10px 0`, `1px solid #edf0f5` sides/bottom, `box-shadow:0 2px 10px -2px rgba(0,0,0,.25)`, 10 px white `arrow-top` triangle, `min-width:200px` links `padding:5px 20px` colour `#343a40` → lime) containing four hosting kinds + a nested `Sub Menu` sub-panel at `left:100%; top:0`; right side `Register` (transparent, `1px solid #7cbd1e`, white, 110×42) + `Login` (lime fill, white, 90×42), both `.py-2.px-4.rounded-0` | navigation |
| hamburger / off-canvas         | toggle `a.site-menu-toggle.text-white` with a **28 px** glyph, shown below `lg`; panel 300 px white from `right` (`translateX(110%)` → `0`, `.3s ease-in-out`, `padding-top:20px`, panel shadow); header `padding:0 20px` with a floated 30 px close glyph; body `padding:20px; height:calc(100vh - 52px); padding-bottom:150px`; links `padding:10px 20px` — 20 px top level, 16 px at `padding-left:40px`/`60px`, `#212529` → lime hover, active lime; 36×36 round `.arrow-collapse` at `right:0; top:10px` (hover `#f8f9fa`) whose glyph rotates 180°; page veil `rgba(0,0,0,.6)` at `z-index:2000` | navigation |
| hero slider                    | two `.site-blocks-cover.overlay` slides, `background-size:cover; background-repeat:no-repeat; background-position:top`, `min-height:600px; height:calc(40vh)`, overlay `rgba(0,0,0,.4)`; centred `col-md-10` content; `h1` 80 px/300 white (`mb-2`/`mb-5`) + optional `p` 24 px white `mb-5`; buttons `Download` (lime 173×58, `padding:16px 48px`) and `Get In Touch` (transparent, `1px solid #fff`, 188×58); square 50 px translucent arrows at `left:10px` / right edge vertically centred (`rgba(0,0,0,.2)` → `black`) | hero |
| mid-page CTA band              | third `.site-blocks-cover.overlay`, 600 px, overlay `rgba(0,0,0,.4)`, left-aligned `col-md-7`: 80 px/300 white headline, 24 px white rating line (`mb-5`), one lime 173×58 action | CTA band |
| plan cards (`unit-2`)          | white, `1px solid #dee2e6`, `padding:48px 0`, `box-shadow:0 5px 20px -5px rgba(0,0,0,.2)`, **350×356**, centred: 64 px lime icon → 24 px/500 `#000` title (`mb-2`) → `#adb5bd` line (`mb-4`) → lime `View Details` (**141×42**, `padding:8px 24px`); three columns `col-md-6 col-lg-4` with AOS `fade` delays 100/200/300 ms | plan row |
| reason cards (`unit-3`)        | white, `padding:30px`, `border:2px solid #e6e6e6`, `transition:.3s all ease`, **350×246**, six `col-md-6 col-lg-4`; icon column 59×68 (`flex:0 0 59px`) with an inline 59×68 SVG stroked `#7cbd1e` (`stroke-width:2px`) under a 32 px glyph; `h2.h5` 20 px/500 `#4d4d4d` (`mb-2`); copy `#b3b3b3`; **hover/focus**: `:before` `#7cbd1e` layer `scale(1.07)→1`, card border → transparent, heading/copy/icon/SVG stroke → white, all `.3s` | reason grid |
| testimonials                   | `#f8f9fa`, `padding:7em 0`, centred 32 px/500 title; carousel of four `col-md-6` slides (**525 px**), each a centred `block-38`: 90 px circle avatar (`margin:0 auto 20px`), 18 px/300 `#000` name, uppercase `#b3b3b3` role (`margin:0 0 20px`), 17.6 px quote (`line-height:1.7`); nav arrows 30 px at `left/right:50px` (`opacity:.2` → `1`, disabled hidden) and 8 px dots at `bottom:-40px` (`#ccc` → `#7cbd1e` active, 10 px gaps) | testimonials |
| footer                         | `#393e46`, `padding:7em 0` (112 px), copy `rgba(255,255,255,.4)`, links `rgba(255,255,255,.7)` → `#fff`, `ul li{margin-bottom:10px}`; `col-lg-7` holds **three** `col-6 col-md-4` columns (18 px/500 white `footer-heading` + `mb-4`, six-link lists) and `col-lg-5` holds **two** office blocks (Europe / USA) each with a full-width heading, a `col-md-6` street address and a `col-md-6` tel/mail pair; the credit row is `pt-5 mt-5 text-center` with a running year | footer |
| Google Fonts map               | `Nunito+Sans:wght@200;300;400;500;700;900` via `<link>` in `index.html` (`https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;700;900&display=swap`), mirroring the source's five `@font-face` faces (200/300/400/700/900) and adding the `500` axis its headings actually request; icons from `lucide-react` (never the source's icomoon/flaticon CSS or its glyph files) | `index.html` |
| motion                         | AOS `fade` reveals (20 elements, 100/200/300 ms delays on the plan cards) that start at `opacity:0` and fade in on scroll; stellar parallax on the seven photo-band elements; carousel slides/dots; `.3s` transitions on cards, arrows, dots, dropdown and off-canvas panel | animation |
| placeholders (own assets)      | hero slide 1 = `https://picsum.photos/seed/rackline-hero-1/1920/1080`, slide 2 = `.../rackline-hero-2/1920/1080`, mid-page band = `.../rackline-band/1920/1080` (each under its own `rgba(0,0,0,.4)` overlay); testimonial avatars = `https://picsum.photos/seed/rackline-avatar-<n>/180/180`; all icons/glyphs = `lucide-react` | ADDED vs the reference |
| attribution                    | footer line links `https://www.componentdock.com/` ("Component Dock") replacing the source's Colorlib credit | ADDED vs the reference |

## Requirements

### Feature: Utility bar (white contact strip above the nav)

#### Scenario: Wordmark and three contact blocks render in a white strip

- **Given** the page loads
- **When** the utility bar renders
- **Then** it is a **white** (`#ffffff`) strip **72 px** tall with a 12-column
  row whose left column (`lg` 2/12) holds the app's own two-part wordmark — a
  decorative square icon tile followed by the name at **`2rem`/200** `#000` —
  and whose right column (`lg` 10/12) holds a right-aligned inline list at
  **12.8 px** with exactly **three** blocks
- **And** each block pairs an icon (`lucide-react`, 20–32 px, `#000`) with an
  **uppercase** `#adb5bd` label over a value: **24/7 Support / 1-800-200-3911**,
  **Email / mail@domain.com**, **Live Chat / Chat With Us Now** (labels are the
  app's own wording, never the source strings verbatim)
- **And** the phone block is a `tel:` link and the e-mail block a `mailto:` link,
  each with an accessible name that includes its label, and no Colorlib or
  source-brand string appears
- **And** below `lg` the label/value column is hidden and only the three icons
  remain (glyphs at **20 px** from ≤991.98 px), with no horizontal overflow at
  320 px

### Feature: Navigation (flat dark strip with a hosting dropdown and lime auth actions)

#### Scenario: Five links and two square auth actions render on #343a40

- **Given** the page renders
- **When** the nav strip is inspected
- **Then** it is a flat **`#343a40`** bar **75 px** tall (no shadow, no border)
  whose five links — home, domain, hosting, blog, contact — are **16 px/400** in
  `rgba(255,255,255,.6)` with `letter-spacing:.05em`, `10px 5px` list padding and
  `10px 10px` link padding, the current page and any hovered/focused link
  rendering **white**
- **And** the right edge holds two **square** (`0` radius) actions at
  `padding:8px 24px` — an **outlined** action (transparent fill,
  `1px solid #7cbd1e`, white label, ≈110×42) and a **filled lime** action
  (`background:#7cbd1e`, white label, ≈90×42) — both real links/buttons with
  visible `focus-visible` rings
- **And** the source's `index.html`/`domain.html`/`hosting.html`/`blog.html`/
  `contact.html` targets are replaced by in-page anchors or the app's own routes

#### Scenario: Hosting opens a white dropdown with a nested sub-menu

- **Given** the nav renders at ≥`lg`
- **When** the `Hosting` item is hovered or focused
- **Then** a **white** panel appears directly beneath it
  (`position:absolute; top:100%; margin-top:20px` collapsing to `0;
  padding:10px 0; box-shadow:0 2px 10px -2px rgba(0,0,0,.25);
  border-left/right/bottom:1px solid #edf0f5`) with a 10 px white triangle
  pointing up at `left:20%`, listing **four** hosting kinds (shared, dedicated,
  premium, cloud) plus a nested **sub-menu** whose own panel opens at
  `left:100%; top:0` with **three** items
- **And** each row is at least 200 px wide with `5px 20px` padding, `#343a40`
  text, turning **`#7cbd1e`** on hover, and the trigger shows a chevron glyph
  and `aria-expanded`
- **And** the menu is fully keyboard operable — `Enter`/`Space`/`ArrowDown` opens
  it, `Escape` closes it and returns focus to the trigger, `Tab` moves through
  the rows, and focus leaving the group closes it

#### Scenario: Off-canvas panel replaces the nav below lg

- **Given** the viewport is below `lg`
- **When** the hamburger (a 28 px glyph on a transparent control) is activated
- **Then** it toggles a **300 px white** panel in from the right
  (`translateX(110%)` → `0`, `.3s ease-in-out`, `padding-top:20px`,
  `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`) over a
  `rgba(0,0,0,.6)` full-page veil, with `aria-expanded` on the trigger, focus
  moved into the panel and contained there
- **And** the panel's header carries a 30 px close control (hover `#25262a`) and
  its scrollable body (`padding:20px`, `height:calc(100vh - 52px)`,
  `padding-bottom:150px`) holds the same navigation at **20 px** top level
  (`padding:10px 20px`, `#212529`, hover/active **`#7cbd1e`**) and **16 px** at
  the nested levels (`padding-left:40px` / `60px`), with a 36×36 round
  collapse control at `right:0; top:10px` (hover `#f8f9fa`) whose glyph rotates
  180° when collapsed
- **And** activating close, clicking the veil or pressing `Escape` closes the
  panel and returns focus to the hamburger

### Feature: Hero slider (two overlaid photo slides)

#### Scenario: The first slide renders the headline, sub-line and button pair

- **Given** the page loads
- **When** the hero renders
- **Then** it is a **600 px** band (`min-height:600px`,
  `background-size:cover; background-position:top`) carrying the app's own
  placeholder photo (`https://picsum.photos/seed/rackline-hero-1/1920/1080`)
  under a **`rgba(0,0,0,.4)`** wash — never the source's `hero_bg_1.jpg`
- **And** its centred `col-md-10` content holds an **80 px/300 white** headline
  (`line-height:1.2`, `3rem` below 768 px), a **24 px white** sub-line
  (`line-height:1.5`) and two square buttons at `padding:16px 48px`: a **lime**
  action (≈173×58) and a **transparent action with a 1 px white border**
  (≈188×58, white label)
- **And** the headline/sub-line/action copy is the app's own paraphrase (a
  domain-price offer) and never the source's "Affordable Domains" / "from
  $7/year" / "Download" / "Get In Touch" strings verbatim

#### Scenario: The slider moves between two slides with square arrow controls

- **Given** the hero renders
- **When** the slider is operated
- **Then** exactly **two** slides are present — the first with headline +
  sub-line + button pair, the second with a headline and the same button pair
  (no sub-line) — each a full 600 px band with its own photo and its own
  `rgba(0,0,0,.4)` overlay
- **And** previous/next controls are square **50 px** translucent-black buttons
  (`rgba(0,0,0,.2)` → `black` on hover/focus, 25 px white chevrons) vertically
  centred at the band's left (`10px`) and right edges, with accessible labels
- **And** both slides are reachable by keyboard, slide content is present in the
  DOM at all times, the carousel does not auto-advance under
  `prefers-reduced-motion: reduce`, and the hero never produces horizontal
  overflow (measured page width == viewport width at 320 px)

### Feature: Plan row (three shadowed cards under a question headline)

#### Scenario: A #f8f9fa band holds a centred headline and three plan cards

- **Given** the page renders
- **When** this band is inspected
- **Then** it is `background:#f8f9fa` with `padding:112px 0` (**48 px** below
  768 px) and a centred **32 px/500** `#4d4d4d` headline whose copy is the app's
  own question-style paraphrase of the source's "different hosting platforms"
  line, inside a title block with a 48 px bottom margin
- **And** exactly **three** `col-md-6 col-lg-4` cards follow, each **white** with
  `1px solid #dee2e6`, `padding:48px 0`,
  `box-shadow:0 5px 20px -5px rgba(0,0,0,.2)` and a measured **350×356** box at
  `lg`
- **And** each card holds a **64 px lime `#7cbd1e`** icon (`lucide-react`,
  `aria-hidden`), a **24 px/500** `#000` plan name, a `#adb5bd` price line
  ("plans start at $…/month", the app's own prices) and a **lime action**
  (≈141×42, `padding:8px 24px`, square corners) that is a real focusable control
- **And** the three cards stack to one column below `lg` (Bootstrap
  `col-md-6 col-lg-4`) with a ≥32 px vertical gap and no clipping or overflow

### Feature: Mid-page CTA band (left-aligned rating call to action)

#### Scenario: A second 600 px photo band pairs a headline, a rating and a lime action

- **Given** the page renders
- **When** the band after the plan row is inspected
- **Then** it is a **600 px** band with its own placeholder photo
  (`.../rackline-band/1920/1080`) under the same **`rgba(0,0,0,.4)`** wash and a
  **left-aligned** `col-md-7` column: an **80 px/300 white** headline, a 24 px
  white rating line with a 48 px bottom margin and one **lime** square action at
  `padding:16px 48px` (≈173×58)
- **And** the headline, rating text and action label are the app's own copy (a
  satisfied-clients / rating statement with the app's own numbers) and never the
  source's "Satisfied Clients" / "We are rated 4.99 / 5.00 (based on 4443
  Reviews)" / "Register Now" strings verbatim
- **And** the band is decorative-but-legible: the overlay keeps the white type at
  ≥4.5:1 contrast even if the photo fails to load (a solid dark fill sits under
  the image)

### Feature: Reason grid (six cards that flood lime on hover)

#### Scenario: Six bordered cards render under a centred headline

- **Given** the page renders
- **When** the white reason band is inspected
- **Then** it is white with `padding:112px 0` (**48 px** below 768 px) and a
  centred **32 px/500** `#4d4d4d` headline (the app's own "why choose us" copy)
- **And** exactly **six** `col-md-6 col-lg-4` cards (measured **350×246**) each
  have `padding:30px`, `border:2px solid #e6e6e6`, `position:relative` and a
  `.3s` transition, and each contains a **59×68 icon column** (`flex:0 0 59px`)
  with the app's **own inline SVG stroked `#7cbd1e`** (`stroke-width:2px`) under
  a 32 px glyph, a **20 px/500** `#4d4d4d` title (`mb-2`) and a `#b3b3b3`
  paragraph
- **And** the six topics are the app's own labels (hardware, data centres, speed,
  uptime, support, client feedback) and never the source's exact headings

#### Scenario: Hover and focus flood the whole card with lime

- **Given** the reason grid renders
- **When** a card is hovered or focused
- **Then** a full-surface `#7cbd1e` layer scales from `1.07` to `1` as it fades
  in (`.3s`), the card's 2 px border becomes transparent, and the title,
  paragraph, glyph icon and the 59×68 SVG stroke all switch to **white** while
  the text stays above the fill (`z-index` layering)
- **And** the whole card is one focusable target (or its inner link is) with a
  visible `focus-visible` ring in addition to the lime state, and the state is
  purely visual — no copy is hidden from assistive tech in either state

### Feature: Testimonials carousel

#### Scenario: A #f8f9fa band holds a centred title and a four-slide carousel

- **Given** the page renders
- **When** the testimonials band is inspected
- **Then** it is `#f8f9fa` with `padding:112px 0` (**48 px** below 768 px), a
  centred **32 px/500** title (the app's own short label) and a carousel of
  **four** centred slides, each measured **525 px** wide at `lg` and built as:
  a **90 px circular** avatar (`margin:0 auto 20px`), an **18 px/300** `#000`
  name, an **uppercase `#b3b3b3`** role (`margin:0 0 20px`) and a quote at
  **17.6 px** (`1.1rem`, `line-height:1.7`)
- **And** the four slides carry the app's own names/roles/quotes (four distinct
  people, unlike the source's two repeated twice), the copy is paraphrased and
  never the source's lorem text, and avatars are deterministic picsum
  placeholders (no copied `person_1.jpg` / `person_2.jpg`)

#### Scenario: Dots and arrows move the carousel and report state

- **Given** the carousel renders
- **When** its controls are inspected
- **Then** there are **8 px circular** dots (10 px apart, `#ccc`, the active one
  **`#7cbd1e`**) plus 30 px previous/next arrows inset `50px` from the band's
  edges whose opacity goes `.2` → `1` on hover and which are hidden when
  disabled
- **And** the controls are real buttons with accessible names, the active dot is
  exposed (`aria-current`/`aria-selected` or an equivalent), the previous/next
  keys and `Escape` behave sanely, and no auto-advance runs under
  `prefers-reduced-motion: reduce`

### Feature: Footer (slate band with three link columns and two offices)

#### Scenario: Three link columns and two office blocks render on #393e46

- **Given** the page renders
- **When** the footer is inspected
- **Then** it is `background:#393e46` with `padding:112px 0`, copy in
  `rgba(255,255,255,.4)`, links in `rgba(255,255,255,.7)` turning **white** on
  hover, and `ul li` spaced 10 px apart
- **And** its left `col-lg-7` half holds **three** `col-6 col-md-4` columns whose
  18 px/500 white headings (`mb-4`) sit over six-link lists — the app gives the
  three columns **distinct** link sets (unlike the source's three identical
  lists) in the source's own kind (about / services / servers / hosting / news /
  careers-style entries)
- **And** its right `col-lg-5` half holds **two** office blocks (a European and a
  US city), each with a full-width 18 px/500 white heading, a `col-md-6` street
  address and a `col-md-6` telephone/e-mail pair (the app's own city addresses
  and `tel:`/`mailto:` links — never the source's "London - 2398" / "10 Japson
  Street" / `europe@youdomain.com` strings)
- **And** every column and both halves stack without overlap below `md`, and a
  closing centred credit row (`padding-top:48px`, `margin-top:48px`) carries a
  **running current year** (computed at render, not hard-coded) followed by the
  Component Dock attribution

### Feature: Scroll motion (reveals and parallax)

#### Scenario: Bands and cards fade in and photo bands drift, accessibly

- **Given** the page loads with motion allowed
- **When** the user scrolls
- **Then** the reveal elements (the three plan cards — whose delays step
  100/200/300 ms — the reason cards, the testimonial carousel and the section
  titles) start at `opacity:0` and fade in over a short interval as they enter
  the viewport, without shifting layout
- **And** the two 600 px photo bands drift slightly against the scroll
  (mirroring the source's `data-stellar-background-ratio="0.5"`), and both the
  reveals and the parallax are disabled — content rendered fully and immediately
  — under `prefers-reduced-motion: reduce`
- **And** every revealed element stays in the DOM the whole time (`opacity` only
  — never `display:none`/`visibility:hidden` once mounted) so crawlers, screen
  readers and keyboard users always reach the content

### Feature: Responsive behaviour

#### Scenario: Navigation, bands, grids and footer reflow on smaller screens

- **Given** the page renders at `lg` (≤1199 px), `md` (≤991 px) and
  `sm` (≤767 px / ≤575 px)
- **When** the layout is measured
- **Then** the desktop menu and the utility bar's label/value column are hidden
  below `lg` (leaving the 28 px hamburger and three icons), the nav collapse
  happens at ≤991 px, and the off-canvas panel takes over
- **And** the hero band stays **600 px** with the headline stepping **80 → 48 px**
  at ≤768 px, the plan and reason grids drop **3 → 2 → 1** column
  (`col-md-6 col-lg-4`), the testimonials carousel goes to one slide per view,
  the footer halves stack, and the section padding relaxes from **112 px** to
  **48 px** at ≤768 px
- **And** nothing overflows horizontally — the measured page width equals the
  viewport width at 375 px and 320 px (verified: 375 px page, 6,904 px tall)

### Feature: Component Dock attribution

#### Scenario: Footer links Component Dock exactly once

- **Given** the page renders
- **When** the footer is inspected
- **Then** exactly one clear link points to `https://www.componentdock.com/`
  branded "Component Dock" (replacing the source's Colorlib credit and its
  running-year "made with ♥" line, while keeping the year itself)
- **And** no `colorlib` / "Server" / `server` provenance string appears anywhere
  in `apps/rackline` (comments included — record the palette as design-token
  notes instead) and no copied asset ships (no `hero_bg_*.jpg`,
  `person_*.jpg`, icomoon/flaticon/fl-bigmug icon fonts, no Bootstrap/Owl/
  stellar/AOS CSS or JS)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/rackline/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/rackline/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-rackline`
- [ ] `scripts/verify-app.sh rackline` passes: typecheck + lint + knip + fallow +
      vitest at **100 %** coverage + build
- [ ] Screenshot comparison against `server-free-template.jpg` (1200×946 JPEG):
      white utility bar (stacked-layers glyph + black wordmark; three icon blocks
      with uppercase grey labels), flat dark nav strip (Home white/active, dim
      links, chevron on Hosting, outlined Register + lime-filled Login, all
      square), 600 px server-room hero under a black 40 % wash with a centred
      white 80 px/300 headline, a smaller white price line and a lime
      "Download"-style action beside a white-outline action, round translucent
      chevron arrows on both edges
- [ ] Live-render checks reproduced: white `#f8f9fa` bands vs white cards;
      `1px solid #dee2e6` + `0 5px 20px -5px rgba(0,0,0,.2)` plan cards (350×356);
      `2px solid #e6e6e6` reason cards (350×246) with the full-surface lime hover
      wash and white text; 32 px/500 section titles; hero `h1` 80 px/300 →
      48 px ≤768 px; 600 px bands at every breakpoint; testimonial avatars 90 px
      circles and 8 px lime-active dots; `#393e46` footer with 18 px/500 white
      headings and 10 px list spacing
- [ ] `#7cbd1e` is defined once as a `@theme` token and used for the lime
      actions, plan icons, reason-card stroke + hover fill, active dot and link
      hovers; `#5f9117` and the source's unused hues (`#e6e7e9`, `#2c3640`,
      `#3e4955`, `#a6a6a6`) do **not** appear
- [ ] Zero radii except the 90 px avatar circles and 8 px carousel dots (no
      `border-radius` on any button, card, input or band)
- [ ] Nunito Sans loaded via an own Google Fonts `<link>`
      (`wght@200;300;400;500;700;900`), not by copying the source's `@font-face`
      files; all icons from `lucide-react`
- [x] Zero `colorlib` / "Server" / `server` provenance references anywhere in
      `apps/rackline` (comments included)
- [ ] No copied assets: no `hero_bg_1.jpg` / `hero_bg_2.jpg` / `hero_bg_3.jpg`,
      `person_1.jpg` / `person_2.jpg`, no icomoon / flaticon / fl-bigmug icon
      fonts, no Bootstrap / OwlCarousel / stellar / AOS / magnific-popup CSS or
      JS, no jQuery, no Google Analytics snippet; photos from picsum, icons from
      `lucide-react`
- [ ] Accessibility: the dropdown and off-canvas panel are keyboard operable with
      `aria-expanded`, `Escape` and focus return; the slider and testimonial
      carousels have labelled controls and exposed active state; every icon-only
      control has an accessible name; `prefers-reduced-motion: reduce` disables
      reveals, parallax and autoplay
- [x] Footer links `https://www.componentdock.com/` exactly once ("Component
      Dock") and shows a computed current year
- [x] `public/CNAME` = `rackline.free.componentdock.com` and
      `"homepage": "https://rackline.free.componentdock.com"` in
      `apps/rackline/package.json`; `package-lock.json` registers
      `@free-react-templates/rackline`
- [ ] PR description includes: source template (ColorLib Server), preview URL
      (`https://preview.colorlib.com/theme/server/` → HTTP 200, 36,720 B;
      `css/style.css` 26,987 B; `css/bootstrap.min.css` 36,889 B, Bootstrap
      4.1.3 with `--primary: #7cbd1e`), the design tokens used (lime `#7cbd1e`,
      nav `#343a40`, bands `#f8f9fa`, footer `#393e46`, text
      `#4d4d4d`/`#b3b3b3`/`#adb5bd`/`#000`, overlay `rgba(0,0,0,.4)`, 0 radii
      except 90 px avatars and 8 px dots, Nunito Sans, `padding:7em 0` sections,
      600 px photo bands), the measured structure (148 px header stack, 2-slide
      hero slider, 3 plan cards 350×356, 600 px CTA band, 6 reason cards 350×246
      with the lime hover wash, 4-slide testimonial carousel at 525 px,
      `#393e46` footer with three columns + two offices, page ≈4,207 px) and what
      differs (new name, own photos/icons/copy, lucide icons instead of icomoon
      fl-bigmug/flaticon glyphs, own SVG stroke artwork and parallax/reveal hooks
      instead of stellar/AOS, distinct footer link sets and four distinct
      testimonial people, local-only behaviour, added keyboard/aria states,
      reduced-motion handling, Component Dock attribution)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/server/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#1c66de` — nearest `#006dcc` (d=34)
- `#6247ea` — nearest `#7971ea` (d=48)
- `#ec9d5f` — nearest `#f3c17a` (d=46)
<!-- live-palette-unverified:end -->
