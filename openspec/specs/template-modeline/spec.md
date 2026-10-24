# Template: Modeline (Fashion)

## Purpose

Modeline is a fashion / model-agency landing page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Glamour"** design, built under a DIFFERENT name (**Modeline** — one
lowercase word: "model" + "-ine", the model-agency register the source itself
uses, since its own contact address is `model@contact.com`; single word,
kebab-case-safe, no collision with `apps/`, `openspec/specs/template-*`,
`docs/templates/`, any bold name in `TEMPLATES.md`, or any substring in the
repository: `git grep -il modeline origin/main` = **0 hits**;
`grep -ci modeline TEMPLATES.md` = **0**; and the name is not a ColorLib slug —
`colorlib.com/wp/template/modeline/`,
`preview.colorlib.com/theme/modeline/` and
`preview.colorlib.com/theme/bootstrap/modeline/` all return **404**) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `glamour`
- **ColorLib page**: https://colorlib.com/wp/template/glamour/
- **Live preview**: https://preview.colorlib.com/theme/glamour/
  (HTTP 200, **11,445 B** HTML, sha256
  `3d5514b83053af4f0141a3b9abcf622f61577c8f69dc94eda3407d68e22e36dd`; theme
  sheet `css/style.css` **28,429 B**, sha256
  `42e090e9bf5e11668a966f592234c7d4f9a547326672371a18593b3d065ddaec`; page
  script `js/main.js` **3,877 B**, sha256
  `93fa56bef9ba21bd9debd43295661f62643756dc9871d958790add209aee3c2d`; `<title>`
  = **"Glamour - Fashion HTML Template"**, meta description "Glamour Fashion
  HTML Template"; Bootstrap 4 grid + jQuery 3.2.1 + Owl Carousel 2 +
  `isotope` + `magnific-popup` + `circle-progress`; **no `js/snippet.js`**
  (404) and **no `js/custom.js`** (404)). The slug-only path IS the live design
  (no alias: `theme/bootstrap/glamour/` and `theme/bb/glamour/` both **404**).
  `/downloads/free/glamour.zip` returns **404** (a 9-byte `text/plain` body), so
  the live preview is the only DOM/CSS reference and **there is no archive to
  cross-check** — every token below is measured from the live render.
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/glamour-free-template.jpg
  (served **AVIF** — a **110,656-byte** body behind a `.jpg` name, 1200×946
  decoded; decoded to PNG and inspected — **top fold only**: the
  navy split-navigation header with the centred crest wordmark and the white
  search square, the B&W fashion hero with its halftone panel behind a 160px
  navy headline, the two hero buttons, the right-hand social rail and the
  rotated brand line, plus the prev/next squares at the bottom-left corner of
  the hero). The screenshot does **not** show the quote, portfolio, about, shop,
  newsletter or footer bands — those were measured from the live render, which
  is why this spec carries a band table with geometry.
- **Package**: `@free-react-templates/modeline`
- **Deploy target**: `modeline.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/glamour/' TEMPLATES.md` = **3** (lines **1028**, **1583**
and **1712**, all `- [x] **Glamour**`) and all three credit the **`glamour`**
app. But `openspec/specs/template-glamour/spec.md` names a DIFFERENT ColorLib
design as its source — the **"Look"** model-agency theme
(`https://preview.colorlib.com/theme/look/`) — so `glamour` is a false `[x]`
(bucket 2, **APP-WRONG-DESIGN**, in `docs/row-multiplicity.md` §2; measured
exclusive-copy evidence `row-excl / spec-excl` = **0 / 36**, i.e. the shipped
app's copy matches its own named design 36-to-1 and shares **zero** exclusive
phrases with this design). No spec in `openspec/specs/` names this slug today
(`git grep -l 'wp/template/glamour/' origin/main -- openspec/specs` = **0**; the
only specs that mention the word are `template-cameo` and `template-glamour`,
both naming other designs).

The prep stream writes documentation only: the implementer re-opens ALL THREE
rows `[x]` → `[ ]` on its `feat/template-modeline` branch before building, then
marks them `[x]` with `https://modeline.free.componentdock.com` after merge.
**Do not touch `apps/glamour`** — it keeps recreating the design its own spec
names.

### Why the name is not the source name

"Glamour" is the ColorLib wordmark: it is the crest logo text, the `<title>`,
the meta description and the copyright subject — and it is ALSO the folder name
of an existing shipped app in this monorepo, so it cannot be reused on either
count (AGENTS.md rule 5). The recreation renames the brand to **Modeline**
everywhere: header crest wordmark, footer wordmark, copyright line,
`document.title`, meta description, picsum seeds and the contact address. The
word "glamour" SHALL NOT appear in any file under `apps/modeline`
(`git grep -i glamour apps/modeline` = 0 hits).

## Design reference (replication findings)

