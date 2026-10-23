# Template: Celebrant (Wedding)

## Purpose

Celebrant is a single-page wedding-officiant template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free **"Wedding Officiant"** website template design (source:
https://colorlib.com/wp/template/wedding-officiant/ — TEMPLATES.md line 3106,
category **Wedding**), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source template:** ColorLib "Wedding Officiant" — source slug
  `wedding-officiant`
- **Preview URL:** `https://preview.colorlib.com/theme/weddingofficiant/`
  (HTTP 200 — see the note below; the hyphenated slug 404s)
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/celebrant` — package `@free-react-templates/celebrant`
- **Naming:** never reuse the source name "Wedding Officiant"; the brand is
  renamed **Celebrant** (the professional who officiates a wedding ceremony — a
  single lowercase word, no collision with `apps/` or
  `openspec/specs/template-*`, and it extends the Wedding family's naming run:
  lensly · vows · nuptial · knot · wedlock · nuptials · betrothal · trousseau ·
  paperie · affiance · troth · espousal · matrimony · **celebrant**).
- Homepage / CNAME: `https://celebrant.free.componentdock.com`
- **Source inner pages (live reference, curl-probed 2026-10-12):** the landing
  page is the design of record, but the same theme ships **four** further live
  pages under `https://preview.colorlib.com/theme/weddingofficiant/<page>`, all
  **HTTP 200** on the `curl -sS` basis — `services.html` (**18,829 B**) and
  `faq.html` (**19,902 B**), whose only headings the landing page already
  carries (its "Our Services" rows and its `#accordion-v1` FAQ), and
  `about.html` (**17,361 B**) and `contact.html` (**15,178 B**), which carry
  content the landing page has **no band for** (an about/history band with the
  team, and a contact band with a real contact form). The source's own menu
  links all four (`About` → `about.html`, `Services` → `services.html`, `FAQ` →
  `faq.html`, `Blog` → `faq.html`, `Contact` and the `Get Quote` pill →
  `contact.html`), so the About and Contact destinations this one-pager invents
  take their structure from those two pages. The full reading is in
  `## Design reference` and `docs/templates/celebrant/design-notes.md`; nothing
  is copied.


## Design reference (replication findings)

- **Original:** ColorLib "Wedding Officiant" — a **mint-and-white one-page
  wedding site** (a Bootstrap 4 theme with owl-carousel, AOS scroll animations,
  jQuery sticky header, a flaticon icon font and an `#accordion-v1` FAQ). The
  source ships a multi-page shell (`index.html`, `about.html`, `services.html`,
  `faq.html`, `contact.html`) but the demo's landing page is what we recreate,
  single-page.
- **Preview URL caveat (IMPORTANT):** the canonical slug URL
  `https://preview.colorlib.com/theme/wedding-officiant/` returns **HTTP 404**;
  the live demo actually lives at
  **`https://preview.colorlib.com/theme/weddingofficiant/`** (no hyphen) —
  **HTTP 200**, 28,350 B HTML, `<title>Wedding Officiant &mdash; Website by
  Colorlib</title>`. ⚠️ **The page's raw sha256 is request-unstable**: the
  preview host injects a `media="print"` `@font-face` `<style>` block and
  shuffles that block's rule order per request — three consecutive fetches on
  2026-10-12 returned three different digests at an identical **28,350 B**, so
  the earlier `43f810ba…` value no longer reproduces and no raw page hash is
  cited here. ⚠️ **The raw byte count is not a stable handle either**: the host
  also appends an extra **361 B** Cloudflare Insights beacon
  (`<script type="module" src="https://static.cloudflareinsights.com/beacon.min.js/…">`)
  before `</body>` for some client signatures, so a fetch whose headers differ
  from a plain `curl -sS <url>` sees **28,711 B** — the size is stable only for
  one request signature. The **canonical** handle is the digest of
  the page after removing **both** that injected block **and** the beacon script
  (**22,155 B**, sha256
  `cfcdf23e08945ebe324f2f8fdba5147658909ac1c04af42540a635a06e9decc9`) — and it
  is byte-identical across `curl -sS`, `curl -A <chrome UA>` and `urllib` with a
  Chrome UA (3 profiles × 3 fetches, 2026-10-12). A client that *additionally*
  sends `Accept`/`Accept-Language` receives a further **416 B** Cloudflare
  first-party Google-tag script (`google_tags_first_party` / `/s9cc/`) that this
  handle does **not** strip, so state the measurement basis (`curl -sS`) beside
  any such number. Fall back
  to the hyphenated form only if the un-hyphenated one ever disappears.
- **Host layer (NOT the theme, measured 2026-10-12, `curl -sS` basis):** the
  preview host injects a **two-element block as the first children of `<head>`**
  — `<meta name="robots" content="noindex, nofollow">` +
  `<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">` — and answers
  with `x-robots-tag: noindex, nofollow` (plus a `link:` preconnect/dns-prefetch
  rela set and `speculation-rules: "/cdn-cgi/speculation"`), behind a host-wide
  `https://preview.colorlib.com/robots.txt` (`User-agent: *` / `Disallow: /`).
  The theme's own head starts *below* the pair. **Nothing of that layer is
  reproduced in `apps/celebrant`** (no `noindex`, no `robots.txt`, no
  `dns-prefetch`, no `cdnjs`, no host URL) — the served head's first children
  must not be read as the theme's markup.
- **Stylesheet fetched for tokens:**
  `https://preview.colorlib.com/theme/weddingofficiant/css/style.css` — **HTTP
  200**, 24,244 B, sha256
  `e8fb899c61fd254d91b06b551ab5f277d71e10f9f664de8ee4b486d41f48072d`
  (it `@`-overrides the bundled `css/bootstrap/bootstrap.css`; e.g.
  `.btn.btn-secondary` — the navbar "Get Quote" pill — is Bootstrap's own
  `#6c757d`).
