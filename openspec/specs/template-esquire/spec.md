# Template: Esquire (Law Firm Template)

## Purpose

Esquire is a law-firm one-page template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Lawyer" template
design (see TEMPLATES.md — appears 2×: lines 435, 2126; both rows point to the
same source, one prep covers all; verified with
`grep -c 'wp/template/lawyer/'` = 2), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/lawyer/ (law firm template)
Preview URL: https://preview.colorlib.com/theme/lawyer/

## Design reference (replication findings)

- **Original:** ColorLib "Lawyer" (`<title>Lawyer</title>`). A dark,
  prestigious law-firm one-pager: black header with logo, nav (Home / About /
  Practice Area / blog ▾ / pages ▾) and circular social icons; a dark hero
  (`slider_area` bg `#000`, padding 0 50px) with a photographic banner
  background (man in a suit on the right) and a left text block — Playfair
  Display serif headline "High Quality Law Advice and Support" (white, 56px),
  a 26px `#C7C7C7` tagline "Leading Polish Lawyer in your city", and an
  outlined gold "Learn More" button; a cream `#FFFDF8` about area with two
  centered info columns (photo + serif-ish 36px heading + Lorem ipsum +
  signature image on the left; photo with a gold "93% Success Case" hover
  overlay, heading "About Lawyer Justice" and two gold stat counters — 879
  Total Cases / 787 Case Won — on the right); a cream practice area with a
  centered 42px section title and a 4-across no-gutters grid of photo cards
  that flip to a near-black `rgba(31,31,31,0.9)` overlay on hover (icon +
  white title Business/Finance/Family/Education Law + copy + gold "Learn
  More" link); an "Our Lawyers" section of three centered cards (photo, 24px
  name, 16px `#727272` role, gold-on-cream rounded social icons); a
  full-bleed testimonial area over a background image with a carousel of
  centered white quotes (47px quote icon, 22px italic-ish text, "Millan
  Mirza" author with small thumb); an appointment section (photo left, right
  column with a balance-scale icon, "Make an Appointment" heading and a
  border-bottom-only form: Your Name / Your Email / Phone no. / Appointment
  date / Message textarea + full-width solid-gold "Submit"); and a `#202020`
  footer with logo + contact block, Practice Area links, Useful Links,
  Subscribe form (white input + gold Sign Up button) and the ColorLib
  copyright line.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lawyer/
  (HTTP 200, ~27.5 KB HTML fetched; `css/style.css` ~134 KB parsed for
  tokens — the page also imports bootstrap.min.css, owl.carousel.min.css,
  magnific-popup.css, font-awesome.min.css, themify-icons.css, nice-select.css,
  flaticon.css, gijgo.css (datepicker) and slicknav.css (mobile menu); site
  is jQuery + owl-carousel + slicknav + gijgo datepicker, NOT Tailwind).
- **Screenshot note:** `lawyer-free-template.jpg` (1200×946) MATCHES the live
  template (dark header + hero with gold-underlined active Home link and
  circular social icons; serif white headline "High Quality Law Advice And
  Support" with the suited-man photo on the right; gold-bordered transparent
  "Learn More" button; cream lower sections with the gold 93% stat circle).
  The live preview DOM + stylesheet are the authoritative reference; the
  screenshot confirms the same design.

### Section structure (from the live DOM, top to bottom)

1. `<header>` — `div.header-area` (bg `#000`, sticky, z-index 999) >
   `div#sticky-header.main-header-area` (padding 0 50px) >
   `div.container-fluid.p-0` > `div.row.align-items-center.justify-content-between.no-gutters`:
   - `col-xl-2.col-lg-2` > `div.logo-img` > `a[href=index.html]` > `img`
     (img/logo.png → recreate as bold gold/white text brand).
   - `col-xl-7.col-lg-8` > `div.main-menu.d-none.d-lg-block` > `nav` >
     `ul#navigation`: `li > a.active` "home" + About, Practice Area, "blog"
     (`i.ti-angle-down` caret, `ul.submenu`: blog, single-blog), "pages"
     (submenu). Nav links uppercase-style lowercase in source; hover + active
     use the gold accent.
   - `col-xl-3.col-lg-2.d-none.d-lg-block` > `div.social_media_links`
     (text-align right): `ul > li > a` — 40×40 circles bg `#171717`, icon
     color `#8B8B8B` (fa-facebook / fa-twitter / fa-instagram).
   - `col-12` > `div.mobile_menu.d-block.d-lg-none` — slicknav mobile
     hamburger (recreate with client-side state).
