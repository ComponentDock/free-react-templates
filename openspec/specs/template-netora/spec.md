# Template: Netora (IT Solutions Template)

## Purpose

Netora is a corporate IT-solutions one-page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Itlock" template design (see TEMPLATES.md — appears 2×: lines
592 and 1064; both rows point to the same source, one prep covers all;
verified with `grep -c 'wp/template/itlock/'` = 2), built under a DIFFERENT
name (Netora — "net" (network/IT) + "-ora", matching the project's naming
pattern like techora/servora) per the monorepo naming mandate (never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/itlock/ (IT Solutions category,
"Itlock" — a corporate IT-services landing page: announcement bar + nav,
hero slider, satisfaction-guaranteed band, industry categories, about,
services, navy insights CTA, brand logos, case studies, testimonials,
footer)
Preview URL: https://preview.colorlib.com/theme/itlock/

## Design reference (replication findings)

- **Original:** ColorLib "Itlock" (`<title>IT Solution</title>`). A corporate
  B2B tech-services one-pager with a tech-blue palette: brand blue `#316EC2`
  buttons/links, deep navy `#0E1B50` CTA band, dark navy `#003072` headings +
  second CTA band, on white/`#f9f9ff`/`#EBF0F8` sections. The header is a
  two-tier bar: a thin top strip (border-bottom `#D3D5E2`, margin 0 88px)
  with a "Now Hiring: ... 1st Line IT Support Engineer?" announcement + social
  icons + search field, under it the main white nav (padlock icon + "ITLOCK"
  wordmark, links Home · About · Services · Case Study · Blog · Contact, a
  square outline "Free Quote" button, and "Have any Question? Call: 10 (78)
  837 3647" with a headphones icon); a 750px hero slider over a tech photo
  (developer at a screen) with a cyan→blue gradient overlay on the left 74%
  carrying the white 72px headline "Best IT Solution in your city", a subtext,
  and a white-outline uppercase "Find Out More" button; a deep-navy
  `#0E1B50` "Satisfaction Guaranteed" band (person-with-check icon, Fira Sans
  white heading, `#C6C9D9` subtext, white-outline "Learn More"); an "Industry
  We Offer" section on `#f9f9ff` with 4 `#F3F8FF` category cards (flat light-
  blue icon, `#003072` title, blurb, "Find Out More" arrow link, hover shadow
  `0 20px 30px rgba(35,47,85,0.1)`); a split About ("About Us" / "Build your
  amazing website with Itlock" + 2 paragraphs + solid-blue "Learn More" with
  an image on the other side); a Services section with 3 photo cards (Managed
  IT services / Backup and recovery / Cyber security); a navy `#003072`
  "Insights to help you do what you do better, faster and more profitably."
  CTA band with a white-outline Learn More; a "We work with global brands"
  logo marquee; an "Our Case Study" section with 3 photo cards tagged
  "UniCode" (Complexities of modern markets / Backup and recovery / Cyber
  security); a testimonial carousel on `#EBF0F8` ("Brilliant work" cards,
  5-star rows, author "Barb Ackuee"); and a 4-column footer (Subscribe
  Newsletter with email form, Quick Links, Services, Contact Us) with
  Facebook/Instagram/LinkedIn/YouTube socials + copyright bar. Primary brand
  blue `#316EC2` + deep navy `#0E1B50`/`#003072` on white; "Fira Sans"
  headings + "Rubik" body.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/itlock/
  (HTTP 200, fetched 2026-08-13; ~27 KB HTML). Stylesheet:
  `assets/css/style.css` (~72 KB, parsed for tokens — the page also imports
  bootstrap.min.css, owl.carousel.min.css, slick.css, slicknav.css,
  animate.min.css, magnific-popup.css, fontawesome-all.min.css,
  themify-icons.css, nice-select.css; site is jQuery + Bootstrap + slick/owl
  carousels, NOT Tailwind). Fonts: "Rubik" (body + buttons, 6 uses) + "Fira
  Sans" (headings — wantToWork h2, section titles; 4 uses) — recreate via
  Google Fonts `<link>`s in index.html (do NOT copy font files).
- **Screenshot note:** `itlock-colorlib-template.jpg` (1200×946, browsed
  visually) MATCHES the live template: white two-tier header with top strip
  (socials + search), padlock logo + "ITLOCK" wordmark, centered nav, blue-
  outline "Free Quote" button and a "Need any Question?" phone on the right;
  hero = developer-at-screen photo with a heavy blue→cyan gradient overlay,
  left-aligned white headline "Best IT Solution in your city" + white
  "Find Out More" button; below, the dark navy "Satisfaction Guaranteed" band
  with a person-check icon + white heading + "Learn More" button on the
  right; then the white/`#f9f9ff` "INDUSTRY WE OFFER" section with 4 flat
  light-blue-icon category cards. The live preview DOM + parsed stylesheet are
  the authoritative reference; the screenshot confirms palette + layout.

### Section structure (from the live DOM, top to bottom)

1. `header` > `div.header-area` (white bg, sticky on scroll):
   - `div.header-top` (padding 13px 0, border-bottom 1px `#D3D5E2`, margin
     0 88px): left "Now Hiring: Are you a driven and motivated 1st Line IT
     Support Engineer?" announcement + social icons (fa-facebook /
     fa-twitter / fa-linkedin-in / fa-youtube), right a search field
     ("Search or enter website name").
   - `div.main-header` > `div.container` > `div.row.align-items-center`:
     - `div.logo` > `a` > `img` (logo.png → Netora wordmark: padlock icon +
       dark text).
     - `div.main-menu.d-none.d-lg-block` > `nav` > `ul#navigation`:
       Home (index.html) · About (about.html) · Services (services.html) ·
       Case Study (case-staday.html) · Blog (dropdown: Blog, Blog Details,
       Elements) · Contact (contact.html).
     - `a.btn_01.d-none.d-xl-block` "Free Quote" (transparent, 2px `#316EC2`
       border, `#316EC2` text, padding 10px 34px, radius 0; hover fills
       `#316EC2` white).
     - `div.header-info-right` — "Have any Question?" small label + "Call:
       10 (78) 837 3647" with `headphones.svg` icon.
