# Template: Lading (Logistics / Cargo)

> **SUPERSEDED** — ColorLib "Cargo" shipped as **Haulage** (PR #315,
> https://free-react-templates-haulage.surge.sh). Do NOT implement under the
> "Lading" name — delete this spec on next cleanup. (The implementer claimed
> Cargo as `haulage`; the prep spec below documents the same source's design
> tokens, which the Haulage implementation follows.)

## Purpose

Lading is a single-page logistics & cargo shipping website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cargo" design (see TEMPLATES.md — listed under Bootstrap,
line 357, first unchecked item whose prep did not exist on main; the same
slug also appears as a duplicate at line 925), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a freight-forwarding landing page: a thin grey top bar
(email + phone + Twitter/Facebook icons), a white sticky navbar with an
orange "Cargo" logo and anchor links (Home, Services, About Us, Team,
Pricing, FAQ, Why Us, Testimonials, Blog, Contact), a full-viewport hero
photo of a shipping port with a blue gradient overlay (45deg #377aff →
#00d9ff at ~95% opacity), white Oswald headline "Choose Your Quality
Delivery of Your Cargo" and a tracking form (white input "Enter your
tracking number" + orange "Track Now" button), three image service cards
(Sea Freight, Air Freight, Package Forwarding) overlapping the hero bottom,
a "What We Offer" 6-icon card grid (flaticon ferry/airplane/box/lorry/
warehouse/add), a light-grey "About Us" split with four animated counters
(Years of Experience, Companies, Covered Countries, Couriers), an "Our
Staff" grid of six team members, a light-grey 3-tier "Pricing" section
(Basic $47, Premium $200, Professional $750 per year), a "Frequently Ask
Questions" two-column Q&A grid (8 items), a "Why Us" checklist section
(Cargo express, Secure Services, Secure Warehouseing, Cost savings, Proven
by great companies), a "Happy Clients" testimonial carousel (4 quotes in
italic Georgia serif), an "Articles" section (2 blog cards with date, title,
excerpt, Read More), a "Contact Us" section (First/Last name, Email, message
form + a white Contact Info card with Address/Phone/Email), and a dark
#333 footer (about blurb, Features links, newsletter subscribe, Follow Us
social icons, copyright bar). Lading recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cargo" — free logistics/cargo website template
  (source: https://colorlib.com/wp/template/cargo/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cargo/`
  (HTTP 200, ~48KB) + stylesheet `css/style.css` (28KB) plus
  `bootstrap.min.css` (btn/form tokens), `owl.carousel.min.css` (service +
  testimonial carousels), `aos.css` (fade-up scroll reveals),
  `jquery.fancybox.min.css` (image lightbox), `flaticon` + `icomoon` icon
  fonts. The rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`cargo-free-template.jpg`, 1200×946) confirms the visual design: blue
  gradient overlay over a busy port photo (cranes + cargo ships), white
  headline, white tracking input + bright orange "Track Now" button, three
  white service cards below (ship / airplane / person holding a box photos,
  orange uppercase titles), white navbar with orange "CARGO" logo, thin grey
  top bar with contact info and social icons. Palette: white sections, light
  grey #f6f5f5 section backgrounds, orange #ff8b00 primary accent (logo,
  buttons, card titles, counters, prices), blue gradient hero overlay
  #377aff → #00d9ff, dark #333 footer.
