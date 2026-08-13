# Template: Domily (Real Estate Template)

## Purpose

Domily is a real-estate / modular-homes marketplace one-page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Homofy" template design (see TEMPLATES.md — appears 2×: lines
590 and 2596; both rows point to the same source, one prep covers all;
verified with `grep -c 'wp/template/homofy/'` = 2), built under a DIFFERENT
name (Domily — domus, Latin for home + "-ly", matching the project's naming
pattern like lendly/hoodly/shiply) per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/homofy/ (Real Estate category,
"Homofy" — a modular home marketplace one-pager: featured-properties
carousel, about, why-choose-us grid, testimonials, agents carousel,
newsletter, footer)
Preview URL: https://preview.colorlib.com/theme/homofy/

## Design reference (replication findings)

- **Original:** ColorLib "Homofy" (`<title>Real Estate</title>`). A
  real-estate one-pager with a navy + gold (`#040F2E` / `#FEC82F`) palette on
  white: a white sticky header with a thin 6px gold top line, a "HOMOFY"
  wordmark (gold house icon), navy links (Home · About · Properties · Blog ·
  Contact), a search toggle, and a gold "Call Us: 10 (23) 252 3583" button; a
  split hero over a modern-home photo — left half a dark navy panel carrying
  the white serif headline "Browse the Top **Modern Modular** Homes" (gold
  span) plus a gold-outline square "Browse Home Now" button, right side the
  photo with a vertical gold "View Promo Video" tab + circular play icon; a
  "Display Latest & Featured Properties" carousel of 4+ property cards
  (photo, navy price `$ 6728`, type title, blurb, and a bottom spec row with
  bed/bath/building icons — 2 Bedroom · 2 Bathroom · 1050 Sq Ft); a split
  About section (photo left on `#FFF6EE`, "About Us" + 25-years headline +
  2 paragraphs + navy-outline "Learn More" right); a 4-column "Why Choose
  Us" grid (icons + headings, separated by `#C9D6CB` borders) with a solid
  navy "Browse Propertise" button centered below; a split Testimonials
  section (serif quote carousel + founder avatar/name left, tall house photo
  right); an "Our Agents" carousel of headshot cards (3 circular navy socials
  per card, gold on hover); a dark navy `#040F2E` "Subscribe Newsletter"
  split band (photo left, gold square "Subscribe" button right); and a light
  footer (brand + socials, Navigation/Services/Support/Contact Us columns,
  `#F9FAFB` copyright bar). Primary gold `#FEC82F` + navy `#040F2E`/`#122C77`
  on white; Shippori Mincho serif headings + Roboto body.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/homofy/
  (HTTP 200, ~38 KB HTML fetched; `assets/css/style.css` ~128 KB parsed for
  tokens — the page also imports bootstrap.min.css, owl.carousel.min.css,
  slicknav.css, animate.min.css, magnific-popup.css, fontawesome-all.min.css,
  themify-icons.css, slick.css, nice-select.css; site is jQuery + Bootstrap +
  slick/owl carousels, NOT Tailwind). Fonts: "Roboto" (body, 11 uses) +
  "Shippori Mincho" (headings, 11 uses) — recreate via Google Fonts
  `<link>`s in index.html (do NOT copy font files).
- **Screenshot note:** `homofy-colorlib-template.jpg` (1200×946) MATCHES the
  live template: white nav with thin gold line, black "HOMOFY" wordmark +
  gold house icon, gold "Call Us" button on the right; hero = bright modern
  patio home photo (glass walls, outdoor dining) with a dark navy overlay
  panel on the left holding "Browse the Top Modern Modular Homes" (gold
  "Modern" span), white subtext, and the outline "Browse Home Now" button;
  vertical gold strip on the right edge of the hero with a play icon; below,
  three property cards in a row with navy prices (`$ 6728`), carousel arrows.
  The live preview DOM + parsed stylesheet are the authoritative reference;
  the screenshot confirms palette + layout. (NOTE: one browser pass of the
  LIVE page rendered the nav dark — the shipped CSS `.header-area{background:
#fff}` and the ColorLib screenshot both show a WHITE header; use white.)

### Section structure (from the live DOM, top to bottom)

