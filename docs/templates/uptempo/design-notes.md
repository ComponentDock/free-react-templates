# Uptempo — design notes (replication of ColorLib "Amplify")

Measured on the live preview **2026-10-25** from `/root/free-react-templates-p2`
with `curl` (DOM/CSS) and a Playwright chromium pass at **1440×900** and
**390×844** (geometry, computed styles, `document.fonts`, anchor census, per-band
element screenshots). Everything below is a reading, not a recollection.

- Spec (requirements + checklist): `openspec/specs/template-uptempo/spec.md`
- Tasks: `docs/templates/uptempo/tasks.md`

## What the reference is

A **flat one-page agency** page in a single sans (**Muli**): one saturated
Bootstrap blue (`#007bff`), a hard-edged **70 %-wide blue hero panel** with white
type over it, **no rounded cards, no shadows except two** (hero portrait, sticky
header), grey `#808080` body copy, and very tall section rhythm (`10em` = 176 px).
Its signature devices are the giant **whitesmoke ghost numerals** behind the
process beats and the **full-bleed carousels** (4-up work cards, 4-up service
cards) — the page has no other imagery than the hero portrait and the about
photo. No gradients, no patterns, no parallax.

| | |
|---|---|
| Preview | https://preview.colorlib.com/theme/amplify/ — **200**, 20,108 B, sha256 `ff24525eeeb1b2047023ba8683bf5d564a26f37a7861b1fd673e9edc0a7e2ea4` |
| `<title>` | `Amplify &mdash; Website by Colorlib` (served entity, renders "Amplify — Website by Colorlib") |
| Sheet | `css/style.css` — 18,353 B, sha256 `8bb4f16a7279531b6484fe938cd89c10c97a395399a4ec71ca67b90abaff237d` |
| Script | `js/main.js` — 6,660 B, sha256 `e760df0e34d618e7ecbf9c0ee9a6cce1d241b9083ce1cde15aeb4d84bbe384c4` |
| Vendor | Bootstrap **4.1.3** (26,954 B, own banner), jQuery 3.3.1, jQuery UI, Owl Carousel 2, slicknav, AOS, fancybox 3, jquery.sticky — plus stellar, countdown and datepicker loaded but **unbound** |
| Archive | `/downloads/free/amplify.zip` → **404** (9-byte `text/plain`). **No zip twin**; the live render is the only DOM/CSS reference |
| Aliases | `theme/bootstrap/amplify/` **404**, `theme/bb/amplify/` **404** — the slug-only path is the design |
| Pages | `index.html` **200**; `about`, `about.html`, `work`, `works`, `works.html`, `process`, `services`, `services.html`, `contact`, `contact.html`, `elements`, `blog`, `single`, `gallery`, `pricing`, `team` — **all 404**. A genuine single page, so the five nav items are real in-page anchors |

## Screenshot analysis (TEMPLATES.md card image)

`https://colorlib.com/wp/wp-content/uploads/sites/2/amplify-free-template.jpg`
is served as **AVIF** (1200×946, `file` confirms `ISO Media, AVIF`); converted
with PIL before inspection. It is a **browser-chrome shot of the top fold only**:
the white wordmark top-left, five white nav labels, the outlined blue **Contact**
pill at the far right on the white half, the two-line white headline "We do
things / right.", the muted paragraph, the outlined "GET STARTED" button, and the
square portrait straddling the blue/white seam with its soft shadow.

The card agrees with the live hero (same panel width, same copy, same CTA shape);
what it cannot show is everything below the fold — counters, the work carousel,
the process numerals, the service cards, the form and the footer. Those were
measured from the live DOM, and the band table in the spec comes from
`getBoundingClientRect`, not from the card.

## DOM skeleton (live preview, 1440×900)