- **Fonts:** the source inlines `@font-face` rules for **Amiri** (400/700 +
  italic) and **Quicksand** (400/700) — not a real `fonts.googleapis.com`
  `<link>`. Our recreation loads both from Google Fonts (see tasks).
  ⚠️ **Quicksand's Google Fonts axis stops at 700** (`Quicksand:wght@900` →
  HTTP 400, and one bad axis 400s the *whole* `css2` request, which would kill
  Amiri too), and the source declares only 400/700 — so the wordmark's
  `font-weight: 900` is **browser-synthesised faux-bold in the source as well**.
  Keep `font-weight: 900` (Tailwind `font-black`) on the wordmark with the
  400;500;700 link loaded and do **not** add a 900 axis; the recreation then
  synthesises exactly what the reference does.
- **Screenshot:** TEMPLATES.md `weddingofficiant-free-template.jpg` (HTTP 200,
  served **AVIF** despite the `.jpg` name, 118,200 B, 1200×946 → converted to
  PNG and inspected).
- **Visual design (live render at 1400 px + screenshot, verified):** a **white
  page** with a **mint `#cae8d5` brand colour** used as big flat decorative
  blocks and icon discs, **Amiri serif headings** over **Quicksand body text**,
  a **white sticky header**, a full-width cover photo hero with a mint band
  peeking out to its right, and italic-serif section titles. Section order
  (1:1 with the source): **header → cover hero → "Our Services" (4 alternating
  image/text rows) → "Marriages I Officiate" carousel on a mint panel → six
  icon feature cards → "Frequently Ask Questions" accordion (7 items) → dark
  `#333333` footer**.
  - **First paint (overlayer + loader):** the source's first two body elements
    are `<div id="overlayer"></div><div class="loader"><img
    src="images/loader.gif" alt="Loader"></div>` — both **before** `.site-wrap`.
    `style.css`: `#overlayer{width:100%;height:100%;position:fixed;
    z-index:7100;background:#fff;top:0;left:0;right:0;bottom:0}` and
    `.loader{z-index:7700;position:fixed;top:50%;left:50%;
    transform:translate(-50%,-50%)}`. `js/main.js` (7,490 B) fades **both** out
    200 ms after DOM ready, inside `jQuery(document).ready(...)`:
    `$(".loader").delay(200).fadeOut("slow"); $("#overlayer").delay(200).fadeOut("slow");`
    — so the page is a white cover with a centred animated GIF that leaves
    ~200 ms after the DOM is ready. Our recreation ships this as a `Preloader`
    component above the header.
  - **Header (`.site-navbar.py-4.js-sticky-header`, Bootstrap grid inside a
    `.container`):** a **white bar** (the source makes it sticky via
    `js-sticky-header`; `.sticky-wrapper.is-sticky .site-navbar` sets
    `background: #fff`). Left (`col-6 col-xl-3`): the wordmark — **Quicksand,
    `1.2rem`, weight 900, `text-transform: uppercase`, `#000`**, rendered in the
    source as "Wedding Officiant." — **renamed "Celebrant"** for us. Quicksand
    ships no 900 (its Google Fonts axis is 300–700), so this weight is
    **synthesised**; keep the `900` in the class and the `400;500;700` link. Right
    (`col-12 col-md-9`, desktop only, `text-right`): six nav links — **Home ·
    About · Services · FAQ · Blog · Contact** — each `padding: 5px 10px` in
    **`rgba(0,0,0,0.5)`**, with the **active** link in `#000` and a **2 px mint
    `#cae8d5` underline** (`.site-menu .active > a:before`, `height: 2px; left:
    10px`). The last item is a **pill CTA "Get Quote"** (`.btn.btn-secondary
    .btn-sm.text-white.py-2.px-4` → Bootstrap secondary **`#6c757d`**, radius
    30 px). Below `xl` the links collapse behind `.site-menu-toggle`
    (`.js-menu-toggle`, `icon-menu`) — the source is multi-page, so our
    single-page recreation anchors each entry to an on-page section.
  - **Cover hero (`.site-section.cover-wrap-v2`, inline `padding-top: 120px`):**
    inside a `.container` a **`.cover` image block** —
    `background-image: url(images/hero_1.jpg)`, `background-size: cover`,
    `background-position: center center`, **`height: 100vh`,
    `min-height: 450px`** — i.e. a **full-width photo that starts below the
    header and fills the viewport**, with **no text overlay at all**. Its
    signature is the **mint decorative band**: `.bg-1:before` is an absolutely
    positioned `#cae8d5` rectangle (`top: 30%`, `right: -150%`, `width: 200%`,
    `height: 100%`, `z-index: -1`) that slides out from behind the photo to the
    right (the container has `overflow: hidden`).
  - **Our Services (`.site-section`, 100 px vertical padding):** a centred
    **italic Amiri `2rem`** title "Our Services" (`.section-title-v37 h2 {
    font-size: 2rem; font-style: italic; }`, `margin-bottom: 30px`), then a
    **`row` of four `.media-v37` rows in two `col-lg-6` columns** — each row is
    `d-flex align-items-center`: an image (`.img`, **`flex: 0 0 250px`**) beside
    a text block (`.text`, `padding-left: 30px; padding-right: 30px`) with an
    **Amiri `h3` 20 px / 700** title link in `#000` and a grey paragraph. The
    2nd and 4th rows put the image on the right (`order-lg-2`), so the column
    alternates **image-left → image-right** down the page. Rows are **Initial
    Consultation · Ceremony Editing · The Marriage License · Planning Meeting**;
    hovering a row paints it mint (`*.media-v37.active { background:
    #cae8d5 }`).
  - **Marriages I Officiate (`.site-section` containing
    `.container.video-wrap-v37`):** a centred italic Amiri title, then a **mint
    `#cae8d5` panel** behind the slider — `.video-wrap-v37 .bg:before` is a
    pseudo-element (`left: 15px; right: 15px; bottom: -5%; height: 100vh;
    background: #cae8d5`) so the mint block bleeds far below the images. Inside
    it an **owl-carousel** (`sliderOne`) of **three slides**, each a
    `.bg-image-v37` block (**`height: 500px`, `width: 100%`, `background-size:
    cover`, centred**) holding `hero_2.jpg` / `hero_3.jpg` / `hero_4.jpg`, with
    a **centred caption beneath the photo** (`mt-5`, `col-lg-8`): a small black
    Quicksand line "Wedding Date: July 20th, 2019", an **Amiri `h3` couple
    name** ("Joshua & Selene" in the source) and a grey lorem paragraph. Navigation:
    **circular 40 px white prev/next buttons** (`.sliderOne .owl-nav` at
    `top: 50%`, `left/right: 27px`, `border-radius: 50%`) plus **dots** below
    (`8 px` circles, inactive `rgba(0,0,0,0.3)`, active `black`).
  - **Six feature cards (`.container > .row` of six `col-md-6`, each a
    `.service-92655.d-flex`):** a **2 × 3 grid** of white cards (`padding: 30px`,
    `background: #fff`) each holding an **icon disc** — `.icon-wrap:before` is a
    **70 × 70 px `#cae8d5` circle** (`left: -10px`, `border-radius: 50%`)
    behind a **black line-art glyph** (the source uses the flaticon set:
    `flaticon-ring`, `flaticon-wedding-arch`, `flaticon-loving-home`,
    `flaticon-invitation`, `flaticon-alcohol`, `flaticon-wedding-planner`) and
    a text block with an **Amiri `1.5rem` / 700 `#000`** title over a
    `rgba(0,0,0,0.8)` paragraph. Cards: **Wedding Ring · Wedding Venue ·
    Honeymoon · Invitation · Red Wine Tasting · Wedding Planner** (the source
    ships the titles "Inivitation" and "Red Wine Tast" — typos we fix, and its
    "Honeymoon" line has an empty `<span>` above the paragraph, which we drop).
  - **FAQ (`.site-section` with `#accordion-v1`):** a centred italic Amiri
    title "Frequently Ask Questions" (`mb-5`), then **seven Bootstrap-collapse
    cards** — each a `.card.mb-2` (`border-color: #dee3e2`) whose `h5 > a`
    ("btn btn-link") is **left-aligned, `font-size: 20px`, `padding: 0 15px`,
    `border-radius: 0`**, **black when open** and **gray when collapsed**, with
    a **chevron on the right** (`.icon`, `right: 20px`, vertically centred,
    `rotate(-180deg)` when open, `transition: 0.3s`). The **first item is open
    on load** (`class="collapse show"`); the card body has `padding-top: 0`. The
    source repeats two questions ("Where To Find The Best Reception on my
    Wedding Venue?" appears twice, "Inivitation Letters How?" twice) — our
    recreation ships **seven distinct questions**.
  - **Footer (`footer.site-footer`):** a **flat dark `#333333` band** (no
    pattern) with a Bootstrap `row`. Left (`col-md-8` → two inner columns): an
    **Amiri white `h2.footer-heading`  "About Us"** with a **`#737373`
    paragraph**, then a "Quick Links" column (`.list-unstyled`) with four
    **`#999999`** links (About Us · Services · Testimonials · Contact Us) that
    whiten on hover. Right (`col-md-4`): **"Subscribe Newsletter"** — a
    Bootstrap `input-group` with a **transparent input, white text and a
    `#dee2e6`-ish `border-secondary` outline (`Enter Email` placeholder)** plus
    a **mint `#cae8d5` "Send" pill** (`.btn.btn-primary.text-black`, radius
    30 px) — and **"Follow Us"** with four grey social glyphs (facebook ·
    twitter · instagram · linkedin). A **`1px solid #edf0f5` `border-top`**
    divider (`pt-5 mt-5`) closes the band above a **centred copyright line**
    (`#737373`) with a heart glyph; the source credits ColorLib here — our
    recreation links **https://www.componentdock.com/ ("Component Dock")**
    instead (AGENTS.md rule 5).
- **Inner-page reference for the two invented bands (live, curl-probed
  2026-10-12 — the landing page carries no about band and no contact band, while
  the source's own menu links both pages):**
  - `about.html` (**200**, 17,361 B, `<title>` identical to the landing page's):
    `h1` **About Us** over a `section.site-section` history band — `h2` **Our
    History** with body copy and a second `h2`, plus two photos — and a
    `section.site-section pt-0` team band: `h2` **Our Team** with **eight** `h3`
    person cards (Celia Bennett · Manha Sumner · Ammarah Rosario · Beau Dolan ·
    Gus Payne · Noel Justice · Vihaan Prince · Evie-Mae Ridley) over the
    source's `images/person_1..8.jpg`.
  - `contact.html` (**200**, 15,178 B, same `<title>`): `h1` **Contact** over a
    `section.site-section pb-5` that pairs five `h3` detail rows — **Opening
    Hour** ("7:00 AM — 5:00 PM"), **Address**, **Email** (`mailto:`), **Phone**
    (`tel:`) and **Website** — with a real contact `<form action="#">`: **Name**
    (`input type="text"`), **Email** (`input type="email"`), **Subject**
    (`input type="text"`), **Message** (`textarea` 30×10) and a
    `input[type=submit].btn.btn-secondary` labelled **Send Message**. The
    landing page's only form is the footer newsletter, so this is the source's
    whole contact-form grammar.
  - **Source facts that must NOT be reproduced:** both pages reuse the landing
    page's `mydomain.com` e-mail, its `tel://12 345 6788 010` phone and its
    `www.mydomainname.com` website placeholder, its `site-footer` copy, its logo
    and its eight person photos; `contact.html`'s form has `action="#"`, no
    `name` attributes and no validation. The recreation ships its own contact
    data, its own team card copy (or an equally sized card grid) and a real,
    locally validated form — and it keeps the `Blog` entry pointing at the FAQ
    band only because the source's own `Blog` link hrefs `faq.html`.
- **Tokens are the source's own** (`css/style.css`), not invented: brand mint
  **`#cae8d5`** (button fill, active-nav underline, `.media-v37.active` wash,
  both decorative hero/slider bands, the 70 px icon discs, the carousel active
  dot, the newsletter Send pill), mint link accent `#95d1ab`, dark slate
  `#343a40` (`.btn-primary:hover`), nav/body ink `#000` / `rgba(0,0,0,0.5)`,
  body text `gray` (`#808080`), card copy `rgba(0,0,0,0.8)`, CTA pill grey
  **`#6c757d`** (Bootstrap `.btn-secondary`), FAQ card border `#dee3e2`,
  collapsed-question gray, divider `#edf0f5`, footer band **`#333333`**,
  footer paragraph `#737373`, footer links `#999999`, carousel inactive dot
  `rgba(0,0,0,0.3)`, hover surfaces `#f4f5f9` / `#f8f9fa`.

## Design tokens

| Token | Value | Where |
| --- | --- | --- |
| Brand mint | **`#cae8d5`** | `.btn-primary` fill, active-nav underline (2 px), `.media-v37.active` wash, hero `.bg-1:before` band, slider `.bg:before` panel, 70 px icon discs, active carousel dot, footer "Send" pill |
| Mint link accent | `#95d1ab` | `a` colour (base link) |
| Dark slate (hover) | `#343a40` | `.btn.btn-primary:hover` background/border |
| Nav ink / muted | `#000` (active, logo) · `rgba(0,0,0,0.5)` (links) | `.site-navbar` |
| Body text | `gray` (`#808080`), `line-height: 1.7` | `body` (Quicksand) |
| Card copy | `rgba(0,0,0,0.8)` | `.service-92655 p` |
| Section title ink | `#000`, `font-style: italic`, `2rem` | `.section-title-v37 h2` (Amiri) |
| Feature card title | `#000`, `1.5rem`, 700 | `.service-92655 h3` (Amiri) |
| Media row title | `#000`, `20px`, 700 | `.media-v37 .text h3 a` (Amiri) |
| CTA pill grey | **`#6c757d`** | navbar "Get Quote" (Bootstrap `.btn-secondary`) |
| FAQ card border | `#dee3e2` | `#accordion-v1 .card` |
| FAQ question type | `20px`, `padding: 0 15px`, radius 0 | `#accordion-v1 .card h5 a` |
| Divider | `#edf0f5` | `.border-top` above the copyright bar |
| Footer band | **`#333333`** | `footer.site-footer` |
| Footer paragraph / links | `#737373` / `#999999` (hover `#fff`) | `.site-footer p` / `a` |
| Footer heading | `#fff` | `.site-footer h2/h3/h5` (Amiri) |
| Carousel dot | `rgba(0,0,0,0.3)` inactive · `black` active (8 px circles) | `.sliderOne .owl-dots` |
| Hover surfaces | `#f4f5f9` · `#f8f9fa` | dropdown/`.btn` hovers |
| Radii | **30 px** pills (all `.btn`) · 50% circles (icon discs, carousel arrows/dots) · 0 (accordion headers) | `.btn`, `.icon-wrap:before` |
| Button metrics | `padding: 10px 30px`, `font-size: 16px` | `.btn` |
| Section rhythm | `padding: 100px 0` (`.site-section`); hero `height: 100vh` / `min-height: 450px`; slider image **500 px** tall; hero wrapper `padding-top: 120px` | `style.css` |
| Fonts | **"Amiri", serif** (h1, h2, h3, h5 — incl. the italic section titles) · **"Quicksand", sans-serif** (body, nav, logo `1.2rem`/900 uppercase, footer, buttons) | verified on Google Fonts (HTTP 200); the Quicksand axis is `400;500;700` — the family has **no 900**, so the wordmark's 900 is synthesised (`wght@900` → HTTP 400, and a bad axis 400s the whole request) |

## Requirements

### Requirement: First-paint overlay and loader

The system SHALL reproduce the source's first-paint cover (`#overlayer` plus
`.loader`), which the source's own script fades out 200 ms after DOM ready, so
that first paint matches the reference.

#### Scenario: Preloader overlay

- **GIVEN** the Celebrant app is rendered
- **WHEN** the page first paints
- **THEN** a full-screen **`#fff`** cover SHALL fill the viewport
  (`position:fixed`, inset `0`, `z-index:7100`)
- **AND** a centred loader mark SHALL sit above it at `z-index:7700`, in the top
  half of the viewport, transformed `translate(-50%,-50%)` from `top:50%` /
  `left:50%`
- **AND** on DOM ready both SHALL fade out **200 ms later** (the source's
  `$(".loader").delay(200).fadeOut("slow"); $("#overlayer").delay(200).fadeOut("slow")`)
- **AND** both SHALL be `aria-hidden`, hold no focusable element, and under
  `prefers-reduced-motion: reduce` SHALL hide without the fade

### Requirement: Sticky header and navigation

The system SHALL render a white sticky header with the Celebrant wordmark, six
nav links, one active link with a mint underline, and a pill CTA.

#### Scenario: Header content

- **GIVEN** the Celebrant page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL be a **white bar** that becomes sticky (`background:
  #fff`) once the user scrolls past it
- **AND** it SHALL show the **Celebrant** wordmark at the left in **Quicksand,
  `1.2rem`, weight 900, uppercase, `#000`** (a synthesised 900 — Quicksand's
  Google Fonts axis ends at 700, so the link carries `400;500;700`)
- **AND** it SHALL show six links — Home · About · Services · FAQ · Blog ·
  Contact — in `rgba(0,0,0,0.5)` with a `#000` hover
- **AND** the active link SHALL be `#000` with a **2 px `#cae8d5` underline**
- **AND** it SHALL show a **pill CTA "Get Quote"** (`#6c757d` background, white
  label, `border-radius: 30px`)

#### Scenario: Single-page anchor mapping

- **GIVEN** the source is a multi-page site (`index/about/services/faq/
  contact.html`)
- **WHEN** the nav is rendered in our single-page recreation
- **THEN** Home · About · Services · FAQ · Blog · Contact SHALL anchor to
  `#home`, `#services`, `#services`, `#faq`, `#faq`, `#contact` respectively
- **AND** "Get Quote" SHALL anchor to the footer contact/newsletter block
- **AND** `docs/templates/celebrant/design-notes.md` SHALL record that mapping

#### Scenario: Mobile menu

- **GIVEN** the viewport is below the desktop breakpoint
- **WHEN** the user opens the menu
- **THEN** the links SHALL collapse behind a toggle that exposes its state via
  `aria-expanded`, SHALL be operable by keyboard alone, and SHALL close on
  `Escape` and on link activation

### Requirement: Cover hero

The system SHALL render a full-width cover photo with a mint decorative band and
no text overlay.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a full-width cover photo (`background-size: cover`,
  centred) **`100vh` tall with a `450px` minimum**, starting below the header
  (`padding-top: 120px` equivalent) and carrying **no headline, subtext or
  button**
- **AND** a **mint `#cae8d5` decorative rectangle** SHALL sit behind the photo,
  starting around 30 % of the hero's height and extending past its right edge
  (the source's `.bg-1:before`, hidden at the container edge via
  `overflow: hidden`)
- **AND** the photo SHALL be a seeded placeholder image
  (`https://picsum.photos/seed/celebrant-<n>/<w>/<h>`), never a copied asset
- **AND** the band SHALL be `aria-hidden` decoration, and the hero SHALL NOT
  introduce horizontal overflow at any breakpoint

### Requirement: Our Services section

The system SHALL render an italic-serif title over four alternating image/text
media rows in two columns.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services band is displayed
- **THEN** it SHALL show a centred **italic Amiri `2rem`** title "Our Services"
  with a `30px` bottom margin
- **AND** SHALL show **four media rows** in two columns — **Initial
  Consultation · Ceremony Editing · The Marriage License · Planning Meeting** —
  each an `align-items-center` flex row of an image (`flex: 0 0 250px`) and a
  text block (`padding: 0 30px`) with an **Amiri 20 px / 700 `#000`** title link
  and a grey paragraph
- **AND** the second and fourth rows SHALL place the image on the **right**
  (`.order-lg-2`), so each column alternates image-left → image-right
- **AND** hovering or focusing a row SHALL paint it mint (`#cae8d5`) with the
  change transitioned over `0.3s`
- **AND** the two columns SHALL stack to one column on mobile with images
  first, and text SHALL remain readable at 320 px width

### Requirement: Marriages I Officiate carousel

The system SHALL render a three-slide photo carousel on a mint panel with
circular arrow buttons and dot indicators.

#### Scenario: Carousel content

- **GIVEN** the page is rendered
- **WHEN** the "Marriages I Officiate" band is displayed
- **THEN** it SHALL show a centred **italic Amiri** title "Marriages I
  Officiate"
- **AND** SHALL render the slides inside a **mint `#cae8d5` panel** that bleeds
  below the images (the source's `.video-wrap-v37 .bg:before`, inset 15 px left
  and right, `bottom: -5%`, `height: 100vh`)
- **AND** each slide SHALL show a **500 px tall, full-width cover photo**
  followed by a **centred caption**: a small black line "Wedding Date: July
  20th, 2019" (paraphrased, e.g. "Wedding date: 20 July"), an **Amiri `h3`
  couple name** and a grey paragraph
- **AND** the source repeats the same caption on all three slides — our
  recreation SHALL ship **three distinct couple entries** (names, dates,
  one-line stories) so the carousel has real content

#### Scenario: Carousel controls

- **GIVEN** the carousel is displayed
- **WHEN** the user interacts with it
- **THEN** **circular 40 px white prev/next buttons** SHALL be positioned
  vertically centred at the left and right edges of the slider
- **AND** **dot indicators** (8 px, inactive `rgba(0,0,0,0.3)`, active black)
  SHALL be shown below the caption, one per slide, each announcing its slide
- **AND** both arrow buttons and dots SHALL be real `<button>` elements with
  accessible names and visible focus rings, operable by keyboard alone
- **AND** the carousel SHALL advance automatically no faster than every 5 s, and
  SHALL NOT auto-advance at all when `prefers-reduced-motion: reduce` is set

### Requirement: Feature card grid

The system SHALL render six white cards, each with a mint icon disc, in a
2 × 3 grid.

#### Scenario: Feature cards content

- **GIVEN** the page is rendered
- **WHEN** the feature grid is displayed
- **THEN** it SHALL show **six cards in two columns** — **Wedding Ring ·
  Wedding Venue · Honeymoon · Invitation · Red Wine Tasting · Wedding Planner**
- **AND** each card SHALL be a white `#fff` block with `30px` padding, an
  **icon disc** (a `70 × 70 px` `#cae8d5` circle, offset 10 px to the left)
  containing a black line-art glyph from **`lucide-react`** (e.g. `Gem`/`CircleDot`
  substitute, `Church`, `Home`, `Mail`, `Wine`, `CalendarCheck`), and an
  **Amiri `1.5rem` / 700 `#000`** title over a `rgba(0,0,0,0.8)` paragraph
- **AND** SHALL NOT reproduce the source's typos ("Inivitation", "Red Wine
  Tast") or its empty spacer span in the Honeymoon card
- **AND** the grid SHALL collapse to a single column on mobile and each icon
  disc SHALL be `aria-hidden` decoration beside a real heading

### Requirement: FAQ accordion

The system SHALL render a seven-item accordion with one item open by default.

#### Scenario: Accordion content

- **GIVEN** the page is rendered
- **WHEN** the FAQ band is displayed
- **THEN** it SHALL show a centred **italic Amiri** title "Frequently Ask
  Questions"
- **AND** SHALL show **seven distinct question rows** in bordered cards
  (`1px #dee3e2`, `mb-2`), each with a **left-aligned 20 px question** that is
  **black when open and gray when collapsed** and a **chevron on the right**
  that rotates 180° when the row opens (0.3 s)
- **AND** the **first row SHALL be expanded on load**, with its answer body
  carrying no top padding
- **AND** the source repeats two of its questions — our recreation SHALL make
  all seven questions distinct (e.g. rings, reception venue, honeymoon, the
  invitation letters, the planner's role, the ceremony script, a booking
  timeline)

#### Scenario: Accordion interaction and accessibility

- **GIVEN** the accordion is displayed
- **WHEN** the user activates a question
- **THEN** the row SHALL toggle its panel (a real `<button>` with
  `aria-expanded` and `aria-controls`, the panel labelled by its question)
- **AND** every question SHALL be reachable and operable by keyboard alone with
  a visible focus ring
- **AND** collapsing/expanding SHALL NOT shift focus or trap it, and the layout
  SHALL not jump horizontally

### Requirement: Footer

The system SHALL render a flat dark footer with an about column, quick links, a
newsletter form, social links and a Component Dock copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL be a flat **`#333333`** band
- **AND** SHALL show an **Amiri white "About Us"** heading with a `#737373`
  paragraph, beside a **"Quick Links"** list (About Us · Services ·
  Testimonials · Contact Us) in `#999999` that whitens on hover
- **AND** SHALL show a **"Subscribe Newsletter"** block — a labelled email
  input with a `Enter Email` placeholder and a **mint `#cae8d5` "Send" pill**
  (black label, radius 30 px)
- **AND** SHALL show **"Follow Us"** with four social links (facebook ·
  twitter · instagram · linkedin) that have accessible names and no external
  tracking secrets
- **AND** a **`1px #edf0f5`-tinted hairline** SHALL separate the columns from a
  **centred copyright line** `#737373` with a heart glyph, linking
  **https://www.componentdock.com/** ("Component Dock") and showing the
  computed current year

#### Scenario: Newsletter submission

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an email address
- **THEN** the form SHALL validate the address and SHALL NOT post to any
  external service
- **AND** it SHALL confirm locally with a live-region message, and invalid
  submissions SHALL show an inline error and SHALL NOT clear the entered value

### Requirement: Page composition

The system SHALL compose every section in a single page with banner, main and
contentinfo landmarks, and a document head it owns. The reference's **served**
head is not the theme's: the preview host injects `<meta name="robots"
content="noindex, nofollow">` + `<link rel="dns-prefetch"
href="https://cdnjs.cloudflare.com">` as the first children of `<head>` and
answers with `x-robots-tag: noindex, nofollow` — host infrastructure the
recreation SHALL NOT carry (no `noindex`, no `robots.txt`, no `dns-prefetch`,
no `cdnjs`).

#### Scenario: Full page render

- **GIVEN** the Celebrant app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark; the cover
  hero, services, marriages carousel, feature grid and FAQ in the main
  landmark; and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Celebrant — Wedding Officiant Template"
- **AND** the section order SHALL match the source 1:1 (header → hero →
  services → marriages carousel → feature grid → FAQ → footer)
- **AND** the built document SHALL be indexable and free of the host layer
  (no `noindex`/`nofollow`, no `robots` meta, no `dns-prefetch`, no `cdnjs`, no
  `preview.colorlib.com` URL)

### Requirement: Invented About and Contact bands (source inner pages)

Where the source's multi-page shell carries content the landing page has no band
for, the recreation SHALL build that band from the source's own page of the same
kind — `about.html` (history band + an eight-card team grid) for the nav's
**About** destination and `contact.html` (five detail rows + the contact form)
for **Contact** and the `Get Quote` pill — and SHALL NOT carry over the source's
`mydomain.com` e-mail, its `tel://12 345 6788 010` phone number, its
`www.mydomainname.com` website placeholder, its `action="#"` form, the landing
page's `About Us` / `Quick Links` / `Subscribe Newsletter` / `Follow Us` footer
headings or its person photographs.

#### Scenario: The About destination follows the source's about page

- **GIVEN** the app's nav carries an About entry (the source's menu links
  `about.html`, whose band the landing page does not carry)
- **WHEN** the About band renders
- **THEN** it follows that page's structure — an "About Us"-class page title over
  a history band (story heading + copy + imagery) and a team band with a
  **team heading and eight person cards**, each a photo, a name heading and a
  short role blurb in the app's own copy
- **AND** the source's own person photographs and its footer wording are not
  reproduced

#### Scenario: The Contact destination follows the source's contact page

- **GIVEN** the app's nav carries Contact and Get Quote entries (the source's
  menu links `contact.html` for both)
