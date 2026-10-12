# Template: Aisle (Wedding)

## Purpose

Aisle is a single-page **wedding "Save the Date" one-pager** in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Wedding2"** template design (source slug `wedding2` — the Wedding
family's **script-and-serif romance** page: a full-viewport photo hero of a
bride's and groom's clasped hands, with a small tie glyph, a letter-spaced
date line and the couples' names set in a **giant cursive script** with a rose
heart between them; then a white "Our Story" band carrying a faint
concentric-circle pattern, an ornamental divider (two thin grey rules flanking a
rose star), a photo countdown band with **four 120 px outlined circles** for
days/hours/minutes/seconds, an alternating **central-line timeline** of four
wedding-detail moments with rose 56 px icons and dot markers, a second photo CTA
band with an animated underline "Learn more" link, a six-tile photo gallery with
lightbox links, a 50/50 contact block with a map, and a newsletter footer whose
rounded pill field carries a **circular rose submit button**).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths, no brand marks, no analytics or map keys) and never reuses
the source name, its copy verbatim or its typos.

- **Source:** https://colorlib.com/wp/template/wedding2/ (listed in TEMPLATES.md
  under `## Wedding` at line **3107**; the slug `wedding2` appears in no
  `openspec/specs/` folder and no `docs/templates/` folder on main before this
  one — the only earlier mentions are inside the Wedlock prep, which merely
  lists `wedding2` as one of the preview-map slugs that exist)
