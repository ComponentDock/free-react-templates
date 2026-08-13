# Template: Medair (Health / Wellness Template)

## Purpose

Medair is a health-nutrition one-page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Healthvest"
template design (see TEMPLATES.md — appears 2×: lines 589 and 1857; both rows
point to the same source, one prep covers all; verified with
`grep -c 'wp/template/healthvest/'` = 2), built under a DIFFERENT name (Medair
— medi- + air, evoking health/wellness, matching the project's naming pattern)
per the monorepo naming mandate (never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/healthvest/ (Bootstrap 5 category,
"Healthvest" — a health/nutrition/wellness one-pager: nutrition coaching,
workout routines, appointment form)
Preview URL: https://preview.colorlib.com/theme/healthvest/

## Design reference (replication findings)

- **Original:** ColorLib "Healthvest" (`<title>Healthvest - Free Bootstrap 5
Template by Colorlib</title>`). A bright-green-accented health/wellness
  one-pager: a transparent navbar floating over a full-height photographic
  hero (woman with cucumber slices over her eyes in a kitchen) under a `#222222`
  40% overlay; a white serif (Prata) 60px headline "Eat Mindfully, Sweat Often
  & Self Love Always" with a green `#36c940` highlight span; a solid green
  "Contact Us" button + transparent white-outline "Learn More" button; a white
  strip of four green-icon service cards (Nutrition Strategies, Workout
  Routines, Support Motivation, First Hand Advice) plus a "Certified Company /
  24 Years of experienced" counter card; a split About section (photo with a
  white bottom-right counter box "24 · Years of experienced" + "Better Eat,
  Better Life" copy with a 2-column "We Can Help You" checklist); a "What We
  Do" carousel of five nutrition-program cards (Weight Loss Program, Sports
  Nutritionists, Personalized Nutrition, Individual Coaching, Child
  Nutrition); a photo CTA band "Get Health and Instruction Coach" with a green
  "Make An Appointment" button; a "How It Works?" 4-step strip with circular
  numbered photos (Trusted Services / Natural Ways / Routine Exercise /
  Success/Goal); a video CTA band (play button + "Start Your Body Changing
  With Healthy Nutrition" + Get Started / Contact Us); a white "Successful
  Stories" testimonial slider (Nicole Scott, Marketing Manager); a light
  `#f8f9fa` "Recent Blog" section with white cards and green "13 Jan" date
  blocks; a full-width photo band with a solid green `#36c940` ~95% overlay
  holding the "Drop A Message" appointment form; and a dark `#1a1a1a` footer
  (brand + socials, Services, Quick Links, "Have a Questions?" contact info,
  `#151515` copyright bar). Primary brand green `#36c940` on white/dark;
  Prata serif headings + Poppins body.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/healthvest/
  (HTTP 200, ~38 KB HTML fetched; `css/style.css` ~74 KB parsed for tokens —
  the page also imports animate.css, aos.css, flaticon.css, glightbox.min.css,
  tiny-slider.css, ionicons 4.5.6, font-awesome 4.7.0; site is jQuery +
  Bootstrap 5 + tiny-slider + glightbox, NOT Tailwind). Fonts: "Prata" (serif,
  headings, 7 uses) + "Poppins" (body, 4 uses) — recreate via Google Fonts
  `<link>`s in index.html (do NOT copy font files).
- **Screenshot note:** `healthvest-free-template.jpg` (1200×946) MATCHES the
  live template: sticky nav (logo left, Home/About/Services/Gallery/Blog/
  Contact + search icon right); full-width hero photo (blonde woman holding
  cucumber slices over her eyes, blurred kitchen bg) under dark overlay with
  small uppercase tagline "FINDING BALANCE IN FOOD, HEALTH, AND WELLNESS",
  large white serif headline "Eat Mindfully, Sweat Often & Self Love Always",
  solid green "CONTACT US" button + white-outline "LEARN MORE" button; below
  the hero, a row of five white cards (four green line-icon service cards +
  counter card); then the About split section (woman's face photo left, text
  right). The live preview DOM + parsed stylesheet are the authoritative
  reference; the screenshot confirms palette + layout.

### Section structure (from the live DOM, top to bottom)

1. `nav.navbar.navbar-expand-lg.ftco-navbar-light` (absolute, transparent,
   top 20px over the hero; on scroll → sticky, bg `#222222`, padding 7px 0) >
   `div.container` > `a.navbar-brand` (logo: "Health" + "vest"; white) +
   `button.navbar-toggler` (mobile hamburger) + `div.collapse.navbar-collapse`
   > `ul.navbar-nav.ms-auto`:
   - Links: Home · About · Services · Gallery · Blog · Contact —
     `a.nav-link` 14px/500 `rgba(255,255,255,0.7)`, padding 1.2rem 25px;
     `.active`/hover white; hover underline accent (2px bottom border,
     `#36c940`).
   - Source "Gallery" links to `gallery.html` (separate page — not part of
     the one-pager; keep the nav item, point to a non-navigating anchor or
     drop per implementer choice, but keep 6 visible items).
2. `section.hero-wrap` (height 100vh, min-height 750px, cover bg
   `images/bg_1.jpg`, `position: relative; z-index: 0`) > `div.overlay`
   (absolute inset-0, opacity .4, bg `#222222`) > `div.container` >
   `div.row.no-gutters.slider-text.align-items-end.justify-content-start`
   (color `rgba(255,255,255,0.8)`):
   - `span.subheading` "Finding Balance In Food, Health and Wellness"
     (uppercase, 500, white .9, 16px, letter-spacing 2px).
   - `h1` "Eat Mindfully," + `<span>` "Sweat Often & Self Love Always"
     (green `#36c940`; h1 = Prata/400, 60px, line-height 1.2, white).
   - `p` short supporting line + `p` > `a.btn.btn-primary` "Contact us"
     (green bg) + `a.btn.btn-white` "Learn More" (white bg/black text;
     hover inverts).
3. `section.ftco-services` (white) > `div.container.services-wrap` > `div.row`:
   - 4 × `div.col-md-6.col-lg-3.d-flex.align-self-stretch` >
     `div.media.services.text-center` (icon — flaticon → lucide; green) +
     `div.media-body`: `h3` "Nutrition Strategies" / "Workout Routines" /
     "Support Motivation" / "First Hand Advice" + short blurb.
   - 5th card: `div.media.services.ftco-animate` variant with counter:
     "Certified Company" + big number "24" + "Years of experienced"
     (green icon badge, white card — screenshot shows 5 white cards in a
     row).
4. `section.ftco-section.ftco-about-section` (white) > `div.container` >
   `div.row`:
   - Left `div.col-md-6.ftco-animate.img` — about photo; `div.counter-wrap`
     (absolute bottom-right, white bg, padding 30px): green icon +
     `span.number` "24" (Prata) + `span.caption` "Years of experienced".
   - Right `div.col-md-6` (padding-left): `span.subheading` "About Us"
     (green, uppercase, 600, 16px); `h2.heading-section` "Better Eat,
     Better Life" (54px/400); `p` "If You Get A Better Nutrition, You Can
     Enjoy A Healthy Age" (lead); `p` body copy (paraphrase the blind
     text); `h3` "We Can Help You"; `ul` 2-column checklist (green check
     icons): Low Energy · Stress & Anxiety · Poor Eating Habits ·
     Digestive Problems · Balance Body & Mind · Advice · Workout Routines ·
     Protein.
5. `section.ftco-section.ftco-services-section.ftco-no-pt` (white) >
   `div.container` > `div.row.justify-content-center.mb-5` > heading:
   `span.subheading` "What We Do" + `h2.heading-section` "What We Do"
   (54px/400) — then `div.row` of 5 × `div.col-md-6.col-lg-4` >
   `div.services-2.text-center` cards (carousel `carousel-services` on
   mobile → client-side state or grid): circular 140px photo (7px white
   border, radius 50%) with green numbered badge, green 50px icon, `h2`
   "Weight Loss Program" / "Sports Nutritionists" / "Personalized
   Nutrition" / "Individual Coaching" / "Child Nutrition" (Poppins 20px/500)
   - short blurb + "Learn More" link.
6. `section.ftco-section.ftco-intro.img` (cover bg `images/bg_6.jpg`,
   `z-index: 0`) > `div.overlay` (opacity .5, `#222222`) > `div.container` >
   centered: `span.subheading` "Finding Balance in Food, Health and
   Wellness" (green, uppercase, 13px, letter-spacing 2px); `h2` "Get Health
   and Instruction Coach" (white 40px/400; green highlight span);
   `p` + `a.btn.btn-primary` "Make An Appointment" (green).
7. `section.ftco-section` (white) > `div.container` > centered heading:
   `span.subheading` "Procedure" + `h2.heading-section` "How It Works?"
   (54px/400) — then `div.row` of 4 × `div.col-md-6.col-lg-3` >
   `div.services-2.text-center`: circular 140px photo (`flow-2.jpg`,
   `flow-3.jpg`, `services-*.jpg` → picsum) with green numbered badge
   (1/2/3/4), `h2` "Trusted Services" / "Natural Ways" / "Routine
   Exercise" / "Success/Goal" (Poppins 20px/500), short blurb, "Learn
   More" link.
8. `section.ftco-section.img.vid-section` (cover bg `images/bg_5.jpg`,
   min-height ~500px) > `div.container` > `div.col-md-12.vid-height`
   (centered): `a.video-icon.glightbox` (→ client-side modal or plain
   button; circular play icon, green ring) + `span.subheading` "Finding
   Balance In Food, Health And Wellness" (white) + `h2` "Start Your Body
   Changing With Healthy Nutrition" (white 40px/400) + buttons
   `a.btn.btn-primary` "Get Started" (green) + `a.btn.btn-white` "Contact
   Us".
9. `section.ftco-section.testimony-section` (white) > `div.container` >
   heading: `span.subheading` "Testimonial" + `h2.heading-section`
   "Successful Stories" — then `div.tns-outer` (tiny-slider → client-side
   state): 3 × `div.testimony-wrap` slides: left `div.img` (photo,
   height 500px), right `div.text` (padding 40px): blockquote (paraphrased
   quote, `rgba(0,0,0,0.5)`), `div.d-flex.align-items-center` >
   `div.user-img` (80px circle portrait) + `div.tx`: `h3.name` "Nicole
   Scott" (22px/700 `#222222`) + `p.position` "Marketing Manager"
   (uppercase 13px green); `div.icon` (30px green circle, bottom-right,
   quote glyph). Dots: 9px circles, active `#999`.
10. `section.ftco-section.bg-light.ftco-no-pt` (bg `#f8f9fa`) > `div.container`
    > heading: `span.subheading` "Our Blog" + `h2.heading-section` "Recent
    > Blog" — then `div.row` of blog cards `div.blog-entry` (white, radius
    > 4px, shadow `0px 10px 25px -13px rgba(0,0,0,0.1)`, margin-bottom 40px):
    - `div.img` (block-20 photo, height 300px) + `div.text` (padding 30px):
      `div.meta-date` (inline green `#36c940` block: `span` "13" Prata 30px
      - small "Jan", white, uppercase, padding 20px) + `div.meta`
        (uppercase 13px/600): "Admin" + "3 Comments" (green icons);
        `h3.heading` (24px/400) "How Much Do Eat Your Really Need Day?"
        (black, hover green) + `p` blurb (paraphrase) + `a.btn-custom`
        "Continue Reading" (uppercase 13px/600 black, letter-spacing 2px).
    - Repeat 3 cards with varied titles (paraphrase).
