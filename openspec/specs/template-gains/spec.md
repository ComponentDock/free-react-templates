# Template: Gains (Fitness/Gym Template)

## Purpose

Gains is a single-page gym/fitness website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Fitzone 2"
website template design (source: https://colorlib.com/wp/template/fitzone-2/),
built under a DIFFERENT name (Gains — gym slang for muscle/strength progress,
matching the source's fitness theme) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Fitzone 2" — dark-hero gym/fitness template with
  red→orange gradient accents. TEMPLATES.md has THREE copies of this item
  (lines 399, 1016, and 1848 — Bootstrap, Fitness, and one more category;
  duplicate rows); ONE recreation (Gains) covers all three. NOTE: the
  similarly-named "Fitzone" (no "2", lines 1466/1847) is a DIFFERENT template
  — do NOT conflate them.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/fitzone2/`
  (HTTP 200, 36.4 KB HTML; page title "Fitzone"). NOTE the preview slug is
  `fitzone2` (per `preview.colorlib.com/assets/js/products.js` — entry
  `["fitzone2","Fitzone2","Business",0,"2019/05/fitzone2-demo-preview.jpg",1]`),
  while the colorlib.com source page slug is `fitzone-2`
  (https://colorlib.com/wp/template/fitzone-2/ returns 200; the `fitzone2`
  variant of that page 404s). Master stylesheet `css/style.css` (~163 KB,
  fully extracted for tokens); libs: bootstrap, owl.carousel, animate,
  magnific-popup, flaticon, themify-icons, all.css. Cross-checked against the
  TEMPLATES.md screenshot (`fitzone2-free-template.jpg`, 1200×946, viewed in
  browser — dark hero with a weightlifter lifting a barbell, blue/purple
  smoke effects, "JOIN NOW" in red/white condensed caps, "GET IN SHAPE TODAY"
  in red below; header has a dark bar with an orange flame logo, white
  uppercase nav links, and a pill gradient "GET STARTED" button). The demo
  brands itself "Fitzone"; the recreation uses the NEW name **Gains**.
- **Visual design (from DOM + CSS tokens + screenshot):** high-energy gym
  aesthetic. Dark image hero with a HUGE condensed uppercase headline
  ("Join now" — 160px Teko, red with white "now"), red uppercase sub-line
  ("get in shape today"). White content sections below with the brand
  red→orange gradient used for buttons, video-play button, and two
  full-bleed gradient bands (about-us side panels + extends section). Cards
  are white on white with subtle gray backgrounds; the footer is very dark
  navy (#080a19). Section headings are Teko condensed uppercase; body copy
  is Open Sans. Buttons are PILL-shaped (border-radius 50px) with the
  gradient fill and a 2px brand-red border. Demo copy is placeholder lorem —
  paraphrase into fitness/gym copy (workout programs, trainers, membership).
- **Section order (1:1, from live demo DOM):**
  1. Header (`header.main_menu.home_menu`) — `div.container` > `nav.navbar.navbar-expand-lg.navbar-light`:
     `.navbar-brand` logo (image `img/logo.png` — flame icon + "FITZONE"
     wordmark) + `div.collapse.navbar-collapse.main-menu-item.justify-content-end`
     — `ul.nav.navbar-nav` links Home, about, courses, blog, Pages
     (with `div.dropdown-menu` — trainers, Single blog, Elements), Contact.
     Right: `div.menu_btn` > `a.btn_2.d-none.d-sm-block` "Get started".
  2. Hero banner (`section.banner_part`) — background-image `img/banner_bg.png`
     (dark gym photo), `div.banner_text.text-center` > `div.banner_text_iner`:
     `h2` "Join <span>now</span>" (160px Teko 700 uppercase, #fa0347, span
     #fff, line-height 130px) + `p` "get in shape today" (21px uppercase #fff,
     line-height 22px, margin-top -10px).
  3. About/features (`section.about_us.section_padding`) — `div.section_tittle`
     (centered: `p` "Awesome feature" — 16px #fa0347 uppercase weight 600 +
     `h2` "Why you Join with us" — 40px #2c3033 weight 700 uppercase Teko +
     `span` 14px #666666 body copy). Body: `div.row.justify-content-between`
     with THREE `div.col-lg-4` columns:
     - `div.our_feature` (left) — 2× `div.single_feature_item`:
       `div.feature_item_icon` (flaticon icon) + text (`h4` + `p`):
       "Qualified Instructor" / "fTons of Equipment".
     - `div.about_img` (center) — image with `div.overlay_icon`
       (a play/plus icon overlay).
     - `div.our_feature` (right) — 2 more `div.single_feature_item`
       (same icon + h4 + p pattern).
       (About-us area background: linear-gradient(45deg, #fa0347 1%, #fc561c 99%).)
  4. Extends / video (`section.extends_part.section_padding`) —
     `div.container-fluid` > `div.row`: `div.col-lg-5` > `div.extends_img`
     (background image + `div.extends_video` > `div.intro_video_iner` with
     `div.intro_video_icon` play button — gradient circle) + `div.col-lg-4.offset-lg-2`
     > `div.extends_member_text`: `h2` "Make yourself stronger than your
     > excuses" (Teko) + `p` body copy. Section background:
     > linear-gradient(to left, #fa0347 0%, #fc561c 50%, #fa0347 100%).
  5. Offer/courses (`section.our_offer`) — `div.section_tittle` (centered:
     `p` "best Courses" + `h2` "Why you Join with us" + copy) +
     `div.row.justify-content-between` > `div.col-lg-12` containing FOUR
     `div.single_offer_part` > `div.single_offer` (image `img/offer_img_1..4.png`
     - `div.hover_text`: `h2` "Fitness Training" + `p` "Fly replenish dominion
       evening make veriety of" + `a.offer_btn` — gradient circle with
       `span.flaticon-slim-right` arrow icon). Background:
       linear-gradient(0deg, #fa0347 1%, #fc561c 99%)-based.
  6. Testimonials (`section.review_part.gray_bg.section_padding`) —
     `div.section_tittle` (`p` "Testimonials" + `h2` "happy customer says") +
     `div.client_review_part.owl-carousel` with THREE
     `div.client_review_single.media` (row with quote text +
     `div.client_review_text.media-body`: name "Mosan Cameron" + role
     "Executive of fedex"). Gray background (`gray_bg` class).
  7. BMI calculator (`section.calculate_part.section_padding`) —
     background-image `img/calculate_bg.png`; `div.section_tittle` (`h2`
     "Calculate your bmi" — white on dark image + copy) + gender radio
     selector (Male / Female / Other — `input[type=radio]`) + `a.btn_2`
     "Book A Table" (gradient pill button).
  8. Team/trainers (`section.team_member_section.section_padding`) —
     `div.section_tittle` (`p` "our team" + `h2` "Meet with trainers") +
     `div.row` with THREE `div.col-sm-6.col-lg-4` > `div.single_blog_item`:
     `div.single_blog_img` (trainer photo + `div.social_icon` overlay with 4
     themify icons: ti-facebook, ti-twitter-alt, ti-instagram, ti-skype) +
     `div.single_blog_text` (`h3` name — Anderew Eletch / Mathew Edene /
     Anderew Eletch (dup in source — use 3 distinct names) + `p` "Personal
     trainer").
  9. Subscribe CTA (`section.sibscribe-area.section_padding`) —
     background-image `img/sibscribe_bg.png`; centered: `h1` "Start 15 days
     free trial" (white Teko) + `p` "Deep saw bearing seasons in two itself
     days hath" + email form (`input[type=email].form-control` placeholder
     "Enter Email Address") + `a.btn_2.sibscribe-btm` "Subscribe".
  10. Footer (`footer.footer-area`, bg #080a19) — `div.container` > `div.row`:
      FOUR `div.single-footer-widget` columns:
  - About Us: `h4` + paragraph (light gray body text).
  - Important Link: link list (WHMCS-bridge, Search Domain, My Account,
    Shopping Cart, Our Shop).
  - Contact us: "Address :" line, "Phone :" +2 36 265 (8060), "Email :"
    info@colorlib.com.
  - Newsletter: `div.form-wrap` email input + subscribe button.
    Then `div.copyright_text` row with `div.copyright_part` (© Colorlib
    line — paraphrase to "© 2026 Gains. All rights reserved.") +
    `div.copyright_social_icon.text-right` (social icons).
- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand gradient: **#fa0347 → #fc561c** (`.btn_2` background-image
    `linear-gradient(to left, #fa0347 0%, #fc561c 50%, #fa0347 100%)`; same
    gradient on `.offer_btn`, the video play button, the about_us side
    gradient, and the extends_part band). Solid brand accent **#fa0347**
    (banner h2 color, `.btn_2` 2px border, section_tittle `p` color,
    `.btn_4` background).
  - Dark: **#080a19** (footer background — near-black navy); **#2c3033**
    (headings, `h1–h6 { color: #2c3033; font-family: "Teko" }`);
    **#555555/#666666** (body copy, section_tittle span 14px);
    **#888888** (secondary text); **#f9f9ff / gray_bg** (testimonial section
    background); **#fff** (page/hero text, button text).
  - Fonts: **Teko** (all headings `h1–h6`, condensed uppercase display,
    weight 400–700) + **Open Sans** (body — `font-family: "Open Sans",
sans-serif`) via Google Fonts (use `<link>` in index.html).
  - Buttons (`.btn_2` — primary CTA): display inline-block, padding
    12.5px 38px, border-radius **50px** (pill), font-size 13px, weight 600,
    color #fff, text-transform uppercase, gradient background (200% auto
    size), **border 2px solid #fa0347**, hover shifts background-position to
    right center (gradient slide). `.btn_4` (secondary): 14px #fff, padding
    14.5px 43px, background-color #fa0347, margin-top 20px.
  - Section titles: `p` = 16px uppercase #fa0347 weight 600 (line-height
    13px, margin-bottom 23px); `h2` = 40px #2c3033 Teko weight 700
    uppercase, line-height 1.25, margin-bottom 13px; `span` = 14px #666666
    line-height 1.857. `.section_tittle` margin-bottom 75px, text-align
    center (left-aligned variant on the calculate section).
  - Hero: h2 160px Teko 700 uppercase #fa0347 (span #fff), line-height
    130px; p 21px uppercase #fff, margin-top -10px.
  - Section padding: `.section_padding` = 140px 0 (80px on tablet).
  - Footer: bg #080a19, light body text, h4 headings, 4 columns, copyright
    row with social icons.
  - Team cards: photo + hover social-icon overlay (facebook, twitter,
    instagram, skype — use inline SVG brand icons, NOT lucide brand icons
    which were removed).
  - Offer cards: image + hover overlay (`hover_text`) with Teko h2 title,
    body p, gradient circle arrow button.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/gains-<n>/<w>/<h>` — hero bg + about image + 4 offer
  images + 3 trainer photos + calculate bg + subscribe bg = ~11 seeds);
  icons → lucide-react (search, play, arrow, menu, mail, phone, map-pin,
  chevron) + inline SVG brand icons for social (facebook, twitter,
  instagram, skype); Teko + Open Sans via Google Fonts `<link>`; hero and
  section backgrounds as CSS background-image with dark overlay for text
  readability; gender selector is a radio group (Male/Female/Other) with a
  gradient pill CTA; newsletter + subscribe forms with zod validation per
  repo conventions; testimonial carousel can be a static 3-item grid (no
  owl.carousel dependency — implement auto/manual rotation only if desired,
  static grid is acceptable fidelity for the index state); mobile nav
  collapse toggle with aria per Bootstrap behavior.

Gains lives in `apps/gains` and uses shared components from `packages/ui`
(Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header with logo, navigation, and CTA button

The system SHALL render a dark header with a logo, uppercase navigation
links, and a gradient pill CTA button.

#### Scenario: Header content

- **GIVEN** the Gains page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Gains" in the logo
- **AND** the header SHALL show navigation links Home, About, Courses,
  Blog, Pages, and Contact
- **AND** the header SHALL show a "Get started" CTA button styled as a
  gradient pill
- **AND** the Pages link SHALL reveal a dropdown with at least three items

### Requirement: Hero banner

The system SHALL render a full-width hero with a dark gym photo background,
a huge condensed uppercase headline, and a red uppercase sub-line.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero banner section is displayed
- **THEN** it SHALL show the headline "Join now" in condensed uppercase
  type with "now" in a contrasting color
- **AND** it SHALL show the sub-line "get in shape today" in red uppercase
- **AND** the hero SHALL have a dark background image

### Requirement: About/features section

The system SHALL render an about section with a section title, two
feature groups flanking a center image, each with icon + heading + text.

#### Scenario: About section content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the title "Why you Join with us" with a red
  uppercase kicker above it
- **AND** it SHALL show a center image flanked by two feature columns
- **AND** each feature column SHALL contain at least two features, each
  with an icon, a heading, and a short description

### Requirement: Extends/video section

The system SHALL render a gradient band section with a video play button
on one side and a headline with copy on the other.

#### Scenario: Extends section content

- **GIVEN** the page is rendered
- **WHEN** the extends section is displayed
- **THEN** it SHALL show a video play button over an image on the left
- **AND** it SHALL show a Teko headline (e.g. "Make yourself stronger
  than your excuses") with body copy on the right
- **AND** the section SHALL have the brand red→orange gradient background

### Requirement: Offer/courses cards

The system SHALL render a courses section with four image cards that
reveal a title, description, and arrow button on hover.

#### Scenario: Offer cards content

- **GIVEN** the page is rendered
- **WHEN** the offer section is displayed
- **THEN** it SHALL show the title "Why you Join with us" with a "best
  Courses" kicker
- **AND** it SHALL show four course cards, each with an image and a
  hover overlay containing a title, description, and arrow button

### Requirement: Testimonials

The system SHALL render a testimonials section on a gray background with
at least three customer quotes.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "happy customer says"
- **AND** it SHALL show at least three testimonials, each with a quote,
  a customer name, and a role

### Requirement: BMI calculator

The system SHALL render a calculator section on a background image with a
gender selector and a gradient pill CTA button.

#### Scenario: Calculator content

- **GIVEN** the page is rendered
- **WHEN** the calculate section is displayed
- **THEN** it SHALL show the heading "Calculate your bmi"
- **AND** it SHALL show a gender selector with Male, Female, and Other
  options
- **AND** it SHALL show a gradient pill CTA button

### Requirement: Team/trainers

The system SHALL render a trainers section with three trainer cards, each
with a photo, a social icon overlay, a name, and a role.

#### Scenario: Trainer cards content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Meet with trainers"
- **AND** it SHALL show three trainer cards with photo, name, and
  "Personal trainer" role
- **AND** each photo SHALL reveal social icons on hover

### Requirement: Subscribe CTA

The system SHALL render a subscribe section on a background image with a
headline, an email input, and a gradient pill subscribe button.

#### Scenario: Subscribe content

- **GIVEN** the page is rendered
- **WHEN** the subscribe section is displayed
- **THEN** it SHALL show the headline "Start 15 days free trial"
- **AND** it SHALL show an email input and a "Subscribe" gradient pill
  button
- **AND** submitting an invalid email SHALL show a per-field error and
  block submission

### Requirement: Footer

The system SHALL render a dark navy footer with four widget columns and a
copyright row with social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show four columns: About Us, Important Link, Contact
  us, and a Newsletter form
- **AND** it SHALL show a copyright line and social icons at the bottom

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Gains app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero, about, extends, offer,
  testimonials, calculate, team, subscribe, and footer sections in the
  expected order
- **AND** the document title SHALL be "Gains — Fitness Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh gains` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero, about, extends,
      offer, testimonials, calculate, team, subscribe, footer)
