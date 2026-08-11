# Template: Lyceum (Education / Learning Template)

## Purpose

Lyceum is an education one-page template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Learnit" template
design (see TEMPLATES.md — appears 2×: lines 436, 1647; both rows point to the
same source, one prep covers all; verified with
`grep -c 'wp/template/learnit/'` = 2), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Source: https://colorlib.com/wp/template/learnit/ (education template)
Preview URL: https://preview.colorlib.com/theme/learnit/

## Design reference (replication findings)

- **Original:** ColorLib "Learnit" (`<title>Learn IT Education</title>`). A
  clean, modern education one-pager with a lime-green brand accent: a thin
  `#f9f9ff` top bar (left: 4 social icons — Facebook, Twitter, Dribbble,
  Behance; right: phone "+440 012 3654 896" + email "support@colorlib.com" —
  42px line-height, `#777` text, green hover); a white sticky navbar
  (logo image left → recreate as text brand; `ml-auto` nav: Home (active),
  About, Courses ▾ (Courses, Course Details), Pages ▾ (Elements), Blog ▾
  (Blog, Blog Details), Contact — links 500 12px/80px Roboto UPPERCASE
  `#222`, hover/active green `#4dbf1c`, dropdowns white with `0 3px 16px
rgba(0,0,0,.1)` shadow, 45px-line items that fill green on hover; mobile
  hamburger via navbar-toggler collapse); a full-width hero
  (`home_banner_area`, min-height 780px) with a parallax photo background
  (two students studying — `img/banner/home-banner.jpg`) and centered white
  content: Playfair Display 900 42px headline "We Ensure better education
  for a better world", a 14px/24px ipsum paragraph (max-width 620px), and a
  green `#4dbf1c` "Get Started" button (Roboto 13px 500, padding 0 40px,
  line-height 48px, radius 5px; hover: transparent bg + green text); a
  `#f9f9ff` finance strip (padding 40px 0) with 4 icon+title items
  (Linearicons rocket/earth/smile/tag — 36px green `#4dbf1c` — + 18px `#222`
  title, all "Science & Engineering" placeholder in source → vary); a white
  courses area (`p_120` = 120px padding) with a centered main_title (Playfair
  36px `#222` + 14px `#777` sub, max-width 680px, mb 75px) "Popular Free
  Courses" and an asymmetric image grid (col-lg-9: 4 items at 55.55%/44.45%
  widths — wd55, wd44, wd44, wd55 — each with a bottom-left hover overlay:
  green "Free" pill badge (radius 5px, padding 0 25px, line-height 30px),
  white 18px title, meta list lnr-users count / lnr-bubble count / lnr-user
  instructor; col-lg-3 sidebar: one tall course card); a `#f9f9ff` team area
  with 4 centered member cards (photo with circular white `rgba(255,255,255,
0.65)` hover overlay + centered social icons, Playfair bold 18px name, 14px
  `#777` role — all "Ethel Davis / Managing Director (Sales)" in source →
  vary); a white testimonials area with an owl-carousel (max-width 945px) of
  3 slides — avatar image (overlapping the card top, margin-top -50px), 18px
  `#222` name, 5 gold `#ffc000` star icons, role line, 14px quote (max-width
  760px) — over a 1px `#eeeeee` bordered card; a `#f9f9ff` packages area
  (p_120) with a left text column ("Choose Course Packages", Playfair 36px
  `#222`) and two white 5px-rounded pricing cards (padding 30px 55px,
  text-center): 140×140 `#edf8e8` pale-green icon circle (graduation-hat /
  diamond Linearicons — flips to green bg + white icon on hover), title
  "Premium" / "Exclusive", 3 feature rows (`#777`, line-height 50px, divided
  by 1px `#eeeeee`), and a £399.00 price (Roboto 30px, fades out on hover as
  the "Join Now" green button fades in, absolute-centered, `0 10px 30px
rgba(0,0,0,.1)` shadow); a white latest-blog area (p_120) with 4 cards
  (image, 13px `#777` "25 October, 2018 | By Mark Wiens" date, 18px/24px
  `#222` title with 1px `#eeeeee` bottom border — green on hover — ipsum
  snippet); a full-bleed impress CTA band over a background image
  (`img/notify-bg.jpg`, cover) with centered white uppercase 36px "Become an
  instructor" + ipsum (max-width 770px) + white "Apply for the post" button
  (main_btn2 — radius 5px, hover: green bg + white text); and a `#04091e`
  footer (p_120) with 4 link columns (Top Products, Quick Links, Features,
  Resources — `#777` 14px links, mb 12px, white hover), a Newsletter widget
  ("Stay updated with our latest trends" + white 40px input, placeholder
  "Enter email address", width 80%, no border + arrow-only button with the
  distinctive purple-blue gradient `linear-gradient(to right, #2c28b1 0%,
#9b5cf6 51%, #2c28b1 100%)`), and a footer-bottom row (copyright line with
  heart + 4 social icons).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/learnit/
  (HTTP 200, ~29.4 KB HTML fetched; `css/style.css` ~73 KB parsed for
  tokens — the page also imports bootstrap.css, font-awesome.min.css,
  vendored linericon (Linearicons), owl-carousel, lightbox, nice-select,
  animate-css, magnific-popup, responsive.css; site is jQuery + Bootstrap 4
  - owl-carousel + isotope + stellar (parallax) + ajaxchimp, NOT Tailwind).
