# Template: Counsely (Law Firm / Attorney Template)

## Purpose

Counsely is a law-firm landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Legalcare"
template design (see TEMPLATES.md — appears 2×: lines 437, 2128; both rows
point to the same source, one prep covers all; verified with
`grep -c 'wp/template/legalcare/'` = 2), built under a DIFFERENT name
(Counsely — counsel + -ly, matching the project's naming pattern) per the
monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/legalcare/ (Bootstrap category, law
firm "Legalcare A Law Firm Agency")
Preview URL: https://preview.colorlib.com/theme/legalcare/

## Design reference (replication findings)

- **Original:** ColorLib "Legalcare" (`<title>Legalcare - Free Bootstrap 4
Template by Colorlib</title>`). A dark, professional one-page law-firm
  landing with a brass-gold `#afa939` brand accent: a transparent navbar over
  a full-height photo hero (dark overlay) with a gold uppercase subheading
  ("Welcome To Legalcare"), a 48px white headline whose LAST WORD is a
  typed-rotating gold span (Freedom. → Rights. → Case. → Custody.), and a gold
  "Get Legal Advice" CTA; a white "Why Select Us?" split (left heading + CTA,
  right 3 service cards with 100px grey circle icons); a 2-column "We Always
  Fight For Your Justice to Win" section (photo with pulsing gold video-play
  circle on the left, Mission/Vision/Value tab pills + tab content + gold
  "40 Years of Experienced" counter chip on the right); a case-studies
  carousel (4 photo cards with gold hover overlay, "Legal Seperation" [sic] /
  Corporate labels) + "See All Successful Cases" button; 4 attorney flip
  cards (photo front with white name/role box; gold back with quote, author
  row, socials); a photo "Free Consultation" section with a translucent gold
  `#afa939` overlay and a white-on-transparent form (Name/Email/Subject/
  Message + dark submit); a testimonials carousel ("Happy Clients" — 3
  translucent cards with photo, name, gold position line); a "Recent Blog"
  section (3 entries with gold date toppers); a full-width gold "Subscribe to
  our Newsletter" band (white heading + white email input + darker-gold
  `#89842c` Subscribe button); and a `#222831` dark footer (brand + 3 socials,
  Practice Areas link list, "Have a Questions?" contact block, Business
  Hours, copyright bar).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/legalcare/
  (HTTP 200, ~38 KB HTML fetched; `css/style.css` ~81 KB parsed for tokens —
  the page also imports open-iconic, animate, owl.carousel, magnific-popup,
  aos, ionicons, flaticon, icomoon; site is jQuery + Bootstrap 4 +
  owl-carousel + aos + stellar (parallax) + typed text rotation, NOT
  Tailwind).
- **Screenshot note:** `legalcare-free-template.jpg` (1200×946) MATCHES the
  live template: dark navbar with "LEGALCARE" serif-style text brand and gold
  "Free Consultation" pill on the right; full-height hero photo of a man in a
  dark suit (warm blurred office bokeh) with dark overlay, gold uppercase
  "WELCOME TO LEGALCARE" subheading, big white headline "...Your Freedom."
  (gold last word), paragraph, gold "Get Legal Advice →" button; below, the
  white "Why Select Us?" section with gold "SERVICES" eyebrow, 3 cards with
  circular icons (scales / briefcase / gavel). The live preview DOM +
  parsed stylesheet are the authoritative reference; the screenshot confirms
  the same design (note: the screenshot's "serif" impression is the Poppins
  rendering at 1200px — the stylesheet says Poppins everywhere).

### Section structure (from the live DOM, top to bottom)

