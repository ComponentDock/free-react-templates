# Template: Portray (Personal Resume / Portfolio)

## Purpose

Portray is a personal résumé / portfolio landing page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Jackco"** design, built under a DIFFERENT name (**Portray** — one
lowercase word meaning "to present a likeness of", the page's own subject;
single word, kebab-case-safe, no collision with `apps/`,
`openspec/specs/template-*`, `docs/templates/`, any bold name in `TEMPLATES.md`,
or any substring in the repository: `git grep -il portray origin/main` =
**0 hits**; `grep -c 'template/portray/' TEMPLATES.md` = **0**; and the name is
not a ColorLib slug — `colorlib.com/wp/template/portray/`,
`preview.colorlib.com/theme/portray/` and
`preview.colorlib.com/theme/bootstrap/portray/` all return **404**) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `jackco`
- **ColorLib page**: https://colorlib.com/wp/template/jackco/
- **Live preview**: https://preview.colorlib.com/theme/jackco/
  (HTTP 200, **32,334 B** HTML; theme sheet `assets/css/style.css` **60,698 B**;
  Bootstrap **5.0.0-beta1** (`bootstrap.min.css` 24,548 B / `bootstrap.min.js`
  62,411 B) + jQuery **1.12.4** + Owl Carousel + Slick + SlickNav + Magnific
  Popup + Nice Select + CounterUp + `animate.min.css` + Font Awesome 5 +
  Themify Icons; page `<title>` reads **"Resume | Template"**, not the slug. No
  alias — the slug-only path is the live design. `/downloads/free/jackco.zip`
  returns **404**, so the live preview is the only reference.)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/jackco-colorlib-template.jpg
  (served **AVIF** 1200×946, 78,345 B despite the `.jpg` name; decoded to PNG
  and inspected — top fold only)
- **Package**: `@free-react-templates/portray`
- **Deploy target**: `portray.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/jackco/' TEMPLATES.md` = **3** (lines **593**, **2398**
and **2523**). All three rows are currently marked `[x]` and credit the
**`dossier`** app, but `openspec/specs/template-dossier/spec.md` names ColorLib
**"Alias"** as its source — `jackco` is therefore a false `[x]` (bucket 2,
APP-WRONG-DESIGN, in `docs/row-multiplicity.md`; measured exclusive-copy
evidence `row-excl / spec-excl` = **1 / 25**, i.e. the app's copy matches Alias
25-to-1 and shares a single boilerplate phrase with this design). No spec in
`openspec/specs/` names this slug today (`grep -rl 'wp/template/jackco/'` = 0).

The prep stream writes documentation only: the implementer re-opens ALL THREE
rows `[x]` → `[ ]` on its `feat/template-portray` branch before building, then
marks them `[x]` with `https://portray.free.componentdock.com` after merge.
**Do not touch `dossier`** — it stays credited to Alias.

## Design reference (replication findings)

- **Original:** ColorLib "Jackco" — a single-page **personal résumé / CV /
  portfolio** theme for a creative director, page title "Resume | Template".
  Signature look: a **lime-green hero** (`#5AFF80`) with a **neon-green disc**
  (`#01FF56`) baked into a cut-out portrait PNG, a transparent 99px header
  floating on top of it with a serif wordmark and divider-separated 20px nav
  links, an **outlined square "Hire Me" button**, a photographic about band with
  a **white 100px-padded card**, four **neon progress bars** on a 10% green
  track, an **expertise block that is a solid `#01FF56` box with one dark and two
  30%-ink headings and a white 27px rotated notch on its right edge**, a
  **four-row experience and two-row education timeline** (60px serif headings,
  1px `#E2E2E2` hairlines, indented 9-of-12 column), a **full-bleed 662px green
  quote band** split into photo + 40px light quote, and a **full-green footer**
  that carries a serif statement, an underline-field contact form, a contact
  list and three circular social buttons.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/jackco/` —
  **5 `<section>`** + `<header>` + `<footer>`, **15 `<img>`**, **1 `h1`**, 8
  `h2`, 6 `h3`, 2 `h4`. Bootstrap 5.0.0-beta1 grid + jQuery 1.12.4 plugins
  (Owl Carousel for the gallery strip, Slick for the hero "slider" that has one
  slide, SlickNav for the mobile menu, Magnific Popup for gallery zoom, Nice
  Select, CounterUp, `jquery.validate` + `ajaxchimp` for the form, animate.css +
  WOW for reveals). Not Tailwind.
- **Anchor census (measured on the live DOM):** **32** anchors — **17 dead
  `href="#"`**, **2 `index.html`** (wordmark + Home), **6 inner pages**
  (`about.html`, `portfolio.html`, `blog.html`, `blog_details.html`,
  `elements.html`, `contact.html`), **5 gallery pop-ups**
  (`assets/img/gallery/gallery{1,2,3,4}.jpg`, gallery2 twice),
  **1** `https://www.fb.com/sai4ull` and **1** `https://colorlib.com` credit.
  Nothing 404s; `index.html` is byte-identical to the directory URL (a no-op
  link).