```
header.site-navbar (absolute, 88px, transparent)
  .site-logo a "Amplify" · ul.site-menu (4 links) · .cta a span "Contact"
div.intro-section#home-section (900px, ::before = #007bff 1008px)
  .col-lg-4 h1 + p + a.btn.btn-outline-light · figure.img-absolute img (600x600)
div.site-section.section-1 (1060->2098, margin-top:10rem)
  .col-lg-5 (eyebrow + h2 + p + 2x2 .counter) · .col-lg-6 (.image-absolute-box)
div.site-section.section-2#work-section (2098->3286)
  heading block + .owl-carousel.nonloop-block-13 (5 x a.work-thumb)
div.site-section.section-2#process-section (3286->4352)
  heading block + 3 x .col-lg-4 > .process (span.number + icon + h3 + p)
div.site-section.bg-light#services-section (4352->5733, #f8f9fa)
  heading block + .owl-carousel.nonloop-block-14 (6 x .service)
div.site-section#contact-section (5733->6781)
  .row.justify-content-center > .col-md-7 > h2 + p + form
footer.footer-section (6781->7446, #fafafa)
  .col-md-4 About · .col-md-3 Links · .col-md-4 Subscribe · .border-top copyright
```

## Measured numbers worth keeping

| measurement | value |
|---|---|
| document height | **7,446 px** @1440 (band sums drift ±2 % between loads — autoplay carousels) / **8,492 px** @390 |
| horizontal overflow | none: 1440/1440 and 390/390 (`scrollWidth`/`clientWidth`) |
| header | 88 px tall, absolute at y 0, container-fluid insets **112 px** |
| hero | 900 px (100vh, min 900); blue panel **1008 px = 70 %**, radius 0 |
| hero `h1` | 350×**115** at (165, 286) → 2 lines of 57.6 px, 48 px/900 |
| hero CTA | **182×52** at (165, 546) |
| hero portrait | **600×600** at (671, 150), natural 665×665, `right:10%`, `top:50%` |
| blue plate | **300×331** at (1083, 1100), padding 30, `top:-20%; right:-20%` |
| about photo | **540×679** at (735, 1236) |
| counters | 208×74 each, 2×2 inside a 475 px column at y 1678 |
| work slide | **360×453** (= 1440/4, margin 0, aspect 0.795); 13 `.owl-item` for 5 authored |
| services card | **338** wide + **30** gap = 368 pitch (4 fill 1442 of 1440); padding 64; 14 `.owl-item` for 6 authored |
| process column | **350×401** at 390 pitch; ghost numeral box 192 px at x 135 (`left:-30px`) |
| contact column | **665** wide at x 388; textarea **635×254**; submit **302×52** |
| footer columns | **380 / 285 / 380**; subscribe **255 + 95 = 350**, 43 px tall, radius 0 |
| dots | 10 px circles, `#e6e6e6` idle / `#007bff` active, 30 px below the track |
| first section offset | `margin-top: 160px` (`10rem`) |
| section padding | `176px 0` desktop, `70.4px 0` ≤991 (the sheet's own last-wins rule) |

## Typography and font delivery (measured, not assumed)

One family only: **Muli**, delivered by a single Google Fonts link in the head
(`css?family=Muli:300,400,700,900`, written with a print-media swap:
`media="print" onload="this.media='all'"`). `[...document.fonts]` on the live
page lists **Muli 300 / 400 / 700 / 900 all `loaded`** plus the icon faces
`icomoon` and `Flaticon` — nothing is synthesised, no weight is missing, and
`css/style.css` contains **no `@font-face`** at all.

| role | size / line-height / weight |
|---|---|
| body | 17.6 px (1.1rem) / 1.7 / **300**, `#808080` |
| hero `h1` | 48 px / 57.6 / **900**, white |
| `.section-title` (h2) | 48 px / 1.2 / **900**, black, max 450 px → **24 px ≤991** |
| `.section-sub-title` | 11.2 px (.7rem) / **900**, uppercase, `#007bff` |
| counters | numeral 56 px / **700**; label 16 px / 300; icon 32 px |
| process / service `h3` | 24 px / **700** |
| ghost numeral | 160 px / **900**, `whitesmoke`, `line-height:0` |
| buttons | 12 px / 18 / **900**, uppercase |
| footer titles | 14.4 px / **900**, uppercase, `letter-spacing:.1rem` |
| footer copy / links | 16 px / 300 `#808080`; links 17.6 / 300 `#007bff` |

Probe receipts: `css?family=Muli:300,400,700,900` **200**,
`css2?family=Muli:wght@300;400;700;900` **200** (and the face's later name
`Mulish` also **200**) — the prescription in the spec ships the `css2` form.

## Colour: five surfaces, one brand

| surface | value | band |
|---|---|---|
| brand panel / buttons / icons / links / active dot / focus | `#007bff` | hero panel, `.btn-primary`, `.section-sub-title`, icons, footer links, Contact pill fill |
| work hover veil | `rgba(0,123,255,.8)` | `.work-thumb:after` |
| body copy | `#808080` (`color: gray` keyword) | everywhere |
| light band | `#f8f9fa` | services |
| footer band | `#fafafa` | footer |
| ghost numerals | `whitesmoke` = `#f5f5f5` | process |
| rule | `#edf0f5` | footer `.border-top` |
| dots idle | `#e6e6e6` | carousel dots |

Three distinct white alphas are in use on the blue surfaces — hero paragraph
`.5`, plate copy `.55`, work category `.7`. Keep them distinct; collapsing them
to one value flattens the page.

## Interaction inventory (`js/main.js`)

1. **Sticky header** — `sticky({topSpacing:0})` + a 100 px scroll listener that
   toggles `.shrink`; `is-sticky` paints white, adds
   `4px 0 20px -5px rgba(0,0,0,.2)` and flips type to `#000`.
2. **Scrollspy** — Bootstrap 4 `body[data-spy=scroll][data-target=.site-navbar-target][data-offset=300]`;
   the active nav item gets a 2 px underline and the **Contact pill fills blue**.
3. **Smooth scroll** — `.main-menu li a[href^='#']` → `easeInOutCirc` 600 ms,
   then `window.location.hash = this.hash`.
4. **Mobile drawer** — slicknav clones the menu into `.site-mobile-menu-body`;
   `.offcanvas-menu` adds the `rgba(0,0,0,.6)` scrim; rows are 260×54.
5. **Work carousel** — Owl: `loop, autoplay, nav:true` but `.owl-nav{display:none}`,
   items 4/3/2/1 at 1200/1000/600, margin 0.
6. **Services carousel** — Owl: same, margin 30/30/20/0, 6 slides.
7. **Lightbox** — `data-fancybox="gallery"` over the five thumbnails, anchors
   pointing at the raw JPGs.
8. **AOS** — 11 `aos-init` nodes; hero column (`fade-up`, +100 ms), counters
   (`fade-up` 0/100/200/300), blue plate (`fade-up`), process cards (`fade-up`
   0/100/200), contact `form` (`fade`). Reveal-once.
9. **Dead bindings** — `#date-countdown` (`countdown('2020/10/10')`),
   `.slide-one-item`, `.datepicker`, `#slider-range` (commented), `siteStellar()`
   (no `data-stellar-*` anywhere) → **no parallax, no countdown** in this design.

## Source defects and deltas

1. `css/owl.theme.default.min.css` is linked **twice** (lines 18–19).
2. `.site-section` padding is declared **three times** (`2.5em`, `5em ≥768`,
   `10em`) plus `4em ≤991`; only the last of each pair wins → 176 / 70.4 px.
3. `body { color: gray }` is the CSS keyword, not Bootstrap's `#212529`.
4. Hero `h1` stays **48 px at 390 px** (no mobile rule) → clamp to ~34 px below
   768 px; documented as an intentional deviation.
5. At 390 px `.img-absolute` keeps `right:10%` with no mobile override: the
   portrait lands **left-flush at x 0, 351 px wide, 39 px white strip at its
   right**, and hangs **32 px below** the blue panel's bottom edge → centre it
   and keep it inside the panel.
6. The Contact pill's label is `#212529` on transparent — legible only because
   it sits over the hero's white half. Reproduce both the outlined and the
   filled (scrollspy-active) states.
7. Work thumbs link to **raw JPGs** (fancybox) → ship a real dialog with focus
   return.
8. Counter digits are **static** (no animateNumber on this page).
9. Owl renders **2 dots for 5 slides** (loop + 4-up collapses its page maths) →
   ship 5 dots + prev/next so every card is reachable.
10. Both carousels **autoplay unconditionally** → keep autoplay, but pause on
    hover/focus/hidden tab and disable under `prefers-reduced-motion`.
11. All copy is **Lorem ipsum** demo filler → paraphrase.
12. Below 992 px the services gap collapses (20 at ≥600, 0 single) so cards
    touch — reproduce, do not "fix".
13. The footer subscribe pair is **radius 0** while every other control is 4 px.
14. No archive exists (`amplify.zip` 404) — live preview is the only reference.
15. `.section-title` `max-width:450px` is what makes the about heading run to
    three lines — keep the cap.

### Capture artefacts (for whoever re-measures this slug)

- Element screenshots of the mid-page bands (`#work-section`, `#process-section`,
  `#services-section`, `#contact-section`) include the **sticky header** pinned
  over their top edge, because the band was scrolled into view before capture.
  The sticky bar's white strip is a capture artefact, not a section element.
- Band heights below the fold drift ±2 % between loads (two autoplay carousels,
  Owl clones). Cite them as ±20 px.
- The hero band was captured at scroll 0, so it has **no** sticky-header strip.

## Inner-page inventory (probe receipts)

`about` 404 · `about.html` 404 · `work` 404 · `works` 404 · `works.html` 404 ·
`process` 404 · `services` 404 · `services.html` 404 · `contact` 404 ·
`contact.html` 404 · `elements` 404 · `blog` 404 · `single` 404 · `gallery` 404 ·
`pricing` 404 · `team` 404 · `index.html` **200**.

Conclusion: a genuine single-page theme. The five nav items are in-page anchors
and the wordmark's `index.html` is a no-op link (byte-identical to the
directory URL). Nothing has to be invented for a missing second page — the
opposite of the `summit` / `glamour` / `villa` shape.

