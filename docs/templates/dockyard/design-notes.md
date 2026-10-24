# Dockyard — design notes (replication of ColorLib "Depot")

Brief for the implementer. Source design: **Depot**
(`https://colorlib.com/wp/template/depot/`,
preview `https://preview.colorlib.com/theme/depot/`). New app name:
**Dockyard** (`apps/dockyard`, package `@free-react-templates/dockyard`, deploy
`dockyard.free.componentdock.com`). Spec:
`openspec/specs/template-dockyard/spec.md`.

Prep status: this design has **no app**. Rows **974**, **2312** and **2959** of
`TEMPLATES.md` say `[x]` but credit the `depot` app, whose spec names a
different ColorLib design (a warehousing/storage theme) — a false `[x]`
(`docs/row-multiplicity.md` §2 APP-WRONG-DESIGN, `row-excl / spec-excl` =
**0 / 37**). The implementer re-opens all three rows on its branch and
re-marks them after merge. **Do not touch `apps/depot`.**

## What the reference is

A **single-page** transportation & logistics corporate site (Bootstrap 4 grid +
jQuery 3.3.1: Owl Carousel, Fancybox, jquery.sticky, waypoints, animateNumber,
AOS, Icomoon, Flaticon). Verified for this prep: the slug-only preview is live
(HTTP 200, **37,790 B**, sha256 `ec896bf7…`), `css/style.css` is **27,785 B**
(sha256 `645001bd…`), `js/main.js` is **7,339 B** (sha256 `c877e05b…`), and
`/downloads/free/depot.zip` is **404** — there is no archive, the live preview
is the only reference.

Inner pages, all probed: only **`single.html`** exists (HTTP 200, 24,178 B);
`about.html`, `services.html`, `why-us.html`, `testimonials.html`,
`blog.html`, `contact.html` and `elements.html` are **404**. So the seven nav
items are genuine in-page anchors and the two article cards are the only
outbound links. `index.html` is byte-identical to the directory URL.

**≈11,010px tall at 1440×1000** (10,820–11,042 across reloads — the services
carousel and the animated counters reflow the page by ±150px), **12,236px at
390×844**. 13 `<img>`, 1 `h1`, 15 `h2`, 27 `h3`, 48 anchors (31 dead `#`).
No `<section>` elements: the page is `div.site-wrap` > `div.top-bar` >
`header.site-navbar` > `div.ftco-blocks-cover-1` (hero **and** the photo trio) >
11 `div.site-section` > `footer.site-footer`.

The character comes from three devices:

1. **One blue, used structurally.** `#007bff` is the only accent, and it is
   applied to *chrome* rather than to calls to action: every section heading
   (48px), the wordmark when the bar is stuck, the active nav item, all six
   service glyphs, the counter numbers, the price figures, the pricing tick
   marks and the carousel dots. Buttons are mostly Bootstrap defaults
   (`#6c757d` grey), so the page reads corporate-calm rather than salesy.
2. **Photography over illustration, in three fixed ratios.** A full-bleed aerial
   container-ship hero (with a 15% `#377aff → #00d9ff` wash), a video still that
   overlaps two bands by 160px, and a gutters-free half-page photo in the "Why"
   band. Everything else is type on white or on `#f6f5f5`.
3. **A flat, borderless surface language.** No shadows anywhere except the
   sticky navbar. Cards are white panels separated from the `#f6f5f5` wash by a
   hairline (`#e9ecef`) or by nothing at all; the only "hover" event in the page
   is a service card filling white and taking a blue border.

## DOM skeleton (live home page, trimmed)