- **Inner pages are LIVE and are the authoritative reference** for what a
  multi-page theme puts behind each nav item (all HTTP 200, fetched for this
  spec):
  | page | bytes | what it holds |
  |---|---|---|
  | `about.html` | 27,878 | hero band "About Me" + the same about card + 4-row Experience + 2-row Education + footer |
  | `portfolio.html` | 14,288 | hero band "Portfolio" + a 4-image grid under the label "Crafted I have created" (gallery1-4) |
  | `blog.html` | 31,892 | hero band "Blog" + five post cards (15 Jan, "Google inks pact for new 35-storey office", Travel/Lifestyle, 03 Comments) + sidebar (Category, Recent Post, Tag Clouds) |
  | `blog_details.html` | 22,718 | hero band "Blog Details" + article, author block, 05 Comments, Leave a Reply |
  | `contact.html` | 48,379 | hero band "Contact" + Google map + "Get in Touch" details + form (name, email, subject, message) |
  | `elements.html` | 40,914 | hero band "Elements" + the theme's UI kit (text samples, buttons, tables, galleries) — **this page is why `style.css` also carries the vendor palette `#2845BA`/`#f9f9ff`, which is NOT part of the brand** |
- **Section order in the DOM (measured tops/heights at 1440×1000, document
  height 6,017px):**
  | # | section (class) | top | height |
  |---|---|---|---|
  | 1 | `header-area header-transparent` (**absolute**, over the hero) | 0 | 99 |
  | 2 | `slider-area gray-bg` / `.single-slider.slider-height` | 0 | 900 |
  | 3 | `about-area section-padding section-img-bg2` (photo bg + white card) | 900 | 1,072 |
  | 4 | `experience-top section-padding` ("My Expertise") | 1,972 | 684 |
  | 5 | `may-about bottom-padding` ("Experience", 4 rows) | 2,656 | 1,056 |
  | 6 | `visit-tailor-area` (green quote band, photo + quote) | 3,711 | 662 |
  | 7 | `may-about section-padding` ("Education", 2 rows) | 4,373 | 767 |
  | 8 | `instagram-area` (5-slide Owl gallery) | 5,141 | **1** (collapsed, see deltas) |
  | — | `footer` (`#01FF56`) | 5,137 | 880 |
- **Header geometry:** 99px tall, `position: absolute`, `z-index: 9`,
  transparent, `padding: 0 88px`, `border-bottom: 1px solid rgba(21,3,3,0.2)`;
  nav links 20px Chivo `#150303`, `padding: 34px 42px`, each with a
  `border-left: 1px solid rgba(21,3,3,0.2)` divider, hover fill `#00E64D`.
  Because the header is absolute, the **hero starts at y=0 behind it** — the
  green band runs edge to edge under the nav.
- **Screenshot note:** the TEMPLATES.md image is the top fold — "Jack Co."
  serif wordmark at the left of a white-ish transparent strip over the green,
  `Home · About · Portfolio · Blog · Contact` with vertical rules and an
  underlined "Fire Me An Email", then the hero: serif `Visual Design & Art
  Director` on two lines, the 40px light subline, the outlined `HIRE ME`
  button, and the bearded portrait sitting inside a **bright `#01FF56` disc**
  on the lighter `#5AFF80` band. Below the fold line the photo band with the
  white `ABOUT MYSELF` card and its green `DOWNLOAD RESUME` button is visible.
  Everything in that fold is accounted for by the DOM/CSS/tokens below.
- **Copy:** the source is a real (not lorem) résumé for "Jack": hero claim,
  about statement, three practice headings, four experience entries at
  "Colorlib", two education entries (Dalian University, School of California),
  one testimonial-style quote, footer statement, address/phone/e-mail. Only the
  body paragraphs under the timeline rows are lorem ipsum. Keep the same _kind_
  of content per block and the same sentence skeleton; rename the persona and
  the brand to **Portray** everywhere — the ColorLib wordmark and credit must
  not appear in `apps/`.

### Source defects and documented deltas (do not copy these)

1. **The gallery band collapses to 1px in the live render.** The markup holds
   five `.single-instagram` slides in `.owl-carousel.instagram-active`, the CSS
   for the hover state is complete, and `jQuery.fn.owlCarousel` exists — but the
   initialised band measures **1px** tall (slides 0px, `.instagram-area` top
   5,141 while the footer starts at 5,137), so **no gallery is visible at all**:
   Education is followed directly by the green footer. Render the band
   deliberately (see the Gallery requirement) instead of reproducing the
   collapse.
2. **The source overflows horizontally at 390px**: `scrollWidth` 399 vs
   `clientWidth` 390 (**9px**). The recreation must not.
3. `body` resolves to Bootstrap's `rgb(33,37,41)` because `p{color:#150303}`
   never reaches the body element — every visible text run is ink only because
   it sits in a `p`/heading. Set the ink colour on the page root.
