# Template: Barstone (Law Firm / Attorney)

## Purpose

Barstone is a law-firm / attorney landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free **"Ariclaw"**
design, built under a DIFFERENT name (**Barstone** — one lowercase word built
from "bar" (the legal profession) + "stone" (courthouse masonry); single word,
kebab-case-safe, no collision with `apps/`, `openspec/specs/template-*`,
`docs/templates/`, any bold name in `TEMPLATES.md`, or any substring in the
repository: `git grep -il barstone origin/main` = **0 hits**;
`grep -c 'template/barstone/' TEMPLATES.md` = **0**; and the name is not a
ColorLib slug — `colorlib.com/wp/template/barstone/`,
`preview.colorlib.com/theme/barstone/` and
`preview.colorlib.com/theme/bootstrap/barstone/` all return **404**) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `ariclaw`
- **ColorLib page**: https://colorlib.com/wp/template/ariclaw/
- **Live preview**: https://preview.colorlib.com/theme/ariclaw/
  (HTTP 200, **35,140 B** HTML, sha256 `84c12252569f4b57d721a4e7d032ebddd33bb7e07d957289ba602b44ea323a3e`;
  theme sheet `css/style.css` **192,377 B**, sha256
  `24c5724776aef3e9d2edcb79716df7bda86b1c7be9b3fee55c42a38136bbf80f`;
  Bootstrap 4.3 grid + jQuery 1.12.1 + Popper + Owl Carousel + Slick +
  Magnific Popup + Gijgo + Nice Select + Themify Icons + Flaticon; the page
  `<title>` reads literally **"ariclaw"**, not a title string. No alias — the
  slug-only path is the live design. `/downloads/free/ariclaw.zip` returns
  **404** (a 9-byte `text/plain` body), so the live preview is the only
  DOM/CSS reference; `js/main.js` also 404s while the real bootstrap script is
  `js/custom.js` (**2,619 B**, fetched and read).
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/ariclaw-free-template.jpg
  (served **AVIF** 1200×946, 45,094 B despite the `.jpg` name; decoded to PNG
  and inspected — top fold only)
- **Package**: `@free-react-templates/barstone`
- **Deploy target**: `barstone.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/ariclaw/' TEMPLATES.md` = **2** (lines **896** and
**2116**). Both rows are currently marked `[x]` and credit the **`counsel`**
app, but `openspec/specs/template-counsel/spec.md` names ColorLib **"Whisper"**
as its source — `ariclaw` is therefore a false `[x]` (bucket 2,
APP-WRONG-DESIGN, in `docs/row-multiplicity.md`; measured exclusive-copy
evidence `row-excl / spec-excl` = **1 / 28**, i.e. `counsel`'s copy matches
Whisper 28-to-1 and shares a single boilerplate phrase with this design). No
spec in `openspec/specs/` names this slug today
(`grep -rl 'wp/template/ariclaw/' openspec/specs --include=spec.md` = 0).

The prep stream writes documentation only: the implementer re-opens BOTH rows
`[x]` → `[ ]` on its `feat/template-barstone` branch before building, then
marks them `[x]` with `https://barstone.free.componentdock.com` after merge.
**Do not touch `counsel`** — it stays credited to Whisper.

### Why the name is not the source name

`ariclaw` is the ColorLib wordmark ("Ari" + "Claw", a pun on "claw" for a law
firm), it is the source's own nav logo text, its footer link text and its
e-mail domain (`jevenmartyn@ariclaw.com`). None of that may appear in
`apps/barstone` (AGENTS.md rule 5). The recreation renames the firm to
**Barstone** everywhere: wordmark, page copy, footer brand, e-mail addresses
(`hello@barstone.law`, or a same-shape address), copyright and the footer
attribution.

## Design reference (replication findings)

- **Original:** ColorLib "Ariclaw" — a **law firm / attorney** home page for a
  multi-page Bootstrap 4 theme (7 live inner pages, see below). Signature look:
  a **1000px cream hero** whose cream canvas carries a **diagonal alpha edge**
  (white above the diagonal, cream below) plus faint gold line-art watermarks
  (a gavel, a graduation cap, a script signature), a **cut-out portrait of a
  grey-haired attorney holding a tablet** anchored at the hero's right,
  46% wide; an absolutely positioned **88px header** floating on the cream; a
  **gold gradient square button** (`#ab7636 → #d7af7e → #ab7636`); and four
  bands alternating **white → cream `#f3f1ef` → white → cream**, with one
  **solid gold `#ab7636` consultation strip** and a **navy `#162b45` footer**.
  The type system is all serif (Cardo) except the hero headline (Rufina) and
  every paragraph (Roboto).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/ariclaw/` —
  **7 `<section>`** + `<header>` + `<footer>`, **25 `<img>`**, **1 `h1`**,
  6 `h2`, 6 `h3`, 4 `h4`, 4 `h5`. Bootstrap 4 grid + jQuery 1.12.1 plugins
  (Slick for the testimonial slider, Owl Carousel loaded but unused on the home
  page, Magnific Popup, Gijgo, Nice Select, Themify Icons, Flaticon). Not
  Tailwind. Reveal animation via `animate.css` (`WowJs` hook present in
  `custom.js`).
- **Anchor census (measured on the live DOM):** **53** anchors — **35 dead
  `href="#"`**, **8 `blog.html`** (the three blog cards link their image,
  category, title and a "read more" to the same page), **3 `index.html`**
  (header wordmark, footer wordmark, footer Service link), **6 inner pages**
  (`about.html`, `service.html`, `attorneys.html`, `single-blog.html`,
  `elements.html`, `contact.html` once each) and **1** `https://colorlib.com`
  credit. Nothing 404s; `index.html` is byte-identical to the directory URL
  (35,140 B, a no-op link).
- **Inner pages are LIVE and are the authoritative reference** for what a
  multi-page theme puts behind each nav item (all HTTP 200, probed for this
  spec):
  | page | bytes | what it holds |
  |---|---|---|
  | `about.html` | 22,724 | inner hero band + firm story + the same two-image collage + counters |
  | `service.html` | 21,892 | inner hero band + the four practice cards repeated with descriptions |
  | `attorneys.html` | 25,957 | inner hero band + the attorney grid |
  | `blog.html` | 30,448 | inner hero band + post grid + sidebar (category, recent posts, tags) |
  | `single-blog.html` | 33,181 | inner hero band + article, author block, comments, reply form |
  | `elements.html` | 37,348 | inner hero band + the theme's UI kit (**the only place the vendor palette lives** — see deltas) |
  | `contact.html` | 14,468 | inner hero band + contact details + form + map panel |

  **Only the home page is in scope** for the recreation; the other pages exist
  so the implementer can see what each nav item was meant to become.
- **Section order in the DOM (measured tops/heights at 1440×1000, document
  height 7,146px):**
  | # | section (class) | top | height |
  |---|---|---|---|
  | 1 | `header.main_menu.home_menu` (**absolute**, over the hero) | 0 | 88 |
  | 2 | `section.banner_part` | 0 | 1,000 |
  | 3 | `section.about_part.section_padding` | 1,000 | 994 |
  | 4 | `section.service_part.section_padding` (cream via `::after`) | 1,994 | 590 |
  | 5 | `section.our_offer.case_study.section_padding` | 2,584 | 971 |
  | 6 | `section.team_part.our_offer.section_bg.section_padding` (cream) | 3,554 | 964 |
  | 7 | `section.cta_area` (solid gold) | 4,519 | 423 |
  | 8 | `section.review_part.section_padding.section_bg` (cream) | 4,942 | 747 |
  | 9 | `section.blog_part.section_padding` | 5,689 | 912 |
  | 10 | `footer.footer-area` (navy) | 6,602 | 545 |
- **Header geometry:** **88px** tall (measured), `position: absolute; top: 0;
  left: 0; width: 100%; z-index: 999`, **no background** — the cream hero
  starts at `y=0` behind it. Bootstrap container (1,140px at `lg`) holds an
  image wordmark at the left (gold scales glyph + gold serif "Ariclaw", 41px
  tall) and, at the right, six items: **Home · About · Service · Attorneys ·
  Blog ▾ · Contact** at **16px Cardo 400 `#000`**, `padding: 38px 25px`,
  `text-transform: capitalize`, plus a separate **"Let's Talk"** pill
  (measured **151×44**, white fill, `1px solid #dde0e3`, gold 16px label,
  `border-radius: 50px`, `padding: 9px 41px`; hover = gold fill + white label).
  "Blog" carries a dropdown (`Blog`, `Single blog`, `Elements`, 8px-radius
  white panel, `#8a8a8a` items). Below 992px the nav collapses to a Bootstrap
  **hamburger button (measured 33×33)** and the pill is `display: none`.
- **Hero geometry (1440):** band 1,000px; text in a **6-of-12** column:
  `h1` **50px Rufina 400**, line-height 1.273, `#161d22`, `margin-top: 34px`,
  `margin-bottom: 27px` (measured **555×191**, three lines), then a 15px Roboto
  paragraph (`line-height: 1.8`, `margin-bottom: 45px`), then
  `.btn_1` — measured **186×50**, `border-radius: 0` inside the hero,
  `padding: 13.5px 45px`, **white 14px** label on the gold gradient. The
  portrait is the hero's `::after`: `background: url(img/banner_bg.png) top
  right no-repeat`, `background-size: 46%`, `right: 10%`, `bottom: -74px`,
  `z-index: -1` over a 1000px-tall band; the asset is a **766×926 transparent
  cut-out** of a grey-haired man in a navy suit holding a tablet. The cream
  canvas behind it is `img/banner_bg_1.png` (**1,919×914 RGBA**), anchored
  `left bottom`, `background-size: auto`; its own **alpha channel carries the
  diagonal edge** (opaque cream lower-left, transparent upper-right), which is
  why the white page shows through as a wedge above the headline at the right.
  Measured hero fill **`#F5EFE8`** (245,239,232) — one step warmer than the
  `#f3f1ef` used by the cream sections.
- **Screenshot note:** the TEMPLATES.md image is the top fold — the gold
  "⚖ Ariclaw" wordmark at the left of the white top strip, the cream diagonal
  rising behind the nav, the faint gavel watermark at the left, the four-line
  serif headline "Finest And Strongest Law Firm Win The World" (**one line is
  highlighted gold in the source only on `about.html`; on the home page the
  whole `h1` is ink**), the small grey subline, the gold **square** button, and
  the attorney portrait cropped at the right edge. Below the fold line the
  cream band continues to 1000px. Everything in that fold is accounted for by
  the DOM/CSS/tokens below.
- **Copy:** the source is **lorem-flavoured placeholder text** in a legal voice
  (e.g. "Finest And Strongest Law Firm Win The World", "The lawyers truth is
  not truth but consistency or a consistent expediency", "Get Law Advice",
  "Review The Case", "Winning Guarantee", "Fully Suppport" [sic],
  "Recent Case Study", "Meet Our Attorneys", "Latest From Blog"). Keep the same
  _kind_ of content per block (headline + subline + CTA, four practice cards,
  three case cards, three attorneys, four testimonials, three posts, four
  footer columns) and the same sentence skeleton; drop the typos
  ("Suppport" → "Support", "RBanking & Finance" → a real practice area) and
  rename the firm to **Barstone** everywhere.

### Source defects and documented deltas (do not copy these)

1. **The hero band is 50px shorter than its own content at ≤575px.**
   `.banner_part` is `height: 650px` but `.banner_part .banner_text` stays
   `height: 700px` at that breakpoint, so the content column overflows the
   painted band by 50px (the band's bottom edge cuts before the column ends).
   Render the mobile hero as one **650px** band whose content fits.
2. **All three case-study cards carry the same label.** The markup repeats
   `RBanking & Finance` / `Bank Protected` three times (and the same
   `alt="offer_img_1"`), so the hover overlay cannot tell the cards apart. Give
   the recreation three distinct practice-area captions.
3. **All three attorney cards share one e-mail** (`jevenmartyn@ariclaw.com`)
   and the same `alt="offer_img_1"`. Use one address per person.
4. **The testimonial slider markup is duplicated.** The quote rail holds **4**
   `.client_review_text` slides while the thumbnail rail holds **6**
   `.slider-thumbnails` blocks, each containing a full copy of a
   `.client_review_text` (name + role) — so the render shows six thumbnails
   over four quotes, with the names alternating "Daniel E Gilcritst" /
   "Richard Kellerman" regardless of the slide. Ship **4 quotes and 4
   thumbnails**, one pair per person.
5. **Every top-level nav item is a dead `#`** even though the seven inner pages
   are live and byte-verified. In the recreation the nav items are in-page
   anchors (`#about`, `#services`, `#attorneys`, `#blog`, `#contact`), not dead
   links.
6. **`.cta_area .cta_btn` contains the invalid declaration `font-family: 400`**,
   so the button inherits Cardo. Use the serif deliberately (16px Cardo) rather
   than inheriting an accident.
7. **The copyright year is injected by `document.write(new Date().getFullYear())`**
   in the middle of the footer line. Render the year from the app's own data
   (a constant or `new Date().getFullYear()` in React), never `document.write`.
8. **`style.css` also ships the Elements demo kit** — `#f9f9ff` (27
   occurrences), `#f0e9ff` (13), `#415094` (7), `#4cd3e3` (6), `#38a4ff` (6),
   `#f4e700` (6), `#f44a40` (6), `#8a8a8a`, `#828bb2` — used only by
   `elements.html` (form controls, checkboxes, toggles, alerts, pricing). This
   is **vendor leftover, not brand**: none of it appears on the home page.
   Do not put these in `@theme`.
9. **The hero's cream canvas is an image, not a CSS gradient.** `banner_bg_1.png`
   is 1,919 px wide at natural size and is anchored `left bottom` with
   `background-size: auto`, so on wide screens the diagonal's angle visibly
   changes with the viewport. Reproduce the diagonal as a **CSS polygon /
   clip-path on a cream panel**, not as a bitmap, so it stays crisp and does
   not need an asset.
10. **`.banner_part:after` (the portrait) is `display: none` at ≤991px**, so
    the mobile hero has no image at all and the band is a bare cream field with
    a watermark. Recreate that intentionally (portrait hidden ≤991, headline
    centred at 26px).

## Design tokens (from preview `style.css` + live computed styles)

- **Fonts:** three families pulled by the sheet's own single import
  `@import url("https://fonts.googleapis.com/css?family=Cardo|Roboto:400,400i|Rufina")`
  — verified **HTTP 200** for the combined legacy URL and for each family alone
  with a browser UA (`css2?family=Cardo`, `…=Rufina`, `…=Roboto` all 200):
  **Cardo** (`"Cardo", serif`) for `body` (14px), **every heading**,
  the wordmark and the nav links; **Rufina** (`"Rufina", serif`) for the hero
  `h1` only; **Roboto** (`"Roboto", sans-serif`) for every `p`
  (**15px / line-height 1.8 / `#777777`**) and for the testimonial quote
  (18px, italic) and the copyright line.
- **Gold (primary brand):** **`#ab7636`** — the CTA band fill, `.btn_1`
  gradient start/end, every icon disc, hover fills, the section-link colour,
  the footer hover, the "Blog" dropdown hover. 62 occurrences in the sheet.
- **Light gold (gradient end + ornament):** **`#d7af7e`** — the gradient's mid
  stop, the service-icon gradient end, and the **quotation mark** (the
  `quate.svg` path is `fill="rgb(215,175,126)" opacity="0.2"`).
- **Ink (headings):** **`#161d22`** — every heading, the CTA button label, the
  primary text on gold.
- **Copy greys:** **`#777777`** (default `p`), **`#666666`** (`.section_tittle p`
  15px, testimonial quote 18px, blog excerpts), **`#999999`** (footer body
  14px/1.8 and footer links 15px), **`#cccccc`** (footer social glyphs),
  **`#8a8a8a`** (dropdown items).
- **Cream bands:** **`#f3f1ef`** — `.section_bg` and `.service_part:after`
  (services, attorneys, testimonials). **`#F5EFE8`** — the hero's own cream
  (measured pixel 245,239,232), deliberately warmer.
- **Navy (footer):** **`#162b45`** with a **`#45556a`** 1px divider above the
  copyright row and the same `#45556a` on input borders.
- **Rules / borders:** **`#dde0e3`** (the "Let's Talk" pill border and the
  5px testimonial arrow frame), **`#dfdfdf`** (blog card hairline, 1px).
- **Buttons:**
  - `.btn_1` (hero): `background-image: linear-gradient(to left, #ab7636 0%,
    #d7af7e 49%, #ab7636 100%)`, `background-size: 200% auto`,
    `padding: 13.5px 45px`, **white 14px Cardo**, `text-transform: capitalize`,
    `border: 1px solid transparent`; **`border-radius: 0` inside the hero**
    (`50px` is the base value, overridden there); hover slides
    `background-position` to `right center`. Measured **186×50**.
    At ≤575 it becomes `padding: 10px 30px`, `margin-top: 25px` (measured
    156×43).
  - `.menu_btn` (header pill): white fill, `1px solid #dde0e3`, gold 16px
    label, `border-radius: 50px`, `padding: 9px 41px`; hover = gold fill,
    gold border, white label. Measured **151×44**.
  - `.cta_btn` (gold band): **white** fill, `#161d22` 16px Cardo,
    `padding: 14.5px 50px`, `border-radius: 0`, `margin-top: 45px`; hover =
    label turns **`#ab7636`**. Measured **278×53**.
- **Shape language:** the page is a **mix** of one pill (the header CTA) and
  otherwise **square** corners — the hero button, the CTA button, every card
  and every input are 0-radius. The only circles are the **90px** service icon
  discs (72px on hover), the round quote slider arrows (square 55px boxes with
  a 5px border), and the portrait's soft edge (the asset, not CSS).
- **Type scale (measured):** hero `h1` **50px / 400 Rufina / 1.273**
  (40px ≤1200, 40 ≤991, 40 ≤767, **26 ≤575**); hero subline 15px Roboto /
  1.8; section `h2` **36px / 700 Cardo / 1.25**, `margin-bottom: 27px`;
  section intro `p` **15px / `#666666`**; service card `h2` **18px
  UPPERCASE** (measured weight **600**; 22px **capitalize** on hover);
  case-caption `h2` **30px / 400 / white** in the overlay; attorney `h4`
  **22px / 500** with a `p` role line; CTA `h2` **36px / white**;
  testimonial quote **18px Roboto italic `#666666`**, name `h3` **22px
  Cardo 500**, role `h5` **14px / 400**; blog `h5` title **22px Cardo 500**,
  excerpt `p` `#666666`, meta 14px with gold glyphs; footer `h4`
  **24px / 700 / white**, links 15px `#999999`, copyright 15px
  (13px ≤767) Roboto `#777777`.
- **Rhythm:** `.section_padding` = **`130px 0`** (80px between 991–1200,
  **70px ≤991**); `.section_tittle` `margin-bottom: 81px` and
  `text-align: center`; `.about_text` `margin-top: 60px`; the CTA band
  `padding: 115.5px 0`; the footer `padding: 130px 0 20px` (70px 0 30px ≤991)
  with `margin-top: 95px` above the copyright rule; the hero is a fixed
  **1000px** (700 ≤1200/≤991/≤767, **650 ≤575**); the service cards are a
  fixed **330px** (300px ≤1200 and below) on a 4-up `col-lg-3` grid that
  becomes 2-up at `sm` and 1-up ≤575.
- **Container:** Bootstrap 4 `lg` container **1,140px**; the case-study band is
  `container-fluid` with 7.5px half-gutters (first card flush left, last flush
  right), i.e. nearly full-bleed with a thin middle gutter.
- **Breakpoints in the source:** **1200 / 991 / 767 / 575** (Bootstrap 4).
- **Mobile render (390×844):** document **9,934px**, `scrollWidth` =
  `clientWidth` = **390** (no horizontal overflow); header **40px** with the
  wordmark left and a 33×33 hamburger right (the "Let's Talk" pill is hidden);
  hero **650px** with the portrait hidden, `h1` **26px** centred, subline
  centred, button 156×43; about **717**; services **1,400** (four stacked
  300px cards); case study **1,509**; attorneys **1,833**; CTA **397** with
  `h2` **20px / line-height 30px**; testimonials **582**; blog **1,715**
  (three stacked cards, 18px titles); footer **1,130** (four stacked columns,
  Instagram tiles at 25%, copyright centred, `margin-top: 20px`).

## Requirements

### Requirement: Absolute header over the cream hero

An **88px** header SHALL be `position: absolute; top: 0; z-index: 50`, with no
fill, so the hero's cream band runs from `y=0` underneath it. It SHALL hold a
wordmark at the left (a scales glyph + "Barstone" in Cardo, gold `#ab7636`,
serif, with the glyph rendered from `lucide-react` rather than an image) and
six items at the right — Home, About, Service, Attorneys, Blog, Contact — at
**16px Cardo `#161d22`** with `padding: 38px 25px`, plus a separate
**"Let's Talk"** pill (**151×44**, white fill, `1px solid #dde0e3`, gold 16px
label, `border-radius: 50px`, `padding: 9px 41px`; hover = gold fill + white
label). Blog SHALL open a dropdown (Blog, Single blog, Elements) on a white
panel with 8px radius, on hover **and** on keyboard focus. Items SHALL be
in-page anchors (`#about`, `#services`, `#attorneys`, `#blog`, `#contact`).

#### Scenario: Header floats on the hero

- **GIVEN** Barstone is rendered at 1440px
- **WHEN** the page loads
- **THEN** the header SHALL be 88px tall, transparent and absolute at the top
- **AND** the cream hero SHALL be visible behind and below it from `y=0`
- **AND** the wordmark, five nav items, the Blog menu and the pill SHALL render

#### Scenario: Nav hover and dropdown

- **GIVEN** the desktop nav is rendered
- **WHEN** the pointer enters "Blog"
- **THEN** a white 8px-radius panel SHALL reveal Blog, Single blog and Elements
- **AND** tabbing to the same item SHALL open the panel and focus its first link

#### Scenario: Mobile header

- **GIVEN** the viewport is 390px wide
- **WHEN** the page loads
- **THEN** the header SHALL be 40px tall with the wordmark and a hamburger button
- **AND** the "Let's Talk" pill SHALL be hidden
- **AND** activating the hamburger SHALL expand the six links with
  `aria-expanded="true"` and close on selection

### Requirement: Hero (1000px cream band with a diagonal edge and cut-out portrait)

The hero SHALL be a static **1,000px** band (700px ≤1200 and ≤991, 650px ≤575)
painted **`#F5EFE8`** whose **top-right corner is cut by a straight diagonal**,
leaving the white page visible above the line (reproduced with a CSS
`clip-path` polygon, not a bitmap). Behind the type it SHALL carry two faint
gold watermarks at ≤10% opacity (a gavel and a cap) and, at the right, a
**cut-out portrait** of an attorney, **46% of the band width**, anchored
`top right` with its feet cropped by the band, hidden at ≤991px. The text
column SHALL be **6 of 12**: an `h1` at **50px Rufina 400 / line-height 1.273 /
`#161d22` / `margin-top: 34px` / `margin-bottom: 27px`**, a 15px Roboto
paragraph (`line-height: 1.8`, `margin-bottom: 45px`), and the hero CTA — a
**square** (0 radius) **gold-gradient** button, `padding: 13.5px 45px`, white
14px label, `background-size: 200% auto`, hover sliding to
`background-position: right center`. There SHALL be exactly **one** `h1`.

#### Scenario: Hero composition

- **GIVEN** the hero is rendered at 1440px
- **WHEN** the page loads
- **THEN** the band SHALL be 1,000px tall on `#F5EFE8` starting at y=0
- **AND** its top-right corner SHALL be cut by a diagonal that exposes the white page
- **AND** the `h1` SHALL render at 50px/400 in Rufina on three lines
- **AND** the CTA SHALL be square, gold-gradient and 186×50
- **AND** the portrait SHALL be anchored at the right edge, 46% wide, cropped by the band

#### Scenario: Portrait fails to load

- **GIVEN** the portrait image cannot be fetched
- **WHEN** the hero renders
- **THEN** the band SHALL keep its 1,000px height and its cream fill
- **AND** the headline SHALL stay legible and SHALL NOT reflow the button

#### Scenario: Narrow hero

- **GIVEN** the viewport is 390px wide
- **WHEN** the hero renders
- **THEN** the band SHALL be 650px and the content SHALL be centred
- **AND** the `h1` SHALL be 26px with line-height 1.3 and the subline 15px
- **AND** the portrait and the gavel watermark SHALL be hidden
- **AND** the whole content column SHALL fit inside the band (no 50px overflow)
- **AND** `document.documentElement.scrollWidth` SHALL equal 390

### Requirement: About band (centred statement, two-image collage, centred paragraph)

A **130px-padded** white band SHALL open with a centred `h2` in an 8-of-12
column — **36px / 700 Cardo / 1.25 / `#161d22`**, `margin-bottom: 81px` — then
a **two-image collage**: a **7-of-12** image at the left and a **5-of-12**
image at the right, equal height, no radius (the second hidden ≤575). Below it,
in an 8-of-12 column, a centred paragraph (**15px Roboto / 1.8 / `#777777`**)
with `margin-top: 60px`. Images SHALL be deterministic placeholders
(`picsum.photos/seed/barstone-<n>`), one a courthouse/library interior and one
a consultation scene.

#### Scenario: Copy-led composition

- **GIVEN** the about band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** the statement SHALL be centred at 36px/700 in Cardo
- **AND** the collage SHALL be a 7/5 split with no gaps other than the gutter
- **AND** the supporting paragraph SHALL sit centred 60px below it

#### Scenario: Collage stacks on mobile

- **GIVEN** the viewport is 390px wide
- **WHEN** the about band renders
- **THEN** only the wide image SHALL show, full width
- **AND** the heading and paragraph SHALL keep their centred 8-col measure

### Requirement: Services (four white 330px cards with gradient icon discs)

A **130px-padded** band painted **`#f3f1ef`** SHALL present a centred `h2` and
four cards in a 4-up grid (2-up at `sm`, 1-up ≤575). Each card SHALL be a
**330px-tall** white panel (`300px` at ≤1200 and below) centred on a **90px
circle filled with `linear-gradient(0deg, #ab7636 0%, #d7af7e 100%)`** carrying
a **40px white** lucide glyph, an `h2` at **18px UPPERCASE `#161d22`** with
`margin-top: 34px`, and a hidden paragraph. On hover or focus-within the card
SHALL fill `linear-gradient(-117deg, #ab7636 0%, #d7af7e 100%)`, the disc SHALL
shrink to **72px and turn white** with a **30px gold** glyph, the `h2` SHALL
become **22px capitalize white**, and the paragraph SHALL appear in white. The
four labels SHALL be distinct practice areas (source: Get Law Advice, Review
The Case, Winning Guarantee, Fully Support).

#### Scenario: Four cards on cream

- **GIVEN** the services band is rendered at 1440px
- **WHEN** the page loads
- **THEN** four 330px white cards SHALL sit on `#f3f1ef` in one row
- **AND** each SHALL show a 90px gradient disc with a 40px white glyph
- **AND** each `h2` SHALL be 18px UPPERCASE in `#161d22`

#### Scenario: Card hover reveals the description

- **GIVEN** a service card is rendered
- **WHEN** the pointer enters it (or a child receives focus)
- **THEN** the card SHALL fill the `-117deg` gold gradient
- **AND** the disc SHALL be 72px white with a gold 30px glyph
- **AND** the heading SHALL grow to 22px in white
- **AND** the description SHALL be revealed in white

#### Scenario: Cards stack

- **GIVEN** the viewport is 390px wide
- **WHEN** the services band renders
- **THEN** the four cards SHALL stack full width at 300px each
- **AND** no card SHALL overflow the viewport

### Requirement: Case study (three near-full-bleed image cards with an offset gold frame)

A **130px-padded** band SHALL open with a centred `h2` in a 5-of-12 column
("Recent Case Study") and three image cards in a `container-fluid` row with
7.5px half-gutters (first flush left, last flush right). Each card SHALL show a
**landscape practice-area photograph** with its caption revealed on hover and on
keyboard focus: a **1px gold frame inset by 22px** (the source's
`offer_overlay.png`), a centred stack at **40% of the card's height** with an
`h2` at **30px / 400 / white** and a `p` at 15px white, over a dark scrim so
the white caption stays legible. Each card SHALL carry a **distinct** caption
(the source repeats one label three times).

#### Scenario: Three cards, distinct captions

- **GIVEN** the case-study band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** three landscape cards SHALL sit edge to edge with 7.5px middle gutters
- **AND** their images SHALL be three different photographs
- **AND** their captions SHALL name three different practice areas

#### Scenario: Caption on hover and focus

- **GIVEN** a case card is rendered
- **WHEN** the pointer enters the card or its link receives focus
- **THEN** a 1px gold frame SHALL appear inset 22px from the edges
- **AND** the white `h2` and `p` SHALL fade in at 40% height
- **AND** the caption SHALL remain readable against the image (scrim or shadow)

### Requirement: Attorneys (three portrait cards on cream with hover contact)

A **130px-padded** band painted **`#f3f1ef`** SHALL open with a centred `h2`
and present three portrait cards in a 3-up row (2-up at `sm`, 1-up ≤575). Each
card SHALL show a **portrait photograph** with a hover/focus overlay carrying
that attorney's **e-mail** (`p`, white) and **three social glyphs** at 15px
white with 7px margins, and beneath the image a centred `h4` at **22px /
`#161d22` / `margin-top: 26px`** plus a role line. E-mail addresses and names
SHALL be distinct per card (the source repeats one address three times).

#### Scenario: Three attorneys

- **GIVEN** the attorneys band is rendered at 1440px
- **WHEN** the page loads
- **THEN** three cards SHALL sit on `#f3f1ef` in one row
- **AND** each SHALL show a name at 22px and a role beneath it
- **AND** each card's e-mail SHALL be unique

#### Scenario: Hover contact overlay

- **GIVEN** an attorney card is rendered
- **WHEN** the pointer enters it or its social links receive focus
- **THEN** an overlay SHALL show the e-mail and three social glyphs in white
- **AND** the glyph links SHALL expose accessible names

### Requirement: Consultation CTA (solid gold band, white square button)

A **423px** band painted **`#ab7636`** with `padding: 115.5px 0` SHALL centre a
statement `h2` at **36px / 400 Cardo / white** in a 10-of-12 column and a
**white, square** button (measured **278×53**, `padding: 14.5px 50px`, 16px
Cardo `#161d22`, `border-radius: 0`, `margin-top: 45px`) whose label turns
**`#ab7636`** on hover and which links to the contact section.

#### Scenario: Gold strip

- **GIVEN** the CTA band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** the band SHALL be a full-width `#ab7636` strip about 423px tall
- **AND** the white `h2` SHALL be centred at 36px
- **AND** the white square button SHALL render 0-radius with an ink label

#### Scenario: Narrow CTA

- **GIVEN** the viewport is 390px wide
- **WHEN** the CTA band renders
- **THEN** the `h2` SHALL be 20px with line-height 30px
- **AND** the button SHALL shrink to `padding: 14.5px 30px` with `margin-top: 15px`

### Requirement: Testimonials (autoplaying quote with a thumbnail rail)

A **130px-padded** band painted **`#f3f1ef`** SHALL carry a decorative
**quotation mark** — 115×100 px of `#d7af7e` at **20% opacity**, centred near
the band's top (`top: 160px`) — above a single visible quote at **18px Roboto
italic `#666666` / margin 95px 0 30px**, a name at **22px Cardo 500 /
`margin-top: 50px`** and a role at **14px**. Below, a **thumbnail rail** SHALL
show three avatars with the active one emphasised, flanked by **55×55 px**
arrow buttons with a `5px solid #dde0e3` frame (hover `#ab7636`), hidden ≤767.
The rail SHALL advance automatically (1,000ms transition, ≈2s per slide), SHALL
pause on hover **and** on focus, SHALL be operable by keyboard (arrows +
thumbnail buttons) and SHALL NOT autoplay when
`prefers-reduced-motion: reduce`. There SHALL be **four** testimonials with
four thumbnails, one pair per person (the source ships six thumbnails over four
quotes).

#### Scenario: One quote at a time

- **GIVEN** the testimonial band is rendered at 1440px
- **WHEN** the page loads
- **THEN** exactly one quote, one name and one role SHALL be visible
- **AND** the decorative quotation mark SHALL sit above it at 20% gold
- **AND** three thumbnails SHALL be visible with one marked active

#### Scenario: Advancing the quote

- **GIVEN** the rail is rendered
- **WHEN** the user activates the next arrow or clicks the third thumbnail
- **THEN** the quote SHALL change to that person's testimonial
- **AND** the active thumbnail SHALL follow the quote
- **AND** hovering the band SHALL pause the rotation

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce` is set
- **WHEN** the band renders
- **THEN** the rail SHALL render the first quote statically
- **AND** arrows and thumbnails SHALL still switch quotes on demand

### Requirement: Blog (three cards with category, date, title, excerpt and meta)

A **130px-padded** white band SHALL open with a centred `h2` ("Latest From
Blog") and three cards in a 3-up row (`border-right: 10px solid #fff` on the
first two in the source — reproduce as a 10px white gutter). Each card SHALL
show a landscape image, a **gold category link**, a **date**, a title `h5` at
**22px Cardo 500**, an excerpt at 15px `#666666`, and a meta row with a
**0 Like** and **2 Comments** item whose glyphs are gold. Hovering the image
SHALL raise a **white 90% wash** carrying the category and title (the source's
`.hover_text`), and the title link SHALL turn `#ab7636` on hover.

#### Scenario: Three posts

- **GIVEN** the blog band is rendered at 1440px
- **WHEN** the page loads
- **THEN** three cards SHALL render in one row separated by white gutters
- **AND** each SHALL show a gold category, a date, a 22px title and an excerpt
- **AND** each SHALL expose a meta row with a like and a comment count

#### Scenario: Card hover

- **GIVEN** a blog card is rendered
- **WHEN** the pointer enters its image
- **THEN** a white wash at 90% opacity SHALL appear over the image
- **AND** it SHALL carry the category and the post title
- **AND** the title link SHALL turn gold

#### Scenario: Stacked posts

- **GIVEN** the viewport is 390px wide
- **WHEN** the blog band renders
- **THEN** the three cards SHALL stack with 18px titles and no right gutter
- **AND** the band SHALL use `padding: 70px 0 50px`

### Requirement: Footer (navy four-column band, Instagram grid, attribution)

A **`#162b45`** footer with `padding: 130px 0 20px` (70px 0 30px ≤991) SHALL
carry four columns: (1) the wordmark, a 14px `#999999` blurb and four
`#cccccc` social glyphs that hover **`#ab7636`**; (2) **"Our Service"** — a
`24px / 700 / white` `h4` and six 15px `#999999` links; (3) **"Contact Info"** —
the same heading style with an address, a phone, an e-mail and a website, each
prefixed by a glyph; (4) **"Instagram"** — six square image tiles in a grid
(3-up, 33.33% each; 20% ≤1200 and ≤991, 25% ≤767), each linking to its own
target. A **1px `#45556a`** rule SHALL separate a bottom row at
`margin-top: 95px`: a 15px (13px ≤767) Roboto `#777777` copyright line with the
current year on the left and a four-item menu (Home, Services, Careers, Faq) on
the right. The copyright line SHALL include a link to
**https://www.componentdock.com/** labelled **"Component Dock"** (AGENTS.md
rule 5), replacing the source's ColorLib credit — "ColorLib"/"Colorlib" SHALL
NOT appear anywhere in `apps/barstone`.

