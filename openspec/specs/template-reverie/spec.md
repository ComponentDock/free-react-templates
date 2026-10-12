# Template: Reverie (Wedding)

## Purpose

Reverie is a single-page **wedding planning & events** marketing site in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Weddingdreams"** template design (source slug `weddingdreams` — a modern
2025/2026-era page: a white absolute header with a serif `DREAMS` wordmark and
letter-spaced capitals, a full-bleed bridal-bouquet photo hero whose bottom edge
curves away (the transparent `hero.png` gives the band its wave), an "Our
services" card grid, a filterable masonry photo gallery, a photo-band counter
strip, a **green request card that overlaps the counter band** and opens a white
four-field enquiry form, an "Our blog" trio, a client-logo carousel strip and a
dark olive footer with a newsletter pill and social discs).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths, no brand marks, no analytics or map keys) and never reuses
the source name, its copy verbatim or its typos.

- **Source:** https://colorlib.com/wp/template/weddingdreams/ (listed in
  TEMPLATES.md under `## Wedding` at line **3108**; the slug `weddingdreams`
  appears in no `openspec/specs/` folder and no `docs/templates/` folder on main
  before this one).
- **Preview:** `https://preview.colorlib.com/theme/weddingdreams/` returns
  **HTTP 200**, `text/html; charset=utf-8`, **32,645 B**, sha256
  `1d447eb2aae1ad7c1fe6c858c108433d19b879b5b3013f0fb6d05c092d6b2d26` with
  `<title>Dreams | Wedding Planning and Events</title>` (verified 2026-10-12).
  The slug-only path is the only live one — `theme/bootstrap/weddingdreams/`
  returns 404, `/downloads/free/weddingdreams.zip` returns 404 and
  `colorlib.com/etc/cs/weddingdreams/index.html` returns 404, so **the live
  preview is the sole DOM/CSS reference for the landing page** (no archive twin
  to diff) — the theme's seven inner pages are live as well (inventoried at the
  end of this section).
  Reference artifacts saved for this prep (research date 2026-10-12):
  `/tmp/weddingdreams/live.html`, `/tmp/weddingdreams/main-style.css`
  (**151,051 B**, sha256
  `b5f88b0d5015582c93d77966ee10ec414fd94c4fc22988f10ff2e43d48d01601`),
  `/tmp/weddingdreams/swiper.css` (14,615 B, sha256 `f4760c4f…`),
  `/tmp/weddingdreams/main.js` (**50,273 B**, sha256
  `5aac3584284fddf69f8084fe77fdc4e90725185ed2d34e0367ed35c05393c17c`),
  `/tmp/weddingdreams/shot.png` (screenshot, 1200×946) and the live scroll
  captures under `/tmp/weddingdreams/live/`.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/weddingdreams-free-template.jpg
  (HTTP 200, **133,536 B**, served as **JPEG** → decoded to PNG with
  `ffmpeg -y -i shot.raw shot.png`, 1200×946, reviewed visually 2026-10-12). It
  is a browser-chrome mock of the top of the page (header + hero + the first
  services row).
- **New name:** `reverie` (apps/reverie, `@free-react-templates/reverie`) — the
  dream motif of the design (the source titles itself "Dreams"); the source name
  "Weddingdreams"/"Dreams", its `logo.svg`/`footer-logo.svg` wordmarks, its
  photos, its icon set and its copy are never reused. `reverie` collides with no
  `apps/` folder, no `openspec/specs/template-*` folder, no `docs/templates/`
  folder, no bold template name in TEMPLATES.md, and is a **zero-substring** hit
  repo-wide (`git grep -il reverie origin/main -- apps openspec docs/templates`
  → empty, verified 2026-10-12). `reverie` is also not a ColorLib source name:
  `colorlib.com/wp/template/reverie/` and `preview.colorlib.com/theme/reverie/`
  both 404. Wedding-family names already taken include aisle, altar, matrimony,
  affiance, betrothal, celebrant, trousseau, paperie, wedlock, nuptia, nuptials,
  troth, espousal, lensly, vows, knot, confetti and chapel.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

- **Source inner pages (live reference, curl-probed 2026-10-12):** the landing
  page is the design of record, but the same theme ships **seven** further live
  pages at `https://preview.colorlib.com/theme/weddingdreams/<page>`, all
  **HTTP 200** (`curl -sS` basis) — and they are the authoritative reference for
  the sections this one-pager must invent: `services.html` (26,315 B — the "Our
  services" card grid plus a "Pricing Plans" table with $195 / $235 / $335
  tiers), `portfolio.html` (20,585 B), `team.html` (27,642 B — "OUR PHOTOGRAPHY
  TEAM"), `about.html` (34,416 B — "Wedding Vendors & Venues We Love!" plus the
  8365 / 568 / 849 counters), `blog.html` (30,733 B), `blog-details.html`
  (33,498 B) and `contact.html` (19,993 B). None of them is copied; they are
  read for structure, copy kind and figures.

## Design reference (replication findings)