1. `nav.navbar.px-md-0.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light`
   (id `ftco-navbar`; transparent over the hero; on scroll `.scrolled`:
   position fixed, top 0, bg #fff, shadow `0 0 10px rgba(0,0,0,0.1)`,
   nav links turn `#000`) > `div.container`:
   - `a.navbar-brand` "Legalcare" + `<span>A Law Firm Agency</span>` (white
     brand; recreate as text brand "COUNSELY" with tagline span).
   - `button.navbar-toggler` — `<span class="oi oi-menu">` + text "Menu"
     (hamburger; collapse `#ftco-nav` → mobile menu with client-side state).
   - `div.collapse.navbar-collapse` > `ul.navbar-nav.ml-auto`:
     `li.nav-item.active` "Home" · About · Attorneys · Practice Areas · Case
     Studies · Blog · Contact — `a.nav-link` 15px Poppins, padding .9rem
     20px, color #fff, hover/active `#afa939`.
   - `li.nav-item.cta` > `a.nav-link` "Free Consultation" — color #fff,
     border 1px solid `#afa939`, padding .5rem 18px; hover: background
     `#afa939`; `.scrolled` variant: filled gold bg.
2. `div.hero-wrap.js-fullheight` (bg image `images/bg_1.jpg`, cover, top
   center; parallax `data-stellar-background-ratio="0.5"` → recreate as
   static cover; full viewport height) > `div.overlay` (absolute inset 0, bg
   `#000`, opacity .5) > `div.container` > `div.row.no-gutters.slider-text
.js-fullheight.align-items-center.justify-content-start` > `div.col-md-6`:
   - `h2.subheading` "Welcome To Legalcare" — 15px, uppercase, weight 800,
     color `#afa939`, mb 5px.
   - `h1` "Attorneys Fighting For Your <span class="txt-rotate"
     data-rotate='["Freedom.","Rights.","Case.","Custody."]'>" — Poppins 48px
     weight 700, color #fff, line-height 1.5; the rotating span renders
     `#afa939` with a typed-cursor effect (period 2000ms) → recreate as a
     stateful word rotator with a blinking cursor bar.
   - `p.mb-4` — 16px white paragraph (ipsum — paraphrase).
   - `p` > `a.btn.btn-primary.mr-md-4.py-2.px-4` "Get Legal Advice" +
     `span.ion-ios-arrow-forward` (→ lucide ArrowRight) — bg `#afa939`,
     border 1px `#afa939`, white text, radius 5px; hover: transparent bg +
     `#afa939` text.
3. `section.ftco-section.ftco-no-pt` > `div.container` > `div.row`:
   - `div.col-lg-3.py-5` > `div.heading-section`: `span.subheading`
     "Services" + `h2.mb-4` "Why Select Us?" (30px weight 700) + `p` ipsum +
     `a.btn.btn-primary.py-3.px-4` "Free Consultation".
   - `div.col-lg-9.services-wrap.px-4.pt-5` > `div.row.pt-md-3`: 3 ×
     `div.col-md-4.d-flex.align-items-stretch` > `div.services` (position
     relative, z-index 0):
     - `div.icon.d-flex.align-items-center.justify-content-center` (100px
       circle, radius 50%, bg `rgba(0,0,0,0.05)`, margin 0 auto, mb 10px) >
       `span.flaticon-lawyer` 30px `#afa939` (source repeats the SAME icon
       ×3; the screenshot shows scales / briefcase / gavel → vary with
       lucide Scale / Briefcase / Gavel).
     - `div.text` > `h3` "Fight for Justice" / "Best Case Strategy" /
       "Experienced Attorney" + `p` (identical ipsum in source → vary).
     - `a.btn-custom` — 50px circle, bg `#afa939`, white 16px 500 arrow
       icon (lucide ArrowRight), absolute, bottom -35px, centered.
