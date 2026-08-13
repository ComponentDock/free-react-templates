# Template: Interiora (Interior Design Studio)

## Purpose

Interiora is an interior-design studio business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Franclin" template design (see TEMPLATES.md — appears 2×:
lines 585 and 1966; both rows point to the same source, one prep covers all;
verified with `grep -c 'wp/template/franclin/'` = 2), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/franclin/ (interior design template)
Preview URL: https://preview.colorlib.com/theme/franclin/

## Design reference (replication findings)

- **Original:** ColorLib "Franclin" — interior design studio landing page
  (`<title>Interior | Template</title>`). A warm, editorial one-pager: a
  full-bleed photo hero slider (3 slides, dark translucent overlay, white
  headline with an underlined phrase, dark pill CTA); a stats band (orange
  counters 450+ / 860+); a "Design the home you love" image+text split; a
  centered client quote over a 5-logo brand strip; a "Personalized design
  solutions" profile block (5-star rating, Budget $5,000, Styles: Glam,
  Bohemian) with a "View Gallery" CTA; a 3-card services row (Home
  Interior / Party Interior / Office Interior); a testimonial slider on a
  peach band; a vendors + video band; a dark CTA band ("Any help needed?");
  and a white 4-column footer with a newsletter form. Bootstrap 5 + jQuery +
  Owl Carousel + slicknav + wow, NOT Tailwind. Brand palette: orange
  `#e67118` + ink `#2a2a2a` + peach `#f1c4a3` + near-black `#1a1a1a`.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/franclin/
  (HTTP 200, ~36 KB HTML fetched; `assets/css/style.css` ~71 KB parsed for
  tokens; page also imports animate.min.css, bootstrap.min.css,
  fontawesome-all.min.css, magnific-popup.css, nice-select.css,
  owl.carousel.min.css, slick.css, slicknav.css, themify-icons.css; jQuery +
  owl.carousel + slick + slicknav + wow + magnific-popup, NOT Tailwind).
  Font: Google Fonts `Jost` (300–900) via `@import` at the top of style.css.
- **Screenshot note:** `franclin-free-template.jpg` — the live preview was
  browsed visually (browser screenshot) and matches the TEMPLATES.md
  screenshot: photo hero with white headline, dark "Check Our Services"
  pill, warm orange accents on buttons/stars/counters, peach testimonial
  band, dark CTA band. The live preview DOM + stylesheet are the
  authoritative reference; the screenshot confirms the same design.

### Design tokens (from `assets/css/style.css` + computed styles)

