# Template: Liftoff (Landing Page Template)

## Purpose

Liftoff is a business landing-page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Landerz"
template design (see TEMPLATES.md — appears 4×: lines 433, 1072, 2058, 2332;
all four rows point to the same source, one prep covers all; verified with
`grep -c 'wp/template/landerz/'` = 4), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/landerz/ (landing page template)
Preview URL: https://preview.colorlib.com/theme/landerz/

## Design reference (replication findings)

- **Original:** ColorLib "Landerz" — business/startup landing page
  (`<title>Landerz &mdash; Website by Colorlib</title>`). A clean white
  business one-pager: centered brand logo above a white sticky navbar with
  six anchor links (Home / Features / About Us / Testimonials / Blog /
  Contact); a full-height hero split (left: 900-black "Grow Your Business
  Faster" headline + gray subtext + teal pill "Get Started" button; right: a
  flat-style floating-devices illustration absolutely positioned at the right
  edge); a light-gray "Features" section of six white cards with teal
  circular icons and "Learn More" links (cards fill teal + lift on hover);
  two "feature-big" alternating rows (device illustration + 40px-900 heading +
  green-check list + white author-quote box with rounded avatar, name and
  "Co-Founder, XYZ Inc." title); a light-gray "About Us" row (rounded photo +
  heading + paragraph + teal Learn More button); a "Testimonials" carousel of
  four centered quotes (round avatars, 1.5rem italic quotes, bold names) with
  round prev/next arrows and dot pagination; a "Blog Posts" section of three
  horizontal-entry cards (image, 30px link headline, gray meta line
  "Author • Jan 18, 2019 • News", excerpt, "Continue Reading..." link); a
  light-gray "Get In Touch" section with a white contact form card (First
  Name / Last Name / Email / Subject / Message textarea, square inputs, teal
  "Send Message" submit); and a centered white footer with three circular
  social icons (Facebook, Twitter, Instagram) and the ColorLib copyright
  line. Scrollspy highlights the active nav link in teal.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/landerz/
  (HTTP 200, ~26.6 KB HTML fetched; `css/style.css` ~20 KB parsed for
  tokens — the page also imports bootstrap.min.css, jquery-ui.css,
  owl.carousel.min.css, owl.theme.default.min.css, jquery.fancybox.min.css,
  bootstrap-datepicker.css, aos.css, fonts/icomoon/style.css and
  fonts/flaticon/font/flaticon.css; jQuery + owl carousel + AOS scroll
  animations, NOT Tailwind).
- **Screenshot note:** `landerz-free-template.jpg` (1200×946) MATCHES the
  live template (centered logo, nav with teal active Home link, teal pill
  "Get Started" button, flat illustration of a woman in a yellow bean bag on
  the hero right, tops of white feature cards with teal circular icons). The
  live preview DOM + stylesheet are the authoritative reference; the
  screenshot confirms the same design.

### Section structure (from the live DOM, top to bottom)

1. `div.container.d-none.d-lg-block` — desktop-only top logo block: row >
   `col-12.text-center.mb-4.mt-5` > `h1.mb-0.site-logo` > `a.text-black.h2.mb-0`
   "Landerz" + `span.text-primary` "." (brand name in black with a teal dot;
   centered above the navbar on desktop only).