- **Section order (1:1):**
  1. `div.top-bar` (border-bottom 1px #e9ecef): left email
     `info@yourdomain.com` + phone `+1 (234) 5678 9101` (icomoon icons);
     right Twitter + Facebook icon links.
  2. `header.site-navbar.js-sticky-header.site-navbar-target` (white,
     sticky, padding 1rem, z-index 1999): `a` brand "Cargo" in the orange
     primary; `nav.site-navigation.text-right.ml-auto` links — **Home**,
     **Services**, **About Us**, **Team**, **Pricing**, **FAQ**, **Why Us**,
     **Testimonials**, **Blog**, **Contact** (the original also has a
     "More Links" dropdown with Menu One / Menu Two / Menu Three); mobile:
     `.toggle-button.d-inline-block.d-lg-none` hamburger → collapsible menu.
  3. `div.ftco-cover-1.overlay` (bg image `source.unsplash.com/
pSyfecRCBQA/1920x780`, cover, height 100vh / min-height 600px; `:before`
     overlay `linear-gradient(45deg, #377aff 0%, #00d9ff 100%)` at opacity
     .95): `div.container > div.row.align-items-center > div.col-lg-6`:
     `h1` white "Choose Your Quality Delivery of Your Cargo" (Oswald,
     4.5rem, line-height 1), `p.mb-5` lorem paragraph, `<form>` —
     `div.form-group.d-flex`: `input.form-control` placeholder "Enter your
     tracking number" + `input.btn.btn-primary.text-white.px-4` value
     "Track Now" (both height 55px, border-radius 4px; the button renders
     orange #ff8b00 in the template's overrides).
  4. `div.ftco-service-image-1.pb-5` (overlaps the hero bottom,
     `margin-top: -70px`): `div.owl-carousel.owl-all` with 3
     `div.service.text-center` slides — image (`images/cargo_sea_small.jpg`,
     `cargo_air_small.jpg`, `cargo_delivery_small.jpg`) + `div.px-md-3`:
     `h3 > a` orange title **Sea Freight** / **Air Freight** /
     **Package Forwarding** + lorem paragraph.
  5. `section.site-section` ("What We Offer", `block-heading-1` eyebrow +
     `h2`): 6 icon cards (flaticon **ferry**, **airplane**, **box**,
     **lorry**, **warehouse**, **add**) with title + lorem + "Read More"
     orange button (`a.btn.border-w-2.rounded.primary-primary-outline--hover`):
     **Sea Freight**, **Air Freight**, **Package Forwarding**, **Trucking**,
     **Warehouse**, **Delivery**.
  6. `section.site-section.bg-light` (About Us): split `col-lg-6` image
     (`images/cargo_delivery_big.jpg`) + `col-lg-6` copy: `h2` "About Us" +
     lorem paragraphs + 4 `div.block-counter-1` counters —
     **Years of Experience**, **Companies**, **Covered Countries**,
     **Couriers** — each with an animated number (CSS `.number`: color
     #ff8b00, font-size 4rem, 50px × 3px underline bar via `:after`) and a
     `p.caption` (14px, letter-spacing .05em).
  7. `section.site-section` (Our Staff): `block-heading-1` heading + 6
     `div.block-team-member-1.text-center.rounded.h-100` cards (padding
     30px, white bg, 1px #e9ecef border, hover lift transition) — photo
     (`images/person_1.jpg` … `person_4.jpg` etc.), `h3` name, role line —
     **Max Carlson** (Co-Founder), **Charlotte Pilat** (Co-Founder),
     **Nicole Lewis**, **Jean Smith**, **Bob Carry**, **Anne Fisher** — and
     `div.block-social-1` social icons.
  8. `section.site-section.bg-light` (Pricing): `block-heading-1` heading +
     3 `div.pricing` cards (white bg, padding 30px) — **Basic** /
     **Premium** / **Professional** — each with `div.price.text-center.mb-4`:
     gray `/ year` label (color #cccccc) + big number in orange (`span > span`
     font-size 3rem, color #ff8b00) — **$47**, **$200**, **$750** per year —
     5 lorem feature lines, and a "Buy Now" button (the original uses
     `btn-secondary` / `btn-primary` variants per card).
  9. `section.site-section` (FAQ): `block-heading-1` heading "Frequently
     Ask Questions" [sic] + a 2-column grid (`col-lg-6`) of 8
     `div.mb-5` Q&A blocks — `h3.text-black.h4.mb-4` with orange
     `icon-question_answer` icon + lorem answer paragraph. Questions: Can I
     accept both Paypal and Stripe? / What available is refund period? /
     Can I accept both Paypal and Stripe? / What available is refund
     period? / Where are you from? / What is your opening time? / Can I
     accept both Paypal and Stripe? / What available is refund period?
     (NOT an accordion — static Q&A pairs.)
  10. `section.site-section` (Why Us): `block-heading-1` heading "Why Us" +
      `h4.text-primary` "We work quickly and efficiently!" + lorem paragraph
      - `ul.ul-check.primary.list-unstyled.mt-5` checklist — **Cargo
        express**, **Secure Services**, **Secure Warehouseing**,
        **Cost savings**, **Proven by great companies** (orange check icons).
  11. `section.site-section.bg-light.block-13` (Happy Clients,
      `id="testimonials-section"`): `block-heading-1` heading "Happy
      Clients" + `div.owl-carousel.nonloop-block-13` of 4
      `div.block-testimony-1.text-center` cards — `blockquote.mb-4` (white
      bg, padding 30px, italic 18px, color #000, Georgia serif) + `figure`
      rounded avatar (`images/person_4.jpg` etc.) + `h3.font-size-20.
text-black` name — **Ricky Fisher**, **Ken Davis**, **Mellisa
      Griffin**, **Robert Steward**.
  12. `section.site-section` (Articles): `block-heading-1` heading
      "Articles" + 2 `div.mb-5.d-flex.blog-entry` cards — `span` date
      "Apr 19, 2019", `h2` title link "Knowing the Difference Is Key to
      Effective Logistics", lorem excerpt, "Read More" link.
  13. `section.site-section` (Contact): `block-heading-1` eyebrow "Get In
      Touch" + `h2` "Contact Us"; `div.col-lg-6` `<form>` — **First name**
      - **First name** [sic — the original duplicates the label; recreate
        as First name / Last name], **Email address**, `textarea` "Write your
        message." (rows 10), submit `input.btn.btn-block.btn-primary.py-3.
px-5` value "Send Message"; `div.col-lg-4.ml-auto` white card
        (`div.bg-white.p-3.p-md-5`) "Contact Info" — **Address:** 34 Street
        Name, City Name Here, United States · **Phone:** +1 242 4942 290 ·
        **Email:** info@yourdomain.com.
  14. `footer.site-footer` (bg #333333, padding 4em 0, white headings,
      links rgba(255,255,255,.5)): `div.row.mb-4` columns — **About Us**
      (logo + lorem paragraph), **Features** (About Us, Testimonials, Terms
      of Service, Privacy, Contact Us), **Subscribe to Newsletter**
      (`form.footer-suscribe-form`: input placeholder "Enter Email" +
      "Subscribe" button), **Follow Us** (social icons); bottom row:
      copyright "© ... All rights reserved | This template is made with by
      Colorlib" → repo-standard credit.
- **Design tokens extracted from `css/style.css` + `bootstrap.min.css`:**
  - Fonts: **Oswald** (headings: `h1, h2, h3, h4, h5, .h1…` —
    `font-family: "Oswald", sans-serif`) + **Rubik** (body/UI —
    `font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, ...`). Load both via Google Fonts `<link>` in index.html.
  - Primary orange: **#ff8b00** — `.primary-primary-outline--hover` button
    bg, logo, `.block-heading-1 h2` (3rem), `.block-counter-1 .number`
    (4rem), `.pricing .price > span > span` (3rem), `.text-primary`
    (service card titles, FAQ icons, "Why Us" h4), dotted underlines.
  - Hero overlay: **linear-gradient(45deg, #377aff 0%, #00d9ff 100%)** at
    opacity .95 over the background photo (blue → cyan).
  - Light section background: **#f6f5f5** (`bg-light`: About Us, Pricing,
    Happy Clients).
  - Dark footer: **#333333**; footer headings white, footer links
    rgba(255,255,255,0.5) (white on hover).
  - Buttons `.btn.border-w-2.rounded.primary-primary-outline--hover`:
    background **#ff8b00**, white text, 2px border (transparent), rounded;
    hover → transparent background + 2px #ff8b00 border (outline flip).
    Bootstrap `.btn-primary` renders orange via the template overrides;
    `.btn-secondary` for the alternate pricing card.
  - Forms: `.form-control` height **55px**, border-radius **4px** (hero
    tracking form); contact form uses standard Bootstrap controls.
  - `.block-heading-1` eyebrow `span`: uppercase, 12px, letter-spacing
    .1em, bold, color **#b8b8b8**; heading `h2`: 3rem, #ff8b00.
  - `.block-team-member-1`: white bg, 1px #e9ecef border, 30px padding,
    radius (rounded), hover lift.
  - `.pricing`: white bg, 30px padding; `.price > span` gray #cccccc;
    price number 3rem orange.
  - `.block-testimony-1 blockquote`: white bg, 30px padding, italic 18px,
    color #000, `Georgia, Times, serif`.
  - Counters `.block-counter-1 .number`: orange 4rem, 3px underline bar
    rgba(52,58,64,.3); `.caption` 14px letter-spacing .05em.
  - Body text: #939393; hero paragraph white; headings near-black.
  - Spacing: `.site-section` rhythm, hero 100vh/min-height 600px, service
    cards overlap hero bottom by -70px, grids col-lg-4 / col-lg-6.
- **Recreation decisions:** top bar = thin grey bar with email + phone +
  social icons; navbar = white sticky with orange brand "Lading", anchor
  links (Home, Services, About Us, Team, Pricing, FAQ, Why Us,
  Testimonials, Blog, Contact) + mobile hamburger collapse; hero =
  full-viewport port photo with blue gradient overlay, white Oswald
  headline "Choose Your Quality Delivery of Your Cargo", tracking form
  (input + orange "Track Now" button); service carousel = 3 image cards
  overlapping the hero bottom (Sea Freight / Air Freight / Package
  Forwarding); offer = 6 icon cards (Sea Freight, Air Freight, Package
  Forwarding, Trucking, Warehouse, Delivery) each with a "Read More"
  orange button; about = light-grey split with photo + copy + 4 animated
  counters; staff = 6 team cards (photo, name, role, social icons);
  pricing = 3 white cards (Basic $47 / Premium $200 / Professional $750 per
  year) with Buy Now buttons; FAQ = 2-column static Q&A grid (8 items);
  why-us = checklist section (5 orange-checked items); testimonials =
  "Happy Clients" carousel with 4 quotes (italic Georgia) + avatars;
  articles = 2 blog cards (date, title, excerpt, Read More); contact =
  form (First name, Last name, Email address, message, Send Message) +
  white Contact Info card (Address / Phone / Email); footer = dark #333,
  about + Features links + newsletter subscribe + Follow Us social +
  repo-standard bottom credit; images picsum-seeded
  (`picsum.photos/seed/lading-N/w/h`); Google Fonts Oswald + Rubik via
  `<link>`; icons via lucide-react plus inline SVG brand icons
  (Facebook, Twitter) since lucide-react removed brand icons.

Lading lives in `apps/lading` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Top bar

The system SHALL render a thin top bar with contact details and social icon
links.

#### Scenario: Top bar content

- **GIVEN** the Lading page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show the email `info@yourdomain.com` with an icon
- **AND** it SHALL show the phone number `+1 (234) 5678 9101` with an icon
- **AND** it SHALL show Twitter and Facebook social icon links

### Requirement: Navbar

The system SHALL render a white sticky navbar with a brand, anchor
navigation links, and a mobile hamburger collapse.

#### Scenario: Navbar content

- **GIVEN** the Lading page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site brand "Lading" in the orange primary color
- **AND** it SHALL show the nav links Home, Services, About Us, Team,
  Pricing, FAQ, Why Us, Testimonials, Blog, and Contact

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** the nav links SHALL be revealed in a collapsed menu
- **AND** activating the control again SHALL hide the menu

### Requirement: Hero

The system SHALL render a full-viewport hero with a background photo, blue
gradient overlay, white headline, and a cargo tracking form.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-viewport background photo with a blue
  gradient overlay (45deg #377aff → #00d9ff)
- **AND** it SHALL show the white headline "Choose Your Quality Delivery of
  Your Cargo"
- **AND** it SHALL show a short paragraph of copy

#### Scenario: Tracking form

- **GIVEN** the hero section is displayed
- **WHEN** the tracking form is rendered
- **THEN** it SHALL show an input with placeholder "Enter your tracking
  number"
- **AND** it SHALL show an orange "Track Now" submit button

### Requirement: Service carousel

The system SHALL render three image service cards overlapping the hero
bottom: Sea Freight, Air Freight, and Package Forwarding.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the service cards are displayed
- **THEN** they SHALL appear directly below (overlapping) the hero
- **AND** each card SHALL show an image, an orange title (Sea Freight,
  Air Freight, Package Forwarding), and a short description

### Requirement: What We Offer

The system SHALL render a "What We Offer" section with six icon cards, each
with a title, description, and a Read More button.

#### Scenario: Offer cards

- **GIVEN** the page is rendered
- **WHEN** the offer section is displayed
- **THEN** it SHALL show the section heading "What We Offer" with an
  uppercase eyebrow label
- **AND** it SHALL show six cards: Sea Freight, Air Freight, Package
  Forwarding, Trucking, Warehouse, and Delivery
- **AND** each card SHALL show an icon, title, description, and an orange
  "Read More" button

### Requirement: About section with counters

The system SHALL render a light-grey About Us split with a photo, copy, and
four animated counters.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About Us" with paragraphs of copy and
  a photo beside the text
- **AND** it SHALL show four counters: Years of Experience, Companies,
  Covered Countries, and Couriers
- **AND** each counter SHALL show an orange number and a caption label

### Requirement: Our Staff

The system SHALL render an "Our Staff" section with six team member cards.

#### Scenario: Team members

- **GIVEN** the page is rendered
- **WHEN** the staff section is displayed
- **THEN** it SHALL show the section heading "Our Staff"
- **AND** it SHALL show team members Max Carlson (Co-Founder), Charlotte
  Pilat (Co-Founder), Nicole Lewis, Jean Smith, Bob Carry, and Anne Fisher
- **AND** each member SHALL show a photo, their name, role, and social
  icons

### Requirement: Pricing

The system SHALL render a light-grey pricing section with three tier cards.

#### Scenario: Pricing tiers

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the section heading "Pricing"
- **AND** it SHALL show tiers Basic, Premium, and Professional
- **AND** each tier SHALL show a price per year ($47, $200, $750), feature
  lines, and a Buy Now button

### Requirement: FAQ

The system SHALL render a "Frequently Ask Questions" section with eight
question/answer pairs in a two-column grid.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the section heading "Frequently Ask Questions"
- **AND** it SHALL show eight question/answer pairs (e.g. "Can I accept
  both Paypal and Stripe?", "What available is refund period?")
- **AND** each question SHALL be preceded by an orange question icon

### Requirement: Why Us

The system SHALL render a "Why Us" section with a headline, copy, and a
checklist of five services.

#### Scenario: Why Us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL show the heading "Why Us"
- **AND** it SHALL show the orange headline "We work quickly and
  efficiently!"
- **AND** it SHALL show a checklist with orange check icons: Cargo express,
  Secure Services, Secure Warehouseing, Cost savings, and Proven by great
  companies

### Requirement: Happy Clients

The system SHALL render a "Happy Clients" section with a testimonial
carousel of four quotes.

#### Scenario: Testimonial quotes

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the section heading "Happy Clients"
- **AND** it SHALL show at least four quotes with author names (e.g. Ricky
  Fisher, Ken Davis, Mellisa Griffin, Robert Steward)
- **AND** each quote SHALL be styled italic in a serif font with a rounded
  avatar photo

### Requirement: Articles

The system SHALL render an "Articles" section with two blog-style cards.

#### Scenario: Article cards

- **GIVEN** the page is rendered
- **WHEN** the articles section is displayed
- **THEN** it SHALL show the section heading "Articles"
- **AND** it SHALL show two cards, each with a date (e.g. "Apr 19, 2019"),
  a title, an excerpt, and a Read More link

### Requirement: Contact section

The system SHALL render a "Contact Us" section with a message form and a
Contact Info card.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Contact Us" with the eyebrow "Get In
  Touch"
- **AND** it SHALL show a form with First name, Last name, Email address,
  and a "Write your message." textarea plus an orange "Send Message"
  button

#### Scenario: Contact info

- **GIVEN** the contact section is displayed
- **WHEN** the info card is rendered
- **THEN** it SHALL show a white card titled "Contact Info"
- **AND** it SHALL show Address (34 Street Name, City Name Here, United
  States), Phone (+1 242 4942 290), and Email (info@yourdomain.com)

### Requirement: Footer

The system SHALL render a dark footer with an about blurb, feature links, a
newsletter subscribe form, social icons, and a bottom bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About Us column with a short blurb
- **AND** it SHALL show a Features column with About Us, Testimonials,
  Terms of Service, Privacy, and Contact Us links
- **AND** it SHALL show a "Subscribe to Newsletter" form with an email
  input and a Subscribe button
- **AND** it SHALL show a "Follow Us" column with social icons
- **AND** the bottom bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lading app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose top bar, navbar, hero, service cards,
  offer, about, staff, pricing, FAQ, why us, testimonials, articles,
  contact, and footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Lading — Logistics & Cargo"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- lading` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (top bar → navbar → hero →
      service cards → offer → about → staff → pricing → FAQ → why us →
      testimonials → articles → contact → footer).
- [ ] Design tokens applied: primary orange #ff8b00 (brand, buttons, card
      titles, counters, prices), hero blue gradient overlay
      linear-gradient(45deg, #377aff → #00d9ff) ~95% opacity, light section
      bg #f6f5f5, dark footer #333333, Oswald headings + Rubik body,
      buttons with 2px border + orange fill flipping to outline on hover,
      form controls 55px height / 4px radius.
- [ ] Hero shows the tracking form (input + orange "Track Now" button) and
      the three service cards overlap the hero bottom.
- [ ] About counters animate to their final values in orange with the
      underline bar.
- [ ] FAQ is a static two-column Q&A grid (not an accordion).
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Cargo), preview URL, tokens,
      and renames (including the fixed "First name" duplicate and the
      "Frequently Ask Questions" heading kept or corrected).