- **WHEN** the Contact band renders
- **THEN** it follows that page's structure — five labelled detail rows (opening
  hours, address, e-mail, phone, website) with the app's own values, beside a
  contact form whose field kinds match the source's: **Name**, **Email**,
  **Subject**, a multiline **Message** and a **Send** submit
- **AND** the form is labelled, validated locally, never posts anywhere, and
  carries none of the source's placeholder contact data

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/celebrant/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/celebrant/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] `npm run typecheck` passes for `apps/celebrant`
- [x] `npm run lint` passes for `apps/celebrant`
- [x] `scripts/verify-app.sh celebrant` passes (typecheck + lint + 100 %
      coverage tests + build)
- [x] Full `npm run gate` passes in CI (knip + fallow included)
- [x] `npm run spec:validate` passes
- [x] Document head is the app's own and carries none of the preview host's
      layer (no `noindex`/`nofollow`, no `robots` meta, no `dns-prefetch`, no
      `cdnjs`, no `preview.colorlib.com`): the reference's served head opens with
      `<meta name="robots" content="noindex, nofollow">` +
      `<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">`, which are
      host markup, not the theme's
- [x] Preloader: full-screen `#fff` `#overlayer` (`z-index:7100`) with a centred
      loader mark above it (`z-index:7700`, `top/left:50%`,
      `translate(-50%,-50%)`), both fading out 200 ms after DOM ready,
      `aria-hidden`, reduced-motion aware