#### Scenario: Footer composition

- **GIVEN** the footer is rendered at 1440px
- **WHEN** the user scrolls to the bottom
- **THEN** four columns SHALL sit on `#162b45` with 24px white column headings
- **AND** six Instagram tiles SHALL render in a 3-up grid
- **AND** a `#45556a` rule SHALL open the copyright row

#### Scenario: Copyright and attribution

- **GIVEN** the footer bottom row is rendered
- **WHEN** it is read
- **THEN** it SHALL show the current year and "Barstone" on the left
- **AND** it SHALL link `https://www.componentdock.com/` as "Component Dock"
- **AND** the four-item footer menu SHALL render on the right

#### Scenario: Footer stacks

- **GIVEN** the viewport is 390px wide
- **WHEN** the footer renders
- **THEN** the four columns SHALL stack with 30px gaps
- **AND** the Instagram tiles SHALL be 25% wide
- **AND** the copyright row SHALL centre with `margin-top: 20px`

### Requirement: Responsive behaviour without overflow

The page SHALL follow the source's four breakpoints (**1200 / 991 / 767 /
575**) for band paddings, the hero height, type sizes and grid collapses, and
SHALL never scroll horizontally: at 390px
`document.documentElement.scrollWidth` SHALL equal
`document.documentElement.clientWidth`. Section padding SHALL be `130px 0` at
≥1200, `80px 0` between 991 and 1200, and `70px 0` at ≤991.