1. `header` > `div.header-area.header-sticky` (white bg, `padding:16px 0`,
   `::after` = 6px gold `#FEC82F` bar at top; sticky on scroll with shadow) >
   `div.main-header` > `div.container-fluid` > `div.d-flex.align-items-center
.justify-content-between.flex-wrap`:
   - `div.header-info-left` > `div.logo` > `a` > `img` (logo.png → Domily
     wordmark: gold house icon + dark text).
   - `div.header-righ.d-flex` > `div.main-menu.d-none.d-lg-block` > `nav` >
     `ul#navigation`: Home (index.html) · About (about.html) · Properties
     (properties.html) · Blog (dropdown: Blog, Blog Details, Elements) ·
     Contact (contact.html) — `a` 18px/500 `#040F2E`, padding 26px 9px.
   - `a` "Call Us: 10 (23) 252 3583" (gold `#FEC82F` button, dark text).
   - Search toggle (`#search_input_box` overlay: input "Search Here" +
     submit + close).
2. `section.slider-area` > `div.slider-active` > `div.single-slider
.slider-bg1.hero-overly.slider-height` (min-height 800px, cover bg
   `h1_hero1.jpg` — modern patio home; `hero-overly::before` = horizontal
   dark gradient `rgba(25,40,57,0.6)` → `0.1`) > `div.container` >
   `div.row` > `div.col-xxl-5.col-xl-6.col-lg-7.col-md-9` >
   `div.hero-caption` (relative; `::before` = navy panel `#040F2E`, width
   114%, height 223%, top -225px, left 0; z-index -1):
   - `h1` (54px/600, white, line-height 1.1) "Browse the Top" +
     `span` (gold `#FEC82F`, display block) "Modern Modular" + "Homes".
   - `p` "Homofy is a modular home marketplace that helps you find, compare,
     and purchase a prefab modular home." (white `#CCD2E1`, 20px/300,
     margin-bottom 45px).
   - `a.border-btn.hero-btn` "Browse Home Now" (1px solid `#FEC82F`, gold
     text, radius 0, padding 18px 41px, 18px/500, letter-spacing 1px,
     overflow-hidden fill-on-hover).
   - `div.support-img-cap`: `span` "View Promo Video" (Shippori Mincho,
     20px/600, bg `#FEC82F`, color `#040F2E`, padding 34px 60px 34px 92px —
     the vertical gold tab) + `div.video-icon` > `a.popup-video.btn-icon`
     (circular play icon, links to a YouTube promo video → client-side
     modal or plain button).
3. `section.latest-items.section-padding` > `div.container` >
   `div.row.justify-content-center` > `div.col-xxl-7.col-xl-7` >
   `div.section-tittle.mb-50.text-center` (span "Properties" + `h2`
   "Display Latest & Featured Properties" + `p` subtitle) — then
   `div.items-active` (slick carousel, arrows + dots; 3 visible on
   desktop) of 4+ `div.single-cat.mb-30` cards (margin 0 12px):
   - `div.cat-img` — property photo (items1.jpg → picsum).
   - `div.cat-cap` (border 1px solid `#BECCD6`, box-shadow
     `0 10px 20px rgba(0,0,0,0.05)`):
     - `div.cap-top` (padding 30px 20px 25px): `span` "$ 6728"
       (16px, `#122C77`), `h5 > a` "Appartment"/"Office"/"Classic home"
       (20px/500 `#071112`, hover `#040F2E`), `p` blurb (`#5E5E5E` 16px/300).
     - `div.pricing.d-flex.justify-content-between.align-items-center`
       (padding 11px 20px, border-top 1px solid `#BECCD6`): 3 ×
       `div.single` (icon img bed.svg / bath.svg / building.svg + `span`
       14px `#040F2E`) — "2 Bedroom" · "2 Bathroom" · "1050 Sq Ft".