- **Original:** ColorLib "Glamour" — a **fashion / model-agency** single-page
  site (the theme is multi-page: about, portfolio, blog, contact and elements
  pages are live; see the inner-page probe). Signature look: a **93px navy
  (`#081624`) header** that is *split* around a centred crest wordmark — three
  13px uppercase white items flush left (Home, About the Brand, Portfolio), the
  156×61 crest logo in the middle, three items flush right (Shop, News,
  Contact) — with a **92px white square "hole"** carrying a search glyph pinned
  to the right edge of the bar. Below it a **965px full-bleed B&W fashion
  photograph** (1920×974 source, measure **grayscale, mean luminance 180**, so
  it reads light) with a **24px-pitch halftone dot field** behind the copy, a
  **160px/192 navy `h2`** ("Fashionista"), two square CTAs (white + navy), a
  right-edge rail of **five 48px navy circles** and a rotated
  "We love our brand" line, and **84×84 prev/next squares** at the bottom-left.
  Then a white **quote band** (36px italic Oscar de la Renta pull-quote over a
  30px bold attribution), an **11-tile full-bleed mosaic** of square portfolio
  photos (5 columns of 256–288px, one 2×2 hero tile, one deliberate empty gap
  tile showing the halftone), a **two-block about** (7-of-12 text + signature
  with a portrait that bleeds off the right edge at `right: -63px`; then a
  gutters-free split of a flush-left 720px photo and a text column inset
  `padding-left: 171px`), a **four-product shop row** (264×411 portraits, one
  flat price "$235" on all four), a **271px navy newsletter band** (white input
  556×57 + white SUBSCRIBE 164×57) and a **210px white footer** (dark wordmark,
  12px copyright at 23% opacity, Address/Phone/Mail list with 75px labels).
  Every corner of the page is square: **`border-radius: 0`** on every button,
  card and field; only the social circles and the search-close disc are 50%.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/glamour/` — the
  page has **5 `<section>` elements** (`hero-section`, `quote-section`,
  `about-secton` [sic, the source's own typo], `shop-section`,
  `newsletter-section`) plus `header.header-section`,
  `div.portfolio-section`, `footer.footer-section`, the preloader
  `#preloder`, the search overlay `div.search-model` and two floating rails.
  **10 `<img>`**, **0 `h1`**, **4 `h2`**, **6 `h3`**, **4 `h6`**, **2
  `<form>`**, **2 `<input>`**, **32 anchors**. Page copy is thin and repetitive
  by design: the headline "Fashionista" is used by BOTH hero slides, the about
  headings are the aphorisms "Fashions fade, style is eternal" and "The joy of
  dressing is an art", and all four products are priced "$235".
- **Anchor census (measured on the live DOM, every `href` attributed):** **32**
  anchors — **9 dead `href="#"`** (the five hero social-rail circles, which carry
  a glyph and no label, plus the four hero CTAs — two per slide), **4 empty
  `href=""`** (the four shop "Add to cart" links, which are anchors pretending
  to be buttons in the source), **11 `img/works/N.jpg` image links** (the
  portfolio tiles' `magnific-popup` destinations), **2 `index.html`** (the nav's
  Home item and the centred crest wordmark — `index.html` is byte-identical to
  the directory URL, so it is a no-op link, never a 404), **5 real in-theme
  pages** (`about.html`, `portfolio.html`, `blog.html`, `contact.html`,
  `elements.html` — one each; the six nav items therefore share five targets
  because `elements.html` is reached from the Shop slot) and **1
  `https://colorlib.com`** credit in the copyright line. Nothing 404s. The
  search switch is a `div`, not an anchor, and the footer contact rows carry no
  links at all.
- **Nav → destination map (measured, this is why the recreation needs a delta):**
  Home → `index.html`; About the Brand → `about.html`; Portfolio →
  `portfolio.html`; Shop → `elements.html`; News → `blog.html`; Contact →
  `contact.html`.
- **Inner-page probe (all statuses measured for this spec):**
  `index.html` **200** (11,445 B, byte-identical to the directory URL),
  `about.html` **200** (9,205 B — `page-info-section` 432px navy photo banner
  with a 160px white page title, `about-intor-section`, `steps-section` with
  the numbered process steps, `team-section` with three members — Maria Smith,
  Jenny Williams, Stan Smith), `portfolio.html` **200** (7,342 B —
  `page-info-section` + `portfolio-page-section` with a `.portfolio-filter` row
  of 24px filter labels), `blog.html` **200** (10,512 B — `page-info-section` +
  a `.blog-section` masonry of six posts, each with a navy date badge), and
  `contact.html` **200** (5,885 B — `page-info-section` +
  `.contact-info-section` + `.contact-section` form) and `elements.html` **200**
  (12,265 B — the component sheet: Buttons, Accordions & Tabs, Loaders,
  Milestones with 123 / 25 / 19 counters). `gallery.html`, `services.html`,
  `single.html`, `model.html`, `models.html` are **404** (9-byte bodies). **A
  single-page recreation therefore has to convert five page links into in-page
  anchors — recorded as delta 3, and the inner pages' content is inventoried in
  `docs/templates/modeline/design-notes.md` so nothing is invented if a
  later multi-page pass wants it.**