- **Screenshot note:** `learnit-free-template.jpg` (1200×946) MATCHES the
  live template (thin top bar; white header with green HOME active link and
  green logo mark; full-width photo hero with centered white serif headline
  "We Ensure better education for a better world" and a green "Get Started"
  button; white feature strip with 4 green-outlined icons; start of the
  "Popular Free Courses" grid below). The live preview DOM + stylesheet are
  the authoritative reference; the screenshot confirms the same design.

### Section structure (from the live DOM, top to bottom)

1. `div.top_menu.row.m0` (bg `#f9f9ff`, line-height 42px) > `div.container`:
   - `div.float-left` > `ul.list.header_social`: 4 × `li > a` — fa-facebook,
     fa-twitter, fa-dribbble, fa-behance (14px `#777`, hover green
     `#4dbf1c`, margin-right 15px).
   - `div.float-right`: `a.dn_btn[href=tel:+4400123654896]` "+440 012 3654
     896" + `a.dn_btn[href=mailto:support@colorlib.com]`
     "support@colorlib.com" (12px Roboto `#777`, margin-right 30px, hover
     green).
2. `header.header_area` (absolute, top 0, z-index 99; sticky on scroll via
   `navbar_fixed`) > `div.main_menu` > `nav.navbar.navbar-expand-lg` >
   `div.container`:
   - `a.navbar-brand.logo_h` > `img` (img/logo.png → recreate as text brand
     "LYCEUM" with a green graduation-cap mark).
   - `button.navbar-toggler` (3 × `span.icon-bar` hamburger; collapse toggle
     → mobile menu with client-side state).
   - `div.collapse.navbar-collapse` > `ul.nav.navbar-nav.menu_nav.ml-auto`:
     `li.nav-item.active` "Home" (green on hover/active) · About ·
     `li.nav-item.submenu.dropdown` "Courses" ▾ (`ul.dropdown-menu`:
     Courses, Course Details) · `li.nav-item.submenu.dropdown` "Pages" ▾
     (`ul.dropdown-menu`: Elements) · `li.nav-item.submenu.dropdown` "Blog" ▾
     (`ul.dropdown-menu`: Blog, Blog Details) · Contact. Nav links: font
     500 12px/80px Roboto, text-transform uppercase, color `#222`, padding 0,
     margin-right 45px. Dropdowns: bg #fff, min-width 200px, shadow `0px 3px
16px 0px rgba(0,0,0,0.1)`, sub-items line-height 45px, padding 0 30px,
     border-bottom 1px `#ededed`, hover: bg `#4dbf1c` + white text.
