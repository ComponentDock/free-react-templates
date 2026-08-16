# Scriber (ColorLib Buckkinnear) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-scriber`.

## Design notes (replication findings)

- **Original:** ColorLib "Buckkinnear" — freelance copywriter / content
  writer portfolio template (source:
  https://colorlib.com/wp/template/buckkinnear/). TEMPLATES.md line 552,
  category "Bootstrap 5" (89 items). Single copy — no duplicate rows.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buckkinnear/
  (HTTP 200, ~23.5 KB, title "Copywriter | Template"). Stylesheets:
  bootstrap.min / owl.carousel / slicknav / animate / magnific-popup /
  fontawesome-all / themify-icons / slick / nice-select / style.css
  (63.4 KB SHARED builder stylesheet — contains leftover rules from other
  ColorLib templates, e.g. generic `#05f` `.genric-btn` blocks, huge
  `.btn_1` absolute-position variants; trust only the selectors listed
  below + the screenshot for the real design). Google Fonts `@import`:
  **Montserrat (300–800) headings + Rubik (400–700) body**.
- **Screenshot:** `buckkinnear-colorlib-template.jpg` — verified live in a
  browser (vision): dark nav bar with script logo "Buck Knear" + white
  links; split hero (yellow left block + hands-writing photo right);
  circular portrait ringed yellow; big dark headline; blue "See My Offers"
  button; off-white services section with blue-underlined heading and
  circular blue-outlined icon cards; yellow accent blocks; dark near-black
  band with white story cards. Recreation brands itself **Scriber**.
- **Visual design:** bold writer-portfolio aesthetic — bright yellow
  `#FFEA01` blocks + near-black `#202020` + blue `#05f` sharp-cornered
  buttons, cream `#FCF2EB` ground. ALL buttons rectangular
  (`border-radius: 0`).

## Design tokens (from assets/css/style.css + live computed styles)

| Token          | Value                                                                                                                                                                                     | Where                                                                                                                                                          |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand yellow   | `#FFEA01`                                                                                                                                                                                 | hero left panel (`.single-slider::before` 55%w 82%h), `.info-man` counter box, `.section-tittle > span` kicker, nav link hover, story-title hover, back-to-top |
| Near-black     | `#202020`                                                                                                                                                                                 | `.main-header` bg, headings, hero h1 border-bottom (3px), `.visit-tailor-area2` bg, `.footer-social` circles, footer text/links                                |
| Brand blue     | `#05f`                                                                                                                                                                                    | `.btn_1` / `.btn_01` / `.info-more`, `.line::before` + `.footer-tittle h4::before` (180×6px), copyright links/icons                                            |
| Sticky header  | `#0a0a0a`                                                                                                                                                                                 | `.header-sticky.sticky-bar` on scroll + shadow `0 10px 15px rgba(25,25,25,0.1)`                                                                                |
| Cream          | `#FCF2EB`                                                                                                                                                                                 | `.slider-area` bg                                                                                                                                              |
| White          | `#ffffff`                                                                                                                                                                                 | nav links, button text, dark-band h2 (44px), story h3 a, testimonial dots                                                                                      |
| Founder gray   | `#4C526E`                                                                                                                                                                                 | testimonial founder name (14px)                                                                                                                                |
| Fonts          | Montserrat (headings) + Rubik (body)                                                                                                                                                      | Google Fonts `<link>`s in index.html                                                                                                                           |
| Buttons        | rectangle `border-radius:0`, bg `#05f`, white, arrow icon after text (`.btn_1` 30px / `.btn_01` 24px / `.info-more` 30px)                                                                 | hero "See My Offers", dark band "Let's Start Discuss", quote band "Learn More"                                                                                 |
| Section rhythm | services `section-padding` 100px; testimonials `testimonial-padding` 110/140px; footer `footer-padding` 120px; title `mb-110`                                                             | `.our-services-area`, `.testimonial-area`, `.footer-area`                                                                                                      |
| Header         | transparent over hero; sticky → `#0a0a0a`; links Rubik 18px capitalize white, padding 31px 7px, margin 0 14px, hover `#FFEA01`                                                            | `.main-header`, `.main-menu ul>li a`                                                                                                                           |
| Hero           | 880px tall; bg `h1_hero.jpg` 100% 100%; yellow ::before block; hero col `col-xxl-6`; circular portrait `empolye.png` (wow pulse)                                                          | `.slider-area .single-slider`, `.hero-caption`                                                                                                                 |
| Icons (source) | themify + font-awesome → lucide-react: `ArrowRight` (buttons), `Clock` (story dates), `PenLine`/`FileText`/`Search`/`MessageSquare` (services), brand socials inline SVG (footer circles) | buttons, story meta, services, footer-social                                                                                                                   |

## Structure (1:1, section order)

1. **Header** `header.header-area.header-transparent > div.main-header.header-sticky`
   — `container-fluid > row.align-items-center`: left `div.logo`
   (script-style wordmark "Scriber" — the source logo is an image; recreate
   as a script-ish text wordmark, e.g. a cursive font or styled text);
   right `nav.main-menu.f-right.d-none.d-lg-block` — links Home / About /
   Services / Blog / Contact (Rubik 18px white, capitalize, hover
   `#FFEA01`, padding 31px 7px, margin 0 14px). Below: `div.mobile_menu`
   (hamburger → slide-down menu; slicknav in source). On scroll the header
   gets `.sticky-bar` → bg `#0a0a0a` + shadow + fadeInDown animation.
2. **Hero** `div.slider-area.position-relative` (bg cream `#FCF2EB`) >
   `div.slider-active` > `div.single-slider.slider-height.slider-bg1.d-flex.align-items-center`
   — `slider-bg1` = background image `h1_hero.jpg` (hands writing with a
   fountain pen), `slider-height` = 880px, `background-size: 100% 100%`;
   `::before` pseudo = yellow `#FFEA01` block 55%×82%, top-left, z-index -1
   (the LEFT yellow panel). Inner `div.container > div.row > div.col-xxl-6...position-relative`:
   - `div.hero-caption`: `h1` "Writing Texts That Inspire and Engage your
     Customers" — Montserrat 60px/700, `#202020`, `letter-spacing:-.05em`,
     `border-bottom: 3px solid #202020`, padding-bottom 45px, margin-bottom
     30px.
   - `section.woner-area > div.woner-wrapper` (flex, align-center):
     `blockquote > img` circular portrait (`empolye.png`, `wow pulse`
     animation); `div.woner-caption`: `p` "Hi, I'm Buck Kinnear" (Rubik
     30px/400 `#202020`) + `h2` "I Write Beautiful and Unmistakable Text."
     (Rubik 30px/600 `#202020`, lh 1.2).
   - `a.btn_1.d-none.d-xl-block` "See My Offers" + arrow — bg `#05f`, white,
     padding 56px 125px, font 30px, capitalize, radius 0; in the source it
     is absolutely positioned at the bottom-right of the hero column —
     recreate as a button below the intro (keep the bold oversized look).
3. **Services** `section.our-services-area.section-padding` —
   `container > div.row`:
   - Title column `col-lg-5.col-xl-4.col-md-7` + `div.section-tittle.mb-110`:
     `span` kicker (yellow `#FFEA01`, 16px, capitalize), `h2` "What I can
     write for you and your business" (Montserrat 50px/700 `#202020`
     `ls:-.05em`), and the `.line` underline `::before` (180×6px `#05f`,
     positioned below).
   - Intro column `col-lg-4.offset-lg-3` + `div.section-tittle`: `p` "Do
     you want to be seen on the internet? I can increase the quality and
     the quantity of traffic through your website." (18px/300 `#202020`).
   - Grid (2×2, alternating `col-lg-5.col-md-6` and
     `offset-lg-1.col-lg-5.col-md-6` rows): four `div.single-services1.mb-50`
     cards — `div.services-ion` (circular blue-outlined icon badge per
     screenshot; source uses `services1–4.svg` → lucide: e.g. `PenLine`
     Blogging, `Search`/`TrendingUp` SEO Articles, `Mail` Email Marketing,
     `FileText` Web Content Writing) + `div.services-cap`: `h5 > a` title
     (Rubik 24px `#202020` lh 1.4) + `p` description (16px).
     Titles: **Blogging · SEO Articles · Email Marketing · Web Content
     Writing** (source duplicates the copy for the last two — paraphrase).
