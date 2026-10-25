# Template: Uptempo (Agency & Studio / One-Page Creative Agency)

## Purpose

Uptempo is a single-page creative-agency landing page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Amplify"** design, built under a DIFFERENT name (**Uptempo** — one
lowercase word, the musical marking for the faster of two tempos, the energy
register a studio whose hero reads "We do things right." is selling; single
word, kebab-case-safe, no collision with `apps/`, `openspec/specs/template-*`,
`docs/templates/`, any bold name in `TEMPLATES.md`, or any substring in the
repository: `git grep -il uptempo origin/main` = **0 hits**; and the name is not
a ColorLib slug — `colorlib.com/wp/template/uptempo/`,
`preview.colorlib.com/theme/uptempo/` and
`preview.colorlib.com/theme/bootstrap/uptempo/` all return **404**) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `amplify`
- **ColorLib page**: https://colorlib.com/wp/template/amplify/
  (`<title>` on the marketplace page = **"Amplify - Free One Page Agency Website
  Template 2026 - Colorlib"**; its own meta description: *"Amplify is the best
  free one page agency website template with modern and responsive web design
  that will skyrocket your…"* — i.e. the source defines itself as a **one-page
  agency** template.)
- **Live preview**: https://preview.colorlib.com/theme/amplify/
  (HTTP 200, **20,108 B** HTML, sha256
  `ff24525eeeb1b2047023ba8683bf5d564a26f37a7861b1fd673e9edc0a7e2ea4`;
  served `<title>` = **"Amplify &mdash; Website by Colorlib"**, i.e. rendered
  "Amplify — Website by Colorlib"). Its own sheet is `css/style.css`
  (**18,353 B**, sha256
  `8bb4f16a7279531b6484fe938cd89c10c97a395399a4ec71ca67b90abaff237d`) and the
  page script `js/main.js` (**6,660 B**, sha256
  `e760df0e34d618e7ecbf9c0ee9a6cce1d241b9083ce1cde15aeb4d84bbe384c4`).
  Vendor set: **Bootstrap 4.1.3** (`css/bootstrap.min.css`, **26,954 B**,
  self-identifying banner `Bootstrap v4.1.3`), jQuery 3.3.1, jQuery UI,
  **Owl Carousel 2** (`.nonloop-block-13` / `.nonloop-block-14`), slicknav
  (mobile drawer clone), **AOS** (11 `aos-init` nodes), fancybox 3 (work
  lightbox), jquery.sticky, stellar + countdown + datepicker **loaded but
  unused** on this page, and two icon fonts (`fonts/icomoon/style.css`,
  `fonts/flaticon/font/flaticon.css`).
  `theme/bootstrap/amplify/` is **404** and `theme/bb/amplify/` is **404**, so
  the slug-only path IS the live design. `/downloads/free/amplify.zip` is
  **404** (9-byte `text/plain` body) — **there is no archive**, so the live
  render is the only DOM/CSS reference for this slug.
- **Screenshot**:
  https://colorlib.com/wp/wp-content/uploads/sites/2/amplify-free-template.jpg
  (served **AVIF**, 1200×946 decoded, converted with PIL and inspected: a
  **browser-chrome** shot of the **top fold only** — a white "Amplify" wordmark
  and five white nav labels over the blue, an outlined blue "Contact" pill at
  the far right on the white half, the giant white two-line headline "We do
  things / right.", a muted blue-white paragraph, an outlined white "GET
  STARTED" button, and a square portrait photograph straddling the blue/white
  boundary with a soft shadow. The card is a faithful picture of the live hero;
  everything below the fold — counters, work carousel, process, services,
  contact form, footer — exists only in the live DOM, and the band table below
  is measured there, not read off the card.)
- **Package**: `@free-react-templates/uptempo`
- **Deploy target**: `uptempo.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/amplify/' TEMPLATES.md` = **3** — line **2287**
(`## One Page (91)`), line **2379** (`## Personal (53)`) and line **2496**
(`## Portfolio (89)`), all `- [x] **Amplify**` and all pointing at the
**`amplify`** app. But that app recreates a DIFFERENT ColorLib design: its spec
(`openspec/specs/template-amplify/spec.md`) names ColorLib **"Uza"**
(`apps/amplify`'s hero is "Uza makes your biz greater", a `#1583e9` /
pale-blue-blob agency page — no 70 % blue hero panel, no Muli, no whitesmoke
ghost numerals). So all three Amplify rows are a false `[x]` (bucket 2,
**APP-WRONG-DESIGN**, in `docs/row-multiplicity.md` §2; measured exclusive-copy
evidence `row-excl / spec-excl` = **1 / 23** — the live `amplify` preview and the
`amplify` app share almost no exclusive wording). No spec on main claims
`wp/template/amplify/` — verified with
`grep -rl 'wp/template/amplify/' openspec/specs --include=spec.md` = 0 files.

**The prep stream never moves markers.** The implementer re-opens rows 2287,
2379 and 2496 on its `feat/` branch, builds `apps/uptempo`, and flips them to
`[x]` with the `uptempo.free.componentdock.com` link after merge.

### Why the name is not the source name

| check | result |
|---|---|
| `git grep -il uptempo origin/main` | 0 hits (no file path, no spec, no doc, no app) |
| `ls apps/ \| grep -x uptempo` | no match |
| `ls openspec/specs \| grep -x template-uptempo` | no match |
| `grep -ic '\*\*[^*]*uptempo' TEMPLATES.md` | 0 (not a ColorLib row name) |
| `colorlib.com/wp/template/uptempo/` | **404** |
| `preview.colorlib.com/theme/uptempo/` | **404** |
| `preview.colorlib.com/theme/bootstrap/uptempo/` | **404** |

## Design reference (replication findings)

### What the reference is

A **flat, flat-colour one-page agency** page in a single sans face (**Muli**,
300 body / 900 headings): one saturated Bootstrap blue (`#007bff`) as the only
brand colour, a **hard-edged 70 %-wide blue hero panel** with white type over
it, zero rounded cards, zero shadows except the hero portrait and the sticky
header, and grey (`#808080`) body copy. The rhythm is carried by very tall
section padding (`10em` = 176 px desktop) and by three oversized "ghost"
numerals (`01/02/03`, 160 px, `whitesmoke`) sitting behind the process icons.
Two full-bleed Owl carousels (4-up work cards, 4-up service cards) are the only
imagery beyond the hero portrait and the about photo. No gradients, no
patterns, no parallax — the whole page is blue, white, and two greys.