- [ ] Design tokens in `@theme`: brand gradient `#fa0347 → #fc561c`, brand
      accent `#fa0347`, dark `#080a19`, headings `#2c3033`, grays
      `#555555`/`#666666`/`#888888`, gray_bg `#f6f5f1`
- [ ] Fonts: Teko (headings) + Open Sans (body) via Google Fonts `<link>`
- [ ] Buttons: `.btn_2` pill style — gradient fill, 50px radius, 2px
      #fa0347 border, uppercase 13px 600, hover gradient slide
- [ ] Hero: 160px condensed headline "Join now" (span contrast) + red
      uppercase sub-line on dark bg image
- [ ] About: 3-column layout (feature / image / feature), 4 features total
      with icons
- [ ] Extends: gradient band + video play button + headline/copy
- [ ] Offer: 4 image cards with hover overlay (title, copy, arrow button)
- [ ] Testimonials: gray bg, ≥3 quotes with name + role
- [ ] Calculate: bg image, "Calculate your bmi" heading, Male/Female/Other
      radio group, gradient pill CTA
- [ ] Team: 3 trainer cards with hover social overlay (inline SVG brand
      icons — NOT lucide brand icons)
- [ ] Subscribe: bg image, "Start 15 days free trial", validated email
      form + gradient pill Subscribe
- [ ] Footer: 4 widget columns on #080a19 + copyright row with social icons
- [ ] Placeholder images seeded (`picsum.photos/seed/gains-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on ALL
      THREE dup rows, lines 399, 1016, AND 1848, + surge URL) — NOT by the
      prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