| Token               | Value                                                                                                                      | Where                                                                                                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary (orange)    | `#e67118`                                                                                                                  | `.btn_10` bg, `.header-btn2` bg, counters, `.ratting` stars (icon color), nav link hover + 3px underline sweep (`::after`), `.section-tittle > span`, `#back-top` bg, footer-form input border |
| Ink (headings)      | `#2a2a2a`                                                                                                                  | `h1..h6` color, nav links, `.btn_1` bg + border                                                                                                                                                |
| Body text           | `#545454`                                                                                                                  | `p` color (16px, line-height 1.4)                                                                                                                                                              |
| Section subtext     | `#656565`                                                                                                                  | `.section-tittle p` (18px, weight 400)                                                                                                                                                         |
| Dark CTA band bg    | `#1a1a1a`                                                                                                                  | `.wantToWork-area` (h2 white 30px weight 600)                                                                                                                                                  |
| Peach band bg       | `#f1c4a3`                                                                                                                  | `.popular-directorya-area` (testimonials)                                                                                                                                                      |
| Hero overlay        | `rgba(84,84,84,0.2)`                                                                                                       | `.hero-overly::before` over `.slider-bg1` photo (`h1_hero.jpg`), slider-height 850px                                                                                                           |
| Footer bg           | `#fff`                                                                                                                     | `.footer-area`; footer headings `#1a1a1a` 20px weight 600; links/text `#5e5e5e`                                                                                                                |
| Heading font        | `"Jost", sans-serif`                                                                                                       | `h1,h2,h3,h4,h5,h6` (weight 500, `#2a2a2a`); h2 34px, line-height 1.2, mb 12px                                                                                                                 |
| Body font           | `"Jost", sans-serif`                                                                                                       | `body` (16px); `p` `#545454` 16px line-height 1.4                                                                                                                                              |
| Nav links           | 18px weight 500 `#2a2a2a`                                                                                                  | `.main-menu ul li a` (padding 26px 8px); hover `#e67118` + `::after` 3px orange underline (0→100% width sweep)                                                                                 |
| Section eyebrow     | 14px uppercase `#e67118`, letter-spacing 0.3em, rotated -90deg                                                             | `.section-tittle > span` (absolute, left -36px, top 35px)                                                                                                                                      |
| `btn_10` (primary)  | bg `#e67118`, white 18px text, padding 17px 35px, radius 40px (pill), capitalize                                           | "More About Us", "Contact Us" (wantToWork), footer arrows                                                                                                                                      |
| `btn_1` (dark pill) | bg `#2a2a2a`, border 1px `#2a2a2a`, white 18px 500, padding 25px 34px, radius 41px; hover: transparent bg + `#2a2a2a` text | hero "Check Our Services" (`hero-btn` padding 25–35px 55px), "View Gallery" (`visit-btn` 18px 34px)                                                                                            |
| `btn_01` (outline)  | 2px `#e67118` border, `#e67118` 18px 500 text, padding 14px 32px, radius 40px; hover: filled orange + white                | "Learn More" (about area)                                                                                                                                                                      |
| `header-btn2`       | bg `#e67118`, white 16px 500, padding 13px 25px, radius 25px                                                               | nav "Free Quote" CTA                                                                                                                                                                           |
| Counters            | `#e67118` 50px weight 600 (Jost), line-height 1                                                                            | `.single-counter .counter` (450+, 860+)                                                                                                                                                        |
| Stars               | `#ffcc00` 14px (icon)                                                                                                      | `.ratting ul li i`                                                                                                                                                                             |
| Section padding     | 120px top/bottom (`section-padding`); `w-padding2` 80px vertical                                                           | about-low, our-services, popular-directorya, wantToWork                                                                                                                                        |
| Newsletter input    | height 56px, border 1px `#e67118`, radius 30px, white bg, text `#5e5e5e`                                                   | `.footer-form form input`; submit = arrow icon button (right-arrow3.svg → lucide ArrowRight)                                                                                                   |
| Header sticky       | `#ffff` bg + shadow `0 10px 15px rgba(25,25,25,0.1)`                                                                       | `.header-sticky.sticky-bar` on scroll; mobile hamburger + slicknav menu                                                                                                                        |

### Section structure (from the live DOM, top to bottom)

1. `div.header-area.header-sticky` — 3-part header:
   - `header-info-left` > `ul.main-menu`: Home, What We Do?, Projects
     (`li` with `ul.multipage` dropdown — white 150px panel, shadow,
     visible on hover).
   - `header-info-mid` — centered brand logo (`img` → text wordmark).
   - `header-info-right`: Blog, Contact Us + `a.header-btn2` "Free Quote"
     (orange pill). Sticky on scroll: white bg + shadow. Mobile: slicknav
     hamburger menu.
2. `div.slider-area` > `div.slider-active.dot-style` (Owl carousel, 3 ×
   `div.single-slider.slider-height.hero-overly.slider-bg1` — full-bleed
   photo `h1_hero.jpg`, 850px tall, `rgba(84,84,84,0.2)` overlay,
   `d-flex align-items-center`, dot navigation): `div.hero-caption.text-center`:
   - `h1` white 60px weight 500 line-height 1.3: "My home is almost put
     together, but I could really use a new rug." (the phrase "almost put
     together" is wrapped in `<span>` with `text-decoration: underline`).
   - `p` white 20px subtext.
   - `a.btn_1.hero-btn` "Check Our Services" (dark pill, large padding).