2. `section.slider-area` (bg `#F2F4F8`) > `div.slider-active` >
   `div.single-slider.hero-overly.slider-height.slider-bg1` (height 750px,
   cover bg `img/hero/h1_hero1.jpg` — tech worker at screen; `hero-overly`
   ::before = horizontal cyan→blue gradient `rgba(0,133,161,0.8)` →
   `rgba(0,52,104,0.8)`-ish, width 74%, left 0) > `div.container` >
   `div.hero-caption`:
   - `h1` (72px/500 white, letter-spacing -2.5px, line-height 1.1)
     "Best IT Solution" + `span` (block) "in your city".
   - `p` "Prevent data loss with encrypted storage and virtualized recovery,
     then enjoy increased productivity." (white, ~16-18px, margin-bottom
     50px).
   - `a.btn.hero-btn` "Find Out More" (transparent bg, 2px white border,
     white text, uppercase 14px, padding 27px 34px, radius 0).
3. `div.want-wrapper2` (bg `#0E1B50`) > `section.wantToWork-area`
   (padding 35px 36px 28px 50px) > `div.wants-wrapper` (flex, align-center):
   - `blockquote` > `img` (user.png — person-with-checkmark icon).
   - `div.wantToWork-caption`: `h2` (Fira Sans, 28-30px/500 white,
     line-height 1) "Satisfaction Guaranteed" + `p` "We understand the
     complexities of modern markets and translate them into real business
     solutions for automotive, financial, insurance, pharma & life sciences."
     (`#C6C9D9`, 16px/300).
   - `a.btn_01.btn_wnat.wantToWork-btn` "Learn More" (2px white border,
     white text, padding 10px 34px, radius 0; float right).