### DOM skeleton (live preview `index.html`, document order)

```
body[data-spy=scroll][data-target=.site-navbar-target][data-offset=300]
├── div.site-mobile-menu (drawer host; slicknav clones the menu into the body)
├── header.site-navbar.py-4.js-sticky-header.site-navbar-target
│   ├── .site-logo > a[href=index.html] "Amplify"
│   ├── nav > ul.site-menu.main-menu.js-clone-nav  (Home · Work · Process · Services)
│   └── .ml-auto > nav > ul.site-menu.site-menu-dark > li.cta > a[href=#contact-section] > span.rounded.border.border-primary "Contact"
│       └── a.site-menu-toggle.js-menu-toggle (mobile only, .d-lg-none)
├── div.intro-section#home-section
│   ├── .container > .row > .col-lg-4 (h1 "We do things right." · p · a.btn.btn-outline-light "Get Started")
│   └── .col-lg-2.ml-auto > figure.img-absolute > img[person_1.jpg]
├── div.site-section.section-1                       (about; margin-top:10rem)
│   ├── .col-lg-5 > span.section-sub-title + h2.section-title + p
│   │   └── .row > 2 × .col-lg-6 > 2 × .counter (icon-wrap + counter-text > strong + span) = 4 counters
│   └── .col-lg-6 > .image-absolute-box > .box (icon + h3 "Creativity is the key" + p) + img[about_1.jpg]
├── div.site-section.section-2#work-section           (Our Works)
│   ├── .col-lg-6 > span.section-sub-title "Excellent Work" + h2.section-title "Our Works" + p
│   └── .owl-carousel.nonloop-block-13 > 5 × a.work-thumb[href=images/…jpg][data-fancybox=gallery]
│         > .work-text (h3 "Work Name Here" + span.category) + img
├── div.site-section.section-2#process-section        (Our Process)
│   └── .col-lg-6 heading + .row > 3 × .col-lg-4 > .process.p-3 > span.number 01/02/03 + div > span.flaticon-* + h3 + p
├── div.site-section.bg-light#services-section        (Services)
│   ├── .col-lg-6 heading
│   └── .owl-carousel.nonloop-block-14 > 6 × .service > div > span.flaticon-* + h3 + p
├── div.site-section#contact-section                  (Message Us)
│   └── .row.justify-content-center > .col-md-7 > h2 + p + form (First name · Last name · Subject · Email · textarea · submit)
└── footer.footer-section
    ├── .col-md-4 (h3 "About Amplify" + p)
    ├── .col-md-3.ml-auto (h3 "Links" + 4 × li > a[href=#])
    ├── .col-md-4 (h3 "Subscribe" + p + form > input[Email] + input[submit Subscribe])
    └── .row.pt-5.mt-5 > .col-md-12 > .border-top.pt-5 > p (copyright)
```

### Band table — measured live (chromium 1440×900, `getBoundingClientRect`)

Document height **7,446 px** at 1440; **8,492 px** at 390 (no horizontal
overflow: `scrollWidth` 1440/1440 and 390/390).

| # | band | top | height | width | background |
|---|---|---|---|---|---|
| 1 | `header.site-navbar` | **0** | **88** | 1440 | transparent, `position:absolute` (overlaps the hero; 0 px in flow) |
| 2 | `.intro-section#home-section` | 0 | **900** | 1440 | transparent body + `::before` panel `#007bff`, **1008 px (= 70 %)**, full height, radius 0 |
| 3 | `.section-1` (about) | **1060** | 1038 | 1440 | `#fff` (body), `margin-top:160px`, `padding:176px 0` |
| 4 | `#work-section` | **2098** | 1188 | 1440 | `#fff`, `padding:176px 0` |
| 5 | `#process-section` | **3286** | 1066 | 1440 | `#fff`, `padding:176px 0` |
| 6 | `#services-section` | **4352** | 1381 | 1440 | **`#f8f9fa`** (`.bg-light`), `padding:176px 0` |
| 7 | `#contact-section` | **5733** | 1048 | 1440 | `#fff`, `padding:176px 0` |
| 8 | `footer.footer-section` | **6781** | 664 | 1440 | **`#fafafa`**, `padding:123.2px 0` (7em) |

Drift note: the two carousels autoplay and have no fixed height, so the band
heights below the fold move ±2 % between loads (the work band's height depends
on which slide set Owl has cloned at measure time). Cite these as ±20 px, not
exact.

### Mobile band table (390×844)

| band | top | height | notes |
|---|---|---|---|
| header | 0 | 85 | links + Contact pill hidden (`d-none d-lg-block`); hamburger only |
| `.intro-section` | 0 | **900** | `min-height:900px` — the hero does **not** shrink on mobile; panel is full width |
| `.section-1` | 1060 | 1691 | blue box becomes static above the photo; counters stack 1-up |
| `#work-section` | 2751 | 1045 | 1 card per view (390×491) |
| `#process-section` | 3796 | 1689 | 3 cards stacked (360 wide) |
| `#services-section` | 5485 | 988 | 1 card per view (390 wide, padding 32) |
| `#contact-section` | 6473 | 927 | form full width, submit 360×52 |
| footer | 7400 | 1092 | three columns stacked (193 / 207 / 230 tall + rule) |

### Measured type scale (computed styles, 1440)