- **Section order and measured geometry** (1440×900, all lazy backgrounds
  forced, `document.documentElement.scrollHeight` **5,055px**; document height
  is stable across reloads — the only motion is the hero fade, so these numbers
  are solid, not ±2%):

  | # | band (source class) | top | height | fill |
  |---|---|---|---|---|
  | 1 | `header.header-section` | 0 | **93** | `#081624`, `padding: 16px 90px` |
  | 2 | `section.hero-section` | 93 | **965** | B&W photo `slider-bg-1.jpg` (cover, top centre) + halftone field |
  | 3 | `section.quote-section` | 1,058 | **444** | white, `padding: 125px 0` |
  | 4 | `div.portfolio-section` | 1,501 | **864** | 11 photo tiles, no gaps, no padding |
  | 5 | `section.about-secton` | 2,365 | **1,496** | white, `padding: 128px 0 115px` (block B is `about-img-box-warp`, 777px, `padding: 120px 0 135px`) |
  | 6 | `section.shop-section` | 3,862 | **713** | white, `padding: 0 0 100px` |
  | 7 | `section.newsletter-section` | 4,575 | **271** | `#081624`, `padding: 110px 0 104px` |
  | 8 | `footer.footer-section` | 4,846 | **210** | white, `padding: 56px 62px` |

  Responsive heights (same order): at **1024** — 93 / 658 / 444 / 614 / 1,629 /
  629 / 271 / 210; at **390** — 77 / 767 / 516 / 4,290 / 2,132 / 3,152 / 449 /
  393. `scrollWidth === clientWidth` at 1440, 1024 and 390 (the only
  off-viewport boxes are the Owl stage's cloned slides, which are clipped), so
  **the source has no horizontal-overflow defect to inherit**.
- **Band geometry, measured (1440):**
  - **Header**: 93px, `#081624`, `padding: 16px 90px`, `text-align: center`.
    Nav items **13px UPPERCASE white**, `margin-right: 50px`,
    `padding: 22px 0` (measured 39×64 line box); left list floats left with
    80px of logo padding, right list floats right with `padding-right: 16px`.
    Crest logo **156×61** (`img/logo.png`), `display: inline-block`. The
    `div.search-switch` is an **absolute 92px-wide white block spanning the
    full bar height** at `right: 0` (`padding-top: 30px`), a white "hole" in the
    navy bar holding a 24px magnifier glyph.
  - **Hero**: `hero-slider-item` `padding: 170px 0 214px`; the inner
    `.hs-content` is **1440×581** with `padding: 179px 0 102px`, centred, and
    carries the halftone as a `background-image` (`hero-overlay.png`). The `h2`
    is **160px / 192px line-height / weight 700 / `#081624`**; the two CTAs are
    186×66 `.site-btn` (`.sb-white` then the navy one, `margin-right: 24px`).
    The **social rail** is absolute at `right: 39px; top: 240px` (measured top
    333 relative to the document, 48px circles, 22px apart, five glyphs:
    pinterest, facebook, twitter, dribbble, behance). `.brand-text` is
    `position: absolute; right: 0; bottom: 0`, 14px white uppercase, rotated
    `90deg` from `right top` with `margin-right: 50px`. Owl nav: two **84×84**
    squares at the bottom-left — prev **`#081624`** with a white glyph, next
    **white** with a navy glyph.
  - **Quote**: 444px (125px top/bottom padding), text centred, `p` **36px
    italic `#081624`**, `margin-bottom: 28px`; attribution `h3` **30px bold
    `#081624`**.
  - **Portfolio mosaic** (this is the layout the recreation must reproduce
    exactly, `isotope` + a JS square-height fix): the gallery is the full
    **1440×864** viewport width — 3 rows of **288px** squares, 5 per row.
    Measured tile map (x, y in px, 288px unit):
    row 0 — tile 1 at **0,0** (`works/1`), the **empty `--disable` tile at
    288,0** (288×288 of nothing, the halftone showing through), tile 2 at
    **576,0** (`works/2`), the **2×2 hero tile at 864,0, 576×576**
    (`works/6`) spanning rows 0–1 and columns 4–5;
    row 1 — `works/3` at 0,288, `works/5` at 288,288, `works/4` at 576,288;
    row 2 — `works/7` 0,576, `works/8` 288,576, `works/9` 576,576,
    `works/10` 864,576, `works/11` 1152,576.
    Each tile's `height` is set from its own width by JS (square at every
    breakpoint) and `.portfolio-view` is an **80%-height overlay** that grows to
    **100%** on hover, painted **`#161024`** with a 24px white "loadmore" label.
    The imagery is **B&W fashion photography with two colour accents** (the
    gold/stage plate and the phone flat-lay) plus one **navy brand plate**
    carrying a wordmark; record that mix in the placeholders (see delta 8).
  - **About A**: text column **686×476** at x = 132 (7-of-12, `padding: 0 15px`);
    `h2` **48px / weight 400 / `#081624`** with `margin-bottom: 50px` and
    `padding-top: 33px`; body copy 16px/1.8 `#60656b`, `margin-bottom: 50px`;
    the handwritten **signature image 233×84**. The portrait
    (`img/about-img.jpg`) is **absolute, `right: -63px; top: 0`** — it bleeds
    off the right edge on purpose and the band's `overflow: hidden` trims it.
  - **About B** (`about-img-box-warp`): gutters-free split. Left half is the
    photo at **720×522** flush to the left edge and to the row (`p-0`,
    `container-fluid`); right half holds `.about-text` **534 wide at x = 891**
    inside a wrapper with `padding-left: 171px` (`max-width: 655px`), same 48px
    `h2` and two paragraphs at `margin-bottom: 25px`. A halftone panel sits
    behind the photo offset **down 112px, `calc(100% + 115px)` wide**.
  - **Shop**: 4-of-12 columns, no band heading. Card **264 wide, 580 tall**:
    portrait **264×411** (source 400×623, ratio 0.642), `margin-bottom: 40px`;
    name `h3` **30px weight 400 `#081624`**, `margin-bottom: 8px`; price `h6`
    **16px italic `#60656b`**, `margin-bottom: 20px`; the "Add to cart" control
    is `.add-card`, **130×46**, `padding: 11px`, navy `#081624`, white 16px
    label, `min-width: 130px`, `display: inline-block`, `text-align: center`.
  - **Newsletter**: 271px navy band; `h3` **30px weight 400 white** in a
    3-of-12 column (`padding-top: 5px`); the form is a 9-of-12 flex row — input
    **556×57**, 12px **uppercase italic**, `padding: 10px 25px`,
    `margin-right: 30px`, placeholder **"Your E-mail"**; button wa 164×57
    (`.site-btn.sb-white`, `padding: 17px 20px`, `min-width: 164px`, 14px
    uppercase) reading **"subscribe"**.
  - **Footer**: 210px, `padding: 56px 62px`; left 9-of-12 column carries the
    **dark crest wordmark 156×61** (`img/logo-dark.png`) and a `.copyright`
    line of **12px `#081624` at `opacity: .23`** (copyright glyph, year, the
    heart glyph, the ColorLib credit — replaced by the Component Dock credit in
    the recreation); right 3-of-12 column carries `.footer-contact-list` — three
    `li` at **15px `#60656b`** with a **75px-wide navy label span**
    (`Address:`, `Phone:`, `Mail:`) and the values "Main Str, no 23, New York",
    "+546 990221 123", "model@contact.com".
  - **Halftone fields (the theme's only decoration — measured from the PNGs):**
    a dot grid with a **24px pitch**, dots about **2–3px** across, painted
    **`#1D1D1B` at ≤ 17% alpha** (max alpha 44/255). Three instances:
    `hero-overlay.png` (1909×592, `cover` inside the 1440×581 `.hs-content`),
    `portfolio-overlay.png` (399×592, rendered **459×590** at the gallery's
    top-left, `top: -68px`, and again bottom-right at `bottom: -93px`), and
    `image-box-bg.png` (1071×592 behind the About B photo). These are images in
    the source but a **CSS `repeating` radial-gradient dot grid reproduces them
    exactly** (delta 6) — they must not be copied.
- **Type rhythm (source, before the section overrides):** `h1` 70px, `h2` 36px,
  `h3` 30px, `h4` 24px, `h5` 18px, `h6` 16px, `p` 16px/1.8 `#60656b`, all
  headings `#081624` weight **700**; the two about headings and every product
  name deliberately drop to weight **400**, and the prose band headings are 48px
  rather than the 36px default.
- **Interactive state defined by `js/main.js` (must be reproduced in React):**
  preloader fade on `load` (400ms), the mobile menu clone + `slideToggle`,
  `search-switch` → `search-model` fade in/out (400ms, clears the input on
  close), the Owl hero carousel (loop, `items: 1`, autoplay, `navText` = left /
  right angle glyphs, fade in/out), the **isotope** gallery (the filter row only
  exists on `portfolio.html`), `magnific-popup` image lightbox bound to
  `.portfolio-view`, and the square-height fix (`height = width`, double height
  for `--big` above 479px).

### Source defects and documented deltas (do not copy these)

1. **Both hero slides are the same slide.** Slots 1 and 2 of the Owl carousel
   both carry `data-setbg="img/slider-bg-1.jpg"` and the copy "Fashionista"
   with the same two "Read More" buttons, so the autoplay carousel visibly
   re-plays one frame. The recreation SHALL ship **two distinct B&W-fashion
   placeholders** (picsum seeds `modeline-1`, `modeline-2`) with the same
   160px headline device — one artwork per slide, which is what the source
   obviously intended.
2. **There is no `h1`.** The hero headline is an `h2` at 160px and the page has
   four `h2`s total. The recreation SHALL render the hero headline as the page's
   single **`h1`** at the same 160px/192px/#081624 treatment (accessibility
   delta; do not change the visual).