4. `section.categories-area.section-bg` (bg `#f9f9ff`, padding 100px 0
   70px) > `div.container`:
   - `div.section-tittle.text-center.mb-50`: `span` "Industry We Offer"
     (small, brand blue) + `h2` (38px/500) "Managed IT services customized
     for your industry" + `p` subtitle (`#4C526E` 18px).
   - `div.row` of 4 × `div.single-cat.mb-30` (bg `#F3F8FF`, padding 50px
     25px 33px, radius 0, position relative; hover shadow
     `0 20px 30px rgba(35,47,85,0.1)`):
     - `div.cat-icon` > `img` (services1/2/3/5.svg → lucide, flat
       light-blue) — one per card (server, cart, plane, building/chart).
     - `div.cat-cap`: `h5` (20px/500 `#003072`, margin-bottom 13px)
       "Industries & Manufacturing" (all four cards repeat this placeholder
       in the source — paraphrase per-icon: e.g. Manufacturing, Retail,
       Logistics & Travel, Finance) + `p` blurb (`#4C526E`) +
       `a` "Find Out More" with `right-arrow2.svg` icon.
5. `div.visit-tailor-area.fix` (flex, align-center) — split About:
   - `div.tailor-offers` — LEFT image panel (empty div in HTML, bg image in
     source; use a picsum office/tech photo).
   - `div.tailor-details`: `div.details-sinlge.mb-30`: `span` "About Us"
     (brand blue) + `h2` "Build your amazing website with Itlock" (→
     "Build your amazing website with Netora") + 2 × `p` (paraphrase the
     blind text) — then `a.btn.visit-btn.mt-15` "Learn More" (solid
     `#316EC2` bg, white text, padding 29px 38px, radius 0).
6. `section.home-blog` (padding 100px 0 90px) — Services:
   - `div.section-tittle.text-center.mb-50`: `span` "Services" + `h2`
     "We design apps & websites that lead in their space" + `p` subtitle.
   - `div.row` of 3 × `div.single-blogs.mb-30`:
     `div.blog-img` (blog1/2/3.jpg → picsum) + `div.blog-cap`: `h3 > a`
     "Managed IT services" / "Backup and recovery" / "Cyber security"
     (`#1f2b7b`-ish dark, hover brand blue) + `p` blurb + `a` "Learn More".
7. `section.about-area` > `div.wrapper-border` (bg `#003072`):
   - `div.about-caption` (padding 50px 0 30px): `h2` "Insights to help you
     do what you do better, faster and more profitably." (white, Fira Sans)
     - `p` (paraphrase; light `#C6C9D9`-style on navy) + `a.btn_01.btn_wnat`
       "Learn More" (white outline).
   - `div` > `img` (about1.jpg → picsum office/team photo).
8. `section.brand-area` (padding-top ~100px): centered "We work with global
   brands" caption + `div.brand-active` logo strip (brand1-4.png repeated
   marquee → 4 text/grey logo placeholders, grayscale).
9. `section.home-blog.home-blog2` (padding 100px 0 90px) — Our Case Study:
   - `div.section-tittle.text-center.mb-50`: `span` "Our Case Study" + `h2`
     "We work with global brands" + `p` subtitle.
   - `div.row` of 3 × case cards (`div.single-blogs`): `div.blog-img`
     (blog4/5/6.jpg → picsum) + `div.blog-cap`: `span` tag "UniCode" (→
     e.g. "Netora") + `h3 > a` "Complexities of modern markets" / "Backup
     and recovery" / "Cyber security" + blurb + "Learn More".
10. `section.popular-directorya-area.section-padding.fix` (bg `#EBF0F8`,
    padding 100px 0):
    - `div.section-tittle.text-center.mb-50`: `span` "Testimonial" + `h2`
      "Love from our client" + `p` subtitle.
    - `div.testimonial-active` (carousel, ≥2 slides) of
      `div.single-testimonial`: `div.testimonial-caption`: `div.top-cap` >
      `h3` "Brilliant work" + `p` quote (paraphrase — source uses a real-
      estate blind quote: "You deserve a home that is functional and
      stylish, today. Don't put it off until the kids are older or you have
      more time.") + `div.testimonial-founder.d-flex`: founder img (avatar →
      picsum) + name "Barb Ackuee" + `div.rating` of 5 × `i.fas.fa-star`
      (yellow `#f4e700`).