#### Scenario: Mobile audit

- **GIVEN** Barstone is rendered at 390×844
- **WHEN** the page is measured
- **THEN** `scrollWidth` SHALL equal `clientWidth` (390)
- **AND** the band order SHALL be header → hero → about → services → case study →
  attorneys → CTA → testimonials → blog → footer
- **AND** every card and image SHALL fit the 390px column

#### Scenario: Desktop audit

- **GIVEN** Barstone is rendered at 1440×1000
- **WHEN** the page is measured
- **THEN** the measured band heights SHALL be within ±10% of 88 / 1000 / 994 /
  590 / 971 / 964 / 423 / 747 / 912 / 545
- **AND** the document SHALL be about 7,150px tall

### Requirement: Motion, accessibility and performance

Reveal animation SHALL be a short fade/translate on scroll that degrades to the
final state when `IntersectionObserver` is unavailable and SHALL be skipped
entirely under `prefers-reduced-motion: reduce`. Every interactive element
SHALL be keyboard reachable with a visible focus ring; icon-only controls SHALL
have accessible names; the document SHALL have `<html lang="en">`, exactly one
`h1`, and headings that descend without skipping. Images SHALL reserve their
box (`width`/`height` or `aspect-ratio`) so no layout shift occurs and SHALL
use `loading="lazy"` below the fold.