4. **Quote band** `div.visit-tailor-area.fix` (bg `#FFEA01`):
   - Left `div.tailor-offers`: `a.info-more` "Learn More" + arrow — bg
     `#05f`, white, padding 37px 90px (18px 28px on mobile), font 30px,
     radius 0.
   - Right `div.tailor-details > div.details-sinlge.mb-30`: `h2` quote
     "Never underestimate the power of words to change the way people think
     and feel." + `p` "Do you want to be seen on the internet? I can
     increase the quality and the quantity of traffic through your
     website." + `img` signature (`singnature.png` — recreate as an
     italic script wordmark or picsum).
5. **Testimonials** `div.testimonial-area.testimonial-padding` (pt 110 /
   pb 140) — `container > row.justify-content-center > col-xl-8`:
   - `div.section-tittle.text-center.mb-40`: `h2` "What Our Client Sayes"
     (sic — keep or fix to "Says").
   - `div.h1-testimonial-active.dot-style` (carousel, THREE slides):
     `div.single-testimonial.text-center` — `div.testimonial-caption >
div.testimonial-top-cap`: `img` founder avatar (`testi-logo.png`) + `p`
     quote (22px `#202020` lh 1.5); `div.testimonial-founder`: `div.founder-img`
     - name ("- Robert", "- Gene Jacket", "- Robert"; 14px `#4C526E`) +
       `div.rating` stars. Dots: `.dot-style .slick-dots` white dots with a
       23px `#fff` active ring (verify visibility on the light bg — the CSS
       came from a dark context; if invisible, use dark dots).