2. `header.site-navbar.py-md-4.js-sticky-header.site-navbar-target` — white
   (bg `#fff`), `position: absolute; width: 100%; z-index: 1999`, sticky on
   scroll. `div.container` > `div.row.align-items-center`:
   - `col-6.col-md-6.col-xl-2.d-block.d-lg-none` — mobile-only logo (same
     Landerz. markup).
   - `col-12.col-md-10.main-menu` > `nav.site-navigation.position-relative.text-right` >
     `ul.site-menu.main-menu.js-clone-nav.mr-auto.d-none.d-lg-block`: 6 ×
     `li > a.nav-link` — Home (`#home-section`), Features
     (`#features-section`), About Us (`#about-section`), Testimonials
     (`#testimonials-section`), Blog (`#blog-section`), Contact
     (`#contact-section`). Links: `padding: 5px 20px`, color `#000`,
     hover `#00d2b5`; `.active` link `#00d2b5`. Navbar bottom border 1px
     `#f3f3f4`. (Dropdown support exists in CSS — `.has-children .dropdown`
     with 2px `#00d2b5` top border — but the Landerz page itself has NO
     dropdowns; nav is flat.)
   - `col-6.col-md-6.d-inline-block.d-lg-none` > `a.site-menu-toggle.js-menu-toggle`
     (`span.icon-menu` hamburger) — toggles `div.site-mobile-menu` offcanvas
     panel (header with `span.icon-close2` close + body listing the same
     links), plus a `rgba(0,0,0,0.6)` overlay on `.site-wrap`.
3. `div.site-blocks-cover` — hero (white; `min-height: 600px; height:
calc(100vh)`; `background-size: 120% 200%; background-position: top`;
   decorative `:after` SVG art on the right). `div.container` >
   `div.row.align-items-center.justify-content-center` > `div.col-md-12`
   (position relative, data-aos fade-up):
   - `img.img-absolute` (`images/landing_1.png` — flat illustration of a
     person in a yellow bean bag with a device + floating UI cards;
     `position: absolute; right: 0; top: 50%; transform: translateY(-50%)
translateX(30%)`; relative + static on mobile).
   - `div.row.mb-4` > `div.col-lg-4.mr-auto`: `h1` "Grow Your Business
     Faster" (3.5rem, weight 900, `#000`; 2rem on mobile) + `p.mb-5` (1rem,
     weight 300, `#6c757d`) + `div > a.btn.btn-primary.mr-2.mb-2` "Get
     Started".
4. `div.site-section.bg-light#features-section` — bg `#f6f6f6` (style.css
   overrides bootstrap `.bg-light`), `.site-section` padding 2.5em 0 (5em at
   ≥768px). `div.container` > `div.row.mb-5` (`col-12.text-center` >
   `h2.section-title.mb-3` "Features" — 40px, weight 900, `#000`; 30px
   mobile) + `div.row.align-items-stretch`: 6 × `col-md-6.col-lg-4.mb-4.mb-lg-4`
   (data-aos fade-up) > `div.unit-4.d-block` (white card, padding 30px,
   border-radius 5px):
   - `div.unit-4-icon.mb-3` > `span.icon-wrap` (40×40, border-radius 50%,
     bg `#00d2b5`, shadow `0 4px 20px -5px rgba(0,210,181,0.4)`) >
     `span.text-primary` icomoon icon (white, 1.5rem): icon-autorenew
     (Business Consulting), icon-store_mall_directory (Market Analysis),
     icon-shopping_basket (User Monitoring), icon-settings_backup_restore
     (Insurance Consulting), icon-sentiment_satisfied (Customer Satistified —
     source typo), icon-power (Plug & Play).
   - `div > h3` (16px `#000`) + `p` (15px, weight 300) + `p > a` "Learn
     More".
   - Hover: card bg → `#00d2b5`, `top: -7px`, same teal shadow; icon-wrap bg
     → `#fff` with teal icon; h3 → `#fff`; p → `rgba(255,255,255,0.7)`;
     link → `#fff`.