4. `section.visit-one.fix` (flex, align-center) — split:
   - `div.visit-team` (left, ~52% width, height 728px, cover bg
     `visit2.jpg`, `background-color:#FFF6EE` — couple with laptop photo).
   - `div.tailor-details` (right) > `div.section-tittle.mb-25`:
     `span` "About Us" (14px `#122C77`, mb 21px) + `h2` "From more than 25
     years we have provided real estate services with honesty trust and
     transparency" + 2 × `p` (paraphrase the blind text) +
     `a.btn_01.mt-20` "Learn More" (1px solid `#122C77`, transparent bg,
     `#122C77` text, radius 0, padding 14px 40px, 18px/500).
5. `section.our-services2.section-padding` — "Why Choose Us":
   - `div.container` > centered `div.section-tittle.text-center.mb-60`:
     `span` "Why Choose Us" + `h2` "Our property includes all the little
     details that makes your life a lot better".
   - `div.container-fluid` > `div.row` of 4 × `div.col-xl-3.col-lg-6
.col-md-6.col-sm-6.p-0` > `div.single-services` (1px borders
     `#C9D6CB` left/bottom/top, padding 50px 45px 23px, min-height 476px):
     `div.services-ion` (icon svg services1..4.svg → lucide) +
     `div.services-cap`: `h5 > a` "Flexible lease lengths and start
     dates" / "Need to move? You can transfer homes" / "Roommate moving
     out? We'll help you find a new one" / "Build a house profile" + `p`
     blurb.
   - After the row (inside latest section end, below the grid):
     `div.browse-monre.text-center.mt-50` > `a.btn` "Browse Propertise"
     (solid `#122C77` bg, white text, radius 0, 18px).
6. `div.visit-tailor-video.fix` (flex, align-center) — split Testimonials:
   - `div.tailor-details` (left) > `div.testi-tittle` > `h4` "Customer say
     about us" (22px/500 `#122C77`, mb 40px) + `div.h1-testimonial-active`
     (slick carousel, arrows) of 2+ `div.single-testimonial`:
     `div.testimonial-caption` > `div.testimonial-top-cap` > `p` (Shippori
     Mincho, 31px/600 `#040F2E`, line-height 1.4 — the quote) +
     `div.testimonial-founder.d-flex.align-items-center`:
     `div.founder-img` (circular avatar) + `div.founder-text`: `h4` name
     "Sharon Needles" + `p` role "Creative Designer at Colorlib"
     (`#74706B` 500).
   - `div.tailor-offers.position-relative` (right, 50% width, height
     766px, cover bg `visit3.jpg` — two-story house with porch; carries
     the promo-video popup).
7. `div.team-area.section-padding` — "Our Agents":
   - `div.container` > `div.row.justify-content-center` > centered
     `div.section-tittle.text-center.mb-60`: `h2` "Our Agents" + `p`
     subtitle.
   - `div.team-active` (slick carousel, arrows) of 5 ×
     `div.single-team.text-center`: `div.team-img` (headshot photo) +
     `div.team-social` (overlay row of 3 × 40px circular buttons,
     bg `#004274`, white icons: Facebook, Twitter/X, Globe → inline SVG;
     hover bg gold `#FEC82F`) + `div.team-caption`: `h3 > a` "Buster
     Hyman" + `p` "Real Estate Agent" (`#57667e`).
8. `div.visit-tailor-area.fix` (bg `#040F2E`, flex, align-center) —
   Subscribe Newsletter:
   - `div.tailor-offers` (left, 50% width, height 520px, cover bg
     `subscribe-img.jpg`).
   - `div.tailor-details` (right): `h2` "Subscribe Newsletter" (white
     Shippori Mincho) + `p` subtitle + `div.subscribe-now`:
     `input[type=text]` placeholder "Enter your email" + `button.submit-
btn2` "Subscribe" (bg `#FEC82F`, color `#040F2E`, padding 17px 42px,
     radius 0, 18px, capitalize).