11. `footer` > `div.footer-area.footer-padding` (white/light bg, padding
    top ~100px) > `div.container` > `div.row.justify-content-between`:
    - `div.col-xl-3.col-lg-3.col-md-6` — Subscribe Newsletter:
      `div.footer-tittle` > `h4` "Subscribe Newsletter" (`#003072`, 20px/400,
      margin-bottom 30px) + `div.footer-pera` > `p` (blurb, `#4C526E`
      14px/1.8) + `form` > `input[type=email]` placeholder "Enter your
      email" + `button.newsletter-submit` (arrow icon → "Subscribe").
    - `div.col-xl-2` "Quick Links": My Account · Online Catalog · Contact ·
      Terms & Conditions.
    - `div.col-xl-3` "Services": Medium Enterprise · Large Enterprise ·
      Education · Government · Health Care.
    - `div.col-xl-2` "Contact Us": Support Ticket · FAQ · Contact Us.
    - `ul.footer-social` (footer-bottom area or brand col): fa-facebook /
      fa-instagram / fa-linkedin-in / fa-youtube (inline SVG brand icons —
      lucide-react has NO brand icons).
    - `div.footer-bottom-area` > `div.footer-border` (border-top 1px
      `#D3D5E2`, padding 18px 0 1px) > `div.footer-copy-right.text-center`:
      "Copyright © 2026 All rights reserved | This template is made with ♥
      by Colorlib" → Netora version MUST link
      https://www.componentdock.com/ (required footer policy; no ColorLib
      mention in any app file).
12. Extras: `#back-top` (fixed bottom-right scroll-up button, brand blue) —
    optional.

### Content (for copy paraphrase)

- Top bar: "Now Hiring: Are you a driven and motivated 1st Line IT Support
  Engineer?" + socials (FB/Twitter/LinkedIn/YouTube) + search.
- Nav: Home, About, Services, Case Study, Blog (Blog, Blog Details,
  Elements), Contact + "Free Quote" + "Have any Question? Call: 10 (78)
  837 3647".
- Hero: h1 "Best IT Solution in your city"; p "Prevent data loss with
  encrypted storage and virtualized recovery, then enjoy increased
  productivity."; CTA "Find Out More".
- Satisfaction band: "Satisfaction Guaranteed" + markets paragraph +
  "Learn More".
- Industry We Offer: "Managed IT services customized for your industry";
  cards (icon + title + blurb + "Find Out More") — 4 industries.
- About: "About Us" / "Build your amazing website with Netora" + 2
  paragraphs + "Learn More".
- Services: "We design apps & websites that lead in their space" —
  Managed IT services · Backup and recovery · Cyber security.
- Insights CTA: "Insights to help you do what you do better, faster and
  more profitably." + paragraph + "Learn More".
- Brands: "We work with global brands" + 4 grey logos.
- Case Study: "Our Case Study" / "We work with global brands" —
  Complexities of modern markets · Backup and recovery · Cyber security
  (tagged "UniCode" → rename to Netora).
- Testimonials: "Testimonial" / "Love from our client" — "Brilliant work" +
  quote + 5 stars + "Barb Ackuee".
- Footer: "Subscribe Newsletter" + email input; Quick Links; Services;
  Contact Us; socials; copyright + Component Dock.

## Design tokens