- **Preview:** `https://preview.colorlib.com/theme/wedding2/` returns
  **HTTP 200**, `text/html`, **14,477 B** with `<title>TITLE</title>` (the
  source's placeholder title — verified 2026-10-12). Its DOM was fetched and
  parsed and its stylesheets were tokenized:
  `01-homepage/css/styles.css` (HTTP 200, **12,286 B**),
  `01-homepage/css/responsive.css` (HTTP 200, **4,147 B**),
  `common-css/bootstrap.css`, `common-css/font-icon.css` (the source's icon
  font), `common-css/fluidbox.min.css` (gallery lightbox). The live preview is
  the primary reference; **no fallback was needed**.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/wedding2-free-template.jpg
  (HTTP 200, **113,016 B**, served as **AVIF** → decoded to PNG with
  `ffmpeg -i wedding2-shot.jpg wedding2-shot.png`, **1200×946**, reviewed
  visually 2026-10-12; the pixel size was re-measured 2026-10-12 with
  `PIL.Image.open().size` **and** `ffprobe` — both report 1200×946, so the
  892 recorded by the first conversion is a defect of that conversion, not of
  the file).
- **Source inner pages (live reference, curl-probed 2026-10-12):** the landing
  page is the design of record, but the same theme ships **two** further live
  pages under `https://preview.colorlib.com/theme/wedding2/<page>`, both
  **HTTP 200** on the `curl -sS` basis — `02-rsvp.html` (**9,789 B**) and
  `03-regular-page.html` (**10,860 B**). The landing page carries **neither** of
  their bands, yet its own menu points at both (its `RSVP` entry hrefs
  `02-rsvp.html` and its `THER WEDDING` entry hrefs `03-regular-page.html`), so
  those pages are the authoritative reference for the two destinations this
  one-pager has to invent. Neither page is copied; both are read for structure
  and copy kind (the full reading is in `## Design reference` and
  `docs/templates/aisle/design-notes.md`).
- **New name:** `aisle` (apps/aisle, `@free-react-templates/aisle`) — from the
  wedding-aisle motif of the design; the source name "Wedding2", its wordmark,
  its logo files, its photos, its icon font and its copy are never reused.
  `aisle` collides with no `apps/` folder, no `openspec/specs/` folder, no
  `docs/templates/` folder and no TEMPLATES.md template name (verified
  2026-10-12). Wedding-family names already taken include altar, matrimony,
  affiance, betrothal, celebrant, trousseau, paperie, wedlock, nuptia,
  nuptials, troth and espousal.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Wedding2" (source slug `wedding2`,
  https://colorlib.com/wp/template/wedding2/). The reference is a jQuery +
  Bootstrap 4-alpha page (`common-js/jquery-3.1.1.min.js`, `common-js/bootstrap.js`,
  `common-js/jquery.countdown.min.js`, `common-js/jquery.fluidbox.min.js`,
  `common-js/scripts.js`). The recreation uses Tailwind utilities and React
  state instead and copies nothing.
- **Preview URL:** `https://preview.colorlib.com/theme/wedding2/` → **HTTP
  200** (14,477 B). Reference artifacts saved for this prep (research date
  2026-10-12): `/tmp/wedding2.html`, `/tmp/wedding2-styles.css`,
  `/tmp/wedding2-responsive.css`, `/tmp/wedding2-shot.jpg` → `.png`. Every
  token below was read out of the served HTML/CSS **and cross-checked against
  the live render in a browser** (computed styles + `getBoundingClientRect`);
  the browser pass ran at the only viewport available to the harness
  (**780×437**), so absolute pixel measurements below are labelled with that
  viewport and the desktop-intent values come from the stylesheet.
- **Screenshot (1200×946, browser-chrome mock of the top of the page):**
  - the header floats over the hero with **no background**: the wordmark
    "Wedding" is set in a **white cursive script** at the left; the menu sits at
    the right in small, thin, letter-spaced capitals — HOME · OUR STORIES ▾ ·
    THER WEDDING · GELLERY · RSVP — over a hairline `rgba(255,255,255,.2)` rule;
  - the hero is a **full-bleed wedding photograph** (a bride's hand in a cream
    lace sleeve with a diamond ring resting on the groom's hand, a peach rose
    and greenery bouquet, a tan leather watch on the groom's wrist), dimmed by a
    dark overlay;
  - centred white overlay type, three registers: a small **tie/bow glyph**,
    then "23 SETPEMBER 2017" in small letter-spaced serif capitals, then
    "Save The Date" in the **script face**, and finally the two first names set
    very large in the script face with a **rose heart glyph** between them;
  - below the fold the white band opens with "**Our Story**" in near-black
    script over a **faint concentric-circle pattern**, a small ornamental
    divider (two thin grey rules flanking a rose star), and a narrow centred
    grey serif paragraph.
  - Palette impression: photo-driven white/neutral page, black-ish text, one
    warm **rose `#E45F74`** accent for glyphs, icons and button fills, a second
    lighter rose `#E55D73` on the newsletter submit button.
- **Section order (1:1, measured top-to-bottom; heights/offsets from the live
  pass at 780×437, page height ≈ 5,197 px):**
  1. `header` — `position:absolute; left:0; right:0; top:20px; z-index:1000;
     font-size:.95em; border-bottom:1px solid rgba(255,255,255,.2);
     color:#fff` (measured top 20 px, height 66 px), so it floats over the hero
     rather than pushing it down. Inside a `.container`: a `.logo` link
     (`height:40px; margin:5px 0 20px`) holding the white logo image, a
     `.menu-nav-icon` hamburger (`display:none` above 767 px; at ≤767 px
     `display:inline-block; float:right`; 50×60 with a bars glyph, toggling
     `#main-menu` via `data-nav-menu`), and `ul.main-menu.visible-on-click`
     (`font-weight:500; float:right; margin:0 -15px`) with **five** items:
     **HOME** · **OUR STORIES** (`.drop-down`, caret glyph, nested
     `ul.drop-down-menu` with FEATURED / ABOUT / CATEGORIES, the last one a
     second-level `.drop-down-inner` menu with the same three labels) ·
     **THER WEDDING** · **GELLERY** · **RSVP** (measured link 15.2 px/500
     white, `line-height:46px`, 50 px tall, `padding:0 15px`, `border:2px solid
     transparent` with a 2 px radius). Hover/open paints the item's border
     **`#E45F74`**; the dropdown is a `#333` panel (`min-width:200px`, `top:50px`,
     `box-shadow:0 3px 10px rgba(0,0,0,.3)`) whose rows are `display:block` with
     `border-top:1px solid #444` and 15/20 px padding. The source's three
     capitalisation slips — "SETPEMBER", "THER WEDDING", "GELLERY" — are
     **mistakes in the source and must NOT be reproduced**; the nav labels are
     also rewritten as the app's own anchors (a one-pager needs no multi-page
     links, and the source's `03-regular-page.html` / `02-rsvp.html` file links
     must not survive). **Every source href is dead**: `#` ×20 (logo, GELLERY,
     dropdown and footer/gallery rows) and jQuery's `#!` ×2 on the two
     `.drop-down` togglers — no element on the page carries `id="!"`, and the
     live DOM's entire id set is `clock` · `main-menu` · `map`, so the source
     page has **no in-page anchors at all** and the recreation's five
     destinations are ours to name and wire (verified 2026-10-12).
  2. `.main-slider` — the hero: `height:100vh`, `position:relative; z-index:1`,
     `background-image` (the reference's `images/slider-1-1600x900.jpg`),
     `background-size:cover`, `color:#fff`, plus a `:after` full-bleed
     `rgba(0,0,0,.3)` scrim at `z-index:-1`. Content is vertically centred with
     a `.display-table` / `.display-table-cell` pair (measured 437 px tall at a
     437 px viewport) wrapping `.slider-content`, which contains, in order:
     `i.small-icon.icon-tie` (2.5 em glyph), `h5.date` (1.2 em — 19.2 px
     measured — Bitter, white), `h3.pre-title` (2.5 em — 32 px — **Playball**
     script, white) and `h1.title` (5 em — 64 px — **Playball**, white) with an
     inline `i.icon-heart` at `.8em` in **`#E45F74`**. All type is centred.
  3. `.section.story-area.center-text` — a `.section` (padding `100px 0 70px`)
     white band whose `:after` overlay paints the reference's
     `images/Background_Circle.png` at `opacity:.8` — a faint tiled
     concentric-circle pattern. Contents: `.heading` (`padding-bottom:40px`)
     with `h2.title` "Our Story" (**Playball**, 3.5 em / 48 px measured,
     `#333`) plus `.heading-bottom` ornament (`width:160px; height:20px;
     margin-top:20px`, a `:before` and `:after` 1 px `#aaa` rule of 60 px each
     flanking a centred **`#E45F74`** star glyph), then `p.desc.margin-bottom`
     — a centred serif paragraph (16.8 px, `#555`, `line-height:26.88px`,
     measured 570 px wide in a `col-sm-10`).
  4. `.section.counter-area.center-text` — a **photo band**: the reference's
     `images/counter-1-1600x600.jpg` under a `:after` `rgba(0,0,0,.3)` scrim,
     `color:#fff`, `.section` padding. Contents: `.heading` with `h2.title`
     "Don't miss it!" and a white `.heading-bottom` star ornament, then a
     `.remaining-time` block holding `#clock`, which the reference's
     `jquery.countdown` plugin fills with **four** `.time-sec` cells —
     measured **120×120 px**, `border-radius:100px`, `border:1px solid #fff`,
     `padding-top:25px`, `margin:0 20px 30px`, each an outlined circle with a
     `span.title` number (3 em) over a lowercase unit word — `00 days`,
     `00 hours`, `00 minutes`, `00 seconds` (all zeros today because the
     source's target date, 2017-09-23, is in the past — see the live deltas
     below).
  5. `.section.w-details-area.center-text` — a white band (measured 1,407 px
     tall at 780 px) holding `.heading` with `h2.title` "Wedding Details" and a
     rose star ornament, then `.wedding-details.margin-bottom`
     (`position:relative`, measured 570 px wide) which draws a **central
     timeline**: a `:after` rule `1px #ccc` at `left:50%; margin-left:-.5px`
     spanning the block's full height. Inside are **four** `.w-detail` cards
     (`width:50%; padding:0 50px; margin-bottom:30px; clear:both;
     margin-top:-40px`, each with an `:after` **18×18 px dot** —
     `border-radius:20px; border:1px solid #aaa; background:#fff` — pinned to
     the centre line): alternating `.right` (`float:right; text-align:left`)
     and `.left` (`float:left; text-align:right`). Sources order: **CEREMONY**,
     **TOAST & DINNER**, **WEDDING CAKE**, **PHOTOGRAPHY**; each is a 3.5 em
     (**56 px measured**) **`#E45F74`** icon over `h4.title` (1.5 em / 24 px
     Bitter, `#333`) and a one-sentence paragraph (the source repeats one lorem
     sentence four times — the recreation writes four distinct short blurbs of
     the same kind). Measured 285 px per card, first card top 1,734 px, last
     2,545 px.
  6. `.section.ceremony-area.center-text` — a second **photo band**
     (same `counter-1-1600x600.jpg` asset, `:after` `rgba(0,0,0,.3)`,
     `color:#fff`) whose `.heading` is `h2.title` "Wedding & Ceremonies" with a
     white ornament, `p.desc` in white, and a `a.border-btn` **LEARN MORE**
     link (white, 0.9 em / 14.4 px measured, `padding-bottom:5px`,
     `position:relative`) whose underline is drawn by two `:before`/`:after`
     2 px **`#E45F74`** bars — the `:before` starts `translateX(-130%)` and
     slides across under the label on hover, so the fill animates in from the
     left.
  7. `.section.galery-area.center-text` — white band: `.heading` `h2.title`
     "Our Gallery" with rose ornament, then `.image-gallery` → `.row` of **six**
     `col-md-4 col-sm-6` tiles (3 across at ≥768 px, 2 across at ≥576 px,
     measured 240 px wide each), every tile an `<a>` wrapping a
     `600×400` photo with a lightbox hook (`data-fluidbox`), then
     `a.btn-2.margin-bottom.gallery-btn` (**VIEW ALL GALLERY**,
     `margin-top:30px`, 226×46 measured: transparent fill, `1px solid
     #E45F74` border, `border-radius:1px`, `letter-spacing:2px`, `#333` label,
     filling `#E45F74` with white text on hover).
  8. `section.contact-area` — a **50/50 split** with a heavy
     `box-shadow:1px 10px 40px rgba(0,0,0,.4)` on the band:
     - left: `.contact-wrapper.section.float-left` (`width:50%`, so it keeps the
       100/70 px `.section` padding; measured 383×562 px) holding `.heading`
       with `h3.title` "Contact Us" (**Playball**, 2.5 em / 32 px measured,
       `#333`), a date line (the source's "On the 25 September 2017"), an
       invitation line ("Join us as we celebrate life and love."), a
       `a.phone` link (**2 em / 48 px measured, `#E45F74`**, `margin:10px 0` —
       the source's `784-412-0646`, `tel:` href) and a venue address paragraph
       (the source's "14 Baria street 133/2, New York City, US").
     - right: `.map-area` (`width:50%; position:absolute; top:0; bottom:0;
       right:0`) holding `#map`, filled in the reference by the **Google Maps
       JS API**, loaded with
       `https://maps.googleapis.com/maps/api/js?key=AIzaSy…&callback=initMap`
       (the key is the source's and must never be reused).
  9. `footer` — `position:relative; padding-top:70px`, white, with the same
     `:after` overlay of `images/Background_Circle.png` at `opacity:.8`
     (measured 489 px tall). Centred `.container`: a `.logo-wrapper` with a
     dark script logo image, then `.newsletter` — `h4.title` "RECEIVE NEWS IN
     YOUR EMAIL" (1.5 em / 24 px measured, Bitter, `#333`), a supporting line
     ("Join our mailing list to receive news and announcements"), and
     `.email-area` (measured 400×55, `margin:20px auto`): an `.email-input`
     with `border-radius:100px`, `padding:0 70px 0 25px`, `border:0`,
     `box-shadow:1px 10px 30px rgba(0,0,0,.2)` deepening to
     `1px 15px 30px rgba(0,0,0,.3)` on focus, plus a `.submit-btn`
     (**55×55 circle**, `border-radius:100px`, `background:#E55D73`, white
     glyph, `line-height:55px`) that inverts to `background:#000;
     color:#E55D73` on hover. Then `ul.social-icons` — **five** round-linked
     glyphs (heart, twitter, instagram, pinterest, tripadvisor; 1.1 em /
     17.6 px measured) — then `ul.footer-links` — **five** letter-spaced
     capitals (HOME · OUR STORIES · THE WEDDING · GALLERY · CONTACT, 16 px
     measured) — and a `.copyright` line (1.05 em / 16.8 px, `#555`) whose
     year is written by script and whose credit link points at the source site
     (replaced here by the Component Dock attribution).
- **Live-render deltas found (must be reproduced deliberately, not by
  accident):**
  - **The countdown is stuck at zero.** The reference initialises
    `jquery.countdown` against a 2017 date; the live page therefore shows
    `00 days / 00 hours / 00 minutes / 00 seconds` in all four circles. The
    recreation must run a **real** client-side countdown to the app's own
    future date, and must render a stable, labelled state (e.g. a `role="timer"`
    or a labelled group with `aria-live` off) rather than four bare digits.
  - **The map is an API-keyed third-party embed** and rendered as an **empty
    shell** in the live pass (`#map` contained only two empty divs, zero
    iframes). The key is the source's and must not be reused: the recreation
    ships a **static styled map placeholder** (own SVG/`picsum` still + the
    address in text) with no third-party script and no API key.
  - **The hero is a `100vh` band**, not a fixed pixel height, and the reference's
    header floats **over** it (`position:absolute; top:20px`) — so the hero must
    own the full first viewport and the header must not reserve layout space.
  - **Two different photos are reused across the page.** The countdown band and
    the ceremony CTA band share one asset (`counter-1-1600x600.jpg`); the
    recreation must not copy either photo and should keep the same
    "two photo bands, same treatment" rhythm with its own placeholder imagery
    under the `rgba(0,0,0,.3)` scrim.
  - **The pattern overlay is an image**, not a gradient: `.story-area:after`
    and `footer:after` both paint `Background_Circle.png` at 80 % opacity.
    Since assets are never copied, the recreation must generate its own faint
    concentric/tiled ornament (repeating radial-gradient rings or an inline SVG
    data-URI) at the same low contrast, and it must sit **behind** the content
    (`z-index:-1`) exactly as in the reference.
  - **The timeline depends on negative margins.** `.w-detail{margin-top:-40px}`
    makes each card visually "hook" onto the previous one around the centre
    line, and the 18 px dots are positioned with the same offsets
    (`margin-left:-9px` / `margin-right:-9px`). Read from the source; do not
    normalise it into plain stacked cards.
  - **The nav breaks at 767 px, not 991 px.** `.menu-nav-icon` only appears at
    ≤767 px, where `header{top:0; border-bottom:1px solid rgba(255,255,255,.1)}`,
    `.logo{margin:10px 0; height:40px}` and `ul.main-menu` becomes a `#333`
    in-flow panel (`display:none` → block, `max-height:400px`, `overflow:auto`,
    `border-top:1px solid #ccc`, rows `display:block`, `border-bottom:1px solid
    #444`, links `padding:15px`, nested levels indented 25/35 px). There is no
    intermediate tablet nav.
  - **Breakpoint ladder (from `responsive.css`):** ≤992 px `h1 4em / h2 3em /
    h3 2em`; ≤767 px `p{line-height:1.4}`, `h1 3em / h2 2.5em / h3 1.8em /
    h4 1.5em / h5 1.2em`, `.section{padding:50px 0 20px}`,
    `.heading{padding-bottom:20px}`, `.heading-bottom{margin-top:10px}`, the
    timeline flattens (`.wedding-details{margin-left:15px; overflow:visible}`
    with its rule at `left:0`, `.w-detail{width:100%; padding:0 0 0 30px;
    margin:0 0 30px}` and both sides `text-align:left; float:none`), the contact
    block stacks (`.contact-wrapper{width:100%; float:none!important}` and
    `.map-area{height:400px; width:100%; position:static}`), the gallery button
    loses its 30 px gap (`margin-top:10px`), `footer ul>li>a{padding:10px 7px}`
    and `footer .newsletter .email-area{width:90%}`; ≤479 px `body{font-size:14px}`.
    (The `≤1200 px`, `≤359 px` and `≤290 px` media queries in the source are
    empty.)
  - **The `<title>` is literally `TITLE`** (an unrendered placeholder) and the
    footer year is written by an inline `document.write`. The recreation writes
    a real title and a real year.
  - The source loads **its own analytics** (`gtag.js`, UA-23581568-13) and
    `maps.googleapis.com` — neither may appear anywhere in the app.
  - **The served `<head>` is not the theme's** (host layer, measured
    2026-10-12): the preview host injects `<meta name="robots"
    content="noindex, nofollow">` + `<link rel="dns-prefetch"
    href="https://cdnjs.cloudflare.com">` as the **first children of `<head>`**
    and answers with `x-robots-tag: noindex, nofollow`, behind a host-wide
    `https://preview.colorlib.com/robots.txt` (`User-agent: *` / `Disallow: /`).
    The theme's own head starts *below* that pair, so the served head's first
    children must not be read as the theme's markup; none of that layer may
    appear in `apps/aisle` (no `noindex`, no `robots.txt`, no `dns-prefetch`,
    no `cdnjs`).
- **Interactive behaviour to reproduce (from the reference's markup/scripts):**
  the `#main-menu` toggle at ≤767 px (the `.menu-nav-icon` carries
  `data-nav-menu="#main-menu"` and Bootstrap's `visible-on-click` collapse adds
  `.visible`), the hover/tap **dropdown** (`.drop-down` → `#333` panel, plus the
  nested `.drop-down-inner` submenu), the hover **underline animation** on
  `.border-btn`, the **gallery lightbox** (`data-fluidbox`, an overlay
  `#flavorOverlay` at `rgba(0,0,0,.8)`), the **countdown**, and the newsletter
  form (the reference posts nowhere — the recreation keeps it local-only with
  validation).
- **Inner-page reference for the two invented destinations (live, curl-probed
  2026-10-12 — the landing page has no RSVP band and no regular-page band, while
  the source's own menu links both pages):**
  - `02-rsvp.html` (**200**, 9,789 B, `<title>TITLE</title>` — the same
    unrendered placeholder title as the landing page): an `h3` kicker **RSVP**
    over an `h1` **Be Our Guest**, then a `section.contact-area` that reuses the
    landing page's 50/50 split. The left column (`.display-table-cell`) holds a
    `.heading` with `h2.title` **Contact Us** above the same date and venue lines
    ("On the 25 September 2017", "Join us as we celebrate life and love.",
    "14 Baria street 133/2, New York City, US"), **two** phone links (`h3 > a.phone`,
    `tel:` — the landing page's number **plus** a second one) and an
    `h5 > a.email` (`mailto:`); the right column (`.contact-form`) holds
    `h2.center-text` **Are you getting?** over `h4.pre-title.center-text`
    **RSVP HERE!** and a `<form method="post">` whose grammar is **Full Name**
    (`input.name-input`), **Email** (`input.email-input`, typed `text` in the
    source) and **two** `<select class="event-select" name="option">` menus —
    **Guest** (`00`–`04`) and **Event** (`All Events`, `Option 1`–`Option 3`).
  - `03-regular-page.html` (**200**, 10,860 B, `<title>TITLE</title>`): an `h1`
    **Regular Page** over a `section.regular-area` text band with four content
    images and a post-like stack — `h2` **Planning Honeymoon Trip**, `h4`
    **Shooting Flowers and Bouquets**, an `h3` pull quote ("Love recognizes no
    barriers…") credited through an `h5`, and `h4` **Quick Note About the Gifts**
    twice — then a `section.quoto-area` and the newsletter footer.
  - **Source defects that must NOT be reproduced:** the RSVP form gives *both*
    selects the same `name="option"` and repeats `value="3"` across its options,
    and it carries **no submit control** at all; the regular page's author credit
    is misspelled; both pages reuse the landing page's phone numbers, e-mail
    address, venue address and logo files. The recreation ships its own contact
    data, its own copy, a real submit control, distinct select `name`s and unique
    option values.
- **Brand colour census (`01-homepage/css/styles.css`, by frequency):**
  `#fff` (14), **`#E45F74` (14)**, `#aaa` (3), **`#E55D73` (2)**, `#444` (2),
  `#333` (2), `#ccc` (1), `#555` (1), `#000` (1), plus the function colours
  `rgba(0,0,0,.3)` (three scrims), `rgba(0,0,0,.4)` (contact shadow),
  `rgba(0,0,0,.2)`/`rgba(0,0,0,.3)` (pill shadows), `rgba(0,0,0,.3)`
  (dropdown shadow) and `rgba(255,255,255,.2)`/`rgba(255,255,255,.1)` (header
  rules). The page is therefore: **photo + white**, near-black text
  (`#333`/`#555`), light rules (`#aaa`/`#ccc`), and a single **rose** accent
  carried by two near-identical stops (`#E45F74` primary, `#E55D73` on the
  newsletter button).
- **Sibling comparison (why this slug is its own design):** the rose
  `#E45F74` exists in five other prepped specs — dawn, eveglow, imminence,
  signal and vigil — but only as an incidental `a:hover` link colour on Poppins
  "coming soon" pages; here it is the **primary brand colour** (icons, glyphs,
  buttons, nav accents, dividers). **No spec in the repo uses the `Playball` +
  `Bitter` pairing** (verified by repo-wide grep on 2026-10-12): the wedding
  siblings are all different — altar (Wedding) uses a teal/violet/lilac palette,
  matrimony (Wed) navy `#0b1c39` with red `#ff2828`, affiance (Twohearts) pink
  `#d291bc`/`#cb7fb1`, betrothal (Dreamwed) amber `#d48f4c`, trousseau (Honey)
  `#ff2f92`, paperie (Invits) purple `#800098` with gold `#e09513`, celebrant
  (Wedding Officiant) sage `#cae8d5`, wedlock (Wordpress Wedding Themes)
  `#E74923`/`#D60058`. `Bitter` appears only in conjury / hexcraft / staybook /
  stayhaven (wizard and hotel pages, paired with Poppins). Do not borrow a
  sibling's palette, fonts or geometry.

## Design tokens

| Token                        | Value                                                                                                    | Where                                                                             |
| ---------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| brand rose (primary)         | `#E45F74`                                                                                                | hero heart glyph, detail icons, `.btn` fill, `.btn-2` border + hover fill, `.border-btn` underline bars, section star ornaments, nav hover border, phone link         |
| brand rose (secondary)       | `#E55D73`                                                                                                | newsletter circular submit fill (hover inverts to `#000` bg / `#E55D73` glyph)   |
| surfaces                     | `#ffffff` (page, contact block, timeline dots, countdown circle) · photo bands (own placeholder imagery)  | page background and the two photo bands                                          |
| text                         | `#333` (body/headings/timeline titles) · `#555` (`p.desc` copy, copyright)                                | typography                                                                        |
| rules / dividers             | `#aaa` (1 px heading rules, countdown/dot outlines) · `#ccc` (1 px timeline spine) · `rgba(255,255,255,.2)` (header hairline) · `rgba(255,255,255,.1)` (mobile header hairline) | structural lines                       |
| dark chrome                  | `#333` (dropdown + mobile menu panel) · `#444` (`border-top` between dropdown rows)                        | menus                                                                             |
| scrims / shadows             | `rgba(0,0,0,.3)` (hero, countdown and ceremony scrims; dropdown shadow) · `rgba(0,0,0,.4)` (contact band `1px 10px 40px`) · `rgba(0,0,0,.2)` → `rgba(0,0,0,.3)` (newsletter pill `1px 10px 30px` → `1px 15px 30px`) | depth |
| overlay pattern              | `Background_Circle.png` at `opacity:.8` behind `.story-area` and `footer` → rebuild as an own faint concentric-ring pattern (CSS/SVG), same low contrast | band ornament |
| font — display               | **`Playball`** (cursive script, weight 400)                                                                | `h1`/`h2`/`h3` and every script accent (hero names and pre-title, section titles, contact title, both logos) |
| font — body                  | **`Bitter`** (serif, weight 400; nav/UI at 500)                                                           | body copy, paragraphs, nav links, buttons, forms, footer and legal lines          |
| base type                    | `body` 16 px/400 Bitter `#333` (14 px ≤479 px); `h1` 5 em → 4 em ≤992 px → 3 em ≤767 px; `h2` 3.5 em → 3 → 2.5; `h3` 2.5 → 2 → 1.8; `h4` 1.5 → 1.5; `h5` 1.2; `h6` .9 em/`letter-spacing:1px`; `p{line-height:1.4}` ≤767 px | typography |
| letter-spacing               | `2px` on `.btn`/`.btn-2` labels; `1px` on `h6`; date line reads as tracked capitals by markup, not CSS   | buttons, small caps                                                               |
| radius                       | `1px` (`.btn`, `.btn-2`) · `2px` (nav item) · `20px` (18 px timeline dots) · `100px` (countdown circles, newsletter pill and its submit circle) · `50%` (social icons) | shape language |
| section rhythm               | `.section{padding:100px 0 70px}` → `50px 0 20px` ≤767 px; `.heading{padding-bottom:40px}` → 20 px; `.heading-bottom{margin-top:20px}` → 10 px | spacing |
| header                       | `position:absolute; top:20px; left:0; right:0; z-index:1000`; `.95em`; hairline bottom rule; logo block 40 px tall; nav links 50 px tall, `line-height:46px`, `padding:0 15px`, `border:2px solid transparent`, 2 px radius, hover `#E45F74`; dropdown `#333` `min-width:200px`, 15/20 px rows | header |
| hero                         | `height:100vh`; own photo `cover`; `:after` `rgba(0,0,0,.3)`; content vertically centred via a table-cell; glyph 2.5 em; date 1.2 em; pre-title Playball 2.5 em; names Playball 5 em with a `.8em` rose heart | hero |
| countdown                    | four 120×120 circles, `1px solid #fff`, `border-radius:100px`, `padding-top:25px`, `margin:0 20px 30px`, 3 em numbers over lowercase unit words; own future target date | countdown |
| timeline                     | spine `1px #ccc` at `left:50%`; cards `width:50%`, `padding:0 50px`, `margin-bottom:30px`, `margin-top:-40px`, `clear:both`, alternating `float:right/left` with flipped `text-align`; 18 px white dots with `#aaa` outlines pinned to the spine; icons 3.5 em rose; titles 1.5 em; flat left-aligned single column ≤767 px | wedding details |
| gallery                      | six `col-md-4 col-sm-6` tiles (3 → 2 columns), 600×400 sources, lightbox-linked; `.btn-2` 226×46 with `letter-spacing:2px`, `margin-top:30px` → 10 px | gallery |
| contact split                | band `box-shadow:1px 10px 40px rgba(0,0,0,.4)`; left 50 % `.contact-wrapper.section`; right 50 % absolute map `top:0; bottom:0; right:0`; title Playball 2.5 em; phone 2 em rose; map 400 px tall and stacked ≤767 px | contact |
| newsletter                   | footer `padding-top:70px` with the ring pattern; logo (dark version); `h4` 1.5 em; `.email-area` 400×55 `margin:20px auto` (90 % ≤767 px); input `border-radius:100px`, `border:0`, `padding:0 70px 0 25px`, shadow deepening on focus; submit 55×55 circle `#E55D73` inverting to black | footer form |
| social + footer links        | five 1.1 em social glyphs; five tracked-capital links (16 px) with 10/7 px padding ≤767 px; copyright 1.05 em `#555` | footer |
| transitions                  | `.2s`/`.3s` (buttons, links, underline bars, dropdown reveal `full-opacity-anim .2s`)                                                                   | interaction |
| Google Fonts map             | `Playball:wght@400` + `Bitter:wght@400;500` via `<link>` in `index.html` (`https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&family=Playball&display=swap`), mirroring the source's Playball-400 + Bitter-400 usage; glyphs from `lucide-react` (never the source's icon font, FontAwesome or its woff2 files) | `index.html` |
| placeholders (own assets)    | hero photo `https://picsum.photos/seed/aisle-hero/1920/1080`; countdown band `https://picsum.photos/seed/aisle-countdown/1600/600`; ceremony band `https://picsum.photos/seed/aisle-ceremony/1600/600`; six gallery tiles `https://picsum.photos/seed/aisle-gallery-<1..6>/600/400`; map = own static placeholder illustration (no API key); ring pattern = own CSS/SVG; logos = own wordmark in Playball; icons = `lucide-react` | ADDED vs the reference |
| attribution                  | footer line links `https://www.componentdock.com/` ("Component Dock") replacing the source's Colorlib credit                                        | ADDED vs the reference |

## Requirements

### Feature: Header (transparent floating nav with dropdown and mobile panel)

#### Scenario: Floating header renders the wordmark and five-item menu

- **Given** the page loads
- **When** the header renders
- **Then** it is `position:absolute; top:20px; left:0; right:0; z-index:1000`
  with `font-size:.95em`, a `rgba(255,255,255,.2)` hairline bottom rule and
  `color:#fff`, so it floats over the hero without reserving layout space
- **And** the app's own script wordmark sits at the left in white `Playball`
  inside a 40 px-tall logo block (never the source's logo image or the source
  name "Wedding2")
- **And** the menu carries exactly **five** destinations — home, our story,
  the wedding, gallery, RSVP — as tracked capitals at 15 px/500 white with
  50 px-tall items (`padding:0 15px`, `border:2px solid transparent`, 2 px
  radius), and the hovered/current item paints its border `#E45F74`
- **And** the source's spelling slips ("SETPEMBER", "THER WEDDING",
  "GELLERY") and its dead links (the `index.html` / `03-regular-page.html` /
  `02-rsvp.html` file links, the bare `#` rows and the two `#!` dropdown
  togglers — the source page's whole id set is `clock` · `main-menu` · `map`)
  are **not** reproduced: labels are spelled correctly and every
  entry is a working in-page anchor with a `focus-visible` ring

#### Scenario: "Our Story" item opens a two-level dropdown

- **Given** the desktop nav is visible
- **When** the "Our Story" item is hovered or focused
- **Then** a `#333` panel appears under it (`min-width:200px; top:50px;
  box-shadow:0 3px 10px rgba(0,0,0,.3)`) with rows `display:block`,
  `border-top:1px solid #444` and 15/20 px padding, the first row border-less
- **And** the third row ("Categories") opens a second-level panel to the right
  with the same three labels, indented 25/35 px in the mobile layout
- **And** the panel is keyboard operable (`Escape` closes it, the trigger
  reports `aria-expanded`, focus order matches the visual order)

#### Scenario: Below 767 px the nav collapses into a toggleable panel

- **Given** the viewport is ≤767 px
- **When** the nav renders
- **Then** the desktop menu and dropdowns are replaced by a `.menu-nav-icon`
  toggle (bars glyph, ~50×60 px at the right, `aria-expanded`, `aria-controls`
  pointing at the menu id) while the header sits flush at `top:0` with a
  `rgba(255,255,255,.1)` rule and a 40 px logo block with 10 px margins
- **And** activating the toggle reveals the menu **in flow** as a `#333` panel
  (`max-height:400px; overflow:auto; border-top:1px solid #ccc`) whose rows are
  stacked (`display:block`, `border-bottom:1px solid #444`, links `padding:15px`,
  nested levels indented 25/35 px)
- **And** activating it again, or pressing `Escape`, closes the panel and
  returns focus to the toggle

### Feature: Hero (Save the Date photo slider)

#### Scenario: Full-viewport photo band with an own background image

- **Given** the page loads
- **When** the hero renders
- **Then** it is a `height:100vh` band with `background-size:cover`, an own
  placeholder wedding photograph (`picsum.photos/seed/aisle-hero/1920/1080` —
  never the source's `slider-1-1600x900.jpg`), and a full-bleed
  `rgba(0,0,0,.3)` scrim painted behind the content at `z-index:-1`
- **And** the figure is decorative: it is exposed as an `<img>`/`<picture>` with
  a meaningful `alt` or marked `aria-hidden`, and the band's height falls back
  sensibly when `100vh` is unavailable

#### Scenario: Centred caption stacks glyph, date, script line and names

- **Given** the hero renders
- **When** the caption is inspected
- **Then** it is vertically and horizontally centred (the reference uses a
  `display:table` / `display:table-cell` pair) and stacks, in order: a decorative
  **tie/bow glyph** at 2.5 em, a date line at 1.2 em (Bitter, white, tracked
  capitals), a **`Playball`** script line at 2.5 em, and the couple's two names
  at **5 em (64 px) `Playball`** with an inline **`#E45F74` heart glyph** at
  `.8em` between them
- **And** all hero copy is the app's own (its own couple names, its own date,
  its own invitation line) — never the source's "Jenny ♥ Mark", its
  "Save The Date"/"23 SETPEMBER 2017" strings or its typo
- **And** the hero type scales down with the source's ladder (`h1` 4 em ≤992 px,
  3 em ≤767 px) and there is no horizontal overflow at 320 px

### Feature: Our Story band (patterned white section with an ornamented title)

#### Scenario: Patterned band, script title and ornamental divider

- **Given** the page renders
- **When** the story band is inspected
- **Then** it is a white `.section` with `padding:100px 0 70px`
  (50px 0 20px ≤767 px) whose faint **concentric-circle ornament** is drawn
  behind the content at `z-index:-1` and ≈80 % opacity using the app's **own**
  CSS/SVG pattern (never the source's `Background_Circle.png`)
- **And** its heading is the app's own two-word script title in **`Playball`**
  at 3.5 em (48 px, `#333`) with `padding-bottom:40px`, followed by the
  reference's ornament: a 160×20 px block whose `:before`/`:after` draw 1 px
  `#aaa` rules of 60 px each flanking a centred **`#E45F74`** star glyph
  (`margin-top:20px`, 10 px ≤767 px), rendered as `aria-hidden` decoration
- **And** a single centred body paragraph follows in **Bitter** at 16.8 px/`#555`
  (`line-height:26.88px`), constrained to the reference's narrow measure
  (≈570 px at the top of the `col-sm-10` range) and rewritten as the app's own
  copy of the same kind

### Feature: Countdown band ("Don't miss it!")

#### Scenario: Four outlined circles count down to the app's own date

- **Given** the page renders
- **When** the countdown band is inspected
- **Then** it is a photo band using the app's own placeholder image
  (`picsum.photos/seed/aisle-countdown/1600/600`) with a `rgba(0,0,0,.3)` scrim
  and white text, an own script title in `Playball` with a white star ornament,
  and an inner row of exactly **four** circular cells of **120×120 px** —
  `border:1px solid #fff`, `border-radius:100px`, `padding-top:25px`,
  `margin:0 20px 30px` — each showing a 3 em number above a lowercase unit word
  (**days**, **hours**, **minutes**, **seconds**)
- **And** the values are computed live in the client from a **future** target
  date defined by the app (the reference's 2017 date is in the past and its
  circles sit at `00` for ever — that dead state is not reproduced)
- **And** each unit is labelled for assistive technology (the digits are not the
  only accessible name), the group is a single `role="timer"`/labelled region
  with no `aria-live` chatter, the four cells are in the DOM and readable before
  hydration, and expired/zero states render `00` rather than blank cells

### Feature: Wedding Details timeline

#### Scenario: Four alternating detail cards straddle a central spine

- **Given** the page renders
- **When** the details section is inspected
- **Then** it is a white `.section` with an own script title and rose star
  ornament, over `.wedding-details` (`position:relative`) that draws a 1 px
  `#ccc` spine at `left:50%` spanning its full height
- **And** exactly **four** cards render (`width:50%; padding:0 50px;
  margin-bottom:30px; clear:both; margin-top:-40px`), alternating right/left
  (`float:right; text-align:left` then `float:left; text-align:right`) so the
  copy alternates sides of the spine, each carrying an **18×18 px dot**
  (`border-radius:20px; border:1px solid #aaa; background:#fff`) pinned to the
  spine and a **3.5 em (56 px) `#E45F74`** `lucide-react` icon above a 1.5 em
  `#333` title
- **And** the four moments are the reference's kinds — ceremony, toast & dinner,
  wedding cake, photography — each with its **own** one-sentence blurb (the
  source repeats a single lorem sentence four times; that duplication is not
  copied)
- **And** at ≤767 px the timeline flattens to a single left-aligned column
  (rule at `left:0`, cards `width:100%; padding:0 0 0 30px; margin:0 0 30px`,
  both sides `text-align:left; float:none`) with the dots on the left edge, and
  an `<ol>`/list semantics keeps the sequence meaningful for screen readers

### Feature: Ceremony CTA band (animated underline link)

#### Scenario: Photo band with white heading and an animated "Learn more"

- **Given** the page renders
- **When** the CTA band is inspected
- **Then** it is a photo band with the app's own placeholder
  (`picsum.photos/seed/aisle-ceremony/1600/600`), a `rgba(0,0,0,.3)` scrim,
  a white `Playball` heading with a white star ornament and a white supporting
  paragraph
- **And** a `Learn more` link renders at 0.9 em (14.4 px) white,
  `padding-bottom:5px`, `position:relative`, with **two 2 px `#E45F74` bars** —
  a base bar and a second bar that starts at `translateX(-130%)` and slides in
  from the left on hover/focus, so the underline animates across the label
- **And** the link is a real anchor/`<button>` with a visible focus style, the
  animation is skipped under `prefers-reduced-motion` and the label is the app's
  own (uppercase treatment and wording may differ from the source, but the
  shape — small caps label over a rose underline on a photo band — is kept)

### Feature: Gallery (six tiles with a lightbox)

#### Scenario: Six photo tiles in a responsive grid

- **Given** the page renders
- **When** the gallery is inspected
- **Then** it is a white `.section` with an own script title and rose star
  ornament, and a grid of exactly **six** tiles — 3 across at ≥768 px and 2
  across at ≥576 px (`col-md-4 col-sm-6`), each tile a `600×400` app-owned
  placeholder (`picsum.photos/seed/aisle-gallery-<n>/600/400`) with lazy loading
  below the first tile and `decoding="async"`
- **And** each tile is wrapped in a single interactive control (a `<button>` or
  a link with an accessible name) that opens the photo in an **accessible
  lightbox**: a `rgba(0,0,0,.8)` overlay (the reference's `#flavorOverlay`),
  `Escape` closes it, focus is trapped while open and returns to the tile
  afterwards, and `←`/`→` move between the six photos
- **And** below the grid sits a `View all gallery` action styled as the
  reference's second button (`226×46`, transparent fill, `1px solid #E45F74`,
  `1px` radius, `letter-spacing:2px`, `#333` label filling `#E45F74` with white
  text on hover), with `margin-top:30px` (10 px ≤767 px)

### Feature: Contact block (50/50 split with a map)

#### Scenario: Contact copy sits beside a static map placeholder

- **Given** the page reaches the contact block
- **When** it is inspected
- **Then** the band carries the reference's heavy shadow
  (`1px 10px 40px rgba(0,0,0,.4)`) and splits 50/50: the left half is a
  `.section`-padded column with an own `Playball` title (2.5 em / 32 px, `#333`
  — the source says "Contact Us"), a date line, an invitation line, a **2 em
  (48 px) `#E45F74` telephone link** (real `tel:` href, keyboard focusable) and
  a venue address paragraph
- **And** the right half is a map panel that renders the app's **own static
  placeholder** (an illustrated/styled map still plus the address in text) —
  the reference's `maps.googleapis.com` script, its API key and any third-party
  embed are **never** used, and the panel has a meaningful accessible label
- **And** at ≤767 px the halves stack (`width:100%`, `float:none!important`) with
  the map becoming a 400 px-tall full-width block, and the layout has no
  horizontal overflow at 320 px

### Feature: Footer (newsletter pill with a circular submit)

#### Scenario: Patterned footer with newsletter, socials, links and copyright

- **Given** the page reaches the footer
- **When** it is inspected
- **Then** it is white with `padding-top:70px` and the same faint
  concentric-circle ornament behind its content at ≈80 % opacity
  (`z-index:-1`, own pattern), holding a centred dark script wordmark (the app's
  own, not the source's `logo-black.png`)
- **And** a newsletter block renders an own `h4` at 1.5 em (24 px, Bitter,
  `#333`), a supporting line, and a form whose field is a **400×55 px pill**
  (`border-radius:100px`, `border:0`, `padding:0 70px 0 25px`,
  `box-shadow:1px 10px 30px rgba(0,0,0,.2)` deepening to
  `1px 15px 30px rgba(0,0,0,.3)` on focus; 90 % width ≤767 px) with an inline
  `<label>`, a real `type="email"` input and a **55×55 px circular submit**
  (`border-radius:100px; background:#E55D73`, white glyph) that inverts to a
  black fill with a `#E55D73` glyph on hover/focus
- **And** submitting validates locally (empty/invalid input shows an inline,
  `aria-describedby`-linked error; a valid address shows a polite confirmation),
  never navigates away, and reuses no source action, Mailchimp or analytics URL
- **And** **five** social controls (heart, twitter, instagram, pinterest,
  tripadvisor kinds — `lucide-react` icons with `aria-label`s) and **five**
  tracked-capital footer links (home, our story, the wedding, gallery, contact;
  16 px, 10/7 px padding ≤767 px) render as in-page anchors, followed by a
  copyright line (1.05 em / 16.8 px `#555`) with a **live year** and a link to
  `https://www.componentdock.com/` ("Component Dock") replacing the source's
  Colorlib credit

### Feature: The two invented destinations (RSVP band and "The Wedding" band)

#### Scenario: The RSVP destination follows the source's RSVP page

- **Given** the app's nav carries an RSVP entry (the source's menu links
  `02-rsvp.html`, whose band the landing page does not carry)
- **When** the RSVP band renders
- **Then** it follows that page's structure — an RSVP kicker over a large
  "Be Our Guest"-class invitation heading, then a 50/50 split whose left column
  repeats the invitation/contact block (date line, invitation line, two phone
  links and an e-mail link, all the app's own) and whose right column is the
  RSVP form with **Full Name**, **Email**, a **Guest** count select and an
  **Event** select
- **And** the form ships a real submit control (the source's has none), gives
  each select a **distinct** `name`, repeats no option `value`, validates
  locally, never posts to a third party, is fully labelled for assistive
  technology, and copies none of the source's contact data, its duplicated
  `name="option"` selects or its `TITLE` placeholder

#### Scenario: The "The Wedding" destination follows the source's regular page

- **Given** the app's nav carries a "The Wedding" entry (the source's menu links
  `03-regular-page.html`, whose band the landing page does not carry)
- **When** that band renders
- **Then** it follows the page's shell — a titled text band with a lead story
  line, a two-column note pair and a credited pull quote — in the app's own copy
  and with the app's own images
- **And** the source's misspelled author credit and its placeholder title are
  not reproduced

## Fidelity rules

- Match section structure and order 1:1 (header → hero → story → countdown →
  wedding details → ceremony CTA → gallery → contact split → footer) and keep
  the same **two photo bands, one patterned white story band, one white
  timeline, one 50/50 contact split** rhythm.
- Match every token in the table above: rose `#E45F74` as the single brand
  accent, near-black `#333`/`#555` text, light `#aaa`/`#ccc` rules, `Playball`
  for display type and `Bitter` for body type, `1px` button radii against
  `100px` pills and circles, and the reference's shadow set.
- Never copy assets: no source photos, no `Background_Circle.png`, no
  `logo-white.png`/`logo-black.png`, no `font-icon.css` icon font, no bundled
  CSS/JS file. Use `picsum.photos` placeholders seeded per template, Google
  Fonts via `<link>`, `lucide-react` icons and an own SVG/CSS ring pattern.
- Never copy the source's copy verbatim (headline, names, lorem paragraph,
  address, phone) — paraphrase, and correct its typos.
- The app must not reference ColorLib anywhere (no `colorlib.com` strings in
  `apps/aisle`), must not load the source's analytics or map key, and its
  footer must link `https://www.componentdock.com/`.
- Keep `public/CNAME` = `aisle.free.componentdock.com` and `homepage` =
  `https://aisle.free.componentdock.com`, register `injectUiSource()` in
  `vite.config.ts`, reuse `packages/ui` (`Card`, `Button`, `ButtonLink`, `cn`)
  before writing new primitives, and keep 100 % coverage
  (lines/functions/branches/statements).

## Verification checklist

- [ ] `openspec validate template-aisle --type spec` reports "Specification
      'template-aisle' is valid" (verified during prep, 2026-10-12)
- [ ] `apps/aisle` exists, package name `@free-react-templates/aisle`, no
      `colorlib`/`preview.colorlib.com` string anywhere in `apps/aisle`, no
      `maps.googleapis.com`, no `gtag`, no `UA-` id
- [ ] `public/CNAME` = `aisle.free.componentdock.com`, `homepage` =
      `https://aisle.free.componentdock.com`, footer links
      `https://www.componentdock.com/`
- [ ] `vite.config.ts` registers `injectUiSource()`; shared UI comes from
      `packages/ui` (`Card`/`Button`/`ButtonLink`/`cn`) before new primitives
- [ ] Fonts loaded via `<link>`: `Playball:wght@400` + `Bitter:wght@400;500`
      (no source font files, no icon font)
- [ ] Document head is the app's own and excludes the preview host's layer
      (no `noindex`/`nofollow`, no `robots` meta, no `dns-prefetch`, no
      `cdnjs`): the reference's served head opens with the host's
      `<meta name="robots" content="noindex, nofollow">` +
      `<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">` pair,
      which is not theme markup
- [ ] Header floats over the hero (`position:absolute; top:20px`,
      `rgba(255,255,255,.2)` hairline), five correct labels, dropdown with the
      nested second level, `#E45F74` hover border, and the ≤767 px in-flow
      `#333` panel with a labelled toggle
- [ ] Hero is `100vh` with an own photo and a `rgba(0,0,0,.3)` scrim; caption
      stacks glyph 2.5 em → date 1.2 em → script line 2.5 em → names 5 em with a
      rose heart at `.8em`, all Playball/Bitter as specified
- [ ] Story band renders inside `100px 0 70px` padding with the own
      concentric-ring ornament at ≈80 % behind the content, a 48 px Playball
      title, the 160 px ornament (two 60 px `#aaa` rules + rose star) and the
      narrow Bitter paragraph
- [ ] Countdown band shows exactly four 120 px outlined circles with a live
      future countdown, accessible unit names, and a stable `00` state
- [ ] Wedding details render four cards straddling a 1 px `#ccc` spine with
      18 px dots, 56 px rose icons, alternating sides and the source's
      negative-margin hook; they flatten to a left-aligned single column at
      ≤767 px
- [ ] Ceremony band shows the white Playball heading on an own photo band with
      the two-bar animated `#E45F74` underline on the small-caps link
- [ ] Gallery shows six 600×400 tiles (3 → 2 columns) with an accessible
      lightbox (overlay `rgba(0,0,0,.8)`, `Escape`, focus trap + restore,
      arrow-key navigation) and the rose-outlined "View all gallery" button
- [ ] Contact block has the `1px 10px 40px rgba(0,0,0,.4)` shadow, a 50/50
      split, a real `tel:` link at 2 em rose, and a static map placeholder with
      **no** third-party script; it stacks at ≤767 px with a 400 px map block
- [ ] Footer shows the ring ornament, the 400×55 pill field with the focus
      shadow, the 55×55 `#E55D73` circular submit inverting to black, five
      social controls, five tracked-capital links, a live-year copyright and the
      Component Dock attribution
- [ ] Newsletter and any interactive form validate locally, show inline errors,
      never navigate, and reuse no source endpoint
- [ ] Reduced-motion pass: the underline fill, dropdown reveal and any entrance
      motion are skipped; the countdown keeps updating without motion
- [ ] Responsive pass at ~1440, 992, 767, 479 and 320 px: `h1`–`h5` follow the
      source ladder, `.section` padding drops to `50px 0 20px`, `p` line-height
      becomes 1.4, and there is no horizontal overflow
- [ ] No `href="#!"` (or any other unresolvable named anchor) anywhere: the source's
      two `.drop-down` togglers are jQuery's dead `#!` and the source page's whole id
      set is `clock` · `main-menu` · `map`, so all five nav destinations are ours and
      resolve to real section ids (verified against the live DOM, 2026-10-12)
- [ ] Accessibility: semantic landmarks, one `h1`, ordered headings, focus
      rings on every control, `aria-expanded`/`aria-controls` on the nav toggle,
      labelled form controls, decorative glyphs/patterns `aria-hidden`
- [ ] `npm run verify:app aisle` green (typecheck + lint + knip + fallow + 100 %
      coverage tests + build); `scripts/verify-app.sh` output pasted in the PR
- [ ] The two invented destinations are built from the source's own inner pages:
      `02-rsvp.html` (9,789 B — the RSVP kicker, the "Be Our Guest" heading and
      the contact split with the "Are you getting?" / "RSVP HERE!" form) and
      `03-regular-page.html` (10,860 B — the "Regular Page" text band with the
      trip/flowers story blocks, the note pair and the pulled quote) — with the
      app's own copy, contact data and images, a real submit control, distinct
      select `name`s and no repeated option `value` (the source ships none of
      those)
- [ ] TEMPLATES.md line 3107 flips to `[x]` **with** the surge URL only after the
      implementer merges (the prep stream never marks it)

## Implementation notes (implementer, 2026-10-13)

Built on `feat/template-aisle` exactly per the requirements above; the deltas below are deliberate
and each was measured on the built page (`apps/aisle/dist`, served on a local port at the harness's
780×437 viewport and at an emulated 375×812).

- **The timeline spine only exists because the track was given `flow-root`.** The reference writes
  `.wedding-details:after{top:0;bottom:0;…}` over a block whose four children are all floats, so the
  block itself collapses to zero height and the rule would paint 0px tall. `detailsTrackClass`
  therefore carries `flow-root`: at 780px the track measures 570×891 and the spine 1×891, i.e. the
  rule spans the cards (first card top 1552, last 2220) instead of vanishing.
- **The header measures the reference's 66px** because the wordmark is a 40px-tall white Playball
  block (the reference's `.logo` is a 40px image with `5px 0 20px` margins); nav rows stay 50px tall,
  `padding:0 15px`, `border:2px solid transparent`, 2px radius, rose on the active row.
- **The countdown runs, it does not sit at 00.** The reference's `jquery.countdown` targets
  2017-09-23, so its four circles have read `00` since the day it shipped; the recreation counts to
  the app's own 12 September 2027 and rests at `00` only once that hour has passed. `role="timer"`
  with a label replaces the plugin's bare markup.
- **The venue panel is static, not a keyed embed.** The reference loads
  `maps.googleapis.com/maps/api/js?key=AIzaSy…` and rendered an empty shell (`#map` held two empty
  divs, zero iframes); the recreation draws its own map and prints the address beside the pin. No
  third-party script, no API key, no analytics.
- **The nav is ours because the reference's is dead.** Every one of its 22 hrefs is a `#`, a `#!`
  (its two `.drop-down` togglers) or a link to another file of the theme, and its whole id set is
  `clock` · `main-menu` · `map` — so it has no in-page anchor at all. The five destinations resolve
  to real section ids, and its three capitalisation slips ("SETPEMBER", "THER WEDDING", "GELLERY")
  are not reproduced.
- **The lightbox holds focus and hands it back.** The dialog takes focus on open and returns it to
  the tile that opened it when it unmounts (`Escape`, the close control, or the tile itself).
  A Tab-cycling trap was deliberately **not** added: the reference's jQuery Fluidbox has no trap at
  all, and the dialog owns every control on the page while it is open.
- **Small measured deltas.** The "View all gallery" button computes 196×48 against the reference's
  226×46 (its label is set in the design's own tracked capitals, ours in the app's wording), the
  mobile toggle is 50×50 against 50×60, and Tailwind's `max-md:` (`width < 768px`) is exclusive
  where the reference's media queries are inclusive — equivalent at the whole-pixel widths the
  design was drawn against.
- **Fonts.** `Playball:wght@400` + `Bitter:wght@400;500` arrive through a Google Fonts `<link>` in
  `index.html`; the reference's proxied `@font-face` rules and its icon font are not copied.
- Verification: `bash scripts/verify-app.sh aisle` → typecheck, oxlint, **100% coverage**
  (310/310 statements, 76/76 branches, 67/67 functions, 307/307 lines) and a clean Vite build;
  `npx openspec validate template-aisle --type spec` → valid; `npx knip --workspace apps/aisle` →
  silent; `grep -c inline-flex apps/aisle/dist/assets/*.css` → 1 (the `injectUiSource()` path is
  live). 62 tests in 13 files.
