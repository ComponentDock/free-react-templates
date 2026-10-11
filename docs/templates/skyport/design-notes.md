# Skyport — design notes (section-by-section fidelity)

Recreation of ColorLib **"Hosting"** (source slug `hosting`,
https://colorlib.com/wp/template/hosting/) under the NEW name **skyport**
(`apps/skyport`, `@free-react-templates/skyport`).

Reference used (research date 2026-10-11):
- Live preview DOM: `https://preview.colorlib.com/theme/hosting/` — HTTP 200,
  29,143 B, `text/html; charset=utf-8` → saved `/tmp/hosting/preview.html`
  (`<title>Hosting</title>`; body has no class).
- Main stylesheet: `https://preview.colorlib.com/theme/hosting/css/main.css` —
  HTTP 200, 37,279 B → saved `/tmp/hosting/main.css`.
- Page script: `https://preview.colorlib.com/theme/hosting/js/main.js` —
  HTTP 200, 10,629 B → saved `/tmp/hosting/snippet.js`.
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/hosting-free-hosting-website-template.jpg`
  — HTTP 200, 47,744 B, served as **AVIF** → decoded to PNG with
  `ffmpeg -i shot.jpg shot.png` (1200×935) and reviewed visually.

The live preview was reachable, so no fallback was needed. The preview DOM +
stylesheet are authoritative; **every token below was cross-checked against the
live render** (computed styles and `getBoundingClientRect` at 780 px and 1440 px
viewports). The screenshot covers only the above-the-fold region (utility bar →
hero → logo strip → testimonial row); everything below was read from the DOM.

## Global tokens (from the source stylesheet)

- **Brand azure:** `#3898f8` — filled buttons, top-bar button, call-action band,
  counter numbers, nav/footer link hover, footer social hover.
- **Darks:** `#222222` (utility bar, footer, price button, footer newsletter
  text) and `#111111` (footer social chips).
- **Surfaces:** `#fff` page/header/FAQ/newsletter input; `#f9f9ff` pricing and
  service cards (also the theme's `nice-select` background); `#f1f1f1`
  element tints; `#edf3fd` tint.
- **Text:** `#222222` headings and nav links; `#777777` body copy and
  placeholders (also `#777`, `#797979`, `#333` alternates); `#cccccc` footer
  social glyphs; `#fff` on the brand/dark bands.
- **Hairlines:** `#eee` / `#eeeeee` (section + card dividers, testimonial
  divider); `#cccccc` light border.
- **Only overlay:** `rgba(0,0,0,.5)` on the info band (`.overlay-bg`).
- **Font:** `Poppins, sans-serif` everywhere. Weights used on this page: 300
  (body, muted, footer input), 400 (nav links, `banner-content h4`), 500
  (buttons), 600 (headings default), 700 (hero `h1`, counters, logo).
- **Button shapes (three, from class stacking):**
  - `.primary-btn` — azure pill: `background:#3898f8; color:#fff;
    line-height:42px; padding-left:30px; padding-right:60px; border-radius:25px;
    border:none; font-weight:500; text-transform:uppercase`; trailing glyph
    `span` absolute `right:30px` (`20px` on hover). Used by the contact form's
    "Send Message" and the footer's "Subscribe".
  - `.header-btn` — **white pill**: `background:#fff; color:#222;
    padding:0 30px; border:1px solid transparent; border-radius:25px`; hover
    `background:transparent; border-color:#fff; color:#fff`. Used by the hero,
    info band and call-action band.
  - `.about-left .header-btn` — **azure pill**: `background:#3898f8; color:#fff;
    padding:0 50px`; hover transparent + `1px solid #3898f8` + azure text. Used
    by the about split.
  - `.single-price .price-btn` — **square dark button**: `background:#222;
    color:#fff; border-radius:0; box-shadow:none`; inverts to white/`#222` when
    the card is hovered.
  - `.top-head-btn` — flat top-bar button: `background:#3898f8; color:#fff;
    padding:9px 26px; font-size:12px; text-transform:uppercase; no radius`.
- **Section rhythm:** `.section-gap{padding:120px 0}` on every block; utility
  classes `pt-40`, `pt-50`, `pb-60`, `pb-40`, `pb-30`, `pt-20`/`pb-20`,
  `mt-60`, `mt-20`, `mb-10`/`mb-20`.
- **Transitions:** `all .3s ease 0s` on cards/links/price sections; `all .5s` on
  the header.

## DOM skeleton (live preview DOM, top to bottom)

```
header#header                                   position:fixed; bg #fff; z-index:997; padding:0 0 20px
  .header-top                                    bg #222222; 12px; padding:8px
    ul (tel: + mailto: links, li inline, mr 30px)   .header-top-right > a.top-head-btn (azure, flat)
  .container.main-menu                           padding-top:20px
    #logo (img/logo.png)                          own mark in the recreation
    nav#nav-menu-container > ul.nav-menu          Home·Plan(#plan)·About(#about)·Service(#service)
                                                  ·Faq(#faq)·Contact(#contact)·Pages ▾ (Generic, Elements)
section.banner-area.relative#home                bg url(header-bg.jpg) center/cover; row.fullscreen = viewport tall
  .container > .row.fullscreen > .banner-content.col-lg-8
    h1.text-uppercase (white, 48px/700, 3 lines)  "We Make / Cloud Computing / More Easier" (paraphrase)
    p.text-white                                  2-line blurb
    a.primary-btn.header-btn.text-uppercase       white pill "Explore Our Features"
section.brand-area.pt-40                          .row.logo-wrap{padding:60px 65px} · 5 marks (l1–l5.png)
section.details-area.pt-50                        .details-section{border-bottom:1px #eee; pb:100px}
  col-lg-2.detials-left (h5 uppercase name + p role) | col-lg-9.detials-right
                                                      (p quote; border-left:1px #eee; pl:30px)
section.price-area.section-gap#plan               centred title (h1.mb-10 + p)
  3 × .single-price{bg #f9f9ff}                   col-lg-4
    .top-sec (h4 plan + p audience | h1 price)    padding:40px 40px 22px; border-bottom:1px #eee
    .bottom-sec (p blurb)                         same padding/hairline
    .end-sec (ul 5 li; margin-bottom:20px each) + button.primary-btn.price-btn  (#222, radius 0)
                                                  hover: .bottom-sec/.end-sec → #3898f8, shadow, button inverts
section.about-area#about                          .container-fluid > .row.justify-content-end
  .col-lg-6.about-left (h1 #222 + p + a.primary-btn.header-btn "See Details")
  .col-lg-6.about-right.no-padding (img c1.jpg, width:100%)
section.service-area.section-gap#service          centred header-text (h1 + p, pb:40px)
  6 × col-lg-4 .single-service                    bg #f9f9ff; padding:30px; margin-bottom:30px
    h4 > span.lnr (icon, mr:15px) + title          h4 margin:20px 0
    p
section.info-area.relative.section-gap            bg url(info-bg.jpg) right/cover; color #fff
  .overlay.overlay-bg (rgba(0,0,0,.5))
  col-lg-5 (h1.text-white multi-line + p.pt-20.pb-20 + a.primary-btn.header-btn "Get Customer Support")
section.faq-area.section-gap#faq                  bg #fff; centred title (h1.mb-10 + p)
  .counter-left.col-lg-3                          4 × .single-facts{margin-bottom:26px}: h2.counter + p
  .faq-content.col-lg-9                           3 × .single-faq{margin-bottom:30px}: h2 + p
section.call-action-area.section-gap              bg #3898f8; centred
  col-lg-9 (h1.text-white + p.text-white.pt-20.pb-20 + a.primary-btn.header-btn "Request Free Consultation")
section.contact-area.section-gap#contact          centred title (h1.mb-10 + p, pb:30px)
  form.form-area.mt-60 (2 × col-lg-6)
    input.common-input ×3 (name / email / subject) | textarea.common-textarea (180px)
                                                   + button.primary-btn "Send Message" + span glyph
footer.footer-area.section-gap                    bg #222222; padding-top:100px
  .single-footer-widget col-lg-3  "Top Products" h6 + ul.footer-nav (4 links)
  .single-footer-widget.col-lg-6.newsletter "Newsletter" h6 + p + input(EMAIL) + button.nw-btn.primary-btn
  .single-footer-widget col-lg-3  "Instragram Feed" h6.mb-20 + ul.instafeed (8 imgs, 25% each)
  .footer-bottom (pt:80px)  .footer-text (a/i #3898f8) + .footer-social (a #111111, 45px, hover #3898f8)
```

## Verified measurements (live render)

| Element                 | Measured                                                                 |
| ----------------------- | ------------------------------------------------------------------------ |
| `body`                  | Poppins, 14 px, weight 300, `#777777`, `line-height:22.75px`              |
| `.banner-area` height   | equals the viewport (1000 px at a 1000 px viewport) — set **inline by the page script** (`style="height: 1000px;"`); CSS pins `700px !important` at ≤767.98 px |
| `.banner-content h1`    | 48 px / 700 / white / uppercase / `line-height:57.6px` at ≥1200; 45 px ≤1199.98; 36 px ≤991.98 (with `br{display:none}`); 40 px ≤414 |
| `.banner-area .primary-btn` | white `rgb(255,255,255)` background, `rgb(34,34,34)` text, `border-radius:25px`, `line-height:42px`, `padding:0 30px` (the `header-btn` override wins) |
| `.nav-menu a`           | 12 px / 400 / `#222` / uppercase / `padding:0 8px`                        |
| `.header-top`           | `#222222`, 12 px, `padding:8px`, 39 px tall at 780 px width               |
| `.top-head-btn`         | `#3898f8`, 12 px / 300, uppercase, `padding:9px 26px`, no radius (166×35) |
| `.service-area .single-service` | 6 items, 350 px wide at 1440 (col-lg-4)                           |
| `.single-price`         | 350 px wide at 1440 (col-lg-4); background `rgb(249,249,255)`             |
| `.single-price .price-btn` | `rgb(34,34,34)` background, white text, `border-radius:0`              |
| `.single-faq h2`        | 18 px / 600 / `#222`                                                      |
| `.counter-left h2`      | 48 px / 700 / `rgb(56,152,248)`, `text-align:right`                       |
| `.about-left h1`        | 36 px / 600 / `#222` at desktop (25 px ≤991.98)                           |
| Section order           | `banner-area → brand-area → details-area → price-area → about-area → service-area → info-area → faq-area → call-action-area → contact-area → footer-area` (matches the markup order) |

## Documented source deltas (reproduce deliberately)

1. **Unused hero overlay.** `main.css` defines
   `.banner-area .overlay{background:#222; opacity:.9}`, but the home-page markup
   has **no `.overlay` element** there — verified live
   (`document.querySelector('.banner-area .overlay') === null`) and visually
   (the hero is a bright azure photo band, not a 90 %-dark field). The
   recreation renders a bright azure hero and must **not** add a dark overlay.
   The only overlay actually used is the info band's `rgba(0,0,0,.5)`.
2. **Script-sized hero.** The hero row's height is written inline by the page
   script (viewport height). Express it with viewport-height utilities plus the
   `700 px` mobile fallback; do not hard-code a pixel height.
3. **`!important` beats the scrolled state.** `#header{background:#fff
   !important}` wins over `.header-scrolled{background:rgba(255,255,255,.9)}`,
   so the scrolled header only gains the offset shadow — keep it opaque.
4. **Counters are JS.** `$('.counter').counterUp({delay:10, time:1000})` — the
   4 numbers animate on view; provide a reduced-motion path that shows the final
   value immediately and keep the numbers as real text.
5. **Two spellings in the source markup:** `.detials-left` / `.detials-right`
   (typo for "details") and the footer heading "Instragram Feed" (typo for
   "Instagram"). Neither typo is reproduced; the section kinds are.
6. **Icon font.** The page uses Linearicons (`span.lnr lnr-*`) plus FontAwesome
   in the footer (`fa fa-facebook`, `fa fa-twitter`, `fa fa-dribbble`,
   `fa fa-behance`, `fa fa-heart-o`). The recreation uses `lucide-react`
   equivalents; no icon-font CSS is copied.
7. **Secondary palette not on this page.** The stylesheet also carries teal
   `#4cd3e3`, yellow `#f4e700`, red `#f44a40`, orange `#f09359`, pink `#e66686`,
   green `#73fbaf`, indigo `#6382e6` and violet `#a367e7` (generic icon/utility
   values used by other pages of the source theme). They do not appear on the
   home page's own rules — keep them out of the recreation's palette.

## Section-by-section fidelity notes

1. **Utility bar** — `#222222`, 12 px, `padding:8px`; left `ul` of inline `li`
   (`margin-right:30px`) holding a `tel:` link and a `mailto:` link, both white;
   right-aligned flat azure button (`padding:9px 26px`, uppercase, no radius).
   Own phone/e-mail/CTA copy.
2. **Nav row** — `.main-menu{padding-top:20px}`; own wordmark at left; menu at
   right in 12 px uppercase `#222` with 8 px side padding and 10 px `li` gaps;
   `Pages ▾` opens a white panel (`padding:10px`, `margin-top:22px`,
   `box-shadow:0 0 30px rgba(127,137,161,.25)`) with two items in 12 px `#333`
   (`text-transform:none`), hover `#3898f8`.
3. **Hero** — full-bleed cover-photo band (own azure artwork/placeholder), row
   viewport tall, 700 px at ≤767.98 px; **left-aligned** caption in
   `col-lg-8` (`h1` white uppercase 48 px/700, `p` white, `line-height:1em` on
   the heading); white pill CTA. Own cloud/rack/shield-style decorative
   artwork at the right, `aria-hidden`.
4. **Logo strip** — `.brand-area{padding-top:40px}` + `.logo-wrap{padding:60px 65px}`;
   5 evenly spaced grey marks (own text/SVG placeholders).
5. **Testimonial row** — `padding-top:50px`; `.details-section` hairline below
   with `padding-bottom:100px`; 2/9 split with the divider on the right column
   (`border-left:1px solid #eee; padding-left:30px`); exactly one row.
6. **Pricing triple** — centred `h1` + `p`; three `#f9f9ff` square cards,
   sections `padding:40px 40px 22px` with `1px #eeeeee` hairlines;
   `justify-content-between` top row (name + audience | price); 5-item list
   (`li{margin-bottom:20px}`); square `#222` button; hover flips the lower half
   to `#3898f8` with `box-shadow:0 20px 20px 0 rgba(157,157,157,.5)` and
   inverts the button.
7. **About split** — fluid container, image at the right with no gutters, copy
   column `padding-left:20%; padding-right:5%` (5 %/5 % ≤1199.98; ±50 px
   vertical padding ≤991.98); `h1` 36 px/600 `#222` (25 px ≤991.98), `p`
   `padding:20px 0`, azure pill "See Details" (`padding:0 50px`).
8. **Service grid** — centred header block (`padding-bottom:40px`); six cards
   `col-lg-4 col-md-6`, `#f9f9ff`, `padding:30px`, `margin-bottom:30px`; icon
   `margin-right:15px` inline with the `h4` (`margin:20px 0`); hover `#3898f8` +
   `box-shadow:-14.142px 14.142px 20px 0 rgba(157,157,157,.5)` with white text
   and icon.
9. **Info band** — own cover image `background-position:right`, full-bleed
   `rgba(0,0,0,.5)` overlay, white copy in `col-lg-5` (multi-line `h1`,
   `p.pt-20.pb-20`), white pill CTA.
10. **Counter + FAQ band** — white; centred title; `col-lg-3` counter column
    (`text-align:right` at `lg`, centred ≤991.98) with four facts
    (`margin-bottom:26px`) — counters 48 px/700 `#3898f8` over 14 px/300 `#222`
    labels; `col-lg-9` with three Q/A items (`margin-bottom:30px`, question
    18 px/600 `margin:15px 0 25px`, answer 16 px/300/`line-height:24px`).
11. **Call-action band** — solid `#3898f8`, centred `col-lg-9` white `h1` +
    white `p.pt-20.pb-20` + white pill CTA.
12. **Contact form** — centred title (`padding-bottom:30px`), `form` with
    `margin-top:60px`; left column name/email/subject, right column 180 px
    textarea + azure pill "Send Message" with a trailing arrow glyph; fields are
    square (`border-radius:0`, `padding:15px`, 12 px). Local validation only.
13. **Footer** — `#222222`, `padding-top:100px`, three widgets (4-link product
    list with `margin-top:8px` and `#3898f8` hover; newsletter with a white
    20 px-radius pill input (`line-height:38px`, `#777` text/placeholder) and an
    azure `Subscribe` button with `margin-top:20px`; an 8-thumbnail Instagram
    strip at 25 % width with `img{margin:5px}` inside a `margin:-5px` wrapper);
    `.footer-bottom{padding-top:80px}` with `#3898f8` copyright links and
    `#111111` social chips (`width:45px; padding:12px`, hover `#3898f8`, glyph
    `#cccccc`).

## Source → React adaptation table

| Source (ColorLib / Bootstrap 4)                     | React recreation (Vite + React 19 + Tailwind 4)                    |
| --------------------------------------------------- | ------------------------------------------------------------------ |
| `img/logo.png`, `l1–l5.png`, `c1.jpg`, `info-bg.jpg`, `header-bg.jpg`, `i1–i8.png` | own text/SVG wordmark, own grey logo marks, `picsum.photos/seed/skyport-*` placeholders |
| `span.lnr lnr-*` icon spans, `fa fa-*` footer glyphs | `lucide-react` icons (decorative ones `aria-hidden`)               |
| jQuery `js/main.js` (superfish, mobile-nav, counterUp, nice-select, magnific-popup, owl.carousel) | React state + a small scroll listener + `IntersectionObserver`; no carousels or lightboxes (the home page has none) |
| jQuery smooth scroll with a 108 px header offset     | CSS `scroll-behavior` + `scroll-margin-top` on anchor targets      |
| Mailchimp `form-inline` POST + `mail.php` contact form | local validation with per-field errors, success live region, no external endpoint |
| Bootstrap grid (`col-lg-4`, `col-md-6`, `container-fluid`, `d-flex justify-content-between`) | Tailwind grid/flex utilities, same breakpoint behaviour            |
| `.section-gap` / `.pt-40` / `.pb-60` utility classes | Tailwind spacing scale matching the 120 px section rhythm          |

## Sibling comparison (why this slug is its own design)

The Web Hosting family already recreated in this repo uses these brand palettes
(recorded in the sibling specs on main): serverly (Bhost) navy `#416ecc`/
`#487fee` over `#21263a`, hostcraft (Cohost) violet `#6927ff`, nexnode (Hosthub)
indigo `#6247ea` with orange accents, stratus (Cloud83) `#25ae88`/`#7fabda`,
stratos (Cloudnest) indigo `#6366f1`, cumulus (Cloudtemplate) `#21bf73`/
`#3f52e3`, upnode (Hami) `#1c66de`, hostera (Lorahost) `#1e1859`, sitewise
(Hostza) `#2e004b`, skyward (Ignite) `#207dff`, upsurge (Ithost) magenta
`#eb2b63` over `#200545`, soar (Raptor) `#2ebdc4`, netrise (Webhost) `#fb83b5`/
`#9a51ff`, presto (Fastes) coral `#FA8F77` on violet `#73469F`/`#3B2774`.

**Skyport is the family's azure `#3898f8` + Poppins page**, and no recreated
sibling uses that hue. Its distinguishing combination: a `#222222` utility top
bar whose purchase button is a **flat** azure rectangle (no pill), a white
fixed header, a **left-aligned** caption inside a viewport-tall cover-photo hero
whose CSS overlay is **unused**, a five-mark grey logo strip, a **single**
hairline testimonial row, square-cornered `#f9f9ff` pricing/service cards that
flip to solid brand blue with a diagonal offset shadow, and a `#222222` footer
with an 8-thumbnail Instagram strip. None of the siblings matches that
hero treatment, card geometry or hover shadow direction — do not borrow a
sibling's palette or hero/card treatment.

## Prep status (re-verified)

Fresh prep, not a recovery: the slug `hosting` appears in **no** spec on
`origin/main` (checked with the prep slug-coverage scan and
`grep -rl 'wp/template/hosting/' openspec/specs docs/templates`) and no
`openspec/specs/template-skyport/`, `docs/templates/skyport/` or `apps/skyport`
existed at prep time (2026-10-11). The name `skyport` is free of collisions with
`apps/`, `openspec/specs/`, `docs/templates/` and every TEMPLATES.md source
name.
