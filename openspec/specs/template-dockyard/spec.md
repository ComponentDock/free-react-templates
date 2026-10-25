# Template: Dockyard (Transportation & Logistics)

## Purpose

Dockyard is a transportation & logistics landing page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Depot"** design, built under a DIFFERENT name (**Dockyard** — one
lowercase word: "dock" + "yard", the two halves of a freight terminal; single
word, kebab-case-safe, no collision with `apps/`, `openspec/specs/template-*`,
`docs/templates/`, any bold name in `TEMPLATES.md`, or any substring in the
repository: `git grep -il dockyard origin/main` = **0 hits**;
`grep -ci dockyard TEMPLATES.md` = **0**; and the name is not a ColorLib slug —
`colorlib.com/wp/template/dockyard/`,
`preview.colorlib.com/theme/dockyard/` and
`preview.colorlib.com/theme/bootstrap/dockyard/` all return **404**) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict).

- **Source slug**: `depot`
- **ColorLib page**: https://colorlib.com/wp/template/depot/
- **Live preview**: https://preview.colorlib.com/theme/depot/
  (HTTP 200, **37,790 B** HTML, sha256
  `ec896bf7fc77e582f92bfcf61590a6ae59cdffdae6a80182240515c834a27b5f`; theme
  sheet `css/style.css` **27,785 B**, sha256
  `645001bd51819d60ab56bd47131fba2a35945eb0ba7e98953028b1ed8b9f1298`; page
  script `js/main.js` **7,339 B**, sha256
  `c877e05bdd551ad4fe4d9ec0503aafc35e998c26910503208ccd7f9d98ee085c`; the
  `<title>` is a real string, **"Depot —Website Template by Colorlib"**, with a
  missing space before the dash. Bootstrap 4 grid + jQuery 3.3.1 + Popper +
  Owl Carousel + Fancybox + jquery.sticky + waypoints + animateNumber + AOS +
  Icomoon + Flaticon. The slug-only path IS the live design (no alias, no
  `theme/bootstrap/` twin — that path 404s). `/downloads/free/depot.zip`
  returns **404** (a 9-byte `text/plain` body), so the live preview is the only
  DOM/CSS reference and **there is no archive to cross-check** — every token
  below is measured from the live render.)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/depot-free-template.jpg
  (served **AVIF** 1200×946, 158,853 B despite the `.jpg` name; decoded to PNG
  and inspected — top fold only: utility bar, white navbar, the aerial
  container-ship hero with its white tracking form, and the top of the three
  photo cards)
- **Package**: `@free-react-templates/dockyard`
- **Deploy target**: `dockyard.free.componentdock.com`

### Why this row needs a fresh build (prep-stream context)

`grep -c 'wp/template/depot/' TEMPLATES.md` = **3** (lines **974**, **2312**
and **2959**, all in the `## Business (365)` section). All three rows are
currently marked `[x]` and credit the **`depot`** app, but
`openspec/specs/template-depot/spec.md` names a DIFFERENT ColorLib design as its
source (a warehousing/storage theme), not this one — `depot` is therefore a
false `[x]` (bucket 2, APP-WRONG-DESIGN, in `docs/row-multiplicity.md`; measured
exclusive-copy evidence `row-excl / spec-excl` = **0 / 37**, i.e. the shipped
app's copy matches its own named design 37-to-1 and shares **zero** exclusive
phrases with this design). No spec in `openspec/specs/` names this slug today
(`grep -rl 'wp/template/depot/' openspec/specs --include=spec.md` = 0).

The prep stream writes documentation only: the implementer re-opens ALL THREE
rows `[x]` → `[ ]` on its `feat/template-dockyard` branch before building, then
marks them `[x]` with `https://dockyard.free.componentdock.com` after merge.
**Do not touch `apps/depot`** — it keeps recreating the design its own spec
names.

### Why the name is not the source name

"Depot" is the ColorLib wordmark: it is the navbar logo text, the "Why Depot"
section heading, the footer brand, and the `<title>` — and it is ALSO the name
of an existing shipped app in this monorepo, so it cannot be reused on either
count (AGENTS.md rule 5). The recreation renames the brand to **Dockyard**
everywhere: wordmark, section heading, footer brand, copyright and the
attribution line. The word "depot" SHALL NOT appear in any file under
`apps/dockyard` (`git grep -i depot apps/dockyard` = 0 hits).

## Design reference (replication findings)

- **Original:** ColorLib "Depot" — a **transportation & logistics** single-page
  corporate site (not a multi-page theme; see the inner-page probe below).
  Signature look: a **44px pale-grey utility bar** (`#eee`, 1px `#e9ecef`
  bottom rule) carrying an e-mail, a phone number and two social links; below
  it a **plain white 67px navbar** with a **blue 32px/900 uppercase wordmark**
  and seven items whose current page is painted **`#007bff`**; then a
  **1,000px full-bleed aerial container-ship photograph** washed with a
  **15%-opacity 45° gradient `#377aff → #00d9ff`** and, centred in a 6-of-12
  column, a **40px uppercase white `h1`**, a white subline and a **tracking
  form** (a 400×55 white input with placeholder "Your tracking number" beside a
  130×55 `#007bff` "Track Now" button, both 4px-radius). Package forwarding icon cards, a
  six-icon services grid, a video figure that overlaps its band, four
  **animateNumber counters** (19+ / 2,332+ / 231+ / 827+), three bordered staff
  cards, three white pricing cards (the middle CTA blue, the outer two grey),
  an eight-question FAQ in two columns, a **split "Why" band** (text left,
  photo right, no gutters), a three-up testimonial carousel of **white Georgia
  italic quote cards**, two article cards, a contact form band, and a
  **`#333333` four-column footer**. Bands alternate **white → `#f6f5f5` →
  white**, and every section heading is the same device: a **48px/500
  `#007bff` lowercase-cut `h2`** over a two-line grey blurb in a 7-of-12
  measure.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/depot/` — the
  page has **no `<section>` elements at all**; it is built from
  `div.site-wrap` → `div.top-bar` → `header.site-navbar` →
  `div.ftco-blocks-cover-1` (which wraps BOTH the hero and the three photo
  cards) → **11 `div.site-section` bands** → `footer.site-footer`.
  **13 `<img>`**, **1 `h1`**, **15 `h2`**, **27 `h3`**, 48 anchors, one
  `<form>` in the hero, one in the contact band, one in the footer.
  Root-level class census: `.site-section` appears 12 times (the nested
  `#team-section` wraps `#pricing-section` and `#faq-section`, which is why the
  `#team-section` box measures 5,298px tall).
- **Anchor census (measured on the live DOM):** **48** anchors —
  **31 dead `href="#"`**, **6 `single.html`** (two article cards × image,
  title and "Read More"), **8 in-page anchors** (`#home-section`,
  `#services-section`, `#about-section` ×2, `#why-us-section`,
  `#testimonials-section`, `#blog-section`, `#contact-section`),
  **1 `index.html`** (the wordmark; byte-identical 37,790 B no-op link),
  **1** `https://vimeo.com/45830194` (the Fancybox video figure) and **1**
  `https://colorlib.com` credit in the footer. Nothing 404s.
