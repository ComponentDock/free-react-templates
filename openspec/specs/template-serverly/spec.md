# Template: Serverly (Hosting Landing)

## Purpose

Serverly is a single-page web-hosting landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Bhost" design (see TEMPLATES.md, Bootstrap category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern hosting page with a dark navy hero: a transparent
header over a parallax chart-photo background, a server icon + "Choose the
perfect hosting" headline, a white pill domain-search bar (extension
dropdown + gradient "search" button), and an overlapping white domain-pricing
strip (.com $3.99, .net $1.99, .org $2.99, .io $3.99, .info $13.99). Below,
on white: a "Why Choose us?" section with three icon features (Server
Protection, CloudFlare Integration, 30 Day Money-back), a "The package 4 you"
pricing row with three wave-header plan cards (beginner Free, recommended
$29.90, professional $59.90, each with a 5-point feature list and an "order
plan" pill button), two split feature sections ("Choose the best service"
with a bullet list and "The best servers" with numbered 01./02./03. items),
and a dark footer (#21263a) with a gradient "Need Help? Call Us 24/7" phone
bar, three link columns (Hosting Packages, Our Services, Useful Links), a
logo + contact-info column with payment cards and social icons, and a
copyright bar. Serverly recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Bhost" — free web hosting website template
  (source: https://colorlib.com/wp/template/bhost/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/bhost/`
  (HTTP 200, 32.3KB) + stylesheets `styles/main_styles.css` (20.9KB) and
  `styles/responsive.css` (5.2KB, CRLF line endings). The rendered DOM is the
  reference below; the TEMPLATES.md screenshot (`bhost-free-template.jpg`,
  1200×946) confirms the visual design: dark navy hero with a faint
  chart/graph background image, circular server-stack icon, large white
  headline "Choose the perfect hosting", white pill domain-search bar with a
  purple gradient SEARCH button and ".com" dropdown, white domain-pricing
  strip directly beneath, then a white "Why Choose us?" section; header has
  the white "bHost" logo, centered nav, small utility links (Webmail, Chat,
  Login) and a purple pill phone button; overall aesthetic is modern
  dark-navy / blue-purple gradient / white with yellow hover accents.
- **Section order (1:1):**
  1. `header trans_400` (absolute, transparent over hero): logo
     `<span>b</span>Host` (logo `a` 28.3px/700 white; span #416ecc
     uppercase), `main_nav` links Home / About us / Services / News /
     Contact, `header_links` (Webmail, Chat, Login), `.phone` pill
     (`border-radius: 22px; background: linear-gradient(to right, #487fee,
#b632fa)`; height 43px) with phone icon + "652-345 3222 11",
     hamburger → full-screen `menu` (bg #020c22) with nav + phone. Header
     scrolled state: `background: #020c22; border-bottom: solid 1px
#b334fa`.
  2. `home` (height 892px; `parallax_background` with
     `data-image-src="images/index.jpg"`, dark navy chart photo):
     `home_icon` (63px circle, `images/icon_1.svg` server icon),
     `home_title` "Choose the perfect hosting" (60px/600/white,
     line-height 1.2, margin-top 42px), `domain_search`: white pill input
     (height 70px, `border-radius: 35px`, padding-left 58px, placeholder
     "Your domain name", 18px/500, placeholder color #6b6b6b) with
     `domain_search_dropdown` (width 319px, height 70px, bg #ece3fd,
     shows selected ".com", options .com/.io/.net) and
     `domain_search_button` (193×70, `border-radius: 35px`, gradient
     #487fee→#b632fa, uppercase "search").
  3. `domain_pricing` (white rounded card, `margin-top: -80px`,
     `border-radius: 50px`, padding 61px left/right, height 140px list):
     5 items — `<span>.</span>com $3.99`, `.net $1.99`, `.org $2.99`,
     `.io $3.99`, `.info $13.99`; dot+TLD span 30px/600 color #03dd03;
     price 18px color #808080; TLD name colors: li:first #005cc3,
     nth-2 #a736df, nth-3 #fa9900, nth-4 #df36b9, nth-5 #242424;
     TLD text 24px/700.
  4. `why` (bg #FFFFFF, padding 42px top / 100px bottom): `section_title`
     "Why Choose us?" + `section_subtitle` lorem (14px), `why_row` of 3
     `icon_box_1 text-center` (col-lg-4): `icon_box_1_image` 158×158
     (`images/icon_2.svg` … `icon_4.svg`), `icon_box_1_title` 24px,
     `icon_box_1_text` 14px — Server Protection, CloudFlare Integration,
     30 Day Money-back.
  5. `pricing` (bg #FFFFFF): `section_title` "The package 4 you" +
     subtitle, `pricing_row` of 3 `pricing_item trans_200` (col-lg-4):
     white card `border: solid 2px #f1f6f9`; `pricing_item_background`
     (absolute gradient #487fee→#b632fa, hidden; visible on hover);
     `pricing_title_background` height 218px with inline SVG wave
     (`<path class="wave_path" fill="url(#grad_1)">`, gradient stops
     #487fee→#b632fa; hover fill url(#grad_2) #9cb9f6→#d691fc);
     `pricing_title` 14px/600 white uppercase — beginner / recommended /
     professional; `pricing_price` 48px/500 white (+ `<span>` 24px:
     "90"; `<div>` "Per Month" or "Always"); `pricing_content` list of 5
     features with 13px `check_svg` check icon + text 14px/500 #92a4b8:
     "2 E-mail Addresses", "25 GB Space", "24h Live Support",
     "Documentation inside", "SEO Plan"; `pricing_button` (white pill
     193×72, radius 36px, uppercase 14px/700 "order plan"; hover bg
     #ffc016, white text). Card hover: border transparent, gradient
     background visible, `box-shadow: 0px 21px 29px rgba(0,0,0,0.41)`,
     check svg + list text white. Below: `pricing_text` lorem paragraph.
  6. `c_right` (bg #FFFFFF, padding-top 111px): split row — left content:
     `section_title` "Choose the best service", `c_right_text` paragraph,
     `content_list_1 c_right_list` 3 bullet items, `c_right_button`
     "order plan"; right `c_right_image` (`images/pic_1.png`).
  7. `c_left` (bg #FFFFFF, padding 105px top / 154px bottom): split row —
     left content: `section_title` "The best servers",
     `content_list_2 c_left_list` 3 numbered items (01. / 02. / 03. with
     paragraphs), `c_left_button` "order plan"; right `c_left_image`
     (`images/pic_2.png`).
  8. `footer`: `footer_phone` bar (gradient #487fee→#b632fa;
     left "Need Help? Call Us 24/7" 18px/600 white, right phone icon +
     "652-345 3222 11" 36px/600 white); `footer_content` (bg #21263a,
     padding 149px top / 51px bottom): 3 link columns
     (`footer_title` 18px/600 white + `footer_list` links) — "Hosting
     Packages" (Cloud Hosting, Web Hosting, Reseller Hosting, VPS
     Hosting, Dedicated Servers, Windows Hosting, Linux Servers), "Our
     Services" (Web Design, Logo Design, Domains Register, Search
     Advertising, Email Marketing), "Useful Links" (About Us,
     Testimonials, Services, News, Contact); 4th column: `logo
footer_logo` ("bHost"), `footer_info` contact list (Address 1481
     Creekside Lane Avila Beach, CA 931 / Phone +53 345 7953 32453 /
     E-mail yourmail@gmail.com), `cards` (5 payment card images), `social
footer_social` icons; `copyright_bar` (bg #181d2e, height 44px,
     12px; "Copyright © All rights reserved | This template is made with
     by Colorlib" → replace with repo-standard footer credit).
- **Design tokens extracted from `styles/main_styles.css`:**
  - Primary gradient: **linear-gradient(to right, #487fee, #b632fa)**
    (blue → purple) — `.phone` pill, `domain_search_button`,
    `pricing_title_background` wave (grad_1), `pricing_item_background`
    hover, `footer_phone` bar, `.button::before` hover sweep (3-stop:
    #b632fa → #487fee → #b632fa, 400ms translateX(50%)).
  - Dark navy: **#020c22** (scrolled header, full-screen menu), **#21263a**
    (footer content), **#181d2e** (copyright bar).
  - Neutrals: white **#FFFFFF** (text on dark, cards, search input,
    domain-pricing strip), light border **#f1f6f9** (pricing card
    border), secondary text **#92a4b8** (pricing list, footer list,
    section subtitle), **#6b6b6b** (input placeholder), **#808080**
    (domain prices), #a5a5a5.
  - Accent yellow **#ffc016** (`pricing_button` hover bg).
  - Domain TLD colors: #03dd03 (dot/TLD), #005cc3, #a736df, #fa9900,
    #df36b9, #242424 (per-item name colors).
  - Logo accent **#416ecc** (`logo a span`), scrolled header border
    #b334fa.
  - Font: **'Montserrat', sans-serif** (weights 300–900 via Google Fonts
    `https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,
700,800,900` — free, use directly via `<link>`).
  - Buttons `.button`: 193×72, `border-radius: 36px`, overflow hidden,
    uppercase 14px/700 white text, white/transparent bg with gradient
    `::before` sweep on hover (400ms). `domain_search_button`:
    193×70, radius 35px, solid gradient. `pricing_button`: white pill,
    hover bg #ffc016.
  - Headings: base `h2` 36px; `home_title` 60px/600 (line-height 1.2,
    margin-top 42px); `pricing_price` 48px/500 + span 24px;
    `footer_phone` phone 36px/600, label 18px/600; `icon_box_1_title`
    24px; `footer_title` 18px/600.
  - Spacing: home 892px; why 42/100; pricing row margin-top 104px;
    c_right padding-top 111px; c_left 105/154; footer content 149/51;
    copyright 44px; domain_pricing margin-top -80px (overlap).
  - Section backgrounds: home = parallax dark photo (index.jpg); why /
    pricing / c_right / c_left = solid white; footer = #21263a;
    copyright = #181d2e.
- **Recreation decisions:** repo-standard navbar (transparent over hero,
  dark #020c22 on scroll) with "Serverly" logo ("S" accent #416ecc +
  "erverly" white), nav links (Home active, About us, Services, News,
  Contact), utility links (Webmail, Chat, Login), gradient phone pill,
  hamburger menu with full-screen overlay; hero = parallax-style dark
  section (static gradient/img, no external parallax lib) with server icon
  (lucide `Server`), "Choose the perfect hosting" headline, domain search
  bar (input + extension dropdown .com/.io/.net + gradient search button),
  white overlapping domain-pricing strip (5 TLDs with per-item colors);
  Why Choose us (3 icon features — lucide ShieldCheck, Cloud, RotateCcw);
  pricing row (3 wave-header cards: Free / $29.90 / $59.90, gradient wave
  header via inline SVG, 5 check-list features, "order plan" pill button,
  hover: gradient border + yellow button); two split features sections
  ("Choose the best service" bullet list / "The best servers" numbered
  01-03 list) with "order plan" buttons; dark footer with gradient
  "Need Help? Call Us 24/7" phone bar, 3 link columns, contact info +
  payment card placeholders + social icons, copyright bar; all images
  picsum-seeded (`picsum.photos/seed/serverly-N/w/h`); Google Fonts
  Montserrat via `<link>`; icons via lucide-react.

Serverly lives in `apps/serverly` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a header over the hero with a logo, primary
navigation, utility links, a phone pill, and a hamburger menu.

#### Scenario: Header content

- **GIVEN** the Serverly page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Serverly" with the leading "S"
  styled in the accent blue (#416ecc)
- **AND** it SHALL show nav links Home (active), About us, Services, News,
  and Contact
- **AND** it SHALL show utility links Webmail, Chat, and Login
- **AND** it SHALL show a phone pill with a gradient (blue-to-purple)
  background and the number "652-345 3222 11"

#### Scenario: Mobile menu

- **GIVEN** the header is displayed
- **WHEN** the user activates the hamburger button
- **THEN** a full-screen dark menu SHALL open with the nav links and phone
  number
- **AND** activating the close control SHALL close the menu

### Requirement: Hero with domain search

The system SHALL render a dark hero with an icon, a headline, and a
domain-search form.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a server icon above the headline
- **AND** it SHALL show the headline "Choose the perfect hosting" in large
  white bold type
- **AND** it SHALL show a white pill search input with placeholder "Your
  domain name"

#### Scenario: Domain search interaction

- **GIVEN** the domain search form is displayed
- **WHEN** the user opens the extension dropdown and selects an extension
  (e.g. .io)
- **THEN** the dropdown SHALL show the selected extension
- **AND** the search form SHALL contain the selected extension for the query
- **AND** a "search" button with a blue-to-purple gradient SHALL submit the
  form

#### Scenario: Search submit

- **GIVEN** the domain search form is displayed
- **WHEN** the user types a domain name and submits the form
- **THEN** the form SHALL submit without reloading the page

### Requirement: Domain pricing strip

The system SHALL render an overlapping white strip listing domain
extensions with prices.

#### Scenario: Domain prices

- **GIVEN** the page is rendered
- **WHEN** the domain pricing section is displayed
- **THEN** it SHALL show five extensions with prices: .com $3.99, .net
  $1.99, .org $2.99, .io $3.99, and .info $13.99
- **AND** each item SHALL show its dot/extension in green and the price in
  grey, with distinct per-extension name colors

### Requirement: Why Choose Us

The system SHALL render a "Why Choose us?" section with three feature
cards.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the Why Choose us section is displayed
- **THEN** it SHALL show the heading "Why Choose us?" with a subtitle
- **AND** it SHALL show three cards in a row: Server Protection, CloudFlare
  Integration, and 30 Day Money-back
- **AND** each card SHALL show an icon, a title, and a short description

### Requirement: Pricing plans

The system SHALL render a pricing row with three plan cards, each with a
wave header, a price, a feature list, and an order button.

#### Scenario: Plan cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "The package 4 you" with a subtitle
- **AND** it SHALL show three cards: "beginner" (Free / Always), "
  recommended" ($29.90 / Per Month), and "professional" ($59.90 / Per
  Month)
- **AND** each card SHALL show a gradient wave header with the plan title
  and price in white
- **AND** each card SHALL list five features: 2 E-mail Addresses, 25 GB
  Space, 24h Live Support, Documentation inside, and SEO Plan, each with a
  check icon
- **AND** each card SHALL show an "order plan" button

#### Scenario: Plan card hover

- **GIVEN** a plan card is displayed
- **WHEN** the user hovers over the card
- **THEN** the card SHALL show the gradient background and a drop shadow
- **AND** the feature list text and check icons SHALL turn white
- **AND** the "order plan" button SHALL turn yellow (#ffc016)

### Requirement: Split feature sections

The system SHALL render two alternating split sections: "Choose the best
service" and "The best servers".

#### Scenario: Choose the best service

- **GIVEN** the page is rendered
- **WHEN** the first split section is displayed
- **THEN** it SHALL show the heading "Choose the best service" on the left
  with a paragraph and a three-item bullet list
- **AND** it SHALL show an image on the right
- **AND** it SHALL show an "order plan" button

#### Scenario: The best servers

- **GIVEN** the page is rendered
- **WHEN** the second split section is displayed
- **THEN** it SHALL show the heading "The best servers" on the left with
  three numbered items (01., 02., 03.) each with a paragraph
- **AND** it SHALL show an image on the right
- **AND** it SHALL show an "order plan" button

### Requirement: Footer

The system SHALL render a dark footer with a phone bar, link columns,
contact info, payment/social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a gradient bar with "Need Help? Call Us 24/7" and
  the phone number "652-345 3222 11"
- **AND** it SHALL show link columns "Hosting Packages" (Cloud Hosting, Web
  Hosting, Reseller Hosting, VPS Hosting, Dedicated Servers, Windows
  Hosting, Linux Servers), "Our Services" (Web Design, Logo Design, Domains
  Register, Search Advertising, Email Marketing), and "Useful Links" (About
  Us, Testimonials, Services, News, Contact)
- **AND** it SHALL show a footer logo, contact info (address, phone,
  e-mail), payment card placeholders, and social icons
- **AND** it SHALL show a copyright bar with the repo-standard footer
  credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Serverly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero with domain search, domain
  pricing strip, Why Choose us, pricing plans, both split feature sections,
  and footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Serverly — Web Hosting"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- serverly` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero + domain search
      → domain pricing strip → Why Choose us → pricing plans → Choose the
      best service → The best servers → footer).
- [ ] Design tokens applied: gradient #487fee→#b632fa (phone pill, search
      button, wave headers, footer phone bar, button hover sweep), dark
      navy #020c22/#21263a/#181d2e (header, footer, copyright), white
      cards, #92a4b8 secondary text, #ffc016 pricing-button hover, Montserrat
      font, pill buttons (radius 22–36px), domain strip colors per TLD.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Bhost), preview URL, tokens,
      and renames.
