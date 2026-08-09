# Template: Vantage (Business & Finance Landing)

## Purpose

Vantage is a single-page business & finance landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Biznance" design (see TEMPLATES.md, Bootstrap category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a corporate consulting page with a purple/pink gradient
identity: a white navbar (Home / About / Services / Pages / Portfolio / Blog /
Contact + search icon), a full-width office-photo hero tinted with a
purple→pink gradient ("WE COMBINE BUSINESS WITH FINANCE" headline +
letter-spaced tagline + coral-gradient "Explore Us" and mint-gradient "Get
Free Quote" buttons), a "What we offer for you" 3-card offer row (photo card
with bordered text block that fills with the pink-purple gradient on hover), a
light-lavender "Our Top Rated Features" 4-column section, a "Our Recent
Completed Projects" filterable gallery (isotope filters + 6 photo tiles with a
gradient hover overlay and lightbox icon), a full-width gradient "Get a free
Quotation" contact band (contact photo left, white-on-gradient form with
name/phone/email/message), a light "Latest Posts from Blog" 3-card row, and a
near-black footer (#222222) with About / Navigation Links / Newsletter /
InstaFeed widgets. Vantage recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Biznance" — free business & finance website template
  (source: https://colorlib.com/wp/template/biznance/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/biznance/`
  (HTTP 200, 25.1KB) + stylesheets `css/bootstrap.css`,
  `css/style.css` (73.0KB), `css/responsive.css`. The rendered DOM is the
  reference below; the TEMPLATES.md screenshot (`biznance-free-template.jpg`,
  1200×946) confirms the visual design: stark white header with black
  "Biznance" logo, HOME active in purple (#8d83ff), a full-width office/team
  photo hero heavily tinted purple→pink (lighter at the bottom), centered
  white uppercase headline "WE COMBINE BUSINESS WITH FINANCE", small
  letter-spaced tagline "WE WORK HARD, WE RESULT PERFECT", two rectangular
  50px-tall buttons — coral/salmon "EXPLORE US" and mint-green "GET FREE
  QUOTE" — and a clean professional Roboto sans-serif look.
- **Section order (1:1):**
  1. `header_area` (white): `navbar-brand` logo "Biznance" (black bold
     Roboto; the logo image is `img/logo.png` — recreate as text logo),
     nav links `font: 500 12px/100px "Roboto"` uppercase #222222
     (Home active, About, Services, Pages ▾, Portfolio ▾, Portfolio
     Details, Elements, Blog ▾, Blog, Blog Details, Contact) with
     `margin-right: 45px` between items, hover/active color #8d83ff; a
     search icon at the far right (magnifier). Header sits above the
     hero (no transparency state observed in the static preview).
  2. `home_banner_area` (min-height 800px): `banner_inner .overlay` =
     full-bleed office photo (`img/banner/home-banner.jpg`; the purple→pink
     tint is baked into the photo — recreate with a picsum office photo +
     CSS gradient overlay, gradient `#e187f0 → #f27fd3 → #a276ff → #8889ff`
     at low opacity, lightening toward the bottom). `banner_content`
     (color #fff): `h3` "We Combine Business with Finance" (36px Roboto
     bold, uppercase, line-height 45px, margin-bottom 25px, white),
     `h5` "We work hard, we result perfect" (uppercase,
     letter-spacing 2.1px, white), then two buttons (margin-top 45px):
     `a.org_btn` "Explore Us" and `a.green_btn` "Get Free Quote".
  3. `offer_area p_120` (white, padding 120px 0): `offer_title` (centered,
     max-width 740px, margin-bottom 70px): `h5` "What we offer for you"
     (14px uppercase letter-spacing 2.1px #222222, margin-bottom 15px) +
     `p` 24px/36px #777777 "Plantronics with its GN Netcom wireless headset
     creates the next generation of wireless headset and other products
     such as wireless amplifiers, and wireless headset telephone." (with
     `<b>`-bold keywords). Below: 3 `offer_item` (col-lg-4): photo
     (`img/offer/offer-1.jpg` … `offer-3.jpg`, img-fluid) + `offer_text`
     (centered, `border: 1px solid #eeeeee`, padding 50px 30px,
     border-bottom radius 5px): `h4` 18px #222222 (margin-bottom 20px) +
     `p` #777777. Card hover: `offer_text` background fills with the
     pink-purple gradient (90deg #e187f0 → #f27fd3 → #a276ff → #8889ff)
     and `h4` turns white. (Copy text is generic lorem-style — the three
     cards repeat the same title "Addiction Whit Gambling"; paraphrase to
     three distinct offer titles + blurbs, same kind of content.)
  4. `feature_area p_120` (background #f9f9ff): `main_title` (centered,
     max-width 720px, margin-bottom 75px): `h2` 36px Roboto #222222
     "Our Top Rated Features" + `p` 14px/24px lorem subtitle. Below:
     4 `feature_item` (col-lg-3 col-sm-6, padding 60px 20px 60px 30px):
     `h4` title + `p` blurb (#777) — Unique Design, Appropriate UX,
     Perfect Visual, Different Layout. (No icon markup in the DOM — the
     tiles are text-only; keep them text-only.)
  5. `home_gallery_area p_120` (white): `main_title` "Our Recent Completed
     Projects" + lorem subtitle; `gallery_filter list` — isotope filter
     tabs: All Categories, Branding, Image Manipulation, Creative Work, Web
     Design, Print Material; `gallery_f_inner row imageGallery1`: 6
     `h_gallery_item` (inline-block, margin-bottom 45px): `g_img_item`
     (relative, overflow hidden, `border-radius: 5px`) with photo
     (`img/gallery/project-1.jpg` … `project-6.jpg`) + `:before` gradient
     overlay (90deg #e187f0 → #f27fd3 → #a276ff → #8889ff, revealed on
     hover) + `.light` lightbox anchor (expand/plus icon `img/gallery/
icon.png` centered, `translateY(-50%)`). Project titles (from alt
     text/hover): 3D Helmet Design, Client Project, 2D Vinyl Design,
     Creative Poster Design, Embosed Logo Design, 3D Disposable Bottle,
     3D Logo Design — paraphrase into 6 distinct portfolio titles.
  6. `home_contact_area` (full-width gradient band): left `left_img`
     (`img/left-img.jpg` — desk/workspace photo), right `h_right_form`
     (padding-left 95px, background 90deg gradient #e187f0 → #f27fd3 →
     #a276ff → #8889ff): `h_form_inner`: `h4` "Get a free Quotation"
     (white) + `form.home_contact_form`: inputs "Your name" / "Phone" /
     "Email address" (form-control), textarea "Wrtie message" (sic —
     original typo; recreate as "Write message"), submit `button.submit_btn`
     "Submit" (white/light button on the gradient).
  7. `latest_blog_area p_120` (background #f9f9ff): `main_title` "Latest
     Posts from Blog" + lorem subtitle; 3 `l_blog_item` (col-lg-4):
     `l_blog_img` photo (`img/blog/latest-post/l-post-1.jpg` … `-3.jpg`),
     `l_blog_text`: `date` link 12px #777777 "25 October, 2017 | By Mark
     Wiens", `h4` 18px #222222 (border-bottom 1px #eeeeee, padding-bottom
     20px; hover color #8d83ff) title, `p` excerpt #777. Titles: Addiction
     When Gambling Becomes A Problem / Computer Hardware Desktops And
     Notebooks And Handhelds / (third) — use the three ColorLib lorem
     blog titles or paraphrases of the same kind.
  8. `footer-area section_gap` (background #222222, padding-top 120px):
     4 widgets — `footer_title` 18px/500 white (margin-bottom 28px):
     "About Biznance" (paragraph #777), "Navigation Links" (Home, Feature,
     Services, Portfolio, Team, Pricing, Blog, Contact — links #777,
     hover #8d83ff), "Newsletter" (subscribe form: email input
     placeholder "Email Address" + `button.sub-btn`), "InstaFeed"
     (8-square Instagram thumbnail grid `img/instagram/Image-01.jpg` …
     `Image-08.jpg`). Copyright bar: "Copyright © All rights reserved |
     This template is made with by Colorlib" → replace with repo-standard
     footer credit.
- **Design tokens extracted from `css/style.css`:**
  - Brand accent: **#8d83ff** (purple/lavender) — nav hover/active,
    blog h4 hover, footer link hover, widget titles.
  - Signature gradient: **90deg linear-gradient(#e187f0 → #f27fd3 →
    #a276ff → #8889ff)** (pink → purple) — `offer_text` hover fill,
    `g_img_item:before` hover overlay, `h_right_form` contact band
    background.
  - Primary button gradient `.org_btn`: **to right #f766a5 → #f78762 →
    #f766a5** (pink/coral, 3-stop), `background-size: 200% auto`,
    hover slides `background-position: right center` (400ms ease-out).
  - Secondary button gradient `.green_btn`: **to right #73ca96 → #98d370
    → #73ca96** (mint green, 3-stop), same 200% slide behavior.
  - Buttons (both): padding `0 40px`, `line-height: 50px` (50px tall),
    `border-radius: 5px`, white text, 14px, weight 600, uppercase,
    font-family **Poppins**.
  - Fonts: **Roboto** for everything else (body, nav, headings h2/h3/h4 —
    h2 36px, hero h3 36px bold uppercase line-height 45px, offer h4 18px,
    blog h4 18px); **Poppins** for buttons. Google Fonts via `<link>`
    (Roboto 400,500,700 + Poppins 600).
  - Text colors: #222222 (headings/nav), #777777 (body/paragraphs),
    #8d83ff (accent links/hovers), white on dark/gradient.
  - Section backgrounds: hero = photo + gradient tint; offer / gallery =
    white; feature / latest blog = **#f9f9ff** (light lavender);
    contact band = pink-purple gradient; footer = **#222222**.
  - Cards/borders: `1px solid #eeeeee` (offer text block, blog h4
    divider); gallery tile radius 5px; offer text block bottom radius 5px.
  - Spacing rhythm: sections use `p_120` (120px padding-top/bottom);
    `main_title` margin-bottom 75px; `offer_title` margin-bottom 70px;
    hero min-height 800px; feature_item padding 60px 20px 60px 30px;
    gallery item margin-bottom 45px; footer padding-top 120px; nav links
    12px with `line-height: 100px`.
  - Section headings: `.main_title h2` 36px #222222 centered +
    14px/24px #777 subtitle; `.offer_title h5` 14px uppercase
    letter-spacing 2.1px #222222 + 24px/36px #777 paragraph.
- **Recreation decisions:** repo-standard navbar (white, sticky) with
  "Vantage" text logo (black bold Roboto), nav links (Home active, About,
  Services, Portfolio, Blog, Contact — flattened from the original's
  dropdowns, keep uppercase 12px), search icon (lucide `Search`); hero =
  full-width office photo (picsum) + purple→pink gradient overlay +
  headline + tagline + the two gradient buttons (org_btn pink/coral,
  green_btn mint, 50px tall, radius 5px, uppercase Poppins 14px/600,
  200% background slide on hover); offer section (3 photo cards, bordered
  text block, gradient fill + white h4 on hover); features (4 text-only
  tiles on #f9f9ff); gallery (filter tabs + 6 photo tiles, gradient hover
  overlay + lightbox icon; filters can be a simple client-side filter —
  keep All / Branding / Web Design / Print Material groups); contact band
  (full-width pink-purple gradient, split photo + form with name/phone/
  email/message + submit); blog (3 photo cards with date/title/excerpt,
  #f9f9ff bg); dark footer (#222222) with About / Navigation Links /
  Newsletter / InstaFeed (8 picsum thumbs) + copyright bar; all images
  picsum-seeded (`picsum.photos/seed/vantage-N/w/h`); Google Fonts
  Roboto + Poppins via `<link>`; icons via lucide-react (brand icons as
  inline SVG per repo convention).

Vantage lives in `apps/vantage` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header / navigation

The system SHALL render a white sticky header with a logo, primary
navigation, and a search icon.

#### Scenario: Header content

- **GIVEN** the Vantage page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Vantage" in bold black type on the
  left
- **AND** it SHALL show uppercase nav links Home (active), About, Services,
  Portfolio, Blog, and Contact
- **AND** the active/home link SHALL be colored in the brand purple
  (#8d83ff)
- **AND** it SHALL show a search icon on the right

#### Scenario: Mobile menu

- **GIVEN** the header is displayed on a narrow viewport
- **WHEN** the user activates the hamburger button
- **THEN** a menu SHALL open with the nav links
- **AND** activating the close control SHALL close the menu

### Requirement: Hero banner

The system SHALL render a full-width hero with a photo background tinted by
the purple→pink gradient, a headline, a tagline, and two gradient buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "We Combine Business with Finance" in
  large white bold uppercase type
- **AND** it SHALL show the tagline "We work hard, we result perfect" in
  smaller white letter-spaced uppercase type below the headline
- **AND** it SHALL show an "Explore Us" button with the pink/coral gradient
  (#f766a5 → #f78762) and a "Get Free Quote" button with the mint gradient
  (#73ca96 → #98d370)
- **AND** both buttons SHALL be 50px tall with 5px radius, white uppercase
  Poppins text, and a sliding gradient on hover

### Requirement: What we offer

The system SHALL render an offer section with a heading and three photo
cards whose text block fills with the gradient on hover.

#### Scenario: Offer cards

- **GIVEN** the page is rendered
- **WHEN** the offer section is displayed
- **THEN** it SHALL show the kicker "What we offer for you" with a short
  paragraph subtitle
- **AND** it SHALL show three cards in a row, each with a photo on top and a
  title + description inside a bordered (1px #eeeeee) text block
- **AND** each card title SHALL be 18px #222222 with body text in #777777

#### Scenario: Offer card hover

- **GIVEN** an offer card is displayed
- **WHEN** the user hovers over the card
- **THEN** the text block SHALL fill with the pink→purple gradient and the
  title SHALL turn white

### Requirement: Top rated features

The system SHALL render a light-lavender (#f9f9ff) section with a heading
and four text-only feature tiles.

#### Scenario: Feature tiles

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Our Top Rated Features" with a
  subtitle
- **AND** it SHALL show four tiles in a row: Unique Design, Appropriate UX,
  Perfect Visual, and Different Layout
- **AND** each tile SHALL show its title and a short description

### Requirement: Completed projects gallery

The system SHALL render a filterable gallery with filter tabs and photo
tiles that reveal a gradient overlay with a lightbox icon on hover.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Our Recent Completed Projects" with a
  subtitle
- **AND** it SHALL show filter tabs including All Categories, Branding,
  Image Manipulation, Creative Work, Web Design, and Print Material
- **AND** it SHALL show a grid of six project photo tiles with 5px rounded
  corners

#### Scenario: Gallery filtering

- **GIVEN** the gallery is displayed
- **WHEN** the user clicks a filter tab other than "All Categories"
- **THEN** the grid SHALL show only the projects belonging to that category

#### Scenario: Gallery hover

- **GIVEN** a project tile is displayed
- **WHEN** the user hovers over the tile
- **THEN** a pink→purple gradient overlay SHALL appear over the photo
- **AND** a lightbox/expand icon SHALL be shown in the center

### Requirement: Free quotation contact band

The system SHALL render a full-width gradient band with a photo on the left
and a contact form on the right.

#### Scenario: Contact band content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a workspace photo on the left
- **AND** it SHALL show the heading "Get a free Quotation" in white on a
  pink→purple gradient background
- **AND** it SHALL show a form with fields for name, phone, email address,
  and a message textarea
- **AND** it SHALL show a submit button

#### Scenario: Form validation

- **GIVEN** the quotation form is displayed
- **WHEN** the user submits the form with an invalid email or empty required
  fields
- **THEN** the form SHALL show per-field validation errors and SHALL NOT
  submit

### Requirement: Latest blog posts

The system SHALL render a light-lavender section with three blog post cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the latest blog section is displayed
- **THEN** it SHALL show the heading "Latest Posts from Blog" with a
  subtitle
- **AND** it SHALL show three cards, each with a photo, a date/byline
  ("25 October, 2017 | By Mark Wiens" style), a title that turns brand
  purple (#8d83ff) on hover, and an excerpt

### Requirement: Footer

The system SHALL render a near-black (#222222) footer with About,
Navigation Links, Newsletter, and InstaFeed widgets plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Vantage" widget with a description
  paragraph
- **AND** it SHALL show a "Navigation Links" widget (Home, Feature,
  Services, Portfolio, Team, Pricing, Blog, Contact) whose links turn
  brand purple on hover
- **AND** it SHALL show a "Newsletter" widget with an email input and a
  subscribe button
- **AND** it SHALL show an "InstaFeed" widget with an 8-thumbnail photo
  grid
- **AND** it SHALL show a copyright bar with the repo-standard footer
  credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Vantage app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, offer, features, gallery,
  contact band, latest blog, and footer inside the main landmark in the
  original's order
- **AND** the document title SHALL be "Vantage — Business & Finance"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- vantage` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → offer →
      features → gallery → contact band → latest blog → footer).
- [ ] Design tokens applied: brand purple #8d83ff (active nav, hover
      states), pink→purple gradient #e187f0→#f27fd3→#a276ff→#8889ff
      (hero tint, offer hover, gallery overlay, contact band), button
      gradients #f766a5→#f78762 (Explore Us) and #73ca96→#98d370 (Get
      Free Quote) with 200% slide hover, #222222 footer, #f9f9ff section
      backgrounds, #eeeeee borders, Roboto + Poppins fonts, 50px/5px-radius
      uppercase buttons, 120px section padding.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Biznance), preview URL,
      tokens, and renames.