- [x] Header: white sticky bar, **Celebrant** wordmark (Quicksand `1.2rem`/900
      uppercase `#000`), six links `rgba(0,0,0,0.5)` with a `#000` hover, active
      link `#000` + **2 px `#cae8d5` underline**, `#6c757d` "Get Quote" pill
      (radius 30 px), keyboard-operable mobile toggle
- [x] Hero: full-width cover photo **`100vh` / min 450 px** with no text, mint
      `#cae8d5` band behind it extending past the right edge, seeded picsum
      image, no horizontal overflow, decoration `aria-hidden`
- [x] Services: centred **italic Amiri 2rem** title, four media rows in two
      columns (Initial Consultation · Ceremony Editing · The Marriage License ·
      Planning Meeting) with `flex: 0 0 250px` images, `0 30px` text padding,
      Amiri 20 px/700 `#000` title links, rows 2 + 4 image-right, `#cae8d5`
      hover wash
- [x] Marriages: italic Amiri title, mint panel bleeding below the slider,
      three slides with **500 px tall** cover photos and centred captions
      (date line + Amiri `h3` names + paragraph), 40 px circular white prev/next
      buttons, 8 px dots (`rgba(0,0,0,0.3)` → black), keyboard operable,
      auto-advance ≥ 5 s and off under reduced motion