5. `div.feature-big` — container > `div.row.mb-5.site-section.border-bottom`
   (border-bottom 1px `#edf0f5`):
   - `col-lg-7`: `img.img-fluid` (`do_ui_kit_download_cta_floating_devices-2x.png`
     device illustration).
   - `col-lg-5.pl-lg-5.ml-auto.mt-md-5`: `h2.text-black` "Create interactive
     prototypes" (40px, weight 900, margin-bottom 30px) + `p.mb-4` +
     `ul.ul-check.mb-5.list-unstyled.success` — 2 li ("Adipisci excepturi
     aliquam", "Deleniti labore reiciendis"), each `padding-left: 35px;
margin-bottom: 15px` with a green (`#8bc34a`) check `::before` +
     `div.author-box` (padding 20px, border 1px `#eee`, border-radius 4px,
     shadow `0 5px 15px -2px rgba(0,0,0,0.1)`): `div.d-flex.mb-4` (img
     `person_1.jpg` rounded-circle max-width 50px + `div.mr-auto.text-black`:
     `strong` "Amalia G." + `<br>` "Co-Founder, XYZ Inc.") + `blockquote`
     (italic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
     Ducimus vitae ipsa asperiores inventore aperiam iure?").
6. `div.mt-5.row.mb-5.site-section` (second feature-big row, REVERSED on
   desktop): `col-lg-7.order-1.order-lg-2` (img
   `do_ui_kit_hero_floating_devices-2x.png`) + `col-lg-5.pr-lg-5.mr-auto.mt-5.order-2.order-lg-1`:
   h2 "Create interactive prototypes" + p + `ul.ul-check.success` (2 li:
   "Laborum enim quasi at modi", "Ad at tempore") + `div.author-box`
   (img `person_4.jpg`, `strong` "Darren K.", "Co-Founder, XYZ Inc.", same
   italic quote).
7. `div.site-section.bg-light#about-section` — container > `row.mb-5`
   (centered `h2.section-title.mb-3` "About Us") + `row.mb-5`:
   `col-lg-6` (img `about_1.jpg` `img-fluid mb-5 mb-lg-0 rounded shadow`) +
   `col-lg-5.ml-auto.pl-lg-5`: `h2.text-black.mb-4` "Create interactive
   prototypes" + `p.mb-4` (long ipsum) + `p > a.btn.btn-primary` "Learn
   More".
8. `div.site-section.testimonial-wrap#testimonials-section` — container >
   `row.mb-5` (centered `h2.section-title.mb-3` "Testimonials") +
   `div.slide-one-item.home-slider.owl-carousel`: 4 × `div > div.testimonial`
   (max-width 800px, margin auto, text-align center):
   `figure.mb-4` (img person_3/person_2/person_4/person_1.jpg — `w-100
img-fluid mb-3 shadow`, max-width 100px, border-radius 50%) +
   `blockquote.mb-3` (1.5rem, italic, same lorem quote on all four) +
   `p.text-black > strong` name (John Smith / Robert Aguilar / Roger Spears /
   Kyle McDonald). Carousel arrows: 50×50, border-radius 50%, bg
   `rgba(0,0,0,0.2)`, white 25px icon, left 10px / right 10px, hover bg
   `#000`. Dots: 10px circles `#dee2e6`, active `#00d2b5`. (Recreate with
   client-side state — no owl-carousel dependency.)
9. `div.site-section#blog-section` — container > `row.mb-5` (centered
   `h2.section-title.mb-3` "Blog Posts") + `div.row`: 3 ×
   `col-md-6.col-lg-4.mb-4.mb-lg-4` > `div.h-entry`:
   `img.img-fluid` (img_1/img_2/img_3.jpg, margin-bottom 30px) + `h2 > a`
   "Create interactive prototypes" (30px, `#000`) + `div.meta.mb-4` (14px
   `#b3b3b3`: "Ham Brook • Jan 18, 2019 • News" / "James Phelps • Jan 18,
   2019 • News" — "News" is a link) + `p` (lorem excerpt) + `p > a`
   "Continue Reading...".
10. `div.site-section.bg-light#contact-section` — container > `row.mb-5`
    (centered `h2.section-title.mb-3` "Get In Touch") +
    `div.row.justify-content-center` > `div.col-lg-7.mb-5` > `form.p-5.bg-white`:
    `h2.h4.text-black.mb-5` "Contact Form" + rows of `div.row.form-group`:
    - `col-md-6.mb-3.mb-md-0`: `label.text-black[for=fname]` "First Name" +
      `input#fname.form-control.rounded-0`; `col-md-6`: label "Last Name" +
      `input#lname`.
    - `col-md-12`: label "Email" + `input#email[type=email]`; `col-md-12`:
      label "Subject" + `input#subject`; `col-md-12`: label "Message" +
      `textarea#message[rows=7]` placeholder "Write your notes or questions
      here...".
    - `col-md-12`: `input[type=submit][value="Send Message"].btn.btn-primary.mr-2.mb-2`.
    - Inputs: `.form-control` height 43px, radius 30px, focus border
      `#00d2b5` — but the contact form overrides with `rounded-0` (SQUARE
      corners); labels `#000`.
11. `div.footer.py-5.border-top.text-center` — white, top border 1px
    `#edf0f5`: container > `row.mb-5` (`col-12` > `p.mb-0`: 3 × `a.p-3` >
    `span.icon-facebook` / `span.icon-twitter` / `span.icon-instagram`) +
    `row` (`col-md-12` > `p.mb-0`: "Copyright © <year> All rights reserved |
    This template is made with <i.icon-heart> by <a href=colorlib.com>"
    — original ColorLib attribution).

### Content (for copy paraphrase)

- Nav: Home, Features, About Us, Testimonials, Blog, Contact (anchor links).
- Hero: h1 "Grow Your Business Faster"; subtext ipsum; CTA "Get Started".
- Features: 6 cards — Business Consulting, Market Analysis, User Monitoring,
  Insurance Consulting, Customer Satistified (source typo — paraphrase to
  "Customer Satisfaction"), Plug & Play; each with 1-sentence ipsum + "Learn
  More".
- Feature-big 1: "Create interactive prototypes" + checklist "Adipisci
  excepturi aliquam", "Deleniti labore reiciendis" + author Amalia G.,
  Co-Founder, XYZ Inc.
- Feature-big 2: same heading + checklist "Laborum enim quasi at modi", "Ad
  at tempore" + author Darren K., Co-Founder, XYZ Inc.
- About: "About Us" + heading "Create interactive prototypes" + long ipsum +
  "Learn More" button.
- Testimonials: 4 quotes (same ipsum quote in source — paraphrase into 4
  distinct customer quotes) — John Smith, Robert Aguilar, Roger Spears, Kyle
  McDonald.
- Blog: 3 entries — "Ham Brook • Jan 18, 2019 • News" and "James Phelps •
  Jan 18, 2019 • News" (×2); headlines all "Create interactive prototypes"
  (vary in recreation); "Continue Reading..." links.
- Contact: "Get In Touch" + "Contact Form" + First Name, Last Name, Email,
  Subject, Message (placeholder "Write your notes or questions here...").
- Footer: socials Facebook, Twitter, Instagram + "Copyright © <year> All
  rights reserved | This template is made with <heart> by Colorlib".

## Design tokens

| Token        | Value                 | Usage                                                                                                                                       |
| ------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| brand-teal   | `#00d2b5`             | btn-primary bg/border, active nav link, nav hover, icon-wrap bg, unit-4 hover bg, owl-dot active, form-control focus border, brand-logo dot |
| ink          | `#000`                | headings, nav links, section-title, feature-big h2, unit-4 h3, labels, footer text                                                          |
| body-gray    | `gray`                | body text (weight 300, line-height 1.7)                                                                                                     |
| muted        | `#6c757d`             | hero paragraph                                                                                                                              |
| meta-gray    | `#b3b3b3`             | blog `.meta` line                                                                                                                           |
| light-bg     | `#f6f6f6`             | features / about / contact section backgrounds (style.css overrides bootstrap `.bg-light`)                                                  |
| border       | `#edf0f5`             | feature-big border-bottom, footer border-top                                                                                                |
| nav-border   | `#f3f3f4`             | navbar bottom border                                                                                                                        |
| check-green  | `#8bc34a`             | `ul-check.success` checkmarks                                                                                                               |
| dropdown-ink | `#343a40`             | (dropdown support CSS only — no dropdowns on this page)                                                                                     |
| shadow-teal  | `rgba(0,210,181,0.4)` | btn-primary + icon-wrap shadows                                                                                                             |
| shadow-black | `rgba(0,0,0,0.1)`     | author-box + dropdown shadows                                                                                                               |
| paper        | `#ffffff`             | page bg, navbar, unit-4 cards, contact form card, footer                                                                                    |
| font-heading | "Montserrat"          | h1–h4 + form controls (`font-family: "Montserrat", ...sans-serif`)                                                                          |
| font-body    | system sans stack     | body (bootstrap default stack; style.css sets no body font-family)                                                                          |

Radii: btn 30px (pill) with padding 10px 30px font-size 16px; unit-4 card 5px;
icon-wrap 50% (40×40); author-box 4px; testimonial avatar 50%; carousel
arrows 50% (50×50); about image `rounded` (bootstrap 0.25rem); contact inputs
SQUARE (`rounded-0` override on the 30px `.form-control`). Spacing:
`.site-section` 2.5em 0 / 5em 0 (md+); section-title 40px 900 (30px mobile);
feature-big h2 40px 900 margin-bottom 30px; unit-4 padding 30px, h3 16px, p
15px 300; hero min-height calc(100vh) (600px floor), h1 3.5rem (2rem mobile);
ul-check li padding-left 35px margin-bottom 15px; h-entry img margin-bottom
30px, meta 14px; form-control height 43px; form card padding 3rem (p-5).

## Requirements

### Requirement: Header

The system SHALL render a white sticky navbar with the brand, six anchor
links, a teal active state, and a mobile offcanvas menu.

#### Scenario: Brand and nav links

- **GIVEN** the Liftoff app is rendered
- **WHEN** the page loads
- **THEN** a centered brand wordmark SHALL show above the navbar on desktop
  (black bold text with a teal trailing dot)
- **AND** the navbar SHALL list links Home, Features, About Us, Testimonials,
  Blog, Contact in black 5px/20px padded text
- **AND** each link SHALL anchor to its section (e.g. Features →
  `#features-section`)
- **AND** the link for the section currently in view SHALL be teal `#00d2b5`
- **AND** hovering any nav link SHALL turn it teal

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** an offcanvas menu SHALL open listing the same six links with a
  close control
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a full-height hero with a left text block and a
right-floating illustration.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the 900-weight black headline "Grow
  Your Business Faster" (3.5rem)
- **AND** a gray subtext paragraph SHALL sit below it
- **AND** a teal pill button SHALL read "Get Started"
- **AND** an illustration SHALL be absolutely positioned on the right edge,
  vertically centered (mobile: in-flow above the text)

### Requirement: Features grid

The system SHALL render a `#f6f6f6` section titled "Features" with six white
cards in a 3-column grid, each with a teal circular icon and a "Learn More"
link.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** the page loads
- **THEN** the centered 900-weight title SHALL read "Features"
- **AND** six cards SHALL render in a 3×2 grid, each with a 40×40 teal
  circular icon, a 16px black title, a 15px 300-weight excerpt, and a "Learn
  More" link
- **AND** the card titles SHALL be Business Consulting, Market Analysis, User
  Monitoring, Insurance Consulting, Customer Satisfaction, Plug & Play

#### Scenario: Card hover

- **GIVEN** a feature card is rendered
- **WHEN** the card is hovered
- **THEN** the card background SHALL fill teal `#00d2b5`, the card SHALL
  lift 7px, the icon circle SHALL turn white with a teal icon, and the title
  SHALL turn white

### Requirement: Feature-big rows

The system SHALL render two alternating feature rows, each with a device
illustration, a 40px-900 heading, a green-checked list, and an author quote
box.

#### Scenario: First row

- **GIVEN** the feature-big section is rendered
- **WHEN** the page loads
- **THEN** the first row SHALL show the illustration on the left and a black
  heading "Create interactive prototypes" with a paragraph on the right
- **AND** a two-item checklist SHALL render with green `#8bc34a` checkmarks
- **AND** a white quote box SHALL render with a round avatar, the bold name
  "Amalia G.", the line "Co-Founder, XYZ Inc.", and an italic quote

#### Scenario: Second (reversed) row

- **GIVEN** the feature-big section is rendered
- **WHEN** the page loads
- **THEN** the second row SHALL reverse the columns (illustration right,
  text left)
- **AND** its quote box SHALL show a different avatar and the name "Darren K."

### Requirement: About section

The system SHALL render a `#f6f6f6` "About Us" section with a rounded photo,
heading, paragraph, and a "Learn More" button.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the centered title SHALL read "About Us"
- **AND** a rounded shadowed photo SHALL sit on the left
- **AND** the right column SHALL show a black heading, a paragraph, and a
  teal pill "Learn More" button

### Requirement: Testimonials carousel

The system SHALL render a "Testimonials" section with a four-slide centered
carousel of quotes with round avatars and names.

#### Scenario: Carousel slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the centered title SHALL read "Testimonials"
- **AND** a slide SHALL show a round avatar, a 1.5rem italic quote, and a
  bold name (John Smith, Robert Aguilar, Roger Spears, Kyle McDonald across
  the four slides)

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is rendered
- **WHEN** the next arrow is activated
- **THEN** the carousel SHALL advance to the next slide
- **WHEN** the previous arrow is activated
- **THEN** the carousel SHALL go back one slide
- **AND** dot indicators SHALL reflect the active slide (active dot teal
  `#00d2b5`)

### Requirement: Blog section

The system SHALL render a "Blog Posts" section with three horizontal-entry
cards (image, headline, meta line, excerpt, continue-reading link).

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the centered title SHALL read "Blog Posts"
- **AND** three cards SHALL each show an image, a 30px black link headline, a
  14px `#b3b3b3` meta line ("<Author> • Jan 18, 2019 • News"), an excerpt,
  and a "Continue Reading..." link

### Requirement: Contact form

The system SHALL render a "Get In Touch" section with a white form card
containing square-cornered inputs and a teal submit button.

#### Scenario: Form fields

- **GIVEN** the contact section is rendered
- **WHEN** the page loads
- **THEN** the centered title SHALL read "Get In Touch"
- **AND** a white card SHALL show the heading "Contact Form" with labeled
  fields First Name, Last Name, Email, Subject, and a Message textarea
  (placeholder "Write your notes or questions here...")
- **AND** the submit control SHALL read "Send Message" as a teal pill button
- **AND** all inputs SHALL have square corners (`rounded-0`)

#### Scenario: Validation and submit

- **GIVEN** the contact form is rendered
- **WHEN** an invalid email or a missing required field is submitted
- **THEN** the form SHALL show per-field errors and SHALL NOT submit
- **WHEN** all fields are valid
- **THEN** the form SHALL swap to a success message (the inputs SHALL unmount
  — assert their absence)

### Requirement: Footer

The system SHALL render a centered white footer with three social links and
the ColorLib copyright line.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** three icon links SHALL render for Facebook, Twitter, and Instagram
- **AND** the copyright line SHALL read "Copyright © <year> All rights
  reserved | This template is made with <heart> by Colorlib"

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Liftoff app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the hero,
  features, feature-big, about, testimonials, blog, and contact sections in
  the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Liftoff — Landing Page Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/liftoff` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- liftoff` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#00d2b5, #000, gray, #6c757d, #b3b3b3, #f6f6f6, #edf0f5, #8bc34a, #fff, Montserrat) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `liftoff-<n>`, Google Fonts Montserrat link, lucide icons + inline SVG brand icons only)
- [ ] Feature cards fill teal + lift 7px on hover (icon circle inverts); section-title 40px 900; feature-big rows alternate/reverse
- [ ] Testimonials carousel implemented with client-side state (no owl-carousel dep); arrows + dots behave
- [ ] Scrollspy active-link highlight (IntersectionObserver or scroll state) — no jQuery
- [ ] Contact form validates (zod) + swaps to success (inputs unmount — assert absence); submit blocked until valid
- [ ] Mobile offcanvas menu opens/closes with focus handling
