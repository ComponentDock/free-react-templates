# Template: Cargomate (Logistics Company Template)

## Purpose

Cargomate is a logistics & freight company home-page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Lagoon" template design (see TEMPLATES.md — appears 3×: lines
432, 1071, 2960; all three rows point to the same source, one prep covers all;
verified with `grep -c 'wp/template/lagoon/'` = 3), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Lagoon" — Logistics Company Template (`<title>Lagoon
Logistics</title>`). A logistics/shipping one-pager: dark #262533 top strip
  (social icons left, phone + email right), a #f8f8f8 main navbar (logo +
  Home / About / Services / Pages ▾ / Blog ▾ / Contact, uppercase 700 Roboto
  Condensed 13px), a full-width hero photo (busy shipping port) carrying a
  split content block — left dark #262533 panel with the uppercase headline
  "Solid Super Service", right white panel with a paragraph and a dark
  "Explore More" button; a 2×2 feature grid (Shipment Tracking, Have a
  Question?, Get a Quote, Shipping Calculator) next to an "About Our Company"
  title block with a "Learn More About Us" button; an about area with 6
  grayscale brand logos in a 3×2 grid + 4 animated counters ($2500+ Packages
  Delivered, $500+ Satisfied Clients, $70+ Countries reach, 5000 Tons of
  goods); a dark #262533 services section with 3 image-topped cards ("Did not
  find your Package" ×3, "Learn More" links); a white quote/estimate card over
  the dark block with two tabs (Get an estimation / Track Shipment) sharing a
  10-field form (First name, Last name, Email Address, Cargo Type, Country of
  Origin, Destination, Quantity, Weight, Width, Height) and a red "Request a
  Quote" button; a red testimonial slider (2 slides, italic quote + author
  name/role); a 3-card blog section (third card on a dark overlay image); a
  red CTA band ("Please feel free to reach us" + white "Explore More"
  button); and a dark footer (About Us, Newsletter with arrow submit, Follow
  Us social icons, Colorlib credit line). Source:
  https://colorlib.com/wp/template/lagoon/.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lagoon/
  (HTTP 200, ~37.5 KB HTML fetched; `style.css` ~135 KB parsed for tokens —
  the page imports bootstrap/font-awesome/linericon/owl/nice-select/animate/
  jquery-ui css + jQuery; NOT Tailwind).
- **Screenshot analyzed:** `lagoon-free-template.jpg` (1200×946, TEMPLATES.md
  line 432; browser vision verified) — thin dark grey top strip (social icons
  left, search box center, phone + "EMERGENCY@LOGISTICS.COM" right); white
  header with a red square "L" logo mark + "Lagoon Logistics" wordmark and
  uppercase nav (HOME, ABOUT, SERVICES, PAGES, BLOG, CONTACT); full-width hero
  photo of a shipping port (cranes + containers) under a heavy red tint; a
  floating split box center-left — left dark navy panel "SOLID SUPER
  SERVICE", right white panel with placeholder text + dark "EXPLORE MORE"
  button with a right-pointing arrow; below, a white section with a
  truck/container icon + "Shipment Tracking", a phone icon + "Have a
  Question?", and an "ABOUT OUR COMPANY" block with the big headline
  "WE'RE CAREFULLY DELIVERING YOUR…"; a dark footer band at the bottom.
  Matches the live DOM 1:1 (DOM is the reference — e.g. the top strip has 4
  social icons + phone/email, no search box; the logo is an image → recreate
  as text).
- **Section order (1:1):** Header (`header.header_area`, `position: relative;
width: 100%; z-index: 99`; absolute ≤991px):
  1. `div.top_menu.d-lg-block.d-none` — `background: #262533; height: 40px`
     (hidden <992px): `ul.left_side` — 4 × `a` white 12px uppercase social
     icons (fa-facebook-f, fa-twitter, fa-dribbble, fa-behance; margin-right
     20px; hover red #e72727); `ul.right_side` — 2 × `a` white 12px
     uppercase (margin-right 30px; `i` red #e72727, margin-right 15px):
     "012-6532-568-9746" (phone), "emergency@colorlib.com" (email).
  2. `div.main_menu` — `background: #f8f8f8`; `nav.navbar.navbar-expand-lg
w-100` with `border-top: 1px solid rgba(221,221,221,0.38)`; brand:
     `a.navbar-brand.logo_h` logo image → recreate as bold uppercase text
     "CARGOMATE"; `ul.nav.navbar-nav.ml-auto.justify-content-end` — 6 items:
     Home (`.active`), About, Services, Pages (`li.submenu.dropdown` →
     `ul.dropdown-menu`: Elements), Blog (`li.submenu.dropdown` → Blog, Blog
     Details), Contact; `a.nav-link` = Roboto Condensed 700 13px/80px
     uppercase #262533, `margin-right: 45px`, hover/active red #e72727;
     `button.navbar-toggler` with 3 × `span.icon-bar` (mobile hamburger).
     → Hero (`section.home_banner_area`) — `background: url(../img/banner/
home.jpg) no-repeat center top; background-size: cover` (busy port
     photo; screenshot shows red tint):
  3. `div.banner_inner.d-flex.align-items-center` → `div.banner_content.d-flex
flex-md-row.flex-column` (padding 194px 0; 100px ≤991px):
     `div.banner-left.text-md-right` (`col-lg-7`, `background: #262533;
padding: 60px 53px`) — `h1.text-uppercase` 48px white (35px ≤767px)
     "Solid Super Service"; `div.banner-right.position-relative` (white bg,
     padding 60px 40px) — `p` (max-width 498px) + `a.main_btn.mt-md-0.mt-4`
     "Explore More" (`position: absolute; right: 0; bottom: 0; background:
#262533; border: 0`; hover: bg red #e72727 + white corner arrow).
     → Feature area (`section.feature-area.section_gap_top`, padding-bottom
     80px):
  4. `div.row.align-items-center.justify-content-center`: `div.col-lg-7` →
     `div.row` of 4 × `div.single-feature` (col-lg-6 col-md-6, margin-bottom
     60px): icon `img` (img/feature/f1.png..f4.png → lucide icons), `h4` 21px
     400 (#262533), `p`, `a` 13px 700 uppercase #262533 ls 0.5px with hover
     effect (red 40×3px bar `:before` + `padding-left: 60px`):
     - Shipment Tracking / "Find your cargo"
     - Have a Question? / "Contact Us"
     - Get a Quote / "Start a quote"
     - Shipping Calculator / "Get Estimate"
  5. `div.col-lg-5.offset-md-0.col-md-12.text-left.section-title-wrap.mt-4.
mt-lg-0` — `h5` "About Our Company" (red 12px uppercase ls 1px),
     `h2` "We're Carefully / Delivering your / happiness." (42px 700
     uppercase), `h4` + `p` copy, `a.main_btn` "Learn More About Us" (red).
     → About area (`section.about-area`) — `background: url(../img/about/
about-bg.png) no-repeat top center` (map pattern), padding-bottom 80px:
  6. `div.col-lg-7` → title row (`h5` "About Our Company" + `h2` "Some
     statistics that we want / to show our viewers") + 6 ×
     `div.single_brand` (col-lg-4 col-md-4 col-6; `border: 1px solid
#e4e7e9`, 3×2 grid with outer borders removed; img grayscale(100%)
     opacity 0.3; hover: white bg + `box-shadow: 0px 10px 40px -14px
#e72727` + full-color img).
  7. `div.offset-lg-1.col-lg-4` → `div.about_box` → `div.activity` → 4 ×
     `div.activity_box` (col-lg-6 col-md-3 col-6; margin-bottom 70px;
     `border-bottom: 3px solid #e4e7e9`; hover: red 3px border): icon img +
     `h3` 42px 700 "**$**2500+ Packages Delivered" (counter), "$500+
     Satisfied Clients", "$70+ Contries reach" (source typo of "Countries"),
     "5000 Tons of goods" + `p`.
     → Service area (`section.service-area.section_gap_top`) — dark block
     `service-area:after` = `background: #262533; height: 1316px` behind
     (z-index -1), margin-bottom 120px:
  8. title row (`h5` "Our Offered Services" red + `h2.text-white` "We offer
     Various Services / to get you covered") + 3 × `div.single-service
col-lg-4.col-md-6` (margin-bottom 30px): `div.thumb` img (full width,
     `overflow: hidden`) + `div.service-box` (`background: #262533; border:
1px solid rgba(255,255,255,0.3); padding: 50px 50px 45px`) — `h3` white
     21px 400 uppercase "Did not find / your Package", `p` (margin 20px 0),
     `a` white 13px 700 uppercase "Learn More" (same red-bar hover);
     hover: box bg white, h3 red, `img` scale(1.05), link #262533 +
     padding-left 60px.
     → Quote area (`section.quote-area`, z-index 5 — white card floats OVER
     the dark service block):
  9. title row (`h5` "Get a quote now!" red + `h2.text-white` "Check the
     estimated cost for / your requesting goods") + `div.estimated-cost`
     (`box-shadow: 0px 10px 30px -10px rgba(231,39,39,0.2)`):
     `nav` → `div.nav.nav-tabs` (border 0) — 2 × `a.nav-link` (padding 8px
     38px, 16px, white bg, radius 0, #262533; active/hover: red + 3px red
     bottom border): "Get an estimation" (active), "Track Shipment";
     `div.tab-content` (white bg, padding 30px 40px 50px) → both panes hold
     the SAME form: 10 `div.form-group` fields in a col-lg-4 (×9) + col-lg-3
     (×1) grid — `label` 12px uppercase #262533; `input.form-control` radius
     0, 13px 300, margin-bottom 10px, `border: 1px solid #ced4da`, focus
     `box-shadow: none`; placeholders "Enter first name", "Enter last name",
     "Enter email address", "Enter cargo type", "Enter country of origin",
     "Enter destination", "Enter quantity", "Enter weight", "Enter width",
     "Enter height"; `div.col-lg-12.mt-4` → `div.text-center.confirm_btn_box`
     → `button.main_btn.text-uppercase` "Request a Quote" (red).
     → Testimonial area (`section.testimonial-area.section_gap_top`):
  10. title row (`h5` "User Feedback" red + `h2` "What our customers feedback
      / for amazing service.") + `div.col-lg-8` → `div.owl-carousel.
active_testimonial`: 2 × `div.single_testi` (`background: #e72727;
color: #fff; text-align: center; padding: 70px 15px; margin-bottom:
150px; box-shadow: 0px 40px 91px -37px rgba(231,39,39,0.5)`):
      `div.testi_content` (max-width 458px, margin auto) — `p` italic quote;
      `div.testi_author.d-flex.justify-content-center.align-items-center`
      (margin-top 40px): `div.thumb.mr-4` img + `div.a-desc.text-left` —
      `h6` 18px 400 uppercase white "Marvel Maison", `p` 14px "Chief
      Executive, Amazon".
      → Blog area (`section.home-blog-area`, margin-bottom 120px):
  11. title row (`h5` "Latest Blog Posts" red + `h2` "Check the latest posts
      / from our blog") + 3 × `div.single-home-blog` (col-lg-4 col-md-6;
      margin-bottom 30px): `div.thumb` img + `div.home-blog-box` (`border:
1px solid #e4e7e9; padding: 50px 50px 45px`) — `a` → `h4` 21px 400
      uppercase #222 "Some statistics that we want to show", `p` excerpt,
      `div.bottom.d-flex` (`border-top: 1px solid #e4e7e9; padding-top:
12px`) — 2 × `a` 14px rgba(143,143,143,0.7) "13th Mar, 2019" | "02
      Comments" (pipe separators, hover red). Third card variant
      (`d-sm-block d-none`): `div.large-img` absolute img + `div.overlay`
      (`background: rgba(38,37,51,0.85)`) + `div.home-blog-box.border-0` with
      `h4.text-white` + white-ish content on the dark photo.
      → CTA area (`section.cta_area`):
  12. `div.cta_inner.d-flex.flex-md-row.flex-column.justify-content-between.
align-items-center` (`background: #e72727; padding: 58px 68px;
box-shadow: 0px 40px 91px -37px rgba(231,39,39,0.5)`) — left:
      `p` white 12px uppercase ls 1px "Get a quick response from our team" +
      `h1` white 42px 400 uppercase (30px ≤991px) "Please feel free to reach
      us"; right: `a.main_btn` "Explore More" (white bg + #262533 text;
      hover: red bg + white text).
      → Footer (`footer.footer-area.section_gap`) — dark block
      `footer-area:before` = `background: #262533; height: 582px` at bottom:
  13. Row of 3 × `div.single-footer-widget`: `h6` white 18px 400 uppercase
      (margin-bottom 25px):
      - "About Us" (col-lg-5) + paragraph.
      - "Newsletter" (col-lg-5) — "Stay update with our latest" + `form.
form-inline`: `input.form-control` (height 50px, width 80%,
        transparent bg, `border: 1px solid #444444`, padding 10px 18px,
        radius 0, placeholder #8f8f8f 300) + `button.click-btn` (red
        #e72727 bg, white, radius 0) with arrow icon `fa-arrow-right`.
      - "Follow Us" (col-lg-2 social-widget) — "Let us be social" +
        `div.footer-social.d-flex.align-items-center` — 4 × `a` with icons
        (fa-facebook-f, fa-twitter, fa-dribbble, fa-behance; `color:
#cccccc`, padding-right 25px; hover red).
  14. `p.footer-text` (padding-top 20px) — "Copyright © <year> All rights
      reserved | This template is made with <heart> by Colorlib" (`a`,
      `i` red #e72727) → original attribution.
- **Design tokens extracted from the preview CSS (computed values verified in
  the stylesheet):**
  - Brand red: **#e72727** — `.main_btn` bg, `.section-title-wrap h5` (12px
    uppercase ls 1px), nav link hover/active, `.top_menu` icon color,
    `.single-feature a:before` / `.single-service a:before` hover bars
    (40×3px), `.activity_box:hover` border (3px), `.single_brand:hover`
    shadow (0px 10px 40px -14px), `.quote-area .nav-tabs .nav-link.active`
    color + 3px bottom border, `.single_testi` bg, `.cta_inner` bg, `.footer-
text a`/`i`, `.single-footer-widget .click-btn` bg, `.single-home-blog
.bottom a:hover`, form-select option hover/selected, `.footer-social a
:hover i`.
  - Dark navy: **#262533** — `.top_menu` bg (40px), `body h1–h6` color,
    `.banner-left` bg, `.main_menu` nav link color, `.service-area:after`
    block (1316px), `.single-service .service-box` bg, `.footer-area:before`
    block (582px), `.single-feature a` / hero `.main_btn` color, `.single-
home-blog .overlay` rgba(38,37,51,0.85), `.estimated-cost label` color.
  - Text gray: **#8f8f8f** — body copy, `.top_menu .float-left p` (12px),
    footer input placeholder (300).
  - Soft gray: **#f8f8f8** — `.main_menu` background.
  - Ink: **#222222 / #222** — navbar `.icons` color, `.single-home-blog a`
    color.
  - Icon hover bg: **#e4e4e4** — `.navbar .icons:hover`.
  - Border gray: **#e4e7e9** — `.single_brand` border (1px),
    `.home-blog-box` border (1px), `.activity_box` border-bottom (3px).
  - Form border: **#ced4da** — `.form-control` / `.nice-select` border.
  - Footer input border: **#444444** — `.single-footer-widget input`.
  - Footer social icon: **#cccccc** — `.footer-social i`.
  - Navbar top border: **rgba(221,221,221,0.38)** — `.navbar` border-top.
  - Service box border: **rgba(255,255,255,0.3)** — `.service-box` border.
  - Card shadows: **0px 10px 30px -10px rgba(231,39,39,0.2)** (quote card),
    **0px 40px 91px -37px rgba(231,39,39,0.5)** (testimonial + CTA).
  - Blog meta gray: **rgba(143,143,143,0.7)** — `.home-blog-box .bottom a`.
  - Paper: **#ffffff** — page/section bg, `.banner-right` bg, `.main_menu`
    nav dropdown bg, `.tab-content` bg, `.single_brand:hover` bg.
  - Fonts: **"Roboto Condensed"** (400/700, loaded via `@import` Google
    Fonts) — `body` 15px 400 #8f8f8f; nav links 700 13px; `.main_btn` 700
    13px ls 0.5px; `h1`–`h6` 700; `.section-title-wrap h2` 42px 700 (30px
    ≤991px); `.section-title-wrap h5` 12px 400 ls 1px uppercase.
  - Buttons (`.main_btn`): red #e72727 bg, white text, Roboto Condensed 700
    13px uppercase ls 0.5px, line-height 60px (50px ≤767px), padding 0 40px,
    **border-radius 0**, signature detail: `:before` inset white 1px border
    (top/left/bottom/right 5px) + `:after` bottom-right corner cut
    (10px white border-triangle); hover: text #262533, `:before` bg white,
    `:after` flips red. Variants: hero (dark navy bg), CTA (white bg /
    #262533 text).
  - Radii: **0px everywhere** (buttons, inputs, cards, tabs) — sharp-edged
    design.
  - Spacing: `section_gap` = 150px 0 (100px ≤991px); `section_gap_top` =
    padding-top 150px (100px ≤991px); `.section-title-wrap` margin-bottom
    80px (50px ≤991px); top strip 40px; nav 80px line-height; hero content
    194px padding (100px ≤991px); `.banner-left`/`.banner-right` padding
    60px 53px / 60px 40px (30px 20px ≤991px); `.single-feature` mb 60px;
    `.service-box` / `.home-blog-box` padding 50px 50px 45px (40px 15px 35px
    ≤1199px); tab content padding 30px 40px 50px; `.single_testi` padding
    70px 15px; `.cta_inner` padding 58px 68px (54px 15px ≤991px).
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/cargomate-<n>/<w>/<h>`): hero
  cargomate-1 (shipping port, 1600×800), service thumbs cargomate-2..4
  (560×400), blog thumbs cargomate-5..7 (400×300) + large blog bg
  cargomate-8 (800×600), testimonial avatars cargomate-9..10 (70×70),
  brand logos → text-only wordmarks in grayscale (or picsum 120×60 if
  images are preferred — text wordmarks keep it asset-free); icons →
  lucide-react (Feature icons: Package/Search/Box, HelpCircle, FileText,
  Calculator; top-strip: social brand icons as inline SVG — lucide removed
  brand icons; footer social same inline SVGs; Phone, Mail, ArrowRight,
  Heart); fonts Roboto Condensed (400/700) via Google Fonts `<link>` in
  `index.html`; logo image → bold uppercase text "CARGOMATE" (Roboto
  Condensed 700, ~24px, #262533, red "C" or red square accent optional).
  Counters animate on scroll (state-based count-up; fake timers in tests).
  Tabs ("Get an estimation" / "Track Shipment") are state-based; both panes
  share ONE form dataset (the source duplicates the markup). Testimonial
  slider is a state-based index carousel with prev/next or dot controls (no
  new deps). Tokens #e72727 / #262533 / #8f8f8f / #f8f8f8 / #222 / #e4e4e4 /
  #e4e7e9 / #ced4da / #444444 / #cccccc + rgba overlays in `@theme`.

Cargomate lives in `apps/cargomate` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Top strip and header

The system SHALL render a dark top strip with social links and contact info,
plus a light navbar with the logo, nav menu, dropdowns, and a mobile toggle.

#### Scenario: Top strip

- **GIVEN** the Cargomate page is rendered
- **WHEN** the viewport is at least 992px wide
- **THEN** a 40px-tall #262533 strip SHALL show four white uppercase social
  icon links on the left (hover red) and two white uppercase links on the
  right with red icons: the phone number "012-6532-568-9746" and the email
  "emergency@colorlib.com"
- **AND** the strip SHALL be hidden below 992px

#### Scenario: Navbar

- **GIVEN** the header is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL have a #f8f8f8 background with a 1px
  rgba(221,221,221,0.38) top border and show the logo text "CARGOMATE" on
  the left
- **AND** the menu SHALL list Home (current), About, Services, Pages
  (dropdown with Elements), Blog (dropdown with Blog and Blog Details), and
  Contact in Roboto Condensed 700 13px uppercase #262533
- **AND** links SHALL turn red #e72727 on hover/active
- **AND** a hamburger toggler SHALL collapse the menu on narrow viewports

### Requirement: Hero

The system SHALL render a full-width hero photo with a split content block:
a dark headline panel and a white copy panel with a CTA button.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL show a full-width background image (shipping port)
  with a content block padded 194px vertically (100px on tablet)
- **AND** the left panel SHALL have a #262533 background and the uppercase
  white 48px headline "Solid Super Service"
- **AND** the right panel SHALL have a white background, a short paragraph,
  and an "Explore More" button anchored to its bottom-right corner
- **AND** the hero button SHALL be dark navy #262533 and turn red on hover

### Requirement: Feature grid

The system SHALL render a 2×2 grid of four feature cards next to an
"About Our Company" title block with a CTA.

#### Scenario: Feature cards

- **GIVEN** the feature section is rendered
- **WHEN** the page loads
- **THEN** four features SHALL be laid out in a 2×2 grid, each with an icon,
  a 21px heading, a short paragraph, and an uppercase 13px link:
  Shipment Tracking (Find your cargo), Have a Question? (Contact Us), Get a
  Quote (Start a quote), and Shipping Calculator (Get Estimate)
- **AND** each feature link SHALL slide right with a 40×3px red underline
  bar appearing on hover

#### Scenario: About title block

- **GIVEN** the feature section is rendered
- **WHEN** the page loads
- **THEN** the right column SHALL show the red 12px uppercase eyebrow "About
  Our Company", the 42px uppercase headline "We're Carefully Delivering your
  happiness.", two paragraphs of copy, and a red "Learn More About Us"
  button

### Requirement: About and statistics

The system SHALL render a brand-logo grid and four animated counters.

#### Scenario: Brand logos

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** six brand placeholders SHALL be laid out in a 3×2 grid with 1px
  #e4e7e9 borders, shown grayscale at 30% opacity
- **AND** hovering a brand SHALL give it a white background, a red-tinted
  shadow, and full-color content

#### Scenario: Counters

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** four counters SHALL be shown in a 2×2 grid, each with an icon, a
  42px bold value, and a label: $2500+ Packages Delivered, $500+ Satisfied
  Clients, $70+ Contries reach (keep the source spelling), and 5000 Tons of
  goods
- **AND** each counter SHALL have a 3px #e4e7e9 bottom border that turns red
  on hover
- **AND** the values SHALL count up to their target when scrolled into view

### Requirement: Services

The system SHALL render a dark services section with three image-topped
cards.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a #262533 background block behind it, a
  red 12px eyebrow "Our Offered Services", and a white 42px uppercase
  headline "We offer Various Services to get you covered"
- **AND** three cards SHALL be shown, each with a full-width image and a
  dark #262533 content box (1px rgba(255,255,255,0.3) border) holding a
  white 21px uppercase title "Did not find your Package", a paragraph, and
  a white "Learn More" link
- **AND** hovering a card SHALL whiten the box, turn the title red, scale
  the image 1.05×, and slide the link right with a red underline bar

### Requirement: Quote form

The system SHALL render a tabbed quote/estimate card with a ten-field form
shared by both tabs.

#### Scenario: Tabs

- **GIVEN** the quote section is rendered
- **WHEN** the page loads
- **THEN** a white card SHALL float over the dark services block, headed by
  a red eyebrow "Get a quote now!" and a white uppercase headline "Check the
  estimated cost for your requesting goods"
- **AND** two tabs SHALL be shown — "Get an estimation" (active) and "Track
  Shipment" — where the active/hovered tab is red with a 3px red bottom
  border
- **AND** switching tabs SHALL swap the pane while keeping the same form
  fields

#### Scenario: Form fields

- **GIVEN** a quote tab pane is visible
- **WHEN** the page loads
- **THEN** the form SHALL show ten labelled fields: First name, Last name,
  Email Address, Cargo Type, Country of Origin, Destination, Quantity,
  Weight, Width, and Height, each with a 12px uppercase label and a
  border-radius-0 input (1px #ced4da border)
- **AND** a centered red "Request a Quote" button SHALL submit the form
- **AND** the form SHALL validate required fields and block submission until
  valid (zod + per-field errors per conventions)

### Requirement: Testimonials

The system SHALL render a red testimonial slider with two slides.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the red eyebrow "User Feedback" and the
  uppercase headline "What our customers feedback for amazing service."
- **AND** a red #e72727 card SHALL show an italic quote, an author avatar,
  the author name "Marvel Maison" (18px uppercase white), and the role
  "Chief Executive, Amazon"
- **AND** the slider SHALL contain two slides navigable with prev/next
  and/or dot controls

### Requirement: Blog posts

The system SHALL render three blog cards, the third on a dark image overlay.

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the red eyebrow "Latest Blog Posts" and the
  uppercase headline "Check the latest posts from our blog"
- **AND** three cards SHALL be shown, each with an image and a 1px #e4e7e9
  box containing a 21px uppercase title "Some statistics that we want to
  show", an excerpt, and a bottom meta row with "13th Mar, 2019" and "02
  Comments" separated by a pipe (hover red)
- **AND** the third card SHALL render its title and content over a dark
  rgba(38,37,51,0.85) image overlay with a white headline

### Requirement: CTA band

The system SHALL render a red call-to-action band with a white button.

#### Scenario: CTA content

- **GIVEN** the CTA section is rendered
- **WHEN** the page loads
- **THEN** a red #e72727 band SHALL show the 12px uppercase line "Get a
  quick response from our team", the 42px uppercase headline "Please feel
  free to reach us", and a white "Explore More" button (dark text; red on
  hover)

### Requirement: Footer

The system SHALL render a dark footer with About, Newsletter, social links,
and the Colorlib credit.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a #262533 block at its base and three
  columns headed by 18px uppercase white titles:
- **AND** the "About Us" column SHALL show a short paragraph
- **AND** the "Newsletter" column SHALL show the line "Stay update with our
  latest" and an email input (transparent, 1px #444444 border, #8f8f8f
  placeholder) with a red arrow submit button that validates the email and
  shows a success state
- **AND** the "Follow Us" column SHALL show four gray social icons that turn
  red on hover
- **AND** the bottom line SHALL read "Copyright © <year> All rights reserved
  | This template is made with <heart> by Colorlib" with the heart and link
  in red (original attribution)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Cargomate app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the
  hero, features, about, services, quote, testimonials, blog, and CTA
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Cargomate — Logistics Company
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/cargomate` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- cargomate` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#e72727, #262533, #8f8f8f, #f8f8f8, #222, #e4e4e4, #e4e7e9, #ced4da, #444444, #cccccc, rgba(38,37,51,0.85), rgba(221,221,221,0.38), rgba(255,255,255,0.3), Roboto Condensed) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `cargomate-<n>`, Google Fonts link, lucide icons + inline SVG brand icons only)
- [ ] Quote tabs ("Get an estimation" + "Track Shipment") implemented with client-side state; both panes share one form dataset
- [ ] Counters count up on scroll (fake timers in tests); testimonial slider is a state-based carousel
- [ ] Sharp-corner design: border-radius 0 on buttons, inputs, cards, tabs; `.main_btn` inset-border + bottom-right corner-cut detail reproduced