4. `.btn` contains the broken declaration `font-weight:7\t00 !important` (a tab
   inside the number) — the dark button therefore inherits the Shippori default
   weight. Use weight 700.
5. The progress bars carry `aria-valuenow="25"` while their inline widths are
   **60% / 89%**; the widths are what renders. Use the widths and set
   `aria-valuenow` to match.
6. `style.css` also ships the **Elements demo kit** (`#2845BA`, `#f9f9ff`,
   `#4cd3e3`, `#f4e700` …) used only by `elements.html`. It is **vendor
   leftover, not brand** — none of it appears on the home page.
7. Heading levels skip: the footer statement is an `h2` and the two form titles
   are `h4`. Use `h3` for the form titles in the recreation.

## Design tokens (from preview `style.css` + live computed styles)

- **Fonts:** two families, imported by the sheet's own
  `@import url("https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;700;900&family=Shippori+Mincho:wght@400;500;600;700;800&display=swap")`
  (verified **HTTP 200** for the combined URL and for each family alone) —
  **Chivo** (`Chivo, sans-serif`) for body, sublines, quotes, nav and labels at
  weights **300 / 400 / 700 / 900**, and **Shippori Mincho** (`"Shippori
  Mincho", serif`) for every heading and the wordmark at **400 / 500 / 600 /
  700 / 800**. Body **16px**, `p` **16px / ink / line-height 1.4** (the sheet
  declares 30px then overrides to 1.4).
- **Neon green (primary):** **`#01FF56`** — the hero disc, the eyebrow labels,
  the progress-bar fill, the expertise box, the quote band, the footer
  background, `.btn_02`, `.submit-btn`, the submenu panel, the back-to-top
  circle, the `border-btn` icon glyph. It is a **flat, unshaded neon** — never
  darken it for text on white (see contrast note below).
- **Band green:** **`#5AFF80`** — the hero band (`.slider-height`) and the
  sticky header fill. Deliberately one step lighter than the disc so the
  portrait's circle reads.
- **Nav hover green:** **`#00E64D`** — the only darkened green in the system,
  used solely for `.main-menu li:hover > a` and the sticky variant.
- **Ink:** **`#150303`** — headings, paragraphs, buttons, footer text, the
  gallery hover wash (`#150303` at **0.3**), and the two divider alphas
  `rgba(21,3,3,0.2)` (header/nav rules, 1px) and `rgba(21,3,3,0.4)` (footer
  input underlines, 1px).