4. `section.ftco-section.ftco-no-pt.ftco-no-pb` > `div.container` >
   `div.row.d-flex` (2-col):
   - `div.col-md-6` (left): `div.d-flex.align-self-stretch.align-items-center
.justify-content-center.justify-content-md-end` with bg image
     `images/about.jpg` (cover) > `a.icon-video.popup-vimeo` — 80px circle,
     bg `#afa939`, white play icon (lucide Play), CSS pulse animation
     (video modal → recreate as decorative play button, no modal required).
   - `div.col-md-6.pl-md-5` (right) > `div.row.justify-content-start.pt-3.pb-3`
     > `div.col-md-12.heading-section`:
     - `span.subheading` "Welcome to Legalcare" + `h2.mb-4` "We Always Fight
       For Your Justice to Win" (30px 700) + `p` ipsum.
     - `div.tabulation-2.mt-4` > `ul.nav.nav-pills.nav-fill.d-md-flex.d-block`:
       3 × `li.nav-item` > `a.nav-link.py-2` (first `.active`) — "Our
       Mission" (`#home1`) / "Our Vision" (`#home2`) / "Our Value"
       (`#home3`); white bg, radius 4px, color `#000`, weight 600, border
       1px `rgba(0,0,0,0.1)`; active: bg `#afa939`, white text.
     - `div.tab-content.bg-light.rounded.mt-2` > 3 × `div.tab-pane
.container.p-0` (first `.active`) — distinct ipsum paragraphs
       (client-side tab switching).
     - `div.years.d-flex.mt-4.mt-md-5` > `h4` (display inline-block, padding
       20px, bg `#afa939`): `span.number.mr-2[data-number=40]` animated
       counter 0→40 + `span` "Years of Experienced" (white text).
5. `section.ftco-section` > `div.container` > `div.row.justify-content-center.mb-5`
   > `div.col-md-10.text-center.heading-section`: `span.subheading` "Explore
   > Case Studies" + `h2.mb-4` "1000+ Completed Cases Successfully" >
   > `div.row` > `div.col-md-12` > `div.carousel-case.owl-carousel` (4 ×
   > `div.item`):
   - `div.case.img.d-flex.align-items-center.justify-content-center`
     (bg images `images/case-1..4.jpg`, cover; `:after` gold `#afa939`
     overlay opacity 0 → 1 on hover) > `div.text.text-center` (opacity 0 →
     1 on hover): `h3 > a` "Legal Seperation" [sic — keep or fix spelling]
     - `span` "Corporate".
   - After the carousel: `div.col-md-12.text-center.mt-4` >
     `a.btn.btn-primary.px-5` "See All Successful Cases". Carousel →
     client-side state (prev/next + dots), no owl-carousel.
6. `section.ftco-section.ftco-no-pt` > `div.container-fluid.px-md-5` >
   `div.row.justify-content-center.mb-5.pb-3` > `div.col-md-7.text-center
.heading-section`: `span.subheading` "Our Attorney" + `h2.mb-4` "Our
   Legal Attorneys" > `div.row`: 4 × `div.col-lg-3.col-sm-6` >
   `div.block-2` (3D flip on hover; front/back both height 400px):
   - `div.flipper` > `div.front` (bg image `images/person_1..4.jpg`, cover)
     > `div.box` (absolute, left 20px right 20px bottom 20px): `h2` white
     > (Ryan Anderson / Greg Washer / Tony Henderson / Jack Smith) + `p` role
     > ("Civil Lawyer" in source → vary: Civil, Criminal, Family, Business
     > Lawyer).
   - `div.back` (bg `#afa939`, shadow `0 0 70px -10px rgba(0,0,0,0.4)`):
     `blockquote > p` quote (ipsum — vary) + `div.author.d-flex` (photo
     thumb, `div.name` name + `span.position` role) + social icon row
     (Twitter / Facebook / Instagram — verify exact markup in preview).
7. `section.ftco-consultation.ftco-section.ftco-no-pt.ftco-no-pb.img`
   (bg image `images/bg_2.jpg`, cover, position top center) >
   `div.overlay` (absolute inset 0, bg `#afa939`, opacity .8) >
   `div.container` > `div.row.d-md-flex.justify-content-end` >
   `div.col-md-6.half.p-3.py-5.pl-md-5.heading-section.heading-section-white`:
   - `span.subheading` "Booking an Appointment" + `h2.mb-4` "Free
     Consultation" (white).
   - `form.consultation`: 4 × `div.form-group` — `input.form-control`
     (placeholder "Your Name" / "Your Email" / "Subject") + `textarea`
     cols 30 rows 7 (placeholder "Message"); fields: height 52px, bg
     transparent, border 1px `rgba(255,255,255,0.3)`, color #fff, radius
     5px, 16px; + `input[type=submit][value="Send message"]`
     `btn.btn-dark.py-3.px-4` (dark submit → dark navy bg, white text).