| Token             | Value                                                             | Usage                                                                                                              |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| brand-blue        | `#316EC2`                                                         | `.btn` bg (Learn More / Free Quote hover), `.btn_01` border+text, section-tittle spans, links, hover states, icons |
| navy-band         | `#0E1B50`                                                         | want-wrapper2 "Satisfaction Guaranteed" band bg                                                                    |
| navy-deep         | `#003072`                                                         | about-area wrapper-border bg (Insights band), cat-cap h5 titles, footer-tittle h4                                  |
| navy              | `#1f2b7b`                                                         | card/blog titles, headings                                                                                         |
| body-text         | `#4C526E`                                                         | paragraphs, card blurbs, footer pera, section-tittle p                                                             |
| on-navy-sub       | `#C6C9D9`                                                         | wantToWork + Insights band paragraph text                                                                          |
| section-bg        | `#f9f9ff`                                                         | categories-area (`.section-bg`)                                                                                    |
| card-bg           | `#F3F8FF`                                                         | single-cat category cards                                                                                          |
| testimonial-bg    | `#EBF0F8`                                                         | popular-directorya-area (testimonials)                                                                             |
| hero-slider-bg    | `#F2F4F8`                                                         | slider-area background                                                                                             |
| border-light      | `#D3D5E2`                                                         | header-top border-bottom, footer-border top                                                                        |
| star-yellow       | `#f4e700`                                                         | testimonial rating stars                                                                                           |
| accent-cyan       | `#4cd3e3` / `#38a4ff`                                             | icon accents, small highlights                                                                                     |
| hero-overlay      | horizontal gradient `rgba(0,133,161,0.8)` → `rgba(0,52,104,~0.8)` | hero-overly ::before — cyan→blue, width 74%, left 0, over the hero photo                                           |
| card-hover-shadow | `0 20px 30px rgba(35,47,85,0.1)`                                  | single-cat hover shadow                                                                                            |
| font-heading      | "Fira Sans"                                                       | wantToWork h2 (28-30px/500), section h2s, hero h1 (Google Fonts 400-800)                                           |
| font-body         | "Rubik"                                                           | nav, buttons, body copy, card text (Google Fonts 300/400/500/700)                                                  |

Radii: **0 on ALL buttons** (square — .btn, .btn_01, .btn_01.btn_wnat,
hero-btn, visit-btn, newsletter-submit); **0 on all cards** (single-cat,
single-blogs); 50% only on the back-top scroll button if implemented.

Spacing: header-top padding 13px 0 (border-bottom `#D3D5E2`, margin 0 88px);
hero height 750px; section padding 100px top / 70-90px bottom
(categories 100/70, home-blog 100/90, popular-directorya 100/100);
single-cat padding 50px 25px 33px; .btn padding 30px 52px (visit-btn
29px 38px); .btn_01 padding 10px 34px; hero-btn padding 27px 34px; h1
72px/500 letter-spacing -2.5px; h2 38px/500 letter-spacing -2px;
section-tittle p 18px; footer-tittle h4 20px/400.

## Requirements

### Requirement: Header / Navigation

The system SHALL render a two-tier white header: a top announcement bar with
socials + search, and a main nav with wordmark logo, six links, a Free Quote
button, and a phone line.

#### Scenario: Top bar and brand

- **GIVEN** the Netora app is rendered
- **WHEN** the page loads
- **THEN** a top bar SHALL render (border-bottom `#D3D5E2`) with a "Now
  Hiring" announcement on the left and social icons (Facebook, X, LinkedIn,
  YouTube) + a search field on the right
- **AND** the main bar SHALL render the "NETORA" wordmark (padlock icon +
  dark text), the nav links Home, About, Services, Case Study, Blog, and
  Contact, a square outline "Free Quote" button (2px `#316EC2` border, blue
  text, radius 0), and "Have any Question? Call: 10 (78) 837 3647" with a
  headphones icon

#### Scenario: Free Quote hover

- **GIVEN** the Free Quote button is rendered
- **WHEN** it is hovered
- **THEN** its background SHALL fill with `#316EC2` and the text turn white

#### Scenario: Blog dropdown

- **GIVEN** the header is rendered
- **WHEN** the Blog item is activated
- **THEN** a dropdown SHALL list Blog, Blog Details, and Elements

### Requirement: Hero

The system SHALL render a 750px hero slider over a tech photo with a
cyan→blue gradient overlay, a white headline, subtext, and a white-outline
CTA.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL be 750px tall with a cover photo (developer at a
  screen) under a horizontal cyan→blue gradient overlay on the left 74%
- **AND** the 72px/500 white headline (letter-spacing -2.5px) SHALL read
  "Best IT Solution" with "in your city" on its own line
- **AND** the subtext SHALL read "Prevent data loss with encrypted storage
  and virtualized recovery, then enjoy increased productivity."
- **AND** a square "Find Out More" button SHALL render with a transparent
  background, 2px white border, white uppercase 14px text, and padding
  27px 34px

