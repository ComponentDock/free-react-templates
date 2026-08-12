# Wordwright (ColorLib Buckkinnear) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-wordwright`.

## Design notes (replication findings)

- **Original:** ColorLib "Buckkinnear" — copywriter / personal brand website
  template (source: https://colorlib.com/wp/template/buckkinnear/).
  TEMPLATES.md has TWO copies of this item (lines 552 and 2383 — mark BOTH
  `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buckkinnear/
  (HTTP 200, ~23.5 KB, title "Copywriter | Template"). Stylesheets:
  `assets/css/style.css` (63.4 KB) + bootstrap.min / owl.carousel /
  slicknav / animate / magnific-popup / fontawesome-all / themify-icons /
  slick / nice-select. Google Fonts `@import` in style.css: **Montserrat**
  (300–800, headings) + **Rubik** (400–700, body). jQuery + slick + slicknav
  - counterup drive the sticky navbar, mobile menu, testimonial carousel,
    and back-top.
- **Screenshot:** `buckkinnear-colorlib-template.jpg` — verified live in a
  browser (vision, full page): dark `#202020` header with WHITE script
  wordmark + white links; hero split — big YELLOW block (`#FFEA01`) on the
  left with huge black Montserrat headline + circular copywriter portrait +
  "Hi, I'm Buck Kinnear" intro + BLUE (`#05f`) band button "See My Offers
  →"; right half = hand-writing photo; cream services 2×2 grid with line
  icons + blue underline under the title; split yellow band (photo + big
  quote + signature, blue "Learn More →" button); cream testimonials
  carousel (5 stars + founder names); DARK `#202020` split band (photo with
  yellow "25 Years of Experience" box + white "Read my exemplary stories" +
  2 story cards); cream footer (50px headline + socials + blue "Let's Start
  Discuss →" + link row + copyright).
- **Visual design:** bold high-contrast copywriter personal-brand aesthetic —
  cream page `#F3F3E8`, near-black `#202020` text, brand yellow `#FFEA01`,
  royal blue `#05f` buttons/underlines, square (radius 0) buttons, Montserrat
  bold condensed headings (hero 60px, section titles 50px, `letter-spacing:
-.05em`), Rubik body.

## Design tokens (from assets/css/style.css + live computed styles)

| Token          | Value                                                                                                                                                                                                                                                                                                | Where                                                                                                                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand yellow   | `#FFEA01`                                                                                                                                                                                                                                                                                            | hero caption block (`.single-slider::before` 55%×82% top-left, z -1), `.visit-tailor-area` bg, `.info-man` box, nav hover, story title hover |
| Brand blue     | `#05f` (rgb(0,85,255))                                                                                                                                                                                                                                                                               | all buttons (`.btn_1` / `.btn_01` / `.info-more`), service title hover, `.section-tittle .line::before` 180×6px underline bar                |
| Near-black     | `#202020`                                                                                                                                                                                                                                                                                            | body text + headings, `.main-header` bg, `.visit-tailor-area2` bg, hero H1 `border-bottom: 3px solid #202020`, footer headline               |
| Sticky header  | `#0a0a0a`                                                                                                                                                                                                                                                                                            | `.header-sticky.sticky-bar` bg (fixed on scroll, shadow `0 10px 15px rgba(25,25,25,.1)`)                                                     |
| Cream / peach  | `#F3F3E8` (body, testimonials) / `#FCF2EB` (slider-area)                                                                                                                                                                                                                                             | `body`, `.testimonial-area`, `.slider-area`                                                                                                  |
| Star / meta    | stars `#0E1B50`, founder name `#4C526E`, story meta `rgba(243,243,232,0.5)`, footer border `rgba(32,32,32,0.2)`                                                                                                                                                                                      | `.rating ul li` / `span`, `.single-details span`, `.footer-border`                                                                           |
| Fonts          | **'Montserrat', sans-serif** (headings 500/600/700/800) + **'Rubik', sans-serif** (body 300/400/500/600/700)                                                                                                                                                                                         | Google Fonts `<link>`s in index.html                                                                                                         |
| Buttons        | radius 0, bg `#05f`, white text, 1px transparent border; hover = transparent bg + `#05f` border + text                                                                                                                                                                                               | hero `.btn_1` 56px 125px / 30px; footer `.btn_01` 42px 102px / 24px; `.info-more` 37px 90px / 30px (absolute bottom-right of photo)          |
| Section titles | Montserrat 50px weight 700 `letter-spacing: -.05em` mb 30px; `.line` variant: 180×6px `#05f` bar 50px below                                                                                                                                                                                          | `.section-tittle h2` + `.line::before`                                                                                                       |
| Hero H1        | Montserrat 60px weight 700 `letter-spacing: -3px`, `border-bottom: 3px solid #202020`, pb 45px mb 30px                                                                                                                                                                                               | `.slider-area .hero-caption h1`                                                                                                              |
| Section rhythm | `.section-padding` 100px 0; `.testimonial-padding` 110px 0 140px; `.footer-padding` 120px 0 0; hero `.slider-height` 880px                                                                                                                                                                           | services / testimonials / footer / hero                                                                                                      |
| Service cards  | SVG icon (mb 24px) + H5 Rubik 24px weight 600 link (hover `#05f`) + p 16px weight 300; 2×2 grid with `offset-lg-1` stagger                                                                                                                                                                           | `.single-services1.mb-50`: Blogging / SEO Articles / Email Marketing / Web Content Writing                                                   |
| Quote band     | `.visit-tailor-area` yellow flex; photo 49% × 850px (`visit_bg.jpg`) + blue `.info-more` bottom-right; text side h2 + p + signature img                                                                                                                                                              | `.tailor-offers` + `.tailor-details .details-sinlge`                                                                                         |
| Testimonials   | cream bg, centered title, slick carousel ×3: quote p 22px weight 500 underline + founder img + 5 stars `#0E1B50` + name span 14px `#4C526E`; dots                                                                                                                                                    | `.h1-testimonial-active`, `.single-testimonial.text-center`, `.rating ul`                                                                    |
| Stories band   | `.visit-tailor-area2` `#202020` flex; photo 50% × 832px (`visit_bg2.jpg`) + centered yellow `.info-man` (275px: H3 120px weight 800 "25" + p "Years of Experience"); text side h2 white 44px weight 700 + two `.single-details` (46%/48%: img + h3 a white 24px 700 hover `#FFEA01` + p + meta span) | `.tailor-offers .info-man`, `.tailor-details .sinlge-wrapper`                                                                                |
| Footer         | cream bg, H4 50px weight 700 mb 68 pb 37, 3 circular social links, blue `.btn_01` "Let's Start Discuss", footer-menu 5 links, bottom `border-top 1px rgba(32,32,32,.2)` + centered copyright                                                                                                         | `.footer-area`, `.footer-tittle`, `.footer-social`, `.footer-menu`, `.footer-bottom-area`                                                    |

## Structure (1:1, section order)

1. Header `header > div.header-area.header-transparent` — `div.main-header.header-sticky` (bg `#202020`, padding 0 88px; sticky → `#0a0a0a`, fixed, shadow): `div.col-xl-2` logo left — `a > img.logo.png` (156×35, WHITE script wordmark "Buck Kinnear" → recreate as white script-ish text wordmark "Wordwright"); `div.col-xl-10` `div.main-menu.f-right.d-none.d-lg-block` — `nav > ul#navigation`: FIVE links (Home `index.html`, About, Services, Blog `blog.html`, Contact `contact.html`; white 18px Rubik, padding 31px 7px, hover `#FFEA01`); Blog carries `ul.submenu` (Blog, Blog Details, Elements — 170px, bg `#202020`, top 120%, white 16px links, hover `#FFEA01`); mobile: `div.mobile_menu.d-block.d-lg-none` (slicknav hamburger → slide-down menu).
2. Hero `div.slider-area.position-relative` (bg `#FCF2EB`) — `div.slider-active > div.single-slider.slider-height.slider-bg1.d-flex.align-items-center` (880px, bg image `h1_hero.jpg`; `::before` yellow block 55%×82% top-left, z -1) — `div.container > div.row > div.col-xxl-6.position-relative` `div.hero-caption`:
   - `h1` "Writing Texts That Inspire and Engage your Customers" (Montserrat 60px 700, ls -3px, 3px `#202020` bottom border, pb 45px mb 30px)
   - `section.woner-area` — `div.woner-wrapper`: `img.wow.pulse` circular 160px portrait (`empolye.png`); `div.woner-caption.wow.fadeInUp`: `p` "Hi, I'm Buck Kinnear" (30px Rubik 400) + `h2` "I Write Beautiful and Unmistakable Text." (Rubik 30px 600, mb 12)
   - `a.btn_1.d-none.d-xl-block` **"See My Offers"** (blue `#05f`, 56px 125px padding, 30px, radius 0, absolute bottom-right of caption column, bottom -193px right -60px)
3. Services `div.our-services-area.section-padding` (100px 0, cream body bg) — `div.row`: left `div.col-lg-5.col-xl-4` `div.section-tittle.mb-110` `h2.line` **"What I can write for you and your business"** (50px 700, ls -.05em, `::before` 180×6px `#05f` bar 50px below); right `div.col-lg-4.offset-lg-3` `div.section-tittle` `p` intro ("Do you want to be seen on the internet? …"); then `div.row` 2×2 staggered grid — FOUR `div.single-services1.mb-50` (`col-lg-5` / `offset-lg-1.col-lg-5`): `div.services-ion` SVG icon (`services1..4.svg`, mb 24px) + `div.services-cap` `h5 > a` (Rubik 24px 600, hover `#05f`): **Blogging** / **SEO Articles** / **Email Marketing** / **Web Content Writing** + `p` 16px 300 blurb (Email Marketing + Web Content Writing share the same placeholder copy in the source — keep or vary slightly).
4. Quote band `div.visit-tailor-area.fix` (bg `#FFEA01`, flex, align-center) — left `div.tailor-offers` (bg image `visit_bg.jpg`, 49% width, 850px height, cover) with `a.info-more` **"Learn More"** (blue `#05f`, 37px 90px, 30px, radius 0, absolute bottom 0 right 0); right `div.tailor-details` — `div.details-sinlge.mb-30.wow.fadeInUp`: `h2` quote **"“Never underestimate the power of words to change the way people think and feel.”"** + `p` (18px 400, mb 30) + `img` signature (`singnature.png`).
5. Testimonials `div.testimonial-area.testimonial-padding` (bg `#F3F3E8`, 110px 0 140px) — `div.row.d-flex.justify-content-center > div.col-xl-8.col-lg-9`: `div.section-tittle.text-center.mb-40` `h2` **"What Our Client Sayes"** (sic — source typo, keep or fix) + `div.h1-testimonial-active.dot-style` (slick carousel) THREE `div.single-testimonial.text-center`: `div.testimonial-top-cap` (`img.testi-logo.png` + `p` quote, 22px 500, underline, mb 30) + `div.testimonial-founder` `div.founder-img`: `div.rating` `ul` — FIVE `li` stars (color `#0E1B50`) + `li > span` name (14px `#4C526E` 500).
6. Stories band `div.visit-tailor-area2.fix` (bg `#202020`, flex) — left `div.tailor-offers` (bg image `visit_bg2.jpg`, 50% width, 832px, cover) with `div.info-man.text-center` centered (yellow `#FFEA01` box, 275px wide, py 35 px 37, top 50% translateY(-50%), margin auto): `div.head-cap` `h3` **"25"** (Montserrat 120px 800, lh 1) + `p` **"Years of Experience"** (18px); right `div.tailor-details` — `h2` white **"Read my exemplary stories"** (44px 700, pb 30 mb 55) + `div.sinlge-wrapper`: TWO `div.single-details` (first `left-line.wow.fadeInUp.mb-20`, 46%/48% width): `img` (`Stories1.jpg` / `Stories2.jpg`) + `h3 > a` white 24px 700 (hover `#FFEA01`): **Duis aute irure** / **Tempora incidunt ut** + `p` white 16px + `span` meta (rgba(243,243,232,0.5) 16px).
7. Footer `footer > div.footer-wrapper > div.footer-area.footer-padding` (cream body bg, 120px 0 0) — `div.container > div.row.justify-content-between.align-items-end`: left `div.col-xl-5.col-lg-6` `div.single-footer-caption.mb-50` > `div.single-footer-caption.mb-30`: `div.footer-tittle` `h4` **"Let's create the content that will engage, excite and inform."** (50px 700, mb 68 pb 37) + `ul.footer-social` THREE circular icon links (fontawesome — Facebook, LinkedIn, Instagram; inline SVG in recreation); right `div.col-xxl-5.col-xl-6` `div.single-footer-caption.mb-100`: `a.btn_01` **"Let's Start Discuss"** (blue `#05f`, 42px 102px, 24px, radius 0) + `div.footer-menu` `nav > ul` FIVE links (Home / About / Services / Blog / Contact); bottom `div.footer-bottom-area` > `div.footer-border` (`border-top 1px rgba(32,32,32,.2)`, pt 18) > `div.footer-copy-right.text-center` `p`: "Copyright © <year> All rights reserved | This template is made with ♥ by Colorlib" (credit kept per CC BY 3.0, recreated as our own text + Component Dock link).
8. Back-top `div#back-top > a` (scroll-to-top control, icon).

## Tasks (implementation order)

1. Scaffold `apps/wordwright` (copy simplest existing app; package
   `@free-react-templates/wordwright`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/wordwright" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-brand: #FFEA01`,
   `--color-accent: #05f`, `--color-ink: #202020`, `--color-sticky: #0a0a0a`,
   `--color-cream: #F3F3E8`, `--color-peach: #FCF2EB`,
   `--font-display: 'Montserrat', sans-serif`, `--font-body: 'Rubik',
sans-serif`. Add Montserrat (500,600,700,800) + Rubik (300,400,500,600)
   Google Fonts `<link>`s to `index.html`.
4. `Header.tsx` — `bg-ink` bar (`#202020`, px-[88px] desktop): left white
   script-ish wordmark "Wordwright" (italic font or a script Google font —
   source logo is a cursive signature; keep legible white text); right 5
   links (Home, About, Services, Blog, Contact — white, text-lg, py-[31px]
   px-2, hover `text-brand`); Blog dropdown (Blog / Blog Details / Elements)
   on hover; sticky on scroll → `bg-sticky` (`#0a0a0a`) + shadow
   (`shadow-[0_10px_15px_rgba(25,25,25,0.1)]`), fixed top; mobile (< lg):
   hamburger (lucide `Menu`) toggling a slide-down menu with the same links,
   aria-expanded.
5. `Hero.tsx` — `slider-area` bg `bg-peach`; full-width 880px-class hero:
   bg image (picsum seed wordwright-hero ~1600×900) with a yellow block
   overlay on the top-left (`absolute` top-0 left-0 w-[55%] h-[82%]
   `bg-brand`, -z-10, on the caption container); content column
   (`max-w-…/col-6`): H1 "Writing Texts That Inspire and Engage your
   Customers" (Montserrat font-bold text-[60px] leading-none,
   `tracking-[-3px]`, `border-b-[3px] border-ink`, pb-[45px] mb-[30px]);
   below: circular 160px portrait (picsum seed wordwright-portrait, rounded-full)
   - "Hi, I'm Wordwright" (text-[30px]) + "I Write Beautiful and
     Unmistakable Text." (Rubik text-[30px] font-semibold); CTA `ButtonLink`
     "See My Offers" — `bg-accent` (`#05f`) text-white rounded-none,
     px-[125px] py-[56px] text-[30px], absolute bottom-right of the caption
     column, hover: transparent bg + accent border + accent text; responsive:
     stack + scale on mobile.
6. `Services.tsx` — `py-[100px]` cream section: title block "What I can
   write for you and your business" (Montserrat text-[50px] font-bold
   tracking-[-0.05em] + 180×6px `bg-accent` bar below) beside intro
   paragraph; 2×2 staggered grid (lg:grid-cols-2 with `lg:col-start-2` on
   the right column pair): 4 cards — icon (lucide: `FileText` Blogging,
   `Search` SEO Articles, `Mail` Email Marketing, `FileEdit`/`Layout`
   Web Content Writing), title link (Rubik text-2xl font-semibold hover
   `text-accent`), blurb (text-base font-light text-ink/90); 1-col mobile.
7. `QuoteBand.tsx` — `bg-brand` (`#FFEA01`) flex band: photo side
   (lg:w-1/2 h-[850px] bg-cover, picsum seed wordwright-visit ~1200×850)
   with absolute bottom-right square blue ButtonLink "Learn More"
   (`bg-accent` rounded-none, px-[90px] py-[37px] text-[30px]); text side:
   quote H2 (font-bold text-ink) + paragraph + signature (recreate the
   signature as an italic script text line or picsum placeholder image);
   stack on mobile.
8. `Testimonials.tsx` — `bg-cream` (`#F3F3E8`) section, `pt-[110px]
pb-[140px]`: centered title "What Our Client Sayes" (Montserrat 50px
   bold); carousel (state-driven, lucide ChevronLeft/ChevronRight or dots —
   source uses slick dots) of 3 slides: quote (text-[22px] font-medium
   underline, text-ink), founder avatar (rounded-full, picsum seed
   wordwright-client-N), 5 stars (lucide `Star` fill `#0E1B50`), name span
   (text-[14px] text-[#4C526E]).
9. `Stories.tsx` — `bg-ink` (`#202020`) flex band: photo side
   (lg:w-1/2 h-[832px] bg-cover, picsum seed wordwright-stories ~1200×832)
   with centered yellow box (absolute left/right-0 top-1/2 -translate-y-1/2
   mx-auto w-[275px] `bg-brand` py-[35px] px-[37px] text-center): "25"
   (Montserrat text-[120px] font-extrabold leading-none) + "Years of
   Experience" (18px); text side: white H2 "Read my exemplary stories"
   (Montserrat text-[44px] font-bold pb-[30px] mb-[55px]) + 2 story cards
   (lg:flex gap; card: rounded image (picsum wordwright-story-N), white
   title link text-2xl font-bold hover `text-brand` ("Duis aute irure" /
   "Tempora incidunt ut"), white blurb, meta span
   `text-[rgba(243,243,232,0.5)]`); stack on mobile.
10. `Footer.tsx` — cream (`bg-cream`) footer, `pt-[120px]`: row
    (lg:flex justify-between items-end): left — H4 "Let's create the
    content that will engage, excite and inform." (Montserrat text-[50px]
    font-bold mb-[68px] pb-[37px]) + 3 circular social icon links (inline
    SVG Facebook / LinkedIn / Instagram); right — square blue ButtonLink
    "Let's Start Discuss" (`bg-accent` rounded-none, px-[102px] py-[42px]
    text-2xl) + nav row (Home / About / Services / Blog / Contact); bottom
    bar (`border-t border-ink/20 pt-[18px]`): centered copyright
    "Copyright © <year> All rights reserved | Made with <Heart> by
    **Component Dock**" — link https://www.componentdock.com/ (replaces
    source's ColorLib credit — REQUIRED by AGENTS.md, no colorlib strings
    in the app).
11. `BackToTop.tsx` — fixed bottom-right scroll-to-top button (lucide
    `ArrowUp`), appears after scrolling.
12. `App.tsx` — compose Header + main (Hero, Services, QuoteBand,
    Testimonials, Stories) + Footer + BackToTop; document title "Wordwright
    — Copywriter Template".
13. Tests: one describe per component, Gherkin-mirroring scenarios from
    spec.md; 100% coverage lines/functions/branches/statements.
14. Run `scripts/verify-app.sh wordwright` (typecheck + lint + coverage
    tests + build) until green.
15. Update TEMPLATES.md lines 552 AND 2383 `[ ]` → `[x]` (BOTH copies)
    with surge URL + homepage after deploy; `npm run readme:status`;
    commit `feat: Wordwright — copywriter template (ColorLib Buckkinnear)`;
    PR → main → merge immediately.

## Fidelity gotchas

- **The hero yellow block is a `::before` pseudo-element** on
  `.single-slider` (55% × 82%, top-left, z-index -1) — recreate as an
  absolutely-positioned yellow div behind the caption column, NOT a section
  background. It does NOT cover the full hero, only the upper-left area.
- **All buttons are square** (border-radius 0) — blue `#05f` fill, white
  text, hover flips to transparent bg + `#05f` border + `#05f` text.
- **Logo is a WHITE cursive signature image** (156×35) on the dark bar —
  the recreation's wordmark must read as a script signature, not a block
  logo; keep it white on `#202020` (and on `#0a0a0a` when sticky).
- **Blog has a hover dropdown** (Blog / Blog Details / Elements) — the
  submenu is 170px, bg `#202020`, appears at top 120% below the link.
- **Nav links are 18px Rubik with large vertical padding** (31px 7px) and
  hover `#FFEA01`; the nav is hidden below lg (desktop-only), mobile uses
  a slicknav slide-down menu.
- **`.section-tittle h2` = 50px Montserrat 700 with `letter-spacing:
-.05em`** and the `.line` variant adds a 180×6px `#05f` bar ~50px below
  (`.line::before`) — the services title uses it; the mb-110 on the wrapper
  is what creates the big gap before the grid.
- **Testimonial title typo**: the source literally says "What Our Client
  Sayes". Fix to "What Our Client Says" or keep — document the choice in
  the PR.
- **Email Marketing and Web Content Writing share identical placeholder
  copy** in the source — paraphrase one so the two cards differ slightly
  (content-kind latitude), or keep both identical for exact fidelity.
- **Service grid stagger**: cards sit in `col-lg-5` / `offset-lg-1
col-lg-5` pairs — the right column is offset by one column, creating the
  staggered 2×2 look.
- **Quote band photo width 49%, stories band photo width 50%** — the bands
  are flex containers (`display:flex; align-items:center`), text side takes
  the remainder.
- **`.info-man` box is centered over the photo** (top 50% + translateY(-50%),
  left/right 0, margin auto, width 275px) — "25" is 120px Montserrat 800.
- **Footer headline is 50px** (same size as section titles) with mb 68px /
  pb 37px — it is NOT a small footer heading; the footer is spacious.
- **TWO TEMPLATES.md copies** (552, 2383): BOTH must be marked `[x]`.
