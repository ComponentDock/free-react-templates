# Template: Wordwright (Copywriter / Personal Portfolio Template)

## Purpose

Wordwright is a single-page copywriter portfolio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Buckkinnear" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Buckkinnear" — copywriter / personal brand website
  template (source: https://colorlib.com/wp/template/buckkinnear/).
  TEMPLATES.md has TWO copies of this item (lines 552 — Bootstrap 5 category
  and 2383 — Personal category; mark BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/buckkinnear/
  (HTTP 200, ~23.5 KB rendered DOM, title "Copywriter | Template").
  Stylesheets: `assets/css/style.css` (63.4 KB, extracted) + bootstrap.min /
  owl.carousel / slicknav / animate / magnific-popup / fontawesome-all /
  themify-icons / slick / nice-select. Fonts: Google Fonts `@import` in
  style.css — **'Montserrat'** (300–800, headings) + **'Rubik'** (400–700,
  body) — recreate with Google Fonts `<link>`s. jQuery + slick + owl +
  slicknav + counterup + waypoints drive the sticky navbar, mobile
  slide-down menu, hero caption reveal, testimonial carousel, and back-top.
- **Screenshot:** `buckkinnear-colorlib-template.jpg` (TEMPLATES.md lines
  552 / 2383) — verified live in a browser (vision analysis, full page):
  dark near-black header bar (`#202020`) with a WHITE script wordmark left
  and white nav links right (Home, About, Services, Blog, Contact); hero =
  split layout: left is a big bright YELLOW block (`#FFEA01`) with a huge
  black Montserrat headline "Writing Texts That Inspire and Engage your
  Customers", a circular portrait of the copywriter (glasses), "Hi, I'm Buck
  Kinnear" + "I Write Beautiful and Unmistakable Text.", and a bright BLUE
  (`#05f`) band button "See My Offers →"; right half is a close-up photo of
  a hand holding a pencil writing on paper; below: cream services section
  (4 cards in 2×2: Blogging / SEO Articles / Email Marketing / Web Content
  Writing, each with a flat line-icon) with a blue underline bar under the
  section title; then a full-width split band — photo left (young man with
  headphones) + solid yellow right with a big quote and signature, blue
  "Learn More →" button overlapping the photo's bottom edge; cream
  testimonial section (carousel with 5-star ratings + founder names);
  then a DARK `#202020` split band — photo left (hands writing in a
  notebook) with a yellow "25 Years of Experience" box centered over it,
  dark right with white "Read my exemplary stories" + two story cards;
  footer on cream: huge 50px headline "Let's create the content that will
  engage, excite and inform." + social icons left + big blue "Let's Start
  Discuss →" button right + link row + copyright line.
- **Visual design (from DOM + CSS tokens + live computed styles + rendered
  screenshot):** bold, high-contrast "copywriter personal brand" aesthetic —
  cream page (`#F3F3E8` body), near-black text `#202020`, **brand yellow
  `#FFEA01`** (hero caption block behind the left column, visit-tailor-area
  band, "25 Years" info box, nav hover, story-title hover), **royal blue
  `#05f`** (all buttons + section-title underline bar + service-title
  hover), **near-black `#202020`** (headings/text, header bar, dark
  visit-tailor-area2 band, hero H1 bottom border) with sticky header `#0a0a0a`,
  hero slider bg `#FCF2EB`, testimonial bg `#F3F3E8`. Montserrat bold
  condensed headings (hero 60px, section titles 50px with `letter-spacing:
-.05em`), Rubik body; buttons square (radius 0), blue fill, white text,
  hover = transparent bg + blue border. The demo brands itself "Buck
  Kinnear"; recreation uses the NEW name **Wordwright** with a script-style
  white wordmark in the header.

## Design tokens (from assets/css/style.css + live computed styles)

| Token          | Value                                                                                                                                                                                                                                                                                                                       | Where                                                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brand yellow   | `#FFEA01`                                                                                                                                                                                                                                                                                                                   | `.slider-area .single-slider::before` hero block (55% × 82%, top-left, z -1), `.visit-tailor-area` bg, `.info-man` box, nav `li:hover>a`, story `h3 a:hover`, section-tittle `>span` kicker |
| Brand blue     | `#05f` (rgb(0,85,255))                                                                                                                                                                                                                                                                                                      | `.btn_1` / `.btn_01` / `.info-more` (See My Offers / Learn More / Let's Start Discuss), `.services-cap h5 a:hover`, `.section-tittle .line::before` 180×6px underline bar                   |
| Near-black     | `#202020`                                                                                                                                                                                                                                                                                                                   | `body` text + all headings, `.main-header` bg, `.visit-tailor-area2` bg, hero H1 `border-bottom: 3px solid #202020`, footer-tittle h4                                                       |
| Sticky header  | `#0a0a0a`                                                                                                                                                                                                                                                                                                                   | `.header-area .header-sticky.sticky-bar` bg (fixed on scroll, shadow `0 10px 15px rgba(25,25,25,.1)`)                                                                                       |
| Cream / peach  | `#F3F3E8` (body-bg, testimonial), `#FCF2EB` (slider-area)                                                                                                                                                                                                                                                                   | `body`, `.testimonial-area`, `.slider-area`                                                                                                                                                 |
| Star / meta    | stars `#0E1B50`, founder name `#4C526E`, story meta `rgba(243,243,232,0.5)`, footer border `rgba(32,32,32,0.2)`                                                                                                                                                                                                             | `.rating ul li`, `.rating ul li span`, `.single-details span`, `.footer-border` border-top                                                                                                  |
| Fonts          | **'Montserrat', sans-serif** (headings 500/600/700/800) + **'Rubik', sans-serif** (body 300/400/500/600/700)                                                                                                                                                                                                                | `h1-h6` Montserrat, `body` Rubik 16px; Google Fonts `<link>`s in the recreation                                                                                                             |
| Buttons        | radius **0**, bg `#05f`, white text, `border: 1px solid transparent`; hover `background: none; border-color: #05f; color: #05f`                                                                                                                                                                                             | `.btn_1` (hero) 56px 125px padding, 30px; `.btn_01` (footer) 42px 102px, 24px; `.info-more` 37px 90px, 30px, absolute bottom-right of the photo                                             |
| Section titles | Montserrat 50px, weight 700, `letter-spacing: -.05em`, mb 30px; `.line` variant adds a 180×6px `#05f` bar 50px below                                                                                                                                                                                                        | `.section-tittle h2`, `.section-tittle .line::before`                                                                                                                                       |
| Hero H1        | Montserrat 60px weight 700, `letter-spacing: -3px`, `border-bottom: 3px solid #202020`, padding-bottom 45px, mb 30px                                                                                                                                                                                                        | `.slider-area .hero-caption h1`                                                                                                                                                             |
| Section rhythm | `.section-padding` 100px 0; `.testimonial-padding` 110px 0 140px; `.footer-padding` 120px 0 0; hero `.slider-height` 880px                                                                                                                                                                                                  | services / testimonials / footer; hero                                                                                                                                                      |
| Service cards  | icon (SVG, mb 24px) + H5 link Rubik 24px weight 600 (hover `#05f`) + p 16px weight 300; 2×2 grid with `offset-lg-1` stagger                                                                                                                                                                                                 | `.single-services1.mb-50` (Blogging / SEO Articles / Email Marketing / Web Content Writing)                                                                                                 |
| Quote band     | `.visit-tailor-area` yellow flex; photo side 49% width 850px (`visit_bg.jpg`) + blue `.info-more` button absolute bottom-right; text side: h2 (weight 700) + p + signature image                                                                                                                                            | `.tailor-offers` + `.tailor-details` (`details-sinlge`)                                                                                                                                     |
| Testimonials   | centered title + slick carousel, 3 slides: quote p 22px weight 500 underline + founder img + 5-star rating (li color `#0E1B50`) + name span 14px `#4C526E`; dots                                                                                                                                                            | `.h1-testimonial-active`, `.single-testimonial.text-center`, `.rating ul`                                                                                                                   |
| Stories band   | `.visit-tailor-area2` `#202020` flex; photo side 50% 832px (`visit_bg2.jpg`) with centered yellow `.info-man` box (275px: H3 120px weight 800 "25" + p "Years of Experience"); text side: h2 white 44px weight 700 + two `.single-details` cards (46%/48% width: img + h3 a white 24px 700 hover `#FFEA01` + p + meta span) | `.tailor-offers .info-man`, `.tailor-details .sinlge-wrapper`                                                                                                                               |
| Footer         | cream bg, H4 50px weight 700 ("Let's create the content…") with mb 68 pb 37; 3 circular social icon links; blue `.btn_01` "Let's Start Discuss" right; footer-menu 5 links; bottom bar `border-top 1px rgba(32,32,32,.2)` + centered copyright                                                                              | `.footer-area`, `.footer-tittle h4`, `.footer-social`, `.footer-menu`, `.footer-bottom-area`                                                                                                |
| Icons (source) | fontawesome + themify (source) → lucide-react / inline SVG: document/pen (Blogging), magnifier (SEO), envelope (Email), layout-doc (Web Content), star ratings, arrow-right on buttons, brand socials (Facebook/LinkedIn/Instagram — lucide removed brand glyphs, use inline SVG)                                           | services icons, rating, button arrows, footer socials                                                                                                                                       |

## Requirements

### Requirement: Dark sticky header with wordmark and navigation

The system SHALL render a near-black header bar with a white script
wordmark on the left, white navigation links on the right (including a Blog
dropdown), and a sticky fixed state on scroll.

#### Scenario: Desktop header

- **GIVEN** the Wordwright page is rendered
- **WHEN** the page loads
- **THEN** a header bar with background `#202020` SHALL show the white
  wordmark "Wordwright" on the left
- **AND** white uppercase-free links Home, About, Services, Blog, and
  Contact SHALL be shown on the right
- **AND** hovering a link SHALL turn it brand yellow `#FFEA01`
- **AND** the Blog link SHALL expose a dropdown (Blog, Blog Details,
  Elements) on hover

#### Scenario: Sticky header

- **GIVEN** the page is scrolled past the hero
- **WHEN** the header becomes fixed
- **THEN** it SHALL switch to the darker `#0a0a0a` background with a subtle
  drop shadow and remain at the top of the viewport

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a mobile menu SHALL open showing the same navigation links
- **AND** pressing the toggle again SHALL close it

### Requirement: Hero with yellow caption block

The system SHALL render a full-width hero with a background photo, a large
yellow block behind the left content column, a bordered headline, a circular
portrait with an intro line, and a large blue CTA button.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show a full-width background photo (880px class
  height) with a solid yellow `#FFEA01` block covering the upper-left area
  behind the caption
- **AND** the headline "Writing Texts That Inspire and Engage your
  Customers" SHALL render in Montserrat 60px weight 700 with a 3px
  near-black bottom border
- **AND** a circular portrait with the intro "Hi, I'm Wordwright" and "I
  Write Beautiful and Unmistakable Text." SHALL appear below the headline
- **AND** a large square blue button labeled "See My Offers" SHALL hang at
  the bottom of the caption column
- **AND** on a narrow viewport the hero SHALL stack the content and scale
  the photo

### Requirement: Services grid

The system SHALL render a section titled "What I can write for you and your
business" with an intro paragraph and a 2×2 grid of four service cards,
each with a flat icon, an uppercase-free title link, and a blurb.

#### Scenario: Services content

- **GIVEN** the services section is displayed
- **WHEN** the page loads
- **THEN** the section title SHALL render in Montserrat 50px weight 700 with
  a 180×6px blue underline bar offset below it
- **AND** an intro paragraph SHALL appear beside the title
- **AND** four cards SHALL be shown in a staggered 2-column grid: Blogging,
  SEO Articles, Email Marketing, and Web Content Writing
- **AND** each card SHALL show an icon above a Rubik 24px weight 600 title
  link and a 16px weight-300 blurb
- **AND** hovering a card title SHALL turn it brand blue `#05f`
- **AND** on a narrow viewport the grid SHALL collapse to one column

### Requirement: Yellow quote band

The system SHALL render a solid yellow split band with a background photo on
one side carrying a blue "Learn More" button, and on the other side a quote
heading, a paragraph, and a signature image.

#### Scenario: Quote band content

- **GIVEN** the quote band is displayed
- **WHEN** the page loads
- **THEN** the band SHALL have a solid yellow `#FFEA01` background
- **AND** the photo side SHALL show the background image with a square blue
  button labeled "Learn More" anchored at its bottom edge
- **AND** the text side SHALL show the quote "“Never underestimate the power
  of words to change the way people think and feel.”", a paragraph, and a
  signature image
- **AND** on a narrow viewport the photo and text SHALL stack

### Requirement: Testimonials carousel

The system SHALL render a cream section titled "What Our Client Sayes" with
a carousel of three testimonial slides, each with a quote, a founder image,
a five-star rating, and the founder's name.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** a centered section title SHALL appear above the carousel
- **AND** each slide SHALL show a quote paragraph, a founder image, five
  dark-navy (`#0E1B50`) stars, and the founder name in `#4C526E`
- **AND** carousel dots SHALL cycle between the three testimonials

### Requirement: Dark stories band

The system SHALL render a near-black split band with a photo side carrying a
centered yellow "25 Years of Experience" box, and a dark text side with a
white heading and two story cards (image, white title link, blurb, meta).

#### Scenario: Stories band content

- **GIVEN** the stories band is displayed
- **WHEN** the page loads
- **THEN** the band SHALL have a near-black `#202020` background
- **AND** the photo side SHALL center a yellow `#FFEA01` box with "25" in
  huge Montserrat 800 weight and "Years of Experience" beneath it
- **AND** the text side SHALL show the white heading "Read my exemplary
  stories" followed by two story cards
- **AND** each story card SHALL show an image, a white 24px title link
  (hover `#FFEA01`), a white blurb, and a muted meta line
- **AND** on a narrow viewport the photo and text SHALL stack

### Requirement: Footer with CTA, socials, and links

The system SHALL render a cream footer with a large headline, social icon
links, a large blue "Let's Start Discuss" button, a navigation link row, and
a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the headline "Let's create the content that will
  engage, excite and inform." in Montserrat 50px weight 700
- **AND** three circular social icon links (Facebook, LinkedIn, Instagram)
  SHALL appear below the headline
- **AND** a large square blue button labeled "Let's Start Discuss" SHALL
  appear on the right
- **AND** a navigation row SHALL list Home, About, Services, Blog, and
  Contact
- **AND** the bottom bar SHALL show the copyright line with the current
  year, a neutral design credit, and a link to Component Dock (brand
  attribution, per the repo convention that app code never names the source
  design studio)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark,
a scroll-to-top control, and a document title.

#### Scenario: Full page render

- **GIVEN** the Wordwright app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, services, quote band,
  testimonials, stories band, and footer in order
- **AND** the document title SHALL be "Wordwright — Copywriter Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/wordwright`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/wordwright`)
- [ ] Section order matches the reference 1:1 (header → hero → services → quote band → testimonials → stories band → footer)
- [ ] Design tokens in `@theme` (brand yellow #FFEA01, brand blue #05f, near-black #202020, sticky #0a0a0a, cream #F3F3E8 / #FCF2EB, Montserrat + Rubik fonts)
- [ ] Header: `#202020` bar, white script wordmark, 5 white links with Blog dropdown, hover `#FFEA01`, sticky `#0a0a0a` + shadow, mobile hamburger menu
- [ ] Hero: 880px bg photo + yellow 55%×82% top-left block, 60px Montserrat H1 with 3px `#202020` bottom border, circular portrait + "Hi, I'm Wordwright" intro, square blue "See My Offers" button
- [ ] Services: 50px title + 180×6px `#05f` underline bar, intro paragraph, 2×2 staggered grid of 4 cards (icon + 24px title link hover `#05f` + blurb)
- [ ] Quote band: `#FFEA01` bg, photo + square blue "Learn More" button bottom-right, quote H2 + paragraph + signature image
- [ ] Testimonials: cream bg, "What Our Client Sayes" title, 3-slide carousel (quote + founder img + 5 stars `#0E1B50` + name `#4C526E`), dots
- [ ] Stories band: `#202020` bg, photo + centered yellow "25 Years of Experience" box, white "Read my exemplary stories" heading, 2 story cards (white title link hover `#FFEA01`, blurb, muted meta)
- [ ] Footer: cream, 50px headline, 3 social icons, square blue "Let's Start Discuss" button, 5-link row, copyright + Component Dock link
- [ ] Responsive: hero stacks, services 1-col, quote/stories bands stack, mobile menu works