3. **Five page links, one page.** Home / About the Brand / Portfolio / Shop /
   News / Contact point at `index.html`, `about.html`, `portfolio.html`,
   `elements.html`, `blog.html`, `contact.html`. A single-page build converts
   them to in-page anchors: **Home → `#home`**, **About the Brand → `#about`**,
   **Portfolio → `#portfolio`**, **Shop → `#shop`**, **News → `#newsletter`**,
   **Contact → `#contact`** (the footer contact block). The inner-page content
   is inventoried in `docs/templates/modeline/design-notes.md`; it is NOT built
   in this pass and SHALL NOT be invented.
4. **The newsletter field has no border rule in the sheet.** The live input's
   grey edge is the **UA default `2px inset rgb(118,118,118)`**, not a design
   decision. The recreation SHALL paint a deliberate **white field with no
   border** on the navy band (and a visible focus ring), not the UA inset.
5. **`.site-btn:hover` only repeats the resting colour** (`color: #fff` on a
   `#fff`-text button), so nothing visibly happens. The recreation SHALL add a
   restrained hover (navy → `#161024`, the popup tone already in the palette)
   and keep it identical for keyboard focus.
6. **Every ornament is one of three PNGs** (`hero-overlay.png`,
   `portfolio-overlay.png`, `image-box-bg.png`). Never copy them: rebuild the
   dot grid in CSS — `radial-gradient(circle, rgba(29,29,27,.17) 1.2px,
   transparent 1.4px)` at **`background-size: 24px 24px`** — and place it where
   the source does (hero centre panel, gallery corners, About B photo offset).
7. **The crest logos are images** (`logo.png` white crest + GLAMOUR on a navy
   plate, `logo-dark.png` the inverse, both 156×61). The recreation SHALL use a
   typographic wordmark **"MODELINE"** (`letter-spacing` tracked, 22px/700 in the
   93px bar, dark plate behind it) plus a `lucide-react` crest glyph (`Gem` or
   `Crown` at 20px) — no raster logo.
8. **The mosaic's two colour accents and the navy brand plate are content, not
   styling.** Keep the mix: nine B&W tiles (`?grayscale`), one warm colour
   plate, one navy plate carrying the wordmark.
9. **The `--disable` tile is a real 288px hole** in the first row (the halftone
   shows through it). Reproduce the hole — do not "fix" the grid to four tiles
   or close the gap with a photo.
10. **All four products are "$235"** with lorem-free but one-word names (Black
    Coat, Black Dress, White Shirt, Trousers). Keep four distinct product names
    and four distinct prices so the card pattern is legible; the source's
    single price is a copy omission, not a design rule.
11. **`body` inherits Bootstrap's `#212529`** (the sheet never sets a body
    colour; only `p` is `#60656b`). The recreation SHALL set body copy to
    **`#60656b`** explicitly and keep `#212529` out of the palette.
12. **`.about-secton` is the source's own typo** for "section". Do not carry the
    misspelling into class names; keep the band structure.

## Design tokens (from preview `css/style.css` + live computed styles)

- **Fonts:** **Futura LT Book** only — declared four times via `@font-face`
  from self-hosted `../fonts/FuturaLT-{Light,Book,BookOblique,Bold}.woff2`, the
  sheet's only `font-family` values (5 declarations: `body`/`html` 16px +
  headings + forms). No Google Fonts link on the page. Futura LT is a
  **proprietary Monotype face and is not published on Google Fonts**, so the
  recreation SHALL load the geometric substitute **Jost** (300 / 400 / 700 +
  400 italic — matching the source's Light/Book/BookOblique/Bold four-face
  setup) via one Google Fonts `<link>`, and record the substitution in the PR.
  Weights used by the live render: body 400, headings **700**, the two about
  headings and product names **400**, the quote **italic 400**.