9. `footer` > `div.footer-wrapper` > `div.footer-area.footer-padding`
   (light bg) > `div.container` > `div.row.justify-content-between`:
   - `div.col-xl-3` brand column: `div.footer-logo` (logo2_footer.png →
     Domily wordmark) + `div.footer-tittle` > `div.footer-pera` > `p`
     (about blurb, `#5E5E5E` 16px, line-height 1.8) + `ul.footer-social`
     (Facebook, Instagram, LinkedIn — 24px `#BCBCBC`, hover gold
     `#FEC82F`).
   - `div.col-xl-2` "Navigation": Home · About · Services · Blog ·
     Contact.
   - `div.col-xl-2` "Services": Drone Mapping · Real State · Commercial ·
     Construction.
   - `div.col-xl-2` "Support": Drone Mapping · Real State · Commercial ·
     Construction.
   - `div.col-xl-2` "Contact Us": address "54/A, Millory, Kings Road, NYC"
     · email "contact@lendo.com" · phone "10 (87) 738-3940".
   - `div.footer-bottom-area` (bg `#F9FAFB`) > `div.footer-border` >
     `div.footer-copy-right.text-center`: "Copyright © 2026 All rights
     reserved | This template is made with ♥ by Colorlib" → Domily version
     MUST link https://www.componentdock.com/ (required footer policy; no
     ColorLib mention in any app file).
10. Extras: `#back-top` (fixed bottom-right 40px gold `#FEC82F` circle,
    arrow-up icon), preloader (gold-ring spinner) — optional.

### Content (for copy paraphrase)

- Nav: Home, About, Properties, Blog (Blog, Blog Details, Elements),
  Contact + "Call Us: 10 (23) 252 3583" + search.
- Hero: h1 "Browse the Top Modern Modular Homes" (gold "Modern Modular"
  span); p "Homofy is a modular home marketplace that helps you find,
  compare, and purchase a prefab modular home."; buttons "Browse Home Now"
  - vertical gold tab "View Promo Video" with play icon.
- Properties: label "Properties" + "Display Latest & Featured Properties";
  cards: price "$ 6728", types Appartment / Office / Classic home, specs
  "2 Bedroom · 2 Bathroom · 1050 Sq Ft".
- About: "About Us" / "From more than 25 years we have provided real estate
  services with honesty trust and transparency" + 2 paragraphs + "Learn
  More".
- Why Choose Us: "Our property includes all the little details that makes
  your life a lot better" — Flexible lease lengths and start dates · Need
  to move? You can transfer homes · Roommate moving out? We'll help you
  find a new one · Build a house profile (+ blurb each). CTA "Browse
  Propertise".
- Testimonials: "Customer say about us" — quote (paraphrase) + "Sharon
  Needles · Creative Designer at Colorlib".
- Agents: "Our Agents" — "Buster Hyman · Real Estate Agent" ×5.
- Newsletter: "Subscribe Newsletter" + "Enter your email" + "Subscribe".
- Footer: brand blurb, socials (FB/IG/LinkedIn), Navigation, Services,
  Support, Contact Us (address, email, phone), copyright + Component Dock.

## Design tokens

| Token          | Value                                                           | Usage                                                                                                                                                                                                      |
| -------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gold           | `#FEC82F`                                                       | hero h1 span, border-btn (border+text), "View Promo Video" tab bg, Call Us button bg, header 6px top line, submit-btn2 bg, team-social hover bg, footer-social hover, back-top/scrollUp bg, preloader ring |
| navy-ink       | `#040F2E`                                                       | headings (h1-h6), hero caption panel bg, visit-tailor-area (newsletter) bg, nav links, pricing spec spans, card title hover, submit-btn2 text, quote text                                                  |
| navy           | `#122C77`                                                       | `.btn` bg (Browse Propertise), price span, testi-tittle h4, section-tittle span, btn_01 border+text                                                                                                        |
| slate          | `#071112`                                                       | property card title                                                                                                                                                                                        |
| body-text      | `#5E5E5E` / `#5F626D`                                           | paragraphs, card blurbs, footer pera                                                                                                                                                                       |
| hero-subtext   | `#CCD2E1`                                                       | hero paragraph (white/300 on navy panel)                                                                                                                                                                   |
| card-border    | `#BECCD6`                                                       | property card cat-cap border + pricing border-top                                                                                                                                                          |
| services-line  | `#C9D6CB`                                                       | why-choose-us single-services grid borders                                                                                                                                                                 |
| section-bg     | `#F2F4F8` / `#F1FBFF` / `#F9FAFC`                               | utility section backgrounds (`.section-bg`/`.gray-bg`/`.testimonial-bg`)                                                                                                                                   |
| footer-bottom  | `#F9FAFB`                                                       | copyright bar bg                                                                                                                                                                                           |
| about-photo-bg | `#FFF6EE`                                                       | visit-team image background color                                                                                                                                                                          |
| team-social-bg | `#004274`                                                       | agent circular social buttons                                                                                                                                                                              |
| role-text      | `#57667e` / `#74706B`                                           | agent role / testimonial founder role                                                                                                                                                                      |
| hero-overlay   | horizontal gradient `rgba(25,40,57,0.6)` → `rgba(25,40,57,0.1)` | hero-overly overlay over the hero photo                                                                                                                                                                    |
| font-heading   | "Shippori Mincho"                                               | h1-h6, hero h1 (54px/600), quote (31px/600), promo-tab span, newsletter h2 (Google Fonts 400-800)                                                                                                          |
| font-body      | "Roboto"                                                        | nav, buttons, body copy, card text (Google Fonts 300/400/500/700/900)                                                                                                                                      |

