# Template: Ripply (App Landing Page / Multi-purpose Template)

## Purpose

Ripply is a single-page app-landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Drimo" entry in TEMPLATES.md (listed under **Bootstrap (216)**
at line 378; duplicate rows at line 982 under **Business (365)**, line
1462 under **Creative (55)**, line 2037 under **Landing Page (96)** and
line 2232 under **Medical (32)** — same template, one app only), built
under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The reference is a soft-pastel app-landing one-pager built around a
lavender → sky-blue gradient family: a transparent navbar (logo left,
uppercase Poppins links right with a gradient pill on hover — Home,
FETURES, About, SCREENSHOT, Price, Blog, Contact + search icon); a
full-cover hero slider with a giant wordmark ("OnTouch"), white pill
"SIGN UP" buttons and a water-ripple background effect; a white
"POWERFUL APPS FETURES" section with 5 icon cards ("Unique Design"); a
light-periwinkle (#EFF1FF) "WHY CHOOSE US ?" band with 4 icon items
(Top Rated, Fetured App, Easy To Share, Best Apps); an "AIM CLIENT
SATISFACTION" section with 3 bullets (Easy To Use, 24/7 Support, Well
Documentation) and a testimonial quote by "Mr. Jonathon Smith"; a video
section; a "NOW INSTALL AVAILABLE ON" band on a light gradient
(#ede6fd → #d2e6fd) with two big pill buttons (Android gradient-fill,
App Store gradient-outline); an app-screenshots carousel; a pricing
table on #EFF1FF with 3 white cards (BASIC $00, PREMIUM $50 — featured
with shadow + gradient header — EXCLUSIVE $90, each with 4 features and
a gradient "PURCHASE NOW" pill); a "TEAM MEMBER" grid; a "FREQUENTLY
ASKED QUESTION" accordion (4 items, #EFF1FF); a "LATEST NEWS FROM BLOG"
2-card grid; and a #EFF1FF footer with a "SUBSCRIPTION NOW" email
input-group ("SEND"), three widgets (App Home links, Support links,
Contact Us form with name/phone/email/subject/message + "SEND NOW").
The brand signature is the soft gradient
`linear-gradient(to right, #d6c3fc 0%, #acc4fc 68%, #98c5fc 100%)`;
body/UI uses Poppins, buttons and pricing use Montserrat. Ripply
recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Drimo" — Free Unique Landing Page Website
  Template (source: https://colorlib.com/wp/template/drimo/). Listed in
  TEMPLATES.md under **Bootstrap (216)** (line 378; duplicate rows at
  line 982 under Business (365), line 1462 under Creative (55), line
  2037 under Landing Page (96) and line 2232 under Medical (32)).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/drimo/`
  (HTTP 200, static HTML). DOM fetched and analyzed (`/tmp/drimo-
preview.html`, 11.5 KB portal page); stylesheets fetched — the portal
  `css/style.css` (6.9 KB, minimal) and the demo's own
  `https://preview.colorlib.com/theme/drimo/drimo/css/style.css`
  (312 KB, bundled all-demos Sass-compiled stylesheet) — extracted for
  tokens; screenshot (`drimo-free-multi-purpose-template.jpg`,
  1200×946, TEMPLATES.md) reviewed visually in the browser. All
  references verified live.
- **Portal vs. demo (important):** the `/theme/drimo/` root is a
  demo-gallery PORTAL page, not the template itself: hero (wordmark
  "Drimo", typed rotating subtitles, "View Demos" / "Buy Drimo" pills,
  water-ripple background `hero-area#water`) → "Home onepage Demos"
  grid (11 items in 3 columns, links to `drimo/index.html` … `index-
11.html`) → "Drimo Blog Page Demos" grid (4 items in 4 columns:
  Blog List - 01 `blog.html`, Blog List - 02 `blog-right-sidebar.html`,
  Blog Details `single-blog.html`, Error `404.html`) → footer. The
  flagship page of the template — the one matching the product title —
  is `drimo/index.html` ("Drimo - App Landing Page Template", demo
  "OnePage - 01"). **Recreation decision: build the main demo page
  (`drimo/index.html`) 1:1** — it IS the app-landing template; the
  portal is only a gallery shell and is documented below for context.
- **Section order (1:1 from `drimo/index.html`):**
  1. Header `header.main_header_area` → `div.main_menu_area` →
     `nav.navbar.navbar-default` (transparent background, no border):
     `div.navbar-header` → `a.navbar-brand > img` (logo image → text
     wordmark "Ripply", line-height 84px), burger `button.navbar-toggle`
     (mobile); right-aligned `ul.nav.navbar-nav.navbar-right` — Home
     (active), FETURES (`#feature`), About (`#about`), SCREENSHOT
     (`#screenshot`), Price (`#price`), Blog (`#blog`), Contact
     (`#contact`) + search icon `i.fa.fa-search`. Links: Poppins 14px,
     uppercase, letter-spacing .28px, color #424242, padding 0 18px;
     hover state = gradient pill behind the link (`a:before`
     background linear-gradient(left, #d6c3fc 0%, #acc4fc 68%,
     #98c5fc 100%)) with a white rounded fill (`a:after` background
     #fff, border-radius 13px, 97% × 92%, z-index -1).
  2. Hero `section.main_slider_area` → `div#main_slider.rev_slider`
     (Revolution slider — recreate as a simple accessible carousel or a
     static hero): slide background image `img/home-slider/slider-1.png`
     (cover) + water-ripple overlay (jquery.ripples on `#water`);
     `div.slider_text_box` → big wordmark text "OnTouch" (tp-caption
     `first_text`, font-size up to 200px, white) + `a.slider_btn` "SIGN
     UP" (white pill: background #fff, width 140px, line-height 47px,
     border-radius 23.5px, Poppins 16px, color #6b6d6f, box-shadow
     0 4px 12.35px 0.65px rgba(0,0,0,0.09)); the DOM contains two
     slider layers (both "OnTouch" + "SIGN UP").
  3. Features `section.app_feature_area#feature` (background #fff,
     padding 100px 0): `div.main_title` — h2 "POWERFUL APPS FETURES"
     - lorem subtitle paragraph; 5 × `div.app_feature_item` (grid):
       circular icon + h4 "Unique Design" + lorem blurb (all five repeat
       the same placeholder copy in the DOM — vary the titles slightly
       for realism).
  4. Choose us `section.choose_us_area` (background #EFF1FF,
     min-height 770px, margin-top 90px): h2 "WHY CHOOSE US ?" +
     subtitle; 4 × item (icon + h4 + text): "Top Rated", "Fetured App",
     "Easy To Share", "Best Apps".
  5. Satisfaction `section.satisfaction_area#about` (clear both,
     padding 100px 0 0): h2 "AIM CLIENT SATISFACTION" + subtitle;
     3 × bullet (icon + h4 + text): "Easy To Use", "24/7 Support",
     "Well Documentation"; + testimonial quote block by "Mr. Jonathon
     Smith" (avatar + name).
  6. Video `section.video_area` (background #EFF1FF, margin-top 350px):
     centered video player (recreate as a video-thumbnail panel with a
     play button).
  7. Install app `section.install_app_area` (overflow hidden, gradient
     background linear-gradient(left, #ede6fd 0%, #d2e6fd 100%)):
     h2 "NOW INSTALL AVAILABLE ON", h4 "Create Your Apps Galary", two
     paragraphs (Lorem), `a.gradient_bg_btn` "Android" (width 200px,
     height 55px, border-radius 27.5px, line-height 55px, Montserrat
     18px, white, margin-right 15px) + `a.gradient_bor_btn` "App
     Store" (same shape, gradient outline / transparent fill).
  8. Screenshots `section.app_screen_area#screenshot` (background #fff,
     padding 100px 0 240px): `div.main_title` + app-screenshot
     carousel (phone-frame screenshots; recreate as a responsive grid
     or a simple carousel).
  9. Pricing `section.price_table_area#price` (background #EFF1FF,
     padding 100px 0): `div.main_title` — h2 "PRICING TABLE" + lorem;
     `div.price_table_inner` → 3 × `div.price_item` (width calc(100%/3),
     float left, text-align center, background #fff, padding-bottom
     44px, overflow hidden): `div.price_header` (background #d8cafc;
     middle card: gradient linear-gradient(left, #dacafc 0%,
     #9bccfc 100%)) — h3 plan name (Montserrat 18px 300, #424242, on a
     white pill max-width 155px, border-radius 17.5px, line-height
     35px) + h2 price (Montserrat 50px bold, #fff) + h6 "/month"
     (Montserrat 18px 300 #fff); `ul` of 4 features (Poppins 14px,
     #6b6d6f): "Free Useable", "Easily Can Useable 10GB", "Free
     Secuirity Service", "Dedicated Useable Account"; `a.price_btn`
     "PURCHASE NOW" (background gradient #dacafc → #9bccfc, white,
     14px uppercase, letter-spacing .28px, padding 0 28px, line-height
     35px, border-radius 17.5px). Plans: BASIC $00, PREMIUM $50,
     EXCLUSIVE $90. Middle card is featured: box-shadow
     0 0 20px rgba(0,0,0,0.14), transform scale(1.0001), padding-bottom
     60px, gradient header + gradient price_btn.
  10. Team `section.team_members_area` (background #fff, padding 100px
      0): h2 "TEAM MEMBER" + 4 × member card (photo + name e.g.
      "ROBERTO PE" + role; vary names/roles for realism).
  11. FAQ `section.question_area` (background #EFF1FF, padding 100px 0):
      h2 "FREE QUENTLY ASKED QUESTION" (sic — typo in the original;
      fix to "FREQUENTLY ASKED QUESTION", paraphrase allowed) + 4 ×
      accordion item, all reading "Is it a long established fact that a
      reader will be distracted ?" in the DOM (vary the questions for
      realism) with expandable answers.
  12. Blog `section.latest_blog_area#blog` (background #fff, padding
      100px 0): h2 "LATEST NEWS FROM BLOG" + 2 × post card (thumb +
      category, title — "Ontouch App news from blog", "On Graphics
      Design Post" — meta, read-more).
  13. Footer `footer.footer_area#contact` (background #EFF1FF,
      margin-top 100px): `div.subscrib_area` — h2 "SUBSCRIPTION NOW" +
      lorem, `div.input-group` → email input (placeholder "Enter Your
      E-Mail" with a mail icon) + `button.btn.btn-default` "SEND";
      `div.footer_widget_area` → 3 widgets: (a) "App Home" (Home,
      About, Features, Price, Screenshot, Download), (b) "Support"
      (FAQ, Help, Offer, Contact), (c) "Contact Us" — form
      `form.contact_widget_form` (name, phone, email, subject inputs +
      message textarea + full-width `button.submint_btn.form-control`
      "SEND NOW").
- **Design tokens (extracted from the demo stylesheet, 312 KB bundled):**
  - Signature brand gradient: `linear-gradient(to right, #d6c3fc 0%,
#acc4fc 68%, #98c5fc 100%)` — nav hover pill (`a:before`), hero
    accents. Secondary gradients in the same lavender-blue family:
    `#e3ccfc → #8fcdfc`, `#dacafc → #9eccfc` / `#9bccfc` (price header
    - price_btn), `#ede6fd → #d2e6fd` (install band), `#e0c3fc →
#8ec5fc` (dropdown hover), hot-pink variant `#ff0084 → #9b1be5`
      (bundled alt menus).
  - Section backgrounds: `#EFF1FF` light periwinkle — `.choose_us_area`,
    `.video_area`, `.price_table_area`, `.question_area`,
    `.footer_area`; `#fff` — features, screenshots, team, blog, header,
    cards; install band — gradient `#ede6fd → #d2e6fd`.
  - Text: `#424242` (nav links, plan-name pills), `#6b6d6f` (body
    copy, slider_btn text, price features), `#272727` / `#8e8e8e`
    (alt grays), white (text on gradients/dark).
  - Fonts: **Poppins** (body, nav, slider buttons, price list) +
    **Montserrat** (gradient buttons, price h2/h3/h6, dropdown
    items); Heebo/Roboto appear only in bundled alt demos.
  - Buttons: `.gradient_bg_btn` — 200×55px, border-radius 27.5px
    (pill), Montserrat 18px, white; `.gradient_bor_btn` — same pill,
    gradient border/outline; `.slider_btn` — white pill, radius
    23.5px, Poppins 16px, #6b6d6f, shadow `0 4px 12.35px 0.65px
rgba(0,0,0,0.09)`; `.price_btn` — gradient `#dacafc → #9bccfc`,
    radius 17.5px, 14px uppercase; `.submint_btn` — full-width form
    submit.
  - Price header: `#d8cafc` solid (side cards), gradient (featured
    middle card); plan-name pill: white bg, radius 17.5px, max-width
    155px.
  - Radii: 27.5px (install pills), 23.5px (slider pills), 17.5px
    (price pills), 13px (nav hover pill).
  - Spacing rhythm: sections `padding 100px 0`; app_screen bottom
    240px; choose_us `min-height 770px`, `margin-top 90px`; video
    `margin-top 350px`; footer `margin-top 100px`; nav brand
    line-height 84px.
- **Visual design (screenshot, 1200×946):** the portal page. Hero:
  smooth lavender/purple → light sky-blue gradient with faint dotted
  circle outlines, a white smartwatch render angled right, huge white
  uppercase "DRIMO" wordmark, "DRIMO ANDROID TEMPLATE" subtitle, small
  description line, two white pill buttons ("VIEW DEMOS" / "BUY
  DRIMO") with gray text, and a diagonal slashed bottom edge into the
  white section below. Below: white background, centered black
  uppercase "HOME ONEPAGE DEMOS" heading, and three mockup thumbnails
  (blue "OnTouch" login app, dark-blue "DASHBOARD / SMART ANALYTICS"
  with charts, orange/red landing page with "GET STARTED"). Clean,
  tech-focused, cool-toned aesthetic. The demo page (drimo/index.html)
  shares the same lavender-blue gradient language — the screenshot's
  hero styling (gradient bg, giant white wordmark, pill buttons,
  slashed edge) is the design target for the Ripply hero.
- **Recreation decisions:** hero slider → simple accessible carousel
  (prev/next + indicators) or static hero with the giant wordmark —
  no Revolution Slider dependency; typed rotating subtitle → static
  subtitle text (or CSS-only rotation); water-ripple effect → drop or
  approximate with a subtle CSS gradient animation (never copy the
  ripples.js asset); screenshots/team/blog/hero photos → seeded picsum
  placeholders (`picsum.photos/seed/ripply-<n>/<w>/<h>`: hero
  1920×800, choose-us icons via lucide, screenshots 280×560, team
  400×450, blog 600×400); icons → lucide-react (Smartphone,
  MonitorSmartphone, TabletSmartphone, Download, Star, ShieldCheck,
  Headphones, FileText, Users, Quote, Search, Menu, X, ChevronDown/
  Left/Right, Send, Mail, Phone; brand icons — none needed here);
  fonts → Google Fonts `<link>` (Poppins 300/400/500/600 + Montserrat
  300/400/600/700); logo → text wordmark "Ripply"; price data kept
  (BASIC $00 / PREMIUM $50 / EXCLUSIVE $90); FAQ title typo fixed;
  repeated placeholder names/copy varied for realism.

Ripply lives in `apps/ripply` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header and navbar

The system SHALL render a transparent navbar with a logo wordmark, a
right-aligned uppercase nav menu and a search icon.

#### Scenario: Navbar content

- **GIVEN** the Ripply page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the logo wordmark "Ripply" on the left
- **AND** it SHALL show the nav links Home, FETURES, About, SCREENSHOT,
  Price, Blog and Contact (Poppins 14px uppercase, `#424242`)
- **AND** it SHALL show a search icon at the end of the menu

#### Scenario: Nav link hover pill

- **GIVEN** the navbar is displayed
- **WHEN** the user hovers a nav link
- **THEN** the link SHALL show the gradient pill
  (`#d6c3fc → #acc4fc → #98c5fc`) with a white rounded fill
  (radius 13px)

#### Scenario: Mobile menu

- **GIVEN** the mobile viewport is active
- **WHEN** the user clicks the burger toggle
- **THEN** a menu panel SHALL open with the nav links

### Requirement: Hero slider

The system SHALL render a full-cover hero with a giant white wordmark,
a subtitle and pill-shaped SIGN UP buttons.

#### Scenario: Hero content

- **GIVEN** the Ripply page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the giant wordmark ("OnTouch") in white on a
  cover background image
- **AND** it SHALL show a subtitle line and a "SIGN UP" button styled
  as a white pill (radius 23.5px, Poppins 16px, `#6b6d6f`, soft
  shadow)

#### Scenario: Slide navigation

- **GIVEN** the hero is implemented as a carousel with two slides
- **WHEN** the user clicks the next/prev control
- **THEN** the visible slide SHALL change
- **AND** slide indicators SHALL reflect the active slide

### Requirement: Features section

The system SHALL render a white section with a title and five icon
cards.

#### Scenario: Feature cards

- **GIVEN** the features section is displayed
- **THEN** it SHALL show the centered title "POWERFUL APPS FETURES"
  with a subtitle paragraph
- **AND** it SHALL show 5 cards, each with a circular icon, a title
  ("Unique Design" and variations) and a blurb

### Requirement: Choose us band

The system SHALL render four icon items on the light-periwinkle
background.

#### Scenario: Choose-us items

- **GIVEN** the choose-us section is displayed
- **THEN** it SHALL show the title "WHY CHOOSE US ?" with a subtitle
- **AND** it SHALL show 4 items with icons and the titles "Top Rated",
  "Fetured App", "Easy To Share" and "Best Apps"
- **AND** the section SHALL have the `#EFF1FF` background

### Requirement: Client satisfaction

The system SHALL render three bullet points and a testimonial quote.

#### Scenario: Satisfaction content

- **GIVEN** the satisfaction section is displayed
- **THEN** it SHALL show the title "AIM CLIENT SATISFACTION"
- **AND** it SHALL show the 3 bullets "Easy To Use", "24/7 Support"
  and "Well Documentation"
- **AND** it SHALL show a testimonial quote attributed to
  "Mr. Jonathon Smith"

### Requirement: Video section

The system SHALL render a video panel on the `#EFF1FF` background.

#### Scenario: Video panel

- **GIVEN** the video section is displayed
- **THEN** it SHALL show a video thumbnail panel with a play button

### Requirement: Install app band

The system SHALL render an install band on the light gradient with two
pill buttons.

#### Scenario: Install buttons

- **GIVEN** the install band is displayed
- **THEN** it SHALL show the title "NOW INSTALL AVAILABLE ON" and a
  subtitle
- **AND** it SHALL show an "Android" button (gradient-fill pill,
  radius 27.5px, Montserrat 18px) and an "App Store" button
  (gradient-outline pill)
- **AND** the band SHALL use the `#ede6fd → #d2e6fd` gradient
  background

### Requirement: Screenshots section

The system SHALL render a title and a grid/carousel of app screenshots.

#### Scenario: Screenshot display

- **GIVEN** the screenshots section is displayed
- **THEN** it SHALL show a section title
- **AND** it SHALL show app screenshots in phone-frame panels

### Requirement: Pricing table

The system SHALL render three pricing cards with the middle card
featured.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is displayed
- **THEN** it SHALL show the title "PRICING TABLE" on the `#EFF1FF`
  background
- **AND** it SHALL show 3 white cards — BASIC `$00`, PREMIUM `$50`,
  EXCLUSIVE `$90` — each with a `#d8cafc` header, a "/month" suffix,
  4 features (Free Useable, Easily Can Useable 10GB, Free Secuirity
  Service, Dedicated Useable Account) and a gradient "PURCHASE NOW"
  pill (radius 17.5px)

#### Scenario: Featured middle card

- **GIVEN** the pricing cards are displayed
- **WHEN** the middle card (PREMIUM) is shown
- **THEN** it SHALL have the gradient header
  (`#dacafc → #9bccfc`), a drop shadow
  (`0 0 20px rgba(0,0,0,0.14)`) and a gradient "PURCHASE NOW" button

### Requirement: Team section

The system SHALL render a title and a grid of team member cards.

#### Scenario: Team cards

- **GIVEN** the team section is displayed
- **THEN** it SHALL show the title "TEAM MEMBER"
- **AND** it SHALL show 4 cards, each with a photo, a name and a role

### Requirement: FAQ accordion

The system SHALL render four expandable question items on the `#EFF1FF`
background.

#### Scenario: FAQ expansion

- **GIVEN** the FAQ section is displayed
- **THEN** it SHALL show the title "FREQUENTLY ASKED QUESTION"
- **AND** it SHALL show 4 questions with expandable answers
- **WHEN** the user clicks a question
- **THEN** its answer SHALL expand/collapse with an active state on the
  question

### Requirement: Latest blog posts

The system SHALL render a title and two blog post cards.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **THEN** it SHALL show the title "LATEST NEWS FROM BLOG"
- **AND** it SHALL show 2 cards, each with a thumbnail, a category, a
  title, meta and a read-more link

### Requirement: Footer

The system SHALL render a subscription input-group, three widgets and a
contact form on the `#EFF1FF` background.

#### Scenario: Subscription

- **GIVEN** the footer is displayed
- **THEN** it SHALL show the title "SUBSCRIPTION NOW" with an email
  input and a "SEND" button in an input-group

#### Scenario: Footer widgets

- **GIVEN** the footer is displayed
- **THEN** it SHALL show an "App Home" link column (Home, About,
  Features, Price, Screenshot, Download)
- **AND** it SHALL show a "Support" link column (FAQ, Help, Offer,
  Contact)

#### Scenario: Contact form

- **GIVEN** the footer contact widget is displayed
- **THEN** it SHALL show the "Contact Us" heading with a form
  containing name, phone, email, subject inputs, a message textarea
  and a full-width "SEND NOW" button

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Ripply app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark,
  all sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Ripply — App Landing Page
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-ripply`.
- [ ] App renders all sections 1:1 in the order above (navbar → hero →
      features → choose us → satisfaction → video → install app →
      screenshots → pricing → team → FAQ → blog → footer).
- [ ] Design tokens match the reference: signature gradient
      `#d6c3fc → #acc4fc → #98c5fc`, price gradient
      `#dacafc → #9bccfc`, install band `#ede6fd → #d2e6fd`, section
      bg `#EFF1FF`, price header `#d8cafc`, text `#424242` / `#6b6d6f`,
      Poppins + Montserrat via Google Fonts.
- [ ] Navbar: transparent, "Ripply" wordmark, uppercase links
      (Home/FETURES/About/SCREENSHOT/Price/Blog/Contact), search icon,
      gradient-pill hover (radius 13px), mobile burger opens the menu.
- [ ] Hero: full-cover background, giant white wordmark, subtitle,
      white pill "SIGN UP" buttons (radius 23.5px, Poppins 16px,
      `#6b6d6f`); carousel controls if implemented as a slider.
- [ ] Features: "POWERFUL APPS FETURES" title, 5 icon cards on white.
- [ ] Choose us: `#EFF1FF` band, 4 items (Top Rated, Fetured App,
      Easy To Share, Best Apps).
- [ ] Satisfaction: "AIM CLIENT SATISFACTION", 3 bullets (Easy To Use,
      24/7 Support, Well Documentation), testimonial by
      "Mr. Jonathon Smith".
- [ ] Video: thumbnail panel with play button on `#EFF1FF`.
- [ ] Install: `#ede6fd → #d2e6fd` gradient band, "NOW INSTALL
      AVAILABLE ON", Android (gradient pill 200×55, radius 27.5px,
      Montserrat 18px) + App Store (outline pill).
- [ ] Screenshots: title + phone-frame screenshot panels.
- [ ] Pricing: `#EFF1FF` bg, 3 white cards (BASIC $00 / PREMIUM $50
      featured / EXCLUSIVE $90), `#d8cafc` headers, 4 features each,
      gradient "PURCHASE NOW" pills (radius 17.5px); featured card has
      gradient header + shadow.
- [ ] Team: "TEAM MEMBER" title, 4 photo cards with varied names/roles.
- [ ] FAQ: "FREQUENTLY ASKED QUESTION" (typo fixed), 4 expandable
      items, active state on expansion.
- [ ] Blog: "LATEST NEWS FROM BLOG", 2 post cards (thumb, category,
      title, meta, read-more).
- [ ] Footer: subscription input-group (email + SEND), App Home and
      Support link columns, Contact Us form (name/phone/email/subject/
      message + full-width SEND NOW).
- [ ] Fonts (Poppins, Montserrat) loaded via Google Fonts `<link>`;
      no font, image, CSS or JS assets copied from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/ripply-<n>/<w>/<h>`); logo recreated as text
      wordmark.
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] 100% Vitest coverage on `apps/ripply` (lines/functions/branches/
      statements).
- [ ] PR description includes: source template (ColorLib "Drimo"),
      preview URL (https://preview.colorlib.com/theme/drimo/ —
      reachable; main demo https://preview.colorlib.com/theme/drimo/drimo/index.html),
      design tokens used, what differs (name, portal gallery not
      recreated, placeholder images, text logo, Google-font
      substitution).