- **Brand navy (primary):** **`#081624`** — **35** declarations, the single
  most-used value in the sheet: the header bar, every `.site-btn` fill and
  `.sb-line` border, every heading, the hero headline, the social circles, the
  "Add to cart" control, the newsletter band, the quote text, the copyright and
  the contact labels.
- **Popup navy (secondary):** **`#161024`** — 2 declarations, both hover
  overlays: `.portfolio-item .portfolio-view` and `.team-member
  .member-pic:after` (About page). The recreation uses it as the button hover
  tone (delta 5).
- **Body copy:** **`#60656b`** — 3 declarations (`p`, product price `.shop-item
  h6`, footer contact list). **Muted steel:** **`#8d9eaf`** — 4 declarations
  (the team-member role label and the page-intro meta on inner pages).
- **Surfaces:** **`#fff`** (23 declarations — page background, `.sb-white`
  buttons, newsletter field, the mobile drawer) and **`#f4f5fa`** (1 —
  `.blog-search-form input` on `blog.html`), **`#f4f4f5`** (1 — the same
  input's border), **`#efefef`** (1 — mobile-menu row rules).
- **Neutrals used for chrome only:** **`#333`** (the search overlay's input
  rule, its 50px close disc and glyph), **`#999`** (the search input's text
  colour), **`#000`** (the preloader background and the search overlay).
- **Not in scope:** **`#f44336`** and **`#673ab7`** each appear twice as
  `border: 4px solid` on `.circle-progress` variants that only render on
  `elements.html`; **`#dededf`** is the `.page-info-section` `h2` shadow.
  The landing page paints neither, so they SHALL NOT enter `@theme`.
- **Buttons:** `border-radius: 0` **everywhere**; `.site-btn` = `min-width:
  186px`, `padding: 23px 20px`, **14px UPPERCASE white** on `#081624`
  (measured **186×66**); `.sb-white` = white fill + `#081624` text;
  `.sb-line` = transparent + `2px solid #081624` + navy text; `.sb-shap` =
  `transform: skew(32deg)` (145px min-width) with an un-skewed inner `span`;
  the newsletter button is 164×57, the shop control 130×46, the hero CTAs
  186×66.
- **Radii / circles:** `border-radius: 0` on buttons, cards, fields and tiles —
  the theme is entirely square. Only `.hero-social-links a` (48px, `50%`) and
  `.search-close-switch` (50px, `50%`) are circles. There are no card shadows;
  the only shadow in the sheet is `rgba(0,0,0,.15)` under the mobile drawer.
- **Spacing rhythm:** header `16px 90px`; hero `170px 0 214px` (+ `179px 0
  102px` inner); quote `125px 0`; about `128px 0 115px`; about B `120px 0
  135px`; shop `0 0 100px`; newsletter `110px 0 104px`; footer `56px 62px`;
  container `1,140px` (Bootstrap) with the portfolio and About B blocks
  deliberately **full-bleed** (`container-fluid`, `p-0`).
- **Motion:** hero slide fade in/out **0.5s** with **0.4s / 0.6s / 0.8s**
  stagger (headline, first CTA, second CTA); portfolio overlay **0.3s**
  (opacity + top/height); team overlay **0.5s
  `cubic-bezier(0.18, 0.89, 0.32, 1.28)`**; search overlay and preloader
  **400ms** fades. No AOS, no parallax, no counters on this page.

## Requirements

### Requirement: Page shell, preloader and document head

The app SHALL render a single-page fashion site composed of the header, hero,
quote, portfolio, about (A + B), shop, newsletter and footer bands in that
order, inside a page whose `<title>` is a Modeline string
("Modeline — Fashion Template") and whose meta description is a Modeline
sentence. A full-screen preloader painted **`#000`** SHALL cover the document
until the assets are ready and then fade out within **400ms**, and it SHALL
never survive a completed document (a page whose `readyState` is already
`complete` SHALL show the site immediately).

#### Scenario: Bands render in source order

- **GIVEN** Modeline is rendered at 1440px
- **WHEN** the page loads
- **THEN** the bands SHALL appear in the order header → hero → quote → portfolio → about A → about B → shop → newsletter → footer
- **AND** no band SHALL be hidden until scrolled (this design has no scroll-reveal animation)
- **AND** the document height SHALL be close to the reference's 5,055px (accept ±3% for placeholder aspect differences)

#### Scenario: Preloader never traps the page

- **GIVEN** the document has already finished loading
- **WHEN** the app mounts
- **THEN** the preloader SHALL be absent (or removed) on the first painted frame
- **AND** the header SHALL be visible without waiting for a timer

### Requirement: Split navy header with a centred wordmark and a white search square

A **93px** header painted **`#081624`** SHALL hold, on one centred row, three
**13px UPPERCASE white** items flush left (Home, About the Brand, Portfolio),
the **MODELINE wordmark with a crest glyph** in the middle, and three items
flush right (Shop, News, Contact), each item `margin-right: 50px` (last child
`0`) with `padding: 22px 0`, using the source's `padding: 16px 90px` bar
padding. A **92px-wide white square** carrying a search glyph SHALL be pinned
to the bar's right edge at full bar height and SHALL open the search overlay.
Items SHALL be in-page anchors per delta 3 and SHALL show a visible focus ring.

#### Scenario: Bar composition at 1440

- **GIVEN** the header is rendered at 1440px
- **WHEN** the page loads
- **THEN** the bar SHALL be 93px tall on `#081624` with `padding: 16px 90px`
- **AND** three 13px uppercase white links SHALL sit left of the centred wordmark and three right of it
- **AND** a 92px-wide white square with an accessible "Open search" name SHALL sit at the right edge

#### Scenario: Anchor navigation

- **GIVEN** the header items are rendered
- **WHEN** the user activates "Portfolio"
- **THEN** the page SHALL scroll to the portfolio band's `#portfolio` target
- **AND** every item SHALL resolve to an existing `id` on the same page (no 404, no dead `#`)

### Requirement: Mobile header with a drawer

Below **768px** the header SHALL left-align its wordmark, keep the white search
square at the right edge, hide the two item lists and expose a hamburger
toggle that opens a **white drawer** (`padding: 20px 0`, rows
`padding: 10px 25px`, `1px #efefef` separators, 14px `#081624` labels,
`box-shadow: 0 43px 40px rgba(0, 0, 0, 0.15)`) containing all six anchors. The
toggle SHALL carry `aria-expanded` and the drawer SHALL close when an item is
chosen or `Escape` is pressed.

#### Scenario: Drawer behaviour at 390

- **GIVEN** the viewport is 390px wide
- **WHEN** the user activates the hamburger
- **THEN** a white drawer SHALL open below the bar with all six anchors at 14px `#081624`
- **AND** the toggle SHALL report `aria-expanded="true"`
- **AND** the document SHALL not gain horizontal scroll while the drawer is open

### Requirement: Search overlay

The white search square SHALL open a full-viewport overlay painted **`#000`**
holding a single field **500px wide at 40px**, transparent, `#999` text,
underlined with **`2px #333`**, plus a **50px `#333` circular close control**
carrying a `+` glyph. `Escape`, the close control and a backdrop click SHALL
all close it, and closing SHALL clear the field. The field SHALL be focus-trapped
and labelled.

#### Scenario: Open, type, close

- **GIVEN** the search square is visible
- **WHEN** the user opens search, types a term and closes with the disc
- **THEN** the overlay SHALL have been visible over the page on `#000`
- **AND** the field SHALL be cleared and focus SHALL return to the search square

### Requirement: Hero carousel (965px photo band, 160px headline, two CTAs)

The hero SHALL be a **965px** full-bleed band whose slides paint a B&W fashion
photograph (`cover`, top centre) with the **24px-pitch halftone field** centred
behind the copy (delta 6). Each slide SHALL carry the page's single **`h1`** at
**160px / 192px line-height / weight 700 / `#081624`** (`margin-bottom: 42px`),
followed by two **186×66** CTAs — a white one then a navy one, `margin-right:
24px` on the first — with `padding: 179px 0 102px` inside a 581px content box.
A right-edge rail of **five 48px navy circles** (`right: 39px`, 22px apart,
white glyphs) SHALL sit over the photo, and a **rotated** "We love our brand"
line (14px white uppercase, `90deg` from `right top`) SHALL sit at the band's
bottom-right. Two **84×84** controls SHALL sit at the bottom-left — navy prev
with a white glyph, white next with a navy glyph — and the carousel SHALL
autoplay, loop, and pause on hover and under `prefers-reduced-motion`.

#### Scenario: Hero composition at 1440

- **GIVEN** the hero is rendered at 1440px
- **WHEN** the page loads
- **THEN** the band SHALL be ~965px tall with a photo and the halftone panel behind the copy
- **AND** the headline SHALL be the page's only `h1` at 160px/700/`#081624`
- **AND** the two CTAs SHALL measure 186×66 with square corners
- **AND** five 48px circular social links SHALL be stacked at the right edge

#### Scenario: Slides advance

- **GIVEN** the carousel is playing
- **WHEN** it advances (automatically or via the next control)
- **THEN** the next slide's photograph SHALL be a DIFFERENT image from the first (delta 1)
- **AND** the two 84×84 controls SHALL stay at the band's bottom-left

#### Scenario: Hero steps down on small screens

- **GIVEN** the viewport is 390px wide
- **WHEN** the hero renders
- **THEN** the headline SHALL step to ~45px
- **AND** the two CTAs SHALL stack with 20px between them and no overflow
- **AND** the rotated brand line SHALL be hidden

### Requirement: Quote band

A **444px** white band (`padding: 125px 0`) SHALL centre a pull-quote: a
**36px italic `#081624`** paragraph (max ~1,140px measure) at
`margin-bottom: 28px`, attributed to a **30px bold `#081624`** name preceded by
an em dash. The wording SHALL be a paraphrased fashion aphorism in the same
register, not the source's Oscar de la Renta attribution.

#### Scenario: Quote renders centred

- **GIVEN** the page is rendered at 1440px
- **WHEN** the quote band is in view
- **THEN** an italic 36px quote SHALL be centred with a 30px bold attribution beneath it
- **AND** the band SHALL be ~444px tall with no background fill

### Requirement: Portfolio mosaic (11 tiles, one 2×2, one deliberate gap)

The portfolio band SHALL be a **full-bleed, gap-free mosaic of squares**: 5
columns of equal width (288px at 1440), 3 rows, with the measured tile map of
the source — an **empty 288px gap tile in row 0 column 2** (the halftone
showing through), a **2×2 tile at row 0 column 4** (576×576), and the remaining
nine tiles at the source's positions. Every tile SHALL be square at every
breakpoint (height derived from width — CSS `aspect-ratio: 1`, no JS measuring),
and each SHALL show a **`#161024` overlay on hover** that grows from 80% to
100% height with a white "loadmore" label, reachable by keyboard focus. The
imagery SHALL keep the source's mix: nine B&W portraits, one warm colour plate
and one navy brand plate (delta 8). Below 768px the mosaic SHALL be 2-up with
the 2×2 tile full width and the gap tile hidden; below 480px 1-up with the 2×2
tile the same size as the others.

#### Scenario: Mosaic geometry at 1440

- **GIVEN** the mosaic is rendered at 1440px
- **WHEN** the band is in view
- **THEN** it SHALL be 3 rows of 288px squares across 5 columns (864px tall)
- **AND** row 0 column 2 SHALL be an empty tile showing the halftone
- **AND** the tile at row 0 column 4 SHALL span 576×576 across two rows and two columns

#### Scenario: Tile hover and focus

- **GIVEN** a portfolio tile is in view
- **WHEN** it is hovered or focused
- **THEN** a `#161024` overlay SHALL expand from 80% to 100% height over 0.3s with a white label
- **AND** the overlay SHALL not shift any neighbouring tile

### Requirement: About A (brand statement with a bleeding portrait)

A **1,496px** white band SHALL start with a 7-of-12 text column (686px at
1440): an **48px weight-400 `#081624`** heading, a 16px/1.8 `#60656b`
paragraph (`margin-bottom: 50px`) and a **handwritten signature placeholder**
(~233×84), while a portrait is positioned **absolutely at `right: -63px; top:
0`** and bleeds off the right edge, trimmed by the band's `overflow: hidden`.
A halftone panel SHALL sit at the band's top-right corner where the source
paints `portfolio-overlay.png` (delta 6).

#### Scenario: About A at 1440

- **GIVEN** the band is rendered at 1440px
- **WHEN** it is in view
- **THEN** the heading SHALL be 48px weight 400 `#081624` in a 7-of-12 column
- **AND** the portrait SHALL overflow the right edge by ~63px and SHALL NOT cause horizontal scroll
- **AND** the signature placeholder SHALL render beneath the paragraph

### Requirement: About B (gutters-free split: photo left, text right)

A **777px** block SHALL split edge-to-edge: a photo occupying the left half
(**720×522** at 1440, flush to the left edge and to the row, no gutter), and on
the right a text column of **534px** inset with **`padding-left: 171px`**
(`max-width: 655px`) carrying an **48px weight-400 `#081624`** heading and two
16px/1.8 paragraphs. A halftone panel SHALL sit behind the photo offset
**down 112px** and **115px wider** than it (delta 6). Below 768px the block
SHALL stack photo-over-text with 15px side padding and no offset panel.

#### Scenario: Split block at 1440

- **GIVEN** the block is rendered at 1440px
- **WHEN** it is in view
- **THEN** the photo SHALL be flush to the left viewport edge at ~720×522
- **AND** the text SHALL begin ~171px inside its half with a 48px heading
- **AND** the halftone panel SHALL be visible behind the photo's lower corner

### Requirement: Shop row (four square-cornered product cards)

A white band (`padding: 0 0 100px`, no heading) SHALL show **four** product
cards in a 4-up row (2-up at `md`, 1-up below 576px): a **portrait image at
~0.64 ratio** (`margin-bottom: 40px`), a **30px weight-400 `#081624`** product
name in an `h3` (`margin-bottom: 8px`), a **16px italic `#60656b`** price
(`margin-bottom: 20px`) and a **130×46 navy "Add to cart"** control with 11px
padding and a white 16px label. Four DIFFERENT names and four DIFFERENT prices
SHALL be used (delta 10), and the control SHALL be a `button` with an
accessible name that includes the product.

#### Scenario: Four product cards

- **GIVEN** the shop band is rendered at 1440px
- **WHEN** it is in view
- **THEN** four cards SHALL be visible in one row, each with a portrait image, a 30px name, an italic price and a 130×46 navy button
- **AND** no two cards SHALL share the same name or price

#### Scenario: Adding to cart

- **GIVEN** a product card is in view
- **WHEN** the user activates "Add to cart" for that product
- **THEN** an inline confirmation SHALL name the product and be announced via `aria-live="polite"`
- **AND** no network request SHALL be made

### Requirement: Newsletter band

A **271px** band painted **`#081624`** (`padding: 110px 0 104px`) SHALL hold a
**30px weight-400 white** heading in a 3-of-12 column and, in the remaining
9-of-12, a single-row form: a **556×57** white field (12px **uppercase
italic**, `padding: 10px 25px`, `margin-right: 30px`, placeholder "Your
E-mail", **no UA inset border** — delta 4) beside a **164×57** white
"Subscribe" button with navy 14px uppercase text. The form SHALL validate the
address client-side, block submission while invalid, show a per-field error,
and confirm success inline via `aria-live="polite"` without a network call.
Below 768px the heading SHALL gain 50px of bottom margin and the form SHALL
stack centred with a 30px gap.

#### Scenario: Submitting an invalid address

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits "not-an-email"
- **THEN** the field SHALL show an inline error and SHALL be marked `aria-invalid`
- **AND** no request SHALL be made and the page SHALL NOT reload

#### Scenario: Submitting a valid address

- **GIVEN** the newsletter form is rendered
- **WHEN** the user submits a valid address
- **THEN** a success message SHALL appear in the band and be announced via `aria-live="polite"`
- **AND** the field SHALL be cleared

### Requirement: Footer with the Component Dock attribution

A **210px** white footer (`padding: 56px 62px`) SHALL carry, at the left, the
**MODELINE wordmark** and a **12px `#081624`-at-23%-opacity** copyright line
whose current year SHALL be rendered as a value, and at the right a
three-row contact list (**15px `#60656b`**, **75px navy label spans**:
Address / Phone / Mail). The copyright region SHALL link
**`https://www.componentdock.com/`** as **"Component Dock"** and SHALL contain
no ColorLib branding, and the contact block SHALL expose `id="contact"` so the
header's Contact item has a target. Below 768px the footer SHALL centre.

#### Scenario: Footer composition

- **GIVEN** the footer is rendered at 1440px
- **WHEN** it is in view
- **THEN** the wordmark and a 12px faded copyright line SHALL be at the left and the three contact rows at the right
- **AND** the copyright region SHALL link https://www.componentdock.com/ as "Component Dock"

#### Scenario: No source-brand leakage

- **GIVEN** the built app
- **WHEN** `git grep -i colorlib apps/modeline` and `git grep -i glamour apps/modeline` run
- **THEN** both SHALL return zero hits
- **AND** the deploy target SHALL be `modeline.free.componentdock.com` in `public/CNAME` and `homepage`

## Verification checklist

- [ ] `openspec/specs/template-modeline/spec.md` is this file; `npm run spec:validate` passes.
- [ ] `apps/modeline` exists with `package.json` name `@free-react-templates/modeline`, `react`/`react-dom` set to `latest` (no exact pin), `public/CNAME` = `modeline.free.componentdock.com`, `homepage` = `https://modeline.free.componentdock.com`.
- [ ] `vite.config.ts` registers `injectUiSource()`; `src/index.css` puts the palette in `@theme` (`--color-ink: #081624`, `--color-popup: #161024`, `--color-body: #60656b`, `--color-steel: #8d9eaf`, `--color-surface: #ffffff`, `--color-line: #efefef`).
- [ ] Jost 300/400/700 + 400 italic loaded through one Google Fonts `<link>` (the source ships proprietary Futura LT as four self-hosted woff2 faces — the recreation ships the geometric substitute and the PR records it).
- [ ] Section order and measured 1440 heights match the eight-row band table (93 / 965 / 444 / 864 / 1,496 / 713 / 271 / 210; document ≈5,055px ±3%).
- [ ] Header: 93px `#081624`, `padding: 16px 90px`, three 13px uppercase white items each side of a centred crest wordmark, `margin-right: 50px`, and a 92px white search square at the right edge.
- [ ] All six nav items are in-page anchors with real targets (`#home`, `#about`, `#portfolio`, `#shop`, `#newsletter`, `#contact`); no `href="#"` and no 404.
- [ ] Mobile header ≤767: left-aligned wordmark, hamburger with `aria-expanded`, white drawer with `#efefef` rows and `0 43px 40px rgba(0,0,0,.15)` shadow; `Escape` closes it.
- [ ] Search overlay: fixed `#000`, 500px/40px transparent field with a `2px #333` underline over `#999` text, 50px `#333` circular close, focus-trapped, clears on close.
- [ ] Hero: ~965px band, B&W photo + 24px-pitch halftone panel, the page's single `h1` at 160px/192/700 `#081624`, two 186×66 square CTAs (white then navy, 24px apart), five 48px navy circles at the right edge, the rotated 14px white brand line, and 84×84 prev (navy) / next (white) controls at the bottom-left.
- [ ] Hero carries TWO different slide images (the source repeats one) and pauses on hover and under `prefers-reduced-motion`.
- [ ] Hero headline steps to 100px at ≤1199, 60px at ≤767 and 45px at ≤479; the brand line is hidden ≤767; the CTAs stack with 20px gaps ≤479.
- [ ] Quote band: 444px white, 36px italic `#081624` quote + 30px bold attribution, paraphrased copy.
- [ ] Portfolio mosaic: full-bleed, square tiles, 5 columns at 1440 (288px, 864px total), the exact source tile map including the **empty gap tile at row 0 column 2** and the **576×576 tile at row 0 column 4**; `aspect-ratio: 1` (no JS height measuring); hover/focus overlay `#161024` growing 80% → 100% in 0.3s with a white label.
- [ ] Mosaic responsive: 2-up at ≤767 with the 2×2 tile full width and the gap hidden; 1-up at ≤479 with every tile the same size.
- [ ] Mosaic imagery keeps the source mix: nine grayscale portraits, one warm colour plate, one navy brand plate.
- [ ] About A: 7-of-12 column (686px), 48px/400 heading, 16px/1.8 `#60656b` copy, signature placeholder 233×84, portrait bleeding `-63px` past the right edge with `overflow: hidden` and no horizontal scroll.
- [ ] About B: flush-left 720×522 photo, right column 534px with `padding-left: 171px` (`max-width: 655px`), 48px/400 heading, two paragraphs, halftone panel offset 112px down / 115px wider behind the photo; stacks at ≤767 with no offset panel.
- [ ] Shop: four cards (image ratio ~0.64, 30px/400 name, 16px italic `#60656b` price, 130×46 navy control), four distinct names AND four distinct prices, `aria-live` confirmation on add, no network call.
- [ ] Newsletter: 271px `#081624` band, 30px/400 white heading in 3-of-12, 556×57 white field (12px uppercase italic, no UA inset border, visible focus ring) + 164×57 white Subscribe in 9-of-12, 30px gap, client-side validation with `aria-invalid` + inline error, `aria-live` success, stacks centred ≤767.
- [ ] Footer: 210px, `padding: 56px 62px`, wordmark, 12px `#081624` at 23% opacity copyright with a rendered year, three contact rows at 15px `#60656b` with 75px navy labels, `id="contact"` present.
- [ ] Footer links https://www.componentdock.com/ as "Component Dock"; `git grep -i colorlib apps/modeline` = 0 hits; `git grep -i glamour apps/modeline` = 0 hits (source brand and source slug both absent).
- [ ] Square corners everywhere (`border-radius: 0` on every button, card, field and tile) and 50% only on the five social circles and the search-close disc; no card shadows other than the mobile drawer's.
- [ ] Halftone ornaments are CSS dot grids (24px pitch, ~2px dots, `rgba(29,29,27,.17)`), never the source PNGs; icons come from `lucide-react`.
- [ ] Placeholder imagery uses `https://picsum.photos/seed/modeline-<n>/<w>/<h>` (two hero slides, nine mosaic portraits + one colour plate + one navy plate, the About A portrait, the About B photo, four product portraits) and the signature is a text/SVG placeholder, not a copied asset.
- [ ] No horizontal overflow at 390px (`document.documentElement.scrollWidth === document.documentElement.clientWidth`) and the About A portrait bleed does not widen the document.
- [ ] `scripts/verify-app.sh modeline` passes: typecheck, lint, 100% coverage tests, build.
- [ ] Desktop (1440) and mobile (390) renders compared band-by-band against the reference; deviations listed in the PR.
- [ ] `npm install` run at the repo root so `package-lock.json` registers the workspace; `grep -c "@free-react-templates/modeline" package-lock.json` ≥ 1.
- [ ] TEMPLATES.md rows **1028**, **1583** and **1712** were re-opened `[x]` → `[ ]` on the branch, then marked `[x]` with `https://modeline.free.componentdock.com` after merge (prep stream does none of this); `apps/glamour` untouched.