8. `section.ftco-section.testimony-section` > `div.container` >
   `div.row.justify-content-center.mb-5` > `div.col-md-7.text-center
.heading-section`: `span.subheading` "Testimonial" + `h2.mb-4` "Happy
   Clients" > `div.row` > `div.col-md-12` > `div.carousel-testimony
.owl-carousel` (3 × `div.item`):
   - `div.testimony-wrap.py-4` (bg `rgba(255,255,255,0.1)`, border 1px
     `rgba(0,0,0,0.02)`, shadow `0 5px 21px -14px rgba(0,0,0,0.14)`, padding
     0 20px) > `div.text`: `p.mb-4` quote (ipsum — 3 distinct) +
     `div.d-flex.align-items-center`: `div.user-img` (40px round photo,
     bg image `images/person_1..3.jpg`) + `div.pl-3` > `p.name` (Roger
     Scott / ... — vary) + `span.position` gold `#afa939` (e.g. "Marketing
     Manager"). Carousel → client-side state.
9. `section.ftco-section.bg-light` > `div.container` > `div.row
.justify-content-center.mb-5` > `div.col-md-7.text-center.heading-section`:
   `span.subheading` "Blog" + `h2.mb-4` "Recent Blog" > `div.row`: 3 ×
   `div.col-md-4` > `div.blog-entry`:
   - `a.block-20` (bg image `images/image_1..3.jpg`, cover, height 270px).
   - `div.text.p-4.float-right.d-block`: `div.topper.d-flex.align-items-center`
     (bg `#afa939`, white; margin-top -61px, absolute, left 20px; arrow tail
     via `:after` border trick) — `div.one.py-2.pl-3.pr-1` > `span.day` "18"
     - `div.two.pl-0.pr-3.py-2` > `span.yr` "2019" + `span.mos` "October"
       (vary dates); `h3.heading` (18px 500) > `a` "All you want to know about
       industrial laws" (source repeats ×3 → vary 3 post titles) + `p` ipsum +
       `a.btn.btn-primary` "Read more".
10. `section.ftco-section.ftco-no-pt.ftco-no-pb.bg-light` > `div.container`
    > `div.row` > `div.col-md-12` > `div.ftco-animate.py-4.px-md-4.bg-primary`
    > (gold band) > `div.row`:
    - `div.col-md-6.d-flex.align-items-center` > `h2.mb-0` (white, 24px)
      "Subcribe to our Newsletter" [sic — keep or fix spelling].
    - `div.col-md-6.d-flex.align-items-center` > `form.subscribe-form` >
      `div.form-group.d-flex`: `input.form-control` (placeholder "Enter
      email address"; white bg, border 1px transparent, 16px, radius
      5px 0 0 5px) + `input[type=submit][value=Subscribe].submit.px-3` (bg
      `#89842c`, white, 16px, radius 0 5px 5px 0).