#### Scenario: Slide navigation

- **GIVEN** the hero slider has multiple slides
- **WHEN** the slider controls are activated
- **THEN** the slider SHALL advance/go back one slide (client-side state)

### Requirement: Satisfaction Guaranteed band

The system SHALL render the deep-navy `#0E1B50` band with a person-check
icon, Fira Sans white heading, subtext, and a white-outline Learn More.

#### Scenario: Band content

- **GIVEN** the Satisfaction band is rendered
- **WHEN** the page loads
- **THEN** the band SHALL render on `#0E1B50` with a person-with-checkmark
  icon on the left
- **AND** the white Fira Sans heading SHALL read "Satisfaction Guaranteed"
  (28-30px/500)
- **AND** a paraphrased paragraph SHALL render in `#C6C9D9`
- **AND** a square "Learn More" button SHALL render with a 2px white border
  and white text (radius 0, padding 10px 34px)

### Requirement: Industry We Offer

The system SHALL render the "Industry We Offer" section on `#f9f9ff` with a
centered title and four `#F3F8FF` category cards.

#### Scenario: Category cards

- **GIVEN** the Industry section is rendered
- **WHEN** the page loads
- **THEN** the centered section header SHALL show the label "Industry We
  Offer" above the heading "Managed IT services customized for your
  industry" with a short subtitle
- **AND** four category cards SHALL render (bg `#F3F8FF`, padding 50px
  25px 33px, radius 0), each with a flat light-blue icon (lucide: Server,
  ShoppingCart, Plane, Building2), a 20px/500 `#003072` title (e.g.
  Industries & Manufacturing, Retail & Commerce, Logistics & Travel,
  Finance & Services), a paraphrased blurb, and a "Find Out More" link with
  an arrow icon
- **AND** hovering a card SHALL raise its shadow to
  `0 20px 30px rgba(35,47,85,0.1)`

### Requirement: About

The system SHALL render the split About section with an image on one side
and the "About Us" copy with a solid-blue Learn More button on the other.

#### Scenario: About layout

- **GIVEN** the About section is rendered
- **WHEN** the page loads
- **THEN** a photos image panel SHALL render on one side (tailor-offers)
- **AND** the text side SHALL show the brand-blue label "About Us", the
  heading "Build your amazing website with Netora", two paraphrased
  paragraphs, and a solid `#316EC2` square "Learn More" button (white text,
  padding 29px 38px, radius 0)

### Requirement: Services

The system SHALL render the Services section with three photo cards.

#### Scenario: Service cards

- **GIVEN** the Services section is rendered
- **WHEN** the page loads
- **THEN** the centered header SHALL show the label "Services" above the
  heading "We design apps & websites that lead in their space" with a
  subtitle
- **AND** three cards SHALL render, each with a photo, a title — "Managed
  IT services", "Backup and recovery", "Cyber security" — a paraphrased
  blurb, and a "Learn More" link

### Requirement: Insights CTA band

The system SHALL render the navy `#003072` Insights band with a white
heading, paragraph, and white-outline Learn More.

#### Scenario: Insights band

- **GIVEN** the Insights band is rendered
- **WHEN** the page loads
- **THEN** the band SHALL render on `#003072` with the heading "Insights to
  help you do what you do better, faster and more profitably."
- **AND** a paraphrased paragraph and a white-outline "Learn More" button
  SHALL render (btn_01 btn_wnat pattern, radius 0)
- **AND** a photos image SHALL render beside the copy (about1.jpg → picsum)

### Requirement: Brand logos

The system SHALL render the "We work with global brands" caption with a
grayscale logo marquee.

#### Scenario: Logo strip

- **GIVEN** the brand section is rendered
- **WHEN** the page loads
- **THEN** the caption SHALL read "We work with global brands"
- **AND** at least four grayscale logo placeholders SHALL render in a
  scrolling/static strip (text-based logos, no copied assets)

### Requirement: Our Case Study

The system SHALL render the "Our Case Study" section with three photo cards
carrying a "Netora" tag.

#### Scenario: Case cards