- **Original:** ColorLib "Weddingdreams" (source slug `weddingdreams`,
  https://colorlib.com/wp/template/weddingdreams/). The reference is a modern
  static build: a bundled **Bootstrap 5** (`--bs-*` custom properties) plus a
  theme layer in `css/style.min.css`, a **Swiper 14.3.0** carousel for the
  feature gallery/logos (loaded from `vendor/swiper/14.3.0/swiper-bundle.min.*`),
  and `js/main.min.js` (50,273 B) for the mobile menu, search overlay,
  counter animation and filter logic. The recreation uses React state, Tailwind
  utilities and `lucide-react` instead and copies nothing. The source already
  renders most glyphs from an **inline SVG sprite** in the page footer
  (`<use href="#i-send">`, `#i-heart`, …) and uses **Font Awesome 7**
  (`fa-brands fa-facebook-f` etc.) for the social discs.
- **Preview URL:** `https://preview.colorlib.com/theme/weddingdreams/` → **HTTP
  200** (32,645 B). Every token below was read out of `css/style.min.css` **and
  cross-checked against the live render in a browser** (computed styles +
  `getBoundingClientRect` on 2026-10-12); geometry was captured at the harness
  viewport (**780×780**) with a full-page height of **5,678 px**, so absolute
  pixel values are labelled with that viewport and the desktop-intent values
  come from the stylesheet.
- **Fonts (both self-hosted in the source as `.woff2` files; both served by
  Google Fonts, so the recreation links the *variable* faces — the shipped link
  is verified 200):
  `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap`**
  - **Font delivery (reference fact, re-verified 2026-10-12):** the source's
    `css/style.min.css` carries **15 `@font-face` rules** — **14 self-hosted
    design files** (Raleway 300/400/500/600/700 and Cormorant Garamond 400/600,
    each in `latin` + `latin-ext`, under `../fonts/raleway/…` and
    `../fonts/cormorant-garamond/…`, **every design face `font-display: swap`**)
    plus a **Font Awesome 7 Brands** face
    (`../fonts/fontawesome/fa-brands-400.woff2`) that is the page's only
    **`font-display: block`**. The page loads **no** `fonts.googleapis.com`
    reference at all (no `<link>`, no stylesheet `@import`) and no `/cf-fonts/`
    proxy — the only open Wedding item whose faces are genuinely self-hosted. We
    therefore link Google Fonts **with `&display=swap`** (the source's own value,
    so first paint matches) and copy no `.woff2`; the icon face is replaced by
    inline-SVG brand marks (see the adaptation table).
  - **Cormorant Garamond** (serif display) — headings, the `DREAMS` wordmark,
    section titles, the italic blog meta, the button labels, the counter numbers.
  - **Raleway** (sans body, `body{font-family:Raleway, sans-serif}`) — body
    copy, nav labels, footer text, form controls.
- **Screenshot / live-render description:**
  - **Header:** a **white absolute bar** across the top (`position:absolute;
    top:0; left:0; width:100%; background:#fff; box-shadow:0 5px 10px
    #9a57571a`) holding, left→right: a serif `DREAMS` wordmark (`img/logo.svg`,
    131×23); a centred, uppercase, letter-spaced-capitals nav — HOME · SERVICES ·
    PORTFOLIO · PAGES · NEWS · CONTACT, the current item carrying a **5 px black
    dot** centred under it; and a right cluster with social links
    (`#444`, 16 px) and a **magnifier** that opens a full-screen search overlay.
  - **Hero:** a full-bleed bridal-bouquet photograph (`hero.png` 1923×866,
    **RGBA with fully transparent bottom corners → the band's bottom edge curves
    away**, i.e. the wave is baked into the source image, not a CSS shape),
    `height:866px; padding-top:330px`, `background-size:cover; position:top
    center`. Centred white overlay type in three registers: a small
    **pinecone/leaf ornament** (`img/icon/hi.png`, 66×51), then `h5` "WELCOME TO
    DREAMS" (uppercase, letter-spacing 2 px) and `h1` "PLAN THE PERFECT WEDDING"
    (uppercase, **Cormorant Garamond, 48 px**), then a one-line grey subtext.
    There is no CTA button in the hero.
  - **Services:** white `spad` band (`padding:100px 0`), centred `h2` "OUR
    SERVICES" (uppercase, `#111`, letter-spacing 4 px) with a small squiggle
    ornament (`img/icon/ti.png`, 50×15) under it, then **six** cards in a 3×2
    grid (`col-lg-4 col-md-6 col-sm-6`): Photos & Video, Wedding Makeup,
    Restaurant, Live Music & DJ, Wedding cake, Honeymoons — each a white
    `services__item` (`padding:40px 30px 30px`, `transition:all .5s`, centred)
    with a line-art icon image (≈71×70) above a `h4` title and a lorem blurb;
    on hover the card gains `border-radius:10px` and `box-shadow:0 5px 39px
    #9a57571a`.
  - **Features:** white `spad` band with `h2` "OUR WEDDING FEATURE" and a
    **filter row** of six text buttons (All · Couple · Event · Music Live ·
    Honeymoon · Photography, 18 px uppercase `#0d0d0d`, 40 px apart, the active
    one underlined), then a **CSS-grid masonry gallery**: `display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr)); grid-auto-rows:1px;
    column-gap:15px`, each `fg__item` spanning rows (`grid-row-end:span 268`
    base — height 253 px; `large_item` 505 px / span 520; `mid_item` 380 px /
    span 395), a photo background with a hover overlay (`:after` full-bleed
    `#000000b3`, fading in) revealing a category span + a white `h2` couple
    name ("Ceremonies" / "Christina & Evelyn", offset in from −40 px and sliding
    to place with `transition:all .6s`). Below the grid a centred **"View more"**
    load-more link.
  - **Counter band:** a full-bleed photo band (`counter-bg.*`, `set-bg`), `spad`
    with `padding-bottom:300px`, holding **four** counter items — a line-art
    icon image (≈84×90) over an animated `h2.counter_num` (48 px `#111`,
    Cormorant Garamond) and a label `p`: **8365 Photos · 568 Happy Couples ·
    849 Toasts · 2574 Wedding Cakes** (the rolled-up values are the source's
    numbers; `main.min.js` animates 0→value).
  - **Request (overlapping card):** the section pulls itself up over the counter
    band (`margin-top:-235px`). Its top block `.request__form .section-title` is
    a **solid olive-green card header** (`background:#5e6350`, `padding:60px 145px
    40px`, `border-radius:10px 10px 0 0`) with a small white uppercase
    letter-spaced `span` "LET'S MEET" and a white `h2` "MAKE A REQUEST", then a
    centred subtext ("Should you have any enquiries about Wedding Planner,
    please fill in our enquiry form."). Below it the **white form panel**
    (`background:#fff`, `border-radius:0 0 10px 10px; box-shadow:0 5px 10px
    #9a57571a; padding:60px 55px 50px`) carries **four fields** in a 2×2 grid —
    *Name*, *Email*, *Services* (select), *Guest* (select) — and a centred
    submit button **"SEND A REQUEST"** (`.site-btn`). Inputs: `height:50px;
    border:1px solid #e1e1e1; padding-left:20px; font-size:14px; color:#666`.
    Its two controls are real `<select class="nice-select" name="service">` /
    `name="guests"` elements carrying the source's **own option lists** — a
    `Services` placeholder then *Photos & Video · Wedding Makeup · Restaurant ·
    Live Music & DJ · Wedding Cake · Honeymoon*, and a `Guest` placeholder then
    *Up to 50 · 50 to 100 · 100 to 200 · More than 200* (every real option has
    **no `value` attribute** — its label is the value). The form also ends with a
    **visitor-invisible decoy field** (`<input type="text" name="website"
    tabindex="-1" autocomplete="off" hidden>`, repeated in the footer pill form)
    — see the endpoints bullet below for the delta.
  - **Blog ("latest"):** white `spad` band, `h2` "OUR BLOG" and **three** cards
    — a photo, a meta row (`ul li`: "Inspiration" · "Nov 27, 2019" · "05
    Comments", 17 px **italic Cormorant Garamond `#6b705d`**, 25 px apart), and
    an `h4` title link "Newlyweds share first wedding photos" (26 px/36 px
    `#111`).
  - **Logo strip:** a light band (`background:#f7f8f3; padding:35px 0`) with an
    owl/Swiper carousel of **ten** monochrome event-vendor logos (Petal Row,
    Willowmere EVENTS, Linen & Lace, …) — recreate as placeholder wordmarks.
  - **Footer:** dark olive (`background:#3b3e33; padding-top:65px`).
    `footer__top` = a left **newsletter block** (`h4` "Newsletter Subscribe" +
    "Sign up and get 10% off your wedding!" + a pill form: a full-width
    translucent email input `#ffffff1a` with a flush-right send button) and a
    right **social row** (four 50 px circles, `#ffffff1a` fill, `border-radius:
    50%`, white glyphs, 6 px apart). Then four columns (`col-lg-3`): footer logo
    (serif `DREAMS`, white), "OPEN TIME" (Mon – Fri: 8:00am – 7:00pm · Closed on
    weekend), "PHONE & EMAIL" (hello@example.com · +1 (503) 555-0142) and
    "ADDRESS" (203 Fake St., Portland, OR 97205, USA). A `footer__copyright`
    bar closes it: "Copyright © 2026 All rights reserved | This template is made
    with ♥ by …" (left) and Terms & Use · Privacy Policy (right) — the source
    credits Colorlib, **the recreation replaces this with the Component Dock
    link and keeps the same shape**. The `2026` there is not a literal in the
    design: the markup ships `<span class="js-year">2026</span>` and the theme's
    own `js/main.min.js` rewrites it on load
    (`document.querySelectorAll(".js-year").forEach(w => w.textContent =
    String(new Date().getFullYear()))`, invoked from `P(){S(),F(),O()}`), so the
    recreation renders the **computed current year** in that slot.
  - **Search overlay:** a full-screen `#search-overlay` modal (`search-model`)
    with a close control and a centred "Search" form (opened by the header
    magnifier).
- **Section order (1:1, measured top-to-bottom; offsets/heights from the live
  pass at 780 px width, page height ≈ 5,678 px):**
  1. `a.skip-link[href="#main"]` — the document's **first body element**, immediately
     before the header ("Skip to content", hidden at `top:-100px`, sliding to
     `top:10px` on `:focus`); it targets `<main id="main" tabindex="-1">`, which
     opens after the header and closes after the logo strip.
  2. `header.header` — absolute white bar (y 0, ~83 px tall), logo / nav / right cluster.
  3. `section.hero.set-bg` — y 0, **866 px** (overlapped by the header).
  4. `section.services.spad` — y 866, **1,186 px** (title + 6 service cards + `spad`).
  5. `section.features.spad` — y 2,052, **1,143 px** (title + filter row + masonry gallery + View more).
  6. `div.counter.spad.set-bg` — y 3,196, **667 px** (four counters, extra bottom padding).
  7. `section.request` — y 3,628, **683 px** (pulled up `margin-top:-235px`, so it overlaps the counter band).
  8. `section.latest.spad` — y 4,311, **623 px** (three blog cards).
  9. `div.logo` — y 4,934, **139 px** (light logo carousel strip).
  10. `footer.footer` — y 5,073, **605 px** (subscribe + social, four columns, copyright bar).
  11. `div#search-overlay.search-model` — fixed full-screen search modal.
  The `<main id="main">` landmark wraps items 3–9 (header and footer sit outside it).
- **Responsive-format image layer (measured 2026-10-12, `curl -sS` basis) — a
  FORMAT switch, not a resolution one:** the page holds **17 `<picture>` blocks**
  — 14 wrapping the line-art icons (the hero ornament `img/icon/hi.*`, both
  `ti.*` title squiggles, the six `si-N.*` service icons, the four `ci-N.*`
  counter icons) and **3** wrapping the blog cards (`img/blog/latest-1..3.*`) —
  each one a `<source srcset="img/…avif" type="image/avif">` over a raster
  fallback `<img src="img/…png|jpg" width=… height=… alt="" loading=… decoding=…>`
  (the hero's ornament is the eager one: `fetchpriority="high" decoding="sync"`,
  no `loading`). The `srcset` values are **bare** — no `600w` width descriptor,
  no `2x` density descriptor, **no `sizes` attribute and no `media=` art
  direction anywhere on the page**; the format is carried by `type=`, and every
  image is served twice (`.avif` + raster). Eight further bands — the hero, the
  six feature tiles and the counter band — carry the same switch in an **inline
  `style` attribute** on the `.set-bg` element:
  `background-image: image-set(url('img/hero.avif') type('image/avif'), url('img/hero.png') type('image/png'))` (the same form on `img/features/feature-N.avif|jpg` and `img/counter-bg.avif|jpg`)
  (again `type()` descriptors, never `1x`/`2x`), and `css/style.min.css`
  declares three more for decorative PNG ornaments
  (`.request.request--services .request__form:before` / `:after`,
  `.pricing__item:after`), each preceded by a plain `background:url(…png)`
  fallback. The head also preloads the AVIF hero
  (`<link rel="preload" as="image" href="img/hero.avif" type="image/avif" fetchpriority="high">`).
  **The layer is source-only and is NOT reproduced:** every photograph becomes a
  seeded `picsum.photos` placeholder and every line-art icon a `lucide-react`
  glyph, so each image renders as a single element with one URL — no `<picture>`,
  `srcset`, `type=` or `image-set()` in app code and no request to a ColorLib
  host (`img/hero.avif` is never fetched).
- **Document head + source-only third-party layer (measured 2026-10-12,
  `curl -sS` basis):** this page is the only item in the open set that ships a
  metadata layer, and all of it is **placeholder** data — a **5-property `og:*`**
  set (`og:type=website`, `og:site_name=Dreams`, `og:title`,
  `og:description` = the meta description, `og:image=img/og-image.jpg`), a
  **4-property `twitter:*`** set (`twitter:card=summary_large_image` + title +
  description + image), `rel=canonical` → **`https://your-domain.com/`**,
  an `application/ld+json` **`LocalBusiness`** block (`Dreams Wedding Planner`,
  `hello@example.com`, `+1-503-555-0142`, 203 Fake St., Portland),
  `meta name=generator "Wedding Dreams 3.0.2"` and `rel=icon img/favicon.svg`.
  It also loads **its own analytics** (`gtag.js?id=G-XXXXXXXXXX` — a
  placeholder id — plus the inline `dataLayer` bootstrap). The recreation writes
  its **own** title/description/canonical/favicon (canonical = the app's
  `*.free.componentdock.com` URL) and ships **no** third-party tag, no
  `img/og-image.jpg` reference and no source metadata value.
- **Two source form endpoints, not one:** the enquiry card's form posts to
  `php/send-email.php` (`data-success="Thank you! We will reply within one
  working day."`) while the **footer pill** form posts to `php/subscribe.php`
  (`data-success="Thank you! You are on the list."`); the search overlay's form
  is `action="#"`. Both are replaced by client-side validation with **two
  distinct** inline success states.
- **Both forms also carry a hidden decoy:** the enquiry form and the footer pill
  each end with `<input type="text" name="website" tabindex="-1"
  autocomplete="off" hidden>` — an off-screen bot trap with no label, no
  `required` and no visible box. The recreation ships **no** hidden decoy field
  (there is no server-side POST to protect) and keeps only the visible control
  set; this is a documented delta, not an omission.

## Design tokens

Read from `css/style.min.css` (canonical) and confirmed against the live render
(`getComputedStyle`). Values in `rgba(...)` keep the source's own alpha.

| Token | Value | Use |
| --- | --- | --- |
| Accent (sage/olive) | `#6b705d` | blog meta text, text links, `:focus-visible` |
| Accent (button grey-green) | `#a3a698` | `.site-btn` / `.primary-btn` fill |
| Request card header | `#5e6350` | `.request__form .section-title` green block |
| Accent (rose tint, 10% α) | `#9a5757` `1a` → `rgba(154,87,87,.102)` | header + card/request shadow, services hover shadow |
| Heading ink | `#111` | all `h1–h6`, `.section-title h2`, counter numbers |
| Body / nav ink | `#0d0d0d` | nav labels, filter buttons |
| Body copy | `#666` / `#444` | paragraphs / social-link icons |
| Alt surface | `#f6f7f1` | alternate light sections (testimonial/pricing in sibling pages) |
| Logo strip surface | `#f7f8f3` | `.logo` band |
| Footer surface | `#3b3e33` | `.footer` |
| Dark panel | `#111` | nav dropdown |
| Hairline / borders | `#e1e1e1`, `#dee2e6` | form input borders |
| Overlay (gallery) | `#000000b3` → `rgba(0,0,0,.7)` | `.fg__item:after` hover veil |
| Translucent on dark | `#ffffff1a` → `rgba(255,255,255,.102)` | footer input + social discs |
| Display font | `Cormorant Garamond`, serif | headings, wordmark, buttons, blog meta (italic), counters |
| Body font | `Raleway`, sans-serif | body, nav, footer, form controls |
| Nav label | 14 px, uppercase, `letter-spacing:2px`, `#0d0d0d` | header menu |
| Section title | uppercase, `#111`, `letter-spacing:4px` | `h2` titles |
| Primary button | 14 px Cormorant 600, uppercase, `letter-spacing:2px`, `padding:14px 34px 12px`, fill `#a3a698`, text `#111`, **square** | `.site-btn` |
| Hero | height 866 px, padding-top 330 px, cover/top-center, curved bottom edge (baked into `hero.png`) | hero band |
| Section rhythm | `.spad` `padding:100px 0` (counter adds `padding-bottom:300px`) | vertical spacing |
| Card shapes | services hover `border-radius:10px`; request header `10px 10px 0 0`; request form `0 0 10px 10px`; inputs square; slicknav toggle 4 px | radii |
| Card shadows | `0 5px 10px #9a57571a` (header/request), `0 5px 39px #9a57571a` (services hover) | soft rose-tinted shadows |
| Gallery grid | `grid-template-columns:repeat(3,minmax(0,1fr)); grid-auto-rows:1px; column-gap:15px`; item row-span 268 (253 px), mid 395 (380 px), large 520 (505 px) | masonry |
| Social disc | 50×50, `border-radius:50%`, `#ffffff1a`, white 18 px glyph, `margin-right:6px` | footer socials |
| Skip link | `#111` fill, white 14 px/600, `padding:10px 18px`, `top:-100px` → `top:10px` on `:focus`, `z-index:100000` | off-screen "Skip to content" link before the header |

## Requirements

### Feature: Header (absolute white bar with dropdown, socials and a search overlay)

#### Scenario: The header renders as an absolute white bar with the wordmark and six-item nav

- **Given** the page loads
- **When** the header renders
- **Then** it is `position:absolute; top:0; left:0; width:100%`, `background:#fff`,
  `box-shadow:0 5px 10px rgba(154,87,87,.102)`, so it floats over the hero without
  reserving layout space
- **And** the app's own serif wordmark ("REVERIE", Cormorant Garamond) sits at the
  left (never the source's `logo.svg` or the source name "Dreams"/"Weddingdreams")
- **And** the nav carries exactly **six** destinations — Home, Services, Portfolio,
  Pages (dropdown), News, Contact — as uppercase labels at 14 px,
  `letter-spacing:2px`, `#0d0d0d`
- **And** the current item ("Home") shows a 5×5 px `#0d0d0d` dot centred under its
  label (`a:after`, horizontally centred, `bottom:-9px`), matching the source
- **And** the right cluster shows the social links (`#444`, 16 px) and an icon-only
  magnifier button with an `aria-label` that opens the search overlay

#### Scenario: The "Pages" item opens a dark dropdown

- **Given** the desktop nav is visible
- **When** the "Pages" item is hovered or focused
- **Then** a `#111` panel appears under it (`width:140px; left:0; top:50px;
  padding:2px 0`, `transition:all .5s`) with three block rows — About, Team,
  Blog Details — as white 12 px/500 `capitalize` links (`padding:8px 20px`)
- **And** the panel is keyboard operable (`Escape` closes it; the trigger reports
  `aria-expanded`; focus order matches the visual order), the source binds hover
  only so the click/keyboard path is a documented improvement
- **And** the trigger's dot indicator is suppressed inside the dropdown rows
  (`a:after{display:none}`)

#### Scenario: The header collapses to a mobile toggle below the lg breakpoint

- **Given** the viewport is below the source's `lg` breakpoint (992 px)
- **When** the header renders
- **Then** the desktop nav is replaced by a toggle (the source uses slicknav; the
  recreation uses a `lucide-react` Menu button with `aria-expanded`) that opens the
  six destinations stacked in an in-flow panel
- **And** every link closes the panel, and a `focus-visible` ring is present on the
  toggle and links (the source's slicknav provides neither)

#### Scenario: The magnifier opens a full-screen search overlay

- **Given** the header is rendered
- **When** the magnifier button is activated
- **Then** a fixed full-screen overlay (`#search-overlay`, `display:none` by
  default) becomes visible with a close control and a centred "Search" text field
- **And** `Escape` and the close control dismiss it and return focus to the
  magnifier; the overlay never traps focus in the page behind it

### Feature: Hero (full-bleed bridal photo with a curved bottom edge)

#### Scenario: The hero renders the photo band with the three-register overlay type

- **Given** the page loads
- **When** the hero renders
- **Then** it is a full-bleed photo band, `height:866px; padding-top:330px`,
  `background-size:cover; background-position:top center`, using a placeholder image
  (never the source's `hero.png`/`hero.avif`)
- **And** the bottom edge **curves away** — the source bakes a transparent wave into
  its RGBA hero image, so the recreation reproduces it with an SVG mask / `clip-path`
  or a curved divider rather than copying the image
- **And** the centred overlay shows, in order: a small white ornament glyph
  (`lucide` substitute for `img/icon/hi.png`), an `h5` "WELCOME TO REVERIE"
  (uppercase, letter-spacing 2 px, white), an `h1` "Plan the perfect wedding"
  (uppercase, Cormorant Garamond, **48 px**, white) and a one-line grey subtext
- **And** the hero contains no CTA button (matching the source)

#### Scenario: The hero overlay stays legible over any placeholder photo

- **Given** the hero renders with a random placeholder photograph
- **When** the image is dark or busy
- **Then** the white overlay type keeps contrast (the source has no scrim; add the
  minimal scrim or text-shadow needed and record it as a delta)
- **And** the hero is decorative-only: no interactive elements except none (no link)

### Feature: Services (six-card grid with hover lift)

#### Scenario: The services band renders six cards with an ornamented title

- **Given** the services section renders
- **When** the band is in view
- **Then** the centred `h2` reads "OUR SERVICES" (uppercase, `#111`,
  `letter-spacing:4px`) with a small ornament beneath it
- **And** **six** cards render in a responsive grid (3-up desktop, 2-up tablet,
  full-width mobile), each a white `services__item` (`padding:40px 30px 30px`,
  centred) with a line-art icon, a `h4` title (22 px uppercase, letter-spacing 2 px)
  and a short blurb
- **And** the titles are: Photos & Video, Wedding Makeup, Restaurant, Live Music &
  DJ, Wedding cake, Honeymoons
- **And** icons come from `lucide-react` (camera, sparkles/brush, utensils, music,
  cake, plane), never the source's `si-*.png` images

#### Scenario: A service card lifts on hover

- **Given** a service card is rendered
- **When** it is hovered
- **Then** it gains `border-radius:10px` and `box-shadow:0 5px 39px
  rgba(154,87,87,.102)` with a `.5s` transition, matching the source
- **And** the same treatment is reachable via `:focus-within`/keyboard and is
  reduced-motion safe

### Feature: Features (filterable masonry photo gallery)

#### Scenario: The filter row and masonry gallery render six items

- **Given** the features section renders
- **When** the band is in view
- **Then** the centred `h2` reads "OUR WEDDING FEATURE" and a filter row shows
  **six** text buttons — All, Couple, Event, Music Live, Honeymoon, Photography —
  at 18 px uppercase `#0d0d0d`, spaced `margin-right:40px`, the active one marked
  with an underline
- **And** the gallery is a CSS-grid masonry (`grid-template-columns:
  repeat(3,minmax(0,1fr)); grid-auto-rows:1px; column-gap:15px`) of **six** tiles
  whose row spans vary (base 253 px, mid 380 px, large 505 px) to recreate the
  source's staggered layout
- **And** each tile is a placeholder photo with a category span and a white
  `h2` couple name ("Ceremonies" / "Christina & Evelyn"), hidden until hover
- **And** a centred "View more" load-more link closes the section

#### Scenario: A tile reveals its overlay text on hover

- **Given** a gallery tile is rendered
- **When** it is hovered (or focused, for keyboard parity)
- **Then** a full-bleed `rgba(0,0,0,.7)` veil (`:after`, `transition:all .4s`)
  fades in and the category span slides in from −40 px and the couple name from
  +40 px (`transition:all .6s`, both white), matching the source
- **And** the tile is a real link/button with an accessible name (the source's tiles
  are non-focusable `div`s — making them focusable is a documented improvement)

#### Scenario: A filter button narrows the gallery

- **Given** the filter row is rendered
- **When** a category button is activated
- **Then** it becomes the active button and the gallery shows only tiles whose
  category matches (the "All" button restores every tile)
- **And** the filter state is announced (e.g. `aria-pressed` per button), and the
  source's hidden-items behaviour is preserved 1:1 for "All"

### Feature: Counter band (photo strip with four animated counters)

#### Scenario: The counter band renders four counters on a photo background

- **Given** the counter band renders
- **When** it scrolls into view
- **Then** it is a full-bleed photo band (`spad` with `padding:100px 0 300px`) with
  **four** centred items, each a line-art icon over a large `h2` number
  (48 px, `#111`, Cormorant Garamond) and a label
- **And** the labels/values are: 8365 Photos, 568 Happy Couples, 849 Toasts,
  2574 Wedding Cakes
- **And** icons come from `lucide-react` (images, heart, wine/glass, cake), never
  the source's `ci-*.png` images

#### Scenario: Each number counts up when the band enters the viewport

- **Given** the counter band is below the fold
- **When** it enters the viewport
- **Then** each number animates from 0 to its value **once** (an
  `IntersectionObserver`-gated count-up), and the final value equals the source's
  number exactly
- **And** the animation is skipped when `prefers-reduced-motion: reduce` is set,
  showing the final value immediately

### Feature: Request card (green header overlapping the counter, white four-field form)

#### Scenario: The request section overlaps the counter band

- **Given** the counter band and request section render in order
- **When** the page lays out
- **Then** the request section is pulled up over the counter band
  (`margin-top:-235px`, matching the source) so the green card sits on the photo
- **And** the pull-up does not clip the counters or create horizontal overflow at
  any breakpoint

#### Scenario: The green card header and white form panel render

- **Given** the request section renders
- **When** it is in view
- **Then** the card top is an olive-green block (`background:#5e6350`,
  `padding:60px 145px 40px`, `border-radius:10px 10px 0 0`) with a white uppercase
  letter-spaced span "LET'S MEET" and a white `h2` "MAKE A REQUEST", plus a centred
  subtext
- **And** below it a white panel (`border-radius:0 0 10px 10px; box-shadow:
  0 5px 10px rgba(154,87,87,.102); padding:60px 55px 50px`) holds **four** fields
  in a 2×2 grid — Name, Email, Services (select) and Guest (select) — plus a
  centred **"SEND A REQUEST"** submit button
- **And** inputs are `height:50px`, `border:1px solid #e1e1e1`, `padding-left:20px`,
  14 px `#666`, and the button is the square `.site-btn` (fill `#a3a698`, `#111`
  text)

#### Scenario: The enquiry form validates and confirms submission

- **Given** the request form is rendered
- **When** the user submits with missing/invalid fields
- **Then** per-field validation messages appear and submission is blocked until the
  form is valid, then an inline success state replaces the form (the source's
  enquiry card posts to `php/send-email.php` — a different destination from the
  footer pill's `php/subscribe.php`, so the copy is not interchangeable)
- **And** labels are associated with every control (`<label htmlFor>`), the selects
  carry the source's option lists (services: Photos & Video · Wedding Makeup ·
  Restaurant · Live Music & DJ · Wedding Cake · Honeymoon; guests: Up to 50 ·
  50 to 100 · 100 to 200 · More than 200), and focus moves to the first invalid
  field on submit
- **And** no visitor-invisible decoy field ships — the source's `name="website"`
  bot trap is named in the endpoints bullet above and intentionally dropped

### Feature: Blog (three-card "Latest" trio)

#### Scenario: The blog band renders three cards with meta and titles

- **Given** the blog ("latest") section renders
- **When** it is in view
- **Then** the centred `h2` reads "OUR BLOG" and **three** cards render, each with
  a placeholder photo, a meta row — "Inspiration" · "Nov 27, 2019" · "05 Comments"
  (17 px italic Cormorant Garamond `#6b705d`, 25 px apart) — and an `h4` title link
  "Newlyweds share first wedding photos" (26 px/36 px `#111`)
- **And** each title is a real link with a `focus-visible` ring and a meaningful
  accessible name

### Feature: Logo strip (light band with a vendor-logo carousel)

#### Scenario: The logo band renders ten placeholder vendor wordmarks

- **Given** the logo band renders
- **When** it is in view
- **Then** it is a light band (`background:#f7f8f3; padding:35px 0`) showing
  **ten** monochrome placeholder vendor wordmarks (never the source's client logos)
- **And** it scrolls as a carousel (the source uses Swiper/owl) — a simple CSS/JS
  marquee is acceptable if it pauses on hover and is reduced-motion safe

### Feature: Footer (newsletter, social discs, four columns, copyright bar)

#### Scenario: The footer renders the subscribe row and four columns

- **Given** the footer renders
- **When** it is in view
- **Then** it is dark olive (`background:#3b3e33; padding-top:65px`) and its top row
  holds a left newsletter block (`h4` "Newsletter Subscribe" + "Sign up and get 10%
  off your wedding!" + a pill form with a translucent input and a flush-right send
  button) and a right social row of **four** 50 px circles (`border-radius:50%`,
  `#ffffff1a` fill, white glyphs, 6 px apart)
- **And** four columns follow (footer logo · "OPEN TIME" · "PHONE & EMAIL" ·
  "ADDRESS") with the source's exact content (Mon – Fri: 8:00am – 7:00pm / Closed on
  weekend; hello@example.com / +1 (503) 555-0142; 203 Fake St., Portland, OR 97205,
  USA)

#### Scenario: The footer hosts the app's Component Dock link

- **Given** the footer copyright bar renders
- **When** it is in view
- **Then** the left text keeps the source's shape ("Copyright © <year> All rights
  reserved | This template is made with ♥ by …") but the trailing link is
  **"Component Dock" → https://www.componentdock.com/** (the source's Colorlib
  credit is **never** reproduced)
- **And** the right side lists Terms & Use and Privacy Policy as real in-page
  anchors

### Feature: Image delivery and the source-only format layer

#### Scenario: The recreation flattens the source's `<picture>` / `image-set` layer

- **Given** the source wraps **17** images in `<picture><source srcset="img/…avif" type="image/avif">` pairs and paints **8** bands with an inline `image-set(… type(…))` format switch
- **When** a photograph or a line-art icon renders
- **Then** it is a single element with one URL (photograph: seeded `picsum.photos` placeholder; icon: `lucide-react` component) — the recreation ships **no** `<picture>`, `<source>`, `srcset`, `sizes` or `image-set()` markup, because a single placeholder URL cannot carry a format layer
- **And** no app file requests a `.avif` asset or a `preview.colorlib.com` URL, and nothing preloads one

#### Scenario: Photographs keep the source's delivery attributes

- **Given** the source's fallback `<img>` elements carry `width`/`height` (e.g. the blog card at `360×240`), `alt=""` (they are decorative) and `loading="lazy" decoding="async"`, while the hero ornament is eager (`fetchpriority="high" decoding="sync"`, no `loading`)
- **When** the recreation renders the hero, service/counter icons and blog imagery
- **Then** below-the-fold images keep explicit `width`/`height` plus `loading="lazy"`, the hero image stays eager, and decorative images use an empty `alt` so the layout does not shift

### Feature: Document head metadata and the two source-only form endpoints

#### Scenario: The recreation declares its own head metadata

- **Given** the source's head carries a **5-property `og:*`** set (`og:type`, `og:site_name=Dreams`, `og:title`, `og:description`, `og:image=img/og-image.jpg`), a **4-property `twitter:*`** set (`twitter:card=summary_large_image` + title + description + image), a `rel=canonical` pointing at **`https://your-domain.com/`** (an unrendered placeholder), an `application/ld+json` **`LocalBusiness`** block (`Dreams Wedding Planner`, `hello@example.com`, `+1-503-555-0142`, 203 Fake St., Portland), `meta name=generator "Wedding Dreams 3.0.2"` and `rel=icon img/favicon.svg`
- **When** `index.html` is rendered
- **Then** its `<title>`, `meta description`, `rel=canonical` (the app's own `https://<name>.free.componentdock.com/` URL), favicon and any `og:`/`twitter:`/JSON-LD tags are **the recreation's own** — no source value, host, `generator` string or `img/og-image.jpg` reference appears anywhere in `apps/reverie`

#### Scenario: No third-party tag ships, and the analytics is never reproduced

- **Given** the source loads its own analytics (`<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">` plus an inline `dataLayer`/`gtag()` bootstrap, with a placeholder measurement id)
- **When** the app builds and runs
- **Then** `apps/reverie` contains no `gtag`, `dataLayer`, `googletagmanager` or `G-…` id, no third-party script or stylesheet host, and the app loads only its own bundle plus the Google Fonts `<link>`

#### Scenario: The two source form endpoints become two distinct success states

- **Given** the source's enquiry card posts to `php/send-email.php` and its footer pill form posts to `php/subscribe.php` (each carrying its own `data-success` message)
- **When** either form is submitted with valid fields
- **Then** the enquiry card shows its own "thank you, we will reply within one working day" state and the footer pill shows a **separate** "you are on the list" state, both in place (no navigation, no `php/` request)

### Feature: Shared shell, accessibility and reuse

#### Scenario: The app uses the monorepo shell correctly

- **Given** the app is `apps/reverie` (`@free-react-templates/reverie`)
- **When** it is built
- **Then** `vite.config.ts` registers `injectUiSource()`, shared UI comes from
  `packages/ui` (via `cn()`), fonts load from Google Fonts via a `<link>` in
  `index.html`, icons come from `lucide-react`, images are
  `https://picsum.photos/seed/reverie-<n>/<w>/<h>` placeholders
- **And** no app file references ColorLib, its URLs, its assets or the source name
  (provenance lives only in the spec, TEMPLATES.md and the PR)
- **And** `public/CNAME` is `reverie.free.componentdock.com` and `"homepage"` is
  `https://reverie.free.componentdock.com`

#### Scenario: Interactive elements are accessible

- **Given** the page renders
- **When** it is navigated by keyboard and screen reader
- **Then** every interactive element has a visible `focus-visible` ring, icon-only
  controls have `aria-label`s, toggles report `aria-expanded`, the mobile panel and
  search overlay are dismissible with `Escape`, and colour contrast meets WCAG AA
  on the olive/green and dark surfaces
- **And** `prefers-reduced-motion` disables the counter roll-up and card/tile
  transitions

#### Scenario: A skip link precedes the header and targets the main landmark

- **Given** the source document opens with `<a class="skip-link" href="#main">Skip to
  content</a>` before the header, and the content column is wrapped in
  `<main id="main" tabindex="-1">`
- **When** the page is loaded and then tabbed into
- **Then** the first focusable element is a "Skip to content" link that is hidden
  above the viewport until focused (hidden at `top:-100px`, revealed at `top:10px`
  with `#111` fill, white 14 px/600 text and `10/18 px` padding) and moves focus to
  the main landmark when activated
- **And** the recreation's `<main>` carries the `tabindex="-1"` focus target (the repo
  shell's `id="main"`), the header sits outside the landmark, and the footer landmark
  sits outside `<main>` too — matching the source's `</main>`-before-`<footer>` split

## Fidelity rules

- Match the source's section order 1:1 (skip link → header → hero → services →
  features → counter → request → blog → logo strip → footer, plus the search
  overlay), with `<main id="main" tabindex="-1">` wrapping the content sections and
  the footer landmark outside it.
- Match the design tokens above; put the brand palette (`#6b705d`, `#a3a698`,
  `#5e6350`, `#9a5757`/rose-tinted shadows, `#111`, `#3b3e33`, `#f7f8f3`) in
  `@theme` and use them via Tailwind classes.
- Copy text is paraphrased but keeps the same _kind_ of content; the source's own
  copy (headlines, nav labels, service/blog/meta strings, footer contact lines) may
  be reproduced where it is generic, but the source **name**, wordmark and brand
  marks are never reused.
- Never copy assets — replace every image with a deterministic `picsum.photos`
  seed, every icon with `lucide-react`, and every self-hosted font (14 `.woff2`
  design files, all `font-display: swap`) with a Google Fonts `<link>` that keeps
  `&display=swap` (Cormorant Garamond + Raleway). The source's **format layer**
  (17 `<picture>`/`<source type="image/avif">` pairs + 8 inline
  `image-set(… type(…))` bands + the `<link rel="preload" as="image">` hero
  hint) is source-only infrastructure and is **flattened**, never reproduced.
- Document deltas (curved-hero implementation, click/keyboard dropdown, focusable
  tiles, form validation, Component Dock footer credit, the flattened format
  layer, the source-only head metadata) in the design notes.
- The **head metadata layer** (5 `og:*` + 4 `twitter:*` properties, `rel=canonical`
  → `https://your-domain.com/`, a `Dreams Wedding Planner` JSON-LD block,
  `meta name=generator`, `img/og-image.jpg`, `img/favicon.svg`) and the source's
  analytics (`gtag.js?id=G-XXXXXXXXXX`) are **source-only**: the app writes its own
  head facts, ships no third-party tag, and never references a source host or asset.

## Verification checklist

- [ ] `openspec validate template-reverie --type spec` passes.
- [ ] `apps/reverie` exists, package is `@free-react-templates/reverie`,
      `vite.config.ts` registers `injectUiSource()`.
- [ ] Section order matches the source 1:1 (skip link, header, hero, services,
      features, counter, request, blog, logo strip, footer, search overlay), with
      `<main id="main" tabindex="-1">` wrapping the content sections and the footer
      landmark outside `<main>`.
- [ ] A "Skip to content" link is the first focusable element, hidden above the
      viewport until `:focus` (revealed at `top:10px`, `#111` fill / white 14 px 600),
      and it moves focus to the main landmark (`tabindex="-1"`).
- [ ] Header: absolute white bar, six nav items, current-item dot, dark `#111`
      Pages dropdown, mobile toggle, social links and magnifier → search overlay.
- [ ] Hero: 866 px photo band, curved bottom edge, ornament + "Welcome" h5 + 48 px
      uppercase h1 + subtext, no CTA.
- [ ] Services: six cards (Photos & Video … Honeymoons) with lucide icons and the
      `10px`/rose-shadow hover lift.
- [ ] Features: six filter buttons + six-tile CSS-grid masonry (253/380/505 px
      spans) with dark hover overlays and a "View more" link.
- [ ] Counter: photo band, four counters (8365/568/849/2574) counting up once and
      reduced-motion safe.
- [ ] Request: `-235px` overlap, `#5e6350` green header card, white 4-field form
      (Name, Email, Services, Guest) with `SEND A REQUEST` and inline validation.
- [ ] Request selects carry the source's own options (services list + the guest
      bands Up to 50 / 50 to 100 / 100 to 200 / More than 200), and **no** hidden
      `name="website"` decoy field ships (documented delta).
- [ ] Blog: three cards with the italic `#6b705d` meta row and `#111` titles.
- [ ] Logo strip: `#f7f8f3` band with ten placeholder wordmarks.
- [ ] Footer: `#3b3e33`, newsletter pill + four social discs, four columns, and the
      **Component Dock** credit link.
- [ ] No ColorLib reference anywhere in `apps/reverie`; assets are placeholders;
      icons are lucide; fonts via Google Fonts **with `&display=swap`** (no
      `.woff2` copied, matching the source's `font-display: swap`).
- [ ] The source's format layer is flattened: no `<picture>`/`<source>`/`srcset`/
      `sizes`/`image-set()` in app code, no `.avif` request, no image preload hint;
      below-the-fold images keep `width`/`height` + `loading="lazy"`, the hero image
      stays eager, decorative images use `alt=""`.
- [ ] Head facts are the app's own `<title>`/description/canonical/favicon and (if
      present) its own `og:`/`twitter:`/JSON-LD — no `your-domain.com`, no
      `Dreams`/`Wedding Dreams` string, no `img/og-image.jpg`, no `generator` meta.
- [ ] No third-party tag ships: `grep -rE 'gtag|dataLayer|googletagmanager|G-[A-Z0-9]{6,}'
      apps/reverie` is empty, and the two forms show **two distinct** success states
      (enquiry card vs footer pill) with no navigation to a `php/` path.
- [ ] `public/CNAME` = `reverie.free.componentdock.com`; `homepage` matches.
- [ ] Tests: Vitest + Testing Library, 100% lines/functions/branches/statements.
- [ ] `scripts/verify-app.sh reverie` passes (typecheck + lint + coverage + build).