- [x] Features: six white cards in a 2 × 3 grid (Wedding Ring · Wedding Venue ·
      Honeymoon · Invitation · Red Wine Tasting · Wedding Planner) each with a
      **70 × 70 px `#cae8d5` icon disc** + lucide glyph, Amiri `1.5rem`/700
      titles, `rgba(0,0,0,0.8)` copy; source typos not reproduced
- [x] FAQ: italic Amiri title, seven **distinct** question rows in `#dee3e2`
      cards, 20 px left-aligned questions (black open / gray collapsed),
      chevron rotating 180° over 0.3 s, **first row open on load**, real buttons
      with `aria-expanded`/`aria-controls`, keyboard operable
- [x] Footer: flat `#333333` band, Amiri white "About Us" heading + `#737373`
      paragraph, "Quick Links" in `#999999` (hover white), "Subscribe
      Newsletter" input + mint `#cae8d5` "Send" pill with black label, four
      named social links, `#edf0f5` hairline, centred `#737373` copyright with
      a heart and a **Component Dock** link + current year
- [x] Tokens: `#cae8d5` (brand mint), `#95d1ab` (link accent), `#343a40`
      (hover), `#6c757d` (CTA pill), `#000` / `rgba(0,0,0,0.5)` nav ink,
      `gray` body, `rgba(0,0,0,0.8)` card copy, `#dee3e2` FAQ border,
      `#edf0f5` divider, `#333333` footer, `#737373` / `#999999` footer text,
      `rgba(0,0,0,0.3)` carousel dot — in `@theme`; **Amiri + Quicksand**
      loaded from Google Fonts; radii 30 px pills + 50 % circles