```
div.site-wrap#home-section
  div.top-bar                       (44px, #eee, 1px #e9ecef rule)
    .container > .row > .col-12
      a(icon-envelope) info@yourdomain.com
      a(icon-phone) 1+ (234) 5678 9101
      .float-right: a(icon-twitter) Twitter · a(icon-facebook) Facebook
  header.site-navbar#? js-sticky-header
    .container > .row
      .site-logo > a[href=index.html] "Depot"       (32px/900 uppercase)
      nav.site-navigation > ul.site-menu
        li.active Home(#home-section) · Services(#services-section)
        · About Us(#about-section) · Why Us(#why-us-section)
        · Testimonials(#testimonials-section) · Blog(#blog-section)
        · Contact(#contact-section)
  div.ftco-blocks-cover-1
    div.ftco-cover-1.overlay[style=bg depot_hero_1.jpg]   (1000px, 100vh)
      .container > .row.justify-content-center.text-center > .col-lg-6
        h1 "Transportations & Logistics"                  (40px/500, white, upper)
        p.mb-5 (16px white)
        form[action=#]
          .form-group.d-flex
            input.form-control[placeholder="Your tracking number"]  (400×55)
            input.btn.btn-primary.text-white.px-4[value="Track Now"] (130×55)
    div.site-section.ftco-service-image-1.pb-5            (581px, 3 photo cards)
      .service.text-center (×3): img + h3 22.4px upper + p #999999
  div.site-section.bg-light#services-section               (1042px, #f6f5f5)
    .row.justify-content-center > .col-md-7.text-center
      .block-heading-1: h2 "Services" (48px #007bff) + p
    .owl-carousel.owl-all
      .block__35630.text-center (×6)                       (350×282)
        .icon > span.flaticon-ferry|airplane|package|truck|warehouse|delivery
        h3 22.4px upper + p
  div.site-section#about-section                           (408px, heading only)
    .row.justify-content-center > .col-md-7.text-center
      .block-heading-1: h2 "About Us" + p
  div.site-section.bg-light#about-section   ← DUPLICATE id, defect 2  (1018px)
    .row.justify-content-center.mb-4.block-img-video-1-wrap
      .col-md-12.mb-5 > figure.block-img-video-1[data-aos=fade]
        a[href=vimeo.com/45830194][data-fancybox]
          span.icon > span.icon-play
          img[depot_delivery_1.jpg]                        (1110×724)
    .row > .col-12 > .row
      .col-6.col-md-6.col-lg-3 (×4) > .block-counter-1
        span.number > span[data-number=19|2332|231|827] + "+"
        span.caption Years in Service | Employees | Covered Countries | Couriers
  div.site-section#team-section                            (824px own band)
    .block-heading-1: h2 "Our Staff"
    .owl-carousel.owl-all > .block-team-member-1 (×3)       (350×439)
      figure > img.img-fluid.rounded-circle                 (max 130px)
      h3 20px #000 · span 12px #b8b8b8 upper · p · .block-social-1 (3×30px)
  div.site-section.bg-light#pricing-section                (1017px)
    .block-heading-1: h2 "Pricing"
    .col-lg-4 (×3) > .pricing                               (350×561)
      h3 28px upper #000 · .price > span > span "$47" + " / year"
      ul.ul-check.success.list-unstyled > li (×5; 3 with .remove)
      a.btn.btn-secondary|btn-primary.btn-md "Buy Now"      (111×42)
  div.site-section#faq-section                             (939px)
    h2 "Frequently Ask Questions"  ← sic
    .col-lg-6 (×2): div.mb-5[data-aos=fade-up] > h3 20px + p   (4 + 4)
  div.block__73694.site-section.border-top#why-us-section  (743px)
    .row.no-gutters.align-items-stretch
      .col-12.col-lg-6.block__73422.order-lg-2[style=bg depot_delivery_1.jpg]
      .col-lg-5.mr-auto.p-lg-5.order-lg-1
        h2.text-black "Why Depot" (32px upper)
        p + ul.ul-check.primary (×5)
  div.site-section.bg-light.block-13#testimonials-section   (867px)
    .block-heading-1: h2 "Happy Clients"
    .owl-carousel.nonloop-block-13 > div > .block-testimony-1.text-center (×4)
      blockquote.mb-4 > p  (white panel, 30px, 18px italic Georgia)
      figure > img.rounded-circle (60px) · h3 18px upper
  div.site-section.py-5#blog-section                        (797px)
    h2 "Articles" in a .col-lg-4
    .col-lg-6 (×2) > .blog-entry
      a.blog-thumbnail > img (520×325) · span date · h2.h4 title
      p excerpt · a.text-primary "Read More"
  div.site-section.bg-light#contact-section                 (872px)
    h2 "Contact Us"
    .col-lg-8 > form[action=#][method=post]
      input[First name] · input[First name]  ← defect 3
      input[Email address] · textarea[rows=10] · input.btn.btn-block.btn-primary
  footer.site-footer                                        (679px, #333333)
    .col-md-6 > .row > .col-md-7 About Us + p · .col-md-4 Features (5 links)
    .col-md-4.ml-auto > Subscribe to Newsletter (input-group + #007bff button)
    .col-md-4.ml-auto > Follow Us (4 glyphs)
    .row.pt-5.mt-5.text-center > .border-top.pt-5 > p copyright (document.write)
```

## Section-by-section fidelity notes