11. `<footer class="ftco-footer.ftco-bg-dark.ftco-section">` (bg `#222831`,
    padding 5em 0 3em) > `div.container` > `div.row.mb-5` (4 × `div.col-md`):
    - About column: `h2.logo` > `a` "Legalcare" + span "A Law Firm Agency"
      (gold span accent) + `p` ipsum + `ul.ftco-footer-social.list-unstyled
.float-md-left.mt-5`: 3 × `li` > `a` (50px circles, bg
      `rgba(255,255,255,0.05)`) — icon-twitter / icon-facebook /
      icon-instagram (→ inline SVG brand icons; lucide has no brands).
    - Practice Areas: `h2.ftco-heading-2` "Practice Areas" + `ul.list-unstyled`:
      8 × `li > a.py-1.d-block` (white, hover `#afa939`) with
      `span.ion-ios-arrow-forward.mr-3` (→ lucide ArrowRight): Family Law,
      Business Law, Insurance Law, Criminal Law, Drug Offenses, Fire
      Accident, Employment Law, Property Law.
    - "Have a Questions?": `div.block-23` > `ul`: `li` map-marker icon +
      "203 Fake St. Mountain View, San Francisco, California, USA";
      `li > a` phone icon + "+2 392 3929 210"; `li > a` envelope icon +
      "info@yourdomain.com" (→ lucide MapPin / Phone / Mail).
    - Business Hours: `h2.ftco-heading-2` "Business Hours" +
      `div.opening-hours` (color `#afa939`, 16px): `h4` "Opening Days:" +
      `p.pl-3` (Monday – Friday : 9am to 20 pm · Saturday : 9am to 17 pm) +
      `h4` "Vacations:" + `p.pl-3` (All Sunday Days · All Official
      Holidays).
    - `div.row` > `div.col-md-12.text-center`: copyright bar (ColorLib
      credit line "Copyright © <year> All rights reserved | This template is
      made with <heart> by Colorlib" → recreate as © 2026 Counsely — Law
      Firm Agency · All rights reserved).

### Content (for copy paraphrase)

- Nav: Home (active), About, Attorneys, Practice Areas, Case Studies, Blog,
  Contact + CTA "Free Consultation".
- Hero: subheading "Welcome To Legalcare"; h1 "Attorneys Fighting For Your
  [Freedom. / Rights. / Case. / Custody.]"; ipsum p; CTA "Get Legal Advice".
- Services: "Services" / "Why Select Us?" + 3 cards — Fight for Justice /
  Best Case Strategy / Experienced Attorney.
- Justice: "Welcome to Legalcare" / "We Always Fight For Your Justice to
  Win"; tabs Our Mission / Our Vision / Our Value; counter "40 Years of
  Experienced".
- Case studies: "Explore Case Studies" / "1000+ Completed Cases
  Successfully"; 4 cards "Legal Seperation" / "Corporate"; "See All
  Successful Cases".
- Attorneys: "Our Attorney" / "Our Legal Attorneys"; Ryan Anderson, Greg
  Washer, Tony Henderson, Jack Smith; roles vary (Civil/Criminal/Family/
  Business Lawyer).
- Consultation: "Booking an Appointment" / "Free Consultation"; fields Your
  Name, Your Email, Subject, Message; submit "Send message".
- Testimonials: "Testimonial" / "Happy Clients"; 3 quotes with name +
  position.
- Blog: "Blog" / "Recent Blog"; 3 posts (day/yr/mos topper, varied titles,
  ipsum, "Read more").
- Newsletter: "Subcribe to our Newsletter" + "Enter email address" +
  "Subscribe".
- Footer: brand + 3 socials; 8 Practice Areas links; contact block; Business
  Hours; copyright line.

## Design tokens

| Token          | Value                   | Usage                                                                                                                                                                                                                                                                           |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand-gold     | `#afa939`               | btn-primary bg/border, nav hover+active, cta outline→fill, subheading, h1 rotating span, services icon, btn-custom circle, icon-video, tab active, years chip, case hover overlay, consultation overlay, testimony position, blog topper, footer link hover, newsletter band bg |
| gold-dark      | `#89842c`               | newsletter subscribe submit button bg (radius 0 5px 5px 0)                                                                                                                                                                                                                      |
| ink            | `#000000`               | headings (h1/h2/h3), scrolled nav links, tab pill text, hero overlay bg (opacity .5)                                                                                                                                                                                            |
| footer-bg      | `#222831`               | footer background (dark navy-slate)                                                                                                                                                                                                                                             |
| paper          | `#ffffff`               | hero text, navbar (scrolled bg), tab pill bg, subscribe input bg, consultation submit (dark variant is white text)                                                                                                                                                              |
| light-shade    | `rgba(0,0,0,0.05)`      | services icon circle bg                                                                                                                                                                                                                                                         |
| hero-overlay   | `rgba(0,0,0,0.5)`       | hero dark overlay over bg photo                                                                                                                                                                                                                                                 |
| consult-border | `rgba(255,255,255,0.3)` | consultation form field border                                                                                                                                                                                                                                                  |
| testimony-bg   | `rgba(255,255,255,0.1)` | testimony card bg                                                                                                                                                                                                                                                               |
| tab-border     | `rgba(0,0,0,0.1)`       | tab pill border + navbar scrolled shadow (`0 0 10px`)                                                                                                                                                                                                                           |
| font           | "Poppins"               | everything (Arial fallback): h1 48px/700, h2 30px/700, subheading 15px/800 uppercase, nav-link 15px/400, btn 16px/500, body 16px                                                                                                                                                |