- [x] Placeholder images via seeded picsum
      (`https://picsum.photos/seed/celebrant-<n>/<w>/<h>`: hero 1920×1080,
      media rows 600×600, carousel 1400×900); every icon from `lucide-react`;
      no ColorLib asset, screenshot or stylesheet copied
- [x] No `colorlib` / `wedding-officiant` / "Wedding Officiant" provenance
      string anywhere in `apps/` (comments included); footer links Component
      Dock
- [ ] The invented About and Contact bands are built from the source's own inner
      pages (`about.html`, 17,361 B — the history band plus the "Our Team" grid
      of eight person cards; `contact.html`, 15,178 B — the five labelled detail
      rows beside the Name/Email/Subject/Message/Send form), with the app's own
      contact data, copy and imagery instead of the source's `mydomain.com`
      placeholders, `tel://` number, `action="#"` form and person photos —
      **follow-up for the implementer stream**: the app shipped 2026-10-12 with
      `About` anchored to `#services` and `Contact` / `Get Quote` to `#contact`
      (the footer block), so neither band exists yet
- [x] TEMPLATES.md `Wedding Officiant` item marked `[x]` with the live
      `https://celebrant.free.componentdock.com` URL + homepage
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Implementation notes (recreation deltas)

Recorded after building `apps/celebrant`; each is a place where the requirement above was read
against the repository contract or against the design's own DOM/CSS, and the reading is the one
that shipped.