- **GIVEN** the Case Study section is rendered
- **WHEN** the page loads
- **THEN** the centered header SHALL show the label "Our Case Study" above
  the heading "We work with global brands"
- **AND** three cards SHALL render, each with a photo, a "Netora" tag, a
  title — "Complexities of modern markets", "Backup and recovery", "Cyber
  security" — a paraphrased blurb, and a "Learn More" link

### Requirement: Testimonials

The system SHALL render the testimonial carousel on `#EBF0F8` with
"Brilliant work" cards, star ratings, and author names.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the centered header SHALL show the label "Testimonial" above the
  heading "Love from our client"
- **AND** at least two slides SHALL render, each with the heading
  "Brilliant work", a paraphrased quote, five `#f4e700` stars, a circular
  author avatar, and an author name (e.g. "Barb Ackuee")
- **AND** the carousel SHALL advance/go back one slide when its controls
  are activated

### Requirement: Footer

The system SHALL render the 4-column footer with a newsletter form, three
link columns, social icons, and a copyright bar linking to Component Dock.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the "Subscribe Newsletter" column SHALL show the 20px/400
  `#003072` heading, a blurb, an email input (placeholder "Enter your
  email"), and a submit button
- **AND** the "Quick Links" column SHALL list My Account, Online Catalog,
  Contact, and Terms & Conditions
- **AND** the "Services" column SHALL list Medium Enterprise, Large
  Enterprise, Education, Government, and Health Care
- **AND** the "Contact Us" column SHALL list Support Ticket, FAQ, and
  Contact Us
- **AND** four social icons SHALL render (Facebook, Instagram, LinkedIn,
  YouTube — inline SVG brand icons)

#### Scenario: Newsletter feedback

- **GIVEN** the newsletter form is rendered
- **WHEN** a valid email is submitted
- **THEN** the form SHALL show a confirmation state (client-side only — no
  backend)

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar is rendered (border-top `#D3D5E2`)
- **WHEN** the page loads
- **THEN** the copyright line SHALL read "Copyright © 2026 All rights
  reserved"
- **AND** a link to https://www.componentdock.com/ SHALL render (required
  footer policy — no ColorLib mention in any app file)

## Verification checklist

- [ ] `npm run verify:app -- netora` (or `scripts/verify-app.sh netora`):
      typecheck + lint + vitest at 100% coverage (lines/functions/branches/
      statements) + build all green
- [ ] No ColorLib / itlock reference in ANY app file (comments included);
      provenance lives only in this spec, TEMPLATES.md, and the PR
- [ ] Footer links https://www.componentdock.com/
- [ ] `apps/netora/public/CNAME` = `netora.free.componentdock.com` and
      package `"homepage"` = `https://netora.free.componentdock.com`
- [ ] Google Fonts: Fira Sans (400-800) + Rubik (300-700) via
      `<link>` in index.html — no copied font files
- [ ] Placeholder images `https://picsum.photos/seed/netora-<n>/<w>/<h>` —
      screen the hero seed for a tech/office subject (developer-at-screen
      vibe), never copy ColorLib assets
      Implementation note (2026-08-18): pinned verified picsum IDs instead of
      seeds — hero slides use `picsum.photos/id/201` (workspace desk with
      laptop) and `picsum.photos/id/119` (grayscale workspace), requested at
      1920x1400 so the source's letterbox bars are cropped by `object-cover`;
      about = id/2, insights = id/60, services = id/2,3,6, cases = id/1,0,48,
      avatars = id/64,823. All verified visually as on-subject (office/tech/
      portrait).
- [ ] Icons from lucide-react (verify every export with the typeof probe —
      brand glyphs are NOT in lucide-react; socials = inline SVG)
- [ ] Buttons all radius 0; brand-blue `#316EC2` fill on hover for btn_01
- [ ] Section order matches the live DOM: header → hero → Satisfaction band
      → Industry We Offer → About → Services → Insights band → brands →
      Case Study → testimonials → footer
- [ ] Bookkeeping: mark BOTH Itlock TEMPLATES.md rows (lines 592, 1064)
      `[x]` + `netora` URL + `npm run readme:status`