- **Neutrals:** `#656565` (section intro copy, 18px/400), `#928888` (the "at"
  in an experience row), `#E2E2E2` (timeline hairline, 1px, first row only),
  `#EAEAEA` (select border), `#A3A3A3` (select chevron), `#F1FBFF` (`gray-bg`,
  the hero section's fallback fill behind `.slider-height`), `#F2F4F8`
  (`.section-bg`), `#FFFFFF` (the about card and the page), `#F7F7F7` (the
  preloader wash).
- **Skill track:** background `rgba(1,255,86,0.1)`, **8px** tall,
  `border-radius: 4px`; fill `#01FF56`, `border-radius: 7px`.
- **Buttons (square language — 0 radius everywhere on this page):**
  - `.btn` (dark, used for the footer submit): `#150303` fill, white 18px
    Shippori 700 text, `padding: 32px 58px`, `border-radius: 0`; hover sweeps a
    white `::before` (`scaleX(0)` → `1`) and turns the label ink. Measured
    238×64 in the footer.
  - `.border-btn` (outline, used for HIRE ME and the footer résumé link):
    `1px solid #150303`, transparent fill, **ink** text, UPPERCASE,
    `18px/500`, `letter-spacing: 1px`, `padding: 15px 34px` (hero variant
    `20px 70px`, measured 224×69); hover sweeps an ink `::before` and turns the
    text white. Note `font-family` is **Chivo** here, not the serif.
  - `.btn_02` (green, the about card's CTA): `#01FF56` fill, **ink** text,
    UPPERCASE 18px, `padding: 16px 44px`, 0 radius (measured 269×61), hover =
    transparent fill + `1px solid #150303`.
  - `.boxed-btn` (secondary outline): white fill, `1px solid #01FF56`, green
    UPPERCASE 14px Shippori, `padding: 18px 44px`; hover inverts.
- **Shape language:** everything on the home page is **square** (0 radius);
  the only circles are the **50px social buttons**, the **40px back-to-top**
  control and the 4/7px progress radii — plus the **179px-radius disc inside the
  hero portrait**. The expertise box adds a **27px white square rotated 45°**
  hanging off its right edge (`right: -15px; top: 80px`).
- **Type scale (measured):** hero `h1` **80px / 400 / line-height 96px /
  letter-spacing −2px / ink** (62px ≤1400, 73 ≤1199, 57 ≤991, 56 ≤767, 45
  ≤575); hero subline **40px / 300 / 1.2 / ink** (33px ≤991, 25 ≤575); section
  `h2` **40px / 400 / 1.3** (`.section-tittle`, 30px ≤1199, 31 ≤767, 24 ≤575);
  the two timeline headings **60px / 400** (`.section-tittle2`, 40px ≤767);
  expertise box headings **40px / 400** (first ink, the rest
  `rgba(21,3,3,0.3)`, `margin-bottom: 37px`); timeline row title **30px / 400**,
  date 16px/300, "at <company>" 20px (`at` in `#928888`, the link ink 20px/400
  with a 10px-padded external-link glyph); eyebrow **16px / 400 / UPPERCASE /
  letter-spacing 1.6px / green**; quote **40px / 300** (33px ≤991, 22 ≤575);
  footer form titles **20px / 400 Chivo / UPPERCASE / ink**; footer statement
  `h2` **40px / 400**; footer links 16px/300 ink, underlined on hover;
  copyright 15px/300.
- **Rhythm:** `.section-padding` = `120px 0` (100 ≤991, 70 ≤767),
  `.bottom-padding` = `padding-bottom: 120px`, footer `padding-top: 99px`, the
  quote band is a fixed **662px** flex row, the hero is a fixed **900px**.
  Container is Bootstrap's `1320px` at `xxl`, card `max-width: 1076px`.
- **Breakpoints in the source:** `1400 / 1199 / 991 / 767 / 575`. At **≤991**
  the nav collapses into SlickNav (a `MENU +` button top-right), section padding
  drops to 100px, the expertise box padding to `60px 15px 20px 15px` and the
  quote to 33px; at **≤767** the hero portrait (`display: none`), the quote band
  stacks (photo `100%` wide, 300px tall, then the quote at `100%` with 50px/30px
  padding), the about card goes to `padding: 50px 20px`, section padding 70px;
  at **≤575** the hero `h1` is 45px and the timeline headers 40px.
- **Mobile render (390×844):** document **6,203px**; hero 900px tall with the
  portrait hidden; `MENU +` replaces the nav; the about card stacks the eyebrow,
  statement, green CTA and the four skill bars in one column; the expertise
  green box sits **above** its two paragraphs and only its first heading is
  legible (the other two stay at 30% ink on green); timeline rows stack title +
  date over the company link; the quote band puts the photo above the quote;
  the footer stacks form → contact → social. **The source is 9px wider than the
  viewport** (399 vs 390) — fix, don't copy.

## Requirements

### Requirement: Transparent header over the hero

A **99px** header SHALL be `position: absolute` at the top of the page
(`z-index: 9`), with **no fill**, `padding: 0 100px` at ≥1024 (the source's
88px plus its 12px container gutter — the wordmark measures x=100 at 1440;
`15px 20px` below) and a `1px solid rgba(21,3,3,0.2)` bottom rule, so the hero's
green band runs underneath it from `y=0`. It SHALL carry the wordmark at the
left and, at the right, five links — **Home, About, Expertise, Portfolio,
Contact** — each **20px Chivo 400 ink** with `padding: 34px 42px` and a
`1px solid rgba(21,3,3,0.2)` **left divider**, plus a separate underlined
**"Fire me an email"** link (20px, ink, `text-decoration: underline`) with a
42px left margin. Hovering a link SHALL fill it **`#00E64D`**.

> **Documented delta (implementer, `feat/template-portray`):** the source's nav
> names `Blog` and hides a `Blog · Blog Details · Elements` submenu behind it,
> but those three inner pages are out of scope for a one-page recreation, so
> every nav item points at a section that exists on this page (`#top`, `#about`,
> `#expertise`, `#portfolio`, `#contact`) and no submenu is rendered. Shipping a
> `Blog` label over a dead `#` anchor would have been the only alternative; the
> header keeps the source's five-divider geometry and the separate email link.

#### Scenario: Header floats on the hero

- **GIVEN** Portray is rendered at 1440px
- **WHEN** the page loads
- **THEN** the header SHALL be 99px tall, transparent and absolutely positioned at the top
- **AND** the hero's `#5AFF80` band SHALL be visible behind and below it
- **AND** a 1px `rgba(21,3,3,0.2)` rule SHALL close the header
- **AND** the wordmark and six right-aligned items SHALL render

#### Scenario: Nav hover and email link

- **GIVEN** the desktop nav is rendered
- **WHEN** the pointer enters a nav link
- **THEN** that link SHALL fill `#00E64D`
- **AND** every nav item SHALL point at a section that exists on the page
- **AND** the separate "Fire me an email" link SHALL open the visitor's mail client

#### Scenario: Mobile menu

- **GIVEN** the viewport is 390px wide
- **WHEN** the page loads
- **THEN** the link row SHALL be replaced by a `MENU +` control at the top right
- **AND** activating it SHALL expand the links with `aria-expanded="true"`
- **AND** choosing a link SHALL close the panel
- **AND** no horizontal scrolling SHALL appear

### Requirement: Hero (900px green band, disc portrait, outlined button)

The hero SHALL be a static **900px** band (700px ≤1199 and ≤991, 600 ≤767, 550
≤575) painted **`#5AFF80`**, holding a left column of **5 of 12**: an `h1` at
**80px / 400 Shippori Mincho / line-height 96px / letter-spacing −2px / ink**
(`Visual Design & Art Director` in the source — rewrite it for Portray), a
subline at **40px / 300 Chivo / 1.2 / ink** (`margin-bottom: 42px`), and an
outlined **`border-btn hero-btn`** (224×69, UPPERCASE 18px/500 Chivo,
`letter-spacing: 1px`, `padding: 20px 70px`, `1px solid #150303`, ink label;
hover fills ink and turns the label white). The right side SHALL be a
**cut-out portrait** anchored to the band's right edge, **938px wide and 900px
tall** at 1440, carrying its own **`#01FF56` circular disc** behind the head
(measured on the render: band `#5AFF80`, disc `#01FF56`), hidden below 768px.
There SHALL be exactly **one** `h1` and the hero SHALL NOT be a rotating
carousel (the source initialises Slick on a single slide).

#### Scenario: Hero composition

- **GIVEN** the hero is rendered at 1440px
- **WHEN** the page loads
- **THEN** the band SHALL be 900px tall on `#5AFF80` starting at y=0
- **AND** the `h1` SHALL render at 80px/400 in Shippori Mincho with −2px tracking
- **AND** the subline SHALL render at 40px/300 in Chivo
- **AND** the outlined square button SHALL render with a 1px ink border
- **AND** the portrait SHALL sit at the right edge on a `#01FF56` disc

#### Scenario: Hero image without network

- **GIVEN** the portrait fails to load
- **WHEN** the page renders
- **THEN** the band SHALL keep its 900px height and the ink headline SHALL stay legible on the green
- **AND** no layout shift SHALL occur

#### Scenario: Narrow hero

- **GIVEN** the viewport is 390px wide
- **WHEN** the hero renders
- **THEN** the `h1` SHALL be 45px and the subline 25px
- **AND** the portrait SHALL be hidden
- **AND** the band SHALL keep a single column with no overflow

### Requirement: About band (photo background + white card + skill bars)

A **120px-padded** band SHALL use a cover photograph as its background
(source: a desk/laptop/hands photo, `section-bg.jpg`) and centre a **white
card** `max-width: 1076px` with `padding: 100px` (80px/50px ≤1199, 60px/50px
≤991, 50px/20px ≤767) holding: a centred eyebrow **"About myself"** (16px,
UPPERCASE, `letter-spacing: 1.6px`, **`#01FF56`**), a centred **`h2` 40px / 400
Shippori / 1.3 / ink** carrying the résumé statement (three lines in the
source, `margin-bottom: 40px`), a **`btn_02`** CTA ("Download resume" in the
source; 269×61, `#01FF56` fill, **ink** text, UPPERCASE 18px,
`padding: 16px 44px`, 0 radius), then a `border-top` row split into **two
columns of two skill bars**: label (`USER REACHERS`, `UI DESIGN`, `WEB DESIGN`,
`ILLUSTRATION`) at **20px / 400 UPPERCASE ink** with the value on the same line,
over an **8px** `rgba(1,255,86,0.1)` track (`border-radius: 4px`) filled
`#01FF56` (`border-radius: 7px`) to **60% / 89% / 60% / 89%**. Below the bars a
centred paragraph. Bars SHALL animate their width on first reveal and SHALL
render final widths when `IntersectionObserver` is unavailable.

#### Scenario: Card content

- **GIVEN** the about band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** the white card SHALL sit on the photo with 100px inner padding
- **AND** the green eyebrow, the serif statement and the green CTA SHALL render centred
- **AND** four skill bars SHALL appear in two columns of two
- **AND** their fills SHALL read 60%, 89%, 60%, 89%

#### Scenario: Bar reveal fallback

- **GIVEN** `IntersectionObserver` is undefined
- **WHEN** the band renders
- **THEN** every bar SHALL render at its final width during render
- **AND** each bar SHALL expose `role="progressbar"` with `aria-valuenow` equal to its width

#### Scenario: Stacked card on mobile

- **GIVEN** the viewport is 390px wide
- **WHEN** the about card renders
- **THEN** it SHALL use 50px/20px padding
- **AND** the eyebrow, statement, CTA and four bars SHALL stack in one column
- **AND** no bar label SHALL wrap out of the card

### Requirement: Expertise (green box with three stacked headings)

A **120px-padded** white band SHALL open with a centred **`h2` "My expertise"**
(40px/400, ink) and then a two-column split: the left column (a **`#01FF56`
box**, measured 636×347, `padding: 60px 65px 20px 65px`, `padding: 60px 15px
20px 15px` ≤767) SHALL stack **three 40px/400 headings** — the first
**`#150303`**, the second and third **`rgba(21,3,3,0.3)`** — separated by
`margin-bottom: 37px`, and SHALL carry a **27px white square rotated 45°** at
its right edge (`right: -15px; top: 80px`). The right column SHALL hold **two
paragraphs** at **18px / 400 / 1.5 / `#656565`** with `padding-left: 30px`.
Below 768px the box SHALL sit above the paragraphs and the notch SHALL be
suppressed.

#### Scenario: Three practice headings

- **GIVEN** the expertise block is rendered
- **WHEN** the user scrolls to it
- **THEN** three headings SHALL render inside one `#01FF56` box
- **AND** the first SHALL be ink and the other two `rgba(21,3,3,0.3)`
- **AND** two grey paragraphs SHALL render beside the box
- **AND** a 27px white rotated square SHALL hang off the box's right edge

#### Scenario: Mobile order

- **GIVEN** the viewport is 390px wide
- **WHEN** the expertise block renders
- **THEN** the green box SHALL come first and the paragraphs below it
- **AND** the notch SHALL not be rendered

### Requirement: Experience timeline (four rows)

A white block (bottom padding only) SHALL render the **`h2` "Experience"** at
**60px / 400** in the full-width first row, then **four** rows indented into a
9-of-12 column (`offset-lg-2`). Each row SHALL be a flex line
(`display: flex; align-items: center; justify-content: space-between;
flex-wrap: wrap`) with a **`1px solid #E2E2E2` top border on the first row
only**, `padding: 15px 0 10px`: on the left the role at **30px / 400 /
1.3 / ink** (`margin-bottom: 19px`) over the period at **16px / 300 / ink**, on
the right **"at <company>"** where "at" is **20px / `#928888`** and the company
link is **20px / 400 / ink / letter-spacing 0.2px** with a 10px-padded
external-link glyph (`#01FF56` on hover → its own colour turns green), and below
the full-width description at **16px / 300 / ink**. Four roles in the source:
User Experience Designer, UI Designer, Illustration Artist, Graphic Designer —
all "March 2020 – Present". Below 768px the rows SHALL stack (role + period,
then company, then description).

#### Scenario: Four rows with a single hairline

- **GIVEN** the experience block is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL render at 60px/400
- **AND** exactly four rows SHALL render in the indented column
- **AND** only the first row SHALL carry a `#E2E2E2` top border
- **AND** each row SHALL show role, period, "at <company>" and a description

#### Scenario: Company link hover

- **GIVEN** a row's company link is rendered
- **WHEN** the pointer hovers it
- **THEN** the link text SHALL turn `#01FF56`
- **AND** the link SHALL be keyboard focusable with a visible focus ring

### Requirement: Green quote band (photo + oversized quote)

A full-bleed **662px** `#01FF56` band SHALL be a two-part flex row: the left
**56%** SHALL be a cover photograph (source: a person at a laptop by a window,
`visit.jpg`, 300px tall when stacked ≤767), and the right **35%** SHALL hold a
quote at **40px / 300 Chivo / ink** (`padding: 20px 40px 20px 80px`; 33px ≤1191,
22px ≤575) including its opening quotation mark. The band SHALL contain **no
heading**, and the quote SHALL be a `blockquote`.

#### Scenario: Split quote band

- **GIVEN** the quote band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** the band SHALL be 662px tall on `#01FF56`
- **AND** the photograph SHALL fill the left 56% and the quote the right 35%
- **AND** the quote SHALL render at 40px/300 in Chivo with an opening quote mark

#### Scenario: Stacked band

- **GIVEN** the viewport is 390px wide
- **WHEN** the quote band renders
- **THEN** the photograph SHALL sit above the quote at full width
- **AND** the quote SHALL render at 22px

### Requirement: Education timeline (two rows)

The same block pattern as Experience SHALL repeat for **Education**: the `h2`
at **60px / 400**, then **two** indented rows with the single first-row hairline
— User Experience Designer at Dalian University and UI Designer at School of
California in the source — each with role, period, "at <institution>" and a
description, stacking below 768px.

#### Scenario: Two education rows

- **GIVEN** the education block is rendered
- **WHEN** the user scrolls to it
- **THEN** the heading SHALL render at 60px/400
- **AND** exactly two rows SHALL render
- **AND** the first row SHALL carry the `#E2E2E2` top border

### Requirement: Gallery strip (five tiles, hover zoom)

A full-bleed strip of **five** square-cropped images (the source uses
`gallery1`–`gallery4` plus one repeat) SHALL follow Education: a single row of
equal tiles with **no gap**, each wrapped in a relative container that on
hover/focus-within shows a **`#150303` overlay at 0.3** and a centred **white
30px zoom glyph** (source: 45% → 48% with a 0.4s ease, glyph is
`aria-hidden`). Each tile SHALL be a real control (`aria-label` naming the
piece) that opens the image in a keyboard-dismissible lightbox; below 768px the
strip SHALL scroll horizontally with snap or wrap to two per row, and tiles
SHALL keep a visible zoom affordance without hover.
*Documented delta:* in the live source this band **collapses to 1px** (Owl
Carousel never sizes its slides), so no gallery is visible there. The
recreation renders the band deliberately — the CSS for its hover state is
complete and it is the only break between Education and the footer.

#### Scenario: Tile hover

- **GIVEN** the gallery strip is rendered at 1440px
- **WHEN** the pointer enters a tile
- **THEN** a `#150303` overlay at 0.3 SHALL appear
- **AND** a white 30px zoom glyph SHALL fade in at the tile's centre

#### Scenario: Keyboard and lightbox

- **GIVEN** a tile is rendered
- **WHEN** the user tabs to it and activates it
- **THEN** a dialog SHALL show the image at full size
- **AND** Escape SHALL close it and return focus to the tile
- **AND** every tile SHALL expose an `aria-label`

#### Scenario: Narrow strip

- **GIVEN** the viewport is 390px wide
- **WHEN** the strip renders
- **THEN** tiles SHALL not overflow the viewport
- **AND** the zoom affordance SHALL be visible without hover

### Requirement: Footer (green, statement, form, contact, attribution)

A **`#01FF56`** footer SHALL open with `padding-top: 99px` and a centred **`h2`
statement at 40px / 400 / ink** (source: "I'm a designer, based in San
Francisco…"), then a `border-top` row with two columns on a `#01FF56` ground:
**left (6 of 12)** an **"Drop a line"** title at **20px / 400 Chivo /
UPPERCASE / ink** over a form of **three underlined inputs** (name, email,
subject — 50px tall, `border: 0`, `border-bottom: 1px solid
rgba(21,3,3,0.4)`, transparent fill, **ink** text/placeholder, `capitalize`) and
a **76px textarea**, followed by a right-aligned **dark `.btn`** submit
("Send message", `padding: 32px 58px`, 18px Shippori 700, 0 radius, white text,
hover white sweep). **Right (4 of 12)** a **"Contact me"** title over three
underlined ink links (street address, phone as `tel:`, e-mail as `mailto:`), an
outlined **`border-btn`** ("Download resume"), and **three 50×50 circular
social buttons** (`rgba(21,3,3,0.1)` fill, white glyphs, `margin-right: 10px`,
hover `#150303` fill with a glyph flip). A **26px-padded** bottom line SHALL
carry the copyright at **15px / 300 / ink** and a link to
**https://www.componentdock.com/** labelled **"Component Dock"**; the source's
ColorLib credit is REPLACED and no `colorlib` string may appear in `apps/`.
Submitting the form SHALL validate name, e-mail format and message, show inline
per-field errors and an inline success message without a page reload.

#### Scenario: Footer composition

- **GIVEN** the footer is rendered at 1440px
- **WHEN** the user reaches the bottom
- **THEN** the band SHALL be `#01FF56` with a centred 40px/400 serif statement
- **AND** the form SHALL hold three underlined inputs, a textarea and a dark submit
- **AND** the contact column SHALL hold three ink links, an outlined button and three 50px social circles
- **AND** the copyright line SHALL sit in a 26px-padded bottom band

#### Scenario: Form validation

- **GIVEN** the footer form is rendered
- **WHEN** the user submits it empty or with a malformed e-mail
- **THEN** inline per-field errors SHALL render and no confirmation SHALL appear
- **AND** a valid submission SHALL render an inline confirmation

#### Scenario: Component Dock attribution

- **GIVEN** the copyright line is rendered
- **WHEN** the user reads it
- **THEN** it SHALL link to https://www.componentdock.com/ labelled "Component Dock"
- **AND** `git grep -i colorlib apps/portray` SHALL return nothing

### Requirement: Sticky header and back-to-top

Past the hero the header SHALL become sticky with a **`#5AFF80`** fill,
`box-shadow: 0 10px 15px rgba(25,25,25,0.1)` and a fade-down reveal, with link
padding reduced to `20px`. A **40×40** `#01FF56` circular back-to-top control
(`border-radius: 50%`, 2px transparent border, ink glyph,
`box-shadow: 0 0 10px 3px rgba(108,98,98,0.2)`) SHALL sit `31px` from the right
and `18px` from the bottom (16px right ≤575), appear after one viewport of
scroll, and smooth-scroll to the top with an accessible name.

#### Scenario: Sticky reveal

- **GIVEN** the page is scrolled past the hero
- **WHEN** the header pins
- **THEN** it SHALL fill `#5AFF80` with the 10px/15px shadow
- **AND** its links SHALL use 20px padding
- **AND** it SHALL stay above the content

#### Scenario: Back-to-top

- **GIVEN** the page is scrolled at least one viewport
- **WHEN** the control is activated
- **THEN** the page SHALL scroll to the top
- **AND** the control SHALL carry an accessible name and a visible focus ring

### Requirement: Motion, accessibility and performance

Reveals SHALL be CSS transitions only (source: animate.css + WOW on the skill
bars, Slick fade on the single hero slide, a 0.3s ease on all links), skipped
under `prefers-reduced-motion`. Every interactive control SHALL be keyboard
reachable with a **visible focus ring** (`2px` offset ring in `#150303`), icon
only controls SHALL carry `aria-label`, decorative glyphs `aria-hidden`, the
document SHALL declare `lang="en"` and expose a skip link to `#main-content`'s
target, heading levels SHALL not skip (the source's `h2 → h4` jump in the
footer is corrected to `h3`), and the page SHALL NOT scroll horizontally at
390px (the source's 9px overflow is a defect).

#### Scenario: Keyboard pass

- **GIVEN** the page is rendered
- **WHEN** the user tabs through it
- **THEN** the wordmark, every nav item, the hero CTA, the about CTA, every company link, every gallery tile and the footer form controls SHALL show a focus ring
- **AND** icon-only controls SHALL announce a name

#### Scenario: Reduced motion

- **GIVEN** the user prefers reduced motion
- **WHEN** the page renders
- **THEN** reveal, bar-fill and smooth-scroll animations SHALL be skipped and final states shown

#### Scenario: Heading order and language

- **GIVEN** the page is rendered
- **WHEN** the document outline is read
- **THEN** there SHALL be exactly one `h1`
- **AND** section headings SHALL descend without skipping levels
- **AND** `<html lang="en">` SHALL be present

## Verification checklist

- [x] `openspec/specs/template-portray/spec.md` is this file; `npm run spec:validate` passes.
- [x] `apps/portray` exists with `package.json` name `@free-react-templates/portray`, `react`/`react-dom` set to `latest` (no exact pin), `public/CNAME` = `portray.free.componentdock.com`, `homepage` = `https://portray.free.componentdock.com`.
- [x] `vite.config.ts` registers `injectUiSource()`; `src/index.css` puts the palette in `@theme` (`--color-neon: #01FF56`, `--color-band: #5AFF80`, `--color-hover: #00E64D`, `--color-ink: #150303`).
- [x] Section order matches the nine-row table (header → hero → about → expertise → experience → quote band → education → gallery → footer) with the measured heights at 1440 (900 / 1,072 / 684 / 1,056 / 662 / 767 / footer 880).
- [x] Header is absolute and transparent over the hero at y=0, 99px, `padding: 0 100px` at ≥1024 (wordmark at x=100 at 1440), with a 1px `rgba(21,3,3,0.2)` bottom rule and left-divided nav links that fill `#00E64D` on hover; sticky variant fills `#5AFF80`.
- [x] Hero: `#5AFF80` band, `h1` 80px/400 Shippori with −2px tracking, 40px/300 Chivo subline, 224×69 outlined square button, portrait with its own `#01FF56` disc, portrait hidden ≤767.
- [x] About: photo background + white `max-width: 1076px` card with 100px padding, green eyebrow (1.6px tracking), 40px/400 statement, `#01FF56` CTA with ink text, four skill bars at 60/89/60/89 on an 8px `rgba(1,255,86,0.1)` track.
- [x] Expertise: `#01FF56` box with three 40px/400 headings (first ink, others `rgba(21,3,3,0.3)`), 27px white rotated notch at `right: -15px; top: 80px`, two `#656565` 18px paragraphs beside it.
- [x] Experience 4 rows / Education 2 rows: 60px/400 headings, single `#E2E2E2` first-row hairline, 30px/400 roles, "at <company>" with `#928888` "at", full-width 16px/300 descriptions.
- [x] Quote band 662px on `#01FF56`, photo left 56% / quote right 35% at 40px/300 Chivo, stacking photo-first ≤767.
- [x] Gallery strip renders five tiles (not the source's 1px collapse) with the 0.3 `#150303` hover wash, white 30px zoom glyph, keyboard-operable lightbox and no overflow at 390px.
- [x] Footer `#01FF56`: statement `h2` 40px/400, "Drop a line" form (three 50px underline inputs + 76px textarea + dark 238×64 submit), "Contact me" list, outlined résumé button, three 50px circular social buttons, 26px bottom line.
- [x] Footer links https://www.componentdock.com/ as "Component Dock"; `git grep -i colorlib apps/portray` = 0 hits.
- [x] No horizontal overflow at 390px (`document.documentElement.scrollWidth === 390`); ink colour set on the page root (not only on `p`); submit uses weight 700.
- [x] Placeholder imagery uses `https://picsum.photos/seed/portray-<n>/<w>/<h>` (deterministic: portrait, about desk, quote photo, five gallery tiles), Chivo + Shippori Mincho loaded via one Google Fonts `<link>`, icons from `lucide-react`.
- [x] `scripts/verify-app.sh portray` passes: typecheck, lint, 100% coverage tests, build.
- [x] Desktop (1440) and mobile (390) renders compared against the reference fold-by-fold; deviations listed in the PR.
- [x] `npm install` run at the repo root so `package-lock.json` registers the workspace; `grep -c "@free-react-templates/portray" package-lock.json` ≥ 1.
- [~] TEMPLATES.md rows **593**, **2398** and **2523** were claimed `[x]` → `[~]` on the branch; the `[~]` → `[x]` flip plus `https://portray.free.componentdock.com` lands in the post-merge bookkeeping commit (prep stream does none of this).