Radii: 5px on `.btn`, `.form-control` (consultation + subscribe input, split
5px 0 0 5px / 0 5px 5px 0), `.tab-content` (rounded); 4px on tab pills;
50% circles on services icon (100px), btn-custom (50px), icon-video (80px),
footer socials (50px), user-img. Spacing: sections `.ftco-section` padding
7em 0 (footer 5em 0 3em); hero full viewport height (`.js-fullheight`) with
overlay opacity .5; heading-section subheading mb 5px, h2 mb 16px (mb-4);
services icon mb 10px, btn-custom absolute bottom -35px centered; years chip
padding 20px inline-block; blog image height 270px, topper margin-top -61px
left 20px; consultation input height 52px; footer widgets mb 40px, social
circles 50px mt 5 (1.25rem).

## Requirements

### Requirement: Header / Navigation

The system SHALL render a transparent-over-hero navbar with a text brand,
seven nav links (Home active), a gold-outline CTA pill, and a mobile menu.

#### Scenario: Brand and nav links

- **GIVEN** the Counsely app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL overlay the hero transparently at the top
- **AND** the brand SHALL read "COUNSELY" with a "A Law Firm Agency" tagline
- **AND** the nav SHALL list Home (active), About, Attorneys, Practice
  Areas, Case Studies, Blog, and Contact in 15px Poppins white
- **AND** the active/current link SHALL be highlighted in brand gold

#### Scenario: CTA pill

- **GIVEN** the navbar is rendered
- **WHEN** the page loads
- **THEN** a "Free Consultation" pill SHALL render on the right with white
  text and a 1px brand-gold border
- **AND** hovering it SHALL fill the background with brand gold

#### Scenario: Scrolled state

- **GIVEN** the page is scrolled down
- **WHEN** the navbar becomes fixed
- **THEN** it SHALL turn solid white with a soft shadow
- **AND** the nav links SHALL turn black (active stays gold)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger ("Menu") is activated
- **THEN** a mobile menu SHALL open listing the same nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a full-viewport hero over a photo with a dark
overlay, a gold uppercase subheading, a headline with a rotating gold last
word, a paragraph, and a gold CTA.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the viewport with a cover photo background
  and a `rgba(0,0,0,0.5)` overlay
- **AND** the gold uppercase subheading SHALL read "Welcome To Counsely"
- **AND** the white 48px headline SHALL read "Attorneys Fighting For Your
  Freedom." with the final word rendered in brand gold

#### Scenario: Rotating word

- **GIVEN** the hero headline is rendered
- **WHEN** the rotation interval elapses
- **THEN** the gold word SHALL cycle through Freedom. → Rights. → Case. →
  Custody. and repeat
- **AND** a blinking cursor bar SHALL sit after the current word

#### Scenario: Hero CTA

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** a "Get Legal Advice" button with an arrow icon SHALL render with
  a brand-gold background, white text, and 5px radius
- **AND** hovering it SHALL make the background transparent and the text
  brand gold

### Requirement: Why Select Us

The system SHALL render the services split: a left heading column with a CTA
and three right service cards with circular icons.

#### Scenario: Services section

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the gold eyebrow "Services", the 30px
  heading "Why Select Us?", an ipsum paragraph, and a gold "Free
  Consultation" button
- **AND** three equal cards SHALL render on the right, each with a 100px
  grey circle icon (Scale, Briefcase, Gavel), a title (Fight for Justice /
  Best Case Strategy / Experienced Attorney), and a paragraph

#### Scenario: Service card hover