6. **Dark stories band** `div.visit-tailor-area2.fix` (bg `#202020`):
   - Left `div.tailor-offers` (width ~50%, bg image `visit_bg2.jpg` cover,
     height 832px): `div.info-man.text-center` (bg `#FFEA01`, padding
     35px 37px): `div.head-cap > h3` "25" (Montserrat 120px `#202020`) +
     `p` "Years of Experience".
   - Right `div.tailor-details` (width 50%, padding 20px 50px 20px 60px):
     `h2` "Read my exemplary stories" (white Montserrat 44px/700, lh 1.2,
     mb 55px, pb 30px) + `div.sinlge-wrapper` (flex): TWO
     `div.single-details` cards (~46–48% width; first has `.left-line`
     decorative class) — `img` (Stories1.jpg / Stories2.jpg, width 100%,
     mb 30px) + `h3 > a` white 24px (hover `#FFEA01`) + `p` excerpt (16px
     gray-ish) + `span` with `far fa-clock` (→ lucide `Clock`) "January 25,
     2021"; then `a.btn_01` "Let's Start Discuss" + arrow — bg `#05f`,
     white, padding 42px 102px, font 24px, radius 0.
7. **Footer** `footer > div.footer-wrapper > div.footer-area.footer-padding`
   (pt 120) — `container > row.justify-content-between.align-items-end`:
   - Left `col-xl-5` > `div.single-footer-caption.mb-50` >
     `div.single-footer-caption.mb-30` > `div.footer-tittle`: `h4`
     "Let's create the content that will engage, excite and inform."
     (Montserrat 50px `#202020`, mb 68px, pb 37px, `::before` 180×6px
     `#05f` underline) + `ul.footer-social`: circular 54px links
     (bg `#202020`, white icons, radius 50%, margin-right 8px; hover →
     white bg + `#202020` icon + rotateY 180° spin) — brand socials
     (facebook/twitter/dribbble etc.) as inline SVG.
   - Right `col-xxl-5` > `div.single-footer-caption.mb-100` >
     `div.footer-menu > ul`: Home / About / Services / Blog / Contact
     (Rubik 18px `#202020`, padding 31px 7px, margin 0 14px).
   - `div.footer-bottom-area > div.footer-border > div.footer-copy-right.text-center`:
     `p` copyright line with heart icon (blue `#05f`) — MUST read
     "Copyright © All rights reserved | Made with Component Dock" linking
     to https://www.componentdock.com/ (the source credits ColorLib; the
     recreation links Component Dock instead, per conventions).

## Task outline

1. **Scaffold** — copy the simplest existing app (e.g. apps/gather or
   apps/aura), rename to `apps/scriber`, package
   `@free-react-templates/scriber`; `npm install` at root (lockfile);
   `public/CNAME` = `scriber.free.componentdock.com`; `"homepage"` in
   package.json; `injectUiSource()` in vite.config.ts; Google Fonts
   `<link>`s (Montserrat 300–800 + Rubik 400–700).
2. **Theme tokens** — `@theme` in index.css: `--color-brand: #FFEA01`,
   `--color-ink: #202020`, `--color-accent: #05f`, `--color-cream: #FCF2EB`;
   fonts `--font-heading` / `--font-body`.
3. **Components** (TDD, 100% coverage):
   - `Header` — transparent → sticky `#0a0a0a`, nav links, mobile menu
     (aria-expanded toggle), script wordmark.
   - `Hero` — cream bg + yellow left panel (absolute positioned block),
     photo bg layer, h1 with bottom border, portrait + intro (woner),
     blue "See My Offers" button (ArrowRight icon).
   - `Services` — kicker + heading + blue underline + intro + 2×2 card
     grid (icon badge, title, description).
   - `QuoteBand` — yellow band, "Learn More" button, quote + paragraph +
     signature (italic script text).
   - `Testimonials` — centered heading + 3-slide carousel (state-based
     dots), avatar / quote / name / rating.
   - `StoriesBand` — dark bg, yellow "25 / Years of Experience" counter
     box, "Read my exemplary stories" + 2 story cards (image, title,
     excerpt, date + Clock icon), "Let's Start Discuss" button.
   - `Footer` — CTA heading + blue underline, social circles, footer menu,
     copyright bar with Component Dock link.
4. **Tests** — scenario-style `it` blocks mirroring the spec Gherkin;
   jsdom MemoryStorage polyfill from apps/cura/src/test/setup.ts if
   needed; 100% coverage.
5. **Gate** — `scripts/verify-app.sh scriber` (typecheck, lint, knip,
   fallow, vitest 100%, build).
6. **Ship** — branch `feat/template-scriber`, PR, squash-merge immediately;
   bookkeep TEMPLATES.md Buckkinnear `[x]` + live URL
   https://scriber.free.componentdock.com + `npm run readme:status`.
