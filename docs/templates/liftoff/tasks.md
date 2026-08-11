# Liftoff (ColorLib Landerz) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-liftoff`.

## Source mapping

- **ColorLib item:** "Landerz" (TEMPLATES.md — appears 4×: lines 433, 1072,
  2058, 2332; all four rows point to the same source, one prep covers all;
  verified with `grep -c 'wp/template/landerz/'` = 4).
- **Source URL:** https://colorlib.com/wp/template/landerz/
- **Preview URL:** https://preview.colorlib.com/theme/landerz/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~26.6 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/landerz/css/style.css
  (~20 KB) — also imports bootstrap.min.css, jquery-ui.css,
  owl.carousel.min.css, owl.theme.default.min.css, jquery.fancybox.min.css,
  bootstrap-datepicker.css, aos.css (internal css/ subfolder) +
  fonts/icomoon/style.css + fonts/flaticon/font/flaticon.css. Site is
  jQuery + owl carousel + AOS — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`landerz-free-template.jpg`, 1200×946)

**Matches the live template** — centered "Landerz." logo, nav with teal
active "Home" link, teal pill "Get Started" button, flat illustration of a
woman in a yellow bean bag on the hero right, tops of white feature cards
with teal circular icons. The live preview DOM + parsed stylesheet are the
authoritative reference; the screenshot confirms the same design (unlike
Yummy, no variant mismatch).

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Top logo block** `div.container.d-none.d-lg-block` — row >
   `col-12.text-center.mb-4.mt-5` > `h1.mb-0.site-logo` > `a.text-black.h2.mb-0`
   "Landerz" + `span.text-primary` "." (black wordmark + teal dot, centered,
   DESKTOP ONLY above the navbar).
2. **Header** `header.site-navbar.py-md-4.js-sticky-header.site-navbar-target`
   — bg `#fff`, `position: absolute; width: 100%; z-index: 1999`, sticky on
   scroll; bottom border 1px `#f3f3f4`. Container > row.align-items-center:
   - `col-6.col-md-6.col-xl-2.d-block.d-lg-none` — mobile-only logo (same
     markup).
   - `col-12.col-md-10.main-menu` > `nav.site-navigation.position-relative.text-right` >
     `ul.site-menu.main-menu.js-clone-nav.mr-auto.d-none.d-lg-block`: 6 ×
     `li > a.nav-link` (padding 5px 20px, `#000`, hover `#00d2b5`; `.active`
     = `#00d2b5`): Home → `#home-section`, Features → `#features-section`,
     About Us → `#about-section`, Testimonials → `#testimonials-section`,
     Blog → `#blog-section`, Contact → `#contact-section`. Scrollspy via
     `body[data-spy="scroll"]` — active link follows scroll position.
   - `col-6.col-md-6.d-inline-block.d-lg-none` > `a.site-menu-toggle.js-menu-toggle`
     (`span.icon-menu` hamburger) → `div.site-mobile-menu` offcanvas panel
     (`span.icon-close2` close + same links) + `rgba(0,0,0,0.6)` overlay.
   - NOTE: `.has-children .dropdown` CSS exists (2px `#00d2b5` top border)
     but the page has NO dropdowns — nav is flat.
3. **Hero** `div.site-blocks-cover` — white; `min-height: 600px; height:
calc(100vh)`; `background-size: 120% 200%; background-position: top`;
   decorative `:after` SVG on the right. Container > row.align-items-center.justify-content-center >
   col-md-12 (position relative, AOS fade-up):
   - `img.img-absolute` (`images/landing_1.png` — flat illustration, person
     in a mustard-yellow bean bag holding a device with floating UI cards;
     `position: absolute; right: 0; top: 50%; transform: translateY(-50%)
translateX(30%)`; mobile: static, in-flow, mb 30px).
   - `div.row.mb-4` > `div.col-lg-4.mr-auto`: `h1` "Grow Your Business
     Faster" (3.5rem, weight 900, `#000`; 2rem ≤992px) + `p.mb-5` (1rem,
     weight 300, `#6c757d`) + `a.btn.btn-primary.mr-2.mb-2` "Get Started".