- **Inner-page probe (all HTTP 200/404 measured for this spec):** only
  `single.html` is live (**24,178 B**, one article body). `about.html`,
  `services.html`, `why-us.html`, `testimonials.html`, `blog.html`,
  `contact.html` and `elements.html` all return **404** (9-byte bodies). So
  this is genuinely a **single-page** design: every nav item is an in-page
  anchor, and `single.html` exists only so the two article cards have a
  destination. Nothing is invented away by the recreation: the nav stays
  in-page.
- **Section order and measured geometry** (1440×1000, all lazy images loaded,
  `document.documentElement.scrollHeight` **11,010px**; band tops/heights drift
  by ±150px between loads because the services carousel and the animated
  counters reflow, so treat the numbers as ±2%):

  | # | band (source class / id) | top | height | fill |
  |---|---|---|---|---|
  | 1 | `div.top-bar` | 0 | **44** | `#eee`, 1px `#e9ecef` bottom |
  | 2 | `header.site-navbar` (`.sticky-wrapper` 67) | 44 | **67** (99 box) | white |
  | 3 | `div.ftco-cover-1.overlay#home-section` | 111 | **1,000** | photo + 15% gradient wash |
  | 4 | `div.site-section.ftco-service-image-1.pb-5` | 1,111 | **581** | white, 3 photo cards |
  | 5 | `#services-section` (`site-section bg-light`) | 1,693 | **1,042** | `#f6f5f5` |
  | 6 | `#about-section` (`site-section`) — heading only | 2,735 | **408** | white |
  | 7 | `#about-section` (`site-section bg-light`, DUPLICATE id) | 3,143 | **1,018** | `#f6f5f5` |
  | 8 | `#team-section` (`site-section`, wraps 9 and 10) | 4,160 | **824** | white |
  | 9 | `#pricing-section` (`site-section bg-light`) | 4,984 | **1,017** | `#f6f5f5` |
  | 10 | `#faq-section` (`site-section`) | 6,001 | **939** | white |
  | 11 | `#why-us-section` (`block__73694 site-section border-top`) | 6,940 | **743** | white, photo right |
  | 12 | `#testimonials-section` (`site-section bg-light block-13`) | 7,683 | **867** | `#f6f5f5` |
  | 13 | `#blog-section` (`site-section py-5`) | 8,550 | **797** | white |
  | 14 | `#contact-section` (`site-section bg-light`) | 9,459 | **872** | `#f6f5f5` |
  | 15 | `footer.site-footer` | 10,330 | **679** | `#333333` |

  Mobile (390×844, everything loaded): `scrollHeight` **12,236**,
  `scrollWidth` **436** against a 390 `clientWidth` (see defect 6), hero
  **844px** (`100vh`, `min-height: 600px`), `h1` still **40px**.