11. `section.ftco-appointment.ftco-section.img` (cover bg `images/bg_3.jpg`,
    `background-attachment: fixed`) > `div.overlay` (inset-0, opacity .95,
    bg `#36c940` — the section is a solid green band over the photo) >
    `div.container` > `div.row`:
    - Left `div.col-md-6.d-flex` (white text): `h3.appointment-head`
      "Who We Are" (Prata 24px, black → over green use white) + `h2`
      "We Best Nutrition" + `p` "Full Services" blurb + `p` "Good Products
      / Natural & Healthy Foods".
    - Right `div.col-md-6` > `form.appointment-form` (white card):
      `h3.appointment-head` "Drop A Message" (Prata 24px black);
      inputs: "Your Full Name", "Email Address" (with green focus
      borders); `select` "Select Subject" — options Individual Coaching ·
      Sport Nutriotionists [sic — paraphrase] · Personal Nutrition ·
      Other; `textarea` "Message"; `input.btn.btn-primary` submit "Send
      Message" (green). Client-side validation.
12. `footer.ftco-footer` (bg `#1a1a1a`, padding 7em 0 0, text
    `rgba(255,255,255,0.7)`) > `div.container` > `div.row.mb-5`:
    - `div.col-md-6.col-lg` brand column: `div.logo` > `a` "Healthvest"
      (white) + `p` about blurb (paraphrase) + `ul.ftco-footer-social`
      (4 × 40px squares, radius 2px, bg `rgba(255,255,255,0.05)`, green
      icons: Facebook, Twitter/X, Instagram, YouTube → inline SVG, lucide
      has no brand icons).
    - `div.col-md-6.col-lg` "Services" (`h2.ftco-footer-widget` white
      Poppins 18px/600): links — Sport Nutritionists · Balance Body &
      Mind · Workout Routines · Child Nutrition (white .7, hover green).
    - `div.col-md-6.col-lg` "Quick Links": Home · About · Services ·
      Gallery · Blog · Contact.
    - `div.col-md-6.col-lg` "Have a Questions?" (`h2` + `ul.block-23`
      green icons): "203 Fake St. Mountain View, San Francisco,
      California, USA" · "+2 392 3929 210" · "info@yourdomain.com".
    - `div.row` > `div.col-md-12.text-center` copyright bar
      `div.bg-darken` (bg `#151515`, padding 1.5em 0): "© 2026 Medair —
      All rights reserved" + required Component Dock link
      (https://www.componentdock.com/).

### Content (for copy paraphrase)

- Nav: Home, About, Services, Gallery, Blog, Contact.
- Hero: tagline "Finding Balance In Food, Health and Wellness"; h1 "Eat
  Mindfully, Sweat Often & Self Love Always"; buttons "Contact us" +
  "Learn More".
- Service cards: Nutrition Strategies / Workout Routines / Support
  Motivation / First Hand Advice + "Certified Company · 24 Years of
  experienced".
- About: "About Us" / "Better Eat, Better Life" / "If You Get A Better
  Nutrition, You Can Enjoy A Healthy Age" / "We Can Help You": Low Energy,
  Stress & Anxiety, Poor Eating Habits, Digestive Problems, Balance Body &
  Mind, Advice, Workout Routines, Protein.
- What We Do: Weight Loss Program, Sports Nutritionists, Personalized
  Nutrition, Individual Coaching, Child Nutrition (+ "Learn More").
- Intro CTA: "Get Health and Instruction Coach" + "Make An Appointment".
- How It Works: "Procedure" / steps 1–4: Trusted Services, Natural Ways,
  Routine Exercise, Success/Goal (+ blurb + "Learn More").
- Video CTA: "Start Your Body Changing With Healthy Nutrition" +
  "Get Started" / "Contact Us".
- Testimonials: "Successful Stories" — Nicole Scott, Marketing Manager.
- Blog: "Recent Blog" — e.g. "How Much Do Eat Your Really Need Day?" +
  "Admin · 3 Comments" + "Continue Reading".
- Appointment: "Drop A Message" — name, email, subject (Individual
  Coaching / Sport Nutrition / Personal Nutrition / Other), message;
  left side "Who We Are / We Best Nutrition / Full Services / Good
  Products / Natural & Healthy Foods".
- Footer: brand blurb, 4 socials, Services links, Quick Links,
  "Have a Questions?" (address, phone, email), copyright + Component Dock.

## Design tokens

| Token         | Value                                           | Usage                                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand-green   | `#36c940`                                       | `.btn-primary` bg, hero h1 span, icons (services, about checklist, blog meta, footer socials/block-23), subheadings, testimonial position + icon circle, blog meta-date block, appointment overlay, footer link hover |
| dark          | `#222222`                                       | hero overlay (opacity .4), intro overlay (opacity .5), scrolled navbar bg, testimonial name color `#222222`, about counter number                                                                                     |
| ink           | `#000000`                                       | blog heading link color, `btn-custom` color, `btn-white` text                                                                                                                                                         |
| footer-bg     | `#1a1a1a`                                       | footer background                                                                                                                                                                                                     |
| footer-bottom | `#151515`                                       | copyright bar bg (bg-darken)                                                                                                                                                                                          |
| light-bg      | `#f8f9fa` (also `#f8f8f8`)                      | blog section bg (bg-light)                                                                                                                                                                                            |
| white         | `#ffffff`                                       | card bg, hero text, `btn-white` bg, counter-wrap bg, services-2 img 7px border                                                                                                                                        |
| body-text     | `rgba(0,0,0,0.5)` / `rgba(255,255,255,0.7–0.8)` | testimonial quote text / footer + hero body text                                                                                                                                                                      |
| card-shadow   | `rgba(0,0,0,0.1)` `0px 10px 25px -13px`         | blog-entry card                                                                                                                                                                                                       |
| btn-shadow    | `rgba(0,0,0,0.09)` `0px 24px 36px -11px`        | all `.btn`                                                                                                                                                                                                            |
| carousel-dot  | `#ddd` / `#999`                                 | tns-nav dots / active dot                                                                                                                                                                                             |
| font-heading  | "Prata"                                         | hero h1, appointment-head, blog meta-date day, about counter number (Google Fonts)                                                                                                                                    |
| font-body     | "Poppins"                                       | nav, buttons, body copy, card titles, footer headings (Google Fonts)                                                                                                                                                  |

Radii: **0 on all `.btn`** (sharp square buttons — uppercase 12px/700,
letter-spacing 1px, padding 9px 12px; `btn-primary` green bg → hover
transparent + green text; `btn-white` white bg/black text → hover inverted);
**50% circles** on services-2 photos (140px, 7px white border), user-img
(80px), video-icon, testimonial icon circle (30px), footer socials
(tiny radius 2px squares); **4px** on blog-entry + testimony-wrap cards;
**2px** on btn-custom + footer socials.

Spacing: hero 100vh (min 750px); `.ftco-section` padding 8em 0 (6em ≤992px);
`.ftco-intro` padding 3em 0; footer padding 7em 0 0; blog-entry margin-bottom
40px; services-2 circle margin 0 auto 20px; counter-wrap padding 30px;
testimony text padding 40px; nav links padding 1.2rem 25px.

## Requirements

### Requirement: Header / Navigation

The system SHALL render a transparent-over-hero navbar with a text brand and
six nav links, turning solid dark when scrolled.

#### Scenario: Brand and nav links

- **GIVEN** the Medair app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL overlay the hero transparently at the top
- **AND** the brand SHALL read "MEDAIR" (text equivalent of "Healthvest")
- **AND** the nav SHALL list Home, About, Services, Gallery, Blog, and
  Contact in 14px Poppins white/70
- **AND** the active/first link SHALL render white and other links white/70

#### Scenario: Scrolled state

- **GIVEN** the page is scrolled down
- **WHEN** the navbar becomes sticky
- **THEN** it SHALL turn solid `#222222` and remain at the top of the viewport

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** a collapsible menu SHALL open listing the same six links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a full-height hero over a photo with a dark overlay,
an uppercase tagline, a large serif headline with a green highlight span,
and two CTAs.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the viewport (min 750px) with a cover photo
  and a `#222222` overlay at 40% opacity
- **AND** the uppercase tagline SHALL read "Finding Balance In Food, Health
  and Wellness" (16px, letter-spacing 2px, white/90)
- **AND** the 60px white Prata headline SHALL read "Eat Mindfully, Sweat
  Often & Self Love Always"
- **AND** the phrase "Sweat Often & Self Love Always" SHALL render in brand
  green

#### Scenario: Hero CTAs

- **GIVEN** the hero buttons are rendered
- **WHEN** the page loads
- **THEN** a square green "Contact us" button (radius 0, uppercase 12px/700,
  letter-spacing 1px) SHALL render
- **AND** a square white "Learn More" button with black text SHALL render
  next to it
- **AND** hovering either button SHALL invert its colors (green → transparent
  with green text; white → transparent with white text)

### Requirement: Services strip

The system SHALL render the white services strip with four green-icon service
cards and a certified counter card.

#### Scenario: Service cards

- **GIVEN** the services strip is rendered
- **WHEN** the page loads
- **THEN** four centered cards SHALL render with green icons and titles:
  Nutrition Strategies, Workout Routines, Support Motivation, First Hand
  Advice
- **AND** each card SHALL show a short paraphrased blurb

#### Scenario: Certified counter card

- **GIVEN** the services strip is rendered
- **WHEN** the page loads
- **THEN** a fifth card SHALL show "Certified Company" with the number "24"
  and the caption "Years of experienced"

### Requirement: About

The system SHALL render the split About section with a photo carrying a
bottom-right counter box, a heading + copy column, and a two-column "We Can
Help You" checklist.

#### Scenario: About layout

- **GIVEN** the About section is rendered
- **WHEN** the page loads
- **THEN** a photo SHALL render on the left with a white counter box at its
  bottom-right showing "24" (Prata) and "Years of experienced"
- **AND** the right column SHALL show the green subheading "About Us", the
  54px heading "Better Eat, Better Life", the lead "If You Get A Better
  Nutrition, You Can Enjoy A Healthy Age", and a paraphrased paragraph

#### Scenario: We Can Help You checklist

- **GIVEN** the About checklist is rendered
- **WHEN** the page loads
- **THEN** the "We Can Help You" heading SHALL render above two columns of
  green-checked items: Low Energy, Stress & Anxiety, Poor Eating Habits,
  Digestive Problems, Balance Body & Mind, Advice, Workout Routines, Protein

### Requirement: What We Do

The system SHALL render the "What We Do" section with five nutrition-program
cards featuring circular photos with green numbered badges.

#### Scenario: Program cards

- **GIVEN** the What We Do section is rendered
- **WHEN** the page loads
- **THEN** the centered green subheading and 54px heading SHALL read "What
  We Do"
- **AND** five centered cards SHALL render, each with a 140px circular photo
  (7px white border) with a green numbered badge, a green 50px icon, a Poppins
  20px title, a short blurb, and a "Learn More" link
- **AND** the titles SHALL be Weight Loss Program, Sports Nutritionists,
  Personalized Nutrition, Individual Coaching, Child Nutrition

### Requirement: Intro CTA

The system SHALL render the photo intro band with a dark overlay, a green
subheading, a white heading with a green highlight span, and an appointment
button.

#### Scenario: Intro band

- **GIVEN** the intro CTA section is rendered
- **WHEN** the page loads
- **THEN** the band SHALL show a cover photo with a `#222222` 50% overlay
- **AND** the green uppercase subheading SHALL read "Finding Balance in
  Food, Health and Wellness"
- **AND** the white 40px heading SHALL read "Get Health and Instruction
  Coach" with a green highlight span
- **AND** a square green "Make An Appointment" button SHALL render

### Requirement: How It Works

The system SHALL render the "How It Works?" section with four numbered steps.

#### Scenario: Steps

- **GIVEN** the How It Works section is rendered
- **WHEN** the page loads
- **THEN** the green subheading SHALL read "Procedure" and the 54px heading
  "How It Works?"
- **AND** four centered step cards SHALL render with circular photos and
  green numbered badges 1–4
- **AND** the step titles SHALL be Trusted Services, Natural Ways, Routine
  Exercise, and Success/Goal, each with a short blurb and a "Learn More" link

### Requirement: Video CTA

The system SHALL render the video band with a circular play button, a white
heading, and two CTAs.

#### Scenario: Video band content

- **GIVEN** the video CTA section is rendered
- **WHEN** the page loads
- **THEN** a cover photo SHALL fill the band (min-height ~500px)
- **AND** a circular play icon button SHALL render centered above a white
  subheading "Finding Balance In Food, Health And Wellness" and the white
  40px heading "Start Your Body Changing With Healthy Nutrition"
- **AND** square green "Get Started" and white "Contact Us" buttons SHALL
  render below

### Requirement: Testimonials

The system SHALL render the "Successful Stories" testimonial slider with
photo-and-quote slides and dot navigation.

#### Scenario: Testimonial slide

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the green subheading SHALL read "Testimonial" and the 54px heading
  "Successful Stories"
- **AND** at least two slides SHALL render, each with a photo side, a
  paraphrased quote (black/50), an 80px circular portrait, the name "Nicole
  Scott" (22px/700), the position "Marketing Manager" (uppercase green 13px),
  and a 30px green quote-icon circle at the bottom-right of the card

#### Scenario: Slider navigation

- **GIVEN** the testimonial slider is rendered
- **WHEN** the next/prev controls or dots are activated
- **THEN** the slider SHALL advance/go back one slide
- **AND** dot indicators (9px circles) SHALL reflect the active slide
  (`#999`)

### Requirement: Blog

The system SHALL render the "Recent Blog" section on `#f8f9fa` with white
blog cards that have green date blocks.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the green subheading SHALL read "Our Blog" and the 54px heading
  "Recent Blog"
- **AND** at least three white cards SHALL render (radius 4px, soft shadow),
  each with a photo, a green date block (e.g. day "13" in Prata 30px + month
  "Jan"), a meta row "Admin · 3 Comments" (uppercase 13px/600, green icons),
  a 24px black title (hover green), a paraphrased blurb, and a "Continue
  Reading" link (uppercase, letter-spacing 2px)

### Requirement: Appointment / Contact

The system SHALL render the fixed-photo appointment band with a solid green
overlay, a left info column, and a "Drop A Message" form with client-side
validation.

#### Scenario: Appointment band

- **GIVEN** the appointment section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a cover photo with `background-attachment:
fixed` and a `#36c940` overlay at 95% opacity
- **AND** the left column SHALL show "Who We Are" (Prata), the heading "We
  Best Nutrition", a "Full Services" blurb, and "Good Products / Natural &
  Healthy Foods"

#### Scenario: Drop A Message form

- **GIVEN** the appointment form is rendered
- **WHEN** the page loads
- **THEN** a white form card SHALL show the Prata heading "Drop A Message"
  with fields: Your Full Name, Email Address, Select Subject (options:
  Individual Coaching, Sport Nutrition, Personal Nutrition, Other), and
  Message
- **AND** a square green submit button SHALL read "Send Message"

#### Scenario: Form validation

- **GIVEN** the appointment form is rendered
- **WHEN** an invalid/empty required field is submitted
- **THEN** the form SHALL show client-side errors and SHALL NOT submit
- **AND** a successful submit SHALL show a confirmation state

### Requirement: Footer

The system SHALL render the dark `#1a1a1a` footer with a brand column, two
link columns, a contact column, and a copyright bar linking to Component Dock.

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the brand column SHALL show the Medair logo/text, a paraphrased
  about paragraph (white/70), and four 40px square social icons (Facebook,
  X/Twitter, Instagram, YouTube — inline SVG brand icons, green on
  `rgba(255,255,255,0.05)`)
- **AND** a "Services" column SHALL list Sport Nutritionists, Balance Body
  & Mind, Workout Routines, Child Nutrition
- **AND** a "Quick Links" column SHALL list Home, About, Services, Gallery,
  Blog, Contact
- **AND** a "Have a Questions?" column SHALL show a green-icon contact list:
  a US street address, a phone number, and an email address (paraphrased)

#### Scenario: Copyright bar

- **GIVEN** the footer copyright bar is rendered
- **WHEN** the page loads
- **THEN** the `#151515` bar SHALL read "© 2026 Medair — All rights
  reserved"
- **AND** it SHALL link to https://www.componentdock.com/ (mandatory)

## Verification checklist

- [ ] Section order + structure matches the live preview 1:1 (navbar →
      hero → services strip → about → what-we-do → intro CTA → how-it-works
      → video CTA → testimonials → blog → appointment → footer).
- [ ] Brand green `#36c940` in `@theme`; used via Tailwind classes
      everywhere (buttons, span highlight, icons, subheadings, badges,
      overlay, hover states).
- [ ] Fonts: Prata (headings) + Poppins (body) via Google Fonts `<link>`s in
      `index.html`; no font files copied.
- [ ] Placeholder images: `https://picsum.photos/seed/medair-<n>/<w>/<h>`
      (hero bg, about photo, 5 program circles, 4 step circles, video band
      bg, 3 testimonial photos, 3 blog photos, appointment bg) — never copy
      ColorLib assets. Screen seeds with browser_vision (hero should read
      as a bright lifestyle/wellness photo; see skill notes on seed
      screening).
- [ ] Icons: lucide-react (Apple/Dumbbell/Heart/Leaf, Check, MapPin, Phone,
      Mail, Quote, Play, Menu, ChevronRight, MessageSquare, Calendar);
      brand socials (Facebook/X/Instagram/Youtube) as inline SVG (lucide has
      no brand icons). Probe every icon with
      `node -e "console.log(typeof require('lucide-react').X)"` — renames
      bite silently.
- [ ] Buttons: square (radius 0), uppercase 12px/700, letter-spacing 1px,
      padding 9px 12px, soft drop shadow; green `btn-primary` hover inverts
      to transparent + green text; white `btn-white` hover inverts to
      transparent + white text.
- [ ] Hero overlay: flat `#222222` at 40% (`bg-black/40`-style), NOT a
      gradient.
- [ ] Appointment overlay: `#36c940` at 95% over a fixed-attachment photo
      (`bg-fixed` — verify mobile fallback since iOS ignores fixed
      attachment).
- [ ] Carousels (What We Do mobile, testimonials) implemented with
      client-side state — no tiny-slider/owl-carousel; glightbox video →
      client-side modal or decorative button.
- [ ] Tests: Vitest + Testing Library, 100% lines/functions/branches/
      statements; desktop + mobile nav duplication handled with
      `getAllByRole` indexing (mobile menu last); decorative `<img alt="">`
      photos queried via `container.querySelectorAll('img')` (no `img`
      role); form validation with fake timers inside `act()` if used.
      MemoryStorage polyfill only if localStorage is used.
- [ ] Gates: `npm run verify:app -- medair` green; full gate via CI on
      merge.
- [ ] PR description: source template (Healthvest), preview URL, design
      tokens used, what differs (renames, placeholder images,
      tiny-slider/glightbox→client-side state, paraphrased copy incl.
      "Sport Nutriotionists" typo fix, "203 Fake St." address).