Radii: **0 on all buttons** (square — border-btn hero-btn, btn_01, .btn,
submit-btn2, boxed-btn); **50% circles** on back-top/scrollUp (40px),
team-social (40px), founder-img avatar; property/service cards are square
(radius 0, 1px `#BECCD6`/`#C9D6CB` borders + soft `0 10px 20px rgba(0,0,0,
0.05)` shadow on cat-cap).

Spacing: header padding 16px 0; hero min-height 800px; section-padding =
100px top / 90px bottom; section-tittle margin-bottom 50-60px; cat-cap
cap-top padding 30px 20px 25px; pricing row padding 11px 20px;
single-services padding 50px 45px 23px, min-height 476px; visit-team
~52% × 728px; tailor-offers 50% × 766px; newsletter band 50% × 520px;
footer-padding top 99px.

## Requirements

### Requirement: Header / Navigation

The system SHALL render a white sticky header with a thin gold top line, a
wordmark logo, five nav links with a Blog dropdown, a search toggle, and a
gold "Call Us" button.

#### Scenario: Brand and nav links

- **GIVEN** the Domily app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL render on a white background with a 6px
  `#FEC82F` bar at its top edge
- **AND** the logo SHALL read "DOMILY" (wordmark with a gold house icon)
- **AND** the nav SHALL list Home, About, Properties, Blog, and Contact in
  18px/500 Roboto `#040F2E` (padding 26px 9px)
- **AND** a gold "Call Us: 10 (23) 252 3583" button SHALL render on the
  right
- **AND** a search toggle SHALL open an overlay input ("Search Here") when
  activated

#### Scenario: Blog dropdown

- **GIVEN** the header is rendered
- **WHEN** the Blog item is activated
- **THEN** a dropdown SHALL list Blog, Blog Details, and Elements

#### Scenario: Sticky scroll state

- **GIVEN** the page is scrolled down
- **WHEN** the header passes the top of the viewport
- **THEN** the header SHALL stick to the top with a soft shadow
  (`0 10px 15px rgba(25,25,25,0.1)`)

### Requirement: Hero

The system SHALL render the split hero: a navy caption panel over a
modern-home photo, with a white serif headline carrying a gold span, a
subtext paragraph, a gold-outline CTA, and a vertical gold promo-video tab.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL be at least 800px tall with a cover photo of a
  modern home under the dark horizontal hero-overly gradient
- **AND** a navy `#040F2E` panel SHALL sit behind the caption on the left
  (z-index behind text)
- **AND** the 54px/600 white Shippori Mincho headline SHALL read "Browse
  the Top Modern Modular Homes" with the phrase "Modern Modular" rendered
  in gold `#FEC82F` on its own line
- **AND** the subtext SHALL read "Domily is a modular home marketplace that
  helps you find, compare, and purchase a prefab modular home."
  (`#CCD2E1`, 20px/300)

#### Scenario: Hero CTAs

- **GIVEN** the hero buttons are rendered
- **WHEN** the page loads
- **THEN** a square "Browse Home Now" button SHALL render with a 1px
  `#FEC82F` border and gold text (radius 0, padding 18px 41px, 18px/500,
  letter-spacing 1px)