- **Band geometry, measured (1440):**
  - **Utility bar**: 44px, `padding: .5rem 0`, `#eee`, links `#666666` 16px,
    one `.container` row; at ≤767px the labels collapse to icons only
    (`d-none d-md-inline-block`).
  - **Navbar**: `.container` **1,140px** wide, row 67px tall with
    `padding: 1rem`; wordmark **32px/900 uppercase** (`line-height: 0`,
    measured 105×37, `#000` base — `#007bff` when `.is-sticky`); seven items
    **16px `#000`**, `padding: 20px 0`, `margin: 0 15px`, active/hover
    **`#007bff`**; **no CTA button**. On scroll jQuery.sticky fixes it:
    `position: fixed`, wrapper gains `.is-sticky`, the bar keeps `#fff` and
    gains `box-shadow: 4px 0 20px -5px rgba(0,0,0,.2)`, height shrinks
    **99 → 67** via `.shrink`.
  - **Hero**: 6-of-12 column (570px) centred; `h1` **40px/500, `line-height:
    1.2`, white, uppercase** (540×96, two lines), `p` 16px/1.7 white,
    `margin-bottom: 3rem`; form = input **400×55** + submit **130×55** with
    `margin-right: 10px` on the input, both `border-radius: 4px`; the submit
    is a Bootstrap `.btn.btn-primary.text-white.px-4` label "Track Now".
    The background image is set inline (`images/depot_hero_1.jpg`,
    1,800×1,200 aerial of a container ship on open water); `.overlay::before`
    is `opacity: .15` with `linear-gradient(45deg, #377aff, #00d9ff)`.
  - **Photo trio**: three 350×381 `col-lg-4` cards, each an image
    (`images/depot_img_{1,2,3}.jpg`, 800×500) then a centred **22.4px/500
    UPPERCASE `#000` `h3`** then a 16px `#999999` blurb; on hover the image
    lifts `top: -5px` over `.3s`.
  - **Services**: heading block in a 7-of-12 centred measure
    (`h2` **48px/500 `#007bff`** — `.block-heading-1 h2 { font-size: 3rem;
    text-transform: none; color: #007bff }` — plus a 16px `#939393` blurb);
    then six `.block__35630.text-center` cards **350×282** laid out as a
    **3×2 grid at 1440** (measured tops 1,999 and 2,311 — two rows of three),
    `padding: 30px`, `border-radius: 4px`, transparent until hover, each with
    a **3rem `#007bff` Flaticon glyph** (ferry / airplane / package / truck /
    warehouse / delivery), a **22.4px UPPERCASE `#000` `h3`** and a 16px
    `#939393` blurb. Hover: `background: #fff`, `border-color: #007bff`.
    The markup wraps them in `.owl-carousel.owl-all` (owl `items: 1/1/3`), so
    the live page also paints **owl dots** under the grid.
  - **About (heading band)**: 408px, centred `h2` "About Us" + blurb only.
  - **About (video + counters)**: `padding: 5em 0`; a **1,110×724** video
    figure (`images/depot_delivery_1.jpg`, 1,900×1,239) pulled **-10rem**
    upward into the previous band by `.block-img-video-1-wrap`, with an
    **80px white circular play disc** (90px on hover) centred on it and a
    Fancybox link to Vimeo; below it four `.block-counter-1` (255×118) —
    **64px/400 `#007bff`** number with `padding-bottom: 20px` and a
    **50×3 `rgba(52,58,64,.3)` rule** under it, then a **14px `#939393`
    caption** with `letter-spacing: .05em`; values `19`, `2332`, `231`, `827`,
    each suffixed `+`.
  - **Staff**: 3 cards in one row, **350×439**, white, `1px solid #e9ecef`,
    `border-radius` (`.rounded`), `padding: 30px`; avatar is a
    **130px-max circle** (`images/person_{1,2,3}.jpg`, 400×400); name
    **`h3` 20px `#000`**, role **12px `#b8b8b8` UPPERCASE `letter-spacing:
    .1em`**, a 16px blob, then three **30×30 `#007bff` square social buttons**
    (`border-radius: 4px`, `.border-w-2` = 2px border).
  - **Pricing**: 3 cards **350×561**, white, `padding: 30px`, no border and no
    shadow; title **`h3` 28px UPPERCASE `#000`**, price line centred with
    `$47 / $200 / $750` in a **48px `#007bff`** span and `/ year` in
    **`#cccccc`**; a 5-item `ul.ul-check.success` (tick glyph = Icomoon
    `\e5ca` at 20px, colour **`#71bc42`**, `padding-left: 35px`,
    `margin-bottom: 20px` per row); CTA **111×42**, `.btn-md` (`padding: 8px
    20px`, `border-radius: 4px`), label "Buy Now" — card 1 and 3
    `.btn-secondary` (**`#6c757d`**, hover `#5a6268`), card 2
    `.btn-primary` (**`#007bff`**, hover `#0069d9`).
  - **FAQ**: 8 question blocks in two `col-lg-6` columns (4 + 4); `h3` is
    **20px `#000`** with `text-transform: none !important`, `margin-bottom:
    1.5rem`, body 16px `#939393`; each block `margin-bottom: 3rem`,
    `data-aos="fade-up" data-aos-delay="100"`.
  - **Why band**: full-width 2-column row with **no gutters** — a
    `col-lg-6` photo (`images/depot_delivery_1.jpg`, 555×518, `background-size:
    cover`) on the RIGHT (`order-lg-2`) and a `col-lg-5` text column on the
    left with `padding: 3rem`: `h2` **32px UPPERCASE `#000`** ("Why Depot"),
    a 16px blurb, then five `ul.ul-check.primary` items (tick **`#007bff`**).
  - **Testimonials**: 4 quotes, **3 visible at ≥1200** (2 at 600–999, 1
    below), owl `loop: true` + `autoplay: true` (so the live DOM carries
    12 cloned slides); each card is **370px wide** with
    `blockquote` = **white, `padding: 30px`, `font-style: italic`, 18px,
    `#000`, Georgia serif** and `figure img` a **60px circle**; the name is an
    **18px UPPERCASE `#000` `h3`**. Owl dots: 7px, `#cccccc`, active
    `#007bff`, `bottom: -30px`; `.owl-nav` is `display: none`.
  - **Articles**: 2 cards in `col-lg-6`, each **540×539**; thumbnail
    **520×325** (`border-radius: 4px`) on top (the `d-block` on the anchor
    beats the sheet's `flex: 0 0 150px`, so it renders full-width), then a
    grey date line, an **`h2.h4` 24px UPPERCASE `#939393`** title, a 16px
    blurb and a `#007bff` "Read More".
  - **Contact**: centred `h2`, then a `col-lg-8` form: two `col-md-6` text
    inputs, one `col-md-12` e-mail input, a `textarea` (`rows=10`, measured
    254px) and a full-width `.btn.btn-block.btn-primary` "Send Message"
    (`.py-3 .px-5`); all fields **55px tall, `border: 1px solid #e6e6e6`,
    `border-radius: 4px`, `padding: 6px 20px`, focus border `#007bff`**.
  - **Footer**: `#333333`, `padding: 8em 0` (128px), **679px** tall; four
    columns — "About Us" (7-of-12 inside a 6-of-12 column) + "Features"
    (5 dead links) + "Subscribe to Newsletter" (transparent input with a
    `#007bff` "Subscribe" button, `.input-group`) + "Follow Us" (4 social
    glyphs); headings **16px UPPERCASE white**, body/link
    `rgba(255,255,255,.5)` → white on hover; then a `border-top
    rgba(255,255,255,.1)` rule and a **centred copyright line** whose year is
    injected by `document.write`.
- **Interactions the recreation must reproduce:** AOS scroll reveals
  (`fade`, `fade-up`, `fade-left`, `fade-right`, delays 0–300ms) —
  the live page renders **empty bands** in a naive full-page screenshot
  because `aos-init` elements keep `opacity: 0` until scrolled into view;
  jQuery.sticky header; owl carousels (services, staff, testimonials);
  animateNumber counters with a comma separator fired by a waypoint on
  `#about-section`; Fancybox video lightbox; smooth scroll on the footer's
  first social link.
- **Copy:** the source is **lorem-ipsum placeholder text in a logistics
  voice** ("Transportations & Logistics", "Truck Insurance", "Plane
  Transportation", "Sea & Ear Freight" [sic], "Sea Freight", "Air Freight",
  "Package Forwarding", "Trucking", "Warehouse", "Delivery", "Why Depot",
  "Cargo express", "Secure Services", "Secure Warehouseing" [sic], "Cost
  savings", "Proven by great companies", "Happy Clients", "Articles", "Knowing
  the Difference Is Key to Effective Logistics", "Contact Us"). Keep the same
  _kind_ of content per block (headline + subline + form, three photo cards,
  six service cards, video + four counters, three staff, three tiers,
  eight Q&A, five checklist items, four quotes, two posts, contact form, four
  footer columns) and the same sentence skeleton; drop the typos ("Sea & Ear
  Freight" → "Sea & Air Freight", "Warehouseing" → "Warehousing") and rename
  the brand to **Dockyard** everywhere.

### Source defects and documented deltas (do not copy these)

1. **The sheet names a font that is never delivered.** `body`, every heading,
   every form control and the nav all declare `font-family: "Raleway", …`, but
   the page loads **no webfont at all** (no `fonts.googleapis.com` link in
   `<head>`, no `@import` in `css/style.css`) and the runtime confirms it:
   `[...document.fonts]` reports **six `Raleway: unloaded` faces**. The live
   page therefore renders in Helvetica/Arial. The recreation SHALL load
   **Raleway 400/500/700/900** from Google Fonts (verified HTTP 200 for
   `css2?family=Raleway:wght@400;500;700;900&display=swap` and for the plain
   `css2?family=Raleway` URL) — that is the design's intent, and the spec's
   type tokens below assume the real face.
2. **Two sections share `id="about-section"`.** The heading-only band
   (`div.site-section`, 408px) and the video/counters band
   (`div.site-section.bg-light`, 1,018px) both carry it, which is invalid HTML
   and makes the nav's "About Us" anchor land on the heading band only. The
   recreation SHALL have **one** `#about` target that starts at the heading and
   contains the video and the counters.
3. **The contact form has two "First name" fields.** Measured placeholders:
   `First name`, `First name`, `Email address`, `Write your message.` — the
   second input is meant to be a surname. Ship **First name / Last name /
   Email address / Message**.
4. **`.ul-check.remove` has no CSS rule.** The three "excluded" pricing
   features carry `class="remove"` in the markup, but `css/style.css` defines
   only `.ul-check`, `:before`, `.white`, `.success` and `.primary` — so the
   live render paints **five identical green ticks** (measured pseudo colour
   `rgb(113,188,66)` on both included and `.remove` rows, `text-decoration:
   none`). Render the intent: 2 included features with a `#71bc42` tick,
   3 excluded features **muted (`#b8b8b8`) with a strikethrough** and a
   neutral glyph.
5. **Two of the eight FAQ headings are truncated lorem.** "Lorem ipsum dolor
   sit" and "consequuntur incidunt?" are sentence fragments left over from
   copy-paste. Write eight complete logistics questions.
6. **The mobile drawer inflates the document width.** The off-canvas
   `.site-mobile-menu` (300px wide, parked off-screen right) is the only
   element past the viewport — measured
   `document.documentElement.scrollWidth` **436** (once 475) against
   `clientWidth` **390**, with no content overflow otherwise. The recreation
   SHALL keep `scrollWidth === clientWidth` at 390px (translate the drawer with
   `transform`, keep `overflow-x: hidden` on the wrapper).
7. **The testimonial carousel reuses one avatar for two people.** `person_1.jpg`
   is the portrait of both "Ricky Fisher" and "Mellisa Griffin", and
   `loop: true` clones all four slides (12 in the DOM). Ship **four distinct
   people with four distinct placeholder portraits**.
8. **The two article cards are indistinguishable.** Same image pair
   (`depot_img_1`, `depot_img_2` — the same files as the photo trio), same
   date `Apr 19, 2019`, same title, same blurb. Give the recreation two
   different posts (title, date, excerpt, image).
9. **The services band is a carousel only in markup.** `.owl-all` renders as a
   static **3×2 grid** at 1440 (measured two rows, tops 1,999 / 2,311) and adds
   decorative owl dots that do not page anything useful. Build a real
   responsive **3-column grid** (2-up at `md`, 1-up at `sm`) and drop the dots.
10. **The hero form is inert.** `action="#"`, no `name` attributes, no
    validation, `<input type="submit">`. Implement a controlled form
    (tracking number → validated submit → inline "not found" result stub) with
    a real `label` (visually hidden) and `aria-live` on the result.
11. **Post titles are marked up as `h2`.** Each article card uses
    `<h2 class="h4">` inside a band whose heading is already an `h2`. Use `h3`
    for post titles so the outline descends.
12. **The footer credit is a ColorLib link injected by `document.write`.**
    The year comes from `document.write(new Date().getFullYear())` in the
    middle of the line. Render the year as a value, and replace the vendor
    credit with the mandatory **Component Dock** link
    (`https://www.componentdock.com/`).
13. **The hero's `h1` has no mobile size step.** The sheet scales `h2`
    (48px → 32px at ≤991) and the counter numbers, but `h1` stays **40px** at
    390px where it wraps to three lines in a 6-of-12 column. Give the
    recreation a 30–32px step at ≤575 so the headline plus the form fit a
    844px hero.

## Design tokens (from preview `css/style.css` + live computed styles)

- **Fonts:** **Raleway** only — `body` 16px/1.7 weight 400 `#939393`;
  headings `"Raleway", sans-serif` weight 500 with `text-transform: uppercase`
  at the element level (`h1`–`h5`), overridden to `none` for
  `.block-heading-1 h2`; nav 16px; wordmark 32px/900 uppercase. Loaded faces:
  400, 500, 700, 900 (see delta 1: the source ships **none**).
- **Brand blue (primary):** **`#007bff`** — 23 occurrences in the sheet: every
  section `h2`, the wordmark when sticky, the active nav item, the service
  icons and hover borders, the counter numbers, the price figures, the
  "Track Now" / "Subscribe" / "Send Message" buttons, the `.ul-check.primary`
  ticks, the pricing "Premium" CTA, the testimonial dots and the blog link.
- **Hero wash (signature gradient):** **`#377aff → #00d9ff`** at 45°, painted
  at **`opacity: .15`** over the hero photo (8 + 7 occurrences, all inside
  `.ftco-cover-1.overlay:before`).
- **Success green:** **`#71bc42`** — the `.ul-check.success` tick on all
  pricing lists.
- **Neutrals:** **`#f6f5f5`** (`.bg-light`, six bands), **`#eee`** (utility
  bar), **`#f8f9fa`** (mobile-menu row hover), **`#e9ecef`** (card/utility-bar
  rules), **`#e6e6e6`** (form-control border, `#666666` on hover/focus),
  **`#cccccc`** (price suffix, testimonial dots), **`#b8b8b8`** (staff role,
  ~muted copy), **`#999999`** (photo-trio blurbs), **`#939393`** (body copy,
  blog meta), **`#666666`** (utility-bar links), **`#333333`** (footer),
  **`#212529`** (default heading colour before the brand override),
  **`#000`** (service/staff/pricing headings, testimonial names, nav items).
- **Buttons:** Bootstrap 4 shapes — `border-radius: 4px`, `1px` border in the
  fill colour, `padding: 8px 20px` (`.btn-md`, measured **111×42**),
  `.btn-primary` `#007bff` → `#0069d9` hover, `.btn-secondary` `#6c757d` →
  `#5a6268` hover, 16px white label; the hero submit is
  `.btn.btn-primary.text-white.px-4` (**130×55**) and the contact submit is
  `.btn-block.py-3.px-5` (full width).
- **Cards:** services `padding: 30px`, `radius: 4px`, transparent → `#fff` +
  `#007bff` border on hover; staff `padding: 30px`, `1px #e9ecef`,
  `radius: 4px`; pricing `#fff`, `30px`, no border/shadow; testimonials
  `#fff` quote panel, `30px`; blog thumbnails `radius: 4px`.
- **Rules / dividers:** counter underline `50×3 rgba(52,58,64,.3)`; footer
  `border-top rgba(255,255,255,.1)`; utility bar `1px #e9ecef`; `.border-w-2`
  social buttons `2px` transparent border on `#007bff`.
- **Spacing rhythm:** `.site-section { padding: 5em 0 }` at ≥768 (`2.5em 0`
  below); footer `8em 0`; heading block `margin-bottom: 5em`; why-band photo
  column `padding: 3rem`; video figure pulled `-10rem` (`-6rem` ≤991).
- **Motion:** AOS fade/fade-up/fade-left/fade-right, 0–300ms delays; forum
  and card hovers `.15s–.3s ease-in-out`; sticky header `.3s`; owl
  `smartSpeed: 1000`.

## Requirements

### Requirement: Utility bar above the navbar

A **44px** band painted **`#eee`** with a **1px `#e9ecef` bottom rule** SHALL
sit above the navbar and hold, at the left, an envelope glyph + the e-mail
address and a phone glyph + the phone number (both **16px `#666666`**, labels
hidden below 768px), and at the right two glyph + label links (Twitter,
Facebook). It SHALL be inside the page's normal flow (not fixed) and SHALL NOT
overlap the hero.

#### Scenario: Utility bar renders above the header

- **GIVEN** Dockyard is rendered at 1440px
- **WHEN** the page loads
- **THEN** the utility bar SHALL be 44px tall on `#eee` with a `#e9ecef` bottom rule
- **AND** it SHALL show the e-mail, the phone number and the two social links
- **AND** the navbar SHALL begin immediately below it

#### Scenario: Labels collapse on mobile

- **GIVEN** the viewport is 390px wide
- **WHEN** the utility bar renders
- **THEN** the e-mail, phone and social labels SHALL be hidden and only the glyphs SHALL remain
- **AND** the bar SHALL stay 44px tall without wrapping

### Requirement: White navbar that becomes a fixed sticky bar

A white navbar SHALL measure a **99px box at rest** (the live render's 67px content row plus
Bootstrap's `padding: 1rem`) and **67px once stuck**, and SHALL hold a **32px/900 UPPERCASE** wordmark at the left
and seven 16px items at the right — Home, Services, About Us, Why Us,
Testimonials, Blog, Contact Us — each `padding: 20px 0` / `margin: 0 15px`,
`#000` at rest and **`#007bff`** for the current section and on hover. Items
SHALL be in-page anchors (`#home`, `#services`, `#about`, `#why-us`,
`#testimonials`, `#blog`, `#contact`). Once the page scrolls, the bar SHALL
become **`position: fixed; top: 0`** with `#fff`, a
`4px 0 20px -5px rgba(0,0,0,.2)` shadow and the wordmark recoloured
**`#007bff`**. Below 992px the seven items SHALL collapse behind a toggle
button that opens a drawer.

#### Scenario: Navbar composition

- **GIVEN** the navbar is rendered at 1440px
- **WHEN** the page loads
- **THEN** the bar SHALL be a 99px white box holding the UPPERCASE wordmark and seven items
- **AND** the current item SHALL be `#007bff` and the others `#000`

#### Scenario: Sticky on scroll

- **GIVEN** the page is at scroll position 0
- **WHEN** the user scrolls past the navbar
- **THEN** the bar SHALL be fixed at `top: 0` with a soft shadow and a `#007bff` wordmark
- **AND** it SHALL shrink to 67px (the source's `.shrink` padding removal) so it never covers a heading

#### Scenario: Mobile navigation

- **GIVEN** the viewport is 390px wide
- **WHEN** the toggle is activated
- **THEN** all seven anchors SHALL be reachable in a drawer with `aria-expanded="true"`
- **AND** activating an item SHALL close the drawer and scroll to that band
- **AND** the page SHALL NOT gain horizontal scroll while the drawer is closed

### Requirement: Hero (1,000px photo band with a 15% gradient wash and a tracking form)

The hero SHALL be a **1,000px** full-bleed band carrying a port/container-ship
photograph (`background-size: cover`, `center`) under a **`linear-gradient(45deg,
#377aff, #00d9ff)` wash at `opacity: .15`**. Its content SHALL be centred in a
**6-of-12** column: a **40px/500 UPPERCASE white `h1`** ("Transportations &
Logistics" reworded for Dockyard, two lines at 1440), a 16px white subline at
`margin-bottom: 3rem`, and a **tracking form** — a **400×55** white input
(`placeholder="Your tracking number"`, `border-radius: 4px`, `padding: 6px
20px`, `margin-right: 10px`) beside a **130×55 `#007bff`** submit labelled
"Track Now" (`border-radius: 4px`, hover `#0069d9`). There SHALL be exactly
**one** `h1` on the page.

#### Scenario: Hero composition at 1440

- **GIVEN** the hero is rendered at 1440px
- **WHEN** the page loads
- **THEN** the band SHALL be 1,000px tall with the photo and the 15% gradient wash
- **AND** the `h1` SHALL render at 40px/500 uppercase white on two lines
- **AND** the input SHALL measure 400×55 and the button 130×55, both 4px-radius

#### Scenario: Submitting a tracking number

- **GIVEN** the hero tracking form is rendered
- **WHEN** the user submits an empty value
- **THEN** the form SHALL report a validation message and SHALL NOT reload the page
- **AND** submitting a non-empty value SHALL show an inline "no shipment found" result
- **AND** the result region SHALL be announced via `aria-live="polite"`

#### Scenario: Hero on mobile

- **GIVEN** the viewport is 390px wide
- **WHEN** the hero renders
- **THEN** the band SHALL be 844px (`100vh`) and the content SHALL stack
- **AND** the `h1` SHALL step down to 30–32px so headline, subline and form fit
- **AND** the input and button SHALL stack full width without overflow

### Requirement: Photo trio (three lifting service images)

Three **350px-wide** cards SHALL sit in a 3-up row immediately under the hero:
an image (4:2.5, `border-radius: 4px`, deterministic placeholder), a centred
**22.4px/500 UPPERCASE `#000` `h3`** and a 16px `#999999` blurb. On hover or
focus-within the image SHALL rise **5px** over `.3s`. Titles SHALL follow the
source's three service families (truck insurance, air transport, sea & air
freight) renamed to Dockyard's voice, with the source typo fixed.

#### Scenario: Three cards under the hero

- **GIVEN** the photo trio is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** three 350px cards SHALL sit in one row with equal heights
- **AND** each SHALL show an image, an uppercase 22.4px title and a grey blurb

#### Scenario: Cards stack

- **GIVEN** the viewport is 390px wide
- **WHEN** the photo trio renders
- **THEN** the cards SHALL stack one per row, full width, images keeping their ratio

### Requirement: Services (six icon cards on `#f6f5f5`)

A `#f6f5f5` band SHALL open with a centred heading block in a **7-of-12**
measure — an `h2` at **48px/500 `#007bff`** with `text-transform: none` and a
16px `#939393` blurb — then present **six** service cards (Sea Freight, Air
Freight, Package Forwarding, Trucking, Warehousing, Delivery) as a
**3-column grid** at ≥992 (2-up at `md`, 1-up at `sm`). Each card SHALL be
**350×282**, `padding: 30px`, `border-radius: 4px`, transparent by default,
holding a **48px `#007bff`** lucide glyph, a **22.4px/500 UPPERCASE `#000`
`h3`** and a 16px `#939393` blurb. On hover or focus-within the card SHALL fill
**`#fff`** and take a **`#007bff`** border. No carousel dots SHALL be rendered.

#### Scenario: Six services in a 3×2 grid

- **GIVEN** the services band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** six cards SHALL appear as two rows of three, each 350px wide
- **AND** every card SHALL carry a blue glyph, an uppercase 22.4px title and a grey blurb
- **AND** the heading SHALL be 48px `#007bff` with `text-transform: none`

#### Scenario: Card hover

- **GIVEN** a service card at rest on the `#f6f5f5` band
- **WHEN** the pointer enters it or it receives keyboard focus
- **THEN** it SHALL become white with a `#007bff` border
- **AND** the transition SHALL complete in about `.3s`

#### Scenario: Services stack

- **GIVEN** the viewport is 390px wide
- **WHEN** the band renders
- **THEN** the cards SHALL stack one per row
- **AND** the heading SHALL step to 32px

### Requirement: About (heading band, overlapping video figure, four counters)

A white band SHALL hold the centred `h2` "About Us" (48px/500 `#007bff`) and
its blurb, and the following `#f6f5f5` band SHALL carry ONE `#about` target
containing both (delta 2). That second band SHALL present a **1,110×724** video
figure lifted **-10rem** into the band above (`-6rem` ≤991), covered by an
**80px white circular play disc** (90px on hover) and opening a lightbox
placeholder (the recreation SHALL NOT embed the source's Vimeo id; use a
dialog with a placeholder frame or a poster + play state). Below it, **four
counters** SHALL sit in one row (2-up at `sm`) — a **64px/400 `#007bff`**
number with a **50×3 `rgba(52,58,64,.3)`** rule under it and a **14px `#939393`
UPPERCASE-spaced caption** — for "Years in Service 19+", "Employees 2,332+",
"Covered Countries 231+" and "Couriers 827+". The numbers SHALL count up once
when the band enters the viewport, with a **comma separator** for 2,332.

#### Scenario: Video figure overlaps its band

- **GIVEN** the about band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** the video figure SHALL sit 1,110px wide, 724px tall, pulled 160px up into the previous band
- **AND** an 80px white play disc SHALL be centred on it and grow to 90px on hover
- **AND** activating it SHALL open a dialog that can be dismissed with Escape

#### Scenario: Counters animate once

- **GIVEN** the counters are below the fold
- **WHEN** the band scrolls into view
- **THEN** the four values SHALL animate from 0 to 19, 2,332, 231 and 827
- **AND** the employee value SHALL be rendered with a comma separator
- **AND** re-scrolling SHALL NOT restart the animation
- **AND** under `prefers-reduced-motion: reduce` the final values SHALL render immediately

#### Scenario: One About anchor

- **GIVEN** the navbar's "About Us" item is activated
- **WHEN** the page scrolls
- **THEN** it SHALL land on the About heading band
- **AND** that band and the video/counter band SHALL be one target (no duplicate `id`)

### Requirement: Staff (three bordered member cards)

Three **350×439** white cards in one row SHALL each hold a **130px-max circular
portrait**, a name at **20px `#000`**, a role line at **12px `#b8b8b8`
UPPERCASE with `letter-spacing: .1em`**, a 16px `#939393` blurb, and three
**30×30 `#007bff` square social buttons** (`border-radius: 4px`, 2px border,
white glyphs) that are real links with accessible names. Cards SHALL be
`1px solid #e9ecef`, `padding: 30px`, `border-radius: 4px`.

#### Scenario: Three staff cards

- **GIVEN** the staff band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** three cards SHALL sit in one row, each with a circular avatar, name, role and blurb
- **AND** each SHALL expose three accessible social links

#### Scenario: Staff stack

- **GIVEN** the viewport is 768px wide
- **WHEN** the staff band renders
- **THEN** the cards SHALL wrap to two-up then one-up at 390px
- **AND** each avatar SHALL stay circular and centred

### Requirement: Pricing (three tiers, included vs excluded features)

A `#f6f5f5` band SHALL present a centred `h2` "Pricing" and three
**350×561** white cards (`padding: 30px`, no border, no shadow) for **Basic
$47 / year**, **Premium $200 / year** and **Professional $750 / year** — the
title at **28px UPPERCASE `#000`**, the figure in a **48px `#007bff`** span and
" / year" in **`#cccccc`**. Each card SHALL list **five** features: two
included (tick **`#71bc42`**, 20px glyph, `padding-left: 35px`, 20px row gap)
and three excluded (muted `#b8b8b8` **with a strikethrough** and a neutral
glyph — delta 4). Each card SHALL end in a **111×42** "Buy Now" button: cards 1
and 3 **`#6c757d`** (hover `#5a6268`), card 2 **`#007bff`** (hover `#0069d9`),
all `border-radius: 4px`.

#### Scenario: Three tiers with one highlighted CTA

- **GIVEN** the pricing band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** three white cards SHALL sit in one row with prices 47, 200 and 750
- **AND** only the middle card's button SHALL be `#007bff`; the other two SHALL be `#6c757d`
- **AND** the figures SHALL be 48px `#007bff` with a `#cccccc` " / year" suffix

#### Scenario: Included versus excluded features

- **GIVEN** a pricing card's feature list
- **WHEN** it is inspected
- **THEN** two rows SHALL show a `#71bc42` tick and normal-weight copy
- **AND** three rows SHALL be muted and struck through
- **AND** the tick glyphs SHALL be `aria-hidden` so screen readers hear only the labels

#### Scenario: Pricing stacks

- **GIVEN** the viewport is 390px wide
- **WHEN** the band renders
- **THEN** the cards SHALL stack one per row, full width

### Requirement: FAQ (eight questions in two columns)

A white band SHALL hold a centred `h2` "Frequently Asked Questions" and **eight**
question blocks in two `col-lg-6` columns (4 + 4). Each question SHALL be an
**`h3` at 20px `#000`** with `text-transform: none`, `margin-bottom: 1.5rem`,
followed by a 16px `#939393` answer; each block SHALL have
`margin-bottom: 3rem`. The eight headings SHALL be complete questions
(delta 5) covering freight modes, tracking, warehousing, insurance, cut-off
times, customs, pricing and coverage.

#### Scenario: Eight complete questions

- **GIVEN** the FAQ band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** eight question/answer pairs SHALL render in two columns of four
- **AND** every question SHALL be a complete sentence-like heading at 20px `#000`

#### Scenario: FAQ stacks

- **GIVEN** the viewport is 390px wide
- **WHEN** the FAQ renders
- **THEN** the two columns SHALL become one, questions in source order

### Requirement: Why band (split photo and checklist, no gutters)

A white band SHALL be a single full-width row with **no gutters**: a
**6-of-12** photograph (`background-size: cover`, 555×518) on the **right** and
a **5-of-12** text column on the left with `padding: 3rem` — an **`h2` at 32px
UPPERCASE `#000`** ("Why Dockyard"), a 16px `#939393` blurb and **five**
checklist items (tick **`#007bff`**, `padding-left: 35px`) reading "Cargo
express", "Secure services", "Secure warehousing", "Cost savings", "Proven by
great companies" (typo fixed). The band SHALL carry a 1px top border.

#### Scenario: Split band composition

- **GIVEN** the why band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** the photograph SHALL fill the right half to the viewport edge with no gutter
- **AND** the text column SHALL sit left with five blue-ticked items
- **AND** the heading SHALL be 32px uppercase `#000`

#### Scenario: Split stacks

- **GIVEN** the viewport is 390px wide
- **WHEN** the why band renders
- **THEN** the text SHALL come first and the photograph below it at 400px tall

### Requirement: Testimonials (three-up quote carousel, four people)

A `#f6f5f5` band SHALL show a centred `h2` "Happy Clients" and a carousel of
**four** testimonials, **three visible at ≥1200**, two at 600–999 and one
below, advancing with dots (7px, `#cccccc`, active **`#007bff`**) and hidden
arrows. Each slide SHALL be a **white quote panel** — `padding: 30px`,
**18px/1.6 italic Georgia `#000`** text with typographic quotes — followed by a
**60px circular portrait** and the name at **18px UPPERCASE `#000`**. The
carousel SHALL autoplay (~5s, pausing on hover/focus) and SHALL be a manual,
non-autoplaying scroller under `prefers-reduced-motion: reduce`. The four
people SHALL be distinct, with four distinct portraits (delta 7).

#### Scenario: Three quotes visible

- **GIVEN** the testimonials band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** three white quote cards SHALL be visible with three dots below
- **AND** the quote text SHALL be 18px italic Georgia on white

#### Scenario: Advancing the carousel

- **GIVEN** the carousel is showing the first slide
- **WHEN** the user activates the next dot
- **THEN** the track SHALL move one card and the active dot SHALL turn `#007bff`
- **AND** the fourth card SHALL be reachable
- **AND** keyboard users SHALL be able to move with the arrow keys or the dots

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce` is set
- **WHEN** the band renders
- **THEN** autoplay SHALL be off and transitions SHALL be instant

### Requirement: Articles (two post cards)

A white band SHALL show the heading "Articles" and **two** cards in `col-lg-6`,
each with a **520×325** image (`border-radius: 4px`), a grey date line, an
**`h3` at 24px UPPERCASE `#939393`** title link, a 16px blurb and a
**`#007bff`** "Read More" link. The two posts SHALL differ in image, date, title
and excerpt (delta 8), and titles SHALL be `h3` (delta 11).

#### Scenario: Two distinct posts

- **GIVEN** the articles band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** two cards SHALL sit side by side with different images, dates and titles
- **AND** each title SHALL be an `h3` link that turns `#007bff` on hover

#### Scenario: Articles stack

- **GIVEN** the viewport is 390px wide
- **WHEN** the band renders
- **THEN** the cards SHALL stack, images full width, text below each

### Requirement: Contact (two-column field grid and a full-width submit)

A `#f6f5f5` band SHALL hold a centred `h2` "Contact Us" and a form in an
**8-of-12** column: **First name** and **Last name** in two `col-md-6` inputs,
**Email address** in a full-width input, a **10-row** message textarea, and a
**full-width `#007bff`** "Send Message" button (`padding: 1rem 3rem`,
`border-radius: 4px`). Every control SHALL be **55px tall** (the textarea
excepted), `1px solid #e6e6e6`, `border-radius: 4px`, `padding: 6px 20px`,
focus border **`#007bff`** with no shadow. Validation SHALL be client-side with
an `aria-live` status region; no network call SHALL be made (the source posts
to `#`).

#### Scenario: Form composition

- **GIVEN** the contact band is rendered at 1440px
- **WHEN** the user scrolls to it
- **THEN** the form SHALL be 8-of-12 wide with two name inputs, an e-mail input, a 10-row textarea and a full-width blue button
- **AND** every field SHALL be 55px tall with a `#e6e6e6` border and a 4px radius

#### Scenario: Submitting invalid input

- **GIVEN** the contact form is rendered
- **WHEN** the user submits with an empty name or a malformed e-mail
- **THEN** the field SHALL show an inline error and receive `aria-invalid="true"`
- **AND** focus SHALL move to the first invalid field
- **AND** submitting valid data SHALL show a success message in the `aria-live` region and reset the form

#### Scenario: Contact stacks

- **GIVEN** the viewport is 390px wide
- **WHEN** the form renders
- **THEN** the two name inputs SHALL stack full width and the button SHALL stay full width

### Requirement: Footer (dark four-column band with newsletter and attribution)

A **`#333333`** footer with `padding: 8em 0` SHALL hold four columns: "About
Us" (blurb), "Features" (five links), "Subscribe to Newsletter" (a transparent
input with a **`#007bff`** "Subscribe" button in an input group) and "Follow Us"
(four social links). Column headings SHALL be **16px UPPERCASE white**; body
copy and links SHALL be `rgba(255,255,255,.5)` and become white on hover. Below
them a **`1px rgba(255,255,255,.1)`** rule SHALL separate a centred copyright
line that renders the current year as a value (never `document.write`) and links
**https://www.componentdock.com/** as "Component Dock" (delta 12).

#### Scenario: Footer composition

- **GIVEN** the footer is rendered at 1440px
- **WHEN** the user scrolls to the bottom
- **THEN** four columns SHALL render on `#333333` with 16px UPPERCASE white headings
- **AND** the newsletter input SHALL sit beside a blue Subscribe button
- **AND** the copyright line SHALL sit below a faint rule, centred

#### Scenario: Attribution and brand

- **GIVEN** the footer is rendered
- **WHEN** its links are inspected
- **THEN** a link to `https://www.componentdock.com/` SHALL exist with the text "Component Dock"
- **AND** the year SHALL be the current year rendered from code
- **AND** no file in the app SHALL contain the source brand name

### Requirement: Responsive behaviour without overflow

The page SHALL have no horizontal scroll at any width from 320px to 1440px:
`document.documentElement.scrollWidth` SHALL equal
`document.documentElement.clientWidth` at 390px (the source fails this — 436 vs
390, delta 6). Grids SHALL collapse 3-up → 2-up → 1-up; the hero content,
service grid, staff cards, pricing cards, FAQ columns and checkout rows SHALL
all fit their containers.

#### Scenario: Mobile audit

- **GIVEN** the viewport is 390px wide
- **WHEN** the whole page is scrolled
- **THEN** `scrollWidth` SHALL equal `clientWidth` (390)
- **AND** every band SHALL fit, with no clipped headings or overflowing cards
- **AND** the drawer SHALL open and close without widening the document

#### Scenario: Desktop audit

- **GIVEN** the viewport is 1440px wide
- **WHEN** the page is measured
- **THEN** the container SHALL be 1,140px and the hero SHALL be 1,000px tall
- **AND** `scrollWidth` SHALL equal 1,440

### Requirement: Motion, accessibility and performance

Scroll reveals SHALL use the AOS-style fade/fade-up/fade-left/fade-right
pattern with 0–300ms delays and SHALL be disabled under
`prefers-reduced-motion: reduce`. Every interactive element SHALL be reachable
by keyboard with a visible focus ring; icon-only links SHALL carry accessible
names; form controls SHALL have labels; the document SHALL have one `h1`, a
descending heading order and `<html lang="en">`. No image SHALL be fetched from
ColorLib; placeholders SHALL be deterministic
(`https://picsum.photos/seed/dockyard-<n>/<w>/<h>`) and SHALL carry explicit
dimensions to avoid layout shift.

#### Scenario: Keyboard pass

- **GIVEN** the page is loaded at 1440px
- **WHEN** the user tabs from the top
- **THEN** the utility links, seven nav items, hero form, video figure, six service cards, three pricing CTAs, four carousel dots, two article links, contact form and footer links SHALL all receive focus in visual order
- **AND** each SHALL show a visible focus ring

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce` is set
- **WHEN** the page loads
- **THEN** reveal animations SHALL be skipped and content SHALL be visible immediately
- **AND** counters SHALL render their final values
- **AND** the testimonial carousel SHALL not autoplay

#### Scenario: Heading order and language

- **GIVEN** the page is rendered
- **WHEN** the document outline is read
- **THEN** there SHALL be exactly one `h1`
- **AND** section headings SHALL descend without skipping levels
- **AND** `<html lang="en">` SHALL be present

## Verification checklist

- [x] `openspec/specs/template-dockyard/spec.md` is this file; `npm run spec:validate` passes.
- [x] `apps/dockyard` exists with `package.json` name `@free-react-templates/dockyard`, `react`/`react-dom` set to `latest` (no exact pin), `public/CNAME` = `dockyard.free.componentdock.com`, `homepage` = `https://dockyard.free.componentdock.com`.
- [x] `vite.config.ts` registers `injectUiSource()`; `src/index.css` puts the palette in `@theme` (`--color-brand: #007bff`, `--color-wash-from: #377aff`, `--color-wash-to: #00d9ff`, `--color-surface: #f6f5f5`, `--color-ink: #000`, `--color-body: #939393`, `--color-line: #e9ecef`, `--color-success: #71bc42`, `--color-footer: #333333`).
- [x] Raleway 400/500/700/900 loaded through one Google Fonts `<link>` (the source declares Raleway but delivers no face — the recreation ships the real typeface).
- [x] Section order matches the fifteen-row table (utility bar → navbar → hero → photo trio → services → about heading → about video + counters → staff → pricing → FAQ → why band → testimonials → articles → contact → footer) with the measured 1440 heights (44 / 67 / 1,000 / 581 / 1,042 / 408 / 1,018 / 824 / 1,017 / 939 / 743 / 867 / 797 / 872 / 679).
- [x] Utility bar: 44px `#eee`, `#e9ecef` bottom rule, e-mail + phone + two social links at 16px `#666666`, labels hidden ≤767px.
- [x] Navbar: 99px white at rest / 67px stuck, 32px/900 uppercase wordmark, seven 16px items (`padding: 20px 0`, `margin: 0 15px`) with `#007bff` active/hover; becomes fixed at `top: 0` with `4px 0 20px -5px rgba(0,0,0,.2)` and a blue wordmark on scroll; drawer below 992px.
- [x] Hero: 1,000px photo band with a `linear-gradient(45deg, #377aff, #00d9ff)` wash at `opacity: .15`, a 40px/500 uppercase white `h1` in a 6-of-12 column, a 400×55 input + 130×55 `#007bff` "Track Now" (both 4px-radius), and a controlled, validated, `aria-live` tracking form.
- [x] Photo trio: three 350px cards (image + 22.4px uppercase `#000` title + 16px `#999999` blurb), image lifts 5px on hover, hover state also reachable by focus.
- [x] Services: `#f6f5f5` band, 48px `#007bff` heading with `text-transform: none`, six 350×282 cards in a 3-column grid (2-up at `md`), 48px blue glyphs, 22.4px uppercase titles, hover = white card + `#007bff` border, **no carousel dots**.
- [x] About: ONE `#about` target (no duplicate id), video figure 1,110×724 pulled -10rem (`-6rem` ≤991) with an 80px→90px white play disc, and four counters (19+ / 2,332+ / 231+ / 827+) at 64px `#007bff` over a 50×3 `rgba(52,58,64,.3)` rule with 14px captions, animating once (comma separator, instant under reduced motion).
- [x] Staff: three 350×439 white cards, `1px #e9ecef`, 30px padding, 130px circular avatars, 20px names, 12px `#b8b8b8` uppercase roles, three 30×30 `#007bff` social buttons per card with accessible names.
- [x] Pricing: three 350×561 white cards, 28px uppercase titles, 48px `#007bff` prices with `#cccccc` " / year", 2 green-ticked included + 3 muted/struck-through excluded features, 111×42 buttons (middle `#007bff`, outer `#6c757d`).
- [x] FAQ: eight COMPLETE questions (no truncated lorem) as 20px `#000` `h3`s with `text-transform: none`, two columns of four at ≥992.
- [x] Why band: gutters-free split, photo right (6-of-12, covers to the edge), 5-of-12 text with a 32px uppercase `#000` heading and five `#007bff`-ticked items, 1px top border.
- [x] Testimonials: four DIFFERENT people with four different portraits, white 30px-padded quote panels in 18px italic Georgia `#000`, 60px circular avatars, 18px uppercase names, 3 visible at ≥1200, 7px dots (`#cccccc` → `#007bff`), autoplay pausing on hover/focus and off under reduced motion.
- [x] Articles: two DIFFERENT posts (image, date, title, excerpt) with `h3` titles at 24px uppercase `#939393`, 520×325 images with a 4px radius, `#007bff` "Read More".
- [x] Contact: 8-of-12 form, First name / Last name / Email address / 10-row message / full-width `#007bff` "Send Message", 55px fields with `#e6e6e6` borders and a `#007bff` focus border, client-side validation with `aria-live`, no network call.
- [x] Footer: `#333333`, `padding: 8em 0`, four columns (About Us, five Features links, newsletter input + blue Subscribe, four socials), 16px uppercase white headings, `rgba(255,255,255,.5)` links going white, `rgba(255,255,255,.1)` rule, centred copyright with the current year rendered as a value.
- [x] Footer links https://www.componentdock.com/ as "Component Dock"; `git grep -i colorlib apps/dockyard` = 0 hits; `git grep -i depot apps/dockyard` = 0 hits (source brand and source slug both absent).
- [x] No horizontal overflow at 390px (`document.documentElement.scrollWidth === document.documentElement.clientWidth`); the mobile drawer does not widen the document.
- [x] Reveal animations (fade / fade-up / fade-left / fade-right) run on scroll, are skipped under reduced motion, and never leave a band invisible when JS is idle.
- [x] Placeholder imagery uses `https://picsum.photos/seed/dockyard-<n>/<w>/<h>` (hero port photograph, three service photos, video poster, three avatars, four testimonial portraits, two article images); icons from `lucide-react`.
- [x] `scripts/verify-app.sh dockyard` passes: typecheck, lint, 100% coverage tests, build.
- [x] Desktop (1440) and mobile (390) renders compared against the reference band-by-band; deviations listed in the PR.
- [x] `npm install` run at the repo root so `package-lock.json` registers the workspace; `grep -c "@free-react-templates/dockyard" package-lock.json` ≥ 1.
- [ ] TEMPLATES.md rows **974**, **2312** and **2959** were re-opened `[x]` → `[ ]` on the branch, then marked `[x]` with `https://dockyard.free.componentdock.com` after merge (prep stream does none of this); `apps/depot` untouched.

## Implementation record (measured on the built app)

Built on `feat/template-dockyard` (PR #1871). Section order, palette, type and geometry match
the table above; the deviations below are deliberate and were measured on the built app with
Playwright at 1440×1000 and 390×844.

| # | Spec line | As built | Why |
|---|---|---|---|
| 1 | Navbar 67px | **99px box at rest, 67px once stuck** | The live render's `.site-navbar` box is 99px (67px content row + `padding: 1rem`); the reference's hero starts at y=143, and the recreation reproduces that. |
| 2 | Hero wash only | wash at `opacity: .15` **over a `#000`/35% scrim** | Seeded placeholder photography is brighter than the source's aerial; without the scrim the white 40px headline fails contrast. The wash itself keeps the measured 15%. |
| 3 | Band heights (1,042 / 1,017 / 867 / 939 …) | 856 / 879 / 659 / 969 | Heights follow the reference's padding rhythm (`5em` bands, `mb-[5em]` heading blocks). They are content-driven, not fixed: the source's numbers include its own lorem wrapping, and the recreation's copy wraps differently. Total document 9,692px vs the source's 11,010px. |
| 4 | Services carousel | static 3-column grid (spec delta 9) | Implemented as specified — no owl dots. |
| 5 | Testimonial carousel | windowed 3-up rail, wrap-around | The source cloned its four slides (`loop: true`); the recreation renders the window instead, so the DOM carries exactly four people and four portraits. |
| 6 | Placeholder photography | `picsum.photos` seeds pick content-agnostic photos | No ColorLib asset is copied; the seeds were chosen for the closest sea/industrial read (`dockyard-port-4` hero, `dockyard-hero-2` / `dockyard-forklift` / `container-9` trio, `dockyard-vessel` poster). |
| 7 | Icons | `lucide-react` (Ship, Plane, Package, Truck, Warehouse, Bike) + inline SVG brand marks | The source used Flaticon/Icomoon glyphs; the icon library carries no brand marks any more, so social glyphs are inline paths. |

Measured on the built app: one `h1` (40px/500, 96px tall over two lines, 570px column), hero
1,000px, utility bar 44px, `scrollWidth === clientWidth` at **390** and **1,440**, no console
errors, 15 bands (utility bar → navbar → hero → photo trio → services → about → staff → pricing →
faq → why → testimonials → articles → contact → footer).

Verification: `bash scripts/verify-app.sh dockyard` green — typecheck, lint, **100%**
statements/branches/functions/lines (72 tests, 19 files), production build. `npm run
spec:validate` green. `git grep -i 'colorlib\|depot' apps/dockyard` = 0 hits.