| element | size / line-height / weight | colour | notes |
|---|---|---|---|
| `body` | **17.6 px** (1.1rem) / 1.7 / **300** | `#808080` (`color: gray` literal) | Muli |
| `.intro-section h1` | **48 px** (3rem) / 57.6 / **900** | `#fff` | 350 px wide → **2 lines**; **does not scale down** at 390 |
| `.intro-section p` | 17.6 / 1.7 / 300 | `rgba(255,255,255,.5)` | `max-width:400px` |
| `.section-sub-title` | **11.2 px** (.7rem) / 1.7 / **900**, uppercase | `#007bff` | `margin-bottom:1.5rem` |
| `.section-title` (h2) | **48 px** (3rem) / 1.2 / **900** | `#000` | `max-width:450px`, `margin-bottom:1.8rem`; **24 px ≤991px** |
| `.counter strong` | **56 px** (3.5rem) / **.5** / **700** | `#000` | `margin-bottom:1rem` |
| `.counter span` | 16 px / 1 / 300 | `#808080` | |
| `.counter .icon-wrap span` | 32 px (2rem) | `#007bff` | icon font (Flaticon) |
| `.image-absolute-box .box h3` | 19.2 px (1.2rem) / 1.2 / **500** | `#fff` | on `#007bff` plate |
| `.work-thumb .work-text h3` | 16 px (1rem) / 1.2 / **900** | `#fff` | hover only |
| `.work-thumb .category` | 12.8 px (.8rem) | `rgba(255,255,255,.7)` | hover only |
| `.process h3`, `.service h3` | **24 px** (1.5rem) / 1.2 / **700** | `#000` | `margin-bottom:1.5rem` |
| `.process .number` | **160 px** (10rem) / **0** / **900** | `whitesmoke` = `#f5f5f5` | absolute, `left:-30px; top:50px; z-index:-1` |
| `.btn` | **12 px** / 18 / **900**, uppercase | — | `.btn-outline-light` = 1 px `#f8f9fa`, `.btn-primary` = `#007bff` |
| footer `h3` | **14.4 px** (.9rem) / 1.2 / **900**, uppercase, `letter-spacing:.1rem` | `#000` | |
| footer `p` | 16 px (1rem) / 1.7 / 300 | `#808080` | |
| footer links | 17.6 / 1.7 / 300 | `#007bff` | |
| `.form-control` | 16 px / 1.5 / 400, **height 43 px** | text `#495057`, placeholder `#6c757d` | `1px solid #ced4da`, radius 4 px |

### Reference rules (verbatim, quoted from `css/style.css`)

```css
body { line-height: 1.7; color: gray; font-weight: 300; font-size: 1.1rem; }
h1, h2, h3, .h1, .h2, .h3 { font-family: "Muli", -apple-system, … , sans-serif; }
.btn { text-transform: uppercase; font-size: 12px; font-weight: 900; }
.form-control { height: 43px; font-family: "Muli", …; }     /* focus → border-color:#007bff */
.site-section { padding: 2.5em 0; }                          /* ← SUPERSEDED below */
@media (min-width: 768px) { .site-section { padding: 5em 0; } }  /* ← also superseded */
.site-section { padding: 10em 0; }                            /* wins: 176px desktop */
@media (max-width: 991.98px) { .site-section { padding: 4em 0; } }  /* 70.4px */
.site-navbar { position: absolute; width: 100%; z-index: 1999; }
.site-navbar .container-fluid { padding-left: 7rem; padding-right: 7rem; }
.site-logo { font-weight: 900; font-size: 1.3rem; }  .site-logo a { color: #fff; }
.site-navbar .site-navigation .site-menu > li > a { padding: 5px 20px; color: #fff; }
.sticky-wrapper.is-sticky .site-navbar { box-shadow: 4px 0 20px -5px rgba(0,0,0,.2); background: #fff; }
.sticky-wrapper.is-sticky .site-navbar .site-logo a,
.sticky-wrapper.is-sticky .site-navbar .site-menu > li > a { color: #000; }
.sticky-wrapper .shrink { padding-top: 10px !important; padding-bottom: 10px !important; }
.intro-section, .intro-section .container .row { height: 100vh; min-height: 900px; }
.intro-section:before { content:""; position:absolute; height:100%; width:70%; background:#007bff; }
@media (max-width: 991.98px) { .intro-section:before { width: 100%; } }
.intro-section h1 { font-size: 3rem; font-weight: 900; color: #fff; }
.intro-section p { color: rgba(255,255,255,.5); font-size: 1.1rem; max-width: 400px; }
.img-absolute { position: absolute; right: 10%; top: 50%; transform: translateY(-50%); }
.img-absolute img { max-width: 600px; box-shadow: 0 10px 50px -5px rgba(0,0,0,.4); }
.cta a span { border-color: #007bff; padding: 10px 20px; }
.cta a:hover span, .cta a.active > span { background: #007bff; color: #fff; }
.section-sub-title { color:#007bff; text-transform:uppercase; font-size:.7rem; font-weight:900; display:block; margin-bottom:1.5rem; }
.section-title { font-size:3rem; color:#000; margin-bottom:1.8rem; font-weight:900; max-width:450px; }
@media (max-width:991.98px) { .section-title { font-size:1.5rem; } }
.counter .counter-text strong { line-height:.5; font-size:3.5rem; display:block; font-weight:700; color:#000; margin-bottom:1rem; }
.image-absolute-box .box { position:absolute; background:#007bff; padding:30px; max-width:300px; top:-20%; right:-20%; }
.image-absolute-box .box h3 { font-size:1.2rem; color:#fff; margin-bottom:1.5rem; }
.image-absolute-box .box p { color: rgba(255,255,255,.55); }
.section-1 { margin-top: 10rem; }
.work-thumb:after { position:absolute; inset:0; content:""; background:rgba(0,123,255,.8); z-index:1; opacity:0; visibility:hidden; transition:.3s all ease; }
.work-thumb:hover { z-index:3; transform: scale(1.07); }
.work-thumb:hover:after, .work-thumb:hover .work-text { opacity:1; visibility:visible; transition-delay:.2s; margin-top:0; }
.work-thumb .work-text { position:absolute; top:10%; left:10%; z-index:2; opacity:0; visibility:hidden; margin-top:20px; }
.nonloop-block-13 .owl-nav, .nonloop-block-14 .owl-nav { display: none; }
.nonloop-block-13 .owl-dots, .nonloop-block-14 .owl-dots { margin-top:30px; width:100%; text-align:center; }
.nonloop-block-1x .owl-dots .owl-dot span { width:10px; height:10px; border-radius:50%; background-color:#e6e6e6; }
.nonloop-block-1x .owl-dots .owl-dot.active span { background-color:#007bff; }
.footer-section { padding: 7em 0; background-color: #fafafa; }
.footer-section h3 { font-size:.9rem; letter-spacing:.1rem; text-transform:uppercase; color:#000; margin-bottom:1.5rem; font-weight:900; }
.process .number { position:absolute; top:50px; left:-30px; line-height:0; z-index:-1; font-size:10rem; color:whitesmoke; font-weight:900; }
.service { padding: 4rem; background: #fff; }
@media (max-width: 991.98px) { .service { padding: 2rem; } }
```

