# Template: Blade (Barber Shop / Salon Landing)

## Purpose

Blade is a single-page barber-shop/salon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barcut" design (see TEMPLATES.md, Beauty category), built
under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light salon page with metallic-gold accents: a single-row
header with left links + centered scissors logo + right nav, a dark
full-width hero carousel (3 photos, overlay, centered white serif headline
"For All Occasion HairStyle is a Must Try Fashion" + circular gold
"Watch Intro Video" button), a split about section ("We Believe that
Interior beauty Lasts Long" + gold-framed photo), a "What We Can Do for You"
service row (Stylish Hair Cutting, Quality Gel Shave, Beard Trimming,
Executive Wash), a dark photo-background catalogue section with "Select Your
Style Shaveing" tabs + "View Gallery..." links, a "We Have All Famous
Barbers" team row (Peter Baker, Nancy Holmes, Gavin Hansen), a photo-
background testimonials carousel (Fanny Spencer quotes), a "Choose Your
Package" pricing row (Basic/Premium/Luxury at $79/$89/$99 with dashed-gold
borders, middle card active dark), a "Latest From Blog" row, and a black
footer with About Me / Newsletter / Follow Me columns. Blade recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Barcut" — free barber shop website template
  (source: https://colorlib.com/wp/template/barcut/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, 42.3KB) + stylesheet `css/main.css` (76.2KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`barcut-free-template.jpg`) confirms the visual design: dark moody warm
  hero photograph with centered white serif headline + circular gold video
  play button, white content sections, muted metallic gold/mustard accent on
  logo, pill buttons, and the decorative multi-layer gold frame around the
  about photo, charcoal headings with grey body text.
- **Section order (1:1):**
  1. Header (`header-area`, white bg, `z-index: 999999`): single-row
     `header-wrap` — `header-top d-flex justify-content-between`: left
     `menu-left` links (Home active, about, barbers, gallery), centered
     `col-3 logo` (scissors `img/logo.png`), right `navbar` with
     `menu-right` links (Home, about, pricing, barbers, gallery, "Pages"
     dropdown → Services / Elements, "Blog" dropdown → Blog / Blog Detail,
     Contact). `.nav-link`: 13px, uppercase, weight 500, letter-spacing 1px,
     color #000, padding 37px 0, margin-right 24px.
  2. Hero (`home-banner-area relative`): `owl-carousel home-banner-owl` of 3
     `banner-img` slides (`img/banner/b1.jpg|b2.jpg|b3.jpg`, each with
     `overlay overlay-bg` darkening); centered `text-wrapper`
     (`banner-content`, `top: 50%; left: 50%; translate(-50%,-50%)`, color
     #fff): H1 "For All Occasion HairStyle is a Must Try Fashion" (48px,
     #fff, capitalize), lorem paragraph, circular gold "Watch Intro Video"
     button (popup video).
  3. About (`section-gap-top about-area`): `single-about row
align-items-center` — left `col-lg-4 about-left` `about-content`: H1
     "We Believe that Interior beauty Lasts Long" (Playfair, line-height
     1.15em, margin-bottom 30px), paragraph, "Learn More" `primary-btn`
     (gold gradient pill, uppercase, letter-spacing 2px); right
     `col-lg-7 about-right` `about-thumb` with `about-img.jpg` +
     `about-img2.jpg` (gold decorative frame border).
  4. Services (`service-area section-gap`): `section-title` "What We Can Do
     for You" (h1 36px capitalize) + intro copy; 4 `single-service` cards
     (col-lg-3): image (`service1.jpg`…`service4.jpg`) with bottom caption
     `h4` (white, `background: rgba(0,0,0,0.3)`, padding 20px) + top-left
     tab icon (`img/tab/icon1.png`…`icon4.png`): Stylish Hair Cutting,
     Quality Gel Shave, Beard Trimming, Executive Wash.
  5. Catalogue (`section-gap catalogue-area`): `background-image:
url(../img/catalogue-bg.jpg)`, cover; `tab-contact-wraper` — heading
     "Select Your Style Shaveing" + 4 tab panels, each with copy paragraph
     - "View Gallery..." `view-btn` (block, uppercase, #000, 12px, weight
       500, letter-spacing 2px, margin-top 30px; hover color #bb9236).
  6. Team (`team-area section-gap`): `section-title` "We Have All Famous
     Barbers" + intro; 3 `single-team-member` cards
     (`img/team/person1.jpg`…`person3.jpg`): Peter Baker (Head hair Cut
     Specialist), Nancy Holmes (Spa & Makeup Specialist), Gavin Hansen
     (Hair Styling Expert).
  7. Testimonials (`testimonials-area section-gap-top`):
     `background-image: url(../img/testimonial/testi-bg.jpg)`, cover,
     max-height 535px; owl-carousel of Fanny Spencer quote slides —
     `quote.png` icon + lorem quote + avatar (`t1.png`…`t4.png`) + name
     "Fanny Spencer".
  8. Pricing (`price-area section-gap-top`): `section-title` "Choose Your
     Package" + intro; 3 `single-price` cards (col-lg-4): `top-sec` h4
     package name + p "Standard Package", `bottom-sec` h1 price (36px, 700,
     Roboto, `border-top/bottom: 1px dashed #bb9236`, padding 30px 0),
     `end-sec` ul of 5 features (Basic hair Cut, Basic Shave, Basic Head
     Wash, Basic Body Massage, Basic Snacks) + `primary-btn price-btn
mt-40` "Order Now". Middle card has `active` class:
     `background: #222` with gold `top-sec h4` / `bottom-sec h1`.
     Prices: Basic $79.00, Premium $89.00, Luxury $99.00.
  9. Blog (`blog-area`): `section-title` "Latest From Blog" + intro; 3
     `single-blog` cards (`img/lst-blog/blog1.jpg`…`blog3.jpg`): `blog-meta`
     - `blog-title` h4 "Portable Fashion for women".
  10. Footer (`footer-area section-gap`, `background: #000000`):
      `row footer-inner` — "About Me" col (`col-lg-5`): intro copy + social
      icons; "Newsletter" col (`f-widget news-widget`): "Stay updated with
      our latest trends" + `subscribe_form` (`input-group` email input +
      `sub-btn` gold gradient subscribe button); "Follow Me" col
      (`col-lg-2 social-widget`): "Let us be social" + social icons;
      `col-lg-12 ab-widget` copyright bar: "Copyright © All rights reserved
      | This template is made with Colorlib".
- **Design tokens extracted from `css/main.css`:**
  - Fonts: **"Playfair Display"** (serif, all headings h1–h6, color #000,
    line-height 1.2) + **"Roboto"** (body: 16px, weight 500, line-height
    26px, color #777; buttons and nav 12–13px). Loaded via Google Fonts
    `<link>` (no @import found in main.css — the demo page uses the
    standard Google Fonts link).
  - Brand color: **metallic gold #ba9236** with lighter highlight **#fdc136**
    (also dark variant #bb9236, darkest #92732b). Most-used hex in the
    stylesheet (68 occurrences of #ba9236).
  - Brand gradient (buttons, gallery overlay, newsletter sub-btn):
    `linear-gradient(to right, #ba9236 0%, #fdc136 51%, #ba9236 100%)`
    with `background-size: 200% auto`; hover shifts
    `background-position: right center`.
  - Buttons: `.primary-btn` = gold gradient pill, `border-radius: 50px`,
    `padding: 0 38px`, `line-height: 50px`, #fff, Roboto 12px weight 500,
    uppercase, `box-shadow: 0 10px 30px rgba(187, 146, 54, 0.3)`. `.price-btn`
    = `background: #222`, #fff, uppercase, letter-spacing 2px,
    `padding: 0 57px`. `.view-btn` = transparent, #000 uppercase 12px
    letter-spacing 2px; hover `color: #bb9236`.
  - Section titles: `.section-title h1` 36px, capitalize, Playfair.
  - Hero H1: 48px, #fff, capitalize, Playfair.
  - Price cards: `bottom-sec h1` 36px weight 700 Roboto with dashed #bb9236
    top/bottom borders; active card `background: #222`, gold h4/h1 on hover
    and active.
  - Section backgrounds: header #fff; hero dark photo + `overlay-bg`;
    catalogue + testimonials photo backgrounds (cover); footer #000000;
    service captions on `rgba(0,0,0,0.3)`.
  - Secondary palette present in CSS but NOT home-page brand: #f9f9ff,
    #4cd3e3, #38a4ff, #f4e700, #f44a40, #6382e6, #e66686 (elements/demo
    styles).
- **Recreation decisions:** repo-standard Navbar (site name "Blade", Home
  link, dark-mode toggle) + Footer chrome; light theme kept as the default
  with the gold brand; hero = carousel of 3 seeded images with overlay +
  centered Playfair headline + circular gold "Watch Intro Video" button
  (video modal or link placeholder); about split with gold-framed image;
  4 service cards with image + bottom caption + icon; catalogue section on a
  dark image background with 4 style tabs + "View Gallery..." links; team
  row of 3 barber cards; testimonials carousel on photo background; 3
  pricing cards with dashed-gold price borders and active (dark) middle
  card; blog row of 3 cards; black footer with About / Newsletter (success-
  state form) / Follow Me columns; all images picsum-seeded
  (`picsum.photos/seed/blade-N/w/h`); Google Fonts via `<link>`.

Blade lives in `apps/blade` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Blade", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Blade page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Blade" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero carousel

The system SHALL render a full-width dark hero carousel with a level-1
headline, supporting copy, and a circular video button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "For All Occasion HairStyle is a Must Try Fashion") in white Playfair
- **AND** it SHALL show supporting copy
- **AND** it SHALL show a circular gold "Watch Intro Video" button
- **AND** the hero SHALL cycle through at least two slides (images with a dark overlay)

### Requirement: About section

The system SHALL render an about section with a heading, supporting copy, a
"Learn More" button, and an image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "We Believe that Interior beauty Lasts Long")
- **AND** it SHALL show at least one paragraph and a gold "Learn More" button
- **AND** it SHALL show an image beside the text

### Requirement: Services

The system SHALL render a services section with a heading and at least four
service cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show a section heading (e.g. "What We Can Do for You")
- **AND** it SHALL render service cards, each with an image, an icon, and a caption (e.g. "Stylish Hair Cutting", "Quality Gel Shave", "Beard Trimming", "Executive Wash")

### Requirement: Catalogue / gallery links

The system SHALL render a catalogue section with a heading, style tabs, and
"View Gallery..." links.

#### Scenario: Catalogue content

- **GIVEN** the page is rendered
- **WHEN** the catalogue section is displayed
- **THEN** it SHALL show a heading (e.g. "Select Your Style Shaveing")
- **AND** it SHALL render at least two style tabs, each with copy and a "View Gallery..." link

### Requirement: Team

The system SHALL render a team section with a heading and at least three
barber cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show a section heading (e.g. "We Have All Famous Barbers")
- **AND** it SHALL render barber cards, each with a photo, a name (e.g. "Peter Baker"), and a specialty (e.g. "Head hair Cut Specialist")

### Requirement: Testimonials

The system SHALL render a testimonials carousel with at least one quote slide
on a photo background.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL render quote slides, each with a quote, an avatar image, and an author name (e.g. "Fanny Spencer")

### Requirement: Pricing

The system SHALL render a pricing section with a heading and three pricing
cards, one of which is active.

#### Scenario: Pricing cards

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show a section heading (e.g. "Choose Your Package")
- **AND** it SHALL render pricing cards, each with a package name (e.g. "Basic Hair Cut & Shave"), a price (e.g. "$79.00"), a feature list (e.g. "Basic hair Cut", "Basic Shave", "Basic Head Wash", "Basic Body Massage", "Basic Snacks"), and an "Order Now" button
- **AND** exactly one card SHALL be styled as active (dark background with gold accents)

### Requirement: Blog

The system SHALL render a blog section with a heading and at least three blog
cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show a section heading (e.g. "Latest From Blog")
- **AND** it SHALL render blog cards, each with an image, meta, and a title (e.g. "Portable Fashion for women")

### Requirement: Footer

The system SHALL render a black footer with the site name, link/info columns,
a newsletter form, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an about column with social links
- **AND** it SHALL show a newsletter form with an email input and subscribe button
- **AND** it SHALL show a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the footer is rendered
- **WHEN** the user submits the newsletter form with a valid email
- **THEN** the form SHALL show a success message
- **AND** the email input SHALL no longer be present

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Blade app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Blade — Barber Shop Template"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- blade` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero carousel →
      about → services → catalogue → team → testimonials → pricing → blog →
      footer).
- [ ] Design tokens applied: metallic gold #ba9236 / #fdc136 brand gradient
      pill buttons (radius 50px), Playfair Display headings + Roboto body,
      dashed #bb9236 price borders, active dark #222 pricing card, photo-
      background catalogue/testimonials sections, black footer.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Barcut), preview URL, tokens,
      and renames.