3. `section.about-low-area.section-padding` — "We work side by side with
   you to create exceptional spaces." split:
   - `div.about-caption` > `div.section-tittle` (eyebrow `span` +
     `h2` 34px) + `p` (16px `#071112` in source css — use body ink) +
     `a.btn_10` "More About Us".
   - Counter row: 2 × `div.single-counter`: `span.counter` "450" + "+
     Successfully completed projects"; "860" + "Highly specialised
     employees" (orange 50px numbers).
4. `section.about-area1.about-area2.fix` — "Design the home you love"
   split: `div.about-caption.about-caption1` (section-tittle h2 +
   paragraph + `a.btn_01` "Learn More" outline pill) + `div.about-img` +
   interior photo (picsum).
5. `div.brand-area.section-padding` — client band: centered
   `div.section-tittle.text-center.mb-20` — quote `h2` "Franclin managed
   everything from furniture selection, purchase, delivery and assembly,
   and have been a pleasure working with" + attribution "– Shonda Leer,
   Chief of Staff at Franclin Technologies" + `div.brand-active` (Owl
   carousel) with 5 × `div.single-brand` logo images (→ text/icon logos).
6. `section.our-services.section-padding.position-relative` — "Personalized
   design solutions" profile block: `div.tailor-details`:
   - `div.section-tittle.mb-70` — h2 "Personalized design solutions" +
     subtext "Designed by Franclin".
   - `div.ratting` — 5 × `i.fas.fa-star` (orange/yellow stars).
   - `p` — lorem mission text.
   - `div.price-wrpper.d-flex.flex-wrap` — 2 × `div.single-price`:
     "Budget" label + `$5,000` value; "Styles" label + "Glam, Bohemian"
     value.
   - `a.btn_1.visit-btn` "View Gallery".
7. `section.our-services.section-padding.position-relative` (2nd) —
   "Interior design is for everyone." services row: `div.section-tittle` h2
   - 3 × `div.single-services.mb-30`:
   * `div.services-icon` (icon img → lucide icon) + `div.services-cap`
     `h5 > a` title: Home Interior / Party Interior / Office Interior +
     `p` blurb (same copy in source — paraphrase, keep kind).