| # | band | what must be true |
|---|---|---|
| 1 | utility bar | 44px, `#eee`, `1px #e9ecef` bottom, e-mail + phone left / two socials right, 16px `#666666`, labels hidden ≤767px |
| 2 | navbar | 67px white, `container` 1,140px, wordmark 32px/900 uppercase, seven items 16px (`padding: 20px 0`, `margin: 0 15px`), active `#007bff`; on scroll → `position: fixed`, white, `4px 0 20px -5px rgba(0,0,0,.2)`, wordmark `#007bff`, height 99 → 67 |
| 3 | hero | 1,000px (`100vh`, min 600), photo cover, overlay `linear-gradient(45deg,#377aff,#00d9ff)` at `.15`; 6-of-12 centred column; `h1` 40px/500 uppercase white (540×96, two lines); subline 16px white `mb-5`; input 400×55 + button 130×55, 4px radius, input `margin-right: 10px` |
| 4 | photo trio | 3× 350×381: image 4:2.5 + `h3` 22.4px/500 uppercase `#000` + 16px `#999999`; hover lifts the image 5px |
| 5 | services | 48px `#007bff` heading (`text-transform: none`) in a 7-of-12 measure; six 350×282 cards in **two rows of three** (measured tops 1,999 / 2,311), transparent → `#fff` + `#007bff` border on hover; 3rem blue glyph |
| 6 | about heading | 408px, centred `h2` + two-line blurb, nothing else |
| 7 | about video + counters | ONE `#about` target in the recreation; figure 1,110×724 pulled `-10rem` (`-6rem` ≤991), 80px white play disc (90 on hover); four 255×118 counters, number 64px `#007bff`, 50×3 `rgba(52,58,64,.3)` underline, caption 14px `#939393` `letter-spacing: .05em`; counts animate once, comma-separated |
| 8 | staff | 3× 350×439 white, `1px #e9ecef`, radius 4, `padding: 30px`; 130px circle avatar; name 20px `#000`; role 12px `#b8b8b8` upper `.1em`; three 30×30 `#007bff` social buttons (2px transparent border) |
| 9 | pricing | 3× 350×561 white, no border/shadow, `padding: 30px`; title 28px upper `#000`; price 48px `#007bff` + " / year" `#cccccc`; 5 features, 2 included (green `#71bc42` tick) + 3 `.remove` (no rule in the source → make them muted + struck through); CTA 111×42, middle `#007bff`, outer `#6c757d` |
| 10 | FAQ | 8 Q&A, two columns of four, `h3` 20px `#000` `text-transform: none`, `margin-bottom: 1.5rem`, block `margin-bottom: 3rem`; fix the two truncated lorem headings |
| 11 | why band | no gutters, photo right (6-of-12, covers to the edge, 555×518 at 1440), text left (5-of-12, `padding: 3rem`), `h2` 32px uppercase `#000`, five `#007bff` ticks, 1px top border |
| 12 | testimonials | 4 quotes, 3 visible ≥1200 (2 at 600–999, 1 below); white panel 30px + 18px italic Georgia `#000`; 60px circular avatar; name 18px uppercase; dots 7px `#cccccc` → `#007bff`; autoplay (source: `loop: true, autoplay: true`) that pauses on hover/focus |
| 13 | articles | 2 cards, thumbnail 520×325 radius 4 (the source's `flex: 0 0 150px` is dead because the anchor is `d-block`), grey date, `h3` 24px uppercase `#939393`, excerpt, `#007bff` "Read More" |
| 14 | contact | 8-of-12 form: First/Last name (source: "First name" twice), e-mail, 10-row textarea (254px), full-width `#007bff` button; fields 55px, `1px #e6e6e6`, radius 4, `padding: 6px 20px`, focus `#007bff`, no shadow |
| 15 | footer | `#333333`, `padding: 128px 0`, four columns, 16px uppercase white headings, `rgba(255,255,255,.5)` links → white, `rgba(255,255,255,.1)` rule, centred copyright with the year as a value and the Component Dock link |

## Design tokens (measured, ready for `@theme`)

```css
@theme {
  --color-brand:      #007bff;  /* 23 hits: headings, icons, counters, prices, CTAs */
  --color-wash-from:  #377aff;  /* hero overlay gradient start */
  --color-wash-to:    #00d9ff;  /* hero overlay gradient end */
  --color-success:    #71bc42;  /* pricing tick */
  --color-surface:    #f6f5f5;  /* .bg-light — six bands */
  --color-utility:    #eee;     /* top bar */
  --color-ink:        #000000;  /* card + nav headings */
  --color-body:       #939393;  /* default body copy */
  --color-muted:      #999999;  /* photo-trio blurbs */
  --color-faint:      #b8b8b8;  /* staff roles, excluded features */
  --color-line:       #e9ecef;  /* card + utility-bar rules */
  --color-input-line: #e6e6e6;  /* form-control border (hover #666666) */
  --color-dot:        #cccccc;  /* price suffix, carousel dots */
  --color-footer:     #333333;  /* footer fill */
}
```

Type: **Raleway** 400/500/700/900 (see delta 1 — the source declares the family
but ships no face; the live render falls back to Helvetica/Arial).
Scale measured at 1440: `h1` 40/48 uppercase white · section `h2` 48/57.6
`#007bff` `text-transform: none` (32px ≤991) · `h3` 22.4/26.9 uppercase `#000`
(services, photo trio) · pricing `h3` 28 uppercase · FAQ `h3` 20 `#000`
`none` · article title 24 uppercase `#939393` · body 16/27.2 `#939393` · nav
16 · staff role 12 `#b8b8b8` `.1em` · counter 64 + caption 14 `.05em` · price
48 `#007bff` · testimonial quote 18 italic Georgia · wordmark 32/900.

Buttons: radius 4, `1px` border in the fill colour, `.btn-md` = `padding: 8px
20px` (111×42); `#007bff → #0069d9`, `#6c757d → #5a6268`; hero submit
`px-4` = 130×55; contact submit `btn-block py-3 px-5`.

## Source → React adaptation

| Source | Recreation |
|---|---|
| `images/depot_hero_1.jpg` (aerial container ship) | `picsum.photos/seed/dockyard-1/1800/1200` behind the same 15% gradient |
| `depot_img_{1,2,3}.jpg` (photo trio) | `seed/dockyard-2|3|4/800/500` |
| `depot_delivery_1.jpg` (video still + why-band photo) | `seed/dockyard-5/1900/1239` and a second seed for the why band |
| `person_{1,2,3}.jpg` (staff + testimonial avatars, reused) | six distinct seeds (3 staff + 4 testimonial portraits, all different) |
| Flaticon glyphs (`flaticon-ferry`, `-airplane`, `-package`, `-truck`, `-warehouse`, `-delivery`) | `lucide-react`: `Ship`, `Plane`, `Package`, `Truck`, `Warehouse`, `PackageCheck` |
| Flaticon/Icomoon social + utility glyphs | `lucide-react`: `Mail`, `Phone`, `Twitter`, `Facebook`, `Instagram`, `Linkedin` |
| Icomoon ticks (`\e5ca`) | `Check` (included) / `Minus` or `X` (excluded) from `lucide-react` |
| jQuery.sticky | a scroll listener / `IntersectionObserver` that flips a `stuck` boolean → fixed bar |
| Owl Carousel (`owl-all`, `nonloop-block-13`) | services + staff become static CSS grids (the services carousel renders as a 3×2 grid anyway); testimonials become a small track with dots, 3 visible ≥1200 |
| jQuery.waypoints + animateNumber | one `requestAnimationFrame` count-up per counter group, fired once by an `IntersectionObserver`, respecting reduced motion |
| Fancybox video | a `<dialog>` with a placeholder frame + play state |
| AOS | Tailwind/CSS reveal classes applied via `IntersectionObserver`; content MUST be visible if JS never runs (the source's `aos-init` bands are invisible until scrolled — do not reproduce that failure mode) |
| `document.write(new Date().getFullYear())` | `new Date().getFullYear()` in a constant |
| Footer "made with ♥ by Colorlib" | "Built by Component Dock" linking `https://www.componentdock.com/` |

## Sibling comparison (same family, in this repo)

- **`apps/depot`** (the app the three rows wrongly credit) recreates a
  warehousing/storage design: its hero is a storage-facility pitch, not a
  freight-network hero, and it has a different palette and section list. Do not
  reuse its components or copy.
- Other logistics-flavoured preps in the tree (`cargolane`, `freightly`,
  `haulage`, `logistix`) are different ColorLib designs; Dockyard's signature
  remains the **blue-on-white Bootstrap 4 look with a photographic hero and a
  six-icon services grid**.

## Build order suggestion

1. `index.css` `@theme` tokens + Raleway link + `Container`/`Section` helpers.
2. Static bands top-down: utility bar → navbar → hero → photo trio → services →
   about (video + counters) → staff → pricing → FAQ → why → testimonials →
   articles → contact → footer.
3. Interactions last, each with its own test: sticky bar, reveal observer,
   count-up, testimonial track, video dialog, tracking form, contact form.
4. Then the mobile pass (390) proving `scrollWidth === clientWidth`.