### Font delivery (measured, not assumed)

`index.html` loads **Muli only**, through one Google Fonts `<link>` written with
a print-media swap (`media="print" onload="this.media='all'"`):
`https://fonts.googleapis.com/css?family=Muli:300,400,700,900`.
`[...document.fonts]` on the live page reports **Muli 300 / 400 / 700 / 900 all
`loaded`** (plus the two icon faces `icomoon` and `Flaticon`). There is **no**
`@font-face` in `css/style.css` and no self-hosted `fonts/` face, so the
delivery is entirely that stylesheet — nothing is synthesised and no weight is
missing.

Probe receipt: `fonts.googleapis.com/css?family=Muli:300,400,700,900` → **200**,
`css2?family=Muli:wght@300;400;700;900` → **200** (`css2?family=Mulish:wght@…`,
the face's later rename, also 200). Ship the `css2` form:
`https://fonts.googleapis.com/css2?family=Muli:wght@300;400;700;900&display=swap`.

### Section geometry at 1440 (measured)

- **Header** 88 px tall, absolute at y 0; container-fluid insets **112 px**, so
  the wordmark starts at x 150 while the hero's `.container` also starts at
  x 150 — the logo and the `h1` share a left edge. Nav links 88×40 / 84×40 /
  104×40 / 109×40 / 145×40 (5px 20px padding). Contact pill: `span` 10px 20px
  padding, **1 px `#007bff` border, radius 4 px**, label **20 px / 300**
  (`#212529`), inside a 145×40 hit area.
- **Hero**: `h1` 350×**115** at (165, 286) → two lines of 57.6 px; paragraph
  under it; **CTA 182×52** at (165, 546) with 16 px / 48 px padding and a 1 px
  `#f8f9fa` border; portrait **600×600** at (671, 150) from a **665×665**
  natural JPG — i.e. `right:10%` of 1440 = 144 px gutter, vertically centred on
  the 900 px band. The blue panel measures **1008 px** wide in the rendered
  pixels (`band-hero.png`: blue runs x 0→1007 at y 820).
- **About**: left column **475** wide at x 150; photo **540×679** at (735,
  1236); the blue plate **300×331** at (1083, 1100) — it overhangs the photo's
  top by 136 px (`top:-20%`) and its right edge by 48 px (`right:-20%`), and it
  is **flush to the viewport's right gutter**, not clipped.
  Counters **208×74**, 2×2 inside the left column at y 1678.
- **Work**: full-bleed carousel; **13** `.owl-item` in the DOM for **5**
  authored slides (Owl loop clones 8); slide **360×453** = exactly 1440/4,
  `margin:0`, aspect **0.795** (the source images are 360×453 crops). Dots row
  full width at y 3070, **2** dots.
- **Process**: 3 columns **350×401** at x 165 / 555 / 945; ghost numeral box
  **192 px** wide at x **135** (`left:-30px`), glyph `#f5f5f5`, behind the icon.
- **Services**: `.owl-item` **338** wide + **30** px `margin` = 368 pitch, so 4
  cards fill 1442 px of the 1440 viewport; card `padding:64px`, white, **no
  shadow, no radius**; **14** `.owl-item` for **6** authored cards; **2** dots.
- **Contact**: form column **665** wide centred at x 388; each field row **43**
  tall; textarea **635×254** (`rows=10`); submit **302×52** (`col-md-6` of the
  form column) — `#007bff`, 12 px/900 uppercase, radius 4.
- **Footer**: columns **380 / 285 / 380** at x 150 / 625 / 910; subscribe row
  **255 + 95 = 350** wide, **43** tall, **radius 0** on both halves (joined);
  divider rule `.border-top` (`#edf0f5`) at y 7230 inside `pt-5 mt-5`.

### Anchor census (live DOM, every `href` attributed — 31 rendered)

**Authored: 18 anchors.** Rendered: **31** — the difference is Owl (5 work
slides → **13**) and slicknav (5 menu links cloned into `.site-mobile-menu-body`
as **260×54** drawer rows). Attribution:

| href | authored | rendered | owner / note |
|---|---|---|---|
| `index.html` | 1 | 1 | wordmark → the page itself (**200**, byte-identical to the directory URL — a no-op link on a single-page build) |
| `#home-section` | 1 | 2 | nav "Home" (+ 1 drawer clone) |
| `#work-section` | 1 | 2 | nav "Work" (+ clone) |
| `#process-section` | 1 | 2 | nav "Process" (+ clone) |
| `#services-section` | 1 | 2 | nav "Services" (+ clone) |
| `#contact-section` | 1 | 2 | Contact pill (+ clone) |
| `#` | 6 | **6** | **dead**: mobile toggle (**0×0**), hero "Get Started" (182×52), 4 footer "Links" rows (48/44/64/69×22) |
| `images/about_1.jpg`, `images/slide_1..4.jpg` | 5 | **13** | work thumbs → fancybox lightbox (8 are Owl clones) |
| `https://colorlib.com` | 1 | 1 | credit line → **replaced by the Component Dock attribution** |

### Inner-page inventory (probed, not assumed)

`theme/amplify/` is a **genuine single page**: `index.html` **200**, and
`about`, `about.html`, `work`, `works`, `works.html`, `process`, `services`,
`services.html`, `contact`, `contact.html`, `elements`, `blog`, `single`,
`gallery`, `pricing`, `team` — **all 404**. The five nav items are therefore
real in-page anchors, not links to missing pages (this is the opposite of the
`summit`/`glamour`/`villa` shape, where the real content hides on inner pages).

### Interaction inventory (`js/main.js` + the sheets)

1. **Sticky header** — `$('.js-sticky-header').sticky({topSpacing:0})` wraps the
   bar in `.sticky-wrapper`; after **100 px** of scroll a `.shrink` class drops
   the padding from 24 px (`py-4`) to 10 px. `is-sticky` (from the plugin) turns
   the bar **white** with `box-shadow: 4px 0 20px -5px rgba(0,0,0,.2)` and
   flips the wordmark + links to `#000`; the active link's 2 px underline turns
   `#007bff`.
2. **Scrollspy** — `body[data-spy=scroll][data-target=.site-navbar-target]
   [data-offset=300]` (Bootstrap 4 scrollspy, 300 px offset). The nav item whose
   section is in view gets `.active` (2 px underline, `left/right:20px`), and
   **the Contact pill fills solid `#007bff` with white text**
   (`.cta a.active > span`) — measured live on the contact band
   (`band-contact.png` shows the filled pill).
3. **Smooth in-page scroll** — every `.main-menu li a[href^='#']` animates
   `scrollTop` with `easeInOutCirc` over **600 ms**, then sets
   `window.location.hash`.
4. **Mobile drawer** — `.js-menu-toggle` click → slicknav clones the menu into
   `.site-mobile-menu-body`, body gets `.offcanvas-menu`, `body`/`.site-wrap`
   receive the `rgba(0,0,0,.6)` scrim, links are **260×54** rows, and the
   `icon-close2` toggle closes it.
5. **Work carousel** — `.nonloop-block-13` Owl: `loop:true, autoplay:true,
   nav:true` (**but `.owl-nav` is `display:none` in CSS**, so only dots show),
   items **1 / 2 (≥600) / 3 (≥1000) / 4 (≥1200)**, `margin:0`.
6. **Services carousel** — `.nonloop-block-14`: same, but `margin:0 → 20 (≥600)
   → 30 (≥1000/1200)`, 6 slides.
7. **Work lightbox** — `data-fancybox="gallery"` over the five thumbnails; the
   anchors point straight at the JPGs.
8. **AOS reveals** — 11 `aos-init` nodes; hero column `fade-up` (+100 ms delay),
   counters `fade-up` (0/100/200/300 ms), blue plate `fade-up`, process cards
   `fade-up` (0/100/200), the contact `form` `fade`. Reveal-once, no repeat.
9. **Dead bindings (do not port)**: `#date-countdown` → `countdown('2020/10/10')`
   (no such element), `.slide-one-item` → Owl (no such element),
   `.datepicker` (none), `#slider-range` (commented out), `siteStellar()`
   (stellar loads but **no element carries `data-stellar-*`** → there is **no
   parallax** on this page).

### Source defects and documented deltas (do not copy these)

| # | source defect / quirk | prescription for the React build |
|---|---|---|
| 1 | `css/owl.theme.default.min.css` is linked **twice** (lines 18 and 19) | irrelevant to React; noted so nobody hunts a phantom cascade |
| 2 | `css/style.css` declares `.site-section` padding **three times** (`2.5em`, `5em ≥768`, then `10em`, with `4em ≤991`) — only the last of each pair wins | implement one rhythm: **176 px desktop, 112 px tablet (≤991), 80 px mobile** — never sum the declarations |
| 3 | `body { color: gray }` is the literal CSS keyword, not Bootstrap's `#212529` | token `--body: #808080` |
| 4 | The hero `h1` stays **48 px at 390 px** (no mobile rule) — the live mobile page shows a 2-line 48 px headline filling the width | delta: keep 48 px from 768 up, clamp to **34 px** below — record as an intentional deviation |
| 5 | At 390 px `.img-absolute` (`right:10%`, no mobile override) leaves the portrait **left-flush at x 0, 351 px wide, 39 px white strip on the right**, hanging 32 px past the blue panel's bottom edge | delta: centre the portrait and keep it inside the panel on mobile |
| 6 | The Contact pill's label is `#212529` on transparent (legible only because it sits over the white half of the hero) | reproduce both states: outlined (dark label) default, filled `#007bff`/white when its section is active |
| 7 | Work thumbs link to **raw JPGs** and open fancybox | delta: a real dialog with the placeholder image, Escape/backdrop close, focus return, `aria-modal` |
| 8 | Counter digits are **static text** (no animateNumber on this page) | do not animate the numbers |
| 9 | Two Owl dots for **5** slides (loop + 4-up makes Owl's page maths collapse) | delta: **5** dots (one per slide) + prev/next buttons with accessible names, so every card is reachable |
| 10 | Both carousels **autoplay** unconditionally (`autoplay:true`) | keep autoplay (~5 s) but pause on hover/focus/hidden tab and disable entirely under `prefers-reduced-motion` |
| 11 | All copy is **Lorem ipsum** (ColorLib demo filler) | paraphrase into real agency copy of the same *kind* (see Content inventory) |
| 12 | Below 992 px the services cards lose their 30 px margin (20 at ≥600, 0 on single) — the cards then **touch** | reproduce the touching edge-to-edge look on single-card view |
| 13 | The footer's subscribe control is **radius 0** while every other control is 4 px | keep the square, joined input+button; it is the design |
| 14 | No archive exists (`/downloads/free/amplify.zip` **404**) | the live preview is the only reference; note it in the PR |
| 15 | `.section-title` is `max-width:450px`, so "We Value More on Quality and not in Quantity." wraps to **3 lines** | keep the 450 px cap (it is what produces the stacked heading) |

### Content inventory (live copy — paraphrase, keep the same *kind*)

- **Wordmark**: "Amplify" · **nav**: Home · Work · Process · Services · **CTA**: Contact
- **Hero**: `h1` "We do things right." · p "Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas
  necessitatibus." · CTA "Get Started"
- **About**: eyebrow "About Amplify" · h2 "We Value More on Quality and not in
  Quantity." · p (3-line filler) · counters **260** Fast Loading · **2,500** No.
  of Downloads · **87** Number of Person · **920** Chat Room · plate "Creativity
  is the key" + p
- **Work**: eyebrow "Excellent Work" · h2 "Our Works" · 5 slides, all titled
  "Work Name Here", categories **Website · Illustration · Branding · Web
  Development · Design**
- **Process**: eyebrow + h2 "Our Process" · 01 **Research** · 02 **Building** ·
  03 **Launch** (each with a filler paragraph)
- **Services**: eyebrow + h2 "Services" · **Auto Reload · Download Videos · Web
  Development · 24/7 Support · Research · Creative Design**
- **Contact**: h2 "Message Us" · p filler · fields First name · Last name ·
  Subject · Email · "Write your message here." · submit **Send Message**
- **Footer**: "About Amplify" (blurb) · "Links" (Home · Work · Process ·
  Services — all dead `#`) · "Subscribe" (blurb + Email + Subscribe) ·
  copyright "Copyright ©<year> All rights reserved | This template is made with
  ♥ by Colorlib"

## Design tokens (from `css/style.css` + live computed styles)

| token | value | where it is used |
|---|---|---|
| `--brand` | **`#007bff`** | hero panel, `.btn-primary`, sub-titles, icons, work hover overlay `rgba(0,123,255,.8)`, active dot, Contact pill fill, footer links, input focus border |
| `--brand-rgb` | `0,123,255` | the three alpha uses above (`.8` overlay, `.8` `:active` shadow) |
| `--ink` | `#000` | `.section-title`, counter numerals, process/service `h3`, footer `h3`, sticky nav links |
| `--body` | **`#808080`** | body copy (`color: gray`), counter labels, footer paragraphs |
| `--surface-light` | **`#f8f9fa`** | services band (`.bg-light`) |
| `--surface-footer` | **`#fafafa`** | footer band |
| `--ghost` | `whitesmoke` = **`#f5f5f5`** | `.process .number` numerals |
| `--rule` | `#edf0f5` | `.border-top` divider (footer copyright rule) |
| `--dot-idle` / `--dot-active` | `#e6e6e6` / `#007bff` | carousel dots (10 px circles) |
| `--field-border` | `#ced4da` | `.form-control` 1 px border |
| `--field-text` / `--placeholder` | `#495057` / `#6c757d` | inputs / placeholders |
| `--on-brand` | `#fff` | hero type, plate heading, button labels, service dots |
| `--on-brand-muted` | `rgba(255,255,255,.5)` (hero p), `rgba(255,255,255,.55)` (plate p), `rgba(255,255,255,.7)` (work category) | blue-band secondary copy (three distinct alphas — keep them distinct) |
| `--scrim` | `rgba(0,0,0,.6)` | mobile drawer backdrop |
| `--radius` | **4 px** (0 px on the footer subscribe pair) | buttons, inputs, Contact pill, textarea |
| `--radius-pill` | `50%` | the **only** 50 % radii in the sheet: the 10 px carousel dots |
| `--font` | `"Muli", -apple-system, …, sans-serif` | everything (single family; headings 900, body 300, numerals 700) |
| `--shadow-card` | none | services/process cards have **no** shadow and **no** radius |
| `--shadow-photo` | `0 10px 50px -5px rgba(0,0,0,.4)` | hero portrait only |
| `--shadow-sticky` | `4px 0 20px -5px rgba(0,0,0,.2)` | sticky header only |
| `--section-pad` | `176px` desktop / `112px` ≤991 / `80px` ≤767 | every `.site-section` |
| `--about-offset` | `margin-top:10rem` (160 px) | `.section-1` pulls away from the hero |

## Requirements

### Requirement: Page shell and document head

Uptempo SHALL render **one page** whose bands appear in the source's order —
header, hero, about, work, process, services, contact, footer — inside a
document with `<html lang="en">`, a `<title>` and meta description written for
**Uptempo**, and it SHALL carry no ColorLib provenance in any app file.

#### Scenario: Bands render in the source order at 1440

- **GIVEN** Uptempo is rendered at 1440×900
- **WHEN** the page has loaded
- **THEN** the eight bands SHALL appear in the order header → hero → about → work → process → services → contact → footer
- **AND** the document height SHALL be within ±5 % of the reference's 7,446 px at a 900 px viewport
- **AND** exactly one `h1` SHALL exist on the page (the hero headline)
- **AND** the header SHALL overlay the hero (`position:absolute`, 0 px in flow), not push it down

#### Scenario: No ColorLib provenance in app files

- **GIVEN** the built app's source and bundle
- **WHEN** either is searched (case-insensitive) for the ColorLib name, `amplify`, `preview.colorlib.com` or the source URL
- **THEN** no match SHALL be found anywhere in `apps/uptempo`
- **AND** the footer SHALL link `https://www.componentdock.com/` reading "Component Dock"

#### Scenario: Single-page navigation is complete

- **GIVEN** the five navigation affordances (Home, Work, Process, Services, Contact)
- **WHEN** each is activated
- **THEN** the matching section (`#home`, `#work`, `#process`, `#services`, `#contact`) SHALL be scrolled into view over ~600 ms
- **AND** the URL hash SHALL update to that section
- **AND** no navigation affordance SHALL point at a page that does not exist

### Requirement: Hero with a 70 % blue panel and a floating portrait

The hero SHALL be a full-viewport band (`100vh`, minimum 900 px) carrying a
hard-edged `#007bff` panel across exactly its left **70 %** (measured 1008 px at
1440), white Muli type on that panel, an outlined white CTA, and a 600 px square
portrait floating at the right gutter.

#### Scenario: Hero composition at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the hero renders
- **THEN** the band SHALL be at least 900 px tall
- **AND** the `#007bff` panel SHALL cover the left 70 % with square corners and no gradient
- **AND** the `h1` SHALL be 48 px / 900 / white and wrap to two lines inside a 350 px box
- **AND** the paragraph SHALL be 17.6 px / 300, `rgba(255,255,255,.5)`, capped at 400 px
- **AND** the CTA SHALL be an outlined 12 px / 900 uppercase button with a 1 px `#f8f9fa` border, 16 px 48 px padding and 4 px radius
- **AND** the portrait SHALL be 600×600 at the right-10 % gutter, vertically centred, with `0 10px 50px -5px rgba(0,0,0,.4)`

#### Scenario: The panel goes full-bleed on mobile

- **GIVEN** a 390 px viewport
- **WHEN** the hero renders
- **THEN** the blue panel SHALL span the full width
- **AND** the headline, paragraph, CTA and portrait SHALL stack without overlapping text
- **AND** the portrait SHALL stay inside the panel's bounds (documented delta #5: the source leaves it left-flush and 32 px below the panel)

#### Scenario: The header is legible over both halves of the hero

- **GIVEN** the hero with a blue left panel and a white right half
- **WHEN** the header renders at the top of the page
- **THEN** the wordmark and the four nav labels SHALL be white
- **AND** the Contact pill SHALL have a 1 px `#007bff` border, a dark label, 4 px radius and a hit area at least 40 px tall

### Requirement: Sticky header, scrollspy and mobile drawer

The header SHALL pin after 100 px of scroll, invert to a white bar with black
type and a `4px 0 20px -5px rgba(0,0,0,.2)` shadow, mark the section in view, and
on small viewports SHALL open a modal drawer over a `rgba(0,0,0,.6)` scrim.

#### Scenario: The header turns white after 100 px of scroll

- **GIVEN** the page is at the top
- **WHEN** the user scrolls past 100 px
- **THEN** the header SHALL pin to the top, paint white, gain `4px 0 20px -5px rgba(0,0,0,.2)`, flip the wordmark and links to `#000`, and shrink its vertical padding from 24 px to 10 px
- **WHEN** the user scrolls back to the top
- **THEN** the header SHALL return to its transparent, 24 px state

#### Scenario: Scrollspy marks the section in view

- **GIVEN** the header is pinned
- **WHEN** the contact band enters the viewport (300 px offset)
- **THEN** the Contact pill SHALL become a solid `#007bff` pill with white text
- **AND** exactly one nav item at a time SHALL carry the 2 px active underline

#### Scenario: The drawer is modal and keyboard-operable

- **GIVEN** a viewport below the `lg` breakpoint
- **WHEN** the hamburger is activated
- **THEN** a drawer SHALL open over a `rgba(0,0,0,.6)` scrim with the five section links as full-width rows
- **AND** `Escape` SHALL close it, Tab SHALL cycle inside it, and focus SHALL return to the hamburger
- **AND** the body SHALL not scroll behind it
- **AND** activating a drawer link SHALL close the drawer and scroll to that section

### Requirement: About band with four counters and an overlapping blue plate

The about band SHALL open 160 px below the hero, hold an eyebrow + 48 px heading
+ grey paragraph and a 2×2 counter grid in its left column, and float a 300 px
`#007bff` plate over the top-right corner of a 540×679 photo.

#### Scenario: Two-column composition at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the about band renders
- **THEN** the band SHALL sit 160 px below the hero (`margin-top:10rem`) with 176 px of vertical padding
- **AND** the left column (≈475 px) SHALL carry an 11.2 px / 900 uppercase `#007bff` eyebrow, a 48 px / 900 black heading capped at 450 px, a grey paragraph and four counters
- **AND** each counter SHALL show a 32 px `#007bff` icon, a 56 px / 700 black numeral and a 16 px grey label
- **AND** the plate SHALL be 300 px wide with 30 px padding, `#007bff`, a 19.2 px / 500 white heading and `rgba(255,255,255,.55)` copy, overhanging the photo's top and right edges by 20 %

#### Scenario: The plate reflows instead of overhanging on mobile

- **GIVEN** a viewport at or below 991 px
- **WHEN** the band renders
- **THEN** the plate SHALL become a static full-width block above the photo
- **AND** the counters SHALL stack to one per row

#### Scenario: Counters stay static

- **GIVEN** the four counters
- **WHEN** the band scrolls into view
- **THEN** the numerals SHALL read 260 / 2,500 / 87 / 920
- **AND** they SHALL NOT tick, count up or animate (the source has no counter plugin on this page)

### Requirement: Work carousel with five full-bleed cards

The work band SHALL run a full-bleed five-card carousel whose cards are exactly
one quarter of the viewport at 1440 (360×453), reveal a blue overlay and caption
on hover/focus, and open a modal with the enlarged image.

#### Scenario: Carousel anatomy at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the work band renders
- **THEN** four cards SHALL be visible at 360 px each with **no gaps** and a **0.795** aspect ratio
- **AND** each card SHALL be a link whose accessible name combines its title and category
- **AND** the carousel SHALL hold five slides and a centred dot row of five 10 px circles (`#e6e6e6` idle, `#007bff` active) 30 px below the cards

#### Scenario: Hover reveals the blue overlay and the caption

- **GIVEN** a card at rest
- **WHEN** it is hovered or focused
- **THEN** a `rgba(0,123,255,.8)` overlay SHALL fade in and the card SHALL scale to 1.07
- **AND** a caption SHALL slide in from `top:10%; left:10%` — a 16 px / 900 white title over a 12.8 px `rgba(255,255,255,.7)` category
- **AND** the same treatment SHALL be reachable by keyboard focus

#### Scenario: Cards open a real dialog

- **GIVEN** any work card
- **WHEN** it is activated
- **THEN** a dialog SHALL show the enlarged placeholder image
- **AND** `Escape` and a visible close control SHALL dismiss it, focus SHALL return to the card, and the dialog SHALL declare `aria-modal`

#### Scenario: Autoplay is polite

- **GIVEN** the carousel autoplays every ~5 s
- **WHEN** the pointer hovers, focus enters, or the tab is hidden
- **THEN** autoplay SHALL pause
- **AND** it SHALL NOT start under `prefers-reduced-motion: reduce`
- **AND** prev/next controls with accessible names SHALL reach every slide

### Requirement: Process band with three ghost-numeral cards

The process band SHALL present three equal beats whose 160 px `whitesmoke`
numerals sit behind — not beside — a blue icon, a 24 px title and a paragraph,
with no card surface at all.

#### Scenario: Three columns at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the process band renders
- **THEN** three 350 px columns SHALL sit at a 390 px pitch with no background, border or shadow
- **AND** each column SHALL carry a 160 px / 900 `#f5f5f5` numeral (01/02/03) offset 30 px left and 50 px down, painted behind its content
- **AND** a 56 px `#007bff` icon, a 24 px / 700 black title (Research / Building / Launch) and a grey paragraph SHALL sit above that numeral

#### Scenario: Beats stack on mobile

- **GIVEN** a 390 px viewport
- **WHEN** the band renders
- **THEN** the three beats SHALL stack in numeric order without overlapping text
- **AND** the ghost numerals SHALL remain behind their own beat even when they clip

### Requirement: Services carousel on the light surface

The services band SHALL paint `#f8f9fa`, hold six white borderless cards with
64 px padding inside a carousel that shows four at 1440 with 30 px gaps, and
collapse to touching edge-to-edge cards on single-card view.

#### Scenario: Four cards on `#f8f9fa` at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the services band renders
- **THEN** the band background SHALL be `#f8f9fa`
- **AND** four white cards SHALL be visible at 338 px wide with 30 px gaps and 64 px padding
- **AND** each card SHALL show a 56 px `#007bff` icon, a 24 px / 700 title and a grey paragraph
- **AND** the cards SHALL have no border, no radius and no shadow
- **AND** six cards SHALL exist in total with a dot row below them

#### Scenario: Cards touch on single-card view

- **GIVEN** a viewport below 600 px
- **WHEN** one card is visible
- **THEN** the inter-card margin SHALL be 0, so the card meets the band edge with only its own padding as breathing room (documented delta #12)

### Requirement: Contact band with a centred form

The contact band SHALL centre a 665 px form column that uses 43 px fields with a
1 px `#ced4da` border and 4 px radius, a 10-row textarea and a
`#007bff` submit, and it SHALL validate locally without any network request.

#### Scenario: Form composition at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the contact band renders
- **THEN** a 665 px column SHALL be centred in the 1140 px container
- **AND** the form SHALL show First name + Last name on one row, then Subject, then Email, then a ≈254 px textarea, then a 302×52 `#007bff` submit reading "Send Message"
- **AND** every field SHALL be 43 px tall with a 1 px `#ced4da` border, 4 px radius and a `#6c757d` placeholder
- **AND** focus SHALL change the border to `#007bff` with no glow

#### Scenario: Validation is local and accessible

- **GIVEN** the form is empty
- **WHEN** it is submitted
- **THEN** each required field SHALL report an error through `aria-invalid` and a `role="alert"` message, and focus SHALL move to the first invalid field
- **AND** no network request SHALL be made
- **WHEN** every field is valid and the form is submitted
- **THEN** an inline success message SHALL appear and the fields SHALL clear

### Requirement: Footer with three columns and the Component Dock credit

The footer SHALL paint `#fafafa` with 7em padding, hold three columns of
`#808080`/`#007bff` content under 14.4 px uppercase titles, a square joined
subscribe control, and a credits rule that names Component Dock.

#### Scenario: Footer composition at 1440

- **GIVEN** a 1440 px viewport
- **WHEN** the footer renders
- **THEN** the background SHALL be `#fafafa` with 123.2 px vertical padding
- **AND** three columns SHALL measure ≈380 / 285 / 380 px
- **AND** the column titles SHALL be 14.4 px / 900 uppercase black with 1.6 px tracking
- **AND** the four links SHALL be `#007bff` and SHALL scroll to their sections
- **AND** the subscribe row SHALL be a 255 px input joined to a 95 px `#007bff` button, both 43 px tall with **0 radius**
- **AND** a 1 px `#edf0f5` rule SHALL separate a centred copyright line that credits "Component Dock" with `https://www.componentdock.com/`

#### Scenario: Newsletter validates without a request

- **GIVEN** the subscribe input
- **WHEN** an invalid address is submitted
- **THEN** an inline `role="alert"` error SHALL appear and no request SHALL be made
- **WHEN** a valid address is submitted
- **THEN** a success message SHALL replace the error and the input SHALL clear

### Requirement: Responsive behaviour and motion

Uptempo SHALL stay free of horizontal overflow at every breakpoint, SHALL scale
its section rhythm with the source's own chain (176 → 112 → 80 px), and SHALL
confine motion to one-shot reveals, hover states and pausable carousels.

#### Scenario: No horizontal overflow

- **GIVEN** viewports of 1440, 991, 767 and 390 px
- **WHEN** each page is measured
- **THEN** `document.documentElement.scrollWidth` SHALL equal `clientWidth`
- **AND** no band SHALL be wider than the viewport (the source itself measures 1440/1440 and 390/390)

#### Scenario: The rhythm scales with the source's own chain

- **GIVEN** the section rhythm
- **WHEN** the viewport crosses 991 px and 767 px
- **THEN** the vertical section padding SHALL step 176 → 112 → 80 px
- **AND** `.section-title` SHALL drop from 48 px to 24 px at 991 px while the hero `h1` keeps 48 px on desktop (documented delta #4: the mobile clamp to 34 px is an intentional deviation)

#### Scenario: Motion is limited to reveals and hover

- **GIVEN** the reveal-once nodes (hero column, counters, blue plate, process cards, contact form)
- **WHEN** each enters the viewport
- **THEN** it SHALL fade/rise once and stay visible
- **AND** there SHALL be no parallax anywhere (the source loads stellar and binds nothing)
- **AND** under `prefers-reduced-motion: reduce` no reveal, scale or autoplay SHALL run

## Verification checklist

- [ ] `apps/uptempo` exists, package `@free-react-templates/uptempo`, `homepage`
      and `public/CNAME` = `uptempo.free.componentdock.com`
- [ ] Eight bands in source order; exactly one `h1`
- [ ] Hero panel measures 70 % of the viewport (100 % below 992 px) with square
      corners
- [ ] Hero portrait 600 px, right-10 % gutter, `0 10px 50px -5px rgba(0,0,0,.4)`
- [ ] Header transparent at 0 px, white + `4px 0 20px -5px rgba(0,0,0,.2)` +
      10 px padding past 100 px
- [ ] Contact pill: outlined default, filled `#007bff`/white when the contact
      band is in view
- [ ] Mobile drawer: scrim, focus trap, `Escape`, focus return, scroll lock
- [ ] Four counters (260 / 2,500 / 87 / 920) static, 2×2 desktop / 1-up mobile
- [ ] Blue plate 300 px with 30 px padding, −20 %/−20 % overhang desktop,
      static on mobile
- [ ] Work carousel: five slides, 360×453 at 1440, no gaps, hover overlay
      `rgba(0,123,255,.8)` + scale 1.07 + caption, five dots, dialog opens
- [ ] Process: three columns, 160 px `#f5f5f5` numerals behind the icons
- [ ] Services: six cards on `#f8f9fa`, white, 64 px padding, no shadow/radius,
      30 px gaps desktop
- [ ] Contact form: 665 px column, 43 px fields (`#ced4da`, 4 px radius,
      `#6c757d` placeholder, `#007bff` focus), 10-row textarea, 302×52 submit
- [ ] Footer: `#fafafa`, three columns, 0-radius subscribe pair, `#edf0f5` rule,
      Component Dock credit link
- [ ] `scrollWidth === clientWidth` at 1440 / 991 / 767 / 390
- [ ] Section padding 176 / 112 / 80, `.section-title` 48 → 24 at 991
- [ ] `prefers-reduced-motion` disables reveals, scale and autoplay
- [ ] No `colorlib`/`amplify` string in `apps/uptempo` (source or bundle)
- [ ] `openspec validate template-uptempo --type spec` passes
- [ ] `scripts/verify-app.sh uptempo` green (typecheck, lint, 100 % coverage,
      build)
- [ ] Rows 2287 / 2379 / 2496 flipped to `[x]` with the
      `uptempo.free.componentdock.com` link **after** merge (implementer's job)