4. **Features** `div.site-section.bg-light#features-section` — bg `#f6f6f6`
   (style.css `.bg-light { background: #f6f6f6 !important }` overrides
   bootstrap's `#f8f9fa`); `.site-section` padding 2.5em 0 / 5em 0 md+.
   `row.mb-5` → `col-12.text-center` → `h2.section-title.mb-3` "Features"
   (40px, 900, `#000`; 30px mobile). `row.align-items-stretch` → 6 ×
   `col-md-6.col-lg-4.mb-4.mb-lg-4` (AOS fade-up) > `div.unit-4.d-block`
   (white card, padding 30px, radius 5px):
   - `div.unit-4-icon.mb-3` > `span.icon-wrap` (40×40, radius 50%, bg
     `#00d2b5`, shadow `0 4px 20px -5px rgba(0,210,181,0.4)`) > `span.text-primary`
     icomoon icon (white 1.5rem): autorenew (Business Consulting),
     store_mall_directory (Market Analysis), shopping_basket (User
     Monitoring), settings_backup_restore (Insurance Consulting),
     sentiment_satisfied (Customer Satistified — source typo → paraphrase
     "Customer Satisfaction"), power (Plug & Play).
   - `div > h3` (16px `#000`) + `p` (15px, weight 300) + `p > a` "Learn
     More".
   - HOVER: card bg → `#00d2b5`, `top: -7px`, teal shadow; icon-wrap bg →
     `#fff` + teal icon; h3 → `#fff`; p → `rgba(255,255,255,0.7)`; link →
     `#fff`.
5. **Feature-big row 1** `div.feature-big` > container >
   `div.row.mb-5.site-section.border-bottom` (border-bottom 1px `#edf0f5`):
   - `col-lg-7`: `img.img-fluid` (`do_ui_kit_download_cta_floating_devices-2x.png`).
   - `col-lg-5.pl-lg-5.ml-auto.mt-md-5`: `h2.text-black` "Create interactive
     prototypes" (40px, 900, mb 30px) + `p.mb-4` + `ul.ul-check.mb-5.list-unstyled.success`
     — 2 li, `padding-left: 35px; margin-bottom: 15px`, green (`#8bc34a`)
     check `::before` (icomoon \e5ca): "Adipisci excepturi aliquam",
     "Deleniti labore reiciendis".
   - `div.author-box` (padding 20px, border 1px `#eee`, radius 4px, shadow
     `0 5px 15px -2px rgba(0,0,0,0.1)`): `div.d-flex.mb-4` — img
     `person_1.jpg` rounded-circle (max-width 50px) + `div.mr-auto.text-black`:
     `strong` "Amalia G." + `<br>` "Co-Founder, XYZ Inc."; `blockquote`
     italic quote.
6. **Feature-big row 2** `div.mt-5.row.mb-5.site-section` — REVERSED:
   `col-lg-7.order-1.order-lg-2` (img `do_ui_kit_hero_floating_devices-2x.png`)
   - `col-lg-5.pr-lg-5.mr-auto.mt-5.order-2.order-lg-1`: h2 + p +
     `ul.ul-check.success` ("Laborum enim quasi at modi", "Ad at tempore") +
     `div.author-box` (img `person_4.jpg`, `strong` "Darren K.", "Co-Founder,
     XYZ Inc.", same italic quote).
7. **About** `div.site-section.bg-light#about-section` — bg `#f6f6f6`.
   `row.mb-5` → centered `h2.section-title.mb-3` "About Us" + `row.mb-5`:
   `col-lg-6` (img `about_1.jpg` `img-fluid mb-5 mb-lg-0 rounded shadow`) +
   `col-lg-5.ml-auto.pl-lg-5`: `h2.text-black.mb-4` "Create interactive
   prototypes" + `p.mb-4` + `p > a.btn.btn-primary` "Learn More".
8. **Testimonials** `div.site-section.testimonial-wrap#testimonials-section`
   — `row.mb-5` → centered `h2.section-title.mb-3` "Testimonials" +
   `div.slide-one-item.home-slider.owl-carousel`: 4 slides of
   `div.testimonial` (max-width 800px, margin auto, text-center):
   `figure.mb-4` (img person_3/person_2/person_4/person_1.jpg — `w-100
img-fluid mb-3 shadow`, max-width 100px, radius 50%) + `blockquote.mb-3`
   (1.5rem italic; same lorem quote in source — paraphrase into 4 distinct
   quotes) + `p.text-black > strong` (John Smith / Robert Aguilar / Roger
   Spears / Kyle McDonald). Arrows: 50×50, radius 50%, bg `rgba(0,0,0,0.2)`,
   white 25px icon, absolute left 10px / right 10px, top 50%, hover bg
   `#000`. Dots: 10px circles `#dee2e6`, active `#00d2b5`.
9. **Blog** `div.site-section#blog-section` — `row.mb-5` → centered
   `h2.section-title.mb-3` "Blog Posts" + `div.row`: 3 ×
   `col-md-6.col-lg-4.mb-4.mb-lg-4` > `div.h-entry`: `img.img-fluid`
   (img_1/img_2/img_3.jpg, mb 30px) + `h2 > a` "Create interactive
   prototypes" (30px `#000`) + `div.meta.mb-4` (14px `#b3b3b3`: "Ham Brook •
   Jan 18, 2019 • News" / "James Phelps • Jan 18, 2019 • News" — "News" is a
   link) + `p` + `p > a` "Continue Reading...".
10. **Contact** `div.site-section.bg-light#contact-section` — bg `#f6f6f6`.
    `row.mb-5` → centered `h2.section-title.mb-3` "Get In Touch" +
    `div.row.justify-content-center` > `div.col-lg-7.mb-5` > `form.p-5.bg-white`
    (padding 3rem, white):
    `h2.h4.text-black.mb-5` "Contact Form" + `div.row.form-group` blocks:
    - First Name (`label[for=fname]` + `input#fname.form-control.rounded-0`)
      - Last Name (`input#lname`) — two col-md-6.
    - Email (`input#email[type=email]`) + Subject (`input#subject`) +
      Message (`textarea#message[rows=7]` placeholder "Write your notes or
      questions here...") — col-md-12 each.
    - `input[type=submit][value="Send Message"].btn.btn-primary.mr-2.mb-2`.
    - Inputs: `.form-control` height 43px, radius 30px, focus border
      `#00d2b5` — BUT overridden with `rounded-0` → SQUARE corners. Labels
      `#000`.
11. **Footer** `div.footer.py-5.border-top.text-center` — white, top border
    1px `#edf0f5`: `row.mb-5` → `col-12` → `p.mb-0` with 3 × `a.p-3` >
    `span.icon-facebook` / `span.icon-twitter` / `span.icon-instagram`;
    `row` → `col-md-12` → `p.mb-0`: "Copyright © <year> All rights reserved |
    This template is made with <i.icon-heart> by <a>Colorlib</a>".

## Implementation checklist (order)

1. Scaffold: copy the simplest existing app, rename package to
   `@free-react-templates/liftoff`; register workspace in package-lock.json
   (`npm install` at root before committing); `injectUiSource()` in
   vite.config.ts; Montserrat (400/700/900) Google Fonts `<link>` in
   index.html (body keeps the system sans stack).
2. `src/index.css` — `@theme` tokens: `--color-brand: #00d2b5`,
   `--color-ink: #000`, `--color-muted: #6c757d`, `--color-meta: #b3b3b3`,
   `--color-light: #f6f6f6`, `--color-border: #edf0f5`,
   `--color-check: #8bc34a`, `--color-paper: #fff`, `--font-heading:
"Montserrat", sans-serif`. Page bg white, body text gray 300 weight.
3. Components: `Navbar` (desktop top logo block, sticky nav, 6 anchor links,
   scrollspy active state, mobile offcanvas menu + overlay), `Hero` (left
   text + right absolutely-positioned illustration, CTA), `FeatureGrid` (6
   unit-4 cards with teal icon circles + hover fill/lift), `FeatureBig` (2
   alternating rows: image + heading + green-check list + author quote box),
   `About` (rounded photo + text + button), `Testimonials` (client-side
   carousel: 4 slides, prev/next round arrows, teal dots), `Blog` (3
   h-entry cards), `Contact` (white form card, square inputs, zod
   validation + success swap), `Footer` (3 social icon links + copyright).
4. Scrollspy: IntersectionObserver or scroll-state to set the teal active
   nav link (no jQuery, no bootstrap scrollspy).
5. Testimonials: state-based index, arrows wrap or clamp, dots reflect
   active slide (active dot `#00d2b5`).
6. Contact form: zod schema (email regex), per-field errors, block submit
   until valid, success message swaps the form (inputs unmount → assert
   `queryByLabelText`/`queryByRole` absence after submit).
7. Mobile menu: state-based open/close, Escape + close control, focus the
   panel on open.
8. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- liftoff`.
9. PR: `feat: implement Liftoff (ColorLib Landerz)`, description must list
   source template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- Teal `#00d2b5` is the single brand accent — pill buttons (radius 30px,
  padding 10px 30px, 16px), active/hover nav links, the brand-logo dot, the
  feature icon circles, card hover fill, active carousel dot, form focus
  border. Do NOT soften it.
- Buttons: `.btn.btn-primary` = bg + 2px border `#00d2b5`, white text,
  shadow `0 4px 20px -5px rgba(0,210,181,0.4)`; hover = transparent bg, teal
  border, BLACK text. Recreate both states.
- Feature cards (`unit-4`): white, radius 5px, padding 30px. Hover: bg →
  teal, lift -7px, icon circle inverts (white bg + teal icon), title white,
  excerpt `rgba(255,255,255,0.7)`.
- Section titles: 40px weight 900 black, centered, `mb-3`; section rows
  `mb-5`; feature-big headings also 40px 900 with mb 30px.
- Alternating feature rows: row 1 image-left; row 2 REVERSED on desktop
  (order-lg-2 image right, text left) — use `lg:order-*` Tailwind utilities.
- Author boxes: 1px `#eee` border, radius 4px, shadow `0 5px 15px -2px
rgba(0,0,0,0.1)`, padding 20px; avatar rounded-circle ≤50px; name bold +
  "Co-Founder, XYZ Inc."; italic quote.
- Green checkmarks: `#8bc34a`, li padding-left 35px.
- Contact form inputs are SQUARE (`rounded-0`) despite `.form-control`
  radius 30px — keep square in the recreation.
- Testimonial arrows: 50×50 circle `rgba(0,0,0,0.2)`, white icon, hover
  black; dots 10px `#dee2e6` / active `#00d2b5`.
- Blog meta: 14px `#b3b3b3`, "Author • Jan 18, 2019 • News" (News is a
  link). All source headlines are the same placeholder "Create interactive
  prototypes" — vary them in the recreation (paraphrase is fine; the
  layout/kind of content must match).
- "Customer Satistified" is the source's typo — recreate as "Customer
  Satisfaction".
- Hero illustration: absolutely positioned right edge, vertically centered,
  translateX(30%) — on mobile it drops in-flow above the text (mb 30px).
  Use a picsum placeholder or a simple inline-SVG flat illustration.
- Footer "made with <heart> by Colorlib" credit → original attribution.
- lucide-react removed brand icons → inline SVG brand icons (Facebook,
  Twitter/X, Instagram) in the footer; other icons via lucide-react (Menu,
  X, ChevronLeft, ChevronRight, Check, ArrowRight...).
- All images: `https://picsum.photos/seed/liftoff-<n>/<w>/<h>` — suggested
  seed map: hero illustration liftoff-1 (560×560), feature-big 1 liftoff-2
  (640×420), feature-big 2 liftoff-3 (640×420), about photo liftoff-4
  (600×450), avatars liftoff-5..8 (100×100), blog liftoff-9..11 (640×420).