8. `section.popular-directorya-area.section-padding.fix` (bg `#f1c4a3`
   peach) — "Customer testimonial" slider: `div.section-tittle.text-center`
   h2 "Customer testimonial" + `div.testimonial-active` (Owl carousel,
   prev/next arrow controls) with slides: `blockquote` quote + author
   ("Barb Ackue") + 5-star rating. 3+ slides (source: "What a great
   experience!", "I would recommend this design service", "This design
   service" — paraphrase into distinct quotes).
9. `section.about-area1.about-area2.fix` (2nd) — vendors + video band:
   `div.about-caption.about-caption1`: section-tittle h2 "We work with
   more than 200 vendors, big and small." + paragraph + `a.btn_10`
   "Let's Discuss" + `div.video-area.position-relative` >
   `div.video-wrap` > `div.video-icon` (circular play button → video
   modal/link).
10. `section.wantToWork-area.w-padding2` (bg `#1a1a1a`) — CTA band:
    `div.wantToWork-caption`: h2 white 30px "Any help needed?" + subtext +
    `a.btn_10` "Contact Us" (orange pill).
11. `div.footer-wrapper` > `div.footer-area.footer-padding` (bg `#fff`,
    padding-top 99px):
    - `div.single-footer-caption.mb-50` — brand logo + about text
      (`footer-pera` `#5e5e5e`) + social icon row (4–6 icons).
    - `div.single-footer-caption.mb-30` — `footer-tittle` h4 "Navigation":
      Home / About / Services / Blog / Contact.
    - `div.single-footer-caption.mb-50` — `footer-tittle` h4 "Services":
      Drone Mapping / Real State / Commercial / Construction (source is
      generic — paraphrase to interior services: Home Design / Office
      Design / Commercial / Consultation).
    - `div.single-footer-caption.mb-50` — `footer-tittle.mb-50` h4
      "Subscribe newsletter" + `div.footer-form` form: email input
      (placeholder "Email Address") + submit arrow icon button.
    - `div.footer-bottom-area` > `div.footer-border` >
      `div.footer-copy-right.text-center` — copyright line (Colorlib
      credit → Component Dock per AGENTS.md).
12. `#back-top` — fixed orange 40px circle scroll-to-top button.

## Requirements

### Requirement: Navbar

The system SHALL render a three-part sticky header with a left menu,
centered brand, right links, an orange CTA pill, and a mobile hamburger
menu.

#### Scenario: Desktop nav

- **GIVEN** the Interiora app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand wordmark "Interiora" centered
- **AND** SHALL show links Home, What We Do?, Projects, Blog, and Contact
  Us (18px weight 500 `#2a2a2a`)
- **AND** the "Projects" item SHALL expose a white dropdown submenu on
  hover (multipage pattern)
- **AND** an orange pill button SHALL read "Free Quote" (radius 25px)
- **AND** nav links SHALL turn orange with a 3px orange underline sweep on
  hover
- **AND** the header SHALL become white with a shadow on scroll (sticky)

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger toggle is activated
- **THEN** a slide-down navigation panel SHALL open listing the same links
- **AND** the panel SHALL close via the toggle, Escape, or a link click

### Requirement: Hero slider

The system SHALL render a full-bleed photo hero slider with three slides,
a white headline with an underlined phrase, and a dark pill CTA.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** a slider SHALL render with at least three slides, each with a
  full-bleed interior photo, a dark translucent overlay
  (`rgba(84,84,84,0.2)`), and centered content
- **AND** the headline SHALL read "My home is almost put together, but I
  could really use a new rug." (white, 60px, weight 500, Jost) with the
  phrase "almost put together" underlined
- **AND** a white subtext paragraph SHALL render below the headline
- **AND** a dark pill button SHALL read "Check Our Services"
- **AND** dot indicators SHALL allow switching between slides

### Requirement: Stats band

The system SHALL render an intro split with a section heading, a
paragraph, an orange CTA, and two orange counters.

#### Scenario: About intro

- **GIVEN** the about-low section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "We work side by side with you to create
  exceptional spaces."
- **AND** a paragraph and an orange pill "More About Us" button SHALL
  render
- **AND** two counters SHALL render with orange 50px numbers: "450" (+
  Successfully completed projects) and "860" (Highly specialised
  employees)

### Requirement: About split

The system SHALL render an image/text split with an outline-pill CTA.

#### Scenario: Design the home you love

- **GIVEN** the about split is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Design the home you love"
- **AND** an interior photo SHALL render beside the text
- **AND** an outline pill button (2px orange border) SHALL read "Learn
  More" and SHALL fill orange with white text on hover

### Requirement: Client quote band

The system SHALL render a centered client quote with attribution above a
row of brand logos.

#### Scenario: Quote + logos

- **GIVEN** the brand band is rendered
- **WHEN** the page loads
- **THEN** a centered quote SHALL render ("Franclin managed everything
  from furniture selection, purchase, delivery and assembly, and have been
  a pleasure working with") with the attribution "– Shonda Leer, Chief of
  Staff at Franclin Technologies" (rename company in recreation)
- **AND** a row of five brand logo placeholders SHALL render below the
  quote

### Requirement: Design profile block

The system SHALL render a "Personalized design solutions" block with a
5-star rating, budget/style facts, and a View Gallery CTA.

#### Scenario: Profile content

- **GIVEN** the tailor section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Personalized design solutions" with the
  subtext "Designed by Interiora"
- **AND** five star icons SHALL render (orange/yellow)
- **AND** a mission paragraph SHALL render
- **AND** two facts SHALL render: "Budget" → "$5,000" and "Styles" →
  "Glam, Bohemian"
- **AND** a dark pill button SHALL read "View Gallery"

### Requirement: Services row

The system SHALL render three service cards with icons and titles.

#### Scenario: Three services

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Interior design is for everyone."
- **AND** three cards SHALL render with icon + title + blurb: "Home
  Interior", "Party Interior", "Office Interior"

### Requirement: Testimonials slider

The system SHALL render a testimonial slider on the peach band with
quotes, authors, ratings, and prev/next controls.

#### Scenario: Slider content

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section background SHALL be the peach `#f1c4a3`
- **AND** the centered heading SHALL read "Customer testimonial"
- **AND** at least three slides SHALL exist, each with a quote, a 5-star
  rating, and an author name
- **AND** prev/next arrow controls SHALL move between slides (wrapping or
  clamping)

### Requirement: Vendors + video band

The system SHALL render a split with a "200 vendors" heading, a CTA, and a
video play button.

#### Scenario: Vendors content

- **GIVEN** the vendors band is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "We work with more than 200 vendors, big
  and small."
- **AND** a paragraph and an orange pill "Let's Discuss" button SHALL
  render
- **AND** a circular play button SHALL render beside the text (video
  link/modal, accessible aria-label)

### Requirement: CTA band

The system SHALL render a near-black CTA band with a white headline and an
orange pill button.

#### Scenario: CTA content

- **GIVEN** the CTA band is rendered
- **WHEN** the page loads
- **THEN** the band background SHALL be `#1a1a1a`
- **AND** the headline SHALL read "Any help needed?" (white, 30px)
- **AND** an orange pill button SHALL read "Contact Us"

### Requirement: Footer

The system SHALL render a white footer with brand/social, Navigation,
Services, a newsletter form, and the Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer background SHALL be white
- **AND** the first column SHALL show the brand, an about excerpt, and a
  row of social icon links
- **AND** the second column SHALL list "Navigation": Home / About /
  Services / Blog / Contact
- **AND** the third column SHALL list "Services": Home Design / Office
  Design / Commercial / Consultation
- **AND** the fourth column SHALL show "Subscribe newsletter" with an
  email input (placeholder "Email Address", orange border, pill radius)
  and a submit arrow button
- **AND** the copyright line SHALL credit Component Dock
  (https://www.componentdock.com/) instead of ColorLib

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Interiora app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero slider, stats band, about
  split, client quote band, design profile, services, testimonials,
  vendors band, CTA band, and footer in order
- **AND** the document title SHALL be "Interiora — Interior Design
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/interiora` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- interiora` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#e67118, #2a2a2a, #545454, #656565, #1a1a1a, #f1c4a3, #fff, #ffcc00, rgba(84,84,84,0.2), #5e5e5e) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `interiora-<n>`, Google Fonts Jost 300–900 link, lucide icons only)
- [ ] Buttons match the three shapes: `btn_10` orange pill (radius 40px), `btn_1` dark pill (radius 41px, hover transparent), `btn_01` orange outline pill (hover fill); header CTA radius 25px
- [ ] Hero slider: 3 slides, photo bg, rgba overlay, white 60px headline with underlined span, dark pill CTA, dot navigation
- [ ] Nav hover: orange text + 3px orange underline sweep; sticky white header on scroll; mobile hamburger panel
- [ ] Testimonials slider implemented with client-side state (no Owl Carousel dep); peach band bg
- [ ] Counters render as orange 50px numbers; stars `#ffcc00`
- [ ] Footer newsletter: email input (56px, orange 1px border, radius 30px) + arrow submit; Component Dock credit; no ColorLib references in app code
