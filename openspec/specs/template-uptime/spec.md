# Template: Uptime (Hosting Landing)

## Purpose

Uptime is a single-page web-hosting landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hostza" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern hosting page with a dark-purple hero: a transparent
header over a low-poly mountain banner photo with a purple overlay, a green
tagline + big white headline "Go Big with your next Domain", and a white
domain-search bar (input + purple "search" button). Below, on white: a
"Choose your Hosting Plan" row of four plan cards (Share / VPS / Wordpress /
Dedicated Hosting, each with a large colored icon, "Start from $2.5/m" and an
outline green "Start Now" button), a "Core Features" section with
Features/Advanced Features tabs and a 2x2 grid of circle-icon features (Free
Domain for 1st Year, Free SSL Certificate, 30-Day Money-Back Guarantee, Spam
Protection), a "24h Dedicated Support" band on a background image with a green
"Get Start Now" button and a phone number, an "Our Data Centres" map with
pulsing location dots, a "Frequently Ask Question" accordion, a "Latest News"
row of three blog cards, a "Let's Launch your Website Now" CTA band on a
background image, and a dark-purple footer (#2E004B) with contact info +
social icons, two link columns, a newsletter form, and a copyright bar. Hidden
"Sign in" and "Registration" popup modals are triggered from the header login
link. Uptime recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Hostza" — free web hosting website template
  (source: https://colorlib.com/wp/template/hostza/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hostza/`
  (HTTP 200, 40.8KB) + stylesheet `css/style.css` (154KB, SCSS-compiled,
  `@import` Google Fonts Roboto 300–900). The rendered DOM is the reference
  below; the TEMPLATES.md screenshot (`hostza-free-template.jpg`, 1200×946)
  confirms the visual design: dark-purple hero with a low-poly mountain-range
  silhouette and a faint circle (sun/moon), small green tagline, large white
  headline "Go Big with your next Domain", white domain input + purple search
  button; header with a green logo icon + "Hostza" wordmark, centered nav with
  green underline on the active Home link, "log in" link and a green pill
  "Live Chat" button; white lower sections with dark-purple headings
  ("Choose your Hosting Plan"); overall aesthetic is modern flat hosting with
  deep purple / bright green / pastel icon accents.
- **Section order (1:1):**
  1. `header` → `main-header-area` (padding 0 150px; sticky state `background:
#2E004B`, padding 10px 150px, `box-shadow: 0px 3px 16px rgba(0,0,0,0.1)`,
     slide-down transition): `logo-img` (img/logo.png) left; `main-menu`
     center nav — home (active), Package, blog ▾ (submenu: blog,
     single-blog), pages ▾ (submenu: elements), Support, About, Contact —
     links white 16px/600 Roboto, text-transform capitalize; right
     `log_chat_area`: `login` link (`flaticon-user` icon + "log in", white
     16px, margin-right 50px, opens `#test-form` Sign in popup) +
     `live_chat_btn` (boxed_btn_green "Live Chat"); `mobile_menu` div
     (slicknav hamburger on <lg).
  2. `slider_area` → `single_slider slider_bg_1 overlay2` (height 100vh,
     `background-image: url(../img/banner/banner.png)` cover +
     `overlay2::before` bg #2E004B opacity .6): `slider_text text-center` —
     `p` "The Best Domain & Hosting Provider In The Area" (18px #00D363),
     `h3` "Go Big with your next Domain" (60px/400 white, line-height 70px,
     text-transform capitalize, margin 10px 0 50px), `find_dowmain_form`:
     white input (width 70%, height 60px, radius 3px left, padding 20px,
     placeholder "Find your domain") + button "search" (width 30%, height
     60px, bg #670080, white, text-transform capitalize, radius 3px right).
  3. `prising_area` (padding 200px top / 170px bottom): `section_title
text-center mb-100` — h3 "Choose your Hosting Plan" (42px/400 #2E004B)
     - p subtitle 16px #919191 ("Your domain control panel is designed for
       ease-of-use and allows for all aspects of your domains."); row of 4
       `single_prising` (col-xl-3 col-md-6 col-lg-6): card `border: 1px solid
#E0CCE6; border-radius: 5px; padding: 29px 23px; margin-bottom: 30px`;
       `prising_icon` `i` 65px colored — `.blue` #0181F5, `.lite_blue`
       #886CFE, `.pink` #FF87A3, `.yellow` #F3C306 (flaticon-servers,
       flaticon-hosting, flaticon-wordpress, flaticon-servers-1); h3 24px/500
       #2E004B (Share Hosting / VPS Hosting / Wordpress Hosting / Dedicated
       Hosting, margin-top 16px); `prising_text` (same copy on all four:
       "Easy drag and drop fully customizable mobile friendly"); `prise`
       "Start from <span>$2.5/m</span>" (14px; span 24px/500 #2E004B,
       padding-left 10px; margin 23px 0 30px); `boxed_btn_green2` "Start Now".
  4. `core_features` (padding-bottom 150px): row with `featuures_heading`
     h3 "Core Features" (left) and `featurest_tabs` nav (right): links
     "Features" (active) / "Advanced Features" — 16px #919191, margin-left
     17px, padding-bottom 37px; active: color #2E004B with `::before`
     underline `background: #00D363`; two tab panes each with a 2x2 grid of
     `single_features` (col-xl-6, margin-bottom 50px): `icon` 82px circle
     (radius 50%, font-size 25px, line-height 82px; default bg #EFF7FF /
     color #0181F5; `.blue` color #390055; `.pink` color #FF87A3 bg #FFF7F9;
     `.yellow` color #F3C306 bg #FFFBEF; hover: color #fff + bg #886CFE) +
     `features_info` h4 20px/400 #1F1F1F + p 16px/28. Feature set (both
     tabs): Free Domain for 1st Year, Free SSL Certificate, 30-Day
     Money-Back Guarantee, Spam Protection ("Our set he for firmament
     morning sixth subdue darkness creeping gathered divide our let god
     moving.").
  5. `dedicated_support support_bg` (padding 200px top/bottom;
     `background-image: url(../img/support/support_bg.png)` cover, centered):
     `support_info` (col-xl-5): h3 "24h Dedicated Support" (42px/500 white),
     p lorem, `get_started`: `boxed_btn_green` "Get Start Now" (padding 12px
     45px, margin-right 20px) + `phone_num` "+10 267 367 678 2678" (16px
     #00D363).
  6. `data_center_area` (padding-top 200px): `section_title text-center
mb-100` h3 "Our Data Centres" + subtitle; `location` (relative):
     `pulse_group` of 4 `span` markers (10px/10px circles, bg #670080,
     border-radius 50%) + `img/banner/map.svg` world map; each marker carries
     `address_on_hover` card (`address_inner`: fa map-marker icon + h3
     18px #1F1F1F "Sydney, Australia" + p "It is a long established fact
     that a reader").
  7. `faq_area` (padding-top 190px): `accordion_heading` h3 "Frequently Ask
     Question"; `#accordion` with 5 `card`s — `card-header` button
     (flaticon-info icon + text 24px #2E004B): "Is WordPress hosting worth
     it?", "What are the advantages of WordPress hosting over shared?",
     "Will you transfer my site?", "Why should I host with Hostza?", "How do
     I get started"; `card-body` lorem (collapsible, Bootstrap collapse).
  8. `latest_new_area` (padding 200px top / 170px bottom): `section_title`
     h3 "Latest News" + subtitle; 3 `single_news` (col-xl-4 col-md-6
     col-lg-4): `thumb` img (hover: img scale(1.2) zoom), `news_meta`
     "12 Jun, 2019 in <span>Hosting tips</span>" (12px), h3 24px #2E004B
     "Commitment to dedicated Support", `news_info` "Firmament morning
     sixth subdue darkness".
  9. `lets_launch launch_bg_1 overlay2` (padding 180px 0;
     `background-image: url(../img/banner/launch.png)` cover + #2E004B 60%
     overlay): `launch_text text-center` h3 "Let's Launch your Website Now"
     - p lorem + `chat`: `boxed_btn_green` (flaticon-chat icon + "Live
       Chat") + `boxed_btn_green2` "get start now".
  10. `footer` (bg #2E004B): `footer_top` (padding 145px top / 129px
      bottom): 4 `footer_widget`s — (a) `footer_logo` img +
      `footer_text` links "+10 783 467 3789" / "hostza@support.com" (16px
      #B2B2B2) + `socail_links` (fa-facebook-square, fa-twitter,
      fa-instagram); (b) `footer_title` "service" (22px/400 white,
      margin-bottom 40px) + links Hosting / Domain / Wordpress / Shared
      Hosting; (c) `footer_title` "Navigation" + Home / Rooms / About /
      News; (d) `footer_title` "Newsletter" + `newsletter_form` (white
      input height 45px, padding-left 20px + green #00D363 "Sign Up" button
      absolute right, white 14px) + `newsletter_text` "Subscribe newsletter
      to get updates" (16px #BABABA); `copy-right_text`: `footer_border`
      (border-top 1px rgba(255,255,255,0.2)) + `copy_right` "Copyright ©
      All rights reserved | This template is made with by Colorlib" (16px
      #919191) → replace with repo-standard footer credit.
  11. Popup modals (`white-popup-block mfp-hide`, opened from the login
      link): `popup_box` (white, width 558px, padding 60px 40px,
      border-radius 5px): `#test-form` "Sign in" (email + password inputs +
      green `boxed_btn_green` "Sign in" button) and `#test-form2`
      "Resistration" (email + password + confirm password + green "Sign Up"
      button); both with centered form logo.
- **Design tokens extracted from `css/style.css`:**
  - Brand dark purple: **#2E004B** — footer bg, sticky header bg, hero/CTA
    overlay (opacity .6), `section_title` h3, plan h3, `prise span`,
    FAQ question text, news h3, active feature-tab text.
  - Accent green: **#00D363** — `boxed_btn_green` bg, outline button
    border/text, hero tagline, `phone_num`, newsletter button, feature-tab
    active underline (`::before`), feature-icon hover bg companion.
  - Search purple: **#670080** — domain-search button, map pulse dots.
  - Plan icon colors: **#0181F5** (blue), **#886CFE** (lite_blue), **#FF87A3**
    (pink), **#F3C306** (yellow); icon chips: default bg #EFF7FF / icon
    #0181F5, `.blue` icon #390055, `.pink` bg #FFF7F9, `.yellow` bg
    #FFFBEF; hover: white icon on #886CFE.
  - Neutrals: **#919191** (section subtitle, tab links, copyright), **#B2B2B2**
    (footer text), **#BABABA** (newsletter note), **#1F1F1F** (feature h4,
    news h3 hover, address h3), **#E0CCE6** (plan card border), **#F9F9FF**
    (light lavender section tint, widely used), white cards/inputs.
  - Font: **'Roboto', sans-serif** (weights 300–900 via Google Fonts
    `https://fonts.googleapis.com/css?family=Roboto:300,300i,400,500,700,900&display=swap` —
    free, use directly via `<link>`).
  - Buttons: `boxed_btn_green` — filled green (bg #00D363, white 16px,
    padding 12px 30px, `border-radius: 30px`, border transparent; hover:
    transparent bg + green border/text); `boxed_btn_green2` — outline green
    (transparent bg, green border + text; hover: filled green + white text).
    Domain search: split bar — white input 70% + #670080 button 30%, both
    60px tall, radii 3px. Newsletter: white 45px input + absolute green
    button (14px white, padding 0 22px).
  - Headings: `section_title` h3 42px/400; slider h3 60px/400 (lh 70px);
    support h3 42px/500; plan h3 24px/500; news + FAQ 24px; feature h4
    20px/400; footer_title 22px/400; prise span 24px/500.
  - Spacing: hero 100vh; prising 200/170; core_features pb 150;
    dedicated_support 200/200; data_center pt 200; faq pt 190; latest news
    200/170; lets_launch 180/180; footer_top 145/129; header sticky 10px
    150px.
  - Section backgrounds: hero = banner.png + #2E004B 60% overlay; support
    band = support_bg.png cover; launch band = launch.png + overlay; footer
    = #2E004B; prising / core / data / faq / news = white (with #F9F9FF
    tints on icon chips).
- **Recreation decisions:** repo-standard navbar (transparent over hero →
  solid #2E004B on scroll with slide-down shadow) with "Uptime" logo (green
  accent icon + wordmark), nav links (home active, Package, blog/pages
  dropdowns, Support, About, Contact), "log in" link opening a Sign in modal,
  green "Live Chat" pill, hamburger mobile menu; hero = static banner-style
  dark-purple section (no parallax lib) with green tagline, "Go Big with your
  next Domain" headline, domain search form (white input + purple search
  button, submit without reload); 4 hosting plan cards (4-up grid, colored
  icon, title, text, "Start from $2.5/m", outline green "Start Now"); Core
  Features with Features/Advanced Features tabs (green underline on active)
  - 2x2 grid of circle-icon features (hover → purple chip); 24h Dedicated
    Support band (bg image) with green "Get Start Now" + phone; Our Data
    Centres with inline SVG world map + 4 pulsing dots + hover address cards;
    FAQ accordion (5 collapsible questions); Latest News (3 cards with image
    zoom hover); Launch CTA band (bg image + overlay) with Live Chat + get
    start now buttons; dark footer #2E004B (contact + social, service links,
    navigation links, newsletter form + Sign Up, copyright bar); Sign in /
    Registration modals from the login link; all images picsum-seeded
    (`picsum.photos/seed/uptime-N/w/h`); Google Fonts Roboto via `<link>`;
    icons via lucide-react.

Uptime lives in `apps/uptime` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a header over the hero with a logo, primary
navigation (including dropdowns), a login link, a Live Chat button, and a
mobile menu.

#### Scenario: Header content

- **GIVEN** the Uptime page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Uptime" with a green accent logo icon
- **AND** it SHALL show nav links home (active), Package, blog, pages,
  Support, About, and Contact
- **AND** the blog and pages links SHALL reveal dropdown submenus (blog →
  blog, single-blog; pages → elements)
- **AND** it SHALL show a "log in" link with a user icon
- **AND** it SHALL show a green pill "Live Chat" button

#### Scenario: Sticky header

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down past the hero
- **THEN** the header SHALL become fixed with a solid dark-purple (#2E004B)
  background and a drop shadow

#### Scenario: Mobile menu

- **GIVEN** the header is displayed at a small viewport
- **WHEN** the user activates the hamburger control
- **THEN** a mobile menu SHALL open with the nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero with domain search

The system SHALL render a dark-purple hero with a tagline, a headline, and a
domain-search form.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the tagline "The Best Domain & Hosting Provider In
  The Area" in green
- **AND** it SHALL show the headline "Go Big with your next Domain" in large
  white type
- **AND** it SHALL show a white search input with placeholder "Find your
  domain" next to a purple "search" button

#### Scenario: Search submit

- **GIVEN** the domain search form is displayed
- **WHEN** the user types a domain name and submits the form
- **THEN** the form SHALL submit without reloading the page

### Requirement: Hosting plans

The system SHALL render a "Choose your Hosting Plan" section with four plan
cards.

#### Scenario: Plan cards

- **GIVEN** the page is rendered
- **WHEN** the hosting plans section is displayed
- **THEN** it SHALL show the heading "Choose your Hosting Plan" with a
  subtitle
- **AND** it SHALL show four cards in a row: Share Hosting, VPS Hosting,
  Wordpress Hosting, and Dedicated Hosting
- **AND** each card SHALL show a large colored icon (blue, light-blue, pink,
  yellow), a title, a description, "Start from $2.5/m" with the price
  emphasized, and an outline green "Start Now" button

### Requirement: Core features with tabs

The system SHALL render a "Core Features" section with a Features /
Advanced Features tab switcher and a 2x2 grid of feature items.

#### Scenario: Feature tabs

- **GIVEN** the page is rendered
- **WHEN** the core features section is displayed
- **THEN** it SHALL show the heading "Core Features" with tabs "Features"
  (active) and "Advanced Features"
- **AND** the active tab SHALL be underlined in green
- **AND** switching tabs SHALL show the same four features: Free Domain for
  1st Year, Free SSL Certificate, 30-Day Money-Back Guarantee, and Spam
  Protection
- **AND** each feature SHALL show a circular icon chip, a title, and a
  description

#### Scenario: Feature hover

- **GIVEN** a feature item is displayed
- **WHEN** the user hovers over it
- **THEN** the icon chip SHALL invert to white on purple (#886CFE)

### Requirement: Dedicated support band

The system SHALL render a "24h Dedicated Support" section on a background
image.

#### Scenario: Support content

- **GIVEN** the page is rendered
- **WHEN** the support section is displayed
- **THEN** it SHALL show the heading "24h Dedicated Support" in white with a
  paragraph
- **AND** it SHALL show a green "Get Start Now" button
- **AND** it SHALL show the phone number "+10 267 367 678 2678" in green

### Requirement: Data centres map

The system SHALL render an "Our Data Centres" section with a map and
location markers.

#### Scenario: Map content

- **GIVEN** the page is rendered
- **WHEN** the data centres section is displayed
- **THEN** it SHALL show the heading "Our Data Centres" with a subtitle
- **AND** it SHALL show a world map with four pulsing location dots
- **AND** each dot SHALL show a hover card with a location name (e.g.
  "Sydney, Australia") and a short description

### Requirement: FAQ accordion

The system SHALL render a "Frequently Ask Question" accordion.

#### Scenario: Accordion items

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show the heading "Frequently Ask Question"
- **AND** it SHALL list five questions: "Is WordPress hosting worth it?",
  "What are the advantages of WordPress hosting over shared?", "Will you
  transfer my site?", "Why should I host with Hostza?", and "How do I get
  started"
- **AND** each question SHALL have an info icon

#### Scenario: Expand and collapse

- **GIVEN** the FAQ accordion is displayed
- **WHEN** the user activates a question
- **THEN** the corresponding answer SHALL expand
- **AND** activating the same question again SHALL collapse it

### Requirement: Latest news

The system SHALL render a "Latest News" section with three blog cards.

#### Scenario: News cards

- **GIVEN** the page is rendered
- **WHEN** the latest news section is displayed
- **THEN** it SHALL show the heading "Latest News" with a subtitle
- **AND** it SHALL show three cards, each with a thumbnail image, a meta line
  ("12 Jun, 2019 in Hosting tips"), a title, and a short excerpt
- **AND** hovering over a card SHALL zoom its thumbnail

### Requirement: Launch CTA band

The system SHALL render a "Let's Launch your Website Now" call-to-action
band on a background image.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the launch section is displayed
- **THEN** it SHALL show the headline "Let's Launch your Website Now" with a
  paragraph
- **AND** it SHALL show a green "Live Chat" button and an outline green "get
  start now" button

### Requirement: Footer

The system SHALL render a dark-purple footer with contact info, link
columns, a newsletter form, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the logo, a contact block (phone "+10 783 467 3789",
  e-mail "hostza@support.com" → renamed to the Uptime brand), and social
  icons
- **AND** it SHALL show a "service" column (Hosting, Domain, Wordpress,
  Shared Hosting) and a "Navigation" column (Home, Rooms, About, News)
- **AND** it SHALL show a newsletter form with an email input and a green
  "Sign Up" button, plus the note "Subscribe newsletter to get updates"
- **AND** it SHALL show a copyright bar with the repo-standard footer credit

### Requirement: Auth modals

The system SHALL render "Sign in" and "Registration" popup modals opened
from the login link.

#### Scenario: Sign in modal

- **GIVEN** the header is displayed
- **WHEN** the user activates the "log in" link
- **THEN** a "Sign in" modal SHALL open with email and password inputs and a
  green "Sign in" button
- **AND** closing the modal SHALL hide it

#### Scenario: Registration modal

- **GIVEN** the page is rendered
- **WHEN** the registration modal is shown
- **THEN** it SHALL contain email, password, and confirm-password inputs and
  a green "Sign Up" button

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Uptime app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero with domain search, hosting
  plans, core features, dedicated support, data centres, FAQ, latest news,
  launch CTA, and footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Uptime — Web Hosting"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- uptime` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero + domain search
      → hosting plans → core features → dedicated support → data centres →
      FAQ → latest news → launch CTA → footer).
- [ ] Design tokens applied: dark purple #2E004B (footer, sticky header,
      headings, overlays), green #00D363 (filled buttons, tagline, phone
      numbers, newsletter button, tab underline), #670080 search button,
      plan icon colors #0181F5/#886CFE/#FF87A3/#F3C306, icon chips
      #EFF7FF/#FFF7F9/#FFFBEF with #886CFE hover, #919191/#B2B2B2 neutrals,
      Roboto font, pill buttons (radius 30px), plan cards radius 5px.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Hostza), preview URL, tokens,
      and renames.