1. **Document title.** The requirement asks for "Celebrant — Wedding Officiant Template"; this
   spec's own verification checklist forbids the string "Wedding Officiant" anywhere in `apps/`
   (AGENTS.md rule 5 — provenance lives only in the spec, TEMPLATES.md and the PR), and the
   repository's other recreations all name the *kind* rather than the source ("Nuptials — Wedding
   Template", "Cherish — Wedding Day Template"). The title shipped is
   **"Celebrant — Wedding Ceremony Template"**.
2. **The couples band heading.** The requirement quotes the source's heading verbatim, while
   `docs/templates/celebrant/tasks.md` lists that string among those the app must not carry. The
   band ships the recreation's own **"Couples I Have Joined"**.
3. **Question band heading.** The design prints "Frequently Ask Questions";
   `docs/templates/celebrant/design-notes.md` allows the grammatical form, so
   **"Frequently Asked Questions"** ships.
4. **The services wash.** The design paints only rows carrying `.active` (none on its landing page)
   and cancels the wash on `:hover`; the requirement's Shalt is the recreation's own interaction, so
   each row takes the mint `#cae8d5` wash on `hover` **and** `focus-within`.
5. **Card grid gutter.** Bootstrap's `row`/`col-md-6` give the six cards a 30px gutter with the
   outer edges flush to the container (measured 540px cards at 1440). That is reproduced with
   `md:gap-x-[30px]`, and the same 30px gutter is reproduced for the services columns — the
   reference's media rows measure 540px wide at 1440, not the 555px a bare two-column grid gives.