3. `section.home_banner_area` (position relative, min-height 780px, z-index
   1. > `div.banner_inner.d-flex.align-items-center` (min-height 780px,
      > overflow hidden) > `div.overlay.bg-parallax` (bg image
      > `img/banner/home-banner.jpg` center/cover, absolute, height 121%,
      > z-index -1, parallax via stellar data-stellar-ratio 0.9 — recreate as a
      > fixed/static cover) > `div.container` > `div.banner_content.text-center`
      > (color #fff):
   - `h3` "We Ensure better education <br />for a better world" — Playfair
     Display serif, 42px, weight 900, margin-bottom 20px.
   - `p` — 14px/24px Roboto normal, max-width 620px, margin auto (ipsum —
     paraphrase).
   - `a.main_btn` "Get Started" — bg `#4dbf1c`, color #fff, Roboto 13px 500,
     padding 0 40px, line-height 48px, border-radius 5px, border 1px solid
     `#4dbf1c`, margin-top 40px; hover: transparent bg + green text.
4. `section.finance_area` (bg `#f9f9ff`, padding 40px 0) > `div.container` >
   `div.finance_inner.row`: 4 × `div.col-lg-3.col-sm-6` > `div.finance_item` >
   `div.media`:
   - `div.d-flex` (align-self center, padding-right 25px) > `i` 36px green
     `#4dbf1c` — lnr lnr-rocket / lnr lnr-earth / lnr lnr-smile / lnr
     lnr-tag (→ lucide Rocket / Globe / Smile / Tag).
   - `div.media-body` > `h5` 18px/27px `#222` — all "Science & Engineering"
     in source → vary: "Science & Engineering", "Language Courses", "Arts &
     Design", "Business Studies".
5. `section.courses_area.p_120` (overflow hidden) > `div.container`:
   - `div.main_title` (text-center, max-width 680px, margin 0 auto 75px):
     `h2` "Popular Free Courses" (Playfair, 36px, `#222`, mb 12px) + `p`
     14px/24px `#777` (ipsum — paraphrase).
   - `div.row.courses_inner` (margin 0 -15px, overflow hidden, mb -30px):
     - `div.col-lg-9` > `div.grid_inner`: 4 × `div.grid_item` (float left,
       mb 30px) — `wd55` (width 55.55%) ×2 + `wd44` (width 44.45%) ×2,
       ordered wd55, wd44, wd44, wd55:
       `div.courses_item` (position relative, overflow hidden) > `img`
       (img/courses/course-1..5.jpg; grid uses 1,2,4,5 — sidebar uses 3) +
       `div.hover_text` (position absolute, left 0, bottom 15px, padding 0
       35px):
       - `a.cat` "Free" — bg `#4dbf1c`, white, padding 0 25px, border-radius
         5px, line-height 30px, 14px 500 Roboto, mb 20px, inline-block.
       - `a > h4` 18px white, mb 15px, hover green (course titles all
         "Japanease Language Class" in source → vary: e.g. "Photography
         Masterclass", "Web Design Bootcamp", "Data Science Basics",
         "Creative Writing Workshop").
       - `ul.list`: 3 × `li` (inline, margin-right 16px) > `a` white 14px:
         `i.lnr.lnr-users` + "355" (students), `i.lnr.lnr-bubble` + "35"
         (reviews), `i.lnr.lnr-user` + "T. Robert" (instructor — vary names).
     - `div.col-lg-3` > `div.course_item` (position relative): `img`
       (img/courses/course-3.jpg — tall sidebar card) + same
       `hover_text` overlay (cat badge + title + meta).
6. `section.team_area.p_120` (bg `#f9f9ff`) > `div.container`:
   - `div.main_title`: `h2` "Meet Our Faculty" + `p` (ipsum).
   - `div.row.team_inner` (mb -30px): 4 × `div.col-lg-3.col-sm-6` >
     `div.team_item` (position relative, text-center, mb 30px):
     - `div.team_img` (position relative): `img` (img/team/team-1..4.jpg,
       width 100%) + `:before` circular overlay bg `rgba(255,255,255,0.65)`
       (opacity 0 → 1 on hover, border-radius 50%) + `div.hover`
       (absolute, top 50% translateY(-50%), centered, opacity 0 → 1 on
       hover): 3 × `a` 14px `#777` (margin-right 20px; hover green) —
       fa-facebook / fa-twitter / fa-linkedin.
     - `div.team_name` (text-center, mt 30px): `h4` Playfair bold 18px
       `#222`, mb 5px, hover green (source repeats "Ethel Davis" → vary:
       "Ethel Davis", "Stephen Kelby", "Martha Bell", "Jack Dyson") + `p`
       14px Roboto `#777` (role; source "Managing Director (Sales)" →
       vary roles: "Managing Director (Sales)", "Senior Lecturer",
       "Curriculum Lead", "Admissions Head").
7. `section.testimonials_area.p_120` > `div.container` >
   `div.testi_slider.owl-carousel` (max-width 945px, margin auto): 3 ×
   `div.item` (padding-top 50px) > `div.testi_item` (text-center, border 1px
   solid `#eeeeee`):
   - `img` avatar (width auto, margin auto, margin-top -50px — overlaps the
     card top edge; 80×80 thumb).
   - `h4` 18px `#222`, mt 20px, mb 15px — "Fannie Rowe" (vary names).
   - `span` role line ("Accessories" in source → role/title per person).
   - `ul.list` 5 × `li > a` star icons (fa-star), color `#ffc000` 14px,
     mb 20px.
   - `p` quote (max-width 760px, margin auto, mb 60px; ipsum — 3 distinct
     quotes in recreation). Carousel → client-side state, no owl-carousel.
8. `section.packages_area.p_120` (bg `#f9f9ff`) > `div.container` >
   `div.row.packages_inner` (align-items center via col align-self):
   - `div.col-lg-4` > `div.packages_text` (align-self center): `h3` 36px
     `#222` mb 20px "Choose Course Packages" + `p` (ipsum).
   - 2 × `div.col-lg-4` > `div.packages_item` (bg #fff, border-radius 5px,
     text-center, padding 30px 55px; align-self center):
     - `div.pack_head`: `i` 140×140 circle bg `#edf8e8`, 36px icon `#222`,
       line-height 140px, margin 0 auto 25px, hover → bg `#4dbf1c` + white
       (lnr lnr-graduation-hat / lnr lnr-diamond → lucide GraduationCap /
       Gem) + `h3` 24px `#222` mb 12px ("Premium" / "Exclusive") + `p`
       mb 25px ("For the individuals").
     - `div.pack_body` > `ul.list`: 3 × `li > a` `#777`, line-height 50px,
       border-bottom 1px `#eeeeee` (first has border-top too): "Secure
       Online Transfer", "Unlimited Styles for interface", "Reliable
       Customer Service".
     - `div.pack_footer` (position relative): `h4` 30px Roboto `#222`, mt
       40px, mb 0, font-weight normal ("£399.00" — fades to opacity 0 on
       card hover) + `a.main_btn` "Join Now" (absolute, top -20px, left 50%
       translateX(-50%), padding 0 35px, shadow `0px 10px 30px 0px
rgba(0,0,0,0.1)`, opacity 0 → 1 on card hover).
9. `section.latest_blog_area.p_120` > `div.container`:
   - `div.main_title`: `h2` "Latest Posts From Blog" + `p` (ipsum).
   - `div.row.latest_blog_inner`: 4 × `div.col-lg-3.col-md-6` >
     `div.l_blog_item` (mb 30px): `img.img-fluid` (img/latest-blog/l-blog-1..4.jpg)
     - `a.date` 13px Roboto `#777` (display block, mt 20px, mb 15px) "25
       October, 2018 | By Mark Wiens" (vary dates/authors) + `a > h4` 18px/24px
       `#222` border-bottom 1px `#eeeeee`, pb 20px, mb 20px, hover green
       (source title "Addiction When Gambling Becomes A Problem" ×4 → vary 4
       post titles) + `p` (ipsum snippet).
10. `section.impress_area.p_120` (bg image `img/notify-bg.jpg` no-repeat
    center, background-size cover) > `div.container` >
    `div.impress_inner.text-center` (color #fff):
    - `h2` uppercase 36px mb 20px "Become an instructor".
    - `p` max-width 770px, margin 0 auto 45px (ipsum).
    - `a.main_btn2` "Apply for the post" — bg #fff, color `#222`, Roboto 14px
      500, padding 0 32px, line-height 48px, radius 5px, border 1px #fff;
      hover: bg `#4dbf1c` + white + green border.
11. `<footer class="footer-area p_120">` (bg `#04091e`) > `div.container` >
    `div.row`:
    - 4 × `div.col-lg-2.col-md-6.col-sm-6` > `div.single-footer-widget.tp_widgets`:
      `h6.footer_title` (white, 14px) — "Top Products" (Managed Website,
      Manage Reputation, Power Tools, Marketing Service) · "Quick Links"
      (Jobs, Brand Assets, Investor Relations, Terms of Service) ·
      "Features" (Jobs, Brand Assets, Investor Relations, Terms of Service)
      · "Resources" (Guides, Research, Experts, Agencies) — each
      `ul.list > li` (mb 12px) > `a` 14px Roboto `#777`, hover #fff.
    - `div.col-lg-4.col-md-6.col-sm-6` > `aside.f_widget.news_widget`
      (padding-left 15px): `div.f_title` > `h3.footer_title` "Newsletter" +
      `p` 14px/24px `#777` "Stay updated with our latest trends" (mb 15px) +
      `form.subscribe_form.relative` > `div.input-group.d-flex.flex-row`:
      `input[type=email]` (placeholder "Enter email address", height 40px,
      bg #fff, width 80%, border none, padding 0 15px, 14px Roboto, color
      `#777`, focus outline none) + `button.btn.sub-btn` (bg
      `linear-gradient(to right, #2c28b1 0%, #9b5cf6 51%, #2c28b1 100%)`,
      background-size 200% auto, white, 12px 500, line-height 40px, padding
      0 38px, radius 0 in news_widget variant, cursor pointer; hover shifts
      gradient position) > `span.lnr.lnr-arrow-right` (→ lucide ArrowRight).
    - `div.row.footer-bottom.d-flex.justify-content-between.align-items-center`:
      `p.col-lg-8.footer-text.m-0` (14px `#C7C7C7`-ish muted): "Copyright ©
      <year> All rights reserved | This template is made with <i class="fa
      fa-heart-o"> by Colorlib" + `div.col-lg-4.footer-social`: 4 × `a`
      (fa-facebook / fa-twitter / fa-dribbble / fa-behance).

### Content (for copy paraphrase)

- Top bar: 4 socials (Facebook, Twitter, Dribbble, Behance); phone "+440 012
  3654 896"; email "support@colorlib.com".
- Nav: Home (active), About, Courses ▾ (Courses, Course Details), Pages ▾
  (Elements), Blog ▾ (Blog, Blog Details), Contact.
- Hero: h3 "We Ensure better education for a better world"; ipsum sub; CTA
  "Get Started".
- Finance strip: 4 items — Science & Engineering / Language Courses / Arts &
  Design / Business Studies (source repeats one placeholder title — vary).
- Courses: "Popular Free Courses"; 4 grid cards (Free badge, varied course
  titles, students/reviews/instructor meta) + 1 sidebar card.
- Team: "Meet Our Faculty"; 4 members with varied names + roles.
- Testimonials: 3 slides — name, role, 5 gold stars, distinct quotes.
- Packages: "Choose Course Packages"; Premium / Exclusive — each "For the
  individuals", 3 features (Secure Online Transfer, Unlimited Styles for
  interface, Reliable Customer Service), £399.00, "Join Now".
- Blog: "Latest Posts From Blog"; 4 posts (image, date | author, title,
  snippet).
- Impress: "Become an instructor" + ipsum + "Apply for the post".
- Footer: 4 link columns (Top Products, Quick Links, Features, Resources),
  Newsletter widget, copyright line + 4 socials.

## Design tokens

| Token            | Value                    | Usage                                                                                                     |
| ---------------- | ------------------------ | --------------------------------------------------------------------------------------------------------- |
| brand-green      | `#4dbf1c`                | main_btn/submit_btn bg, cat badge, active+hover nav links, finance icons, hover accents, Join Now reveal  |
| gradient-primary | `#2c28b1 → #9b5cf6`      | footer newsletter sub-btn background (linear-gradient, background-size 200%)                              |
| ink              | `#222222`                | nav links, h3/h4/h5 headings, package titles + price, main_btn2 text                                      |
| muted            | `#777777`                | main_title p, top_bar socials/contacts, team roles, blog dates, footer links, newsletter p, meta counts   |
| light-bg         | `#f9f9ff`                | top_menu, finance_area, team_area, packages_area backgrounds                                              |
| border-soft      | `#eeeeee`                | testimonial card border, package feature dividers, blog h4 bottom border, dropdown item divider `#ededed` |
| star-gold        | `#ffc000`                | testimonial star icons                                                                                    |
| pack-chip        | `#edf8e8`                | package icon circle background (pale green)                                                               |
| footer-bg        | `#04091e`                | footer background (near-black navy)                                                                       |
| team-overlay     | `rgba(255,255,255,0.65)` | circular team photo hover overlay                                                                         |
| dropdown-shadow  | `rgba(0,0,0,0.1)`        | dropdown + Join Now button shadows                                                                        |
| paper            | `#ffffff`                | hero text, course overlay text, buttons, packages cards, newsletter input bg                              |
| font-heading     | "Playfair Display"       | hero h3 (42px/900), main_title h2 (36px), team h4 (18px bold)                                             |
| font-body        | "Roboto"                 | everything else (nav 500 12px uppercase, buttons 13–14px 500, body 14px)                                  |

Radii: 5px on `.main_btn` / `.main_btn2` / `.submit_btn` / cat badge /
packages_item cards; 50% circle on package icon chips and the team hover
overlay; everything else square. Spacing: sections use `.p_120` (120px
top/bottom) for courses/team/testimonials/packages/blog/impress/footer;
finance strip 40px; main_title max-width 680px centered, mb 75px; hero
min-height 780px, h3 42px mb 20px, CTA mt 40px; nav 12px/80px uppercase,
item margin-right 45px, dropdown min-width 200px items 45px; courses grid
items 55.55%/44.45% float, mb 30px, hover_text bottom 15px padding 0 35px;
packages_item padding 30px 55px, icon circle 140px, feature rows 50px
line-height, price 30px mt 40px; footer newsletter input 40px height 80%
width; footer links 14px mb 12px; footer-bottom has 30px top padding
(footer_border pb 30px).

## Requirements

### Requirement: Top bar

The system SHALL render a thin `#f9f9ff` top bar with social icons on the
left and contact details on the right.

#### Scenario: Top bar content

- **GIVEN** the Lyceum app is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show four social icon links (Facebook, Twitter,
  Dribbble, Behance) on the left
- **AND** the phone number "+440 012 3654 896" and email
  "support@colorlib.com" SHALL render on the right
- **AND** all top-bar links SHALL turn the brand green on hover

### Requirement: Header / Navigation

The system SHALL render a white sticky navbar with the brand, six nav links
(three with dropdowns), and a mobile hamburger menu.

#### Scenario: Brand and nav links

- **GIVEN** the header is rendered
- **WHEN** the page loads
- **THEN** the brand "LYCEUM" SHALL render at the left with a
  graduation-cap-style mark
- **AND** the nav SHALL list Home (active), About, Courses, Pages, Blog, and
  Contact in UPPERCASE 12px Roboto
- **AND** the active Home link SHALL be highlighted in brand green
- **AND** the Courses, Pages, and Blog links SHALL each expand a white
  dropdown on hover/focus (Courses → Courses, Course Details; Pages →
  Elements; Blog → Blog, Blog Details)

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow
- **WHEN** the hamburger trigger is activated
- **THEN** a mobile menu SHALL open listing the same nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero

The system SHALL render a full-width hero over a photo background with a
centered serif headline, a paragraph, and a green CTA.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show the banner photo as a full-bleed cover
  background (min-height 780px)
- **AND** the centered white headline SHALL read "We Ensure better education
  for a better world" in Playfair Display 42px weight 900
- **AND** a white 14px paragraph SHALL sit below the headline (max-width
  620px, centered)
- **AND** the "Get Started" button SHALL have a brand-green background, white
  text, and 5px radius

#### Scenario: Button hover

- **GIVEN** the Get Started button is rendered
- **WHEN** it is hovered
- **THEN** the background SHALL become transparent and the text SHALL turn
  brand green

### Requirement: Feature strip

The system SHALL render the `#f9f9ff` finance strip with four icon + title
items.

#### Scenario: Feature items

- **GIVEN** the feature strip is rendered
- **WHEN** the page loads
- **THEN** four equal-width items SHALL render, each with a 36px brand-green
  icon (Rocket, Globe, Smile, Tag) and an 18px dark title
- **AND** the titles SHALL read Science & Engineering, Language Courses,
  Arts & Design, and Business Studies

### Requirement: Courses

The system SHALL render the "Popular Free Courses" section with an asymmetric
image grid (4 cards) plus a sidebar card, each with a bottom overlay showing a
Free badge, title, and meta.

#### Scenario: Course grid

- **GIVEN** the courses section is rendered
- **WHEN** the page loads
- **THEN** the centered Playfair 36px title SHALL read "Popular Free Courses"
- **AND** a 9-column main grid SHALL render four course cards in the 55% /
  44% / 44% / 55% width rhythm
- **AND** a 3-column sidebar SHALL render one tall course card

#### Scenario: Course card overlay

- **GIVEN** a course card is rendered
- **WHEN** the page loads
- **THEN** the bottom overlay SHALL show a green "Free" pill badge (5px
  radius), a white 18px course title, and a meta row (students count, review
  count, instructor name)
- **AND** the title SHALL turn brand green on hover

### Requirement: Team

The system SHALL render the "Meet Our Faculty" section with four member cards
that reveal a circular overlay with social icons on hover.

#### Scenario: Team cards

- **GIVEN** the team section is rendered
- **WHEN** the page loads
- **THEN** the centered title SHALL read "Meet Our Faculty"
- **AND** four equal-width cards SHALL render, each with a photo, a Playfair
  bold 18px name, and a 14px muted role

#### Scenario: Card hover

- **GIVEN** a team card is rendered
- **WHEN** it is hovered
- **THEN** a circular `rgba(255,255,255,0.65)` overlay SHALL cover the photo
  with three centered social icons (Facebook, Twitter, LinkedIn)
- **AND** the member name SHALL turn brand green

### Requirement: Testimonials carousel

The system SHALL render a testimonials carousel with three slides, each with
an avatar, name, gold stars, and a quote, driven by client-side state.

#### Scenario: Carousel slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the first slide SHALL show an avatar image overlapping the top of
  the bordered card, an 18px name, a role line, five `#ffc000` stars, and a
  quote paragraph
- **AND** the carousel SHALL contain three distinct slides

#### Scenario: Carousel navigation

- **GIVEN** the testimonials carousel is rendered
- **WHEN** the next/previous controls are activated
- **THEN** the carousel SHALL advance/go back one slide
- **AND** dot indicators SHALL reflect the active slide

### Requirement: Packages

The system SHALL render the `#f9f9ff` packages area with a text column and two
pricing cards whose price swaps to a Join Now button on hover.

#### Scenario: Pricing cards

- **GIVEN** the packages section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show the Playfair 36px heading "Choose
  Course Packages" with an ipsum paragraph
- **AND** two white 5px-rounded cards SHALL render, titled "Premium" and
  "Exclusive", each with a 140px pale-green icon circle (GraduationCap /
  Gem), a "For the individuals" line, three feature rows (Secure Online
  Transfer, Unlimited Styles for interface, Reliable Customer Service), and a
  £399.00 price

#### Scenario: Card hover

- **GIVEN** a pricing card is rendered
- **WHEN** it is hovered
- **THEN** the icon circle SHALL fill brand green with a white icon
- **AND** the price SHALL fade out while the green "Join Now" button fades in
  (centered, with the soft shadow)

### Requirement: Latest blog

The system SHALL render the "Latest Posts From Blog" section with four post
cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the centered title SHALL read "Latest Posts From Blog"
- **AND** four equal-width cards SHALL render, each with an image, a 13px
  muted "date | author" line, an 18px title with a 1px `#eeeeee` bottom
  border, and an ipsum snippet
- **AND** each title SHALL turn brand green on hover

### Requirement: Impress CTA

The system SHALL render a full-bleed CTA band over a background image with a
white headline and a white button that inverts on hover.

#### Scenario: CTA content

- **GIVEN** the impress section is rendered
- **WHEN** the page loads
- **THEN** the background SHALL be the notify-bg image (cover)
- **AND** the centered white uppercase headline SHALL read "Become an
  instructor" with an ipsum paragraph below
- **AND** the "Apply for the post" button SHALL have a white background and
  dark text

#### Scenario: Button hover

- **GIVEN** the Apply for the post button is rendered
- **WHEN** it is hovered
- **THEN** the background SHALL fill brand green and the text SHALL turn
  white

### Requirement: Footer

The system SHALL render a `#04091e` footer with four link columns, a
newsletter form with the gradient arrow button, and a footer-bottom row.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the first four columns SHALL list Top Products (Managed Website,
  Manage Reputation, Power Tools, Marketing Service), Quick Links (Jobs,
  Brand Assets, Investor Relations, Terms of Service), Features (Jobs, Brand
  Assets, Investor Relations, Terms of Service), and Resources (Guides,
  Research, Experts, Agencies) as muted 14px links that turn white on hover
- **AND** the newsletter widget SHALL show "Newsletter", the line "Stay
  updated with our latest trends", a white email input (placeholder "Enter
  email address"), and an arrow-only button with the purple-blue gradient
- **AND** the footer-bottom SHALL show the copyright line ("Copyright ©
  <year> All rights reserved | This template is made with <heart> by
  Colorlib") and four social icons

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is rendered
- **WHEN** an invalid email is submitted
- **THEN** the form SHALL show an error and SHALL NOT submit
- **WHEN** a valid email is submitted
- **THEN** the form SHALL swap to a success message

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lyceum app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar + header in the banner
  landmark, the hero, finance, courses, team, testimonials, packages, blog,
  and impress sections in the main landmark, and the footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Lyceum — Education Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/lyceum` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- lyceum` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#4dbf1c, #2c28b1/#9b5cf6 gradient, #222222, #777777, #f9f9ff, #eeeeee, #ffc000, #edf8e8, #04091e, rgba(255,255,255,0.65), #fff, Playfair Display, Roboto) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `lyceum-<n>`, Google Fonts Playfair Display + Roboto links, lucide icons + inline SVG brand icons only)
- [ ] Course cards show the bottom overlay (green Free badge, white title, meta); title turns green on hover
- [ ] Team cards reveal the circular white overlay with 3 social icons on hover; name turns green
- [ ] Testimonials carousel implemented with client-side state (no owl-carousel dep); arrows + dots behave; 3 distinct slides
- [ ] Pricing cards: icon circle flips to green on hover; price fades out as "Join Now" fades in (with `0 10px 30px rgba(0,0,0,0.1)` shadow)
- [ ] Footer newsletter: white 40px input + gradient arrow-only button; validates (zod) + swaps to success; gradient `background-size 200%` hover shift
- [ ] Mobile hamburger menu opens/closes with focus handling
- [ ] Hero + impress buttons invert correctly on hover (green fill / transparent)