- **GIVEN** a service card is rendered
- **WHEN** it is hovered
- **THEN** a 50px gold circular arrow button SHALL appear centered at the
  bottom edge of the card

### Requirement: Justice / Mission

The system SHALL render the two-column justice section: a photo with a
pulsing play button and a right column with heading, three tabs, tab
content, and an animated years counter.

#### Scenario: Layout and tabs

- **GIVEN** the justice section is rendered
- **WHEN** the page loads
- **THEN** the left SHALL show the about photo with an 80px gold play circle
  (pulse animation) centered on it
- **AND** the right column SHALL show the gold eyebrow "Welcome to
  Counsely", the heading "We Always Fight For Your Justice to Win", and
  three white tab pills — Our Mission (active), Our Vision, Our Value

#### Scenario: Tab switching

- **GIVEN** the tab pills are rendered
- **WHEN** a non-active tab is activated
- **THEN** its pill SHALL fill brand gold with white text
- **AND** the tab content panel SHALL swap to the matching paragraph

#### Scenario: Years counter

- **GIVEN** the years chip is rendered
- **WHEN** the page loads
- **THEN** a gold chip SHALL show a counter animating from 0 to 40 followed
  by "Years of Experienced"

### Requirement: Case studies

The system SHALL render the "1000+ Completed Cases Successfully" section
with a carousel of four photo case cards and a "See All Successful Cases"
button.

#### Scenario: Case cards

- **GIVEN** the case studies section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL read "1000+ Completed Cases
  Successfully" under the gold eyebrow "Explore Case Studies"
- **AND** four case cards SHALL render in a client-side carousel, each a
  cover photo with a centered "Legal Seperation" title and "Corporate"
  label

#### Scenario: Card hover

- **GIVEN** a case card is rendered
- **WHEN** it is hovered
- **THEN** a brand-gold overlay SHALL fade in over the photo
- **AND** the title and label SHALL fade in on top of it

#### Scenario: Carousel + CTA

- **GIVEN** the case carousel is rendered
- **WHEN** the next/prev controls are activated
- **THEN** the carousel SHALL advance/go back one card
- **AND** a centered gold "See All Successful Cases" button SHALL render
  below the carousel

### Requirement: Attorneys

The system SHALL render four attorney flip cards that rotate on hover to
reveal a gold back with a quote, author, and socials.

#### Scenario: Flip card front

- **GIVEN** an attorney card is rendered
- **WHEN** the page loads
- **THEN** the front SHALL show the attorney photo with a white name (Ryan
  Anderson, Greg Washer, Tony Henderson, Jack Smith) and a role line
  (varied: Civil / Criminal / Family / Business Lawyer) in a bottom box

#### Scenario: Flip card back

- **GIVEN** an attorney card is rendered
- **WHEN** it is hovered (or focused)
- **THEN** the card SHALL flip to a brand-gold back panel
- **AND** the back SHALL show a quote, an author row (photo, name, gold
  position), and three social icons (Twitter, Facebook, Instagram)

### Requirement: Free Consultation

The system SHALL render the consultation band over a photo with a gold
overlay, a white heading, and a four-field form.

#### Scenario: Consultation form

- **GIVEN** the consultation section is rendered
- **WHEN** the page loads
- **THEN** the gold eyebrow "Booking an Appointment" and white 30px heading
  "Free Consultation" SHALL render over the photo with a
  `rgba(175,169,57,0.8)` gold overlay
- **AND** the form SHALL provide Your Name, Your Email, Subject text inputs
  and a Message textarea, all transparent with white text and a
  `rgba(255,255,255,0.3)` border
- **AND** a dark "Send message" submit button SHALL render

### Requirement: Testimonials

The system SHALL render the "Happy Clients" carousel with three translucent
testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL read "Happy Clients" under the gold
  eyebrow "Testimonial"
- **AND** the first slide SHALL show a quote, a circular photo, a name, and
  a gold position line on a translucent card
- **AND** the carousel SHALL contain three distinct slides

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is rendered
- **WHEN** the next/previous controls are activated
- **THEN** the carousel SHALL advance/go back one slide
- **AND** dot indicators SHALL reflect the active slide