6. **The source's markup-only details.** The design draws each card's mint disc with a `:before`
   pseudo-element and its glyph with an icon font at Bootstrap's `display-3`; the recreation uses a
   real `<span>` for the disc (70×70, inset 10px) and a `lucide-react` glyph sized 48px below 992px
   and 72px above, which is where the design's own `display-3` media rule turns. `lucide-react`
   exports no brand glyphs, so the four footer marks are inline SVG.
7. **The footer hairline.** The generic `.border-top` is `#edf0f5`, but the design overrides it
   inside the footer to `rgba(255,255,255,0.1)`; the computed value is what ships.
8. **Stickiness, disclosure and collapse.** The design's jQuery sticky header, offcanvas menu and
   Bootstrap collapse are reproduced as `position: sticky`, a mount-while-open disclosure and a
   `hidden`-attribute panel, each keyboard operable with `aria-expanded`/`aria-controls`.
9. **Carousel.** The reference keeps three slides in a transformed track and repeats one caption
   three times; the recreation mounts the active slide only (the four arrows/dots are real buttons)
   and ships three distinct couples, stepping every 6s and never under `prefers-reduced-motion`.
10. **Photography.** The seeds are chosen by role and reviewed on a contact sheet before shipping —
    the first blind picks included a misty railway track for the cover, a rock band and a flat sunset
    — and each caption/story was rewritten to describe the frame that loads:
    cover `celebrant-30` (a couple on a bench above the water), rows `celebrant-7` / `-62` / `-43` /
    `-38`, slides `celebrant-3` (the pier) / `-35` (the headland) / `-33` (the lake).
11. **Not reproduced.** The design's Google Analytics `gtag` id, its icomoon/flaticon icon fonts and
    every asset it loads.

### Measured reference vs build (desktop 1440×900)

| Element | Reference (preview DOM) | Build |
| --- | --- | --- |
| Header | white, 24px/24px padding, wordmark Quicksand 19.2px/900 uppercase | same (88px tall) |
| Active nav bar | 2px `#cae8d5`, `left/right: 10px`, `bottom: 0` | same (45×2 at the row's foot) |
| Container | 1140 max-width, 15px gutters, flush content edges | same (x 143..1268) |
| Cover photo | container content box, `100vh` / `min-height: 450px` | 1110×900 |
| Mint band | `top: 30%`, `right: -150%`, `width: 200%`, `height: 100%`, `z-index: -1` | 720,478 2280×900 (identical formula) |
| Services row | 540 wide, image `flex: 0 0 250px`, text `0 30px`, rows 2+4 image-right | 540 wide at x165/x735, order L/R/L/R |
| Panel | inset 15px each side, `100vh`, bottom `-5%`, mint | 1080 wide, 900 tall (starts above the rail) |
| Slide | `col-md-11`, 500px tall photo, caption `mt-5`, inner `col-lg-8` | 1018×500 at x204 |
| Arrows | 40px white circles, `left/right: 27px`, top at 50% of the rail | same |
| Dots | 8px circles, 5px margin, `rgba(0,0,0,0.3)` → black | same (3 dots) |
| Card | 540 wide, 30px padding, white, no border, no shadow | same (border-width 0) |
| Disc / glyph | 70×70 mint at `left: -10px`; glyph 72px (`48px` below 992) | same |
| Question row | 20px, `padding: 10px 15px`, radius 0, black open / `#808080` folded, 30px line | same (50px tall) |
| Footer | `#333333`, 128px padding, headings 16px white, `#737373` / `#999999` | same |
| Newsletter | transparent input, `#6c757d` border, `30px 0 0 30px`; Send mint, black label, `0 30px 30px 0` | same |
| Social row | 16px glyphs, 16px right padding, `#999999` | same |
| Hairline | `rgba(255,255,255,0.1)`, 48px padding-top | same |
| Overflow | none | `scrollWidth === clientWidth` at 1440 and 375 |