2. `div.slider_area` (bg `#000`, padding 0 50px) > `div.slider_area_inner.slider_bg_1.d-flex.align-items-center`
   (background-image `../img/banner/banner.png` — dark photo of a lawyer in a
   suit, right-weighted) > `div.container` > `div.row` > `div.col-xl-7` >
   `div.single_slider` > `div.slider_text`:
   - `h3` "High Quality Law Advice and Support" (white, font-weight 400,
     font-family "Playfair Display", serif, 56px/68px, text-transform
     capitalize; 25px mobile).
   - `p` "Leading Polish Lawyer in your city" (26px, weight 400,
     color `#C7C7C7`, margin-top 16px, margin-bottom 50px, line-height 32px).
   - `a.boxed-btn4` "Learn More" (transparent bg, 1px solid `#F2C64D` border,
     color `#F2C64D`, padding 15px 44px, Poppins 16px 600, text-transform
     capitalize; hover: bg `#F2C64D`, color #fff, border transparent).
3. `div.about_area` (bg `#FFFDF8`, padding-top 150px, padding-bottom 120px,
   margin 0 50px, position relative) — `div.opacity_icon.d-none.d-lg-block` >
   `i.flaticon-balance` (faint oversized balance-scale watermark). `div.container`
   > `div.row`:
   - `col-xl-6.col-md-6` > `div.single_about_info.text-center`:
     `div.about_thumb` > `img` (img/about/1.png) + `h3` "Finest And Strongest
     Law Firm Win The World" (36px/48px, weight 400, margin-top 27px,
     margin-bottom 13px) + `p` (Lorem ipsum) + `div.signature` > `img`
     (img/about/signature.png).
   - `col-xl-6.col-md-6` > `div.single_about_info.text-center`:
     `div.about_thumb` > `div.image_hover` > `div.hover_inner`: `h2` "93%"
     (70px/70px, Poppins 500, color #fff) + `span` "Success Case" (white) +
     `h3` "About Lawyer Justice" + `p` (Lorem ipsum) + `div.total_cases`:
     2 × `div.single_cases` (display inline-block, margin 0 25px): `h4` 879 /
     787 (36px, Poppins 500, color `#CEA159` — bronze-gold) + `p` "Total
     Cases" / "Case Won" (14px, `#919191`).
4. `div.practice_area` (bg `#FFFDF8`, padding-top 150px, padding-bottom 120px,
   padding-right 40.5px, padding-left 45.5px) > `div.container-fluid.p-0`:
   - `div.col-xl-12` > `div.section_title.text-center.mb-60`: `h3` "Practice
     Area" (42px/48px, weight 700, color `#1F1F1F`; 22px mobile) + `p` (16px,
     `#727272`, Lorem ipsum).
   - `div.row.no-gutters`: 4 × `div.col-xl-3.col-md-6` > `div.single_practice`
     (position relative): `div.practice_image` > `img` (img/practice/1–4.png)
     - `div.practice_hover.text-center` (absolute inset 0, bg
       `rgba(31,31,31,0.9)` — visible on hover) > `div.hover_inner`:
       `i.flaticon-case` / `flaticon-courthouse` / `flaticon-judge` /
       `flaticon-jury` + `h3` "Business Law" / "Finance Law" / "Family Law" /
       "Education Law" (24px, Poppins, color #fff, margin 10px 0 20px) + `p`
       (Lorem ipsum) + `a.lern_more` "Learn More" (color `#F2C64D`, 16px,
       opacity 0/visibility hidden → visible on hover).
5. `div.our_loyers` > `div.container`:
   - `div.col-xl-12` > `div.section_title.text-center.mb-60`: `h3` "Our
     Lawyers" + `p` (Lorem ipsum).
   - `div.row`: 3 × `div.col-xl-4.col-md-6.col-lg-4` > `div.single_loyers.text-center`:
     `div.thumb` > `img` (img/lawyers/1–3.png) + `h3` "Henry Miller" / "Jon
     Anderson" / "Jaky Nadan" (24px 700 `#1F1F1F`, margin 26px 0 6px) + `span`
     "Family Lawyer" / "Consumer Lawyer" / "Criminal Lawyer" (16px,
     `#727272`, display block, margin-bottom 18px) + `div.social_links` >
     `ul` > 3 × `li > a` (35×35, color `#F2C64D`, bg `#FEF7E7`,
     border-radius 10px; fa-facebook / fa-twitter / fa-instagram).
6. `div.testmonial_area.testmonial_bg_1.overlay2` (background-image
   `../img/testmonial/testmonial_bg.png`, padding 135px 0, cover, no-repeat,
   centered; 100px mobile) > `div.container` > `div.col-xl-12` >
   `div.testmonial_active.owl-carousel`: 3 × `div.single_testmonial.text-center`:
   `i.flaticon-straight-quotes` (color #fff, 47px) + `p` (color #fff,
   22px/34px, weight 400, margin 33px 0 44px; Lorem ipsum — vary per slide in
   recreation) + `div.author_info.d-flex.justify-content-center.align-items-center`:
   `div.thumb` > `img` (img/testmonial/smaill_thumb.png) + `span` "- Millan
   Mirza". (Carousel: recreate with client-side state — no owl-carousel dep.)
7. `div.appointment_area` (padding-top 150px) > `div.container` >
   `div.row.align-items-center`:
   - `col-xl-5.col-md-6.col-lg-6` > `div.appiontment_thumb.d-none.d-lg-block`
     > `img` (img/appointment/1.png).
   - `col-xl-6.offset-xl-1` > `div.appointment_info`: `div.opacity_icon` >
     `i.flaticon-balance` + `h3` "Make an Appointment" + `p` (Lorem ipsum) +
     `form` (border-bottom-only inputs: width 100%, height 40px, font-size
     16px, border none, border-bottom 1px solid `#C7C7C7`, margin-bottom
     26px, padding-bottom 7px; placeholder 16px `#919191`):
     - `div.row`: `col-xl-6.col-md-6` × 2: `input[type=text]` placeholder
       "Your Name"; `input[type=email]` placeholder "Your Email"; × 2:
       `input[type=text]` placeholder "Phone no."; `input#datepicker`
       placeholder "Appointment date" (gijgo datepicker — recreate as a
       native date input); `col-xl-12`: `textarea` placeholder "Message";
       `col-xl-12` > `div.appoinment_button` > `button.boxed-btn5[type=submit]`
       "Submit" (bg `#F2C64D`, color #fff, padding 15px 44px, Poppins 16px
       600, border 0, width 100%, text-align center).
8. `<footer class="footer">` (bg `#202020`) > `div.footer_top` (padding 120px
   0; 60px/30px mobile) > `div.container` > `div.row`:
   - `col-xl-4.col-md-6.col-lg-3` > `div.footer_widget`: `div.footer_logo`
     (margin-bottom 43px) > `a > img` (img/logo.png) + `p.footer_text`:
     "200, A-block, Green road, USA" / "+10 367 267 2678" / `a.domain`
     "lawyer@contact.com" + `div.socail_links` > `ul` > 3 × `li > a`
     (fa-facebook / fa-twitter / fa-instagram).
   - `col-xl-2.col-md-6.col-lg-2` > `div.footer_widget`: `h3.footer_title`
     "Practice Area" (18px 500 #fff Poppins, text-transform capitalize,
     margin-bottom 40px) + `ul > li > a` (14px `#C7C7C7`, line-height 42px;
     hover `#F2C64D`): Business law, Finance law, Education law, Family law.
   - `col-xl-2.col-md-6.col-lg-2` > `div.footer_widget`: `h3.footer_title`
     "Useful Links" + `ul > li > a`: About, Blog, Contact.
   - `col-xl-4.col-md-6.col-lg-4` > `div.footer_widget`: `h3.footer_title`
     "Subscribe" + `form.newsletter_form` (position relative, margin-bottom
     20px): `input[type=text]` placeholder "Enter your mail" (width 100%,
     height 45px, bg #fff, padding-left 20px, font-size 14px, color #000,
     border none; placeholder `#C7C7C7`) + `button[type=submit]` "Sign Up"
     (position absolute, top 0, right 0, height 100%, border none, font-size
     14px, color #fff, bg `#F2C64D`) + `p.newsletter_text` "Subscribe
     newsletter to get updates".
   - `div.copy-right_text` > `div.container` > `div.footer_border`
     (padding-bottom 30px) + `div.col-xl-12` > `p.copy_right.text-center`
     (14px `#C7C7C7`): "Copyright © <year> All rights reserved | This
     template is made with <heart> by Colorlib".

### Content (for copy paraphrase)

- Nav: home (active), About, Practice Area, blog ▾ (blog, single-blog),
  pages ▾ — socials Facebook, Twitter, Instagram.
- Hero: h3 "High Quality Law Advice and Support"; tagline "Leading Polish
  Lawyer in your city"; CTA "Learn More".
- About: "Finest And Strongest Law Firm Win The World" + ipsum + signature;
  right: "93% Success Case" hover stat, "About Lawyer Justice" + ipsum,
  879 Total Cases / 787 Case Won.
- Practice: 4 cards — Business Law, Finance Law, Family Law, Education Law,
  each ipsum + "Learn More".
- Lawyers: Henry Miller (Family Lawyer), Jon Anderson (Consumer Lawyer),
  Jaky Nadan (Criminal Lawyer).
- Testimonials: 3 identical ipsum quotes in source (paraphrase into 3
  distinct client quotes) — author "Millan Mirza".
- Appointment: "Make an Appointment" + form — Your Name, Your Email, Phone
  no., Appointment date, Message + "Submit".
- Footer: contact block (address/phone/email), Practice Area links, Useful
  Links (About, Blog, Contact), Subscribe ("Enter your mail" + "Sign Up",
  "Subscribe newsletter to get updates"), copyright line.

## Design tokens

| Token        | Value                 | Usage                                                                                                                                                    |
| ------------ | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand-gold   | `#F2C64D`             | boxed-btn4 border/text + hover fill, boxed-btn5 bg, submit + Sign Up buttons, lern_more links, lawyer social icons, footer link hover, active nav accent |
| gold-deep    | `#CEA159`             | about stat counters (879 / 787)                                                                                                                          |
| ink          | `#1F1F1F`             | section titles, headings, lawyer names                                                                                                                   |
| hero-black   | `#000`                | header-area bg, slider_area bg                                                                                                                           |
| footer-bg    | `#202020`             | footer background                                                                                                                                        |
| warm-bg      | `#FFFDF8`             | about + practice section backgrounds                                                                                                                     |
| social-chip  | `#171717` / `#8B8B8B` | header social circle bg / icon color                                                                                                                     |
| cream-chip   | `#FEF7E7`             | lawyer social icon chip background                                                                                                                       |
| overlay-dark | `rgba(31,31,31,0.9)`  | practice card hover overlay                                                                                                                              |
| hero-sub     | `#C7C7C7`             | hero tagline, form input bottom borders, footer links, copyright                                                                                         |
| section-sub  | `#727272`             | section_title paragraphs, lawyer role spans                                                                                                              |
| placeholder  | `#919191`             | form placeholders, case-count labels                                                                                                                     |
| paper        | `#ffffff`             | white text on dark sections, newsletter input bg                                                                                                         |
| font-heading | "Playfair Display"    | hero h3 (56px/68px, weight 400, serif)                                                                                                                   |
| font-body    | "Poppins"             | everything else (nav, buttons, section titles 42px 700, body, inputs)                                                                                    |

Radii: 10px only on the lawyer social chips (35×35); everything else SQUARE
(buttons, inputs, images — no border-radius). Spacing: header-area padding
0 50px; slider_area padding 0 50px; hero h3 56px/68px (25px mobile), tagline
26px mb 50px; about area padding 150/120, margin 0 50px, h3 36px/48px;
practice area padding 150/120 (lr ~40–45px), section title 42px/48px mb 60,
hover h3 24px; our_loyers h3 24px 700 mt 26px mb 6px, role span 16px mb 18px;
testimonial padding 135px 0, p 22px/34px mt 33px mb 44px, quote icon 47px;
appointment padding-top 150px, inputs height 40px border-bottom 1px `#C7C7C7`
mb 26px pb 7px; buttons padding 15px 44px Poppins 16px 600; footer_top
padding 120px, footer links 14px line-height 42px, newsletter input 45px.

## Requirements

### Requirement: Header

The system SHALL render a black sticky header with the brand, a five-item
nav, and circular social icons (desktop) plus a hamburger menu (mobile).

#### Scenario: Brand and nav links

- **GIVEN** the Esquire app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand at the left and links Home
  (active), About, Practice Area, Blog, and Pages in the center
- **AND** the Blog and Pages links SHALL each expand a submenu (Blog → blog,
  single-blog) on hover/focus
- **AND** the active Home link SHALL be highlighted with the gold accent
- **AND** three circular 40×40 social icon links (Facebook, Twitter,
  Instagram) SHALL render on the right (desktop only)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** a mobile menu SHALL open listing the same nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a dark full-width hero over a banner background with
a serif headline, a tagline, and an outlined gold CTA.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero background SHALL be the dark banner image (right-weighted
  photo) over `#000`
- **AND** the left text block SHALL show the white Playfair Display headline
  "High Quality Law Advice and Support" (56px, weight 400)
- **AND** a 26px `#C7C7C7` tagline SHALL read "Leading Polish Lawyer in your
  city"
- **AND** the "Learn More" button SHALL have a transparent background with a
  1px gold `#F2C64D` border and gold text

#### Scenario: Button hover

- **GIVEN** the Learn More button is rendered
- **WHEN** it is hovered
- **THEN** the background SHALL fill gold `#F2C64D` and the text SHALL turn
  white

### Requirement: About section

The system SHALL render the cream about area with two centered info columns,
a signature, a 93% stat, and two gold counters.

#### Scenario: About columns

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a photo, the heading "Finest And
  Strongest Law Firm Win The World" (36px), an ipsum paragraph, and a
  signature image
- **AND** the right column SHALL show a photo with a "93% Success Case"
  overlay, the heading "About Lawyer Justice", an ipsum paragraph, and two
  inline counters — 879 "Total Cases" and 787 "Case Won" — in bronze-gold
  `#CEA159`

### Requirement: Practice area

The system SHALL render a "Practice Area" section with a 4-across photo grid
that reveals a dark overlay card on hover.

#### Scenario: Practice cards

- **GIVEN** the practice section is rendered
- **WHEN** the page loads
- **THEN** the centered 42px title SHALL read "Practice Area"
- **AND** four equal-width cards SHALL render with photos and titles Business
  Law, Finance Law, Family Law, Education Law

#### Scenario: Card hover

- **GIVEN** a practice card is rendered
- **WHEN** it is hovered
- **THEN** a `rgba(31,31,31,0.9)` overlay SHALL cover the photo with an icon,
  the white 24px title, an ipsum line, and a gold "Learn More" link

### Requirement: Our Lawyers

The system SHALL render three centered lawyer cards with photo, name, role,
and social chips.

#### Scenario: Lawyer cards

- **GIVEN** the lawyers section is rendered
- **WHEN** the page loads
- **THEN** the centered title SHALL read "Our Lawyers"
- **AND** three cards SHALL show photos with the names Henry Miller, Jon
  Anderson, and Jaky Nadan
- **AND** each name SHALL be followed by a 16px `#727272` role (Family
  Lawyer, Consumer Lawyer, Criminal Lawyer)
- **AND** each card SHALL show three 35×35 gold-on-cream (`#FEF7E7`)
  10px-rounded social icon links

### Requirement: Testimonials carousel

The system SHALL render a background-image testimonial section with a
client-side carousel of centered white quotes.

#### Scenario: Carousel slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** a slide SHALL show a 47px quote icon, a 22px white quote, and an
  author row with a small thumb and the name "Millan Mirza"
- **AND** the carousel SHALL contain three distinct quotes

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is rendered
- **WHEN** the next/previous controls are activated
- **THEN** the carousel SHALL advance/go back one slide
- **AND** dot indicators SHALL reflect the active slide

### Requirement: Appointment form

The system SHALL render an appointment section with a photo, an info column,
and a border-bottom-only form with a full-width gold submit.

#### Scenario: Form fields

- **GIVEN** the appointment section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Make an Appointment"
- **AND** the form SHALL show fields Your Name, Your Email, Phone no.,
  Appointment date, and a Message textarea, each with a bottom border only
  (1px `#C7C7C7`)
- **AND** the submit control SHALL read "Submit" as a full-width solid gold
  button

#### Scenario: Validation and submit

- **GIVEN** the appointment form is rendered
- **WHEN** an invalid email or a missing required field is submitted
- **THEN** the form SHALL show per-field errors and SHALL NOT submit
- **WHEN** all fields are valid
- **THEN** the form SHALL swap to a success message (the inputs SHALL unmount
  — assert their absence)

### Requirement: Footer

The system SHALL render a `#202020` footer with a contact block, two link
columns, a subscribe form, and the copyright line.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the first widget SHALL show the brand, the contact block (address
  200, A-block, Green road, USA; phone +10 367 267 2678; email
  lawyer@contact.com), and social icons
- **AND** the second widget SHALL list Practice Area links (Business law,
  Finance law, Education law, Family law)
- **AND** the third widget SHALL list Useful Links (About, Blog, Contact)
- **AND** the fourth widget SHALL show a Subscribe form with a white input
  ("Enter your mail") and a gold "Sign Up" button, plus the line "Subscribe
  newsletter to get updates"
- **AND** the copyright line SHALL read "Copyright © <year> All rights
  reserved | This template is made with <heart> by Colorlib"

#### Scenario: Subscribe submit

- **GIVEN** the subscribe form is rendered
- **WHEN** an invalid email is submitted
- **THEN** the form SHALL show an error and SHALL NOT submit
- **WHEN** a valid email is submitted
- **THEN** the form SHALL swap to a success message

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Esquire app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero, about, practice, lawyers, testimonials, and appointment sections in
  the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Esquire — Law Firm Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/esquire` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- esquire` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#F2C64D, #CEA159, #1F1F1F, #000, #202020, #FFFDF8, #171717, #8B8B8B, #FEF7E7, #C7C7C7, #727272, #919191, #fff, Playfair Display, Poppins) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `esquire-<n>`, Google Fonts Playfair Display + Poppins links, lucide icons + inline SVG brand icons only)
- [ ] Practice cards reveal the `rgba(31,31,31,0.9)` overlay with gold Learn More on hover; hero CTA inverts (gold fill) on hover
- [ ] Testimonials carousel implemented with client-side state (no owl-carousel dep); arrows + dots behave
- [ ] Header social chips 40×40 `#171717` circles; lawyer chips 35×35 `#FEF7E7` 10px radius; ALL other corners square
- [ ] Appointment form validates (zod) + swaps to success (inputs unmount — assert absence); submit blocked until valid; full-width gold Submit
- [ ] Mobile hamburger menu opens/closes with focus handling
- [ ] Footer subscribe form validates + swaps to success