### Requirement: Recent Blog

The system SHALL render the "Recent Blog" section with three post cards, each
with an image, a gold date topper, a title, a snippet, and a Read more
button.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL read "Recent Blog" under the gold
  eyebrow "Blog"
- **AND** three cards SHALL render, each with a 270px cover image, a
  brand-gold date topper (day / month · year), an 18px title, an ipsum
  snippet, and a gold "Read more" button
- **AND** each title SHALL turn brand gold on hover

### Requirement: Newsletter

The system SHALL render a full-width brand-gold newsletter band with a white
heading and an email input plus Subscribe button.

#### Scenario: Newsletter band

- **GIVEN** the newsletter section is rendered
- **WHEN** the page loads
- **THEN** the gold band SHALL show the white 24px heading "Subscribe to our
  Newsletter" on the left
- **AND** the right SHALL show a white email input (placeholder "Enter
  email address", radius 5px 0 0 5px) with a darker-gold "Subscribe" button
  (radius 0 5px 5px 0)

### Requirement: Footer

The system SHALL render the dark footer with four columns and a copyright
bar.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the `#222831` footer SHALL show the brand with gold tagline
  accent and three circular social icons (Twitter, Facebook, Instagram)
- **AND** a "Practice Areas" column SHALL list eight links with arrow icons
  (Family Law, Business Law, Insurance Law, Criminal Law, Drug Offenses,
  Fire Accident, Employment Law, Property Law)
- **AND** a "Have a Questions?" column SHALL show the address, phone
  "+2 392 3929 210", and email "info@yourdomain.com"
- **AND** a "Business Hours" column SHALL show gold sub-headings Opening
  Days (Monday – Friday : 9am to 20 pm · Saturday : 9am to 17 pm) and
  Vacations (All Sunday Days · All Official Holidays)

#### Scenario: Footer hover

- **GIVEN** a footer link is rendered
- **WHEN** it is hovered
- **THEN** the link text SHALL turn brand gold

## Verification checklist

- [ ] Section order + structure matches the live preview 1:1 (nav → hero →
      services → justice → case studies → attorneys → consultation →
      testimonials → blog → newsletter → footer).
- [ ] Brand gold `#afa939` in `@theme`; used via Tailwind classes everywhere
      (buttons, subheadings, hovers, overlays, chips, topper).
- [ ] Font: Poppins via Google Fonts `<link>` in `index.html`; no font files
      copied.
- [ ] Placeholder images: `https://picsum.photos/seed/counsely-<n>/<w>/<h>`
      (hero bg, about photo, case 1–4, attorneys 1–4, consultation bg, blog
      1–3, avatars) — never copy ColorLib assets.
- [ ] Icons: lucide-react (Scale, Briefcase, Gavel, ArrowRight, Play, Menu,
      MapPin, Phone, Mail); brand socials (Twitter/Facebook/Instagram) as inline
      SVG (lucide has no brand icons).
- [ ] Rotating hero word implemented as client-side state (setInterval), not
      a third-party typed.js.
- [ ] Carousels (case studies, testimonials) implemented with client-side
      state — no owl-carousel.
- [ ] Attorney flip cards: CSS 3D transform on hover/focus; back shows
      quote + author + socials.
- [ ] Phone link: NEVER write a literal `tel:+...` URI in source (toolchain
      redaction corrupts it) — store `"+2 392 3929 210"` spaced and build
      `href={'tel:' + phone.replace(/[^\d+]/g, '')}` at runtime; add an href
      assertion test.
- [ ] Tests: Vitest + Testing Library, 100% lines/functions/branches/
      statements; desktop + mobile nav duplication handled with
      `getAllByRole` indexing (mobile menu last).
- [ ] Gates: `npm run verify:app -- <app>` green; full gate via CI on merge.
- [ ] PR description: source template (Legalcare), preview URL, design
      tokens used, what differs (renames, placeholder images, parallax→static,
      vimeo modal→decorative play button).