#### Scenario: Keyboard pass

- **GIVEN** the page is rendered
- **WHEN** the user tabs through it
- **THEN** the wordmark, every nav item and dropdown item, the hero CTA, every
  service card, case card, attorney link, testimonial control and footer link
  SHALL show a focus ring
- **AND** the mobile hamburger SHALL expose `aria-expanded`

#### Scenario: Reduced motion

- **GIVEN** the user prefers reduced motion
- **WHEN** the page renders
- **THEN** reveals and the testimonial autoplay SHALL be skipped
- **AND** hover-only captions SHALL still be reachable by focus

#### Scenario: Heading order and language

- **GIVEN** the page is rendered
- **WHEN** the document outline is read
- **THEN** there SHALL be exactly one `h1`
- **AND** section headings SHALL descend without skipping levels
- **AND** `<html lang="en">` SHALL be present

## Verification checklist

- [ ] `openspec/specs/template-barstone/spec.md` is this file; `npm run spec:validate` passes.
- [ ] `apps/barstone` exists with `package.json` name `@free-react-templates/barstone`, `react`/`react-dom` set to `latest` (no exact pin), `public/CNAME` = `barstone.free.componentdock.com`, `homepage` = `https://barstone.free.componentdock.com`.
- [ ] `vite.config.ts` registers `injectUiSource()`; `src/index.css` puts the palette in `@theme` (`--color-gold: #ab7636`, `--color-gold-soft: #d7af7e`, `--color-ink: #161d22`, `--color-cream: #f3f1ef`, `--color-hero-cream: #F5EFE8`, `--color-navy: #162b45`).
- [ ] Fonts Cardo (400/700), Rufina (400) and Roboto (400 + 400 italic) loaded through one Google Fonts `<link>`; hero `h1` in Rufina, headings and nav in Cardo, every paragraph in Roboto.
- [ ] Section order matches the ten-row table (header → hero → about → services → case study → attorneys → CTA → testimonials → blog → footer) with the measured 1440 heights (88 / 1,000 / 994 / 590 / 971 / 964 / 423 / 747 / 912 / 545).
- [ ] Header is absolute and transparent at 88px with a gold scales + "Barstone" wordmark, six 16px Cardo items (`padding: 38px 25px`), a Blog dropdown on hover **and** focus, and a 151×44 white pill with a `#dde0e3` border and gold label.
- [ ] Hero: 1,000px `#F5EFE8` band (700 ≤1200/≤991, 650 ≤575) with a **CSS diagonal** top-right cut, gavel/cap watermarks, a 46%-wide cut-out portrait anchored right (hidden ≤991), a 50px/400 Rufina `h1`, a 15px/1.8 subline and a **square** gold-gradient CTA (186×50, `background-size: 200% auto`, hover slides right).
- [ ] About: centred 36px/700 statement in an 8-col measure, a 7/5 two-image collage with no radius, and a centred 15px paragraph at `margin-top: 60px`.
- [ ] Services: four 330px white cards on `#f3f1ef`, 90px `linear-gradient(0deg, #ab7636, #d7af7e)` icon discs with 40px white glyphs, 18px UPPERCASE headings, and the hover state (gradient `-117deg`, 72px white disc, 22px capitalize white heading, white description).
- [ ] Case study: three distinct captioned images in a `container-fluid` row with 7.5px gutters and a 1px gold frame inset 22px on hover/focus.
- [ ] Attorneys: three portrait cards on `#f3f1ef` with unique names, roles and e-mails, an overlay on hover/focus and 22px names at `margin-top: 26px`.
- [ ] CTA: 423px `#ab7636` band, `padding: 115.5px 0`, white 36px centred `h2`, white **0-radius** button (278×53) whose label turns gold on hover.
- [ ] Testimonials: 115×100 quotation mark in `#d7af7e` at 20% opacity, 18px italic quote, 22px name, 22px/500 Cardo, 3-visible thumbnail rail with 55px arrows framed `5px #dde0e3`, autoplay ≈2s pausing on hover/focus and disabled under reduced motion, **four** quotes with four thumbnails.
- [ ] Blog: three cards with gold category, date, 22px title, 15px excerpt, like/comment meta and a white 90%-opacity hover wash; 10px white gutters; stacked at 390px.
- [ ] Footer: `#162b45`, `padding: 130px 0 20px`, four columns (wordmark + blurb + four `#cccccc` socials, six-link "Our Service", "Contact Info" with icons, six-tile Instagram grid), `#45556a` rule at `margin-top: 95px`, 15px copyright with the current year and a four-item menu.
- [ ] Footer links https://www.componentdock.com/ as "Component Dock"; `git grep -i colorlib apps/barstone` = 0 hits; the source wordmark/e-mail domain "ariclaw" appears nowhere in `apps/barstone`.
- [ ] No horizontal overflow at 390px (`document.documentElement.scrollWidth === 390`); the mobile hero content fits inside its 650px band; no `document.write`.
- [ ] Vendor palette (`#f9f9ff`, `#f0e9ff`, `#415094`, `#4cd3e3`, `#38a4ff`, `#f4e700`, `#f44a40`) is **not** in `@theme` — it belongs to the source's Elements page only.
- [ ] Placeholder imagery uses `https://picsum.photos/seed/barstone-<n>/<w>/<h>` (hero portrait, two about images, three case images, three attorney portraits, four avatars, three blog images, six footer tiles); icons from `lucide-react`.
- [ ] `scripts/verify-app.sh barstone` passes: typecheck, lint, 100% coverage tests, build.
- [ ] Desktop (1440) and mobile (390) renders compared against the reference fold-by-fold; deviations listed in the PR.
- [ ] `npm install` run at the repo root so `package-lock.json` registers the workspace; `grep -c "@free-react-templates/barstone" package-lock.json` ≥ 1.
- [ ] TEMPLATES.md rows **896** and **2116** were re-opened `[x]` → `[ ]` on the branch, then marked `[x]` with `https://barstone.free.componentdock.com` after merge (prep stream does none of this).