- **AND** a vertical gold `#FEC82F` tab SHALL render on the photo edge
  reading "View Promo Video" (Shippori Mincho, `#040F2E` text) next to a
  circular play icon

### Requirement: Featured properties

The system SHALL render the "Display Latest & Featured Properties" carousel
of property cards with photo, navy price, type title, blurb, and a spec row.

#### Scenario: Property cards

- **GIVEN** the properties section is rendered
- **WHEN** the page loads
- **THEN** the centered section header SHALL show the label "Properties"
  (`#122C77`) above the heading "Display Latest & Featured Properties"
  with a short subtitle
- **AND** at least four property cards SHALL render in a carousel (three
  visible on desktop, arrows + dots)
- **AND** each card SHALL show a photo, a `#122C77` price (e.g. "$ 6728"),
  a 20px/500 `#071112` type title (hover `#040F2E`) — Appartment, Office,
  Classic home — a paraphrased blurb, and a bottom spec row separated by a
  `#BECCD6` top border with bed/bath/building icons and 14px `#040F2E`
  labels ("2 Bedroom" · "2 Bathroom" · "1050 Sq Ft")
- **AND** the card body SHALL have a 1px `#BECCD6` border and a soft shadow

#### Scenario: Carousel navigation

- **GIVEN** the properties carousel is rendered
- **WHEN** the next/prev arrows are activated
- **THEN** the carousel SHALL advance/go back one card

### Requirement: About

The system SHALL render the split About section with a photo on the left
and the "About Us" copy with a navy-outline Learn More button on the right.

#### Scenario: About layout

- **GIVEN** the About section is rendered
- **WHEN** the page loads
- **THEN** a tall photo SHALL render on the left (~52% width, 728px, on
  `#FFF6EE`)
- **AND** the right column SHALL show the `#122C77` label "About Us" above
  the heading "From more than 25 years we have provided real estate
  services with honesty trust and transparency"
- **AND** two paraphrased paragraphs SHALL render below
- **AND** a square "Learn More" button SHALL render with a 1px `#122C77`
  border, transparent background, and `#122C77` text (radius 0, padding
  14px 40px, 18px/500)

### Requirement: Why Choose Us

The system SHALL render the 4-column "Why Choose Us" grid with icon cards
separated by `#C9D6CB` borders and a solid navy "Browse Propertise" button
below.

#### Scenario: Service grid

- **GIVEN** the Why Choose Us section is rendered
- **WHEN** the page loads
- **THEN** the centered header SHALL show the label "Why Choose Us" above
  the heading "Our property includes all the little details that makes
  your life a lot better"
- **AND** four equal columns SHALL render (1px `#C9D6CB` borders, padding
  50px 45px 23px, min-height 476px), each with an icon, an h5 link title —
  "Flexible lease lengths and start dates", "Need to move? You can
  transfer homes", "Roommate moving out? We'll help you find a new one",
  "Build a house profile" — and a paraphrased blurb

#### Scenario: Browse CTA

- **GIVEN** the services grid is rendered
- **WHEN** the page loads
- **THEN** a centered solid navy `#122C77` square button SHALL render
  reading "Browse Propertise" (white text, radius 0)

### Requirement: Testimonials

The system SHALL render the split testimonial section: a serif quote
carousel with founder avatars on the left and a tall house photo on the
right.

#### Scenario: Testimonial slide

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Customer say about us" (22px/500
  `#122C77`)