## Anchor census (rendered 31 / authored 18)

| href | authored | rendered | owner |
|---|---|---|---|
| `index.html` | 1 | 1 | wordmark (no-op on a single-page build) |
| `#home-section` … `#contact-section` | 5 | 10 | 5 nav items + 5 slicknav drawer clones (260×54) |
| `#` | 6 | 6 | mobile toggle (**0×0**), hero CTA, 4 footer links |
| `images/about_1.jpg` + `slide_1..4.jpg` | 5 | **13** | work thumbs → fancybox (8 Owl clones) |
| `https://colorlib.com` | 1 | 1 | credit → replaced by the Component Dock link |

The 8-clone inflation is Owl's loop, not extra content: 13 `.owl-item` nodes hold
5 authored cards.

## Sibling comparison — `apps/amplify` is NOT this design

| | `apps/amplify` (shipped) | this prep |
|---|---|---|
| ColorLib source | **Uza** (`wp/template/uza/`) | **Amplify** (`wp/template/amplify/`) |
| Hero | carousel of 3 slides, "Uza makes your biz greater", device mockup | single band, 70 % `#007bff` panel, "We do things right.", square portrait |
| Brand | `#1583e9` tech blue + `#e7f2fd` pale-blue blobs | `#007bff` only, no blobs |
| Type | normal-weight display sans, body mid-grey | **Muli 300 body / 900 headings** |
| Buttons | **50 px pills** | **4 px radius**, 12 px uppercase |
| Signature devices | blob service plates, curve SVGs, testimonial carousel with gold stars | **160 px whitesmoke ghost numerals**, 4-up work carousel, blue overhang plate |
| Bands | ~11 (incl. testimonials, blog, CTA) | **8** |

Do not port components from `apps/amplify`, and do not borrow its tokens: the
rows 2287 / 2379 / 2496 are credited to that app by name only.

## Name check (receipts)

| check | result |
|---|---|
| `git grep -il uptempo origin/main` | **0 hits** |
| `ls apps \| grep -x uptempo` | none |
| `ls openspec/specs \| grep -x template-uptempo` | none |
| `grep -ic '\*\*[^*]*uptempo' TEMPLATES.md` | 0 |
| `colorlib.com/wp/template/uptempo/` | **404** |
| `preview.colorlib.com/theme/uptempo/` | **404** |
| `preview.colorlib.com/theme/bootstrap/uptempo/` | **404** |

Rejected candidates, for the record: `crescendo` (hit in
`skills/creative/ascii-video/`), `resonate` (hit in `apps/artful`), `kinetic`
and `vantage` (already shipped apps **and** live ColorLib slugs), `boldline` /
`loudcrate` / `redshift` (clean, but `uptempo` carries the design's energy
register best).