- **AND** at least two slides SHALL render, each with a 31px/600 Shippori
  Mincho `#040F2E` quote (paraphrased), a circular founder avatar, a name
  (e.g. "Sharon Needles"), and a role (e.g. "Creative Designer at
  Colorlib" → paraphrase, `#74706B`)
- **AND** a tall photo (50% × 766px) SHALL render on the right

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is rendered
- **WHEN** the arrows are activated
- **THEN** the carousel SHALL advance/go back one slide

### Requirement: Our Agents

The system SHALL render the "Our Agents" carousel of headshot cards with
circular social buttons and name/role captions.

#### Scenario: Agent cards

- **GIVEN** the agents section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL read "Our Agents" with a short
  subtitle
- **AND** at least five agent cards SHALL render, each with a headshot
  photo, three 40px circular social buttons (bg `#004274`, white icons,
  hover gold `#FEC82F` — Facebook, Twitter/X, Globe as inline SVG), an h3
  name (e.g. "Buster Hyman"), and the role "Real Estate Agent"
  (`#57667e`)

### Requirement: Newsletter

The system SHALL render the dark navy `#040F2E` split newsletter band with
a photo, heading, email input, and gold Subscribe button.

#### Scenario: Newsletter form

- **GIVEN** the newsletter section is rendered
- **WHEN** the page loads
- **THEN** the band SHALL render on `#040F2E` with a photo on the left
  (50% × 520px)
- **AND** the right side SHALL show the white heading "Subscribe
  Newsletter", a short subtitle, an email input (placeholder "Enter your
  email"), and a square gold "Subscribe" button (bg `#FEC82F`, text
  `#040F2E`, padding 17px 42px, radius 0)

#### Scenario: Form feedback

- **GIVEN** the newsletter form is rendered
- **WHEN** a valid email is submitted
- **THEN** the form SHALL show a confirmation state (client-side only — no
  backend)

### Requirement: Footer

The system SHALL render the light footer with a brand column, three link
columns, a contact column, and a copyright bar linking to Component Dock.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the brand column SHALL show the Domily wordmark, a paraphrased
  about paragraph (`#5E5E5E`), and three social icons (Facebook,
  Instagram, LinkedIn — 24px `#BCBCBC`, hover gold `#FEC82F`, inline SVG
  brand icons)
- **AND** the "Navigation" column SHALL list Home, About, Services, Blog,
  Contact
- **AND** the "Services" and "Support" columns SHALL list Drone Mapping,
  Real State, Commercial, Construction
- **AND** the "Contact Us" column SHALL list a paraphrased address
  ("54/A, Millory, Kings Road, NYC"), email ("contact@lendo.com"), and
  phone ("10 (87) 738-3940")

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar is rendered (`#F9FAFB`)
- **WHEN** the page loads
- **THEN** the copyright line SHALL read "Copyright © 2026 All rights
  reserved" with a heart icon
- **AND** a link to https://www.componentdock.com/ SHALL render (required
  footer policy — no ColorLib mention in any app file)

## Verification checklist

- [ ] `npm run verify:app -- domily` (or `scripts/verify-app.sh domily`):
      typecheck + lint + vitest at 100% coverage (lines/functions/branches/
      statements) + build all green
- [ ] No ColorLib / homofy reference in ANY app file (comments included);
      provenance lives only in this spec, TEMPLATES.md, and the PR
- [ ] Footer links https://www.componentdock.com/
- [ ] `apps/domily/public/CNAME` = `domily.free.componentdock.com` and
      package `"homepage"` = `https://domily.free.componentdock.com`
- [ ] Google Fonts: Shippori Mincho (400-800) + Roboto (300-900) via
      `<link>` in index.html — no copied font files
- [ ] Images: `https://picsum.photos/seed/domily-<n>/<w>/<h>` (or verified
      picsum IDs) — screen hero seed so it reads as a bright modern
      home/patio; never copy ColorLib assets
- [ ] Icons: lucide-react for UI glyphs (bed/bath/building → verify exports
      with `typeof` probe), inline SVG for brand icons (Facebook,
      Instagram, LinkedIn, Twitter/X, Globe — lucide removed brand icons)
- [ ] Section order matches the live DOM 1:1 (header → hero → properties →
      about → why-choose-us → testimonials → agents → newsletter → footer)
- [ ] Design tokens in `@theme`: gold `#FEC82F`, navy-ink `#040F2E`, navy
      `#122C77`, slate `#071112`, card-border `#BECCD6`, services-line
      `#C9D6CB`, footer-bottom `#F9FAFB`
- [ ] Buttons radius 0 (square) throughout; carousels (properties,
      testimonials, agents) render all slides in the DOM for tests
      (slick-style scroll or client-side state)
- [ ] README status + TEMPLATES.md bookkeeping (`[x]` + surge URL on both
      homofy rows, lines 590 + 2596) after ship
